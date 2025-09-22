function Wc(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Sr = { exports: {} }, Ir = { exports: {} }, kt = {}, mt = {}, $n;
function wt() {
  if ($n) return mt;
  $n = 1, mt.__esModule = !0, mt.extend = n, mt.indexOf = l, mt.escapeExpression = f, mt.isEmpty = d, mt.createFrame = y, mt.blockParams = h, mt.appendContextPath = c;
  var r = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, t = /[&<>"'`=]/g, e = /[&<>"'`=]/;
  function i(a) {
    return r[a];
  }
  function n(a) {
    for (var p = 1; p < arguments.length; p++)
      for (var g in arguments[p])
        Object.prototype.hasOwnProperty.call(arguments[p], g) && (a[g] = arguments[p][g]);
    return a;
  }
  var s = Object.prototype.toString;
  mt.toString = s;
  var o = function(p) {
    return typeof p == "function";
  };
  o(/x/) && (mt.isFunction = o = function(a) {
    return typeof a == "function" && s.call(a) === "[object Function]";
  }), mt.isFunction = o;
  var u = Array.isArray || function(a) {
    return a && typeof a == "object" ? s.call(a) === "[object Array]" : !1;
  };
  mt.isArray = u;
  function l(a, p) {
    for (var g = 0, _ = a.length; g < _; g++)
      if (a[g] === p)
        return g;
    return -1;
  }
  function f(a) {
    if (typeof a != "string") {
      if (a && a.toHTML)
        return a.toHTML();
      if (a == null)
        return "";
      if (!a)
        return a + "";
      a = "" + a;
    }
    return e.test(a) ? a.replace(t, i) : a;
  }
  function d(a) {
    return !a && a !== 0 ? !0 : !!(u(a) && a.length === 0);
  }
  function y(a) {
    var p = n({}, a);
    return p._parent = a, p;
  }
  function h(a, p) {
    return a.path = p, a;
  }
  function c(a, p) {
    return (a ? a + "." : "") + p;
  }
  return mt;
}
var wr = { exports: {} }, ts;
function Ut() {
  return ts || (ts = 1, (function(r, t) {
    t.__esModule = !0;
    var e = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function i(n, s) {
      var o = s && s.loc, u = void 0, l = void 0, f = void 0, d = void 0;
      o && (u = o.start.line, l = o.end.line, f = o.start.column, d = o.end.column, n += " - " + u + ":" + f);
      for (var y = Error.prototype.constructor.call(this, n), h = 0; h < e.length; h++)
        this[e[h]] = y[e[h]];
      Error.captureStackTrace && Error.captureStackTrace(this, i);
      try {
        o && (this.lineNumber = u, this.endLineNumber = l, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: f,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: d,
          enumerable: !0
        })) : (this.column = f, this.endColumn = d));
      } catch {
      }
    }
    i.prototype = new Error(), t.default = i, r.exports = t.default;
  })(wr, wr.exports)), wr.exports;
}
var Je = {}, Er = { exports: {} }, es;
function Gc() {
  return es || (es = 1, (function(r, t) {
    t.__esModule = !0;
    var e = wt();
    t.default = function(i) {
      i.registerHelper("blockHelperMissing", function(n, s) {
        var o = s.inverse, u = s.fn;
        if (n === !0)
          return u(this);
        if (n === !1 || n == null)
          return o(this);
        if (e.isArray(n))
          return n.length > 0 ? (s.ids && (s.ids = [s.name]), i.helpers.each(n, s)) : o(this);
        if (s.data && s.ids) {
          var l = e.createFrame(s.data);
          l.contextPath = e.appendContextPath(s.data.contextPath, s.name), s = { data: l };
        }
        return u(n, s);
      });
    }, r.exports = t.default;
  })(Er, Er.exports)), Er.exports;
}
var Ar = { exports: {} }, rs;
function jc() {
  return rs || (rs = 1, (function(r, t) {
    t.__esModule = !0;
    function e(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = wt(), n = Ut(), s = e(n);
    t.default = function(o) {
      o.registerHelper("each", function(u, l) {
        if (!l)
          throw new s.default("Must pass iterator to #each");
        var f = l.fn, d = l.inverse, y = 0, h = "", c = void 0, a = void 0;
        l.data && l.ids && (a = i.appendContextPath(l.data.contextPath, l.ids[0]) + "."), i.isFunction(u) && (u = u.call(this)), l.data && (c = i.createFrame(l.data));
        function p(m, S, I) {
          c && (c.key = m, c.index = S, c.first = S === 0, c.last = !!I, a && (c.contextPath = a + m)), h = h + f(u[m], {
            data: c,
            blockParams: i.blockParams([u[m], m], [a + m, null])
          });
        }
        if (u && typeof u == "object")
          if (i.isArray(u))
            for (var g = u.length; y < g; y++)
              y in u && p(y, y, y === u.length - 1);
          else if (typeof Symbol == "function" && u[Symbol.iterator]) {
            for (var _ = [], b = u[Symbol.iterator](), w = b.next(); !w.done; w = b.next())
              _.push(w.value);
            u = _;
            for (var g = u.length; y < g; y++)
              p(y, y, y === u.length - 1);
          } else
            (function() {
              var m = void 0;
              Object.keys(u).forEach(function(S) {
                m !== void 0 && p(m, y - 1), m = S, y++;
              }), m !== void 0 && p(m, y - 1, !0);
            })();
        return y === 0 && (h = d(this)), h;
      });
    }, r.exports = t.default;
  })(Ar, Ar.exports)), Ar.exports;
}
var Or = { exports: {} }, is;
function Yc() {
  return is || (is = 1, (function(r, t) {
    t.__esModule = !0;
    function e(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var i = Ut(), n = e(i);
    t.default = function(s) {
      s.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new n.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, r.exports = t.default;
  })(Or, Or.exports)), Or.exports;
}
var Rr = { exports: {} }, ns;
function Kc() {
  return ns || (ns = 1, (function(r, t) {
    t.__esModule = !0;
    function e(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = wt(), n = Ut(), s = e(n);
    t.default = function(o) {
      o.registerHelper("if", function(u, l) {
        if (arguments.length != 2)
          throw new s.default("#if requires exactly one argument");
        return i.isFunction(u) && (u = u.call(this)), !l.hash.includeZero && !u || i.isEmpty(u) ? l.inverse(this) : l.fn(this);
      }), o.registerHelper("unless", function(u, l) {
        if (arguments.length != 2)
          throw new s.default("#unless requires exactly one argument");
        return o.helpers.if.call(this, u, {
          fn: l.inverse,
          inverse: l.fn,
          hash: l.hash
        });
      });
    }, r.exports = t.default;
  })(Rr, Rr.exports)), Rr.exports;
}
var Lr = { exports: {} }, ss;
function Qc() {
  return ss || (ss = 1, (function(r, t) {
    t.__esModule = !0, t.default = function(e) {
      e.registerHelper("log", function() {
        for (var i = [void 0], n = arguments[arguments.length - 1], s = 0; s < arguments.length - 1; s++)
          i.push(arguments[s]);
        var o = 1;
        n.hash.level != null ? o = n.hash.level : n.data && n.data.level != null && (o = n.data.level), i[0] = o, e.log.apply(e, i);
      });
    }, r.exports = t.default;
  })(Lr, Lr.exports)), Lr.exports;
}
var Br = { exports: {} }, os;
function Jc() {
  return os || (os = 1, (function(r, t) {
    t.__esModule = !0, t.default = function(e) {
      e.registerHelper("lookup", function(i, n, s) {
        return i && s.lookupProperty(i, n);
      });
    }, r.exports = t.default;
  })(Br, Br.exports)), Br.exports;
}
var Nr = { exports: {} }, as;
function Zc() {
  return as || (as = 1, (function(r, t) {
    t.__esModule = !0;
    function e(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = wt(), n = Ut(), s = e(n);
    t.default = function(o) {
      o.registerHelper("with", function(u, l) {
        if (arguments.length != 2)
          throw new s.default("#with requires exactly one argument");
        i.isFunction(u) && (u = u.call(this));
        var f = l.fn;
        if (i.isEmpty(u))
          return l.inverse(this);
        var d = l.data;
        return l.data && l.ids && (d = i.createFrame(l.data), d.contextPath = i.appendContextPath(l.data.contextPath, l.ids[0])), f(u, {
          data: d,
          blockParams: i.blockParams([u], [d && d.contextPath])
        });
      });
    }, r.exports = t.default;
  })(Nr, Nr.exports)), Nr.exports;
}
var cs;
function go() {
  if (cs) return Je;
  cs = 1, Je.__esModule = !0, Je.registerDefaultHelpers = p, Je.moveHelperToHooks = g;
  function r(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var t = Gc(), e = r(t), i = jc(), n = r(i), s = Yc(), o = r(s), u = Kc(), l = r(u), f = Qc(), d = r(f), y = Jc(), h = r(y), c = Zc(), a = r(c);
  function p(_) {
    e.default(_), n.default(_), o.default(_), l.default(_), d.default(_), h.default(_), a.default(_);
  }
  function g(_, b, w) {
    _.helpers[b] && (_.hooks[b] = _.helpers[b], w || delete _.helpers[b]);
  }
  return Je;
}
var Dr = {}, Tr = { exports: {} }, us;
function Xc() {
  return us || (us = 1, (function(r, t) {
    t.__esModule = !0;
    var e = wt();
    t.default = function(i) {
      i.registerDecorator("inline", function(n, s, o, u) {
        var l = n;
        return s.partials || (s.partials = {}, l = function(f, d) {
          var y = o.partials;
          o.partials = e.extend({}, y, s.partials);
          var h = n(f, d);
          return o.partials = y, h;
        }), s.partials[u.args[0]] = u.fn, l;
      });
    }, r.exports = t.default;
  })(Tr, Tr.exports)), Tr.exports;
}
var ls;
function $c() {
  if (ls) return Dr;
  ls = 1, Dr.__esModule = !0, Dr.registerDefaultDecorators = i;
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var t = Xc(), e = r(t);
  function i(n) {
    e.default(n);
  }
  return Dr;
}
var Fr = { exports: {} }, hs;
function mo() {
  return hs || (hs = 1, (function(r, t) {
    t.__esModule = !0;
    var e = wt(), i = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(s) {
        if (typeof s == "string") {
          var o = e.indexOf(i.methodMap, s.toLowerCase());
          o >= 0 ? s = o : s = parseInt(s, 10);
        }
        return s;
      },
      // Can be overridden in the host environment
      log: function(s) {
        if (s = i.lookupLevel(s), typeof console < "u" && i.lookupLevel(i.level) <= s) {
          var o = i.methodMap[s];
          console[o] || (o = "log");
          for (var u = arguments.length, l = Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
            l[f - 1] = arguments[f];
          console[o].apply(console, l);
        }
      }
    };
    t.default = i, r.exports = t.default;
  })(Fr, Fr.exports)), Fr.exports;
}
var we = {}, Mr = {}, ds;
function tu() {
  if (ds) return Mr;
  ds = 1, Mr.__esModule = !0, Mr.createNewLookupObject = t;
  var r = wt();
  function t() {
    for (var e = arguments.length, i = Array(e), n = 0; n < e; n++)
      i[n] = arguments[n];
    return r.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(i));
  }
  return Mr;
}
var fs;
function _o() {
  if (fs) return we;
  fs = 1, we.__esModule = !0, we.createProtoAccessControl = s, we.resultIsAllowed = o, we.resetLoggedProperties = f;
  function r(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var t = tu(), e = mo(), i = r(e), n = /* @__PURE__ */ Object.create(null);
  function s(d) {
    var y = /* @__PURE__ */ Object.create(null);
    y.constructor = !1, y.__defineGetter__ = !1, y.__defineSetter__ = !1, y.__lookupGetter__ = !1;
    var h = /* @__PURE__ */ Object.create(null);
    return h.__proto__ = !1, {
      properties: {
        whitelist: t.createNewLookupObject(h, d.allowedProtoProperties),
        defaultValue: d.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: t.createNewLookupObject(y, d.allowedProtoMethods),
        defaultValue: d.allowProtoMethodsByDefault
      }
    };
  }
  function o(d, y, h) {
    return u(typeof d == "function" ? y.methods : y.properties, h);
  }
  function u(d, y) {
    return d.whitelist[y] !== void 0 ? d.whitelist[y] === !0 : d.defaultValue !== void 0 ? d.defaultValue : (l(y), !1);
  }
  function l(d) {
    n[d] !== !0 && (n[d] = !0, i.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + d + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function f() {
    Object.keys(n).forEach(function(d) {
      delete n[d];
    });
  }
  return we;
}
var ps;
function In() {
  if (ps) return kt;
  ps = 1, kt.__esModule = !0, kt.HandlebarsEnvironment = a;
  function r(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var t = wt(), e = Ut(), i = r(e), n = go(), s = $c(), o = mo(), u = r(o), l = _o(), f = "4.7.8";
  kt.VERSION = f;
  var d = 8;
  kt.COMPILER_REVISION = d;
  var y = 7;
  kt.LAST_COMPATIBLE_COMPILER_REVISION = y;
  var h = {
    1: "<= 1.0.rc.2",
    // 1.0.rc.2 is actually rev2 but doesn't report it
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
  };
  kt.REVISION_CHANGES = h;
  var c = "[object Object]";
  function a(g, _, b) {
    this.helpers = g || {}, this.partials = _ || {}, this.decorators = b || {}, n.registerDefaultHelpers(this), s.registerDefaultDecorators(this);
  }
  a.prototype = {
    constructor: a,
    logger: u.default,
    log: u.default.log,
    registerHelper: function(_, b) {
      if (t.toString.call(_) === c) {
        if (b)
          throw new i.default("Arg not supported with multiple helpers");
        t.extend(this.helpers, _);
      } else
        this.helpers[_] = b;
    },
    unregisterHelper: function(_) {
      delete this.helpers[_];
    },
    registerPartial: function(_, b) {
      if (t.toString.call(_) === c)
        t.extend(this.partials, _);
      else {
        if (typeof b > "u")
          throw new i.default('Attempting to register a partial called "' + _ + '" as undefined');
        this.partials[_] = b;
      }
    },
    unregisterPartial: function(_) {
      delete this.partials[_];
    },
    registerDecorator: function(_, b) {
      if (t.toString.call(_) === c) {
        if (b)
          throw new i.default("Arg not supported with multiple decorators");
        t.extend(this.decorators, _);
      } else
        this.decorators[_] = b;
    },
    unregisterDecorator: function(_) {
      delete this.decorators[_];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      l.resetLoggedProperties();
    }
  };
  var p = u.default.log;
  return kt.log = p, kt.createFrame = t.createFrame, kt.logger = u.default, kt;
}
var Cr = { exports: {} }, ys;
function eu() {
  return ys || (ys = 1, (function(r, t) {
    t.__esModule = !0;
    function e(i) {
      this.string = i;
    }
    e.prototype.toString = e.prototype.toHTML = function() {
      return "" + this.string;
    }, t.default = e, r.exports = t.default;
  })(Cr, Cr.exports)), Cr.exports;
}
var Xt = {}, kr = {}, gs;
function ru() {
  if (gs) return kr;
  gs = 1, kr.__esModule = !0, kr.wrapHelper = r;
  function r(t, e) {
    if (typeof t != "function")
      return t;
    var i = function() {
      var s = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = e(s), t.apply(this, arguments);
    };
    return i;
  }
  return kr;
}
var ms;
function iu() {
  if (ms) return Xt;
  ms = 1, Xt.__esModule = !0, Xt.checkRevision = d, Xt.template = y, Xt.wrapProgram = h, Xt.resolvePartial = c, Xt.invokePartial = a, Xt.noop = p;
  function r(m) {
    return m && m.__esModule ? m : { default: m };
  }
  function t(m) {
    if (m && m.__esModule)
      return m;
    var S = {};
    if (m != null)
      for (var I in m)
        Object.prototype.hasOwnProperty.call(m, I) && (S[I] = m[I]);
    return S.default = m, S;
  }
  var e = wt(), i = t(e), n = Ut(), s = r(n), o = In(), u = go(), l = ru(), f = _o();
  function d(m) {
    var S = m && m[0] || 1, I = o.COMPILER_REVISION;
    if (!(S >= o.LAST_COMPATIBLE_COMPILER_REVISION && S <= o.COMPILER_REVISION))
      if (S < o.LAST_COMPATIBLE_COMPILER_REVISION) {
        var E = o.REVISION_CHANGES[I], R = o.REVISION_CHANGES[S];
        throw new s.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + E + ") or downgrade your runtime to an older version (" + R + ").");
      } else
        throw new s.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + m[1] + ").");
  }
  function y(m, S) {
    if (!S)
      throw new s.default("No environment passed to template");
    if (!m || !m.main)
      throw new s.default("Unknown template object: " + typeof m);
    m.main.decorator = m.main_d, S.VM.checkRevision(m.compiler);
    var I = m.compiler && m.compiler[0] === 7;
    function E(O, A, L) {
      L.hash && (A = i.extend({}, A, L.hash), L.ids && (L.ids[0] = !0)), O = S.VM.resolvePartial.call(this, O, A, L);
      var G = i.extend({}, L, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), ot = S.VM.invokePartial.call(this, O, A, G);
      if (ot == null && S.compile && (L.partials[L.name] = S.compile(O, m.compilerOptions, S), ot = L.partials[L.name](A, G)), ot != null) {
        if (L.indent) {
          for (var gt = ot.split(`
`), Et = 0, Qe = gt.length; Et < Qe && !(!gt[Et] && Et + 1 === Qe); Et++)
            gt[Et] = L.indent + gt[Et];
          ot = gt.join(`
`);
        }
        return ot;
      } else
        throw new s.default("The partial " + L.name + " could not be compiled when running in runtime-only mode");
    }
    var R = {
      strict: function(A, L, G) {
        if (!A || !(L in A))
          throw new s.default('"' + L + '" not defined in ' + A, {
            loc: G
          });
        return R.lookupProperty(A, L);
      },
      lookupProperty: function(A, L) {
        var G = A[L];
        if (G == null || Object.prototype.hasOwnProperty.call(A, L) || f.resultIsAllowed(G, R.protoAccessControl, L))
          return G;
      },
      lookup: function(A, L) {
        for (var G = A.length, ot = 0; ot < G; ot++) {
          var gt = A[ot] && R.lookupProperty(A[ot], L);
          if (gt != null)
            return A[ot][L];
        }
      },
      lambda: function(A, L) {
        return typeof A == "function" ? A.call(L) : A;
      },
      escapeExpression: i.escapeExpression,
      invokePartial: E,
      fn: function(A) {
        var L = m[A];
        return L.decorator = m[A + "_d"], L;
      },
      programs: [],
      program: function(A, L, G, ot, gt) {
        var Et = this.programs[A], Qe = this.fn(A);
        return L || gt || ot || G ? Et = h(this, A, Qe, L, G, ot, gt) : Et || (Et = this.programs[A] = h(this, A, Qe)), Et;
      },
      data: function(A, L) {
        for (; A && L--; )
          A = A._parent;
        return A;
      },
      mergeIfNeeded: function(A, L) {
        var G = A || L;
        return A && L && A !== L && (G = i.extend({}, L, A)), G;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: S.VM.noop,
      compilerInfo: m.compiler
    };
    function q(O) {
      var A = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], L = A.data;
      q._setup(A), !A.partial && m.useData && (L = g(O, L));
      var G = void 0, ot = m.useBlockParams ? [] : void 0;
      m.useDepths && (A.depths ? G = O != A.depths[0] ? [O].concat(A.depths) : A.depths : G = [O]);
      function gt(Et) {
        return "" + m.main(R, Et, R.helpers, R.partials, L, ot, G);
      }
      return gt = _(m.main, gt, R, A.depths || [], L, ot), gt(O, A);
    }
    return q.isTop = !0, q._setup = function(O) {
      if (O.partial)
        R.protoAccessControl = O.protoAccessControl, R.helpers = O.helpers, R.partials = O.partials, R.decorators = O.decorators, R.hooks = O.hooks;
      else {
        var A = i.extend({}, S.helpers, O.helpers);
        b(A, R), R.helpers = A, m.usePartial && (R.partials = R.mergeIfNeeded(O.partials, S.partials)), (m.usePartial || m.useDecorators) && (R.decorators = i.extend({}, S.decorators, O.decorators)), R.hooks = {}, R.protoAccessControl = f.createProtoAccessControl(O);
        var L = O.allowCallsToHelperMissing || I;
        u.moveHelperToHooks(R, "helperMissing", L), u.moveHelperToHooks(R, "blockHelperMissing", L);
      }
    }, q._child = function(O, A, L, G) {
      if (m.useBlockParams && !L)
        throw new s.default("must pass block params");
      if (m.useDepths && !G)
        throw new s.default("must pass parent depths");
      return h(R, O, m[O], A, 0, L, G);
    }, q;
  }
  function h(m, S, I, E, R, q, O) {
    function A(L) {
      var G = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], ot = O;
      return O && L != O[0] && !(L === m.nullContext && O[0] === null) && (ot = [L].concat(O)), I(m, L, m.helpers, m.partials, G.data || E, q && [G.blockParams].concat(q), ot);
    }
    return A = _(I, A, m, O, E, q), A.program = S, A.depth = O ? O.length : 0, A.blockParams = R || 0, A;
  }
  function c(m, S, I) {
    return m ? !m.call && !I.name && (I.name = m, m = I.partials[m]) : I.name === "@partial-block" ? m = I.data["partial-block"] : m = I.partials[I.name], m;
  }
  function a(m, S, I) {
    var E = I.data && I.data["partial-block"];
    I.partial = !0, I.ids && (I.data.contextPath = I.ids[0] || I.data.contextPath);
    var R = void 0;
    if (I.fn && I.fn !== p && (function() {
      I.data = o.createFrame(I.data);
      var q = I.fn;
      R = I.data["partial-block"] = function(A) {
        var L = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return L.data = o.createFrame(L.data), L.data["partial-block"] = E, q(A, L);
      }, q.partials && (I.partials = i.extend({}, I.partials, q.partials));
    })(), m === void 0 && R && (m = R), m === void 0)
      throw new s.default("The partial " + I.name + " could not be found");
    if (m instanceof Function)
      return m(S, I);
  }
  function p() {
    return "";
  }
  function g(m, S) {
    return (!S || !("root" in S)) && (S = S ? o.createFrame(S) : {}, S.root = m), S;
  }
  function _(m, S, I, E, R, q) {
    if (m.decorator) {
      var O = {};
      S = m.decorator(S, O, I, E && E[0], R, q, E), i.extend(S, O);
    }
    return S;
  }
  function b(m, S) {
    Object.keys(m).forEach(function(I) {
      var E = m[I];
      m[I] = w(E, S);
    });
  }
  function w(m, S) {
    var I = S.lookupProperty;
    return l.wrapHelper(m, function(E) {
      return i.extend({ lookupProperty: I }, E);
    });
  }
  return Xt;
}
var Pr = { exports: {} }, _s;
function vo() {
  return _s || (_s = 1, (function(r, t) {
    t.__esModule = !0, t.default = function(e) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var i = globalThis.Handlebars;
      e.noConflict = function() {
        return globalThis.Handlebars === e && (globalThis.Handlebars = i), e;
      };
    }, r.exports = t.default;
  })(Pr, Pr.exports)), Pr.exports;
}
var vs;
function nu() {
  return vs || (vs = 1, (function(r, t) {
    t.__esModule = !0;
    function e(b) {
      return b && b.__esModule ? b : { default: b };
    }
    function i(b) {
      if (b && b.__esModule)
        return b;
      var w = {};
      if (b != null)
        for (var m in b)
          Object.prototype.hasOwnProperty.call(b, m) && (w[m] = b[m]);
      return w.default = b, w;
    }
    var n = In(), s = i(n), o = eu(), u = e(o), l = Ut(), f = e(l), d = wt(), y = i(d), h = iu(), c = i(h), a = vo(), p = e(a);
    function g() {
      var b = new s.HandlebarsEnvironment();
      return y.extend(b, s), b.SafeString = u.default, b.Exception = f.default, b.Utils = y, b.escapeExpression = y.escapeExpression, b.VM = c, b.template = function(w) {
        return c.template(w, b);
      }, b;
    }
    var _ = g();
    _.create = g, p.default(_), _.default = _, t.default = _, r.exports = t.default;
  })(Ir, Ir.exports)), Ir.exports;
}
var xr = { exports: {} }, bs;
function bo() {
  return bs || (bs = 1, (function(r, t) {
    t.__esModule = !0;
    var e = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(n) {
          return n.type === "SubExpression" || (n.type === "MustacheStatement" || n.type === "BlockStatement") && !!(n.params && n.params.length || n.hash);
        },
        scopedId: function(n) {
          return /^\.|this\b/.test(n.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(n) {
          return n.parts.length === 1 && !e.helpers.scopedId(n) && !n.depth;
        }
      }
    };
    t.default = e, r.exports = t.default;
  })(xr, xr.exports)), xr.exports;
}
var Ee = {}, Ur = { exports: {} }, Ss;
function su() {
  return Ss || (Ss = 1, (function(r, t) {
    t.__esModule = !0;
    var e = (function() {
      var i = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(u, l, f, d, y, h, c) {
          var a = h.length - 1;
          switch (y) {
            case 1:
              return h[a - 1];
            case 2:
              this.$ = d.prepareProgram(h[a]);
              break;
            case 3:
              this.$ = h[a];
              break;
            case 4:
              this.$ = h[a];
              break;
            case 5:
              this.$ = h[a];
              break;
            case 6:
              this.$ = h[a];
              break;
            case 7:
              this.$ = h[a];
              break;
            case 8:
              this.$ = h[a];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: d.stripComment(h[a]),
                strip: d.stripFlags(h[a], h[a]),
                loc: d.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: h[a],
                value: h[a],
                loc: d.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = d.prepareRawBlock(h[a - 2], h[a - 1], h[a], this._$);
              break;
            case 12:
              this.$ = { path: h[a - 3], params: h[a - 2], hash: h[a - 1] };
              break;
            case 13:
              this.$ = d.prepareBlock(h[a - 3], h[a - 2], h[a - 1], h[a], !1, this._$);
              break;
            case 14:
              this.$ = d.prepareBlock(h[a - 3], h[a - 2], h[a - 1], h[a], !0, this._$);
              break;
            case 15:
              this.$ = { open: h[a - 5], path: h[a - 4], params: h[a - 3], hash: h[a - 2], blockParams: h[a - 1], strip: d.stripFlags(h[a - 5], h[a]) };
              break;
            case 16:
              this.$ = { path: h[a - 4], params: h[a - 3], hash: h[a - 2], blockParams: h[a - 1], strip: d.stripFlags(h[a - 5], h[a]) };
              break;
            case 17:
              this.$ = { path: h[a - 4], params: h[a - 3], hash: h[a - 2], blockParams: h[a - 1], strip: d.stripFlags(h[a - 5], h[a]) };
              break;
            case 18:
              this.$ = { strip: d.stripFlags(h[a - 1], h[a - 1]), program: h[a] };
              break;
            case 19:
              var p = d.prepareBlock(h[a - 2], h[a - 1], h[a], h[a], !1, this._$), g = d.prepareProgram([p], h[a - 1].loc);
              g.chained = !0, this.$ = { strip: h[a - 2].strip, program: g, chain: !0 };
              break;
            case 20:
              this.$ = h[a];
              break;
            case 21:
              this.$ = { path: h[a - 1], strip: d.stripFlags(h[a - 2], h[a]) };
              break;
            case 22:
              this.$ = d.prepareMustache(h[a - 3], h[a - 2], h[a - 1], h[a - 4], d.stripFlags(h[a - 4], h[a]), this._$);
              break;
            case 23:
              this.$ = d.prepareMustache(h[a - 3], h[a - 2], h[a - 1], h[a - 4], d.stripFlags(h[a - 4], h[a]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: h[a - 3],
                params: h[a - 2],
                hash: h[a - 1],
                indent: "",
                strip: d.stripFlags(h[a - 4], h[a]),
                loc: d.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = d.preparePartialBlock(h[a - 2], h[a - 1], h[a], this._$);
              break;
            case 26:
              this.$ = { path: h[a - 3], params: h[a - 2], hash: h[a - 1], strip: d.stripFlags(h[a - 4], h[a]) };
              break;
            case 27:
              this.$ = h[a];
              break;
            case 28:
              this.$ = h[a];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: h[a - 3],
                params: h[a - 2],
                hash: h[a - 1],
                loc: d.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: h[a], loc: d.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: d.id(h[a - 2]), value: h[a], loc: d.locInfo(this._$) };
              break;
            case 32:
              this.$ = d.id(h[a - 1]);
              break;
            case 33:
              this.$ = h[a];
              break;
            case 34:
              this.$ = h[a];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: h[a], original: h[a], loc: d.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(h[a]), original: Number(h[a]), loc: d.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: h[a] === "true", original: h[a] === "true", loc: d.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: d.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: d.locInfo(this._$) };
              break;
            case 40:
              this.$ = h[a];
              break;
            case 41:
              this.$ = h[a];
              break;
            case 42:
              this.$ = d.preparePath(!0, h[a], this._$);
              break;
            case 43:
              this.$ = d.preparePath(!1, h[a], this._$);
              break;
            case 44:
              h[a - 2].push({ part: d.id(h[a]), original: h[a], separator: h[a - 1] }), this.$ = h[a - 2];
              break;
            case 45:
              this.$ = [{ part: d.id(h[a]), original: h[a] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              h[a - 1].push(h[a]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              h[a - 1].push(h[a]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              h[a - 1].push(h[a]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              h[a - 1].push(h[a]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              h[a - 1].push(h[a]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              h[a - 1].push(h[a]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              h[a - 1].push(h[a]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              h[a - 1].push(h[a]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              h[a - 1].push(h[a]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              h[a - 1].push(h[a]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              h[a - 1].push(h[a]);
              break;
            case 98:
              this.$ = [h[a]];
              break;
            case 99:
              h[a - 1].push(h[a]);
              break;
            case 100:
              this.$ = [h[a]];
              break;
            case 101:
              h[a - 1].push(h[a]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(u, l) {
          throw new Error(u);
        },
        parse: function(u) {
          var l = this, f = [0], d = [null], y = [], h = this.table, c = "", a = 0, p = 0;
          this.lexer.setInput(u), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var g = this.lexer.yylloc;
          y.push(g);
          var _ = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function b() {
            var G;
            return G = l.lexer.lex() || 1, typeof G != "number" && (G = l.symbols_[G] || G), G;
          }
          for (var w, m, S, I, E = {}, R, q, O, A; ; ) {
            if (m = f[f.length - 1], this.defaultActions[m] ? S = this.defaultActions[m] : ((w === null || typeof w > "u") && (w = b()), S = h[m] && h[m][w]), typeof S > "u" || !S.length || !S[0]) {
              var L = "";
              {
                A = [];
                for (R in h[m]) this.terminals_[R] && R > 2 && A.push("'" + this.terminals_[R] + "'");
                this.lexer.showPosition ? L = "Parse error on line " + (a + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + A.join(", ") + ", got '" + (this.terminals_[w] || w) + "'" : L = "Parse error on line " + (a + 1) + ": Unexpected " + (w == 1 ? "end of input" : "'" + (this.terminals_[w] || w) + "'"), this.parseError(L, { text: this.lexer.match, token: this.terminals_[w] || w, line: this.lexer.yylineno, loc: g, expected: A });
              }
            }
            if (S[0] instanceof Array && S.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + w);
            switch (S[0]) {
              case 1:
                f.push(w), d.push(this.lexer.yytext), y.push(this.lexer.yylloc), f.push(S[1]), w = null, p = this.lexer.yyleng, c = this.lexer.yytext, a = this.lexer.yylineno, g = this.lexer.yylloc;
                break;
              case 2:
                if (q = this.productions_[S[1]][1], E.$ = d[d.length - q], E._$ = { first_line: y[y.length - (q || 1)].first_line, last_line: y[y.length - 1].last_line, first_column: y[y.length - (q || 1)].first_column, last_column: y[y.length - 1].last_column }, _ && (E._$.range = [y[y.length - (q || 1)].range[0], y[y.length - 1].range[1]]), I = this.performAction.call(E, c, p, a, this.yy, S[1], d, y), typeof I < "u")
                  return I;
                q && (f = f.slice(0, -1 * q * 2), d = d.slice(0, -1 * q), y = y.slice(0, -1 * q)), f.push(this.productions_[S[1]][0]), d.push(E.$), y.push(E._$), O = h[f[f.length - 2]][f[f.length - 1]], f.push(O);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, n = (function() {
        var o = {
          EOF: 1,
          parseError: function(l, f) {
            if (this.yy.parser)
              this.yy.parser.parseError(l, f);
            else
              throw new Error(l);
          },
          setInput: function(l) {
            return this._input = l, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var l = this._input[0];
            this.yytext += l, this.yyleng++, this.offset++, this.match += l, this.matched += l;
            var f = l.match(/(?:\r\n?|\n).*/g);
            return f ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), l;
          },
          unput: function(l) {
            var f = l.length, d = l.split(/(?:\r\n?|\n)/g);
            this._input = l + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - f - 1), this.offset -= f;
            var y = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), d.length - 1 && (this.yylineno -= d.length - 1);
            var h = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: d ? (d.length === y.length ? this.yylloc.first_column : 0) + y[y.length - d.length].length - d[0].length : this.yylloc.first_column - f
            }, this.options.ranges && (this.yylloc.range = [h[0], h[0] + this.yyleng - f]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(l) {
            this.unput(this.match.slice(l));
          },
          pastInput: function() {
            var l = this.matched.substr(0, this.matched.length - this.match.length);
            return (l.length > 20 ? "..." : "") + l.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var l = this.match;
            return l.length < 20 && (l += this._input.substr(0, 20 - l.length)), (l.substr(0, 20) + (l.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var l = this.pastInput(), f = new Array(l.length + 1).join("-");
            return l + this.upcomingInput() + `
` + f + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var l, f, d, y, h;
            this._more || (this.yytext = "", this.match = "");
            for (var c = this._currentRules(), a = 0; a < c.length && (d = this._input.match(this.rules[c[a]]), !(d && (!f || d[0].length > f[0].length) && (f = d, y = a, !this.options.flex))); a++)
              ;
            return f ? (h = f[0].match(/(?:\r\n?|\n).*/g), h && (this.yylineno += h.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: h ? h[h.length - 1].length - h[h.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + f[0].length
            }, this.yytext += f[0], this.match += f[0], this.matches = f, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(f[0].length), this.matched += f[0], l = this.performAction.call(this, this.yy, this, c[y], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), l || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var l = this.next();
            return typeof l < "u" ? l : this.lex();
          },
          begin: function(l) {
            this.conditionStack.push(l);
          },
          popState: function() {
            return this.conditionStack.pop();
          },
          _currentRules: function() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function(l) {
            this.begin(l);
          }
        };
        return o.options = {}, o.performAction = function(l, f, d, y) {
          function h(c, a) {
            return f.yytext = f.yytext.substring(c, f.yyleng - a + c);
          }
          switch (d) {
            case 0:
              if (f.yytext.slice(-2) === "\\\\" ? (h(0, 1), this.begin("mu")) : f.yytext.slice(-1) === "\\" ? (h(0, 1), this.begin("emu")) : this.begin("mu"), f.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (h(5, 9), "END_RAW_BLOCK");
            case 5:
              return 15;
            case 6:
              return this.popState(), 14;
            case 7:
              return 65;
            case 8:
              return 68;
            case 9:
              return 19;
            case 10:
              return this.popState(), this.begin("raw"), 23;
            case 11:
              return 55;
            case 12:
              return 60;
            case 13:
              return 29;
            case 14:
              return 47;
            case 15:
              return this.popState(), 44;
            case 16:
              return this.popState(), 44;
            case 17:
              return 34;
            case 18:
              return 39;
            case 19:
              return 51;
            case 20:
              return 48;
            case 21:
              this.unput(f.yytext), this.popState(), this.begin("com");
              break;
            case 22:
              return this.popState(), 14;
            case 23:
              return 48;
            case 24:
              return 73;
            case 25:
              return 72;
            case 26:
              return 72;
            case 27:
              return 87;
            case 28:
              break;
            case 29:
              return this.popState(), 54;
            case 30:
              return this.popState(), 33;
            case 31:
              return f.yytext = h(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return f.yytext = h(1, 2).replace(/\\'/g, "'"), 80;
            case 33:
              return 85;
            case 34:
              return 82;
            case 35:
              return 82;
            case 36:
              return 83;
            case 37:
              return 84;
            case 38:
              return 81;
            case 39:
              return 75;
            case 40:
              return 77;
            case 41:
              return 72;
            case 42:
              return f.yytext = f.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, o.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], o.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, o;
      })();
      i.lexer = n;
      function s() {
        this.yy = {};
      }
      return s.prototype = i, i.Parser = s, new s();
    })();
    t.default = e, r.exports = t.default;
  })(Ur, Ur.exports)), Ur.exports;
}
var Vr = { exports: {} }, zr = { exports: {} }, Is;
function So() {
  return Is || (Is = 1, (function(r, t) {
    t.__esModule = !0;
    function e(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var i = Ut(), n = e(i);
    function s() {
      this.parents = [];
    }
    s.prototype = {
      constructor: s,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(d, y) {
        var h = this.accept(d[y]);
        if (this.mutating) {
          if (h && !s.prototype[h.type])
            throw new n.default('Unexpected node type "' + h.type + '" found when accepting ' + y + " on " + d.type);
          d[y] = h;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(d, y) {
        if (this.acceptKey(d, y), !d[y])
          throw new n.default(d.type + " requires " + y);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(d) {
        for (var y = 0, h = d.length; y < h; y++)
          this.acceptKey(d, y), d[y] || (d.splice(y, 1), y--, h--);
      },
      accept: function(d) {
        if (d) {
          if (!this[d.type])
            throw new n.default("Unknown type: " + d.type, d);
          this.current && this.parents.unshift(this.current), this.current = d;
          var y = this[d.type](d);
          if (this.current = this.parents.shift(), !this.mutating || y)
            return y;
          if (y !== !1)
            return d;
        }
      },
      Program: function(d) {
        this.acceptArray(d.body);
      },
      MustacheStatement: o,
      Decorator: o,
      BlockStatement: u,
      DecoratorBlock: u,
      PartialStatement: l,
      PartialBlockStatement: function(d) {
        l.call(this, d), this.acceptKey(d, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: o,
      PathExpression: function() {
      },
      StringLiteral: function() {
      },
      NumberLiteral: function() {
      },
      BooleanLiteral: function() {
      },
      UndefinedLiteral: function() {
      },
      NullLiteral: function() {
      },
      Hash: function(d) {
        this.acceptArray(d.pairs);
      },
      HashPair: function(d) {
        this.acceptRequired(d, "value");
      }
    };
    function o(f) {
      this.acceptRequired(f, "path"), this.acceptArray(f.params), this.acceptKey(f, "hash");
    }
    function u(f) {
      o.call(this, f), this.acceptKey(f, "program"), this.acceptKey(f, "inverse");
    }
    function l(f) {
      this.acceptRequired(f, "name"), this.acceptArray(f.params), this.acceptKey(f, "hash");
    }
    t.default = s, r.exports = t.default;
  })(zr, zr.exports)), zr.exports;
}
var ws;
function ou() {
  return ws || (ws = 1, (function(r, t) {
    t.__esModule = !0;
    function e(d) {
      return d && d.__esModule ? d : { default: d };
    }
    var i = So(), n = e(i);
    function s() {
      var d = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = d;
    }
    s.prototype = new n.default(), s.prototype.Program = function(d) {
      var y = !this.options.ignoreStandalone, h = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var c = d.body, a = 0, p = c.length; a < p; a++) {
        var g = c[a], _ = this.accept(g);
        if (_) {
          var b = o(c, a, h), w = u(c, a, h), m = _.openStandalone && b, S = _.closeStandalone && w, I = _.inlineStandalone && b && w;
          _.close && l(c, a, !0), _.open && f(c, a, !0), y && I && (l(c, a), f(c, a) && g.type === "PartialStatement" && (g.indent = /([ \t]+$)/.exec(c[a - 1].original)[1])), y && m && (l((g.program || g.inverse).body), f(c, a)), y && S && (l(c, a), f((g.inverse || g.program).body));
        }
      }
      return d;
    }, s.prototype.BlockStatement = s.prototype.DecoratorBlock = s.prototype.PartialBlockStatement = function(d) {
      this.accept(d.program), this.accept(d.inverse);
      var y = d.program || d.inverse, h = d.program && d.inverse, c = h, a = h;
      if (h && h.chained)
        for (c = h.body[0].program; a.chained; )
          a = a.body[a.body.length - 1].program;
      var p = {
        open: d.openStrip.open,
        close: d.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: u(y.body),
        closeStandalone: o((c || y).body)
      };
      if (d.openStrip.close && l(y.body, null, !0), h) {
        var g = d.inverseStrip;
        g.open && f(y.body, null, !0), g.close && l(c.body, null, !0), d.closeStrip.open && f(a.body, null, !0), !this.options.ignoreStandalone && o(y.body) && u(c.body) && (f(y.body), l(c.body));
      } else d.closeStrip.open && f(y.body, null, !0);
      return p;
    }, s.prototype.Decorator = s.prototype.MustacheStatement = function(d) {
      return d.strip;
    }, s.prototype.PartialStatement = s.prototype.CommentStatement = function(d) {
      var y = d.strip || {};
      return {
        inlineStandalone: !0,
        open: y.open,
        close: y.close
      };
    };
    function o(d, y, h) {
      y === void 0 && (y = d.length);
      var c = d[y - 1], a = d[y - 2];
      if (!c)
        return h;
      if (c.type === "ContentStatement")
        return (a || !h ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(c.original);
    }
    function u(d, y, h) {
      y === void 0 && (y = -1);
      var c = d[y + 1], a = d[y + 2];
      if (!c)
        return h;
      if (c.type === "ContentStatement")
        return (a || !h ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(c.original);
    }
    function l(d, y, h) {
      var c = d[y == null ? 0 : y + 1];
      if (!(!c || c.type !== "ContentStatement" || !h && c.rightStripped)) {
        var a = c.value;
        c.value = c.value.replace(h ? /^\s+/ : /^[ \t]*\r?\n?/, ""), c.rightStripped = c.value !== a;
      }
    }
    function f(d, y, h) {
      var c = d[y == null ? d.length - 1 : y - 1];
      if (!(!c || c.type !== "ContentStatement" || !h && c.leftStripped)) {
        var a = c.value;
        return c.value = c.value.replace(h ? /\s+$/ : /[ \t]+$/, ""), c.leftStripped = c.value !== a, c.leftStripped;
      }
    }
    t.default = s, r.exports = t.default;
  })(Vr, Vr.exports)), Vr.exports;
}
var At = {}, Es;
function au() {
  if (Es) return At;
  Es = 1, At.__esModule = !0, At.SourceLocation = n, At.id = s, At.stripFlags = o, At.stripComment = u, At.preparePath = l, At.prepareMustache = f, At.prepareRawBlock = d, At.prepareBlock = y, At.prepareProgram = h, At.preparePartialBlock = c;
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var t = Ut(), e = r(t);
  function i(a, p) {
    if (p = p.path ? p.path.original : p, a.path.original !== p) {
      var g = { loc: a.path.loc };
      throw new e.default(a.path.original + " doesn't match " + p, g);
    }
  }
  function n(a, p) {
    this.source = a, this.start = {
      line: p.first_line,
      column: p.first_column
    }, this.end = {
      line: p.last_line,
      column: p.last_column
    };
  }
  function s(a) {
    return /^\[.*\]$/.test(a) ? a.substring(1, a.length - 1) : a;
  }
  function o(a, p) {
    return {
      open: a.charAt(2) === "~",
      close: p.charAt(p.length - 3) === "~"
    };
  }
  function u(a) {
    return a.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function l(a, p, g) {
    g = this.locInfo(g);
    for (var _ = a ? "@" : "", b = [], w = 0, m = 0, S = p.length; m < S; m++) {
      var I = p[m].part, E = p[m].original !== I;
      if (_ += (p[m].separator || "") + I, !E && (I === ".." || I === "." || I === "this")) {
        if (b.length > 0)
          throw new e.default("Invalid path: " + _, { loc: g });
        I === ".." && w++;
      } else
        b.push(I);
    }
    return {
      type: "PathExpression",
      data: a,
      depth: w,
      parts: b,
      original: _,
      loc: g
    };
  }
  function f(a, p, g, _, b, w) {
    var m = _.charAt(3) || _.charAt(2), S = m !== "{" && m !== "&", I = /\*/.test(_);
    return {
      type: I ? "Decorator" : "MustacheStatement",
      path: a,
      params: p,
      hash: g,
      escaped: S,
      strip: b,
      loc: this.locInfo(w)
    };
  }
  function d(a, p, g, _) {
    i(a, g), _ = this.locInfo(_);
    var b = {
      type: "Program",
      body: p,
      strip: {},
      loc: _
    };
    return {
      type: "BlockStatement",
      path: a.path,
      params: a.params,
      hash: a.hash,
      program: b,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: _
    };
  }
  function y(a, p, g, _, b, w) {
    _ && _.path && i(a, _);
    var m = /\*/.test(a.open);
    p.blockParams = a.blockParams;
    var S = void 0, I = void 0;
    if (g) {
      if (m)
        throw new e.default("Unexpected inverse block on decorator", g);
      g.chain && (g.program.body[0].closeStrip = _.strip), I = g.strip, S = g.program;
    }
    return b && (b = S, S = p, p = b), {
      type: m ? "DecoratorBlock" : "BlockStatement",
      path: a.path,
      params: a.params,
      hash: a.hash,
      program: p,
      inverse: S,
      openStrip: a.strip,
      inverseStrip: I,
      closeStrip: _ && _.strip,
      loc: this.locInfo(w)
    };
  }
  function h(a, p) {
    if (!p && a.length) {
      var g = a[0].loc, _ = a[a.length - 1].loc;
      g && _ && (p = {
        source: g.source,
        start: {
          line: g.start.line,
          column: g.start.column
        },
        end: {
          line: _.end.line,
          column: _.end.column
        }
      });
    }
    return {
      type: "Program",
      body: a,
      strip: {},
      loc: p
    };
  }
  function c(a, p, g, _) {
    return i(a, g), {
      type: "PartialBlockStatement",
      name: a.path,
      params: a.params,
      hash: a.hash,
      program: p,
      openStrip: a.strip,
      closeStrip: g && g.strip,
      loc: this.locInfo(_)
    };
  }
  return At;
}
var As;
function cu() {
  if (As) return Ee;
  As = 1, Ee.__esModule = !0, Ee.parseWithoutProcessing = d, Ee.parse = y;
  function r(h) {
    if (h && h.__esModule)
      return h;
    var c = {};
    if (h != null)
      for (var a in h)
        Object.prototype.hasOwnProperty.call(h, a) && (c[a] = h[a]);
    return c.default = h, c;
  }
  function t(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var e = su(), i = t(e), n = ou(), s = t(n), o = au(), u = r(o), l = wt();
  Ee.parser = i.default;
  var f = {};
  l.extend(f, u);
  function d(h, c) {
    if (h.type === "Program")
      return h;
    i.default.yy = f, f.locInfo = function(p) {
      return new f.SourceLocation(c && c.srcName, p);
    };
    var a = i.default.parse(h);
    return a;
  }
  function y(h, c) {
    var a = d(h, c), p = new s.default(c);
    return p.accept(a);
  }
  return Ee;
}
var Ae = {}, Os;
function uu() {
  if (Os) return Ae;
  Os = 1, Ae.__esModule = !0, Ae.Compiler = u, Ae.precompile = l, Ae.compile = f;
  function r(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var t = Ut(), e = r(t), i = wt(), n = bo(), s = r(n), o = [].slice;
  function u() {
  }
  u.prototype = {
    compiler: u,
    equals: function(c) {
      var a = this.opcodes.length;
      if (c.opcodes.length !== a)
        return !1;
      for (var p = 0; p < a; p++) {
        var g = this.opcodes[p], _ = c.opcodes[p];
        if (g.opcode !== _.opcode || !d(g.args, _.args))
          return !1;
      }
      a = this.children.length;
      for (var p = 0; p < a; p++)
        if (!this.children[p].equals(c.children[p]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(c, a) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = a, this.stringParams = a.stringParams, this.trackIds = a.trackIds, a.blockParams = a.blockParams || [], a.knownHelpers = i.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, a.knownHelpers), this.accept(c);
    },
    compileProgram: function(c) {
      var a = new this.compiler(), p = a.compile(c, this.options), g = this.guid++;
      return this.usePartial = this.usePartial || p.usePartial, this.children[g] = p, this.useDepths = this.useDepths || p.useDepths, g;
    },
    accept: function(c) {
      if (!this[c.type])
        throw new e.default("Unknown type: " + c.type, c);
      this.sourceNode.unshift(c);
      var a = this[c.type](c);
      return this.sourceNode.shift(), a;
    },
    Program: function(c) {
      this.options.blockParams.unshift(c.blockParams);
      for (var a = c.body, p = a.length, g = 0; g < p; g++)
        this.accept(a[g]);
      return this.options.blockParams.shift(), this.isSimple = p === 1, this.blockParams = c.blockParams ? c.blockParams.length : 0, this;
    },
    BlockStatement: function(c) {
      y(c);
      var a = c.program, p = c.inverse;
      a = a && this.compileProgram(a), p = p && this.compileProgram(p);
      var g = this.classifySexpr(c);
      g === "helper" ? this.helperSexpr(c, a, p) : g === "simple" ? (this.simpleSexpr(c), this.opcode("pushProgram", a), this.opcode("pushProgram", p), this.opcode("emptyHash"), this.opcode("blockValue", c.path.original)) : (this.ambiguousSexpr(c, a, p), this.opcode("pushProgram", a), this.opcode("pushProgram", p), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(c) {
      var a = c.program && this.compileProgram(c.program), p = this.setupFullMustacheParams(c, a, void 0), g = c.path;
      this.useDecorators = !0, this.opcode("registerDecorator", p.length, g.original);
    },
    PartialStatement: function(c) {
      this.usePartial = !0;
      var a = c.program;
      a && (a = this.compileProgram(c.program));
      var p = c.params;
      if (p.length > 1)
        throw new e.default("Unsupported number of partial arguments: " + p.length, c);
      p.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : p.push({ type: "PathExpression", parts: [], depth: 0 }));
      var g = c.name.original, _ = c.name.type === "SubExpression";
      _ && this.accept(c.name), this.setupFullMustacheParams(c, a, void 0, !0);
      var b = c.indent || "";
      this.options.preventIndent && b && (this.opcode("appendContent", b), b = ""), this.opcode("invokePartial", _, g, b), this.opcode("append");
    },
    PartialBlockStatement: function(c) {
      this.PartialStatement(c);
    },
    MustacheStatement: function(c) {
      this.SubExpression(c), c.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(c) {
      this.DecoratorBlock(c);
    },
    ContentStatement: function(c) {
      c.value && this.opcode("appendContent", c.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(c) {
      y(c);
      var a = this.classifySexpr(c);
      a === "simple" ? this.simpleSexpr(c) : a === "helper" ? this.helperSexpr(c) : this.ambiguousSexpr(c);
    },
    ambiguousSexpr: function(c, a, p) {
      var g = c.path, _ = g.parts[0], b = a != null || p != null;
      this.opcode("getContext", g.depth), this.opcode("pushProgram", a), this.opcode("pushProgram", p), g.strict = !0, this.accept(g), this.opcode("invokeAmbiguous", _, b);
    },
    simpleSexpr: function(c) {
      var a = c.path;
      a.strict = !0, this.accept(a), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(c, a, p) {
      var g = this.setupFullMustacheParams(c, a, p), _ = c.path, b = _.parts[0];
      if (this.options.knownHelpers[b])
        this.opcode("invokeKnownHelper", g.length, b);
      else {
        if (this.options.knownHelpersOnly)
          throw new e.default("You specified knownHelpersOnly, but used the unknown helper " + b, c);
        _.strict = !0, _.falsy = !0, this.accept(_), this.opcode("invokeHelper", g.length, _.original, s.default.helpers.simpleId(_));
      }
    },
    PathExpression: function(c) {
      this.addDepth(c.depth), this.opcode("getContext", c.depth);
      var a = c.parts[0], p = s.default.helpers.scopedId(c), g = !c.depth && !p && this.blockParamIndex(a);
      g ? this.opcode("lookupBlockParam", g, c.parts) : a ? c.data ? (this.options.data = !0, this.opcode("lookupData", c.depth, c.parts, c.strict)) : this.opcode("lookupOnContext", c.parts, c.falsy, c.strict, p) : this.opcode("pushContext");
    },
    StringLiteral: function(c) {
      this.opcode("pushString", c.value);
    },
    NumberLiteral: function(c) {
      this.opcode("pushLiteral", c.value);
    },
    BooleanLiteral: function(c) {
      this.opcode("pushLiteral", c.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(c) {
      var a = c.pairs, p = 0, g = a.length;
      for (this.opcode("pushHash"); p < g; p++)
        this.pushParam(a[p].value);
      for (; p--; )
        this.opcode("assignToHash", a[p].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(c) {
      this.opcodes.push({
        opcode: c,
        args: o.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(c) {
      c && (this.useDepths = !0);
    },
    classifySexpr: function(c) {
      var a = s.default.helpers.simpleId(c.path), p = a && !!this.blockParamIndex(c.path.parts[0]), g = !p && s.default.helpers.helperExpression(c), _ = !p && (g || a);
      if (_ && !g) {
        var b = c.path.parts[0], w = this.options;
        w.knownHelpers[b] ? g = !0 : w.knownHelpersOnly && (_ = !1);
      }
      return g ? "helper" : _ ? "ambiguous" : "simple";
    },
    pushParams: function(c) {
      for (var a = 0, p = c.length; a < p; a++)
        this.pushParam(c[a]);
    },
    pushParam: function(c) {
      var a = c.value != null ? c.value : c.original || "";
      if (this.stringParams)
        a.replace && (a = a.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), c.depth && this.addDepth(c.depth), this.opcode("getContext", c.depth || 0), this.opcode("pushStringParam", a, c.type), c.type === "SubExpression" && this.accept(c);
      else {
        if (this.trackIds) {
          var p = void 0;
          if (c.parts && !s.default.helpers.scopedId(c) && !c.depth && (p = this.blockParamIndex(c.parts[0])), p) {
            var g = c.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", p, g);
          } else
            a = c.original || a, a.replace && (a = a.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", c.type, a);
        }
        this.accept(c);
      }
    },
    setupFullMustacheParams: function(c, a, p, g) {
      var _ = c.params;
      return this.pushParams(_), this.opcode("pushProgram", a), this.opcode("pushProgram", p), c.hash ? this.accept(c.hash) : this.opcode("emptyHash", g), _;
    },
    blockParamIndex: function(c) {
      for (var a = 0, p = this.options.blockParams.length; a < p; a++) {
        var g = this.options.blockParams[a], _ = g && i.indexOf(g, c);
        if (g && _ >= 0)
          return [a, _];
      }
    }
  };
  function l(h, c, a) {
    if (h == null || typeof h != "string" && h.type !== "Program")
      throw new e.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + h);
    c = c || {}, "data" in c || (c.data = !0), c.compat && (c.useDepths = !0);
    var p = a.parse(h, c), g = new a.Compiler().compile(p, c);
    return new a.JavaScriptCompiler().compile(g, c);
  }
  function f(h, c, a) {
    if (c === void 0 && (c = {}), h == null || typeof h != "string" && h.type !== "Program")
      throw new e.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + h);
    c = i.extend({}, c), "data" in c || (c.data = !0), c.compat && (c.useDepths = !0);
    var p = void 0;
    function g() {
      var b = a.parse(h, c), w = new a.Compiler().compile(b, c), m = new a.JavaScriptCompiler().compile(w, c, void 0, !0);
      return a.template(m);
    }
    function _(b, w) {
      return p || (p = g()), p.call(this, b, w);
    }
    return _._setup = function(b) {
      return p || (p = g()), p._setup(b);
    }, _._child = function(b, w, m, S) {
      return p || (p = g()), p._child(b, w, m, S);
    }, _;
  }
  function d(h, c) {
    if (h === c)
      return !0;
    if (i.isArray(h) && i.isArray(c) && h.length === c.length) {
      for (var a = 0; a < h.length; a++)
        if (!d(h[a], c[a]))
          return !1;
      return !0;
    }
  }
  function y(h) {
    if (!h.path.parts) {
      var c = h.path;
      h.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [c.original + ""],
        original: c.original + "",
        loc: c.loc
      };
    }
  }
  return Ae;
}
var qr = { exports: {} }, Hr = { exports: {} }, Ze = {}, Hi = {}, Wr = {}, Gr = {}, Rs;
function lu() {
  if (Rs) return Gr;
  Rs = 1;
  var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Gr.encode = function(t) {
    if (0 <= t && t < r.length)
      return r[t];
    throw new TypeError("Must be between 0 and 63: " + t);
  }, Gr.decode = function(t) {
    var e = 65, i = 90, n = 97, s = 122, o = 48, u = 57, l = 43, f = 47, d = 26, y = 52;
    return e <= t && t <= i ? t - e : n <= t && t <= s ? t - n + d : o <= t && t <= u ? t - o + y : t == l ? 62 : t == f ? 63 : -1;
  }, Gr;
}
var Ls;
function Io() {
  if (Ls) return Wr;
  Ls = 1;
  var r = lu(), t = 5, e = 1 << t, i = e - 1, n = e;
  function s(u) {
    return u < 0 ? (-u << 1) + 1 : (u << 1) + 0;
  }
  function o(u) {
    var l = (u & 1) === 1, f = u >> 1;
    return l ? -f : f;
  }
  return Wr.encode = function(l) {
    var f = "", d, y = s(l);
    do
      d = y & i, y >>>= t, y > 0 && (d |= n), f += r.encode(d);
    while (y > 0);
    return f;
  }, Wr.decode = function(l, f, d) {
    var y = l.length, h = 0, c = 0, a, p;
    do {
      if (f >= y)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (p = r.decode(l.charCodeAt(f++)), p === -1)
        throw new Error("Invalid base64 digit: " + l.charAt(f - 1));
      a = !!(p & n), p &= i, h = h + (p << c), c += t;
    } while (a);
    d.value = o(h), d.rest = f;
  }, Wr;
}
var Wi = {}, Bs;
function yr() {
  return Bs || (Bs = 1, (function(r) {
    function t(m, S, I) {
      if (S in m)
        return m[S];
      if (arguments.length === 3)
        return I;
      throw new Error('"' + S + '" is a required argument.');
    }
    r.getArg = t;
    var e = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, i = /^data:.+\,.+$/;
    function n(m) {
      var S = m.match(e);
      return S ? {
        scheme: S[1],
        auth: S[2],
        host: S[3],
        port: S[4],
        path: S[5]
      } : null;
    }
    r.urlParse = n;
    function s(m) {
      var S = "";
      return m.scheme && (S += m.scheme + ":"), S += "//", m.auth && (S += m.auth + "@"), m.host && (S += m.host), m.port && (S += ":" + m.port), m.path && (S += m.path), S;
    }
    r.urlGenerate = s;
    function o(m) {
      var S = m, I = n(m);
      if (I) {
        if (!I.path)
          return m;
        S = I.path;
      }
      for (var E = r.isAbsolute(S), R = S.split(/\/+/), q, O = 0, A = R.length - 1; A >= 0; A--)
        q = R[A], q === "." ? R.splice(A, 1) : q === ".." ? O++ : O > 0 && (q === "" ? (R.splice(A + 1, O), O = 0) : (R.splice(A, 2), O--));
      return S = R.join("/"), S === "" && (S = E ? "/" : "."), I ? (I.path = S, s(I)) : S;
    }
    r.normalize = o;
    function u(m, S) {
      m === "" && (m = "."), S === "" && (S = ".");
      var I = n(S), E = n(m);
      if (E && (m = E.path || "/"), I && !I.scheme)
        return E && (I.scheme = E.scheme), s(I);
      if (I || S.match(i))
        return S;
      if (E && !E.host && !E.path)
        return E.host = S, s(E);
      var R = S.charAt(0) === "/" ? S : o(m.replace(/\/+$/, "") + "/" + S);
      return E ? (E.path = R, s(E)) : R;
    }
    r.join = u, r.isAbsolute = function(m) {
      return m.charAt(0) === "/" || e.test(m);
    };
    function l(m, S) {
      m === "" && (m = "."), m = m.replace(/\/$/, "");
      for (var I = 0; S.indexOf(m + "/") !== 0; ) {
        var E = m.lastIndexOf("/");
        if (E < 0 || (m = m.slice(0, E), m.match(/^([^\/]+:\/)?\/*$/)))
          return S;
        ++I;
      }
      return Array(I + 1).join("../") + S.substr(m.length + 1);
    }
    r.relative = l;
    var f = (function() {
      var m = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in m);
    })();
    function d(m) {
      return m;
    }
    function y(m) {
      return c(m) ? "$" + m : m;
    }
    r.toSetString = f ? d : y;
    function h(m) {
      return c(m) ? m.slice(1) : m;
    }
    r.fromSetString = f ? d : h;
    function c(m) {
      if (!m)
        return !1;
      var S = m.length;
      if (S < 9 || m.charCodeAt(S - 1) !== 95 || m.charCodeAt(S - 2) !== 95 || m.charCodeAt(S - 3) !== 111 || m.charCodeAt(S - 4) !== 116 || m.charCodeAt(S - 5) !== 111 || m.charCodeAt(S - 6) !== 114 || m.charCodeAt(S - 7) !== 112 || m.charCodeAt(S - 8) !== 95 || m.charCodeAt(S - 9) !== 95)
        return !1;
      for (var I = S - 10; I >= 0; I--)
        if (m.charCodeAt(I) !== 36)
          return !1;
      return !0;
    }
    function a(m, S, I) {
      var E = g(m.source, S.source);
      return E !== 0 || (E = m.originalLine - S.originalLine, E !== 0) || (E = m.originalColumn - S.originalColumn, E !== 0 || I) || (E = m.generatedColumn - S.generatedColumn, E !== 0) || (E = m.generatedLine - S.generatedLine, E !== 0) ? E : g(m.name, S.name);
    }
    r.compareByOriginalPositions = a;
    function p(m, S, I) {
      var E = m.generatedLine - S.generatedLine;
      return E !== 0 || (E = m.generatedColumn - S.generatedColumn, E !== 0 || I) || (E = g(m.source, S.source), E !== 0) || (E = m.originalLine - S.originalLine, E !== 0) || (E = m.originalColumn - S.originalColumn, E !== 0) ? E : g(m.name, S.name);
    }
    r.compareByGeneratedPositionsDeflated = p;
    function g(m, S) {
      return m === S ? 0 : m === null ? 1 : S === null ? -1 : m > S ? 1 : -1;
    }
    function _(m, S) {
      var I = m.generatedLine - S.generatedLine;
      return I !== 0 || (I = m.generatedColumn - S.generatedColumn, I !== 0) || (I = g(m.source, S.source), I !== 0) || (I = m.originalLine - S.originalLine, I !== 0) || (I = m.originalColumn - S.originalColumn, I !== 0) ? I : g(m.name, S.name);
    }
    r.compareByGeneratedPositionsInflated = _;
    function b(m) {
      return JSON.parse(m.replace(/^\)]}'[^\n]*\n/, ""));
    }
    r.parseSourceMapInput = b;
    function w(m, S, I) {
      if (S = S || "", m && (m[m.length - 1] !== "/" && S[0] !== "/" && (m += "/"), S = m + S), I) {
        var E = n(I);
        if (!E)
          throw new Error("sourceMapURL could not be parsed");
        if (E.path) {
          var R = E.path.lastIndexOf("/");
          R >= 0 && (E.path = E.path.substring(0, R + 1));
        }
        S = u(s(E), S);
      }
      return o(S);
    }
    r.computeSourceURL = w;
  })(Wi)), Wi;
}
var Gi = {}, Ns;
function wo() {
  if (Ns) return Gi;
  Ns = 1;
  var r = yr(), t = Object.prototype.hasOwnProperty, e = typeof Map < "u";
  function i() {
    this._array = [], this._set = e ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return i.fromArray = function(s, o) {
    for (var u = new i(), l = 0, f = s.length; l < f; l++)
      u.add(s[l], o);
    return u;
  }, i.prototype.size = function() {
    return e ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, i.prototype.add = function(s, o) {
    var u = e ? s : r.toSetString(s), l = e ? this.has(s) : t.call(this._set, u), f = this._array.length;
    (!l || o) && this._array.push(s), l || (e ? this._set.set(s, f) : this._set[u] = f);
  }, i.prototype.has = function(s) {
    if (e)
      return this._set.has(s);
    var o = r.toSetString(s);
    return t.call(this._set, o);
  }, i.prototype.indexOf = function(s) {
    if (e) {
      var o = this._set.get(s);
      if (o >= 0)
        return o;
    } else {
      var u = r.toSetString(s);
      if (t.call(this._set, u))
        return this._set[u];
    }
    throw new Error('"' + s + '" is not in the set.');
  }, i.prototype.at = function(s) {
    if (s >= 0 && s < this._array.length)
      return this._array[s];
    throw new Error("No element indexed by " + s);
  }, i.prototype.toArray = function() {
    return this._array.slice();
  }, Gi.ArraySet = i, Gi;
}
var ji = {}, Ds;
function hu() {
  if (Ds) return ji;
  Ds = 1;
  var r = yr();
  function t(i, n) {
    var s = i.generatedLine, o = n.generatedLine, u = i.generatedColumn, l = n.generatedColumn;
    return o > s || o == s && l >= u || r.compareByGeneratedPositionsInflated(i, n) <= 0;
  }
  function e() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return e.prototype.unsortedForEach = function(n, s) {
    this._array.forEach(n, s);
  }, e.prototype.add = function(n) {
    t(this._last, n) ? (this._last = n, this._array.push(n)) : (this._sorted = !1, this._array.push(n));
  }, e.prototype.toArray = function() {
    return this._sorted || (this._array.sort(r.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, ji.MappingList = e, ji;
}
var Ts;
function Eo() {
  if (Ts) return Hi;
  Ts = 1;
  var r = Io(), t = yr(), e = wo().ArraySet, i = hu().MappingList;
  function n(s) {
    s || (s = {}), this._file = t.getArg(s, "file", null), this._sourceRoot = t.getArg(s, "sourceRoot", null), this._skipValidation = t.getArg(s, "skipValidation", !1), this._sources = new e(), this._names = new e(), this._mappings = new i(), this._sourcesContents = null;
  }
  return n.prototype._version = 3, n.fromSourceMap = function(o) {
    var u = o.sourceRoot, l = new n({
      file: o.file,
      sourceRoot: u
    });
    return o.eachMapping(function(f) {
      var d = {
        generated: {
          line: f.generatedLine,
          column: f.generatedColumn
        }
      };
      f.source != null && (d.source = f.source, u != null && (d.source = t.relative(u, d.source)), d.original = {
        line: f.originalLine,
        column: f.originalColumn
      }, f.name != null && (d.name = f.name)), l.addMapping(d);
    }), o.sources.forEach(function(f) {
      var d = f;
      u !== null && (d = t.relative(u, f)), l._sources.has(d) || l._sources.add(d);
      var y = o.sourceContentFor(f);
      y != null && l.setSourceContent(f, y);
    }), l;
  }, n.prototype.addMapping = function(o) {
    var u = t.getArg(o, "generated"), l = t.getArg(o, "original", null), f = t.getArg(o, "source", null), d = t.getArg(o, "name", null);
    this._skipValidation || this._validateMapping(u, l, f, d), f != null && (f = String(f), this._sources.has(f) || this._sources.add(f)), d != null && (d = String(d), this._names.has(d) || this._names.add(d)), this._mappings.add({
      generatedLine: u.line,
      generatedColumn: u.column,
      originalLine: l != null && l.line,
      originalColumn: l != null && l.column,
      source: f,
      name: d
    });
  }, n.prototype.setSourceContent = function(o, u) {
    var l = o;
    this._sourceRoot != null && (l = t.relative(this._sourceRoot, l)), u != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[t.toSetString(l)] = u) : this._sourcesContents && (delete this._sourcesContents[t.toSetString(l)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, n.prototype.applySourceMap = function(o, u, l) {
    var f = u;
    if (u == null) {
      if (o.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      f = o.file;
    }
    var d = this._sourceRoot;
    d != null && (f = t.relative(d, f));
    var y = new e(), h = new e();
    this._mappings.unsortedForEach(function(c) {
      if (c.source === f && c.originalLine != null) {
        var a = o.originalPositionFor({
          line: c.originalLine,
          column: c.originalColumn
        });
        a.source != null && (c.source = a.source, l != null && (c.source = t.join(l, c.source)), d != null && (c.source = t.relative(d, c.source)), c.originalLine = a.line, c.originalColumn = a.column, a.name != null && (c.name = a.name));
      }
      var p = c.source;
      p != null && !y.has(p) && y.add(p);
      var g = c.name;
      g != null && !h.has(g) && h.add(g);
    }, this), this._sources = y, this._names = h, o.sources.forEach(function(c) {
      var a = o.sourceContentFor(c);
      a != null && (l != null && (c = t.join(l, c)), d != null && (c = t.relative(d, c)), this.setSourceContent(c, a));
    }, this);
  }, n.prototype._validateMapping = function(o, u, l, f) {
    if (u && typeof u.line != "number" && typeof u.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(o && "line" in o && "column" in o && o.line > 0 && o.column >= 0 && !u && !l && !f)) {
      if (o && "line" in o && "column" in o && u && "line" in u && "column" in u && o.line > 0 && o.column >= 0 && u.line > 0 && u.column >= 0 && l)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: o,
        source: l,
        original: u,
        name: f
      }));
    }
  }, n.prototype._serializeMappings = function() {
    for (var o = 0, u = 1, l = 0, f = 0, d = 0, y = 0, h = "", c, a, p, g, _ = this._mappings.toArray(), b = 0, w = _.length; b < w; b++) {
      if (a = _[b], c = "", a.generatedLine !== u)
        for (o = 0; a.generatedLine !== u; )
          c += ";", u++;
      else if (b > 0) {
        if (!t.compareByGeneratedPositionsInflated(a, _[b - 1]))
          continue;
        c += ",";
      }
      c += r.encode(a.generatedColumn - o), o = a.generatedColumn, a.source != null && (g = this._sources.indexOf(a.source), c += r.encode(g - y), y = g, c += r.encode(a.originalLine - 1 - f), f = a.originalLine - 1, c += r.encode(a.originalColumn - l), l = a.originalColumn, a.name != null && (p = this._names.indexOf(a.name), c += r.encode(p - d), d = p)), h += c;
    }
    return h;
  }, n.prototype._generateSourcesContent = function(o, u) {
    return o.map(function(l) {
      if (!this._sourcesContents)
        return null;
      u != null && (l = t.relative(u, l));
      var f = t.toSetString(l);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, f) ? this._sourcesContents[f] : null;
    }, this);
  }, n.prototype.toJSON = function() {
    var o = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (o.file = this._file), this._sourceRoot != null && (o.sourceRoot = this._sourceRoot), this._sourcesContents && (o.sourcesContent = this._generateSourcesContent(o.sources, o.sourceRoot)), o;
  }, n.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, Hi.SourceMapGenerator = n, Hi;
}
var Xe = {}, Yi = {}, Fs;
function du() {
  return Fs || (Fs = 1, (function(r) {
    r.GREATEST_LOWER_BOUND = 1, r.LEAST_UPPER_BOUND = 2;
    function t(e, i, n, s, o, u) {
      var l = Math.floor((i - e) / 2) + e, f = o(n, s[l], !0);
      return f === 0 ? l : f > 0 ? i - l > 1 ? t(l, i, n, s, o, u) : u == r.LEAST_UPPER_BOUND ? i < s.length ? i : -1 : l : l - e > 1 ? t(e, l, n, s, o, u) : u == r.LEAST_UPPER_BOUND ? l : e < 0 ? -1 : e;
    }
    r.search = function(i, n, s, o) {
      if (n.length === 0)
        return -1;
      var u = t(
        -1,
        n.length,
        i,
        n,
        s,
        o || r.GREATEST_LOWER_BOUND
      );
      if (u < 0)
        return -1;
      for (; u - 1 >= 0 && s(n[u], n[u - 1], !0) === 0; )
        --u;
      return u;
    };
  })(Yi)), Yi;
}
var Ki = {}, Ms;
function fu() {
  if (Ms) return Ki;
  Ms = 1;
  function r(i, n, s) {
    var o = i[n];
    i[n] = i[s], i[s] = o;
  }
  function t(i, n) {
    return Math.round(i + Math.random() * (n - i));
  }
  function e(i, n, s, o) {
    if (s < o) {
      var u = t(s, o), l = s - 1;
      r(i, u, o);
      for (var f = i[o], d = s; d < o; d++)
        n(i[d], f) <= 0 && (l += 1, r(i, l, d));
      r(i, l + 1, d);
      var y = l + 1;
      e(i, n, s, y - 1), e(i, n, y + 1, o);
    }
  }
  return Ki.quickSort = function(i, n) {
    e(i, n, 0, i.length - 1);
  }, Ki;
}
var Cs;
function pu() {
  if (Cs) return Xe;
  Cs = 1;
  var r = yr(), t = du(), e = wo().ArraySet, i = Io(), n = fu().quickSort;
  function s(f, d) {
    var y = f;
    return typeof f == "string" && (y = r.parseSourceMapInput(f)), y.sections != null ? new l(y, d) : new o(y, d);
  }
  s.fromSourceMap = function(f, d) {
    return o.fromSourceMap(f, d);
  }, s.prototype._version = 3, s.prototype.__generatedMappings = null, Object.defineProperty(s.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), s.prototype.__originalMappings = null, Object.defineProperty(s.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), s.prototype._charIsMappingSeparator = function(d, y) {
    var h = d.charAt(y);
    return h === ";" || h === ",";
  }, s.prototype._parseMappings = function(d, y) {
    throw new Error("Subclasses must implement _parseMappings");
  }, s.GENERATED_ORDER = 1, s.ORIGINAL_ORDER = 2, s.GREATEST_LOWER_BOUND = 1, s.LEAST_UPPER_BOUND = 2, s.prototype.eachMapping = function(d, y, h) {
    var c = y || null, a = h || s.GENERATED_ORDER, p;
    switch (a) {
      case s.GENERATED_ORDER:
        p = this._generatedMappings;
        break;
      case s.ORIGINAL_ORDER:
        p = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var g = this.sourceRoot;
    p.map(function(_) {
      var b = _.source === null ? null : this._sources.at(_.source);
      return b = r.computeSourceURL(g, b, this._sourceMapURL), {
        source: b,
        generatedLine: _.generatedLine,
        generatedColumn: _.generatedColumn,
        originalLine: _.originalLine,
        originalColumn: _.originalColumn,
        name: _.name === null ? null : this._names.at(_.name)
      };
    }, this).forEach(d, c);
  }, s.prototype.allGeneratedPositionsFor = function(d) {
    var y = r.getArg(d, "line"), h = {
      source: r.getArg(d, "source"),
      originalLine: y,
      originalColumn: r.getArg(d, "column", 0)
    };
    if (h.source = this._findSourceIndex(h.source), h.source < 0)
      return [];
    var c = [], a = this._findMapping(
      h,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      r.compareByOriginalPositions,
      t.LEAST_UPPER_BOUND
    );
    if (a >= 0) {
      var p = this._originalMappings[a];
      if (d.column === void 0)
        for (var g = p.originalLine; p && p.originalLine === g; )
          c.push({
            line: r.getArg(p, "generatedLine", null),
            column: r.getArg(p, "generatedColumn", null),
            lastColumn: r.getArg(p, "lastGeneratedColumn", null)
          }), p = this._originalMappings[++a];
      else
        for (var _ = p.originalColumn; p && p.originalLine === y && p.originalColumn == _; )
          c.push({
            line: r.getArg(p, "generatedLine", null),
            column: r.getArg(p, "generatedColumn", null),
            lastColumn: r.getArg(p, "lastGeneratedColumn", null)
          }), p = this._originalMappings[++a];
    }
    return c;
  }, Xe.SourceMapConsumer = s;
  function o(f, d) {
    var y = f;
    typeof f == "string" && (y = r.parseSourceMapInput(f));
    var h = r.getArg(y, "version"), c = r.getArg(y, "sources"), a = r.getArg(y, "names", []), p = r.getArg(y, "sourceRoot", null), g = r.getArg(y, "sourcesContent", null), _ = r.getArg(y, "mappings"), b = r.getArg(y, "file", null);
    if (h != this._version)
      throw new Error("Unsupported version: " + h);
    p && (p = r.normalize(p)), c = c.map(String).map(r.normalize).map(function(w) {
      return p && r.isAbsolute(p) && r.isAbsolute(w) ? r.relative(p, w) : w;
    }), this._names = e.fromArray(a.map(String), !0), this._sources = e.fromArray(c, !0), this._absoluteSources = this._sources.toArray().map(function(w) {
      return r.computeSourceURL(p, w, d);
    }), this.sourceRoot = p, this.sourcesContent = g, this._mappings = _, this._sourceMapURL = d, this.file = b;
  }
  o.prototype = Object.create(s.prototype), o.prototype.consumer = s, o.prototype._findSourceIndex = function(f) {
    var d = f;
    if (this.sourceRoot != null && (d = r.relative(this.sourceRoot, d)), this._sources.has(d))
      return this._sources.indexOf(d);
    var y;
    for (y = 0; y < this._absoluteSources.length; ++y)
      if (this._absoluteSources[y] == f)
        return y;
    return -1;
  }, o.fromSourceMap = function(d, y) {
    var h = Object.create(o.prototype), c = h._names = e.fromArray(d._names.toArray(), !0), a = h._sources = e.fromArray(d._sources.toArray(), !0);
    h.sourceRoot = d._sourceRoot, h.sourcesContent = d._generateSourcesContent(
      h._sources.toArray(),
      h.sourceRoot
    ), h.file = d._file, h._sourceMapURL = y, h._absoluteSources = h._sources.toArray().map(function(I) {
      return r.computeSourceURL(h.sourceRoot, I, y);
    });
    for (var p = d._mappings.toArray().slice(), g = h.__generatedMappings = [], _ = h.__originalMappings = [], b = 0, w = p.length; b < w; b++) {
      var m = p[b], S = new u();
      S.generatedLine = m.generatedLine, S.generatedColumn = m.generatedColumn, m.source && (S.source = a.indexOf(m.source), S.originalLine = m.originalLine, S.originalColumn = m.originalColumn, m.name && (S.name = c.indexOf(m.name)), _.push(S)), g.push(S);
    }
    return n(h.__originalMappings, r.compareByOriginalPositions), h;
  }, o.prototype._version = 3, Object.defineProperty(o.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function u() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  o.prototype._parseMappings = function(d, y) {
    for (var h = 1, c = 0, a = 0, p = 0, g = 0, _ = 0, b = d.length, w = 0, m = {}, S = {}, I = [], E = [], R, q, O, A, L; w < b; )
      if (d.charAt(w) === ";")
        h++, w++, c = 0;
      else if (d.charAt(w) === ",")
        w++;
      else {
        for (R = new u(), R.generatedLine = h, A = w; A < b && !this._charIsMappingSeparator(d, A); A++)
          ;
        if (q = d.slice(w, A), O = m[q], O)
          w += q.length;
        else {
          for (O = []; w < A; )
            i.decode(d, w, S), L = S.value, w = S.rest, O.push(L);
          if (O.length === 2)
            throw new Error("Found a source, but no line and column");
          if (O.length === 3)
            throw new Error("Found a source and line, but no column");
          m[q] = O;
        }
        R.generatedColumn = c + O[0], c = R.generatedColumn, O.length > 1 && (R.source = g + O[1], g += O[1], R.originalLine = a + O[2], a = R.originalLine, R.originalLine += 1, R.originalColumn = p + O[3], p = R.originalColumn, O.length > 4 && (R.name = _ + O[4], _ += O[4])), E.push(R), typeof R.originalLine == "number" && I.push(R);
      }
    n(E, r.compareByGeneratedPositionsDeflated), this.__generatedMappings = E, n(I, r.compareByOriginalPositions), this.__originalMappings = I;
  }, o.prototype._findMapping = function(d, y, h, c, a, p) {
    if (d[h] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + d[h]);
    if (d[c] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + d[c]);
    return t.search(d, y, a, p);
  }, o.prototype.computeColumnSpans = function() {
    for (var d = 0; d < this._generatedMappings.length; ++d) {
      var y = this._generatedMappings[d];
      if (d + 1 < this._generatedMappings.length) {
        var h = this._generatedMappings[d + 1];
        if (y.generatedLine === h.generatedLine) {
          y.lastGeneratedColumn = h.generatedColumn - 1;
          continue;
        }
      }
      y.lastGeneratedColumn = 1 / 0;
    }
  }, o.prototype.originalPositionFor = function(d) {
    var y = {
      generatedLine: r.getArg(d, "line"),
      generatedColumn: r.getArg(d, "column")
    }, h = this._findMapping(
      y,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      r.compareByGeneratedPositionsDeflated,
      r.getArg(d, "bias", s.GREATEST_LOWER_BOUND)
    );
    if (h >= 0) {
      var c = this._generatedMappings[h];
      if (c.generatedLine === y.generatedLine) {
        var a = r.getArg(c, "source", null);
        a !== null && (a = this._sources.at(a), a = r.computeSourceURL(this.sourceRoot, a, this._sourceMapURL));
        var p = r.getArg(c, "name", null);
        return p !== null && (p = this._names.at(p)), {
          source: a,
          line: r.getArg(c, "originalLine", null),
          column: r.getArg(c, "originalColumn", null),
          name: p
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, o.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(d) {
      return d == null;
    }) : !1;
  }, o.prototype.sourceContentFor = function(d, y) {
    if (!this.sourcesContent)
      return null;
    var h = this._findSourceIndex(d);
    if (h >= 0)
      return this.sourcesContent[h];
    var c = d;
    this.sourceRoot != null && (c = r.relative(this.sourceRoot, c));
    var a;
    if (this.sourceRoot != null && (a = r.urlParse(this.sourceRoot))) {
      var p = c.replace(/^file:\/\//, "");
      if (a.scheme == "file" && this._sources.has(p))
        return this.sourcesContent[this._sources.indexOf(p)];
      if ((!a.path || a.path == "/") && this._sources.has("/" + c))
        return this.sourcesContent[this._sources.indexOf("/" + c)];
    }
    if (y)
      return null;
    throw new Error('"' + c + '" is not in the SourceMap.');
  }, o.prototype.generatedPositionFor = function(d) {
    var y = r.getArg(d, "source");
    if (y = this._findSourceIndex(y), y < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var h = {
      source: y,
      originalLine: r.getArg(d, "line"),
      originalColumn: r.getArg(d, "column")
    }, c = this._findMapping(
      h,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      r.compareByOriginalPositions,
      r.getArg(d, "bias", s.GREATEST_LOWER_BOUND)
    );
    if (c >= 0) {
      var a = this._originalMappings[c];
      if (a.source === h.source)
        return {
          line: r.getArg(a, "generatedLine", null),
          column: r.getArg(a, "generatedColumn", null),
          lastColumn: r.getArg(a, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Xe.BasicSourceMapConsumer = o;
  function l(f, d) {
    var y = f;
    typeof f == "string" && (y = r.parseSourceMapInput(f));
    var h = r.getArg(y, "version"), c = r.getArg(y, "sections");
    if (h != this._version)
      throw new Error("Unsupported version: " + h);
    this._sources = new e(), this._names = new e();
    var a = {
      line: -1,
      column: 0
    };
    this._sections = c.map(function(p) {
      if (p.url)
        throw new Error("Support for url field in sections not implemented.");
      var g = r.getArg(p, "offset"), _ = r.getArg(g, "line"), b = r.getArg(g, "column");
      if (_ < a.line || _ === a.line && b < a.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return a = g, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: _ + 1,
          generatedColumn: b + 1
        },
        consumer: new s(r.getArg(p, "map"), d)
      };
    });
  }
  return l.prototype = Object.create(s.prototype), l.prototype.constructor = s, l.prototype._version = 3, Object.defineProperty(l.prototype, "sources", {
    get: function() {
      for (var f = [], d = 0; d < this._sections.length; d++)
        for (var y = 0; y < this._sections[d].consumer.sources.length; y++)
          f.push(this._sections[d].consumer.sources[y]);
      return f;
    }
  }), l.prototype.originalPositionFor = function(d) {
    var y = {
      generatedLine: r.getArg(d, "line"),
      generatedColumn: r.getArg(d, "column")
    }, h = t.search(
      y,
      this._sections,
      function(a, p) {
        var g = a.generatedLine - p.generatedOffset.generatedLine;
        return g || a.generatedColumn - p.generatedOffset.generatedColumn;
      }
    ), c = this._sections[h];
    return c ? c.consumer.originalPositionFor({
      line: y.generatedLine - (c.generatedOffset.generatedLine - 1),
      column: y.generatedColumn - (c.generatedOffset.generatedLine === y.generatedLine ? c.generatedOffset.generatedColumn - 1 : 0),
      bias: d.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, l.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(d) {
      return d.consumer.hasContentsOfAllSources();
    });
  }, l.prototype.sourceContentFor = function(d, y) {
    for (var h = 0; h < this._sections.length; h++) {
      var c = this._sections[h], a = c.consumer.sourceContentFor(d, !0);
      if (a)
        return a;
    }
    if (y)
      return null;
    throw new Error('"' + d + '" is not in the SourceMap.');
  }, l.prototype.generatedPositionFor = function(d) {
    for (var y = 0; y < this._sections.length; y++) {
      var h = this._sections[y];
      if (h.consumer._findSourceIndex(r.getArg(d, "source")) !== -1) {
        var c = h.consumer.generatedPositionFor(d);
        if (c) {
          var a = {
            line: c.line + (h.generatedOffset.generatedLine - 1),
            column: c.column + (h.generatedOffset.generatedLine === c.line ? h.generatedOffset.generatedColumn - 1 : 0)
          };
          return a;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, l.prototype._parseMappings = function(d, y) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var h = 0; h < this._sections.length; h++)
      for (var c = this._sections[h], a = c.consumer._generatedMappings, p = 0; p < a.length; p++) {
        var g = a[p], _ = c.consumer._sources.at(g.source);
        _ = r.computeSourceURL(c.consumer.sourceRoot, _, this._sourceMapURL), this._sources.add(_), _ = this._sources.indexOf(_);
        var b = null;
        g.name && (b = c.consumer._names.at(g.name), this._names.add(b), b = this._names.indexOf(b));
        var w = {
          source: _,
          generatedLine: g.generatedLine + (c.generatedOffset.generatedLine - 1),
          generatedColumn: g.generatedColumn + (c.generatedOffset.generatedLine === g.generatedLine ? c.generatedOffset.generatedColumn - 1 : 0),
          originalLine: g.originalLine,
          originalColumn: g.originalColumn,
          name: b
        };
        this.__generatedMappings.push(w), typeof w.originalLine == "number" && this.__originalMappings.push(w);
      }
    n(this.__generatedMappings, r.compareByGeneratedPositionsDeflated), n(this.__originalMappings, r.compareByOriginalPositions);
  }, Xe.IndexedSourceMapConsumer = l, Xe;
}
var Qi = {}, ks;
function yu() {
  if (ks) return Qi;
  ks = 1;
  var r = Eo().SourceMapGenerator, t = yr(), e = /(\r?\n)/, i = 10, n = "$$$isSourceNode$$$";
  function s(o, u, l, f, d) {
    this.children = [], this.sourceContents = {}, this.line = o ?? null, this.column = u ?? null, this.source = l ?? null, this.name = d ?? null, this[n] = !0, f != null && this.add(f);
  }
  return s.fromStringWithSourceMap = function(u, l, f) {
    var d = new s(), y = u.split(e), h = 0, c = function() {
      var b = m(), w = m() || "";
      return b + w;
      function m() {
        return h < y.length ? y[h++] : void 0;
      }
    }, a = 1, p = 0, g = null;
    return l.eachMapping(function(b) {
      if (g !== null)
        if (a < b.generatedLine)
          _(g, c()), a++, p = 0;
        else {
          var w = y[h] || "", m = w.substr(0, b.generatedColumn - p);
          y[h] = w.substr(b.generatedColumn - p), p = b.generatedColumn, _(g, m), g = b;
          return;
        }
      for (; a < b.generatedLine; )
        d.add(c()), a++;
      if (p < b.generatedColumn) {
        var w = y[h] || "";
        d.add(w.substr(0, b.generatedColumn)), y[h] = w.substr(b.generatedColumn), p = b.generatedColumn;
      }
      g = b;
    }, this), h < y.length && (g && _(g, c()), d.add(y.splice(h).join(""))), l.sources.forEach(function(b) {
      var w = l.sourceContentFor(b);
      w != null && (f != null && (b = t.join(f, b)), d.setSourceContent(b, w));
    }), d;
    function _(b, w) {
      if (b === null || b.source === void 0)
        d.add(w);
      else {
        var m = f ? t.join(f, b.source) : b.source;
        d.add(new s(
          b.originalLine,
          b.originalColumn,
          m,
          w,
          b.name
        ));
      }
    }
  }, s.prototype.add = function(u) {
    if (Array.isArray(u))
      u.forEach(function(l) {
        this.add(l);
      }, this);
    else if (u[n] || typeof u == "string")
      u && this.children.push(u);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + u
      );
    return this;
  }, s.prototype.prepend = function(u) {
    if (Array.isArray(u))
      for (var l = u.length - 1; l >= 0; l--)
        this.prepend(u[l]);
    else if (u[n] || typeof u == "string")
      this.children.unshift(u);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + u
      );
    return this;
  }, s.prototype.walk = function(u) {
    for (var l, f = 0, d = this.children.length; f < d; f++)
      l = this.children[f], l[n] ? l.walk(u) : l !== "" && u(l, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, s.prototype.join = function(u) {
    var l, f, d = this.children.length;
    if (d > 0) {
      for (l = [], f = 0; f < d - 1; f++)
        l.push(this.children[f]), l.push(u);
      l.push(this.children[f]), this.children = l;
    }
    return this;
  }, s.prototype.replaceRight = function(u, l) {
    var f = this.children[this.children.length - 1];
    return f[n] ? f.replaceRight(u, l) : typeof f == "string" ? this.children[this.children.length - 1] = f.replace(u, l) : this.children.push("".replace(u, l)), this;
  }, s.prototype.setSourceContent = function(u, l) {
    this.sourceContents[t.toSetString(u)] = l;
  }, s.prototype.walkSourceContents = function(u) {
    for (var l = 0, f = this.children.length; l < f; l++)
      this.children[l][n] && this.children[l].walkSourceContents(u);
    for (var d = Object.keys(this.sourceContents), l = 0, f = d.length; l < f; l++)
      u(t.fromSetString(d[l]), this.sourceContents[d[l]]);
  }, s.prototype.toString = function() {
    var u = "";
    return this.walk(function(l) {
      u += l;
    }), u;
  }, s.prototype.toStringWithSourceMap = function(u) {
    var l = {
      code: "",
      line: 1,
      column: 0
    }, f = new r(u), d = !1, y = null, h = null, c = null, a = null;
    return this.walk(function(p, g) {
      l.code += p, g.source !== null && g.line !== null && g.column !== null ? ((y !== g.source || h !== g.line || c !== g.column || a !== g.name) && f.addMapping({
        source: g.source,
        original: {
          line: g.line,
          column: g.column
        },
        generated: {
          line: l.line,
          column: l.column
        },
        name: g.name
      }), y = g.source, h = g.line, c = g.column, a = g.name, d = !0) : d && (f.addMapping({
        generated: {
          line: l.line,
          column: l.column
        }
      }), y = null, d = !1);
      for (var _ = 0, b = p.length; _ < b; _++)
        p.charCodeAt(_) === i ? (l.line++, l.column = 0, _ + 1 === b ? (y = null, d = !1) : d && f.addMapping({
          source: g.source,
          original: {
            line: g.line,
            column: g.column
          },
          generated: {
            line: l.line,
            column: l.column
          },
          name: g.name
        })) : l.column++;
    }), this.walkSourceContents(function(p, g) {
      f.setSourceContent(p, g);
    }), { code: l.code, map: f };
  }, Qi.SourceNode = s, Qi;
}
var Ps;
function gu() {
  return Ps || (Ps = 1, Ze.SourceMapGenerator = Eo().SourceMapGenerator, Ze.SourceMapConsumer = pu().SourceMapConsumer, Ze.SourceNode = yu().SourceNode), Ze;
}
var xs;
function mu() {
  return xs || (xs = 1, (function(r, t) {
    t.__esModule = !0;
    var e = wt(), i = void 0;
    try {
      var n = gu();
      i = n.SourceNode;
    } catch {
    }
    i || (i = function(u, l, f, d) {
      this.src = "", d && this.add(d);
    }, i.prototype = {
      add: function(l) {
        e.isArray(l) && (l = l.join("")), this.src += l;
      },
      prepend: function(l) {
        e.isArray(l) && (l = l.join("")), this.src = l + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function s(u, l, f) {
      if (e.isArray(u)) {
        for (var d = [], y = 0, h = u.length; y < h; y++)
          d.push(l.wrap(u[y], f));
        return d;
      } else if (typeof u == "boolean" || typeof u == "number")
        return u + "";
      return u;
    }
    function o(u) {
      this.srcFile = u, this.source = [];
    }
    o.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(l, f) {
        this.source.unshift(this.wrap(l, f));
      },
      push: function(l, f) {
        this.source.push(this.wrap(l, f));
      },
      merge: function() {
        var l = this.empty();
        return this.each(function(f) {
          l.add(["  ", f, `
`]);
        }), l;
      },
      each: function(l) {
        for (var f = 0, d = this.source.length; f < d; f++)
          l(this.source[f]);
      },
      empty: function() {
        var l = this.currentLocation || { start: {} };
        return new i(l.start.line, l.start.column, this.srcFile);
      },
      wrap: function(l) {
        var f = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return l instanceof i ? l : (l = s(l, this, f), new i(f.start.line, f.start.column, this.srcFile, l));
      },
      functionCall: function(l, f, d) {
        return d = this.generateList(d), this.wrap([l, f ? "." + f + "(" : "(", d, ")"]);
      },
      quotedString: function(l) {
        return '"' + (l + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(l) {
        var f = this, d = [];
        Object.keys(l).forEach(function(h) {
          var c = s(l[h], f);
          c !== "undefined" && d.push([f.quotedString(h), ":", c]);
        });
        var y = this.generateList(d);
        return y.prepend("{"), y.add("}"), y;
      },
      generateList: function(l) {
        for (var f = this.empty(), d = 0, y = l.length; d < y; d++)
          d && f.add(","), f.add(s(l[d], this));
        return f;
      },
      generateArray: function(l) {
        var f = this.generateList(l);
        return f.prepend("["), f.add("]"), f;
      }
    }, t.default = o, r.exports = t.default;
  })(Hr, Hr.exports)), Hr.exports;
}
var Us;
function _u() {
  return Us || (Us = 1, (function(r, t) {
    t.__esModule = !0;
    function e(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var i = In(), n = Ut(), s = e(n), o = wt(), u = mu(), l = e(u);
    function f(h) {
      this.value = h;
    }
    function d() {
    }
    d.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(c, a) {
        return this.internalNameLookup(c, a);
      },
      depthedLookup: function(c) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(c), ")"];
      },
      compilerInfo: function() {
        var c = i.COMPILER_REVISION, a = i.REVISION_CHANGES[c];
        return [c, a];
      },
      appendToBuffer: function(c, a, p) {
        return o.isArray(c) || (c = [c]), c = this.source.wrap(c, a), this.environment.isSimple ? ["return ", c, ";"] : p ? ["buffer += ", c, ";"] : (c.appendToBuffer = !0, c);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(c, a) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", c, ",", JSON.stringify(a), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(c, a, p, g) {
        this.environment = c, this.options = a, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !g, this.name = this.environment.name, this.isChild = !!p, this.context = p || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(c, a), this.useDepths = this.useDepths || c.useDepths || c.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || c.useBlockParams;
        var _ = c.opcodes, b = void 0, w = void 0, m = void 0, S = void 0;
        for (m = 0, S = _.length; m < S; m++)
          b = _[m], this.source.currentLocation = b.loc, w = w || b.loc, this[b.opcode].apply(this, b.args);
        if (this.source.currentLocation = w, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new s.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), g ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var I = this.createFunctionContext(g);
        if (this.isChild)
          return I;
        var E = {
          compiler: this.compilerInfo(),
          main: I
        };
        this.decorators && (E.main_d = this.decorators, E.useDecorators = !0);
        var R = this.context, q = R.programs, O = R.decorators;
        for (m = 0, S = q.length; m < S; m++)
          q[m] && (E[m] = q[m], O[m] && (E[m + "_d"] = O[m], E.useDecorators = !0));
        return this.environment.usePartial && (E.usePartial = !0), this.options.data && (E.useData = !0), this.useDepths && (E.useDepths = !0), this.useBlockParams && (E.useBlockParams = !0), this.options.compat && (E.compat = !0), g ? E.compilerOptions = this.options : (E.compiler = JSON.stringify(E.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, E = this.objectLiteral(E), a.srcName ? (E = E.toStringWithSourceMap({ file: a.destName }), E.map = E.map && E.map.toString()) : E = E.toString()), E;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new l.default(this.options.srcName), this.decorators = new l.default(this.options.srcName);
      },
      createFunctionContext: function(c) {
        var a = this, p = "", g = this.stackVars.concat(this.registers.list);
        g.length > 0 && (p += ", " + g.join(", "));
        var _ = 0;
        Object.keys(this.aliases).forEach(function(m) {
          var S = a.aliases[m];
          S.children && S.referenceCount > 1 && (p += ", alias" + ++_ + "=" + m, S.children[0] = "alias" + _);
        }), this.lookupPropertyFunctionIsUsed && (p += ", " + this.lookupPropertyFunctionVarDeclaration());
        var b = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && b.push("blockParams"), this.useDepths && b.push("depths");
        var w = this.mergeSource(p);
        return c ? (b.push(w), Function.apply(this, b)) : this.source.wrap(["function(", b.join(","), `) {
  `, w, "}"]);
      },
      mergeSource: function(c) {
        var a = this.environment.isSimple, p = !this.forceBuffer, g = void 0, _ = void 0, b = void 0, w = void 0;
        return this.source.each(function(m) {
          m.appendToBuffer ? (b ? m.prepend("  + ") : b = m, w = m) : (b && (_ ? b.prepend("buffer += ") : g = !0, w.add(";"), b = w = void 0), _ = !0, a || (p = !1));
        }), p ? b ? (b.prepend("return "), w.add(";")) : _ || this.source.push('return "";') : (c += ", buffer = " + (g ? "" : this.initializeBuffer()), b ? (b.prepend("return buffer + "), w.add(";")) : this.source.push("return buffer;")), c && this.source.prepend("var " + c.substring(2) + (g ? "" : `;
`)), this.source.merge();
      },
      lookupPropertyFunctionVarDeclaration: function() {
        return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
      },
      // [blockValue]
      //
      // On stack, before: hash, inverse, program, value
      // On stack, after: return value of blockHelperMissing
      //
      // The purpose of this opcode is to take a block of the form
      // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
      // replace it on the stack with the result of properly
      // invoking blockHelperMissing.
      blockValue: function(c) {
        var a = this.aliasable("container.hooks.blockHelperMissing"), p = [this.contextName(0)];
        this.setupHelperArgs(c, 0, p);
        var g = this.popStack();
        p.splice(1, 0, g), this.push(this.source.functionCall(a, "call", p));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var c = this.aliasable("container.hooks.blockHelperMissing"), a = [this.contextName(0)];
        this.setupHelperArgs("", 0, a, !0), this.flushInline();
        var p = this.topStack();
        a.splice(1, 0, p), this.pushSource(["if (!", this.lastHelper, ") { ", p, " = ", this.source.functionCall(c, "call", a), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(c) {
        this.pendingContent ? c = this.pendingContent + c : this.pendingLocation = this.source.currentLocation, this.pendingContent = c;
      },
      // [append]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Coerces `value` to a String and appends it to the current buffer.
      //
      // If `value` is truthy, or 0, it is coerced into a string and appended
      // Otherwise, the empty string is appended
      append: function() {
        if (this.isInline())
          this.replaceStack(function(a) {
            return [" != null ? ", a, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var c = this.popStack();
          this.pushSource(["if (", c, " != null) { ", this.appendToBuffer(c, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
        }
      },
      // [appendEscaped]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Escape `value` and append it to the buffer
      appendEscaped: function() {
        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
      },
      // [getContext]
      //
      // On stack, before: ...
      // On stack, after: ...
      // Compiler value, after: lastContext=depth
      //
      // Set the value of the `lastContext` compiler value to the depth
      getContext: function(c) {
        this.lastContext = c;
      },
      // [pushContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext, ...
      //
      // Pushes the value of the current context onto the stack.
      pushContext: function() {
        this.pushStackLiteral(this.contextName(this.lastContext));
      },
      // [lookupOnContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext[name], ...
      //
      // Looks up the value of `name` on the current context and pushes
      // it onto the stack.
      lookupOnContext: function(c, a, p, g) {
        var _ = 0;
        !g && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(c[_++])) : this.pushContext(), this.resolvePath("context", c, _, a, p);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(c, a) {
        this.useBlockParams = !0, this.push(["blockParams[", c[0], "][", c[1], "]"]), this.resolvePath("context", a, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(c, a, p) {
        c ? this.pushStackLiteral("container.data(data, " + c + ")") : this.pushStackLiteral("data"), this.resolvePath("data", a, 0, !0, p);
      },
      resolvePath: function(c, a, p, g, _) {
        var b = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(y(this.options.strict && _, this, a, p, c));
          return;
        }
        for (var w = a.length; p < w; p++)
          this.replaceStack(function(m) {
            var S = b.nameLookup(m, a[p], c);
            return g ? [" && ", S] : [" != null ? ", S, " : ", m];
          });
      },
      // [resolvePossibleLambda]
      //
      // On stack, before: value, ...
      // On stack, after: resolved value, ...
      //
      // If the `value` is a lambda, replace it on the stack by
      // the return value of the lambda
      resolvePossibleLambda: function() {
        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
      },
      // [pushStringParam]
      //
      // On stack, before: ...
      // On stack, after: string, currentContext, ...
      //
      // This opcode is designed for use in string mode, which
      // provides the string value of a parameter along with its
      // depth rather than resolving it immediately.
      pushStringParam: function(c, a) {
        this.pushContext(), this.pushString(a), a !== "SubExpression" && (typeof c == "string" ? this.pushString(c) : this.pushStackLiteral(c));
      },
      emptyHash: function(c) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(c ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var c = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(c.ids)), this.stringParams && (this.push(this.objectLiteral(c.contexts)), this.push(this.objectLiteral(c.types))), this.push(this.objectLiteral(c.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(c) {
        this.pushStackLiteral(this.quotedString(c));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(c) {
        this.pushStackLiteral(c);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(c) {
        c != null ? this.pushStackLiteral(this.programExpression(c)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(c, a) {
        var p = this.nameLookup("decorators", a, "decorator"), g = this.setupHelperArgs(a, c);
        this.decorators.push(["fn = ", this.decorators.functionCall(p, "", ["fn", "props", "container", g]), " || fn;"]);
      },
      // [invokeHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // Pops off the helper's parameters, invokes the helper,
      // and pushes the helper's return value onto the stack.
      //
      // If the helper is not found, `helperMissing` is called.
      invokeHelper: function(c, a, p) {
        var g = this.popStack(), _ = this.setupHelper(c, a), b = [];
        p && b.push(_.name), b.push(g), this.options.strict || b.push(this.aliasable("container.hooks.helperMissing"));
        var w = ["(", this.itemsSeparatedBy(b, "||"), ")"], m = this.source.functionCall(w, "call", _.callParams);
        this.push(m);
      },
      itemsSeparatedBy: function(c, a) {
        var p = [];
        p.push(c[0]);
        for (var g = 1; g < c.length; g++)
          p.push(a, c[g]);
        return p;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(c, a) {
        var p = this.setupHelper(c, a);
        this.push(this.source.functionCall(p.name, "call", p.callParams));
      },
      // [invokeAmbiguous]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of disambiguation
      //
      // This operation is used when an expression like `{{foo}}`
      // is provided, but we don't know at compile-time whether it
      // is a helper or a path.
      //
      // This operation emits more code than the other options,
      // and can be avoided by passing the `knownHelpers` and
      // `knownHelpersOnly` flags at compile-time.
      invokeAmbiguous: function(c, a) {
        this.useRegister("helper");
        var p = this.popStack();
        this.emptyHash();
        var g = this.setupHelper(0, c, a), _ = this.lastHelper = this.nameLookup("helpers", c, "helper"), b = ["(", "(helper = ", _, " || ", p, ")"];
        this.options.strict || (b[0] = "(helper = ", b.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", b, g.paramsInit ? ["),(", g.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", g.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(c, a, p) {
        var g = [], _ = this.setupParams(a, 1, g);
        c && (a = this.popStack(), delete _.name), p && (_.indent = JSON.stringify(p)), _.helpers = "helpers", _.partials = "partials", _.decorators = "container.decorators", c ? g.unshift(a) : g.unshift(this.nameLookup("partials", a, "partial")), this.options.compat && (_.depths = "depths"), _ = this.objectLiteral(_), g.push(_), this.push(this.source.functionCall("container.invokePartial", "", g));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(c) {
        var a = this.popStack(), p = void 0, g = void 0, _ = void 0;
        this.trackIds && (_ = this.popStack()), this.stringParams && (g = this.popStack(), p = this.popStack());
        var b = this.hash;
        p && (b.contexts[c] = p), g && (b.types[c] = g), _ && (b.ids[c] = _), b.values[c] = a;
      },
      pushId: function(c, a, p) {
        c === "BlockParam" ? this.pushStackLiteral("blockParams[" + a[0] + "].path[" + a[1] + "]" + (p ? " + " + JSON.stringify("." + p) : "")) : c === "PathExpression" ? this.pushString(a) : c === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: d,
      compileChildren: function(c, a) {
        for (var p = c.children, g = void 0, _ = void 0, b = 0, w = p.length; b < w; b++) {
          g = p[b], _ = new this.compiler();
          var m = this.matchExistingProgram(g);
          if (m == null) {
            this.context.programs.push("");
            var S = this.context.programs.length;
            g.index = S, g.name = "program" + S, this.context.programs[S] = _.compile(g, a, this.context, !this.precompile), this.context.decorators[S] = _.decorators, this.context.environments[S] = g, this.useDepths = this.useDepths || _.useDepths, this.useBlockParams = this.useBlockParams || _.useBlockParams, g.useDepths = this.useDepths, g.useBlockParams = this.useBlockParams;
          } else
            g.index = m.index, g.name = "program" + m.index, this.useDepths = this.useDepths || m.useDepths, this.useBlockParams = this.useBlockParams || m.useBlockParams;
        }
      },
      matchExistingProgram: function(c) {
        for (var a = 0, p = this.context.environments.length; a < p; a++) {
          var g = this.context.environments[a];
          if (g && g.equals(c))
            return g;
        }
      },
      programExpression: function(c) {
        var a = this.environment.children[c], p = [a.index, "data", a.blockParams];
        return (this.useBlockParams || this.useDepths) && p.push("blockParams"), this.useDepths && p.push("depths"), "container.program(" + p.join(", ") + ")";
      },
      useRegister: function(c) {
        this.registers[c] || (this.registers[c] = !0, this.registers.list.push(c));
      },
      push: function(c) {
        return c instanceof f || (c = this.source.wrap(c)), this.inlineStack.push(c), c;
      },
      pushStackLiteral: function(c) {
        this.push(new f(c));
      },
      pushSource: function(c) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), c && this.source.push(c);
      },
      replaceStack: function(c) {
        var a = ["("], p = void 0, g = void 0, _ = void 0;
        if (!this.isInline())
          throw new s.default("replaceStack on non-inline");
        var b = this.popStack(!0);
        if (b instanceof f)
          p = [b.value], a = ["(", p], _ = !0;
        else {
          g = !0;
          var w = this.incrStack();
          a = ["((", this.push(w), " = ", b, ")"], p = this.topStack();
        }
        var m = c.call(this, p);
        _ || this.popStack(), g && this.stackSlot--, this.push(a.concat(m, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var c = this.inlineStack;
        this.inlineStack = [];
        for (var a = 0, p = c.length; a < p; a++) {
          var g = c[a];
          if (g instanceof f)
            this.compileStack.push(g);
          else {
            var _ = this.incrStack();
            this.pushSource([_, " = ", g, ";"]), this.compileStack.push(_);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(c) {
        var a = this.isInline(), p = (a ? this.inlineStack : this.compileStack).pop();
        if (!c && p instanceof f)
          return p.value;
        if (!a) {
          if (!this.stackSlot)
            throw new s.default("Invalid stack pop");
          this.stackSlot--;
        }
        return p;
      },
      topStack: function() {
        var c = this.isInline() ? this.inlineStack : this.compileStack, a = c[c.length - 1];
        return a instanceof f ? a.value : a;
      },
      contextName: function(c) {
        return this.useDepths && c ? "depths[" + c + "]" : "depth" + c;
      },
      quotedString: function(c) {
        return this.source.quotedString(c);
      },
      objectLiteral: function(c) {
        return this.source.objectLiteral(c);
      },
      aliasable: function(c) {
        var a = this.aliases[c];
        return a ? (a.referenceCount++, a) : (a = this.aliases[c] = this.source.wrap(c), a.aliasable = !0, a.referenceCount = 1, a);
      },
      setupHelper: function(c, a, p) {
        var g = [], _ = this.setupHelperArgs(a, c, g, p), b = this.nameLookup("helpers", a, "helper"), w = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: g,
          paramsInit: _,
          name: b,
          callParams: [w].concat(g)
        };
      },
      setupParams: function(c, a, p) {
        var g = {}, _ = [], b = [], w = [], m = !p, S = void 0;
        m && (p = []), g.name = this.quotedString(c), g.hash = this.popStack(), this.trackIds && (g.hashIds = this.popStack()), this.stringParams && (g.hashTypes = this.popStack(), g.hashContexts = this.popStack());
        var I = this.popStack(), E = this.popStack();
        (E || I) && (g.fn = E || "container.noop", g.inverse = I || "container.noop");
        for (var R = a; R--; )
          S = this.popStack(), p[R] = S, this.trackIds && (w[R] = this.popStack()), this.stringParams && (b[R] = this.popStack(), _[R] = this.popStack());
        return m && (g.args = this.source.generateArray(p)), this.trackIds && (g.ids = this.source.generateArray(w)), this.stringParams && (g.types = this.source.generateArray(b), g.contexts = this.source.generateArray(_)), this.options.data && (g.data = "data"), this.useBlockParams && (g.blockParams = "blockParams"), g;
      },
      setupHelperArgs: function(c, a, p, g) {
        var _ = this.setupParams(c, a, p);
        return _.loc = JSON.stringify(this.source.currentLocation), _ = this.objectLiteral(_), g ? (this.useRegister("options"), p.push("options"), ["options=", _]) : p ? (p.push(_), "") : _;
      }
    }, (function() {
      for (var h = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), c = d.RESERVED_WORDS = {}, a = 0, p = h.length; a < p; a++)
        c[h[a]] = !0;
    })(), d.isValidJavaScriptVariableName = function(h) {
      return !d.RESERVED_WORDS[h] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(h);
    };
    function y(h, c, a, p, g) {
      var _ = c.popStack(), b = a.length;
      for (h && b--; p < b; p++)
        _ = c.nameLookup(_, a[p], g);
      return h ? [c.aliasable("container.strict"), "(", _, ", ", c.quotedString(a[p]), ", ", JSON.stringify(c.source.currentLocation), " )"] : _;
    }
    t.default = d, r.exports = t.default;
  })(qr, qr.exports)), qr.exports;
}
var Vs;
function vu() {
  return Vs || (Vs = 1, (function(r, t) {
    t.__esModule = !0;
    function e(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var i = nu(), n = e(i), s = bo(), o = e(s), u = cu(), l = uu(), f = _u(), d = e(f), y = So(), h = e(y), c = vo(), a = e(c), p = n.default.create;
    function g() {
      var b = p();
      return b.compile = function(w, m) {
        return l.compile(w, m, b);
      }, b.precompile = function(w, m) {
        return l.precompile(w, m, b);
      }, b.AST = o.default, b.Compiler = l.Compiler, b.JavaScriptCompiler = d.default, b.Parser = u.parser, b.parse = u.parse, b.parseWithoutProcessing = u.parseWithoutProcessing, b;
    }
    var _ = g();
    _.create = g, a.default(_), _.Visitor = h.default, _.default = _, t.default = _, r.exports = t.default;
  })(Sr, Sr.exports)), Sr.exports;
}
var bu = vu();
const Su = /* @__PURE__ */ Wc(bu);
function V(r, t, e, i) {
  function n(s) {
    return s instanceof e ? s : new e(function(o) {
      o(s);
    });
  }
  return new (e || (e = Promise))(function(s, o) {
    function u(d) {
      try {
        f(i.next(d));
      } catch (y) {
        o(y);
      }
    }
    function l(d) {
      try {
        f(i.throw(d));
      } catch (y) {
        o(y);
      }
    }
    function f(d) {
      d.done ? s(d.value) : n(d.value).then(u, l);
    }
    f((i = i.apply(r, t || [])).next());
  });
}
function zs(r) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], i = 0;
  if (e) return e.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function z(r) {
  return this instanceof z ? (this.v = r, this) : new z(r);
}
function Yt(r, t, e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = e.apply(r, t || []), n, s = [];
  return n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", o), n[Symbol.asyncIterator] = function() {
    return this;
  }, n;
  function o(c) {
    return function(a) {
      return Promise.resolve(a).then(c, y);
    };
  }
  function u(c, a) {
    i[c] && (n[c] = function(p) {
      return new Promise(function(g, _) {
        s.push([c, p, g, _]) > 1 || l(c, p);
      });
    }, a && (n[c] = a(n[c])));
  }
  function l(c, a) {
    try {
      f(i[c](a));
    } catch (p) {
      h(s[0][3], p);
    }
  }
  function f(c) {
    c.value instanceof z ? Promise.resolve(c.value.v).then(d, y) : h(s[0][2], c);
  }
  function d(c) {
    l("next", c);
  }
  function y(c) {
    l("throw", c);
  }
  function h(c, a) {
    c(a), s.shift(), s.length && l(s[0][0], s[0][1]);
  }
}
function Qr(r) {
  var t, e;
  return t = {}, i("next"), i("throw", function(n) {
    throw n;
  }), i("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function i(n, s) {
    t[n] = r[n] ? function(o) {
      return (e = !e) ? { value: z(r[n](o)), done: !1 } : s ? s(o) : o;
    } : s;
  }
}
function ve(r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = r[Symbol.asyncIterator], e;
  return t ? t.call(r) : (r = typeof zs == "function" ? zs(r) : r[Symbol.iterator](), e = {}, i("next"), i("throw"), i("return"), e[Symbol.asyncIterator] = function() {
    return this;
  }, e);
  function i(s) {
    e[s] = r[s] && function(o) {
      return new Promise(function(u, l) {
        o = r[s](o), n(u, l, o.done, o.value);
      });
    };
  }
  function n(s, o, u, l) {
    Promise.resolve(l).then(function(f) {
      s({ value: f, done: u });
    }, o);
  }
}
const Iu = new TextDecoder("utf-8"), cn = (r) => Iu.decode(r), wu = new TextEncoder(), wn = (r) => wu.encode(r), Eu = (r) => typeof r == "number", Ao = (r) => typeof r == "boolean", ct = (r) => typeof r == "function", St = (r) => r != null && Object(r) === r, be = (r) => St(r) && ct(r.then), gr = (r) => St(r) && ct(r[Symbol.iterator]), Ye = (r) => St(r) && ct(r[Symbol.asyncIterator]), un = (r) => St(r) && St(r.schema), Oo = (r) => St(r) && "done" in r && "value" in r, Ro = (r) => St(r) && ct(r.stat) && Eu(r.fd), Lo = (r) => St(r) && En(r.body), xi = (r) => "_getDOMStream" in r && "_getNodeStream" in r, Au = (r) => St(r) && ct(r.abort) && ct(r.getWriter) && !xi(r), En = (r) => St(r) && ct(r.cancel) && ct(r.getReader) && !xi(r), Ou = (r) => St(r) && ct(r.end) && ct(r.write) && Ao(r.writable) && !xi(r), Bo = (r) => St(r) && ct(r.read) && ct(r.pipe) && Ao(r.readable) && !xi(r), Ru = (r) => St(r) && ct(r.clear) && ct(r.bytes) && ct(r.position) && ct(r.setPosition) && ct(r.capacity) && ct(r.getBufferIdentifier) && ct(r.createLong), An = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function Lu(r) {
  const t = r[0] ? [r[0]] : [];
  let e, i, n, s;
  for (let o, u, l = 0, f = 0, d = r.length; ++l < d; ) {
    if (o = t[f], u = r[l], !o || !u || o.buffer !== u.buffer || u.byteOffset < o.byteOffset) {
      u && (t[++f] = u);
      continue;
    }
    if ({ byteOffset: e, byteLength: n } = o, { byteOffset: i, byteLength: s } = u, e + n < i || i + s < e) {
      u && (t[++f] = u);
      continue;
    }
    t[f] = new Uint8Array(o.buffer, e, i - e + s);
  }
  return t;
}
function qs(r, t, e = 0, i = t.byteLength) {
  const n = r.byteLength, s = new Uint8Array(r.buffer, r.byteOffset, n), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(i, n));
  return s.set(o, e), r;
}
function Qt(r, t) {
  const e = Lu(r), i = e.reduce((d, y) => d + y.byteLength, 0);
  let n, s, o, u = 0, l = -1;
  const f = Math.min(t || Number.POSITIVE_INFINITY, i);
  for (const d = e.length; ++l < d; ) {
    if (n = e[l], s = n.subarray(0, Math.min(n.length, f - u)), f <= u + s.length) {
      s.length < n.length ? e[l] = n.subarray(s.length) : s.length === n.length && l++, o ? qs(o, s, u) : o = s;
      break;
    }
    qs(o || (o = new Uint8Array(f)), s, u), u += s.length;
  }
  return [o || new Uint8Array(0), e.slice(l), i - (o ? o.byteLength : 0)];
}
function tt(r, t) {
  let e = Oo(t) ? t.value : t;
  return e instanceof r ? r === Uint8Array ? new r(e.buffer, e.byteOffset, e.byteLength) : e : e ? (typeof e == "string" && (e = wn(e)), e instanceof ArrayBuffer ? new r(e) : e instanceof An ? new r(e) : Ru(e) ? tt(r, e.bytes()) : ArrayBuffer.isView(e) ? e.byteLength <= 0 ? new r(0) : new r(e.buffer, e.byteOffset, e.byteLength / r.BYTES_PER_ELEMENT) : r.from(e)) : new r(0);
}
const $e = (r) => tt(Int32Array, r), Hs = (r) => tt(BigInt64Array, r), j = (r) => tt(Uint8Array, r), ln = (r) => (r.next(), r);
function* Bu(r, t) {
  const e = function* (n) {
    yield n;
  }, i = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof An ? e(t) : gr(t) ? t : e(t);
  return yield* ln((function* (n) {
    let s = null;
    do
      s = n.next(yield tt(r, s));
    while (!s.done);
  })(i[Symbol.iterator]())), new r();
}
const Nu = (r) => Bu(Uint8Array, r);
function No(r, t) {
  return Yt(this, arguments, function* () {
    if (be(t))
      return yield z(yield z(yield* Qr(ve(No(r, yield z(t))))));
    const i = function(o) {
      return Yt(this, arguments, function* () {
        yield yield z(yield z(o));
      });
    }, n = function(o) {
      return Yt(this, arguments, function* () {
        yield z(yield* Qr(ve(ln((function* (u) {
          let l = null;
          do
            l = u.next(yield l?.value);
          while (!l.done);
        })(o[Symbol.iterator]())))));
      });
    }, s = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof An ? i(t) : gr(t) ? n(t) : Ye(t) ? t : i(t);
    return yield z(
      // otherwise if AsyncIterable, use it
      yield* Qr(ve(ln((function(o) {
        return Yt(this, arguments, function* () {
          let u = null;
          do
            u = yield z(o.next(yield yield z(tt(r, u))));
          while (!u.done);
        });
      })(s[Symbol.asyncIterator]()))))
    ), yield z(new r());
  });
}
const Du = (r) => No(Uint8Array, r);
function Do(r, t, e) {
  if (r !== 0) {
    e = e.slice(0, t);
    for (let i = -1, n = e.length; ++i < n; )
      e[i] += r;
  }
  return e.subarray(0, t);
}
function Tu(r, t) {
  let e = 0;
  const i = r.length;
  if (i !== t.length)
    return !1;
  if (i > 0)
    do
      if (r[e] !== t[e])
        return !1;
    while (++e < i);
  return !0;
}
const Nt = {
  fromIterable(r) {
    return jr(Fu(r));
  },
  fromAsyncIterable(r) {
    return jr(Mu(r));
  },
  fromDOMStream(r) {
    return jr(Cu(r));
  },
  fromNodeStream(r) {
    return jr(Pu(r));
  },
  // @ts-ignore
  toDOMStream(r, t) {
    throw new Error('"toDOMStream" not available in this environment');
  },
  // @ts-ignore
  toNodeStream(r, t) {
    throw new Error('"toNodeStream" not available in this environment');
  }
}, jr = (r) => (r.next(), r);
function* Fu(r) {
  let t, e = !1, i = [], n, s, o, u = 0;
  function l() {
    return s === "peek" ? Qt(i, o)[0] : ([n, i, u] = Qt(i, o), n);
  }
  ({ cmd: s, size: o } = (yield null) || { cmd: "read", size: 0 });
  const f = Nu(r)[Symbol.iterator]();
  try {
    do
      if ({ done: t, value: n } = Number.isNaN(o - u) ? f.next() : f.next(o - u), !t && n.byteLength > 0 && (i.push(n), u += n.byteLength), t || o <= u)
        do
          ({ cmd: s, size: o } = yield l());
        while (o < u);
    while (!t);
  } catch (d) {
    (e = !0) && typeof f.throw == "function" && f.throw(d);
  } finally {
    e === !1 && typeof f.return == "function" && f.return(null);
  }
  return null;
}
function Mu(r) {
  return Yt(this, arguments, function* () {
    let e, i = !1, n = [], s, o, u, l = 0;
    function f() {
      return o === "peek" ? Qt(n, u)[0] : ([s, n, l] = Qt(n, u), s);
    }
    ({ cmd: o, size: u } = (yield yield z(null)) || { cmd: "read", size: 0 });
    const d = Du(r)[Symbol.asyncIterator]();
    try {
      do
        if ({ done: e, value: s } = Number.isNaN(u - l) ? yield z(d.next()) : yield z(d.next(u - l)), !e && s.byteLength > 0 && (n.push(s), l += s.byteLength), e || u <= l)
          do
            ({ cmd: o, size: u } = yield yield z(f()));
          while (u < l);
      while (!e);
    } catch (y) {
      (i = !0) && typeof d.throw == "function" && (yield z(d.throw(y)));
    } finally {
      i === !1 && typeof d.return == "function" && (yield z(d.return(new Uint8Array(0))));
    }
    return yield z(null);
  });
}
function Cu(r) {
  return Yt(this, arguments, function* () {
    let e = !1, i = !1, n = [], s, o, u, l = 0;
    function f() {
      return o === "peek" ? Qt(n, u)[0] : ([s, n, l] = Qt(n, u), s);
    }
    ({ cmd: o, size: u } = (yield yield z(null)) || { cmd: "read", size: 0 });
    const d = new ku(r);
    try {
      do
        if ({ done: e, value: s } = Number.isNaN(u - l) ? yield z(d.read()) : yield z(d.read(u - l)), !e && s.byteLength > 0 && (n.push(j(s)), l += s.byteLength), e || u <= l)
          do
            ({ cmd: o, size: u } = yield yield z(f()));
          while (u < l);
      while (!e);
    } catch (y) {
      (i = !0) && (yield z(d.cancel(y)));
    } finally {
      i === !1 ? yield z(d.cancel()) : r.locked && d.releaseLock();
    }
    return yield z(null);
  });
}
class ku {
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
    return V(this, void 0, void 0, function* () {
      const { reader: e, source: i } = this;
      e && (yield e.cancel(t).catch(() => {
      })), i && i.locked && this.releaseLock();
    });
  }
  read(t) {
    return V(this, void 0, void 0, function* () {
      if (t === 0)
        return { done: this.reader == null, value: new Uint8Array(0) };
      const e = yield this.reader.read();
      return !e.done && (e.value = j(e)), e;
    });
  }
}
const Ji = (r, t) => {
  const e = (n) => i([t, n]);
  let i;
  return [t, e, new Promise((n) => (i = n) && r.once(t, e))];
};
function Pu(r) {
  return Yt(this, arguments, function* () {
    const e = [];
    let i = "error", n = !1, s = null, o, u, l = 0, f = [], d;
    function y() {
      return o === "peek" ? Qt(f, u)[0] : ([d, f, l] = Qt(f, u), d);
    }
    if ({ cmd: o, size: u } = (yield yield z(null)) || { cmd: "read", size: 0 }, r.isTTY)
      return yield yield z(new Uint8Array(0)), yield z(null);
    try {
      e[0] = Ji(r, "end"), e[1] = Ji(r, "error");
      do {
        if (e[2] = Ji(r, "readable"), [i, s] = yield z(Promise.race(e.map((c) => c[2]))), i === "error")
          break;
        if ((n = i === "end") || (Number.isFinite(u - l) ? (d = j(r.read(u - l)), d.byteLength < u - l && (d = j(r.read()))) : d = j(r.read()), d.byteLength > 0 && (f.push(d), l += d.byteLength)), n || u <= l)
          do
            ({ cmd: o, size: u } = yield yield z(y()));
          while (u < l);
      } while (!n);
    } finally {
      yield z(h(e, i === "error" ? s : null));
    }
    return yield z(null);
    function h(c, a) {
      return d = f = null, new Promise((p, g) => {
        for (const [_, b] of c)
          r.off(_, b);
        try {
          const _ = r.destroy;
          _ && _.call(r, a), a = void 0;
        } catch (_) {
          a = _ || a;
        } finally {
          a != null ? g(a) : p();
        }
      });
    }
  });
}
var at;
(function(r) {
  r[r.V1 = 0] = "V1", r[r.V2 = 1] = "V2", r[r.V3 = 2] = "V3", r[r.V4 = 3] = "V4", r[r.V5 = 4] = "V5";
})(at || (at = {}));
var ht;
(function(r) {
  r[r.Sparse = 0] = "Sparse", r[r.Dense = 1] = "Dense";
})(ht || (ht = {}));
var lt;
(function(r) {
  r[r.HALF = 0] = "HALF", r[r.SINGLE = 1] = "SINGLE", r[r.DOUBLE = 2] = "DOUBLE";
})(lt || (lt = {}));
var Mt;
(function(r) {
  r[r.DAY = 0] = "DAY", r[r.MILLISECOND = 1] = "MILLISECOND";
})(Mt || (Mt = {}));
var M;
(function(r) {
  r[r.SECOND = 0] = "SECOND", r[r.MILLISECOND = 1] = "MILLISECOND", r[r.MICROSECOND = 2] = "MICROSECOND", r[r.NANOSECOND = 3] = "NANOSECOND";
})(M || (M = {}));
var Jt;
(function(r) {
  r[r.YEAR_MONTH = 0] = "YEAR_MONTH", r[r.DAY_TIME = 1] = "DAY_TIME", r[r.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(Jt || (Jt = {}));
const Zi = 2, Wt = 4, ie = 4, Z = 4, le = new Int32Array(2), Ws = new Float32Array(le.buffer), Gs = new Float64Array(le.buffer), Yr = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var hn;
(function(r) {
  r[r.UTF8_BYTES = 1] = "UTF8_BYTES", r[r.UTF16_STRING = 2] = "UTF16_STRING";
})(hn || (hn = {}));
let qe = class To {
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
    return new To(new Uint8Array(t));
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
    return le[0] = this.readInt32(t), Ws[0];
  }
  readFloat64(t) {
    return le[Yr ? 0 : 1] = this.readInt32(t), le[Yr ? 1 : 0] = this.readInt32(t + 4), Gs[0];
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
    Ws[0] = e, this.writeInt32(t, le[0]);
  }
  writeFloat64(t, e) {
    Gs[0] = e, this.writeInt32(t, le[Yr ? 0 : 1]), this.writeInt32(t + 4, le[Yr ? 1 : 0]);
  }
  /**
   * Return the file identifier.   Behavior is undefined for FlatBuffers whose
   * schema does not include a file_identifier (likely points at padding or the
   * start of a the root vtable).
   */
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + Wt + ie)
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let e = 0; e < ie; e++)
      t += String.fromCharCode(this.readInt8(this.position_ + Wt + e));
    return t;
  }
  /**
   * Look up a field in the vtable, return an offset into the object, or 0 if the
   * field is not present.
   */
  __offset(t, e) {
    const i = t - this.readInt32(t);
    return e < this.readInt16(i) ? this.readInt16(i + e) : 0;
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
    const i = this.readInt32(t);
    t += Wt;
    const n = this.bytes_.subarray(t, t + i);
    return e === hn.UTF8_BYTES ? n : this.text_decoder_.decode(n);
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
    return t + this.readInt32(t) + Wt;
  }
  /**
   * Get the length of a vector whose offset is stored at "offset" in this object.
   */
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != ie)
      throw new Error("FlatBuffers: file identifier must be length " + ie);
    for (let e = 0; e < ie; e++)
      if (t.charCodeAt(e) != this.readInt8(this.position() + Wt + e))
        return !1;
    return !0;
  }
  /**
   * A helper function for generating list for obj api
   */
  createScalarList(t, e) {
    const i = [];
    for (let n = 0; n < e; ++n) {
      const s = t(n);
      s !== null && i.push(s);
    }
    return i;
  }
  /**
   * A helper function for generating list for obj api
   * @param listAccessor function that accepts an index and return data at that index
   * @param listLength listLength
   * @param res result list
   */
  createObjList(t, e) {
    const i = [];
    for (let n = 0; n < e; ++n) {
      const s = t(n);
      s !== null && i.push(s.unpack());
    }
    return i;
  }
}, Fo = class Mo {
  /**
   * Create a FlatBufferBuilder.
   */
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null, this.text_encoder = new TextEncoder();
    let e;
    t ? e = t : e = 1024, this.bb = qe.allocate(e), this.space = e;
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
    const i = ~(this.bb.capacity() - this.space + e) + 1 & t - 1;
    for (; this.space < i + t + e; ) {
      const n = this.bb.capacity();
      this.bb = Mo.growByteBuffer(this.bb), this.space += this.bb.capacity() - n;
    }
    this.pad(i);
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
  addFieldInt8(t, e, i) {
    (this.force_defaults || e != i) && (this.addInt8(e), this.slot(t));
  }
  addFieldInt16(t, e, i) {
    (this.force_defaults || e != i) && (this.addInt16(e), this.slot(t));
  }
  addFieldInt32(t, e, i) {
    (this.force_defaults || e != i) && (this.addInt32(e), this.slot(t));
  }
  addFieldInt64(t, e, i) {
    (this.force_defaults || e !== i) && (this.addInt64(e), this.slot(t));
  }
  addFieldFloat32(t, e, i) {
    (this.force_defaults || e != i) && (this.addFloat32(e), this.slot(t));
  }
  addFieldFloat64(t, e, i) {
    (this.force_defaults || e != i) && (this.addFloat64(e), this.slot(t));
  }
  addFieldOffset(t, e, i) {
    (this.force_defaults || e != i) && (this.addOffset(e), this.slot(t));
  }
  /**
   * Structs are stored inline, so nothing additional is being added. `d` is always 0.
   */
  addFieldStruct(t, e, i) {
    e != i && (this.nested(e), this.slot(t));
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
    const i = e << 1, n = qe.allocate(i);
    return n.setPosition(i - e), n.bytes().set(t.bytes(), i - e), n;
  }
  /**
   * Adds on offset, relative to where it will be written.
   *
   * @param offset The offset to add.
   */
  addOffset(t) {
    this.prep(Wt, 0), this.writeInt32(this.offset() - t + Wt);
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
    const i = e + 1;
    for (; e >= 0; e--)
      this.addInt16(this.vtable[e] != 0 ? t - this.vtable[e] : 0);
    const n = 2;
    this.addInt16(t - this.object_start);
    const s = (i + n) * Zi;
    this.addInt16(s);
    let o = 0;
    const u = this.space;
    t: for (e = 0; e < this.vtables.length; e++) {
      const l = this.bb.capacity() - this.vtables[e];
      if (s == this.bb.readInt16(l)) {
        for (let f = Zi; f < s; f += Zi)
          if (this.bb.readInt16(u + f) != this.bb.readInt16(l + f))
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
  finish(t, e, i) {
    const n = i ? Z : 0;
    if (e) {
      const s = e;
      if (this.prep(this.minalign, Wt + ie + n), s.length != ie)
        throw new TypeError("FlatBuffers: file identifier must be length " + ie);
      for (let o = ie - 1; o >= 0; o--)
        this.writeInt8(s.charCodeAt(o));
    }
    this.prep(this.minalign, Wt + n), this.addOffset(t), n && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
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
    const i = this.bb.capacity() - t, n = i - this.bb.readInt32(i);
    if (!(e < this.bb.readInt16(n) && this.bb.readInt16(n + e) != 0))
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
  startVector(t, e, i) {
    this.notNested(), this.vector_num_elems = e, this.prep(Wt, t * e), this.prep(i, t * e);
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
    for (let i = 0; i < t.length; ++i) {
      const n = t[i];
      if (n !== null)
        e.push(this.createObjectOffset(n));
      else
        throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
    }
    return e;
  }
  createStructOffsetList(t, e) {
    return e(this, t.length), this.createObjectOffsetList(t.slice().reverse()), this.endVector();
  }
};
var oi;
(function(r) {
  r[r.BUFFER = 0] = "BUFFER";
})(oi || (oi = {}));
var ai;
(function(r) {
  r[r.LZ4_FRAME = 0] = "LZ4_FRAME", r[r.ZSTD = 1] = "ZSTD";
})(ai || (ai = {}));
class he {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBodyCompression(t, e) {
    return (e || new he()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, e) {
    return t.setPosition(t.position() + Z), (e || new he()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Compressor library.
   * For LZ4_FRAME, each compressed buffer must consist of a single frame.
   */
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : ai.LZ4_FRAME;
  }
  /**
   * Indicates the way the record batch body was compressed
   */
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : oi.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, e) {
    t.addFieldInt8(0, e, ai.LZ4_FRAME);
  }
  static addMethod(t, e) {
    t.addFieldInt8(1, e, oi.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, e, i) {
    return he.startBodyCompression(t), he.addCodec(t, e), he.addMethod(t, i), he.endBodyCompression(t);
  }
}
class Co {
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
  static createBuffer(t, e, i) {
    return t.prep(8, 16), t.writeInt64(BigInt(i ?? 0)), t.writeInt64(BigInt(e ?? 0)), t.offset();
  }
}
let ko = class {
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
  static createFieldNode(t, e, i) {
    return t.prep(8, 16), t.writeInt64(BigInt(i ?? 0)), t.writeInt64(BigInt(e ?? 0)), t.offset();
  }
}, te = class dn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsRecordBatch(t, e) {
    return (e || new dn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, e) {
    return t.setPosition(t.position() + Z), (e || new dn()).__init(t.readInt32(t.position()) + t.position(), t);
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
    const i = this.bb.__offset(this.bb_pos, 6);
    return i ? (e || new ko()).__init(this.bb.__vector(this.bb_pos + i) + t * 16, this.bb) : null;
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
    const i = this.bb.__offset(this.bb_pos, 8);
    return i ? (e || new Co()).__init(this.bb.__vector(this.bb_pos + i) + t * 16, this.bb) : null;
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
    return e ? (t || new he()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
}, Re = class fn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryBatch(t, e) {
    return (e || new fn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, e) {
    return t.setPosition(t.position() + Z), (e || new fn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  data(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new te()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
var He;
(function(r) {
  r[r.Little = 0] = "Little", r[r.Big = 1] = "Big";
})(He || (He = {}));
var ci;
(function(r) {
  r[r.DenseArray = 0] = "DenseArray";
})(ci || (ci = {}));
class Rt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInt(t, e) {
    return (e || new Rt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInt(t, e) {
    return t.setPosition(t.position() + Z), (e || new Rt()).__init(t.readInt32(t.position()) + t.position(), t);
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
  static createInt(t, e, i) {
    return Rt.startInt(t), Rt.addBitWidth(t, e), Rt.addIsSigned(t, i), Rt.endInt(t);
  }
}
class ne {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryEncoding(t, e) {
    return (e || new ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, e) {
    return t.setPosition(t.position() + Z), (e || new ne()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return e ? (t || new Rt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
    return t ? this.bb.readInt16(this.bb_pos + t) : ci.DenseArray;
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
    t.addFieldInt16(3, e, ci.DenseArray);
  }
  static endDictionaryEncoding(t) {
    return t.endObject();
  }
}
class ut {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsKeyValue(t, e) {
    return (e || new ut()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsKeyValue(t, e) {
    return t.setPosition(t.position() + Z), (e || new ut()).__init(t.readInt32(t.position()) + t.position(), t);
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
  static createKeyValue(t, e, i) {
    return ut.startKeyValue(t), ut.addKey(t, e), ut.addValue(t, i), ut.endKeyValue(t);
  }
}
let js = class tr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBinary(t, e) {
    return (e || new tr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, e) {
    return t.setPosition(t.position() + Z), (e || new tr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return tr.startBinary(t), tr.endBinary(t);
  }
}, Ys = class er {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBool(t, e) {
    return (e || new er()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, e) {
    return t.setPosition(t.position() + Z), (e || new er()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return er.startBool(t), er.endBool(t);
  }
}, Jr = class Le {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDate(t, e) {
    return (e || new Le()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, e) {
    return t.setPosition(t.position() + Z), (e || new Le()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Mt.MILLISECOND;
  }
  static startDate(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, Mt.MILLISECOND);
  }
  static endDate(t) {
    return t.endObject();
  }
  static createDate(t, e) {
    return Le.startDate(t), Le.addUnit(t, e), Le.endDate(t);
  }
}, Be = class ue {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDecimal(t, e) {
    return (e || new ue()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDecimal(t, e) {
    return t.setPosition(t.position() + Z), (e || new ue()).__init(t.readInt32(t.position()) + t.position(), t);
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
  static createDecimal(t, e, i, n) {
    return ue.startDecimal(t), ue.addPrecision(t, e), ue.addScale(t, i), ue.addBitWidth(t, n), ue.endDecimal(t);
  }
}, Zr = class Ne {
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
    return t.setPosition(t.position() + Z), (e || new Ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : M.MILLISECOND;
  }
  static startDuration(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, M.MILLISECOND);
  }
  static endDuration(t) {
    return t.endObject();
  }
  static createDuration(t, e) {
    return Ne.startDuration(t), Ne.addUnit(t, e), Ne.endDuration(t);
  }
}, Xr = class De {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeBinary(t, e) {
    return (e || new De()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, e) {
    return t.setPosition(t.position() + Z), (e || new De()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return De.startFixedSizeBinary(t), De.addByteWidth(t, e), De.endFixedSizeBinary(t);
  }
}, $r = class Te {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeList(t, e) {
    return (e || new Te()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, e) {
    return t.setPosition(t.position() + Z), (e || new Te()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Te.startFixedSizeList(t), Te.addListSize(t, e), Te.endFixedSizeList(t);
  }
};
class Gt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFloatingPoint(t, e) {
    return (e || new Gt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, e) {
    return t.setPosition(t.position() + Z), (e || new Gt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : lt.HALF;
  }
  static startFloatingPoint(t) {
    t.startObject(1);
  }
  static addPrecision(t, e) {
    t.addFieldInt16(0, e, lt.HALF);
  }
  static endFloatingPoint(t) {
    return t.endObject();
  }
  static createFloatingPoint(t, e) {
    return Gt.startFloatingPoint(t), Gt.addPrecision(t, e), Gt.endFloatingPoint(t);
  }
}
class jt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInterval(t, e) {
    return (e || new jt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, e) {
    return t.setPosition(t.position() + Z), (e || new jt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Jt.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, Jt.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, e) {
    return jt.startInterval(t), jt.addUnit(t, e), jt.endInterval(t);
  }
}
let Ks = class rr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsLargeBinary(t, e) {
    return (e || new rr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeBinary(t, e) {
    return t.setPosition(t.position() + Z), (e || new rr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeBinary(t) {
    t.startObject(0);
  }
  static endLargeBinary(t) {
    return t.endObject();
  }
  static createLargeBinary(t) {
    return rr.startLargeBinary(t), rr.endLargeBinary(t);
  }
}, Qs = class ir {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsLargeUtf8(t, e) {
    return (e || new ir()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeUtf8(t, e) {
    return t.setPosition(t.position() + Z), (e || new ir()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeUtf8(t) {
    t.startObject(0);
  }
  static endLargeUtf8(t) {
    return t.endObject();
  }
  static createLargeUtf8(t) {
    return ir.startLargeUtf8(t), ir.endLargeUtf8(t);
  }
}, Js = class nr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsList(t, e) {
    return (e || new nr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, e) {
    return t.setPosition(t.position() + Z), (e || new nr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return nr.startList(t), nr.endList(t);
  }
}, ti = class Fe {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMap(t, e) {
    return (e || new Fe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, e) {
    return t.setPosition(t.position() + Z), (e || new Fe()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Fe.startMap(t), Fe.addKeysSorted(t, e), Fe.endMap(t);
  }
}, Zs = class sr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsNull(t, e) {
    return (e || new sr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, e) {
    return t.setPosition(t.position() + Z), (e || new sr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return sr.startNull(t), sr.endNull(t);
  }
};
class _e {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsStruct_(t, e) {
    return (e || new _e()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsStruct_(t, e) {
    return t.setPosition(t.position() + Z), (e || new _e()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startStruct_(t) {
    t.startObject(0);
  }
  static endStruct_(t) {
    return t.endObject();
  }
  static createStruct_(t) {
    return _e.startStruct_(t), _e.endStruct_(t);
  }
}
class Dt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTime(t, e) {
    return (e || new Dt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTime(t, e) {
    return t.setPosition(t.position() + Z), (e || new Dt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : M.MILLISECOND;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 32;
  }
  static startTime(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, M.MILLISECOND);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(1, e, 32);
  }
  static endTime(t) {
    return t.endObject();
  }
  static createTime(t, e, i) {
    return Dt.startTime(t), Dt.addUnit(t, e), Dt.addBitWidth(t, i), Dt.endTime(t);
  }
}
class Tt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTimestamp(t, e) {
    return (e || new Tt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTimestamp(t, e) {
    return t.setPosition(t.position() + Z), (e || new Tt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : M.SECOND;
  }
  timezone(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startTimestamp(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, M.SECOND);
  }
  static addTimezone(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endTimestamp(t) {
    return t.endObject();
  }
  static createTimestamp(t, e, i) {
    return Tt.startTimestamp(t), Tt.addUnit(t, e), Tt.addTimezone(t, i), Tt.endTimestamp(t);
  }
}
class vt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUnion(t, e) {
    return (e || new vt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUnion(t, e) {
    return t.setPosition(t.position() + Z), (e || new vt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  mode() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : ht.Sparse;
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
    t.addFieldInt16(0, e, ht.Sparse);
  }
  static addTypeIds(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createTypeIdsVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let i = e.length - 1; i >= 0; i--)
      t.addInt32(e[i]);
    return t.endVector();
  }
  static startTypeIdsVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endUnion(t) {
    return t.endObject();
  }
  static createUnion(t, e, i) {
    return vt.startUnion(t), vt.addMode(t, e), vt.addTypeIds(t, i), vt.endUnion(t);
  }
}
let Xs = class or {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUtf8(t, e) {
    return (e || new or()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, e) {
    return t.setPosition(t.position() + Z), (e || new or()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return or.startUtf8(t), or.endUtf8(t);
  }
};
var rt;
(function(r) {
  r[r.NONE = 0] = "NONE", r[r.Null = 1] = "Null", r[r.Int = 2] = "Int", r[r.FloatingPoint = 3] = "FloatingPoint", r[r.Binary = 4] = "Binary", r[r.Utf8 = 5] = "Utf8", r[r.Bool = 6] = "Bool", r[r.Decimal = 7] = "Decimal", r[r.Date = 8] = "Date", r[r.Time = 9] = "Time", r[r.Timestamp = 10] = "Timestamp", r[r.Interval = 11] = "Interval", r[r.List = 12] = "List", r[r.Struct_ = 13] = "Struct_", r[r.Union = 14] = "Union", r[r.FixedSizeBinary = 15] = "FixedSizeBinary", r[r.FixedSizeList = 16] = "FixedSizeList", r[r.Map = 17] = "Map", r[r.Duration = 18] = "Duration", r[r.LargeBinary = 19] = "LargeBinary", r[r.LargeUtf8 = 20] = "LargeUtf8", r[r.LargeList = 21] = "LargeList", r[r.RunEndEncoded = 22] = "RunEndEncoded";
})(rt || (rt = {}));
let Bt = class ei {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsField(t, e) {
    return (e || new ei()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, e) {
    return t.setPosition(t.position() + Z), (e || new ei()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return t ? this.bb.readUint8(this.bb_pos + t) : rt.NONE;
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
    return e ? (t || new ne()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * children apply only to nested data types like Struct, List and Union. For
   * primitive types children will have length 0.
   */
  children(t, e) {
    const i = this.bb.__offset(this.bb_pos, 14);
    return i ? (e || new ei()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  childrenLength() {
    const t = this.bb.__offset(this.bb_pos, 14);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, e) {
    const i = this.bb.__offset(this.bb_pos, 16);
    return i ? (e || new ut()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
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
    t.addFieldInt8(2, e, rt.NONE);
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
    for (let i = e.length - 1; i >= 0; i--)
      t.addOffset(e[i]);
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
    for (let i = e.length - 1; i >= 0; i--)
      t.addOffset(e[i]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endField(t) {
    return t.endObject();
  }
}, qt = class $t {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsSchema(t, e) {
    return (e || new $t()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, e) {
    return t.setPosition(t.position() + Z), (e || new $t()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * endianness of the buffer
   * it is Little Endian by default
   * if endianness doesn't match the underlying system then the vectors need to be converted
   */
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : He.Little;
  }
  fields(t, e) {
    const i = this.bb.__offset(this.bb_pos, 6);
    return i ? (e || new Bt()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  fieldsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, e) {
    const i = this.bb.__offset(this.bb_pos, 8);
    return i ? (e || new ut()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
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
    t.addFieldInt16(0, e, He.Little);
  }
  static addFields(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createFieldsVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let i = e.length - 1; i >= 0; i--)
      t.addOffset(e[i]);
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
    for (let i = e.length - 1; i >= 0; i--)
      t.addOffset(e[i]);
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
    for (let i = e.length - 1; i >= 0; i--)
      t.addInt64(e[i]);
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
  static createSchema(t, e, i, n, s) {
    return $t.startSchema(t), $t.addEndianness(t, e), $t.addFields(t, i), $t.addCustomMetadata(t, n), $t.addFeatures(t, s), $t.endSchema(t);
  }
};
var K;
(function(r) {
  r[r.NONE = 0] = "NONE", r[r.Schema = 1] = "Schema", r[r.DictionaryBatch = 2] = "DictionaryBatch", r[r.RecordBatch = 3] = "RecordBatch", r[r.Tensor = 4] = "Tensor", r[r.SparseTensor = 5] = "SparseTensor";
})(K || (K = {}));
var v;
(function(r) {
  r[r.NONE = 0] = "NONE", r[r.Null = 1] = "Null", r[r.Int = 2] = "Int", r[r.Float = 3] = "Float", r[r.Binary = 4] = "Binary", r[r.Utf8 = 5] = "Utf8", r[r.Bool = 6] = "Bool", r[r.Decimal = 7] = "Decimal", r[r.Date = 8] = "Date", r[r.Time = 9] = "Time", r[r.Timestamp = 10] = "Timestamp", r[r.Interval = 11] = "Interval", r[r.List = 12] = "List", r[r.Struct = 13] = "Struct", r[r.Union = 14] = "Union", r[r.FixedSizeBinary = 15] = "FixedSizeBinary", r[r.FixedSizeList = 16] = "FixedSizeList", r[r.Map = 17] = "Map", r[r.Duration = 18] = "Duration", r[r.LargeBinary = 19] = "LargeBinary", r[r.LargeUtf8 = 20] = "LargeUtf8", r[r.Dictionary = -1] = "Dictionary", r[r.Int8 = -2] = "Int8", r[r.Int16 = -3] = "Int16", r[r.Int32 = -4] = "Int32", r[r.Int64 = -5] = "Int64", r[r.Uint8 = -6] = "Uint8", r[r.Uint16 = -7] = "Uint16", r[r.Uint32 = -8] = "Uint32", r[r.Uint64 = -9] = "Uint64", r[r.Float16 = -10] = "Float16", r[r.Float32 = -11] = "Float32", r[r.Float64 = -12] = "Float64", r[r.DateDay = -13] = "DateDay", r[r.DateMillisecond = -14] = "DateMillisecond", r[r.TimestampSecond = -15] = "TimestampSecond", r[r.TimestampMillisecond = -16] = "TimestampMillisecond", r[r.TimestampMicrosecond = -17] = "TimestampMicrosecond", r[r.TimestampNanosecond = -18] = "TimestampNanosecond", r[r.TimeSecond = -19] = "TimeSecond", r[r.TimeMillisecond = -20] = "TimeMillisecond", r[r.TimeMicrosecond = -21] = "TimeMicrosecond", r[r.TimeNanosecond = -22] = "TimeNanosecond", r[r.DenseUnion = -23] = "DenseUnion", r[r.SparseUnion = -24] = "SparseUnion", r[r.IntervalDayTime = -25] = "IntervalDayTime", r[r.IntervalYearMonth = -26] = "IntervalYearMonth", r[r.DurationSecond = -27] = "DurationSecond", r[r.DurationMillisecond = -28] = "DurationMillisecond", r[r.DurationMicrosecond = -29] = "DurationMicrosecond", r[r.DurationNanosecond = -30] = "DurationNanosecond";
})(v || (v = {}));
var ee;
(function(r) {
  r[r.OFFSET = 0] = "OFFSET", r[r.DATA = 1] = "DATA", r[r.VALIDITY = 2] = "VALIDITY", r[r.TYPE = 3] = "TYPE";
})(ee || (ee = {}));
const xu = void 0;
function ur(r) {
  if (r === null)
    return "null";
  if (r === xu)
    return "undefined";
  switch (typeof r) {
    case "number":
      return `${r}`;
    case "bigint":
      return `${r}`;
    case "string":
      return `"${r}"`;
  }
  return typeof r[Symbol.toPrimitive] == "function" ? r[Symbol.toPrimitive]("string") : ArrayBuffer.isView(r) ? r instanceof BigInt64Array || r instanceof BigUint64Array ? `[${[...r].map((t) => ur(t))}]` : `[${r}]` : ArrayBuffer.isView(r) ? `[${r}]` : JSON.stringify(r, (t, e) => typeof e == "bigint" ? `${e}` : e);
}
function et(r) {
  if (typeof r == "bigint" && (r < Number.MIN_SAFE_INTEGER || r > Number.MAX_SAFE_INTEGER))
    throw new TypeError(`${r} is not safe to convert to a number.`);
  return Number(r);
}
function Po(r, t) {
  return et(r / t) + et(r % t) / et(t);
}
const Uu = Symbol.for("isArrowBigNum");
function Vt(r, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(tt(this.TypedArray, r), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(r, ...t), this.constructor.prototype);
}
Vt.prototype[Uu] = !0;
Vt.prototype.toJSON = function() {
  return `"${hr(this)}"`;
};
Vt.prototype.valueOf = function(r) {
  return xo(this, r);
};
Vt.prototype.toString = function() {
  return hr(this);
};
Vt.prototype[Symbol.toPrimitive] = function(r = "default") {
  switch (r) {
    case "number":
      return xo(this);
    case "string":
      return hr(this);
    case "default":
      return qu(this);
  }
  return hr(this);
};
function xe(...r) {
  return Vt.apply(this, r);
}
function Ue(...r) {
  return Vt.apply(this, r);
}
function lr(...r) {
  return Vt.apply(this, r);
}
Object.setPrototypeOf(xe.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(Ue.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(lr.prototype, Object.create(Uint32Array.prototype));
Object.assign(xe.prototype, Vt.prototype, { constructor: xe, signed: !0, TypedArray: Int32Array, BigIntArray: BigInt64Array });
Object.assign(Ue.prototype, Vt.prototype, { constructor: Ue, signed: !1, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
Object.assign(lr.prototype, Vt.prototype, { constructor: lr, signed: !0, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
const Vu = BigInt(4294967296) * BigInt(4294967296), zu = Vu - BigInt(1);
function xo(r, t) {
  const { buffer: e, byteOffset: i, byteLength: n, signed: s } = r, o = new BigUint64Array(e, i, n / 8), u = s && o.at(-1) & BigInt(1) << BigInt(63);
  let l = BigInt(0), f = 0;
  if (u) {
    for (const d of o)
      l |= (d ^ zu) * (BigInt(1) << BigInt(64 * f++));
    l *= BigInt(-1), l -= BigInt(1);
  } else
    for (const d of o)
      l |= d * (BigInt(1) << BigInt(64 * f++));
  if (typeof t == "number") {
    const d = BigInt(Math.pow(10, t)), y = l / d, h = l % d;
    return et(y) + et(h) / et(d);
  }
  return et(l);
}
function hr(r) {
  if (r.byteLength === 8)
    return `${new r.BigIntArray(r.buffer, r.byteOffset, 1)[0]}`;
  if (!r.signed)
    return Xi(r);
  let t = new Uint16Array(r.buffer, r.byteOffset, r.byteLength / 2);
  if (new Int16Array([t.at(-1)])[0] >= 0)
    return Xi(r);
  t = t.slice();
  let i = 1;
  for (let s = 0; s < t.length; s++) {
    const o = t[s], u = ~o + i;
    t[s] = u, i &= o === 0 ? 1 : 0;
  }
  return `-${Xi(t)}`;
}
function qu(r) {
  return r.byteLength === 8 ? new r.BigIntArray(r.buffer, r.byteOffset, 1)[0] : hr(r);
}
function Xi(r) {
  let t = "";
  const e = new Uint32Array(2);
  let i = new Uint16Array(r.buffer, r.byteOffset, r.byteLength / 2);
  const n = new Uint32Array((i = new Uint16Array(i).reverse()).buffer);
  let s = -1;
  const o = i.length - 1;
  do {
    for (e[0] = i[s = 0]; s < o; )
      i[s++] = e[1] = e[0] / 10, e[0] = (e[0] - e[1] * 10 << 16) + i[s];
    i[s] = e[1] = e[0] / 10, e[0] = e[0] - e[1] * 10, t = `${e[0]}${t}`;
  } while (n[0] || n[1] || n[2] || n[3]);
  return t ?? "0";
}
class On {
  /** @nocollapse */
  static new(t, e) {
    switch (e) {
      case !0:
        return new xe(t);
      case !1:
        return new Ue(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case BigInt64Array:
        return new xe(t);
    }
    return t.byteLength === 16 ? new lr(t) : new Ue(t);
  }
  /** @nocollapse */
  static signed(t) {
    return new xe(t);
  }
  /** @nocollapse */
  static unsigned(t) {
    return new Ue(t);
  }
  /** @nocollapse */
  static decimal(t) {
    return new lr(t);
  }
  constructor(t, e) {
    return On.new(t, e);
  }
}
var Uo, Vo, zo, qo, Ho, Wo, Go, jo, Yo, Ko, Qo, Jo, Zo, Xo, $o, ta, ea, ra, ia, na, sa, oa;
class B {
  /** @nocollapse */
  static isNull(t) {
    return t?.typeId === v.Null;
  }
  /** @nocollapse */
  static isInt(t) {
    return t?.typeId === v.Int;
  }
  /** @nocollapse */
  static isFloat(t) {
    return t?.typeId === v.Float;
  }
  /** @nocollapse */
  static isBinary(t) {
    return t?.typeId === v.Binary;
  }
  /** @nocollapse */
  static isLargeBinary(t) {
    return t?.typeId === v.LargeBinary;
  }
  /** @nocollapse */
  static isUtf8(t) {
    return t?.typeId === v.Utf8;
  }
  /** @nocollapse */
  static isLargeUtf8(t) {
    return t?.typeId === v.LargeUtf8;
  }
  /** @nocollapse */
  static isBool(t) {
    return t?.typeId === v.Bool;
  }
  /** @nocollapse */
  static isDecimal(t) {
    return t?.typeId === v.Decimal;
  }
  /** @nocollapse */
  static isDate(t) {
    return t?.typeId === v.Date;
  }
  /** @nocollapse */
  static isTime(t) {
    return t?.typeId === v.Time;
  }
  /** @nocollapse */
  static isTimestamp(t) {
    return t?.typeId === v.Timestamp;
  }
  /** @nocollapse */
  static isInterval(t) {
    return t?.typeId === v.Interval;
  }
  /** @nocollapse */
  static isDuration(t) {
    return t?.typeId === v.Duration;
  }
  /** @nocollapse */
  static isList(t) {
    return t?.typeId === v.List;
  }
  /** @nocollapse */
  static isStruct(t) {
    return t?.typeId === v.Struct;
  }
  /** @nocollapse */
  static isUnion(t) {
    return t?.typeId === v.Union;
  }
  /** @nocollapse */
  static isFixedSizeBinary(t) {
    return t?.typeId === v.FixedSizeBinary;
  }
  /** @nocollapse */
  static isFixedSizeList(t) {
    return t?.typeId === v.FixedSizeList;
  }
  /** @nocollapse */
  static isMap(t) {
    return t?.typeId === v.Map;
  }
  /** @nocollapse */
  static isDictionary(t) {
    return t?.typeId === v.Dictionary;
  }
  /** @nocollapse */
  static isDenseUnion(t) {
    return B.isUnion(t) && t.mode === ht.Dense;
  }
  /** @nocollapse */
  static isSparseUnion(t) {
    return B.isUnion(t) && t.mode === ht.Sparse;
  }
  constructor(t) {
    this.typeId = t;
  }
}
Uo = Symbol.toStringTag;
B[Uo] = ((r) => (r.children = null, r.ArrayType = Array, r.OffsetArrayType = Int32Array, r[Symbol.toStringTag] = "DataType"))(B.prototype);
class de extends B {
  constructor() {
    super(v.Null);
  }
  toString() {
    return "Null";
  }
}
Vo = Symbol.toStringTag;
de[Vo] = ((r) => r[Symbol.toStringTag] = "Null")(de.prototype);
class Se extends B {
  constructor(t, e) {
    super(v.Int), this.isSigned = t, this.bitWidth = e;
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
zo = Symbol.toStringTag;
Se[zo] = ((r) => (r.isSigned = null, r.bitWidth = null, r[Symbol.toStringTag] = "Int"))(Se.prototype);
class dr extends Se {
  constructor() {
    super(!0, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
Object.defineProperty(dr.prototype, "ArrayType", { value: Int32Array });
class ui extends B {
  constructor(t) {
    super(v.Float), this.precision = t;
  }
  get ArrayType() {
    switch (this.precision) {
      case lt.HALF:
        return Uint16Array;
      case lt.SINGLE:
        return Float32Array;
      case lt.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
}
qo = Symbol.toStringTag;
ui[qo] = ((r) => (r.precision = null, r[Symbol.toStringTag] = "Float"))(ui.prototype);
class li extends B {
  constructor() {
    super(v.Binary);
  }
  toString() {
    return "Binary";
  }
}
Ho = Symbol.toStringTag;
li[Ho] = ((r) => (r.ArrayType = Uint8Array, r[Symbol.toStringTag] = "Binary"))(li.prototype);
class hi extends B {
  constructor() {
    super(v.LargeBinary);
  }
  toString() {
    return "LargeBinary";
  }
}
Wo = Symbol.toStringTag;
hi[Wo] = ((r) => (r.ArrayType = Uint8Array, r.OffsetArrayType = BigInt64Array, r[Symbol.toStringTag] = "LargeBinary"))(hi.prototype);
class di extends B {
  constructor() {
    super(v.Utf8);
  }
  toString() {
    return "Utf8";
  }
}
Go = Symbol.toStringTag;
di[Go] = ((r) => (r.ArrayType = Uint8Array, r[Symbol.toStringTag] = "Utf8"))(di.prototype);
class fi extends B {
  constructor() {
    super(v.LargeUtf8);
  }
  toString() {
    return "LargeUtf8";
  }
}
jo = Symbol.toStringTag;
fi[jo] = ((r) => (r.ArrayType = Uint8Array, r.OffsetArrayType = BigInt64Array, r[Symbol.toStringTag] = "LargeUtf8"))(fi.prototype);
class pi extends B {
  constructor() {
    super(v.Bool);
  }
  toString() {
    return "Bool";
  }
}
Yo = Symbol.toStringTag;
pi[Yo] = ((r) => (r.ArrayType = Uint8Array, r[Symbol.toStringTag] = "Bool"))(pi.prototype);
class yi extends B {
  constructor(t, e, i = 128) {
    super(v.Decimal), this.scale = t, this.precision = e, this.bitWidth = i;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
}
Ko = Symbol.toStringTag;
yi[Ko] = ((r) => (r.scale = null, r.precision = null, r.ArrayType = Uint32Array, r[Symbol.toStringTag] = "Decimal"))(yi.prototype);
class gi extends B {
  constructor(t) {
    super(v.Date), this.unit = t;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${Mt[this.unit]}>`;
  }
  get ArrayType() {
    return this.unit === Mt.DAY ? Int32Array : BigInt64Array;
  }
}
Qo = Symbol.toStringTag;
gi[Qo] = ((r) => (r.unit = null, r[Symbol.toStringTag] = "Date"))(gi.prototype);
class mi extends B {
  constructor(t, e) {
    super(v.Time), this.unit = t, this.bitWidth = e;
  }
  toString() {
    return `Time${this.bitWidth}<${M[this.unit]}>`;
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
Jo = Symbol.toStringTag;
mi[Jo] = ((r) => (r.unit = null, r.bitWidth = null, r[Symbol.toStringTag] = "Time"))(mi.prototype);
class _i extends B {
  constructor(t, e) {
    super(v.Timestamp), this.unit = t, this.timezone = e;
  }
  toString() {
    return `Timestamp<${M[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
Zo = Symbol.toStringTag;
_i[Zo] = ((r) => (r.unit = null, r.timezone = null, r.ArrayType = BigInt64Array, r[Symbol.toStringTag] = "Timestamp"))(_i.prototype);
class vi extends B {
  constructor(t) {
    super(v.Interval), this.unit = t;
  }
  toString() {
    return `Interval<${Jt[this.unit]}>`;
  }
}
Xo = Symbol.toStringTag;
vi[Xo] = ((r) => (r.unit = null, r.ArrayType = Int32Array, r[Symbol.toStringTag] = "Interval"))(vi.prototype);
class bi extends B {
  constructor(t) {
    super(v.Duration), this.unit = t;
  }
  toString() {
    return `Duration<${M[this.unit]}>`;
  }
}
$o = Symbol.toStringTag;
bi[$o] = ((r) => (r.unit = null, r.ArrayType = BigInt64Array, r[Symbol.toStringTag] = "Duration"))(bi.prototype);
class Si extends B {
  constructor(t) {
    super(v.List), this.children = [t];
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
ta = Symbol.toStringTag;
Si[ta] = ((r) => (r.children = null, r[Symbol.toStringTag] = "List"))(Si.prototype);
class ft extends B {
  constructor(t) {
    super(v.Struct), this.children = t;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
ea = Symbol.toStringTag;
ft[ea] = ((r) => (r.children = null, r[Symbol.toStringTag] = "Struct"))(ft.prototype);
class Ii extends B {
  constructor(t, e, i) {
    super(v.Union), this.mode = t, this.children = i, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce((n, s, o) => (n[s] = o) && n || n, /* @__PURE__ */ Object.create(null));
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
}
ra = Symbol.toStringTag;
Ii[ra] = ((r) => (r.mode = null, r.typeIds = null, r.children = null, r.typeIdToChildIndex = null, r.ArrayType = Int8Array, r[Symbol.toStringTag] = "Union"))(Ii.prototype);
class wi extends B {
  constructor(t) {
    super(v.FixedSizeBinary), this.byteWidth = t;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
}
ia = Symbol.toStringTag;
wi[ia] = ((r) => (r.byteWidth = null, r.ArrayType = Uint8Array, r[Symbol.toStringTag] = "FixedSizeBinary"))(wi.prototype);
class Ei extends B {
  constructor(t, e) {
    super(v.FixedSizeList), this.listSize = t, this.children = [e];
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
na = Symbol.toStringTag;
Ei[na] = ((r) => (r.children = null, r.listSize = null, r[Symbol.toStringTag] = "FixedSizeList"))(Ei.prototype);
class Ai extends B {
  constructor(t, e = !1) {
    var i, n, s;
    if (super(v.Map), this.children = [t], this.keysSorted = e, t && (t.name = "entries", !((i = t?.type) === null || i === void 0) && i.children)) {
      const o = (n = t?.type) === null || n === void 0 ? void 0 : n.children[0];
      o && (o.name = "key");
      const u = (s = t?.type) === null || s === void 0 ? void 0 : s.children[1];
      u && (u.name = "value");
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
sa = Symbol.toStringTag;
Ai[sa] = ((r) => (r.children = null, r.keysSorted = null, r[Symbol.toStringTag] = "Map_"))(Ai.prototype);
const Hu = /* @__PURE__ */ ((r) => () => ++r)(-1);
class We extends B {
  constructor(t, e, i, n) {
    super(v.Dictionary), this.indices = e, this.dictionary = t, this.isOrdered = n || !1, this.id = i == null ? Hu() : et(i);
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
oa = Symbol.toStringTag;
We[oa] = ((r) => (r.id = null, r.indices = null, r.isOrdered = null, r.dictionary = null, r[Symbol.toStringTag] = "Dictionary"))(We.prototype);
function re(r) {
  const t = r;
  switch (r.typeId) {
    case v.Decimal:
      return r.bitWidth / 32;
    case v.Interval:
      return 1 + t.unit;
    // case Type.Int: return 1 + +((t as Int_).bitWidth > 32);
    // case Type.Time: return 1 + +((t as Time_).bitWidth > 32);
    case v.FixedSizeList:
      return t.listSize;
    case v.FixedSizeBinary:
      return t.byteWidth;
    default:
      return 1;
  }
}
class H {
  visitMany(t, ...e) {
    return t.map((i, n) => this.visit(i, ...e.map((s) => s[n])));
  }
  visit(...t) {
    return this.getVisitFn(t[0], !1).apply(this, t);
  }
  getVisitFn(t, e = !0) {
    return Wu(this, t, e);
  }
  getVisitFnByTypeId(t, e = !0) {
    return Me(this, t, e);
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
function Wu(r, t, e = !0) {
  return typeof t == "number" ? Me(r, t, e) : typeof t == "string" && t in v ? Me(r, v[t], e) : t && t instanceof B ? Me(r, $s(t), e) : t?.type && t.type instanceof B ? Me(r, $s(t.type), e) : Me(r, v.NONE, e);
}
function Me(r, t, e = !0) {
  let i = null;
  switch (t) {
    case v.Null:
      i = r.visitNull;
      break;
    case v.Bool:
      i = r.visitBool;
      break;
    case v.Int:
      i = r.visitInt;
      break;
    case v.Int8:
      i = r.visitInt8 || r.visitInt;
      break;
    case v.Int16:
      i = r.visitInt16 || r.visitInt;
      break;
    case v.Int32:
      i = r.visitInt32 || r.visitInt;
      break;
    case v.Int64:
      i = r.visitInt64 || r.visitInt;
      break;
    case v.Uint8:
      i = r.visitUint8 || r.visitInt;
      break;
    case v.Uint16:
      i = r.visitUint16 || r.visitInt;
      break;
    case v.Uint32:
      i = r.visitUint32 || r.visitInt;
      break;
    case v.Uint64:
      i = r.visitUint64 || r.visitInt;
      break;
    case v.Float:
      i = r.visitFloat;
      break;
    case v.Float16:
      i = r.visitFloat16 || r.visitFloat;
      break;
    case v.Float32:
      i = r.visitFloat32 || r.visitFloat;
      break;
    case v.Float64:
      i = r.visitFloat64 || r.visitFloat;
      break;
    case v.Utf8:
      i = r.visitUtf8;
      break;
    case v.LargeUtf8:
      i = r.visitLargeUtf8;
      break;
    case v.Binary:
      i = r.visitBinary;
      break;
    case v.LargeBinary:
      i = r.visitLargeBinary;
      break;
    case v.FixedSizeBinary:
      i = r.visitFixedSizeBinary;
      break;
    case v.Date:
      i = r.visitDate;
      break;
    case v.DateDay:
      i = r.visitDateDay || r.visitDate;
      break;
    case v.DateMillisecond:
      i = r.visitDateMillisecond || r.visitDate;
      break;
    case v.Timestamp:
      i = r.visitTimestamp;
      break;
    case v.TimestampSecond:
      i = r.visitTimestampSecond || r.visitTimestamp;
      break;
    case v.TimestampMillisecond:
      i = r.visitTimestampMillisecond || r.visitTimestamp;
      break;
    case v.TimestampMicrosecond:
      i = r.visitTimestampMicrosecond || r.visitTimestamp;
      break;
    case v.TimestampNanosecond:
      i = r.visitTimestampNanosecond || r.visitTimestamp;
      break;
    case v.Time:
      i = r.visitTime;
      break;
    case v.TimeSecond:
      i = r.visitTimeSecond || r.visitTime;
      break;
    case v.TimeMillisecond:
      i = r.visitTimeMillisecond || r.visitTime;
      break;
    case v.TimeMicrosecond:
      i = r.visitTimeMicrosecond || r.visitTime;
      break;
    case v.TimeNanosecond:
      i = r.visitTimeNanosecond || r.visitTime;
      break;
    case v.Decimal:
      i = r.visitDecimal;
      break;
    case v.List:
      i = r.visitList;
      break;
    case v.Struct:
      i = r.visitStruct;
      break;
    case v.Union:
      i = r.visitUnion;
      break;
    case v.DenseUnion:
      i = r.visitDenseUnion || r.visitUnion;
      break;
    case v.SparseUnion:
      i = r.visitSparseUnion || r.visitUnion;
      break;
    case v.Dictionary:
      i = r.visitDictionary;
      break;
    case v.Interval:
      i = r.visitInterval;
      break;
    case v.IntervalDayTime:
      i = r.visitIntervalDayTime || r.visitInterval;
      break;
    case v.IntervalYearMonth:
      i = r.visitIntervalYearMonth || r.visitInterval;
      break;
    case v.Duration:
      i = r.visitDuration;
      break;
    case v.DurationSecond:
      i = r.visitDurationSecond || r.visitDuration;
      break;
    case v.DurationMillisecond:
      i = r.visitDurationMillisecond || r.visitDuration;
      break;
    case v.DurationMicrosecond:
      i = r.visitDurationMicrosecond || r.visitDuration;
      break;
    case v.DurationNanosecond:
      i = r.visitDurationNanosecond || r.visitDuration;
      break;
    case v.FixedSizeList:
      i = r.visitFixedSizeList;
      break;
    case v.Map:
      i = r.visitMap;
      break;
  }
  if (typeof i == "function")
    return i;
  if (!e)
    return () => null;
  throw new Error(`Unrecognized type '${v[t]}'`);
}
function $s(r) {
  switch (r.typeId) {
    case v.Null:
      return v.Null;
    case v.Int: {
      const { bitWidth: t, isSigned: e } = r;
      switch (t) {
        case 8:
          return e ? v.Int8 : v.Uint8;
        case 16:
          return e ? v.Int16 : v.Uint16;
        case 32:
          return e ? v.Int32 : v.Uint32;
        case 64:
          return e ? v.Int64 : v.Uint64;
      }
      return v.Int;
    }
    case v.Float:
      switch (r.precision) {
        case lt.HALF:
          return v.Float16;
        case lt.SINGLE:
          return v.Float32;
        case lt.DOUBLE:
          return v.Float64;
      }
      return v.Float;
    case v.Binary:
      return v.Binary;
    case v.LargeBinary:
      return v.LargeBinary;
    case v.Utf8:
      return v.Utf8;
    case v.LargeUtf8:
      return v.LargeUtf8;
    case v.Bool:
      return v.Bool;
    case v.Decimal:
      return v.Decimal;
    case v.Time:
      switch (r.unit) {
        case M.SECOND:
          return v.TimeSecond;
        case M.MILLISECOND:
          return v.TimeMillisecond;
        case M.MICROSECOND:
          return v.TimeMicrosecond;
        case M.NANOSECOND:
          return v.TimeNanosecond;
      }
      return v.Time;
    case v.Timestamp:
      switch (r.unit) {
        case M.SECOND:
          return v.TimestampSecond;
        case M.MILLISECOND:
          return v.TimestampMillisecond;
        case M.MICROSECOND:
          return v.TimestampMicrosecond;
        case M.NANOSECOND:
          return v.TimestampNanosecond;
      }
      return v.Timestamp;
    case v.Date:
      switch (r.unit) {
        case Mt.DAY:
          return v.DateDay;
        case Mt.MILLISECOND:
          return v.DateMillisecond;
      }
      return v.Date;
    case v.Interval:
      switch (r.unit) {
        case Jt.DAY_TIME:
          return v.IntervalDayTime;
        case Jt.YEAR_MONTH:
          return v.IntervalYearMonth;
      }
      return v.Interval;
    case v.Duration:
      switch (r.unit) {
        case M.SECOND:
          return v.DurationSecond;
        case M.MILLISECOND:
          return v.DurationMillisecond;
        case M.MICROSECOND:
          return v.DurationMicrosecond;
        case M.NANOSECOND:
          return v.DurationNanosecond;
      }
      return v.Duration;
    case v.Map:
      return v.Map;
    case v.List:
      return v.List;
    case v.Struct:
      return v.Struct;
    case v.Union:
      switch (r.mode) {
        case ht.Dense:
          return v.DenseUnion;
        case ht.Sparse:
          return v.SparseUnion;
      }
      return v.Union;
    case v.FixedSizeBinary:
      return v.FixedSizeBinary;
    case v.FixedSizeList:
      return v.FixedSizeList;
    case v.Dictionary:
      return v.Dictionary;
  }
  throw new Error(`Unrecognized type '${v[r.typeId]}'`);
}
H.prototype.visitInt8 = null;
H.prototype.visitInt16 = null;
H.prototype.visitInt32 = null;
H.prototype.visitInt64 = null;
H.prototype.visitUint8 = null;
H.prototype.visitUint16 = null;
H.prototype.visitUint32 = null;
H.prototype.visitUint64 = null;
H.prototype.visitFloat16 = null;
H.prototype.visitFloat32 = null;
H.prototype.visitFloat64 = null;
H.prototype.visitDateDay = null;
H.prototype.visitDateMillisecond = null;
H.prototype.visitTimestampSecond = null;
H.prototype.visitTimestampMillisecond = null;
H.prototype.visitTimestampMicrosecond = null;
H.prototype.visitTimestampNanosecond = null;
H.prototype.visitTimeSecond = null;
H.prototype.visitTimeMillisecond = null;
H.prototype.visitTimeMicrosecond = null;
H.prototype.visitTimeNanosecond = null;
H.prototype.visitDenseUnion = null;
H.prototype.visitSparseUnion = null;
H.prototype.visitIntervalDayTime = null;
H.prototype.visitIntervalYearMonth = null;
H.prototype.visitDuration = null;
H.prototype.visitDurationSecond = null;
H.prototype.visitDurationMillisecond = null;
H.prototype.visitDurationMicrosecond = null;
H.prototype.visitDurationNanosecond = null;
const aa = new Float64Array(1), Oe = new Uint32Array(aa.buffer);
function ca(r) {
  const t = (r & 31744) >> 10, e = (r & 1023) / 1024, i = Math.pow(-1, (r & 32768) >> 15);
  switch (t) {
    case 31:
      return i * (e ? Number.NaN : 1 / 0);
    case 0:
      return i * (e ? 6103515625e-14 * e : 0);
  }
  return i * Math.pow(2, t - 15) * (1 + e);
}
function Gu(r) {
  if (r !== r)
    return 32256;
  aa[0] = r;
  const t = (Oe[1] & 2147483648) >> 16 & 65535;
  let e = Oe[1] & 2146435072, i = 0;
  return e >= 1089470464 ? Oe[0] > 0 ? e = 31744 : (e = (e & 2080374784) >> 16, i = (Oe[1] & 1048575) >> 10) : e <= 1056964608 ? (i = 1048576 + (Oe[1] & 1048575), i = 1048576 + (i << (e >> 20) - 998) >> 21, e = 0) : (e = e - 1056964608 >> 10, i = (Oe[1] & 1048575) + 512 >> 10), t | e | i & 65535;
}
class C extends H {
}
function x(r) {
  return (t, e, i) => {
    if (t.setValid(e, i != null))
      return r(t, e, i);
  };
}
const ju = (r, t, e) => {
  r[t] = Math.floor(e / 864e5);
}, ua = (r, t, e, i) => {
  if (e + 1 < t.length) {
    const n = et(t[e]), s = et(t[e + 1]);
    r.set(i.subarray(0, s - n), n);
  }
}, Yu = ({ offset: r, values: t }, e, i) => {
  const n = r + e;
  i ? t[n >> 3] |= 1 << n % 8 : t[n >> 3] &= ~(1 << n % 8);
}, se = ({ values: r }, t, e) => {
  r[t] = e;
}, Rn = ({ values: r }, t, e) => {
  r[t] = e;
}, la = ({ values: r }, t, e) => {
  r[t] = Gu(e);
}, Ku = (r, t, e) => {
  switch (r.type.precision) {
    case lt.HALF:
      return la(r, t, e);
    case lt.SINGLE:
    case lt.DOUBLE:
      return Rn(r, t, e);
  }
}, ha = ({ values: r }, t, e) => {
  ju(r, t, e.valueOf());
}, da = ({ values: r }, t, e) => {
  r[t] = BigInt(e);
}, Qu = ({ stride: r, values: t }, e, i) => {
  t.set(i.subarray(0, r), r * e);
}, fa = ({ values: r, valueOffsets: t }, e, i) => ua(r, t, e, i), pa = ({ values: r, valueOffsets: t }, e, i) => ua(r, t, e, wn(i)), Ju = (r, t, e) => {
  r.type.unit === Mt.DAY ? ha(r, t, e) : da(r, t, e);
}, ya = ({ values: r }, t, e) => {
  r[t] = BigInt(e / 1e3);
}, ga = ({ values: r }, t, e) => {
  r[t] = BigInt(e);
}, ma = ({ values: r }, t, e) => {
  r[t] = BigInt(e * 1e3);
}, _a = ({ values: r }, t, e) => {
  r[t] = BigInt(e * 1e6);
}, Zu = (r, t, e) => {
  switch (r.type.unit) {
    case M.SECOND:
      return ya(r, t, e);
    case M.MILLISECOND:
      return ga(r, t, e);
    case M.MICROSECOND:
      return ma(r, t, e);
    case M.NANOSECOND:
      return _a(r, t, e);
  }
}, va = ({ values: r }, t, e) => {
  r[t] = e;
}, ba = ({ values: r }, t, e) => {
  r[t] = e;
}, Sa = ({ values: r }, t, e) => {
  r[t] = e;
}, Ia = ({ values: r }, t, e) => {
  r[t] = e;
}, Xu = (r, t, e) => {
  switch (r.type.unit) {
    case M.SECOND:
      return va(r, t, e);
    case M.MILLISECOND:
      return ba(r, t, e);
    case M.MICROSECOND:
      return Sa(r, t, e);
    case M.NANOSECOND:
      return Ia(r, t, e);
  }
}, $u = ({ values: r, stride: t }, e, i) => {
  r.set(i.subarray(0, t), t * e);
}, tl = (r, t, e) => {
  const i = r.children[0], n = r.valueOffsets, s = Ct.getVisitFn(i);
  if (Array.isArray(e))
    for (let o = -1, u = n[t], l = n[t + 1]; u < l; )
      s(i, u++, e[++o]);
  else
    for (let o = -1, u = n[t], l = n[t + 1]; u < l; )
      s(i, u++, e.get(++o));
}, el = (r, t, e) => {
  const i = r.children[0], { valueOffsets: n } = r, s = Ct.getVisitFn(i);
  let { [t]: o, [t + 1]: u } = n;
  const l = e instanceof Map ? e.entries() : Object.entries(e);
  for (const f of l)
    if (s(i, o, f), ++o >= u)
      break;
}, rl = (r, t) => (e, i, n, s) => i && e(i, r, t[s]), il = (r, t) => (e, i, n, s) => i && e(i, r, t.get(s)), nl = (r, t) => (e, i, n, s) => i && e(i, r, t.get(n.name)), sl = (r, t) => (e, i, n, s) => i && e(i, r, t[n.name]), ol = (r, t, e) => {
  const i = r.type.children.map((s) => Ct.getVisitFn(s.type)), n = e instanceof Map ? nl(t, e) : e instanceof Q ? il(t, e) : Array.isArray(e) ? rl(t, e) : sl(t, e);
  r.type.children.forEach((s, o) => n(i[o], r.children[o], s, o));
}, al = (r, t, e) => {
  r.type.mode === ht.Dense ? wa(r, t, e) : Ea(r, t, e);
}, wa = (r, t, e) => {
  const i = r.type.typeIdToChildIndex[r.typeIds[t]], n = r.children[i];
  Ct.visit(n, r.valueOffsets[t], e);
}, Ea = (r, t, e) => {
  const i = r.type.typeIdToChildIndex[r.typeIds[t]], n = r.children[i];
  Ct.visit(n, t, e);
}, cl = (r, t, e) => {
  var i;
  (i = r.dictionary) === null || i === void 0 || i.set(r.values[t], e);
}, ul = (r, t, e) => {
  r.type.unit === Jt.DAY_TIME ? Aa(r, t, e) : Oa(r, t, e);
}, Aa = ({ values: r }, t, e) => {
  r.set(e.subarray(0, 2), 2 * t);
}, Oa = ({ values: r }, t, e) => {
  r[t] = e[0] * 12 + e[1] % 12;
}, Ra = ({ values: r }, t, e) => {
  r[t] = e;
}, La = ({ values: r }, t, e) => {
  r[t] = e;
}, Ba = ({ values: r }, t, e) => {
  r[t] = e;
}, Na = ({ values: r }, t, e) => {
  r[t] = e;
}, ll = (r, t, e) => {
  switch (r.type.unit) {
    case M.SECOND:
      return Ra(r, t, e);
    case M.MILLISECOND:
      return La(r, t, e);
    case M.MICROSECOND:
      return Ba(r, t, e);
    case M.NANOSECOND:
      return Na(r, t, e);
  }
}, hl = (r, t, e) => {
  const { stride: i } = r, n = r.children[0], s = Ct.getVisitFn(n);
  if (Array.isArray(e))
    for (let o = -1, u = t * i; ++o < i; )
      s(n, u + o, e[o]);
  else
    for (let o = -1, u = t * i; ++o < i; )
      s(n, u + o, e.get(o));
};
C.prototype.visitBool = x(Yu);
C.prototype.visitInt = x(se);
C.prototype.visitInt8 = x(se);
C.prototype.visitInt16 = x(se);
C.prototype.visitInt32 = x(se);
C.prototype.visitInt64 = x(se);
C.prototype.visitUint8 = x(se);
C.prototype.visitUint16 = x(se);
C.prototype.visitUint32 = x(se);
C.prototype.visitUint64 = x(se);
C.prototype.visitFloat = x(Ku);
C.prototype.visitFloat16 = x(la);
C.prototype.visitFloat32 = x(Rn);
C.prototype.visitFloat64 = x(Rn);
C.prototype.visitUtf8 = x(pa);
C.prototype.visitLargeUtf8 = x(pa);
C.prototype.visitBinary = x(fa);
C.prototype.visitLargeBinary = x(fa);
C.prototype.visitFixedSizeBinary = x(Qu);
C.prototype.visitDate = x(Ju);
C.prototype.visitDateDay = x(ha);
C.prototype.visitDateMillisecond = x(da);
C.prototype.visitTimestamp = x(Zu);
C.prototype.visitTimestampSecond = x(ya);
C.prototype.visitTimestampMillisecond = x(ga);
C.prototype.visitTimestampMicrosecond = x(ma);
C.prototype.visitTimestampNanosecond = x(_a);
C.prototype.visitTime = x(Xu);
C.prototype.visitTimeSecond = x(va);
C.prototype.visitTimeMillisecond = x(ba);
C.prototype.visitTimeMicrosecond = x(Sa);
C.prototype.visitTimeNanosecond = x(Ia);
C.prototype.visitDecimal = x($u);
C.prototype.visitList = x(tl);
C.prototype.visitStruct = x(ol);
C.prototype.visitUnion = x(al);
C.prototype.visitDenseUnion = x(wa);
C.prototype.visitSparseUnion = x(Ea);
C.prototype.visitDictionary = x(cl);
C.prototype.visitInterval = x(ul);
C.prototype.visitIntervalDayTime = x(Aa);
C.prototype.visitIntervalYearMonth = x(Oa);
C.prototype.visitDuration = x(ll);
C.prototype.visitDurationSecond = x(Ra);
C.prototype.visitDurationMillisecond = x(La);
C.prototype.visitDurationMicrosecond = x(Ba);
C.prototype.visitDurationNanosecond = x(Na);
C.prototype.visitFixedSizeList = x(hl);
C.prototype.visitMap = x(el);
const Ct = new C(), Pt = Symbol.for("parent"), Ve = Symbol.for("rowIndex");
class Ln {
  constructor(t, e) {
    return this[Pt] = t, this[Ve] = e, new Proxy(this, new fl());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Ve], e = this[Pt], i = e.type.children, n = {};
    for (let s = -1, o = i.length; ++s < o; )
      n[i[s].name] = It.visit(e.children[s], t);
    return n;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${ur(t)}: ${ur(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new dl(this[Pt], this[Ve]);
  }
}
class dl {
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
        It.visit(this.children[t], this.rowIndex)
      ]
    }) : { done: !0, value: null };
  }
}
Object.defineProperties(Ln.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [Pt]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [Ve]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
});
class fl {
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
    return t[Pt].type.children.map((e) => e.name);
  }
  has(t, e) {
    return t[Pt].type.children.findIndex((i) => i.name === e) !== -1;
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[Pt].type.children.findIndex((i) => i.name === e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const i = t[Pt].type.children.findIndex((n) => n.name === e);
    if (i !== -1) {
      const n = It.visit(t[Pt].children[i], t[Ve]);
      return Reflect.set(t, e, n), n;
    }
  }
  set(t, e, i) {
    const n = t[Pt].type.children.findIndex((s) => s.name === e);
    return n !== -1 ? (Ct.visit(t[Pt].children[n], t[Ve], i), Reflect.set(t, e, i)) : Reflect.has(t, e) || typeof e == "symbol" ? Reflect.set(t, e, i) : !1;
  }
}
class N extends H {
}
function k(r) {
  return (t, e) => t.getValid(e) ? r(t, e) : null;
}
const pl = (r, t) => 864e5 * r[t], yl = (r, t) => null, Da = (r, t, e) => {
  if (e + 1 >= t.length)
    return null;
  const i = et(t[e]), n = et(t[e + 1]);
  return r.subarray(i, n);
}, gl = ({ offset: r, values: t }, e) => {
  const i = r + e;
  return (t[i >> 3] & 1 << i % 8) !== 0;
}, Ta = ({ values: r }, t) => pl(r, t), Fa = ({ values: r }, t) => et(r[t]), ge = ({ stride: r, values: t }, e) => t[r * e], ml = ({ stride: r, values: t }, e) => ca(t[r * e]), Ma = ({ values: r }, t) => r[t], _l = ({ stride: r, values: t }, e) => t.subarray(r * e, r * (e + 1)), Ca = ({ values: r, valueOffsets: t }, e) => Da(r, t, e), ka = ({ values: r, valueOffsets: t }, e) => {
  const i = Da(r, t, e);
  return i !== null ? cn(i) : null;
}, vl = ({ values: r }, t) => r[t], bl = ({ type: r, values: t }, e) => r.precision !== lt.HALF ? t[e] : ca(t[e]), Sl = (r, t) => r.type.unit === Mt.DAY ? Ta(r, t) : Fa(r, t), Pa = ({ values: r }, t) => 1e3 * et(r[t]), xa = ({ values: r }, t) => et(r[t]), Ua = ({ values: r }, t) => Po(r[t], BigInt(1e3)), Va = ({ values: r }, t) => Po(r[t], BigInt(1e6)), Il = (r, t) => {
  switch (r.type.unit) {
    case M.SECOND:
      return Pa(r, t);
    case M.MILLISECOND:
      return xa(r, t);
    case M.MICROSECOND:
      return Ua(r, t);
    case M.NANOSECOND:
      return Va(r, t);
  }
}, za = ({ values: r }, t) => r[t], qa = ({ values: r }, t) => r[t], Ha = ({ values: r }, t) => r[t], Wa = ({ values: r }, t) => r[t], wl = (r, t) => {
  switch (r.type.unit) {
    case M.SECOND:
      return za(r, t);
    case M.MILLISECOND:
      return qa(r, t);
    case M.MICROSECOND:
      return Ha(r, t);
    case M.NANOSECOND:
      return Wa(r, t);
  }
}, El = ({ values: r, stride: t }, e) => On.decimal(r.subarray(t * e, t * (e + 1))), Al = (r, t) => {
  const { valueOffsets: e, stride: i, children: n } = r, { [t * i]: s, [t * i + 1]: o } = e, l = n[0].slice(s, o - s);
  return new Q([l]);
}, Ol = (r, t) => {
  const { valueOffsets: e, children: i } = r, { [t]: n, [t + 1]: s } = e, o = i[0];
  return new Bn(o.slice(n, s - n));
}, Rl = (r, t) => new Ln(r, t), Ll = (r, t) => r.type.mode === ht.Dense ? Ga(r, t) : ja(r, t), Ga = (r, t) => {
  const e = r.type.typeIdToChildIndex[r.typeIds[t]], i = r.children[e];
  return It.visit(i, r.valueOffsets[t]);
}, ja = (r, t) => {
  const e = r.type.typeIdToChildIndex[r.typeIds[t]], i = r.children[e];
  return It.visit(i, t);
}, Bl = (r, t) => {
  var e;
  return (e = r.dictionary) === null || e === void 0 ? void 0 : e.get(r.values[t]);
}, Nl = (r, t) => r.type.unit === Jt.DAY_TIME ? Ya(r, t) : Ka(r, t), Ya = ({ values: r }, t) => r.subarray(2 * t, 2 * (t + 1)), Ka = ({ values: r }, t) => {
  const e = r[t], i = new Int32Array(2);
  return i[0] = Math.trunc(e / 12), i[1] = Math.trunc(e % 12), i;
}, Qa = ({ values: r }, t) => r[t], Ja = ({ values: r }, t) => r[t], Za = ({ values: r }, t) => r[t], Xa = ({ values: r }, t) => r[t], Dl = (r, t) => {
  switch (r.type.unit) {
    case M.SECOND:
      return Qa(r, t);
    case M.MILLISECOND:
      return Ja(r, t);
    case M.MICROSECOND:
      return Za(r, t);
    case M.NANOSECOND:
      return Xa(r, t);
  }
}, Tl = (r, t) => {
  const { stride: e, children: i } = r, s = i[0].slice(t * e, e);
  return new Q([s]);
};
N.prototype.visitNull = k(yl);
N.prototype.visitBool = k(gl);
N.prototype.visitInt = k(vl);
N.prototype.visitInt8 = k(ge);
N.prototype.visitInt16 = k(ge);
N.prototype.visitInt32 = k(ge);
N.prototype.visitInt64 = k(Ma);
N.prototype.visitUint8 = k(ge);
N.prototype.visitUint16 = k(ge);
N.prototype.visitUint32 = k(ge);
N.prototype.visitUint64 = k(Ma);
N.prototype.visitFloat = k(bl);
N.prototype.visitFloat16 = k(ml);
N.prototype.visitFloat32 = k(ge);
N.prototype.visitFloat64 = k(ge);
N.prototype.visitUtf8 = k(ka);
N.prototype.visitLargeUtf8 = k(ka);
N.prototype.visitBinary = k(Ca);
N.prototype.visitLargeBinary = k(Ca);
N.prototype.visitFixedSizeBinary = k(_l);
N.prototype.visitDate = k(Sl);
N.prototype.visitDateDay = k(Ta);
N.prototype.visitDateMillisecond = k(Fa);
N.prototype.visitTimestamp = k(Il);
N.prototype.visitTimestampSecond = k(Pa);
N.prototype.visitTimestampMillisecond = k(xa);
N.prototype.visitTimestampMicrosecond = k(Ua);
N.prototype.visitTimestampNanosecond = k(Va);
N.prototype.visitTime = k(wl);
N.prototype.visitTimeSecond = k(za);
N.prototype.visitTimeMillisecond = k(qa);
N.prototype.visitTimeMicrosecond = k(Ha);
N.prototype.visitTimeNanosecond = k(Wa);
N.prototype.visitDecimal = k(El);
N.prototype.visitList = k(Al);
N.prototype.visitStruct = k(Rl);
N.prototype.visitUnion = k(Ll);
N.prototype.visitDenseUnion = k(Ga);
N.prototype.visitSparseUnion = k(ja);
N.prototype.visitDictionary = k(Bl);
N.prototype.visitInterval = k(Nl);
N.prototype.visitIntervalDayTime = k(Ya);
N.prototype.visitIntervalYearMonth = k(Ka);
N.prototype.visitDuration = k(Dl);
N.prototype.visitDurationSecond = k(Qa);
N.prototype.visitDurationMillisecond = k(Ja);
N.prototype.visitDurationMicrosecond = k(Za);
N.prototype.visitDurationNanosecond = k(Xa);
N.prototype.visitFixedSizeList = k(Tl);
N.prototype.visitMap = k(Ol);
const It = new N(), Ce = Symbol.for("keys"), ze = Symbol.for("vals"), ke = Symbol.for("kKeysAsStrings"), pn = Symbol.for("_kKeysAsStrings");
class Bn {
  constructor(t) {
    return this[Ce] = new Q([t.children[0]]).memoize(), this[ze] = t.children[1], new Proxy(this, new Ml());
  }
  /** @ignore */
  get [ke]() {
    return this[pn] || (this[pn] = Array.from(this[Ce].toArray(), String));
  }
  [Symbol.iterator]() {
    return new Fl(this[Ce], this[ze]);
  }
  get size() {
    return this[Ce].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Ce], e = this[ze], i = {};
    for (let n = -1, s = t.length; ++n < s; )
      i[t.get(n)] = It.visit(e, n);
    return i;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${ur(t)}: ${ur(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
class Fl {
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
        It.visit(this.vals, t)
      ]
    });
  }
}
class Ml {
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
    return t[ke];
  }
  has(t, e) {
    return t[ke].includes(e);
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[ke].indexOf(e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const i = t[ke].indexOf(e);
    if (i !== -1) {
      const n = It.visit(Reflect.get(t, ze), i);
      return Reflect.set(t, e, n), n;
    }
  }
  set(t, e, i) {
    const n = t[ke].indexOf(e);
    return n !== -1 ? (Ct.visit(Reflect.get(t, ze), n, i), Reflect.set(t, e, i)) : Reflect.has(t, e) ? Reflect.set(t, e, i) : !1;
  }
}
Object.defineProperties(Bn.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [Ce]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [ze]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [pn]: { writable: !0, enumerable: !1, configurable: !1, value: null }
});
let to;
function $a(r, t, e, i) {
  const { length: n = 0 } = r;
  let s = typeof t != "number" ? 0 : t, o = typeof e != "number" ? n : e;
  return s < 0 && (s = (s % n + n) % n), o < 0 && (o = (o % n + n) % n), o < s && (to = s, s = o, o = to), o > n && (o = n), i ? i(r, s, o) : [s, o];
}
const Nn = (r, t) => r < 0 ? t + r : r, eo = (r) => r !== r;
function Ke(r) {
  if (typeof r !== "object" || r === null)
    return eo(r) ? eo : (e) => e === r;
  if (r instanceof Date) {
    const e = r.valueOf();
    return (i) => i instanceof Date ? i.valueOf() === e : !1;
  }
  return ArrayBuffer.isView(r) ? (e) => e ? Tu(r, e) : !1 : r instanceof Map ? kl(r) : Array.isArray(r) ? Cl(r) : r instanceof Q ? Pl(r) : xl(r, !0);
}
function Cl(r) {
  const t = [];
  for (let e = -1, i = r.length; ++e < i; )
    t[e] = Ke(r[e]);
  return Ui(t);
}
function kl(r) {
  let t = -1;
  const e = [];
  for (const i of r.values())
    e[++t] = Ke(i);
  return Ui(e);
}
function Pl(r) {
  const t = [];
  for (let e = -1, i = r.length; ++e < i; )
    t[e] = Ke(r.get(e));
  return Ui(t);
}
function xl(r, t = !1) {
  const e = Object.keys(r);
  if (!t && e.length === 0)
    return () => !1;
  const i = [];
  for (let n = -1, s = e.length; ++n < s; )
    i[n] = Ke(r[e[n]]);
  return Ui(i, e);
}
function Ui(r, t) {
  return (e) => {
    if (!e || typeof e != "object")
      return !1;
    switch (e.constructor) {
      case Array:
        return Ul(r, e);
      case Map:
        return ro(r, e, e.keys());
      case Bn:
      case Ln:
      case Object:
      case void 0:
        return ro(r, e, t || Object.keys(e));
    }
    return e instanceof Q ? Vl(r, e) : !1;
  };
}
function Ul(r, t) {
  const e = r.length;
  if (t.length !== e)
    return !1;
  for (let i = -1; ++i < e; )
    if (!r[i](t[i]))
      return !1;
  return !0;
}
function Vl(r, t) {
  const e = r.length;
  if (t.length !== e)
    return !1;
  for (let i = -1; ++i < e; )
    if (!r[i](t.get(i)))
      return !1;
  return !0;
}
function ro(r, t, e) {
  const i = e[Symbol.iterator](), n = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), s = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const u = r.length;
  let l = s.next(), f = i.next(), d = n.next();
  for (; o < u && !f.done && !d.done && !l.done && !(f.value !== d.value || !r[o](l.value)); ++o, f = i.next(), d = n.next(), l = s.next())
    ;
  return o === u && f.done && d.done && l.done ? !0 : (i.return && i.return(), n.return && n.return(), s.return && s.return(), !1);
}
function tc(r, t, e, i) {
  return (e & 1 << i) !== 0;
}
function zl(r, t, e, i) {
  return (e & 1 << i) >> i;
}
function Oi(r, t, e) {
  const i = e.byteLength + 7 & -8;
  if (r > 0 || e.byteLength < i) {
    const n = new Uint8Array(i);
    return n.set(r % 8 === 0 ? e.subarray(r >> 3) : (
      // Otherwise iterate each bit from the offset and return a new one
      Ri(new Dn(e, r, t, null, tc)).subarray(0, i)
    )), n;
  }
  return e;
}
function Ri(r) {
  const t = [];
  let e = 0, i = 0, n = 0;
  for (const o of r)
    o && (n |= 1 << i), ++i === 8 && (t[e++] = n, n = i = 0);
  (e === 0 || i > 0) && (t[e++] = n);
  const s = new Uint8Array(t.length + 7 & -8);
  return s.set(t), s;
}
class Dn {
  constructor(t, e, i, n, s) {
    this.bytes = t, this.length = i, this.context = n, this.get = s, this.bit = e % 8, this.byteIndex = e >> 3, this.byte = t[this.byteIndex++], this.index = 0;
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
function yn(r, t, e) {
  if (e - t <= 0)
    return 0;
  if (e - t < 8) {
    let s = 0;
    for (const o of new Dn(r, t, e - t, r, zl))
      s += o;
    return s;
  }
  const i = e >> 3 << 3, n = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return (
    // Get the popcnt of bits between the left hand side, and the next highest multiple of 8
    yn(r, t, n) + // Get the popcnt of bits between the right hand side, and the next lowest multiple of 8
    yn(r, i, e) + // Get the popcnt of all bits between the left and right hand sides' multiples of 8
    ql(r, n >> 3, i - n >> 3)
  );
}
function ql(r, t, e) {
  let i = 0, n = Math.trunc(t);
  const s = new DataView(r.buffer, r.byteOffset, r.byteLength), o = e === void 0 ? r.byteLength : n + e;
  for (; o - n >= 4; )
    i += $i(s.getUint32(n)), n += 4;
  for (; o - n >= 2; )
    i += $i(s.getUint16(n)), n += 2;
  for (; o - n >= 1; )
    i += $i(s.getUint8(n)), n += 1;
  return i;
}
function $i(r) {
  let t = Math.trunc(r);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
const Hl = -1;
class X {
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
      return B.isSparseUnion(t) ? this.children.some((e) => e.nullable) : B.isDenseUnion(t) ? this.children.some((e) => e.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
    }
    return !0;
  }
  get byteLength() {
    let t = 0;
    const { valueOffsets: e, values: i, nullBitmap: n, typeIds: s } = this;
    return e && (t += e.byteLength), i && (t += i.byteLength), n && (t += n.byteLength), s && (t += s.byteLength), this.children.reduce((o, u) => o + u.byteLength, t);
  }
  get nullCount() {
    if (B.isUnion(this.type))
      return this.children.reduce((i, n) => i + n.nullCount, 0);
    let t = this._nullCount, e;
    return t <= Hl && (e = this.nullBitmap) && (this._nullCount = t = e.length === 0 ? (
      // no null bitmap, so all values are valid
      0
    ) : this.length - yn(e, this.offset, this.offset + this.length)), t;
  }
  constructor(t, e, i, n, s, o = [], u) {
    this.type = t, this.children = o, this.dictionary = u, this.offset = Math.floor(Math.max(e || 0, 0)), this.length = Math.floor(Math.max(i || 0, 0)), this._nullCount = Math.floor(Math.max(n || 0, -1));
    let l;
    s instanceof X ? (this.stride = s.stride, this.values = s.values, this.typeIds = s.typeIds, this.nullBitmap = s.nullBitmap, this.valueOffsets = s.valueOffsets) : (this.stride = re(t), s && ((l = s[0]) && (this.valueOffsets = l), (l = s[1]) && (this.values = l), (l = s[2]) && (this.nullBitmap = l), (l = s[3]) && (this.typeIds = l)));
  }
  getValid(t) {
    const { type: e } = this;
    if (B.isUnion(e)) {
      const i = e, n = this.children[i.typeIdToChildIndex[this.typeIds[t]]], s = i.mode === ht.Dense ? this.valueOffsets[t] : t;
      return n.getValid(s);
    }
    if (this.nullable && this.nullCount > 0) {
      const i = this.offset + t;
      return (this.nullBitmap[i >> 3] & 1 << i % 8) !== 0;
    }
    return !0;
  }
  setValid(t, e) {
    let i;
    const { type: n } = this;
    if (B.isUnion(n)) {
      const s = n, o = this.children[s.typeIdToChildIndex[this.typeIds[t]]], u = s.mode === ht.Dense ? this.valueOffsets[t] : t;
      i = o.getValid(u), o.setValid(u, e);
    } else {
      let { nullBitmap: s } = this;
      const { offset: o, length: u } = this, l = o + t, f = 1 << l % 8, d = l >> 3;
      (!s || s.byteLength <= d) && (s = new Uint8Array((o + u + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (s.set(Oi(o, u, this.nullBitmap), 0), Object.assign(this, { nullBitmap: s })) : Object.assign(this, { nullBitmap: s, _nullCount: 0 }));
      const y = s[d];
      i = (y & f) !== 0, s[d] = e ? y | f : y & ~f;
    }
    return i !== !!e && (this._nullCount = this.nullCount + (e ? -1 : 1)), e;
  }
  clone(t = this.type, e = this.offset, i = this.length, n = this._nullCount, s = this, o = this.children) {
    return new X(t, e, i, n, s, o, this.dictionary);
  }
  slice(t, e) {
    const { stride: i, typeId: n, children: s } = this, o = +(this._nullCount === 0) - 1, u = n === 16 ? i : 1, l = this._sliceBuffers(t, e, i, n);
    return this.clone(
      this.type,
      this.offset + t,
      e,
      o,
      l,
      // Don't slice children if we have value offsets (the variable-width types)
      s.length === 0 || this.valueOffsets ? s : this._sliceChildren(s, u * t, u * e)
    );
  }
  _changeLengthAndBackfillNullBitmap(t) {
    if (this.typeId === v.Null)
      return this.clone(this.type, 0, t, 0);
    const { length: e, nullCount: i } = this, n = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
    n[e >> 3] = (1 << e - (e & -8)) - 1, i > 0 && n.set(Oi(this.offset, e, this.nullBitmap), 0);
    const s = this.buffers;
    return s[ee.VALIDITY] = n, this.clone(this.type, 0, t, i + (t - e), s);
  }
  _sliceBuffers(t, e, i, n) {
    let s;
    const { buffers: o } = this;
    return (s = o[ee.TYPE]) && (o[ee.TYPE] = s.subarray(t, t + e)), (s = o[ee.OFFSET]) && (o[ee.OFFSET] = s.subarray(t, t + e + 1)) || // Otherwise if no offsets, slice the data buffer. Don't slice the data vector for Booleans, since the offset goes by bits not bytes
    (s = o[ee.DATA]) && (o[ee.DATA] = n === 6 ? s : s.subarray(i * t, i * (t + e))), o;
  }
  _sliceChildren(t, e, i) {
    return t.map((n) => n.slice(e, i));
  }
}
X.prototype.children = Object.freeze([]);
class cr extends H {
  visit(t) {
    return this.getVisitFn(t.type).call(this, t);
  }
  visitNull(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["length"]: n = 0 } = t;
    return new X(e, i, n, n);
  }
  visitBool(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length >> 3, ["nullCount"]: u = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, u, [void 0, s, n]);
  }
  visitInt(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length, ["nullCount"]: u = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, u, [void 0, s, n]);
  }
  visitFloat(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length, ["nullCount"]: u = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, u, [void 0, s, n]);
  }
  visitUtf8(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.data), s = j(t.nullBitmap), o = $e(t.valueOffsets), { ["length"]: u = o.length - 1, ["nullCount"]: l = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, u, l, [o, n, s]);
  }
  visitLargeUtf8(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.data), s = j(t.nullBitmap), o = Hs(t.valueOffsets), { ["length"]: u = o.length - 1, ["nullCount"]: l = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, u, l, [o, n, s]);
  }
  visitBinary(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.data), s = j(t.nullBitmap), o = $e(t.valueOffsets), { ["length"]: u = o.length - 1, ["nullCount"]: l = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, u, l, [o, n, s]);
  }
  visitLargeBinary(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.data), s = j(t.nullBitmap), o = Hs(t.valueOffsets), { ["length"]: u = o.length - 1, ["nullCount"]: l = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, u, l, [o, n, s]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length / re(e), ["nullCount"]: u = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, u, [void 0, s, n]);
  }
  visitDate(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length / re(e), ["nullCount"]: u = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, u, [void 0, s, n]);
  }
  visitTimestamp(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length / re(e), ["nullCount"]: u = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, u, [void 0, s, n]);
  }
  visitTime(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length / re(e), ["nullCount"]: u = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, u, [void 0, s, n]);
  }
  visitDecimal(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length / re(e), ["nullCount"]: u = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, u, [void 0, s, n]);
  }
  visitList(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["child"]: n } = t, s = j(t.nullBitmap), o = $e(t.valueOffsets), { ["length"]: u = o.length - 1, ["nullCount"]: l = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, u, l, [o, void 0, s], [n]);
  }
  visitStruct(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["children"]: n = [] } = t, s = j(t.nullBitmap), { length: o = n.reduce((l, { length: f }) => Math.max(l, f), 0), nullCount: u = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, u, [void 0, void 0, s], n);
  }
  visitUnion(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["children"]: n = [] } = t, s = tt(e.ArrayType, t.typeIds), { ["length"]: o = s.length, ["nullCount"]: u = -1 } = t;
    if (B.isSparseUnion(e))
      return new X(e, i, o, u, [void 0, void 0, void 0, s], n);
    const l = $e(t.valueOffsets);
    return new X(e, i, o, u, [l, void 0, void 0, s], n);
  }
  visitDictionary(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.nullBitmap), s = tt(e.indices.ArrayType, t.data), { ["dictionary"]: o = new Q([new cr().visit({ type: e.dictionary })]) } = t, { ["length"]: u = s.length, ["nullCount"]: l = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, u, l, [void 0, s, n], [], o);
  }
  visitInterval(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length / re(e), ["nullCount"]: u = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, u, [void 0, s, n]);
  }
  visitDuration(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, n = j(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length, ["nullCount"]: u = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, u, [void 0, s, n]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["child"]: n = new cr().visit({ type: e.valueType }) } = t, s = j(t.nullBitmap), { ["length"]: o = n.length / re(e), ["nullCount"]: u = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, u, [void 0, void 0, s], [n]);
  }
  visitMap(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["child"]: n = new cr().visit({ type: e.childType }) } = t, s = j(t.nullBitmap), o = $e(t.valueOffsets), { ["length"]: u = o.length - 1, ["nullCount"]: l = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, u, l, [o, void 0, s], [n]);
  }
}
const Wl = new cr();
function W(r) {
  return Wl.visit(r);
}
class io {
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
function Gl(r) {
  return r.some((t) => t.nullable);
}
function ec(r) {
  return r.reduce((t, e) => t + e.nullCount, 0);
}
function rc(r) {
  return r.reduce((t, e, i) => (t[i + 1] = t[i] + e.length, t), new Uint32Array(r.length + 1));
}
function ic(r, t, e, i) {
  const n = [];
  for (let s = -1, o = r.length; ++s < o; ) {
    const u = r[s], l = t[s], { length: f } = u;
    if (l >= i)
      break;
    if (e >= l + f)
      continue;
    if (l >= e && l + f <= i) {
      n.push(u);
      continue;
    }
    const d = Math.max(0, e - l), y = Math.min(i - l, f);
    n.push(u.slice(d, y - d));
  }
  return n.length === 0 && n.push(r[0].slice(0, 0)), n;
}
function Tn(r, t, e, i) {
  let n = 0, s = 0, o = t.length - 1;
  do {
    if (n >= o - 1)
      return e < t[o] ? i(r, n, e - t[n]) : null;
    s = n + Math.trunc((o - n) * 0.5), e < t[s] ? o = s : n = s;
  } while (n < o);
}
function Fn(r, t) {
  return r.getValid(t);
}
function Li(r) {
  function t(e, i, n) {
    return r(e[i], n);
  }
  return function(e) {
    const i = this.data;
    return Tn(i, this._offsets, e, t);
  };
}
function nc(r) {
  let t;
  function e(i, n, s) {
    return r(i[n], s, t);
  }
  return function(i, n) {
    const s = this.data;
    t = n;
    const o = Tn(s, this._offsets, i, e);
    return t = void 0, o;
  };
}
function sc(r) {
  let t;
  function e(i, n, s) {
    let o = s, u = 0, l = 0;
    for (let f = n - 1, d = i.length; ++f < d; ) {
      const y = i[f];
      if (~(u = r(y, t, o)))
        return l + u;
      o = 0, l += y.length;
    }
    return -1;
  }
  return function(i, n) {
    t = i;
    const s = this.data, o = typeof n != "number" ? e(s, 0, 0) : Tn(s, this._offsets, n, e);
    return t = void 0, o;
  };
}
class D extends H {
}
function jl(r, t) {
  return t === null && r.length > 0 ? 0 : -1;
}
function Yl(r, t) {
  const { nullBitmap: e } = r;
  if (!e || r.nullCount <= 0)
    return -1;
  let i = 0;
  for (const n of new Dn(e, r.offset + (t || 0), r.length, e, tc)) {
    if (!n)
      return i;
    ++i;
  }
  return -1;
}
function U(r, t, e) {
  if (t === void 0)
    return -1;
  if (t === null)
    switch (r.typeId) {
      // Unions don't have a nullBitmap of its own, so compare the `searchElement` to `get()`.
      case v.Union:
        break;
      // Dictionaries do have a nullBitmap, but their dictionary could also have null elements.
      case v.Dictionary:
        break;
      // All other types can iterate the null bitmap
      default:
        return Yl(r, e);
    }
  const i = It.getVisitFn(r), n = Ke(t);
  for (let s = (e || 0) - 1, o = r.length; ++s < o; )
    if (n(i(r, s)))
      return s;
  return -1;
}
function oc(r, t, e) {
  const i = It.getVisitFn(r), n = Ke(t);
  for (let s = (e || 0) - 1, o = r.length; ++s < o; )
    if (n(i(r, s)))
      return s;
  return -1;
}
D.prototype.visitNull = jl;
D.prototype.visitBool = U;
D.prototype.visitInt = U;
D.prototype.visitInt8 = U;
D.prototype.visitInt16 = U;
D.prototype.visitInt32 = U;
D.prototype.visitInt64 = U;
D.prototype.visitUint8 = U;
D.prototype.visitUint16 = U;
D.prototype.visitUint32 = U;
D.prototype.visitUint64 = U;
D.prototype.visitFloat = U;
D.prototype.visitFloat16 = U;
D.prototype.visitFloat32 = U;
D.prototype.visitFloat64 = U;
D.prototype.visitUtf8 = U;
D.prototype.visitLargeUtf8 = U;
D.prototype.visitBinary = U;
D.prototype.visitLargeBinary = U;
D.prototype.visitFixedSizeBinary = U;
D.prototype.visitDate = U;
D.prototype.visitDateDay = U;
D.prototype.visitDateMillisecond = U;
D.prototype.visitTimestamp = U;
D.prototype.visitTimestampSecond = U;
D.prototype.visitTimestampMillisecond = U;
D.prototype.visitTimestampMicrosecond = U;
D.prototype.visitTimestampNanosecond = U;
D.prototype.visitTime = U;
D.prototype.visitTimeSecond = U;
D.prototype.visitTimeMillisecond = U;
D.prototype.visitTimeMicrosecond = U;
D.prototype.visitTimeNanosecond = U;
D.prototype.visitDecimal = U;
D.prototype.visitList = U;
D.prototype.visitStruct = U;
D.prototype.visitUnion = U;
D.prototype.visitDenseUnion = oc;
D.prototype.visitSparseUnion = oc;
D.prototype.visitDictionary = U;
D.prototype.visitInterval = U;
D.prototype.visitIntervalDayTime = U;
D.prototype.visitIntervalYearMonth = U;
D.prototype.visitDuration = U;
D.prototype.visitDurationSecond = U;
D.prototype.visitDurationMillisecond = U;
D.prototype.visitDurationMicrosecond = U;
D.prototype.visitDurationNanosecond = U;
D.prototype.visitFixedSizeList = U;
D.prototype.visitMap = U;
const Bi = new D();
class T extends H {
}
function P(r) {
  const { type: t } = r;
  if (r.nullCount === 0 && r.stride === 1 && // Don't defer to native iterator for timestamps since Numbers are expected
  // (DataType.isTimestamp(type)) && type.unit === TimeUnit.MILLISECOND ||
  (B.isInt(t) && t.bitWidth !== 64 || B.isTime(t) && t.bitWidth !== 64 || B.isFloat(t) && t.precision !== lt.HALF))
    return new io(r.data.length, (i) => {
      const n = r.data[i];
      return n.values.subarray(0, n.length)[Symbol.iterator]();
    });
  let e = 0;
  return new io(r.data.length, (i) => {
    const s = r.data[i].length, o = r.slice(e, e + s);
    return e += s, new Kl(o);
  });
}
class Kl {
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
T.prototype.visitNull = P;
T.prototype.visitBool = P;
T.prototype.visitInt = P;
T.prototype.visitInt8 = P;
T.prototype.visitInt16 = P;
T.prototype.visitInt32 = P;
T.prototype.visitInt64 = P;
T.prototype.visitUint8 = P;
T.prototype.visitUint16 = P;
T.prototype.visitUint32 = P;
T.prototype.visitUint64 = P;
T.prototype.visitFloat = P;
T.prototype.visitFloat16 = P;
T.prototype.visitFloat32 = P;
T.prototype.visitFloat64 = P;
T.prototype.visitUtf8 = P;
T.prototype.visitLargeUtf8 = P;
T.prototype.visitBinary = P;
T.prototype.visitLargeBinary = P;
T.prototype.visitFixedSizeBinary = P;
T.prototype.visitDate = P;
T.prototype.visitDateDay = P;
T.prototype.visitDateMillisecond = P;
T.prototype.visitTimestamp = P;
T.prototype.visitTimestampSecond = P;
T.prototype.visitTimestampMillisecond = P;
T.prototype.visitTimestampMicrosecond = P;
T.prototype.visitTimestampNanosecond = P;
T.prototype.visitTime = P;
T.prototype.visitTimeSecond = P;
T.prototype.visitTimeMillisecond = P;
T.prototype.visitTimeMicrosecond = P;
T.prototype.visitTimeNanosecond = P;
T.prototype.visitDecimal = P;
T.prototype.visitList = P;
T.prototype.visitStruct = P;
T.prototype.visitUnion = P;
T.prototype.visitDenseUnion = P;
T.prototype.visitSparseUnion = P;
T.prototype.visitDictionary = P;
T.prototype.visitInterval = P;
T.prototype.visitIntervalDayTime = P;
T.prototype.visitIntervalYearMonth = P;
T.prototype.visitDuration = P;
T.prototype.visitDurationSecond = P;
T.prototype.visitDurationMillisecond = P;
T.prototype.visitDurationMicrosecond = P;
T.prototype.visitDurationNanosecond = P;
T.prototype.visitFixedSizeList = P;
T.prototype.visitMap = P;
const Mn = new T();
var ac;
const cc = {}, uc = {};
class Q {
  constructor(t) {
    var e, i, n;
    const s = t[0] instanceof Q ? t.flatMap((u) => u.data) : t;
    if (s.length === 0 || s.some((u) => !(u instanceof X)))
      throw new TypeError("Vector constructor expects an Array of Data instances.");
    const o = (e = s[0]) === null || e === void 0 ? void 0 : e.type;
    switch (s.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        const { get: u, set: l, indexOf: f } = cc[o.typeId], d = s[0];
        this.isValid = (y) => Fn(d, y), this.get = (y) => u(d, y), this.set = (y, h) => l(d, y, h), this.indexOf = (y) => f(d, y), this._offsets = [0, d.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, uc[o.typeId]), this._offsets = rc(s);
        break;
    }
    this.data = s, this.type = o, this.stride = re(o), this.numChildren = (n = (i = o.children) === null || i === void 0 ? void 0 : i.length) !== null && n !== void 0 ? n : 0, this.length = this._offsets.at(-1);
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
    return Gl(this.data);
  }
  /**
   * The number of null elements in this Vector.
   */
  get nullCount() {
    return ec(this.data);
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
    return `${v[this.type.typeId]}Vector`;
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
    return this.get(Nn(t, this.length));
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
    return Mn.visit(this);
  }
  /**
   * Combines two or more Vectors of the same type.
   * @param others Additional Vectors to add to the end of this Vector.
   */
  concat(...t) {
    return new Q(this.data.concat(t.flatMap((e) => e.data).flat(Number.POSITIVE_INFINITY)));
  }
  /**
   * Return a zero-copy sub-section of this Vector.
   * @param start The beginning of the specified portion of the Vector.
   * @param end The end of the specified portion of the Vector. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    return new Q($a(this, t, e, ({ data: i, _offsets: n }, s, o) => ic(i, n, s, o)));
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
    const { type: t, data: e, length: i, stride: n, ArrayType: s } = this;
    switch (t.typeId) {
      case v.Int:
      case v.Float:
      case v.Decimal:
      case v.Time:
      case v.Timestamp:
        switch (e.length) {
          case 0:
            return new s();
          case 1:
            return e[0].values.subarray(0, i * n);
          default:
            return e.reduce((o, { values: u, length: l }) => (o.array.set(u.subarray(0, l * n), o.offset), o.offset += l * n, o), { array: new s(i * n), offset: 0 }).array;
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
    return this.getChildAt((e = this.type.children) === null || e === void 0 ? void 0 : e.findIndex((i) => i.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    return t > -1 && t < this.numChildren ? new Q(this.data.map(({ children: e }) => e[t])) : null;
  }
  get isMemoized() {
    return B.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1;
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
    if (B.isDictionary(this.type)) {
      const t = new Ni(this.data[0].dictionary), e = this.data.map((i) => {
        const n = i.clone();
        return n.dictionary = t, n;
      });
      return new Q(e);
    }
    return new Ni(this);
  }
  /**
   * Returns a vector without memoization of the {@link get} method. If this
   * vector is not memoized, this method returns this vector.
   *
   * @returns A new vector without memoization.
   */
  unmemoize() {
    if (B.isDictionary(this.type) && this.isMemoized) {
      const t = this.data[0].dictionary.unmemoize(), e = this.data.map((i) => {
        const n = i.clone();
        return n.dictionary = t, n;
      });
      return new Q(e);
    }
    return this;
  }
}
ac = Symbol.toStringTag;
Q[ac] = ((r) => {
  r.type = B.prototype, r.data = [], r.length = 0, r.stride = 1, r.numChildren = 0, r._offsets = new Uint32Array([0]), r[Symbol.isConcatSpreadable] = !0;
  const t = Object.keys(v).map((e) => v[e]).filter((e) => typeof e == "number" && e !== v.NONE);
  for (const e of t) {
    const i = It.getVisitFnByTypeId(e), n = Ct.getVisitFnByTypeId(e), s = Bi.getVisitFnByTypeId(e);
    cc[e] = { get: i, set: n, indexOf: s }, uc[e] = Object.create(r, {
      isValid: { value: Li(Fn) },
      get: { value: Li(It.getVisitFnByTypeId(e)) },
      set: { value: nc(Ct.getVisitFnByTypeId(e)) },
      indexOf: { value: sc(Bi.getVisitFnByTypeId(e)) }
    });
  }
  return "Vector";
})(Q.prototype);
class Ni extends Q {
  constructor(t) {
    super(t.data);
    const e = this.get, i = this.set, n = this.slice, s = new Array(this.length);
    Object.defineProperty(this, "get", {
      value(o) {
        const u = s[o];
        if (u !== void 0)
          return u;
        const l = e.call(this, o);
        return s[o] = l, l;
      }
    }), Object.defineProperty(this, "set", {
      value(o, u) {
        i.call(this, o, u), s[o] = u;
      }
    }), Object.defineProperty(this, "slice", {
      value: (o, u) => new Ni(n.call(this, o, u))
    }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", {
      value: () => new Q(this.data)
    }), Object.defineProperty(this, "memoize", {
      value: () => this
    });
  }
}
class gn {
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
  static createBlock(t, e, i, n) {
    return t.prep(8, 24), t.writeInt64(BigInt(n ?? 0)), t.pad(4), t.writeInt32(i), t.writeInt64(BigInt(e ?? 0)), t.offset();
  }
}
class Ot {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFooter(t, e) {
    return (e || new Ot()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFooter(t, e) {
    return t.setPosition(t.position() + Z), (e || new Ot()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : at.V1;
  }
  schema(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new qt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  dictionaries(t, e) {
    const i = this.bb.__offset(this.bb_pos, 8);
    return i ? (e || new gn()).__init(this.bb.__vector(this.bb_pos + i) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, e) {
    const i = this.bb.__offset(this.bb_pos, 10);
    return i ? (e || new gn()).__init(this.bb.__vector(this.bb_pos + i) + t * 24, this.bb) : null;
  }
  recordBatchesLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, e) {
    const i = this.bb.__offset(this.bb_pos, 12);
    return i ? (e || new ut()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startFooter(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, at.V1);
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
    for (let i = e.length - 1; i >= 0; i--)
      t.addOffset(e[i]);
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
class J {
  constructor(t = [], e, i, n = at.V5) {
    this.fields = t || [], this.metadata = e || /* @__PURE__ */ new Map(), i || (i = mn(this.fields)), this.dictionaries = i, this.metadataVersion = n;
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
    const e = new Set(t), i = this.fields.filter((n) => e.has(n.name));
    return new J(i, this.metadata);
  }
  /**
   * Construct a new Schema containing only fields at the specified indices.
   *
   * @param fieldIndices Indices of fields to keep.
   * @returns A new Schema of fields at the specified indices.
   */
  selectAt(t) {
    const e = t.map((i) => this.fields[i]).filter(Boolean);
    return new J(e, this.metadata);
  }
  assign(...t) {
    const e = t[0] instanceof J ? t[0] : Array.isArray(t[0]) ? new J(t[0]) : new J(t), i = [...this.fields], n = Kr(Kr(/* @__PURE__ */ new Map(), this.metadata), e.metadata), s = e.fields.filter((u) => {
      const l = i.findIndex((f) => f.name === u.name);
      return ~l ? (i[l] = u.clone({
        metadata: Kr(Kr(/* @__PURE__ */ new Map(), i[l].metadata), u.metadata)
      })) && !1 : !0;
    }), o = mn(s, /* @__PURE__ */ new Map());
    return new J([...i, ...s], n, new Map([...this.dictionaries, ...o]));
  }
}
J.prototype.fields = null;
J.prototype.metadata = null;
J.prototype.dictionaries = null;
class it {
  /** @nocollapse */
  static new(...t) {
    let [e, i, n, s] = t;
    return t[0] && typeof t[0] == "object" && ({ name: e } = t[0], i === void 0 && (i = t[0].type), n === void 0 && (n = t[0].nullable), s === void 0 && (s = t[0].metadata)), new it(`${e}`, i, n, s);
  }
  constructor(t, e, i = !1, n) {
    this.name = t, this.type = e, this.nullable = i, this.metadata = n || /* @__PURE__ */ new Map();
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
    let [e, i, n, s] = t;
    return !t[0] || typeof t[0] != "object" ? [e = this.name, i = this.type, n = this.nullable, s = this.metadata] = t : { name: e = this.name, type: i = this.type, nullable: n = this.nullable, metadata: s = this.metadata } = t[0], it.new(e, i, n, s);
  }
}
it.prototype.type = null;
it.prototype.name = null;
it.prototype.nullable = null;
it.prototype.metadata = null;
function Kr(r, t) {
  return new Map([...r || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function mn(r, t = /* @__PURE__ */ new Map()) {
  for (let e = -1, i = r.length; ++e < i; ) {
    const s = r[e].type;
    if (B.isDictionary(s)) {
      if (!t.has(s.id))
        t.set(s.id, s.dictionary);
      else if (t.get(s.id) !== s.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    s.children && s.children.length > 0 && mn(s.children, t);
  }
  return t;
}
var Ql = Fo, Jl = qe;
class fr {
  /** @nocollapse */
  static decode(t) {
    t = new Jl(j(t));
    const e = Ot.getRootAsFooter(t), i = J.decode(e.schema(), /* @__PURE__ */ new Map(), e.version());
    return new Zl(i, e);
  }
  /** @nocollapse */
  static encode(t) {
    const e = new Ql(), i = J.encode(e, t.schema);
    Ot.startRecordBatchesVector(e, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse())
      fe.encode(e, o);
    const n = e.endVector();
    Ot.startDictionariesVector(e, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse())
      fe.encode(e, o);
    const s = e.endVector();
    return Ot.startFooter(e), Ot.addSchema(e, i), Ot.addVersion(e, at.V5), Ot.addRecordBatches(e, n), Ot.addDictionaries(e, s), Ot.finishFooterBuffer(e, Ot.endFooter(e)), e.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  constructor(t, e = at.V5, i, n) {
    this.schema = t, this.version = e, i && (this._recordBatches = i), n && (this._dictionaryBatches = n);
  }
  *recordBatches() {
    for (let t, e = -1, i = this.numRecordBatches; ++e < i; )
      (t = this.getRecordBatch(e)) && (yield t);
  }
  *dictionaryBatches() {
    for (let t, e = -1, i = this.numDictionaries; ++e < i; )
      (t = this.getDictionaryBatch(e)) && (yield t);
  }
  getRecordBatch(t) {
    return t >= 0 && t < this.numRecordBatches && this._recordBatches[t] || null;
  }
  getDictionaryBatch(t) {
    return t >= 0 && t < this.numDictionaries && this._dictionaryBatches[t] || null;
  }
}
class Zl extends fr {
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
        return fe.decode(e);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const e = this._footer.dictionaries(t);
      if (e)
        return fe.decode(e);
    }
    return null;
  }
}
class fe {
  /** @nocollapse */
  static decode(t) {
    return new fe(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  /** @nocollapse */
  static encode(t, e) {
    const { metaDataLength: i } = e, n = BigInt(e.offset), s = BigInt(e.bodyLength);
    return gn.createBlock(t, n, i, s);
  }
  constructor(t, e, i) {
    this.metaDataLength = t, this.offset = et(i), this.bodyLength = et(e);
  }
}
const nt = Object.freeze({ done: !0, value: void 0 });
class no {
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
class Cn {
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
class Xl extends Cn {
  constructor() {
    super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((t) => this._closedPromiseResolve = t);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(t) {
    return V(this, void 0, void 0, function* () {
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
        t.shift().resolve(nt);
      this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(t) {
    return Nt.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  toNodeStream(t) {
    return Nt.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  throw(t) {
    return V(this, void 0, void 0, function* () {
      return yield this.abort(t), nt;
    });
  }
  return(t) {
    return V(this, void 0, void 0, function* () {
      return yield this.close(), nt;
    });
  }
  read(t) {
    return V(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return V(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(...t) {
    return this._values.length > 0 ? Promise.resolve({ done: !1, value: this._values.shift() }) : this._error ? Promise.reject({ done: !0, value: this._error.error }) : this._closedPromiseResolve ? new Promise((e, i) => {
      this.resolvers.push({ resolve: e, reject: i });
    }) : Promise.resolve(nt);
  }
  _ensureOpen() {
    if (this._closedPromiseResolve)
      return !0;
    throw new Error("AsyncQueue is closed");
  }
}
class ri extends Xl {
  write(t) {
    if ((t = j(t)).byteLength > 0)
      return super.write(t);
  }
  toString(t = !1) {
    return t ? cn(this.toUint8Array(!0)) : this.toUint8Array(!1).then(cn);
  }
  toUint8Array(t = !1) {
    return t ? Qt(this._values)[0] : V(this, void 0, void 0, function* () {
      var e, i, n, s;
      const o = [];
      let u = 0;
      try {
        for (var l = !0, f = ve(this), d; d = yield f.next(), e = d.done, !e; l = !0) {
          s = d.value, l = !1;
          const y = s;
          o.push(y), u += y.byteLength;
        }
      } catch (y) {
        i = { error: y };
      } finally {
        try {
          !l && !e && (n = f.return) && (yield n.call(f));
        } finally {
          if (i) throw i.error;
        }
      }
      return Qt(o, u)[0];
    });
  }
}
class Di {
  constructor(t) {
    t && (this.source = new $l(Nt.fromIterable(t)));
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
class Ge {
  constructor(t) {
    t instanceof Ge ? this.source = t.source : t instanceof ri ? this.source = new me(Nt.fromAsyncIterable(t)) : Bo(t) ? this.source = new me(Nt.fromNodeStream(t)) : En(t) ? this.source = new me(Nt.fromDOMStream(t)) : Lo(t) ? this.source = new me(Nt.fromDOMStream(t.body)) : gr(t) ? this.source = new me(Nt.fromIterable(t)) : be(t) ? this.source = new me(Nt.fromAsyncIterable(t)) : Ye(t) && (this.source = new me(Nt.fromAsyncIterable(t)));
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
class $l {
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
    return Object.create(this.source.throw && this.source.throw(t) || nt);
  }
  return(t) {
    return Object.create(this.source.return && this.source.return(t) || nt);
  }
}
class me {
  constructor(t) {
    this.source = t, this._closedPromise = new Promise((e) => this._closedPromiseResolve = e);
  }
  cancel(t) {
    return V(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(t) {
    return V(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return V(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(t) {
    return V(this, arguments, void 0, function* (e, i = "read") {
      return yield this.source.next({ cmd: i, size: e });
    });
  }
  throw(t) {
    return V(this, void 0, void 0, function* () {
      const e = this.source.throw && (yield this.source.throw(t)) || nt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
  return(t) {
    return V(this, void 0, void 0, function* () {
      const e = this.source.return && (yield this.source.return(t)) || nt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
}
class so extends Di {
  constructor(t, e) {
    super(), this.position = 0, this.buffer = j(t), this.size = e === void 0 ? this.buffer.byteLength : e;
  }
  readInt32(t) {
    const { buffer: e, byteOffset: i } = this.readAt(t, 4);
    return new DataView(e, i).getInt32(0, !0);
  }
  seek(t) {
    return this.position = Math.min(t, this.size), t < this.size;
  }
  read(t) {
    const { buffer: e, size: i, position: n } = this;
    return e && n < i ? (typeof t != "number" && (t = Number.POSITIVE_INFINITY), this.position = Math.min(i, n + Math.min(i - n, t)), e.subarray(n, this.position)) : null;
  }
  readAt(t, e) {
    const i = this.buffer, n = Math.min(this.size, t + e);
    return i ? i.subarray(t, n) : new Uint8Array(e);
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
class Ti extends Ge {
  constructor(t, e) {
    super(), this.position = 0, this._handle = t, typeof e == "number" ? this.size = e : this._pending = V(this, void 0, void 0, function* () {
      this.size = (yield t.stat()).size, delete this._pending;
    });
  }
  readInt32(t) {
    return V(this, void 0, void 0, function* () {
      const { buffer: e, byteOffset: i } = yield this.readAt(t, 4);
      return new DataView(e, i).getInt32(0, !0);
    });
  }
  seek(t) {
    return V(this, void 0, void 0, function* () {
      return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size;
    });
  }
  read(t) {
    return V(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: e, size: i, position: n } = this;
      if (e && n < i) {
        typeof t != "number" && (t = Number.POSITIVE_INFINITY);
        let s = n, o = 0, u = 0;
        const l = Math.min(i, s + Math.min(i - s, t)), f = new Uint8Array(Math.max(0, (this.position = l) - s));
        for (; (s += u) < l && (o += u) < f.byteLength; )
          ({ bytesRead: u } = yield e.read(f, o, f.byteLength - o, s));
        return f;
      }
      return null;
    });
  }
  readAt(t, e) {
    return V(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: i, size: n } = this;
      if (i && t + e < n) {
        const s = Math.min(n, t + e), o = new Uint8Array(s - t);
        return (yield i.read(o, 0, e, t)).buffer;
      }
      return new Uint8Array(e);
    });
  }
  close() {
    return V(this, void 0, void 0, function* () {
      const t = this._handle;
      this._handle = null, t && (yield t.close());
    });
  }
  throw(t) {
    return V(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
  return(t) {
    return V(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
}
const th = 65536;
function Pe(r) {
  return r < 0 && (r = 4294967295 + r + 1), `0x${r.toString(16)}`;
}
const je = 8, kn = [
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
class lc {
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
    ]), i = new Uint32Array([
      t.buffer[1] >>> 16,
      t.buffer[1] & 65535,
      t.buffer[0] >>> 16,
      t.buffer[0] & 65535
    ]);
    let n = e[3] * i[3];
    this.buffer[0] = n & 65535;
    let s = n >>> 16;
    return n = e[2] * i[3], s += n, n = e[3] * i[2] >>> 0, s += n, this.buffer[0] += s << 16, this.buffer[1] = s >>> 0 < n ? th : 0, this.buffer[1] += s >>> 16, this.buffer[1] += e[1] * i[3] + e[2] * i[2] + e[3] * i[1], this.buffer[1] += e[0] * i[3] + e[1] * i[2] + e[2] * i[1] + e[3] * i[0] << 16, this;
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
class $ extends lc {
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return $.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return $.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const i = t.length, n = new $(e);
    for (let s = 0; s < i; ) {
      const o = je < i - s ? je : i - s, u = new $(new Uint32Array([Number.parseInt(t.slice(s, s + o), 10), 0])), l = new $(new Uint32Array([kn[o], 0]));
      n.times(l), n.plus(u), s += o;
    }
    return n;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let i = -1, n = t.length; ++i < n; )
      $.from(t[i], new Uint32Array(e.buffer, e.byteOffset + 2 * i * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new $(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new $(new Uint32Array(t.buffer)).plus(e);
  }
}
class _t extends lc {
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
    const e = this.buffer[1] << 0, i = t.buffer[1] << 0;
    return e < i || e === i && this.buffer[0] < t.buffer[0];
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return _t.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return _t.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const i = t.startsWith("-"), n = t.length, s = new _t(e);
    for (let o = i ? 1 : 0; o < n; ) {
      const u = je < n - o ? je : n - o, l = new _t(new Uint32Array([Number.parseInt(t.slice(o, o + u), 10), 0])), f = new _t(new Uint32Array([kn[u], 0]));
      s.times(f), s.plus(l), o += u;
    }
    return i ? s.negate() : s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let i = -1, n = t.length; ++i < n; )
      _t.from(t[i], new Uint32Array(e.buffer, e.byteOffset + 2 * i * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new _t(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new _t(new Uint32Array(t.buffer)).plus(e);
  }
}
class Ht {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return new _t(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new _t(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
  }
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0 && ++this.buffer[1], this.buffer[1] == 0 && ++this.buffer[2], this.buffer[2] == 0 && ++this.buffer[3], this;
  }
  times(t) {
    const e = new $(new Uint32Array([this.buffer[3], 0])), i = new $(new Uint32Array([this.buffer[2], 0])), n = new $(new Uint32Array([this.buffer[1], 0])), s = new $(new Uint32Array([this.buffer[0], 0])), o = new $(new Uint32Array([t.buffer[3], 0])), u = new $(new Uint32Array([t.buffer[2], 0])), l = new $(new Uint32Array([t.buffer[1], 0])), f = new $(new Uint32Array([t.buffer[0], 0]));
    let d = $.multiply(s, f);
    this.buffer[0] = d.low();
    const y = new $(new Uint32Array([d.high(), 0]));
    return d = $.multiply(n, f), y.plus(d), d = $.multiply(s, l), y.plus(d), this.buffer[1] = y.low(), this.buffer[3] = y.lessThan(d) ? 1 : 0, this.buffer[2] = y.high(), new $(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus($.multiply(i, f)).plus($.multiply(n, l)).plus($.multiply(s, u)), this.buffer[3] += $.multiply(e, f).plus($.multiply(i, l)).plus($.multiply(n, u)).plus($.multiply(s, o)).low(), this;
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
    return new Ht(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new Ht(new Uint32Array(t.buffer)).plus(e);
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(4)) {
    return Ht.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(4)) {
    return Ht.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(4)) {
    const i = t.startsWith("-"), n = t.length, s = new Ht(e);
    for (let o = i ? 1 : 0; o < n; ) {
      const u = je < n - o ? je : n - o, l = new Ht(new Uint32Array([Number.parseInt(t.slice(o, o + u), 10), 0, 0, 0])), f = new Ht(new Uint32Array([kn[u], 0, 0, 0]));
      s.times(f), s.plus(l), o += u;
    }
    return i ? s.negate() : s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 4);
    for (let i = -1, n = t.length; ++i < n; )
      Ht.from(t[i], new Uint32Array(e.buffer, e.byteOffset + 16 * i, 4));
    return e;
  }
}
class hc extends H {
  constructor(t, e, i, n, s = at.V5) {
    super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = e, this.buffers = i, this.dictionaries = n, this.metadataVersion = s;
  }
  visit(t) {
    return super.visit(t instanceof it ? t.type : t);
  }
  visitNull(t, { length: e } = this.nextFieldNode()) {
    return W({ type: t, length: e });
  }
  visitBool(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitInt(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitFloat(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitUtf8(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeUtf8(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitBinary(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeBinary(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitFixedSizeBinary(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitDate(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitTimestamp(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitTime(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitDecimal(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitList(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  visitStruct(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), children: this.visitMany(t.children) });
  }
  visitUnion(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return this.metadataVersion < at.V5 && this.readNullBitmap(t, i), t.mode === ht.Sparse ? this.visitSparseUnion(t, { length: e, nullCount: i }) : this.visitDenseUnion(t, { length: e, nullCount: i });
  }
  visitDenseUnion(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, typeIds: this.readTypeIds(t), valueOffsets: this.readOffsets(t), children: this.visitMany(t.children) });
  }
  visitSparseUnion(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, typeIds: this.readTypeIds(t), children: this.visitMany(t.children) });
  }
  visitDictionary(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t.indices), dictionary: this.readDictionary(t) });
  }
  visitInterval(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitDuration(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitFixedSizeList(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), child: this.visit(t.children[0]) });
  }
  visitMap(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return W({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  nextFieldNode() {
    return this.nodes[++this.nodesIndex];
  }
  nextBufferRange() {
    return this.buffers[++this.buffersIndex];
  }
  readNullBitmap(t, e, i = this.nextBufferRange()) {
    return e > 0 && this.readData(t, i) || new Uint8Array(0);
  }
  readOffsets(t, e) {
    return this.readData(t, e);
  }
  readTypeIds(t, e) {
    return this.readData(t, e);
  }
  readData(t, { length: e, offset: i } = this.nextBufferRange()) {
    return this.bytes.subarray(i, i + e);
  }
  readDictionary(t) {
    return this.dictionaries.get(t.id);
  }
}
class eh extends hc {
  constructor(t, e, i, n, s) {
    super(new Uint8Array(0), e, i, n, s), this.sources = t;
  }
  readNullBitmap(t, e, { offset: i } = this.nextBufferRange()) {
    return e <= 0 ? new Uint8Array(0) : Ri(this.sources[i]);
  }
  readOffsets(t, { offset: e } = this.nextBufferRange()) {
    return tt(Uint8Array, tt(t.OffsetArrayType, this.sources[e]));
  }
  readTypeIds(t, { offset: e } = this.nextBufferRange()) {
    return tt(Uint8Array, tt(t.ArrayType, this.sources[e]));
  }
  readData(t, { offset: e } = this.nextBufferRange()) {
    const { sources: i } = this;
    return B.isTimestamp(t) || (B.isInt(t) || B.isTime(t)) && t.bitWidth === 64 || B.isDuration(t) || B.isDate(t) && t.unit === Mt.MILLISECOND ? tt(Uint8Array, _t.convertArray(i[e])) : B.isDecimal(t) ? tt(Uint8Array, Ht.convertArray(i[e])) : B.isBinary(t) || B.isLargeBinary(t) || B.isFixedSizeBinary(t) ? rh(i[e]) : B.isBool(t) ? Ri(i[e]) : B.isUtf8(t) || B.isLargeUtf8(t) ? wn(i[e].join("")) : tt(Uint8Array, tt(t.ArrayType, i[e].map((n) => +n)));
  }
}
function rh(r) {
  const t = r.join(""), e = new Uint8Array(t.length / 2);
  for (let i = 0; i < t.length; i += 2)
    e[i >> 1] = Number.parseInt(t.slice(i, i + 2), 16);
  return e;
}
class F extends H {
  compareSchemas(t, e) {
    return t === e || e instanceof t.constructor && this.compareManyFields(t.fields, e.fields);
  }
  compareManyFields(t, e) {
    return t === e || Array.isArray(t) && Array.isArray(e) && t.length === e.length && t.every((i, n) => this.compareFields(i, e[n]));
  }
  compareFields(t, e) {
    return t === e || e instanceof t.constructor && t.name === e.name && t.nullable === e.nullable && this.visit(t.type, e.type);
  }
}
function yt(r, t) {
  return t instanceof r.constructor;
}
function Ie(r, t) {
  return r === t || yt(r, t);
}
function oe(r, t) {
  return r === t || yt(r, t) && r.bitWidth === t.bitWidth && r.isSigned === t.isSigned;
}
function Vi(r, t) {
  return r === t || yt(r, t) && r.precision === t.precision;
}
function ih(r, t) {
  return r === t || yt(r, t) && r.byteWidth === t.byteWidth;
}
function Pn(r, t) {
  return r === t || yt(r, t) && r.unit === t.unit;
}
function mr(r, t) {
  return r === t || yt(r, t) && r.unit === t.unit && r.timezone === t.timezone;
}
function _r(r, t) {
  return r === t || yt(r, t) && r.unit === t.unit && r.bitWidth === t.bitWidth;
}
function nh(r, t) {
  return r === t || yt(r, t) && r.children.length === t.children.length && pe.compareManyFields(r.children, t.children);
}
function sh(r, t) {
  return r === t || yt(r, t) && r.children.length === t.children.length && pe.compareManyFields(r.children, t.children);
}
function xn(r, t) {
  return r === t || yt(r, t) && r.mode === t.mode && r.typeIds.every((e, i) => e === t.typeIds[i]) && pe.compareManyFields(r.children, t.children);
}
function oh(r, t) {
  return r === t || yt(r, t) && r.id === t.id && r.isOrdered === t.isOrdered && pe.visit(r.indices, t.indices) && pe.visit(r.dictionary, t.dictionary);
}
function Un(r, t) {
  return r === t || yt(r, t) && r.unit === t.unit;
}
function vr(r, t) {
  return r === t || yt(r, t) && r.unit === t.unit;
}
function ah(r, t) {
  return r === t || yt(r, t) && r.listSize === t.listSize && r.children.length === t.children.length && pe.compareManyFields(r.children, t.children);
}
function ch(r, t) {
  return r === t || yt(r, t) && r.keysSorted === t.keysSorted && r.children.length === t.children.length && pe.compareManyFields(r.children, t.children);
}
F.prototype.visitNull = Ie;
F.prototype.visitBool = Ie;
F.prototype.visitInt = oe;
F.prototype.visitInt8 = oe;
F.prototype.visitInt16 = oe;
F.prototype.visitInt32 = oe;
F.prototype.visitInt64 = oe;
F.prototype.visitUint8 = oe;
F.prototype.visitUint16 = oe;
F.prototype.visitUint32 = oe;
F.prototype.visitUint64 = oe;
F.prototype.visitFloat = Vi;
F.prototype.visitFloat16 = Vi;
F.prototype.visitFloat32 = Vi;
F.prototype.visitFloat64 = Vi;
F.prototype.visitUtf8 = Ie;
F.prototype.visitLargeUtf8 = Ie;
F.prototype.visitBinary = Ie;
F.prototype.visitLargeBinary = Ie;
F.prototype.visitFixedSizeBinary = ih;
F.prototype.visitDate = Pn;
F.prototype.visitDateDay = Pn;
F.prototype.visitDateMillisecond = Pn;
F.prototype.visitTimestamp = mr;
F.prototype.visitTimestampSecond = mr;
F.prototype.visitTimestampMillisecond = mr;
F.prototype.visitTimestampMicrosecond = mr;
F.prototype.visitTimestampNanosecond = mr;
F.prototype.visitTime = _r;
F.prototype.visitTimeSecond = _r;
F.prototype.visitTimeMillisecond = _r;
F.prototype.visitTimeMicrosecond = _r;
F.prototype.visitTimeNanosecond = _r;
F.prototype.visitDecimal = Ie;
F.prototype.visitList = nh;
F.prototype.visitStruct = sh;
F.prototype.visitUnion = xn;
F.prototype.visitDenseUnion = xn;
F.prototype.visitSparseUnion = xn;
F.prototype.visitDictionary = oh;
F.prototype.visitInterval = Un;
F.prototype.visitIntervalDayTime = Un;
F.prototype.visitIntervalYearMonth = Un;
F.prototype.visitDuration = vr;
F.prototype.visitDurationSecond = vr;
F.prototype.visitDurationMillisecond = vr;
F.prototype.visitDurationMicrosecond = vr;
F.prototype.visitDurationNanosecond = vr;
F.prototype.visitFixedSizeList = ah;
F.prototype.visitMap = ch;
const pe = new F();
function _n(r, t) {
  return pe.compareSchemas(r, t);
}
function tn(r, t) {
  return uh(r, t.map((e) => e.data.concat()));
}
function uh(r, t) {
  const e = [...r.fields], i = [], n = { numBatches: t.reduce((y, h) => Math.max(y, h.length), 0) };
  let s = 0, o = 0, u = -1;
  const l = t.length;
  let f, d = [];
  for (; n.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, u = -1; ++u < l; )
      d[u] = f = t[u].shift(), o = Math.min(o, f ? f.length : o);
    Number.isFinite(o) && (d = lh(e, o, d, t, n), o > 0 && (i[s++] = W({
      type: new ft(e),
      length: o,
      nullCount: 0,
      children: d.slice()
    })));
  }
  return [
    r = r.assign(e),
    i.map((y) => new bt(r, y))
  ];
}
function lh(r, t, e, i, n) {
  var s;
  const o = (t + 63 & -64) >> 3;
  for (let u = -1, l = i.length; ++u < l; ) {
    const f = e[u], d = f?.length;
    if (d >= t)
      d === t ? e[u] = f : (e[u] = f.slice(0, t), n.numBatches = Math.max(n.numBatches, i[u].unshift(f.slice(t, d - t))));
    else {
      const y = r[u];
      r[u] = y.clone({ nullable: !0 }), e[u] = (s = f?._changeLengthAndBackfillNullBitmap(t)) !== null && s !== void 0 ? s : W({
        type: y.type,
        length: t,
        nullCount: t,
        nullBitmap: new Uint8Array(o)
      });
    }
  }
  return e;
}
var dc;
class dt {
  constructor(...t) {
    var e, i;
    if (t.length === 0)
      return this.batches = [], this.schema = new J([]), this._offsets = [0], this;
    let n, s;
    t[0] instanceof J && (n = t.shift()), t.at(-1) instanceof Uint32Array && (s = t.pop());
    const o = (l) => {
      if (l) {
        if (l instanceof bt)
          return [l];
        if (l instanceof dt)
          return l.batches;
        if (l instanceof X) {
          if (l.type instanceof ft)
            return [new bt(new J(l.type.children), l)];
        } else {
          if (Array.isArray(l))
            return l.flatMap((f) => o(f));
          if (typeof l[Symbol.iterator] == "function")
            return [...l].flatMap((f) => o(f));
          if (typeof l == "object") {
            const f = Object.keys(l), d = f.map((c) => new Q([l[c]])), y = n ?? new J(f.map((c, a) => new it(String(c), d[a].type, d[a].nullable))), [, h] = tn(y, d);
            return h.length === 0 ? [new bt(l)] : h;
          }
        }
      }
      return [];
    }, u = t.flatMap((l) => o(l));
    if (n = (i = n ?? ((e = u[0]) === null || e === void 0 ? void 0 : e.schema)) !== null && i !== void 0 ? i : new J([]), !(n instanceof J))
      throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const l of u) {
      if (!(l instanceof bt))
        throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!_n(n, l.schema))
        throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = n, this.batches = u, this._offsets = s ?? rc(this.data);
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
    return this._nullCount === -1 && (this._nullCount = ec(this.data)), this._nullCount;
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
    return this.get(Nn(t, this.numRows));
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
    return this.batches.length > 0 ? Mn.visit(new Q(this.data)) : new Array(0)[Symbol.iterator]();
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
    const e = this.schema, i = this.data.concat(t.flatMap(({ data: n }) => n));
    return new dt(e, i.map((n) => new bt(e, n)));
  }
  /**
   * Return a zero-copy sub-section of this Table.
   *
   * @param begin The beginning of the specified portion of the Table.
   * @param end The end of the specified portion of the Table. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const i = this.schema;
    [t, e] = $a({ length: this.numRows }, t, e);
    const n = ic(this.data, this._offsets, t, e);
    return new dt(i, n.map((s) => new bt(i, s)));
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
      const e = this.data.map((i) => i.children[t]);
      if (e.length === 0) {
        const { type: i } = this.schema.fields[t], n = W({ type: i, length: 0, nullCount: 0 });
        e.push(n._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new Q(e);
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
    var i;
    return this.setChildAt((i = this.schema.fields) === null || i === void 0 ? void 0 : i.findIndex((n) => n.name === t), e);
  }
  setChildAt(t, e) {
    let i = this.schema, n = [...this.batches];
    if (t > -1 && t < this.numCols) {
      e || (e = new Q([W({ type: new de(), length: this.numRows })]));
      const s = i.fields.slice(), o = s[t].clone({ type: e.type }), u = this.schema.fields.map((l, f) => this.getChildAt(f));
      [s[t], u[t]] = [o, e], [i, n] = tn(i, u);
    }
    return new dt(i, n);
  }
  /**
   * Construct a new Table containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new Table of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.fields.reduce((i, n, s) => i.set(n.name, s), /* @__PURE__ */ new Map());
    return this.selectAt(t.map((i) => e.get(i)).filter((i) => i > -1));
  }
  /**
   * Construct a new Table containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new Table of columns at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), i = this.batches.map((n) => n.selectAt(t));
    return new dt(e, i);
  }
  assign(t) {
    const e = this.schema.fields, [i, n] = t.schema.fields.reduce((u, l, f) => {
      const [d, y] = u, h = e.findIndex((c) => c.name === l.name);
      return ~h ? y[h] = f : d.push(f), u;
    }, [[], []]), s = this.schema.assign(t.schema), o = [
      ...e.map((u, l) => [l, n[l]]).map(([u, l]) => l === void 0 ? this.getChildAt(u) : t.getChildAt(l)),
      ...i.map((u) => t.getChildAt(u))
    ].filter(Boolean);
    return new dt(...tn(s, o));
  }
}
dc = Symbol.toStringTag;
dt[dc] = ((r) => (r.schema = null, r.batches = [], r._offsets = new Uint32Array([0]), r._nullCount = -1, r[Symbol.isConcatSpreadable] = !0, r.isValid = Li(Fn), r.get = Li(It.getVisitFn(v.Struct)), r.set = nc(Ct.getVisitFn(v.Struct)), r.indexOf = sc(Bi.getVisitFn(v.Struct)), "Table"))(dt.prototype);
var fc;
let bt = class ar {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof J))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([
          ,
          this.data = W({
            nullCount: 0,
            type: new ft(this.schema.fields),
            children: this.schema.fields.map((e) => W({ type: e.type, nullCount: 0 }))
          })
        ] = t, !(this.data instanceof X))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = oo(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [e] = t, { fields: i, children: n, length: s } = Object.keys(e).reduce((l, f, d) => (l.children[d] = e[f], l.length = Math.max(l.length, e[f].length), l.fields[d] = it.new({ name: f, type: e[f].type, nullable: !0 }), l), {
          length: 0,
          fields: new Array(),
          children: new Array()
        }), o = new J(i), u = W({ type: new ft(i), length: s, children: n, nullCount: 0 });
        [this.schema, this.data] = oo(o, u.children, s);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = pc(this.schema.fields, this.data.children));
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
    return It.visit(this.data, t);
  }
  /**
    * Get a row value by position.
    * @param index The index of the row to read. A negative index will count back from the last row.
    */
  at(t) {
    return this.get(Nn(t, this.numRows));
  }
  /**
   * Set a row by position.
   * @param index The index of the row to write.
   * @param value The value to set.
   */
  set(t, e) {
    return Ct.visit(this.data, t, e);
  }
  /**
   * Retrieve the index of the first occurrence of a row in an RecordBatch.
   * @param element The row to locate in the RecordBatch.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  indexOf(t, e) {
    return Bi.visit(this.data, t, e);
  }
  /**
   * Iterator for rows in this RecordBatch.
   */
  [Symbol.iterator]() {
    return Mn.visit(new Q([this.data]));
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
    return new dt(this.schema, [this, ...t]);
  }
  /**
   * Return a zero-copy sub-section of this RecordBatch.
   * @param start The beginning of the specified portion of the RecordBatch.
   * @param end The end of the specified portion of the RecordBatch. This is exclusive of the row at the index 'end'.
   */
  slice(t, e) {
    const [i] = new Q([this.data]).slice(t, e).data;
    return new ar(this.schema, i);
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    var e;
    return this.getChildAt((e = this.schema.fields) === null || e === void 0 ? void 0 : e.findIndex((i) => i.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    return t > -1 && t < this.schema.fields.length ? new Q([this.data.children[t]]) : null;
  }
  /**
   * Sets a child Vector by name.
   * @param name The name of the child to overwrite.
   * @returns A new RecordBatch with the new child for the specified name.
   */
  setChild(t, e) {
    var i;
    return this.setChildAt((i = this.schema.fields) === null || i === void 0 ? void 0 : i.findIndex((n) => n.name === t), e);
  }
  setChildAt(t, e) {
    let i = this.schema, n = this.data;
    if (t > -1 && t < this.numCols) {
      e || (e = new Q([W({ type: new de(), length: this.numRows })]));
      const s = i.fields.slice(), o = n.children.slice(), u = s[t].clone({ type: e.type });
      [s[t], o[t]] = [u, e.data[0]], i = new J(s, new Map(this.schema.metadata)), n = W({ type: new ft(s), children: o });
    }
    return new ar(i, n);
  }
  /**
   * Construct a new RecordBatch containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new RecordBatch of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.select(t), i = new ft(e.fields), n = [];
    for (const s of t) {
      const o = this.schema.fields.findIndex((u) => u.name === s);
      ~o && (n[o] = this.data.children[o]);
    }
    return new ar(e, W({ type: i, length: this.numRows, children: n }));
  }
  /**
   * Construct a new RecordBatch containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new RecordBatch of columns matching at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), i = t.map((s) => this.data.children[s]).filter(Boolean), n = W({ type: new ft(e.fields), length: this.numRows, children: i });
    return new ar(e, n);
  }
};
fc = Symbol.toStringTag;
bt[fc] = ((r) => (r._nullCount = -1, r[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(bt.prototype);
function oo(r, t, e = t.reduce((i, n) => Math.max(i, n.length), 0)) {
  var i;
  const n = [...r.fields], s = [...t], o = (e + 63 & -64) >> 3;
  for (const [u, l] of r.fields.entries()) {
    const f = t[u];
    (!f || f.length !== e) && (n[u] = l.clone({ nullable: !0 }), s[u] = (i = f?._changeLengthAndBackfillNullBitmap(e)) !== null && i !== void 0 ? i : W({
      type: l.type,
      length: e,
      nullCount: e,
      nullBitmap: new Uint8Array(o)
    }));
  }
  return [
    r.assign(n),
    W({ type: new ft(n), length: e, children: s })
  ];
}
function pc(r, t, e = /* @__PURE__ */ new Map()) {
  var i, n;
  if (((i = r?.length) !== null && i !== void 0 ? i : 0) > 0 && r?.length === t?.length)
    for (let s = -1, o = r.length; ++s < o; ) {
      const { type: u } = r[s], l = t[s];
      for (const f of [l, ...((n = l?.dictionary) === null || n === void 0 ? void 0 : n.data) || []])
        pc(u.children, f?.children, e);
      if (B.isDictionary(u)) {
        const { id: f } = u;
        if (!e.has(f))
          l?.dictionary && e.set(f, l.dictionary);
        else if (e.get(f) !== l.dictionary)
          throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
      }
    }
  return e;
}
class Vn extends bt {
  constructor(t) {
    const e = t.fields.map((n) => W({ type: n.type })), i = W({ type: new ft(t.fields), nullCount: 0, children: e });
    super(t, i);
  }
}
let ce = class zt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMessage(t, e) {
    return (e || new zt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, e) {
    return t.setPosition(t.position() + Z), (e || new zt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : at.V1;
  }
  headerType() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readUint8(this.bb_pos + t) : K.NONE;
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
    const i = this.bb.__offset(this.bb_pos, 12);
    return i ? (e || new ut()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startMessage(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, at.V1);
  }
  static addHeaderType(t, e) {
    t.addFieldInt8(1, e, K.NONE);
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
    for (let i = e.length - 1; i >= 0; i--)
      t.addOffset(e[i]);
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
  static createMessage(t, e, i, n, s, o) {
    return zt.startMessage(t), zt.addVersion(t, e), zt.addHeaderType(t, i), zt.addHeader(t, n), zt.addBodyLength(t, s), zt.addCustomMetadata(t, o), zt.endMessage(t);
  }
};
class hh extends H {
  visit(t, e) {
    return t == null || e == null ? void 0 : super.visit(t, e);
  }
  visitNull(t, e) {
    return Zs.startNull(e), Zs.endNull(e);
  }
  visitInt(t, e) {
    return Rt.startInt(e), Rt.addBitWidth(e, t.bitWidth), Rt.addIsSigned(e, t.isSigned), Rt.endInt(e);
  }
  visitFloat(t, e) {
    return Gt.startFloatingPoint(e), Gt.addPrecision(e, t.precision), Gt.endFloatingPoint(e);
  }
  visitBinary(t, e) {
    return js.startBinary(e), js.endBinary(e);
  }
  visitLargeBinary(t, e) {
    return Ks.startLargeBinary(e), Ks.endLargeBinary(e);
  }
  visitBool(t, e) {
    return Ys.startBool(e), Ys.endBool(e);
  }
  visitUtf8(t, e) {
    return Xs.startUtf8(e), Xs.endUtf8(e);
  }
  visitLargeUtf8(t, e) {
    return Qs.startLargeUtf8(e), Qs.endLargeUtf8(e);
  }
  visitDecimal(t, e) {
    return Be.startDecimal(e), Be.addScale(e, t.scale), Be.addPrecision(e, t.precision), Be.addBitWidth(e, t.bitWidth), Be.endDecimal(e);
  }
  visitDate(t, e) {
    return Jr.startDate(e), Jr.addUnit(e, t.unit), Jr.endDate(e);
  }
  visitTime(t, e) {
    return Dt.startTime(e), Dt.addUnit(e, t.unit), Dt.addBitWidth(e, t.bitWidth), Dt.endTime(e);
  }
  visitTimestamp(t, e) {
    const i = t.timezone && e.createString(t.timezone) || void 0;
    return Tt.startTimestamp(e), Tt.addUnit(e, t.unit), i !== void 0 && Tt.addTimezone(e, i), Tt.endTimestamp(e);
  }
  visitInterval(t, e) {
    return jt.startInterval(e), jt.addUnit(e, t.unit), jt.endInterval(e);
  }
  visitDuration(t, e) {
    return Zr.startDuration(e), Zr.addUnit(e, t.unit), Zr.endDuration(e);
  }
  visitList(t, e) {
    return Js.startList(e), Js.endList(e);
  }
  visitStruct(t, e) {
    return _e.startStruct_(e), _e.endStruct_(e);
  }
  visitUnion(t, e) {
    vt.startTypeIdsVector(e, t.typeIds.length);
    const i = vt.createTypeIdsVector(e, t.typeIds);
    return vt.startUnion(e), vt.addMode(e, t.mode), vt.addTypeIds(e, i), vt.endUnion(e);
  }
  visitDictionary(t, e) {
    const i = this.visit(t.indices, e);
    return ne.startDictionaryEncoding(e), ne.addId(e, BigInt(t.id)), ne.addIsOrdered(e, t.isOrdered), i !== void 0 && ne.addIndexType(e, i), ne.endDictionaryEncoding(e);
  }
  visitFixedSizeBinary(t, e) {
    return Xr.startFixedSizeBinary(e), Xr.addByteWidth(e, t.byteWidth), Xr.endFixedSizeBinary(e);
  }
  visitFixedSizeList(t, e) {
    return $r.startFixedSizeList(e), $r.addListSize(e, t.listSize), $r.endFixedSizeList(e);
  }
  visitMap(t, e) {
    return ti.startMap(e), ti.addKeysSorted(e, t.keysSorted), ti.endMap(e);
  }
}
const en = new hh();
function dh(r, t = /* @__PURE__ */ new Map()) {
  return new J(ph(r, t), ii(r.metadata), t);
}
function yc(r) {
  return new Lt(r.count, gc(r.columns), mc(r.columns));
}
function fh(r) {
  return new Zt(yc(r.data), r.id, r.isDelta);
}
function ph(r, t) {
  return (r.fields || []).filter(Boolean).map((e) => it.fromJSON(e, t));
}
function ao(r, t) {
  return (r.children || []).filter(Boolean).map((e) => it.fromJSON(e, t));
}
function gc(r) {
  return (r || []).reduce((t, e) => [
    ...t,
    new ye(e.count, yh(e.VALIDITY)),
    ...gc(e.children)
  ], []);
}
function mc(r, t = []) {
  for (let e = -1, i = (r || []).length; ++e < i; ) {
    const n = r[e];
    n.VALIDITY && t.push(new Kt(t.length, n.VALIDITY.length)), n.TYPE_ID && t.push(new Kt(t.length, n.TYPE_ID.length)), n.OFFSET && t.push(new Kt(t.length, n.OFFSET.length)), n.DATA && t.push(new Kt(t.length, n.DATA.length)), t = mc(n.children, t);
  }
  return t;
}
function yh(r) {
  return (r || []).reduce((t, e) => t + +(e === 0), 0);
}
function gh(r, t) {
  let e, i, n, s, o, u;
  return !t || !(s = r.dictionary) ? (o = uo(r, ao(r, t)), n = new it(r.name, o, r.nullable, ii(r.metadata))) : t.has(e = s.id) ? (i = (i = s.indexType) ? co(i) : new dr(), u = new We(t.get(e), i, e, s.isOrdered), n = new it(r.name, u, r.nullable, ii(r.metadata))) : (i = (i = s.indexType) ? co(i) : new dr(), t.set(e, o = uo(r, ao(r, t))), u = new We(o, i, e, s.isOrdered), n = new it(r.name, u, r.nullable, ii(r.metadata))), n || null;
}
function ii(r = []) {
  return new Map(r.map(({ key: t, value: e }) => [t, e]));
}
function co(r) {
  return new Se(r.isSigned, r.bitWidth);
}
function uo(r, t) {
  const e = r.type.name;
  switch (e) {
    case "NONE":
      return new de();
    case "null":
      return new de();
    case "binary":
      return new li();
    case "largebinary":
      return new hi();
    case "utf8":
      return new di();
    case "largeutf8":
      return new fi();
    case "bool":
      return new pi();
    case "list":
      return new Si((t || [])[0]);
    case "struct":
      return new ft(t || []);
    case "struct_":
      return new ft(t || []);
  }
  switch (e) {
    case "int": {
      const i = r.type;
      return new Se(i.isSigned, i.bitWidth);
    }
    case "floatingpoint": {
      const i = r.type;
      return new ui(lt[i.precision]);
    }
    case "decimal": {
      const i = r.type;
      return new yi(i.scale, i.precision, i.bitWidth);
    }
    case "date": {
      const i = r.type;
      return new gi(Mt[i.unit]);
    }
    case "time": {
      const i = r.type;
      return new mi(M[i.unit], i.bitWidth);
    }
    case "timestamp": {
      const i = r.type;
      return new _i(M[i.unit], i.timezone);
    }
    case "interval": {
      const i = r.type;
      return new vi(Jt[i.unit]);
    }
    case "duration": {
      const i = r.type;
      return new bi(M[i.unit]);
    }
    case "union": {
      const i = r.type, [n, ...s] = (i.mode + "").toLowerCase(), o = n.toUpperCase() + s.join("");
      return new Ii(ht[o], i.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const i = r.type;
      return new wi(i.byteWidth);
    }
    case "fixedsizelist": {
      const i = r.type;
      return new Ei(i.listSize, (t || [])[0]);
    }
    case "map": {
      const i = r.type;
      return new Ai((t || [])[0], i.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${e}"`);
}
var mh = Fo, _h = qe;
class pt {
  /** @nocollapse */
  static fromJSON(t, e) {
    const i = new pt(0, at.V5, e);
    return i._createHeader = vh(t, e), i;
  }
  /** @nocollapse */
  static decode(t) {
    t = new _h(j(t));
    const e = ce.getRootAsMessage(t), i = e.bodyLength(), n = e.version(), s = e.headerType(), o = new pt(i, n, s);
    return o._createHeader = bh(e, s), o;
  }
  /** @nocollapse */
  static encode(t) {
    const e = new mh();
    let i = -1;
    return t.isSchema() ? i = J.encode(e, t.header()) : t.isRecordBatch() ? i = Lt.encode(e, t.header()) : t.isDictionaryBatch() && (i = Zt.encode(e, t.header())), ce.startMessage(e), ce.addVersion(e, at.V5), ce.addHeader(e, i), ce.addHeaderType(e, t.headerType), ce.addBodyLength(e, BigInt(t.bodyLength)), ce.finishMessageBuffer(e, ce.endMessage(e)), e.asUint8Array();
  }
  /** @nocollapse */
  static from(t, e = 0) {
    if (t instanceof J)
      return new pt(0, at.V5, K.Schema, t);
    if (t instanceof Lt)
      return new pt(e, at.V5, K.RecordBatch, t);
    if (t instanceof Zt)
      return new pt(e, at.V5, K.DictionaryBatch, t);
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
    return this.headerType === K.Schema;
  }
  isRecordBatch() {
    return this.headerType === K.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === K.DictionaryBatch;
  }
  constructor(t, e, i, n) {
    this._version = e, this._headerType = i, this.body = new Uint8Array(0), n && (this._createHeader = () => n), this._bodyLength = et(t);
  }
}
class Lt {
  get nodes() {
    return this._nodes;
  }
  get length() {
    return this._length;
  }
  get buffers() {
    return this._buffers;
  }
  constructor(t, e, i) {
    this._nodes = e, this._buffers = i, this._length = et(t);
  }
}
class Zt {
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
  constructor(t, e, i = !1) {
    this._data = t, this._isDelta = i, this._id = et(e);
  }
}
class Kt {
  constructor(t, e) {
    this.offset = et(t), this.length = et(e);
  }
}
class ye {
  constructor(t, e) {
    this.length = et(t), this.nullCount = et(e);
  }
}
function vh(r, t) {
  return (() => {
    switch (t) {
      case K.Schema:
        return J.fromJSON(r);
      case K.RecordBatch:
        return Lt.fromJSON(r);
      case K.DictionaryBatch:
        return Zt.fromJSON(r);
    }
    throw new Error(`Unrecognized Message type: { name: ${K[t]}, type: ${t} }`);
  });
}
function bh(r, t) {
  return (() => {
    switch (t) {
      case K.Schema:
        return J.decode(r.header(new qt()), /* @__PURE__ */ new Map(), r.version());
      case K.RecordBatch:
        return Lt.decode(r.header(new te()), r.version());
      case K.DictionaryBatch:
        return Zt.decode(r.header(new Re()), r.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${K[t]}, type: ${t} }`);
  });
}
it.encode = Dh;
it.decode = Bh;
it.fromJSON = gh;
J.encode = Nh;
J.decode = Sh;
J.fromJSON = dh;
Lt.encode = Th;
Lt.decode = Ih;
Lt.fromJSON = yc;
Zt.encode = Fh;
Zt.decode = wh;
Zt.fromJSON = fh;
ye.encode = Mh;
ye.decode = Ah;
Kt.encode = Ch;
Kt.decode = Eh;
function Sh(r, t = /* @__PURE__ */ new Map(), e = at.V5) {
  const i = Lh(r, t);
  return new J(i, ni(r), t, e);
}
function Ih(r, t = at.V5) {
  if (r.compression() !== null)
    throw new Error("Record batch compression not implemented");
  return new Lt(r.length(), Oh(r), Rh(r, t));
}
function wh(r, t = at.V5) {
  return new Zt(Lt.decode(r.data(), t), r.id(), r.isDelta());
}
function Eh(r) {
  return new Kt(r.offset(), r.length());
}
function Ah(r) {
  return new ye(r.length(), r.nullCount());
}
function Oh(r) {
  const t = [];
  for (let e, i = -1, n = -1, s = r.nodesLength(); ++i < s; )
    (e = r.nodes(i)) && (t[++n] = ye.decode(e));
  return t;
}
function Rh(r, t) {
  const e = [];
  for (let i, n = -1, s = -1, o = r.buffersLength(); ++n < o; )
    (i = r.buffers(n)) && (t < at.V4 && (i.bb_pos += 8 * (n + 1)), e[++s] = Kt.decode(i));
  return e;
}
function Lh(r, t) {
  const e = [];
  for (let i, n = -1, s = -1, o = r.fieldsLength(); ++n < o; )
    (i = r.fields(n)) && (e[++s] = it.decode(i, t));
  return e;
}
function lo(r, t) {
  const e = [];
  for (let i, n = -1, s = -1, o = r.childrenLength(); ++n < o; )
    (i = r.children(n)) && (e[++s] = it.decode(i, t));
  return e;
}
function Bh(r, t) {
  let e, i, n, s, o, u;
  return !t || !(u = r.dictionary()) ? (n = fo(r, lo(r, t)), i = new it(r.name(), n, r.nullable(), ni(r))) : t.has(e = et(u.id())) ? (s = (s = u.indexType()) ? ho(s) : new dr(), o = new We(t.get(e), s, e, u.isOrdered()), i = new it(r.name(), o, r.nullable(), ni(r))) : (s = (s = u.indexType()) ? ho(s) : new dr(), t.set(e, n = fo(r, lo(r, t))), o = new We(n, s, e, u.isOrdered()), i = new it(r.name(), o, r.nullable(), ni(r))), i || null;
}
function ni(r) {
  const t = /* @__PURE__ */ new Map();
  if (r)
    for (let e, i, n = -1, s = Math.trunc(r.customMetadataLength()); ++n < s; )
      (e = r.customMetadata(n)) && (i = e.key()) != null && t.set(i, e.value());
  return t;
}
function ho(r) {
  return new Se(r.isSigned(), r.bitWidth());
}
function fo(r, t) {
  const e = r.typeType();
  switch (e) {
    case rt.NONE:
      return new de();
    case rt.Null:
      return new de();
    case rt.Binary:
      return new li();
    case rt.LargeBinary:
      return new hi();
    case rt.Utf8:
      return new di();
    case rt.LargeUtf8:
      return new fi();
    case rt.Bool:
      return new pi();
    case rt.List:
      return new Si((t || [])[0]);
    case rt.Struct_:
      return new ft(t || []);
  }
  switch (e) {
    case rt.Int: {
      const i = r.type(new Rt());
      return new Se(i.isSigned(), i.bitWidth());
    }
    case rt.FloatingPoint: {
      const i = r.type(new Gt());
      return new ui(i.precision());
    }
    case rt.Decimal: {
      const i = r.type(new Be());
      return new yi(i.scale(), i.precision(), i.bitWidth());
    }
    case rt.Date: {
      const i = r.type(new Jr());
      return new gi(i.unit());
    }
    case rt.Time: {
      const i = r.type(new Dt());
      return new mi(i.unit(), i.bitWidth());
    }
    case rt.Timestamp: {
      const i = r.type(new Tt());
      return new _i(i.unit(), i.timezone());
    }
    case rt.Interval: {
      const i = r.type(new jt());
      return new vi(i.unit());
    }
    case rt.Duration: {
      const i = r.type(new Zr());
      return new bi(i.unit());
    }
    case rt.Union: {
      const i = r.type(new vt());
      return new Ii(i.mode(), i.typeIdsArray() || [], t || []);
    }
    case rt.FixedSizeBinary: {
      const i = r.type(new Xr());
      return new wi(i.byteWidth());
    }
    case rt.FixedSizeList: {
      const i = r.type(new $r());
      return new Ei(i.listSize(), (t || [])[0]);
    }
    case rt.Map: {
      const i = r.type(new ti());
      return new Ai((t || [])[0], i.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${rt[e]}" (${e})`);
}
function Nh(r, t) {
  const e = t.fields.map((s) => it.encode(r, s));
  qt.startFieldsVector(r, e.length);
  const i = qt.createFieldsVector(r, e), n = t.metadata && t.metadata.size > 0 ? qt.createCustomMetadataVector(r, [...t.metadata].map(([s, o]) => {
    const u = r.createString(`${s}`), l = r.createString(`${o}`);
    return ut.startKeyValue(r), ut.addKey(r, u), ut.addValue(r, l), ut.endKeyValue(r);
  })) : -1;
  return qt.startSchema(r), qt.addFields(r, i), qt.addEndianness(r, kh ? He.Little : He.Big), n !== -1 && qt.addCustomMetadata(r, n), qt.endSchema(r);
}
function Dh(r, t) {
  let e = -1, i = -1, n = -1;
  const s = t.type;
  let o = t.typeId;
  B.isDictionary(s) ? (o = s.dictionary.typeId, n = en.visit(s, r), i = en.visit(s.dictionary, r)) : i = en.visit(s, r);
  const u = (s.children || []).map((d) => it.encode(r, d)), l = Bt.createChildrenVector(r, u), f = t.metadata && t.metadata.size > 0 ? Bt.createCustomMetadataVector(r, [...t.metadata].map(([d, y]) => {
    const h = r.createString(`${d}`), c = r.createString(`${y}`);
    return ut.startKeyValue(r), ut.addKey(r, h), ut.addValue(r, c), ut.endKeyValue(r);
  })) : -1;
  return t.name && (e = r.createString(t.name)), Bt.startField(r), Bt.addType(r, i), Bt.addTypeType(r, o), Bt.addChildren(r, l), Bt.addNullable(r, !!t.nullable), e !== -1 && Bt.addName(r, e), n !== -1 && Bt.addDictionary(r, n), f !== -1 && Bt.addCustomMetadata(r, f), Bt.endField(r);
}
function Th(r, t) {
  const e = t.nodes || [], i = t.buffers || [];
  te.startNodesVector(r, e.length);
  for (const o of e.slice().reverse())
    ye.encode(r, o);
  const n = r.endVector();
  te.startBuffersVector(r, i.length);
  for (const o of i.slice().reverse())
    Kt.encode(r, o);
  const s = r.endVector();
  return te.startRecordBatch(r), te.addLength(r, BigInt(t.length)), te.addNodes(r, n), te.addBuffers(r, s), te.endRecordBatch(r);
}
function Fh(r, t) {
  const e = Lt.encode(r, t.data);
  return Re.startDictionaryBatch(r), Re.addId(r, BigInt(t.id)), Re.addIsDelta(r, t.isDelta), Re.addData(r, e), Re.endDictionaryBatch(r);
}
function Mh(r, t) {
  return ko.createFieldNode(r, BigInt(t.length), BigInt(t.nullCount));
}
function Ch(r, t) {
  return Co.createBuffer(r, BigInt(t.offset), BigInt(t.length));
}
const kh = (() => {
  const r = new ArrayBuffer(2);
  return new DataView(r).setInt16(
    0,
    256,
    !0
    /* littleEndian */
  ), new Int16Array(r)[0] === 256;
})(), zn = (r) => `Expected ${K[r]} Message in stream, but was null or length 0.`, qn = (r) => `Header pointer of flatbuffer-encoded ${K[r]} Message is null or length 0.`, _c = (r, t) => `Expected to read ${r} metadata bytes, but only read ${t}.`, vc = (r, t) => `Expected to read ${r} bytes for message body, but only read ${t}.`;
class bc {
  constructor(t) {
    this.source = t instanceof Di ? t : new Di(t);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let t;
    return (t = this.readMetadataLength()).done || t.value === -1 && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? nt : t;
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
      throw new Error(zn(t));
    return e.value;
  }
  readMessageBody(t) {
    if (t <= 0)
      return new Uint8Array(0);
    const e = j(this.source.read(t));
    if (e.byteLength < t)
      throw new Error(vc(t, e.byteLength));
    return (
      /* 1. */
      e.byteOffset % 8 === 0 && /* 2. */
      e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
    );
  }
  readSchema(t = !1) {
    const e = K.Schema, i = this.readMessage(e), n = i?.header();
    if (t && !n)
      throw new Error(qn(e));
    return n;
  }
  readMetadataLength() {
    const t = this.source.read(zi), e = t && new qe(t), i = e?.readInt32(0) || 0;
    return { done: i === 0, value: i };
  }
  readMetadata(t) {
    const e = this.source.read(t);
    if (!e)
      return nt;
    if (e.byteLength < t)
      throw new Error(_c(t, e.byteLength));
    return { done: !1, value: pt.decode(e) };
  }
}
class Ph {
  constructor(t, e) {
    this.source = t instanceof Ge ? t : Ro(t) ? new Ti(t, e) : new Ge(t);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return V(this, void 0, void 0, function* () {
      let t;
      return (t = yield this.readMetadataLength()).done || t.value === -1 && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? nt : t;
    });
  }
  throw(t) {
    return V(this, void 0, void 0, function* () {
      return yield this.source.throw(t);
    });
  }
  return(t) {
    return V(this, void 0, void 0, function* () {
      return yield this.source.return(t);
    });
  }
  readMessage(t) {
    return V(this, void 0, void 0, function* () {
      let e;
      if ((e = yield this.next()).done)
        return null;
      if (t != null && e.value.headerType !== t)
        throw new Error(zn(t));
      return e.value;
    });
  }
  readMessageBody(t) {
    return V(this, void 0, void 0, function* () {
      if (t <= 0)
        return new Uint8Array(0);
      const e = j(yield this.source.read(t));
      if (e.byteLength < t)
        throw new Error(vc(t, e.byteLength));
      return (
        /* 1. */
        e.byteOffset % 8 === 0 && /* 2. */
        e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
      );
    });
  }
  readSchema() {
    return V(this, arguments, void 0, function* (t = !1) {
      const e = K.Schema, i = yield this.readMessage(e), n = i?.header();
      if (t && !n)
        throw new Error(qn(e));
      return n;
    });
  }
  readMetadataLength() {
    return V(this, void 0, void 0, function* () {
      const t = yield this.source.read(zi), e = t && new qe(t), i = e?.readInt32(0) || 0;
      return { done: i === 0, value: i };
    });
  }
  readMetadata(t) {
    return V(this, void 0, void 0, function* () {
      const e = yield this.source.read(t);
      if (!e)
        return nt;
      if (e.byteLength < t)
        throw new Error(_c(t, e.byteLength));
      return { done: !1, value: pt.decode(e) };
    });
  }
}
class xh extends bc {
  constructor(t) {
    super(new Uint8Array(0)), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof no ? t : new no(t);
  }
  next() {
    const { _json: t } = this;
    if (!this._schema)
      return this._schema = !0, { done: !1, value: pt.fromJSON(t.schema, K.Schema) };
    if (this._dictionaryIndex < t.dictionaries.length) {
      const e = t.dictionaries[this._dictionaryIndex++];
      return this._body = e.data.columns, { done: !1, value: pt.fromJSON(e, K.DictionaryBatch) };
    }
    if (this._batchIndex < t.batches.length) {
      const e = t.batches[this._batchIndex++];
      return this._body = e.columns, { done: !1, value: pt.fromJSON(e, K.RecordBatch) };
    }
    return this._body = [], nt;
  }
  readMessageBody(t) {
    return e(this._body);
    function e(i) {
      return (i || []).reduce((n, s) => [
        ...n,
        ...s.VALIDITY && [s.VALIDITY] || [],
        ...s.TYPE_ID && [s.TYPE_ID] || [],
        ...s.OFFSET && [s.OFFSET] || [],
        ...s.DATA && [s.DATA] || [],
        ...e(s.children)
      ], []);
    }
  }
  readMessage(t) {
    let e;
    if ((e = this.next()).done)
      return null;
    if (t != null && e.value.headerType !== t)
      throw new Error(zn(t));
    return e.value;
  }
  readSchema() {
    const t = K.Schema, e = this.readMessage(t), i = e?.header();
    if (!e || !i)
      throw new Error(qn(t));
    return i;
  }
}
const zi = 4, vn = "ARROW1", pr = new Uint8Array(vn.length);
for (let r = 0; r < vn.length; r += 1)
  pr[r] = vn.codePointAt(r);
function Hn(r, t = 0) {
  for (let e = -1, i = pr.length; ++e < i; )
    if (pr[e] !== r[t + e])
      return !1;
  return !0;
}
const br = pr.length, Sc = br + zi, Uh = br * 2 + zi;
class Ft extends Cn {
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
    return be(e) ? e.then(() => this) : this;
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
    return Nt.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return Nt.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: !0 });
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
    return t instanceof Ft ? t : un(t) ? Hh(t) : Ro(t) ? jh(t) : be(t) ? V(this, void 0, void 0, function* () {
      return yield Ft.from(yield t);
    }) : Lo(t) || En(t) || Bo(t) || Ye(t) ? Gh(new Ge(t)) : Wh(new Di(t));
  }
  /** @nocollapse */
  static readAll(t) {
    return t instanceof Ft ? t.isSync() ? po(t) : yo(t) : un(t) || ArrayBuffer.isView(t) || gr(t) || Oo(t) ? po(t) : yo(t);
  }
}
class Fi extends Ft {
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
    return Yt(this, arguments, function* () {
      yield z(yield* Qr(ve(this[Symbol.iterator]())));
    });
  }
}
class Mi extends Ft {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return V(this, void 0, void 0, function* () {
      var t, e, i, n;
      const s = new Array();
      try {
        for (var o = !0, u = ve(this), l; l = yield u.next(), t = l.done, !t; o = !0) {
          n = l.value, o = !1;
          const f = n;
          s.push(f);
        }
      } catch (f) {
        e = { error: f };
      } finally {
        try {
          !o && !t && (i = u.return) && (yield i.call(u));
        } finally {
          if (e) throw e.error;
        }
      }
      return s;
    });
  }
  [Symbol.iterator]() {
    throw new Error("AsyncRecordBatchStreamReader is not Iterable");
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
}
class Ic extends Fi {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class Vh extends Mi {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class wc {
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
    const i = this._loadVectors(t, e, this.schema.fields), n = W({ type: new ft(this.schema.fields), length: t.length, children: i });
    return new bt(this.schema, n);
  }
  _loadDictionaryBatch(t, e) {
    const { id: i, isDelta: n } = t, { dictionaries: s, schema: o } = this, u = s.get(i), l = o.dictionaries.get(i), f = this._loadVectors(t.data, e, [l]);
    return (u && n ? u.concat(new Q(f)) : new Q(f)).memoize();
  }
  _loadVectors(t, e, i) {
    return new hc(e, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(i);
  }
}
class Ci extends wc {
  constructor(t, e) {
    super(e), this._reader = un(t) ? new xh(this._handle = t) : new bc(this._handle = t);
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
    return this.closed || (this.autoDestroy = Ac(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
  }
  throw(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : nt;
  }
  return(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : nt;
  }
  next() {
    if (this.closed)
      return nt;
    let t;
    const { _reader: e } = this;
    for (; t = this._readNextMessageAndValidate(); )
      if (t.isSchema())
        this.reset(t.header());
      else if (t.isRecordBatch()) {
        this._recordBatchIndex++;
        const i = t.header(), n = e.readMessageBody(t.bodyLength);
        return { done: !1, value: this._loadRecordBatch(i, n) };
      } else if (t.isDictionaryBatch()) {
        this._dictionaryIndex++;
        const i = t.header(), n = e.readMessageBody(t.bodyLength), s = this._loadDictionaryBatch(i, n);
        this.dictionaries.set(i.id, s);
      }
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new Vn(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}
class ki extends wc {
  constructor(t, e) {
    super(e), this._reader = new Ph(this._handle = t);
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
    return V(this, void 0, void 0, function* () {
      !this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
    });
  }
  open(t) {
    return V(this, void 0, void 0, function* () {
      return this.closed || (this.autoDestroy = Ac(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
    });
  }
  throw(t) {
    return V(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : nt;
    });
  }
  return(t) {
    return V(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : nt;
    });
  }
  next() {
    return V(this, void 0, void 0, function* () {
      if (this.closed)
        return nt;
      let t;
      const { _reader: e } = this;
      for (; t = yield this._readNextMessageAndValidate(); )
        if (t.isSchema())
          yield this.reset(t.header());
        else if (t.isRecordBatch()) {
          this._recordBatchIndex++;
          const i = t.header(), n = yield e.readMessageBody(t.bodyLength);
          return { done: !1, value: this._loadRecordBatch(i, n) };
        } else if (t.isDictionaryBatch()) {
          this._dictionaryIndex++;
          const i = t.header(), n = yield e.readMessageBody(t.bodyLength), s = this._loadDictionaryBatch(i, n);
          this.dictionaries.set(i.id, s);
        }
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new Vn(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return V(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}
class Ec extends Ci {
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
    super(t instanceof so ? t : new so(t), e);
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
    const i = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
    if (i && this._handle.seek(i.offset)) {
      const n = this._reader.readMessage(K.RecordBatch);
      if (n?.isRecordBatch()) {
        const s = n.header(), o = this._reader.readMessageBody(n.bodyLength);
        return this._loadRecordBatch(s, o);
      }
    }
    return null;
  }
  _readDictionaryBatch(t) {
    var e;
    const i = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
    if (i && this._handle.seek(i.offset)) {
      const n = this._reader.readMessage(K.DictionaryBatch);
      if (n?.isDictionaryBatch()) {
        const s = n.header(), o = this._reader.readMessageBody(n.bodyLength), u = this._loadDictionaryBatch(s, o);
        this.dictionaries.set(s.id, u);
      }
    }
  }
  _readFooter() {
    const { _handle: t } = this, e = t.size - Sc, i = t.readInt32(e), n = t.readAt(e - i, i);
    return fr.decode(n);
  }
  _readNextMessageAndValidate(t) {
    var e;
    if (this._footer || this.open(), this._footer && this._recordBatchIndex < this.numRecordBatches) {
      const i = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(this._recordBatchIndex);
      if (i && this._handle.seek(i.offset))
        return this._reader.readMessage(t);
    }
    return null;
  }
}
class zh extends ki {
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
    const i = typeof e[0] != "number" ? e.shift() : void 0, n = e[0] instanceof Map ? e.shift() : void 0;
    super(t instanceof Ti ? t : new Ti(t, i), n);
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
    return V(this, void 0, void 0, function* () {
      if (!this.closed && !this._footer) {
        this.schema = (this._footer = yield this._readFooter()).schema;
        for (const i of this._footer.dictionaryBatches())
          i && (yield this._readDictionaryBatch(this._dictionaryIndex++));
      }
      return yield e.open.call(this, t);
    });
  }
  readRecordBatch(t) {
    return V(this, void 0, void 0, function* () {
      var e;
      if (this.closed)
        return null;
      this._footer || (yield this.open());
      const i = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
      if (i && (yield this._handle.seek(i.offset))) {
        const n = yield this._reader.readMessage(K.RecordBatch);
        if (n?.isRecordBatch()) {
          const s = n.header(), o = yield this._reader.readMessageBody(n.bodyLength);
          return this._loadRecordBatch(s, o);
        }
      }
      return null;
    });
  }
  _readDictionaryBatch(t) {
    return V(this, void 0, void 0, function* () {
      var e;
      const i = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
      if (i && (yield this._handle.seek(i.offset))) {
        const n = yield this._reader.readMessage(K.DictionaryBatch);
        if (n?.isDictionaryBatch()) {
          const s = n.header(), o = yield this._reader.readMessageBody(n.bodyLength), u = this._loadDictionaryBatch(s, o);
          this.dictionaries.set(s.id, u);
        }
      }
    });
  }
  _readFooter() {
    return V(this, void 0, void 0, function* () {
      const { _handle: t } = this;
      t._pending && (yield t._pending);
      const e = t.size - Sc, i = yield t.readInt32(e), n = yield t.readAt(e - i, i);
      return fr.decode(n);
    });
  }
  _readNextMessageAndValidate(t) {
    return V(this, void 0, void 0, function* () {
      if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
        const e = this._footer.getRecordBatch(this._recordBatchIndex);
        if (e && (yield this._handle.seek(e.offset)))
          return yield this._reader.readMessage(t);
      }
      return null;
    });
  }
}
class qh extends Ci {
  constructor(t, e) {
    super(t, e);
  }
  _loadVectors(t, e, i) {
    return new eh(e, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(i);
  }
}
function Ac(r, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : r.autoDestroy;
}
function* po(r) {
  const t = Ft.from(r);
  try {
    if (!t.open({ autoDestroy: !1 }).closed)
      do
        yield t;
      while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function yo(r) {
  return Yt(this, arguments, function* () {
    const e = yield z(Ft.from(r));
    try {
      if (!(yield z(e.open({ autoDestroy: !1 }))).closed)
        do
          yield yield z(e);
        while (!(yield z(e.reset().open())).closed);
    } finally {
      yield z(e.cancel());
    }
  });
}
function Hh(r) {
  return new Fi(new qh(r));
}
function Wh(r) {
  const t = r.peek(br + 7 & -8);
  return t && t.byteLength >= 4 ? Hn(t) ? new Ic(new Ec(r.read())) : new Fi(new Ci(r)) : new Fi(new Ci((function* () {
  })()));
}
function Gh(r) {
  return V(this, void 0, void 0, function* () {
    const t = yield r.peek(br + 7 & -8);
    return t && t.byteLength >= 4 ? Hn(t) ? new Ic(new Ec(yield r.read())) : new Mi(new ki(r)) : new Mi(new ki((function() {
      return Yt(this, arguments, function* () {
      });
    })()));
  });
}
function jh(r) {
  return V(this, void 0, void 0, function* () {
    const { size: t } = yield r.stat(), e = new Ti(r, t);
    return t >= Uh && Hn(yield e.readAt(0, br + 7 & -8)) ? new Vh(new zh(e)) : new Mi(new ki(e));
  });
}
class st extends H {
  /** @nocollapse */
  static assemble(...t) {
    const e = (n) => n.flatMap((s) => Array.isArray(s) ? e(s) : s instanceof bt ? s.data.children : s.data), i = new st();
    return i.visitMany(e(t)), i;
  }
  constructor() {
    super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [];
  }
  visit(t) {
    if (t instanceof Q)
      return this.visitMany(t.data), this;
    const { type: e } = t;
    if (!B.isDictionary(e)) {
      const { length: i } = t;
      if (i > 2147483647)
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      if (B.isUnion(e))
        this.nodes.push(new ye(i, 0));
      else {
        const { nullCount: n } = t;
        B.isNull(e) || xt.call(this, n <= 0 ? new Uint8Array(0) : Oi(t.offset, i, t.nullBitmap)), this.nodes.push(new ye(i, n));
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
function xt(r) {
  const t = r.byteLength + 7 & -8;
  return this.buffers.push(r), this.bufferRegions.push(new Kt(this._byteLength, t)), this._byteLength += t, this;
}
function Yh(r) {
  var t;
  const { type: e, length: i, typeIds: n, valueOffsets: s } = r;
  if (xt.call(this, n), e.mode === ht.Sparse)
    return bn.call(this, r);
  if (e.mode === ht.Dense) {
    if (r.offset <= 0)
      return xt.call(this, s), bn.call(this, r);
    {
      const o = new Int32Array(i), u = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
      for (let f, d, y = -1; ++y < i; )
        (f = n[y]) !== void 0 && ((d = u[f]) === void 0 && (d = u[f] = s[y]), o[y] = s[y] - d, l[f] = ((t = l[f]) !== null && t !== void 0 ? t : 0) + 1);
      xt.call(this, o), this.visitMany(r.children.map((f, d) => {
        const y = e.typeIds[d], h = u[y], c = l[y];
        return f.slice(h, Math.min(i, c));
      }));
    }
  }
  return this;
}
function Kh(r) {
  let t;
  return r.nullCount >= r.length ? xt.call(this, new Uint8Array(0)) : (t = r.values) instanceof Uint8Array ? xt.call(this, Oi(r.offset, r.length, t)) : xt.call(this, Ri(r.values));
}
function ae(r) {
  return xt.call(this, r.values.subarray(0, r.length * r.stride));
}
function qi(r) {
  const { length: t, values: e, valueOffsets: i } = r, n = et(i[0]), s = et(i[t]), o = Math.min(s - n, e.byteLength - n);
  return xt.call(this, Do(-n, t + 1, i)), xt.call(this, e.subarray(n, n + o)), this;
}
function Wn(r) {
  const { length: t, valueOffsets: e } = r;
  if (e) {
    const { [0]: i, [t]: n } = e;
    return xt.call(this, Do(-i, t + 1, e)), this.visit(r.children[0].slice(i, n - i));
  }
  return this.visit(r.children[0]);
}
function bn(r) {
  return this.visitMany(r.type.children.map((t, e) => r.children[e]).filter(Boolean))[0];
}
st.prototype.visitBool = Kh;
st.prototype.visitInt = ae;
st.prototype.visitFloat = ae;
st.prototype.visitUtf8 = qi;
st.prototype.visitLargeUtf8 = qi;
st.prototype.visitBinary = qi;
st.prototype.visitLargeBinary = qi;
st.prototype.visitFixedSizeBinary = ae;
st.prototype.visitDate = ae;
st.prototype.visitTimestamp = ae;
st.prototype.visitTime = ae;
st.prototype.visitDecimal = ae;
st.prototype.visitList = Wn;
st.prototype.visitStruct = bn;
st.prototype.visitUnion = Yh;
st.prototype.visitInterval = ae;
st.prototype.visitDuration = ae;
st.prototype.visitFixedSizeList = Wn;
st.prototype.visitMap = Wn;
class Oc extends Cn {
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
    super(), this._position = 0, this._started = !1, this._sink = new ri(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), St(t) || (t = { autoDestroy: !0, writeLegacyIpcFormat: !1 }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : !0, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : !1;
  }
  toString(t = !1) {
    return this._sink.toString(t);
  }
  toUint8Array(t = !1) {
    return this._sink.toUint8Array(t);
  }
  writeAll(t) {
    return be(t) ? t.then((e) => this.writeAll(e)) : Ye(t) ? Kn(this, t) : Yn(this, t);
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
    return t === this._sink || t instanceof ri ? this._sink = t : (this._sink = new ri(), t && Au(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && Ou(t) && this.toNodeStream({ objectMode: !1 }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!e || !_n(e, this._schema)) && (e == null ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = e, this._writeSchema(e))), this;
  }
  write(t) {
    let e = null;
    if (this._sink) {
      if (t == null)
        return this.finish() && void 0;
      if (t instanceof dt && !(e = t.schema))
        return this.finish() && void 0;
      if (t instanceof bt && !(e = t.schema))
        return this.finish() && void 0;
    } else throw new Error("RecordBatchWriter is closed");
    if (e && !_n(e, this._schema)) {
      if (this._started && this._autoDestroy)
        return this.close();
      this.reset(this._sink, e);
    }
    t instanceof bt ? t instanceof Vn || this._writeRecordBatch(t) : t instanceof dt ? this.writeAll(t.batches) : gr(t) && this.writeAll(t);
  }
  _writeMessage(t, e = 8) {
    const i = e - 1, n = pt.encode(t), s = n.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, u = s + o + i & ~i, l = u - s - o;
    return t.headerType === K.RecordBatch ? this._recordBatchBlocks.push(new fe(u, t.bodyLength, this._position)) : t.headerType === K.DictionaryBatch && this._dictionaryBlocks.push(new fe(u, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(u - o)), s > 0 && this._write(n), this._writePadding(l);
  }
  _write(t) {
    if (this._started) {
      const e = j(t);
      e && e.byteLength > 0 && (this._sink.write(e), this._position += e.byteLength);
    }
    return this;
  }
  _writeSchema(t) {
    return this._writeMessage(pt.from(t));
  }
  // @ts-ignore
  _writeFooter(t) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(pr);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: e, nodes: i, bufferRegions: n, buffers: s } = st.assemble(t), o = new Lt(t.numRows, i, n), u = pt.from(o, e);
    return this._writeDictionaries(t)._writeMessage(u)._writeBodyBuffers(s);
  }
  _writeDictionaryBatch(t, e, i = !1) {
    const { byteLength: n, nodes: s, bufferRegions: o, buffers: u } = st.assemble(new Q([t])), l = new Lt(t.length, s, o), f = new Zt(l, e, i), d = pt.from(f, n);
    return this._writeMessage(d)._writeBodyBuffers(u);
  }
  _writeBodyBuffers(t) {
    let e, i, n;
    for (let s = -1, o = t.length; ++s < o; )
      (e = t[s]) && (i = e.byteLength) > 0 && (this._write(e), (n = (i + 7 & -8) - i) > 0 && this._writePadding(n));
    return this;
  }
  _writeDictionaries(t) {
    var e, i;
    for (const [n, s] of t.dictionaries) {
      const o = (e = s?.data) !== null && e !== void 0 ? e : [], u = this._seenDictionaries.get(n), l = (i = this._dictionaryDeltaOffsets.get(n)) !== null && i !== void 0 ? i : 0;
      if (!u || u.data[0] !== o[0])
        for (const [f, d] of o.entries())
          this._writeDictionaryBatch(d, n, f > 0);
      else if (l < o.length)
        for (const f of o.slice(l))
          this._writeDictionaryBatch(f, n, !0);
      this._seenDictionaries.set(n, s), this._dictionaryDeltaOffsets.set(n, o.length);
    }
    return this;
  }
}
class Gn extends Oc {
  /** @nocollapse */
  static writeAll(t, e) {
    const i = new Gn(e);
    return be(t) ? t.then((n) => i.writeAll(n)) : Ye(t) ? Kn(i, t) : Yn(i, t);
  }
}
class jn extends Oc {
  /** @nocollapse */
  static writeAll(t) {
    const e = new jn();
    return be(t) ? t.then((i) => e.writeAll(i)) : Ye(t) ? Kn(e, t) : Yn(e, t);
  }
  constructor() {
    super(), this._autoDestroy = !0;
  }
  // @ts-ignore
  _writeSchema(t) {
    return this._writeMagic()._writePadding(2);
  }
  _writeDictionaryBatch(t, e, i = !1) {
    if (!i && this._seenDictionaries.has(e))
      throw new Error("The Arrow File format does not support replacement dictionaries. ");
    return super._writeDictionaryBatch(t, e, i);
  }
  _writeFooter(t) {
    const e = fr.encode(new fr(t, at.V5, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic();
  }
}
function Yn(r, t) {
  let e = t;
  t instanceof dt && (e = t.batches, r.reset(void 0, t.schema));
  for (const i of e)
    r.write(i);
  return r.finish();
}
function Kn(r, t) {
  return V(this, void 0, void 0, function* () {
    var e, i, n, s, o, u, l;
    try {
      for (e = !0, i = ve(t); n = yield i.next(), s = n.done, !s; e = !0) {
        l = n.value, e = !1;
        const f = l;
        r.write(f);
      }
    } catch (f) {
      o = { error: f };
    } finally {
      try {
        !e && !s && (u = i.return) && (yield u.call(i));
      } finally {
        if (o) throw o.error;
      }
    }
    return r.finish();
  });
}
function Qh(r, t = "stream") {
  return (t === "stream" ? Gn : jn).writeAll(r).toUint8Array(!0);
}
var Jh = Object.create, Rc = Object.defineProperty, Zh = Object.getOwnPropertyDescriptor, Xh = Object.getOwnPropertyNames, $h = Object.getPrototypeOf, td = Object.prototype.hasOwnProperty, ed = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports), rd = (r, t, e, i) => {
  if (t && typeof t == "object" || typeof t == "function") for (let n of Xh(t)) !td.call(r, n) && n !== e && Rc(r, n, { get: () => t[n], enumerable: !(i = Zh(t, n)) || i.enumerable });
  return r;
}, id = (r, t, e) => (e = r != null ? Jh($h(r)) : {}, rd(!r || !r.__esModule ? Rc(e, "default", { value: r, enumerable: !0 }) : e, r)), nd = ed((r, t) => {
  t.exports = Worker;
}), Lc = ((r) => (r[r.UNDEFINED = 0] = "UNDEFINED", r[r.AUTOMATIC = 1] = "AUTOMATIC", r[r.READ_ONLY = 2] = "READ_ONLY", r[r.READ_WRITE = 3] = "READ_WRITE", r))(Lc || {}), Bc = ((r) => (r[r.IDENTIFIER = 0] = "IDENTIFIER", r[r.NUMERIC_CONSTANT = 1] = "NUMERIC_CONSTANT", r[r.STRING_CONSTANT = 2] = "STRING_CONSTANT", r[r.OPERATOR = 3] = "OPERATOR", r[r.KEYWORD = 4] = "KEYWORD", r[r.COMMENT = 5] = "COMMENT", r))(Bc || {}), Nc = ((r) => (r[r.NONE = 0] = "NONE", r[r.DEBUG = 1] = "DEBUG", r[r.INFO = 2] = "INFO", r[r.WARNING = 3] = "WARNING", r[r.ERROR = 4] = "ERROR", r))(Nc || {}), Dc = ((r) => (r[r.NONE = 0] = "NONE", r[r.CONNECT = 1] = "CONNECT", r[r.DISCONNECT = 2] = "DISCONNECT", r[r.OPEN = 3] = "OPEN", r[r.QUERY = 4] = "QUERY", r[r.INSTANTIATE = 5] = "INSTANTIATE", r))(Dc || {}), Tc = ((r) => (r[r.NONE = 0] = "NONE", r[r.OK = 1] = "OK", r[r.ERROR = 2] = "ERROR", r[r.START = 3] = "START", r[r.RUN = 4] = "RUN", r[r.CAPTURE = 5] = "CAPTURE", r))(Tc || {}), Fc = ((r) => (r[r.NONE = 0] = "NONE", r[r.WEB_WORKER = 1] = "WEB_WORKER", r[r.NODE_WORKER = 2] = "NODE_WORKER", r[r.BINDINGS = 3] = "BINDINGS", r[r.ASYNC_DUCKDB = 4] = "ASYNC_DUCKDB", r))(Fc || {}), sd = class {
  log(r) {
  }
}, od = class {
  constructor(r = 2) {
    this.level = r;
  }
  log(r) {
    r.level >= this.level && console.log(r);
  }
};
function ad(r) {
  switch (r) {
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
function cd(r) {
  switch (r) {
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
function ud(r) {
  switch (r) {
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
function ld(r) {
  switch (r) {
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
var Mc = ((r) => (r[r.SUCCESS = 0] = "SUCCESS", r))(Mc || {}), Cc = class {
  constructor(r, t) {
    this._bindings = r, this._conn = t;
  }
  get bindings() {
    return this._bindings;
  }
  async close() {
    return this._bindings.disconnect(this._conn);
  }
  useUnsafe(r) {
    return r(this._bindings, this._conn);
  }
  async query(r) {
    this._bindings.logger.log({ timestamp: /* @__PURE__ */ new Date(), level: 2, origin: 4, topic: 4, event: 4, value: r });
    let t = await this._bindings.runQuery(this._conn, r), e = Ft.from(t);
    return console.assert(e.isSync(), "Reader is not sync"), console.assert(e.isFile(), "Reader is not file"), new dt(e);
  }
  async send(r) {
    this._bindings.logger.log({ timestamp: /* @__PURE__ */ new Date(), level: 2, origin: 4, topic: 4, event: 4, value: r });
    let t = await this._bindings.startPendingQuery(this._conn, r);
    for (; t == null; ) t = await this._bindings.pollPendingQuery(this._conn);
    let e = new Qn(this._bindings, this._conn, t), i = await Ft.from(e);
    return console.assert(i.isAsync()), console.assert(i.isStream()), i;
  }
  async cancelSent() {
    return await this._bindings.cancelPendingQuery(this._conn);
  }
  async getTableNames(r) {
    return await this._bindings.getTableNames(this._conn, r);
  }
  async prepare(r) {
    let t = await this._bindings.createPrepared(this._conn, r);
    return new kc(this._bindings, this._conn, t);
  }
  async insertArrowTable(r, t) {
    let e = Qh(r, "stream");
    await this.insertArrowFromIPCStream(e, t);
  }
  async insertArrowFromIPCStream(r, t) {
    await this._bindings.insertArrowFromIPCStream(this._conn, r, t);
  }
  async insertCSVFromPath(r, t) {
    await this._bindings.insertCSVFromPath(this._conn, r, t);
  }
  async insertJSONFromPath(r, t) {
    await this._bindings.insertJSONFromPath(this._conn, r, t);
  }
}, Qn = class {
  constructor(r, t, e) {
    this.db = r, this.conn = t, this.header = e, this._first = !0, this._depleted = !1, this._inFlight = null;
  }
  async next() {
    if (this._first) return this._first = !1, { done: !1, value: this.header };
    if (this._depleted) return { done: !0, value: null };
    let r;
    return this._inFlight != null ? (r = await this._inFlight, this._inFlight = null) : r = await this.db.fetchQueryResults(this.conn), this._depleted = r.length == 0, this._depleted || (this._inFlight = this.db.fetchQueryResults(this.conn)), { done: this._depleted, value: r };
  }
  [Symbol.asyncIterator]() {
    return this;
  }
}, kc = class {
  constructor(r, t, e) {
    this.bindings = r, this.connectionId = t, this.statementId = e;
  }
  async close() {
    await this.bindings.closePrepared(this.connectionId, this.statementId);
  }
  async query(...r) {
    let t = await this.bindings.runPrepared(this.connectionId, this.statementId, r), e = Ft.from(t);
    return console.assert(e.isSync()), console.assert(e.isFile()), new dt(e);
  }
  async send(...r) {
    let t = await this.bindings.sendPrepared(this.connectionId, this.statementId, r), e = new Qn(this.bindings, this.connectionId, t), i = await Ft.from(e);
    return console.assert(i.isAsync()), console.assert(i.isStream()), i;
  }
}, Pc = ((r) => (r.CANCEL_PENDING_QUERY = "CANCEL_PENDING_QUERY", r.CLOSE_PREPARED = "CLOSE_PREPARED", r.COLLECT_FILE_STATISTICS = "COLLECT_FILE_STATISTICS", r.CONNECT = "CONNECT", r.COPY_FILE_TO_BUFFER = "COPY_FILE_TO_BUFFER", r.COPY_FILE_TO_PATH = "COPY_FILE_TO_PATH", r.CREATE_PREPARED = "CREATE_PREPARED", r.DISCONNECT = "DISCONNECT", r.DROP_FILE = "DROP_FILE", r.DROP_FILES = "DROP_FILES", r.EXPORT_FILE_STATISTICS = "EXPORT_FILE_STATISTICS", r.FETCH_QUERY_RESULTS = "FETCH_QUERY_RESULTS", r.FLUSH_FILES = "FLUSH_FILES", r.GET_FEATURE_FLAGS = "GET_FEATURE_FLAGS", r.GET_TABLE_NAMES = "GET_TABLE_NAMES", r.GET_VERSION = "GET_VERSION", r.GLOB_FILE_INFOS = "GLOB_FILE_INFOS", r.INSERT_ARROW_FROM_IPC_STREAM = "INSERT_ARROW_FROM_IPC_STREAM", r.INSERT_CSV_FROM_PATH = "IMPORT_CSV_FROM_PATH", r.INSERT_JSON_FROM_PATH = "IMPORT_JSON_FROM_PATH", r.INSTANTIATE = "INSTANTIATE", r.OPEN = "OPEN", r.PING = "PING", r.POLL_PENDING_QUERY = "POLL_PENDING_QUERY", r.REGISTER_FILE_BUFFER = "REGISTER_FILE_BUFFER", r.REGISTER_FILE_HANDLE = "REGISTER_FILE_HANDLE", r.REGISTER_FILE_URL = "REGISTER_FILE_URL", r.RESET = "RESET", r.RUN_PREPARED = "RUN_PREPARED", r.RUN_QUERY = "RUN_QUERY", r.SEND_PREPARED = "SEND_PREPARED", r.START_PENDING_QUERY = "START_PENDING_QUERY", r.TOKENIZE = "TOKENIZE", r))(Pc || {}), xc = ((r) => (r.CONNECTION_INFO = "CONNECTION_INFO", r.ERROR = "ERROR", r.FEATURE_FLAGS = "FEATURE_FLAGS", r.FILE_BUFFER = "FILE_BUFFER", r.FILE_INFOS = "FILE_INFOS", r.FILE_SIZE = "FILE_SIZE", r.FILE_STATISTICS = "FILE_STATISTICS", r.INSTANTIATE_PROGRESS = "INSTANTIATE_PROGRESS", r.LOG = "LOG", r.OK = "OK", r.PREPARED_STATEMENT_ID = "PREPARED_STATEMENT_ID", r.QUERY_PLAN = "QUERY_PLAN", r.QUERY_RESULT = "QUERY_RESULT", r.QUERY_RESULT_CHUNK = "QUERY_RESULT_CHUNK", r.QUERY_RESULT_HEADER = "QUERY_RESULT_HEADER", r.QUERY_RESULT_HEADER_OR_NULL = "QUERY_RESULT_HEADER_OR_NULL", r.REGISTERED_FILE = "REGISTERED_FILE", r.SCRIPT_TOKENS = "SCRIPT_TOKENS", r.SUCCESS = "SUCCESS", r.TABLE_NAMES = "TABLE_NAMES", r.VERSION_STRING = "VERSION_STRING", r))(xc || {}), Y = class {
  constructor(r, t) {
    this.promiseResolver = () => {
    }, this.promiseRejecter = () => {
    }, this.type = r, this.data = t, this.promise = new Promise((e, i) => {
      this.promiseResolver = e, this.promiseRejecter = i;
    });
  }
};
function si(r) {
  switch (r.typeId) {
    case v.Binary:
      return { sqlType: "binary" };
    case v.Bool:
      return { sqlType: "bool" };
    case v.Date:
      return { sqlType: "date" };
    case v.DateDay:
      return { sqlType: "date32[d]" };
    case v.DateMillisecond:
      return { sqlType: "date64[ms]" };
    case v.Decimal: {
      let t = r;
      return { sqlType: "decimal", precision: t.precision, scale: t.scale };
    }
    case v.Float:
      return { sqlType: "float" };
    case v.Float16:
      return { sqlType: "float16" };
    case v.Float32:
      return { sqlType: "float32" };
    case v.Float64:
      return { sqlType: "float64" };
    case v.Int:
      return { sqlType: "int32" };
    case v.Int16:
      return { sqlType: "int16" };
    case v.Int32:
      return { sqlType: "int32" };
    case v.Int64:
      return { sqlType: "int64" };
    case v.Uint16:
      return { sqlType: "uint16" };
    case v.Uint32:
      return { sqlType: "uint32" };
    case v.Uint64:
      return { sqlType: "uint64" };
    case v.Uint8:
      return { sqlType: "uint8" };
    case v.IntervalDayTime:
      return { sqlType: "interval[dt]" };
    case v.IntervalYearMonth:
      return { sqlType: "interval[m]" };
    case v.List:
      return { sqlType: "list", valueType: si(r.valueType) };
    case v.FixedSizeBinary:
      return { sqlType: "fixedsizebinary", byteWidth: r.byteWidth };
    case v.Null:
      return { sqlType: "null" };
    case v.Utf8:
      return { sqlType: "utf8" };
    case v.Struct:
      return { sqlType: "struct", fields: r.children.map((t) => Sn(t.name, t.type)) };
    case v.Map: {
      let t = r;
      return { sqlType: "map", keyType: si(t.keyType), valueType: si(t.valueType) };
    }
    case v.Time:
      return { sqlType: "time[s]" };
    case v.TimeMicrosecond:
      return { sqlType: "time[us]" };
    case v.TimeMillisecond:
      return { sqlType: "time[ms]" };
    case v.TimeNanosecond:
      return { sqlType: "time[ns]" };
    case v.TimeSecond:
      return { sqlType: "time[s]" };
    case v.Timestamp:
      return { sqlType: "timestamp", timezone: r.timezone || void 0 };
    case v.TimestampSecond:
      return { sqlType: "timestamp[s]", timezone: r.timezone || void 0 };
    case v.TimestampMicrosecond:
      return { sqlType: "timestamp[us]", timezone: r.timezone || void 0 };
    case v.TimestampNanosecond:
      return { sqlType: "timestamp[ns]", timezone: r.timezone || void 0 };
    case v.TimestampMillisecond:
      return { sqlType: "timestamp[ms]", timezone: r.timezone || void 0 };
  }
  throw new Error("unsupported arrow type: ".concat(r.toString()));
}
function Sn(r, t) {
  let e = si(t);
  return e.name = r, e;
}
var hd = new TextEncoder(), dd = class {
  constructor(r, t = null) {
    this._onInstantiationProgress = [], this._worker = null, this._workerShutdownPromise = null, this._workerShutdownResolver = () => {
    }, this._nextMessageId = 0, this._pendingRequests = /* @__PURE__ */ new Map(), this._logger = r, this._onMessageHandler = this.onMessage.bind(this), this._onErrorHandler = this.onError.bind(this), this._onCloseHandler = this.onClose.bind(this), t != null && this.attach(t);
  }
  get logger() {
    return this._logger;
  }
  attach(r) {
    this._worker = r, this._worker.addEventListener("message", this._onMessageHandler), this._worker.addEventListener("error", this._onErrorHandler), this._worker.addEventListener("close", this._onCloseHandler), this._workerShutdownPromise = new Promise((t, e) => {
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
  async postTask(r, t = []) {
    if (!this._worker) {
      console.error("cannot send a message since the worker is not set!");
      return;
    }
    let e = this._nextMessageId++;
    return this._pendingRequests.set(e, r), this._worker.postMessage({ messageId: e, type: r.type, data: r.data }, t), await r.promise;
  }
  onMessage(r) {
    var t;
    let e = r.data;
    switch (e.type) {
      case "LOG": {
        this._logger.log(e.data);
        return;
      }
      case "INSTANTIATE_PROGRESS": {
        for (let n of this._onInstantiationProgress) n(e.data);
        return;
      }
    }
    let i = this._pendingRequests.get(e.requestId);
    if (!i) {
      console.warn("unassociated response: [".concat(e.requestId, ", ").concat(e.type.toString(), "]"));
      return;
    }
    if (this._pendingRequests.delete(e.requestId), e.type == "ERROR") {
      let n = new Error(e.data.message);
      n.name = e.data.name, (t = Object.getOwnPropertyDescriptor(n, "stack")) != null && t.writable && (n.stack = e.data.stack), i.promiseRejecter(n);
      return;
    }
    switch (i.type) {
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
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "INSTANTIATE":
        if (this._onInstantiationProgress = [], e.type == "OK") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "GLOB_FILE_INFOS":
        if (e.type == "FILE_INFOS") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "GET_VERSION":
        if (e.type == "VERSION_STRING") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "GET_FEATURE_FLAGS":
        if (e.type == "FEATURE_FLAGS") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "GET_TABLE_NAMES":
        if (e.type == "TABLE_NAMES") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "TOKENIZE":
        if (e.type == "SCRIPT_TOKENS") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "COPY_FILE_TO_BUFFER":
        if (e.type == "FILE_BUFFER") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "EXPORT_FILE_STATISTICS":
        if (e.type == "FILE_STATISTICS") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "CONNECT":
        if (e.type == "CONNECTION_INFO") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "RUN_PREPARED":
      case "RUN_QUERY":
        if (e.type == "QUERY_RESULT") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "SEND_PREPARED":
        if (e.type == "QUERY_RESULT_HEADER") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "START_PENDING_QUERY":
        if (e.type == "QUERY_RESULT_HEADER_OR_NULL") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "POLL_PENDING_QUERY":
        if (e.type == "QUERY_RESULT_HEADER_OR_NULL") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "CANCEL_PENDING_QUERY":
        if (this._onInstantiationProgress = [], e.type == "SUCCESS") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "FETCH_QUERY_RESULTS":
        if (e.type == "QUERY_RESULT_CHUNK") {
          i.promiseResolver(e.data);
          return;
        }
        break;
      case "CREATE_PREPARED":
        if (e.type == "PREPARED_STATEMENT_ID") {
          i.promiseResolver(e.data);
          return;
        }
        break;
    }
    i.promiseRejecter(new Error("unexpected response type: ".concat(e.type.toString())));
  }
  onError(r) {
    console.error(r), console.error("error in duckdb worker: ".concat(r.message)), this._pendingRequests.clear();
  }
  onClose() {
    if (this._workerShutdownResolver(null), this._pendingRequests.size != 0) {
      console.warn("worker terminated with ".concat(this._pendingRequests.size, " pending requests"));
      return;
    }
    this._pendingRequests.clear();
  }
  async reset() {
    let r = new Y("RESET", null);
    return await this.postTask(r);
  }
  async ping() {
    let r = new Y("PING", null);
    await this.postTask(r);
  }
  async dropFile(r) {
    let t = new Y("DROP_FILE", r);
    return await this.postTask(t);
  }
  async dropFiles() {
    let r = new Y("DROP_FILES", null);
    return await this.postTask(r);
  }
  async flushFiles() {
    let r = new Y("FLUSH_FILES", null);
    return await this.postTask(r);
  }
  async instantiate(r, t = null, e = (i) => {
  }) {
    this._onInstantiationProgress.push(e);
    let i = new Y("INSTANTIATE", [r, t]);
    return await this.postTask(i);
  }
  async getVersion() {
    let r = new Y("GET_VERSION", null);
    return await this.postTask(r);
  }
  async getFeatureFlags() {
    let r = new Y("GET_FEATURE_FLAGS", null);
    return await this.postTask(r);
  }
  async open(r) {
    let t = new Y("OPEN", r);
    await this.postTask(t);
  }
  async tokenize(r) {
    let t = new Y("TOKENIZE", r);
    return await this.postTask(t);
  }
  async connectInternal() {
    let r = new Y("CONNECT", null);
    return await this.postTask(r);
  }
  async connect() {
    let r = await this.connectInternal();
    return new Cc(this, r);
  }
  async disconnect(r) {
    let t = new Y("DISCONNECT", r);
    await this.postTask(t);
  }
  async runQuery(r, t) {
    let e = new Y("RUN_QUERY", [r, t]);
    return await this.postTask(e);
  }
  async startPendingQuery(r, t) {
    let e = new Y("START_PENDING_QUERY", [r, t]);
    return await this.postTask(e);
  }
  async pollPendingQuery(r) {
    let t = new Y("POLL_PENDING_QUERY", r);
    return await this.postTask(t);
  }
  async cancelPendingQuery(r) {
    let t = new Y("CANCEL_PENDING_QUERY", r);
    return await this.postTask(t);
  }
  async fetchQueryResults(r) {
    let t = new Y("FETCH_QUERY_RESULTS", r);
    return await this.postTask(t);
  }
  async getTableNames(r, t) {
    let e = new Y("GET_TABLE_NAMES", [r, t]);
    return await this.postTask(e);
  }
  async createPrepared(r, t) {
    let e = new Y("CREATE_PREPARED", [r, t]);
    return await this.postTask(e);
  }
  async closePrepared(r, t) {
    let e = new Y("CLOSE_PREPARED", [r, t]);
    await this.postTask(e);
  }
  async runPrepared(r, t, e) {
    let i = new Y("RUN_PREPARED", [r, t, e]);
    return await this.postTask(i);
  }
  async sendPrepared(r, t, e) {
    let i = new Y("SEND_PREPARED", [r, t, e]);
    return await this.postTask(i);
  }
  async globFiles(r) {
    let t = new Y("GLOB_FILE_INFOS", r);
    return await this.postTask(t);
  }
  async registerFileText(r, t) {
    let e = hd.encode(t);
    await this.registerFileBuffer(r, e);
  }
  async registerFileURL(r, t, e, i) {
    t === void 0 && (t = r);
    let n = new Y("REGISTER_FILE_URL", [r, t, e, i]);
    await this.postTask(n);
  }
  async registerEmptyFileBuffer(r) {
  }
  async registerFileBuffer(r, t) {
    let e = new Y("REGISTER_FILE_BUFFER", [r, t]);
    await this.postTask(e, [t.buffer]);
  }
  async registerFileHandle(r, t, e, i) {
    let n = new Y("REGISTER_FILE_HANDLE", [r, t, e, i]);
    await this.postTask(n, []);
  }
  async collectFileStatistics(r, t) {
    let e = new Y("COLLECT_FILE_STATISTICS", [r, t]);
    await this.postTask(e, []);
  }
  async exportFileStatistics(r) {
    let t = new Y("EXPORT_FILE_STATISTICS", r);
    return await this.postTask(t, []);
  }
  async copyFileToBuffer(r) {
    let t = new Y("COPY_FILE_TO_BUFFER", r);
    return await this.postTask(t);
  }
  async copyFileToPath(r, t) {
    let e = new Y("COPY_FILE_TO_PATH", [r, t]);
    await this.postTask(e);
  }
  async insertArrowFromIPCStream(r, t, e) {
    if (t.length == 0) return;
    let i = new Y("INSERT_ARROW_FROM_IPC_STREAM", [r, t, e]);
    await this.postTask(i, [t.buffer]);
  }
  async insertCSVFromPath(r, t, e) {
    if (e.columns !== void 0) {
      let n = [];
      for (let s in e.columns) {
        let o = e.columns[s];
        n.push(Sn(s, o));
      }
      e.columnsFlat = n, delete e.columns;
    }
    let i = new Y("IMPORT_CSV_FROM_PATH", [r, t, e]);
    await this.postTask(i);
  }
  async insertJSONFromPath(r, t, e) {
    if (e.columns !== void 0) {
      let n = [];
      for (let s in e.columns) {
        let o = e.columns[s];
        n.push(Sn(s, o));
      }
      e.columnsFlat = n, delete e.columns;
    }
    let i = new Y("IMPORT_JSON_FROM_PATH", [r, t, e]);
    await this.postTask(i);
  }
}, fd = class {
  constructor() {
    this._bindings = null, this._nextMessageId = 0;
  }
  log(r) {
    this.postMessage({ messageId: this._nextMessageId++, requestId: 0, type: "LOG", data: r }, []);
  }
  sendOK(r) {
    this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "OK", data: null }, []);
  }
  failWith(r, t) {
    let e = { name: t.name, message: t.message, stack: t.stack || void 0 };
    this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "ERROR", data: e }, []);
  }
  async onMessage(r) {
    switch (r.type) {
      case "PING":
        this.sendOK(r);
        return;
      case "INSTANTIATE":
        this._bindings != null && this.failWith(r, new Error("duckdb already initialized"));
        try {
          this._bindings = await this.instantiate(r.data[0], r.data[1], (t) => {
            this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "INSTANTIATE_PROGRESS", data: t }, []);
          }), this.sendOK(r);
        } catch (t) {
          console.log(t), this._bindings = null, this.failWith(r, t);
        }
        return;
    }
    if (!this._bindings) return this.failWith(r, new Error("duckdb is not initialized"));
    try {
      switch (r.type) {
        case "GET_VERSION":
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "VERSION_STRING", data: this._bindings.getVersion() }, []);
          break;
        case "GET_FEATURE_FLAGS":
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "FEATURE_FLAGS", data: this._bindings.getFeatureFlags() }, []);
          break;
        case "RESET":
          this._bindings.reset(), this.sendOK(r);
          break;
        case "OPEN":
          this._bindings.open(r.data), this.sendOK(r);
          break;
        case "DROP_FILE":
          this._bindings.dropFile(r.data), this.sendOK(r);
          break;
        case "DROP_FILES":
          this._bindings.dropFiles(), this.sendOK(r);
          break;
        case "FLUSH_FILES":
          this._bindings.flushFiles(), this.sendOK(r);
          break;
        case "CONNECT": {
          let t = this._bindings.connect();
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "CONNECTION_INFO", data: t.useUnsafe((e, i) => i) }, []);
          break;
        }
        case "DISCONNECT":
          this._bindings.disconnect(r.data), this.sendOK(r);
          break;
        case "CREATE_PREPARED": {
          let t = this._bindings.createPrepared(r.data[0], r.data[1]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "PREPARED_STATEMENT_ID", data: t }, []);
          break;
        }
        case "CLOSE_PREPARED": {
          this._bindings.closePrepared(r.data[0], r.data[1]), this.sendOK(r);
          break;
        }
        case "RUN_PREPARED": {
          let t = this._bindings.runPrepared(r.data[0], r.data[1], r.data[2]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "QUERY_RESULT", data: t }, [t.buffer]);
          break;
        }
        case "RUN_QUERY": {
          let t = this._bindings.runQuery(r.data[0], r.data[1]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "QUERY_RESULT", data: t }, [t.buffer]);
          break;
        }
        case "SEND_PREPARED": {
          let t = this._bindings.sendPrepared(r.data[0], r.data[1], r.data[2]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "QUERY_RESULT_HEADER", data: t }, [t.buffer]);
          break;
        }
        case "START_PENDING_QUERY": {
          let t = this._bindings.startPendingQuery(r.data[0], r.data[1]), e = [];
          t && e.push(t.buffer), this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "QUERY_RESULT_HEADER_OR_NULL", data: t }, e);
          break;
        }
        case "POLL_PENDING_QUERY": {
          let t = this._bindings.pollPendingQuery(r.data), e = [];
          t && e.push(t.buffer), this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "QUERY_RESULT_HEADER_OR_NULL", data: t }, e);
          break;
        }
        case "CANCEL_PENDING_QUERY": {
          let t = this._bindings.cancelPendingQuery(r.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "SUCCESS", data: t }, []);
          break;
        }
        case "FETCH_QUERY_RESULTS": {
          let t = this._bindings.fetchQueryResults(r.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "QUERY_RESULT_CHUNK", data: t }, [t.buffer]);
          break;
        }
        case "GET_TABLE_NAMES": {
          let t = this._bindings.getTableNames(r.data[0], r.data[1]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "TABLE_NAMES", data: t }, []);
          break;
        }
        case "GLOB_FILE_INFOS": {
          let t = this._bindings.globFiles(r.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "FILE_INFOS", data: t }, []);
          break;
        }
        case "REGISTER_FILE_URL":
          this._bindings.registerFileURL(r.data[0], r.data[1], r.data[2], r.data[3]), this.sendOK(r);
          break;
        case "REGISTER_FILE_BUFFER":
          this._bindings.registerFileBuffer(r.data[0], r.data[1]), this.sendOK(r);
          break;
        case "REGISTER_FILE_HANDLE":
          this._bindings.registerFileHandle(r.data[0], r.data[1], r.data[2], r.data[3]), this.sendOK(r);
          break;
        case "COPY_FILE_TO_PATH":
          this._bindings.copyFileToPath(r.data[0], r.data[1]), this.sendOK(r);
          break;
        case "COPY_FILE_TO_BUFFER": {
          let t = this._bindings.copyFileToBuffer(r.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "FILE_BUFFER", data: t }, []);
          break;
        }
        case "COLLECT_FILE_STATISTICS":
          this._bindings.collectFileStatistics(r.data[0], r.data[1]), this.sendOK(r);
          break;
        case "EXPORT_FILE_STATISTICS": {
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "FILE_STATISTICS", data: this._bindings.exportFileStatistics(r.data) }, []);
          break;
        }
        case "INSERT_ARROW_FROM_IPC_STREAM": {
          this._bindings.insertArrowFromIPCStream(r.data[0], r.data[1], r.data[2]), this.sendOK(r);
          break;
        }
        case "IMPORT_CSV_FROM_PATH": {
          this._bindings.insertCSVFromPath(r.data[0], r.data[1], r.data[2]), this.sendOK(r);
          break;
        }
        case "IMPORT_JSON_FROM_PATH": {
          this._bindings.insertJSONFromPath(r.data[0], r.data[1], r.data[2]), this.sendOK(r);
          break;
        }
        case "TOKENIZE": {
          let t = this._bindings.tokenize(r.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: r.messageId, type: "SCRIPT_TOKENS", data: t }, []);
          break;
        }
      }
    } catch (t) {
      return console.log(t), this.failWith(r, t);
    }
  }
}, pd = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])), yd = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11])), gd = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), md = () => (async (r) => {
  try {
    return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(r);
  } catch {
    return !1;
  }
})(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11])), Jn = { name: "@duckdb/duckdb-wasm", version: "1.29.0" }, Uc = Jn.name, Vc = Jn.version, Zn = Jn.version.split("."), _d = Zn[0], vd = Zn[1], bd = Zn[2], Xn = () => typeof navigator > "u", zc = () => Xn() ? "node" : navigator.userAgent, Sd = () => zc().includes("Firefox"), Id = () => /^((?!chrome|android).)*safari/i.test(zc());
function wd() {
  let r = "https://cdn.jsdelivr.net/npm/".concat(Uc, "@").concat(Vc, "/dist/");
  return { mvp: { mainModule: "".concat(r, "duckdb-mvp.wasm"), mainWorker: "".concat(r, "duckdb-browser-mvp.worker.js") }, eh: { mainModule: "".concat(r, "duckdb-eh.wasm"), mainWorker: "".concat(r, "duckdb-browser-eh.worker.js") } };
}
var rn = null, nn = null, sn = null, on = null, an = null;
async function qc() {
  return rn == null && (rn = typeof BigInt64Array < "u"), nn == null && (nn = await yd()), sn == null && (sn = await md()), on == null && (on = await gd()), an == null && (an = await pd()), { bigInt64Array: rn, crossOriginIsolated: Xn() || globalThis.crossOriginIsolated || !1, wasmExceptions: nn, wasmSIMD: on, wasmThreads: sn, wasmBulkMemory: an };
}
async function Ed(r) {
  let t = await qc();
  if (t.wasmExceptions) {
    if (t.wasmSIMD && t.wasmThreads && t.crossOriginIsolated && r.coi) return { mainModule: r.coi.mainModule, mainWorker: r.coi.mainWorker, pthreadWorker: r.coi.pthreadWorker };
    if (r.eh) return { mainModule: r.eh.mainModule, mainWorker: r.eh.mainWorker, pthreadWorker: null };
  }
  return { mainModule: r.mvp.mainModule, mainWorker: r.mvp.mainWorker, pthreadWorker: null };
}
var Ad = id(nd());
async function Od(r) {
  let t = new Request(r), e = await fetch(t), i = URL.createObjectURL(await e.blob());
  return new Ad.default(i);
}
function Rd() {
  let r = new TextDecoder();
  return (t) => (typeof SharedArrayBuffer < "u" && t.buffer instanceof SharedArrayBuffer && (t = new Uint8Array(t)), r.decode(t));
}
Rd();
var Hc = ((r) => (r[r.BUFFER = 0] = "BUFFER", r[r.NODE_FS = 1] = "NODE_FS", r[r.BROWSER_FILEREADER = 2] = "BROWSER_FILEREADER", r[r.BROWSER_FSACCESS = 3] = "BROWSER_FSACCESS", r[r.HTTP = 4] = "HTTP", r[r.S3 = 5] = "S3", r))(Hc || {});
const Ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AsyncDuckDB: dd,
  AsyncDuckDBConnection: Cc,
  AsyncDuckDBDispatcher: fd,
  AsyncPreparedStatement: kc,
  AsyncResultStreamIterator: Qn,
  ConsoleLogger: od,
  DuckDBAccessMode: Lc,
  DuckDBDataProtocol: Hc,
  LogEvent: Tc,
  LogLevel: Nc,
  LogOrigin: Fc,
  LogTopic: Dc,
  PACKAGE_NAME: Uc,
  PACKAGE_VERSION: Vc,
  PACKAGE_VERSION_MAJOR: _d,
  PACKAGE_VERSION_MINOR: vd,
  PACKAGE_VERSION_PATCH: bd,
  StatusCode: Mc,
  TokenType: Bc,
  VoidLogger: sd,
  WorkerRequestType: Pc,
  WorkerResponseType: xc,
  WorkerTask: Y,
  createWorker: Od,
  getJsDelivrBundles: wd,
  getLogEventLabel: cd,
  getLogLevelLabel: ad,
  getLogOriginLabel: ld,
  getLogTopicLabel: ud,
  getPlatformFeatures: qc,
  isFirefox: Sd,
  isNode: Xn,
  isSafari: Id,
  selectBundle: Ed
}, Symbol.toStringTag, { value: "Module" })), Bd = `{{#if hasColumns}}
    <table class="table table-striped table-sm align-middle">
        <thead>
            <tr>
                {{#each columns}}
                    <th scope="col">{{this}}</th>
                {{/each}}
            </tr>
        </thead>
        <tbody>
            {{#if hasRows}}
                {{#each rows}}
                    <tr>
                        {{#each values}}
                            <td class="text-nowrap">{{this}}</td>
                        {{/each}}
                    </tr>
                {{/each}}
            {{else}}
                <tr>
                    <td class="text-muted" colspan="{{columnCount}}">No rows returned.</td>
                </tr>
            {{/if}}
        </tbody>
    </table>
{{else}}
    <div class="alert alert-info" role="status">No result columns were produced.</div>
{{/if}}
`, {
  AsyncDuckDB: xd,
  AsyncDuckDBConnection: Ud,
  ConsoleLogger: Vd,
  selectBundle: zd
} = Ld, Pi = {
  duckDbPromise: void 0,
  httpFsInitialized: !1
}, Nd = Su.compile(Bd.trim());
async function Dd(r) {
  let t = Pi.duckDbPromise;
  return t || (t = (async () => {
    if (!r)
      throw new Error("DuckDB configuration is required.");
    const i = await import(`${r.bundleBasePath}/${r.moduleLoader}`), n = `${r.bundleBasePath}/${r.mainWorker}`, s = new Worker(n, { type: "module" }), o = new i.ConsoleLogger(), u = new i.AsyncDuckDB(o, s), l = `${r.bundleBasePath}/${r.mainModule}`, f = r.pthreadWorker ? `${r.bundleBasePath}/${r.pthreadWorker}` : null;
    return await u.instantiate(l, f), { loader: i, db: u, worker: s };
  })(), Pi.duckDbPromise = t), t;
}
async function Td(r) {
  if (!Pi.httpFsInitialized) {
    try {
      await r.query("INSTALL 'httpfs';");
    } catch (t) {
      const e = t;
      if (!(typeof e?.message == "string" ? e.message : String(t ?? "")).includes("already installed"))
        throw t;
    }
    await r.query("LOAD 'httpfs';"), Pi.httpFsInitialized = !0;
  }
}
function Fd(r) {
  return r == null ? "" : typeof r == "object" ? JSON.stringify(r) : String(r);
}
function Md(r) {
  if (!r || r.startsWith("http://") || r.startsWith("https://"))
    return r;
  const t = typeof window == "object" && window.location ? window.location.origin : globalThis.location?.origin ?? "";
  return new URL(r, t).toString();
}
function Cd(r, t) {
  if (!r)
    throw new Error(`${t} element is required.`);
  return r;
}
function kd(r, t) {
  const e = Nd(t);
  r.innerHTML = e;
}
async function qd(r, t, e, i) {
  if (!r)
    throw new Error("DuckDB configuration is required.");
  if (!t)
    throw new Error("A parquet URL must be provided.");
  const n = Cd(i, "Target container"), { db: s } = await Dd(r), o = await s.connect();
  try {
    await Td(o);
    const l = Md(t), f = JSON.stringify(l);
    try {
      await o.query(`CREATE OR REPLACE TEMP VIEW parquet_source AS SELECT * FROM read_parquet(${f});`);
      const d = await o.query(e), h = (Array.isArray(d?.schema?.fields) ? d.schema.fields : []).map((g) => g?.name ?? "").filter((g) => !!g), c = d.toArray().map((g) => h.map((_) => Fd(g[_])));
      u(d);
      const a = c.map((g) => ({ values: g })), p = {
        columns: h,
        rows: a,
        hasColumns: h.length > 0,
        hasRows: a.length > 0,
        columnCount: h.length,
        rowCount: a.length
      };
      kd(n, p);
      return;
    } finally {
      await o.query("DROP VIEW IF EXISTS parquet_source;");
    }
  } finally {
    await o.close();
  }
  function u(l) {
    typeof l.close == "function" ? l.close() : typeof l.release == "function" && l.release();
  }
}
function Hd(r) {
  r && (r.innerHTML = "");
}
export {
  xd as AsyncDuckDB,
  Ud as AsyncDuckDBConnection,
  fd as AsyncDuckDBDispatcher,
  kc as AsyncPreparedStatement,
  Qn as AsyncResultStreamIterator,
  Vd as ConsoleLogger,
  Lc as DuckDBAccessMode,
  Hc as DuckDBDataProtocol,
  Tc as LogEvent,
  Nc as LogLevel,
  Fc as LogOrigin,
  Dc as LogTopic,
  Uc as PACKAGE_NAME,
  Vc as PACKAGE_VERSION,
  _d as PACKAGE_VERSION_MAJOR,
  vd as PACKAGE_VERSION_MINOR,
  bd as PACKAGE_VERSION_PATCH,
  Mc as StatusCode,
  Bc as TokenType,
  sd as VoidLogger,
  Pc as WorkerRequestType,
  xc as WorkerResponseType,
  Y as WorkerTask,
  Hd as clearResults,
  Od as createWorker,
  qd as executeQuery,
  wd as getJsDelivrBundles,
  cd as getLogEventLabel,
  ad as getLogLevelLabel,
  ld as getLogOriginLabel,
  ud as getLogTopicLabel,
  qc as getPlatformFeatures,
  Sd as isFirefox,
  Xn as isNode,
  Id as isSafari,
  Dd as loadDuckDb,
  zd as selectBundle
};
//# sourceMappingURL=duckdb-browser-bundle.js.map
