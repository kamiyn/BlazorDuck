/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function On(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _t = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, zi = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Lt = () => {
}, sd = () => !1, Xs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), qr = (e) => e.startsWith("onUpdate:"), At = Object.assign, qa = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, sy = Object.prototype.hasOwnProperty, rt = (e, t) => sy.call(e, t), j = Array.isArray, li = (e) => wo(e) === "[object Map]", rd = (e) => wo(e) === "[object Set]", Y = (e) => typeof e == "function", It = (e) => typeof e == "string", ti = (e) => typeof e == "symbol", mt = (e) => e !== null && typeof e == "object", Ja = (e) => (mt(e) || Y(e)) && Y(e.then) && Y(e.catch), od = Object.prototype.toString, wo = (e) => od.call(e), Qa = (e) => wo(e).slice(8, -1), ad = (e) => wo(e) === "[object Object]", Za = (e) => It(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ts = /* @__PURE__ */ On(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ry = /* @__PURE__ */ On(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Io = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, oy = /-\w/g, Be = Io(
  (e) => e.replace(oy, (t) => t.slice(1).toUpperCase())
), ay = /\B([A-Z])/g, Hn = Io(
  (e) => e.replace(ay, "-$1").toLowerCase()
), So = Io((e) => e.charAt(0).toUpperCase() + e.slice(1)), ri = Io(
  (e) => e ? `on${So(e)}` : ""
), ui = (e, t) => !Object.is(e, t), ps = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Jr = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, cy = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Yl;
const tr = () => Yl || (Yl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Xa(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = It(i) ? fy(i) : Xa(i);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (It(e) || mt(e))
    return e;
}
const ly = /;(?![^(]*\))/g, uy = /:([^]+)/, dy = /\/\*[^]*?\*\//g;
function fy(e) {
  const t = {};
  return e.replace(dy, "").split(ly).forEach((n) => {
    if (n) {
      const i = n.split(uy);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function tc(e) {
  let t = "";
  if (It(e))
    t = e;
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const i = tc(e[n]);
      i && (t += i + " ");
    }
  else if (mt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const hy = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", py = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", yy = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", gy = /* @__PURE__ */ On(hy), _y = /* @__PURE__ */ On(py), my = /* @__PURE__ */ On(yy), by = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vy = /* @__PURE__ */ On(by);
function cd(e) {
  return !!e || e === "";
}
const ld = (e) => !!(e && e.__v_isRef === !0), Tr = (e) => It(e) ? e : e == null ? "" : j(e) || mt(e) && (e.toString === od || !Y(e.toString)) ? ld(e) ? Tr(e.value) : JSON.stringify(e, ud, 2) : String(e), ud = (e, t) => ld(t) ? ud(e, t.value) : li(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, s], r) => (n[Jo(i, r) + " =>"] = s, n),
    {}
  )
} : rd(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Jo(n))
} : ti(t) ? Jo(t) : mt(t) && !j(t) && !ad(t) ? String(t) : t, Jo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ti(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Le(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ee;
class wy {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ee, !t && ee && (this.index = (ee.scopes || (ee.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ee;
      try {
        return ee = this, t();
      } finally {
        ee = n;
      }
    } else process.env.NODE_ENV !== "production" && Le("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ee, ee = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ee = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Iy() {
  return ee;
}
let pt;
const Qo = /* @__PURE__ */ new WeakSet();
class dd {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ee && ee.active && ee.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Qo.has(this) && (Qo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || hd(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Kl(this), pd(this);
    const t = pt, n = Fe;
    pt = this, Fe = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && pt !== this && Le(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), yd(this), pt = t, Fe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ic(t);
      this.deps = this.depsTail = void 0, Kl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Qo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    wa(this) && this.run();
  }
  get dirty() {
    return wa(this);
  }
}
let fd = 0, As, Bs;
function hd(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Bs, Bs = e;
    return;
  }
  e.next = As, As = e;
}
function ec() {
  fd++;
}
function nc() {
  if (--fd > 0)
    return;
  if (Bs) {
    let t = Bs;
    for (Bs = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; As; ) {
    let t = As;
    for (As = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function pd(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function yd(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const s = i.prevDep;
    i.version === -1 ? (i === n && (n = s), ic(i), Sy(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = s;
  }
  e.deps = t, e.depsTail = n;
}
function wa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (gd(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function gd(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xs) || (e.globalVersion = xs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !wa(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = pt, i = Fe;
  pt = e, Fe = !0;
  try {
    pd(e);
    const s = e.fn(e._value);
    (t.version === 0 || ui(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    pt = n, Fe = i, yd(e), e.flags &= -3;
  }
}
function ic(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: s } = e;
  if (i && (i.nextSub = s, e.prevSub = void 0), s && (s.prevSub = i, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      ic(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Sy(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Fe = !0;
const _d = [];
function Me() {
  _d.push(Fe), Fe = !1;
}
function Ce() {
  const e = _d.pop();
  Fe = e === void 0 ? !0 : e;
}
function Kl(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = pt;
    pt = void 0;
    try {
      t();
    } finally {
      pt = n;
    }
  }
}
let xs = 0;
class Ey {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class md {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!pt || !Fe || pt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== pt)
      n = this.activeLink = new Ey(pt, this), pt.deps ? (n.prevDep = pt.depsTail, pt.depsTail.nextDep = n, pt.depsTail = n) : pt.deps = pt.depsTail = n, bd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = pt.depsTail, n.nextDep = void 0, pt.depsTail.nextDep = n, pt.depsTail = n, pt.deps === n && (pt.deps = i);
    }
    return process.env.NODE_ENV !== "production" && pt.onTrack && pt.onTrack(
      At(
        {
          effect: pt
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, xs++, this.notify(t);
  }
  notify(t) {
    ec();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            At(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      nc();
    }
  }
}
function bd(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        bd(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Ia = /* @__PURE__ */ new WeakMap(), di = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Sa = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Us = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Ft(e, t, n) {
  if (Fe && pt) {
    let i = Ia.get(e);
    i || Ia.set(e, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || (i.set(n, s = new md()), s.map = i, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function qe(e, t, n, i, s, r) {
  const o = Ia.get(e);
  if (!o) {
    xs++;
    return;
  }
  const a = (c) => {
    c && (process.env.NODE_ENV !== "production" ? c.trigger({
      target: e,
      type: t,
      key: n,
      newValue: i,
      oldValue: s,
      oldTarget: r
    }) : c.trigger());
  };
  if (ec(), t === "clear")
    o.forEach(a);
  else {
    const c = j(e), l = c && Za(n);
    if (c && n === "length") {
      const u = Number(i);
      o.forEach((d, y) => {
        (y === "length" || y === Us || !ti(y) && y >= u) && a(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), l && a(o.get(Us)), t) {
        case "add":
          c ? l && a(o.get("length")) : (a(o.get(di)), li(e) && a(o.get(Sa)));
          break;
        case "delete":
          c || (a(o.get(di)), li(e) && a(o.get(Sa)));
          break;
        case "set":
          li(e) && a(o.get(di));
          break;
      }
  }
  nc();
}
function Di(e) {
  const t = X(e);
  return t === e ? t : (Ft(t, "iterate", Us), ie(e) ? t : t.map(Kt));
}
function Eo(e) {
  return Ft(e = X(e), "iterate", Us), e;
}
const Oy = {
  __proto__: null,
  [Symbol.iterator]() {
    return Zo(this, Symbol.iterator, Kt);
  },
  concat(...e) {
    return Di(this).concat(
      ...e.map((t) => j(t) ? Di(t) : t)
    );
  },
  entries() {
    return Zo(this, "entries", (e) => (e[1] = Kt(e[1]), e));
  },
  every(e, t) {
    return dn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return dn(this, "filter", e, t, (n) => n.map(Kt), arguments);
  },
  find(e, t) {
    return dn(this, "find", e, t, Kt, arguments);
  },
  findIndex(e, t) {
    return dn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return dn(this, "findLast", e, t, Kt, arguments);
  },
  findLastIndex(e, t) {
    return dn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return dn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Xo(this, "includes", e);
  },
  indexOf(...e) {
    return Xo(this, "indexOf", e);
  },
  join(e) {
    return Di(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Xo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return dn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ys(this, "pop");
  },
  push(...e) {
    return ys(this, "push", e);
  },
  reduce(e, ...t) {
    return Gl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Gl(this, "reduceRight", e, t);
  },
  shift() {
    return ys(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return dn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ys(this, "splice", e);
  },
  toReversed() {
    return Di(this).toReversed();
  },
  toSorted(e) {
    return Di(this).toSorted(e);
  },
  toSpliced(...e) {
    return Di(this).toSpliced(...e);
  },
  unshift(...e) {
    return ys(this, "unshift", e);
  },
  values() {
    return Zo(this, "values", Kt);
  }
};
function Zo(e, t, n) {
  const i = Eo(e), s = i[t]();
  return i !== e && !ie(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.done || (r.value = n(r.value)), r;
  }), s;
}
const Ny = Array.prototype;
function dn(e, t, n, i, s, r) {
  const o = Eo(e), a = o !== e && !ie(e), c = o[t];
  if (c !== Ny[t]) {
    const d = c.apply(e, r);
    return a ? Kt(d) : d;
  }
  let l = n;
  o !== e && (a ? l = function(d, y) {
    return n.call(this, Kt(d), y, e);
  } : n.length > 2 && (l = function(d, y) {
    return n.call(this, d, y, e);
  }));
  const u = c.call(o, l, i);
  return a && s ? s(u) : u;
}
function Gl(e, t, n, i) {
  const s = Eo(e);
  let r = n;
  return s !== e && (ie(e) ? n.length > 3 && (r = function(o, a, c) {
    return n.call(this, o, a, c, e);
  }) : r = function(o, a, c) {
    return n.call(this, o, Kt(a), c, e);
  }), s[t](r, ...i);
}
function Xo(e, t, n) {
  const i = X(e);
  Ft(i, "iterate", Us);
  const s = i[t](...n);
  return (s === -1 || s === !1) && Qr(n[0]) ? (n[0] = X(n[0]), i[t](...n)) : s;
}
function ys(e, t, n = []) {
  Me(), ec();
  const i = X(e)[t].apply(e, n);
  return nc(), Ce(), i;
}
const Dy = /* @__PURE__ */ On("__proto__,__v_isRef,__isVue"), vd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ti)
);
function Ty(e) {
  ti(e) || (e = String(e));
  const t = X(this);
  return Ft(t, "has", e), t.hasOwnProperty(e);
}
class wd {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return i === (s ? r ? Dd : Nd : r ? Od : Ed).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = j(t);
    if (!s) {
      let c;
      if (o && (c = Oy[n]))
        return c;
      if (n === "hasOwnProperty")
        return Ty;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Mt(t) ? t : i
    );
    if ((ti(n) ? vd.has(n) : Dy(n)) || (s || Ft(t, "get", n), r))
      return a;
    if (Mt(a)) {
      const c = o && Za(n) ? a : a.value;
      return s && mt(c) ? Oa(c) : c;
    }
    return mt(a) ? s ? Oa(a) : No(a) : a;
  }
}
class Id extends wd {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, s) {
    let r = t[n];
    if (!this._isShallow) {
      const c = vn(r);
      if (!ie(i) && !vn(i) && (r = X(r), i = X(i)), !j(t) && Mt(r) && !Mt(i))
        return c ? (process.env.NODE_ENV !== "production" && Le(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = i, !0);
    }
    const o = j(t) && Za(n) ? Number(n) < t.length : rt(t, n), a = Reflect.set(
      t,
      n,
      i,
      Mt(t) ? t : s
    );
    return t === X(s) && (o ? ui(i, r) && qe(t, "set", n, i, r) : qe(t, "add", n, i)), a;
  }
  deleteProperty(t, n) {
    const i = rt(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && i && qe(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!ti(n) || !vd.has(n)) && Ft(t, "has", n), i;
  }
  ownKeys(t) {
    return Ft(
      t,
      "iterate",
      j(t) ? "length" : di
    ), Reflect.ownKeys(t);
  }
}
class Sd extends wd {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Le(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Le(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ay = /* @__PURE__ */ new Id(), By = /* @__PURE__ */ new Sd(), Fy = /* @__PURE__ */ new Id(!0), Ry = /* @__PURE__ */ new Sd(!0), Ea = (e) => e, Ir = (e) => Reflect.getPrototypeOf(e);
function Ly(e, t, n) {
  return function(...i) {
    const s = this.__v_raw, r = X(s), o = li(r), a = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = s[e](...i), u = n ? Ea : t ? Zr : Kt;
    return !t && Ft(
      r,
      "iterate",
      c ? Sa : di
    ), {
      // iterator protocol
      next() {
        const { value: d, done: y } = l.next();
        return y ? { value: d, done: y } : {
          value: a ? [u(d[0]), u(d[1])] : u(d),
          done: y
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Sr(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Le(
        `${So(e)} operation ${n}failed: target is readonly.`,
        X(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function My(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, o = X(r), a = X(s);
      e || (ui(s, a) && Ft(o, "get", s), Ft(o, "get", a));
      const { has: c } = Ir(o), l = t ? Ea : e ? Zr : Kt;
      if (c.call(o, s))
        return l(r.get(s));
      if (c.call(o, a))
        return l(r.get(a));
      r !== o && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Ft(X(s), "iterate", di), s.size;
    },
    has(s) {
      const r = this.__v_raw, o = X(r), a = X(s);
      return e || (ui(s, a) && Ft(o, "has", s), Ft(o, "has", a)), s === a ? r.has(s) : r.has(s) || r.has(a);
    },
    forEach(s, r) {
      const o = this, a = o.__v_raw, c = X(a), l = t ? Ea : e ? Zr : Kt;
      return !e && Ft(c, "iterate", di), a.forEach((u, d) => s.call(r, l(u), l(d), o));
    }
  };
  return At(
    n,
    e ? {
      add: Sr("add"),
      set: Sr("set"),
      delete: Sr("delete"),
      clear: Sr("clear")
    } : {
      add(s) {
        !t && !ie(s) && !vn(s) && (s = X(s));
        const r = X(this);
        return Ir(r).has.call(r, s) || (r.add(s), qe(r, "add", s, s)), this;
      },
      set(s, r) {
        !t && !ie(r) && !vn(r) && (r = X(r));
        const o = X(this), { has: a, get: c } = Ir(o);
        let l = a.call(o, s);
        l ? process.env.NODE_ENV !== "production" && ql(o, a, s) : (s = X(s), l = a.call(o, s));
        const u = c.call(o, s);
        return o.set(s, r), l ? ui(r, u) && qe(o, "set", s, r, u) : qe(o, "add", s, r), this;
      },
      delete(s) {
        const r = X(this), { has: o, get: a } = Ir(r);
        let c = o.call(r, s);
        c ? process.env.NODE_ENV !== "production" && ql(r, o, s) : (s = X(s), c = o.call(r, s));
        const l = a ? a.call(r, s) : void 0, u = r.delete(s);
        return c && qe(r, "delete", s, void 0, l), u;
      },
      clear() {
        const s = X(this), r = s.size !== 0, o = process.env.NODE_ENV !== "production" ? li(s) ? new Map(s) : new Set(s) : void 0, a = s.clear();
        return r && qe(
          s,
          "clear",
          void 0,
          void 0,
          o
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = Ly(s, e, t);
  }), n;
}
function Oo(e, t) {
  const n = My(e, t);
  return (i, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(
    rt(n, s) && s in i ? n : i,
    s,
    r
  );
}
const Cy = {
  get: /* @__PURE__ */ Oo(!1, !1)
}, xy = {
  get: /* @__PURE__ */ Oo(!1, !0)
}, Uy = {
  get: /* @__PURE__ */ Oo(!0, !1)
}, Vy = {
  get: /* @__PURE__ */ Oo(!0, !0)
};
function ql(e, t, n) {
  const i = X(n);
  if (i !== n && t.call(e, i)) {
    const s = Qa(e);
    Le(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ed = /* @__PURE__ */ new WeakMap(), Od = /* @__PURE__ */ new WeakMap(), Nd = /* @__PURE__ */ new WeakMap(), Dd = /* @__PURE__ */ new WeakMap();
function Py(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ky(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Py(Qa(e));
}
function No(e) {
  return vn(e) ? e : Do(
    e,
    !1,
    Ay,
    Cy,
    Ed
  );
}
function jy(e) {
  return Do(
    e,
    !1,
    Fy,
    xy,
    Od
  );
}
function Oa(e) {
  return Do(
    e,
    !0,
    By,
    Uy,
    Nd
  );
}
function Xe(e) {
  return Do(
    e,
    !0,
    Ry,
    Vy,
    Dd
  );
}
function Do(e, t, n, i, s) {
  if (!mt(e))
    return process.env.NODE_ENV !== "production" && Le(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = ky(e);
  if (r === 0)
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const a = new Proxy(
    e,
    r === 2 ? i : n
  );
  return s.set(e, a), a;
}
function fi(e) {
  return vn(e) ? fi(e.__v_raw) : !!(e && e.__v_isReactive);
}
function vn(e) {
  return !!(e && e.__v_isReadonly);
}
function ie(e) {
  return !!(e && e.__v_isShallow);
}
function Qr(e) {
  return e ? !!e.__v_raw : !1;
}
function X(e) {
  const t = e && e.__v_raw;
  return t ? X(t) : e;
}
function $y(e) {
  return !rt(e, "__v_skip") && Object.isExtensible(e) && Jr(e, "__v_skip", !0), e;
}
const Kt = (e) => mt(e) ? No(e) : e, Zr = (e) => mt(e) ? Oa(e) : e;
function Mt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function xn(e) {
  return Mt(e) ? e.value : e;
}
const zy = {
  get: (e, t, n) => t === "__v_raw" ? e : xn(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return Mt(s) && !Mt(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Td(e) {
  return fi(e) ? e : new Proxy(e, zy);
}
class Wy {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new md(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    pt !== this)
      return hd(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return gd(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Le("Write operation failed: computed value is readonly");
  }
}
function Hy(e, t, n = !1) {
  let i, s;
  Y(e) ? i = e : (i = e.get, s = e.set);
  const r = new Wy(i, s, n);
  return process.env.NODE_ENV, r;
}
const Er = {}, Xr = /* @__PURE__ */ new WeakMap();
let oi;
function Yy(e, t = !1, n = oi) {
  if (n) {
    let i = Xr.get(n);
    i || Xr.set(n, i = []), i.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Le(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ky(e, t, n = _t) {
  const { immediate: i, deep: s, once: r, scheduler: o, augmentJob: a, call: c } = n, l = (M) => {
    (n.onWarn || Le)(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (M) => s ? M : ie(M) || s === !1 || s === 0 ? zn(M, 1) : zn(M);
  let d, y, _, D, B = !1, Et = !1;
  if (Mt(e) ? (y = () => e.value, B = ie(e)) : fi(e) ? (y = () => u(e), B = !0) : j(e) ? (Et = !0, B = e.some((M) => fi(M) || ie(M)), y = () => e.map((M) => {
    if (Mt(M))
      return M.value;
    if (fi(M))
      return u(M);
    if (Y(M))
      return c ? c(M, 2) : M();
    process.env.NODE_ENV !== "production" && l(M);
  })) : Y(e) ? t ? y = c ? () => c(e, 2) : e : y = () => {
    if (_) {
      Me();
      try {
        _();
      } finally {
        Ce();
      }
    }
    const M = oi;
    oi = d;
    try {
      return c ? c(e, 3, [D]) : e(D);
    } finally {
      oi = M;
    }
  } : (y = Lt, process.env.NODE_ENV !== "production" && l(e)), t && s) {
    const M = y, Ct = s === !0 ? 1 / 0 : s;
    y = () => zn(M(), Ct);
  }
  const ot = Iy(), at = () => {
    d.stop(), ot && ot.active && qa(ot.effects, d);
  };
  if (r && t) {
    const M = t;
    t = (...Ct) => {
      M(...Ct), at();
    };
  }
  let dt = Et ? new Array(e.length).fill(Er) : Er;
  const ae = (M) => {
    if (!(!(d.flags & 1) || !d.dirty && !M))
      if (t) {
        const Ct = d.run();
        if (s || B || (Et ? Ct.some((_e, kt) => ui(_e, dt[kt])) : ui(Ct, dt))) {
          _ && _();
          const _e = oi;
          oi = d;
          try {
            const kt = [
              Ct,
              // pass undefined as the old value when it's changed for the first time
              dt === Er ? void 0 : Et && dt[0] === Er ? [] : dt,
              D
            ];
            dt = Ct, c ? c(t, 3, kt) : (
              // @ts-expect-error
              t(...kt)
            );
          } finally {
            oi = _e;
          }
        }
      } else
        d.run();
  };
  return a && a(ae), d = new dd(y), d.scheduler = o ? () => o(ae, !1) : ae, D = (M) => Yy(M, !1, d), _ = d.onStop = () => {
    const M = Xr.get(d);
    if (M) {
      if (c)
        c(M, 4);
      else
        for (const Ct of M) Ct();
      Xr.delete(d);
    }
  }, process.env.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? i ? ae(!0) : dt = d.run() : o ? o(ae.bind(null, !0), !0) : d.run(), at.pause = d.pause.bind(d), at.resume = d.resume.bind(d), at.stop = at, at;
}
function zn(e, t = 1 / 0, n) {
  if (t <= 0 || !mt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, Mt(e))
    zn(e.value, t, n);
  else if (j(e))
    for (let i = 0; i < e.length; i++)
      zn(e[i], t, n);
  else if (rd(e) || li(e))
    e.forEach((i) => {
      zn(i, t, n);
    });
  else if (ad(e)) {
    for (const i in e)
      zn(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && zn(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const hi = [];
function Ar(e) {
  hi.push(e);
}
function Br() {
  hi.pop();
}
let ta = !1;
function E(e, ...t) {
  if (ta) return;
  ta = !0, Me();
  const n = hi.length ? hi[hi.length - 1].component : null, i = n && n.appContext.config.warnHandler, s = Gy();
  if (i)
    as(
      i,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var o, a;
          return (a = (o = r.toString) == null ? void 0 : o.call(r)) != null ? a : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Ro(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...qy(s)), console.warn(...r);
  }
  Ce(), ta = !1;
}
function Gy() {
  let e = hi[hi.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const i = e.component && e.component.parent;
    e = i && i.vnode;
  }
  return t;
}
function qy(e) {
  const t = [];
  return e.forEach((n, i) => {
    t.push(...i === 0 ? [] : [`
`], ...Jy(n));
  }), t;
}
function Jy({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", i = e.component ? e.component.parent == null : !1, s = ` at <${Ro(
    e.component,
    e.type,
    i
  )}`, r = ">" + n;
  return e.props ? [s, ...Qy(e.props), r] : [s + r];
}
function Qy(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((i) => {
    t.push(...Ad(i, e[i]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ad(e, t, n) {
  return It(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Mt(t) ? (t = Ad(e, X(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Y(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = X(t), n ? t : [`${e}=`, t]);
}
const sc = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function as(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    er(s, t, n);
  }
}
function nn(e, t, n, i) {
  if (Y(e)) {
    const s = as(e, t, n, i);
    return s && Ja(s) && s.catch((r) => {
      er(r, t, n);
    }), s;
  }
  if (j(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(nn(e[r], t, n, i));
    return s;
  } else process.env.NODE_ENV !== "production" && E(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function er(e, t, n, i = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || _t;
  if (t) {
    let a = t.parent;
    const c = t.proxy, l = process.env.NODE_ENV !== "production" ? sc[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, c, l) === !1)
            return;
      }
      a = a.parent;
    }
    if (r) {
      Me(), as(r, null, 10, [
        e,
        c,
        l
      ]), Ce();
      return;
    }
  }
  Zy(e, n, s, i, o);
}
function Zy(e, t, n, i = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = sc[t];
    if (n && Ar(n), E(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Br(), i)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const Gt = [];
let Ye = -1;
const Wi = [];
let Vn = null, Fi = 0;
const Bd = /* @__PURE__ */ Promise.resolve();
let to = null;
const Xy = 100;
function tg(e) {
  const t = to || Bd;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function eg(e) {
  let t = Ye + 1, n = Gt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, s = Gt[i], r = Vs(s);
    r < e || r === e && s.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function To(e) {
  if (!(e.flags & 1)) {
    const t = Vs(e), n = Gt[Gt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Vs(n) ? Gt.push(e) : Gt.splice(eg(t), 0, e), e.flags |= 1, Fd();
  }
}
function Fd() {
  to || (to = Bd.then(Md));
}
function Rd(e) {
  j(e) ? Wi.push(...e) : Vn && e.id === -1 ? Vn.splice(Fi + 1, 0, e) : e.flags & 1 || (Wi.push(e), e.flags |= 1), Fd();
}
function Jl(e, t, n = Ye + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Gt.length; n++) {
    const i = Gt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid || process.env.NODE_ENV !== "production" && rc(t, i))
        continue;
      Gt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Ld(e) {
  if (Wi.length) {
    const t = [...new Set(Wi)].sort(
      (n, i) => Vs(n) - Vs(i)
    );
    if (Wi.length = 0, Vn) {
      Vn.push(...t);
      return;
    }
    for (Vn = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Fi = 0; Fi < Vn.length; Fi++) {
      const n = Vn[Fi];
      process.env.NODE_ENV !== "production" && rc(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Vn = null, Fi = 0;
  }
}
const Vs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Md(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => rc(e, n) : Lt;
  try {
    for (Ye = 0; Ye < Gt.length; Ye++) {
      const n = Gt[Ye];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), as(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Ye < Gt.length; Ye++) {
      const n = Gt[Ye];
      n && (n.flags &= -2);
    }
    Ye = -1, Gt.length = 0, Ld(e), to = null, (Gt.length || Wi.length) && Md(e);
  }
}
function rc(e, t) {
  const n = e.get(t) || 0;
  if (n > Xy) {
    const i = t.i, s = i && yf(i.type);
    return er(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let tn = !1;
const Fr = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (tr().__VUE_HMR_RUNTIME__ = {
  createRecord: ea(Cd),
  rerender: ea(sg),
  reload: ea(rg)
});
const yi = /* @__PURE__ */ new Map();
function ng(e) {
  const t = e.type.__hmrId;
  let n = yi.get(t);
  n || (Cd(t, e.type), n = yi.get(t)), n.instances.add(e);
}
function ig(e) {
  yi.get(e.type.__hmrId).instances.delete(e);
}
function Cd(e, t) {
  return yi.has(e) ? !1 : (yi.set(e, {
    initialDef: eo(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function eo(e) {
  return gf(e) ? e.__vccOpts : e;
}
function sg(e, t) {
  const n = yi.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((i) => {
    t && (i.render = t, eo(i.type).render = t), i.renderCache = [], tn = !0, i.job.flags & 8 || i.update(), tn = !1;
  }));
}
function rg(e, t) {
  const n = yi.get(e);
  if (!n) return;
  t = eo(t), Ql(n.initialDef, t);
  const i = [...n.instances];
  for (let s = 0; s < i.length; s++) {
    const r = i[s], o = eo(r.type);
    let a = Fr.get(o);
    a || (o !== n.initialDef && Ql(o, t), Fr.set(o, a = /* @__PURE__ */ new Set())), a.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (a.add(r), r.ceReload(t.styles), a.delete(r)) : r.parent ? To(() => {
      r.job.flags & 8 || (tn = !0, r.parent.update(), tn = !1, a.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(o);
  }
  Rd(() => {
    Fr.clear();
  });
}
function Ql(e, t) {
  At(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ea(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (i) {
      console.error(i), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Te, ms = [], Na = !1;
function nr(e, ...t) {
  Te ? Te.emit(e, ...t) : Na || ms.push({ event: e, args: t });
}
function oc(e, t) {
  var n, i;
  Te = e, Te ? (Te.enabled = !0, ms.forEach(({ event: s, args: r }) => Te.emit(s, ...r)), ms = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((i = (n = window.navigator) == null ? void 0 : n.userAgent) != null && i.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    oc(r, t);
  }), setTimeout(() => {
    Te || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Na = !0, ms = []);
  }, 3e3)) : (Na = !0, ms = []);
}
function og(e, t) {
  nr("app:init", e, t, {
    Fragment: de,
    Text: ir,
    Comment: ye,
    Static: Mr
  });
}
function ag(e) {
  nr("app:unmount", e);
}
const cg = /* @__PURE__ */ ac(
  "component:added"
  /* COMPONENT_ADDED */
), xd = /* @__PURE__ */ ac(
  "component:updated"
  /* COMPONENT_UPDATED */
), lg = /* @__PURE__ */ ac(
  "component:removed"
  /* COMPONENT_REMOVED */
), ug = (e) => {
  Te && typeof Te.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Te.cleanupBuffer(e) && lg(e);
};
// @__NO_SIDE_EFFECTS__
function ac(e) {
  return (t) => {
    nr(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const dg = /* @__PURE__ */ Ud(
  "perf:start"
  /* PERFORMANCE_START */
), fg = /* @__PURE__ */ Ud(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ud(e) {
  return (t, n, i) => {
    nr(e, t.appContext.app, t.uid, t, n, i);
  };
}
function hg(e, t, n) {
  nr(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let he = null, Vd = null;
function no(e) {
  const t = he;
  return he = e, Vd = e && e.type.__scopeId || null, t;
}
function pg(e, t = he, n) {
  if (!t || e._n)
    return e;
  const i = (...s) => {
    i._d && du(-1);
    const r = no(t);
    let o;
    try {
      o = e(...s);
    } finally {
      no(r), i._d && du(1);
    }
    return process.env.NODE_ENV !== "production" && xd(t), o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Pd(e) {
  ry(e) && E("Do not use built-in directive ids as custom directive id: " + e);
}
function ni(e, t, n, i) {
  const s = e.dirs, r = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    r && (a.oldValue = r[o].value);
    let c = a.dir[i];
    c && (Me(), nn(c, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Ce());
  }
}
const yg = Symbol("_vte"), gg = (e) => e.__isTeleport, _g = Symbol("_leaveCb");
function cc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, cc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function mg(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    At({ name: e.name }, t, { setup: e })
  ) : e;
}
function kd(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Zl = /* @__PURE__ */ new WeakSet(), io = /* @__PURE__ */ new WeakMap();
function Fs(e, t, n, i, s = !1) {
  if (j(e)) {
    e.forEach(
      (B, Et) => Fs(
        B,
        t && (j(t) ? t[Et] : t),
        n,
        i,
        s
      )
    );
    return;
  }
  if (Rs(i) && !s) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Fs(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? yc(i.component) : i.el, o = s ? null : r, { i: a, r: c } = e;
  if (process.env.NODE_ENV !== "production" && !a) {
    E(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const l = t && t.r, u = a.refs === _t ? a.refs = {} : a.refs, d = a.setupState, y = X(d), _ = d === _t ? sd : (B) => process.env.NODE_ENV !== "production" && (rt(y, B) && !Mt(y[B]) && E(
    `Template ref "${B}" used on a non-ref value. It will not work in the production build.`
  ), Zl.has(y[B])) ? !1 : rt(y, B), D = (B) => process.env.NODE_ENV === "production" || !Zl.has(B);
  if (l != null && l !== c) {
    if (Xl(t), It(l))
      u[l] = null, _(l) && (d[l] = null);
    else if (Mt(l)) {
      D(l) && (l.value = null);
      const B = t;
      B.k && (u[B.k] = null);
    }
  }
  if (Y(c))
    as(c, a, 12, [o, u]);
  else {
    const B = It(c), Et = Mt(c);
    if (B || Et) {
      const ot = () => {
        if (e.f) {
          const at = B ? _(c) ? d[c] : u[c] : D(c) || !e.k ? c.value : u[e.k];
          if (s)
            j(at) && qa(at, r);
          else if (j(at))
            at.includes(r) || at.push(r);
          else if (B)
            u[c] = [r], _(c) && (d[c] = u[c]);
          else {
            const dt = [r];
            D(c) && (c.value = dt), e.k && (u[e.k] = dt);
          }
        } else B ? (u[c] = o, _(c) && (d[c] = o)) : Et ? (D(c) && (c.value = o), e.k && (u[e.k] = o)) : process.env.NODE_ENV !== "production" && E("Invalid template ref type:", c, `(${typeof c})`);
      };
      if (o) {
        const at = () => {
          ot(), io.delete(e);
        };
        at.id = -1, io.set(e, at), ce(at, n);
      } else
        Xl(e), ot();
    } else process.env.NODE_ENV !== "production" && E("Invalid template ref type:", c, `(${typeof c})`);
  }
}
function Xl(e) {
  const t = io.get(e);
  t && (t.flags |= 8, io.delete(e));
}
tr().requestIdleCallback;
tr().cancelIdleCallback;
const Rs = (e) => !!e.type.__asyncLoader, lc = (e) => e.type.__isKeepAlive;
function bg(e, t) {
  jd(e, "a", t);
}
function vg(e, t) {
  jd(e, "da", t);
}
function jd(e, t, n = Vt) {
  const i = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Ao(t, i, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      lc(s.parent.vnode) && wg(i, t, n, s), s = s.parent;
  }
}
function wg(e, t, n, i) {
  const s = Ao(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  $d(() => {
    qa(i[t], s);
  }, n);
}
function Ao(e, t, n = Vt, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Me();
      const a = sr(n), c = nn(t, n, e, o);
      return a(), Ce(), c;
    });
    return i ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = ri(sc[e].replace(/ hook$/, ""));
    E(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Nn = (e) => (t, n = Vt) => {
  (!ks || e === "sp") && Ao(e, (...i) => t(...i), n);
}, Ig = Nn("bm"), Sg = Nn("m"), Eg = Nn(
  "bu"
), Og = Nn("u"), Ng = Nn(
  "bum"
), $d = Nn("um"), Dg = Nn(
  "sp"
), Tg = Nn("rtg"), Ag = Nn("rtc");
function Bg(e, t = Vt) {
  Ao("ec", e, t);
}
const Fg = Symbol.for("v-ndc");
function na(e, t, n, i) {
  let s;
  const r = n, o = j(e);
  if (o || It(e)) {
    const a = o && fi(e);
    let c = !1, l = !1;
    a && (c = !ie(e), l = vn(e), e = Eo(e)), s = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      s[u] = t(
        c ? l ? Zr(Kt(e[u])) : Kt(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && E(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, r);
  } else if (mt(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (a, c) => t(a, c, void 0, r)
      );
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let c = 0, l = a.length; c < l; c++) {
        const u = a[c];
        s[c] = t(e[u], u, c, r);
      }
    }
  else
    s = [];
  return s;
}
const Da = (e) => e ? hf(e) ? yc(e) : Da(e.parent) : null, pi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ At(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Xe(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Xe(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Xe(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Xe(e.refs) : e.refs,
    $parent: (e) => Da(e.parent),
    $root: (e) => Da(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Hd(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      To(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = tg.bind(e.proxy)),
    $watch: (e) => u_.bind(e)
  })
), uc = (e) => e === "_" || e === "$", ia = (e, t) => e !== _t && !e.__isScriptSetup && rt(e, t), zd = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: s, props: r, accessCache: o, type: a, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let l;
    if (t[0] !== "$") {
      const _ = o[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return i[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (ia(i, t))
          return o[t] = 1, i[t];
        if (s !== _t && rt(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (l = e.propsOptions[0]) && rt(l, t)
        )
          return o[t] = 3, r[t];
        if (n !== _t && rt(n, t))
          return o[t] = 4, n[t];
        Ta && (o[t] = 0);
      }
    }
    const u = pi[t];
    let d, y;
    if (u)
      return t === "$attrs" ? (Ft(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && oo()) : process.env.NODE_ENV !== "production" && t === "$slots" && Ft(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== _t && rt(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      y = c.config.globalProperties, rt(y, t)
    )
      return y[t];
    process.env.NODE_ENV !== "production" && he && (!It(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== _t && uc(t[0]) && rt(s, t) ? E(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === he && E(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: s, ctx: r } = e;
    return ia(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && rt(s, t) ? (E(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : i !== _t && rt(i, t) ? (i[t] = n, !0) : rt(e.props, t) ? (process.env.NODE_ENV !== "production" && E(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && E(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, propsOptions: r, type: o }
  }, a) {
    let c, l;
    return !!(n[a] || e !== _t && a[0] !== "$" && rt(e, a) || ia(t, a) || (c = r[0]) && rt(c, a) || rt(i, a) || rt(pi, a) || rt(s.config.globalProperties, a) || (l = o.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : rt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (zd.ownKeys = (e) => (E(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Rg(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(pi).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => pi[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Lt
    });
  }), t;
}
function Lg(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((i) => {
    Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i],
      set: Lt
    });
  });
}
function Mg(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(X(n)).forEach((i) => {
    if (!n.__isScriptSetup) {
      if (uc(i[0])) {
        E(
          `setup() return property ${JSON.stringify(
            i
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, i, {
        enumerable: !0,
        configurable: !0,
        get: () => n[i],
        set: Lt
      });
    }
  });
}
function tu(e) {
  return j(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Cg() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? E(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ta = !0;
function xg(e) {
  const t = Hd(e), n = e.proxy, i = e.ctx;
  Ta = !1, t.beforeCreate && eu(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: o,
    watch: a,
    provide: c,
    inject: l,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: y,
    beforeUpdate: _,
    updated: D,
    activated: B,
    deactivated: Et,
    beforeDestroy: ot,
    beforeUnmount: at,
    destroyed: dt,
    unmounted: ae,
    render: M,
    renderTracked: Ct,
    renderTriggered: _e,
    errorCaptured: kt,
    serverPrefetch: Qt,
    // public API
    expose: un,
    inheritAttrs: Fn,
    // assets
    components: Ie,
    directives: vr,
    filters: jl
  } = t, Rn = process.env.NODE_ENV !== "production" ? Cg() : null;
  if (process.env.NODE_ENV !== "production") {
    const [nt] = e.propsOptions;
    if (nt)
      for (const et in nt)
        Rn("Props", et);
  }
  if (l && Ug(l, i, Rn), o)
    for (const nt in o) {
      const et = o[nt];
      Y(et) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(i, nt, {
        value: et.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : i[nt] = et.bind(n), process.env.NODE_ENV !== "production" && Rn("Methods", nt)) : process.env.NODE_ENV !== "production" && E(
        `Method "${nt}" has type "${typeof et}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !Y(s) && E(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const nt = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && Ja(nt) && E(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !mt(nt))
      process.env.NODE_ENV !== "production" && E("data() should return an object.");
    else if (e.data = No(nt), process.env.NODE_ENV !== "production")
      for (const et in nt)
        Rn("Data", et), uc(et[0]) || Object.defineProperty(i, et, {
          configurable: !0,
          enumerable: !0,
          get: () => nt[et],
          set: Lt
        });
  }
  if (Ta = !0, r)
    for (const nt in r) {
      const et = r[nt], Pe = Y(et) ? et.bind(n, n) : Y(et.get) ? et.get.bind(n, n) : Lt;
      process.env.NODE_ENV !== "production" && Pe === Lt && E(`Computed property "${nt}" has no getter.`);
      const Ko = !Y(et) && Y(et.set) ? et.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        E(
          `Write operation failed: computed property "${nt}" is readonly.`
        );
      } : Lt, us = U_({
        get: Pe,
        set: Ko
      });
      Object.defineProperty(i, nt, {
        enumerable: !0,
        configurable: !0,
        get: () => us.value,
        set: (Ni) => us.value = Ni
      }), process.env.NODE_ENV !== "production" && Rn("Computed", nt);
    }
  if (a)
    for (const nt in a)
      Wd(a[nt], i, n, nt);
  if (c) {
    const nt = Y(c) ? c.call(n) : c;
    Reflect.ownKeys(nt).forEach((et) => {
      zg(et, nt[et]);
    });
  }
  u && eu(u, e, "c");
  function Zt(nt, et) {
    j(et) ? et.forEach((Pe) => nt(Pe.bind(n))) : et && nt(et.bind(n));
  }
  if (Zt(Ig, d), Zt(Sg, y), Zt(Eg, _), Zt(Og, D), Zt(bg, B), Zt(vg, Et), Zt(Bg, kt), Zt(Ag, Ct), Zt(Tg, _e), Zt(Ng, at), Zt($d, ae), Zt(Dg, Qt), j(un))
    if (un.length) {
      const nt = e.exposed || (e.exposed = {});
      un.forEach((et) => {
        Object.defineProperty(nt, et, {
          get: () => n[et],
          set: (Pe) => n[et] = Pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === Lt && (e.render = M), Fn != null && (e.inheritAttrs = Fn), Ie && (e.components = Ie), vr && (e.directives = vr), Qt && kd(e);
}
function Ug(e, t, n = Lt) {
  j(e) && (e = Aa(e));
  for (const i in e) {
    const s = e[i];
    let r;
    mt(s) ? "default" in s ? r = Rr(
      s.from || i,
      s.default,
      !0
    ) : r = Rr(s.from || i) : r = Rr(s), Mt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r, process.env.NODE_ENV !== "production" && n("Inject", i);
  }
}
function eu(e, t, n) {
  nn(
    j(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Wd(e, t, n, i) {
  let s = i.includes(".") ? sf(n, i) : () => n[i];
  if (It(e)) {
    const r = t[e];
    Y(r) ? ra(s, r) : process.env.NODE_ENV !== "production" && E(`Invalid watch handler specified by key "${e}"`, r);
  } else if (Y(e))
    ra(s, e.bind(n));
  else if (mt(e))
    if (j(e))
      e.forEach((r) => Wd(r, t, n, i));
    else {
      const r = Y(e.handler) ? e.handler.bind(n) : t[e.handler];
      Y(r) ? ra(s, r, e) : process.env.NODE_ENV !== "production" && E(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && E(`Invalid watch option: "${i}"`, e);
}
function Hd(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, a = r.get(t);
  let c;
  return a ? c = a : !s.length && !n && !i ? c = t : (c = {}, s.length && s.forEach(
    (l) => so(c, l, o, !0)
  ), so(c, t, o)), mt(t) && r.set(t, c), c;
}
function so(e, t, n, i = !1) {
  const { mixins: s, extends: r } = t;
  r && so(e, r, n, !0), s && s.forEach(
    (o) => so(e, o, n, !0)
  );
  for (const o in t)
    if (i && o === "expose")
      process.env.NODE_ENV !== "production" && E(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Vg[o] || n && n[o];
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const Vg = {
  data: nu,
  props: iu,
  emits: iu,
  // objects
  methods: bs,
  computed: bs,
  // lifecycle
  beforeCreate: Ht,
  created: Ht,
  beforeMount: Ht,
  mounted: Ht,
  beforeUpdate: Ht,
  updated: Ht,
  beforeDestroy: Ht,
  beforeUnmount: Ht,
  destroyed: Ht,
  unmounted: Ht,
  activated: Ht,
  deactivated: Ht,
  errorCaptured: Ht,
  serverPrefetch: Ht,
  // assets
  components: bs,
  directives: bs,
  // watch
  watch: kg,
  // provide / inject
  provide: nu,
  inject: Pg
};
function nu(e, t) {
  return t ? e ? function() {
    return At(
      Y(e) ? e.call(this, this) : e,
      Y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Pg(e, t) {
  return bs(Aa(e), Aa(t));
}
function Aa(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ht(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function bs(e, t) {
  return e ? At(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function iu(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : At(
    /* @__PURE__ */ Object.create(null),
    tu(e),
    tu(t ?? {})
  ) : t;
}
function kg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = At(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Ht(e[i], t[i]);
  return n;
}
function Yd() {
  return {
    app: null,
    config: {
      isNativeTag: sd,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let jg = 0;
function $g(e, t) {
  return function(i, s = null) {
    Y(i) || (i = At({}, i)), s != null && !mt(s) && (process.env.NODE_ENV !== "production" && E("root props passed to app.mount() must be an object."), s = null);
    const r = Yd(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let c = !1;
    const l = r.app = {
      _uid: jg++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: yu,
      get config() {
        return r.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && E(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...d) {
        return o.has(u) ? process.env.NODE_ENV !== "production" && E("Plugin has already been applied to target app.") : u && Y(u.install) ? (o.add(u), u.install(l, ...d)) : Y(u) ? (o.add(u), u(l, ...d)) : process.env.NODE_ENV !== "production" && E(
          'A plugin must either be a function or an object with an "install" function.'
        ), l;
      },
      mixin(u) {
        return r.mixins.includes(u) ? process.env.NODE_ENV !== "production" && E(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), l;
      },
      component(u, d) {
        return process.env.NODE_ENV !== "production" && Ma(u, r.config), d ? (process.env.NODE_ENV !== "production" && r.components[u] && E(`Component "${u}" has already been registered in target app.`), r.components[u] = d, l) : r.components[u];
      },
      directive(u, d) {
        return process.env.NODE_ENV !== "production" && Pd(u), d ? (process.env.NODE_ENV !== "production" && r.directives[u] && E(`Directive "${u}" has already been registered in target app.`), r.directives[u] = d, l) : r.directives[u];
      },
      mount(u, d, y) {
        if (c)
          process.env.NODE_ENV !== "production" && E(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && E(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = l._ceVNode || mn(i, s);
          return _.appContext = r, y === !0 ? y = "svg" : y === !1 && (y = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const D = Yn(_);
            D.el = null, e(D, u, y);
          }), e(_, u, y), c = !0, l._container = u, u.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = _.component, og(l, yu)), yc(_.component);
        }
      },
      onUnmount(u) {
        process.env.NODE_ENV !== "production" && typeof u != "function" && E(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        c ? (nn(
          a,
          l._instance,
          16
        ), e(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, ag(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && E("Cannot unmount an app that is not mounted.");
      },
      provide(u, d) {
        return process.env.NODE_ENV !== "production" && u in r.provides && (rt(r.provides, u) ? E(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : E(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[u] = d, l;
      },
      runWithContext(u) {
        const d = Hi;
        Hi = l;
        try {
          return u();
        } finally {
          Hi = d;
        }
      }
    };
    return l;
  };
}
let Hi = null;
function zg(e, t) {
  if (!Vt)
    process.env.NODE_ENV !== "production" && E("provide() can only be used inside setup().");
  else {
    let n = Vt.provides;
    const i = Vt.parent && Vt.parent.provides;
    i === n && (n = Vt.provides = Object.create(i)), n[e] = t;
  }
}
function Rr(e, t, n = !1) {
  const i = ff();
  if (i || Hi) {
    let s = Hi ? Hi._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Y(t) ? t.call(i && i.proxy) : t;
    process.env.NODE_ENV !== "production" && E(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && E("inject() can only be used inside setup() or functional components.");
}
const Kd = {}, Gd = () => Object.create(Kd), qd = (e) => Object.getPrototypeOf(e) === Kd;
function Wg(e, t, n, i = !1) {
  const s = {}, r = Gd();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Jd(e, t, s, r);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  process.env.NODE_ENV !== "production" && Zd(t || {}, s, e), n ? e.props = i ? s : jy(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function Hg(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Yg(e, t, n, i) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, a = X(s), [c] = e.propsOptions;
  let l = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Hg(e)) && (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let y = u[d];
        if (Bo(e.emitsOptions, y))
          continue;
        const _ = t[y];
        if (c)
          if (rt(r, y))
            _ !== r[y] && (r[y] = _, l = !0);
          else {
            const D = Be(y);
            s[D] = Ba(
              c,
              a,
              D,
              _,
              e,
              !1
            );
          }
        else
          _ !== r[y] && (r[y] = _, l = !0);
      }
    }
  } else {
    Jd(e, t, s, r) && (l = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !rt(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Hn(d)) === d || !rt(t, u))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (s[d] = Ba(
        c,
        a,
        d,
        void 0,
        e,
        !0
      )) : delete s[d]);
    if (r !== a)
      for (const d in r)
        (!t || !rt(t, d)) && (delete r[d], l = !0);
  }
  l && qe(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Zd(t || {}, s, e);
}
function Jd(e, t, n, i) {
  const [s, r] = e.propsOptions;
  let o = !1, a;
  if (t)
    for (let c in t) {
      if (Ts(c))
        continue;
      const l = t[c];
      let u;
      s && rt(s, u = Be(c)) ? !r || !r.includes(u) ? n[u] = l : (a || (a = {}))[u] = l : Bo(e.emitsOptions, c) || (!(c in i) || l !== i[c]) && (i[c] = l, o = !0);
    }
  if (r) {
    const c = X(n), l = a || _t;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = Ba(
        s,
        c,
        d,
        l[d],
        e,
        !rt(l, d)
      );
    }
  }
  return o;
}
function Ba(e, t, n, i, s, r) {
  const o = e[n];
  if (o != null) {
    const a = rt(o, "default");
    if (a && i === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && Y(c)) {
        const { propsDefaults: l } = s;
        if (n in l)
          i = l[n];
        else {
          const u = sr(s);
          i = l[n] = c.call(
            null,
            t
          ), u();
        }
      } else
        i = c;
      s.ce && s.ce._setProp(n, i);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !a ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Hn(n)) && (i = !0));
  }
  return i;
}
const Kg = /* @__PURE__ */ new WeakMap();
function Qd(e, t, n = !1) {
  const i = n ? Kg : t.propsCache, s = i.get(e);
  if (s)
    return s;
  const r = e.props, o = {}, a = [];
  let c = !1;
  if (!Y(e)) {
    const u = (d) => {
      c = !0;
      const [y, _] = Qd(d, t, !0);
      At(o, y), _ && a.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return mt(e) && i.set(e, zi), zi;
  if (j(r))
    for (let u = 0; u < r.length; u++) {
      process.env.NODE_ENV !== "production" && !It(r[u]) && E("props must be strings when using array syntax.", r[u]);
      const d = Be(r[u]);
      su(d) && (o[d] = _t);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !mt(r) && E("invalid props options", r);
    for (const u in r) {
      const d = Be(u);
      if (su(d)) {
        const y = r[u], _ = o[d] = j(y) || Y(y) ? { type: y } : At({}, y), D = _.type;
        let B = !1, Et = !0;
        if (j(D))
          for (let ot = 0; ot < D.length; ++ot) {
            const at = D[ot], dt = Y(at) && at.name;
            if (dt === "Boolean") {
              B = !0;
              break;
            } else dt === "String" && (Et = !1);
          }
        else
          B = Y(D) && D.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = B, _[
          1
          /* shouldCastTrue */
        ] = Et, (B || rt(_, "default")) && a.push(d);
      }
    }
  }
  const l = [o, a];
  return mt(e) && i.set(e, l), l;
}
function su(e) {
  return e[0] !== "$" && !Ts(e) ? !0 : (process.env.NODE_ENV !== "production" && E(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Gg(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Zd(e, t, n) {
  const i = X(t), s = n.propsOptions[0], r = Object.keys(e).map((o) => Be(o));
  for (const o in s) {
    let a = s[o];
    a != null && qg(
      o,
      i[o],
      a,
      process.env.NODE_ENV !== "production" ? Xe(i) : i,
      !r.includes(o)
    );
  }
}
function qg(e, t, n, i, s) {
  const { type: r, required: o, validator: a, skipCheck: c } = n;
  if (o && s) {
    E('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !o)) {
    if (r != null && r !== !0 && !c) {
      let l = !1;
      const u = j(r) ? r : [r], d = [];
      for (let y = 0; y < u.length && !l; y++) {
        const { valid: _, expectedType: D } = Qg(t, u[y]);
        d.push(D || ""), l = _;
      }
      if (!l) {
        E(Zg(e, t, d));
        return;
      }
    }
    a && !a(t, i) && E('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Jg = /* @__PURE__ */ On(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Qg(e, t) {
  let n;
  const i = Gg(t);
  if (i === "null")
    n = e === null;
  else if (Jg(i)) {
    const s = typeof e;
    n = s === i.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else i === "Object" ? n = mt(e) : i === "Array" ? n = j(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: i
  };
}
function Zg(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let i = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(So).join(" | ")}`;
  const s = n[0], r = Qa(t), o = ru(t, s), a = ru(t, r);
  return n.length === 1 && ou(s) && !Xg(s, r) && (i += ` with value ${o}`), i += `, got ${r} `, ou(r) && (i += `with value ${a}.`), i;
}
function ru(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ou(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Xg(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const dc = (e) => e === "_" || e === "_ctx" || e === "$stable", fc = (e) => j(e) ? e.map(De) : [De(e)], t_ = (e, t, n) => {
  if (t._n)
    return t;
  const i = pg((...s) => (process.env.NODE_ENV !== "production" && Vt && !(n === null && he) && !(n && n.root !== Vt.root) && E(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), fc(t(...s))), n);
  return i._c = !1, i;
}, Xd = (e, t, n) => {
  const i = e._ctx;
  for (const s in e) {
    if (dc(s)) continue;
    const r = e[s];
    if (Y(r))
      t[s] = t_(s, r, i);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && E(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const o = fc(r);
      t[s] = () => o;
    }
  }
}, tf = (e, t) => {
  process.env.NODE_ENV !== "production" && !lc(e.vnode) && E(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = fc(t);
  e.slots.default = () => n;
}, Fa = (e, t, n) => {
  for (const i in t)
    (n || !dc(i)) && (e[i] = t[i]);
}, e_ = (e, t, n) => {
  const i = e.slots = Gd();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Fa(i, t, n), n && Jr(i, "_", s, !0)) : Xd(t, i);
  } else t && tf(e, t);
}, n_ = (e, t, n) => {
  const { vnode: i, slots: s } = e;
  let r = !0, o = _t;
  if (i.shapeFlag & 32) {
    const a = t._;
    a ? process.env.NODE_ENV !== "production" && tn ? (Fa(s, t, n), qe(e, "set", "$slots")) : n && a === 1 ? r = !1 : Fa(s, t, n) : (r = !t.$stable, Xd(t, s)), o = t;
  } else t && (tf(e, t), o = { default: 1 });
  if (r)
    for (const a in s)
      !dc(a) && o[a] == null && delete s[a];
};
let gs, yn;
function Ti(e, t) {
  e.appContext.config.performance && ro() && yn.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && dg(e, t, ro() ? yn.now() : Date.now());
}
function Ai(e, t) {
  if (e.appContext.config.performance && ro()) {
    const n = `vue-${t}-${e.uid}`, i = n + ":end", s = `<${Ro(e, e.type)}> ${t}`;
    yn.mark(i), yn.measure(s, n, i), yn.clearMeasures(s), yn.clearMarks(n), yn.clearMarks(i);
  }
  process.env.NODE_ENV !== "production" && fg(e, t, ro() ? yn.now() : Date.now());
}
function ro() {
  return gs !== void 0 || (typeof window < "u" && window.performance ? (gs = !0, yn = window.performance) : gs = !1), gs;
}
function i_() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ce = m_;
function s_(e) {
  return r_(e);
}
function r_(e, t) {
  i_();
  const n = tr();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && oc(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: i,
    remove: s,
    patchProp: r,
    createElement: o,
    createText: a,
    createComment: c,
    setText: l,
    setElementText: u,
    parentNode: d,
    nextSibling: y,
    setScopeId: _ = Lt,
    insertStaticContent: D
  } = e, B = (f, p, g, v = null, m = null, b = null, O = void 0, S = null, I = process.env.NODE_ENV !== "production" && tn ? !1 : !!p.dynamicChildren) => {
    if (f === p)
      return;
    f && !_s(f, p) && (v = wr(f), Ln(f, m, b, !0), f = null), p.patchFlag === -2 && (I = !1, p.dynamicChildren = null);
    const { type: w, ref: k, shapeFlag: N } = p;
    switch (w) {
      case ir:
        Et(f, p, g, v);
        break;
      case ye:
        ot(f, p, g, v);
        break;
      case Mr:
        f == null ? at(p, g, v, O) : process.env.NODE_ENV !== "production" && dt(f, p, g, O);
        break;
      case de:
        vr(
          f,
          p,
          g,
          v,
          m,
          b,
          O,
          S,
          I
        );
        break;
      default:
        N & 1 ? Ct(
          f,
          p,
          g,
          v,
          m,
          b,
          O,
          S,
          I
        ) : N & 6 ? jl(
          f,
          p,
          g,
          v,
          m,
          b,
          O,
          S,
          I
        ) : N & 64 || N & 128 ? w.process(
          f,
          p,
          g,
          v,
          m,
          b,
          O,
          S,
          I,
          fs
        ) : process.env.NODE_ENV !== "production" && E("Invalid VNode type:", w, `(${typeof w})`);
    }
    k != null && m ? Fs(k, f && f.ref, b, p || f, !p) : k == null && f && f.ref != null && Fs(f.ref, null, b, f, !0);
  }, Et = (f, p, g, v) => {
    if (f == null)
      i(
        p.el = a(p.children),
        g,
        v
      );
    else {
      const m = p.el = f.el;
      p.children !== f.children && l(m, p.children);
    }
  }, ot = (f, p, g, v) => {
    f == null ? i(
      p.el = c(p.children || ""),
      g,
      v
    ) : p.el = f.el;
  }, at = (f, p, g, v) => {
    [f.el, f.anchor] = D(
      f.children,
      p,
      g,
      v,
      f.el,
      f.anchor
    );
  }, dt = (f, p, g, v) => {
    if (p.children !== f.children) {
      const m = y(f.anchor);
      M(f), [p.el, p.anchor] = D(
        p.children,
        g,
        m,
        v
      );
    } else
      p.el = f.el, p.anchor = f.anchor;
  }, ae = ({ el: f, anchor: p }, g, v) => {
    let m;
    for (; f && f !== p; )
      m = y(f), i(f, g, v), f = m;
    i(p, g, v);
  }, M = ({ el: f, anchor: p }) => {
    let g;
    for (; f && f !== p; )
      g = y(f), s(f), f = g;
    s(p);
  }, Ct = (f, p, g, v, m, b, O, S, I) => {
    p.type === "svg" ? O = "svg" : p.type === "math" && (O = "mathml"), f == null ? _e(
      p,
      g,
      v,
      m,
      b,
      O,
      S,
      I
    ) : un(
      f,
      p,
      m,
      b,
      O,
      S,
      I
    );
  }, _e = (f, p, g, v, m, b, O, S) => {
    let I, w;
    const { props: k, shapeFlag: N, transition: L, dirs: q } = f;
    if (I = f.el = o(
      f.type,
      b,
      k && k.is,
      k
    ), N & 8 ? u(I, f.children) : N & 16 && Qt(
      f.children,
      I,
      null,
      v,
      m,
      sa(f, b),
      O,
      S
    ), q && ni(f, null, v, "created"), kt(I, f, f.scopeId, O, v), k) {
      for (const bt in k)
        bt !== "value" && !Ts(bt) && r(I, bt, null, k[bt], b, v);
      "value" in k && r(I, "value", null, k.value, b), (w = k.onVnodeBeforeMount) && We(w, v, f);
    }
    process.env.NODE_ENV !== "production" && (Jr(I, "__vnode", f, !0), Jr(I, "__vueParentComponent", v, !0)), q && ni(f, null, v, "beforeMount");
    const it = o_(m, L);
    it && L.beforeEnter(I), i(I, p, g), ((w = k && k.onVnodeMounted) || it || q) && ce(() => {
      w && We(w, v, f), it && L.enter(I), q && ni(f, null, v, "mounted");
    }, m);
  }, kt = (f, p, g, v, m) => {
    if (g && _(f, g), v)
      for (let b = 0; b < v.length; b++)
        _(f, v[b]);
    if (m) {
      let b = m.subTree;
      if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = hc(b.children) || b), p === b || af(b.type) && (b.ssContent === p || b.ssFallback === p)) {
        const O = m.vnode;
        kt(
          f,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, Qt = (f, p, g, v, m, b, O, S, I = 0) => {
    for (let w = I; w < f.length; w++) {
      const k = f[w] = S ? kn(f[w]) : De(f[w]);
      B(
        null,
        k,
        p,
        g,
        v,
        m,
        b,
        O,
        S
      );
    }
  }, un = (f, p, g, v, m, b, O) => {
    const S = p.el = f.el;
    process.env.NODE_ENV !== "production" && (S.__vnode = p);
    let { patchFlag: I, dynamicChildren: w, dirs: k } = p;
    I |= f.patchFlag & 16;
    const N = f.props || _t, L = p.props || _t;
    let q;
    if (g && ii(g, !1), (q = L.onVnodeBeforeUpdate) && We(q, g, p, f), k && ni(p, f, g, "beforeUpdate"), g && ii(g, !0), process.env.NODE_ENV !== "production" && tn && (I = 0, O = !1, w = null), (N.innerHTML && L.innerHTML == null || N.textContent && L.textContent == null) && u(S, ""), w ? (Fn(
      f.dynamicChildren,
      w,
      S,
      g,
      v,
      sa(p, m),
      b
    ), process.env.NODE_ENV !== "production" && Lr(f, p)) : O || Pe(
      f,
      p,
      S,
      null,
      g,
      v,
      sa(p, m),
      b,
      !1
    ), I > 0) {
      if (I & 16)
        Ie(S, N, L, g, m);
      else if (I & 2 && N.class !== L.class && r(S, "class", null, L.class, m), I & 4 && r(S, "style", N.style, L.style, m), I & 8) {
        const it = p.dynamicProps;
        for (let bt = 0; bt < it.length; bt++) {
          const gt = it[bt], Xt = N[gt], te = L[gt];
          (te !== Xt || gt === "value") && r(S, gt, Xt, te, m, g);
        }
      }
      I & 1 && f.children !== p.children && u(S, p.children);
    } else !O && w == null && Ie(S, N, L, g, m);
    ((q = L.onVnodeUpdated) || k) && ce(() => {
      q && We(q, g, p, f), k && ni(p, f, g, "updated");
    }, v);
  }, Fn = (f, p, g, v, m, b, O) => {
    for (let S = 0; S < p.length; S++) {
      const I = f[S], w = p[S], k = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === de || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_s(I, w) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 198) ? d(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      B(
        I,
        w,
        k,
        null,
        v,
        m,
        b,
        O,
        !0
      );
    }
  }, Ie = (f, p, g, v, m) => {
    if (p !== g) {
      if (p !== _t)
        for (const b in p)
          !Ts(b) && !(b in g) && r(
            f,
            b,
            p[b],
            null,
            m,
            v
          );
      for (const b in g) {
        if (Ts(b)) continue;
        const O = g[b], S = p[b];
        O !== S && b !== "value" && r(f, b, S, O, m, v);
      }
      "value" in g && r(f, "value", p.value, g.value, m);
    }
  }, vr = (f, p, g, v, m, b, O, S, I) => {
    const w = p.el = f ? f.el : a(""), k = p.anchor = f ? f.anchor : a("");
    let { patchFlag: N, dynamicChildren: L, slotScopeIds: q } = p;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (tn || N & 2048) && (N = 0, I = !1, L = null), q && (S = S ? S.concat(q) : q), f == null ? (i(w, g, v), i(k, g, v), Qt(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      g,
      k,
      m,
      b,
      O,
      S,
      I
    )) : N > 0 && N & 64 && L && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (Fn(
      f.dynamicChildren,
      L,
      g,
      m,
      b,
      O,
      S
    ), process.env.NODE_ENV !== "production" ? Lr(f, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || m && p === m.subTree) && Lr(
        f,
        p,
        !0
        /* shallow */
      )
    )) : Pe(
      f,
      p,
      g,
      k,
      m,
      b,
      O,
      S,
      I
    );
  }, jl = (f, p, g, v, m, b, O, S, I) => {
    p.slotScopeIds = S, f == null ? p.shapeFlag & 512 ? m.ctx.activate(
      p,
      g,
      v,
      O,
      I
    ) : Rn(
      p,
      g,
      v,
      m,
      b,
      O,
      I
    ) : Zt(f, p, I);
  }, Rn = (f, p, g, v, m, b, O) => {
    const S = f.component = T_(
      f,
      v,
      m
    );
    if (process.env.NODE_ENV !== "production" && S.type.__hmrId && ng(S), process.env.NODE_ENV !== "production" && (Ar(f), Ti(S, "mount")), lc(f) && (S.ctx.renderer = fs), process.env.NODE_ENV !== "production" && Ti(S, "init"), B_(S, !1, O), process.env.NODE_ENV !== "production" && Ai(S, "init"), process.env.NODE_ENV !== "production" && tn && (f.el = null), S.asyncDep) {
      if (m && m.registerDep(S, nt, O), !f.el) {
        const I = S.subTree = mn(ye);
        ot(null, I, p, g), f.placeholder = I.el;
      }
    } else
      nt(
        S,
        f,
        p,
        g,
        m,
        b,
        O
      );
    process.env.NODE_ENV !== "production" && (Br(), Ai(S, "mount"));
  }, Zt = (f, p, g) => {
    const v = p.component = f.component;
    if (g_(f, p, g))
      if (v.asyncDep && !v.asyncResolved) {
        process.env.NODE_ENV !== "production" && Ar(p), et(v, p, g), process.env.NODE_ENV !== "production" && Br();
        return;
      } else
        v.next = p, v.update();
    else
      p.el = f.el, v.vnode = p;
  }, nt = (f, p, g, v, m, b, O) => {
    const S = () => {
      if (f.isMounted) {
        let { next: N, bu: L, u: q, parent: it, vnode: bt } = f;
        {
          const je = ef(f);
          if (je) {
            N && (N.el = bt.el, et(f, N, O)), je.asyncDep.then(() => {
              f.isUnmounted || S();
            });
            return;
          }
        }
        let gt = N, Xt;
        process.env.NODE_ENV !== "production" && Ar(N || f.vnode), ii(f, !1), N ? (N.el = bt.el, et(f, N, O)) : N = bt, L && ps(L), (Xt = N.props && N.props.onVnodeBeforeUpdate) && We(Xt, it, N, bt), ii(f, !0), process.env.NODE_ENV !== "production" && Ti(f, "render");
        const te = cu(f);
        process.env.NODE_ENV !== "production" && Ai(f, "render");
        const ke = f.subTree;
        f.subTree = te, process.env.NODE_ENV !== "production" && Ti(f, "patch"), B(
          ke,
          te,
          // parent may have changed if it's in a teleport
          d(ke.el),
          // anchor may have changed if it's in a fragment
          wr(ke),
          f,
          m,
          b
        ), process.env.NODE_ENV !== "production" && Ai(f, "patch"), N.el = te.el, gt === null && __(f, te.el), q && ce(q, m), (Xt = N.props && N.props.onVnodeUpdated) && ce(
          () => We(Xt, it, N, bt),
          m
        ), process.env.NODE_ENV !== "production" && xd(f), process.env.NODE_ENV !== "production" && Br();
      } else {
        let N;
        const { el: L, props: q } = p, { bm: it, m: bt, parent: gt, root: Xt, type: te } = f, ke = Rs(p);
        ii(f, !1), it && ps(it), !ke && (N = q && q.onVnodeBeforeMount) && We(N, gt, p), ii(f, !0);
        {
          Xt.ce && // @ts-expect-error _def is private
          Xt.ce._def.shadowRoot !== !1 && Xt.ce._injectChildStyle(te), process.env.NODE_ENV !== "production" && Ti(f, "render");
          const je = f.subTree = cu(f);
          process.env.NODE_ENV !== "production" && Ai(f, "render"), process.env.NODE_ENV !== "production" && Ti(f, "patch"), B(
            null,
            je,
            g,
            v,
            f,
            m,
            b
          ), process.env.NODE_ENV !== "production" && Ai(f, "patch"), p.el = je.el;
        }
        if (bt && ce(bt, m), !ke && (N = q && q.onVnodeMounted)) {
          const je = p;
          ce(
            () => We(N, gt, je),
            m
          );
        }
        (p.shapeFlag & 256 || gt && Rs(gt.vnode) && gt.vnode.shapeFlag & 256) && f.a && ce(f.a, m), f.isMounted = !0, process.env.NODE_ENV !== "production" && cg(f), p = g = v = null;
      }
    };
    f.scope.on();
    const I = f.effect = new dd(S);
    f.scope.off();
    const w = f.update = I.run.bind(I), k = f.job = I.runIfDirty.bind(I);
    k.i = f, k.id = f.uid, I.scheduler = () => To(k), ii(f, !0), process.env.NODE_ENV !== "production" && (I.onTrack = f.rtc ? (N) => ps(f.rtc, N) : void 0, I.onTrigger = f.rtg ? (N) => ps(f.rtg, N) : void 0), w();
  }, et = (f, p, g) => {
    p.component = f;
    const v = f.vnode.props;
    f.vnode = p, f.next = null, Yg(f, p.props, v, g), n_(f, p.children, g), Me(), Jl(f), Ce();
  }, Pe = (f, p, g, v, m, b, O, S, I = !1) => {
    const w = f && f.children, k = f ? f.shapeFlag : 0, N = p.children, { patchFlag: L, shapeFlag: q } = p;
    if (L > 0) {
      if (L & 128) {
        us(
          w,
          N,
          g,
          v,
          m,
          b,
          O,
          S,
          I
        );
        return;
      } else if (L & 256) {
        Ko(
          w,
          N,
          g,
          v,
          m,
          b,
          O,
          S,
          I
        );
        return;
      }
    }
    q & 8 ? (k & 16 && ds(w, m, b), N !== w && u(g, N)) : k & 16 ? q & 16 ? us(
      w,
      N,
      g,
      v,
      m,
      b,
      O,
      S,
      I
    ) : ds(w, m, b, !0) : (k & 8 && u(g, ""), q & 16 && Qt(
      N,
      g,
      v,
      m,
      b,
      O,
      S,
      I
    ));
  }, Ko = (f, p, g, v, m, b, O, S, I) => {
    f = f || zi, p = p || zi;
    const w = f.length, k = p.length, N = Math.min(w, k);
    let L;
    for (L = 0; L < N; L++) {
      const q = p[L] = I ? kn(p[L]) : De(p[L]);
      B(
        f[L],
        q,
        g,
        null,
        m,
        b,
        O,
        S,
        I
      );
    }
    w > k ? ds(
      f,
      m,
      b,
      !0,
      !1,
      N
    ) : Qt(
      p,
      g,
      v,
      m,
      b,
      O,
      S,
      I,
      N
    );
  }, us = (f, p, g, v, m, b, O, S, I) => {
    let w = 0;
    const k = p.length;
    let N = f.length - 1, L = k - 1;
    for (; w <= N && w <= L; ) {
      const q = f[w], it = p[w] = I ? kn(p[w]) : De(p[w]);
      if (_s(q, it))
        B(
          q,
          it,
          g,
          null,
          m,
          b,
          O,
          S,
          I
        );
      else
        break;
      w++;
    }
    for (; w <= N && w <= L; ) {
      const q = f[N], it = p[L] = I ? kn(p[L]) : De(p[L]);
      if (_s(q, it))
        B(
          q,
          it,
          g,
          null,
          m,
          b,
          O,
          S,
          I
        );
      else
        break;
      N--, L--;
    }
    if (w > N) {
      if (w <= L) {
        const q = L + 1, it = q < k ? p[q].el : v;
        for (; w <= L; )
          B(
            null,
            p[w] = I ? kn(p[w]) : De(p[w]),
            g,
            it,
            m,
            b,
            O,
            S,
            I
          ), w++;
      }
    } else if (w > L)
      for (; w <= N; )
        Ln(f[w], m, b, !0), w++;
    else {
      const q = w, it = w, bt = /* @__PURE__ */ new Map();
      for (w = it; w <= L; w++) {
        const Wt = p[w] = I ? kn(p[w]) : De(p[w]);
        Wt.key != null && (process.env.NODE_ENV !== "production" && bt.has(Wt.key) && E(
          "Duplicate keys found during update:",
          JSON.stringify(Wt.key),
          "Make sure keys are unique."
        ), bt.set(Wt.key, w));
      }
      let gt, Xt = 0;
      const te = L - it + 1;
      let ke = !1, je = 0;
      const hs = new Array(te);
      for (w = 0; w < te; w++) hs[w] = 0;
      for (w = q; w <= N; w++) {
        const Wt = f[w];
        if (Xt >= te) {
          Ln(Wt, m, b, !0);
          continue;
        }
        let $e;
        if (Wt.key != null)
          $e = bt.get(Wt.key);
        else
          for (gt = it; gt <= L; gt++)
            if (hs[gt - it] === 0 && _s(Wt, p[gt])) {
              $e = gt;
              break;
            }
        $e === void 0 ? Ln(Wt, m, b, !0) : (hs[$e - it] = w + 1, $e >= je ? je = $e : ke = !0, B(
          Wt,
          p[$e],
          g,
          null,
          m,
          b,
          O,
          S,
          I
        ), Xt++);
      }
      const zl = ke ? a_(hs) : zi;
      for (gt = zl.length - 1, w = te - 1; w >= 0; w--) {
        const Wt = it + w, $e = p[Wt], Wl = p[Wt + 1], Hl = Wt + 1 < k ? (
          // #13559, fallback to el placeholder for unresolved async component
          Wl.el || Wl.placeholder
        ) : v;
        hs[w] === 0 ? B(
          null,
          $e,
          g,
          Hl,
          m,
          b,
          O,
          S,
          I
        ) : ke && (gt < 0 || w !== zl[gt] ? Ni($e, g, Hl, 2) : gt--);
      }
    }
  }, Ni = (f, p, g, v, m = null) => {
    const { el: b, type: O, transition: S, children: I, shapeFlag: w } = f;
    if (w & 6) {
      Ni(f.component.subTree, p, g, v);
      return;
    }
    if (w & 128) {
      f.suspense.move(p, g, v);
      return;
    }
    if (w & 64) {
      O.move(f, p, g, fs);
      return;
    }
    if (O === de) {
      i(b, p, g);
      for (let N = 0; N < I.length; N++)
        Ni(I[N], p, g, v);
      i(f.anchor, p, g);
      return;
    }
    if (O === Mr) {
      ae(f, p, g);
      return;
    }
    if (v !== 2 && w & 1 && S)
      if (v === 0)
        S.beforeEnter(b), i(b, p, g), ce(() => S.enter(b), m);
      else {
        const { leave: N, delayLeave: L, afterLeave: q } = S, it = () => {
          f.ctx.isUnmounted ? s(b) : i(b, p, g);
        }, bt = () => {
          b._isLeaving && b[_g](
            !0
            /* cancelled */
          ), N(b, () => {
            it(), q && q();
          });
        };
        L ? L(b, it, bt) : bt();
      }
    else
      i(b, p, g);
  }, Ln = (f, p, g, v = !1, m = !1) => {
    const {
      type: b,
      props: O,
      ref: S,
      children: I,
      dynamicChildren: w,
      shapeFlag: k,
      patchFlag: N,
      dirs: L,
      cacheIndex: q
    } = f;
    if (N === -2 && (m = !1), S != null && (Me(), Fs(S, null, g, f, !0), Ce()), q != null && (p.renderCache[q] = void 0), k & 256) {
      p.ctx.deactivate(f);
      return;
    }
    const it = k & 1 && L, bt = !Rs(f);
    let gt;
    if (bt && (gt = O && O.onVnodeBeforeUnmount) && We(gt, p, f), k & 6)
      iy(f.component, g, v);
    else {
      if (k & 128) {
        f.suspense.unmount(g, v);
        return;
      }
      it && ni(f, null, p, "beforeUnmount"), k & 64 ? f.type.remove(
        f,
        p,
        g,
        fs,
        v
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== de || N > 0 && N & 64) ? ds(
        w,
        p,
        g,
        !1,
        !0
      ) : (b === de && N & 384 || !m && k & 16) && ds(I, p, g), v && Go(f);
    }
    (bt && (gt = O && O.onVnodeUnmounted) || it) && ce(() => {
      gt && We(gt, p, f), it && ni(f, null, p, "unmounted");
    }, g);
  }, Go = (f) => {
    const { type: p, el: g, anchor: v, transition: m } = f;
    if (p === de) {
      process.env.NODE_ENV !== "production" && f.patchFlag > 0 && f.patchFlag & 2048 && m && !m.persisted ? f.children.forEach((O) => {
        O.type === ye ? s(O.el) : Go(O);
      }) : ny(g, v);
      return;
    }
    if (p === Mr) {
      M(f);
      return;
    }
    const b = () => {
      s(g), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (f.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: S } = m, I = () => O(g, b);
      S ? S(f.el, b, I) : I();
    } else
      b();
  }, ny = (f, p) => {
    let g;
    for (; f !== p; )
      g = y(f), s(f), f = g;
    s(p);
  }, iy = (f, p, g) => {
    process.env.NODE_ENV !== "production" && f.type.__hmrId && ig(f);
    const { bum: v, scope: m, job: b, subTree: O, um: S, m: I, a: w } = f;
    au(I), au(w), v && ps(v), m.stop(), b && (b.flags |= 8, Ln(O, f, p, g)), S && ce(S, p), ce(() => {
      f.isUnmounted = !0;
    }, p), process.env.NODE_ENV !== "production" && ug(f);
  }, ds = (f, p, g, v = !1, m = !1, b = 0) => {
    for (let O = b; O < f.length; O++)
      Ln(f[O], p, g, v, m);
  }, wr = (f) => {
    if (f.shapeFlag & 6)
      return wr(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const p = y(f.anchor || f.el), g = p && p[yg];
    return g ? y(g) : p;
  };
  let qo = !1;
  const $l = (f, p, g) => {
    f == null ? p._vnode && Ln(p._vnode, null, null, !0) : B(
      p._vnode || null,
      f,
      p,
      null,
      null,
      null,
      g
    ), p._vnode = f, qo || (qo = !0, Jl(), Ld(), qo = !1);
  }, fs = {
    p: B,
    um: Ln,
    m: Ni,
    r: Go,
    mt: Rn,
    mc: Qt,
    pc: Pe,
    pbc: Fn,
    n: wr,
    o: e
  };
  return {
    render: $l,
    hydrate: void 0,
    createApp: $g($l)
  };
}
function sa({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ii({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function o_(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Lr(e, t, n = !1) {
  const i = e.children, s = t.children;
  if (j(i) && j(s))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let a = s[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[r] = kn(s[r]), a.el = o.el), !n && a.patchFlag !== -2 && Lr(o, a)), a.type === ir && // avoid cached text nodes retaining detached dom nodes
      a.patchFlag !== -1 && (a.el = o.el), a.type === ye && !a.el && (a.el = o.el), process.env.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function a_(e) {
  const t = e.slice(), n = [0];
  let i, s, r, o, a;
  const c = e.length;
  for (i = 0; i < c; i++) {
    const l = e[i];
    if (l !== 0) {
      if (s = n[n.length - 1], e[s] < l) {
        t[i] = s, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        a = r + o >> 1, e[n[a]] < l ? r = a + 1 : o = a;
      l < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function ef(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ef(t);
}
function au(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const c_ = Symbol.for("v-scx"), l_ = () => {
  {
    const e = Rr(c_);
    return e || process.env.NODE_ENV !== "production" && E(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ra(e, t, n) {
  return process.env.NODE_ENV !== "production" && !Y(t) && E(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), nf(e, t, n);
}
function nf(e, t, n = _t) {
  const { immediate: i, deep: s, flush: r, once: o } = n;
  process.env.NODE_ENV !== "production" && !t && (i !== void 0 && E(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && E(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && E(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = At({}, n);
  process.env.NODE_ENV !== "production" && (a.onWarn = E);
  const c = t && i || !t && r !== "post";
  let l;
  if (ks) {
    if (r === "sync") {
      const _ = l_();
      l = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!c) {
      const _ = () => {
      };
      return _.stop = Lt, _.resume = Lt, _.pause = Lt, _;
    }
  }
  const u = Vt;
  a.call = (_, D, B) => nn(_, u, D, B);
  let d = !1;
  r === "post" ? a.scheduler = (_) => {
    ce(_, u && u.suspense);
  } : r !== "sync" && (d = !0, a.scheduler = (_, D) => {
    D ? _() : To(_);
  }), a.augmentJob = (_) => {
    t && (_.flags |= 4), d && (_.flags |= 2, u && (_.id = u.uid, _.i = u));
  };
  const y = Ky(e, t, a);
  return ks && (l ? l.push(y) : c && y()), y;
}
function u_(e, t, n) {
  const i = this.proxy, s = It(e) ? e.includes(".") ? sf(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Y(t) ? r = t : (r = t.handler, n = t);
  const o = sr(this), a = nf(s, r.bind(i), n);
  return o(), a;
}
function sf(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++)
      i = i[n[s]];
    return i;
  };
}
const d_ = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Be(t)}Modifiers`] || e[`${Hn(t)}Modifiers`];
function f_(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || _t;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(t in u))
        (!d || !(ri(Be(t)) in d)) && E(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ri(Be(t))}" prop.`
        );
      else {
        const y = u[t];
        Y(y) && (y(...n) || E(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), o = r && d_(i, t.slice(7));
  if (o && (o.trim && (s = n.map((u) => It(u) ? u.trim() : u)), o.number && (s = n.map(cy))), process.env.NODE_ENV !== "production" && hg(e, t, s), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && i[ri(u)] && E(
      `Event "${u}" is emitted in component ${Ro(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Hn(
        t
      )}" instead of "${t}".`
    );
  }
  let a, c = i[a = ri(t)] || // also try camelCase event handler (#2249)
  i[a = ri(Be(t))];
  !c && r && (c = i[a = ri(Hn(t))]), c && nn(
    c,
    e,
    6,
    s
  );
  const l = i[a + "Once"];
  if (l) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, nn(
      l,
      e,
      6,
      s
    );
  }
}
const h_ = /* @__PURE__ */ new WeakMap();
function rf(e, t, n = !1) {
  const i = n ? h_ : t.emitsCache, s = i.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let o = {}, a = !1;
  if (!Y(e)) {
    const c = (l) => {
      const u = rf(l, t, !0);
      u && (a = !0, At(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !a ? (mt(e) && i.set(e, null), null) : (j(r) ? r.forEach((c) => o[c] = null) : At(o, r), mt(e) && i.set(e, o), o);
}
function Bo(e, t) {
  return !e || !Xs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), rt(e, t[0].toLowerCase() + t.slice(1)) || rt(e, Hn(t)) || rt(e, t));
}
let Ra = !1;
function oo() {
  Ra = !0;
}
function cu(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    propsOptions: [r],
    slots: o,
    attrs: a,
    emit: c,
    render: l,
    renderCache: u,
    props: d,
    data: y,
    setupState: _,
    ctx: D,
    inheritAttrs: B
  } = e, Et = no(e);
  let ot, at;
  process.env.NODE_ENV !== "production" && (Ra = !1);
  try {
    if (n.shapeFlag & 4) {
      const M = s || i, Ct = process.env.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(M, {
        get(_e, kt, Qt) {
          return E(
            `Property '${String(
              kt
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(_e, kt, Qt);
        }
      }) : M;
      ot = De(
        l.call(
          Ct,
          M,
          u,
          process.env.NODE_ENV !== "production" ? Xe(d) : d,
          _,
          y,
          D
        )
      ), at = a;
    } else {
      const M = t;
      process.env.NODE_ENV !== "production" && a === d && oo(), ot = De(
        M.length > 1 ? M(
          process.env.NODE_ENV !== "production" ? Xe(d) : d,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return oo(), Xe(a);
            },
            slots: o,
            emit: c
          } : { attrs: a, slots: o, emit: c }
        ) : M(
          process.env.NODE_ENV !== "production" ? Xe(d) : d,
          null
        )
      ), at = t.props ? a : p_(a);
    }
  } catch (M) {
    Ls.length = 0, er(M, e, 1), ot = mn(ye);
  }
  let dt = ot, ae;
  if (process.env.NODE_ENV !== "production" && ot.patchFlag > 0 && ot.patchFlag & 2048 && ([dt, ae] = of(ot)), at && B !== !1) {
    const M = Object.keys(at), { shapeFlag: Ct } = dt;
    if (M.length) {
      if (Ct & 7)
        r && M.some(qr) && (at = y_(
          at,
          r
        )), dt = Yn(dt, at, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Ra && dt.type !== ye) {
        const _e = Object.keys(a), kt = [], Qt = [];
        for (let un = 0, Fn = _e.length; un < Fn; un++) {
          const Ie = _e[un];
          Xs(Ie) ? qr(Ie) || kt.push(Ie[2].toLowerCase() + Ie.slice(3)) : Qt.push(Ie);
        }
        Qt.length && E(
          `Extraneous non-props attributes (${Qt.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), kt.length && E(
          `Extraneous non-emits event listeners (${kt.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !lu(dt) && E(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), dt = Yn(dt, null, !1, !0), dt.dirs = dt.dirs ? dt.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !lu(dt) && E(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), cc(dt, n.transition)), process.env.NODE_ENV !== "production" && ae ? ae(dt) : ot = dt, no(Et), ot;
}
const of = (e) => {
  const t = e.children, n = e.dynamicChildren, i = hc(t, !1);
  if (i) {
    if (process.env.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048)
      return of(i);
  } else return [e, void 0];
  const s = t.indexOf(i), r = n ? n.indexOf(i) : -1, o = (a) => {
    t[s] = a, n && (r > -1 ? n[r] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [De(i), o];
};
function hc(e, t = !0) {
  let n;
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Fo(s)) {
      if (s.type !== ye || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return hc(n.children);
      }
    } else
      return;
  }
  return n;
}
const p_ = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Xs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, y_ = (e, t) => {
  const n = {};
  for (const i in e)
    (!qr(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
}, lu = (e) => e.shapeFlag & 7 || e.type === ye;
function g_(e, t, n) {
  const { props: i, children: s, component: r } = e, { props: o, children: a, patchFlag: c } = t, l = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || a) && tn || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return i ? uu(i, o, l) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const y = u[d];
        if (o[y] !== i[y] && !Bo(l, y))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : i === o ? !1 : i ? o ? uu(i, o, l) : !0 : !!o;
  return !1;
}
function uu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (t[r] !== e[r] && !Bo(n, r))
      return !0;
  }
  return !1;
}
function __({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const af = (e) => e.__isSuspense;
function m_(e, t) {
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : Rd(e);
}
const de = Symbol.for("v-fgt"), ir = Symbol.for("v-txt"), ye = Symbol.for("v-cmt"), Mr = Symbol.for("v-stc"), Ls = [];
let pe = null;
function Se(e = !1) {
  Ls.push(pe = e ? null : []);
}
function b_() {
  Ls.pop(), pe = Ls[Ls.length - 1] || null;
}
let Ps = 1;
function du(e, t = !1) {
  Ps += e, e < 0 && pe && t && (pe.hasOnce = !0);
}
function cf(e) {
  return e.dynamicChildren = Ps > 0 ? pe || zi : null, b_(), Ps > 0 && pe && pe.push(e), e;
}
function ze(e, t, n, i, s, r) {
  return cf(
    Pn(
      e,
      t,
      n,
      i,
      s,
      r,
      !0
    )
  );
}
function v_(e, t, n, i, s) {
  return cf(
    mn(
      e,
      t,
      n,
      i,
      s,
      !0
    )
  );
}
function Fo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function _s(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Fr.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const w_ = (...e) => uf(
  ...e
), lf = ({ key: e }) => e ?? null, Cr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? It(e) || Mt(e) || Y(e) ? { i: he, r: e, k: t, f: !!n } : e : null);
function Pn(e, t = null, n = null, i = 0, s = null, r = e === de ? 0 : 1, o = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && lf(t),
    ref: t && Cr(t),
    scopeId: Vd,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: he
  };
  return a ? (pc(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= It(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && E("VNode created with invalid key (NaN). VNode type:", c.type), Ps > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && pe.push(c), c;
}
const mn = process.env.NODE_ENV !== "production" ? w_ : uf;
function uf(e, t = null, n = null, i = 0, s = null, r = !1) {
  if ((!e || e === Fg) && (process.env.NODE_ENV !== "production" && !e && E(`Invalid vnode type when creating vnode: ${e}.`), e = ye), Fo(e)) {
    const a = Yn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && pc(a, n), Ps > 0 && !r && pe && (a.shapeFlag & 6 ? pe[pe.indexOf(e)] = a : pe.push(a)), a.patchFlag = -2, a;
  }
  if (gf(e) && (e = e.__vccOpts), t) {
    t = I_(t);
    let { class: a, style: c } = t;
    a && !It(a) && (t.class = tc(a)), mt(c) && (Qr(c) && !j(c) && (c = At({}, c)), t.style = Xa(c));
  }
  const o = It(e) ? 1 : af(e) ? 128 : gg(e) ? 64 : mt(e) ? 4 : Y(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && o & 4 && Qr(e) && (e = X(e), E(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Pn(
    e,
    t,
    n,
    i,
    s,
    o,
    r,
    !0
  );
}
function I_(e) {
  return e ? Qr(e) || qd(e) ? At({}, e) : e : null;
}
function Yn(e, t, n = !1, i = !1) {
  const { props: s, ref: r, patchFlag: o, children: a, transition: c } = e, l = t ? O_(s || {}, t) : s, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && lf(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? j(r) ? r.concat(Cr(t)) : [r, Cr(t)] : Cr(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && j(a) ? a.map(df) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== de ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Yn(e.ssContent),
    ssFallback: e.ssFallback && Yn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && i && cc(
    u,
    c.clone(u)
  ), u;
}
function df(e) {
  const t = Yn(e);
  return j(e.children) && (t.children = e.children.map(df)), t;
}
function S_(e = " ", t = 0) {
  return mn(ir, null, e, t);
}
function E_(e = "", t = !1) {
  return t ? (Se(), v_(ye, null, e)) : mn(ye, null, e);
}
function De(e) {
  return e == null || typeof e == "boolean" ? mn(ye) : j(e) ? mn(
    de,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Fo(e) ? kn(e) : mn(ir, null, String(e));
}
function kn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Yn(e);
}
function pc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (j(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), pc(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !qd(t) ? t._ctx = he : s === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Y(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [S_(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function O_(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = tc([t.class, i.class]));
      else if (s === "style")
        t.style = Xa([t.style, i.style]);
      else if (Xs(s)) {
        const r = t[s], o = i[s];
        o && r !== o && !(j(r) && r.includes(o)) && (t[s] = r ? [].concat(r, o) : o);
      } else s !== "" && (t[s] = i[s]);
  }
  return t;
}
function We(e, t, n, i = null) {
  nn(e, t, 7, [
    n,
    i
  ]);
}
const N_ = Yd();
let D_ = 0;
function T_(e, t, n) {
  const i = e.type, s = (t ? t.appContext : e.appContext) || N_, r = {
    uid: D_++,
    vnode: e,
    type: i,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new wy(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Qd(i, s),
    emitsOptions: rf(i, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _t,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: _t,
    data: _t,
    props: _t,
    attrs: _t,
    slots: _t,
    refs: _t,
    setupState: _t,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = Rg(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = f_.bind(null, r), e.ce && e.ce(r), r;
}
let Vt = null;
const ff = () => Vt || he;
let ao, La;
{
  const e = tr(), t = (n, i) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  ao = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Vt = n
  ), La = t(
    "__VUE_SSR_SETTERS__",
    (n) => ks = n
  );
}
const sr = (e) => {
  const t = Vt;
  return ao(e), e.scope.on(), () => {
    e.scope.off(), ao(t);
  };
}, fu = () => {
  Vt && Vt.scope.off(), ao(null);
}, A_ = /* @__PURE__ */ On("slot,component");
function Ma(e, { isNativeTag: t }) {
  (A_(e) || t(e)) && E(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function hf(e) {
  return e.vnode.shapeFlag & 4;
}
let ks = !1;
function B_(e, t = !1, n = !1) {
  t && La(t);
  const { props: i, children: s } = e.vnode, r = hf(e);
  Wg(e, i, r, t), e_(e, s, n || t);
  const o = r ? F_(e, t) : void 0;
  return t && La(!1), o;
}
function F_(e, t) {
  var n;
  const i = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (i.name && Ma(i.name, e.appContext.config), i.components) {
      const r = Object.keys(i.components);
      for (let o = 0; o < r.length; o++)
        Ma(r[o], e.appContext.config);
    }
    if (i.directives) {
      const r = Object.keys(i.directives);
      for (let o = 0; o < r.length; o++)
        Pd(r[o]);
    }
    i.compilerOptions && R_() && E(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, zd), process.env.NODE_ENV !== "production" && Lg(e);
  const { setup: s } = i;
  if (s) {
    Me();
    const r = e.setupContext = s.length > 1 ? M_(e) : null, o = sr(e), a = as(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Xe(e.props) : e.props,
        r
      ]
    ), c = Ja(a);
    if (Ce(), o(), (c || e.sp) && !Rs(e) && kd(e), c) {
      if (a.then(fu, fu), t)
        return a.then((l) => {
          hu(e, l, t);
        }).catch((l) => {
          er(l, e, 0);
        });
      if (e.asyncDep = a, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = i.name) != null ? n : "Anonymous";
        E(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      hu(e, a, t);
  } else
    pf(e, t);
}
function hu(e, t, n) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : mt(t) ? (process.env.NODE_ENV !== "production" && Fo(t) && E(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Td(t), process.env.NODE_ENV !== "production" && Mg(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && E(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), pf(e, n);
}
const R_ = () => !0;
function pf(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Lt);
  {
    const s = sr(e);
    Me();
    try {
      xg(e);
    } finally {
      Ce(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !i.render && e.render === Lt && !t && (i.template ? E(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : E("Component is missing template or render function: ", i));
}
const pu = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return oo(), Ft(e, "get", ""), e[t];
  },
  set() {
    return E("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return E("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Ft(e, "get", ""), e[t];
  }
};
function L_(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Ft(e, "get", "$slots"), t[n];
    }
  });
}
function M_(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && E("expose() should be called only once per setup()."), n != null)) {
      let i = typeof n;
      i === "object" && (j(n) ? i = "array" : Mt(n) && (i = "ref")), i !== "object" && E(
        `expose() should be passed a plain object, received ${i}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, i;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, pu));
      },
      get slots() {
        return i || (i = L_(e));
      },
      get emit() {
        return (s, ...r) => e.emit(s, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, pu),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function yc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Td($y(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in pi)
        return pi[n](e);
    },
    has(t, n) {
      return n in t || n in pi;
    }
  })) : e.proxy;
}
const C_ = /(?:^|[-_])\w/g, x_ = (e) => e.replace(C_, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function yf(e, t = !0) {
  return Y(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ro(e, t, n = !1) {
  let i = yf(t);
  if (!i && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (i = s[1]);
  }
  if (!i && e && e.parent) {
    const s = (r) => {
      for (const o in r)
        if (r[o] === t)
          return o;
    };
    i = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return i ? x_(i) : n ? "App" : "Anonymous";
}
function gf(e) {
  return Y(e) && "__vccOpts" in e;
}
const U_ = (e, t) => {
  const n = Hy(e, t, ks);
  if (process.env.NODE_ENV !== "production") {
    const i = ff();
    i && i.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function V_() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, i = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!mt(d))
        return null;
      if (d.__isVue)
        return ["div", e, "VueInstance"];
      if (Mt(d)) {
        Me();
        const y = d.value;
        return Ce(), [
          "div",
          {},
          ["span", e, u(d)],
          "<",
          a(y),
          ">"
        ];
      } else {
        if (fi(d))
          return [
            "div",
            {},
            ["span", e, ie(d) ? "ShallowReactive" : "Reactive"],
            "<",
            a(d),
            `>${vn(d) ? " (readonly)" : ""}`
          ];
        if (vn(d))
          return [
            "div",
            {},
            ["span", e, ie(d) ? "ShallowReadonly" : "Readonly"],
            "<",
            a(d),
            ">"
          ];
      }
      return null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...r(d.$)
        ];
    }
  };
  function r(d) {
    const y = [];
    d.type.props && d.props && y.push(o("props", X(d.props))), d.setupState !== _t && y.push(o("setup", d.setupState)), d.data !== _t && y.push(o("data", X(d.data)));
    const _ = c(d, "computed");
    _ && y.push(o("computed", _));
    const D = c(d, "inject");
    return D && y.push(o("injected", D)), y.push([
      "div",
      {},
      [
        "span",
        {
          style: i.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), y;
  }
  function o(d, y) {
    return y = At({}, y), Object.keys(y).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(y).map((_) => [
          "div",
          {},
          ["span", i, _ + ": "],
          a(y[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(d, y = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", i, d] : mt(d) ? ["object", { object: y ? X(d) : d }] : ["span", n, String(d)];
  }
  function c(d, y) {
    const _ = d.type;
    if (Y(_))
      return;
    const D = {};
    for (const B in d.ctx)
      l(_, B, y) && (D[B] = d.ctx[B]);
    return D;
  }
  function l(d, y, _) {
    const D = d[_];
    if (j(D) && D.includes(y) || mt(D) && y in D || d.extends && l(d.extends, y, _) || d.mixins && d.mixins.some((B) => l(B, y, _)))
      return !0;
  }
  function u(d) {
    return ie(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const yu = "3.5.22", bn = process.env.NODE_ENV !== "production" ? E : Lt;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ca;
const gu = typeof window < "u" && window.trustedTypes;
if (gu)
  try {
    Ca = /* @__PURE__ */ gu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && bn(`Error creating trusted types policy: ${e}`);
  }
const _f = Ca ? (e) => Ca.createHTML(e) : (e) => e, P_ = "http://www.w3.org/2000/svg", k_ = "http://www.w3.org/1998/Math/MathML", hn = typeof document < "u" ? document : null, _u = hn && /* @__PURE__ */ hn.createElement("template"), j_ = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const s = t === "svg" ? hn.createElementNS(P_, e) : t === "mathml" ? hn.createElementNS(k_, e) : n ? hn.createElement(e, { is: n }) : hn.createElement(e);
    return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
  },
  createText: (e) => hn.createTextNode(e),
  createComment: (e) => hn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => hn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, s, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      _u.innerHTML = _f(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const a = _u.content;
      if (i === "svg" || i === "mathml") {
        const c = a.firstChild;
        for (; c.firstChild; )
          a.appendChild(c.firstChild);
        a.removeChild(c);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, $_ = Symbol("_vtc");
function z_(e, t, n) {
  const i = e[$_];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const mu = Symbol("_vod"), W_ = Symbol("_vsh"), H_ = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Y_ = /(?:^|;)\s*display\s*:/;
function K_(e, t, n) {
  const i = e.style, s = It(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (It(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && xr(i, a, "");
        }
      else
        for (const o in t)
          n[o] == null && xr(i, o, "");
    for (const o in n)
      o === "display" && (r = !0), xr(i, o, n[o]);
  } else if (s) {
    if (t !== n) {
      const o = i[H_];
      o && (n += ";" + o), i.cssText = n, r = Y_.test(n);
    }
  } else t && e.removeAttribute("style");
  mu in e && (e[mu] = r ? i.display : "", e[W_] && (i.display = "none"));
}
const G_ = /[^\\];\s*$/, bu = /\s*!important$/;
function xr(e, t, n) {
  if (j(n))
    n.forEach((i) => xr(e, t, i));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && G_.test(n) && bn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = q_(e, t);
    bu.test(n) ? e.setProperty(
      Hn(i),
      n.replace(bu, ""),
      "important"
    ) : e[i] = n;
  }
}
const vu = ["Webkit", "Moz", "ms"], oa = {};
function q_(e, t) {
  const n = oa[t];
  if (n)
    return n;
  let i = Be(t);
  if (i !== "filter" && i in e)
    return oa[t] = i;
  i = So(i);
  for (let s = 0; s < vu.length; s++) {
    const r = vu[s] + i;
    if (r in e)
      return oa[t] = r;
  }
  return t;
}
const wu = "http://www.w3.org/1999/xlink";
function Iu(e, t, n, i, s, r = vy(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wu, t.slice(6, t.length)) : e.setAttributeNS(wu, t, n) : n == null || r && !cd(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ti(n) ? String(n) : n
  );
}
function Su(e, t, n, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? _f(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const a = r === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = cd(n) : n == null && a === "string" ? (n = "", o = !0) : a === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !o && bn(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  o && e.removeAttribute(s || t);
}
function J_(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Q_(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Eu = Symbol("_vei");
function Z_(e, t, n, i, s = null) {
  const r = e[Eu] || (e[Eu] = {}), o = r[t];
  if (i && o)
    o.value = process.env.NODE_ENV !== "production" ? Nu(i, t) : i;
  else {
    const [a, c] = X_(t);
    if (i) {
      const l = r[t] = nm(
        process.env.NODE_ENV !== "production" ? Nu(i, t) : i,
        s
      );
      J_(e, a, l, c);
    } else o && (Q_(e, a, o, c), r[t] = void 0);
  }
}
const Ou = /(?:Once|Passive|Capture)$/;
function X_(e) {
  let t;
  if (Ou.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Ou); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Hn(e.slice(2)), t];
}
let aa = 0;
const tm = /* @__PURE__ */ Promise.resolve(), em = () => aa || (tm.then(() => aa = 0), aa = Date.now());
function nm(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    nn(
      im(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = em(), n;
}
function Nu(e, t) {
  return Y(e) || j(e) ? e : (bn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Lt);
}
function im(e, t) {
  if (j(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (s) => !s._stopped && i && i(s)
    );
  } else
    return t;
}
const Du = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, sm = (e, t, n, i, s, r) => {
  const o = s === "svg";
  t === "class" ? z_(e, i, o) : t === "style" ? K_(e, n, i) : Xs(t) ? qr(t) || Z_(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : rm(e, t, i, o)) ? (Su(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Iu(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !It(i)) ? Su(e, Be(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Iu(e, t, i, o));
};
function rm(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Du(t) && Y(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Du(t) && It(n) ? !1 : t in e;
}
const om = /* @__PURE__ */ At({ patchProp: sm }, j_);
let Tu;
function am() {
  return Tu || (Tu = s_(om));
}
const cm = ((...e) => {
  const t = am().createApp(...e);
  process.env.NODE_ENV !== "production" && (um(t), dm(t));
  const { mount: n } = t;
  return t.mount = (i) => {
    const s = fm(i);
    if (!s) return;
    const r = t._component;
    !Y(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, lm(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function lm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function um(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => gy(t) || _y(t) || my(t),
    writable: !1
  });
}
function dm(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        bn(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, i = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return bn(i), n;
      },
      set() {
        bn(i);
      }
    });
  }
}
function fm(e) {
  if (It(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && bn(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && bn(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function hm() {
  V_();
}
process.env.NODE_ENV !== "production" && hm();
function pm(e, t) {
  var n = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
      t.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (n[i[s]] = e[i[s]]);
  return n;
}
function F(e, t, n, i) {
  function s(r) {
    return r instanceof n ? r : new n(function(o) {
      o(r);
    });
  }
  return new (n || (n = Promise))(function(r, o) {
    function a(u) {
      try {
        l(i.next(u));
      } catch (d) {
        o(d);
      }
    }
    function c(u) {
      try {
        l(i.throw(u));
      } catch (d) {
        o(d);
      }
    }
    function l(u) {
      u.done ? r(u.value) : s(u.value).then(a, c);
    }
    l((i = i.apply(e, t || [])).next());
  });
}
function Au(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], i = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function J(e) {
  return this instanceof J ? (this.v = e, this) : new J(e);
}
function Ae(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = n.apply(e, t || []), s, r = [];
  return s = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", o), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function o(_) {
    return function(D) {
      return Promise.resolve(D).then(_, d);
    };
  }
  function a(_, D) {
    i[_] && (s[_] = function(B) {
      return new Promise(function(Et, ot) {
        r.push([_, B, Et, ot]) > 1 || c(_, B);
      });
    }, D && (s[_] = D(s[_])));
  }
  function c(_, D) {
    try {
      l(i[_](D));
    } catch (B) {
      y(r[0][3], B);
    }
  }
  function l(_) {
    _.value instanceof J ? Promise.resolve(_.value.v).then(u, d) : y(r[0][2], _);
  }
  function u(_) {
    c("next", _);
  }
  function d(_) {
    c("throw", _);
  }
  function y(_, D) {
    _(D), r.shift(), r.length && c(r[0][0], r[0][1]);
  }
}
function Ur(e) {
  var t, n;
  return t = {}, i("next"), i("throw", function(s) {
    throw s;
  }), i("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function i(s, r) {
    t[s] = e[s] ? function(o) {
      return (n = !n) ? { value: J(e[s](o)), done: !1 } : r ? r(o) : o;
    } : r;
  }
}
function Wn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof Au == "function" ? Au(e) : e[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function i(r) {
    n[r] = e[r] && function(o) {
      return new Promise(function(a, c) {
        o = e[r](o), s(a, c, o.done, o.value);
      });
    };
  }
  function s(r, o, a, c) {
    Promise.resolve(c).then(function(l) {
      r({ value: l, done: a });
    }, o);
  }
}
const ym = new TextDecoder("utf-8"), xa = (e) => ym.decode(e), gm = new TextEncoder(), rr = (e) => gm.encode(e), _m = (e) => typeof e == "number", mf = (e) => typeof e == "boolean", Bt = (e) => typeof e == "function", se = (e) => e != null && Object(e) === e, Kn = (e) => se(e) && Bt(e.then), cs = (e) => se(e) && Bt(e[Symbol.iterator]), vi = (e) => se(e) && Bt(e[Symbol.asyncIterator]), Ua = (e) => se(e) && se(e.schema), bf = (e) => se(e) && "done" in e && "value" in e, vf = (e) => se(e) && Bt(e.stat) && _m(e.fd), wf = (e) => se(e) && gc(e.body), Lo = (e) => "_getDOMStream" in e && "_getNodeStream" in e, mm = (e) => se(e) && Bt(e.abort) && Bt(e.getWriter) && !Lo(e), gc = (e) => se(e) && Bt(e.cancel) && Bt(e.getReader) && !Lo(e), bm = (e) => se(e) && Bt(e.end) && Bt(e.write) && mf(e.writable) && !Lo(e), If = (e) => se(e) && Bt(e.read) && Bt(e.pipe) && mf(e.readable) && !Lo(e), vm = (e) => se(e) && Bt(e.clear) && Bt(e.bytes) && Bt(e.position) && Bt(e.setPosition) && Bt(e.capacity) && Bt(e.getBufferIdentifier) && Bt(e.createLong), _c = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function wm(e) {
  const t = e[0] ? [e[0]] : [];
  let n, i, s, r;
  for (let o, a, c = 0, l = 0, u = e.length; ++c < u; ) {
    if (o = t[l], a = e[c], !o || !a || o.buffer !== a.buffer || a.byteOffset < o.byteOffset) {
      a && (t[++l] = a);
      continue;
    }
    if ({ byteOffset: n, byteLength: s } = o, { byteOffset: i, byteLength: r } = a, n + s < i || i + r < n) {
      a && (t[++l] = a);
      continue;
    }
    t[l] = new Uint8Array(o.buffer, n, i - n + r);
  }
  return t;
}
function co(e, t, n = 0, i = t.byteLength) {
  const s = e.byteLength, r = new Uint8Array(e.buffer, e.byteOffset, s), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(i, s));
  return r.set(o, n), e;
}
function xe(e, t) {
  const n = wm(e), i = n.reduce((u, d) => u + d.byteLength, 0);
  let s, r, o, a = 0, c = -1;
  const l = Math.min(t || Number.POSITIVE_INFINITY, i);
  for (const u = n.length; ++c < u; ) {
    if (s = n[c], r = s.subarray(0, Math.min(s.length, l - a)), l <= a + r.length) {
      r.length < s.length ? n[c] = s.subarray(r.length) : r.length === s.length && c++, o ? co(o, r, a) : o = r;
      break;
    }
    co(o || (o = new Uint8Array(l)), r, a), a += r.length;
  }
  return [o || new Uint8Array(0), n.slice(c), i - (o ? o.byteLength : 0)];
}
function tt(e, t) {
  let n = bf(t) ? t.value : t;
  return n instanceof e ? e === Uint8Array ? new e(n.buffer, n.byteOffset, n.byteLength) : n : n ? (typeof n == "string" && (n = rr(n)), n instanceof ArrayBuffer ? new e(n) : n instanceof _c ? new e(n) : vm(n) ? tt(e, n.bytes()) : ArrayBuffer.isView(n) ? n.byteLength <= 0 ? new e(0) : new e(n.buffer, n.byteOffset, n.byteLength / e.BYTES_PER_ELEMENT) : e.from(n)) : new e(0);
}
const Im = (e) => tt(Int8Array, e), Sm = (e) => tt(Int16Array, e), Ri = (e) => tt(Int32Array, e), Va = (e) => tt(BigInt64Array, e), Z = (e) => tt(Uint8Array, e), Em = (e) => tt(Uint16Array, e), Om = (e) => tt(Uint32Array, e), Nm = (e) => tt(BigUint64Array, e), Dm = (e) => tt(Float32Array, e), Tm = (e) => tt(Float64Array, e), Am = (e) => tt(Uint8ClampedArray, e), Pa = (e) => (e.next(), e);
function* cn(e, t) {
  const n = function* (s) {
    yield s;
  }, i = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof _c ? n(t) : cs(t) ? t : n(t);
  return yield* Pa((function* (s) {
    let r = null;
    do
      r = s.next(yield tt(e, r));
    while (!r.done);
  })(i[Symbol.iterator]())), new e();
}
const Bm = (e) => cn(Int8Array, e), Fm = (e) => cn(Int16Array, e), Rm = (e) => cn(Int32Array, e), Sf = (e) => cn(Uint8Array, e), Lm = (e) => cn(Uint16Array, e), Mm = (e) => cn(Uint32Array, e), Cm = (e) => cn(Float32Array, e), xm = (e) => cn(Float64Array, e), Um = (e) => cn(Uint8ClampedArray, e);
function Ue(e, t) {
  return Ae(this, arguments, function* () {
    if (Kn(t))
      return yield J(yield J(yield* Ur(Wn(Ue(e, yield J(t))))));
    const i = function(o) {
      return Ae(this, arguments, function* () {
        yield yield J(yield J(o));
      });
    }, s = function(o) {
      return Ae(this, arguments, function* () {
        yield J(yield* Ur(Wn(Pa((function* (a) {
          let c = null;
          do
            c = a.next(yield c == null ? void 0 : c.value);
          while (!c.done);
        })(o[Symbol.iterator]())))));
      });
    }, r = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof _c ? i(t) : cs(t) ? s(t) : vi(t) ? t : i(t);
    return yield J(
      // otherwise if AsyncIterable, use it
      yield* Ur(Wn(Pa((function(o) {
        return Ae(this, arguments, function* () {
          let a = null;
          do
            a = yield J(o.next(yield yield J(tt(e, a))));
          while (!a.done);
        });
      })(r[Symbol.asyncIterator]()))))
    ), yield J(new e());
  });
}
const Vm = (e) => Ue(Int8Array, e), Pm = (e) => Ue(Int16Array, e), km = (e) => Ue(Int32Array, e), Ef = (e) => Ue(Uint8Array, e), jm = (e) => Ue(Uint16Array, e), $m = (e) => Ue(Uint32Array, e), zm = (e) => Ue(Float32Array, e), Wm = (e) => Ue(Float64Array, e), Hm = (e) => Ue(Uint8ClampedArray, e);
function mc(e, t, n) {
  if (e !== 0) {
    n = n.slice(0, t);
    for (let i = -1, s = n.length; ++i < s; )
      n[i] += e;
  }
  return n.subarray(0, t);
}
function Of(e, t) {
  let n = 0;
  const i = e.length;
  if (i !== t.length)
    return !1;
  if (i > 0)
    do
      if (e[n] !== t[n])
        return !1;
    while (++n < i);
  return !0;
}
const Ym = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compareArrayLike: Of,
  joinUint8Arrays: xe,
  memcpy: co,
  rebaseValueOffsets: mc,
  toArrayBufferView: tt,
  toArrayBufferViewAsyncIterator: Ue,
  toArrayBufferViewIterator: cn,
  toBigInt64Array: Va,
  toBigUint64Array: Nm,
  toFloat32Array: Dm,
  toFloat32ArrayAsyncIterator: zm,
  toFloat32ArrayIterator: Cm,
  toFloat64Array: Tm,
  toFloat64ArrayAsyncIterator: Wm,
  toFloat64ArrayIterator: xm,
  toInt16Array: Sm,
  toInt16ArrayAsyncIterator: Pm,
  toInt16ArrayIterator: Fm,
  toInt32Array: Ri,
  toInt32ArrayAsyncIterator: km,
  toInt32ArrayIterator: Rm,
  toInt8Array: Im,
  toInt8ArrayAsyncIterator: Vm,
  toInt8ArrayIterator: Bm,
  toUint16Array: Em,
  toUint16ArrayAsyncIterator: jm,
  toUint16ArrayIterator: Lm,
  toUint32Array: Om,
  toUint32ArrayAsyncIterator: $m,
  toUint32ArrayIterator: Mm,
  toUint8Array: Z,
  toUint8ArrayAsyncIterator: Ef,
  toUint8ArrayIterator: Sf,
  toUint8ClampedArray: Am,
  toUint8ClampedArrayAsyncIterator: Hm,
  toUint8ClampedArrayIterator: Um
}, Symbol.toStringTag, { value: "Module" })), ue = {
  fromIterable(e) {
    return Or(Km(e));
  },
  fromAsyncIterable(e) {
    return Or(Gm(e));
  },
  fromDOMStream(e) {
    return Or(qm(e));
  },
  fromNodeStream(e) {
    return Or(Qm(e));
  },
  // @ts-ignore
  toDOMStream(e, t) {
    throw new Error('"toDOMStream" not available in this environment');
  },
  // @ts-ignore
  toNodeStream(e, t) {
    throw new Error('"toNodeStream" not available in this environment');
  }
}, Or = (e) => (e.next(), e);
function* Km(e) {
  let t, n = !1, i = [], s, r, o, a = 0;
  function c() {
    return r === "peek" ? xe(i, o)[0] : ([s, i, a] = xe(i, o), s);
  }
  ({ cmd: r, size: o } = (yield null) || { cmd: "read", size: 0 });
  const l = Sf(e)[Symbol.iterator]();
  try {
    do
      if ({ done: t, value: s } = Number.isNaN(o - a) ? l.next() : l.next(o - a), !t && s.byteLength > 0 && (i.push(s), a += s.byteLength), t || o <= a)
        do
          ({ cmd: r, size: o } = yield c());
        while (o < a);
    while (!t);
  } catch (u) {
    (n = !0) && typeof l.throw == "function" && l.throw(u);
  } finally {
    n === !1 && typeof l.return == "function" && l.return(null);
  }
  return null;
}
function Gm(e) {
  return Ae(this, arguments, function* () {
    let n, i = !1, s = [], r, o, a, c = 0;
    function l() {
      return o === "peek" ? xe(s, a)[0] : ([r, s, c] = xe(s, a), r);
    }
    ({ cmd: o, size: a } = (yield yield J(null)) || { cmd: "read", size: 0 });
    const u = Ef(e)[Symbol.asyncIterator]();
    try {
      do
        if ({ done: n, value: r } = Number.isNaN(a - c) ? yield J(u.next()) : yield J(u.next(a - c)), !n && r.byteLength > 0 && (s.push(r), c += r.byteLength), n || a <= c)
          do
            ({ cmd: o, size: a } = yield yield J(l()));
          while (a < c);
      while (!n);
    } catch (d) {
      (i = !0) && typeof u.throw == "function" && (yield J(u.throw(d)));
    } finally {
      i === !1 && typeof u.return == "function" && (yield J(u.return(new Uint8Array(0))));
    }
    return yield J(null);
  });
}
function qm(e) {
  return Ae(this, arguments, function* () {
    let n = !1, i = !1, s = [], r, o, a, c = 0;
    function l() {
      return o === "peek" ? xe(s, a)[0] : ([r, s, c] = xe(s, a), r);
    }
    ({ cmd: o, size: a } = (yield yield J(null)) || { cmd: "read", size: 0 });
    const u = new Jm(e);
    try {
      do
        if ({ done: n, value: r } = Number.isNaN(a - c) ? yield J(u.read()) : yield J(u.read(a - c)), !n && r.byteLength > 0 && (s.push(Z(r)), c += r.byteLength), n || a <= c)
          do
            ({ cmd: o, size: a } = yield yield J(l()));
          while (a < c);
      while (!n);
    } catch (d) {
      (i = !0) && (yield J(u.cancel(d)));
    } finally {
      i === !1 ? yield J(u.cancel()) : e.locked && u.releaseLock();
    }
    return yield J(null);
  });
}
class Jm {
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
    return F(this, void 0, void 0, function* () {
      const { reader: n, source: i } = this;
      n && (yield n.cancel(t).catch(() => {
      })), i && i.locked && this.releaseLock();
    });
  }
  read(t) {
    return F(this, void 0, void 0, function* () {
      if (t === 0)
        return { done: this.reader == null, value: new Uint8Array(0) };
      const n = yield this.reader.read();
      return !n.done && (n.value = Z(n)), n;
    });
  }
}
const ca = (e, t) => {
  const n = (s) => i([t, s]);
  let i;
  return [t, n, new Promise((s) => (i = s) && e.once(t, n))];
};
function Qm(e) {
  return Ae(this, arguments, function* () {
    const n = [];
    let i = "error", s = !1, r = null, o, a, c = 0, l = [], u;
    function d() {
      return o === "peek" ? xe(l, a)[0] : ([u, l, c] = xe(l, a), u);
    }
    if ({ cmd: o, size: a } = (yield yield J(null)) || { cmd: "read", size: 0 }, e.isTTY)
      return yield yield J(new Uint8Array(0)), yield J(null);
    try {
      n[0] = ca(e, "end"), n[1] = ca(e, "error");
      do {
        if (n[2] = ca(e, "readable"), [i, r] = yield J(Promise.race(n.map((_) => _[2]))), i === "error")
          break;
        if ((s = i === "end") || (Number.isFinite(a - c) ? (u = Z(e.read(a - c)), u.byteLength < a - c && (u = Z(e.read()))) : u = Z(e.read()), u.byteLength > 0 && (l.push(u), c += u.byteLength)), s || a <= c)
          do
            ({ cmd: o, size: a } = yield yield J(d()));
          while (a < c);
      } while (!s);
    } finally {
      yield J(y(n, i === "error" ? r : null));
    }
    return yield J(null);
    function y(_, D) {
      return u = l = null, new Promise((B, Et) => {
        for (const [ot, at] of _)
          e.off(ot, at);
        try {
          const ot = e.destroy;
          ot && ot.call(e, D), D = void 0;
        } catch (ot) {
          D = ot || D;
        } finally {
          D != null ? Et(D) : B();
        }
      });
    }
  });
}
var Ot;
(function(e) {
  e[e.V1 = 0] = "V1", e[e.V2 = 1] = "V2", e[e.V3 = 2] = "V3", e[e.V4 = 3] = "V4", e[e.V5 = 4] = "V5";
})(Ot || (Ot = {}));
var Tt;
(function(e) {
  e[e.Sparse = 0] = "Sparse", e[e.Dense = 1] = "Dense";
})(Tt || (Tt = {}));
var Dt;
(function(e) {
  e[e.HALF = 0] = "HALF", e[e.SINGLE = 1] = "SINGLE", e[e.DOUBLE = 2] = "DOUBLE";
})(Dt || (Dt = {}));
var Pt;
(function(e) {
  e[e.DAY = 0] = "DAY", e[e.MILLISECOND = 1] = "MILLISECOND";
})(Pt || (Pt = {}));
var T;
(function(e) {
  e[e.SECOND = 0] = "SECOND", e[e.MILLISECOND = 1] = "MILLISECOND", e[e.MICROSECOND = 2] = "MICROSECOND", e[e.NANOSECOND = 3] = "NANOSECOND";
})(T || (T = {}));
var re;
(function(e) {
  e[e.YEAR_MONTH = 0] = "YEAR_MONTH", e[e.DAY_TIME = 1] = "DAY_TIME", e[e.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(re || (re = {}));
const la = 2, Je = 4, gn = 4, yt = 4, jn = new Int32Array(2), Bu = new Float32Array(jn.buffer), Fu = new Float64Array(jn.buffer), Nr = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var ka;
(function(e) {
  e[e.UTF8_BYTES = 1] = "UTF8_BYTES", e[e.UTF16_STRING = 2] = "UTF16_STRING";
})(ka || (ka = {}));
let Qi = class Nf {
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
    return new Nf(new Uint8Array(t));
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
    return jn[0] = this.readInt32(t), Bu[0];
  }
  readFloat64(t) {
    return jn[Nr ? 0 : 1] = this.readInt32(t), jn[Nr ? 1 : 0] = this.readInt32(t + 4), Fu[0];
  }
  writeInt8(t, n) {
    this.bytes_[t] = n;
  }
  writeUint8(t, n) {
    this.bytes_[t] = n;
  }
  writeInt16(t, n) {
    this.bytes_[t] = n, this.bytes_[t + 1] = n >> 8;
  }
  writeUint16(t, n) {
    this.bytes_[t] = n, this.bytes_[t + 1] = n >> 8;
  }
  writeInt32(t, n) {
    this.bytes_[t] = n, this.bytes_[t + 1] = n >> 8, this.bytes_[t + 2] = n >> 16, this.bytes_[t + 3] = n >> 24;
  }
  writeUint32(t, n) {
    this.bytes_[t] = n, this.bytes_[t + 1] = n >> 8, this.bytes_[t + 2] = n >> 16, this.bytes_[t + 3] = n >> 24;
  }
  writeInt64(t, n) {
    this.writeInt32(t, Number(BigInt.asIntN(32, n))), this.writeInt32(t + 4, Number(BigInt.asIntN(32, n >> BigInt(32))));
  }
  writeUint64(t, n) {
    this.writeUint32(t, Number(BigInt.asUintN(32, n))), this.writeUint32(t + 4, Number(BigInt.asUintN(32, n >> BigInt(32))));
  }
  writeFloat32(t, n) {
    Bu[0] = n, this.writeInt32(t, jn[0]);
  }
  writeFloat64(t, n) {
    Fu[0] = n, this.writeInt32(t, jn[Nr ? 0 : 1]), this.writeInt32(t + 4, jn[Nr ? 1 : 0]);
  }
  /**
   * Return the file identifier.   Behavior is undefined for FlatBuffers whose
   * schema does not include a file_identifier (likely points at padding or the
   * start of a the root vtable).
   */
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + Je + gn)
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let n = 0; n < gn; n++)
      t += String.fromCharCode(this.readInt8(this.position_ + Je + n));
    return t;
  }
  /**
   * Look up a field in the vtable, return an offset into the object, or 0 if the
   * field is not present.
   */
  __offset(t, n) {
    const i = t - this.readInt32(t);
    return n < this.readInt16(i) ? this.readInt16(i + n) : 0;
  }
  /**
   * Initialize any Table-derived type to point to the union at the given offset.
   */
  __union(t, n) {
    return t.bb_pos = n + this.readInt32(n), t.bb = this, t;
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
  __string(t, n) {
    t += this.readInt32(t);
    const i = this.readInt32(t);
    t += Je;
    const s = this.bytes_.subarray(t, t + i);
    return n === ka.UTF8_BYTES ? s : this.text_decoder_.decode(s);
  }
  /**
   * Handle unions that can contain string as its member, if a Table-derived type then initialize it,
   * if a string then return a new one
   *
   * WARNING: strings are immutable in JS so we can't change the string that the user gave us, this
   * makes the behaviour of __union_with_string different compared to __union
   */
  __union_with_string(t, n) {
    return typeof t == "string" ? this.__string(n) : this.__union(t, n);
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
    return t + this.readInt32(t) + Je;
  }
  /**
   * Get the length of a vector whose offset is stored at "offset" in this object.
   */
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != gn)
      throw new Error("FlatBuffers: file identifier must be length " + gn);
    for (let n = 0; n < gn; n++)
      if (t.charCodeAt(n) != this.readInt8(this.position() + Je + n))
        return !1;
    return !0;
  }
  /**
   * A helper function for generating list for obj api
   */
  createScalarList(t, n) {
    const i = [];
    for (let s = 0; s < n; ++s) {
      const r = t(s);
      r !== null && i.push(r);
    }
    return i;
  }
  /**
   * A helper function for generating list for obj api
   * @param listAccessor function that accepts an index and return data at that index
   * @param listLength listLength
   * @param res result list
   */
  createObjList(t, n) {
    const i = [];
    for (let s = 0; s < n; ++s) {
      const r = t(s);
      r !== null && i.push(r.unpack());
    }
    return i;
  }
}, Df = class Tf {
  /**
   * Create a FlatBufferBuilder.
   */
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null, this.text_encoder = new TextEncoder();
    let n;
    t ? n = t : n = 1024, this.bb = Qi.allocate(n), this.space = n;
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
  prep(t, n) {
    t > this.minalign && (this.minalign = t);
    const i = ~(this.bb.capacity() - this.space + n) + 1 & t - 1;
    for (; this.space < i + t + n; ) {
      const s = this.bb.capacity();
      this.bb = Tf.growByteBuffer(this.bb), this.space += this.bb.capacity() - s;
    }
    this.pad(i);
  }
  pad(t) {
    for (let n = 0; n < t; n++)
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
  addFieldInt8(t, n, i) {
    (this.force_defaults || n != i) && (this.addInt8(n), this.slot(t));
  }
  addFieldInt16(t, n, i) {
    (this.force_defaults || n != i) && (this.addInt16(n), this.slot(t));
  }
  addFieldInt32(t, n, i) {
    (this.force_defaults || n != i) && (this.addInt32(n), this.slot(t));
  }
  addFieldInt64(t, n, i) {
    (this.force_defaults || n !== i) && (this.addInt64(n), this.slot(t));
  }
  addFieldFloat32(t, n, i) {
    (this.force_defaults || n != i) && (this.addFloat32(n), this.slot(t));
  }
  addFieldFloat64(t, n, i) {
    (this.force_defaults || n != i) && (this.addFloat64(n), this.slot(t));
  }
  addFieldOffset(t, n, i) {
    (this.force_defaults || n != i) && (this.addOffset(n), this.slot(t));
  }
  /**
   * Structs are stored inline, so nothing additional is being added. `d` is always 0.
   */
  addFieldStruct(t, n, i) {
    n != i && (this.nested(n), this.slot(t));
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
    const n = t.capacity();
    if (n & 3221225472)
      throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
    const i = n << 1, s = Qi.allocate(i);
    return s.setPosition(i - n), s.bytes().set(t.bytes(), i - n), s;
  }
  /**
   * Adds on offset, relative to where it will be written.
   *
   * @param offset The offset to add.
   */
  addOffset(t) {
    this.prep(Je, 0), this.writeInt32(this.offset() - t + Je);
  }
  /**
   * Start encoding a new object in the buffer.  Users will not usually need to
   * call this directly. The FlatBuffers compiler will generate helper methods
   * that call this method internally.
   */
  startObject(t) {
    this.notNested(), this.vtable == null && (this.vtable = []), this.vtable_in_use = t;
    for (let n = 0; n < t; n++)
      this.vtable[n] = 0;
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
    let n = this.vtable_in_use - 1;
    for (; n >= 0 && this.vtable[n] == 0; n--)
      ;
    const i = n + 1;
    for (; n >= 0; n--)
      this.addInt16(this.vtable[n] != 0 ? t - this.vtable[n] : 0);
    const s = 2;
    this.addInt16(t - this.object_start);
    const r = (i + s) * la;
    this.addInt16(r);
    let o = 0;
    const a = this.space;
    t: for (n = 0; n < this.vtables.length; n++) {
      const c = this.bb.capacity() - this.vtables[n];
      if (r == this.bb.readInt16(c)) {
        for (let l = la; l < r; l += la)
          if (this.bb.readInt16(a + l) != this.bb.readInt16(c + l))
            continue t;
        o = this.vtables[n];
        break;
      }
    }
    return o ? (this.space = this.bb.capacity() - t, this.bb.writeInt32(this.space, o - t)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)), this.isNested = !1, t;
  }
  /**
   * Finalize a buffer, poiting to the given `root_table`.
   */
  finish(t, n, i) {
    const s = i ? yt : 0;
    if (n) {
      const r = n;
      if (this.prep(this.minalign, Je + gn + s), r.length != gn)
        throw new TypeError("FlatBuffers: file identifier must be length " + gn);
      for (let o = gn - 1; o >= 0; o--)
        this.writeInt8(r.charCodeAt(o));
    }
    this.prep(this.minalign, Je + s), this.addOffset(t), s && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
  }
  /**
   * Finalize a size prefixed buffer, pointing to the given `root_table`.
   */
  finishSizePrefixed(t, n) {
    this.finish(t, n, !0);
  }
  /**
   * This checks a required field has been set in a given table that has
   * just been constructed.
   */
  requiredField(t, n) {
    const i = this.bb.capacity() - t, s = i - this.bb.readInt32(i);
    if (!(n < this.bb.readInt16(s) && this.bb.readInt16(s + n) != 0))
      throw new TypeError("FlatBuffers: field " + n + " must be set");
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
  startVector(t, n, i) {
    this.notNested(), this.vector_num_elems = n, this.prep(Je, t * n), this.prep(i, t * n);
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
    const n = this.createString(t);
    return this.string_maps.set(t, n), n;
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
    let n;
    return t instanceof Uint8Array ? n = t : n = this.text_encoder.encode(t), this.addInt8(0), this.startVector(1, n.length, 1), this.bb.setPosition(this.space -= n.length), this.bb.bytes().set(n, this.space), this.endVector();
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
    const n = [];
    for (let i = 0; i < t.length; ++i) {
      const s = t[i];
      if (s !== null)
        n.push(this.createObjectOffset(s));
      else
        throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
    }
    return n;
  }
  createStructOffsetList(t, n) {
    return n(this, t.length), this.createObjectOffsetList(t.slice().reverse()), this.endVector();
  }
};
var lo;
(function(e) {
  e[e.BUFFER = 0] = "BUFFER";
})(lo || (lo = {}));
var uo;
(function(e) {
  e[e.LZ4_FRAME = 0] = "LZ4_FRAME", e[e.ZSTD = 1] = "ZSTD";
})(uo || (uo = {}));
class $n {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsBodyCompression(t, n) {
    return (n || new $n()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, n) {
    return t.setPosition(t.position() + yt), (n || new $n()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Compressor library.
   * For LZ4_FRAME, each compressed buffer must consist of a single frame.
   */
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : uo.LZ4_FRAME;
  }
  /**
   * Indicates the way the record batch body was compressed
   */
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : lo.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, n) {
    t.addFieldInt8(0, n, uo.LZ4_FRAME);
  }
  static addMethod(t, n) {
    t.addFieldInt8(1, n, lo.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, n, i) {
    return $n.startBodyCompression(t), $n.addCodec(t, n), $n.addMethod(t, i), $n.endBodyCompression(t);
  }
}
class Af {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
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
  static createBuffer(t, n, i) {
    return t.prep(8, 16), t.writeInt64(BigInt(i ?? 0)), t.writeInt64(BigInt(n ?? 0)), t.offset();
  }
}
let Bf = class {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
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
  static createFieldNode(t, n, i) {
    return t.prep(8, 16), t.writeInt64(BigInt(i ?? 0)), t.writeInt64(BigInt(n ?? 0)), t.offset();
  }
}, pn = class ja {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsRecordBatch(t, n) {
    return (n || new ja()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, n) {
    return t.setPosition(t.position() + yt), (n || new ja()).__init(t.readInt32(t.position()) + t.position(), t);
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
  nodes(t, n) {
    const i = this.bb.__offset(this.bb_pos, 6);
    return i ? (n || new Bf()).__init(this.bb.__vector(this.bb_pos + i) + t * 16, this.bb) : null;
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
  buffers(t, n) {
    const i = this.bb.__offset(this.bb_pos, 8);
    return i ? (n || new Af()).__init(this.bb.__vector(this.bb_pos + i) + t * 16, this.bb) : null;
  }
  buffersLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Optional compression of the message body
   */
  compression(t) {
    const n = this.bb.__offset(this.bb_pos, 10);
    return n ? (t || new $n()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
  }
  static startRecordBatch(t) {
    t.startObject(4);
  }
  static addLength(t, n) {
    t.addFieldInt64(0, n, BigInt("0"));
  }
  static addNodes(t, n) {
    t.addFieldOffset(1, n, 0);
  }
  static startNodesVector(t, n) {
    t.startVector(16, n, 8);
  }
  static addBuffers(t, n) {
    t.addFieldOffset(2, n, 0);
  }
  static startBuffersVector(t, n) {
    t.startVector(16, n, 8);
  }
  static addCompression(t, n) {
    t.addFieldOffset(3, n, 0);
  }
  static endRecordBatch(t) {
    return t.endObject();
  }
}, Li = class $a {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsDictionaryBatch(t, n) {
    return (n || new $a()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, n) {
    return t.setPosition(t.position() + yt), (n || new $a()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  data(t) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (t || new pn()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
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
  static addId(t, n) {
    t.addFieldInt64(0, n, BigInt("0"));
  }
  static addData(t, n) {
    t.addFieldOffset(1, n, 0);
  }
  static addIsDelta(t, n) {
    t.addFieldInt8(2, +n, 0);
  }
  static endDictionaryBatch(t) {
    return t.endObject();
  }
};
var Zi;
(function(e) {
  e[e.Little = 0] = "Little", e[e.Big = 1] = "Big";
})(Zi || (Zi = {}));
var fo;
(function(e) {
  e[e.DenseArray = 0] = "DenseArray";
})(fo || (fo = {}));
class fe {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsInt(t, n) {
    return (n || new fe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInt(t, n) {
    return t.setPosition(t.position() + yt), (n || new fe()).__init(t.readInt32(t.position()) + t.position(), t);
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
  static addBitWidth(t, n) {
    t.addFieldInt32(0, n, 0);
  }
  static addIsSigned(t, n) {
    t.addFieldInt8(1, +n, 0);
  }
  static endInt(t) {
    return t.endObject();
  }
  static createInt(t, n, i) {
    return fe.startInt(t), fe.addBitWidth(t, n), fe.addIsSigned(t, i), fe.endInt(t);
  }
}
class _n {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsDictionaryEncoding(t, n) {
    return (n || new _n()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, n) {
    return t.setPosition(t.position() + yt), (n || new _n()).__init(t.readInt32(t.position()) + t.position(), t);
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
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (t || new fe()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
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
    return t ? this.bb.readInt16(this.bb_pos + t) : fo.DenseArray;
  }
  static startDictionaryEncoding(t) {
    t.startObject(4);
  }
  static addId(t, n) {
    t.addFieldInt64(0, n, BigInt("0"));
  }
  static addIndexType(t, n) {
    t.addFieldOffset(1, n, 0);
  }
  static addIsOrdered(t, n) {
    t.addFieldInt8(2, +n, 0);
  }
  static addDictionaryKind(t, n) {
    t.addFieldInt16(3, n, fo.DenseArray);
  }
  static endDictionaryEncoding(t) {
    return t.endObject();
  }
}
class Rt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsKeyValue(t, n) {
    return (n || new Rt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsKeyValue(t, n) {
    return t.setPosition(t.position() + yt), (n || new Rt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  key(t) {
    const n = this.bb.__offset(this.bb_pos, 4);
    return n ? this.bb.__string(this.bb_pos + n, t) : null;
  }
  value(t) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? this.bb.__string(this.bb_pos + n, t) : null;
  }
  static startKeyValue(t) {
    t.startObject(2);
  }
  static addKey(t, n) {
    t.addFieldOffset(0, n, 0);
  }
  static addValue(t, n) {
    t.addFieldOffset(1, n, 0);
  }
  static endKeyValue(t) {
    return t.endObject();
  }
  static createKeyValue(t, n, i) {
    return Rt.startKeyValue(t), Rt.addKey(t, n), Rt.addValue(t, i), Rt.endKeyValue(t);
  }
}
let Ru = class vs {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsBinary(t, n) {
    return (n || new vs()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, n) {
    return t.setPosition(t.position() + yt), (n || new vs()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return vs.startBinary(t), vs.endBinary(t);
  }
}, Lu = class ws {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsBool(t, n) {
    return (n || new ws()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, n) {
    return t.setPosition(t.position() + yt), (n || new ws()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return ws.startBool(t), ws.endBool(t);
  }
}, Vr = class Mi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsDate(t, n) {
    return (n || new Mi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, n) {
    return t.setPosition(t.position() + yt), (n || new Mi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Pt.MILLISECOND;
  }
  static startDate(t) {
    t.startObject(1);
  }
  static addUnit(t, n) {
    t.addFieldInt16(0, n, Pt.MILLISECOND);
  }
  static endDate(t) {
    return t.endObject();
  }
  static createDate(t, n) {
    return Mi.startDate(t), Mi.addUnit(t, n), Mi.endDate(t);
  }
}, Ci = class Un {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsDecimal(t, n) {
    return (n || new Un()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDecimal(t, n) {
    return t.setPosition(t.position() + yt), (n || new Un()).__init(t.readInt32(t.position()) + t.position(), t);
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
  static addPrecision(t, n) {
    t.addFieldInt32(0, n, 0);
  }
  static addScale(t, n) {
    t.addFieldInt32(1, n, 0);
  }
  static addBitWidth(t, n) {
    t.addFieldInt32(2, n, 128);
  }
  static endDecimal(t) {
    return t.endObject();
  }
  static createDecimal(t, n, i, s) {
    return Un.startDecimal(t), Un.addPrecision(t, n), Un.addScale(t, i), Un.addBitWidth(t, s), Un.endDecimal(t);
  }
}, Pr = class xi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsDuration(t, n) {
    return (n || new xi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDuration(t, n) {
    return t.setPosition(t.position() + yt), (n || new xi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : T.MILLISECOND;
  }
  static startDuration(t) {
    t.startObject(1);
  }
  static addUnit(t, n) {
    t.addFieldInt16(0, n, T.MILLISECOND);
  }
  static endDuration(t) {
    return t.endObject();
  }
  static createDuration(t, n) {
    return xi.startDuration(t), xi.addUnit(t, n), xi.endDuration(t);
  }
}, kr = class Ui {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsFixedSizeBinary(t, n) {
    return (n || new Ui()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, n) {
    return t.setPosition(t.position() + yt), (n || new Ui()).__init(t.readInt32(t.position()) + t.position(), t);
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
  static addByteWidth(t, n) {
    t.addFieldInt32(0, n, 0);
  }
  static endFixedSizeBinary(t) {
    return t.endObject();
  }
  static createFixedSizeBinary(t, n) {
    return Ui.startFixedSizeBinary(t), Ui.addByteWidth(t, n), Ui.endFixedSizeBinary(t);
  }
}, jr = class Vi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsFixedSizeList(t, n) {
    return (n || new Vi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, n) {
    return t.setPosition(t.position() + yt), (n || new Vi()).__init(t.readInt32(t.position()) + t.position(), t);
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
  static addListSize(t, n) {
    t.addFieldInt32(0, n, 0);
  }
  static endFixedSizeList(t) {
    return t.endObject();
  }
  static createFixedSizeList(t, n) {
    return Vi.startFixedSizeList(t), Vi.addListSize(t, n), Vi.endFixedSizeList(t);
  }
};
class Qe {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsFloatingPoint(t, n) {
    return (n || new Qe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, n) {
    return t.setPosition(t.position() + yt), (n || new Qe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Dt.HALF;
  }
  static startFloatingPoint(t) {
    t.startObject(1);
  }
  static addPrecision(t, n) {
    t.addFieldInt16(0, n, Dt.HALF);
  }
  static endFloatingPoint(t) {
    return t.endObject();
  }
  static createFloatingPoint(t, n) {
    return Qe.startFloatingPoint(t), Qe.addPrecision(t, n), Qe.endFloatingPoint(t);
  }
}
class Ze {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsInterval(t, n) {
    return (n || new Ze()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, n) {
    return t.setPosition(t.position() + yt), (n || new Ze()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : re.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, n) {
    t.addFieldInt16(0, n, re.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, n) {
    return Ze.startInterval(t), Ze.addUnit(t, n), Ze.endInterval(t);
  }
}
let Mu = class Is {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsLargeBinary(t, n) {
    return (n || new Is()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeBinary(t, n) {
    return t.setPosition(t.position() + yt), (n || new Is()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeBinary(t) {
    t.startObject(0);
  }
  static endLargeBinary(t) {
    return t.endObject();
  }
  static createLargeBinary(t) {
    return Is.startLargeBinary(t), Is.endLargeBinary(t);
  }
}, Cu = class Ss {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsLargeUtf8(t, n) {
    return (n || new Ss()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeUtf8(t, n) {
    return t.setPosition(t.position() + yt), (n || new Ss()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeUtf8(t) {
    t.startObject(0);
  }
  static endLargeUtf8(t) {
    return t.endObject();
  }
  static createLargeUtf8(t) {
    return Ss.startLargeUtf8(t), Ss.endLargeUtf8(t);
  }
}, xu = class Es {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsList(t, n) {
    return (n || new Es()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, n) {
    return t.setPosition(t.position() + yt), (n || new Es()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return Es.startList(t), Es.endList(t);
  }
}, $r = class Pi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsMap(t, n) {
    return (n || new Pi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, n) {
    return t.setPosition(t.position() + yt), (n || new Pi()).__init(t.readInt32(t.position()) + t.position(), t);
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
  static addKeysSorted(t, n) {
    t.addFieldInt8(0, +n, 0);
  }
  static endMap(t) {
    return t.endObject();
  }
  static createMap(t, n) {
    return Pi.startMap(t), Pi.addKeysSorted(t, n), Pi.endMap(t);
  }
}, Uu = class Os {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsNull(t, n) {
    return (n || new Os()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, n) {
    return t.setPosition(t.position() + yt), (n || new Os()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return Os.startNull(t), Os.endNull(t);
  }
};
class ci {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsStruct_(t, n) {
    return (n || new ci()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsStruct_(t, n) {
    return t.setPosition(t.position() + yt), (n || new ci()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startStruct_(t) {
    t.startObject(0);
  }
  static endStruct_(t) {
    return t.endObject();
  }
  static createStruct_(t) {
    return ci.startStruct_(t), ci.endStruct_(t);
  }
}
class be {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsTime(t, n) {
    return (n || new be()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTime(t, n) {
    return t.setPosition(t.position() + yt), (n || new be()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : T.MILLISECOND;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 32;
  }
  static startTime(t) {
    t.startObject(2);
  }
  static addUnit(t, n) {
    t.addFieldInt16(0, n, T.MILLISECOND);
  }
  static addBitWidth(t, n) {
    t.addFieldInt32(1, n, 32);
  }
  static endTime(t) {
    return t.endObject();
  }
  static createTime(t, n, i) {
    return be.startTime(t), be.addUnit(t, n), be.addBitWidth(t, i), be.endTime(t);
  }
}
class ve {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsTimestamp(t, n) {
    return (n || new ve()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTimestamp(t, n) {
    return t.setPosition(t.position() + yt), (n || new ve()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : T.SECOND;
  }
  timezone(t) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? this.bb.__string(this.bb_pos + n, t) : null;
  }
  static startTimestamp(t) {
    t.startObject(2);
  }
  static addUnit(t, n) {
    t.addFieldInt16(0, n, T.SECOND);
  }
  static addTimezone(t, n) {
    t.addFieldOffset(1, n, 0);
  }
  static endTimestamp(t) {
    return t.endObject();
  }
  static createTimestamp(t, n, i) {
    return ve.startTimestamp(t), ve.addUnit(t, n), ve.addTimezone(t, i), ve.endTimestamp(t);
  }
}
class ne {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsUnion(t, n) {
    return (n || new ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUnion(t, n) {
    return t.setPosition(t.position() + yt), (n || new ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  mode() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Tt.Sparse;
  }
  typeIds(t) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? this.bb.readInt32(this.bb.__vector(this.bb_pos + n) + t * 4) : 0;
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
  static addMode(t, n) {
    t.addFieldInt16(0, n, Tt.Sparse);
  }
  static addTypeIds(t, n) {
    t.addFieldOffset(1, n, 0);
  }
  static createTypeIdsVector(t, n) {
    t.startVector(4, n.length, 4);
    for (let i = n.length - 1; i >= 0; i--)
      t.addInt32(n[i]);
    return t.endVector();
  }
  static startTypeIdsVector(t, n) {
    t.startVector(4, n, 4);
  }
  static endUnion(t) {
    return t.endObject();
  }
  static createUnion(t, n, i) {
    return ne.startUnion(t), ne.addMode(t, n), ne.addTypeIds(t, i), ne.endUnion(t);
  }
}
let Vu = class Ns {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsUtf8(t, n) {
    return (n || new Ns()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, n) {
    return t.setPosition(t.position() + yt), (n || new Ns()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return Ns.startUtf8(t), Ns.endUtf8(t);
  }
};
var G;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.Null = 1] = "Null", e[e.Int = 2] = "Int", e[e.FloatingPoint = 3] = "FloatingPoint", e[e.Binary = 4] = "Binary", e[e.Utf8 = 5] = "Utf8", e[e.Bool = 6] = "Bool", e[e.Decimal = 7] = "Decimal", e[e.Date = 8] = "Date", e[e.Time = 9] = "Time", e[e.Timestamp = 10] = "Timestamp", e[e.Interval = 11] = "Interval", e[e.List = 12] = "List", e[e.Struct_ = 13] = "Struct_", e[e.Union = 14] = "Union", e[e.FixedSizeBinary = 15] = "FixedSizeBinary", e[e.FixedSizeList = 16] = "FixedSizeList", e[e.Map = 17] = "Map", e[e.Duration = 18] = "Duration", e[e.LargeBinary = 19] = "LargeBinary", e[e.LargeUtf8 = 20] = "LargeUtf8", e[e.LargeList = 21] = "LargeList", e[e.RunEndEncoded = 22] = "RunEndEncoded";
})(G || (G = {}));
let me = class zr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsField(t, n) {
    return (n || new zr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, n) {
    return t.setPosition(t.position() + yt), (n || new zr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  name(t) {
    const n = this.bb.__offset(this.bb_pos, 4);
    return n ? this.bb.__string(this.bb_pos + n, t) : null;
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
    return t ? this.bb.readUint8(this.bb_pos + t) : G.NONE;
  }
  /**
   * This is the type of the decoded value if the field is dictionary encoded.
   */
  type(t) {
    const n = this.bb.__offset(this.bb_pos, 10);
    return n ? this.bb.__union(t, this.bb_pos + n) : null;
  }
  /**
   * Present only if the field is dictionary encoded.
   */
  dictionary(t) {
    const n = this.bb.__offset(this.bb_pos, 12);
    return n ? (t || new _n()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
  }
  /**
   * children apply only to nested data types like Struct, List and Union. For
   * primitive types children will have length 0.
   */
  children(t, n) {
    const i = this.bb.__offset(this.bb_pos, 14);
    return i ? (n || new zr()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  childrenLength() {
    const t = this.bb.__offset(this.bb_pos, 14);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, n) {
    const i = this.bb.__offset(this.bb_pos, 16);
    return i ? (n || new Rt()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 16);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startField(t) {
    t.startObject(7);
  }
  static addName(t, n) {
    t.addFieldOffset(0, n, 0);
  }
  static addNullable(t, n) {
    t.addFieldInt8(1, +n, 0);
  }
  static addTypeType(t, n) {
    t.addFieldInt8(2, n, G.NONE);
  }
  static addType(t, n) {
    t.addFieldOffset(3, n, 0);
  }
  static addDictionary(t, n) {
    t.addFieldOffset(4, n, 0);
  }
  static addChildren(t, n) {
    t.addFieldOffset(5, n, 0);
  }
  static createChildrenVector(t, n) {
    t.startVector(4, n.length, 4);
    for (let i = n.length - 1; i >= 0; i--)
      t.addOffset(n[i]);
    return t.endVector();
  }
  static startChildrenVector(t, n) {
    t.startVector(4, n, 4);
  }
  static addCustomMetadata(t, n) {
    t.addFieldOffset(6, n, 0);
  }
  static createCustomMetadataVector(t, n) {
    t.startVector(4, n.length, 4);
    for (let i = n.length - 1; i >= 0; i--)
      t.addOffset(n[i]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, n) {
    t.startVector(4, n, 4);
  }
  static endField(t) {
    return t.endObject();
  }
}, Ke = class fn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsSchema(t, n) {
    return (n || new fn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, n) {
    return t.setPosition(t.position() + yt), (n || new fn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * endianness of the buffer
   * it is Little Endian by default
   * if endianness doesn't match the underlying system then the vectors need to be converted
   */
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Zi.Little;
  }
  fields(t, n) {
    const i = this.bb.__offset(this.bb_pos, 6);
    return i ? (n || new me()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  fieldsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, n) {
    const i = this.bb.__offset(this.bb_pos, 8);
    return i ? (n || new Rt()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Features used in the stream/file.
   */
  features(t) {
    const n = this.bb.__offset(this.bb_pos, 10);
    return n ? this.bb.readInt64(this.bb.__vector(this.bb_pos + n) + t * 8) : BigInt(0);
  }
  featuresLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startSchema(t) {
    t.startObject(4);
  }
  static addEndianness(t, n) {
    t.addFieldInt16(0, n, Zi.Little);
  }
  static addFields(t, n) {
    t.addFieldOffset(1, n, 0);
  }
  static createFieldsVector(t, n) {
    t.startVector(4, n.length, 4);
    for (let i = n.length - 1; i >= 0; i--)
      t.addOffset(n[i]);
    return t.endVector();
  }
  static startFieldsVector(t, n) {
    t.startVector(4, n, 4);
  }
  static addCustomMetadata(t, n) {
    t.addFieldOffset(2, n, 0);
  }
  static createCustomMetadataVector(t, n) {
    t.startVector(4, n.length, 4);
    for (let i = n.length - 1; i >= 0; i--)
      t.addOffset(n[i]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, n) {
    t.startVector(4, n, 4);
  }
  static addFeatures(t, n) {
    t.addFieldOffset(3, n, 0);
  }
  static createFeaturesVector(t, n) {
    t.startVector(8, n.length, 8);
    for (let i = n.length - 1; i >= 0; i--)
      t.addInt64(n[i]);
    return t.endVector();
  }
  static startFeaturesVector(t, n) {
    t.startVector(8, n, 8);
  }
  static endSchema(t) {
    return t.endObject();
  }
  static finishSchemaBuffer(t, n) {
    t.finish(n);
  }
  static finishSizePrefixedSchemaBuffer(t, n) {
    t.finish(n, void 0, !0);
  }
  static createSchema(t, n, i, s, r) {
    return fn.startSchema(t), fn.addEndianness(t, n), fn.addFields(t, i), fn.addCustomMetadata(t, s), fn.addFeatures(t, r), fn.endSchema(t);
  }
};
var lt;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.Schema = 1] = "Schema", e[e.DictionaryBatch = 2] = "DictionaryBatch", e[e.RecordBatch = 3] = "RecordBatch", e[e.Tensor = 4] = "Tensor", e[e.SparseTensor = 5] = "SparseTensor";
})(lt || (lt = {}));
var h;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.Null = 1] = "Null", e[e.Int = 2] = "Int", e[e.Float = 3] = "Float", e[e.Binary = 4] = "Binary", e[e.Utf8 = 5] = "Utf8", e[e.Bool = 6] = "Bool", e[e.Decimal = 7] = "Decimal", e[e.Date = 8] = "Date", e[e.Time = 9] = "Time", e[e.Timestamp = 10] = "Timestamp", e[e.Interval = 11] = "Interval", e[e.List = 12] = "List", e[e.Struct = 13] = "Struct", e[e.Union = 14] = "Union", e[e.FixedSizeBinary = 15] = "FixedSizeBinary", e[e.FixedSizeList = 16] = "FixedSizeList", e[e.Map = 17] = "Map", e[e.Duration = 18] = "Duration", e[e.LargeBinary = 19] = "LargeBinary", e[e.LargeUtf8 = 20] = "LargeUtf8", e[e.Dictionary = -1] = "Dictionary", e[e.Int8 = -2] = "Int8", e[e.Int16 = -3] = "Int16", e[e.Int32 = -4] = "Int32", e[e.Int64 = -5] = "Int64", e[e.Uint8 = -6] = "Uint8", e[e.Uint16 = -7] = "Uint16", e[e.Uint32 = -8] = "Uint32", e[e.Uint64 = -9] = "Uint64", e[e.Float16 = -10] = "Float16", e[e.Float32 = -11] = "Float32", e[e.Float64 = -12] = "Float64", e[e.DateDay = -13] = "DateDay", e[e.DateMillisecond = -14] = "DateMillisecond", e[e.TimestampSecond = -15] = "TimestampSecond", e[e.TimestampMillisecond = -16] = "TimestampMillisecond", e[e.TimestampMicrosecond = -17] = "TimestampMicrosecond", e[e.TimestampNanosecond = -18] = "TimestampNanosecond", e[e.TimeSecond = -19] = "TimeSecond", e[e.TimeMillisecond = -20] = "TimeMillisecond", e[e.TimeMicrosecond = -21] = "TimeMicrosecond", e[e.TimeNanosecond = -22] = "TimeNanosecond", e[e.DenseUnion = -23] = "DenseUnion", e[e.SparseUnion = -24] = "SparseUnion", e[e.IntervalDayTime = -25] = "IntervalDayTime", e[e.IntervalYearMonth = -26] = "IntervalYearMonth", e[e.DurationSecond = -27] = "DurationSecond", e[e.DurationMillisecond = -28] = "DurationMillisecond", e[e.DurationMicrosecond = -29] = "DurationMicrosecond", e[e.DurationNanosecond = -30] = "DurationNanosecond";
})(h || (h = {}));
var Oe;
(function(e) {
  e[e.OFFSET = 0] = "OFFSET", e[e.DATA = 1] = "DATA", e[e.VALIDITY = 2] = "VALIDITY", e[e.TYPE = 3] = "TYPE";
})(Oe || (Oe = {}));
const Zm = void 0;
function Gn(e) {
  if (e === null)
    return "null";
  if (e === Zm)
    return "undefined";
  switch (typeof e) {
    case "number":
      return `${e}`;
    case "bigint":
      return `${e}`;
    case "string":
      return `"${e}"`;
  }
  return typeof e[Symbol.toPrimitive] == "function" ? e[Symbol.toPrimitive]("string") : ArrayBuffer.isView(e) ? e instanceof BigInt64Array || e instanceof BigUint64Array ? `[${[...e].map((t) => Gn(t))}]` : `[${e}]` : ArrayBuffer.isView(e) ? `[${e}]` : JSON.stringify(e, (t, n) => typeof n == "bigint" ? `${n}` : n);
}
const Xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  valueToString: Gn
}, Symbol.toStringTag, { value: "Module" }));
function vt(e) {
  if (typeof e == "bigint" && (e < Number.MIN_SAFE_INTEGER || e > Number.MAX_SAFE_INTEGER))
    throw new TypeError(`${e} is not safe to convert to a number.`);
  return Number(e);
}
function Ff(e, t) {
  return vt(e / t) + vt(e % t) / vt(t);
}
const Rf = Symbol.for("isArrowBigNum");
function Ve(e, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(tt(this.TypedArray, e), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(e, ...t), this.constructor.prototype);
}
Ve.prototype[Rf] = !0;
Ve.prototype.toJSON = function() {
  return `"${Xi(this)}"`;
};
Ve.prototype.valueOf = function(e) {
  return bc(this, e);
};
Ve.prototype.toString = function() {
  return Xi(this);
};
Ve.prototype[Symbol.toPrimitive] = function(e = "default") {
  switch (e) {
    case "number":
      return bc(this);
    case "string":
      return Xi(this);
    case "default":
      return Lf(this);
  }
  return Xi(this);
};
function Yi(...e) {
  return Ve.apply(this, e);
}
function Ki(...e) {
  return Ve.apply(this, e);
}
function js(...e) {
  return Ve.apply(this, e);
}
Object.setPrototypeOf(Yi.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(Ki.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(js.prototype, Object.create(Uint32Array.prototype));
Object.assign(Yi.prototype, Ve.prototype, { constructor: Yi, signed: !0, TypedArray: Int32Array, BigIntArray: BigInt64Array });
Object.assign(Ki.prototype, Ve.prototype, { constructor: Ki, signed: !1, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
Object.assign(js.prototype, Ve.prototype, { constructor: js, signed: !0, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
const tb = BigInt(4294967296) * BigInt(4294967296), eb = tb - BigInt(1);
function bc(e, t) {
  const { buffer: n, byteOffset: i, byteLength: s, signed: r } = e, o = new BigUint64Array(n, i, s / 8), a = r && o.at(-1) & BigInt(1) << BigInt(63);
  let c = BigInt(0), l = 0;
  if (a) {
    for (const u of o)
      c |= (u ^ eb) * (BigInt(1) << BigInt(64 * l++));
    c *= BigInt(-1), c -= BigInt(1);
  } else
    for (const u of o)
      c |= u * (BigInt(1) << BigInt(64 * l++));
  if (typeof t == "number") {
    const u = BigInt(Math.pow(10, t)), d = c / u, y = c % u;
    return vt(d) + vt(y) / vt(u);
  }
  return vt(c);
}
function Xi(e) {
  if (e.byteLength === 8)
    return `${new e.BigIntArray(e.buffer, e.byteOffset, 1)[0]}`;
  if (!e.signed)
    return ua(e);
  let t = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2);
  if (new Int16Array([t.at(-1)])[0] >= 0)
    return ua(e);
  t = t.slice();
  let i = 1;
  for (let r = 0; r < t.length; r++) {
    const o = t[r], a = ~o + i;
    t[r] = a, i &= o === 0 ? 1 : 0;
  }
  return `-${ua(t)}`;
}
function Lf(e) {
  return e.byteLength === 8 ? new e.BigIntArray(e.buffer, e.byteOffset, 1)[0] : Xi(e);
}
function ua(e) {
  let t = "";
  const n = new Uint32Array(2);
  let i = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2);
  const s = new Uint32Array((i = new Uint16Array(i).reverse()).buffer);
  let r = -1;
  const o = i.length - 1;
  do {
    for (n[0] = i[r = 0]; r < o; )
      i[r++] = n[1] = n[0] / 10, n[0] = (n[0] - n[1] * 10 << 16) + i[r];
    i[r] = n[1] = n[0] / 10, n[0] = n[0] - n[1] * 10, t = `${n[0]}${t}`;
  } while (s[0] || s[1] || s[2] || s[3]);
  return t ?? "0";
}
class or {
  /** @nocollapse */
  static new(t, n) {
    switch (n) {
      case !0:
        return new Yi(t);
      case !1:
        return new Ki(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case BigInt64Array:
        return new Yi(t);
    }
    return t.byteLength === 16 ? new js(t) : new Ki(t);
  }
  /** @nocollapse */
  static signed(t) {
    return new Yi(t);
  }
  /** @nocollapse */
  static unsigned(t) {
    return new Ki(t);
  }
  /** @nocollapse */
  static decimal(t) {
    return new js(t);
  }
  constructor(t, n) {
    return or.new(t, n);
  }
}
const nb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BN: or,
  bigNumToBigInt: Lf,
  bigNumToNumber: bc,
  bigNumToString: Xi,
  isArrowBigNumSymbol: Rf
}, Symbol.toStringTag, { value: "Module" }));
var Mf, Cf, xf, Uf, Vf, Pf, kf, jf, $f, zf, Wf, Hf, Yf, Kf, Gf, qf, Jf, Qf, Zf, Xf, th, eh;
class A {
  /** @nocollapse */
  static isNull(t) {
    return (t == null ? void 0 : t.typeId) === h.Null;
  }
  /** @nocollapse */
  static isInt(t) {
    return (t == null ? void 0 : t.typeId) === h.Int;
  }
  /** @nocollapse */
  static isFloat(t) {
    return (t == null ? void 0 : t.typeId) === h.Float;
  }
  /** @nocollapse */
  static isBinary(t) {
    return (t == null ? void 0 : t.typeId) === h.Binary;
  }
  /** @nocollapse */
  static isLargeBinary(t) {
    return (t == null ? void 0 : t.typeId) === h.LargeBinary;
  }
  /** @nocollapse */
  static isUtf8(t) {
    return (t == null ? void 0 : t.typeId) === h.Utf8;
  }
  /** @nocollapse */
  static isLargeUtf8(t) {
    return (t == null ? void 0 : t.typeId) === h.LargeUtf8;
  }
  /** @nocollapse */
  static isBool(t) {
    return (t == null ? void 0 : t.typeId) === h.Bool;
  }
  /** @nocollapse */
  static isDecimal(t) {
    return (t == null ? void 0 : t.typeId) === h.Decimal;
  }
  /** @nocollapse */
  static isDate(t) {
    return (t == null ? void 0 : t.typeId) === h.Date;
  }
  /** @nocollapse */
  static isTime(t) {
    return (t == null ? void 0 : t.typeId) === h.Time;
  }
  /** @nocollapse */
  static isTimestamp(t) {
    return (t == null ? void 0 : t.typeId) === h.Timestamp;
  }
  /** @nocollapse */
  static isInterval(t) {
    return (t == null ? void 0 : t.typeId) === h.Interval;
  }
  /** @nocollapse */
  static isDuration(t) {
    return (t == null ? void 0 : t.typeId) === h.Duration;
  }
  /** @nocollapse */
  static isList(t) {
    return (t == null ? void 0 : t.typeId) === h.List;
  }
  /** @nocollapse */
  static isStruct(t) {
    return (t == null ? void 0 : t.typeId) === h.Struct;
  }
  /** @nocollapse */
  static isUnion(t) {
    return (t == null ? void 0 : t.typeId) === h.Union;
  }
  /** @nocollapse */
  static isFixedSizeBinary(t) {
    return (t == null ? void 0 : t.typeId) === h.FixedSizeBinary;
  }
  /** @nocollapse */
  static isFixedSizeList(t) {
    return (t == null ? void 0 : t.typeId) === h.FixedSizeList;
  }
  /** @nocollapse */
  static isMap(t) {
    return (t == null ? void 0 : t.typeId) === h.Map;
  }
  /** @nocollapse */
  static isDictionary(t) {
    return (t == null ? void 0 : t.typeId) === h.Dictionary;
  }
  /** @nocollapse */
  static isDenseUnion(t) {
    return A.isUnion(t) && t.mode === Tt.Dense;
  }
  /** @nocollapse */
  static isSparseUnion(t) {
    return A.isUnion(t) && t.mode === Tt.Sparse;
  }
  constructor(t) {
    this.typeId = t;
  }
}
Mf = Symbol.toStringTag;
A[Mf] = ((e) => (e.children = null, e.ArrayType = Array, e.OffsetArrayType = Int32Array, e[Symbol.toStringTag] = "DataType"))(A.prototype);
class sn extends A {
  constructor() {
    super(h.Null);
  }
  toString() {
    return "Null";
  }
}
Cf = Symbol.toStringTag;
sn[Cf] = ((e) => e[Symbol.toStringTag] = "Null")(sn.prototype);
class qt extends A {
  constructor(t, n) {
    super(h.Int), this.isSigned = t, this.bitWidth = n;
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
xf = Symbol.toStringTag;
qt[xf] = ((e) => (e.isSigned = null, e.bitWidth = null, e[Symbol.toStringTag] = "Int"))(qt.prototype);
class vc extends qt {
  constructor() {
    super(!0, 8);
  }
  get ArrayType() {
    return Int8Array;
  }
}
class wc extends qt {
  constructor() {
    super(!0, 16);
  }
  get ArrayType() {
    return Int16Array;
  }
}
class qn extends qt {
  constructor() {
    super(!0, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
let Mo = class extends qt {
  constructor() {
    super(!0, 64);
  }
  get ArrayType() {
    return BigInt64Array;
  }
};
class Ic extends qt {
  constructor() {
    super(!1, 8);
  }
  get ArrayType() {
    return Uint8Array;
  }
}
class Sc extends qt {
  constructor() {
    super(!1, 16);
  }
  get ArrayType() {
    return Uint16Array;
  }
}
class Ec extends qt {
  constructor() {
    super(!1, 32);
  }
  get ArrayType() {
    return Uint32Array;
  }
}
let Oc = class extends qt {
  constructor() {
    super(!1, 64);
  }
  get ArrayType() {
    return BigUint64Array;
  }
};
Object.defineProperty(vc.prototype, "ArrayType", { value: Int8Array });
Object.defineProperty(wc.prototype, "ArrayType", { value: Int16Array });
Object.defineProperty(qn.prototype, "ArrayType", { value: Int32Array });
Object.defineProperty(Mo.prototype, "ArrayType", { value: BigInt64Array });
Object.defineProperty(Ic.prototype, "ArrayType", { value: Uint8Array });
Object.defineProperty(Sc.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(Ec.prototype, "ArrayType", { value: Uint32Array });
Object.defineProperty(Oc.prototype, "ArrayType", { value: BigUint64Array });
class Jn extends A {
  constructor(t) {
    super(h.Float), this.precision = t;
  }
  get ArrayType() {
    switch (this.precision) {
      case Dt.HALF:
        return Uint16Array;
      case Dt.SINGLE:
        return Float32Array;
      case Dt.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
}
Uf = Symbol.toStringTag;
Jn[Uf] = ((e) => (e.precision = null, e[Symbol.toStringTag] = "Float"))(Jn.prototype);
class nh extends Jn {
  constructor() {
    super(Dt.HALF);
  }
}
class Nc extends Jn {
  constructor() {
    super(Dt.SINGLE);
  }
}
class Co extends Jn {
  constructor() {
    super(Dt.DOUBLE);
  }
}
Object.defineProperty(nh.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(Nc.prototype, "ArrayType", { value: Float32Array });
Object.defineProperty(Co.prototype, "ArrayType", { value: Float64Array });
class $s extends A {
  constructor() {
    super(h.Binary);
  }
  toString() {
    return "Binary";
  }
}
Vf = Symbol.toStringTag;
$s[Vf] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Binary"))($s.prototype);
class zs extends A {
  constructor() {
    super(h.LargeBinary);
  }
  toString() {
    return "LargeBinary";
  }
}
Pf = Symbol.toStringTag;
zs[Pf] = ((e) => (e.ArrayType = Uint8Array, e.OffsetArrayType = BigInt64Array, e[Symbol.toStringTag] = "LargeBinary"))(zs.prototype);
class ts extends A {
  constructor() {
    super(h.Utf8);
  }
  toString() {
    return "Utf8";
  }
}
kf = Symbol.toStringTag;
ts[kf] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Utf8"))(ts.prototype);
class Ws extends A {
  constructor() {
    super(h.LargeUtf8);
  }
  toString() {
    return "LargeUtf8";
  }
}
jf = Symbol.toStringTag;
Ws[jf] = ((e) => (e.ArrayType = Uint8Array, e.OffsetArrayType = BigInt64Array, e[Symbol.toStringTag] = "LargeUtf8"))(Ws.prototype);
class es extends A {
  constructor() {
    super(h.Bool);
  }
  toString() {
    return "Bool";
  }
}
$f = Symbol.toStringTag;
es[$f] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Bool"))(es.prototype);
class Hs extends A {
  constructor(t, n, i = 128) {
    super(h.Decimal), this.scale = t, this.precision = n, this.bitWidth = i;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
}
zf = Symbol.toStringTag;
Hs[zf] = ((e) => (e.scale = null, e.precision = null, e.ArrayType = Uint32Array, e[Symbol.toStringTag] = "Decimal"))(Hs.prototype);
class gi extends A {
  constructor(t) {
    super(h.Date), this.unit = t;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${Pt[this.unit]}>`;
  }
  get ArrayType() {
    return this.unit === Pt.DAY ? Int32Array : BigInt64Array;
  }
}
Wf = Symbol.toStringTag;
gi[Wf] = ((e) => (e.unit = null, e[Symbol.toStringTag] = "Date"))(gi.prototype);
class ib extends gi {
  constructor() {
    super(Pt.DAY);
  }
}
class sb extends gi {
  constructor() {
    super(Pt.MILLISECOND);
  }
}
class wn extends A {
  constructor(t, n) {
    super(h.Time), this.unit = t, this.bitWidth = n;
  }
  toString() {
    return `Time${this.bitWidth}<${T[this.unit]}>`;
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
Hf = Symbol.toStringTag;
wn[Hf] = ((e) => (e.unit = null, e.bitWidth = null, e[Symbol.toStringTag] = "Time"))(wn.prototype);
class rb extends wn {
  constructor() {
    super(T.SECOND, 32);
  }
}
class ob extends wn {
  constructor() {
    super(T.MILLISECOND, 32);
  }
}
class ab extends wn {
  constructor() {
    super(T.MICROSECOND, 64);
  }
}
class cb extends wn {
  constructor() {
    super(T.NANOSECOND, 64);
  }
}
class In extends A {
  constructor(t, n) {
    super(h.Timestamp), this.unit = t, this.timezone = n;
  }
  toString() {
    return `Timestamp<${T[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
Yf = Symbol.toStringTag;
In[Yf] = ((e) => (e.unit = null, e.timezone = null, e.ArrayType = BigInt64Array, e[Symbol.toStringTag] = "Timestamp"))(In.prototype);
class lb extends In {
  constructor(t) {
    super(T.SECOND, t);
  }
}
class ih extends In {
  constructor(t) {
    super(T.MILLISECOND, t);
  }
}
class ub extends In {
  constructor(t) {
    super(T.MICROSECOND, t);
  }
}
class db extends In {
  constructor(t) {
    super(T.NANOSECOND, t);
  }
}
class _i extends A {
  constructor(t) {
    super(h.Interval), this.unit = t;
  }
  toString() {
    return `Interval<${re[this.unit]}>`;
  }
}
Kf = Symbol.toStringTag;
_i[Kf] = ((e) => (e.unit = null, e.ArrayType = Int32Array, e[Symbol.toStringTag] = "Interval"))(_i.prototype);
class fb extends _i {
  constructor() {
    super(re.DAY_TIME);
  }
}
class hb extends _i {
  constructor() {
    super(re.YEAR_MONTH);
  }
}
class Sn extends A {
  constructor(t) {
    super(h.Duration), this.unit = t;
  }
  toString() {
    return `Duration<${T[this.unit]}>`;
  }
}
Gf = Symbol.toStringTag;
Sn[Gf] = ((e) => (e.unit = null, e.ArrayType = BigInt64Array, e[Symbol.toStringTag] = "Duration"))(Sn.prototype);
class pb extends Sn {
  constructor() {
    super(T.SECOND);
  }
}
class yb extends Sn {
  constructor() {
    super(T.MILLISECOND);
  }
}
class gb extends Sn {
  constructor() {
    super(T.MICROSECOND);
  }
}
class _b extends Sn {
  constructor() {
    super(T.NANOSECOND);
  }
}
class mi extends A {
  constructor(t) {
    super(h.List), this.children = [t];
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
qf = Symbol.toStringTag;
mi[qf] = ((e) => (e.children = null, e[Symbol.toStringTag] = "List"))(mi.prototype);
class xt extends A {
  constructor(t) {
    super(h.Struct), this.children = t;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
Jf = Symbol.toStringTag;
xt[Jf] = ((e) => (e.children = null, e[Symbol.toStringTag] = "Struct"))(xt.prototype);
class Qn extends A {
  constructor(t, n, i) {
    super(h.Union), this.mode = t, this.children = i, this.typeIds = n = Int32Array.from(n), this.typeIdToChildIndex = n.reduce((s, r, o) => (s[r] = o) && s || s, /* @__PURE__ */ Object.create(null));
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
}
Qf = Symbol.toStringTag;
Qn[Qf] = ((e) => (e.mode = null, e.typeIds = null, e.children = null, e.typeIdToChildIndex = null, e.ArrayType = Int8Array, e[Symbol.toStringTag] = "Union"))(Qn.prototype);
class mb extends Qn {
  constructor(t, n) {
    super(Tt.Dense, t, n);
  }
}
class bb extends Qn {
  constructor(t, n) {
    super(Tt.Sparse, t, n);
  }
}
class Ys extends A {
  constructor(t) {
    super(h.FixedSizeBinary), this.byteWidth = t;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
}
Zf = Symbol.toStringTag;
Ys[Zf] = ((e) => (e.byteWidth = null, e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "FixedSizeBinary"))(Ys.prototype);
class ns extends A {
  constructor(t, n) {
    super(h.FixedSizeList), this.listSize = t, this.children = [n];
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
Xf = Symbol.toStringTag;
ns[Xf] = ((e) => (e.children = null, e.listSize = null, e[Symbol.toStringTag] = "FixedSizeList"))(ns.prototype);
class is extends A {
  constructor(t, n = !1) {
    var i, s, r;
    if (super(h.Map), this.children = [t], this.keysSorted = n, t && (t.name = "entries", !((i = t == null ? void 0 : t.type) === null || i === void 0) && i.children)) {
      const o = (s = t == null ? void 0 : t.type) === null || s === void 0 ? void 0 : s.children[0];
      o && (o.name = "key");
      const a = (r = t == null ? void 0 : t.type) === null || r === void 0 ? void 0 : r.children[1];
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
th = Symbol.toStringTag;
is[th] = ((e) => (e.children = null, e.keysSorted = null, e[Symbol.toStringTag] = "Map_"))(is.prototype);
const vb = /* @__PURE__ */ ((e) => () => ++e)(-1);
class En extends A {
  constructor(t, n, i, s) {
    super(h.Dictionary), this.indices = n, this.dictionary = t, this.isOrdered = s || !1, this.id = i == null ? vb() : vt(i);
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
eh = Symbol.toStringTag;
En[eh] = ((e) => (e.id = null, e.indices = null, e.isOrdered = null, e.dictionary = null, e[Symbol.toStringTag] = "Dictionary"))(En.prototype);
function Ge(e) {
  const t = e;
  switch (e.typeId) {
    case h.Decimal:
      return e.bitWidth / 32;
    case h.Interval:
      return 1 + t.unit;
    // case Type.Int: return 1 + +((t as Int_).bitWidth > 32);
    // case Type.Time: return 1 + +((t as Time_).bitWidth > 32);
    case h.FixedSizeList:
      return t.listSize;
    case h.FixedSizeBinary:
      return t.byteWidth;
    default:
      return 1;
  }
}
class Q {
  visitMany(t, ...n) {
    return t.map((i, s) => this.visit(i, ...n.map((r) => r[s])));
  }
  visit(...t) {
    return this.getVisitFn(t[0], !1).apply(this, t);
  }
  getVisitFn(t, n = !0) {
    return wb(this, t, n);
  }
  getVisitFnByTypeId(t, n = !0) {
    return ki(this, t, n);
  }
  visitNull(t, ...n) {
    return null;
  }
  visitBool(t, ...n) {
    return null;
  }
  visitInt(t, ...n) {
    return null;
  }
  visitFloat(t, ...n) {
    return null;
  }
  visitUtf8(t, ...n) {
    return null;
  }
  visitLargeUtf8(t, ...n) {
    return null;
  }
  visitBinary(t, ...n) {
    return null;
  }
  visitLargeBinary(t, ...n) {
    return null;
  }
  visitFixedSizeBinary(t, ...n) {
    return null;
  }
  visitDate(t, ...n) {
    return null;
  }
  visitTimestamp(t, ...n) {
    return null;
  }
  visitTime(t, ...n) {
    return null;
  }
  visitDecimal(t, ...n) {
    return null;
  }
  visitList(t, ...n) {
    return null;
  }
  visitStruct(t, ...n) {
    return null;
  }
  visitUnion(t, ...n) {
    return null;
  }
  visitDictionary(t, ...n) {
    return null;
  }
  visitInterval(t, ...n) {
    return null;
  }
  visitDuration(t, ...n) {
    return null;
  }
  visitFixedSizeList(t, ...n) {
    return null;
  }
  visitMap(t, ...n) {
    return null;
  }
}
function wb(e, t, n = !0) {
  return typeof t == "number" ? ki(e, t, n) : typeof t == "string" && t in h ? ki(e, h[t], n) : t && t instanceof A ? ki(e, Pu(t), n) : t != null && t.type && t.type instanceof A ? ki(e, Pu(t.type), n) : ki(e, h.NONE, n);
}
function ki(e, t, n = !0) {
  let i = null;
  switch (t) {
    case h.Null:
      i = e.visitNull;
      break;
    case h.Bool:
      i = e.visitBool;
      break;
    case h.Int:
      i = e.visitInt;
      break;
    case h.Int8:
      i = e.visitInt8 || e.visitInt;
      break;
    case h.Int16:
      i = e.visitInt16 || e.visitInt;
      break;
    case h.Int32:
      i = e.visitInt32 || e.visitInt;
      break;
    case h.Int64:
      i = e.visitInt64 || e.visitInt;
      break;
    case h.Uint8:
      i = e.visitUint8 || e.visitInt;
      break;
    case h.Uint16:
      i = e.visitUint16 || e.visitInt;
      break;
    case h.Uint32:
      i = e.visitUint32 || e.visitInt;
      break;
    case h.Uint64:
      i = e.visitUint64 || e.visitInt;
      break;
    case h.Float:
      i = e.visitFloat;
      break;
    case h.Float16:
      i = e.visitFloat16 || e.visitFloat;
      break;
    case h.Float32:
      i = e.visitFloat32 || e.visitFloat;
      break;
    case h.Float64:
      i = e.visitFloat64 || e.visitFloat;
      break;
    case h.Utf8:
      i = e.visitUtf8;
      break;
    case h.LargeUtf8:
      i = e.visitLargeUtf8;
      break;
    case h.Binary:
      i = e.visitBinary;
      break;
    case h.LargeBinary:
      i = e.visitLargeBinary;
      break;
    case h.FixedSizeBinary:
      i = e.visitFixedSizeBinary;
      break;
    case h.Date:
      i = e.visitDate;
      break;
    case h.DateDay:
      i = e.visitDateDay || e.visitDate;
      break;
    case h.DateMillisecond:
      i = e.visitDateMillisecond || e.visitDate;
      break;
    case h.Timestamp:
      i = e.visitTimestamp;
      break;
    case h.TimestampSecond:
      i = e.visitTimestampSecond || e.visitTimestamp;
      break;
    case h.TimestampMillisecond:
      i = e.visitTimestampMillisecond || e.visitTimestamp;
      break;
    case h.TimestampMicrosecond:
      i = e.visitTimestampMicrosecond || e.visitTimestamp;
      break;
    case h.TimestampNanosecond:
      i = e.visitTimestampNanosecond || e.visitTimestamp;
      break;
    case h.Time:
      i = e.visitTime;
      break;
    case h.TimeSecond:
      i = e.visitTimeSecond || e.visitTime;
      break;
    case h.TimeMillisecond:
      i = e.visitTimeMillisecond || e.visitTime;
      break;
    case h.TimeMicrosecond:
      i = e.visitTimeMicrosecond || e.visitTime;
      break;
    case h.TimeNanosecond:
      i = e.visitTimeNanosecond || e.visitTime;
      break;
    case h.Decimal:
      i = e.visitDecimal;
      break;
    case h.List:
      i = e.visitList;
      break;
    case h.Struct:
      i = e.visitStruct;
      break;
    case h.Union:
      i = e.visitUnion;
      break;
    case h.DenseUnion:
      i = e.visitDenseUnion || e.visitUnion;
      break;
    case h.SparseUnion:
      i = e.visitSparseUnion || e.visitUnion;
      break;
    case h.Dictionary:
      i = e.visitDictionary;
      break;
    case h.Interval:
      i = e.visitInterval;
      break;
    case h.IntervalDayTime:
      i = e.visitIntervalDayTime || e.visitInterval;
      break;
    case h.IntervalYearMonth:
      i = e.visitIntervalYearMonth || e.visitInterval;
      break;
    case h.Duration:
      i = e.visitDuration;
      break;
    case h.DurationSecond:
      i = e.visitDurationSecond || e.visitDuration;
      break;
    case h.DurationMillisecond:
      i = e.visitDurationMillisecond || e.visitDuration;
      break;
    case h.DurationMicrosecond:
      i = e.visitDurationMicrosecond || e.visitDuration;
      break;
    case h.DurationNanosecond:
      i = e.visitDurationNanosecond || e.visitDuration;
      break;
    case h.FixedSizeList:
      i = e.visitFixedSizeList;
      break;
    case h.Map:
      i = e.visitMap;
      break;
  }
  if (typeof i == "function")
    return i;
  if (!n)
    return () => null;
  throw new Error(`Unrecognized type '${h[t]}'`);
}
function Pu(e) {
  switch (e.typeId) {
    case h.Null:
      return h.Null;
    case h.Int: {
      const { bitWidth: t, isSigned: n } = e;
      switch (t) {
        case 8:
          return n ? h.Int8 : h.Uint8;
        case 16:
          return n ? h.Int16 : h.Uint16;
        case 32:
          return n ? h.Int32 : h.Uint32;
        case 64:
          return n ? h.Int64 : h.Uint64;
      }
      return h.Int;
    }
    case h.Float:
      switch (e.precision) {
        case Dt.HALF:
          return h.Float16;
        case Dt.SINGLE:
          return h.Float32;
        case Dt.DOUBLE:
          return h.Float64;
      }
      return h.Float;
    case h.Binary:
      return h.Binary;
    case h.LargeBinary:
      return h.LargeBinary;
    case h.Utf8:
      return h.Utf8;
    case h.LargeUtf8:
      return h.LargeUtf8;
    case h.Bool:
      return h.Bool;
    case h.Decimal:
      return h.Decimal;
    case h.Time:
      switch (e.unit) {
        case T.SECOND:
          return h.TimeSecond;
        case T.MILLISECOND:
          return h.TimeMillisecond;
        case T.MICROSECOND:
          return h.TimeMicrosecond;
        case T.NANOSECOND:
          return h.TimeNanosecond;
      }
      return h.Time;
    case h.Timestamp:
      switch (e.unit) {
        case T.SECOND:
          return h.TimestampSecond;
        case T.MILLISECOND:
          return h.TimestampMillisecond;
        case T.MICROSECOND:
          return h.TimestampMicrosecond;
        case T.NANOSECOND:
          return h.TimestampNanosecond;
      }
      return h.Timestamp;
    case h.Date:
      switch (e.unit) {
        case Pt.DAY:
          return h.DateDay;
        case Pt.MILLISECOND:
          return h.DateMillisecond;
      }
      return h.Date;
    case h.Interval:
      switch (e.unit) {
        case re.DAY_TIME:
          return h.IntervalDayTime;
        case re.YEAR_MONTH:
          return h.IntervalYearMonth;
      }
      return h.Interval;
    case h.Duration:
      switch (e.unit) {
        case T.SECOND:
          return h.DurationSecond;
        case T.MILLISECOND:
          return h.DurationMillisecond;
        case T.MICROSECOND:
          return h.DurationMicrosecond;
        case T.NANOSECOND:
          return h.DurationNanosecond;
      }
      return h.Duration;
    case h.Map:
      return h.Map;
    case h.List:
      return h.List;
    case h.Struct:
      return h.Struct;
    case h.Union:
      switch (e.mode) {
        case Tt.Dense:
          return h.DenseUnion;
        case Tt.Sparse:
          return h.SparseUnion;
      }
      return h.Union;
    case h.FixedSizeBinary:
      return h.FixedSizeBinary;
    case h.FixedSizeList:
      return h.FixedSizeList;
    case h.Dictionary:
      return h.Dictionary;
  }
  throw new Error(`Unrecognized type '${h[e.typeId]}'`);
}
Q.prototype.visitInt8 = null;
Q.prototype.visitInt16 = null;
Q.prototype.visitInt32 = null;
Q.prototype.visitInt64 = null;
Q.prototype.visitUint8 = null;
Q.prototype.visitUint16 = null;
Q.prototype.visitUint32 = null;
Q.prototype.visitUint64 = null;
Q.prototype.visitFloat16 = null;
Q.prototype.visitFloat32 = null;
Q.prototype.visitFloat64 = null;
Q.prototype.visitDateDay = null;
Q.prototype.visitDateMillisecond = null;
Q.prototype.visitTimestampSecond = null;
Q.prototype.visitTimestampMillisecond = null;
Q.prototype.visitTimestampMicrosecond = null;
Q.prototype.visitTimestampNanosecond = null;
Q.prototype.visitTimeSecond = null;
Q.prototype.visitTimeMillisecond = null;
Q.prototype.visitTimeMicrosecond = null;
Q.prototype.visitTimeNanosecond = null;
Q.prototype.visitDenseUnion = null;
Q.prototype.visitSparseUnion = null;
Q.prototype.visitIntervalDayTime = null;
Q.prototype.visitIntervalYearMonth = null;
Q.prototype.visitDuration = null;
Q.prototype.visitDurationSecond = null;
Q.prototype.visitDurationMillisecond = null;
Q.prototype.visitDurationMicrosecond = null;
Q.prototype.visitDurationNanosecond = null;
const sh = new Float64Array(1), Bi = new Uint32Array(sh.buffer);
function Dc(e) {
  const t = (e & 31744) >> 10, n = (e & 1023) / 1024, i = Math.pow(-1, (e & 32768) >> 15);
  switch (t) {
    case 31:
      return i * (n ? Number.NaN : 1 / 0);
    case 0:
      return i * (n ? 6103515625e-14 * n : 0);
  }
  return i * Math.pow(2, t - 15) * (1 + n);
}
function Tc(e) {
  if (e !== e)
    return 32256;
  sh[0] = e;
  const t = (Bi[1] & 2147483648) >> 16 & 65535;
  let n = Bi[1] & 2146435072, i = 0;
  return n >= 1089470464 ? Bi[0] > 0 ? n = 31744 : (n = (n & 2080374784) >> 16, i = (Bi[1] & 1048575) >> 10) : n <= 1056964608 ? (i = 1048576 + (Bi[1] & 1048575), i = 1048576 + (i << (n >> 20) - 998) >> 21, n = 0) : (n = n - 1056964608 >> 10, i = (Bi[1] & 1048575) + 512 >> 10), t | n | i & 65535;
}
const Ib = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  float64ToUint16: Tc,
  uint16ToFloat64: Dc
}, Symbol.toStringTag, { value: "Module" }));
class $ extends Q {
}
function H(e) {
  return (t, n, i) => {
    if (t.setValid(n, i != null))
      return e(t, n, i);
  };
}
const Sb = (e, t, n) => {
  e[t] = Math.floor(n / 864e5);
}, rh = (e, t, n, i) => {
  if (n + 1 < t.length) {
    const s = vt(t[n]), r = vt(t[n + 1]);
    e.set(i.subarray(0, r - s), s);
  }
}, Eb = ({ offset: e, values: t }, n, i) => {
  const s = e + n;
  i ? t[s >> 3] |= 1 << s % 8 : t[s >> 3] &= ~(1 << s % 8);
}, Dn = ({ values: e }, t, n) => {
  e[t] = n;
}, Ac = ({ values: e }, t, n) => {
  e[t] = n;
}, oh = ({ values: e }, t, n) => {
  e[t] = Tc(n);
}, Ob = (e, t, n) => {
  switch (e.type.precision) {
    case Dt.HALF:
      return oh(e, t, n);
    case Dt.SINGLE:
    case Dt.DOUBLE:
      return Ac(e, t, n);
  }
}, Bc = ({ values: e }, t, n) => {
  Sb(e, t, n.valueOf());
}, Fc = ({ values: e }, t, n) => {
  e[t] = BigInt(n);
}, ah = ({ stride: e, values: t }, n, i) => {
  t.set(i.subarray(0, e), e * n);
}, ch = ({ values: e, valueOffsets: t }, n, i) => rh(e, t, n, i), lh = ({ values: e, valueOffsets: t }, n, i) => rh(e, t, n, rr(i)), uh = (e, t, n) => {
  e.type.unit === Pt.DAY ? Bc(e, t, n) : Fc(e, t, n);
}, Rc = ({ values: e }, t, n) => {
  e[t] = BigInt(n / 1e3);
}, Lc = ({ values: e }, t, n) => {
  e[t] = BigInt(n);
}, Mc = ({ values: e }, t, n) => {
  e[t] = BigInt(n * 1e3);
}, Cc = ({ values: e }, t, n) => {
  e[t] = BigInt(n * 1e6);
}, dh = (e, t, n) => {
  switch (e.type.unit) {
    case T.SECOND:
      return Rc(e, t, n);
    case T.MILLISECOND:
      return Lc(e, t, n);
    case T.MICROSECOND:
      return Mc(e, t, n);
    case T.NANOSECOND:
      return Cc(e, t, n);
  }
}, xc = ({ values: e }, t, n) => {
  e[t] = n;
}, Uc = ({ values: e }, t, n) => {
  e[t] = n;
}, Vc = ({ values: e }, t, n) => {
  e[t] = n;
}, Pc = ({ values: e }, t, n) => {
  e[t] = n;
}, fh = (e, t, n) => {
  switch (e.type.unit) {
    case T.SECOND:
      return xc(e, t, n);
    case T.MILLISECOND:
      return Uc(e, t, n);
    case T.MICROSECOND:
      return Vc(e, t, n);
    case T.NANOSECOND:
      return Pc(e, t, n);
  }
}, hh = ({ values: e, stride: t }, n, i) => {
  e.set(i.subarray(0, t), t * n);
}, Nb = (e, t, n) => {
  const i = e.children[0], s = e.valueOffsets, r = we.getVisitFn(i);
  if (Array.isArray(n))
    for (let o = -1, a = s[t], c = s[t + 1]; a < c; )
      r(i, a++, n[++o]);
  else
    for (let o = -1, a = s[t], c = s[t + 1]; a < c; )
      r(i, a++, n.get(++o));
}, Db = (e, t, n) => {
  const i = e.children[0], { valueOffsets: s } = e, r = we.getVisitFn(i);
  let { [t]: o, [t + 1]: a } = s;
  const c = n instanceof Map ? n.entries() : Object.entries(n);
  for (const l of c)
    if (r(i, o, l), ++o >= a)
      break;
}, Tb = (e, t) => (n, i, s, r) => i && n(i, e, t[r]), Ab = (e, t) => (n, i, s, r) => i && n(i, e, t.get(r)), Bb = (e, t) => (n, i, s, r) => i && n(i, e, t.get(s.name)), Fb = (e, t) => (n, i, s, r) => i && n(i, e, t[s.name]), Rb = (e, t, n) => {
  const i = e.type.children.map((r) => we.getVisitFn(r.type)), s = n instanceof Map ? Bb(t, n) : n instanceof R ? Ab(t, n) : Array.isArray(n) ? Tb(t, n) : Fb(t, n);
  e.type.children.forEach((r, o) => s(i[o], e.children[o], r, o));
}, Lb = (e, t, n) => {
  e.type.mode === Tt.Dense ? ph(e, t, n) : yh(e, t, n);
}, ph = (e, t, n) => {
  const i = e.type.typeIdToChildIndex[e.typeIds[t]], s = e.children[i];
  we.visit(s, e.valueOffsets[t], n);
}, yh = (e, t, n) => {
  const i = e.type.typeIdToChildIndex[e.typeIds[t]], s = e.children[i];
  we.visit(s, t, n);
}, Mb = (e, t, n) => {
  var i;
  (i = e.dictionary) === null || i === void 0 || i.set(e.values[t], n);
}, gh = (e, t, n) => {
  e.type.unit === re.DAY_TIME ? kc(e, t, n) : jc(e, t, n);
}, kc = ({ values: e }, t, n) => {
  e.set(n.subarray(0, 2), 2 * t);
}, jc = ({ values: e }, t, n) => {
  e[t] = n[0] * 12 + n[1] % 12;
}, $c = ({ values: e }, t, n) => {
  e[t] = n;
}, zc = ({ values: e }, t, n) => {
  e[t] = n;
}, Wc = ({ values: e }, t, n) => {
  e[t] = n;
}, Hc = ({ values: e }, t, n) => {
  e[t] = n;
}, _h = (e, t, n) => {
  switch (e.type.unit) {
    case T.SECOND:
      return $c(e, t, n);
    case T.MILLISECOND:
      return zc(e, t, n);
    case T.MICROSECOND:
      return Wc(e, t, n);
    case T.NANOSECOND:
      return Hc(e, t, n);
  }
}, Cb = (e, t, n) => {
  const { stride: i } = e, s = e.children[0], r = we.getVisitFn(s);
  if (Array.isArray(n))
    for (let o = -1, a = t * i; ++o < i; )
      r(s, a + o, n[o]);
  else
    for (let o = -1, a = t * i; ++o < i; )
      r(s, a + o, n.get(o));
};
$.prototype.visitBool = H(Eb);
$.prototype.visitInt = H(Dn);
$.prototype.visitInt8 = H(Dn);
$.prototype.visitInt16 = H(Dn);
$.prototype.visitInt32 = H(Dn);
$.prototype.visitInt64 = H(Dn);
$.prototype.visitUint8 = H(Dn);
$.prototype.visitUint16 = H(Dn);
$.prototype.visitUint32 = H(Dn);
$.prototype.visitUint64 = H(Dn);
$.prototype.visitFloat = H(Ob);
$.prototype.visitFloat16 = H(oh);
$.prototype.visitFloat32 = H(Ac);
$.prototype.visitFloat64 = H(Ac);
$.prototype.visitUtf8 = H(lh);
$.prototype.visitLargeUtf8 = H(lh);
$.prototype.visitBinary = H(ch);
$.prototype.visitLargeBinary = H(ch);
$.prototype.visitFixedSizeBinary = H(ah);
$.prototype.visitDate = H(uh);
$.prototype.visitDateDay = H(Bc);
$.prototype.visitDateMillisecond = H(Fc);
$.prototype.visitTimestamp = H(dh);
$.prototype.visitTimestampSecond = H(Rc);
$.prototype.visitTimestampMillisecond = H(Lc);
$.prototype.visitTimestampMicrosecond = H(Mc);
$.prototype.visitTimestampNanosecond = H(Cc);
$.prototype.visitTime = H(fh);
$.prototype.visitTimeSecond = H(xc);
$.prototype.visitTimeMillisecond = H(Uc);
$.prototype.visitTimeMicrosecond = H(Vc);
$.prototype.visitTimeNanosecond = H(Pc);
$.prototype.visitDecimal = H(hh);
$.prototype.visitList = H(Nb);
$.prototype.visitStruct = H(Rb);
$.prototype.visitUnion = H(Lb);
$.prototype.visitDenseUnion = H(ph);
$.prototype.visitSparseUnion = H(yh);
$.prototype.visitDictionary = H(Mb);
$.prototype.visitInterval = H(gh);
$.prototype.visitIntervalDayTime = H(kc);
$.prototype.visitIntervalYearMonth = H(jc);
$.prototype.visitDuration = H(_h);
$.prototype.visitDurationSecond = H($c);
$.prototype.visitDurationMillisecond = H(zc);
$.prototype.visitDurationMicrosecond = H(Wc);
$.prototype.visitDurationNanosecond = H(Hc);
$.prototype.visitFixedSizeList = H(Cb);
$.prototype.visitMap = H(Db);
const we = new $(), Ne = Symbol.for("parent"), Gi = Symbol.for("rowIndex");
class xo {
  constructor(t, n) {
    return this[Ne] = t, this[Gi] = n, new Proxy(this, new Ub());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Gi], n = this[Ne], i = n.type.children, s = {};
    for (let r = -1, o = i.length; ++r < o; )
      s[i[r].name] = oe.visit(n.children[r], t);
    return s;
  }
  toString() {
    return `{${[...this].map(([t, n]) => `${Gn(t)}: ${Gn(n)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new xb(this[Ne], this[Gi]);
  }
}
class xb {
  constructor(t, n) {
    this.childIndex = 0, this.children = t.children, this.rowIndex = n, this.childFields = t.type.children, this.numChildren = this.childFields.length;
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
        oe.visit(this.children[t], this.rowIndex)
      ]
    }) : { done: !0, value: null };
  }
}
Object.defineProperties(xo.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [Ne]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [Gi]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
});
class Ub {
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
    return t[Ne].type.children.map((n) => n.name);
  }
  has(t, n) {
    return t[Ne].type.children.findIndex((i) => i.name === n) !== -1;
  }
  getOwnPropertyDescriptor(t, n) {
    if (t[Ne].type.children.findIndex((i) => i.name === n) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, n) {
    if (Reflect.has(t, n))
      return t[n];
    const i = t[Ne].type.children.findIndex((s) => s.name === n);
    if (i !== -1) {
      const s = oe.visit(t[Ne].children[i], t[Gi]);
      return Reflect.set(t, n, s), s;
    }
  }
  set(t, n, i) {
    const s = t[Ne].type.children.findIndex((r) => r.name === n);
    return s !== -1 ? (we.visit(t[Ne].children[s], t[Gi], i), Reflect.set(t, n, i)) : Reflect.has(t, n) || typeof n == "symbol" ? Reflect.set(t, n, i) : !1;
  }
}
class x extends Q {
}
function z(e) {
  return (t, n) => t.getValid(n) ? e(t, n) : null;
}
const Vb = (e, t) => 864e5 * e[t], Pb = (e, t) => null, mh = (e, t, n) => {
  if (n + 1 >= t.length)
    return null;
  const i = vt(t[n]), s = vt(t[n + 1]);
  return e.subarray(i, s);
}, kb = ({ offset: e, values: t }, n) => {
  const i = e + n;
  return (t[i >> 3] & 1 << i % 8) !== 0;
}, bh = ({ values: e }, t) => Vb(e, t), vh = ({ values: e }, t) => vt(e[t]), ei = ({ stride: e, values: t }, n) => t[e * n], jb = ({ stride: e, values: t }, n) => Dc(t[e * n]), wh = ({ values: e }, t) => e[t], $b = ({ stride: e, values: t }, n) => t.subarray(e * n, e * (n + 1)), Ih = ({ values: e, valueOffsets: t }, n) => mh(e, t, n), Sh = ({ values: e, valueOffsets: t }, n) => {
  const i = mh(e, t, n);
  return i !== null ? xa(i) : null;
}, zb = ({ values: e }, t) => e[t], Wb = ({ type: e, values: t }, n) => e.precision !== Dt.HALF ? t[n] : Dc(t[n]), Hb = (e, t) => e.type.unit === Pt.DAY ? bh(e, t) : vh(e, t), Eh = ({ values: e }, t) => 1e3 * vt(e[t]), Oh = ({ values: e }, t) => vt(e[t]), Nh = ({ values: e }, t) => Ff(e[t], BigInt(1e3)), Dh = ({ values: e }, t) => Ff(e[t], BigInt(1e6)), Yb = (e, t) => {
  switch (e.type.unit) {
    case T.SECOND:
      return Eh(e, t);
    case T.MILLISECOND:
      return Oh(e, t);
    case T.MICROSECOND:
      return Nh(e, t);
    case T.NANOSECOND:
      return Dh(e, t);
  }
}, Th = ({ values: e }, t) => e[t], Ah = ({ values: e }, t) => e[t], Bh = ({ values: e }, t) => e[t], Fh = ({ values: e }, t) => e[t], Kb = (e, t) => {
  switch (e.type.unit) {
    case T.SECOND:
      return Th(e, t);
    case T.MILLISECOND:
      return Ah(e, t);
    case T.MICROSECOND:
      return Bh(e, t);
    case T.NANOSECOND:
      return Fh(e, t);
  }
}, Gb = ({ values: e, stride: t }, n) => or.decimal(e.subarray(t * n, t * (n + 1))), qb = (e, t) => {
  const { valueOffsets: n, stride: i, children: s } = e, { [t * i]: r, [t * i + 1]: o } = n, c = s[0].slice(r, o - r);
  return new R([c]);
}, Jb = (e, t) => {
  const { valueOffsets: n, children: i } = e, { [t]: s, [t + 1]: r } = n, o = i[0];
  return new ar(o.slice(s, r - s));
}, Qb = (e, t) => new xo(e, t), Zb = (e, t) => e.type.mode === Tt.Dense ? Rh(e, t) : Lh(e, t), Rh = (e, t) => {
  const n = e.type.typeIdToChildIndex[e.typeIds[t]], i = e.children[n];
  return oe.visit(i, e.valueOffsets[t]);
}, Lh = (e, t) => {
  const n = e.type.typeIdToChildIndex[e.typeIds[t]], i = e.children[n];
  return oe.visit(i, t);
}, Xb = (e, t) => {
  var n;
  return (n = e.dictionary) === null || n === void 0 ? void 0 : n.get(e.values[t]);
}, tv = (e, t) => e.type.unit === re.DAY_TIME ? Mh(e, t) : Ch(e, t), Mh = ({ values: e }, t) => e.subarray(2 * t, 2 * (t + 1)), Ch = ({ values: e }, t) => {
  const n = e[t], i = new Int32Array(2);
  return i[0] = Math.trunc(n / 12), i[1] = Math.trunc(n % 12), i;
}, xh = ({ values: e }, t) => e[t], Uh = ({ values: e }, t) => e[t], Vh = ({ values: e }, t) => e[t], Ph = ({ values: e }, t) => e[t], ev = (e, t) => {
  switch (e.type.unit) {
    case T.SECOND:
      return xh(e, t);
    case T.MILLISECOND:
      return Uh(e, t);
    case T.MICROSECOND:
      return Vh(e, t);
    case T.NANOSECOND:
      return Ph(e, t);
  }
}, nv = (e, t) => {
  const { stride: n, children: i } = e, r = i[0].slice(t * n, n);
  return new R([r]);
};
x.prototype.visitNull = z(Pb);
x.prototype.visitBool = z(kb);
x.prototype.visitInt = z(zb);
x.prototype.visitInt8 = z(ei);
x.prototype.visitInt16 = z(ei);
x.prototype.visitInt32 = z(ei);
x.prototype.visitInt64 = z(wh);
x.prototype.visitUint8 = z(ei);
x.prototype.visitUint16 = z(ei);
x.prototype.visitUint32 = z(ei);
x.prototype.visitUint64 = z(wh);
x.prototype.visitFloat = z(Wb);
x.prototype.visitFloat16 = z(jb);
x.prototype.visitFloat32 = z(ei);
x.prototype.visitFloat64 = z(ei);
x.prototype.visitUtf8 = z(Sh);
x.prototype.visitLargeUtf8 = z(Sh);
x.prototype.visitBinary = z(Ih);
x.prototype.visitLargeBinary = z(Ih);
x.prototype.visitFixedSizeBinary = z($b);
x.prototype.visitDate = z(Hb);
x.prototype.visitDateDay = z(bh);
x.prototype.visitDateMillisecond = z(vh);
x.prototype.visitTimestamp = z(Yb);
x.prototype.visitTimestampSecond = z(Eh);
x.prototype.visitTimestampMillisecond = z(Oh);
x.prototype.visitTimestampMicrosecond = z(Nh);
x.prototype.visitTimestampNanosecond = z(Dh);
x.prototype.visitTime = z(Kb);
x.prototype.visitTimeSecond = z(Th);
x.prototype.visitTimeMillisecond = z(Ah);
x.prototype.visitTimeMicrosecond = z(Bh);
x.prototype.visitTimeNanosecond = z(Fh);
x.prototype.visitDecimal = z(Gb);
x.prototype.visitList = z(qb);
x.prototype.visitStruct = z(Qb);
x.prototype.visitUnion = z(Zb);
x.prototype.visitDenseUnion = z(Rh);
x.prototype.visitSparseUnion = z(Lh);
x.prototype.visitDictionary = z(Xb);
x.prototype.visitInterval = z(tv);
x.prototype.visitIntervalDayTime = z(Mh);
x.prototype.visitIntervalYearMonth = z(Ch);
x.prototype.visitDuration = z(ev);
x.prototype.visitDurationSecond = z(xh);
x.prototype.visitDurationMillisecond = z(Uh);
x.prototype.visitDurationMicrosecond = z(Vh);
x.prototype.visitDurationNanosecond = z(Ph);
x.prototype.visitFixedSizeList = z(nv);
x.prototype.visitMap = z(Jb);
const oe = new x(), ai = Symbol.for("keys"), qi = Symbol.for("vals"), ji = Symbol.for("kKeysAsStrings"), za = Symbol.for("_kKeysAsStrings");
class ar {
  constructor(t) {
    return this[ai] = new R([t.children[0]]).memoize(), this[qi] = t.children[1], new Proxy(this, new sv());
  }
  /** @ignore */
  get [ji]() {
    return this[za] || (this[za] = Array.from(this[ai].toArray(), String));
  }
  [Symbol.iterator]() {
    return new iv(this[ai], this[qi]);
  }
  get size() {
    return this[ai].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[ai], n = this[qi], i = {};
    for (let s = -1, r = t.length; ++s < r; )
      i[t.get(s)] = oe.visit(n, s);
    return i;
  }
  toString() {
    return `{${[...this].map(([t, n]) => `${Gn(t)}: ${Gn(n)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
class iv {
  constructor(t, n) {
    this.keys = t, this.vals = n, this.keyIndex = 0, this.numKeys = t.length;
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
        oe.visit(this.vals, t)
      ]
    });
  }
}
class sv {
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
    return t[ji];
  }
  has(t, n) {
    return t[ji].includes(n);
  }
  getOwnPropertyDescriptor(t, n) {
    if (t[ji].indexOf(n) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, n) {
    if (Reflect.has(t, n))
      return t[n];
    const i = t[ji].indexOf(n);
    if (i !== -1) {
      const s = oe.visit(Reflect.get(t, qi), i);
      return Reflect.set(t, n, s), s;
    }
  }
  set(t, n, i) {
    const s = t[ji].indexOf(n);
    return s !== -1 ? (we.visit(Reflect.get(t, qi), s, i), Reflect.set(t, n, i)) : Reflect.has(t, n) ? Reflect.set(t, n, i) : !1;
  }
}
Object.defineProperties(ar.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [ai]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [qi]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [za]: { writable: !0, enumerable: !1, configurable: !1, value: null }
});
let ku;
function Yc(e, t, n, i) {
  const { length: s = 0 } = e;
  let r = typeof t != "number" ? 0 : t, o = typeof n != "number" ? s : n;
  return r < 0 && (r = (r % s + s) % s), o < 0 && (o = (o % s + s) % s), o < r && (ku = r, r = o, o = ku), o > s && (o = s), i ? i(e, r, o) : [r, o];
}
const Uo = (e, t) => e < 0 ? t + e : e, ju = (e) => e !== e;
function wi(e) {
  if (typeof e !== "object" || e === null)
    return ju(e) ? ju : (n) => n === e;
  if (e instanceof Date) {
    const n = e.valueOf();
    return (i) => i instanceof Date ? i.valueOf() === n : !1;
  }
  return ArrayBuffer.isView(e) ? (n) => n ? Of(e, n) : !1 : e instanceof Map ? ov(e) : Array.isArray(e) ? rv(e) : e instanceof R ? av(e) : cv(e, !0);
}
function rv(e) {
  const t = [];
  for (let n = -1, i = e.length; ++n < i; )
    t[n] = wi(e[n]);
  return Vo(t);
}
function ov(e) {
  let t = -1;
  const n = [];
  for (const i of e.values())
    n[++t] = wi(i);
  return Vo(n);
}
function av(e) {
  const t = [];
  for (let n = -1, i = e.length; ++n < i; )
    t[n] = wi(e.get(n));
  return Vo(t);
}
function cv(e, t = !1) {
  const n = Object.keys(e);
  if (!t && n.length === 0)
    return () => !1;
  const i = [];
  for (let s = -1, r = n.length; ++s < r; )
    i[s] = wi(e[n[s]]);
  return Vo(i, n);
}
function Vo(e, t) {
  return (n) => {
    if (!n || typeof n != "object")
      return !1;
    switch (n.constructor) {
      case Array:
        return lv(e, n);
      case Map:
        return $u(e, n, n.keys());
      case ar:
      case xo:
      case Object:
      case void 0:
        return $u(e, n, t || Object.keys(n));
    }
    return n instanceof R ? uv(e, n) : !1;
  };
}
function lv(e, t) {
  const n = e.length;
  if (t.length !== n)
    return !1;
  for (let i = -1; ++i < n; )
    if (!e[i](t[i]))
      return !1;
  return !0;
}
function uv(e, t) {
  const n = e.length;
  if (t.length !== n)
    return !1;
  for (let i = -1; ++i < n; )
    if (!e[i](t.get(i)))
      return !1;
  return !0;
}
function $u(e, t, n) {
  const i = n[Symbol.iterator](), s = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), r = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const a = e.length;
  let c = r.next(), l = i.next(), u = s.next();
  for (; o < a && !l.done && !u.done && !c.done && !(l.value !== u.value || !e[o](c.value)); ++o, l = i.next(), u = s.next(), c = r.next())
    ;
  return o === a && l.done && u.done && c.done ? !0 : (i.return && i.return(), s.return && s.return(), r.return && r.return(), !1);
}
const dv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clampRange: Yc,
  createElementComparator: wi,
  wrapIndex: Uo
}, Symbol.toStringTag, { value: "Module" }));
function Po(e, t, n, i) {
  return (n & 1 << i) !== 0;
}
function Kc(e, t, n, i) {
  return (n & 1 << i) >> i;
}
function fv(e, t, n) {
  return n ? !!(e[t >> 3] |= 1 << t % 8) || !0 : !(e[t >> 3] &= ~(1 << t % 8)) && !1;
}
function Ks(e, t, n) {
  const i = n.byteLength + 7 & -8;
  if (e > 0 || n.byteLength < i) {
    const s = new Uint8Array(i);
    return s.set(e % 8 === 0 ? n.subarray(e >> 3) : (
      // Otherwise iterate each bit from the offset and return a new one
      Gs(new ss(n, e, t, null, Po)).subarray(0, i)
    )), s;
  }
  return n;
}
function Gs(e) {
  const t = [];
  let n = 0, i = 0, s = 0;
  for (const o of e)
    o && (s |= 1 << i), ++i === 8 && (t[n++] = s, s = i = 0);
  (n === 0 || i > 0) && (t[n++] = s);
  const r = new Uint8Array(t.length + 7 & -8);
  return r.set(t), r;
}
class ss {
  constructor(t, n, i, s, r) {
    this.bytes = t, this.length = i, this.context = s, this.get = r, this.bit = n % 8, this.byteIndex = n >> 3, this.byte = t[this.byteIndex++], this.index = 0;
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
function ho(e, t, n) {
  if (n - t <= 0)
    return 0;
  if (n - t < 8) {
    let r = 0;
    for (const o of new ss(e, t, n - t, e, Kc))
      r += o;
    return r;
  }
  const i = n >> 3 << 3, s = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return (
    // Get the popcnt of bits between the left hand side, and the next highest multiple of 8
    ho(e, t, s) + // Get the popcnt of bits between the right hand side, and the next lowest multiple of 8
    ho(e, i, n) + // Get the popcnt of all bits between the left and right hand sides' multiples of 8
    kh(e, s >> 3, i - s >> 3)
  );
}
function kh(e, t, n) {
  let i = 0, s = Math.trunc(t);
  const r = new DataView(e.buffer, e.byteOffset, e.byteLength), o = n === void 0 ? e.byteLength : s + n;
  for (; o - s >= 4; )
    i += Wr(r.getUint32(s)), s += 4;
  for (; o - s >= 2; )
    i += Wr(r.getUint16(s)), s += 2;
  for (; o - s >= 1; )
    i += Wr(r.getUint8(s)), s += 1;
  return i;
}
function Wr(e) {
  let t = Math.trunc(e);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
const hv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BitIterator: ss,
  getBit: Kc,
  getBool: Po,
  packBools: Gs,
  popcnt_array: kh,
  popcnt_bit_range: ho,
  popcnt_uint32: Wr,
  setBool: fv,
  truncateBitmap: Ks
}, Symbol.toStringTag, { value: "Module" })), pv = -1;
class ct {
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
      return A.isSparseUnion(t) ? this.children.some((n) => n.nullable) : A.isDenseUnion(t) ? this.children.some((n) => n.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
    }
    return !0;
  }
  get byteLength() {
    let t = 0;
    const { valueOffsets: n, values: i, nullBitmap: s, typeIds: r } = this;
    return n && (t += n.byteLength), i && (t += i.byteLength), s && (t += s.byteLength), r && (t += r.byteLength), this.children.reduce((o, a) => o + a.byteLength, t);
  }
  get nullCount() {
    if (A.isUnion(this.type))
      return this.children.reduce((i, s) => i + s.nullCount, 0);
    let t = this._nullCount, n;
    return t <= pv && (n = this.nullBitmap) && (this._nullCount = t = n.length === 0 ? (
      // no null bitmap, so all values are valid
      0
    ) : this.length - ho(n, this.offset, this.offset + this.length)), t;
  }
  constructor(t, n, i, s, r, o = [], a) {
    this.type = t, this.children = o, this.dictionary = a, this.offset = Math.floor(Math.max(n || 0, 0)), this.length = Math.floor(Math.max(i || 0, 0)), this._nullCount = Math.floor(Math.max(s || 0, -1));
    let c;
    r instanceof ct ? (this.stride = r.stride, this.values = r.values, this.typeIds = r.typeIds, this.nullBitmap = r.nullBitmap, this.valueOffsets = r.valueOffsets) : (this.stride = Ge(t), r && ((c = r[0]) && (this.valueOffsets = c), (c = r[1]) && (this.values = c), (c = r[2]) && (this.nullBitmap = c), (c = r[3]) && (this.typeIds = c)));
  }
  getValid(t) {
    const { type: n } = this;
    if (A.isUnion(n)) {
      const i = n, s = this.children[i.typeIdToChildIndex[this.typeIds[t]]], r = i.mode === Tt.Dense ? this.valueOffsets[t] : t;
      return s.getValid(r);
    }
    if (this.nullable && this.nullCount > 0) {
      const i = this.offset + t;
      return (this.nullBitmap[i >> 3] & 1 << i % 8) !== 0;
    }
    return !0;
  }
  setValid(t, n) {
    let i;
    const { type: s } = this;
    if (A.isUnion(s)) {
      const r = s, o = this.children[r.typeIdToChildIndex[this.typeIds[t]]], a = r.mode === Tt.Dense ? this.valueOffsets[t] : t;
      i = o.getValid(a), o.setValid(a, n);
    } else {
      let { nullBitmap: r } = this;
      const { offset: o, length: a } = this, c = o + t, l = 1 << c % 8, u = c >> 3;
      (!r || r.byteLength <= u) && (r = new Uint8Array((o + a + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (r.set(Ks(o, a, this.nullBitmap), 0), Object.assign(this, { nullBitmap: r })) : Object.assign(this, { nullBitmap: r, _nullCount: 0 }));
      const d = r[u];
      i = (d & l) !== 0, r[u] = n ? d | l : d & ~l;
    }
    return i !== !!n && (this._nullCount = this.nullCount + (n ? -1 : 1)), n;
  }
  clone(t = this.type, n = this.offset, i = this.length, s = this._nullCount, r = this, o = this.children) {
    return new ct(t, n, i, s, r, o, this.dictionary);
  }
  slice(t, n) {
    const { stride: i, typeId: s, children: r } = this, o = +(this._nullCount === 0) - 1, a = s === 16 ? i : 1, c = this._sliceBuffers(t, n, i, s);
    return this.clone(
      this.type,
      this.offset + t,
      n,
      o,
      c,
      // Don't slice children if we have value offsets (the variable-width types)
      r.length === 0 || this.valueOffsets ? r : this._sliceChildren(r, a * t, a * n)
    );
  }
  _changeLengthAndBackfillNullBitmap(t) {
    if (this.typeId === h.Null)
      return this.clone(this.type, 0, t, 0);
    const { length: n, nullCount: i } = this, s = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, n >> 3);
    s[n >> 3] = (1 << n - (n & -8)) - 1, i > 0 && s.set(Ks(this.offset, n, this.nullBitmap), 0);
    const r = this.buffers;
    return r[Oe.VALIDITY] = s, this.clone(this.type, 0, t, i + (t - n), r);
  }
  _sliceBuffers(t, n, i, s) {
    let r;
    const { buffers: o } = this;
    return (r = o[Oe.TYPE]) && (o[Oe.TYPE] = r.subarray(t, t + n)), (r = o[Oe.OFFSET]) && (o[Oe.OFFSET] = r.subarray(t, t + n + 1)) || // Otherwise if no offsets, slice the data buffer. Don't slice the data vector for Booleans, since the offset goes by bits not bytes
    (r = o[Oe.DATA]) && (o[Oe.DATA] = s === 6 ? r : r.subarray(i * t, i * (t + n))), o;
  }
  _sliceChildren(t, n, i) {
    return t.map((s) => s.slice(n, i));
  }
}
ct.prototype.children = Object.freeze([]);
class Ms extends Q {
  visit(t) {
    return this.getVisitFn(t.type).call(this, t);
  }
  visitNull(t) {
    const { ["type"]: n, ["offset"]: i = 0, ["length"]: s = 0 } = t;
    return new ct(n, i, s, s);
  }
  visitBool(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.nullBitmap), r = tt(n.ArrayType, t.data), { ["length"]: o = r.length >> 3, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, o, a, [void 0, r, s]);
  }
  visitInt(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.nullBitmap), r = tt(n.ArrayType, t.data), { ["length"]: o = r.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, o, a, [void 0, r, s]);
  }
  visitFloat(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.nullBitmap), r = tt(n.ArrayType, t.data), { ["length"]: o = r.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, o, a, [void 0, r, s]);
  }
  visitUtf8(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.data), r = Z(t.nullBitmap), o = Ri(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, a, c, [o, s, r]);
  }
  visitLargeUtf8(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.data), r = Z(t.nullBitmap), o = Va(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, a, c, [o, s, r]);
  }
  visitBinary(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.data), r = Z(t.nullBitmap), o = Ri(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, a, c, [o, s, r]);
  }
  visitLargeBinary(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.data), r = Z(t.nullBitmap), o = Va(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, a, c, [o, s, r]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.nullBitmap), r = tt(n.ArrayType, t.data), { ["length"]: o = r.length / Ge(n), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, o, a, [void 0, r, s]);
  }
  visitDate(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.nullBitmap), r = tt(n.ArrayType, t.data), { ["length"]: o = r.length / Ge(n), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, o, a, [void 0, r, s]);
  }
  visitTimestamp(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.nullBitmap), r = tt(n.ArrayType, t.data), { ["length"]: o = r.length / Ge(n), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, o, a, [void 0, r, s]);
  }
  visitTime(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.nullBitmap), r = tt(n.ArrayType, t.data), { ["length"]: o = r.length / Ge(n), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, o, a, [void 0, r, s]);
  }
  visitDecimal(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.nullBitmap), r = tt(n.ArrayType, t.data), { ["length"]: o = r.length / Ge(n), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, o, a, [void 0, r, s]);
  }
  visitList(t) {
    const { ["type"]: n, ["offset"]: i = 0, ["child"]: s } = t, r = Z(t.nullBitmap), o = Ri(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, a, c, [o, void 0, r], [s]);
  }
  visitStruct(t) {
    const { ["type"]: n, ["offset"]: i = 0, ["children"]: s = [] } = t, r = Z(t.nullBitmap), { length: o = s.reduce((c, { length: l }) => Math.max(c, l), 0), nullCount: a = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, o, a, [void 0, void 0, r], s);
  }
  visitUnion(t) {
    const { ["type"]: n, ["offset"]: i = 0, ["children"]: s = [] } = t, r = tt(n.ArrayType, t.typeIds), { ["length"]: o = r.length, ["nullCount"]: a = -1 } = t;
    if (A.isSparseUnion(n))
      return new ct(n, i, o, a, [void 0, void 0, void 0, r], s);
    const c = Ri(t.valueOffsets);
    return new ct(n, i, o, a, [c, void 0, void 0, r], s);
  }
  visitDictionary(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.nullBitmap), r = tt(n.indices.ArrayType, t.data), { ["dictionary"]: o = new R([new Ms().visit({ type: n.dictionary })]) } = t, { ["length"]: a = r.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, a, c, [void 0, r, s], [], o);
  }
  visitInterval(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.nullBitmap), r = tt(n.ArrayType, t.data), { ["length"]: o = r.length / Ge(n), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, o, a, [void 0, r, s]);
  }
  visitDuration(t) {
    const { ["type"]: n, ["offset"]: i = 0 } = t, s = Z(t.nullBitmap), r = tt(n.ArrayType, t.data), { ["length"]: o = r.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, o, a, [void 0, r, s]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: n, ["offset"]: i = 0, ["child"]: s = new Ms().visit({ type: n.valueType }) } = t, r = Z(t.nullBitmap), { ["length"]: o = s.length / Ge(n), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, o, a, [void 0, void 0, r], [s]);
  }
  visitMap(t) {
    const { ["type"]: n, ["offset"]: i = 0, ["child"]: s = new Ms().visit({ type: n.childType }) } = t, r = Z(t.nullBitmap), o = Ri(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new ct(n, i, a, c, [o, void 0, r], [s]);
  }
}
const yv = new Ms();
function C(e) {
  return yv.visit(e);
}
class zu {
  constructor(t = 0, n) {
    this.numChunks = t, this.getChunkIterator = n, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0);
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
function gv(e) {
  return e.some((t) => t.nullable);
}
function jh(e) {
  return e.reduce((t, n) => t + n.nullCount, 0);
}
function $h(e) {
  return e.reduce((t, n, i) => (t[i + 1] = t[i] + n.length, t), new Uint32Array(e.length + 1));
}
function zh(e, t, n, i) {
  const s = [];
  for (let r = -1, o = e.length; ++r < o; ) {
    const a = e[r], c = t[r], { length: l } = a;
    if (c >= i)
      break;
    if (n >= c + l)
      continue;
    if (c >= n && c + l <= i) {
      s.push(a);
      continue;
    }
    const u = Math.max(0, n - c), d = Math.min(i - c, l);
    s.push(a.slice(u, d - u));
  }
  return s.length === 0 && s.push(e[0].slice(0, 0)), s;
}
function Gc(e, t, n, i) {
  let s = 0, r = 0, o = t.length - 1;
  do {
    if (s >= o - 1)
      return n < t[o] ? i(e, s, n - t[s]) : null;
    r = s + Math.trunc((o - s) * 0.5), n < t[r] ? o = r : s = r;
  } while (s < o);
}
function qc(e, t) {
  return e.getValid(t);
}
function po(e) {
  function t(n, i, s) {
    return e(n[i], s);
  }
  return function(n) {
    const i = this.data;
    return Gc(i, this._offsets, n, t);
  };
}
function Wh(e) {
  let t;
  function n(i, s, r) {
    return e(i[s], r, t);
  }
  return function(i, s) {
    const r = this.data;
    t = s;
    const o = Gc(r, this._offsets, i, n);
    return t = void 0, o;
  };
}
function Hh(e) {
  let t;
  function n(i, s, r) {
    let o = r, a = 0, c = 0;
    for (let l = s - 1, u = i.length; ++l < u; ) {
      const d = i[l];
      if (~(a = e(d, t, o)))
        return c + a;
      o = 0, c += d.length;
    }
    return -1;
  }
  return function(i, s) {
    t = i;
    const r = this.data, o = typeof s != "number" ? n(r, 0, 0) : Gc(r, this._offsets, s, n);
    return t = void 0, o;
  };
}
class U extends Q {
}
function _v(e, t) {
  return t === null && e.length > 0 ? 0 : -1;
}
function mv(e, t) {
  const { nullBitmap: n } = e;
  if (!n || e.nullCount <= 0)
    return -1;
  let i = 0;
  for (const s of new ss(n, e.offset + (t || 0), e.length, n, Po)) {
    if (!s)
      return i;
    ++i;
  }
  return -1;
}
function K(e, t, n) {
  if (t === void 0)
    return -1;
  if (t === null)
    switch (e.typeId) {
      // Unions don't have a nullBitmap of its own, so compare the `searchElement` to `get()`.
      case h.Union:
        break;
      // Dictionaries do have a nullBitmap, but their dictionary could also have null elements.
      case h.Dictionary:
        break;
      // All other types can iterate the null bitmap
      default:
        return mv(e, n);
    }
  const i = oe.getVisitFn(e), s = wi(t);
  for (let r = (n || 0) - 1, o = e.length; ++r < o; )
    if (s(i(e, r)))
      return r;
  return -1;
}
function Yh(e, t, n) {
  const i = oe.getVisitFn(e), s = wi(t);
  for (let r = (n || 0) - 1, o = e.length; ++r < o; )
    if (s(i(e, r)))
      return r;
  return -1;
}
U.prototype.visitNull = _v;
U.prototype.visitBool = K;
U.prototype.visitInt = K;
U.prototype.visitInt8 = K;
U.prototype.visitInt16 = K;
U.prototype.visitInt32 = K;
U.prototype.visitInt64 = K;
U.prototype.visitUint8 = K;
U.prototype.visitUint16 = K;
U.prototype.visitUint32 = K;
U.prototype.visitUint64 = K;
U.prototype.visitFloat = K;
U.prototype.visitFloat16 = K;
U.prototype.visitFloat32 = K;
U.prototype.visitFloat64 = K;
U.prototype.visitUtf8 = K;
U.prototype.visitLargeUtf8 = K;
U.prototype.visitBinary = K;
U.prototype.visitLargeBinary = K;
U.prototype.visitFixedSizeBinary = K;
U.prototype.visitDate = K;
U.prototype.visitDateDay = K;
U.prototype.visitDateMillisecond = K;
U.prototype.visitTimestamp = K;
U.prototype.visitTimestampSecond = K;
U.prototype.visitTimestampMillisecond = K;
U.prototype.visitTimestampMicrosecond = K;
U.prototype.visitTimestampNanosecond = K;
U.prototype.visitTime = K;
U.prototype.visitTimeSecond = K;
U.prototype.visitTimeMillisecond = K;
U.prototype.visitTimeMicrosecond = K;
U.prototype.visitTimeNanosecond = K;
U.prototype.visitDecimal = K;
U.prototype.visitList = K;
U.prototype.visitStruct = K;
U.prototype.visitUnion = K;
U.prototype.visitDenseUnion = Yh;
U.prototype.visitSparseUnion = Yh;
U.prototype.visitDictionary = K;
U.prototype.visitInterval = K;
U.prototype.visitIntervalDayTime = K;
U.prototype.visitIntervalYearMonth = K;
U.prototype.visitDuration = K;
U.prototype.visitDurationSecond = K;
U.prototype.visitDurationMillisecond = K;
U.prototype.visitDurationMicrosecond = K;
U.prototype.visitDurationNanosecond = K;
U.prototype.visitFixedSizeList = K;
U.prototype.visitMap = K;
const yo = new U();
class V extends Q {
}
function W(e) {
  const { type: t } = e;
  if (e.nullCount === 0 && e.stride === 1 && // Don't defer to native iterator for timestamps since Numbers are expected
  // (DataType.isTimestamp(type)) && type.unit === TimeUnit.MILLISECOND ||
  (A.isInt(t) && t.bitWidth !== 64 || A.isTime(t) && t.bitWidth !== 64 || A.isFloat(t) && t.precision !== Dt.HALF))
    return new zu(e.data.length, (i) => {
      const s = e.data[i];
      return s.values.subarray(0, s.length)[Symbol.iterator]();
    });
  let n = 0;
  return new zu(e.data.length, (i) => {
    const r = e.data[i].length, o = e.slice(n, n + r);
    return n += r, new bv(o);
  });
}
class bv {
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
V.prototype.visitNull = W;
V.prototype.visitBool = W;
V.prototype.visitInt = W;
V.prototype.visitInt8 = W;
V.prototype.visitInt16 = W;
V.prototype.visitInt32 = W;
V.prototype.visitInt64 = W;
V.prototype.visitUint8 = W;
V.prototype.visitUint16 = W;
V.prototype.visitUint32 = W;
V.prototype.visitUint64 = W;
V.prototype.visitFloat = W;
V.prototype.visitFloat16 = W;
V.prototype.visitFloat32 = W;
V.prototype.visitFloat64 = W;
V.prototype.visitUtf8 = W;
V.prototype.visitLargeUtf8 = W;
V.prototype.visitBinary = W;
V.prototype.visitLargeBinary = W;
V.prototype.visitFixedSizeBinary = W;
V.prototype.visitDate = W;
V.prototype.visitDateDay = W;
V.prototype.visitDateMillisecond = W;
V.prototype.visitTimestamp = W;
V.prototype.visitTimestampSecond = W;
V.prototype.visitTimestampMillisecond = W;
V.prototype.visitTimestampMicrosecond = W;
V.prototype.visitTimestampNanosecond = W;
V.prototype.visitTime = W;
V.prototype.visitTimeSecond = W;
V.prototype.visitTimeMillisecond = W;
V.prototype.visitTimeMicrosecond = W;
V.prototype.visitTimeNanosecond = W;
V.prototype.visitDecimal = W;
V.prototype.visitList = W;
V.prototype.visitStruct = W;
V.prototype.visitUnion = W;
V.prototype.visitDenseUnion = W;
V.prototype.visitSparseUnion = W;
V.prototype.visitDictionary = W;
V.prototype.visitInterval = W;
V.prototype.visitIntervalDayTime = W;
V.prototype.visitIntervalYearMonth = W;
V.prototype.visitDuration = W;
V.prototype.visitDurationSecond = W;
V.prototype.visitDurationMillisecond = W;
V.prototype.visitDurationMicrosecond = W;
V.prototype.visitDurationNanosecond = W;
V.prototype.visitFixedSizeList = W;
V.prototype.visitMap = W;
const Jc = new V();
var Kh;
const Gh = {}, qh = {};
class R {
  constructor(t) {
    var n, i, s;
    const r = t[0] instanceof R ? t.flatMap((a) => a.data) : t;
    if (r.length === 0 || r.some((a) => !(a instanceof ct)))
      throw new TypeError("Vector constructor expects an Array of Data instances.");
    const o = (n = r[0]) === null || n === void 0 ? void 0 : n.type;
    switch (r.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        const { get: a, set: c, indexOf: l } = Gh[o.typeId], u = r[0];
        this.isValid = (d) => qc(u, d), this.get = (d) => a(u, d), this.set = (d, y) => c(u, d, y), this.indexOf = (d) => l(u, d), this._offsets = [0, u.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, qh[o.typeId]), this._offsets = $h(r);
        break;
    }
    this.data = r, this.type = o, this.stride = Ge(o), this.numChildren = (s = (i = o.children) === null || i === void 0 ? void 0 : i.length) !== null && s !== void 0 ? s : 0, this.length = this._offsets.at(-1);
  }
  /**
   * The aggregate size (in bytes) of this Vector's buffers and/or child Vectors.
   */
  get byteLength() {
    return this.data.reduce((t, n) => t + n.byteLength, 0);
  }
  /**
   * Whether this Vector's elements can contain null values.
   */
  get nullable() {
    return gv(this.data);
  }
  /**
   * The number of null elements in this Vector.
   */
  get nullCount() {
    return jh(this.data);
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
    return `${h[this.type.typeId]}Vector`;
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
    return this.get(Uo(t, this.length));
  }
  /**
   * Set an element value by position.
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  // @ts-ignore
  set(t, n) {
  }
  /**
   * Retrieve the index of the first occurrence of a value in an Vector.
   * @param element The value to locate in the Vector.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  // @ts-ignore
  indexOf(t, n) {
    return -1;
  }
  includes(t, n) {
    return this.indexOf(t, n) > -1;
  }
  /**
   * Iterator for the Vector's elements.
   */
  [Symbol.iterator]() {
    return Jc.visit(this);
  }
  /**
   * Combines two or more Vectors of the same type.
   * @param others Additional Vectors to add to the end of this Vector.
   */
  concat(...t) {
    return new R(this.data.concat(t.flatMap((n) => n.data).flat(Number.POSITIVE_INFINITY)));
  }
  /**
   * Return a zero-copy sub-section of this Vector.
   * @param start The beginning of the specified portion of the Vector.
   * @param end The end of the specified portion of the Vector. This is exclusive of the element at the index 'end'.
   */
  slice(t, n) {
    return new R(Yc(this, t, n, ({ data: i, _offsets: s }, r, o) => zh(i, s, r, o)));
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
    const { type: t, data: n, length: i, stride: s, ArrayType: r } = this;
    switch (t.typeId) {
      case h.Int:
      case h.Float:
      case h.Decimal:
      case h.Time:
      case h.Timestamp:
        switch (n.length) {
          case 0:
            return new r();
          case 1:
            return n[0].values.subarray(0, i * s);
          default:
            return n.reduce((o, { values: a, length: c }) => (o.array.set(a.subarray(0, c * s), o.offset), o.offset += c * s, o), { array: new r(i * s), offset: 0 }).array;
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
    var n;
    return this.getChildAt((n = this.type.children) === null || n === void 0 ? void 0 : n.findIndex((i) => i.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    return t > -1 && t < this.numChildren ? new R(this.data.map(({ children: n }) => n[t])) : null;
  }
  get isMemoized() {
    return A.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1;
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
    if (A.isDictionary(this.type)) {
      const t = new go(this.data[0].dictionary), n = this.data.map((i) => {
        const s = i.clone();
        return s.dictionary = t, s;
      });
      return new R(n);
    }
    return new go(this);
  }
  /**
   * Returns a vector without memoization of the {@link get} method. If this
   * vector is not memoized, this method returns this vector.
   *
   * @returns A new vector without memoization.
   */
  unmemoize() {
    if (A.isDictionary(this.type) && this.isMemoized) {
      const t = this.data[0].dictionary.unmemoize(), n = this.data.map((i) => {
        const s = i.clone();
        return s.dictionary = t, s;
      });
      return new R(n);
    }
    return this;
  }
}
Kh = Symbol.toStringTag;
R[Kh] = ((e) => {
  e.type = A.prototype, e.data = [], e.length = 0, e.stride = 1, e.numChildren = 0, e._offsets = new Uint32Array([0]), e[Symbol.isConcatSpreadable] = !0;
  const t = Object.keys(h).map((n) => h[n]).filter((n) => typeof n == "number" && n !== h.NONE);
  for (const n of t) {
    const i = oe.getVisitFnByTypeId(n), s = we.getVisitFnByTypeId(n), r = yo.getVisitFnByTypeId(n);
    Gh[n] = { get: i, set: s, indexOf: r }, qh[n] = Object.create(e, {
      isValid: { value: po(qc) },
      get: { value: po(oe.getVisitFnByTypeId(n)) },
      set: { value: Wh(we.getVisitFnByTypeId(n)) },
      indexOf: { value: Hh(yo.getVisitFnByTypeId(n)) }
    });
  }
  return "Vector";
})(R.prototype);
class go extends R {
  constructor(t) {
    super(t.data);
    const n = this.get, i = this.set, s = this.slice, r = new Array(this.length);
    Object.defineProperty(this, "get", {
      value(o) {
        const a = r[o];
        if (a !== void 0)
          return a;
        const c = n.call(this, o);
        return r[o] = c, c;
      }
    }), Object.defineProperty(this, "set", {
      value(o, a) {
        i.call(this, o, a), r[o] = a;
      }
    }), Object.defineProperty(this, "slice", {
      value: (o, a) => new go(s.call(this, o, a))
    }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", {
      value: () => new R(this.data)
    }), Object.defineProperty(this, "memoize", {
      value: () => this
    });
  }
}
function ko(e) {
  if (e) {
    if (e instanceof ct)
      return new R([e]);
    if (e instanceof R)
      return new R(e.data);
    if (e.type instanceof A)
      return new R([C(e)]);
    if (Array.isArray(e))
      return new R(e.flatMap((t) => vv(t)));
    if (ArrayBuffer.isView(e)) {
      e instanceof DataView && (e = new Uint8Array(e.buffer));
      const t = { offset: 0, length: e.length, nullCount: -1, data: e };
      if (e instanceof Int8Array)
        return new R([C(Object.assign(Object.assign({}, t), { type: new vc() }))]);
      if (e instanceof Int16Array)
        return new R([C(Object.assign(Object.assign({}, t), { type: new wc() }))]);
      if (e instanceof Int32Array)
        return new R([C(Object.assign(Object.assign({}, t), { type: new qn() }))]);
      if (e instanceof BigInt64Array)
        return new R([C(Object.assign(Object.assign({}, t), { type: new Mo() }))]);
      if (e instanceof Uint8Array || e instanceof Uint8ClampedArray)
        return new R([C(Object.assign(Object.assign({}, t), { type: new Ic() }))]);
      if (e instanceof Uint16Array)
        return new R([C(Object.assign(Object.assign({}, t), { type: new Sc() }))]);
      if (e instanceof Uint32Array)
        return new R([C(Object.assign(Object.assign({}, t), { type: new Ec() }))]);
      if (e instanceof BigUint64Array)
        return new R([C(Object.assign(Object.assign({}, t), { type: new Oc() }))]);
      if (e instanceof Float32Array)
        return new R([C(Object.assign(Object.assign({}, t), { type: new Nc() }))]);
      if (e instanceof Float64Array)
        return new R([C(Object.assign(Object.assign({}, t), { type: new Co() }))]);
      throw new Error("Unrecognized input");
    }
  }
  throw new Error("Unrecognized input");
}
function vv(e) {
  return e instanceof ct ? [e] : e instanceof R ? e.data : ko(e).data;
}
function wv(e) {
  if (!e || e.length <= 0)
    return function(s) {
      return !0;
    };
  let t = "";
  const n = e.filter((i) => i === i);
  return n.length > 0 && (t = `
    switch (x) {${n.map((i) => `
        case ${Iv(i)}:`).join("")}
            return false;
    }`), e.length !== n.length && (t = `if (x !== x) return false;
${t}`), new Function("x", `${t}
return true;`);
}
function Iv(e) {
  return typeof e != "bigint" ? Gn(e) : `${Gn(e)}n`;
}
function da(e, t) {
  const n = Math.ceil(e) * t - 1;
  return (n - n % 64 + 64 || 64) / t;
}
function Wu(e, t = 0) {
  return e.length >= t ? e.subarray(0, t) : co(new e.constructor(t), e, 0);
}
class cr {
  constructor(t, n = 0, i = 1) {
    this.length = Math.ceil(n / i), this.buffer = new t(this.length), this.stride = i, this.BYTES_PER_ELEMENT = t.BYTES_PER_ELEMENT, this.ArrayType = t;
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
  set(t, n) {
    return this;
  }
  append(t) {
    return this.set(this.length, t);
  }
  reserve(t) {
    if (t > 0) {
      this.length += t;
      const n = this.stride, i = this.length * n, s = this.buffer.length;
      i >= s && this._resize(s === 0 ? da(i * 1, this.BYTES_PER_ELEMENT) : da(i * 2, this.BYTES_PER_ELEMENT));
    }
    return this;
  }
  flush(t = this.length) {
    t = da(t * this.stride, this.BYTES_PER_ELEMENT);
    const n = Wu(this.buffer, t);
    return this.clear(), n;
  }
  clear() {
    return this.length = 0, this.buffer = new this.ArrayType(), this;
  }
  _resize(t) {
    return this.buffer = Wu(this.buffer, t);
  }
}
class lr extends cr {
  last() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.buffer[t];
  }
  set(t, n) {
    return this.reserve(t - this.length + 1), this.buffer[t * this.stride] = n, this;
  }
}
class Jh extends lr {
  constructor() {
    super(Uint8Array, 0, 1 / 8), this.numValid = 0;
  }
  get numInvalid() {
    return this.length - this.numValid;
  }
  get(t) {
    return this.buffer[t >> 3] >> t % 8 & 1;
  }
  set(t, n) {
    const { buffer: i } = this.reserve(t - this.length + 1), s = t >> 3, r = t % 8, o = i[s] >> r & 1;
    return n ? o === 0 && (i[s] |= 1 << r, ++this.numValid) : o === 1 && (i[s] &= ~(1 << r), --this.numValid), this;
  }
  clear() {
    return this.numValid = 0, super.clear();
  }
}
class Qh extends lr {
  constructor(t) {
    super(t.OffsetArrayType, 1, 1);
  }
  append(t) {
    return this.set(this.length - 1, t);
  }
  set(t, n) {
    const i = this.length - 1, s = this.reserve(t - i + 1).buffer;
    return i < t++ && i >= 0 && s.fill(s[i], i, t), s[t] = s[t - 1] + n, this;
  }
  flush(t = this.length - 1) {
    return t > this.length && this.set(t - 1, this.BYTES_PER_ELEMENT > 4 ? BigInt(0) : 0), super.flush(t + 1);
  }
}
let zt = class {
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
  constructor({ type: t, nullValues: n }) {
    this.length = 0, this.finished = !1, this.type = t, this.children = [], this.nullValues = n, this.stride = Ge(t), this._nulls = new Jh(), n && n.length > 0 && (this._isValid = wv(n));
  }
  /**
   * Flush the `Builder` and return a `Vector<T>`.
   * @returns {Vector<T>} A `Vector<T>` of the flushed values.
   */
  toVector() {
    return new R([this.flush()]);
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
    const { _offsets: n, _values: i, _nulls: s, _typeIds: r, children: o } = this;
    return n && (t += n.byteLength), i && (t += i.byteLength), s && (t += s.byteLength), r && (t += r.byteLength), o.reduce((a, c) => a + c.byteLength, t);
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
    return this._offsets && (t += this._offsets.reservedByteLength), this._values && (t += this._values.reservedByteLength), this._nulls && (t += this._nulls.reservedByteLength), this._typeIds && (t += this._typeIds.reservedByteLength), this.children.reduce((n, i) => n + i.reservedByteLength, t);
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
  set(t, n) {
    return this.setValid(t, this.isValid(n)) && this.setValue(t, n), this;
  }
  /**
   * Write a value to the underlying buffers at the supplied index, bypassing
   * the null-value check. This is a low-level method that
   * @param {number} index
   * @param {T['TValue'] | TNull } value
   */
  setValue(t, n) {
    this._setValue(this, t, n);
  }
  setValid(t, n) {
    return this.length = this._nulls.set(t, +n).length, n;
  }
  // @ts-ignore
  addChild(t, n = `${this.numChildren}`) {
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
    let t, n, i, s;
    const { type: r, length: o, nullCount: a, _typeIds: c, _offsets: l, _values: u, _nulls: d } = this;
    (n = c == null ? void 0 : c.flush(o)) ? s = l == null ? void 0 : l.flush(o) : (s = l == null ? void 0 : l.flush(o)) ? t = u == null ? void 0 : u.flush(l.last()) : t = u == null ? void 0 : u.flush(o), a > 0 && (i = d == null ? void 0 : d.flush(o));
    const y = this.children.map((_) => _.flush());
    return this.clear(), C({
      type: r,
      length: o,
      nullCount: a,
      children: y,
      child: y[0],
      data: t,
      typeIds: n,
      nullBitmap: i,
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
    var t, n, i, s;
    this.length = 0, (t = this._nulls) === null || t === void 0 || t.clear(), (n = this._values) === null || n === void 0 || n.clear(), (i = this._offsets) === null || i === void 0 || i.clear(), (s = this._typeIds) === null || s === void 0 || s.clear();
    for (const r of this.children)
      r.clear();
    return this;
  }
};
zt.prototype.length = 1;
zt.prototype.stride = 1;
zt.prototype.children = null;
zt.prototype.finished = !1;
zt.prototype.nullValues = null;
zt.prototype._isValid = () => !0;
class Tn extends zt {
  constructor(t) {
    super(t), this._values = new lr(this.ArrayType, 0, this.stride);
  }
  setValue(t, n) {
    const i = this._values;
    return i.reserve(t - i.length + 1), super.setValue(t, n);
  }
}
class ls extends zt {
  constructor(t) {
    super(t), this._pendingLength = 0, this._offsets = new Qh(t.type);
  }
  setValue(t, n) {
    const i = this._pending || (this._pending = /* @__PURE__ */ new Map()), s = i.get(t);
    s && (this._pendingLength -= s.length), this._pendingLength += n instanceof ar ? n[ai].length : n.length, i.set(t, n);
  }
  setValid(t, n) {
    return super.setValid(t, n) ? !0 : ((this._pending || (this._pending = /* @__PURE__ */ new Map())).set(t, void 0), !1);
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
    const t = this._pending, n = this._pendingLength;
    return this._pendingLength = 0, this._pending = void 0, t && t.size > 0 && this._flushPending(t, n), this;
  }
}
class Wa {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
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
  static createBlock(t, n, i, s) {
    return t.prep(8, 24), t.writeInt64(BigInt(s ?? 0)), t.pad(4), t.writeInt32(i), t.writeInt64(BigInt(n ?? 0)), t.offset();
  }
}
class le {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsFooter(t, n) {
    return (n || new le()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFooter(t, n) {
    return t.setPosition(t.position() + yt), (n || new le()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ot.V1;
  }
  schema(t) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (t || new Ke()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
  }
  dictionaries(t, n) {
    const i = this.bb.__offset(this.bb_pos, 8);
    return i ? (n || new Wa()).__init(this.bb.__vector(this.bb_pos + i) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, n) {
    const i = this.bb.__offset(this.bb_pos, 10);
    return i ? (n || new Wa()).__init(this.bb.__vector(this.bb_pos + i) + t * 24, this.bb) : null;
  }
  recordBatchesLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, n) {
    const i = this.bb.__offset(this.bb_pos, 12);
    return i ? (n || new Rt()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startFooter(t) {
    t.startObject(5);
  }
  static addVersion(t, n) {
    t.addFieldInt16(0, n, Ot.V1);
  }
  static addSchema(t, n) {
    t.addFieldOffset(1, n, 0);
  }
  static addDictionaries(t, n) {
    t.addFieldOffset(2, n, 0);
  }
  static startDictionariesVector(t, n) {
    t.startVector(24, n, 8);
  }
  static addRecordBatches(t, n) {
    t.addFieldOffset(3, n, 0);
  }
  static startRecordBatchesVector(t, n) {
    t.startVector(24, n, 8);
  }
  static addCustomMetadata(t, n) {
    t.addFieldOffset(4, n, 0);
  }
  static createCustomMetadataVector(t, n) {
    t.startVector(4, n.length, 4);
    for (let i = n.length - 1; i >= 0; i--)
      t.addOffset(n[i]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, n) {
    t.startVector(4, n, 4);
  }
  static endFooter(t) {
    return t.endObject();
  }
  static finishFooterBuffer(t, n) {
    t.finish(n);
  }
  static finishSizePrefixedFooterBuffer(t, n) {
    t.finish(n, void 0, !0);
  }
}
class ft {
  constructor(t = [], n, i, s = Ot.V5) {
    this.fields = t || [], this.metadata = n || /* @__PURE__ */ new Map(), i || (i = Ha(this.fields)), this.dictionaries = i, this.metadataVersion = s;
  }
  get [Symbol.toStringTag]() {
    return "Schema";
  }
  get names() {
    return this.fields.map((t) => t.name);
  }
  toString() {
    return `Schema<{ ${this.fields.map((t, n) => `${n}: ${t}`).join(", ")} }>`;
  }
  /**
   * Construct a new Schema containing only specified fields.
   *
   * @param fieldNames Names of fields to keep.
   * @returns A new Schema of fields matching the specified names.
   */
  select(t) {
    const n = new Set(t), i = this.fields.filter((s) => n.has(s.name));
    return new ft(i, this.metadata);
  }
  /**
   * Construct a new Schema containing only fields at the specified indices.
   *
   * @param fieldIndices Indices of fields to keep.
   * @returns A new Schema of fields at the specified indices.
   */
  selectAt(t) {
    const n = t.map((i) => this.fields[i]).filter(Boolean);
    return new ft(n, this.metadata);
  }
  assign(...t) {
    const n = t[0] instanceof ft ? t[0] : Array.isArray(t[0]) ? new ft(t[0]) : new ft(t), i = [...this.fields], s = Dr(Dr(/* @__PURE__ */ new Map(), this.metadata), n.metadata), r = n.fields.filter((a) => {
      const c = i.findIndex((l) => l.name === a.name);
      return ~c ? (i[c] = a.clone({
        metadata: Dr(Dr(/* @__PURE__ */ new Map(), i[c].metadata), a.metadata)
      })) && !1 : !0;
    }), o = Ha(r, /* @__PURE__ */ new Map());
    return new ft([...i, ...r], s, new Map([...this.dictionaries, ...o]));
  }
}
ft.prototype.fields = null;
ft.prototype.metadata = null;
ft.prototype.dictionaries = null;
class ut {
  /** @nocollapse */
  static new(...t) {
    let [n, i, s, r] = t;
    return t[0] && typeof t[0] == "object" && ({ name: n } = t[0], i === void 0 && (i = t[0].type), s === void 0 && (s = t[0].nullable), r === void 0 && (r = t[0].metadata)), new ut(`${n}`, i, s, r);
  }
  constructor(t, n, i = !1, s) {
    this.name = t, this.type = n, this.nullable = i, this.metadata = s || /* @__PURE__ */ new Map();
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
    let [n, i, s, r] = t;
    return !t[0] || typeof t[0] != "object" ? [n = this.name, i = this.type, s = this.nullable, r = this.metadata] = t : { name: n = this.name, type: i = this.type, nullable: s = this.nullable, metadata: r = this.metadata } = t[0], ut.new(n, i, s, r);
  }
}
ut.prototype.type = null;
ut.prototype.name = null;
ut.prototype.nullable = null;
ut.prototype.metadata = null;
function Dr(e, t) {
  return new Map([...e || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function Ha(e, t = /* @__PURE__ */ new Map()) {
  for (let n = -1, i = e.length; ++n < i; ) {
    const r = e[n].type;
    if (A.isDictionary(r)) {
      if (!t.has(r.id))
        t.set(r.id, r.dictionary);
      else if (t.get(r.id) !== r.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    r.children && r.children.length > 0 && Ha(r.children, t);
  }
  return t;
}
var Sv = Df, Ev = Qi;
class qs {
  /** @nocollapse */
  static decode(t) {
    t = new Ev(Z(t));
    const n = le.getRootAsFooter(t), i = ft.decode(n.schema(), /* @__PURE__ */ new Map(), n.version());
    return new Ov(i, n);
  }
  /** @nocollapse */
  static encode(t) {
    const n = new Sv(), i = ft.encode(n, t.schema);
    le.startRecordBatchesVector(n, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse())
      rn.encode(n, o);
    const s = n.endVector();
    le.startDictionariesVector(n, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse())
      rn.encode(n, o);
    const r = n.endVector();
    return le.startFooter(n), le.addSchema(n, i), le.addVersion(n, Ot.V5), le.addRecordBatches(n, s), le.addDictionaries(n, r), le.finishFooterBuffer(n, le.endFooter(n)), n.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  constructor(t, n = Ot.V5, i, s) {
    this.schema = t, this.version = n, i && (this._recordBatches = i), s && (this._dictionaryBatches = s);
  }
  *recordBatches() {
    for (let t, n = -1, i = this.numRecordBatches; ++n < i; )
      (t = this.getRecordBatch(n)) && (yield t);
  }
  *dictionaryBatches() {
    for (let t, n = -1, i = this.numDictionaries; ++n < i; )
      (t = this.getDictionaryBatch(n)) && (yield t);
  }
  getRecordBatch(t) {
    return t >= 0 && t < this.numRecordBatches && this._recordBatches[t] || null;
  }
  getDictionaryBatch(t) {
    return t >= 0 && t < this.numDictionaries && this._dictionaryBatches[t] || null;
  }
}
class Ov extends qs {
  get numRecordBatches() {
    return this._footer.recordBatchesLength();
  }
  get numDictionaries() {
    return this._footer.dictionariesLength();
  }
  constructor(t, n) {
    super(t, n.version()), this._footer = n;
  }
  getRecordBatch(t) {
    if (t >= 0 && t < this.numRecordBatches) {
      const n = this._footer.recordBatches(t);
      if (n)
        return rn.decode(n);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const n = this._footer.dictionaries(t);
      if (n)
        return rn.decode(n);
    }
    return null;
  }
}
class rn {
  /** @nocollapse */
  static decode(t) {
    return new rn(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  /** @nocollapse */
  static encode(t, n) {
    const { metaDataLength: i } = n, s = BigInt(n.offset), r = BigInt(n.bodyLength);
    return Wa.createBlock(t, s, i, r);
  }
  constructor(t, n, i) {
    this.metaDataLength = t, this.offset = vt(i), this.bodyLength = vt(n);
  }
}
const wt = Object.freeze({ done: !0, value: void 0 });
class Hu {
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
class Qc {
  tee() {
    return this._getDOMStream().tee();
  }
  pipe(t, n) {
    return this._getNodeStream().pipe(t, n);
  }
  pipeTo(t, n) {
    return this._getDOMStream().pipeTo(t, n);
  }
  pipeThrough(t, n) {
    return this._getDOMStream().pipeThrough(t, n);
  }
  _getDOMStream() {
    return this._DOMStream || (this._DOMStream = this.toDOMStream());
  }
  _getNodeStream() {
    return this._nodeStream || (this._nodeStream = this.toNodeStream());
  }
}
class Nv extends Qc {
  constructor() {
    super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((t) => this._closedPromiseResolve = t);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(t) {
    return F(this, void 0, void 0, function* () {
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
        t.shift().resolve(wt);
      this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(t) {
    return ue.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  toNodeStream(t) {
    return ue.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  throw(t) {
    return F(this, void 0, void 0, function* () {
      return yield this.abort(t), wt;
    });
  }
  return(t) {
    return F(this, void 0, void 0, function* () {
      return yield this.close(), wt;
    });
  }
  read(t) {
    return F(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return F(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(...t) {
    return this._values.length > 0 ? Promise.resolve({ done: !1, value: this._values.shift() }) : this._error ? Promise.reject({ done: !0, value: this._error.error }) : this._closedPromiseResolve ? new Promise((n, i) => {
      this.resolvers.push({ resolve: n, reject: i });
    }) : Promise.resolve(wt);
  }
  _ensureOpen() {
    if (this._closedPromiseResolve)
      return !0;
    throw new Error("AsyncQueue is closed");
  }
}
class Ji extends Nv {
  write(t) {
    if ((t = Z(t)).byteLength > 0)
      return super.write(t);
  }
  toString(t = !1) {
    return t ? xa(this.toUint8Array(!0)) : this.toUint8Array(!1).then(xa);
  }
  toUint8Array(t = !1) {
    return t ? xe(this._values)[0] : F(this, void 0, void 0, function* () {
      var n, i, s, r;
      const o = [];
      let a = 0;
      try {
        for (var c = !0, l = Wn(this), u; u = yield l.next(), n = u.done, !n; c = !0) {
          r = u.value, c = !1;
          const d = r;
          o.push(d), a += d.byteLength;
        }
      } catch (d) {
        i = { error: d };
      } finally {
        try {
          !c && !n && (s = l.return) && (yield s.call(l));
        } finally {
          if (i) throw i.error;
        }
      }
      return xe(o, a)[0];
    });
  }
}
class Js {
  constructor(t) {
    t && (this.source = new Dv(ue.fromIterable(t)));
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
class Zn {
  constructor(t) {
    t instanceof Zn ? this.source = t.source : t instanceof Ji ? this.source = new si(ue.fromAsyncIterable(t)) : If(t) ? this.source = new si(ue.fromNodeStream(t)) : gc(t) ? this.source = new si(ue.fromDOMStream(t)) : wf(t) ? this.source = new si(ue.fromDOMStream(t.body)) : cs(t) ? this.source = new si(ue.fromIterable(t)) : Kn(t) ? this.source = new si(ue.fromAsyncIterable(t)) : vi(t) && (this.source = new si(ue.fromAsyncIterable(t)));
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
class Dv {
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
  next(t, n = "read") {
    return this.source.next({ cmd: n, size: t });
  }
  throw(t) {
    return Object.create(this.source.throw && this.source.throw(t) || wt);
  }
  return(t) {
    return Object.create(this.source.return && this.source.return(t) || wt);
  }
}
class si {
  constructor(t) {
    this.source = t, this._closedPromise = new Promise((n) => this._closedPromiseResolve = n);
  }
  cancel(t) {
    return F(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(t) {
    return F(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return F(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(t) {
    return F(this, arguments, void 0, function* (n, i = "read") {
      return yield this.source.next({ cmd: i, size: n });
    });
  }
  throw(t) {
    return F(this, void 0, void 0, function* () {
      const n = this.source.throw && (yield this.source.throw(t)) || wt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(n);
    });
  }
  return(t) {
    return F(this, void 0, void 0, function* () {
      const n = this.source.return && (yield this.source.return(t)) || wt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(n);
    });
  }
}
class Yu extends Js {
  constructor(t, n) {
    super(), this.position = 0, this.buffer = Z(t), this.size = n === void 0 ? this.buffer.byteLength : n;
  }
  readInt32(t) {
    const { buffer: n, byteOffset: i } = this.readAt(t, 4);
    return new DataView(n, i).getInt32(0, !0);
  }
  seek(t) {
    return this.position = Math.min(t, this.size), t < this.size;
  }
  read(t) {
    const { buffer: n, size: i, position: s } = this;
    return n && s < i ? (typeof t != "number" && (t = Number.POSITIVE_INFINITY), this.position = Math.min(i, s + Math.min(i - s, t)), n.subarray(s, this.position)) : null;
  }
  readAt(t, n) {
    const i = this.buffer, s = Math.min(this.size, t + n);
    return i ? i.subarray(t, s) : new Uint8Array(n);
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
class _o extends Zn {
  constructor(t, n) {
    super(), this.position = 0, this._handle = t, typeof n == "number" ? this.size = n : this._pending = F(this, void 0, void 0, function* () {
      this.size = (yield t.stat()).size, delete this._pending;
    });
  }
  readInt32(t) {
    return F(this, void 0, void 0, function* () {
      const { buffer: n, byteOffset: i } = yield this.readAt(t, 4);
      return new DataView(n, i).getInt32(0, !0);
    });
  }
  seek(t) {
    return F(this, void 0, void 0, function* () {
      return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size;
    });
  }
  read(t) {
    return F(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: n, size: i, position: s } = this;
      if (n && s < i) {
        typeof t != "number" && (t = Number.POSITIVE_INFINITY);
        let r = s, o = 0, a = 0;
        const c = Math.min(i, r + Math.min(i - r, t)), l = new Uint8Array(Math.max(0, (this.position = c) - r));
        for (; (r += a) < c && (o += a) < l.byteLength; )
          ({ bytesRead: a } = yield n.read(l, o, l.byteLength - o, r));
        return l;
      }
      return null;
    });
  }
  readAt(t, n) {
    return F(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: i, size: s } = this;
      if (i && t + n < s) {
        const r = Math.min(s, t + n), o = new Uint8Array(r - t);
        return (yield i.read(o, 0, n, t)).buffer;
      }
      return new Uint8Array(n);
    });
  }
  close() {
    return F(this, void 0, void 0, function* () {
      const t = this._handle;
      this._handle = null, t && (yield t.close());
    });
  }
  throw(t) {
    return F(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
  return(t) {
    return F(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
}
const Tv = 65536;
function $i(e) {
  return e < 0 && (e = 4294967295 + e + 1), `0x${e.toString(16)}`;
}
const rs = 8, Zc = [
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
class Xc {
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
    const n = new Uint32Array([
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
    let s = n[3] * i[3];
    this.buffer[0] = s & 65535;
    let r = s >>> 16;
    return s = n[2] * i[3], r += s, s = n[3] * i[2] >>> 0, r += s, this.buffer[0] += r << 16, this.buffer[1] = r >>> 0 < s ? Tv : 0, this.buffer[1] += r >>> 16, this.buffer[1] += n[1] * i[3] + n[2] * i[2] + n[3] * i[1], this.buffer[1] += n[0] * i[3] + n[1] * i[2] + n[2] * i[1] + n[3] * i[0] << 16, this;
  }
  _plus(t) {
    const n = this.buffer[0] + t.buffer[0] >>> 0;
    this.buffer[1] += t.buffer[1], n < this.buffer[0] >>> 0 && ++this.buffer[1], this.buffer[0] = n;
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
    return `${$i(this.buffer[1])} ${$i(this.buffer[0])}`;
  }
}
class ht extends Xc {
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  /** @nocollapse */
  static from(t, n = new Uint32Array(2)) {
    return ht.fromString(typeof t == "string" ? t : t.toString(), n);
  }
  /** @nocollapse */
  static fromNumber(t, n = new Uint32Array(2)) {
    return ht.fromString(t.toString(), n);
  }
  /** @nocollapse */
  static fromString(t, n = new Uint32Array(2)) {
    const i = t.length, s = new ht(n);
    for (let r = 0; r < i; ) {
      const o = rs < i - r ? rs : i - r, a = new ht(new Uint32Array([Number.parseInt(t.slice(r, r + o), 10), 0])), c = new ht(new Uint32Array([Zc[o], 0]));
      s.times(c), s.plus(a), r += o;
    }
    return s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const n = new Uint32Array(t.length * 2);
    for (let i = -1, s = t.length; ++i < s; )
      ht.from(t[i], new Uint32Array(n.buffer, n.byteOffset + 2 * i * 4, 2));
    return n;
  }
  /** @nocollapse */
  static multiply(t, n) {
    return new ht(new Uint32Array(t.buffer)).times(n);
  }
  /** @nocollapse */
  static add(t, n) {
    return new ht(new Uint32Array(t.buffer)).plus(n);
  }
}
class Yt extends Xc {
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
    const n = this.buffer[1] << 0, i = t.buffer[1] << 0;
    return n < i || n === i && this.buffer[0] < t.buffer[0];
  }
  /** @nocollapse */
  static from(t, n = new Uint32Array(2)) {
    return Yt.fromString(typeof t == "string" ? t : t.toString(), n);
  }
  /** @nocollapse */
  static fromNumber(t, n = new Uint32Array(2)) {
    return Yt.fromString(t.toString(), n);
  }
  /** @nocollapse */
  static fromString(t, n = new Uint32Array(2)) {
    const i = t.startsWith("-"), s = t.length, r = new Yt(n);
    for (let o = i ? 1 : 0; o < s; ) {
      const a = rs < s - o ? rs : s - o, c = new Yt(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0])), l = new Yt(new Uint32Array([Zc[a], 0]));
      r.times(l), r.plus(c), o += a;
    }
    return i ? r.negate() : r;
  }
  /** @nocollapse */
  static convertArray(t) {
    const n = new Uint32Array(t.length * 2);
    for (let i = -1, s = t.length; ++i < s; )
      Yt.from(t[i], new Uint32Array(n.buffer, n.byteOffset + 2 * i * 4, 2));
    return n;
  }
  /** @nocollapse */
  static multiply(t, n) {
    return new Yt(new Uint32Array(t.buffer)).times(n);
  }
  /** @nocollapse */
  static add(t, n) {
    return new Yt(new Uint32Array(t.buffer)).plus(n);
  }
}
class Ee {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return new Yt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new Yt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
  }
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0 && ++this.buffer[1], this.buffer[1] == 0 && ++this.buffer[2], this.buffer[2] == 0 && ++this.buffer[3], this;
  }
  times(t) {
    const n = new ht(new Uint32Array([this.buffer[3], 0])), i = new ht(new Uint32Array([this.buffer[2], 0])), s = new ht(new Uint32Array([this.buffer[1], 0])), r = new ht(new Uint32Array([this.buffer[0], 0])), o = new ht(new Uint32Array([t.buffer[3], 0])), a = new ht(new Uint32Array([t.buffer[2], 0])), c = new ht(new Uint32Array([t.buffer[1], 0])), l = new ht(new Uint32Array([t.buffer[0], 0]));
    let u = ht.multiply(r, l);
    this.buffer[0] = u.low();
    const d = new ht(new Uint32Array([u.high(), 0]));
    return u = ht.multiply(s, l), d.plus(u), u = ht.multiply(r, c), d.plus(u), this.buffer[1] = d.low(), this.buffer[3] = d.lessThan(u) ? 1 : 0, this.buffer[2] = d.high(), new ht(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(ht.multiply(i, l)).plus(ht.multiply(s, c)).plus(ht.multiply(r, a)), this.buffer[3] += ht.multiply(n, l).plus(ht.multiply(i, c)).plus(ht.multiply(s, a)).plus(ht.multiply(r, o)).low(), this;
  }
  plus(t) {
    const n = new Uint32Array(4);
    return n[3] = this.buffer[3] + t.buffer[3] >>> 0, n[2] = this.buffer[2] + t.buffer[2] >>> 0, n[1] = this.buffer[1] + t.buffer[1] >>> 0, n[0] = this.buffer[0] + t.buffer[0] >>> 0, n[0] < this.buffer[0] >>> 0 && ++n[1], n[1] < this.buffer[1] >>> 0 && ++n[2], n[2] < this.buffer[2] >>> 0 && ++n[3], this.buffer[3] = n[3], this.buffer[2] = n[2], this.buffer[1] = n[1], this.buffer[0] = n[0], this;
  }
  hex() {
    return `${$i(this.buffer[3])} ${$i(this.buffer[2])} ${$i(this.buffer[1])} ${$i(this.buffer[0])}`;
  }
  /** @nocollapse */
  static multiply(t, n) {
    return new Ee(new Uint32Array(t.buffer)).times(n);
  }
  /** @nocollapse */
  static add(t, n) {
    return new Ee(new Uint32Array(t.buffer)).plus(n);
  }
  /** @nocollapse */
  static from(t, n = new Uint32Array(4)) {
    return Ee.fromString(typeof t == "string" ? t : t.toString(), n);
  }
  /** @nocollapse */
  static fromNumber(t, n = new Uint32Array(4)) {
    return Ee.fromString(t.toString(), n);
  }
  /** @nocollapse */
  static fromString(t, n = new Uint32Array(4)) {
    const i = t.startsWith("-"), s = t.length, r = new Ee(n);
    for (let o = i ? 1 : 0; o < s; ) {
      const a = rs < s - o ? rs : s - o, c = new Ee(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0, 0, 0])), l = new Ee(new Uint32Array([Zc[a], 0, 0, 0]));
      r.times(l), r.plus(c), o += a;
    }
    return i ? r.negate() : r;
  }
  /** @nocollapse */
  static convertArray(t) {
    const n = new Uint32Array(t.length * 4);
    for (let i = -1, s = t.length; ++i < s; )
      Ee.from(t[i], new Uint32Array(n.buffer, n.byteOffset + 16 * i, 4));
    return n;
  }
}
const Av = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseInt64: Xc,
  Int128: Ee,
  Int64: Yt,
  Uint64: ht
}, Symbol.toStringTag, { value: "Module" }));
class Zh extends Q {
  constructor(t, n, i, s, r = Ot.V5) {
    super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = n, this.buffers = i, this.dictionaries = s, this.metadataVersion = r;
  }
  visit(t) {
    return super.visit(t instanceof ut ? t.type : t);
  }
  visitNull(t, { length: n } = this.nextFieldNode()) {
    return C({ type: t, length: n });
  }
  visitBool(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitInt(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitFloat(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitUtf8(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeUtf8(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitBinary(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeBinary(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitFixedSizeBinary(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitDate(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitTimestamp(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitTime(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitDecimal(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitList(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  visitStruct(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), children: this.visitMany(t.children) });
  }
  visitUnion(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return this.metadataVersion < Ot.V5 && this.readNullBitmap(t, i), t.mode === Tt.Sparse ? this.visitSparseUnion(t, { length: n, nullCount: i }) : this.visitDenseUnion(t, { length: n, nullCount: i });
  }
  visitDenseUnion(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, typeIds: this.readTypeIds(t), valueOffsets: this.readOffsets(t), children: this.visitMany(t.children) });
  }
  visitSparseUnion(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, typeIds: this.readTypeIds(t), children: this.visitMany(t.children) });
  }
  visitDictionary(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t.indices), dictionary: this.readDictionary(t) });
  }
  visitInterval(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitDuration(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitFixedSizeList(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), child: this.visit(t.children[0]) });
  }
  visitMap(t, { length: n, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: n, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  nextFieldNode() {
    return this.nodes[++this.nodesIndex];
  }
  nextBufferRange() {
    return this.buffers[++this.buffersIndex];
  }
  readNullBitmap(t, n, i = this.nextBufferRange()) {
    return n > 0 && this.readData(t, i) || new Uint8Array(0);
  }
  readOffsets(t, n) {
    return this.readData(t, n);
  }
  readTypeIds(t, n) {
    return this.readData(t, n);
  }
  readData(t, { length: n, offset: i } = this.nextBufferRange()) {
    return this.bytes.subarray(i, i + n);
  }
  readDictionary(t) {
    return this.dictionaries.get(t.id);
  }
}
class Bv extends Zh {
  constructor(t, n, i, s, r) {
    super(new Uint8Array(0), n, i, s, r), this.sources = t;
  }
  readNullBitmap(t, n, { offset: i } = this.nextBufferRange()) {
    return n <= 0 ? new Uint8Array(0) : Gs(this.sources[i]);
  }
  readOffsets(t, { offset: n } = this.nextBufferRange()) {
    return tt(Uint8Array, tt(t.OffsetArrayType, this.sources[n]));
  }
  readTypeIds(t, { offset: n } = this.nextBufferRange()) {
    return tt(Uint8Array, tt(t.ArrayType, this.sources[n]));
  }
  readData(t, { offset: n } = this.nextBufferRange()) {
    const { sources: i } = this;
    return A.isTimestamp(t) || (A.isInt(t) || A.isTime(t)) && t.bitWidth === 64 || A.isDuration(t) || A.isDate(t) && t.unit === Pt.MILLISECOND ? tt(Uint8Array, Yt.convertArray(i[n])) : A.isDecimal(t) ? tt(Uint8Array, Ee.convertArray(i[n])) : A.isBinary(t) || A.isLargeBinary(t) || A.isFixedSizeBinary(t) ? Fv(i[n]) : A.isBool(t) ? Gs(i[n]) : A.isUtf8(t) || A.isLargeUtf8(t) ? rr(i[n].join("")) : tt(Uint8Array, tt(t.ArrayType, i[n].map((s) => +s)));
  }
}
function Fv(e) {
  const t = e.join(""), n = new Uint8Array(t.length / 2);
  for (let i = 0; i < t.length; i += 2)
    n[i >> 1] = Number.parseInt(t.slice(i, i + 2), 16);
  return n;
}
class tl extends ls {
  constructor(t) {
    super(t), this._values = new cr(Uint8Array);
  }
  get byteLength() {
    let t = this._pendingLength + this.length * 4;
    return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t;
  }
  setValue(t, n) {
    return super.setValue(t, Z(n));
  }
  _flushPending(t, n) {
    const i = this._offsets, s = this._values.reserve(n).buffer;
    let r = 0;
    for (const [o, a] of t)
      if (a === void 0)
        i.set(o, 0);
      else {
        const c = a.length;
        s.set(a, r), i.set(o, c), r += c;
      }
  }
}
class el extends ls {
  constructor(t) {
    super(t), this._values = new cr(Uint8Array);
  }
  get byteLength() {
    let t = this._pendingLength + this.length * 4;
    return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t;
  }
  setValue(t, n) {
    return super.setValue(t, Z(n));
  }
  _flushPending(t, n) {
    const i = this._offsets, s = this._values.reserve(n).buffer;
    let r = 0;
    for (const [o, a] of t)
      if (a === void 0)
        i.set(o, BigInt(0));
      else {
        const c = a.length;
        s.set(a, r), i.set(o, BigInt(c)), r += c;
      }
  }
}
class Xh extends zt {
  constructor(t) {
    super(t), this._values = new Jh();
  }
  setValue(t, n) {
    this._values.set(t, +n);
  }
}
class ur extends Tn {
}
ur.prototype._setValue = uh;
class nl extends ur {
}
nl.prototype._setValue = Bc;
class il extends ur {
}
il.prototype._setValue = Fc;
class sl extends Tn {
}
sl.prototype._setValue = hh;
class tp extends zt {
  constructor({ type: t, nullValues: n, dictionaryHashFunction: i }) {
    super({ type: new En(t.dictionary, t.indices, t.id, t.isOrdered) }), this._nulls = null, this._dictionaryOffset = 0, this._keysToIndices = /* @__PURE__ */ Object.create(null), this.indices = bi({ type: this.type.indices, nullValues: n }), this.dictionary = bi({ type: this.type.dictionary, nullValues: null }), typeof i == "function" && (this.valueToKey = i);
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
  setValid(t, n) {
    const i = this.indices;
    return n = i.setValid(t, n), this.length = i.length, n;
  }
  setValue(t, n) {
    const i = this._keysToIndices, s = this.valueToKey(n);
    let r = i[s];
    return r === void 0 && (i[s] = r = this._dictionaryOffset + this.dictionary.append(n).length - 1), this.indices.setValue(t, r);
  }
  flush() {
    const t = this.type, n = this._dictionary, i = this.dictionary.toVector(), s = this.indices.flush().clone(t);
    return s.dictionary = n ? n.concat(i) : i, this.finished || (this._dictionaryOffset += i.length), this._dictionary = s.dictionary, this.clear(), s;
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
class rl extends Tn {
}
rl.prototype._setValue = ah;
class ep extends zt {
  setValue(t, n) {
    const [i] = this.children, s = t * this.stride;
    for (let r = -1, o = n.length; ++r < o; )
      i.set(s + r, n[r]);
  }
  addChild(t, n = "0") {
    if (this.numChildren > 0)
      throw new Error("FixedSizeListBuilder can only have one child.");
    const i = this.children.push(t);
    return this.type = new ns(this.type.listSize, new ut(n, t.type, !0)), i;
  }
}
class dr extends Tn {
  setValue(t, n) {
    this._values.set(t, n);
  }
}
class np extends dr {
  setValue(t, n) {
    super.setValue(t, Tc(n));
  }
}
class ip extends dr {
}
class sp extends dr {
}
class fr extends Tn {
}
fr.prototype._setValue = gh;
class ol extends fr {
}
ol.prototype._setValue = kc;
class al extends fr {
}
al.prototype._setValue = jc;
class Ii extends Tn {
}
Ii.prototype._setValue = _h;
class cl extends Ii {
}
cl.prototype._setValue = $c;
class ll extends Ii {
}
ll.prototype._setValue = zc;
class ul extends Ii {
}
ul.prototype._setValue = Wc;
class dl extends Ii {
}
dl.prototype._setValue = Hc;
class ln extends Tn {
  setValue(t, n) {
    this._values.set(t, n);
  }
}
class rp extends ln {
}
class op extends ln {
}
class ap extends ln {
}
class cp extends ln {
}
class lp extends ln {
}
class up extends ln {
}
class dp extends ln {
}
class fp extends ln {
}
class hp extends ls {
  constructor(t) {
    super(t), this._offsets = new Qh(t.type);
  }
  addChild(t, n = "0") {
    if (this.numChildren > 0)
      throw new Error("ListBuilder can only have one child.");
    return this.children[this.numChildren] = t, this.type = new mi(new ut(n, t.type, !0)), this.numChildren - 1;
  }
  _flushPending(t) {
    const n = this._offsets, [i] = this.children;
    for (const [s, r] of t)
      if (typeof r > "u")
        n.set(s, 0);
      else {
        const o = r, a = o.length, c = n.set(s, a).buffer[s];
        for (let l = -1; ++l < a; )
          i.set(c + l, o[l]);
      }
  }
}
class pp extends ls {
  set(t, n) {
    return super.set(t, n);
  }
  setValue(t, n) {
    const i = n instanceof Map ? n : new Map(Object.entries(n)), s = this._pending || (this._pending = /* @__PURE__ */ new Map()), r = s.get(t);
    r && (this._pendingLength -= r.size), this._pendingLength += i.size, s.set(t, i);
  }
  addChild(t, n = `${this.numChildren}`) {
    if (this.numChildren > 0)
      throw new Error("ListBuilder can only have one child.");
    return this.children[this.numChildren] = t, this.type = new is(new ut(n, t.type, !0), this.type.keysSorted), this.numChildren - 1;
  }
  _flushPending(t) {
    const n = this._offsets, [i] = this.children;
    for (const [s, r] of t)
      if (r === void 0)
        n.set(s, 0);
      else {
        let { [s]: o, [s + 1]: a } = n.set(s, r.size).buffer;
        for (const c of r.entries())
          if (i.set(o, c), ++o >= a)
            break;
      }
  }
}
class yp extends zt {
  // @ts-ignore
  setValue(t, n) {
  }
  setValid(t, n) {
    return this.length = Math.max(t + 1, this.length), n;
  }
}
class gp extends zt {
  setValue(t, n) {
    const { children: i, type: s } = this;
    switch (Array.isArray(n) || n.constructor) {
      case !0:
        return s.children.forEach((r, o) => i[o].set(t, n[o]));
      case Map:
        return s.children.forEach((r, o) => i[o].set(t, n.get(r.name)));
      default:
        return s.children.forEach((r, o) => i[o].set(t, n[r.name]));
    }
  }
  /** @inheritdoc */
  setValid(t, n) {
    return super.setValid(t, n) || this.children.forEach((i) => i.setValid(t, n)), n;
  }
  addChild(t, n = `${this.numChildren}`) {
    const i = this.children.push(t);
    return this.type = new xt([...this.type.children, new ut(n, t.type, !0)]), i;
  }
}
class Si extends Tn {
}
Si.prototype._setValue = dh;
class fl extends Si {
}
fl.prototype._setValue = Rc;
class hl extends Si {
}
hl.prototype._setValue = Lc;
class pl extends Si {
}
pl.prototype._setValue = Mc;
class yl extends Si {
}
yl.prototype._setValue = Cc;
class Ei extends Tn {
}
Ei.prototype._setValue = fh;
class gl extends Ei {
}
gl.prototype._setValue = xc;
class _l extends Ei {
}
_l.prototype._setValue = Uc;
class ml extends Ei {
}
ml.prototype._setValue = Vc;
class bl extends Ei {
}
bl.prototype._setValue = Pc;
class jo extends zt {
  constructor(t) {
    super(t), this._typeIds = new lr(Int8Array, 0, 1), typeof t.valueToChildTypeId == "function" && (this._valueToChildTypeId = t.valueToChildTypeId);
  }
  get typeIdToChildIndex() {
    return this.type.typeIdToChildIndex;
  }
  append(t, n) {
    return this.set(this.length, t, n);
  }
  set(t, n, i) {
    return i === void 0 && (i = this._valueToChildTypeId(this, n, t)), this.setValue(t, n, i), this;
  }
  setValue(t, n, i) {
    this._typeIds.set(t, i);
    const s = this.type.typeIdToChildIndex[i], r = this.children[s];
    r == null || r.set(t, n);
  }
  addChild(t, n = `${this.children.length}`) {
    const i = this.children.push(t), { type: { children: s, mode: r, typeIds: o } } = this, a = [...s, new ut(n, t.type)];
    return this.type = new Qn(r, [...o, i], a), i;
  }
  /** @ignore */
  // @ts-ignore
  _valueToChildTypeId(t, n, i) {
    throw new Error("Cannot map UnionBuilder value to child typeId. Pass the `childTypeId` as the second argument to unionBuilder.append(), or supply a `valueToChildTypeId` function as part of the UnionBuilder constructor options.");
  }
}
class _p extends jo {
}
class mp extends jo {
  constructor(t) {
    super(t), this._offsets = new lr(Int32Array);
  }
  /** @ignore */
  setValue(t, n, i) {
    const s = this._typeIds.set(t, i).buffer[t], r = this.getChildAt(this.type.typeIdToChildIndex[s]), o = this._offsets.set(t, r.length).buffer[t];
    r == null || r.set(o, n);
  }
}
class vl extends ls {
  constructor(t) {
    super(t), this._values = new cr(Uint8Array);
  }
  get byteLength() {
    let t = this._pendingLength + this.length * 4;
    return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t;
  }
  setValue(t, n) {
    return super.setValue(t, rr(n));
  }
  // @ts-ignore
  _flushPending(t, n) {
  }
}
vl.prototype._flushPending = tl.prototype._flushPending;
class wl extends ls {
  constructor(t) {
    super(t), this._values = new cr(Uint8Array);
  }
  get byteLength() {
    let t = this._pendingLength + this.length * 4;
    return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t;
  }
  setValue(t, n) {
    return super.setValue(t, rr(n));
  }
  // @ts-ignore
  _flushPending(t, n) {
  }
}
wl.prototype._flushPending = el.prototype._flushPending;
class Rv extends Q {
  visitNull() {
    return yp;
  }
  visitBool() {
    return Xh;
  }
  visitInt() {
    return ln;
  }
  visitInt8() {
    return rp;
  }
  visitInt16() {
    return op;
  }
  visitInt32() {
    return ap;
  }
  visitInt64() {
    return cp;
  }
  visitUint8() {
    return lp;
  }
  visitUint16() {
    return up;
  }
  visitUint32() {
    return dp;
  }
  visitUint64() {
    return fp;
  }
  visitFloat() {
    return dr;
  }
  visitFloat16() {
    return np;
  }
  visitFloat32() {
    return ip;
  }
  visitFloat64() {
    return sp;
  }
  visitUtf8() {
    return vl;
  }
  visitLargeUtf8() {
    return wl;
  }
  visitBinary() {
    return tl;
  }
  visitLargeBinary() {
    return el;
  }
  visitFixedSizeBinary() {
    return rl;
  }
  visitDate() {
    return ur;
  }
  visitDateDay() {
    return nl;
  }
  visitDateMillisecond() {
    return il;
  }
  visitTimestamp() {
    return Si;
  }
  visitTimestampSecond() {
    return fl;
  }
  visitTimestampMillisecond() {
    return hl;
  }
  visitTimestampMicrosecond() {
    return pl;
  }
  visitTimestampNanosecond() {
    return yl;
  }
  visitTime() {
    return Ei;
  }
  visitTimeSecond() {
    return gl;
  }
  visitTimeMillisecond() {
    return _l;
  }
  visitTimeMicrosecond() {
    return ml;
  }
  visitTimeNanosecond() {
    return bl;
  }
  visitDecimal() {
    return sl;
  }
  visitList() {
    return hp;
  }
  visitStruct() {
    return gp;
  }
  visitUnion() {
    return jo;
  }
  visitDenseUnion() {
    return mp;
  }
  visitSparseUnion() {
    return _p;
  }
  visitDictionary() {
    return tp;
  }
  visitInterval() {
    return fr;
  }
  visitIntervalDayTime() {
    return ol;
  }
  visitIntervalYearMonth() {
    return al;
  }
  visitDuration() {
    return Ii;
  }
  visitDurationSecond() {
    return cl;
  }
  visitDurationMillisecond() {
    return ll;
  }
  visitDurationMicrosecond() {
    return ul;
  }
  visitDurationNanosecond() {
    return dl;
  }
  visitFixedSizeList() {
    return ep;
  }
  visitMap() {
    return pp;
  }
}
const Lv = new Rv();
class P extends Q {
  compareSchemas(t, n) {
    return t === n || n instanceof t.constructor && this.compareManyFields(t.fields, n.fields);
  }
  compareManyFields(t, n) {
    return t === n || Array.isArray(t) && Array.isArray(n) && t.length === n.length && t.every((i, s) => this.compareFields(i, n[s]));
  }
  compareFields(t, n) {
    return t === n || n instanceof t.constructor && t.name === n.name && t.nullable === n.nullable && this.visit(t.type, n.type);
  }
}
function Jt(e, t) {
  return t instanceof e.constructor;
}
function Oi(e, t) {
  return e === t || Jt(e, t);
}
function An(e, t) {
  return e === t || Jt(e, t) && e.bitWidth === t.bitWidth && e.isSigned === t.isSigned;
}
function $o(e, t) {
  return e === t || Jt(e, t) && e.precision === t.precision;
}
function Mv(e, t) {
  return e === t || Jt(e, t) && e.byteWidth === t.byteWidth;
}
function Il(e, t) {
  return e === t || Jt(e, t) && e.unit === t.unit;
}
function hr(e, t) {
  return e === t || Jt(e, t) && e.unit === t.unit && e.timezone === t.timezone;
}
function pr(e, t) {
  return e === t || Jt(e, t) && e.unit === t.unit && e.bitWidth === t.bitWidth;
}
function Cv(e, t) {
  return e === t || Jt(e, t) && e.children.length === t.children.length && on.compareManyFields(e.children, t.children);
}
function xv(e, t) {
  return e === t || Jt(e, t) && e.children.length === t.children.length && on.compareManyFields(e.children, t.children);
}
function Sl(e, t) {
  return e === t || Jt(e, t) && e.mode === t.mode && e.typeIds.every((n, i) => n === t.typeIds[i]) && on.compareManyFields(e.children, t.children);
}
function Uv(e, t) {
  return e === t || Jt(e, t) && e.id === t.id && e.isOrdered === t.isOrdered && on.visit(e.indices, t.indices) && on.visit(e.dictionary, t.dictionary);
}
function El(e, t) {
  return e === t || Jt(e, t) && e.unit === t.unit;
}
function yr(e, t) {
  return e === t || Jt(e, t) && e.unit === t.unit;
}
function Vv(e, t) {
  return e === t || Jt(e, t) && e.listSize === t.listSize && e.children.length === t.children.length && on.compareManyFields(e.children, t.children);
}
function Pv(e, t) {
  return e === t || Jt(e, t) && e.keysSorted === t.keysSorted && e.children.length === t.children.length && on.compareManyFields(e.children, t.children);
}
P.prototype.visitNull = Oi;
P.prototype.visitBool = Oi;
P.prototype.visitInt = An;
P.prototype.visitInt8 = An;
P.prototype.visitInt16 = An;
P.prototype.visitInt32 = An;
P.prototype.visitInt64 = An;
P.prototype.visitUint8 = An;
P.prototype.visitUint16 = An;
P.prototype.visitUint32 = An;
P.prototype.visitUint64 = An;
P.prototype.visitFloat = $o;
P.prototype.visitFloat16 = $o;
P.prototype.visitFloat32 = $o;
P.prototype.visitFloat64 = $o;
P.prototype.visitUtf8 = Oi;
P.prototype.visitLargeUtf8 = Oi;
P.prototype.visitBinary = Oi;
P.prototype.visitLargeBinary = Oi;
P.prototype.visitFixedSizeBinary = Mv;
P.prototype.visitDate = Il;
P.prototype.visitDateDay = Il;
P.prototype.visitDateMillisecond = Il;
P.prototype.visitTimestamp = hr;
P.prototype.visitTimestampSecond = hr;
P.prototype.visitTimestampMillisecond = hr;
P.prototype.visitTimestampMicrosecond = hr;
P.prototype.visitTimestampNanosecond = hr;
P.prototype.visitTime = pr;
P.prototype.visitTimeSecond = pr;
P.prototype.visitTimeMillisecond = pr;
P.prototype.visitTimeMicrosecond = pr;
P.prototype.visitTimeNanosecond = pr;
P.prototype.visitDecimal = Oi;
P.prototype.visitList = Cv;
P.prototype.visitStruct = xv;
P.prototype.visitUnion = Sl;
P.prototype.visitDenseUnion = Sl;
P.prototype.visitSparseUnion = Sl;
P.prototype.visitDictionary = Uv;
P.prototype.visitInterval = El;
P.prototype.visitIntervalDayTime = El;
P.prototype.visitIntervalYearMonth = El;
P.prototype.visitDuration = yr;
P.prototype.visitDurationSecond = yr;
P.prototype.visitDurationMillisecond = yr;
P.prototype.visitDurationMicrosecond = yr;
P.prototype.visitDurationNanosecond = yr;
P.prototype.visitFixedSizeList = Vv;
P.prototype.visitMap = Pv;
const on = new P();
function mo(e, t) {
  return on.compareSchemas(e, t);
}
function kv(e, t) {
  return on.compareFields(e, t);
}
function bp(e, t) {
  return on.visit(e, t);
}
function bi(e) {
  const t = e.type, n = new (Lv.getVisitFn(t)())(e);
  if (t.children && t.children.length > 0) {
    const i = e.children || [], s = { nullValues: e.nullValues }, r = Array.isArray(i) ? ((o, a) => i[a] || s) : (({ name: o }) => i[o] || s);
    for (const [o, a] of t.children.entries()) {
      const { type: c } = a, l = r(a, o);
      n.children.push(bi(Object.assign(Object.assign({}, l), { type: c })));
    }
  }
  return n;
}
function Ol(e, t) {
  if (e instanceof ct || e instanceof R || e.type instanceof A || ArrayBuffer.isView(e))
    return ko(e);
  const n = { type: t ?? Hr(e), nullValues: [null] }, i = [...vp(n)(e)], s = i.length === 1 ? i[0] : i.reduce((r, o) => r.concat(o));
  return A.isDictionary(s.type) ? s.memoize() : s;
}
function jv(e) {
  const t = Ol(e), n = new Ut(new ft(t.type.children), t.data[0]);
  return new Nt(n);
}
function Hr(e) {
  if (e.length === 0)
    return new sn();
  let t = 0, n = 0, i = 0, s = 0, r = 0, o = 0, a = 0, c = 0;
  for (const l of e) {
    if (l == null) {
      ++t;
      continue;
    }
    switch (typeof l) {
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
        Array.isArray(l) ? ++n : Object.prototype.toString.call(l) === "[object Date]" ? ++c : ++i;
        continue;
    }
    throw new TypeError("Unable to infer Vector type from input values, explicit type declaration expected.");
  }
  if (s + t === e.length)
    return new Co();
  if (r + t === e.length)
    return new En(new ts(), new qn());
  if (o + t === e.length)
    return new Mo();
  if (a + t === e.length)
    return new es();
  if (c + t === e.length)
    return new ih();
  if (n + t === e.length) {
    const l = e, u = Hr(l[l.findIndex((d) => d != null)]);
    if (l.every((d) => d == null || bp(u, Hr(d))))
      return new mi(new ut("", u, !0));
  } else if (i + t === e.length) {
    const l = /* @__PURE__ */ new Map();
    for (const u of e)
      for (const d of Object.keys(u))
        !l.has(d) && u[d] != null && l.set(d, new ut(d, Hr([u[d]]), !0));
    return new xt([...l.values()]);
  }
  throw new TypeError("Unable to infer Vector type from input values, explicit type declaration expected.");
}
function vp(e) {
  const { ["queueingStrategy"]: t = "count" } = e, { ["highWaterMark"]: n = t !== "bytes" ? Number.POSITIVE_INFINITY : Math.pow(2, 14) } = e, i = t !== "bytes" ? "length" : "byteLength";
  return function* (s) {
    let r = 0;
    const o = bi(e);
    for (const a of s)
      o.append(a)[i] >= n && ++r && (yield o.toVector());
    (o.finish().length > 0 || r === 0) && (yield o.toVector());
  };
}
function $v(e) {
  const { ["queueingStrategy"]: t = "count" } = e, { ["highWaterMark"]: n = t !== "bytes" ? Number.POSITIVE_INFINITY : Math.pow(2, 14) } = e, i = t !== "bytes" ? "length" : "byteLength";
  return function(s) {
    return Ae(this, arguments, function* () {
      var r, o, a, c;
      let l = 0;
      const u = bi(e);
      try {
        for (var d = !0, y = Wn(s), _; _ = yield J(y.next()), r = _.done, !r; d = !0) {
          c = _.value, d = !1;
          const D = c;
          u.append(D)[i] >= n && ++l && (yield yield J(u.toVector()));
        }
      } catch (D) {
        o = { error: D };
      } finally {
        try {
          !d && !r && (a = y.return) && (yield J(a.call(y)));
        } finally {
          if (o) throw o.error;
        }
      }
      (u.finish().length > 0 || l === 0) && (yield yield J(u.toVector()));
    });
  };
}
function fa(e, t) {
  return zv(e, t.map((n) => n.data.concat()));
}
function zv(e, t) {
  const n = [...e.fields], i = [], s = { numBatches: t.reduce((d, y) => Math.max(d, y.length), 0) };
  let r = 0, o = 0, a = -1;
  const c = t.length;
  let l, u = [];
  for (; s.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, a = -1; ++a < c; )
      u[a] = l = t[a].shift(), o = Math.min(o, l ? l.length : o);
    Number.isFinite(o) && (u = Wv(n, o, u, t, s), o > 0 && (i[r++] = C({
      type: new xt(n),
      length: o,
      nullCount: 0,
      children: u.slice()
    })));
  }
  return [
    e = e.assign(n),
    i.map((d) => new Ut(e, d))
  ];
}
function Wv(e, t, n, i, s) {
  var r;
  const o = (t + 63 & -64) >> 3;
  for (let a = -1, c = i.length; ++a < c; ) {
    const l = n[a], u = l == null ? void 0 : l.length;
    if (u >= t)
      u === t ? n[a] = l : (n[a] = l.slice(0, t), s.numBatches = Math.max(s.numBatches, i[a].unshift(l.slice(t, u - t))));
    else {
      const d = e[a];
      e[a] = d.clone({ nullable: !0 }), n[a] = (r = l == null ? void 0 : l._changeLengthAndBackfillNullBitmap(t)) !== null && r !== void 0 ? r : C({
        type: d.type,
        length: t,
        nullCount: t,
        nullBitmap: new Uint8Array(o)
      });
    }
  }
  return n;
}
var wp;
class Nt {
  constructor(...t) {
    var n, i;
    if (t.length === 0)
      return this.batches = [], this.schema = new ft([]), this._offsets = [0], this;
    let s, r;
    t[0] instanceof ft && (s = t.shift()), t.at(-1) instanceof Uint32Array && (r = t.pop());
    const o = (c) => {
      if (c) {
        if (c instanceof Ut)
          return [c];
        if (c instanceof Nt)
          return c.batches;
        if (c instanceof ct) {
          if (c.type instanceof xt)
            return [new Ut(new ft(c.type.children), c)];
        } else {
          if (Array.isArray(c))
            return c.flatMap((l) => o(l));
          if (typeof c[Symbol.iterator] == "function")
            return [...c].flatMap((l) => o(l));
          if (typeof c == "object") {
            const l = Object.keys(c), u = l.map((_) => new R([c[_]])), d = s ?? new ft(l.map((_, D) => new ut(String(_), u[D].type, u[D].nullable))), [, y] = fa(d, u);
            return y.length === 0 ? [new Ut(c)] : y;
          }
        }
      }
      return [];
    }, a = t.flatMap((c) => o(c));
    if (s = (i = s ?? ((n = a[0]) === null || n === void 0 ? void 0 : n.schema)) !== null && i !== void 0 ? i : new ft([]), !(s instanceof ft))
      throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const c of a) {
      if (!(c instanceof Ut))
        throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!mo(s, c.schema))
        throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = s, this.batches = a, this._offsets = r ?? $h(this.data);
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
    return this.data.reduce((t, n) => t + n.length, 0);
  }
  /**
   * The number of null rows in this Table.
   */
  get nullCount() {
    return this._nullCount === -1 && (this._nullCount = jh(this.data)), this._nullCount;
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
    return this.get(Uo(t, this.numRows));
  }
  /**
   * Set an element value by position.
   *
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  // @ts-ignore
  set(t, n) {
  }
  /**
   * Retrieve the index of the first occurrence of a value in an Vector.
   *
   * @param element The value to locate in the Vector.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  // @ts-ignore
  indexOf(t, n) {
    return -1;
  }
  /**
   * Iterator for rows in this Table.
   */
  [Symbol.iterator]() {
    return this.batches.length > 0 ? Jc.visit(new R(this.data)) : new Array(0)[Symbol.iterator]();
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
    const n = this.schema, i = this.data.concat(t.flatMap(({ data: s }) => s));
    return new Nt(n, i.map((s) => new Ut(n, s)));
  }
  /**
   * Return a zero-copy sub-section of this Table.
   *
   * @param begin The beginning of the specified portion of the Table.
   * @param end The end of the specified portion of the Table. This is exclusive of the element at the index 'end'.
   */
  slice(t, n) {
    const i = this.schema;
    [t, n] = Yc({ length: this.numRows }, t, n);
    const s = zh(this.data, this._offsets, t, n);
    return new Nt(i, s.map((r) => new Ut(i, r)));
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   *
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    return this.getChildAt(this.schema.fields.findIndex((n) => n.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   *
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    if (t > -1 && t < this.schema.fields.length) {
      const n = this.data.map((i) => i.children[t]);
      if (n.length === 0) {
        const { type: i } = this.schema.fields[t], s = C({ type: i, length: 0, nullCount: 0 });
        n.push(s._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new R(n);
    }
    return null;
  }
  /**
   * Sets a child Vector by name.
   *
   * @param name The name of the child to overwrite.
   * @returns A new Table with the supplied child for the specified name.
   */
  setChild(t, n) {
    var i;
    return this.setChildAt((i = this.schema.fields) === null || i === void 0 ? void 0 : i.findIndex((s) => s.name === t), n);
  }
  setChildAt(t, n) {
    let i = this.schema, s = [...this.batches];
    if (t > -1 && t < this.numCols) {
      n || (n = new R([C({ type: new sn(), length: this.numRows })]));
      const r = i.fields.slice(), o = r[t].clone({ type: n.type }), a = this.schema.fields.map((c, l) => this.getChildAt(l));
      [r[t], a[t]] = [o, n], [i, s] = fa(i, a);
    }
    return new Nt(i, s);
  }
  /**
   * Construct a new Table containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new Table of columns matching the specified names.
   */
  select(t) {
    const n = this.schema.fields.reduce((i, s, r) => i.set(s.name, r), /* @__PURE__ */ new Map());
    return this.selectAt(t.map((i) => n.get(i)).filter((i) => i > -1));
  }
  /**
   * Construct a new Table containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new Table of columns at the specified indices.
   */
  selectAt(t) {
    const n = this.schema.selectAt(t), i = this.batches.map((s) => s.selectAt(t));
    return new Nt(n, i);
  }
  assign(t) {
    const n = this.schema.fields, [i, s] = t.schema.fields.reduce((a, c, l) => {
      const [u, d] = a, y = n.findIndex((_) => _.name === c.name);
      return ~y ? d[y] = l : u.push(l), a;
    }, [[], []]), r = this.schema.assign(t.schema), o = [
      ...n.map((a, c) => [c, s[c]]).map(([a, c]) => c === void 0 ? this.getChildAt(a) : t.getChildAt(c)),
      ...i.map((a) => t.getChildAt(a))
    ].filter(Boolean);
    return new Nt(...fa(r, o));
  }
}
wp = Symbol.toStringTag;
Nt[wp] = ((e) => (e.schema = null, e.batches = [], e._offsets = new Uint32Array([0]), e._nullCount = -1, e[Symbol.isConcatSpreadable] = !0, e.isValid = po(qc), e.get = po(oe.getVisitFn(h.Struct)), e.set = Wh(we.getVisitFn(h.Struct)), e.indexOf = Hh(yo.getVisitFn(h.Struct)), "Table"))(Nt.prototype);
function Hv(e) {
  const t = {}, n = Object.entries(e);
  for (const [i, s] of n)
    t[i] = ko(s);
  return new Nt(t);
}
function Yv(e) {
  const t = {}, n = Object.entries(e);
  for (const [i, s] of n)
    t[i] = Ol(s);
  return new Nt(t);
}
var Ip;
let Ut = class Ds {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof ft))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([
          ,
          this.data = C({
            nullCount: 0,
            type: new xt(this.schema.fields),
            children: this.schema.fields.map((n) => C({ type: n.type, nullCount: 0 }))
          })
        ] = t, !(this.data instanceof ct))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = Ku(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [n] = t, { fields: i, children: s, length: r } = Object.keys(n).reduce((c, l, u) => (c.children[u] = n[l], c.length = Math.max(c.length, n[l].length), c.fields[u] = ut.new({ name: l, type: n[l].type, nullable: !0 }), c), {
          length: 0,
          fields: new Array(),
          children: new Array()
        }), o = new ft(i), a = C({ type: new xt(i), length: r, children: s, nullCount: 0 });
        [this.schema, this.data] = Ku(o, a.children, r);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = Sp(this.schema.fields, this.data.children));
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
    return oe.visit(this.data, t);
  }
  /**
    * Get a row value by position.
    * @param index The index of the row to read. A negative index will count back from the last row.
    */
  at(t) {
    return this.get(Uo(t, this.numRows));
  }
  /**
   * Set a row by position.
   * @param index The index of the row to write.
   * @param value The value to set.
   */
  set(t, n) {
    return we.visit(this.data, t, n);
  }
  /**
   * Retrieve the index of the first occurrence of a row in an RecordBatch.
   * @param element The row to locate in the RecordBatch.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  indexOf(t, n) {
    return yo.visit(this.data, t, n);
  }
  /**
   * Iterator for rows in this RecordBatch.
   */
  [Symbol.iterator]() {
    return Jc.visit(new R([this.data]));
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
    return new Nt(this.schema, [this, ...t]);
  }
  /**
   * Return a zero-copy sub-section of this RecordBatch.
   * @param start The beginning of the specified portion of the RecordBatch.
   * @param end The end of the specified portion of the RecordBatch. This is exclusive of the row at the index 'end'.
   */
  slice(t, n) {
    const [i] = new R([this.data]).slice(t, n).data;
    return new Ds(this.schema, i);
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    var n;
    return this.getChildAt((n = this.schema.fields) === null || n === void 0 ? void 0 : n.findIndex((i) => i.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    return t > -1 && t < this.schema.fields.length ? new R([this.data.children[t]]) : null;
  }
  /**
   * Sets a child Vector by name.
   * @param name The name of the child to overwrite.
   * @returns A new RecordBatch with the new child for the specified name.
   */
  setChild(t, n) {
    var i;
    return this.setChildAt((i = this.schema.fields) === null || i === void 0 ? void 0 : i.findIndex((s) => s.name === t), n);
  }
  setChildAt(t, n) {
    let i = this.schema, s = this.data;
    if (t > -1 && t < this.numCols) {
      n || (n = new R([C({ type: new sn(), length: this.numRows })]));
      const r = i.fields.slice(), o = s.children.slice(), a = r[t].clone({ type: n.type });
      [r[t], o[t]] = [a, n.data[0]], i = new ft(r, new Map(this.schema.metadata)), s = C({ type: new xt(r), children: o });
    }
    return new Ds(i, s);
  }
  /**
   * Construct a new RecordBatch containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new RecordBatch of columns matching the specified names.
   */
  select(t) {
    const n = this.schema.select(t), i = new xt(n.fields), s = [];
    for (const r of t) {
      const o = this.schema.fields.findIndex((a) => a.name === r);
      ~o && (s[o] = this.data.children[o]);
    }
    return new Ds(n, C({ type: i, length: this.numRows, children: s }));
  }
  /**
   * Construct a new RecordBatch containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new RecordBatch of columns matching at the specified indices.
   */
  selectAt(t) {
    const n = this.schema.selectAt(t), i = t.map((r) => this.data.children[r]).filter(Boolean), s = C({ type: new xt(n.fields), length: this.numRows, children: i });
    return new Ds(n, s);
  }
};
Ip = Symbol.toStringTag;
Ut[Ip] = ((e) => (e._nullCount = -1, e[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(Ut.prototype);
function Ku(e, t, n = t.reduce((i, s) => Math.max(i, s.length), 0)) {
  var i;
  const s = [...e.fields], r = [...t], o = (n + 63 & -64) >> 3;
  for (const [a, c] of e.fields.entries()) {
    const l = t[a];
    (!l || l.length !== n) && (s[a] = c.clone({ nullable: !0 }), r[a] = (i = l == null ? void 0 : l._changeLengthAndBackfillNullBitmap(n)) !== null && i !== void 0 ? i : C({
      type: c.type,
      length: n,
      nullCount: n,
      nullBitmap: new Uint8Array(o)
    }));
  }
  return [
    e.assign(s),
    C({ type: new xt(s), length: n, children: r })
  ];
}
function Sp(e, t, n = /* @__PURE__ */ new Map()) {
  var i, s;
  if (((i = e == null ? void 0 : e.length) !== null && i !== void 0 ? i : 0) > 0 && (e == null ? void 0 : e.length) === (t == null ? void 0 : t.length))
    for (let r = -1, o = e.length; ++r < o; ) {
      const { type: a } = e[r], c = t[r];
      for (const l of [c, ...((s = c == null ? void 0 : c.dictionary) === null || s === void 0 ? void 0 : s.data) || []])
        Sp(a.children, l == null ? void 0 : l.children, n);
      if (A.isDictionary(a)) {
        const { id: l } = a;
        if (!n.has(l))
          c != null && c.dictionary && n.set(l, c.dictionary);
        else if (n.get(l) !== c.dictionary)
          throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
      }
    }
  return n;
}
class Nl extends Ut {
  constructor(t) {
    const n = t.fields.map((s) => C({ type: s.type })), i = C({ type: new xt(t.fields), nullCount: 0, children: n });
    super(t, i);
  }
}
let Mn = class He {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, n) {
    return this.bb_pos = t, this.bb = n, this;
  }
  static getRootAsMessage(t, n) {
    return (n || new He()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, n) {
    return t.setPosition(t.position() + yt), (n || new He()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ot.V1;
  }
  headerType() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readUint8(this.bb_pos + t) : lt.NONE;
  }
  header(t) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? this.bb.__union(t, this.bb_pos + n) : null;
  }
  bodyLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  customMetadata(t, n) {
    const i = this.bb.__offset(this.bb_pos, 12);
    return i ? (n || new Rt()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startMessage(t) {
    t.startObject(5);
  }
  static addVersion(t, n) {
    t.addFieldInt16(0, n, Ot.V1);
  }
  static addHeaderType(t, n) {
    t.addFieldInt8(1, n, lt.NONE);
  }
  static addHeader(t, n) {
    t.addFieldOffset(2, n, 0);
  }
  static addBodyLength(t, n) {
    t.addFieldInt64(3, n, BigInt("0"));
  }
  static addCustomMetadata(t, n) {
    t.addFieldOffset(4, n, 0);
  }
  static createCustomMetadataVector(t, n) {
    t.startVector(4, n.length, 4);
    for (let i = n.length - 1; i >= 0; i--)
      t.addOffset(n[i]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, n) {
    t.startVector(4, n, 4);
  }
  static endMessage(t) {
    return t.endObject();
  }
  static finishMessageBuffer(t, n) {
    t.finish(n);
  }
  static finishSizePrefixedMessageBuffer(t, n) {
    t.finish(n, void 0, !0);
  }
  static createMessage(t, n, i, s, r, o) {
    return He.startMessage(t), He.addVersion(t, n), He.addHeaderType(t, i), He.addHeader(t, s), He.addBodyLength(t, r), He.addCustomMetadata(t, o), He.endMessage(t);
  }
};
class Kv extends Q {
  visit(t, n) {
    return t == null || n == null ? void 0 : super.visit(t, n);
  }
  visitNull(t, n) {
    return Uu.startNull(n), Uu.endNull(n);
  }
  visitInt(t, n) {
    return fe.startInt(n), fe.addBitWidth(n, t.bitWidth), fe.addIsSigned(n, t.isSigned), fe.endInt(n);
  }
  visitFloat(t, n) {
    return Qe.startFloatingPoint(n), Qe.addPrecision(n, t.precision), Qe.endFloatingPoint(n);
  }
  visitBinary(t, n) {
    return Ru.startBinary(n), Ru.endBinary(n);
  }
  visitLargeBinary(t, n) {
    return Mu.startLargeBinary(n), Mu.endLargeBinary(n);
  }
  visitBool(t, n) {
    return Lu.startBool(n), Lu.endBool(n);
  }
  visitUtf8(t, n) {
    return Vu.startUtf8(n), Vu.endUtf8(n);
  }
  visitLargeUtf8(t, n) {
    return Cu.startLargeUtf8(n), Cu.endLargeUtf8(n);
  }
  visitDecimal(t, n) {
    return Ci.startDecimal(n), Ci.addScale(n, t.scale), Ci.addPrecision(n, t.precision), Ci.addBitWidth(n, t.bitWidth), Ci.endDecimal(n);
  }
  visitDate(t, n) {
    return Vr.startDate(n), Vr.addUnit(n, t.unit), Vr.endDate(n);
  }
  visitTime(t, n) {
    return be.startTime(n), be.addUnit(n, t.unit), be.addBitWidth(n, t.bitWidth), be.endTime(n);
  }
  visitTimestamp(t, n) {
    const i = t.timezone && n.createString(t.timezone) || void 0;
    return ve.startTimestamp(n), ve.addUnit(n, t.unit), i !== void 0 && ve.addTimezone(n, i), ve.endTimestamp(n);
  }
  visitInterval(t, n) {
    return Ze.startInterval(n), Ze.addUnit(n, t.unit), Ze.endInterval(n);
  }
  visitDuration(t, n) {
    return Pr.startDuration(n), Pr.addUnit(n, t.unit), Pr.endDuration(n);
  }
  visitList(t, n) {
    return xu.startList(n), xu.endList(n);
  }
  visitStruct(t, n) {
    return ci.startStruct_(n), ci.endStruct_(n);
  }
  visitUnion(t, n) {
    ne.startTypeIdsVector(n, t.typeIds.length);
    const i = ne.createTypeIdsVector(n, t.typeIds);
    return ne.startUnion(n), ne.addMode(n, t.mode), ne.addTypeIds(n, i), ne.endUnion(n);
  }
  visitDictionary(t, n) {
    const i = this.visit(t.indices, n);
    return _n.startDictionaryEncoding(n), _n.addId(n, BigInt(t.id)), _n.addIsOrdered(n, t.isOrdered), i !== void 0 && _n.addIndexType(n, i), _n.endDictionaryEncoding(n);
  }
  visitFixedSizeBinary(t, n) {
    return kr.startFixedSizeBinary(n), kr.addByteWidth(n, t.byteWidth), kr.endFixedSizeBinary(n);
  }
  visitFixedSizeList(t, n) {
    return jr.startFixedSizeList(n), jr.addListSize(n, t.listSize), jr.endFixedSizeList(n);
  }
  visitMap(t, n) {
    return $r.startMap(n), $r.addKeysSorted(n, t.keysSorted), $r.endMap(n);
  }
}
const ha = new Kv();
function Gv(e, t = /* @__PURE__ */ new Map()) {
  return new ft(Jv(e, t), Yr(e.metadata), t);
}
function Ep(e) {
  return new ge(e.count, Op(e.columns), Np(e.columns));
}
function qv(e) {
  return new an(Ep(e.data), e.id, e.isDelta);
}
function Jv(e, t) {
  return (e.fields || []).filter(Boolean).map((n) => ut.fromJSON(n, t));
}
function Gu(e, t) {
  return (e.children || []).filter(Boolean).map((n) => ut.fromJSON(n, t));
}
function Op(e) {
  return (e || []).reduce((t, n) => [
    ...t,
    new Xn(n.count, Qv(n.VALIDITY)),
    ...Op(n.children)
  ], []);
}
function Np(e, t = []) {
  for (let n = -1, i = (e || []).length; ++n < i; ) {
    const s = e[n];
    s.VALIDITY && t.push(new en(t.length, s.VALIDITY.length)), s.TYPE_ID && t.push(new en(t.length, s.TYPE_ID.length)), s.OFFSET && t.push(new en(t.length, s.OFFSET.length)), s.DATA && t.push(new en(t.length, s.DATA.length)), t = Np(s.children, t);
  }
  return t;
}
function Qv(e) {
  return (e || []).reduce((t, n) => t + +(n === 0), 0);
}
function Zv(e, t) {
  let n, i, s, r, o, a;
  return !t || !(r = e.dictionary) ? (o = Ju(e, Gu(e, t)), s = new ut(e.name, o, e.nullable, Yr(e.metadata))) : t.has(n = r.id) ? (i = (i = r.indexType) ? qu(i) : new qn(), a = new En(t.get(n), i, n, r.isOrdered), s = new ut(e.name, a, e.nullable, Yr(e.metadata))) : (i = (i = r.indexType) ? qu(i) : new qn(), t.set(n, o = Ju(e, Gu(e, t))), a = new En(o, i, n, r.isOrdered), s = new ut(e.name, a, e.nullable, Yr(e.metadata))), s || null;
}
function Yr(e = []) {
  return new Map(e.map(({ key: t, value: n }) => [t, n]));
}
function qu(e) {
  return new qt(e.isSigned, e.bitWidth);
}
function Ju(e, t) {
  const n = e.type.name;
  switch (n) {
    case "NONE":
      return new sn();
    case "null":
      return new sn();
    case "binary":
      return new $s();
    case "largebinary":
      return new zs();
    case "utf8":
      return new ts();
    case "largeutf8":
      return new Ws();
    case "bool":
      return new es();
    case "list":
      return new mi((t || [])[0]);
    case "struct":
      return new xt(t || []);
    case "struct_":
      return new xt(t || []);
  }
  switch (n) {
    case "int": {
      const i = e.type;
      return new qt(i.isSigned, i.bitWidth);
    }
    case "floatingpoint": {
      const i = e.type;
      return new Jn(Dt[i.precision]);
    }
    case "decimal": {
      const i = e.type;
      return new Hs(i.scale, i.precision, i.bitWidth);
    }
    case "date": {
      const i = e.type;
      return new gi(Pt[i.unit]);
    }
    case "time": {
      const i = e.type;
      return new wn(T[i.unit], i.bitWidth);
    }
    case "timestamp": {
      const i = e.type;
      return new In(T[i.unit], i.timezone);
    }
    case "interval": {
      const i = e.type;
      return new _i(re[i.unit]);
    }
    case "duration": {
      const i = e.type;
      return new Sn(T[i.unit]);
    }
    case "union": {
      const i = e.type, [s, ...r] = (i.mode + "").toLowerCase(), o = s.toUpperCase() + r.join("");
      return new Qn(Tt[o], i.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const i = e.type;
      return new Ys(i.byteWidth);
    }
    case "fixedsizelist": {
      const i = e.type;
      return new ns(i.listSize, (t || [])[0]);
    }
    case "map": {
      const i = e.type;
      return new is((t || [])[0], i.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${n}"`);
}
var Xv = Df, tw = Qi;
class jt {
  /** @nocollapse */
  static fromJSON(t, n) {
    const i = new jt(0, Ot.V5, n);
    return i._createHeader = ew(t, n), i;
  }
  /** @nocollapse */
  static decode(t) {
    t = new tw(Z(t));
    const n = Mn.getRootAsMessage(t), i = n.bodyLength(), s = n.version(), r = n.headerType(), o = new jt(i, s, r);
    return o._createHeader = nw(n, r), o;
  }
  /** @nocollapse */
  static encode(t) {
    const n = new Xv();
    let i = -1;
    return t.isSchema() ? i = ft.encode(n, t.header()) : t.isRecordBatch() ? i = ge.encode(n, t.header()) : t.isDictionaryBatch() && (i = an.encode(n, t.header())), Mn.startMessage(n), Mn.addVersion(n, Ot.V5), Mn.addHeader(n, i), Mn.addHeaderType(n, t.headerType), Mn.addBodyLength(n, BigInt(t.bodyLength)), Mn.finishMessageBuffer(n, Mn.endMessage(n)), n.asUint8Array();
  }
  /** @nocollapse */
  static from(t, n = 0) {
    if (t instanceof ft)
      return new jt(0, Ot.V5, lt.Schema, t);
    if (t instanceof ge)
      return new jt(n, Ot.V5, lt.RecordBatch, t);
    if (t instanceof an)
      return new jt(n, Ot.V5, lt.DictionaryBatch, t);
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
    return this.headerType === lt.Schema;
  }
  isRecordBatch() {
    return this.headerType === lt.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === lt.DictionaryBatch;
  }
  constructor(t, n, i, s) {
    this._version = n, this._headerType = i, this.body = new Uint8Array(0), s && (this._createHeader = () => s), this._bodyLength = vt(t);
  }
}
class ge {
  get nodes() {
    return this._nodes;
  }
  get length() {
    return this._length;
  }
  get buffers() {
    return this._buffers;
  }
  constructor(t, n, i) {
    this._nodes = n, this._buffers = i, this._length = vt(t);
  }
}
class an {
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
  constructor(t, n, i = !1) {
    this._data = t, this._isDelta = i, this._id = vt(n);
  }
}
class en {
  constructor(t, n) {
    this.offset = vt(t), this.length = vt(n);
  }
}
class Xn {
  constructor(t, n) {
    this.length = vt(t), this.nullCount = vt(n);
  }
}
function ew(e, t) {
  return (() => {
    switch (t) {
      case lt.Schema:
        return ft.fromJSON(e);
      case lt.RecordBatch:
        return ge.fromJSON(e);
      case lt.DictionaryBatch:
        return an.fromJSON(e);
    }
    throw new Error(`Unrecognized Message type: { name: ${lt[t]}, type: ${t} }`);
  });
}
function nw(e, t) {
  return (() => {
    switch (t) {
      case lt.Schema:
        return ft.decode(e.header(new Ke()), /* @__PURE__ */ new Map(), e.version());
      case lt.RecordBatch:
        return ge.decode(e.header(new pn()), e.version());
      case lt.DictionaryBatch:
        return an.decode(e.header(new Li()), e.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${lt[t]}, type: ${t} }`);
  });
}
ut.encode = hw;
ut.decode = dw;
ut.fromJSON = Zv;
ft.encode = fw;
ft.decode = iw;
ft.fromJSON = Gv;
ge.encode = pw;
ge.decode = sw;
ge.fromJSON = Ep;
an.encode = yw;
an.decode = rw;
an.fromJSON = qv;
Xn.encode = gw;
Xn.decode = aw;
en.encode = _w;
en.decode = ow;
function iw(e, t = /* @__PURE__ */ new Map(), n = Ot.V5) {
  const i = uw(e, t);
  return new ft(i, Kr(e), t, n);
}
function sw(e, t = Ot.V5) {
  if (e.compression() !== null)
    throw new Error("Record batch compression not implemented");
  return new ge(e.length(), cw(e), lw(e, t));
}
function rw(e, t = Ot.V5) {
  return new an(ge.decode(e.data(), t), e.id(), e.isDelta());
}
function ow(e) {
  return new en(e.offset(), e.length());
}
function aw(e) {
  return new Xn(e.length(), e.nullCount());
}
function cw(e) {
  const t = [];
  for (let n, i = -1, s = -1, r = e.nodesLength(); ++i < r; )
    (n = e.nodes(i)) && (t[++s] = Xn.decode(n));
  return t;
}
function lw(e, t) {
  const n = [];
  for (let i, s = -1, r = -1, o = e.buffersLength(); ++s < o; )
    (i = e.buffers(s)) && (t < Ot.V4 && (i.bb_pos += 8 * (s + 1)), n[++r] = en.decode(i));
  return n;
}
function uw(e, t) {
  const n = [];
  for (let i, s = -1, r = -1, o = e.fieldsLength(); ++s < o; )
    (i = e.fields(s)) && (n[++r] = ut.decode(i, t));
  return n;
}
function Qu(e, t) {
  const n = [];
  for (let i, s = -1, r = -1, o = e.childrenLength(); ++s < o; )
    (i = e.children(s)) && (n[++r] = ut.decode(i, t));
  return n;
}
function dw(e, t) {
  let n, i, s, r, o, a;
  return !t || !(a = e.dictionary()) ? (s = Xu(e, Qu(e, t)), i = new ut(e.name(), s, e.nullable(), Kr(e))) : t.has(n = vt(a.id())) ? (r = (r = a.indexType()) ? Zu(r) : new qn(), o = new En(t.get(n), r, n, a.isOrdered()), i = new ut(e.name(), o, e.nullable(), Kr(e))) : (r = (r = a.indexType()) ? Zu(r) : new qn(), t.set(n, s = Xu(e, Qu(e, t))), o = new En(s, r, n, a.isOrdered()), i = new ut(e.name(), o, e.nullable(), Kr(e))), i || null;
}
function Kr(e) {
  const t = /* @__PURE__ */ new Map();
  if (e)
    for (let n, i, s = -1, r = Math.trunc(e.customMetadataLength()); ++s < r; )
      (n = e.customMetadata(s)) && (i = n.key()) != null && t.set(i, n.value());
  return t;
}
function Zu(e) {
  return new qt(e.isSigned(), e.bitWidth());
}
function Xu(e, t) {
  const n = e.typeType();
  switch (n) {
    case G.NONE:
      return new sn();
    case G.Null:
      return new sn();
    case G.Binary:
      return new $s();
    case G.LargeBinary:
      return new zs();
    case G.Utf8:
      return new ts();
    case G.LargeUtf8:
      return new Ws();
    case G.Bool:
      return new es();
    case G.List:
      return new mi((t || [])[0]);
    case G.Struct_:
      return new xt(t || []);
  }
  switch (n) {
    case G.Int: {
      const i = e.type(new fe());
      return new qt(i.isSigned(), i.bitWidth());
    }
    case G.FloatingPoint: {
      const i = e.type(new Qe());
      return new Jn(i.precision());
    }
    case G.Decimal: {
      const i = e.type(new Ci());
      return new Hs(i.scale(), i.precision(), i.bitWidth());
    }
    case G.Date: {
      const i = e.type(new Vr());
      return new gi(i.unit());
    }
    case G.Time: {
      const i = e.type(new be());
      return new wn(i.unit(), i.bitWidth());
    }
    case G.Timestamp: {
      const i = e.type(new ve());
      return new In(i.unit(), i.timezone());
    }
    case G.Interval: {
      const i = e.type(new Ze());
      return new _i(i.unit());
    }
    case G.Duration: {
      const i = e.type(new Pr());
      return new Sn(i.unit());
    }
    case G.Union: {
      const i = e.type(new ne());
      return new Qn(i.mode(), i.typeIdsArray() || [], t || []);
    }
    case G.FixedSizeBinary: {
      const i = e.type(new kr());
      return new Ys(i.byteWidth());
    }
    case G.FixedSizeList: {
      const i = e.type(new jr());
      return new ns(i.listSize(), (t || [])[0]);
    }
    case G.Map: {
      const i = e.type(new $r());
      return new is((t || [])[0], i.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${G[n]}" (${n})`);
}
function fw(e, t) {
  const n = t.fields.map((r) => ut.encode(e, r));
  Ke.startFieldsVector(e, n.length);
  const i = Ke.createFieldsVector(e, n), s = t.metadata && t.metadata.size > 0 ? Ke.createCustomMetadataVector(e, [...t.metadata].map(([r, o]) => {
    const a = e.createString(`${r}`), c = e.createString(`${o}`);
    return Rt.startKeyValue(e), Rt.addKey(e, a), Rt.addValue(e, c), Rt.endKeyValue(e);
  })) : -1;
  return Ke.startSchema(e), Ke.addFields(e, i), Ke.addEndianness(e, mw ? Zi.Little : Zi.Big), s !== -1 && Ke.addCustomMetadata(e, s), Ke.endSchema(e);
}
function hw(e, t) {
  let n = -1, i = -1, s = -1;
  const r = t.type;
  let o = t.typeId;
  A.isDictionary(r) ? (o = r.dictionary.typeId, s = ha.visit(r, e), i = ha.visit(r.dictionary, e)) : i = ha.visit(r, e);
  const a = (r.children || []).map((u) => ut.encode(e, u)), c = me.createChildrenVector(e, a), l = t.metadata && t.metadata.size > 0 ? me.createCustomMetadataVector(e, [...t.metadata].map(([u, d]) => {
    const y = e.createString(`${u}`), _ = e.createString(`${d}`);
    return Rt.startKeyValue(e), Rt.addKey(e, y), Rt.addValue(e, _), Rt.endKeyValue(e);
  })) : -1;
  return t.name && (n = e.createString(t.name)), me.startField(e), me.addType(e, i), me.addTypeType(e, o), me.addChildren(e, c), me.addNullable(e, !!t.nullable), n !== -1 && me.addName(e, n), s !== -1 && me.addDictionary(e, s), l !== -1 && me.addCustomMetadata(e, l), me.endField(e);
}
function pw(e, t) {
  const n = t.nodes || [], i = t.buffers || [];
  pn.startNodesVector(e, n.length);
  for (const o of n.slice().reverse())
    Xn.encode(e, o);
  const s = e.endVector();
  pn.startBuffersVector(e, i.length);
  for (const o of i.slice().reverse())
    en.encode(e, o);
  const r = e.endVector();
  return pn.startRecordBatch(e), pn.addLength(e, BigInt(t.length)), pn.addNodes(e, s), pn.addBuffers(e, r), pn.endRecordBatch(e);
}
function yw(e, t) {
  const n = ge.encode(e, t.data);
  return Li.startDictionaryBatch(e), Li.addId(e, BigInt(t.id)), Li.addIsDelta(e, t.isDelta), Li.addData(e, n), Li.endDictionaryBatch(e);
}
function gw(e, t) {
  return Bf.createFieldNode(e, BigInt(t.length), BigInt(t.nullCount));
}
function _w(e, t) {
  return Af.createBuffer(e, BigInt(t.offset), BigInt(t.length));
}
const mw = (() => {
  const e = new ArrayBuffer(2);
  return new DataView(e).setInt16(
    0,
    256,
    !0
    /* littleEndian */
  ), new Int16Array(e)[0] === 256;
})(), Dl = (e) => `Expected ${lt[e]} Message in stream, but was null or length 0.`, Tl = (e) => `Header pointer of flatbuffer-encoded ${lt[e]} Message is null or length 0.`, Dp = (e, t) => `Expected to read ${e} metadata bytes, but only read ${t}.`, Tp = (e, t) => `Expected to read ${e} bytes for message body, but only read ${t}.`;
class Al {
  constructor(t) {
    this.source = t instanceof Js ? t : new Js(t);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let t;
    return (t = this.readMetadataLength()).done || t.value === -1 && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? wt : t;
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  readMessage(t) {
    let n;
    if ((n = this.next()).done)
      return null;
    if (t != null && n.value.headerType !== t)
      throw new Error(Dl(t));
    return n.value;
  }
  readMessageBody(t) {
    if (t <= 0)
      return new Uint8Array(0);
    const n = Z(this.source.read(t));
    if (n.byteLength < t)
      throw new Error(Tp(t, n.byteLength));
    return (
      /* 1. */
      n.byteOffset % 8 === 0 && /* 2. */
      n.byteOffset + n.byteLength <= n.buffer.byteLength ? n : n.slice()
    );
  }
  readSchema(t = !1) {
    const n = lt.Schema, i = this.readMessage(n), s = i == null ? void 0 : i.header();
    if (t && !s)
      throw new Error(Tl(n));
    return s;
  }
  readMetadataLength() {
    const t = this.source.read(zo), n = t && new Qi(t), i = (n == null ? void 0 : n.readInt32(0)) || 0;
    return { done: i === 0, value: i };
  }
  readMetadata(t) {
    const n = this.source.read(t);
    if (!n)
      return wt;
    if (n.byteLength < t)
      throw new Error(Dp(t, n.byteLength));
    return { done: !1, value: jt.decode(n) };
  }
}
class Ap {
  constructor(t, n) {
    this.source = t instanceof Zn ? t : vf(t) ? new _o(t, n) : new Zn(t);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return F(this, void 0, void 0, function* () {
      let t;
      return (t = yield this.readMetadataLength()).done || t.value === -1 && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? wt : t;
    });
  }
  throw(t) {
    return F(this, void 0, void 0, function* () {
      return yield this.source.throw(t);
    });
  }
  return(t) {
    return F(this, void 0, void 0, function* () {
      return yield this.source.return(t);
    });
  }
  readMessage(t) {
    return F(this, void 0, void 0, function* () {
      let n;
      if ((n = yield this.next()).done)
        return null;
      if (t != null && n.value.headerType !== t)
        throw new Error(Dl(t));
      return n.value;
    });
  }
  readMessageBody(t) {
    return F(this, void 0, void 0, function* () {
      if (t <= 0)
        return new Uint8Array(0);
      const n = Z(yield this.source.read(t));
      if (n.byteLength < t)
        throw new Error(Tp(t, n.byteLength));
      return (
        /* 1. */
        n.byteOffset % 8 === 0 && /* 2. */
        n.byteOffset + n.byteLength <= n.buffer.byteLength ? n : n.slice()
      );
    });
  }
  readSchema() {
    return F(this, arguments, void 0, function* (t = !1) {
      const n = lt.Schema, i = yield this.readMessage(n), s = i == null ? void 0 : i.header();
      if (t && !s)
        throw new Error(Tl(n));
      return s;
    });
  }
  readMetadataLength() {
    return F(this, void 0, void 0, function* () {
      const t = yield this.source.read(zo), n = t && new Qi(t), i = (n == null ? void 0 : n.readInt32(0)) || 0;
      return { done: i === 0, value: i };
    });
  }
  readMetadata(t) {
    return F(this, void 0, void 0, function* () {
      const n = yield this.source.read(t);
      if (!n)
        return wt;
      if (n.byteLength < t)
        throw new Error(Dp(t, n.byteLength));
      return { done: !1, value: jt.decode(n) };
    });
  }
}
class Bp extends Al {
  constructor(t) {
    super(new Uint8Array(0)), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof Hu ? t : new Hu(t);
  }
  next() {
    const { _json: t } = this;
    if (!this._schema)
      return this._schema = !0, { done: !1, value: jt.fromJSON(t.schema, lt.Schema) };
    if (this._dictionaryIndex < t.dictionaries.length) {
      const n = t.dictionaries[this._dictionaryIndex++];
      return this._body = n.data.columns, { done: !1, value: jt.fromJSON(n, lt.DictionaryBatch) };
    }
    if (this._batchIndex < t.batches.length) {
      const n = t.batches[this._batchIndex++];
      return this._body = n.columns, { done: !1, value: jt.fromJSON(n, lt.RecordBatch) };
    }
    return this._body = [], wt;
  }
  readMessageBody(t) {
    return n(this._body);
    function n(i) {
      return (i || []).reduce((s, r) => [
        ...s,
        ...r.VALIDITY && [r.VALIDITY] || [],
        ...r.TYPE_ID && [r.TYPE_ID] || [],
        ...r.OFFSET && [r.OFFSET] || [],
        ...r.DATA && [r.DATA] || [],
        ...n(r.children)
      ], []);
    }
  }
  readMessage(t) {
    let n;
    if ((n = this.next()).done)
      return null;
    if (t != null && n.value.headerType !== t)
      throw new Error(Dl(t));
    return n.value;
  }
  readSchema() {
    const t = lt.Schema, n = this.readMessage(t), i = n == null ? void 0 : n.header();
    if (!n || !i)
      throw new Error(Tl(t));
    return i;
  }
}
const zo = 4, Ya = "ARROW1", Qs = new Uint8Array(Ya.length);
for (let e = 0; e < Ya.length; e += 1)
  Qs[e] = Ya.codePointAt(e);
function Bl(e, t = 0) {
  for (let n = -1, i = Qs.length; ++n < i; )
    if (Qs[n] !== e[t + n])
      return !1;
  return !0;
}
const gr = Qs.length, Fp = gr + zo, bw = gr * 2 + zo;
class $t extends Qc {
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
    const n = this._impl.open(t);
    return Kn(n) ? n.then(() => this) : this;
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
    return ue.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return ue.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: !0 });
  }
  /** @nocollapse */
  // @ts-ignore
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  /** @nocollapse */
  static throughDOM(t, n) {
    throw new Error('"throughDOM" not available in this environment');
  }
  /** @nocollapse */
  static from(t) {
    return t instanceof $t ? t : Ua(t) ? Iw(t) : vf(t) ? Ow(t) : Kn(t) ? F(this, void 0, void 0, function* () {
      return yield $t.from(yield t);
    }) : wf(t) || gc(t) || If(t) || vi(t) ? Ew(new Zn(t)) : Sw(new Js(t));
  }
  /** @nocollapse */
  static readAll(t) {
    return t instanceof $t ? t.isSync() ? td(t) : ed(t) : Ua(t) || ArrayBuffer.isView(t) || cs(t) || bf(t) ? td(t) : ed(t);
  }
}
class os extends $t {
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
    return Ae(this, arguments, function* () {
      yield J(yield* Ur(Wn(this[Symbol.iterator]())));
    });
  }
}
class Zs extends $t {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return F(this, void 0, void 0, function* () {
      var t, n, i, s;
      const r = new Array();
      try {
        for (var o = !0, a = Wn(this), c; c = yield a.next(), t = c.done, !t; o = !0) {
          s = c.value, o = !1;
          const l = s;
          r.push(l);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          !o && !t && (i = a.return) && (yield i.call(a));
        } finally {
          if (n) throw n.error;
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
class Wo extends os {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class Rp extends Zs {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class Lp {
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
  _loadRecordBatch(t, n) {
    const i = this._loadVectors(t, n, this.schema.fields), s = C({ type: new xt(this.schema.fields), length: t.length, children: i });
    return new Ut(this.schema, s);
  }
  _loadDictionaryBatch(t, n) {
    const { id: i, isDelta: s } = t, { dictionaries: r, schema: o } = this, a = r.get(i), c = o.dictionaries.get(i), l = this._loadVectors(t.data, n, [c]);
    return (a && s ? a.concat(new R(l)) : new R(l)).memoize();
  }
  _loadVectors(t, n, i) {
    return new Zh(n, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(i);
  }
}
class bo extends Lp {
  constructor(t, n) {
    super(n), this._reader = Ua(t) ? new Bp(this._handle = t) : new Al(this._handle = t);
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
    return this.closed || (this.autoDestroy = Cp(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
  }
  throw(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : wt;
  }
  return(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : wt;
  }
  next() {
    if (this.closed)
      return wt;
    let t;
    const { _reader: n } = this;
    for (; t = this._readNextMessageAndValidate(); )
      if (t.isSchema())
        this.reset(t.header());
      else if (t.isRecordBatch()) {
        this._recordBatchIndex++;
        const i = t.header(), s = n.readMessageBody(t.bodyLength);
        return { done: !1, value: this._loadRecordBatch(i, s) };
      } else if (t.isDictionaryBatch()) {
        this._dictionaryIndex++;
        const i = t.header(), s = n.readMessageBody(t.bodyLength), r = this._loadDictionaryBatch(i, s);
        this.dictionaries.set(i.id, r);
      }
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new Nl(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}
class vo extends Lp {
  constructor(t, n) {
    super(n), this._reader = new Ap(this._handle = t);
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
    return F(this, void 0, void 0, function* () {
      !this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
    });
  }
  open(t) {
    return F(this, void 0, void 0, function* () {
      return this.closed || (this.autoDestroy = Cp(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
    });
  }
  throw(t) {
    return F(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : wt;
    });
  }
  return(t) {
    return F(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : wt;
    });
  }
  next() {
    return F(this, void 0, void 0, function* () {
      if (this.closed)
        return wt;
      let t;
      const { _reader: n } = this;
      for (; t = yield this._readNextMessageAndValidate(); )
        if (t.isSchema())
          yield this.reset(t.header());
        else if (t.isRecordBatch()) {
          this._recordBatchIndex++;
          const i = t.header(), s = yield n.readMessageBody(t.bodyLength);
          return { done: !1, value: this._loadRecordBatch(i, s) };
        } else if (t.isDictionaryBatch()) {
          this._dictionaryIndex++;
          const i = t.header(), s = yield n.readMessageBody(t.bodyLength), r = this._loadDictionaryBatch(i, s);
          this.dictionaries.set(i.id, r);
        }
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new Nl(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return F(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}
class Mp extends bo {
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  constructor(t, n) {
    super(t instanceof Yu ? t : new Yu(t), n);
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
      for (const n of this._footer.dictionaryBatches())
        n && this._readDictionaryBatch(this._dictionaryIndex++);
    }
    return super.open(t);
  }
  readRecordBatch(t) {
    var n;
    if (this.closed)
      return null;
    this._footer || this.open();
    const i = (n = this._footer) === null || n === void 0 ? void 0 : n.getRecordBatch(t);
    if (i && this._handle.seek(i.offset)) {
      const s = this._reader.readMessage(lt.RecordBatch);
      if (s != null && s.isRecordBatch()) {
        const r = s.header(), o = this._reader.readMessageBody(s.bodyLength);
        return this._loadRecordBatch(r, o);
      }
    }
    return null;
  }
  _readDictionaryBatch(t) {
    var n;
    const i = (n = this._footer) === null || n === void 0 ? void 0 : n.getDictionaryBatch(t);
    if (i && this._handle.seek(i.offset)) {
      const s = this._reader.readMessage(lt.DictionaryBatch);
      if (s != null && s.isDictionaryBatch()) {
        const r = s.header(), o = this._reader.readMessageBody(s.bodyLength), a = this._loadDictionaryBatch(r, o);
        this.dictionaries.set(r.id, a);
      }
    }
  }
  _readFooter() {
    const { _handle: t } = this, n = t.size - Fp, i = t.readInt32(n), s = t.readAt(n - i, i);
    return qs.decode(s);
  }
  _readNextMessageAndValidate(t) {
    var n;
    if (this._footer || this.open(), this._footer && this._recordBatchIndex < this.numRecordBatches) {
      const i = (n = this._footer) === null || n === void 0 ? void 0 : n.getRecordBatch(this._recordBatchIndex);
      if (i && this._handle.seek(i.offset))
        return this._reader.readMessage(t);
    }
    return null;
  }
}
class vw extends vo {
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  constructor(t, ...n) {
    const i = typeof n[0] != "number" ? n.shift() : void 0, s = n[0] instanceof Map ? n.shift() : void 0;
    super(t instanceof _o ? t : new _o(t, i), s);
  }
  isFile() {
    return !0;
  }
  isAsync() {
    return !0;
  }
  open(t) {
    const n = Object.create(null, {
      open: { get: () => super.open }
    });
    return F(this, void 0, void 0, function* () {
      if (!this.closed && !this._footer) {
        this.schema = (this._footer = yield this._readFooter()).schema;
        for (const i of this._footer.dictionaryBatches())
          i && (yield this._readDictionaryBatch(this._dictionaryIndex++));
      }
      return yield n.open.call(this, t);
    });
  }
  readRecordBatch(t) {
    return F(this, void 0, void 0, function* () {
      var n;
      if (this.closed)
        return null;
      this._footer || (yield this.open());
      const i = (n = this._footer) === null || n === void 0 ? void 0 : n.getRecordBatch(t);
      if (i && (yield this._handle.seek(i.offset))) {
        const s = yield this._reader.readMessage(lt.RecordBatch);
        if (s != null && s.isRecordBatch()) {
          const r = s.header(), o = yield this._reader.readMessageBody(s.bodyLength);
          return this._loadRecordBatch(r, o);
        }
      }
      return null;
    });
  }
  _readDictionaryBatch(t) {
    return F(this, void 0, void 0, function* () {
      var n;
      const i = (n = this._footer) === null || n === void 0 ? void 0 : n.getDictionaryBatch(t);
      if (i && (yield this._handle.seek(i.offset))) {
        const s = yield this._reader.readMessage(lt.DictionaryBatch);
        if (s != null && s.isDictionaryBatch()) {
          const r = s.header(), o = yield this._reader.readMessageBody(s.bodyLength), a = this._loadDictionaryBatch(r, o);
          this.dictionaries.set(r.id, a);
        }
      }
    });
  }
  _readFooter() {
    return F(this, void 0, void 0, function* () {
      const { _handle: t } = this;
      t._pending && (yield t._pending);
      const n = t.size - Fp, i = yield t.readInt32(n), s = yield t.readAt(n - i, i);
      return qs.decode(s);
    });
  }
  _readNextMessageAndValidate(t) {
    return F(this, void 0, void 0, function* () {
      if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
        const n = this._footer.getRecordBatch(this._recordBatchIndex);
        if (n && (yield this._handle.seek(n.offset)))
          return yield this._reader.readMessage(t);
      }
      return null;
    });
  }
}
class ww extends bo {
  constructor(t, n) {
    super(t, n);
  }
  _loadVectors(t, n, i) {
    return new Bv(n, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(i);
  }
}
function Cp(e, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : e.autoDestroy;
}
function* td(e) {
  const t = $t.from(e);
  try {
    if (!t.open({ autoDestroy: !1 }).closed)
      do
        yield t;
      while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function ed(e) {
  return Ae(this, arguments, function* () {
    const n = yield J($t.from(e));
    try {
      if (!(yield J(n.open({ autoDestroy: !1 }))).closed)
        do
          yield yield J(n);
        while (!(yield J(n.reset().open())).closed);
    } finally {
      yield J(n.cancel());
    }
  });
}
function Iw(e) {
  return new os(new ww(e));
}
function Sw(e) {
  const t = e.peek(gr + 7 & -8);
  return t && t.byteLength >= 4 ? Bl(t) ? new Wo(new Mp(e.read())) : new os(new bo(e)) : new os(new bo((function* () {
  })()));
}
function Ew(e) {
  return F(this, void 0, void 0, function* () {
    const t = yield e.peek(gr + 7 & -8);
    return t && t.byteLength >= 4 ? Bl(t) ? new Wo(new Mp(yield e.read())) : new Zs(new vo(e)) : new Zs(new vo((function() {
      return Ae(this, arguments, function* () {
      });
    })()));
  });
}
function Ow(e) {
  return F(this, void 0, void 0, function* () {
    const { size: t } = yield e.stat(), n = new _o(e, t);
    return t >= bw && Bl(yield n.readAt(0, gr + 7 & -8)) ? new Rp(new vw(n)) : new Zs(new vo(n));
  });
}
class St extends Q {
  /** @nocollapse */
  static assemble(...t) {
    const n = (s) => s.flatMap((r) => Array.isArray(r) ? n(r) : r instanceof Ut ? r.data.children : r.data), i = new St();
    return i.visitMany(n(t)), i;
  }
  constructor() {
    super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [];
  }
  visit(t) {
    if (t instanceof R)
      return this.visitMany(t.data), this;
    const { type: n } = t;
    if (!A.isDictionary(n)) {
      const { length: i } = t;
      if (i > 2147483647)
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      if (A.isUnion(n))
        this.nodes.push(new Xn(i, 0));
      else {
        const { nullCount: s } = t;
        A.isNull(n) || Re.call(this, s <= 0 ? new Uint8Array(0) : Ks(t.offset, i, t.nullBitmap)), this.nodes.push(new Xn(i, s));
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
function Re(e) {
  const t = e.byteLength + 7 & -8;
  return this.buffers.push(e), this.bufferRegions.push(new en(this._byteLength, t)), this._byteLength += t, this;
}
function Nw(e) {
  var t;
  const { type: n, length: i, typeIds: s, valueOffsets: r } = e;
  if (Re.call(this, s), n.mode === Tt.Sparse)
    return Ka.call(this, e);
  if (n.mode === Tt.Dense) {
    if (e.offset <= 0)
      return Re.call(this, r), Ka.call(this, e);
    {
      const o = new Int32Array(i), a = /* @__PURE__ */ Object.create(null), c = /* @__PURE__ */ Object.create(null);
      for (let l, u, d = -1; ++d < i; )
        (l = s[d]) !== void 0 && ((u = a[l]) === void 0 && (u = a[l] = r[d]), o[d] = r[d] - u, c[l] = ((t = c[l]) !== null && t !== void 0 ? t : 0) + 1);
      Re.call(this, o), this.visitMany(e.children.map((l, u) => {
        const d = n.typeIds[u], y = a[d], _ = c[d];
        return l.slice(y, Math.min(i, _));
      }));
    }
  }
  return this;
}
function Dw(e) {
  let t;
  return e.nullCount >= e.length ? Re.call(this, new Uint8Array(0)) : (t = e.values) instanceof Uint8Array ? Re.call(this, Ks(e.offset, e.length, t)) : Re.call(this, Gs(e.values));
}
function Bn(e) {
  return Re.call(this, e.values.subarray(0, e.length * e.stride));
}
function Ho(e) {
  const { length: t, values: n, valueOffsets: i } = e, s = vt(i[0]), r = vt(i[t]), o = Math.min(r - s, n.byteLength - s);
  return Re.call(this, mc(-s, t + 1, i)), Re.call(this, n.subarray(s, s + o)), this;
}
function Fl(e) {
  const { length: t, valueOffsets: n } = e;
  if (n) {
    const { [0]: i, [t]: s } = n;
    return Re.call(this, mc(-i, t + 1, n)), this.visit(e.children[0].slice(i, s - i));
  }
  return this.visit(e.children[0]);
}
function Ka(e) {
  return this.visitMany(e.type.children.map((t, n) => e.children[n]).filter(Boolean))[0];
}
St.prototype.visitBool = Dw;
St.prototype.visitInt = Bn;
St.prototype.visitFloat = Bn;
St.prototype.visitUtf8 = Ho;
St.prototype.visitLargeUtf8 = Ho;
St.prototype.visitBinary = Ho;
St.prototype.visitLargeBinary = Ho;
St.prototype.visitFixedSizeBinary = Bn;
St.prototype.visitDate = Bn;
St.prototype.visitTimestamp = Bn;
St.prototype.visitTime = Bn;
St.prototype.visitDecimal = Bn;
St.prototype.visitList = Fl;
St.prototype.visitStruct = Ka;
St.prototype.visitUnion = Nw;
St.prototype.visitInterval = Bn;
St.prototype.visitDuration = Bn;
St.prototype.visitFixedSizeList = Fl;
St.prototype.visitMap = Fl;
class Tw extends Q {
  visit(t) {
    return t == null ? void 0 : super.visit(t);
  }
  visitNull({ typeId: t }) {
    return { name: G[t].toLowerCase() };
  }
  visitInt({ typeId: t, bitWidth: n, isSigned: i }) {
    return { name: G[t].toLowerCase(), bitWidth: n, isSigned: i };
  }
  visitFloat({ typeId: t, precision: n }) {
    return { name: G[t].toLowerCase(), precision: Dt[n] };
  }
  visitBinary({ typeId: t }) {
    return { name: G[t].toLowerCase() };
  }
  visitLargeBinary({ typeId: t }) {
    return { name: G[t].toLowerCase() };
  }
  visitBool({ typeId: t }) {
    return { name: G[t].toLowerCase() };
  }
  visitUtf8({ typeId: t }) {
    return { name: G[t].toLowerCase() };
  }
  visitLargeUtf8({ typeId: t }) {
    return { name: G[t].toLowerCase() };
  }
  visitDecimal({ typeId: t, scale: n, precision: i, bitWidth: s }) {
    return { name: G[t].toLowerCase(), scale: n, precision: i, bitWidth: s };
  }
  visitDate({ typeId: t, unit: n }) {
    return { name: G[t].toLowerCase(), unit: Pt[n] };
  }
  visitTime({ typeId: t, unit: n, bitWidth: i }) {
    return { name: G[t].toLowerCase(), unit: T[n], bitWidth: i };
  }
  visitTimestamp({ typeId: t, timezone: n, unit: i }) {
    return { name: G[t].toLowerCase(), unit: T[i], timezone: n };
  }
  visitInterval({ typeId: t, unit: n }) {
    return { name: G[t].toLowerCase(), unit: re[n] };
  }
  visitDuration({ typeId: t, unit: n }) {
    return { name: G[t].toLocaleLowerCase(), unit: T[n] };
  }
  visitList({ typeId: t }) {
    return { name: G[t].toLowerCase() };
  }
  visitStruct({ typeId: t }) {
    return { name: G[t].toLowerCase() };
  }
  visitUnion({ typeId: t, mode: n, typeIds: i }) {
    return {
      name: G[t].toLowerCase(),
      mode: Tt[n].toUpperCase(),
      typeIds: [...i]
    };
  }
  visitDictionary(t) {
    return this.visit(t.dictionary);
  }
  visitFixedSizeBinary({ typeId: t, byteWidth: n }) {
    return { name: G[t].toLowerCase(), byteWidth: n };
  }
  visitFixedSizeList({ typeId: t, listSize: n }) {
    return { name: G[t].toLowerCase(), listSize: n };
  }
  visitMap({ typeId: t, keysSorted: n }) {
    return { name: G[t].toLowerCase(), keysSorted: n };
  }
}
class Yo extends Q {
  /** @nocollapse */
  static assemble(...t) {
    const n = new Yo();
    return t.map(({ schema: i, data: s }) => n.visitMany(i.fields, s.children));
  }
  visit({ name: t }, n) {
    const { length: i } = n, { offset: s, nullCount: r, nullBitmap: o } = n, a = A.isDictionary(n.type) ? n.type.indices : n.type, c = Object.assign([], n.buffers, { [Oe.VALIDITY]: void 0 });
    return Object.assign({ name: t, count: i, VALIDITY: A.isNull(a) || A.isUnion(a) ? void 0 : r <= 0 ? Array.from({ length: i }, () => 1) : [...new ss(o, s, i, null, Kc)] }, super.visit(n.clone(a, s, i, 0, c)));
  }
  visitNull() {
    return {};
  }
  visitBool({ values: t, offset: n, length: i }) {
    return { DATA: [...new ss(t, n, i, null, Po)] };
  }
  visitInt(t) {
    return {
      DATA: t.type.bitWidth < 64 ? [...t.values] : [...Cn(t.values, 2)]
    };
  }
  visitFloat(t) {
    return { DATA: [...t.values] };
  }
  visitUtf8(t) {
    return { DATA: [...new R([t])], OFFSET: [...t.valueOffsets] };
  }
  visitLargeUtf8(t) {
    return { DATA: [...new R([t])], OFFSET: [...Cn(t.valueOffsets, 2)] };
  }
  visitBinary(t) {
    return { DATA: [...pa(new R([t]))], OFFSET: [...t.valueOffsets] };
  }
  visitLargeBinary(t) {
    return { DATA: [...pa(new R([t]))], OFFSET: [...Cn(t.valueOffsets, 2)] };
  }
  visitFixedSizeBinary(t) {
    return { DATA: [...pa(new R([t]))] };
  }
  visitDate(t) {
    return {
      DATA: t.type.unit === Pt.DAY ? [...t.values] : [...Cn(t.values, 2)]
    };
  }
  visitTimestamp(t) {
    return { DATA: [...Cn(t.values, 2)] };
  }
  visitTime(t) {
    return {
      DATA: t.type.unit < T.MICROSECOND ? [...t.values] : [...Cn(t.values, 2)]
    };
  }
  visitDecimal(t) {
    return { DATA: [...Cn(t.values, 4)] };
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
      OFFSET: t.type.mode === Tt.Dense ? [...t.valueOffsets] : void 0,
      children: this.visitMany(t.type.children, t.children)
    };
  }
  visitInterval(t) {
    return { DATA: [...t.values] };
  }
  visitDuration(t) {
    return { DATA: [...Cn(t.values, 2)] };
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
function* pa(e) {
  for (const t of e)
    yield t.reduce((n, i) => `${n}${("0" + (i & 255).toString(16)).slice(-2)}`, "").toUpperCase();
}
function* Cn(e, t) {
  const n = new Uint32Array(e.buffer);
  for (let i = -1, s = n.length / t; ++i < s; )
    yield `${or.new(n.subarray((i + 0) * t, (i + 1) * t), !1)}`;
}
class _r extends Qc {
  /** @nocollapse */
  // @ts-ignore
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  /** @nocollapse */
  static throughDOM(t, n) {
    throw new Error('"throughDOM" not available in this environment');
  }
  constructor(t) {
    super(), this._position = 0, this._started = !1, this._sink = new Ji(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), se(t) || (t = { autoDestroy: !0, writeLegacyIpcFormat: !1 }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : !0, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : !1;
  }
  toString(t = !1) {
    return this._sink.toString(t);
  }
  toUint8Array(t = !1) {
    return this._sink.toUint8Array(t);
  }
  writeAll(t) {
    return Kn(t) ? t.then((n) => this.writeAll(n)) : vi(t) ? Ml(this, t) : Ll(this, t);
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
  reset(t = this._sink, n = null) {
    return t === this._sink || t instanceof Ji ? this._sink = t : (this._sink = new Ji(), t && mm(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && bm(t) && this.toNodeStream({ objectMode: !1 }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!n || !mo(n, this._schema)) && (n == null ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = n, this._writeSchema(n))), this;
  }
  write(t) {
    let n = null;
    if (this._sink) {
      if (t == null)
        return this.finish() && void 0;
      if (t instanceof Nt && !(n = t.schema))
        return this.finish() && void 0;
      if (t instanceof Ut && !(n = t.schema))
        return this.finish() && void 0;
    } else throw new Error("RecordBatchWriter is closed");
    if (n && !mo(n, this._schema)) {
      if (this._started && this._autoDestroy)
        return this.close();
      this.reset(this._sink, n);
    }
    t instanceof Ut ? t instanceof Nl || this._writeRecordBatch(t) : t instanceof Nt ? this.writeAll(t.batches) : cs(t) && this.writeAll(t);
  }
  _writeMessage(t, n = 8) {
    const i = n - 1, s = jt.encode(t), r = s.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, a = r + o + i & ~i, c = a - r - o;
    return t.headerType === lt.RecordBatch ? this._recordBatchBlocks.push(new rn(a, t.bodyLength, this._position)) : t.headerType === lt.DictionaryBatch && this._dictionaryBlocks.push(new rn(a, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(a - o)), r > 0 && this._write(s), this._writePadding(c);
  }
  _write(t) {
    if (this._started) {
      const n = Z(t);
      n && n.byteLength > 0 && (this._sink.write(n), this._position += n.byteLength);
    }
    return this;
  }
  _writeSchema(t) {
    return this._writeMessage(jt.from(t));
  }
  // @ts-ignore
  _writeFooter(t) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(Qs);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: n, nodes: i, bufferRegions: s, buffers: r } = St.assemble(t), o = new ge(t.numRows, i, s), a = jt.from(o, n);
    return this._writeDictionaries(t)._writeMessage(a)._writeBodyBuffers(r);
  }
  _writeDictionaryBatch(t, n, i = !1) {
    const { byteLength: s, nodes: r, bufferRegions: o, buffers: a } = St.assemble(new R([t])), c = new ge(t.length, r, o), l = new an(c, n, i), u = jt.from(l, s);
    return this._writeMessage(u)._writeBodyBuffers(a);
  }
  _writeBodyBuffers(t) {
    let n, i, s;
    for (let r = -1, o = t.length; ++r < o; )
      (n = t[r]) && (i = n.byteLength) > 0 && (this._write(n), (s = (i + 7 & -8) - i) > 0 && this._writePadding(s));
    return this;
  }
  _writeDictionaries(t) {
    var n, i;
    for (const [s, r] of t.dictionaries) {
      const o = (n = r == null ? void 0 : r.data) !== null && n !== void 0 ? n : [], a = this._seenDictionaries.get(s), c = (i = this._dictionaryDeltaOffsets.get(s)) !== null && i !== void 0 ? i : 0;
      if (!a || a.data[0] !== o[0])
        for (const [l, u] of o.entries())
          this._writeDictionaryBatch(u, s, l > 0);
      else if (c < o.length)
        for (const l of o.slice(c))
          this._writeDictionaryBatch(l, s, !0);
      this._seenDictionaries.set(s, r), this._dictionaryDeltaOffsets.set(s, o.length);
    }
    return this;
  }
}
class mr extends _r {
  /** @nocollapse */
  static writeAll(t, n) {
    const i = new mr(n);
    return Kn(t) ? t.then((s) => i.writeAll(s)) : vi(t) ? Ml(i, t) : Ll(i, t);
  }
}
class br extends _r {
  /** @nocollapse */
  static writeAll(t) {
    const n = new br();
    return Kn(t) ? t.then((i) => n.writeAll(i)) : vi(t) ? Ml(n, t) : Ll(n, t);
  }
  constructor() {
    super(), this._autoDestroy = !0;
  }
  // @ts-ignore
  _writeSchema(t) {
    return this._writeMagic()._writePadding(2);
  }
  _writeDictionaryBatch(t, n, i = !1) {
    if (!i && this._seenDictionaries.has(n))
      throw new Error("The Arrow File format does not support replacement dictionaries. ");
    return super._writeDictionaryBatch(t, n, i);
  }
  _writeFooter(t) {
    const n = qs.encode(new qs(t, Ot.V5, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(n)._write(Int32Array.of(n.byteLength))._writeMagic();
  }
}
class Rl extends _r {
  /** @nocollapse */
  static writeAll(t) {
    return new Rl().writeAll(t);
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
  "schema": ${JSON.stringify({ fields: t.fields.map((n) => xp(n)) }, null, 2)}`);
  }
  _writeDictionaries(t) {
    return t.dictionaries.size > 0 && this._recordBatchesWithDictionaries.push(t), this;
  }
  _writeDictionaryBatch(t, n, i = !1) {
    return this._write(this._dictionaryBlocks.length === 0 ? "    " : `,
    `), this._write(Aw(t, n, i)), this._dictionaryBlocks.push(new rn(0, 0, 0)), this;
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
      for (let t = -1, n = this._recordBatches.length; ++t < n; )
        this._write(t === 0 ? `,
  "batches": [
    ` : `,
    `), this._write(Bw(this._recordBatches[t])), this._recordBatchBlocks.push(new rn(0, 0, 0));
      this._write(`
  ]`);
    }
    return this._schema && this._write(`
}`), this._recordBatchesWithDictionaries = [], this._recordBatches = [], super.close();
  }
}
function Ll(e, t) {
  let n = t;
  t instanceof Nt && (n = t.batches, e.reset(void 0, t.schema));
  for (const i of n)
    e.write(i);
  return e.finish();
}
function Ml(e, t) {
  return F(this, void 0, void 0, function* () {
    var n, i, s, r, o, a, c;
    try {
      for (n = !0, i = Wn(t); s = yield i.next(), r = s.done, !r; n = !0) {
        c = s.value, n = !1;
        const l = c;
        e.write(l);
      }
    } catch (l) {
      o = { error: l };
    } finally {
      try {
        !n && !r && (a = i.return) && (yield a.call(i));
      } finally {
        if (o) throw o.error;
      }
    }
    return e.finish();
  });
}
function xp({ name: e, type: t, nullable: n }) {
  const i = new Tw();
  return {
    name: e,
    nullable: n,
    type: i.visit(t),
    children: (t.children || []).map((s) => xp(s)),
    dictionary: A.isDictionary(t) ? {
      id: t.id,
      isOrdered: t.isOrdered,
      indexType: i.visit(t.indices)
    } : void 0
  };
}
function Aw(e, t, n = !1) {
  const [i] = Yo.assemble(new Ut({ [t]: e }));
  return JSON.stringify({
    id: t,
    isDelta: n,
    data: {
      count: e.length,
      columns: i
    }
  }, null, 2);
}
function Bw(e) {
  const [t] = Yo.assemble(e);
  return JSON.stringify({
    count: e.numRows,
    columns: t
  }, null, 2);
}
function Fw(e, t) {
  if (vi(e))
    return Lw(e, t);
  if (cs(e))
    return Rw(e, t);
  throw new Error("toDOMStream() must be called with an Iterable or AsyncIterable");
}
function Rw(e, t) {
  let n = null;
  const i = (t == null ? void 0 : t.type) === "bytes" || !1, s = (t == null ? void 0 : t.highWaterMark) || Math.pow(2, 24);
  return new ReadableStream(Object.assign(Object.assign({}, t), {
    start(o) {
      r(o, n || (n = e[Symbol.iterator]()));
    },
    pull(o) {
      n ? r(o, n) : o.close();
    },
    cancel() {
      (n != null && n.return && n.return() || !0) && (n = null);
    }
  }), Object.assign({ highWaterMark: i ? s : void 0 }, t));
  function r(o, a) {
    let c, l = null, u = o.desiredSize || null;
    for (; !(l = a.next(i ? u : null)).done; )
      if (ArrayBuffer.isView(l.value) && (c = Z(l.value)) && (u != null && i && (u = u - c.byteLength + 1), l.value = c), o.enqueue(l.value), u != null && --u <= 0)
        return;
    o.close();
  }
}
function Lw(e, t) {
  let n = null;
  const i = (t == null ? void 0 : t.type) === "bytes" || !1, s = (t == null ? void 0 : t.highWaterMark) || Math.pow(2, 24);
  return new ReadableStream(Object.assign(Object.assign({}, t), {
    start(o) {
      return F(this, void 0, void 0, function* () {
        yield r(o, n || (n = e[Symbol.asyncIterator]()));
      });
    },
    pull(o) {
      return F(this, void 0, void 0, function* () {
        n ? yield r(o, n) : o.close();
      });
    },
    cancel() {
      return F(this, void 0, void 0, function* () {
        (n != null && n.return && (yield n.return()) || !0) && (n = null);
      });
    }
  }), Object.assign({ highWaterMark: i ? s : void 0 }, t));
  function r(o, a) {
    return F(this, void 0, void 0, function* () {
      let c, l = null, u = o.desiredSize || null;
      for (; !(l = yield a.next(i ? u : null)).done; )
        if (ArrayBuffer.isView(l.value) && (c = Z(l.value)) && (u != null && i && (u = u - c.byteLength + 1), l.value = c), o.enqueue(l.value), u != null && --u <= 0)
          return;
      o.close();
    });
  }
}
function Mw(e) {
  return new Cw(e);
}
class Cw {
  constructor(t) {
    this._numChunks = 0, this._finished = !1, this._bufferedSize = 0;
    const { ["readableStrategy"]: n, ["writableStrategy"]: i, ["queueingStrategy"]: s = "count" } = t, r = pm(t, ["readableStrategy", "writableStrategy", "queueingStrategy"]);
    this._controller = null, this._builder = bi(r), this._getSize = s !== "bytes" ? nd : id;
    const { ["highWaterMark"]: o = s === "bytes" ? Math.pow(2, 14) : 1e3 } = Object.assign({}, n), { ["highWaterMark"]: a = s === "bytes" ? Math.pow(2, 14) : 1e3 } = Object.assign({}, i);
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
      size: s !== "bytes" ? nd : id
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
    const n = this._bufferedSize;
    return this._bufferedSize = this._getSize(this._builder.append(t)), this._bufferedSize - n;
  }
  _maybeFlush(t, n) {
    n != null && (this._bufferedSize >= n.desiredSize && ++this._numChunks && this._enqueue(n, t.toVector()), t.finished && ((t.length > 0 || this._numChunks === 0) && ++this._numChunks && this._enqueue(n, t.toVector()), !this._finished && (this._finished = !0) && this._enqueue(n, null)));
  }
  _enqueue(t, n) {
    this._bufferedSize = 0, this._controller = null, n == null ? t.close() : t.enqueue(n);
  }
}
const nd = (e) => {
  var t;
  return (t = e == null ? void 0 : e.length) !== null && t !== void 0 ? t : 0;
}, id = (e) => {
  var t;
  return (t = e == null ? void 0 : e.byteLength) !== null && t !== void 0 ? t : 0;
};
function Cl(e, t) {
  const n = new Ji();
  let i = null;
  const s = new ReadableStream({
    cancel() {
      return F(this, void 0, void 0, function* () {
        yield n.close();
      });
    },
    start(a) {
      return F(this, void 0, void 0, function* () {
        yield o(a, i || (i = yield r()));
      });
    },
    pull(a) {
      return F(this, void 0, void 0, function* () {
        i ? yield o(a, i) : a.close();
      });
    }
  });
  return { writable: new WritableStream(n, Object.assign({ highWaterMark: Math.pow(2, 14) }, e)), readable: s };
  function r() {
    return F(this, void 0, void 0, function* () {
      return yield (yield $t.from(n)).open(t);
    });
  }
  function o(a, c) {
    return F(this, void 0, void 0, function* () {
      let l = a.desiredSize, u = null;
      for (; !(u = yield c.next()).done; )
        if (a.enqueue(u.value), l != null && --l <= 0)
          return;
      a.close();
    });
  }
}
function xl(e, t) {
  const n = new this(e), i = new Zn(n), s = new ReadableStream({
    // type: 'bytes',
    cancel() {
      return F(this, void 0, void 0, function* () {
        yield i.cancel();
      });
    },
    pull(o) {
      return F(this, void 0, void 0, function* () {
        yield r(o);
      });
    },
    start(o) {
      return F(this, void 0, void 0, function* () {
        yield r(o);
      });
    }
  }, Object.assign({ highWaterMark: Math.pow(2, 14) }, t));
  return { writable: new WritableStream(n, e), readable: s };
  function r(o) {
    return F(this, void 0, void 0, function* () {
      let a = null, c = o.desiredSize;
      for (; a = yield i.read(c || null); )
        if (o.enqueue(a), c != null && (c -= a.byteLength) <= 0)
          return;
      o.close();
    });
  }
}
function Up(e) {
  const t = $t.from(e);
  return Kn(t) ? t.then((n) => Up(n)) : t.isAsync() ? t.readAll().then((n) => new Nt(n)) : new Nt(t.readAll());
}
function Vp(e, t = "stream") {
  return (t === "stream" ? mr : br).writeAll(e).toUint8Array(!0);
}
const xw = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, nb), Av), hv), Ib), Ym), dv), Xm), {
  compareSchemas: mo,
  compareFields: kv,
  compareTypes: bp
});
ue.toDOMStream = Fw;
zt.throughDOM = Mw;
$t.throughDOM = Cl;
Wo.throughDOM = Cl;
os.throughDOM = Cl;
_r.throughDOM = xl;
br.throughDOM = xl;
mr.throughDOM = xl;
const x0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AsyncByteQueue: Ji,
  AsyncByteStream: Zn,
  AsyncMessageReader: Ap,
  AsyncRecordBatchFileReader: Rp,
  AsyncRecordBatchStreamReader: Zs,
  Binary: $s,
  BinaryBuilder: tl,
  Bool: es,
  BoolBuilder: Xh,
  get BufferType() {
    return Oe;
  },
  Builder: zt,
  ByteStream: Js,
  Data: ct,
  DataType: A,
  DateBuilder: ur,
  DateDay: ib,
  DateDayBuilder: nl,
  DateMillisecond: sb,
  DateMillisecondBuilder: il,
  get DateUnit() {
    return Pt;
  },
  Date_: gi,
  Decimal: Hs,
  DecimalBuilder: sl,
  DenseUnion: mb,
  DenseUnionBuilder: mp,
  Dictionary: En,
  DictionaryBuilder: tp,
  Duration: Sn,
  DurationBuilder: Ii,
  DurationMicrosecond: gb,
  DurationMicrosecondBuilder: ul,
  DurationMillisecond: yb,
  DurationMillisecondBuilder: ll,
  DurationNanosecond: _b,
  DurationNanosecondBuilder: dl,
  DurationSecond: pb,
  DurationSecondBuilder: cl,
  Field: ut,
  FixedSizeBinary: Ys,
  FixedSizeBinaryBuilder: rl,
  FixedSizeList: ns,
  FixedSizeListBuilder: ep,
  Float: Jn,
  Float16: nh,
  Float16Builder: np,
  Float32: Nc,
  Float32Builder: ip,
  Float64: Co,
  Float64Builder: sp,
  FloatBuilder: dr,
  Int: qt,
  Int16: wc,
  Int16Builder: op,
  Int32: qn,
  Int32Builder: ap,
  Int64: Mo,
  Int64Builder: cp,
  Int8: vc,
  Int8Builder: rp,
  IntBuilder: ln,
  Interval: _i,
  IntervalBuilder: fr,
  IntervalDayTime: fb,
  IntervalDayTimeBuilder: ol,
  get IntervalUnit() {
    return re;
  },
  IntervalYearMonth: hb,
  IntervalYearMonthBuilder: al,
  JSONMessageReader: Bp,
  LargeBinary: zs,
  LargeBinaryBuilder: el,
  LargeUtf8: Ws,
  LargeUtf8Builder: wl,
  List: mi,
  ListBuilder: hp,
  MapBuilder: pp,
  MapRow: ar,
  Map_: is,
  Message: jt,
  get MessageHeader() {
    return lt;
  },
  MessageReader: Al,
  get MetadataVersion() {
    return Ot;
  },
  Null: sn,
  NullBuilder: yp,
  get Precision() {
    return Dt;
  },
  RecordBatch: Ut,
  RecordBatchFileReader: Wo,
  RecordBatchFileWriter: br,
  RecordBatchJSONWriter: Rl,
  RecordBatchReader: $t,
  RecordBatchStreamReader: os,
  RecordBatchStreamWriter: mr,
  RecordBatchWriter: _r,
  Schema: ft,
  SparseUnion: bb,
  SparseUnionBuilder: _p,
  Struct: xt,
  StructBuilder: gp,
  StructRow: xo,
  Table: Nt,
  Time: wn,
  TimeBuilder: Ei,
  TimeMicrosecond: ab,
  TimeMicrosecondBuilder: ml,
  TimeMillisecond: ob,
  TimeMillisecondBuilder: _l,
  TimeNanosecond: cb,
  TimeNanosecondBuilder: bl,
  TimeSecond: rb,
  TimeSecondBuilder: gl,
  get TimeUnit() {
    return T;
  },
  Timestamp: In,
  TimestampBuilder: Si,
  TimestampMicrosecond: ub,
  TimestampMicrosecondBuilder: pl,
  TimestampMillisecond: ih,
  TimestampMillisecondBuilder: hl,
  TimestampNanosecond: db,
  TimestampNanosecondBuilder: yl,
  TimestampSecond: lb,
  TimestampSecondBuilder: fl,
  get Type() {
    return h;
  },
  Uint16: Sc,
  Uint16Builder: up,
  Uint32: Ec,
  Uint32Builder: dp,
  Uint64: Oc,
  Uint64Builder: fp,
  Uint8: Ic,
  Uint8Builder: lp,
  Union: Qn,
  UnionBuilder: jo,
  get UnionMode() {
    return Tt;
  },
  Utf8: ts,
  Utf8Builder: vl,
  Vector: R,
  Visitor: Q,
  builderThroughAsyncIterable: $v,
  builderThroughIterable: vp,
  makeBuilder: bi,
  makeData: C,
  makeTable: Hv,
  makeVector: ko,
  tableFromArrays: Yv,
  tableFromIPC: Up,
  tableFromJSON: jv,
  tableToIPC: Vp,
  util: xw,
  vectorFromArray: Ol
}, Symbol.toStringTag, { value: "Module" }));
var Uw = Object.create, Pp = Object.defineProperty, Vw = Object.getOwnPropertyDescriptor, Pw = Object.getOwnPropertyNames, kw = Object.getPrototypeOf, jw = Object.prototype.hasOwnProperty, $w = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), zw = (e, t, n, i) => {
  if (t && typeof t == "object" || typeof t == "function") for (let s of Pw(t)) !jw.call(e, s) && s !== n && Pp(e, s, { get: () => t[s], enumerable: !(i = Vw(t, s)) || i.enumerable });
  return e;
}, Ww = (e, t, n) => (n = e != null ? Uw(kw(e)) : {}, zw(!e || !e.__esModule ? Pp(n, "default", { value: e, enumerable: !0 }) : n, e)), Hw = $w((e, t) => {
  t.exports = Worker;
}), kp = ((e) => (e[e.UNDEFINED = 0] = "UNDEFINED", e[e.AUTOMATIC = 1] = "AUTOMATIC", e[e.READ_ONLY = 2] = "READ_ONLY", e[e.READ_WRITE = 3] = "READ_WRITE", e))(kp || {}), jp = ((e) => (e[e.IDENTIFIER = 0] = "IDENTIFIER", e[e.NUMERIC_CONSTANT = 1] = "NUMERIC_CONSTANT", e[e.STRING_CONSTANT = 2] = "STRING_CONSTANT", e[e.OPERATOR = 3] = "OPERATOR", e[e.KEYWORD = 4] = "KEYWORD", e[e.COMMENT = 5] = "COMMENT", e))(jp || {}), $p = ((e) => (e[e.NONE = 0] = "NONE", e[e.DEBUG = 1] = "DEBUG", e[e.INFO = 2] = "INFO", e[e.WARNING = 3] = "WARNING", e[e.ERROR = 4] = "ERROR", e))($p || {}), zp = ((e) => (e[e.NONE = 0] = "NONE", e[e.CONNECT = 1] = "CONNECT", e[e.DISCONNECT = 2] = "DISCONNECT", e[e.OPEN = 3] = "OPEN", e[e.QUERY = 4] = "QUERY", e[e.INSTANTIATE = 5] = "INSTANTIATE", e))(zp || {}), Wp = ((e) => (e[e.NONE = 0] = "NONE", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR", e[e.START = 3] = "START", e[e.RUN = 4] = "RUN", e[e.CAPTURE = 5] = "CAPTURE", e))(Wp || {}), Hp = ((e) => (e[e.NONE = 0] = "NONE", e[e.WEB_WORKER = 1] = "WEB_WORKER", e[e.NODE_WORKER = 2] = "NODE_WORKER", e[e.BINDINGS = 3] = "BINDINGS", e[e.ASYNC_DUCKDB = 4] = "ASYNC_DUCKDB", e))(Hp || {}), Yw = class {
  log(e) {
  }
}, Kw = class {
  constructor(e = 2) {
    this.level = e;
  }
  log(e) {
    e.level >= this.level && console.log(e);
  }
};
function Gw(e) {
  switch (e) {
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
function qw(e) {
  switch (e) {
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
function Jw(e) {
  switch (e) {
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
function Qw(e) {
  switch (e) {
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
var Yp = ((e) => (e[e.SUCCESS = 0] = "SUCCESS", e))(Yp || {}), Kp = class {
  constructor(e, t) {
    this._bindings = e, this._conn = t;
  }
  get bindings() {
    return this._bindings;
  }
  async close() {
    return this._bindings.disconnect(this._conn);
  }
  useUnsafe(e) {
    return e(this._bindings, this._conn);
  }
  async query(e) {
    this._bindings.logger.log({ timestamp: /* @__PURE__ */ new Date(), level: 2, origin: 4, topic: 4, event: 4, value: e });
    let t = await this._bindings.runQuery(this._conn, e), n = $t.from(t);
    return console.assert(n.isSync(), "Reader is not sync"), console.assert(n.isFile(), "Reader is not file"), new Nt(n);
  }
  async send(e) {
    this._bindings.logger.log({ timestamp: /* @__PURE__ */ new Date(), level: 2, origin: 4, topic: 4, event: 4, value: e });
    let t = await this._bindings.startPendingQuery(this._conn, e);
    for (; t == null; ) t = await this._bindings.pollPendingQuery(this._conn);
    let n = new Ul(this._bindings, this._conn, t), i = await $t.from(n);
    return console.assert(i.isAsync()), console.assert(i.isStream()), i;
  }
  async cancelSent() {
    return await this._bindings.cancelPendingQuery(this._conn);
  }
  async getTableNames(e) {
    return await this._bindings.getTableNames(this._conn, e);
  }
  async prepare(e) {
    let t = await this._bindings.createPrepared(this._conn, e);
    return new Gp(this._bindings, this._conn, t);
  }
  async insertArrowTable(e, t) {
    let n = Vp(e, "stream");
    await this.insertArrowFromIPCStream(n, t);
  }
  async insertArrowFromIPCStream(e, t) {
    await this._bindings.insertArrowFromIPCStream(this._conn, e, t);
  }
  async insertCSVFromPath(e, t) {
    await this._bindings.insertCSVFromPath(this._conn, e, t);
  }
  async insertJSONFromPath(e, t) {
    await this._bindings.insertJSONFromPath(this._conn, e, t);
  }
}, Ul = class {
  constructor(e, t, n) {
    this.db = e, this.conn = t, this.header = n, this._first = !0, this._depleted = !1, this._inFlight = null;
  }
  async next() {
    if (this._first) return this._first = !1, { done: !1, value: this.header };
    if (this._depleted) return { done: !0, value: null };
    let e;
    return this._inFlight != null ? (e = await this._inFlight, this._inFlight = null) : e = await this.db.fetchQueryResults(this.conn), this._depleted = e.length == 0, this._depleted || (this._inFlight = this.db.fetchQueryResults(this.conn)), { done: this._depleted, value: e };
  }
  [Symbol.asyncIterator]() {
    return this;
  }
}, Gp = class {
  constructor(e, t, n) {
    this.bindings = e, this.connectionId = t, this.statementId = n;
  }
  async close() {
    await this.bindings.closePrepared(this.connectionId, this.statementId);
  }
  async query(...e) {
    let t = await this.bindings.runPrepared(this.connectionId, this.statementId, e), n = $t.from(t);
    return console.assert(n.isSync()), console.assert(n.isFile()), new Nt(n);
  }
  async send(...e) {
    let t = await this.bindings.sendPrepared(this.connectionId, this.statementId, e), n = new Ul(this.bindings, this.connectionId, t), i = await $t.from(n);
    return console.assert(i.isAsync()), console.assert(i.isStream()), i;
  }
}, qp = ((e) => (e.CANCEL_PENDING_QUERY = "CANCEL_PENDING_QUERY", e.CLOSE_PREPARED = "CLOSE_PREPARED", e.COLLECT_FILE_STATISTICS = "COLLECT_FILE_STATISTICS", e.CONNECT = "CONNECT", e.COPY_FILE_TO_BUFFER = "COPY_FILE_TO_BUFFER", e.COPY_FILE_TO_PATH = "COPY_FILE_TO_PATH", e.CREATE_PREPARED = "CREATE_PREPARED", e.DISCONNECT = "DISCONNECT", e.DROP_FILE = "DROP_FILE", e.DROP_FILES = "DROP_FILES", e.EXPORT_FILE_STATISTICS = "EXPORT_FILE_STATISTICS", e.FETCH_QUERY_RESULTS = "FETCH_QUERY_RESULTS", e.FLUSH_FILES = "FLUSH_FILES", e.GET_FEATURE_FLAGS = "GET_FEATURE_FLAGS", e.GET_TABLE_NAMES = "GET_TABLE_NAMES", e.GET_VERSION = "GET_VERSION", e.GLOB_FILE_INFOS = "GLOB_FILE_INFOS", e.INSERT_ARROW_FROM_IPC_STREAM = "INSERT_ARROW_FROM_IPC_STREAM", e.INSERT_CSV_FROM_PATH = "IMPORT_CSV_FROM_PATH", e.INSERT_JSON_FROM_PATH = "IMPORT_JSON_FROM_PATH", e.INSTANTIATE = "INSTANTIATE", e.OPEN = "OPEN", e.PING = "PING", e.POLL_PENDING_QUERY = "POLL_PENDING_QUERY", e.REGISTER_FILE_BUFFER = "REGISTER_FILE_BUFFER", e.REGISTER_FILE_HANDLE = "REGISTER_FILE_HANDLE", e.REGISTER_FILE_URL = "REGISTER_FILE_URL", e.RESET = "RESET", e.RUN_PREPARED = "RUN_PREPARED", e.RUN_QUERY = "RUN_QUERY", e.SEND_PREPARED = "SEND_PREPARED", e.START_PENDING_QUERY = "START_PENDING_QUERY", e.TOKENIZE = "TOKENIZE", e))(qp || {}), Jp = ((e) => (e.CONNECTION_INFO = "CONNECTION_INFO", e.ERROR = "ERROR", e.FEATURE_FLAGS = "FEATURE_FLAGS", e.FILE_BUFFER = "FILE_BUFFER", e.FILE_INFOS = "FILE_INFOS", e.FILE_SIZE = "FILE_SIZE", e.FILE_STATISTICS = "FILE_STATISTICS", e.INSTANTIATE_PROGRESS = "INSTANTIATE_PROGRESS", e.LOG = "LOG", e.OK = "OK", e.PREPARED_STATEMENT_ID = "PREPARED_STATEMENT_ID", e.QUERY_PLAN = "QUERY_PLAN", e.QUERY_RESULT = "QUERY_RESULT", e.QUERY_RESULT_CHUNK = "QUERY_RESULT_CHUNK", e.QUERY_RESULT_HEADER = "QUERY_RESULT_HEADER", e.QUERY_RESULT_HEADER_OR_NULL = "QUERY_RESULT_HEADER_OR_NULL", e.REGISTERED_FILE = "REGISTERED_FILE", e.SCRIPT_TOKENS = "SCRIPT_TOKENS", e.SUCCESS = "SUCCESS", e.TABLE_NAMES = "TABLE_NAMES", e.VERSION_STRING = "VERSION_STRING", e))(Jp || {}), st = class {
  constructor(e, t) {
    this.promiseResolver = () => {
    }, this.promiseRejecter = () => {
    }, this.type = e, this.data = t, this.promise = new Promise((n, i) => {
      this.promiseResolver = n, this.promiseRejecter = i;
    });
  }
};
function Gr(e) {
  switch (e.typeId) {
    case h.Binary:
      return { sqlType: "binary" };
    case h.Bool:
      return { sqlType: "bool" };
    case h.Date:
      return { sqlType: "date" };
    case h.DateDay:
      return { sqlType: "date32[d]" };
    case h.DateMillisecond:
      return { sqlType: "date64[ms]" };
    case h.Decimal: {
      let t = e;
      return { sqlType: "decimal", precision: t.precision, scale: t.scale };
    }
    case h.Float:
      return { sqlType: "float" };
    case h.Float16:
      return { sqlType: "float16" };
    case h.Float32:
      return { sqlType: "float32" };
    case h.Float64:
      return { sqlType: "float64" };
    case h.Int:
      return { sqlType: "int32" };
    case h.Int16:
      return { sqlType: "int16" };
    case h.Int32:
      return { sqlType: "int32" };
    case h.Int64:
      return { sqlType: "int64" };
    case h.Uint16:
      return { sqlType: "uint16" };
    case h.Uint32:
      return { sqlType: "uint32" };
    case h.Uint64:
      return { sqlType: "uint64" };
    case h.Uint8:
      return { sqlType: "uint8" };
    case h.IntervalDayTime:
      return { sqlType: "interval[dt]" };
    case h.IntervalYearMonth:
      return { sqlType: "interval[m]" };
    case h.List:
      return { sqlType: "list", valueType: Gr(e.valueType) };
    case h.FixedSizeBinary:
      return { sqlType: "fixedsizebinary", byteWidth: e.byteWidth };
    case h.Null:
      return { sqlType: "null" };
    case h.Utf8:
      return { sqlType: "utf8" };
    case h.Struct:
      return { sqlType: "struct", fields: e.children.map((t) => Ga(t.name, t.type)) };
    case h.Map: {
      let t = e;
      return { sqlType: "map", keyType: Gr(t.keyType), valueType: Gr(t.valueType) };
    }
    case h.Time:
      return { sqlType: "time[s]" };
    case h.TimeMicrosecond:
      return { sqlType: "time[us]" };
    case h.TimeMillisecond:
      return { sqlType: "time[ms]" };
    case h.TimeNanosecond:
      return { sqlType: "time[ns]" };
    case h.TimeSecond:
      return { sqlType: "time[s]" };
    case h.Timestamp:
      return { sqlType: "timestamp", timezone: e.timezone || void 0 };
    case h.TimestampSecond:
      return { sqlType: "timestamp[s]", timezone: e.timezone || void 0 };
    case h.TimestampMicrosecond:
      return { sqlType: "timestamp[us]", timezone: e.timezone || void 0 };
    case h.TimestampNanosecond:
      return { sqlType: "timestamp[ns]", timezone: e.timezone || void 0 };
    case h.TimestampMillisecond:
      return { sqlType: "timestamp[ms]", timezone: e.timezone || void 0 };
  }
  throw new Error("unsupported arrow type: ".concat(e.toString()));
}
function Ga(e, t) {
  let n = Gr(t);
  return n.name = e, n;
}
var Zw = new TextEncoder(), Xw = class {
  constructor(e, t = null) {
    this._onInstantiationProgress = [], this._worker = null, this._workerShutdownPromise = null, this._workerShutdownResolver = () => {
    }, this._nextMessageId = 0, this._pendingRequests = /* @__PURE__ */ new Map(), this._logger = e, this._onMessageHandler = this.onMessage.bind(this), this._onErrorHandler = this.onError.bind(this), this._onCloseHandler = this.onClose.bind(this), t != null && this.attach(t);
  }
  get logger() {
    return this._logger;
  }
  attach(e) {
    this._worker = e, this._worker.addEventListener("message", this._onMessageHandler), this._worker.addEventListener("error", this._onErrorHandler), this._worker.addEventListener("close", this._onCloseHandler), this._workerShutdownPromise = new Promise((t, n) => {
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
  async postTask(e, t = []) {
    if (!this._worker) {
      console.error("cannot send a message since the worker is not set!");
      return;
    }
    let n = this._nextMessageId++;
    return this._pendingRequests.set(n, e), this._worker.postMessage({ messageId: n, type: e.type, data: e.data }, t), await e.promise;
  }
  onMessage(e) {
    var t;
    let n = e.data;
    switch (n.type) {
      case "LOG": {
        this._logger.log(n.data);
        return;
      }
      case "INSTANTIATE_PROGRESS": {
        for (let s of this._onInstantiationProgress) s(n.data);
        return;
      }
    }
    let i = this._pendingRequests.get(n.requestId);
    if (!i) {
      console.warn("unassociated response: [".concat(n.requestId, ", ").concat(n.type.toString(), "]"));
      return;
    }
    if (this._pendingRequests.delete(n.requestId), n.type == "ERROR") {
      let s = new Error(n.data.message);
      s.name = n.data.name, (t = Object.getOwnPropertyDescriptor(s, "stack")) != null && t.writable && (s.stack = n.data.stack), i.promiseRejecter(s);
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
        if (n.type == "OK") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "INSTANTIATE":
        if (this._onInstantiationProgress = [], n.type == "OK") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "GLOB_FILE_INFOS":
        if (n.type == "FILE_INFOS") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "GET_VERSION":
        if (n.type == "VERSION_STRING") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "GET_FEATURE_FLAGS":
        if (n.type == "FEATURE_FLAGS") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "GET_TABLE_NAMES":
        if (n.type == "TABLE_NAMES") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "TOKENIZE":
        if (n.type == "SCRIPT_TOKENS") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "COPY_FILE_TO_BUFFER":
        if (n.type == "FILE_BUFFER") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "EXPORT_FILE_STATISTICS":
        if (n.type == "FILE_STATISTICS") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "CONNECT":
        if (n.type == "CONNECTION_INFO") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "RUN_PREPARED":
      case "RUN_QUERY":
        if (n.type == "QUERY_RESULT") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "SEND_PREPARED":
        if (n.type == "QUERY_RESULT_HEADER") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "START_PENDING_QUERY":
        if (n.type == "QUERY_RESULT_HEADER_OR_NULL") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "POLL_PENDING_QUERY":
        if (n.type == "QUERY_RESULT_HEADER_OR_NULL") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "CANCEL_PENDING_QUERY":
        if (this._onInstantiationProgress = [], n.type == "SUCCESS") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "FETCH_QUERY_RESULTS":
        if (n.type == "QUERY_RESULT_CHUNK") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "CREATE_PREPARED":
        if (n.type == "PREPARED_STATEMENT_ID") {
          i.promiseResolver(n.data);
          return;
        }
        break;
    }
    i.promiseRejecter(new Error("unexpected response type: ".concat(n.type.toString())));
  }
  onError(e) {
    console.error(e), console.error("error in duckdb worker: ".concat(e.message)), this._pendingRequests.clear();
  }
  onClose() {
    if (this._workerShutdownResolver(null), this._pendingRequests.size != 0) {
      console.warn("worker terminated with ".concat(this._pendingRequests.size, " pending requests"));
      return;
    }
    this._pendingRequests.clear();
  }
  async reset() {
    let e = new st("RESET", null);
    return await this.postTask(e);
  }
  async ping() {
    let e = new st("PING", null);
    await this.postTask(e);
  }
  async dropFile(e) {
    let t = new st("DROP_FILE", e);
    return await this.postTask(t);
  }
  async dropFiles() {
    let e = new st("DROP_FILES", null);
    return await this.postTask(e);
  }
  async flushFiles() {
    let e = new st("FLUSH_FILES", null);
    return await this.postTask(e);
  }
  async instantiate(e, t = null, n = (i) => {
  }) {
    this._onInstantiationProgress.push(n);
    let i = new st("INSTANTIATE", [e, t]);
    return await this.postTask(i);
  }
  async getVersion() {
    let e = new st("GET_VERSION", null);
    return await this.postTask(e);
  }
  async getFeatureFlags() {
    let e = new st("GET_FEATURE_FLAGS", null);
    return await this.postTask(e);
  }
  async open(e) {
    let t = new st("OPEN", e);
    await this.postTask(t);
  }
  async tokenize(e) {
    let t = new st("TOKENIZE", e);
    return await this.postTask(t);
  }
  async connectInternal() {
    let e = new st("CONNECT", null);
    return await this.postTask(e);
  }
  async connect() {
    let e = await this.connectInternal();
    return new Kp(this, e);
  }
  async disconnect(e) {
    let t = new st("DISCONNECT", e);
    await this.postTask(t);
  }
  async runQuery(e, t) {
    let n = new st("RUN_QUERY", [e, t]);
    return await this.postTask(n);
  }
  async startPendingQuery(e, t) {
    let n = new st("START_PENDING_QUERY", [e, t]);
    return await this.postTask(n);
  }
  async pollPendingQuery(e) {
    let t = new st("POLL_PENDING_QUERY", e);
    return await this.postTask(t);
  }
  async cancelPendingQuery(e) {
    let t = new st("CANCEL_PENDING_QUERY", e);
    return await this.postTask(t);
  }
  async fetchQueryResults(e) {
    let t = new st("FETCH_QUERY_RESULTS", e);
    return await this.postTask(t);
  }
  async getTableNames(e, t) {
    let n = new st("GET_TABLE_NAMES", [e, t]);
    return await this.postTask(n);
  }
  async createPrepared(e, t) {
    let n = new st("CREATE_PREPARED", [e, t]);
    return await this.postTask(n);
  }
  async closePrepared(e, t) {
    let n = new st("CLOSE_PREPARED", [e, t]);
    await this.postTask(n);
  }
  async runPrepared(e, t, n) {
    let i = new st("RUN_PREPARED", [e, t, n]);
    return await this.postTask(i);
  }
  async sendPrepared(e, t, n) {
    let i = new st("SEND_PREPARED", [e, t, n]);
    return await this.postTask(i);
  }
  async globFiles(e) {
    let t = new st("GLOB_FILE_INFOS", e);
    return await this.postTask(t);
  }
  async registerFileText(e, t) {
    let n = Zw.encode(t);
    await this.registerFileBuffer(e, n);
  }
  async registerFileURL(e, t, n, i) {
    t === void 0 && (t = e);
    let s = new st("REGISTER_FILE_URL", [e, t, n, i]);
    await this.postTask(s);
  }
  async registerEmptyFileBuffer(e) {
  }
  async registerFileBuffer(e, t) {
    let n = new st("REGISTER_FILE_BUFFER", [e, t]);
    await this.postTask(n, [t.buffer]);
  }
  async registerFileHandle(e, t, n, i) {
    let s = new st("REGISTER_FILE_HANDLE", [e, t, n, i]);
    await this.postTask(s, []);
  }
  async collectFileStatistics(e, t) {
    let n = new st("COLLECT_FILE_STATISTICS", [e, t]);
    await this.postTask(n, []);
  }
  async exportFileStatistics(e) {
    let t = new st("EXPORT_FILE_STATISTICS", e);
    return await this.postTask(t, []);
  }
  async copyFileToBuffer(e) {
    let t = new st("COPY_FILE_TO_BUFFER", e);
    return await this.postTask(t);
  }
  async copyFileToPath(e, t) {
    let n = new st("COPY_FILE_TO_PATH", [e, t]);
    await this.postTask(n);
  }
  async insertArrowFromIPCStream(e, t, n) {
    if (t.length == 0) return;
    let i = new st("INSERT_ARROW_FROM_IPC_STREAM", [e, t, n]);
    await this.postTask(i, [t.buffer]);
  }
  async insertCSVFromPath(e, t, n) {
    if (n.columns !== void 0) {
      let s = [];
      for (let r in n.columns) {
        let o = n.columns[r];
        s.push(Ga(r, o));
      }
      n.columnsFlat = s, delete n.columns;
    }
    let i = new st("IMPORT_CSV_FROM_PATH", [e, t, n]);
    await this.postTask(i);
  }
  async insertJSONFromPath(e, t, n) {
    if (n.columns !== void 0) {
      let s = [];
      for (let r in n.columns) {
        let o = n.columns[r];
        s.push(Ga(r, o));
      }
      n.columnsFlat = s, delete n.columns;
    }
    let i = new st("IMPORT_JSON_FROM_PATH", [e, t, n]);
    await this.postTask(i);
  }
}, t0 = class {
  constructor() {
    this._bindings = null, this._nextMessageId = 0;
  }
  log(e) {
    this.postMessage({ messageId: this._nextMessageId++, requestId: 0, type: "LOG", data: e }, []);
  }
  sendOK(e) {
    this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "OK", data: null }, []);
  }
  failWith(e, t) {
    let n = { name: t.name, message: t.message, stack: t.stack || void 0 };
    this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "ERROR", data: n }, []);
  }
  async onMessage(e) {
    switch (e.type) {
      case "PING":
        this.sendOK(e);
        return;
      case "INSTANTIATE":
        this._bindings != null && this.failWith(e, new Error("duckdb already initialized"));
        try {
          this._bindings = await this.instantiate(e.data[0], e.data[1], (t) => {
            this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "INSTANTIATE_PROGRESS", data: t }, []);
          }), this.sendOK(e);
        } catch (t) {
          console.log(t), this._bindings = null, this.failWith(e, t);
        }
        return;
    }
    if (!this._bindings) return this.failWith(e, new Error("duckdb is not initialized"));
    try {
      switch (e.type) {
        case "GET_VERSION":
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "VERSION_STRING", data: this._bindings.getVersion() }, []);
          break;
        case "GET_FEATURE_FLAGS":
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "FEATURE_FLAGS", data: this._bindings.getFeatureFlags() }, []);
          break;
        case "RESET":
          this._bindings.reset(), this.sendOK(e);
          break;
        case "OPEN":
          this._bindings.open(e.data), this.sendOK(e);
          break;
        case "DROP_FILE":
          this._bindings.dropFile(e.data), this.sendOK(e);
          break;
        case "DROP_FILES":
          this._bindings.dropFiles(), this.sendOK(e);
          break;
        case "FLUSH_FILES":
          this._bindings.flushFiles(), this.sendOK(e);
          break;
        case "CONNECT": {
          let t = this._bindings.connect();
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "CONNECTION_INFO", data: t.useUnsafe((n, i) => i) }, []);
          break;
        }
        case "DISCONNECT":
          this._bindings.disconnect(e.data), this.sendOK(e);
          break;
        case "CREATE_PREPARED": {
          let t = this._bindings.createPrepared(e.data[0], e.data[1]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "PREPARED_STATEMENT_ID", data: t }, []);
          break;
        }
        case "CLOSE_PREPARED": {
          this._bindings.closePrepared(e.data[0], e.data[1]), this.sendOK(e);
          break;
        }
        case "RUN_PREPARED": {
          let t = this._bindings.runPrepared(e.data[0], e.data[1], e.data[2]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "QUERY_RESULT", data: t }, [t.buffer]);
          break;
        }
        case "RUN_QUERY": {
          let t = this._bindings.runQuery(e.data[0], e.data[1]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "QUERY_RESULT", data: t }, [t.buffer]);
          break;
        }
        case "SEND_PREPARED": {
          let t = this._bindings.sendPrepared(e.data[0], e.data[1], e.data[2]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "QUERY_RESULT_HEADER", data: t }, [t.buffer]);
          break;
        }
        case "START_PENDING_QUERY": {
          let t = this._bindings.startPendingQuery(e.data[0], e.data[1]), n = [];
          t && n.push(t.buffer), this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "QUERY_RESULT_HEADER_OR_NULL", data: t }, n);
          break;
        }
        case "POLL_PENDING_QUERY": {
          let t = this._bindings.pollPendingQuery(e.data), n = [];
          t && n.push(t.buffer), this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "QUERY_RESULT_HEADER_OR_NULL", data: t }, n);
          break;
        }
        case "CANCEL_PENDING_QUERY": {
          let t = this._bindings.cancelPendingQuery(e.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "SUCCESS", data: t }, []);
          break;
        }
        case "FETCH_QUERY_RESULTS": {
          let t = this._bindings.fetchQueryResults(e.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "QUERY_RESULT_CHUNK", data: t }, [t.buffer]);
          break;
        }
        case "GET_TABLE_NAMES": {
          let t = this._bindings.getTableNames(e.data[0], e.data[1]);
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "TABLE_NAMES", data: t }, []);
          break;
        }
        case "GLOB_FILE_INFOS": {
          let t = this._bindings.globFiles(e.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "FILE_INFOS", data: t }, []);
          break;
        }
        case "REGISTER_FILE_URL":
          this._bindings.registerFileURL(e.data[0], e.data[1], e.data[2], e.data[3]), this.sendOK(e);
          break;
        case "REGISTER_FILE_BUFFER":
          this._bindings.registerFileBuffer(e.data[0], e.data[1]), this.sendOK(e);
          break;
        case "REGISTER_FILE_HANDLE":
          this._bindings.registerFileHandle(e.data[0], e.data[1], e.data[2], e.data[3]), this.sendOK(e);
          break;
        case "COPY_FILE_TO_PATH":
          this._bindings.copyFileToPath(e.data[0], e.data[1]), this.sendOK(e);
          break;
        case "COPY_FILE_TO_BUFFER": {
          let t = this._bindings.copyFileToBuffer(e.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "FILE_BUFFER", data: t }, []);
          break;
        }
        case "COLLECT_FILE_STATISTICS":
          this._bindings.collectFileStatistics(e.data[0], e.data[1]), this.sendOK(e);
          break;
        case "EXPORT_FILE_STATISTICS": {
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "FILE_STATISTICS", data: this._bindings.exportFileStatistics(e.data) }, []);
          break;
        }
        case "INSERT_ARROW_FROM_IPC_STREAM": {
          this._bindings.insertArrowFromIPCStream(e.data[0], e.data[1], e.data[2]), this.sendOK(e);
          break;
        }
        case "IMPORT_CSV_FROM_PATH": {
          this._bindings.insertCSVFromPath(e.data[0], e.data[1], e.data[2]), this.sendOK(e);
          break;
        }
        case "IMPORT_JSON_FROM_PATH": {
          this._bindings.insertJSONFromPath(e.data[0], e.data[1], e.data[2]), this.sendOK(e);
          break;
        }
        case "TOKENIZE": {
          let t = this._bindings.tokenize(e.data);
          this.postMessage({ messageId: this._nextMessageId++, requestId: e.messageId, type: "SCRIPT_TOKENS", data: t }, []);
          break;
        }
      }
    } catch (t) {
      return console.log(t), this.failWith(e, t);
    }
  }
}, e0 = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])), n0 = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11])), i0 = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), s0 = () => (async (e) => {
  try {
    return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e);
  } catch {
    return !1;
  }
})(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11])), Vl = { name: "@duckdb/duckdb-wasm", version: "1.29.0" }, Qp = Vl.name, Zp = Vl.version, Pl = Vl.version.split("."), r0 = Pl[0], o0 = Pl[1], a0 = Pl[2], kl = () => typeof navigator > "u", Xp = () => kl() ? "node" : navigator.userAgent, c0 = () => Xp().includes("Firefox"), l0 = () => /^((?!chrome|android).)*safari/i.test(Xp());
function u0() {
  let e = "https://cdn.jsdelivr.net/npm/".concat(Qp, "@").concat(Zp, "/dist/");
  return { mvp: { mainModule: "".concat(e, "duckdb-mvp.wasm"), mainWorker: "".concat(e, "duckdb-browser-mvp.worker.js") }, eh: { mainModule: "".concat(e, "duckdb-eh.wasm"), mainWorker: "".concat(e, "duckdb-browser-eh.worker.js") } };
}
var ya = null, ga = null, _a = null, ma = null, ba = null;
async function ty() {
  return ya == null && (ya = typeof BigInt64Array < "u"), ga == null && (ga = await n0()), _a == null && (_a = await s0()), ma == null && (ma = await i0()), ba == null && (ba = await e0()), { bigInt64Array: ya, crossOriginIsolated: kl() || globalThis.crossOriginIsolated || !1, wasmExceptions: ga, wasmSIMD: ma, wasmThreads: _a, wasmBulkMemory: ba };
}
async function d0(e) {
  let t = await ty();
  if (t.wasmExceptions) {
    if (t.wasmSIMD && t.wasmThreads && t.crossOriginIsolated && e.coi) return { mainModule: e.coi.mainModule, mainWorker: e.coi.mainWorker, pthreadWorker: e.coi.pthreadWorker };
    if (e.eh) return { mainModule: e.eh.mainModule, mainWorker: e.eh.mainWorker, pthreadWorker: null };
  }
  return { mainModule: e.mvp.mainModule, mainWorker: e.mvp.mainWorker, pthreadWorker: null };
}
var f0 = Ww(Hw());
async function h0(e) {
  let t = new Request(e), n = await fetch(t), i = URL.createObjectURL(await n.blob());
  return new f0.default(i);
}
function p0() {
  let e = new TextDecoder();
  return (t) => (typeof SharedArrayBuffer < "u" && t.buffer instanceof SharedArrayBuffer && (t = new Uint8Array(t)), e.decode(t));
}
p0();
var ey = ((e) => (e[e.BUFFER = 0] = "BUFFER", e[e.NODE_FS = 1] = "NODE_FS", e[e.BROWSER_FILEREADER = 2] = "BROWSER_FILEREADER", e[e.BROWSER_FSACCESS = 3] = "BROWSER_FSACCESS", e[e.HTTP = 4] = "HTTP", e[e.S3 = 5] = "S3", e))(ey || {});
const y0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AsyncDuckDB: Xw,
  AsyncDuckDBConnection: Kp,
  AsyncDuckDBDispatcher: t0,
  AsyncPreparedStatement: Gp,
  AsyncResultStreamIterator: Ul,
  ConsoleLogger: Kw,
  DuckDBAccessMode: kp,
  DuckDBDataProtocol: ey,
  LogEvent: Wp,
  LogLevel: $p,
  LogOrigin: Hp,
  LogTopic: zp,
  PACKAGE_NAME: Qp,
  PACKAGE_VERSION: Zp,
  PACKAGE_VERSION_MAJOR: r0,
  PACKAGE_VERSION_MINOR: o0,
  PACKAGE_VERSION_PATCH: a0,
  StatusCode: Yp,
  TokenType: jp,
  VoidLogger: Yw,
  WorkerRequestType: qp,
  WorkerResponseType: Jp,
  WorkerTask: st,
  createWorker: h0,
  getJsDelivrBundles: u0,
  getLogEventLabel: qw,
  getLogLevelLabel: Gw,
  getLogOriginLabel: Qw,
  getLogTopicLabel: Jw,
  getPlatformFeatures: ty,
  isFirefox: c0,
  isNode: kl,
  isSafari: l0,
  selectBundle: d0
}, Symbol.toStringTag, { value: "Module" })), g0 = { class: "result-app" }, _0 = {
  key: 0,
  class: "alert alert-danger mt-3",
  role: "alert"
}, m0 = {
  key: 1,
  class: "mt-3 d-flex align-items-center gap-2 text-muted"
}, b0 = {
  key: 2,
  class: "table-responsive mt-4"
}, v0 = { class: "table table-striped table-sm align-middle" }, w0 = /* @__PURE__ */ mg({
  __name: "ResultApp",
  props: {
    state: {}
  },
  setup(e) {
    const n = e.state;
    return (i, s) => (Se(), ze("div", g0, [
      xn(n).error ? (Se(), ze("div", _0, Tr(xn(n).error), 1)) : xn(n).isLoading ? (Se(), ze("div", m0, [...s[0] || (s[0] = [
        Pn("span", {
          class: "spinner-border spinner-border-sm",
          role: "status",
          "aria-hidden": "true"
        }, null, -1),
        Pn("span", null, "Running query...", -1)
      ])])) : xn(n).rows.length > 0 && xn(n).columns.length > 0 ? (Se(), ze("div", b0, [
        Pn("table", v0, [
          Pn("thead", null, [
            Pn("tr", null, [
              (Se(!0), ze(de, null, na(xn(n).columns, (r) => (Se(), ze("th", {
                key: r,
                scope: "col"
              }, Tr(r), 1))), 128))
            ])
          ]),
          Pn("tbody", null, [
            (Se(!0), ze(de, null, na(xn(n).rows, (r, o) => (Se(), ze("tr", { key: o }, [
              (Se(!0), ze(de, null, na(r, (a, c) => (Se(), ze("td", {
                key: c,
                class: "text-nowrap"
              }, Tr(a), 1))), 128))
            ]))), 128))
          ])
        ])
      ])) : E_("", !0)
    ]));
  }
}), I0 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, S0 = /* @__PURE__ */ I0(w0, [["__scopeId", "data-v-e447421a"]]), {
  AsyncDuckDB: U0,
  AsyncDuckDBConnection: V0,
  AsyncDuckDBPreparedStatement: P0,
  AsyncDuckDBTable: k0,
  ConsoleLogger: j0,
  FilesystemTable: $0,
  duckdbBundle: z0,
  duckdbBundles: W0,
  selectBundle: H0
} = y0, Cs = {
  duckDbPromise: null,
  httpFsInitialized: !1
}, va = /* @__PURE__ */ new WeakMap();
async function E0(e) {
  return Cs.duckDbPromise || (Cs.duckDbPromise = (async () => {
    if (!e)
      throw new Error("DuckDB configuration is required.");
    const n = await import(`${e.bundleBasePath}/${e.moduleLoader}`), i = `${e.bundleBasePath}/${e.mainWorker}`, s = new Worker(i, { type: "module" }), r = new n.ConsoleLogger(), o = new n.AsyncDuckDB(r, s), a = `${e.bundleBasePath}/${e.mainModule}`, c = e.pthreadWorker ? `${e.bundleBasePath}/${e.pthreadWorker}` : null;
    return await o.instantiate(a, c ?? void 0), { loader: n, db: o, worker: s };
  })()), Cs.duckDbPromise;
}
async function O0(e) {
  if (!Cs.httpFsInitialized) {
    try {
      await e.query("INSTALL 'httpfs';");
    } catch (t) {
      if (!(typeof (t == null ? void 0 : t.message) == "string" ? t.message : String(t ?? "")).includes("already installed"))
        throw t;
    }
    await e.query("LOAD 'httpfs';"), Cs.httpFsInitialized = !0;
  }
}
function N0(e) {
  return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
}
function D0(e) {
  var n;
  if (!e || e.startsWith("http://") || e.startsWith("https://"))
    return e;
  const t = typeof window == "object" && window.location ? window.location.origin : ((n = globalThis.location) == null ? void 0 : n.origin) ?? "";
  return new URL(e, t).toString();
}
function T0(e) {
  return Array.isArray(e) ? e.map((t) => (Array.isArray(t == null ? void 0 : t.values) ? t.values : []).map((i) => String(i ?? ""))) : [];
}
function A0(e) {
  if (!e)
    throw new Error("A host element is required to mount the result application.");
  return e;
}
function Y0(e, t) {
  if (!t || typeof t.bundleBasePath != "string")
    throw new Error("DuckDB configuration is required.");
  const n = A0(e), i = va.get(n);
  if (i)
    return i.handle;
  const s = {
    bundleBasePath: t.bundleBasePath,
    mainModule: t.mainModule,
    mainWorker: t.mainWorker,
    moduleLoader: t.moduleLoader,
    pthreadWorker: t.pthreadWorker ?? null
  };
  n.innerHTML = "";
  const r = No({
    columns: [],
    rows: [],
    error: "",
    isLoading: !1
  }), o = cm(S0, { state: r });
  o.mount(n);
  const a = {
    async runQuery(c, l) {
      const u = typeof c == "string" ? c.trim() : "", d = typeof l == "string" ? l.trim() : "";
      if (!u) {
        r.error = "Select a parquet file to query.", r.columns = [], r.rows = [], r.isLoading = !1;
        return;
      }
      if (!d) {
        r.error = "Enter a SQL statement.", r.columns = [], r.rows = [], r.isLoading = !1;
        return;
      }
      r.error = "", r.columns = [], r.rows = [], r.isLoading = !0;
      try {
        const y = await B0(s, u, d);
        r.columns = Array.isArray(y.columns) ? [...y.columns] : [], r.rows = T0(y.rows);
      } catch (y) {
        r.error = y instanceof Error ? y.message : String(y ?? "");
      } finally {
        r.isLoading = !1;
      }
    },
    reset() {
      r.error = "", r.columns = [], r.rows = [], r.isLoading = !1;
    },
    unmount() {
      o.unmount(), n.innerHTML = "", va.delete(n);
    }
  };
  return va.set(n, { app: o, handle: a }), a;
}
async function B0(e, t, n) {
  var r;
  if (!e)
    throw new Error("DuckDB configuration is required.");
  if (!t)
    throw new Error("A parquet URL must be provided.");
  const { db: i } = await E0(e), s = await i.connect();
  try {
    await O0(s);
    const o = D0(t), a = JSON.stringify(o);
    try {
      await s.query(`CREATE OR REPLACE TEMP VIEW parquet_source AS SELECT * FROM read_parquet(${a});`);
      const c = await s.query(n), l = Array.isArray((r = c == null ? void 0 : c.schema) == null ? void 0 : r.fields) ? c.schema.fields.map((d) => d.name ?? "").filter((d) => !!d) : [], u = c.toArray().map((d) => l.map((y) => N0(d[y])));
      return typeof c.close == "function" ? c.close() : typeof c.release == "function" && c.release(), {
        columns: l,
        rows: u.map((d) => ({ values: d }))
      };
    } finally {
      await s.query("DROP VIEW IF EXISTS parquet_source;");
    }
  } finally {
    await s.close();
  }
}
export {
  U0 as AsyncDuckDB,
  V0 as AsyncDuckDBConnection,
  t0 as AsyncDuckDBDispatcher,
  P0 as AsyncDuckDBPreparedStatement,
  k0 as AsyncDuckDBTable,
  Gp as AsyncPreparedStatement,
  Ul as AsyncResultStreamIterator,
  j0 as ConsoleLogger,
  kp as DuckDBAccessMode,
  ey as DuckDBDataProtocol,
  $0 as FilesystemTable,
  Wp as LogEvent,
  $p as LogLevel,
  Hp as LogOrigin,
  zp as LogTopic,
  Qp as PACKAGE_NAME,
  Zp as PACKAGE_VERSION,
  r0 as PACKAGE_VERSION_MAJOR,
  o0 as PACKAGE_VERSION_MINOR,
  a0 as PACKAGE_VERSION_PATCH,
  Yp as StatusCode,
  jp as TokenType,
  Yw as VoidLogger,
  qp as WorkerRequestType,
  Jp as WorkerResponseType,
  st as WorkerTask,
  x0 as arrow,
  Y0 as createResultApp,
  h0 as createWorker,
  z0 as duckdbBundle,
  W0 as duckdbBundles,
  B0 as executeQuery,
  u0 as getJsDelivrBundles,
  qw as getLogEventLabel,
  Gw as getLogLevelLabel,
  Qw as getLogOriginLabel,
  Jw as getLogTopicLabel,
  ty as getPlatformFeatures,
  c0 as isFirefox,
  kl as isNode,
  l0 as isSafari,
  E0 as loadDuckDb,
  H0 as selectBundle
};
//# sourceMappingURL=duckdb-browser-bundle.js.map
