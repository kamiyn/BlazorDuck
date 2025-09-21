function xc(i, t) {
  var e = {};
  for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && t.indexOf(n) < 0 && (e[n] = i[n]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(i); s < n.length; s++)
      t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(i, n[s]) && (e[n[s]] = i[n[s]]);
  return e;
}
function p(i, t, e, n) {
  function s(r) {
    return r instanceof e ? r : new e(function(o) {
      o(r);
    });
  }
  return new (e || (e = Promise))(function(r, o) {
    function a(d) {
      try {
        u(n.next(d));
      } catch (h) {
        o(h);
      }
    }
    function c(d) {
      try {
        u(n.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function u(d) {
      d.done ? r(d.value) : s(d.value).then(a, c);
    }
    u((n = n.apply(i, t || [])).next());
  });
}
function Sr(i) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && i[t], n = 0;
  if (e) return e.call(i);
  if (i && typeof i.length == "number") return {
    next: function() {
      return i && n >= i.length && (i = void 0), { value: i && i[n++], done: !i };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function E(i) {
  return this instanceof E ? (this.v = i, this) : new E(i);
}
function It(i, t, e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = e.apply(i, t || []), s, r = [];
  return s = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", o), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function o(F) {
    return function($) {
      return Promise.resolve($).then(F, h);
    };
  }
  function a(F, $) {
    n[F] && (s[F] = function(Te) {
      return new Promise(function(On, Jt) {
        r.push([F, Te, On, Jt]) > 1 || c(F, Te);
      });
    }, $ && (s[F] = $(s[F])));
  }
  function c(F, $) {
    try {
      u(n[F]($));
    } catch (Te) {
      L(r[0][3], Te);
    }
  }
  function u(F) {
    F.value instanceof E ? Promise.resolve(F.value.v).then(d, h) : L(r[0][2], F);
  }
  function d(F) {
    c("next", F);
  }
  function h(F) {
    c("throw", F);
  }
  function L(F, $) {
    F($), r.shift(), r.length && c(r[0][0], r[0][1]);
  }
}
function Vi(i) {
  var t, e;
  return t = {}, n("next"), n("throw", function(s) {
    throw s;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(s, r) {
    t[s] = i[s] ? function(o) {
      return (e = !e) ? { value: E(i[s](o)), done: !1 } : r ? r(o) : o;
    } : r;
  }
}
function ne(i) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = i[Symbol.asyncIterator], e;
  return t ? t.call(i) : (i = typeof Sr == "function" ? Sr(i) : i[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
    return this;
  }, e);
  function n(r) {
    e[r] = i[r] && function(o) {
      return new Promise(function(a, c) {
        o = i[r](o), s(a, c, o.done, o.value);
      });
    };
  }
  function s(r, o, a, c) {
    Promise.resolve(c).then(function(u) {
      r({ value: u, done: a });
    }, o);
  }
}
const kc = new TextDecoder("utf-8"), kn = (i) => kc.decode(i), Vc = new TextEncoder(), wi = (i) => Vc.encode(i), zc = (i) => typeof i == "number", Zr = (i) => typeof i == "boolean", K = (i) => typeof i == "function", at = (i) => i != null && Object(i) === i, se = (i) => at(i) && K(i.then), Xe = (i) => at(i) && K(i[Symbol.iterator]), be = (i) => at(i) && K(i[Symbol.asyncIterator]), Vn = (i) => at(i) && at(i.schema), Xr = (i) => at(i) && "done" in i && "value" in i, to = (i) => at(i) && K(i.stat) && zc(i.fd), eo = (i) => at(i) && Zn(i.body), hn = (i) => "_getDOMStream" in i && "_getNodeStream" in i, jc = (i) => at(i) && K(i.abort) && K(i.getWriter) && !hn(i), Zn = (i) => at(i) && K(i.cancel) && K(i.getReader) && !hn(i), Wc = (i) => at(i) && K(i.end) && K(i.write) && Zr(i.writable) && !hn(i), io = (i) => at(i) && K(i.read) && K(i.pipe) && Zr(i.readable) && !hn(i), $c = (i) => at(i) && K(i.clear) && K(i.bytes) && K(i.position) && K(i.setPosition) && K(i.capacity) && K(i.getBufferIdentifier) && K(i.createLong), Xn = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function Yc(i) {
  const t = i[0] ? [i[0]] : [];
  let e, n, s, r;
  for (let o, a, c = 0, u = 0, d = i.length; ++c < d; ) {
    if (o = t[u], a = i[c], !o || !a || o.buffer !== a.buffer || a.byteOffset < o.byteOffset) {
      a && (t[++u] = a);
      continue;
    }
    if ({ byteOffset: e, byteLength: s } = o, { byteOffset: n, byteLength: r } = a, e + s < n || n + r < e) {
      a && (t[++u] = a);
      continue;
    }
    t[u] = new Uint8Array(o.buffer, e, n - e + r);
  }
  return t;
}
function Zi(i, t, e = 0, n = t.byteLength) {
  const s = i.byteLength, r = new Uint8Array(i.buffer, i.byteOffset, s), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(n, s));
  return r.set(o, e), i;
}
function St(i, t) {
  const e = Yc(i), n = e.reduce((d, h) => d + h.byteLength, 0);
  let s, r, o, a = 0, c = -1;
  const u = Math.min(t || Number.POSITIVE_INFINITY, n);
  for (const d = e.length; ++c < d; ) {
    if (s = e[c], r = s.subarray(0, Math.min(s.length, u - a)), u <= a + r.length) {
      r.length < s.length ? e[c] = s.subarray(r.length) : r.length === s.length && c++, o ? Zi(o, r, a) : o = r;
      break;
    }
    Zi(o || (o = new Uint8Array(u)), r, a), a += r.length;
  }
  return [o || new Uint8Array(0), e.slice(c), n - (o ? o.byteLength : 0)];
}
function R(i, t) {
  let e = Xr(t) ? t.value : t;
  return e instanceof i ? i === Uint8Array ? new i(e.buffer, e.byteOffset, e.byteLength) : e : e ? (typeof e == "string" && (e = wi(e)), e instanceof ArrayBuffer ? new i(e) : e instanceof Xn ? new i(e) : $c(e) ? R(i, e.bytes()) : ArrayBuffer.isView(e) ? e.byteLength <= 0 ? new i(0) : new i(e.buffer, e.byteOffset, e.byteLength / i.BYTES_PER_ELEMENT) : i.from(e)) : new i(0);
}
const Gc = (i) => R(Int8Array, i), qc = (i) => R(Int16Array, i), Be = (i) => R(Int32Array, i), zn = (i) => R(BigInt64Array, i), N = (i) => R(Uint8Array, i), Hc = (i) => R(Uint16Array, i), Kc = (i) => R(Uint32Array, i), Qc = (i) => R(BigUint64Array, i), Jc = (i) => R(Float32Array, i), Zc = (i) => R(Float64Array, i), Xc = (i) => R(Uint8ClampedArray, i), jn = (i) => (i.next(), i);
function* Pt(i, t) {
  const e = function* (s) {
    yield s;
  }, n = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Xn ? e(t) : Xe(t) ? t : e(t);
  return yield* jn((function* (s) {
    let r = null;
    do
      r = s.next(yield R(i, r));
    while (!r.done);
  })(n[Symbol.iterator]())), new i();
}
const tl = (i) => Pt(Int8Array, i), el = (i) => Pt(Int16Array, i), il = (i) => Pt(Int32Array, i), no = (i) => Pt(Uint8Array, i), nl = (i) => Pt(Uint16Array, i), sl = (i) => Pt(Uint32Array, i), rl = (i) => Pt(Float32Array, i), ol = (i) => Pt(Float64Array, i), al = (i) => Pt(Uint8ClampedArray, i);
function At(i, t) {
  return It(this, arguments, function* () {
    if (se(t))
      return yield E(yield E(yield* Vi(ne(At(i, yield E(t))))));
    const n = function(o) {
      return It(this, arguments, function* () {
        yield yield E(yield E(o));
      });
    }, s = function(o) {
      return It(this, arguments, function* () {
        yield E(yield* Vi(ne(jn((function* (a) {
          let c = null;
          do
            c = a.next(yield c?.value);
          while (!c.done);
        })(o[Symbol.iterator]())))));
      });
    }, r = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Xn ? n(t) : Xe(t) ? s(t) : be(t) ? t : n(t);
    return yield E(
      // otherwise if AsyncIterable, use it
      yield* Vi(ne(jn((function(o) {
        return It(this, arguments, function* () {
          let a = null;
          do
            a = yield E(o.next(yield yield E(R(i, a))));
          while (!a.done);
        });
      })(r[Symbol.asyncIterator]()))))
    ), yield E(new i());
  });
}
const cl = (i) => At(Int8Array, i), ll = (i) => At(Int16Array, i), ul = (i) => At(Int32Array, i), so = (i) => At(Uint8Array, i), dl = (i) => At(Uint16Array, i), hl = (i) => At(Uint32Array, i), fl = (i) => At(Float32Array, i), yl = (i) => At(Float64Array, i), pl = (i) => At(Uint8ClampedArray, i);
function ts(i, t, e) {
  if (i !== 0) {
    e = e.slice(0, t);
    for (let n = -1, s = e.length; ++n < s; )
      e[n] += i;
  }
  return e.subarray(0, t);
}
function ro(i, t) {
  let e = 0;
  const n = i.length;
  if (n !== t.length)
    return !1;
  if (n > 0)
    do
      if (i[e] !== t[e])
        return !1;
    while (++e < n);
  return !0;
}
const gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compareArrayLike: ro,
  joinUint8Arrays: St,
  memcpy: Zi,
  rebaseValueOffsets: ts,
  toArrayBufferView: R,
  toArrayBufferViewAsyncIterator: At,
  toArrayBufferViewIterator: Pt,
  toBigInt64Array: zn,
  toBigUint64Array: Qc,
  toFloat32Array: Jc,
  toFloat32ArrayAsyncIterator: fl,
  toFloat32ArrayIterator: rl,
  toFloat64Array: Zc,
  toFloat64ArrayAsyncIterator: yl,
  toFloat64ArrayIterator: ol,
  toInt16Array: qc,
  toInt16ArrayAsyncIterator: ll,
  toInt16ArrayIterator: el,
  toInt32Array: Be,
  toInt32ArrayAsyncIterator: ul,
  toInt32ArrayIterator: il,
  toInt8Array: Gc,
  toInt8ArrayAsyncIterator: cl,
  toInt8ArrayIterator: tl,
  toUint16Array: Hc,
  toUint16ArrayAsyncIterator: dl,
  toUint16ArrayIterator: nl,
  toUint32Array: Kc,
  toUint32ArrayAsyncIterator: hl,
  toUint32ArrayIterator: sl,
  toUint8Array: N,
  toUint8ArrayAsyncIterator: so,
  toUint8ArrayIterator: no,
  toUint8ClampedArray: Xc,
  toUint8ClampedArrayAsyncIterator: pl,
  toUint8ClampedArrayIterator: al
}, Symbol.toStringTag, { value: "Module" })), dt = {
  fromIterable(i) {
    return Pi(_l(i));
  },
  fromAsyncIterable(i) {
    return Pi(ml(i));
  },
  fromDOMStream(i) {
    return Pi(bl(i));
  },
  fromNodeStream(i) {
    return Pi(Il(i));
  },
  // @ts-ignore
  toDOMStream(i, t) {
    throw new Error('"toDOMStream" not available in this environment');
  },
  // @ts-ignore
  toNodeStream(i, t) {
    throw new Error('"toNodeStream" not available in this environment');
  }
}, Pi = (i) => (i.next(), i);
function* _l(i) {
  let t, e = !1, n = [], s, r, o, a = 0;
  function c() {
    return r === "peek" ? St(n, o)[0] : ([s, n, a] = St(n, o), s);
  }
  ({ cmd: r, size: o } = (yield null) || { cmd: "read", size: 0 });
  const u = no(i)[Symbol.iterator]();
  try {
    do
      if ({ done: t, value: s } = Number.isNaN(o - a) ? u.next() : u.next(o - a), !t && s.byteLength > 0 && (n.push(s), a += s.byteLength), t || o <= a)
        do
          ({ cmd: r, size: o } = yield c());
        while (o < a);
    while (!t);
  } catch (d) {
    (e = !0) && typeof u.throw == "function" && u.throw(d);
  } finally {
    e === !1 && typeof u.return == "function" && u.return(null);
  }
  return null;
}
function ml(i) {
  return It(this, arguments, function* () {
    let e, n = !1, s = [], r, o, a, c = 0;
    function u() {
      return o === "peek" ? St(s, a)[0] : ([r, s, c] = St(s, a), r);
    }
    ({ cmd: o, size: a } = (yield yield E(null)) || { cmd: "read", size: 0 });
    const d = so(i)[Symbol.asyncIterator]();
    try {
      do
        if ({ done: e, value: r } = Number.isNaN(a - c) ? yield E(d.next()) : yield E(d.next(a - c)), !e && r.byteLength > 0 && (s.push(r), c += r.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield E(u()));
          while (a < c);
      while (!e);
    } catch (h) {
      (n = !0) && typeof d.throw == "function" && (yield E(d.throw(h)));
    } finally {
      n === !1 && typeof d.return == "function" && (yield E(d.return(new Uint8Array(0))));
    }
    return yield E(null);
  });
}
function bl(i) {
  return It(this, arguments, function* () {
    let e = !1, n = !1, s = [], r, o, a, c = 0;
    function u() {
      return o === "peek" ? St(s, a)[0] : ([r, s, c] = St(s, a), r);
    }
    ({ cmd: o, size: a } = (yield yield E(null)) || { cmd: "read", size: 0 });
    const d = new vl(i);
    try {
      do
        if ({ done: e, value: r } = Number.isNaN(a - c) ? yield E(d.read()) : yield E(d.read(a - c)), !e && r.byteLength > 0 && (s.push(N(r)), c += r.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield E(u()));
          while (a < c);
      while (!e);
    } catch (h) {
      (n = !0) && (yield E(d.cancel(h)));
    } finally {
      n === !1 ? yield E(d.cancel()) : i.locked && d.releaseLock();
    }
    return yield E(null);
  });
}
class vl {
  constructor(t) {
    this.source = t, this.reader = null, this.reader = this.source.getReader(), this.reader.closed.catch(() => {
    });
  }
  get closed() {
    return this.reader ? this.reader.closed.catch(() => {
    }) : Promise.resolve();
  }
  releaseLock() {
    this.reader && this.reader.releaseLock(), this.reader = null;
  }
  cancel(t) {
    return p(this, void 0, void 0, function* () {
      const { reader: e, source: n } = this;
      e && (yield e.cancel(t).catch(() => {
      })), n && n.locked && this.releaseLock();
    });
  }
  read(t) {
    return p(this, void 0, void 0, function* () {
      if (t === 0)
        return { done: this.reader == null, value: new Uint8Array(0) };
      const e = yield this.reader.read();
      return !e.done && (e.value = N(e)), e;
    });
  }
}
const Bn = (i, t) => {
  const e = (s) => n([t, s]);
  let n;
  return [t, e, new Promise((s) => (n = s) && i.once(t, e))];
};
function Il(i) {
  return It(this, arguments, function* () {
    const e = [];
    let n = "error", s = !1, r = null, o, a, c = 0, u = [], d;
    function h() {
      return o === "peek" ? St(u, a)[0] : ([d, u, c] = St(u, a), d);
    }
    if ({ cmd: o, size: a } = (yield yield E(null)) || { cmd: "read", size: 0 }, i.isTTY)
      return yield yield E(new Uint8Array(0)), yield E(null);
    try {
      e[0] = Bn(i, "end"), e[1] = Bn(i, "error");
      do {
        if (e[2] = Bn(i, "readable"), [n, r] = yield E(Promise.race(e.map((F) => F[2]))), n === "error")
          break;
        if ((s = n === "end") || (Number.isFinite(a - c) ? (d = N(i.read(a - c)), d.byteLength < a - c && (d = N(i.read()))) : d = N(i.read()), d.byteLength > 0 && (u.push(d), c += d.byteLength)), s || a <= c)
          do
            ({ cmd: o, size: a } = yield yield E(h()));
          while (a < c);
      } while (!s);
    } finally {
      yield E(L(e, n === "error" ? r : null));
    }
    return yield E(null);
    function L(F, $) {
      return d = u = null, new Promise((Te, On) => {
        for (const [Jt, Pc] of F)
          i.off(Jt, Pc);
        try {
          const Jt = i.destroy;
          Jt && Jt.call(i, $), $ = void 0;
        } catch (Jt) {
          $ = Jt || $;
        } finally {
          $ != null ? On($) : Te();
        }
      });
    }
  });
}
var Y;
(function(i) {
  i[i.V1 = 0] = "V1", i[i.V2 = 1] = "V2", i[i.V3 = 2] = "V3", i[i.V4 = 3] = "V4", i[i.V5 = 4] = "V5";
})(Y || (Y = {}));
var H;
(function(i) {
  i[i.Sparse = 0] = "Sparse", i[i.Dense = 1] = "Dense";
})(H || (H = {}));
var q;
(function(i) {
  i[i.HALF = 0] = "HALF", i[i.SINGLE = 1] = "SINGLE", i[i.DOUBLE = 2] = "DOUBLE";
})(q || (q = {}));
var X;
(function(i) {
  i[i.DAY = 0] = "DAY", i[i.MILLISECOND = 1] = "MILLISECOND";
})(X || (X = {}));
var f;
(function(i) {
  i[i.SECOND = 0] = "SECOND", i[i.MILLISECOND = 1] = "MILLISECOND", i[i.MICROSECOND = 2] = "MICROSECOND", i[i.NANOSECOND = 3] = "NANOSECOND";
})(f || (f = {}));
var ct;
(function(i) {
  i[i.YEAR_MONTH = 0] = "YEAR_MONTH", i[i.DAY_TIME = 1] = "DAY_TIME", i[i.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(ct || (ct = {}));
const En = 2, Dt = 4, zt = 4, V = 4, ee = new Int32Array(2), Ar = new Float32Array(ee.buffer), Tr = new Float64Array(ee.buffer), xi = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var Wn;
(function(i) {
  i[i.UTF8_BYTES = 1] = "UTF8_BYTES", i[i.UTF16_STRING = 2] = "UTF16_STRING";
})(Wn || (Wn = {}));
let We = class oo {
  /**
   * Create a new ByteBuffer with a given array of bytes (`Uint8Array`)
   */
  constructor(t) {
    this.bytes_ = t, this.position_ = 0, this.text_decoder_ = new TextDecoder();
  }
  /**
   * Create and allocate a new ByteBuffer with a given size.
   */
  static allocate(t) {
    return new oo(new Uint8Array(t));
  }
  clear() {
    this.position_ = 0;
  }
  /**
   * Get the underlying `Uint8Array`.
   */
  bytes() {
    return this.bytes_;
  }
  /**
   * Get the buffer's position.
   */
  position() {
    return this.position_;
  }
  /**
   * Set the buffer's position.
   */
  setPosition(t) {
    this.position_ = t;
  }
  /**
   * Get the buffer's capacity.
   */
  capacity() {
    return this.bytes_.length;
  }
  readInt8(t) {
    return this.readUint8(t) << 24 >> 24;
  }
  readUint8(t) {
    return this.bytes_[t];
  }
  readInt16(t) {
    return this.readUint16(t) << 16 >> 16;
  }
  readUint16(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8;
  }
  readInt32(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8 | this.bytes_[t + 2] << 16 | this.bytes_[t + 3] << 24;
  }
  readUint32(t) {
    return this.readInt32(t) >>> 0;
  }
  readInt64(t) {
    return BigInt.asIntN(64, BigInt(this.readUint32(t)) + (BigInt(this.readUint32(t + 4)) << BigInt(32)));
  }
  readUint64(t) {
    return BigInt.asUintN(64, BigInt(this.readUint32(t)) + (BigInt(this.readUint32(t + 4)) << BigInt(32)));
  }
  readFloat32(t) {
    return ee[0] = this.readInt32(t), Ar[0];
  }
  readFloat64(t) {
    return ee[xi ? 0 : 1] = this.readInt32(t), ee[xi ? 1 : 0] = this.readInt32(t + 4), Tr[0];
  }
  writeInt8(t, e) {
    this.bytes_[t] = e;
  }
  writeUint8(t, e) {
    this.bytes_[t] = e;
  }
  writeInt16(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8;
  }
  writeUint16(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8;
  }
  writeInt32(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24;
  }
  writeUint32(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24;
  }
  writeInt64(t, e) {
    this.writeInt32(t, Number(BigInt.asIntN(32, e))), this.writeInt32(t + 4, Number(BigInt.asIntN(32, e >> BigInt(32))));
  }
  writeUint64(t, e) {
    this.writeUint32(t, Number(BigInt.asUintN(32, e))), this.writeUint32(t + 4, Number(BigInt.asUintN(32, e >> BigInt(32))));
  }
  writeFloat32(t, e) {
    Ar[0] = e, this.writeInt32(t, ee[0]);
  }
  writeFloat64(t, e) {
    Tr[0] = e, this.writeInt32(t, ee[xi ? 0 : 1]), this.writeInt32(t + 4, ee[xi ? 1 : 0]);
  }
  /**
   * Return the file identifier.   Behavior is undefined for FlatBuffers whose
   * schema does not include a file_identifier (likely points at padding or the
   * start of a the root vtable).
   */
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + Dt + zt)
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let e = 0; e < zt; e++)
      t += String.fromCharCode(this.readInt8(this.position_ + Dt + e));
    return t;
  }
  /**
   * Look up a field in the vtable, return an offset into the object, or 0 if the
   * field is not present.
   */
  __offset(t, e) {
    const n = t - this.readInt32(t);
    return e < this.readInt16(n) ? this.readInt16(n + e) : 0;
  }
  /**
   * Initialize any Table-derived type to point to the union at the given offset.
   */
  __union(t, e) {
    return t.bb_pos = e + this.readInt32(e), t.bb = this, t;
  }
  /**
   * Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
   * This allocates a new string and converts to wide chars upon each access.
   *
   * To avoid the conversion to string, pass Encoding.UTF8_BYTES as the
   * "optionalEncoding" argument. This is useful for avoiding conversion when
   * the data will just be packaged back up in another FlatBuffer later on.
   *
   * @param offset
   * @param opt_encoding Defaults to UTF16_STRING
   */
  __string(t, e) {
    t += this.readInt32(t);
    const n = this.readInt32(t);
    t += Dt;
    const s = this.bytes_.subarray(t, t + n);
    return e === Wn.UTF8_BYTES ? s : this.text_decoder_.decode(s);
  }
  /**
   * Handle unions that can contain string as its member, if a Table-derived type then initialize it,
   * if a string then return a new one
   *
   * WARNING: strings are immutable in JS so we can't change the string that the user gave us, this
   * makes the behaviour of __union_with_string different compared to __union
   */
  __union_with_string(t, e) {
    return typeof t == "string" ? this.__string(e) : this.__union(t, e);
  }
  /**
   * Retrieve the relative offset stored at "offset"
   */
  __indirect(t) {
    return t + this.readInt32(t);
  }
  /**
   * Get the start of data of a vector whose offset is stored at "offset" in this object.
   */
  __vector(t) {
    return t + this.readInt32(t) + Dt;
  }
  /**
   * Get the length of a vector whose offset is stored at "offset" in this object.
   */
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != zt)
      throw new Error("FlatBuffers: file identifier must be length " + zt);
    for (let e = 0; e < zt; e++)
      if (t.charCodeAt(e) != this.readInt8(this.position() + Dt + e))
        return !1;
    return !0;
  }
  /**
   * A helper function for generating list for obj api
   */
  createScalarList(t, e) {
    const n = [];
    for (let s = 0; s < e; ++s) {
      const r = t(s);
      r !== null && n.push(r);
    }
    return n;
  }
  /**
   * A helper function for generating list for obj api
   * @param listAccessor function that accepts an index and return data at that index
   * @param listLength listLength
   * @param res result list
   */
  createObjList(t, e) {
    const n = [];
    for (let s = 0; s < e; ++s) {
      const r = t(s);
      r !== null && n.push(r.unpack());
    }
    return n;
  }
}, ao = class co {
  /**
   * Create a FlatBufferBuilder.
   */
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null, this.text_encoder = new TextEncoder();
    let e;
    t ? e = t : e = 1024, this.bb = We.allocate(e), this.space = e;
  }
  clear() {
    this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
  }
  /**
   * In order to save space, fields that are set to their default value
   * don't get serialized into the buffer. Forcing defaults provides a
   * way to manually disable this optimization.
   *
   * @param forceDefaults true always serializes default values
   */
  forceDefaults(t) {
    this.force_defaults = t;
  }
  /**
   * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
   * called finish(). The actual data starts at the ByteBuffer's current position,
   * not necessarily at 0.
   */
  dataBuffer() {
    return this.bb;
  }
  /**
   * Get the bytes representing the FlatBuffer. Only call this after you've
   * called finish().
   */
  asUint8Array() {
    return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
  }
  /**
   * Prepare to write an element of `size` after `additional_bytes` have been
   * written, e.g. if you write a string, you need to align such the int length
   * field is aligned to 4 bytes, and the string data follows it directly. If all
   * you need to do is alignment, `additional_bytes` will be 0.
   *
   * @param size This is the of the new element to write
   * @param additional_bytes The padding size
   */
  prep(t, e) {
    t > this.minalign && (this.minalign = t);
    const n = ~(this.bb.capacity() - this.space + e) + 1 & t - 1;
    for (; this.space < n + t + e; ) {
      const s = this.bb.capacity();
      this.bb = co.growByteBuffer(this.bb), this.space += this.bb.capacity() - s;
    }
    this.pad(n);
  }
  pad(t) {
    for (let e = 0; e < t; e++)
      this.bb.writeInt8(--this.space, 0);
  }
  writeInt8(t) {
    this.bb.writeInt8(this.space -= 1, t);
  }
  writeInt16(t) {
    this.bb.writeInt16(this.space -= 2, t);
  }
  writeInt32(t) {
    this.bb.writeInt32(this.space -= 4, t);
  }
  writeInt64(t) {
    this.bb.writeInt64(this.space -= 8, t);
  }
  writeFloat32(t) {
    this.bb.writeFloat32(this.space -= 4, t);
  }
  writeFloat64(t) {
    this.bb.writeFloat64(this.space -= 8, t);
  }
  /**
   * Add an `int8` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int8` to add the buffer.
   */
  addInt8(t) {
    this.prep(1, 0), this.writeInt8(t);
  }
  /**
   * Add an `int16` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int16` to add the buffer.
   */
  addInt16(t) {
    this.prep(2, 0), this.writeInt16(t);
  }
  /**
   * Add an `int32` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int32` to add the buffer.
   */
  addInt32(t) {
    this.prep(4, 0), this.writeInt32(t);
  }
  /**
   * Add an `int64` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int64` to add the buffer.
   */
  addInt64(t) {
    this.prep(8, 0), this.writeInt64(t);
  }
  /**
   * Add a `float32` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `float32` to add the buffer.
   */
  addFloat32(t) {
    this.prep(4, 0), this.writeFloat32(t);
  }
  /**
   * Add a `float64` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `float64` to add the buffer.
   */
  addFloat64(t) {
    this.prep(8, 0), this.writeFloat64(t);
  }
  addFieldInt8(t, e, n) {
    (this.force_defaults || e != n) && (this.addInt8(e), this.slot(t));
  }
  addFieldInt16(t, e, n) {
    (this.force_defaults || e != n) && (this.addInt16(e), this.slot(t));
  }
  addFieldInt32(t, e, n) {
    (this.force_defaults || e != n) && (this.addInt32(e), this.slot(t));
  }
  addFieldInt64(t, e, n) {
    (this.force_defaults || e !== n) && (this.addInt64(e), this.slot(t));
  }
  addFieldFloat32(t, e, n) {
    (this.force_defaults || e != n) && (this.addFloat32(e), this.slot(t));
  }
  addFieldFloat64(t, e, n) {
    (this.force_defaults || e != n) && (this.addFloat64(e), this.slot(t));
  }
  addFieldOffset(t, e, n) {
    (this.force_defaults || e != n) && (this.addOffset(e), this.slot(t));
  }
  /**
   * Structs are stored inline, so nothing additional is being added. `d` is always 0.
   */
  addFieldStruct(t, e, n) {
    e != n && (this.nested(e), this.slot(t));
  }
  /**
   * Structures are always stored inline, they need to be created right
   * where they're used.  You'll get this assertion failure if you
   * created it elsewhere.
   */
  nested(t) {
    if (t != this.offset())
      throw new TypeError("FlatBuffers: struct must be serialized inline.");
  }
  /**
   * Should not be creating any other object, string or vector
   * while an object is being constructed
   */
  notNested() {
    if (this.isNested)
      throw new TypeError("FlatBuffers: object serialization must not be nested.");
  }
  /**
   * Set the current vtable at `voffset` to the current location in the buffer.
   */
  slot(t) {
    this.vtable !== null && (this.vtable[t] = this.offset());
  }
  /**
   * @returns Offset relative to the end of the buffer.
   */
  offset() {
    return this.bb.capacity() - this.space;
  }
  /**
   * Doubles the size of the backing ByteBuffer and copies the old data towards
   * the end of the new buffer (since we build the buffer backwards).
   *
   * @param bb The current buffer with the existing data
   * @returns A new byte buffer with the old data copied
   * to it. The data is located at the end of the buffer.
   *
   * uint8Array.set() formally takes {Array<number>|ArrayBufferView}, so to pass
   * it a uint8Array we need to suppress the type check:
   * @suppress {checkTypes}
   */
  static growByteBuffer(t) {
    const e = t.capacity();
    if (e & 3221225472)
      throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
    const n = e << 1, s = We.allocate(n);
    return s.setPosition(n - e), s.bytes().set(t.bytes(), n - e), s;
  }
  /**
   * Adds on offset, relative to where it will be written.
   *
   * @param offset The offset to add.
   */
  addOffset(t) {
    this.prep(Dt, 0), this.writeInt32(this.offset() - t + Dt);
  }
  /**
   * Start encoding a new object in the buffer.  Users will not usually need to
   * call this directly. The FlatBuffers compiler will generate helper methods
   * that call this method internally.
   */
  startObject(t) {
    this.notNested(), this.vtable == null && (this.vtable = []), this.vtable_in_use = t;
    for (let e = 0; e < t; e++)
      this.vtable[e] = 0;
    this.isNested = !0, this.object_start = this.offset();
  }
  /**
   * Finish off writing the object that is under construction.
   *
   * @returns The offset to the object inside `dataBuffer`
   */
  endObject() {
    if (this.vtable == null || !this.isNested)
      throw new Error("FlatBuffers: endObject called without startObject");
    this.addInt32(0);
    const t = this.offset();
    let e = this.vtable_in_use - 1;
    for (; e >= 0 && this.vtable[e] == 0; e--)
      ;
    const n = e + 1;
    for (; e >= 0; e--)
      this.addInt16(this.vtable[e] != 0 ? t - this.vtable[e] : 0);
    const s = 2;
    this.addInt16(t - this.object_start);
    const r = (n + s) * En;
    this.addInt16(r);
    let o = 0;
    const a = this.space;
    t: for (e = 0; e < this.vtables.length; e++) {
      const c = this.bb.capacity() - this.vtables[e];
      if (r == this.bb.readInt16(c)) {
        for (let u = En; u < r; u += En)
          if (this.bb.readInt16(a + u) != this.bb.readInt16(c + u))
            continue t;
        o = this.vtables[e];
        break;
      }
    }
    return o ? (this.space = this.bb.capacity() - t, this.bb.writeInt32(this.space, o - t)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)), this.isNested = !1, t;
  }
  /**
   * Finalize a buffer, poiting to the given `root_table`.
   */
  finish(t, e, n) {
    const s = n ? V : 0;
    if (e) {
      const r = e;
      if (this.prep(this.minalign, Dt + zt + s), r.length != zt)
        throw new TypeError("FlatBuffers: file identifier must be length " + zt);
      for (let o = zt - 1; o >= 0; o--)
        this.writeInt8(r.charCodeAt(o));
    }
    this.prep(this.minalign, Dt + s), this.addOffset(t), s && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
  }
  /**
   * Finalize a size prefixed buffer, pointing to the given `root_table`.
   */
  finishSizePrefixed(t, e) {
    this.finish(t, e, !0);
  }
  /**
   * This checks a required field has been set in a given table that has
   * just been constructed.
   */
  requiredField(t, e) {
    const n = this.bb.capacity() - t, s = n - this.bb.readInt32(n);
    if (!(e < this.bb.readInt16(s) && this.bb.readInt16(s + e) != 0))
      throw new TypeError("FlatBuffers: field " + e + " must be set");
  }
  /**
   * Start a new array/vector of objects.  Users usually will not call
   * this directly. The FlatBuffers compiler will create a start/end
   * method for vector types in generated code.
   *
   * @param elem_size The size of each element in the array
   * @param num_elems The number of elements in the array
   * @param alignment The alignment of the array
   */
  startVector(t, e, n) {
    this.notNested(), this.vector_num_elems = e, this.prep(Dt, t * e), this.prep(n, t * e);
  }
  /**
   * Finish off the creation of an array and all its elements. The array must be
   * created with `startVector`.
   *
   * @returns The offset at which the newly created array
   * starts.
   */
  endVector() {
    return this.writeInt32(this.vector_num_elems), this.offset();
  }
  /**
   * Encode the string `s` in the buffer using UTF-8. If the string passed has
   * already been seen, we return the offset of the already written string
   *
   * @param s The string to encode
   * @return The offset in the buffer where the encoded string starts
   */
  createSharedString(t) {
    if (!t)
      return 0;
    if (this.string_maps || (this.string_maps = /* @__PURE__ */ new Map()), this.string_maps.has(t))
      return this.string_maps.get(t);
    const e = this.createString(t);
    return this.string_maps.set(t, e), e;
  }
  /**
   * Encode the string `s` in the buffer using UTF-8. If a Uint8Array is passed
   * instead of a string, it is assumed to contain valid UTF-8 encoded data.
   *
   * @param s The string to encode
   * @return The offset in the buffer where the encoded string starts
   */
  createString(t) {
    if (t == null)
      return 0;
    let e;
    return t instanceof Uint8Array ? e = t : e = this.text_encoder.encode(t), this.addInt8(0), this.startVector(1, e.length, 1), this.bb.setPosition(this.space -= e.length), this.bb.bytes().set(e, this.space), this.endVector();
  }
  /**
   * Create a byte vector.
   *
   * @param v The bytes to add
   * @returns The offset in the buffer where the byte vector starts
   */
  createByteVector(t) {
    return t == null ? 0 : (this.startVector(1, t.length, 1), this.bb.setPosition(this.space -= t.length), this.bb.bytes().set(t, this.space), this.endVector());
  }
  /**
   * A helper function to pack an object
   *
   * @returns offset of obj
   */
  createObjectOffset(t) {
    return t === null ? 0 : typeof t == "string" ? this.createString(t) : t.pack(this);
  }
  /**
   * A helper function to pack a list of object
   *
   * @returns list of offsets of each non null object
   */
  createObjectOffsetList(t) {
    const e = [];
    for (let n = 0; n < t.length; ++n) {
      const s = t[n];
      if (s !== null)
        e.push(this.createObjectOffset(s));
      else
        throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
    }
    return e;
  }
  createStructOffsetList(t, e) {
    return e(this, t.length), this.createObjectOffsetList(t.slice().reverse()), this.endVector();
  }
};
var Xi;
(function(i) {
  i[i.BUFFER = 0] = "BUFFER";
})(Xi || (Xi = {}));
var tn;
(function(i) {
  i[i.LZ4_FRAME = 0] = "LZ4_FRAME", i[i.ZSTD = 1] = "ZSTD";
})(tn || (tn = {}));
class ie {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBodyCompression(t, e) {
    return (e || new ie()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, e) {
    return t.setPosition(t.position() + V), (e || new ie()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Compressor library.
   * For LZ4_FRAME, each compressed buffer must consist of a single frame.
   */
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : tn.LZ4_FRAME;
  }
  /**
   * Indicates the way the record batch body was compressed
   */
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : Xi.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, e) {
    t.addFieldInt8(0, e, tn.LZ4_FRAME);
  }
  static addMethod(t, e) {
    t.addFieldInt8(1, e, Xi.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, e, n) {
    return ie.startBodyCompression(t), ie.addCodec(t, e), ie.addMethod(t, n), ie.endBodyCompression(t);
  }
}
class lo {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  /**
   * The relative offset into the shared memory page where the bytes for this
   * buffer starts
   */
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  /**
   * The absolute length (in bytes) of the memory buffer. The memory is found
   * from offset (inclusive) to offset + length (non-inclusive). When building
   * messages using the encapsulated IPC message, padding bytes may be written
   * after a buffer, but such padding bytes do not need to be accounted for in
   * the size here.
   */
  length() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createBuffer(t, e, n) {
    return t.prep(8, 16), t.writeInt64(BigInt(n ?? 0)), t.writeInt64(BigInt(e ?? 0)), t.offset();
  }
}
let uo = class {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  /**
   * The number of value slots in the Arrow array at this level of a nested
   * tree
   */
  length() {
    return this.bb.readInt64(this.bb_pos);
  }
  /**
   * The number of observed nulls. Fields with null_count == 0 may choose not
   * to write their physical validity bitmap out as a materialized buffer,
   * instead setting the length of the bitmap buffer to 0.
   */
  nullCount() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createFieldNode(t, e, n) {
    return t.prep(8, 16), t.writeInt64(BigInt(n ?? 0)), t.writeInt64(BigInt(e ?? 0)), t.offset();
  }
}, Vt = class $n {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsRecordBatch(t, e) {
    return (e || new $n()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, e) {
    return t.setPosition(t.position() + V), (e || new $n()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * number of records / rows. The arrays in the batch should all have this
   * length
   */
  length() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  /**
   * Nodes correspond to the pre-ordered flattened logical schema
   */
  nodes(t, e) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (e || new uo()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
  }
  nodesLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Buffers correspond to the pre-ordered flattened buffer tree
   *
   * The number of buffers appended to this list depends on the schema. For
   * example, most primitive arrays will have 2 buffers, 1 for the validity
   * bitmap and 1 for the values. For struct arrays, there will only be a
   * single buffer for the validity (nulls) bitmap
   */
  buffers(t, e) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (e || new lo()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
  }
  buffersLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Optional compression of the message body
   */
  compression(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? (t || new ie()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  static startRecordBatch(t) {
    t.startObject(4);
  }
  static addLength(t, e) {
    t.addFieldInt64(0, e, BigInt("0"));
  }
  static addNodes(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static startNodesVector(t, e) {
    t.startVector(16, e, 8);
  }
  static addBuffers(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static startBuffersVector(t, e) {
    t.startVector(16, e, 8);
  }
  static addCompression(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static endRecordBatch(t) {
    return t.endObject();
  }
}, Ee = class Yn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryBatch(t, e) {
    return (e || new Yn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, e) {
    return t.setPosition(t.position() + V), (e || new Yn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  data(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new Vt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * If isDelta is true the values in the dictionary are to be appended to a
   * dictionary with the indicated id. If isDelta is false this dictionary
   * should replace the existing dictionary.
   */
  isDelta() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startDictionaryBatch(t) {
    t.startObject(3);
  }
  static addId(t, e) {
    t.addFieldInt64(0, e, BigInt("0"));
  }
  static addData(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addIsDelta(t, e) {
    t.addFieldInt8(2, +e, 0);
  }
  static endDictionaryBatch(t) {
    return t.endObject();
  }
};
var $e;
(function(i) {
  i[i.Little = 0] = "Little", i[i.Big = 1] = "Big";
})($e || ($e = {}));
var en;
(function(i) {
  i[i.DenseArray = 0] = "DenseArray";
})(en || (en = {}));
class ht {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInt(t, e) {
    return (e || new ht()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInt(t, e) {
    return t.setPosition(t.position() + V), (e || new ht()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  isSigned() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startInt(t) {
    t.startObject(2);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static addIsSigned(t, e) {
    t.addFieldInt8(1, +e, 0);
  }
  static endInt(t) {
    return t.endObject();
  }
  static createInt(t, e, n) {
    return ht.startInt(t), ht.addBitWidth(t, e), ht.addIsSigned(t, n), ht.endInt(t);
  }
}
class jt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryEncoding(t, e) {
    return (e || new jt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, e) {
    return t.setPosition(t.position() + V), (e || new jt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * The known dictionary id in the application where this data is used. In
   * the file or streaming formats, the dictionary ids are found in the
   * DictionaryBatch messages
   */
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  /**
   * The dictionary indices are constrained to be non-negative integers. If
   * this field is null, the indices must be signed int32. To maximize
   * cross-language compatibility and performance, implementations are
   * recommended to prefer signed integer types over unsigned integer types
   * and to avoid uint64 indices unless they are required by an application.
   */
  indexType(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new ht()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * By default, dictionaries are not ordered, or the order does not have
   * semantic meaning. In some statistical, applications, dictionary-encoding
   * is used to represent ordered categorical data, and we provide a way to
   * preserve that metadata here
   */
  isOrdered() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  dictionaryKind() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt16(this.bb_pos + t) : en.DenseArray;
  }
  static startDictionaryEncoding(t) {
    t.startObject(4);
  }
  static addId(t, e) {
    t.addFieldInt64(0, e, BigInt("0"));
  }
  static addIndexType(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addIsOrdered(t, e) {
    t.addFieldInt8(2, +e, 0);
  }
  static addDictionaryKind(t, e) {
    t.addFieldInt16(3, e, en.DenseArray);
  }
  static endDictionaryEncoding(t) {
    return t.endObject();
  }
}
class Q {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsKeyValue(t, e) {
    return (e || new Q()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsKeyValue(t, e) {
    return t.setPosition(t.position() + V), (e || new Q()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  key(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  value(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startKeyValue(t) {
    t.startObject(2);
  }
  static addKey(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addValue(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endKeyValue(t) {
    return t.endObject();
  }
  static createKeyValue(t, e, n) {
    return Q.startKeyValue(t), Q.addKey(t, e), Q.addValue(t, n), Q.endKeyValue(t);
  }
}
let Or = class ei {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBinary(t, e) {
    return (e || new ei()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, e) {
    return t.setPosition(t.position() + V), (e || new ei()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return ei.startBinary(t), ei.endBinary(t);
  }
}, Br = class ii {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBool(t, e) {
    return (e || new ii()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, e) {
    return t.setPosition(t.position() + V), (e || new ii()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return ii.startBool(t), ii.endBool(t);
  }
}, zi = class De {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDate(t, e) {
    return (e || new De()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, e) {
    return t.setPosition(t.position() + V), (e || new De()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : X.MILLISECOND;
  }
  static startDate(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, X.MILLISECOND);
  }
  static endDate(t) {
    return t.endObject();
  }
  static createDate(t, e) {
    return De.startDate(t), De.addUnit(t, e), De.endDate(t);
  }
}, Fe = class te {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDecimal(t, e) {
    return (e || new te()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDecimal(t, e) {
    return t.setPosition(t.position() + V), (e || new te()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Total number of decimal digits
   */
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  /**
   * Number of digits after the decimal point "."
   */
  scale() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  /**
   * Number of bits per value. The only accepted widths are 128 and 256.
   * We use bitWidth for consistency with Int::bitWidth.
   */
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.readInt32(this.bb_pos + t) : 128;
  }
  static startDecimal(t) {
    t.startObject(3);
  }
  static addPrecision(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static addScale(t, e) {
    t.addFieldInt32(1, e, 0);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(2, e, 128);
  }
  static endDecimal(t) {
    return t.endObject();
  }
  static createDecimal(t, e, n, s) {
    return te.startDecimal(t), te.addPrecision(t, e), te.addScale(t, n), te.addBitWidth(t, s), te.endDecimal(t);
  }
}, ji = class Ne {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDuration(t, e) {
    return (e || new Ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDuration(t, e) {
    return t.setPosition(t.position() + V), (e || new Ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : f.MILLISECOND;
  }
  static startDuration(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, f.MILLISECOND);
  }
  static endDuration(t) {
    return t.endObject();
  }
  static createDuration(t, e) {
    return Ne.startDuration(t), Ne.addUnit(t, e), Ne.endDuration(t);
  }
}, Wi = class Re {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeBinary(t, e) {
    return (e || new Re()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, e) {
    return t.setPosition(t.position() + V), (e || new Re()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Number of bytes per value
   */
  byteWidth() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  static startFixedSizeBinary(t) {
    t.startObject(1);
  }
  static addByteWidth(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static endFixedSizeBinary(t) {
    return t.endObject();
  }
  static createFixedSizeBinary(t, e) {
    return Re.startFixedSizeBinary(t), Re.addByteWidth(t, e), Re.endFixedSizeBinary(t);
  }
}, $i = class Le {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeList(t, e) {
    return (e || new Le()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, e) {
    return t.setPosition(t.position() + V), (e || new Le()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Number of list items per value
   */
  listSize() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  static startFixedSizeList(t) {
    t.startObject(1);
  }
  static addListSize(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static endFixedSizeList(t) {
    return t.endObject();
  }
  static createFixedSizeList(t, e) {
    return Le.startFixedSizeList(t), Le.addListSize(t, e), Le.endFixedSizeList(t);
  }
};
class Ft {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFloatingPoint(t, e) {
    return (e || new Ft()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, e) {
    return t.setPosition(t.position() + V), (e || new Ft()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : q.HALF;
  }
  static startFloatingPoint(t) {
    t.startObject(1);
  }
  static addPrecision(t, e) {
    t.addFieldInt16(0, e, q.HALF);
  }
  static endFloatingPoint(t) {
    return t.endObject();
  }
  static createFloatingPoint(t, e) {
    return Ft.startFloatingPoint(t), Ft.addPrecision(t, e), Ft.endFloatingPoint(t);
  }
}
class Nt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInterval(t, e) {
    return (e || new Nt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, e) {
    return t.setPosition(t.position() + V), (e || new Nt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : ct.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, ct.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, e) {
    return Nt.startInterval(t), Nt.addUnit(t, e), Nt.endInterval(t);
  }
}
let Er = class ni {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsLargeBinary(t, e) {
    return (e || new ni()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeBinary(t, e) {
    return t.setPosition(t.position() + V), (e || new ni()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeBinary(t) {
    t.startObject(0);
  }
  static endLargeBinary(t) {
    return t.endObject();
  }
  static createLargeBinary(t) {
    return ni.startLargeBinary(t), ni.endLargeBinary(t);
  }
}, Dr = class si {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsLargeUtf8(t, e) {
    return (e || new si()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeUtf8(t, e) {
    return t.setPosition(t.position() + V), (e || new si()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeUtf8(t) {
    t.startObject(0);
  }
  static endLargeUtf8(t) {
    return t.endObject();
  }
  static createLargeUtf8(t) {
    return si.startLargeUtf8(t), si.endLargeUtf8(t);
  }
}, Fr = class ri {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsList(t, e) {
    return (e || new ri()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, e) {
    return t.setPosition(t.position() + V), (e || new ri()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return ri.startList(t), ri.endList(t);
  }
}, Yi = class Me {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMap(t, e) {
    return (e || new Me()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, e) {
    return t.setPosition(t.position() + V), (e || new Me()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Set to true if the keys within each value are sorted
   */
  keysSorted() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startMap(t) {
    t.startObject(1);
  }
  static addKeysSorted(t, e) {
    t.addFieldInt8(0, +e, 0);
  }
  static endMap(t) {
    return t.endObject();
  }
  static createMap(t, e) {
    return Me.startMap(t), Me.addKeysSorted(t, e), Me.endMap(t);
  }
}, Nr = class oi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsNull(t, e) {
    return (e || new oi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, e) {
    return t.setPosition(t.position() + V), (e || new oi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return oi.startNull(t), oi.endNull(t);
  }
};
class ye {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsStruct_(t, e) {
    return (e || new ye()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsStruct_(t, e) {
    return t.setPosition(t.position() + V), (e || new ye()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startStruct_(t) {
    t.startObject(0);
  }
  static endStruct_(t) {
    return t.endObject();
  }
  static createStruct_(t) {
    return ye.startStruct_(t), ye.endStruct_(t);
  }
}
class pt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTime(t, e) {
    return (e || new pt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTime(t, e) {
    return t.setPosition(t.position() + V), (e || new pt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : f.MILLISECOND;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 32;
  }
  static startTime(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, f.MILLISECOND);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(1, e, 32);
  }
  static endTime(t) {
    return t.endObject();
  }
  static createTime(t, e, n) {
    return pt.startTime(t), pt.addUnit(t, e), pt.addBitWidth(t, n), pt.endTime(t);
  }
}
class gt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTimestamp(t, e) {
    return (e || new gt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTimestamp(t, e) {
    return t.setPosition(t.position() + V), (e || new gt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : f.SECOND;
  }
  timezone(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startTimestamp(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, f.SECOND);
  }
  static addTimezone(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endTimestamp(t) {
    return t.endObject();
  }
  static createTimestamp(t, e, n) {
    return gt.startTimestamp(t), gt.addUnit(t, e), gt.addTimezone(t, n), gt.endTimestamp(t);
  }
}
class ot {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUnion(t, e) {
    return (e || new ot()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUnion(t, e) {
    return t.setPosition(t.position() + V), (e || new ot()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  mode() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : H.Sparse;
  }
  typeIds(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + t * 4) : 0;
  }
  typeIdsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  typeIdsArray() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t), this.bb.__vector_len(this.bb_pos + t)) : null;
  }
  static startUnion(t) {
    t.startObject(2);
  }
  static addMode(t, e) {
    t.addFieldInt16(0, e, H.Sparse);
  }
  static addTypeIds(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createTypeIdsVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addInt32(e[n]);
    return t.endVector();
  }
  static startTypeIdsVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endUnion(t) {
    return t.endObject();
  }
  static createUnion(t, e, n) {
    return ot.startUnion(t), ot.addMode(t, e), ot.addTypeIds(t, n), ot.endUnion(t);
  }
}
let Rr = class ai {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUtf8(t, e) {
    return (e || new ai()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, e) {
    return t.setPosition(t.position() + V), (e || new ai()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return ai.startUtf8(t), ai.endUtf8(t);
  }
};
var B;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.Null = 1] = "Null", i[i.Int = 2] = "Int", i[i.FloatingPoint = 3] = "FloatingPoint", i[i.Binary = 4] = "Binary", i[i.Utf8 = 5] = "Utf8", i[i.Bool = 6] = "Bool", i[i.Decimal = 7] = "Decimal", i[i.Date = 8] = "Date", i[i.Time = 9] = "Time", i[i.Timestamp = 10] = "Timestamp", i[i.Interval = 11] = "Interval", i[i.List = 12] = "List", i[i.Struct_ = 13] = "Struct_", i[i.Union = 14] = "Union", i[i.FixedSizeBinary = 15] = "FixedSizeBinary", i[i.FixedSizeList = 16] = "FixedSizeList", i[i.Map = 17] = "Map", i[i.Duration = 18] = "Duration", i[i.LargeBinary = 19] = "LargeBinary", i[i.LargeUtf8 = 20] = "LargeUtf8", i[i.LargeList = 21] = "LargeList", i[i.RunEndEncoded = 22] = "RunEndEncoded";
})(B || (B = {}));
let yt = class Gi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsField(t, e) {
    return (e || new Gi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, e) {
    return t.setPosition(t.position() + V), (e || new Gi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  name(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  /**
   * Whether or not this field can contain nulls. Should be true in general.
   */
  nullable() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  typeType() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.readUint8(this.bb_pos + t) : B.NONE;
  }
  /**
   * This is the type of the decoded value if the field is dictionary encoded.
   */
  type(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? this.bb.__union(t, this.bb_pos + e) : null;
  }
  /**
   * Present only if the field is dictionary encoded.
   */
  dictionary(t) {
    const e = this.bb.__offset(this.bb_pos, 12);
    return e ? (t || new jt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * children apply only to nested data types like Struct, List and Union. For
   * primitive types children will have length 0.
   */
  children(t, e) {
    const n = this.bb.__offset(this.bb_pos, 14);
    return n ? (e || new Gi()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  childrenLength() {
    const t = this.bb.__offset(this.bb_pos, 14);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, e) {
    const n = this.bb.__offset(this.bb_pos, 16);
    return n ? (e || new Q()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 16);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startField(t) {
    t.startObject(7);
  }
  static addName(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addNullable(t, e) {
    t.addFieldInt8(1, +e, 0);
  }
  static addTypeType(t, e) {
    t.addFieldInt8(2, e, B.NONE);
  }
  static addType(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static addDictionary(t, e) {
    t.addFieldOffset(4, e, 0);
  }
  static addChildren(t, e) {
    t.addFieldOffset(5, e, 0);
  }
  static createChildrenVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addOffset(e[n]);
    return t.endVector();
  }
  static startChildrenVector(t, e) {
    t.startVector(4, e, 4);
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(6, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addOffset(e[n]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endField(t) {
    return t.endObject();
  }
}, Bt = class kt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsSchema(t, e) {
    return (e || new kt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, e) {
    return t.setPosition(t.position() + V), (e || new kt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * endianness of the buffer
   * it is Little Endian by default
   * if endianness doesn't match the underlying system then the vectors need to be converted
   */
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : $e.Little;
  }
  fields(t, e) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (e || new yt()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  fieldsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, e) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (e || new Q()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Features used in the stream/file.
   */
  features(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? this.bb.readInt64(this.bb.__vector(this.bb_pos + e) + t * 8) : BigInt(0);
  }
  featuresLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startSchema(t) {
    t.startObject(4);
  }
  static addEndianness(t, e) {
    t.addFieldInt16(0, e, $e.Little);
  }
  static addFields(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createFieldsVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addOffset(e[n]);
    return t.endVector();
  }
  static startFieldsVector(t, e) {
    t.startVector(4, e, 4);
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addOffset(e[n]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static addFeatures(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static createFeaturesVector(t, e) {
    t.startVector(8, e.length, 8);
    for (let n = e.length - 1; n >= 0; n--)
      t.addInt64(e[n]);
    return t.endVector();
  }
  static startFeaturesVector(t, e) {
    t.startVector(8, e, 8);
  }
  static endSchema(t) {
    return t.endObject();
  }
  static finishSchemaBuffer(t, e) {
    t.finish(e);
  }
  static finishSizePrefixedSchemaBuffer(t, e) {
    t.finish(e, void 0, !0);
  }
  static createSchema(t, e, n, s, r) {
    return kt.startSchema(t), kt.addEndianness(t, e), kt.addFields(t, n), kt.addCustomMetadata(t, s), kt.addFeatures(t, r), kt.endSchema(t);
  }
};
var C;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.Schema = 1] = "Schema", i[i.DictionaryBatch = 2] = "DictionaryBatch", i[i.RecordBatch = 3] = "RecordBatch", i[i.Tensor = 4] = "Tensor", i[i.SparseTensor = 5] = "SparseTensor";
})(C || (C = {}));
var l;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.Null = 1] = "Null", i[i.Int = 2] = "Int", i[i.Float = 3] = "Float", i[i.Binary = 4] = "Binary", i[i.Utf8 = 5] = "Utf8", i[i.Bool = 6] = "Bool", i[i.Decimal = 7] = "Decimal", i[i.Date = 8] = "Date", i[i.Time = 9] = "Time", i[i.Timestamp = 10] = "Timestamp", i[i.Interval = 11] = "Interval", i[i.List = 12] = "List", i[i.Struct = 13] = "Struct", i[i.Union = 14] = "Union", i[i.FixedSizeBinary = 15] = "FixedSizeBinary", i[i.FixedSizeList = 16] = "FixedSizeList", i[i.Map = 17] = "Map", i[i.Duration = 18] = "Duration", i[i.LargeBinary = 19] = "LargeBinary", i[i.LargeUtf8 = 20] = "LargeUtf8", i[i.Dictionary = -1] = "Dictionary", i[i.Int8 = -2] = "Int8", i[i.Int16 = -3] = "Int16", i[i.Int32 = -4] = "Int32", i[i.Int64 = -5] = "Int64", i[i.Uint8 = -6] = "Uint8", i[i.Uint16 = -7] = "Uint16", i[i.Uint32 = -8] = "Uint32", i[i.Uint64 = -9] = "Uint64", i[i.Float16 = -10] = "Float16", i[i.Float32 = -11] = "Float32", i[i.Float64 = -12] = "Float64", i[i.DateDay = -13] = "DateDay", i[i.DateMillisecond = -14] = "DateMillisecond", i[i.TimestampSecond = -15] = "TimestampSecond", i[i.TimestampMillisecond = -16] = "TimestampMillisecond", i[i.TimestampMicrosecond = -17] = "TimestampMicrosecond", i[i.TimestampNanosecond = -18] = "TimestampNanosecond", i[i.TimeSecond = -19] = "TimeSecond", i[i.TimeMillisecond = -20] = "TimeMillisecond", i[i.TimeMicrosecond = -21] = "TimeMicrosecond", i[i.TimeNanosecond = -22] = "TimeNanosecond", i[i.DenseUnion = -23] = "DenseUnion", i[i.SparseUnion = -24] = "SparseUnion", i[i.IntervalDayTime = -25] = "IntervalDayTime", i[i.IntervalYearMonth = -26] = "IntervalYearMonth", i[i.DurationSecond = -27] = "DurationSecond", i[i.DurationMillisecond = -28] = "DurationMillisecond", i[i.DurationMicrosecond = -29] = "DurationMicrosecond", i[i.DurationNanosecond = -30] = "DurationNanosecond";
})(l || (l = {}));
var bt;
(function(i) {
  i[i.OFFSET = 0] = "OFFSET", i[i.DATA = 1] = "DATA", i[i.VALIDITY = 2] = "VALIDITY", i[i.TYPE = 3] = "TYPE";
})(bt || (bt = {}));
const wl = void 0;
function re(i) {
  if (i === null)
    return "null";
  if (i === wl)
    return "undefined";
  switch (typeof i) {
    case "number":
      return `${i}`;
    case "bigint":
      return `${i}`;
    case "string":
      return `"${i}"`;
  }
  return typeof i[Symbol.toPrimitive] == "function" ? i[Symbol.toPrimitive]("string") : ArrayBuffer.isView(i) ? i instanceof BigInt64Array || i instanceof BigUint64Array ? `[${[...i].map((t) => re(t))}]` : `[${i}]` : ArrayBuffer.isView(i) ? `[${i}]` : JSON.stringify(i, (t, e) => typeof e == "bigint" ? `${e}` : e);
}
const Sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  valueToString: re
}, Symbol.toStringTag, { value: "Module" }));
function z(i) {
  if (typeof i == "bigint" && (i < Number.MIN_SAFE_INTEGER || i > Number.MAX_SAFE_INTEGER))
    throw new TypeError(`${i} is not safe to convert to a number.`);
  return Number(i);
}
function ho(i, t) {
  return z(i / t) + z(i % t) / z(t);
}
const fo = Symbol.for("isArrowBigNum");
function Tt(i, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(R(this.TypedArray, i), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(i, ...t), this.constructor.prototype);
}
Tt.prototype[fo] = !0;
Tt.prototype.toJSON = function() {
  return `"${Ye(this)}"`;
};
Tt.prototype.valueOf = function(i) {
  return es(this, i);
};
Tt.prototype.toString = function() {
  return Ye(this);
};
Tt.prototype[Symbol.toPrimitive] = function(i = "default") {
  switch (i) {
    case "number":
      return es(this);
    case "string":
      return Ye(this);
    case "default":
      return yo(this);
  }
  return Ye(this);
};
function xe(...i) {
  return Tt.apply(this, i);
}
function ke(...i) {
  return Tt.apply(this, i);
}
function ui(...i) {
  return Tt.apply(this, i);
}
Object.setPrototypeOf(xe.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(ke.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(ui.prototype, Object.create(Uint32Array.prototype));
Object.assign(xe.prototype, Tt.prototype, { constructor: xe, signed: !0, TypedArray: Int32Array, BigIntArray: BigInt64Array });
Object.assign(ke.prototype, Tt.prototype, { constructor: ke, signed: !1, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
Object.assign(ui.prototype, Tt.prototype, { constructor: ui, signed: !0, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
const Al = BigInt(4294967296) * BigInt(4294967296), Tl = Al - BigInt(1);
function es(i, t) {
  const { buffer: e, byteOffset: n, byteLength: s, signed: r } = i, o = new BigUint64Array(e, n, s / 8), a = r && o.at(-1) & BigInt(1) << BigInt(63);
  let c = BigInt(0), u = 0;
  if (a) {
    for (const d of o)
      c |= (d ^ Tl) * (BigInt(1) << BigInt(64 * u++));
    c *= BigInt(-1), c -= BigInt(1);
  } else
    for (const d of o)
      c |= d * (BigInt(1) << BigInt(64 * u++));
  if (typeof t == "number") {
    const d = BigInt(Math.pow(10, t)), h = c / d, L = c % d;
    return z(h) + z(L) / z(d);
  }
  return z(c);
}
function Ye(i) {
  if (i.byteLength === 8)
    return `${new i.BigIntArray(i.buffer, i.byteOffset, 1)[0]}`;
  if (!i.signed)
    return Dn(i);
  let t = new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2);
  if (new Int16Array([t.at(-1)])[0] >= 0)
    return Dn(i);
  t = t.slice();
  let n = 1;
  for (let r = 0; r < t.length; r++) {
    const o = t[r], a = ~o + n;
    t[r] = a, n &= o === 0 ? 1 : 0;
  }
  return `-${Dn(t)}`;
}
function yo(i) {
  return i.byteLength === 8 ? new i.BigIntArray(i.buffer, i.byteOffset, 1)[0] : Ye(i);
}
function Dn(i) {
  let t = "";
  const e = new Uint32Array(2);
  let n = new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2);
  const s = new Uint32Array((n = new Uint16Array(n).reverse()).buffer);
  let r = -1;
  const o = n.length - 1;
  do {
    for (e[0] = n[r = 0]; r < o; )
      n[r++] = e[1] = e[0] / 10, e[0] = (e[0] - e[1] * 10 << 16) + n[r];
    n[r] = e[1] = e[0] / 10, e[0] = e[0] - e[1] * 10, t = `${e[0]}${t}`;
  } while (s[0] || s[1] || s[2] || s[3]);
  return t ?? "0";
}
class Si {
  /** @nocollapse */
  static new(t, e) {
    switch (e) {
      case !0:
        return new xe(t);
      case !1:
        return new ke(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case BigInt64Array:
        return new xe(t);
    }
    return t.byteLength === 16 ? new ui(t) : new ke(t);
  }
  /** @nocollapse */
  static signed(t) {
    return new xe(t);
  }
  /** @nocollapse */
  static unsigned(t) {
    return new ke(t);
  }
  /** @nocollapse */
  static decimal(t) {
    return new ui(t);
  }
  constructor(t, e) {
    return Si.new(t, e);
  }
}
const Ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BN: Si,
  bigNumToBigInt: yo,
  bigNumToNumber: es,
  bigNumToString: Ye,
  isArrowBigNumSymbol: fo
}, Symbol.toStringTag, { value: "Module" }));
var po, go, _o, mo, bo, vo, Io, wo, So, Ao, To, Oo, Bo, Eo, Do, Fo, No, Ro, Lo, Mo, Uo, Co;
class y {
  /** @nocollapse */
  static isNull(t) {
    return t?.typeId === l.Null;
  }
  /** @nocollapse */
  static isInt(t) {
    return t?.typeId === l.Int;
  }
  /** @nocollapse */
  static isFloat(t) {
    return t?.typeId === l.Float;
  }
  /** @nocollapse */
  static isBinary(t) {
    return t?.typeId === l.Binary;
  }
  /** @nocollapse */
  static isLargeBinary(t) {
    return t?.typeId === l.LargeBinary;
  }
  /** @nocollapse */
  static isUtf8(t) {
    return t?.typeId === l.Utf8;
  }
  /** @nocollapse */
  static isLargeUtf8(t) {
    return t?.typeId === l.LargeUtf8;
  }
  /** @nocollapse */
  static isBool(t) {
    return t?.typeId === l.Bool;
  }
  /** @nocollapse */
  static isDecimal(t) {
    return t?.typeId === l.Decimal;
  }
  /** @nocollapse */
  static isDate(t) {
    return t?.typeId === l.Date;
  }
  /** @nocollapse */
  static isTime(t) {
    return t?.typeId === l.Time;
  }
  /** @nocollapse */
  static isTimestamp(t) {
    return t?.typeId === l.Timestamp;
  }
  /** @nocollapse */
  static isInterval(t) {
    return t?.typeId === l.Interval;
  }
  /** @nocollapse */
  static isDuration(t) {
    return t?.typeId === l.Duration;
  }
  /** @nocollapse */
  static isList(t) {
    return t?.typeId === l.List;
  }
  /** @nocollapse */
  static isStruct(t) {
    return t?.typeId === l.Struct;
  }
  /** @nocollapse */
  static isUnion(t) {
    return t?.typeId === l.Union;
  }
  /** @nocollapse */
  static isFixedSizeBinary(t) {
    return t?.typeId === l.FixedSizeBinary;
  }
  /** @nocollapse */
  static isFixedSizeList(t) {
    return t?.typeId === l.FixedSizeList;
  }
  /** @nocollapse */
  static isMap(t) {
    return t?.typeId === l.Map;
  }
  /** @nocollapse */
  static isDictionary(t) {
    return t?.typeId === l.Dictionary;
  }
  /** @nocollapse */
  static isDenseUnion(t) {
    return y.isUnion(t) && t.mode === H.Dense;
  }
  /** @nocollapse */
  static isSparseUnion(t) {
    return y.isUnion(t) && t.mode === H.Sparse;
  }
  constructor(t) {
    this.typeId = t;
  }
}
po = Symbol.toStringTag;
y[po] = ((i) => (i.children = null, i.ArrayType = Array, i.OffsetArrayType = Int32Array, i[Symbol.toStringTag] = "DataType"))(y.prototype);
class Lt extends y {
  constructor() {
    super(l.Null);
  }
  toString() {
    return "Null";
  }
}
go = Symbol.toStringTag;
Lt[go] = ((i) => i[Symbol.toStringTag] = "Null")(Lt.prototype);
class st extends y {
  constructor(t, e) {
    super(l.Int), this.isSigned = t, this.bitWidth = e;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 8:
        return this.isSigned ? Int8Array : Uint8Array;
      case 16:
        return this.isSigned ? Int16Array : Uint16Array;
      case 32:
        return this.isSigned ? Int32Array : Uint32Array;
      case 64:
        return this.isSigned ? BigInt64Array : BigUint64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`;
  }
}
_o = Symbol.toStringTag;
st[_o] = ((i) => (i.isSigned = null, i.bitWidth = null, i[Symbol.toStringTag] = "Int"))(st.prototype);
class is extends st {
  constructor() {
    super(!0, 8);
  }
  get ArrayType() {
    return Int8Array;
  }
}
class ns extends st {
  constructor() {
    super(!0, 16);
  }
  get ArrayType() {
    return Int16Array;
  }
}
class oe extends st {
  constructor() {
    super(!0, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
let fn = class extends st {
  constructor() {
    super(!0, 64);
  }
  get ArrayType() {
    return BigInt64Array;
  }
};
class ss extends st {
  constructor() {
    super(!1, 8);
  }
  get ArrayType() {
    return Uint8Array;
  }
}
class rs extends st {
  constructor() {
    super(!1, 16);
  }
  get ArrayType() {
    return Uint16Array;
  }
}
class os extends st {
  constructor() {
    super(!1, 32);
  }
  get ArrayType() {
    return Uint32Array;
  }
}
let as = class extends st {
  constructor() {
    super(!1, 64);
  }
  get ArrayType() {
    return BigUint64Array;
  }
};
Object.defineProperty(is.prototype, "ArrayType", { value: Int8Array });
Object.defineProperty(ns.prototype, "ArrayType", { value: Int16Array });
Object.defineProperty(oe.prototype, "ArrayType", { value: Int32Array });
Object.defineProperty(fn.prototype, "ArrayType", { value: BigInt64Array });
Object.defineProperty(ss.prototype, "ArrayType", { value: Uint8Array });
Object.defineProperty(rs.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(os.prototype, "ArrayType", { value: Uint32Array });
Object.defineProperty(as.prototype, "ArrayType", { value: BigUint64Array });
class ae extends y {
  constructor(t) {
    super(l.Float), this.precision = t;
  }
  get ArrayType() {
    switch (this.precision) {
      case q.HALF:
        return Uint16Array;
      case q.SINGLE:
        return Float32Array;
      case q.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
}
mo = Symbol.toStringTag;
ae[mo] = ((i) => (i.precision = null, i[Symbol.toStringTag] = "Float"))(ae.prototype);
class Po extends ae {
  constructor() {
    super(q.HALF);
  }
}
class cs extends ae {
  constructor() {
    super(q.SINGLE);
  }
}
class yn extends ae {
  constructor() {
    super(q.DOUBLE);
  }
}
Object.defineProperty(Po.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(cs.prototype, "ArrayType", { value: Float32Array });
Object.defineProperty(yn.prototype, "ArrayType", { value: Float64Array });
class di extends y {
  constructor() {
    super(l.Binary);
  }
  toString() {
    return "Binary";
  }
}
bo = Symbol.toStringTag;
di[bo] = ((i) => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Binary"))(di.prototype);
class hi extends y {
  constructor() {
    super(l.LargeBinary);
  }
  toString() {
    return "LargeBinary";
  }
}
vo = Symbol.toStringTag;
hi[vo] = ((i) => (i.ArrayType = Uint8Array, i.OffsetArrayType = BigInt64Array, i[Symbol.toStringTag] = "LargeBinary"))(hi.prototype);
class Ge extends y {
  constructor() {
    super(l.Utf8);
  }
  toString() {
    return "Utf8";
  }
}
Io = Symbol.toStringTag;
Ge[Io] = ((i) => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Utf8"))(Ge.prototype);
class fi extends y {
  constructor() {
    super(l.LargeUtf8);
  }
  toString() {
    return "LargeUtf8";
  }
}
wo = Symbol.toStringTag;
fi[wo] = ((i) => (i.ArrayType = Uint8Array, i.OffsetArrayType = BigInt64Array, i[Symbol.toStringTag] = "LargeUtf8"))(fi.prototype);
class qe extends y {
  constructor() {
    super(l.Bool);
  }
  toString() {
    return "Bool";
  }
}
So = Symbol.toStringTag;
qe[So] = ((i) => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Bool"))(qe.prototype);
class yi extends y {
  constructor(t, e, n = 128) {
    super(l.Decimal), this.scale = t, this.precision = e, this.bitWidth = n;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
}
Ao = Symbol.toStringTag;
yi[Ao] = ((i) => (i.scale = null, i.precision = null, i.ArrayType = Uint32Array, i[Symbol.toStringTag] = "Decimal"))(yi.prototype);
class pe extends y {
  constructor(t) {
    super(l.Date), this.unit = t;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${X[this.unit]}>`;
  }
  get ArrayType() {
    return this.unit === X.DAY ? Int32Array : BigInt64Array;
  }
}
To = Symbol.toStringTag;
pe[To] = ((i) => (i.unit = null, i[Symbol.toStringTag] = "Date"))(pe.prototype);
class Bl extends pe {
  constructor() {
    super(X.DAY);
  }
}
class El extends pe {
  constructor() {
    super(X.MILLISECOND);
  }
}
class Wt extends y {
  constructor(t, e) {
    super(l.Time), this.unit = t, this.bitWidth = e;
  }
  toString() {
    return `Time${this.bitWidth}<${f[this.unit]}>`;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 32:
        return Int32Array;
      case 64:
        return BigInt64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
}
Oo = Symbol.toStringTag;
Wt[Oo] = ((i) => (i.unit = null, i.bitWidth = null, i[Symbol.toStringTag] = "Time"))(Wt.prototype);
class Dl extends Wt {
  constructor() {
    super(f.SECOND, 32);
  }
}
class Fl extends Wt {
  constructor() {
    super(f.MILLISECOND, 32);
  }
}
class Nl extends Wt {
  constructor() {
    super(f.MICROSECOND, 64);
  }
}
class Rl extends Wt {
  constructor() {
    super(f.NANOSECOND, 64);
  }
}
class $t extends y {
  constructor(t, e) {
    super(l.Timestamp), this.unit = t, this.timezone = e;
  }
  toString() {
    return `Timestamp<${f[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
Bo = Symbol.toStringTag;
$t[Bo] = ((i) => (i.unit = null, i.timezone = null, i.ArrayType = BigInt64Array, i[Symbol.toStringTag] = "Timestamp"))($t.prototype);
class Ll extends $t {
  constructor(t) {
    super(f.SECOND, t);
  }
}
class xo extends $t {
  constructor(t) {
    super(f.MILLISECOND, t);
  }
}
class Ml extends $t {
  constructor(t) {
    super(f.MICROSECOND, t);
  }
}
class Ul extends $t {
  constructor(t) {
    super(f.NANOSECOND, t);
  }
}
class ge extends y {
  constructor(t) {
    super(l.Interval), this.unit = t;
  }
  toString() {
    return `Interval<${ct[this.unit]}>`;
  }
}
Eo = Symbol.toStringTag;
ge[Eo] = ((i) => (i.unit = null, i.ArrayType = Int32Array, i[Symbol.toStringTag] = "Interval"))(ge.prototype);
class Cl extends ge {
  constructor() {
    super(ct.DAY_TIME);
  }
}
class Pl extends ge {
  constructor() {
    super(ct.YEAR_MONTH);
  }
}
class Yt extends y {
  constructor(t) {
    super(l.Duration), this.unit = t;
  }
  toString() {
    return `Duration<${f[this.unit]}>`;
  }
}
Do = Symbol.toStringTag;
Yt[Do] = ((i) => (i.unit = null, i.ArrayType = BigInt64Array, i[Symbol.toStringTag] = "Duration"))(Yt.prototype);
class xl extends Yt {
  constructor() {
    super(f.SECOND);
  }
}
class kl extends Yt {
  constructor() {
    super(f.MILLISECOND);
  }
}
class Vl extends Yt {
  constructor() {
    super(f.MICROSECOND);
  }
}
class zl extends Yt {
  constructor() {
    super(f.NANOSECOND);
  }
}
class _e extends y {
  constructor(t) {
    super(l.List), this.children = [t];
  }
  toString() {
    return `List<${this.valueType}>`;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
}
Fo = Symbol.toStringTag;
_e[Fo] = ((i) => (i.children = null, i[Symbol.toStringTag] = "List"))(_e.prototype);
class J extends y {
  constructor(t) {
    super(l.Struct), this.children = t;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
No = Symbol.toStringTag;
J[No] = ((i) => (i.children = null, i[Symbol.toStringTag] = "Struct"))(J.prototype);
class ce extends y {
  constructor(t, e, n) {
    super(l.Union), this.mode = t, this.children = n, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce((s, r, o) => (s[r] = o) && s || s, /* @__PURE__ */ Object.create(null));
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
}
Ro = Symbol.toStringTag;
ce[Ro] = ((i) => (i.mode = null, i.typeIds = null, i.children = null, i.typeIdToChildIndex = null, i.ArrayType = Int8Array, i[Symbol.toStringTag] = "Union"))(ce.prototype);
class jl extends ce {
  constructor(t, e) {
    super(H.Dense, t, e);
  }
}
class Wl extends ce {
  constructor(t, e) {
    super(H.Sparse, t, e);
  }
}
class pi extends y {
  constructor(t) {
    super(l.FixedSizeBinary), this.byteWidth = t;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
}
Lo = Symbol.toStringTag;
pi[Lo] = ((i) => (i.byteWidth = null, i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "FixedSizeBinary"))(pi.prototype);
class He extends y {
  constructor(t, e) {
    super(l.FixedSizeList), this.listSize = t, this.children = [e];
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
  toString() {
    return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
  }
}
Mo = Symbol.toStringTag;
He[Mo] = ((i) => (i.children = null, i.listSize = null, i[Symbol.toStringTag] = "FixedSizeList"))(He.prototype);
class Ke extends y {
  constructor(t, e = !1) {
    var n, s, r;
    if (super(l.Map), this.children = [t], this.keysSorted = e, t && (t.name = "entries", !((n = t?.type) === null || n === void 0) && n.children)) {
      const o = (s = t?.type) === null || s === void 0 ? void 0 : s.children[0];
      o && (o.name = "key");
      const a = (r = t?.type) === null || r === void 0 ? void 0 : r.children[1];
      a && (a.name = "value");
    }
  }
  get keyType() {
    return this.children[0].type.children[0].type;
  }
  get valueType() {
    return this.children[0].type.children[1].type;
  }
  get childType() {
    return this.children[0].type;
  }
  toString() {
    return `Map<{${this.children[0].type.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
Uo = Symbol.toStringTag;
Ke[Uo] = ((i) => (i.children = null, i.keysSorted = null, i[Symbol.toStringTag] = "Map_"))(Ke.prototype);
const $l = /* @__PURE__ */ ((i) => () => ++i)(-1);
class Gt extends y {
  constructor(t, e, n, s) {
    super(l.Dictionary), this.indices = e, this.dictionary = t, this.isOrdered = s || !1, this.id = n == null ? $l() : z(n);
  }
  get children() {
    return this.dictionary.children;
  }
  get valueType() {
    return this.dictionary;
  }
  get ArrayType() {
    return this.dictionary.ArrayType;
  }
  toString() {
    return `Dictionary<${this.indices}, ${this.dictionary}>`;
  }
}
Co = Symbol.toStringTag;
Gt[Co] = ((i) => (i.id = null, i.indices = null, i.isOrdered = null, i.dictionary = null, i[Symbol.toStringTag] = "Dictionary"))(Gt.prototype);
function Et(i) {
  const t = i;
  switch (i.typeId) {
    case l.Decimal:
      return i.bitWidth / 32;
    case l.Interval:
      return 1 + t.unit;
    // case Type.Int: return 1 + +((t as Int_).bitWidth > 32);
    // case Type.Time: return 1 + +((t as Time_).bitWidth > 32);
    case l.FixedSizeList:
      return t.listSize;
    case l.FixedSizeBinary:
      return t.byteWidth;
    default:
      return 1;
  }
}
class D {
  visitMany(t, ...e) {
    return t.map((n, s) => this.visit(n, ...e.map((r) => r[s])));
  }
  visit(...t) {
    return this.getVisitFn(t[0], !1).apply(this, t);
  }
  getVisitFn(t, e = !0) {
    return Yl(this, t, e);
  }
  getVisitFnByTypeId(t, e = !0) {
    return Ue(this, t, e);
  }
  visitNull(t, ...e) {
    return null;
  }
  visitBool(t, ...e) {
    return null;
  }
  visitInt(t, ...e) {
    return null;
  }
  visitFloat(t, ...e) {
    return null;
  }
  visitUtf8(t, ...e) {
    return null;
  }
  visitLargeUtf8(t, ...e) {
    return null;
  }
  visitBinary(t, ...e) {
    return null;
  }
  visitLargeBinary(t, ...e) {
    return null;
  }
  visitFixedSizeBinary(t, ...e) {
    return null;
  }
  visitDate(t, ...e) {
    return null;
  }
  visitTimestamp(t, ...e) {
    return null;
  }
  visitTime(t, ...e) {
    return null;
  }
  visitDecimal(t, ...e) {
    return null;
  }
  visitList(t, ...e) {
    return null;
  }
  visitStruct(t, ...e) {
    return null;
  }
  visitUnion(t, ...e) {
    return null;
  }
  visitDictionary(t, ...e) {
    return null;
  }
  visitInterval(t, ...e) {
    return null;
  }
  visitDuration(t, ...e) {
    return null;
  }
  visitFixedSizeList(t, ...e) {
    return null;
  }
  visitMap(t, ...e) {
    return null;
  }
}
function Yl(i, t, e = !0) {
  return typeof t == "number" ? Ue(i, t, e) : typeof t == "string" && t in l ? Ue(i, l[t], e) : t && t instanceof y ? Ue(i, Lr(t), e) : t?.type && t.type instanceof y ? Ue(i, Lr(t.type), e) : Ue(i, l.NONE, e);
}
function Ue(i, t, e = !0) {
  let n = null;
  switch (t) {
    case l.Null:
      n = i.visitNull;
      break;
    case l.Bool:
      n = i.visitBool;
      break;
    case l.Int:
      n = i.visitInt;
      break;
    case l.Int8:
      n = i.visitInt8 || i.visitInt;
      break;
    case l.Int16:
      n = i.visitInt16 || i.visitInt;
      break;
    case l.Int32:
      n = i.visitInt32 || i.visitInt;
      break;
    case l.Int64:
      n = i.visitInt64 || i.visitInt;
      break;
    case l.Uint8:
      n = i.visitUint8 || i.visitInt;
      break;
    case l.Uint16:
      n = i.visitUint16 || i.visitInt;
      break;
    case l.Uint32:
      n = i.visitUint32 || i.visitInt;
      break;
    case l.Uint64:
      n = i.visitUint64 || i.visitInt;
      break;
    case l.Float:
      n = i.visitFloat;
      break;
    case l.Float16:
      n = i.visitFloat16 || i.visitFloat;
      break;
    case l.Float32:
      n = i.visitFloat32 || i.visitFloat;
      break;
    case l.Float64:
      n = i.visitFloat64 || i.visitFloat;
      break;
    case l.Utf8:
      n = i.visitUtf8;
      break;
    case l.LargeUtf8:
      n = i.visitLargeUtf8;
      break;
    case l.Binary:
      n = i.visitBinary;
      break;
    case l.LargeBinary:
      n = i.visitLargeBinary;
      break;
    case l.FixedSizeBinary:
      n = i.visitFixedSizeBinary;
      break;
    case l.Date:
      n = i.visitDate;
      break;
    case l.DateDay:
      n = i.visitDateDay || i.visitDate;
      break;
    case l.DateMillisecond:
      n = i.visitDateMillisecond || i.visitDate;
      break;
    case l.Timestamp:
      n = i.visitTimestamp;
      break;
    case l.TimestampSecond:
      n = i.visitTimestampSecond || i.visitTimestamp;
      break;
    case l.TimestampMillisecond:
      n = i.visitTimestampMillisecond || i.visitTimestamp;
      break;
    case l.TimestampMicrosecond:
      n = i.visitTimestampMicrosecond || i.visitTimestamp;
      break;
    case l.TimestampNanosecond:
      n = i.visitTimestampNanosecond || i.visitTimestamp;
      break;
    case l.Time:
      n = i.visitTime;
      break;
    case l.TimeSecond:
      n = i.visitTimeSecond || i.visitTime;
      break;
    case l.TimeMillisecond:
      n = i.visitTimeMillisecond || i.visitTime;
      break;
    case l.TimeMicrosecond:
      n = i.visitTimeMicrosecond || i.visitTime;
      break;
    case l.TimeNanosecond:
      n = i.visitTimeNanosecond || i.visitTime;
      break;
    case l.Decimal:
      n = i.visitDecimal;
      break;
    case l.List:
      n = i.visitList;
      break;
    case l.Struct:
      n = i.visitStruct;
      break;
    case l.Union:
      n = i.visitUnion;
      break;
    case l.DenseUnion:
      n = i.visitDenseUnion || i.visitUnion;
      break;
    case l.SparseUnion:
      n = i.visitSparseUnion || i.visitUnion;
      break;
    case l.Dictionary:
      n = i.visitDictionary;
      break;
    case l.Interval:
      n = i.visitInterval;
      break;
    case l.IntervalDayTime:
      n = i.visitIntervalDayTime || i.visitInterval;
      break;
    case l.IntervalYearMonth:
      n = i.visitIntervalYearMonth || i.visitInterval;
      break;
    case l.Duration:
      n = i.visitDuration;
      break;
    case l.DurationSecond:
      n = i.visitDurationSecond || i.visitDuration;
      break;
    case l.DurationMillisecond:
      n = i.visitDurationMillisecond || i.visitDuration;
      break;
    case l.DurationMicrosecond:
      n = i.visitDurationMicrosecond || i.visitDuration;
      break;
    case l.DurationNanosecond:
      n = i.visitDurationNanosecond || i.visitDuration;
      break;
    case l.FixedSizeList:
      n = i.visitFixedSizeList;
      break;
    case l.Map:
      n = i.visitMap;
      break;
  }
  if (typeof n == "function")
    return n;
  if (!e)
    return () => null;
  throw new Error(`Unrecognized type '${l[t]}'`);
}
function Lr(i) {
  switch (i.typeId) {
    case l.Null:
      return l.Null;
    case l.Int: {
      const { bitWidth: t, isSigned: e } = i;
      switch (t) {
        case 8:
          return e ? l.Int8 : l.Uint8;
        case 16:
          return e ? l.Int16 : l.Uint16;
        case 32:
          return e ? l.Int32 : l.Uint32;
        case 64:
          return e ? l.Int64 : l.Uint64;
      }
      return l.Int;
    }
    case l.Float:
      switch (i.precision) {
        case q.HALF:
          return l.Float16;
        case q.SINGLE:
          return l.Float32;
        case q.DOUBLE:
          return l.Float64;
      }
      return l.Float;
    case l.Binary:
      return l.Binary;
    case l.LargeBinary:
      return l.LargeBinary;
    case l.Utf8:
      return l.Utf8;
    case l.LargeUtf8:
      return l.LargeUtf8;
    case l.Bool:
      return l.Bool;
    case l.Decimal:
      return l.Decimal;
    case l.Time:
      switch (i.unit) {
        case f.SECOND:
          return l.TimeSecond;
        case f.MILLISECOND:
          return l.TimeMillisecond;
        case f.MICROSECOND:
          return l.TimeMicrosecond;
        case f.NANOSECOND:
          return l.TimeNanosecond;
      }
      return l.Time;
    case l.Timestamp:
      switch (i.unit) {
        case f.SECOND:
          return l.TimestampSecond;
        case f.MILLISECOND:
          return l.TimestampMillisecond;
        case f.MICROSECOND:
          return l.TimestampMicrosecond;
        case f.NANOSECOND:
          return l.TimestampNanosecond;
      }
      return l.Timestamp;
    case l.Date:
      switch (i.unit) {
        case X.DAY:
          return l.DateDay;
        case X.MILLISECOND:
          return l.DateMillisecond;
      }
      return l.Date;
    case l.Interval:
      switch (i.unit) {
        case ct.DAY_TIME:
          return l.IntervalDayTime;
        case ct.YEAR_MONTH:
          return l.IntervalYearMonth;
      }
      return l.Interval;
    case l.Duration:
      switch (i.unit) {
        case f.SECOND:
          return l.DurationSecond;
        case f.MILLISECOND:
          return l.DurationMillisecond;
        case f.MICROSECOND:
          return l.DurationMicrosecond;
        case f.NANOSECOND:
          return l.DurationNanosecond;
      }
      return l.Duration;
    case l.Map:
      return l.Map;
    case l.List:
      return l.List;
    case l.Struct:
      return l.Struct;
    case l.Union:
      switch (i.mode) {
        case H.Dense:
          return l.DenseUnion;
        case H.Sparse:
          return l.SparseUnion;
      }
      return l.Union;
    case l.FixedSizeBinary:
      return l.FixedSizeBinary;
    case l.FixedSizeList:
      return l.FixedSizeList;
    case l.Dictionary:
      return l.Dictionary;
  }
  throw new Error(`Unrecognized type '${l[i.typeId]}'`);
}
D.prototype.visitInt8 = null;
D.prototype.visitInt16 = null;
D.prototype.visitInt32 = null;
D.prototype.visitInt64 = null;
D.prototype.visitUint8 = null;
D.prototype.visitUint16 = null;
D.prototype.visitUint32 = null;
D.prototype.visitUint64 = null;
D.prototype.visitFloat16 = null;
D.prototype.visitFloat32 = null;
D.prototype.visitFloat64 = null;
D.prototype.visitDateDay = null;
D.prototype.visitDateMillisecond = null;
D.prototype.visitTimestampSecond = null;
D.prototype.visitTimestampMillisecond = null;
D.prototype.visitTimestampMicrosecond = null;
D.prototype.visitTimestampNanosecond = null;
D.prototype.visitTimeSecond = null;
D.prototype.visitTimeMillisecond = null;
D.prototype.visitTimeMicrosecond = null;
D.prototype.visitTimeNanosecond = null;
D.prototype.visitDenseUnion = null;
D.prototype.visitSparseUnion = null;
D.prototype.visitIntervalDayTime = null;
D.prototype.visitIntervalYearMonth = null;
D.prototype.visitDuration = null;
D.prototype.visitDurationSecond = null;
D.prototype.visitDurationMillisecond = null;
D.prototype.visitDurationMicrosecond = null;
D.prototype.visitDurationNanosecond = null;
const ko = new Float64Array(1), Oe = new Uint32Array(ko.buffer);
function ls(i) {
  const t = (i & 31744) >> 10, e = (i & 1023) / 1024, n = Math.pow(-1, (i & 32768) >> 15);
  switch (t) {
    case 31:
      return n * (e ? Number.NaN : 1 / 0);
    case 0:
      return n * (e ? 6103515625e-14 * e : 0);
  }
  return n * Math.pow(2, t - 15) * (1 + e);
}
function us(i) {
  if (i !== i)
    return 32256;
  ko[0] = i;
  const t = (Oe[1] & 2147483648) >> 16 & 65535;
  let e = Oe[1] & 2146435072, n = 0;
  return e >= 1089470464 ? Oe[0] > 0 ? e = 31744 : (e = (e & 2080374784) >> 16, n = (Oe[1] & 1048575) >> 10) : e <= 1056964608 ? (n = 1048576 + (Oe[1] & 1048575), n = 1048576 + (n << (e >> 20) - 998) >> 21, e = 0) : (e = e - 1056964608 >> 10, n = (Oe[1] & 1048575) + 512 >> 10), t | e | n & 65535;
}
const Gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  float64ToUint16: us,
  uint16ToFloat64: ls
}, Symbol.toStringTag, { value: "Module" }));
class w extends D {
}
function T(i) {
  return (t, e, n) => {
    if (t.setValid(e, n != null))
      return i(t, e, n);
  };
}
const ql = (i, t, e) => {
  i[t] = Math.floor(e / 864e5);
}, Vo = (i, t, e, n) => {
  if (e + 1 < t.length) {
    const s = z(t[e]), r = z(t[e + 1]);
    i.set(n.subarray(0, r - s), s);
  }
}, Hl = ({ offset: i, values: t }, e, n) => {
  const s = i + e;
  n ? t[s >> 3] |= 1 << s % 8 : t[s >> 3] &= ~(1 << s % 8);
}, qt = ({ values: i }, t, e) => {
  i[t] = e;
}, ds = ({ values: i }, t, e) => {
  i[t] = e;
}, zo = ({ values: i }, t, e) => {
  i[t] = us(e);
}, Kl = (i, t, e) => {
  switch (i.type.precision) {
    case q.HALF:
      return zo(i, t, e);
    case q.SINGLE:
    case q.DOUBLE:
      return ds(i, t, e);
  }
}, hs = ({ values: i }, t, e) => {
  ql(i, t, e.valueOf());
}, fs = ({ values: i }, t, e) => {
  i[t] = BigInt(e);
}, jo = ({ stride: i, values: t }, e, n) => {
  t.set(n.subarray(0, i), i * e);
}, Wo = ({ values: i, valueOffsets: t }, e, n) => Vo(i, t, e, n), $o = ({ values: i, valueOffsets: t }, e, n) => Vo(i, t, e, wi(n)), Yo = (i, t, e) => {
  i.type.unit === X.DAY ? hs(i, t, e) : fs(i, t, e);
}, ys = ({ values: i }, t, e) => {
  i[t] = BigInt(e / 1e3);
}, ps = ({ values: i }, t, e) => {
  i[t] = BigInt(e);
}, gs = ({ values: i }, t, e) => {
  i[t] = BigInt(e * 1e3);
}, _s = ({ values: i }, t, e) => {
  i[t] = BigInt(e * 1e6);
}, Go = (i, t, e) => {
  switch (i.type.unit) {
    case f.SECOND:
      return ys(i, t, e);
    case f.MILLISECOND:
      return ps(i, t, e);
    case f.MICROSECOND:
      return gs(i, t, e);
    case f.NANOSECOND:
      return _s(i, t, e);
  }
}, ms = ({ values: i }, t, e) => {
  i[t] = e;
}, bs = ({ values: i }, t, e) => {
  i[t] = e;
}, vs = ({ values: i }, t, e) => {
  i[t] = e;
}, Is = ({ values: i }, t, e) => {
  i[t] = e;
}, qo = (i, t, e) => {
  switch (i.type.unit) {
    case f.SECOND:
      return ms(i, t, e);
    case f.MILLISECOND:
      return bs(i, t, e);
    case f.MICROSECOND:
      return vs(i, t, e);
    case f.NANOSECOND:
      return Is(i, t, e);
  }
}, Ho = ({ values: i, stride: t }, e, n) => {
  i.set(n.subarray(0, t), t * e);
}, Ql = (i, t, e) => {
  const n = i.children[0], s = i.valueOffsets, r = _t.getVisitFn(n);
  if (Array.isArray(e))
    for (let o = -1, a = s[t], c = s[t + 1]; a < c; )
      r(n, a++, e[++o]);
  else
    for (let o = -1, a = s[t], c = s[t + 1]; a < c; )
      r(n, a++, e.get(++o));
}, Jl = (i, t, e) => {
  const n = i.children[0], { valueOffsets: s } = i, r = _t.getVisitFn(n);
  let { [t]: o, [t + 1]: a } = s;
  const c = e instanceof Map ? e.entries() : Object.entries(e);
  for (const u of c)
    if (r(n, o, u), ++o >= a)
      break;
}, Zl = (i, t) => (e, n, s, r) => n && e(n, i, t[r]), Xl = (i, t) => (e, n, s, r) => n && e(n, i, t.get(r)), tu = (i, t) => (e, n, s, r) => n && e(n, i, t.get(s.name)), eu = (i, t) => (e, n, s, r) => n && e(n, i, t[s.name]), iu = (i, t, e) => {
  const n = i.type.children.map((r) => _t.getVisitFn(r.type)), s = e instanceof Map ? tu(t, e) : e instanceof g ? Xl(t, e) : Array.isArray(e) ? Zl(t, e) : eu(t, e);
  i.type.children.forEach((r, o) => s(n[o], i.children[o], r, o));
}, nu = (i, t, e) => {
  i.type.mode === H.Dense ? Ko(i, t, e) : Qo(i, t, e);
}, Ko = (i, t, e) => {
  const n = i.type.typeIdToChildIndex[i.typeIds[t]], s = i.children[n];
  _t.visit(s, i.valueOffsets[t], e);
}, Qo = (i, t, e) => {
  const n = i.type.typeIdToChildIndex[i.typeIds[t]], s = i.children[n];
  _t.visit(s, t, e);
}, su = (i, t, e) => {
  var n;
  (n = i.dictionary) === null || n === void 0 || n.set(i.values[t], e);
}, Jo = (i, t, e) => {
  i.type.unit === ct.DAY_TIME ? ws(i, t, e) : Ss(i, t, e);
}, ws = ({ values: i }, t, e) => {
  i.set(e.subarray(0, 2), 2 * t);
}, Ss = ({ values: i }, t, e) => {
  i[t] = e[0] * 12 + e[1] % 12;
}, As = ({ values: i }, t, e) => {
  i[t] = e;
}, Ts = ({ values: i }, t, e) => {
  i[t] = e;
}, Os = ({ values: i }, t, e) => {
  i[t] = e;
}, Bs = ({ values: i }, t, e) => {
  i[t] = e;
}, Zo = (i, t, e) => {
  switch (i.type.unit) {
    case f.SECOND:
      return As(i, t, e);
    case f.MILLISECOND:
      return Ts(i, t, e);
    case f.MICROSECOND:
      return Os(i, t, e);
    case f.NANOSECOND:
      return Bs(i, t, e);
  }
}, ru = (i, t, e) => {
  const { stride: n } = i, s = i.children[0], r = _t.getVisitFn(s);
  if (Array.isArray(e))
    for (let o = -1, a = t * n; ++o < n; )
      r(s, a + o, e[o]);
  else
    for (let o = -1, a = t * n; ++o < n; )
      r(s, a + o, e.get(o));
};
w.prototype.visitBool = T(Hl);
w.prototype.visitInt = T(qt);
w.prototype.visitInt8 = T(qt);
w.prototype.visitInt16 = T(qt);
w.prototype.visitInt32 = T(qt);
w.prototype.visitInt64 = T(qt);
w.prototype.visitUint8 = T(qt);
w.prototype.visitUint16 = T(qt);
w.prototype.visitUint32 = T(qt);
w.prototype.visitUint64 = T(qt);
w.prototype.visitFloat = T(Kl);
w.prototype.visitFloat16 = T(zo);
w.prototype.visitFloat32 = T(ds);
w.prototype.visitFloat64 = T(ds);
w.prototype.visitUtf8 = T($o);
w.prototype.visitLargeUtf8 = T($o);
w.prototype.visitBinary = T(Wo);
w.prototype.visitLargeBinary = T(Wo);
w.prototype.visitFixedSizeBinary = T(jo);
w.prototype.visitDate = T(Yo);
w.prototype.visitDateDay = T(hs);
w.prototype.visitDateMillisecond = T(fs);
w.prototype.visitTimestamp = T(Go);
w.prototype.visitTimestampSecond = T(ys);
w.prototype.visitTimestampMillisecond = T(ps);
w.prototype.visitTimestampMicrosecond = T(gs);
w.prototype.visitTimestampNanosecond = T(_s);
w.prototype.visitTime = T(qo);
w.prototype.visitTimeSecond = T(ms);
w.prototype.visitTimeMillisecond = T(bs);
w.prototype.visitTimeMicrosecond = T(vs);
w.prototype.visitTimeNanosecond = T(Is);
w.prototype.visitDecimal = T(Ho);
w.prototype.visitList = T(Ql);
w.prototype.visitStruct = T(iu);
w.prototype.visitUnion = T(nu);
w.prototype.visitDenseUnion = T(Ko);
w.prototype.visitSparseUnion = T(Qo);
w.prototype.visitDictionary = T(su);
w.prototype.visitInterval = T(Jo);
w.prototype.visitIntervalDayTime = T(ws);
w.prototype.visitIntervalYearMonth = T(Ss);
w.prototype.visitDuration = T(Zo);
w.prototype.visitDurationSecond = T(As);
w.prototype.visitDurationMillisecond = T(Ts);
w.prototype.visitDurationMicrosecond = T(Os);
w.prototype.visitDurationNanosecond = T(Bs);
w.prototype.visitFixedSizeList = T(ru);
w.prototype.visitMap = T(Jl);
const _t = new w(), vt = Symbol.for("parent"), Ve = Symbol.for("rowIndex");
class pn {
  constructor(t, e) {
    return this[vt] = t, this[Ve] = e, new Proxy(this, new au());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Ve], e = this[vt], n = e.type.children, s = {};
    for (let r = -1, o = n.length; ++r < o; )
      s[n[r].name] = lt.visit(e.children[r], t);
    return s;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${re(t)}: ${re(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new ou(this[vt], this[Ve]);
  }
}
class ou {
  constructor(t, e) {
    this.childIndex = 0, this.children = t.children, this.rowIndex = e, this.childFields = t.type.children, this.numChildren = this.childFields.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const t = this.childIndex;
    return t < this.numChildren ? (this.childIndex = t + 1, {
      done: !1,
      value: [
        this.childFields[t].name,
        lt.visit(this.children[t], this.rowIndex)
      ]
    }) : { done: !0, value: null };
  }
}
Object.defineProperties(pn.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [vt]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [Ve]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
});
class au {
  isExtensible() {
    return !1;
  }
  deleteProperty() {
    return !1;
  }
  preventExtensions() {
    return !0;
  }
  ownKeys(t) {
    return t[vt].type.children.map((e) => e.name);
  }
  has(t, e) {
    return t[vt].type.children.findIndex((n) => n.name === e) !== -1;
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[vt].type.children.findIndex((n) => n.name === e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const n = t[vt].type.children.findIndex((s) => s.name === e);
    if (n !== -1) {
      const s = lt.visit(t[vt].children[n], t[Ve]);
      return Reflect.set(t, e, s), s;
    }
  }
  set(t, e, n) {
    const s = t[vt].type.children.findIndex((r) => r.name === e);
    return s !== -1 ? (_t.visit(t[vt].children[s], t[Ve], n), Reflect.set(t, e, n)) : Reflect.has(t, e) || typeof e == "symbol" ? Reflect.set(t, e, n) : !1;
  }
}
class m extends D {
}
function S(i) {
  return (t, e) => t.getValid(e) ? i(t, e) : null;
}
const cu = (i, t) => 864e5 * i[t], lu = (i, t) => null, Xo = (i, t, e) => {
  if (e + 1 >= t.length)
    return null;
  const n = z(t[e]), s = z(t[e + 1]);
  return i.subarray(n, s);
}, uu = ({ offset: i, values: t }, e) => {
  const n = i + e;
  return (t[n >> 3] & 1 << n % 8) !== 0;
}, ta = ({ values: i }, t) => cu(i, t), ea = ({ values: i }, t) => z(i[t]), de = ({ stride: i, values: t }, e) => t[i * e], du = ({ stride: i, values: t }, e) => ls(t[i * e]), ia = ({ values: i }, t) => i[t], hu = ({ stride: i, values: t }, e) => t.subarray(i * e, i * (e + 1)), na = ({ values: i, valueOffsets: t }, e) => Xo(i, t, e), sa = ({ values: i, valueOffsets: t }, e) => {
  const n = Xo(i, t, e);
  return n !== null ? kn(n) : null;
}, fu = ({ values: i }, t) => i[t], yu = ({ type: i, values: t }, e) => i.precision !== q.HALF ? t[e] : ls(t[e]), pu = (i, t) => i.type.unit === X.DAY ? ta(i, t) : ea(i, t), ra = ({ values: i }, t) => 1e3 * z(i[t]), oa = ({ values: i }, t) => z(i[t]), aa = ({ values: i }, t) => ho(i[t], BigInt(1e3)), ca = ({ values: i }, t) => ho(i[t], BigInt(1e6)), gu = (i, t) => {
  switch (i.type.unit) {
    case f.SECOND:
      return ra(i, t);
    case f.MILLISECOND:
      return oa(i, t);
    case f.MICROSECOND:
      return aa(i, t);
    case f.NANOSECOND:
      return ca(i, t);
  }
}, la = ({ values: i }, t) => i[t], ua = ({ values: i }, t) => i[t], da = ({ values: i }, t) => i[t], ha = ({ values: i }, t) => i[t], _u = (i, t) => {
  switch (i.type.unit) {
    case f.SECOND:
      return la(i, t);
    case f.MILLISECOND:
      return ua(i, t);
    case f.MICROSECOND:
      return da(i, t);
    case f.NANOSECOND:
      return ha(i, t);
  }
}, mu = ({ values: i, stride: t }, e) => Si.decimal(i.subarray(t * e, t * (e + 1))), bu = (i, t) => {
  const { valueOffsets: e, stride: n, children: s } = i, { [t * n]: r, [t * n + 1]: o } = e, c = s[0].slice(r, o - r);
  return new g([c]);
}, vu = (i, t) => {
  const { valueOffsets: e, children: n } = i, { [t]: s, [t + 1]: r } = e, o = n[0];
  return new Ai(o.slice(s, r - s));
}, Iu = (i, t) => new pn(i, t), wu = (i, t) => i.type.mode === H.Dense ? fa(i, t) : ya(i, t), fa = (i, t) => {
  const e = i.type.typeIdToChildIndex[i.typeIds[t]], n = i.children[e];
  return lt.visit(n, i.valueOffsets[t]);
}, ya = (i, t) => {
  const e = i.type.typeIdToChildIndex[i.typeIds[t]], n = i.children[e];
  return lt.visit(n, t);
}, Su = (i, t) => {
  var e;
  return (e = i.dictionary) === null || e === void 0 ? void 0 : e.get(i.values[t]);
}, Au = (i, t) => i.type.unit === ct.DAY_TIME ? pa(i, t) : ga(i, t), pa = ({ values: i }, t) => i.subarray(2 * t, 2 * (t + 1)), ga = ({ values: i }, t) => {
  const e = i[t], n = new Int32Array(2);
  return n[0] = Math.trunc(e / 12), n[1] = Math.trunc(e % 12), n;
}, _a = ({ values: i }, t) => i[t], ma = ({ values: i }, t) => i[t], ba = ({ values: i }, t) => i[t], va = ({ values: i }, t) => i[t], Tu = (i, t) => {
  switch (i.type.unit) {
    case f.SECOND:
      return _a(i, t);
    case f.MILLISECOND:
      return ma(i, t);
    case f.MICROSECOND:
      return ba(i, t);
    case f.NANOSECOND:
      return va(i, t);
  }
}, Ou = (i, t) => {
  const { stride: e, children: n } = i, r = n[0].slice(t * e, e);
  return new g([r]);
};
m.prototype.visitNull = S(lu);
m.prototype.visitBool = S(uu);
m.prototype.visitInt = S(fu);
m.prototype.visitInt8 = S(de);
m.prototype.visitInt16 = S(de);
m.prototype.visitInt32 = S(de);
m.prototype.visitInt64 = S(ia);
m.prototype.visitUint8 = S(de);
m.prototype.visitUint16 = S(de);
m.prototype.visitUint32 = S(de);
m.prototype.visitUint64 = S(ia);
m.prototype.visitFloat = S(yu);
m.prototype.visitFloat16 = S(du);
m.prototype.visitFloat32 = S(de);
m.prototype.visitFloat64 = S(de);
m.prototype.visitUtf8 = S(sa);
m.prototype.visitLargeUtf8 = S(sa);
m.prototype.visitBinary = S(na);
m.prototype.visitLargeBinary = S(na);
m.prototype.visitFixedSizeBinary = S(hu);
m.prototype.visitDate = S(pu);
m.prototype.visitDateDay = S(ta);
m.prototype.visitDateMillisecond = S(ea);
m.prototype.visitTimestamp = S(gu);
m.prototype.visitTimestampSecond = S(ra);
m.prototype.visitTimestampMillisecond = S(oa);
m.prototype.visitTimestampMicrosecond = S(aa);
m.prototype.visitTimestampNanosecond = S(ca);
m.prototype.visitTime = S(_u);
m.prototype.visitTimeSecond = S(la);
m.prototype.visitTimeMillisecond = S(ua);
m.prototype.visitTimeMicrosecond = S(da);
m.prototype.visitTimeNanosecond = S(ha);
m.prototype.visitDecimal = S(mu);
m.prototype.visitList = S(bu);
m.prototype.visitStruct = S(Iu);
m.prototype.visitUnion = S(wu);
m.prototype.visitDenseUnion = S(fa);
m.prototype.visitSparseUnion = S(ya);
m.prototype.visitDictionary = S(Su);
m.prototype.visitInterval = S(Au);
m.prototype.visitIntervalDayTime = S(pa);
m.prototype.visitIntervalYearMonth = S(ga);
m.prototype.visitDuration = S(Tu);
m.prototype.visitDurationSecond = S(_a);
m.prototype.visitDurationMillisecond = S(ma);
m.prototype.visitDurationMicrosecond = S(ba);
m.prototype.visitDurationNanosecond = S(va);
m.prototype.visitFixedSizeList = S(Ou);
m.prototype.visitMap = S(vu);
const lt = new m(), fe = Symbol.for("keys"), ze = Symbol.for("vals"), Ce = Symbol.for("kKeysAsStrings"), Gn = Symbol.for("_kKeysAsStrings");
class Ai {
  constructor(t) {
    return this[fe] = new g([t.children[0]]).memoize(), this[ze] = t.children[1], new Proxy(this, new Eu());
  }
  /** @ignore */
  get [Ce]() {
    return this[Gn] || (this[Gn] = Array.from(this[fe].toArray(), String));
  }
  [Symbol.iterator]() {
    return new Bu(this[fe], this[ze]);
  }
  get size() {
    return this[fe].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[fe], e = this[ze], n = {};
    for (let s = -1, r = t.length; ++s < r; )
      n[t.get(s)] = lt.visit(e, s);
    return n;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${re(t)}: ${re(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
class Bu {
  constructor(t, e) {
    this.keys = t, this.vals = e, this.keyIndex = 0, this.numKeys = t.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const t = this.keyIndex;
    return t === this.numKeys ? { done: !0, value: null } : (this.keyIndex++, {
      done: !1,
      value: [
        this.keys.get(t),
        lt.visit(this.vals, t)
      ]
    });
  }
}
class Eu {
  isExtensible() {
    return !1;
  }
  deleteProperty() {
    return !1;
  }
  preventExtensions() {
    return !0;
  }
  ownKeys(t) {
    return t[Ce];
  }
  has(t, e) {
    return t[Ce].includes(e);
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[Ce].indexOf(e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const n = t[Ce].indexOf(e);
    if (n !== -1) {
      const s = lt.visit(Reflect.get(t, ze), n);
      return Reflect.set(t, e, s), s;
    }
  }
  set(t, e, n) {
    const s = t[Ce].indexOf(e);
    return s !== -1 ? (_t.visit(Reflect.get(t, ze), s, n), Reflect.set(t, e, n)) : Reflect.has(t, e) ? Reflect.set(t, e, n) : !1;
  }
}
Object.defineProperties(Ai.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [fe]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [ze]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [Gn]: { writable: !0, enumerable: !1, configurable: !1, value: null }
});
let Mr;
function Es(i, t, e, n) {
  const { length: s = 0 } = i;
  let r = typeof t != "number" ? 0 : t, o = typeof e != "number" ? s : e;
  return r < 0 && (r = (r % s + s) % s), o < 0 && (o = (o % s + s) % s), o < r && (Mr = r, r = o, o = Mr), o > s && (o = s), n ? n(i, r, o) : [r, o];
}
const gn = (i, t) => i < 0 ? t + i : i, Ur = (i) => i !== i;
function ve(i) {
  if (typeof i !== "object" || i === null)
    return Ur(i) ? Ur : (e) => e === i;
  if (i instanceof Date) {
    const e = i.valueOf();
    return (n) => n instanceof Date ? n.valueOf() === e : !1;
  }
  return ArrayBuffer.isView(i) ? (e) => e ? ro(i, e) : !1 : i instanceof Map ? Fu(i) : Array.isArray(i) ? Du(i) : i instanceof g ? Nu(i) : Ru(i, !0);
}
function Du(i) {
  const t = [];
  for (let e = -1, n = i.length; ++e < n; )
    t[e] = ve(i[e]);
  return _n(t);
}
function Fu(i) {
  let t = -1;
  const e = [];
  for (const n of i.values())
    e[++t] = ve(n);
  return _n(e);
}
function Nu(i) {
  const t = [];
  for (let e = -1, n = i.length; ++e < n; )
    t[e] = ve(i.get(e));
  return _n(t);
}
function Ru(i, t = !1) {
  const e = Object.keys(i);
  if (!t && e.length === 0)
    return () => !1;
  const n = [];
  for (let s = -1, r = e.length; ++s < r; )
    n[s] = ve(i[e[s]]);
  return _n(n, e);
}
function _n(i, t) {
  return (e) => {
    if (!e || typeof e != "object")
      return !1;
    switch (e.constructor) {
      case Array:
        return Lu(i, e);
      case Map:
        return Cr(i, e, e.keys());
      case Ai:
      case pn:
      case Object:
      case void 0:
        return Cr(i, e, t || Object.keys(e));
    }
    return e instanceof g ? Mu(i, e) : !1;
  };
}
function Lu(i, t) {
  const e = i.length;
  if (t.length !== e)
    return !1;
  for (let n = -1; ++n < e; )
    if (!i[n](t[n]))
      return !1;
  return !0;
}
function Mu(i, t) {
  const e = i.length;
  if (t.length !== e)
    return !1;
  for (let n = -1; ++n < e; )
    if (!i[n](t.get(n)))
      return !1;
  return !0;
}
function Cr(i, t, e) {
  const n = e[Symbol.iterator](), s = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), r = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const a = i.length;
  let c = r.next(), u = n.next(), d = s.next();
  for (; o < a && !u.done && !d.done && !c.done && !(u.value !== d.value || !i[o](c.value)); ++o, u = n.next(), d = s.next(), c = r.next())
    ;
  return o === a && u.done && d.done && c.done ? !0 : (n.return && n.return(), s.return && s.return(), r.return && r.return(), !1);
}
const Uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clampRange: Es,
  createElementComparator: ve,
  wrapIndex: gn
}, Symbol.toStringTag, { value: "Module" }));
function mn(i, t, e, n) {
  return (e & 1 << n) !== 0;
}
function Ds(i, t, e, n) {
  return (e & 1 << n) >> n;
}
function Cu(i, t, e) {
  return e ? !!(i[t >> 3] |= 1 << t % 8) || !0 : !(i[t >> 3] &= ~(1 << t % 8)) && !1;
}
function gi(i, t, e) {
  const n = e.byteLength + 7 & -8;
  if (i > 0 || e.byteLength < n) {
    const s = new Uint8Array(n);
    return s.set(i % 8 === 0 ? e.subarray(i >> 3) : (
      // Otherwise iterate each bit from the offset and return a new one
      _i(new Qe(e, i, t, null, mn)).subarray(0, n)
    )), s;
  }
  return e;
}
function _i(i) {
  const t = [];
  let e = 0, n = 0, s = 0;
  for (const o of i)
    o && (s |= 1 << n), ++n === 8 && (t[e++] = s, s = n = 0);
  (e === 0 || n > 0) && (t[e++] = s);
  const r = new Uint8Array(t.length + 7 & -8);
  return r.set(t), r;
}
class Qe {
  constructor(t, e, n, s, r) {
    this.bytes = t, this.length = n, this.context = s, this.get = r, this.bit = e % 8, this.byteIndex = e >> 3, this.byte = t[this.byteIndex++], this.index = 0;
  }
  next() {
    return this.index < this.length ? (this.bit === 8 && (this.bit = 0, this.byte = this.bytes[this.byteIndex++]), {
      value: this.get(this.context, this.index++, this.byte, this.bit++)
    }) : { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function nn(i, t, e) {
  if (e - t <= 0)
    return 0;
  if (e - t < 8) {
    let r = 0;
    for (const o of new Qe(i, t, e - t, i, Ds))
      r += o;
    return r;
  }
  const n = e >> 3 << 3, s = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return (
    // Get the popcnt of bits between the left hand side, and the next highest multiple of 8
    nn(i, t, s) + // Get the popcnt of bits between the right hand side, and the next lowest multiple of 8
    nn(i, n, e) + // Get the popcnt of all bits between the left and right hand sides' multiples of 8
    Ia(i, s >> 3, n - s >> 3)
  );
}
function Ia(i, t, e) {
  let n = 0, s = Math.trunc(t);
  const r = new DataView(i.buffer, i.byteOffset, i.byteLength), o = e === void 0 ? i.byteLength : s + e;
  for (; o - s >= 4; )
    n += qi(r.getUint32(s)), s += 4;
  for (; o - s >= 2; )
    n += qi(r.getUint16(s)), s += 2;
  for (; o - s >= 1; )
    n += qi(r.getUint8(s)), s += 1;
  return n;
}
function qi(i) {
  let t = Math.trunc(i);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
const Pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BitIterator: Qe,
  getBit: Ds,
  getBool: mn,
  packBools: _i,
  popcnt_array: Ia,
  popcnt_bit_range: nn,
  popcnt_uint32: qi,
  setBool: Cu,
  truncateBitmap: gi
}, Symbol.toStringTag, { value: "Module" })), xu = -1;
class U {
  get typeId() {
    return this.type.typeId;
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get buffers() {
    return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds];
  }
  get nullable() {
    if (this._nullCount !== 0) {
      const { type: t } = this;
      return y.isSparseUnion(t) ? this.children.some((e) => e.nullable) : y.isDenseUnion(t) ? this.children.some((e) => e.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
    }
    return !0;
  }
  get byteLength() {
    let t = 0;
    const { valueOffsets: e, values: n, nullBitmap: s, typeIds: r } = this;
    return e && (t += e.byteLength), n && (t += n.byteLength), s && (t += s.byteLength), r && (t += r.byteLength), this.children.reduce((o, a) => o + a.byteLength, t);
  }
  get nullCount() {
    if (y.isUnion(this.type))
      return this.children.reduce((n, s) => n + s.nullCount, 0);
    let t = this._nullCount, e;
    return t <= xu && (e = this.nullBitmap) && (this._nullCount = t = e.length === 0 ? (
      // no null bitmap, so all values are valid
      0
    ) : this.length - nn(e, this.offset, this.offset + this.length)), t;
  }
  constructor(t, e, n, s, r, o = [], a) {
    this.type = t, this.children = o, this.dictionary = a, this.offset = Math.floor(Math.max(e || 0, 0)), this.length = Math.floor(Math.max(n || 0, 0)), this._nullCount = Math.floor(Math.max(s || 0, -1));
    let c;
    r instanceof U ? (this.stride = r.stride, this.values = r.values, this.typeIds = r.typeIds, this.nullBitmap = r.nullBitmap, this.valueOffsets = r.valueOffsets) : (this.stride = Et(t), r && ((c = r[0]) && (this.valueOffsets = c), (c = r[1]) && (this.values = c), (c = r[2]) && (this.nullBitmap = c), (c = r[3]) && (this.typeIds = c)));
  }
  getValid(t) {
    const { type: e } = this;
    if (y.isUnion(e)) {
      const n = e, s = this.children[n.typeIdToChildIndex[this.typeIds[t]]], r = n.mode === H.Dense ? this.valueOffsets[t] : t;
      return s.getValid(r);
    }
    if (this.nullable && this.nullCount > 0) {
      const n = this.offset + t;
      return (this.nullBitmap[n >> 3] & 1 << n % 8) !== 0;
    }
    return !0;
  }
  setValid(t, e) {
    let n;
    const { type: s } = this;
    if (y.isUnion(s)) {
      const r = s, o = this.children[r.typeIdToChildIndex[this.typeIds[t]]], a = r.mode === H.Dense ? this.valueOffsets[t] : t;
      n = o.getValid(a), o.setValid(a, e);
    } else {
      let { nullBitmap: r } = this;
      const { offset: o, length: a } = this, c = o + t, u = 1 << c % 8, d = c >> 3;
      (!r || r.byteLength <= d) && (r = new Uint8Array((o + a + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (r.set(gi(o, a, this.nullBitmap), 0), Object.assign(this, { nullBitmap: r })) : Object.assign(this, { nullBitmap: r, _nullCount: 0 }));
      const h = r[d];
      n = (h & u) !== 0, r[d] = e ? h | u : h & ~u;
    }
    return n !== !!e && (this._nullCount = this.nullCount + (e ? -1 : 1)), e;
  }
  clone(t = this.type, e = this.offset, n = this.length, s = this._nullCount, r = this, o = this.children) {
    return new U(t, e, n, s, r, o, this.dictionary);
  }
  slice(t, e) {
    const { stride: n, typeId: s, children: r } = this, o = +(this._nullCount === 0) - 1, a = s === 16 ? n : 1, c = this._sliceBuffers(t, e, n, s);
    return this.clone(
      this.type,
      this.offset + t,
      e,
      o,
      c,
      // Don't slice children if we have value offsets (the variable-width types)
      r.length === 0 || this.valueOffsets ? r : this._sliceChildren(r, a * t, a * e)
    );
  }
  _changeLengthAndBackfillNullBitmap(t) {
    if (this.typeId === l.Null)
      return this.clone(this.type, 0, t, 0);
    const { length: e, nullCount: n } = this, s = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
    s[e >> 3] = (1 << e - (e & -8)) - 1, n > 0 && s.set(gi(this.offset, e, this.nullBitmap), 0);
    const r = this.buffers;
    return r[bt.VALIDITY] = s, this.clone(this.type, 0, t, n + (t - e), r);
  }
  _sliceBuffers(t, e, n, s) {
    let r;
    const { buffers: o } = this;
    return (r = o[bt.TYPE]) && (o[bt.TYPE] = r.subarray(t, t + e)), (r = o[bt.OFFSET]) && (o[bt.OFFSET] = r.subarray(t, t + e + 1)) || // Otherwise if no offsets, slice the data buffer. Don't slice the data vector for Booleans, since the offset goes by bits not bytes
    (r = o[bt.DATA]) && (o[bt.DATA] = s === 6 ? r : r.subarray(n * t, n * (t + e))), o;
  }
  _sliceChildren(t, e, n) {
    return t.map((s) => s.slice(e, n));
  }
}
U.prototype.children = Object.freeze([]);
class li extends D {
  visit(t) {
    return this.getVisitFn(t.type).call(this, t);
  }
  visitNull(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["length"]: s = 0 } = t;
    return new U(e, n, s, s);
  }
  visitBool(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.nullBitmap), r = R(e.ArrayType, t.data), { ["length"]: o = r.length >> 3, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, o, a, [void 0, r, s]);
  }
  visitInt(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.nullBitmap), r = R(e.ArrayType, t.data), { ["length"]: o = r.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, o, a, [void 0, r, s]);
  }
  visitFloat(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.nullBitmap), r = R(e.ArrayType, t.data), { ["length"]: o = r.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, o, a, [void 0, r, s]);
  }
  visitUtf8(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.data), r = N(t.nullBitmap), o = Be(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, a, c, [o, s, r]);
  }
  visitLargeUtf8(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.data), r = N(t.nullBitmap), o = zn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, a, c, [o, s, r]);
  }
  visitBinary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.data), r = N(t.nullBitmap), o = Be(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, a, c, [o, s, r]);
  }
  visitLargeBinary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.data), r = N(t.nullBitmap), o = zn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, a, c, [o, s, r]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.nullBitmap), r = R(e.ArrayType, t.data), { ["length"]: o = r.length / Et(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, o, a, [void 0, r, s]);
  }
  visitDate(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.nullBitmap), r = R(e.ArrayType, t.data), { ["length"]: o = r.length / Et(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, o, a, [void 0, r, s]);
  }
  visitTimestamp(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.nullBitmap), r = R(e.ArrayType, t.data), { ["length"]: o = r.length / Et(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, o, a, [void 0, r, s]);
  }
  visitTime(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.nullBitmap), r = R(e.ArrayType, t.data), { ["length"]: o = r.length / Et(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, o, a, [void 0, r, s]);
  }
  visitDecimal(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.nullBitmap), r = R(e.ArrayType, t.data), { ["length"]: o = r.length / Et(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, o, a, [void 0, r, s]);
  }
  visitList(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["child"]: s } = t, r = N(t.nullBitmap), o = Be(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, a, c, [o, void 0, r], [s]);
  }
  visitStruct(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["children"]: s = [] } = t, r = N(t.nullBitmap), { length: o = s.reduce((c, { length: u }) => Math.max(c, u), 0), nullCount: a = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, o, a, [void 0, void 0, r], s);
  }
  visitUnion(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["children"]: s = [] } = t, r = R(e.ArrayType, t.typeIds), { ["length"]: o = r.length, ["nullCount"]: a = -1 } = t;
    if (y.isSparseUnion(e))
      return new U(e, n, o, a, [void 0, void 0, void 0, r], s);
    const c = Be(t.valueOffsets);
    return new U(e, n, o, a, [c, void 0, void 0, r], s);
  }
  visitDictionary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.nullBitmap), r = R(e.indices.ArrayType, t.data), { ["dictionary"]: o = new g([new li().visit({ type: e.dictionary })]) } = t, { ["length"]: a = r.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, a, c, [void 0, r, s], [], o);
  }
  visitInterval(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.nullBitmap), r = R(e.ArrayType, t.data), { ["length"]: o = r.length / Et(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, o, a, [void 0, r, s]);
  }
  visitDuration(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = N(t.nullBitmap), r = R(e.ArrayType, t.data), { ["length"]: o = r.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, o, a, [void 0, r, s]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["child"]: s = new li().visit({ type: e.valueType }) } = t, r = N(t.nullBitmap), { ["length"]: o = s.length / Et(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, o, a, [void 0, void 0, r], [s]);
  }
  visitMap(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["child"]: s = new li().visit({ type: e.childType }) } = t, r = N(t.nullBitmap), o = Be(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new U(e, n, a, c, [o, void 0, r], [s]);
  }
}
const ku = new li();
function _(i) {
  return ku.visit(i);
}
class Pr {
  constructor(t = 0, e) {
    this.numChunks = t, this.getChunkIterator = e, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0);
  }
  next() {
    for (; this.chunkIndex < this.numChunks; ) {
      const t = this.chunkIterator.next();
      if (!t.done)
        return t;
      ++this.chunkIndex < this.numChunks && (this.chunkIterator = this.getChunkIterator(this.chunkIndex));
    }
    return { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function Vu(i) {
  return i.some((t) => t.nullable);
}
function wa(i) {
  return i.reduce((t, e) => t + e.nullCount, 0);
}
function Sa(i) {
  return i.reduce((t, e, n) => (t[n + 1] = t[n] + e.length, t), new Uint32Array(i.length + 1));
}
function Aa(i, t, e, n) {
  const s = [];
  for (let r = -1, o = i.length; ++r < o; ) {
    const a = i[r], c = t[r], { length: u } = a;
    if (c >= n)
      break;
    if (e >= c + u)
      continue;
    if (c >= e && c + u <= n) {
      s.push(a);
      continue;
    }
    const d = Math.max(0, e - c), h = Math.min(n - c, u);
    s.push(a.slice(d, h - d));
  }
  return s.length === 0 && s.push(i[0].slice(0, 0)), s;
}
function Fs(i, t, e, n) {
  let s = 0, r = 0, o = t.length - 1;
  do {
    if (s >= o - 1)
      return e < t[o] ? n(i, s, e - t[s]) : null;
    r = s + Math.trunc((o - s) * 0.5), e < t[r] ? o = r : s = r;
  } while (s < o);
}
function Ns(i, t) {
  return i.getValid(t);
}
function sn(i) {
  function t(e, n, s) {
    return i(e[n], s);
  }
  return function(e) {
    const n = this.data;
    return Fs(n, this._offsets, e, t);
  };
}
function Ta(i) {
  let t;
  function e(n, s, r) {
    return i(n[s], r, t);
  }
  return function(n, s) {
    const r = this.data;
    t = s;
    const o = Fs(r, this._offsets, n, e);
    return t = void 0, o;
  };
}
function Oa(i) {
  let t;
  function e(n, s, r) {
    let o = r, a = 0, c = 0;
    for (let u = s - 1, d = n.length; ++u < d; ) {
      const h = n[u];
      if (~(a = i(h, t, o)))
        return c + a;
      o = 0, c += h.length;
    }
    return -1;
  }
  return function(n, s) {
    t = n;
    const r = this.data, o = typeof s != "number" ? e(r, 0, 0) : Fs(r, this._offsets, s, e);
    return t = void 0, o;
  };
}
class b extends D {
}
function zu(i, t) {
  return t === null && i.length > 0 ? 0 : -1;
}
function ju(i, t) {
  const { nullBitmap: e } = i;
  if (!e || i.nullCount <= 0)
    return -1;
  let n = 0;
  for (const s of new Qe(e, i.offset + (t || 0), i.length, e, mn)) {
    if (!s)
      return n;
    ++n;
  }
  return -1;
}
function O(i, t, e) {
  if (t === void 0)
    return -1;
  if (t === null)
    switch (i.typeId) {
      // Unions don't have a nullBitmap of its own, so compare the `searchElement` to `get()`.
      case l.Union:
        break;
      // Dictionaries do have a nullBitmap, but their dictionary could also have null elements.
      case l.Dictionary:
        break;
      // All other types can iterate the null bitmap
      default:
        return ju(i, e);
    }
  const n = lt.getVisitFn(i), s = ve(t);
  for (let r = (e || 0) - 1, o = i.length; ++r < o; )
    if (s(n(i, r)))
      return r;
  return -1;
}
function Ba(i, t, e) {
  const n = lt.getVisitFn(i), s = ve(t);
  for (let r = (e || 0) - 1, o = i.length; ++r < o; )
    if (s(n(i, r)))
      return r;
  return -1;
}
b.prototype.visitNull = zu;
b.prototype.visitBool = O;
b.prototype.visitInt = O;
b.prototype.visitInt8 = O;
b.prototype.visitInt16 = O;
b.prototype.visitInt32 = O;
b.prototype.visitInt64 = O;
b.prototype.visitUint8 = O;
b.prototype.visitUint16 = O;
b.prototype.visitUint32 = O;
b.prototype.visitUint64 = O;
b.prototype.visitFloat = O;
b.prototype.visitFloat16 = O;
b.prototype.visitFloat32 = O;
b.prototype.visitFloat64 = O;
b.prototype.visitUtf8 = O;
b.prototype.visitLargeUtf8 = O;
b.prototype.visitBinary = O;
b.prototype.visitLargeBinary = O;
b.prototype.visitFixedSizeBinary = O;
b.prototype.visitDate = O;
b.prototype.visitDateDay = O;
b.prototype.visitDateMillisecond = O;
b.prototype.visitTimestamp = O;
b.prototype.visitTimestampSecond = O;
b.prototype.visitTimestampMillisecond = O;
b.prototype.visitTimestampMicrosecond = O;
b.prototype.visitTimestampNanosecond = O;
b.prototype.visitTime = O;
b.prototype.visitTimeSecond = O;
b.prototype.visitTimeMillisecond = O;
b.prototype.visitTimeMicrosecond = O;
b.prototype.visitTimeNanosecond = O;
b.prototype.visitDecimal = O;
b.prototype.visitList = O;
b.prototype.visitStruct = O;
b.prototype.visitUnion = O;
b.prototype.visitDenseUnion = Ba;
b.prototype.visitSparseUnion = Ba;
b.prototype.visitDictionary = O;
b.prototype.visitInterval = O;
b.prototype.visitIntervalDayTime = O;
b.prototype.visitIntervalYearMonth = O;
b.prototype.visitDuration = O;
b.prototype.visitDurationSecond = O;
b.prototype.visitDurationMillisecond = O;
b.prototype.visitDurationMicrosecond = O;
b.prototype.visitDurationNanosecond = O;
b.prototype.visitFixedSizeList = O;
b.prototype.visitMap = O;
const rn = new b();
class v extends D {
}
function A(i) {
  const { type: t } = i;
  if (i.nullCount === 0 && i.stride === 1 && // Don't defer to native iterator for timestamps since Numbers are expected
  // (DataType.isTimestamp(type)) && type.unit === TimeUnit.MILLISECOND ||
  (y.isInt(t) && t.bitWidth !== 64 || y.isTime(t) && t.bitWidth !== 64 || y.isFloat(t) && t.precision !== q.HALF))
    return new Pr(i.data.length, (n) => {
      const s = i.data[n];
      return s.values.subarray(0, s.length)[Symbol.iterator]();
    });
  let e = 0;
  return new Pr(i.data.length, (n) => {
    const r = i.data[n].length, o = i.slice(e, e + r);
    return e += r, new Wu(o);
  });
}
class Wu {
  constructor(t) {
    this.vector = t, this.index = 0;
  }
  next() {
    return this.index < this.vector.length ? {
      value: this.vector.get(this.index++)
    } : { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
v.prototype.visitNull = A;
v.prototype.visitBool = A;
v.prototype.visitInt = A;
v.prototype.visitInt8 = A;
v.prototype.visitInt16 = A;
v.prototype.visitInt32 = A;
v.prototype.visitInt64 = A;
v.prototype.visitUint8 = A;
v.prototype.visitUint16 = A;
v.prototype.visitUint32 = A;
v.prototype.visitUint64 = A;
v.prototype.visitFloat = A;
v.prototype.visitFloat16 = A;
v.prototype.visitFloat32 = A;
v.prototype.visitFloat64 = A;
v.prototype.visitUtf8 = A;
v.prototype.visitLargeUtf8 = A;
v.prototype.visitBinary = A;
v.prototype.visitLargeBinary = A;
v.prototype.visitFixedSizeBinary = A;
v.prototype.visitDate = A;
v.prototype.visitDateDay = A;
v.prototype.visitDateMillisecond = A;
v.prototype.visitTimestamp = A;
v.prototype.visitTimestampSecond = A;
v.prototype.visitTimestampMillisecond = A;
v.prototype.visitTimestampMicrosecond = A;
v.prototype.visitTimestampNanosecond = A;
v.prototype.visitTime = A;
v.prototype.visitTimeSecond = A;
v.prototype.visitTimeMillisecond = A;
v.prototype.visitTimeMicrosecond = A;
v.prototype.visitTimeNanosecond = A;
v.prototype.visitDecimal = A;
v.prototype.visitList = A;
v.prototype.visitStruct = A;
v.prototype.visitUnion = A;
v.prototype.visitDenseUnion = A;
v.prototype.visitSparseUnion = A;
v.prototype.visitDictionary = A;
v.prototype.visitInterval = A;
v.prototype.visitIntervalDayTime = A;
v.prototype.visitIntervalYearMonth = A;
v.prototype.visitDuration = A;
v.prototype.visitDurationSecond = A;
v.prototype.visitDurationMillisecond = A;
v.prototype.visitDurationMicrosecond = A;
v.prototype.visitDurationNanosecond = A;
v.prototype.visitFixedSizeList = A;
v.prototype.visitMap = A;
const Rs = new v();
var Ea;
const Da = {}, Fa = {};
class g {
  constructor(t) {
    var e, n, s;
    const r = t[0] instanceof g ? t.flatMap((a) => a.data) : t;
    if (r.length === 0 || r.some((a) => !(a instanceof U)))
      throw new TypeError("Vector constructor expects an Array of Data instances.");
    const o = (e = r[0]) === null || e === void 0 ? void 0 : e.type;
    switch (r.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        const { get: a, set: c, indexOf: u } = Da[o.typeId], d = r[0];
        this.isValid = (h) => Ns(d, h), this.get = (h) => a(d, h), this.set = (h, L) => c(d, h, L), this.indexOf = (h) => u(d, h), this._offsets = [0, d.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, Fa[o.typeId]), this._offsets = Sa(r);
        break;
    }
    this.data = r, this.type = o, this.stride = Et(o), this.numChildren = (s = (n = o.children) === null || n === void 0 ? void 0 : n.length) !== null && s !== void 0 ? s : 0, this.length = this._offsets.at(-1);
  }
  /**
   * The aggregate size (in bytes) of this Vector's buffers and/or child Vectors.
   */
  get byteLength() {
    return this.data.reduce((t, e) => t + e.byteLength, 0);
  }
  /**
   * Whether this Vector's elements can contain null values.
   */
  get nullable() {
    return Vu(this.data);
  }
  /**
   * The number of null elements in this Vector.
   */
  get nullCount() {
    return wa(this.data);
  }
  /**
   * The Array or TypedArray constructor used for the JS representation
   *  of the element's values in {@link Vector.prototype.toArray `toArray()`}.
   */
  get ArrayType() {
    return this.type.ArrayType;
  }
  /**
   * The name that should be printed when the Vector is logged in a message.
   */
  get [Symbol.toStringTag]() {
    return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
  }
  /**
   * The name of this Vector.
   */
  get VectorName() {
    return `${l[this.type.typeId]}Vector`;
  }
  /**
   * Check whether an element is null.
   * @param index The index at which to read the validity bitmap.
   */
  // @ts-ignore
  isValid(t) {
    return !1;
  }
  /**
   * Get an element value by position.
   * @param index The index of the element to read.
   */
  // @ts-ignore
  get(t) {
    return null;
  }
  /**
   * Get an element value by position.
   * @param index The index of the element to read. A negative index will count back from the last element.
   */
  at(t) {
    return this.get(gn(t, this.length));
  }
  /**
   * Set an element value by position.
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  // @ts-ignore
  set(t, e) {
  }
  /**
   * Retrieve the index of the first occurrence of a value in an Vector.
   * @param element The value to locate in the Vector.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  // @ts-ignore
  indexOf(t, e) {
    return -1;
  }
  includes(t, e) {
    return this.indexOf(t, e) > -1;
  }
  /**
   * Iterator for the Vector's elements.
   */
  [Symbol.iterator]() {
    return Rs.visit(this);
  }
  /**
   * Combines two or more Vectors of the same type.
   * @param others Additional Vectors to add to the end of this Vector.
   */
  concat(...t) {
    return new g(this.data.concat(t.flatMap((e) => e.data).flat(Number.POSITIVE_INFINITY)));
  }
  /**
   * Return a zero-copy sub-section of this Vector.
   * @param start The beginning of the specified portion of the Vector.
   * @param end The end of the specified portion of the Vector. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    return new g(Es(this, t, e, ({ data: n, _offsets: s }, r, o) => Aa(n, s, r, o)));
  }
  toJSON() {
    return [...this];
  }
  /**
   * Return a JavaScript Array or TypedArray of the Vector's elements.
   *
   * @note If this Vector contains a single Data chunk and the Vector's type is a
   *  primitive numeric type corresponding to one of the JavaScript TypedArrays, this
   *  method returns a zero-copy slice of the underlying TypedArray values. If there's
   *  more than one chunk, the resulting TypedArray will be a copy of the data from each
   *  chunk's underlying TypedArray values.
   *
   * @returns An Array or TypedArray of the Vector's elements, based on the Vector's DataType.
   */
  toArray() {
    const { type: t, data: e, length: n, stride: s, ArrayType: r } = this;
    switch (t.typeId) {
      case l.Int:
      case l.Float:
      case l.Decimal:
      case l.Time:
      case l.Timestamp:
        switch (e.length) {
          case 0:
            return new r();
          case 1:
            return e[0].values.subarray(0, n * s);
          default:
            return e.reduce((o, { values: a, length: c }) => (o.array.set(a.subarray(0, c * s), o.offset), o.offset += c * s, o), { array: new r(n * s), offset: 0 }).array;
        }
    }
    return [...this];
  }
  /**
   * Returns a string representation of the Vector.
   *
   * @returns A string representation of the Vector.
   */
  toString() {
    return `[${[...this].join(",")}]`;
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    var e;
    return this.getChildAt((e = this.type.children) === null || e === void 0 ? void 0 : e.findIndex((n) => n.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    return t > -1 && t < this.numChildren ? new g(this.data.map(({ children: e }) => e[t])) : null;
  }
  get isMemoized() {
    return y.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1;
  }
  /**
   * Adds memoization to the Vector's {@link get} method. For dictionary
   * vectors, this method return a vector that memoizes only the dictionary
   * values.
   *
   * Memoization is very useful when decoding a value is expensive such as
   * Utf8. The memoization creates a cache of the size of the Vector and
   * therefore increases memory usage.
   *
   * @returns A new vector that memoizes calls to {@link get}.
   */
  memoize() {
    if (y.isDictionary(this.type)) {
      const t = new on(this.data[0].dictionary), e = this.data.map((n) => {
        const s = n.clone();
        return s.dictionary = t, s;
      });
      return new g(e);
    }
    return new on(this);
  }
  /**
   * Returns a vector without memoization of the {@link get} method. If this
   * vector is not memoized, this method returns this vector.
   *
   * @returns A new vector without memoization.
   */
  unmemoize() {
    if (y.isDictionary(this.type) && this.isMemoized) {
      const t = this.data[0].dictionary.unmemoize(), e = this.data.map((n) => {
        const s = n.clone();
        return s.dictionary = t, s;
      });
      return new g(e);
    }
    return this;
  }
}
Ea = Symbol.toStringTag;
g[Ea] = ((i) => {
  i.type = y.prototype, i.data = [], i.length = 0, i.stride = 1, i.numChildren = 0, i._offsets = new Uint32Array([0]), i[Symbol.isConcatSpreadable] = !0;
  const t = Object.keys(l).map((e) => l[e]).filter((e) => typeof e == "number" && e !== l.NONE);
  for (const e of t) {
    const n = lt.getVisitFnByTypeId(e), s = _t.getVisitFnByTypeId(e), r = rn.getVisitFnByTypeId(e);
    Da[e] = { get: n, set: s, indexOf: r }, Fa[e] = Object.create(i, {
      isValid: { value: sn(Ns) },
      get: { value: sn(lt.getVisitFnByTypeId(e)) },
      set: { value: Ta(_t.getVisitFnByTypeId(e)) },
      indexOf: { value: Oa(rn.getVisitFnByTypeId(e)) }
    });
  }
  return "Vector";
})(g.prototype);
class on extends g {
  constructor(t) {
    super(t.data);
    const e = this.get, n = this.set, s = this.slice, r = new Array(this.length);
    Object.defineProperty(this, "get", {
      value(o) {
        const a = r[o];
        if (a !== void 0)
          return a;
        const c = e.call(this, o);
        return r[o] = c, c;
      }
    }), Object.defineProperty(this, "set", {
      value(o, a) {
        n.call(this, o, a), r[o] = a;
      }
    }), Object.defineProperty(this, "slice", {
      value: (o, a) => new on(s.call(this, o, a))
    }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", {
      value: () => new g(this.data)
    }), Object.defineProperty(this, "memoize", {
      value: () => this
    });
  }
}
function bn(i) {
  if (i) {
    if (i instanceof U)
      return new g([i]);
    if (i instanceof g)
      return new g(i.data);
    if (i.type instanceof y)
      return new g([_(i)]);
    if (Array.isArray(i))
      return new g(i.flatMap((t) => $u(t)));
    if (ArrayBuffer.isView(i)) {
      i instanceof DataView && (i = new Uint8Array(i.buffer));
      const t = { offset: 0, length: i.length, nullCount: -1, data: i };
      if (i instanceof Int8Array)
        return new g([_(Object.assign(Object.assign({}, t), { type: new is() }))]);
      if (i instanceof Int16Array)
        return new g([_(Object.assign(Object.assign({}, t), { type: new ns() }))]);
      if (i instanceof Int32Array)
        return new g([_(Object.assign(Object.assign({}, t), { type: new oe() }))]);
      if (i instanceof BigInt64Array)
        return new g([_(Object.assign(Object.assign({}, t), { type: new fn() }))]);
      if (i instanceof Uint8Array || i instanceof Uint8ClampedArray)
        return new g([_(Object.assign(Object.assign({}, t), { type: new ss() }))]);
      if (i instanceof Uint16Array)
        return new g([_(Object.assign(Object.assign({}, t), { type: new rs() }))]);
      if (i instanceof Uint32Array)
        return new g([_(Object.assign(Object.assign({}, t), { type: new os() }))]);
      if (i instanceof BigUint64Array)
        return new g([_(Object.assign(Object.assign({}, t), { type: new as() }))]);
      if (i instanceof Float32Array)
        return new g([_(Object.assign(Object.assign({}, t), { type: new cs() }))]);
      if (i instanceof Float64Array)
        return new g([_(Object.assign(Object.assign({}, t), { type: new yn() }))]);
      throw new Error("Unrecognized input");
    }
  }
  throw new Error("Unrecognized input");
}
function $u(i) {
  return i instanceof U ? [i] : i instanceof g ? i.data : bn(i).data;
}
function Yu(i) {
  if (!i || i.length <= 0)
    return function(s) {
      return !0;
    };
  let t = "";
  const e = i.filter((n) => n === n);
  return e.length > 0 && (t = `
    switch (x) {${e.map((n) => `
        case ${Gu(n)}:`).join("")}
            return false;
    }`), i.length !== e.length && (t = `if (x !== x) return false;
${t}`), new Function("x", `${t}
return true;`);
}
function Gu(i) {
  return typeof i != "bigint" ? re(i) : `${re(i)}n`;
}
function Fn(i, t) {
  const e = Math.ceil(i) * t - 1;
  return (e - e % 64 + 64 || 64) / t;
}
function xr(i, t = 0) {
  return i.length >= t ? i.subarray(0, t) : Zi(new i.constructor(t), i, 0);
}
class Ti {
  constructor(t, e = 0, n = 1) {
    this.length = Math.ceil(e / n), this.buffer = new t(this.length), this.stride = n, this.BYTES_PER_ELEMENT = t.BYTES_PER_ELEMENT, this.ArrayType = t;
  }
  get byteLength() {
    return Math.ceil(this.length * this.stride) * this.BYTES_PER_ELEMENT;
  }
  get reservedLength() {
    return this.buffer.length / this.stride;
  }
  get reservedByteLength() {
    return this.buffer.byteLength;
  }
  // @ts-ignore
  set(t, e) {
    return this;
  }
  append(t) {
    return this.set(this.length, t);
  }
  reserve(t) {
    if (t > 0) {
      this.length += t;
      const e = this.stride, n = this.length * e, s = this.buffer.length;
      n >= s && this._resize(s === 0 ? Fn(n * 1, this.BYTES_PER_ELEMENT) : Fn(n * 2, this.BYTES_PER_ELEMENT));
    }
    return this;
  }
  flush(t = this.length) {
    t = Fn(t * this.stride, this.BYTES_PER_ELEMENT);
    const e = xr(this.buffer, t);
    return this.clear(), e;
  }
  clear() {
    return this.length = 0, this.buffer = new this.ArrayType(), this;
  }
  _resize(t) {
    return this.buffer = xr(this.buffer, t);
  }
}
class Oi extends Ti {
  last() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.buffer[t];
  }
  set(t, e) {
    return this.reserve(t - this.length + 1), this.buffer[t * this.stride] = e, this;
  }
}
class Na extends Oi {
  constructor() {
    super(Uint8Array, 0, 1 / 8), this.numValid = 0;
  }
  get numInvalid() {
    return this.length - this.numValid;
  }
  get(t) {
    return this.buffer[t >> 3] >> t % 8 & 1;
  }
  set(t, e) {
    const { buffer: n } = this.reserve(t - this.length + 1), s = t >> 3, r = t % 8, o = n[s] >> r & 1;
    return e ? o === 0 && (n[s] |= 1 << r, ++this.numValid) : o === 1 && (n[s] &= ~(1 << r), --this.numValid), this;
  }
  clear() {
    return this.numValid = 0, super.clear();
  }
}
class Ra extends Oi {
  constructor(t) {
    super(t.OffsetArrayType, 1, 1);
  }
  append(t) {
    return this.set(this.length - 1, t);
  }
  set(t, e) {
    const n = this.length - 1, s = this.reserve(t - n + 1).buffer;
    return n < t++ && n >= 0 && s.fill(s[n], n, t), s[t] = s[t - 1] + e, this;
  }
  flush(t = this.length - 1) {
    return t > this.length && this.set(t - 1, this.BYTES_PER_ELEMENT > 4 ? BigInt(0) : 0), super.flush(t + 1);
  }
}
let it = class {
  /** @nocollapse */
  // @ts-ignore
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  /** @nocollapse */
  // @ts-ignore
  static throughDOM(t) {
    throw new Error('"throughDOM" not available in this environment');
  }
  /**
   * Construct a builder with the given Arrow DataType with optional null values,
   * which will be interpreted as "null" when set or appended to the `Builder`.
   * @param {{ type: T, nullValues?: any[] }} options A `BuilderOptions` object used to create this `Builder`.
   */
  constructor({ type: t, nullValues: e }) {
    this.length = 0, this.finished = !1, this.type = t, this.children = [], this.nullValues = e, this.stride = Et(t), this._nulls = new Na(), e && e.length > 0 && (this._isValid = Yu(e));
  }
  /**
   * Flush the `Builder` and return a `Vector<T>`.
   * @returns {Vector<T>} A `Vector<T>` of the flushed values.
   */
  toVector() {
    return new g([this.flush()]);
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get nullCount() {
    return this._nulls.numInvalid;
  }
  get numChildren() {
    return this.children.length;
  }
  /**
   * @returns The aggregate length (in bytes) of the values that have been written.
   */
  get byteLength() {
    let t = 0;
    const { _offsets: e, _values: n, _nulls: s, _typeIds: r, children: o } = this;
    return e && (t += e.byteLength), n && (t += n.byteLength), s && (t += s.byteLength), r && (t += r.byteLength), o.reduce((a, c) => a + c.byteLength, t);
  }
  /**
   * @returns The aggregate number of rows that have been reserved to write new values.
   */
  get reservedLength() {
    return this._nulls.reservedLength;
  }
  /**
   * @returns The aggregate length (in bytes) that has been reserved to write new values.
   */
  get reservedByteLength() {
    let t = 0;
    return this._offsets && (t += this._offsets.reservedByteLength), this._values && (t += this._values.reservedByteLength), this._nulls && (t += this._nulls.reservedByteLength), this._typeIds && (t += this._typeIds.reservedByteLength), this.children.reduce((e, n) => e + n.reservedByteLength, t);
  }
  get valueOffsets() {
    return this._offsets ? this._offsets.buffer : null;
  }
  get values() {
    return this._values ? this._values.buffer : null;
  }
  get nullBitmap() {
    return this._nulls ? this._nulls.buffer : null;
  }
  get typeIds() {
    return this._typeIds ? this._typeIds.buffer : null;
  }
  /**
   * Appends a value (or null) to this `Builder`.
   * This is equivalent to `builder.set(builder.length, value)`.
   * @param {T['TValue'] | TNull } value The value to append.
   */
  append(t) {
    return this.set(this.length, t);
  }
  /**
   * Validates whether a value is valid (true), or null (false)
   * @param {T['TValue'] | TNull } value The value to compare against null the value representations
   */
  isValid(t) {
    return this._isValid(t);
  }
  /**
   * Write a value (or null-value sentinel) at the supplied index.
   * If the value matches one of the null-value representations, a 1-bit is
   * written to the null `BitmapBufferBuilder`. Otherwise, a 0 is written to
   * the null `BitmapBufferBuilder`, and the value is passed to
   * `Builder.prototype.setValue()`.
   * @param {number} index The index of the value to write.
   * @param {T['TValue'] | TNull } value The value to write at the supplied index.
   * @returns {this} The updated `Builder` instance.
   */
  set(t, e) {
    return this.setValid(t, this.isValid(e)) && this.setValue(t, e), this;
  }
  /**
   * Write a value to the underlying buffers at the supplied index, bypassing
   * the null-value check. This is a low-level method that
   * @param {number} index
   * @param {T['TValue'] | TNull } value
   */
  setValue(t, e) {
    this._setValue(this, t, e);
  }
  setValid(t, e) {
    return this.length = this._nulls.set(t, +e).length, e;
  }
  // @ts-ignore
  addChild(t, e = `${this.numChildren}`) {
    throw new Error(`Cannot append children to non-nested type "${this.type}"`);
  }
  /**
   * Retrieve the child `Builder` at the supplied `index`, or null if no child
   * exists at that index.
   * @param {number} index The index of the child `Builder` to retrieve.
   * @returns {Builder | null} The child Builder at the supplied index or null.
   */
  getChildAt(t) {
    return this.children[t] || null;
  }
  /**
   * Commit all the values that have been written to their underlying
   * ArrayBuffers, including any child Builders if applicable, and reset
   * the internal `Builder` state.
   * @returns A `Data<T>` of the buffers and children representing the values written.
   */
  flush() {
    let t, e, n, s;
    const { type: r, length: o, nullCount: a, _typeIds: c, _offsets: u, _values: d, _nulls: h } = this;
    (e = c?.flush(o)) ? s = u?.flush(o) : (s = u?.flush(o)) ? t = d?.flush(u.last()) : t = d?.flush(o), a > 0 && (n = h?.flush(o));
    const L = this.children.map((F) => F.flush());
    return this.clear(), _({
      type: r,
      length: o,
      nullCount: a,
      children: L,
      child: L[0],
      data: t,
      typeIds: e,
      nullBitmap: n,
      valueOffsets: s
    });
  }
  /**
   * Finalize this `Builder`, and child builders if applicable.
   * @returns {this} The finalized `Builder` instance.
   */
  finish() {
    this.finished = !0;
    for (const t of this.children)
      t.finish();
    return this;
  }
  /**
   * Clear this Builder's internal state, including child Builders if applicable, and reset the length to 0.
   * @returns {this} The cleared `Builder` instance.
   */
  clear() {
    var t, e, n, s;
    this.length = 0, (t = this._nulls) === null || t === void 0 || t.clear(), (e = this._values) === null || e === void 0 || e.clear(), (n = this._offsets) === null || n === void 0 || n.clear(), (s = this._typeIds) === null || s === void 0 || s.clear();
    for (const r of this.children)
      r.clear();
    return this;
  }
};
it.prototype.length = 1;
it.prototype.stride = 1;
it.prototype.children = null;
it.prototype.finished = !1;
it.prototype.nullValues = null;
it.prototype._isValid = () => !0;
class Ht extends it {
  constructor(t) {
    super(t), this._values = new Oi(this.ArrayType, 0, this.stride);
  }
  setValue(t, e) {
    const n = this._values;
    return n.reserve(t - n.length + 1), super.setValue(t, e);
  }
}
class ti extends it {
  constructor(t) {
    super(t), this._pendingLength = 0, this._offsets = new Ra(t.type);
  }
  setValue(t, e) {
    const n = this._pending || (this._pending = /* @__PURE__ */ new Map()), s = n.get(t);
    s && (this._pendingLength -= s.length), this._pendingLength += e instanceof Ai ? e[fe].length : e.length, n.set(t, e);
  }
  setValid(t, e) {
    return super.setValid(t, e) ? !0 : ((this._pending || (this._pending = /* @__PURE__ */ new Map())).set(t, void 0), !1);
  }
  clear() {
    return this._pendingLength = 0, this._pending = void 0, super.clear();
  }
  flush() {
    return this._flush(), super.flush();
  }
  finish() {
    return this._flush(), super.finish();
  }
  _flush() {
    const t = this._pending, e = this._pendingLength;
    return this._pendingLength = 0, this._pending = void 0, t && t.size > 0 && this._flushPending(t, e), this;
  }
}
class qn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  /**
   * Index to the start of the RecordBlock (note this is past the Message header)
   */
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  /**
   * Length of the metadata
   */
  metaDataLength() {
    return this.bb.readInt32(this.bb_pos + 8);
  }
  /**
   * Length of the data (this is aligned so there can be a gap between this and
   * the metadata).
   */
  bodyLength() {
    return this.bb.readInt64(this.bb_pos + 16);
  }
  static sizeOf() {
    return 24;
  }
  static createBlock(t, e, n, s) {
    return t.prep(8, 24), t.writeInt64(BigInt(s ?? 0)), t.pad(4), t.writeInt32(n), t.writeInt64(BigInt(e ?? 0)), t.offset();
  }
}
class ut {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFooter(t, e) {
    return (e || new ut()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFooter(t, e) {
    return t.setPosition(t.position() + V), (e || new ut()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Y.V1;
  }
  schema(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new Bt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  dictionaries(t, e) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (e || new qn()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, e) {
    const n = this.bb.__offset(this.bb_pos, 10);
    return n ? (e || new qn()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
  }
  recordBatchesLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, e) {
    const n = this.bb.__offset(this.bb_pos, 12);
    return n ? (e || new Q()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startFooter(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, Y.V1);
  }
  static addSchema(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addDictionaries(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static startDictionariesVector(t, e) {
    t.startVector(24, e, 8);
  }
  static addRecordBatches(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static startRecordBatchesVector(t, e) {
    t.startVector(24, e, 8);
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(4, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addOffset(e[n]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endFooter(t) {
    return t.endObject();
  }
  static finishFooterBuffer(t, e) {
    t.finish(e);
  }
  static finishSizePrefixedFooterBuffer(t, e) {
    t.finish(e, void 0, !0);
  }
}
class x {
  constructor(t = [], e, n, s = Y.V5) {
    this.fields = t || [], this.metadata = e || /* @__PURE__ */ new Map(), n || (n = Hn(this.fields)), this.dictionaries = n, this.metadataVersion = s;
  }
  get [Symbol.toStringTag]() {
    return "Schema";
  }
  get names() {
    return this.fields.map((t) => t.name);
  }
  toString() {
    return `Schema<{ ${this.fields.map((t, e) => `${e}: ${t}`).join(", ")} }>`;
  }
  /**
   * Construct a new Schema containing only specified fields.
   *
   * @param fieldNames Names of fields to keep.
   * @returns A new Schema of fields matching the specified names.
   */
  select(t) {
    const e = new Set(t), n = this.fields.filter((s) => e.has(s.name));
    return new x(n, this.metadata);
  }
  /**
   * Construct a new Schema containing only fields at the specified indices.
   *
   * @param fieldIndices Indices of fields to keep.
   * @returns A new Schema of fields at the specified indices.
   */
  selectAt(t) {
    const e = t.map((n) => this.fields[n]).filter(Boolean);
    return new x(e, this.metadata);
  }
  assign(...t) {
    const e = t[0] instanceof x ? t[0] : Array.isArray(t[0]) ? new x(t[0]) : new x(t), n = [...this.fields], s = ki(ki(/* @__PURE__ */ new Map(), this.metadata), e.metadata), r = e.fields.filter((a) => {
      const c = n.findIndex((u) => u.name === a.name);
      return ~c ? (n[c] = a.clone({
        metadata: ki(ki(/* @__PURE__ */ new Map(), n[c].metadata), a.metadata)
      })) && !1 : !0;
    }), o = Hn(r, /* @__PURE__ */ new Map());
    return new x([...n, ...r], s, new Map([...this.dictionaries, ...o]));
  }
}
x.prototype.fields = null;
x.prototype.metadata = null;
x.prototype.dictionaries = null;
class P {
  /** @nocollapse */
  static new(...t) {
    let [e, n, s, r] = t;
    return t[0] && typeof t[0] == "object" && ({ name: e } = t[0], n === void 0 && (n = t[0].type), s === void 0 && (s = t[0].nullable), r === void 0 && (r = t[0].metadata)), new P(`${e}`, n, s, r);
  }
  constructor(t, e, n = !1, s) {
    this.name = t, this.type = e, this.nullable = n, this.metadata = s || /* @__PURE__ */ new Map();
  }
  get typeId() {
    return this.type.typeId;
  }
  get [Symbol.toStringTag]() {
    return "Field";
  }
  toString() {
    return `${this.name}: ${this.type}`;
  }
  clone(...t) {
    let [e, n, s, r] = t;
    return !t[0] || typeof t[0] != "object" ? [e = this.name, n = this.type, s = this.nullable, r = this.metadata] = t : { name: e = this.name, type: n = this.type, nullable: s = this.nullable, metadata: r = this.metadata } = t[0], P.new(e, n, s, r);
  }
}
P.prototype.type = null;
P.prototype.name = null;
P.prototype.nullable = null;
P.prototype.metadata = null;
function ki(i, t) {
  return new Map([...i || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function Hn(i, t = /* @__PURE__ */ new Map()) {
  for (let e = -1, n = i.length; ++e < n; ) {
    const r = i[e].type;
    if (y.isDictionary(r)) {
      if (!t.has(r.id))
        t.set(r.id, r.dictionary);
      else if (t.get(r.id) !== r.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    r.children && r.children.length > 0 && Hn(r.children, t);
  }
  return t;
}
var qu = ao, Hu = We;
class mi {
  /** @nocollapse */
  static decode(t) {
    t = new Hu(N(t));
    const e = ut.getRootAsFooter(t), n = x.decode(e.schema(), /* @__PURE__ */ new Map(), e.version());
    return new Ku(n, e);
  }
  /** @nocollapse */
  static encode(t) {
    const e = new qu(), n = x.encode(e, t.schema);
    ut.startRecordBatchesVector(e, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse())
      Mt.encode(e, o);
    const s = e.endVector();
    ut.startDictionariesVector(e, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse())
      Mt.encode(e, o);
    const r = e.endVector();
    return ut.startFooter(e), ut.addSchema(e, n), ut.addVersion(e, Y.V5), ut.addRecordBatches(e, s), ut.addDictionaries(e, r), ut.finishFooterBuffer(e, ut.endFooter(e)), e.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  constructor(t, e = Y.V5, n, s) {
    this.schema = t, this.version = e, n && (this._recordBatches = n), s && (this._dictionaryBatches = s);
  }
  *recordBatches() {
    for (let t, e = -1, n = this.numRecordBatches; ++e < n; )
      (t = this.getRecordBatch(e)) && (yield t);
  }
  *dictionaryBatches() {
    for (let t, e = -1, n = this.numDictionaries; ++e < n; )
      (t = this.getDictionaryBatch(e)) && (yield t);
  }
  getRecordBatch(t) {
    return t >= 0 && t < this.numRecordBatches && this._recordBatches[t] || null;
  }
  getDictionaryBatch(t) {
    return t >= 0 && t < this.numDictionaries && this._dictionaryBatches[t] || null;
  }
}
class Ku extends mi {
  get numRecordBatches() {
    return this._footer.recordBatchesLength();
  }
  get numDictionaries() {
    return this._footer.dictionariesLength();
  }
  constructor(t, e) {
    super(t, e.version()), this._footer = e;
  }
  getRecordBatch(t) {
    if (t >= 0 && t < this.numRecordBatches) {
      const e = this._footer.recordBatches(t);
      if (e)
        return Mt.decode(e);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const e = this._footer.dictionaries(t);
      if (e)
        return Mt.decode(e);
    }
    return null;
  }
}
class Mt {
  /** @nocollapse */
  static decode(t) {
    return new Mt(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  /** @nocollapse */
  static encode(t, e) {
    const { metaDataLength: n } = e, s = BigInt(e.offset), r = BigInt(e.bodyLength);
    return qn.createBlock(t, s, n, r);
  }
  constructor(t, e, n) {
    this.metaDataLength = t, this.offset = z(n), this.bodyLength = z(e);
  }
}
const j = Object.freeze({ done: !0, value: void 0 });
class kr {
  constructor(t) {
    this._json = t;
  }
  get schema() {
    return this._json.schema;
  }
  get batches() {
    return this._json.batches || [];
  }
  get dictionaries() {
    return this._json.dictionaries || [];
  }
}
class Ls {
  tee() {
    return this._getDOMStream().tee();
  }
  pipe(t, e) {
    return this._getNodeStream().pipe(t, e);
  }
  pipeTo(t, e) {
    return this._getDOMStream().pipeTo(t, e);
  }
  pipeThrough(t, e) {
    return this._getDOMStream().pipeThrough(t, e);
  }
  _getDOMStream() {
    return this._DOMStream || (this._DOMStream = this.toDOMStream());
  }
  _getNodeStream() {
    return this._nodeStream || (this._nodeStream = this.toNodeStream());
  }
}
class Qu extends Ls {
  constructor() {
    super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((t) => this._closedPromiseResolve = t);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(t) {
    return p(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  write(t) {
    this._ensureOpen() && (this.resolvers.length <= 0 ? this._values.push(t) : this.resolvers.shift().resolve({ done: !1, value: t }));
  }
  abort(t) {
    this._closedPromiseResolve && (this.resolvers.length <= 0 ? this._error = { error: t } : this.resolvers.shift().reject({ done: !0, value: t }));
  }
  close() {
    if (this._closedPromiseResolve) {
      const { resolvers: t } = this;
      for (; t.length > 0; )
        t.shift().resolve(j);
      this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(t) {
    return dt.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  toNodeStream(t) {
    return dt.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  throw(t) {
    return p(this, void 0, void 0, function* () {
      return yield this.abort(t), j;
    });
  }
  return(t) {
    return p(this, void 0, void 0, function* () {
      return yield this.close(), j;
    });
  }
  read(t) {
    return p(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return p(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(...t) {
    return this._values.length > 0 ? Promise.resolve({ done: !1, value: this._values.shift() }) : this._error ? Promise.reject({ done: !0, value: this._error.error }) : this._closedPromiseResolve ? new Promise((e, n) => {
      this.resolvers.push({ resolve: e, reject: n });
    }) : Promise.resolve(j);
  }
  _ensureOpen() {
    if (this._closedPromiseResolve)
      return !0;
    throw new Error("AsyncQueue is closed");
  }
}
class je extends Qu {
  write(t) {
    if ((t = N(t)).byteLength > 0)
      return super.write(t);
  }
  toString(t = !1) {
    return t ? kn(this.toUint8Array(!0)) : this.toUint8Array(!1).then(kn);
  }
  toUint8Array(t = !1) {
    return t ? St(this._values)[0] : p(this, void 0, void 0, function* () {
      var e, n, s, r;
      const o = [];
      let a = 0;
      try {
        for (var c = !0, u = ne(this), d; d = yield u.next(), e = d.done, !e; c = !0) {
          r = d.value, c = !1;
          const h = r;
          o.push(h), a += h.byteLength;
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          !c && !e && (s = u.return) && (yield s.call(u));
        } finally {
          if (n) throw n.error;
        }
      }
      return St(o, a)[0];
    });
  }
}
class bi {
  constructor(t) {
    t && (this.source = new Ju(dt.fromIterable(t)));
  }
  [Symbol.iterator]() {
    return this;
  }
  next(t) {
    return this.source.next(t);
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  peek(t) {
    return this.source.peek(t);
  }
  read(t) {
    return this.source.read(t);
  }
}
class le {
  constructor(t) {
    t instanceof le ? this.source = t.source : t instanceof je ? this.source = new he(dt.fromAsyncIterable(t)) : io(t) ? this.source = new he(dt.fromNodeStream(t)) : Zn(t) ? this.source = new he(dt.fromDOMStream(t)) : eo(t) ? this.source = new he(dt.fromDOMStream(t.body)) : Xe(t) ? this.source = new he(dt.fromIterable(t)) : se(t) ? this.source = new he(dt.fromAsyncIterable(t)) : be(t) && (this.source = new he(dt.fromAsyncIterable(t)));
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next(t) {
    return this.source.next(t);
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  get closed() {
    return this.source.closed;
  }
  cancel(t) {
    return this.source.cancel(t);
  }
  peek(t) {
    return this.source.peek(t);
  }
  read(t) {
    return this.source.read(t);
  }
}
class Ju {
  constructor(t) {
    this.source = t;
  }
  cancel(t) {
    this.return(t);
  }
  peek(t) {
    return this.next(t, "peek").value;
  }
  read(t) {
    return this.next(t, "read").value;
  }
  next(t, e = "read") {
    return this.source.next({ cmd: e, size: t });
  }
  throw(t) {
    return Object.create(this.source.throw && this.source.throw(t) || j);
  }
  return(t) {
    return Object.create(this.source.return && this.source.return(t) || j);
  }
}
class he {
  constructor(t) {
    this.source = t, this._closedPromise = new Promise((e) => this._closedPromiseResolve = e);
  }
  cancel(t) {
    return p(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(t) {
    return p(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return p(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(t) {
    return p(this, arguments, void 0, function* (e, n = "read") {
      return yield this.source.next({ cmd: n, size: e });
    });
  }
  throw(t) {
    return p(this, void 0, void 0, function* () {
      const e = this.source.throw && (yield this.source.throw(t)) || j;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
  return(t) {
    return p(this, void 0, void 0, function* () {
      const e = this.source.return && (yield this.source.return(t)) || j;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
}
class Vr extends bi {
  constructor(t, e) {
    super(), this.position = 0, this.buffer = N(t), this.size = e === void 0 ? this.buffer.byteLength : e;
  }
  readInt32(t) {
    const { buffer: e, byteOffset: n } = this.readAt(t, 4);
    return new DataView(e, n).getInt32(0, !0);
  }
  seek(t) {
    return this.position = Math.min(t, this.size), t < this.size;
  }
  read(t) {
    const { buffer: e, size: n, position: s } = this;
    return e && s < n ? (typeof t != "number" && (t = Number.POSITIVE_INFINITY), this.position = Math.min(n, s + Math.min(n - s, t)), e.subarray(s, this.position)) : null;
  }
  readAt(t, e) {
    const n = this.buffer, s = Math.min(this.size, t + e);
    return n ? n.subarray(t, s) : new Uint8Array(e);
  }
  close() {
    this.buffer && (this.buffer = null);
  }
  throw(t) {
    return this.close(), { done: !0, value: t };
  }
  return(t) {
    return this.close(), { done: !0, value: t };
  }
}
class an extends le {
  constructor(t, e) {
    super(), this.position = 0, this._handle = t, typeof e == "number" ? this.size = e : this._pending = p(this, void 0, void 0, function* () {
      this.size = (yield t.stat()).size, delete this._pending;
    });
  }
  readInt32(t) {
    return p(this, void 0, void 0, function* () {
      const { buffer: e, byteOffset: n } = yield this.readAt(t, 4);
      return new DataView(e, n).getInt32(0, !0);
    });
  }
  seek(t) {
    return p(this, void 0, void 0, function* () {
      return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size;
    });
  }
  read(t) {
    return p(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: e, size: n, position: s } = this;
      if (e && s < n) {
        typeof t != "number" && (t = Number.POSITIVE_INFINITY);
        let r = s, o = 0, a = 0;
        const c = Math.min(n, r + Math.min(n - r, t)), u = new Uint8Array(Math.max(0, (this.position = c) - r));
        for (; (r += a) < c && (o += a) < u.byteLength; )
          ({ bytesRead: a } = yield e.read(u, o, u.byteLength - o, r));
        return u;
      }
      return null;
    });
  }
  readAt(t, e) {
    return p(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: n, size: s } = this;
      if (n && t + e < s) {
        const r = Math.min(s, t + e), o = new Uint8Array(r - t);
        return (yield n.read(o, 0, e, t)).buffer;
      }
      return new Uint8Array(e);
    });
  }
  close() {
    return p(this, void 0, void 0, function* () {
      const t = this._handle;
      this._handle = null, t && (yield t.close());
    });
  }
  throw(t) {
    return p(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
  return(t) {
    return p(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
}
const Zu = 65536;
function Pe(i) {
  return i < 0 && (i = 4294967295 + i + 1), `0x${i.toString(16)}`;
}
const Je = 8, Ms = [
  1,
  10,
  100,
  1e3,
  1e4,
  1e5,
  1e6,
  1e7,
  1e8
];
class Us {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return this.buffer[1];
  }
  low() {
    return this.buffer[0];
  }
  _times(t) {
    const e = new Uint32Array([
      this.buffer[1] >>> 16,
      this.buffer[1] & 65535,
      this.buffer[0] >>> 16,
      this.buffer[0] & 65535
    ]), n = new Uint32Array([
      t.buffer[1] >>> 16,
      t.buffer[1] & 65535,
      t.buffer[0] >>> 16,
      t.buffer[0] & 65535
    ]);
    let s = e[3] * n[3];
    this.buffer[0] = s & 65535;
    let r = s >>> 16;
    return s = e[2] * n[3], r += s, s = e[3] * n[2] >>> 0, r += s, this.buffer[0] += r << 16, this.buffer[1] = r >>> 0 < s ? Zu : 0, this.buffer[1] += r >>> 16, this.buffer[1] += e[1] * n[3] + e[2] * n[2] + e[3] * n[1], this.buffer[1] += e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0] << 16, this;
  }
  _plus(t) {
    const e = this.buffer[0] + t.buffer[0] >>> 0;
    this.buffer[1] += t.buffer[1], e < this.buffer[0] >>> 0 && ++this.buffer[1], this.buffer[0] = e;
  }
  lessThan(t) {
    return this.buffer[1] < t.buffer[1] || this.buffer[1] === t.buffer[1] && this.buffer[0] < t.buffer[0];
  }
  equals(t) {
    return this.buffer[1] === t.buffer[1] && this.buffer[0] == t.buffer[0];
  }
  greaterThan(t) {
    return t.lessThan(this);
  }
  hex() {
    return `${Pe(this.buffer[1])} ${Pe(this.buffer[0])}`;
  }
}
class k extends Us {
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return k.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return k.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const n = t.length, s = new k(e);
    for (let r = 0; r < n; ) {
      const o = Je < n - r ? Je : n - r, a = new k(new Uint32Array([Number.parseInt(t.slice(r, r + o), 10), 0])), c = new k(new Uint32Array([Ms[o], 0]));
      s.times(c), s.plus(a), r += o;
    }
    return s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let n = -1, s = t.length; ++n < s; )
      k.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new k(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new k(new Uint32Array(t.buffer)).plus(e);
  }
}
class nt extends Us {
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[0] == 0 && ++this.buffer[1], this;
  }
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  lessThan(t) {
    const e = this.buffer[1] << 0, n = t.buffer[1] << 0;
    return e < n || e === n && this.buffer[0] < t.buffer[0];
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return nt.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return nt.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const n = t.startsWith("-"), s = t.length, r = new nt(e);
    for (let o = n ? 1 : 0; o < s; ) {
      const a = Je < s - o ? Je : s - o, c = new nt(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0])), u = new nt(new Uint32Array([Ms[a], 0]));
      r.times(u), r.plus(c), o += a;
    }
    return n ? r.negate() : r;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let n = -1, s = t.length; ++n < s; )
      nt.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new nt(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new nt(new Uint32Array(t.buffer)).plus(e);
  }
}
class mt {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return new nt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new nt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
  }
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0 && ++this.buffer[1], this.buffer[1] == 0 && ++this.buffer[2], this.buffer[2] == 0 && ++this.buffer[3], this;
  }
  times(t) {
    const e = new k(new Uint32Array([this.buffer[3], 0])), n = new k(new Uint32Array([this.buffer[2], 0])), s = new k(new Uint32Array([this.buffer[1], 0])), r = new k(new Uint32Array([this.buffer[0], 0])), o = new k(new Uint32Array([t.buffer[3], 0])), a = new k(new Uint32Array([t.buffer[2], 0])), c = new k(new Uint32Array([t.buffer[1], 0])), u = new k(new Uint32Array([t.buffer[0], 0]));
    let d = k.multiply(r, u);
    this.buffer[0] = d.low();
    const h = new k(new Uint32Array([d.high(), 0]));
    return d = k.multiply(s, u), h.plus(d), d = k.multiply(r, c), h.plus(d), this.buffer[1] = h.low(), this.buffer[3] = h.lessThan(d) ? 1 : 0, this.buffer[2] = h.high(), new k(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(k.multiply(n, u)).plus(k.multiply(s, c)).plus(k.multiply(r, a)), this.buffer[3] += k.multiply(e, u).plus(k.multiply(n, c)).plus(k.multiply(s, a)).plus(k.multiply(r, o)).low(), this;
  }
  plus(t) {
    const e = new Uint32Array(4);
    return e[3] = this.buffer[3] + t.buffer[3] >>> 0, e[2] = this.buffer[2] + t.buffer[2] >>> 0, e[1] = this.buffer[1] + t.buffer[1] >>> 0, e[0] = this.buffer[0] + t.buffer[0] >>> 0, e[0] < this.buffer[0] >>> 0 && ++e[1], e[1] < this.buffer[1] >>> 0 && ++e[2], e[2] < this.buffer[2] >>> 0 && ++e[3], this.buffer[3] = e[3], this.buffer[2] = e[2], this.buffer[1] = e[1], this.buffer[0] = e[0], this;
  }
  hex() {
    return `${Pe(this.buffer[3])} ${Pe(this.buffer[2])} ${Pe(this.buffer[1])} ${Pe(this.buffer[0])}`;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new mt(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new mt(new Uint32Array(t.buffer)).plus(e);
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(4)) {
    return mt.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(4)) {
    return mt.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(4)) {
    const n = t.startsWith("-"), s = t.length, r = new mt(e);
    for (let o = n ? 1 : 0; o < s; ) {
      const a = Je < s - o ? Je : s - o, c = new mt(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0, 0, 0])), u = new mt(new Uint32Array([Ms[a], 0, 0, 0]));
      r.times(u), r.plus(c), o += a;
    }
    return n ? r.negate() : r;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 4);
    for (let n = -1, s = t.length; ++n < s; )
      mt.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 16 * n, 4));
    return e;
  }
}
const Xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseInt64: Us,
  Int128: mt,
  Int64: nt,
  Uint64: k
}, Symbol.toStringTag, { value: "Module" }));
class La extends D {
  constructor(t, e, n, s, r = Y.V5) {
    super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = e, this.buffers = n, this.dictionaries = s, this.metadataVersion = r;
  }
  visit(t) {
    return super.visit(t instanceof P ? t.type : t);
  }
  visitNull(t, { length: e } = this.nextFieldNode()) {
    return _({ type: t, length: e });
  }
  visitBool(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitInt(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitFloat(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitUtf8(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeUtf8(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitBinary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeBinary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitFixedSizeBinary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDate(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitTimestamp(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitTime(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDecimal(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitList(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  visitStruct(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), children: this.visitMany(t.children) });
  }
  visitUnion(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return this.metadataVersion < Y.V5 && this.readNullBitmap(t, n), t.mode === H.Sparse ? this.visitSparseUnion(t, { length: e, nullCount: n }) : this.visitDenseUnion(t, { length: e, nullCount: n });
  }
  visitDenseUnion(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, typeIds: this.readTypeIds(t), valueOffsets: this.readOffsets(t), children: this.visitMany(t.children) });
  }
  visitSparseUnion(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, typeIds: this.readTypeIds(t), children: this.visitMany(t.children) });
  }
  visitDictionary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t.indices), dictionary: this.readDictionary(t) });
  }
  visitInterval(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDuration(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitFixedSizeList(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), child: this.visit(t.children[0]) });
  }
  visitMap(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return _({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  nextFieldNode() {
    return this.nodes[++this.nodesIndex];
  }
  nextBufferRange() {
    return this.buffers[++this.buffersIndex];
  }
  readNullBitmap(t, e, n = this.nextBufferRange()) {
    return e > 0 && this.readData(t, n) || new Uint8Array(0);
  }
  readOffsets(t, e) {
    return this.readData(t, e);
  }
  readTypeIds(t, e) {
    return this.readData(t, e);
  }
  readData(t, { length: e, offset: n } = this.nextBufferRange()) {
    return this.bytes.subarray(n, n + e);
  }
  readDictionary(t) {
    return this.dictionaries.get(t.id);
  }
}
class td extends La {
  constructor(t, e, n, s, r) {
    super(new Uint8Array(0), e, n, s, r), this.sources = t;
  }
  readNullBitmap(t, e, { offset: n } = this.nextBufferRange()) {
    return e <= 0 ? new Uint8Array(0) : _i(this.sources[n]);
  }
  readOffsets(t, { offset: e } = this.nextBufferRange()) {
    return R(Uint8Array, R(t.OffsetArrayType, this.sources[e]));
  }
  readTypeIds(t, { offset: e } = this.nextBufferRange()) {
    return R(Uint8Array, R(t.ArrayType, this.sources[e]));
  }
  readData(t, { offset: e } = this.nextBufferRange()) {
    const { sources: n } = this;
    return y.isTimestamp(t) || (y.isInt(t) || y.isTime(t)) && t.bitWidth === 64 || y.isDuration(t) || y.isDate(t) && t.unit === X.MILLISECOND ? R(Uint8Array, nt.convertArray(n[e])) : y.isDecimal(t) ? R(Uint8Array, mt.convertArray(n[e])) : y.isBinary(t) || y.isLargeBinary(t) || y.isFixedSizeBinary(t) ? ed(n[e]) : y.isBool(t) ? _i(n[e]) : y.isUtf8(t) || y.isLargeUtf8(t) ? wi(n[e].join("")) : R(Uint8Array, R(t.ArrayType, n[e].map((s) => +s)));
  }
}
function ed(i) {
  const t = i.join(""), e = new Uint8Array(t.length / 2);
  for (let n = 0; n < t.length; n += 2)
    e[n >> 1] = Number.parseInt(t.slice(n, n + 2), 16);
  return e;
}
class Cs extends ti {
  constructor(t) {
    super(t), this._values = new Ti(Uint8Array);
  }
  get byteLength() {
    let t = this._pendingLength + this.length * 4;
    return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t;
  }
  setValue(t, e) {
    return super.setValue(t, N(e));
  }
  _flushPending(t, e) {
    const n = this._offsets, s = this._values.reserve(e).buffer;
    let r = 0;
    for (const [o, a] of t)
      if (a === void 0)
        n.set(o, 0);
      else {
        const c = a.length;
        s.set(a, r), n.set(o, c), r += c;
      }
  }
}
class Ps extends ti {
  constructor(t) {
    super(t), this._values = new Ti(Uint8Array);
  }
  get byteLength() {
    let t = this._pendingLength + this.length * 4;
    return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t;
  }
  setValue(t, e) {
    return super.setValue(t, N(e));
  }
  _flushPending(t, e) {
    const n = this._offsets, s = this._values.reserve(e).buffer;
    let r = 0;
    for (const [o, a] of t)
      if (a === void 0)
        n.set(o, BigInt(0));
      else {
        const c = a.length;
        s.set(a, r), n.set(o, BigInt(c)), r += c;
      }
  }
}
class Ma extends it {
  constructor(t) {
    super(t), this._values = new Na();
  }
  setValue(t, e) {
    this._values.set(t, +e);
  }
}
class Bi extends Ht {
}
Bi.prototype._setValue = Yo;
class xs extends Bi {
}
xs.prototype._setValue = hs;
class ks extends Bi {
}
ks.prototype._setValue = fs;
class Vs extends Ht {
}
Vs.prototype._setValue = Ho;
class Ua extends it {
  constructor({ type: t, nullValues: e, dictionaryHashFunction: n }) {
    super({ type: new Gt(t.dictionary, t.indices, t.id, t.isOrdered) }), this._nulls = null, this._dictionaryOffset = 0, this._keysToIndices = /* @__PURE__ */ Object.create(null), this.indices = me({ type: this.type.indices, nullValues: e }), this.dictionary = me({ type: this.type.dictionary, nullValues: null }), typeof n == "function" && (this.valueToKey = n);
  }
  get values() {
    return this.indices.values;
  }
  get nullCount() {
    return this.indices.nullCount;
  }
  get nullBitmap() {
    return this.indices.nullBitmap;
  }
  get byteLength() {
    return this.indices.byteLength + this.dictionary.byteLength;
  }
  get reservedLength() {
    return this.indices.reservedLength + this.dictionary.reservedLength;
  }
  get reservedByteLength() {
    return this.indices.reservedByteLength + this.dictionary.reservedByteLength;
  }
  isValid(t) {
    return this.indices.isValid(t);
  }
  setValid(t, e) {
    const n = this.indices;
    return e = n.setValid(t, e), this.length = n.length, e;
  }
  setValue(t, e) {
    const n = this._keysToIndices, s = this.valueToKey(e);
    let r = n[s];
    return r === void 0 && (n[s] = r = this._dictionaryOffset + this.dictionary.append(e).length - 1), this.indices.setValue(t, r);
  }
  flush() {
    const t = this.type, e = this._dictionary, n = this.dictionary.toVector(), s = this.indices.flush().clone(t);
    return s.dictionary = e ? e.concat(n) : n, this.finished || (this._dictionaryOffset += n.length), this._dictionary = s.dictionary, this.clear(), s;
  }
  finish() {
    return this.indices.finish(), this.dictionary.finish(), this._dictionaryOffset = 0, this._keysToIndices = /* @__PURE__ */ Object.create(null), super.finish();
  }
  clear() {
    return this.indices.clear(), this.dictionary.clear(), super.clear();
  }
  valueToKey(t) {
    return typeof t == "string" ? t : `${t}`;
  }
}
class zs extends Ht {
}
zs.prototype._setValue = jo;
class Ca extends it {
  setValue(t, e) {
    const [n] = this.children, s = t * this.stride;
    for (let r = -1, o = e.length; ++r < o; )
      n.set(s + r, e[r]);
  }
  addChild(t, e = "0") {
    if (this.numChildren > 0)
      throw new Error("FixedSizeListBuilder can only have one child.");
    const n = this.children.push(t);
    return this.type = new He(this.type.listSize, new P(e, t.type, !0)), n;
  }
}
class Ei extends Ht {
  setValue(t, e) {
    this._values.set(t, e);
  }
}
class Pa extends Ei {
  setValue(t, e) {
    super.setValue(t, us(e));
  }
}
class xa extends Ei {
}
class ka extends Ei {
}
class Di extends Ht {
}
Di.prototype._setValue = Jo;
class js extends Di {
}
js.prototype._setValue = ws;
class Ws extends Di {
}
Ws.prototype._setValue = Ss;
class Ie extends Ht {
}
Ie.prototype._setValue = Zo;
class $s extends Ie {
}
$s.prototype._setValue = As;
class Ys extends Ie {
}
Ys.prototype._setValue = Ts;
class Gs extends Ie {
}
Gs.prototype._setValue = Os;
class qs extends Ie {
}
qs.prototype._setValue = Bs;
class xt extends Ht {
  setValue(t, e) {
    this._values.set(t, e);
  }
}
class Va extends xt {
}
class za extends xt {
}
class ja extends xt {
}
class Wa extends xt {
}
class $a extends xt {
}
class Ya extends xt {
}
class Ga extends xt {
}
class qa extends xt {
}
class Ha extends ti {
  constructor(t) {
    super(t), this._offsets = new Ra(t.type);
  }
  addChild(t, e = "0") {
    if (this.numChildren > 0)
      throw new Error("ListBuilder can only have one child.");
    return this.children[this.numChildren] = t, this.type = new _e(new P(e, t.type, !0)), this.numChildren - 1;
  }
  _flushPending(t) {
    const e = this._offsets, [n] = this.children;
    for (const [s, r] of t)
      if (typeof r > "u")
        e.set(s, 0);
      else {
        const o = r, a = o.length, c = e.set(s, a).buffer[s];
        for (let u = -1; ++u < a; )
          n.set(c + u, o[u]);
      }
  }
}
class Ka extends ti {
  set(t, e) {
    return super.set(t, e);
  }
  setValue(t, e) {
    const n = e instanceof Map ? e : new Map(Object.entries(e)), s = this._pending || (this._pending = /* @__PURE__ */ new Map()), r = s.get(t);
    r && (this._pendingLength -= r.size), this._pendingLength += n.size, s.set(t, n);
  }
  addChild(t, e = `${this.numChildren}`) {
    if (this.numChildren > 0)
      throw new Error("ListBuilder can only have one child.");
    return this.children[this.numChildren] = t, this.type = new Ke(new P(e, t.type, !0), this.type.keysSorted), this.numChildren - 1;
  }
  _flushPending(t) {
    const e = this._offsets, [n] = this.children;
    for (const [s, r] of t)
      if (r === void 0)
        e.set(s, 0);
      else {
        let { [s]: o, [s + 1]: a } = e.set(s, r.size).buffer;
        for (const c of r.entries())
          if (n.set(o, c), ++o >= a)
            break;
      }
  }
}
class Qa extends it {
  // @ts-ignore
  setValue(t, e) {
  }
  setValid(t, e) {
    return this.length = Math.max(t + 1, this.length), e;
  }
}
class Ja extends it {
  setValue(t, e) {
    const { children: n, type: s } = this;
    switch (Array.isArray(e) || e.constructor) {
      case !0:
        return s.children.forEach((r, o) => n[o].set(t, e[o]));
      case Map:
        return s.children.forEach((r, o) => n[o].set(t, e.get(r.name)));
      default:
        return s.children.forEach((r, o) => n[o].set(t, e[r.name]));
    }
  }
  /** @inheritdoc */
  setValid(t, e) {
    return super.setValid(t, e) || this.children.forEach((n) => n.setValid(t, e)), e;
  }
  addChild(t, e = `${this.numChildren}`) {
    const n = this.children.push(t);
    return this.type = new J([...this.type.children, new P(e, t.type, !0)]), n;
  }
}
class we extends Ht {
}
we.prototype._setValue = Go;
class Hs extends we {
}
Hs.prototype._setValue = ys;
class Ks extends we {
}
Ks.prototype._setValue = ps;
class Qs extends we {
}
Qs.prototype._setValue = gs;
class Js extends we {
}
Js.prototype._setValue = _s;
class Se extends Ht {
}
Se.prototype._setValue = qo;
class Zs extends Se {
}
Zs.prototype._setValue = ms;
class Xs extends Se {
}
Xs.prototype._setValue = bs;
class tr extends Se {
}
tr.prototype._setValue = vs;
class er extends Se {
}
er.prototype._setValue = Is;
class vn extends it {
  constructor(t) {
    super(t), this._typeIds = new Oi(Int8Array, 0, 1), typeof t.valueToChildTypeId == "function" && (this._valueToChildTypeId = t.valueToChildTypeId);
  }
  get typeIdToChildIndex() {
    return this.type.typeIdToChildIndex;
  }
  append(t, e) {
    return this.set(this.length, t, e);
  }
  set(t, e, n) {
    return n === void 0 && (n = this._valueToChildTypeId(this, e, t)), this.setValue(t, e, n), this;
  }
  setValue(t, e, n) {
    this._typeIds.set(t, n);
    const s = this.type.typeIdToChildIndex[n], r = this.children[s];
    r?.set(t, e);
  }
  addChild(t, e = `${this.children.length}`) {
    const n = this.children.push(t), { type: { children: s, mode: r, typeIds: o } } = this, a = [...s, new P(e, t.type)];
    return this.type = new ce(r, [...o, n], a), n;
  }
  /** @ignore */
  // @ts-ignore
  _valueToChildTypeId(t, e, n) {
    throw new Error("Cannot map UnionBuilder value to child typeId. Pass the `childTypeId` as the second argument to unionBuilder.append(), or supply a `valueToChildTypeId` function as part of the UnionBuilder constructor options.");
  }
}
class Za extends vn {
}
class Xa extends vn {
  constructor(t) {
    super(t), this._offsets = new Oi(Int32Array);
  }
  /** @ignore */
  setValue(t, e, n) {
    const s = this._typeIds.set(t, n).buffer[t], r = this.getChildAt(this.type.typeIdToChildIndex[s]), o = this._offsets.set(t, r.length).buffer[t];
    r?.set(o, e);
  }
}
class ir extends ti {
  constructor(t) {
    super(t), this._values = new Ti(Uint8Array);
  }
  get byteLength() {
    let t = this._pendingLength + this.length * 4;
    return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t;
  }
  setValue(t, e) {
    return super.setValue(t, wi(e));
  }
  // @ts-ignore
  _flushPending(t, e) {
  }
}
ir.prototype._flushPending = Cs.prototype._flushPending;
class nr extends ti {
  constructor(t) {
    super(t), this._values = new Ti(Uint8Array);
  }
  get byteLength() {
    let t = this._pendingLength + this.length * 4;
    return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t;
  }
  setValue(t, e) {
    return super.setValue(t, wi(e));
  }
  // @ts-ignore
  _flushPending(t, e) {
  }
}
nr.prototype._flushPending = Ps.prototype._flushPending;
class id extends D {
  visitNull() {
    return Qa;
  }
  visitBool() {
    return Ma;
  }
  visitInt() {
    return xt;
  }
  visitInt8() {
    return Va;
  }
  visitInt16() {
    return za;
  }
  visitInt32() {
    return ja;
  }
  visitInt64() {
    return Wa;
  }
  visitUint8() {
    return $a;
  }
  visitUint16() {
    return Ya;
  }
  visitUint32() {
    return Ga;
  }
  visitUint64() {
    return qa;
  }
  visitFloat() {
    return Ei;
  }
  visitFloat16() {
    return Pa;
  }
  visitFloat32() {
    return xa;
  }
  visitFloat64() {
    return ka;
  }
  visitUtf8() {
    return ir;
  }
  visitLargeUtf8() {
    return nr;
  }
  visitBinary() {
    return Cs;
  }
  visitLargeBinary() {
    return Ps;
  }
  visitFixedSizeBinary() {
    return zs;
  }
  visitDate() {
    return Bi;
  }
  visitDateDay() {
    return xs;
  }
  visitDateMillisecond() {
    return ks;
  }
  visitTimestamp() {
    return we;
  }
  visitTimestampSecond() {
    return Hs;
  }
  visitTimestampMillisecond() {
    return Ks;
  }
  visitTimestampMicrosecond() {
    return Qs;
  }
  visitTimestampNanosecond() {
    return Js;
  }
  visitTime() {
    return Se;
  }
  visitTimeSecond() {
    return Zs;
  }
  visitTimeMillisecond() {
    return Xs;
  }
  visitTimeMicrosecond() {
    return tr;
  }
  visitTimeNanosecond() {
    return er;
  }
  visitDecimal() {
    return Vs;
  }
  visitList() {
    return Ha;
  }
  visitStruct() {
    return Ja;
  }
  visitUnion() {
    return vn;
  }
  visitDenseUnion() {
    return Xa;
  }
  visitSparseUnion() {
    return Za;
  }
  visitDictionary() {
    return Ua;
  }
  visitInterval() {
    return Di;
  }
  visitIntervalDayTime() {
    return js;
  }
  visitIntervalYearMonth() {
    return Ws;
  }
  visitDuration() {
    return Ie;
  }
  visitDurationSecond() {
    return $s;
  }
  visitDurationMillisecond() {
    return Ys;
  }
  visitDurationMicrosecond() {
    return Gs;
  }
  visitDurationNanosecond() {
    return qs;
  }
  visitFixedSizeList() {
    return Ca;
  }
  visitMap() {
    return Ka;
  }
}
const nd = new id();
class I extends D {
  compareSchemas(t, e) {
    return t === e || e instanceof t.constructor && this.compareManyFields(t.fields, e.fields);
  }
  compareManyFields(t, e) {
    return t === e || Array.isArray(t) && Array.isArray(e) && t.length === e.length && t.every((n, s) => this.compareFields(n, e[s]));
  }
  compareFields(t, e) {
    return t === e || e instanceof t.constructor && t.name === e.name && t.nullable === e.nullable && this.visit(t.type, e.type);
  }
}
function rt(i, t) {
  return t instanceof i.constructor;
}
function Ae(i, t) {
  return i === t || rt(i, t);
}
function Kt(i, t) {
  return i === t || rt(i, t) && i.bitWidth === t.bitWidth && i.isSigned === t.isSigned;
}
function In(i, t) {
  return i === t || rt(i, t) && i.precision === t.precision;
}
function sd(i, t) {
  return i === t || rt(i, t) && i.byteWidth === t.byteWidth;
}
function sr(i, t) {
  return i === t || rt(i, t) && i.unit === t.unit;
}
function Fi(i, t) {
  return i === t || rt(i, t) && i.unit === t.unit && i.timezone === t.timezone;
}
function Ni(i, t) {
  return i === t || rt(i, t) && i.unit === t.unit && i.bitWidth === t.bitWidth;
}
function rd(i, t) {
  return i === t || rt(i, t) && i.children.length === t.children.length && Ut.compareManyFields(i.children, t.children);
}
function od(i, t) {
  return i === t || rt(i, t) && i.children.length === t.children.length && Ut.compareManyFields(i.children, t.children);
}
function rr(i, t) {
  return i === t || rt(i, t) && i.mode === t.mode && i.typeIds.every((e, n) => e === t.typeIds[n]) && Ut.compareManyFields(i.children, t.children);
}
function ad(i, t) {
  return i === t || rt(i, t) && i.id === t.id && i.isOrdered === t.isOrdered && Ut.visit(i.indices, t.indices) && Ut.visit(i.dictionary, t.dictionary);
}
function or(i, t) {
  return i === t || rt(i, t) && i.unit === t.unit;
}
function Ri(i, t) {
  return i === t || rt(i, t) && i.unit === t.unit;
}
function cd(i, t) {
  return i === t || rt(i, t) && i.listSize === t.listSize && i.children.length === t.children.length && Ut.compareManyFields(i.children, t.children);
}
function ld(i, t) {
  return i === t || rt(i, t) && i.keysSorted === t.keysSorted && i.children.length === t.children.length && Ut.compareManyFields(i.children, t.children);
}
I.prototype.visitNull = Ae;
I.prototype.visitBool = Ae;
I.prototype.visitInt = Kt;
I.prototype.visitInt8 = Kt;
I.prototype.visitInt16 = Kt;
I.prototype.visitInt32 = Kt;
I.prototype.visitInt64 = Kt;
I.prototype.visitUint8 = Kt;
I.prototype.visitUint16 = Kt;
I.prototype.visitUint32 = Kt;
I.prototype.visitUint64 = Kt;
I.prototype.visitFloat = In;
I.prototype.visitFloat16 = In;
I.prototype.visitFloat32 = In;
I.prototype.visitFloat64 = In;
I.prototype.visitUtf8 = Ae;
I.prototype.visitLargeUtf8 = Ae;
I.prototype.visitBinary = Ae;
I.prototype.visitLargeBinary = Ae;
I.prototype.visitFixedSizeBinary = sd;
I.prototype.visitDate = sr;
I.prototype.visitDateDay = sr;
I.prototype.visitDateMillisecond = sr;
I.prototype.visitTimestamp = Fi;
I.prototype.visitTimestampSecond = Fi;
I.prototype.visitTimestampMillisecond = Fi;
I.prototype.visitTimestampMicrosecond = Fi;
I.prototype.visitTimestampNanosecond = Fi;
I.prototype.visitTime = Ni;
I.prototype.visitTimeSecond = Ni;
I.prototype.visitTimeMillisecond = Ni;
I.prototype.visitTimeMicrosecond = Ni;
I.prototype.visitTimeNanosecond = Ni;
I.prototype.visitDecimal = Ae;
I.prototype.visitList = rd;
I.prototype.visitStruct = od;
I.prototype.visitUnion = rr;
I.prototype.visitDenseUnion = rr;
I.prototype.visitSparseUnion = rr;
I.prototype.visitDictionary = ad;
I.prototype.visitInterval = or;
I.prototype.visitIntervalDayTime = or;
I.prototype.visitIntervalYearMonth = or;
I.prototype.visitDuration = Ri;
I.prototype.visitDurationSecond = Ri;
I.prototype.visitDurationMillisecond = Ri;
I.prototype.visitDurationMicrosecond = Ri;
I.prototype.visitDurationNanosecond = Ri;
I.prototype.visitFixedSizeList = cd;
I.prototype.visitMap = ld;
const Ut = new I();
function cn(i, t) {
  return Ut.compareSchemas(i, t);
}
function ud(i, t) {
  return Ut.compareFields(i, t);
}
function tc(i, t) {
  return Ut.visit(i, t);
}
function me(i) {
  const t = i.type, e = new (nd.getVisitFn(t)())(i);
  if (t.children && t.children.length > 0) {
    const n = i.children || [], s = { nullValues: i.nullValues }, r = Array.isArray(n) ? ((o, a) => n[a] || s) : (({ name: o }) => n[o] || s);
    for (const [o, a] of t.children.entries()) {
      const { type: c } = a, u = r(a, o);
      e.children.push(me(Object.assign(Object.assign({}, u), { type: c })));
    }
  }
  return e;
}
function ar(i, t) {
  if (i instanceof U || i instanceof g || i.type instanceof y || ArrayBuffer.isView(i))
    return bn(i);
  const e = { type: t ?? Hi(i), nullValues: [null] }, n = [...ec(e)(i)], s = n.length === 1 ? n[0] : n.reduce((r, o) => r.concat(o));
  return y.isDictionary(s.type) ? s.memoize() : s;
}
function dd(i) {
  const t = ar(i), e = new Z(new x(t.type.children), t.data[0]);
  return new G(e);
}
function Hi(i) {
  if (i.length === 0)
    return new Lt();
  let t = 0, e = 0, n = 0, s = 0, r = 0, o = 0, a = 0, c = 0;
  for (const u of i) {
    if (u == null) {
      ++t;
      continue;
    }
    switch (typeof u) {
      case "bigint":
        ++o;
        continue;
      case "boolean":
        ++a;
        continue;
      case "number":
        ++s;
        continue;
      case "string":
        ++r;
        continue;
      case "object":
        Array.isArray(u) ? ++e : Object.prototype.toString.call(u) === "[object Date]" ? ++c : ++n;
        continue;
    }
    throw new TypeError("Unable to infer Vector type from input values, explicit type declaration expected.");
  }
  if (s + t === i.length)
    return new yn();
  if (r + t === i.length)
    return new Gt(new Ge(), new oe());
  if (o + t === i.length)
    return new fn();
  if (a + t === i.length)
    return new qe();
  if (c + t === i.length)
    return new xo();
  if (e + t === i.length) {
    const u = i, d = Hi(u[u.findIndex((h) => h != null)]);
    if (u.every((h) => h == null || tc(d, Hi(h))))
      return new _e(new P("", d, !0));
  } else if (n + t === i.length) {
    const u = /* @__PURE__ */ new Map();
    for (const d of i)
      for (const h of Object.keys(d))
        !u.has(h) && d[h] != null && u.set(h, new P(h, Hi([d[h]]), !0));
    return new J([...u.values()]);
  }
  throw new TypeError("Unable to infer Vector type from input values, explicit type declaration expected.");
}
function ec(i) {
  const { ["queueingStrategy"]: t = "count" } = i, { ["highWaterMark"]: e = t !== "bytes" ? Number.POSITIVE_INFINITY : Math.pow(2, 14) } = i, n = t !== "bytes" ? "length" : "byteLength";
  return function* (s) {
    let r = 0;
    const o = me(i);
    for (const a of s)
      o.append(a)[n] >= e && ++r && (yield o.toVector());
    (o.finish().length > 0 || r === 0) && (yield o.toVector());
  };
}
function hd(i) {
  const { ["queueingStrategy"]: t = "count" } = i, { ["highWaterMark"]: e = t !== "bytes" ? Number.POSITIVE_INFINITY : Math.pow(2, 14) } = i, n = t !== "bytes" ? "length" : "byteLength";
  return function(s) {
    return It(this, arguments, function* () {
      var r, o, a, c;
      let u = 0;
      const d = me(i);
      try {
        for (var h = !0, L = ne(s), F; F = yield E(L.next()), r = F.done, !r; h = !0) {
          c = F.value, h = !1;
          const $ = c;
          d.append($)[n] >= e && ++u && (yield yield E(d.toVector()));
        }
      } catch ($) {
        o = { error: $ };
      } finally {
        try {
          !h && !r && (a = L.return) && (yield E(a.call(L)));
        } finally {
          if (o) throw o.error;
        }
      }
      (d.finish().length > 0 || u === 0) && (yield yield E(d.toVector()));
    });
  };
}
function Nn(i, t) {
  return fd(i, t.map((e) => e.data.concat()));
}
function fd(i, t) {
  const e = [...i.fields], n = [], s = { numBatches: t.reduce((h, L) => Math.max(h, L.length), 0) };
  let r = 0, o = 0, a = -1;
  const c = t.length;
  let u, d = [];
  for (; s.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, a = -1; ++a < c; )
      d[a] = u = t[a].shift(), o = Math.min(o, u ? u.length : o);
    Number.isFinite(o) && (d = yd(e, o, d, t, s), o > 0 && (n[r++] = _({
      type: new J(e),
      length: o,
      nullCount: 0,
      children: d.slice()
    })));
  }
  return [
    i = i.assign(e),
    n.map((h) => new Z(i, h))
  ];
}
function yd(i, t, e, n, s) {
  var r;
  const o = (t + 63 & -64) >> 3;
  for (let a = -1, c = n.length; ++a < c; ) {
    const u = e[a], d = u?.length;
    if (d >= t)
      d === t ? e[a] = u : (e[a] = u.slice(0, t), s.numBatches = Math.max(s.numBatches, n[a].unshift(u.slice(t, d - t))));
    else {
      const h = i[a];
      i[a] = h.clone({ nullable: !0 }), e[a] = (r = u?._changeLengthAndBackfillNullBitmap(t)) !== null && r !== void 0 ? r : _({
        type: h.type,
        length: t,
        nullCount: t,
        nullBitmap: new Uint8Array(o)
      });
    }
  }
  return e;
}
var ic;
class G {
  constructor(...t) {
    var e, n;
    if (t.length === 0)
      return this.batches = [], this.schema = new x([]), this._offsets = [0], this;
    let s, r;
    t[0] instanceof x && (s = t.shift()), t.at(-1) instanceof Uint32Array && (r = t.pop());
    const o = (c) => {
      if (c) {
        if (c instanceof Z)
          return [c];
        if (c instanceof G)
          return c.batches;
        if (c instanceof U) {
          if (c.type instanceof J)
            return [new Z(new x(c.type.children), c)];
        } else {
          if (Array.isArray(c))
            return c.flatMap((u) => o(u));
          if (typeof c[Symbol.iterator] == "function")
            return [...c].flatMap((u) => o(u));
          if (typeof c == "object") {
            const u = Object.keys(c), d = u.map((F) => new g([c[F]])), h = s ?? new x(u.map((F, $) => new P(String(F), d[$].type, d[$].nullable))), [, L] = Nn(h, d);
            return L.length === 0 ? [new Z(c)] : L;
          }
        }
      }
      return [];
    }, a = t.flatMap((c) => o(c));
    if (s = (n = s ?? ((e = a[0]) === null || e === void 0 ? void 0 : e.schema)) !== null && n !== void 0 ? n : new x([]), !(s instanceof x))
      throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const c of a) {
      if (!(c instanceof Z))
        throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!cn(s, c.schema))
        throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = s, this.batches = a, this._offsets = r ?? Sa(this.data);
  }
  /**
   * The contiguous {@link RecordBatch `RecordBatch`} chunks of the Table rows.
   */
  get data() {
    return this.batches.map(({ data: t }) => t);
  }
  /**
   * The number of columns in this Table.
   */
  get numCols() {
    return this.schema.fields.length;
  }
  /**
   * The number of rows in this Table.
   */
  get numRows() {
    return this.data.reduce((t, e) => t + e.length, 0);
  }
  /**
   * The number of null rows in this Table.
   */
  get nullCount() {
    return this._nullCount === -1 && (this._nullCount = wa(this.data)), this._nullCount;
  }
  /**
   * Check whether an element is null.
   *
   * @param index The index at which to read the validity bitmap.
   */
  // @ts-ignore
  isValid(t) {
    return !1;
  }
  /**
   * Get an element value by position.
   *
   * @param index The index of the element to read.
   */
  // @ts-ignore
  get(t) {
    return null;
  }
  /**
    * Get an element value by position.
    * @param index The index of the element to read. A negative index will count back from the last element.
    */
  // @ts-ignore
  at(t) {
    return this.get(gn(t, this.numRows));
  }
  /**
   * Set an element value by position.
   *
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  // @ts-ignore
  set(t, e) {
  }
  /**
   * Retrieve the index of the first occurrence of a value in an Vector.
   *
   * @param element The value to locate in the Vector.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  // @ts-ignore
  indexOf(t, e) {
    return -1;
  }
  /**
   * Iterator for rows in this Table.
   */
  [Symbol.iterator]() {
    return this.batches.length > 0 ? Rs.visit(new g(this.data)) : new Array(0)[Symbol.iterator]();
  }
  /**
   * Return a JavaScript Array of the Table rows.
   *
   * @returns An Array of Table rows.
   */
  toArray() {
    return [...this];
  }
  /**
   * Returns a string representation of the Table rows.
   *
   * @returns A string representation of the Table rows.
   */
  toString() {
    return `[
  ${this.toArray().join(`,
  `)}
]`;
  }
  /**
   * Combines two or more Tables of the same schema.
   *
   * @param others Additional Tables to add to the end of this Tables.
   */
  concat(...t) {
    const e = this.schema, n = this.data.concat(t.flatMap(({ data: s }) => s));
    return new G(e, n.map((s) => new Z(e, s)));
  }
  /**
   * Return a zero-copy sub-section of this Table.
   *
   * @param begin The beginning of the specified portion of the Table.
   * @param end The end of the specified portion of the Table. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const n = this.schema;
    [t, e] = Es({ length: this.numRows }, t, e);
    const s = Aa(this.data, this._offsets, t, e);
    return new G(n, s.map((r) => new Z(n, r)));
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   *
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    return this.getChildAt(this.schema.fields.findIndex((e) => e.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   *
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    if (t > -1 && t < this.schema.fields.length) {
      const e = this.data.map((n) => n.children[t]);
      if (e.length === 0) {
        const { type: n } = this.schema.fields[t], s = _({ type: n, length: 0, nullCount: 0 });
        e.push(s._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new g(e);
    }
    return null;
  }
  /**
   * Sets a child Vector by name.
   *
   * @param name The name of the child to overwrite.
   * @returns A new Table with the supplied child for the specified name.
   */
  setChild(t, e) {
    var n;
    return this.setChildAt((n = this.schema.fields) === null || n === void 0 ? void 0 : n.findIndex((s) => s.name === t), e);
  }
  setChildAt(t, e) {
    let n = this.schema, s = [...this.batches];
    if (t > -1 && t < this.numCols) {
      e || (e = new g([_({ type: new Lt(), length: this.numRows })]));
      const r = n.fields.slice(), o = r[t].clone({ type: e.type }), a = this.schema.fields.map((c, u) => this.getChildAt(u));
      [r[t], a[t]] = [o, e], [n, s] = Nn(n, a);
    }
    return new G(n, s);
  }
  /**
   * Construct a new Table containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new Table of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.fields.reduce((n, s, r) => n.set(s.name, r), /* @__PURE__ */ new Map());
    return this.selectAt(t.map((n) => e.get(n)).filter((n) => n > -1));
  }
  /**
   * Construct a new Table containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new Table of columns at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), n = this.batches.map((s) => s.selectAt(t));
    return new G(e, n);
  }
  assign(t) {
    const e = this.schema.fields, [n, s] = t.schema.fields.reduce((a, c, u) => {
      const [d, h] = a, L = e.findIndex((F) => F.name === c.name);
      return ~L ? h[L] = u : d.push(u), a;
    }, [[], []]), r = this.schema.assign(t.schema), o = [
      ...e.map((a, c) => [c, s[c]]).map(([a, c]) => c === void 0 ? this.getChildAt(a) : t.getChildAt(c)),
      ...n.map((a) => t.getChildAt(a))
    ].filter(Boolean);
    return new G(...Nn(r, o));
  }
}
ic = Symbol.toStringTag;
G[ic] = ((i) => (i.schema = null, i.batches = [], i._offsets = new Uint32Array([0]), i._nullCount = -1, i[Symbol.isConcatSpreadable] = !0, i.isValid = sn(Ns), i.get = sn(lt.getVisitFn(l.Struct)), i.set = Ta(_t.getVisitFn(l.Struct)), i.indexOf = Oa(rn.getVisitFn(l.Struct)), "Table"))(G.prototype);
function pd(i) {
  const t = {}, e = Object.entries(i);
  for (const [n, s] of e)
    t[n] = bn(s);
  return new G(t);
}
function gd(i) {
  const t = {}, e = Object.entries(i);
  for (const [n, s] of e)
    t[n] = ar(s);
  return new G(t);
}
var nc;
let Z = class ci {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof x))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([
          ,
          this.data = _({
            nullCount: 0,
            type: new J(this.schema.fields),
            children: this.schema.fields.map((e) => _({ type: e.type, nullCount: 0 }))
          })
        ] = t, !(this.data instanceof U))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = zr(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [e] = t, { fields: n, children: s, length: r } = Object.keys(e).reduce((c, u, d) => (c.children[d] = e[u], c.length = Math.max(c.length, e[u].length), c.fields[d] = P.new({ name: u, type: e[u].type, nullable: !0 }), c), {
          length: 0,
          fields: new Array(),
          children: new Array()
        }), o = new x(n), a = _({ type: new J(n), length: r, children: s, nullCount: 0 });
        [this.schema, this.data] = zr(o, a.children, r);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = sc(this.schema.fields, this.data.children));
  }
  /**
   * The number of columns in this RecordBatch.
   */
  get numCols() {
    return this.schema.fields.length;
  }
  /**
   * The number of rows in this RecordBatch.
   */
  get numRows() {
    return this.data.length;
  }
  /**
   * The number of null rows in this RecordBatch.
   */
  get nullCount() {
    return this.data.nullCount;
  }
  /**
   * Check whether an row is null.
   * @param index The index at which to read the validity bitmap.
   */
  isValid(t) {
    return this.data.getValid(t);
  }
  /**
   * Get a row by position.
   * @param index The index of the row to read.
   */
  get(t) {
    return lt.visit(this.data, t);
  }
  /**
    * Get a row value by position.
    * @param index The index of the row to read. A negative index will count back from the last row.
    */
  at(t) {
    return this.get(gn(t, this.numRows));
  }
  /**
   * Set a row by position.
   * @param index The index of the row to write.
   * @param value The value to set.
   */
  set(t, e) {
    return _t.visit(this.data, t, e);
  }
  /**
   * Retrieve the index of the first occurrence of a row in an RecordBatch.
   * @param element The row to locate in the RecordBatch.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  indexOf(t, e) {
    return rn.visit(this.data, t, e);
  }
  /**
   * Iterator for rows in this RecordBatch.
   */
  [Symbol.iterator]() {
    return Rs.visit(new g([this.data]));
  }
  /**
   * Return a JavaScript Array of the RecordBatch rows.
   * @returns An Array of RecordBatch rows.
   */
  toArray() {
    return [...this];
  }
  /**
   * Combines two or more RecordBatch of the same schema.
   * @param others Additional RecordBatch to add to the end of this RecordBatch.
   */
  concat(...t) {
    return new G(this.schema, [this, ...t]);
  }
  /**
   * Return a zero-copy sub-section of this RecordBatch.
   * @param start The beginning of the specified portion of the RecordBatch.
   * @param end The end of the specified portion of the RecordBatch. This is exclusive of the row at the index 'end'.
   */
  slice(t, e) {
    const [n] = new g([this.data]).slice(t, e).data;
    return new ci(this.schema, n);
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    var e;
    return this.getChildAt((e = this.schema.fields) === null || e === void 0 ? void 0 : e.findIndex((n) => n.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    return t > -1 && t < this.schema.fields.length ? new g([this.data.children[t]]) : null;
  }
  /**
   * Sets a child Vector by name.
   * @param name The name of the child to overwrite.
   * @returns A new RecordBatch with the new child for the specified name.
   */
  setChild(t, e) {
    var n;
    return this.setChildAt((n = this.schema.fields) === null || n === void 0 ? void 0 : n.findIndex((s) => s.name === t), e);
  }
  setChildAt(t, e) {
    let n = this.schema, s = this.data;
    if (t > -1 && t < this.numCols) {
      e || (e = new g([_({ type: new Lt(), length: this.numRows })]));
      const r = n.fields.slice(), o = s.children.slice(), a = r[t].clone({ type: e.type });
      [r[t], o[t]] = [a, e.data[0]], n = new x(r, new Map(this.schema.metadata)), s = _({ type: new J(r), children: o });
    }
    return new ci(n, s);
  }
  /**
   * Construct a new RecordBatch containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new RecordBatch of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.select(t), n = new J(e.fields), s = [];
    for (const r of t) {
      const o = this.schema.fields.findIndex((a) => a.name === r);
      ~o && (s[o] = this.data.children[o]);
    }
    return new ci(e, _({ type: n, length: this.numRows, children: s }));
  }
  /**
   * Construct a new RecordBatch containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new RecordBatch of columns matching at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), n = t.map((r) => this.data.children[r]).filter(Boolean), s = _({ type: new J(e.fields), length: this.numRows, children: n });
    return new ci(e, s);
  }
};
nc = Symbol.toStringTag;
Z[nc] = ((i) => (i._nullCount = -1, i[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(Z.prototype);
function zr(i, t, e = t.reduce((n, s) => Math.max(n, s.length), 0)) {
  var n;
  const s = [...i.fields], r = [...t], o = (e + 63 & -64) >> 3;
  for (const [a, c] of i.fields.entries()) {
    const u = t[a];
    (!u || u.length !== e) && (s[a] = c.clone({ nullable: !0 }), r[a] = (n = u?._changeLengthAndBackfillNullBitmap(e)) !== null && n !== void 0 ? n : _({
      type: c.type,
      length: e,
      nullCount: e,
      nullBitmap: new Uint8Array(o)
    }));
  }
  return [
    i.assign(s),
    _({ type: new J(s), length: e, children: r })
  ];
}
function sc(i, t, e = /* @__PURE__ */ new Map()) {
  var n, s;
  if (((n = i?.length) !== null && n !== void 0 ? n : 0) > 0 && i?.length === t?.length)
    for (let r = -1, o = i.length; ++r < o; ) {
      const { type: a } = i[r], c = t[r];
      for (const u of [c, ...((s = c?.dictionary) === null || s === void 0 ? void 0 : s.data) || []])
        sc(a.children, u?.children, e);
      if (y.isDictionary(a)) {
        const { id: u } = a;
        if (!e.has(u))
          c?.dictionary && e.set(u, c.dictionary);
        else if (e.get(u) !== c.dictionary)
          throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
      }
    }
  return e;
}
class cr extends Z {
  constructor(t) {
    const e = t.fields.map((s) => _({ type: s.type })), n = _({ type: new J(t.fields), nullCount: 0, children: e });
    super(t, n);
  }
}
let Zt = class Ot {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMessage(t, e) {
    return (e || new Ot()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, e) {
    return t.setPosition(t.position() + V), (e || new Ot()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Y.V1;
  }
  headerType() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readUint8(this.bb_pos + t) : C.NONE;
  }
  header(t) {
    const e = this.bb.__offset(this.bb_pos, 8);
    return e ? this.bb.__union(t, this.bb_pos + e) : null;
  }
  bodyLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  customMetadata(t, e) {
    const n = this.bb.__offset(this.bb_pos, 12);
    return n ? (e || new Q()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startMessage(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, Y.V1);
  }
  static addHeaderType(t, e) {
    t.addFieldInt8(1, e, C.NONE);
  }
  static addHeader(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static addBodyLength(t, e) {
    t.addFieldInt64(3, e, BigInt("0"));
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(4, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addOffset(e[n]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endMessage(t) {
    return t.endObject();
  }
  static finishMessageBuffer(t, e) {
    t.finish(e);
  }
  static finishSizePrefixedMessageBuffer(t, e) {
    t.finish(e, void 0, !0);
  }
  static createMessage(t, e, n, s, r, o) {
    return Ot.startMessage(t), Ot.addVersion(t, e), Ot.addHeaderType(t, n), Ot.addHeader(t, s), Ot.addBodyLength(t, r), Ot.addCustomMetadata(t, o), Ot.endMessage(t);
  }
};
class _d extends D {
  visit(t, e) {
    return t == null || e == null ? void 0 : super.visit(t, e);
  }
  visitNull(t, e) {
    return Nr.startNull(e), Nr.endNull(e);
  }
  visitInt(t, e) {
    return ht.startInt(e), ht.addBitWidth(e, t.bitWidth), ht.addIsSigned(e, t.isSigned), ht.endInt(e);
  }
  visitFloat(t, e) {
    return Ft.startFloatingPoint(e), Ft.addPrecision(e, t.precision), Ft.endFloatingPoint(e);
  }
  visitBinary(t, e) {
    return Or.startBinary(e), Or.endBinary(e);
  }
  visitLargeBinary(t, e) {
    return Er.startLargeBinary(e), Er.endLargeBinary(e);
  }
  visitBool(t, e) {
    return Br.startBool(e), Br.endBool(e);
  }
  visitUtf8(t, e) {
    return Rr.startUtf8(e), Rr.endUtf8(e);
  }
  visitLargeUtf8(t, e) {
    return Dr.startLargeUtf8(e), Dr.endLargeUtf8(e);
  }
  visitDecimal(t, e) {
    return Fe.startDecimal(e), Fe.addScale(e, t.scale), Fe.addPrecision(e, t.precision), Fe.addBitWidth(e, t.bitWidth), Fe.endDecimal(e);
  }
  visitDate(t, e) {
    return zi.startDate(e), zi.addUnit(e, t.unit), zi.endDate(e);
  }
  visitTime(t, e) {
    return pt.startTime(e), pt.addUnit(e, t.unit), pt.addBitWidth(e, t.bitWidth), pt.endTime(e);
  }
  visitTimestamp(t, e) {
    const n = t.timezone && e.createString(t.timezone) || void 0;
    return gt.startTimestamp(e), gt.addUnit(e, t.unit), n !== void 0 && gt.addTimezone(e, n), gt.endTimestamp(e);
  }
  visitInterval(t, e) {
    return Nt.startInterval(e), Nt.addUnit(e, t.unit), Nt.endInterval(e);
  }
  visitDuration(t, e) {
    return ji.startDuration(e), ji.addUnit(e, t.unit), ji.endDuration(e);
  }
  visitList(t, e) {
    return Fr.startList(e), Fr.endList(e);
  }
  visitStruct(t, e) {
    return ye.startStruct_(e), ye.endStruct_(e);
  }
  visitUnion(t, e) {
    ot.startTypeIdsVector(e, t.typeIds.length);
    const n = ot.createTypeIdsVector(e, t.typeIds);
    return ot.startUnion(e), ot.addMode(e, t.mode), ot.addTypeIds(e, n), ot.endUnion(e);
  }
  visitDictionary(t, e) {
    const n = this.visit(t.indices, e);
    return jt.startDictionaryEncoding(e), jt.addId(e, BigInt(t.id)), jt.addIsOrdered(e, t.isOrdered), n !== void 0 && jt.addIndexType(e, n), jt.endDictionaryEncoding(e);
  }
  visitFixedSizeBinary(t, e) {
    return Wi.startFixedSizeBinary(e), Wi.addByteWidth(e, t.byteWidth), Wi.endFixedSizeBinary(e);
  }
  visitFixedSizeList(t, e) {
    return $i.startFixedSizeList(e), $i.addListSize(e, t.listSize), $i.endFixedSizeList(e);
  }
  visitMap(t, e) {
    return Yi.startMap(e), Yi.addKeysSorted(e, t.keysSorted), Yi.endMap(e);
  }
}
const Rn = new _d();
function md(i, t = /* @__PURE__ */ new Map()) {
  return new x(vd(i, t), Ki(i.metadata), t);
}
function rc(i) {
  return new ft(i.count, oc(i.columns), ac(i.columns));
}
function bd(i) {
  return new Ct(rc(i.data), i.id, i.isDelta);
}
function vd(i, t) {
  return (i.fields || []).filter(Boolean).map((e) => P.fromJSON(e, t));
}
function jr(i, t) {
  return (i.children || []).filter(Boolean).map((e) => P.fromJSON(e, t));
}
function oc(i) {
  return (i || []).reduce((t, e) => [
    ...t,
    new ue(e.count, Id(e.VALIDITY)),
    ...oc(e.children)
  ], []);
}
function ac(i, t = []) {
  for (let e = -1, n = (i || []).length; ++e < n; ) {
    const s = i[e];
    s.VALIDITY && t.push(new Rt(t.length, s.VALIDITY.length)), s.TYPE_ID && t.push(new Rt(t.length, s.TYPE_ID.length)), s.OFFSET && t.push(new Rt(t.length, s.OFFSET.length)), s.DATA && t.push(new Rt(t.length, s.DATA.length)), t = ac(s.children, t);
  }
  return t;
}
function Id(i) {
  return (i || []).reduce((t, e) => t + +(e === 0), 0);
}
function wd(i, t) {
  let e, n, s, r, o, a;
  return !t || !(r = i.dictionary) ? (o = $r(i, jr(i, t)), s = new P(i.name, o, i.nullable, Ki(i.metadata))) : t.has(e = r.id) ? (n = (n = r.indexType) ? Wr(n) : new oe(), a = new Gt(t.get(e), n, e, r.isOrdered), s = new P(i.name, a, i.nullable, Ki(i.metadata))) : (n = (n = r.indexType) ? Wr(n) : new oe(), t.set(e, o = $r(i, jr(i, t))), a = new Gt(o, n, e, r.isOrdered), s = new P(i.name, a, i.nullable, Ki(i.metadata))), s || null;
}
function Ki(i = []) {
  return new Map(i.map(({ key: t, value: e }) => [t, e]));
}
function Wr(i) {
  return new st(i.isSigned, i.bitWidth);
}
function $r(i, t) {
  const e = i.type.name;
  switch (e) {
    case "NONE":
      return new Lt();
    case "null":
      return new Lt();
    case "binary":
      return new di();
    case "largebinary":
      return new hi();
    case "utf8":
      return new Ge();
    case "largeutf8":
      return new fi();
    case "bool":
      return new qe();
    case "list":
      return new _e((t || [])[0]);
    case "struct":
      return new J(t || []);
    case "struct_":
      return new J(t || []);
  }
  switch (e) {
    case "int": {
      const n = i.type;
      return new st(n.isSigned, n.bitWidth);
    }
    case "floatingpoint": {
      const n = i.type;
      return new ae(q[n.precision]);
    }
    case "decimal": {
      const n = i.type;
      return new yi(n.scale, n.precision, n.bitWidth);
    }
    case "date": {
      const n = i.type;
      return new pe(X[n.unit]);
    }
    case "time": {
      const n = i.type;
      return new Wt(f[n.unit], n.bitWidth);
    }
    case "timestamp": {
      const n = i.type;
      return new $t(f[n.unit], n.timezone);
    }
    case "interval": {
      const n = i.type;
      return new ge(ct[n.unit]);
    }
    case "duration": {
      const n = i.type;
      return new Yt(f[n.unit]);
    }
    case "union": {
      const n = i.type, [s, ...r] = (n.mode + "").toLowerCase(), o = s.toUpperCase() + r.join("");
      return new ce(H[o], n.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const n = i.type;
      return new pi(n.byteWidth);
    }
    case "fixedsizelist": {
      const n = i.type;
      return new He(n.listSize, (t || [])[0]);
    }
    case "map": {
      const n = i.type;
      return new Ke((t || [])[0], n.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${e}"`);
}
var Sd = ao, Ad = We;
class tt {
  /** @nocollapse */
  static fromJSON(t, e) {
    const n = new tt(0, Y.V5, e);
    return n._createHeader = Td(t, e), n;
  }
  /** @nocollapse */
  static decode(t) {
    t = new Ad(N(t));
    const e = Zt.getRootAsMessage(t), n = e.bodyLength(), s = e.version(), r = e.headerType(), o = new tt(n, s, r);
    return o._createHeader = Od(e, r), o;
  }
  /** @nocollapse */
  static encode(t) {
    const e = new Sd();
    let n = -1;
    return t.isSchema() ? n = x.encode(e, t.header()) : t.isRecordBatch() ? n = ft.encode(e, t.header()) : t.isDictionaryBatch() && (n = Ct.encode(e, t.header())), Zt.startMessage(e), Zt.addVersion(e, Y.V5), Zt.addHeader(e, n), Zt.addHeaderType(e, t.headerType), Zt.addBodyLength(e, BigInt(t.bodyLength)), Zt.finishMessageBuffer(e, Zt.endMessage(e)), e.asUint8Array();
  }
  /** @nocollapse */
  static from(t, e = 0) {
    if (t instanceof x)
      return new tt(0, Y.V5, C.Schema, t);
    if (t instanceof ft)
      return new tt(e, Y.V5, C.RecordBatch, t);
    if (t instanceof Ct)
      return new tt(e, Y.V5, C.DictionaryBatch, t);
    throw new Error(`Unrecognized Message header: ${t}`);
  }
  get type() {
    return this.headerType;
  }
  get version() {
    return this._version;
  }
  get headerType() {
    return this._headerType;
  }
  get bodyLength() {
    return this._bodyLength;
  }
  header() {
    return this._createHeader();
  }
  isSchema() {
    return this.headerType === C.Schema;
  }
  isRecordBatch() {
    return this.headerType === C.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === C.DictionaryBatch;
  }
  constructor(t, e, n, s) {
    this._version = e, this._headerType = n, this.body = new Uint8Array(0), s && (this._createHeader = () => s), this._bodyLength = z(t);
  }
}
class ft {
  get nodes() {
    return this._nodes;
  }
  get length() {
    return this._length;
  }
  get buffers() {
    return this._buffers;
  }
  constructor(t, e, n) {
    this._nodes = e, this._buffers = n, this._length = z(t);
  }
}
class Ct {
  get id() {
    return this._id;
  }
  get data() {
    return this._data;
  }
  get isDelta() {
    return this._isDelta;
  }
  get length() {
    return this.data.length;
  }
  get nodes() {
    return this.data.nodes;
  }
  get buffers() {
    return this.data.buffers;
  }
  constructor(t, e, n = !1) {
    this._data = t, this._isDelta = n, this._id = z(e);
  }
}
class Rt {
  constructor(t, e) {
    this.offset = z(t), this.length = z(e);
  }
}
class ue {
  constructor(t, e) {
    this.length = z(t), this.nullCount = z(e);
  }
}
function Td(i, t) {
  return (() => {
    switch (t) {
      case C.Schema:
        return x.fromJSON(i);
      case C.RecordBatch:
        return ft.fromJSON(i);
      case C.DictionaryBatch:
        return Ct.fromJSON(i);
    }
    throw new Error(`Unrecognized Message type: { name: ${C[t]}, type: ${t} }`);
  });
}
function Od(i, t) {
  return (() => {
    switch (t) {
      case C.Schema:
        return x.decode(i.header(new Bt()), /* @__PURE__ */ new Map(), i.version());
      case C.RecordBatch:
        return ft.decode(i.header(new Vt()), i.version());
      case C.DictionaryBatch:
        return Ct.decode(i.header(new Ee()), i.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${C[t]}, type: ${t} }`);
  });
}
P.encode = Pd;
P.decode = Ud;
P.fromJSON = wd;
x.encode = Cd;
x.decode = Bd;
x.fromJSON = md;
ft.encode = xd;
ft.decode = Ed;
ft.fromJSON = rc;
Ct.encode = kd;
Ct.decode = Dd;
Ct.fromJSON = bd;
ue.encode = Vd;
ue.decode = Nd;
Rt.encode = zd;
Rt.decode = Fd;
function Bd(i, t = /* @__PURE__ */ new Map(), e = Y.V5) {
  const n = Md(i, t);
  return new x(n, Qi(i), t, e);
}
function Ed(i, t = Y.V5) {
  if (i.compression() !== null)
    throw new Error("Record batch compression not implemented");
  return new ft(i.length(), Rd(i), Ld(i, t));
}
function Dd(i, t = Y.V5) {
  return new Ct(ft.decode(i.data(), t), i.id(), i.isDelta());
}
function Fd(i) {
  return new Rt(i.offset(), i.length());
}
function Nd(i) {
  return new ue(i.length(), i.nullCount());
}
function Rd(i) {
  const t = [];
  for (let e, n = -1, s = -1, r = i.nodesLength(); ++n < r; )
    (e = i.nodes(n)) && (t[++s] = ue.decode(e));
  return t;
}
function Ld(i, t) {
  const e = [];
  for (let n, s = -1, r = -1, o = i.buffersLength(); ++s < o; )
    (n = i.buffers(s)) && (t < Y.V4 && (n.bb_pos += 8 * (s + 1)), e[++r] = Rt.decode(n));
  return e;
}
function Md(i, t) {
  const e = [];
  for (let n, s = -1, r = -1, o = i.fieldsLength(); ++s < o; )
    (n = i.fields(s)) && (e[++r] = P.decode(n, t));
  return e;
}
function Yr(i, t) {
  const e = [];
  for (let n, s = -1, r = -1, o = i.childrenLength(); ++s < o; )
    (n = i.children(s)) && (e[++r] = P.decode(n, t));
  return e;
}
function Ud(i, t) {
  let e, n, s, r, o, a;
  return !t || !(a = i.dictionary()) ? (s = qr(i, Yr(i, t)), n = new P(i.name(), s, i.nullable(), Qi(i))) : t.has(e = z(a.id())) ? (r = (r = a.indexType()) ? Gr(r) : new oe(), o = new Gt(t.get(e), r, e, a.isOrdered()), n = new P(i.name(), o, i.nullable(), Qi(i))) : (r = (r = a.indexType()) ? Gr(r) : new oe(), t.set(e, s = qr(i, Yr(i, t))), o = new Gt(s, r, e, a.isOrdered()), n = new P(i.name(), o, i.nullable(), Qi(i))), n || null;
}
function Qi(i) {
  const t = /* @__PURE__ */ new Map();
  if (i)
    for (let e, n, s = -1, r = Math.trunc(i.customMetadataLength()); ++s < r; )
      (e = i.customMetadata(s)) && (n = e.key()) != null && t.set(n, e.value());
  return t;
}
function Gr(i) {
  return new st(i.isSigned(), i.bitWidth());
}
function qr(i, t) {
  const e = i.typeType();
  switch (e) {
    case B.NONE:
      return new Lt();
    case B.Null:
      return new Lt();
    case B.Binary:
      return new di();
    case B.LargeBinary:
      return new hi();
    case B.Utf8:
      return new Ge();
    case B.LargeUtf8:
      return new fi();
    case B.Bool:
      return new qe();
    case B.List:
      return new _e((t || [])[0]);
    case B.Struct_:
      return new J(t || []);
  }
  switch (e) {
    case B.Int: {
      const n = i.type(new ht());
      return new st(n.isSigned(), n.bitWidth());
    }
    case B.FloatingPoint: {
      const n = i.type(new Ft());
      return new ae(n.precision());
    }
    case B.Decimal: {
      const n = i.type(new Fe());
      return new yi(n.scale(), n.precision(), n.bitWidth());
    }
    case B.Date: {
      const n = i.type(new zi());
      return new pe(n.unit());
    }
    case B.Time: {
      const n = i.type(new pt());
      return new Wt(n.unit(), n.bitWidth());
    }
    case B.Timestamp: {
      const n = i.type(new gt());
      return new $t(n.unit(), n.timezone());
    }
    case B.Interval: {
      const n = i.type(new Nt());
      return new ge(n.unit());
    }
    case B.Duration: {
      const n = i.type(new ji());
      return new Yt(n.unit());
    }
    case B.Union: {
      const n = i.type(new ot());
      return new ce(n.mode(), n.typeIdsArray() || [], t || []);
    }
    case B.FixedSizeBinary: {
      const n = i.type(new Wi());
      return new pi(n.byteWidth());
    }
    case B.FixedSizeList: {
      const n = i.type(new $i());
      return new He(n.listSize(), (t || [])[0]);
    }
    case B.Map: {
      const n = i.type(new Yi());
      return new Ke((t || [])[0], n.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${B[e]}" (${e})`);
}
function Cd(i, t) {
  const e = t.fields.map((r) => P.encode(i, r));
  Bt.startFieldsVector(i, e.length);
  const n = Bt.createFieldsVector(i, e), s = t.metadata && t.metadata.size > 0 ? Bt.createCustomMetadataVector(i, [...t.metadata].map(([r, o]) => {
    const a = i.createString(`${r}`), c = i.createString(`${o}`);
    return Q.startKeyValue(i), Q.addKey(i, a), Q.addValue(i, c), Q.endKeyValue(i);
  })) : -1;
  return Bt.startSchema(i), Bt.addFields(i, n), Bt.addEndianness(i, jd ? $e.Little : $e.Big), s !== -1 && Bt.addCustomMetadata(i, s), Bt.endSchema(i);
}
function Pd(i, t) {
  let e = -1, n = -1, s = -1;
  const r = t.type;
  let o = t.typeId;
  y.isDictionary(r) ? (o = r.dictionary.typeId, s = Rn.visit(r, i), n = Rn.visit(r.dictionary, i)) : n = Rn.visit(r, i);
  const a = (r.children || []).map((d) => P.encode(i, d)), c = yt.createChildrenVector(i, a), u = t.metadata && t.metadata.size > 0 ? yt.createCustomMetadataVector(i, [...t.metadata].map(([d, h]) => {
    const L = i.createString(`${d}`), F = i.createString(`${h}`);
    return Q.startKeyValue(i), Q.addKey(i, L), Q.addValue(i, F), Q.endKeyValue(i);
  })) : -1;
  return t.name && (e = i.createString(t.name)), yt.startField(i), yt.addType(i, n), yt.addTypeType(i, o), yt.addChildren(i, c), yt.addNullable(i, !!t.nullable), e !== -1 && yt.addName(i, e), s !== -1 && yt.addDictionary(i, s), u !== -1 && yt.addCustomMetadata(i, u), yt.endField(i);
}
function xd(i, t) {
  const e = t.nodes || [], n = t.buffers || [];
  Vt.startNodesVector(i, e.length);
  for (const o of e.slice().reverse())
    ue.encode(i, o);
  const s = i.endVector();
  Vt.startBuffersVector(i, n.length);
  for (const o of n.slice().reverse())
    Rt.encode(i, o);
  const r = i.endVector();
  return Vt.startRecordBatch(i), Vt.addLength(i, BigInt(t.length)), Vt.addNodes(i, s), Vt.addBuffers(i, r), Vt.endRecordBatch(i);
}
function kd(i, t) {
  const e = ft.encode(i, t.data);
  return Ee.startDictionaryBatch(i), Ee.addId(i, BigInt(t.id)), Ee.addIsDelta(i, t.isDelta), Ee.addData(i, e), Ee.endDictionaryBatch(i);
}
function Vd(i, t) {
  return uo.createFieldNode(i, BigInt(t.length), BigInt(t.nullCount));
}
function zd(i, t) {
  return lo.createBuffer(i, BigInt(t.offset), BigInt(t.length));
}
const jd = (() => {
  const i = new ArrayBuffer(2);
  return new DataView(i).setInt16(
    0,
    256,
    !0
    /* littleEndian */
  ), new Int16Array(i)[0] === 256;
})(), lr = (i) => `Expected ${C[i]} Message in stream, but was null or length 0.`, ur = (i) => `Header pointer of flatbuffer-encoded ${C[i]} Message is null or length 0.`, cc = (i, t) => `Expected to read ${i} metadata bytes, but only read ${t}.`, lc = (i, t) => `Expected to read ${i} bytes for message body, but only read ${t}.`;
class dr {
  constructor(t) {
    this.source = t instanceof bi ? t : new bi(t);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let t;
    return (t = this.readMetadataLength()).done || t.value === -1 && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? j : t;
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  readMessage(t) {
    let e;
    if ((e = this.next()).done)
      return null;
    if (t != null && e.value.headerType !== t)
      throw new Error(lr(t));
    return e.value;
  }
  readMessageBody(t) {
    if (t <= 0)
      return new Uint8Array(0);
    const e = N(this.source.read(t));
    if (e.byteLength < t)
      throw new Error(lc(t, e.byteLength));
    return (
      /* 1. */
      e.byteOffset % 8 === 0 && /* 2. */
      e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
    );
  }
  readSchema(t = !1) {
    const e = C.Schema, n = this.readMessage(e), s = n?.header();
    if (t && !s)
      throw new Error(ur(e));
    return s;
  }
  readMetadataLength() {
    const t = this.source.read(wn), e = t && new We(t), n = e?.readInt32(0) || 0;
    return { done: n === 0, value: n };
  }
  readMetadata(t) {
    const e = this.source.read(t);
    if (!e)
      return j;
    if (e.byteLength < t)
      throw new Error(cc(t, e.byteLength));
    return { done: !1, value: tt.decode(e) };
  }
}
class uc {
  constructor(t, e) {
    this.source = t instanceof le ? t : to(t) ? new an(t, e) : new le(t);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return p(this, void 0, void 0, function* () {
      let t;
      return (t = yield this.readMetadataLength()).done || t.value === -1 && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? j : t;
    });
  }
  throw(t) {
    return p(this, void 0, void 0, function* () {
      return yield this.source.throw(t);
    });
  }
  return(t) {
    return p(this, void 0, void 0, function* () {
      return yield this.source.return(t);
    });
  }
  readMessage(t) {
    return p(this, void 0, void 0, function* () {
      let e;
      if ((e = yield this.next()).done)
        return null;
      if (t != null && e.value.headerType !== t)
        throw new Error(lr(t));
      return e.value;
    });
  }
  readMessageBody(t) {
    return p(this, void 0, void 0, function* () {
      if (t <= 0)
        return new Uint8Array(0);
      const e = N(yield this.source.read(t));
      if (e.byteLength < t)
        throw new Error(lc(t, e.byteLength));
      return (
        /* 1. */
        e.byteOffset % 8 === 0 && /* 2. */
        e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
      );
    });
  }
  readSchema() {
    return p(this, arguments, void 0, function* (t = !1) {
      const e = C.Schema, n = yield this.readMessage(e), s = n?.header();
      if (t && !s)
        throw new Error(ur(e));
      return s;
    });
  }
  readMetadataLength() {
    return p(this, void 0, void 0, function* () {
      const t = yield this.source.read(wn), e = t && new We(t), n = e?.readInt32(0) || 0;
      return { done: n === 0, value: n };
    });
  }
  readMetadata(t) {
    return p(this, void 0, void 0, function* () {
      const e = yield this.source.read(t);
      if (!e)
        return j;
      if (e.byteLength < t)
        throw new Error(cc(t, e.byteLength));
      return { done: !1, value: tt.decode(e) };
    });
  }
}
class dc extends dr {
  constructor(t) {
    super(new Uint8Array(0)), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof kr ? t : new kr(t);
  }
  next() {
    const { _json: t } = this;
    if (!this._schema)
      return this._schema = !0, { done: !1, value: tt.fromJSON(t.schema, C.Schema) };
    if (this._dictionaryIndex < t.dictionaries.length) {
      const e = t.dictionaries[this._dictionaryIndex++];
      return this._body = e.data.columns, { done: !1, value: tt.fromJSON(e, C.DictionaryBatch) };
    }
    if (this._batchIndex < t.batches.length) {
      const e = t.batches[this._batchIndex++];
      return this._body = e.columns, { done: !1, value: tt.fromJSON(e, C.RecordBatch) };
    }
    return this._body = [], j;
  }
  readMessageBody(t) {
    return e(this._body);
    function e(n) {
      return (n || []).reduce((s, r) => [
        ...s,
        ...r.VALIDITY && [r.VALIDITY] || [],
        ...r.TYPE_ID && [r.TYPE_ID] || [],
        ...r.OFFSET && [r.OFFSET] || [],
        ...r.DATA && [r.DATA] || [],
        ...e(r.children)
      ], []);
    }
  }
  readMessage(t) {
    let e;
    if ((e = this.next()).done)
      return null;
    if (t != null && e.value.headerType !== t)
      throw new Error(lr(t));
    return e.value;
  }
  readSchema() {
    const t = C.Schema, e = this.readMessage(t), n = e?.header();
    if (!e || !n)
      throw new Error(ur(t));
    return n;
  }
}
const wn = 4, Kn = "ARROW1", vi = new Uint8Array(Kn.length);
for (let i = 0; i < Kn.length; i += 1)
  vi[i] = Kn.codePointAt(i);
function hr(i, t = 0) {
  for (let e = -1, n = vi.length; ++e < n; )
    if (vi[e] !== i[t + e])
      return !1;
  return !0;
}
const Li = vi.length, hc = Li + wn, Wd = Li * 2 + wn;
class et extends Ls {
  constructor(t) {
    super(), this._impl = t;
  }
  get closed() {
    return this._impl.closed;
  }
  get schema() {
    return this._impl.schema;
  }
  get autoDestroy() {
    return this._impl.autoDestroy;
  }
  get dictionaries() {
    return this._impl.dictionaries;
  }
  get numDictionaries() {
    return this._impl.numDictionaries;
  }
  get numRecordBatches() {
    return this._impl.numRecordBatches;
  }
  get footer() {
    return this._impl.isFile() ? this._impl.footer : null;
  }
  isSync() {
    return this._impl.isSync();
  }
  isAsync() {
    return this._impl.isAsync();
  }
  isFile() {
    return this._impl.isFile();
  }
  isStream() {
    return this._impl.isStream();
  }
  next() {
    return this._impl.next();
  }
  throw(t) {
    return this._impl.throw(t);
  }
  return(t) {
    return this._impl.return(t);
  }
  cancel() {
    return this._impl.cancel();
  }
  reset(t) {
    return this._impl.reset(t), this._DOMStream = void 0, this._nodeStream = void 0, this;
  }
  open(t) {
    const e = this._impl.open(t);
    return se(e) ? e.then(() => this) : this;
  }
  readRecordBatch(t) {
    return this._impl.isFile() ? this._impl.readRecordBatch(t) : null;
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
  toDOMStream() {
    return dt.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return dt.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: !0 });
  }
  /** @nocollapse */
  // @ts-ignore
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  /** @nocollapse */
  static throughDOM(t, e) {
    throw new Error('"throughDOM" not available in this environment');
  }
  /** @nocollapse */
  static from(t) {
    return t instanceof et ? t : Vn(t) ? Gd(t) : to(t) ? Kd(t) : se(t) ? p(this, void 0, void 0, function* () {
      return yield et.from(yield t);
    }) : eo(t) || Zn(t) || io(t) || be(t) ? Hd(new le(t)) : qd(new bi(t));
  }
  /** @nocollapse */
  static readAll(t) {
    return t instanceof et ? t.isSync() ? Hr(t) : Kr(t) : Vn(t) || ArrayBuffer.isView(t) || Xe(t) || Xr(t) ? Hr(t) : Kr(t);
  }
}
class Ze extends et {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return [...this];
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return It(this, arguments, function* () {
      yield E(yield* Vi(ne(this[Symbol.iterator]())));
    });
  }
}
class Ii extends et {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return p(this, void 0, void 0, function* () {
      var t, e, n, s;
      const r = new Array();
      try {
        for (var o = !0, a = ne(this), c; c = yield a.next(), t = c.done, !t; o = !0) {
          s = c.value, o = !1;
          const u = s;
          r.push(u);
        }
      } catch (u) {
        e = { error: u };
      } finally {
        try {
          !o && !t && (n = a.return) && (yield n.call(a));
        } finally {
          if (e) throw e.error;
        }
      }
      return r;
    });
  }
  [Symbol.iterator]() {
    throw new Error("AsyncRecordBatchStreamReader is not Iterable");
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
}
class Sn extends Ze {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class fc extends Ii {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class yc {
  get numDictionaries() {
    return this._dictionaryIndex;
  }
  get numRecordBatches() {
    return this._recordBatchIndex;
  }
  constructor(t = /* @__PURE__ */ new Map()) {
    this.closed = !1, this.autoDestroy = !0, this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.dictionaries = t;
  }
  isSync() {
    return !1;
  }
  isAsync() {
    return !1;
  }
  isFile() {
    return !1;
  }
  isStream() {
    return !1;
  }
  reset(t) {
    return this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.schema = t, this.dictionaries = /* @__PURE__ */ new Map(), this;
  }
  _loadRecordBatch(t, e) {
    const n = this._loadVectors(t, e, this.schema.fields), s = _({ type: new J(this.schema.fields), length: t.length, children: n });
    return new Z(this.schema, s);
  }
  _loadDictionaryBatch(t, e) {
    const { id: n, isDelta: s } = t, { dictionaries: r, schema: o } = this, a = r.get(n), c = o.dictionaries.get(n), u = this._loadVectors(t.data, e, [c]);
    return (a && s ? a.concat(new g(u)) : new g(u)).memoize();
  }
  _loadVectors(t, e, n) {
    return new La(e, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
class ln extends yc {
  constructor(t, e) {
    super(e), this._reader = Vn(t) ? new dc(this._handle = t) : new dr(this._handle = t);
  }
  isSync() {
    return !0;
  }
  isStream() {
    return !0;
  }
  [Symbol.iterator]() {
    return this;
  }
  cancel() {
    !this.closed && (this.closed = !0) && (this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
  }
  open(t) {
    return this.closed || (this.autoDestroy = gc(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
  }
  throw(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : j;
  }
  return(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : j;
  }
  next() {
    if (this.closed)
      return j;
    let t;
    const { _reader: e } = this;
    for (; t = this._readNextMessageAndValidate(); )
      if (t.isSchema())
        this.reset(t.header());
      else if (t.isRecordBatch()) {
        this._recordBatchIndex++;
        const n = t.header(), s = e.readMessageBody(t.bodyLength);
        return { done: !1, value: this._loadRecordBatch(n, s) };
      } else if (t.isDictionaryBatch()) {
        this._dictionaryIndex++;
        const n = t.header(), s = e.readMessageBody(t.bodyLength), r = this._loadDictionaryBatch(n, s);
        this.dictionaries.set(n.id, r);
      }
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new cr(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}
class un extends yc {
  constructor(t, e) {
    super(e), this._reader = new uc(this._handle = t);
  }
  isAsync() {
    return !0;
  }
  isStream() {
    return !0;
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  cancel() {
    return p(this, void 0, void 0, function* () {
      !this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
    });
  }
  open(t) {
    return p(this, void 0, void 0, function* () {
      return this.closed || (this.autoDestroy = gc(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
    });
  }
  throw(t) {
    return p(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : j;
    });
  }
  return(t) {
    return p(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : j;
    });
  }
  next() {
    return p(this, void 0, void 0, function* () {
      if (this.closed)
        return j;
      let t;
      const { _reader: e } = this;
      for (; t = yield this._readNextMessageAndValidate(); )
        if (t.isSchema())
          yield this.reset(t.header());
        else if (t.isRecordBatch()) {
          this._recordBatchIndex++;
          const n = t.header(), s = yield e.readMessageBody(t.bodyLength);
          return { done: !1, value: this._loadRecordBatch(n, s) };
        } else if (t.isDictionaryBatch()) {
          this._dictionaryIndex++;
          const n = t.header(), s = yield e.readMessageBody(t.bodyLength), r = this._loadDictionaryBatch(n, s);
          this.dictionaries.set(n.id, r);
        }
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new cr(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return p(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}
class pc extends ln {
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  constructor(t, e) {
    super(t instanceof Vr ? t : new Vr(t), e);
  }
  isSync() {
    return !0;
  }
  isFile() {
    return !0;
  }
  open(t) {
    if (!this.closed && !this._footer) {
      this.schema = (this._footer = this._readFooter()).schema;
      for (const e of this._footer.dictionaryBatches())
        e && this._readDictionaryBatch(this._dictionaryIndex++);
    }
    return super.open(t);
  }
  readRecordBatch(t) {
    var e;
    if (this.closed)
      return null;
    this._footer || this.open();
    const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
    if (n && this._handle.seek(n.offset)) {
      const s = this._reader.readMessage(C.RecordBatch);
      if (s?.isRecordBatch()) {
        const r = s.header(), o = this._reader.readMessageBody(s.bodyLength);
        return this._loadRecordBatch(r, o);
      }
    }
    return null;
  }
  _readDictionaryBatch(t) {
    var e;
    const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
    if (n && this._handle.seek(n.offset)) {
      const s = this._reader.readMessage(C.DictionaryBatch);
      if (s?.isDictionaryBatch()) {
        const r = s.header(), o = this._reader.readMessageBody(s.bodyLength), a = this._loadDictionaryBatch(r, o);
        this.dictionaries.set(r.id, a);
      }
    }
  }
  _readFooter() {
    const { _handle: t } = this, e = t.size - hc, n = t.readInt32(e), s = t.readAt(e - n, n);
    return mi.decode(s);
  }
  _readNextMessageAndValidate(t) {
    var e;
    if (this._footer || this.open(), this._footer && this._recordBatchIndex < this.numRecordBatches) {
      const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(this._recordBatchIndex);
      if (n && this._handle.seek(n.offset))
        return this._reader.readMessage(t);
    }
    return null;
  }
}
class $d extends un {
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  constructor(t, ...e) {
    const n = typeof e[0] != "number" ? e.shift() : void 0, s = e[0] instanceof Map ? e.shift() : void 0;
    super(t instanceof an ? t : new an(t, n), s);
  }
  isFile() {
    return !0;
  }
  isAsync() {
    return !0;
  }
  open(t) {
    const e = Object.create(null, {
      open: { get: () => super.open }
    });
    return p(this, void 0, void 0, function* () {
      if (!this.closed && !this._footer) {
        this.schema = (this._footer = yield this._readFooter()).schema;
        for (const n of this._footer.dictionaryBatches())
          n && (yield this._readDictionaryBatch(this._dictionaryIndex++));
      }
      return yield e.open.call(this, t);
    });
  }
  readRecordBatch(t) {
    return p(this, void 0, void 0, function* () {
      var e;
      if (this.closed)
        return null;
      this._footer || (yield this.open());
      const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
      if (n && (yield this._handle.seek(n.offset))) {
        const s = yield this._reader.readMessage(C.RecordBatch);
        if (s?.isRecordBatch()) {
          const r = s.header(), o = yield this._reader.readMessageBody(s.bodyLength);
          return this._loadRecordBatch(r, o);
        }
      }
      return null;
    });
  }
  _readDictionaryBatch(t) {
    return p(this, void 0, void 0, function* () {
      var e;
      const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
      if (n && (yield this._handle.seek(n.offset))) {
        const s = yield this._reader.readMessage(C.DictionaryBatch);
        if (s?.isDictionaryBatch()) {
          const r = s.header(), o = yield this._reader.readMessageBody(s.bodyLength), a = this._loadDictionaryBatch(r, o);
          this.dictionaries.set(r.id, a);
        }
      }
    });
  }
  _readFooter() {
    return p(this, void 0, void 0, function* () {
      const { _handle: t } = this;
      t._pending && (yield t._pending);
      const e = t.size - hc, n = yield t.readInt32(e), s = yield t.readAt(e - n, n);
      return mi.decode(s);
    });
  }
  _readNextMessageAndValidate(t) {
    return p(this, void 0, void 0, function* () {
      if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
        const e = this._footer.getRecordBatch(this._recordBatchIndex);
        if (e && (yield this._handle.seek(e.offset)))
          return yield this._reader.readMessage(t);
      }
      return null;
    });
  }
}
class Yd extends ln {
  constructor(t, e) {
    super(t, e);
  }
  _loadVectors(t, e, n) {
    return new td(e, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
function gc(i, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : i.autoDestroy;
}
function* Hr(i) {
  const t = et.from(i);
  try {
    if (!t.open({ autoDestroy: !1 }).closed)
      do
        yield t;
      while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function Kr(i) {
  return It(this, arguments, function* () {
    const e = yield E(et.from(i));
    try {
      if (!(yield E(e.open({ autoDestroy: !1 }))).closed)
        do
          yield yield E(e);
        while (!(yield E(e.reset().open())).closed);
    } finally {
      yield E(e.cancel());
    }
  });
}
function Gd(i) {
  return new Ze(new Yd(i));
}
function qd(i) {
  const t = i.peek(Li + 7 & -8);
  return t && t.byteLength >= 4 ? hr(t) ? new Sn(new pc(i.read())) : new Ze(new ln(i)) : new Ze(new ln((function* () {
  })()));
}
function Hd(i) {
  return p(this, void 0, void 0, function* () {
    const t = yield i.peek(Li + 7 & -8);
    return t && t.byteLength >= 4 ? hr(t) ? new Sn(new pc(yield i.read())) : new Ii(new un(i)) : new Ii(new un((function() {
      return It(this, arguments, function* () {
      });
    })()));
  });
}
function Kd(i) {
  return p(this, void 0, void 0, function* () {
    const { size: t } = yield i.stat(), e = new an(i, t);
    return t >= Wd && hr(yield e.readAt(0, Li + 7 & -8)) ? new fc(new $d(e)) : new Ii(new un(e));
  });
}
class W extends D {
  /** @nocollapse */
  static assemble(...t) {
    const e = (s) => s.flatMap((r) => Array.isArray(r) ? e(r) : r instanceof Z ? r.data.children : r.data), n = new W();
    return n.visitMany(e(t)), n;
  }
  constructor() {
    super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [];
  }
  visit(t) {
    if (t instanceof g)
      return this.visitMany(t.data), this;
    const { type: e } = t;
    if (!y.isDictionary(e)) {
      const { length: n } = t;
      if (n > 2147483647)
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      if (y.isUnion(e))
        this.nodes.push(new ue(n, 0));
      else {
        const { nullCount: s } = t;
        y.isNull(e) || wt.call(this, s <= 0 ? new Uint8Array(0) : gi(t.offset, n, t.nullBitmap)), this.nodes.push(new ue(n, s));
      }
    }
    return super.visit(t);
  }
  visitNull(t) {
    return this;
  }
  visitDictionary(t) {
    return this.visit(t.clone(t.type.indices));
  }
  get nodes() {
    return this._nodes;
  }
  get buffers() {
    return this._buffers;
  }
  get byteLength() {
    return this._byteLength;
  }
  get bufferRegions() {
    return this._bufferRegions;
  }
}
function wt(i) {
  const t = i.byteLength + 7 & -8;
  return this.buffers.push(i), this.bufferRegions.push(new Rt(this._byteLength, t)), this._byteLength += t, this;
}
function Qd(i) {
  var t;
  const { type: e, length: n, typeIds: s, valueOffsets: r } = i;
  if (wt.call(this, s), e.mode === H.Sparse)
    return Qn.call(this, i);
  if (e.mode === H.Dense) {
    if (i.offset <= 0)
      return wt.call(this, r), Qn.call(this, i);
    {
      const o = new Int32Array(n), a = /* @__PURE__ */ Object.create(null), c = /* @__PURE__ */ Object.create(null);
      for (let u, d, h = -1; ++h < n; )
        (u = s[h]) !== void 0 && ((d = a[u]) === void 0 && (d = a[u] = r[h]), o[h] = r[h] - d, c[u] = ((t = c[u]) !== null && t !== void 0 ? t : 0) + 1);
      wt.call(this, o), this.visitMany(i.children.map((u, d) => {
        const h = e.typeIds[d], L = a[h], F = c[h];
        return u.slice(L, Math.min(n, F));
      }));
    }
  }
  return this;
}
function Jd(i) {
  let t;
  return i.nullCount >= i.length ? wt.call(this, new Uint8Array(0)) : (t = i.values) instanceof Uint8Array ? wt.call(this, gi(i.offset, i.length, t)) : wt.call(this, _i(i.values));
}
function Qt(i) {
  return wt.call(this, i.values.subarray(0, i.length * i.stride));
}
function An(i) {
  const { length: t, values: e, valueOffsets: n } = i, s = z(n[0]), r = z(n[t]), o = Math.min(r - s, e.byteLength - s);
  return wt.call(this, ts(-s, t + 1, n)), wt.call(this, e.subarray(s, s + o)), this;
}
function fr(i) {
  const { length: t, valueOffsets: e } = i;
  if (e) {
    const { [0]: n, [t]: s } = e;
    return wt.call(this, ts(-n, t + 1, e)), this.visit(i.children[0].slice(n, s - n));
  }
  return this.visit(i.children[0]);
}
function Qn(i) {
  return this.visitMany(i.type.children.map((t, e) => i.children[e]).filter(Boolean))[0];
}
W.prototype.visitBool = Jd;
W.prototype.visitInt = Qt;
W.prototype.visitFloat = Qt;
W.prototype.visitUtf8 = An;
W.prototype.visitLargeUtf8 = An;
W.prototype.visitBinary = An;
W.prototype.visitLargeBinary = An;
W.prototype.visitFixedSizeBinary = Qt;
W.prototype.visitDate = Qt;
W.prototype.visitTimestamp = Qt;
W.prototype.visitTime = Qt;
W.prototype.visitDecimal = Qt;
W.prototype.visitList = fr;
W.prototype.visitStruct = Qn;
W.prototype.visitUnion = Qd;
W.prototype.visitInterval = Qt;
W.prototype.visitDuration = Qt;
W.prototype.visitFixedSizeList = fr;
W.prototype.visitMap = fr;
class Zd extends D {
  visit(t) {
    return t == null ? void 0 : super.visit(t);
  }
  visitNull({ typeId: t }) {
    return { name: B[t].toLowerCase() };
  }
  visitInt({ typeId: t, bitWidth: e, isSigned: n }) {
    return { name: B[t].toLowerCase(), bitWidth: e, isSigned: n };
  }
  visitFloat({ typeId: t, precision: e }) {
    return { name: B[t].toLowerCase(), precision: q[e] };
  }
  visitBinary({ typeId: t }) {
    return { name: B[t].toLowerCase() };
  }
  visitLargeBinary({ typeId: t }) {
    return { name: B[t].toLowerCase() };
  }
  visitBool({ typeId: t }) {
    return { name: B[t].toLowerCase() };
  }
  visitUtf8({ typeId: t }) {
    return { name: B[t].toLowerCase() };
  }
  visitLargeUtf8({ typeId: t }) {
    return { name: B[t].toLowerCase() };
  }
  visitDecimal({ typeId: t, scale: e, precision: n, bitWidth: s }) {
    return { name: B[t].toLowerCase(), scale: e, precision: n, bitWidth: s };
  }
  visitDate({ typeId: t, unit: e }) {
    return { name: B[t].toLowerCase(), unit: X[e] };
  }
  visitTime({ typeId: t, unit: e, bitWidth: n }) {
    return { name: B[t].toLowerCase(), unit: f[e], bitWidth: n };
  }
  visitTimestamp({ typeId: t, timezone: e, unit: n }) {
    return { name: B[t].toLowerCase(), unit: f[n], timezone: e };
  }
  visitInterval({ typeId: t, unit: e }) {
    return { name: B[t].toLowerCase(), unit: ct[e] };
  }
  visitDuration({ typeId: t, unit: e }) {
    return { name: B[t].toLocaleLowerCase(), unit: f[e] };
  }
  visitList({ typeId: t }) {
    return { name: B[t].toLowerCase() };
  }
  visitStruct({ typeId: t }) {
    return { name: B[t].toLowerCase() };
  }
  visitUnion({ typeId: t, mode: e, typeIds: n }) {
    return {
      name: B[t].toLowerCase(),
      mode: H[e].toUpperCase(),
      typeIds: [...n]
    };
  }
  visitDictionary(t) {
    return this.visit(t.dictionary);
  }
  visitFixedSizeBinary({ typeId: t, byteWidth: e }) {
    return { name: B[t].toLowerCase(), byteWidth: e };
  }
  visitFixedSizeList({ typeId: t, listSize: e }) {
    return { name: B[t].toLowerCase(), listSize: e };
  }
  visitMap({ typeId: t, keysSorted: e }) {
    return { name: B[t].toLowerCase(), keysSorted: e };
  }
}
class Tn extends D {
  /** @nocollapse */
  static assemble(...t) {
    const e = new Tn();
    return t.map(({ schema: n, data: s }) => e.visitMany(n.fields, s.children));
  }
  visit({ name: t }, e) {
    const { length: n } = e, { offset: s, nullCount: r, nullBitmap: o } = e, a = y.isDictionary(e.type) ? e.type.indices : e.type, c = Object.assign([], e.buffers, { [bt.VALIDITY]: void 0 });
    return Object.assign({ name: t, count: n, VALIDITY: y.isNull(a) || y.isUnion(a) ? void 0 : r <= 0 ? Array.from({ length: n }, () => 1) : [...new Qe(o, s, n, null, Ds)] }, super.visit(e.clone(a, s, n, 0, c)));
  }
  visitNull() {
    return {};
  }
  visitBool({ values: t, offset: e, length: n }) {
    return { DATA: [...new Qe(t, e, n, null, mn)] };
  }
  visitInt(t) {
    return {
      DATA: t.type.bitWidth < 64 ? [...t.values] : [...Xt(t.values, 2)]
    };
  }
  visitFloat(t) {
    return { DATA: [...t.values] };
  }
  visitUtf8(t) {
    return { DATA: [...new g([t])], OFFSET: [...t.valueOffsets] };
  }
  visitLargeUtf8(t) {
    return { DATA: [...new g([t])], OFFSET: [...Xt(t.valueOffsets, 2)] };
  }
  visitBinary(t) {
    return { DATA: [...Ln(new g([t]))], OFFSET: [...t.valueOffsets] };
  }
  visitLargeBinary(t) {
    return { DATA: [...Ln(new g([t]))], OFFSET: [...Xt(t.valueOffsets, 2)] };
  }
  visitFixedSizeBinary(t) {
    return { DATA: [...Ln(new g([t]))] };
  }
  visitDate(t) {
    return {
      DATA: t.type.unit === X.DAY ? [...t.values] : [...Xt(t.values, 2)]
    };
  }
  visitTimestamp(t) {
    return { DATA: [...Xt(t.values, 2)] };
  }
  visitTime(t) {
    return {
      DATA: t.type.unit < f.MICROSECOND ? [...t.values] : [...Xt(t.values, 2)]
    };
  }
  visitDecimal(t) {
    return { DATA: [...Xt(t.values, 4)] };
  }
  visitList(t) {
    return {
      OFFSET: [...t.valueOffsets],
      children: this.visitMany(t.type.children, t.children)
    };
  }
  visitStruct(t) {
    return {
      children: this.visitMany(t.type.children, t.children)
    };
  }
  visitUnion(t) {
    return {
      TYPE_ID: [...t.typeIds],
      OFFSET: t.type.mode === H.Dense ? [...t.valueOffsets] : void 0,
      children: this.visitMany(t.type.children, t.children)
    };
  }
  visitInterval(t) {
    return { DATA: [...t.values] };
  }
  visitDuration(t) {
    return { DATA: [...Xt(t.values, 2)] };
  }
  visitFixedSizeList(t) {
    return {
      children: this.visitMany(t.type.children, t.children)
    };
  }
  visitMap(t) {
    return {
      OFFSET: [...t.valueOffsets],
      children: this.visitMany(t.type.children, t.children)
    };
  }
}
function* Ln(i) {
  for (const t of i)
    yield t.reduce((e, n) => `${e}${("0" + (n & 255).toString(16)).slice(-2)}`, "").toUpperCase();
}
function* Xt(i, t) {
  const e = new Uint32Array(i.buffer);
  for (let n = -1, s = e.length / t; ++n < s; )
    yield `${Si.new(e.subarray((n + 0) * t, (n + 1) * t), !1)}`;
}
class Mi extends Ls {
  /** @nocollapse */
  // @ts-ignore
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  /** @nocollapse */
  static throughDOM(t, e) {
    throw new Error('"throughDOM" not available in this environment');
  }
  constructor(t) {
    super(), this._position = 0, this._started = !1, this._sink = new je(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), at(t) || (t = { autoDestroy: !0, writeLegacyIpcFormat: !1 }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : !0, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : !1;
  }
  toString(t = !1) {
    return this._sink.toString(t);
  }
  toUint8Array(t = !1) {
    return this._sink.toUint8Array(t);
  }
  writeAll(t) {
    return se(t) ? t.then((e) => this.writeAll(e)) : be(t) ? gr(this, t) : pr(this, t);
  }
  get closed() {
    return this._sink.closed;
  }
  [Symbol.asyncIterator]() {
    return this._sink[Symbol.asyncIterator]();
  }
  toDOMStream(t) {
    return this._sink.toDOMStream(t);
  }
  toNodeStream(t) {
    return this._sink.toNodeStream(t);
  }
  close() {
    return this.reset()._sink.close();
  }
  abort(t) {
    return this.reset()._sink.abort(t);
  }
  finish() {
    return this._autoDestroy ? this.close() : this.reset(this._sink, this._schema), this;
  }
  reset(t = this._sink, e = null) {
    return t === this._sink || t instanceof je ? this._sink = t : (this._sink = new je(), t && jc(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && Wc(t) && this.toNodeStream({ objectMode: !1 }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!e || !cn(e, this._schema)) && (e == null ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = e, this._writeSchema(e))), this;
  }
  write(t) {
    let e = null;
    if (this._sink) {
      if (t == null)
        return this.finish() && void 0;
      if (t instanceof G && !(e = t.schema))
        return this.finish() && void 0;
      if (t instanceof Z && !(e = t.schema))
        return this.finish() && void 0;
    } else throw new Error("RecordBatchWriter is closed");
    if (e && !cn(e, this._schema)) {
      if (this._started && this._autoDestroy)
        return this.close();
      this.reset(this._sink, e);
    }
    t instanceof Z ? t instanceof cr || this._writeRecordBatch(t) : t instanceof G ? this.writeAll(t.batches) : Xe(t) && this.writeAll(t);
  }
  _writeMessage(t, e = 8) {
    const n = e - 1, s = tt.encode(t), r = s.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, a = r + o + n & ~n, c = a - r - o;
    return t.headerType === C.RecordBatch ? this._recordBatchBlocks.push(new Mt(a, t.bodyLength, this._position)) : t.headerType === C.DictionaryBatch && this._dictionaryBlocks.push(new Mt(a, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(a - o)), r > 0 && this._write(s), this._writePadding(c);
  }
  _write(t) {
    if (this._started) {
      const e = N(t);
      e && e.byteLength > 0 && (this._sink.write(e), this._position += e.byteLength);
    }
    return this;
  }
  _writeSchema(t) {
    return this._writeMessage(tt.from(t));
  }
  // @ts-ignore
  _writeFooter(t) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(vi);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: e, nodes: n, bufferRegions: s, buffers: r } = W.assemble(t), o = new ft(t.numRows, n, s), a = tt.from(o, e);
    return this._writeDictionaries(t)._writeMessage(a)._writeBodyBuffers(r);
  }
  _writeDictionaryBatch(t, e, n = !1) {
    const { byteLength: s, nodes: r, bufferRegions: o, buffers: a } = W.assemble(new g([t])), c = new ft(t.length, r, o), u = new Ct(c, e, n), d = tt.from(u, s);
    return this._writeMessage(d)._writeBodyBuffers(a);
  }
  _writeBodyBuffers(t) {
    let e, n, s;
    for (let r = -1, o = t.length; ++r < o; )
      (e = t[r]) && (n = e.byteLength) > 0 && (this._write(e), (s = (n + 7 & -8) - n) > 0 && this._writePadding(s));
    return this;
  }
  _writeDictionaries(t) {
    var e, n;
    for (const [s, r] of t.dictionaries) {
      const o = (e = r?.data) !== null && e !== void 0 ? e : [], a = this._seenDictionaries.get(s), c = (n = this._dictionaryDeltaOffsets.get(s)) !== null && n !== void 0 ? n : 0;
      if (!a || a.data[0] !== o[0])
        for (const [u, d] of o.entries())
          this._writeDictionaryBatch(d, s, u > 0);
      else if (c < o.length)
        for (const u of o.slice(c))
          this._writeDictionaryBatch(u, s, !0);
      this._seenDictionaries.set(s, r), this._dictionaryDeltaOffsets.set(s, o.length);
    }
    return this;
  }
}
class Ui extends Mi {
  /** @nocollapse */
  static writeAll(t, e) {
    const n = new Ui(e);
    return se(t) ? t.then((s) => n.writeAll(s)) : be(t) ? gr(n, t) : pr(n, t);
  }
}
class Ci extends Mi {
  /** @nocollapse */
  static writeAll(t) {
    const e = new Ci();
    return se(t) ? t.then((n) => e.writeAll(n)) : be(t) ? gr(e, t) : pr(e, t);
  }
  constructor() {
    super(), this._autoDestroy = !0;
  }
  // @ts-ignore
  _writeSchema(t) {
    return this._writeMagic()._writePadding(2);
  }
  _writeDictionaryBatch(t, e, n = !1) {
    if (!n && this._seenDictionaries.has(e))
      throw new Error("The Arrow File format does not support replacement dictionaries. ");
    return super._writeDictionaryBatch(t, e, n);
  }
  _writeFooter(t) {
    const e = mi.encode(new mi(t, Y.V5, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic();
  }
}
class yr extends Mi {
  /** @nocollapse */
  static writeAll(t) {
    return new yr().writeAll(t);
  }
  constructor() {
    super(), this._autoDestroy = !0, this._recordBatches = [], this._recordBatchesWithDictionaries = [];
  }
  _writeMessage() {
    return this;
  }
  // @ts-ignore
  _writeFooter(t) {
    return this;
  }
  _writeSchema(t) {
    return this._write(`{
  "schema": ${JSON.stringify({ fields: t.fields.map((e) => _c(e)) }, null, 2)}`);
  }
  _writeDictionaries(t) {
    return t.dictionaries.size > 0 && this._recordBatchesWithDictionaries.push(t), this;
  }
  _writeDictionaryBatch(t, e, n = !1) {
    return this._write(this._dictionaryBlocks.length === 0 ? "    " : `,
    `), this._write(Xd(t, e, n)), this._dictionaryBlocks.push(new Mt(0, 0, 0)), this;
  }
  _writeRecordBatch(t) {
    return this._writeDictionaries(t), this._recordBatches.push(t), this;
  }
  close() {
    if (this._recordBatchesWithDictionaries.length > 0) {
      this._write(`,
  "dictionaries": [
`);
      for (const t of this._recordBatchesWithDictionaries)
        super._writeDictionaries(t);
      this._write(`
  ]`);
    }
    if (this._recordBatches.length > 0) {
      for (let t = -1, e = this._recordBatches.length; ++t < e; )
        this._write(t === 0 ? `,
  "batches": [
    ` : `,
    `), this._write(th(this._recordBatches[t])), this._recordBatchBlocks.push(new Mt(0, 0, 0));
      this._write(`
  ]`);
    }
    return this._schema && this._write(`
}`), this._recordBatchesWithDictionaries = [], this._recordBatches = [], super.close();
  }
}
function pr(i, t) {
  let e = t;
  t instanceof G && (e = t.batches, i.reset(void 0, t.schema));
  for (const n of e)
    i.write(n);
  return i.finish();
}
function gr(i, t) {
  return p(this, void 0, void 0, function* () {
    var e, n, s, r, o, a, c;
    try {
      for (e = !0, n = ne(t); s = yield n.next(), r = s.done, !r; e = !0) {
        c = s.value, e = !1;
        const u = c;
        i.write(u);
      }
    } catch (u) {
      o = { error: u };
    } finally {
      try {
        !e && !r && (a = n.return) && (yield a.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    return i.finish();
  });
}
function _c({ name: i, type: t, nullable: e }) {
  const n = new Zd();
  return {
    name: i,
    nullable: e,
    type: n.visit(t),
    children: (t.children || []).map((s) => _c(s)),
    dictionary: y.isDictionary(t) ? {
      id: t.id,
      isOrdered: t.isOrdered,
      indexType: n.visit(t.indices)
    } : void 0
  };
}
function Xd(i, t, e = !1) {
  const [n] = Tn.assemble(new Z({ [t]: i }));
  return JSON.stringify({
    id: t,
    isDelta: e,
    data: {
      count: i.length,
      columns: n
    }
  }, null, 2);
}
function th(i) {
  const [t] = Tn.assemble(i);
  return JSON.stringify({
    count: i.numRows,
    columns: t
  }, null, 2);
}
function eh(i, t) {
  if (be(i))
    return nh(i, t);
  if (Xe(i))
    return ih(i, t);
  throw new Error("toDOMStream() must be called with an Iterable or AsyncIterable");
}
function ih(i, t) {
  let e = null;
  const n = t?.type === "bytes" || !1, s = t?.highWaterMark || Math.pow(2, 24);
  return new ReadableStream(Object.assign(Object.assign({}, t), {
    start(o) {
      r(o, e || (e = i[Symbol.iterator]()));
    },
    pull(o) {
      e ? r(o, e) : o.close();
    },
    cancel() {
      (e?.return && e.return() || !0) && (e = null);
    }
  }), Object.assign({ highWaterMark: n ? s : void 0 }, t));
  function r(o, a) {
    let c, u = null, d = o.desiredSize || null;
    for (; !(u = a.next(n ? d : null)).done; )
      if (ArrayBuffer.isView(u.value) && (c = N(u.value)) && (d != null && n && (d = d - c.byteLength + 1), u.value = c), o.enqueue(u.value), d != null && --d <= 0)
        return;
    o.close();
  }
}
function nh(i, t) {
  let e = null;
  const n = t?.type === "bytes" || !1, s = t?.highWaterMark || Math.pow(2, 24);
  return new ReadableStream(Object.assign(Object.assign({}, t), {
    start(o) {
      return p(this, void 0, void 0, function* () {
        yield r(o, e || (e = i[Symbol.asyncIterator]()));
      });
    },
    pull(o) {
      return p(this, void 0, void 0, function* () {
        e ? yield r(o, e) : o.close();
      });
    },
    cancel() {
      return p(this, void 0, void 0, function* () {
        (e?.return && (yield e.return()) || !0) && (e = null);
      });
    }
  }), Object.assign({ highWaterMark: n ? s : void 0 }, t));
  function r(o, a) {
    return p(this, void 0, void 0, function* () {
      let c, u = null, d = o.desiredSize || null;
      for (; !(u = yield a.next(n ? d : null)).done; )
        if (ArrayBuffer.isView(u.value) && (c = N(u.value)) && (d != null && n && (d = d - c.byteLength + 1), u.value = c), o.enqueue(u.value), d != null && --d <= 0)
          return;
      o.close();
    });
  }
}
function sh(i) {
  return new rh(i);
}
class rh {
  constructor(t) {
    this._numChunks = 0, this._finished = !1, this._bufferedSize = 0;
    const { ["readableStrategy"]: e, ["writableStrategy"]: n, ["queueingStrategy"]: s = "count" } = t, r = xc(t, ["readableStrategy", "writableStrategy", "queueingStrategy"]);
    this._controller = null, this._builder = me(r), this._getSize = s !== "bytes" ? Qr : Jr;
    const { ["highWaterMark"]: o = s === "bytes" ? Math.pow(2, 14) : 1e3 } = Object.assign({}, e), { ["highWaterMark"]: a = s === "bytes" ? Math.pow(2, 14) : 1e3 } = Object.assign({}, n);
    this.readable = new ReadableStream({
      cancel: () => {
        this._builder.clear();
      },
      pull: (c) => {
        this._maybeFlush(this._builder, this._controller = c);
      },
      start: (c) => {
        this._maybeFlush(this._builder, this._controller = c);
      }
    }, {
      highWaterMark: o,
      size: s !== "bytes" ? Qr : Jr
    }), this.writable = new WritableStream({
      abort: () => {
        this._builder.clear();
      },
      write: () => {
        this._maybeFlush(this._builder, this._controller);
      },
      close: () => {
        this._maybeFlush(this._builder.finish(), this._controller);
      }
    }, {
      highWaterMark: a,
      size: (c) => this._writeValueAndReturnChunkSize(c)
    });
  }
  _writeValueAndReturnChunkSize(t) {
    const e = this._bufferedSize;
    return this._bufferedSize = this._getSize(this._builder.append(t)), this._bufferedSize - e;
  }
  _maybeFlush(t, e) {
    e != null && (this._bufferedSize >= e.desiredSize && ++this._numChunks && this._enqueue(e, t.toVector()), t.finished && ((t.length > 0 || this._numChunks === 0) && ++this._numChunks && this._enqueue(e, t.toVector()), !this._finished && (this._finished = !0) && this._enqueue(e, null)));
  }
  _enqueue(t, e) {
    this._bufferedSize = 0, this._controller = null, e == null ? t.close() : t.enqueue(e);
  }
}
const Qr = (i) => {
  var t;
  return (t = i?.length) !== null && t !== void 0 ? t : 0;
}, Jr = (i) => {
  var t;
  return (t = i?.byteLength) !== null && t !== void 0 ? t : 0;
};
function _r(i, t) {
  const e = new je();
  let n = null;
  const s = new ReadableStream({
    cancel() {
      return p(this, void 0, void 0, function* () {
        yield e.close();
      });
    },
    start(a) {
      return p(this, void 0, void 0, function* () {
        yield o(a, n || (n = yield r()));
      });
    },
    pull(a) {
      return p(this, void 0, void 0, function* () {
        n ? yield o(a, n) : a.close();
      });
    }
  });
  return { writable: new WritableStream(e, Object.assign({ highWaterMark: Math.pow(2, 14) }, i)), readable: s };
  function r() {
    return p(this, void 0, void 0, function* () {
      return yield (yield et.from(e)).open(t);
    });
  }
  function o(a, c) {
    return p(this, void 0, void 0, function* () {
      let u = a.desiredSize, d = null;
      for (; !(d = yield c.next()).done; )
        if (a.enqueue(d.value), u != null && --u <= 0)
          return;
      a.close();
    });
  }
}
function mr(i, t) {
  const e = new this(i), n = new le(e), s = new ReadableStream({
    // type: 'bytes',
    cancel() {
      return p(this, void 0, void 0, function* () {
        yield n.cancel();
      });
    },
    pull(o) {
      return p(this, void 0, void 0, function* () {
        yield r(o);
      });
    },
    start(o) {
      return p(this, void 0, void 0, function* () {
        yield r(o);
      });
    }
  }, Object.assign({ highWaterMark: Math.pow(2, 14) }, t));
  return { writable: new WritableStream(e, i), readable: s };
  function r(o) {
    return p(this, void 0, void 0, function* () {
      let a = null, c = o.desiredSize;
      for (; a = yield n.read(c || null); )
        if (o.enqueue(a), c != null && (c -= a.byteLength) <= 0)
          return;
      o.close();
    });
  }
}
function mc(i) {
  const t = et.from(i);
  return se(t) ? t.then((e) => mc(e)) : t.isAsync() ? t.readAll().then((e) => new G(e)) : new G(t.readAll());
}
function bc(i, t = "stream") {
  return (t === "stream" ? Ui : Ci).writeAll(i).toUint8Array(!0);
}
const oh = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ol), Xu), Pu), Gl), gl), Uu), Sl), {
  compareSchemas: cn,
  compareFields: ud,
  compareTypes: tc
});
dt.toDOMStream = eh;
it.throughDOM = sh;
et.throughDOM = _r;
Sn.throughDOM = _r;
Ze.throughDOM = _r;
Mi.throughDOM = mr;
Ci.throughDOM = mr;
Ui.throughDOM = mr;
const Hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AsyncByteQueue: je,
  AsyncByteStream: le,
  AsyncMessageReader: uc,
  AsyncRecordBatchFileReader: fc,
  AsyncRecordBatchStreamReader: Ii,
  Binary: di,
  BinaryBuilder: Cs,
  Bool: qe,
  BoolBuilder: Ma,
  get BufferType() {
    return bt;
  },
  Builder: it,
  ByteStream: bi,
  Data: U,
  DataType: y,
  DateBuilder: Bi,
  DateDay: Bl,
  DateDayBuilder: xs,
  DateMillisecond: El,
  DateMillisecondBuilder: ks,
  get DateUnit() {
    return X;
  },
  Date_: pe,
  Decimal: yi,
  DecimalBuilder: Vs,
  DenseUnion: jl,
  DenseUnionBuilder: Xa,
  Dictionary: Gt,
  DictionaryBuilder: Ua,
  Duration: Yt,
  DurationBuilder: Ie,
  DurationMicrosecond: Vl,
  DurationMicrosecondBuilder: Gs,
  DurationMillisecond: kl,
  DurationMillisecondBuilder: Ys,
  DurationNanosecond: zl,
  DurationNanosecondBuilder: qs,
  DurationSecond: xl,
  DurationSecondBuilder: $s,
  Field: P,
  FixedSizeBinary: pi,
  FixedSizeBinaryBuilder: zs,
  FixedSizeList: He,
  FixedSizeListBuilder: Ca,
  Float: ae,
  Float16: Po,
  Float16Builder: Pa,
  Float32: cs,
  Float32Builder: xa,
  Float64: yn,
  Float64Builder: ka,
  FloatBuilder: Ei,
  Int: st,
  Int16: ns,
  Int16Builder: za,
  Int32: oe,
  Int32Builder: ja,
  Int64: fn,
  Int64Builder: Wa,
  Int8: is,
  Int8Builder: Va,
  IntBuilder: xt,
  Interval: ge,
  IntervalBuilder: Di,
  IntervalDayTime: Cl,
  IntervalDayTimeBuilder: js,
  get IntervalUnit() {
    return ct;
  },
  IntervalYearMonth: Pl,
  IntervalYearMonthBuilder: Ws,
  JSONMessageReader: dc,
  LargeBinary: hi,
  LargeBinaryBuilder: Ps,
  LargeUtf8: fi,
  LargeUtf8Builder: nr,
  List: _e,
  ListBuilder: Ha,
  MapBuilder: Ka,
  MapRow: Ai,
  Map_: Ke,
  Message: tt,
  get MessageHeader() {
    return C;
  },
  MessageReader: dr,
  get MetadataVersion() {
    return Y;
  },
  Null: Lt,
  NullBuilder: Qa,
  get Precision() {
    return q;
  },
  RecordBatch: Z,
  RecordBatchFileReader: Sn,
  RecordBatchFileWriter: Ci,
  RecordBatchJSONWriter: yr,
  RecordBatchReader: et,
  RecordBatchStreamReader: Ze,
  RecordBatchStreamWriter: Ui,
  RecordBatchWriter: Mi,
  Schema: x,
  SparseUnion: Wl,
  SparseUnionBuilder: Za,
  Struct: J,
  StructBuilder: Ja,
  StructRow: pn,
  Table: G,
  Time: Wt,
  TimeBuilder: Se,
  TimeMicrosecond: Nl,
  TimeMicrosecondBuilder: tr,
  TimeMillisecond: Fl,
  TimeMillisecondBuilder: Xs,
  TimeNanosecond: Rl,
  TimeNanosecondBuilder: er,
  TimeSecond: Dl,
  TimeSecondBuilder: Zs,
  get TimeUnit() {
    return f;
  },
  Timestamp: $t,
  TimestampBuilder: we,
  TimestampMicrosecond: Ml,
  TimestampMicrosecondBuilder: Qs,
  TimestampMillisecond: xo,
  TimestampMillisecondBuilder: Ks,
  TimestampNanosecond: Ul,
  TimestampNanosecondBuilder: Js,
  TimestampSecond: Ll,
  TimestampSecondBuilder: Hs,
  get Type() {
    return l;
  },
  Uint16: rs,
  Uint16Builder: Ya,
  Uint32: os,
  Uint32Builder: Ga,
  Uint64: as,
  Uint64Builder: qa,
  Uint8: ss,
  Uint8Builder: $a,
  Union: ce,
  UnionBuilder: vn,
  get UnionMode() {
    return H;
  },
  Utf8: Ge,
  Utf8Builder: ir,
  Vector: g,
  Visitor: D,
  builderThroughAsyncIterable: hd,
  builderThroughIterable: ec,
  makeBuilder: me,
  makeData: _,
  makeTable: pd,
  makeVector: bn,
  tableFromArrays: gd,
  tableFromIPC: mc,
  tableFromJSON: dd,
  tableToIPC: bc,
  util: oh,
  vectorFromArray: ar
}, Symbol.toStringTag, { value: "Module" }));
var ah = Object.create, vc = Object.defineProperty, ch = Object.getOwnPropertyDescriptor, lh = Object.getOwnPropertyNames, uh = Object.getPrototypeOf, dh = Object.prototype.hasOwnProperty, hh = (i, t) => () => (t || i((t = { exports: {} }).exports, t), t.exports), fh = (i, t, e, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let s of lh(t)) !dh.call(i, s) && s !== e && vc(i, s, { get: () => t[s], enumerable: !(n = ch(t, s)) || n.enumerable });
  return i;
}, yh = (i, t, e) => (e = i != null ? ah(uh(i)) : {}, fh(!i || !i.__esModule ? vc(e, "default", { value: i, enumerable: !0 }) : e, i)), ph = hh((i, t) => {
  t.exports = Worker;
}), Ic = ((i) => (i[i.UNDEFINED = 0] = "UNDEFINED", i[i.AUTOMATIC = 1] = "AUTOMATIC", i[i.READ_ONLY = 2] = "READ_ONLY", i[i.READ_WRITE = 3] = "READ_WRITE", i))(Ic || {}), wc = ((i) => (i[i.IDENTIFIER = 0] = "IDENTIFIER", i[i.NUMERIC_CONSTANT = 1] = "NUMERIC_CONSTANT", i[i.STRING_CONSTANT = 2] = "STRING_CONSTANT", i[i.OPERATOR = 3] = "OPERATOR", i[i.KEYWORD = 4] = "KEYWORD", i[i.COMMENT = 5] = "COMMENT", i))(wc || {}), Sc = ((i) => (i[i.NONE = 0] = "NONE", i[i.DEBUG = 1] = "DEBUG", i[i.INFO = 2] = "INFO", i[i.WARNING = 3] = "WARNING", i[i.ERROR = 4] = "ERROR", i))(Sc || {}), Ac = ((i) => (i[i.NONE = 0] = "NONE", i[i.CONNECT = 1] = "CONNECT", i[i.DISCONNECT = 2] = "DISCONNECT", i[i.OPEN = 3] = "OPEN", i[i.QUERY = 4] = "QUERY", i[i.INSTANTIATE = 5] = "INSTANTIATE", i))(Ac || {}), Tc = ((i) => (i[i.NONE = 0] = "NONE", i[i.OK = 1] = "OK", i[i.ERROR = 2] = "ERROR", i[i.START = 3] = "START", i[i.RUN = 4] = "RUN", i[i.CAPTURE = 5] = "CAPTURE", i))(Tc || {}), Oc = ((i) => (i[i.NONE = 0] = "NONE", i[i.WEB_WORKER = 1] = "WEB_WORKER", i[i.NODE_WORKER = 2] = "NODE_WORKER", i[i.BINDINGS = 3] = "BINDINGS", i[i.ASYNC_DUCKDB = 4] = "ASYNC_DUCKDB", i))(Oc || {}), gh = class {
  log(i) {
  }
}, _h = class {
  constructor(i = 2) {
    this.level = i;
  }
  log(i) {
    i.level >= this.level && console.log(i);
  }
};
function mh(i) {
  switch (i) {
    case 0:
      return "NONE";
    case 1:
      return "DEBUG";
    case 2:
      return "INFO";
    case 3:
      return "WARNING";
    case 4:
      return "ERROR";
    default:
      return "?";
  }
}
function bh(i) {
  switch (i) {
    case 0:
      return "NONE";
    case 1:
      return "OK";
    case 2:
      return "ERROR";
    case 3:
      return "START";
    case 4:
      return "RUN";
    case 5:
      return "CAPTURE";
    default:
      return "?";
  }
}
function vh(i) {
  switch (i) {
    case 1:
      return "CONNECT";
    case 2:
      return "DISCONNECT";
    case 5:
      return "INSTANTIATE";
    case 3:
      return "OPEN";
    case 4:
      return "QUERY";
    default:
      return "?";
  }
}
function Ih(i) {
  switch (i) {
    case 0:
      return "NONE";
    case 1:
      return "WEB WORKER";
    case 2:
      return "NODE WORKER";
    case 3:
      return "DUCKDB BINDINGS";
    case 4:
      return "DUCKDB";
    default:
      return "?";
  }
}
var Bc = ((i) => (i[i.SUCCESS = 0] = "SUCCESS", i))(Bc || {}), Ec = class {
  constructor(i, t) {
    this._bindings = i, this._conn = t;
  }
  get bindings() {
    return this._bindings;
  }
  async close() {
    return this._bindings.disconnect(this._conn);
  }
  useUnsafe(i) {
    return i(this._bindings, this._conn);
  }
  async query(i) {
    this._bindings.logger.log({ timestamp: /* @__PURE__ */ new Date(), level: 2, origin: 4, topic: 4, event: 4, value: i });
    let t = await this._bindings.runQuery(this._conn, i), e = et.from(t);
    return console.assert(e.isSync(), "Reader is not sync"), console.assert(e.isFile(), "Reader is not file"), new G(e);
  }
  async send(i) {
    this._bindings.logger.log({ timestamp: /* @__PURE__ */ new Date(), level: 2, origin: 4, topic: 4, event: 4, value: i });
    let t = await this._bindings.startPendingQuery(this._conn, i);
    for (; t == null; ) t = await this._bindings.pollPendingQuery(this._conn);
    let e = new br(this._bindings, this._conn, t), n = await et.from(e);
    return console.assert(n.isAsync()), console.assert(n.isStream()), n;
  }
  async cancelSent() {
    return await this._bindings.cancelPendingQuery(this._conn);
  }
  async getTableNames(i) {
    return await this._bindings.getTableNames(this._conn, i);
  }
  async prepare(i) {
    let t = await this._bindings.createPrepared(this._conn, i);
    return new Dc(this._bindings, this._conn, t);
  }
  async insertArrowTable(i, t) {
    let e = bc(i, "stream");
    await this.insertArrowFromIPCStream(e, t);
  }
  async insertArrowFromIPCStream(i, t) {
    await this._bindings.insertArrowFromIPCStream(this._conn, i, t);
  }
  async insertCSVFromPath(i, t) {
    await this._bindings.insertCSVFromPath(this._conn, i, t);
  }
  async insertJSONFromPath(i, t) {
    await this._bindings.insertJSONFromPath(this._conn, i, t);
  }
}, br = class {
  constructor(i, t, e) {
    this.db = i, this.conn = t, this.header = e, this._first = !0, this._depleted = !1, this._inFlight = null;
  }
  async next() {
    if (this._first) return this._first = !1, { done: !1, value: this.header };
    if (this._depleted) return { done: !0, value: null };
    let i;
    return this._inFlight != null ? (i = await this._inFlight, this._inFlight = null) : i = await this.db.fetchQueryResults(this.conn), this._depleted = i.length == 0, this._depleted || (this._inFlight = this.db.fetchQueryResults(this.conn)), { done: this._depleted, value: i };
  }
  [Symbol.asyncIterator]() {
    return this;
  }
}, Dc = class {
  constructor(i, t, e) {
    this.bindings = i, this.connectionId = t, this.statementId = e;
  }
  async close() {
    await this.bindings.closePrepared(this.connectionId, this.statementId);
  }
  async query(...i) {
    let t = await this.bindings.runPrepared(this.connectionId, this.statementId, i), e = et.from(t);
    return console.assert(e.isSync()), console.assert(e.isFile()), new G(e);
  }
  async send(...i) {
    let t = await this.bindings.sendPrepared(this.connectionId, this.statementId, i), e = new br(this.bindings, this.connectionId, t), n = await et.from(e);
    return console.assert(n.isAsync()), console.assert(n.isStream()), n;
  }
}, Fc = ((i) => (i.CANCEL_PENDING_QUERY = "CANCEL_PENDING_QUERY", i.CLOSE_PREPARED = "CLOSE_PREPARED", i.COLLECT_FILE_STATISTICS = "COLLECT_FILE_STATISTICS", i.CONNECT = "CONNECT", i.COPY_FILE_TO_BUFFER = "COPY_FILE_TO_BUFFER", i.COPY_FILE_TO_PATH = "COPY_FILE_TO_PATH", i.CREATE_PREPARED = "CREATE_PREPARED", i.DISCONNECT = "DISCONNECT", i.DROP_FILE = "DROP_FILE", i.DROP_FILES = "DROP_FILES", i.EXPORT_FILE_STATISTICS = "EXPORT_FILE_STATISTICS", i.FETCH_QUERY_RESULTS = "FETCH_QUERY_RESULTS", i.FLUSH_FILES = "FLUSH_FILES", i.GET_FEATURE_FLAGS = "GET_FEATURE_FLAGS", i.GET_TABLE_NAMES = "GET_TABLE_NAMES", i.GET_VERSION = "GET_VERSION", i.GLOB_FILE_INFOS = "GLOB_FILE_INFOS", i.INSERT_ARROW_FROM_IPC_STREAM = "INSERT_ARROW_FROM_IPC_STREAM", i.INSERT_CSV_FROM_PATH = "IMPORT_CSV_FROM_PATH", i.INSERT_JSON_FROM_PATH = "IMPORT_JSON_FROM_PATH", i.INSTANTIATE = "INSTANTIATE", i.OPEN = "OPEN", i.PING = "PING", i.POLL_PENDING_QUERY = "POLL_PENDING_QUERY", i.REGISTER_FILE_BUFFER = "REGISTER_FILE_BUFFER", i.REGISTER_FILE_HANDLE = "REGISTER_FILE_HANDLE", i.REGISTER_FILE_URL = "REGISTER_FILE_URL", i.RESET = "RESET", i.RUN_PREPARED = "RUN_PREPARED", i.RUN_QUERY = "RUN_QUERY", i.SEND_PREPARED = "SEND_PREPARED", i.START_PENDING_QUERY = "START_PENDING_QUERY", i.TOKENIZE = "TOKENIZE", i))(Fc || {}), Nc = ((i) => (i.CONNECTION_INFO = "CONNECTION_INFO", i.ERROR = "ERROR", i.FEATURE_FLAGS = "FEATURE_FLAGS", i.FILE_BUFFER = "FILE_BUFFER", i.FILE_INFOS = "FILE_INFOS", i.FILE_SIZE = "FILE_SIZE", i.FILE_STATISTICS = "FILE_STATISTICS", i.INSTANTIATE_PROGRESS = "INSTANTIATE_PROGRESS", i.LOG = "LOG", i.OK = "OK", i.PREPARED_STATEMENT_ID = "PREPARED_STATEMENT_ID", i.QUERY_PLAN = "QUERY_PLAN", i.QUERY_RESULT = "QUERY_RESULT", i.QUERY_RESULT_CHUNK = "QUERY_RESULT_CHUNK", i.QUERY_RESULT_HEADER = "QUERY_RESULT_HEADER", i.QUERY_RESULT_HEADER_OR_NULL = "QUERY_RESULT_HEADER_OR_NULL", i.REGISTERED_FILE = "REGISTERED_FILE", i.SCRIPT_TOKENS = "SCRIPT_TOKENS", i.SUCCESS = "SUCCESS", i.TABLE_NAMES = "TABLE_NAMES", i.VERSION_STRING = "VERSION_STRING", i))(Nc || {}), M = class {
  constructor(i, t) {
    this.promiseResolver = () => {
    }, this.promiseRejecter = () => {
    }, this.type = i, this.data = t, this.promise = new Promise((e, n) => {
      this.promiseResolver = e, this.promiseRejecter = n;
    });
  }
};
function Ji(i) {
  switch (i.typeId) {
    case l.Binary:
      return { sqlType: "binary" };
    case l.Bool:
      return { sqlType: "bool" };
    case l.Date:
      return { sqlType: "date" };
    case l.DateDay:
      return { sqlType: "date32[d]" };
    case l.DateMillisecond:
      return { sqlType: "date64[ms]" };
    case l.Decimal: {
      let t = i;
      return { sqlType: "decimal", precision: t.precision, scale: t.scale };
    }
    case l.Float:
      return { sqlType: "float" };
    case l.Float16:
      return { sqlType: "float16" };
    case l.Float32:
      return { sqlType: "float32" };
    case l.Float64:
      return { sqlType: "float64" };
    case l.Int:
      return { sqlType: "int32" };
    case l.Int16:
      return { sqlType: "int16" };
    case l.Int32:
      return { sqlType: "int32" };
    case l.Int64:
      return { sqlType: "int64" };
    case l.Uint16:
      return { sqlType: "uint16" };
    case l.Uint32:
      return { sqlType: "uint32" };
    case l.Uint64:
      return { sqlType: "uint64" };
    case l.Uint8:
      return { sqlType: "uint8" };
    case l.IntervalDayTime:
      return { sqlType: "interval[dt]" };
    case l.IntervalYearMonth:
      return { sqlType: "interval[m]" };
    case l.List:
      return { sqlType: "list", valueType: Ji(i.valueType) };
    case l.FixedSizeBinary:
      return { sqlType: "fixedsizebinary", byteWidth: i.byteWidth };
    case l.Null:
      return { sqlType: "null" };
    case l.Utf8:
      return { sqlType: "utf8" };
    case l.Struct:
      return { sqlType: "struct", fields: i.children.map((t) => Jn(t.name, t.type)) };
    case l.Map: {
      let t = i;
      return { sqlType: "map", keyType: Ji(t.keyType), valueType: Ji(t.valueType) };
    }
    case l.Time:
      return { sqlType: "time[s]" };
    case l.TimeMicrosecond:
      return { sqlType: "time[us]" };
    case l.TimeMillisecond:
      return { sqlType: "time[ms]" };
    case l.TimeNanosecond:
      return { sqlType: "time[ns]" };
    case l.TimeSecond:
      return { sqlType: "time[s]" };
    case l.Timestamp:
      return { sqlType: "timestamp", timezone: i.timezone || void 0 };
    case l.TimestampSecond:
      return { sqlType: "timestamp[s]", timezone: i.timezone || void 0 };
    case l.TimestampMicrosecond:
      return { sqlType: "timestamp[us]", timezone: i.timezone || void 0 };
    case l.TimestampNanosecond:
      return { sqlType: "timestamp[ns]", timezone: i.timezone || void 0 };
    case l.TimestampMillisecond:
      return { sqlType: "timestamp[ms]", timezone: i.timezone || void 0 };
  }
  throw new Error("unsupported arrow type: ".concat(i.toString()));
}
function Jn(i, t) {
  let e = Ji(t);
  return e.name = i, e;
}
var wh = new TextEncoder(), Sh = class {
  constructor(i, t = null) {
    this._onInstantiationProgress = [], this._worker = null, this._workerShutdownPromise = null, this._workerShutdownResolver = () => {
    }, this._nextMessageId = 0, this._pendingRequests = /* @__PURE__ */ new Map(), this._logger = i, this._onMessageHandler = this.onMessage.bind(this), this._onErrorHandler = this.onError.bind(this), this._onCloseHandler = this.onClose.bind(this), t != null && this.attach(t);
  }
  get logger() {
    return this._logger;
  }
  attach(i) {
    this._worker = i, this._worker.addEventListener("message", this._onMessageHandler), this._worker.addEventListener("error", this._onErrorHandler), this._worker.addEventListener("close", this._onCloseHandler), this._workerShutdownPromise = new Promise((t, e) => {
      this._workerShutdownResolver = t;
    });
  }
  detach() {
    this._worker && (this._worker.removeEventListener("message", this._onMessageHandler), this._worker.removeEventListener("error", this._onErrorHandler), this._worker.removeEventListener("close", this._onCloseHandler), this._worker = null, this._workerShutdownResolver(null), this._workerShutdownPromise = null, this._workerShutdownResolver = () => {
    });
  }
  async terminate() {
    this._worker && (this._worker.terminate(), this._worker = null, this._workerShutdownPromise = null, this._workerShutdownResolver = () => {
    });
  }
  async postTask(i, t = []) {
    if (!this._worker) {
      console.error("cannot send a message since the worker is not set!");
      return;
    }
    let e = this._nextMessageId++;
    return this._pendingRequests.set(e, i), this._worker.postMessage({ messageId: e, type: i.type, data: i.data }, t), await i.promise;
  }
  onMessage(i) {
    var t;
    let e = i.data;
    switch (e.type) {
      case "LOG": {
        this._logger.log(e.data);
        return;
      }
      case "INSTANTIATE_PROGRESS": {
        for (let s of this._onInstantiationProgress) s(e.data);
        return;
      }
    }
    let n = this._pendingRequests.get(e.requestId);
    if (!n) {
      console.warn("unassociated response: [".concat(e.requestId, ", ").concat(e.type.toString(), "]"));
      return;
    }
    if (this._pendingRequests.delete(e.requestId), e.type == "ERROR") {
      let s = new Error(e.data.message);
      s.name = e.data.name, (t = Object.getOwnPropertyDescriptor(s, "stack")) != null && t.writable && (s.stack = e.data.stack), n.promiseRejecter(s);
      return;
    }
    switch (n.type) {
      case "CLOSE_PREPARED":
      case "COLLECT_FILE_STATISTICS":
      case "COPY_FILE_TO_PATH":
      case "DISCONNECT":
      case "DROP_FILE":
      case "DROP_FILES":
      case "FLUSH_FILES":
      case "INSERT_ARROW_FROM_IPC_STREAM":
      case "IMPORT_CSV_FROM_PATH":
      case "IMPORT_JSON_FROM_PATH":
      case "OPEN":
      case "PING":
      case "REGISTER_FILE_BUFFER":
      case "REGISTER_FILE_HANDLE":
      case "REGISTER_FILE_URL":
      case "RESET":
        if (e.type == "OK") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "INSTANTIATE":
        if (this._onInstantiationProgress = [], e.type == "OK") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "GLOB_FILE_INFOS":
        if (e.type == "FILE_INFOS") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "GET_VERSION":
        if (e.type == "VERSION_STRING") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "GET_FEATURE_FLAGS":
        if (e.type == "FEATURE_FLAGS") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "GET_TABLE_NAMES":
        if (e.type == "TABLE_NAMES") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "TOKENIZE":
        if (e.type == "SCRIPT_TOKENS") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "COPY_FILE_TO_BUFFER":
        if (e.type == "FILE_BUFFER") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "EXPORT_FILE_STATISTICS":
        if (e.type == "FILE_STATISTICS") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "CONNECT":
        if (e.type == "CONNECTION_INFO") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "RUN_PREPARED":
      case "RUN_QUERY":
        if (e.type == "QUERY_RESULT") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "SEND_PREPARED":
        if (e.type == "QUERY_RESULT_HEADER") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "START_PENDING_QUERY":
        if (e.type == "QUERY_RESULT_HEADER_OR_NULL") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "POLL_PENDING_QUERY":
        if (e.type == "QUERY_RESULT_HEADER_OR_NULL") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "CANCEL_PENDING_QUERY":
        if (this._onInstantiationProgress = [], e.type == "SUCCESS") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "FETCH_QUERY_RESULTS":
        if (e.type == "QUERY_RESULT_CHUNK") {
          n.promiseResolver(e.data);
          return;
        }
        break;
      case "CREATE_PREPARED":
        if (e.type == "PREPARED_STATEMENT_ID") {
          n.promiseResolver(e.data);
          return;
        }
        break;
    }
    n.promiseRejecter(new Error("unexpected response type: ".concat(e.type.toString())));
  }
  onError(i) {
    console.error(i), console.error("error in duckdb worker: ".concat(i.message)), this._pendingRequests.clear();
  }
  onClose() {
    if (this._workerShutdownResolver(null), this._pendingRequests.size != 0) {
      console.warn("worker terminated with ".concat(this._pendingRequests.size, " pending requests"));
      return;
    }
    this._pendingRequests.clear();
  }
  async reset() {
    let i = new M("RESET", null);
    return await this.postTask(i);
  }
  async ping() {
    let i = new M("PING", null);
    await this.postTask(i);
  }
  async dropFile(i) {
    let t = new M("DROP_FILE", i);
    return await this.postTask(t);
  }
  async dropFiles() {
    let i = new M("DROP_FILES", null);
    return await this.postTask(i);
  }
  async flushFiles() {
    let i = new M("FLUSH_FILES", null);
    return await this.postTask(i);
  }
  async instantiate(i, t = null, e = (n) => {
  }) {
    this._onInstantiationProgress.push(e);
    let n = new M("INSTANTIATE", [i, t]);
    return await this.postTask(n);
  }
  async getVersion() {
    let i = new M("GET_VERSION", null);
    return await this.postTask(i);
  }
  async getFeatureFlags() {
    let i = new M("GET_FEATURE_FLAGS", null);
    return await this.postTask(i);
  }
  async open(i) {
    let t = new M("OPEN", i);
    await this.postTask(t);
  }
  async tokenize(i) {
    let t = new M("TOKENIZE", i);
    return await this.postTask(t);
  }
  async connectInternal() {
    let i = new M("CONNECT", null);
    return await this.postTask(i);
  }
  async connect() {
    let i = await this.connectInternal();
    return new Ec(this, i);
  }
  async disconnect(i) {
    let t = new M("DISCONNECT", i);
    await this.postTask(t);
  }
  async runQuery(i, t) {
    let e = new M("RUN_QUERY", [i, t]);
    return await this.postTask(e);
  }
  async startPendingQuery(i, t) {
    let e = new M("START_PENDING_QUERY", [i, t]);
    return await this.postTask(e);
  }
  async pollPendingQuery(i) {
    let t = new M("POLL_PENDING_QUERY", i);
    return await this.postTask(t);
  }
  async cancelPendingQuery(i) {
    let t = new M("CANCEL_PENDING_QUERY", i);
    return await this.postTask(t);
  }
  async fetchQueryResults(i) {
    let t = new M("FETCH_QUERY_RESULTS", i);
    return await this.postTask(t);
  }
  async getTableNames(i, t) {
    let e = new M("GET_TABLE_NAMES", [i, t]);
    return await this.postTask(e);
  }
  async createPrepared(i, t) {
    let e = new M("CREATE_PREPARED", [i, t]);
    return await this.postTask(e);
  }
  async closePrepared(i, t) {
    let e = new M("CLOSE_PREPARED", [i, t]);
    await this.postTask(e);
  }
  async runPrepared(i, t, e) {
    let n = new M("RUN_PREPARED", [i, t, e]);
    return await this.postTask(n);
  }
  async sendPrepared(i, t, e) {
    let n = new M("SEND_PREPARED", [i, t, e]);
    return await this.postTask(n);
  }
  async globFiles(i) {
    let t = new M("GLOB_FILE_INFOS", i);
    return await this.postTask(t);
  }
  async registerFileText(i, t) {
    let e = wh.encode(t);
    await this.registerFileBuffer(i, e);
  }
  async registerFileURL(i, t, e, n) {
    t === void 0 && (t = i);
    let s = new M("REGISTER_FILE_URL", [i, t, e, n]);
    await this.postTask(s);
  }
  async registerEmptyFileBuffer(i) {
  }
  async registerFileBuffer(i, t) {
    let e = new M("REGISTER_FILE_BUFFER", [i, t]);
    await this.postTask(e, [t.buffer]);
  }
  async registerFileHandle(i, t, e, n) {
    let s = new M("REGISTER_FILE_HANDLE", [i, t, e, n]);
    await this.postTask(s, []);
  }
  async collectFileStatistics(i, t) {
    let e = new M("COLLECT_FILE_STATISTICS", [i, t]);
    await this.postTask(e, []);
  }
  async exportFileStatistics(i) {
    let t = new M("EXPORT_FILE_STATISTICS", i);
    return await this.postTask(t, []);
  }
  async copyFileToBuffer(i) {
    let t = new M("COPY_FILE_TO_BUFFER", i);
    return await this.postTask(t);
  }
  async copyFileToPath(i, t) {
    let e = new M("COPY_FILE_TO_PATH", [i, t]);
    await this.postTask(e);
  }
  async insertArrowFromIPCStream(i, t, e) {
    if (t.length == 0) return;
    let n = new M("INSERT_ARROW_FROM_IPC_STREAM", [i, t, e]);
    await this.postTask(n, [t.buffer]);
  }
  async insertCSVFromPath(i, t, e) {
    if (e.columns !== void 0) {
      let s = [];
      for (let r in e.columns) {
        let o = e.columns[r];
        s.push(Jn(r, o));
      }
      e.columnsFlat = s, delete e.columns;
    }
    let n = new M("IMPORT_CSV_FROM_PATH", [i, t, e]);
    await this.postTask(n);
  }
  async insertJSONFromPath(i, t, e) {
    if (e.columns !== void 0) {
      let s = [];
      for (let r in e.columns) {
        let o = e.columns[r];
        s.push(Jn(r, o));
      }
      e.columnsFlat = s, delete e.columns;
    }
    let n = new M("IMPORT_JSON_FROM_PATH", [i, t, e]);
    await this.postTask(n);
  }
}, Ah = class {
  constructor() {
    this._bindings = null, this._nextMessageId = 0;
  }
  log(i) {
    this.postMessage({ messageId: this._nextMessageId++, requestId: 0, type: "LOG", data: i }, []);
  }
  sendOK(i) {
    this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "OK", data: null }, []);
  }
  failWith(i, t) {
    let e = { name: t.name, message: t.message, stack: t.stack || void 0 };
    this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "ERROR", data: e }, []);
  }
  async onMessage(i) {
    switch (i.type) {
      case "PING":
        this.sendOK(i);
        return;
      case "INSTANTIATE":
        this._bindings != null && this.failWith(i, new Error("duckdb already initialized"));
        try {
          this._bindings = await this.instantiate(i.data[0], i.data[1], (t) => {
            this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "INSTANTIATE_PROGRESS", data: t }, []);
          }), this.sendOK(i);
        } catch (t) {
          console.log(t), this._bindings = null, this.failWith(i, t);
        }
        return;
    }
    if (!this._bindings) return this.failWith(i, new Error("duckdb is not initialized"));
    try {
      switch (i.type) {
        case "GET_VERSION":
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "VERSION_STRING", data: this._bindings.getVersion() }, []);
          break;
        case "GET_FEATURE_FLAGS":
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "FEATURE_FLAGS", data: this._bindings.getFeatureFlags() }, []);
          break;
        case "RESET":
          this._bindings.reset(), this.sendOK(i);
          break;
        case "OPEN":
          this._bindings.open(i.data), this.sendOK(i);
          break;
        case "DROP_FILE":
          this._bindings.dropFile(i.data), this.sendOK(i);
          break;
        case "DROP_FILES":
          this._bindings.dropFiles(), this.sendOK(i);
          break;
        case "FLUSH_FILES":
          this._bindings.flushFiles(), this.sendOK(i);
          break;
        case "CONNECT": {
          let t = this._bindings.connect();
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "CONNECTION_INFO", data: t.useUnsafe((e, n) => n) }, []);
          break;
        }
        case "DISCONNECT":
          this._bindings.disconnect(i.data), this.sendOK(i);
          break;
        case "CREATE_PREPARED": {
          let t = this._bindings.createPrepared(i.data[0], i.data[1]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "PREPARED_STATEMENT_ID", data: t }, []);
          break;
        }
        case "CLOSE_PREPARED": {
          this._bindings.closePrepared(i.data[0], i.data[1]), this.sendOK(i);
          break;
        }
        case "RUN_PREPARED": {
          let t = this._bindings.runPrepared(i.data[0], i.data[1], i.data[2]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "QUERY_RESULT", data: t }, [t.buffer]);
          break;
        }
        case "RUN_QUERY": {
          let t = this._bindings.runQuery(i.data[0], i.data[1]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "QUERY_RESULT", data: t }, [t.buffer]);
          break;
        }
        case "SEND_PREPARED": {
          let t = this._bindings.sendPrepared(i.data[0], i.data[1], i.data[2]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "QUERY_RESULT_HEADER", data: t }, [t.buffer]);
          break;
        }
        case "START_PENDING_QUERY": {
          let t = this._bindings.startPendingQuery(i.data[0], i.data[1]), e = [];
          t && e.push(t.buffer), this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "QUERY_RESULT_HEADER_OR_NULL", data: t }, e);
          break;
        }
        case "POLL_PENDING_QUERY": {
          let t = this._bindings.pollPendingQuery(i.data), e = [];
          t && e.push(t.buffer), this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "QUERY_RESULT_HEADER_OR_NULL", data: t }, e);
          break;
        }
        case "CANCEL_PENDING_QUERY": {
          let t = this._bindings.cancelPendingQuery(i.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "SUCCESS", data: t }, []);
          break;
        }
        case "FETCH_QUERY_RESULTS": {
          let t = this._bindings.fetchQueryResults(i.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "QUERY_RESULT_CHUNK", data: t }, [t.buffer]);
          break;
        }
        case "GET_TABLE_NAMES": {
          let t = this._bindings.getTableNames(i.data[0], i.data[1]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "TABLE_NAMES", data: t }, []);
          break;
        }
        case "GLOB_FILE_INFOS": {
          let t = this._bindings.globFiles(i.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "FILE_INFOS", data: t }, []);
          break;
        }
        case "REGISTER_FILE_URL":
          this._bindings.registerFileURL(i.data[0], i.data[1], i.data[2], i.data[3]), this.sendOK(i);
          break;
        case "REGISTER_FILE_BUFFER":
          this._bindings.registerFileBuffer(i.data[0], i.data[1]), this.sendOK(i);
          break;
        case "REGISTER_FILE_HANDLE":
          this._bindings.registerFileHandle(i.data[0], i.data[1], i.data[2], i.data[3]), this.sendOK(i);
          break;
        case "COPY_FILE_TO_PATH":
          this._bindings.copyFileToPath(i.data[0], i.data[1]), this.sendOK(i);
          break;
        case "COPY_FILE_TO_BUFFER": {
          let t = this._bindings.copyFileToBuffer(i.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "FILE_BUFFER", data: t }, []);
          break;
        }
        case "COLLECT_FILE_STATISTICS":
          this._bindings.collectFileStatistics(i.data[0], i.data[1]), this.sendOK(i);
          break;
        case "EXPORT_FILE_STATISTICS": {
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "FILE_STATISTICS", data: this._bindings.exportFileStatistics(i.data) }, []);
          break;
        }
        case "INSERT_ARROW_FROM_IPC_STREAM": {
          this._bindings.insertArrowFromIPCStream(i.data[0], i.data[1], i.data[2]), this.sendOK(i);
          break;
        }
        case "IMPORT_CSV_FROM_PATH": {
          this._bindings.insertCSVFromPath(i.data[0], i.data[1], i.data[2]), this.sendOK(i);
          break;
        }
        case "IMPORT_JSON_FROM_PATH": {
          this._bindings.insertJSONFromPath(i.data[0], i.data[1], i.data[2]), this.sendOK(i);
          break;
        }
        case "TOKENIZE": {
          let t = this._bindings.tokenize(i.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "SCRIPT_TOKENS", data: t }, []);
          break;
        }
      }
    } catch (t) {
      return console.log(t), this.failWith(i, t);
    }
  }
}, Th = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])), Oh = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11])), Bh = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), Eh = () => (async (i) => {
  try {
    return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(i);
  } catch {
    return !1;
  }
})(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11])), vr = { name: "@duckdb/duckdb-wasm", version: "1.29.0" }, Rc = vr.name, Lc = vr.version, Ir = vr.version.split("."), Dh = Ir[0], Fh = Ir[1], Nh = Ir[2], wr = () => typeof navigator > "u", Mc = () => wr() ? "node" : navigator.userAgent, Rh = () => Mc().includes("Firefox"), Lh = () => /^((?!chrome|android).)*safari/i.test(Mc());
function Mh() {
  let i = "https://cdn.jsdelivr.net/npm/".concat(Rc, "@").concat(Lc, "/dist/");
  return { mvp: { mainModule: "".concat(i, "duckdb-mvp.wasm"), mainWorker: "".concat(i, "duckdb-browser-mvp.worker.js") }, eh: { mainModule: "".concat(i, "duckdb-eh.wasm"), mainWorker: "".concat(i, "duckdb-browser-eh.worker.js") } };
}
var Mn = null, Un = null, Cn = null, Pn = null, xn = null;
async function Uc() {
  return Mn == null && (Mn = typeof BigInt64Array < "u"), Un == null && (Un = await Oh()), Cn == null && (Cn = await Eh()), Pn == null && (Pn = await Bh()), xn == null && (xn = await Th()), { bigInt64Array: Mn, crossOriginIsolated: wr() || globalThis.crossOriginIsolated || !1, wasmExceptions: Un, wasmSIMD: Pn, wasmThreads: Cn, wasmBulkMemory: xn };
}
async function Uh(i) {
  let t = await Uc();
  if (t.wasmExceptions) {
    if (t.wasmSIMD && t.wasmThreads && t.crossOriginIsolated && i.coi) return { mainModule: i.coi.mainModule, mainWorker: i.coi.mainWorker, pthreadWorker: i.coi.pthreadWorker };
    if (i.eh) return { mainModule: i.eh.mainModule, mainWorker: i.eh.mainWorker, pthreadWorker: null };
  }
  return { mainModule: i.mvp.mainModule, mainWorker: i.mvp.mainWorker, pthreadWorker: null };
}
var Ch = yh(ph());
async function Ph(i) {
  let t = new Request(i), e = await fetch(t), n = URL.createObjectURL(await e.blob());
  return new Ch.default(n);
}
function xh() {
  let i = new TextDecoder();
  return (t) => (typeof SharedArrayBuffer < "u" && t.buffer instanceof SharedArrayBuffer && (t = new Uint8Array(t)), i.decode(t));
}
xh();
var Cc = ((i) => (i[i.BUFFER = 0] = "BUFFER", i[i.NODE_FS = 1] = "NODE_FS", i[i.BROWSER_FILEREADER = 2] = "BROWSER_FILEREADER", i[i.BROWSER_FSACCESS = 3] = "BROWSER_FSACCESS", i[i.HTTP = 4] = "HTTP", i[i.S3 = 5] = "S3", i))(Cc || {});
const kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AsyncDuckDB: Sh,
  AsyncDuckDBConnection: Ec,
  AsyncDuckDBDispatcher: Ah,
  AsyncPreparedStatement: Dc,
  AsyncResultStreamIterator: br,
  ConsoleLogger: _h,
  DuckDBAccessMode: Ic,
  DuckDBDataProtocol: Cc,
  LogEvent: Tc,
  LogLevel: Sc,
  LogOrigin: Oc,
  LogTopic: Ac,
  PACKAGE_NAME: Rc,
  PACKAGE_VERSION: Lc,
  PACKAGE_VERSION_MAJOR: Dh,
  PACKAGE_VERSION_MINOR: Fh,
  PACKAGE_VERSION_PATCH: Nh,
  StatusCode: Bc,
  TokenType: wc,
  VoidLogger: gh,
  WorkerRequestType: Fc,
  WorkerResponseType: Nc,
  WorkerTask: M,
  createWorker: Ph,
  getJsDelivrBundles: Mh,
  getLogEventLabel: bh,
  getLogLevelLabel: mh,
  getLogOriginLabel: Ih,
  getLogTopicLabel: vh,
  getPlatformFeatures: Uc,
  isFirefox: Rh,
  isNode: wr,
  isSafari: Lh,
  selectBundle: Uh
}, Symbol.toStringTag, { value: "Module" })), {
  AsyncDuckDB: Kh,
  AsyncDuckDBConnection: Qh,
  AsyncDuckDBPreparedStatement: Jh,
  AsyncDuckDBTable: Zh,
  ConsoleLogger: Xh,
  FilesystemTable: tf,
  duckdbBundle: ef,
  duckdbBundles: nf,
  selectBundle: sf
} = kh, dn = {
  duckDbPromise: void 0,
  httpFsInitialized: !1
};
async function Vh(i) {
  let t = dn.duckDbPromise;
  return t || (t = (async () => {
    if (!i)
      throw new Error("DuckDB configuration is required.");
    const n = await import(`${i.bundleBasePath}/${i.moduleLoader}`), s = `${i.bundleBasePath}/${i.mainWorker}`, r = new Worker(s, { type: "module" }), o = new n.ConsoleLogger(), a = new n.AsyncDuckDB(o, r), c = `${i.bundleBasePath}/${i.mainModule}`, u = i.pthreadWorker ? `${i.bundleBasePath}/${i.pthreadWorker}` : null;
    return await a.instantiate(c, u), { loader: n, db: a, worker: r };
  })(), dn.duckDbPromise = t), t;
}
async function zh(i) {
  if (!dn.httpFsInitialized) {
    try {
      await i.query("INSTALL 'httpfs';");
    } catch (t) {
      const e = t;
      if (!(typeof e?.message == "string" ? e.message : String(t ?? "")).includes("already installed"))
        throw t;
    }
    await i.query("LOAD 'httpfs';"), dn.httpFsInitialized = !0;
  }
}
function jh(i) {
  return i == null ? "" : typeof i == "object" ? JSON.stringify(i) : String(i);
}
function Wh(i) {
  if (!i || i.startsWith("http://") || i.startsWith("https://"))
    return i;
  const t = typeof window == "object" && window.location ? window.location.origin : globalThis.location?.origin ?? "";
  return new URL(i, t).toString();
}
async function rf(i, t, e) {
  if (!i)
    throw new Error("DuckDB configuration is required.");
  if (!t)
    throw new Error("A parquet URL must be provided.");
  const { db: n } = await Vh(i), s = await n.connect();
  try {
    await zh(s);
    const r = Wh(t), o = JSON.stringify(r);
    try {
      await s.query(`CREATE OR REPLACE TEMP VIEW parquet_source AS SELECT * FROM read_parquet(${o});`);
      const a = await s.query(e), u = (Array.isArray(a?.schema?.fields) ? a.schema.fields : []).map((L) => L?.name ?? "").filter((L) => !!L), d = a.toArray().map((L) => u.map((F) => jh(L[F])));
      typeof a.close == "function" ? a.close() : typeof a.release == "function" && a.release();
      const h = d.map((L) => ({ values: L }));
      return {
        columns: u,
        rows: h
      };
    } finally {
      await s.query("DROP VIEW IF EXISTS parquet_source;");
    }
  } finally {
    await s.close();
  }
}
export {
  Kh as AsyncDuckDB,
  Qh as AsyncDuckDBConnection,
  Ah as AsyncDuckDBDispatcher,
  Jh as AsyncDuckDBPreparedStatement,
  Zh as AsyncDuckDBTable,
  Dc as AsyncPreparedStatement,
  br as AsyncResultStreamIterator,
  Xh as ConsoleLogger,
  Ic as DuckDBAccessMode,
  Cc as DuckDBDataProtocol,
  tf as FilesystemTable,
  Tc as LogEvent,
  Sc as LogLevel,
  Oc as LogOrigin,
  Ac as LogTopic,
  Rc as PACKAGE_NAME,
  Lc as PACKAGE_VERSION,
  Dh as PACKAGE_VERSION_MAJOR,
  Fh as PACKAGE_VERSION_MINOR,
  Nh as PACKAGE_VERSION_PATCH,
  Bc as StatusCode,
  wc as TokenType,
  gh as VoidLogger,
  Fc as WorkerRequestType,
  Nc as WorkerResponseType,
  M as WorkerTask,
  Hh as arrow,
  Ph as createWorker,
  ef as duckdbBundle,
  nf as duckdbBundles,
  rf as executeQuery,
  Mh as getJsDelivrBundles,
  bh as getLogEventLabel,
  mh as getLogLevelLabel,
  Ih as getLogOriginLabel,
  vh as getLogTopicLabel,
  Uc as getPlatformFeatures,
  Rh as isFirefox,
  wr as isNode,
  Lh as isSafari,
  Vh as loadDuckDb,
  sf as selectBundle
};
