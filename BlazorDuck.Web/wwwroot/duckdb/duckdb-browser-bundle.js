var ag = {};
/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Cn(i) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const e of i.split(",")) t[e] = 1;
  return (e) => e in t;
}
const xt = ag.NODE_ENV !== "production" ? Object.freeze({}) : {}, Wr = ag.NODE_ENV !== "production" ? Object.freeze([]) : [], he = () => {
}, cg = () => !1, Ma = (i) => i.charCodeAt(0) === 111 && i.charCodeAt(1) === 110 && // uppercase letter
(i.charCodeAt(2) > 122 || i.charCodeAt(2) < 97), Kc = (i) => i.startsWith("onUpdate:"), oe = Object.assign, Xd = (i, t) => {
  const e = i.indexOf(t);
  e > -1 && i.splice(e, 1);
}, ww = Object.prototype.hasOwnProperty, St = (i, t) => ww.call(i, t), X = Array.isArray, Hs = (i) => ql(i) === "[object Map]", lg = (i) => ql(i) === "[object Set]", rt = (i) => typeof i == "function", Jt = (i) => typeof i == "string", Os = (i) => typeof i == "symbol", Ct = (i) => i !== null && typeof i == "object", th = (i) => (Ct(i) || rt(i)) && rt(i.then) && rt(i.catch), ug = Object.prototype.toString, ql = (i) => ug.call(i), eh = (i) => ql(i).slice(8, -1), dg = (i) => ql(i) === "[object Object]", ih = (i) => Jt(i) && i !== "NaN" && i[0] !== "-" && "" + parseInt(i, 10) === i, ta = /* @__PURE__ */ Cn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Iw = /* @__PURE__ */ Cn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Jl = (i) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((e) => t[e] || (t[e] = i(e)));
}, Sw = /-\w/g, wi = Jl(
  (i) => i.replace(Sw, (t) => t.slice(1).toUpperCase())
), Ow = /\B([A-Z])/g, ls = Jl(
  (i) => i.replace(Ow, "-$1").toLowerCase()
), Ql = Jl((i) => i.charAt(0).toUpperCase() + i.slice(1)), Fs = Jl(
  (i) => i ? `on${Ql(i)}` : ""
), Ys = (i, t) => !Object.is(i, t), Eo = (i, ...t) => {
  for (let e = 0; e < i.length; e++)
    i[e](...t);
}, Gc = (i, t, e, n = !1) => {
  Object.defineProperty(i, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: e
  });
}, Dw = (i) => {
  const t = parseFloat(i);
  return isNaN(t) ? i : t;
};
let vp;
const Ra = () => vp || (vp = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function nh(i) {
  if (X(i)) {
    const t = {};
    for (let e = 0; e < i.length; e++) {
      const n = i[e], s = Jt(n) ? Aw(n) : nh(n);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (Jt(i) || Ct(i))
    return i;
}
const Bw = /;(?![^(]*\))/g, Nw = /:([^]+)/, Ew = /\/\*[^]*?\*\//g;
function Aw(i) {
  const t = {};
  return i.replace(Ew, "").split(Bw).forEach((e) => {
    if (e) {
      const n = e.split(Nw);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function sh(i) {
  let t = "";
  if (Jt(i))
    t = i;
  else if (X(i))
    for (let e = 0; e < i.length; e++) {
      const n = sh(i[e]);
      n && (t += n + " ");
    }
  else if (Ct(i))
    for (const e in i)
      i[e] && (t += e + " ");
  return t.trim();
}
const Tw = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Fw = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Mw = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Rw = /* @__PURE__ */ Cn(Tw), Lw = /* @__PURE__ */ Cn(Fw), Uw = /* @__PURE__ */ Cn(Mw), xw = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Cw = /* @__PURE__ */ Cn(xw);
function hg(i) {
  return !!i || i === "";
}
const fg = (i) => !!(i && i.__v_isRef === !0), pc = (i) => Jt(i) ? i : i == null ? "" : X(i) || Ct(i) && (i.toString === ug || !rt(i.toString)) ? fg(i) ? pc(i.value) : JSON.stringify(i, pg, 2) : String(i), pg = (i, t) => fg(t) ? pg(i, t.value) : Hs(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (e, [n, s], r) => (e[Tu(n, r) + " =>"] = s, e),
    {}
  )
} : lg(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((e) => Tu(e))
} : Os(t) ? Tu(t) : Ct(t) && !X(t) && !dg(t) ? String(t) : t, Tu = (i, t = "") => {
  var e;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Os(i) ? `Symbol(${(e = i.description) != null ? e : t})` : i
  );
};
var jt = {};
function Di(i, ...t) {
  console.warn(`[Vue warn] ${i}`, ...t);
}
let $e;
class $w {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = $e, !t && $e && (this.index = ($e.scopes || ($e.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, e;
      if (this.scopes)
        for (t = 0, e = this.scopes.length; t < e; t++)
          this.scopes[t].pause();
      for (t = 0, e = this.effects.length; t < e; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, e;
      if (this.scopes)
        for (t = 0, e = this.scopes.length; t < e; t++)
          this.scopes[t].resume();
      for (t = 0, e = this.effects.length; t < e; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const e = $e;
      try {
        return $e = this, t();
      } finally {
        $e = e;
      }
    } else jt.NODE_ENV !== "production" && Di("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = $e, $e = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && ($e = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let e, n;
      for (e = 0, n = this.effects.length; e < n; e++)
        this.effects[e].stop();
      for (this.effects.length = 0, e = 0, n = this.cleanups.length; e < n; e++)
        this.cleanups[e]();
      if (this.cleanups.length = 0, this.scopes) {
        for (e = 0, n = this.scopes.length; e < n; e++)
          this.scopes[e].stop(!0);
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
function Vw() {
  return $e;
}
let Ft;
const Fu = /* @__PURE__ */ new WeakSet();
class yg {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, $e && $e.active && $e.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Fu.has(this) && (Fu.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || mg(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, wp(this), _g(this);
    const t = Ft, e = Ii;
    Ft = this, Ii = !0;
    try {
      return this.fn();
    } finally {
      jt.NODE_ENV !== "production" && Ft !== this && Di(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), bg(this), Ft = t, Ii = e, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ah(t);
      this.deps = this.depsTail = void 0, wp(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Fu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ad(this) && this.run();
  }
  get dirty() {
    return ad(this);
  }
}
let gg = 0, ea, ia;
function mg(i, t = !1) {
  if (i.flags |= 8, t) {
    i.next = ia, ia = i;
    return;
  }
  i.next = ea, ea = i;
}
function rh() {
  gg++;
}
function oh() {
  if (--gg > 0)
    return;
  if (ia) {
    let t = ia;
    for (ia = void 0; t; ) {
      const e = t.next;
      t.next = void 0, t.flags &= -9, t = e;
    }
  }
  let i;
  for (; ea; ) {
    let t = ea;
    for (ea = void 0; t; ) {
      const e = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          i || (i = n);
        }
      t = e;
    }
  }
  if (i) throw i;
}
function _g(i) {
  for (let t = i.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function bg(i) {
  let t, e = i.depsTail, n = e;
  for (; n; ) {
    const s = n.prevDep;
    n.version === -1 ? (n === e && (e = s), ah(n), Pw(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = s;
  }
  i.deps = t, i.depsTail = e;
}
function ad(i) {
  for (let t = i.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (vg(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!i._dirty;
}
function vg(i) {
  if (i.flags & 4 && !(i.flags & 16) || (i.flags &= -17, i.globalVersion === la) || (i.globalVersion = la, !i.isSSR && i.flags & 128 && (!i.deps && !i._dirty || !ad(i))))
    return;
  i.flags |= 2;
  const t = i.dep, e = Ft, n = Ii;
  Ft = i, Ii = !0;
  try {
    _g(i);
    const s = i.fn(i._value);
    (t.version === 0 || Ys(s, i._value)) && (i.flags |= 128, i._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Ft = e, Ii = n, bg(i), i.flags &= -3;
  }
}
function ah(i, t = !1) {
  const { dep: e, prevSub: n, nextSub: s } = i;
  if (n && (n.nextSub = s, i.prevSub = void 0), s && (s.prevSub = n, i.nextSub = void 0), jt.NODE_ENV !== "production" && e.subsHead === i && (e.subsHead = s), e.subs === i && (e.subs = n, !n && e.computed)) {
    e.computed.flags &= -5;
    for (let r = e.computed.deps; r; r = r.nextDep)
      ah(r, !0);
  }
  !t && !--e.sc && e.map && e.map.delete(e.key);
}
function Pw(i) {
  const { prevDep: t, nextDep: e } = i;
  t && (t.nextDep = e, i.prevDep = void 0), e && (e.prevDep = t, i.nextDep = void 0);
}
let Ii = !0;
const wg = [];
function Bi() {
  wg.push(Ii), Ii = !1;
}
function Ni() {
  const i = wg.pop();
  Ii = i === void 0 ? !0 : i;
}
function wp(i) {
  const { cleanup: t } = i;
  if (i.cleanup = void 0, t) {
    const e = Ft;
    Ft = void 0;
    try {
      t();
    } finally {
      Ft = e;
    }
  }
}
let la = 0;
class kw {
  constructor(t, e) {
    this.sub = t, this.dep = e, this.version = e.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ig {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, jt.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Ft || !Ii || Ft === this.computed)
      return;
    let e = this.activeLink;
    if (e === void 0 || e.sub !== Ft)
      e = this.activeLink = new kw(Ft, this), Ft.deps ? (e.prevDep = Ft.depsTail, Ft.depsTail.nextDep = e, Ft.depsTail = e) : Ft.deps = Ft.depsTail = e, Sg(e);
    else if (e.version === -1 && (e.version = this.version, e.nextDep)) {
      const n = e.nextDep;
      n.prevDep = e.prevDep, e.prevDep && (e.prevDep.nextDep = n), e.prevDep = Ft.depsTail, e.nextDep = void 0, Ft.depsTail.nextDep = e, Ft.depsTail = e, Ft.deps === e && (Ft.deps = n);
    }
    return jt.NODE_ENV !== "production" && Ft.onTrack && Ft.onTrack(
      oe(
        {
          effect: Ft
        },
        t
      )
    ), e;
  }
  trigger(t) {
    this.version++, la++, this.notify(t);
  }
  notify(t) {
    rh();
    try {
      if (jt.NODE_ENV !== "production")
        for (let e = this.subsHead; e; e = e.nextSub)
          e.sub.onTrigger && !(e.sub.flags & 8) && e.sub.onTrigger(
            oe(
              {
                effect: e.sub
              },
              t
            )
          );
      for (let e = this.subs; e; e = e.prevSub)
        e.sub.notify() && e.sub.dep.notify();
    } finally {
      oh();
    }
  }
}
function Sg(i) {
  if (i.dep.sc++, i.sub.flags & 4) {
    const t = i.dep.computed;
    if (t && !i.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Sg(n);
    }
    const e = i.dep.subs;
    e !== i && (i.prevSub = e, e && (e.nextSub = i)), jt.NODE_ENV !== "production" && i.dep.subsHead === void 0 && (i.dep.subsHead = i), i.dep.subs = i;
  }
}
const cd = /* @__PURE__ */ new WeakMap(), Ks = Symbol(
  jt.NODE_ENV !== "production" ? "Object iterate" : ""
), ld = Symbol(
  jt.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ua = Symbol(
  jt.NODE_ENV !== "production" ? "Array iterate" : ""
);
function le(i, t, e) {
  if (Ii && Ft) {
    let n = cd.get(i);
    n || cd.set(i, n = /* @__PURE__ */ new Map());
    let s = n.get(e);
    s || (n.set(e, s = new Ig()), s.map = n, s.key = e), jt.NODE_ENV !== "production" ? s.track({
      target: i,
      type: t,
      key: e
    }) : s.track();
  }
}
function Hi(i, t, e, n, s, r) {
  const o = cd.get(i);
  if (!o) {
    la++;
    return;
  }
  const a = (c) => {
    c && (jt.NODE_ENV !== "production" ? c.trigger({
      target: i,
      type: t,
      key: e,
      newValue: n,
      oldValue: s,
      oldTarget: r
    }) : c.trigger());
  };
  if (rh(), t === "clear")
    o.forEach(a);
  else {
    const c = X(i), l = c && ih(e);
    if (c && e === "length") {
      const u = Number(n);
      o.forEach((d, m) => {
        (m === "length" || m === ua || !Os(m) && m >= u) && a(d);
      });
    } else
      switch ((e !== void 0 || o.has(void 0)) && a(o.get(e)), l && a(o.get(ua)), t) {
        case "add":
          c ? l && a(o.get("length")) : (a(o.get(Ks)), Hs(i) && a(o.get(ld)));
          break;
        case "delete":
          c || (a(o.get(Ks)), Hs(i) && a(o.get(ld)));
          break;
        case "set":
          Hs(i) && a(o.get(Ks));
          break;
      }
  }
  oh();
}
function dr(i) {
  const t = yt(i);
  return t === i ? t : (le(t, "iterate", ua), ke(i) ? t : t.map(Ne));
}
function Zl(i) {
  return le(i = yt(i), "iterate", ua), i;
}
const jw = {
  __proto__: null,
  [Symbol.iterator]() {
    return Mu(this, Symbol.iterator, Ne);
  },
  concat(...i) {
    return dr(this).concat(
      ...i.map((t) => X(t) ? dr(t) : t)
    );
  },
  entries() {
    return Mu(this, "entries", (i) => (i[1] = Ne(i[1]), i));
  },
  every(i, t) {
    return fn(this, "every", i, t, void 0, arguments);
  },
  filter(i, t) {
    return fn(this, "filter", i, t, (e) => e.map(Ne), arguments);
  },
  find(i, t) {
    return fn(this, "find", i, t, Ne, arguments);
  },
  findIndex(i, t) {
    return fn(this, "findIndex", i, t, void 0, arguments);
  },
  findLast(i, t) {
    return fn(this, "findLast", i, t, Ne, arguments);
  },
  findLastIndex(i, t) {
    return fn(this, "findLastIndex", i, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(i, t) {
    return fn(this, "forEach", i, t, void 0, arguments);
  },
  includes(...i) {
    return Ru(this, "includes", i);
  },
  indexOf(...i) {
    return Ru(this, "indexOf", i);
  },
  join(i) {
    return dr(this).join(i);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...i) {
    return Ru(this, "lastIndexOf", i);
  },
  map(i, t) {
    return fn(this, "map", i, t, void 0, arguments);
  },
  pop() {
    return Ao(this, "pop");
  },
  push(...i) {
    return Ao(this, "push", i);
  },
  reduce(i, ...t) {
    return Ip(this, "reduce", i, t);
  },
  reduceRight(i, ...t) {
    return Ip(this, "reduceRight", i, t);
  },
  shift() {
    return Ao(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(i, t) {
    return fn(this, "some", i, t, void 0, arguments);
  },
  splice(...i) {
    return Ao(this, "splice", i);
  },
  toReversed() {
    return dr(this).toReversed();
  },
  toSorted(i) {
    return dr(this).toSorted(i);
  },
  toSpliced(...i) {
    return dr(this).toSpliced(...i);
  },
  unshift(...i) {
    return Ao(this, "unshift", i);
  },
  values() {
    return Mu(this, "values", Ne);
  }
};
function Mu(i, t, e) {
  const n = Zl(i), s = n[t]();
  return n !== i && !ke(i) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.done || (r.value = e(r.value)), r;
  }), s;
}
const zw = Array.prototype;
function fn(i, t, e, n, s, r) {
  const o = Zl(i), a = o !== i && !ke(i), c = o[t];
  if (c !== zw[t]) {
    const d = c.apply(i, r);
    return a ? Ne(d) : d;
  }
  let l = e;
  o !== i && (a ? l = function(d, m) {
    return e.call(this, Ne(d), m, i);
  } : e.length > 2 && (l = function(d, m) {
    return e.call(this, d, m, i);
  }));
  const u = c.call(o, l, n);
  return a && s ? s(u) : u;
}
function Ip(i, t, e, n) {
  const s = Zl(i);
  let r = e;
  return s !== i && (ke(i) ? e.length > 3 && (r = function(o, a, c) {
    return e.call(this, o, a, c, i);
  }) : r = function(o, a, c) {
    return e.call(this, o, Ne(a), c, i);
  }), s[t](r, ...n);
}
function Ru(i, t, e) {
  const n = yt(i);
  le(n, "iterate", ua);
  const s = n[t](...e);
  return (s === -1 || s === !1) && qc(e[0]) ? (e[0] = yt(e[0]), n[t](...e)) : s;
}
function Ao(i, t, e = []) {
  Bi(), rh();
  const n = yt(i)[t].apply(i, e);
  return oh(), Ni(), n;
}
const Ww = /* @__PURE__ */ Cn("__proto__,__v_isRef,__isVue"), Og = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((i) => i !== "arguments" && i !== "caller").map((i) => Symbol[i]).filter(Os)
);
function Hw(i) {
  Os(i) || (i = String(i));
  const t = yt(this);
  return le(t, "has", i), t.hasOwnProperty(i);
}
class Dg {
  constructor(t = !1, e = !1) {
    this._isReadonly = t, this._isShallow = e;
  }
  get(t, e, n) {
    if (e === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (e === "__v_isReactive")
      return !s;
    if (e === "__v_isReadonly")
      return s;
    if (e === "__v_isShallow")
      return r;
    if (e === "__v_raw")
      return n === (s ? r ? Fg : Tg : r ? Ag : Eg).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = X(t);
    if (!s) {
      let c;
      if (o && (c = jw[e]))
        return c;
      if (e === "hasOwnProperty")
        return Hw;
    }
    const a = Reflect.get(
      t,
      e,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      fe(t) ? t : n
    );
    if ((Os(e) ? Og.has(e) : Ww(e)) || (s || le(t, "get", e), r))
      return a;
    if (fe(a)) {
      const c = o && ih(e) ? a : a.value;
      return s && Ct(c) ? dd(c) : c;
    }
    return Ct(a) ? s ? dd(a) : tu(a) : a;
  }
}
class Bg extends Dg {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, e, n, s) {
    let r = t[e];
    if (!this._isShallow) {
      const c = Fn(r);
      if (!ke(n) && !Fn(n) && (r = yt(r), n = yt(n)), !X(t) && fe(r) && !fe(n))
        return c ? (jt.NODE_ENV !== "production" && Di(
          `Set operation on key "${String(e)}" failed: target is readonly.`,
          t[e]
        ), !0) : (r.value = n, !0);
    }
    const o = X(t) && ih(e) ? Number(e) < t.length : St(t, e), a = Reflect.set(
      t,
      e,
      n,
      fe(t) ? t : s
    );
    return t === yt(s) && (o ? Ys(n, r) && Hi(t, "set", e, n, r) : Hi(t, "add", e, n)), a;
  }
  deleteProperty(t, e) {
    const n = St(t, e), s = t[e], r = Reflect.deleteProperty(t, e);
    return r && n && Hi(t, "delete", e, void 0, s), r;
  }
  has(t, e) {
    const n = Reflect.has(t, e);
    return (!Os(e) || !Og.has(e)) && le(t, "has", e), n;
  }
  ownKeys(t) {
    return le(
      t,
      "iterate",
      X(t) ? "length" : Ks
    ), Reflect.ownKeys(t);
  }
}
class Ng extends Dg {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, e) {
    return jt.NODE_ENV !== "production" && Di(
      `Set operation on key "${String(e)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, e) {
    return jt.NODE_ENV !== "production" && Di(
      `Delete operation on key "${String(e)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Yw = /* @__PURE__ */ new Bg(), Kw = /* @__PURE__ */ new Ng(), Gw = /* @__PURE__ */ new Bg(!0), qw = /* @__PURE__ */ new Ng(!0), ud = (i) => i, rc = (i) => Reflect.getPrototypeOf(i);
function Jw(i, t, e) {
  return function(...n) {
    const s = this.__v_raw, r = yt(s), o = Hs(r), a = i === "entries" || i === Symbol.iterator && o, c = i === "keys" && o, l = s[i](...n), u = e ? ud : t ? Jc : Ne;
    return !t && le(
      r,
      "iterate",
      c ? ld : Ks
    ), {
      // iterator protocol
      next() {
        const { value: d, done: m } = l.next();
        return m ? { value: d, done: m } : {
          value: a ? [u(d[0]), u(d[1])] : u(d),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function oc(i) {
  return function(...t) {
    if (jt.NODE_ENV !== "production") {
      const e = t[0] ? `on key "${t[0]}" ` : "";
      Di(
        `${Ql(i)} operation ${e}failed: target is readonly.`,
        yt(this)
      );
    }
    return i === "delete" ? !1 : i === "clear" ? void 0 : this;
  };
}
function Qw(i, t) {
  const e = {
    get(s) {
      const r = this.__v_raw, o = yt(r), a = yt(s);
      i || (Ys(s, a) && le(o, "get", s), le(o, "get", a));
      const { has: c } = rc(o), l = t ? ud : i ? Jc : Ne;
      if (c.call(o, s))
        return l(r.get(s));
      if (c.call(o, a))
        return l(r.get(a));
      r !== o && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !i && le(yt(s), "iterate", Ks), s.size;
    },
    has(s) {
      const r = this.__v_raw, o = yt(r), a = yt(s);
      return i || (Ys(s, a) && le(o, "has", s), le(o, "has", a)), s === a ? r.has(s) : r.has(s) || r.has(a);
    },
    forEach(s, r) {
      const o = this, a = o.__v_raw, c = yt(a), l = t ? ud : i ? Jc : Ne;
      return !i && le(c, "iterate", Ks), a.forEach((u, d) => s.call(r, l(u), l(d), o));
    }
  };
  return oe(
    e,
    i ? {
      add: oc("add"),
      set: oc("set"),
      delete: oc("delete"),
      clear: oc("clear")
    } : {
      add(s) {
        !t && !ke(s) && !Fn(s) && (s = yt(s));
        const r = yt(this);
        return rc(r).has.call(r, s) || (r.add(s), Hi(r, "add", s, s)), this;
      },
      set(s, r) {
        !t && !ke(r) && !Fn(r) && (r = yt(r));
        const o = yt(this), { has: a, get: c } = rc(o);
        let l = a.call(o, s);
        l ? jt.NODE_ENV !== "production" && Sp(o, a, s) : (s = yt(s), l = a.call(o, s));
        const u = c.call(o, s);
        return o.set(s, r), l ? Ys(r, u) && Hi(o, "set", s, r, u) : Hi(o, "add", s, r), this;
      },
      delete(s) {
        const r = yt(this), { has: o, get: a } = rc(r);
        let c = o.call(r, s);
        c ? jt.NODE_ENV !== "production" && Sp(r, o, s) : (s = yt(s), c = o.call(r, s));
        const l = a ? a.call(r, s) : void 0, u = r.delete(s);
        return c && Hi(r, "delete", s, void 0, l), u;
      },
      clear() {
        const s = yt(this), r = s.size !== 0, o = jt.NODE_ENV !== "production" ? Hs(s) ? new Map(s) : new Set(s) : void 0, a = s.clear();
        return r && Hi(
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
    e[s] = Jw(s, i, t);
  }), e;
}
function Xl(i, t) {
  const e = Qw(i, t);
  return (n, s, r) => s === "__v_isReactive" ? !i : s === "__v_isReadonly" ? i : s === "__v_raw" ? n : Reflect.get(
    St(e, s) && s in n ? e : n,
    s,
    r
  );
}
const Zw = {
  get: /* @__PURE__ */ Xl(!1, !1)
}, Xw = {
  get: /* @__PURE__ */ Xl(!1, !0)
}, tI = {
  get: /* @__PURE__ */ Xl(!0, !1)
}, eI = {
  get: /* @__PURE__ */ Xl(!0, !0)
};
function Sp(i, t, e) {
  const n = yt(e);
  if (n !== e && t.call(i, n)) {
    const s = eh(i);
    Di(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Eg = /* @__PURE__ */ new WeakMap(), Ag = /* @__PURE__ */ new WeakMap(), Tg = /* @__PURE__ */ new WeakMap(), Fg = /* @__PURE__ */ new WeakMap();
function iI(i) {
  switch (i) {
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
function nI(i) {
  return i.__v_skip || !Object.isExtensible(i) ? 0 : iI(eh(i));
}
function tu(i) {
  return Fn(i) ? i : eu(
    i,
    !1,
    Yw,
    Zw,
    Eg
  );
}
function sI(i) {
  return eu(
    i,
    !1,
    Gw,
    Xw,
    Ag
  );
}
function dd(i) {
  return eu(
    i,
    !0,
    Kw,
    tI,
    Tg
  );
}
function Qi(i) {
  return eu(
    i,
    !0,
    qw,
    eI,
    Fg
  );
}
function eu(i, t, e, n, s) {
  if (!Ct(i))
    return jt.NODE_ENV !== "production" && Di(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        i
      )}`
    ), i;
  if (i.__v_raw && !(t && i.__v_isReactive))
    return i;
  const r = nI(i);
  if (r === 0)
    return i;
  const o = s.get(i);
  if (o)
    return o;
  const a = new Proxy(
    i,
    r === 2 ? n : e
  );
  return s.set(i, a), a;
}
function Gs(i) {
  return Fn(i) ? Gs(i.__v_raw) : !!(i && i.__v_isReactive);
}
function Fn(i) {
  return !!(i && i.__v_isReadonly);
}
function ke(i) {
  return !!(i && i.__v_isShallow);
}
function qc(i) {
  return i ? !!i.__v_raw : !1;
}
function yt(i) {
  const t = i && i.__v_raw;
  return t ? yt(t) : i;
}
function rI(i) {
  return !St(i, "__v_skip") && Object.isExtensible(i) && Gc(i, "__v_skip", !0), i;
}
const Ne = (i) => Ct(i) ? tu(i) : i, Jc = (i) => Ct(i) ? dd(i) : i;
function fe(i) {
  return i ? i.__v_isRef === !0 : !1;
}
function Zn(i) {
  return fe(i) ? i.value : i;
}
const oI = {
  get: (i, t, e) => t === "__v_raw" ? i : Zn(Reflect.get(i, t, e)),
  set: (i, t, e, n) => {
    const s = i[t];
    return fe(s) && !fe(e) ? (s.value = e, !0) : Reflect.set(i, t, e, n);
  }
};
function Mg(i) {
  return Gs(i) ? i : new Proxy(i, oI);
}
class aI {
  constructor(t, e, n) {
    this.fn = t, this.setter = e, this._value = void 0, this.dep = new Ig(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = la - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !e, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ft !== this)
      return mg(this, !0), !0;
  }
  get value() {
    const t = jt.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return vg(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : jt.NODE_ENV !== "production" && Di("Write operation failed: computed value is readonly");
  }
}
function cI(i, t, e = !1) {
  let n, s;
  return rt(i) ? n = i : (n = i.get, s = i.set), new aI(n, s, e);
}
const ac = {}, Qc = /* @__PURE__ */ new WeakMap();
let Ms;
function lI(i, t = !1, e = Ms) {
  if (e) {
    let n = Qc.get(e);
    n || Qc.set(e, n = []), n.push(i);
  } else jt.NODE_ENV !== "production" && !t && Di(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function uI(i, t, e = xt) {
  const { immediate: n, deep: s, once: r, scheduler: o, augmentJob: a, call: c } = e, l = (j) => {
    (e.onWarn || Di)(
      "Invalid watch source: ",
      j,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (j) => s ? j : ke(j) || s === !1 || s === 0 ? as(j, 1) : as(j);
  let d, m, _, A, L = !1, Ht = !1;
  if (fe(i) ? (m = () => i.value, L = ke(i)) : Gs(i) ? (m = () => u(i), L = !0) : X(i) ? (Ht = !0, L = i.some((j) => Gs(j) || ke(j)), m = () => i.map((j) => {
    if (fe(j))
      return j.value;
    if (Gs(j))
      return u(j);
    if (rt(j))
      return c ? c(j, 2) : j();
    jt.NODE_ENV !== "production" && l(j);
  })) : rt(i) ? t ? m = c ? () => c(i, 2) : i : m = () => {
    if (_) {
      Bi();
      try {
        _();
      } finally {
        Ni();
      }
    }
    const j = Ms;
    Ms = d;
    try {
      return c ? c(i, 3, [A]) : i(A);
    } finally {
      Ms = j;
    }
  } : (m = he, jt.NODE_ENV !== "production" && l(i)), t && s) {
    const j = m, pe = s === !0 ? 1 / 0 : s;
    m = () => as(j(), pe);
  }
  const dt = Vw(), mt = () => {
    d.stop(), dt && dt.active && Xd(dt.effects, d);
  };
  if (r && t) {
    const j = t;
    t = (...pe) => {
      j(...pe), mt();
    };
  }
  let Nt = Ht ? new Array(i.length).fill(ac) : ac;
  const Ye = (j) => {
    if (!(!(d.flags & 1) || !d.dirty && !j))
      if (t) {
        const pe = d.run();
        if (s || L || (Ht ? pe.some((ni, be) => Ys(ni, Nt[be])) : Ys(pe, Nt))) {
          _ && _();
          const ni = Ms;
          Ms = d;
          try {
            const be = [
              pe,
              // pass undefined as the old value when it's changed for the first time
              Nt === ac ? void 0 : Ht && Nt[0] === ac ? [] : Nt,
              A
            ];
            Nt = pe, c ? c(t, 3, be) : (
              // @ts-expect-error
              t(...be)
            );
          } finally {
            Ms = ni;
          }
        }
      } else
        d.run();
  };
  return a && a(Ye), d = new yg(m), d.scheduler = o ? () => o(Ye, !1) : Ye, A = (j) => lI(j, !1, d), _ = d.onStop = () => {
    const j = Qc.get(d);
    if (j) {
      if (c)
        c(j, 4);
      else
        for (const pe of j) pe();
      Qc.delete(d);
    }
  }, jt.NODE_ENV !== "production" && (d.onTrack = e.onTrack, d.onTrigger = e.onTrigger), t ? n ? Ye(!0) : Nt = d.run() : o ? o(Ye.bind(null, !0), !0) : d.run(), mt.pause = d.pause.bind(d), mt.resume = d.resume.bind(d), mt.stop = mt, mt;
}
function as(i, t = 1 / 0, e) {
  if (t <= 0 || !Ct(i) || i.__v_skip || (e = e || /* @__PURE__ */ new Map(), (e.get(i) || 0) >= t))
    return i;
  if (e.set(i, t), t--, fe(i))
    as(i.value, t, e);
  else if (X(i))
    for (let n = 0; n < i.length; n++)
      as(i[n], t, e);
  else if (lg(i) || Hs(i))
    i.forEach((n) => {
      as(n, t, e);
    });
  else if (dg(i)) {
    for (const n in i)
      as(i[n], t, e);
    for (const n of Object.getOwnPropertySymbols(i))
      Object.prototype.propertyIsEnumerable.call(i, n) && as(i[n], t, e);
  }
  return i;
}
var g = {};
const qs = [];
function yc(i) {
  qs.push(i);
}
function gc() {
  qs.pop();
}
let Lu = !1;
function N(i, ...t) {
  if (Lu) return;
  Lu = !0, Bi();
  const e = qs.length ? qs[qs.length - 1].component : null, n = e && e.appContext.config.warnHandler, s = dI();
  if (n)
    _o(
      n,
      e,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        i + t.map((r) => {
          var o, a;
          return (a = (o = r.toString) == null ? void 0 : o.call(r)) != null ? a : JSON.stringify(r);
        }).join(""),
        e && e.proxy,
        s.map(
          ({ vnode: r }) => `at <${ou(e, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${i}`, ...t];
    s.length && r.push(`
`, ...hI(s)), console.warn(...r);
  }
  Ni(), Lu = !1;
}
function dI() {
  let i = qs[qs.length - 1];
  if (!i)
    return [];
  const t = [];
  for (; i; ) {
    const e = t[0];
    e && e.vnode === i ? e.recurseCount++ : t.push({
      vnode: i,
      recurseCount: 0
    });
    const n = i.component && i.component.parent;
    i = n && n.vnode;
  }
  return t;
}
function hI(i) {
  const t = [];
  return i.forEach((e, n) => {
    t.push(...n === 0 ? [] : [`
`], ...fI(e));
  }), t;
}
function fI({ vnode: i, recurseCount: t }) {
  const e = t > 0 ? `... (${t} recursive calls)` : "", n = i.component ? i.component.parent == null : !1, s = ` at <${ou(
    i.component,
    i.type,
    n
  )}`, r = ">" + e;
  return i.props ? [s, ...pI(i.props), r] : [s + r];
}
function pI(i) {
  const t = [], e = Object.keys(i);
  return e.slice(0, 3).forEach((n) => {
    t.push(...Rg(n, i[n]));
  }), e.length > 3 && t.push(" ..."), t;
}
function Rg(i, t, e) {
  return Jt(t) ? (t = JSON.stringify(t), e ? t : [`${i}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? e ? t : [`${i}=${t}`] : fe(t) ? (t = Rg(i, yt(t.value), !0), e ? t : [`${i}=Ref<`, t, ">"]) : rt(t) ? [`${i}=fn${t.name ? `<${t.name}>` : ""}`] : (t = yt(t), e ? t : [`${i}=`, t]);
}
const ch = {
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
function _o(i, t, e, n) {
  try {
    return n ? i(...n) : i();
  } catch (s) {
    La(s, t, e);
  }
}
function en(i, t, e, n) {
  if (rt(i)) {
    const s = _o(i, t, e, n);
    return s && th(s) && s.catch((r) => {
      La(r, t, e);
    }), s;
  }
  if (X(i)) {
    const s = [];
    for (let r = 0; r < i.length; r++)
      s.push(en(i[r], t, e, n));
    return s;
  } else g.NODE_ENV !== "production" && N(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof i}`
  );
}
function La(i, t, e, n = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || xt;
  if (t) {
    let a = t.parent;
    const c = t.proxy, l = g.NODE_ENV !== "production" ? ch[e] : `https://vuejs.org/error-reference/#runtime-${e}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](i, c, l) === !1)
            return;
      }
      a = a.parent;
    }
    if (r) {
      Bi(), _o(r, null, 10, [
        i,
        c,
        l
      ]), Ni();
      return;
    }
  }
  yI(i, e, s, n, o);
}
function yI(i, t, e, n = !0, s = !1) {
  if (g.NODE_ENV !== "production") {
    const r = ch[t];
    if (e && yc(e), N(`Unhandled error${r ? ` during execution of ${r}` : ""}`), e && gc(), n)
      throw i;
    console.error(i);
  } else {
    if (s)
      throw i;
    console.error(i);
  }
}
const Ee = [];
let ki = -1;
const Hr = [];
let es = null, gr = 0;
const Lg = /* @__PURE__ */ Promise.resolve();
let Zc = null;
const gI = 100;
function mI(i) {
  const t = Zc || Lg;
  return i ? t.then(this ? i.bind(this) : i) : t;
}
function _I(i) {
  let t = ki + 1, e = Ee.length;
  for (; t < e; ) {
    const n = t + e >>> 1, s = Ee[n], r = da(s);
    r < i || r === i && s.flags & 2 ? t = n + 1 : e = n;
  }
  return t;
}
function iu(i) {
  if (!(i.flags & 1)) {
    const t = da(i), e = Ee[Ee.length - 1];
    !e || // fast path when the job id is larger than the tail
    !(i.flags & 2) && t >= da(e) ? Ee.push(i) : Ee.splice(_I(t), 0, i), i.flags |= 1, Ug();
  }
}
function Ug() {
  Zc || (Zc = Lg.then($g));
}
function xg(i) {
  X(i) ? Hr.push(...i) : es && i.id === -1 ? es.splice(gr + 1, 0, i) : i.flags & 1 || (Hr.push(i), i.flags |= 1), Ug();
}
function Op(i, t, e = ki + 1) {
  for (g.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); e < Ee.length; e++) {
    const n = Ee[e];
    if (n && n.flags & 2) {
      if (i && n.id !== i.uid || g.NODE_ENV !== "production" && lh(t, n))
        continue;
      Ee.splice(e, 1), e--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Cg(i) {
  if (Hr.length) {
    const t = [...new Set(Hr)].sort(
      (e, n) => da(e) - da(n)
    );
    if (Hr.length = 0, es) {
      es.push(...t);
      return;
    }
    for (es = t, g.NODE_ENV !== "production" && (i = i || /* @__PURE__ */ new Map()), gr = 0; gr < es.length; gr++) {
      const e = es[gr];
      g.NODE_ENV !== "production" && lh(i, e) || (e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2);
    }
    es = null, gr = 0;
  }
}
const da = (i) => i.id == null ? i.flags & 2 ? -1 : 1 / 0 : i.id;
function $g(i) {
  g.NODE_ENV !== "production" && (i = i || /* @__PURE__ */ new Map());
  const t = g.NODE_ENV !== "production" ? (e) => lh(i, e) : he;
  try {
    for (ki = 0; ki < Ee.length; ki++) {
      const e = Ee[ki];
      if (e && !(e.flags & 8)) {
        if (g.NODE_ENV !== "production" && t(e))
          continue;
        e.flags & 4 && (e.flags &= -2), _o(
          e,
          e.i,
          e.i ? 15 : 14
        ), e.flags & 4 || (e.flags &= -2);
      }
    }
  } finally {
    for (; ki < Ee.length; ki++) {
      const e = Ee[ki];
      e && (e.flags &= -2);
    }
    ki = -1, Ee.length = 0, Cg(i), Zc = null, (Ee.length || Hr.length) && $g(i);
  }
}
function lh(i, t) {
  const e = i.get(t) || 0;
  if (e > gI) {
    const n = t.i, s = n && bm(n.type);
    return La(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return i.set(t, e + 1), !1;
}
let Zi = !1;
const mc = /* @__PURE__ */ new Map();
g.NODE_ENV !== "production" && (Ra().__VUE_HMR_RUNTIME__ = {
  createRecord: Uu(Vg),
  rerender: Uu(wI),
  reload: Uu(II)
});
const Qs = /* @__PURE__ */ new Map();
function bI(i) {
  const t = i.type.__hmrId;
  let e = Qs.get(t);
  e || (Vg(t, i.type), e = Qs.get(t)), e.instances.add(i);
}
function vI(i) {
  Qs.get(i.type.__hmrId).instances.delete(i);
}
function Vg(i, t) {
  return Qs.has(i) ? !1 : (Qs.set(i, {
    initialDef: Xc(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Xc(i) {
  return vm(i) ? i.__vccOpts : i;
}
function wI(i, t) {
  const e = Qs.get(i);
  e && (e.initialDef.render = t, [...e.instances].forEach((n) => {
    t && (n.render = t, Xc(n.type).render = t), n.renderCache = [], Zi = !0, n.job.flags & 8 || n.update(), Zi = !1;
  }));
}
function II(i, t) {
  const e = Qs.get(i);
  if (!e) return;
  t = Xc(t), Dp(e.initialDef, t);
  const n = [...e.instances];
  for (let s = 0; s < n.length; s++) {
    const r = n[s], o = Xc(r.type);
    let a = mc.get(o);
    a || (o !== e.initialDef && Dp(o, t), mc.set(o, a = /* @__PURE__ */ new Set())), a.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (a.add(r), r.ceReload(t.styles), a.delete(r)) : r.parent ? iu(() => {
      r.job.flags & 8 || (Zi = !0, r.parent.update(), Zi = !1, a.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(o);
  }
  xg(() => {
    mc.clear();
  });
}
function Dp(i, t) {
  oe(i, t);
  for (const e in i)
    e !== "__file" && !(e in t) && delete i[e];
}
function Uu(i) {
  return (t, e) => {
    try {
      return i(t, e);
    } catch (n) {
      console.error(n), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Yi, Ro = [], hd = !1;
function Ua(i, ...t) {
  Yi ? Yi.emit(i, ...t) : hd || Ro.push({ event: i, args: t });
}
function Pg(i, t) {
  var e, n;
  Yi = i, Yi ? (Yi.enabled = !0, Ro.forEach(({ event: s, args: r }) => Yi.emit(s, ...r)), Ro = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((n = (e = window.navigator) == null ? void 0 : e.userAgent) != null && n.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Pg(r, t);
  }), setTimeout(() => {
    Yi || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, hd = !0, Ro = []);
  }, 3e3)) : (hd = !0, Ro = []);
}
function SI(i, t) {
  Ua("app:init", i, t, {
    Fragment: Je,
    Text: xa,
    Comment: ti,
    Static: vc
  });
}
function OI(i) {
  Ua("app:unmount", i);
}
const DI = /* @__PURE__ */ uh(
  "component:added"
  /* COMPONENT_ADDED */
), kg = /* @__PURE__ */ uh(
  "component:updated"
  /* COMPONENT_UPDATED */
), BI = /* @__PURE__ */ uh(
  "component:removed"
  /* COMPONENT_REMOVED */
), NI = (i) => {
  Yi && typeof Yi.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Yi.cleanupBuffer(i) && BI(i);
};
// @__NO_SIDE_EFFECTS__
function uh(i) {
  return (t) => {
    Ua(
      i,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const EI = /* @__PURE__ */ jg(
  "perf:start"
  /* PERFORMANCE_START */
), AI = /* @__PURE__ */ jg(
  "perf:end"
  /* PERFORMANCE_END */
);
function jg(i) {
  return (t, e, n) => {
    Ua(i, t.appContext.app, t.uid, t, e, n);
  };
}
function TI(i, t, e) {
  Ua(
    "component:emit",
    i.appContext.app,
    i,
    t,
    e
  );
}
let Ze = null, zg = null;
function tl(i) {
  const t = Ze;
  return Ze = i, zg = i && i.type.__scopeId || null, t;
}
function FI(i, t = Ze, e) {
  if (!t || i._n)
    return i;
  const n = (...s) => {
    n._d && Vp(-1);
    const r = tl(t);
    let o;
    try {
      o = i(...s);
    } finally {
      tl(r), n._d && Vp(1);
    }
    return g.NODE_ENV !== "production" && kg(t), o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Wg(i) {
  Iw(i) && N("Do not use built-in directive ids as custom directive id: " + i);
}
function Ns(i, t, e, n) {
  const s = i.dirs, r = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    r && (a.oldValue = r[o].value);
    let c = a.dir[n];
    c && (Bi(), en(c, e, 8, [
      i.el,
      a,
      i,
      t
    ]), Ni());
  }
}
const MI = Symbol("_vte"), RI = (i) => i.__isTeleport, LI = Symbol("_leaveCb");
function dh(i, t) {
  i.shapeFlag & 6 && i.component ? (i.transition = t, dh(i.component.subTree, t)) : i.shapeFlag & 128 ? (i.ssContent.transition = t.clone(i.ssContent), i.ssFallback.transition = t.clone(i.ssFallback)) : i.transition = t;
}
// @__NO_SIDE_EFFECTS__
function UI(i, t) {
  return rt(i) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    oe({ name: i.name }, t, { setup: i })
  ) : i;
}
function Hg(i) {
  i.ids = [i.ids[0] + i.ids[2]++ + "-", 0, 0];
}
const Bp = /* @__PURE__ */ new WeakSet(), el = /* @__PURE__ */ new WeakMap();
function na(i, t, e, n, s = !1) {
  if (X(i)) {
    i.forEach(
      (L, Ht) => na(
        L,
        t && (X(t) ? t[Ht] : t),
        e,
        n,
        s
      )
    );
    return;
  }
  if (sa(n) && !s) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && na(i, t, e, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? _h(n.component) : n.el, o = s ? null : r, { i: a, r: c } = i;
  if (g.NODE_ENV !== "production" && !a) {
    N(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const l = t && t.r, u = a.refs === xt ? a.refs = {} : a.refs, d = a.setupState, m = yt(d), _ = d === xt ? cg : (L) => g.NODE_ENV !== "production" && (St(m, L) && !fe(m[L]) && N(
    `Template ref "${L}" used on a non-ref value. It will not work in the production build.`
  ), Bp.has(m[L])) ? !1 : St(m, L), A = (L) => g.NODE_ENV === "production" || !Bp.has(L);
  if (l != null && l !== c) {
    if (Np(t), Jt(l))
      u[l] = null, _(l) && (d[l] = null);
    else if (fe(l)) {
      A(l) && (l.value = null);
      const L = t;
      L.k && (u[L.k] = null);
    }
  }
  if (rt(c))
    _o(c, a, 12, [o, u]);
  else {
    const L = Jt(c), Ht = fe(c);
    if (L || Ht) {
      const dt = () => {
        if (i.f) {
          const mt = L ? _(c) ? d[c] : u[c] : A(c) || !i.k ? c.value : u[i.k];
          if (s)
            X(mt) && Xd(mt, r);
          else if (X(mt))
            mt.includes(r) || mt.push(r);
          else if (L)
            u[c] = [r], _(c) && (d[c] = u[c]);
          else {
            const Nt = [r];
            A(c) && (c.value = Nt), i.k && (u[i.k] = Nt);
          }
        } else L ? (u[c] = o, _(c) && (d[c] = o)) : Ht ? (A(c) && (c.value = o), i.k && (u[i.k] = o)) : g.NODE_ENV !== "production" && N("Invalid template ref type:", c, `(${typeof c})`);
      };
      if (o) {
        const mt = () => {
          dt(), el.delete(i);
        };
        mt.id = -1, el.set(i, mt), Ke(mt, e);
      } else
        Np(i), dt();
    } else g.NODE_ENV !== "production" && N("Invalid template ref type:", c, `(${typeof c})`);
  }
}
function Np(i) {
  const t = el.get(i);
  t && (t.flags |= 8, el.delete(i));
}
Ra().requestIdleCallback;
Ra().cancelIdleCallback;
const sa = (i) => !!i.type.__asyncLoader, hh = (i) => i.type.__isKeepAlive;
function xI(i, t) {
  Yg(i, "a", t);
}
function CI(i, t) {
  Yg(i, "da", t);
}
function Yg(i, t, e = me) {
  const n = i.__wdc || (i.__wdc = () => {
    let s = e;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return i();
  });
  if (nu(t, n, e), e) {
    let s = e.parent;
    for (; s && s.parent; )
      hh(s.parent.vnode) && $I(n, t, e, s), s = s.parent;
  }
}
function $I(i, t, e, n) {
  const s = nu(
    t,
    i,
    n,
    !0
    /* prepend */
  );
  Kg(() => {
    Xd(n[t], s);
  }, e);
}
function nu(i, t, e = me, n = !1) {
  if (e) {
    const s = e[i] || (e[i] = []), r = t.__weh || (t.__weh = (...o) => {
      Bi();
      const a = Ca(e), c = en(t, e, i, o);
      return a(), Ni(), c;
    });
    return n ? s.unshift(r) : s.push(r), r;
  } else if (g.NODE_ENV !== "production") {
    const s = Fs(ch[i].replace(/ hook$/, ""));
    N(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const $n = (i) => (t, e = me) => {
  (!fa || i === "sp") && nu(i, (...n) => t(...n), e);
}, VI = $n("bm"), PI = $n("m"), kI = $n(
  "bu"
), jI = $n("u"), zI = $n(
  "bum"
), Kg = $n("um"), WI = $n(
  "sp"
), HI = $n("rtg"), YI = $n("rtc");
function KI(i, t = me) {
  nu("ec", i, t);
}
const GI = Symbol.for("v-ndc");
function xu(i, t, e, n) {
  let s;
  const r = e, o = X(i);
  if (o || Jt(i)) {
    const a = o && Gs(i);
    let c = !1, l = !1;
    a && (c = !ke(i), l = Fn(i), i = Zl(i)), s = new Array(i.length);
    for (let u = 0, d = i.length; u < d; u++)
      s[u] = t(
        c ? l ? Jc(Ne(i[u])) : Ne(i[u]) : i[u],
        u,
        void 0,
        r
      );
  } else if (typeof i == "number") {
    g.NODE_ENV !== "production" && !Number.isInteger(i) && N(`The v-for range expect an integer value but got ${i}.`), s = new Array(i);
    for (let a = 0; a < i; a++)
      s[a] = t(a + 1, a, void 0, r);
  } else if (Ct(i))
    if (i[Symbol.iterator])
      s = Array.from(
        i,
        (a, c) => t(a, c, void 0, r)
      );
    else {
      const a = Object.keys(i);
      s = new Array(a.length);
      for (let c = 0, l = a.length; c < l; c++) {
        const u = a[c];
        s[c] = t(i[u], u, c, r);
      }
    }
  else
    s = [];
  return s;
}
const fd = (i) => i ? mm(i) ? _h(i) : fd(i.parent) : null, Js = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ oe(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => g.NODE_ENV !== "production" ? Qi(i.props) : i.props,
    $attrs: (i) => g.NODE_ENV !== "production" ? Qi(i.attrs) : i.attrs,
    $slots: (i) => g.NODE_ENV !== "production" ? Qi(i.slots) : i.slots,
    $refs: (i) => g.NODE_ENV !== "production" ? Qi(i.refs) : i.refs,
    $parent: (i) => fd(i.parent),
    $root: (i) => fd(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) => Jg(i),
    $forceUpdate: (i) => i.f || (i.f = () => {
      iu(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = mI.bind(i.proxy)),
    $watch: (i) => NS.bind(i)
  })
), fh = (i) => i === "_" || i === "$", Cu = (i, t) => i !== xt && !i.__isScriptSetup && St(i, t), Gg = {
  get({ _: i }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: e, setupState: n, data: s, props: r, accessCache: o, type: a, appContext: c } = i;
    if (g.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let l;
    if (t[0] !== "$") {
      const _ = o[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return n[t];
          case 2:
            return s[t];
          case 4:
            return e[t];
          case 3:
            return r[t];
        }
      else {
        if (Cu(n, t))
          return o[t] = 1, n[t];
        if (s !== xt && St(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (l = i.propsOptions[0]) && St(l, t)
        )
          return o[t] = 3, r[t];
        if (e !== xt && St(e, t))
          return o[t] = 4, e[t];
        pd && (o[t] = 0);
      }
    }
    const u = Js[t];
    let d, m;
    if (u)
      return t === "$attrs" ? (le(i.attrs, "get", ""), g.NODE_ENV !== "production" && sl()) : g.NODE_ENV !== "production" && t === "$slots" && le(i, "get", t), u(i);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (e !== xt && St(e, t))
      return o[t] = 4, e[t];
    if (
      // global properties
      m = c.config.globalProperties, St(m, t)
    )
      return m[t];
    g.NODE_ENV !== "production" && Ze && (!Jt(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== xt && fh(t[0]) && St(s, t) ? N(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : i === Ze && N(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: i }, t, e) {
    const { data: n, setupState: s, ctx: r } = i;
    return Cu(s, t) ? (s[t] = e, !0) : g.NODE_ENV !== "production" && s.__isScriptSetup && St(s, t) ? (N(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : n !== xt && St(n, t) ? (n[t] = e, !0) : St(i.props, t) ? (g.NODE_ENV !== "production" && N(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in i ? (g.NODE_ENV !== "production" && N(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (g.NODE_ENV !== "production" && t in i.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: e
    }) : r[t] = e, !0);
  },
  has({
    _: { data: i, setupState: t, accessCache: e, ctx: n, appContext: s, propsOptions: r, type: o }
  }, a) {
    let c, l;
    return !!(e[a] || i !== xt && a[0] !== "$" && St(i, a) || Cu(t, a) || (c = r[0]) && St(c, a) || St(n, a) || St(Js, a) || St(s.config.globalProperties, a) || (l = o.__cssModules) && l[a]);
  },
  defineProperty(i, t, e) {
    return e.get != null ? i._.accessCache[t] = 0 : St(e, "value") && this.set(i, t, e.value, null), Reflect.defineProperty(i, t, e);
  }
};
g.NODE_ENV !== "production" && (Gg.ownKeys = (i) => (N(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(i)));
function qI(i) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => i
  }), Object.keys(Js).forEach((e) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      get: () => Js[e](i),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: he
    });
  }), t;
}
function JI(i) {
  const {
    ctx: t,
    propsOptions: [e]
  } = i;
  e && Object.keys(e).forEach((n) => {
    Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.props[n],
      set: he
    });
  });
}
function QI(i) {
  const { ctx: t, setupState: e } = i;
  Object.keys(yt(e)).forEach((n) => {
    if (!e.__isScriptSetup) {
      if (fh(n[0])) {
        N(
          `setup() return property ${JSON.stringify(
            n
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, n, {
        enumerable: !0,
        configurable: !0,
        get: () => e[n],
        set: he
      });
    }
  });
}
function Ep(i) {
  return X(i) ? i.reduce(
    (t, e) => (t[e] = null, t),
    {}
  ) : i;
}
function ZI() {
  const i = /* @__PURE__ */ Object.create(null);
  return (t, e) => {
    i[e] ? N(`${t} property "${e}" is already defined in ${i[e]}.`) : i[e] = t;
  };
}
let pd = !0;
function XI(i) {
  const t = Jg(i), e = i.proxy, n = i.ctx;
  pd = !1, t.beforeCreate && Ap(t.beforeCreate, i, "bc");
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
    mounted: m,
    beforeUpdate: _,
    updated: A,
    activated: L,
    deactivated: Ht,
    beforeDestroy: dt,
    beforeUnmount: mt,
    destroyed: Nt,
    unmounted: Ye,
    render: j,
    renderTracked: pe,
    renderTriggered: ni,
    errorCaptured: be,
    serverPrefetch: Le,
    // public API
    expose: hn,
    inheritAttrs: Yn,
    // assets
    components: pi,
    directives: nc,
    filters: yp
  } = t, Kn = g.NODE_ENV !== "production" ? ZI() : null;
  if (g.NODE_ENV !== "production") {
    const [wt] = i.propsOptions;
    if (wt)
      for (const _t in wt)
        Kn("Props", _t);
  }
  if (l && tS(l, n, Kn), o)
    for (const wt in o) {
      const _t = o[wt];
      rt(_t) ? (g.NODE_ENV !== "production" ? Object.defineProperty(n, wt, {
        value: _t.bind(e),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : n[wt] = _t.bind(e), g.NODE_ENV !== "production" && Kn("Methods", wt)) : g.NODE_ENV !== "production" && N(
        `Method "${wt}" has type "${typeof _t}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    g.NODE_ENV !== "production" && !rt(s) && N(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const wt = s.call(e, e);
    if (g.NODE_ENV !== "production" && th(wt) && N(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Ct(wt))
      g.NODE_ENV !== "production" && N("data() should return an object.");
    else if (i.data = tu(wt), g.NODE_ENV !== "production")
      for (const _t in wt)
        Kn("Data", _t), fh(_t[0]) || Object.defineProperty(n, _t, {
          configurable: !0,
          enumerable: !0,
          get: () => wt[_t],
          set: he
        });
  }
  if (pd = !0, r)
    for (const wt in r) {
      const _t = r[wt], Mi = rt(_t) ? _t.bind(e, e) : rt(_t.get) ? _t.get.bind(e, e) : he;
      g.NODE_ENV !== "production" && Mi === he && N(`Computed property "${wt}" has no getter.`);
      const Nu = !rt(_t) && rt(_t.set) ? _t.set.bind(e) : g.NODE_ENV !== "production" ? () => {
        N(
          `Write operation failed: computed property "${wt}" is readonly.`
        );
      } : he, Oo = t1({
        get: Mi,
        set: Nu
      });
      Object.defineProperty(n, wt, {
        enumerable: !0,
        configurable: !0,
        get: () => Oo.value,
        set: (ur) => Oo.value = ur
      }), g.NODE_ENV !== "production" && Kn("Computed", wt);
    }
  if (a)
    for (const wt in a)
      qg(a[wt], n, e, wt);
  if (c) {
    const wt = rt(c) ? c.call(e) : c;
    Reflect.ownKeys(wt).forEach((_t) => {
      oS(_t, wt[_t]);
    });
  }
  u && Ap(u, i, "c");
  function Ue(wt, _t) {
    X(_t) ? _t.forEach((Mi) => wt(Mi.bind(e))) : _t && wt(_t.bind(e));
  }
  if (Ue(VI, d), Ue(PI, m), Ue(kI, _), Ue(jI, A), Ue(xI, L), Ue(CI, Ht), Ue(KI, be), Ue(YI, pe), Ue(HI, ni), Ue(zI, mt), Ue(Kg, Ye), Ue(WI, Le), X(hn))
    if (hn.length) {
      const wt = i.exposed || (i.exposed = {});
      hn.forEach((_t) => {
        Object.defineProperty(wt, _t, {
          get: () => e[_t],
          set: (Mi) => e[_t] = Mi,
          enumerable: !0
        });
      });
    } else i.exposed || (i.exposed = {});
  j && i.render === he && (i.render = j), Yn != null && (i.inheritAttrs = Yn), pi && (i.components = pi), nc && (i.directives = nc), Le && Hg(i);
}
function tS(i, t, e = he) {
  X(i) && (i = yd(i));
  for (const n in i) {
    const s = i[n];
    let r;
    Ct(s) ? "default" in s ? r = _c(
      s.from || n,
      s.default,
      !0
    ) : r = _c(s.from || n) : r = _c(s), fe(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r, g.NODE_ENV !== "production" && e("Inject", n);
  }
}
function Ap(i, t, e) {
  en(
    X(i) ? i.map((n) => n.bind(t.proxy)) : i.bind(t.proxy),
    t,
    e
  );
}
function qg(i, t, e, n) {
  let s = n.includes(".") ? cm(e, n) : () => e[n];
  if (Jt(i)) {
    const r = t[i];
    rt(r) ? Vu(s, r) : g.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${i}"`, r);
  } else if (rt(i))
    Vu(s, i.bind(e));
  else if (Ct(i))
    if (X(i))
      i.forEach((r) => qg(r, t, e, n));
    else {
      const r = rt(i.handler) ? i.handler.bind(e) : t[i.handler];
      rt(r) ? Vu(s, r, i) : g.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${i.handler}"`, r);
    }
  else g.NODE_ENV !== "production" && N(`Invalid watch option: "${n}"`, i);
}
function Jg(i) {
  const t = i.type, { mixins: e, extends: n } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = i.appContext, a = r.get(t);
  let c;
  return a ? c = a : !s.length && !e && !n ? c = t : (c = {}, s.length && s.forEach(
    (l) => il(c, l, o, !0)
  ), il(c, t, o)), Ct(t) && r.set(t, c), c;
}
function il(i, t, e, n = !1) {
  const { mixins: s, extends: r } = t;
  r && il(i, r, e, !0), s && s.forEach(
    (o) => il(i, o, e, !0)
  );
  for (const o in t)
    if (n && o === "expose")
      g.NODE_ENV !== "production" && N(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = eS[o] || e && e[o];
      i[o] = a ? a(i[o], t[o]) : t[o];
    }
  return i;
}
const eS = {
  data: Tp,
  props: Fp,
  emits: Fp,
  // objects
  methods: Lo,
  computed: Lo,
  // lifecycle
  beforeCreate: De,
  created: De,
  beforeMount: De,
  mounted: De,
  beforeUpdate: De,
  updated: De,
  beforeDestroy: De,
  beforeUnmount: De,
  destroyed: De,
  unmounted: De,
  activated: De,
  deactivated: De,
  errorCaptured: De,
  serverPrefetch: De,
  // assets
  components: Lo,
  directives: Lo,
  // watch
  watch: nS,
  // provide / inject
  provide: Tp,
  inject: iS
};
function Tp(i, t) {
  return t ? i ? function() {
    return oe(
      rt(i) ? i.call(this, this) : i,
      rt(t) ? t.call(this, this) : t
    );
  } : t : i;
}
function iS(i, t) {
  return Lo(yd(i), yd(t));
}
function yd(i) {
  if (X(i)) {
    const t = {};
    for (let e = 0; e < i.length; e++)
      t[i[e]] = i[e];
    return t;
  }
  return i;
}
function De(i, t) {
  return i ? [...new Set([].concat(i, t))] : t;
}
function Lo(i, t) {
  return i ? oe(/* @__PURE__ */ Object.create(null), i, t) : t;
}
function Fp(i, t) {
  return i ? X(i) && X(t) ? [.../* @__PURE__ */ new Set([...i, ...t])] : oe(
    /* @__PURE__ */ Object.create(null),
    Ep(i),
    Ep(t ?? {})
  ) : t;
}
function nS(i, t) {
  if (!i) return t;
  if (!t) return i;
  const e = oe(/* @__PURE__ */ Object.create(null), i);
  for (const n in t)
    e[n] = De(i[n], t[n]);
  return e;
}
function Qg() {
  return {
    app: null,
    config: {
      isNativeTag: cg,
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
let sS = 0;
function rS(i, t) {
  return function(n, s = null) {
    rt(n) || (n = oe({}, n)), s != null && !Ct(s) && (g.NODE_ENV !== "production" && N("root props passed to app.mount() must be an object."), s = null);
    const r = Qg(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let c = !1;
    const l = r.app = {
      _uid: sS++,
      _component: n,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: zp,
      get config() {
        return r.config;
      },
      set config(u) {
        g.NODE_ENV !== "production" && N(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...d) {
        return o.has(u) ? g.NODE_ENV !== "production" && N("Plugin has already been applied to target app.") : u && rt(u.install) ? (o.add(u), u.install(l, ...d)) : rt(u) ? (o.add(u), u(l, ...d)) : g.NODE_ENV !== "production" && N(
          'A plugin must either be a function or an object with an "install" function.'
        ), l;
      },
      mixin(u) {
        return r.mixins.includes(u) ? g.NODE_ENV !== "production" && N(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), l;
      },
      component(u, d) {
        return g.NODE_ENV !== "production" && vd(u, r.config), d ? (g.NODE_ENV !== "production" && r.components[u] && N(`Component "${u}" has already been registered in target app.`), r.components[u] = d, l) : r.components[u];
      },
      directive(u, d) {
        return g.NODE_ENV !== "production" && Wg(u), d ? (g.NODE_ENV !== "production" && r.directives[u] && N(`Directive "${u}" has already been registered in target app.`), r.directives[u] = d, l) : r.directives[u];
      },
      mount(u, d, m) {
        if (c)
          g.NODE_ENV !== "production" && N(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          g.NODE_ENV !== "production" && u.__vue_app__ && N(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = l._ceVNode || An(n, s);
          return _.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), g.NODE_ENV !== "production" && (r.reload = () => {
            const A = us(_);
            A.el = null, i(A, u, m);
          }), i(_, u, m), c = !0, l._container = u, u.__vue_app__ = l, g.NODE_ENV !== "production" && (l._instance = _.component, SI(l, zp)), _h(_.component);
        }
      },
      onUnmount(u) {
        g.NODE_ENV !== "production" && typeof u != "function" && N(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        c ? (en(
          a,
          l._instance,
          16
        ), i(null, l._container), g.NODE_ENV !== "production" && (l._instance = null, OI(l)), delete l._container.__vue_app__) : g.NODE_ENV !== "production" && N("Cannot unmount an app that is not mounted.");
      },
      provide(u, d) {
        return g.NODE_ENV !== "production" && u in r.provides && (St(r.provides, u) ? N(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : N(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[u] = d, l;
      },
      runWithContext(u) {
        const d = Yr;
        Yr = l;
        try {
          return u();
        } finally {
          Yr = d;
        }
      }
    };
    return l;
  };
}
let Yr = null;
function oS(i, t) {
  if (!me)
    g.NODE_ENV !== "production" && N("provide() can only be used inside setup().");
  else {
    let e = me.provides;
    const n = me.parent && me.parent.provides;
    n === e && (e = me.provides = Object.create(n)), e[i] = t;
  }
}
function _c(i, t, e = !1) {
  const n = gm();
  if (n || Yr) {
    let s = Yr ? Yr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (s && i in s)
      return s[i];
    if (arguments.length > 1)
      return e && rt(t) ? t.call(n && n.proxy) : t;
    g.NODE_ENV !== "production" && N(`injection "${String(i)}" not found.`);
  } else g.NODE_ENV !== "production" && N("inject() can only be used inside setup() or functional components.");
}
const Zg = {}, Xg = () => Object.create(Zg), tm = (i) => Object.getPrototypeOf(i) === Zg;
function aS(i, t, e, n = !1) {
  const s = {}, r = Xg();
  i.propsDefaults = /* @__PURE__ */ Object.create(null), em(i, t, s, r);
  for (const o in i.propsOptions[0])
    o in s || (s[o] = void 0);
  g.NODE_ENV !== "production" && nm(t || {}, s, i), e ? i.props = n ? s : sI(s) : i.type.props ? i.props = s : i.props = r, i.attrs = r;
}
function cS(i) {
  for (; i; ) {
    if (i.type.__hmrId) return !0;
    i = i.parent;
  }
}
function lS(i, t, e, n) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: o }
  } = i, a = yt(s), [c] = i.propsOptions;
  let l = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(g.NODE_ENV !== "production" && cS(i)) && (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = i.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let m = u[d];
        if (su(i.emitsOptions, m))
          continue;
        const _ = t[m];
        if (c)
          if (St(r, m))
            _ !== r[m] && (r[m] = _, l = !0);
          else {
            const A = wi(m);
            s[A] = gd(
              c,
              a,
              A,
              _,
              i,
              !1
            );
          }
        else
          _ !== r[m] && (r[m] = _, l = !0);
      }
    }
  } else {
    em(i, t, s, r) && (l = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !St(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ls(d)) === d || !St(t, u))) && (c ? e && // for camelCase
      (e[d] !== void 0 || // for kebab-case
      e[u] !== void 0) && (s[d] = gd(
        c,
        a,
        d,
        void 0,
        i,
        !0
      )) : delete s[d]);
    if (r !== a)
      for (const d in r)
        (!t || !St(t, d)) && (delete r[d], l = !0);
  }
  l && Hi(i.attrs, "set", ""), g.NODE_ENV !== "production" && nm(t || {}, s, i);
}
function em(i, t, e, n) {
  const [s, r] = i.propsOptions;
  let o = !1, a;
  if (t)
    for (let c in t) {
      if (ta(c))
        continue;
      const l = t[c];
      let u;
      s && St(s, u = wi(c)) ? !r || !r.includes(u) ? e[u] = l : (a || (a = {}))[u] = l : su(i.emitsOptions, c) || (!(c in n) || l !== n[c]) && (n[c] = l, o = !0);
    }
  if (r) {
    const c = yt(e), l = a || xt;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      e[d] = gd(
        s,
        c,
        d,
        l[d],
        i,
        !St(l, d)
      );
    }
  }
  return o;
}
function gd(i, t, e, n, s, r) {
  const o = i[e];
  if (o != null) {
    const a = St(o, "default");
    if (a && n === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && rt(c)) {
        const { propsDefaults: l } = s;
        if (e in l)
          n = l[e];
        else {
          const u = Ca(s);
          n = l[e] = c.call(
            null,
            t
          ), u();
        }
      } else
        n = c;
      s.ce && s.ce._setProp(e, n);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !a ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ls(e)) && (n = !0));
  }
  return n;
}
const uS = /* @__PURE__ */ new WeakMap();
function im(i, t, e = !1) {
  const n = e ? uS : t.propsCache, s = n.get(i);
  if (s)
    return s;
  const r = i.props, o = {}, a = [];
  let c = !1;
  if (!rt(i)) {
    const u = (d) => {
      c = !0;
      const [m, _] = im(d, t, !0);
      oe(o, m), _ && a.push(..._);
    };
    !e && t.mixins.length && t.mixins.forEach(u), i.extends && u(i.extends), i.mixins && i.mixins.forEach(u);
  }
  if (!r && !c)
    return Ct(i) && n.set(i, Wr), Wr;
  if (X(r))
    for (let u = 0; u < r.length; u++) {
      g.NODE_ENV !== "production" && !Jt(r[u]) && N("props must be strings when using array syntax.", r[u]);
      const d = wi(r[u]);
      Mp(d) && (o[d] = xt);
    }
  else if (r) {
    g.NODE_ENV !== "production" && !Ct(r) && N("invalid props options", r);
    for (const u in r) {
      const d = wi(u);
      if (Mp(d)) {
        const m = r[u], _ = o[d] = X(m) || rt(m) ? { type: m } : oe({}, m), A = _.type;
        let L = !1, Ht = !0;
        if (X(A))
          for (let dt = 0; dt < A.length; ++dt) {
            const mt = A[dt], Nt = rt(mt) && mt.name;
            if (Nt === "Boolean") {
              L = !0;
              break;
            } else Nt === "String" && (Ht = !1);
          }
        else
          L = rt(A) && A.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = L, _[
          1
          /* shouldCastTrue */
        ] = Ht, (L || St(_, "default")) && a.push(d);
      }
    }
  }
  const l = [o, a];
  return Ct(i) && n.set(i, l), l;
}
function Mp(i) {
  return i[0] !== "$" && !ta(i) ? !0 : (g.NODE_ENV !== "production" && N(`Invalid prop name: "${i}" is a reserved property.`), !1);
}
function dS(i) {
  return i === null ? "null" : typeof i == "function" ? i.name || "" : typeof i == "object" && i.constructor && i.constructor.name || "";
}
function nm(i, t, e) {
  const n = yt(t), s = e.propsOptions[0], r = Object.keys(i).map((o) => wi(o));
  for (const o in s) {
    let a = s[o];
    a != null && hS(
      o,
      n[o],
      a,
      g.NODE_ENV !== "production" ? Qi(n) : n,
      !r.includes(o)
    );
  }
}
function hS(i, t, e, n, s) {
  const { type: r, required: o, validator: a, skipCheck: c } = e;
  if (o && s) {
    N('Missing required prop: "' + i + '"');
    return;
  }
  if (!(t == null && !o)) {
    if (r != null && r !== !0 && !c) {
      let l = !1;
      const u = X(r) ? r : [r], d = [];
      for (let m = 0; m < u.length && !l; m++) {
        const { valid: _, expectedType: A } = pS(t, u[m]);
        d.push(A || ""), l = _;
      }
      if (!l) {
        N(yS(i, t, d));
        return;
      }
    }
    a && !a(t, n) && N('Invalid prop: custom validator check failed for prop "' + i + '".');
  }
}
const fS = /* @__PURE__ */ Cn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function pS(i, t) {
  let e;
  const n = dS(t);
  if (n === "null")
    e = i === null;
  else if (fS(n)) {
    const s = typeof i;
    e = s === n.toLowerCase(), !e && s === "object" && (e = i instanceof t);
  } else n === "Object" ? e = Ct(i) : n === "Array" ? e = X(i) : e = i instanceof t;
  return {
    valid: e,
    expectedType: n
  };
}
function yS(i, t, e) {
  if (e.length === 0)
    return `Prop type [] for prop "${i}" won't match anything. Did you mean to use type Array instead?`;
  let n = `Invalid prop: type check failed for prop "${i}". Expected ${e.map(Ql).join(" | ")}`;
  const s = e[0], r = eh(t), o = Rp(t, s), a = Rp(t, r);
  return e.length === 1 && Lp(s) && !gS(s, r) && (n += ` with value ${o}`), n += `, got ${r} `, Lp(r) && (n += `with value ${a}.`), n;
}
function Rp(i, t) {
  return t === "String" ? `"${i}"` : t === "Number" ? `${Number(i)}` : `${i}`;
}
function Lp(i) {
  return ["string", "number", "boolean"].some((e) => i.toLowerCase() === e);
}
function gS(...i) {
  return i.some((t) => t.toLowerCase() === "boolean");
}
const ph = (i) => i === "_" || i === "_ctx" || i === "$stable", yh = (i) => X(i) ? i.map(vi) : [vi(i)], mS = (i, t, e) => {
  if (t._n)
    return t;
  const n = FI((...s) => (g.NODE_ENV !== "production" && me && !(e === null && Ze) && !(e && e.root !== me.root) && N(
    `Slot "${i}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), yh(t(...s))), e);
  return n._c = !1, n;
}, sm = (i, t, e) => {
  const n = i._ctx;
  for (const s in i) {
    if (ph(s)) continue;
    const r = i[s];
    if (rt(r))
      t[s] = mS(s, r, n);
    else if (r != null) {
      g.NODE_ENV !== "production" && N(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const o = yh(r);
      t[s] = () => o;
    }
  }
}, rm = (i, t) => {
  g.NODE_ENV !== "production" && !hh(i.vnode) && N(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const e = yh(t);
  i.slots.default = () => e;
}, md = (i, t, e) => {
  for (const n in t)
    (e || !ph(n)) && (i[n] = t[n]);
}, _S = (i, t, e) => {
  const n = i.slots = Xg();
  if (i.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (md(n, t, e), e && Gc(n, "_", s, !0)) : sm(t, n);
  } else t && rm(i, t);
}, bS = (i, t, e) => {
  const { vnode: n, slots: s } = i;
  let r = !0, o = xt;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? g.NODE_ENV !== "production" && Zi ? (md(s, t, e), Hi(i, "set", "$slots")) : e && a === 1 ? r = !1 : md(s, t, e) : (r = !t.$stable, sm(t, s)), o = t;
  } else t && (rm(i, t), o = { default: 1 });
  if (r)
    for (const a in s)
      !ph(a) && o[a] == null && delete s[a];
};
let To, On;
function hr(i, t) {
  i.appContext.config.performance && nl() && On.mark(`vue-${t}-${i.uid}`), g.NODE_ENV !== "production" && EI(i, t, nl() ? On.now() : Date.now());
}
function fr(i, t) {
  if (i.appContext.config.performance && nl()) {
    const e = `vue-${t}-${i.uid}`, n = e + ":end", s = `<${ou(i, i.type)}> ${t}`;
    On.mark(n), On.measure(s, e, n), On.clearMeasures(s), On.clearMarks(e), On.clearMarks(n);
  }
  g.NODE_ENV !== "production" && AI(i, t, nl() ? On.now() : Date.now());
}
function nl() {
  return To !== void 0 || (typeof window < "u" && window.performance ? (To = !0, On = window.performance) : To = !1), To;
}
function vS() {
  const i = [];
  if (g.NODE_ENV !== "production" && i.length) {
    const t = i.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${i.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ke = US;
function wS(i) {
  return IS(i);
}
function IS(i, t) {
  vS();
  const e = Ra();
  e.__VUE__ = !0, g.NODE_ENV !== "production" && Pg(e.__VUE_DEVTOOLS_GLOBAL_HOOK__, e);
  const {
    insert: n,
    remove: s,
    patchProp: r,
    createElement: o,
    createText: a,
    createComment: c,
    setText: l,
    setElementText: u,
    parentNode: d,
    nextSibling: m,
    setScopeId: _ = he,
    insertStaticContent: A
  } = i, L = (h, p, b, S = null, w = null, I = null, T = void 0, B = null, D = g.NODE_ENV !== "production" && Zi ? !1 : !!p.dynamicChildren) => {
    if (h === p)
      return;
    h && !Fo(h, p) && (S = sc(h), Gn(h, w, I, !0), h = null), p.patchFlag === -2 && (D = !1, p.dynamicChildren = null);
    const { type: O, ref: Q, shapeFlag: F } = p;
    switch (O) {
      case xa:
        Ht(h, p, b, S);
        break;
      case ti:
        dt(h, p, b, S);
        break;
      case vc:
        h == null ? mt(p, b, S, T) : g.NODE_ENV !== "production" && Nt(h, p, b, T);
        break;
      case Je:
        nc(
          h,
          p,
          b,
          S,
          w,
          I,
          T,
          B,
          D
        );
        break;
      default:
        F & 1 ? pe(
          h,
          p,
          b,
          S,
          w,
          I,
          T,
          B,
          D
        ) : F & 6 ? yp(
          h,
          p,
          b,
          S,
          w,
          I,
          T,
          B,
          D
        ) : F & 64 || F & 128 ? O.process(
          h,
          p,
          b,
          S,
          w,
          I,
          T,
          B,
          D,
          Bo
        ) : g.NODE_ENV !== "production" && N("Invalid VNode type:", O, `(${typeof O})`);
    }
    Q != null && w ? na(Q, h && h.ref, I, p || h, !p) : Q == null && h && h.ref != null && na(h.ref, null, I, h, !0);
  }, Ht = (h, p, b, S) => {
    if (h == null)
      n(
        p.el = a(p.children),
        b,
        S
      );
    else {
      const w = p.el = h.el;
      p.children !== h.children && l(w, p.children);
    }
  }, dt = (h, p, b, S) => {
    h == null ? n(
      p.el = c(p.children || ""),
      b,
      S
    ) : p.el = h.el;
  }, mt = (h, p, b, S) => {
    [h.el, h.anchor] = A(
      h.children,
      p,
      b,
      S,
      h.el,
      h.anchor
    );
  }, Nt = (h, p, b, S) => {
    if (p.children !== h.children) {
      const w = m(h.anchor);
      j(h), [p.el, p.anchor] = A(
        p.children,
        b,
        w,
        S
      );
    } else
      p.el = h.el, p.anchor = h.anchor;
  }, Ye = ({ el: h, anchor: p }, b, S) => {
    let w;
    for (; h && h !== p; )
      w = m(h), n(h, b, S), h = w;
    n(p, b, S);
  }, j = ({ el: h, anchor: p }) => {
    let b;
    for (; h && h !== p; )
      b = m(h), s(h), h = b;
    s(p);
  }, pe = (h, p, b, S, w, I, T, B, D) => {
    p.type === "svg" ? T = "svg" : p.type === "math" && (T = "mathml"), h == null ? ni(
      p,
      b,
      S,
      w,
      I,
      T,
      B,
      D
    ) : hn(
      h,
      p,
      w,
      I,
      T,
      B,
      D
    );
  }, ni = (h, p, b, S, w, I, T, B) => {
    let D, O;
    const { props: Q, shapeFlag: F, transition: C, dirs: lt } = h;
    if (D = h.el = o(
      h.type,
      I,
      Q && Q.is,
      Q
    ), F & 8 ? u(D, h.children) : F & 16 && Le(
      h.children,
      D,
      null,
      S,
      w,
      $u(h, I),
      T,
      B
    ), lt && Ns(h, null, S, "created"), be(D, h, h.scopeId, T, S), Q) {
      for (const $t in Q)
        $t !== "value" && !ta($t) && r(D, $t, null, Q[$t], I, S);
      "value" in Q && r(D, "value", null, Q.value, I), (O = Q.onVnodeBeforeMount) && Ci(O, S, h);
    }
    g.NODE_ENV !== "production" && (Gc(D, "__vnode", h, !0), Gc(D, "__vueParentComponent", S, !0)), lt && Ns(h, null, S, "beforeMount");
    const It = SS(w, C);
    It && C.beforeEnter(D), n(D, p, b), ((O = Q && Q.onVnodeMounted) || It || lt) && Ke(() => {
      O && Ci(O, S, h), It && C.enter(D), lt && Ns(h, null, S, "mounted");
    }, w);
  }, be = (h, p, b, S, w) => {
    if (b && _(h, b), S)
      for (let I = 0; I < S.length; I++)
        _(h, S[I]);
    if (w) {
      let I = w.subTree;
      if (g.NODE_ENV !== "production" && I.patchFlag > 0 && I.patchFlag & 2048 && (I = gh(I.children) || I), p === I || dm(I.type) && (I.ssContent === p || I.ssFallback === p)) {
        const T = w.vnode;
        be(
          h,
          T,
          T.scopeId,
          T.slotScopeIds,
          w.parent
        );
      }
    }
  }, Le = (h, p, b, S, w, I, T, B, D = 0) => {
    for (let O = D; O < h.length; O++) {
      const Q = h[O] = B ? ns(h[O]) : vi(h[O]);
      L(
        null,
        Q,
        p,
        b,
        S,
        w,
        I,
        T,
        B
      );
    }
  }, hn = (h, p, b, S, w, I, T) => {
    const B = p.el = h.el;
    g.NODE_ENV !== "production" && (B.__vnode = p);
    let { patchFlag: D, dynamicChildren: O, dirs: Q } = p;
    D |= h.patchFlag & 16;
    const F = h.props || xt, C = p.props || xt;
    let lt;
    if (b && Es(b, !1), (lt = C.onVnodeBeforeUpdate) && Ci(lt, b, p, h), Q && Ns(p, h, b, "beforeUpdate"), b && Es(b, !0), g.NODE_ENV !== "production" && Zi && (D = 0, T = !1, O = null), (F.innerHTML && C.innerHTML == null || F.textContent && C.textContent == null) && u(B, ""), O ? (Yn(
      h.dynamicChildren,
      O,
      B,
      b,
      S,
      $u(p, w),
      I
    ), g.NODE_ENV !== "production" && bc(h, p)) : T || Mi(
      h,
      p,
      B,
      null,
      b,
      S,
      $u(p, w),
      I,
      !1
    ), D > 0) {
      if (D & 16)
        pi(B, F, C, b, w);
      else if (D & 2 && F.class !== C.class && r(B, "class", null, C.class, w), D & 4 && r(B, "style", F.style, C.style, w), D & 8) {
        const It = p.dynamicProps;
        for (let $t = 0; $t < It.length; $t++) {
          const Lt = It[$t], xe = F[Lt], Ce = C[Lt];
          (Ce !== xe || Lt === "value") && r(B, Lt, xe, Ce, w, b);
        }
      }
      D & 1 && h.children !== p.children && u(B, p.children);
    } else !T && O == null && pi(B, F, C, b, w);
    ((lt = C.onVnodeUpdated) || Q) && Ke(() => {
      lt && Ci(lt, b, p, h), Q && Ns(p, h, b, "updated");
    }, S);
  }, Yn = (h, p, b, S, w, I, T) => {
    for (let B = 0; B < p.length; B++) {
      const D = h[B], O = p[B], Q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === Je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Fo(D, O) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? d(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          b
        )
      );
      L(
        D,
        O,
        Q,
        null,
        S,
        w,
        I,
        T,
        !0
      );
    }
  }, pi = (h, p, b, S, w) => {
    if (p !== b) {
      if (p !== xt)
        for (const I in p)
          !ta(I) && !(I in b) && r(
            h,
            I,
            p[I],
            null,
            w,
            S
          );
      for (const I in b) {
        if (ta(I)) continue;
        const T = b[I], B = p[I];
        T !== B && I !== "value" && r(h, I, B, T, w, S);
      }
      "value" in b && r(h, "value", p.value, b.value, w);
    }
  }, nc = (h, p, b, S, w, I, T, B, D) => {
    const O = p.el = h ? h.el : a(""), Q = p.anchor = h ? h.anchor : a("");
    let { patchFlag: F, dynamicChildren: C, slotScopeIds: lt } = p;
    g.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Zi || F & 2048) && (F = 0, D = !1, C = null), lt && (B = B ? B.concat(lt) : lt), h == null ? (n(O, b, S), n(Q, b, S), Le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      b,
      Q,
      w,
      I,
      T,
      B,
      D
    )) : F > 0 && F & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (Yn(
      h.dynamicChildren,
      C,
      b,
      w,
      I,
      T,
      B
    ), g.NODE_ENV !== "production" ? bc(h, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || w && p === w.subTree) && bc(
        h,
        p,
        !0
        /* shallow */
      )
    )) : Mi(
      h,
      p,
      b,
      Q,
      w,
      I,
      T,
      B,
      D
    );
  }, yp = (h, p, b, S, w, I, T, B, D) => {
    p.slotScopeIds = B, h == null ? p.shapeFlag & 512 ? w.ctx.activate(
      p,
      b,
      S,
      T,
      D
    ) : Kn(
      p,
      b,
      S,
      w,
      I,
      T,
      D
    ) : Ue(h, p, D);
  }, Kn = (h, p, b, S, w, I, T) => {
    const B = h.component = HS(
      h,
      S,
      w
    );
    if (g.NODE_ENV !== "production" && B.type.__hmrId && bI(B), g.NODE_ENV !== "production" && (yc(h), hr(B, "mount")), hh(h) && (B.ctx.renderer = Bo), g.NODE_ENV !== "production" && hr(B, "init"), KS(B, !1, T), g.NODE_ENV !== "production" && fr(B, "init"), g.NODE_ENV !== "production" && Zi && (h.el = null), B.asyncDep) {
      if (w && w.registerDep(B, wt, T), !h.el) {
        const D = B.subTree = An(ti);
        dt(null, D, p, b), h.placeholder = D.el;
      }
    } else
      wt(
        B,
        h,
        p,
        b,
        w,
        I,
        T
      );
    g.NODE_ENV !== "production" && (gc(), fr(B, "mount"));
  }, Ue = (h, p, b) => {
    const S = p.component = h.component;
    if (RS(h, p, b))
      if (S.asyncDep && !S.asyncResolved) {
        g.NODE_ENV !== "production" && yc(p), _t(S, p, b), g.NODE_ENV !== "production" && gc();
        return;
      } else
        S.next = p, S.update();
    else
      p.el = h.el, S.vnode = p;
  }, wt = (h, p, b, S, w, I, T) => {
    const B = () => {
      if (h.isMounted) {
        let { next: F, bu: C, u: lt, parent: It, vnode: $t } = h;
        {
          const Li = om(h);
          if (Li) {
            F && (F.el = $t.el, _t(h, F, T)), Li.asyncDep.then(() => {
              h.isUnmounted || B();
            });
            return;
          }
        }
        let Lt = F, xe;
        g.NODE_ENV !== "production" && yc(F || h.vnode), Es(h, !1), F ? (F.el = $t.el, _t(h, F, T)) : F = $t, C && Eo(C), (xe = F.props && F.props.onVnodeBeforeUpdate) && Ci(xe, It, F, $t), Es(h, !0), g.NODE_ENV !== "production" && hr(h, "render");
        const Ce = xp(h);
        g.NODE_ENV !== "production" && fr(h, "render");
        const Ri = h.subTree;
        h.subTree = Ce, g.NODE_ENV !== "production" && hr(h, "patch"), L(
          Ri,
          Ce,
          // parent may have changed if it's in a teleport
          d(Ri.el),
          // anchor may have changed if it's in a fragment
          sc(Ri),
          h,
          w,
          I
        ), g.NODE_ENV !== "production" && fr(h, "patch"), F.el = Ce.el, Lt === null && LS(h, Ce.el), lt && Ke(lt, w), (xe = F.props && F.props.onVnodeUpdated) && Ke(
          () => Ci(xe, It, F, $t),
          w
        ), g.NODE_ENV !== "production" && kg(h), g.NODE_ENV !== "production" && gc();
      } else {
        let F;
        const { el: C, props: lt } = p, { bm: It, m: $t, parent: Lt, root: xe, type: Ce } = h, Ri = sa(p);
        Es(h, !1), It && Eo(It), !Ri && (F = lt && lt.onVnodeBeforeMount) && Ci(F, Lt, p), Es(h, !0);
        {
          xe.ce && // @ts-expect-error _def is private
          xe.ce._def.shadowRoot !== !1 && xe.ce._injectChildStyle(Ce), g.NODE_ENV !== "production" && hr(h, "render");
          const Li = h.subTree = xp(h);
          g.NODE_ENV !== "production" && fr(h, "render"), g.NODE_ENV !== "production" && hr(h, "patch"), L(
            null,
            Li,
            b,
            S,
            h,
            w,
            I
          ), g.NODE_ENV !== "production" && fr(h, "patch"), p.el = Li.el;
        }
        if ($t && Ke($t, w), !Ri && (F = lt && lt.onVnodeMounted)) {
          const Li = p;
          Ke(
            () => Ci(F, Lt, Li),
            w
          );
        }
        (p.shapeFlag & 256 || Lt && sa(Lt.vnode) && Lt.vnode.shapeFlag & 256) && h.a && Ke(h.a, w), h.isMounted = !0, g.NODE_ENV !== "production" && DI(h), p = b = S = null;
      }
    };
    h.scope.on();
    const D = h.effect = new yg(B);
    h.scope.off();
    const O = h.update = D.run.bind(D), Q = h.job = D.runIfDirty.bind(D);
    Q.i = h, Q.id = h.uid, D.scheduler = () => iu(Q), Es(h, !0), g.NODE_ENV !== "production" && (D.onTrack = h.rtc ? (F) => Eo(h.rtc, F) : void 0, D.onTrigger = h.rtg ? (F) => Eo(h.rtg, F) : void 0), O();
  }, _t = (h, p, b) => {
    p.component = h;
    const S = h.vnode.props;
    h.vnode = p, h.next = null, lS(h, p.props, S, b), bS(h, p.children, b), Bi(), Op(h), Ni();
  }, Mi = (h, p, b, S, w, I, T, B, D = !1) => {
    const O = h && h.children, Q = h ? h.shapeFlag : 0, F = p.children, { patchFlag: C, shapeFlag: lt } = p;
    if (C > 0) {
      if (C & 128) {
        Oo(
          O,
          F,
          b,
          S,
          w,
          I,
          T,
          B,
          D
        );
        return;
      } else if (C & 256) {
        Nu(
          O,
          F,
          b,
          S,
          w,
          I,
          T,
          B,
          D
        );
        return;
      }
    }
    lt & 8 ? (Q & 16 && Do(O, w, I), F !== O && u(b, F)) : Q & 16 ? lt & 16 ? Oo(
      O,
      F,
      b,
      S,
      w,
      I,
      T,
      B,
      D
    ) : Do(O, w, I, !0) : (Q & 8 && u(b, ""), lt & 16 && Le(
      F,
      b,
      S,
      w,
      I,
      T,
      B,
      D
    ));
  }, Nu = (h, p, b, S, w, I, T, B, D) => {
    h = h || Wr, p = p || Wr;
    const O = h.length, Q = p.length, F = Math.min(O, Q);
    let C;
    for (C = 0; C < F; C++) {
      const lt = p[C] = D ? ns(p[C]) : vi(p[C]);
      L(
        h[C],
        lt,
        b,
        null,
        w,
        I,
        T,
        B,
        D
      );
    }
    O > Q ? Do(
      h,
      w,
      I,
      !0,
      !1,
      F
    ) : Le(
      p,
      b,
      S,
      w,
      I,
      T,
      B,
      D,
      F
    );
  }, Oo = (h, p, b, S, w, I, T, B, D) => {
    let O = 0;
    const Q = p.length;
    let F = h.length - 1, C = Q - 1;
    for (; O <= F && O <= C; ) {
      const lt = h[O], It = p[O] = D ? ns(p[O]) : vi(p[O]);
      if (Fo(lt, It))
        L(
          lt,
          It,
          b,
          null,
          w,
          I,
          T,
          B,
          D
        );
      else
        break;
      O++;
    }
    for (; O <= F && O <= C; ) {
      const lt = h[F], It = p[C] = D ? ns(p[C]) : vi(p[C]);
      if (Fo(lt, It))
        L(
          lt,
          It,
          b,
          null,
          w,
          I,
          T,
          B,
          D
        );
      else
        break;
      F--, C--;
    }
    if (O > F) {
      if (O <= C) {
        const lt = C + 1, It = lt < Q ? p[lt].el : S;
        for (; O <= C; )
          L(
            null,
            p[O] = D ? ns(p[O]) : vi(p[O]),
            b,
            It,
            w,
            I,
            T,
            B,
            D
          ), O++;
      }
    } else if (O > C)
      for (; O <= F; )
        Gn(h[O], w, I, !0), O++;
    else {
      const lt = O, It = O, $t = /* @__PURE__ */ new Map();
      for (O = It; O <= C; O++) {
        const Oe = p[O] = D ? ns(p[O]) : vi(p[O]);
        Oe.key != null && (g.NODE_ENV !== "production" && $t.has(Oe.key) && N(
          "Duplicate keys found during update:",
          JSON.stringify(Oe.key),
          "Make sure keys are unique."
        ), $t.set(Oe.key, O));
      }
      let Lt, xe = 0;
      const Ce = C - It + 1;
      let Ri = !1, Li = 0;
      const No = new Array(Ce);
      for (O = 0; O < Ce; O++) No[O] = 0;
      for (O = lt; O <= F; O++) {
        const Oe = h[O];
        if (xe >= Ce) {
          Gn(Oe, w, I, !0);
          continue;
        }
        let Ui;
        if (Oe.key != null)
          Ui = $t.get(Oe.key);
        else
          for (Lt = It; Lt <= C; Lt++)
            if (No[Lt - It] === 0 && Fo(Oe, p[Lt])) {
              Ui = Lt;
              break;
            }
        Ui === void 0 ? Gn(Oe, w, I, !0) : (No[Ui - It] = O + 1, Ui >= Li ? Li = Ui : Ri = !0, L(
          Oe,
          p[Ui],
          b,
          null,
          w,
          I,
          T,
          B,
          D
        ), xe++);
      }
      const mp = Ri ? OS(No) : Wr;
      for (Lt = mp.length - 1, O = Ce - 1; O >= 0; O--) {
        const Oe = It + O, Ui = p[Oe], _p = p[Oe + 1], bp = Oe + 1 < Q ? (
          // #13559, fallback to el placeholder for unresolved async component
          _p.el || _p.placeholder
        ) : S;
        No[O] === 0 ? L(
          null,
          Ui,
          b,
          bp,
          w,
          I,
          T,
          B,
          D
        ) : Ri && (Lt < 0 || O !== mp[Lt] ? ur(Ui, b, bp, 2) : Lt--);
      }
    }
  }, ur = (h, p, b, S, w = null) => {
    const { el: I, type: T, transition: B, children: D, shapeFlag: O } = h;
    if (O & 6) {
      ur(h.component.subTree, p, b, S);
      return;
    }
    if (O & 128) {
      h.suspense.move(p, b, S);
      return;
    }
    if (O & 64) {
      T.move(h, p, b, Bo);
      return;
    }
    if (T === Je) {
      n(I, p, b);
      for (let F = 0; F < D.length; F++)
        ur(D[F], p, b, S);
      n(h.anchor, p, b);
      return;
    }
    if (T === vc) {
      Ye(h, p, b);
      return;
    }
    if (S !== 2 && O & 1 && B)
      if (S === 0)
        B.beforeEnter(I), n(I, p, b), Ke(() => B.enter(I), w);
      else {
        const { leave: F, delayLeave: C, afterLeave: lt } = B, It = () => {
          h.ctx.isUnmounted ? s(I) : n(I, p, b);
        }, $t = () => {
          I._isLeaving && I[LI](
            !0
            /* cancelled */
          ), F(I, () => {
            It(), lt && lt();
          });
        };
        C ? C(I, It, $t) : $t();
      }
    else
      n(I, p, b);
  }, Gn = (h, p, b, S = !1, w = !1) => {
    const {
      type: I,
      props: T,
      ref: B,
      children: D,
      dynamicChildren: O,
      shapeFlag: Q,
      patchFlag: F,
      dirs: C,
      cacheIndex: lt
    } = h;
    if (F === -2 && (w = !1), B != null && (Bi(), na(B, null, b, h, !0), Ni()), lt != null && (p.renderCache[lt] = void 0), Q & 256) {
      p.ctx.deactivate(h);
      return;
    }
    const It = Q & 1 && C, $t = !sa(h);
    let Lt;
    if ($t && (Lt = T && T.onVnodeBeforeUnmount) && Ci(Lt, p, h), Q & 6)
      vw(h.component, b, S);
    else {
      if (Q & 128) {
        h.suspense.unmount(b, S);
        return;
      }
      It && Ns(h, null, p, "beforeUnmount"), Q & 64 ? h.type.remove(
        h,
        p,
        b,
        Bo,
        S
      ) : O && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !O.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== Je || F > 0 && F & 64) ? Do(
        O,
        p,
        b,
        !1,
        !0
      ) : (I === Je && F & 384 || !w && Q & 16) && Do(D, p, b), S && Eu(h);
    }
    ($t && (Lt = T && T.onVnodeUnmounted) || It) && Ke(() => {
      Lt && Ci(Lt, p, h), It && Ns(h, null, p, "unmounted");
    }, b);
  }, Eu = (h) => {
    const { type: p, el: b, anchor: S, transition: w } = h;
    if (p === Je) {
      g.NODE_ENV !== "production" && h.patchFlag > 0 && h.patchFlag & 2048 && w && !w.persisted ? h.children.forEach((T) => {
        T.type === ti ? s(T.el) : Eu(T);
      }) : bw(b, S);
      return;
    }
    if (p === vc) {
      j(h);
      return;
    }
    const I = () => {
      s(b), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (h.shapeFlag & 1 && w && !w.persisted) {
      const { leave: T, delayLeave: B } = w, D = () => T(b, I);
      B ? B(h.el, I, D) : D();
    } else
      I();
  }, bw = (h, p) => {
    let b;
    for (; h !== p; )
      b = m(h), s(h), h = b;
    s(p);
  }, vw = (h, p, b) => {
    g.NODE_ENV !== "production" && h.type.__hmrId && vI(h);
    const { bum: S, scope: w, job: I, subTree: T, um: B, m: D, a: O } = h;
    Up(D), Up(O), S && Eo(S), w.stop(), I && (I.flags |= 8, Gn(T, h, p, b)), B && Ke(B, p), Ke(() => {
      h.isUnmounted = !0;
    }, p), g.NODE_ENV !== "production" && NI(h);
  }, Do = (h, p, b, S = !1, w = !1, I = 0) => {
    for (let T = I; T < h.length; T++)
      Gn(h[T], p, b, S, w);
  }, sc = (h) => {
    if (h.shapeFlag & 6)
      return sc(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const p = m(h.anchor || h.el), b = p && p[MI];
    return b ? m(b) : p;
  };
  let Au = !1;
  const gp = (h, p, b) => {
    h == null ? p._vnode && Gn(p._vnode, null, null, !0) : L(
      p._vnode || null,
      h,
      p,
      null,
      null,
      null,
      b
    ), p._vnode = h, Au || (Au = !0, Op(), Cg(), Au = !1);
  }, Bo = {
    p: L,
    um: Gn,
    m: ur,
    r: Eu,
    mt: Kn,
    mc: Le,
    pc: Mi,
    pbc: Yn,
    n: sc,
    o: i
  };
  return {
    render: gp,
    hydrate: void 0,
    createApp: rS(gp)
  };
}
function $u({ type: i, props: t }, e) {
  return e === "svg" && i === "foreignObject" || e === "mathml" && i === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : e;
}
function Es({ effect: i, job: t }, e) {
  e ? (i.flags |= 32, t.flags |= 4) : (i.flags &= -33, t.flags &= -5);
}
function SS(i, t) {
  return (!i || i && !i.pendingBranch) && t && !t.persisted;
}
function bc(i, t, e = !1) {
  const n = i.children, s = t.children;
  if (X(n) && X(s))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let a = s[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[r] = ns(s[r]), a.el = o.el), !e && a.patchFlag !== -2 && bc(o, a)), a.type === xa && // avoid cached text nodes retaining detached dom nodes
      a.patchFlag !== -1 && (a.el = o.el), a.type === ti && !a.el && (a.el = o.el), g.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function OS(i) {
  const t = i.slice(), e = [0];
  let n, s, r, o, a;
  const c = i.length;
  for (n = 0; n < c; n++) {
    const l = i[n];
    if (l !== 0) {
      if (s = e[e.length - 1], i[s] < l) {
        t[n] = s, e.push(n);
        continue;
      }
      for (r = 0, o = e.length - 1; r < o; )
        a = r + o >> 1, i[e[a]] < l ? r = a + 1 : o = a;
      l < i[e[r]] && (r > 0 && (t[n] = e[r - 1]), e[r] = n);
    }
  }
  for (r = e.length, o = e[r - 1]; r-- > 0; )
    e[r] = o, o = t[o];
  return e;
}
function om(i) {
  const t = i.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : om(t);
}
function Up(i) {
  if (i)
    for (let t = 0; t < i.length; t++)
      i[t].flags |= 8;
}
const DS = Symbol.for("v-scx"), BS = () => {
  {
    const i = _c(DS);
    return i || g.NODE_ENV !== "production" && N(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), i;
  }
};
function Vu(i, t, e) {
  return g.NODE_ENV !== "production" && !rt(t) && N(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), am(i, t, e);
}
function am(i, t, e = xt) {
  const { immediate: n, deep: s, flush: r, once: o } = e;
  g.NODE_ENV !== "production" && !t && (n !== void 0 && N(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && N(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && N(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = oe({}, e);
  g.NODE_ENV !== "production" && (a.onWarn = N);
  const c = t && n || !t && r !== "post";
  let l;
  if (fa) {
    if (r === "sync") {
      const _ = BS();
      l = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!c) {
      const _ = () => {
      };
      return _.stop = he, _.resume = he, _.pause = he, _;
    }
  }
  const u = me;
  a.call = (_, A, L) => en(_, u, A, L);
  let d = !1;
  r === "post" ? a.scheduler = (_) => {
    Ke(_, u && u.suspense);
  } : r !== "sync" && (d = !0, a.scheduler = (_, A) => {
    A ? _() : iu(_);
  }), a.augmentJob = (_) => {
    t && (_.flags |= 4), d && (_.flags |= 2, u && (_.id = u.uid, _.i = u));
  };
  const m = uI(i, t, a);
  return fa && (l ? l.push(m) : c && m()), m;
}
function NS(i, t, e) {
  const n = this.proxy, s = Jt(i) ? i.includes(".") ? cm(n, i) : () => n[i] : i.bind(n, n);
  let r;
  rt(t) ? r = t : (r = t.handler, e = t);
  const o = Ca(this), a = am(s, r.bind(n), e);
  return o(), a;
}
function cm(i, t) {
  const e = t.split(".");
  return () => {
    let n = i;
    for (let s = 0; s < e.length && n; s++)
      n = n[e[s]];
    return n;
  };
}
const ES = (i, t) => t === "modelValue" || t === "model-value" ? i.modelModifiers : i[`${t}Modifiers`] || i[`${wi(t)}Modifiers`] || i[`${ls(t)}Modifiers`];
function AS(i, t, ...e) {
  if (i.isUnmounted) return;
  const n = i.vnode.props || xt;
  if (g.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = i;
    if (u)
      if (!(t in u))
        (!d || !(Fs(wi(t)) in d)) && N(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Fs(wi(t))}" prop.`
        );
      else {
        const m = u[t];
        rt(m) && (m(...e) || N(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = e;
  const r = t.startsWith("update:"), o = r && ES(n, t.slice(7));
  if (o && (o.trim && (s = e.map((u) => Jt(u) ? u.trim() : u)), o.number && (s = e.map(Dw))), g.NODE_ENV !== "production" && TI(i, t, s), g.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && n[Fs(u)] && N(
      `Event "${u}" is emitted in component ${ou(
        i,
        i.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ls(
        t
      )}" instead of "${t}".`
    );
  }
  let a, c = n[a = Fs(t)] || // also try camelCase event handler (#2249)
  n[a = Fs(wi(t))];
  !c && r && (c = n[a = Fs(ls(t))]), c && en(
    c,
    i,
    6,
    s
  );
  const l = n[a + "Once"];
  if (l) {
    if (!i.emitted)
      i.emitted = {};
    else if (i.emitted[a])
      return;
    i.emitted[a] = !0, en(
      l,
      i,
      6,
      s
    );
  }
}
const TS = /* @__PURE__ */ new WeakMap();
function lm(i, t, e = !1) {
  const n = e ? TS : t.emitsCache, s = n.get(i);
  if (s !== void 0)
    return s;
  const r = i.emits;
  let o = {}, a = !1;
  if (!rt(i)) {
    const c = (l) => {
      const u = lm(l, t, !0);
      u && (a = !0, oe(o, u));
    };
    !e && t.mixins.length && t.mixins.forEach(c), i.extends && c(i.extends), i.mixins && i.mixins.forEach(c);
  }
  return !r && !a ? (Ct(i) && n.set(i, null), null) : (X(r) ? r.forEach((c) => o[c] = null) : oe(o, r), Ct(i) && n.set(i, o), o);
}
function su(i, t) {
  return !i || !Ma(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), St(i, t[0].toLowerCase() + t.slice(1)) || St(i, ls(t)) || St(i, t));
}
let _d = !1;
function sl() {
  _d = !0;
}
function xp(i) {
  const {
    type: t,
    vnode: e,
    proxy: n,
    withProxy: s,
    propsOptions: [r],
    slots: o,
    attrs: a,
    emit: c,
    render: l,
    renderCache: u,
    props: d,
    data: m,
    setupState: _,
    ctx: A,
    inheritAttrs: L
  } = i, Ht = tl(i);
  let dt, mt;
  g.NODE_ENV !== "production" && (_d = !1);
  try {
    if (e.shapeFlag & 4) {
      const j = s || n, pe = g.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(j, {
        get(ni, be, Le) {
          return N(
            `Property '${String(
              be
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ni, be, Le);
        }
      }) : j;
      dt = vi(
        l.call(
          pe,
          j,
          u,
          g.NODE_ENV !== "production" ? Qi(d) : d,
          _,
          m,
          A
        )
      ), mt = a;
    } else {
      const j = t;
      g.NODE_ENV !== "production" && a === d && sl(), dt = vi(
        j.length > 1 ? j(
          g.NODE_ENV !== "production" ? Qi(d) : d,
          g.NODE_ENV !== "production" ? {
            get attrs() {
              return sl(), Qi(a);
            },
            slots: o,
            emit: c
          } : { attrs: a, slots: o, emit: c }
        ) : j(
          g.NODE_ENV !== "production" ? Qi(d) : d,
          null
        )
      ), mt = t.props ? a : FS(a);
    }
  } catch (j) {
    ra.length = 0, La(j, i, 1), dt = An(ti);
  }
  let Nt = dt, Ye;
  if (g.NODE_ENV !== "production" && dt.patchFlag > 0 && dt.patchFlag & 2048 && ([Nt, Ye] = um(dt)), mt && L !== !1) {
    const j = Object.keys(mt), { shapeFlag: pe } = Nt;
    if (j.length) {
      if (pe & 7)
        r && j.some(Kc) && (mt = MS(
          mt,
          r
        )), Nt = us(Nt, mt, !1, !0);
      else if (g.NODE_ENV !== "production" && !_d && Nt.type !== ti) {
        const ni = Object.keys(a), be = [], Le = [];
        for (let hn = 0, Yn = ni.length; hn < Yn; hn++) {
          const pi = ni[hn];
          Ma(pi) ? Kc(pi) || be.push(pi[2].toLowerCase() + pi.slice(3)) : Le.push(pi);
        }
        Le.length && N(
          `Extraneous non-props attributes (${Le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), be.length && N(
          `Extraneous non-emits event listeners (${be.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return e.dirs && (g.NODE_ENV !== "production" && !Cp(Nt) && N(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), Nt = us(Nt, null, !1, !0), Nt.dirs = Nt.dirs ? Nt.dirs.concat(e.dirs) : e.dirs), e.transition && (g.NODE_ENV !== "production" && !Cp(Nt) && N(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), dh(Nt, e.transition)), g.NODE_ENV !== "production" && Ye ? Ye(Nt) : dt = Nt, tl(Ht), dt;
}
const um = (i) => {
  const t = i.children, e = i.dynamicChildren, n = gh(t, !1);
  if (n) {
    if (g.NODE_ENV !== "production" && n.patchFlag > 0 && n.patchFlag & 2048)
      return um(n);
  } else return [i, void 0];
  const s = t.indexOf(n), r = e ? e.indexOf(n) : -1, o = (a) => {
    t[s] = a, e && (r > -1 ? e[r] = a : a.patchFlag > 0 && (i.dynamicChildren = [...e, a]));
  };
  return [vi(n), o];
};
function gh(i, t = !0) {
  let e;
  for (let n = 0; n < i.length; n++) {
    const s = i[n];
    if (ru(s)) {
      if (s.type !== ti || s.children === "v-if") {
        if (e)
          return;
        if (e = s, g.NODE_ENV !== "production" && t && e.patchFlag > 0 && e.patchFlag & 2048)
          return gh(e.children);
      }
    } else
      return;
  }
  return e;
}
const FS = (i) => {
  let t;
  for (const e in i)
    (e === "class" || e === "style" || Ma(e)) && ((t || (t = {}))[e] = i[e]);
  return t;
}, MS = (i, t) => {
  const e = {};
  for (const n in i)
    (!Kc(n) || !(n.slice(9) in t)) && (e[n] = i[n]);
  return e;
}, Cp = (i) => i.shapeFlag & 7 || i.type === ti;
function RS(i, t, e) {
  const { props: n, children: s, component: r } = i, { props: o, children: a, patchFlag: c } = t, l = r.emitsOptions;
  if (g.NODE_ENV !== "production" && (s || a) && Zi || t.dirs || t.transition)
    return !0;
  if (e && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? $p(n, o, l) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const m = u[d];
        if (o[m] !== n[m] && !su(l, m))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : n === o ? !1 : n ? o ? $p(n, o, l) : !0 : !!o;
  return !1;
}
function $p(i, t, e) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(i).length)
    return !0;
  for (let s = 0; s < n.length; s++) {
    const r = n[s];
    if (t[r] !== i[r] && !su(e, r))
      return !0;
  }
  return !1;
}
function LS({ vnode: i, parent: t }, e) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === i && (n.el = i.el), n === i)
      (i = t.vnode).el = e, t = t.parent;
    else
      break;
  }
}
const dm = (i) => i.__isSuspense;
function US(i, t) {
  t && t.pendingBranch ? X(i) ? t.effects.push(...i) : t.effects.push(i) : xg(i);
}
const Je = Symbol.for("v-fgt"), xa = Symbol.for("v-txt"), ti = Symbol.for("v-cmt"), vc = Symbol.for("v-stc"), ra = [];
let Xe = null;
function yi(i = !1) {
  ra.push(Xe = i ? null : []);
}
function xS() {
  ra.pop(), Xe = ra[ra.length - 1] || null;
}
let ha = 1;
function Vp(i, t = !1) {
  ha += i, i < 0 && Xe && t && (Xe.hasOnce = !0);
}
function hm(i) {
  return i.dynamicChildren = ha > 0 ? Xe || Wr : null, xS(), ha > 0 && Xe && Xe.push(i), i;
}
function xi(i, t, e, n, s, r) {
  return hm(
    is(
      i,
      t,
      e,
      n,
      s,
      r,
      !0
    )
  );
}
function CS(i, t, e, n, s) {
  return hm(
    An(
      i,
      t,
      e,
      n,
      s,
      !0
    )
  );
}
function ru(i) {
  return i ? i.__v_isVNode === !0 : !1;
}
function Fo(i, t) {
  if (g.NODE_ENV !== "production" && t.shapeFlag & 6 && i.component) {
    const e = mc.get(t.type);
    if (e && e.has(i.component))
      return i.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return i.type === t.type && i.key === t.key;
}
const $S = (...i) => pm(
  ...i
), fm = ({ key: i }) => i ?? null, wc = ({
  ref: i,
  ref_key: t,
  ref_for: e
}) => (typeof i == "number" && (i = "" + i), i != null ? Jt(i) || fe(i) || rt(i) ? { i: Ze, r: i, k: t, f: !!e } : i : null);
function is(i, t = null, e = null, n = 0, s = null, r = i === Je ? 0 : 1, o = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: i,
    props: t,
    key: t && fm(t),
    ref: t && wc(t),
    scopeId: zg,
    slotScopeIds: null,
    children: e,
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
    patchFlag: n,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ze
  };
  return a ? (mh(c, e), r & 128 && i.normalize(c)) : e && (c.shapeFlag |= Jt(e) ? 8 : 16), g.NODE_ENV !== "production" && c.key !== c.key && N("VNode created with invalid key (NaN). VNode type:", c.type), ha > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Xe.push(c), c;
}
const An = g.NODE_ENV !== "production" ? $S : pm;
function pm(i, t = null, e = null, n = 0, s = null, r = !1) {
  if ((!i || i === GI) && (g.NODE_ENV !== "production" && !i && N(`Invalid vnode type when creating vnode: ${i}.`), i = ti), ru(i)) {
    const a = us(
      i,
      t,
      !0
      /* mergeRef: true */
    );
    return e && mh(a, e), ha > 0 && !r && Xe && (a.shapeFlag & 6 ? Xe[Xe.indexOf(i)] = a : Xe.push(a)), a.patchFlag = -2, a;
  }
  if (vm(i) && (i = i.__vccOpts), t) {
    t = VS(t);
    let { class: a, style: c } = t;
    a && !Jt(a) && (t.class = sh(a)), Ct(c) && (qc(c) && !X(c) && (c = oe({}, c)), t.style = nh(c));
  }
  const o = Jt(i) ? 1 : dm(i) ? 128 : RI(i) ? 64 : Ct(i) ? 4 : rt(i) ? 2 : 0;
  return g.NODE_ENV !== "production" && o & 4 && qc(i) && (i = yt(i), N(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    i
  )), is(
    i,
    t,
    e,
    n,
    s,
    o,
    r,
    !0
  );
}
function VS(i) {
  return i ? qc(i) || tm(i) ? oe({}, i) : i : null;
}
function us(i, t, e = !1, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: a, transition: c } = i, l = t ? jS(s || {}, t) : s, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: i.type,
    props: l,
    key: l && fm(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      e && r ? X(r) ? r.concat(wc(t)) : [r, wc(t)] : wc(t)
    ) : r,
    scopeId: i.scopeId,
    slotScopeIds: i.slotScopeIds,
    children: g.NODE_ENV !== "production" && o === -1 && X(a) ? a.map(ym) : a,
    target: i.target,
    targetStart: i.targetStart,
    targetAnchor: i.targetAnchor,
    staticCount: i.staticCount,
    shapeFlag: i.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && i.type !== Je ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: i.dynamicProps,
    dynamicChildren: i.dynamicChildren,
    appContext: i.appContext,
    dirs: i.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: i.component,
    suspense: i.suspense,
    ssContent: i.ssContent && us(i.ssContent),
    ssFallback: i.ssFallback && us(i.ssFallback),
    placeholder: i.placeholder,
    el: i.el,
    anchor: i.anchor,
    ctx: i.ctx,
    ce: i.ce
  };
  return c && n && dh(
    u,
    c.clone(u)
  ), u;
}
function ym(i) {
  const t = us(i);
  return X(i.children) && (t.children = i.children.map(ym)), t;
}
function PS(i = " ", t = 0) {
  return An(xa, null, i, t);
}
function kS(i = "", t = !1) {
  return t ? (yi(), CS(ti, null, i)) : An(ti, null, i);
}
function vi(i) {
  return i == null || typeof i == "boolean" ? An(ti) : X(i) ? An(
    Je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    i.slice()
  ) : ru(i) ? ns(i) : An(xa, null, String(i));
}
function ns(i) {
  return i.el === null && i.patchFlag !== -1 || i.memo ? i : us(i);
}
function mh(i, t) {
  let e = 0;
  const { shapeFlag: n } = i;
  if (t == null)
    t = null;
  else if (X(t))
    e = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), mh(i, s()), s._c && (s._d = !0));
      return;
    } else {
      e = 32;
      const s = t._;
      !s && !tm(t) ? t._ctx = Ze : s === 3 && Ze && (Ze.slots._ === 1 ? t._ = 1 : (t._ = 2, i.patchFlag |= 1024));
    }
  else rt(t) ? (t = { default: t, _ctx: Ze }, e = 32) : (t = String(t), n & 64 ? (e = 16, t = [PS(t)]) : e = 8);
  i.children = t, i.shapeFlag |= e;
}
function jS(...i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = i[e];
    for (const s in n)
      if (s === "class")
        t.class !== n.class && (t.class = sh([t.class, n.class]));
      else if (s === "style")
        t.style = nh([t.style, n.style]);
      else if (Ma(s)) {
        const r = t[s], o = n[s];
        o && r !== o && !(X(r) && r.includes(o)) && (t[s] = r ? [].concat(r, o) : o);
      } else s !== "" && (t[s] = n[s]);
  }
  return t;
}
function Ci(i, t, e, n = null) {
  en(i, t, 7, [
    e,
    n
  ]);
}
const zS = Qg();
let WS = 0;
function HS(i, t, e) {
  const n = i.type, s = (t ? t.appContext : i.appContext) || zS, r = {
    uid: WS++,
    vnode: i,
    type: n,
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
    scope: new $w(
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
    propsOptions: im(n, s),
    emitsOptions: lm(n, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: xt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: xt,
    data: xt,
    props: xt,
    attrs: xt,
    slots: xt,
    refs: xt,
    setupState: xt,
    setupContext: null,
    // suspense related
    suspense: e,
    suspenseId: e ? e.pendingId : 0,
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
  return g.NODE_ENV !== "production" ? r.ctx = qI(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = AS.bind(null, r), i.ce && i.ce(r), r;
}
let me = null;
const gm = () => me || Ze;
let rl, bd;
{
  const i = Ra(), t = (e, n) => {
    let s;
    return (s = i[e]) || (s = i[e] = []), s.push(n), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  rl = t(
    "__VUE_INSTANCE_SETTERS__",
    (e) => me = e
  ), bd = t(
    "__VUE_SSR_SETTERS__",
    (e) => fa = e
  );
}
const Ca = (i) => {
  const t = me;
  return rl(i), i.scope.on(), () => {
    i.scope.off(), rl(t);
  };
}, Pp = () => {
  me && me.scope.off(), rl(null);
}, YS = /* @__PURE__ */ Cn("slot,component");
function vd(i, { isNativeTag: t }) {
  (YS(i) || t(i)) && N(
    "Do not use built-in or reserved HTML elements as component id: " + i
  );
}
function mm(i) {
  return i.vnode.shapeFlag & 4;
}
let fa = !1;
function KS(i, t = !1, e = !1) {
  t && bd(t);
  const { props: n, children: s } = i.vnode, r = mm(i);
  aS(i, n, r, t), _S(i, s, e || t);
  const o = r ? GS(i, t) : void 0;
  return t && bd(!1), o;
}
function GS(i, t) {
  var e;
  const n = i.type;
  if (g.NODE_ENV !== "production") {
    if (n.name && vd(n.name, i.appContext.config), n.components) {
      const r = Object.keys(n.components);
      for (let o = 0; o < r.length; o++)
        vd(r[o], i.appContext.config);
    }
    if (n.directives) {
      const r = Object.keys(n.directives);
      for (let o = 0; o < r.length; o++)
        Wg(r[o]);
    }
    n.compilerOptions && qS() && N(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  i.accessCache = /* @__PURE__ */ Object.create(null), i.proxy = new Proxy(i.ctx, Gg), g.NODE_ENV !== "production" && JI(i);
  const { setup: s } = n;
  if (s) {
    Bi();
    const r = i.setupContext = s.length > 1 ? QS(i) : null, o = Ca(i), a = _o(
      s,
      i,
      0,
      [
        g.NODE_ENV !== "production" ? Qi(i.props) : i.props,
        r
      ]
    ), c = th(a);
    if (Ni(), o(), (c || i.sp) && !sa(i) && Hg(i), c) {
      if (a.then(Pp, Pp), t)
        return a.then((l) => {
          kp(i, l, t);
        }).catch((l) => {
          La(l, i, 0);
        });
      if (i.asyncDep = a, g.NODE_ENV !== "production" && !i.suspense) {
        const l = (e = n.name) != null ? e : "Anonymous";
        N(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      kp(i, a, t);
  } else
    _m(i, t);
}
function kp(i, t, e) {
  rt(t) ? i.type.__ssrInlineRender ? i.ssrRender = t : i.render = t : Ct(t) ? (g.NODE_ENV !== "production" && ru(t) && N(
    "setup() should not return VNodes directly - return a render function instead."
  ), g.NODE_ENV !== "production" && (i.devtoolsRawSetupState = t), i.setupState = Mg(t), g.NODE_ENV !== "production" && QI(i)) : g.NODE_ENV !== "production" && t !== void 0 && N(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), _m(i, e);
}
const qS = () => !0;
function _m(i, t, e) {
  const n = i.type;
  i.render || (i.render = n.render || he);
  {
    const s = Ca(i);
    Bi();
    try {
      XI(i);
    } finally {
      Ni(), s();
    }
  }
  g.NODE_ENV !== "production" && !n.render && i.render === he && !t && (n.template ? N(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : N("Component is missing template or render function: ", n));
}
const jp = g.NODE_ENV !== "production" ? {
  get(i, t) {
    return sl(), le(i, "get", ""), i[t];
  },
  set() {
    return N("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return N("setupContext.attrs is readonly."), !1;
  }
} : {
  get(i, t) {
    return le(i, "get", ""), i[t];
  }
};
function JS(i) {
  return new Proxy(i.slots, {
    get(t, e) {
      return le(i, "get", "$slots"), t[e];
    }
  });
}
function QS(i) {
  const t = (e) => {
    if (g.NODE_ENV !== "production" && (i.exposed && N("expose() should be called only once per setup()."), e != null)) {
      let n = typeof e;
      n === "object" && (X(e) ? n = "array" : fe(e) && (n = "ref")), n !== "object" && N(
        `expose() should be passed a plain object, received ${n}.`
      );
    }
    i.exposed = e || {};
  };
  if (g.NODE_ENV !== "production") {
    let e, n;
    return Object.freeze({
      get attrs() {
        return e || (e = new Proxy(i.attrs, jp));
      },
      get slots() {
        return n || (n = JS(i));
      },
      get emit() {
        return (s, ...r) => i.emit(s, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(i.attrs, jp),
      slots: i.slots,
      emit: i.emit,
      expose: t
    };
}
function _h(i) {
  return i.exposed ? i.exposeProxy || (i.exposeProxy = new Proxy(Mg(rI(i.exposed)), {
    get(t, e) {
      if (e in t)
        return t[e];
      if (e in Js)
        return Js[e](i);
    },
    has(t, e) {
      return e in t || e in Js;
    }
  })) : i.proxy;
}
const ZS = /(?:^|[-_])\w/g, XS = (i) => i.replace(ZS, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function bm(i, t = !0) {
  return rt(i) ? i.displayName || i.name : i.name || t && i.__name;
}
function ou(i, t, e = !1) {
  let n = bm(t);
  if (!n && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (n = s[1]);
  }
  if (!n && i && i.parent) {
    const s = (r) => {
      for (const o in r)
        if (r[o] === t)
          return o;
    };
    n = s(
      i.components || i.parent.type.components
    ) || s(i.appContext.components);
  }
  return n ? XS(n) : e ? "App" : "Anonymous";
}
function vm(i) {
  return rt(i) && "__vccOpts" in i;
}
const t1 = (i, t) => {
  const e = cI(i, t, fa);
  if (g.NODE_ENV !== "production") {
    const n = gm();
    n && n.appContext.config.warnRecursiveComputed && (e._warnRecursive = !0);
  }
  return e;
};
function e1() {
  if (g.NODE_ENV === "production" || typeof window > "u")
    return;
  const i = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, e = { style: "color:#f5222d" }, n = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!Ct(d))
        return null;
      if (d.__isVue)
        return ["div", i, "VueInstance"];
      if (fe(d)) {
        Bi();
        const m = d.value;
        return Ni(), [
          "div",
          {},
          ["span", i, u(d)],
          "<",
          a(m),
          ">"
        ];
      } else {
        if (Gs(d))
          return [
            "div",
            {},
            ["span", i, ke(d) ? "ShallowReactive" : "Reactive"],
            "<",
            a(d),
            `>${Fn(d) ? " (readonly)" : ""}`
          ];
        if (Fn(d))
          return [
            "div",
            {},
            ["span", i, ke(d) ? "ShallowReadonly" : "Readonly"],
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
    const m = [];
    d.type.props && d.props && m.push(o("props", yt(d.props))), d.setupState !== xt && m.push(o("setup", d.setupState)), d.data !== xt && m.push(o("data", yt(d.data)));
    const _ = c(d, "computed");
    _ && m.push(o("computed", _));
    const A = c(d, "inject");
    return A && m.push(o("injected", A)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: n.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), m;
  }
  function o(d, m) {
    return m = oe({}, m), Object.keys(m).length ? [
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
        ...Object.keys(m).map((_) => [
          "div",
          {},
          ["span", n, _ + ": "],
          a(m[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(d, m = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", e, JSON.stringify(d)] : typeof d == "boolean" ? ["span", n, d] : Ct(d) ? ["object", { object: m ? yt(d) : d }] : ["span", e, String(d)];
  }
  function c(d, m) {
    const _ = d.type;
    if (rt(_))
      return;
    const A = {};
    for (const L in d.ctx)
      l(_, L, m) && (A[L] = d.ctx[L]);
    return A;
  }
  function l(d, m, _) {
    const A = d[_];
    if (X(A) && A.includes(m) || Ct(A) && m in A || d.extends && l(d.extends, m, _) || d.mixins && d.mixins.some((L) => l(L, m, _)))
      return !0;
  }
  function u(d) {
    return ke(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const zp = "3.5.22", Tn = g.NODE_ENV !== "production" ? N : he;
var Mn = {};
let wd;
const Wp = typeof window < "u" && window.trustedTypes;
if (Wp)
  try {
    wd = /* @__PURE__ */ Wp.createPolicy("vue", {
      createHTML: (i) => i
    });
  } catch (i) {
    Mn.NODE_ENV !== "production" && Tn(`Error creating trusted types policy: ${i}`);
  }
const wm = wd ? (i) => wd.createHTML(i) : (i) => i, i1 = "http://www.w3.org/2000/svg", n1 = "http://www.w3.org/1998/Math/MathML", bn = typeof document < "u" ? document : null, Hp = bn && /* @__PURE__ */ bn.createElement("template"), s1 = {
  insert: (i, t, e) => {
    t.insertBefore(i, e || null);
  },
  remove: (i) => {
    const t = i.parentNode;
    t && t.removeChild(i);
  },
  createElement: (i, t, e, n) => {
    const s = t === "svg" ? bn.createElementNS(i1, i) : t === "mathml" ? bn.createElementNS(n1, i) : e ? bn.createElement(i, { is: e }) : bn.createElement(i);
    return i === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s;
  },
  createText: (i) => bn.createTextNode(i),
  createComment: (i) => bn.createComment(i),
  setText: (i, t) => {
    i.nodeValue = t;
  },
  setElementText: (i, t) => {
    i.textContent = t;
  },
  parentNode: (i) => i.parentNode,
  nextSibling: (i) => i.nextSibling,
  querySelector: (i) => bn.querySelector(i),
  setScopeId(i, t) {
    i.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(i, t, e, n, s, r) {
    const o = e ? e.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), e), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      Hp.innerHTML = wm(
        n === "svg" ? `<svg>${i}</svg>` : n === "mathml" ? `<math>${i}</math>` : i
      );
      const a = Hp.content;
      if (n === "svg" || n === "mathml") {
        const c = a.firstChild;
        for (; c.firstChild; )
          a.appendChild(c.firstChild);
        a.removeChild(c);
      }
      t.insertBefore(a, e);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      e ? e.previousSibling : t.lastChild
    ];
  }
}, r1 = Symbol("_vtc");
function o1(i, t, e) {
  const n = i[r1];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? i.removeAttribute("class") : e ? i.setAttribute("class", t) : i.className = t;
}
const Yp = Symbol("_vod"), a1 = Symbol("_vsh"), c1 = Symbol(Mn.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), l1 = /(?:^|;)\s*display\s*:/;
function u1(i, t, e) {
  const n = i.style, s = Jt(e);
  let r = !1;
  if (e && !s) {
    if (t)
      if (Jt(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          e[a] == null && Ic(n, a, "");
        }
      else
        for (const o in t)
          e[o] == null && Ic(n, o, "");
    for (const o in e)
      o === "display" && (r = !0), Ic(n, o, e[o]);
  } else if (s) {
    if (t !== e) {
      const o = n[c1];
      o && (e += ";" + o), n.cssText = e, r = l1.test(e);
    }
  } else t && i.removeAttribute("style");
  Yp in i && (i[Yp] = r ? n.display : "", i[a1] && (n.display = "none"));
}
const d1 = /[^\\];\s*$/, Kp = /\s*!important$/;
function Ic(i, t, e) {
  if (X(e))
    e.forEach((n) => Ic(i, t, n));
  else if (e == null && (e = ""), Mn.NODE_ENV !== "production" && d1.test(e) && Tn(
    `Unexpected semicolon at the end of '${t}' style value: '${e}'`
  ), t.startsWith("--"))
    i.setProperty(t, e);
  else {
    const n = h1(i, t);
    Kp.test(e) ? i.setProperty(
      ls(n),
      e.replace(Kp, ""),
      "important"
    ) : i[n] = e;
  }
}
const Gp = ["Webkit", "Moz", "ms"], Pu = {};
function h1(i, t) {
  const e = Pu[t];
  if (e)
    return e;
  let n = wi(t);
  if (n !== "filter" && n in i)
    return Pu[t] = n;
  n = Ql(n);
  for (let s = 0; s < Gp.length; s++) {
    const r = Gp[s] + n;
    if (r in i)
      return Pu[t] = r;
  }
  return t;
}
const qp = "http://www.w3.org/1999/xlink";
function Jp(i, t, e, n, s, r = Cw(t)) {
  n && t.startsWith("xlink:") ? e == null ? i.removeAttributeNS(qp, t.slice(6, t.length)) : i.setAttributeNS(qp, t, e) : e == null || r && !hg(e) ? i.removeAttribute(t) : i.setAttribute(
    t,
    r ? "" : Os(e) ? String(e) : e
  );
}
function Qp(i, t, e, n, s) {
  if (t === "innerHTML" || t === "textContent") {
    e != null && (i[t] = t === "innerHTML" ? wm(e) : e);
    return;
  }
  const r = i.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const a = r === "OPTION" ? i.getAttribute("value") || "" : i.value, c = e == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      i.type === "checkbox" ? "on" : ""
    ) : String(e);
    (a !== c || !("_value" in i)) && (i.value = c), e == null && i.removeAttribute(t), i._value = e;
    return;
  }
  let o = !1;
  if (e === "" || e == null) {
    const a = typeof i[t];
    a === "boolean" ? e = hg(e) : e == null && a === "string" ? (e = "", o = !0) : a === "number" && (e = 0, o = !0);
  }
  try {
    i[t] = e;
  } catch (a) {
    Mn.NODE_ENV !== "production" && !o && Tn(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${e} is invalid.`,
      a
    );
  }
  o && i.removeAttribute(s || t);
}
function f1(i, t, e, n) {
  i.addEventListener(t, e, n);
}
function p1(i, t, e, n) {
  i.removeEventListener(t, e, n);
}
const Zp = Symbol("_vei");
function y1(i, t, e, n, s = null) {
  const r = i[Zp] || (i[Zp] = {}), o = r[t];
  if (n && o)
    o.value = Mn.NODE_ENV !== "production" ? ty(n, t) : n;
  else {
    const [a, c] = g1(t);
    if (n) {
      const l = r[t] = b1(
        Mn.NODE_ENV !== "production" ? ty(n, t) : n,
        s
      );
      f1(i, a, l, c);
    } else o && (p1(i, a, o, c), r[t] = void 0);
  }
}
const Xp = /(?:Once|Passive|Capture)$/;
function g1(i) {
  let t;
  if (Xp.test(i)) {
    t = {};
    let n;
    for (; n = i.match(Xp); )
      i = i.slice(0, i.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [i[2] === ":" ? i.slice(3) : ls(i.slice(2)), t];
}
let ku = 0;
const m1 = /* @__PURE__ */ Promise.resolve(), _1 = () => ku || (m1.then(() => ku = 0), ku = Date.now());
function b1(i, t) {
  const e = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= e.attached)
      return;
    en(
      v1(n, e.value),
      t,
      5,
      [n]
    );
  };
  return e.value = i, e.attached = _1(), e;
}
function ty(i, t) {
  return rt(i) || X(i) ? i : (Tn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof i}.`
  ), he);
}
function v1(i, t) {
  if (X(t)) {
    const e = i.stopImmediatePropagation;
    return i.stopImmediatePropagation = () => {
      e.call(i), i._stopped = !0;
    }, t.map(
      (n) => (s) => !s._stopped && n && n(s)
    );
  } else
    return t;
}
const ey = (i) => i.charCodeAt(0) === 111 && i.charCodeAt(1) === 110 && // lowercase letter
i.charCodeAt(2) > 96 && i.charCodeAt(2) < 123, w1 = (i, t, e, n, s, r) => {
  const o = s === "svg";
  t === "class" ? o1(i, n, o) : t === "style" ? u1(i, e, n) : Ma(t) ? Kc(t) || y1(i, t, e, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : I1(i, t, n, o)) ? (Qp(i, t, n), !i.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Jp(i, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ i._isVueCE && (/[A-Z]/.test(t) || !Jt(n)) ? Qp(i, wi(t), n, r, t) : (t === "true-value" ? i._trueValue = n : t === "false-value" && (i._falseValue = n), Jp(i, t, n, o));
};
function I1(i, t, e, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in i && ey(t) && rt(e));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && i.tagName === "INPUT" || t === "type" && i.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = i.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return ey(t) && Jt(e) ? !1 : t in i;
}
const S1 = /* @__PURE__ */ oe({ patchProp: w1 }, s1);
let iy;
function O1() {
  return iy || (iy = wS(S1));
}
const D1 = ((...i) => {
  const t = O1().createApp(...i);
  Mn.NODE_ENV !== "production" && (N1(t), E1(t));
  const { mount: e } = t;
  return t.mount = (n) => {
    const s = A1(n);
    if (!s) return;
    const r = t._component;
    !rt(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = e(s, !1, B1(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function B1(i) {
  if (i instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && i instanceof MathMLElement)
    return "mathml";
}
function N1(i) {
  Object.defineProperty(i.config, "isNativeTag", {
    value: (t) => Rw(t) || Lw(t) || Uw(t),
    writable: !1
  });
}
function E1(i) {
  {
    const t = i.config.isCustomElement;
    Object.defineProperty(i.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Tn(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const e = i.config.compilerOptions, n = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(i.config, "compilerOptions", {
      get() {
        return Tn(n), e;
      },
      set() {
        Tn(n);
      }
    });
  }
}
function A1(i) {
  if (Jt(i)) {
    const t = document.querySelector(i);
    return Mn.NODE_ENV !== "production" && !t && Tn(
      `Failed to mount app: mount target selector "${i}" returned null.`
    ), t;
  }
  return Mn.NODE_ENV !== "production" && window.ShadowRoot && i instanceof window.ShadowRoot && i.mode === "closed" && Tn(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), i;
}
var T1 = {};
function F1() {
  e1();
}
T1.NODE_ENV !== "production" && F1();
function M1(i, t) {
  var e = {};
  for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && t.indexOf(n) < 0 && (e[n] = i[n]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(i); s < n.length; s++)
      t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(i, n[s]) && (e[n[s]] = i[n[s]]);
  return e;
}
function v(i, t, e, n) {
  function s(r) {
    return r instanceof e ? r : new e(function(o) {
      o(r);
    });
  }
  return new (e || (e = Promise))(function(r, o) {
    function a(u) {
      try {
        l(n.next(u));
      } catch (d) {
        o(d);
      }
    }
    function c(u) {
      try {
        l(n.throw(u));
      } catch (d) {
        o(d);
      }
    }
    function l(u) {
      u.done ? r(u.value) : s(u.value).then(a, c);
    }
    l((n = n.apply(i, t || [])).next());
  });
}
function ny(i) {
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
function ee(i, t, e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = e.apply(i, t || []), s, r = [];
  return s = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", o), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function o(_) {
    return function(A) {
      return Promise.resolve(A).then(_, d);
    };
  }
  function a(_, A) {
    n[_] && (s[_] = function(L) {
      return new Promise(function(Ht, dt) {
        r.push([_, L, Ht, dt]) > 1 || c(_, L);
      });
    }, A && (s[_] = A(s[_])));
  }
  function c(_, A) {
    try {
      l(n[_](A));
    } catch (L) {
      m(r[0][3], L);
    }
  }
  function l(_) {
    _.value instanceof E ? Promise.resolve(_.value.v).then(u, d) : m(r[0][2], _);
  }
  function u(_) {
    c("next", _);
  }
  function d(_) {
    c("throw", _);
  }
  function m(_, A) {
    _(A), r.shift(), r.length && c(r[0][0], r[0][1]);
  }
}
function cs(i) {
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
function Te(i) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = i[Symbol.asyncIterator], e;
  return t ? t.call(i) : (i = typeof ny == "function" ? ny(i) : i[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
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
    Promise.resolve(c).then(function(l) {
      r({ value: l, done: a });
    }, o);
  }
}
const R1 = new TextDecoder("utf-8"), Id = (i) => R1.decode(i), L1 = new TextEncoder(), bh = (i) => L1.encode(i), U1 = (i) => typeof i == "number", Im = (i) => typeof i == "boolean", ae = (i) => typeof i == "function", je = (i) => i != null && Object(i) === i, Zs = (i) => je(i) && ae(i.then), $a = (i) => je(i) && ae(i[Symbol.iterator]), bo = (i) => je(i) && ae(i[Symbol.asyncIterator]), Sd = (i) => je(i) && je(i.schema), Sm = (i) => je(i) && "done" in i && "value" in i, Om = (i) => je(i) && ae(i.stat) && U1(i.fd), Dm = (i) => je(i) && vh(i.body), au = (i) => "_getDOMStream" in i && "_getNodeStream" in i, x1 = (i) => je(i) && ae(i.abort) && ae(i.getWriter) && !au(i), vh = (i) => je(i) && ae(i.cancel) && ae(i.getReader) && !au(i), C1 = (i) => je(i) && ae(i.end) && ae(i.write) && Im(i.writable) && !au(i), Bm = (i) => je(i) && ae(i.read) && ae(i.pipe) && Im(i.readable) && !au(i), $1 = (i) => je(i) && ae(i.clear) && ae(i.bytes) && ae(i.position) && ae(i.setPosition) && ae(i.capacity) && ae(i.getBufferIdentifier) && ae(i.createLong), wh = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function V1(i) {
  const t = i[0] ? [i[0]] : [];
  let e, n, s, r;
  for (let o, a, c = 0, l = 0, u = i.length; ++c < u; ) {
    if (o = t[l], a = i[c], !o || !a || o.buffer !== a.buffer || a.byteOffset < o.byteOffset) {
      a && (t[++l] = a);
      continue;
    }
    if ({ byteOffset: e, byteLength: s } = o, { byteOffset: n, byteLength: r } = a, e + s < n || n + r < e) {
      a && (t[++l] = a);
      continue;
    }
    t[l] = new Uint8Array(o.buffer, e, n - e + r);
  }
  return t;
}
function sy(i, t, e = 0, n = t.byteLength) {
  const s = i.byteLength, r = new Uint8Array(i.buffer, i.byteOffset, s), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(n, s));
  return r.set(o, e), i;
}
function nn(i, t) {
  const e = V1(i), n = e.reduce((u, d) => u + d.byteLength, 0);
  let s, r, o, a = 0, c = -1;
  const l = Math.min(t || Number.POSITIVE_INFINITY, n);
  for (const u = e.length; ++c < u; ) {
    if (s = e[c], r = s.subarray(0, Math.min(s.length, l - a)), l <= a + r.length) {
      r.length < s.length ? e[c] = s.subarray(r.length) : r.length === s.length && c++, o ? sy(o, r, a) : o = r;
      break;
    }
    sy(o || (o = new Uint8Array(l)), r, a), a += r.length;
  }
  return [o || new Uint8Array(0), e.slice(c), n - (o ? o.byteLength : 0)];
}
function Ut(i, t) {
  let e = Sm(t) ? t.value : t;
  return e instanceof i ? i === Uint8Array ? new i(e.buffer, e.byteOffset, e.byteLength) : e : e ? (typeof e == "string" && (e = bh(e)), e instanceof ArrayBuffer ? new i(e) : e instanceof wh ? new i(e) : $1(e) ? Ut(i, e.bytes()) : ArrayBuffer.isView(e) ? e.byteLength <= 0 ? new i(0) : new i(e.buffer, e.byteOffset, e.byteLength / i.BYTES_PER_ELEMENT) : i.from(e)) : new i(0);
}
const Mo = (i) => Ut(Int32Array, i), ry = (i) => Ut(BigInt64Array, i), vt = (i) => Ut(Uint8Array, i), Od = (i) => (i.next(), i);
function* P1(i, t) {
  const e = function* (s) {
    yield s;
  }, n = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof wh ? e(t) : $a(t) ? t : e(t);
  return yield* Od((function* (s) {
    let r = null;
    do
      r = s.next(yield Ut(i, r));
    while (!r.done);
  })(n[Symbol.iterator]())), new i();
}
const k1 = (i) => P1(Uint8Array, i);
function Nm(i, t) {
  return ee(this, arguments, function* () {
    if (Zs(t))
      return yield E(yield E(yield* cs(Te(Nm(i, yield E(t))))));
    const n = function(o) {
      return ee(this, arguments, function* () {
        yield yield E(yield E(o));
      });
    }, s = function(o) {
      return ee(this, arguments, function* () {
        yield E(yield* cs(Te(Od((function* (a) {
          let c = null;
          do
            c = a.next(yield c?.value);
          while (!c.done);
        })(o[Symbol.iterator]())))));
      });
    }, r = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof wh ? n(t) : $a(t) ? s(t) : bo(t) ? t : n(t);
    return yield E(
      // otherwise if AsyncIterable, use it
      yield* cs(Te(Od((function(o) {
        return ee(this, arguments, function* () {
          let a = null;
          do
            a = yield E(o.next(yield yield E(Ut(i, a))));
          while (!a.done);
        });
      })(r[Symbol.asyncIterator]()))))
    ), yield E(new i());
  });
}
const j1 = (i) => Nm(Uint8Array, i);
function Em(i, t, e) {
  if (i !== 0) {
    e = e.slice(0, t);
    for (let n = -1, s = e.length; ++n < s; )
      e[n] += i;
  }
  return e.subarray(0, t);
}
function z1(i, t) {
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
const oi = {
  fromIterable(i) {
    return cc(W1(i));
  },
  fromAsyncIterable(i) {
    return cc(H1(i));
  },
  fromDOMStream(i) {
    return cc(Y1(i));
  },
  fromNodeStream(i) {
    return cc(G1(i));
  },
  // @ts-ignore
  toDOMStream(i, t) {
    throw new Error('"toDOMStream" not available in this environment');
  },
  // @ts-ignore
  toNodeStream(i, t) {
    throw new Error('"toNodeStream" not available in this environment');
  }
}, cc = (i) => (i.next(), i);
function* W1(i) {
  let t, e = !1, n = [], s, r, o, a = 0;
  function c() {
    return r === "peek" ? nn(n, o)[0] : ([s, n, a] = nn(n, o), s);
  }
  ({ cmd: r, size: o } = (yield null) || { cmd: "read", size: 0 });
  const l = k1(i)[Symbol.iterator]();
  try {
    do
      if ({ done: t, value: s } = Number.isNaN(o - a) ? l.next() : l.next(o - a), !t && s.byteLength > 0 && (n.push(s), a += s.byteLength), t || o <= a)
        do
          ({ cmd: r, size: o } = yield c());
        while (o < a);
    while (!t);
  } catch (u) {
    (e = !0) && typeof l.throw == "function" && l.throw(u);
  } finally {
    e === !1 && typeof l.return == "function" && l.return(null);
  }
  return null;
}
function H1(i) {
  return ee(this, arguments, function* () {
    let e, n = !1, s = [], r, o, a, c = 0;
    function l() {
      return o === "peek" ? nn(s, a)[0] : ([r, s, c] = nn(s, a), r);
    }
    ({ cmd: o, size: a } = (yield yield E(null)) || { cmd: "read", size: 0 });
    const u = j1(i)[Symbol.asyncIterator]();
    try {
      do
        if ({ done: e, value: r } = Number.isNaN(a - c) ? yield E(u.next()) : yield E(u.next(a - c)), !e && r.byteLength > 0 && (s.push(r), c += r.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield E(l()));
          while (a < c);
      while (!e);
    } catch (d) {
      (n = !0) && typeof u.throw == "function" && (yield E(u.throw(d)));
    } finally {
      n === !1 && typeof u.return == "function" && (yield E(u.return(new Uint8Array(0))));
    }
    return yield E(null);
  });
}
function Y1(i) {
  return ee(this, arguments, function* () {
    let e = !1, n = !1, s = [], r, o, a, c = 0;
    function l() {
      return o === "peek" ? nn(s, a)[0] : ([r, s, c] = nn(s, a), r);
    }
    ({ cmd: o, size: a } = (yield yield E(null)) || { cmd: "read", size: 0 });
    const u = new K1(i);
    try {
      do
        if ({ done: e, value: r } = Number.isNaN(a - c) ? yield E(u.read()) : yield E(u.read(a - c)), !e && r.byteLength > 0 && (s.push(vt(r)), c += r.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield E(l()));
          while (a < c);
      while (!e);
    } catch (d) {
      (n = !0) && (yield E(u.cancel(d)));
    } finally {
      n === !1 ? yield E(u.cancel()) : i.locked && u.releaseLock();
    }
    return yield E(null);
  });
}
let K1 = class {
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
    return v(this, void 0, void 0, function* () {
      const { reader: e, source: n } = this;
      e && (yield e.cancel(t).catch(() => {
      })), n && n.locked && this.releaseLock();
    });
  }
  read(t) {
    return v(this, void 0, void 0, function* () {
      if (t === 0)
        return { done: this.reader == null, value: new Uint8Array(0) };
      const e = yield this.reader.read();
      return !e.done && (e.value = vt(e)), e;
    });
  }
};
const ju = (i, t) => {
  const e = (s) => n([t, s]);
  let n;
  return [t, e, new Promise((s) => (n = s) && i.once(t, e))];
};
function G1(i) {
  return ee(this, arguments, function* () {
    const e = [];
    let n = "error", s = !1, r = null, o, a, c = 0, l = [], u;
    function d() {
      return o === "peek" ? nn(l, a)[0] : ([u, l, c] = nn(l, a), u);
    }
    if ({ cmd: o, size: a } = (yield yield E(null)) || { cmd: "read", size: 0 }, i.isTTY)
      return yield yield E(new Uint8Array(0)), yield E(null);
    try {
      e[0] = ju(i, "end"), e[1] = ju(i, "error");
      do {
        if (e[2] = ju(i, "readable"), [n, r] = yield E(Promise.race(e.map((_) => _[2]))), n === "error")
          break;
        if ((s = n === "end") || (Number.isFinite(a - c) ? (u = vt(i.read(a - c)), u.byteLength < a - c && (u = vt(i.read()))) : u = vt(i.read()), u.byteLength > 0 && (l.push(u), c += u.byteLength)), s || a <= c)
          do
            ({ cmd: o, size: a } = yield yield E(d()));
          while (a < c);
      } while (!s);
    } finally {
      yield E(m(e, n === "error" ? r : null));
    }
    return yield E(null);
    function m(_, A) {
      return u = l = null, new Promise((L, Ht) => {
        for (const [dt, mt] of _)
          i.off(dt, mt);
        try {
          const dt = i.destroy;
          dt && dt.call(i, A), A = void 0;
        } catch (dt) {
          A = dt || A;
        } finally {
          A != null ? Ht(A) : L();
        }
      });
    }
  });
}
var te;
(function(i) {
  i[i.V1 = 0] = "V1", i[i.V2 = 1] = "V2", i[i.V3 = 2] = "V3", i[i.V4 = 3] = "V4", i[i.V5 = 4] = "V5";
})(te || (te = {}));
var Ie;
(function(i) {
  i[i.Sparse = 0] = "Sparse", i[i.Dense = 1] = "Dense";
})(Ie || (Ie = {}));
var we;
(function(i) {
  i[i.HALF = 0] = "HALF", i[i.SINGLE = 1] = "SINGLE", i[i.DOUBLE = 2] = "DOUBLE";
})(we || (we = {}));
var di;
(function(i) {
  i[i.DAY = 0] = "DAY", i[i.MILLISECOND = 1] = "MILLISECOND";
})(di || (di = {}));
var Z;
(function(i) {
  i[i.SECOND = 0] = "SECOND", i[i.MILLISECOND = 1] = "MILLISECOND", i[i.MICROSECOND = 2] = "MICROSECOND", i[i.NANOSECOND = 3] = "NANOSECOND";
})(Z || (Z = {}));
var sn;
(function(i) {
  i[i.YEAR_MONTH = 0] = "YEAR_MONTH", i[i.DAY_TIME = 1] = "DAY_TIME", i[i.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(sn || (sn = {}));
const zu = 2, Ki = 4, Dn = 4, Mt = 4, ss = new Int32Array(2), oy = new Float32Array(ss.buffer), ay = new Float64Array(ss.buffer), lc = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var Dd;
(function(i) {
  i[i.UTF8_BYTES = 1] = "UTF8_BYTES", i[i.UTF16_STRING = 2] = "UTF16_STRING";
})(Dd || (Dd = {}));
let io = class Am {
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
    return new Am(new Uint8Array(t));
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
    return ss[0] = this.readInt32(t), oy[0];
  }
  readFloat64(t) {
    return ss[lc ? 0 : 1] = this.readInt32(t), ss[lc ? 1 : 0] = this.readInt32(t + 4), ay[0];
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
    oy[0] = e, this.writeInt32(t, ss[0]);
  }
  writeFloat64(t, e) {
    ay[0] = e, this.writeInt32(t, ss[lc ? 0 : 1]), this.writeInt32(t + 4, ss[lc ? 1 : 0]);
  }
  /**
   * Return the file identifier.   Behavior is undefined for FlatBuffers whose
   * schema does not include a file_identifier (likely points at padding or the
   * start of a the root vtable).
   */
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + Ki + Dn)
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let e = 0; e < Dn; e++)
      t += String.fromCharCode(this.readInt8(this.position_ + Ki + e));
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
    t += Ki;
    const s = this.bytes_.subarray(t, t + n);
    return e === Dd.UTF8_BYTES ? s : this.text_decoder_.decode(s);
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
    return t + this.readInt32(t) + Ki;
  }
  /**
   * Get the length of a vector whose offset is stored at "offset" in this object.
   */
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != Dn)
      throw new Error("FlatBuffers: file identifier must be length " + Dn);
    for (let e = 0; e < Dn; e++)
      if (t.charCodeAt(e) != this.readInt8(this.position() + Ki + e))
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
}, Tm = class Fm {
  /**
   * Create a FlatBufferBuilder.
   */
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null, this.text_encoder = new TextEncoder();
    let e;
    t ? e = t : e = 1024, this.bb = io.allocate(e), this.space = e;
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
      this.bb = Fm.growByteBuffer(this.bb), this.space += this.bb.capacity() - s;
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
    const n = e << 1, s = io.allocate(n);
    return s.setPosition(n - e), s.bytes().set(t.bytes(), n - e), s;
  }
  /**
   * Adds on offset, relative to where it will be written.
   *
   * @param offset The offset to add.
   */
  addOffset(t) {
    this.prep(Ki, 0), this.writeInt32(this.offset() - t + Ki);
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
    const r = (n + s) * zu;
    this.addInt16(r);
    let o = 0;
    const a = this.space;
    t: for (e = 0; e < this.vtables.length; e++) {
      const c = this.bb.capacity() - this.vtables[e];
      if (r == this.bb.readInt16(c)) {
        for (let l = zu; l < r; l += zu)
          if (this.bb.readInt16(a + l) != this.bb.readInt16(c + l))
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
    const s = n ? Mt : 0;
    if (e) {
      const r = e;
      if (this.prep(this.minalign, Ki + Dn + s), r.length != Dn)
        throw new TypeError("FlatBuffers: file identifier must be length " + Dn);
      for (let o = Dn - 1; o >= 0; o--)
        this.writeInt8(r.charCodeAt(o));
    }
    this.prep(this.minalign, Ki + s), this.addOffset(t), s && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
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
    this.notNested(), this.vector_num_elems = e, this.prep(Ki, t * e), this.prep(n, t * e);
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
var ol;
(function(i) {
  i[i.BUFFER = 0] = "BUFFER";
})(ol || (ol = {}));
var al;
(function(i) {
  i[i.LZ4_FRAME = 0] = "LZ4_FRAME", i[i.ZSTD = 1] = "ZSTD";
})(al || (al = {}));
let q1 = class Rs {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBodyCompression(t, e) {
    return (e || new Rs()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Rs()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Compressor library.
   * For LZ4_FRAME, each compressed buffer must consist of a single frame.
   */
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : al.LZ4_FRAME;
  }
  /**
   * Indicates the way the record batch body was compressed
   */
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : ol.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, e) {
    t.addFieldInt8(0, e, al.LZ4_FRAME);
  }
  static addMethod(t, e) {
    t.addFieldInt8(1, e, ol.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, e, n) {
    return Rs.startBodyCompression(t), Rs.addCodec(t, e), Rs.addMethod(t, n), Rs.endBodyCompression(t);
  }
}, Mm = class {
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
}, Rm = class {
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
}, vn = class Bd {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsRecordBatch(t, e) {
    return (e || new Bd()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Bd()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return n ? (e || new Rm()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
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
    return n ? (e || new Mm()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
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
    return e ? (t || new q1()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
}, mr = class Nd {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryBatch(t, e) {
    return (e || new Nd()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Nd()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  data(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new vn()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
var no;
(function(i) {
  i[i.Little = 0] = "Little", i[i.Big = 1] = "Big";
})(no || (no = {}));
var cl;
(function(i) {
  i[i.DenseArray = 0] = "DenseArray";
})(cl || (cl = {}));
let kr = class Ls {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInt(t, e) {
    return (e || new Ls()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInt(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Ls()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Ls.startInt(t), Ls.addBitWidth(t, e), Ls.addIsSigned(t, n), Ls.endInt(t);
  }
}, _r = class Ed {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryEncoding(t, e) {
    return (e || new Ed()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Ed()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return e ? (t || new kr()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
    return t ? this.bb.readInt16(this.bb_pos + t) : cl.DenseArray;
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
    t.addFieldInt16(3, e, cl.DenseArray);
  }
  static endDictionaryEncoding(t) {
    return t.endObject();
  }
}, li = class Us {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsKeyValue(t, e) {
    return (e || new Us()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsKeyValue(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Us()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Us.startKeyValue(t), Us.addKey(t, e), Us.addValue(t, n), Us.endKeyValue(t);
  }
}, cy = class Uo {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBinary(t, e) {
    return (e || new Uo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Uo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return Uo.startBinary(t), Uo.endBinary(t);
  }
}, ly = class xo {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBool(t, e) {
    return (e || new xo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, e) {
    return t.setPosition(t.position() + Mt), (e || new xo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return xo.startBool(t), xo.endBool(t);
  }
}, Sc = class br {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDate(t, e) {
    return (e || new br()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, e) {
    return t.setPosition(t.position() + Mt), (e || new br()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : di.MILLISECOND;
  }
  static startDate(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, di.MILLISECOND);
  }
  static endDate(t) {
    return t.endObject();
  }
  static createDate(t, e) {
    return br.startDate(t), br.addUnit(t, e), br.endDate(t);
  }
}, vr = class Xn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDecimal(t, e) {
    return (e || new Xn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDecimal(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Xn()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Xn.startDecimal(t), Xn.addPrecision(t, e), Xn.addScale(t, n), Xn.addBitWidth(t, s), Xn.endDecimal(t);
  }
}, Oc = class wr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDuration(t, e) {
    return (e || new wr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDuration(t, e) {
    return t.setPosition(t.position() + Mt), (e || new wr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Z.MILLISECOND;
  }
  static startDuration(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, Z.MILLISECOND);
  }
  static endDuration(t) {
    return t.endObject();
  }
  static createDuration(t, e) {
    return wr.startDuration(t), wr.addUnit(t, e), wr.endDuration(t);
  }
}, Dc = class Ir {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeBinary(t, e) {
    return (e || new Ir()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Ir()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Ir.startFixedSizeBinary(t), Ir.addByteWidth(t, e), Ir.endFixedSizeBinary(t);
  }
}, Bc = class Sr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeList(t, e) {
    return (e || new Sr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Sr()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Sr.startFixedSizeList(t), Sr.addListSize(t, e), Sr.endFixedSizeList(t);
  }
}, Nc = class Or {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFloatingPoint(t, e) {
    return (e || new Or()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Or()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : we.HALF;
  }
  static startFloatingPoint(t) {
    t.startObject(1);
  }
  static addPrecision(t, e) {
    t.addFieldInt16(0, e, we.HALF);
  }
  static endFloatingPoint(t) {
    return t.endObject();
  }
  static createFloatingPoint(t, e) {
    return Or.startFloatingPoint(t), Or.addPrecision(t, e), Or.endFloatingPoint(t);
  }
}, Ec = class Dr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInterval(t, e) {
    return (e || new Dr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Dr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : sn.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, sn.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, e) {
    return Dr.startInterval(t), Dr.addUnit(t, e), Dr.endInterval(t);
  }
}, uy = class Co {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsLargeBinary(t, e) {
    return (e || new Co()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeBinary(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Co()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeBinary(t) {
    t.startObject(0);
  }
  static endLargeBinary(t) {
    return t.endObject();
  }
  static createLargeBinary(t) {
    return Co.startLargeBinary(t), Co.endLargeBinary(t);
  }
}, dy = class $o {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsLargeUtf8(t, e) {
    return (e || new $o()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeUtf8(t, e) {
    return t.setPosition(t.position() + Mt), (e || new $o()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeUtf8(t) {
    t.startObject(0);
  }
  static endLargeUtf8(t) {
    return t.endObject();
  }
  static createLargeUtf8(t) {
    return $o.startLargeUtf8(t), $o.endLargeUtf8(t);
  }
}, hy = class Vo {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsList(t, e) {
    return (e || new Vo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Vo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return Vo.startList(t), Vo.endList(t);
  }
}, Ac = class Br {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMap(t, e) {
    return (e || new Br()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Br()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Br.startMap(t), Br.addKeysSorted(t, e), Br.endMap(t);
  }
}, fy = class Po {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsNull(t, e) {
    return (e || new Po()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Po()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return Po.startNull(t), Po.endNull(t);
  }
}, py = class ko {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsStruct_(t, e) {
    return (e || new ko()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsStruct_(t, e) {
    return t.setPosition(t.position() + Mt), (e || new ko()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startStruct_(t) {
    t.startObject(0);
  }
  static endStruct_(t) {
    return t.endObject();
  }
  static createStruct_(t) {
    return ko.startStruct_(t), ko.endStruct_(t);
  }
}, jo = class xs {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTime(t, e) {
    return (e || new xs()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTime(t, e) {
    return t.setPosition(t.position() + Mt), (e || new xs()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Z.MILLISECOND;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 32;
  }
  static startTime(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, Z.MILLISECOND);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(1, e, 32);
  }
  static endTime(t) {
    return t.endObject();
  }
  static createTime(t, e, n) {
    return xs.startTime(t), xs.addUnit(t, e), xs.addBitWidth(t, n), xs.endTime(t);
  }
}, zo = class Cs {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTimestamp(t, e) {
    return (e || new Cs()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTimestamp(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Cs()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Z.SECOND;
  }
  timezone(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startTimestamp(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, Z.SECOND);
  }
  static addTimezone(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endTimestamp(t) {
    return t.endObject();
  }
  static createTimestamp(t, e, n) {
    return Cs.startTimestamp(t), Cs.addUnit(t, e), Cs.addTimezone(t, n), Cs.endTimestamp(t);
  }
}, $s = class Vs {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUnion(t, e) {
    return (e || new Vs()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUnion(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Vs()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  mode() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ie.Sparse;
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
    t.addFieldInt16(0, e, Ie.Sparse);
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
    return Vs.startUnion(t), Vs.addMode(t, e), Vs.addTypeIds(t, n), Vs.endUnion(t);
  }
}, yy = class Wo {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUtf8(t, e) {
    return (e || new Wo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Wo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return Wo.startUtf8(t), Wo.endUtf8(t);
  }
};
var Pt;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.Null = 1] = "Null", i[i.Int = 2] = "Int", i[i.FloatingPoint = 3] = "FloatingPoint", i[i.Binary = 4] = "Binary", i[i.Utf8 = 5] = "Utf8", i[i.Bool = 6] = "Bool", i[i.Decimal = 7] = "Decimal", i[i.Date = 8] = "Date", i[i.Time = 9] = "Time", i[i.Timestamp = 10] = "Timestamp", i[i.Interval = 11] = "Interval", i[i.List = 12] = "List", i[i.Struct_ = 13] = "Struct_", i[i.Union = 14] = "Union", i[i.FixedSizeBinary = 15] = "FixedSizeBinary", i[i.FixedSizeList = 16] = "FixedSizeList", i[i.Map = 17] = "Map", i[i.Duration = 18] = "Duration", i[i.LargeBinary = 19] = "LargeBinary", i[i.LargeUtf8 = 20] = "LargeUtf8", i[i.LargeList = 21] = "LargeList", i[i.RunEndEncoded = 22] = "RunEndEncoded";
})(Pt || (Pt = {}));
let si = class Tc {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsField(t, e) {
    return (e || new Tc()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Tc()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return t ? this.bb.readUint8(this.bb_pos + t) : Pt.NONE;
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
    return e ? (t || new _r()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * children apply only to nested data types like Struct, List and Union. For
   * primitive types children will have length 0.
   */
  children(t, e) {
    const n = this.bb.__offset(this.bb_pos, 14);
    return n ? (e || new Tc()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
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
    return n ? (e || new li()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
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
    t.addFieldInt8(2, e, Pt.NONE);
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
}, ji = class pn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsSchema(t, e) {
    return (e || new pn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, e) {
    return t.setPosition(t.position() + Mt), (e || new pn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * endianness of the buffer
   * it is Little Endian by default
   * if endianness doesn't match the underlying system then the vectors need to be converted
   */
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : no.Little;
  }
  fields(t, e) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (e || new si()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  fieldsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, e) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (e || new li()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
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
    t.addFieldInt16(0, e, no.Little);
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
    return pn.startSchema(t), pn.addEndianness(t, e), pn.addFields(t, n), pn.addCustomMetadata(t, s), pn.addFeatures(t, r), pn.endSchema(t);
  }
};
var Et;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.Schema = 1] = "Schema", i[i.DictionaryBatch = 2] = "DictionaryBatch", i[i.RecordBatch = 3] = "RecordBatch", i[i.Tensor = 4] = "Tensor", i[i.SparseTensor = 5] = "SparseTensor";
})(Et || (Et = {}));
var f;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.Null = 1] = "Null", i[i.Int = 2] = "Int", i[i.Float = 3] = "Float", i[i.Binary = 4] = "Binary", i[i.Utf8 = 5] = "Utf8", i[i.Bool = 6] = "Bool", i[i.Decimal = 7] = "Decimal", i[i.Date = 8] = "Date", i[i.Time = 9] = "Time", i[i.Timestamp = 10] = "Timestamp", i[i.Interval = 11] = "Interval", i[i.List = 12] = "List", i[i.Struct = 13] = "Struct", i[i.Union = 14] = "Union", i[i.FixedSizeBinary = 15] = "FixedSizeBinary", i[i.FixedSizeList = 16] = "FixedSizeList", i[i.Map = 17] = "Map", i[i.Duration = 18] = "Duration", i[i.LargeBinary = 19] = "LargeBinary", i[i.LargeUtf8 = 20] = "LargeUtf8", i[i.Dictionary = -1] = "Dictionary", i[i.Int8 = -2] = "Int8", i[i.Int16 = -3] = "Int16", i[i.Int32 = -4] = "Int32", i[i.Int64 = -5] = "Int64", i[i.Uint8 = -6] = "Uint8", i[i.Uint16 = -7] = "Uint16", i[i.Uint32 = -8] = "Uint32", i[i.Uint64 = -9] = "Uint64", i[i.Float16 = -10] = "Float16", i[i.Float32 = -11] = "Float32", i[i.Float64 = -12] = "Float64", i[i.DateDay = -13] = "DateDay", i[i.DateMillisecond = -14] = "DateMillisecond", i[i.TimestampSecond = -15] = "TimestampSecond", i[i.TimestampMillisecond = -16] = "TimestampMillisecond", i[i.TimestampMicrosecond = -17] = "TimestampMicrosecond", i[i.TimestampNanosecond = -18] = "TimestampNanosecond", i[i.TimeSecond = -19] = "TimeSecond", i[i.TimeMillisecond = -20] = "TimeMillisecond", i[i.TimeMicrosecond = -21] = "TimeMicrosecond", i[i.TimeNanosecond = -22] = "TimeNanosecond", i[i.DenseUnion = -23] = "DenseUnion", i[i.SparseUnion = -24] = "SparseUnion", i[i.IntervalDayTime = -25] = "IntervalDayTime", i[i.IntervalYearMonth = -26] = "IntervalYearMonth", i[i.DurationSecond = -27] = "DurationSecond", i[i.DurationMillisecond = -28] = "DurationMillisecond", i[i.DurationMicrosecond = -29] = "DurationMicrosecond", i[i.DurationNanosecond = -30] = "DurationNanosecond";
})(f || (f = {}));
var wn;
(function(i) {
  i[i.OFFSET = 0] = "OFFSET", i[i.DATA = 1] = "DATA", i[i.VALIDITY = 2] = "VALIDITY", i[i.TYPE = 3] = "TYPE";
})(wn || (wn = {}));
const J1 = void 0;
function pa(i) {
  if (i === null)
    return "null";
  if (i === J1)
    return "undefined";
  switch (typeof i) {
    case "number":
      return `${i}`;
    case "bigint":
      return `${i}`;
    case "string":
      return `"${i}"`;
  }
  return typeof i[Symbol.toPrimitive] == "function" ? i[Symbol.toPrimitive]("string") : ArrayBuffer.isView(i) ? i instanceof BigInt64Array || i instanceof BigUint64Array ? `[${[...i].map((t) => pa(t))}]` : `[${i}]` : ArrayBuffer.isView(i) ? `[${i}]` : JSON.stringify(i, (t, e) => typeof e == "bigint" ? `${e}` : e);
}
function Vt(i) {
  if (typeof i == "bigint" && (i < Number.MIN_SAFE_INTEGER || i > Number.MAX_SAFE_INTEGER))
    throw new TypeError(`${i} is not safe to convert to a number.`);
  return Number(i);
}
function Lm(i, t) {
  return Vt(i / t) + Vt(i % t) / Vt(t);
}
const Q1 = Symbol.for("isArrowBigNum");
function Ai(i, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(Ut(this.TypedArray, i), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(i, ...t), this.constructor.prototype);
}
Ai.prototype[Q1] = !0;
Ai.prototype.toJSON = function() {
  return `"${ga(this)}"`;
};
Ai.prototype.valueOf = function(i) {
  return Um(this, i);
};
Ai.prototype.toString = function() {
  return ga(this);
};
Ai.prototype[Symbol.toPrimitive] = function(i = "default") {
  switch (i) {
    case "number":
      return Um(this);
    case "string":
      return ga(this);
    case "default":
      return tO(this);
  }
  return ga(this);
};
function Kr(...i) {
  return Ai.apply(this, i);
}
function Gr(...i) {
  return Ai.apply(this, i);
}
function ya(...i) {
  return Ai.apply(this, i);
}
Object.setPrototypeOf(Kr.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(Gr.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(ya.prototype, Object.create(Uint32Array.prototype));
Object.assign(Kr.prototype, Ai.prototype, { constructor: Kr, signed: !0, TypedArray: Int32Array, BigIntArray: BigInt64Array });
Object.assign(Gr.prototype, Ai.prototype, { constructor: Gr, signed: !1, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
Object.assign(ya.prototype, Ai.prototype, { constructor: ya, signed: !0, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
const Z1 = BigInt(4294967296) * BigInt(4294967296), X1 = Z1 - BigInt(1);
function Um(i, t) {
  const { buffer: e, byteOffset: n, byteLength: s, signed: r } = i, o = new BigUint64Array(e, n, s / 8), a = r && o.at(-1) & BigInt(1) << BigInt(63);
  let c = BigInt(0), l = 0;
  if (a) {
    for (const u of o)
      c |= (u ^ X1) * (BigInt(1) << BigInt(64 * l++));
    c *= BigInt(-1), c -= BigInt(1);
  } else
    for (const u of o)
      c |= u * (BigInt(1) << BigInt(64 * l++));
  if (typeof t == "number") {
    const u = BigInt(Math.pow(10, t)), d = c / u, m = c % u;
    return Vt(d) + Vt(m) / Vt(u);
  }
  return Vt(c);
}
function ga(i) {
  if (i.byteLength === 8)
    return `${new i.BigIntArray(i.buffer, i.byteOffset, 1)[0]}`;
  if (!i.signed)
    return Wu(i);
  let t = new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2);
  if (new Int16Array([t.at(-1)])[0] >= 0)
    return Wu(i);
  t = t.slice();
  let n = 1;
  for (let r = 0; r < t.length; r++) {
    const o = t[r], a = ~o + n;
    t[r] = a, n &= o === 0 ? 1 : 0;
  }
  return `-${Wu(t)}`;
}
function tO(i) {
  return i.byteLength === 8 ? new i.BigIntArray(i.buffer, i.byteOffset, 1)[0] : ga(i);
}
function Wu(i) {
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
let eO = class xm {
  /** @nocollapse */
  static new(t, e) {
    switch (e) {
      case !0:
        return new Kr(t);
      case !1:
        return new Gr(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case BigInt64Array:
        return new Kr(t);
    }
    return t.byteLength === 16 ? new ya(t) : new Gr(t);
  }
  /** @nocollapse */
  static signed(t) {
    return new Kr(t);
  }
  /** @nocollapse */
  static unsigned(t) {
    return new Gr(t);
  }
  /** @nocollapse */
  static decimal(t) {
    return new ya(t);
  }
  constructor(t, e) {
    return xm.new(t, e);
  }
};
var Cm, $m, Vm, Pm, km, jm, zm, Wm, Hm, Ym, Km, Gm, qm, Jm, Qm, Zm, Xm, t_, e_, i_, n_, s_;
let U = class Ad {
  /** @nocollapse */
  static isNull(t) {
    return t?.typeId === f.Null;
  }
  /** @nocollapse */
  static isInt(t) {
    return t?.typeId === f.Int;
  }
  /** @nocollapse */
  static isFloat(t) {
    return t?.typeId === f.Float;
  }
  /** @nocollapse */
  static isBinary(t) {
    return t?.typeId === f.Binary;
  }
  /** @nocollapse */
  static isLargeBinary(t) {
    return t?.typeId === f.LargeBinary;
  }
  /** @nocollapse */
  static isUtf8(t) {
    return t?.typeId === f.Utf8;
  }
  /** @nocollapse */
  static isLargeUtf8(t) {
    return t?.typeId === f.LargeUtf8;
  }
  /** @nocollapse */
  static isBool(t) {
    return t?.typeId === f.Bool;
  }
  /** @nocollapse */
  static isDecimal(t) {
    return t?.typeId === f.Decimal;
  }
  /** @nocollapse */
  static isDate(t) {
    return t?.typeId === f.Date;
  }
  /** @nocollapse */
  static isTime(t) {
    return t?.typeId === f.Time;
  }
  /** @nocollapse */
  static isTimestamp(t) {
    return t?.typeId === f.Timestamp;
  }
  /** @nocollapse */
  static isInterval(t) {
    return t?.typeId === f.Interval;
  }
  /** @nocollapse */
  static isDuration(t) {
    return t?.typeId === f.Duration;
  }
  /** @nocollapse */
  static isList(t) {
    return t?.typeId === f.List;
  }
  /** @nocollapse */
  static isStruct(t) {
    return t?.typeId === f.Struct;
  }
  /** @nocollapse */
  static isUnion(t) {
    return t?.typeId === f.Union;
  }
  /** @nocollapse */
  static isFixedSizeBinary(t) {
    return t?.typeId === f.FixedSizeBinary;
  }
  /** @nocollapse */
  static isFixedSizeList(t) {
    return t?.typeId === f.FixedSizeList;
  }
  /** @nocollapse */
  static isMap(t) {
    return t?.typeId === f.Map;
  }
  /** @nocollapse */
  static isDictionary(t) {
    return t?.typeId === f.Dictionary;
  }
  /** @nocollapse */
  static isDenseUnion(t) {
    return Ad.isUnion(t) && t.mode === Ie.Dense;
  }
  /** @nocollapse */
  static isSparseUnion(t) {
    return Ad.isUnion(t) && t.mode === Ie.Sparse;
  }
  constructor(t) {
    this.typeId = t;
  }
};
Cm = Symbol.toStringTag;
U[Cm] = ((i) => (i.children = null, i.ArrayType = Array, i.OffsetArrayType = Int32Array, i[Symbol.toStringTag] = "DataType"))(U.prototype);
let ds = class extends U {
  constructor() {
    super(f.Null);
  }
  toString() {
    return "Null";
  }
};
$m = Symbol.toStringTag;
ds[$m] = ((i) => i[Symbol.toStringTag] = "Null")(ds.prototype);
let Xs = class extends U {
  constructor(t, e) {
    super(f.Int), this.isSigned = t, this.bitWidth = e;
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
};
Vm = Symbol.toStringTag;
Xs[Vm] = ((i) => (i.isSigned = null, i.bitWidth = null, i[Symbol.toStringTag] = "Int"))(Xs.prototype);
let ma = class extends Xs {
  constructor() {
    super(!0, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
};
Object.defineProperty(ma.prototype, "ArrayType", { value: Int32Array });
let ll = class extends U {
  constructor(t) {
    super(f.Float), this.precision = t;
  }
  get ArrayType() {
    switch (this.precision) {
      case we.HALF:
        return Uint16Array;
      case we.SINGLE:
        return Float32Array;
      case we.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
};
Pm = Symbol.toStringTag;
ll[Pm] = ((i) => (i.precision = null, i[Symbol.toStringTag] = "Float"))(ll.prototype);
let ul = class extends U {
  constructor() {
    super(f.Binary);
  }
  toString() {
    return "Binary";
  }
};
km = Symbol.toStringTag;
ul[km] = ((i) => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Binary"))(ul.prototype);
let dl = class extends U {
  constructor() {
    super(f.LargeBinary);
  }
  toString() {
    return "LargeBinary";
  }
};
jm = Symbol.toStringTag;
dl[jm] = ((i) => (i.ArrayType = Uint8Array, i.OffsetArrayType = BigInt64Array, i[Symbol.toStringTag] = "LargeBinary"))(dl.prototype);
let hl = class extends U {
  constructor() {
    super(f.Utf8);
  }
  toString() {
    return "Utf8";
  }
};
zm = Symbol.toStringTag;
hl[zm] = ((i) => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Utf8"))(hl.prototype);
let fl = class extends U {
  constructor() {
    super(f.LargeUtf8);
  }
  toString() {
    return "LargeUtf8";
  }
};
Wm = Symbol.toStringTag;
fl[Wm] = ((i) => (i.ArrayType = Uint8Array, i.OffsetArrayType = BigInt64Array, i[Symbol.toStringTag] = "LargeUtf8"))(fl.prototype);
let pl = class extends U {
  constructor() {
    super(f.Bool);
  }
  toString() {
    return "Bool";
  }
};
Hm = Symbol.toStringTag;
pl[Hm] = ((i) => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Bool"))(pl.prototype);
let yl = class extends U {
  constructor(t, e, n = 128) {
    super(f.Decimal), this.scale = t, this.precision = e, this.bitWidth = n;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
};
Ym = Symbol.toStringTag;
yl[Ym] = ((i) => (i.scale = null, i.precision = null, i.ArrayType = Uint32Array, i[Symbol.toStringTag] = "Decimal"))(yl.prototype);
let gl = class extends U {
  constructor(t) {
    super(f.Date), this.unit = t;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${di[this.unit]}>`;
  }
  get ArrayType() {
    return this.unit === di.DAY ? Int32Array : BigInt64Array;
  }
};
Km = Symbol.toStringTag;
gl[Km] = ((i) => (i.unit = null, i[Symbol.toStringTag] = "Date"))(gl.prototype);
let ml = class extends U {
  constructor(t, e) {
    super(f.Time), this.unit = t, this.bitWidth = e;
  }
  toString() {
    return `Time${this.bitWidth}<${Z[this.unit]}>`;
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
};
Gm = Symbol.toStringTag;
ml[Gm] = ((i) => (i.unit = null, i.bitWidth = null, i[Symbol.toStringTag] = "Time"))(ml.prototype);
let _l = class extends U {
  constructor(t, e) {
    super(f.Timestamp), this.unit = t, this.timezone = e;
  }
  toString() {
    return `Timestamp<${Z[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
};
qm = Symbol.toStringTag;
_l[qm] = ((i) => (i.unit = null, i.timezone = null, i.ArrayType = BigInt64Array, i[Symbol.toStringTag] = "Timestamp"))(_l.prototype);
let bl = class extends U {
  constructor(t) {
    super(f.Interval), this.unit = t;
  }
  toString() {
    return `Interval<${sn[this.unit]}>`;
  }
};
Jm = Symbol.toStringTag;
bl[Jm] = ((i) => (i.unit = null, i.ArrayType = Int32Array, i[Symbol.toStringTag] = "Interval"))(bl.prototype);
let vl = class extends U {
  constructor(t) {
    super(f.Duration), this.unit = t;
  }
  toString() {
    return `Duration<${Z[this.unit]}>`;
  }
};
Qm = Symbol.toStringTag;
vl[Qm] = ((i) => (i.unit = null, i.ArrayType = BigInt64Array, i[Symbol.toStringTag] = "Duration"))(vl.prototype);
let wl = class extends U {
  constructor(t) {
    super(f.List), this.children = [t];
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
};
Zm = Symbol.toStringTag;
wl[Zm] = ((i) => (i.children = null, i[Symbol.toStringTag] = "List"))(wl.prototype);
let Ae = class extends U {
  constructor(t) {
    super(f.Struct), this.children = t;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
};
Xm = Symbol.toStringTag;
Ae[Xm] = ((i) => (i.children = null, i[Symbol.toStringTag] = "Struct"))(Ae.prototype);
let Il = class extends U {
  constructor(t, e, n) {
    super(f.Union), this.mode = t, this.children = n, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce((s, r, o) => (s[r] = o) && s || s, /* @__PURE__ */ Object.create(null));
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
};
t_ = Symbol.toStringTag;
Il[t_] = ((i) => (i.mode = null, i.typeIds = null, i.children = null, i.typeIdToChildIndex = null, i.ArrayType = Int8Array, i[Symbol.toStringTag] = "Union"))(Il.prototype);
let Sl = class extends U {
  constructor(t) {
    super(f.FixedSizeBinary), this.byteWidth = t;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
};
e_ = Symbol.toStringTag;
Sl[e_] = ((i) => (i.byteWidth = null, i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "FixedSizeBinary"))(Sl.prototype);
let Ol = class extends U {
  constructor(t, e) {
    super(f.FixedSizeList), this.listSize = t, this.children = [e];
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
};
i_ = Symbol.toStringTag;
Ol[i_] = ((i) => (i.children = null, i.listSize = null, i[Symbol.toStringTag] = "FixedSizeList"))(Ol.prototype);
let Dl = class extends U {
  constructor(t, e = !1) {
    var n, s, r;
    if (super(f.Map), this.children = [t], this.keysSorted = e, t && (t.name = "entries", !((n = t?.type) === null || n === void 0) && n.children)) {
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
};
n_ = Symbol.toStringTag;
Dl[n_] = ((i) => (i.children = null, i.keysSorted = null, i[Symbol.toStringTag] = "Map_"))(Dl.prototype);
const iO = /* @__PURE__ */ ((i) => () => ++i)(-1);
let so = class extends U {
  constructor(t, e, n, s) {
    super(f.Dictionary), this.indices = e, this.dictionary = t, this.isOrdered = s || !1, this.id = n == null ? iO() : Vt(n);
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
};
s_ = Symbol.toStringTag;
so[s_] = ((i) => (i.id = null, i.indices = null, i.isOrdered = null, i.dictionary = null, i[Symbol.toStringTag] = "Dictionary"))(so.prototype);
function In(i) {
  const t = i;
  switch (i.typeId) {
    case f.Decimal:
      return i.bitWidth / 32;
    case f.Interval:
      return 1 + t.unit;
    // case Type.Int: return 1 + +((t as Int_).bitWidth > 32);
    // case Type.Time: return 1 + +((t as Time_).bitWidth > 32);
    case f.FixedSizeList:
      return t.listSize;
    case f.FixedSizeBinary:
      return t.byteWidth;
    default:
      return 1;
  }
}
let ft = class {
  visitMany(t, ...e) {
    return t.map((n, s) => this.visit(n, ...e.map((r) => r[s])));
  }
  visit(...t) {
    return this.getVisitFn(t[0], !1).apply(this, t);
  }
  getVisitFn(t, e = !0) {
    return nO(this, t, e);
  }
  getVisitFnByTypeId(t, e = !0) {
    return Nr(this, t, e);
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
};
function nO(i, t, e = !0) {
  return typeof t == "number" ? Nr(i, t, e) : typeof t == "string" && t in f ? Nr(i, f[t], e) : t && t instanceof U ? Nr(i, gy(t), e) : t?.type && t.type instanceof U ? Nr(i, gy(t.type), e) : Nr(i, f.NONE, e);
}
function Nr(i, t, e = !0) {
  let n = null;
  switch (t) {
    case f.Null:
      n = i.visitNull;
      break;
    case f.Bool:
      n = i.visitBool;
      break;
    case f.Int:
      n = i.visitInt;
      break;
    case f.Int8:
      n = i.visitInt8 || i.visitInt;
      break;
    case f.Int16:
      n = i.visitInt16 || i.visitInt;
      break;
    case f.Int32:
      n = i.visitInt32 || i.visitInt;
      break;
    case f.Int64:
      n = i.visitInt64 || i.visitInt;
      break;
    case f.Uint8:
      n = i.visitUint8 || i.visitInt;
      break;
    case f.Uint16:
      n = i.visitUint16 || i.visitInt;
      break;
    case f.Uint32:
      n = i.visitUint32 || i.visitInt;
      break;
    case f.Uint64:
      n = i.visitUint64 || i.visitInt;
      break;
    case f.Float:
      n = i.visitFloat;
      break;
    case f.Float16:
      n = i.visitFloat16 || i.visitFloat;
      break;
    case f.Float32:
      n = i.visitFloat32 || i.visitFloat;
      break;
    case f.Float64:
      n = i.visitFloat64 || i.visitFloat;
      break;
    case f.Utf8:
      n = i.visitUtf8;
      break;
    case f.LargeUtf8:
      n = i.visitLargeUtf8;
      break;
    case f.Binary:
      n = i.visitBinary;
      break;
    case f.LargeBinary:
      n = i.visitLargeBinary;
      break;
    case f.FixedSizeBinary:
      n = i.visitFixedSizeBinary;
      break;
    case f.Date:
      n = i.visitDate;
      break;
    case f.DateDay:
      n = i.visitDateDay || i.visitDate;
      break;
    case f.DateMillisecond:
      n = i.visitDateMillisecond || i.visitDate;
      break;
    case f.Timestamp:
      n = i.visitTimestamp;
      break;
    case f.TimestampSecond:
      n = i.visitTimestampSecond || i.visitTimestamp;
      break;
    case f.TimestampMillisecond:
      n = i.visitTimestampMillisecond || i.visitTimestamp;
      break;
    case f.TimestampMicrosecond:
      n = i.visitTimestampMicrosecond || i.visitTimestamp;
      break;
    case f.TimestampNanosecond:
      n = i.visitTimestampNanosecond || i.visitTimestamp;
      break;
    case f.Time:
      n = i.visitTime;
      break;
    case f.TimeSecond:
      n = i.visitTimeSecond || i.visitTime;
      break;
    case f.TimeMillisecond:
      n = i.visitTimeMillisecond || i.visitTime;
      break;
    case f.TimeMicrosecond:
      n = i.visitTimeMicrosecond || i.visitTime;
      break;
    case f.TimeNanosecond:
      n = i.visitTimeNanosecond || i.visitTime;
      break;
    case f.Decimal:
      n = i.visitDecimal;
      break;
    case f.List:
      n = i.visitList;
      break;
    case f.Struct:
      n = i.visitStruct;
      break;
    case f.Union:
      n = i.visitUnion;
      break;
    case f.DenseUnion:
      n = i.visitDenseUnion || i.visitUnion;
      break;
    case f.SparseUnion:
      n = i.visitSparseUnion || i.visitUnion;
      break;
    case f.Dictionary:
      n = i.visitDictionary;
      break;
    case f.Interval:
      n = i.visitInterval;
      break;
    case f.IntervalDayTime:
      n = i.visitIntervalDayTime || i.visitInterval;
      break;
    case f.IntervalYearMonth:
      n = i.visitIntervalYearMonth || i.visitInterval;
      break;
    case f.Duration:
      n = i.visitDuration;
      break;
    case f.DurationSecond:
      n = i.visitDurationSecond || i.visitDuration;
      break;
    case f.DurationMillisecond:
      n = i.visitDurationMillisecond || i.visitDuration;
      break;
    case f.DurationMicrosecond:
      n = i.visitDurationMicrosecond || i.visitDuration;
      break;
    case f.DurationNanosecond:
      n = i.visitDurationNanosecond || i.visitDuration;
      break;
    case f.FixedSizeList:
      n = i.visitFixedSizeList;
      break;
    case f.Map:
      n = i.visitMap;
      break;
  }
  if (typeof n == "function")
    return n;
  if (!e)
    return () => null;
  throw new Error(`Unrecognized type '${f[t]}'`);
}
function gy(i) {
  switch (i.typeId) {
    case f.Null:
      return f.Null;
    case f.Int: {
      const { bitWidth: t, isSigned: e } = i;
      switch (t) {
        case 8:
          return e ? f.Int8 : f.Uint8;
        case 16:
          return e ? f.Int16 : f.Uint16;
        case 32:
          return e ? f.Int32 : f.Uint32;
        case 64:
          return e ? f.Int64 : f.Uint64;
      }
      return f.Int;
    }
    case f.Float:
      switch (i.precision) {
        case we.HALF:
          return f.Float16;
        case we.SINGLE:
          return f.Float32;
        case we.DOUBLE:
          return f.Float64;
      }
      return f.Float;
    case f.Binary:
      return f.Binary;
    case f.LargeBinary:
      return f.LargeBinary;
    case f.Utf8:
      return f.Utf8;
    case f.LargeUtf8:
      return f.LargeUtf8;
    case f.Bool:
      return f.Bool;
    case f.Decimal:
      return f.Decimal;
    case f.Time:
      switch (i.unit) {
        case Z.SECOND:
          return f.TimeSecond;
        case Z.MILLISECOND:
          return f.TimeMillisecond;
        case Z.MICROSECOND:
          return f.TimeMicrosecond;
        case Z.NANOSECOND:
          return f.TimeNanosecond;
      }
      return f.Time;
    case f.Timestamp:
      switch (i.unit) {
        case Z.SECOND:
          return f.TimestampSecond;
        case Z.MILLISECOND:
          return f.TimestampMillisecond;
        case Z.MICROSECOND:
          return f.TimestampMicrosecond;
        case Z.NANOSECOND:
          return f.TimestampNanosecond;
      }
      return f.Timestamp;
    case f.Date:
      switch (i.unit) {
        case di.DAY:
          return f.DateDay;
        case di.MILLISECOND:
          return f.DateMillisecond;
      }
      return f.Date;
    case f.Interval:
      switch (i.unit) {
        case sn.DAY_TIME:
          return f.IntervalDayTime;
        case sn.YEAR_MONTH:
          return f.IntervalYearMonth;
      }
      return f.Interval;
    case f.Duration:
      switch (i.unit) {
        case Z.SECOND:
          return f.DurationSecond;
        case Z.MILLISECOND:
          return f.DurationMillisecond;
        case Z.MICROSECOND:
          return f.DurationMicrosecond;
        case Z.NANOSECOND:
          return f.DurationNanosecond;
      }
      return f.Duration;
    case f.Map:
      return f.Map;
    case f.List:
      return f.List;
    case f.Struct:
      return f.Struct;
    case f.Union:
      switch (i.mode) {
        case Ie.Dense:
          return f.DenseUnion;
        case Ie.Sparse:
          return f.SparseUnion;
      }
      return f.Union;
    case f.FixedSizeBinary:
      return f.FixedSizeBinary;
    case f.FixedSizeList:
      return f.FixedSizeList;
    case f.Dictionary:
      return f.Dictionary;
  }
  throw new Error(`Unrecognized type '${f[i.typeId]}'`);
}
ft.prototype.visitInt8 = null;
ft.prototype.visitInt16 = null;
ft.prototype.visitInt32 = null;
ft.prototype.visitInt64 = null;
ft.prototype.visitUint8 = null;
ft.prototype.visitUint16 = null;
ft.prototype.visitUint32 = null;
ft.prototype.visitUint64 = null;
ft.prototype.visitFloat16 = null;
ft.prototype.visitFloat32 = null;
ft.prototype.visitFloat64 = null;
ft.prototype.visitDateDay = null;
ft.prototype.visitDateMillisecond = null;
ft.prototype.visitTimestampSecond = null;
ft.prototype.visitTimestampMillisecond = null;
ft.prototype.visitTimestampMicrosecond = null;
ft.prototype.visitTimestampNanosecond = null;
ft.prototype.visitTimeSecond = null;
ft.prototype.visitTimeMillisecond = null;
ft.prototype.visitTimeMicrosecond = null;
ft.prototype.visitTimeNanosecond = null;
ft.prototype.visitDenseUnion = null;
ft.prototype.visitSparseUnion = null;
ft.prototype.visitIntervalDayTime = null;
ft.prototype.visitIntervalYearMonth = null;
ft.prototype.visitDuration = null;
ft.prototype.visitDurationSecond = null;
ft.prototype.visitDurationMillisecond = null;
ft.prototype.visitDurationMicrosecond = null;
ft.prototype.visitDurationNanosecond = null;
const r_ = new Float64Array(1), pr = new Uint32Array(r_.buffer);
function o_(i) {
  const t = (i & 31744) >> 10, e = (i & 1023) / 1024, n = Math.pow(-1, (i & 32768) >> 15);
  switch (t) {
    case 31:
      return n * (e ? Number.NaN : 1 / 0);
    case 0:
      return n * (e ? 6103515625e-14 * e : 0);
  }
  return n * Math.pow(2, t - 15) * (1 + e);
}
function sO(i) {
  if (i !== i)
    return 32256;
  r_[0] = i;
  const t = (pr[1] & 2147483648) >> 16 & 65535;
  let e = pr[1] & 2146435072, n = 0;
  return e >= 1089470464 ? pr[0] > 0 ? e = 31744 : (e = (e & 2080374784) >> 16, n = (pr[1] & 1048575) >> 10) : e <= 1056964608 ? (n = 1048576 + (pr[1] & 1048575), n = 1048576 + (n << (e >> 20) - 998) >> 21, e = 0) : (e = e - 1056964608 >> 10, n = (pr[1] & 1048575) + 512 >> 10), t | e | n & 65535;
}
let tt = class extends ft {
};
function st(i) {
  return (t, e, n) => {
    if (t.setValid(e, n != null))
      return i(t, e, n);
  };
}
const rO = (i, t, e) => {
  i[t] = Math.floor(e / 864e5);
}, a_ = (i, t, e, n) => {
  if (e + 1 < t.length) {
    const s = Vt(t[e]), r = Vt(t[e + 1]);
    i.set(n.subarray(0, r - s), s);
  }
}, oO = ({ offset: i, values: t }, e, n) => {
  const s = i + e;
  n ? t[s >> 3] |= 1 << s % 8 : t[s >> 3] &= ~(1 << s % 8);
}, Vn = ({ values: i }, t, e) => {
  i[t] = e;
}, Ih = ({ values: i }, t, e) => {
  i[t] = e;
}, c_ = ({ values: i }, t, e) => {
  i[t] = sO(e);
}, aO = (i, t, e) => {
  switch (i.type.precision) {
    case we.HALF:
      return c_(i, t, e);
    case we.SINGLE:
    case we.DOUBLE:
      return Ih(i, t, e);
  }
}, l_ = ({ values: i }, t, e) => {
  rO(i, t, e.valueOf());
}, u_ = ({ values: i }, t, e) => {
  i[t] = BigInt(e);
}, cO = ({ stride: i, values: t }, e, n) => {
  t.set(n.subarray(0, i), i * e);
}, d_ = ({ values: i, valueOffsets: t }, e, n) => a_(i, t, e, n), h_ = ({ values: i, valueOffsets: t }, e, n) => a_(i, t, e, bh(n)), lO = (i, t, e) => {
  i.type.unit === di.DAY ? l_(i, t, e) : u_(i, t, e);
}, f_ = ({ values: i }, t, e) => {
  i[t] = BigInt(e / 1e3);
}, p_ = ({ values: i }, t, e) => {
  i[t] = BigInt(e);
}, y_ = ({ values: i }, t, e) => {
  i[t] = BigInt(e * 1e3);
}, g_ = ({ values: i }, t, e) => {
  i[t] = BigInt(e * 1e6);
}, uO = (i, t, e) => {
  switch (i.type.unit) {
    case Z.SECOND:
      return f_(i, t, e);
    case Z.MILLISECOND:
      return p_(i, t, e);
    case Z.MICROSECOND:
      return y_(i, t, e);
    case Z.NANOSECOND:
      return g_(i, t, e);
  }
}, m_ = ({ values: i }, t, e) => {
  i[t] = e;
}, __ = ({ values: i }, t, e) => {
  i[t] = e;
}, b_ = ({ values: i }, t, e) => {
  i[t] = e;
}, v_ = ({ values: i }, t, e) => {
  i[t] = e;
}, dO = (i, t, e) => {
  switch (i.type.unit) {
    case Z.SECOND:
      return m_(i, t, e);
    case Z.MILLISECOND:
      return __(i, t, e);
    case Z.MICROSECOND:
      return b_(i, t, e);
    case Z.NANOSECOND:
      return v_(i, t, e);
  }
}, hO = ({ values: i, stride: t }, e, n) => {
  i.set(n.subarray(0, t), t * e);
}, fO = (i, t, e) => {
  const n = i.children[0], s = i.valueOffsets, r = hi.getVisitFn(n);
  if (Array.isArray(e))
    for (let o = -1, a = s[t], c = s[t + 1]; a < c; )
      r(n, a++, e[++o]);
  else
    for (let o = -1, a = s[t], c = s[t + 1]; a < c; )
      r(n, a++, e.get(++o));
}, pO = (i, t, e) => {
  const n = i.children[0], { valueOffsets: s } = i, r = hi.getVisitFn(n);
  let { [t]: o, [t + 1]: a } = s;
  const c = e instanceof Map ? e.entries() : Object.entries(e);
  for (const l of c)
    if (r(n, o, l), ++o >= a)
      break;
}, yO = (i, t) => (e, n, s, r) => n && e(n, i, t[r]), gO = (i, t) => (e, n, s, r) => n && e(n, i, t.get(r)), mO = (i, t) => (e, n, s, r) => n && e(n, i, t.get(s.name)), _O = (i, t) => (e, n, s, r) => n && e(n, i, t[s.name]), bO = (i, t, e) => {
  const n = i.type.children.map((r) => hi.getVisitFn(r.type)), s = e instanceof Map ? mO(t, e) : e instanceof Kt ? gO(t, e) : Array.isArray(e) ? yO(t, e) : _O(t, e);
  i.type.children.forEach((r, o) => s(n[o], i.children[o], r, o));
}, vO = (i, t, e) => {
  i.type.mode === Ie.Dense ? w_(i, t, e) : I_(i, t, e);
}, w_ = (i, t, e) => {
  const n = i.type.typeIdToChildIndex[i.typeIds[t]], s = i.children[n];
  hi.visit(s, i.valueOffsets[t], e);
}, I_ = (i, t, e) => {
  const n = i.type.typeIdToChildIndex[i.typeIds[t]], s = i.children[n];
  hi.visit(s, t, e);
}, wO = (i, t, e) => {
  var n;
  (n = i.dictionary) === null || n === void 0 || n.set(i.values[t], e);
}, IO = (i, t, e) => {
  i.type.unit === sn.DAY_TIME ? S_(i, t, e) : O_(i, t, e);
}, S_ = ({ values: i }, t, e) => {
  i.set(e.subarray(0, 2), 2 * t);
}, O_ = ({ values: i }, t, e) => {
  i[t] = e[0] * 12 + e[1] % 12;
}, D_ = ({ values: i }, t, e) => {
  i[t] = e;
}, B_ = ({ values: i }, t, e) => {
  i[t] = e;
}, N_ = ({ values: i }, t, e) => {
  i[t] = e;
}, E_ = ({ values: i }, t, e) => {
  i[t] = e;
}, SO = (i, t, e) => {
  switch (i.type.unit) {
    case Z.SECOND:
      return D_(i, t, e);
    case Z.MILLISECOND:
      return B_(i, t, e);
    case Z.MICROSECOND:
      return N_(i, t, e);
    case Z.NANOSECOND:
      return E_(i, t, e);
  }
}, OO = (i, t, e) => {
  const { stride: n } = i, s = i.children[0], r = hi.getVisitFn(s);
  if (Array.isArray(e))
    for (let o = -1, a = t * n; ++o < n; )
      r(s, a + o, e[o]);
  else
    for (let o = -1, a = t * n; ++o < n; )
      r(s, a + o, e.get(o));
};
tt.prototype.visitBool = st(oO);
tt.prototype.visitInt = st(Vn);
tt.prototype.visitInt8 = st(Vn);
tt.prototype.visitInt16 = st(Vn);
tt.prototype.visitInt32 = st(Vn);
tt.prototype.visitInt64 = st(Vn);
tt.prototype.visitUint8 = st(Vn);
tt.prototype.visitUint16 = st(Vn);
tt.prototype.visitUint32 = st(Vn);
tt.prototype.visitUint64 = st(Vn);
tt.prototype.visitFloat = st(aO);
tt.prototype.visitFloat16 = st(c_);
tt.prototype.visitFloat32 = st(Ih);
tt.prototype.visitFloat64 = st(Ih);
tt.prototype.visitUtf8 = st(h_);
tt.prototype.visitLargeUtf8 = st(h_);
tt.prototype.visitBinary = st(d_);
tt.prototype.visitLargeBinary = st(d_);
tt.prototype.visitFixedSizeBinary = st(cO);
tt.prototype.visitDate = st(lO);
tt.prototype.visitDateDay = st(l_);
tt.prototype.visitDateMillisecond = st(u_);
tt.prototype.visitTimestamp = st(uO);
tt.prototype.visitTimestampSecond = st(f_);
tt.prototype.visitTimestampMillisecond = st(p_);
tt.prototype.visitTimestampMicrosecond = st(y_);
tt.prototype.visitTimestampNanosecond = st(g_);
tt.prototype.visitTime = st(dO);
tt.prototype.visitTimeSecond = st(m_);
tt.prototype.visitTimeMillisecond = st(__);
tt.prototype.visitTimeMicrosecond = st(b_);
tt.prototype.visitTimeNanosecond = st(v_);
tt.prototype.visitDecimal = st(hO);
tt.prototype.visitList = st(fO);
tt.prototype.visitStruct = st(bO);
tt.prototype.visitUnion = st(vO);
tt.prototype.visitDenseUnion = st(w_);
tt.prototype.visitSparseUnion = st(I_);
tt.prototype.visitDictionary = st(wO);
tt.prototype.visitInterval = st(IO);
tt.prototype.visitIntervalDayTime = st(S_);
tt.prototype.visitIntervalYearMonth = st(O_);
tt.prototype.visitDuration = st(SO);
tt.prototype.visitDurationSecond = st(D_);
tt.prototype.visitDurationMillisecond = st(B_);
tt.prototype.visitDurationMicrosecond = st(N_);
tt.prototype.visitDurationNanosecond = st(E_);
tt.prototype.visitFixedSizeList = st(OO);
tt.prototype.visitMap = st(pO);
const hi = new tt(), mi = Symbol.for("parent"), qr = Symbol.for("rowIndex");
let Sh = class {
  constructor(t, e) {
    return this[mi] = t, this[qr] = e, new Proxy(this, new BO());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[qr], e = this[mi], n = e.type.children, s = {};
    for (let r = -1, o = n.length; ++r < o; )
      s[n[r].name] = ze.visit(e.children[r], t);
    return s;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${pa(t)}: ${pa(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new DO(this[mi], this[qr]);
  }
}, DO = class {
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
        ze.visit(this.children[t], this.rowIndex)
      ]
    }) : { done: !0, value: null };
  }
};
Object.defineProperties(Sh.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [mi]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [qr]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
});
let BO = class {
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
    return t[mi].type.children.map((e) => e.name);
  }
  has(t, e) {
    return t[mi].type.children.findIndex((n) => n.name === e) !== -1;
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[mi].type.children.findIndex((n) => n.name === e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const n = t[mi].type.children.findIndex((s) => s.name === e);
    if (n !== -1) {
      const s = ze.visit(t[mi].children[n], t[qr]);
      return Reflect.set(t, e, s), s;
    }
  }
  set(t, e, n) {
    const s = t[mi].type.children.findIndex((r) => r.name === e);
    return s !== -1 ? (hi.visit(t[mi].children[s], t[qr], n), Reflect.set(t, e, n)) : Reflect.has(t, e) || typeof e == "symbol" ? Reflect.set(t, e, n) : !1;
  }
}, W = class extends ft {
};
function et(i) {
  return (t, e) => t.getValid(e) ? i(t, e) : null;
}
const NO = (i, t) => 864e5 * i[t], EO = (i, t) => null, A_ = (i, t, e) => {
  if (e + 1 >= t.length)
    return null;
  const n = Vt(t[e]), s = Vt(t[e + 1]);
  return i.subarray(n, s);
}, AO = ({ offset: i, values: t }, e) => {
  const n = i + e;
  return (t[n >> 3] & 1 << n % 8) !== 0;
}, T_ = ({ values: i }, t) => NO(i, t), F_ = ({ values: i }, t) => Vt(i[t]), Ds = ({ stride: i, values: t }, e) => t[i * e], TO = ({ stride: i, values: t }, e) => o_(t[i * e]), M_ = ({ values: i }, t) => i[t], FO = ({ stride: i, values: t }, e) => t.subarray(i * e, i * (e + 1)), R_ = ({ values: i, valueOffsets: t }, e) => A_(i, t, e), L_ = ({ values: i, valueOffsets: t }, e) => {
  const n = A_(i, t, e);
  return n !== null ? Id(n) : null;
}, MO = ({ values: i }, t) => i[t], RO = ({ type: i, values: t }, e) => i.precision !== we.HALF ? t[e] : o_(t[e]), LO = (i, t) => i.type.unit === di.DAY ? T_(i, t) : F_(i, t), U_ = ({ values: i }, t) => 1e3 * Vt(i[t]), x_ = ({ values: i }, t) => Vt(i[t]), C_ = ({ values: i }, t) => Lm(i[t], BigInt(1e3)), $_ = ({ values: i }, t) => Lm(i[t], BigInt(1e6)), UO = (i, t) => {
  switch (i.type.unit) {
    case Z.SECOND:
      return U_(i, t);
    case Z.MILLISECOND:
      return x_(i, t);
    case Z.MICROSECOND:
      return C_(i, t);
    case Z.NANOSECOND:
      return $_(i, t);
  }
}, V_ = ({ values: i }, t) => i[t], P_ = ({ values: i }, t) => i[t], k_ = ({ values: i }, t) => i[t], j_ = ({ values: i }, t) => i[t], xO = (i, t) => {
  switch (i.type.unit) {
    case Z.SECOND:
      return V_(i, t);
    case Z.MILLISECOND:
      return P_(i, t);
    case Z.MICROSECOND:
      return k_(i, t);
    case Z.NANOSECOND:
      return j_(i, t);
  }
}, CO = ({ values: i, stride: t }, e) => eO.decimal(i.subarray(t * e, t * (e + 1))), $O = (i, t) => {
  const { valueOffsets: e, stride: n, children: s } = i, { [t * n]: r, [t * n + 1]: o } = e, c = s[0].slice(r, o - r);
  return new Kt([c]);
}, VO = (i, t) => {
  const { valueOffsets: e, children: n } = i, { [t]: s, [t + 1]: r } = e, o = n[0];
  return new Oh(o.slice(s, r - s));
}, PO = (i, t) => new Sh(i, t), kO = (i, t) => i.type.mode === Ie.Dense ? z_(i, t) : W_(i, t), z_ = (i, t) => {
  const e = i.type.typeIdToChildIndex[i.typeIds[t]], n = i.children[e];
  return ze.visit(n, i.valueOffsets[t]);
}, W_ = (i, t) => {
  const e = i.type.typeIdToChildIndex[i.typeIds[t]], n = i.children[e];
  return ze.visit(n, t);
}, jO = (i, t) => {
  var e;
  return (e = i.dictionary) === null || e === void 0 ? void 0 : e.get(i.values[t]);
}, zO = (i, t) => i.type.unit === sn.DAY_TIME ? H_(i, t) : Y_(i, t), H_ = ({ values: i }, t) => i.subarray(2 * t, 2 * (t + 1)), Y_ = ({ values: i }, t) => {
  const e = i[t], n = new Int32Array(2);
  return n[0] = Math.trunc(e / 12), n[1] = Math.trunc(e % 12), n;
}, K_ = ({ values: i }, t) => i[t], G_ = ({ values: i }, t) => i[t], q_ = ({ values: i }, t) => i[t], J_ = ({ values: i }, t) => i[t], WO = (i, t) => {
  switch (i.type.unit) {
    case Z.SECOND:
      return K_(i, t);
    case Z.MILLISECOND:
      return G_(i, t);
    case Z.MICROSECOND:
      return q_(i, t);
    case Z.NANOSECOND:
      return J_(i, t);
  }
}, HO = (i, t) => {
  const { stride: e, children: n } = i, r = n[0].slice(t * e, e);
  return new Kt([r]);
};
W.prototype.visitNull = et(EO);
W.prototype.visitBool = et(AO);
W.prototype.visitInt = et(MO);
W.prototype.visitInt8 = et(Ds);
W.prototype.visitInt16 = et(Ds);
W.prototype.visitInt32 = et(Ds);
W.prototype.visitInt64 = et(M_);
W.prototype.visitUint8 = et(Ds);
W.prototype.visitUint16 = et(Ds);
W.prototype.visitUint32 = et(Ds);
W.prototype.visitUint64 = et(M_);
W.prototype.visitFloat = et(RO);
W.prototype.visitFloat16 = et(TO);
W.prototype.visitFloat32 = et(Ds);
W.prototype.visitFloat64 = et(Ds);
W.prototype.visitUtf8 = et(L_);
W.prototype.visitLargeUtf8 = et(L_);
W.prototype.visitBinary = et(R_);
W.prototype.visitLargeBinary = et(R_);
W.prototype.visitFixedSizeBinary = et(FO);
W.prototype.visitDate = et(LO);
W.prototype.visitDateDay = et(T_);
W.prototype.visitDateMillisecond = et(F_);
W.prototype.visitTimestamp = et(UO);
W.prototype.visitTimestampSecond = et(U_);
W.prototype.visitTimestampMillisecond = et(x_);
W.prototype.visitTimestampMicrosecond = et(C_);
W.prototype.visitTimestampNanosecond = et($_);
W.prototype.visitTime = et(xO);
W.prototype.visitTimeSecond = et(V_);
W.prototype.visitTimeMillisecond = et(P_);
W.prototype.visitTimeMicrosecond = et(k_);
W.prototype.visitTimeNanosecond = et(j_);
W.prototype.visitDecimal = et(CO);
W.prototype.visitList = et($O);
W.prototype.visitStruct = et(PO);
W.prototype.visitUnion = et(kO);
W.prototype.visitDenseUnion = et(z_);
W.prototype.visitSparseUnion = et(W_);
W.prototype.visitDictionary = et(jO);
W.prototype.visitInterval = et(zO);
W.prototype.visitIntervalDayTime = et(H_);
W.prototype.visitIntervalYearMonth = et(Y_);
W.prototype.visitDuration = et(WO);
W.prototype.visitDurationSecond = et(K_);
W.prototype.visitDurationMillisecond = et(G_);
W.prototype.visitDurationMicrosecond = et(q_);
W.prototype.visitDurationNanosecond = et(J_);
W.prototype.visitFixedSizeList = et(HO);
W.prototype.visitMap = et(VO);
const ze = new W(), Er = Symbol.for("keys"), Jr = Symbol.for("vals"), Ar = Symbol.for("kKeysAsStrings"), Td = Symbol.for("_kKeysAsStrings");
let Oh = class {
  constructor(t) {
    return this[Er] = new Kt([t.children[0]]).memoize(), this[Jr] = t.children[1], new Proxy(this, new KO());
  }
  /** @ignore */
  get [Ar]() {
    return this[Td] || (this[Td] = Array.from(this[Er].toArray(), String));
  }
  [Symbol.iterator]() {
    return new YO(this[Er], this[Jr]);
  }
  get size() {
    return this[Er].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Er], e = this[Jr], n = {};
    for (let s = -1, r = t.length; ++s < r; )
      n[t.get(s)] = ze.visit(e, s);
    return n;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${pa(t)}: ${pa(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}, YO = class {
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
        ze.visit(this.vals, t)
      ]
    });
  }
}, KO = class {
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
    return t[Ar];
  }
  has(t, e) {
    return t[Ar].includes(e);
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[Ar].indexOf(e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const n = t[Ar].indexOf(e);
    if (n !== -1) {
      const s = ze.visit(Reflect.get(t, Jr), n);
      return Reflect.set(t, e, s), s;
    }
  }
  set(t, e, n) {
    const s = t[Ar].indexOf(e);
    return s !== -1 ? (hi.visit(Reflect.get(t, Jr), s, n), Reflect.set(t, e, n)) : Reflect.has(t, e) ? Reflect.set(t, e, n) : !1;
  }
};
Object.defineProperties(Oh.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [Er]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [Jr]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [Td]: { writable: !0, enumerable: !1, configurable: !1, value: null }
});
let my;
function Q_(i, t, e, n) {
  const { length: s = 0 } = i;
  let r = typeof t != "number" ? 0 : t, o = typeof e != "number" ? s : e;
  return r < 0 && (r = (r % s + s) % s), o < 0 && (o = (o % s + s) % s), o < r && (my = r, r = o, o = my), o > s && (o = s), n ? n(i, r, o) : [r, o];
}
const Dh = (i, t) => i < 0 ? t + i : i, _y = (i) => i !== i;
function vo(i) {
  if (typeof i !== "object" || i === null)
    return _y(i) ? _y : (e) => e === i;
  if (i instanceof Date) {
    const e = i.valueOf();
    return (n) => n instanceof Date ? n.valueOf() === e : !1;
  }
  return ArrayBuffer.isView(i) ? (e) => e ? z1(i, e) : !1 : i instanceof Map ? qO(i) : Array.isArray(i) ? GO(i) : i instanceof Kt ? JO(i) : QO(i, !0);
}
function GO(i) {
  const t = [];
  for (let e = -1, n = i.length; ++e < n; )
    t[e] = vo(i[e]);
  return cu(t);
}
function qO(i) {
  let t = -1;
  const e = [];
  for (const n of i.values())
    e[++t] = vo(n);
  return cu(e);
}
function JO(i) {
  const t = [];
  for (let e = -1, n = i.length; ++e < n; )
    t[e] = vo(i.get(e));
  return cu(t);
}
function QO(i, t = !1) {
  const e = Object.keys(i);
  if (!t && e.length === 0)
    return () => !1;
  const n = [];
  for (let s = -1, r = e.length; ++s < r; )
    n[s] = vo(i[e[s]]);
  return cu(n, e);
}
function cu(i, t) {
  return (e) => {
    if (!e || typeof e != "object")
      return !1;
    switch (e.constructor) {
      case Array:
        return ZO(i, e);
      case Map:
        return by(i, e, e.keys());
      case Oh:
      case Sh:
      case Object:
      case void 0:
        return by(i, e, t || Object.keys(e));
    }
    return e instanceof Kt ? XO(i, e) : !1;
  };
}
function ZO(i, t) {
  const e = i.length;
  if (t.length !== e)
    return !1;
  for (let n = -1; ++n < e; )
    if (!i[n](t[n]))
      return !1;
  return !0;
}
function XO(i, t) {
  const e = i.length;
  if (t.length !== e)
    return !1;
  for (let n = -1; ++n < e; )
    if (!i[n](t.get(n)))
      return !1;
  return !0;
}
function by(i, t, e) {
  const n = e[Symbol.iterator](), s = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), r = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const a = i.length;
  let c = r.next(), l = n.next(), u = s.next();
  for (; o < a && !l.done && !u.done && !c.done && !(l.value !== u.value || !i[o](c.value)); ++o, l = n.next(), u = s.next(), c = r.next())
    ;
  return o === a && l.done && u.done && c.done ? !0 : (n.return && n.return(), s.return && s.return(), r.return && r.return(), !1);
}
function Z_(i, t, e, n) {
  return (e & 1 << n) !== 0;
}
function tD(i, t, e, n) {
  return (e & 1 << n) >> n;
}
function Bl(i, t, e) {
  const n = e.byteLength + 7 & -8;
  if (i > 0 || e.byteLength < n) {
    const s = new Uint8Array(n);
    return s.set(i % 8 === 0 ? e.subarray(i >> 3) : (
      // Otherwise iterate each bit from the offset and return a new one
      Nl(new Bh(e, i, t, null, Z_)).subarray(0, n)
    )), s;
  }
  return e;
}
function Nl(i) {
  const t = [];
  let e = 0, n = 0, s = 0;
  for (const o of i)
    o && (s |= 1 << n), ++n === 8 && (t[e++] = s, s = n = 0);
  (e === 0 || n > 0) && (t[e++] = s);
  const r = new Uint8Array(t.length + 7 & -8);
  return r.set(t), r;
}
let Bh = class {
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
};
function Fd(i, t, e) {
  if (e - t <= 0)
    return 0;
  if (e - t < 8) {
    let r = 0;
    for (const o of new Bh(i, t, e - t, i, tD))
      r += o;
    return r;
  }
  const n = e >> 3 << 3, s = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return (
    // Get the popcnt of bits between the left hand side, and the next highest multiple of 8
    Fd(i, t, s) + // Get the popcnt of bits between the right hand side, and the next lowest multiple of 8
    Fd(i, n, e) + // Get the popcnt of all bits between the left and right hand sides' multiples of 8
    eD(i, s >> 3, n - s >> 3)
  );
}
function eD(i, t, e) {
  let n = 0, s = Math.trunc(t);
  const r = new DataView(i.buffer, i.byteOffset, i.byteLength), o = e === void 0 ? i.byteLength : s + e;
  for (; o - s >= 4; )
    n += Hu(r.getUint32(s)), s += 4;
  for (; o - s >= 2; )
    n += Hu(r.getUint16(s)), s += 2;
  for (; o - s >= 1; )
    n += Hu(r.getUint8(s)), s += 1;
  return n;
}
function Hu(i) {
  let t = Math.trunc(i);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
const iD = -1;
let kt = class Md {
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
      return U.isSparseUnion(t) ? this.children.some((e) => e.nullable) : U.isDenseUnion(t) ? this.children.some((e) => e.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
    }
    return !0;
  }
  get byteLength() {
    let t = 0;
    const { valueOffsets: e, values: n, nullBitmap: s, typeIds: r } = this;
    return e && (t += e.byteLength), n && (t += n.byteLength), s && (t += s.byteLength), r && (t += r.byteLength), this.children.reduce((o, a) => o + a.byteLength, t);
  }
  get nullCount() {
    if (U.isUnion(this.type))
      return this.children.reduce((n, s) => n + s.nullCount, 0);
    let t = this._nullCount, e;
    return t <= iD && (e = this.nullBitmap) && (this._nullCount = t = e.length === 0 ? (
      // no null bitmap, so all values are valid
      0
    ) : this.length - Fd(e, this.offset, this.offset + this.length)), t;
  }
  constructor(t, e, n, s, r, o = [], a) {
    this.type = t, this.children = o, this.dictionary = a, this.offset = Math.floor(Math.max(e || 0, 0)), this.length = Math.floor(Math.max(n || 0, 0)), this._nullCount = Math.floor(Math.max(s || 0, -1));
    let c;
    r instanceof Md ? (this.stride = r.stride, this.values = r.values, this.typeIds = r.typeIds, this.nullBitmap = r.nullBitmap, this.valueOffsets = r.valueOffsets) : (this.stride = In(t), r && ((c = r[0]) && (this.valueOffsets = c), (c = r[1]) && (this.values = c), (c = r[2]) && (this.nullBitmap = c), (c = r[3]) && (this.typeIds = c)));
  }
  getValid(t) {
    const { type: e } = this;
    if (U.isUnion(e)) {
      const n = e, s = this.children[n.typeIdToChildIndex[this.typeIds[t]]], r = n.mode === Ie.Dense ? this.valueOffsets[t] : t;
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
    if (U.isUnion(s)) {
      const r = s, o = this.children[r.typeIdToChildIndex[this.typeIds[t]]], a = r.mode === Ie.Dense ? this.valueOffsets[t] : t;
      n = o.getValid(a), o.setValid(a, e);
    } else {
      let { nullBitmap: r } = this;
      const { offset: o, length: a } = this, c = o + t, l = 1 << c % 8, u = c >> 3;
      (!r || r.byteLength <= u) && (r = new Uint8Array((o + a + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (r.set(Bl(o, a, this.nullBitmap), 0), Object.assign(this, { nullBitmap: r })) : Object.assign(this, { nullBitmap: r, _nullCount: 0 }));
      const d = r[u];
      n = (d & l) !== 0, r[u] = e ? d | l : d & ~l;
    }
    return n !== !!e && (this._nullCount = this.nullCount + (e ? -1 : 1)), e;
  }
  clone(t = this.type, e = this.offset, n = this.length, s = this._nullCount, r = this, o = this.children) {
    return new Md(t, e, n, s, r, o, this.dictionary);
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
    if (this.typeId === f.Null)
      return this.clone(this.type, 0, t, 0);
    const { length: e, nullCount: n } = this, s = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
    s[e >> 3] = (1 << e - (e & -8)) - 1, n > 0 && s.set(Bl(this.offset, e, this.nullBitmap), 0);
    const r = this.buffers;
    return r[wn.VALIDITY] = s, this.clone(this.type, 0, t, n + (t - e), r);
  }
  _sliceBuffers(t, e, n, s) {
    let r;
    const { buffers: o } = this;
    return (r = o[wn.TYPE]) && (o[wn.TYPE] = r.subarray(t, t + e)), (r = o[wn.OFFSET]) && (o[wn.OFFSET] = r.subarray(t, t + e + 1)) || // Otherwise if no offsets, slice the data buffer. Don't slice the data vector for Booleans, since the offset goes by bits not bytes
    (r = o[wn.DATA]) && (o[wn.DATA] = s === 6 ? r : r.subarray(n * t, n * (t + e))), o;
  }
  _sliceChildren(t, e, n) {
    return t.map((s) => s.slice(e, n));
  }
};
kt.prototype.children = Object.freeze([]);
let nD = class Fc extends ft {
  visit(t) {
    return this.getVisitFn(t.type).call(this, t);
  }
  visitNull(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["length"]: s = 0 } = t;
    return new kt(e, n, s, s);
  }
  visitBool(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.nullBitmap), r = Ut(e.ArrayType, t.data), { ["length"]: o = r.length >> 3, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, o, a, [void 0, r, s]);
  }
  visitInt(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.nullBitmap), r = Ut(e.ArrayType, t.data), { ["length"]: o = r.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, o, a, [void 0, r, s]);
  }
  visitFloat(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.nullBitmap), r = Ut(e.ArrayType, t.data), { ["length"]: o = r.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, o, a, [void 0, r, s]);
  }
  visitUtf8(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.data), r = vt(t.nullBitmap), o = Mo(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, a, c, [o, s, r]);
  }
  visitLargeUtf8(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.data), r = vt(t.nullBitmap), o = ry(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, a, c, [o, s, r]);
  }
  visitBinary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.data), r = vt(t.nullBitmap), o = Mo(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, a, c, [o, s, r]);
  }
  visitLargeBinary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.data), r = vt(t.nullBitmap), o = ry(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, a, c, [o, s, r]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.nullBitmap), r = Ut(e.ArrayType, t.data), { ["length"]: o = r.length / In(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, o, a, [void 0, r, s]);
  }
  visitDate(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.nullBitmap), r = Ut(e.ArrayType, t.data), { ["length"]: o = r.length / In(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, o, a, [void 0, r, s]);
  }
  visitTimestamp(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.nullBitmap), r = Ut(e.ArrayType, t.data), { ["length"]: o = r.length / In(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, o, a, [void 0, r, s]);
  }
  visitTime(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.nullBitmap), r = Ut(e.ArrayType, t.data), { ["length"]: o = r.length / In(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, o, a, [void 0, r, s]);
  }
  visitDecimal(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.nullBitmap), r = Ut(e.ArrayType, t.data), { ["length"]: o = r.length / In(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, o, a, [void 0, r, s]);
  }
  visitList(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["child"]: s } = t, r = vt(t.nullBitmap), o = Mo(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, a, c, [o, void 0, r], [s]);
  }
  visitStruct(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["children"]: s = [] } = t, r = vt(t.nullBitmap), { length: o = s.reduce((c, { length: l }) => Math.max(c, l), 0), nullCount: a = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, o, a, [void 0, void 0, r], s);
  }
  visitUnion(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["children"]: s = [] } = t, r = Ut(e.ArrayType, t.typeIds), { ["length"]: o = r.length, ["nullCount"]: a = -1 } = t;
    if (U.isSparseUnion(e))
      return new kt(e, n, o, a, [void 0, void 0, void 0, r], s);
    const c = Mo(t.valueOffsets);
    return new kt(e, n, o, a, [c, void 0, void 0, r], s);
  }
  visitDictionary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.nullBitmap), r = Ut(e.indices.ArrayType, t.data), { ["dictionary"]: o = new Kt([new Fc().visit({ type: e.dictionary })]) } = t, { ["length"]: a = r.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, a, c, [void 0, r, s], [], o);
  }
  visitInterval(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.nullBitmap), r = Ut(e.ArrayType, t.data), { ["length"]: o = r.length / In(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, o, a, [void 0, r, s]);
  }
  visitDuration(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = vt(t.nullBitmap), r = Ut(e.ArrayType, t.data), { ["length"]: o = r.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, o, a, [void 0, r, s]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["child"]: s = new Fc().visit({ type: e.valueType }) } = t, r = vt(t.nullBitmap), { ["length"]: o = s.length / In(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, o, a, [void 0, void 0, r], [s]);
  }
  visitMap(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["child"]: s = new Fc().visit({ type: e.childType }) } = t, r = vt(t.nullBitmap), o = Mo(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new kt(e, n, a, c, [o, void 0, r], [s]);
  }
};
const sD = new nD();
function pt(i) {
  return sD.visit(i);
}
let vy = class {
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
};
function rD(i) {
  return i.some((t) => t.nullable);
}
function X_(i) {
  return i.reduce((t, e) => t + e.nullCount, 0);
}
function tb(i) {
  return i.reduce((t, e, n) => (t[n + 1] = t[n] + e.length, t), new Uint32Array(i.length + 1));
}
function eb(i, t, e, n) {
  const s = [];
  for (let r = -1, o = i.length; ++r < o; ) {
    const a = i[r], c = t[r], { length: l } = a;
    if (c >= n)
      break;
    if (e >= c + l)
      continue;
    if (c >= e && c + l <= n) {
      s.push(a);
      continue;
    }
    const u = Math.max(0, e - c), d = Math.min(n - c, l);
    s.push(a.slice(u, d - u));
  }
  return s.length === 0 && s.push(i[0].slice(0, 0)), s;
}
function Nh(i, t, e, n) {
  let s = 0, r = 0, o = t.length - 1;
  do {
    if (s >= o - 1)
      return e < t[o] ? n(i, s, e - t[s]) : null;
    r = s + Math.trunc((o - s) * 0.5), e < t[r] ? o = r : s = r;
  } while (s < o);
}
function Eh(i, t) {
  return i.getValid(t);
}
function El(i) {
  function t(e, n, s) {
    return i(e[n], s);
  }
  return function(e) {
    const n = this.data;
    return Nh(n, this._offsets, e, t);
  };
}
function ib(i) {
  let t;
  function e(n, s, r) {
    return i(n[s], r, t);
  }
  return function(n, s) {
    const r = this.data;
    t = s;
    const o = Nh(r, this._offsets, n, e);
    return t = void 0, o;
  };
}
function nb(i) {
  let t;
  function e(n, s, r) {
    let o = r, a = 0, c = 0;
    for (let l = s - 1, u = n.length; ++l < u; ) {
      const d = n[l];
      if (~(a = i(d, t, o)))
        return c + a;
      o = 0, c += d.length;
    }
    return -1;
  }
  return function(n, s) {
    t = n;
    const r = this.data, o = typeof s != "number" ? e(r, 0, 0) : Nh(r, this._offsets, s, e);
    return t = void 0, o;
  };
}
let H = class extends ft {
};
function oD(i, t) {
  return t === null && i.length > 0 ? 0 : -1;
}
function aD(i, t) {
  const { nullBitmap: e } = i;
  if (!e || i.nullCount <= 0)
    return -1;
  let n = 0;
  for (const s of new Bh(e, i.offset + (t || 0), i.length, e, Z_)) {
    if (!s)
      return n;
    ++n;
  }
  return -1;
}
function at(i, t, e) {
  if (t === void 0)
    return -1;
  if (t === null)
    switch (i.typeId) {
      // Unions don't have a nullBitmap of its own, so compare the `searchElement` to `get()`.
      case f.Union:
        break;
      // Dictionaries do have a nullBitmap, but their dictionary could also have null elements.
      case f.Dictionary:
        break;
      // All other types can iterate the null bitmap
      default:
        return aD(i, e);
    }
  const n = ze.getVisitFn(i), s = vo(t);
  for (let r = (e || 0) - 1, o = i.length; ++r < o; )
    if (s(n(i, r)))
      return r;
  return -1;
}
function sb(i, t, e) {
  const n = ze.getVisitFn(i), s = vo(t);
  for (let r = (e || 0) - 1, o = i.length; ++r < o; )
    if (s(n(i, r)))
      return r;
  return -1;
}
H.prototype.visitNull = oD;
H.prototype.visitBool = at;
H.prototype.visitInt = at;
H.prototype.visitInt8 = at;
H.prototype.visitInt16 = at;
H.prototype.visitInt32 = at;
H.prototype.visitInt64 = at;
H.prototype.visitUint8 = at;
H.prototype.visitUint16 = at;
H.prototype.visitUint32 = at;
H.prototype.visitUint64 = at;
H.prototype.visitFloat = at;
H.prototype.visitFloat16 = at;
H.prototype.visitFloat32 = at;
H.prototype.visitFloat64 = at;
H.prototype.visitUtf8 = at;
H.prototype.visitLargeUtf8 = at;
H.prototype.visitBinary = at;
H.prototype.visitLargeBinary = at;
H.prototype.visitFixedSizeBinary = at;
H.prototype.visitDate = at;
H.prototype.visitDateDay = at;
H.prototype.visitDateMillisecond = at;
H.prototype.visitTimestamp = at;
H.prototype.visitTimestampSecond = at;
H.prototype.visitTimestampMillisecond = at;
H.prototype.visitTimestampMicrosecond = at;
H.prototype.visitTimestampNanosecond = at;
H.prototype.visitTime = at;
H.prototype.visitTimeSecond = at;
H.prototype.visitTimeMillisecond = at;
H.prototype.visitTimeMicrosecond = at;
H.prototype.visitTimeNanosecond = at;
H.prototype.visitDecimal = at;
H.prototype.visitList = at;
H.prototype.visitStruct = at;
H.prototype.visitUnion = at;
H.prototype.visitDenseUnion = sb;
H.prototype.visitSparseUnion = sb;
H.prototype.visitDictionary = at;
H.prototype.visitInterval = at;
H.prototype.visitIntervalDayTime = at;
H.prototype.visitIntervalYearMonth = at;
H.prototype.visitDuration = at;
H.prototype.visitDurationSecond = at;
H.prototype.visitDurationMillisecond = at;
H.prototype.visitDurationMicrosecond = at;
H.prototype.visitDurationNanosecond = at;
H.prototype.visitFixedSizeList = at;
H.prototype.visitMap = at;
const Al = new H();
let Y = class extends ft {
};
function it(i) {
  const { type: t } = i;
  if (i.nullCount === 0 && i.stride === 1 && // Don't defer to native iterator for timestamps since Numbers are expected
  // (DataType.isTimestamp(type)) && type.unit === TimeUnit.MILLISECOND ||
  (U.isInt(t) && t.bitWidth !== 64 || U.isTime(t) && t.bitWidth !== 64 || U.isFloat(t) && t.precision !== we.HALF))
    return new vy(i.data.length, (n) => {
      const s = i.data[n];
      return s.values.subarray(0, s.length)[Symbol.iterator]();
    });
  let e = 0;
  return new vy(i.data.length, (n) => {
    const r = i.data[n].length, o = i.slice(e, e + r);
    return e += r, new cD(o);
  });
}
let cD = class {
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
};
Y.prototype.visitNull = it;
Y.prototype.visitBool = it;
Y.prototype.visitInt = it;
Y.prototype.visitInt8 = it;
Y.prototype.visitInt16 = it;
Y.prototype.visitInt32 = it;
Y.prototype.visitInt64 = it;
Y.prototype.visitUint8 = it;
Y.prototype.visitUint16 = it;
Y.prototype.visitUint32 = it;
Y.prototype.visitUint64 = it;
Y.prototype.visitFloat = it;
Y.prototype.visitFloat16 = it;
Y.prototype.visitFloat32 = it;
Y.prototype.visitFloat64 = it;
Y.prototype.visitUtf8 = it;
Y.prototype.visitLargeUtf8 = it;
Y.prototype.visitBinary = it;
Y.prototype.visitLargeBinary = it;
Y.prototype.visitFixedSizeBinary = it;
Y.prototype.visitDate = it;
Y.prototype.visitDateDay = it;
Y.prototype.visitDateMillisecond = it;
Y.prototype.visitTimestamp = it;
Y.prototype.visitTimestampSecond = it;
Y.prototype.visitTimestampMillisecond = it;
Y.prototype.visitTimestampMicrosecond = it;
Y.prototype.visitTimestampNanosecond = it;
Y.prototype.visitTime = it;
Y.prototype.visitTimeSecond = it;
Y.prototype.visitTimeMillisecond = it;
Y.prototype.visitTimeMicrosecond = it;
Y.prototype.visitTimeNanosecond = it;
Y.prototype.visitDecimal = it;
Y.prototype.visitList = it;
Y.prototype.visitStruct = it;
Y.prototype.visitUnion = it;
Y.prototype.visitDenseUnion = it;
Y.prototype.visitSparseUnion = it;
Y.prototype.visitDictionary = it;
Y.prototype.visitInterval = it;
Y.prototype.visitIntervalDayTime = it;
Y.prototype.visitIntervalYearMonth = it;
Y.prototype.visitDuration = it;
Y.prototype.visitDurationSecond = it;
Y.prototype.visitDurationMillisecond = it;
Y.prototype.visitDurationMicrosecond = it;
Y.prototype.visitDurationNanosecond = it;
Y.prototype.visitFixedSizeList = it;
Y.prototype.visitMap = it;
const Ah = new Y();
var rb;
const ob = {}, ab = {};
let Kt = class Ps {
  constructor(t) {
    var e, n, s;
    const r = t[0] instanceof Ps ? t.flatMap((a) => a.data) : t;
    if (r.length === 0 || r.some((a) => !(a instanceof kt)))
      throw new TypeError("Vector constructor expects an Array of Data instances.");
    const o = (e = r[0]) === null || e === void 0 ? void 0 : e.type;
    switch (r.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        const { get: a, set: c, indexOf: l } = ob[o.typeId], u = r[0];
        this.isValid = (d) => Eh(u, d), this.get = (d) => a(u, d), this.set = (d, m) => c(u, d, m), this.indexOf = (d) => l(u, d), this._offsets = [0, u.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, ab[o.typeId]), this._offsets = tb(r);
        break;
    }
    this.data = r, this.type = o, this.stride = In(o), this.numChildren = (s = (n = o.children) === null || n === void 0 ? void 0 : n.length) !== null && s !== void 0 ? s : 0, this.length = this._offsets.at(-1);
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
    return rD(this.data);
  }
  /**
   * The number of null elements in this Vector.
   */
  get nullCount() {
    return X_(this.data);
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
    return `${f[this.type.typeId]}Vector`;
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
    return this.get(Dh(t, this.length));
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
    return Ah.visit(this);
  }
  /**
   * Combines two or more Vectors of the same type.
   * @param others Additional Vectors to add to the end of this Vector.
   */
  concat(...t) {
    return new Ps(this.data.concat(t.flatMap((e) => e.data).flat(Number.POSITIVE_INFINITY)));
  }
  /**
   * Return a zero-copy sub-section of this Vector.
   * @param start The beginning of the specified portion of the Vector.
   * @param end The end of the specified portion of the Vector. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    return new Ps(Q_(this, t, e, ({ data: n, _offsets: s }, r, o) => eb(n, s, r, o)));
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
      case f.Int:
      case f.Float:
      case f.Decimal:
      case f.Time:
      case f.Timestamp:
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
    return t > -1 && t < this.numChildren ? new Ps(this.data.map(({ children: e }) => e[t])) : null;
  }
  get isMemoized() {
    return U.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1;
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
    if (U.isDictionary(this.type)) {
      const t = new wy(this.data[0].dictionary), e = this.data.map((n) => {
        const s = n.clone();
        return s.dictionary = t, s;
      });
      return new Ps(e);
    }
    return new wy(this);
  }
  /**
   * Returns a vector without memoization of the {@link get} method. If this
   * vector is not memoized, this method returns this vector.
   *
   * @returns A new vector without memoization.
   */
  unmemoize() {
    if (U.isDictionary(this.type) && this.isMemoized) {
      const t = this.data[0].dictionary.unmemoize(), e = this.data.map((n) => {
        const s = n.clone();
        return s.dictionary = t, s;
      });
      return new Ps(e);
    }
    return this;
  }
};
rb = Symbol.toStringTag;
Kt[rb] = ((i) => {
  i.type = U.prototype, i.data = [], i.length = 0, i.stride = 1, i.numChildren = 0, i._offsets = new Uint32Array([0]), i[Symbol.isConcatSpreadable] = !0;
  const t = Object.keys(f).map((e) => f[e]).filter((e) => typeof e == "number" && e !== f.NONE);
  for (const e of t) {
    const n = ze.getVisitFnByTypeId(e), s = hi.getVisitFnByTypeId(e), r = Al.getVisitFnByTypeId(e);
    ob[e] = { get: n, set: s, indexOf: r }, ab[e] = Object.create(i, {
      isValid: { value: El(Eh) },
      get: { value: El(ze.getVisitFnByTypeId(e)) },
      set: { value: ib(hi.getVisitFnByTypeId(e)) },
      indexOf: { value: nb(Al.getVisitFnByTypeId(e)) }
    });
  }
  return "Vector";
})(Kt.prototype);
let wy = class cb extends Kt {
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
      value: (o, a) => new cb(s.call(this, o, a))
    }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", {
      value: () => new Kt(this.data)
    }), Object.defineProperty(this, "memoize", {
      value: () => this
    });
  }
}, Rd = class {
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
}, $i = class Ld {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFooter(t, e) {
    return (e || new Ld()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFooter(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Ld()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : te.V1;
  }
  schema(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new ji()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  dictionaries(t, e) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (e || new Rd()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, e) {
    const n = this.bb.__offset(this.bb_pos, 10);
    return n ? (e || new Rd()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
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
    return n ? (e || new li()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startFooter(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, te.V1);
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
}, Yt = class ks {
  constructor(t = [], e, n, s = te.V5) {
    this.fields = t || [], this.metadata = e || /* @__PURE__ */ new Map(), n || (n = xd(this.fields)), this.dictionaries = n, this.metadataVersion = s;
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
    return new ks(n, this.metadata);
  }
  /**
   * Construct a new Schema containing only fields at the specified indices.
   *
   * @param fieldIndices Indices of fields to keep.
   * @returns A new Schema of fields at the specified indices.
   */
  selectAt(t) {
    const e = t.map((n) => this.fields[n]).filter(Boolean);
    return new ks(e, this.metadata);
  }
  assign(...t) {
    const e = t[0] instanceof ks ? t[0] : Array.isArray(t[0]) ? new ks(t[0]) : new ks(t), n = [...this.fields], s = uc(uc(/* @__PURE__ */ new Map(), this.metadata), e.metadata), r = e.fields.filter((a) => {
      const c = n.findIndex((l) => l.name === a.name);
      return ~c ? (n[c] = a.clone({
        metadata: uc(uc(/* @__PURE__ */ new Map(), n[c].metadata), a.metadata)
      })) && !1 : !0;
    }), o = xd(r, /* @__PURE__ */ new Map());
    return new ks([...n, ...r], s, new Map([...this.dictionaries, ...o]));
  }
};
Yt.prototype.fields = null;
Yt.prototype.metadata = null;
Yt.prototype.dictionaries = null;
let Xt = class Ud {
  /** @nocollapse */
  static new(...t) {
    let [e, n, s, r] = t;
    return t[0] && typeof t[0] == "object" && ({ name: e } = t[0], n === void 0 && (n = t[0].type), s === void 0 && (s = t[0].nullable), r === void 0 && (r = t[0].metadata)), new Ud(`${e}`, n, s, r);
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
    return !t[0] || typeof t[0] != "object" ? [e = this.name, n = this.type, s = this.nullable, r = this.metadata] = t : { name: e = this.name, type: n = this.type, nullable: s = this.nullable, metadata: r = this.metadata } = t[0], Ud.new(e, n, s, r);
  }
};
Xt.prototype.type = null;
Xt.prototype.name = null;
Xt.prototype.nullable = null;
Xt.prototype.metadata = null;
function uc(i, t) {
  return new Map([...i || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function xd(i, t = /* @__PURE__ */ new Map()) {
  for (let e = -1, n = i.length; ++e < n; ) {
    const r = i[e].type;
    if (U.isDictionary(r)) {
      if (!t.has(r.id))
        t.set(r.id, r.dictionary);
      else if (t.get(r.id) !== r.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    r.children && r.children.length > 0 && xd(r.children, t);
  }
  return t;
}
var lD = Tm, uD = io;
let _a = class {
  /** @nocollapse */
  static decode(t) {
    t = new uD(vt(t));
    const e = $i.getRootAsFooter(t), n = Yt.decode(e.schema(), /* @__PURE__ */ new Map(), e.version());
    return new dD(n, e);
  }
  /** @nocollapse */
  static encode(t) {
    const e = new lD(), n = Yt.encode(e, t.schema);
    $i.startRecordBatchesVector(e, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse())
      ro.encode(e, o);
    const s = e.endVector();
    $i.startDictionariesVector(e, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse())
      ro.encode(e, o);
    const r = e.endVector();
    return $i.startFooter(e), $i.addSchema(e, n), $i.addVersion(e, te.V5), $i.addRecordBatches(e, s), $i.addDictionaries(e, r), $i.finishFooterBuffer(e, $i.endFooter(e)), e.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  constructor(t, e = te.V5, n, s) {
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
}, dD = class extends _a {
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
        return ro.decode(e);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const e = this._footer.dictionaries(t);
      if (e)
        return ro.decode(e);
    }
    return null;
  }
}, ro = class lb {
  /** @nocollapse */
  static decode(t) {
    return new lb(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  /** @nocollapse */
  static encode(t, e) {
    const { metaDataLength: n } = e, s = BigInt(e.offset), r = BigInt(e.bodyLength);
    return Rd.createBlock(t, s, n, r);
  }
  constructor(t, e, n) {
    this.metaDataLength = t, this.offset = Vt(n), this.bodyLength = Vt(e);
  }
};
const Gt = Object.freeze({ done: !0, value: void 0 });
let Iy = class {
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
}, Th = class {
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
}, hD = class extends Th {
  constructor() {
    super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((t) => this._closedPromiseResolve = t);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(t) {
    return v(this, void 0, void 0, function* () {
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
        t.shift().resolve(Gt);
      this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(t) {
    return oi.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  toNodeStream(t) {
    return oi.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  throw(t) {
    return v(this, void 0, void 0, function* () {
      return yield this.abort(t), Gt;
    });
  }
  return(t) {
    return v(this, void 0, void 0, function* () {
      return yield this.close(), Gt;
    });
  }
  read(t) {
    return v(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return v(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(...t) {
    return this._values.length > 0 ? Promise.resolve({ done: !1, value: this._values.shift() }) : this._error ? Promise.reject({ done: !0, value: this._error.error }) : this._closedPromiseResolve ? new Promise((e, n) => {
      this.resolvers.push({ resolve: e, reject: n });
    }) : Promise.resolve(Gt);
  }
  _ensureOpen() {
    if (this._closedPromiseResolve)
      return !0;
    throw new Error("AsyncQueue is closed");
  }
}, Mc = class extends hD {
  write(t) {
    if ((t = vt(t)).byteLength > 0)
      return super.write(t);
  }
  toString(t = !1) {
    return t ? Id(this.toUint8Array(!0)) : this.toUint8Array(!1).then(Id);
  }
  toUint8Array(t = !1) {
    return t ? nn(this._values)[0] : v(this, void 0, void 0, function* () {
      var e, n, s, r;
      const o = [];
      let a = 0;
      try {
        for (var c = !0, l = Te(this), u; u = yield l.next(), e = u.done, !e; c = !0) {
          r = u.value, c = !1;
          const d = r;
          o.push(d), a += d.byteLength;
        }
      } catch (d) {
        n = { error: d };
      } finally {
        try {
          !c && !e && (s = l.return) && (yield s.call(l));
        } finally {
          if (n) throw n.error;
        }
      }
      return nn(o, a)[0];
    });
  }
}, Tl = class {
  constructor(t) {
    t && (this.source = new fD(oi.fromIterable(t)));
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
}, Fl = class ub {
  constructor(t) {
    t instanceof ub ? this.source = t.source : t instanceof Mc ? this.source = new As(oi.fromAsyncIterable(t)) : Bm(t) ? this.source = new As(oi.fromNodeStream(t)) : vh(t) ? this.source = new As(oi.fromDOMStream(t)) : Dm(t) ? this.source = new As(oi.fromDOMStream(t.body)) : $a(t) ? this.source = new As(oi.fromIterable(t)) : Zs(t) ? this.source = new As(oi.fromAsyncIterable(t)) : bo(t) && (this.source = new As(oi.fromAsyncIterable(t)));
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
}, fD = class {
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
    return Object.create(this.source.throw && this.source.throw(t) || Gt);
  }
  return(t) {
    return Object.create(this.source.return && this.source.return(t) || Gt);
  }
}, As = class {
  constructor(t) {
    this.source = t, this._closedPromise = new Promise((e) => this._closedPromiseResolve = e);
  }
  cancel(t) {
    return v(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(t) {
    return v(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return v(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(t) {
    return v(this, arguments, void 0, function* (e, n = "read") {
      return yield this.source.next({ cmd: n, size: e });
    });
  }
  throw(t) {
    return v(this, void 0, void 0, function* () {
      const e = this.source.throw && (yield this.source.throw(t)) || Gt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
  return(t) {
    return v(this, void 0, void 0, function* () {
      const e = this.source.return && (yield this.source.return(t)) || Gt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
}, Sy = class extends Tl {
  constructor(t, e) {
    super(), this.position = 0, this.buffer = vt(t), this.size = e === void 0 ? this.buffer.byteLength : e;
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
}, Ml = class extends Fl {
  constructor(t, e) {
    super(), this.position = 0, this._handle = t, typeof e == "number" ? this.size = e : this._pending = v(this, void 0, void 0, function* () {
      this.size = (yield t.stat()).size, delete this._pending;
    });
  }
  readInt32(t) {
    return v(this, void 0, void 0, function* () {
      const { buffer: e, byteOffset: n } = yield this.readAt(t, 4);
      return new DataView(e, n).getInt32(0, !0);
    });
  }
  seek(t) {
    return v(this, void 0, void 0, function* () {
      return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size;
    });
  }
  read(t) {
    return v(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: e, size: n, position: s } = this;
      if (e && s < n) {
        typeof t != "number" && (t = Number.POSITIVE_INFINITY);
        let r = s, o = 0, a = 0;
        const c = Math.min(n, r + Math.min(n - r, t)), l = new Uint8Array(Math.max(0, (this.position = c) - r));
        for (; (r += a) < c && (o += a) < l.byteLength; )
          ({ bytesRead: a } = yield e.read(l, o, l.byteLength - o, r));
        return l;
      }
      return null;
    });
  }
  readAt(t, e) {
    return v(this, void 0, void 0, function* () {
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
    return v(this, void 0, void 0, function* () {
      const t = this._handle;
      this._handle = null, t && (yield t.close());
    });
  }
  throw(t) {
    return v(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
  return(t) {
    return v(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
};
const pD = 65536;
function jr(i) {
  return i < 0 && (i = 4294967295 + i + 1), `0x${i.toString(16)}`;
}
const oo = 8, Fh = [
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
let db = class {
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
    return s = e[2] * n[3], r += s, s = e[3] * n[2] >>> 0, r += s, this.buffer[0] += r << 16, this.buffer[1] = r >>> 0 < s ? pD : 0, this.buffer[1] += r >>> 16, this.buffer[1] += e[1] * n[3] + e[2] * n[2] + e[3] * n[1], this.buffer[1] += e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0] << 16, this;
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
    return `${jr(this.buffer[1])} ${jr(this.buffer[0])}`;
  }
}, re = class yn extends db {
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return yn.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return yn.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const n = t.length, s = new yn(e);
    for (let r = 0; r < n; ) {
      const o = oo < n - r ? oo : n - r, a = new yn(new Uint32Array([Number.parseInt(t.slice(r, r + o), 10), 0])), c = new yn(new Uint32Array([Fh[o], 0]));
      s.times(c), s.plus(a), r += o;
    }
    return s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let n = -1, s = t.length; ++n < s; )
      yn.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new yn(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new yn(new Uint32Array(t.buffer)).plus(e);
  }
}, oa = class gn extends db {
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
    return gn.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return gn.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const n = t.startsWith("-"), s = t.length, r = new gn(e);
    for (let o = n ? 1 : 0; o < s; ) {
      const a = oo < s - o ? oo : s - o, c = new gn(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0])), l = new gn(new Uint32Array([Fh[a], 0]));
      r.times(l), r.plus(c), o += a;
    }
    return n ? r.negate() : r;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let n = -1, s = t.length; ++n < s; )
      gn.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new gn(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new gn(new Uint32Array(t.buffer)).plus(e);
  }
}, yD = class mn {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return new oa(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new oa(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
  }
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0 && ++this.buffer[1], this.buffer[1] == 0 && ++this.buffer[2], this.buffer[2] == 0 && ++this.buffer[3], this;
  }
  times(t) {
    const e = new re(new Uint32Array([this.buffer[3], 0])), n = new re(new Uint32Array([this.buffer[2], 0])), s = new re(new Uint32Array([this.buffer[1], 0])), r = new re(new Uint32Array([this.buffer[0], 0])), o = new re(new Uint32Array([t.buffer[3], 0])), a = new re(new Uint32Array([t.buffer[2], 0])), c = new re(new Uint32Array([t.buffer[1], 0])), l = new re(new Uint32Array([t.buffer[0], 0]));
    let u = re.multiply(r, l);
    this.buffer[0] = u.low();
    const d = new re(new Uint32Array([u.high(), 0]));
    return u = re.multiply(s, l), d.plus(u), u = re.multiply(r, c), d.plus(u), this.buffer[1] = d.low(), this.buffer[3] = d.lessThan(u) ? 1 : 0, this.buffer[2] = d.high(), new re(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(re.multiply(n, l)).plus(re.multiply(s, c)).plus(re.multiply(r, a)), this.buffer[3] += re.multiply(e, l).plus(re.multiply(n, c)).plus(re.multiply(s, a)).plus(re.multiply(r, o)).low(), this;
  }
  plus(t) {
    const e = new Uint32Array(4);
    return e[3] = this.buffer[3] + t.buffer[3] >>> 0, e[2] = this.buffer[2] + t.buffer[2] >>> 0, e[1] = this.buffer[1] + t.buffer[1] >>> 0, e[0] = this.buffer[0] + t.buffer[0] >>> 0, e[0] < this.buffer[0] >>> 0 && ++e[1], e[1] < this.buffer[1] >>> 0 && ++e[2], e[2] < this.buffer[2] >>> 0 && ++e[3], this.buffer[3] = e[3], this.buffer[2] = e[2], this.buffer[1] = e[1], this.buffer[0] = e[0], this;
  }
  hex() {
    return `${jr(this.buffer[3])} ${jr(this.buffer[2])} ${jr(this.buffer[1])} ${jr(this.buffer[0])}`;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new mn(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new mn(new Uint32Array(t.buffer)).plus(e);
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(4)) {
    return mn.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(4)) {
    return mn.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(4)) {
    const n = t.startsWith("-"), s = t.length, r = new mn(e);
    for (let o = n ? 1 : 0; o < s; ) {
      const a = oo < s - o ? oo : s - o, c = new mn(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0, 0, 0])), l = new mn(new Uint32Array([Fh[a], 0, 0, 0]));
      r.times(l), r.plus(c), o += a;
    }
    return n ? r.negate() : r;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 4);
    for (let n = -1, s = t.length; ++n < s; )
      mn.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 16 * n, 4));
    return e;
  }
}, hb = class extends ft {
  constructor(t, e, n, s, r = te.V5) {
    super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = e, this.buffers = n, this.dictionaries = s, this.metadataVersion = r;
  }
  visit(t) {
    return super.visit(t instanceof Xt ? t.type : t);
  }
  visitNull(t, { length: e } = this.nextFieldNode()) {
    return pt({ type: t, length: e });
  }
  visitBool(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitInt(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitFloat(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitUtf8(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeUtf8(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitBinary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeBinary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitFixedSizeBinary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDate(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitTimestamp(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitTime(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDecimal(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitList(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  visitStruct(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), children: this.visitMany(t.children) });
  }
  visitUnion(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return this.metadataVersion < te.V5 && this.readNullBitmap(t, n), t.mode === Ie.Sparse ? this.visitSparseUnion(t, { length: e, nullCount: n }) : this.visitDenseUnion(t, { length: e, nullCount: n });
  }
  visitDenseUnion(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, typeIds: this.readTypeIds(t), valueOffsets: this.readOffsets(t), children: this.visitMany(t.children) });
  }
  visitSparseUnion(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, typeIds: this.readTypeIds(t), children: this.visitMany(t.children) });
  }
  visitDictionary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t.indices), dictionary: this.readDictionary(t) });
  }
  visitInterval(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDuration(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitFixedSizeList(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), child: this.visit(t.children[0]) });
  }
  visitMap(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
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
}, gD = class extends hb {
  constructor(t, e, n, s, r) {
    super(new Uint8Array(0), e, n, s, r), this.sources = t;
  }
  readNullBitmap(t, e, { offset: n } = this.nextBufferRange()) {
    return e <= 0 ? new Uint8Array(0) : Nl(this.sources[n]);
  }
  readOffsets(t, { offset: e } = this.nextBufferRange()) {
    return Ut(Uint8Array, Ut(t.OffsetArrayType, this.sources[e]));
  }
  readTypeIds(t, { offset: e } = this.nextBufferRange()) {
    return Ut(Uint8Array, Ut(t.ArrayType, this.sources[e]));
  }
  readData(t, { offset: e } = this.nextBufferRange()) {
    const { sources: n } = this;
    return U.isTimestamp(t) || (U.isInt(t) || U.isTime(t)) && t.bitWidth === 64 || U.isDuration(t) || U.isDate(t) && t.unit === di.MILLISECOND ? Ut(Uint8Array, oa.convertArray(n[e])) : U.isDecimal(t) ? Ut(Uint8Array, yD.convertArray(n[e])) : U.isBinary(t) || U.isLargeBinary(t) || U.isFixedSizeBinary(t) ? mD(n[e]) : U.isBool(t) ? Nl(n[e]) : U.isUtf8(t) || U.isLargeUtf8(t) ? bh(n[e].join("")) : Ut(Uint8Array, Ut(t.ArrayType, n[e].map((s) => +s)));
  }
};
function mD(i) {
  const t = i.join(""), e = new Uint8Array(t.length / 2);
  for (let n = 0; n < t.length; n += 2)
    e[n >> 1] = Number.parseInt(t.slice(n, n + 2), 16);
  return e;
}
let K = class extends ft {
  compareSchemas(t, e) {
    return t === e || e instanceof t.constructor && this.compareManyFields(t.fields, e.fields);
  }
  compareManyFields(t, e) {
    return t === e || Array.isArray(t) && Array.isArray(e) && t.length === e.length && t.every((n, s) => this.compareFields(n, e[s]));
  }
  compareFields(t, e) {
    return t === e || e instanceof t.constructor && t.name === e.name && t.nullable === e.nullable && this.visit(t.type, e.type);
  }
};
function Me(i, t) {
  return t instanceof i.constructor;
}
function nr(i, t) {
  return i === t || Me(i, t);
}
function Pn(i, t) {
  return i === t || Me(i, t) && i.bitWidth === t.bitWidth && i.isSigned === t.isSigned;
}
function lu(i, t) {
  return i === t || Me(i, t) && i.precision === t.precision;
}
function _D(i, t) {
  return i === t || Me(i, t) && i.byteWidth === t.byteWidth;
}
function Mh(i, t) {
  return i === t || Me(i, t) && i.unit === t.unit;
}
function Va(i, t) {
  return i === t || Me(i, t) && i.unit === t.unit && i.timezone === t.timezone;
}
function Pa(i, t) {
  return i === t || Me(i, t) && i.unit === t.unit && i.bitWidth === t.bitWidth;
}
function bD(i, t) {
  return i === t || Me(i, t) && i.children.length === t.children.length && hs.compareManyFields(i.children, t.children);
}
function vD(i, t) {
  return i === t || Me(i, t) && i.children.length === t.children.length && hs.compareManyFields(i.children, t.children);
}
function Rh(i, t) {
  return i === t || Me(i, t) && i.mode === t.mode && i.typeIds.every((e, n) => e === t.typeIds[n]) && hs.compareManyFields(i.children, t.children);
}
function wD(i, t) {
  return i === t || Me(i, t) && i.id === t.id && i.isOrdered === t.isOrdered && hs.visit(i.indices, t.indices) && hs.visit(i.dictionary, t.dictionary);
}
function Lh(i, t) {
  return i === t || Me(i, t) && i.unit === t.unit;
}
function ka(i, t) {
  return i === t || Me(i, t) && i.unit === t.unit;
}
function ID(i, t) {
  return i === t || Me(i, t) && i.listSize === t.listSize && i.children.length === t.children.length && hs.compareManyFields(i.children, t.children);
}
function SD(i, t) {
  return i === t || Me(i, t) && i.keysSorted === t.keysSorted && i.children.length === t.children.length && hs.compareManyFields(i.children, t.children);
}
K.prototype.visitNull = nr;
K.prototype.visitBool = nr;
K.prototype.visitInt = Pn;
K.prototype.visitInt8 = Pn;
K.prototype.visitInt16 = Pn;
K.prototype.visitInt32 = Pn;
K.prototype.visitInt64 = Pn;
K.prototype.visitUint8 = Pn;
K.prototype.visitUint16 = Pn;
K.prototype.visitUint32 = Pn;
K.prototype.visitUint64 = Pn;
K.prototype.visitFloat = lu;
K.prototype.visitFloat16 = lu;
K.prototype.visitFloat32 = lu;
K.prototype.visitFloat64 = lu;
K.prototype.visitUtf8 = nr;
K.prototype.visitLargeUtf8 = nr;
K.prototype.visitBinary = nr;
K.prototype.visitLargeBinary = nr;
K.prototype.visitFixedSizeBinary = _D;
K.prototype.visitDate = Mh;
K.prototype.visitDateDay = Mh;
K.prototype.visitDateMillisecond = Mh;
K.prototype.visitTimestamp = Va;
K.prototype.visitTimestampSecond = Va;
K.prototype.visitTimestampMillisecond = Va;
K.prototype.visitTimestampMicrosecond = Va;
K.prototype.visitTimestampNanosecond = Va;
K.prototype.visitTime = Pa;
K.prototype.visitTimeSecond = Pa;
K.prototype.visitTimeMillisecond = Pa;
K.prototype.visitTimeMicrosecond = Pa;
K.prototype.visitTimeNanosecond = Pa;
K.prototype.visitDecimal = nr;
K.prototype.visitList = bD;
K.prototype.visitStruct = vD;
K.prototype.visitUnion = Rh;
K.prototype.visitDenseUnion = Rh;
K.prototype.visitSparseUnion = Rh;
K.prototype.visitDictionary = wD;
K.prototype.visitInterval = Lh;
K.prototype.visitIntervalDayTime = Lh;
K.prototype.visitIntervalYearMonth = Lh;
K.prototype.visitDuration = ka;
K.prototype.visitDurationSecond = ka;
K.prototype.visitDurationMillisecond = ka;
K.prototype.visitDurationMicrosecond = ka;
K.prototype.visitDurationNanosecond = ka;
K.prototype.visitFixedSizeList = ID;
K.prototype.visitMap = SD;
const hs = new K();
function Cd(i, t) {
  return hs.compareSchemas(i, t);
}
function Yu(i, t) {
  return OD(i, t.map((e) => e.data.concat()));
}
function OD(i, t) {
  const e = [...i.fields], n = [], s = { numBatches: t.reduce((d, m) => Math.max(d, m.length), 0) };
  let r = 0, o = 0, a = -1;
  const c = t.length;
  let l, u = [];
  for (; s.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, a = -1; ++a < c; )
      u[a] = l = t[a].shift(), o = Math.min(o, l ? l.length : o);
    Number.isFinite(o) && (u = DD(e, o, u, t, s), o > 0 && (n[r++] = pt({
      type: new Ae(e),
      length: o,
      nullCount: 0,
      children: u.slice()
    })));
  }
  return [
    i = i.assign(e),
    n.map((d) => new Ve(i, d))
  ];
}
function DD(i, t, e, n, s) {
  var r;
  const o = (t + 63 & -64) >> 3;
  for (let a = -1, c = n.length; ++a < c; ) {
    const l = e[a], u = l?.length;
    if (u >= t)
      u === t ? e[a] = l : (e[a] = l.slice(0, t), s.numBatches = Math.max(s.numBatches, n[a].unshift(l.slice(t, u - t))));
    else {
      const d = i[a];
      i[a] = d.clone({ nullable: !0 }), e[a] = (r = l?._changeLengthAndBackfillNullBitmap(t)) !== null && r !== void 0 ? r : pt({
        type: d.type,
        length: t,
        nullCount: t,
        nullBitmap: new Uint8Array(o)
      });
    }
  }
  return e;
}
var fb;
let fs = class js {
  constructor(...t) {
    var e, n;
    if (t.length === 0)
      return this.batches = [], this.schema = new Yt([]), this._offsets = [0], this;
    let s, r;
    t[0] instanceof Yt && (s = t.shift()), t.at(-1) instanceof Uint32Array && (r = t.pop());
    const o = (c) => {
      if (c) {
        if (c instanceof Ve)
          return [c];
        if (c instanceof js)
          return c.batches;
        if (c instanceof kt) {
          if (c.type instanceof Ae)
            return [new Ve(new Yt(c.type.children), c)];
        } else {
          if (Array.isArray(c))
            return c.flatMap((l) => o(l));
          if (typeof c[Symbol.iterator] == "function")
            return [...c].flatMap((l) => o(l));
          if (typeof c == "object") {
            const l = Object.keys(c), u = l.map((_) => new Kt([c[_]])), d = s ?? new Yt(l.map((_, A) => new Xt(String(_), u[A].type, u[A].nullable))), [, m] = Yu(d, u);
            return m.length === 0 ? [new Ve(c)] : m;
          }
        }
      }
      return [];
    }, a = t.flatMap((c) => o(c));
    if (s = (n = s ?? ((e = a[0]) === null || e === void 0 ? void 0 : e.schema)) !== null && n !== void 0 ? n : new Yt([]), !(s instanceof Yt))
      throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const c of a) {
      if (!(c instanceof Ve))
        throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!Cd(s, c.schema))
        throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = s, this.batches = a, this._offsets = r ?? tb(this.data);
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
    return this._nullCount === -1 && (this._nullCount = X_(this.data)), this._nullCount;
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
    return this.get(Dh(t, this.numRows));
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
    return this.batches.length > 0 ? Ah.visit(new Kt(this.data)) : new Array(0)[Symbol.iterator]();
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
    return new js(e, n.map((s) => new Ve(e, s)));
  }
  /**
   * Return a zero-copy sub-section of this Table.
   *
   * @param begin The beginning of the specified portion of the Table.
   * @param end The end of the specified portion of the Table. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const n = this.schema;
    [t, e] = Q_({ length: this.numRows }, t, e);
    const s = eb(this.data, this._offsets, t, e);
    return new js(n, s.map((r) => new Ve(n, r)));
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
        const { type: n } = this.schema.fields[t], s = pt({ type: n, length: 0, nullCount: 0 });
        e.push(s._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new Kt(e);
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
      e || (e = new Kt([pt({ type: new ds(), length: this.numRows })]));
      const r = n.fields.slice(), o = r[t].clone({ type: e.type }), a = this.schema.fields.map((c, l) => this.getChildAt(l));
      [r[t], a[t]] = [o, e], [n, s] = Yu(n, a);
    }
    return new js(n, s);
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
    return new js(e, n);
  }
  assign(t) {
    const e = this.schema.fields, [n, s] = t.schema.fields.reduce((a, c, l) => {
      const [u, d] = a, m = e.findIndex((_) => _.name === c.name);
      return ~m ? d[m] = l : u.push(l), a;
    }, [[], []]), r = this.schema.assign(t.schema), o = [
      ...e.map((a, c) => [c, s[c]]).map(([a, c]) => c === void 0 ? this.getChildAt(a) : t.getChildAt(c)),
      ...n.map((a) => t.getChildAt(a))
    ].filter(Boolean);
    return new js(...Yu(r, o));
  }
};
fb = Symbol.toStringTag;
fs[fb] = ((i) => (i.schema = null, i.batches = [], i._offsets = new Uint32Array([0]), i._nullCount = -1, i[Symbol.isConcatSpreadable] = !0, i.isValid = El(Eh), i.get = El(ze.getVisitFn(f.Struct)), i.set = ib(hi.getVisitFn(f.Struct)), i.indexOf = nb(Al.getVisitFn(f.Struct)), "Table"))(fs.prototype);
var pb;
let Ve = class Ho {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof Yt))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([
          ,
          this.data = pt({
            nullCount: 0,
            type: new Ae(this.schema.fields),
            children: this.schema.fields.map((e) => pt({ type: e.type, nullCount: 0 }))
          })
        ] = t, !(this.data instanceof kt))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = Oy(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [e] = t, { fields: n, children: s, length: r } = Object.keys(e).reduce((c, l, u) => (c.children[u] = e[l], c.length = Math.max(c.length, e[l].length), c.fields[u] = Xt.new({ name: l, type: e[l].type, nullable: !0 }), c), {
          length: 0,
          fields: new Array(),
          children: new Array()
        }), o = new Yt(n), a = pt({ type: new Ae(n), length: r, children: s, nullCount: 0 });
        [this.schema, this.data] = Oy(o, a.children, r);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = yb(this.schema.fields, this.data.children));
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
    return ze.visit(this.data, t);
  }
  /**
    * Get a row value by position.
    * @param index The index of the row to read. A negative index will count back from the last row.
    */
  at(t) {
    return this.get(Dh(t, this.numRows));
  }
  /**
   * Set a row by position.
   * @param index The index of the row to write.
   * @param value The value to set.
   */
  set(t, e) {
    return hi.visit(this.data, t, e);
  }
  /**
   * Retrieve the index of the first occurrence of a row in an RecordBatch.
   * @param element The row to locate in the RecordBatch.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  indexOf(t, e) {
    return Al.visit(this.data, t, e);
  }
  /**
   * Iterator for rows in this RecordBatch.
   */
  [Symbol.iterator]() {
    return Ah.visit(new Kt([this.data]));
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
    return new fs(this.schema, [this, ...t]);
  }
  /**
   * Return a zero-copy sub-section of this RecordBatch.
   * @param start The beginning of the specified portion of the RecordBatch.
   * @param end The end of the specified portion of the RecordBatch. This is exclusive of the row at the index 'end'.
   */
  slice(t, e) {
    const [n] = new Kt([this.data]).slice(t, e).data;
    return new Ho(this.schema, n);
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
    return t > -1 && t < this.schema.fields.length ? new Kt([this.data.children[t]]) : null;
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
      e || (e = new Kt([pt({ type: new ds(), length: this.numRows })]));
      const r = n.fields.slice(), o = s.children.slice(), a = r[t].clone({ type: e.type });
      [r[t], o[t]] = [a, e.data[0]], n = new Yt(r, new Map(this.schema.metadata)), s = pt({ type: new Ae(r), children: o });
    }
    return new Ho(n, s);
  }
  /**
   * Construct a new RecordBatch containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new RecordBatch of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.select(t), n = new Ae(e.fields), s = [];
    for (const r of t) {
      const o = this.schema.fields.findIndex((a) => a.name === r);
      ~o && (s[o] = this.data.children[o]);
    }
    return new Ho(e, pt({ type: n, length: this.numRows, children: s }));
  }
  /**
   * Construct a new RecordBatch containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new RecordBatch of columns matching at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), n = t.map((r) => this.data.children[r]).filter(Boolean), s = pt({ type: new Ae(e.fields), length: this.numRows, children: n });
    return new Ho(e, s);
  }
};
pb = Symbol.toStringTag;
Ve[pb] = ((i) => (i._nullCount = -1, i[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(Ve.prototype);
function Oy(i, t, e = t.reduce((n, s) => Math.max(n, s.length), 0)) {
  var n;
  const s = [...i.fields], r = [...t], o = (e + 63 & -64) >> 3;
  for (const [a, c] of i.fields.entries()) {
    const l = t[a];
    (!l || l.length !== e) && (s[a] = c.clone({ nullable: !0 }), r[a] = (n = l?._changeLengthAndBackfillNullBitmap(e)) !== null && n !== void 0 ? n : pt({
      type: c.type,
      length: e,
      nullCount: e,
      nullBitmap: new Uint8Array(o)
    }));
  }
  return [
    i.assign(s),
    pt({ type: new Ae(s), length: e, children: r })
  ];
}
function yb(i, t, e = /* @__PURE__ */ new Map()) {
  var n, s;
  if (((n = i?.length) !== null && n !== void 0 ? n : 0) > 0 && i?.length === t?.length)
    for (let r = -1, o = i.length; ++r < o; ) {
      const { type: a } = i[r], c = t[r];
      for (const l of [c, ...((s = c?.dictionary) === null || s === void 0 ? void 0 : s.data) || []])
        yb(a.children, l?.children, e);
      if (U.isDictionary(a)) {
        const { id: l } = a;
        if (!e.has(l))
          c?.dictionary && e.set(l, c.dictionary);
        else if (e.get(l) !== c.dictionary)
          throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
      }
    }
  return e;
}
let Uh = class extends Ve {
  constructor(t) {
    const e = t.fields.map((s) => pt({ type: s.type })), n = pt({ type: new Ae(t.fields), nullCount: 0, children: e });
    super(t, n);
  }
}, qn = class Vi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMessage(t, e) {
    return (e || new Vi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, e) {
    return t.setPosition(t.position() + Mt), (e || new Vi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : te.V1;
  }
  headerType() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readUint8(this.bb_pos + t) : Et.NONE;
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
    return n ? (e || new li()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startMessage(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, te.V1);
  }
  static addHeaderType(t, e) {
    t.addFieldInt8(1, e, Et.NONE);
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
    return Vi.startMessage(t), Vi.addVersion(t, e), Vi.addHeaderType(t, n), Vi.addHeader(t, s), Vi.addBodyLength(t, r), Vi.addCustomMetadata(t, o), Vi.endMessage(t);
  }
}, BD = class extends ft {
  visit(t, e) {
    return t == null || e == null ? void 0 : super.visit(t, e);
  }
  visitNull(t, e) {
    return fy.startNull(e), fy.endNull(e);
  }
  visitInt(t, e) {
    return kr.startInt(e), kr.addBitWidth(e, t.bitWidth), kr.addIsSigned(e, t.isSigned), kr.endInt(e);
  }
  visitFloat(t, e) {
    return Nc.startFloatingPoint(e), Nc.addPrecision(e, t.precision), Nc.endFloatingPoint(e);
  }
  visitBinary(t, e) {
    return cy.startBinary(e), cy.endBinary(e);
  }
  visitLargeBinary(t, e) {
    return uy.startLargeBinary(e), uy.endLargeBinary(e);
  }
  visitBool(t, e) {
    return ly.startBool(e), ly.endBool(e);
  }
  visitUtf8(t, e) {
    return yy.startUtf8(e), yy.endUtf8(e);
  }
  visitLargeUtf8(t, e) {
    return dy.startLargeUtf8(e), dy.endLargeUtf8(e);
  }
  visitDecimal(t, e) {
    return vr.startDecimal(e), vr.addScale(e, t.scale), vr.addPrecision(e, t.precision), vr.addBitWidth(e, t.bitWidth), vr.endDecimal(e);
  }
  visitDate(t, e) {
    return Sc.startDate(e), Sc.addUnit(e, t.unit), Sc.endDate(e);
  }
  visitTime(t, e) {
    return jo.startTime(e), jo.addUnit(e, t.unit), jo.addBitWidth(e, t.bitWidth), jo.endTime(e);
  }
  visitTimestamp(t, e) {
    const n = t.timezone && e.createString(t.timezone) || void 0;
    return zo.startTimestamp(e), zo.addUnit(e, t.unit), n !== void 0 && zo.addTimezone(e, n), zo.endTimestamp(e);
  }
  visitInterval(t, e) {
    return Ec.startInterval(e), Ec.addUnit(e, t.unit), Ec.endInterval(e);
  }
  visitDuration(t, e) {
    return Oc.startDuration(e), Oc.addUnit(e, t.unit), Oc.endDuration(e);
  }
  visitList(t, e) {
    return hy.startList(e), hy.endList(e);
  }
  visitStruct(t, e) {
    return py.startStruct_(e), py.endStruct_(e);
  }
  visitUnion(t, e) {
    $s.startTypeIdsVector(e, t.typeIds.length);
    const n = $s.createTypeIdsVector(e, t.typeIds);
    return $s.startUnion(e), $s.addMode(e, t.mode), $s.addTypeIds(e, n), $s.endUnion(e);
  }
  visitDictionary(t, e) {
    const n = this.visit(t.indices, e);
    return _r.startDictionaryEncoding(e), _r.addId(e, BigInt(t.id)), _r.addIsOrdered(e, t.isOrdered), n !== void 0 && _r.addIndexType(e, n), _r.endDictionaryEncoding(e);
  }
  visitFixedSizeBinary(t, e) {
    return Dc.startFixedSizeBinary(e), Dc.addByteWidth(e, t.byteWidth), Dc.endFixedSizeBinary(e);
  }
  visitFixedSizeList(t, e) {
    return Bc.startFixedSizeList(e), Bc.addListSize(e, t.listSize), Bc.endFixedSizeList(e);
  }
  visitMap(t, e) {
    return Ac.startMap(e), Ac.addKeysSorted(e, t.keysSorted), Ac.endMap(e);
  }
};
const Ku = new BD();
function ND(i, t = /* @__PURE__ */ new Map()) {
  return new Yt(AD(i, t), Rc(i.metadata), t);
}
function gb(i) {
  return new ei(i.count, mb(i.columns), _b(i.columns));
}
function ED(i) {
  return new rn(gb(i.data), i.id, i.isDelta);
}
function AD(i, t) {
  return (i.fields || []).filter(Boolean).map((e) => Xt.fromJSON(e, t));
}
function Dy(i, t) {
  return (i.children || []).filter(Boolean).map((e) => Xt.fromJSON(e, t));
}
function mb(i) {
  return (i || []).reduce((t, e) => [
    ...t,
    new ps(e.count, TD(e.VALIDITY)),
    ...mb(e.children)
  ], []);
}
function _b(i, t = []) {
  for (let e = -1, n = (i || []).length; ++e < n; ) {
    const s = i[e];
    s.VALIDITY && t.push(new Xi(t.length, s.VALIDITY.length)), s.TYPE_ID && t.push(new Xi(t.length, s.TYPE_ID.length)), s.OFFSET && t.push(new Xi(t.length, s.OFFSET.length)), s.DATA && t.push(new Xi(t.length, s.DATA.length)), t = _b(s.children, t);
  }
  return t;
}
function TD(i) {
  return (i || []).reduce((t, e) => t + +(e === 0), 0);
}
function FD(i, t) {
  let e, n, s, r, o, a;
  return !t || !(r = i.dictionary) ? (o = Ny(i, Dy(i, t)), s = new Xt(i.name, o, i.nullable, Rc(i.metadata))) : t.has(e = r.id) ? (n = (n = r.indexType) ? By(n) : new ma(), a = new so(t.get(e), n, e, r.isOrdered), s = new Xt(i.name, a, i.nullable, Rc(i.metadata))) : (n = (n = r.indexType) ? By(n) : new ma(), t.set(e, o = Ny(i, Dy(i, t))), a = new so(o, n, e, r.isOrdered), s = new Xt(i.name, a, i.nullable, Rc(i.metadata))), s || null;
}
function Rc(i = []) {
  return new Map(i.map(({ key: t, value: e }) => [t, e]));
}
function By(i) {
  return new Xs(i.isSigned, i.bitWidth);
}
function Ny(i, t) {
  const e = i.type.name;
  switch (e) {
    case "NONE":
      return new ds();
    case "null":
      return new ds();
    case "binary":
      return new ul();
    case "largebinary":
      return new dl();
    case "utf8":
      return new hl();
    case "largeutf8":
      return new fl();
    case "bool":
      return new pl();
    case "list":
      return new wl((t || [])[0]);
    case "struct":
      return new Ae(t || []);
    case "struct_":
      return new Ae(t || []);
  }
  switch (e) {
    case "int": {
      const n = i.type;
      return new Xs(n.isSigned, n.bitWidth);
    }
    case "floatingpoint": {
      const n = i.type;
      return new ll(we[n.precision]);
    }
    case "decimal": {
      const n = i.type;
      return new yl(n.scale, n.precision, n.bitWidth);
    }
    case "date": {
      const n = i.type;
      return new gl(di[n.unit]);
    }
    case "time": {
      const n = i.type;
      return new ml(Z[n.unit], n.bitWidth);
    }
    case "timestamp": {
      const n = i.type;
      return new _l(Z[n.unit], n.timezone);
    }
    case "interval": {
      const n = i.type;
      return new bl(sn[n.unit]);
    }
    case "duration": {
      const n = i.type;
      return new vl(Z[n.unit]);
    }
    case "union": {
      const n = i.type, [s, ...r] = (n.mode + "").toLowerCase(), o = s.toUpperCase() + r.join("");
      return new Il(Ie[o], n.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const n = i.type;
      return new Sl(n.byteWidth);
    }
    case "fixedsizelist": {
      const n = i.type;
      return new Ol(n.listSize, (t || [])[0]);
    }
    case "map": {
      const n = i.type;
      return new Dl((t || [])[0], n.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${e}"`);
}
var MD = Tm, RD = io;
let En = class Tr {
  /** @nocollapse */
  static fromJSON(t, e) {
    const n = new Tr(0, te.V5, e);
    return n._createHeader = LD(t, e), n;
  }
  /** @nocollapse */
  static decode(t) {
    t = new RD(vt(t));
    const e = qn.getRootAsMessage(t), n = e.bodyLength(), s = e.version(), r = e.headerType(), o = new Tr(n, s, r);
    return o._createHeader = UD(e, r), o;
  }
  /** @nocollapse */
  static encode(t) {
    const e = new MD();
    let n = -1;
    return t.isSchema() ? n = Yt.encode(e, t.header()) : t.isRecordBatch() ? n = ei.encode(e, t.header()) : t.isDictionaryBatch() && (n = rn.encode(e, t.header())), qn.startMessage(e), qn.addVersion(e, te.V5), qn.addHeader(e, n), qn.addHeaderType(e, t.headerType), qn.addBodyLength(e, BigInt(t.bodyLength)), qn.finishMessageBuffer(e, qn.endMessage(e)), e.asUint8Array();
  }
  /** @nocollapse */
  static from(t, e = 0) {
    if (t instanceof Yt)
      return new Tr(0, te.V5, Et.Schema, t);
    if (t instanceof ei)
      return new Tr(e, te.V5, Et.RecordBatch, t);
    if (t instanceof rn)
      return new Tr(e, te.V5, Et.DictionaryBatch, t);
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
    return this.headerType === Et.Schema;
  }
  isRecordBatch() {
    return this.headerType === Et.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === Et.DictionaryBatch;
  }
  constructor(t, e, n, s) {
    this._version = e, this._headerType = n, this.body = new Uint8Array(0), s && (this._createHeader = () => s), this._bodyLength = Vt(t);
  }
}, ei = class {
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
    this._nodes = e, this._buffers = n, this._length = Vt(t);
  }
}, rn = class {
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
    this._data = t, this._isDelta = n, this._id = Vt(e);
  }
}, Xi = class {
  constructor(t, e) {
    this.offset = Vt(t), this.length = Vt(e);
  }
}, ps = class {
  constructor(t, e) {
    this.length = Vt(t), this.nullCount = Vt(e);
  }
};
function LD(i, t) {
  return (() => {
    switch (t) {
      case Et.Schema:
        return Yt.fromJSON(i);
      case Et.RecordBatch:
        return ei.fromJSON(i);
      case Et.DictionaryBatch:
        return rn.fromJSON(i);
    }
    throw new Error(`Unrecognized Message type: { name: ${Et[t]}, type: ${t} }`);
  });
}
function UD(i, t) {
  return (() => {
    switch (t) {
      case Et.Schema:
        return Yt.decode(i.header(new ji()), /* @__PURE__ */ new Map(), i.version());
      case Et.RecordBatch:
        return ei.decode(i.header(new vn()), i.version());
      case Et.DictionaryBatch:
        return rn.decode(i.header(new mr()), i.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${Et[t]}, type: ${t} }`);
  });
}
Xt.encode = YD;
Xt.decode = WD;
Xt.fromJSON = FD;
Yt.encode = HD;
Yt.decode = xD;
Yt.fromJSON = ND;
ei.encode = KD;
ei.decode = CD;
ei.fromJSON = gb;
rn.encode = GD;
rn.decode = $D;
rn.fromJSON = ED;
ps.encode = qD;
ps.decode = PD;
Xi.encode = JD;
Xi.decode = VD;
function xD(i, t = /* @__PURE__ */ new Map(), e = te.V5) {
  const n = zD(i, t);
  return new Yt(n, Lc(i), t, e);
}
function CD(i, t = te.V5) {
  if (i.compression() !== null)
    throw new Error("Record batch compression not implemented");
  return new ei(i.length(), kD(i), jD(i, t));
}
function $D(i, t = te.V5) {
  return new rn(ei.decode(i.data(), t), i.id(), i.isDelta());
}
function VD(i) {
  return new Xi(i.offset(), i.length());
}
function PD(i) {
  return new ps(i.length(), i.nullCount());
}
function kD(i) {
  const t = [];
  for (let e, n = -1, s = -1, r = i.nodesLength(); ++n < r; )
    (e = i.nodes(n)) && (t[++s] = ps.decode(e));
  return t;
}
function jD(i, t) {
  const e = [];
  for (let n, s = -1, r = -1, o = i.buffersLength(); ++s < o; )
    (n = i.buffers(s)) && (t < te.V4 && (n.bb_pos += 8 * (s + 1)), e[++r] = Xi.decode(n));
  return e;
}
function zD(i, t) {
  const e = [];
  for (let n, s = -1, r = -1, o = i.fieldsLength(); ++s < o; )
    (n = i.fields(s)) && (e[++r] = Xt.decode(n, t));
  return e;
}
function Ey(i, t) {
  const e = [];
  for (let n, s = -1, r = -1, o = i.childrenLength(); ++s < o; )
    (n = i.children(s)) && (e[++r] = Xt.decode(n, t));
  return e;
}
function WD(i, t) {
  let e, n, s, r, o, a;
  return !t || !(a = i.dictionary()) ? (s = Ty(i, Ey(i, t)), n = new Xt(i.name(), s, i.nullable(), Lc(i))) : t.has(e = Vt(a.id())) ? (r = (r = a.indexType()) ? Ay(r) : new ma(), o = new so(t.get(e), r, e, a.isOrdered()), n = new Xt(i.name(), o, i.nullable(), Lc(i))) : (r = (r = a.indexType()) ? Ay(r) : new ma(), t.set(e, s = Ty(i, Ey(i, t))), o = new so(s, r, e, a.isOrdered()), n = new Xt(i.name(), o, i.nullable(), Lc(i))), n || null;
}
function Lc(i) {
  const t = /* @__PURE__ */ new Map();
  if (i)
    for (let e, n, s = -1, r = Math.trunc(i.customMetadataLength()); ++s < r; )
      (e = i.customMetadata(s)) && (n = e.key()) != null && t.set(n, e.value());
  return t;
}
function Ay(i) {
  return new Xs(i.isSigned(), i.bitWidth());
}
function Ty(i, t) {
  const e = i.typeType();
  switch (e) {
    case Pt.NONE:
      return new ds();
    case Pt.Null:
      return new ds();
    case Pt.Binary:
      return new ul();
    case Pt.LargeBinary:
      return new dl();
    case Pt.Utf8:
      return new hl();
    case Pt.LargeUtf8:
      return new fl();
    case Pt.Bool:
      return new pl();
    case Pt.List:
      return new wl((t || [])[0]);
    case Pt.Struct_:
      return new Ae(t || []);
  }
  switch (e) {
    case Pt.Int: {
      const n = i.type(new kr());
      return new Xs(n.isSigned(), n.bitWidth());
    }
    case Pt.FloatingPoint: {
      const n = i.type(new Nc());
      return new ll(n.precision());
    }
    case Pt.Decimal: {
      const n = i.type(new vr());
      return new yl(n.scale(), n.precision(), n.bitWidth());
    }
    case Pt.Date: {
      const n = i.type(new Sc());
      return new gl(n.unit());
    }
    case Pt.Time: {
      const n = i.type(new jo());
      return new ml(n.unit(), n.bitWidth());
    }
    case Pt.Timestamp: {
      const n = i.type(new zo());
      return new _l(n.unit(), n.timezone());
    }
    case Pt.Interval: {
      const n = i.type(new Ec());
      return new bl(n.unit());
    }
    case Pt.Duration: {
      const n = i.type(new Oc());
      return new vl(n.unit());
    }
    case Pt.Union: {
      const n = i.type(new $s());
      return new Il(n.mode(), n.typeIdsArray() || [], t || []);
    }
    case Pt.FixedSizeBinary: {
      const n = i.type(new Dc());
      return new Sl(n.byteWidth());
    }
    case Pt.FixedSizeList: {
      const n = i.type(new Bc());
      return new Ol(n.listSize(), (t || [])[0]);
    }
    case Pt.Map: {
      const n = i.type(new Ac());
      return new Dl((t || [])[0], n.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${Pt[e]}" (${e})`);
}
function HD(i, t) {
  const e = t.fields.map((r) => Xt.encode(i, r));
  ji.startFieldsVector(i, e.length);
  const n = ji.createFieldsVector(i, e), s = t.metadata && t.metadata.size > 0 ? ji.createCustomMetadataVector(i, [...t.metadata].map(([r, o]) => {
    const a = i.createString(`${r}`), c = i.createString(`${o}`);
    return li.startKeyValue(i), li.addKey(i, a), li.addValue(i, c), li.endKeyValue(i);
  })) : -1;
  return ji.startSchema(i), ji.addFields(i, n), ji.addEndianness(i, QD ? no.Little : no.Big), s !== -1 && ji.addCustomMetadata(i, s), ji.endSchema(i);
}
function YD(i, t) {
  let e = -1, n = -1, s = -1;
  const r = t.type;
  let o = t.typeId;
  U.isDictionary(r) ? (o = r.dictionary.typeId, s = Ku.visit(r, i), n = Ku.visit(r.dictionary, i)) : n = Ku.visit(r, i);
  const a = (r.children || []).map((u) => Xt.encode(i, u)), c = si.createChildrenVector(i, a), l = t.metadata && t.metadata.size > 0 ? si.createCustomMetadataVector(i, [...t.metadata].map(([u, d]) => {
    const m = i.createString(`${u}`), _ = i.createString(`${d}`);
    return li.startKeyValue(i), li.addKey(i, m), li.addValue(i, _), li.endKeyValue(i);
  })) : -1;
  return t.name && (e = i.createString(t.name)), si.startField(i), si.addType(i, n), si.addTypeType(i, o), si.addChildren(i, c), si.addNullable(i, !!t.nullable), e !== -1 && si.addName(i, e), s !== -1 && si.addDictionary(i, s), l !== -1 && si.addCustomMetadata(i, l), si.endField(i);
}
function KD(i, t) {
  const e = t.nodes || [], n = t.buffers || [];
  vn.startNodesVector(i, e.length);
  for (const o of e.slice().reverse())
    ps.encode(i, o);
  const s = i.endVector();
  vn.startBuffersVector(i, n.length);
  for (const o of n.slice().reverse())
    Xi.encode(i, o);
  const r = i.endVector();
  return vn.startRecordBatch(i), vn.addLength(i, BigInt(t.length)), vn.addNodes(i, s), vn.addBuffers(i, r), vn.endRecordBatch(i);
}
function GD(i, t) {
  const e = ei.encode(i, t.data);
  return mr.startDictionaryBatch(i), mr.addId(i, BigInt(t.id)), mr.addIsDelta(i, t.isDelta), mr.addData(i, e), mr.endDictionaryBatch(i);
}
function qD(i, t) {
  return Rm.createFieldNode(i, BigInt(t.length), BigInt(t.nullCount));
}
function JD(i, t) {
  return Mm.createBuffer(i, BigInt(t.offset), BigInt(t.length));
}
const QD = (() => {
  const i = new ArrayBuffer(2);
  return new DataView(i).setInt16(
    0,
    256,
    !0
    /* littleEndian */
  ), new Int16Array(i)[0] === 256;
})(), xh = (i) => `Expected ${Et[i]} Message in stream, but was null or length 0.`, Ch = (i) => `Header pointer of flatbuffer-encoded ${Et[i]} Message is null or length 0.`, bb = (i, t) => `Expected to read ${i} metadata bytes, but only read ${t}.`, vb = (i, t) => `Expected to read ${i} bytes for message body, but only read ${t}.`;
let wb = class {
  constructor(t) {
    this.source = t instanceof Tl ? t : new Tl(t);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let t;
    return (t = this.readMetadataLength()).done || t.value === -1 && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? Gt : t;
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
      throw new Error(xh(t));
    return e.value;
  }
  readMessageBody(t) {
    if (t <= 0)
      return new Uint8Array(0);
    const e = vt(this.source.read(t));
    if (e.byteLength < t)
      throw new Error(vb(t, e.byteLength));
    return (
      /* 1. */
      e.byteOffset % 8 === 0 && /* 2. */
      e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
    );
  }
  readSchema(t = !1) {
    const e = Et.Schema, n = this.readMessage(e), s = n?.header();
    if (t && !s)
      throw new Error(Ch(e));
    return s;
  }
  readMetadataLength() {
    const t = this.source.read(uu), e = t && new io(t), n = e?.readInt32(0) || 0;
    return { done: n === 0, value: n };
  }
  readMetadata(t) {
    const e = this.source.read(t);
    if (!e)
      return Gt;
    if (e.byteLength < t)
      throw new Error(bb(t, e.byteLength));
    return { done: !1, value: En.decode(e) };
  }
}, ZD = class {
  constructor(t, e) {
    this.source = t instanceof Fl ? t : Om(t) ? new Ml(t, e) : new Fl(t);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return v(this, void 0, void 0, function* () {
      let t;
      return (t = yield this.readMetadataLength()).done || t.value === -1 && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? Gt : t;
    });
  }
  throw(t) {
    return v(this, void 0, void 0, function* () {
      return yield this.source.throw(t);
    });
  }
  return(t) {
    return v(this, void 0, void 0, function* () {
      return yield this.source.return(t);
    });
  }
  readMessage(t) {
    return v(this, void 0, void 0, function* () {
      let e;
      if ((e = yield this.next()).done)
        return null;
      if (t != null && e.value.headerType !== t)
        throw new Error(xh(t));
      return e.value;
    });
  }
  readMessageBody(t) {
    return v(this, void 0, void 0, function* () {
      if (t <= 0)
        return new Uint8Array(0);
      const e = vt(yield this.source.read(t));
      if (e.byteLength < t)
        throw new Error(vb(t, e.byteLength));
      return (
        /* 1. */
        e.byteOffset % 8 === 0 && /* 2. */
        e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
      );
    });
  }
  readSchema() {
    return v(this, arguments, void 0, function* (t = !1) {
      const e = Et.Schema, n = yield this.readMessage(e), s = n?.header();
      if (t && !s)
        throw new Error(Ch(e));
      return s;
    });
  }
  readMetadataLength() {
    return v(this, void 0, void 0, function* () {
      const t = yield this.source.read(uu), e = t && new io(t), n = e?.readInt32(0) || 0;
      return { done: n === 0, value: n };
    });
  }
  readMetadata(t) {
    return v(this, void 0, void 0, function* () {
      const e = yield this.source.read(t);
      if (!e)
        return Gt;
      if (e.byteLength < t)
        throw new Error(bb(t, e.byteLength));
      return { done: !1, value: En.decode(e) };
    });
  }
}, XD = class extends wb {
  constructor(t) {
    super(new Uint8Array(0)), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof Iy ? t : new Iy(t);
  }
  next() {
    const { _json: t } = this;
    if (!this._schema)
      return this._schema = !0, { done: !1, value: En.fromJSON(t.schema, Et.Schema) };
    if (this._dictionaryIndex < t.dictionaries.length) {
      const e = t.dictionaries[this._dictionaryIndex++];
      return this._body = e.data.columns, { done: !1, value: En.fromJSON(e, Et.DictionaryBatch) };
    }
    if (this._batchIndex < t.batches.length) {
      const e = t.batches[this._batchIndex++];
      return this._body = e.columns, { done: !1, value: En.fromJSON(e, Et.RecordBatch) };
    }
    return this._body = [], Gt;
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
      throw new Error(xh(t));
    return e.value;
  }
  readSchema() {
    const t = Et.Schema, e = this.readMessage(t), n = e?.header();
    if (!e || !n)
      throw new Error(Ch(t));
    return n;
  }
};
const uu = 4, $d = "ARROW1", ba = new Uint8Array($d.length);
for (let i = 0; i < $d.length; i += 1)
  ba[i] = $d.codePointAt(i);
function $h(i, t = 0) {
  for (let e = -1, n = ba.length; ++e < n; )
    if (ba[e] !== i[t + e])
      return !1;
  return !0;
}
const ja = ba.length, Ib = ja + uu, tB = ja * 2 + uu;
let ys = class Uc extends Th {
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
    return Zs(e) ? e.then(() => this) : this;
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
    return oi.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return oi.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: !0 });
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
    return t instanceof Uc ? t : Sd(t) ? sB(t) : Om(t) ? aB(t) : Zs(t) ? v(this, void 0, void 0, function* () {
      return yield Uc.from(yield t);
    }) : Dm(t) || vh(t) || Bm(t) || bo(t) ? oB(new Fl(t)) : rB(new Tl(t));
  }
  /** @nocollapse */
  static readAll(t) {
    return t instanceof Uc ? t.isSync() ? Fy(t) : My(t) : Sd(t) || ArrayBuffer.isView(t) || $a(t) || Sm(t) ? Fy(t) : My(t);
  }
}, Rl = class extends ys {
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
    return ee(this, arguments, function* () {
      yield E(yield* cs(Te(this[Symbol.iterator]())));
    });
  }
}, Ll = class extends ys {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return v(this, void 0, void 0, function* () {
      var t, e, n, s;
      const r = new Array();
      try {
        for (var o = !0, a = Te(this), c; c = yield a.next(), t = c.done, !t; o = !0) {
          s = c.value, o = !1;
          const l = s;
          r.push(l);
        }
      } catch (l) {
        e = { error: l };
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
}, Sb = class extends Rl {
  constructor(t) {
    super(t), this._impl = t;
  }
}, eB = class extends Ll {
  constructor(t) {
    super(t), this._impl = t;
  }
}, Ob = class {
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
    const n = this._loadVectors(t, e, this.schema.fields), s = pt({ type: new Ae(this.schema.fields), length: t.length, children: n });
    return new Ve(this.schema, s);
  }
  _loadDictionaryBatch(t, e) {
    const { id: n, isDelta: s } = t, { dictionaries: r, schema: o } = this, a = r.get(n), c = o.dictionaries.get(n), l = this._loadVectors(t.data, e, [c]);
    return (a && s ? a.concat(new Kt(l)) : new Kt(l)).memoize();
  }
  _loadVectors(t, e, n) {
    return new hb(e, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}, Ul = class extends Ob {
  constructor(t, e) {
    super(e), this._reader = Sd(t) ? new XD(this._handle = t) : new wb(this._handle = t);
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
    return this.closed || (this.autoDestroy = Bb(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
  }
  throw(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : Gt;
  }
  return(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : Gt;
  }
  next() {
    if (this.closed)
      return Gt;
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
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new Uh(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}, xl = class extends Ob {
  constructor(t, e) {
    super(e), this._reader = new ZD(this._handle = t);
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
    return v(this, void 0, void 0, function* () {
      !this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
    });
  }
  open(t) {
    return v(this, void 0, void 0, function* () {
      return this.closed || (this.autoDestroy = Bb(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
    });
  }
  throw(t) {
    return v(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : Gt;
    });
  }
  return(t) {
    return v(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : Gt;
    });
  }
  next() {
    return v(this, void 0, void 0, function* () {
      if (this.closed)
        return Gt;
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
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new Uh(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return v(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}, Db = class extends Ul {
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
    super(t instanceof Sy ? t : new Sy(t), e);
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
      const s = this._reader.readMessage(Et.RecordBatch);
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
      const s = this._reader.readMessage(Et.DictionaryBatch);
      if (s?.isDictionaryBatch()) {
        const r = s.header(), o = this._reader.readMessageBody(s.bodyLength), a = this._loadDictionaryBatch(r, o);
        this.dictionaries.set(r.id, a);
      }
    }
  }
  _readFooter() {
    const { _handle: t } = this, e = t.size - Ib, n = t.readInt32(e), s = t.readAt(e - n, n);
    return _a.decode(s);
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
}, iB = class extends xl {
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
    super(t instanceof Ml ? t : new Ml(t, n), s);
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
    return v(this, void 0, void 0, function* () {
      if (!this.closed && !this._footer) {
        this.schema = (this._footer = yield this._readFooter()).schema;
        for (const n of this._footer.dictionaryBatches())
          n && (yield this._readDictionaryBatch(this._dictionaryIndex++));
      }
      return yield e.open.call(this, t);
    });
  }
  readRecordBatch(t) {
    return v(this, void 0, void 0, function* () {
      var e;
      if (this.closed)
        return null;
      this._footer || (yield this.open());
      const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
      if (n && (yield this._handle.seek(n.offset))) {
        const s = yield this._reader.readMessage(Et.RecordBatch);
        if (s?.isRecordBatch()) {
          const r = s.header(), o = yield this._reader.readMessageBody(s.bodyLength);
          return this._loadRecordBatch(r, o);
        }
      }
      return null;
    });
  }
  _readDictionaryBatch(t) {
    return v(this, void 0, void 0, function* () {
      var e;
      const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
      if (n && (yield this._handle.seek(n.offset))) {
        const s = yield this._reader.readMessage(Et.DictionaryBatch);
        if (s?.isDictionaryBatch()) {
          const r = s.header(), o = yield this._reader.readMessageBody(s.bodyLength), a = this._loadDictionaryBatch(r, o);
          this.dictionaries.set(r.id, a);
        }
      }
    });
  }
  _readFooter() {
    return v(this, void 0, void 0, function* () {
      const { _handle: t } = this;
      t._pending && (yield t._pending);
      const e = t.size - Ib, n = yield t.readInt32(e), s = yield t.readAt(e - n, n);
      return _a.decode(s);
    });
  }
  _readNextMessageAndValidate(t) {
    return v(this, void 0, void 0, function* () {
      if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
        const e = this._footer.getRecordBatch(this._recordBatchIndex);
        if (e && (yield this._handle.seek(e.offset)))
          return yield this._reader.readMessage(t);
      }
      return null;
    });
  }
}, nB = class extends Ul {
  constructor(t, e) {
    super(t, e);
  }
  _loadVectors(t, e, n) {
    return new gD(e, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
};
function Bb(i, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : i.autoDestroy;
}
function* Fy(i) {
  const t = ys.from(i);
  try {
    if (!t.open({ autoDestroy: !1 }).closed)
      do
        yield t;
      while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function My(i) {
  return ee(this, arguments, function* () {
    const e = yield E(ys.from(i));
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
function sB(i) {
  return new Rl(new nB(i));
}
function rB(i) {
  const t = i.peek(ja + 7 & -8);
  return t && t.byteLength >= 4 ? $h(t) ? new Sb(new Db(i.read())) : new Rl(new Ul(i)) : new Rl(new Ul((function* () {
  })()));
}
function oB(i) {
  return v(this, void 0, void 0, function* () {
    const t = yield i.peek(ja + 7 & -8);
    return t && t.byteLength >= 4 ? $h(t) ? new Sb(new Db(yield i.read())) : new Ll(new xl(i)) : new Ll(new xl((function() {
      return ee(this, arguments, function* () {
      });
    })()));
  });
}
function aB(i) {
  return v(this, void 0, void 0, function* () {
    const { size: t } = yield i.stat(), e = new Ml(i, t);
    return t >= tB && $h(yield e.readAt(0, ja + 7 & -8)) ? new eB(new iB(e)) : new Ll(new xl(e));
  });
}
let ne = class Nb extends ft {
  /** @nocollapse */
  static assemble(...t) {
    const e = (s) => s.flatMap((r) => Array.isArray(r) ? e(r) : r instanceof Ve ? r.data.children : r.data), n = new Nb();
    return n.visitMany(e(t)), n;
  }
  constructor() {
    super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [];
  }
  visit(t) {
    if (t instanceof Kt)
      return this.visitMany(t.data), this;
    const { type: e } = t;
    if (!U.isDictionary(e)) {
      const { length: n } = t;
      if (n > 2147483647)
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      if (U.isUnion(e))
        this.nodes.push(new ps(n, 0));
      else {
        const { nullCount: s } = t;
        U.isNull(e) || Si.call(this, s <= 0 ? new Uint8Array(0) : Bl(t.offset, n, t.nullBitmap)), this.nodes.push(new ps(n, s));
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
};
function Si(i) {
  const t = i.byteLength + 7 & -8;
  return this.buffers.push(i), this.bufferRegions.push(new Xi(this._byteLength, t)), this._byteLength += t, this;
}
function cB(i) {
  var t;
  const { type: e, length: n, typeIds: s, valueOffsets: r } = i;
  if (Si.call(this, s), e.mode === Ie.Sparse)
    return Vd.call(this, i);
  if (e.mode === Ie.Dense) {
    if (i.offset <= 0)
      return Si.call(this, r), Vd.call(this, i);
    {
      const o = new Int32Array(n), a = /* @__PURE__ */ Object.create(null), c = /* @__PURE__ */ Object.create(null);
      for (let l, u, d = -1; ++d < n; )
        (l = s[d]) !== void 0 && ((u = a[l]) === void 0 && (u = a[l] = r[d]), o[d] = r[d] - u, c[l] = ((t = c[l]) !== null && t !== void 0 ? t : 0) + 1);
      Si.call(this, o), this.visitMany(i.children.map((l, u) => {
        const d = e.typeIds[u], m = a[d], _ = c[d];
        return l.slice(m, Math.min(n, _));
      }));
    }
  }
  return this;
}
function lB(i) {
  let t;
  return i.nullCount >= i.length ? Si.call(this, new Uint8Array(0)) : (t = i.values) instanceof Uint8Array ? Si.call(this, Bl(i.offset, i.length, t)) : Si.call(this, Nl(i.values));
}
function kn(i) {
  return Si.call(this, i.values.subarray(0, i.length * i.stride));
}
function du(i) {
  const { length: t, values: e, valueOffsets: n } = i, s = Vt(n[0]), r = Vt(n[t]), o = Math.min(r - s, e.byteLength - s);
  return Si.call(this, Em(-s, t + 1, n)), Si.call(this, e.subarray(s, s + o)), this;
}
function Vh(i) {
  const { length: t, valueOffsets: e } = i;
  if (e) {
    const { [0]: n, [t]: s } = e;
    return Si.call(this, Em(-n, t + 1, e)), this.visit(i.children[0].slice(n, s - n));
  }
  return this.visit(i.children[0]);
}
function Vd(i) {
  return this.visitMany(i.type.children.map((t, e) => i.children[e]).filter(Boolean))[0];
}
ne.prototype.visitBool = lB;
ne.prototype.visitInt = kn;
ne.prototype.visitFloat = kn;
ne.prototype.visitUtf8 = du;
ne.prototype.visitLargeUtf8 = du;
ne.prototype.visitBinary = du;
ne.prototype.visitLargeBinary = du;
ne.prototype.visitFixedSizeBinary = kn;
ne.prototype.visitDate = kn;
ne.prototype.visitTimestamp = kn;
ne.prototype.visitTime = kn;
ne.prototype.visitDecimal = kn;
ne.prototype.visitList = Vh;
ne.prototype.visitStruct = Vd;
ne.prototype.visitUnion = cB;
ne.prototype.visitInterval = kn;
ne.prototype.visitDuration = kn;
ne.prototype.visitFixedSizeList = Vh;
ne.prototype.visitMap = Vh;
let Eb = class extends Th {
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
    super(), this._position = 0, this._started = !1, this._sink = new Mc(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), je(t) || (t = { autoDestroy: !0, writeLegacyIpcFormat: !1 }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : !0, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : !1;
  }
  toString(t = !1) {
    return this._sink.toString(t);
  }
  toUint8Array(t = !1) {
    return this._sink.toUint8Array(t);
  }
  writeAll(t) {
    return Zs(t) ? t.then((e) => this.writeAll(e)) : bo(t) ? kh(this, t) : Ph(this, t);
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
    return t === this._sink || t instanceof Mc ? this._sink = t : (this._sink = new Mc(), t && x1(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && C1(t) && this.toNodeStream({ objectMode: !1 }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!e || !Cd(e, this._schema)) && (e == null ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = e, this._writeSchema(e))), this;
  }
  write(t) {
    let e = null;
    if (this._sink) {
      if (t == null)
        return this.finish() && void 0;
      if (t instanceof fs && !(e = t.schema))
        return this.finish() && void 0;
      if (t instanceof Ve && !(e = t.schema))
        return this.finish() && void 0;
    } else throw new Error("RecordBatchWriter is closed");
    if (e && !Cd(e, this._schema)) {
      if (this._started && this._autoDestroy)
        return this.close();
      this.reset(this._sink, e);
    }
    t instanceof Ve ? t instanceof Uh || this._writeRecordBatch(t) : t instanceof fs ? this.writeAll(t.batches) : $a(t) && this.writeAll(t);
  }
  _writeMessage(t, e = 8) {
    const n = e - 1, s = En.encode(t), r = s.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, a = r + o + n & ~n, c = a - r - o;
    return t.headerType === Et.RecordBatch ? this._recordBatchBlocks.push(new ro(a, t.bodyLength, this._position)) : t.headerType === Et.DictionaryBatch && this._dictionaryBlocks.push(new ro(a, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(a - o)), r > 0 && this._write(s), this._writePadding(c);
  }
  _write(t) {
    if (this._started) {
      const e = vt(t);
      e && e.byteLength > 0 && (this._sink.write(e), this._position += e.byteLength);
    }
    return this;
  }
  _writeSchema(t) {
    return this._writeMessage(En.from(t));
  }
  // @ts-ignore
  _writeFooter(t) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(ba);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: e, nodes: n, bufferRegions: s, buffers: r } = ne.assemble(t), o = new ei(t.numRows, n, s), a = En.from(o, e);
    return this._writeDictionaries(t)._writeMessage(a)._writeBodyBuffers(r);
  }
  _writeDictionaryBatch(t, e, n = !1) {
    const { byteLength: s, nodes: r, bufferRegions: o, buffers: a } = ne.assemble(new Kt([t])), c = new ei(t.length, r, o), l = new rn(c, e, n), u = En.from(l, s);
    return this._writeMessage(u)._writeBodyBuffers(a);
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
        for (const [l, u] of o.entries())
          this._writeDictionaryBatch(u, s, l > 0);
      else if (c < o.length)
        for (const l of o.slice(c))
          this._writeDictionaryBatch(l, s, !0);
      this._seenDictionaries.set(s, r), this._dictionaryDeltaOffsets.set(s, o.length);
    }
    return this;
  }
}, uB = class Ab extends Eb {
  /** @nocollapse */
  static writeAll(t, e) {
    const n = new Ab(e);
    return Zs(t) ? t.then((s) => n.writeAll(s)) : bo(t) ? kh(n, t) : Ph(n, t);
  }
}, dB = class Tb extends Eb {
  /** @nocollapse */
  static writeAll(t) {
    const e = new Tb();
    return Zs(t) ? t.then((n) => e.writeAll(n)) : bo(t) ? kh(e, t) : Ph(e, t);
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
    const e = _a.encode(new _a(t, te.V5, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic();
  }
};
function Ph(i, t) {
  let e = t;
  t instanceof fs && (e = t.batches, i.reset(void 0, t.schema));
  for (const n of e)
    i.write(n);
  return i.finish();
}
function kh(i, t) {
  return v(this, void 0, void 0, function* () {
    var e, n, s, r, o, a, c;
    try {
      for (e = !0, n = Te(t); s = yield n.next(), r = s.done, !r; e = !0) {
        c = s.value, e = !1;
        const l = c;
        i.write(l);
      }
    } catch (l) {
      o = { error: l };
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
function hB(i, t = "stream") {
  return (t === "stream" ? uB : dB).writeAll(i).toUint8Array(!0);
}
var fB = Object.create, Fb = Object.defineProperty, pB = Object.getOwnPropertyDescriptor, yB = Object.getOwnPropertyNames, gB = Object.getPrototypeOf, mB = Object.prototype.hasOwnProperty, _B = (i, t) => () => (t || i((t = { exports: {} }).exports, t), t.exports), bB = (i, t, e, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let s of yB(t)) !mB.call(i, s) && s !== e && Fb(i, s, { get: () => t[s], enumerable: !(n = pB(t, s)) || n.enumerable });
  return i;
}, vB = (i, t, e) => (e = i != null ? fB(gB(i)) : {}, bB(!i || !i.__esModule ? Fb(e, "default", { value: i, enumerable: !0 }) : e, i)), wB = _B((i, t) => {
  t.exports = Worker;
}), Mb = ((i) => (i[i.UNDEFINED = 0] = "UNDEFINED", i[i.AUTOMATIC = 1] = "AUTOMATIC", i[i.READ_ONLY = 2] = "READ_ONLY", i[i.READ_WRITE = 3] = "READ_WRITE", i))(Mb || {}), Rb = ((i) => (i[i.IDENTIFIER = 0] = "IDENTIFIER", i[i.NUMERIC_CONSTANT = 1] = "NUMERIC_CONSTANT", i[i.STRING_CONSTANT = 2] = "STRING_CONSTANT", i[i.OPERATOR = 3] = "OPERATOR", i[i.KEYWORD = 4] = "KEYWORD", i[i.COMMENT = 5] = "COMMENT", i))(Rb || {}), Lb = ((i) => (i[i.NONE = 0] = "NONE", i[i.DEBUG = 1] = "DEBUG", i[i.INFO = 2] = "INFO", i[i.WARNING = 3] = "WARNING", i[i.ERROR = 4] = "ERROR", i))(Lb || {}), Ub = ((i) => (i[i.NONE = 0] = "NONE", i[i.CONNECT = 1] = "CONNECT", i[i.DISCONNECT = 2] = "DISCONNECT", i[i.OPEN = 3] = "OPEN", i[i.QUERY = 4] = "QUERY", i[i.INSTANTIATE = 5] = "INSTANTIATE", i))(Ub || {}), xb = ((i) => (i[i.NONE = 0] = "NONE", i[i.OK = 1] = "OK", i[i.ERROR = 2] = "ERROR", i[i.START = 3] = "START", i[i.RUN = 4] = "RUN", i[i.CAPTURE = 5] = "CAPTURE", i))(xb || {}), Cb = ((i) => (i[i.NONE = 0] = "NONE", i[i.WEB_WORKER = 1] = "WEB_WORKER", i[i.NODE_WORKER = 2] = "NODE_WORKER", i[i.BINDINGS = 3] = "BINDINGS", i[i.ASYNC_DUCKDB = 4] = "ASYNC_DUCKDB", i))(Cb || {}), IB = class {
  log(i) {
  }
}, SB = class {
  constructor(i = 2) {
    this.level = i;
  }
  log(i) {
    i.level >= this.level && console.log(i);
  }
};
function OB(i) {
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
function DB(i) {
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
function BB(i) {
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
function NB(i) {
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
var $b = ((i) => (i[i.SUCCESS = 0] = "SUCCESS", i[i.MAX_ARROW_ERROR = 255] = "MAX_ARROW_ERROR", i[i.DUCKDB_WASM_RETRY = 256] = "DUCKDB_WASM_RETRY", i))($b || {});
function EB(i) {
  return i <= 255;
}
function AB(i) {
  return i === 256;
}
var Vb = class {
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
    let t = await this._bindings.runQuery(this._conn, i), e = ys.from(t);
    return console.assert(e.isSync(), "Reader is not sync"), console.assert(e.isFile(), "Reader is not file"), new fs(e);
  }
  async send(i, t = !1) {
    this._bindings.logger.log({ timestamp: /* @__PURE__ */ new Date(), level: 2, origin: 4, topic: 4, event: 4, value: i });
    let e = await this._bindings.startPendingQuery(this._conn, i, t);
    for (; e == null; ) e = await this._bindings.pollPendingQuery(this._conn);
    let n = new jh(this._bindings, this._conn, e), s = await ys.from(n);
    return console.assert(s.isAsync()), console.assert(s.isStream()), s;
  }
  async cancelSent() {
    return await this._bindings.cancelPendingQuery(this._conn);
  }
  async getTableNames(i) {
    return await this._bindings.getTableNames(this._conn, i);
  }
  async prepare(i) {
    let t = await this._bindings.createPrepared(this._conn, i);
    return new Pb(this._bindings, this._conn, t);
  }
  async insertArrowTable(i, t) {
    let e = hB(i, "stream");
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
}, jh = class {
  constructor(i, t, e) {
    this.db = i, this.conn = t, this.header = e, this._first = !0, this._depleted = !1, this._inFlight = null;
  }
  async next() {
    if (this._first) return this._first = !1, { done: !1, value: this.header };
    if (this._depleted) return { done: !0, value: null };
    let i = null;
    for (this._inFlight != null && (i = await this._inFlight, this._inFlight = null); i == null; ) i = await this.db.fetchQueryResults(this.conn);
    return this._depleted = i.length == 0, this._depleted || (this._inFlight = this.db.fetchQueryResults(this.conn)), { done: this._depleted, value: i };
  }
  [Symbol.asyncIterator]() {
    return this;
  }
}, Pb = class {
  constructor(i, t, e) {
    this.bindings = i, this.connectionId = t, this.statementId = e;
  }
  async close() {
    await this.bindings.closePrepared(this.connectionId, this.statementId);
  }
  async query(...i) {
    let t = await this.bindings.runPrepared(this.connectionId, this.statementId, i), e = ys.from(t);
    return console.assert(e.isSync()), console.assert(e.isFile()), new fs(e);
  }
  async send(...i) {
    let t = await this.bindings.sendPrepared(this.connectionId, this.statementId, i), e = new jh(this.bindings, this.connectionId, t), n = await ys.from(e);
    return console.assert(n.isAsync()), console.assert(n.isStream()), n;
  }
}, kb = ((i) => (i.CANCEL_PENDING_QUERY = "CANCEL_PENDING_QUERY", i.CLOSE_PREPARED = "CLOSE_PREPARED", i.COLLECT_FILE_STATISTICS = "COLLECT_FILE_STATISTICS", i.REGISTER_OPFS_FILE_NAME = "REGISTER_OPFS_FILE_NAME", i.CONNECT = "CONNECT", i.COPY_FILE_TO_BUFFER = "COPY_FILE_TO_BUFFER", i.COPY_FILE_TO_PATH = "COPY_FILE_TO_PATH", i.CREATE_PREPARED = "CREATE_PREPARED", i.DISCONNECT = "DISCONNECT", i.DROP_FILE = "DROP_FILE", i.DROP_FILES = "DROP_FILES", i.EXPORT_FILE_STATISTICS = "EXPORT_FILE_STATISTICS", i.FETCH_QUERY_RESULTS = "FETCH_QUERY_RESULTS", i.FLUSH_FILES = "FLUSH_FILES", i.GET_FEATURE_FLAGS = "GET_FEATURE_FLAGS", i.GET_TABLE_NAMES = "GET_TABLE_NAMES", i.GET_VERSION = "GET_VERSION", i.GLOB_FILE_INFOS = "GLOB_FILE_INFOS", i.INSERT_ARROW_FROM_IPC_STREAM = "INSERT_ARROW_FROM_IPC_STREAM", i.INSERT_CSV_FROM_PATH = "IMPORT_CSV_FROM_PATH", i.INSERT_JSON_FROM_PATH = "IMPORT_JSON_FROM_PATH", i.INSTANTIATE = "INSTANTIATE", i.OPEN = "OPEN", i.PING = "PING", i.POLL_PENDING_QUERY = "POLL_PENDING_QUERY", i.REGISTER_FILE_BUFFER = "REGISTER_FILE_BUFFER", i.REGISTER_FILE_HANDLE = "REGISTER_FILE_HANDLE", i.REGISTER_FILE_URL = "REGISTER_FILE_URL", i.RESET = "RESET", i.RUN_PREPARED = "RUN_PREPARED", i.RUN_QUERY = "RUN_QUERY", i.SEND_PREPARED = "SEND_PREPARED", i.START_PENDING_QUERY = "START_PENDING_QUERY", i.TOKENIZE = "TOKENIZE", i))(kb || {}), jb = ((i) => (i.CONNECTION_INFO = "CONNECTION_INFO", i.ERROR = "ERROR", i.FEATURE_FLAGS = "FEATURE_FLAGS", i.FILE_BUFFER = "FILE_BUFFER", i.FILE_INFOS = "FILE_INFOS", i.FILE_SIZE = "FILE_SIZE", i.FILE_STATISTICS = "FILE_STATISTICS", i.INSTANTIATE_PROGRESS = "INSTANTIATE_PROGRESS", i.LOG = "LOG", i.PROGRESS_UPDATE = "PROGRESS_UPDATE", i.OK = "OK", i.PREPARED_STATEMENT_ID = "PREPARED_STATEMENT_ID", i.QUERY_PLAN = "QUERY_PLAN", i.QUERY_RESULT = "QUERY_RESULT", i.QUERY_RESULT_CHUNK = "QUERY_RESULT_CHUNK", i.QUERY_RESULT_HEADER = "QUERY_RESULT_HEADER", i.QUERY_RESULT_HEADER_OR_NULL = "QUERY_RESULT_HEADER_OR_NULL", i.REGISTERED_FILE = "REGISTERED_FILE", i.SCRIPT_TOKENS = "SCRIPT_TOKENS", i.SUCCESS = "SUCCESS", i.TABLE_NAMES = "TABLE_NAMES", i.VERSION_STRING = "VERSION_STRING", i))(jb || {}), bt = class {
  constructor(i, t) {
    this.promiseResolver = () => {
    }, this.promiseRejecter = () => {
    }, this.type = i, this.data = t, this.promise = new Promise((e, n) => {
      this.promiseResolver = e, this.promiseRejecter = n;
    });
  }
};
function xc(i) {
  switch (i.typeId) {
    case f.Binary:
      return { sqlType: "binary" };
    case f.Bool:
      return { sqlType: "bool" };
    case f.Date:
      return { sqlType: "date" };
    case f.DateDay:
      return { sqlType: "date32[d]" };
    case f.DateMillisecond:
      return { sqlType: "date64[ms]" };
    case f.Decimal: {
      let t = i;
      return { sqlType: "decimal", precision: t.precision, scale: t.scale };
    }
    case f.Float:
      return { sqlType: "float" };
    case f.Float16:
      return { sqlType: "float16" };
    case f.Float32:
      return { sqlType: "float32" };
    case f.Float64:
      return { sqlType: "float64" };
    case f.Int:
      return { sqlType: "int32" };
    case f.Int16:
      return { sqlType: "int16" };
    case f.Int32:
      return { sqlType: "int32" };
    case f.Int64:
      return { sqlType: "int64" };
    case f.Uint16:
      return { sqlType: "uint16" };
    case f.Uint32:
      return { sqlType: "uint32" };
    case f.Uint64:
      return { sqlType: "uint64" };
    case f.Uint8:
      return { sqlType: "uint8" };
    case f.IntervalDayTime:
      return { sqlType: "interval[dt]" };
    case f.IntervalYearMonth:
      return { sqlType: "interval[m]" };
    case f.List:
      return { sqlType: "list", valueType: xc(i.valueType) };
    case f.FixedSizeBinary:
      return { sqlType: "fixedsizebinary", byteWidth: i.byteWidth };
    case f.Null:
      return { sqlType: "null" };
    case f.Utf8:
      return { sqlType: "utf8" };
    case f.Struct:
      return { sqlType: "struct", fields: i.children.map((t) => Pd(t.name, t.type)) };
    case f.Map: {
      let t = i;
      return { sqlType: "map", keyType: xc(t.keyType), valueType: xc(t.valueType) };
    }
    case f.Time:
      return { sqlType: "time[s]" };
    case f.TimeMicrosecond:
      return { sqlType: "time[us]" };
    case f.TimeMillisecond:
      return { sqlType: "time[ms]" };
    case f.TimeNanosecond:
      return { sqlType: "time[ns]" };
    case f.TimeSecond:
      return { sqlType: "time[s]" };
    case f.Timestamp:
      return { sqlType: "timestamp", timezone: i.timezone || void 0 };
    case f.TimestampSecond:
      return { sqlType: "timestamp[s]", timezone: i.timezone || void 0 };
    case f.TimestampMicrosecond:
      return { sqlType: "timestamp[us]", timezone: i.timezone || void 0 };
    case f.TimestampNanosecond:
      return { sqlType: "timestamp[ns]", timezone: i.timezone || void 0 };
    case f.TimestampMillisecond:
      return { sqlType: "timestamp[ms]", timezone: i.timezone || void 0 };
  }
  throw new Error("unsupported arrow type: ".concat(i.toString()));
}
function Pd(i, t) {
  let e = xc(t);
  return e.name = i, e;
}
var TB = new TextEncoder(), FB = class {
  constructor(i, t = null) {
    this._onInstantiationProgress = [], this._onExecutionProgress = [], this._worker = null, this._workerShutdownPromise = null, this._workerShutdownResolver = () => {
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
      case "PROGRESS_UPDATE": {
        for (let s of this._onExecutionProgress) s(e.data);
        return;
      }
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
      case "REGISTER_OPFS_FILE_NAME":
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
    let i = new bt("RESET", null);
    return await this.postTask(i);
  }
  async ping() {
    let i = new bt("PING", null);
    await this.postTask(i);
  }
  async dropFile(i) {
    let t = new bt("DROP_FILE", i);
    return await this.postTask(t);
  }
  async dropFiles() {
    let i = new bt("DROP_FILES", null);
    return await this.postTask(i);
  }
  async flushFiles() {
    let i = new bt("FLUSH_FILES", null);
    return await this.postTask(i);
  }
  async instantiate(i, t = null, e = (n) => {
  }) {
    this._onInstantiationProgress.push(e);
    let n = new bt("INSTANTIATE", [i, t]);
    return await this.postTask(n);
  }
  async getVersion() {
    let i = new bt("GET_VERSION", null);
    return await this.postTask(i);
  }
  async getFeatureFlags() {
    let i = new bt("GET_FEATURE_FLAGS", null);
    return await this.postTask(i);
  }
  async open(i) {
    let t = new bt("OPEN", i);
    await this.postTask(t);
  }
  async tokenize(i) {
    let t = new bt("TOKENIZE", i);
    return await this.postTask(t);
  }
  async connectInternal() {
    let i = new bt("CONNECT", null);
    return await this.postTask(i);
  }
  async connect() {
    let i = await this.connectInternal();
    return new Vb(this, i);
  }
  async disconnect(i) {
    let t = new bt("DISCONNECT", i);
    await this.postTask(t);
  }
  async runQuery(i, t) {
    let e = new bt("RUN_QUERY", [i, t]);
    return await this.postTask(e);
  }
  async startPendingQuery(i, t, e = !1) {
    let n = new bt("START_PENDING_QUERY", [i, t, e]);
    return await this.postTask(n);
  }
  async pollPendingQuery(i) {
    let t = new bt("POLL_PENDING_QUERY", i);
    return await this.postTask(t);
  }
  async cancelPendingQuery(i) {
    let t = new bt("CANCEL_PENDING_QUERY", i);
    return await this.postTask(t);
  }
  async fetchQueryResults(i) {
    let t = new bt("FETCH_QUERY_RESULTS", i);
    return await this.postTask(t);
  }
  async getTableNames(i, t) {
    let e = new bt("GET_TABLE_NAMES", [i, t]);
    return await this.postTask(e);
  }
  async createPrepared(i, t) {
    let e = new bt("CREATE_PREPARED", [i, t]);
    return await this.postTask(e);
  }
  async closePrepared(i, t) {
    let e = new bt("CLOSE_PREPARED", [i, t]);
    await this.postTask(e);
  }
  async runPrepared(i, t, e) {
    let n = new bt("RUN_PREPARED", [i, t, e]);
    return await this.postTask(n);
  }
  async sendPrepared(i, t, e) {
    let n = new bt("SEND_PREPARED", [i, t, e]);
    return await this.postTask(n);
  }
  async globFiles(i) {
    let t = new bt("GLOB_FILE_INFOS", i);
    return await this.postTask(t);
  }
  async registerFileText(i, t) {
    let e = TB.encode(t);
    await this.registerFileBuffer(i, e);
  }
  async registerFileURL(i, t, e, n) {
    t === void 0 && (t = i);
    let s = new bt("REGISTER_FILE_URL", [i, t, e, n]);
    await this.postTask(s);
  }
  async registerEmptyFileBuffer(i) {
  }
  async registerFileBuffer(i, t) {
    let e = new bt("REGISTER_FILE_BUFFER", [i, t]);
    await this.postTask(e, [t.buffer]);
  }
  async registerFileHandle(i, t, e, n) {
    let s = new bt("REGISTER_FILE_HANDLE", [i, t, e, n]);
    await this.postTask(s, []);
  }
  async registerOPFSFileName(i) {
    let t = new bt("REGISTER_OPFS_FILE_NAME", [i]);
    await this.postTask(t, []);
  }
  async collectFileStatistics(i, t) {
    let e = new bt("COLLECT_FILE_STATISTICS", [i, t]);
    await this.postTask(e, []);
  }
  async exportFileStatistics(i) {
    let t = new bt("EXPORT_FILE_STATISTICS", i);
    return await this.postTask(t, []);
  }
  async copyFileToBuffer(i) {
    let t = new bt("COPY_FILE_TO_BUFFER", i);
    return await this.postTask(t);
  }
  async copyFileToPath(i, t) {
    let e = new bt("COPY_FILE_TO_PATH", [i, t]);
    await this.postTask(e);
  }
  async insertArrowFromIPCStream(i, t, e) {
    if (t.length == 0) return;
    let n = new bt("INSERT_ARROW_FROM_IPC_STREAM", [i, t, e]);
    await this.postTask(n, [t.buffer]);
  }
  async insertCSVFromPath(i, t, e) {
    if (e.columns !== void 0) {
      let s = [];
      for (let r in e.columns) {
        let o = e.columns[r];
        s.push(Pd(r, o));
      }
      e.columnsFlat = s, delete e.columns;
    }
    let n = new bt("IMPORT_CSV_FROM_PATH", [i, t, e]);
    await this.postTask(n);
  }
  async insertJSONFromPath(i, t, e) {
    if (e.columns !== void 0) {
      let s = [];
      for (let r in e.columns) {
        let o = e.columns[r];
        s.push(Pd(r, o));
      }
      e.columnsFlat = s, delete e.columns;
    }
    let n = new bt("IMPORT_JSON_FROM_PATH", [i, t, e]);
    await this.postTask(n);
  }
};
function MB() {
  let i = new TextDecoder();
  return (t) => (typeof SharedArrayBuffer < "u" && t.buffer instanceof SharedArrayBuffer && (t = new Uint8Array(t)), i.decode(t));
}
MB();
var zb = ((i) => (i[i.BUFFER = 0] = "BUFFER", i[i.NODE_FS = 1] = "NODE_FS", i[i.BROWSER_FILEREADER = 2] = "BROWSER_FILEREADER", i[i.BROWSER_FSACCESS = 3] = "BROWSER_FSACCESS", i[i.HTTP = 4] = "HTTP", i[i.S3 = 5] = "S3", i))(zb || {}), RB = class {
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
        case "OPEN": {
          let t = i.data.path;
          t != null && t.startsWith("opfs://") && (await this._bindings.prepareDBFileHandle(t, 3), i.data.useDirectIO = !0), this._bindings.open(i.data), this.sendOK(i);
          break;
        }
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
          let t = this._bindings.startPendingQuery(i.data[0], i.data[1], i.data[2]), e = [];
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
          let t = this._bindings.fetchQueryResults(i.data), e = t ? [t.buffer] : [];
          this.postMessage({ messageId: this._nextMessageId++, requestId: i.messageId, type: "QUERY_RESULT_CHUNK", data: t }, e);
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
          await this._bindings.registerFileHandleAsync(i.data[0], i.data[1], i.data[2], i.data[3]), this.sendOK(i);
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
        case "REGISTER_OPFS_FILE_NAME":
          this._bindings.registerOPFSFileName(i.data[0]), this.sendOK(i);
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
}, LB = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])), UB = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11])), xB = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), CB = () => (async (i) => {
  try {
    return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(i);
  } catch {
    return !1;
  }
})(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11])), zh = { name: "@duckdb/duckdb-wasm", version: "1.30.0" }, Wb = zh.name, Hb = zh.version, Wh = zh.version.split("."), $B = Wh[0], VB = Wh[1], PB = Wh[2], Hh = () => typeof navigator > "u", Yb = () => Hh() ? "node" : navigator.userAgent, kB = () => Yb().includes("Firefox"), jB = () => /^((?!chrome|android).)*safari/i.test(Yb());
function zB() {
  let i = "https://cdn.jsdelivr.net/npm/".concat(Wb, "@").concat(Hb, "/dist/");
  return { mvp: { mainModule: "".concat(i, "duckdb-mvp.wasm"), mainWorker: "".concat(i, "duckdb-browser-mvp.worker.js") }, eh: { mainModule: "".concat(i, "duckdb-eh.wasm"), mainWorker: "".concat(i, "duckdb-browser-eh.worker.js") } };
}
var Gu = null, qu = null, Ju = null, Qu = null, Zu = null;
async function Kb() {
  return Gu == null && (Gu = typeof BigInt64Array < "u"), qu == null && (qu = await UB()), Ju == null && (Ju = await CB()), Qu == null && (Qu = await xB()), Zu == null && (Zu = await LB()), { bigInt64Array: Gu, crossOriginIsolated: Hh() || globalThis.crossOriginIsolated || !1, wasmExceptions: qu, wasmSIMD: Qu, wasmThreads: Ju, wasmBulkMemory: Zu };
}
async function WB(i) {
  let t = await Kb();
  if (t.wasmExceptions) {
    if (t.wasmSIMD && t.wasmThreads && t.crossOriginIsolated && i.coi) return { mainModule: i.coi.mainModule, mainWorker: i.coi.mainWorker, pthreadWorker: i.coi.pthreadWorker };
    if (i.eh) return { mainModule: i.eh.mainModule, mainWorker: i.eh.mainWorker, pthreadWorker: null };
  }
  return { mainModule: i.mvp.mainModule, mainWorker: i.mvp.mainWorker, pthreadWorker: null };
}
var HB = vB(wB());
async function YB(i) {
  let t = new Request(i), e = await fetch(t), n = URL.createObjectURL(await e.blob());
  return new HB.default(n);
}
const KB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AsyncDuckDB: FB,
  AsyncDuckDBConnection: Vb,
  AsyncDuckDBDispatcher: RB,
  AsyncPreparedStatement: Pb,
  AsyncResultStreamIterator: jh,
  ConsoleLogger: SB,
  DuckDBAccessMode: Mb,
  DuckDBDataProtocol: zb,
  IsArrowBuffer: EB,
  IsDuckDBWasmRetry: AB,
  LogEvent: xb,
  LogLevel: Lb,
  LogOrigin: Cb,
  LogTopic: Ub,
  PACKAGE_NAME: Wb,
  PACKAGE_VERSION: Hb,
  PACKAGE_VERSION_MAJOR: $B,
  PACKAGE_VERSION_MINOR: VB,
  PACKAGE_VERSION_PATCH: PB,
  StatusCode: $b,
  TokenType: Rb,
  VoidLogger: IB,
  WorkerRequestType: kb,
  WorkerResponseType: jb,
  WorkerTask: bt,
  createWorker: YB,
  getJsDelivrBundles: zB,
  getLogEventLabel: DB,
  getLogLevelLabel: OB,
  getLogOriginLabel: NB,
  getLogTopicLabel: BB,
  getPlatformFeatures: Kb,
  isFirefox: kB,
  isNode: Hh,
  isSafari: jB,
  selectBundle: WB
}, Symbol.toStringTag, { value: "Module" })), GB = new TextDecoder("utf-8"), kd = (i) => GB.decode(i), qB = new TextEncoder(), za = (i) => qB.encode(i), JB = (i) => typeof i == "number", Gb = (i) => typeof i == "boolean", ce = (i) => typeof i == "function", We = (i) => i != null && Object(i) === i, gs = (i) => We(i) && ce(i.then), wo = (i) => We(i) && ce(i[Symbol.iterator]), sr = (i) => We(i) && ce(i[Symbol.asyncIterator]), jd = (i) => We(i) && We(i.schema), qb = (i) => We(i) && "done" in i && "value" in i, Jb = (i) => We(i) && ce(i.stat) && JB(i.fd), Qb = (i) => We(i) && Yh(i.body), hu = (i) => "_getDOMStream" in i && "_getNodeStream" in i, QB = (i) => We(i) && ce(i.abort) && ce(i.getWriter) && !hu(i), Yh = (i) => We(i) && ce(i.cancel) && ce(i.getReader) && !hu(i), ZB = (i) => We(i) && ce(i.end) && ce(i.write) && Gb(i.writable) && !hu(i), Zb = (i) => We(i) && ce(i.read) && ce(i.pipe) && Gb(i.readable) && !hu(i), XB = (i) => We(i) && ce(i.clear) && ce(i.bytes) && ce(i.position) && ce(i.setPosition) && ce(i.capacity) && ce(i.getBufferIdentifier) && ce(i.createLong), Kh = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function tN(i) {
  const t = i[0] ? [i[0]] : [];
  let e, n, s, r;
  for (let o, a, c = 0, l = 0, u = i.length; ++c < u; ) {
    if (o = t[l], a = i[c], !o || !a || o.buffer !== a.buffer || a.byteOffset < o.byteOffset) {
      a && (t[++l] = a);
      continue;
    }
    if ({ byteOffset: e, byteLength: s } = o, { byteOffset: n, byteLength: r } = a, e + s < n || n + r < e) {
      a && (t[++l] = a);
      continue;
    }
    t[l] = new Uint8Array(o.buffer, e, n - e + r);
  }
  return t;
}
function Cl(i, t, e = 0, n = t.byteLength) {
  const s = i.byteLength, r = new Uint8Array(i.buffer, i.byteOffset, s), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(n, s));
  return r.set(o, e), i;
}
function Ei(i, t) {
  const e = tN(i), n = e.reduce((u, d) => u + d.byteLength, 0);
  let s, r, o, a = 0, c = -1;
  const l = Math.min(t || Number.POSITIVE_INFINITY, n);
  for (const u = e.length; ++c < u; ) {
    if (s = e[c], r = s.subarray(0, Math.min(s.length, l - a)), l <= a + r.length) {
      r.length < s.length ? e[c] = s.subarray(r.length) : r.length === s.length && c++, o ? Cl(o, r, a) : o = r;
      break;
    }
    Cl(o || (o = new Uint8Array(l)), r, a), a += r.length;
  }
  return [o || new Uint8Array(0), e.slice(c), n - (o ? o.byteLength : 0)];
}
function gt(i, t) {
  let e = qb(t) ? t.value : t;
  return e instanceof i ? i === Uint8Array ? new i(e.buffer, e.byteOffset, e.byteLength) : e : e ? (typeof e == "string" && (e = za(e)), e instanceof ArrayBuffer ? new i(e) : e instanceof Kh ? new i(e) : XB(e) ? gt(i, e.bytes()) : ArrayBuffer.isView(e) ? e.byteLength <= 0 ? new i(0) : new i(e.buffer, e.byteOffset, e.byteLength / i.BYTES_PER_ELEMENT) : i.from(e)) : new i(0);
}
const eN = (i) => gt(Int8Array, i), iN = (i) => gt(Int16Array, i), Fr = (i) => gt(Int32Array, i), zd = (i) => gt(BigInt64Array, i), ht = (i) => gt(Uint8Array, i), nN = (i) => gt(Uint16Array, i), sN = (i) => gt(Uint32Array, i), rN = (i) => gt(BigUint64Array, i), oN = (i) => gt(Float32Array, i), aN = (i) => gt(Float64Array, i), cN = (i) => gt(Uint8ClampedArray, i), Wd = (i) => (i.next(), i);
function* un(i, t) {
  const e = function* (s) {
    yield s;
  }, n = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Kh ? e(t) : wo(t) ? t : e(t);
  return yield* Wd((function* (s) {
    let r = null;
    do
      r = s.next(yield gt(i, r));
    while (!r.done);
  })(n[Symbol.iterator]())), new i();
}
const lN = (i) => un(Int8Array, i), uN = (i) => un(Int16Array, i), dN = (i) => un(Int32Array, i), Xb = (i) => un(Uint8Array, i), hN = (i) => un(Uint16Array, i), fN = (i) => un(Uint32Array, i), pN = (i) => un(Float32Array, i), yN = (i) => un(Float64Array, i), gN = (i) => un(Uint8ClampedArray, i);
function Ti(i, t) {
  return ee(this, arguments, function* () {
    if (gs(t))
      return yield E(yield E(yield* cs(Te(Ti(i, yield E(t))))));
    const n = function(o) {
      return ee(this, arguments, function* () {
        yield yield E(yield E(o));
      });
    }, s = function(o) {
      return ee(this, arguments, function* () {
        yield E(yield* cs(Te(Wd((function* (a) {
          let c = null;
          do
            c = a.next(yield c?.value);
          while (!c.done);
        })(o[Symbol.iterator]())))));
      });
    }, r = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Kh ? n(t) : wo(t) ? s(t) : sr(t) ? t : n(t);
    return yield E(
      // otherwise if AsyncIterable, use it
      yield* cs(Te(Wd((function(o) {
        return ee(this, arguments, function* () {
          let a = null;
          do
            a = yield E(o.next(yield yield E(gt(i, a))));
          while (!a.done);
        });
      })(r[Symbol.asyncIterator]()))))
    ), yield E(new i());
  });
}
const mN = (i) => Ti(Int8Array, i), _N = (i) => Ti(Int16Array, i), bN = (i) => Ti(Int32Array, i), tv = (i) => Ti(Uint8Array, i), vN = (i) => Ti(Uint16Array, i), wN = (i) => Ti(Uint32Array, i), IN = (i) => Ti(Float32Array, i), SN = (i) => Ti(Float64Array, i), ON = (i) => Ti(Uint8ClampedArray, i);
function Gh(i, t, e) {
  if (i !== 0) {
    e = e.slice(0, t);
    for (let n = -1, s = e.length; ++n < s; )
      e[n] += i;
  }
  return e.subarray(0, t);
}
function ev(i, t) {
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
const DN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compareArrayLike: ev,
  joinUint8Arrays: Ei,
  memcpy: Cl,
  rebaseValueOffsets: Gh,
  toArrayBufferView: gt,
  toArrayBufferViewAsyncIterator: Ti,
  toArrayBufferViewIterator: un,
  toBigInt64Array: zd,
  toBigUint64Array: rN,
  toFloat32Array: oN,
  toFloat32ArrayAsyncIterator: IN,
  toFloat32ArrayIterator: pN,
  toFloat64Array: aN,
  toFloat64ArrayAsyncIterator: SN,
  toFloat64ArrayIterator: yN,
  toInt16Array: iN,
  toInt16ArrayAsyncIterator: _N,
  toInt16ArrayIterator: uN,
  toInt32Array: Fr,
  toInt32ArrayAsyncIterator: bN,
  toInt32ArrayIterator: dN,
  toInt8Array: eN,
  toInt8ArrayAsyncIterator: mN,
  toInt8ArrayIterator: lN,
  toUint16Array: nN,
  toUint16ArrayAsyncIterator: vN,
  toUint16ArrayIterator: hN,
  toUint32Array: sN,
  toUint32ArrayAsyncIterator: wN,
  toUint32ArrayIterator: fN,
  toUint8Array: ht,
  toUint8ArrayAsyncIterator: tv,
  toUint8ArrayIterator: Xb,
  toUint8ClampedArray: cN,
  toUint8ClampedArrayAsyncIterator: ON,
  toUint8ClampedArrayIterator: gN
}, Symbol.toStringTag, { value: "Module" })), qe = {
  fromIterable(i) {
    return dc(BN(i));
  },
  fromAsyncIterable(i) {
    return dc(NN(i));
  },
  fromDOMStream(i) {
    return dc(EN(i));
  },
  fromNodeStream(i) {
    return dc(TN(i));
  },
  // @ts-ignore
  toDOMStream(i, t) {
    throw new Error('"toDOMStream" not available in this environment');
  },
  // @ts-ignore
  toNodeStream(i, t) {
    throw new Error('"toNodeStream" not available in this environment');
  }
}, dc = (i) => (i.next(), i);
function* BN(i) {
  let t, e = !1, n = [], s, r, o, a = 0;
  function c() {
    return r === "peek" ? Ei(n, o)[0] : ([s, n, a] = Ei(n, o), s);
  }
  ({ cmd: r, size: o } = (yield null) || { cmd: "read", size: 0 });
  const l = Xb(i)[Symbol.iterator]();
  try {
    do
      if ({ done: t, value: s } = Number.isNaN(o - a) ? l.next() : l.next(o - a), !t && s.byteLength > 0 && (n.push(s), a += s.byteLength), t || o <= a)
        do
          ({ cmd: r, size: o } = yield c());
        while (o < a);
    while (!t);
  } catch (u) {
    e = !0, typeof l.throw == "function" && l.throw(u);
  } finally {
    e === !1 && typeof l.return == "function" && l.return(null);
  }
  return null;
}
function NN(i) {
  return ee(this, arguments, function* () {
    let e, n = !1, s = [], r, o, a, c = 0;
    function l() {
      return o === "peek" ? Ei(s, a)[0] : ([r, s, c] = Ei(s, a), r);
    }
    ({ cmd: o, size: a } = (yield yield E(null)) || { cmd: "read", size: 0 });
    const u = tv(i)[Symbol.asyncIterator]();
    try {
      do
        if ({ done: e, value: r } = Number.isNaN(a - c) ? yield E(u.next()) : yield E(u.next(a - c)), !e && r.byteLength > 0 && (s.push(r), c += r.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield E(l()));
          while (a < c);
      while (!e);
    } catch (d) {
      n = !0, typeof u.throw == "function" && (yield E(u.throw(d)));
    } finally {
      n === !1 && typeof u.return == "function" && (yield E(u.return(new Uint8Array(0))));
    }
    return yield E(null);
  });
}
function EN(i) {
  return ee(this, arguments, function* () {
    let e = !1, n = !1, s = [], r, o, a, c = 0;
    function l() {
      return o === "peek" ? Ei(s, a)[0] : ([r, s, c] = Ei(s, a), r);
    }
    ({ cmd: o, size: a } = (yield yield E(null)) || { cmd: "read", size: 0 });
    const u = new AN(i);
    try {
      do
        if ({ done: e, value: r } = Number.isNaN(a - c) ? yield E(u.read()) : yield E(u.read(a - c)), !e && r.byteLength > 0 && (s.push(ht(r)), c += r.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield E(l()));
          while (a < c);
      while (!e);
    } catch (d) {
      n = !0, yield E(u.cancel(d));
    } finally {
      n === !1 ? yield E(u.cancel()) : i.locked && u.releaseLock();
    }
    return yield E(null);
  });
}
class AN {
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
    return v(this, void 0, void 0, function* () {
      const { reader: e, source: n } = this;
      e && (yield e.cancel(t).catch(() => {
      })), n && n.locked && this.releaseLock();
    });
  }
  read(t) {
    return v(this, void 0, void 0, function* () {
      if (t === 0)
        return { done: this.reader == null, value: new Uint8Array(0) };
      const e = yield this.reader.read();
      return !e.done && (e.value = ht(e)), e;
    });
  }
}
const Xu = (i, t) => {
  const e = (s) => n([t, s]);
  let n;
  return [t, e, new Promise((s) => (n = s) && i.once(t, e))];
};
function TN(i) {
  return ee(this, arguments, function* () {
    const e = [];
    let n = "error", s = !1, r = null, o, a, c = 0, l = [], u;
    function d() {
      return o === "peek" ? Ei(l, a)[0] : ([u, l, c] = Ei(l, a), u);
    }
    if ({ cmd: o, size: a } = (yield yield E(null)) || { cmd: "read", size: 0 }, i.isTTY)
      return yield yield E(new Uint8Array(0)), yield E(null);
    try {
      e[0] = Xu(i, "end"), e[1] = Xu(i, "error");
      do {
        if (e[2] = Xu(i, "readable"), [n, r] = yield E(Promise.race(e.map((_) => _[2]))), n === "error")
          break;
        if ((s = n === "end") || (Number.isFinite(a - c) ? (u = ht(i.read(a - c)), u.byteLength < a - c && (u = ht(i.read()))) : u = ht(i.read()), u.byteLength > 0 && (l.push(u), c += u.byteLength)), s || a <= c)
          do
            ({ cmd: o, size: a } = yield yield E(d()));
          while (a < c);
      } while (!s);
    } finally {
      yield E(m(e, n === "error" ? r : null));
    }
    return yield E(null);
    function m(_, A) {
      return u = l = null, new Promise((L, Ht) => {
        for (const [dt, mt] of _)
          i.off(dt, mt);
        try {
          const dt = i.destroy;
          dt && dt.call(i, A), A = void 0;
        } catch (dt) {
          A = dt || A;
        } finally {
          A != null ? Ht(A) : L();
        }
      });
    }
  });
}
var Zt;
(function(i) {
  i[i.V1 = 0] = "V1", i[i.V2 = 1] = "V2", i[i.V3 = 2] = "V3", i[i.V4 = 3] = "V4", i[i.V5 = 4] = "V5";
})(Zt || (Zt = {}));
var se;
(function(i) {
  i[i.Sparse = 0] = "Sparse", i[i.Dense = 1] = "Dense";
})(se || (se = {}));
var ie;
(function(i) {
  i[i.HALF = 0] = "HALF", i[i.SINGLE = 1] = "SINGLE", i[i.DOUBLE = 2] = "DOUBLE";
})(ie || (ie = {}));
var _e;
(function(i) {
  i[i.DAY = 0] = "DAY", i[i.MILLISECOND = 1] = "MILLISECOND";
})(_e || (_e = {}));
var R;
(function(i) {
  i[i.SECOND = 0] = "SECOND", i[i.MILLISECOND = 1] = "MILLISECOND", i[i.MICROSECOND = 2] = "MICROSECOND", i[i.NANOSECOND = 3] = "NANOSECOND";
})(R || (R = {}));
var zt;
(function(i) {
  i[i.YEAR_MONTH = 0] = "YEAR_MONTH", i[i.DAY_TIME = 1] = "DAY_TIME", i[i.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(zt || (zt = {}));
const td = 2, Gi = 4, Bn = 4, Rt = 4, rs = new Int32Array(2), Ry = new Float32Array(rs.buffer), Ly = new Float64Array(rs.buffer), hc = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var Hd;
(function(i) {
  i[i.UTF8_BYTES = 1] = "UTF8_BYTES", i[i.UTF16_STRING = 2] = "UTF16_STRING";
})(Hd || (Hd = {}));
let ao = class iv {
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
    return new iv(new Uint8Array(t));
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
    return rs[0] = this.readInt32(t), Ry[0];
  }
  readFloat64(t) {
    return rs[hc ? 0 : 1] = this.readInt32(t), rs[hc ? 1 : 0] = this.readInt32(t + 4), Ly[0];
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
    Ry[0] = e, this.writeInt32(t, rs[0]);
  }
  writeFloat64(t, e) {
    Ly[0] = e, this.writeInt32(t, rs[hc ? 0 : 1]), this.writeInt32(t + 4, rs[hc ? 1 : 0]);
  }
  /**
   * Return the file identifier.   Behavior is undefined for FlatBuffers whose
   * schema does not include a file_identifier (likely points at padding or the
   * start of a the root vtable).
   */
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + Gi + Bn)
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let e = 0; e < Bn; e++)
      t += String.fromCharCode(this.readInt8(this.position_ + Gi + e));
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
    t += Gi;
    const s = this.bytes_.subarray(t, t + n);
    return e === Hd.UTF8_BYTES ? s : this.text_decoder_.decode(s);
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
    return t + this.readInt32(t) + Gi;
  }
  /**
   * Get the length of a vector whose offset is stored at "offset" in this object.
   */
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != Bn)
      throw new Error("FlatBuffers: file identifier must be length " + Bn);
    for (let e = 0; e < Bn; e++)
      if (t.charCodeAt(e) != this.readInt8(this.position() + Gi + e))
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
}, nv = class sv {
  /**
   * Create a FlatBufferBuilder.
   */
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null, this.text_encoder = new TextEncoder();
    let e;
    t ? e = t : e = 1024, this.bb = ao.allocate(e), this.space = e;
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
      this.bb = sv.growByteBuffer(this.bb), this.space += this.bb.capacity() - s;
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
    const n = e << 1, s = ao.allocate(n);
    return s.setPosition(n - e), s.bytes().set(t.bytes(), n - e), s;
  }
  /**
   * Adds on offset, relative to where it will be written.
   *
   * @param offset The offset to add.
   */
  addOffset(t) {
    this.prep(Gi, 0), this.writeInt32(this.offset() - t + Gi);
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
    const r = (n + s) * td;
    this.addInt16(r);
    let o = 0;
    const a = this.space;
    t: for (e = 0; e < this.vtables.length; e++) {
      const c = this.bb.capacity() - this.vtables[e];
      if (r == this.bb.readInt16(c)) {
        for (let l = td; l < r; l += td)
          if (this.bb.readInt16(a + l) != this.bb.readInt16(c + l))
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
    const s = n ? Rt : 0;
    if (e) {
      const r = e;
      if (this.prep(this.minalign, Gi + Bn + s), r.length != Bn)
        throw new TypeError("FlatBuffers: file identifier must be length " + Bn);
      for (let o = Bn - 1; o >= 0; o--)
        this.writeInt8(r.charCodeAt(o));
    }
    this.prep(this.minalign, Gi + s), this.addOffset(t), s && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
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
    this.notNested(), this.vector_num_elems = e, this.prep(Gi, t * e), this.prep(n, t * e);
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
var $l;
(function(i) {
  i[i.BUFFER = 0] = "BUFFER";
})($l || ($l = {}));
var Vl;
(function(i) {
  i[i.LZ4_FRAME = 0] = "LZ4_FRAME", i[i.ZSTD = 1] = "ZSTD";
})(Vl || (Vl = {}));
class os {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBodyCompression(t, e) {
    return (e || new os()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, e) {
    return t.setPosition(t.position() + Rt), (e || new os()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Compressor library.
   * For LZ4_FRAME, each compressed buffer must consist of a single frame.
   */
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : Vl.LZ4_FRAME;
  }
  /**
   * Indicates the way the record batch body was compressed
   */
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : $l.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, e) {
    t.addFieldInt8(0, e, Vl.LZ4_FRAME);
  }
  static addMethod(t, e) {
    t.addFieldInt8(1, e, $l.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, e, n) {
    return os.startBodyCompression(t), os.addCodec(t, e), os.addMethod(t, n), os.endBodyCompression(t);
  }
}
class rv {
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
let ov = class {
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
}, Sn = class Yd {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsRecordBatch(t, e) {
    return (e || new Yd()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Yd()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return n ? (e || new ov()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
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
    return n ? (e || new rv()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
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
    return e ? (t || new os()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
}, Mr = class Kd {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryBatch(t, e) {
    return (e || new Kd()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Kd()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  data(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new Sn()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
var co;
(function(i) {
  i[i.Little = 0] = "Little", i[i.Big = 1] = "Big";
})(co || (co = {}));
var Pl;
(function(i) {
  i[i.DenseArray = 0] = "DenseArray";
})(Pl || (Pl = {}));
class Qe {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInt(t, e) {
    return (e || new Qe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInt(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Qe()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Qe.startInt(t), Qe.addBitWidth(t, e), Qe.addIsSigned(t, n), Qe.endInt(t);
  }
}
class Nn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryEncoding(t, e) {
    return (e || new Nn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Nn()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return e ? (t || new Qe()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
    return t ? this.bb.readInt16(this.bb_pos + t) : Pl.DenseArray;
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
    t.addFieldInt16(3, e, Pl.DenseArray);
  }
  static endDictionaryEncoding(t) {
    return t.endObject();
  }
}
class ue {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsKeyValue(t, e) {
    return (e || new ue()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsKeyValue(t, e) {
    return t.setPosition(t.position() + Rt), (e || new ue()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return ue.startKeyValue(t), ue.addKey(t, e), ue.addValue(t, n), ue.endKeyValue(t);
  }
}
let Uy = class Yo {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBinary(t, e) {
    return (e || new Yo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Yo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return Yo.startBinary(t), Yo.endBinary(t);
  }
}, xy = class Ko {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBool(t, e) {
    return (e || new Ko()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Ko()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return Ko.startBool(t), Ko.endBool(t);
  }
}, Cc = class Rr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDate(t, e) {
    return (e || new Rr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Rr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : _e.MILLISECOND;
  }
  static startDate(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, _e.MILLISECOND);
  }
  static endDate(t) {
    return t.endObject();
  }
  static createDate(t, e) {
    return Rr.startDate(t), Rr.addUnit(t, e), Rr.endDate(t);
  }
}, Lr = class ts {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDecimal(t, e) {
    return (e || new ts()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDecimal(t, e) {
    return t.setPosition(t.position() + Rt), (e || new ts()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return ts.startDecimal(t), ts.addPrecision(t, e), ts.addScale(t, n), ts.addBitWidth(t, s), ts.endDecimal(t);
  }
}, $c = class Ur {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDuration(t, e) {
    return (e || new Ur()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDuration(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Ur()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : R.MILLISECOND;
  }
  static startDuration(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, R.MILLISECOND);
  }
  static endDuration(t) {
    return t.endObject();
  }
  static createDuration(t, e) {
    return Ur.startDuration(t), Ur.addUnit(t, e), Ur.endDuration(t);
  }
}, Vc = class xr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeBinary(t, e) {
    return (e || new xr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, e) {
    return t.setPosition(t.position() + Rt), (e || new xr()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return xr.startFixedSizeBinary(t), xr.addByteWidth(t, e), xr.endFixedSizeBinary(t);
  }
}, Pc = class Cr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeList(t, e) {
    return (e || new Cr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Cr()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Cr.startFixedSizeList(t), Cr.addListSize(t, e), Cr.endFixedSizeList(t);
  }
};
class qi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFloatingPoint(t, e) {
    return (e || new qi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, e) {
    return t.setPosition(t.position() + Rt), (e || new qi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : ie.HALF;
  }
  static startFloatingPoint(t) {
    t.startObject(1);
  }
  static addPrecision(t, e) {
    t.addFieldInt16(0, e, ie.HALF);
  }
  static endFloatingPoint(t) {
    return t.endObject();
  }
  static createFloatingPoint(t, e) {
    return qi.startFloatingPoint(t), qi.addPrecision(t, e), qi.endFloatingPoint(t);
  }
}
class Ji {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInterval(t, e) {
    return (e || new Ji()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Ji()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : zt.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, zt.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, e) {
    return Ji.startInterval(t), Ji.addUnit(t, e), Ji.endInterval(t);
  }
}
let Cy = class Go {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsLargeBinary(t, e) {
    return (e || new Go()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeBinary(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Go()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeBinary(t) {
    t.startObject(0);
  }
  static endLargeBinary(t) {
    return t.endObject();
  }
  static createLargeBinary(t) {
    return Go.startLargeBinary(t), Go.endLargeBinary(t);
  }
}, $y = class qo {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsLargeUtf8(t, e) {
    return (e || new qo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeUtf8(t, e) {
    return t.setPosition(t.position() + Rt), (e || new qo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeUtf8(t) {
    t.startObject(0);
  }
  static endLargeUtf8(t) {
    return t.endObject();
  }
  static createLargeUtf8(t) {
    return qo.startLargeUtf8(t), qo.endLargeUtf8(t);
  }
}, Vy = class Jo {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsList(t, e) {
    return (e || new Jo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Jo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return Jo.startList(t), Jo.endList(t);
  }
}, kc = class $r {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMap(t, e) {
    return (e || new $r()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, e) {
    return t.setPosition(t.position() + Rt), (e || new $r()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return $r.startMap(t), $r.addKeysSorted(t, e), $r.endMap(t);
  }
}, Py = class Qo {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsNull(t, e) {
    return (e || new Qo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Qo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return Qo.startNull(t), Qo.endNull(t);
  }
};
class Ws {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsStruct_(t, e) {
    return (e || new Ws()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsStruct_(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Ws()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startStruct_(t) {
    t.startObject(0);
  }
  static endStruct_(t) {
    return t.endObject();
  }
  static createStruct_(t) {
    return Ws.startStruct_(t), Ws.endStruct_(t);
  }
}
class ai {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTime(t, e) {
    return (e || new ai()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTime(t, e) {
    return t.setPosition(t.position() + Rt), (e || new ai()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : R.MILLISECOND;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 32;
  }
  static startTime(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, R.MILLISECOND);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(1, e, 32);
  }
  static endTime(t) {
    return t.endObject();
  }
  static createTime(t, e, n) {
    return ai.startTime(t), ai.addUnit(t, e), ai.addBitWidth(t, n), ai.endTime(t);
  }
}
class ci {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTimestamp(t, e) {
    return (e || new ci()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTimestamp(t, e) {
    return t.setPosition(t.position() + Rt), (e || new ci()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : R.SECOND;
  }
  timezone(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startTimestamp(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, R.SECOND);
  }
  static addTimezone(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endTimestamp(t) {
    return t.endObject();
  }
  static createTimestamp(t, e, n) {
    return ci.startTimestamp(t), ci.addUnit(t, e), ci.addTimezone(t, n), ci.endTimestamp(t);
  }
}
class Pe {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUnion(t, e) {
    return (e || new Pe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUnion(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Pe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  mode() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : se.Sparse;
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
    t.addFieldInt16(0, e, se.Sparse);
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
    return Pe.startUnion(t), Pe.addMode(t, e), Pe.addTypeIds(t, n), Pe.endUnion(t);
  }
}
let ky = class Zo {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUtf8(t, e) {
    return (e || new Zo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Zo()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return Zo.startUtf8(t), Zo.endUtf8(t);
  }
};
var ct;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.Null = 1] = "Null", i[i.Int = 2] = "Int", i[i.FloatingPoint = 3] = "FloatingPoint", i[i.Binary = 4] = "Binary", i[i.Utf8 = 5] = "Utf8", i[i.Bool = 6] = "Bool", i[i.Decimal = 7] = "Decimal", i[i.Date = 8] = "Date", i[i.Time = 9] = "Time", i[i.Timestamp = 10] = "Timestamp", i[i.Interval = 11] = "Interval", i[i.List = 12] = "List", i[i.Struct_ = 13] = "Struct_", i[i.Union = 14] = "Union", i[i.FixedSizeBinary = 15] = "FixedSizeBinary", i[i.FixedSizeList = 16] = "FixedSizeList", i[i.Map = 17] = "Map", i[i.Duration = 18] = "Duration", i[i.LargeBinary = 19] = "LargeBinary", i[i.LargeUtf8 = 20] = "LargeUtf8", i[i.LargeList = 21] = "LargeList", i[i.RunEndEncoded = 22] = "RunEndEncoded";
})(ct || (ct = {}));
let ri = class jc {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsField(t, e) {
    return (e || new jc()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, e) {
    return t.setPosition(t.position() + Rt), (e || new jc()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return t ? this.bb.readUint8(this.bb_pos + t) : ct.NONE;
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
    return e ? (t || new Nn()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * children apply only to nested data types like Struct, List and Union. For
   * primitive types children will have length 0.
   */
  children(t, e) {
    const n = this.bb.__offset(this.bb_pos, 14);
    return n ? (e || new jc()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
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
    return n ? (e || new ue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
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
    t.addFieldInt8(2, e, ct.NONE);
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
}, zi = class _n {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsSchema(t, e) {
    return (e || new _n()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, e) {
    return t.setPosition(t.position() + Rt), (e || new _n()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * endianness of the buffer
   * it is Little Endian by default
   * if endianness doesn't match the underlying system then the vectors need to be converted
   */
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : co.Little;
  }
  fields(t, e) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (e || new ri()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  fieldsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, e) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (e || new ue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
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
    t.addFieldInt16(0, e, co.Little);
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
    return _n.startSchema(t), _n.addEndianness(t, e), _n.addFields(t, n), _n.addCustomMetadata(t, s), _n.addFeatures(t, r), _n.endSchema(t);
  }
};
var Dt;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.Schema = 1] = "Schema", i[i.DictionaryBatch = 2] = "DictionaryBatch", i[i.RecordBatch = 3] = "RecordBatch", i[i.Tensor = 4] = "Tensor", i[i.SparseTensor = 5] = "SparseTensor";
})(Dt || (Dt = {}));
var y;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.Null = 1] = "Null", i[i.Int = 2] = "Int", i[i.Float = 3] = "Float", i[i.Binary = 4] = "Binary", i[i.Utf8 = 5] = "Utf8", i[i.Bool = 6] = "Bool", i[i.Decimal = 7] = "Decimal", i[i.Date = 8] = "Date", i[i.Time = 9] = "Time", i[i.Timestamp = 10] = "Timestamp", i[i.Interval = 11] = "Interval", i[i.List = 12] = "List", i[i.Struct = 13] = "Struct", i[i.Union = 14] = "Union", i[i.FixedSizeBinary = 15] = "FixedSizeBinary", i[i.FixedSizeList = 16] = "FixedSizeList", i[i.Map = 17] = "Map", i[i.Duration = 18] = "Duration", i[i.LargeBinary = 19] = "LargeBinary", i[i.LargeUtf8 = 20] = "LargeUtf8", i[i.Dictionary = -1] = "Dictionary", i[i.Int8 = -2] = "Int8", i[i.Int16 = -3] = "Int16", i[i.Int32 = -4] = "Int32", i[i.Int64 = -5] = "Int64", i[i.Uint8 = -6] = "Uint8", i[i.Uint16 = -7] = "Uint16", i[i.Uint32 = -8] = "Uint32", i[i.Uint64 = -9] = "Uint64", i[i.Float16 = -10] = "Float16", i[i.Float32 = -11] = "Float32", i[i.Float64 = -12] = "Float64", i[i.DateDay = -13] = "DateDay", i[i.DateMillisecond = -14] = "DateMillisecond", i[i.TimestampSecond = -15] = "TimestampSecond", i[i.TimestampMillisecond = -16] = "TimestampMillisecond", i[i.TimestampMicrosecond = -17] = "TimestampMicrosecond", i[i.TimestampNanosecond = -18] = "TimestampNanosecond", i[i.TimeSecond = -19] = "TimeSecond", i[i.TimeMillisecond = -20] = "TimeMillisecond", i[i.TimeMicrosecond = -21] = "TimeMicrosecond", i[i.TimeNanosecond = -22] = "TimeNanosecond", i[i.DenseUnion = -23] = "DenseUnion", i[i.SparseUnion = -24] = "SparseUnion", i[i.IntervalDayTime = -25] = "IntervalDayTime", i[i.IntervalYearMonth = -26] = "IntervalYearMonth", i[i.DurationSecond = -27] = "DurationSecond", i[i.DurationMillisecond = -28] = "DurationMillisecond", i[i.DurationMicrosecond = -29] = "DurationMicrosecond", i[i.DurationNanosecond = -30] = "DurationNanosecond", i[i.IntervalMonthDayNano = -31] = "IntervalMonthDayNano";
})(y || (y = {}));
var _i;
(function(i) {
  i[i.OFFSET = 0] = "OFFSET", i[i.DATA = 1] = "DATA", i[i.VALIDITY = 2] = "VALIDITY", i[i.TYPE = 3] = "TYPE";
})(_i || (_i = {}));
const FN = void 0;
function ms(i) {
  if (i === null)
    return "null";
  if (i === FN)
    return "undefined";
  switch (typeof i) {
    case "number":
      return `${i}`;
    case "bigint":
      return `${i}`;
    case "string":
      return `"${i}"`;
  }
  return typeof i[Symbol.toPrimitive] == "function" ? i[Symbol.toPrimitive]("string") : ArrayBuffer.isView(i) ? i instanceof BigInt64Array || i instanceof BigUint64Array ? `[${[...i].map((t) => ms(t))}]` : `[${i}]` : ArrayBuffer.isView(i) ? `[${i}]` : JSON.stringify(i, (t, e) => typeof e == "bigint" ? `${e}` : e);
}
const MN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  valueToString: ms
}, Symbol.toStringTag, { value: "Module" }));
function Wt(i) {
  if (typeof i == "bigint" && (i < Number.MIN_SAFE_INTEGER || i > Number.MAX_SAFE_INTEGER))
    throw new TypeError(`${i} is not safe to convert to a number.`);
  return Number(i);
}
function av(i, t) {
  return Wt(i / t) + Wt(i % t) / Wt(t);
}
const cv = Symbol.for("isArrowBigNum");
function Fi(i, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(gt(this.TypedArray, i), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(i, ...t), this.constructor.prototype);
}
Fi.prototype[cv] = !0;
Fi.prototype.toJSON = function() {
  return `"${lo(this)}"`;
};
Fi.prototype.valueOf = function(i) {
  return qh(this, i);
};
Fi.prototype.toString = function() {
  return lo(this);
};
Fi.prototype[Symbol.toPrimitive] = function(i = "default") {
  switch (i) {
    case "number":
      return qh(this);
    case "string":
      return lo(this);
    case "default":
      return lv(this);
  }
  return lo(this);
};
function Qr(...i) {
  return Fi.apply(this, i);
}
function Zr(...i) {
  return Fi.apply(this, i);
}
function va(...i) {
  return Fi.apply(this, i);
}
Object.setPrototypeOf(Qr.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(Zr.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(va.prototype, Object.create(Uint32Array.prototype));
Object.assign(Qr.prototype, Fi.prototype, { constructor: Qr, signed: !0, TypedArray: Int32Array, BigIntArray: BigInt64Array });
Object.assign(Zr.prototype, Fi.prototype, { constructor: Zr, signed: !1, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
Object.assign(va.prototype, Fi.prototype, { constructor: va, signed: !0, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
const RN = BigInt(4294967296) * BigInt(4294967296), LN = RN - BigInt(1);
function qh(i, t) {
  const { buffer: e, byteOffset: n, byteLength: s, signed: r } = i, o = new BigUint64Array(e, n, s / 8), a = r && o.at(-1) & BigInt(1) << BigInt(63);
  let c = BigInt(0), l = 0;
  if (a) {
    for (const u of o)
      c |= (u ^ LN) * (BigInt(1) << BigInt(64 * l++));
    c *= BigInt(-1), c -= BigInt(1);
  } else
    for (const u of o)
      c |= u * (BigInt(1) << BigInt(64 * l++));
  if (typeof t == "number" && t > 0) {
    const u = BigInt("1".padEnd(t + 1, "0")), d = c / u, m = a ? -(c % u) : c % u, _ = Wt(d), A = `${m}`.padStart(t, "0");
    return +`${a && _ === 0 ? "-" : ""}${_}.${A}`;
  }
  return Wt(c);
}
function lo(i) {
  if (i.byteLength === 8)
    return `${new i.BigIntArray(i.buffer, i.byteOffset, 1)[0]}`;
  if (!i.signed)
    return ed(i);
  let t = new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2);
  if (new Int16Array([t.at(-1)])[0] >= 0)
    return ed(i);
  t = t.slice();
  let n = 1;
  for (let r = 0; r < t.length; r++) {
    const o = t[r], a = ~o + n;
    t[r] = a, n &= o === 0 ? 1 : 0;
  }
  return `-${ed(t)}`;
}
function lv(i) {
  return i.byteLength === 8 ? new i.BigIntArray(i.buffer, i.byteOffset, 1)[0] : lo(i);
}
function ed(i) {
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
class Wa {
  /** @nocollapse */
  static new(t, e) {
    switch (e) {
      case !0:
        return new Qr(t);
      case !1:
        return new Zr(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case BigInt64Array:
        return new Qr(t);
    }
    return t.byteLength === 16 ? new va(t) : new Zr(t);
  }
  /** @nocollapse */
  static signed(t) {
    return new Qr(t);
  }
  /** @nocollapse */
  static unsigned(t) {
    return new Zr(t);
  }
  /** @nocollapse */
  static decimal(t) {
    return new va(t);
  }
  constructor(t, e) {
    return Wa.new(t, e);
  }
}
const UN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BN: Wa,
  bigNumToBigInt: lv,
  bigNumToNumber: qh,
  bigNumToString: lo,
  isArrowBigNumSymbol: cv
}, Symbol.toStringTag, { value: "Module" }));
var uv, dv, hv, fv, pv, yv, gv, mv, _v, bv, vv, wv, Iv, Sv, Ov, Dv, Bv, Nv, Ev, Av, Tv, Fv;
class M {
  /** @nocollapse */
  static isNull(t) {
    return t?.typeId === y.Null;
  }
  /** @nocollapse */
  static isInt(t) {
    return t?.typeId === y.Int;
  }
  /** @nocollapse */
  static isFloat(t) {
    return t?.typeId === y.Float;
  }
  /** @nocollapse */
  static isBinary(t) {
    return t?.typeId === y.Binary;
  }
  /** @nocollapse */
  static isLargeBinary(t) {
    return t?.typeId === y.LargeBinary;
  }
  /** @nocollapse */
  static isUtf8(t) {
    return t?.typeId === y.Utf8;
  }
  /** @nocollapse */
  static isLargeUtf8(t) {
    return t?.typeId === y.LargeUtf8;
  }
  /** @nocollapse */
  static isBool(t) {
    return t?.typeId === y.Bool;
  }
  /** @nocollapse */
  static isDecimal(t) {
    return t?.typeId === y.Decimal;
  }
  /** @nocollapse */
  static isDate(t) {
    return t?.typeId === y.Date;
  }
  /** @nocollapse */
  static isTime(t) {
    return t?.typeId === y.Time;
  }
  /** @nocollapse */
  static isTimestamp(t) {
    return t?.typeId === y.Timestamp;
  }
  /** @nocollapse */
  static isInterval(t) {
    return t?.typeId === y.Interval;
  }
  /** @nocollapse */
  static isDuration(t) {
    return t?.typeId === y.Duration;
  }
  /** @nocollapse */
  static isList(t) {
    return t?.typeId === y.List;
  }
  /** @nocollapse */
  static isStruct(t) {
    return t?.typeId === y.Struct;
  }
  /** @nocollapse */
  static isUnion(t) {
    return t?.typeId === y.Union;
  }
  /** @nocollapse */
  static isFixedSizeBinary(t) {
    return t?.typeId === y.FixedSizeBinary;
  }
  /** @nocollapse */
  static isFixedSizeList(t) {
    return t?.typeId === y.FixedSizeList;
  }
  /** @nocollapse */
  static isMap(t) {
    return t?.typeId === y.Map;
  }
  /** @nocollapse */
  static isDictionary(t) {
    return t?.typeId === y.Dictionary;
  }
  /** @nocollapse */
  static isDenseUnion(t) {
    return M.isUnion(t) && t.mode === se.Dense;
  }
  /** @nocollapse */
  static isSparseUnion(t) {
    return M.isUnion(t) && t.mode === se.Sparse;
  }
  constructor(t) {
    this.typeId = t;
  }
}
uv = Symbol.toStringTag;
M[uv] = ((i) => (i.children = null, i.ArrayType = Array, i.OffsetArrayType = Int32Array, i[Symbol.toStringTag] = "DataType"))(M.prototype);
class on extends M {
  constructor() {
    super(y.Null);
  }
  toString() {
    return "Null";
  }
}
dv = Symbol.toStringTag;
on[dv] = ((i) => i[Symbol.toStringTag] = "Null")(on.prototype);
class Fe extends M {
  constructor(t, e) {
    super(y.Int), this.isSigned = t, this.bitWidth = e;
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
hv = Symbol.toStringTag;
Fe[hv] = ((i) => (i.isSigned = null, i.bitWidth = null, i[Symbol.toStringTag] = "Int"))(Fe.prototype);
class Jh extends Fe {
  constructor() {
    super(!0, 8);
  }
  get ArrayType() {
    return Int8Array;
  }
}
class Qh extends Fe {
  constructor() {
    super(!0, 16);
  }
  get ArrayType() {
    return Int16Array;
  }
}
class _s extends Fe {
  constructor() {
    super(!0, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
let fu = class extends Fe {
  constructor() {
    super(!0, 64);
  }
  get ArrayType() {
    return BigInt64Array;
  }
};
class Zh extends Fe {
  constructor() {
    super(!1, 8);
  }
  get ArrayType() {
    return Uint8Array;
  }
}
class Xh extends Fe {
  constructor() {
    super(!1, 16);
  }
  get ArrayType() {
    return Uint16Array;
  }
}
class tf extends Fe {
  constructor() {
    super(!1, 32);
  }
  get ArrayType() {
    return Uint32Array;
  }
}
let ef = class extends Fe {
  constructor() {
    super(!1, 64);
  }
  get ArrayType() {
    return BigUint64Array;
  }
};
Object.defineProperty(Jh.prototype, "ArrayType", { value: Int8Array });
Object.defineProperty(Qh.prototype, "ArrayType", { value: Int16Array });
Object.defineProperty(_s.prototype, "ArrayType", { value: Int32Array });
Object.defineProperty(fu.prototype, "ArrayType", { value: BigInt64Array });
Object.defineProperty(Zh.prototype, "ArrayType", { value: Uint8Array });
Object.defineProperty(Xh.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(tf.prototype, "ArrayType", { value: Uint32Array });
Object.defineProperty(ef.prototype, "ArrayType", { value: BigUint64Array });
class bs extends M {
  constructor(t) {
    super(y.Float), this.precision = t;
  }
  get ArrayType() {
    switch (this.precision) {
      case ie.HALF:
        return Uint16Array;
      case ie.SINGLE:
        return Float32Array;
      case ie.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
}
fv = Symbol.toStringTag;
bs[fv] = ((i) => (i.precision = null, i[Symbol.toStringTag] = "Float"))(bs.prototype);
class Mv extends bs {
  constructor() {
    super(ie.HALF);
  }
}
class nf extends bs {
  constructor() {
    super(ie.SINGLE);
  }
}
class pu extends bs {
  constructor() {
    super(ie.DOUBLE);
  }
}
Object.defineProperty(Mv.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(nf.prototype, "ArrayType", { value: Float32Array });
Object.defineProperty(pu.prototype, "ArrayType", { value: Float64Array });
class wa extends M {
  constructor() {
    super(y.Binary);
  }
  toString() {
    return "Binary";
  }
}
pv = Symbol.toStringTag;
wa[pv] = ((i) => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Binary"))(wa.prototype);
class Ia extends M {
  constructor() {
    super(y.LargeBinary);
  }
  toString() {
    return "LargeBinary";
  }
}
yv = Symbol.toStringTag;
Ia[yv] = ((i) => (i.ArrayType = Uint8Array, i.OffsetArrayType = BigInt64Array, i[Symbol.toStringTag] = "LargeBinary"))(Ia.prototype);
class uo extends M {
  constructor() {
    super(y.Utf8);
  }
  toString() {
    return "Utf8";
  }
}
gv = Symbol.toStringTag;
uo[gv] = ((i) => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Utf8"))(uo.prototype);
class Sa extends M {
  constructor() {
    super(y.LargeUtf8);
  }
  toString() {
    return "LargeUtf8";
  }
}
mv = Symbol.toStringTag;
Sa[mv] = ((i) => (i.ArrayType = Uint8Array, i.OffsetArrayType = BigInt64Array, i[Symbol.toStringTag] = "LargeUtf8"))(Sa.prototype);
class ho extends M {
  constructor() {
    super(y.Bool);
  }
  toString() {
    return "Bool";
  }
}
_v = Symbol.toStringTag;
ho[_v] = ((i) => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Bool"))(ho.prototype);
class Oa extends M {
  constructor(t, e, n = 128) {
    super(y.Decimal), this.scale = t, this.precision = e, this.bitWidth = n;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
}
bv = Symbol.toStringTag;
Oa[bv] = ((i) => (i.scale = null, i.precision = null, i.ArrayType = Uint32Array, i[Symbol.toStringTag] = "Decimal"))(Oa.prototype);
class tr extends M {
  constructor(t) {
    super(y.Date), this.unit = t;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${_e[this.unit]}>`;
  }
  get ArrayType() {
    return this.unit === _e.DAY ? Int32Array : BigInt64Array;
  }
}
vv = Symbol.toStringTag;
tr[vv] = ((i) => (i.unit = null, i[Symbol.toStringTag] = "Date"))(tr.prototype);
class xN extends tr {
  constructor() {
    super(_e.DAY);
  }
}
class CN extends tr {
  constructor() {
    super(_e.MILLISECOND);
  }
}
class Rn extends M {
  constructor(t, e) {
    super(y.Time), this.unit = t, this.bitWidth = e;
  }
  toString() {
    return `Time${this.bitWidth}<${R[this.unit]}>`;
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
wv = Symbol.toStringTag;
Rn[wv] = ((i) => (i.unit = null, i.bitWidth = null, i[Symbol.toStringTag] = "Time"))(Rn.prototype);
class $N extends Rn {
  constructor() {
    super(R.SECOND, 32);
  }
}
class VN extends Rn {
  constructor() {
    super(R.MILLISECOND, 32);
  }
}
class PN extends Rn {
  constructor() {
    super(R.MICROSECOND, 64);
  }
}
class kN extends Rn {
  constructor() {
    super(R.NANOSECOND, 64);
  }
}
class Ln extends M {
  constructor(t, e) {
    super(y.Timestamp), this.unit = t, this.timezone = e;
  }
  toString() {
    return `Timestamp<${R[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
Iv = Symbol.toStringTag;
Ln[Iv] = ((i) => (i.unit = null, i.timezone = null, i.ArrayType = BigInt64Array, i[Symbol.toStringTag] = "Timestamp"))(Ln.prototype);
class jN extends Ln {
  constructor(t) {
    super(R.SECOND, t);
  }
}
class Rv extends Ln {
  constructor(t) {
    super(R.MILLISECOND, t);
  }
}
class zN extends Ln {
  constructor(t) {
    super(R.MICROSECOND, t);
  }
}
class WN extends Ln {
  constructor(t) {
    super(R.NANOSECOND, t);
  }
}
class vs extends M {
  constructor(t) {
    super(y.Interval), this.unit = t;
  }
  toString() {
    return `Interval<${zt[this.unit]}>`;
  }
}
Sv = Symbol.toStringTag;
vs[Sv] = ((i) => (i.unit = null, i.ArrayType = Int32Array, i[Symbol.toStringTag] = "Interval"))(vs.prototype);
class HN extends vs {
  constructor() {
    super(zt.DAY_TIME);
  }
}
class YN extends vs {
  constructor() {
    super(zt.YEAR_MONTH);
  }
}
class KN extends vs {
  constructor() {
    super(zt.MONTH_DAY_NANO);
  }
}
class Un extends M {
  constructor(t) {
    super(y.Duration), this.unit = t;
  }
  toString() {
    return `Duration<${R[this.unit]}>`;
  }
}
Ov = Symbol.toStringTag;
Un[Ov] = ((i) => (i.unit = null, i.ArrayType = BigInt64Array, i[Symbol.toStringTag] = "Duration"))(Un.prototype);
class GN extends Un {
  constructor() {
    super(R.SECOND);
  }
}
class qN extends Un {
  constructor() {
    super(R.MILLISECOND);
  }
}
class JN extends Un {
  constructor() {
    super(R.MICROSECOND);
  }
}
class QN extends Un {
  constructor() {
    super(R.NANOSECOND);
  }
}
class er extends M {
  constructor(t) {
    super(y.List), this.children = [t];
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
Dv = Symbol.toStringTag;
er[Dv] = ((i) => (i.children = null, i[Symbol.toStringTag] = "List"))(er.prototype);
class ye extends M {
  constructor(t) {
    super(y.Struct), this.children = t;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
Bv = Symbol.toStringTag;
ye[Bv] = ((i) => (i.children = null, i[Symbol.toStringTag] = "Struct"))(ye.prototype);
class ws extends M {
  constructor(t, e, n) {
    super(y.Union), this.mode = t, this.children = n, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce((s, r, o) => (s[r] = o) && s || s, /* @__PURE__ */ Object.create(null));
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
}
Nv = Symbol.toStringTag;
ws[Nv] = ((i) => (i.mode = null, i.typeIds = null, i.children = null, i.typeIdToChildIndex = null, i.ArrayType = Int8Array, i[Symbol.toStringTag] = "Union"))(ws.prototype);
class ZN extends ws {
  constructor(t, e) {
    super(se.Dense, t, e);
  }
}
class XN extends ws {
  constructor(t, e) {
    super(se.Sparse, t, e);
  }
}
class Da extends M {
  constructor(t) {
    super(y.FixedSizeBinary), this.byteWidth = t;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
}
Ev = Symbol.toStringTag;
Da[Ev] = ((i) => (i.byteWidth = null, i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "FixedSizeBinary"))(Da.prototype);
class fo extends M {
  constructor(t, e) {
    super(y.FixedSizeList), this.listSize = t, this.children = [e];
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
Av = Symbol.toStringTag;
fo[Av] = ((i) => (i.children = null, i.listSize = null, i[Symbol.toStringTag] = "FixedSizeList"))(fo.prototype);
class po extends M {
  constructor(t, e = !1) {
    var n, s, r;
    if (super(y.Map), this.children = [t], this.keysSorted = e, t && (t.name = "entries", !((n = t?.type) === null || n === void 0) && n.children)) {
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
Tv = Symbol.toStringTag;
po[Tv] = ((i) => (i.children = null, i.keysSorted = null, i[Symbol.toStringTag] = "Map_"))(po.prototype);
const tE = /* @__PURE__ */ ((i) => () => ++i)(-1);
class xn extends M {
  constructor(t, e, n, s) {
    super(y.Dictionary), this.indices = e, this.dictionary = t, this.isOrdered = s || !1, this.id = n == null ? tE() : Wt(n);
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
Fv = Symbol.toStringTag;
xn[Fv] = ((i) => (i.id = null, i.indices = null, i.isOrdered = null, i.dictionary = null, i[Symbol.toStringTag] = "Dictionary"))(xn.prototype);
function Wi(i) {
  const t = i;
  switch (i.typeId) {
    case y.Decimal:
      return i.bitWidth / 32;
    case y.Interval:
      return t.unit === zt.MONTH_DAY_NANO ? 4 : 1 + t.unit;
    // case Type.Int: return 1 + +((t as Int_).bitWidth > 32);
    // case Type.Time: return 1 + +((t as Time_).bitWidth > 32);
    case y.FixedSizeList:
      return t.listSize;
    case y.FixedSizeBinary:
      return t.byteWidth;
    default:
      return 1;
  }
}
class ut {
  visitMany(t, ...e) {
    return t.map((n, s) => this.visit(n, ...e.map((r) => r[s])));
  }
  visit(...t) {
    return this.getVisitFn(t[0], !1).apply(this, t);
  }
  getVisitFn(t, e = !0) {
    return eE(this, t, e);
  }
  getVisitFnByTypeId(t, e = !0) {
    return Vr(this, t, e);
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
function eE(i, t, e = !0) {
  return typeof t == "number" ? Vr(i, t, e) : typeof t == "string" && t in y ? Vr(i, y[t], e) : t && t instanceof M ? Vr(i, jy(t), e) : t?.type && t.type instanceof M ? Vr(i, jy(t.type), e) : Vr(i, y.NONE, e);
}
function Vr(i, t, e = !0) {
  let n = null;
  switch (t) {
    case y.Null:
      n = i.visitNull;
      break;
    case y.Bool:
      n = i.visitBool;
      break;
    case y.Int:
      n = i.visitInt;
      break;
    case y.Int8:
      n = i.visitInt8 || i.visitInt;
      break;
    case y.Int16:
      n = i.visitInt16 || i.visitInt;
      break;
    case y.Int32:
      n = i.visitInt32 || i.visitInt;
      break;
    case y.Int64:
      n = i.visitInt64 || i.visitInt;
      break;
    case y.Uint8:
      n = i.visitUint8 || i.visitInt;
      break;
    case y.Uint16:
      n = i.visitUint16 || i.visitInt;
      break;
    case y.Uint32:
      n = i.visitUint32 || i.visitInt;
      break;
    case y.Uint64:
      n = i.visitUint64 || i.visitInt;
      break;
    case y.Float:
      n = i.visitFloat;
      break;
    case y.Float16:
      n = i.visitFloat16 || i.visitFloat;
      break;
    case y.Float32:
      n = i.visitFloat32 || i.visitFloat;
      break;
    case y.Float64:
      n = i.visitFloat64 || i.visitFloat;
      break;
    case y.Utf8:
      n = i.visitUtf8;
      break;
    case y.LargeUtf8:
      n = i.visitLargeUtf8;
      break;
    case y.Binary:
      n = i.visitBinary;
      break;
    case y.LargeBinary:
      n = i.visitLargeBinary;
      break;
    case y.FixedSizeBinary:
      n = i.visitFixedSizeBinary;
      break;
    case y.Date:
      n = i.visitDate;
      break;
    case y.DateDay:
      n = i.visitDateDay || i.visitDate;
      break;
    case y.DateMillisecond:
      n = i.visitDateMillisecond || i.visitDate;
      break;
    case y.Timestamp:
      n = i.visitTimestamp;
      break;
    case y.TimestampSecond:
      n = i.visitTimestampSecond || i.visitTimestamp;
      break;
    case y.TimestampMillisecond:
      n = i.visitTimestampMillisecond || i.visitTimestamp;
      break;
    case y.TimestampMicrosecond:
      n = i.visitTimestampMicrosecond || i.visitTimestamp;
      break;
    case y.TimestampNanosecond:
      n = i.visitTimestampNanosecond || i.visitTimestamp;
      break;
    case y.Time:
      n = i.visitTime;
      break;
    case y.TimeSecond:
      n = i.visitTimeSecond || i.visitTime;
      break;
    case y.TimeMillisecond:
      n = i.visitTimeMillisecond || i.visitTime;
      break;
    case y.TimeMicrosecond:
      n = i.visitTimeMicrosecond || i.visitTime;
      break;
    case y.TimeNanosecond:
      n = i.visitTimeNanosecond || i.visitTime;
      break;
    case y.Decimal:
      n = i.visitDecimal;
      break;
    case y.List:
      n = i.visitList;
      break;
    case y.Struct:
      n = i.visitStruct;
      break;
    case y.Union:
      n = i.visitUnion;
      break;
    case y.DenseUnion:
      n = i.visitDenseUnion || i.visitUnion;
      break;
    case y.SparseUnion:
      n = i.visitSparseUnion || i.visitUnion;
      break;
    case y.Dictionary:
      n = i.visitDictionary;
      break;
    case y.Interval:
      n = i.visitInterval;
      break;
    case y.IntervalDayTime:
      n = i.visitIntervalDayTime || i.visitInterval;
      break;
    case y.IntervalYearMonth:
      n = i.visitIntervalYearMonth || i.visitInterval;
      break;
    case y.IntervalMonthDayNano:
      n = i.visitIntervalMonthDayNano || i.visitInterval;
      break;
    case y.Duration:
      n = i.visitDuration;
      break;
    case y.DurationSecond:
      n = i.visitDurationSecond || i.visitDuration;
      break;
    case y.DurationMillisecond:
      n = i.visitDurationMillisecond || i.visitDuration;
      break;
    case y.DurationMicrosecond:
      n = i.visitDurationMicrosecond || i.visitDuration;
      break;
    case y.DurationNanosecond:
      n = i.visitDurationNanosecond || i.visitDuration;
      break;
    case y.FixedSizeList:
      n = i.visitFixedSizeList;
      break;
    case y.Map:
      n = i.visitMap;
      break;
  }
  if (typeof n == "function")
    return n;
  if (!e)
    return () => null;
  throw new Error(`Unrecognized type '${y[t]}'`);
}
function jy(i) {
  switch (i.typeId) {
    case y.Null:
      return y.Null;
    case y.Int: {
      const { bitWidth: t, isSigned: e } = i;
      switch (t) {
        case 8:
          return e ? y.Int8 : y.Uint8;
        case 16:
          return e ? y.Int16 : y.Uint16;
        case 32:
          return e ? y.Int32 : y.Uint32;
        case 64:
          return e ? y.Int64 : y.Uint64;
      }
      return y.Int;
    }
    case y.Float:
      switch (i.precision) {
        case ie.HALF:
          return y.Float16;
        case ie.SINGLE:
          return y.Float32;
        case ie.DOUBLE:
          return y.Float64;
      }
      return y.Float;
    case y.Binary:
      return y.Binary;
    case y.LargeBinary:
      return y.LargeBinary;
    case y.Utf8:
      return y.Utf8;
    case y.LargeUtf8:
      return y.LargeUtf8;
    case y.Bool:
      return y.Bool;
    case y.Decimal:
      return y.Decimal;
    case y.Time:
      switch (i.unit) {
        case R.SECOND:
          return y.TimeSecond;
        case R.MILLISECOND:
          return y.TimeMillisecond;
        case R.MICROSECOND:
          return y.TimeMicrosecond;
        case R.NANOSECOND:
          return y.TimeNanosecond;
      }
      return y.Time;
    case y.Timestamp:
      switch (i.unit) {
        case R.SECOND:
          return y.TimestampSecond;
        case R.MILLISECOND:
          return y.TimestampMillisecond;
        case R.MICROSECOND:
          return y.TimestampMicrosecond;
        case R.NANOSECOND:
          return y.TimestampNanosecond;
      }
      return y.Timestamp;
    case y.Date:
      switch (i.unit) {
        case _e.DAY:
          return y.DateDay;
        case _e.MILLISECOND:
          return y.DateMillisecond;
      }
      return y.Date;
    case y.Interval:
      switch (i.unit) {
        case zt.DAY_TIME:
          return y.IntervalDayTime;
        case zt.YEAR_MONTH:
          return y.IntervalYearMonth;
        case zt.MONTH_DAY_NANO:
          return y.IntervalMonthDayNano;
      }
      return y.Interval;
    case y.Duration:
      switch (i.unit) {
        case R.SECOND:
          return y.DurationSecond;
        case R.MILLISECOND:
          return y.DurationMillisecond;
        case R.MICROSECOND:
          return y.DurationMicrosecond;
        case R.NANOSECOND:
          return y.DurationNanosecond;
      }
      return y.Duration;
    case y.Map:
      return y.Map;
    case y.List:
      return y.List;
    case y.Struct:
      return y.Struct;
    case y.Union:
      switch (i.mode) {
        case se.Dense:
          return y.DenseUnion;
        case se.Sparse:
          return y.SparseUnion;
      }
      return y.Union;
    case y.FixedSizeBinary:
      return y.FixedSizeBinary;
    case y.FixedSizeList:
      return y.FixedSizeList;
    case y.Dictionary:
      return y.Dictionary;
  }
  throw new Error(`Unrecognized type '${y[i.typeId]}'`);
}
ut.prototype.visitInt8 = null;
ut.prototype.visitInt16 = null;
ut.prototype.visitInt32 = null;
ut.prototype.visitInt64 = null;
ut.prototype.visitUint8 = null;
ut.prototype.visitUint16 = null;
ut.prototype.visitUint32 = null;
ut.prototype.visitUint64 = null;
ut.prototype.visitFloat16 = null;
ut.prototype.visitFloat32 = null;
ut.prototype.visitFloat64 = null;
ut.prototype.visitDateDay = null;
ut.prototype.visitDateMillisecond = null;
ut.prototype.visitTimestampSecond = null;
ut.prototype.visitTimestampMillisecond = null;
ut.prototype.visitTimestampMicrosecond = null;
ut.prototype.visitTimestampNanosecond = null;
ut.prototype.visitTimeSecond = null;
ut.prototype.visitTimeMillisecond = null;
ut.prototype.visitTimeMicrosecond = null;
ut.prototype.visitTimeNanosecond = null;
ut.prototype.visitDenseUnion = null;
ut.prototype.visitSparseUnion = null;
ut.prototype.visitIntervalDayTime = null;
ut.prototype.visitIntervalYearMonth = null;
ut.prototype.visitIntervalMonthDayNano = null;
ut.prototype.visitDuration = null;
ut.prototype.visitDurationSecond = null;
ut.prototype.visitDurationMillisecond = null;
ut.prototype.visitDurationMicrosecond = null;
ut.prototype.visitDurationNanosecond = null;
const Lv = new Float64Array(1), yr = new Uint32Array(Lv.buffer);
function sf(i) {
  const t = (i & 31744) >> 10, e = (i & 1023) / 1024, n = Math.pow(-1, (i & 32768) >> 15);
  switch (t) {
    case 31:
      return n * (e ? Number.NaN : 1 / 0);
    case 0:
      return n * (e ? 6103515625e-14 * e : 0);
  }
  return n * Math.pow(2, t - 15) * (1 + e);
}
function rf(i) {
  if (i !== i)
    return 32256;
  Lv[0] = i;
  const t = (yr[1] & 2147483648) >> 16 & 65535;
  let e = yr[1] & 2146435072, n = 0;
  return e >= 1089470464 ? yr[0] > 0 ? e = 31744 : (e = (e & 2080374784) >> 16, n = (yr[1] & 1048575) >> 10) : e <= 1056964608 ? (n = 1048576 + (yr[1] & 1048575), n = 1048576 + (n << (e >> 20) - 998) >> 21, e = 0) : (e = e - 1056964608 >> 10, n = (yr[1] & 1048575) + 512 >> 10), t | e | n & 65535;
}
const iE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  float64ToUint16: rf,
  uint16ToFloat64: sf
}, Symbol.toStringTag, { value: "Module" }));
class G extends ut {
}
function nt(i) {
  return (t, e, n) => {
    if (t.setValid(e, n != null))
      return i(t, e, n);
  };
}
const nE = (i, t, e) => {
  i[t] = Math.floor(e / 864e5);
}, Uv = (i, t, e, n) => {
  if (e + 1 < t.length) {
    const s = Wt(t[e]), r = Wt(t[e + 1]);
    i.set(n.subarray(0, r - s), s);
  }
}, sE = ({ offset: i, values: t }, e, n) => {
  const s = i + e;
  n ? t[s >> 3] |= 1 << s % 8 : t[s >> 3] &= ~(1 << s % 8);
}, jn = ({ values: i }, t, e) => {
  i[t] = e;
}, of = ({ values: i }, t, e) => {
  i[t] = e;
}, xv = ({ values: i }, t, e) => {
  i[t] = rf(e);
}, rE = (i, t, e) => {
  switch (i.type.precision) {
    case ie.HALF:
      return xv(i, t, e);
    case ie.SINGLE:
    case ie.DOUBLE:
      return of(i, t, e);
  }
}, af = ({ values: i }, t, e) => {
  nE(i, t, e.valueOf());
}, cf = ({ values: i }, t, e) => {
  i[t] = BigInt(e);
}, Cv = ({ stride: i, values: t }, e, n) => {
  t.set(n.subarray(0, i), i * e);
}, $v = ({ values: i, valueOffsets: t }, e, n) => Uv(i, t, e, n), Vv = ({ values: i, valueOffsets: t }, e, n) => Uv(i, t, e, za(n)), Pv = (i, t, e) => {
  i.type.unit === _e.DAY ? af(i, t, e) : cf(i, t, e);
}, lf = ({ values: i }, t, e) => {
  i[t] = BigInt(e / 1e3);
}, uf = ({ values: i }, t, e) => {
  i[t] = BigInt(e);
}, df = ({ values: i }, t, e) => {
  i[t] = BigInt(e * 1e3);
}, hf = ({ values: i }, t, e) => {
  i[t] = BigInt(e * 1e6);
}, kv = (i, t, e) => {
  switch (i.type.unit) {
    case R.SECOND:
      return lf(i, t, e);
    case R.MILLISECOND:
      return uf(i, t, e);
    case R.MICROSECOND:
      return df(i, t, e);
    case R.NANOSECOND:
      return hf(i, t, e);
  }
}, ff = ({ values: i }, t, e) => {
  i[t] = e;
}, pf = ({ values: i }, t, e) => {
  i[t] = e;
}, yf = ({ values: i }, t, e) => {
  i[t] = e;
}, gf = ({ values: i }, t, e) => {
  i[t] = e;
}, jv = (i, t, e) => {
  switch (i.type.unit) {
    case R.SECOND:
      return ff(i, t, e);
    case R.MILLISECOND:
      return pf(i, t, e);
    case R.MICROSECOND:
      return yf(i, t, e);
    case R.NANOSECOND:
      return gf(i, t, e);
  }
}, zv = ({ values: i, stride: t }, e, n) => {
  i.set(n.subarray(0, t), t * e);
}, oE = (i, t, e) => {
  const n = i.children[0], s = i.valueOffsets, r = fi.getVisitFn(n);
  if (Array.isArray(e))
    for (let o = -1, a = s[t], c = s[t + 1]; a < c; )
      r(n, a++, e[++o]);
  else
    for (let o = -1, a = s[t], c = s[t + 1]; a < c; )
      r(n, a++, e.get(++o));
}, aE = (i, t, e) => {
  const n = i.children[0], { valueOffsets: s } = i, r = fi.getVisitFn(n);
  let { [t]: o, [t + 1]: a } = s;
  const c = e instanceof Map ? e.entries() : Object.entries(e);
  for (const l of c)
    if (r(n, o, l), ++o >= a)
      break;
}, cE = (i, t) => (e, n, s, r) => n && e(n, i, t[r]), lE = (i, t) => (e, n, s, r) => n && e(n, i, t.get(r)), uE = (i, t) => (e, n, s, r) => n && e(n, i, t.get(s.name)), dE = (i, t) => (e, n, s, r) => n && e(n, i, t[s.name]), hE = (i, t, e) => {
  const n = i.type.children.map((r) => fi.getVisitFn(r.type)), s = e instanceof Map ? uE(t, e) : e instanceof x ? lE(t, e) : Array.isArray(e) ? cE(t, e) : dE(t, e);
  i.type.children.forEach((r, o) => s(n[o], i.children[o], r, o));
}, fE = (i, t, e) => {
  i.type.mode === se.Dense ? Wv(i, t, e) : Hv(i, t, e);
}, Wv = (i, t, e) => {
  const n = i.type.typeIdToChildIndex[i.typeIds[t]], s = i.children[n];
  fi.visit(s, i.valueOffsets[t], e);
}, Hv = (i, t, e) => {
  const n = i.type.typeIdToChildIndex[i.typeIds[t]], s = i.children[n];
  fi.visit(s, t, e);
}, pE = (i, t, e) => {
  var n;
  (n = i.dictionary) === null || n === void 0 || n.set(i.values[t], e);
}, Yv = (i, t, e) => {
  switch (i.type.unit) {
    case zt.YEAR_MONTH:
      return _f(i, t, e);
    case zt.DAY_TIME:
      return mf(i, t, e);
    case zt.MONTH_DAY_NANO:
      return bf(i, t, e);
  }
}, mf = ({ values: i }, t, e) => {
  i.set(e.subarray(0, 2), 2 * t);
}, _f = ({ values: i }, t, e) => {
  i[t] = e[0] * 12 + e[1] % 12;
}, bf = ({ values: i, stride: t }, e, n) => {
  i.set(n.subarray(0, t), t * e);
}, vf = ({ values: i }, t, e) => {
  i[t] = e;
}, wf = ({ values: i }, t, e) => {
  i[t] = e;
}, If = ({ values: i }, t, e) => {
  i[t] = e;
}, Sf = ({ values: i }, t, e) => {
  i[t] = e;
}, Kv = (i, t, e) => {
  switch (i.type.unit) {
    case R.SECOND:
      return vf(i, t, e);
    case R.MILLISECOND:
      return wf(i, t, e);
    case R.MICROSECOND:
      return If(i, t, e);
    case R.NANOSECOND:
      return Sf(i, t, e);
  }
}, yE = (i, t, e) => {
  const { stride: n } = i, s = i.children[0], r = fi.getVisitFn(s);
  if (Array.isArray(e))
    for (let o = -1, a = t * n; ++o < n; )
      r(s, a + o, e[o]);
  else
    for (let o = -1, a = t * n; ++o < n; )
      r(s, a + o, e.get(o));
};
G.prototype.visitBool = nt(sE);
G.prototype.visitInt = nt(jn);
G.prototype.visitInt8 = nt(jn);
G.prototype.visitInt16 = nt(jn);
G.prototype.visitInt32 = nt(jn);
G.prototype.visitInt64 = nt(jn);
G.prototype.visitUint8 = nt(jn);
G.prototype.visitUint16 = nt(jn);
G.prototype.visitUint32 = nt(jn);
G.prototype.visitUint64 = nt(jn);
G.prototype.visitFloat = nt(rE);
G.prototype.visitFloat16 = nt(xv);
G.prototype.visitFloat32 = nt(of);
G.prototype.visitFloat64 = nt(of);
G.prototype.visitUtf8 = nt(Vv);
G.prototype.visitLargeUtf8 = nt(Vv);
G.prototype.visitBinary = nt($v);
G.prototype.visitLargeBinary = nt($v);
G.prototype.visitFixedSizeBinary = nt(Cv);
G.prototype.visitDate = nt(Pv);
G.prototype.visitDateDay = nt(af);
G.prototype.visitDateMillisecond = nt(cf);
G.prototype.visitTimestamp = nt(kv);
G.prototype.visitTimestampSecond = nt(lf);
G.prototype.visitTimestampMillisecond = nt(uf);
G.prototype.visitTimestampMicrosecond = nt(df);
G.prototype.visitTimestampNanosecond = nt(hf);
G.prototype.visitTime = nt(jv);
G.prototype.visitTimeSecond = nt(ff);
G.prototype.visitTimeMillisecond = nt(pf);
G.prototype.visitTimeMicrosecond = nt(yf);
G.prototype.visitTimeNanosecond = nt(gf);
G.prototype.visitDecimal = nt(zv);
G.prototype.visitList = nt(oE);
G.prototype.visitStruct = nt(hE);
G.prototype.visitUnion = nt(fE);
G.prototype.visitDenseUnion = nt(Wv);
G.prototype.visitSparseUnion = nt(Hv);
G.prototype.visitDictionary = nt(pE);
G.prototype.visitInterval = nt(Yv);
G.prototype.visitIntervalDayTime = nt(mf);
G.prototype.visitIntervalYearMonth = nt(_f);
G.prototype.visitIntervalMonthDayNano = nt(bf);
G.prototype.visitDuration = nt(Kv);
G.prototype.visitDurationSecond = nt(vf);
G.prototype.visitDurationMillisecond = nt(wf);
G.prototype.visitDurationMicrosecond = nt(If);
G.prototype.visitDurationNanosecond = nt(Sf);
G.prototype.visitFixedSizeList = nt(yE);
G.prototype.visitMap = nt(aE);
const fi = new G(), bi = Symbol.for("parent"), Xr = Symbol.for("rowIndex");
class yu {
  constructor(t, e) {
    return this[bi] = t, this[Xr] = e, new Proxy(this, _E);
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Xr], e = this[bi], n = e.type.children, s = {};
    for (let r = -1, o = n.length; ++r < o; )
      s[n[r].name] = He.visit(e.children[r], t);
    return s;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${ms(t)}: ${ms(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new gE(this[bi], this[Xr]);
  }
}
class gE {
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
        He.visit(this.children[t], this.rowIndex)
      ]
    }) : { done: !0, value: null };
  }
}
Object.defineProperties(yu.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [bi]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [Xr]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
});
class mE {
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
    return t[bi].type.children.map((e) => e.name);
  }
  has(t, e) {
    return t[bi].type.children.some((n) => n.name === e);
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[bi].type.children.some((n) => n.name === e))
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const n = t[bi].type.children.findIndex((s) => s.name === e);
    if (n !== -1) {
      const s = He.visit(t[bi].children[n], t[Xr]);
      return Reflect.set(t, e, s), s;
    }
  }
  set(t, e, n) {
    const s = t[bi].type.children.findIndex((r) => r.name === e);
    return s !== -1 ? (fi.visit(t[bi].children[s], t[Xr], n), Reflect.set(t, e, n)) : Reflect.has(t, e) || typeof e == "symbol" ? Reflect.set(t, e, n) : !1;
  }
}
const _E = new mE();
class $ extends ut {
}
function q(i) {
  return (t, e) => t.getValid(e) ? i(t, e) : null;
}
const bE = (i, t) => 864e5 * i[t], vE = (i, t) => null, Gv = (i, t, e) => {
  if (e + 1 >= t.length)
    return null;
  const n = Wt(t[e]), s = Wt(t[e + 1]);
  return i.subarray(n, s);
}, wE = ({ offset: i, values: t }, e) => {
  const n = i + e;
  return (t[n >> 3] & 1 << n % 8) !== 0;
}, qv = ({ values: i }, t) => bE(i, t), Jv = ({ values: i }, t) => Wt(i[t]), Bs = ({ stride: i, values: t }, e) => t[i * e], IE = ({ stride: i, values: t }, e) => sf(t[i * e]), Qv = ({ values: i }, t) => i[t], SE = ({ stride: i, values: t }, e) => t.subarray(i * e, i * (e + 1)), Zv = ({ values: i, valueOffsets: t }, e) => Gv(i, t, e), Xv = ({ values: i, valueOffsets: t }, e) => {
  const n = Gv(i, t, e);
  return n !== null ? kd(n) : null;
}, OE = ({ values: i }, t) => i[t], DE = ({ type: i, values: t }, e) => i.precision !== ie.HALF ? t[e] : sf(t[e]), BE = (i, t) => i.type.unit === _e.DAY ? qv(i, t) : Jv(i, t), t0 = ({ values: i }, t) => 1e3 * Wt(i[t]), e0 = ({ values: i }, t) => Wt(i[t]), i0 = ({ values: i }, t) => av(i[t], BigInt(1e3)), n0 = ({ values: i }, t) => av(i[t], BigInt(1e6)), NE = (i, t) => {
  switch (i.type.unit) {
    case R.SECOND:
      return t0(i, t);
    case R.MILLISECOND:
      return e0(i, t);
    case R.MICROSECOND:
      return i0(i, t);
    case R.NANOSECOND:
      return n0(i, t);
  }
}, s0 = ({ values: i }, t) => i[t], r0 = ({ values: i }, t) => i[t], o0 = ({ values: i }, t) => i[t], a0 = ({ values: i }, t) => i[t], EE = (i, t) => {
  switch (i.type.unit) {
    case R.SECOND:
      return s0(i, t);
    case R.MILLISECOND:
      return r0(i, t);
    case R.MICROSECOND:
      return o0(i, t);
    case R.NANOSECOND:
      return a0(i, t);
  }
}, AE = ({ values: i, stride: t }, e) => Wa.decimal(i.subarray(t * e, t * (e + 1))), TE = (i, t) => {
  const { valueOffsets: e, stride: n, children: s } = i, { [t * n]: r, [t * n + 1]: o } = e, c = s[0].slice(r, o - r);
  return new x([c]);
}, FE = (i, t) => {
  const { valueOffsets: e, children: n } = i, { [t]: s, [t + 1]: r } = e, o = n[0];
  return new Ha(o.slice(s, r - s));
}, ME = (i, t) => new yu(i, t), RE = (i, t) => i.type.mode === se.Dense ? c0(i, t) : l0(i, t), c0 = (i, t) => {
  const e = i.type.typeIdToChildIndex[i.typeIds[t]], n = i.children[e];
  return He.visit(n, i.valueOffsets[t]);
}, l0 = (i, t) => {
  const e = i.type.typeIdToChildIndex[i.typeIds[t]], n = i.children[e];
  return He.visit(n, t);
}, LE = (i, t) => {
  var e;
  return (e = i.dictionary) === null || e === void 0 ? void 0 : e.get(i.values[t]);
}, UE = (i, t) => i.type.unit === zt.MONTH_DAY_NANO ? h0(i, t) : i.type.unit === zt.DAY_TIME ? u0(i, t) : d0(i, t), u0 = ({ values: i }, t) => i.subarray(2 * t, 2 * (t + 1)), d0 = ({ values: i }, t) => {
  const e = i[t], n = new Int32Array(2);
  return n[0] = Math.trunc(e / 12), n[1] = Math.trunc(e % 12), n;
}, h0 = ({ values: i }, t) => i.subarray(4 * t, 4 * (t + 1)), f0 = ({ values: i }, t) => i[t], p0 = ({ values: i }, t) => i[t], y0 = ({ values: i }, t) => i[t], g0 = ({ values: i }, t) => i[t], xE = (i, t) => {
  switch (i.type.unit) {
    case R.SECOND:
      return f0(i, t);
    case R.MILLISECOND:
      return p0(i, t);
    case R.MICROSECOND:
      return y0(i, t);
    case R.NANOSECOND:
      return g0(i, t);
  }
}, CE = (i, t) => {
  const { stride: e, children: n } = i, r = n[0].slice(t * e, e);
  return new x([r]);
};
$.prototype.visitNull = q(vE);
$.prototype.visitBool = q(wE);
$.prototype.visitInt = q(OE);
$.prototype.visitInt8 = q(Bs);
$.prototype.visitInt16 = q(Bs);
$.prototype.visitInt32 = q(Bs);
$.prototype.visitInt64 = q(Qv);
$.prototype.visitUint8 = q(Bs);
$.prototype.visitUint16 = q(Bs);
$.prototype.visitUint32 = q(Bs);
$.prototype.visitUint64 = q(Qv);
$.prototype.visitFloat = q(DE);
$.prototype.visitFloat16 = q(IE);
$.prototype.visitFloat32 = q(Bs);
$.prototype.visitFloat64 = q(Bs);
$.prototype.visitUtf8 = q(Xv);
$.prototype.visitLargeUtf8 = q(Xv);
$.prototype.visitBinary = q(Zv);
$.prototype.visitLargeBinary = q(Zv);
$.prototype.visitFixedSizeBinary = q(SE);
$.prototype.visitDate = q(BE);
$.prototype.visitDateDay = q(qv);
$.prototype.visitDateMillisecond = q(Jv);
$.prototype.visitTimestamp = q(NE);
$.prototype.visitTimestampSecond = q(t0);
$.prototype.visitTimestampMillisecond = q(e0);
$.prototype.visitTimestampMicrosecond = q(i0);
$.prototype.visitTimestampNanosecond = q(n0);
$.prototype.visitTime = q(EE);
$.prototype.visitTimeSecond = q(s0);
$.prototype.visitTimeMillisecond = q(r0);
$.prototype.visitTimeMicrosecond = q(o0);
$.prototype.visitTimeNanosecond = q(a0);
$.prototype.visitDecimal = q(AE);
$.prototype.visitList = q(TE);
$.prototype.visitStruct = q(ME);
$.prototype.visitUnion = q(RE);
$.prototype.visitDenseUnion = q(c0);
$.prototype.visitSparseUnion = q(l0);
$.prototype.visitDictionary = q(LE);
$.prototype.visitInterval = q(UE);
$.prototype.visitIntervalDayTime = q(u0);
$.prototype.visitIntervalYearMonth = q(d0);
$.prototype.visitIntervalMonthDayNano = q(h0);
$.prototype.visitDuration = q(xE);
$.prototype.visitDurationSecond = q(f0);
$.prototype.visitDurationMillisecond = q(p0);
$.prototype.visitDurationMicrosecond = q(y0);
$.prototype.visitDurationNanosecond = q(g0);
$.prototype.visitFixedSizeList = q(CE);
$.prototype.visitMap = q(FE);
const He = new $(), zs = Symbol.for("keys"), to = Symbol.for("vals"), Pr = Symbol.for("kKeysAsStrings"), Gd = Symbol.for("_kKeysAsStrings");
class Ha {
  constructor(t) {
    return this[zs] = new x([t.children[0]]).memoize(), this[to] = t.children[1], new Proxy(this, new VE());
  }
  /** @ignore */
  get [Pr]() {
    return this[Gd] || (this[Gd] = Array.from(this[zs].toArray(), String));
  }
  [Symbol.iterator]() {
    return new $E(this[zs], this[to]);
  }
  get size() {
    return this[zs].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[zs], e = this[to], n = {};
    for (let s = -1, r = t.length; ++s < r; )
      n[t.get(s)] = He.visit(e, s);
    return n;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${ms(t)}: ${ms(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
class $E {
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
        He.visit(this.vals, t)
      ]
    });
  }
}
class VE {
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
    return t[Pr];
  }
  has(t, e) {
    return t[Pr].includes(e);
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[Pr].indexOf(e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const n = t[Pr].indexOf(e);
    if (n !== -1) {
      const s = He.visit(Reflect.get(t, to), n);
      return Reflect.set(t, e, s), s;
    }
  }
  set(t, e, n) {
    const s = t[Pr].indexOf(e);
    return s !== -1 ? (fi.visit(Reflect.get(t, to), s, n), Reflect.set(t, e, n)) : Reflect.has(t, e) ? Reflect.set(t, e, n) : !1;
  }
}
Object.defineProperties(Ha.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [zs]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [to]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [Gd]: { writable: !0, enumerable: !1, configurable: !1, value: null }
});
let zy;
function Of(i, t, e, n) {
  const { length: s = 0 } = i;
  let r = typeof t != "number" ? 0 : t, o = typeof e != "number" ? s : e;
  return r < 0 && (r = (r % s + s) % s), o < 0 && (o = (o % s + s) % s), o < r && (zy = r, r = o, o = zy), o > s && (o = s), n ? n(i, r, o) : [r, o];
}
const gu = (i, t) => i < 0 ? t + i : i, Wy = (i) => i !== i;
function rr(i) {
  if (typeof i !== "object" || i === null)
    return Wy(i) ? Wy : (e) => e === i;
  if (i instanceof Date) {
    const e = i.valueOf();
    return (n) => n instanceof Date ? n.valueOf() === e : !1;
  }
  return ArrayBuffer.isView(i) ? (e) => e ? ev(i, e) : !1 : i instanceof Map ? kE(i) : Array.isArray(i) ? PE(i) : i instanceof x ? jE(i) : zE(i, !0);
}
function PE(i) {
  const t = [];
  for (let e = -1, n = i.length; ++e < n; )
    t[e] = rr(i[e]);
  return mu(t);
}
function kE(i) {
  let t = -1;
  const e = [];
  for (const n of i.values())
    e[++t] = rr(n);
  return mu(e);
}
function jE(i) {
  const t = [];
  for (let e = -1, n = i.length; ++e < n; )
    t[e] = rr(i.get(e));
  return mu(t);
}
function zE(i, t = !1) {
  const e = Object.keys(i);
  if (!t && e.length === 0)
    return () => !1;
  const n = [];
  for (let s = -1, r = e.length; ++s < r; )
    n[s] = rr(i[e[s]]);
  return mu(n, e);
}
function mu(i, t) {
  return (e) => {
    if (!e || typeof e != "object")
      return !1;
    switch (e.constructor) {
      case Array:
        return WE(i, e);
      case Map:
        return Hy(i, e, e.keys());
      case Ha:
      case yu:
      case Object:
      case void 0:
        return Hy(i, e, t || Object.keys(e));
    }
    return e instanceof x ? HE(i, e) : !1;
  };
}
function WE(i, t) {
  const e = i.length;
  if (t.length !== e)
    return !1;
  for (let n = -1; ++n < e; )
    if (!i[n](t[n]))
      return !1;
  return !0;
}
function HE(i, t) {
  const e = i.length;
  if (t.length !== e)
    return !1;
  for (let n = -1; ++n < e; )
    if (!i[n](t.get(n)))
      return !1;
  return !0;
}
function Hy(i, t, e) {
  const n = e[Symbol.iterator](), s = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), r = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const a = i.length;
  let c = r.next(), l = n.next(), u = s.next();
  for (; o < a && !l.done && !u.done && !c.done && !(l.value !== u.value || !i[o](c.value)); ++o, l = n.next(), u = s.next(), c = r.next())
    ;
  return o === a && l.done && u.done && c.done ? !0 : (n.return && n.return(), s.return && s.return(), r.return && r.return(), !1);
}
const YE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clampRange: Of,
  createElementComparator: rr,
  wrapIndex: gu
}, Symbol.toStringTag, { value: "Module" }));
function _u(i, t, e, n) {
  return (e & 1 << n) !== 0;
}
function Df(i, t, e, n) {
  return (e & 1 << n) >> n;
}
function KE(i, t, e) {
  return e ? !!(i[t >> 3] |= 1 << t % 8) || !0 : !(i[t >> 3] &= ~(1 << t % 8)) && !1;
}
function Ba(i, t, e) {
  const n = e.byteLength + 7 & -8;
  if (i > 0 || e.byteLength < n) {
    const s = new Uint8Array(n);
    return s.set(i % 8 === 0 ? e.subarray(i >> 3) : (
      // Otherwise iterate each bit from the offset and return a new one
      Na(new yo(e, i, t, null, _u)).subarray(0, n)
    )), s;
  }
  return e;
}
function Na(i) {
  const t = [];
  let e = 0, n = 0, s = 0;
  for (const o of i)
    o && (s |= 1 << n), ++n === 8 && (t[e++] = s, s = n = 0);
  (e === 0 || n > 0) && (t[e++] = s);
  const r = new Uint8Array(t.length + 7 & -8);
  return r.set(t), r;
}
class yo {
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
function kl(i, t, e) {
  if (e - t <= 0)
    return 0;
  if (e - t < 8) {
    let r = 0;
    for (const o of new yo(i, t, e - t, i, Df))
      r += o;
    return r;
  }
  const n = e >> 3 << 3, s = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return (
    // Get the popcnt of bits between the left hand side, and the next highest multiple of 8
    kl(i, t, s) + // Get the popcnt of bits between the right hand side, and the next lowest multiple of 8
    kl(i, n, e) + // Get the popcnt of all bits between the left and right hand sides' multiples of 8
    m0(i, s >> 3, n - s >> 3)
  );
}
function m0(i, t, e) {
  let n = 0, s = Math.trunc(t);
  const r = new DataView(i.buffer, i.byteOffset, i.byteLength), o = e === void 0 ? i.byteLength : s + e;
  for (; o - s >= 4; )
    n += zc(r.getUint32(s)), s += 4;
  for (; o - s >= 2; )
    n += zc(r.getUint16(s)), s += 2;
  for (; o - s >= 1; )
    n += zc(r.getUint8(s)), s += 1;
  return n;
}
function zc(i) {
  let t = Math.trunc(i);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
const GE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BitIterator: yo,
  getBit: Df,
  getBool: _u,
  packBools: Na,
  popcnt_array: m0,
  popcnt_bit_range: kl,
  popcnt_uint32: zc,
  setBool: KE,
  truncateBitmap: Ba
}, Symbol.toStringTag, { value: "Module" })), qE = -1;
class Ot {
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
      return M.isSparseUnion(t) ? this.children.some((e) => e.nullable) : M.isDenseUnion(t) ? this.children.some((e) => e.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
    }
    return !0;
  }
  get byteLength() {
    let t = 0;
    const { valueOffsets: e, values: n, nullBitmap: s, typeIds: r } = this;
    return e && (t += e.byteLength), n && (t += n.byteLength), s && (t += s.byteLength), r && (t += r.byteLength), this.children.reduce((o, a) => o + a.byteLength, t);
  }
  get nullCount() {
    if (M.isUnion(this.type))
      return this.children.reduce((n, s) => n + s.nullCount, 0);
    let t = this._nullCount, e;
    return t <= qE && (e = this.nullBitmap) && (this._nullCount = t = e.length === 0 ? (
      // no null bitmap, so all values are valid
      0
    ) : this.length - kl(e, this.offset, this.offset + this.length)), t;
  }
  constructor(t, e, n, s, r, o = [], a) {
    this.type = t, this.children = o, this.dictionary = a, this.offset = Math.floor(Math.max(e || 0, 0)), this.length = Math.floor(Math.max(n || 0, 0)), this._nullCount = Math.floor(Math.max(s || 0, -1));
    let c;
    r instanceof Ot ? (this.stride = r.stride, this.values = r.values, this.typeIds = r.typeIds, this.nullBitmap = r.nullBitmap, this.valueOffsets = r.valueOffsets) : (this.stride = Wi(t), r && ((c = r[0]) && (this.valueOffsets = c), (c = r[1]) && (this.values = c), (c = r[2]) && (this.nullBitmap = c), (c = r[3]) && (this.typeIds = c)));
  }
  getValid(t) {
    const { type: e } = this;
    if (M.isUnion(e)) {
      const n = e, s = this.children[n.typeIdToChildIndex[this.typeIds[t]]], r = n.mode === se.Dense ? this.valueOffsets[t] : t;
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
    if (M.isUnion(s)) {
      const r = s, o = this.children[r.typeIdToChildIndex[this.typeIds[t]]], a = r.mode === se.Dense ? this.valueOffsets[t] : t;
      n = o.getValid(a), o.setValid(a, e);
    } else {
      let { nullBitmap: r } = this;
      const { offset: o, length: a } = this, c = o + t, l = 1 << c % 8, u = c >> 3;
      (!r || r.byteLength <= u) && (r = new Uint8Array((o + a + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (r.set(Ba(o, a, this.nullBitmap), 0), Object.assign(this, { nullBitmap: r })) : Object.assign(this, { nullBitmap: r, _nullCount: 0 }));
      const d = r[u];
      n = (d & l) !== 0, r[u] = e ? d | l : d & ~l;
    }
    return n !== !!e && (this._nullCount = this.nullCount + (e ? -1 : 1)), e;
  }
  clone(t = this.type, e = this.offset, n = this.length, s = this._nullCount, r = this, o = this.children) {
    return new Ot(t, e, n, s, r, o, this.dictionary);
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
    if (this.typeId === y.Null)
      return this.clone(this.type, 0, t, 0);
    const { length: e, nullCount: n } = this, s = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
    s[e >> 3] = (1 << e - (e & -8)) - 1, n > 0 && s.set(Ba(this.offset, e, this.nullBitmap), 0);
    const r = this.buffers;
    return r[_i.VALIDITY] = s, this.clone(this.type, 0, t, n + (t - e), r);
  }
  _sliceBuffers(t, e, n, s) {
    let r;
    const { buffers: o } = this;
    return (r = o[_i.TYPE]) && (o[_i.TYPE] = r.subarray(t, t + e)), (r = o[_i.OFFSET]) && (o[_i.OFFSET] = r.subarray(t, t + e + 1)) || // Otherwise if no offsets, slice the data buffer. Don't slice the data vector for Booleans, since the offset goes by bits not bytes
    (r = o[_i.DATA]) && (o[_i.DATA] = s === 6 ? r : r.subarray(n * t, n * (t + e))), o;
  }
  _sliceChildren(t, e, n) {
    return t.map((s) => s.slice(e, n));
  }
}
Ot.prototype.children = Object.freeze([]);
class aa extends ut {
  visit(t) {
    return this.getVisitFn(t.type).call(this, t);
  }
  visitNull(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["length"]: s = 0 } = t;
    return new Ot(e, n, s, s);
  }
  visitBool(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.nullBitmap), r = gt(e.ArrayType, t.data), { ["length"]: o = r.length >> 3, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, o, a, [void 0, r, s]);
  }
  visitInt(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.nullBitmap), r = gt(e.ArrayType, t.data), { ["length"]: o = r.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, o, a, [void 0, r, s]);
  }
  visitFloat(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.nullBitmap), r = gt(e.ArrayType, t.data), { ["length"]: o = r.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, o, a, [void 0, r, s]);
  }
  visitUtf8(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.data), r = ht(t.nullBitmap), o = Fr(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, a, c, [o, s, r]);
  }
  visitLargeUtf8(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.data), r = ht(t.nullBitmap), o = zd(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, a, c, [o, s, r]);
  }
  visitBinary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.data), r = ht(t.nullBitmap), o = Fr(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, a, c, [o, s, r]);
  }
  visitLargeBinary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.data), r = ht(t.nullBitmap), o = zd(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, a, c, [o, s, r]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.nullBitmap), r = gt(e.ArrayType, t.data), { ["length"]: o = r.length / Wi(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, o, a, [void 0, r, s]);
  }
  visitDate(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.nullBitmap), r = gt(e.ArrayType, t.data), { ["length"]: o = r.length / Wi(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, o, a, [void 0, r, s]);
  }
  visitTimestamp(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.nullBitmap), r = gt(e.ArrayType, t.data), { ["length"]: o = r.length / Wi(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, o, a, [void 0, r, s]);
  }
  visitTime(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.nullBitmap), r = gt(e.ArrayType, t.data), { ["length"]: o = r.length / Wi(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, o, a, [void 0, r, s]);
  }
  visitDecimal(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.nullBitmap), r = gt(e.ArrayType, t.data), { ["length"]: o = r.length / Wi(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, o, a, [void 0, r, s]);
  }
  visitList(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["child"]: s } = t, r = ht(t.nullBitmap), o = Fr(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, a, c, [o, void 0, r], [s]);
  }
  visitStruct(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["children"]: s = [] } = t, r = ht(t.nullBitmap), { length: o = s.reduce((c, { length: l }) => Math.max(c, l), 0), nullCount: a = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, o, a, [void 0, void 0, r], s);
  }
  visitUnion(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["children"]: s = [] } = t, r = gt(e.ArrayType, t.typeIds), { ["length"]: o = r.length, ["nullCount"]: a = -1 } = t;
    if (M.isSparseUnion(e))
      return new Ot(e, n, o, a, [void 0, void 0, void 0, r], s);
    const c = Fr(t.valueOffsets);
    return new Ot(e, n, o, a, [c, void 0, void 0, r], s);
  }
  visitDictionary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.nullBitmap), r = gt(e.indices.ArrayType, t.data), { ["dictionary"]: o = new x([new aa().visit({ type: e.dictionary })]) } = t, { ["length"]: a = r.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, a, c, [void 0, r, s], [], o);
  }
  visitInterval(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.nullBitmap), r = gt(e.ArrayType, t.data), { ["length"]: o = r.length / Wi(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, o, a, [void 0, r, s]);
  }
  visitDuration(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, s = ht(t.nullBitmap), r = gt(e.ArrayType, t.data), { ["length"]: o = r.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, o, a, [void 0, r, s]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["child"]: s = new aa().visit({ type: e.valueType }) } = t, r = ht(t.nullBitmap), { ["length"]: o = s.length / Wi(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, o, a, [void 0, void 0, r], [s]);
  }
  visitMap(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["child"]: s = new aa().visit({ type: e.childType }) } = t, r = ht(t.nullBitmap), o = Fr(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Ot(e, n, a, c, [o, void 0, r], [s]);
  }
}
const JE = new aa();
function z(i) {
  return JE.visit(i);
}
class Yy {
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
function QE(i) {
  return i.some((t) => t.nullable);
}
function _0(i) {
  return i.reduce((t, e) => t + e.nullCount, 0);
}
function b0(i) {
  return i.reduce((t, e, n) => (t[n + 1] = t[n] + e.length, t), new Uint32Array(i.length + 1));
}
function v0(i, t, e, n) {
  const s = [];
  for (let r = -1, o = i.length; ++r < o; ) {
    const a = i[r], c = t[r], { length: l } = a;
    if (c >= n)
      break;
    if (e >= c + l)
      continue;
    if (c >= e && c + l <= n) {
      s.push(a);
      continue;
    }
    const u = Math.max(0, e - c), d = Math.min(n - c, l);
    s.push(a.slice(u, d - u));
  }
  return s.length === 0 && s.push(i[0].slice(0, 0)), s;
}
function Bf(i, t, e, n) {
  let s = 0, r = 0, o = t.length - 1;
  do {
    if (s >= o - 1)
      return e < t[o] ? n(i, s, e - t[s]) : null;
    r = s + Math.trunc((o - s) * 0.5), e < t[r] ? o = r : s = r;
  } while (s < o);
}
function Nf(i, t) {
  return i.getValid(t);
}
function jl(i) {
  function t(e, n, s) {
    return i(e[n], s);
  }
  return function(e) {
    const n = this.data;
    return Bf(n, this._offsets, e, t);
  };
}
function w0(i) {
  let t;
  function e(n, s, r) {
    return i(n[s], r, t);
  }
  return function(n, s) {
    const r = this.data;
    t = s;
    const o = Bf(r, this._offsets, n, e);
    return t = void 0, o;
  };
}
function I0(i) {
  let t;
  function e(n, s, r) {
    let o = r, a = 0, c = 0;
    for (let l = s - 1, u = n.length; ++l < u; ) {
      const d = n[l];
      if (~(a = i(d, t, o)))
        return c + a;
      o = 0, c += d.length;
    }
    return -1;
  }
  return function(n, s) {
    t = n;
    const r = this.data, o = typeof s != "number" ? e(r, 0, 0) : Bf(r, this._offsets, s, e);
    return t = void 0, o;
  };
}
class V extends ut {
}
function ZE(i, t) {
  return t === null && i.length > 0 ? 0 : -1;
}
function XE(i, t) {
  const { nullBitmap: e } = i;
  if (!e || i.nullCount <= 0)
    return -1;
  let n = 0;
  for (const s of new yo(e, i.offset + (t || 0), i.length, e, _u)) {
    if (!s)
      return n;
    ++n;
  }
  return -1;
}
function ot(i, t, e) {
  if (t === void 0)
    return -1;
  if (t === null)
    switch (i.typeId) {
      // Unions don't have a nullBitmap of its own, so compare the `searchElement` to `get()`.
      case y.Union:
        break;
      // Dictionaries do have a nullBitmap, but their dictionary could also have null elements.
      case y.Dictionary:
        break;
      // All other types can iterate the null bitmap
      default:
        return XE(i, e);
    }
  const n = He.getVisitFn(i), s = rr(t);
  for (let r = (e || 0) - 1, o = i.length; ++r < o; )
    if (s(n(i, r)))
      return r;
  return -1;
}
function S0(i, t, e) {
  const n = He.getVisitFn(i), s = rr(t);
  for (let r = (e || 0) - 1, o = i.length; ++r < o; )
    if (s(n(i, r)))
      return r;
  return -1;
}
V.prototype.visitNull = ZE;
V.prototype.visitBool = ot;
V.prototype.visitInt = ot;
V.prototype.visitInt8 = ot;
V.prototype.visitInt16 = ot;
V.prototype.visitInt32 = ot;
V.prototype.visitInt64 = ot;
V.prototype.visitUint8 = ot;
V.prototype.visitUint16 = ot;
V.prototype.visitUint32 = ot;
V.prototype.visitUint64 = ot;
V.prototype.visitFloat = ot;
V.prototype.visitFloat16 = ot;
V.prototype.visitFloat32 = ot;
V.prototype.visitFloat64 = ot;
V.prototype.visitUtf8 = ot;
V.prototype.visitLargeUtf8 = ot;
V.prototype.visitBinary = ot;
V.prototype.visitLargeBinary = ot;
V.prototype.visitFixedSizeBinary = ot;
V.prototype.visitDate = ot;
V.prototype.visitDateDay = ot;
V.prototype.visitDateMillisecond = ot;
V.prototype.visitTimestamp = ot;
V.prototype.visitTimestampSecond = ot;
V.prototype.visitTimestampMillisecond = ot;
V.prototype.visitTimestampMicrosecond = ot;
V.prototype.visitTimestampNanosecond = ot;
V.prototype.visitTime = ot;
V.prototype.visitTimeSecond = ot;
V.prototype.visitTimeMillisecond = ot;
V.prototype.visitTimeMicrosecond = ot;
V.prototype.visitTimeNanosecond = ot;
V.prototype.visitDecimal = ot;
V.prototype.visitList = ot;
V.prototype.visitStruct = ot;
V.prototype.visitUnion = ot;
V.prototype.visitDenseUnion = S0;
V.prototype.visitSparseUnion = S0;
V.prototype.visitDictionary = ot;
V.prototype.visitInterval = ot;
V.prototype.visitIntervalDayTime = ot;
V.prototype.visitIntervalYearMonth = ot;
V.prototype.visitIntervalMonthDayNano = ot;
V.prototype.visitDuration = ot;
V.prototype.visitDurationSecond = ot;
V.prototype.visitDurationMillisecond = ot;
V.prototype.visitDurationMicrosecond = ot;
V.prototype.visitDurationNanosecond = ot;
V.prototype.visitFixedSizeList = ot;
V.prototype.visitMap = ot;
const zl = new V();
class P extends ut {
}
function J(i) {
  const { type: t } = i;
  if (i.nullCount === 0 && i.stride === 1 && // Don't defer to native iterator for timestamps since Numbers are expected
  // (DataType.isTimestamp(type)) && type.unit === TimeUnit.MILLISECOND ||
  (M.isInt(t) && t.bitWidth !== 64 || M.isTime(t) && t.bitWidth !== 64 || M.isFloat(t) && t.precision !== ie.HALF))
    return new Yy(i.data.length, (n) => {
      const s = i.data[n];
      return s.values.subarray(0, s.length)[Symbol.iterator]();
    });
  let e = 0;
  return new Yy(i.data.length, (n) => {
    const r = i.data[n].length, o = i.slice(e, e + r);
    return e += r, new tA(o);
  });
}
class tA {
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
P.prototype.visitNull = J;
P.prototype.visitBool = J;
P.prototype.visitInt = J;
P.prototype.visitInt8 = J;
P.prototype.visitInt16 = J;
P.prototype.visitInt32 = J;
P.prototype.visitInt64 = J;
P.prototype.visitUint8 = J;
P.prototype.visitUint16 = J;
P.prototype.visitUint32 = J;
P.prototype.visitUint64 = J;
P.prototype.visitFloat = J;
P.prototype.visitFloat16 = J;
P.prototype.visitFloat32 = J;
P.prototype.visitFloat64 = J;
P.prototype.visitUtf8 = J;
P.prototype.visitLargeUtf8 = J;
P.prototype.visitBinary = J;
P.prototype.visitLargeBinary = J;
P.prototype.visitFixedSizeBinary = J;
P.prototype.visitDate = J;
P.prototype.visitDateDay = J;
P.prototype.visitDateMillisecond = J;
P.prototype.visitTimestamp = J;
P.prototype.visitTimestampSecond = J;
P.prototype.visitTimestampMillisecond = J;
P.prototype.visitTimestampMicrosecond = J;
P.prototype.visitTimestampNanosecond = J;
P.prototype.visitTime = J;
P.prototype.visitTimeSecond = J;
P.prototype.visitTimeMillisecond = J;
P.prototype.visitTimeMicrosecond = J;
P.prototype.visitTimeNanosecond = J;
P.prototype.visitDecimal = J;
P.prototype.visitList = J;
P.prototype.visitStruct = J;
P.prototype.visitUnion = J;
P.prototype.visitDenseUnion = J;
P.prototype.visitSparseUnion = J;
P.prototype.visitDictionary = J;
P.prototype.visitInterval = J;
P.prototype.visitIntervalDayTime = J;
P.prototype.visitIntervalYearMonth = J;
P.prototype.visitIntervalMonthDayNano = J;
P.prototype.visitDuration = J;
P.prototype.visitDurationSecond = J;
P.prototype.visitDurationMillisecond = J;
P.prototype.visitDurationMicrosecond = J;
P.prototype.visitDurationNanosecond = J;
P.prototype.visitFixedSizeList = J;
P.prototype.visitMap = J;
const Ef = new P();
var O0;
const D0 = {}, B0 = {};
class x {
  constructor(t) {
    var e, n, s;
    const r = t[0] instanceof x ? t.flatMap((a) => a.data) : t;
    if (r.length === 0 || r.some((a) => !(a instanceof Ot)))
      throw new TypeError("Vector constructor expects an Array of Data instances.");
    const o = (e = r[0]) === null || e === void 0 ? void 0 : e.type;
    switch (r.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        const { get: a, set: c, indexOf: l } = D0[o.typeId], u = r[0];
        this.isValid = (d) => Nf(u, d), this.get = (d) => a(u, d), this.set = (d, m) => c(u, d, m), this.indexOf = (d) => l(u, d), this._offsets = [0, u.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, B0[o.typeId]), this._offsets = b0(r);
        break;
    }
    this.data = r, this.type = o, this.stride = Wi(o), this.numChildren = (s = (n = o.children) === null || n === void 0 ? void 0 : n.length) !== null && s !== void 0 ? s : 0, this.length = this._offsets.at(-1);
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
    return QE(this.data);
  }
  /**
   * The number of null elements in this Vector.
   */
  get nullCount() {
    return _0(this.data);
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
    return `${y[this.type.typeId]}Vector`;
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
    return this.get(gu(t, this.length));
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
    return Ef.visit(this);
  }
  /**
   * Combines two or more Vectors of the same type.
   * @param others Additional Vectors to add to the end of this Vector.
   */
  concat(...t) {
    return new x(this.data.concat(t.flatMap((e) => e.data).flat(Number.POSITIVE_INFINITY)));
  }
  /**
   * Return a zero-copy sub-section of this Vector.
   * @param start The beginning of the specified portion of the Vector.
   * @param end The end of the specified portion of the Vector. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    return new x(Of(this, t, e, ({ data: n, _offsets: s }, r, o) => v0(n, s, r, o)));
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
      case y.Int:
      case y.Float:
      case y.Decimal:
      case y.Time:
      case y.Timestamp:
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
    return t > -1 && t < this.numChildren ? new x(this.data.map(({ children: e }) => e[t])) : null;
  }
  get isMemoized() {
    return M.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1;
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
    if (M.isDictionary(this.type)) {
      const t = new Wl(this.data[0].dictionary), e = this.data.map((n) => {
        const s = n.clone();
        return s.dictionary = t, s;
      });
      return new x(e);
    }
    return new Wl(this);
  }
  /**
   * Returns a vector without memoization of the {@link get} method. If this
   * vector is not memoized, this method returns this vector.
   *
   * @returns A new vector without memoization.
   */
  unmemoize() {
    if (M.isDictionary(this.type) && this.isMemoized) {
      const t = this.data[0].dictionary.unmemoize(), e = this.data.map((n) => {
        const s = n.clone();
        return s.dictionary = t, s;
      });
      return new x(e);
    }
    return this;
  }
}
O0 = Symbol.toStringTag;
x[O0] = ((i) => {
  i.type = M.prototype, i.data = [], i.length = 0, i.stride = 1, i.numChildren = 0, i._offsets = new Uint32Array([0]), i[Symbol.isConcatSpreadable] = !0;
  const t = Object.keys(y).map((e) => y[e]).filter((e) => typeof e == "number" && e !== y.NONE);
  for (const e of t) {
    const n = He.getVisitFnByTypeId(e), s = fi.getVisitFnByTypeId(e), r = zl.getVisitFnByTypeId(e);
    D0[e] = { get: n, set: s, indexOf: r }, B0[e] = Object.create(i, {
      isValid: { value: jl(Nf) },
      get: { value: jl(He.getVisitFnByTypeId(e)) },
      set: { value: w0(fi.getVisitFnByTypeId(e)) },
      indexOf: { value: I0(zl.getVisitFnByTypeId(e)) }
    });
  }
  return "Vector";
})(x.prototype);
class Wl extends x {
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
      value: (o, a) => new Wl(s.call(this, o, a))
    }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", {
      value: () => new x(this.data)
    }), Object.defineProperty(this, "memoize", {
      value: () => this
    });
  }
}
function bu(i) {
  if (i) {
    if (i instanceof Ot)
      return new x([i]);
    if (i instanceof x)
      return new x(i.data);
    if (i.type instanceof M)
      return new x([z(i)]);
    if (Array.isArray(i))
      return new x(i.flatMap((t) => eA(t)));
    if (ArrayBuffer.isView(i)) {
      i instanceof DataView && (i = new Uint8Array(i.buffer));
      const t = { offset: 0, length: i.length, nullCount: -1, data: i };
      if (i instanceof Int8Array)
        return new x([z(Object.assign(Object.assign({}, t), { type: new Jh() }))]);
      if (i instanceof Int16Array)
        return new x([z(Object.assign(Object.assign({}, t), { type: new Qh() }))]);
      if (i instanceof Int32Array)
        return new x([z(Object.assign(Object.assign({}, t), { type: new _s() }))]);
      if (i instanceof BigInt64Array)
        return new x([z(Object.assign(Object.assign({}, t), { type: new fu() }))]);
      if (i instanceof Uint8Array || i instanceof Uint8ClampedArray)
        return new x([z(Object.assign(Object.assign({}, t), { type: new Zh() }))]);
      if (i instanceof Uint16Array)
        return new x([z(Object.assign(Object.assign({}, t), { type: new Xh() }))]);
      if (i instanceof Uint32Array)
        return new x([z(Object.assign(Object.assign({}, t), { type: new tf() }))]);
      if (i instanceof BigUint64Array)
        return new x([z(Object.assign(Object.assign({}, t), { type: new ef() }))]);
      if (i instanceof Float32Array)
        return new x([z(Object.assign(Object.assign({}, t), { type: new nf() }))]);
      if (i instanceof Float64Array)
        return new x([z(Object.assign(Object.assign({}, t), { type: new pu() }))]);
      throw new Error("Unrecognized input");
    }
  }
  throw new Error("Unrecognized input");
}
function eA(i) {
  return i instanceof Ot ? [i] : i instanceof x ? i.data : bu(i).data;
}
function iA(i) {
  if (!i || i.length <= 0)
    return function(s) {
      return !0;
    };
  let t = "";
  const e = i.filter((n) => n === n);
  return e.length > 0 && (t = `
    switch (x) {${e.map((n) => `
        case ${nA(n)}:`).join("")}
            return false;
    }`), i.length !== e.length && (t = `if (x !== x) return false;
${t}`), new Function("x", `${t}
return true;`);
}
function nA(i) {
  return typeof i != "bigint" ? ms(i) : `${ms(i)}n`;
}
function id(i, t) {
  const e = Math.ceil(i) * t - 1;
  return (e - e % 64 + 64 || 64) / t;
}
function Ky(i, t = 0) {
  return i.length >= t ? i.subarray(0, t) : Cl(new i.constructor(t), i, 0);
}
class Ya {
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
      n >= s && this._resize(s === 0 ? id(n * 1, this.BYTES_PER_ELEMENT) : id(n * 2, this.BYTES_PER_ELEMENT));
    }
    return this;
  }
  flush(t = this.length) {
    t = id(t * this.stride, this.BYTES_PER_ELEMENT);
    const e = Ky(this.buffer, t);
    return this.clear(), e;
  }
  clear() {
    return this.length = 0, this.buffer = new this.ArrayType(), this;
  }
  _resize(t) {
    return this.buffer = Ky(this.buffer, t);
  }
}
class Ka extends Ya {
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
class N0 extends Ka {
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
class E0 extends Ka {
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
let Se = class {
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
    this.length = 0, this.finished = !1, this.type = t, this.children = [], this.nullValues = e, this.stride = Wi(t), this._nulls = new N0(), e && e.length > 0 && (this._isValid = iA(e));
  }
  /**
   * Flush the `Builder` and return a `Vector<T>`.
   * @returns {Vector<T>} A `Vector<T>` of the flushed values.
   */
  toVector() {
    return new x([this.flush()]);
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
    const { type: r, length: o, nullCount: a, _typeIds: c, _offsets: l, _values: u, _nulls: d } = this;
    (e = c?.flush(o)) ? s = l?.flush(o) : (s = l?.flush(o)) ? t = u?.flush(l.last()) : t = u?.flush(o), a > 0 && (n = d?.flush(o));
    const m = this.children.map((_) => _.flush());
    return this.clear(), z({
      type: r,
      length: o,
      nullCount: a,
      children: m,
      child: m[0],
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
Se.prototype.length = 1;
Se.prototype.stride = 1;
Se.prototype.children = null;
Se.prototype.finished = !1;
Se.prototype.nullValues = null;
Se.prototype._isValid = () => !0;
class zn extends Se {
  constructor(t) {
    super(t), this._values = new Ka(this.ArrayType, 0, this.stride);
  }
  setValue(t, e) {
    const n = this._values;
    return n.reserve(t - n.length + 1), super.setValue(t, e);
  }
}
class Io extends Se {
  constructor(t) {
    super(t), this._pendingLength = 0, this._offsets = new E0(t.type);
  }
  setValue(t, e) {
    const n = this._pending || (this._pending = /* @__PURE__ */ new Map()), s = n.get(t);
    s && (this._pendingLength -= s.length), this._pendingLength += e instanceof Ha ? e[zs].length : e.length, n.set(t, e);
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
class qd {
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
class Ge {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFooter(t, e) {
    return (e || new Ge()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFooter(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Ge()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Zt.V1;
  }
  schema(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new zi()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  dictionaries(t, e) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (e || new qd()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, e) {
    const n = this.bb.__offset(this.bb_pos, 10);
    return n ? (e || new qd()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
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
    return n ? (e || new ue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startFooter(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, Zt.V1);
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
class At {
  constructor(t = [], e, n, s = Zt.V5) {
    this.fields = t || [], this.metadata = e || /* @__PURE__ */ new Map(), n || (n = Jd(this.fields)), this.dictionaries = n, this.metadataVersion = s;
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
    return new At(n, this.metadata);
  }
  /**
   * Construct a new Schema containing only fields at the specified indices.
   *
   * @param fieldIndices Indices of fields to keep.
   * @returns A new Schema of fields at the specified indices.
   */
  selectAt(t) {
    const e = t.map((n) => this.fields[n]).filter(Boolean);
    return new At(e, this.metadata);
  }
  assign(...t) {
    const e = t[0] instanceof At ? t[0] : Array.isArray(t[0]) ? new At(t[0]) : new At(t), n = [...this.fields], s = fc(fc(/* @__PURE__ */ new Map(), this.metadata), e.metadata), r = e.fields.filter((a) => {
      const c = n.findIndex((l) => l.name === a.name);
      return ~c ? (n[c] = a.clone({
        metadata: fc(fc(/* @__PURE__ */ new Map(), n[c].metadata), a.metadata)
      })) && !1 : !0;
    }), o = Jd(r, /* @__PURE__ */ new Map());
    return new At([...n, ...r], s, new Map([...this.dictionaries, ...o]));
  }
}
At.prototype.fields = null;
At.prototype.metadata = null;
At.prototype.dictionaries = null;
class Bt {
  /** @nocollapse */
  static new(...t) {
    let [e, n, s, r] = t;
    return t[0] && typeof t[0] == "object" && ({ name: e } = t[0], n === void 0 && (n = t[0].type), s === void 0 && (s = t[0].nullable), r === void 0 && (r = t[0].metadata)), new Bt(`${e}`, n, s, r);
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
    return !t[0] || typeof t[0] != "object" ? [e = this.name, n = this.type, s = this.nullable, r = this.metadata] = t : { name: e = this.name, type: n = this.type, nullable: s = this.nullable, metadata: r = this.metadata } = t[0], Bt.new(e, n, s, r);
  }
}
Bt.prototype.type = null;
Bt.prototype.name = null;
Bt.prototype.nullable = null;
Bt.prototype.metadata = null;
function fc(i, t) {
  return new Map([...i || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function Jd(i, t = /* @__PURE__ */ new Map()) {
  for (let e = -1, n = i.length; ++e < n; ) {
    const r = i[e].type;
    if (M.isDictionary(r)) {
      if (!t.has(r.id))
        t.set(r.id, r.dictionary);
      else if (t.get(r.id) !== r.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    r.children && r.children.length > 0 && Jd(r.children, t);
  }
  return t;
}
var sA = nv, rA = ao;
class Ea {
  /** @nocollapse */
  static decode(t) {
    t = new rA(ht(t));
    const e = Ge.getRootAsFooter(t), n = At.decode(e.schema(), /* @__PURE__ */ new Map(), e.version());
    return new oA(n, e);
  }
  /** @nocollapse */
  static encode(t) {
    const e = new sA(), n = At.encode(e, t.schema);
    Ge.startRecordBatchesVector(e, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse())
      an.encode(e, o);
    const s = e.endVector();
    Ge.startDictionariesVector(e, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse())
      an.encode(e, o);
    const r = e.endVector();
    return Ge.startFooter(e), Ge.addSchema(e, n), Ge.addVersion(e, Zt.V5), Ge.addRecordBatches(e, s), Ge.addDictionaries(e, r), Ge.finishFooterBuffer(e, Ge.endFooter(e)), e.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  constructor(t, e = Zt.V5, n, s) {
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
class oA extends Ea {
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
        return an.decode(e);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const e = this._footer.dictionaries(t);
      if (e)
        return an.decode(e);
    }
    return null;
  }
}
class an {
  /** @nocollapse */
  static decode(t) {
    return new an(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  /** @nocollapse */
  static encode(t, e) {
    const { metaDataLength: n } = e, s = BigInt(e.offset), r = BigInt(e.bodyLength);
    return qd.createBlock(t, s, n, r);
  }
  constructor(t, e, n) {
    this.metaDataLength = t, this.offset = Wt(n), this.bodyLength = Wt(e);
  }
}
const qt = Object.freeze({ done: !0, value: void 0 });
class Gy {
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
class Af {
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
class aA extends Af {
  constructor() {
    super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((t) => this._closedPromiseResolve = t);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(t) {
    return v(this, void 0, void 0, function* () {
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
        t.shift().resolve(qt);
      this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(t) {
    return qe.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  toNodeStream(t) {
    return qe.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  throw(t) {
    return v(this, void 0, void 0, function* () {
      return yield this.abort(t), qt;
    });
  }
  return(t) {
    return v(this, void 0, void 0, function* () {
      return yield this.close(), qt;
    });
  }
  read(t) {
    return v(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return v(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(...t) {
    return this._values.length > 0 ? Promise.resolve({ done: !1, value: this._values.shift() }) : this._error ? Promise.reject({ done: !0, value: this._error.error }) : this._closedPromiseResolve ? new Promise((e, n) => {
      this.resolvers.push({ resolve: e, reject: n });
    }) : Promise.resolve(qt);
  }
  _ensureOpen() {
    if (this._closedPromiseResolve)
      return !0;
    throw new Error("AsyncQueue is closed");
  }
}
class eo extends aA {
  write(t) {
    if ((t = ht(t)).byteLength > 0)
      return super.write(t);
  }
  toString(t = !1) {
    return t ? kd(this.toUint8Array(!0)) : this.toUint8Array(!1).then(kd);
  }
  toUint8Array(t = !1) {
    return t ? Ei(this._values)[0] : v(this, void 0, void 0, function* () {
      var e, n, s, r;
      const o = [];
      let a = 0;
      try {
        for (var c = !0, l = Te(this), u; u = yield l.next(), e = u.done, !e; c = !0) {
          r = u.value, c = !1;
          const d = r;
          o.push(d), a += d.byteLength;
        }
      } catch (d) {
        n = { error: d };
      } finally {
        try {
          !c && !e && (s = l.return) && (yield s.call(l));
        } finally {
          if (n) throw n.error;
        }
      }
      return Ei(o, a)[0];
    });
  }
}
class Aa {
  constructor(t) {
    t && (this.source = new cA(qe.fromIterable(t)));
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
class Is {
  constructor(t) {
    t instanceof Is ? this.source = t.source : t instanceof eo ? this.source = new Ts(qe.fromAsyncIterable(t)) : Zb(t) ? this.source = new Ts(qe.fromNodeStream(t)) : Yh(t) ? this.source = new Ts(qe.fromDOMStream(t)) : Qb(t) ? this.source = new Ts(qe.fromDOMStream(t.body)) : wo(t) ? this.source = new Ts(qe.fromIterable(t)) : gs(t) ? this.source = new Ts(qe.fromAsyncIterable(t)) : sr(t) && (this.source = new Ts(qe.fromAsyncIterable(t)));
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
class cA {
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
    return Object.create(this.source.throw && this.source.throw(t) || qt);
  }
  return(t) {
    return Object.create(this.source.return && this.source.return(t) || qt);
  }
}
class Ts {
  constructor(t) {
    this.source = t, this._closedPromise = new Promise((e) => this._closedPromiseResolve = e);
  }
  cancel(t) {
    return v(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(t) {
    return v(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return v(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(t) {
    return v(this, arguments, void 0, function* (e, n = "read") {
      return yield this.source.next({ cmd: n, size: e });
    });
  }
  throw(t) {
    return v(this, void 0, void 0, function* () {
      const e = this.source.throw && (yield this.source.throw(t)) || qt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
  return(t) {
    return v(this, void 0, void 0, function* () {
      const e = this.source.return && (yield this.source.return(t)) || qt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
}
class qy extends Aa {
  constructor(t, e) {
    super(), this.position = 0, this.buffer = ht(t), this.size = e === void 0 ? this.buffer.byteLength : e;
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
class Hl extends Is {
  constructor(t, e) {
    super(), this.position = 0, this._handle = t, typeof e == "number" ? this.size = e : this._pending = v(this, void 0, void 0, function* () {
      this.size = (yield t.stat()).size, delete this._pending;
    });
  }
  readInt32(t) {
    return v(this, void 0, void 0, function* () {
      const { buffer: e, byteOffset: n } = yield this.readAt(t, 4);
      return new DataView(e, n).getInt32(0, !0);
    });
  }
  seek(t) {
    return v(this, void 0, void 0, function* () {
      return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size;
    });
  }
  read(t) {
    return v(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: e, size: n, position: s } = this;
      if (e && s < n) {
        typeof t != "number" && (t = Number.POSITIVE_INFINITY);
        let r = s, o = 0, a = 0;
        const c = Math.min(n, r + Math.min(n - r, t)), l = new Uint8Array(Math.max(0, (this.position = c) - r));
        for (; (r += a) < c && (o += a) < l.byteLength; )
          ({ bytesRead: a } = yield e.read(l, o, l.byteLength - o, r));
        return l;
      }
      return null;
    });
  }
  readAt(t, e) {
    return v(this, void 0, void 0, function* () {
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
    return v(this, void 0, void 0, function* () {
      const t = this._handle;
      this._handle = null, t && (yield t.close());
    });
  }
  throw(t) {
    return v(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
  return(t) {
    return v(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
}
const lA = 65536;
function zr(i) {
  return i < 0 && (i = 4294967295 + i + 1), `0x${i.toString(16)}`;
}
const go = 8, Tf = [
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
class Ff {
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
    return s = e[2] * n[3], r += s, s = e[3] * n[2] >>> 0, r += s, this.buffer[0] += r << 16, this.buffer[1] = r >>> 0 < s ? lA : 0, this.buffer[1] += r >>> 16, this.buffer[1] += e[1] * n[3] + e[2] * n[2] + e[3] * n[1], this.buffer[1] += e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0] << 16, this;
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
    return `${zr(this.buffer[1])} ${zr(this.buffer[0])}`;
  }
}
class Tt extends Ff {
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return Tt.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return Tt.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const n = t.length, s = new Tt(e);
    for (let r = 0; r < n; ) {
      const o = go < n - r ? go : n - r, a = new Tt(new Uint32Array([Number.parseInt(t.slice(r, r + o), 10), 0])), c = new Tt(new Uint32Array([Tf[o], 0]));
      s.times(c), s.plus(a), r += o;
    }
    return s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let n = -1, s = t.length; ++n < s; )
      Tt.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new Tt(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new Tt(new Uint32Array(t.buffer)).plus(e);
  }
}
class Be extends Ff {
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
    return Be.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return Be.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const n = t.startsWith("-"), s = t.length, r = new Be(e);
    for (let o = n ? 1 : 0; o < s; ) {
      const a = go < s - o ? go : s - o, c = new Be(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0])), l = new Be(new Uint32Array([Tf[a], 0]));
      r.times(l), r.plus(c), o += a;
    }
    return n ? r.negate() : r;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let n = -1, s = t.length; ++n < s; )
      Be.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new Be(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new Be(new Uint32Array(t.buffer)).plus(e);
  }
}
class gi {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return new Be(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new Be(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
  }
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0 && ++this.buffer[1], this.buffer[1] == 0 && ++this.buffer[2], this.buffer[2] == 0 && ++this.buffer[3], this;
  }
  times(t) {
    const e = new Tt(new Uint32Array([this.buffer[3], 0])), n = new Tt(new Uint32Array([this.buffer[2], 0])), s = new Tt(new Uint32Array([this.buffer[1], 0])), r = new Tt(new Uint32Array([this.buffer[0], 0])), o = new Tt(new Uint32Array([t.buffer[3], 0])), a = new Tt(new Uint32Array([t.buffer[2], 0])), c = new Tt(new Uint32Array([t.buffer[1], 0])), l = new Tt(new Uint32Array([t.buffer[0], 0]));
    let u = Tt.multiply(r, l);
    this.buffer[0] = u.low();
    const d = new Tt(new Uint32Array([u.high(), 0]));
    return u = Tt.multiply(s, l), d.plus(u), u = Tt.multiply(r, c), d.plus(u), this.buffer[1] = d.low(), this.buffer[3] = d.lessThan(u) ? 1 : 0, this.buffer[2] = d.high(), new Tt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(Tt.multiply(n, l)).plus(Tt.multiply(s, c)).plus(Tt.multiply(r, a)), this.buffer[3] += Tt.multiply(e, l).plus(Tt.multiply(n, c)).plus(Tt.multiply(s, a)).plus(Tt.multiply(r, o)).low(), this;
  }
  plus(t) {
    const e = new Uint32Array(4);
    return e[3] = this.buffer[3] + t.buffer[3] >>> 0, e[2] = this.buffer[2] + t.buffer[2] >>> 0, e[1] = this.buffer[1] + t.buffer[1] >>> 0, e[0] = this.buffer[0] + t.buffer[0] >>> 0, e[0] < this.buffer[0] >>> 0 && ++e[1], e[1] < this.buffer[1] >>> 0 && ++e[2], e[2] < this.buffer[2] >>> 0 && ++e[3], this.buffer[3] = e[3], this.buffer[2] = e[2], this.buffer[1] = e[1], this.buffer[0] = e[0], this;
  }
  hex() {
    return `${zr(this.buffer[3])} ${zr(this.buffer[2])} ${zr(this.buffer[1])} ${zr(this.buffer[0])}`;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new gi(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new gi(new Uint32Array(t.buffer)).plus(e);
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(4)) {
    return gi.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(4)) {
    return gi.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(4)) {
    const n = t.startsWith("-"), s = t.length, r = new gi(e);
    for (let o = n ? 1 : 0; o < s; ) {
      const a = go < s - o ? go : s - o, c = new gi(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0, 0, 0])), l = new gi(new Uint32Array([Tf[a], 0, 0, 0]));
      r.times(l), r.plus(c), o += a;
    }
    return n ? r.negate() : r;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 4);
    for (let n = -1, s = t.length; ++n < s; )
      gi.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 16 * n, 4));
    return e;
  }
}
const uA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseInt64: Ff,
  Int128: gi,
  Int64: Be,
  Uint64: Tt
}, Symbol.toStringTag, { value: "Module" }));
function A0(i) {
  var t, e;
  const n = i.length, s = new Int32Array(n * 2);
  for (let r = 0, o = 0; r < n; r++) {
    const a = i[r];
    s[o++] = (t = a.days) !== null && t !== void 0 ? t : 0, s[o++] = (e = a.milliseconds) !== null && e !== void 0 ? e : 0;
  }
  return s;
}
function T0(i) {
  var t, e;
  const n = i.length, s = new Int32Array(n * 4);
  for (let r = 0, o = 0; r < n; r++) {
    const a = i[r];
    s[o++] = (t = a.months) !== null && t !== void 0 ? t : 0, s[o++] = (e = a.days) !== null && e !== void 0 ? e : 0;
    const c = a.nanoseconds;
    c ? (s[o++] = Number(BigInt(c) & BigInt(4294967295)), s[o++] = Number(BigInt(c) >> BigInt(32))) : o += 2;
  }
  return s;
}
function F0(i) {
  const t = i.length, e = new Array(t / 2);
  for (let n = 0, s = 0; n < t; n += 2)
    e[s++] = {
      days: i[n],
      milliseconds: i[n + 1]
    };
  return e;
}
function M0(i, t) {
  const e = i.length, n = new Array(e / 4);
  for (let s = 0, r = 0; s < e; s += 4) {
    const o = BigInt(i[s + 3]) << BigInt(32) | BigInt(i[s + 2] >>> 0);
    n[r++] = {
      months: i[s],
      days: i[s + 1],
      nanoseconds: t ? `${o}` : o
    };
  }
  return n;
}
const dA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  toIntervalDayTimeInt32Array: A0,
  toIntervalDayTimeObjects: F0,
  toIntervalMonthDayNanoInt32Array: T0,
  toIntervalMonthDayNanoObjects: M0
}, Symbol.toStringTag, { value: "Module" }));
class R0 extends ut {
  constructor(t, e, n, s, r = Zt.V5) {
    super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = e, this.buffers = n, this.dictionaries = s, this.metadataVersion = r;
  }
  visit(t) {
    return super.visit(t instanceof Bt ? t.type : t);
  }
  visitNull(t, { length: e } = this.nextFieldNode()) {
    return z({ type: t, length: e });
  }
  visitBool(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitInt(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitFloat(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitUtf8(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeUtf8(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitBinary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeBinary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitFixedSizeBinary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDate(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitTimestamp(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitTime(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDecimal(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitList(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  visitStruct(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), children: this.visitMany(t.children) });
  }
  visitUnion(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return this.metadataVersion < Zt.V5 && this.readNullBitmap(t, n), t.mode === se.Sparse ? this.visitSparseUnion(t, { length: e, nullCount: n }) : this.visitDenseUnion(t, { length: e, nullCount: n });
  }
  visitDenseUnion(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, typeIds: this.readTypeIds(t), valueOffsets: this.readOffsets(t), children: this.visitMany(t.children) });
  }
  visitSparseUnion(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, typeIds: this.readTypeIds(t), children: this.visitMany(t.children) });
  }
  visitDictionary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t.indices), dictionary: this.readDictionary(t) });
  }
  visitInterval(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDuration(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitFixedSizeList(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), child: this.visit(t.children[0]) });
  }
  visitMap(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return z({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
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
class hA extends R0 {
  constructor(t, e, n, s, r) {
    super(new Uint8Array(0), e, n, s, r), this.sources = t;
  }
  readNullBitmap(t, e, { offset: n } = this.nextBufferRange()) {
    return e <= 0 ? new Uint8Array(0) : Na(this.sources[n]);
  }
  readOffsets(t, { offset: e } = this.nextBufferRange()) {
    return gt(Uint8Array, gt(t.OffsetArrayType, this.sources[e]));
  }
  readTypeIds(t, { offset: e } = this.nextBufferRange()) {
    return gt(Uint8Array, gt(t.ArrayType, this.sources[e]));
  }
  readData(t, { offset: e } = this.nextBufferRange()) {
    const { sources: n } = this;
    if (M.isTimestamp(t))
      return gt(Uint8Array, Be.convertArray(n[e]));
    if ((M.isInt(t) || M.isTime(t)) && t.bitWidth === 64 || M.isDuration(t))
      return gt(Uint8Array, Be.convertArray(n[e]));
    if (M.isDate(t) && t.unit === _e.MILLISECOND)
      return gt(Uint8Array, Be.convertArray(n[e]));
    if (M.isDecimal(t))
      return gt(Uint8Array, gi.convertArray(n[e]));
    if (M.isBinary(t) || M.isLargeBinary(t) || M.isFixedSizeBinary(t))
      return fA(n[e]);
    if (M.isBool(t))
      return Na(n[e]);
    if (M.isUtf8(t) || M.isLargeUtf8(t))
      return za(n[e].join(""));
    if (M.isInterval(t))
      switch (t.unit) {
        case zt.DAY_TIME:
          return A0(n[e]);
        case zt.MONTH_DAY_NANO:
          return T0(n[e]);
      }
    return gt(Uint8Array, gt(t.ArrayType, n[e].map((s) => +s)));
  }
}
function fA(i) {
  const t = i.join(""), e = new Uint8Array(t.length / 2);
  for (let n = 0; n < t.length; n += 2)
    e[n >> 1] = Number.parseInt(t.slice(n, n + 2), 16);
  return e;
}
class Mf extends Io {
  constructor(t) {
    super(t), this._values = new Ya(Uint8Array);
  }
  get byteLength() {
    let t = this._pendingLength + this.length * 4;
    return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t;
  }
  setValue(t, e) {
    return super.setValue(t, ht(e));
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
class Rf extends Io {
  constructor(t) {
    super(t), this._values = new Ya(Uint8Array);
  }
  get byteLength() {
    let t = this._pendingLength + this.length * 4;
    return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t;
  }
  setValue(t, e) {
    return super.setValue(t, ht(e));
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
class L0 extends Se {
  constructor(t) {
    super(t), this._values = new N0();
  }
  setValue(t, e) {
    this._values.set(t, +e);
  }
}
class Ga extends zn {
}
Ga.prototype._setValue = Pv;
class Lf extends Ga {
}
Lf.prototype._setValue = af;
class Uf extends Ga {
}
Uf.prototype._setValue = cf;
class xf extends zn {
}
xf.prototype._setValue = zv;
class U0 extends Se {
  constructor({ type: t, nullValues: e, dictionaryHashFunction: n }) {
    super({ type: new xn(t.dictionary, t.indices, t.id, t.isOrdered) }), this._nulls = null, this._dictionaryOffset = 0, this._keysToIndices = /* @__PURE__ */ Object.create(null), this.indices = ir({ type: this.type.indices, nullValues: e }), this.dictionary = ir({ type: this.type.dictionary, nullValues: null }), typeof n == "function" && (this.valueToKey = n);
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
class Cf extends zn {
}
Cf.prototype._setValue = Cv;
class x0 extends Se {
  setValue(t, e) {
    const [n] = this.children, s = t * this.stride;
    for (let r = -1, o = this.stride; ++r < o; )
      n.set(s + r, e[r]);
  }
  setValid(t, e) {
    return super.setValid(t, e) || this.children[0].setValid((t + 1) * this.stride - 1, !1), e;
  }
  addChild(t, e = "0") {
    if (this.numChildren > 0)
      throw new Error("FixedSizeListBuilder can only have one child.");
    const n = this.children.push(t);
    return this.type = new fo(this.type.listSize, new Bt(e, t.type, !0)), n;
  }
}
class qa extends zn {
  setValue(t, e) {
    this._values.set(t, e);
  }
}
class C0 extends qa {
  setValue(t, e) {
    super.setValue(t, rf(e));
  }
}
class $0 extends qa {
}
class V0 extends qa {
}
class So extends zn {
}
So.prototype._setValue = Yv;
class $f extends So {
}
$f.prototype._setValue = mf;
class Vf extends So {
}
Vf.prototype._setValue = _f;
class Pf extends So {
}
Pf.prototype._setValue = bf;
class or extends zn {
}
or.prototype._setValue = Kv;
class kf extends or {
}
kf.prototype._setValue = vf;
class jf extends or {
}
jf.prototype._setValue = wf;
class zf extends or {
}
zf.prototype._setValue = If;
class Wf extends or {
}
Wf.prototype._setValue = Sf;
class dn extends zn {
  setValue(t, e) {
    this._values.set(t, e);
  }
}
class P0 extends dn {
}
class k0 extends dn {
}
class j0 extends dn {
}
class z0 extends dn {
}
class W0 extends dn {
}
class H0 extends dn {
}
class Y0 extends dn {
}
class K0 extends dn {
}
class G0 extends Io {
  constructor(t) {
    super(t), this._offsets = new E0(t.type);
  }
  addChild(t, e = "0") {
    if (this.numChildren > 0)
      throw new Error("ListBuilder can only have one child.");
    return this.children[this.numChildren] = t, this.type = new er(new Bt(e, t.type, !0)), this.numChildren - 1;
  }
  _flushPending(t) {
    const e = this._offsets, [n] = this.children;
    for (const [s, r] of t)
      if (typeof r > "u")
        e.set(s, 0);
      else {
        const o = r, a = o.length, c = e.set(s, a).buffer[s];
        for (let l = -1; ++l < a; )
          n.set(c + l, o[l]);
      }
  }
}
class q0 extends Io {
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
    return this.children[this.numChildren] = t, this.type = new po(new Bt(e, t.type, !0), this.type.keysSorted), this.numChildren - 1;
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
class J0 extends Se {
  // @ts-ignore
  setValue(t, e) {
  }
  setValid(t, e) {
    return this.length = Math.max(t + 1, this.length), e;
  }
}
class Q0 extends Se {
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
    return this.type = new ye([...this.type.children, new Bt(e, t.type, !0)]), n;
  }
}
class ar extends zn {
}
ar.prototype._setValue = kv;
class Hf extends ar {
}
Hf.prototype._setValue = lf;
class Yf extends ar {
}
Yf.prototype._setValue = uf;
class Kf extends ar {
}
Kf.prototype._setValue = df;
class Gf extends ar {
}
Gf.prototype._setValue = hf;
class cr extends zn {
}
cr.prototype._setValue = jv;
class qf extends cr {
}
qf.prototype._setValue = ff;
class Jf extends cr {
}
Jf.prototype._setValue = pf;
class Qf extends cr {
}
Qf.prototype._setValue = yf;
class Zf extends cr {
}
Zf.prototype._setValue = gf;
class vu extends Se {
  constructor(t) {
    super(t), this._typeIds = new Ka(Int8Array, 0, 1), typeof t.valueToChildTypeId == "function" && (this._valueToChildTypeId = t.valueToChildTypeId);
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
    r?.set(t, e), this.length = Math.max(t + 1, this.length);
  }
  addChild(t, e = `${this.children.length}`) {
    const n = this.children.push(t), { type: { children: s, mode: r, typeIds: o } } = this, a = [...s, new Bt(e, t.type)];
    return this.type = new ws(r, [...o, n], a), n;
  }
  /** @ignore */
  // @ts-ignore
  _valueToChildTypeId(t, e, n) {
    throw new Error("Cannot map UnionBuilder value to child typeId. Pass the `childTypeId` as the second argument to unionBuilder.append(), or supply a `valueToChildTypeId` function as part of the UnionBuilder constructor options.");
  }
}
class Z0 extends vu {
}
class X0 extends vu {
  constructor(t) {
    super(t), this._offsets = new Ka(Int32Array);
  }
  /** @ignore */
  setValue(t, e, n) {
    const s = this._typeIds.set(t, n).buffer[t], r = this.getChildAt(this.type.typeIdToChildIndex[s]), o = this._offsets.set(t, r.length).buffer[t];
    r?.set(o, e), this.length = Math.max(t + 1, this.length);
  }
}
class Xf extends Io {
  constructor(t) {
    super(t), this._values = new Ya(Uint8Array);
  }
  get byteLength() {
    let t = this._pendingLength + this.length * 4;
    return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t;
  }
  setValue(t, e) {
    return super.setValue(t, za(e));
  }
  // @ts-ignore
  _flushPending(t, e) {
  }
}
Xf.prototype._flushPending = Mf.prototype._flushPending;
class tp extends Io {
  constructor(t) {
    super(t), this._values = new Ya(Uint8Array);
  }
  get byteLength() {
    let t = this._pendingLength + this.length * 4;
    return this._offsets && (t += this._offsets.byteLength), this._values && (t += this._values.byteLength), this._nulls && (t += this._nulls.byteLength), t;
  }
  setValue(t, e) {
    return super.setValue(t, za(e));
  }
  // @ts-ignore
  _flushPending(t, e) {
  }
}
tp.prototype._flushPending = Rf.prototype._flushPending;
class pA extends ut {
  visitNull() {
    return J0;
  }
  visitBool() {
    return L0;
  }
  visitInt() {
    return dn;
  }
  visitInt8() {
    return P0;
  }
  visitInt16() {
    return k0;
  }
  visitInt32() {
    return j0;
  }
  visitInt64() {
    return z0;
  }
  visitUint8() {
    return W0;
  }
  visitUint16() {
    return H0;
  }
  visitUint32() {
    return Y0;
  }
  visitUint64() {
    return K0;
  }
  visitFloat() {
    return qa;
  }
  visitFloat16() {
    return C0;
  }
  visitFloat32() {
    return $0;
  }
  visitFloat64() {
    return V0;
  }
  visitUtf8() {
    return Xf;
  }
  visitLargeUtf8() {
    return tp;
  }
  visitBinary() {
    return Mf;
  }
  visitLargeBinary() {
    return Rf;
  }
  visitFixedSizeBinary() {
    return Cf;
  }
  visitDate() {
    return Ga;
  }
  visitDateDay() {
    return Lf;
  }
  visitDateMillisecond() {
    return Uf;
  }
  visitTimestamp() {
    return ar;
  }
  visitTimestampSecond() {
    return Hf;
  }
  visitTimestampMillisecond() {
    return Yf;
  }
  visitTimestampMicrosecond() {
    return Kf;
  }
  visitTimestampNanosecond() {
    return Gf;
  }
  visitTime() {
    return cr;
  }
  visitTimeSecond() {
    return qf;
  }
  visitTimeMillisecond() {
    return Jf;
  }
  visitTimeMicrosecond() {
    return Qf;
  }
  visitTimeNanosecond() {
    return Zf;
  }
  visitDecimal() {
    return xf;
  }
  visitList() {
    return G0;
  }
  visitStruct() {
    return Q0;
  }
  visitUnion() {
    return vu;
  }
  visitDenseUnion() {
    return X0;
  }
  visitSparseUnion() {
    return Z0;
  }
  visitDictionary() {
    return U0;
  }
  visitInterval() {
    return So;
  }
  visitIntervalDayTime() {
    return $f;
  }
  visitIntervalYearMonth() {
    return Vf;
  }
  visitIntervalMonthDayNano() {
    return Pf;
  }
  visitDuration() {
    return or;
  }
  visitDurationSecond() {
    return kf;
  }
  visitDurationMillisecond() {
    return jf;
  }
  visitDurationMicrosecond() {
    return zf;
  }
  visitDurationNanosecond() {
    return Wf;
  }
  visitFixedSizeList() {
    return x0;
  }
  visitMap() {
    return q0;
  }
}
const yA = new pA();
class k extends ut {
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
function Re(i, t) {
  return t instanceof i.constructor;
}
function lr(i, t) {
  return i === t || Re(i, t);
}
function Wn(i, t) {
  return i === t || Re(i, t) && i.bitWidth === t.bitWidth && i.isSigned === t.isSigned;
}
function wu(i, t) {
  return i === t || Re(i, t) && i.precision === t.precision;
}
function gA(i, t) {
  return i === t || Re(i, t) && i.byteWidth === t.byteWidth;
}
function ep(i, t) {
  return i === t || Re(i, t) && i.unit === t.unit;
}
function Ja(i, t) {
  return i === t || Re(i, t) && i.unit === t.unit && i.timezone === t.timezone;
}
function Qa(i, t) {
  return i === t || Re(i, t) && i.unit === t.unit && i.bitWidth === t.bitWidth;
}
function mA(i, t) {
  return i === t || Re(i, t) && i.children.length === t.children.length && cn.compareManyFields(i.children, t.children);
}
function _A(i, t) {
  return i === t || Re(i, t) && i.children.length === t.children.length && cn.compareManyFields(i.children, t.children);
}
function ip(i, t) {
  return i === t || Re(i, t) && i.mode === t.mode && i.typeIds.every((e, n) => e === t.typeIds[n]) && cn.compareManyFields(i.children, t.children);
}
function bA(i, t) {
  return i === t || Re(i, t) && i.id === t.id && i.isOrdered === t.isOrdered && cn.visit(i.indices, t.indices) && cn.visit(i.dictionary, t.dictionary);
}
function Iu(i, t) {
  return i === t || Re(i, t) && i.unit === t.unit;
}
function Za(i, t) {
  return i === t || Re(i, t) && i.unit === t.unit;
}
function vA(i, t) {
  return i === t || Re(i, t) && i.listSize === t.listSize && i.children.length === t.children.length && cn.compareManyFields(i.children, t.children);
}
function wA(i, t) {
  return i === t || Re(i, t) && i.keysSorted === t.keysSorted && i.children.length === t.children.length && cn.compareManyFields(i.children, t.children);
}
k.prototype.visitNull = lr;
k.prototype.visitBool = lr;
k.prototype.visitInt = Wn;
k.prototype.visitInt8 = Wn;
k.prototype.visitInt16 = Wn;
k.prototype.visitInt32 = Wn;
k.prototype.visitInt64 = Wn;
k.prototype.visitUint8 = Wn;
k.prototype.visitUint16 = Wn;
k.prototype.visitUint32 = Wn;
k.prototype.visitUint64 = Wn;
k.prototype.visitFloat = wu;
k.prototype.visitFloat16 = wu;
k.prototype.visitFloat32 = wu;
k.prototype.visitFloat64 = wu;
k.prototype.visitUtf8 = lr;
k.prototype.visitLargeUtf8 = lr;
k.prototype.visitBinary = lr;
k.prototype.visitLargeBinary = lr;
k.prototype.visitFixedSizeBinary = gA;
k.prototype.visitDate = ep;
k.prototype.visitDateDay = ep;
k.prototype.visitDateMillisecond = ep;
k.prototype.visitTimestamp = Ja;
k.prototype.visitTimestampSecond = Ja;
k.prototype.visitTimestampMillisecond = Ja;
k.prototype.visitTimestampMicrosecond = Ja;
k.prototype.visitTimestampNanosecond = Ja;
k.prototype.visitTime = Qa;
k.prototype.visitTimeSecond = Qa;
k.prototype.visitTimeMillisecond = Qa;
k.prototype.visitTimeMicrosecond = Qa;
k.prototype.visitTimeNanosecond = Qa;
k.prototype.visitDecimal = lr;
k.prototype.visitList = mA;
k.prototype.visitStruct = _A;
k.prototype.visitUnion = ip;
k.prototype.visitDenseUnion = ip;
k.prototype.visitSparseUnion = ip;
k.prototype.visitDictionary = bA;
k.prototype.visitInterval = Iu;
k.prototype.visitIntervalDayTime = Iu;
k.prototype.visitIntervalYearMonth = Iu;
k.prototype.visitIntervalMonthDayNano = Iu;
k.prototype.visitDuration = Za;
k.prototype.visitDurationSecond = Za;
k.prototype.visitDurationMillisecond = Za;
k.prototype.visitDurationMicrosecond = Za;
k.prototype.visitDurationNanosecond = Za;
k.prototype.visitFixedSizeList = vA;
k.prototype.visitMap = wA;
const cn = new k();
function Yl(i, t) {
  return cn.compareSchemas(i, t);
}
function IA(i, t) {
  return cn.compareFields(i, t);
}
function tw(i, t) {
  return cn.visit(i, t);
}
function ir(i) {
  const t = i.type, e = new (yA.getVisitFn(t)())(i);
  if (t.children && t.children.length > 0) {
    const n = i.children || [], s = { nullValues: i.nullValues }, r = Array.isArray(n) ? ((o, a) => n[a] || s) : (({ name: o }) => n[o] || s);
    for (const [o, a] of t.children.entries()) {
      const { type: c } = a, l = r(a, o);
      e.children.push(ir(Object.assign(Object.assign({}, l), { type: c })));
    }
  }
  return e;
}
function np(i, t) {
  if (i instanceof Ot || i instanceof x || i.type instanceof M || ArrayBuffer.isView(i))
    return bu(i);
  const e = { type: t ?? Wc(i), nullValues: [null] }, n = [...ew(e)(i)], s = n.length === 1 ? n[0] : n.reduce((r, o) => r.concat(o));
  return M.isDictionary(s.type) ? s.memoize() : s;
}
function SA(i) {
  const t = np(i), e = new ge(new At(t.type.children), t.data[0]);
  return new de(e);
}
function Wc(i) {
  if (i.length === 0)
    return new on();
  let t = 0, e = 0, n = 0, s = 0, r = 0, o = 0, a = 0, c = 0;
  for (const l of i) {
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
        Array.isArray(l) ? ++e : Object.prototype.toString.call(l) === "[object Date]" ? ++c : ++n;
        continue;
    }
    throw new TypeError("Unable to infer Vector type from input values, explicit type declaration expected.");
  }
  if (s + t === i.length)
    return new pu();
  if (r + t === i.length)
    return new xn(new uo(), new _s());
  if (o + t === i.length)
    return new fu();
  if (a + t === i.length)
    return new ho();
  if (c + t === i.length)
    return new Rv();
  if (e + t === i.length) {
    const l = i, u = Wc(l[l.findIndex((d) => d != null)]);
    if (l.every((d) => d == null || tw(u, Wc(d))))
      return new er(new Bt("", u, !0));
  } else if (n + t === i.length) {
    const l = /* @__PURE__ */ new Map();
    for (const u of i)
      for (const d of Object.keys(u))
        !l.has(d) && u[d] != null && l.set(d, new Bt(d, Wc([u[d]]), !0));
    return new ye([...l.values()]);
  }
  throw new TypeError("Unable to infer Vector type from input values, explicit type declaration expected.");
}
function ew(i) {
  const { ["queueingStrategy"]: t = "count" } = i, { ["highWaterMark"]: e = t !== "bytes" ? Number.POSITIVE_INFINITY : Math.pow(2, 14) } = i, n = t !== "bytes" ? "length" : "byteLength";
  return function* (s) {
    let r = 0;
    const o = ir(i);
    for (const a of s)
      o.append(a)[n] >= e && ++r && (yield o.toVector());
    (o.finish().length > 0 || r === 0) && (yield o.toVector());
  };
}
function OA(i) {
  const { ["queueingStrategy"]: t = "count" } = i, { ["highWaterMark"]: e = t !== "bytes" ? Number.POSITIVE_INFINITY : Math.pow(2, 14) } = i, n = t !== "bytes" ? "length" : "byteLength";
  return function(s) {
    return ee(this, arguments, function* () {
      var r, o, a, c;
      let l = 0;
      const u = ir(i);
      try {
        for (var d = !0, m = Te(s), _; _ = yield E(m.next()), r = _.done, !r; d = !0) {
          c = _.value, d = !1;
          const A = c;
          u.append(A)[n] >= e && ++l && (yield yield E(u.toVector()));
        }
      } catch (A) {
        o = { error: A };
      } finally {
        try {
          !d && !r && (a = m.return) && (yield E(a.call(m)));
        } finally {
          if (o) throw o.error;
        }
      }
      (u.finish().length > 0 || l === 0) && (yield yield E(u.toVector()));
    });
  };
}
function nd(i, t) {
  return DA(i, t.map((e) => e.data.concat()));
}
function DA(i, t) {
  const e = [...i.fields], n = [], s = { numBatches: t.reduce((d, m) => Math.max(d, m.length), 0) };
  let r = 0, o = 0, a = -1;
  const c = t.length;
  let l, u = [];
  for (; s.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, a = -1; ++a < c; )
      u[a] = l = t[a].shift(), o = Math.min(o, l ? l.length : o);
    Number.isFinite(o) && (u = BA(e, o, u, t, s), o > 0 && (n[r++] = z({
      type: new ye(e),
      length: o,
      nullCount: 0,
      children: u.slice()
    })));
  }
  return [
    i = i.assign(e),
    n.map((d) => new ge(i, d))
  ];
}
function BA(i, t, e, n, s) {
  var r;
  const o = (t + 63 & -64) >> 3;
  for (let a = -1, c = n.length; ++a < c; ) {
    const l = e[a], u = l?.length;
    if (u >= t)
      u === t ? e[a] = l : (e[a] = l.slice(0, t), s.numBatches = Math.max(s.numBatches, n[a].unshift(l.slice(t, u - t))));
    else {
      const d = i[a];
      i[a] = d.clone({ nullable: !0 }), e[a] = (r = l?._changeLengthAndBackfillNullBitmap(t)) !== null && r !== void 0 ? r : z({
        type: d.type,
        length: t,
        nullCount: t,
        nullBitmap: new Uint8Array(o)
      });
    }
  }
  return e;
}
var iw;
class de {
  constructor(...t) {
    var e, n;
    if (t.length === 0)
      return this.batches = [], this.schema = new At([]), this._offsets = [0], this;
    let s, r;
    t[0] instanceof At && (s = t.shift()), t.at(-1) instanceof Uint32Array && (r = t.pop());
    const o = (c) => {
      if (c) {
        if (c instanceof ge)
          return [c];
        if (c instanceof de)
          return c.batches;
        if (c instanceof Ot) {
          if (c.type instanceof ye)
            return [new ge(new At(c.type.children), c)];
        } else {
          if (Array.isArray(c))
            return c.flatMap((l) => o(l));
          if (typeof c[Symbol.iterator] == "function")
            return [...c].flatMap((l) => o(l));
          if (typeof c == "object") {
            const l = Object.keys(c), u = l.map((_) => new x([c[_]])), d = s ?? new At(l.map((_, A) => new Bt(String(_), u[A].type, u[A].nullable))), [, m] = nd(d, u);
            return m.length === 0 ? [new ge(c)] : m;
          }
        }
      }
      return [];
    }, a = t.flatMap((c) => o(c));
    if (s = (n = s ?? ((e = a[0]) === null || e === void 0 ? void 0 : e.schema)) !== null && n !== void 0 ? n : new At([]), !(s instanceof At))
      throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const c of a) {
      if (!(c instanceof ge))
        throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!Yl(s, c.schema))
        throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = s, this.batches = a, this._offsets = r ?? b0(this.data);
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
    return this._nullCount === -1 && (this._nullCount = _0(this.data)), this._nullCount;
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
    return this.get(gu(t, this.numRows));
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
    return this.batches.length > 0 ? Ef.visit(new x(this.data)) : new Array(0)[Symbol.iterator]();
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
    return new de(e, n.map((s) => new ge(e, s)));
  }
  /**
   * Return a zero-copy sub-section of this Table.
   *
   * @param begin The beginning of the specified portion of the Table.
   * @param end The end of the specified portion of the Table. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const n = this.schema;
    [t, e] = Of({ length: this.numRows }, t, e);
    const s = v0(this.data, this._offsets, t, e);
    return new de(n, s.map((r) => new ge(n, r)));
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
        const { type: n } = this.schema.fields[t], s = z({ type: n, length: 0, nullCount: 0 });
        e.push(s._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new x(e);
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
      e || (e = new x([z({ type: new on(), length: this.numRows })]));
      const r = n.fields.slice(), o = r[t].clone({ type: e.type }), a = this.schema.fields.map((c, l) => this.getChildAt(l));
      [r[t], a[t]] = [o, e], [n, s] = nd(n, a);
    }
    return new de(n, s);
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
    return new de(e, n);
  }
  assign(t) {
    const e = this.schema.fields, [n, s] = t.schema.fields.reduce((a, c, l) => {
      const [u, d] = a, m = e.findIndex((_) => _.name === c.name);
      return ~m ? d[m] = l : u.push(l), a;
    }, [[], []]), r = this.schema.assign(t.schema), o = [
      ...e.map((a, c) => [c, s[c]]).map(([a, c]) => c === void 0 ? this.getChildAt(a) : t.getChildAt(c)),
      ...n.map((a) => t.getChildAt(a))
    ].filter(Boolean);
    return new de(...nd(r, o));
  }
}
iw = Symbol.toStringTag;
de[iw] = ((i) => (i.schema = null, i.batches = [], i._offsets = new Uint32Array([0]), i._nullCount = -1, i[Symbol.isConcatSpreadable] = !0, i.isValid = jl(Nf), i.get = jl(He.getVisitFn(y.Struct)), i.set = w0(fi.getVisitFn(y.Struct)), i.indexOf = I0(zl.getVisitFn(y.Struct)), "Table"))(de.prototype);
function NA(i) {
  const t = {}, e = Object.entries(i);
  for (const [n, s] of e)
    t[n] = bu(s);
  return new de(t);
}
function EA(i) {
  const t = {}, e = Object.entries(i);
  for (const [n, s] of e)
    t[n] = np(s);
  return new de(t);
}
var nw;
let ge = class Xo {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof At))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([
          ,
          this.data = z({
            nullCount: 0,
            type: new ye(this.schema.fields),
            children: this.schema.fields.map((e) => z({ type: e.type, nullCount: 0 }))
          })
        ] = t, !(this.data instanceof Ot))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = Jy(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [e] = t, { fields: n, children: s, length: r } = Object.keys(e).reduce((c, l, u) => (c.children[u] = e[l], c.length = Math.max(c.length, e[l].length), c.fields[u] = Bt.new({ name: l, type: e[l].type, nullable: !0 }), c), {
          length: 0,
          fields: new Array(),
          children: new Array()
        }), o = new At(n), a = z({ type: new ye(n), length: r, children: s, nullCount: 0 });
        [this.schema, this.data] = Jy(o, a.children, r);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = sw(this.schema.fields, this.data.children));
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
    return He.visit(this.data, t);
  }
  /**
    * Get a row value by position.
    * @param index The index of the row to read. A negative index will count back from the last row.
    */
  at(t) {
    return this.get(gu(t, this.numRows));
  }
  /**
   * Set a row by position.
   * @param index The index of the row to write.
   * @param value The value to set.
   */
  set(t, e) {
    return fi.visit(this.data, t, e);
  }
  /**
   * Retrieve the index of the first occurrence of a row in an RecordBatch.
   * @param element The row to locate in the RecordBatch.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  indexOf(t, e) {
    return zl.visit(this.data, t, e);
  }
  /**
   * Iterator for rows in this RecordBatch.
   */
  [Symbol.iterator]() {
    return Ef.visit(new x([this.data]));
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
    return new de(this.schema, [this, ...t]);
  }
  /**
   * Return a zero-copy sub-section of this RecordBatch.
   * @param start The beginning of the specified portion of the RecordBatch.
   * @param end The end of the specified portion of the RecordBatch. This is exclusive of the row at the index 'end'.
   */
  slice(t, e) {
    const [n] = new x([this.data]).slice(t, e).data;
    return new Xo(this.schema, n);
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
    return t > -1 && t < this.schema.fields.length ? new x([this.data.children[t]]) : null;
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
      e || (e = new x([z({ type: new on(), length: this.numRows })]));
      const r = n.fields.slice(), o = s.children.slice(), a = r[t].clone({ type: e.type });
      [r[t], o[t]] = [a, e.data[0]], n = new At(r, new Map(this.schema.metadata)), s = z({ type: new ye(r), children: o });
    }
    return new Xo(n, s);
  }
  /**
   * Construct a new RecordBatch containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new RecordBatch of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.select(t), n = new ye(e.fields), s = [];
    for (const r of t) {
      const o = this.schema.fields.findIndex((a) => a.name === r);
      ~o && (s[o] = this.data.children[o]);
    }
    return new Xo(e, z({ type: n, length: this.numRows, children: s }));
  }
  /**
   * Construct a new RecordBatch containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new RecordBatch of columns matching at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), n = t.map((r) => this.data.children[r]).filter(Boolean), s = z({ type: new ye(e.fields), length: this.numRows, children: n });
    return new Xo(e, s);
  }
};
nw = Symbol.toStringTag;
ge[nw] = ((i) => (i._nullCount = -1, i[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(ge.prototype);
function Jy(i, t, e = t.reduce((n, s) => Math.max(n, s.length), 0)) {
  var n;
  const s = [...i.fields], r = [...t], o = (e + 63 & -64) >> 3;
  for (const [a, c] of i.fields.entries()) {
    const l = t[a];
    (!l || l.length !== e) && (s[a] = c.clone({ nullable: !0 }), r[a] = (n = l?._changeLengthAndBackfillNullBitmap(e)) !== null && n !== void 0 ? n : z({
      type: c.type,
      length: e,
      nullCount: e,
      nullBitmap: new Uint8Array(o)
    }));
  }
  return [
    i.assign(s),
    z({ type: new ye(s), length: e, children: r })
  ];
}
function sw(i, t, e = /* @__PURE__ */ new Map()) {
  var n, s;
  if (((n = i?.length) !== null && n !== void 0 ? n : 0) > 0 && i?.length === t?.length)
    for (let r = -1, o = i.length; ++r < o; ) {
      const { type: a } = i[r], c = t[r];
      for (const l of [c, ...((s = c?.dictionary) === null || s === void 0 ? void 0 : s.data) || []])
        sw(a.children, l?.children, e);
      if (M.isDictionary(a)) {
        const { id: l } = a;
        if (!e.has(l))
          c?.dictionary && e.set(l, c.dictionary);
        else if (e.get(l) !== c.dictionary)
          throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
      }
    }
  return e;
}
class sp extends ge {
  constructor(t) {
    const e = t.fields.map((s) => z({ type: s.type })), n = z({ type: new ye(t.fields), nullCount: 0, children: e });
    super(t, n);
  }
}
let Jn = class Pi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMessage(t, e) {
    return (e || new Pi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, e) {
    return t.setPosition(t.position() + Rt), (e || new Pi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Zt.V1;
  }
  headerType() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readUint8(this.bb_pos + t) : Dt.NONE;
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
    return n ? (e || new ue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startMessage(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, Zt.V1);
  }
  static addHeaderType(t, e) {
    t.addFieldInt8(1, e, Dt.NONE);
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
    return Pi.startMessage(t), Pi.addVersion(t, e), Pi.addHeaderType(t, n), Pi.addHeader(t, s), Pi.addBodyLength(t, r), Pi.addCustomMetadata(t, o), Pi.endMessage(t);
  }
};
class AA extends ut {
  visit(t, e) {
    return t == null || e == null ? void 0 : super.visit(t, e);
  }
  visitNull(t, e) {
    return Py.startNull(e), Py.endNull(e);
  }
  visitInt(t, e) {
    return Qe.startInt(e), Qe.addBitWidth(e, t.bitWidth), Qe.addIsSigned(e, t.isSigned), Qe.endInt(e);
  }
  visitFloat(t, e) {
    return qi.startFloatingPoint(e), qi.addPrecision(e, t.precision), qi.endFloatingPoint(e);
  }
  visitBinary(t, e) {
    return Uy.startBinary(e), Uy.endBinary(e);
  }
  visitLargeBinary(t, e) {
    return Cy.startLargeBinary(e), Cy.endLargeBinary(e);
  }
  visitBool(t, e) {
    return xy.startBool(e), xy.endBool(e);
  }
  visitUtf8(t, e) {
    return ky.startUtf8(e), ky.endUtf8(e);
  }
  visitLargeUtf8(t, e) {
    return $y.startLargeUtf8(e), $y.endLargeUtf8(e);
  }
  visitDecimal(t, e) {
    return Lr.startDecimal(e), Lr.addScale(e, t.scale), Lr.addPrecision(e, t.precision), Lr.addBitWidth(e, t.bitWidth), Lr.endDecimal(e);
  }
  visitDate(t, e) {
    return Cc.startDate(e), Cc.addUnit(e, t.unit), Cc.endDate(e);
  }
  visitTime(t, e) {
    return ai.startTime(e), ai.addUnit(e, t.unit), ai.addBitWidth(e, t.bitWidth), ai.endTime(e);
  }
  visitTimestamp(t, e) {
    const n = t.timezone && e.createString(t.timezone) || void 0;
    return ci.startTimestamp(e), ci.addUnit(e, t.unit), n !== void 0 && ci.addTimezone(e, n), ci.endTimestamp(e);
  }
  visitInterval(t, e) {
    return Ji.startInterval(e), Ji.addUnit(e, t.unit), Ji.endInterval(e);
  }
  visitDuration(t, e) {
    return $c.startDuration(e), $c.addUnit(e, t.unit), $c.endDuration(e);
  }
  visitList(t, e) {
    return Vy.startList(e), Vy.endList(e);
  }
  visitStruct(t, e) {
    return Ws.startStruct_(e), Ws.endStruct_(e);
  }
  visitUnion(t, e) {
    Pe.startTypeIdsVector(e, t.typeIds.length);
    const n = Pe.createTypeIdsVector(e, t.typeIds);
    return Pe.startUnion(e), Pe.addMode(e, t.mode), Pe.addTypeIds(e, n), Pe.endUnion(e);
  }
  visitDictionary(t, e) {
    const n = this.visit(t.indices, e);
    return Nn.startDictionaryEncoding(e), Nn.addId(e, BigInt(t.id)), Nn.addIsOrdered(e, t.isOrdered), n !== void 0 && Nn.addIndexType(e, n), Nn.endDictionaryEncoding(e);
  }
  visitFixedSizeBinary(t, e) {
    return Vc.startFixedSizeBinary(e), Vc.addByteWidth(e, t.byteWidth), Vc.endFixedSizeBinary(e);
  }
  visitFixedSizeList(t, e) {
    return Pc.startFixedSizeList(e), Pc.addListSize(e, t.listSize), Pc.endFixedSizeList(e);
  }
  visitMap(t, e) {
    return kc.startMap(e), kc.addKeysSorted(e, t.keysSorted), kc.endMap(e);
  }
}
const sd = new AA();
function TA(i, t = /* @__PURE__ */ new Map()) {
  return new At(MA(i, t), Hc(i.metadata), t);
}
function rw(i) {
  return new ii(i.count, ow(i.columns), aw(i.columns));
}
function FA(i) {
  return new ln(rw(i.data), i.id, i.isDelta);
}
function MA(i, t) {
  return (i.fields || []).filter(Boolean).map((e) => Bt.fromJSON(e, t));
}
function Qy(i, t) {
  return (i.children || []).filter(Boolean).map((e) => Bt.fromJSON(e, t));
}
function ow(i) {
  return (i || []).reduce((t, e) => [
    ...t,
    new Ss(e.count, RA(e.VALIDITY)),
    ...ow(e.children)
  ], []);
}
function aw(i, t = []) {
  for (let e = -1, n = (i || []).length; ++e < n; ) {
    const s = i[e];
    s.VALIDITY && t.push(new tn(t.length, s.VALIDITY.length)), s.TYPE_ID && t.push(new tn(t.length, s.TYPE_ID.length)), s.OFFSET && t.push(new tn(t.length, s.OFFSET.length)), s.DATA && t.push(new tn(t.length, s.DATA.length)), t = aw(s.children, t);
  }
  return t;
}
function RA(i) {
  return (i || []).reduce((t, e) => t + +(e === 0), 0);
}
function LA(i, t) {
  let e, n, s, r, o, a;
  return !t || !(r = i.dictionary) ? (o = Xy(i, Qy(i, t)), s = new Bt(i.name, o, i.nullable, Hc(i.metadata))) : t.has(e = r.id) ? (n = (n = r.indexType) ? Zy(n) : new _s(), a = new xn(t.get(e), n, e, r.isOrdered), s = new Bt(i.name, a, i.nullable, Hc(i.metadata))) : (n = (n = r.indexType) ? Zy(n) : new _s(), t.set(e, o = Xy(i, Qy(i, t))), a = new xn(o, n, e, r.isOrdered), s = new Bt(i.name, a, i.nullable, Hc(i.metadata))), s || null;
}
function Hc(i = []) {
  return new Map(i.map(({ key: t, value: e }) => [t, e]));
}
function Zy(i) {
  return new Fe(i.isSigned, i.bitWidth);
}
function Xy(i, t) {
  const e = i.type.name;
  switch (e) {
    case "NONE":
      return new on();
    case "null":
      return new on();
    case "binary":
      return new wa();
    case "largebinary":
      return new Ia();
    case "utf8":
      return new uo();
    case "largeutf8":
      return new Sa();
    case "bool":
      return new ho();
    case "list":
      return new er((t || [])[0]);
    case "struct":
      return new ye(t || []);
    case "struct_":
      return new ye(t || []);
  }
  switch (e) {
    case "int": {
      const n = i.type;
      return new Fe(n.isSigned, n.bitWidth);
    }
    case "floatingpoint": {
      const n = i.type;
      return new bs(ie[n.precision]);
    }
    case "decimal": {
      const n = i.type;
      return new Oa(n.scale, n.precision, n.bitWidth);
    }
    case "date": {
      const n = i.type;
      return new tr(_e[n.unit]);
    }
    case "time": {
      const n = i.type;
      return new Rn(R[n.unit], n.bitWidth);
    }
    case "timestamp": {
      const n = i.type;
      return new Ln(R[n.unit], n.timezone);
    }
    case "interval": {
      const n = i.type;
      return new vs(zt[n.unit]);
    }
    case "duration": {
      const n = i.type;
      return new Un(R[n.unit]);
    }
    case "union": {
      const n = i.type, [s, ...r] = (n.mode + "").toLowerCase(), o = s.toUpperCase() + r.join("");
      return new ws(se[o], n.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const n = i.type;
      return new Da(n.byteWidth);
    }
    case "fixedsizelist": {
      const n = i.type;
      return new fo(n.listSize, (t || [])[0]);
    }
    case "map": {
      const n = i.type;
      return new po((t || [])[0], n.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${e}"`);
}
var UA = nv, xA = ao;
class ve {
  /** @nocollapse */
  static fromJSON(t, e) {
    const n = new ve(0, Zt.V5, e);
    return n._createHeader = CA(t, e), n;
  }
  /** @nocollapse */
  static decode(t) {
    t = new xA(ht(t));
    const e = Jn.getRootAsMessage(t), n = e.bodyLength(), s = e.version(), r = e.headerType(), o = new ve(n, s, r);
    return o._createHeader = $A(e, r), o;
  }
  /** @nocollapse */
  static encode(t) {
    const e = new UA();
    let n = -1;
    return t.isSchema() ? n = At.encode(e, t.header()) : t.isRecordBatch() ? n = ii.encode(e, t.header()) : t.isDictionaryBatch() && (n = ln.encode(e, t.header())), Jn.startMessage(e), Jn.addVersion(e, Zt.V5), Jn.addHeader(e, n), Jn.addHeaderType(e, t.headerType), Jn.addBodyLength(e, BigInt(t.bodyLength)), Jn.finishMessageBuffer(e, Jn.endMessage(e)), e.asUint8Array();
  }
  /** @nocollapse */
  static from(t, e = 0) {
    if (t instanceof At)
      return new ve(0, Zt.V5, Dt.Schema, t);
    if (t instanceof ii)
      return new ve(e, Zt.V5, Dt.RecordBatch, t);
    if (t instanceof ln)
      return new ve(e, Zt.V5, Dt.DictionaryBatch, t);
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
    return this.headerType === Dt.Schema;
  }
  isRecordBatch() {
    return this.headerType === Dt.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === Dt.DictionaryBatch;
  }
  constructor(t, e, n, s) {
    this._version = e, this._headerType = n, this.body = new Uint8Array(0), s && (this._createHeader = () => s), this._bodyLength = Wt(t);
  }
}
class ii {
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
    this._nodes = e, this._buffers = n, this._length = Wt(t);
  }
}
class ln {
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
    this._data = t, this._isDelta = n, this._id = Wt(e);
  }
}
class tn {
  constructor(t, e) {
    this.offset = Wt(t), this.length = Wt(e);
  }
}
class Ss {
  constructor(t, e) {
    this.length = Wt(t), this.nullCount = Wt(e);
  }
}
function CA(i, t) {
  return (() => {
    switch (t) {
      case Dt.Schema:
        return At.fromJSON(i);
      case Dt.RecordBatch:
        return ii.fromJSON(i);
      case Dt.DictionaryBatch:
        return ln.fromJSON(i);
    }
    throw new Error(`Unrecognized Message type: { name: ${Dt[t]}, type: ${t} }`);
  });
}
function $A(i, t) {
  return (() => {
    switch (t) {
      case Dt.Schema:
        return At.decode(i.header(new zi()), /* @__PURE__ */ new Map(), i.version());
      case Dt.RecordBatch:
        return ii.decode(i.header(new Sn()), i.version());
      case Dt.DictionaryBatch:
        return ln.decode(i.header(new Mr()), i.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${Dt[t]}, type: ${t} }`);
  });
}
Bt.encode = qA;
Bt.decode = KA;
Bt.fromJSON = LA;
At.encode = GA;
At.decode = VA;
At.fromJSON = TA;
ii.encode = JA;
ii.decode = PA;
ii.fromJSON = rw;
ln.encode = QA;
ln.decode = kA;
ln.fromJSON = FA;
Ss.encode = ZA;
Ss.decode = zA;
tn.encode = XA;
tn.decode = jA;
function VA(i, t = /* @__PURE__ */ new Map(), e = Zt.V5) {
  const n = YA(i, t);
  return new At(n, Yc(i), t, e);
}
function PA(i, t = Zt.V5) {
  if (i.compression() !== null)
    throw new Error("Record batch compression not implemented");
  return new ii(i.length(), WA(i), HA(i, t));
}
function kA(i, t = Zt.V5) {
  return new ln(ii.decode(i.data(), t), i.id(), i.isDelta());
}
function jA(i) {
  return new tn(i.offset(), i.length());
}
function zA(i) {
  return new Ss(i.length(), i.nullCount());
}
function WA(i) {
  const t = [];
  for (let e, n = -1, s = -1, r = i.nodesLength(); ++n < r; )
    (e = i.nodes(n)) && (t[++s] = Ss.decode(e));
  return t;
}
function HA(i, t) {
  const e = [];
  for (let n, s = -1, r = -1, o = i.buffersLength(); ++s < o; )
    (n = i.buffers(s)) && (t < Zt.V4 && (n.bb_pos += 8 * (s + 1)), e[++r] = tn.decode(n));
  return e;
}
function YA(i, t) {
  const e = [];
  for (let n, s = -1, r = -1, o = i.fieldsLength(); ++s < o; )
    (n = i.fields(s)) && (e[++r] = Bt.decode(n, t));
  return e;
}
function tg(i, t) {
  const e = [];
  for (let n, s = -1, r = -1, o = i.childrenLength(); ++s < o; )
    (n = i.children(s)) && (e[++r] = Bt.decode(n, t));
  return e;
}
function KA(i, t) {
  let e, n, s, r, o, a;
  return !t || !(a = i.dictionary()) ? (s = ig(i, tg(i, t)), n = new Bt(i.name(), s, i.nullable(), Yc(i))) : t.has(e = Wt(a.id())) ? (r = (r = a.indexType()) ? eg(r) : new _s(), o = new xn(t.get(e), r, e, a.isOrdered()), n = new Bt(i.name(), o, i.nullable(), Yc(i))) : (r = (r = a.indexType()) ? eg(r) : new _s(), t.set(e, s = ig(i, tg(i, t))), o = new xn(s, r, e, a.isOrdered()), n = new Bt(i.name(), o, i.nullable(), Yc(i))), n || null;
}
function Yc(i) {
  const t = /* @__PURE__ */ new Map();
  if (i)
    for (let e, n, s = -1, r = Math.trunc(i.customMetadataLength()); ++s < r; )
      (e = i.customMetadata(s)) && (n = e.key()) != null && t.set(n, e.value());
  return t;
}
function eg(i) {
  return new Fe(i.isSigned(), i.bitWidth());
}
function ig(i, t) {
  const e = i.typeType();
  switch (e) {
    case ct.NONE:
      return new on();
    case ct.Null:
      return new on();
    case ct.Binary:
      return new wa();
    case ct.LargeBinary:
      return new Ia();
    case ct.Utf8:
      return new uo();
    case ct.LargeUtf8:
      return new Sa();
    case ct.Bool:
      return new ho();
    case ct.List:
      return new er((t || [])[0]);
    case ct.Struct_:
      return new ye(t || []);
  }
  switch (e) {
    case ct.Int: {
      const n = i.type(new Qe());
      return new Fe(n.isSigned(), n.bitWidth());
    }
    case ct.FloatingPoint: {
      const n = i.type(new qi());
      return new bs(n.precision());
    }
    case ct.Decimal: {
      const n = i.type(new Lr());
      return new Oa(n.scale(), n.precision(), n.bitWidth());
    }
    case ct.Date: {
      const n = i.type(new Cc());
      return new tr(n.unit());
    }
    case ct.Time: {
      const n = i.type(new ai());
      return new Rn(n.unit(), n.bitWidth());
    }
    case ct.Timestamp: {
      const n = i.type(new ci());
      return new Ln(n.unit(), n.timezone());
    }
    case ct.Interval: {
      const n = i.type(new Ji());
      return new vs(n.unit());
    }
    case ct.Duration: {
      const n = i.type(new $c());
      return new Un(n.unit());
    }
    case ct.Union: {
      const n = i.type(new Pe());
      return new ws(n.mode(), n.typeIdsArray() || [], t || []);
    }
    case ct.FixedSizeBinary: {
      const n = i.type(new Vc());
      return new Da(n.byteWidth());
    }
    case ct.FixedSizeList: {
      const n = i.type(new Pc());
      return new fo(n.listSize(), (t || [])[0]);
    }
    case ct.Map: {
      const n = i.type(new kc());
      return new po((t || [])[0], n.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${ct[e]}" (${e})`);
}
function GA(i, t) {
  const e = t.fields.map((r) => Bt.encode(i, r));
  zi.startFieldsVector(i, e.length);
  const n = zi.createFieldsVector(i, e), s = t.metadata && t.metadata.size > 0 ? zi.createCustomMetadataVector(i, [...t.metadata].map(([r, o]) => {
    const a = i.createString(`${r}`), c = i.createString(`${o}`);
    return ue.startKeyValue(i), ue.addKey(i, a), ue.addValue(i, c), ue.endKeyValue(i);
  })) : -1;
  return zi.startSchema(i), zi.addFields(i, n), zi.addEndianness(i, tT ? co.Little : co.Big), s !== -1 && zi.addCustomMetadata(i, s), zi.endSchema(i);
}
function qA(i, t) {
  let e = -1, n = -1, s = -1;
  const r = t.type;
  let o = t.typeId;
  M.isDictionary(r) ? (o = r.dictionary.typeId, s = sd.visit(r, i), n = sd.visit(r.dictionary, i)) : n = sd.visit(r, i);
  const a = (r.children || []).map((u) => Bt.encode(i, u)), c = ri.createChildrenVector(i, a), l = t.metadata && t.metadata.size > 0 ? ri.createCustomMetadataVector(i, [...t.metadata].map(([u, d]) => {
    const m = i.createString(`${u}`), _ = i.createString(`${d}`);
    return ue.startKeyValue(i), ue.addKey(i, m), ue.addValue(i, _), ue.endKeyValue(i);
  })) : -1;
  return t.name && (e = i.createString(t.name)), ri.startField(i), ri.addType(i, n), ri.addTypeType(i, o), ri.addChildren(i, c), ri.addNullable(i, !!t.nullable), e !== -1 && ri.addName(i, e), s !== -1 && ri.addDictionary(i, s), l !== -1 && ri.addCustomMetadata(i, l), ri.endField(i);
}
function JA(i, t) {
  const e = t.nodes || [], n = t.buffers || [];
  Sn.startNodesVector(i, e.length);
  for (const o of e.slice().reverse())
    Ss.encode(i, o);
  const s = i.endVector();
  Sn.startBuffersVector(i, n.length);
  for (const o of n.slice().reverse())
    tn.encode(i, o);
  const r = i.endVector();
  return Sn.startRecordBatch(i), Sn.addLength(i, BigInt(t.length)), Sn.addNodes(i, s), Sn.addBuffers(i, r), Sn.endRecordBatch(i);
}
function QA(i, t) {
  const e = ii.encode(i, t.data);
  return Mr.startDictionaryBatch(i), Mr.addId(i, BigInt(t.id)), Mr.addIsDelta(i, t.isDelta), Mr.addData(i, e), Mr.endDictionaryBatch(i);
}
function ZA(i, t) {
  return ov.createFieldNode(i, BigInt(t.length), BigInt(t.nullCount));
}
function XA(i, t) {
  return rv.createBuffer(i, BigInt(t.offset), BigInt(t.length));
}
const tT = (() => {
  const i = new ArrayBuffer(2);
  return new DataView(i).setInt16(
    0,
    256,
    !0
    /* littleEndian */
  ), new Int16Array(i)[0] === 256;
})(), rp = (i) => `Expected ${Dt[i]} Message in stream, but was null or length 0.`, op = (i) => `Header pointer of flatbuffer-encoded ${Dt[i]} Message is null or length 0.`, cw = (i, t) => `Expected to read ${i} metadata bytes, but only read ${t}.`, lw = (i, t) => `Expected to read ${i} bytes for message body, but only read ${t}.`;
class ap {
  constructor(t) {
    this.source = t instanceof Aa ? t : new Aa(t);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let t;
    return (t = this.readMetadataLength()).done || t.value === -1 && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? qt : t;
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
      throw new Error(rp(t));
    return e.value;
  }
  readMessageBody(t) {
    if (t <= 0)
      return new Uint8Array(0);
    const e = ht(this.source.read(t));
    if (e.byteLength < t)
      throw new Error(lw(t, e.byteLength));
    return (
      /* 1. */
      e.byteOffset % 8 === 0 && /* 2. */
      e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
    );
  }
  readSchema(t = !1) {
    const e = Dt.Schema, n = this.readMessage(e), s = n?.header();
    if (t && !s)
      throw new Error(op(e));
    return s;
  }
  readMetadataLength() {
    const t = this.source.read(Su), e = t && new ao(t), n = e?.readInt32(0) || 0;
    return { done: n === 0, value: n };
  }
  readMetadata(t) {
    const e = this.source.read(t);
    if (!e)
      return qt;
    if (e.byteLength < t)
      throw new Error(cw(t, e.byteLength));
    return { done: !1, value: ve.decode(e) };
  }
}
class uw {
  constructor(t, e) {
    this.source = t instanceof Is ? t : Jb(t) ? new Hl(t, e) : new Is(t);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return v(this, void 0, void 0, function* () {
      let t;
      return (t = yield this.readMetadataLength()).done || t.value === -1 && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? qt : t;
    });
  }
  throw(t) {
    return v(this, void 0, void 0, function* () {
      return yield this.source.throw(t);
    });
  }
  return(t) {
    return v(this, void 0, void 0, function* () {
      return yield this.source.return(t);
    });
  }
  readMessage(t) {
    return v(this, void 0, void 0, function* () {
      let e;
      if ((e = yield this.next()).done)
        return null;
      if (t != null && e.value.headerType !== t)
        throw new Error(rp(t));
      return e.value;
    });
  }
  readMessageBody(t) {
    return v(this, void 0, void 0, function* () {
      if (t <= 0)
        return new Uint8Array(0);
      const e = ht(yield this.source.read(t));
      if (e.byteLength < t)
        throw new Error(lw(t, e.byteLength));
      return (
        /* 1. */
        e.byteOffset % 8 === 0 && /* 2. */
        e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
      );
    });
  }
  readSchema() {
    return v(this, arguments, void 0, function* (t = !1) {
      const e = Dt.Schema, n = yield this.readMessage(e), s = n?.header();
      if (t && !s)
        throw new Error(op(e));
      return s;
    });
  }
  readMetadataLength() {
    return v(this, void 0, void 0, function* () {
      const t = yield this.source.read(Su), e = t && new ao(t), n = e?.readInt32(0) || 0;
      return { done: n === 0, value: n };
    });
  }
  readMetadata(t) {
    return v(this, void 0, void 0, function* () {
      const e = yield this.source.read(t);
      if (!e)
        return qt;
      if (e.byteLength < t)
        throw new Error(cw(t, e.byteLength));
      return { done: !1, value: ve.decode(e) };
    });
  }
}
class dw extends ap {
  constructor(t) {
    super(new Uint8Array(0)), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof Gy ? t : new Gy(t);
  }
  next() {
    const { _json: t } = this;
    if (!this._schema)
      return this._schema = !0, { done: !1, value: ve.fromJSON(t.schema, Dt.Schema) };
    if (this._dictionaryIndex < t.dictionaries.length) {
      const e = t.dictionaries[this._dictionaryIndex++];
      return this._body = e.data.columns, { done: !1, value: ve.fromJSON(e, Dt.DictionaryBatch) };
    }
    if (this._batchIndex < t.batches.length) {
      const e = t.batches[this._batchIndex++];
      return this._body = e.columns, { done: !1, value: ve.fromJSON(e, Dt.RecordBatch) };
    }
    return this._body = [], qt;
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
      throw new Error(rp(t));
    return e.value;
  }
  readSchema() {
    const t = Dt.Schema, e = this.readMessage(t), n = e?.header();
    if (!e || !n)
      throw new Error(op(t));
    return n;
  }
}
const Su = 4, Qd = "ARROW1", Ta = new Uint8Array(Qd.length);
for (let i = 0; i < Qd.length; i += 1)
  Ta[i] = Qd.codePointAt(i);
function cp(i, t = 0) {
  for (let e = -1, n = Ta.length; ++e < n; )
    if (Ta[e] !== i[t + e])
      return !1;
  return !0;
}
const Xa = Ta.length, hw = Xa + Su, eT = Xa * 2 + Su;
class ui extends Af {
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
    return gs(e) ? e.then(() => this) : this;
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
    return qe.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return qe.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: !0 });
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
    return t instanceof ui ? t : jd(t) ? sT(t) : Jb(t) ? aT(t) : gs(t) ? v(this, void 0, void 0, function* () {
      return yield ui.from(yield t);
    }) : Qb(t) || Yh(t) || Zb(t) || sr(t) ? oT(new Is(t)) : rT(new Aa(t));
  }
  /** @nocollapse */
  static readAll(t) {
    return t instanceof ui ? t.isSync() ? ng(t) : sg(t) : jd(t) || ArrayBuffer.isView(t) || wo(t) || qb(t) ? ng(t) : sg(t);
  }
}
class mo extends ui {
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
    return ee(this, arguments, function* () {
      yield E(yield* cs(Te(this[Symbol.iterator]())));
    });
  }
}
class Fa extends ui {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return v(this, void 0, void 0, function* () {
      var t, e, n, s;
      const r = new Array();
      try {
        for (var o = !0, a = Te(this), c; c = yield a.next(), t = c.done, !t; o = !0) {
          s = c.value, o = !1;
          const l = s;
          r.push(l);
        }
      } catch (l) {
        e = { error: l };
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
class Ou extends mo {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class fw extends Fa {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class pw {
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
    const n = this._loadVectors(t, e, this.schema.fields), s = z({ type: new ye(this.schema.fields), length: t.length, children: n });
    return new ge(this.schema, s);
  }
  _loadDictionaryBatch(t, e) {
    const { id: n, isDelta: s } = t, { dictionaries: r, schema: o } = this, a = r.get(n), c = o.dictionaries.get(n), l = this._loadVectors(t.data, e, [c]);
    return (a && s ? a.concat(new x(l)) : new x(l)).memoize();
  }
  _loadVectors(t, e, n) {
    return new R0(e, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
class Kl extends pw {
  constructor(t, e) {
    super(e), this._reader = jd(t) ? new dw(this._handle = t) : new ap(this._handle = t);
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
    return this.closed || (this.autoDestroy = gw(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
  }
  throw(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : qt;
  }
  return(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : qt;
  }
  next() {
    if (this.closed)
      return qt;
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
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new sp(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}
class Gl extends pw {
  constructor(t, e) {
    super(e), this._reader = new uw(this._handle = t);
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
    return v(this, void 0, void 0, function* () {
      !this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
    });
  }
  open(t) {
    return v(this, void 0, void 0, function* () {
      return this.closed || (this.autoDestroy = gw(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
    });
  }
  throw(t) {
    return v(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : qt;
    });
  }
  return(t) {
    return v(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : qt;
    });
  }
  next() {
    return v(this, void 0, void 0, function* () {
      if (this.closed)
        return qt;
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
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new sp(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return v(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}
class yw extends Kl {
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
    super(t instanceof qy ? t : new qy(t), e);
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
      const s = this._reader.readMessage(Dt.RecordBatch);
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
      const s = this._reader.readMessage(Dt.DictionaryBatch);
      if (s?.isDictionaryBatch()) {
        const r = s.header(), o = this._reader.readMessageBody(s.bodyLength), a = this._loadDictionaryBatch(r, o);
        this.dictionaries.set(r.id, a);
      }
    }
  }
  _readFooter() {
    const { _handle: t } = this, e = t.size - hw, n = t.readInt32(e), s = t.readAt(e - n, n);
    return Ea.decode(s);
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
class iT extends Gl {
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
    super(t instanceof Hl ? t : new Hl(t, n), s);
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
    return v(this, void 0, void 0, function* () {
      if (!this.closed && !this._footer) {
        this.schema = (this._footer = yield this._readFooter()).schema;
        for (const n of this._footer.dictionaryBatches())
          n && (yield this._readDictionaryBatch(this._dictionaryIndex++));
      }
      return yield e.open.call(this, t);
    });
  }
  readRecordBatch(t) {
    return v(this, void 0, void 0, function* () {
      var e;
      if (this.closed)
        return null;
      this._footer || (yield this.open());
      const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
      if (n && (yield this._handle.seek(n.offset))) {
        const s = yield this._reader.readMessage(Dt.RecordBatch);
        if (s?.isRecordBatch()) {
          const r = s.header(), o = yield this._reader.readMessageBody(s.bodyLength);
          return this._loadRecordBatch(r, o);
        }
      }
      return null;
    });
  }
  _readDictionaryBatch(t) {
    return v(this, void 0, void 0, function* () {
      var e;
      const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
      if (n && (yield this._handle.seek(n.offset))) {
        const s = yield this._reader.readMessage(Dt.DictionaryBatch);
        if (s?.isDictionaryBatch()) {
          const r = s.header(), o = yield this._reader.readMessageBody(s.bodyLength), a = this._loadDictionaryBatch(r, o);
          this.dictionaries.set(r.id, a);
        }
      }
    });
  }
  _readFooter() {
    return v(this, void 0, void 0, function* () {
      const { _handle: t } = this;
      t._pending && (yield t._pending);
      const e = t.size - hw, n = yield t.readInt32(e), s = yield t.readAt(e - n, n);
      return Ea.decode(s);
    });
  }
  _readNextMessageAndValidate(t) {
    return v(this, void 0, void 0, function* () {
      if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
        const e = this._footer.getRecordBatch(this._recordBatchIndex);
        if (e && (yield this._handle.seek(e.offset)))
          return yield this._reader.readMessage(t);
      }
      return null;
    });
  }
}
class nT extends Kl {
  constructor(t, e) {
    super(t, e);
  }
  _loadVectors(t, e, n) {
    return new hA(e, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
function gw(i, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : i.autoDestroy;
}
function* ng(i) {
  const t = ui.from(i);
  try {
    if (!t.open({ autoDestroy: !1 }).closed)
      do
        yield t;
      while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function sg(i) {
  return ee(this, arguments, function* () {
    const e = yield E(ui.from(i));
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
function sT(i) {
  return new mo(new nT(i));
}
function rT(i) {
  const t = i.peek(Xa + 7 & -8);
  return t && t.byteLength >= 4 ? cp(t) ? new Ou(new yw(i.read())) : new mo(new Kl(i)) : new mo(new Kl((function* () {
  })()));
}
function oT(i) {
  return v(this, void 0, void 0, function* () {
    const t = yield i.peek(Xa + 7 & -8);
    return t && t.byteLength >= 4 ? cp(t) ? new Ou(new yw(yield i.read())) : new Fa(new Gl(i)) : new Fa(new Gl((function() {
      return ee(this, arguments, function* () {
      });
    })()));
  });
}
function aT(i) {
  return v(this, void 0, void 0, function* () {
    const { size: t } = yield i.stat(), e = new Hl(i, t);
    return t >= eT && cp(yield e.readAt(0, Xa + 7 & -8)) ? new fw(new iT(e)) : new Fa(new Gl(e));
  });
}
class Qt extends ut {
  /** @nocollapse */
  static assemble(...t) {
    const e = (s) => s.flatMap((r) => Array.isArray(r) ? e(r) : r instanceof ge ? r.data.children : r.data), n = new Qt();
    return n.visitMany(e(t)), n;
  }
  constructor() {
    super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [];
  }
  visit(t) {
    if (t instanceof x)
      return this.visitMany(t.data), this;
    const { type: e } = t;
    if (!M.isDictionary(e)) {
      const { length: n } = t;
      if (n > 2147483647)
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      if (M.isUnion(e))
        this.nodes.push(new Ss(n, 0));
      else {
        const { nullCount: s } = t;
        M.isNull(e) || Oi.call(this, s <= 0 ? new Uint8Array(0) : Ba(t.offset, n, t.nullBitmap)), this.nodes.push(new Ss(n, s));
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
function Oi(i) {
  const t = i.byteLength + 7 & -8;
  return this.buffers.push(i), this.bufferRegions.push(new tn(this._byteLength, t)), this._byteLength += t, this;
}
function cT(i) {
  var t;
  const { type: e, length: n, typeIds: s, valueOffsets: r } = i;
  if (Oi.call(this, s), e.mode === se.Sparse)
    return Zd.call(this, i);
  if (e.mode === se.Dense) {
    if (i.offset <= 0)
      return Oi.call(this, r), Zd.call(this, i);
    {
      const o = new Int32Array(n), a = /* @__PURE__ */ Object.create(null), c = /* @__PURE__ */ Object.create(null);
      for (let l, u, d = -1; ++d < n; )
        (l = s[d]) !== void 0 && ((u = a[l]) === void 0 && (u = a[l] = r[d]), o[d] = r[d] - u, c[l] = ((t = c[l]) !== null && t !== void 0 ? t : 0) + 1);
      Oi.call(this, o), this.visitMany(i.children.map((l, u) => {
        const d = e.typeIds[u], m = a[d], _ = c[d];
        return l.slice(m, Math.min(n, _));
      }));
    }
  }
  return this;
}
function lT(i) {
  let t;
  return i.nullCount >= i.length ? Oi.call(this, new Uint8Array(0)) : (t = i.values) instanceof Uint8Array ? Oi.call(this, Ba(i.offset, i.length, t)) : Oi.call(this, Na(i.values));
}
function Hn(i) {
  return Oi.call(this, i.values.subarray(0, i.length * i.stride));
}
function Du(i) {
  const { length: t, values: e, valueOffsets: n } = i, s = Wt(n[0]), r = Wt(n[t]), o = Math.min(r - s, e.byteLength - s);
  return Oi.call(this, Gh(-s, t + 1, n)), Oi.call(this, e.subarray(s, s + o)), this;
}
function lp(i) {
  const { length: t, valueOffsets: e } = i;
  if (e) {
    const { [0]: n, [t]: s } = e;
    return Oi.call(this, Gh(-n, t + 1, e)), this.visit(i.children[0].slice(n, s - n));
  }
  return this.visit(i.children[0]);
}
function Zd(i) {
  return this.visitMany(i.type.children.map((t, e) => i.children[e]).filter(Boolean))[0];
}
Qt.prototype.visitBool = lT;
Qt.prototype.visitInt = Hn;
Qt.prototype.visitFloat = Hn;
Qt.prototype.visitUtf8 = Du;
Qt.prototype.visitLargeUtf8 = Du;
Qt.prototype.visitBinary = Du;
Qt.prototype.visitLargeBinary = Du;
Qt.prototype.visitFixedSizeBinary = Hn;
Qt.prototype.visitDate = Hn;
Qt.prototype.visitTimestamp = Hn;
Qt.prototype.visitTime = Hn;
Qt.prototype.visitDecimal = Hn;
Qt.prototype.visitList = lp;
Qt.prototype.visitStruct = Zd;
Qt.prototype.visitUnion = cT;
Qt.prototype.visitInterval = Hn;
Qt.prototype.visitDuration = Hn;
Qt.prototype.visitFixedSizeList = lp;
Qt.prototype.visitMap = lp;
class uT extends ut {
  visit(t) {
    return t == null ? void 0 : super.visit(t);
  }
  visitNull({ typeId: t }) {
    return { name: ct[t].toLowerCase() };
  }
  visitInt({ typeId: t, bitWidth: e, isSigned: n }) {
    return { name: ct[t].toLowerCase(), bitWidth: e, isSigned: n };
  }
  visitFloat({ typeId: t, precision: e }) {
    return { name: ct[t].toLowerCase(), precision: ie[e] };
  }
  visitBinary({ typeId: t }) {
    return { name: ct[t].toLowerCase() };
  }
  visitLargeBinary({ typeId: t }) {
    return { name: ct[t].toLowerCase() };
  }
  visitBool({ typeId: t }) {
    return { name: ct[t].toLowerCase() };
  }
  visitUtf8({ typeId: t }) {
    return { name: ct[t].toLowerCase() };
  }
  visitLargeUtf8({ typeId: t }) {
    return { name: ct[t].toLowerCase() };
  }
  visitDecimal({ typeId: t, scale: e, precision: n, bitWidth: s }) {
    return { name: ct[t].toLowerCase(), scale: e, precision: n, bitWidth: s };
  }
  visitDate({ typeId: t, unit: e }) {
    return { name: ct[t].toLowerCase(), unit: _e[e] };
  }
  visitTime({ typeId: t, unit: e, bitWidth: n }) {
    return { name: ct[t].toLowerCase(), unit: R[e], bitWidth: n };
  }
  visitTimestamp({ typeId: t, timezone: e, unit: n }) {
    return { name: ct[t].toLowerCase(), unit: R[n], timezone: e };
  }
  visitInterval({ typeId: t, unit: e }) {
    return { name: ct[t].toLowerCase(), unit: zt[e] };
  }
  visitDuration({ typeId: t, unit: e }) {
    return { name: ct[t].toLocaleLowerCase(), unit: R[e] };
  }
  visitList({ typeId: t }) {
    return { name: ct[t].toLowerCase() };
  }
  visitStruct({ typeId: t }) {
    return { name: ct[t].toLowerCase() };
  }
  visitUnion({ typeId: t, mode: e, typeIds: n }) {
    return {
      name: ct[t].toLowerCase(),
      mode: se[e].toUpperCase(),
      typeIds: [...n]
    };
  }
  visitDictionary(t) {
    return this.visit(t.dictionary);
  }
  visitFixedSizeBinary({ typeId: t, byteWidth: e }) {
    return { name: ct[t].toLowerCase(), byteWidth: e };
  }
  visitFixedSizeList({ typeId: t, listSize: e }) {
    return { name: ct[t].toLowerCase(), listSize: e };
  }
  visitMap({ typeId: t, keysSorted: e }) {
    return { name: ct[t].toLowerCase(), keysSorted: e };
  }
}
class Bu extends ut {
  /** @nocollapse */
  static assemble(...t) {
    const e = new Bu();
    return t.map(({ schema: n, data: s }) => e.visitMany(n.fields, s.children));
  }
  visit({ name: t }, e) {
    const { length: n } = e, { offset: s, nullCount: r, nullBitmap: o } = e, a = M.isDictionary(e.type) ? e.type.indices : e.type, c = Object.assign([], e.buffers, { [_i.VALIDITY]: void 0 });
    return Object.assign({ name: t, count: n, VALIDITY: M.isNull(a) || M.isUnion(a) ? void 0 : r <= 0 ? Array.from({ length: n }, () => 1) : [...new yo(o, s, n, null, Df)] }, super.visit(e.clone(a, s, n, 0, c)));
  }
  visitNull() {
    return {};
  }
  visitBool({ values: t, offset: e, length: n }) {
    return { DATA: [...new yo(t, e, n, null, _u)] };
  }
  visitInt(t) {
    return {
      DATA: t.type.bitWidth < 64 ? [...t.values] : [...Qn(t.values, 2)]
    };
  }
  visitFloat(t) {
    return { DATA: [...t.values] };
  }
  visitUtf8(t) {
    return { DATA: [...new x([t])], OFFSET: [...t.valueOffsets] };
  }
  visitLargeUtf8(t) {
    return { DATA: [...new x([t])], OFFSET: [...Qn(t.valueOffsets, 2)] };
  }
  visitBinary(t) {
    return { DATA: [...rd(new x([t]))], OFFSET: [...t.valueOffsets] };
  }
  visitLargeBinary(t) {
    return { DATA: [...rd(new x([t]))], OFFSET: [...Qn(t.valueOffsets, 2)] };
  }
  visitFixedSizeBinary(t) {
    return { DATA: [...rd(new x([t]))] };
  }
  visitDate(t) {
    return {
      DATA: t.type.unit === _e.DAY ? [...t.values] : [...Qn(t.values, 2)]
    };
  }
  visitTimestamp(t) {
    return { DATA: [...Qn(t.values, 2)] };
  }
  visitTime(t) {
    return {
      DATA: t.type.unit < R.MICROSECOND ? [...t.values] : [...Qn(t.values, 2)]
    };
  }
  visitDecimal(t) {
    return { DATA: [...Qn(t.values, 4)] };
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
      OFFSET: t.type.mode === se.Dense ? [...t.valueOffsets] : void 0,
      children: this.visitMany(t.type.children, t.children)
    };
  }
  visitInterval(t) {
    switch (t.type.unit) {
      case zt.YEAR_MONTH:
        return { DATA: [...t.values] };
      case zt.DAY_TIME:
        return { DATA: F0(t.values) };
      case zt.MONTH_DAY_NANO:
        return { DATA: M0(t.values, !0) };
    }
  }
  visitDuration(t) {
    return { DATA: [...Qn(t.values, 2)] };
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
function* rd(i) {
  for (const t of i)
    yield t.reduce((e, n) => `${e}${("0" + (n & 255).toString(16)).slice(-2)}`, "").toUpperCase();
}
function* Qn(i, t) {
  const e = new Uint32Array(i.buffer);
  for (let n = -1, s = e.length / t; ++n < s; )
    yield `${Wa.new(e.subarray((n + 0) * t, (n + 1) * t), !1)}`;
}
class tc extends Af {
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
    super(), this._position = 0, this._started = !1, this._sink = new eo(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), We(t) || (t = { autoDestroy: !0, writeLegacyIpcFormat: !1 }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : !0, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : !1;
  }
  toString(t = !1) {
    return this._sink.toString(t);
  }
  toUint8Array(t = !1) {
    return this._sink.toUint8Array(t);
  }
  writeAll(t) {
    return gs(t) ? t.then((e) => this.writeAll(e)) : sr(t) ? hp(this, t) : dp(this, t);
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
    return t === this._sink || t instanceof eo ? this._sink = t : (this._sink = new eo(), t && QB(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && ZB(t) && this.toNodeStream({ objectMode: !1 }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!e || !Yl(e, this._schema)) && (e == null ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = e, this._writeSchema(e))), this;
  }
  write(t) {
    let e = null;
    if (this._sink) {
      if (t == null)
        return this.finish() && void 0;
      if (t instanceof de && !(e = t.schema))
        return this.finish() && void 0;
      if (t instanceof ge && !(e = t.schema))
        return this.finish() && void 0;
    } else throw new Error("RecordBatchWriter is closed");
    if (e && !Yl(e, this._schema)) {
      if (this._started && this._autoDestroy)
        return this.close();
      this.reset(this._sink, e);
    }
    t instanceof ge ? t instanceof sp || this._writeRecordBatch(t) : t instanceof de ? this.writeAll(t.batches) : wo(t) && this.writeAll(t);
  }
  _writeMessage(t, e = 8) {
    const n = e - 1, s = ve.encode(t), r = s.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, a = r + o + n & ~n, c = a - r - o;
    return t.headerType === Dt.RecordBatch ? this._recordBatchBlocks.push(new an(a, t.bodyLength, this._position)) : t.headerType === Dt.DictionaryBatch && this._dictionaryBlocks.push(new an(a, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(a - o)), r > 0 && this._write(s), this._writePadding(c);
  }
  _write(t) {
    if (this._started) {
      const e = ht(t);
      e && e.byteLength > 0 && (this._sink.write(e), this._position += e.byteLength);
    }
    return this;
  }
  _writeSchema(t) {
    return this._writeMessage(ve.from(t));
  }
  // @ts-ignore
  _writeFooter(t) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(Ta);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: e, nodes: n, bufferRegions: s, buffers: r } = Qt.assemble(t), o = new ii(t.numRows, n, s), a = ve.from(o, e);
    return this._writeDictionaries(t)._writeMessage(a)._writeBodyBuffers(r);
  }
  _writeDictionaryBatch(t, e, n = !1) {
    const { byteLength: s, nodes: r, bufferRegions: o, buffers: a } = Qt.assemble(new x([t])), c = new ii(t.length, r, o), l = new ln(c, e, n), u = ve.from(l, s);
    return this._writeMessage(u)._writeBodyBuffers(a);
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
class ec extends tc {
  /** @nocollapse */
  static writeAll(t, e) {
    const n = new ec(e);
    return gs(t) ? t.then((s) => n.writeAll(s)) : sr(t) ? hp(n, t) : dp(n, t);
  }
}
class ic extends tc {
  /** @nocollapse */
  static writeAll(t) {
    const e = new ic();
    return gs(t) ? t.then((n) => e.writeAll(n)) : sr(t) ? hp(e, t) : dp(e, t);
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
    const e = Ea.encode(new Ea(t, Zt.V5, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic();
  }
}
class up extends tc {
  /** @nocollapse */
  static writeAll(t) {
    return new up().writeAll(t);
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
  "schema": ${JSON.stringify({ fields: t.fields.map((e) => mw(e)) }, null, 2)}`);
  }
  _writeDictionaries(t) {
    return t.dictionaries.size > 0 && this._recordBatchesWithDictionaries.push(t), this;
  }
  _writeDictionaryBatch(t, e, n = !1) {
    return this._write(this._dictionaryBlocks.length === 0 ? "    " : `,
    `), this._write(dT(t, e, n)), this._dictionaryBlocks.push(new an(0, 0, 0)), this;
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
    `), this._write(hT(this._recordBatches[t])), this._recordBatchBlocks.push(new an(0, 0, 0));
      this._write(`
  ]`);
    }
    return this._schema && this._write(`
}`), this._recordBatchesWithDictionaries = [], this._recordBatches = [], super.close();
  }
}
function dp(i, t) {
  let e = t;
  t instanceof de && (e = t.batches, i.reset(void 0, t.schema));
  for (const n of e)
    i.write(n);
  return i.finish();
}
function hp(i, t) {
  return v(this, void 0, void 0, function* () {
    var e, n, s, r, o, a, c;
    try {
      for (e = !0, n = Te(t); s = yield n.next(), r = s.done, !r; e = !0) {
        c = s.value, e = !1;
        const l = c;
        i.write(l);
      }
    } catch (l) {
      o = { error: l };
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
function mw({ name: i, type: t, nullable: e }) {
  const n = new uT();
  return {
    name: i,
    nullable: e,
    type: n.visit(t),
    children: (t.children || []).map((s) => mw(s)),
    dictionary: M.isDictionary(t) ? {
      id: t.id,
      isOrdered: t.isOrdered,
      indexType: n.visit(t.indices)
    } : void 0
  };
}
function dT(i, t, e = !1) {
  const [n] = Bu.assemble(new ge({ [t]: i }));
  return JSON.stringify({
    id: t,
    isDelta: e,
    data: {
      count: i.length,
      columns: n
    }
  }, null, 2);
}
function hT(i) {
  const [t] = Bu.assemble(i);
  return JSON.stringify({
    count: i.numRows,
    columns: t
  }, null, 2);
}
function fT(i, t) {
  if (sr(i))
    return yT(i, t);
  if (wo(i))
    return pT(i, t);
  throw new Error("toDOMStream() must be called with an Iterable or AsyncIterable");
}
function pT(i, t) {
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
      e?.return && e.return(), e = null;
    }
  }), Object.assign({ highWaterMark: n ? s : void 0 }, t));
  function r(o, a) {
    let c, l = null, u = o.desiredSize || null;
    for (; !(l = a.next(n ? u : null)).done; )
      if (ArrayBuffer.isView(l.value) && (c = ht(l.value)) && (u != null && n && (u = u - c.byteLength + 1), l.value = c), o.enqueue(l.value), u != null && --u <= 0)
        return;
    o.close();
  }
}
function yT(i, t) {
  let e = null;
  const n = t?.type === "bytes" || !1, s = t?.highWaterMark || Math.pow(2, 24);
  return new ReadableStream(Object.assign(Object.assign({}, t), {
    start(o) {
      return v(this, void 0, void 0, function* () {
        yield r(o, e || (e = i[Symbol.asyncIterator]()));
      });
    },
    pull(o) {
      return v(this, void 0, void 0, function* () {
        e ? yield r(o, e) : o.close();
      });
    },
    cancel() {
      return v(this, void 0, void 0, function* () {
        e?.return && (yield e.return()), e = null;
      });
    }
  }), Object.assign({ highWaterMark: n ? s : void 0 }, t));
  function r(o, a) {
    return v(this, void 0, void 0, function* () {
      let c, l = null, u = o.desiredSize || null;
      for (; !(l = yield a.next(n ? u : null)).done; )
        if (ArrayBuffer.isView(l.value) && (c = ht(l.value)) && (u != null && n && (u = u - c.byteLength + 1), l.value = c), o.enqueue(l.value), u != null && --u <= 0)
          return;
      o.close();
    });
  }
}
function gT(i) {
  return new mT(i);
}
class mT {
  constructor(t) {
    this._numChunks = 0, this._finished = !1, this._bufferedSize = 0;
    const { ["readableStrategy"]: e, ["writableStrategy"]: n, ["queueingStrategy"]: s = "count" } = t, r = M1(t, ["readableStrategy", "writableStrategy", "queueingStrategy"]);
    this._controller = null, this._builder = ir(r), this._getSize = s !== "bytes" ? rg : og;
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
      size: s !== "bytes" ? rg : og
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
const rg = (i) => {
  var t;
  return (t = i?.length) !== null && t !== void 0 ? t : 0;
}, og = (i) => {
  var t;
  return (t = i?.byteLength) !== null && t !== void 0 ? t : 0;
};
function fp(i, t) {
  const e = new eo();
  let n = null;
  const s = new ReadableStream({
    cancel() {
      return v(this, void 0, void 0, function* () {
        yield e.close();
      });
    },
    start(a) {
      return v(this, void 0, void 0, function* () {
        yield o(a, n || (n = yield r()));
      });
    },
    pull(a) {
      return v(this, void 0, void 0, function* () {
        n ? yield o(a, n) : a.close();
      });
    }
  });
  return { writable: new WritableStream(e, Object.assign({ highWaterMark: Math.pow(2, 14) }, i)), readable: s };
  function r() {
    return v(this, void 0, void 0, function* () {
      return yield (yield ui.from(e)).open(t);
    });
  }
  function o(a, c) {
    return v(this, void 0, void 0, function* () {
      let l = a.desiredSize, u = null;
      for (; !(u = yield c.next()).done; )
        if (a.enqueue(u.value), l != null && --l <= 0)
          return;
      a.close();
    });
  }
}
function pp(i, t) {
  const e = new this(i), n = new Is(e), s = new ReadableStream({
    // type: 'bytes',
    cancel() {
      return v(this, void 0, void 0, function* () {
        yield n.cancel();
      });
    },
    pull(o) {
      return v(this, void 0, void 0, function* () {
        yield r(o);
      });
    },
    start(o) {
      return v(this, void 0, void 0, function* () {
        yield r(o);
      });
    }
  }, Object.assign({ highWaterMark: Math.pow(2, 14) }, t));
  return { writable: new WritableStream(e, i), readable: s };
  function r(o) {
    return v(this, void 0, void 0, function* () {
      let a = null, c = o.desiredSize;
      for (; a = yield n.read(c || null); )
        if (o.enqueue(a), c != null && (c -= a.byteLength) <= 0)
          return;
      o.close();
    });
  }
}
function _w(i) {
  const t = ui.from(i);
  return gs(t) ? t.then((e) => _w(e)) : t.isAsync() ? t.readAll().then((e) => new de(e)) : new de(t.readAll());
}
function _T(i, t = "stream") {
  return (t === "stream" ? ec : ic).writeAll(i).toUint8Array(!0);
}
const bT = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, UN), uA), GE), iE), DN), YE), MN), dA), {
  compareSchemas: Yl,
  compareFields: IA,
  compareTypes: tw
});
qe.toDOMStream = fT;
Se.throughDOM = gT;
ui.throughDOM = fp;
Ou.throughDOM = fp;
mo.throughDOM = fp;
tc.throughDOM = pp;
ic.throughDOM = pp;
ec.throughDOM = pp;
const cM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AsyncByteQueue: eo,
  AsyncByteStream: Is,
  AsyncMessageReader: uw,
  AsyncRecordBatchFileReader: fw,
  AsyncRecordBatchStreamReader: Fa,
  Binary: wa,
  BinaryBuilder: Mf,
  Bool: ho,
  BoolBuilder: L0,
  get BufferType() {
    return _i;
  },
  Builder: Se,
  ByteStream: Aa,
  Data: Ot,
  DataType: M,
  DateBuilder: Ga,
  DateDay: xN,
  DateDayBuilder: Lf,
  DateMillisecond: CN,
  DateMillisecondBuilder: Uf,
  get DateUnit() {
    return _e;
  },
  Date_: tr,
  Decimal: Oa,
  DecimalBuilder: xf,
  DenseUnion: ZN,
  DenseUnionBuilder: X0,
  Dictionary: xn,
  DictionaryBuilder: U0,
  Duration: Un,
  DurationBuilder: or,
  DurationMicrosecond: JN,
  DurationMicrosecondBuilder: zf,
  DurationMillisecond: qN,
  DurationMillisecondBuilder: jf,
  DurationNanosecond: QN,
  DurationNanosecondBuilder: Wf,
  DurationSecond: GN,
  DurationSecondBuilder: kf,
  Field: Bt,
  FixedSizeBinary: Da,
  FixedSizeBinaryBuilder: Cf,
  FixedSizeList: fo,
  FixedSizeListBuilder: x0,
  Float: bs,
  Float16: Mv,
  Float16Builder: C0,
  Float32: nf,
  Float32Builder: $0,
  Float64: pu,
  Float64Builder: V0,
  FloatBuilder: qa,
  Int: Fe,
  Int16: Qh,
  Int16Builder: k0,
  Int32: _s,
  Int32Builder: j0,
  Int64: fu,
  Int64Builder: z0,
  Int8: Jh,
  Int8Builder: P0,
  IntBuilder: dn,
  Interval: vs,
  IntervalBuilder: So,
  IntervalDayTime: HN,
  IntervalDayTimeBuilder: $f,
  IntervalMonthDayNano: KN,
  IntervalMonthDayNanoBuilder: Pf,
  get IntervalUnit() {
    return zt;
  },
  IntervalYearMonth: YN,
  IntervalYearMonthBuilder: Vf,
  JSONMessageReader: dw,
  LargeBinary: Ia,
  LargeBinaryBuilder: Rf,
  LargeUtf8: Sa,
  LargeUtf8Builder: tp,
  List: er,
  ListBuilder: G0,
  MapBuilder: q0,
  MapRow: Ha,
  Map_: po,
  Message: ve,
  get MessageHeader() {
    return Dt;
  },
  MessageReader: ap,
  get MetadataVersion() {
    return Zt;
  },
  Null: on,
  NullBuilder: J0,
  get Precision() {
    return ie;
  },
  RecordBatch: ge,
  RecordBatchFileReader: Ou,
  RecordBatchFileWriter: ic,
  RecordBatchJSONWriter: up,
  RecordBatchReader: ui,
  RecordBatchStreamReader: mo,
  RecordBatchStreamWriter: ec,
  RecordBatchWriter: tc,
  Schema: At,
  SparseUnion: XN,
  SparseUnionBuilder: Z0,
  Struct: ye,
  StructBuilder: Q0,
  StructRow: yu,
  Table: de,
  Time: Rn,
  TimeBuilder: cr,
  TimeMicrosecond: PN,
  TimeMicrosecondBuilder: Qf,
  TimeMillisecond: VN,
  TimeMillisecondBuilder: Jf,
  TimeNanosecond: kN,
  TimeNanosecondBuilder: Zf,
  TimeSecond: $N,
  TimeSecondBuilder: qf,
  get TimeUnit() {
    return R;
  },
  Timestamp: Ln,
  TimestampBuilder: ar,
  TimestampMicrosecond: zN,
  TimestampMicrosecondBuilder: Kf,
  TimestampMillisecond: Rv,
  TimestampMillisecondBuilder: Yf,
  TimestampNanosecond: WN,
  TimestampNanosecondBuilder: Gf,
  TimestampSecond: jN,
  TimestampSecondBuilder: Hf,
  get Type() {
    return y;
  },
  Uint16: Xh,
  Uint16Builder: H0,
  Uint32: tf,
  Uint32Builder: Y0,
  Uint64: ef,
  Uint64Builder: K0,
  Uint8: Zh,
  Uint8Builder: W0,
  Union: ws,
  UnionBuilder: vu,
  get UnionMode() {
    return se;
  },
  Utf8: uo,
  Utf8Builder: Xf,
  Vector: x,
  Visitor: ut,
  builderThroughAsyncIterable: OA,
  builderThroughIterable: ew,
  makeBuilder: ir,
  makeData: z,
  makeTable: NA,
  makeVector: bu,
  tableFromArrays: EA,
  tableFromIPC: _w,
  tableFromJSON: SA,
  tableToIPC: _T,
  util: bT,
  vectorFromArray: np
}, Symbol.toStringTag, { value: "Module" })), vT = { class: "result-app" }, wT = {
  key: 0,
  class: "alert alert-danger mt-3",
  role: "alert"
}, IT = {
  key: 1,
  class: "mt-3 d-flex align-items-center gap-2 text-muted"
}, ST = {
  key: 2,
  class: "table-responsive mt-4"
}, OT = { class: "table table-striped table-sm align-middle" }, DT = /* @__PURE__ */ UI({
  __name: "ResultApp",
  props: {
    state: {}
  },
  setup(i) {
    const e = i.state;
    return (n, s) => (yi(), xi("div", vT, [
      Zn(e).error ? (yi(), xi("div", wT, pc(Zn(e).error), 1)) : Zn(e).isLoading ? (yi(), xi("div", IT, [...s[0] || (s[0] = [
        is("span", {
          class: "spinner-border spinner-border-sm",
          role: "status",
          "aria-hidden": "true"
        }, null, -1),
        is("span", null, "Running query...", -1)
      ])])) : Zn(e).rows.length > 0 && Zn(e).columns.length > 0 ? (yi(), xi("div", ST, [
        is("table", OT, [
          is("thead", null, [
            is("tr", null, [
              (yi(!0), xi(Je, null, xu(Zn(e).columns, (r) => (yi(), xi("th", {
                key: r,
                scope: "col"
              }, pc(r), 1))), 128))
            ])
          ]),
          is("tbody", null, [
            (yi(!0), xi(Je, null, xu(Zn(e).rows, (r, o) => (yi(), xi("tr", { key: o }, [
              (yi(!0), xi(Je, null, xu(r, (a, c) => (yi(), xi("td", {
                key: c,
                class: "text-nowrap"
              }, pc(a), 1))), 128))
            ]))), 128))
          ])
        ])
      ])) : kS("", !0)
    ]));
  }
}), BT = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [n, s] of t)
    e[n] = s;
  return e;
}, NT = /* @__PURE__ */ BT(DT, [["__scopeId", "data-v-a13ff255"]]), {
  AsyncDuckDB: lM,
  AsyncDuckDBConnection: uM,
  ConsoleLogger: dM,
  selectBundle: hM
} = KB, ca = {
  duckDbPromise: null,
  httpFsInitialized: !1
}, od = /* @__PURE__ */ new WeakMap();
async function ET(i) {
  return ca.duckDbPromise || (ca.duckDbPromise = (async () => {
    if (!i)
      throw new Error("DuckDB configuration is required.");
    const e = await import(`${i.bundleBasePath}/${i.moduleLoader}`), n = `${i.bundleBasePath}/${i.mainWorker}`, s = new Worker(n, { type: "module" }), r = new e.ConsoleLogger(), o = new e.AsyncDuckDB(r, s), a = `${i.bundleBasePath}/${i.mainModule}`, c = i.pthreadWorker ? `${i.bundleBasePath}/${i.pthreadWorker}` : null;
    return await o.instantiate(a, c ?? void 0), { loader: e, db: o, worker: s };
  })()), ca.duckDbPromise;
}
async function AT(i) {
  if (!ca.httpFsInitialized) {
    try {
      await i.query("INSTALL 'httpfs';");
    } catch (t) {
      if (!(typeof t?.message == "string" ? t.message : String(t ?? "")).includes("already installed"))
        throw t;
    }
    await i.query("LOAD 'httpfs';"), ca.httpFsInitialized = !0;
  }
}
function TT(i) {
  return i == null ? "" : typeof i == "object" ? JSON.stringify(i) : String(i);
}
function FT(i) {
  if (!i || i.startsWith("http://") || i.startsWith("https://"))
    return i;
  const t = typeof window == "object" && window.location ? window.location.origin : globalThis.location?.origin ?? "";
  return new URL(i, t).toString();
}
function MT(i) {
  return Array.isArray(i) ? i.map((t) => (Array.isArray(t?.values) ? t.values : []).map((n) => String(n ?? ""))) : [];
}
function RT(i) {
  if (!i)
    throw new Error("A host element is required to mount the result application.");
  return i;
}
function fM(i, t) {
  if (!t || typeof t.bundleBasePath != "string")
    throw new Error("DuckDB configuration is required.");
  const e = RT(i), n = od.get(e);
  if (n)
    return n.handle;
  const s = {
    bundleBasePath: t.bundleBasePath,
    mainModule: t.mainModule,
    mainWorker: t.mainWorker,
    moduleLoader: t.moduleLoader,
    pthreadWorker: t.pthreadWorker ?? null
  };
  e.innerHTML = "";
  const r = tu({
    columns: [],
    rows: [],
    error: "",
    isLoading: !1
  }), o = D1(NT, { state: r });
  o.mount(e);
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
        const m = await LT(s, u, d);
        r.columns = Array.isArray(m.columns) ? [...m.columns] : [], r.rows = MT(m.rows);
      } catch (m) {
        r.error = m instanceof Error ? m.message : String(m ?? "");
      } finally {
        r.isLoading = !1;
      }
    },
    reset() {
      r.error = "", r.columns = [], r.rows = [], r.isLoading = !1;
    },
    unmount() {
      o.unmount(), e.innerHTML = "", od.delete(e);
    }
  };
  return od.set(e, { app: o, handle: a }), a;
}
async function LT(i, t, e) {
  if (!i)
    throw new Error("DuckDB configuration is required.");
  if (!t)
    throw new Error("A parquet URL must be provided.");
  const { db: n } = await ET(i), s = await n.connect();
  try {
    await AT(s);
    const r = FT(t), o = JSON.stringify(r);
    try {
      await s.query(`CREATE OR REPLACE TEMP VIEW parquet_source AS SELECT * FROM read_parquet(${o});`);
      const a = await s.query(e), c = Array.isArray(a?.schema?.fields) ? a.schema.fields.map((u) => u.name ?? "").filter((u) => !!u) : [], l = a.toArray().map((u) => c.map((d) => TT(u[d])));
      return UT(a), {
        columns: c,
        rows: l.map((u) => ({ values: u }))
      };
    } finally {
      await s.query("DROP VIEW IF EXISTS parquet_source;");
    }
  } finally {
    await s.close();
  }
}
function UT(i) {
  typeof i.close == "function" ? i.close() : typeof i.release == "function" && i.release();
}
export {
  lM as AsyncDuckDB,
  uM as AsyncDuckDBConnection,
  dM as ConsoleLogger,
  cM as arrow,
  fM as createResultApp,
  LT as executeQuery,
  ET as loadDuckDb,
  hM as selectBundle
};
//# sourceMappingURL=duckdb-browser-bundle.js.map
