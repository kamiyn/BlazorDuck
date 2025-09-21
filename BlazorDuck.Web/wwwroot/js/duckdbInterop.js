const state = {
    duckDbPromise: null,
    httpFsInitialized: false,
};

async function loadDuckDb(config) {
    if (!state.duckDbPromise) {
        state.duckDbPromise = (async () => {
            const moduleLoaderPath = `${config.bundleBasePath}/${config.moduleLoader}`;
            const loader = await import(moduleLoaderPath);
            const workerPath = `${config.bundleBasePath}/${config.mainWorker}`;
            const worker = new Worker(workerPath, { type: 'module' });
            const logger = new loader.ConsoleLogger();
            const db = new loader.AsyncDuckDB(logger, worker);
            await db.instantiate({
                mainModule: `${config.bundleBasePath}/${config.mainModule}`,
                pthreadWorker: `${config.bundleBasePath}/${config.pthreadWorker}`,
            });
            return { loader, db, worker };
        })();
    }

    return state.duckDbPromise;
}

async function ensureHttpFs(connection) {
    if (state.httpFsInitialized) {
        return;
    }

    try {
        await connection.query("INSTALL 'httpfs';");
    } catch (error) {
        const message = typeof error?.message === 'string' ? error.message : String(error ?? '');
        if (!message.includes('already installed')) {
            throw error;
        }
    }

    await connection.query("LOAD 'httpfs';");
    state.httpFsInitialized = true;
}

function toDisplayValue(value) {
    if (value === null || value === undefined) {
        return '';
    }

    if (typeof value === 'object') {
        return JSON.stringify(value);
    }

    return `${value}`;
}

export async function executeQuery(config, parquetUrl, sql) {
    if (!config) {
        throw new Error('DuckDB configuration is required.');
    }

    if (!parquetUrl) {
        throw new Error('A parquet URL must be provided.');
    }

    const { db } = await loadDuckDb(config);
    const connection = await db.connect();

    try {
        await ensureHttpFs(connection);
        const sourceLiteral = JSON.stringify(parquetUrl);
        try {
            await connection.query(`CREATE OR REPLACE TEMP VIEW parquet_source AS SELECT * FROM read_parquet(${sourceLiteral});`);
            const result = await connection.query(sql);
            const columns = Array.isArray(result?.schema?.fields)
                ? result.schema.fields.map(field => field.name ?? '').filter(name => name)
                : [];
            const rows = result.toArray().map(row => columns.map(column => toDisplayValue(row[column])));
            result.release();

            return {
                columns,
                rows: rows.map(values => ({ values })),
            };
        } finally {
            await connection.query('DROP VIEW IF EXISTS parquet_source;');
        }
    } finally {
        await connection.close();
    }
}
