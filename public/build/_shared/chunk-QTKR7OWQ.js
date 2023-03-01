import {
  onIdTokenChanged
} from "/build/_shared/chunk-A4KF3ELC.js";
import {
  Component,
  Deferred,
  ErrorFactory,
  FirebaseError,
  LogLevel,
  Logger,
  SDK_VERSION,
  Sha1,
  _getProvider,
  _registerComponent,
  assert,
  assertionError,
  base64,
  base64Encode,
  calculateBackoffMillis,
  contains,
  createMockUserToken,
  deepCopy,
  deepEqual,
  errorPrefix,
  getApp,
  getApps,
  getDefaultEmulatorHostnameAndPort,
  getModularInstance,
  getUA,
  initializeApp,
  isAdmin,
  isEmpty,
  isIndexedDBAvailable,
  isMobileCordova,
  isNodeSdk,
  isReactNative,
  isSafari,
  isValidFormat,
  jsonEval,
  map,
  querystring,
  registerVersion,
  safeGet,
  stringLength,
  stringToByteArray,
  stringify
} from "/build/_shared/chunk-BCUDKLQK.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@firebase/webchannel-wrapper/dist/index.esm2017.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
var esm = {};
var k;
var goog = goog || {};
var l = commonjsGlobal || self;
function aa() {
}
function ba(a) {
  var b3 = typeof a;
  b3 = "object" != b3 ? b3 : a ? Array.isArray(a) ? "array" : b3 : "null";
  return "array" == b3 || "object" == b3 && "number" == typeof a.length;
}
function p(a) {
  var b3 = typeof a;
  return "object" == b3 && null != a || "function" == b3;
}
function ca(a) {
  return Object.prototype.hasOwnProperty.call(a, da) && a[da] || (a[da] = ++ea);
}
var da = "closure_uid_" + (1e9 * Math.random() >>> 0);
var ea = 0;
function fa(a, b3, c) {
  return a.call.apply(a.bind, arguments);
}
function ha(a, b3, c) {
  if (!a)
    throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b3, e);
    };
  }
  return function() {
    return a.apply(b3, arguments);
  };
}
function q(a, b3, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q = fa : q = ha;
  return q.apply(null, arguments);
}
function ia(a, b3) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}
function t(a, b3) {
  function c() {
  }
  c.prototype = b3.prototype;
  a.X = b3.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.Wb = function(d, e, f2) {
    for (var h = Array(arguments.length - 2), n = 2; n < arguments.length; n++)
      h[n - 2] = arguments[n];
    return b3.prototype[e].apply(d, h);
  };
}
function v() {
  this.s = this.s;
  this.o = this.o;
}
var ja = 0;
v.prototype.s = false;
v.prototype.na = function() {
  if (!this.s && (this.s = true, this.M(), 0 != ja)) {
    ca(this);
  }
};
v.prototype.M = function() {
  if (this.o)
    for (; this.o.length; )
      this.o.shift()();
};
var la = Array.prototype.indexOf ? function(a, b3) {
  return Array.prototype.indexOf.call(a, b3, void 0);
} : function(a, b3) {
  if ("string" === typeof a)
    return "string" !== typeof b3 || 1 != b3.length ? -1 : a.indexOf(b3, 0);
  for (let c = 0; c < a.length; c++)
    if (c in a && a[c] === b3)
      return c;
  return -1;
};
function ma(a) {
  const b3 = a.length;
  if (0 < b3) {
    const c = Array(b3);
    for (let d = 0; d < b3; d++)
      c[d] = a[d];
    return c;
  }
  return [];
}
function na(a, b3) {
  for (let c = 1; c < arguments.length; c++) {
    const d = arguments[c];
    if (ba(d)) {
      const e = a.length || 0, f2 = d.length || 0;
      a.length = e + f2;
      for (let h = 0; h < f2; h++)
        a[e + h] = d[h];
    } else
      a.push(d);
  }
}
function w(a, b3) {
  this.type = a;
  this.g = this.target = b3;
  this.defaultPrevented = false;
}
w.prototype.h = function() {
  this.defaultPrevented = true;
};
var oa = function() {
  if (!l.addEventListener || !Object.defineProperty)
    return false;
  var a = false, b3 = Object.defineProperty({}, "passive", { get: function() {
    a = true;
  } });
  try {
    l.addEventListener("test", aa, b3), l.removeEventListener("test", aa, b3);
  } catch (c) {
  }
  return a;
}();
function pa(a) {
  return /^[\s\xa0]*$/.test(a);
}
var qa = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};
function ra(a, b3) {
  return a < b3 ? -1 : a > b3 ? 1 : 0;
}
function sa() {
  var a = l.navigator;
  return a && (a = a.userAgent) ? a : "";
}
function x(a) {
  return -1 != sa().indexOf(a);
}
function ta(a) {
  ta[" "](a);
  return a;
}
ta[" "] = aa;
function ua(a) {
  var b3 = va;
  return Object.prototype.hasOwnProperty.call(b3, 9) ? b3[9] : b3[9] = a(9);
}
var wa = x("Opera");
var y = x("Trident") || x("MSIE");
var xa = x("Edge");
var ya = xa || y;
var za = x("Gecko") && !(-1 != sa().toLowerCase().indexOf("webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge");
var Aa = -1 != sa().toLowerCase().indexOf("webkit") && !x("Edge");
function Ba() {
  var a = l.document;
  return a ? a.documentMode : void 0;
}
var Ea;
a: {
  Fa = "", Ga = function() {
    var a = sa();
    if (za)
      return /rv:([^\);]+)(\)|;)/.exec(a);
    if (xa)
      return /Edge\/([\d\.]+)/.exec(a);
    if (y)
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (Aa)
      return /WebKit\/(\S+)/.exec(a);
    if (wa)
      return /(?:Version)[ \/]?(\S+)/.exec(a);
  }();
  Ga && (Fa = Ga ? Ga[1] : "");
  if (y) {
    Ha = Ba();
    if (null != Ha && Ha > parseFloat(Fa)) {
      Ea = String(Ha);
      break a;
    }
  }
  Ea = Fa;
}
var Fa;
var Ga;
var Ha;
var va = {};
function Ia() {
  return ua(function() {
    let a = 0;
    const b3 = qa(String(Ea)).split("."), c = qa("9").split("."), d = Math.max(b3.length, c.length);
    for (let h = 0; 0 == a && h < d; h++) {
      var e = b3[h] || "", f2 = c[h] || "";
      do {
        e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
        f2 = /(\d*)(\D*)(.*)/.exec(f2) || ["", "", "", ""];
        if (0 == e[0].length && 0 == f2[0].length)
          break;
        a = ra(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f2[1].length ? 0 : parseInt(f2[1], 10)) || ra(0 == e[2].length, 0 == f2[2].length) || ra(e[2], f2[2]);
        e = e[3];
        f2 = f2[3];
      } while (0 == a);
    }
    return 0 <= a;
  });
}
var Ja;
if (l.document && y) {
  Ka2 = Ba();
  Ja = Ka2 ? Ka2 : parseInt(Ea, 10) || void 0;
} else
  Ja = void 0;
var Ka2;
var La = Ja;
function z(a, b3) {
  w.call(this, a ? a.type : "");
  this.relatedTarget = this.g = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.i = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.g = b3;
    if (b3 = a.relatedTarget) {
      if (za) {
        a: {
          try {
            ta(b3.nodeName);
            var e = true;
            break a;
          } catch (f2) {
          }
          e = false;
        }
        e || (b3 = null);
      }
    } else
      "mouseover" == c ? b3 = a.fromElement : "mouseout" == c && (b3 = a.toElement);
    this.relatedTarget = b3;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ma[a.pointerType] || "";
    this.state = a.state;
    this.i = a;
    a.defaultPrevented && z.X.h.call(this);
  }
}
t(z, w);
var Ma = { 2: "touch", 3: "pen", 4: "mouse" };
z.prototype.h = function() {
  z.X.h.call(this);
  var a = this.i;
  a.preventDefault ? a.preventDefault() : a.returnValue = false;
};
var A = "closure_listenable_" + (1e6 * Math.random() | 0);
var Na = 0;
function Oa(a, b3, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b3;
  this.type = c;
  this.capture = !!d;
  this.ha = e;
  this.key = ++Na;
  this.ba = this.ea = false;
}
function Pa(a) {
  a.ba = true;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.ha = null;
}
function Qa(a, b3, c) {
  for (const d in a)
    b3.call(c, a[d], d, a);
}
function Ra(a) {
  const b3 = {};
  for (const c in a)
    b3[c] = a[c];
  return b3;
}
var Sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ta(a, b3) {
  let c, d;
  for (let e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
      a[c] = d[c];
    for (let f2 = 0; f2 < Sa.length; f2++)
      c = Sa[f2], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Ua(a) {
  this.src = a;
  this.g = {};
  this.h = 0;
}
Ua.prototype.add = function(a, b3, c, d, e) {
  var f2 = a.toString();
  a = this.g[f2];
  a || (a = this.g[f2] = [], this.h++);
  var h = Va(a, b3, d, e);
  -1 < h ? (b3 = a[h], c || (b3.ea = false)) : (b3 = new Oa(b3, this.src, f2, !!d, e), b3.ea = c, a.push(b3));
  return b3;
};
function Wa(a, b3) {
  var c = b3.type;
  if (c in a.g) {
    var d = a.g[c], e = la(d, b3), f2;
    (f2 = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f2 && (Pa(b3), 0 == a.g[c].length && (delete a.g[c], a.h--));
  }
}
function Va(a, b3, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f2 = a[e];
    if (!f2.ba && f2.listener == b3 && f2.capture == !!c && f2.ha == d)
      return e;
  }
  return -1;
}
var Xa = "closure_lm_" + (1e6 * Math.random() | 0);
var Ya = {};
function $a(a, b3, c, d, e) {
  if (d && d.once)
    return ab(a, b3, c, d, e);
  if (Array.isArray(b3)) {
    for (var f2 = 0; f2 < b3.length; f2++)
      $a(a, b3[f2], c, d, e);
    return null;
  }
  c = bb(c);
  return a && a[A] ? a.N(b3, c, p(d) ? !!d.capture : !!d, e) : cb(a, b3, c, false, d, e);
}
function cb(a, b3, c, d, e, f2) {
  if (!b3)
    throw Error("Invalid event type");
  var h = p(e) ? !!e.capture : !!e, n = db(a);
  n || (a[Xa] = n = new Ua(a));
  c = n.add(b3, c, d, h, f2);
  if (c.proxy)
    return c;
  d = eb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener)
    oa || (e = h), void 0 === e && (e = false), a.addEventListener(b3.toString(), d, e);
  else if (a.attachEvent)
    a.attachEvent(fb(b3.toString()), d);
  else if (a.addListener && a.removeListener)
    a.addListener(d);
  else
    throw Error("addEventListener and attachEvent are unavailable.");
  return c;
}
function eb() {
  function a(c) {
    return b3.call(a.src, a.listener, c);
  }
  const b3 = gb;
  return a;
}
function ab(a, b3, c, d, e) {
  if (Array.isArray(b3)) {
    for (var f2 = 0; f2 < b3.length; f2++)
      ab(a, b3[f2], c, d, e);
    return null;
  }
  c = bb(c);
  return a && a[A] ? a.O(b3, c, p(d) ? !!d.capture : !!d, e) : cb(a, b3, c, true, d, e);
}
function hb(a, b3, c, d, e) {
  if (Array.isArray(b3))
    for (var f2 = 0; f2 < b3.length; f2++)
      hb(a, b3[f2], c, d, e);
  else
    (d = p(d) ? !!d.capture : !!d, c = bb(c), a && a[A]) ? (a = a.i, b3 = String(b3).toString(), b3 in a.g && (f2 = a.g[b3], c = Va(f2, c, d, e), -1 < c && (Pa(f2[c]), Array.prototype.splice.call(f2, c, 1), 0 == f2.length && (delete a.g[b3], a.h--)))) : a && (a = db(a)) && (b3 = a.g[b3.toString()], a = -1, b3 && (a = Va(b3, c, d, e)), (c = -1 < a ? b3[a] : null) && ib(c));
}
function ib(a) {
  if ("number" !== typeof a && a && !a.ba) {
    var b3 = a.src;
    if (b3 && b3[A])
      Wa(b3.i, a);
    else {
      var c = a.type, d = a.proxy;
      b3.removeEventListener ? b3.removeEventListener(c, d, a.capture) : b3.detachEvent ? b3.detachEvent(fb(c), d) : b3.addListener && b3.removeListener && b3.removeListener(d);
      (c = db(b3)) ? (Wa(c, a), 0 == c.h && (c.src = null, b3[Xa] = null)) : Pa(a);
    }
  }
}
function fb(a) {
  return a in Ya ? Ya[a] : Ya[a] = "on" + a;
}
function gb(a, b3) {
  if (a.ba)
    a = true;
  else {
    b3 = new z(b3, this);
    var c = a.listener, d = a.ha || a.src;
    a.ea && ib(a);
    a = c.call(d, b3);
  }
  return a;
}
function db(a) {
  a = a[Xa];
  return a instanceof Ua ? a : null;
}
var jb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function bb(a) {
  if ("function" === typeof a)
    return a;
  a[jb] || (a[jb] = function(b3) {
    return a.handleEvent(b3);
  });
  return a[jb];
}
function B() {
  v.call(this);
  this.i = new Ua(this);
  this.P = this;
  this.I = null;
}
t(B, v);
B.prototype[A] = true;
B.prototype.removeEventListener = function(a, b3, c, d) {
  hb(this, a, b3, c, d);
};
function C(a, b3) {
  var c, d = a.I;
  if (d)
    for (c = []; d; d = d.I)
      c.push(d);
  a = a.P;
  d = b3.type || b3;
  if ("string" === typeof b3)
    b3 = new w(b3, a);
  else if (b3 instanceof w)
    b3.target = b3.target || a;
  else {
    var e = b3;
    b3 = new w(d, a);
    Ta(b3, e);
  }
  e = true;
  if (c)
    for (var f2 = c.length - 1; 0 <= f2; f2--) {
      var h = b3.g = c[f2];
      e = kb(h, d, true, b3) && e;
    }
  h = b3.g = a;
  e = kb(h, d, true, b3) && e;
  e = kb(h, d, false, b3) && e;
  if (c)
    for (f2 = 0; f2 < c.length; f2++)
      h = b3.g = c[f2], e = kb(h, d, false, b3) && e;
}
B.prototype.M = function() {
  B.X.M.call(this);
  if (this.i) {
    var a = this.i, c;
    for (c in a.g) {
      for (var d = a.g[c], e = 0; e < d.length; e++)
        Pa(d[e]);
      delete a.g[c];
      a.h--;
    }
  }
  this.I = null;
};
B.prototype.N = function(a, b3, c, d) {
  return this.i.add(String(a), b3, false, c, d);
};
B.prototype.O = function(a, b3, c, d) {
  return this.i.add(String(a), b3, true, c, d);
};
function kb(a, b3, c, d) {
  b3 = a.i.g[String(b3)];
  if (!b3)
    return true;
  b3 = b3.concat();
  for (var e = true, f2 = 0; f2 < b3.length; ++f2) {
    var h = b3[f2];
    if (h && !h.ba && h.capture == c) {
      var n = h.listener, u = h.ha || h.src;
      h.ea && Wa(a.i, h);
      e = false !== n.call(u, d) && e;
    }
  }
  return e && !d.defaultPrevented;
}
var lb = l.JSON.stringify;
function mb() {
  var a = nb;
  let b3 = null;
  a.g && (b3 = a.g, a.g = a.g.next, a.g || (a.h = null), b3.next = null);
  return b3;
}
var ob = class {
  constructor() {
    this.h = this.g = null;
  }
  add(a, b3) {
    const c = pb.get();
    c.set(a, b3);
    this.h ? this.h.next = c : this.g = c;
    this.h = c;
  }
};
var pb = new class {
  constructor(a, b3) {
    this.i = a;
    this.j = b3;
    this.h = 0;
    this.g = null;
  }
  get() {
    let a;
    0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
    return a;
  }
}(() => new qb(), (a) => a.reset());
var qb = class {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(a, b3) {
    this.h = a;
    this.g = b3;
    this.next = null;
  }
  reset() {
    this.next = this.g = this.h = null;
  }
};
function rb(a) {
  l.setTimeout(() => {
    throw a;
  }, 0);
}
function sb(a, b3) {
  ub || vb();
  wb || (ub(), wb = true);
  nb.add(a, b3);
}
var ub;
function vb() {
  var a = l.Promise.resolve(void 0);
  ub = function() {
    a.then(xb);
  };
}
var wb = false;
var nb = new ob();
function xb() {
  for (var a; a = mb(); ) {
    try {
      a.h.call(a.g);
    } catch (c) {
      rb(c);
    }
    var b3 = pb;
    b3.j(a);
    100 > b3.h && (b3.h++, a.next = b3.g, b3.g = a);
  }
  wb = false;
}
function yb(a, b3) {
  B.call(this);
  this.h = a || 1;
  this.g = b3 || l;
  this.j = q(this.lb, this);
  this.l = Date.now();
}
t(yb, B);
k = yb.prototype;
k.ca = false;
k.R = null;
k.lb = function() {
  if (this.ca) {
    var a = Date.now() - this.l;
    0 < a && a < 0.8 * this.h ? this.R = this.g.setTimeout(this.j, this.h - a) : (this.R && (this.g.clearTimeout(this.R), this.R = null), C(this, "tick"), this.ca && (zb(this), this.start()));
  }
};
k.start = function() {
  this.ca = true;
  this.R || (this.R = this.g.setTimeout(this.j, this.h), this.l = Date.now());
};
function zb(a) {
  a.ca = false;
  a.R && (a.g.clearTimeout(a.R), a.R = null);
}
k.M = function() {
  yb.X.M.call(this);
  zb(this);
  delete this.g;
};
function Ab(a, b3, c) {
  if ("function" === typeof a)
    c && (a = q(a, c));
  else if (a && "function" == typeof a.handleEvent)
    a = q(a.handleEvent, a);
  else
    throw Error("Invalid listener argument");
  return 2147483647 < Number(b3) ? -1 : l.setTimeout(a, b3 || 0);
}
function Bb(a) {
  a.g = Ab(() => {
    a.g = null;
    a.i && (a.i = false, Bb(a));
  }, a.j);
  const b3 = a.h;
  a.h = null;
  a.m.apply(null, b3);
}
var Cb = class extends v {
  constructor(a, b3) {
    super();
    this.m = a;
    this.j = b3;
    this.h = null;
    this.i = false;
    this.g = null;
  }
  l(a) {
    this.h = arguments;
    this.g ? this.i = true : Bb(this);
  }
  M() {
    super.M();
    this.g && (l.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
  }
};
function D(a) {
  v.call(this);
  this.h = a;
  this.g = {};
}
t(D, v);
var Db = [];
function Eb(a, b3, c, d) {
  Array.isArray(c) || (c && (Db[0] = c.toString()), c = Db);
  for (var e = 0; e < c.length; e++) {
    var f2 = $a(b3, c[e], d || a.handleEvent, false, a.h || a);
    if (!f2)
      break;
    a.g[f2.key] = f2;
  }
}
function Fb(a) {
  Qa(a.g, function(b3, c) {
    this.g.hasOwnProperty(c) && ib(b3);
  }, a);
  a.g = {};
}
D.prototype.M = function() {
  D.X.M.call(this);
  Fb(this);
};
D.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Gb() {
  this.g = true;
}
Gb.prototype.Aa = function() {
  this.g = false;
};
function Hb(a, b3, c, d, e, f2) {
  a.info(function() {
    if (a.g)
      if (f2) {
        var h = "";
        for (var n = f2.split("&"), u = 0; u < n.length; u++) {
          var m2 = n[u].split("=");
          if (1 < m2.length) {
            var r = m2[0];
            m2 = m2[1];
            var F2 = r.split("_");
            h = 2 <= F2.length && "type" == F2[1] ? h + (r + "=" + m2 + "&") : h + (r + "=redacted&");
          }
        }
      } else
        h = null;
    else
      h = f2;
    return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b3 + "\n" + c + "\n" + h;
  });
}
function Ib(a, b3, c, d, e, f2, h) {
  a.info(function() {
    return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b3 + "\n" + c + "\n" + f2 + " " + h;
  });
}
function E(a, b3, c, d) {
  a.info(function() {
    return "XMLHTTP TEXT (" + b3 + "): " + Jb(a, c) + (d ? " " + d : "");
  });
}
function Kb(a, b3) {
  a.info(function() {
    return "TIMEOUT: " + b3;
  });
}
Gb.prototype.info = function() {
};
function Jb(a, b3) {
  if (!a.g)
    return b3;
  if (!b3)
    return null;
  try {
    var c = JSON.parse(b3);
    if (c) {
      for (a = 0; a < c.length; a++)
        if (Array.isArray(c[a])) {
          var d = c[a];
          if (!(2 > d.length)) {
            var e = d[1];
            if (Array.isArray(e) && !(1 > e.length)) {
              var f2 = e[0];
              if ("noop" != f2 && "stop" != f2 && "close" != f2)
                for (var h = 1; h < e.length; h++)
                  e[h] = "";
            }
          }
        }
    }
    return lb(c);
  } catch (n) {
    return b3;
  }
}
var G = {};
var Lb = null;
function Mb() {
  return Lb = Lb || new B();
}
G.Pa = "serverreachability";
function Nb(a) {
  w.call(this, G.Pa, a);
}
t(Nb, w);
function H(a) {
  const b3 = Mb();
  C(b3, new Nb(b3));
}
G.STAT_EVENT = "statevent";
function Ob(a, b3) {
  w.call(this, G.STAT_EVENT, a);
  this.stat = b3;
}
t(Ob, w);
function I(a) {
  const b3 = Mb();
  C(b3, new Ob(b3, a));
}
G.Qa = "timingevent";
function Pb(a, b3) {
  w.call(this, G.Qa, a);
  this.size = b3;
}
t(Pb, w);
function J(a, b3) {
  if ("function" !== typeof a)
    throw Error("Fn must not be null and must be a function");
  return l.setTimeout(function() {
    a();
  }, b3);
}
var Qb = { NO_ERROR: 0, mb: 1, zb: 2, yb: 3, tb: 4, xb: 5, Ab: 6, Ma: 7, TIMEOUT: 8, Db: 9 };
var Rb = { rb: "complete", Nb: "success", Na: "error", Ma: "abort", Fb: "ready", Gb: "readystatechange", TIMEOUT: "timeout", Bb: "incrementaldata", Eb: "progress", ub: "downloadprogress", Vb: "uploadprogress" };
function Sb() {
}
Sb.prototype.h = null;
function Tb(a) {
  return a.h || (a.h = a.i());
}
function Ub() {
}
var K = { OPEN: "a", qb: "b", Na: "c", Cb: "d" };
function Vb() {
  w.call(this, "d");
}
t(Vb, w);
function Wb() {
  w.call(this, "c");
}
t(Wb, w);
var Xb;
function Yb() {
}
t(Yb, Sb);
Yb.prototype.g = function() {
  return new XMLHttpRequest();
};
Yb.prototype.i = function() {
  return {};
};
Xb = new Yb();
function L(a, b3, c, d) {
  this.l = a;
  this.j = b3;
  this.m = c;
  this.U = d || 1;
  this.S = new D(this);
  this.O = Zb;
  a = ya ? 125 : void 0;
  this.T = new yb(a);
  this.H = null;
  this.i = false;
  this.s = this.A = this.v = this.K = this.F = this.V = this.B = null;
  this.D = [];
  this.g = null;
  this.C = 0;
  this.o = this.u = null;
  this.Y = -1;
  this.I = false;
  this.N = 0;
  this.L = null;
  this.$ = this.J = this.Z = this.P = false;
  this.h = new $b();
}
function $b() {
  this.i = null;
  this.g = "";
  this.h = false;
}
var Zb = 45e3;
var ac = {};
var bc = {};
k = L.prototype;
k.setTimeout = function(a) {
  this.O = a;
};
function cc(a, b3, c) {
  a.K = 1;
  a.v = dc(M(b3));
  a.s = c;
  a.P = true;
  ec(a, null);
}
function ec(a, b3) {
  a.F = Date.now();
  N(a);
  a.A = M(a.v);
  var c = a.A, d = a.U;
  Array.isArray(d) || (d = [String(d)]);
  fc(c.i, "t", d);
  a.C = 0;
  c = a.l.H;
  a.h = new $b();
  a.g = gc(a.l, c ? b3 : null, !a.s);
  0 < a.N && (a.L = new Cb(q(a.La, a, a.g), a.N));
  Eb(a.S, a.g, "readystatechange", a.ib);
  b3 = a.H ? Ra(a.H) : {};
  a.s ? (a.u || (a.u = "POST"), b3["Content-Type"] = "application/x-www-form-urlencoded", a.g.da(a.A, a.u, a.s, b3)) : (a.u = "GET", a.g.da(a.A, a.u, null, b3));
  H();
  Hb(a.j, a.u, a.A, a.m, a.U, a.s);
}
k.ib = function(a) {
  a = a.target;
  const b3 = this.L;
  b3 && 3 == O(a) ? b3.l() : this.La(a);
};
k.La = function(a) {
  try {
    if (a == this.g)
      a: {
        const r = O(this.g);
        var b3 = this.g.Ea();
        const F2 = this.g.aa();
        if (!(3 > r) && (3 != r || ya || this.g && (this.h.h || this.g.fa() || hc(this.g)))) {
          this.I || 4 != r || 7 == b3 || (8 == b3 || 0 >= F2 ? H(3) : H(2));
          ic(this);
          var c = this.g.aa();
          this.Y = c;
          b:
            if (jc(this)) {
              var d = hc(this.g);
              a = "";
              var e = d.length, f2 = 4 == O(this.g);
              if (!this.h.i) {
                if ("undefined" === typeof TextDecoder) {
                  P(this);
                  Q(this);
                  var h = "";
                  break b;
                }
                this.h.i = new l.TextDecoder();
              }
              for (b3 = 0; b3 < e; b3++)
                this.h.h = true, a += this.h.i.decode(d[b3], { stream: f2 && b3 == e - 1 });
              d.splice(
                0,
                e
              );
              this.h.g += a;
              this.C = 0;
              h = this.h.g;
            } else
              h = this.g.fa();
          this.i = 200 == c;
          Ib(this.j, this.u, this.A, this.m, this.U, r, c);
          if (this.i) {
            if (this.Z && !this.J) {
              b: {
                if (this.g) {
                  var n, u = this.g;
                  if ((n = u.g ? u.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !pa(n)) {
                    var m2 = n;
                    break b;
                  }
                }
                m2 = null;
              }
              if (c = m2)
                E(this.j, this.m, c, "Initial handshake response via X-HTTP-Initial-Response"), this.J = true, kc(this, c);
              else {
                this.i = false;
                this.o = 3;
                I(12);
                P(this);
                Q(this);
                break a;
              }
            }
            this.P ? (lc(this, r, h), ya && this.i && 3 == r && (Eb(this.S, this.T, "tick", this.hb), this.T.start())) : (E(this.j, this.m, h, null), kc(this, h));
            4 == r && P(this);
            this.i && !this.I && (4 == r ? mc(this.l, this) : (this.i = false, N(this)));
          } else
            400 == c && 0 < h.indexOf("Unknown SID") ? (this.o = 3, I(12)) : (this.o = 0, I(13)), P(this), Q(this);
        }
      }
  } catch (r) {
  } finally {
  }
};
function jc(a) {
  return a.g ? "GET" == a.u && 2 != a.K && a.l.Da : false;
}
function lc(a, b3, c) {
  let d = true, e;
  for (; !a.I && a.C < c.length; )
    if (e = nc(a, c), e == bc) {
      4 == b3 && (a.o = 4, I(14), d = false);
      E(a.j, a.m, null, "[Incomplete Response]");
      break;
    } else if (e == ac) {
      a.o = 4;
      I(15);
      E(a.j, a.m, c, "[Invalid Chunk]");
      d = false;
      break;
    } else
      E(a.j, a.m, e, null), kc(a, e);
  jc(a) && e != bc && e != ac && (a.h.g = "", a.C = 0);
  4 != b3 || 0 != c.length || a.h.h || (a.o = 1, I(16), d = false);
  a.i = a.i && d;
  d ? 0 < c.length && !a.$ && (a.$ = true, b3 = a.l, b3.g == a && b3.$ && !b3.K && (b3.j.info("Great, no buffering proxy detected. Bytes received: " + c.length), oc(b3), b3.K = true, I(11))) : (E(
    a.j,
    a.m,
    c,
    "[Invalid Chunked Response]"
  ), P(a), Q(a));
}
k.hb = function() {
  if (this.g) {
    var a = O(this.g), b3 = this.g.fa();
    this.C < b3.length && (ic(this), lc(this, a, b3), this.i && 4 != a && N(this));
  }
};
function nc(a, b3) {
  var c = a.C, d = b3.indexOf("\n", c);
  if (-1 == d)
    return bc;
  c = Number(b3.substring(c, d));
  if (isNaN(c))
    return ac;
  d += 1;
  if (d + c > b3.length)
    return bc;
  b3 = b3.substr(d, c);
  a.C = d + c;
  return b3;
}
k.cancel = function() {
  this.I = true;
  P(this);
};
function N(a) {
  a.V = Date.now() + a.O;
  pc(a, a.O);
}
function pc(a, b3) {
  if (null != a.B)
    throw Error("WatchDog timer not null");
  a.B = J(q(a.gb, a), b3);
}
function ic(a) {
  a.B && (l.clearTimeout(a.B), a.B = null);
}
k.gb = function() {
  this.B = null;
  const a = Date.now();
  0 <= a - this.V ? (Kb(this.j, this.A), 2 != this.K && (H(), I(17)), P(this), this.o = 2, Q(this)) : pc(this, this.V - a);
};
function Q(a) {
  0 == a.l.G || a.I || mc(a.l, a);
}
function P(a) {
  ic(a);
  var b3 = a.L;
  b3 && "function" == typeof b3.na && b3.na();
  a.L = null;
  zb(a.T);
  Fb(a.S);
  a.g && (b3 = a.g, a.g = null, b3.abort(), b3.na());
}
function kc(a, b3) {
  try {
    var c = a.l;
    if (0 != c.G && (c.g == a || qc(c.h, a))) {
      if (!a.J && qc(c.h, a) && 3 == c.G) {
        try {
          var d = c.Fa.g.parse(b3);
        } catch (m2) {
          d = null;
        }
        if (Array.isArray(d) && 3 == d.length) {
          var e = d;
          if (0 == e[0])
            a: {
              if (!c.u) {
                if (c.g)
                  if (c.g.F + 3e3 < a.F)
                    rc(c), sc(c);
                  else
                    break a;
                tc(c);
                I(18);
              }
            }
          else
            c.Ba = e[1], 0 < c.Ba - c.T && 37500 > e[2] && c.L && 0 == c.A && !c.v && (c.v = J(q(c.cb, c), 6e3));
          if (1 >= uc(c.h) && c.ja) {
            try {
              c.ja();
            } catch (m2) {
            }
            c.ja = void 0;
          }
        } else
          R(c, 11);
      } else if ((a.J || c.g == a) && rc(c), !pa(b3))
        for (e = c.Fa.g.parse(b3), b3 = 0; b3 < e.length; b3++) {
          let m2 = e[b3];
          c.T = m2[0];
          m2 = m2[1];
          if (2 == c.G)
            if ("c" == m2[0]) {
              c.I = m2[1];
              c.ka = m2[2];
              const r = m2[3];
              null != r && (c.ma = r, c.j.info("VER=" + c.ma));
              const F2 = m2[4];
              null != F2 && (c.Ca = F2, c.j.info("SVER=" + c.Ca));
              const Ca = m2[5];
              null != Ca && "number" === typeof Ca && 0 < Ca && (d = 1.5 * Ca, c.J = d, c.j.info("backChannelRequestTimeoutMs_=" + d));
              d = c;
              const Z3 = a.g;
              if (Z3) {
                const Da = Z3.g ? Z3.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (Da) {
                  var f2 = d.h;
                  f2.g || -1 == Da.indexOf("spdy") && -1 == Da.indexOf("quic") && -1 == Da.indexOf("h2") || (f2.j = f2.l, f2.g = /* @__PURE__ */ new Set(), f2.h && (vc(f2, f2.h), f2.h = null));
                }
                if (d.D) {
                  const tb = Z3.g ? Z3.g.getResponseHeader("X-HTTP-Session-Id") : null;
                  tb && (d.za = tb, S(d.F, d.D, tb));
                }
              }
              c.G = 3;
              c.l && c.l.xa();
              c.$ && (c.P = Date.now() - a.F, c.j.info("Handshake RTT: " + c.P + "ms"));
              d = c;
              var h = a;
              d.sa = wc(d, d.H ? d.ka : null, d.V);
              if (h.J) {
                xc(d.h, h);
                var n = h, u = d.J;
                u && n.setTimeout(u);
                n.B && (ic(n), N(n));
                d.g = h;
              } else
                yc(d);
              0 < c.i.length && zc(c);
            } else
              "stop" != m2[0] && "close" != m2[0] || R(c, 7);
          else
            3 == c.G && ("stop" == m2[0] || "close" == m2[0] ? "stop" == m2[0] ? R(c, 7) : Ac(c) : "noop" != m2[0] && c.l && c.l.wa(m2), c.A = 0);
        }
    }
    H(4);
  } catch (m2) {
  }
}
function Bc(a) {
  if (a.W && "function" == typeof a.W)
    return a.W();
  if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set)
    return Array.from(a.values());
  if ("string" === typeof a)
    return a.split("");
  if (ba(a)) {
    for (var b3 = [], c = a.length, d = 0; d < c; d++)
      b3.push(a[d]);
    return b3;
  }
  b3 = [];
  c = 0;
  for (d in a)
    b3[c++] = a[d];
  return b3;
}
function Cc(a) {
  if (a.oa && "function" == typeof a.oa)
    return a.oa();
  if (!a.W || "function" != typeof a.W) {
    if ("undefined" !== typeof Map && a instanceof Map)
      return Array.from(a.keys());
    if (!("undefined" !== typeof Set && a instanceof Set)) {
      if (ba(a) || "string" === typeof a) {
        var b3 = [];
        a = a.length;
        for (var c = 0; c < a; c++)
          b3.push(c);
        return b3;
      }
      b3 = [];
      c = 0;
      for (const d in a)
        b3[c++] = d;
      return b3;
    }
  }
}
function Dc(a, b3) {
  if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b3, void 0);
  else if (ba(a) || "string" === typeof a)
    Array.prototype.forEach.call(a, b3, void 0);
  else
    for (var c = Cc(a), d = Bc(a), e = d.length, f2 = 0; f2 < e; f2++)
      b3.call(void 0, d[f2], c && c[f2], a);
}
var Ec = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
function Fc(a, b3) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="), e = null;
      if (0 <= d) {
        var f2 = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else
        f2 = a[c];
      b3(f2, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}
function T(a, b3) {
  this.g = this.s = this.j = "";
  this.m = null;
  this.o = this.l = "";
  this.h = false;
  if (a instanceof T) {
    this.h = void 0 !== b3 ? b3 : a.h;
    Gc(this, a.j);
    this.s = a.s;
    this.g = a.g;
    Hc(this, a.m);
    this.l = a.l;
    b3 = a.i;
    var c = new Ic();
    c.i = b3.i;
    b3.g && (c.g = new Map(b3.g), c.h = b3.h);
    Jc(this, c);
    this.o = a.o;
  } else
    a && (c = String(a).match(Ec)) ? (this.h = !!b3, Gc(this, c[1] || "", true), this.s = Kc(c[2] || ""), this.g = Kc(c[3] || "", true), Hc(this, c[4]), this.l = Kc(c[5] || "", true), Jc(this, c[6] || "", true), this.o = Kc(c[7] || "")) : (this.h = !!b3, this.i = new Ic(null, this.h));
}
T.prototype.toString = function() {
  var a = [], b3 = this.j;
  b3 && a.push(Lc(b3, Mc, true), ":");
  var c = this.g;
  if (c || "file" == b3)
    a.push("//"), (b3 = this.s) && a.push(Lc(b3, Mc, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c));
  if (c = this.l)
    this.g && "/" != c.charAt(0) && a.push("/"), a.push(Lc(c, "/" == c.charAt(0) ? Nc : Oc, true));
  (c = this.i.toString()) && a.push("?", c);
  (c = this.o) && a.push("#", Lc(c, Pc));
  return a.join("");
};
function M(a) {
  return new T(a);
}
function Gc(a, b3, c) {
  a.j = c ? Kc(b3, true) : b3;
  a.j && (a.j = a.j.replace(/:$/, ""));
}
function Hc(a, b3) {
  if (b3) {
    b3 = Number(b3);
    if (isNaN(b3) || 0 > b3)
      throw Error("Bad port number " + b3);
    a.m = b3;
  } else
    a.m = null;
}
function Jc(a, b3, c) {
  b3 instanceof Ic ? (a.i = b3, Qc(a.i, a.h)) : (c || (b3 = Lc(b3, Rc)), a.i = new Ic(b3, a.h));
}
function S(a, b3, c) {
  a.i.set(b3, c);
}
function dc(a) {
  S(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
  return a;
}
function Kc(a, b3) {
  return a ? b3 ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Lc(a, b3, c) {
  return "string" === typeof a ? (a = encodeURI(a).replace(b3, Sc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function Sc(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Mc = /[#\/\?@]/g;
var Oc = /[#\?:]/g;
var Nc = /[#\?]/g;
var Rc = /[#\?@]/g;
var Pc = /#/g;
function Ic(a, b3) {
  this.h = this.g = null;
  this.i = a || null;
  this.j = !!b3;
}
function U(a) {
  a.g || (a.g = /* @__PURE__ */ new Map(), a.h = 0, a.i && Fc(a.i, function(b3, c) {
    a.add(decodeURIComponent(b3.replace(/\+/g, " ")), c);
  }));
}
k = Ic.prototype;
k.add = function(a, b3) {
  U(this);
  this.i = null;
  a = V(this, a);
  var c = this.g.get(a);
  c || this.g.set(a, c = []);
  c.push(b3);
  this.h += 1;
  return this;
};
function Tc(a, b3) {
  U(a);
  b3 = V(a, b3);
  a.g.has(b3) && (a.i = null, a.h -= a.g.get(b3).length, a.g.delete(b3));
}
function Uc(a, b3) {
  U(a);
  b3 = V(a, b3);
  return a.g.has(b3);
}
k.forEach = function(a, b3) {
  U(this);
  this.g.forEach(function(c, d) {
    c.forEach(function(e) {
      a.call(b3, e, d, this);
    }, this);
  }, this);
};
k.oa = function() {
  U(this);
  const a = Array.from(this.g.values()), b3 = Array.from(this.g.keys()), c = [];
  for (let d = 0; d < b3.length; d++) {
    const e = a[d];
    for (let f2 = 0; f2 < e.length; f2++)
      c.push(b3[d]);
  }
  return c;
};
k.W = function(a) {
  U(this);
  let b3 = [];
  if ("string" === typeof a)
    Uc(this, a) && (b3 = b3.concat(this.g.get(V(this, a))));
  else {
    a = Array.from(this.g.values());
    for (let c = 0; c < a.length; c++)
      b3 = b3.concat(a[c]);
  }
  return b3;
};
k.set = function(a, b3) {
  U(this);
  this.i = null;
  a = V(this, a);
  Uc(this, a) && (this.h -= this.g.get(a).length);
  this.g.set(a, [b3]);
  this.h += 1;
  return this;
};
k.get = function(a, b3) {
  if (!a)
    return b3;
  a = this.W(a);
  return 0 < a.length ? String(a[0]) : b3;
};
function fc(a, b3, c) {
  Tc(a, b3);
  0 < c.length && (a.i = null, a.g.set(V(a, b3), ma(c)), a.h += c.length);
}
k.toString = function() {
  if (this.i)
    return this.i;
  if (!this.g)
    return "";
  const a = [], b3 = Array.from(this.g.keys());
  for (var c = 0; c < b3.length; c++) {
    var d = b3[c];
    const f2 = encodeURIComponent(String(d)), h = this.W(d);
    for (d = 0; d < h.length; d++) {
      var e = f2;
      "" !== h[d] && (e += "=" + encodeURIComponent(String(h[d])));
      a.push(e);
    }
  }
  return this.i = a.join("&");
};
function V(a, b3) {
  b3 = String(b3);
  a.j && (b3 = b3.toLowerCase());
  return b3;
}
function Qc(a, b3) {
  b3 && !a.j && (U(a), a.i = null, a.g.forEach(function(c, d) {
    var e = d.toLowerCase();
    d != e && (Tc(this, d), fc(this, e, c));
  }, a));
  a.j = b3;
}
var Vc = class {
  constructor(a, b3) {
    this.h = a;
    this.g = b3;
  }
};
function Wc(a) {
  this.l = a || Xc;
  l.PerformanceNavigationTiming ? (a = l.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(l.g && l.g.Ga && l.g.Ga() && l.g.Ga().$b);
  this.j = a ? this.l : 1;
  this.g = null;
  1 < this.j && (this.g = /* @__PURE__ */ new Set());
  this.h = null;
  this.i = [];
}
var Xc = 10;
function Yc(a) {
  return a.h ? true : a.g ? a.g.size >= a.j : false;
}
function uc(a) {
  return a.h ? 1 : a.g ? a.g.size : 0;
}
function qc(a, b3) {
  return a.h ? a.h == b3 : a.g ? a.g.has(b3) : false;
}
function vc(a, b3) {
  a.g ? a.g.add(b3) : a.h = b3;
}
function xc(a, b3) {
  a.h && a.h == b3 ? a.h = null : a.g && a.g.has(b3) && a.g.delete(b3);
}
Wc.prototype.cancel = function() {
  this.i = Zc(this);
  if (this.h)
    this.h.cancel(), this.h = null;
  else if (this.g && 0 !== this.g.size) {
    for (const a of this.g.values())
      a.cancel();
    this.g.clear();
  }
};
function Zc(a) {
  if (null != a.h)
    return a.i.concat(a.h.D);
  if (null != a.g && 0 !== a.g.size) {
    let b3 = a.i;
    for (const c of a.g.values())
      b3 = b3.concat(c.D);
    return b3;
  }
  return ma(a.i);
}
function $c() {
}
$c.prototype.stringify = function(a) {
  return l.JSON.stringify(a, void 0);
};
$c.prototype.parse = function(a) {
  return l.JSON.parse(a, void 0);
};
function ad() {
  this.g = new $c();
}
function bd(a, b3, c) {
  const d = c || "";
  try {
    Dc(a, function(e, f2) {
      let h = e;
      p(e) && (h = lb(e));
      b3.push(d + f2 + "=" + encodeURIComponent(h));
    });
  } catch (e) {
    throw b3.push(d + "type=" + encodeURIComponent("_badmap")), e;
  }
}
function cd(a, b3) {
  const c = new Gb();
  if (l.Image) {
    const d = new Image();
    d.onload = ia(dd, c, d, "TestLoadImage: loaded", true, b3);
    d.onerror = ia(dd, c, d, "TestLoadImage: error", false, b3);
    d.onabort = ia(dd, c, d, "TestLoadImage: abort", false, b3);
    d.ontimeout = ia(dd, c, d, "TestLoadImage: timeout", false, b3);
    l.setTimeout(function() {
      if (d.ontimeout)
        d.ontimeout();
    }, 1e4);
    d.src = a;
  } else
    b3(false);
}
function dd(a, b3, c, d, e) {
  try {
    b3.onload = null, b3.onerror = null, b3.onabort = null, b3.ontimeout = null, e(d);
  } catch (f2) {
  }
}
function ed(a) {
  this.l = a.ac || null;
  this.j = a.jb || false;
}
t(ed, Sb);
ed.prototype.g = function() {
  return new fd(this.l, this.j);
};
ed.prototype.i = function(a) {
  return function() {
    return a;
  };
}({});
function fd(a, b3) {
  B.call(this);
  this.D = a;
  this.u = b3;
  this.m = void 0;
  this.readyState = gd;
  this.status = 0;
  this.responseType = this.responseText = this.response = this.statusText = "";
  this.onreadystatechange = null;
  this.v = new Headers();
  this.h = null;
  this.C = "GET";
  this.B = "";
  this.g = false;
  this.A = this.j = this.l = null;
}
t(fd, B);
var gd = 0;
k = fd.prototype;
k.open = function(a, b3) {
  if (this.readyState != gd)
    throw this.abort(), Error("Error reopening a connection");
  this.C = a;
  this.B = b3;
  this.readyState = 1;
  hd(this);
};
k.send = function(a) {
  if (1 != this.readyState)
    throw this.abort(), Error("need to call open() first. ");
  this.g = true;
  const b3 = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
  a && (b3.body = a);
  (this.D || l).fetch(new Request(this.B, b3)).then(this.Wa.bind(this), this.ga.bind(this));
};
k.abort = function() {
  this.response = this.responseText = "";
  this.v = new Headers();
  this.status = 0;
  this.j && this.j.cancel("Request was aborted.").catch(() => {
  });
  1 <= this.readyState && this.g && 4 != this.readyState && (this.g = false, id(this));
  this.readyState = gd;
};
k.Wa = function(a) {
  if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, hd(this)), this.g && (this.readyState = 3, hd(this), this.g)))
    if ("arraybuffer" === this.responseType)
      a.arrayBuffer().then(this.Ua.bind(this), this.ga.bind(this));
    else if ("undefined" !== typeof l.ReadableStream && "body" in a) {
      this.j = a.body.getReader();
      if (this.u) {
        if (this.responseType)
          throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else
        this.response = this.responseText = "", this.A = new TextDecoder();
      jd(this);
    } else
      a.text().then(this.Va.bind(this), this.ga.bind(this));
};
function jd(a) {
  a.j.read().then(a.Ta.bind(a)).catch(a.ga.bind(a));
}
k.Ta = function(a) {
  if (this.g) {
    if (this.u && a.value)
      this.response.push(a.value);
    else if (!this.u) {
      var b3 = a.value ? a.value : new Uint8Array(0);
      if (b3 = this.A.decode(b3, { stream: !a.done }))
        this.response = this.responseText += b3;
    }
    a.done ? id(this) : hd(this);
    3 == this.readyState && jd(this);
  }
};
k.Va = function(a) {
  this.g && (this.response = this.responseText = a, id(this));
};
k.Ua = function(a) {
  this.g && (this.response = a, id(this));
};
k.ga = function() {
  this.g && id(this);
};
function id(a) {
  a.readyState = 4;
  a.l = null;
  a.j = null;
  a.A = null;
  hd(a);
}
k.setRequestHeader = function(a, b3) {
  this.v.append(a, b3);
};
k.getResponseHeader = function(a) {
  return this.h ? this.h.get(a.toLowerCase()) || "" : "";
};
k.getAllResponseHeaders = function() {
  if (!this.h)
    return "";
  const a = [], b3 = this.h.entries();
  for (var c = b3.next(); !c.done; )
    c = c.value, a.push(c[0] + ": " + c[1]), c = b3.next();
  return a.join("\r\n");
};
function hd(a) {
  a.onreadystatechange && a.onreadystatechange.call(a);
}
Object.defineProperty(fd.prototype, "withCredentials", { get: function() {
  return "include" === this.m;
}, set: function(a) {
  this.m = a ? "include" : "same-origin";
} });
var kd = l.JSON.parse;
function W(a) {
  B.call(this);
  this.headers = /* @__PURE__ */ new Map();
  this.u = a || null;
  this.h = false;
  this.C = this.g = null;
  this.H = "";
  this.m = 0;
  this.j = "";
  this.l = this.F = this.v = this.D = false;
  this.B = 0;
  this.A = null;
  this.J = ld;
  this.K = this.L = false;
}
t(W, B);
var ld = "";
var md = /^https?$/i;
var nd = ["POST", "PUT"];
k = W.prototype;
k.Ka = function(a) {
  this.L = a;
};
k.da = function(a, b3, c, d) {
  if (this.g)
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.H + "; newUri=" + a);
  b3 = b3 ? b3.toUpperCase() : "GET";
  this.H = a;
  this.j = "";
  this.m = 0;
  this.D = false;
  this.h = true;
  this.g = this.u ? this.u.g() : Xb.g();
  this.C = this.u ? Tb(this.u) : Tb(Xb);
  this.g.onreadystatechange = q(this.Ha, this);
  try {
    this.F = true, this.g.open(b3, String(a), true), this.F = false;
  } catch (f2) {
    od(this, f2);
    return;
  }
  a = c || "";
  c = new Map(this.headers);
  if (d)
    if (Object.getPrototypeOf(d) === Object.prototype)
      for (var e in d)
        c.set(e, d[e]);
    else if ("function" === typeof d.keys && "function" === typeof d.get)
      for (const f2 of d.keys())
        c.set(f2, d.get(f2));
    else
      throw Error("Unknown input type for opt_headers: " + String(d));
  d = Array.from(c.keys()).find((f2) => "content-type" == f2.toLowerCase());
  e = l.FormData && a instanceof l.FormData;
  !(0 <= la(nd, b3)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [f2, h] of c)
    this.g.setRequestHeader(f2, h);
  this.J && (this.g.responseType = this.J);
  "withCredentials" in this.g && this.g.withCredentials !== this.L && (this.g.withCredentials = this.L);
  try {
    pd(this), 0 < this.B && ((this.K = qd(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = q(this.qa, this)) : this.A = Ab(this.qa, this.B, this)), this.v = true, this.g.send(a), this.v = false;
  } catch (f2) {
    od(this, f2);
  }
};
function qd(a) {
  return y && Ia() && "number" === typeof a.timeout && void 0 !== a.ontimeout;
}
k.qa = function() {
  "undefined" != typeof goog && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, C(this, "timeout"), this.abort(8));
};
function od(a, b3) {
  a.h = false;
  a.g && (a.l = true, a.g.abort(), a.l = false);
  a.j = b3;
  a.m = 5;
  rd(a);
  sd(a);
}
function rd(a) {
  a.D || (a.D = true, C(a, "complete"), C(a, "error"));
}
k.abort = function(a) {
  this.g && this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false, this.m = a || 7, C(this, "complete"), C(this, "abort"), sd(this));
};
k.M = function() {
  this.g && (this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false), sd(this, true));
  W.X.M.call(this);
};
k.Ha = function() {
  this.s || (this.F || this.v || this.l ? td(this) : this.fb());
};
k.fb = function() {
  td(this);
};
function td(a) {
  if (a.h && "undefined" != typeof goog && (!a.C[1] || 4 != O(a) || 2 != a.aa())) {
    if (a.v && 4 == O(a))
      Ab(a.Ha, 0, a);
    else if (C(a, "readystatechange"), 4 == O(a)) {
      a.h = false;
      try {
        const n = a.aa();
        a:
          switch (n) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var b3 = true;
              break a;
            default:
              b3 = false;
          }
        var c;
        if (!(c = b3)) {
          var d;
          if (d = 0 === n) {
            var e = String(a.H).match(Ec)[1] || null;
            if (!e && l.self && l.self.location) {
              var f2 = l.self.location.protocol;
              e = f2.substr(0, f2.length - 1);
            }
            d = !md.test(e ? e.toLowerCase() : "");
          }
          c = d;
        }
        if (c)
          C(a, "complete"), C(
            a,
            "success"
          );
        else {
          a.m = 6;
          try {
            var h = 2 < O(a) ? a.g.statusText : "";
          } catch (u) {
            h = "";
          }
          a.j = h + " [" + a.aa() + "]";
          rd(a);
        }
      } finally {
        sd(a);
      }
    }
  }
}
function sd(a, b3) {
  if (a.g) {
    pd(a);
    const c = a.g, d = a.C[0] ? aa : null;
    a.g = null;
    a.C = null;
    b3 || C(a, "ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function pd(a) {
  a.g && a.K && (a.g.ontimeout = null);
  a.A && (l.clearTimeout(a.A), a.A = null);
}
function O(a) {
  return a.g ? a.g.readyState : 0;
}
k.aa = function() {
  try {
    return 2 < O(this) ? this.g.status : -1;
  } catch (a) {
    return -1;
  }
};
k.fa = function() {
  try {
    return this.g ? this.g.responseText : "";
  } catch (a) {
    return "";
  }
};
k.Sa = function(a) {
  if (this.g) {
    var b3 = this.g.responseText;
    a && 0 == b3.indexOf(a) && (b3 = b3.substring(a.length));
    return kd(b3);
  }
};
function hc(a) {
  try {
    if (!a.g)
      return null;
    if ("response" in a.g)
      return a.g.response;
    switch (a.J) {
      case ld:
      case "text":
        return a.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in a.g)
          return a.g.mozResponseArrayBuffer;
    }
    return null;
  } catch (b3) {
    return null;
  }
}
k.Ea = function() {
  return this.m;
};
k.Oa = function() {
  return "string" === typeof this.j ? this.j : String(this.j);
};
function ud(a) {
  let b3 = "";
  Qa(a, function(c, d) {
    b3 += d;
    b3 += ":";
    b3 += c;
    b3 += "\r\n";
  });
  return b3;
}
function vd(a, b3, c) {
  a: {
    for (d in c) {
      var d = false;
      break a;
    }
    d = true;
  }
  d || (c = ud(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : S(a, b3, c));
}
function wd(a, b3, c) {
  return c && c.internalChannelParams ? c.internalChannelParams[a] || b3 : b3;
}
function xd(a) {
  this.Ca = 0;
  this.i = [];
  this.j = new Gb();
  this.ka = this.sa = this.F = this.V = this.g = this.za = this.D = this.ia = this.o = this.S = this.s = null;
  this.ab = this.U = 0;
  this.Za = wd("failFast", false, a);
  this.L = this.v = this.u = this.m = this.l = null;
  this.Y = true;
  this.pa = this.Ba = this.T = -1;
  this.Z = this.A = this.C = 0;
  this.Xa = wd("baseRetryDelayMs", 5e3, a);
  this.bb = wd("retryDelaySeedMs", 1e4, a);
  this.$a = wd("forwardChannelMaxRetries", 2, a);
  this.ta = wd("forwardChannelRequestTimeoutMs", 2e4, a);
  this.ra = a && a.xmlHttpFactory || void 0;
  this.Da = a && a.Zb || false;
  this.J = void 0;
  this.H = a && a.supportsCrossDomainXhr || false;
  this.I = "";
  this.h = new Wc(a && a.concurrentRequestLimit);
  this.Fa = new ad();
  this.O = a && a.fastHandshake || false;
  this.N = a && a.encodeInitMessageHeaders || false;
  this.O && this.N && (this.N = false);
  this.Ya = a && a.Xb || false;
  a && a.Aa && this.j.Aa();
  a && a.forceLongPolling && (this.Y = false);
  this.$ = !this.O && this.Y && a && a.detectBufferingProxy || false;
  this.ja = void 0;
  this.P = 0;
  this.K = false;
  this.la = this.B = null;
}
k = xd.prototype;
k.ma = 8;
k.G = 1;
function Ac(a) {
  yd(a);
  if (3 == a.G) {
    var b3 = a.U++, c = M(a.F);
    S(c, "SID", a.I);
    S(c, "RID", b3);
    S(c, "TYPE", "terminate");
    zd(a, c);
    b3 = new L(a, a.j, b3, void 0);
    b3.K = 2;
    b3.v = dc(M(c));
    c = false;
    l.navigator && l.navigator.sendBeacon && (c = l.navigator.sendBeacon(b3.v.toString(), ""));
    !c && l.Image && (new Image().src = b3.v, c = true);
    c || (b3.g = gc(b3.l, null), b3.g.da(b3.v));
    b3.F = Date.now();
    N(b3);
  }
  Ad(a);
}
function sc(a) {
  a.g && (oc(a), a.g.cancel(), a.g = null);
}
function yd(a) {
  sc(a);
  a.u && (l.clearTimeout(a.u), a.u = null);
  rc(a);
  a.h.cancel();
  a.m && ("number" === typeof a.m && l.clearTimeout(a.m), a.m = null);
}
function zc(a) {
  Yc(a.h) || a.m || (a.m = true, sb(a.Ja, a), a.C = 0);
}
function Bd(a, b3) {
  if (uc(a.h) >= a.h.j - (a.m ? 1 : 0))
    return false;
  if (a.m)
    return a.i = b3.D.concat(a.i), true;
  if (1 == a.G || 2 == a.G || a.C >= (a.Za ? 0 : a.$a))
    return false;
  a.m = J(q(a.Ja, a, b3), Cd(a, a.C));
  a.C++;
  return true;
}
k.Ja = function(a) {
  if (this.m)
    if (this.m = null, 1 == this.G) {
      if (!a) {
        this.U = Math.floor(1e5 * Math.random());
        a = this.U++;
        const e = new L(this, this.j, a, void 0);
        let f2 = this.s;
        this.S && (f2 ? (f2 = Ra(f2), Ta(f2, this.S)) : f2 = this.S);
        null !== this.o || this.N || (e.H = f2, f2 = null);
        if (this.O)
          a: {
            var b3 = 0;
            for (var c = 0; c < this.i.length; c++) {
              b: {
                var d = this.i[c];
                if ("__data__" in d.g && (d = d.g.__data__, "string" === typeof d)) {
                  d = d.length;
                  break b;
                }
                d = void 0;
              }
              if (void 0 === d)
                break;
              b3 += d;
              if (4096 < b3) {
                b3 = c;
                break a;
              }
              if (4096 === b3 || c === this.i.length - 1) {
                b3 = c + 1;
                break a;
              }
            }
            b3 = 1e3;
          }
        else
          b3 = 1e3;
        b3 = Dd(this, e, b3);
        c = M(this.F);
        S(c, "RID", a);
        S(c, "CVER", 22);
        this.D && S(c, "X-HTTP-Session-Id", this.D);
        zd(this, c);
        f2 && (this.N ? b3 = "headers=" + encodeURIComponent(String(ud(f2))) + "&" + b3 : this.o && vd(c, this.o, f2));
        vc(this.h, e);
        this.Ya && S(c, "TYPE", "init");
        this.O ? (S(c, "$req", b3), S(c, "SID", "null"), e.Z = true, cc(e, c, null)) : cc(e, c, b3);
        this.G = 2;
      }
    } else
      3 == this.G && (a ? Ed(this, a) : 0 == this.i.length || Yc(this.h) || Ed(this));
};
function Ed(a, b3) {
  var c;
  b3 ? c = b3.m : c = a.U++;
  const d = M(a.F);
  S(d, "SID", a.I);
  S(d, "RID", c);
  S(d, "AID", a.T);
  zd(a, d);
  a.o && a.s && vd(d, a.o, a.s);
  c = new L(a, a.j, c, a.C + 1);
  null === a.o && (c.H = a.s);
  b3 && (a.i = b3.D.concat(a.i));
  b3 = Dd(a, c, 1e3);
  c.setTimeout(Math.round(0.5 * a.ta) + Math.round(0.5 * a.ta * Math.random()));
  vc(a.h, c);
  cc(c, d, b3);
}
function zd(a, b3) {
  a.ia && Qa(a.ia, function(c, d) {
    S(b3, d, c);
  });
  a.l && Dc({}, function(c, d) {
    S(b3, d, c);
  });
}
function Dd(a, b3, c) {
  c = Math.min(a.i.length, c);
  var d = a.l ? q(a.l.Ra, a.l, a) : null;
  a: {
    var e = a.i;
    let f2 = -1;
    for (; ; ) {
      const h = ["count=" + c];
      -1 == f2 ? 0 < c ? (f2 = e[0].h, h.push("ofs=" + f2)) : f2 = 0 : h.push("ofs=" + f2);
      let n = true;
      for (let u = 0; u < c; u++) {
        let m2 = e[u].h;
        const r = e[u].g;
        m2 -= f2;
        if (0 > m2)
          f2 = Math.max(0, e[u].h - 100), n = false;
        else
          try {
            bd(r, h, "req" + m2 + "_");
          } catch (F2) {
            d && d(r);
          }
      }
      if (n) {
        d = h.join("&");
        break a;
      }
    }
  }
  a = a.i.splice(0, c);
  b3.D = a;
  return d;
}
function yc(a) {
  a.g || a.u || (a.Z = 1, sb(a.Ia, a), a.A = 0);
}
function tc(a) {
  if (a.g || a.u || 3 <= a.A)
    return false;
  a.Z++;
  a.u = J(q(a.Ia, a), Cd(a, a.A));
  a.A++;
  return true;
}
k.Ia = function() {
  this.u = null;
  Fd(this);
  if (this.$ && !(this.K || null == this.g || 0 >= this.P)) {
    var a = 2 * this.P;
    this.j.info("BP detection timer enabled: " + a);
    this.B = J(q(this.eb, this), a);
  }
};
k.eb = function() {
  this.B && (this.B = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.L = false, this.K = true, I(10), sc(this), Fd(this));
};
function oc(a) {
  null != a.B && (l.clearTimeout(a.B), a.B = null);
}
function Fd(a) {
  a.g = new L(a, a.j, "rpc", a.Z);
  null === a.o && (a.g.H = a.s);
  a.g.N = 0;
  var b3 = M(a.sa);
  S(b3, "RID", "rpc");
  S(b3, "SID", a.I);
  S(b3, "CI", a.L ? "0" : "1");
  S(b3, "AID", a.T);
  S(b3, "TYPE", "xmlhttp");
  zd(a, b3);
  a.o && a.s && vd(b3, a.o, a.s);
  a.J && a.g.setTimeout(a.J);
  var c = a.g;
  a = a.ka;
  c.K = 1;
  c.v = dc(M(b3));
  c.s = null;
  c.P = true;
  ec(c, a);
}
k.cb = function() {
  null != this.v && (this.v = null, sc(this), tc(this), I(19));
};
function rc(a) {
  null != a.v && (l.clearTimeout(a.v), a.v = null);
}
function mc(a, b3) {
  var c = null;
  if (a.g == b3) {
    rc(a);
    oc(a);
    a.g = null;
    var d = 2;
  } else if (qc(a.h, b3))
    c = b3.D, xc(a.h, b3), d = 1;
  else
    return;
  if (0 != a.G) {
    if (a.pa = b3.Y, b3.i)
      if (1 == d) {
        c = b3.s ? b3.s.length : 0;
        b3 = Date.now() - b3.F;
        var e = a.C;
        d = Mb();
        C(d, new Pb(d, c));
        zc(a);
      } else
        yc(a);
    else if (e = b3.o, 3 == e || 0 == e && 0 < a.pa || !(1 == d && Bd(a, b3) || 2 == d && tc(a)))
      switch (c && 0 < c.length && (b3 = a.h, b3.i = b3.i.concat(c)), e) {
        case 1:
          R(a, 5);
          break;
        case 4:
          R(a, 10);
          break;
        case 3:
          R(a, 6);
          break;
        default:
          R(a, 2);
      }
  }
}
function Cd(a, b3) {
  let c = a.Xa + Math.floor(Math.random() * a.bb);
  a.l || (c *= 2);
  return c * b3;
}
function R(a, b3) {
  a.j.info("Error code " + b3);
  if (2 == b3) {
    var c = null;
    a.l && (c = null);
    var d = q(a.kb, a);
    c || (c = new T("//www.google.com/images/cleardot.gif"), l.location && "http" == l.location.protocol || Gc(c, "https"), dc(c));
    cd(c.toString(), d);
  } else
    I(2);
  a.G = 0;
  a.l && a.l.va(b3);
  Ad(a);
  yd(a);
}
k.kb = function(a) {
  a ? (this.j.info("Successfully pinged google.com"), I(2)) : (this.j.info("Failed to ping google.com"), I(1));
};
function Ad(a) {
  a.G = 0;
  a.la = [];
  if (a.l) {
    const b3 = Zc(a.h);
    if (0 != b3.length || 0 != a.i.length)
      na(a.la, b3), na(a.la, a.i), a.h.i.length = 0, ma(a.i), a.i.length = 0;
    a.l.ua();
  }
}
function wc(a, b3, c) {
  var d = c instanceof T ? M(c) : new T(c, void 0);
  if ("" != d.g)
    b3 && (d.g = b3 + "." + d.g), Hc(d, d.m);
  else {
    var e = l.location;
    d = e.protocol;
    b3 = b3 ? b3 + "." + e.hostname : e.hostname;
    e = +e.port;
    var f2 = new T(null, void 0);
    d && Gc(f2, d);
    b3 && (f2.g = b3);
    e && Hc(f2, e);
    c && (f2.l = c);
    d = f2;
  }
  c = a.D;
  b3 = a.za;
  c && b3 && S(d, c, b3);
  S(d, "VER", a.ma);
  zd(a, d);
  return d;
}
function gc(a, b3, c) {
  if (b3 && !a.H)
    throw Error("Can't create secondary domain capable XhrIo object.");
  b3 = c && a.Da && !a.ra ? new W(new ed({ jb: true })) : new W(a.ra);
  b3.Ka(a.H);
  return b3;
}
function Gd() {
}
k = Gd.prototype;
k.xa = function() {
};
k.wa = function() {
};
k.va = function() {
};
k.ua = function() {
};
k.Ra = function() {
};
function Hd() {
  if (y && !(10 <= Number(La)))
    throw Error("Environmental error: no available transport.");
}
Hd.prototype.g = function(a, b3) {
  return new X(a, b3);
};
function X(a, b3) {
  B.call(this);
  this.g = new xd(b3);
  this.l = a;
  this.h = b3 && b3.messageUrlParams || null;
  a = b3 && b3.messageHeaders || null;
  b3 && b3.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
  this.g.s = a;
  a = b3 && b3.initMessageHeaders || null;
  b3 && b3.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b3.messageContentType : a = { "X-WebChannel-Content-Type": b3.messageContentType });
  b3 && b3.ya && (a ? a["X-WebChannel-Client-Profile"] = b3.ya : a = { "X-WebChannel-Client-Profile": b3.ya });
  this.g.S = a;
  (a = b3 && b3.Yb) && !pa(a) && (this.g.o = a);
  this.A = b3 && b3.supportsCrossDomainXhr || false;
  this.v = b3 && b3.sendRawJson || false;
  (b3 = b3 && b3.httpSessionIdParam) && !pa(b3) && (this.g.D = b3, a = this.h, null !== a && b3 in a && (a = this.h, b3 in a && delete a[b3]));
  this.j = new Y(this);
}
t(X, B);
X.prototype.m = function() {
  this.g.l = this.j;
  this.A && (this.g.H = true);
  var a = this.g, b3 = this.l, c = this.h || void 0;
  I(0);
  a.V = b3;
  a.ia = c || {};
  a.L = a.Y;
  a.F = wc(a, null, a.V);
  zc(a);
};
X.prototype.close = function() {
  Ac(this.g);
};
X.prototype.u = function(a) {
  var b3 = this.g;
  if ("string" === typeof a) {
    var c = {};
    c.__data__ = a;
    a = c;
  } else
    this.v && (c = {}, c.__data__ = lb(a), a = c);
  b3.i.push(new Vc(b3.ab++, a));
  3 == b3.G && zc(b3);
};
X.prototype.M = function() {
  this.g.l = null;
  delete this.j;
  Ac(this.g);
  delete this.g;
  X.X.M.call(this);
};
function Id(a) {
  Vb.call(this);
  var b3 = a.__sm__;
  if (b3) {
    a: {
      for (const c in b3) {
        a = c;
        break a;
      }
      a = void 0;
    }
    if (this.i = a)
      a = this.i, b3 = null !== b3 && a in b3 ? b3[a] : void 0;
    this.data = b3;
  } else
    this.data = a;
}
t(Id, Vb);
function Jd() {
  Wb.call(this);
  this.status = 1;
}
t(Jd, Wb);
function Y(a) {
  this.g = a;
}
t(Y, Gd);
Y.prototype.xa = function() {
  C(this.g, "a");
};
Y.prototype.wa = function(a) {
  C(this.g, new Id(a));
};
Y.prototype.va = function(a) {
  C(this.g, new Jd());
};
Y.prototype.ua = function() {
  C(this.g, "b");
};
Hd.prototype.createWebChannel = Hd.prototype.g;
X.prototype.send = X.prototype.u;
X.prototype.open = X.prototype.m;
X.prototype.close = X.prototype.close;
Qb.NO_ERROR = 0;
Qb.TIMEOUT = 8;
Qb.HTTP_ERROR = 6;
Rb.COMPLETE = "complete";
Ub.EventType = K;
K.OPEN = "a";
K.CLOSE = "b";
K.ERROR = "c";
K.MESSAGE = "d";
B.prototype.listen = B.prototype.N;
W.prototype.listenOnce = W.prototype.O;
W.prototype.getLastError = W.prototype.Oa;
W.prototype.getLastErrorCode = W.prototype.Ea;
W.prototype.getStatus = W.prototype.aa;
W.prototype.getResponseJson = W.prototype.Sa;
W.prototype.getResponseText = W.prototype.fa;
W.prototype.send = W.prototype.da;
W.prototype.setWithCredentials = W.prototype.Ka;
var createWebChannelTransport = esm.createWebChannelTransport = function() {
  return new Hd();
};
var getStatEventTarget = esm.getStatEventTarget = function() {
  return Mb();
};
var ErrorCode = esm.ErrorCode = Qb;
var EventType = esm.EventType = Rb;
var Event = esm.Event = G;
var Stat = esm.Stat = { sb: 0, vb: 1, wb: 2, Pb: 3, Ub: 4, Rb: 5, Sb: 6, Qb: 7, Ob: 8, Tb: 9, PROXY: 10, NOPROXY: 11, Mb: 12, Ib: 13, Jb: 14, Hb: 15, Kb: 16, Lb: 17, ob: 18, nb: 19, pb: 20 };
var FetchXmlHttpFactory = esm.FetchXmlHttpFactory = ed;
var WebChannel = esm.WebChannel = Ub;
var XhrIo = esm.XhrIo = W;

// node_modules/@firebase/firestore/dist/index.esm2017.js
var b = "@firebase/firestore";
var P2 = class {
  constructor(t2) {
    this.uid = t2;
  }
  isAuthenticated() {
    return null != this.uid;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t2) {
    return t2.uid === this.uid;
  }
};
P2.UNAUTHENTICATED = new P2(null), P2.GOOGLE_CREDENTIALS = new P2("google-credentials-uid"), P2.FIRST_PARTY = new P2("first-party-uid"), P2.MOCK_USER = new P2("mock-user");
var v2 = "9.14.0";
var V2 = new Logger("@firebase/firestore");
function S2() {
  return V2.logLevel;
}
function C2(t2, ...e) {
  if (V2.logLevel <= LogLevel.DEBUG) {
    const n = e.map(k2);
    V2.debug(`Firestore (${v2}): ${t2}`, ...n);
  }
}
function x2(t2, ...e) {
  if (V2.logLevel <= LogLevel.ERROR) {
    const n = e.map(k2);
    V2.error(`Firestore (${v2}): ${t2}`, ...n);
  }
}
function N2(t2, ...e) {
  if (V2.logLevel <= LogLevel.WARN) {
    const n = e.map(k2);
    V2.warn(`Firestore (${v2}): ${t2}`, ...n);
  }
}
function k2(t2) {
  if ("string" == typeof t2)
    return t2;
  try {
    return e = t2, JSON.stringify(e);
  } catch (e2) {
    return t2;
  }
  var e;
}
function O2(t2 = "Unexpected state") {
  const e = `FIRESTORE (${v2}) INTERNAL ASSERTION FAILED: ` + t2;
  throw x2(e), new Error(e);
}
function M2(t2, e) {
  t2 || O2();
}
function $(t2, e) {
  return t2;
}
var B2 = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
};
var L2 = class extends FirebaseError {
  constructor(t2, e) {
    super(t2, e), this.code = t2, this.message = e, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
};
var U2 = class {
  constructor() {
    this.promise = new Promise((t2, e) => {
      this.resolve = t2, this.reject = e;
    });
  }
};
var q2 = class {
  constructor(t2, e) {
    this.user = e, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${t2}`);
  }
};
var K2 = class {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(t2, e) {
    t2.enqueueRetryable(() => e(P2.UNAUTHENTICATED));
  }
  shutdown() {
  }
};
var G2 = class {
  constructor(t2) {
    this.token = t2, this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(t2, e) {
    this.changeListener = e, t2.enqueueRetryable(() => e(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
};
var Q2 = class {
  constructor(t2) {
    this.t = t2, this.currentUser = P2.UNAUTHENTICATED, this.i = 0, this.forceRefresh = false, this.auth = null;
  }
  start(t2, e) {
    let n = this.i;
    const s = (t3) => this.i !== n ? (n = this.i, e(t3)) : Promise.resolve();
    let i = new U2();
    this.o = () => {
      this.i++, this.currentUser = this.u(), i.resolve(), i = new U2(), t2.enqueueRetryable(() => s(this.currentUser));
    };
    const r = () => {
      const e2 = i;
      t2.enqueueRetryable(async () => {
        await e2.promise, await s(this.currentUser);
      });
    }, o = (t3) => {
      C2("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = t3, this.auth.addAuthTokenListener(this.o), r();
    };
    this.t.onInit((t3) => o(t3)), setTimeout(() => {
      if (!this.auth) {
        const t3 = this.t.getImmediate({
          optional: true
        });
        t3 ? o(t3) : (C2("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i.resolve(), i = new U2());
      }
    }, 0), r();
  }
  getToken() {
    const t2 = this.i, e = this.forceRefresh;
    return this.forceRefresh = false, this.auth ? this.auth.getToken(e).then((e2) => this.i !== t2 ? (C2("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : e2 ? (M2("string" == typeof e2.accessToken), new q2(e2.accessToken, this.currentUser)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const t2 = this.auth && this.auth.getUid();
    return M2(null === t2 || "string" == typeof t2), new P2(t2);
  }
};
var j = class {
  constructor(t2, e, n, s) {
    this.h = t2, this.l = e, this.m = n, this.g = s, this.type = "FirstParty", this.user = P2.FIRST_PARTY, this.p = /* @__PURE__ */ new Map();
  }
  I() {
    return this.g ? this.g() : (M2(!("object" != typeof this.h || null === this.h || !this.h.auth || !this.h.auth.getAuthHeaderValueForFirstParty)), this.h.auth.getAuthHeaderValueForFirstParty([]));
  }
  get headers() {
    this.p.set("X-Goog-AuthUser", this.l);
    const t2 = this.I();
    return t2 && this.p.set("Authorization", t2), this.m && this.p.set("X-Goog-Iam-Authorization-Token", this.m), this.p;
  }
};
var W2 = class {
  constructor(t2, e, n, s) {
    this.h = t2, this.l = e, this.m = n, this.g = s;
  }
  getToken() {
    return Promise.resolve(new j(this.h, this.l, this.m, this.g));
  }
  start(t2, e) {
    t2.enqueueRetryable(() => e(P2.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
};
var z2 = class {
  constructor(t2) {
    this.value = t2, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), t2 && t2.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
};
var H2 = class {
  constructor(t2) {
    this.T = t2, this.forceRefresh = false, this.appCheck = null, this.A = null;
  }
  start(t2, e) {
    const n = (t3) => {
      null != t3.error && C2("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${t3.error.message}`);
      const n2 = t3.token !== this.A;
      return this.A = t3.token, C2("FirebaseAppCheckTokenProvider", `Received ${n2 ? "new" : "existing"} token.`), n2 ? e(t3.token) : Promise.resolve();
    };
    this.o = (e2) => {
      t2.enqueueRetryable(() => n(e2));
    };
    const s = (t3) => {
      C2("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = t3, this.appCheck.addTokenListener(this.o);
    };
    this.T.onInit((t3) => s(t3)), setTimeout(() => {
      if (!this.appCheck) {
        const t3 = this.T.getImmediate({
          optional: true
        });
        t3 ? s(t3) : C2("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
      }
    }, 0);
  }
  getToken() {
    const t2 = this.forceRefresh;
    return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(t2).then((t3) => t3 ? (M2("string" == typeof t3.token), this.A = t3.token, new z2(t3.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
};
function Y2(t2) {
  const e = "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t2);
  if (e && "function" == typeof e.getRandomValues)
    e.getRandomValues(n);
  else
    for (let e2 = 0; e2 < t2; e2++)
      n[e2] = Math.floor(256 * Math.random());
  return n;
}
var X2 = class {
  static R() {
    const t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t2.length) * t2.length;
    let n = "";
    for (; n.length < 20; ) {
      const s = Y2(40);
      for (let i = 0; i < s.length; ++i)
        n.length < 20 && s[i] < e && (n += t2.charAt(s[i] % t2.length));
    }
    return n;
  }
};
function Z(t2, e) {
  return t2 < e ? -1 : t2 > e ? 1 : 0;
}
function tt(t2, e, n) {
  return t2.length === e.length && t2.every((t3, s) => n(t3, e[s]));
}
function et(t2) {
  return t2 + "\0";
}
var nt = class {
  constructor(t2, e) {
    if (this.seconds = t2, this.nanoseconds = e, e < 0)
      throw new L2(B2.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9)
      throw new L2(B2.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (t2 < -62135596800)
      throw new L2(B2.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
    if (t2 >= 253402300800)
      throw new L2(B2.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
  }
  static now() {
    return nt.fromMillis(Date.now());
  }
  static fromDate(t2) {
    return nt.fromMillis(t2.getTime());
  }
  static fromMillis(t2) {
    const e = Math.floor(t2 / 1e3), n = Math.floor(1e6 * (t2 - 1e3 * e));
    return new nt(e, n);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t2) {
    return this.seconds === t2.seconds ? Z(this.nanoseconds, t2.nanoseconds) : Z(this.seconds, t2.seconds);
  }
  isEqual(t2) {
    return t2.seconds === this.seconds && t2.nanoseconds === this.nanoseconds;
  }
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  valueOf() {
    const t2 = this.seconds - -62135596800;
    return String(t2).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
};
var st = class {
  constructor(t2) {
    this.timestamp = t2;
  }
  static fromTimestamp(t2) {
    return new st(t2);
  }
  static min() {
    return new st(new nt(0, 0));
  }
  static max() {
    return new st(new nt(253402300799, 999999999));
  }
  compareTo(t2) {
    return this.timestamp._compareTo(t2.timestamp);
  }
  isEqual(t2) {
    return this.timestamp.isEqual(t2.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
};
var it = class {
  constructor(t2, e, n) {
    void 0 === e ? e = 0 : e > t2.length && O2(), void 0 === n ? n = t2.length - e : n > t2.length - e && O2(), this.segments = t2, this.offset = e, this.len = n;
  }
  get length() {
    return this.len;
  }
  isEqual(t2) {
    return 0 === it.comparator(this, t2);
  }
  child(t2) {
    const e = this.segments.slice(this.offset, this.limit());
    return t2 instanceof it ? t2.forEach((t3) => {
      e.push(t3);
    }) : e.push(t2), this.construct(e);
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(t2) {
    return t2 = void 0 === t2 ? 1 : t2, this.construct(this.segments, this.offset + t2, this.length - t2);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t2) {
    return this.segments[this.offset + t2];
  }
  isEmpty() {
    return 0 === this.length;
  }
  isPrefixOf(t2) {
    if (t2.length < this.length)
      return false;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }
  isImmediateParentOf(t2) {
    if (this.length + 1 !== t2.length)
      return false;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }
  forEach(t2) {
    for (let e = this.offset, n = this.limit(); e < n; e++)
      t2(this.segments[e]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t2, e) {
    const n = Math.min(t2.length, e.length);
    for (let s = 0; s < n; s++) {
      const n2 = t2.get(s), i = e.get(s);
      if (n2 < i)
        return -1;
      if (n2 > i)
        return 1;
    }
    return t2.length < e.length ? -1 : t2.length > e.length ? 1 : 0;
  }
};
var rt = class extends it {
  construct(t2, e, n) {
    return new rt(t2, e, n);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  static fromString(...t2) {
    const e = [];
    for (const n of t2) {
      if (n.indexOf("//") >= 0)
        throw new L2(B2.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
      e.push(...n.split("/").filter((t3) => t3.length > 0));
    }
    return new rt(e);
  }
  static emptyPath() {
    return new rt([]);
  }
};
var ot = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
var ut = class extends it {
  construct(t2, e, n) {
    return new ut(t2, e, n);
  }
  static isValidIdentifier(t2) {
    return ot.test(t2);
  }
  canonicalString() {
    return this.toArray().map((t2) => (t2 = t2.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), ut.isValidIdentifier(t2) || (t2 = "`" + t2 + "`"), t2)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return 1 === this.length && "__name__" === this.get(0);
  }
  static keyField() {
    return new ut(["__name__"]);
  }
  static fromServerFormat(t2) {
    const e = [];
    let n = "", s = 0;
    const i = () => {
      if (0 === n.length)
        throw new L2(B2.INVALID_ARGUMENT, `Invalid field path (${t2}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      e.push(n), n = "";
    };
    let r = false;
    for (; s < t2.length; ) {
      const e2 = t2[s];
      if ("\\" === e2) {
        if (s + 1 === t2.length)
          throw new L2(B2.INVALID_ARGUMENT, "Path has trailing escape character: " + t2);
        const e3 = t2[s + 1];
        if ("\\" !== e3 && "." !== e3 && "`" !== e3)
          throw new L2(B2.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t2);
        n += e3, s += 2;
      } else
        "`" === e2 ? (r = !r, s++) : "." !== e2 || r ? (n += e2, s++) : (i(), s++);
    }
    if (i(), r)
      throw new L2(B2.INVALID_ARGUMENT, "Unterminated ` in path: " + t2);
    return new ut(e);
  }
  static emptyPath() {
    return new ut([]);
  }
};
var ct = class {
  constructor(t2) {
    this.path = t2;
  }
  static fromPath(t2) {
    return new ct(rt.fromString(t2));
  }
  static fromName(t2) {
    return new ct(rt.fromString(t2).popFirst(5));
  }
  static empty() {
    return new ct(rt.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(t2) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t2;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t2) {
    return null !== t2 && 0 === rt.comparator(this.path, t2.path);
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t2, e) {
    return rt.comparator(t2.path, e.path);
  }
  static isDocumentKey(t2) {
    return t2.length % 2 == 0;
  }
  static fromSegments(t2) {
    return new ct(new rt(t2.slice()));
  }
};
var at = class {
  constructor(t2, e, n, s) {
    this.indexId = t2, this.collectionGroup = e, this.fields = n, this.indexState = s;
  }
};
function ht(t2) {
  return t2.fields.find((t3) => 2 === t3.kind);
}
function lt(t2) {
  return t2.fields.filter((t3) => 2 !== t3.kind);
}
at.UNKNOWN_ID = -1;
var dt = class {
  constructor(t2, e) {
    this.fieldPath = t2, this.kind = e;
  }
};
var wt = class {
  constructor(t2, e) {
    this.sequenceNumber = t2, this.offset = e;
  }
  static empty() {
    return new wt(0, yt.min());
  }
};
function mt(t2, e) {
  const n = t2.toTimestamp().seconds, s = t2.toTimestamp().nanoseconds + 1, i = st.fromTimestamp(1e9 === s ? new nt(n + 1, 0) : new nt(n, s));
  return new yt(i, ct.empty(), e);
}
function gt(t2) {
  return new yt(t2.readTime, t2.key, -1);
}
var yt = class {
  constructor(t2, e, n) {
    this.readTime = t2, this.documentKey = e, this.largestBatchId = n;
  }
  static min() {
    return new yt(st.min(), ct.empty(), -1);
  }
  static max() {
    return new yt(st.max(), ct.empty(), -1);
  }
};
function pt(t2, e) {
  let n = t2.readTime.compareTo(e.readTime);
  return 0 !== n ? n : (n = ct.comparator(t2.documentKey, e.documentKey), 0 !== n ? n : Z(t2.largestBatchId, e.largestBatchId));
}
var It = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
var Tt = class {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(t2) {
    this.onCommittedListeners.push(t2);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((t2) => t2());
  }
};
async function Et(t2) {
  if (t2.code !== B2.FAILED_PRECONDITION || t2.message !== It)
    throw t2;
  C2("LocalStore", "Unexpectedly lost primary lease");
}
var At = class {
  constructor(t2) {
    this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = false, this.callbackAttached = false, t2((t3) => {
      this.isDone = true, this.result = t3, this.nextCallback && this.nextCallback(t3);
    }, (t3) => {
      this.isDone = true, this.error = t3, this.catchCallback && this.catchCallback(t3);
    });
  }
  catch(t2) {
    return this.next(void 0, t2);
  }
  next(t2, e) {
    return this.callbackAttached && O2(), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(e, this.error) : this.wrapSuccess(t2, this.result) : new At((n, s) => {
      this.nextCallback = (e2) => {
        this.wrapSuccess(t2, e2).next(n, s);
      }, this.catchCallback = (t3) => {
        this.wrapFailure(e, t3).next(n, s);
      };
    });
  }
  toPromise() {
    return new Promise((t2, e) => {
      this.next(t2, e);
    });
  }
  wrapUserFunction(t2) {
    try {
      const e = t2();
      return e instanceof At ? e : At.resolve(e);
    } catch (t3) {
      return At.reject(t3);
    }
  }
  wrapSuccess(t2, e) {
    return t2 ? this.wrapUserFunction(() => t2(e)) : At.resolve(e);
  }
  wrapFailure(t2, e) {
    return t2 ? this.wrapUserFunction(() => t2(e)) : At.reject(e);
  }
  static resolve(t2) {
    return new At((e, n) => {
      e(t2);
    });
  }
  static reject(t2) {
    return new At((e, n) => {
      n(t2);
    });
  }
  static waitFor(t2) {
    return new At((e, n) => {
      let s = 0, i = 0, r = false;
      t2.forEach((t3) => {
        ++s, t3.next(() => {
          ++i, r && i === s && e();
        }, (t4) => n(t4));
      }), r = true, i === s && e();
    });
  }
  static or(t2) {
    let e = At.resolve(false);
    for (const n of t2)
      e = e.next((t3) => t3 ? At.resolve(t3) : n());
    return e;
  }
  static forEach(t2, e) {
    const n = [];
    return t2.forEach((t3, s) => {
      n.push(e.call(this, t3, s));
    }), this.waitFor(n);
  }
  static mapArray(t2, e) {
    return new At((n, s) => {
      const i = t2.length, r = new Array(i);
      let o = 0;
      for (let u = 0; u < i; u++) {
        const c = u;
        e(t2[c]).next((t3) => {
          r[c] = t3, ++o, o === i && n(r);
        }, (t3) => s(t3));
      }
    });
  }
  static doWhile(t2, e) {
    return new At((n, s) => {
      const i = () => {
        true === t2() ? e().next(() => {
          i();
        }, s) : n();
      };
      i();
    });
  }
};
var Rt = class {
  constructor(t2, e) {
    this.action = t2, this.transaction = e, this.aborted = false, this.P = new U2(), this.transaction.oncomplete = () => {
      this.P.resolve();
    }, this.transaction.onabort = () => {
      e.error ? this.P.reject(new vt(t2, e.error)) : this.P.resolve();
    }, this.transaction.onerror = (e2) => {
      const n = xt(e2.target.error);
      this.P.reject(new vt(t2, n));
    };
  }
  static open(t2, e, n, s) {
    try {
      return new Rt(e, t2.transaction(s, n));
    } catch (t3) {
      throw new vt(e, t3);
    }
  }
  get v() {
    return this.P.promise;
  }
  abort(t2) {
    t2 && this.P.reject(t2), this.aborted || (C2("SimpleDb", "Aborting transaction:", t2 ? t2.message : "Client-initiated abort"), this.aborted = true, this.transaction.abort());
  }
  V() {
    const t2 = this.transaction;
    this.aborted || "function" != typeof t2.commit || t2.commit();
  }
  store(t2) {
    const e = this.transaction.objectStore(t2);
    return new St(e);
  }
};
var bt = class {
  constructor(t2, e, n) {
    this.name = t2, this.version = e, this.S = n;
    12.2 === bt.D(getUA()) && x2("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
  }
  static delete(t2) {
    return C2("SimpleDb", "Removing database:", t2), Dt(window.indexedDB.deleteDatabase(t2)).toPromise();
  }
  static C() {
    if (!isIndexedDBAvailable())
      return false;
    if (bt.N())
      return true;
    const t2 = getUA(), e = bt.D(t2), n = 0 < e && e < 10, s = bt.k(t2), i = 0 < s && s < 4.5;
    return !(t2.indexOf("MSIE ") > 0 || t2.indexOf("Trident/") > 0 || t2.indexOf("Edge/") > 0 || n || i);
  }
  static N() {
    var t2;
    return "undefined" != typeof process && "YES" === (null === (t2 = process.env) || void 0 === t2 ? void 0 : t2.O);
  }
  static M(t2, e) {
    return t2.store(e);
  }
  static D(t2) {
    const e = t2.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(n);
  }
  static k(t2) {
    const e = t2.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(n);
  }
  async F(t2) {
    return this.db || (C2("SimpleDb", "Opening database:", this.name), this.db = await new Promise((e, n) => {
      const s = indexedDB.open(this.name, this.version);
      s.onsuccess = (t3) => {
        const n2 = t3.target.result;
        e(n2);
      }, s.onblocked = () => {
        n(new vt(t2, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
      }, s.onerror = (e2) => {
        const s2 = e2.target.error;
        "VersionError" === s2.name ? n(new L2(B2.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : "InvalidStateError" === s2.name ? n(new L2(B2.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + s2)) : n(new vt(t2, s2));
      }, s.onupgradeneeded = (t3) => {
        C2("SimpleDb", 'Database "' + this.name + '" requires upgrade from version:', t3.oldVersion);
        const e2 = t3.target.result;
        this.S.$(e2, s.transaction, t3.oldVersion, this.version).next(() => {
          C2("SimpleDb", "Database upgrade to version " + this.version + " complete");
        });
      };
    })), this.B && (this.db.onversionchange = (t3) => this.B(t3)), this.db;
  }
  L(t2) {
    this.B = t2, this.db && (this.db.onversionchange = (e) => t2(e));
  }
  async runTransaction(t2, e, n, s) {
    const i = "readonly" === e;
    let r = 0;
    for (; ; ) {
      ++r;
      try {
        this.db = await this.F(t2);
        const e2 = Rt.open(this.db, t2, i ? "readonly" : "readwrite", n), r2 = s(e2).next((t3) => (e2.V(), t3)).catch((t3) => (e2.abort(t3), At.reject(t3))).toPromise();
        return r2.catch(() => {
        }), await e2.v, r2;
      } catch (t3) {
        const e2 = t3, n2 = "FirebaseError" !== e2.name && r < 3;
        if (C2("SimpleDb", "Transaction failed with error:", e2.message, "Retrying:", n2), this.close(), !n2)
          return Promise.reject(e2);
      }
    }
  }
  close() {
    this.db && this.db.close(), this.db = void 0;
  }
};
var Pt = class {
  constructor(t2) {
    this.U = t2, this.q = false, this.K = null;
  }
  get isDone() {
    return this.q;
  }
  get G() {
    return this.K;
  }
  set cursor(t2) {
    this.U = t2;
  }
  done() {
    this.q = true;
  }
  j(t2) {
    this.K = t2;
  }
  delete() {
    return Dt(this.U.delete());
  }
};
var vt = class extends L2 {
  constructor(t2, e) {
    super(B2.UNAVAILABLE, `IndexedDB transaction '${t2}' failed: ${e}`), this.name = "IndexedDbTransactionError";
  }
};
function Vt(t2) {
  return "IndexedDbTransactionError" === t2.name;
}
var St = class {
  constructor(t2) {
    this.store = t2;
  }
  put(t2, e) {
    let n;
    return void 0 !== e ? (C2("SimpleDb", "PUT", this.store.name, t2, e), n = this.store.put(e, t2)) : (C2("SimpleDb", "PUT", this.store.name, "<auto-key>", t2), n = this.store.put(t2)), Dt(n);
  }
  add(t2) {
    C2("SimpleDb", "ADD", this.store.name, t2, t2);
    return Dt(this.store.add(t2));
  }
  get(t2) {
    return Dt(this.store.get(t2)).next((e) => (void 0 === e && (e = null), C2("SimpleDb", "GET", this.store.name, t2, e), e));
  }
  delete(t2) {
    C2("SimpleDb", "DELETE", this.store.name, t2);
    return Dt(this.store.delete(t2));
  }
  count() {
    C2("SimpleDb", "COUNT", this.store.name);
    return Dt(this.store.count());
  }
  W(t2, e) {
    const n = this.options(t2, e);
    if (n.index || "function" != typeof this.store.getAll) {
      const t3 = this.cursor(n), e2 = [];
      return this.H(t3, (t4, n2) => {
        e2.push(n2);
      }).next(() => e2);
    }
    {
      const t3 = this.store.getAll(n.range);
      return new At((e2, n2) => {
        t3.onerror = (t4) => {
          n2(t4.target.error);
        }, t3.onsuccess = (t4) => {
          e2(t4.target.result);
        };
      });
    }
  }
  J(t2, e) {
    const n = this.store.getAll(t2, null === e ? void 0 : e);
    return new At((t3, e2) => {
      n.onerror = (t4) => {
        e2(t4.target.error);
      }, n.onsuccess = (e3) => {
        t3(e3.target.result);
      };
    });
  }
  Y(t2, e) {
    C2("SimpleDb", "DELETE ALL", this.store.name);
    const n = this.options(t2, e);
    n.X = false;
    const s = this.cursor(n);
    return this.H(s, (t3, e2, n2) => n2.delete());
  }
  Z(t2, e) {
    let n;
    e ? n = t2 : (n = {}, e = t2);
    const s = this.cursor(n);
    return this.H(s, e);
  }
  tt(t2) {
    const e = this.cursor({});
    return new At((n, s) => {
      e.onerror = (t3) => {
        const e2 = xt(t3.target.error);
        s(e2);
      }, e.onsuccess = (e2) => {
        const s2 = e2.target.result;
        s2 ? t2(s2.primaryKey, s2.value).next((t3) => {
          t3 ? s2.continue() : n();
        }) : n();
      };
    });
  }
  H(t2, e) {
    const n = [];
    return new At((s, i) => {
      t2.onerror = (t3) => {
        i(t3.target.error);
      }, t2.onsuccess = (t3) => {
        const i2 = t3.target.result;
        if (!i2)
          return void s();
        const r = new Pt(i2), o = e(i2.primaryKey, i2.value, r);
        if (o instanceof At) {
          const t4 = o.catch((t5) => (r.done(), At.reject(t5)));
          n.push(t4);
        }
        r.isDone ? s() : null === r.G ? i2.continue() : i2.continue(r.G);
      };
    }).next(() => At.waitFor(n));
  }
  options(t2, e) {
    let n;
    return void 0 !== t2 && ("string" == typeof t2 ? n = t2 : e = t2), {
      index: n,
      range: e
    };
  }
  cursor(t2) {
    let e = "next";
    if (t2.reverse && (e = "prev"), t2.index) {
      const n = this.store.index(t2.index);
      return t2.X ? n.openKeyCursor(t2.range, e) : n.openCursor(t2.range, e);
    }
    return this.store.openCursor(t2.range, e);
  }
};
function Dt(t2) {
  return new At((e, n) => {
    t2.onsuccess = (t3) => {
      const n2 = t3.target.result;
      e(n2);
    }, t2.onerror = (t3) => {
      const e2 = xt(t3.target.error);
      n(e2);
    };
  });
}
var Ct = false;
function xt(t2) {
  const e = bt.D(getUA());
  if (e >= 12.2 && e < 13) {
    const e2 = "An internal error was encountered in the Indexed Database server";
    if (t2.message.indexOf(e2) >= 0) {
      const t3 = new L2("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e2}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
      return Ct || (Ct = true, setTimeout(() => {
        throw t3;
      }, 0)), t3;
    }
  }
  return t2;
}
var Nt = class {
  constructor(t2, e) {
    this.asyncQueue = t2, this.et = e, this.task = null;
  }
  start() {
    this.nt(15e3);
  }
  stop() {
    this.task && (this.task.cancel(), this.task = null);
  }
  get started() {
    return null !== this.task;
  }
  nt(t2) {
    C2("IndexBackiller", `Scheduled in ${t2}ms`), this.task = this.asyncQueue.enqueueAfterDelay("index_backfill", t2, async () => {
      this.task = null;
      try {
        C2("IndexBackiller", `Documents written: ${await this.et.st()}`);
      } catch (t3) {
        Vt(t3) ? C2("IndexBackiller", "Ignoring IndexedDB error during index backfill: ", t3) : await Et(t3);
      }
      await this.nt(6e4);
    });
  }
};
var kt = class {
  constructor(t2, e) {
    this.localStore = t2, this.persistence = e;
  }
  async st(t2 = 50) {
    return this.persistence.runTransaction("Backfill Indexes", "readwrite-primary", (e) => this.it(e, t2));
  }
  it(t2, e) {
    const n = /* @__PURE__ */ new Set();
    let s = e, i = true;
    return At.doWhile(() => true === i && s > 0, () => this.localStore.indexManager.getNextCollectionGroupToUpdate(t2).next((e2) => {
      if (null !== e2 && !n.has(e2))
        return C2("IndexBackiller", `Processing collection: ${e2}`), this.rt(t2, e2, s).next((t3) => {
          s -= t3, n.add(e2);
        });
      i = false;
    })).next(() => e - s);
  }
  rt(t2, e, n) {
    return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t2, e).next((s) => this.localStore.localDocuments.getNextDocuments(t2, e, s, n).next((n2) => {
      const i = n2.changes;
      return this.localStore.indexManager.updateIndexEntries(t2, i).next(() => this.ot(s, n2)).next((n3) => (C2("IndexBackiller", `Updating offset: ${n3}`), this.localStore.indexManager.updateCollectionGroup(t2, e, n3))).next(() => i.size);
    }));
  }
  ot(t2, e) {
    let n = t2;
    return e.changes.forEach((t3, e2) => {
      const s = gt(e2);
      pt(s, n) > 0 && (n = s);
    }), new yt(n.readTime, n.documentKey, Math.max(e.batchId, t2.largestBatchId));
  }
};
var Ot = class {
  constructor(t2, e) {
    this.previousValue = t2, e && (e.sequenceNumberHandler = (t3) => this.ut(t3), this.ct = (t3) => e.writeSequenceNumber(t3));
  }
  ut(t2) {
    return this.previousValue = Math.max(t2, this.previousValue), this.previousValue;
  }
  next() {
    const t2 = ++this.previousValue;
    return this.ct && this.ct(t2), t2;
  }
};
function Mt(t2) {
  let e = 0;
  for (const n in t2)
    Object.prototype.hasOwnProperty.call(t2, n) && e++;
  return e;
}
function Ft(t2, e) {
  for (const n in t2)
    Object.prototype.hasOwnProperty.call(t2, n) && e(n, t2[n]);
}
function $t(t2) {
  for (const e in t2)
    if (Object.prototype.hasOwnProperty.call(t2, e))
      return false;
  return true;
}
Ot.at = -1;
var Bt = class {
  constructor(t2, e) {
    this.comparator = t2, this.root = e || Ut.EMPTY;
  }
  insert(t2, e) {
    return new Bt(this.comparator, this.root.insert(t2, e, this.comparator).copy(null, null, Ut.BLACK, null, null));
  }
  remove(t2) {
    return new Bt(this.comparator, this.root.remove(t2, this.comparator).copy(null, null, Ut.BLACK, null, null));
  }
  get(t2) {
    let e = this.root;
    for (; !e.isEmpty(); ) {
      const n = this.comparator(t2, e.key);
      if (0 === n)
        return e.value;
      n < 0 ? e = e.left : n > 0 && (e = e.right);
    }
    return null;
  }
  indexOf(t2) {
    let e = 0, n = this.root;
    for (; !n.isEmpty(); ) {
      const s = this.comparator(t2, n.key);
      if (0 === s)
        return e + n.left.size;
      s < 0 ? n = n.left : (e += n.left.size + 1, n = n.right);
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(t2) {
    return this.root.inorderTraversal(t2);
  }
  forEach(t2) {
    this.inorderTraversal((e, n) => (t2(e, n), false));
  }
  toString() {
    const t2 = [];
    return this.inorderTraversal((e, n) => (t2.push(`${e}:${n}`), false)), `{${t2.join(", ")}}`;
  }
  reverseTraversal(t2) {
    return this.root.reverseTraversal(t2);
  }
  getIterator() {
    return new Lt(this.root, null, this.comparator, false);
  }
  getIteratorFrom(t2) {
    return new Lt(this.root, t2, this.comparator, false);
  }
  getReverseIterator() {
    return new Lt(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(t2) {
    return new Lt(this.root, t2, this.comparator, true);
  }
};
var Lt = class {
  constructor(t2, e, n, s) {
    this.isReverse = s, this.nodeStack = [];
    let i = 1;
    for (; !t2.isEmpty(); )
      if (i = e ? n(t2.key, e) : 1, e && s && (i *= -1), i < 0)
        t2 = this.isReverse ? t2.left : t2.right;
      else {
        if (0 === i) {
          this.nodeStack.push(t2);
          break;
        }
        this.nodeStack.push(t2), t2 = this.isReverse ? t2.right : t2.left;
      }
  }
  getNext() {
    let t2 = this.nodeStack.pop();
    const e = {
      key: t2.key,
      value: t2.value
    };
    if (this.isReverse)
      for (t2 = t2.left; !t2.isEmpty(); )
        this.nodeStack.push(t2), t2 = t2.right;
    else
      for (t2 = t2.right; !t2.isEmpty(); )
        this.nodeStack.push(t2), t2 = t2.left;
    return e;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (0 === this.nodeStack.length)
      return null;
    const t2 = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: t2.key,
      value: t2.value
    };
  }
};
var Ut = class {
  constructor(t2, e, n, s, i) {
    this.key = t2, this.value = e, this.color = null != n ? n : Ut.RED, this.left = null != s ? s : Ut.EMPTY, this.right = null != i ? i : Ut.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  copy(t2, e, n, s, i) {
    return new Ut(null != t2 ? t2 : this.key, null != e ? e : this.value, null != n ? n : this.color, null != s ? s : this.left, null != i ? i : this.right);
  }
  isEmpty() {
    return false;
  }
  inorderTraversal(t2) {
    return this.left.inorderTraversal(t2) || t2(this.key, this.value) || this.right.inorderTraversal(t2);
  }
  reverseTraversal(t2) {
    return this.right.reverseTraversal(t2) || t2(this.key, this.value) || this.left.reverseTraversal(t2);
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(t2, e, n) {
    let s = this;
    const i = n(t2, s.key);
    return s = i < 0 ? s.copy(null, null, null, s.left.insert(t2, e, n), null) : 0 === i ? s.copy(null, e, null, null, null) : s.copy(null, null, null, null, s.right.insert(t2, e, n)), s.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty())
      return Ut.EMPTY;
    let t2 = this;
    return t2.left.isRed() || t2.left.left.isRed() || (t2 = t2.moveRedLeft()), t2 = t2.copy(null, null, null, t2.left.removeMin(), null), t2.fixUp();
  }
  remove(t2, e) {
    let n, s = this;
    if (e(t2, s.key) < 0)
      s.left.isEmpty() || s.left.isRed() || s.left.left.isRed() || (s = s.moveRedLeft()), s = s.copy(null, null, null, s.left.remove(t2, e), null);
    else {
      if (s.left.isRed() && (s = s.rotateRight()), s.right.isEmpty() || s.right.isRed() || s.right.left.isRed() || (s = s.moveRedRight()), 0 === e(t2, s.key)) {
        if (s.right.isEmpty())
          return Ut.EMPTY;
        n = s.right.min(), s = s.copy(n.key, n.value, null, null, s.right.removeMin());
      }
      s = s.copy(null, null, null, null, s.right.remove(t2, e));
    }
    return s.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let t2 = this;
    return t2.right.isRed() && !t2.left.isRed() && (t2 = t2.rotateLeft()), t2.left.isRed() && t2.left.left.isRed() && (t2 = t2.rotateRight()), t2.left.isRed() && t2.right.isRed() && (t2 = t2.colorFlip()), t2;
  }
  moveRedLeft() {
    let t2 = this.colorFlip();
    return t2.right.left.isRed() && (t2 = t2.copy(null, null, null, null, t2.right.rotateRight()), t2 = t2.rotateLeft(), t2 = t2.colorFlip()), t2;
  }
  moveRedRight() {
    let t2 = this.colorFlip();
    return t2.left.left.isRed() && (t2 = t2.rotateRight(), t2 = t2.colorFlip()), t2;
  }
  rotateLeft() {
    const t2 = this.copy(null, null, Ut.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t2, null);
  }
  rotateRight() {
    const t2 = this.copy(null, null, Ut.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t2);
  }
  colorFlip() {
    const t2 = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t2, e);
  }
  checkMaxDepth() {
    const t2 = this.check();
    return Math.pow(2, t2) <= this.size + 1;
  }
  check() {
    if (this.isRed() && this.left.isRed())
      throw O2();
    if (this.right.isRed())
      throw O2();
    const t2 = this.left.check();
    if (t2 !== this.right.check())
      throw O2();
    return t2 + (this.isRed() ? 0 : 1);
  }
};
Ut.EMPTY = null, Ut.RED = true, Ut.BLACK = false;
Ut.EMPTY = new class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw O2();
  }
  get value() {
    throw O2();
  }
  get color() {
    throw O2();
  }
  get left() {
    throw O2();
  }
  get right() {
    throw O2();
  }
  copy(t2, e, n, s, i) {
    return this;
  }
  insert(t2, e, n) {
    return new Ut(t2, e);
  }
  remove(t2, e) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(t2) {
    return false;
  }
  reverseTraversal(t2) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
}();
var qt = class {
  constructor(t2) {
    this.comparator = t2, this.data = new Bt(this.comparator);
  }
  has(t2) {
    return null !== this.data.get(t2);
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t2) {
    return this.data.indexOf(t2);
  }
  forEach(t2) {
    this.data.inorderTraversal((e, n) => (t2(e), false));
  }
  forEachInRange(t2, e) {
    const n = this.data.getIteratorFrom(t2[0]);
    for (; n.hasNext(); ) {
      const s = n.getNext();
      if (this.comparator(s.key, t2[1]) >= 0)
        return;
      e(s.key);
    }
  }
  forEachWhile(t2, e) {
    let n;
    for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); ) {
      if (!t2(n.getNext().key))
        return;
    }
  }
  firstAfterOrEqual(t2) {
    const e = this.data.getIteratorFrom(t2);
    return e.hasNext() ? e.getNext().key : null;
  }
  getIterator() {
    return new Kt(this.data.getIterator());
  }
  getIteratorFrom(t2) {
    return new Kt(this.data.getIteratorFrom(t2));
  }
  add(t2) {
    return this.copy(this.data.remove(t2).insert(t2, true));
  }
  delete(t2) {
    return this.has(t2) ? this.copy(this.data.remove(t2)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t2) {
    let e = this;
    return e.size < t2.size && (e = t2, t2 = this), t2.forEach((t3) => {
      e = e.add(t3);
    }), e;
  }
  isEqual(t2) {
    if (!(t2 instanceof qt))
      return false;
    if (this.size !== t2.size)
      return false;
    const e = this.data.getIterator(), n = t2.data.getIterator();
    for (; e.hasNext(); ) {
      const t3 = e.getNext().key, s = n.getNext().key;
      if (0 !== this.comparator(t3, s))
        return false;
    }
    return true;
  }
  toArray() {
    const t2 = [];
    return this.forEach((e) => {
      t2.push(e);
    }), t2;
  }
  toString() {
    const t2 = [];
    return this.forEach((e) => t2.push(e)), "SortedSet(" + t2.toString() + ")";
  }
  copy(t2) {
    const e = new qt(this.comparator);
    return e.data = t2, e;
  }
};
var Kt = class {
  constructor(t2) {
    this.iter = t2;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
};
function Gt(t2) {
  return t2.hasNext() ? t2.getNext() : void 0;
}
var Qt = class {
  constructor(t2) {
    this.fields = t2, t2.sort(ut.comparator);
  }
  static empty() {
    return new Qt([]);
  }
  unionWith(t2) {
    let e = new qt(ut.comparator);
    for (const t3 of this.fields)
      e = e.add(t3);
    for (const n of t2)
      e = e.add(n);
    return new Qt(e.toArray());
  }
  covers(t2) {
    for (const e of this.fields)
      if (e.isPrefixOf(t2))
        return true;
    return false;
  }
  isEqual(t2) {
    return tt(this.fields, t2.fields, (t3, e) => t3.isEqual(e));
  }
};
var Wt = class {
  constructor(t2) {
    this.binaryString = t2;
  }
  static fromBase64String(t2) {
    const e = atob(t2);
    return new Wt(e);
  }
  static fromUint8Array(t2) {
    const e = function(t3) {
      let e2 = "";
      for (let n = 0; n < t3.length; ++n)
        e2 += String.fromCharCode(t3[n]);
      return e2;
    }(t2);
    return new Wt(e);
  }
  [Symbol.iterator]() {
    let t2 = 0;
    return {
      next: () => t2 < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(t2++),
        done: false
      } : {
        value: void 0,
        done: true
      }
    };
  }
  toBase64() {
    return t2 = this.binaryString, btoa(t2);
    var t2;
  }
  toUint8Array() {
    return function(t2) {
      const e = new Uint8Array(t2.length);
      for (let n = 0; n < t2.length; n++)
        e[n] = t2.charCodeAt(n);
      return e;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t2) {
    return Z(this.binaryString, t2.binaryString);
  }
  isEqual(t2) {
    return this.binaryString === t2.binaryString;
  }
};
Wt.EMPTY_BYTE_STRING = new Wt("");
var zt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Ht(t2) {
  if (M2(!!t2), "string" == typeof t2) {
    let e = 0;
    const n = zt.exec(t2);
    if (M2(!!n), n[1]) {
      let t3 = n[1];
      t3 = (t3 + "000000000").substr(0, 9), e = Number(t3);
    }
    const s = new Date(t2);
    return {
      seconds: Math.floor(s.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: Jt(t2.seconds),
    nanos: Jt(t2.nanos)
  };
}
function Jt(t2) {
  return "number" == typeof t2 ? t2 : "string" == typeof t2 ? Number(t2) : 0;
}
function Yt(t2) {
  return "string" == typeof t2 ? Wt.fromBase64String(t2) : Wt.fromUint8Array(t2);
}
function Xt(t2) {
  var e, n;
  return "server_timestamp" === (null === (n = ((null === (e = null == t2 ? void 0 : t2.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}
function Zt(t2) {
  const e = t2.mapValue.fields.__previous_value__;
  return Xt(e) ? Zt(e) : e;
}
function te(t2) {
  const e = Ht(t2.mapValue.fields.__local_write_time__.timestampValue);
  return new nt(e.seconds, e.nanos);
}
var ee = class {
  constructor(t2, e, n, s, i, r, o, u) {
    this.databaseId = t2, this.appId = e, this.persistenceKey = n, this.host = s, this.ssl = i, this.forceLongPolling = r, this.autoDetectLongPolling = o, this.useFetchStreams = u;
  }
};
var ne = class {
  constructor(t2, e) {
    this.projectId = t2, this.database = e || "(default)";
  }
  static empty() {
    return new ne("", "");
  }
  get isDefaultDatabase() {
    return "(default)" === this.database;
  }
  isEqual(t2) {
    return t2 instanceof ne && t2.projectId === this.projectId && t2.database === this.database;
  }
};
function se(t2) {
  return null == t2;
}
function ie(t2) {
  return 0 === t2 && 1 / t2 == -1 / 0;
}
function re(t2) {
  return "number" == typeof t2 && Number.isInteger(t2) && !ie(t2) && t2 <= Number.MAX_SAFE_INTEGER && t2 >= Number.MIN_SAFE_INTEGER;
}
var oe = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: "__max__"
      }
    }
  }
};
var ue = {
  nullValue: "NULL_VALUE"
};
function ce(t2) {
  return "nullValue" in t2 ? 0 : "booleanValue" in t2 ? 1 : "integerValue" in t2 || "doubleValue" in t2 ? 2 : "timestampValue" in t2 ? 3 : "stringValue" in t2 ? 5 : "bytesValue" in t2 ? 6 : "referenceValue" in t2 ? 7 : "geoPointValue" in t2 ? 8 : "arrayValue" in t2 ? 9 : "mapValue" in t2 ? Xt(t2) ? 4 : Ee(t2) ? 9007199254740991 : 10 : O2();
}
function ae(t2, e) {
  if (t2 === e)
    return true;
  const n = ce(t2);
  if (n !== ce(e))
    return false;
  switch (n) {
    case 0:
    case 9007199254740991:
      return true;
    case 1:
      return t2.booleanValue === e.booleanValue;
    case 4:
      return te(t2).isEqual(te(e));
    case 3:
      return function(t3, e2) {
        if ("string" == typeof t3.timestampValue && "string" == typeof e2.timestampValue && t3.timestampValue.length === e2.timestampValue.length)
          return t3.timestampValue === e2.timestampValue;
        const n2 = Ht(t3.timestampValue), s = Ht(e2.timestampValue);
        return n2.seconds === s.seconds && n2.nanos === s.nanos;
      }(t2, e);
    case 5:
      return t2.stringValue === e.stringValue;
    case 6:
      return function(t3, e2) {
        return Yt(t3.bytesValue).isEqual(Yt(e2.bytesValue));
      }(t2, e);
    case 7:
      return t2.referenceValue === e.referenceValue;
    case 8:
      return function(t3, e2) {
        return Jt(t3.geoPointValue.latitude) === Jt(e2.geoPointValue.latitude) && Jt(t3.geoPointValue.longitude) === Jt(e2.geoPointValue.longitude);
      }(t2, e);
    case 2:
      return function(t3, e2) {
        if ("integerValue" in t3 && "integerValue" in e2)
          return Jt(t3.integerValue) === Jt(e2.integerValue);
        if ("doubleValue" in t3 && "doubleValue" in e2) {
          const n2 = Jt(t3.doubleValue), s = Jt(e2.doubleValue);
          return n2 === s ? ie(n2) === ie(s) : isNaN(n2) && isNaN(s);
        }
        return false;
      }(t2, e);
    case 9:
      return tt(t2.arrayValue.values || [], e.arrayValue.values || [], ae);
    case 10:
      return function(t3, e2) {
        const n2 = t3.mapValue.fields || {}, s = e2.mapValue.fields || {};
        if (Mt(n2) !== Mt(s))
          return false;
        for (const t4 in n2)
          if (n2.hasOwnProperty(t4) && (void 0 === s[t4] || !ae(n2[t4], s[t4])))
            return false;
        return true;
      }(t2, e);
    default:
      return O2();
  }
}
function he(t2, e) {
  return void 0 !== (t2.values || []).find((t3) => ae(t3, e));
}
function le(t2, e) {
  if (t2 === e)
    return 0;
  const n = ce(t2), s = ce(e);
  if (n !== s)
    return Z(n, s);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return Z(t2.booleanValue, e.booleanValue);
    case 2:
      return function(t3, e2) {
        const n2 = Jt(t3.integerValue || t3.doubleValue), s2 = Jt(e2.integerValue || e2.doubleValue);
        return n2 < s2 ? -1 : n2 > s2 ? 1 : n2 === s2 ? 0 : isNaN(n2) ? isNaN(s2) ? 0 : -1 : 1;
      }(t2, e);
    case 3:
      return fe(t2.timestampValue, e.timestampValue);
    case 4:
      return fe(te(t2), te(e));
    case 5:
      return Z(t2.stringValue, e.stringValue);
    case 6:
      return function(t3, e2) {
        const n2 = Yt(t3), s2 = Yt(e2);
        return n2.compareTo(s2);
      }(t2.bytesValue, e.bytesValue);
    case 7:
      return function(t3, e2) {
        const n2 = t3.split("/"), s2 = e2.split("/");
        for (let t4 = 0; t4 < n2.length && t4 < s2.length; t4++) {
          const e3 = Z(n2[t4], s2[t4]);
          if (0 !== e3)
            return e3;
        }
        return Z(n2.length, s2.length);
      }(t2.referenceValue, e.referenceValue);
    case 8:
      return function(t3, e2) {
        const n2 = Z(Jt(t3.latitude), Jt(e2.latitude));
        if (0 !== n2)
          return n2;
        return Z(Jt(t3.longitude), Jt(e2.longitude));
      }(t2.geoPointValue, e.geoPointValue);
    case 9:
      return function(t3, e2) {
        const n2 = t3.values || [], s2 = e2.values || [];
        for (let t4 = 0; t4 < n2.length && t4 < s2.length; ++t4) {
          const e3 = le(n2[t4], s2[t4]);
          if (e3)
            return e3;
        }
        return Z(n2.length, s2.length);
      }(t2.arrayValue, e.arrayValue);
    case 10:
      return function(t3, e2) {
        if (t3 === oe.mapValue && e2 === oe.mapValue)
          return 0;
        if (t3 === oe.mapValue)
          return 1;
        if (e2 === oe.mapValue)
          return -1;
        const n2 = t3.fields || {}, s2 = Object.keys(n2), i = e2.fields || {}, r = Object.keys(i);
        s2.sort(), r.sort();
        for (let t4 = 0; t4 < s2.length && t4 < r.length; ++t4) {
          const e3 = Z(s2[t4], r[t4]);
          if (0 !== e3)
            return e3;
          const o = le(n2[s2[t4]], i[r[t4]]);
          if (0 !== o)
            return o;
        }
        return Z(s2.length, r.length);
      }(t2.mapValue, e.mapValue);
    default:
      throw O2();
  }
}
function fe(t2, e) {
  if ("string" == typeof t2 && "string" == typeof e && t2.length === e.length)
    return Z(t2, e);
  const n = Ht(t2), s = Ht(e), i = Z(n.seconds, s.seconds);
  return 0 !== i ? i : Z(n.nanos, s.nanos);
}
function de(t2) {
  return _e(t2);
}
function _e(t2) {
  return "nullValue" in t2 ? "null" : "booleanValue" in t2 ? "" + t2.booleanValue : "integerValue" in t2 ? "" + t2.integerValue : "doubleValue" in t2 ? "" + t2.doubleValue : "timestampValue" in t2 ? function(t3) {
    const e2 = Ht(t3);
    return `time(${e2.seconds},${e2.nanos})`;
  }(t2.timestampValue) : "stringValue" in t2 ? t2.stringValue : "bytesValue" in t2 ? Yt(t2.bytesValue).toBase64() : "referenceValue" in t2 ? (n = t2.referenceValue, ct.fromName(n).toString()) : "geoPointValue" in t2 ? `geo(${(e = t2.geoPointValue).latitude},${e.longitude})` : "arrayValue" in t2 ? function(t3) {
    let e2 = "[", n2 = true;
    for (const s of t3.values || [])
      n2 ? n2 = false : e2 += ",", e2 += _e(s);
    return e2 + "]";
  }(t2.arrayValue) : "mapValue" in t2 ? function(t3) {
    const e2 = Object.keys(t3.fields || {}).sort();
    let n2 = "{", s = true;
    for (const i of e2)
      s ? s = false : n2 += ",", n2 += `${i}:${_e(t3.fields[i])}`;
    return n2 + "}";
  }(t2.mapValue) : O2();
  var e, n;
}
function we(t2, e) {
  return {
    referenceValue: `projects/${t2.projectId}/databases/${t2.database}/documents/${e.path.canonicalString()}`
  };
}
function me(t2) {
  return !!t2 && "integerValue" in t2;
}
function ge(t2) {
  return !!t2 && "arrayValue" in t2;
}
function ye(t2) {
  return !!t2 && "nullValue" in t2;
}
function pe(t2) {
  return !!t2 && "doubleValue" in t2 && isNaN(Number(t2.doubleValue));
}
function Ie(t2) {
  return !!t2 && "mapValue" in t2;
}
function Te(t2) {
  if (t2.geoPointValue)
    return {
      geoPointValue: Object.assign({}, t2.geoPointValue)
    };
  if (t2.timestampValue && "object" == typeof t2.timestampValue)
    return {
      timestampValue: Object.assign({}, t2.timestampValue)
    };
  if (t2.mapValue) {
    const e = {
      mapValue: {
        fields: {}
      }
    };
    return Ft(t2.mapValue.fields, (t3, n) => e.mapValue.fields[t3] = Te(n)), e;
  }
  if (t2.arrayValue) {
    const e = {
      arrayValue: {
        values: []
      }
    };
    for (let n = 0; n < (t2.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = Te(t2.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t2);
}
function Ee(t2) {
  return "__max__" === (((t2.mapValue || {}).fields || {}).__type__ || {}).stringValue;
}
function Ae(t2) {
  return "nullValue" in t2 ? ue : "booleanValue" in t2 ? {
    booleanValue: false
  } : "integerValue" in t2 || "doubleValue" in t2 ? {
    doubleValue: NaN
  } : "timestampValue" in t2 ? {
    timestampValue: {
      seconds: Number.MIN_SAFE_INTEGER
    }
  } : "stringValue" in t2 ? {
    stringValue: ""
  } : "bytesValue" in t2 ? {
    bytesValue: ""
  } : "referenceValue" in t2 ? we(ne.empty(), ct.empty()) : "geoPointValue" in t2 ? {
    geoPointValue: {
      latitude: -90,
      longitude: -180
    }
  } : "arrayValue" in t2 ? {
    arrayValue: {}
  } : "mapValue" in t2 ? {
    mapValue: {}
  } : O2();
}
function Re(t2) {
  return "nullValue" in t2 ? {
    booleanValue: false
  } : "booleanValue" in t2 ? {
    doubleValue: NaN
  } : "integerValue" in t2 || "doubleValue" in t2 ? {
    timestampValue: {
      seconds: Number.MIN_SAFE_INTEGER
    }
  } : "timestampValue" in t2 ? {
    stringValue: ""
  } : "stringValue" in t2 ? {
    bytesValue: ""
  } : "bytesValue" in t2 ? we(ne.empty(), ct.empty()) : "referenceValue" in t2 ? {
    geoPointValue: {
      latitude: -90,
      longitude: -180
    }
  } : "geoPointValue" in t2 ? {
    arrayValue: {}
  } : "arrayValue" in t2 ? {
    mapValue: {}
  } : "mapValue" in t2 ? oe : O2();
}
function be(t2, e) {
  const n = le(t2.value, e.value);
  return 0 !== n ? n : t2.inclusive && !e.inclusive ? -1 : !t2.inclusive && e.inclusive ? 1 : 0;
}
function Pe(t2, e) {
  const n = le(t2.value, e.value);
  return 0 !== n ? n : t2.inclusive && !e.inclusive ? 1 : !t2.inclusive && e.inclusive ? -1 : 0;
}
var ve = class {
  constructor(t2) {
    this.value = t2;
  }
  static empty() {
    return new ve({
      mapValue: {}
    });
  }
  field(t2) {
    if (t2.isEmpty())
      return this.value;
    {
      let e = this.value;
      for (let n = 0; n < t2.length - 1; ++n)
        if (e = (e.mapValue.fields || {})[t2.get(n)], !Ie(e))
          return null;
      return e = (e.mapValue.fields || {})[t2.lastSegment()], e || null;
    }
  }
  set(t2, e) {
    this.getFieldsMap(t2.popLast())[t2.lastSegment()] = Te(e);
  }
  setAll(t2) {
    let e = ut.emptyPath(), n = {}, s = [];
    t2.forEach((t3, i2) => {
      if (!e.isImmediateParentOf(i2)) {
        const t4 = this.getFieldsMap(e);
        this.applyChanges(t4, n, s), n = {}, s = [], e = i2.popLast();
      }
      t3 ? n[i2.lastSegment()] = Te(t3) : s.push(i2.lastSegment());
    });
    const i = this.getFieldsMap(e);
    this.applyChanges(i, n, s);
  }
  delete(t2) {
    const e = this.field(t2.popLast());
    Ie(e) && e.mapValue.fields && delete e.mapValue.fields[t2.lastSegment()];
  }
  isEqual(t2) {
    return ae(this.value, t2.value);
  }
  getFieldsMap(t2) {
    let e = this.value;
    e.mapValue.fields || (e.mapValue = {
      fields: {}
    });
    for (let n = 0; n < t2.length; ++n) {
      let s = e.mapValue.fields[t2.get(n)];
      Ie(s) && s.mapValue.fields || (s = {
        mapValue: {
          fields: {}
        }
      }, e.mapValue.fields[t2.get(n)] = s), e = s;
    }
    return e.mapValue.fields;
  }
  applyChanges(t2, e, n) {
    Ft(e, (e2, n2) => t2[e2] = n2);
    for (const e2 of n)
      delete t2[e2];
  }
  clone() {
    return new ve(Te(this.value));
  }
};
function Ve(t2) {
  const e = [];
  return Ft(t2.fields, (t3, n) => {
    const s = new ut([t3]);
    if (Ie(n)) {
      const t4 = Ve(n.mapValue).fields;
      if (0 === t4.length)
        e.push(s);
      else
        for (const n2 of t4)
          e.push(s.child(n2));
    } else
      e.push(s);
  }), new Qt(e);
}
var Se = class {
  constructor(t2, e, n, s, i, r) {
    this.key = t2, this.documentType = e, this.version = n, this.readTime = s, this.data = i, this.documentState = r;
  }
  static newInvalidDocument(t2) {
    return new Se(t2, 0, st.min(), st.min(), ve.empty(), 0);
  }
  static newFoundDocument(t2, e, n) {
    return new Se(t2, 1, e, st.min(), n, 0);
  }
  static newNoDocument(t2, e) {
    return new Se(t2, 2, e, st.min(), ve.empty(), 0);
  }
  static newUnknownDocument(t2, e) {
    return new Se(t2, 3, e, st.min(), ve.empty(), 2);
  }
  convertToFoundDocument(t2, e) {
    return this.version = t2, this.documentType = 1, this.data = e, this.documentState = 0, this;
  }
  convertToNoDocument(t2) {
    return this.version = t2, this.documentType = 2, this.data = ve.empty(), this.documentState = 0, this;
  }
  convertToUnknownDocument(t2) {
    return this.version = t2, this.documentType = 3, this.data = ve.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = st.min(), this;
  }
  setReadTime(t2) {
    return this.readTime = t2, this;
  }
  get hasLocalMutations() {
    return 1 === this.documentState;
  }
  get hasCommittedMutations() {
    return 2 === this.documentState;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return 0 !== this.documentType;
  }
  isFoundDocument() {
    return 1 === this.documentType;
  }
  isNoDocument() {
    return 2 === this.documentType;
  }
  isUnknownDocument() {
    return 3 === this.documentType;
  }
  isEqual(t2) {
    return t2 instanceof Se && this.key.isEqual(t2.key) && this.version.isEqual(t2.version) && this.documentType === t2.documentType && this.documentState === t2.documentState && this.data.isEqual(t2.data);
  }
  mutableCopy() {
    return new Se(this.key, this.documentType, this.version, this.readTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
};
var De = class {
  constructor(t2, e = null, n = [], s = [], i = null, r = null, o = null) {
    this.path = t2, this.collectionGroup = e, this.orderBy = n, this.filters = s, this.limit = i, this.startAt = r, this.endAt = o, this.ht = null;
  }
};
function Ce(t2, e = null, n = [], s = [], i = null, r = null, o = null) {
  return new De(t2, e, n, s, i, r, o);
}
function xe(t2) {
  const e = $(t2);
  if (null === e.ht) {
    let t3 = e.path.canonicalString();
    null !== e.collectionGroup && (t3 += "|cg:" + e.collectionGroup), t3 += "|f:", t3 += e.filters.map((t4) => {
      return (e2 = t4).field.canonicalString() + e2.op.toString() + de(e2.value);
      var e2;
    }).join(","), t3 += "|ob:", t3 += e.orderBy.map((t4) => function(t5) {
      return t5.field.canonicalString() + t5.dir;
    }(t4)).join(","), se(e.limit) || (t3 += "|l:", t3 += e.limit), e.startAt && (t3 += "|lb:", t3 += e.startAt.inclusive ? "b:" : "a:", t3 += e.startAt.position.map((t4) => de(t4)).join(",")), e.endAt && (t3 += "|ub:", t3 += e.endAt.inclusive ? "a:" : "b:", t3 += e.endAt.position.map((t4) => de(t4)).join(",")), e.ht = t3;
  }
  return e.ht;
}
function Ne(t2) {
  let e = t2.path.canonicalString();
  return null !== t2.collectionGroup && (e += " collectionGroup=" + t2.collectionGroup), t2.filters.length > 0 && (e += `, filters: [${t2.filters.map((t3) => {
    return `${(e2 = t3).field.canonicalString()} ${e2.op} ${de(e2.value)}`;
    var e2;
  }).join(", ")}]`), se(t2.limit) || (e += ", limit: " + t2.limit), t2.orderBy.length > 0 && (e += `, orderBy: [${t2.orderBy.map((t3) => function(t4) {
    return `${t4.field.canonicalString()} (${t4.dir})`;
  }(t3)).join(", ")}]`), t2.startAt && (e += ", startAt: ", e += t2.startAt.inclusive ? "b:" : "a:", e += t2.startAt.position.map((t3) => de(t3)).join(",")), t2.endAt && (e += ", endAt: ", e += t2.endAt.inclusive ? "a:" : "b:", e += t2.endAt.position.map((t3) => de(t3)).join(",")), `Target(${e})`;
}
function ke(t2, e) {
  if (t2.limit !== e.limit)
    return false;
  if (t2.orderBy.length !== e.orderBy.length)
    return false;
  for (let n2 = 0; n2 < t2.orderBy.length; n2++)
    if (!Je(t2.orderBy[n2], e.orderBy[n2]))
      return false;
  if (t2.filters.length !== e.filters.length)
    return false;
  for (let i = 0; i < t2.filters.length; i++)
    if (n = t2.filters[i], s = e.filters[i], n.op !== s.op || !n.field.isEqual(s.field) || !ae(n.value, s.value))
      return false;
  var n, s;
  return t2.collectionGroup === e.collectionGroup && (!!t2.path.isEqual(e.path) && (!!Xe(t2.startAt, e.startAt) && Xe(t2.endAt, e.endAt)));
}
function Oe(t2) {
  return ct.isDocumentKey(t2.path) && null === t2.collectionGroup && 0 === t2.filters.length;
}
function Me(t2, e) {
  return t2.filters.filter((t3) => t3 instanceof Be && t3.field.isEqual(e));
}
function Fe(t2, e, n) {
  let s = ue, i = true;
  for (const n2 of Me(t2, e)) {
    let t3 = ue, e2 = true;
    switch (n2.op) {
      case "<":
      case "<=":
        t3 = Ae(n2.value);
        break;
      case "==":
      case "in":
      case ">=":
        t3 = n2.value;
        break;
      case ">":
        t3 = n2.value, e2 = false;
        break;
      case "!=":
      case "not-in":
        t3 = ue;
    }
    be({
      value: s,
      inclusive: i
    }, {
      value: t3,
      inclusive: e2
    }) < 0 && (s = t3, i = e2);
  }
  if (null !== n)
    for (let r = 0; r < t2.orderBy.length; ++r) {
      if (t2.orderBy[r].field.isEqual(e)) {
        const t3 = n.position[r];
        be({
          value: s,
          inclusive: i
        }, {
          value: t3,
          inclusive: n.inclusive
        }) < 0 && (s = t3, i = n.inclusive);
        break;
      }
    }
  return {
    value: s,
    inclusive: i
  };
}
function $e(t2, e, n) {
  let s = oe, i = true;
  for (const n2 of Me(t2, e)) {
    let t3 = oe, e2 = true;
    switch (n2.op) {
      case ">=":
      case ">":
        t3 = Re(n2.value), e2 = false;
        break;
      case "==":
      case "in":
      case "<=":
        t3 = n2.value;
        break;
      case "<":
        t3 = n2.value, e2 = false;
        break;
      case "!=":
      case "not-in":
        t3 = oe;
    }
    Pe({
      value: s,
      inclusive: i
    }, {
      value: t3,
      inclusive: e2
    }) > 0 && (s = t3, i = e2);
  }
  if (null !== n)
    for (let r = 0; r < t2.orderBy.length; ++r) {
      if (t2.orderBy[r].field.isEqual(e)) {
        const t3 = n.position[r];
        Pe({
          value: s,
          inclusive: i
        }, {
          value: t3,
          inclusive: n.inclusive
        }) > 0 && (s = t3, i = n.inclusive);
        break;
      }
    }
  return {
    value: s,
    inclusive: i
  };
}
var Be = class extends class {
} {
  constructor(t2, e, n) {
    super(), this.field = t2, this.op = e, this.value = n;
  }
  static create(t2, e, n) {
    return t2.isKeyField() ? "in" === e || "not-in" === e ? this.lt(t2, e, n) : new Le(t2, e, n) : "array-contains" === e ? new Ge(t2, n) : "in" === e ? new Qe(t2, n) : "not-in" === e ? new je(t2, n) : "array-contains-any" === e ? new We(t2, n) : new Be(t2, e, n);
  }
  static lt(t2, e, n) {
    return "in" === e ? new Ue(t2, n) : new qe(t2, n);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return "!=" === this.op ? null !== e && this.ft(le(e, this.value)) : null !== e && ce(this.value) === ce(e) && this.ft(le(e, this.value));
  }
  ft(t2) {
    switch (this.op) {
      case "<":
        return t2 < 0;
      case "<=":
        return t2 <= 0;
      case "==":
        return 0 === t2;
      case "!=":
        return 0 !== t2;
      case ">":
        return t2 > 0;
      case ">=":
        return t2 >= 0;
      default:
        return O2();
    }
  }
  dt() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
};
var Le = class extends Be {
  constructor(t2, e, n) {
    super(t2, e, n), this.key = ct.fromName(n.referenceValue);
  }
  matches(t2) {
    const e = ct.comparator(t2.key, this.key);
    return this.ft(e);
  }
};
var Ue = class extends Be {
  constructor(t2, e) {
    super(t2, "in", e), this.keys = Ke("in", e);
  }
  matches(t2) {
    return this.keys.some((e) => e.isEqual(t2.key));
  }
};
var qe = class extends Be {
  constructor(t2, e) {
    super(t2, "not-in", e), this.keys = Ke("not-in", e);
  }
  matches(t2) {
    return !this.keys.some((e) => e.isEqual(t2.key));
  }
};
function Ke(t2, e) {
  var n;
  return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((t3) => ct.fromName(t3.referenceValue));
}
var Ge = class extends Be {
  constructor(t2, e) {
    super(t2, "array-contains", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return ge(e) && he(e.arrayValue, this.value);
  }
};
var Qe = class extends Be {
  constructor(t2, e) {
    super(t2, "in", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return null !== e && he(this.value.arrayValue, e);
  }
};
var je = class extends Be {
  constructor(t2, e) {
    super(t2, "not-in", e);
  }
  matches(t2) {
    if (he(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    }))
      return false;
    const e = t2.data.field(this.field);
    return null !== e && !he(this.value.arrayValue, e);
  }
};
var We = class extends Be {
  constructor(t2, e) {
    super(t2, "array-contains-any", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return !(!ge(e) || !e.arrayValue.values) && e.arrayValue.values.some((t3) => he(this.value.arrayValue, t3));
  }
};
var ze = class {
  constructor(t2, e) {
    this.position = t2, this.inclusive = e;
  }
};
var He = class {
  constructor(t2, e = "asc") {
    this.field = t2, this.dir = e;
  }
};
function Je(t2, e) {
  return t2.dir === e.dir && t2.field.isEqual(e.field);
}
function Ye(t2, e, n) {
  let s = 0;
  for (let i = 0; i < t2.position.length; i++) {
    const r = e[i], o = t2.position[i];
    if (r.field.isKeyField())
      s = ct.comparator(ct.fromName(o.referenceValue), n.key);
    else {
      s = le(o, n.data.field(r.field));
    }
    if ("desc" === r.dir && (s *= -1), 0 !== s)
      break;
  }
  return s;
}
function Xe(t2, e) {
  if (null === t2)
    return null === e;
  if (null === e)
    return false;
  if (t2.inclusive !== e.inclusive || t2.position.length !== e.position.length)
    return false;
  for (let n = 0; n < t2.position.length; n++) {
    if (!ae(t2.position[n], e.position[n]))
      return false;
  }
  return true;
}
var Ze = class {
  constructor(t2, e = null, n = [], s = [], i = null, r = "F", o = null, u = null) {
    this.path = t2, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = s, this.limit = i, this.limitType = r, this.startAt = o, this.endAt = u, this._t = null, this.wt = null, this.startAt, this.endAt;
  }
};
function tn(t2, e, n, s, i, r, o, u) {
  return new Ze(t2, e, n, s, i, r, o, u);
}
function en(t2) {
  return new Ze(t2);
}
function nn(t2) {
  return 0 === t2.filters.length && null === t2.limit && null == t2.startAt && null == t2.endAt && (0 === t2.explicitOrderBy.length || 1 === t2.explicitOrderBy.length && t2.explicitOrderBy[0].field.isKeyField());
}
function sn(t2) {
  return t2.explicitOrderBy.length > 0 ? t2.explicitOrderBy[0].field : null;
}
function rn(t2) {
  for (const e of t2.filters)
    if (e.dt())
      return e.field;
  return null;
}
function on(t2) {
  return null !== t2.collectionGroup;
}
function un(t2) {
  const e = $(t2);
  if (null === e._t) {
    e._t = [];
    const t3 = rn(e), n = sn(e);
    if (null !== t3 && null === n)
      t3.isKeyField() || e._t.push(new He(t3)), e._t.push(new He(ut.keyField(), "asc"));
    else {
      let t4 = false;
      for (const n2 of e.explicitOrderBy)
        e._t.push(n2), n2.field.isKeyField() && (t4 = true);
      if (!t4) {
        const t5 = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
        e._t.push(new He(ut.keyField(), t5));
      }
    }
  }
  return e._t;
}
function cn(t2) {
  const e = $(t2);
  if (!e.wt)
    if ("F" === e.limitType)
      e.wt = Ce(e.path, e.collectionGroup, un(e), e.filters, e.limit, e.startAt, e.endAt);
    else {
      const t3 = [];
      for (const n2 of un(e)) {
        const e2 = "desc" === n2.dir ? "asc" : "desc";
        t3.push(new He(n2.field, e2));
      }
      const n = e.endAt ? new ze(e.endAt.position, e.endAt.inclusive) : null, s = e.startAt ? new ze(e.startAt.position, e.startAt.inclusive) : null;
      e.wt = Ce(e.path, e.collectionGroup, t3, e.filters, e.limit, n, s);
    }
  return e.wt;
}
function an(t2, e, n) {
  return new Ze(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), e, n, t2.startAt, t2.endAt);
}
function hn(t2, e) {
  return ke(cn(t2), cn(e)) && t2.limitType === e.limitType;
}
function ln(t2) {
  return `${xe(cn(t2))}|lt:${t2.limitType}`;
}
function fn(t2) {
  return `Query(target=${Ne(cn(t2))}; limitType=${t2.limitType})`;
}
function dn(t2, e) {
  return e.isFoundDocument() && function(t3, e2) {
    const n = e2.key.path;
    return null !== t3.collectionGroup ? e2.key.hasCollectionId(t3.collectionGroup) && t3.path.isPrefixOf(n) : ct.isDocumentKey(t3.path) ? t3.path.isEqual(n) : t3.path.isImmediateParentOf(n);
  }(t2, e) && function(t3, e2) {
    for (const n of t3.explicitOrderBy)
      if (!n.field.isKeyField() && null === e2.data.field(n.field))
        return false;
    return true;
  }(t2, e) && function(t3, e2) {
    for (const n of t3.filters)
      if (!n.matches(e2))
        return false;
    return true;
  }(t2, e) && function(t3, e2) {
    if (t3.startAt && !function(t4, e3, n) {
      const s = Ye(t4, e3, n);
      return t4.inclusive ? s <= 0 : s < 0;
    }(t3.startAt, un(t3), e2))
      return false;
    if (t3.endAt && !function(t4, e3, n) {
      const s = Ye(t4, e3, n);
      return t4.inclusive ? s >= 0 : s > 0;
    }(t3.endAt, un(t3), e2))
      return false;
    return true;
  }(t2, e);
}
function _n(t2) {
  return t2.collectionGroup || (t2.path.length % 2 == 1 ? t2.path.lastSegment() : t2.path.get(t2.path.length - 2));
}
function wn(t2) {
  return (e, n) => {
    let s = false;
    for (const i of un(t2)) {
      const t3 = mn(i, e, n);
      if (0 !== t3)
        return t3;
      s = s || i.field.isKeyField();
    }
    return 0;
  };
}
function mn(t2, e, n) {
  const s = t2.field.isKeyField() ? ct.comparator(e.key, n.key) : function(t3, e2, n2) {
    const s2 = e2.data.field(t3), i = n2.data.field(t3);
    return null !== s2 && null !== i ? le(s2, i) : O2();
  }(t2.field, e, n);
  switch (t2.dir) {
    case "asc":
      return s;
    case "desc":
      return -1 * s;
    default:
      return O2();
  }
}
function gn(t2, e) {
  if (t2.gt) {
    if (isNaN(e))
      return {
        doubleValue: "NaN"
      };
    if (e === 1 / 0)
      return {
        doubleValue: "Infinity"
      };
    if (e === -1 / 0)
      return {
        doubleValue: "-Infinity"
      };
  }
  return {
    doubleValue: ie(e) ? "-0" : e
  };
}
function yn(t2) {
  return {
    integerValue: "" + t2
  };
}
function pn(t2, e) {
  return re(e) ? yn(e) : gn(t2, e);
}
var In = class {
  constructor() {
    this._ = void 0;
  }
};
function Tn(t2, e, n) {
  return t2 instanceof Rn ? function(t3, e2) {
    const n2 = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: t3.seconds,
            nanos: t3.nanoseconds
          }
        }
      }
    };
    return e2 && (n2.fields.__previous_value__ = e2), {
      mapValue: n2
    };
  }(n, e) : t2 instanceof bn ? Pn(t2, e) : t2 instanceof vn ? Vn(t2, e) : function(t3, e2) {
    const n2 = An(t3, e2), s = Dn(n2) + Dn(t3.yt);
    return me(n2) && me(t3.yt) ? yn(s) : gn(t3.It, s);
  }(t2, e);
}
function En(t2, e, n) {
  return t2 instanceof bn ? Pn(t2, e) : t2 instanceof vn ? Vn(t2, e) : n;
}
function An(t2, e) {
  return t2 instanceof Sn ? me(n = e) || function(t3) {
    return !!t3 && "doubleValue" in t3;
  }(n) ? e : {
    integerValue: 0
  } : null;
  var n;
}
var Rn = class extends In {
};
var bn = class extends In {
  constructor(t2) {
    super(), this.elements = t2;
  }
};
function Pn(t2, e) {
  const n = Cn(e);
  for (const e2 of t2.elements)
    n.some((t3) => ae(t3, e2)) || n.push(e2);
  return {
    arrayValue: {
      values: n
    }
  };
}
var vn = class extends In {
  constructor(t2) {
    super(), this.elements = t2;
  }
};
function Vn(t2, e) {
  let n = Cn(e);
  for (const e2 of t2.elements)
    n = n.filter((t3) => !ae(t3, e2));
  return {
    arrayValue: {
      values: n
    }
  };
}
var Sn = class extends In {
  constructor(t2, e) {
    super(), this.It = t2, this.yt = e;
  }
};
function Dn(t2) {
  return Jt(t2.integerValue || t2.doubleValue);
}
function Cn(t2) {
  return ge(t2) && t2.arrayValue.values ? t2.arrayValue.values.slice() : [];
}
var xn = class {
  constructor(t2, e) {
    this.field = t2, this.transform = e;
  }
};
function Nn(t2, e) {
  return t2.field.isEqual(e.field) && function(t3, e2) {
    return t3 instanceof bn && e2 instanceof bn || t3 instanceof vn && e2 instanceof vn ? tt(t3.elements, e2.elements, ae) : t3 instanceof Sn && e2 instanceof Sn ? ae(t3.yt, e2.yt) : t3 instanceof Rn && e2 instanceof Rn;
  }(t2.transform, e.transform);
}
var kn = class {
  constructor(t2, e) {
    this.version = t2, this.transformResults = e;
  }
};
var On = class {
  constructor(t2, e) {
    this.updateTime = t2, this.exists = e;
  }
  static none() {
    return new On();
  }
  static exists(t2) {
    return new On(void 0, t2);
  }
  static updateTime(t2) {
    return new On(t2);
  }
  get isNone() {
    return void 0 === this.updateTime && void 0 === this.exists;
  }
  isEqual(t2) {
    return this.exists === t2.exists && (this.updateTime ? !!t2.updateTime && this.updateTime.isEqual(t2.updateTime) : !t2.updateTime);
  }
};
function Mn(t2, e) {
  return void 0 !== t2.updateTime ? e.isFoundDocument() && e.version.isEqual(t2.updateTime) : void 0 === t2.exists || t2.exists === e.isFoundDocument();
}
var Fn = class {
};
function $n(t2, e) {
  if (!t2.hasLocalMutations || e && 0 === e.fields.length)
    return null;
  if (null === e)
    return t2.isNoDocument() ? new zn(t2.key, On.none()) : new Kn(t2.key, t2.data, On.none());
  {
    const n = t2.data, s = ve.empty();
    let i = new qt(ut.comparator);
    for (let t3 of e.fields)
      if (!i.has(t3)) {
        let e2 = n.field(t3);
        null === e2 && t3.length > 1 && (t3 = t3.popLast(), e2 = n.field(t3)), null === e2 ? s.delete(t3) : s.set(t3, e2), i = i.add(t3);
      }
    return new Gn(t2.key, s, new Qt(i.toArray()), On.none());
  }
}
function Bn(t2, e, n) {
  t2 instanceof Kn ? function(t3, e2, n2) {
    const s = t3.value.clone(), i = jn(t3.fieldTransforms, e2, n2.transformResults);
    s.setAll(i), e2.convertToFoundDocument(n2.version, s).setHasCommittedMutations();
  }(t2, e, n) : t2 instanceof Gn ? function(t3, e2, n2) {
    if (!Mn(t3.precondition, e2))
      return void e2.convertToUnknownDocument(n2.version);
    const s = jn(t3.fieldTransforms, e2, n2.transformResults), i = e2.data;
    i.setAll(Qn(t3)), i.setAll(s), e2.convertToFoundDocument(n2.version, i).setHasCommittedMutations();
  }(t2, e, n) : function(t3, e2, n2) {
    e2.convertToNoDocument(n2.version).setHasCommittedMutations();
  }(0, e, n);
}
function Ln(t2, e, n, s) {
  return t2 instanceof Kn ? function(t3, e2, n2, s2) {
    if (!Mn(t3.precondition, e2))
      return n2;
    const i = t3.value.clone(), r = Wn(t3.fieldTransforms, s2, e2);
    return i.setAll(r), e2.convertToFoundDocument(e2.version, i).setHasLocalMutations(), null;
  }(t2, e, n, s) : t2 instanceof Gn ? function(t3, e2, n2, s2) {
    if (!Mn(t3.precondition, e2))
      return n2;
    const i = Wn(t3.fieldTransforms, s2, e2), r = e2.data;
    if (r.setAll(Qn(t3)), r.setAll(i), e2.convertToFoundDocument(e2.version, r).setHasLocalMutations(), null === n2)
      return null;
    return n2.unionWith(t3.fieldMask.fields).unionWith(t3.fieldTransforms.map((t4) => t4.field));
  }(t2, e, n, s) : function(t3, e2, n2) {
    if (Mn(t3.precondition, e2))
      return e2.convertToNoDocument(e2.version).setHasLocalMutations(), null;
    return n2;
  }(t2, e, n);
}
function Un(t2, e) {
  let n = null;
  for (const s of t2.fieldTransforms) {
    const t3 = e.data.field(s.field), i = An(s.transform, t3 || null);
    null != i && (null === n && (n = ve.empty()), n.set(s.field, i));
  }
  return n || null;
}
function qn(t2, e) {
  return t2.type === e.type && (!!t2.key.isEqual(e.key) && (!!t2.precondition.isEqual(e.precondition) && (!!function(t3, e2) {
    return void 0 === t3 && void 0 === e2 || !(!t3 || !e2) && tt(t3, e2, (t4, e3) => Nn(t4, e3));
  }(t2.fieldTransforms, e.fieldTransforms) && (0 === t2.type ? t2.value.isEqual(e.value) : 1 !== t2.type || t2.data.isEqual(e.data) && t2.fieldMask.isEqual(e.fieldMask)))));
}
var Kn = class extends Fn {
  constructor(t2, e, n, s = []) {
    super(), this.key = t2, this.value = e, this.precondition = n, this.fieldTransforms = s, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
};
var Gn = class extends Fn {
  constructor(t2, e, n, s, i = []) {
    super(), this.key = t2, this.data = e, this.fieldMask = n, this.precondition = s, this.fieldTransforms = i, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
};
function Qn(t2) {
  const e = /* @__PURE__ */ new Map();
  return t2.fieldMask.fields.forEach((n) => {
    if (!n.isEmpty()) {
      const s = t2.data.field(n);
      e.set(n, s);
    }
  }), e;
}
function jn(t2, e, n) {
  const s = /* @__PURE__ */ new Map();
  M2(t2.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const r = t2[i], o = r.transform, u = e.data.field(r.field);
    s.set(r.field, En(o, u, n[i]));
  }
  return s;
}
function Wn(t2, e, n) {
  const s = /* @__PURE__ */ new Map();
  for (const i of t2) {
    const t3 = i.transform, r = n.data.field(i.field);
    s.set(i.field, Tn(t3, r, e));
  }
  return s;
}
var zn = class extends Fn {
  constructor(t2, e) {
    super(), this.key = t2, this.precondition = e, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var Hn = class extends Fn {
  constructor(t2, e) {
    super(), this.key = t2, this.precondition = e, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var Jn = class {
  constructor(t2) {
    this.count = t2;
  }
};
var Yn;
var Xn;
function Zn(t2) {
  switch (t2) {
    default:
      return O2();
    case B2.CANCELLED:
    case B2.UNKNOWN:
    case B2.DEADLINE_EXCEEDED:
    case B2.RESOURCE_EXHAUSTED:
    case B2.INTERNAL:
    case B2.UNAVAILABLE:
    case B2.UNAUTHENTICATED:
      return false;
    case B2.INVALID_ARGUMENT:
    case B2.NOT_FOUND:
    case B2.ALREADY_EXISTS:
    case B2.PERMISSION_DENIED:
    case B2.FAILED_PRECONDITION:
    case B2.ABORTED:
    case B2.OUT_OF_RANGE:
    case B2.UNIMPLEMENTED:
    case B2.DATA_LOSS:
      return true;
  }
}
function ts(t2) {
  if (void 0 === t2)
    return x2("GRPC error has no .code"), B2.UNKNOWN;
  switch (t2) {
    case Yn.OK:
      return B2.OK;
    case Yn.CANCELLED:
      return B2.CANCELLED;
    case Yn.UNKNOWN:
      return B2.UNKNOWN;
    case Yn.DEADLINE_EXCEEDED:
      return B2.DEADLINE_EXCEEDED;
    case Yn.RESOURCE_EXHAUSTED:
      return B2.RESOURCE_EXHAUSTED;
    case Yn.INTERNAL:
      return B2.INTERNAL;
    case Yn.UNAVAILABLE:
      return B2.UNAVAILABLE;
    case Yn.UNAUTHENTICATED:
      return B2.UNAUTHENTICATED;
    case Yn.INVALID_ARGUMENT:
      return B2.INVALID_ARGUMENT;
    case Yn.NOT_FOUND:
      return B2.NOT_FOUND;
    case Yn.ALREADY_EXISTS:
      return B2.ALREADY_EXISTS;
    case Yn.PERMISSION_DENIED:
      return B2.PERMISSION_DENIED;
    case Yn.FAILED_PRECONDITION:
      return B2.FAILED_PRECONDITION;
    case Yn.ABORTED:
      return B2.ABORTED;
    case Yn.OUT_OF_RANGE:
      return B2.OUT_OF_RANGE;
    case Yn.UNIMPLEMENTED:
      return B2.UNIMPLEMENTED;
    case Yn.DATA_LOSS:
      return B2.DATA_LOSS;
    default:
      return O2();
  }
}
(Xn = Yn || (Yn = {}))[Xn.OK = 0] = "OK", Xn[Xn.CANCELLED = 1] = "CANCELLED", Xn[Xn.UNKNOWN = 2] = "UNKNOWN", Xn[Xn.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Xn[Xn.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Xn[Xn.NOT_FOUND = 5] = "NOT_FOUND", Xn[Xn.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Xn[Xn.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Xn[Xn.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Xn[Xn.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Xn[Xn.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Xn[Xn.ABORTED = 10] = "ABORTED", Xn[Xn.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Xn[Xn.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Xn[Xn.INTERNAL = 13] = "INTERNAL", Xn[Xn.UNAVAILABLE = 14] = "UNAVAILABLE", Xn[Xn.DATA_LOSS = 15] = "DATA_LOSS";
var es = class {
  constructor(t2, e) {
    this.mapKeyFn = t2, this.equalsFn = e, this.inner = {}, this.innerSize = 0;
  }
  get(t2) {
    const e = this.mapKeyFn(t2), n = this.inner[e];
    if (void 0 !== n) {
      for (const [e2, s] of n)
        if (this.equalsFn(e2, t2))
          return s;
    }
  }
  has(t2) {
    return void 0 !== this.get(t2);
  }
  set(t2, e) {
    const n = this.mapKeyFn(t2), s = this.inner[n];
    if (void 0 === s)
      return this.inner[n] = [[t2, e]], void this.innerSize++;
    for (let n2 = 0; n2 < s.length; n2++)
      if (this.equalsFn(s[n2][0], t2))
        return void (s[n2] = [t2, e]);
    s.push([t2, e]), this.innerSize++;
  }
  delete(t2) {
    const e = this.mapKeyFn(t2), n = this.inner[e];
    if (void 0 === n)
      return false;
    for (let s = 0; s < n.length; s++)
      if (this.equalsFn(n[s][0], t2))
        return 1 === n.length ? delete this.inner[e] : n.splice(s, 1), this.innerSize--, true;
    return false;
  }
  forEach(t2) {
    Ft(this.inner, (e, n) => {
      for (const [e2, s] of n)
        t2(e2, s);
    });
  }
  isEmpty() {
    return $t(this.inner);
  }
  size() {
    return this.innerSize;
  }
};
var ns = new Bt(ct.comparator);
function ss() {
  return ns;
}
var is = new Bt(ct.comparator);
function rs(...t2) {
  let e = is;
  for (const n of t2)
    e = e.insert(n.key, n);
  return e;
}
function os(t2) {
  let e = is;
  return t2.forEach((t3, n) => e = e.insert(t3, n.overlayedDocument)), e;
}
function us() {
  return as();
}
function cs() {
  return as();
}
function as() {
  return new es((t2) => t2.toString(), (t2, e) => t2.isEqual(e));
}
var hs = new Bt(ct.comparator);
var ls = new qt(ct.comparator);
function fs(...t2) {
  let e = ls;
  for (const n of t2)
    e = e.add(n);
  return e;
}
var ds = new qt(Z);
function _s() {
  return ds;
}
var ws = class {
  constructor(t2, e, n, s, i) {
    this.snapshotVersion = t2, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = s, this.resolvedLimboDocuments = i;
  }
  static createSynthesizedRemoteEventForCurrentChange(t2, e, n) {
    const s = /* @__PURE__ */ new Map();
    return s.set(t2, ms.createSynthesizedTargetChangeForCurrentChange(t2, e, n)), new ws(st.min(), s, _s(), ss(), fs());
  }
};
var ms = class {
  constructor(t2, e, n, s, i) {
    this.resumeToken = t2, this.current = e, this.addedDocuments = n, this.modifiedDocuments = s, this.removedDocuments = i;
  }
  static createSynthesizedTargetChangeForCurrentChange(t2, e, n) {
    return new ms(n, e, fs(), fs(), fs());
  }
};
var gs = class {
  constructor(t2, e, n, s) {
    this.Tt = t2, this.removedTargetIds = e, this.key = n, this.Et = s;
  }
};
var ys = class {
  constructor(t2, e) {
    this.targetId = t2, this.At = e;
  }
};
var ps = class {
  constructor(t2, e, n = Wt.EMPTY_BYTE_STRING, s = null) {
    this.state = t2, this.targetIds = e, this.resumeToken = n, this.cause = s;
  }
};
var Is = class {
  constructor() {
    this.Rt = 0, this.bt = As(), this.Pt = Wt.EMPTY_BYTE_STRING, this.vt = false, this.Vt = true;
  }
  get current() {
    return this.vt;
  }
  get resumeToken() {
    return this.Pt;
  }
  get St() {
    return 0 !== this.Rt;
  }
  get Dt() {
    return this.Vt;
  }
  Ct(t2) {
    t2.approximateByteSize() > 0 && (this.Vt = true, this.Pt = t2);
  }
  xt() {
    let t2 = fs(), e = fs(), n = fs();
    return this.bt.forEach((s, i) => {
      switch (i) {
        case 0:
          t2 = t2.add(s);
          break;
        case 2:
          e = e.add(s);
          break;
        case 1:
          n = n.add(s);
          break;
        default:
          O2();
      }
    }), new ms(this.Pt, this.vt, t2, e, n);
  }
  Nt() {
    this.Vt = false, this.bt = As();
  }
  kt(t2, e) {
    this.Vt = true, this.bt = this.bt.insert(t2, e);
  }
  Ot(t2) {
    this.Vt = true, this.bt = this.bt.remove(t2);
  }
  Mt() {
    this.Rt += 1;
  }
  Ft() {
    this.Rt -= 1;
  }
  $t() {
    this.Vt = true, this.vt = true;
  }
};
var Ts = class {
  constructor(t2) {
    this.Bt = t2, this.Lt = /* @__PURE__ */ new Map(), this.Ut = ss(), this.qt = Es(), this.Kt = new qt(Z);
  }
  Gt(t2) {
    for (const e of t2.Tt)
      t2.Et && t2.Et.isFoundDocument() ? this.Qt(e, t2.Et) : this.jt(e, t2.key, t2.Et);
    for (const e of t2.removedTargetIds)
      this.jt(e, t2.key, t2.Et);
  }
  Wt(t2) {
    this.forEachTarget(t2, (e) => {
      const n = this.zt(e);
      switch (t2.state) {
        case 0:
          this.Ht(e) && n.Ct(t2.resumeToken);
          break;
        case 1:
          n.Ft(), n.St || n.Nt(), n.Ct(t2.resumeToken);
          break;
        case 2:
          n.Ft(), n.St || this.removeTarget(e);
          break;
        case 3:
          this.Ht(e) && (n.$t(), n.Ct(t2.resumeToken));
          break;
        case 4:
          this.Ht(e) && (this.Jt(e), n.Ct(t2.resumeToken));
          break;
        default:
          O2();
      }
    });
  }
  forEachTarget(t2, e) {
    t2.targetIds.length > 0 ? t2.targetIds.forEach(e) : this.Lt.forEach((t3, n) => {
      this.Ht(n) && e(n);
    });
  }
  Yt(t2) {
    const e = t2.targetId, n = t2.At.count, s = this.Xt(e);
    if (s) {
      const t3 = s.target;
      if (Oe(t3))
        if (0 === n) {
          const n2 = new ct(t3.path);
          this.jt(e, n2, Se.newNoDocument(n2, st.min()));
        } else
          M2(1 === n);
      else {
        this.Zt(e) !== n && (this.Jt(e), this.Kt = this.Kt.add(e));
      }
    }
  }
  te(t2) {
    const e = /* @__PURE__ */ new Map();
    this.Lt.forEach((n2, s2) => {
      const i = this.Xt(s2);
      if (i) {
        if (n2.current && Oe(i.target)) {
          const e2 = new ct(i.target.path);
          null !== this.Ut.get(e2) || this.ee(s2, e2) || this.jt(s2, e2, Se.newNoDocument(e2, t2));
        }
        n2.Dt && (e.set(s2, n2.xt()), n2.Nt());
      }
    });
    let n = fs();
    this.qt.forEach((t3, e2) => {
      let s2 = true;
      e2.forEachWhile((t4) => {
        const e3 = this.Xt(t4);
        return !e3 || 2 === e3.purpose || (s2 = false, false);
      }), s2 && (n = n.add(t3));
    }), this.Ut.forEach((e2, n2) => n2.setReadTime(t2));
    const s = new ws(t2, e, this.Kt, this.Ut, n);
    return this.Ut = ss(), this.qt = Es(), this.Kt = new qt(Z), s;
  }
  Qt(t2, e) {
    if (!this.Ht(t2))
      return;
    const n = this.ee(t2, e.key) ? 2 : 0;
    this.zt(t2).kt(e.key, n), this.Ut = this.Ut.insert(e.key, e), this.qt = this.qt.insert(e.key, this.ne(e.key).add(t2));
  }
  jt(t2, e, n) {
    if (!this.Ht(t2))
      return;
    const s = this.zt(t2);
    this.ee(t2, e) ? s.kt(e, 1) : s.Ot(e), this.qt = this.qt.insert(e, this.ne(e).delete(t2)), n && (this.Ut = this.Ut.insert(e, n));
  }
  removeTarget(t2) {
    this.Lt.delete(t2);
  }
  Zt(t2) {
    const e = this.zt(t2).xt();
    return this.Bt.getRemoteKeysForTarget(t2).size + e.addedDocuments.size - e.removedDocuments.size;
  }
  Mt(t2) {
    this.zt(t2).Mt();
  }
  zt(t2) {
    let e = this.Lt.get(t2);
    return e || (e = new Is(), this.Lt.set(t2, e)), e;
  }
  ne(t2) {
    let e = this.qt.get(t2);
    return e || (e = new qt(Z), this.qt = this.qt.insert(t2, e)), e;
  }
  Ht(t2) {
    const e = null !== this.Xt(t2);
    return e || C2("WatchChangeAggregator", "Detected inactive target", t2), e;
  }
  Xt(t2) {
    const e = this.Lt.get(t2);
    return e && e.St ? null : this.Bt.se(t2);
  }
  Jt(t2) {
    this.Lt.set(t2, new Is());
    this.Bt.getRemoteKeysForTarget(t2).forEach((e) => {
      this.jt(t2, e, null);
    });
  }
  ee(t2, e) {
    return this.Bt.getRemoteKeysForTarget(t2).has(e);
  }
};
function Es() {
  return new Bt(ct.comparator);
}
function As() {
  return new Bt(ct.comparator);
}
var Rs = (() => {
  const t2 = {
    asc: "ASCENDING",
    desc: "DESCENDING"
  };
  return t2;
})();
var bs = (() => {
  const t2 = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
  };
  return t2;
})();
var Ps = class {
  constructor(t2, e) {
    this.databaseId = t2, this.gt = e;
  }
};
function vs(t2, e) {
  if (t2.gt) {
    return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
  }
  return {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function Vs(t2, e) {
  return t2.gt ? e.toBase64() : e.toUint8Array();
}
function Ss(t2, e) {
  return vs(t2, e.toTimestamp());
}
function Ds(t2) {
  return M2(!!t2), st.fromTimestamp(function(t3) {
    const e = Ht(t3);
    return new nt(e.seconds, e.nanos);
  }(t2));
}
function Cs(t2, e) {
  return function(t3) {
    return new rt(["projects", t3.projectId, "databases", t3.database]);
  }(t2).child("documents").child(e).canonicalString();
}
function xs(t2) {
  const e = rt.fromString(t2);
  return M2(ii(e)), e;
}
function Ns(t2, e) {
  return Cs(t2.databaseId, e.path);
}
function ks(t2, e) {
  const n = xs(e);
  if (n.get(1) !== t2.databaseId.projectId)
    throw new L2(B2.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t2.databaseId.projectId);
  if (n.get(3) !== t2.databaseId.database)
    throw new L2(B2.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t2.databaseId.database);
  return new ct($s(n));
}
function Os(t2, e) {
  return Cs(t2.databaseId, e);
}
function Ms(t2) {
  const e = xs(t2);
  return 4 === e.length ? rt.emptyPath() : $s(e);
}
function Fs(t2) {
  return new rt(["projects", t2.databaseId.projectId, "databases", t2.databaseId.database]).canonicalString();
}
function $s(t2) {
  return M2(t2.length > 4 && "documents" === t2.get(4)), t2.popFirst(5);
}
function Bs(t2, e, n) {
  return {
    name: Ns(t2, e),
    fields: n.value.mapValue.fields
  };
}
function Ls(t2, e, n) {
  const s = ks(t2, e.name), i = Ds(e.updateTime), r = new ve({
    mapValue: {
      fields: e.fields
    }
  }), o = Se.newFoundDocument(s, i, r);
  return n && o.setHasCommittedMutations(), n ? o.setHasCommittedMutations() : o;
}
function qs(t2, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const s = function(t3) {
      return "NO_CHANGE" === t3 ? 0 : "ADD" === t3 ? 1 : "REMOVE" === t3 ? 2 : "CURRENT" === t3 ? 3 : "RESET" === t3 ? 4 : O2();
    }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], r = function(t3, e2) {
      return t3.gt ? (M2(void 0 === e2 || "string" == typeof e2), Wt.fromBase64String(e2 || "")) : (M2(void 0 === e2 || e2 instanceof Uint8Array), Wt.fromUint8Array(e2 || new Uint8Array()));
    }(t2, e.targetChange.resumeToken), o = e.targetChange.cause, u = o && function(t3) {
      const e2 = void 0 === t3.code ? B2.UNKNOWN : ts(t3.code);
      return new L2(e2, t3.message || "");
    }(o);
    n = new ps(s, i, r, u || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const s = e.documentChange;
    s.document, s.document.name, s.document.updateTime;
    const i = ks(t2, s.document.name), r = Ds(s.document.updateTime), o = new ve({
      mapValue: {
        fields: s.document.fields
      }
    }), u = Se.newFoundDocument(i, r, o), c = s.targetIds || [], a = s.removedTargetIds || [];
    n = new gs(c, a, u.key, u);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const s = e.documentDelete;
    s.document;
    const i = ks(t2, s.document), r = s.readTime ? Ds(s.readTime) : st.min(), o = Se.newNoDocument(i, r), u = s.removedTargetIds || [];
    n = new gs([], u, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const s = e.documentRemove;
    s.document;
    const i = ks(t2, s.document), r = s.removedTargetIds || [];
    n = new gs([], r, i, null);
  } else {
    if (!("filter" in e))
      return O2();
    {
      e.filter;
      const t3 = e.filter;
      t3.targetId;
      const s = t3.count || 0, i = new Jn(s), r = t3.targetId;
      n = new ys(r, i);
    }
  }
  return n;
}
function Ks(t2, e) {
  let n;
  if (e instanceof Kn)
    n = {
      update: Bs(t2, e.key, e.value)
    };
  else if (e instanceof zn)
    n = {
      delete: Ns(t2, e.key)
    };
  else if (e instanceof Gn)
    n = {
      update: Bs(t2, e.key, e.data),
      updateMask: si(e.fieldMask)
    };
  else {
    if (!(e instanceof Hn))
      return O2();
    n = {
      verify: Ns(t2, e.key)
    };
  }
  return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((t3) => function(t4, e2) {
    const n2 = e2.transform;
    if (n2 instanceof Rn)
      return {
        fieldPath: e2.field.canonicalString(),
        setToServerValue: "REQUEST_TIME"
      };
    if (n2 instanceof bn)
      return {
        fieldPath: e2.field.canonicalString(),
        appendMissingElements: {
          values: n2.elements
        }
      };
    if (n2 instanceof vn)
      return {
        fieldPath: e2.field.canonicalString(),
        removeAllFromArray: {
          values: n2.elements
        }
      };
    if (n2 instanceof Sn)
      return {
        fieldPath: e2.field.canonicalString(),
        increment: n2.yt
      };
    throw O2();
  }(0, t3))), e.precondition.isNone || (n.currentDocument = function(t3, e2) {
    return void 0 !== e2.updateTime ? {
      updateTime: Ss(t3, e2.updateTime)
    } : void 0 !== e2.exists ? {
      exists: e2.exists
    } : O2();
  }(t2, e.precondition)), n;
}
function Gs(t2, e) {
  const n = e.currentDocument ? function(t3) {
    return void 0 !== t3.updateTime ? On.updateTime(Ds(t3.updateTime)) : void 0 !== t3.exists ? On.exists(t3.exists) : On.none();
  }(e.currentDocument) : On.none(), s = e.updateTransforms ? e.updateTransforms.map((e2) => function(t3, e3) {
    let n2 = null;
    if ("setToServerValue" in e3)
      M2("REQUEST_TIME" === e3.setToServerValue), n2 = new Rn();
    else if ("appendMissingElements" in e3) {
      const t4 = e3.appendMissingElements.values || [];
      n2 = new bn(t4);
    } else if ("removeAllFromArray" in e3) {
      const t4 = e3.removeAllFromArray.values || [];
      n2 = new vn(t4);
    } else
      "increment" in e3 ? n2 = new Sn(t3, e3.increment) : O2();
    const s2 = ut.fromServerFormat(e3.fieldPath);
    return new xn(s2, n2);
  }(t2, e2)) : [];
  if (e.update) {
    e.update.name;
    const i = ks(t2, e.update.name), r = new ve({
      mapValue: {
        fields: e.update.fields
      }
    });
    if (e.updateMask) {
      const t3 = function(t4) {
        const e2 = t4.fieldPaths || [];
        return new Qt(e2.map((t5) => ut.fromServerFormat(t5)));
      }(e.updateMask);
      return new Gn(i, r, t3, n, s);
    }
    return new Kn(i, r, n, s);
  }
  if (e.delete) {
    const s2 = ks(t2, e.delete);
    return new zn(s2, n);
  }
  if (e.verify) {
    const s2 = ks(t2, e.verify);
    return new Hn(s2, n);
  }
  return O2();
}
function Qs(t2, e) {
  return t2 && t2.length > 0 ? (M2(void 0 !== e), t2.map((t3) => function(t4, e2) {
    let n = t4.updateTime ? Ds(t4.updateTime) : Ds(e2);
    return n.isEqual(st.min()) && (n = Ds(e2)), new kn(n, t4.transformResults || []);
  }(t3, e))) : [];
}
function js(t2, e) {
  return {
    documents: [Os(t2, e.path)]
  };
}
function Ws(t2, e) {
  const n = {
    structuredQuery: {}
  }, s = e.path;
  null !== e.collectionGroup ? (n.parent = Os(t2, s), n.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: true
  }]) : (n.parent = Os(t2, s.popLast()), n.structuredQuery.from = [{
    collectionId: s.lastSegment()
  }]);
  const i = function(t3) {
    if (0 === t3.length)
      return;
    const e2 = t3.map((t4) => function(t5) {
      if ("==" === t5.op) {
        if (pe(t5.value))
          return {
            unaryFilter: {
              field: Zs(t5.field),
              op: "IS_NAN"
            }
          };
        if (ye(t5.value))
          return {
            unaryFilter: {
              field: Zs(t5.field),
              op: "IS_NULL"
            }
          };
      } else if ("!=" === t5.op) {
        if (pe(t5.value))
          return {
            unaryFilter: {
              field: Zs(t5.field),
              op: "IS_NOT_NAN"
            }
          };
        if (ye(t5.value))
          return {
            unaryFilter: {
              field: Zs(t5.field),
              op: "IS_NOT_NULL"
            }
          };
      }
      return {
        fieldFilter: {
          field: Zs(t5.field),
          op: Xs(t5.op),
          value: t5.value
        }
      };
    }(t4));
    if (1 === e2.length)
      return e2[0];
    return {
      compositeFilter: {
        op: "AND",
        filters: e2
      }
    };
  }(e.filters);
  i && (n.structuredQuery.where = i);
  const r = function(t3) {
    if (0 === t3.length)
      return;
    return t3.map((t4) => function(t5) {
      return {
        field: Zs(t5.field),
        direction: Ys(t5.dir)
      };
    }(t4));
  }(e.orderBy);
  r && (n.structuredQuery.orderBy = r);
  const o = function(t3, e2) {
    return t3.gt || se(e2) ? e2 : {
      value: e2
    };
  }(t2, e.limit);
  var u;
  return null !== o && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = {
    before: (u = e.startAt).inclusive,
    values: u.position
  }), e.endAt && (n.structuredQuery.endAt = function(t3) {
    return {
      before: !t3.inclusive,
      values: t3.position
    };
  }(e.endAt)), n;
}
function zs(t2) {
  let e = Ms(t2.parent);
  const n = t2.structuredQuery, s = n.from ? n.from.length : 0;
  let i = null;
  if (s > 0) {
    M2(1 === s);
    const t3 = n.from[0];
    t3.allDescendants ? i = t3.collectionId : e = e.child(t3.collectionId);
  }
  let r = [];
  n.where && (r = Js(n.where));
  let o = [];
  n.orderBy && (o = n.orderBy.map((t3) => function(t4) {
    return new He(
      ti(t4.field),
      function(t5) {
        switch (t5) {
          case "ASCENDING":
            return "asc";
          case "DESCENDING":
            return "desc";
          default:
            return;
        }
      }(t4.direction)
    );
  }(t3)));
  let u = null;
  n.limit && (u = function(t3) {
    let e2;
    return e2 = "object" == typeof t3 ? t3.value : t3, se(e2) ? null : e2;
  }(n.limit));
  let c = null;
  n.startAt && (c = function(t3) {
    const e2 = !!t3.before, n2 = t3.values || [];
    return new ze(n2, e2);
  }(n.startAt));
  let a = null;
  return n.endAt && (a = function(t3) {
    const e2 = !t3.before, n2 = t3.values || [];
    return new ze(n2, e2);
  }(n.endAt)), tn(e, i, o, r, u, "F", c, a);
}
function Hs(t2, e) {
  const n = function(t3, e2) {
    switch (e2) {
      case 0:
        return null;
      case 1:
        return "existence-filter-mismatch";
      case 2:
        return "limbo-document";
      default:
        return O2();
    }
  }(0, e.purpose);
  return null == n ? null : {
    "goog-listen-tags": n
  };
}
function Js(t2) {
  return t2 ? void 0 !== t2.unaryFilter ? [ni(t2)] : void 0 !== t2.fieldFilter ? [ei(t2)] : void 0 !== t2.compositeFilter ? t2.compositeFilter.filters.map((t3) => Js(t3)).reduce((t3, e) => t3.concat(e)) : O2() : [];
}
function Ys(t2) {
  return Rs[t2];
}
function Xs(t2) {
  return bs[t2];
}
function Zs(t2) {
  return {
    fieldPath: t2.canonicalString()
  };
}
function ti(t2) {
  return ut.fromServerFormat(t2.fieldPath);
}
function ei(t2) {
  return Be.create(ti(t2.fieldFilter.field), function(t3) {
    switch (t3) {
      case "EQUAL":
        return "==";
      case "NOT_EQUAL":
        return "!=";
      case "GREATER_THAN":
        return ">";
      case "GREATER_THAN_OR_EQUAL":
        return ">=";
      case "LESS_THAN":
        return "<";
      case "LESS_THAN_OR_EQUAL":
        return "<=";
      case "ARRAY_CONTAINS":
        return "array-contains";
      case "IN":
        return "in";
      case "NOT_IN":
        return "not-in";
      case "ARRAY_CONTAINS_ANY":
        return "array-contains-any";
      default:
        return O2();
    }
  }(t2.fieldFilter.op), t2.fieldFilter.value);
}
function ni(t2) {
  switch (t2.unaryFilter.op) {
    case "IS_NAN":
      const e = ti(t2.unaryFilter.field);
      return Be.create(e, "==", {
        doubleValue: NaN
      });
    case "IS_NULL":
      const n = ti(t2.unaryFilter.field);
      return Be.create(n, "==", {
        nullValue: "NULL_VALUE"
      });
    case "IS_NOT_NAN":
      const s = ti(t2.unaryFilter.field);
      return Be.create(s, "!=", {
        doubleValue: NaN
      });
    case "IS_NOT_NULL":
      const i = ti(t2.unaryFilter.field);
      return Be.create(i, "!=", {
        nullValue: "NULL_VALUE"
      });
    default:
      return O2();
  }
}
function si(t2) {
  const e = [];
  return t2.fields.forEach((t3) => e.push(t3.canonicalString())), {
    fieldPaths: e
  };
}
function ii(t2) {
  return t2.length >= 4 && "projects" === t2.get(0) && "databases" === t2.get(2);
}
function ri(t2) {
  let e = "";
  for (let n = 0; n < t2.length; n++)
    e.length > 0 && (e = ui(e)), e = oi(t2.get(n), e);
  return ui(e);
}
function oi(t2, e) {
  let n = e;
  const s = t2.length;
  for (let e2 = 0; e2 < s; e2++) {
    const s2 = t2.charAt(e2);
    switch (s2) {
      case "\0":
        n += "";
        break;
      case "":
        n += "";
        break;
      default:
        n += s2;
    }
  }
  return n;
}
function ui(t2) {
  return t2 + "";
}
function ci(t2) {
  const e = t2.length;
  if (M2(e >= 2), 2 === e)
    return M2("" === t2.charAt(0) && "" === t2.charAt(1)), rt.emptyPath();
  const n = e - 2, s = [];
  let i = "";
  for (let r = 0; r < e; ) {
    const e2 = t2.indexOf("", r);
    (e2 < 0 || e2 > n) && O2();
    switch (t2.charAt(e2 + 1)) {
      case "":
        const n2 = t2.substring(r, e2);
        let o;
        0 === i.length ? o = n2 : (i += n2, o = i, i = ""), s.push(o);
        break;
      case "":
        i += t2.substring(r, e2), i += "\0";
        break;
      case "":
        i += t2.substring(r, e2 + 1);
        break;
      default:
        O2();
    }
    r = e2 + 2;
  }
  return new rt(s);
}
var ai = ["userId", "batchId"];
function hi(t2, e) {
  return [t2, ri(e)];
}
function li(t2, e, n) {
  return [t2, ri(e), n];
}
var fi = {};
var di = ["prefixPath", "collectionGroup", "readTime", "documentId"];
var _i = ["prefixPath", "collectionGroup", "documentId"];
var wi = ["collectionGroup", "readTime", "prefixPath", "documentId"];
var mi = ["canonicalId", "targetId"];
var gi = ["targetId", "path"];
var yi = ["path", "targetId"];
var pi = ["collectionId", "parent"];
var Ii = ["indexId", "uid"];
var Ti = ["uid", "sequenceNumber"];
var Ei = ["indexId", "uid", "arrayValue", "directionalValue", "orderedDocumentKey", "documentKey"];
var Ai = ["indexId", "uid", "orderedDocumentKey"];
var Ri = ["userId", "collectionPath", "documentId"];
var bi = ["userId", "collectionPath", "largestBatchId"];
var Pi = ["userId", "collectionGroup", "largestBatchId"];
var vi = [...[...[...[...["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments"], "clientMetadata"], "remoteDocumentGlobal"], "collectionParents"], "bundles", "namedQueries"];
var Vi = [...vi, "documentOverlays"];
var Si = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"];
var Di = Si;
var Ci = [...Di, "indexConfiguration", "indexState", "indexEntries"];
var xi = class extends Tt {
  constructor(t2, e) {
    super(), this.ie = t2, this.currentSequenceNumber = e;
  }
};
function Ni(t2, e) {
  const n = $(t2);
  return bt.M(n.ie, e);
}
var ki = class {
  constructor(t2, e, n, s) {
    this.batchId = t2, this.localWriteTime = e, this.baseMutations = n, this.mutations = s;
  }
  applyToRemoteDocument(t2, e) {
    const n = e.mutationResults;
    for (let e2 = 0; e2 < this.mutations.length; e2++) {
      const s = this.mutations[e2];
      if (s.key.isEqual(t2.key)) {
        Bn(s, t2, n[e2]);
      }
    }
  }
  applyToLocalView(t2, e) {
    for (const n of this.baseMutations)
      n.key.isEqual(t2.key) && (e = Ln(n, t2, e, this.localWriteTime));
    for (const n of this.mutations)
      n.key.isEqual(t2.key) && (e = Ln(n, t2, e, this.localWriteTime));
    return e;
  }
  applyToLocalDocumentSet(t2, e) {
    const n = cs();
    return this.mutations.forEach((s) => {
      const i = t2.get(s.key), r = i.overlayedDocument;
      let o = this.applyToLocalView(r, i.mutatedFields);
      o = e.has(s.key) ? null : o;
      const u = $n(r, o);
      null !== u && n.set(s.key, u), r.isValidDocument() || r.convertToNoDocument(st.min());
    }), n;
  }
  keys() {
    return this.mutations.reduce((t2, e) => t2.add(e.key), fs());
  }
  isEqual(t2) {
    return this.batchId === t2.batchId && tt(this.mutations, t2.mutations, (t3, e) => qn(t3, e)) && tt(this.baseMutations, t2.baseMutations, (t3, e) => qn(t3, e));
  }
};
var Oi = class {
  constructor(t2, e, n, s) {
    this.batch = t2, this.commitVersion = e, this.mutationResults = n, this.docVersions = s;
  }
  static from(t2, e, n) {
    M2(t2.mutations.length === n.length);
    let s = hs;
    const i = t2.mutations;
    for (let t3 = 0; t3 < i.length; t3++)
      s = s.insert(i[t3].key, n[t3].version);
    return new Oi(t2, e, n, s);
  }
};
var Mi = class {
  constructor(t2, e) {
    this.largestBatchId = t2, this.mutation = e;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t2) {
    return null !== t2 && this.mutation === t2.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
};
var Fi = class {
  constructor(t2, e, n, s, i = st.min(), r = st.min(), o = Wt.EMPTY_BYTE_STRING) {
    this.target = t2, this.targetId = e, this.purpose = n, this.sequenceNumber = s, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = r, this.resumeToken = o;
  }
  withSequenceNumber(t2) {
    return new Fi(this.target, this.targetId, this.purpose, t2, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
  }
  withResumeToken(t2, e) {
    return new Fi(this.target, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t2);
  }
  withLastLimboFreeSnapshotVersion(t2) {
    return new Fi(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t2, this.resumeToken);
  }
};
var $i = class {
  constructor(t2) {
    this.re = t2;
  }
};
function Bi(t2, e) {
  let n;
  if (e.document)
    n = Ls(t2.re, e.document, !!e.hasCommittedMutations);
  else if (e.noDocument) {
    const t3 = ct.fromSegments(e.noDocument.path), s = Ki(e.noDocument.readTime);
    n = Se.newNoDocument(t3, s), e.hasCommittedMutations && n.setHasCommittedMutations();
  } else {
    if (!e.unknownDocument)
      return O2();
    {
      const t3 = ct.fromSegments(e.unknownDocument.path), s = Ki(e.unknownDocument.version);
      n = Se.newUnknownDocument(t3, s);
    }
  }
  return e.readTime && n.setReadTime(function(t3) {
    const e2 = new nt(t3[0], t3[1]);
    return st.fromTimestamp(e2);
  }(e.readTime)), n;
}
function Li(t2, e) {
  const n = e.key, s = {
    prefixPath: n.getCollectionPath().popLast().toArray(),
    collectionGroup: n.collectionGroup,
    documentId: n.path.lastSegment(),
    readTime: Ui(e.readTime),
    hasCommittedMutations: e.hasCommittedMutations
  };
  if (e.isFoundDocument())
    s.document = function(t3, e2) {
      return {
        name: Ns(t3, e2.key),
        fields: e2.data.value.mapValue.fields,
        updateTime: vs(t3, e2.version.toTimestamp())
      };
    }(t2.re, e);
  else if (e.isNoDocument())
    s.noDocument = {
      path: n.path.toArray(),
      readTime: qi(e.version)
    };
  else {
    if (!e.isUnknownDocument())
      return O2();
    s.unknownDocument = {
      path: n.path.toArray(),
      version: qi(e.version)
    };
  }
  return s;
}
function Ui(t2) {
  const e = t2.toTimestamp();
  return [e.seconds, e.nanoseconds];
}
function qi(t2) {
  const e = t2.toTimestamp();
  return {
    seconds: e.seconds,
    nanoseconds: e.nanoseconds
  };
}
function Ki(t2) {
  const e = new nt(t2.seconds, t2.nanoseconds);
  return st.fromTimestamp(e);
}
function Gi(t2, e) {
  const n = (e.baseMutations || []).map((e2) => Gs(t2.re, e2));
  for (let t3 = 0; t3 < e.mutations.length - 1; ++t3) {
    const n2 = e.mutations[t3];
    if (t3 + 1 < e.mutations.length && void 0 !== e.mutations[t3 + 1].transform) {
      const s2 = e.mutations[t3 + 1];
      n2.updateTransforms = s2.transform.fieldTransforms, e.mutations.splice(t3 + 1, 1), ++t3;
    }
  }
  const s = e.mutations.map((e2) => Gs(t2.re, e2)), i = nt.fromMillis(e.localWriteTimeMs);
  return new ki(e.batchId, i, n, s);
}
function Qi(t2) {
  const e = Ki(t2.readTime), n = void 0 !== t2.lastLimboFreeSnapshotVersion ? Ki(t2.lastLimboFreeSnapshotVersion) : st.min();
  let s;
  var i;
  return void 0 !== t2.query.documents ? (M2(1 === (i = t2.query).documents.length), s = cn(en(Ms(i.documents[0])))) : s = function(t3) {
    return cn(zs(t3));
  }(t2.query), new Fi(s, t2.targetId, 0, t2.lastListenSequenceNumber, e, n, Wt.fromBase64String(t2.resumeToken));
}
function ji(t2, e) {
  const n = qi(e.snapshotVersion), s = qi(e.lastLimboFreeSnapshotVersion);
  let i;
  i = Oe(e.target) ? js(t2.re, e.target) : Ws(t2.re, e.target);
  const r = e.resumeToken.toBase64();
  return {
    targetId: e.targetId,
    canonicalId: xe(e.target),
    readTime: n,
    resumeToken: r,
    lastListenSequenceNumber: e.sequenceNumber,
    lastLimboFreeSnapshotVersion: s,
    query: i
  };
}
function Wi(t2) {
  const e = zs({
    parent: t2.parent,
    structuredQuery: t2.structuredQuery
  });
  return "LAST" === t2.limitType ? an(e, e.limit, "L") : e;
}
function zi(t2, e) {
  return new Mi(e.largestBatchId, Gs(t2.re, e.overlayMutation));
}
function Hi(t2, e) {
  const n = e.path.lastSegment();
  return [t2, ri(e.path.popLast()), n];
}
function Ji(t2, e, n, s) {
  return {
    indexId: t2,
    uid: e.uid || "",
    sequenceNumber: n,
    readTime: qi(s.readTime),
    documentKey: ri(s.documentKey.path),
    largestBatchId: s.largestBatchId
  };
}
var Yi = class {
  getBundleMetadata(t2, e) {
    return Xi(t2).get(e).next((t3) => {
      if (t3)
        return {
          id: (e2 = t3).bundleId,
          createTime: Ki(e2.createTime),
          version: e2.version
        };
      var e2;
    });
  }
  saveBundleMetadata(t2, e) {
    return Xi(t2).put({
      bundleId: (n = e).id,
      createTime: qi(Ds(n.createTime)),
      version: n.version
    });
    var n;
  }
  getNamedQuery(t2, e) {
    return Zi(t2).get(e).next((t3) => {
      if (t3)
        return {
          name: (e2 = t3).name,
          query: Wi(e2.bundledQuery),
          readTime: Ki(e2.readTime)
        };
      var e2;
    });
  }
  saveNamedQuery(t2, e) {
    return Zi(t2).put(function(t3) {
      return {
        name: t3.name,
        readTime: qi(Ds(t3.readTime)),
        bundledQuery: t3.bundledQuery
      };
    }(e));
  }
};
function Xi(t2) {
  return Ni(t2, "bundles");
}
function Zi(t2) {
  return Ni(t2, "namedQueries");
}
var tr = class {
  constructor(t2, e) {
    this.It = t2, this.userId = e;
  }
  static oe(t2, e) {
    const n = e.uid || "";
    return new tr(t2, n);
  }
  getOverlay(t2, e) {
    return er(t2).get(Hi(this.userId, e)).next((t3) => t3 ? zi(this.It, t3) : null);
  }
  getOverlays(t2, e) {
    const n = us();
    return At.forEach(e, (e2) => this.getOverlay(t2, e2).next((t3) => {
      null !== t3 && n.set(e2, t3);
    })).next(() => n);
  }
  saveOverlays(t2, e, n) {
    const s = [];
    return n.forEach((n2, i) => {
      const r = new Mi(e, i);
      s.push(this.ue(t2, r));
    }), At.waitFor(s);
  }
  removeOverlaysForBatchId(t2, e, n) {
    const s = /* @__PURE__ */ new Set();
    e.forEach((t3) => s.add(ri(t3.getCollectionPath())));
    const i = [];
    return s.forEach((e2) => {
      const s2 = IDBKeyRange.bound(
        [this.userId, e2, n],
        [this.userId, e2, n + 1],
        false,
        true
      );
      i.push(er(t2).Y("collectionPathOverlayIndex", s2));
    }), At.waitFor(i);
  }
  getOverlaysForCollection(t2, e, n) {
    const s = us(), i = ri(e), r = IDBKeyRange.bound(
      [this.userId, i, n],
      [this.userId, i, Number.POSITIVE_INFINITY],
      true
    );
    return er(t2).W("collectionPathOverlayIndex", r).next((t3) => {
      for (const e2 of t3) {
        const t4 = zi(this.It, e2);
        s.set(t4.getKey(), t4);
      }
      return s;
    });
  }
  getOverlaysForCollectionGroup(t2, e, n, s) {
    const i = us();
    let r;
    const o = IDBKeyRange.bound(
      [this.userId, e, n],
      [this.userId, e, Number.POSITIVE_INFINITY],
      true
    );
    return er(t2).Z({
      index: "collectionGroupOverlayIndex",
      range: o
    }, (t3, e2, n2) => {
      const o2 = zi(this.It, e2);
      i.size() < s || o2.largestBatchId === r ? (i.set(o2.getKey(), o2), r = o2.largestBatchId) : n2.done();
    }).next(() => i);
  }
  ue(t2, e) {
    return er(t2).put(function(t3, e2, n) {
      const [s, i, r] = Hi(e2, n.mutation.key);
      return {
        userId: e2,
        collectionPath: i,
        documentId: r,
        collectionGroup: n.mutation.key.getCollectionGroup(),
        largestBatchId: n.largestBatchId,
        overlayMutation: Ks(t3.re, n.mutation)
      };
    }(this.It, this.userId, e));
  }
};
function er(t2) {
  return Ni(t2, "documentOverlays");
}
var nr = class {
  constructor() {
  }
  ce(t2, e) {
    this.ae(t2, e), e.he();
  }
  ae(t2, e) {
    if ("nullValue" in t2)
      this.le(e, 5);
    else if ("booleanValue" in t2)
      this.le(e, 10), e.fe(t2.booleanValue ? 1 : 0);
    else if ("integerValue" in t2)
      this.le(e, 15), e.fe(Jt(t2.integerValue));
    else if ("doubleValue" in t2) {
      const n = Jt(t2.doubleValue);
      isNaN(n) ? this.le(e, 13) : (this.le(e, 15), ie(n) ? e.fe(0) : e.fe(n));
    } else if ("timestampValue" in t2) {
      const n = t2.timestampValue;
      this.le(e, 20), "string" == typeof n ? e.de(n) : (e.de(`${n.seconds || ""}`), e.fe(n.nanos || 0));
    } else if ("stringValue" in t2)
      this._e(t2.stringValue, e), this.we(e);
    else if ("bytesValue" in t2)
      this.le(e, 30), e.me(Yt(t2.bytesValue)), this.we(e);
    else if ("referenceValue" in t2)
      this.ge(t2.referenceValue, e);
    else if ("geoPointValue" in t2) {
      const n = t2.geoPointValue;
      this.le(e, 45), e.fe(n.latitude || 0), e.fe(n.longitude || 0);
    } else
      "mapValue" in t2 ? Ee(t2) ? this.le(e, Number.MAX_SAFE_INTEGER) : (this.ye(t2.mapValue, e), this.we(e)) : "arrayValue" in t2 ? (this.pe(t2.arrayValue, e), this.we(e)) : O2();
  }
  _e(t2, e) {
    this.le(e, 25), this.Ie(t2, e);
  }
  Ie(t2, e) {
    e.de(t2);
  }
  ye(t2, e) {
    const n = t2.fields || {};
    this.le(e, 55);
    for (const t3 of Object.keys(n))
      this._e(t3, e), this.ae(n[t3], e);
  }
  pe(t2, e) {
    const n = t2.values || [];
    this.le(e, 50);
    for (const t3 of n)
      this.ae(t3, e);
  }
  ge(t2, e) {
    this.le(e, 37);
    ct.fromName(t2).path.forEach((t3) => {
      this.le(e, 60), this.Ie(t3, e);
    });
  }
  le(t2, e) {
    t2.fe(e);
  }
  we(t2) {
    t2.fe(2);
  }
};
nr.Te = new nr();
function sr(t2) {
  if (0 === t2)
    return 8;
  let e = 0;
  return t2 >> 4 == 0 && (e += 4, t2 <<= 4), t2 >> 6 == 0 && (e += 2, t2 <<= 2), t2 >> 7 == 0 && (e += 1), e;
}
function ir(t2) {
  const e = 64 - function(t3) {
    let e2 = 0;
    for (let n = 0; n < 8; ++n) {
      const s = sr(255 & t3[n]);
      if (e2 += s, 8 !== s)
        break;
    }
    return e2;
  }(t2);
  return Math.ceil(e / 8);
}
var rr = class {
  constructor() {
    this.buffer = new Uint8Array(1024), this.position = 0;
  }
  Ee(t2) {
    const e = t2[Symbol.iterator]();
    let n = e.next();
    for (; !n.done; )
      this.Ae(n.value), n = e.next();
    this.Re();
  }
  be(t2) {
    const e = t2[Symbol.iterator]();
    let n = e.next();
    for (; !n.done; )
      this.Pe(n.value), n = e.next();
    this.ve();
  }
  Ve(t2) {
    for (const e of t2) {
      const t3 = e.charCodeAt(0);
      if (t3 < 128)
        this.Ae(t3);
      else if (t3 < 2048)
        this.Ae(960 | t3 >>> 6), this.Ae(128 | 63 & t3);
      else if (e < "\uD800" || "\uDBFF" < e)
        this.Ae(480 | t3 >>> 12), this.Ae(128 | 63 & t3 >>> 6), this.Ae(128 | 63 & t3);
      else {
        const t4 = e.codePointAt(0);
        this.Ae(240 | t4 >>> 18), this.Ae(128 | 63 & t4 >>> 12), this.Ae(128 | 63 & t4 >>> 6), this.Ae(128 | 63 & t4);
      }
    }
    this.Re();
  }
  Se(t2) {
    for (const e of t2) {
      const t3 = e.charCodeAt(0);
      if (t3 < 128)
        this.Pe(t3);
      else if (t3 < 2048)
        this.Pe(960 | t3 >>> 6), this.Pe(128 | 63 & t3);
      else if (e < "\uD800" || "\uDBFF" < e)
        this.Pe(480 | t3 >>> 12), this.Pe(128 | 63 & t3 >>> 6), this.Pe(128 | 63 & t3);
      else {
        const t4 = e.codePointAt(0);
        this.Pe(240 | t4 >>> 18), this.Pe(128 | 63 & t4 >>> 12), this.Pe(128 | 63 & t4 >>> 6), this.Pe(128 | 63 & t4);
      }
    }
    this.ve();
  }
  De(t2) {
    const e = this.Ce(t2), n = ir(e);
    this.xe(1 + n), this.buffer[this.position++] = 255 & n;
    for (let t3 = e.length - n; t3 < e.length; ++t3)
      this.buffer[this.position++] = 255 & e[t3];
  }
  Ne(t2) {
    const e = this.Ce(t2), n = ir(e);
    this.xe(1 + n), this.buffer[this.position++] = ~(255 & n);
    for (let t3 = e.length - n; t3 < e.length; ++t3)
      this.buffer[this.position++] = ~(255 & e[t3]);
  }
  ke() {
    this.Oe(255), this.Oe(255);
  }
  Me() {
    this.Fe(255), this.Fe(255);
  }
  reset() {
    this.position = 0;
  }
  seed(t2) {
    this.xe(t2.length), this.buffer.set(t2, this.position), this.position += t2.length;
  }
  $e() {
    return this.buffer.slice(0, this.position);
  }
  Ce(t2) {
    const e = function(t3) {
      const e2 = new DataView(new ArrayBuffer(8));
      return e2.setFloat64(0, t3, false), new Uint8Array(e2.buffer);
    }(t2), n = 0 != (128 & e[0]);
    e[0] ^= n ? 255 : 128;
    for (let t3 = 1; t3 < e.length; ++t3)
      e[t3] ^= n ? 255 : 0;
    return e;
  }
  Ae(t2) {
    const e = 255 & t2;
    0 === e ? (this.Oe(0), this.Oe(255)) : 255 === e ? (this.Oe(255), this.Oe(0)) : this.Oe(e);
  }
  Pe(t2) {
    const e = 255 & t2;
    0 === e ? (this.Fe(0), this.Fe(255)) : 255 === e ? (this.Fe(255), this.Fe(0)) : this.Fe(t2);
  }
  Re() {
    this.Oe(0), this.Oe(1);
  }
  ve() {
    this.Fe(0), this.Fe(1);
  }
  Oe(t2) {
    this.xe(1), this.buffer[this.position++] = t2;
  }
  Fe(t2) {
    this.xe(1), this.buffer[this.position++] = ~t2;
  }
  xe(t2) {
    const e = t2 + this.position;
    if (e <= this.buffer.length)
      return;
    let n = 2 * this.buffer.length;
    n < e && (n = e);
    const s = new Uint8Array(n);
    s.set(this.buffer), this.buffer = s;
  }
};
var or = class {
  constructor(t2) {
    this.Be = t2;
  }
  me(t2) {
    this.Be.Ee(t2);
  }
  de(t2) {
    this.Be.Ve(t2);
  }
  fe(t2) {
    this.Be.De(t2);
  }
  he() {
    this.Be.ke();
  }
};
var ur = class {
  constructor(t2) {
    this.Be = t2;
  }
  me(t2) {
    this.Be.be(t2);
  }
  de(t2) {
    this.Be.Se(t2);
  }
  fe(t2) {
    this.Be.Ne(t2);
  }
  he() {
    this.Be.Me();
  }
};
var cr = class {
  constructor() {
    this.Be = new rr(), this.Le = new or(this.Be), this.Ue = new ur(this.Be);
  }
  seed(t2) {
    this.Be.seed(t2);
  }
  qe(t2) {
    return 0 === t2 ? this.Le : this.Ue;
  }
  $e() {
    return this.Be.$e();
  }
  reset() {
    this.Be.reset();
  }
};
var ar = class {
  constructor(t2, e, n, s) {
    this.indexId = t2, this.documentKey = e, this.arrayValue = n, this.directionalValue = s;
  }
  Ke() {
    const t2 = this.directionalValue.length, e = 0 === t2 || 255 === this.directionalValue[t2 - 1] ? t2 + 1 : t2, n = new Uint8Array(e);
    return n.set(this.directionalValue, 0), e !== t2 ? n.set([0], this.directionalValue.length) : ++n[n.length - 1], new ar(this.indexId, this.documentKey, this.arrayValue, n);
  }
};
function hr(t2, e) {
  let n = t2.indexId - e.indexId;
  return 0 !== n ? n : (n = lr(t2.arrayValue, e.arrayValue), 0 !== n ? n : (n = lr(t2.directionalValue, e.directionalValue), 0 !== n ? n : ct.comparator(t2.documentKey, e.documentKey)));
}
function lr(t2, e) {
  for (let n = 0; n < t2.length && n < e.length; ++n) {
    const s = t2[n] - e[n];
    if (0 !== s)
      return s;
  }
  return t2.length - e.length;
}
var fr = class {
  constructor(t2) {
    this.collectionId = null != t2.collectionGroup ? t2.collectionGroup : t2.path.lastSegment(), this.Ge = t2.orderBy, this.Qe = [];
    for (const e of t2.filters) {
      const t3 = e;
      t3.dt() ? this.je = t3 : this.Qe.push(t3);
    }
  }
  We(t2) {
    const e = ht(t2);
    if (void 0 !== e && !this.ze(e))
      return false;
    const n = lt(t2);
    let s = 0, i = 0;
    for (; s < n.length && this.ze(n[s]); ++s)
      ;
    if (s === n.length)
      return true;
    if (void 0 !== this.je) {
      const t3 = n[s];
      if (!this.He(this.je, t3) || !this.Je(this.Ge[i++], t3))
        return false;
      ++s;
    }
    for (; s < n.length; ++s) {
      const t3 = n[s];
      if (i >= this.Ge.length || !this.Je(this.Ge[i++], t3))
        return false;
    }
    return true;
  }
  ze(t2) {
    for (const e of this.Qe)
      if (this.He(e, t2))
        return true;
    return false;
  }
  He(t2, e) {
    if (void 0 === t2 || !t2.field.isEqual(e.fieldPath))
      return false;
    const n = "array-contains" === t2.op || "array-contains-any" === t2.op;
    return 2 === e.kind === n;
  }
  Je(t2, e) {
    return !!t2.field.isEqual(e.fieldPath) && (0 === e.kind && "asc" === t2.dir || 1 === e.kind && "desc" === t2.dir);
  }
};
var dr = class {
  constructor() {
    this.Ye = new _r();
  }
  addToCollectionParentIndex(t2, e) {
    return this.Ye.add(e), At.resolve();
  }
  getCollectionParents(t2, e) {
    return At.resolve(this.Ye.getEntries(e));
  }
  addFieldIndex(t2, e) {
    return At.resolve();
  }
  deleteFieldIndex(t2, e) {
    return At.resolve();
  }
  getDocumentsMatchingTarget(t2, e) {
    return At.resolve(null);
  }
  getIndexType(t2, e) {
    return At.resolve(0);
  }
  getFieldIndexes(t2, e) {
    return At.resolve([]);
  }
  getNextCollectionGroupToUpdate(t2) {
    return At.resolve(null);
  }
  getMinOffset(t2, e) {
    return At.resolve(yt.min());
  }
  getMinOffsetFromCollectionGroup(t2, e) {
    return At.resolve(yt.min());
  }
  updateCollectionGroup(t2, e, n) {
    return At.resolve();
  }
  updateIndexEntries(t2, e) {
    return At.resolve();
  }
};
var _r = class {
  constructor() {
    this.index = {};
  }
  add(t2) {
    const e = t2.lastSegment(), n = t2.popLast(), s = this.index[e] || new qt(rt.comparator), i = !s.has(n);
    return this.index[e] = s.add(n), i;
  }
  has(t2) {
    const e = t2.lastSegment(), n = t2.popLast(), s = this.index[e];
    return s && s.has(n);
  }
  getEntries(t2) {
    return (this.index[t2] || new qt(rt.comparator)).toArray();
  }
};
var wr = new Uint8Array(0);
var mr = class {
  constructor(t2, e) {
    this.user = t2, this.databaseId = e, this.Xe = new _r(), this.Ze = new es((t3) => xe(t3), (t3, e2) => ke(t3, e2)), this.uid = t2.uid || "";
  }
  addToCollectionParentIndex(t2, e) {
    if (!this.Xe.has(e)) {
      const n = e.lastSegment(), s = e.popLast();
      t2.addOnCommittedListener(() => {
        this.Xe.add(e);
      });
      const i = {
        collectionId: n,
        parent: ri(s)
      };
      return gr(t2).put(i);
    }
    return At.resolve();
  }
  getCollectionParents(t2, e) {
    const n = [], s = IDBKeyRange.bound(
      [e, ""],
      [et(e), ""],
      false,
      true
    );
    return gr(t2).W(s).next((t3) => {
      for (const s2 of t3) {
        if (s2.collectionId !== e)
          break;
        n.push(ci(s2.parent));
      }
      return n;
    });
  }
  addFieldIndex(t2, e) {
    const n = pr(t2), s = function(t3) {
      return {
        indexId: t3.indexId,
        collectionGroup: t3.collectionGroup,
        fields: t3.fields.map((t4) => [t4.fieldPath.canonicalString(), t4.kind])
      };
    }(e);
    delete s.indexId;
    const i = n.add(s);
    if (e.indexState) {
      const n2 = Ir(t2);
      return i.next((t3) => {
        n2.put(Ji(t3, this.user, e.indexState.sequenceNumber, e.indexState.offset));
      });
    }
    return i.next();
  }
  deleteFieldIndex(t2, e) {
    const n = pr(t2), s = Ir(t2), i = yr(t2);
    return n.delete(e.indexId).next(() => s.delete(IDBKeyRange.bound(
      [e.indexId],
      [e.indexId + 1],
      false,
      true
    ))).next(() => i.delete(IDBKeyRange.bound(
      [e.indexId],
      [e.indexId + 1],
      false,
      true
    )));
  }
  getDocumentsMatchingTarget(t2, e) {
    const n = yr(t2);
    let s = true;
    const i = /* @__PURE__ */ new Map();
    return At.forEach(this.tn(e), (e2) => this.en(t2, e2).next((t3) => {
      s && (s = !!t3), i.set(e2, t3);
    })).next(() => {
      if (s) {
        let t3 = fs();
        const s2 = [];
        return At.forEach(i, (i2, r) => {
          var o;
          C2("IndexedDbIndexManager", `Using index ${o = i2, `id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((t4) => `${t4.fieldPath}:${t4.kind}`).join(",")}`} to execute ${xe(e)}`);
          const u = function(t4, e2) {
            const n2 = ht(e2);
            if (void 0 === n2)
              return null;
            for (const e3 of Me(t4, n2.fieldPath))
              switch (e3.op) {
                case "array-contains-any":
                  return e3.value.arrayValue.values || [];
                case "array-contains":
                  return [e3.value];
              }
            return null;
          }(r, i2), c = function(t4, e2) {
            const n2 = /* @__PURE__ */ new Map();
            for (const s3 of lt(e2))
              for (const e3 of Me(t4, s3.fieldPath))
                switch (e3.op) {
                  case "==":
                  case "in":
                    n2.set(s3.fieldPath.canonicalString(), e3.value);
                    break;
                  case "not-in":
                  case "!=":
                    return n2.set(s3.fieldPath.canonicalString(), e3.value), Array.from(n2.values());
                }
            return null;
          }(r, i2), a = function(t4, e2) {
            const n2 = [];
            let s3 = true;
            for (const i3 of lt(e2)) {
              const e3 = 0 === i3.kind ? Fe(t4, i3.fieldPath, t4.startAt) : $e(t4, i3.fieldPath, t4.startAt);
              n2.push(e3.value), s3 && (s3 = e3.inclusive);
            }
            return new ze(n2, s3);
          }(r, i2), h = function(t4, e2) {
            const n2 = [];
            let s3 = true;
            for (const i3 of lt(e2)) {
              const e3 = 0 === i3.kind ? $e(t4, i3.fieldPath, t4.endAt) : Fe(t4, i3.fieldPath, t4.endAt);
              n2.push(e3.value), s3 && (s3 = e3.inclusive);
            }
            return new ze(n2, s3);
          }(r, i2), l2 = this.nn(i2, r, a), f2 = this.nn(i2, r, h), d = this.sn(i2, r, c), _2 = this.rn(i2.indexId, u, l2, a.inclusive, f2, h.inclusive, d);
          return At.forEach(_2, (i3) => n.J(i3, e.limit).next((e2) => {
            e2.forEach((e3) => {
              const n2 = ct.fromSegments(e3.documentKey);
              t3.has(n2) || (t3 = t3.add(n2), s2.push(n2));
            });
          }));
        }).next(() => s2);
      }
      return At.resolve(null);
    });
  }
  tn(t2) {
    let e = this.Ze.get(t2);
    return e || (e = [t2], this.Ze.set(t2, e), e);
  }
  rn(t2, e, n, s, i, r, o) {
    const u = (null != e ? e.length : 1) * Math.max(n.length, i.length), c = u / (null != e ? e.length : 1), a = [];
    for (let h = 0; h < u; ++h) {
      const u2 = e ? this.on(e[h / c]) : wr, l2 = this.un(t2, u2, n[h % c], s), f2 = this.cn(t2, u2, i[h % c], r), d = o.map((e2) => this.un(
        t2,
        u2,
        e2,
        true
      ));
      a.push(...this.createRange(l2, f2, d));
    }
    return a;
  }
  un(t2, e, n, s) {
    const i = new ar(t2, ct.empty(), e, n);
    return s ? i : i.Ke();
  }
  cn(t2, e, n, s) {
    const i = new ar(t2, ct.empty(), e, n);
    return s ? i.Ke() : i;
  }
  en(t2, e) {
    const n = new fr(e), s = null != e.collectionGroup ? e.collectionGroup : e.path.lastSegment();
    return this.getFieldIndexes(t2, s).next((t3) => {
      let e2 = null;
      for (const s2 of t3) {
        n.We(s2) && (!e2 || s2.fields.length > e2.fields.length) && (e2 = s2);
      }
      return e2;
    });
  }
  getIndexType(t2, e) {
    let n = 2;
    return At.forEach(this.tn(e), (e2) => this.en(t2, e2).next((t3) => {
      t3 ? 0 !== n && t3.fields.length < function(t4) {
        let e3 = new qt(ut.comparator), n2 = false;
        for (const s of t4.filters) {
          const t5 = s;
          t5.field.isKeyField() || ("array-contains" === t5.op || "array-contains-any" === t5.op ? n2 = true : e3 = e3.add(t5.field));
        }
        for (const n3 of t4.orderBy)
          n3.field.isKeyField() || (e3 = e3.add(n3.field));
        return e3.size + (n2 ? 1 : 0);
      }(e2) && (n = 1) : n = 0;
    })).next(() => n);
  }
  an(t2, e) {
    const n = new cr();
    for (const s of lt(t2)) {
      const t3 = e.data.field(s.fieldPath);
      if (null == t3)
        return null;
      const i = n.qe(s.kind);
      nr.Te.ce(t3, i);
    }
    return n.$e();
  }
  on(t2) {
    const e = new cr();
    return nr.Te.ce(t2, e.qe(0)), e.$e();
  }
  hn(t2, e) {
    const n = new cr();
    return nr.Te.ce(we(this.databaseId, e), n.qe(function(t3) {
      const e2 = lt(t3);
      return 0 === e2.length ? 0 : e2[e2.length - 1].kind;
    }(t2))), n.$e();
  }
  sn(t2, e, n) {
    if (null === n)
      return [];
    let s = [];
    s.push(new cr());
    let i = 0;
    for (const r of lt(t2)) {
      const t3 = n[i++];
      for (const n2 of s)
        if (this.ln(e, r.fieldPath) && ge(t3))
          s = this.fn(s, r, t3);
        else {
          const e2 = n2.qe(r.kind);
          nr.Te.ce(t3, e2);
        }
    }
    return this.dn(s);
  }
  nn(t2, e, n) {
    return this.sn(t2, e, n.position);
  }
  dn(t2) {
    const e = [];
    for (let n = 0; n < t2.length; ++n)
      e[n] = t2[n].$e();
    return e;
  }
  fn(t2, e, n) {
    const s = [...t2], i = [];
    for (const t3 of n.arrayValue.values || [])
      for (const n2 of s) {
        const s2 = new cr();
        s2.seed(n2.$e()), nr.Te.ce(t3, s2.qe(e.kind)), i.push(s2);
      }
    return i;
  }
  ln(t2, e) {
    return !!t2.filters.find((t3) => t3 instanceof Be && t3.field.isEqual(e) && ("in" === t3.op || "not-in" === t3.op));
  }
  getFieldIndexes(t2, e) {
    const n = pr(t2), s = Ir(t2);
    return (e ? n.W("collectionGroupIndex", IDBKeyRange.bound(e, e)) : n.W()).next((t3) => {
      const e2 = [];
      return At.forEach(t3, (t4) => s.get([t4.indexId, this.uid]).next((n2) => {
        e2.push(function(t5, e3) {
          const n3 = e3 ? new wt(e3.sequenceNumber, new yt(Ki(e3.readTime), new ct(ci(e3.documentKey)), e3.largestBatchId)) : wt.empty(), s2 = t5.fields.map(([t6, e4]) => new dt(ut.fromServerFormat(t6), e4));
          return new at(t5.indexId, t5.collectionGroup, s2, n3);
        }(t4, n2));
      })).next(() => e2);
    });
  }
  getNextCollectionGroupToUpdate(t2) {
    return this.getFieldIndexes(t2).next((t3) => 0 === t3.length ? null : (t3.sort((t4, e) => {
      const n = t4.indexState.sequenceNumber - e.indexState.sequenceNumber;
      return 0 !== n ? n : Z(t4.collectionGroup, e.collectionGroup);
    }), t3[0].collectionGroup));
  }
  updateCollectionGroup(t2, e, n) {
    const s = pr(t2), i = Ir(t2);
    return this._n(t2).next((t3) => s.W("collectionGroupIndex", IDBKeyRange.bound(e, e)).next((e2) => At.forEach(e2, (e3) => i.put(Ji(e3.indexId, this.user, t3, n)))));
  }
  updateIndexEntries(t2, e) {
    const n = /* @__PURE__ */ new Map();
    return At.forEach(e, (e2, s) => {
      const i = n.get(e2.collectionGroup);
      return (i ? At.resolve(i) : this.getFieldIndexes(t2, e2.collectionGroup)).next((i2) => (n.set(e2.collectionGroup, i2), At.forEach(i2, (n2) => this.wn(t2, e2, n2).next((e3) => {
        const i3 = this.mn(s, n2);
        return e3.isEqual(i3) ? At.resolve() : this.gn(t2, s, n2, e3, i3);
      }))));
    });
  }
  yn(t2, e, n, s) {
    return yr(t2).put({
      indexId: s.indexId,
      uid: this.uid,
      arrayValue: s.arrayValue,
      directionalValue: s.directionalValue,
      orderedDocumentKey: this.hn(n, e.key),
      documentKey: e.key.path.toArray()
    });
  }
  pn(t2, e, n, s) {
    return yr(t2).delete([s.indexId, this.uid, s.arrayValue, s.directionalValue, this.hn(n, e.key), e.key.path.toArray()]);
  }
  wn(t2, e, n) {
    const s = yr(t2);
    let i = new qt(hr);
    return s.Z({
      index: "documentKeyIndex",
      range: IDBKeyRange.only([n.indexId, this.uid, this.hn(n, e)])
    }, (t3, s2) => {
      i = i.add(new ar(n.indexId, e, s2.arrayValue, s2.directionalValue));
    }).next(() => i);
  }
  mn(t2, e) {
    let n = new qt(hr);
    const s = this.an(e, t2);
    if (null == s)
      return n;
    const i = ht(e);
    if (null != i) {
      const r = t2.data.field(i.fieldPath);
      if (ge(r))
        for (const i2 of r.arrayValue.values || [])
          n = n.add(new ar(e.indexId, t2.key, this.on(i2), s));
    } else
      n = n.add(new ar(e.indexId, t2.key, wr, s));
    return n;
  }
  gn(t2, e, n, s, i) {
    C2("IndexedDbIndexManager", "Updating index entries for document '%s'", e.key);
    const r = [];
    return function(t3, e2, n2, s2, i2) {
      const r2 = t3.getIterator(), o = e2.getIterator();
      let u = Gt(r2), c = Gt(o);
      for (; u || c; ) {
        let t4 = false, e3 = false;
        if (u && c) {
          const s3 = n2(u, c);
          s3 < 0 ? e3 = true : s3 > 0 && (t4 = true);
        } else
          null != u ? e3 = true : t4 = true;
        t4 ? (s2(c), c = Gt(o)) : e3 ? (i2(u), u = Gt(r2)) : (u = Gt(r2), c = Gt(o));
      }
    }(s, i, hr, (s2) => {
      r.push(this.yn(t2, e, n, s2));
    }, (s2) => {
      r.push(this.pn(t2, e, n, s2));
    }), At.waitFor(r);
  }
  _n(t2) {
    let e = 1;
    return Ir(t2).Z({
      index: "sequenceNumberIndex",
      reverse: true,
      range: IDBKeyRange.upperBound([this.uid, Number.MAX_SAFE_INTEGER])
    }, (t3, n, s) => {
      s.done(), e = n.sequenceNumber + 1;
    }).next(() => e);
  }
  createRange(t2, e, n) {
    n = n.sort((t3, e2) => hr(t3, e2)).filter((t3, e2, n2) => !e2 || 0 !== hr(t3, n2[e2 - 1]));
    const s = [];
    s.push(t2);
    for (const i2 of n) {
      const n2 = hr(i2, t2), r = hr(i2, e);
      if (0 === n2)
        s[0] = t2.Ke();
      else if (n2 > 0 && r < 0)
        s.push(i2), s.push(i2.Ke());
      else if (r > 0)
        break;
    }
    s.push(e);
    const i = [];
    for (let t3 = 0; t3 < s.length; t3 += 2)
      i.push(IDBKeyRange.bound([s[t3].indexId, this.uid, s[t3].arrayValue, s[t3].directionalValue, wr, []], [s[t3 + 1].indexId, this.uid, s[t3 + 1].arrayValue, s[t3 + 1].directionalValue, wr, []]));
    return i;
  }
  getMinOffsetFromCollectionGroup(t2, e) {
    return this.getFieldIndexes(t2, e).next(Tr);
  }
  getMinOffset(t2, e) {
    return At.mapArray(this.tn(e), (e2) => this.en(t2, e2).next((t3) => t3 || O2())).next(Tr);
  }
};
function gr(t2) {
  return Ni(t2, "collectionParents");
}
function yr(t2) {
  return Ni(t2, "indexEntries");
}
function pr(t2) {
  return Ni(t2, "indexConfiguration");
}
function Ir(t2) {
  return Ni(t2, "indexState");
}
function Tr(t2) {
  M2(0 !== t2.length);
  let e = t2[0].indexState.offset, n = e.largestBatchId;
  for (let s = 1; s < t2.length; s++) {
    const i = t2[s].indexState.offset;
    pt(i, e) < 0 && (e = i), n < i.largestBatchId && (n = i.largestBatchId);
  }
  return new yt(e.readTime, e.documentKey, n);
}
var Er = {
  didRun: false,
  sequenceNumbersCollected: 0,
  targetsRemoved: 0,
  documentsRemoved: 0
};
var Ar = class {
  constructor(t2, e, n) {
    this.cacheSizeCollectionThreshold = t2, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n;
  }
  static withCacheSize(t2) {
    return new Ar(t2, Ar.DEFAULT_COLLECTION_PERCENTILE, Ar.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
  }
};
function Rr(t2, e, n) {
  const s = t2.store("mutations"), i = t2.store("documentMutations"), r = [], o = IDBKeyRange.only(n.batchId);
  let u = 0;
  const c = s.Z({
    range: o
  }, (t3, e2, n2) => (u++, n2.delete()));
  r.push(c.next(() => {
    M2(1 === u);
  }));
  const a = [];
  for (const t3 of n.mutations) {
    const s2 = li(e, t3.key.path, n.batchId);
    r.push(i.delete(s2)), a.push(t3.key);
  }
  return At.waitFor(r).next(() => a);
}
function br(t2) {
  if (!t2)
    return 0;
  let e;
  if (t2.document)
    e = t2.document;
  else if (t2.unknownDocument)
    e = t2.unknownDocument;
  else {
    if (!t2.noDocument)
      throw O2();
    e = t2.noDocument;
  }
  return JSON.stringify(e).length;
}
Ar.DEFAULT_COLLECTION_PERCENTILE = 10, Ar.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, Ar.DEFAULT = new Ar(41943040, Ar.DEFAULT_COLLECTION_PERCENTILE, Ar.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), Ar.DISABLED = new Ar(-1, 0, 0);
var Pr = class {
  constructor(t2, e, n, s) {
    this.userId = t2, this.It = e, this.indexManager = n, this.referenceDelegate = s, this.In = {};
  }
  static oe(t2, e, n, s) {
    M2("" !== t2.uid);
    const i = t2.isAuthenticated() ? t2.uid : "";
    return new Pr(i, e, n, s);
  }
  checkEmpty(t2) {
    let e = true;
    const n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
    return Vr(t2).Z({
      index: "userMutationsIndex",
      range: n
    }, (t3, n2, s) => {
      e = false, s.done();
    }).next(() => e);
  }
  addMutationBatch(t2, e, n, s) {
    const i = Sr(t2), r = Vr(t2);
    return r.add({}).next((o) => {
      M2("number" == typeof o);
      const u = new ki(o, e, n, s), c = function(t3, e2, n2) {
        const s2 = n2.baseMutations.map((e3) => Ks(t3.re, e3)), i2 = n2.mutations.map((e3) => Ks(t3.re, e3));
        return {
          userId: e2,
          batchId: n2.batchId,
          localWriteTimeMs: n2.localWriteTime.toMillis(),
          baseMutations: s2,
          mutations: i2
        };
      }(this.It, this.userId, u), a = [];
      let h = new qt((t3, e2) => Z(t3.canonicalString(), e2.canonicalString()));
      for (const t3 of s) {
        const e2 = li(this.userId, t3.key.path, o);
        h = h.add(t3.key.path.popLast()), a.push(r.put(c)), a.push(i.put(e2, fi));
      }
      return h.forEach((e2) => {
        a.push(this.indexManager.addToCollectionParentIndex(t2, e2));
      }), t2.addOnCommittedListener(() => {
        this.In[o] = u.keys();
      }), At.waitFor(a).next(() => u);
    });
  }
  lookupMutationBatch(t2, e) {
    return Vr(t2).get(e).next((t3) => t3 ? (M2(t3.userId === this.userId), Gi(this.It, t3)) : null);
  }
  Tn(t2, e) {
    return this.In[e] ? At.resolve(this.In[e]) : this.lookupMutationBatch(t2, e).next((t3) => {
      if (t3) {
        const n = t3.keys();
        return this.In[e] = n, n;
      }
      return null;
    });
  }
  getNextMutationBatchAfterBatchId(t2, e) {
    const n = e + 1, s = IDBKeyRange.lowerBound([this.userId, n]);
    let i = null;
    return Vr(t2).Z({
      index: "userMutationsIndex",
      range: s
    }, (t3, e2, s2) => {
      e2.userId === this.userId && (M2(e2.batchId >= n), i = Gi(this.It, e2)), s2.done();
    }).next(() => i);
  }
  getHighestUnacknowledgedBatchId(t2) {
    const e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]);
    let n = -1;
    return Vr(t2).Z({
      index: "userMutationsIndex",
      range: e,
      reverse: true
    }, (t3, e2, s) => {
      n = e2.batchId, s.done();
    }).next(() => n);
  }
  getAllMutationBatches(t2) {
    const e = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
    return Vr(t2).W("userMutationsIndex", e).next((t3) => t3.map((t4) => Gi(this.It, t4)));
  }
  getAllMutationBatchesAffectingDocumentKey(t2, e) {
    const n = hi(this.userId, e.path), s = IDBKeyRange.lowerBound(n), i = [];
    return Sr(t2).Z({
      range: s
    }, (n2, s2, r) => {
      const [o, u, c] = n2, a = ci(u);
      if (o === this.userId && e.path.isEqual(a))
        return Vr(t2).get(c).next((t3) => {
          if (!t3)
            throw O2();
          M2(t3.userId === this.userId), i.push(Gi(this.It, t3));
        });
      r.done();
    }).next(() => i);
  }
  getAllMutationBatchesAffectingDocumentKeys(t2, e) {
    let n = new qt(Z);
    const s = [];
    return e.forEach((e2) => {
      const i = hi(this.userId, e2.path), r = IDBKeyRange.lowerBound(i), o = Sr(t2).Z({
        range: r
      }, (t3, s2, i2) => {
        const [r2, o2, u] = t3, c = ci(o2);
        r2 === this.userId && e2.path.isEqual(c) ? n = n.add(u) : i2.done();
      });
      s.push(o);
    }), At.waitFor(s).next(() => this.En(t2, n));
  }
  getAllMutationBatchesAffectingQuery(t2, e) {
    const n = e.path, s = n.length + 1, i = hi(this.userId, n), r = IDBKeyRange.lowerBound(i);
    let o = new qt(Z);
    return Sr(t2).Z({
      range: r
    }, (t3, e2, i2) => {
      const [r2, u, c] = t3, a = ci(u);
      r2 === this.userId && n.isPrefixOf(a) ? a.length === s && (o = o.add(c)) : i2.done();
    }).next(() => this.En(t2, o));
  }
  En(t2, e) {
    const n = [], s = [];
    return e.forEach((e2) => {
      s.push(Vr(t2).get(e2).next((t3) => {
        if (null === t3)
          throw O2();
        M2(t3.userId === this.userId), n.push(Gi(this.It, t3));
      }));
    }), At.waitFor(s).next(() => n);
  }
  removeMutationBatch(t2, e) {
    return Rr(t2.ie, this.userId, e).next((n) => (t2.addOnCommittedListener(() => {
      this.An(e.batchId);
    }), At.forEach(n, (e2) => this.referenceDelegate.markPotentiallyOrphaned(t2, e2))));
  }
  An(t2) {
    delete this.In[t2];
  }
  performConsistencyCheck(t2) {
    return this.checkEmpty(t2).next((e) => {
      if (!e)
        return At.resolve();
      const n = IDBKeyRange.lowerBound([this.userId]);
      const s = [];
      return Sr(t2).Z({
        range: n
      }, (t3, e2, n2) => {
        if (t3[0] === this.userId) {
          const e3 = ci(t3[1]);
          s.push(e3);
        } else
          n2.done();
      }).next(() => {
        M2(0 === s.length);
      });
    });
  }
  containsKey(t2, e) {
    return vr(t2, this.userId, e);
  }
  Rn(t2) {
    return Dr(t2).get(this.userId).next((t3) => t3 || {
      userId: this.userId,
      lastAcknowledgedBatchId: -1,
      lastStreamToken: ""
    });
  }
};
function vr(t2, e, n) {
  const s = hi(e, n.path), i = s[1], r = IDBKeyRange.lowerBound(s);
  let o = false;
  return Sr(t2).Z({
    range: r,
    X: true
  }, (t3, n2, s2) => {
    const [r2, u, c] = t3;
    r2 === e && u === i && (o = true), s2.done();
  }).next(() => o);
}
function Vr(t2) {
  return Ni(t2, "mutations");
}
function Sr(t2) {
  return Ni(t2, "documentMutations");
}
function Dr(t2) {
  return Ni(t2, "mutationQueues");
}
var Cr = class {
  constructor(t2) {
    this.bn = t2;
  }
  next() {
    return this.bn += 2, this.bn;
  }
  static Pn() {
    return new Cr(0);
  }
  static vn() {
    return new Cr(-1);
  }
};
var xr = class {
  constructor(t2, e) {
    this.referenceDelegate = t2, this.It = e;
  }
  allocateTargetId(t2) {
    return this.Vn(t2).next((e) => {
      const n = new Cr(e.highestTargetId);
      return e.highestTargetId = n.next(), this.Sn(t2, e).next(() => e.highestTargetId);
    });
  }
  getLastRemoteSnapshotVersion(t2) {
    return this.Vn(t2).next((t3) => st.fromTimestamp(new nt(t3.lastRemoteSnapshotVersion.seconds, t3.lastRemoteSnapshotVersion.nanoseconds)));
  }
  getHighestSequenceNumber(t2) {
    return this.Vn(t2).next((t3) => t3.highestListenSequenceNumber);
  }
  setTargetsMetadata(t2, e, n) {
    return this.Vn(t2).next((s) => (s.highestListenSequenceNumber = e, n && (s.lastRemoteSnapshotVersion = n.toTimestamp()), e > s.highestListenSequenceNumber && (s.highestListenSequenceNumber = e), this.Sn(t2, s)));
  }
  addTargetData(t2, e) {
    return this.Dn(t2, e).next(() => this.Vn(t2).next((n) => (n.targetCount += 1, this.Cn(e, n), this.Sn(t2, n))));
  }
  updateTargetData(t2, e) {
    return this.Dn(t2, e);
  }
  removeTargetData(t2, e) {
    return this.removeMatchingKeysForTargetId(t2, e.targetId).next(() => Nr(t2).delete(e.targetId)).next(() => this.Vn(t2)).next((e2) => (M2(e2.targetCount > 0), e2.targetCount -= 1, this.Sn(t2, e2)));
  }
  removeTargets(t2, e, n) {
    let s = 0;
    const i = [];
    return Nr(t2).Z((r, o) => {
      const u = Qi(o);
      u.sequenceNumber <= e && null === n.get(u.targetId) && (s++, i.push(this.removeTargetData(t2, u)));
    }).next(() => At.waitFor(i)).next(() => s);
  }
  forEachTarget(t2, e) {
    return Nr(t2).Z((t3, n) => {
      const s = Qi(n);
      e(s);
    });
  }
  Vn(t2) {
    return kr(t2).get("targetGlobalKey").next((t3) => (M2(null !== t3), t3));
  }
  Sn(t2, e) {
    return kr(t2).put("targetGlobalKey", e);
  }
  Dn(t2, e) {
    return Nr(t2).put(ji(this.It, e));
  }
  Cn(t2, e) {
    let n = false;
    return t2.targetId > e.highestTargetId && (e.highestTargetId = t2.targetId, n = true), t2.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t2.sequenceNumber, n = true), n;
  }
  getTargetCount(t2) {
    return this.Vn(t2).next((t3) => t3.targetCount);
  }
  getTargetData(t2, e) {
    const n = xe(e), s = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]);
    let i = null;
    return Nr(t2).Z({
      range: s,
      index: "queryTargetsIndex"
    }, (t3, n2, s2) => {
      const r = Qi(n2);
      ke(e, r.target) && (i = r, s2.done());
    }).next(() => i);
  }
  addMatchingKeys(t2, e, n) {
    const s = [], i = Or(t2);
    return e.forEach((e2) => {
      const r = ri(e2.path);
      s.push(i.put({
        targetId: n,
        path: r
      })), s.push(this.referenceDelegate.addReference(t2, n, e2));
    }), At.waitFor(s);
  }
  removeMatchingKeys(t2, e, n) {
    const s = Or(t2);
    return At.forEach(e, (e2) => {
      const i = ri(e2.path);
      return At.waitFor([s.delete([n, i]), this.referenceDelegate.removeReference(t2, n, e2)]);
    });
  }
  removeMatchingKeysForTargetId(t2, e) {
    const n = Or(t2), s = IDBKeyRange.bound(
      [e],
      [e + 1],
      false,
      true
    );
    return n.delete(s);
  }
  getMatchingKeysForTargetId(t2, e) {
    const n = IDBKeyRange.bound(
      [e],
      [e + 1],
      false,
      true
    ), s = Or(t2);
    let i = fs();
    return s.Z({
      range: n,
      X: true
    }, (t3, e2, n2) => {
      const s2 = ci(t3[1]), r = new ct(s2);
      i = i.add(r);
    }).next(() => i);
  }
  containsKey(t2, e) {
    const n = ri(e.path), s = IDBKeyRange.bound(
      [n],
      [et(n)],
      false,
      true
    );
    let i = 0;
    return Or(t2).Z({
      index: "documentTargetsIndex",
      X: true,
      range: s
    }, ([t3, e2], n2, s2) => {
      0 !== t3 && (i++, s2.done());
    }).next(() => i > 0);
  }
  se(t2, e) {
    return Nr(t2).get(e).next((t3) => t3 ? Qi(t3) : null);
  }
};
function Nr(t2) {
  return Ni(t2, "targets");
}
function kr(t2) {
  return Ni(t2, "targetGlobal");
}
function Or(t2) {
  return Ni(t2, "targetDocuments");
}
function Mr([t2, e], [n, s]) {
  const i = Z(t2, n);
  return 0 === i ? Z(e, s) : i;
}
var Fr = class {
  constructor(t2) {
    this.xn = t2, this.buffer = new qt(Mr), this.Nn = 0;
  }
  kn() {
    return ++this.Nn;
  }
  On(t2) {
    const e = [t2, this.kn()];
    if (this.buffer.size < this.xn)
      this.buffer = this.buffer.add(e);
    else {
      const t3 = this.buffer.last();
      Mr(e, t3) < 0 && (this.buffer = this.buffer.delete(t3).add(e));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
};
var $r = class {
  constructor(t2, e, n) {
    this.garbageCollector = t2, this.asyncQueue = e, this.localStore = n, this.Mn = null;
  }
  start() {
    -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.Fn(6e4);
  }
  stop() {
    this.Mn && (this.Mn.cancel(), this.Mn = null);
  }
  get started() {
    return null !== this.Mn;
  }
  Fn(t2) {
    C2("LruGarbageCollector", `Garbage collection scheduled in ${t2}ms`), this.Mn = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", t2, async () => {
      this.Mn = null;
      try {
        await this.localStore.collectGarbage(this.garbageCollector);
      } catch (t3) {
        Vt(t3) ? C2("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", t3) : await Et(t3);
      }
      await this.Fn(3e5);
    });
  }
};
var Br = class {
  constructor(t2, e) {
    this.$n = t2, this.params = e;
  }
  calculateTargetCount(t2, e) {
    return this.$n.Bn(t2).next((t3) => Math.floor(e / 100 * t3));
  }
  nthSequenceNumber(t2, e) {
    if (0 === e)
      return At.resolve(Ot.at);
    const n = new Fr(e);
    return this.$n.forEachTarget(t2, (t3) => n.On(t3.sequenceNumber)).next(() => this.$n.Ln(t2, (t3) => n.On(t3))).next(() => n.maxValue);
  }
  removeTargets(t2, e, n) {
    return this.$n.removeTargets(t2, e, n);
  }
  removeOrphanedDocuments(t2, e) {
    return this.$n.removeOrphanedDocuments(t2, e);
  }
  collect(t2, e) {
    return -1 === this.params.cacheSizeCollectionThreshold ? (C2("LruGarbageCollector", "Garbage collection skipped; disabled"), At.resolve(Er)) : this.getCacheSize(t2).next((n) => n < this.params.cacheSizeCollectionThreshold ? (C2("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), Er) : this.Un(t2, e));
  }
  getCacheSize(t2) {
    return this.$n.getCacheSize(t2);
  }
  Un(t2, e) {
    let n, s, i, r, o, c, a;
    const h = Date.now();
    return this.calculateTargetCount(t2, this.params.percentileToCollect).next((e2) => (e2 > this.params.maximumSequenceNumbersToCollect ? (C2("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e2}`), s = this.params.maximumSequenceNumbersToCollect) : s = e2, r = Date.now(), this.nthSequenceNumber(t2, s))).next((s2) => (n = s2, o = Date.now(), this.removeTargets(t2, n, e))).next((e2) => (i = e2, c = Date.now(), this.removeOrphanedDocuments(t2, n))).next((t3) => {
      if (a = Date.now(), S2() <= LogLevel.DEBUG) {
        C2("LruGarbageCollector", `LRU Garbage Collection
	Counted targets in ${r - h}ms
	Determined least recently used ${s} in ` + (o - r) + `ms
	Removed ${i} targets in ` + (c - o) + `ms
	Removed ${t3} documents in ` + (a - c) + `ms
Total Duration: ${a - h}ms`);
      }
      return At.resolve({
        didRun: true,
        sequenceNumbersCollected: s,
        targetsRemoved: i,
        documentsRemoved: t3
      });
    });
  }
};
var Lr = class {
  constructor(t2, e) {
    this.db = t2, this.garbageCollector = function(t3, e2) {
      return new Br(t3, e2);
    }(this, e);
  }
  Bn(t2) {
    const e = this.qn(t2);
    return this.db.getTargetCache().getTargetCount(t2).next((t3) => e.next((e2) => t3 + e2));
  }
  qn(t2) {
    let e = 0;
    return this.Ln(t2, (t3) => {
      e++;
    }).next(() => e);
  }
  forEachTarget(t2, e) {
    return this.db.getTargetCache().forEachTarget(t2, e);
  }
  Ln(t2, e) {
    return this.Kn(t2, (t3, n) => e(n));
  }
  addReference(t2, e, n) {
    return Ur(t2, n);
  }
  removeReference(t2, e, n) {
    return Ur(t2, n);
  }
  removeTargets(t2, e, n) {
    return this.db.getTargetCache().removeTargets(t2, e, n);
  }
  markPotentiallyOrphaned(t2, e) {
    return Ur(t2, e);
  }
  Gn(t2, e) {
    return function(t3, e2) {
      let n = false;
      return Dr(t3).tt((s) => vr(t3, s, e2).next((t4) => (t4 && (n = true), At.resolve(!t4)))).next(() => n);
    }(t2, e);
  }
  removeOrphanedDocuments(t2, e) {
    const n = this.db.getRemoteDocumentCache().newChangeBuffer(), s = [];
    let i = 0;
    return this.Kn(t2, (r, o) => {
      if (o <= e) {
        const e2 = this.Gn(t2, r).next((e3) => {
          if (!e3)
            return i++, n.getEntry(t2, r).next(() => (n.removeEntry(r, st.min()), Or(t2).delete([0, ri(r.path)])));
        });
        s.push(e2);
      }
    }).next(() => At.waitFor(s)).next(() => n.apply(t2)).next(() => i);
  }
  removeTarget(t2, e) {
    const n = e.withSequenceNumber(t2.currentSequenceNumber);
    return this.db.getTargetCache().updateTargetData(t2, n);
  }
  updateLimboDocument(t2, e) {
    return Ur(t2, e);
  }
  Kn(t2, e) {
    const n = Or(t2);
    let s, i = Ot.at;
    return n.Z({
      index: "documentTargetsIndex"
    }, ([t3, n2], { path: r, sequenceNumber: o }) => {
      0 === t3 ? (i !== Ot.at && e(new ct(ci(s)), i), i = o, s = r) : i = Ot.at;
    }).next(() => {
      i !== Ot.at && e(new ct(ci(s)), i);
    });
  }
  getCacheSize(t2) {
    return this.db.getRemoteDocumentCache().getSize(t2);
  }
};
function Ur(t2, e) {
  return Or(t2).put(
    function(t3, e2) {
      return {
        targetId: 0,
        path: ri(t3.path),
        sequenceNumber: e2
      };
    }(e, t2.currentSequenceNumber)
  );
}
var qr = class {
  constructor() {
    this.changes = new es((t2) => t2.toString(), (t2, e) => t2.isEqual(e)), this.changesApplied = false;
  }
  addEntry(t2) {
    this.assertNotApplied(), this.changes.set(t2.key, t2);
  }
  removeEntry(t2, e) {
    this.assertNotApplied(), this.changes.set(t2, Se.newInvalidDocument(t2).setReadTime(e));
  }
  getEntry(t2, e) {
    this.assertNotApplied();
    const n = this.changes.get(e);
    return void 0 !== n ? At.resolve(n) : this.getFromCache(t2, e);
  }
  getEntries(t2, e) {
    return this.getAllFromCache(t2, e);
  }
  apply(t2) {
    return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(t2);
  }
  assertNotApplied() {
  }
};
var Kr = class {
  constructor(t2) {
    this.It = t2;
  }
  setIndexManager(t2) {
    this.indexManager = t2;
  }
  addEntry(t2, e, n) {
    return Wr(t2).put(n);
  }
  removeEntry(t2, e, n) {
    return Wr(t2).delete(
      function(t3, e2) {
        const n2 = t3.path.toArray();
        return [
          n2.slice(0, n2.length - 2),
          n2[n2.length - 2],
          Ui(e2),
          n2[n2.length - 1]
        ];
      }(e, n)
    );
  }
  updateMetadata(t2, e) {
    return this.getMetadata(t2).next((n) => (n.byteSize += e, this.Qn(t2, n)));
  }
  getEntry(t2, e) {
    let n = Se.newInvalidDocument(e);
    return Wr(t2).Z({
      index: "documentKeyIndex",
      range: IDBKeyRange.only(zr(e))
    }, (t3, s) => {
      n = this.jn(e, s);
    }).next(() => n);
  }
  Wn(t2, e) {
    let n = {
      size: 0,
      document: Se.newInvalidDocument(e)
    };
    return Wr(t2).Z({
      index: "documentKeyIndex",
      range: IDBKeyRange.only(zr(e))
    }, (t3, s) => {
      n = {
        document: this.jn(e, s),
        size: br(s)
      };
    }).next(() => n);
  }
  getEntries(t2, e) {
    let n = ss();
    return this.zn(t2, e, (t3, e2) => {
      const s = this.jn(t3, e2);
      n = n.insert(t3, s);
    }).next(() => n);
  }
  Hn(t2, e) {
    let n = ss(), s = new Bt(ct.comparator);
    return this.zn(t2, e, (t3, e2) => {
      const i = this.jn(t3, e2);
      n = n.insert(t3, i), s = s.insert(t3, br(e2));
    }).next(() => ({
      documents: n,
      Jn: s
    }));
  }
  zn(t2, e, n) {
    if (e.isEmpty())
      return At.resolve();
    let s = new qt(Jr);
    e.forEach((t3) => s = s.add(t3));
    const i = IDBKeyRange.bound(zr(s.first()), zr(s.last())), r = s.getIterator();
    let o = r.getNext();
    return Wr(t2).Z({
      index: "documentKeyIndex",
      range: i
    }, (t3, e2, s2) => {
      const i2 = ct.fromSegments([...e2.prefixPath, e2.collectionGroup, e2.documentId]);
      for (; o && Jr(o, i2) < 0; )
        n(o, null), o = r.getNext();
      o && o.isEqual(i2) && (n(o, e2), o = r.hasNext() ? r.getNext() : null), o ? s2.j(zr(o)) : s2.done();
    }).next(() => {
      for (; o; )
        n(o, null), o = r.hasNext() ? r.getNext() : null;
    });
  }
  getAllFromCollection(t2, e, n) {
    const s = [e.popLast().toArray(), e.lastSegment(), Ui(n.readTime), n.documentKey.path.isEmpty() ? "" : n.documentKey.path.lastSegment()], i = [e.popLast().toArray(), e.lastSegment(), [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], ""];
    return Wr(t2).W(IDBKeyRange.bound(s, i, true)).next((t3) => {
      let e2 = ss();
      for (const n2 of t3) {
        const t4 = this.jn(ct.fromSegments(n2.prefixPath.concat(n2.collectionGroup, n2.documentId)), n2);
        e2 = e2.insert(t4.key, t4);
      }
      return e2;
    });
  }
  getAllFromCollectionGroup(t2, e, n, s) {
    let i = ss();
    const r = Hr(e, n), o = Hr(e, yt.max());
    return Wr(t2).Z({
      index: "collectionGroupIndex",
      range: IDBKeyRange.bound(r, o, true)
    }, (t3, e2, n2) => {
      const r2 = this.jn(ct.fromSegments(e2.prefixPath.concat(e2.collectionGroup, e2.documentId)), e2);
      i = i.insert(r2.key, r2), i.size === s && n2.done();
    }).next(() => i);
  }
  newChangeBuffer(t2) {
    return new Qr(this, !!t2 && t2.trackRemovals);
  }
  getSize(t2) {
    return this.getMetadata(t2).next((t3) => t3.byteSize);
  }
  getMetadata(t2) {
    return jr(t2).get("remoteDocumentGlobalKey").next((t3) => (M2(!!t3), t3));
  }
  Qn(t2, e) {
    return jr(t2).put("remoteDocumentGlobalKey", e);
  }
  jn(t2, e) {
    if (e) {
      const t3 = Bi(this.It, e);
      if (!(t3.isNoDocument() && t3.version.isEqual(st.min())))
        return t3;
    }
    return Se.newInvalidDocument(t2);
  }
};
function Gr(t2) {
  return new Kr(t2);
}
var Qr = class extends qr {
  constructor(t2, e) {
    super(), this.Yn = t2, this.trackRemovals = e, this.Xn = new es((t3) => t3.toString(), (t3, e2) => t3.isEqual(e2));
  }
  applyChanges(t2) {
    const e = [];
    let n = 0, s = new qt((t3, e2) => Z(t3.canonicalString(), e2.canonicalString()));
    return this.changes.forEach((i, r) => {
      const o = this.Xn.get(i);
      if (e.push(this.Yn.removeEntry(t2, i, o.readTime)), r.isValidDocument()) {
        const u = Li(this.Yn.It, r);
        s = s.add(i.path.popLast());
        const c = br(u);
        n += c - o.size, e.push(this.Yn.addEntry(t2, i, u));
      } else if (n -= o.size, this.trackRemovals) {
        const n2 = Li(this.Yn.It, r.convertToNoDocument(st.min()));
        e.push(this.Yn.addEntry(t2, i, n2));
      }
    }), s.forEach((n2) => {
      e.push(this.Yn.indexManager.addToCollectionParentIndex(t2, n2));
    }), e.push(this.Yn.updateMetadata(t2, n)), At.waitFor(e);
  }
  getFromCache(t2, e) {
    return this.Yn.Wn(t2, e).next((t3) => (this.Xn.set(e, {
      size: t3.size,
      readTime: t3.document.readTime
    }), t3.document));
  }
  getAllFromCache(t2, e) {
    return this.Yn.Hn(t2, e).next(({ documents: t3, Jn: e2 }) => (e2.forEach((e3, n) => {
      this.Xn.set(e3, {
        size: n,
        readTime: t3.get(e3).readTime
      });
    }), t3));
  }
};
function jr(t2) {
  return Ni(t2, "remoteDocumentGlobal");
}
function Wr(t2) {
  return Ni(t2, "remoteDocumentsV14");
}
function zr(t2) {
  const e = t2.path.toArray();
  return [
    e.slice(0, e.length - 2),
    e[e.length - 2],
    e[e.length - 1]
  ];
}
function Hr(t2, e) {
  const n = e.documentKey.path.toArray();
  return [
    t2,
    Ui(e.readTime),
    n.slice(0, n.length - 2),
    n.length > 0 ? n[n.length - 1] : ""
  ];
}
function Jr(t2, e) {
  const n = t2.path.toArray(), s = e.path.toArray();
  let i = 0;
  for (let t3 = 0; t3 < n.length - 2 && t3 < s.length - 2; ++t3)
    if (i = Z(n[t3], s[t3]), i)
      return i;
  return i = Z(n.length, s.length), i || (i = Z(n[n.length - 2], s[s.length - 2]), i || Z(n[n.length - 1], s[s.length - 1]));
}
var Yr = class {
  constructor(t2, e) {
    this.overlayedDocument = t2, this.mutatedFields = e;
  }
};
var Xr = class {
  constructor(t2, e, n, s) {
    this.remoteDocumentCache = t2, this.mutationQueue = e, this.documentOverlayCache = n, this.indexManager = s;
  }
  getDocument(t2, e) {
    let n = null;
    return this.documentOverlayCache.getOverlay(t2, e).next((s) => (n = s, this.getBaseDocument(t2, e, n))).next((t3) => (null !== n && Ln(n.mutation, t3, Qt.empty(), nt.now()), t3));
  }
  getDocuments(t2, e) {
    return this.remoteDocumentCache.getEntries(t2, e).next((e2) => this.getLocalViewOfDocuments(t2, e2, fs()).next(() => e2));
  }
  getLocalViewOfDocuments(t2, e, n = fs()) {
    const s = us();
    return this.populateOverlays(t2, s, e).next(() => this.computeViews(t2, e, s, n).next((t3) => {
      let e2 = rs();
      return t3.forEach((t4, n2) => {
        e2 = e2.insert(t4, n2.overlayedDocument);
      }), e2;
    }));
  }
  getOverlayedDocuments(t2, e) {
    const n = us();
    return this.populateOverlays(t2, n, e).next(() => this.computeViews(t2, e, n, fs()));
  }
  populateOverlays(t2, e, n) {
    const s = [];
    return n.forEach((t3) => {
      e.has(t3) || s.push(t3);
    }), this.documentOverlayCache.getOverlays(t2, s).next((t3) => {
      t3.forEach((t4, n2) => {
        e.set(t4, n2);
      });
    });
  }
  computeViews(t2, e, n, s) {
    let i = ss();
    const r = as(), o = as();
    return e.forEach((t3, e2) => {
      const o2 = n.get(e2.key);
      s.has(e2.key) && (void 0 === o2 || o2.mutation instanceof Gn) ? i = i.insert(e2.key, e2) : void 0 !== o2 && (r.set(e2.key, o2.mutation.getFieldMask()), Ln(o2.mutation, e2, o2.mutation.getFieldMask(), nt.now()));
    }), this.recalculateAndSaveOverlays(t2, i).next((t3) => (t3.forEach((t4, e2) => r.set(t4, e2)), e.forEach((t4, e2) => {
      var n2;
      return o.set(t4, new Yr(e2, null !== (n2 = r.get(t4)) && void 0 !== n2 ? n2 : null));
    }), o));
  }
  recalculateAndSaveOverlays(t2, e) {
    const n = as();
    let s = new Bt((t3, e2) => t3 - e2), i = fs();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t2, e).next((t3) => {
      for (const i2 of t3)
        i2.keys().forEach((t4) => {
          const r = e.get(t4);
          if (null === r)
            return;
          let o = n.get(t4) || Qt.empty();
          o = i2.applyToLocalView(r, o), n.set(t4, o);
          const u = (s.get(i2.batchId) || fs()).add(t4);
          s = s.insert(i2.batchId, u);
        });
    }).next(() => {
      const r = [], o = s.getReverseIterator();
      for (; o.hasNext(); ) {
        const s2 = o.getNext(), u = s2.key, c = s2.value, a = cs();
        c.forEach((t3) => {
          if (!i.has(t3)) {
            const s3 = $n(e.get(t3), n.get(t3));
            null !== s3 && a.set(t3, s3), i = i.add(t3);
          }
        }), r.push(this.documentOverlayCache.saveOverlays(t2, u, a));
      }
      return At.waitFor(r);
    }).next(() => n);
  }
  recalculateAndSaveOverlaysForDocumentKeys(t2, e) {
    return this.remoteDocumentCache.getEntries(t2, e).next((e2) => this.recalculateAndSaveOverlays(t2, e2));
  }
  getDocumentsMatchingQuery(t2, e, n) {
    return function(t3) {
      return ct.isDocumentKey(t3.path) && null === t3.collectionGroup && 0 === t3.filters.length;
    }(e) ? this.getDocumentsMatchingDocumentQuery(t2, e.path) : on(e) ? this.getDocumentsMatchingCollectionGroupQuery(t2, e, n) : this.getDocumentsMatchingCollectionQuery(t2, e, n);
  }
  getNextDocuments(t2, e, n, s) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(t2, e, n, s).next((i) => {
      const r = s - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(t2, e, n.largestBatchId, s - i.size) : At.resolve(us());
      let o = -1, u = i;
      return r.next((e2) => At.forEach(e2, (e3, n2) => (o < n2.largestBatchId && (o = n2.largestBatchId), i.get(e3) ? At.resolve() : this.getBaseDocument(t2, e3, n2).next((t3) => {
        u = u.insert(e3, t3);
      }))).next(() => this.populateOverlays(t2, e2, i)).next(() => this.computeViews(t2, u, e2, fs())).next((t3) => ({
        batchId: o,
        changes: os(t3)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(t2, e) {
    return this.getDocument(t2, new ct(e)).next((t3) => {
      let e2 = rs();
      return t3.isFoundDocument() && (e2 = e2.insert(t3.key, t3)), e2;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t2, e, n) {
    const s = e.collectionGroup;
    let i = rs();
    return this.indexManager.getCollectionParents(t2, s).next((r) => At.forEach(r, (r2) => {
      const o = function(t3, e2) {
        return new Ze(
          e2,
          null,
          t3.explicitOrderBy.slice(),
          t3.filters.slice(),
          t3.limit,
          t3.limitType,
          t3.startAt,
          t3.endAt
        );
      }(e, r2.child(s));
      return this.getDocumentsMatchingCollectionQuery(t2, o, n).next((t3) => {
        t3.forEach((t4, e2) => {
          i = i.insert(t4, e2);
        });
      });
    }).next(() => i));
  }
  getDocumentsMatchingCollectionQuery(t2, e, n) {
    let s;
    return this.remoteDocumentCache.getAllFromCollection(t2, e.path, n).next((i) => (s = i, this.documentOverlayCache.getOverlaysForCollection(t2, e.path, n.largestBatchId))).next((t3) => {
      t3.forEach((t4, e2) => {
        const n3 = e2.getKey();
        null === s.get(n3) && (s = s.insert(n3, Se.newInvalidDocument(n3)));
      });
      let n2 = rs();
      return s.forEach((s2, i) => {
        const r = t3.get(s2);
        void 0 !== r && Ln(r.mutation, i, Qt.empty(), nt.now()), dn(e, i) && (n2 = n2.insert(s2, i));
      }), n2;
    });
  }
  getBaseDocument(t2, e, n) {
    return null === n || 1 === n.mutation.type ? this.remoteDocumentCache.getEntry(t2, e) : At.resolve(Se.newInvalidDocument(e));
  }
};
var Zr = class {
  constructor(t2) {
    this.It = t2, this.Zn = /* @__PURE__ */ new Map(), this.ts = /* @__PURE__ */ new Map();
  }
  getBundleMetadata(t2, e) {
    return At.resolve(this.Zn.get(e));
  }
  saveBundleMetadata(t2, e) {
    var n;
    return this.Zn.set(e.id, {
      id: (n = e).id,
      version: n.version,
      createTime: Ds(n.createTime)
    }), At.resolve();
  }
  getNamedQuery(t2, e) {
    return At.resolve(this.ts.get(e));
  }
  saveNamedQuery(t2, e) {
    return this.ts.set(e.name, function(t3) {
      return {
        name: t3.name,
        query: Wi(t3.bundledQuery),
        readTime: Ds(t3.readTime)
      };
    }(e)), At.resolve();
  }
};
var to = class {
  constructor() {
    this.overlays = new Bt(ct.comparator), this.es = /* @__PURE__ */ new Map();
  }
  getOverlay(t2, e) {
    return At.resolve(this.overlays.get(e));
  }
  getOverlays(t2, e) {
    const n = us();
    return At.forEach(e, (e2) => this.getOverlay(t2, e2).next((t3) => {
      null !== t3 && n.set(e2, t3);
    })).next(() => n);
  }
  saveOverlays(t2, e, n) {
    return n.forEach((n2, s) => {
      this.ue(t2, e, s);
    }), At.resolve();
  }
  removeOverlaysForBatchId(t2, e, n) {
    const s = this.es.get(n);
    return void 0 !== s && (s.forEach((t3) => this.overlays = this.overlays.remove(t3)), this.es.delete(n)), At.resolve();
  }
  getOverlaysForCollection(t2, e, n) {
    const s = us(), i = e.length + 1, r = new ct(e.child("")), o = this.overlays.getIteratorFrom(r);
    for (; o.hasNext(); ) {
      const t3 = o.getNext().value, r2 = t3.getKey();
      if (!e.isPrefixOf(r2.path))
        break;
      r2.path.length === i && (t3.largestBatchId > n && s.set(t3.getKey(), t3));
    }
    return At.resolve(s);
  }
  getOverlaysForCollectionGroup(t2, e, n, s) {
    let i = new Bt((t3, e2) => t3 - e2);
    const r = this.overlays.getIterator();
    for (; r.hasNext(); ) {
      const t3 = r.getNext().value;
      if (t3.getKey().getCollectionGroup() === e && t3.largestBatchId > n) {
        let e2 = i.get(t3.largestBatchId);
        null === e2 && (e2 = us(), i = i.insert(t3.largestBatchId, e2)), e2.set(t3.getKey(), t3);
      }
    }
    const o = us(), u = i.getIterator();
    for (; u.hasNext(); ) {
      if (u.getNext().value.forEach((t3, e2) => o.set(t3, e2)), o.size() >= s)
        break;
    }
    return At.resolve(o);
  }
  ue(t2, e, n) {
    const s = this.overlays.get(n.key);
    if (null !== s) {
      const t3 = this.es.get(s.largestBatchId).delete(n.key);
      this.es.set(s.largestBatchId, t3);
    }
    this.overlays = this.overlays.insert(n.key, new Mi(e, n));
    let i = this.es.get(e);
    void 0 === i && (i = fs(), this.es.set(e, i)), this.es.set(e, i.add(n.key));
  }
};
var eo = class {
  constructor() {
    this.ns = new qt(no.ss), this.rs = new qt(no.os);
  }
  isEmpty() {
    return this.ns.isEmpty();
  }
  addReference(t2, e) {
    const n = new no(t2, e);
    this.ns = this.ns.add(n), this.rs = this.rs.add(n);
  }
  us(t2, e) {
    t2.forEach((t3) => this.addReference(t3, e));
  }
  removeReference(t2, e) {
    this.cs(new no(t2, e));
  }
  hs(t2, e) {
    t2.forEach((t3) => this.removeReference(t3, e));
  }
  ls(t2) {
    const e = new ct(new rt([])), n = new no(e, t2), s = new no(e, t2 + 1), i = [];
    return this.rs.forEachInRange([n, s], (t3) => {
      this.cs(t3), i.push(t3.key);
    }), i;
  }
  fs() {
    this.ns.forEach((t2) => this.cs(t2));
  }
  cs(t2) {
    this.ns = this.ns.delete(t2), this.rs = this.rs.delete(t2);
  }
  ds(t2) {
    const e = new ct(new rt([])), n = new no(e, t2), s = new no(e, t2 + 1);
    let i = fs();
    return this.rs.forEachInRange([n, s], (t3) => {
      i = i.add(t3.key);
    }), i;
  }
  containsKey(t2) {
    const e = new no(t2, 0), n = this.ns.firstAfterOrEqual(e);
    return null !== n && t2.isEqual(n.key);
  }
};
var no = class {
  constructor(t2, e) {
    this.key = t2, this._s = e;
  }
  static ss(t2, e) {
    return ct.comparator(t2.key, e.key) || Z(t2._s, e._s);
  }
  static os(t2, e) {
    return Z(t2._s, e._s) || ct.comparator(t2.key, e.key);
  }
};
var so = class {
  constructor(t2, e) {
    this.indexManager = t2, this.referenceDelegate = e, this.mutationQueue = [], this.ws = 1, this.gs = new qt(no.ss);
  }
  checkEmpty(t2) {
    return At.resolve(0 === this.mutationQueue.length);
  }
  addMutationBatch(t2, e, n, s) {
    const i = this.ws;
    this.ws++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const r = new ki(i, e, n, s);
    this.mutationQueue.push(r);
    for (const e2 of s)
      this.gs = this.gs.add(new no(e2.key, i)), this.indexManager.addToCollectionParentIndex(t2, e2.key.path.popLast());
    return At.resolve(r);
  }
  lookupMutationBatch(t2, e) {
    return At.resolve(this.ys(e));
  }
  getNextMutationBatchAfterBatchId(t2, e) {
    const n = e + 1, s = this.ps(n), i = s < 0 ? 0 : s;
    return At.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return At.resolve(0 === this.mutationQueue.length ? -1 : this.ws - 1);
  }
  getAllMutationBatches(t2) {
    return At.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t2, e) {
    const n = new no(e, 0), s = new no(e, Number.POSITIVE_INFINITY), i = [];
    return this.gs.forEachInRange([n, s], (t3) => {
      const e2 = this.ys(t3._s);
      i.push(e2);
    }), At.resolve(i);
  }
  getAllMutationBatchesAffectingDocumentKeys(t2, e) {
    let n = new qt(Z);
    return e.forEach((t3) => {
      const e2 = new no(t3, 0), s = new no(t3, Number.POSITIVE_INFINITY);
      this.gs.forEachInRange([e2, s], (t4) => {
        n = n.add(t4._s);
      });
    }), At.resolve(this.Is(n));
  }
  getAllMutationBatchesAffectingQuery(t2, e) {
    const n = e.path, s = n.length + 1;
    let i = n;
    ct.isDocumentKey(i) || (i = i.child(""));
    const r = new no(new ct(i), 0);
    let o = new qt(Z);
    return this.gs.forEachWhile((t3) => {
      const e2 = t3.key.path;
      return !!n.isPrefixOf(e2) && (e2.length === s && (o = o.add(t3._s)), true);
    }, r), At.resolve(this.Is(o));
  }
  Is(t2) {
    const e = [];
    return t2.forEach((t3) => {
      const n = this.ys(t3);
      null !== n && e.push(n);
    }), e;
  }
  removeMutationBatch(t2, e) {
    M2(0 === this.Ts(e.batchId, "removed")), this.mutationQueue.shift();
    let n = this.gs;
    return At.forEach(e.mutations, (s) => {
      const i = new no(s.key, e.batchId);
      return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(t2, s.key);
    }).next(() => {
      this.gs = n;
    });
  }
  An(t2) {
  }
  containsKey(t2, e) {
    const n = new no(e, 0), s = this.gs.firstAfterOrEqual(n);
    return At.resolve(e.isEqual(s && s.key));
  }
  performConsistencyCheck(t2) {
    return this.mutationQueue.length, At.resolve();
  }
  Ts(t2, e) {
    return this.ps(t2);
  }
  ps(t2) {
    if (0 === this.mutationQueue.length)
      return 0;
    return t2 - this.mutationQueue[0].batchId;
  }
  ys(t2) {
    const e = this.ps(t2);
    if (e < 0 || e >= this.mutationQueue.length)
      return null;
    return this.mutationQueue[e];
  }
};
var io = class {
  constructor(t2) {
    this.Es = t2, this.docs = new Bt(ct.comparator), this.size = 0;
  }
  setIndexManager(t2) {
    this.indexManager = t2;
  }
  addEntry(t2, e) {
    const n = e.key, s = this.docs.get(n), i = s ? s.size : 0, r = this.Es(e);
    return this.docs = this.docs.insert(n, {
      document: e.mutableCopy(),
      size: r
    }), this.size += r - i, this.indexManager.addToCollectionParentIndex(t2, n.path.popLast());
  }
  removeEntry(t2) {
    const e = this.docs.get(t2);
    e && (this.docs = this.docs.remove(t2), this.size -= e.size);
  }
  getEntry(t2, e) {
    const n = this.docs.get(e);
    return At.resolve(n ? n.document.mutableCopy() : Se.newInvalidDocument(e));
  }
  getEntries(t2, e) {
    let n = ss();
    return e.forEach((t3) => {
      const e2 = this.docs.get(t3);
      n = n.insert(t3, e2 ? e2.document.mutableCopy() : Se.newInvalidDocument(t3));
    }), At.resolve(n);
  }
  getAllFromCollection(t2, e, n) {
    let s = ss();
    const i = new ct(e.child("")), r = this.docs.getIteratorFrom(i);
    for (; r.hasNext(); ) {
      const { key: t3, value: { document: i2 } } = r.getNext();
      if (!e.isPrefixOf(t3.path))
        break;
      t3.path.length > e.length + 1 || (pt(gt(i2), n) <= 0 || (s = s.insert(i2.key, i2.mutableCopy())));
    }
    return At.resolve(s);
  }
  getAllFromCollectionGroup(t2, e, n, s) {
    O2();
  }
  As(t2, e) {
    return At.forEach(this.docs, (t3) => e(t3));
  }
  newChangeBuffer(t2) {
    return new ro(this);
  }
  getSize(t2) {
    return At.resolve(this.size);
  }
};
var ro = class extends qr {
  constructor(t2) {
    super(), this.Yn = t2;
  }
  applyChanges(t2) {
    const e = [];
    return this.changes.forEach((n, s) => {
      s.isValidDocument() ? e.push(this.Yn.addEntry(t2, s)) : this.Yn.removeEntry(n);
    }), At.waitFor(e);
  }
  getFromCache(t2, e) {
    return this.Yn.getEntry(t2, e);
  }
  getAllFromCache(t2, e) {
    return this.Yn.getEntries(t2, e);
  }
};
var oo = class {
  constructor(t2) {
    this.persistence = t2, this.Rs = new es((t3) => xe(t3), ke), this.lastRemoteSnapshotVersion = st.min(), this.highestTargetId = 0, this.bs = 0, this.Ps = new eo(), this.targetCount = 0, this.vs = Cr.Pn();
  }
  forEachTarget(t2, e) {
    return this.Rs.forEach((t3, n) => e(n)), At.resolve();
  }
  getLastRemoteSnapshotVersion(t2) {
    return At.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t2) {
    return At.resolve(this.bs);
  }
  allocateTargetId(t2) {
    return this.highestTargetId = this.vs.next(), At.resolve(this.highestTargetId);
  }
  setTargetsMetadata(t2, e, n) {
    return n && (this.lastRemoteSnapshotVersion = n), e > this.bs && (this.bs = e), At.resolve();
  }
  Dn(t2) {
    this.Rs.set(t2.target, t2);
    const e = t2.targetId;
    e > this.highestTargetId && (this.vs = new Cr(e), this.highestTargetId = e), t2.sequenceNumber > this.bs && (this.bs = t2.sequenceNumber);
  }
  addTargetData(t2, e) {
    return this.Dn(e), this.targetCount += 1, At.resolve();
  }
  updateTargetData(t2, e) {
    return this.Dn(e), At.resolve();
  }
  removeTargetData(t2, e) {
    return this.Rs.delete(e.target), this.Ps.ls(e.targetId), this.targetCount -= 1, At.resolve();
  }
  removeTargets(t2, e, n) {
    let s = 0;
    const i = [];
    return this.Rs.forEach((r, o) => {
      o.sequenceNumber <= e && null === n.get(o.targetId) && (this.Rs.delete(r), i.push(this.removeMatchingKeysForTargetId(t2, o.targetId)), s++);
    }), At.waitFor(i).next(() => s);
  }
  getTargetCount(t2) {
    return At.resolve(this.targetCount);
  }
  getTargetData(t2, e) {
    const n = this.Rs.get(e) || null;
    return At.resolve(n);
  }
  addMatchingKeys(t2, e, n) {
    return this.Ps.us(e, n), At.resolve();
  }
  removeMatchingKeys(t2, e, n) {
    this.Ps.hs(e, n);
    const s = this.persistence.referenceDelegate, i = [];
    return s && e.forEach((e2) => {
      i.push(s.markPotentiallyOrphaned(t2, e2));
    }), At.waitFor(i);
  }
  removeMatchingKeysForTargetId(t2, e) {
    return this.Ps.ls(e), At.resolve();
  }
  getMatchingKeysForTargetId(t2, e) {
    const n = this.Ps.ds(e);
    return At.resolve(n);
  }
  containsKey(t2, e) {
    return At.resolve(this.Ps.containsKey(e));
  }
};
var uo = class {
  constructor(t2, e) {
    this.Vs = {}, this.overlays = {}, this.Ss = new Ot(0), this.Ds = false, this.Ds = true, this.referenceDelegate = t2(this), this.Cs = new oo(this);
    this.indexManager = new dr(), this.remoteDocumentCache = function(t3) {
      return new io(t3);
    }((t3) => this.referenceDelegate.xs(t3)), this.It = new $i(e), this.Ns = new Zr(this.It);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return this.Ds = false, Promise.resolve();
  }
  get started() {
    return this.Ds;
  }
  setDatabaseDeletedListener() {
  }
  setNetworkEnabled() {
  }
  getIndexManager(t2) {
    return this.indexManager;
  }
  getDocumentOverlayCache(t2) {
    let e = this.overlays[t2.toKey()];
    return e || (e = new to(), this.overlays[t2.toKey()] = e), e;
  }
  getMutationQueue(t2, e) {
    let n = this.Vs[t2.toKey()];
    return n || (n = new so(e, this.referenceDelegate), this.Vs[t2.toKey()] = n), n;
  }
  getTargetCache() {
    return this.Cs;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Ns;
  }
  runTransaction(t2, e, n) {
    C2("MemoryPersistence", "Starting transaction:", t2);
    const s = new co(this.Ss.next());
    return this.referenceDelegate.ks(), n(s).next((t3) => this.referenceDelegate.Os(s).next(() => t3)).toPromise().then((t3) => (s.raiseOnCommittedEvent(), t3));
  }
  Ms(t2, e) {
    return At.or(Object.values(this.Vs).map((n) => () => n.containsKey(t2, e)));
  }
};
var co = class extends Tt {
  constructor(t2) {
    super(), this.currentSequenceNumber = t2;
  }
};
var ao = class {
  constructor(t2) {
    this.persistence = t2, this.Fs = new eo(), this.$s = null;
  }
  static Bs(t2) {
    return new ao(t2);
  }
  get Ls() {
    if (this.$s)
      return this.$s;
    throw O2();
  }
  addReference(t2, e, n) {
    return this.Fs.addReference(n, e), this.Ls.delete(n.toString()), At.resolve();
  }
  removeReference(t2, e, n) {
    return this.Fs.removeReference(n, e), this.Ls.add(n.toString()), At.resolve();
  }
  markPotentiallyOrphaned(t2, e) {
    return this.Ls.add(e.toString()), At.resolve();
  }
  removeTarget(t2, e) {
    this.Fs.ls(e.targetId).forEach((t3) => this.Ls.add(t3.toString()));
    const n = this.persistence.getTargetCache();
    return n.getMatchingKeysForTargetId(t2, e.targetId).next((t3) => {
      t3.forEach((t4) => this.Ls.add(t4.toString()));
    }).next(() => n.removeTargetData(t2, e));
  }
  ks() {
    this.$s = /* @__PURE__ */ new Set();
  }
  Os(t2) {
    const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return At.forEach(this.Ls, (n) => {
      const s = ct.fromPath(n);
      return this.Us(t2, s).next((t3) => {
        t3 || e.removeEntry(s, st.min());
      });
    }).next(() => (this.$s = null, e.apply(t2)));
  }
  updateLimboDocument(t2, e) {
    return this.Us(t2, e).next((t3) => {
      t3 ? this.Ls.delete(e.toString()) : this.Ls.add(e.toString());
    });
  }
  xs(t2) {
    return 0;
  }
  Us(t2, e) {
    return At.or([() => At.resolve(this.Fs.containsKey(e)), () => this.persistence.getTargetCache().containsKey(t2, e), () => this.persistence.Ms(t2, e)]);
  }
};
var ho = class {
  constructor(t2) {
    this.It = t2;
  }
  $(t2, e, n, s) {
    const i = new Rt("createOrUpgrade", e);
    n < 1 && s >= 1 && (function(t3) {
      t3.createObjectStore("owner");
    }(t2), function(t3) {
      t3.createObjectStore("mutationQueues", {
        keyPath: "userId"
      });
      t3.createObjectStore("mutations", {
        keyPath: "batchId",
        autoIncrement: true
      }).createIndex("userMutationsIndex", ai, {
        unique: true
      }), t3.createObjectStore("documentMutations");
    }(t2), lo(t2), function(t3) {
      t3.createObjectStore("remoteDocuments");
    }(t2));
    let r = At.resolve();
    return n < 3 && s >= 3 && (0 !== n && (!function(t3) {
      t3.deleteObjectStore("targetDocuments"), t3.deleteObjectStore("targets"), t3.deleteObjectStore("targetGlobal");
    }(t2), lo(t2)), r = r.next(() => function(t3) {
      const e2 = t3.store("targetGlobal"), n2 = {
        highestTargetId: 0,
        highestListenSequenceNumber: 0,
        lastRemoteSnapshotVersion: st.min().toTimestamp(),
        targetCount: 0
      };
      return e2.put("targetGlobalKey", n2);
    }(i))), n < 4 && s >= 4 && (0 !== n && (r = r.next(() => function(t3, e2) {
      return e2.store("mutations").W().next((n2) => {
        t3.deleteObjectStore("mutations");
        t3.createObjectStore("mutations", {
          keyPath: "batchId",
          autoIncrement: true
        }).createIndex("userMutationsIndex", ai, {
          unique: true
        });
        const s2 = e2.store("mutations"), i2 = n2.map((t4) => s2.put(t4));
        return At.waitFor(i2);
      });
    }(t2, i))), r = r.next(() => {
      !function(t3) {
        t3.createObjectStore("clientMetadata", {
          keyPath: "clientId"
        });
      }(t2);
    })), n < 5 && s >= 5 && (r = r.next(() => this.qs(i))), n < 6 && s >= 6 && (r = r.next(() => (function(t3) {
      t3.createObjectStore("remoteDocumentGlobal");
    }(t2), this.Ks(i)))), n < 7 && s >= 7 && (r = r.next(() => this.Gs(i))), n < 8 && s >= 8 && (r = r.next(() => this.Qs(t2, i))), n < 9 && s >= 9 && (r = r.next(() => {
      !function(t3) {
        t3.objectStoreNames.contains("remoteDocumentChanges") && t3.deleteObjectStore("remoteDocumentChanges");
      }(t2);
    })), n < 10 && s >= 10 && (r = r.next(() => this.js(i))), n < 11 && s >= 11 && (r = r.next(() => {
      !function(t3) {
        t3.createObjectStore("bundles", {
          keyPath: "bundleId"
        });
      }(t2), function(t3) {
        t3.createObjectStore("namedQueries", {
          keyPath: "name"
        });
      }(t2);
    })), n < 12 && s >= 12 && (r = r.next(() => {
      !function(t3) {
        const e2 = t3.createObjectStore("documentOverlays", {
          keyPath: Ri
        });
        e2.createIndex("collectionPathOverlayIndex", bi, {
          unique: false
        }), e2.createIndex("collectionGroupOverlayIndex", Pi, {
          unique: false
        });
      }(t2);
    })), n < 13 && s >= 13 && (r = r.next(() => function(t3) {
      const e2 = t3.createObjectStore("remoteDocumentsV14", {
        keyPath: di
      });
      e2.createIndex("documentKeyIndex", _i), e2.createIndex("collectionGroupIndex", wi);
    }(t2)).next(() => this.Ws(t2, i)).next(() => t2.deleteObjectStore("remoteDocuments"))), n < 14 && s >= 14 && (r = r.next(() => this.zs(t2, i))), n < 15 && s >= 15 && (r = r.next(() => function(t3) {
      t3.createObjectStore("indexConfiguration", {
        keyPath: "indexId",
        autoIncrement: true
      }).createIndex("collectionGroupIndex", "collectionGroup", {
        unique: false
      });
      t3.createObjectStore("indexState", {
        keyPath: Ii
      }).createIndex("sequenceNumberIndex", Ti, {
        unique: false
      });
      t3.createObjectStore("indexEntries", {
        keyPath: Ei
      }).createIndex("documentKeyIndex", Ai, {
        unique: false
      });
    }(t2))), r;
  }
  Ks(t2) {
    let e = 0;
    return t2.store("remoteDocuments").Z((t3, n) => {
      e += br(n);
    }).next(() => {
      const n = {
        byteSize: e
      };
      return t2.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey", n);
    });
  }
  qs(t2) {
    const e = t2.store("mutationQueues"), n = t2.store("mutations");
    return e.W().next((e2) => At.forEach(e2, (e3) => {
      const s = IDBKeyRange.bound([e3.userId, -1], [e3.userId, e3.lastAcknowledgedBatchId]);
      return n.W("userMutationsIndex", s).next((n2) => At.forEach(n2, (n3) => {
        M2(n3.userId === e3.userId);
        const s2 = Gi(this.It, n3);
        return Rr(t2, e3.userId, s2).next(() => {
        });
      }));
    }));
  }
  Gs(t2) {
    const e = t2.store("targetDocuments"), n = t2.store("remoteDocuments");
    return t2.store("targetGlobal").get("targetGlobalKey").next((t3) => {
      const s = [];
      return n.Z((n2, i) => {
        const r = new rt(n2), o = function(t4) {
          return [0, ri(t4)];
        }(r);
        s.push(e.get(o).next((n3) => n3 ? At.resolve() : ((n4) => e.put({
          targetId: 0,
          path: ri(n4),
          sequenceNumber: t3.highestListenSequenceNumber
        }))(r)));
      }).next(() => At.waitFor(s));
    });
  }
  Qs(t2, e) {
    t2.createObjectStore("collectionParents", {
      keyPath: pi
    });
    const n = e.store("collectionParents"), s = new _r(), i = (t3) => {
      if (s.add(t3)) {
        const e2 = t3.lastSegment(), s2 = t3.popLast();
        return n.put({
          collectionId: e2,
          parent: ri(s2)
        });
      }
    };
    return e.store("remoteDocuments").Z({
      X: true
    }, (t3, e2) => {
      const n2 = new rt(t3);
      return i(n2.popLast());
    }).next(() => e.store("documentMutations").Z({
      X: true
    }, ([t3, e2, n2], s2) => {
      const r = ci(e2);
      return i(r.popLast());
    }));
  }
  js(t2) {
    const e = t2.store("targets");
    return e.Z((t3, n) => {
      const s = Qi(n), i = ji(this.It, s);
      return e.put(i);
    });
  }
  Ws(t2, e) {
    const n = e.store("remoteDocuments"), s = [];
    return n.Z((t3, n2) => {
      const i = e.store("remoteDocumentsV14"), r = (o = n2, o.document ? new ct(rt.fromString(o.document.name).popFirst(5)) : o.noDocument ? ct.fromSegments(o.noDocument.path) : o.unknownDocument ? ct.fromSegments(o.unknownDocument.path) : O2()).path.toArray();
      var o;
      const u = {
        prefixPath: r.slice(0, r.length - 2),
        collectionGroup: r[r.length - 2],
        documentId: r[r.length - 1],
        readTime: n2.readTime || [0, 0],
        unknownDocument: n2.unknownDocument,
        noDocument: n2.noDocument,
        document: n2.document,
        hasCommittedMutations: !!n2.hasCommittedMutations
      };
      s.push(i.put(u));
    }).next(() => At.waitFor(s));
  }
  zs(t2, e) {
    const n = e.store("mutations"), s = Gr(this.It), i = new uo(ao.Bs, this.It.re);
    return n.W().next((t3) => {
      const n2 = /* @__PURE__ */ new Map();
      return t3.forEach((t4) => {
        var e2;
        let s2 = null !== (e2 = n2.get(t4.userId)) && void 0 !== e2 ? e2 : fs();
        Gi(this.It, t4).keys().forEach((t5) => s2 = s2.add(t5)), n2.set(t4.userId, s2);
      }), At.forEach(n2, (t4, n3) => {
        const r = new P2(n3), o = tr.oe(this.It, r), u = i.getIndexManager(r), c = Pr.oe(r, this.It, u, i.referenceDelegate);
        return new Xr(s, c, o, u).recalculateAndSaveOverlaysForDocumentKeys(new xi(e, Ot.at), t4).next();
      });
    });
  }
};
function lo(t2) {
  t2.createObjectStore("targetDocuments", {
    keyPath: gi
  }).createIndex("documentTargetsIndex", yi, {
    unique: true
  });
  t2.createObjectStore("targets", {
    keyPath: "targetId"
  }).createIndex("queryTargetsIndex", mi, {
    unique: true
  }), t2.createObjectStore("targetGlobal");
}
var fo = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";
var _o = class {
  constructor(t2, e, n, s, i, r, o, u, c, a, h = 15) {
    if (this.allowTabSynchronization = t2, this.persistenceKey = e, this.clientId = n, this.Hs = i, this.window = r, this.document = o, this.Js = c, this.Ys = a, this.Xs = h, this.Ss = null, this.Ds = false, this.isPrimary = false, this.networkEnabled = true, this.Zs = null, this.inForeground = false, this.ti = null, this.ei = null, this.ni = Number.NEGATIVE_INFINITY, this.si = (t3) => Promise.resolve(), !_o.C())
      throw new L2(B2.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
    this.referenceDelegate = new Lr(this, s), this.ii = e + "main", this.It = new $i(u), this.ri = new bt(this.ii, this.Xs, new ho(this.It)), this.Cs = new xr(this.referenceDelegate, this.It), this.remoteDocumentCache = Gr(this.It), this.Ns = new Yi(), this.window && this.window.localStorage ? this.oi = this.window.localStorage : (this.oi = null, false === a && x2("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
  }
  start() {
    return this.ui().then(() => {
      if (!this.isPrimary && !this.allowTabSynchronization)
        throw new L2(B2.FAILED_PRECONDITION, fo);
      return this.ci(), this.ai(), this.hi(), this.runTransaction("getHighestListenSequenceNumber", "readonly", (t2) => this.Cs.getHighestSequenceNumber(t2));
    }).then((t2) => {
      this.Ss = new Ot(t2, this.Js);
    }).then(() => {
      this.Ds = true;
    }).catch((t2) => (this.ri && this.ri.close(), Promise.reject(t2)));
  }
  li(t2) {
    return this.si = async (e) => {
      if (this.started)
        return t2(e);
    }, t2(this.isPrimary);
  }
  setDatabaseDeletedListener(t2) {
    this.ri.L(async (e) => {
      null === e.newVersion && await t2();
    });
  }
  setNetworkEnabled(t2) {
    this.networkEnabled !== t2 && (this.networkEnabled = t2, this.Hs.enqueueAndForget(async () => {
      this.started && await this.ui();
    }));
  }
  ui() {
    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (t2) => mo(t2).put({
      clientId: this.clientId,
      updateTimeMs: Date.now(),
      networkEnabled: this.networkEnabled,
      inForeground: this.inForeground
    }).next(() => {
      if (this.isPrimary)
        return this.fi(t2).next((t3) => {
          t3 || (this.isPrimary = false, this.Hs.enqueueRetryable(() => this.si(false)));
        });
    }).next(() => this.di(t2)).next((e) => this.isPrimary && !e ? this._i(t2).next(() => false) : !!e && this.wi(t2).next(() => true))).catch((t2) => {
      if (Vt(t2))
        return C2("IndexedDbPersistence", "Failed to extend owner lease: ", t2), this.isPrimary;
      if (!this.allowTabSynchronization)
        throw t2;
      return C2("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t2), false;
    }).then((t2) => {
      this.isPrimary !== t2 && this.Hs.enqueueRetryable(() => this.si(t2)), this.isPrimary = t2;
    });
  }
  fi(t2) {
    return wo(t2).get("owner").next((t3) => At.resolve(this.mi(t3)));
  }
  gi(t2) {
    return mo(t2).delete(this.clientId);
  }
  async yi() {
    if (this.isPrimary && !this.pi(this.ni, 18e5)) {
      this.ni = Date.now();
      const t2 = await this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (t3) => {
        const e = Ni(t3, "clientMetadata");
        return e.W().next((t4) => {
          const n = this.Ii(t4, 18e5), s = t4.filter((t5) => -1 === n.indexOf(t5));
          return At.forEach(s, (t5) => e.delete(t5.clientId)).next(() => s);
        });
      }).catch(() => []);
      if (this.oi)
        for (const e of t2)
          this.oi.removeItem(this.Ti(e.clientId));
    }
  }
  hi() {
    this.ei = this.Hs.enqueueAfterDelay("client_metadata_refresh", 4e3, () => this.ui().then(() => this.yi()).then(() => this.hi()));
  }
  mi(t2) {
    return !!t2 && t2.ownerId === this.clientId;
  }
  di(t2) {
    if (this.Ys)
      return At.resolve(true);
    return wo(t2).get("owner").next((e) => {
      if (null !== e && this.pi(e.leaseTimestampMs, 5e3) && !this.Ei(e.ownerId)) {
        if (this.mi(e) && this.networkEnabled)
          return true;
        if (!this.mi(e)) {
          if (!e.allowTabSynchronization)
            throw new L2(B2.FAILED_PRECONDITION, fo);
          return false;
        }
      }
      return !(!this.networkEnabled || !this.inForeground) || mo(t2).W().next((t3) => void 0 === this.Ii(t3, 5e3).find((t4) => {
        if (this.clientId !== t4.clientId) {
          const e2 = !this.networkEnabled && t4.networkEnabled, n = !this.inForeground && t4.inForeground, s = this.networkEnabled === t4.networkEnabled;
          if (e2 || n && s)
            return true;
        }
        return false;
      }));
    }).next((t3) => (this.isPrimary !== t3 && C2("IndexedDbPersistence", `Client ${t3 ? "is" : "is not"} eligible for a primary lease.`), t3));
  }
  async shutdown() {
    this.Ds = false, this.Ai(), this.ei && (this.ei.cancel(), this.ei = null), this.Ri(), this.bi(), await this.ri.runTransaction("shutdown", "readwrite", ["owner", "clientMetadata"], (t2) => {
      const e = new xi(t2, Ot.at);
      return this._i(e).next(() => this.gi(e));
    }), this.ri.close(), this.Pi();
  }
  Ii(t2, e) {
    return t2.filter((t3) => this.pi(t3.updateTimeMs, e) && !this.Ei(t3.clientId));
  }
  vi() {
    return this.runTransaction("getActiveClients", "readonly", (t2) => mo(t2).W().next((t3) => this.Ii(t3, 18e5).map((t4) => t4.clientId)));
  }
  get started() {
    return this.Ds;
  }
  getMutationQueue(t2, e) {
    return Pr.oe(t2, this.It, e, this.referenceDelegate);
  }
  getTargetCache() {
    return this.Cs;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getIndexManager(t2) {
    return new mr(t2, this.It.re.databaseId);
  }
  getDocumentOverlayCache(t2) {
    return tr.oe(this.It, t2);
  }
  getBundleCache() {
    return this.Ns;
  }
  runTransaction(t2, e, n) {
    C2("IndexedDbPersistence", "Starting transaction:", t2);
    const s = "readonly" === e ? "readonly" : "readwrite", i = 15 === (r = this.Xs) ? Ci : 14 === r ? Di : 13 === r ? Si : 12 === r ? Vi : 11 === r ? vi : void O2();
    var r;
    let o;
    return this.ri.runTransaction(t2, s, i, (s2) => (o = new xi(s2, this.Ss ? this.Ss.next() : Ot.at), "readwrite-primary" === e ? this.fi(o).next((t3) => !!t3 || this.di(o)).next((e2) => {
      if (!e2)
        throw x2(`Failed to obtain primary lease for action '${t2}'.`), this.isPrimary = false, this.Hs.enqueueRetryable(() => this.si(false)), new L2(B2.FAILED_PRECONDITION, It);
      return n(o);
    }).next((t3) => this.wi(o).next(() => t3)) : this.Vi(o).next(() => n(o)))).then((t3) => (o.raiseOnCommittedEvent(), t3));
  }
  Vi(t2) {
    return wo(t2).get("owner").next((t3) => {
      if (null !== t3 && this.pi(t3.leaseTimestampMs, 5e3) && !this.Ei(t3.ownerId) && !this.mi(t3) && !(this.Ys || this.allowTabSynchronization && t3.allowTabSynchronization))
        throw new L2(B2.FAILED_PRECONDITION, fo);
    });
  }
  wi(t2) {
    const e = {
      ownerId: this.clientId,
      allowTabSynchronization: this.allowTabSynchronization,
      leaseTimestampMs: Date.now()
    };
    return wo(t2).put("owner", e);
  }
  static C() {
    return bt.C();
  }
  _i(t2) {
    const e = wo(t2);
    return e.get("owner").next((t3) => this.mi(t3) ? (C2("IndexedDbPersistence", "Releasing primary lease."), e.delete("owner")) : At.resolve());
  }
  pi(t2, e) {
    const n = Date.now();
    return !(t2 < n - e) && (!(t2 > n) || (x2(`Detected an update time that is in the future: ${t2} > ${n}`), false));
  }
  ci() {
    null !== this.document && "function" == typeof this.document.addEventListener && (this.ti = () => {
      this.Hs.enqueueAndForget(() => (this.inForeground = "visible" === this.document.visibilityState, this.ui()));
    }, this.document.addEventListener("visibilitychange", this.ti), this.inForeground = "visible" === this.document.visibilityState);
  }
  Ri() {
    this.ti && (this.document.removeEventListener("visibilitychange", this.ti), this.ti = null);
  }
  ai() {
    var t2;
    "function" == typeof (null === (t2 = this.window) || void 0 === t2 ? void 0 : t2.addEventListener) && (this.Zs = () => {
      this.Ai(), isSafari() && navigator.appVersion.match(/Version\/1[45]/) && this.Hs.enterRestrictedMode(true), this.Hs.enqueueAndForget(() => this.shutdown());
    }, this.window.addEventListener("pagehide", this.Zs));
  }
  bi() {
    this.Zs && (this.window.removeEventListener("pagehide", this.Zs), this.Zs = null);
  }
  Ei(t2) {
    var e;
    try {
      const n = null !== (null === (e = this.oi) || void 0 === e ? void 0 : e.getItem(this.Ti(t2)));
      return C2("IndexedDbPersistence", `Client '${t2}' ${n ? "is" : "is not"} zombied in LocalStorage`), n;
    } catch (t3) {
      return x2("IndexedDbPersistence", "Failed to get zombied client id.", t3), false;
    }
  }
  Ai() {
    if (this.oi)
      try {
        this.oi.setItem(this.Ti(this.clientId), String(Date.now()));
      } catch (t2) {
        x2("Failed to set zombie client id.", t2);
      }
  }
  Pi() {
    if (this.oi)
      try {
        this.oi.removeItem(this.Ti(this.clientId));
      } catch (t2) {
      }
  }
  Ti(t2) {
    return `firestore_zombie_${this.persistenceKey}_${t2}`;
  }
};
function wo(t2) {
  return Ni(t2, "owner");
}
function mo(t2) {
  return Ni(t2, "clientMetadata");
}
function go(t2, e) {
  let n = t2.projectId;
  return t2.isDefaultDatabase || (n += "." + t2.database), "firestore/" + e + "/" + n + "/";
}
var yo = class {
  constructor(t2, e, n, s) {
    this.targetId = t2, this.fromCache = e, this.Si = n, this.Di = s;
  }
  static Ci(t2, e) {
    let n = fs(), s = fs();
    for (const t3 of e.docChanges)
      switch (t3.type) {
        case 0:
          n = n.add(t3.doc.key);
          break;
        case 1:
          s = s.add(t3.doc.key);
      }
    return new yo(t2, e.fromCache, n, s);
  }
};
var po = class {
  constructor() {
    this.xi = false;
  }
  initialize(t2, e) {
    this.Ni = t2, this.indexManager = e, this.xi = true;
  }
  getDocumentsMatchingQuery(t2, e, n, s) {
    return this.ki(t2, e).next((i) => i || this.Oi(t2, e, s, n)).next((n2) => n2 || this.Mi(t2, e));
  }
  ki(t2, e) {
    if (nn(e))
      return At.resolve(null);
    let n = cn(e);
    return this.indexManager.getIndexType(t2, n).next((s) => 0 === s ? null : (null !== e.limit && 1 === s && (e = an(e, null, "F"), n = cn(e)), this.indexManager.getDocumentsMatchingTarget(t2, n).next((s2) => {
      const i = fs(...s2);
      return this.Ni.getDocuments(t2, i).next((s3) => this.indexManager.getMinOffset(t2, n).next((n2) => {
        const r = this.Fi(e, s3);
        return this.$i(e, r, i, n2.readTime) ? this.ki(t2, an(e, null, "F")) : this.Bi(t2, r, e, n2);
      }));
    })));
  }
  Oi(t2, e, n, s) {
    return nn(e) || s.isEqual(st.min()) ? this.Mi(t2, e) : this.Ni.getDocuments(t2, n).next((i) => {
      const r = this.Fi(e, i);
      return this.$i(e, r, n, s) ? this.Mi(t2, e) : (S2() <= LogLevel.DEBUG && C2("QueryEngine", "Re-using previous result from %s to execute query: %s", s.toString(), fn(e)), this.Bi(t2, r, e, mt(s, -1)));
    });
  }
  Fi(t2, e) {
    let n = new qt(wn(t2));
    return e.forEach((e2, s) => {
      dn(t2, s) && (n = n.add(s));
    }), n;
  }
  $i(t2, e, n, s) {
    if (null === t2.limit)
      return false;
    if (n.size !== e.size)
      return true;
    const i = "F" === t2.limitType ? e.last() : e.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(s) > 0);
  }
  Mi(t2, e) {
    return S2() <= LogLevel.DEBUG && C2("QueryEngine", "Using full collection scan to execute query:", fn(e)), this.Ni.getDocumentsMatchingQuery(t2, e, yt.min());
  }
  Bi(t2, e, n, s) {
    return this.Ni.getDocumentsMatchingQuery(t2, n, s).next((t3) => (e.forEach((e2) => {
      t3 = t3.insert(e2.key, e2);
    }), t3));
  }
};
var Io = class {
  constructor(t2, e, n, s) {
    this.persistence = t2, this.Li = e, this.It = s, this.Ui = new Bt(Z), this.qi = new es((t3) => xe(t3), ke), this.Ki = /* @__PURE__ */ new Map(), this.Gi = t2.getRemoteDocumentCache(), this.Cs = t2.getTargetCache(), this.Ns = t2.getBundleCache(), this.Qi(n);
  }
  Qi(t2) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t2), this.indexManager = this.persistence.getIndexManager(t2), this.mutationQueue = this.persistence.getMutationQueue(t2, this.indexManager), this.localDocuments = new Xr(this.Gi, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.Gi.setIndexManager(this.indexManager), this.Li.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(t2) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e) => t2.collect(e, this.Ui));
  }
};
function To(t2, e, n, s) {
  return new Io(t2, e, n, s);
}
async function Eo(t2, e) {
  const n = $(t2);
  return await n.persistence.runTransaction("Handle user change", "readonly", (t3) => {
    let s;
    return n.mutationQueue.getAllMutationBatches(t3).next((i) => (s = i, n.Qi(e), n.mutationQueue.getAllMutationBatches(t3))).next((e2) => {
      const i = [], r = [];
      let o = fs();
      for (const t4 of s) {
        i.push(t4.batchId);
        for (const e3 of t4.mutations)
          o = o.add(e3.key);
      }
      for (const t4 of e2) {
        r.push(t4.batchId);
        for (const e3 of t4.mutations)
          o = o.add(e3.key);
      }
      return n.localDocuments.getDocuments(t3, o).next((t4) => ({
        ji: t4,
        removedBatchIds: i,
        addedBatchIds: r
      }));
    });
  });
}
function Ao(t2, e) {
  const n = $(t2);
  return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (t3) => {
    const s = e.batch.keys(), i = n.Gi.newChangeBuffer({
      trackRemovals: true
    });
    return function(t4, e2, n2, s2) {
      const i2 = n2.batch, r = i2.keys();
      let o = At.resolve();
      return r.forEach((t5) => {
        o = o.next(() => s2.getEntry(e2, t5)).next((e3) => {
          const r2 = n2.docVersions.get(t5);
          M2(null !== r2), e3.version.compareTo(r2) < 0 && (i2.applyToRemoteDocument(e3, n2), e3.isValidDocument() && (e3.setReadTime(n2.commitVersion), s2.addEntry(e3)));
        });
      }), o.next(() => t4.mutationQueue.removeMutationBatch(e2, i2));
    }(n, t3, e, i).next(() => i.apply(t3)).next(() => n.mutationQueue.performConsistencyCheck(t3)).next(() => n.documentOverlayCache.removeOverlaysForBatchId(t3, s, e.batch.batchId)).next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t3, function(t4) {
      let e2 = fs();
      for (let n2 = 0; n2 < t4.mutationResults.length; ++n2) {
        t4.mutationResults[n2].transformResults.length > 0 && (e2 = e2.add(t4.batch.mutations[n2].key));
      }
      return e2;
    }(e))).next(() => n.localDocuments.getDocuments(t3, s));
  });
}
function Ro(t2) {
  const e = $(t2);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (t3) => e.Cs.getLastRemoteSnapshotVersion(t3));
}
function bo(t2, e) {
  const n = $(t2), s = e.snapshotVersion;
  let i = n.Ui;
  return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (t3) => {
    const r = n.Gi.newChangeBuffer({
      trackRemovals: true
    });
    i = n.Ui;
    const o = [];
    e.targetChanges.forEach((r2, u2) => {
      const c2 = i.get(u2);
      if (!c2)
        return;
      o.push(n.Cs.removeMatchingKeys(t3, r2.removedDocuments, u2).next(() => n.Cs.addMatchingKeys(t3, r2.addedDocuments, u2)));
      let a = c2.withSequenceNumber(t3.currentSequenceNumber);
      e.targetMismatches.has(u2) ? a = a.withResumeToken(Wt.EMPTY_BYTE_STRING, st.min()).withLastLimboFreeSnapshotVersion(st.min()) : r2.resumeToken.approximateByteSize() > 0 && (a = a.withResumeToken(r2.resumeToken, s)), i = i.insert(u2, a), function(t4, e2, n2) {
        if (0 === t4.resumeToken.approximateByteSize())
          return true;
        if (e2.snapshotVersion.toMicroseconds() - t4.snapshotVersion.toMicroseconds() >= 3e8)
          return true;
        return n2.addedDocuments.size + n2.modifiedDocuments.size + n2.removedDocuments.size > 0;
      }(c2, a, r2) && o.push(n.Cs.updateTargetData(t3, a));
    });
    let u = ss(), c = fs();
    if (e.documentUpdates.forEach((s2) => {
      e.resolvedLimboDocuments.has(s2) && o.push(n.persistence.referenceDelegate.updateLimboDocument(t3, s2));
    }), o.push(Po(t3, r, e.documentUpdates).next((t4) => {
      u = t4.Wi, c = t4.zi;
    })), !s.isEqual(st.min())) {
      const e2 = n.Cs.getLastRemoteSnapshotVersion(t3).next((e3) => n.Cs.setTargetsMetadata(t3, t3.currentSequenceNumber, s));
      o.push(e2);
    }
    return At.waitFor(o).next(() => r.apply(t3)).next(() => n.localDocuments.getLocalViewOfDocuments(t3, u, c)).next(() => u);
  }).then((t3) => (n.Ui = i, t3));
}
function Po(t2, e, n) {
  let s = fs(), i = fs();
  return n.forEach((t3) => s = s.add(t3)), e.getEntries(t2, s).next((t3) => {
    let s2 = ss();
    return n.forEach((n2, r) => {
      const o = t3.get(n2);
      r.isFoundDocument() !== o.isFoundDocument() && (i = i.add(n2)), r.isNoDocument() && r.version.isEqual(st.min()) ? (e.removeEntry(n2, r.readTime), s2 = s2.insert(n2, r)) : !o.isValidDocument() || r.version.compareTo(o.version) > 0 || 0 === r.version.compareTo(o.version) && o.hasPendingWrites ? (e.addEntry(r), s2 = s2.insert(n2, r)) : C2("LocalStore", "Ignoring outdated watch update for ", n2, ". Current version:", o.version, " Watch version:", r.version);
    }), {
      Wi: s2,
      zi: i
    };
  });
}
function vo(t2, e) {
  const n = $(t2);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", (t3) => (void 0 === e && (e = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(t3, e)));
}
function Vo(t2, e) {
  const n = $(t2);
  return n.persistence.runTransaction("Allocate target", "readwrite", (t3) => {
    let s;
    return n.Cs.getTargetData(t3, e).next((i) => i ? (s = i, At.resolve(s)) : n.Cs.allocateTargetId(t3).next((i2) => (s = new Fi(e, i2, 0, t3.currentSequenceNumber), n.Cs.addTargetData(t3, s).next(() => s))));
  }).then((t3) => {
    const s = n.Ui.get(t3.targetId);
    return (null === s || t3.snapshotVersion.compareTo(s.snapshotVersion) > 0) && (n.Ui = n.Ui.insert(t3.targetId, t3), n.qi.set(e, t3.targetId)), t3;
  });
}
async function So(t2, e, n) {
  const s = $(t2), i = s.Ui.get(e), r = n ? "readwrite" : "readwrite-primary";
  try {
    n || await s.persistence.runTransaction("Release target", r, (t3) => s.persistence.referenceDelegate.removeTarget(t3, i));
  } catch (t3) {
    if (!Vt(t3))
      throw t3;
    C2("LocalStore", `Failed to update sequence numbers for target ${e}: ${t3}`);
  }
  s.Ui = s.Ui.remove(e), s.qi.delete(i.target);
}
function Do(t2, e, n) {
  const s = $(t2);
  let i = st.min(), r = fs();
  return s.persistence.runTransaction("Execute query", "readonly", (t3) => function(t4, e2, n2) {
    const s2 = $(t4), i2 = s2.qi.get(n2);
    return void 0 !== i2 ? At.resolve(s2.Ui.get(i2)) : s2.Cs.getTargetData(e2, n2);
  }(s, t3, cn(e)).next((e2) => {
    if (e2)
      return i = e2.lastLimboFreeSnapshotVersion, s.Cs.getMatchingKeysForTargetId(t3, e2.targetId).next((t4) => {
        r = t4;
      });
  }).next(() => s.Li.getDocumentsMatchingQuery(t3, e, n ? i : st.min(), n ? r : fs())).next((t4) => (No(s, _n(e), t4), {
    documents: t4,
    Hi: r
  })));
}
function No(t2, e, n) {
  let s = t2.Ki.get(e) || st.min();
  n.forEach((t3, e2) => {
    e2.readTime.compareTo(s) > 0 && (s = e2.readTime);
  }), t2.Ki.set(e, s);
}
var Ko = class {
  constructor() {
    this.activeTargetIds = _s();
  }
  er(t2) {
    this.activeTargetIds = this.activeTargetIds.add(t2);
  }
  nr(t2) {
    this.activeTargetIds = this.activeTargetIds.delete(t2);
  }
  tr() {
    const t2 = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(t2);
  }
};
var Qo = class {
  constructor() {
    this.Lr = new Ko(), this.Ur = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }
  addPendingMutation(t2) {
  }
  updateMutationState(t2, e, n) {
  }
  addLocalQueryTarget(t2) {
    return this.Lr.er(t2), this.Ur[t2] || "not-current";
  }
  updateQueryState(t2, e, n) {
    this.Ur[t2] = e;
  }
  removeLocalQueryTarget(t2) {
    this.Lr.nr(t2);
  }
  isLocalQueryTarget(t2) {
    return this.Lr.activeTargetIds.has(t2);
  }
  clearQueryState(t2) {
    delete this.Ur[t2];
  }
  getAllActiveQueryTargets() {
    return this.Lr.activeTargetIds;
  }
  isActiveQueryTarget(t2) {
    return this.Lr.activeTargetIds.has(t2);
  }
  start() {
    return this.Lr = new Ko(), Promise.resolve();
  }
  handleUserChange(t2, e, n) {
  }
  setOnlineState(t2) {
  }
  shutdown() {
  }
  writeSequenceNumber(t2) {
  }
  notifyBundleLoaded(t2) {
  }
};
var jo = class {
  qr(t2) {
  }
  shutdown() {
  }
};
var Wo = class {
  constructor() {
    this.Kr = () => this.Gr(), this.Qr = () => this.jr(), this.Wr = [], this.zr();
  }
  qr(t2) {
    this.Wr.push(t2);
  }
  shutdown() {
    window.removeEventListener("online", this.Kr), window.removeEventListener("offline", this.Qr);
  }
  zr() {
    window.addEventListener("online", this.Kr), window.addEventListener("offline", this.Qr);
  }
  Gr() {
    C2("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const t2 of this.Wr)
      t2(0);
  }
  jr() {
    C2("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const t2 of this.Wr)
      t2(1);
  }
  static C() {
    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
  }
};
var zo = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery"
};
var Ho = class {
  constructor(t2) {
    this.Hr = t2.Hr, this.Jr = t2.Jr;
  }
  Yr(t2) {
    this.Xr = t2;
  }
  Zr(t2) {
    this.eo = t2;
  }
  onMessage(t2) {
    this.no = t2;
  }
  close() {
    this.Jr();
  }
  send(t2) {
    this.Hr(t2);
  }
  so() {
    this.Xr();
  }
  io(t2) {
    this.eo(t2);
  }
  ro(t2) {
    this.no(t2);
  }
};
var Jo = class extends class {
  constructor(t2) {
    this.databaseInfo = t2, this.databaseId = t2.databaseId;
    const e = t2.ssl ? "https" : "http";
    this.oo = e + "://" + t2.host, this.uo = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
  }
  get co() {
    return false;
  }
  ao(t2, e, n, s, i) {
    const r = this.ho(t2, e);
    C2("RestConnection", "Sending: ", r, n);
    const o = {};
    return this.lo(o, s, i), this.fo(t2, r, o, n).then((t3) => (C2("RestConnection", "Received: ", t3), t3), (e2) => {
      throw N2("RestConnection", `${t2} failed with error: `, e2, "url: ", r, "request:", n), e2;
    });
  }
  _o(t2, e, n, s, i, r) {
    return this.ao(t2, e, n, s, i);
  }
  lo(t2, e, n) {
    t2["X-Goog-Api-Client"] = "gl-js/ fire/" + v2, t2["Content-Type"] = "text/plain", this.databaseInfo.appId && (t2["X-Firebase-GMPID"] = this.databaseInfo.appId), e && e.headers.forEach((e2, n2) => t2[n2] = e2), n && n.headers.forEach((e2, n2) => t2[n2] = e2);
  }
  ho(t2, e) {
    const n = zo[t2];
    return `${this.oo}/v1/${e}:${n}`;
  }
} {
  constructor(t2) {
    super(t2), this.forceLongPolling = t2.forceLongPolling, this.autoDetectLongPolling = t2.autoDetectLongPolling, this.useFetchStreams = t2.useFetchStreams;
  }
  fo(t2, e, n, s) {
    return new Promise((i, r) => {
      const o = new XhrIo();
      o.setWithCredentials(true), o.listenOnce(EventType.COMPLETE, () => {
        var e2;
        try {
          switch (o.getLastErrorCode()) {
            case ErrorCode.NO_ERROR:
              const n2 = o.getResponseJson();
              C2("Connection", "XHR received:", JSON.stringify(n2)), i(n2);
              break;
            case ErrorCode.TIMEOUT:
              C2("Connection", 'RPC "' + t2 + '" timed out'), r(new L2(B2.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case ErrorCode.HTTP_ERROR:
              const s2 = o.getStatus();
              if (C2("Connection", 'RPC "' + t2 + '" failed with status:', s2, "response text:", o.getResponseText()), s2 > 0) {
                let t3 = o.getResponseJson();
                Array.isArray(t3) && (t3 = t3[0]);
                const n3 = null === (e2 = t3) || void 0 === e2 ? void 0 : e2.error;
                if (n3 && n3.status && n3.message) {
                  const t4 = function(t5) {
                    const e3 = t5.toLowerCase().replace(/_/g, "-");
                    return Object.values(B2).indexOf(e3) >= 0 ? e3 : B2.UNKNOWN;
                  }(n3.status);
                  r(new L2(t4, n3.message));
                } else
                  r(new L2(B2.UNKNOWN, "Server responded with status " + o.getStatus()));
              } else
                r(new L2(B2.UNAVAILABLE, "Connection failed."));
              break;
            default:
              O2();
          }
        } finally {
          C2("Connection", 'RPC "' + t2 + '" completed.');
        }
      });
      const u = JSON.stringify(s);
      o.send(e, "POST", u, n, 15);
    });
  }
  wo(t2, e, n) {
    const s = [this.oo, "/", "google.firestore.v1.Firestore", "/", t2, "/channel"], i = createWebChannelTransport(), r = getStatEventTarget(), o = {
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: true,
      supportsCrossDomainXhr: true,
      internalChannelParams: {
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    };
    this.useFetchStreams && (o.xmlHttpFactory = new FetchXmlHttpFactory({})), this.lo(o.initMessageHeaders, e, n), o.encodeInitMessageHeaders = true;
    const u = s.join("");
    C2("Connection", "Creating WebChannel: " + u, o);
    const c = i.createWebChannel(u, o);
    let a = false, h = false;
    const l2 = new Ho({
      Hr: (t3) => {
        h ? C2("Connection", "Not sending because WebChannel is closed:", t3) : (a || (C2("Connection", "Opening WebChannel transport."), c.open(), a = true), C2("Connection", "WebChannel sending:", t3), c.send(t3));
      },
      Jr: () => c.close()
    }), f2 = (t3, e2, n2) => {
      t3.listen(e2, (t4) => {
        try {
          n2(t4);
        } catch (t5) {
          setTimeout(() => {
            throw t5;
          }, 0);
        }
      });
    };
    return f2(c, WebChannel.EventType.OPEN, () => {
      h || C2("Connection", "WebChannel transport opened.");
    }), f2(c, WebChannel.EventType.CLOSE, () => {
      h || (h = true, C2("Connection", "WebChannel transport closed"), l2.io());
    }), f2(c, WebChannel.EventType.ERROR, (t3) => {
      h || (h = true, N2("Connection", "WebChannel transport errored:", t3), l2.io(new L2(B2.UNAVAILABLE, "The operation could not be completed")));
    }), f2(c, WebChannel.EventType.MESSAGE, (t3) => {
      var e2;
      if (!h) {
        const n2 = t3.data[0];
        M2(!!n2);
        const s2 = n2, i2 = s2.error || (null === (e2 = s2[0]) || void 0 === e2 ? void 0 : e2.error);
        if (i2) {
          C2("Connection", "WebChannel received error:", i2);
          const t4 = i2.status;
          let e3 = function(t5) {
            const e4 = Yn[t5];
            if (void 0 !== e4)
              return ts(e4);
          }(t4), n3 = i2.message;
          void 0 === e3 && (e3 = B2.INTERNAL, n3 = "Unknown error status: " + t4 + " with message " + i2.message), h = true, l2.io(new L2(e3, n3)), c.close();
        } else
          C2("Connection", "WebChannel received:", n2), l2.ro(n2);
      }
    }), f2(r, Event.STAT_EVENT, (t3) => {
      t3.stat === Stat.PROXY ? C2("Connection", "Detected buffering proxy") : t3.stat === Stat.NOPROXY && C2("Connection", "Detected no buffering proxy");
    }), setTimeout(() => {
      l2.so();
    }, 0), l2;
  }
};
function Yo() {
  return "undefined" != typeof window ? window : null;
}
function Xo() {
  return "undefined" != typeof document ? document : null;
}
function Zo(t2) {
  return new Ps(t2, true);
}
var tu = class {
  constructor(t2, e, n = 1e3, s = 1.5, i = 6e4) {
    this.Hs = t2, this.timerId = e, this.mo = n, this.yo = s, this.po = i, this.Io = 0, this.To = null, this.Eo = Date.now(), this.reset();
  }
  reset() {
    this.Io = 0;
  }
  Ao() {
    this.Io = this.po;
  }
  Ro(t2) {
    this.cancel();
    const e = Math.floor(this.Io + this.bo()), n = Math.max(0, Date.now() - this.Eo), s = Math.max(0, e - n);
    s > 0 && C2("ExponentialBackoff", `Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), this.To = this.Hs.enqueueAfterDelay(this.timerId, s, () => (this.Eo = Date.now(), t2())), this.Io *= this.yo, this.Io < this.mo && (this.Io = this.mo), this.Io > this.po && (this.Io = this.po);
  }
  Po() {
    null !== this.To && (this.To.skipDelay(), this.To = null);
  }
  cancel() {
    null !== this.To && (this.To.cancel(), this.To = null);
  }
  bo() {
    return (Math.random() - 0.5) * this.Io;
  }
};
var eu = class {
  constructor(t2, e, n, s, i, r, o, u) {
    this.Hs = t2, this.vo = n, this.Vo = s, this.connection = i, this.authCredentialsProvider = r, this.appCheckCredentialsProvider = o, this.listener = u, this.state = 0, this.So = 0, this.Do = null, this.Co = null, this.stream = null, this.xo = new tu(t2, e);
  }
  No() {
    return 1 === this.state || 5 === this.state || this.ko();
  }
  ko() {
    return 2 === this.state || 3 === this.state;
  }
  start() {
    4 !== this.state ? this.auth() : this.Oo();
  }
  async stop() {
    this.No() && await this.close(0);
  }
  Mo() {
    this.state = 0, this.xo.reset();
  }
  Fo() {
    this.ko() && null === this.Do && (this.Do = this.Hs.enqueueAfterDelay(this.vo, 6e4, () => this.$o()));
  }
  Bo(t2) {
    this.Lo(), this.stream.send(t2);
  }
  async $o() {
    if (this.ko())
      return this.close(0);
  }
  Lo() {
    this.Do && (this.Do.cancel(), this.Do = null);
  }
  Uo() {
    this.Co && (this.Co.cancel(), this.Co = null);
  }
  async close(t2, e) {
    this.Lo(), this.Uo(), this.xo.cancel(), this.So++, 4 !== t2 ? this.xo.reset() : e && e.code === B2.RESOURCE_EXHAUSTED ? (x2(e.toString()), x2("Using maximum backoff delay to prevent overloading the backend."), this.xo.Ao()) : e && e.code === B2.UNAUTHENTICATED && 3 !== this.state && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), null !== this.stream && (this.qo(), this.stream.close(), this.stream = null), this.state = t2, await this.listener.Zr(e);
  }
  qo() {
  }
  auth() {
    this.state = 1;
    const t2 = this.Ko(this.So), e = this.So;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([t3, n]) => {
      this.So === e && this.Go(t3, n);
    }, (e2) => {
      t2(() => {
        const t3 = new L2(B2.UNKNOWN, "Fetching auth token failed: " + e2.message);
        return this.Qo(t3);
      });
    });
  }
  Go(t2, e) {
    const n = this.Ko(this.So);
    this.stream = this.jo(t2, e), this.stream.Yr(() => {
      n(() => (this.state = 2, this.Co = this.Hs.enqueueAfterDelay(this.Vo, 1e4, () => (this.ko() && (this.state = 3), Promise.resolve())), this.listener.Yr()));
    }), this.stream.Zr((t3) => {
      n(() => this.Qo(t3));
    }), this.stream.onMessage((t3) => {
      n(() => this.onMessage(t3));
    });
  }
  Oo() {
    this.state = 5, this.xo.Ro(async () => {
      this.state = 0, this.start();
    });
  }
  Qo(t2) {
    return C2("PersistentStream", `close with error: ${t2}`), this.stream = null, this.close(4, t2);
  }
  Ko(t2) {
    return (e) => {
      this.Hs.enqueueAndForget(() => this.So === t2 ? e() : (C2("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
    };
  }
};
var nu = class extends eu {
  constructor(t2, e, n, s, i, r) {
    super(t2, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", e, n, s, r), this.It = i;
  }
  jo(t2, e) {
    return this.connection.wo("Listen", t2, e);
  }
  onMessage(t2) {
    this.xo.reset();
    const e = qs(this.It, t2), n = function(t3) {
      if (!("targetChange" in t3))
        return st.min();
      const e2 = t3.targetChange;
      return e2.targetIds && e2.targetIds.length ? st.min() : e2.readTime ? Ds(e2.readTime) : st.min();
    }(t2);
    return this.listener.Wo(e, n);
  }
  zo(t2) {
    const e = {};
    e.database = Fs(this.It), e.addTarget = function(t3, e2) {
      let n2;
      const s = e2.target;
      return n2 = Oe(s) ? {
        documents: js(t3, s)
      } : {
        query: Ws(t3, s)
      }, n2.targetId = e2.targetId, e2.resumeToken.approximateByteSize() > 0 ? n2.resumeToken = Vs(t3, e2.resumeToken) : e2.snapshotVersion.compareTo(st.min()) > 0 && (n2.readTime = vs(t3, e2.snapshotVersion.toTimestamp())), n2;
    }(this.It, t2);
    const n = Hs(this.It, t2);
    n && (e.labels = n), this.Bo(e);
  }
  Ho(t2) {
    const e = {};
    e.database = Fs(this.It), e.removeTarget = t2, this.Bo(e);
  }
};
var su = class extends eu {
  constructor(t2, e, n, s, i, r) {
    super(t2, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", e, n, s, r), this.It = i, this.Jo = false;
  }
  get Yo() {
    return this.Jo;
  }
  start() {
    this.Jo = false, this.lastStreamToken = void 0, super.start();
  }
  qo() {
    this.Jo && this.Xo([]);
  }
  jo(t2, e) {
    return this.connection.wo("Write", t2, e);
  }
  onMessage(t2) {
    if (M2(!!t2.streamToken), this.lastStreamToken = t2.streamToken, this.Jo) {
      this.xo.reset();
      const e = Qs(t2.writeResults, t2.commitTime), n = Ds(t2.commitTime);
      return this.listener.Zo(n, e);
    }
    return M2(!t2.writeResults || 0 === t2.writeResults.length), this.Jo = true, this.listener.tu();
  }
  eu() {
    const t2 = {};
    t2.database = Fs(this.It), this.Bo(t2);
  }
  Xo(t2) {
    const e = {
      streamToken: this.lastStreamToken,
      writes: t2.map((t3) => Ks(this.It, t3))
    };
    this.Bo(e);
  }
};
var iu = class extends class {
} {
  constructor(t2, e, n, s) {
    super(), this.authCredentials = t2, this.appCheckCredentials = e, this.connection = n, this.It = s, this.nu = false;
  }
  su() {
    if (this.nu)
      throw new L2(B2.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  ao(t2, e, n) {
    return this.su(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, i]) => this.connection.ao(t2, e, n, s, i)).catch((t3) => {
      throw "FirebaseError" === t3.name ? (t3.code === B2.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t3) : new L2(B2.UNKNOWN, t3.toString());
    });
  }
  _o(t2, e, n, s) {
    return this.su(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, r]) => this.connection._o(t2, e, n, i, r, s)).catch((t3) => {
      throw "FirebaseError" === t3.name ? (t3.code === B2.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t3) : new L2(B2.UNKNOWN, t3.toString());
    });
  }
  terminate() {
    this.nu = true;
  }
};
var ou = class {
  constructor(t2, e) {
    this.asyncQueue = t2, this.onlineStateHandler = e, this.state = "Unknown", this.iu = 0, this.ru = null, this.ou = true;
  }
  uu() {
    0 === this.iu && (this.cu("Unknown"), this.ru = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.ru = null, this.au("Backend didn't respond within 10 seconds."), this.cu("Offline"), Promise.resolve())));
  }
  hu(t2) {
    "Online" === this.state ? this.cu("Unknown") : (this.iu++, this.iu >= 1 && (this.lu(), this.au(`Connection failed 1 times. Most recent error: ${t2.toString()}`), this.cu("Offline")));
  }
  set(t2) {
    this.lu(), this.iu = 0, "Online" === t2 && (this.ou = false), this.cu(t2);
  }
  cu(t2) {
    t2 !== this.state && (this.state = t2, this.onlineStateHandler(t2));
  }
  au(t2) {
    const e = `Could not reach Cloud Firestore backend. ${t2}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.ou ? (x2(e), this.ou = false) : C2("OnlineStateTracker", e);
  }
  lu() {
    null !== this.ru && (this.ru.cancel(), this.ru = null);
  }
};
var uu = class {
  constructor(t2, e, n, s, i) {
    this.localStore = t2, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {}, this.fu = [], this.du = /* @__PURE__ */ new Map(), this._u = /* @__PURE__ */ new Set(), this.wu = [], this.mu = i, this.mu.qr((t3) => {
      n.enqueueAndForget(async () => {
        mu(this) && (C2("RemoteStore", "Restarting streams for network reachability change."), await async function(t4) {
          const e2 = $(t4);
          e2._u.add(4), await au(e2), e2.gu.set("Unknown"), e2._u.delete(4), await cu(e2);
        }(this));
      });
    }), this.gu = new ou(n, s);
  }
};
async function cu(t2) {
  if (mu(t2))
    for (const e of t2.wu)
      await e(true);
}
async function au(t2) {
  for (const e of t2.wu)
    await e(false);
}
function hu(t2, e) {
  const n = $(t2);
  n.du.has(e.targetId) || (n.du.set(e.targetId, e), wu(n) ? _u(n) : ku(n).ko() && fu(n, e));
}
function lu(t2, e) {
  const n = $(t2), s = ku(n);
  n.du.delete(e), s.ko() && du(n, e), 0 === n.du.size && (s.ko() ? s.Fo() : mu(n) && n.gu.set("Unknown"));
}
function fu(t2, e) {
  t2.yu.Mt(e.targetId), ku(t2).zo(e);
}
function du(t2, e) {
  t2.yu.Mt(e), ku(t2).Ho(e);
}
function _u(t2) {
  t2.yu = new Ts({
    getRemoteKeysForTarget: (e) => t2.remoteSyncer.getRemoteKeysForTarget(e),
    se: (e) => t2.du.get(e) || null
  }), ku(t2).start(), t2.gu.uu();
}
function wu(t2) {
  return mu(t2) && !ku(t2).No() && t2.du.size > 0;
}
function mu(t2) {
  return 0 === $(t2)._u.size;
}
function gu(t2) {
  t2.yu = void 0;
}
async function yu(t2) {
  t2.du.forEach((e, n) => {
    fu(t2, e);
  });
}
async function pu(t2, e) {
  gu(t2), wu(t2) ? (t2.gu.hu(e), _u(t2)) : t2.gu.set("Unknown");
}
async function Iu(t2, e, n) {
  if (t2.gu.set("Online"), e instanceof ps && 2 === e.state && e.cause)
    try {
      await async function(t3, e2) {
        const n2 = e2.cause;
        for (const s of e2.targetIds)
          t3.du.has(s) && (await t3.remoteSyncer.rejectListen(s, n2), t3.du.delete(s), t3.yu.removeTarget(s));
      }(t2, e);
    } catch (n2) {
      C2("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), n2), await Tu(t2, n2);
    }
  else if (e instanceof gs ? t2.yu.Gt(e) : e instanceof ys ? t2.yu.Yt(e) : t2.yu.Wt(e), !n.isEqual(st.min()))
    try {
      const e2 = await Ro(t2.localStore);
      n.compareTo(e2) >= 0 && await function(t3, e3) {
        const n2 = t3.yu.te(e3);
        return n2.targetChanges.forEach((n3, s) => {
          if (n3.resumeToken.approximateByteSize() > 0) {
            const i = t3.du.get(s);
            i && t3.du.set(s, i.withResumeToken(n3.resumeToken, e3));
          }
        }), n2.targetMismatches.forEach((e4) => {
          const n3 = t3.du.get(e4);
          if (!n3)
            return;
          t3.du.set(e4, n3.withResumeToken(Wt.EMPTY_BYTE_STRING, n3.snapshotVersion)), du(t3, e4);
          const s = new Fi(n3.target, e4, 1, n3.sequenceNumber);
          fu(t3, s);
        }), t3.remoteSyncer.applyRemoteEvent(n2);
      }(t2, n);
    } catch (e2) {
      C2("RemoteStore", "Failed to raise snapshot:", e2), await Tu(t2, e2);
    }
}
async function Tu(t2, e, n) {
  if (!Vt(e))
    throw e;
  t2._u.add(1), await au(t2), t2.gu.set("Offline"), n || (n = () => Ro(t2.localStore)), t2.asyncQueue.enqueueRetryable(async () => {
    C2("RemoteStore", "Retrying IndexedDB access"), await n(), t2._u.delete(1), await cu(t2);
  });
}
function Eu(t2, e) {
  return e().catch((n) => Tu(t2, n, e));
}
async function Au(t2) {
  const e = $(t2), n = Ou(e);
  let s = e.fu.length > 0 ? e.fu[e.fu.length - 1].batchId : -1;
  for (; Ru(e); )
    try {
      const t3 = await vo(e.localStore, s);
      if (null === t3) {
        0 === e.fu.length && n.Fo();
        break;
      }
      s = t3.batchId, bu(e, t3);
    } catch (t3) {
      await Tu(e, t3);
    }
  Pu(e) && vu(e);
}
function Ru(t2) {
  return mu(t2) && t2.fu.length < 10;
}
function bu(t2, e) {
  t2.fu.push(e);
  const n = Ou(t2);
  n.ko() && n.Yo && n.Xo(e.mutations);
}
function Pu(t2) {
  return mu(t2) && !Ou(t2).No() && t2.fu.length > 0;
}
function vu(t2) {
  Ou(t2).start();
}
async function Vu(t2) {
  Ou(t2).eu();
}
async function Su(t2) {
  const e = Ou(t2);
  for (const n of t2.fu)
    e.Xo(n.mutations);
}
async function Du(t2, e, n) {
  const s = t2.fu.shift(), i = Oi.from(s, e, n);
  await Eu(t2, () => t2.remoteSyncer.applySuccessfulWrite(i)), await Au(t2);
}
async function Cu(t2, e) {
  e && Ou(t2).Yo && await async function(t3, e2) {
    if (n = e2.code, Zn(n) && n !== B2.ABORTED) {
      const n2 = t3.fu.shift();
      Ou(t3).Mo(), await Eu(t3, () => t3.remoteSyncer.rejectFailedWrite(n2.batchId, e2)), await Au(t3);
    }
    var n;
  }(t2, e), Pu(t2) && vu(t2);
}
async function xu(t2, e) {
  const n = $(t2);
  n.asyncQueue.verifyOperationInProgress(), C2("RemoteStore", "RemoteStore received new credentials");
  const s = mu(n);
  n._u.add(3), await au(n), s && n.gu.set("Unknown"), await n.remoteSyncer.handleCredentialChange(e), n._u.delete(3), await cu(n);
}
async function Nu(t2, e) {
  const n = $(t2);
  e ? (n._u.delete(2), await cu(n)) : e || (n._u.add(2), await au(n), n.gu.set("Unknown"));
}
function ku(t2) {
  return t2.pu || (t2.pu = function(t3, e, n) {
    const s = $(t3);
    return s.su(), new nu(e, s.connection, s.authCredentials, s.appCheckCredentials, s.It, n);
  }(t2.datastore, t2.asyncQueue, {
    Yr: yu.bind(null, t2),
    Zr: pu.bind(null, t2),
    Wo: Iu.bind(null, t2)
  }), t2.wu.push(async (e) => {
    e ? (t2.pu.Mo(), wu(t2) ? _u(t2) : t2.gu.set("Unknown")) : (await t2.pu.stop(), gu(t2));
  })), t2.pu;
}
function Ou(t2) {
  return t2.Iu || (t2.Iu = function(t3, e, n) {
    const s = $(t3);
    return s.su(), new su(e, s.connection, s.authCredentials, s.appCheckCredentials, s.It, n);
  }(t2.datastore, t2.asyncQueue, {
    Yr: Vu.bind(null, t2),
    Zr: Cu.bind(null, t2),
    tu: Su.bind(null, t2),
    Zo: Du.bind(null, t2)
  }), t2.wu.push(async (e) => {
    e ? (t2.Iu.Mo(), await Au(t2)) : (await t2.Iu.stop(), t2.fu.length > 0 && (C2("RemoteStore", `Stopping write stream with ${t2.fu.length} pending writes`), t2.fu = []));
  })), t2.Iu;
}
var Mu = class {
  constructor(t2, e, n, s, i) {
    this.asyncQueue = t2, this.timerId = e, this.targetTimeMs = n, this.op = s, this.removalCallback = i, this.deferred = new U2(), this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch((t3) => {
    });
  }
  static createAndSchedule(t2, e, n, s, i) {
    const r = Date.now() + n, o = new Mu(t2, e, r, s, i);
    return o.start(n), o;
  }
  start(t2) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t2);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t2) {
    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new L2(B2.CANCELLED, "Operation cancelled" + (t2 ? ": " + t2 : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((t2) => this.deferred.resolve(t2))) : Promise.resolve());
  }
  clearTimeout() {
    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
};
function Fu(t2, e) {
  if (x2("AsyncQueue", `${e}: ${t2}`), Vt(t2))
    return new L2(B2.UNAVAILABLE, `${e}: ${t2}`);
  throw t2;
}
var $u = class {
  constructor(t2) {
    this.comparator = t2 ? (e, n) => t2(e, n) || ct.comparator(e.key, n.key) : (t3, e) => ct.comparator(t3.key, e.key), this.keyedMap = rs(), this.sortedSet = new Bt(this.comparator);
  }
  static emptySet(t2) {
    return new $u(t2.comparator);
  }
  has(t2) {
    return null != this.keyedMap.get(t2);
  }
  get(t2) {
    return this.keyedMap.get(t2);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(t2) {
    const e = this.keyedMap.get(t2);
    return e ? this.sortedSet.indexOf(e) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(t2) {
    this.sortedSet.inorderTraversal((e, n) => (t2(e), false));
  }
  add(t2) {
    const e = this.delete(t2.key);
    return e.copy(e.keyedMap.insert(t2.key, t2), e.sortedSet.insert(t2, null));
  }
  delete(t2) {
    const e = this.get(t2);
    return e ? this.copy(this.keyedMap.remove(t2), this.sortedSet.remove(e)) : this;
  }
  isEqual(t2) {
    if (!(t2 instanceof $u))
      return false;
    if (this.size !== t2.size)
      return false;
    const e = this.sortedSet.getIterator(), n = t2.sortedSet.getIterator();
    for (; e.hasNext(); ) {
      const t3 = e.getNext().key, s = n.getNext().key;
      if (!t3.isEqual(s))
        return false;
    }
    return true;
  }
  toString() {
    const t2 = [];
    return this.forEach((e) => {
      t2.push(e.toString());
    }), 0 === t2.length ? "DocumentSet ()" : "DocumentSet (\n  " + t2.join("  \n") + "\n)";
  }
  copy(t2, e) {
    const n = new $u();
    return n.comparator = this.comparator, n.keyedMap = t2, n.sortedSet = e, n;
  }
};
var Bu = class {
  constructor() {
    this.Tu = new Bt(ct.comparator);
  }
  track(t2) {
    const e = t2.doc.key, n = this.Tu.get(e);
    n ? 0 !== t2.type && 3 === n.type ? this.Tu = this.Tu.insert(e, t2) : 3 === t2.type && 1 !== n.type ? this.Tu = this.Tu.insert(e, {
      type: n.type,
      doc: t2.doc
    }) : 2 === t2.type && 2 === n.type ? this.Tu = this.Tu.insert(e, {
      type: 2,
      doc: t2.doc
    }) : 2 === t2.type && 0 === n.type ? this.Tu = this.Tu.insert(e, {
      type: 0,
      doc: t2.doc
    }) : 1 === t2.type && 0 === n.type ? this.Tu = this.Tu.remove(e) : 1 === t2.type && 2 === n.type ? this.Tu = this.Tu.insert(e, {
      type: 1,
      doc: n.doc
    }) : 0 === t2.type && 1 === n.type ? this.Tu = this.Tu.insert(e, {
      type: 2,
      doc: t2.doc
    }) : O2() : this.Tu = this.Tu.insert(e, t2);
  }
  Eu() {
    const t2 = [];
    return this.Tu.inorderTraversal((e, n) => {
      t2.push(n);
    }), t2;
  }
};
var Lu = class {
  constructor(t2, e, n, s, i, r, o, u, c) {
    this.query = t2, this.docs = e, this.oldDocs = n, this.docChanges = s, this.mutatedKeys = i, this.fromCache = r, this.syncStateChanged = o, this.excludesMetadataChanges = u, this.hasCachedResults = c;
  }
  static fromInitialDocuments(t2, e, n, s, i) {
    const r = [];
    return e.forEach((t3) => {
      r.push({
        type: 0,
        doc: t3
      });
    }), new Lu(
      t2,
      e,
      $u.emptySet(e),
      r,
      n,
      s,
      true,
      false,
      i
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(t2) {
    if (!(this.fromCache === t2.fromCache && this.hasCachedResults === t2.hasCachedResults && this.syncStateChanged === t2.syncStateChanged && this.mutatedKeys.isEqual(t2.mutatedKeys) && hn(this.query, t2.query) && this.docs.isEqual(t2.docs) && this.oldDocs.isEqual(t2.oldDocs)))
      return false;
    const e = this.docChanges, n = t2.docChanges;
    if (e.length !== n.length)
      return false;
    for (let t3 = 0; t3 < e.length; t3++)
      if (e[t3].type !== n[t3].type || !e[t3].doc.isEqual(n[t3].doc))
        return false;
    return true;
  }
};
var Uu = class {
  constructor() {
    this.Au = void 0, this.listeners = [];
  }
};
var qu = class {
  constructor() {
    this.queries = new es((t2) => ln(t2), hn), this.onlineState = "Unknown", this.Ru = /* @__PURE__ */ new Set();
  }
};
async function Ku(t2, e) {
  const n = $(t2), s = e.query;
  let i = false, r = n.queries.get(s);
  if (r || (i = true, r = new Uu()), i)
    try {
      r.Au = await n.onListen(s);
    } catch (t3) {
      const n2 = Fu(t3, `Initialization of query '${fn(e.query)}' failed`);
      return void e.onError(n2);
    }
  if (n.queries.set(s, r), r.listeners.push(e), e.bu(n.onlineState), r.Au) {
    e.Pu(r.Au) && Wu(n);
  }
}
async function Gu(t2, e) {
  const n = $(t2), s = e.query;
  let i = false;
  const r = n.queries.get(s);
  if (r) {
    const t3 = r.listeners.indexOf(e);
    t3 >= 0 && (r.listeners.splice(t3, 1), i = 0 === r.listeners.length);
  }
  if (i)
    return n.queries.delete(s), n.onUnlisten(s);
}
function Qu(t2, e) {
  const n = $(t2);
  let s = false;
  for (const t3 of e) {
    const e2 = t3.query, i = n.queries.get(e2);
    if (i) {
      for (const e3 of i.listeners)
        e3.Pu(t3) && (s = true);
      i.Au = t3;
    }
  }
  s && Wu(n);
}
function ju(t2, e, n) {
  const s = $(t2), i = s.queries.get(e);
  if (i)
    for (const t3 of i.listeners)
      t3.onError(n);
  s.queries.delete(e);
}
function Wu(t2) {
  t2.Ru.forEach((t3) => {
    t3.next();
  });
}
var zu = class {
  constructor(t2, e, n) {
    this.query = t2, this.vu = e, this.Vu = false, this.Su = null, this.onlineState = "Unknown", this.options = n || {};
  }
  Pu(t2) {
    if (!this.options.includeMetadataChanges) {
      const e2 = [];
      for (const n of t2.docChanges)
        3 !== n.type && e2.push(n);
      t2 = new Lu(
        t2.query,
        t2.docs,
        t2.oldDocs,
        e2,
        t2.mutatedKeys,
        t2.fromCache,
        t2.syncStateChanged,
        true,
        t2.hasCachedResults
      );
    }
    let e = false;
    return this.Vu ? this.Du(t2) && (this.vu.next(t2), e = true) : this.Cu(t2, this.onlineState) && (this.xu(t2), e = true), this.Su = t2, e;
  }
  onError(t2) {
    this.vu.error(t2);
  }
  bu(t2) {
    this.onlineState = t2;
    let e = false;
    return this.Su && !this.Vu && this.Cu(this.Su, t2) && (this.xu(this.Su), e = true), e;
  }
  Cu(t2, e) {
    if (!t2.fromCache)
      return true;
    const n = "Offline" !== e;
    return (!this.options.Nu || !n) && (!t2.docs.isEmpty() || t2.hasCachedResults || "Offline" === e);
  }
  Du(t2) {
    if (t2.docChanges.length > 0)
      return true;
    const e = this.Su && this.Su.hasPendingWrites !== t2.hasPendingWrites;
    return !(!t2.syncStateChanged && !e) && true === this.options.includeMetadataChanges;
  }
  xu(t2) {
    t2 = Lu.fromInitialDocuments(t2.query, t2.docs, t2.mutatedKeys, t2.fromCache, t2.hasCachedResults), this.Vu = true, this.vu.next(t2);
  }
};
var Zu = class {
  constructor(t2) {
    this.key = t2;
  }
};
var tc2 = class {
  constructor(t2) {
    this.key = t2;
  }
};
var ec2 = class {
  constructor(t2, e) {
    this.query = t2, this.Uu = e, this.qu = null, this.hasCachedResults = false, this.current = false, this.Ku = fs(), this.mutatedKeys = fs(), this.Gu = wn(t2), this.Qu = new $u(this.Gu);
  }
  get ju() {
    return this.Uu;
  }
  Wu(t2, e) {
    const n = e ? e.zu : new Bu(), s = e ? e.Qu : this.Qu;
    let i = e ? e.mutatedKeys : this.mutatedKeys, r = s, o = false;
    const u = "F" === this.query.limitType && s.size === this.query.limit ? s.last() : null, c = "L" === this.query.limitType && s.size === this.query.limit ? s.first() : null;
    if (t2.inorderTraversal((t3, e2) => {
      const a = s.get(t3), h = dn(this.query, e2) ? e2 : null, l2 = !!a && this.mutatedKeys.has(a.key), f2 = !!h && (h.hasLocalMutations || this.mutatedKeys.has(h.key) && h.hasCommittedMutations);
      let d = false;
      if (a && h) {
        a.data.isEqual(h.data) ? l2 !== f2 && (n.track({
          type: 3,
          doc: h
        }), d = true) : this.Hu(a, h) || (n.track({
          type: 2,
          doc: h
        }), d = true, (u && this.Gu(h, u) > 0 || c && this.Gu(h, c) < 0) && (o = true));
      } else
        !a && h ? (n.track({
          type: 0,
          doc: h
        }), d = true) : a && !h && (n.track({
          type: 1,
          doc: a
        }), d = true, (u || c) && (o = true));
      d && (h ? (r = r.add(h), i = f2 ? i.add(t3) : i.delete(t3)) : (r = r.delete(t3), i = i.delete(t3)));
    }), null !== this.query.limit)
      for (; r.size > this.query.limit; ) {
        const t3 = "F" === this.query.limitType ? r.last() : r.first();
        r = r.delete(t3.key), i = i.delete(t3.key), n.track({
          type: 1,
          doc: t3
        });
      }
    return {
      Qu: r,
      zu: n,
      $i: o,
      mutatedKeys: i
    };
  }
  Hu(t2, e) {
    return t2.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
  }
  applyChanges(t2, e, n) {
    const s = this.Qu;
    this.Qu = t2.Qu, this.mutatedKeys = t2.mutatedKeys;
    const i = t2.zu.Eu();
    i.sort((t3, e2) => function(t4, e3) {
      const n2 = (t5) => {
        switch (t5) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return O2();
        }
      };
      return n2(t4) - n2(e3);
    }(t3.type, e2.type) || this.Gu(t3.doc, e2.doc)), this.Ju(n);
    const r = e ? this.Yu() : [], o = 0 === this.Ku.size && this.current ? 1 : 0, u = o !== this.qu;
    if (this.qu = o, 0 !== i.length || u) {
      return {
        snapshot: new Lu(
          this.query,
          t2.Qu,
          s,
          i,
          t2.mutatedKeys,
          0 === o,
          u,
          false,
          !!n && n.resumeToken.approximateByteSize() > 0
        ),
        Xu: r
      };
    }
    return {
      Xu: r
    };
  }
  bu(t2) {
    return this.current && "Offline" === t2 ? (this.current = false, this.applyChanges(
      {
        Qu: this.Qu,
        zu: new Bu(),
        mutatedKeys: this.mutatedKeys,
        $i: false
      },
      false
    )) : {
      Xu: []
    };
  }
  Zu(t2) {
    return !this.Uu.has(t2) && (!!this.Qu.has(t2) && !this.Qu.get(t2).hasLocalMutations);
  }
  Ju(t2) {
    t2 && (t2.addedDocuments.forEach((t3) => this.Uu = this.Uu.add(t3)), t2.modifiedDocuments.forEach((t3) => {
    }), t2.removedDocuments.forEach((t3) => this.Uu = this.Uu.delete(t3)), this.current = t2.current);
  }
  Yu() {
    if (!this.current)
      return [];
    const t2 = this.Ku;
    this.Ku = fs(), this.Qu.forEach((t3) => {
      this.Zu(t3.key) && (this.Ku = this.Ku.add(t3.key));
    });
    const e = [];
    return t2.forEach((t3) => {
      this.Ku.has(t3) || e.push(new tc2(t3));
    }), this.Ku.forEach((n) => {
      t2.has(n) || e.push(new Zu(n));
    }), e;
  }
  tc(t2) {
    this.Uu = t2.Hi, this.Ku = fs();
    const e = this.Wu(t2.documents);
    return this.applyChanges(e, true);
  }
  ec() {
    return Lu.fromInitialDocuments(this.query, this.Qu, this.mutatedKeys, 0 === this.qu, this.hasCachedResults);
  }
};
var nc2 = class {
  constructor(t2, e, n) {
    this.query = t2, this.targetId = e, this.view = n;
  }
};
var sc2 = class {
  constructor(t2) {
    this.key = t2, this.nc = false;
  }
};
var ic2 = class {
  constructor(t2, e, n, s, i, r) {
    this.localStore = t2, this.remoteStore = e, this.eventManager = n, this.sharedClientState = s, this.currentUser = i, this.maxConcurrentLimboResolutions = r, this.sc = {}, this.ic = new es((t3) => ln(t3), hn), this.rc = /* @__PURE__ */ new Map(), this.oc = /* @__PURE__ */ new Set(), this.uc = new Bt(ct.comparator), this.cc = /* @__PURE__ */ new Map(), this.ac = new eo(), this.hc = {}, this.lc = /* @__PURE__ */ new Map(), this.fc = Cr.vn(), this.onlineState = "Unknown", this.dc = void 0;
  }
  get isPrimaryClient() {
    return true === this.dc;
  }
};
async function rc2(t2, e) {
  const n = kc2(t2);
  let s, i;
  const r = n.ic.get(e);
  if (r)
    s = r.targetId, n.sharedClientState.addLocalQueryTarget(s), i = r.view.ec();
  else {
    const t3 = await Vo(n.localStore, cn(e));
    n.isPrimaryClient && hu(n.remoteStore, t3);
    const r2 = n.sharedClientState.addLocalQueryTarget(t3.targetId);
    s = t3.targetId, i = await oc2(n, e, s, "current" === r2, t3.resumeToken);
  }
  return i;
}
async function oc2(t2, e, n, s, i) {
  t2._c = (e2, n2, s2) => async function(t3, e3, n3, s3) {
    let i2 = e3.view.Wu(n3);
    i2.$i && (i2 = await Do(
      t3.localStore,
      e3.query,
      false
    ).then(({ documents: t4 }) => e3.view.Wu(t4, i2)));
    const r2 = s3 && s3.targetChanges.get(e3.targetId), o2 = e3.view.applyChanges(
      i2,
      t3.isPrimaryClient,
      r2
    );
    return pc2(t3, e3.targetId, o2.Xu), o2.snapshot;
  }(t2, e2, n2, s2);
  const r = await Do(
    t2.localStore,
    e,
    true
  ), o = new ec2(e, r.Hi), u = o.Wu(r.documents), c = ms.createSynthesizedTargetChangeForCurrentChange(n, s && "Offline" !== t2.onlineState, i), a = o.applyChanges(
    u,
    t2.isPrimaryClient,
    c
  );
  pc2(t2, n, a.Xu);
  const h = new nc2(e, n, o);
  return t2.ic.set(e, h), t2.rc.has(n) ? t2.rc.get(n).push(e) : t2.rc.set(n, [e]), a.snapshot;
}
async function uc2(t2, e) {
  const n = $(t2), s = n.ic.get(e), i = n.rc.get(s.targetId);
  if (i.length > 1)
    return n.rc.set(s.targetId, i.filter((t3) => !hn(t3, e))), void n.ic.delete(e);
  if (n.isPrimaryClient) {
    n.sharedClientState.removeLocalQueryTarget(s.targetId);
    n.sharedClientState.isActiveQueryTarget(s.targetId) || await So(
      n.localStore,
      s.targetId,
      false
    ).then(() => {
      n.sharedClientState.clearQueryState(s.targetId), lu(n.remoteStore, s.targetId), gc2(n, s.targetId);
    }).catch(Et);
  } else
    gc2(n, s.targetId), await So(
      n.localStore,
      s.targetId,
      true
    );
}
async function cc2(t2, e, n) {
  const s = Oc2(t2);
  try {
    const t3 = await function(t4, e2) {
      const n2 = $(t4), s2 = nt.now(), i = e2.reduce((t5, e3) => t5.add(e3.key), fs());
      let r, o;
      return n2.persistence.runTransaction("Locally write mutations", "readwrite", (t5) => {
        let u = ss(), c = fs();
        return n2.Gi.getEntries(t5, i).next((t6) => {
          u = t6, u.forEach((t7, e3) => {
            e3.isValidDocument() || (c = c.add(t7));
          });
        }).next(() => n2.localDocuments.getOverlayedDocuments(t5, u)).next((i2) => {
          r = i2;
          const o2 = [];
          for (const t6 of e2) {
            const e3 = Un(t6, r.get(t6.key).overlayedDocument);
            null != e3 && o2.push(new Gn(t6.key, e3, Ve(e3.value.mapValue), On.exists(true)));
          }
          return n2.mutationQueue.addMutationBatch(t5, s2, o2, e2);
        }).next((e3) => {
          o = e3;
          const s3 = e3.applyToLocalDocumentSet(r, c);
          return n2.documentOverlayCache.saveOverlays(t5, e3.batchId, s3);
        });
      }).then(() => ({
        batchId: o.batchId,
        changes: os(r)
      }));
    }(s.localStore, e);
    s.sharedClientState.addPendingMutation(t3.batchId), function(t4, e2, n2) {
      let s2 = t4.hc[t4.currentUser.toKey()];
      s2 || (s2 = new Bt(Z));
      s2 = s2.insert(e2, n2), t4.hc[t4.currentUser.toKey()] = s2;
    }(s, t3.batchId, n), await Ec2(s, t3.changes), await Au(s.remoteStore);
  } catch (t3) {
    const e2 = Fu(t3, "Failed to persist write");
    n.reject(e2);
  }
}
async function ac2(t2, e) {
  const n = $(t2);
  try {
    const t3 = await bo(n.localStore, e);
    e.targetChanges.forEach((t4, e2) => {
      const s = n.cc.get(e2);
      s && (M2(t4.addedDocuments.size + t4.modifiedDocuments.size + t4.removedDocuments.size <= 1), t4.addedDocuments.size > 0 ? s.nc = true : t4.modifiedDocuments.size > 0 ? M2(s.nc) : t4.removedDocuments.size > 0 && (M2(s.nc), s.nc = false));
    }), await Ec2(n, t3, e);
  } catch (t3) {
    await Et(t3);
  }
}
function hc2(t2, e, n) {
  const s = $(t2);
  if (s.isPrimaryClient && 0 === n || !s.isPrimaryClient && 1 === n) {
    const t3 = [];
    s.ic.forEach((n2, s2) => {
      const i = s2.view.bu(e);
      i.snapshot && t3.push(i.snapshot);
    }), function(t4, e2) {
      const n2 = $(t4);
      n2.onlineState = e2;
      let s2 = false;
      n2.queries.forEach((t5, n3) => {
        for (const t6 of n3.listeners)
          t6.bu(e2) && (s2 = true);
      }), s2 && Wu(n2);
    }(s.eventManager, e), t3.length && s.sc.Wo(t3), s.onlineState = e, s.isPrimaryClient && s.sharedClientState.setOnlineState(e);
  }
}
async function lc2(t2, e, n) {
  const s = $(t2);
  s.sharedClientState.updateQueryState(e, "rejected", n);
  const i = s.cc.get(e), r = i && i.key;
  if (r) {
    let t3 = new Bt(ct.comparator);
    t3 = t3.insert(r, Se.newNoDocument(r, st.min()));
    const n2 = fs().add(r), i2 = new ws(
      st.min(),
      /* @__PURE__ */ new Map(),
      new qt(Z),
      t3,
      n2
    );
    await ac2(s, i2), s.uc = s.uc.remove(r), s.cc.delete(e), Tc2(s);
  } else
    await So(
      s.localStore,
      e,
      false
    ).then(() => gc2(s, e, n)).catch(Et);
}
async function fc2(t2, e) {
  const n = $(t2), s = e.batch.batchId;
  try {
    const t3 = await Ao(n.localStore, e);
    mc2(n, s, null), wc2(n, s), n.sharedClientState.updateMutationState(s, "acknowledged"), await Ec2(n, t3);
  } catch (t3) {
    await Et(t3);
  }
}
async function dc2(t2, e, n) {
  const s = $(t2);
  try {
    const t3 = await function(t4, e2) {
      const n2 = $(t4);
      return n2.persistence.runTransaction("Reject batch", "readwrite-primary", (t5) => {
        let s2;
        return n2.mutationQueue.lookupMutationBatch(t5, e2).next((e3) => (M2(null !== e3), s2 = e3.keys(), n2.mutationQueue.removeMutationBatch(t5, e3))).next(() => n2.mutationQueue.performConsistencyCheck(t5)).next(() => n2.documentOverlayCache.removeOverlaysForBatchId(t5, s2, e2)).next(() => n2.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t5, s2)).next(() => n2.localDocuments.getDocuments(t5, s2));
      });
    }(s.localStore, e);
    mc2(s, e, n), wc2(s, e), s.sharedClientState.updateMutationState(e, "rejected", n), await Ec2(s, t3);
  } catch (n2) {
    await Et(n2);
  }
}
function wc2(t2, e) {
  (t2.lc.get(e) || []).forEach((t3) => {
    t3.resolve();
  }), t2.lc.delete(e);
}
function mc2(t2, e, n) {
  const s = $(t2);
  let i = s.hc[s.currentUser.toKey()];
  if (i) {
    const t3 = i.get(e);
    t3 && (n ? t3.reject(n) : t3.resolve(), i = i.remove(e)), s.hc[s.currentUser.toKey()] = i;
  }
}
function gc2(t2, e, n = null) {
  t2.sharedClientState.removeLocalQueryTarget(e);
  for (const s of t2.rc.get(e))
    t2.ic.delete(s), n && t2.sc.wc(s, n);
  if (t2.rc.delete(e), t2.isPrimaryClient) {
    t2.ac.ls(e).forEach((e2) => {
      t2.ac.containsKey(e2) || yc2(t2, e2);
    });
  }
}
function yc2(t2, e) {
  t2.oc.delete(e.path.canonicalString());
  const n = t2.uc.get(e);
  null !== n && (lu(t2.remoteStore, n), t2.uc = t2.uc.remove(e), t2.cc.delete(n), Tc2(t2));
}
function pc2(t2, e, n) {
  for (const s of n)
    if (s instanceof Zu)
      t2.ac.addReference(s.key, e), Ic2(t2, s);
    else if (s instanceof tc2) {
      C2("SyncEngine", "Document no longer in limbo: " + s.key), t2.ac.removeReference(s.key, e);
      t2.ac.containsKey(s.key) || yc2(t2, s.key);
    } else
      O2();
}
function Ic2(t2, e) {
  const n = e.key, s = n.path.canonicalString();
  t2.uc.get(n) || t2.oc.has(s) || (C2("SyncEngine", "New document in limbo: " + n), t2.oc.add(s), Tc2(t2));
}
function Tc2(t2) {
  for (; t2.oc.size > 0 && t2.uc.size < t2.maxConcurrentLimboResolutions; ) {
    const e = t2.oc.values().next().value;
    t2.oc.delete(e);
    const n = new ct(rt.fromString(e)), s = t2.fc.next();
    t2.cc.set(s, new sc2(n)), t2.uc = t2.uc.insert(n, s), hu(t2.remoteStore, new Fi(cn(en(n.path)), s, 2, Ot.at));
  }
}
async function Ec2(t2, e, n) {
  const s = $(t2), i = [], r = [], o = [];
  s.ic.isEmpty() || (s.ic.forEach((t3, u) => {
    o.push(s._c(u, e, n).then((t4) => {
      if ((t4 || n) && s.isPrimaryClient && s.sharedClientState.updateQueryState(u.targetId, (null == t4 ? void 0 : t4.fromCache) ? "not-current" : "current"), t4) {
        i.push(t4);
        const e2 = yo.Ci(u.targetId, t4);
        r.push(e2);
      }
    }));
  }), await Promise.all(o), s.sc.Wo(i), await async function(t3, e2) {
    const n2 = $(t3);
    try {
      await n2.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t4) => At.forEach(e2, (e3) => At.forEach(e3.Si, (s2) => n2.persistence.referenceDelegate.addReference(t4, e3.targetId, s2)).next(() => At.forEach(e3.Di, (s2) => n2.persistence.referenceDelegate.removeReference(t4, e3.targetId, s2)))));
    } catch (t4) {
      if (!Vt(t4))
        throw t4;
      C2("LocalStore", "Failed to update sequence numbers: " + t4);
    }
    for (const t4 of e2) {
      const e3 = t4.targetId;
      if (!t4.fromCache) {
        const t5 = n2.Ui.get(e3), s2 = t5.snapshotVersion, i2 = t5.withLastLimboFreeSnapshotVersion(s2);
        n2.Ui = n2.Ui.insert(e3, i2);
      }
    }
  }(s.localStore, r));
}
async function Ac2(t2, e) {
  const n = $(t2);
  if (!n.currentUser.isEqual(e)) {
    C2("SyncEngine", "User change. New user:", e.toKey());
    const t3 = await Eo(n.localStore, e);
    n.currentUser = e, function(t4, e2) {
      t4.lc.forEach((t5) => {
        t5.forEach((t6) => {
          t6.reject(new L2(B2.CANCELLED, e2));
        });
      }), t4.lc.clear();
    }(n, "'waitForPendingWrites' promise is rejected due to a user change."), n.sharedClientState.handleUserChange(e, t3.removedBatchIds, t3.addedBatchIds), await Ec2(n, t3.ji);
  }
}
function Rc2(t2, e) {
  const n = $(t2), s = n.cc.get(e);
  if (s && s.nc)
    return fs().add(s.key);
  {
    let t3 = fs();
    const s2 = n.rc.get(e);
    if (!s2)
      return t3;
    for (const e2 of s2) {
      const s3 = n.ic.get(e2);
      t3 = t3.unionWith(s3.view.ju);
    }
    return t3;
  }
}
function kc2(t2) {
  const e = $(t2);
  return e.remoteStore.remoteSyncer.applyRemoteEvent = ac2.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Rc2.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = lc2.bind(null, e), e.sc.Wo = Qu.bind(null, e.eventManager), e.sc.wc = ju.bind(null, e.eventManager), e;
}
function Oc2(t2) {
  const e = $(t2);
  return e.remoteStore.remoteSyncer.applySuccessfulWrite = fc2.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = dc2.bind(null, e), e;
}
var Fc2 = class {
  constructor() {
    this.synchronizeTabs = false;
  }
  async initialize(t2) {
    this.It = Zo(t2.databaseInfo.databaseId), this.sharedClientState = this.gc(t2), this.persistence = this.yc(t2), await this.persistence.start(), this.localStore = this.Ic(t2), this.gcScheduler = this.Tc(t2, this.localStore), this.indexBackfillerScheduler = this.Ec(t2, this.localStore);
  }
  Tc(t2, e) {
    return null;
  }
  Ec(t2, e) {
    return null;
  }
  Ic(t2) {
    return To(this.persistence, new po(), t2.initialUser, this.It);
  }
  yc(t2) {
    return new uo(ao.Bs, this.It);
  }
  gc(t2) {
    return new Qo();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(), await this.sharedClientState.shutdown(), await this.persistence.shutdown();
  }
};
var $c2 = class extends Fc2 {
  constructor(t2, e, n) {
    super(), this.Ac = t2, this.cacheSizeBytes = e, this.forceOwnership = n, this.synchronizeTabs = false;
  }
  async initialize(t2) {
    await super.initialize(t2), await this.Ac.initialize(this, t2), await Oc2(this.Ac.syncEngine), await Au(this.Ac.remoteStore), await this.persistence.li(() => (this.gcScheduler && !this.gcScheduler.started && this.gcScheduler.start(), this.indexBackfillerScheduler && !this.indexBackfillerScheduler.started && this.indexBackfillerScheduler.start(), Promise.resolve()));
  }
  Ic(t2) {
    return To(this.persistence, new po(), t2.initialUser, this.It);
  }
  Tc(t2, e) {
    const n = this.persistence.referenceDelegate.garbageCollector;
    return new $r(n, t2.asyncQueue, e);
  }
  Ec(t2, e) {
    const n = new kt(e, this.persistence);
    return new Nt(t2.asyncQueue, n);
  }
  yc(t2) {
    const e = go(t2.databaseInfo.databaseId, t2.databaseInfo.persistenceKey), n = void 0 !== this.cacheSizeBytes ? Ar.withCacheSize(this.cacheSizeBytes) : Ar.DEFAULT;
    return new _o(this.synchronizeTabs, e, t2.clientId, n, t2.asyncQueue, Yo(), Xo(), this.It, this.sharedClientState, !!this.forceOwnership);
  }
  gc(t2) {
    return new Qo();
  }
};
var Lc2 = class {
  async initialize(t2, e) {
    this.localStore || (this.localStore = t2.localStore, this.sharedClientState = t2.sharedClientState, this.datastore = this.createDatastore(e), this.remoteStore = this.createRemoteStore(e), this.eventManager = this.createEventManager(e), this.syncEngine = this.createSyncEngine(
      e,
      !t2.synchronizeTabs
    ), this.sharedClientState.onlineStateHandler = (t3) => hc2(this.syncEngine, t3, 1), this.remoteStore.remoteSyncer.handleCredentialChange = Ac2.bind(null, this.syncEngine), await Nu(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(t2) {
    return new qu();
  }
  createDatastore(t2) {
    const e = Zo(t2.databaseInfo.databaseId), n = (s = t2.databaseInfo, new Jo(s));
    var s;
    return function(t3, e2, n2, s2) {
      return new iu(t3, e2, n2, s2);
    }(t2.authCredentials, t2.appCheckCredentials, n, e);
  }
  createRemoteStore(t2) {
    return e = this.localStore, n = this.datastore, s = t2.asyncQueue, i = (t3) => hc2(this.syncEngine, t3, 0), r = Wo.C() ? new Wo() : new jo(), new uu(e, n, s, i, r);
    var e, n, s, i, r;
  }
  createSyncEngine(t2, e) {
    return function(t3, e2, n, s, i, r, o) {
      const u = new ic2(t3, e2, n, s, i, r);
      return o && (u.dc = true), u;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t2.initialUser, t2.maxConcurrentLimboResolutions, e);
  }
  terminate() {
    return async function(t2) {
      const e = $(t2);
      C2("RemoteStore", "RemoteStore shutting down."), e._u.add(5), await au(e), e.mu.shutdown(), e.gu.set("Unknown");
    }(this.remoteStore);
  }
};
function Uc2(t2, e, n) {
  if (!n)
    throw new L2(B2.INVALID_ARGUMENT, `Function ${t2}() cannot be called with an empty ${e}.`);
}
function qc2(t2, e, n, s) {
  if (true === e && true === s)
    throw new L2(B2.INVALID_ARGUMENT, `${t2} and ${n} cannot be used together.`);
}
function Kc2(t2) {
  if (!ct.isDocumentKey(t2))
    throw new L2(B2.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t2} has ${t2.length}.`);
}
function Gc2(t2) {
  if (ct.isDocumentKey(t2))
    throw new L2(B2.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t2} has ${t2.length}.`);
}
function Qc2(t2) {
  if (void 0 === t2)
    return "undefined";
  if (null === t2)
    return "null";
  if ("string" == typeof t2)
    return t2.length > 20 && (t2 = `${t2.substring(0, 20)}...`), JSON.stringify(t2);
  if ("number" == typeof t2 || "boolean" == typeof t2)
    return "" + t2;
  if ("object" == typeof t2) {
    if (t2 instanceof Array)
      return "an array";
    {
      const e = function(t3) {
        if (t3.constructor)
          return t3.constructor.name;
        return null;
      }(t2);
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return "function" == typeof t2 ? "a function" : O2();
}
function jc2(t2, e) {
  if ("_delegate" in t2 && (t2 = t2._delegate), !(t2 instanceof e)) {
    if (e.name === t2.constructor.name)
      throw new L2(B2.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const n = Qc2(t2);
      throw new L2(B2.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
    }
  }
  return t2;
}
var zc2 = /* @__PURE__ */ new Map();
var Hc2 = class {
  constructor(t2) {
    var e;
    if (void 0 === t2.host) {
      if (void 0 !== t2.ssl)
        throw new L2(B2.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = true;
    } else
      this.host = t2.host, this.ssl = null === (e = t2.ssl) || void 0 === e || e;
    if (this.credentials = t2.credentials, this.ignoreUndefinedProperties = !!t2.ignoreUndefinedProperties, void 0 === t2.cacheSizeBytes)
      this.cacheSizeBytes = 41943040;
    else {
      if (-1 !== t2.cacheSizeBytes && t2.cacheSizeBytes < 1048576)
        throw new L2(B2.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t2.cacheSizeBytes;
    }
    this.experimentalForceLongPolling = !!t2.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t2.experimentalAutoDetectLongPolling, this.useFetchStreams = !!t2.useFetchStreams, qc2("experimentalForceLongPolling", t2.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t2.experimentalAutoDetectLongPolling);
  }
  isEqual(t2) {
    return this.host === t2.host && this.ssl === t2.ssl && this.credentials === t2.credentials && this.cacheSizeBytes === t2.cacheSizeBytes && this.experimentalForceLongPolling === t2.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t2.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t2.ignoreUndefinedProperties && this.useFetchStreams === t2.useFetchStreams;
  }
};
var Jc2 = class {
  constructor(t2, e, n, s) {
    this._authCredentials = t2, this._appCheckCredentials = e, this._databaseId = n, this._app = s, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Hc2({}), this._settingsFrozen = false;
  }
  get app() {
    if (!this._app)
      throw new L2(B2.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return void 0 !== this._terminateTask;
  }
  _setSettings(t2) {
    if (this._settingsFrozen)
      throw new L2(B2.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new Hc2(t2), void 0 !== t2.credentials && (this._authCredentials = function(t3) {
      if (!t3)
        return new K2();
      switch (t3.type) {
        case "gapi":
          const e = t3.client;
          return new W2(e, t3.sessionIndex || "0", t3.iamToken || null, t3.authTokenFactory || null);
        case "provider":
          return t3.client;
        default:
          throw new L2(B2.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(t2.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = true, this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  _terminate() {
    return function(t2) {
      const e = zc2.get(t2);
      e && (C2("ComponentProvider", "Removing Datastore"), zc2.delete(t2), e.terminate());
    }(this), Promise.resolve();
  }
};
function Yc2(t2, e, n, s = {}) {
  var i;
  const r = (t2 = jc2(t2, Jc2))._getSettings();
  if ("firestore.googleapis.com" !== r.host && r.host !== e && N2("Host has been set in both settings() and useEmulator(), emulator host will be used"), t2._setSettings(Object.assign(Object.assign({}, r), {
    host: `${e}:${n}`,
    ssl: false
  })), s.mockUserToken) {
    let e2, n2;
    if ("string" == typeof s.mockUserToken)
      e2 = s.mockUserToken, n2 = P2.MOCK_USER;
    else {
      e2 = createMockUserToken(s.mockUserToken, null === (i = t2._app) || void 0 === i ? void 0 : i.options.projectId);
      const r2 = s.mockUserToken.sub || s.mockUserToken.user_id;
      if (!r2)
        throw new L2(B2.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      n2 = new P2(r2);
    }
    t2._authCredentials = new G2(new q2(e2, n2));
  }
}
var Xc2 = class {
  constructor(t2, e, n) {
    this.converter = e, this._key = n, this.type = "document", this.firestore = t2;
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new ta2(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t2) {
    return new Xc2(this.firestore, t2, this._key);
  }
};
var Zc2 = class {
  constructor(t2, e, n) {
    this.converter = e, this._query = n, this.type = "query", this.firestore = t2;
  }
  withConverter(t2) {
    return new Zc2(this.firestore, t2, this._query);
  }
};
var ta2 = class extends Zc2 {
  constructor(t2, e, n) {
    super(t2, e, en(n)), this._path = n, this.type = "collection";
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const t2 = this._path.popLast();
    return t2.isEmpty() ? null : new Xc2(
      this.firestore,
      null,
      new ct(t2)
    );
  }
  withConverter(t2) {
    return new ta2(this.firestore, t2, this._path);
  }
};
function ea2(t2, e, ...n) {
  if (t2 = getModularInstance(t2), Uc2("collection", "path", e), t2 instanceof Jc2) {
    const s = rt.fromString(e, ...n);
    return Gc2(s), new ta2(t2, null, s);
  }
  {
    if (!(t2 instanceof Xc2 || t2 instanceof ta2))
      throw new L2(B2.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const s = t2._path.child(rt.fromString(e, ...n));
    return Gc2(s), new ta2(
      t2.firestore,
      null,
      s
    );
  }
}
function sa2(t2, e, ...n) {
  if (t2 = getModularInstance(t2), 1 === arguments.length && (e = X2.R()), Uc2("doc", "path", e), t2 instanceof Jc2) {
    const s = rt.fromString(e, ...n);
    return Kc2(s), new Xc2(
      t2,
      null,
      new ct(s)
    );
  }
  {
    if (!(t2 instanceof Xc2 || t2 instanceof ta2))
      throw new L2(B2.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const s = t2._path.child(rt.fromString(e, ...n));
    return Kc2(s), new Xc2(t2.firestore, t2 instanceof ta2 ? t2.converter : null, new ct(s));
  }
}
function ra2(t2, e) {
  return t2 = getModularInstance(t2), e = getModularInstance(e), t2 instanceof Zc2 && e instanceof Zc2 && (t2.firestore === e.firestore && hn(t2._query, e._query) && t2.converter === e.converter);
}
var ua2 = class {
  constructor(t2) {
    this.observer = t2, this.muted = false;
  }
  next(t2) {
    this.observer.next && this.Rc(this.observer.next, t2);
  }
  error(t2) {
    this.observer.error ? this.Rc(this.observer.error, t2) : x2("Uncaught Error in snapshot listener:", t2.toString());
  }
  bc() {
    this.muted = true;
  }
  Rc(t2, e) {
    this.muted || setTimeout(() => {
      this.muted || t2(e);
    }, 0);
  }
};
var _a = class {
  constructor(t2, e, n, s) {
    this.authCredentials = t2, this.appCheckCredentials = e, this.asyncQueue = n, this.databaseInfo = s, this.user = P2.UNAUTHENTICATED, this.clientId = X2.R(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n, async (t3) => {
      C2("FirestoreClient", "Received user=", t3.uid), await this.authCredentialListener(t3), this.user = t3;
    }), this.appCheckCredentials.start(n, (t3) => (C2("FirestoreClient", "Received new app check token=", t3), this.appCheckCredentialListener(t3, this.user)));
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(t2) {
    this.authCredentialListener = t2;
  }
  setAppCheckTokenChangeListener(t2) {
    this.appCheckCredentialListener = t2;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new L2(B2.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t2 = new U2();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
      try {
        this.onlineComponents && await this.onlineComponents.terminate(), this.offlineComponents && await this.offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t2.resolve();
      } catch (e) {
        const n = Fu(e, "Failed to shutdown persistence");
        t2.reject(n);
      }
    }), t2.promise;
  }
};
async function wa2(t2, e) {
  t2.asyncQueue.verifyOperationInProgress(), C2("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = await t2.getConfiguration();
  await e.initialize(n);
  let s = n.initialUser;
  t2.setCredentialChangeListener(async (t3) => {
    s.isEqual(t3) || (await Eo(e.localStore, t3), s = t3);
  }), e.persistence.setDatabaseDeletedListener(() => t2.terminate()), t2.offlineComponents = e;
}
async function ma2(t2, e) {
  t2.asyncQueue.verifyOperationInProgress();
  const n = await ga(t2);
  C2("FirestoreClient", "Initializing OnlineComponentProvider");
  const s = await t2.getConfiguration();
  await e.initialize(n, s), t2.setCredentialChangeListener((t3) => xu(e.remoteStore, t3)), t2.setAppCheckTokenChangeListener((t3, n2) => xu(e.remoteStore, n2)), t2.onlineComponents = e;
}
async function ga(t2) {
  return t2.offlineComponents || (C2("FirestoreClient", "Using default OfflineComponentProvider"), await wa2(t2, new Fc2())), t2.offlineComponents;
}
async function ya2(t2) {
  return t2.onlineComponents || (C2("FirestoreClient", "Using default OnlineComponentProvider"), await ma2(t2, new Lc2())), t2.onlineComponents;
}
function Ea2(t2) {
  return ya2(t2).then((t3) => t3.syncEngine);
}
async function Ra2(t2) {
  const e = await ya2(t2), n = e.eventManager;
  return n.onListen = rc2.bind(null, e.syncEngine), n.onUnlisten = uc2.bind(null, e.syncEngine), n;
}
var ka = class {
  constructor() {
    this.Bc = Promise.resolve(), this.Lc = [], this.Uc = false, this.qc = [], this.Kc = null, this.Gc = false, this.Qc = false, this.jc = [], this.xo = new tu(this, "async_queue_retry"), this.Wc = () => {
      const t3 = Xo();
      t3 && C2("AsyncQueue", "Visibility state changed to " + t3.visibilityState), this.xo.Po();
    };
    const t2 = Xo();
    t2 && "function" == typeof t2.addEventListener && t2.addEventListener("visibilitychange", this.Wc);
  }
  get isShuttingDown() {
    return this.Uc;
  }
  enqueueAndForget(t2) {
    this.enqueue(t2);
  }
  enqueueAndForgetEvenWhileRestricted(t2) {
    this.zc(), this.Hc(t2);
  }
  enterRestrictedMode(t2) {
    if (!this.Uc) {
      this.Uc = true, this.Qc = t2 || false;
      const e = Xo();
      e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.Wc);
    }
  }
  enqueue(t2) {
    if (this.zc(), this.Uc)
      return new Promise(() => {
      });
    const e = new U2();
    return this.Hc(() => this.Uc && this.Qc ? Promise.resolve() : (t2().then(e.resolve, e.reject), e.promise)).then(() => e.promise);
  }
  enqueueRetryable(t2) {
    this.enqueueAndForget(() => (this.Lc.push(t2), this.Jc()));
  }
  async Jc() {
    if (0 !== this.Lc.length) {
      try {
        await this.Lc[0](), this.Lc.shift(), this.xo.reset();
      } catch (t2) {
        if (!Vt(t2))
          throw t2;
        C2("AsyncQueue", "Operation failed with retryable error: " + t2);
      }
      this.Lc.length > 0 && this.xo.Ro(() => this.Jc());
    }
  }
  Hc(t2) {
    const e = this.Bc.then(() => (this.Gc = true, t2().catch((t3) => {
      this.Kc = t3, this.Gc = false;
      const e2 = function(t4) {
        let e3 = t4.message || "";
        t4.stack && (e3 = t4.stack.includes(t4.message) ? t4.stack : t4.message + "\n" + t4.stack);
        return e3;
      }(t3);
      throw x2("INTERNAL UNHANDLED ERROR: ", e2), t3;
    }).then((t3) => (this.Gc = false, t3))));
    return this.Bc = e, e;
  }
  enqueueAfterDelay(t2, e, n) {
    this.zc(), this.jc.indexOf(t2) > -1 && (e = 0);
    const s = Mu.createAndSchedule(this, t2, e, n, (t3) => this.Yc(t3));
    return this.qc.push(s), s;
  }
  zc() {
    this.Kc && O2();
  }
  verifyOperationInProgress() {
  }
  async Xc() {
    let t2;
    do {
      t2 = this.Bc, await t2;
    } while (t2 !== this.Bc);
  }
  Zc(t2) {
    for (const e of this.qc)
      if (e.timerId === t2)
        return true;
    return false;
  }
  ta(t2) {
    return this.Xc().then(() => {
      this.qc.sort((t3, e) => t3.targetTimeMs - e.targetTimeMs);
      for (const e of this.qc)
        if (e.skipDelay(), "all" !== t2 && e.timerId === t2)
          break;
      return this.Xc();
    });
  }
  ea(t2) {
    this.jc.push(t2);
  }
  Yc(t2) {
    const e = this.qc.indexOf(t2);
    this.qc.splice(e, 1);
  }
};
function Oa2(t2) {
  return function(t3, e) {
    if ("object" != typeof t3 || null === t3)
      return false;
    const n = t3;
    for (const t4 of e)
      if (t4 in n && "function" == typeof n[t4])
        return true;
    return false;
  }(t2, ["next", "error", "complete"]);
}
var $a2 = class extends Jc2 {
  constructor(t2, e, n, s) {
    super(t2, e, n, s), this.type = "firestore", this._queue = new ka(), this._persistenceKey = (null == s ? void 0 : s.name) || "[DEFAULT]";
  }
  _terminate() {
    return this._firestoreClient || qa2(this), this._firestoreClient.terminate();
  }
};
function Ba2(t2, e, n) {
  n || (n = "(default)");
  const s = _getProvider(t2, "firestore");
  if (s.isInitialized(n)) {
    const t3 = s.getImmediate({
      identifier: n
    }), i = s.getOptions(n);
    if (deepEqual(i, e))
      return t3;
    throw new L2(B2.FAILED_PRECONDITION, "initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.");
  }
  if (void 0 !== e.cacheSizeBytes && -1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576)
    throw new L2(B2.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
  return s.initialize({
    options: e,
    instanceIdentifier: n
  });
}
function La2(e, n) {
  const s = "object" == typeof e ? e : getApp(), i = "string" == typeof e ? e : n || "(default)", r = _getProvider(s, "firestore").getImmediate({
    identifier: i
  });
  if (!r._initialized) {
    const t2 = getDefaultEmulatorHostnameAndPort("firestore");
    t2 && Yc2(r, ...t2);
  }
  return r;
}
function Ua2(t2) {
  return t2._firestoreClient || qa2(t2), t2._firestoreClient.verifyNotTerminated(), t2._firestoreClient;
}
function qa2(t2) {
  var e;
  const n = t2._freezeSettings(), s = function(t3, e2, n2, s2) {
    return new ee(t3, e2, n2, s2.host, s2.ssl, s2.experimentalForceLongPolling, s2.experimentalAutoDetectLongPolling, s2.useFetchStreams);
  }(t2._databaseId, (null === (e = t2._app) || void 0 === e ? void 0 : e.options.appId) || "", t2._persistenceKey, n);
  t2._firestoreClient = new _a(t2._authCredentials, t2._appCheckCredentials, t2._queue, s);
}
function Ka(t2, e) {
  Za(t2 = jc2(t2, $a2));
  const n = Ua2(t2), s = t2._freezeSettings(), i = new Lc2();
  return Qa2(n, i, new $c2(i, s.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
}
function Qa2(t2, e, n) {
  const s = new U2();
  return t2.asyncQueue.enqueue(async () => {
    try {
      await wa2(t2, n), await ma2(t2, e), s.resolve();
    } catch (t3) {
      const e2 = t3;
      if (!function(t4) {
        if ("FirebaseError" === t4.name)
          return t4.code === B2.FAILED_PRECONDITION || t4.code === B2.UNIMPLEMENTED;
        if ("undefined" != typeof DOMException && t4 instanceof DOMException)
          return 22 === t4.code || 20 === t4.code || 11 === t4.code;
        return true;
      }(e2))
        throw e2;
      N2("Error enabling offline persistence. Falling back to persistence disabled: " + e2), s.reject(e2);
    }
  }).then(() => s.promise);
}
function Za(t2) {
  if (t2._initialized || t2._terminated)
    throw new L2(B2.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
}
var th = class {
  constructor(t2) {
    this._byteString = t2;
  }
  static fromBase64String(t2) {
    try {
      return new th(Wt.fromBase64String(t2));
    } catch (t3) {
      throw new L2(B2.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t3);
    }
  }
  static fromUint8Array(t2) {
    return new th(Wt.fromUint8Array(t2));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(t2) {
    return this._byteString.isEqual(t2._byteString);
  }
};
var eh = class {
  constructor(...t2) {
    for (let e = 0; e < t2.length; ++e)
      if (0 === t2[e].length)
        throw new L2(B2.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new ut(t2);
  }
  isEqual(t2) {
    return this._internalPath.isEqual(t2._internalPath);
  }
};
var sh = class {
  constructor(t2) {
    this._methodName = t2;
  }
};
var ih = class {
  constructor(t2, e) {
    if (!isFinite(t2) || t2 < -90 || t2 > 90)
      throw new L2(B2.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t2);
    if (!isFinite(e) || e < -180 || e > 180)
      throw new L2(B2.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
    this._lat = t2, this._long = e;
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(t2) {
    return this._lat === t2._lat && this._long === t2._long;
  }
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  }
  _compareTo(t2) {
    return Z(this._lat, t2._lat) || Z(this._long, t2._long);
  }
};
var rh = /^__.*__$/;
var oh = class {
  constructor(t2, e, n) {
    this.data = t2, this.fieldMask = e, this.fieldTransforms = n;
  }
  toMutation(t2, e) {
    return null !== this.fieldMask ? new Gn(t2, this.data, this.fieldMask, e, this.fieldTransforms) : new Kn(t2, this.data, e, this.fieldTransforms);
  }
};
var uh = class {
  constructor(t2, e, n) {
    this.data = t2, this.fieldMask = e, this.fieldTransforms = n;
  }
  toMutation(t2, e) {
    return new Gn(t2, this.data, this.fieldMask, e, this.fieldTransforms);
  }
};
function ch(t2) {
  switch (t2) {
    case 0:
    case 2:
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw O2();
  }
}
var ah = class {
  constructor(t2, e, n, s, i, r) {
    this.settings = t2, this.databaseId = e, this.It = n, this.ignoreUndefinedProperties = s, void 0 === i && this.na(), this.fieldTransforms = i || [], this.fieldMask = r || [];
  }
  get path() {
    return this.settings.path;
  }
  get sa() {
    return this.settings.sa;
  }
  ia(t2) {
    return new ah(Object.assign(Object.assign({}, this.settings), t2), this.databaseId, this.It, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  ra(t2) {
    var e;
    const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), s = this.ia({
      path: n,
      oa: false
    });
    return s.ua(t2), s;
  }
  ca(t2) {
    var e;
    const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), s = this.ia({
      path: n,
      oa: false
    });
    return s.na(), s;
  }
  aa(t2) {
    return this.ia({
      path: void 0,
      oa: true
    });
  }
  ha(t2) {
    return Sh(t2, this.settings.methodName, this.settings.la || false, this.path, this.settings.fa);
  }
  contains(t2) {
    return void 0 !== this.fieldMask.find((e) => t2.isPrefixOf(e)) || void 0 !== this.fieldTransforms.find((e) => t2.isPrefixOf(e.field));
  }
  na() {
    if (this.path)
      for (let t2 = 0; t2 < this.path.length; t2++)
        this.ua(this.path.get(t2));
  }
  ua(t2) {
    if (0 === t2.length)
      throw this.ha("Document fields must not be empty");
    if (ch(this.sa) && rh.test(t2))
      throw this.ha('Document fields cannot begin and end with "__"');
  }
};
var hh = class {
  constructor(t2, e, n) {
    this.databaseId = t2, this.ignoreUndefinedProperties = e, this.It = n || Zo(t2);
  }
  da(t2, e, n, s = false) {
    return new ah({
      sa: t2,
      methodName: e,
      fa: n,
      path: ut.emptyPath(),
      oa: false,
      la: s
    }, this.databaseId, this.It, this.ignoreUndefinedProperties);
  }
};
function lh(t2) {
  const e = t2._freezeSettings(), n = Zo(t2._databaseId);
  return new hh(t2._databaseId, !!e.ignoreUndefinedProperties, n);
}
function fh(t2, e, n, s, i, r = {}) {
  const o = t2.da(r.merge || r.mergeFields ? 2 : 0, e, n, i);
  bh("Data must be an object, but it was:", o, s);
  const u = Ah(s, o);
  let c, a;
  if (r.merge)
    c = new Qt(o.fieldMask), a = o.fieldTransforms;
  else if (r.mergeFields) {
    const t3 = [];
    for (const s2 of r.mergeFields) {
      const i2 = Ph(e, s2, n);
      if (!o.contains(i2))
        throw new L2(B2.INVALID_ARGUMENT, `Field '${i2}' is specified in your field mask but missing from your input data.`);
      Dh(t3, i2) || t3.push(i2);
    }
    c = new Qt(t3), a = o.fieldTransforms.filter((t4) => c.covers(t4.field));
  } else
    c = null, a = o.fieldTransforms;
  return new oh(new ve(u), c, a);
}
var dh = class extends sh {
  _toFieldTransform(t2) {
    if (2 !== t2.sa)
      throw 1 === t2.sa ? t2.ha(`${this._methodName}() can only appear at the top level of your update data`) : t2.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
    return t2.fieldMask.push(t2.path), null;
  }
  isEqual(t2) {
    return t2 instanceof dh;
  }
};
var wh = class extends sh {
  _toFieldTransform(t2) {
    return new xn(t2.path, new Rn());
  }
  isEqual(t2) {
    return t2 instanceof wh;
  }
};
function ph(t2, e, n, s) {
  const i = t2.da(1, e, n);
  bh("Data must be an object, but it was:", i, s);
  const r = [], o = ve.empty();
  Ft(s, (t3, s2) => {
    const u2 = Vh(e, t3, n);
    s2 = getModularInstance(s2);
    const c = i.ca(u2);
    if (s2 instanceof dh)
      r.push(u2);
    else {
      const t4 = Eh(s2, c);
      null != t4 && (r.push(u2), o.set(u2, t4));
    }
  });
  const u = new Qt(r);
  return new uh(o, u, i.fieldTransforms);
}
function Ih(t2, e, n, s, i, r) {
  const o = t2.da(1, e, n), u = [Ph(e, s, n)], c = [i];
  if (r.length % 2 != 0)
    throw new L2(B2.INVALID_ARGUMENT, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
  for (let t3 = 0; t3 < r.length; t3 += 2)
    u.push(Ph(e, r[t3])), c.push(r[t3 + 1]);
  const a = [], h = ve.empty();
  for (let t3 = u.length - 1; t3 >= 0; --t3)
    if (!Dh(a, u[t3])) {
      const e2 = u[t3];
      let n2 = c[t3];
      n2 = getModularInstance(n2);
      const s2 = o.ca(e2);
      if (n2 instanceof dh)
        a.push(e2);
      else {
        const t4 = Eh(n2, s2);
        null != t4 && (a.push(e2), h.set(e2, t4));
      }
    }
  const l2 = new Qt(a);
  return new uh(h, l2, o.fieldTransforms);
}
function Th(t2, e, n, s = false) {
  return Eh(n, t2.da(s ? 4 : 3, e));
}
function Eh(t2, e) {
  if (Rh(
    t2 = getModularInstance(t2)
  ))
    return bh("Unsupported field value:", e, t2), Ah(t2, e);
  if (t2 instanceof sh)
    return function(t3, e2) {
      if (!ch(e2.sa))
        throw e2.ha(`${t3._methodName}() can only be used with update() and set()`);
      if (!e2.path)
        throw e2.ha(`${t3._methodName}() is not currently supported inside arrays`);
      const n = t3._toFieldTransform(e2);
      n && e2.fieldTransforms.push(n);
    }(t2, e), null;
  if (void 0 === t2 && e.ignoreUndefinedProperties)
    return null;
  if (e.path && e.fieldMask.push(e.path), t2 instanceof Array) {
    if (e.settings.oa && 4 !== e.sa)
      throw e.ha("Nested arrays are not supported");
    return function(t3, e2) {
      const n = [];
      let s = 0;
      for (const i of t3) {
        let t4 = Eh(i, e2.aa(s));
        null == t4 && (t4 = {
          nullValue: "NULL_VALUE"
        }), n.push(t4), s++;
      }
      return {
        arrayValue: {
          values: n
        }
      };
    }(t2, e);
  }
  return function(t3, e2) {
    if (null === (t3 = getModularInstance(t3)))
      return {
        nullValue: "NULL_VALUE"
      };
    if ("number" == typeof t3)
      return pn(e2.It, t3);
    if ("boolean" == typeof t3)
      return {
        booleanValue: t3
      };
    if ("string" == typeof t3)
      return {
        stringValue: t3
      };
    if (t3 instanceof Date) {
      const n = nt.fromDate(t3);
      return {
        timestampValue: vs(e2.It, n)
      };
    }
    if (t3 instanceof nt) {
      const n = new nt(t3.seconds, 1e3 * Math.floor(t3.nanoseconds / 1e3));
      return {
        timestampValue: vs(e2.It, n)
      };
    }
    if (t3 instanceof ih)
      return {
        geoPointValue: {
          latitude: t3.latitude,
          longitude: t3.longitude
        }
      };
    if (t3 instanceof th)
      return {
        bytesValue: Vs(e2.It, t3._byteString)
      };
    if (t3 instanceof Xc2) {
      const n = e2.databaseId, s = t3.firestore._databaseId;
      if (!s.isEqual(n))
        throw e2.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);
      return {
        referenceValue: Cs(t3.firestore._databaseId || e2.databaseId, t3._key.path)
      };
    }
    throw e2.ha(`Unsupported field value: ${Qc2(t3)}`);
  }(t2, e);
}
function Ah(t2, e) {
  const n = {};
  return $t(t2) ? e.path && e.path.length > 0 && e.fieldMask.push(e.path) : Ft(t2, (t3, s) => {
    const i = Eh(s, e.ra(t3));
    null != i && (n[t3] = i);
  }), {
    mapValue: {
      fields: n
    }
  };
}
function Rh(t2) {
  return !("object" != typeof t2 || null === t2 || t2 instanceof Array || t2 instanceof Date || t2 instanceof nt || t2 instanceof ih || t2 instanceof th || t2 instanceof Xc2 || t2 instanceof sh);
}
function bh(t2, e, n) {
  if (!Rh(n) || !function(t3) {
    return "object" == typeof t3 && null !== t3 && (Object.getPrototypeOf(t3) === Object.prototype || null === Object.getPrototypeOf(t3));
  }(n)) {
    const s = Qc2(n);
    throw "an object" === s ? e.ha(t2 + " a custom object") : e.ha(t2 + " " + s);
  }
}
function Ph(t2, e, n) {
  if ((e = getModularInstance(e)) instanceof eh)
    return e._internalPath;
  if ("string" == typeof e)
    return Vh(t2, e);
  throw Sh(
    "Field path arguments must be of type string or ",
    t2,
    false,
    void 0,
    n
  );
}
var vh = new RegExp("[~\\*/\\[\\]]");
function Vh(t2, e, n) {
  if (e.search(vh) >= 0)
    throw Sh(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t2,
      false,
      void 0,
      n
    );
  try {
    return new eh(...e.split("."))._internalPath;
  } catch (s) {
    throw Sh(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t2,
      false,
      void 0,
      n
    );
  }
}
function Sh(t2, e, n, s, i) {
  const r = s && !s.isEmpty(), o = void 0 !== i;
  let u = `Function ${e}() called with invalid data`;
  n && (u += " (via `toFirestore()`)"), u += ". ";
  let c = "";
  return (r || o) && (c += " (found", r && (c += ` in field ${s}`), o && (c += ` in document ${i}`), c += ")"), new L2(B2.INVALID_ARGUMENT, u + t2 + c);
}
function Dh(t2, e) {
  return t2.some((t3) => t3.isEqual(e));
}
var Ch = class {
  constructor(t2, e, n, s, i) {
    this._firestore = t2, this._userDataWriter = e, this._key = n, this._document = s, this._converter = i;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new Xc2(this._firestore, this._converter, this._key);
  }
  exists() {
    return null !== this._document;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const t2 = new xh(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(t2);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(t2) {
    if (this._document) {
      const e = this._document.data.field(Nh("DocumentSnapshot.get", t2));
      if (null !== e)
        return this._userDataWriter.convertValue(e);
    }
  }
};
var xh = class extends Ch {
  data() {
    return super.data();
  }
};
function Nh(t2, e) {
  return "string" == typeof e ? Vh(t2, e) : e instanceof eh ? e._internalPath : e._delegate._internalPath;
}
function kh(t2) {
  if ("L" === t2.limitType && 0 === t2.explicitOrderBy.length)
    throw new L2(B2.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
var Oh = class {
};
function Mh(t2, ...e) {
  for (const n of e)
    t2 = n._apply(t2);
  return t2;
}
var Fh = class extends Oh {
  constructor(t2, e, n) {
    super(), this.ma = t2, this.ga = e, this.ya = n, this.type = "where";
  }
  _apply(t2) {
    const e = lh(t2.firestore), n = function(t3, e2, n2, s, i, r, o) {
      let u;
      if (i.isKeyField()) {
        if ("array-contains" === r || "array-contains-any" === r)
          throw new L2(B2.INVALID_ARGUMENT, `Invalid Query. You can't perform '${r}' queries on documentId().`);
        if ("in" === r || "not-in" === r) {
          Xh(o, r);
          const e3 = [];
          for (const n3 of o)
            e3.push(Yh(s, t3, n3));
          u = {
            arrayValue: {
              values: e3
            }
          };
        } else
          u = Yh(s, t3, o);
      } else
        "in" !== r && "not-in" !== r && "array-contains-any" !== r || Xh(o, r), u = Th(
          n2,
          e2,
          o,
          "in" === r || "not-in" === r
        );
      const c = Be.create(i, r, u);
      return function(t4, e3) {
        if (e3.dt()) {
          const n4 = rn(t4);
          if (null !== n4 && !n4.isEqual(e3.field))
            throw new L2(B2.INVALID_ARGUMENT, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n4.toString()}' and '${e3.field.toString()}'`);
          const s2 = sn(t4);
          null !== s2 && Zh(t4, e3.field, s2);
        }
        const n3 = function(t5, e4) {
          for (const n4 of t5.filters)
            if (e4.indexOf(n4.op) >= 0)
              return n4.op;
          return null;
        }(
          t4,
          function(t5) {
            switch (t5) {
              case "!=":
                return ["!=", "not-in"];
              case "array-contains":
                return ["array-contains", "array-contains-any", "not-in"];
              case "in":
                return ["array-contains-any", "in", "not-in"];
              case "array-contains-any":
                return ["array-contains", "array-contains-any", "in", "not-in"];
              case "not-in":
                return ["array-contains", "array-contains-any", "in", "not-in", "!="];
              default:
                return [];
            }
          }(e3.op)
        );
        if (null !== n3)
          throw n3 === e3.op ? new L2(B2.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e3.op.toString()}' filter.`) : new L2(B2.INVALID_ARGUMENT, `Invalid query. You cannot use '${e3.op.toString()}' filters with '${n3.toString()}' filters.`);
      }(t3, c), c;
    }(t2._query, "where", e, t2.firestore._databaseId, this.ma, this.ga, this.ya);
    return new Zc2(t2.firestore, t2.converter, function(t3, e2) {
      const n2 = t3.filters.concat([e2]);
      return new Ze(t3.path, t3.collectionGroup, t3.explicitOrderBy.slice(), n2, t3.limit, t3.limitType, t3.startAt, t3.endAt);
    }(t2._query, n));
  }
};
function $h(t2, e, n) {
  const s = e, i = Nh("where", t2);
  return new Fh(i, s, n);
}
function Yh(t2, e, n) {
  if ("string" == typeof (n = getModularInstance(n))) {
    if ("" === n)
      throw new L2(B2.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!on(e) && -1 !== n.indexOf("/"))
      throw new L2(B2.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
    const s = e.path.child(rt.fromString(n));
    if (!ct.isDocumentKey(s))
      throw new L2(B2.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);
    return we(t2, new ct(s));
  }
  if (n instanceof Xc2)
    return we(t2, n._key);
  throw new L2(B2.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qc2(n)}.`);
}
function Xh(t2, e) {
  if (!Array.isArray(t2) || 0 === t2.length)
    throw new L2(B2.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
  if (t2.length > 10)
    throw new L2(B2.INVALID_ARGUMENT, `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`);
}
function Zh(t2, e, n) {
  if (!n.isEqual(e))
    throw new L2(B2.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`);
}
var tl = class {
  convertValue(t2, e = "none") {
    switch (ce(t2)) {
      case 0:
        return null;
      case 1:
        return t2.booleanValue;
      case 2:
        return Jt(t2.integerValue || t2.doubleValue);
      case 3:
        return this.convertTimestamp(t2.timestampValue);
      case 4:
        return this.convertServerTimestamp(t2, e);
      case 5:
        return t2.stringValue;
      case 6:
        return this.convertBytes(Yt(t2.bytesValue));
      case 7:
        return this.convertReference(t2.referenceValue);
      case 8:
        return this.convertGeoPoint(t2.geoPointValue);
      case 9:
        return this.convertArray(t2.arrayValue, e);
      case 10:
        return this.convertObject(t2.mapValue, e);
      default:
        throw O2();
    }
  }
  convertObject(t2, e) {
    const n = {};
    return Ft(t2.fields, (t3, s) => {
      n[t3] = this.convertValue(s, e);
    }), n;
  }
  convertGeoPoint(t2) {
    return new ih(Jt(t2.latitude), Jt(t2.longitude));
  }
  convertArray(t2, e) {
    return (t2.values || []).map((t3) => this.convertValue(t3, e));
  }
  convertServerTimestamp(t2, e) {
    switch (e) {
      case "previous":
        const n = Zt(t2);
        return null == n ? null : this.convertValue(n, e);
      case "estimate":
        return this.convertTimestamp(te(t2));
      default:
        return null;
    }
  }
  convertTimestamp(t2) {
    const e = Ht(t2);
    return new nt(e.seconds, e.nanos);
  }
  convertDocumentKey(t2, e) {
    const n = rt.fromString(t2);
    M2(ii(n));
    const s = new ne(n.get(1), n.get(3)), i = new ct(n.popFirst(5));
    return s.isEqual(e) || x2(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), i;
  }
};
function el(t2, e, n) {
  let s;
  return s = t2 ? n && (n.merge || n.mergeFields) ? t2.toFirestore(e, n) : t2.toFirestore(e) : e, s;
}
var sl = class {
  constructor(t2, e) {
    this.hasPendingWrites = t2, this.fromCache = e;
  }
  isEqual(t2) {
    return this.hasPendingWrites === t2.hasPendingWrites && this.fromCache === t2.fromCache;
  }
};
var il = class extends Ch {
  constructor(t2, e, n, s, i, r) {
    super(t2, e, n, s, r), this._firestore = t2, this._firestoreImpl = t2, this.metadata = i;
  }
  exists() {
    return super.exists();
  }
  data(t2 = {}) {
    if (this._document) {
      if (this._converter) {
        const e = new rl(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(e, t2);
      }
      return this._userDataWriter.convertValue(this._document.data.value, t2.serverTimestamps);
    }
  }
  get(t2, e = {}) {
    if (this._document) {
      const n = this._document.data.field(Nh("DocumentSnapshot.get", t2));
      if (null !== n)
        return this._userDataWriter.convertValue(n, e.serverTimestamps);
    }
  }
};
var rl = class extends il {
  data(t2 = {}) {
    return super.data(t2);
  }
};
var ol = class {
  constructor(t2, e, n, s) {
    this._firestore = t2, this._userDataWriter = e, this._snapshot = s, this.metadata = new sl(s.hasPendingWrites, s.fromCache), this.query = n;
  }
  get docs() {
    const t2 = [];
    return this.forEach((e) => t2.push(e)), t2;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return 0 === this.size;
  }
  forEach(t2, e) {
    this._snapshot.docs.forEach((n) => {
      t2.call(e, new rl(this._firestore, this._userDataWriter, n.key, n, new sl(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter));
    });
  }
  docChanges(t2 = {}) {
    const e = !!t2.includeMetadataChanges;
    if (e && this._snapshot.excludesMetadataChanges)
      throw new L2(B2.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = function(t3, e2) {
      if (t3._snapshot.oldDocs.isEmpty()) {
        let e3 = 0;
        return t3._snapshot.docChanges.map((n) => {
          const s = new rl(t3._firestore, t3._userDataWriter, n.doc.key, n.doc, new sl(t3._snapshot.mutatedKeys.has(n.doc.key), t3._snapshot.fromCache), t3.query.converter);
          return n.doc, {
            type: "added",
            doc: s,
            oldIndex: -1,
            newIndex: e3++
          };
        });
      }
      {
        let n = t3._snapshot.oldDocs;
        return t3._snapshot.docChanges.filter((t4) => e2 || 3 !== t4.type).map((e3) => {
          const s = new rl(t3._firestore, t3._userDataWriter, e3.doc.key, e3.doc, new sl(t3._snapshot.mutatedKeys.has(e3.doc.key), t3._snapshot.fromCache), t3.query.converter);
          let i = -1, r = -1;
          return 0 !== e3.type && (i = n.indexOf(e3.doc.key), n = n.delete(e3.doc.key)), 1 !== e3.type && (n = n.add(e3.doc), r = n.indexOf(e3.doc.key)), {
            type: ul(e3.type),
            doc: s,
            oldIndex: i,
            newIndex: r
          };
        });
      }
    }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
  }
};
function ul(t2) {
  switch (t2) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return O2();
  }
}
var hl = class extends tl {
  constructor(t2) {
    super(), this.firestore = t2;
  }
  convertBytes(t2) {
    return new th(t2);
  }
  convertReference(t2) {
    const e = this.convertDocumentKey(t2, this.firestore._databaseId);
    return new Xc2(this.firestore, null, e);
  }
};
function gl(t2, e, n, ...s) {
  t2 = jc2(t2, Xc2);
  const i = jc2(t2.firestore, $a2), r = lh(i);
  let o;
  o = "string" == typeof (e = getModularInstance(e)) || e instanceof eh ? Ih(r, "updateDoc", t2._key, e, n, s) : ph(r, "updateDoc", t2._key, e);
  return El(i, [o.toMutation(t2._key, On.exists(true))]);
}
function yl(t2) {
  return El(jc2(t2.firestore, $a2), [new zn(t2._key, On.none())]);
}
function pl(t2, e) {
  const n = jc2(t2.firestore, $a2), s = sa2(t2), i = el(t2.converter, e);
  return El(n, [fh(lh(t2.firestore), "addDoc", s._key, i, null !== t2.converter, {}).toMutation(s._key, On.exists(false))]).then(() => s);
}
function Il(t2, ...e) {
  var n, s, i;
  t2 = getModularInstance(t2);
  let r = {
    includeMetadataChanges: false
  }, o = 0;
  "object" != typeof e[o] || Oa2(e[o]) || (r = e[o], o++);
  const u = {
    includeMetadataChanges: r.includeMetadataChanges
  };
  if (Oa2(e[o])) {
    const t3 = e[o];
    e[o] = null === (n = t3.next) || void 0 === n ? void 0 : n.bind(t3), e[o + 1] = null === (s = t3.error) || void 0 === s ? void 0 : s.bind(t3), e[o + 2] = null === (i = t3.complete) || void 0 === i ? void 0 : i.bind(t3);
  }
  let c, a, h;
  if (t2 instanceof Xc2)
    a = jc2(t2.firestore, $a2), h = en(t2._key.path), c = {
      next: (n2) => {
        e[o] && e[o](Al(a, t2, n2));
      },
      error: e[o + 1],
      complete: e[o + 2]
    };
  else {
    const n2 = jc2(t2, Zc2);
    a = jc2(n2.firestore, $a2), h = n2._query;
    const s2 = new hl(a);
    c = {
      next: (t3) => {
        e[o] && e[o](new ol(a, s2, n2, t3));
      },
      error: e[o + 1],
      complete: e[o + 2]
    }, kh(t2._query);
  }
  return function(t3, e2, n2, s2) {
    const i2 = new ua2(s2), r2 = new zu(e2, i2, n2);
    return t3.asyncQueue.enqueueAndForget(async () => Ku(await Ra2(t3), r2)), () => {
      i2.bc(), t3.asyncQueue.enqueueAndForget(async () => Gu(await Ra2(t3), r2));
    };
  }(Ua2(a), h, u, c);
}
function El(t2, e) {
  return function(t3, e2) {
    const n = new U2();
    return t3.asyncQueue.enqueueAndForget(async () => cc2(await Ea2(t3), e2, n)), n.promise;
  }(Ua2(t2), e);
}
function Al(t2, e, n) {
  const s = n.docs.get(e._key), i = new hl(t2);
  return new il(t2, i, e._key, s, new sl(n.hasPendingWrites, n.fromCache), e.converter);
}
var vl = class {
  constructor(t2, e) {
    this._firestore = t2, this._commitHandler = e, this._mutations = [], this._committed = false, this._dataReader = lh(t2);
  }
  set(t2, e, n) {
    this._verifyNotCommitted();
    const s = Vl(t2, this._firestore), i = el(s.converter, e, n), r = fh(this._dataReader, "WriteBatch.set", s._key, i, null !== s.converter, n);
    return this._mutations.push(r.toMutation(s._key, On.none())), this;
  }
  update(t2, e, n, ...s) {
    this._verifyNotCommitted();
    const i = Vl(t2, this._firestore);
    let r;
    return r = "string" == typeof (e = getModularInstance(e)) || e instanceof eh ? Ih(this._dataReader, "WriteBatch.update", i._key, e, n, s) : ph(this._dataReader, "WriteBatch.update", i._key, e), this._mutations.push(r.toMutation(i._key, On.exists(true))), this;
  }
  delete(t2) {
    this._verifyNotCommitted();
    const e = Vl(t2, this._firestore);
    return this._mutations = this._mutations.concat(new zn(e._key, On.none())), this;
  }
  commit() {
    return this._verifyNotCommitted(), this._committed = true, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
  }
  _verifyNotCommitted() {
    if (this._committed)
      throw new L2(B2.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }
};
function Vl(t2, e) {
  if ((t2 = getModularInstance(t2)).firestore !== e)
    throw new L2(B2.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
  return t2;
}
function xl() {
  return new wh("serverTimestamp");
}
function Ml(t2) {
  return Ua2(t2 = jc2(t2, $a2)), new vl(t2, (e) => El(t2, e));
}
!function(t2, e = true) {
  !function(t3) {
    v2 = t3;
  }(SDK_VERSION), _registerComponent(new Component("firestore", (t3, { instanceIdentifier: n, options: s }) => {
    const i = t3.getProvider("app").getImmediate(), r = new $a2(new Q2(t3.getProvider("auth-internal")), new H2(t3.getProvider("app-check-internal")), function(t4, e2) {
      if (!Object.prototype.hasOwnProperty.apply(t4.options, ["projectId"]))
        throw new L2(B2.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new ne(t4.options.projectId, e2);
    }(i, n), i);
    return s = Object.assign({
      useFetchStreams: e
    }, s), r._setSettings(s), r;
  }, "PUBLIC").setMultipleInstances(true)), registerVersion(b, "3.7.3", t2), registerVersion(b, "3.7.3", "esm2017");
}();

// node_modules/reactfire/dist/index.js
var f = __toESM(require_react(), 1);

// node_modules/@firebase/database/dist/index.esm2017.js
var name = "@firebase/database";
var version = "0.13.10";
var SDK_VERSION2 = "";
function setSDKVersion(version6) {
  SDK_VERSION2 = version6;
}
var DOMStorageWrapper = class {
  constructor(domStorage_) {
    this.domStorage_ = domStorage_;
    this.prefix_ = "firebase:";
  }
  set(key, value) {
    if (value == null) {
      this.domStorage_.removeItem(this.prefixedName_(key));
    } else {
      this.domStorage_.setItem(this.prefixedName_(key), stringify(value));
    }
  }
  get(key) {
    const storedVal = this.domStorage_.getItem(this.prefixedName_(key));
    if (storedVal == null) {
      return null;
    } else {
      return jsonEval(storedVal);
    }
  }
  remove(key) {
    this.domStorage_.removeItem(this.prefixedName_(key));
  }
  prefixedName_(name5) {
    return this.prefix_ + name5;
  }
  toString() {
    return this.domStorage_.toString();
  }
};
var MemoryStorage = class {
  constructor() {
    this.cache_ = {};
    this.isInMemoryStorage = true;
  }
  set(key, value) {
    if (value == null) {
      delete this.cache_[key];
    } else {
      this.cache_[key] = value;
    }
  }
  get(key) {
    if (contains(this.cache_, key)) {
      return this.cache_[key];
    }
    return null;
  }
  remove(key) {
    delete this.cache_[key];
  }
};
var createStoragefor = function(domStorageName) {
  try {
    if (typeof window !== "undefined" && typeof window[domStorageName] !== "undefined") {
      const domStorage = window[domStorageName];
      domStorage.setItem("firebase:sentinel", "cache");
      domStorage.removeItem("firebase:sentinel");
      return new DOMStorageWrapper(domStorage);
    }
  } catch (e) {
  }
  return new MemoryStorage();
};
var PersistentStorage = createStoragefor("localStorage");
var SessionStorage = createStoragefor("sessionStorage");
var logClient = new Logger("@firebase/database");
var LUIDGenerator = function() {
  let id2 = 1;
  return function() {
    return id2++;
  };
}();
var sha1 = function(str) {
  const utf8Bytes = stringToByteArray(str);
  const sha12 = new Sha1();
  sha12.update(utf8Bytes);
  const sha1Bytes = sha12.digest();
  return base64.encodeByteArray(sha1Bytes);
};
var buildLogMessage_ = function(...varArgs) {
  let message = "";
  for (let i = 0; i < varArgs.length; i++) {
    const arg = varArgs[i];
    if (Array.isArray(arg) || arg && typeof arg === "object" && typeof arg.length === "number") {
      message += buildLogMessage_.apply(null, arg);
    } else if (typeof arg === "object") {
      message += stringify(arg);
    } else {
      message += arg;
    }
    message += " ";
  }
  return message;
};
var logger = null;
var firstLog_ = true;
var enableLogging$1 = function(logger_, persistent) {
  assert(!persistent || logger_ === true || logger_ === false, "Can't turn on custom loggers persistently.");
  if (logger_ === true) {
    logClient.logLevel = LogLevel.VERBOSE;
    logger = logClient.log.bind(logClient);
    if (persistent) {
      SessionStorage.set("logging_enabled", true);
    }
  } else if (typeof logger_ === "function") {
    logger = logger_;
  } else {
    logger = null;
    SessionStorage.remove("logging_enabled");
  }
};
var log = function(...varArgs) {
  if (firstLog_ === true) {
    firstLog_ = false;
    if (logger === null && SessionStorage.get("logging_enabled") === true) {
      enableLogging$1(true);
    }
  }
  if (logger) {
    const message = buildLogMessage_.apply(null, varArgs);
    logger(message);
  }
};
var logWrapper = function(prefix) {
  return function(...varArgs) {
    log(prefix, ...varArgs);
  };
};
var error = function(...varArgs) {
  const message = "FIREBASE INTERNAL ERROR: " + buildLogMessage_(...varArgs);
  logClient.error(message);
};
var fatal = function(...varArgs) {
  const message = `FIREBASE FATAL ERROR: ${buildLogMessage_(...varArgs)}`;
  logClient.error(message);
  throw new Error(message);
};
var warn = function(...varArgs) {
  const message = "FIREBASE WARNING: " + buildLogMessage_(...varArgs);
  logClient.warn(message);
};
var warnIfPageIsSecure = function() {
  if (typeof window !== "undefined" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1) {
    warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
  }
};
var isInvalidJSONNumber = function(data) {
  return typeof data === "number" && (data !== data || data === Number.POSITIVE_INFINITY || data === Number.NEGATIVE_INFINITY);
};
var executeWhenDOMReady = function(fn3) {
  if (isNodeSdk() || document.readyState === "complete") {
    fn3();
  } else {
    let called = false;
    const wrappedFn = function() {
      if (!document.body) {
        setTimeout(wrappedFn, Math.floor(10));
        return;
      }
      if (!called) {
        called = true;
        fn3();
      }
    };
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", wrappedFn, false);
      window.addEventListener("load", wrappedFn, false);
    } else if (document.attachEvent) {
      document.attachEvent("onreadystatechange", () => {
        if (document.readyState === "complete") {
          wrappedFn();
        }
      });
      window.attachEvent("onload", wrappedFn);
    }
  }
};
var MIN_NAME = "[MIN_NAME]";
var MAX_NAME = "[MAX_NAME]";
var nameCompare = function(a, b3) {
  if (a === b3) {
    return 0;
  } else if (a === MIN_NAME || b3 === MAX_NAME) {
    return -1;
  } else if (b3 === MIN_NAME || a === MAX_NAME) {
    return 1;
  } else {
    const aAsInt = tryParseInt(a), bAsInt = tryParseInt(b3);
    if (aAsInt !== null) {
      if (bAsInt !== null) {
        return aAsInt - bAsInt === 0 ? a.length - b3.length : aAsInt - bAsInt;
      } else {
        return -1;
      }
    } else if (bAsInt !== null) {
      return 1;
    } else {
      return a < b3 ? -1 : 1;
    }
  }
};
var stringCompare = function(a, b3) {
  if (a === b3) {
    return 0;
  } else if (a < b3) {
    return -1;
  } else {
    return 1;
  }
};
var requireKey = function(key, obj) {
  if (obj && key in obj) {
    return obj[key];
  } else {
    throw new Error("Missing required key (" + key + ") in object: " + stringify(obj));
  }
};
var ObjectToUniqueKey = function(obj) {
  if (typeof obj !== "object" || obj === null) {
    return stringify(obj);
  }
  const keys = [];
  for (const k4 in obj) {
    keys.push(k4);
  }
  keys.sort();
  let key = "{";
  for (let i = 0; i < keys.length; i++) {
    if (i !== 0) {
      key += ",";
    }
    key += stringify(keys[i]);
    key += ":";
    key += ObjectToUniqueKey(obj[keys[i]]);
  }
  key += "}";
  return key;
};
var splitStringBySize = function(str, segsize) {
  const len = str.length;
  if (len <= segsize) {
    return [str];
  }
  const dataSegs = [];
  for (let c = 0; c < len; c += segsize) {
    if (c + segsize > len) {
      dataSegs.push(str.substring(c, len));
    } else {
      dataSegs.push(str.substring(c, c + segsize));
    }
  }
  return dataSegs;
};
function each(obj, fn3) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn3(key, obj[key]);
    }
  }
}
var doubleToIEEE754String = function(v3) {
  assert(!isInvalidJSONNumber(v3), "Invalid JSON number");
  const ebits = 11, fbits = 52;
  const bias = (1 << ebits - 1) - 1;
  let s, e, f2, ln3, i;
  if (v3 === 0) {
    e = 0;
    f2 = 0;
    s = 1 / v3 === -Infinity ? 1 : 0;
  } else {
    s = v3 < 0;
    v3 = Math.abs(v3);
    if (v3 >= Math.pow(2, 1 - bias)) {
      ln3 = Math.min(Math.floor(Math.log(v3) / Math.LN2), bias);
      e = ln3 + bias;
      f2 = Math.round(v3 * Math.pow(2, fbits - ln3) - Math.pow(2, fbits));
    } else {
      e = 0;
      f2 = Math.round(v3 / Math.pow(2, 1 - bias - fbits));
    }
  }
  const bits = [];
  for (i = fbits; i; i -= 1) {
    bits.push(f2 % 2 ? 1 : 0);
    f2 = Math.floor(f2 / 2);
  }
  for (i = ebits; i; i -= 1) {
    bits.push(e % 2 ? 1 : 0);
    e = Math.floor(e / 2);
  }
  bits.push(s ? 1 : 0);
  bits.reverse();
  const str = bits.join("");
  let hexByteString = "";
  for (i = 0; i < 64; i += 8) {
    let hexByte = parseInt(str.substr(i, 8), 2).toString(16);
    if (hexByte.length === 1) {
      hexByte = "0" + hexByte;
    }
    hexByteString = hexByteString + hexByte;
  }
  return hexByteString.toLowerCase();
};
var isChromeExtensionContentScript = function() {
  return !!(typeof window === "object" && window["chrome"] && window["chrome"]["extension"] && !/^chrome/.test(window.location.href));
};
var isWindowsStoreApp = function() {
  return typeof Windows === "object" && typeof Windows.UI === "object";
};
function errorForServerCode(code, query) {
  let reason = "Unknown Error";
  if (code === "too_big") {
    reason = "The data requested exceeds the maximum size that can be accessed with a single request.";
  } else if (code === "permission_denied") {
    reason = "Client doesn't have permission to access the desired data.";
  } else if (code === "unavailable") {
    reason = "The service is unavailable";
  }
  const error2 = new Error(code + " at " + query._path.toString() + ": " + reason);
  error2.code = code.toUpperCase();
  return error2;
}
var INTEGER_REGEXP_ = new RegExp("^-?(0*)\\d{1,10}$");
var INTEGER_32_MIN = -2147483648;
var INTEGER_32_MAX = 2147483647;
var tryParseInt = function(str) {
  if (INTEGER_REGEXP_.test(str)) {
    const intVal = Number(str);
    if (intVal >= INTEGER_32_MIN && intVal <= INTEGER_32_MAX) {
      return intVal;
    }
  }
  return null;
};
var exceptionGuard = function(fn3) {
  try {
    fn3();
  } catch (e) {
    setTimeout(() => {
      const stack = e.stack || "";
      warn("Exception was thrown by user callback.", stack);
      throw e;
    }, Math.floor(0));
  }
};
var beingCrawled = function() {
  const userAgent = typeof window === "object" && window["navigator"] && window["navigator"]["userAgent"] || "";
  return userAgent.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
};
var setTimeoutNonBlocking = function(fn3, time) {
  const timeout = setTimeout(fn3, time);
  if (typeof timeout === "number" && typeof Deno !== "undefined" && Deno["unrefTimer"]) {
    Deno.unrefTimer(timeout);
  } else if (typeof timeout === "object" && timeout["unref"]) {
    timeout["unref"]();
  }
  return timeout;
};
var AppCheckTokenProvider = class {
  constructor(appName_, appCheckProvider) {
    this.appName_ = appName_;
    this.appCheckProvider = appCheckProvider;
    this.appCheck = appCheckProvider === null || appCheckProvider === void 0 ? void 0 : appCheckProvider.getImmediate({ optional: true });
    if (!this.appCheck) {
      appCheckProvider === null || appCheckProvider === void 0 ? void 0 : appCheckProvider.get().then((appCheck) => this.appCheck = appCheck);
    }
  }
  getToken(forceRefresh) {
    if (!this.appCheck) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.appCheck) {
            this.getToken(forceRefresh).then(resolve, reject);
          } else {
            resolve(null);
          }
        }, 0);
      });
    }
    return this.appCheck.getToken(forceRefresh);
  }
  addTokenChangeListener(listener) {
    var _a2;
    (_a2 = this.appCheckProvider) === null || _a2 === void 0 ? void 0 : _a2.get().then((appCheck) => appCheck.addTokenListener(listener));
  }
  notifyForInvalidToken() {
    warn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`);
  }
};
var FirebaseAuthTokenProvider = class {
  constructor(appName_, firebaseOptions_, authProvider_) {
    this.appName_ = appName_;
    this.firebaseOptions_ = firebaseOptions_;
    this.authProvider_ = authProvider_;
    this.auth_ = null;
    this.auth_ = authProvider_.getImmediate({ optional: true });
    if (!this.auth_) {
      authProvider_.onInit((auth) => this.auth_ = auth);
    }
  }
  getToken(forceRefresh) {
    if (!this.auth_) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.auth_) {
            this.getToken(forceRefresh).then(resolve, reject);
          } else {
            resolve(null);
          }
        }, 0);
      });
    }
    return this.auth_.getToken(forceRefresh).catch((error2) => {
      if (error2 && error2.code === "auth/token-not-initialized") {
        log("Got auth/token-not-initialized error.  Treating as null token.");
        return null;
      } else {
        return Promise.reject(error2);
      }
    });
  }
  addTokenChangeListener(listener) {
    if (this.auth_) {
      this.auth_.addAuthTokenListener(listener);
    } else {
      this.authProvider_.get().then((auth) => auth.addAuthTokenListener(listener));
    }
  }
  removeTokenChangeListener(listener) {
    this.authProvider_.get().then((auth) => auth.removeAuthTokenListener(listener));
  }
  notifyForInvalidToken() {
    let errorMessage = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
    if ("credential" in this.firebaseOptions_) {
      errorMessage += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.';
    } else if ("serviceAccount" in this.firebaseOptions_) {
      errorMessage += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.';
    } else {
      errorMessage += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.';
    }
    warn(errorMessage);
  }
};
var EmulatorTokenProvider = class {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }
  getToken(forceRefresh) {
    return Promise.resolve({
      accessToken: this.accessToken
    });
  }
  addTokenChangeListener(listener) {
    listener(this.accessToken);
  }
  removeTokenChangeListener(listener) {
  }
  notifyForInvalidToken() {
  }
};
EmulatorTokenProvider.OWNER = "owner";
var PROTOCOL_VERSION = "5";
var VERSION_PARAM = "v";
var TRANSPORT_SESSION_PARAM = "s";
var REFERER_PARAM = "r";
var FORGE_REF = "f";
var FORGE_DOMAIN_RE = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
var LAST_SESSION_PARAM = "ls";
var APPLICATION_ID_PARAM = "p";
var APP_CHECK_TOKEN_PARAM = "ac";
var WEBSOCKET = "websocket";
var LONG_POLLING = "long_polling";
var RepoInfo = class {
  constructor(host, secure, namespace, webSocketOnly, nodeAdmin = false, persistenceKey = "", includeNamespaceInQueryParams = false) {
    this.secure = secure;
    this.namespace = namespace;
    this.webSocketOnly = webSocketOnly;
    this.nodeAdmin = nodeAdmin;
    this.persistenceKey = persistenceKey;
    this.includeNamespaceInQueryParams = includeNamespaceInQueryParams;
    this._host = host.toLowerCase();
    this._domain = this._host.substr(this._host.indexOf(".") + 1);
    this.internalHost = PersistentStorage.get("host:" + host) || this._host;
  }
  isCacheableHost() {
    return this.internalHost.substr(0, 2) === "s-";
  }
  isCustomHost() {
    return this._domain !== "firebaseio.com" && this._domain !== "firebaseio-demo.com";
  }
  get host() {
    return this._host;
  }
  set host(newHost) {
    if (newHost !== this.internalHost) {
      this.internalHost = newHost;
      if (this.isCacheableHost()) {
        PersistentStorage.set("host:" + this._host, this.internalHost);
      }
    }
  }
  toString() {
    let str = this.toURLString();
    if (this.persistenceKey) {
      str += "<" + this.persistenceKey + ">";
    }
    return str;
  }
  toURLString() {
    const protocol = this.secure ? "https://" : "http://";
    const query = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
    return `${protocol}${this.host}/${query}`;
  }
};
function repoInfoNeedsQueryParam(repoInfo) {
  return repoInfo.host !== repoInfo.internalHost || repoInfo.isCustomHost() || repoInfo.includeNamespaceInQueryParams;
}
function repoInfoConnectionURL(repoInfo, type, params) {
  assert(typeof type === "string", "typeof type must == string");
  assert(typeof params === "object", "typeof params must == object");
  let connURL;
  if (type === WEBSOCKET) {
    connURL = (repoInfo.secure ? "wss://" : "ws://") + repoInfo.internalHost + "/.ws?";
  } else if (type === LONG_POLLING) {
    connURL = (repoInfo.secure ? "https://" : "http://") + repoInfo.internalHost + "/.lp?";
  } else {
    throw new Error("Unknown connection type: " + type);
  }
  if (repoInfoNeedsQueryParam(repoInfo)) {
    params["ns"] = repoInfo.namespace;
  }
  const pairs = [];
  each(params, (key, value) => {
    pairs.push(key + "=" + value);
  });
  return connURL + pairs.join("&");
}
var StatsCollection = class {
  constructor() {
    this.counters_ = {};
  }
  incrementCounter(name5, amount = 1) {
    if (!contains(this.counters_, name5)) {
      this.counters_[name5] = 0;
    }
    this.counters_[name5] += amount;
  }
  get() {
    return deepCopy(this.counters_);
  }
};
var collections = {};
var reporters = {};
function statsManagerGetCollection(repoInfo) {
  const hashString = repoInfo.toString();
  if (!collections[hashString]) {
    collections[hashString] = new StatsCollection();
  }
  return collections[hashString];
}
function statsManagerGetOrCreateReporter(repoInfo, creatorFunction) {
  const hashString = repoInfo.toString();
  if (!reporters[hashString]) {
    reporters[hashString] = creatorFunction();
  }
  return reporters[hashString];
}
var PacketReceiver = class {
  constructor(onMessage_) {
    this.onMessage_ = onMessage_;
    this.pendingResponses = [];
    this.currentResponseNum = 0;
    this.closeAfterResponse = -1;
    this.onClose = null;
  }
  closeAfter(responseNum, callback) {
    this.closeAfterResponse = responseNum;
    this.onClose = callback;
    if (this.closeAfterResponse < this.currentResponseNum) {
      this.onClose();
      this.onClose = null;
    }
  }
  handleResponse(requestNum, data) {
    this.pendingResponses[requestNum] = data;
    while (this.pendingResponses[this.currentResponseNum]) {
      const toProcess = this.pendingResponses[this.currentResponseNum];
      delete this.pendingResponses[this.currentResponseNum];
      for (let i = 0; i < toProcess.length; ++i) {
        if (toProcess[i]) {
          exceptionGuard(() => {
            this.onMessage_(toProcess[i]);
          });
        }
      }
      if (this.currentResponseNum === this.closeAfterResponse) {
        if (this.onClose) {
          this.onClose();
          this.onClose = null;
        }
        break;
      }
      this.currentResponseNum++;
    }
  }
};
var FIREBASE_LONGPOLL_START_PARAM = "start";
var FIREBASE_LONGPOLL_CLOSE_COMMAND = "close";
var FIREBASE_LONGPOLL_COMMAND_CB_NAME = "pLPCommand";
var FIREBASE_LONGPOLL_DATA_CB_NAME = "pRTLPCB";
var FIREBASE_LONGPOLL_ID_PARAM = "id";
var FIREBASE_LONGPOLL_PW_PARAM = "pw";
var FIREBASE_LONGPOLL_SERIAL_PARAM = "ser";
var FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = "cb";
var FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = "seg";
var FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = "ts";
var FIREBASE_LONGPOLL_DATA_PARAM = "d";
var FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = "dframe";
var MAX_URL_DATA_SIZE = 1870;
var SEG_HEADER_SIZE = 30;
var MAX_PAYLOAD_SIZE = MAX_URL_DATA_SIZE - SEG_HEADER_SIZE;
var KEEPALIVE_REQUEST_INTERVAL = 25e3;
var LP_CONNECT_TIMEOUT = 3e4;
var BrowserPollConnection = class {
  constructor(connId, repoInfo, applicationId, appCheckToken, authToken, transportSessionId, lastSessionId) {
    this.connId = connId;
    this.repoInfo = repoInfo;
    this.applicationId = applicationId;
    this.appCheckToken = appCheckToken;
    this.authToken = authToken;
    this.transportSessionId = transportSessionId;
    this.lastSessionId = lastSessionId;
    this.bytesSent = 0;
    this.bytesReceived = 0;
    this.everConnected_ = false;
    this.log_ = logWrapper(connId);
    this.stats_ = statsManagerGetCollection(repoInfo);
    this.urlFn = (params) => {
      if (this.appCheckToken) {
        params[APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
      }
      return repoInfoConnectionURL(repoInfo, LONG_POLLING, params);
    };
  }
  open(onMessage, onDisconnect) {
    this.curSegmentNum = 0;
    this.onDisconnect_ = onDisconnect;
    this.myPacketOrderer = new PacketReceiver(onMessage);
    this.isClosed_ = false;
    this.connectTimeoutTimer_ = setTimeout(() => {
      this.log_("Timed out trying to connect.");
      this.onClosed_();
      this.connectTimeoutTimer_ = null;
    }, Math.floor(LP_CONNECT_TIMEOUT));
    executeWhenDOMReady(() => {
      if (this.isClosed_) {
        return;
      }
      this.scriptTagHolder = new FirebaseIFrameScriptHolder((...args) => {
        const [command, arg1, arg2, arg3, arg4] = args;
        this.incrementIncomingBytes_(args);
        if (!this.scriptTagHolder) {
          return;
        }
        if (this.connectTimeoutTimer_) {
          clearTimeout(this.connectTimeoutTimer_);
          this.connectTimeoutTimer_ = null;
        }
        this.everConnected_ = true;
        if (command === FIREBASE_LONGPOLL_START_PARAM) {
          this.id = arg1;
          this.password = arg2;
        } else if (command === FIREBASE_LONGPOLL_CLOSE_COMMAND) {
          if (arg1) {
            this.scriptTagHolder.sendNewPolls = false;
            this.myPacketOrderer.closeAfter(arg1, () => {
              this.onClosed_();
            });
          } else {
            this.onClosed_();
          }
        } else {
          throw new Error("Unrecognized command received: " + command);
        }
      }, (...args) => {
        const [pN, data] = args;
        this.incrementIncomingBytes_(args);
        this.myPacketOrderer.handleResponse(pN, data);
      }, () => {
        this.onClosed_();
      }, this.urlFn);
      const urlParams = {};
      urlParams[FIREBASE_LONGPOLL_START_PARAM] = "t";
      urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(Math.random() * 1e8);
      if (this.scriptTagHolder.uniqueCallbackIdentifier) {
        urlParams[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = this.scriptTagHolder.uniqueCallbackIdentifier;
      }
      urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
      if (this.transportSessionId) {
        urlParams[TRANSPORT_SESSION_PARAM] = this.transportSessionId;
      }
      if (this.lastSessionId) {
        urlParams[LAST_SESSION_PARAM] = this.lastSessionId;
      }
      if (this.applicationId) {
        urlParams[APPLICATION_ID_PARAM] = this.applicationId;
      }
      if (this.appCheckToken) {
        urlParams[APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
      }
      if (typeof location !== "undefined" && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) {
        urlParams[REFERER_PARAM] = FORGE_REF;
      }
      const connectURL = this.urlFn(urlParams);
      this.log_("Connecting via long-poll to " + connectURL);
      this.scriptTagHolder.addTag(connectURL, () => {
      });
    });
  }
  start() {
    this.scriptTagHolder.startLongPoll(this.id, this.password);
    this.addDisconnectPingFrame(this.id, this.password);
  }
  static forceAllow() {
    BrowserPollConnection.forceAllow_ = true;
  }
  static forceDisallow() {
    BrowserPollConnection.forceDisallow_ = true;
  }
  static isAvailable() {
    if (isNodeSdk()) {
      return false;
    } else if (BrowserPollConnection.forceAllow_) {
      return true;
    } else {
      return !BrowserPollConnection.forceDisallow_ && typeof document !== "undefined" && document.createElement != null && !isChromeExtensionContentScript() && !isWindowsStoreApp();
    }
  }
  markConnectionHealthy() {
  }
  shutdown_() {
    this.isClosed_ = true;
    if (this.scriptTagHolder) {
      this.scriptTagHolder.close();
      this.scriptTagHolder = null;
    }
    if (this.myDisconnFrame) {
      document.body.removeChild(this.myDisconnFrame);
      this.myDisconnFrame = null;
    }
    if (this.connectTimeoutTimer_) {
      clearTimeout(this.connectTimeoutTimer_);
      this.connectTimeoutTimer_ = null;
    }
  }
  onClosed_() {
    if (!this.isClosed_) {
      this.log_("Longpoll is closing itself");
      this.shutdown_();
      if (this.onDisconnect_) {
        this.onDisconnect_(this.everConnected_);
        this.onDisconnect_ = null;
      }
    }
  }
  close() {
    if (!this.isClosed_) {
      this.log_("Longpoll is being closed.");
      this.shutdown_();
    }
  }
  send(data) {
    const dataStr = stringify(data);
    this.bytesSent += dataStr.length;
    this.stats_.incrementCounter("bytes_sent", dataStr.length);
    const base64data = base64Encode(dataStr);
    const dataSegs = splitStringBySize(base64data, MAX_PAYLOAD_SIZE);
    for (let i = 0; i < dataSegs.length; i++) {
      this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
      this.curSegmentNum++;
    }
  }
  addDisconnectPingFrame(id2, pw) {
    if (isNodeSdk()) {
      return;
    }
    this.myDisconnFrame = document.createElement("iframe");
    const urlParams = {};
    urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = "t";
    urlParams[FIREBASE_LONGPOLL_ID_PARAM] = id2;
    urlParams[FIREBASE_LONGPOLL_PW_PARAM] = pw;
    this.myDisconnFrame.src = this.urlFn(urlParams);
    this.myDisconnFrame.style.display = "none";
    document.body.appendChild(this.myDisconnFrame);
  }
  incrementIncomingBytes_(args) {
    const bytesReceived = stringify(args).length;
    this.bytesReceived += bytesReceived;
    this.stats_.incrementCounter("bytes_received", bytesReceived);
  }
};
var FirebaseIFrameScriptHolder = class {
  constructor(commandCB, onMessageCB, onDisconnect, urlFn) {
    this.onDisconnect = onDisconnect;
    this.urlFn = urlFn;
    this.outstandingRequests = /* @__PURE__ */ new Set();
    this.pendingSegs = [];
    this.currentSerial = Math.floor(Math.random() * 1e8);
    this.sendNewPolls = true;
    if (!isNodeSdk()) {
      this.uniqueCallbackIdentifier = LUIDGenerator();
      window[FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
      window[FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB;
      this.myIFrame = FirebaseIFrameScriptHolder.createIFrame_();
      let script = "";
      if (this.myIFrame.src && this.myIFrame.src.substr(0, "javascript:".length) === "javascript:") {
        const currentDomain = document.domain;
        script = '<script>document.domain="' + currentDomain + '";<\/script>';
      }
      const iframeContents = "<html><body>" + script + "</body></html>";
      try {
        this.myIFrame.doc.open();
        this.myIFrame.doc.write(iframeContents);
        this.myIFrame.doc.close();
      } catch (e) {
        log("frame writing exception");
        if (e.stack) {
          log(e.stack);
        }
        log(e);
      }
    } else {
      this.commandCB = commandCB;
      this.onMessageCB = onMessageCB;
    }
  }
  static createIFrame_() {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    if (document.body) {
      document.body.appendChild(iframe);
      try {
        const a = iframe.contentWindow.document;
        if (!a) {
          log("No IE domain setting required");
        }
      } catch (e) {
        const domain = document.domain;
        iframe.src = "javascript:void((function(){document.open();document.domain='" + domain + "';document.close();})())";
      }
    } else {
      throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
    }
    if (iframe.contentDocument) {
      iframe.doc = iframe.contentDocument;
    } else if (iframe.contentWindow) {
      iframe.doc = iframe.contentWindow.document;
    } else if (iframe.document) {
      iframe.doc = iframe.document;
    }
    return iframe;
  }
  close() {
    this.alive = false;
    if (this.myIFrame) {
      this.myIFrame.doc.body.innerHTML = "";
      setTimeout(() => {
        if (this.myIFrame !== null) {
          document.body.removeChild(this.myIFrame);
          this.myIFrame = null;
        }
      }, Math.floor(0));
    }
    const onDisconnect = this.onDisconnect;
    if (onDisconnect) {
      this.onDisconnect = null;
      onDisconnect();
    }
  }
  startLongPoll(id2, pw) {
    this.myID = id2;
    this.myPW = pw;
    this.alive = true;
    while (this.newRequest_()) {
    }
  }
  newRequest_() {
    if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
      this.currentSerial++;
      const urlParams = {};
      urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
      urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
      urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
      let theURL = this.urlFn(urlParams);
      let curDataString = "";
      let i = 0;
      while (this.pendingSegs.length > 0) {
        const nextSeg = this.pendingSegs[0];
        if (nextSeg.d.length + SEG_HEADER_SIZE + curDataString.length <= MAX_URL_DATA_SIZE) {
          const theSeg = this.pendingSegs.shift();
          curDataString = curDataString + "&" + FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + "=" + theSeg.seg + "&" + FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + "=" + theSeg.ts + "&" + FIREBASE_LONGPOLL_DATA_PARAM + i + "=" + theSeg.d;
          i++;
        } else {
          break;
        }
      }
      theURL = theURL + curDataString;
      this.addLongPollTag_(theURL, this.currentSerial);
      return true;
    } else {
      return false;
    }
  }
  enqueueSegment(segnum, totalsegs, data) {
    this.pendingSegs.push({ seg: segnum, ts: totalsegs, d: data });
    if (this.alive) {
      this.newRequest_();
    }
  }
  addLongPollTag_(url, serial) {
    this.outstandingRequests.add(serial);
    const doNewRequest = () => {
      this.outstandingRequests.delete(serial);
      this.newRequest_();
    };
    const keepaliveTimeout = setTimeout(doNewRequest, Math.floor(KEEPALIVE_REQUEST_INTERVAL));
    const readyStateCB = () => {
      clearTimeout(keepaliveTimeout);
      doNewRequest();
    };
    this.addTag(url, readyStateCB);
  }
  addTag(url, loadCB) {
    if (isNodeSdk()) {
      this.doNodeLongPoll(url, loadCB);
    } else {
      setTimeout(() => {
        try {
          if (!this.sendNewPolls) {
            return;
          }
          const newScript = this.myIFrame.doc.createElement("script");
          newScript.type = "text/javascript";
          newScript.async = true;
          newScript.src = url;
          newScript.onload = newScript.onreadystatechange = function() {
            const rstate = newScript.readyState;
            if (!rstate || rstate === "loaded" || rstate === "complete") {
              newScript.onload = newScript.onreadystatechange = null;
              if (newScript.parentNode) {
                newScript.parentNode.removeChild(newScript);
              }
              loadCB();
            }
          };
          newScript.onerror = () => {
            log("Long-poll script failed to load: " + url);
            this.sendNewPolls = false;
            this.close();
          };
          this.myIFrame.doc.body.appendChild(newScript);
        } catch (e) {
        }
      }, Math.floor(1));
    }
  }
};
var WEBSOCKET_MAX_FRAME_SIZE = 16384;
var WEBSOCKET_KEEPALIVE_INTERVAL = 45e3;
var WebSocketImpl = null;
if (typeof MozWebSocket !== "undefined") {
  WebSocketImpl = MozWebSocket;
} else if (typeof WebSocket !== "undefined") {
  WebSocketImpl = WebSocket;
}
var WebSocketConnection = class {
  constructor(connId, repoInfo, applicationId, appCheckToken, authToken, transportSessionId, lastSessionId) {
    this.connId = connId;
    this.applicationId = applicationId;
    this.appCheckToken = appCheckToken;
    this.authToken = authToken;
    this.keepaliveTimer = null;
    this.frames = null;
    this.totalFrames = 0;
    this.bytesSent = 0;
    this.bytesReceived = 0;
    this.log_ = logWrapper(this.connId);
    this.stats_ = statsManagerGetCollection(repoInfo);
    this.connURL = WebSocketConnection.connectionURL_(repoInfo, transportSessionId, lastSessionId, appCheckToken, applicationId);
    this.nodeAdmin = repoInfo.nodeAdmin;
  }
  static connectionURL_(repoInfo, transportSessionId, lastSessionId, appCheckToken, applicationId) {
    const urlParams = {};
    urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
    if (!isNodeSdk() && typeof location !== "undefined" && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) {
      urlParams[REFERER_PARAM] = FORGE_REF;
    }
    if (transportSessionId) {
      urlParams[TRANSPORT_SESSION_PARAM] = transportSessionId;
    }
    if (lastSessionId) {
      urlParams[LAST_SESSION_PARAM] = lastSessionId;
    }
    if (appCheckToken) {
      urlParams[APP_CHECK_TOKEN_PARAM] = appCheckToken;
    }
    if (applicationId) {
      urlParams[APPLICATION_ID_PARAM] = applicationId;
    }
    return repoInfoConnectionURL(repoInfo, WEBSOCKET, urlParams);
  }
  open(onMessage, onDisconnect) {
    this.onDisconnect = onDisconnect;
    this.onMessage = onMessage;
    this.log_("Websocket connecting to " + this.connURL);
    this.everConnected_ = false;
    PersistentStorage.set("previous_websocket_failure", true);
    try {
      let options;
      if (isNodeSdk()) {
        const device = this.nodeAdmin ? "AdminNode" : "Node";
        options = {
          headers: {
            "User-Agent": `Firebase/${PROTOCOL_VERSION}/${SDK_VERSION2}/${process.platform}/${device}`,
            "X-Firebase-GMPID": this.applicationId || ""
          }
        };
        if (this.authToken) {
          options.headers["Authorization"] = `Bearer ${this.authToken}`;
        }
        if (this.appCheckToken) {
          options.headers["X-Firebase-AppCheck"] = this.appCheckToken;
        }
        const env = process["env"];
        const proxy = this.connURL.indexOf("wss://") === 0 ? env["HTTPS_PROXY"] || env["https_proxy"] : env["HTTP_PROXY"] || env["http_proxy"];
        if (proxy) {
          options["proxy"] = { origin: proxy };
        }
      }
      this.mySock = new WebSocketImpl(this.connURL, [], options);
    } catch (e) {
      this.log_("Error instantiating WebSocket.");
      const error2 = e.message || e.data;
      if (error2) {
        this.log_(error2);
      }
      this.onClosed_();
      return;
    }
    this.mySock.onopen = () => {
      this.log_("Websocket connected.");
      this.everConnected_ = true;
    };
    this.mySock.onclose = () => {
      this.log_("Websocket connection was disconnected.");
      this.mySock = null;
      this.onClosed_();
    };
    this.mySock.onmessage = (m2) => {
      this.handleIncomingFrame(m2);
    };
    this.mySock.onerror = (e) => {
      this.log_("WebSocket error.  Closing connection.");
      const error2 = e.message || e.data;
      if (error2) {
        this.log_(error2);
      }
      this.onClosed_();
    };
  }
  start() {
  }
  static forceDisallow() {
    WebSocketConnection.forceDisallow_ = true;
  }
  static isAvailable() {
    let isOldAndroid = false;
    if (typeof navigator !== "undefined" && navigator.userAgent) {
      const oldAndroidRegex = /Android ([0-9]{0,}\.[0-9]{0,})/;
      const oldAndroidMatch = navigator.userAgent.match(oldAndroidRegex);
      if (oldAndroidMatch && oldAndroidMatch.length > 1) {
        if (parseFloat(oldAndroidMatch[1]) < 4.4) {
          isOldAndroid = true;
        }
      }
    }
    return !isOldAndroid && WebSocketImpl !== null && !WebSocketConnection.forceDisallow_;
  }
  static previouslyFailed() {
    return PersistentStorage.isInMemoryStorage || PersistentStorage.get("previous_websocket_failure") === true;
  }
  markConnectionHealthy() {
    PersistentStorage.remove("previous_websocket_failure");
  }
  appendFrame_(data) {
    this.frames.push(data);
    if (this.frames.length === this.totalFrames) {
      const fullMess = this.frames.join("");
      this.frames = null;
      const jsonMess = jsonEval(fullMess);
      this.onMessage(jsonMess);
    }
  }
  handleNewFrameCount_(frameCount) {
    this.totalFrames = frameCount;
    this.frames = [];
  }
  extractFrameCount_(data) {
    assert(this.frames === null, "We already have a frame buffer");
    if (data.length <= 6) {
      const frameCount = Number(data);
      if (!isNaN(frameCount)) {
        this.handleNewFrameCount_(frameCount);
        return null;
      }
    }
    this.handleNewFrameCount_(1);
    return data;
  }
  handleIncomingFrame(mess) {
    if (this.mySock === null) {
      return;
    }
    const data = mess["data"];
    this.bytesReceived += data.length;
    this.stats_.incrementCounter("bytes_received", data.length);
    this.resetKeepAlive();
    if (this.frames !== null) {
      this.appendFrame_(data);
    } else {
      const remainingData = this.extractFrameCount_(data);
      if (remainingData !== null) {
        this.appendFrame_(remainingData);
      }
    }
  }
  send(data) {
    this.resetKeepAlive();
    const dataStr = stringify(data);
    this.bytesSent += dataStr.length;
    this.stats_.incrementCounter("bytes_sent", dataStr.length);
    const dataSegs = splitStringBySize(dataStr, WEBSOCKET_MAX_FRAME_SIZE);
    if (dataSegs.length > 1) {
      this.sendString_(String(dataSegs.length));
    }
    for (let i = 0; i < dataSegs.length; i++) {
      this.sendString_(dataSegs[i]);
    }
  }
  shutdown_() {
    this.isClosed_ = true;
    if (this.keepaliveTimer) {
      clearInterval(this.keepaliveTimer);
      this.keepaliveTimer = null;
    }
    if (this.mySock) {
      this.mySock.close();
      this.mySock = null;
    }
  }
  onClosed_() {
    if (!this.isClosed_) {
      this.log_("WebSocket is closing itself");
      this.shutdown_();
      if (this.onDisconnect) {
        this.onDisconnect(this.everConnected_);
        this.onDisconnect = null;
      }
    }
  }
  close() {
    if (!this.isClosed_) {
      this.log_("WebSocket is being closed");
      this.shutdown_();
    }
  }
  resetKeepAlive() {
    clearInterval(this.keepaliveTimer);
    this.keepaliveTimer = setInterval(() => {
      if (this.mySock) {
        this.sendString_("0");
      }
      this.resetKeepAlive();
    }, Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL));
  }
  sendString_(str) {
    try {
      this.mySock.send(str);
    } catch (e) {
      this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection.");
      setTimeout(this.onClosed_.bind(this), 0);
    }
  }
};
WebSocketConnection.responsesRequiredToBeHealthy = 2;
WebSocketConnection.healthyTimeout = 3e4;
var TransportManager = class {
  constructor(repoInfo) {
    this.initTransports_(repoInfo);
  }
  static get ALL_TRANSPORTS() {
    return [BrowserPollConnection, WebSocketConnection];
  }
  static get IS_TRANSPORT_INITIALIZED() {
    return this.globalTransportInitialized_;
  }
  initTransports_(repoInfo) {
    const isWebSocketsAvailable = WebSocketConnection && WebSocketConnection["isAvailable"]();
    let isSkipPollConnection = isWebSocketsAvailable && !WebSocketConnection.previouslyFailed();
    if (repoInfo.webSocketOnly) {
      if (!isWebSocketsAvailable) {
        warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
      }
      isSkipPollConnection = true;
    }
    if (isSkipPollConnection) {
      this.transports_ = [WebSocketConnection];
    } else {
      const transports = this.transports_ = [];
      for (const transport of TransportManager.ALL_TRANSPORTS) {
        if (transport && transport["isAvailable"]()) {
          transports.push(transport);
        }
      }
      TransportManager.globalTransportInitialized_ = true;
    }
  }
  initialTransport() {
    if (this.transports_.length > 0) {
      return this.transports_[0];
    } else {
      throw new Error("No transports available");
    }
  }
  upgradeTransport() {
    if (this.transports_.length > 1) {
      return this.transports_[1];
    } else {
      return null;
    }
  }
};
TransportManager.globalTransportInitialized_ = false;
var UPGRADE_TIMEOUT = 6e4;
var DELAY_BEFORE_SENDING_EXTRA_REQUESTS = 5e3;
var BYTES_SENT_HEALTHY_OVERRIDE = 10 * 1024;
var BYTES_RECEIVED_HEALTHY_OVERRIDE = 100 * 1024;
var MESSAGE_TYPE = "t";
var MESSAGE_DATA = "d";
var CONTROL_SHUTDOWN = "s";
var CONTROL_RESET = "r";
var CONTROL_ERROR = "e";
var CONTROL_PONG = "o";
var SWITCH_ACK = "a";
var END_TRANSMISSION = "n";
var PING = "p";
var SERVER_HELLO = "h";
var Connection = class {
  constructor(id2, repoInfo_, applicationId_, appCheckToken_, authToken_, onMessage_, onReady_, onDisconnect_, onKill_, lastSessionId) {
    this.id = id2;
    this.repoInfo_ = repoInfo_;
    this.applicationId_ = applicationId_;
    this.appCheckToken_ = appCheckToken_;
    this.authToken_ = authToken_;
    this.onMessage_ = onMessage_;
    this.onReady_ = onReady_;
    this.onDisconnect_ = onDisconnect_;
    this.onKill_ = onKill_;
    this.lastSessionId = lastSessionId;
    this.connectionCount = 0;
    this.pendingDataMessages = [];
    this.state_ = 0;
    this.log_ = logWrapper("c:" + this.id + ":");
    this.transportManager_ = new TransportManager(repoInfo_);
    this.log_("Connection created");
    this.start_();
  }
  start_() {
    const conn = this.transportManager_.initialTransport();
    this.conn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId);
    this.primaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
    const onMessageReceived = this.connReceiver_(this.conn_);
    const onConnectionLost = this.disconnReceiver_(this.conn_);
    this.tx_ = this.conn_;
    this.rx_ = this.conn_;
    this.secondaryConn_ = null;
    this.isHealthy_ = false;
    setTimeout(() => {
      this.conn_ && this.conn_.open(onMessageReceived, onConnectionLost);
    }, Math.floor(0));
    const healthyTimeoutMS = conn["healthyTimeout"] || 0;
    if (healthyTimeoutMS > 0) {
      this.healthyTimeout_ = setTimeoutNonBlocking(() => {
        this.healthyTimeout_ = null;
        if (!this.isHealthy_) {
          if (this.conn_ && this.conn_.bytesReceived > BYTES_RECEIVED_HEALTHY_OVERRIDE) {
            this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy.");
            this.isHealthy_ = true;
            this.conn_.markConnectionHealthy();
          } else if (this.conn_ && this.conn_.bytesSent > BYTES_SENT_HEALTHY_OVERRIDE) {
            this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.");
          } else {
            this.log_("Closing unhealthy connection after timeout.");
            this.close();
          }
        }
      }, Math.floor(healthyTimeoutMS));
    }
  }
  nextTransportId_() {
    return "c:" + this.id + ":" + this.connectionCount++;
  }
  disconnReceiver_(conn) {
    return (everConnected) => {
      if (conn === this.conn_) {
        this.onConnectionLost_(everConnected);
      } else if (conn === this.secondaryConn_) {
        this.log_("Secondary connection lost.");
        this.onSecondaryConnectionLost_();
      } else {
        this.log_("closing an old connection");
      }
    };
  }
  connReceiver_(conn) {
    return (message) => {
      if (this.state_ !== 2) {
        if (conn === this.rx_) {
          this.onPrimaryMessageReceived_(message);
        } else if (conn === this.secondaryConn_) {
          this.onSecondaryMessageReceived_(message);
        } else {
          this.log_("message on old connection");
        }
      }
    };
  }
  sendRequest(dataMsg) {
    const msg = { t: "d", d: dataMsg };
    this.sendData_(msg);
  }
  tryCleanupConnection() {
    if (this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_) {
      this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId);
      this.conn_ = this.secondaryConn_;
      this.secondaryConn_ = null;
    }
  }
  onSecondaryControl_(controlData) {
    if (MESSAGE_TYPE in controlData) {
      const cmd = controlData[MESSAGE_TYPE];
      if (cmd === SWITCH_ACK) {
        this.upgradeIfSecondaryHealthy_();
      } else if (cmd === CONTROL_RESET) {
        this.log_("Got a reset on secondary, closing it");
        this.secondaryConn_.close();
        if (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) {
          this.close();
        }
      } else if (cmd === CONTROL_PONG) {
        this.log_("got pong on secondary.");
        this.secondaryResponsesRequired_--;
        this.upgradeIfSecondaryHealthy_();
      }
    }
  }
  onSecondaryMessageReceived_(parsedData) {
    const layer = requireKey("t", parsedData);
    const data = requireKey("d", parsedData);
    if (layer === "c") {
      this.onSecondaryControl_(data);
    } else if (layer === "d") {
      this.pendingDataMessages.push(data);
    } else {
      throw new Error("Unknown protocol layer: " + layer);
    }
  }
  upgradeIfSecondaryHealthy_() {
    if (this.secondaryResponsesRequired_ <= 0) {
      this.log_("Secondary connection is healthy.");
      this.isHealthy_ = true;
      this.secondaryConn_.markConnectionHealthy();
      this.proceedWithUpgrade_();
    } else {
      this.log_("sending ping on secondary.");
      this.secondaryConn_.send({ t: "c", d: { t: PING, d: {} } });
    }
  }
  proceedWithUpgrade_() {
    this.secondaryConn_.start();
    this.log_("sending client ack on secondary");
    this.secondaryConn_.send({ t: "c", d: { t: SWITCH_ACK, d: {} } });
    this.log_("Ending transmission on primary");
    this.conn_.send({ t: "c", d: { t: END_TRANSMISSION, d: {} } });
    this.tx_ = this.secondaryConn_;
    this.tryCleanupConnection();
  }
  onPrimaryMessageReceived_(parsedData) {
    const layer = requireKey("t", parsedData);
    const data = requireKey("d", parsedData);
    if (layer === "c") {
      this.onControl_(data);
    } else if (layer === "d") {
      this.onDataMessage_(data);
    }
  }
  onDataMessage_(message) {
    this.onPrimaryResponse_();
    this.onMessage_(message);
  }
  onPrimaryResponse_() {
    if (!this.isHealthy_) {
      this.primaryResponsesRequired_--;
      if (this.primaryResponsesRequired_ <= 0) {
        this.log_("Primary connection is healthy.");
        this.isHealthy_ = true;
        this.conn_.markConnectionHealthy();
      }
    }
  }
  onControl_(controlData) {
    const cmd = requireKey(MESSAGE_TYPE, controlData);
    if (MESSAGE_DATA in controlData) {
      const payload = controlData[MESSAGE_DATA];
      if (cmd === SERVER_HELLO) {
        this.onHandshake_(payload);
      } else if (cmd === END_TRANSMISSION) {
        this.log_("recvd end transmission on primary");
        this.rx_ = this.secondaryConn_;
        for (let i = 0; i < this.pendingDataMessages.length; ++i) {
          this.onDataMessage_(this.pendingDataMessages[i]);
        }
        this.pendingDataMessages = [];
        this.tryCleanupConnection();
      } else if (cmd === CONTROL_SHUTDOWN) {
        this.onConnectionShutdown_(payload);
      } else if (cmd === CONTROL_RESET) {
        this.onReset_(payload);
      } else if (cmd === CONTROL_ERROR) {
        error("Server Error: " + payload);
      } else if (cmd === CONTROL_PONG) {
        this.log_("got pong on primary.");
        this.onPrimaryResponse_();
        this.sendPingOnPrimaryIfNecessary_();
      } else {
        error("Unknown control packet command: " + cmd);
      }
    }
  }
  onHandshake_(handshake) {
    const timestamp = handshake.ts;
    const version6 = handshake.v;
    const host = handshake.h;
    this.sessionId = handshake.s;
    this.repoInfo_.host = host;
    if (this.state_ === 0) {
      this.conn_.start();
      this.onConnectionEstablished_(this.conn_, timestamp);
      if (PROTOCOL_VERSION !== version6) {
        warn("Protocol version mismatch detected");
      }
      this.tryStartUpgrade_();
    }
  }
  tryStartUpgrade_() {
    const conn = this.transportManager_.upgradeTransport();
    if (conn) {
      this.startUpgrade_(conn);
    }
  }
  startUpgrade_(conn) {
    this.secondaryConn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId);
    this.secondaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
    const onMessage = this.connReceiver_(this.secondaryConn_);
    const onDisconnect = this.disconnReceiver_(this.secondaryConn_);
    this.secondaryConn_.open(onMessage, onDisconnect);
    setTimeoutNonBlocking(() => {
      if (this.secondaryConn_) {
        this.log_("Timed out trying to upgrade.");
        this.secondaryConn_.close();
      }
    }, Math.floor(UPGRADE_TIMEOUT));
  }
  onReset_(host) {
    this.log_("Reset packet received.  New host: " + host);
    this.repoInfo_.host = host;
    if (this.state_ === 1) {
      this.close();
    } else {
      this.closeConnections_();
      this.start_();
    }
  }
  onConnectionEstablished_(conn, timestamp) {
    this.log_("Realtime connection established.");
    this.conn_ = conn;
    this.state_ = 1;
    if (this.onReady_) {
      this.onReady_(timestamp, this.sessionId);
      this.onReady_ = null;
    }
    if (this.primaryResponsesRequired_ === 0) {
      this.log_("Primary connection is healthy.");
      this.isHealthy_ = true;
    } else {
      setTimeoutNonBlocking(() => {
        this.sendPingOnPrimaryIfNecessary_();
      }, Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS));
    }
  }
  sendPingOnPrimaryIfNecessary_() {
    if (!this.isHealthy_ && this.state_ === 1) {
      this.log_("sending ping on primary.");
      this.sendData_({ t: "c", d: { t: PING, d: {} } });
    }
  }
  onSecondaryConnectionLost_() {
    const conn = this.secondaryConn_;
    this.secondaryConn_ = null;
    if (this.tx_ === conn || this.rx_ === conn) {
      this.close();
    }
  }
  onConnectionLost_(everConnected) {
    this.conn_ = null;
    if (!everConnected && this.state_ === 0) {
      this.log_("Realtime connection failed.");
      if (this.repoInfo_.isCacheableHost()) {
        PersistentStorage.remove("host:" + this.repoInfo_.host);
        this.repoInfo_.internalHost = this.repoInfo_.host;
      }
    } else if (this.state_ === 1) {
      this.log_("Realtime connection lost.");
    }
    this.close();
  }
  onConnectionShutdown_(reason) {
    this.log_("Connection shutdown command received. Shutting down...");
    if (this.onKill_) {
      this.onKill_(reason);
      this.onKill_ = null;
    }
    this.onDisconnect_ = null;
    this.close();
  }
  sendData_(data) {
    if (this.state_ !== 1) {
      throw "Connection is not connected";
    } else {
      this.tx_.send(data);
    }
  }
  close() {
    if (this.state_ !== 2) {
      this.log_("Closing realtime connection.");
      this.state_ = 2;
      this.closeConnections_();
      if (this.onDisconnect_) {
        this.onDisconnect_();
        this.onDisconnect_ = null;
      }
    }
  }
  closeConnections_() {
    this.log_("Shutting down all connections");
    if (this.conn_) {
      this.conn_.close();
      this.conn_ = null;
    }
    if (this.secondaryConn_) {
      this.secondaryConn_.close();
      this.secondaryConn_ = null;
    }
    if (this.healthyTimeout_) {
      clearTimeout(this.healthyTimeout_);
      this.healthyTimeout_ = null;
    }
  }
};
var ServerActions = class {
  put(pathString, data, onComplete, hash) {
  }
  merge(pathString, data, onComplete, hash) {
  }
  refreshAuthToken(token) {
  }
  refreshAppCheckToken(token) {
  }
  onDisconnectPut(pathString, data, onComplete) {
  }
  onDisconnectMerge(pathString, data, onComplete) {
  }
  onDisconnectCancel(pathString, onComplete) {
  }
  reportStats(stats) {
  }
};
var EventEmitter = class {
  constructor(allowedEvents_) {
    this.allowedEvents_ = allowedEvents_;
    this.listeners_ = {};
    assert(Array.isArray(allowedEvents_) && allowedEvents_.length > 0, "Requires a non-empty array");
  }
  trigger(eventType, ...varArgs) {
    if (Array.isArray(this.listeners_[eventType])) {
      const listeners = [...this.listeners_[eventType]];
      for (let i = 0; i < listeners.length; i++) {
        listeners[i].callback.apply(listeners[i].context, varArgs);
      }
    }
  }
  on(eventType, callback, context) {
    this.validateEventType_(eventType);
    this.listeners_[eventType] = this.listeners_[eventType] || [];
    this.listeners_[eventType].push({ callback, context });
    const eventData = this.getInitialEvent(eventType);
    if (eventData) {
      callback.apply(context, eventData);
    }
  }
  off(eventType, callback, context) {
    this.validateEventType_(eventType);
    const listeners = this.listeners_[eventType] || [];
    for (let i = 0; i < listeners.length; i++) {
      if (listeners[i].callback === callback && (!context || context === listeners[i].context)) {
        listeners.splice(i, 1);
        return;
      }
    }
  }
  validateEventType_(eventType) {
    assert(this.allowedEvents_.find((et3) => {
      return et3 === eventType;
    }), "Unknown event: " + eventType);
  }
};
var OnlineMonitor = class extends EventEmitter {
  constructor() {
    super(["online"]);
    this.online_ = true;
    if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined" && !isMobileCordova()) {
      window.addEventListener("online", () => {
        if (!this.online_) {
          this.online_ = true;
          this.trigger("online", true);
        }
      }, false);
      window.addEventListener("offline", () => {
        if (this.online_) {
          this.online_ = false;
          this.trigger("online", false);
        }
      }, false);
    }
  }
  static getInstance() {
    return new OnlineMonitor();
  }
  getInitialEvent(eventType) {
    assert(eventType === "online", "Unknown event type: " + eventType);
    return [this.online_];
  }
  currentlyOnline() {
    return this.online_;
  }
};
var MAX_PATH_DEPTH = 32;
var MAX_PATH_LENGTH_BYTES = 768;
var Path = class {
  constructor(pathOrString, pieceNum) {
    if (pieceNum === void 0) {
      this.pieces_ = pathOrString.split("/");
      let copyTo = 0;
      for (let i = 0; i < this.pieces_.length; i++) {
        if (this.pieces_[i].length > 0) {
          this.pieces_[copyTo] = this.pieces_[i];
          copyTo++;
        }
      }
      this.pieces_.length = copyTo;
      this.pieceNum_ = 0;
    } else {
      this.pieces_ = pathOrString;
      this.pieceNum_ = pieceNum;
    }
  }
  toString() {
    let pathString = "";
    for (let i = this.pieceNum_; i < this.pieces_.length; i++) {
      if (this.pieces_[i] !== "") {
        pathString += "/" + this.pieces_[i];
      }
    }
    return pathString || "/";
  }
};
function newEmptyPath() {
  return new Path("");
}
function pathGetFront(path) {
  if (path.pieceNum_ >= path.pieces_.length) {
    return null;
  }
  return path.pieces_[path.pieceNum_];
}
function pathGetLength(path) {
  return path.pieces_.length - path.pieceNum_;
}
function pathPopFront(path) {
  let pieceNum = path.pieceNum_;
  if (pieceNum < path.pieces_.length) {
    pieceNum++;
  }
  return new Path(path.pieces_, pieceNum);
}
function pathGetBack(path) {
  if (path.pieceNum_ < path.pieces_.length) {
    return path.pieces_[path.pieces_.length - 1];
  }
  return null;
}
function pathToUrlEncodedString(path) {
  let pathString = "";
  for (let i = path.pieceNum_; i < path.pieces_.length; i++) {
    if (path.pieces_[i] !== "") {
      pathString += "/" + encodeURIComponent(String(path.pieces_[i]));
    }
  }
  return pathString || "/";
}
function pathSlice(path, begin = 0) {
  return path.pieces_.slice(path.pieceNum_ + begin);
}
function pathParent(path) {
  if (path.pieceNum_ >= path.pieces_.length) {
    return null;
  }
  const pieces = [];
  for (let i = path.pieceNum_; i < path.pieces_.length - 1; i++) {
    pieces.push(path.pieces_[i]);
  }
  return new Path(pieces, 0);
}
function pathChild(path, childPathObj) {
  const pieces = [];
  for (let i = path.pieceNum_; i < path.pieces_.length; i++) {
    pieces.push(path.pieces_[i]);
  }
  if (childPathObj instanceof Path) {
    for (let i = childPathObj.pieceNum_; i < childPathObj.pieces_.length; i++) {
      pieces.push(childPathObj.pieces_[i]);
    }
  } else {
    const childPieces = childPathObj.split("/");
    for (let i = 0; i < childPieces.length; i++) {
      if (childPieces[i].length > 0) {
        pieces.push(childPieces[i]);
      }
    }
  }
  return new Path(pieces, 0);
}
function pathIsEmpty(path) {
  return path.pieceNum_ >= path.pieces_.length;
}
function newRelativePath(outerPath, innerPath) {
  const outer = pathGetFront(outerPath), inner = pathGetFront(innerPath);
  if (outer === null) {
    return innerPath;
  } else if (outer === inner) {
    return newRelativePath(pathPopFront(outerPath), pathPopFront(innerPath));
  } else {
    throw new Error("INTERNAL ERROR: innerPath (" + innerPath + ") is not within outerPath (" + outerPath + ")");
  }
}
function pathEquals(path, other) {
  if (pathGetLength(path) !== pathGetLength(other)) {
    return false;
  }
  for (let i = path.pieceNum_, j2 = other.pieceNum_; i <= path.pieces_.length; i++, j2++) {
    if (path.pieces_[i] !== other.pieces_[j2]) {
      return false;
    }
  }
  return true;
}
function pathContains(path, other) {
  let i = path.pieceNum_;
  let j2 = other.pieceNum_;
  if (pathGetLength(path) > pathGetLength(other)) {
    return false;
  }
  while (i < path.pieces_.length) {
    if (path.pieces_[i] !== other.pieces_[j2]) {
      return false;
    }
    ++i;
    ++j2;
  }
  return true;
}
var ValidationPath = class {
  constructor(path, errorPrefix_) {
    this.errorPrefix_ = errorPrefix_;
    this.parts_ = pathSlice(path, 0);
    this.byteLength_ = Math.max(1, this.parts_.length);
    for (let i = 0; i < this.parts_.length; i++) {
      this.byteLength_ += stringLength(this.parts_[i]);
    }
    validationPathCheckValid(this);
  }
};
function validationPathPush(validationPath, child2) {
  if (validationPath.parts_.length > 0) {
    validationPath.byteLength_ += 1;
  }
  validationPath.parts_.push(child2);
  validationPath.byteLength_ += stringLength(child2);
  validationPathCheckValid(validationPath);
}
function validationPathPop(validationPath) {
  const last = validationPath.parts_.pop();
  validationPath.byteLength_ -= stringLength(last);
  if (validationPath.parts_.length > 0) {
    validationPath.byteLength_ -= 1;
  }
}
function validationPathCheckValid(validationPath) {
  if (validationPath.byteLength_ > MAX_PATH_LENGTH_BYTES) {
    throw new Error(validationPath.errorPrefix_ + "has a key path longer than " + MAX_PATH_LENGTH_BYTES + " bytes (" + validationPath.byteLength_ + ").");
  }
  if (validationPath.parts_.length > MAX_PATH_DEPTH) {
    throw new Error(validationPath.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + MAX_PATH_DEPTH + ") or object contains a cycle " + validationPathToErrorString(validationPath));
  }
}
function validationPathToErrorString(validationPath) {
  if (validationPath.parts_.length === 0) {
    return "";
  }
  return "in property '" + validationPath.parts_.join(".") + "'";
}
var VisibilityMonitor = class extends EventEmitter {
  constructor() {
    super(["visible"]);
    let hidden;
    let visibilityChange;
    if (typeof document !== "undefined" && typeof document.addEventListener !== "undefined") {
      if (typeof document["hidden"] !== "undefined") {
        visibilityChange = "visibilitychange";
        hidden = "hidden";
      } else if (typeof document["mozHidden"] !== "undefined") {
        visibilityChange = "mozvisibilitychange";
        hidden = "mozHidden";
      } else if (typeof document["msHidden"] !== "undefined") {
        visibilityChange = "msvisibilitychange";
        hidden = "msHidden";
      } else if (typeof document["webkitHidden"] !== "undefined") {
        visibilityChange = "webkitvisibilitychange";
        hidden = "webkitHidden";
      }
    }
    this.visible_ = true;
    if (visibilityChange) {
      document.addEventListener(visibilityChange, () => {
        const visible = !document[hidden];
        if (visible !== this.visible_) {
          this.visible_ = visible;
          this.trigger("visible", visible);
        }
      }, false);
    }
  }
  static getInstance() {
    return new VisibilityMonitor();
  }
  getInitialEvent(eventType) {
    assert(eventType === "visible", "Unknown event type: " + eventType);
    return [this.visible_];
  }
};
var RECONNECT_MIN_DELAY = 1e3;
var RECONNECT_MAX_DELAY_DEFAULT = 60 * 5 * 1e3;
var RECONNECT_MAX_DELAY_FOR_ADMINS = 30 * 1e3;
var RECONNECT_DELAY_MULTIPLIER = 1.3;
var RECONNECT_DELAY_RESET_TIMEOUT = 3e4;
var SERVER_KILL_INTERRUPT_REASON = "server_kill";
var INVALID_TOKEN_THRESHOLD = 3;
var PersistentConnection = class extends ServerActions {
  constructor(repoInfo_, applicationId_, onDataUpdate_, onConnectStatus_, onServerInfoUpdate_, authTokenProvider_, appCheckTokenProvider_, authOverride_) {
    super();
    this.repoInfo_ = repoInfo_;
    this.applicationId_ = applicationId_;
    this.onDataUpdate_ = onDataUpdate_;
    this.onConnectStatus_ = onConnectStatus_;
    this.onServerInfoUpdate_ = onServerInfoUpdate_;
    this.authTokenProvider_ = authTokenProvider_;
    this.appCheckTokenProvider_ = appCheckTokenProvider_;
    this.authOverride_ = authOverride_;
    this.id = PersistentConnection.nextPersistentConnectionId_++;
    this.log_ = logWrapper("p:" + this.id + ":");
    this.interruptReasons_ = {};
    this.listens = /* @__PURE__ */ new Map();
    this.outstandingPuts_ = [];
    this.outstandingGets_ = [];
    this.outstandingPutCount_ = 0;
    this.outstandingGetCount_ = 0;
    this.onDisconnectRequestQueue_ = [];
    this.connected_ = false;
    this.reconnectDelay_ = RECONNECT_MIN_DELAY;
    this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_DEFAULT;
    this.securityDebugCallback_ = null;
    this.lastSessionId = null;
    this.establishConnectionTimer_ = null;
    this.visible_ = false;
    this.requestCBHash_ = {};
    this.requestNumber_ = 0;
    this.realtime_ = null;
    this.authToken_ = null;
    this.appCheckToken_ = null;
    this.forceTokenRefresh_ = false;
    this.invalidAuthTokenCount_ = 0;
    this.invalidAppCheckTokenCount_ = 0;
    this.firstConnection_ = true;
    this.lastConnectionAttemptTime_ = null;
    this.lastConnectionEstablishedTime_ = null;
    if (authOverride_ && !isNodeSdk()) {
      throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
    }
    VisibilityMonitor.getInstance().on("visible", this.onVisible_, this);
    if (repoInfo_.host.indexOf("fblocal") === -1) {
      OnlineMonitor.getInstance().on("online", this.onOnline_, this);
    }
  }
  sendRequest(action, body, onResponse) {
    const curReqNum = ++this.requestNumber_;
    const msg = { r: curReqNum, a: action, b: body };
    this.log_(stringify(msg));
    assert(this.connected_, "sendRequest call when we're not connected not allowed.");
    this.realtime_.sendRequest(msg);
    if (onResponse) {
      this.requestCBHash_[curReqNum] = onResponse;
    }
  }
  get(query) {
    this.initConnection_();
    const deferred = new Deferred();
    const request = {
      p: query._path.toString(),
      q: query._queryObject
    };
    const outstandingGet = {
      action: "g",
      request,
      onComplete: (message) => {
        const payload = message["d"];
        if (message["s"] === "ok") {
          deferred.resolve(payload);
        } else {
          deferred.reject(payload);
        }
      }
    };
    this.outstandingGets_.push(outstandingGet);
    this.outstandingGetCount_++;
    const index = this.outstandingGets_.length - 1;
    if (this.connected_) {
      this.sendGet_(index);
    }
    return deferred.promise;
  }
  listen(query, currentHashFn, tag, onComplete) {
    this.initConnection_();
    const queryId = query._queryIdentifier;
    const pathString = query._path.toString();
    this.log_("Listen called for " + pathString + " " + queryId);
    if (!this.listens.has(pathString)) {
      this.listens.set(pathString, /* @__PURE__ */ new Map());
    }
    assert(query._queryParams.isDefault() || !query._queryParams.loadsAllData(), "listen() called for non-default but complete query");
    assert(!this.listens.get(pathString).has(queryId), `listen() called twice for same path/queryId.`);
    const listenSpec = {
      onComplete,
      hashFn: currentHashFn,
      query,
      tag
    };
    this.listens.get(pathString).set(queryId, listenSpec);
    if (this.connected_) {
      this.sendListen_(listenSpec);
    }
  }
  sendGet_(index) {
    const get2 = this.outstandingGets_[index];
    this.sendRequest("g", get2.request, (message) => {
      delete this.outstandingGets_[index];
      this.outstandingGetCount_--;
      if (this.outstandingGetCount_ === 0) {
        this.outstandingGets_ = [];
      }
      if (get2.onComplete) {
        get2.onComplete(message);
      }
    });
  }
  sendListen_(listenSpec) {
    const query = listenSpec.query;
    const pathString = query._path.toString();
    const queryId = query._queryIdentifier;
    this.log_("Listen on " + pathString + " for " + queryId);
    const req = { p: pathString };
    const action = "q";
    if (listenSpec.tag) {
      req["q"] = query._queryObject;
      req["t"] = listenSpec.tag;
    }
    req["h"] = listenSpec.hashFn();
    this.sendRequest(action, req, (message) => {
      const payload = message["d"];
      const status = message["s"];
      PersistentConnection.warnOnListenWarnings_(payload, query);
      const currentListenSpec = this.listens.get(pathString) && this.listens.get(pathString).get(queryId);
      if (currentListenSpec === listenSpec) {
        this.log_("listen response", message);
        if (status !== "ok") {
          this.removeListen_(pathString, queryId);
        }
        if (listenSpec.onComplete) {
          listenSpec.onComplete(status, payload);
        }
      }
    });
  }
  static warnOnListenWarnings_(payload, query) {
    if (payload && typeof payload === "object" && contains(payload, "w")) {
      const warnings = safeGet(payload, "w");
      if (Array.isArray(warnings) && ~warnings.indexOf("no_index")) {
        const indexSpec = '".indexOn": "' + query._queryParams.getIndex().toString() + '"';
        const indexPath = query._path.toString();
        warn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${indexSpec} at ${indexPath} to your security rules for better performance.`);
      }
    }
  }
  refreshAuthToken(token) {
    this.authToken_ = token;
    this.log_("Auth token refreshed");
    if (this.authToken_) {
      this.tryAuth();
    } else {
      if (this.connected_) {
        this.sendRequest("unauth", {}, () => {
        });
      }
    }
    this.reduceReconnectDelayIfAdminCredential_(token);
  }
  reduceReconnectDelayIfAdminCredential_(credential) {
    const isFirebaseSecret = credential && credential.length === 40;
    if (isFirebaseSecret || isAdmin(credential)) {
      this.log_("Admin auth credential detected.  Reducing max reconnect time.");
      this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
    }
  }
  refreshAppCheckToken(token) {
    this.appCheckToken_ = token;
    this.log_("App check token refreshed");
    if (this.appCheckToken_) {
      this.tryAppCheck();
    } else {
      if (this.connected_) {
        this.sendRequest("unappeck", {}, () => {
        });
      }
    }
  }
  tryAuth() {
    if (this.connected_ && this.authToken_) {
      const token = this.authToken_;
      const authMethod = isValidFormat(token) ? "auth" : "gauth";
      const requestData = { cred: token };
      if (this.authOverride_ === null) {
        requestData["noauth"] = true;
      } else if (typeof this.authOverride_ === "object") {
        requestData["authvar"] = this.authOverride_;
      }
      this.sendRequest(authMethod, requestData, (res) => {
        const status = res["s"];
        const data = res["d"] || "error";
        if (this.authToken_ === token) {
          if (status === "ok") {
            this.invalidAuthTokenCount_ = 0;
          } else {
            this.onAuthRevoked_(status, data);
          }
        }
      });
    }
  }
  tryAppCheck() {
    if (this.connected_ && this.appCheckToken_) {
      this.sendRequest("appcheck", { "token": this.appCheckToken_ }, (res) => {
        const status = res["s"];
        const data = res["d"] || "error";
        if (status === "ok") {
          this.invalidAppCheckTokenCount_ = 0;
        } else {
          this.onAppCheckRevoked_(status, data);
        }
      });
    }
  }
  unlisten(query, tag) {
    const pathString = query._path.toString();
    const queryId = query._queryIdentifier;
    this.log_("Unlisten called for " + pathString + " " + queryId);
    assert(query._queryParams.isDefault() || !query._queryParams.loadsAllData(), "unlisten() called for non-default but complete query");
    const listen = this.removeListen_(pathString, queryId);
    if (listen && this.connected_) {
      this.sendUnlisten_(pathString, queryId, query._queryObject, tag);
    }
  }
  sendUnlisten_(pathString, queryId, queryObj, tag) {
    this.log_("Unlisten on " + pathString + " for " + queryId);
    const req = { p: pathString };
    const action = "n";
    if (tag) {
      req["q"] = queryObj;
      req["t"] = tag;
    }
    this.sendRequest(action, req);
  }
  onDisconnectPut(pathString, data, onComplete) {
    this.initConnection_();
    if (this.connected_) {
      this.sendOnDisconnect_("o", pathString, data, onComplete);
    } else {
      this.onDisconnectRequestQueue_.push({
        pathString,
        action: "o",
        data,
        onComplete
      });
    }
  }
  onDisconnectMerge(pathString, data, onComplete) {
    this.initConnection_();
    if (this.connected_) {
      this.sendOnDisconnect_("om", pathString, data, onComplete);
    } else {
      this.onDisconnectRequestQueue_.push({
        pathString,
        action: "om",
        data,
        onComplete
      });
    }
  }
  onDisconnectCancel(pathString, onComplete) {
    this.initConnection_();
    if (this.connected_) {
      this.sendOnDisconnect_("oc", pathString, null, onComplete);
    } else {
      this.onDisconnectRequestQueue_.push({
        pathString,
        action: "oc",
        data: null,
        onComplete
      });
    }
  }
  sendOnDisconnect_(action, pathString, data, onComplete) {
    const request = { p: pathString, d: data };
    this.log_("onDisconnect " + action, request);
    this.sendRequest(action, request, (response) => {
      if (onComplete) {
        setTimeout(() => {
          onComplete(response["s"], response["d"]);
        }, Math.floor(0));
      }
    });
  }
  put(pathString, data, onComplete, hash) {
    this.putInternal("p", pathString, data, onComplete, hash);
  }
  merge(pathString, data, onComplete, hash) {
    this.putInternal("m", pathString, data, onComplete, hash);
  }
  putInternal(action, pathString, data, onComplete, hash) {
    this.initConnection_();
    const request = {
      p: pathString,
      d: data
    };
    if (hash !== void 0) {
      request["h"] = hash;
    }
    this.outstandingPuts_.push({
      action,
      request,
      onComplete
    });
    this.outstandingPutCount_++;
    const index = this.outstandingPuts_.length - 1;
    if (this.connected_) {
      this.sendPut_(index);
    } else {
      this.log_("Buffering put: " + pathString);
    }
  }
  sendPut_(index) {
    const action = this.outstandingPuts_[index].action;
    const request = this.outstandingPuts_[index].request;
    const onComplete = this.outstandingPuts_[index].onComplete;
    this.outstandingPuts_[index].queued = this.connected_;
    this.sendRequest(action, request, (message) => {
      this.log_(action + " response", message);
      delete this.outstandingPuts_[index];
      this.outstandingPutCount_--;
      if (this.outstandingPutCount_ === 0) {
        this.outstandingPuts_ = [];
      }
      if (onComplete) {
        onComplete(message["s"], message["d"]);
      }
    });
  }
  reportStats(stats) {
    if (this.connected_) {
      const request = { c: stats };
      this.log_("reportStats", request);
      this.sendRequest("s", request, (result) => {
        const status = result["s"];
        if (status !== "ok") {
          const errorReason = result["d"];
          this.log_("reportStats", "Error sending stats: " + errorReason);
        }
      });
    }
  }
  onDataMessage_(message) {
    if ("r" in message) {
      this.log_("from server: " + stringify(message));
      const reqNum = message["r"];
      const onResponse = this.requestCBHash_[reqNum];
      if (onResponse) {
        delete this.requestCBHash_[reqNum];
        onResponse(message["b"]);
      }
    } else if ("error" in message) {
      throw "A server-side error has occurred: " + message["error"];
    } else if ("a" in message) {
      this.onDataPush_(message["a"], message["b"]);
    }
  }
  onDataPush_(action, body) {
    this.log_("handleServerMessage", action, body);
    if (action === "d") {
      this.onDataUpdate_(
        body["p"],
        body["d"],
        false,
        body["t"]
      );
    } else if (action === "m") {
      this.onDataUpdate_(
        body["p"],
        body["d"],
        true,
        body["t"]
      );
    } else if (action === "c") {
      this.onListenRevoked_(body["p"], body["q"]);
    } else if (action === "ac") {
      this.onAuthRevoked_(body["s"], body["d"]);
    } else if (action === "apc") {
      this.onAppCheckRevoked_(body["s"], body["d"]);
    } else if (action === "sd") {
      this.onSecurityDebugPacket_(body);
    } else {
      error("Unrecognized action received from server: " + stringify(action) + "\nAre you using the latest client?");
    }
  }
  onReady_(timestamp, sessionId) {
    this.log_("connection ready");
    this.connected_ = true;
    this.lastConnectionEstablishedTime_ = new Date().getTime();
    this.handleTimestamp_(timestamp);
    this.lastSessionId = sessionId;
    if (this.firstConnection_) {
      this.sendConnectStats_();
    }
    this.restoreState_();
    this.firstConnection_ = false;
    this.onConnectStatus_(true);
  }
  scheduleConnect_(timeout) {
    assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?");
    if (this.establishConnectionTimer_) {
      clearTimeout(this.establishConnectionTimer_);
    }
    this.establishConnectionTimer_ = setTimeout(() => {
      this.establishConnectionTimer_ = null;
      this.establishConnection_();
    }, Math.floor(timeout));
  }
  initConnection_() {
    if (!this.realtime_ && this.firstConnection_) {
      this.scheduleConnect_(0);
    }
  }
  onVisible_(visible) {
    if (visible && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_) {
      this.log_("Window became visible.  Reducing delay.");
      this.reconnectDelay_ = RECONNECT_MIN_DELAY;
      if (!this.realtime_) {
        this.scheduleConnect_(0);
      }
    }
    this.visible_ = visible;
  }
  onOnline_(online) {
    if (online) {
      this.log_("Browser went online.");
      this.reconnectDelay_ = RECONNECT_MIN_DELAY;
      if (!this.realtime_) {
        this.scheduleConnect_(0);
      }
    } else {
      this.log_("Browser went offline.  Killing connection.");
      if (this.realtime_) {
        this.realtime_.close();
      }
    }
  }
  onRealtimeDisconnect_() {
    this.log_("data client disconnected");
    this.connected_ = false;
    this.realtime_ = null;
    this.cancelSentTransactions_();
    this.requestCBHash_ = {};
    if (this.shouldReconnect_()) {
      if (!this.visible_) {
        this.log_("Window isn't visible.  Delaying reconnect.");
        this.reconnectDelay_ = this.maxReconnectDelay_;
        this.lastConnectionAttemptTime_ = new Date().getTime();
      } else if (this.lastConnectionEstablishedTime_) {
        const timeSinceLastConnectSucceeded = new Date().getTime() - this.lastConnectionEstablishedTime_;
        if (timeSinceLastConnectSucceeded > RECONNECT_DELAY_RESET_TIMEOUT) {
          this.reconnectDelay_ = RECONNECT_MIN_DELAY;
        }
        this.lastConnectionEstablishedTime_ = null;
      }
      const timeSinceLastConnectAttempt = new Date().getTime() - this.lastConnectionAttemptTime_;
      let reconnectDelay = Math.max(0, this.reconnectDelay_ - timeSinceLastConnectAttempt);
      reconnectDelay = Math.random() * reconnectDelay;
      this.log_("Trying to reconnect in " + reconnectDelay + "ms");
      this.scheduleConnect_(reconnectDelay);
      this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * RECONNECT_DELAY_MULTIPLIER);
    }
    this.onConnectStatus_(false);
  }
  async establishConnection_() {
    if (this.shouldReconnect_()) {
      this.log_("Making a connection attempt");
      this.lastConnectionAttemptTime_ = new Date().getTime();
      this.lastConnectionEstablishedTime_ = null;
      const onDataMessage = this.onDataMessage_.bind(this);
      const onReady = this.onReady_.bind(this);
      const onDisconnect = this.onRealtimeDisconnect_.bind(this);
      const connId = this.id + ":" + PersistentConnection.nextConnectionId_++;
      const lastSessionId = this.lastSessionId;
      let canceled = false;
      let connection = null;
      const closeFn = function() {
        if (connection) {
          connection.close();
        } else {
          canceled = true;
          onDisconnect();
        }
      };
      const sendRequestFn = function(msg) {
        assert(connection, "sendRequest call when we're not connected not allowed.");
        connection.sendRequest(msg);
      };
      this.realtime_ = {
        close: closeFn,
        sendRequest: sendRequestFn
      };
      const forceRefresh = this.forceTokenRefresh_;
      this.forceTokenRefresh_ = false;
      try {
        const [authToken, appCheckToken] = await Promise.all([
          this.authTokenProvider_.getToken(forceRefresh),
          this.appCheckTokenProvider_.getToken(forceRefresh)
        ]);
        if (!canceled) {
          log("getToken() completed. Creating connection.");
          this.authToken_ = authToken && authToken.accessToken;
          this.appCheckToken_ = appCheckToken && appCheckToken.token;
          connection = new Connection(
            connId,
            this.repoInfo_,
            this.applicationId_,
            this.appCheckToken_,
            this.authToken_,
            onDataMessage,
            onReady,
            onDisconnect,
            (reason) => {
              warn(reason + " (" + this.repoInfo_.toString() + ")");
              this.interrupt(SERVER_KILL_INTERRUPT_REASON);
            },
            lastSessionId
          );
        } else {
          log("getToken() completed but was canceled");
        }
      } catch (error2) {
        this.log_("Failed to get token: " + error2);
        if (!canceled) {
          if (this.repoInfo_.nodeAdmin) {
            warn(error2);
          }
          closeFn();
        }
      }
    }
  }
  interrupt(reason) {
    log("Interrupting connection for reason: " + reason);
    this.interruptReasons_[reason] = true;
    if (this.realtime_) {
      this.realtime_.close();
    } else {
      if (this.establishConnectionTimer_) {
        clearTimeout(this.establishConnectionTimer_);
        this.establishConnectionTimer_ = null;
      }
      if (this.connected_) {
        this.onRealtimeDisconnect_();
      }
    }
  }
  resume(reason) {
    log("Resuming connection for reason: " + reason);
    delete this.interruptReasons_[reason];
    if (isEmpty(this.interruptReasons_)) {
      this.reconnectDelay_ = RECONNECT_MIN_DELAY;
      if (!this.realtime_) {
        this.scheduleConnect_(0);
      }
    }
  }
  handleTimestamp_(timestamp) {
    const delta = timestamp - new Date().getTime();
    this.onServerInfoUpdate_({ serverTimeOffset: delta });
  }
  cancelSentTransactions_() {
    for (let i = 0; i < this.outstandingPuts_.length; i++) {
      const put = this.outstandingPuts_[i];
      if (put && "h" in put.request && put.queued) {
        if (put.onComplete) {
          put.onComplete("disconnect");
        }
        delete this.outstandingPuts_[i];
        this.outstandingPutCount_--;
      }
    }
    if (this.outstandingPutCount_ === 0) {
      this.outstandingPuts_ = [];
    }
  }
  onListenRevoked_(pathString, query) {
    let queryId;
    if (!query) {
      queryId = "default";
    } else {
      queryId = query.map((q3) => ObjectToUniqueKey(q3)).join("$");
    }
    const listen = this.removeListen_(pathString, queryId);
    if (listen && listen.onComplete) {
      listen.onComplete("permission_denied");
    }
  }
  removeListen_(pathString, queryId) {
    const normalizedPathString = new Path(pathString).toString();
    let listen;
    if (this.listens.has(normalizedPathString)) {
      const map2 = this.listens.get(normalizedPathString);
      listen = map2.get(queryId);
      map2.delete(queryId);
      if (map2.size === 0) {
        this.listens.delete(normalizedPathString);
      }
    } else {
      listen = void 0;
    }
    return listen;
  }
  onAuthRevoked_(statusCode, explanation) {
    log("Auth token revoked: " + statusCode + "/" + explanation);
    this.authToken_ = null;
    this.forceTokenRefresh_ = true;
    this.realtime_.close();
    if (statusCode === "invalid_token" || statusCode === "permission_denied") {
      this.invalidAuthTokenCount_++;
      if (this.invalidAuthTokenCount_ >= INVALID_TOKEN_THRESHOLD) {
        this.reconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
        this.authTokenProvider_.notifyForInvalidToken();
      }
    }
  }
  onAppCheckRevoked_(statusCode, explanation) {
    log("App check token revoked: " + statusCode + "/" + explanation);
    this.appCheckToken_ = null;
    this.forceTokenRefresh_ = true;
    if (statusCode === "invalid_token" || statusCode === "permission_denied") {
      this.invalidAppCheckTokenCount_++;
      if (this.invalidAppCheckTokenCount_ >= INVALID_TOKEN_THRESHOLD) {
        this.appCheckTokenProvider_.notifyForInvalidToken();
      }
    }
  }
  onSecurityDebugPacket_(body) {
    if (this.securityDebugCallback_) {
      this.securityDebugCallback_(body);
    } else {
      if ("msg" in body) {
        console.log("FIREBASE: " + body["msg"].replace("\n", "\nFIREBASE: "));
      }
    }
  }
  restoreState_() {
    this.tryAuth();
    this.tryAppCheck();
    for (const queries of this.listens.values()) {
      for (const listenSpec of queries.values()) {
        this.sendListen_(listenSpec);
      }
    }
    for (let i = 0; i < this.outstandingPuts_.length; i++) {
      if (this.outstandingPuts_[i]) {
        this.sendPut_(i);
      }
    }
    while (this.onDisconnectRequestQueue_.length) {
      const request = this.onDisconnectRequestQueue_.shift();
      this.sendOnDisconnect_(request.action, request.pathString, request.data, request.onComplete);
    }
    for (let i = 0; i < this.outstandingGets_.length; i++) {
      if (this.outstandingGets_[i]) {
        this.sendGet_(i);
      }
    }
  }
  sendConnectStats_() {
    const stats = {};
    let clientName = "js";
    if (isNodeSdk()) {
      if (this.repoInfo_.nodeAdmin) {
        clientName = "admin_node";
      } else {
        clientName = "node";
      }
    }
    stats["sdk." + clientName + "." + SDK_VERSION2.replace(/\./g, "-")] = 1;
    if (isMobileCordova()) {
      stats["framework.cordova"] = 1;
    } else if (isReactNative()) {
      stats["framework.reactnative"] = 1;
    }
    this.reportStats(stats);
  }
  shouldReconnect_() {
    const online = OnlineMonitor.getInstance().currentlyOnline();
    return isEmpty(this.interruptReasons_) && online;
  }
};
PersistentConnection.nextPersistentConnectionId_ = 0;
PersistentConnection.nextConnectionId_ = 0;
var NamedNode = class {
  constructor(name5, node) {
    this.name = name5;
    this.node = node;
  }
  static Wrap(name5, node) {
    return new NamedNode(name5, node);
  }
};
var Index = class {
  getCompare() {
    return this.compare.bind(this);
  }
  indexedValueChanged(oldNode, newNode) {
    const oldWrapped = new NamedNode(MIN_NAME, oldNode);
    const newWrapped = new NamedNode(MIN_NAME, newNode);
    return this.compare(oldWrapped, newWrapped) !== 0;
  }
  minPost() {
    return NamedNode.MIN;
  }
};
var __EMPTY_NODE;
var KeyIndex = class extends Index {
  static get __EMPTY_NODE() {
    return __EMPTY_NODE;
  }
  static set __EMPTY_NODE(val) {
    __EMPTY_NODE = val;
  }
  compare(a, b3) {
    return nameCompare(a.name, b3.name);
  }
  isDefinedOn(node) {
    throw assertionError("KeyIndex.isDefinedOn not expected to be called.");
  }
  indexedValueChanged(oldNode, newNode) {
    return false;
  }
  minPost() {
    return NamedNode.MIN;
  }
  maxPost() {
    return new NamedNode(MAX_NAME, __EMPTY_NODE);
  }
  makePost(indexValue, name5) {
    assert(typeof indexValue === "string", "KeyIndex indexValue must always be a string.");
    return new NamedNode(indexValue, __EMPTY_NODE);
  }
  toString() {
    return ".key";
  }
};
var KEY_INDEX = new KeyIndex();
var SortedMapIterator = class {
  constructor(node, startKey, comparator, isReverse_, resultGenerator_ = null) {
    this.isReverse_ = isReverse_;
    this.resultGenerator_ = resultGenerator_;
    this.nodeStack_ = [];
    let cmp = 1;
    while (!node.isEmpty()) {
      node = node;
      cmp = startKey ? comparator(node.key, startKey) : 1;
      if (isReverse_) {
        cmp *= -1;
      }
      if (cmp < 0) {
        if (this.isReverse_) {
          node = node.left;
        } else {
          node = node.right;
        }
      } else if (cmp === 0) {
        this.nodeStack_.push(node);
        break;
      } else {
        this.nodeStack_.push(node);
        if (this.isReverse_) {
          node = node.right;
        } else {
          node = node.left;
        }
      }
    }
  }
  getNext() {
    if (this.nodeStack_.length === 0) {
      return null;
    }
    let node = this.nodeStack_.pop();
    let result;
    if (this.resultGenerator_) {
      result = this.resultGenerator_(node.key, node.value);
    } else {
      result = { key: node.key, value: node.value };
    }
    if (this.isReverse_) {
      node = node.left;
      while (!node.isEmpty()) {
        this.nodeStack_.push(node);
        node = node.right;
      }
    } else {
      node = node.right;
      while (!node.isEmpty()) {
        this.nodeStack_.push(node);
        node = node.left;
      }
    }
    return result;
  }
  hasNext() {
    return this.nodeStack_.length > 0;
  }
  peek() {
    if (this.nodeStack_.length === 0) {
      return null;
    }
    const node = this.nodeStack_[this.nodeStack_.length - 1];
    if (this.resultGenerator_) {
      return this.resultGenerator_(node.key, node.value);
    } else {
      return { key: node.key, value: node.value };
    }
  }
};
var LLRBNode = class {
  constructor(key, value, color, left, right) {
    this.key = key;
    this.value = value;
    this.color = color != null ? color : LLRBNode.RED;
    this.left = left != null ? left : SortedMap.EMPTY_NODE;
    this.right = right != null ? right : SortedMap.EMPTY_NODE;
  }
  copy(key, value, color, left, right) {
    return new LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
  }
  count() {
    return this.left.count() + 1 + this.right.count();
  }
  isEmpty() {
    return false;
  }
  inorderTraversal(action) {
    return this.left.inorderTraversal(action) || !!action(this.key, this.value) || this.right.inorderTraversal(action);
  }
  reverseTraversal(action) {
    return this.right.reverseTraversal(action) || action(this.key, this.value) || this.left.reverseTraversal(action);
  }
  min_() {
    if (this.left.isEmpty()) {
      return this;
    } else {
      return this.left.min_();
    }
  }
  minKey() {
    return this.min_().key;
  }
  maxKey() {
    if (this.right.isEmpty()) {
      return this.key;
    } else {
      return this.right.maxKey();
    }
  }
  insert(key, value, comparator) {
    let n = this;
    const cmp = comparator(key, n.key);
    if (cmp < 0) {
      n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
    } else if (cmp === 0) {
      n = n.copy(null, value, null, null, null);
    } else {
      n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
    }
    return n.fixUp_();
  }
  removeMin_() {
    if (this.left.isEmpty()) {
      return SortedMap.EMPTY_NODE;
    }
    let n = this;
    if (!n.left.isRed_() && !n.left.left.isRed_()) {
      n = n.moveRedLeft_();
    }
    n = n.copy(null, null, null, n.left.removeMin_(), null);
    return n.fixUp_();
  }
  remove(key, comparator) {
    let n, smallest;
    n = this;
    if (comparator(key, n.key) < 0) {
      if (!n.left.isEmpty() && !n.left.isRed_() && !n.left.left.isRed_()) {
        n = n.moveRedLeft_();
      }
      n = n.copy(null, null, null, n.left.remove(key, comparator), null);
    } else {
      if (n.left.isRed_()) {
        n = n.rotateRight_();
      }
      if (!n.right.isEmpty() && !n.right.isRed_() && !n.right.left.isRed_()) {
        n = n.moveRedRight_();
      }
      if (comparator(key, n.key) === 0) {
        if (n.right.isEmpty()) {
          return SortedMap.EMPTY_NODE;
        } else {
          smallest = n.right.min_();
          n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin_());
        }
      }
      n = n.copy(null, null, null, null, n.right.remove(key, comparator));
    }
    return n.fixUp_();
  }
  isRed_() {
    return this.color;
  }
  fixUp_() {
    let n = this;
    if (n.right.isRed_() && !n.left.isRed_()) {
      n = n.rotateLeft_();
    }
    if (n.left.isRed_() && n.left.left.isRed_()) {
      n = n.rotateRight_();
    }
    if (n.left.isRed_() && n.right.isRed_()) {
      n = n.colorFlip_();
    }
    return n;
  }
  moveRedLeft_() {
    let n = this.colorFlip_();
    if (n.right.left.isRed_()) {
      n = n.copy(null, null, null, null, n.right.rotateRight_());
      n = n.rotateLeft_();
      n = n.colorFlip_();
    }
    return n;
  }
  moveRedRight_() {
    let n = this.colorFlip_();
    if (n.left.left.isRed_()) {
      n = n.rotateRight_();
      n = n.colorFlip_();
    }
    return n;
  }
  rotateLeft_() {
    const nl = this.copy(null, null, LLRBNode.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, nl, null);
  }
  rotateRight_() {
    const nr3 = this.copy(null, null, LLRBNode.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, nr3);
  }
  colorFlip_() {
    const left = this.left.copy(null, null, !this.left.color, null, null);
    const right = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, left, right);
  }
  checkMaxDepth_() {
    const blackDepth = this.check_();
    return Math.pow(2, blackDepth) <= this.count() + 1;
  }
  check_() {
    if (this.isRed_() && this.left.isRed_()) {
      throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
    }
    if (this.right.isRed_()) {
      throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
    }
    const blackDepth = this.left.check_();
    if (blackDepth !== this.right.check_()) {
      throw new Error("Black depths differ");
    } else {
      return blackDepth + (this.isRed_() ? 0 : 1);
    }
  }
};
LLRBNode.RED = true;
LLRBNode.BLACK = false;
var LLRBEmptyNode = class {
  copy(key, value, color, left, right) {
    return this;
  }
  insert(key, value, comparator) {
    return new LLRBNode(key, value, null);
  }
  remove(key, comparator) {
    return this;
  }
  count() {
    return 0;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(action) {
    return false;
  }
  reverseTraversal(action) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  check_() {
    return 0;
  }
  isRed_() {
    return false;
  }
};
var SortedMap = class {
  constructor(comparator_, root_ = SortedMap.EMPTY_NODE) {
    this.comparator_ = comparator_;
    this.root_ = root_;
  }
  insert(key, value) {
    return new SortedMap(this.comparator_, this.root_.insert(key, value, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
  }
  remove(key) {
    return new SortedMap(this.comparator_, this.root_.remove(key, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
  }
  get(key) {
    let cmp;
    let node = this.root_;
    while (!node.isEmpty()) {
      cmp = this.comparator_(key, node.key);
      if (cmp === 0) {
        return node.value;
      } else if (cmp < 0) {
        node = node.left;
      } else if (cmp > 0) {
        node = node.right;
      }
    }
    return null;
  }
  getPredecessorKey(key) {
    let cmp, node = this.root_, rightParent = null;
    while (!node.isEmpty()) {
      cmp = this.comparator_(key, node.key);
      if (cmp === 0) {
        if (!node.left.isEmpty()) {
          node = node.left;
          while (!node.right.isEmpty()) {
            node = node.right;
          }
          return node.key;
        } else if (rightParent) {
          return rightParent.key;
        } else {
          return null;
        }
      } else if (cmp < 0) {
        node = node.left;
      } else if (cmp > 0) {
        rightParent = node;
        node = node.right;
      }
    }
    throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
  }
  isEmpty() {
    return this.root_.isEmpty();
  }
  count() {
    return this.root_.count();
  }
  minKey() {
    return this.root_.minKey();
  }
  maxKey() {
    return this.root_.maxKey();
  }
  inorderTraversal(action) {
    return this.root_.inorderTraversal(action);
  }
  reverseTraversal(action) {
    return this.root_.reverseTraversal(action);
  }
  getIterator(resultGenerator) {
    return new SortedMapIterator(this.root_, null, this.comparator_, false, resultGenerator);
  }
  getIteratorFrom(key, resultGenerator) {
    return new SortedMapIterator(this.root_, key, this.comparator_, false, resultGenerator);
  }
  getReverseIteratorFrom(key, resultGenerator) {
    return new SortedMapIterator(this.root_, key, this.comparator_, true, resultGenerator);
  }
  getReverseIterator(resultGenerator) {
    return new SortedMapIterator(this.root_, null, this.comparator_, true, resultGenerator);
  }
};
SortedMap.EMPTY_NODE = new LLRBEmptyNode();
function NAME_ONLY_COMPARATOR(left, right) {
  return nameCompare(left.name, right.name);
}
function NAME_COMPARATOR(left, right) {
  return nameCompare(left, right);
}
var MAX_NODE$2;
function setMaxNode$1(val) {
  MAX_NODE$2 = val;
}
var priorityHashText = function(priority) {
  if (typeof priority === "number") {
    return "number:" + doubleToIEEE754String(priority);
  } else {
    return "string:" + priority;
  }
};
var validatePriorityNode = function(priorityNode) {
  if (priorityNode.isLeafNode()) {
    const val = priorityNode.val();
    assert(typeof val === "string" || typeof val === "number" || typeof val === "object" && contains(val, ".sv"), "Priority must be a string or number.");
  } else {
    assert(priorityNode === MAX_NODE$2 || priorityNode.isEmpty(), "priority of unexpected type.");
  }
  assert(priorityNode === MAX_NODE$2 || priorityNode.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
};
var __childrenNodeConstructor;
var LeafNode = class {
  constructor(value_, priorityNode_ = LeafNode.__childrenNodeConstructor.EMPTY_NODE) {
    this.value_ = value_;
    this.priorityNode_ = priorityNode_;
    this.lazyHash_ = null;
    assert(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value.");
    validatePriorityNode(this.priorityNode_);
  }
  static set __childrenNodeConstructor(val) {
    __childrenNodeConstructor = val;
  }
  static get __childrenNodeConstructor() {
    return __childrenNodeConstructor;
  }
  isLeafNode() {
    return true;
  }
  getPriority() {
    return this.priorityNode_;
  }
  updatePriority(newPriorityNode) {
    return new LeafNode(this.value_, newPriorityNode);
  }
  getImmediateChild(childName) {
    if (childName === ".priority") {
      return this.priorityNode_;
    } else {
      return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
    }
  }
  getChild(path) {
    if (pathIsEmpty(path)) {
      return this;
    } else if (pathGetFront(path) === ".priority") {
      return this.priorityNode_;
    } else {
      return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
    }
  }
  hasChild() {
    return false;
  }
  getPredecessorChildName(childName, childNode) {
    return null;
  }
  updateImmediateChild(childName, newChildNode) {
    if (childName === ".priority") {
      return this.updatePriority(newChildNode);
    } else if (newChildNode.isEmpty() && childName !== ".priority") {
      return this;
    } else {
      return LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(childName, newChildNode).updatePriority(this.priorityNode_);
    }
  }
  updateChild(path, newChildNode) {
    const front = pathGetFront(path);
    if (front === null) {
      return newChildNode;
    } else if (newChildNode.isEmpty() && front !== ".priority") {
      return this;
    } else {
      assert(front !== ".priority" || pathGetLength(path) === 1, ".priority must be the last token in a path");
      return this.updateImmediateChild(front, LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(pathPopFront(path), newChildNode));
    }
  }
  isEmpty() {
    return false;
  }
  numChildren() {
    return 0;
  }
  forEachChild(index, action) {
    return false;
  }
  val(exportFormat) {
    if (exportFormat && !this.getPriority().isEmpty()) {
      return {
        ".value": this.getValue(),
        ".priority": this.getPriority().val()
      };
    } else {
      return this.getValue();
    }
  }
  hash() {
    if (this.lazyHash_ === null) {
      let toHash = "";
      if (!this.priorityNode_.isEmpty()) {
        toHash += "priority:" + priorityHashText(this.priorityNode_.val()) + ":";
      }
      const type = typeof this.value_;
      toHash += type + ":";
      if (type === "number") {
        toHash += doubleToIEEE754String(this.value_);
      } else {
        toHash += this.value_;
      }
      this.lazyHash_ = sha1(toHash);
    }
    return this.lazyHash_;
  }
  getValue() {
    return this.value_;
  }
  compareTo(other) {
    if (other === LeafNode.__childrenNodeConstructor.EMPTY_NODE) {
      return 1;
    } else if (other instanceof LeafNode.__childrenNodeConstructor) {
      return -1;
    } else {
      assert(other.isLeafNode(), "Unknown node type");
      return this.compareToLeafNode_(other);
    }
  }
  compareToLeafNode_(otherLeaf) {
    const otherLeafType = typeof otherLeaf.value_;
    const thisLeafType = typeof this.value_;
    const otherIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(otherLeafType);
    const thisIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(thisLeafType);
    assert(otherIndex >= 0, "Unknown leaf type: " + otherLeafType);
    assert(thisIndex >= 0, "Unknown leaf type: " + thisLeafType);
    if (otherIndex === thisIndex) {
      if (thisLeafType === "object") {
        return 0;
      } else {
        if (this.value_ < otherLeaf.value_) {
          return -1;
        } else if (this.value_ === otherLeaf.value_) {
          return 0;
        } else {
          return 1;
        }
      }
    } else {
      return thisIndex - otherIndex;
    }
  }
  withIndex() {
    return this;
  }
  isIndexed() {
    return true;
  }
  equals(other) {
    if (other === this) {
      return true;
    } else if (other.isLeafNode()) {
      const otherLeaf = other;
      return this.value_ === otherLeaf.value_ && this.priorityNode_.equals(otherLeaf.priorityNode_);
    } else {
      return false;
    }
  }
};
LeafNode.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
var nodeFromJSON$1;
var MAX_NODE$1;
function setNodeFromJSON(val) {
  nodeFromJSON$1 = val;
}
function setMaxNode(val) {
  MAX_NODE$1 = val;
}
var PriorityIndex = class extends Index {
  compare(a, b3) {
    const aPriority = a.node.getPriority();
    const bPriority = b3.node.getPriority();
    const indexCmp = aPriority.compareTo(bPriority);
    if (indexCmp === 0) {
      return nameCompare(a.name, b3.name);
    } else {
      return indexCmp;
    }
  }
  isDefinedOn(node) {
    return !node.getPriority().isEmpty();
  }
  indexedValueChanged(oldNode, newNode) {
    return !oldNode.getPriority().equals(newNode.getPriority());
  }
  minPost() {
    return NamedNode.MIN;
  }
  maxPost() {
    return new NamedNode(MAX_NAME, new LeafNode("[PRIORITY-POST]", MAX_NODE$1));
  }
  makePost(indexValue, name5) {
    const priorityNode = nodeFromJSON$1(indexValue);
    return new NamedNode(name5, new LeafNode("[PRIORITY-POST]", priorityNode));
  }
  toString() {
    return ".priority";
  }
};
var PRIORITY_INDEX = new PriorityIndex();
var LOG_2 = Math.log(2);
var Base12Num = class {
  constructor(length) {
    const logBase2 = (num) => parseInt(Math.log(num) / LOG_2, 10);
    const bitMask = (bits) => parseInt(Array(bits + 1).join("1"), 2);
    this.count = logBase2(length + 1);
    this.current_ = this.count - 1;
    const mask = bitMask(this.count);
    this.bits_ = length + 1 & mask;
  }
  nextBitIsOne() {
    const result = !(this.bits_ & 1 << this.current_);
    this.current_--;
    return result;
  }
};
var buildChildSet = function(childList, cmp, keyFn, mapSortFn) {
  childList.sort(cmp);
  const buildBalancedTree = function(low, high) {
    const length = high - low;
    let namedNode;
    let key;
    if (length === 0) {
      return null;
    } else if (length === 1) {
      namedNode = childList[low];
      key = keyFn ? keyFn(namedNode) : namedNode;
      return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, null, null);
    } else {
      const middle = parseInt(length / 2, 10) + low;
      const left = buildBalancedTree(low, middle);
      const right = buildBalancedTree(middle + 1, high);
      namedNode = childList[middle];
      key = keyFn ? keyFn(namedNode) : namedNode;
      return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, left, right);
    }
  };
  const buildFrom12Array = function(base122) {
    let node = null;
    let root2 = null;
    let index = childList.length;
    const buildPennant = function(chunkSize, color) {
      const low = index - chunkSize;
      const high = index;
      index -= chunkSize;
      const childTree = buildBalancedTree(low + 1, high);
      const namedNode = childList[low];
      const key = keyFn ? keyFn(namedNode) : namedNode;
      attachPennant(new LLRBNode(key, namedNode.node, color, null, childTree));
    };
    const attachPennant = function(pennant) {
      if (node) {
        node.left = pennant;
        node = pennant;
      } else {
        root2 = pennant;
        node = pennant;
      }
    };
    for (let i = 0; i < base122.count; ++i) {
      const isOne = base122.nextBitIsOne();
      const chunkSize = Math.pow(2, base122.count - (i + 1));
      if (isOne) {
        buildPennant(chunkSize, LLRBNode.BLACK);
      } else {
        buildPennant(chunkSize, LLRBNode.BLACK);
        buildPennant(chunkSize, LLRBNode.RED);
      }
    }
    return root2;
  };
  const base12 = new Base12Num(childList.length);
  const root = buildFrom12Array(base12);
  return new SortedMap(mapSortFn || cmp, root);
};
var _defaultIndexMap;
var fallbackObject = {};
var IndexMap = class {
  constructor(indexes_, indexSet_) {
    this.indexes_ = indexes_;
    this.indexSet_ = indexSet_;
  }
  static get Default() {
    assert(fallbackObject && PRIORITY_INDEX, "ChildrenNode.ts has not been loaded");
    _defaultIndexMap = _defaultIndexMap || new IndexMap({ ".priority": fallbackObject }, { ".priority": PRIORITY_INDEX });
    return _defaultIndexMap;
  }
  get(indexKey) {
    const sortedMap = safeGet(this.indexes_, indexKey);
    if (!sortedMap) {
      throw new Error("No index defined for " + indexKey);
    }
    if (sortedMap instanceof SortedMap) {
      return sortedMap;
    } else {
      return null;
    }
  }
  hasIndex(indexDefinition) {
    return contains(this.indexSet_, indexDefinition.toString());
  }
  addIndex(indexDefinition, existingChildren) {
    assert(indexDefinition !== KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    const childList = [];
    let sawIndexedValue = false;
    const iter = existingChildren.getIterator(NamedNode.Wrap);
    let next = iter.getNext();
    while (next) {
      sawIndexedValue = sawIndexedValue || indexDefinition.isDefinedOn(next.node);
      childList.push(next);
      next = iter.getNext();
    }
    let newIndex;
    if (sawIndexedValue) {
      newIndex = buildChildSet(childList, indexDefinition.getCompare());
    } else {
      newIndex = fallbackObject;
    }
    const indexName = indexDefinition.toString();
    const newIndexSet = Object.assign({}, this.indexSet_);
    newIndexSet[indexName] = indexDefinition;
    const newIndexes = Object.assign({}, this.indexes_);
    newIndexes[indexName] = newIndex;
    return new IndexMap(newIndexes, newIndexSet);
  }
  addToIndexes(namedNode, existingChildren) {
    const newIndexes = map(this.indexes_, (indexedChildren, indexName) => {
      const index = safeGet(this.indexSet_, indexName);
      assert(index, "Missing index implementation for " + indexName);
      if (indexedChildren === fallbackObject) {
        if (index.isDefinedOn(namedNode.node)) {
          const childList = [];
          const iter = existingChildren.getIterator(NamedNode.Wrap);
          let next = iter.getNext();
          while (next) {
            if (next.name !== namedNode.name) {
              childList.push(next);
            }
            next = iter.getNext();
          }
          childList.push(namedNode);
          return buildChildSet(childList, index.getCompare());
        } else {
          return fallbackObject;
        }
      } else {
        const existingSnap = existingChildren.get(namedNode.name);
        let newChildren = indexedChildren;
        if (existingSnap) {
          newChildren = newChildren.remove(new NamedNode(namedNode.name, existingSnap));
        }
        return newChildren.insert(namedNode, namedNode.node);
      }
    });
    return new IndexMap(newIndexes, this.indexSet_);
  }
  removeFromIndexes(namedNode, existingChildren) {
    const newIndexes = map(this.indexes_, (indexedChildren) => {
      if (indexedChildren === fallbackObject) {
        return indexedChildren;
      } else {
        const existingSnap = existingChildren.get(namedNode.name);
        if (existingSnap) {
          return indexedChildren.remove(new NamedNode(namedNode.name, existingSnap));
        } else {
          return indexedChildren;
        }
      }
    });
    return new IndexMap(newIndexes, this.indexSet_);
  }
};
var EMPTY_NODE;
var ChildrenNode = class {
  constructor(children_, priorityNode_, indexMap_) {
    this.children_ = children_;
    this.priorityNode_ = priorityNode_;
    this.indexMap_ = indexMap_;
    this.lazyHash_ = null;
    if (this.priorityNode_) {
      validatePriorityNode(this.priorityNode_);
    }
    if (this.children_.isEmpty()) {
      assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
    }
  }
  static get EMPTY_NODE() {
    return EMPTY_NODE || (EMPTY_NODE = new ChildrenNode(new SortedMap(NAME_COMPARATOR), null, IndexMap.Default));
  }
  isLeafNode() {
    return false;
  }
  getPriority() {
    return this.priorityNode_ || EMPTY_NODE;
  }
  updatePriority(newPriorityNode) {
    if (this.children_.isEmpty()) {
      return this;
    } else {
      return new ChildrenNode(this.children_, newPriorityNode, this.indexMap_);
    }
  }
  getImmediateChild(childName) {
    if (childName === ".priority") {
      return this.getPriority();
    } else {
      const child2 = this.children_.get(childName);
      return child2 === null ? EMPTY_NODE : child2;
    }
  }
  getChild(path) {
    const front = pathGetFront(path);
    if (front === null) {
      return this;
    }
    return this.getImmediateChild(front).getChild(pathPopFront(path));
  }
  hasChild(childName) {
    return this.children_.get(childName) !== null;
  }
  updateImmediateChild(childName, newChildNode) {
    assert(newChildNode, "We should always be passing snapshot nodes");
    if (childName === ".priority") {
      return this.updatePriority(newChildNode);
    } else {
      const namedNode = new NamedNode(childName, newChildNode);
      let newChildren, newIndexMap;
      if (newChildNode.isEmpty()) {
        newChildren = this.children_.remove(childName);
        newIndexMap = this.indexMap_.removeFromIndexes(namedNode, this.children_);
      } else {
        newChildren = this.children_.insert(childName, newChildNode);
        newIndexMap = this.indexMap_.addToIndexes(namedNode, this.children_);
      }
      const newPriority = newChildren.isEmpty() ? EMPTY_NODE : this.priorityNode_;
      return new ChildrenNode(newChildren, newPriority, newIndexMap);
    }
  }
  updateChild(path, newChildNode) {
    const front = pathGetFront(path);
    if (front === null) {
      return newChildNode;
    } else {
      assert(pathGetFront(path) !== ".priority" || pathGetLength(path) === 1, ".priority must be the last token in a path");
      const newImmediateChild = this.getImmediateChild(front).updateChild(pathPopFront(path), newChildNode);
      return this.updateImmediateChild(front, newImmediateChild);
    }
  }
  isEmpty() {
    return this.children_.isEmpty();
  }
  numChildren() {
    return this.children_.count();
  }
  val(exportFormat) {
    if (this.isEmpty()) {
      return null;
    }
    const obj = {};
    let numKeys = 0, maxKey = 0, allIntegerKeys = true;
    this.forEachChild(PRIORITY_INDEX, (key, childNode) => {
      obj[key] = childNode.val(exportFormat);
      numKeys++;
      if (allIntegerKeys && ChildrenNode.INTEGER_REGEXP_.test(key)) {
        maxKey = Math.max(maxKey, Number(key));
      } else {
        allIntegerKeys = false;
      }
    });
    if (!exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
      const array = [];
      for (const key in obj) {
        array[key] = obj[key];
      }
      return array;
    } else {
      if (exportFormat && !this.getPriority().isEmpty()) {
        obj[".priority"] = this.getPriority().val();
      }
      return obj;
    }
  }
  hash() {
    if (this.lazyHash_ === null) {
      let toHash = "";
      if (!this.getPriority().isEmpty()) {
        toHash += "priority:" + priorityHashText(this.getPriority().val()) + ":";
      }
      this.forEachChild(PRIORITY_INDEX, (key, childNode) => {
        const childHash = childNode.hash();
        if (childHash !== "") {
          toHash += ":" + key + ":" + childHash;
        }
      });
      this.lazyHash_ = toHash === "" ? "" : sha1(toHash);
    }
    return this.lazyHash_;
  }
  getPredecessorChildName(childName, childNode, index) {
    const idx = this.resolveIndex_(index);
    if (idx) {
      const predecessor = idx.getPredecessorKey(new NamedNode(childName, childNode));
      return predecessor ? predecessor.name : null;
    } else {
      return this.children_.getPredecessorKey(childName);
    }
  }
  getFirstChildName(indexDefinition) {
    const idx = this.resolveIndex_(indexDefinition);
    if (idx) {
      const minKey = idx.minKey();
      return minKey && minKey.name;
    } else {
      return this.children_.minKey();
    }
  }
  getFirstChild(indexDefinition) {
    const minKey = this.getFirstChildName(indexDefinition);
    if (minKey) {
      return new NamedNode(minKey, this.children_.get(minKey));
    } else {
      return null;
    }
  }
  getLastChildName(indexDefinition) {
    const idx = this.resolveIndex_(indexDefinition);
    if (idx) {
      const maxKey = idx.maxKey();
      return maxKey && maxKey.name;
    } else {
      return this.children_.maxKey();
    }
  }
  getLastChild(indexDefinition) {
    const maxKey = this.getLastChildName(indexDefinition);
    if (maxKey) {
      return new NamedNode(maxKey, this.children_.get(maxKey));
    } else {
      return null;
    }
  }
  forEachChild(index, action) {
    const idx = this.resolveIndex_(index);
    if (idx) {
      return idx.inorderTraversal((wrappedNode) => {
        return action(wrappedNode.name, wrappedNode.node);
      });
    } else {
      return this.children_.inorderTraversal(action);
    }
  }
  getIterator(indexDefinition) {
    return this.getIteratorFrom(indexDefinition.minPost(), indexDefinition);
  }
  getIteratorFrom(startPost, indexDefinition) {
    const idx = this.resolveIndex_(indexDefinition);
    if (idx) {
      return idx.getIteratorFrom(startPost, (key) => key);
    } else {
      const iterator = this.children_.getIteratorFrom(startPost.name, NamedNode.Wrap);
      let next = iterator.peek();
      while (next != null && indexDefinition.compare(next, startPost) < 0) {
        iterator.getNext();
        next = iterator.peek();
      }
      return iterator;
    }
  }
  getReverseIterator(indexDefinition) {
    return this.getReverseIteratorFrom(indexDefinition.maxPost(), indexDefinition);
  }
  getReverseIteratorFrom(endPost, indexDefinition) {
    const idx = this.resolveIndex_(indexDefinition);
    if (idx) {
      return idx.getReverseIteratorFrom(endPost, (key) => {
        return key;
      });
    } else {
      const iterator = this.children_.getReverseIteratorFrom(endPost.name, NamedNode.Wrap);
      let next = iterator.peek();
      while (next != null && indexDefinition.compare(next, endPost) > 0) {
        iterator.getNext();
        next = iterator.peek();
      }
      return iterator;
    }
  }
  compareTo(other) {
    if (this.isEmpty()) {
      if (other.isEmpty()) {
        return 0;
      } else {
        return -1;
      }
    } else if (other.isLeafNode() || other.isEmpty()) {
      return 1;
    } else if (other === MAX_NODE) {
      return -1;
    } else {
      return 0;
    }
  }
  withIndex(indexDefinition) {
    if (indexDefinition === KEY_INDEX || this.indexMap_.hasIndex(indexDefinition)) {
      return this;
    } else {
      const newIndexMap = this.indexMap_.addIndex(indexDefinition, this.children_);
      return new ChildrenNode(this.children_, this.priorityNode_, newIndexMap);
    }
  }
  isIndexed(index) {
    return index === KEY_INDEX || this.indexMap_.hasIndex(index);
  }
  equals(other) {
    if (other === this) {
      return true;
    } else if (other.isLeafNode()) {
      return false;
    } else {
      const otherChildrenNode = other;
      if (!this.getPriority().equals(otherChildrenNode.getPriority())) {
        return false;
      } else if (this.children_.count() === otherChildrenNode.children_.count()) {
        const thisIter = this.getIterator(PRIORITY_INDEX);
        const otherIter = otherChildrenNode.getIterator(PRIORITY_INDEX);
        let thisCurrent = thisIter.getNext();
        let otherCurrent = otherIter.getNext();
        while (thisCurrent && otherCurrent) {
          if (thisCurrent.name !== otherCurrent.name || !thisCurrent.node.equals(otherCurrent.node)) {
            return false;
          }
          thisCurrent = thisIter.getNext();
          otherCurrent = otherIter.getNext();
        }
        return thisCurrent === null && otherCurrent === null;
      } else {
        return false;
      }
    }
  }
  resolveIndex_(indexDefinition) {
    if (indexDefinition === KEY_INDEX) {
      return null;
    } else {
      return this.indexMap_.get(indexDefinition.toString());
    }
  }
};
ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
var MaxNode = class extends ChildrenNode {
  constructor() {
    super(new SortedMap(NAME_COMPARATOR), ChildrenNode.EMPTY_NODE, IndexMap.Default);
  }
  compareTo(other) {
    if (other === this) {
      return 0;
    } else {
      return 1;
    }
  }
  equals(other) {
    return other === this;
  }
  getPriority() {
    return this;
  }
  getImmediateChild(childName) {
    return ChildrenNode.EMPTY_NODE;
  }
  isEmpty() {
    return false;
  }
};
var MAX_NODE = new MaxNode();
Object.defineProperties(NamedNode, {
  MIN: {
    value: new NamedNode(MIN_NAME, ChildrenNode.EMPTY_NODE)
  },
  MAX: {
    value: new NamedNode(MAX_NAME, MAX_NODE)
  }
});
KeyIndex.__EMPTY_NODE = ChildrenNode.EMPTY_NODE;
LeafNode.__childrenNodeConstructor = ChildrenNode;
setMaxNode$1(MAX_NODE);
setMaxNode(MAX_NODE);
var USE_HINZE = true;
function nodeFromJSON(json, priority = null) {
  if (json === null) {
    return ChildrenNode.EMPTY_NODE;
  }
  if (typeof json === "object" && ".priority" in json) {
    priority = json[".priority"];
  }
  assert(priority === null || typeof priority === "string" || typeof priority === "number" || typeof priority === "object" && ".sv" in priority, "Invalid priority type found: " + typeof priority);
  if (typeof json === "object" && ".value" in json && json[".value"] !== null) {
    json = json[".value"];
  }
  if (typeof json !== "object" || ".sv" in json) {
    const jsonLeaf = json;
    return new LeafNode(jsonLeaf, nodeFromJSON(priority));
  }
  if (!(json instanceof Array) && USE_HINZE) {
    const children = [];
    let childrenHavePriority = false;
    const hinzeJsonObj = json;
    each(hinzeJsonObj, (key, child2) => {
      if (key.substring(0, 1) !== ".") {
        const childNode = nodeFromJSON(child2);
        if (!childNode.isEmpty()) {
          childrenHavePriority = childrenHavePriority || !childNode.getPriority().isEmpty();
          children.push(new NamedNode(key, childNode));
        }
      }
    });
    if (children.length === 0) {
      return ChildrenNode.EMPTY_NODE;
    }
    const childSet = buildChildSet(children, NAME_ONLY_COMPARATOR, (namedNode) => namedNode.name, NAME_COMPARATOR);
    if (childrenHavePriority) {
      const sortedChildSet = buildChildSet(children, PRIORITY_INDEX.getCompare());
      return new ChildrenNode(childSet, nodeFromJSON(priority), new IndexMap({ ".priority": sortedChildSet }, { ".priority": PRIORITY_INDEX }));
    } else {
      return new ChildrenNode(childSet, nodeFromJSON(priority), IndexMap.Default);
    }
  } else {
    let node = ChildrenNode.EMPTY_NODE;
    each(json, (key, childData) => {
      if (contains(json, key)) {
        if (key.substring(0, 1) !== ".") {
          const childNode = nodeFromJSON(childData);
          if (childNode.isLeafNode() || !childNode.isEmpty()) {
            node = node.updateImmediateChild(key, childNode);
          }
        }
      }
    });
    return node.updatePriority(nodeFromJSON(priority));
  }
}
setNodeFromJSON(nodeFromJSON);
var PathIndex = class extends Index {
  constructor(indexPath_) {
    super();
    this.indexPath_ = indexPath_;
    assert(!pathIsEmpty(indexPath_) && pathGetFront(indexPath_) !== ".priority", "Can't create PathIndex with empty path or .priority key");
  }
  extractChild(snap) {
    return snap.getChild(this.indexPath_);
  }
  isDefinedOn(node) {
    return !node.getChild(this.indexPath_).isEmpty();
  }
  compare(a, b3) {
    const aChild = this.extractChild(a.node);
    const bChild = this.extractChild(b3.node);
    const indexCmp = aChild.compareTo(bChild);
    if (indexCmp === 0) {
      return nameCompare(a.name, b3.name);
    } else {
      return indexCmp;
    }
  }
  makePost(indexValue, name5) {
    const valueNode = nodeFromJSON(indexValue);
    const node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, valueNode);
    return new NamedNode(name5, node);
  }
  maxPost() {
    const node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, MAX_NODE);
    return new NamedNode(MAX_NAME, node);
  }
  toString() {
    return pathSlice(this.indexPath_, 0).join("/");
  }
};
var ValueIndex = class extends Index {
  compare(a, b3) {
    const indexCmp = a.node.compareTo(b3.node);
    if (indexCmp === 0) {
      return nameCompare(a.name, b3.name);
    } else {
      return indexCmp;
    }
  }
  isDefinedOn(node) {
    return true;
  }
  indexedValueChanged(oldNode, newNode) {
    return !oldNode.equals(newNode);
  }
  minPost() {
    return NamedNode.MIN;
  }
  maxPost() {
    return NamedNode.MAX;
  }
  makePost(indexValue, name5) {
    const valueNode = nodeFromJSON(indexValue);
    return new NamedNode(name5, valueNode);
  }
  toString() {
    return ".value";
  }
};
var VALUE_INDEX = new ValueIndex();
var PUSH_CHARS = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
var nextPushId = function() {
  let lastPushTime = 0;
  const lastRandChars = [];
  return function(now) {
    const duplicateTime = now === lastPushTime;
    lastPushTime = now;
    let i;
    const timeStampChars = new Array(8);
    for (i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }
    assert(now === 0, "Cannot push at time == 0");
    let id2 = timeStampChars.join("");
    if (!duplicateTime) {
      for (i = 0; i < 12; i++) {
        lastRandChars[i] = Math.floor(Math.random() * 64);
      }
    } else {
      for (i = 11; i >= 0 && lastRandChars[i] === 63; i--) {
        lastRandChars[i] = 0;
      }
      lastRandChars[i]++;
    }
    for (i = 0; i < 12; i++) {
      id2 += PUSH_CHARS.charAt(lastRandChars[i]);
    }
    assert(id2.length === 20, "nextPushId: Length should be 20.");
    return id2;
  };
}();
function changeValue(snapshotNode) {
  return { type: "value", snapshotNode };
}
function changeChildAdded(childName, snapshotNode) {
  return { type: "child_added", snapshotNode, childName };
}
function changeChildRemoved(childName, snapshotNode) {
  return { type: "child_removed", snapshotNode, childName };
}
function changeChildChanged(childName, snapshotNode, oldSnap) {
  return {
    type: "child_changed",
    snapshotNode,
    childName,
    oldSnap
  };
}
function changeChildMoved(childName, snapshotNode) {
  return { type: "child_moved", snapshotNode, childName };
}
var IndexedFilter = class {
  constructor(index_) {
    this.index_ = index_;
  }
  updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
    assert(snap.isIndexed(this.index_), "A node must be indexed if only a child is updated");
    const oldChild = snap.getImmediateChild(key);
    if (oldChild.getChild(affectedPath).equals(newChild.getChild(affectedPath))) {
      if (oldChild.isEmpty() === newChild.isEmpty()) {
        return snap;
      }
    }
    if (optChangeAccumulator != null) {
      if (newChild.isEmpty()) {
        if (snap.hasChild(key)) {
          optChangeAccumulator.trackChildChange(changeChildRemoved(key, oldChild));
        } else {
          assert(snap.isLeafNode(), "A child remove without an old child only makes sense on a leaf node");
        }
      } else if (oldChild.isEmpty()) {
        optChangeAccumulator.trackChildChange(changeChildAdded(key, newChild));
      } else {
        optChangeAccumulator.trackChildChange(changeChildChanged(key, newChild, oldChild));
      }
    }
    if (snap.isLeafNode() && newChild.isEmpty()) {
      return snap;
    } else {
      return snap.updateImmediateChild(key, newChild).withIndex(this.index_);
    }
  }
  updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
    if (optChangeAccumulator != null) {
      if (!oldSnap.isLeafNode()) {
        oldSnap.forEachChild(PRIORITY_INDEX, (key, childNode) => {
          if (!newSnap.hasChild(key)) {
            optChangeAccumulator.trackChildChange(changeChildRemoved(key, childNode));
          }
        });
      }
      if (!newSnap.isLeafNode()) {
        newSnap.forEachChild(PRIORITY_INDEX, (key, childNode) => {
          if (oldSnap.hasChild(key)) {
            const oldChild = oldSnap.getImmediateChild(key);
            if (!oldChild.equals(childNode)) {
              optChangeAccumulator.trackChildChange(changeChildChanged(key, childNode, oldChild));
            }
          } else {
            optChangeAccumulator.trackChildChange(changeChildAdded(key, childNode));
          }
        });
      }
    }
    return newSnap.withIndex(this.index_);
  }
  updatePriority(oldSnap, newPriority) {
    if (oldSnap.isEmpty()) {
      return ChildrenNode.EMPTY_NODE;
    } else {
      return oldSnap.updatePriority(newPriority);
    }
  }
  filtersNodes() {
    return false;
  }
  getIndexedFilter() {
    return this;
  }
  getIndex() {
    return this.index_;
  }
};
var RangedFilter = class {
  constructor(params) {
    this.indexedFilter_ = new IndexedFilter(params.getIndex());
    this.index_ = params.getIndex();
    this.startPost_ = RangedFilter.getStartPost_(params);
    this.endPost_ = RangedFilter.getEndPost_(params);
  }
  getStartPost() {
    return this.startPost_;
  }
  getEndPost() {
    return this.endPost_;
  }
  matches(node) {
    return this.index_.compare(this.getStartPost(), node) <= 0 && this.index_.compare(node, this.getEndPost()) <= 0;
  }
  updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
    if (!this.matches(new NamedNode(key, newChild))) {
      newChild = ChildrenNode.EMPTY_NODE;
    }
    return this.indexedFilter_.updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
  }
  updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
    if (newSnap.isLeafNode()) {
      newSnap = ChildrenNode.EMPTY_NODE;
    }
    let filtered = newSnap.withIndex(this.index_);
    filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
    const self2 = this;
    newSnap.forEachChild(PRIORITY_INDEX, (key, childNode) => {
      if (!self2.matches(new NamedNode(key, childNode))) {
        filtered = filtered.updateImmediateChild(key, ChildrenNode.EMPTY_NODE);
      }
    });
    return this.indexedFilter_.updateFullNode(oldSnap, filtered, optChangeAccumulator);
  }
  updatePriority(oldSnap, newPriority) {
    return oldSnap;
  }
  filtersNodes() {
    return true;
  }
  getIndexedFilter() {
    return this.indexedFilter_;
  }
  getIndex() {
    return this.index_;
  }
  static getStartPost_(params) {
    if (params.hasStart()) {
      const startName = params.getIndexStartName();
      return params.getIndex().makePost(params.getIndexStartValue(), startName);
    } else {
      return params.getIndex().minPost();
    }
  }
  static getEndPost_(params) {
    if (params.hasEnd()) {
      const endName = params.getIndexEndName();
      return params.getIndex().makePost(params.getIndexEndValue(), endName);
    } else {
      return params.getIndex().maxPost();
    }
  }
};
var LimitedFilter = class {
  constructor(params) {
    this.rangedFilter_ = new RangedFilter(params);
    this.index_ = params.getIndex();
    this.limit_ = params.getLimit();
    this.reverse_ = !params.isViewFromLeft();
  }
  updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
    if (!this.rangedFilter_.matches(new NamedNode(key, newChild))) {
      newChild = ChildrenNode.EMPTY_NODE;
    }
    if (snap.getImmediateChild(key).equals(newChild)) {
      return snap;
    } else if (snap.numChildren() < this.limit_) {
      return this.rangedFilter_.getIndexedFilter().updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
    } else {
      return this.fullLimitUpdateChild_(snap, key, newChild, source, optChangeAccumulator);
    }
  }
  updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
    let filtered;
    if (newSnap.isLeafNode() || newSnap.isEmpty()) {
      filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
    } else {
      if (this.limit_ * 2 < newSnap.numChildren() && newSnap.isIndexed(this.index_)) {
        filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
        let iterator;
        if (this.reverse_) {
          iterator = newSnap.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_);
        } else {
          iterator = newSnap.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
        }
        let count = 0;
        while (iterator.hasNext() && count < this.limit_) {
          const next = iterator.getNext();
          let inRange;
          if (this.reverse_) {
            inRange = this.index_.compare(this.rangedFilter_.getStartPost(), next) <= 0;
          } else {
            inRange = this.index_.compare(next, this.rangedFilter_.getEndPost()) <= 0;
          }
          if (inRange) {
            filtered = filtered.updateImmediateChild(next.name, next.node);
            count++;
          } else {
            break;
          }
        }
      } else {
        filtered = newSnap.withIndex(this.index_);
        filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
        let startPost;
        let endPost;
        let cmp;
        let iterator;
        if (this.reverse_) {
          iterator = filtered.getReverseIterator(this.index_);
          startPost = this.rangedFilter_.getEndPost();
          endPost = this.rangedFilter_.getStartPost();
          const indexCompare = this.index_.getCompare();
          cmp = (a, b3) => indexCompare(b3, a);
        } else {
          iterator = filtered.getIterator(this.index_);
          startPost = this.rangedFilter_.getStartPost();
          endPost = this.rangedFilter_.getEndPost();
          cmp = this.index_.getCompare();
        }
        let count = 0;
        let foundStartPost = false;
        while (iterator.hasNext()) {
          const next = iterator.getNext();
          if (!foundStartPost && cmp(startPost, next) <= 0) {
            foundStartPost = true;
          }
          const inRange = foundStartPost && count < this.limit_ && cmp(next, endPost) <= 0;
          if (inRange) {
            count++;
          } else {
            filtered = filtered.updateImmediateChild(next.name, ChildrenNode.EMPTY_NODE);
          }
        }
      }
    }
    return this.rangedFilter_.getIndexedFilter().updateFullNode(oldSnap, filtered, optChangeAccumulator);
  }
  updatePriority(oldSnap, newPriority) {
    return oldSnap;
  }
  filtersNodes() {
    return true;
  }
  getIndexedFilter() {
    return this.rangedFilter_.getIndexedFilter();
  }
  getIndex() {
    return this.index_;
  }
  fullLimitUpdateChild_(snap, childKey, childSnap, source, changeAccumulator) {
    let cmp;
    if (this.reverse_) {
      const indexCmp = this.index_.getCompare();
      cmp = (a, b3) => indexCmp(b3, a);
    } else {
      cmp = this.index_.getCompare();
    }
    const oldEventCache = snap;
    assert(oldEventCache.numChildren() === this.limit_, "");
    const newChildNamedNode = new NamedNode(childKey, childSnap);
    const windowBoundary = this.reverse_ ? oldEventCache.getFirstChild(this.index_) : oldEventCache.getLastChild(this.index_);
    const inRange = this.rangedFilter_.matches(newChildNamedNode);
    if (oldEventCache.hasChild(childKey)) {
      const oldChildSnap = oldEventCache.getImmediateChild(childKey);
      let nextChild = source.getChildAfterChild(this.index_, windowBoundary, this.reverse_);
      while (nextChild != null && (nextChild.name === childKey || oldEventCache.hasChild(nextChild.name))) {
        nextChild = source.getChildAfterChild(this.index_, nextChild, this.reverse_);
      }
      const compareNext = nextChild == null ? 1 : cmp(nextChild, newChildNamedNode);
      const remainsInWindow = inRange && !childSnap.isEmpty() && compareNext >= 0;
      if (remainsInWindow) {
        if (changeAccumulator != null) {
          changeAccumulator.trackChildChange(changeChildChanged(childKey, childSnap, oldChildSnap));
        }
        return oldEventCache.updateImmediateChild(childKey, childSnap);
      } else {
        if (changeAccumulator != null) {
          changeAccumulator.trackChildChange(changeChildRemoved(childKey, oldChildSnap));
        }
        const newEventCache = oldEventCache.updateImmediateChild(childKey, ChildrenNode.EMPTY_NODE);
        const nextChildInRange = nextChild != null && this.rangedFilter_.matches(nextChild);
        if (nextChildInRange) {
          if (changeAccumulator != null) {
            changeAccumulator.trackChildChange(changeChildAdded(nextChild.name, nextChild.node));
          }
          return newEventCache.updateImmediateChild(nextChild.name, nextChild.node);
        } else {
          return newEventCache;
        }
      }
    } else if (childSnap.isEmpty()) {
      return snap;
    } else if (inRange) {
      if (cmp(windowBoundary, newChildNamedNode) >= 0) {
        if (changeAccumulator != null) {
          changeAccumulator.trackChildChange(changeChildRemoved(windowBoundary.name, windowBoundary.node));
          changeAccumulator.trackChildChange(changeChildAdded(childKey, childSnap));
        }
        return oldEventCache.updateImmediateChild(childKey, childSnap).updateImmediateChild(windowBoundary.name, ChildrenNode.EMPTY_NODE);
      } else {
        return snap;
      }
    } else {
      return snap;
    }
  }
};
var QueryParams = class {
  constructor() {
    this.limitSet_ = false;
    this.startSet_ = false;
    this.startNameSet_ = false;
    this.startAfterSet_ = false;
    this.endSet_ = false;
    this.endNameSet_ = false;
    this.endBeforeSet_ = false;
    this.limit_ = 0;
    this.viewFrom_ = "";
    this.indexStartValue_ = null;
    this.indexStartName_ = "";
    this.indexEndValue_ = null;
    this.indexEndName_ = "";
    this.index_ = PRIORITY_INDEX;
  }
  hasStart() {
    return this.startSet_;
  }
  hasStartAfter() {
    return this.startAfterSet_;
  }
  hasEndBefore() {
    return this.endBeforeSet_;
  }
  isViewFromLeft() {
    if (this.viewFrom_ === "") {
      return this.startSet_;
    } else {
      return this.viewFrom_ === "l";
    }
  }
  getIndexStartValue() {
    assert(this.startSet_, "Only valid if start has been set");
    return this.indexStartValue_;
  }
  getIndexStartName() {
    assert(this.startSet_, "Only valid if start has been set");
    if (this.startNameSet_) {
      return this.indexStartName_;
    } else {
      return MIN_NAME;
    }
  }
  hasEnd() {
    return this.endSet_;
  }
  getIndexEndValue() {
    assert(this.endSet_, "Only valid if end has been set");
    return this.indexEndValue_;
  }
  getIndexEndName() {
    assert(this.endSet_, "Only valid if end has been set");
    if (this.endNameSet_) {
      return this.indexEndName_;
    } else {
      return MAX_NAME;
    }
  }
  hasLimit() {
    return this.limitSet_;
  }
  hasAnchoredLimit() {
    return this.limitSet_ && this.viewFrom_ !== "";
  }
  getLimit() {
    assert(this.limitSet_, "Only valid if limit has been set");
    return this.limit_;
  }
  getIndex() {
    return this.index_;
  }
  loadsAllData() {
    return !(this.startSet_ || this.endSet_ || this.limitSet_);
  }
  isDefault() {
    return this.loadsAllData() && this.index_ === PRIORITY_INDEX;
  }
  copy() {
    const copy = new QueryParams();
    copy.limitSet_ = this.limitSet_;
    copy.limit_ = this.limit_;
    copy.startSet_ = this.startSet_;
    copy.indexStartValue_ = this.indexStartValue_;
    copy.startNameSet_ = this.startNameSet_;
    copy.indexStartName_ = this.indexStartName_;
    copy.endSet_ = this.endSet_;
    copy.indexEndValue_ = this.indexEndValue_;
    copy.endNameSet_ = this.endNameSet_;
    copy.indexEndName_ = this.indexEndName_;
    copy.index_ = this.index_;
    copy.viewFrom_ = this.viewFrom_;
    return copy;
  }
};
function queryParamsGetNodeFilter(queryParams) {
  if (queryParams.loadsAllData()) {
    return new IndexedFilter(queryParams.getIndex());
  } else if (queryParams.hasLimit()) {
    return new LimitedFilter(queryParams);
  } else {
    return new RangedFilter(queryParams);
  }
}
function queryParamsToRestQueryStringParameters(queryParams) {
  const qs2 = {};
  if (queryParams.isDefault()) {
    return qs2;
  }
  let orderBy;
  if (queryParams.index_ === PRIORITY_INDEX) {
    orderBy = "$priority";
  } else if (queryParams.index_ === VALUE_INDEX) {
    orderBy = "$value";
  } else if (queryParams.index_ === KEY_INDEX) {
    orderBy = "$key";
  } else {
    assert(queryParams.index_ instanceof PathIndex, "Unrecognized index type!");
    orderBy = queryParams.index_.toString();
  }
  qs2["orderBy"] = stringify(orderBy);
  if (queryParams.startSet_) {
    qs2["startAt"] = stringify(queryParams.indexStartValue_);
    if (queryParams.startNameSet_) {
      qs2["startAt"] += "," + stringify(queryParams.indexStartName_);
    }
  }
  if (queryParams.endSet_) {
    qs2["endAt"] = stringify(queryParams.indexEndValue_);
    if (queryParams.endNameSet_) {
      qs2["endAt"] += "," + stringify(queryParams.indexEndName_);
    }
  }
  if (queryParams.limitSet_) {
    if (queryParams.isViewFromLeft()) {
      qs2["limitToFirst"] = queryParams.limit_;
    } else {
      qs2["limitToLast"] = queryParams.limit_;
    }
  }
  return qs2;
}
function queryParamsGetQueryObject(queryParams) {
  const obj = {};
  if (queryParams.startSet_) {
    obj["sp"] = queryParams.indexStartValue_;
    if (queryParams.startNameSet_) {
      obj["sn"] = queryParams.indexStartName_;
    }
  }
  if (queryParams.endSet_) {
    obj["ep"] = queryParams.indexEndValue_;
    if (queryParams.endNameSet_) {
      obj["en"] = queryParams.indexEndName_;
    }
  }
  if (queryParams.limitSet_) {
    obj["l"] = queryParams.limit_;
    let viewFrom = queryParams.viewFrom_;
    if (viewFrom === "") {
      if (queryParams.isViewFromLeft()) {
        viewFrom = "l";
      } else {
        viewFrom = "r";
      }
    }
    obj["vf"] = viewFrom;
  }
  if (queryParams.index_ !== PRIORITY_INDEX) {
    obj["i"] = queryParams.index_.toString();
  }
  return obj;
}
var ReadonlyRestClient = class extends ServerActions {
  constructor(repoInfo_, onDataUpdate_, authTokenProvider_, appCheckTokenProvider_) {
    super();
    this.repoInfo_ = repoInfo_;
    this.onDataUpdate_ = onDataUpdate_;
    this.authTokenProvider_ = authTokenProvider_;
    this.appCheckTokenProvider_ = appCheckTokenProvider_;
    this.log_ = logWrapper("p:rest:");
    this.listens_ = {};
  }
  reportStats(stats) {
    throw new Error("Method not implemented.");
  }
  static getListenId_(query, tag) {
    if (tag !== void 0) {
      return "tag$" + tag;
    } else {
      assert(query._queryParams.isDefault(), "should have a tag if it's not a default query.");
      return query._path.toString();
    }
  }
  listen(query, currentHashFn, tag, onComplete) {
    const pathString = query._path.toString();
    this.log_("Listen called for " + pathString + " " + query._queryIdentifier);
    const listenId = ReadonlyRestClient.getListenId_(query, tag);
    const thisListen = {};
    this.listens_[listenId] = thisListen;
    const queryStringParameters = queryParamsToRestQueryStringParameters(query._queryParams);
    this.restRequest_(pathString + ".json", queryStringParameters, (error2, result) => {
      let data = result;
      if (error2 === 404) {
        data = null;
        error2 = null;
      }
      if (error2 === null) {
        this.onDataUpdate_(pathString, data, false, tag);
      }
      if (safeGet(this.listens_, listenId) === thisListen) {
        let status;
        if (!error2) {
          status = "ok";
        } else if (error2 === 401) {
          status = "permission_denied";
        } else {
          status = "rest_error:" + error2;
        }
        onComplete(status, null);
      }
    });
  }
  unlisten(query, tag) {
    const listenId = ReadonlyRestClient.getListenId_(query, tag);
    delete this.listens_[listenId];
  }
  get(query) {
    const queryStringParameters = queryParamsToRestQueryStringParameters(query._queryParams);
    const pathString = query._path.toString();
    const deferred = new Deferred();
    this.restRequest_(pathString + ".json", queryStringParameters, (error2, result) => {
      let data = result;
      if (error2 === 404) {
        data = null;
        error2 = null;
      }
      if (error2 === null) {
        this.onDataUpdate_(
          pathString,
          data,
          false,
          null
        );
        deferred.resolve(data);
      } else {
        deferred.reject(new Error(data));
      }
    });
    return deferred.promise;
  }
  refreshAuthToken(token) {
  }
  restRequest_(pathString, queryStringParameters = {}, callback) {
    queryStringParameters["format"] = "export";
    return Promise.all([
      this.authTokenProvider_.getToken(false),
      this.appCheckTokenProvider_.getToken(false)
    ]).then(([authToken, appCheckToken]) => {
      if (authToken && authToken.accessToken) {
        queryStringParameters["auth"] = authToken.accessToken;
      }
      if (appCheckToken && appCheckToken.token) {
        queryStringParameters["ac"] = appCheckToken.token;
      }
      const url = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + pathString + "?ns=" + this.repoInfo_.namespace + querystring(queryStringParameters);
      this.log_("Sending REST request for " + url);
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (callback && xhr.readyState === 4) {
          this.log_("REST Response for " + url + " received. status:", xhr.status, "response:", xhr.responseText);
          let res = null;
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              res = jsonEval(xhr.responseText);
            } catch (e) {
              warn("Failed to parse JSON response for " + url + ": " + xhr.responseText);
            }
            callback(null, res);
          } else {
            if (xhr.status !== 401 && xhr.status !== 404) {
              warn("Got unsuccessful REST response for " + url + " Status: " + xhr.status);
            }
            callback(xhr.status);
          }
          callback = null;
        }
      };
      xhr.open("GET", url, true);
      xhr.send();
    });
  }
};
var SnapshotHolder = class {
  constructor() {
    this.rootNode_ = ChildrenNode.EMPTY_NODE;
  }
  getNode(path) {
    return this.rootNode_.getChild(path);
  }
  updateSnapshot(path, newSnapshotNode) {
    this.rootNode_ = this.rootNode_.updateChild(path, newSnapshotNode);
  }
};
function newSparseSnapshotTree() {
  return {
    value: null,
    children: /* @__PURE__ */ new Map()
  };
}
function sparseSnapshotTreeRemember(sparseSnapshotTree, path, data) {
  if (pathIsEmpty(path)) {
    sparseSnapshotTree.value = data;
    sparseSnapshotTree.children.clear();
  } else if (sparseSnapshotTree.value !== null) {
    sparseSnapshotTree.value = sparseSnapshotTree.value.updateChild(path, data);
  } else {
    const childKey = pathGetFront(path);
    if (!sparseSnapshotTree.children.has(childKey)) {
      sparseSnapshotTree.children.set(childKey, newSparseSnapshotTree());
    }
    const child2 = sparseSnapshotTree.children.get(childKey);
    path = pathPopFront(path);
    sparseSnapshotTreeRemember(child2, path, data);
  }
}
function sparseSnapshotTreeForEachTree(sparseSnapshotTree, prefixPath, func) {
  if (sparseSnapshotTree.value !== null) {
    func(prefixPath, sparseSnapshotTree.value);
  } else {
    sparseSnapshotTreeForEachChild(sparseSnapshotTree, (key, tree) => {
      const path = new Path(prefixPath.toString() + "/" + key);
      sparseSnapshotTreeForEachTree(tree, path, func);
    });
  }
}
function sparseSnapshotTreeForEachChild(sparseSnapshotTree, func) {
  sparseSnapshotTree.children.forEach((tree, key) => {
    func(key, tree);
  });
}
var StatsListener = class {
  constructor(collection_) {
    this.collection_ = collection_;
    this.last_ = null;
  }
  get() {
    const newStats = this.collection_.get();
    const delta = Object.assign({}, newStats);
    if (this.last_) {
      each(this.last_, (stat, value) => {
        delta[stat] = delta[stat] - value;
      });
    }
    this.last_ = newStats;
    return delta;
  }
};
var FIRST_STATS_MIN_TIME = 10 * 1e3;
var FIRST_STATS_MAX_TIME = 30 * 1e3;
var REPORT_STATS_INTERVAL = 5 * 60 * 1e3;
var StatsReporter = class {
  constructor(collection, server_) {
    this.server_ = server_;
    this.statsToReport_ = {};
    this.statsListener_ = new StatsListener(collection);
    const timeout = FIRST_STATS_MIN_TIME + (FIRST_STATS_MAX_TIME - FIRST_STATS_MIN_TIME) * Math.random();
    setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(timeout));
  }
  reportStats_() {
    const stats = this.statsListener_.get();
    const reportedStats = {};
    let haveStatsToReport = false;
    each(stats, (stat, value) => {
      if (value > 0 && contains(this.statsToReport_, stat)) {
        reportedStats[stat] = value;
        haveStatsToReport = true;
      }
    });
    if (haveStatsToReport) {
      this.server_.reportStats(reportedStats);
    }
    setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * REPORT_STATS_INTERVAL));
  }
};
var OperationType;
(function(OperationType2) {
  OperationType2[OperationType2["OVERWRITE"] = 0] = "OVERWRITE";
  OperationType2[OperationType2["MERGE"] = 1] = "MERGE";
  OperationType2[OperationType2["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE";
  OperationType2[OperationType2["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE";
})(OperationType || (OperationType = {}));
function newOperationSourceUser() {
  return {
    fromUser: true,
    fromServer: false,
    queryId: null,
    tagged: false
  };
}
function newOperationSourceServer() {
  return {
    fromUser: false,
    fromServer: true,
    queryId: null,
    tagged: false
  };
}
function newOperationSourceServerTaggedQuery(queryId) {
  return {
    fromUser: false,
    fromServer: true,
    queryId,
    tagged: true
  };
}
var AckUserWrite = class {
  constructor(path, affectedTree, revert) {
    this.path = path;
    this.affectedTree = affectedTree;
    this.revert = revert;
    this.type = OperationType.ACK_USER_WRITE;
    this.source = newOperationSourceUser();
  }
  operationForChild(childName) {
    if (!pathIsEmpty(this.path)) {
      assert(pathGetFront(this.path) === childName, "operationForChild called for unrelated child.");
      return new AckUserWrite(pathPopFront(this.path), this.affectedTree, this.revert);
    } else if (this.affectedTree.value != null) {
      assert(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths.");
      return this;
    } else {
      const childTree = this.affectedTree.subtree(new Path(childName));
      return new AckUserWrite(newEmptyPath(), childTree, this.revert);
    }
  }
};
var ListenComplete = class {
  constructor(source, path) {
    this.source = source;
    this.path = path;
    this.type = OperationType.LISTEN_COMPLETE;
  }
  operationForChild(childName) {
    if (pathIsEmpty(this.path)) {
      return new ListenComplete(this.source, newEmptyPath());
    } else {
      return new ListenComplete(this.source, pathPopFront(this.path));
    }
  }
};
var Overwrite = class {
  constructor(source, path, snap) {
    this.source = source;
    this.path = path;
    this.snap = snap;
    this.type = OperationType.OVERWRITE;
  }
  operationForChild(childName) {
    if (pathIsEmpty(this.path)) {
      return new Overwrite(this.source, newEmptyPath(), this.snap.getImmediateChild(childName));
    } else {
      return new Overwrite(this.source, pathPopFront(this.path), this.snap);
    }
  }
};
var Merge = class {
  constructor(source, path, children) {
    this.source = source;
    this.path = path;
    this.children = children;
    this.type = OperationType.MERGE;
  }
  operationForChild(childName) {
    if (pathIsEmpty(this.path)) {
      const childTree = this.children.subtree(new Path(childName));
      if (childTree.isEmpty()) {
        return null;
      } else if (childTree.value) {
        return new Overwrite(this.source, newEmptyPath(), childTree.value);
      } else {
        return new Merge(this.source, newEmptyPath(), childTree);
      }
    } else {
      assert(pathGetFront(this.path) === childName, "Can't get a merge for a child not on the path of the operation");
      return new Merge(this.source, pathPopFront(this.path), this.children);
    }
  }
  toString() {
    return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")";
  }
};
var CacheNode = class {
  constructor(node_, fullyInitialized_, filtered_) {
    this.node_ = node_;
    this.fullyInitialized_ = fullyInitialized_;
    this.filtered_ = filtered_;
  }
  isFullyInitialized() {
    return this.fullyInitialized_;
  }
  isFiltered() {
    return this.filtered_;
  }
  isCompleteForPath(path) {
    if (pathIsEmpty(path)) {
      return this.isFullyInitialized() && !this.filtered_;
    }
    const childKey = pathGetFront(path);
    return this.isCompleteForChild(childKey);
  }
  isCompleteForChild(key) {
    return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(key);
  }
  getNode() {
    return this.node_;
  }
};
var EventGenerator = class {
  constructor(query_) {
    this.query_ = query_;
    this.index_ = this.query_._queryParams.getIndex();
  }
};
function eventGeneratorGenerateEventsForChanges(eventGenerator, changes, eventCache, eventRegistrations) {
  const events = [];
  const moves = [];
  changes.forEach((change) => {
    if (change.type === "child_changed" && eventGenerator.index_.indexedValueChanged(change.oldSnap, change.snapshotNode)) {
      moves.push(changeChildMoved(change.childName, change.snapshotNode));
    }
  });
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_removed", changes, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_added", changes, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_moved", moves, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_changed", changes, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "value", changes, eventRegistrations, eventCache);
  return events;
}
function eventGeneratorGenerateEventsForType(eventGenerator, events, eventType, changes, registrations, eventCache) {
  const filteredChanges = changes.filter((change) => change.type === eventType);
  filteredChanges.sort((a, b3) => eventGeneratorCompareChanges(eventGenerator, a, b3));
  filteredChanges.forEach((change) => {
    const materializedChange = eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache);
    registrations.forEach((registration) => {
      if (registration.respondsTo(change.type)) {
        events.push(registration.createEvent(materializedChange, eventGenerator.query_));
      }
    });
  });
}
function eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache) {
  if (change.type === "value" || change.type === "child_removed") {
    return change;
  } else {
    change.prevName = eventCache.getPredecessorChildName(change.childName, change.snapshotNode, eventGenerator.index_);
    return change;
  }
}
function eventGeneratorCompareChanges(eventGenerator, a, b3) {
  if (a.childName == null || b3.childName == null) {
    throw assertionError("Should only compare child_ events.");
  }
  const aWrapped = new NamedNode(a.childName, a.snapshotNode);
  const bWrapped = new NamedNode(b3.childName, b3.snapshotNode);
  return eventGenerator.index_.compare(aWrapped, bWrapped);
}
function newViewCache(eventCache, serverCache) {
  return { eventCache, serverCache };
}
function viewCacheUpdateEventSnap(viewCache, eventSnap, complete, filtered) {
  return newViewCache(new CacheNode(eventSnap, complete, filtered), viewCache.serverCache);
}
function viewCacheUpdateServerSnap(viewCache, serverSnap, complete, filtered) {
  return newViewCache(viewCache.eventCache, new CacheNode(serverSnap, complete, filtered));
}
function viewCacheGetCompleteEventSnap(viewCache) {
  return viewCache.eventCache.isFullyInitialized() ? viewCache.eventCache.getNode() : null;
}
function viewCacheGetCompleteServerSnap(viewCache) {
  return viewCache.serverCache.isFullyInitialized() ? viewCache.serverCache.getNode() : null;
}
var emptyChildrenSingleton;
var EmptyChildren = () => {
  if (!emptyChildrenSingleton) {
    emptyChildrenSingleton = new SortedMap(stringCompare);
  }
  return emptyChildrenSingleton;
};
var ImmutableTree = class {
  constructor(value, children = EmptyChildren()) {
    this.value = value;
    this.children = children;
  }
  static fromObject(obj) {
    let tree = new ImmutableTree(null);
    each(obj, (childPath, childSnap) => {
      tree = tree.set(new Path(childPath), childSnap);
    });
    return tree;
  }
  isEmpty() {
    return this.value === null && this.children.isEmpty();
  }
  findRootMostMatchingPathAndValue(relativePath, predicate) {
    if (this.value != null && predicate(this.value)) {
      return { path: newEmptyPath(), value: this.value };
    } else {
      if (pathIsEmpty(relativePath)) {
        return null;
      } else {
        const front = pathGetFront(relativePath);
        const child2 = this.children.get(front);
        if (child2 !== null) {
          const childExistingPathAndValue = child2.findRootMostMatchingPathAndValue(pathPopFront(relativePath), predicate);
          if (childExistingPathAndValue != null) {
            const fullPath = pathChild(new Path(front), childExistingPathAndValue.path);
            return { path: fullPath, value: childExistingPathAndValue.value };
          } else {
            return null;
          }
        } else {
          return null;
        }
      }
    }
  }
  findRootMostValueAndPath(relativePath) {
    return this.findRootMostMatchingPathAndValue(relativePath, () => true);
  }
  subtree(relativePath) {
    if (pathIsEmpty(relativePath)) {
      return this;
    } else {
      const front = pathGetFront(relativePath);
      const childTree = this.children.get(front);
      if (childTree !== null) {
        return childTree.subtree(pathPopFront(relativePath));
      } else {
        return new ImmutableTree(null);
      }
    }
  }
  set(relativePath, toSet) {
    if (pathIsEmpty(relativePath)) {
      return new ImmutableTree(toSet, this.children);
    } else {
      const front = pathGetFront(relativePath);
      const child2 = this.children.get(front) || new ImmutableTree(null);
      const newChild = child2.set(pathPopFront(relativePath), toSet);
      const newChildren = this.children.insert(front, newChild);
      return new ImmutableTree(this.value, newChildren);
    }
  }
  remove(relativePath) {
    if (pathIsEmpty(relativePath)) {
      if (this.children.isEmpty()) {
        return new ImmutableTree(null);
      } else {
        return new ImmutableTree(null, this.children);
      }
    } else {
      const front = pathGetFront(relativePath);
      const child2 = this.children.get(front);
      if (child2) {
        const newChild = child2.remove(pathPopFront(relativePath));
        let newChildren;
        if (newChild.isEmpty()) {
          newChildren = this.children.remove(front);
        } else {
          newChildren = this.children.insert(front, newChild);
        }
        if (this.value === null && newChildren.isEmpty()) {
          return new ImmutableTree(null);
        } else {
          return new ImmutableTree(this.value, newChildren);
        }
      } else {
        return this;
      }
    }
  }
  get(relativePath) {
    if (pathIsEmpty(relativePath)) {
      return this.value;
    } else {
      const front = pathGetFront(relativePath);
      const child2 = this.children.get(front);
      if (child2) {
        return child2.get(pathPopFront(relativePath));
      } else {
        return null;
      }
    }
  }
  setTree(relativePath, newTree) {
    if (pathIsEmpty(relativePath)) {
      return newTree;
    } else {
      const front = pathGetFront(relativePath);
      const child2 = this.children.get(front) || new ImmutableTree(null);
      const newChild = child2.setTree(pathPopFront(relativePath), newTree);
      let newChildren;
      if (newChild.isEmpty()) {
        newChildren = this.children.remove(front);
      } else {
        newChildren = this.children.insert(front, newChild);
      }
      return new ImmutableTree(this.value, newChildren);
    }
  }
  fold(fn3) {
    return this.fold_(newEmptyPath(), fn3);
  }
  fold_(pathSoFar, fn3) {
    const accum = {};
    this.children.inorderTraversal((childKey, childTree) => {
      accum[childKey] = childTree.fold_(pathChild(pathSoFar, childKey), fn3);
    });
    return fn3(pathSoFar, this.value, accum);
  }
  findOnPath(path, f2) {
    return this.findOnPath_(path, newEmptyPath(), f2);
  }
  findOnPath_(pathToFollow, pathSoFar, f2) {
    const result = this.value ? f2(pathSoFar, this.value) : false;
    if (result) {
      return result;
    } else {
      if (pathIsEmpty(pathToFollow)) {
        return null;
      } else {
        const front = pathGetFront(pathToFollow);
        const nextChild = this.children.get(front);
        if (nextChild) {
          return nextChild.findOnPath_(pathPopFront(pathToFollow), pathChild(pathSoFar, front), f2);
        } else {
          return null;
        }
      }
    }
  }
  foreachOnPath(path, f2) {
    return this.foreachOnPath_(path, newEmptyPath(), f2);
  }
  foreachOnPath_(pathToFollow, currentRelativePath, f2) {
    if (pathIsEmpty(pathToFollow)) {
      return this;
    } else {
      if (this.value) {
        f2(currentRelativePath, this.value);
      }
      const front = pathGetFront(pathToFollow);
      const nextChild = this.children.get(front);
      if (nextChild) {
        return nextChild.foreachOnPath_(pathPopFront(pathToFollow), pathChild(currentRelativePath, front), f2);
      } else {
        return new ImmutableTree(null);
      }
    }
  }
  foreach(f2) {
    this.foreach_(newEmptyPath(), f2);
  }
  foreach_(currentRelativePath, f2) {
    this.children.inorderTraversal((childName, childTree) => {
      childTree.foreach_(pathChild(currentRelativePath, childName), f2);
    });
    if (this.value) {
      f2(currentRelativePath, this.value);
    }
  }
  foreachChild(f2) {
    this.children.inorderTraversal((childName, childTree) => {
      if (childTree.value) {
        f2(childName, childTree.value);
      }
    });
  }
};
var CompoundWrite = class {
  constructor(writeTree_) {
    this.writeTree_ = writeTree_;
  }
  static empty() {
    return new CompoundWrite(new ImmutableTree(null));
  }
};
function compoundWriteAddWrite(compoundWrite, path, node) {
  if (pathIsEmpty(path)) {
    return new CompoundWrite(new ImmutableTree(node));
  } else {
    const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);
    if (rootmost != null) {
      const rootMostPath = rootmost.path;
      let value = rootmost.value;
      const relativePath = newRelativePath(rootMostPath, path);
      value = value.updateChild(relativePath, node);
      return new CompoundWrite(compoundWrite.writeTree_.set(rootMostPath, value));
    } else {
      const subtree = new ImmutableTree(node);
      const newWriteTree2 = compoundWrite.writeTree_.setTree(path, subtree);
      return new CompoundWrite(newWriteTree2);
    }
  }
}
function compoundWriteAddWrites(compoundWrite, path, updates) {
  let newWrite = compoundWrite;
  each(updates, (childKey, node) => {
    newWrite = compoundWriteAddWrite(newWrite, pathChild(path, childKey), node);
  });
  return newWrite;
}
function compoundWriteRemoveWrite(compoundWrite, path) {
  if (pathIsEmpty(path)) {
    return CompoundWrite.empty();
  } else {
    const newWriteTree2 = compoundWrite.writeTree_.setTree(path, new ImmutableTree(null));
    return new CompoundWrite(newWriteTree2);
  }
}
function compoundWriteHasCompleteWrite(compoundWrite, path) {
  return compoundWriteGetCompleteNode(compoundWrite, path) != null;
}
function compoundWriteGetCompleteNode(compoundWrite, path) {
  const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);
  if (rootmost != null) {
    return compoundWrite.writeTree_.get(rootmost.path).getChild(newRelativePath(rootmost.path, path));
  } else {
    return null;
  }
}
function compoundWriteGetCompleteChildren(compoundWrite) {
  const children = [];
  const node = compoundWrite.writeTree_.value;
  if (node != null) {
    if (!node.isLeafNode()) {
      node.forEachChild(PRIORITY_INDEX, (childName, childNode) => {
        children.push(new NamedNode(childName, childNode));
      });
    }
  } else {
    compoundWrite.writeTree_.children.inorderTraversal((childName, childTree) => {
      if (childTree.value != null) {
        children.push(new NamedNode(childName, childTree.value));
      }
    });
  }
  return children;
}
function compoundWriteChildCompoundWrite(compoundWrite, path) {
  if (pathIsEmpty(path)) {
    return compoundWrite;
  } else {
    const shadowingNode = compoundWriteGetCompleteNode(compoundWrite, path);
    if (shadowingNode != null) {
      return new CompoundWrite(new ImmutableTree(shadowingNode));
    } else {
      return new CompoundWrite(compoundWrite.writeTree_.subtree(path));
    }
  }
}
function compoundWriteIsEmpty(compoundWrite) {
  return compoundWrite.writeTree_.isEmpty();
}
function compoundWriteApply(compoundWrite, node) {
  return applySubtreeWrite(newEmptyPath(), compoundWrite.writeTree_, node);
}
function applySubtreeWrite(relativePath, writeTree, node) {
  if (writeTree.value != null) {
    return node.updateChild(relativePath, writeTree.value);
  } else {
    let priorityWrite = null;
    writeTree.children.inorderTraversal((childKey, childTree) => {
      if (childKey === ".priority") {
        assert(childTree.value !== null, "Priority writes must always be leaf nodes");
        priorityWrite = childTree.value;
      } else {
        node = applySubtreeWrite(pathChild(relativePath, childKey), childTree, node);
      }
    });
    if (!node.getChild(relativePath).isEmpty() && priorityWrite !== null) {
      node = node.updateChild(pathChild(relativePath, ".priority"), priorityWrite);
    }
    return node;
  }
}
function writeTreeChildWrites(writeTree, path) {
  return newWriteTreeRef(path, writeTree);
}
function writeTreeAddOverwrite(writeTree, path, snap, writeId, visible) {
  assert(writeId > writeTree.lastWriteId, "Stacking an older write on top of newer ones");
  if (visible === void 0) {
    visible = true;
  }
  writeTree.allWrites.push({
    path,
    snap,
    writeId,
    visible
  });
  if (visible) {
    writeTree.visibleWrites = compoundWriteAddWrite(writeTree.visibleWrites, path, snap);
  }
  writeTree.lastWriteId = writeId;
}
function writeTreeGetWrite(writeTree, writeId) {
  for (let i = 0; i < writeTree.allWrites.length; i++) {
    const record = writeTree.allWrites[i];
    if (record.writeId === writeId) {
      return record;
    }
  }
  return null;
}
function writeTreeRemoveWrite(writeTree, writeId) {
  const idx = writeTree.allWrites.findIndex((s) => {
    return s.writeId === writeId;
  });
  assert(idx >= 0, "removeWrite called with nonexistent writeId.");
  const writeToRemove = writeTree.allWrites[idx];
  writeTree.allWrites.splice(idx, 1);
  let removedWriteWasVisible = writeToRemove.visible;
  let removedWriteOverlapsWithOtherWrites = false;
  let i = writeTree.allWrites.length - 1;
  while (removedWriteWasVisible && i >= 0) {
    const currentWrite = writeTree.allWrites[i];
    if (currentWrite.visible) {
      if (i >= idx && writeTreeRecordContainsPath_(currentWrite, writeToRemove.path)) {
        removedWriteWasVisible = false;
      } else if (pathContains(writeToRemove.path, currentWrite.path)) {
        removedWriteOverlapsWithOtherWrites = true;
      }
    }
    i--;
  }
  if (!removedWriteWasVisible) {
    return false;
  } else if (removedWriteOverlapsWithOtherWrites) {
    writeTreeResetTree_(writeTree);
    return true;
  } else {
    if (writeToRemove.snap) {
      writeTree.visibleWrites = compoundWriteRemoveWrite(writeTree.visibleWrites, writeToRemove.path);
    } else {
      const children = writeToRemove.children;
      each(children, (childName) => {
        writeTree.visibleWrites = compoundWriteRemoveWrite(writeTree.visibleWrites, pathChild(writeToRemove.path, childName));
      });
    }
    return true;
  }
}
function writeTreeRecordContainsPath_(writeRecord, path) {
  if (writeRecord.snap) {
    return pathContains(writeRecord.path, path);
  } else {
    for (const childName in writeRecord.children) {
      if (writeRecord.children.hasOwnProperty(childName) && pathContains(pathChild(writeRecord.path, childName), path)) {
        return true;
      }
    }
    return false;
  }
}
function writeTreeResetTree_(writeTree) {
  writeTree.visibleWrites = writeTreeLayerTree_(writeTree.allWrites, writeTreeDefaultFilter_, newEmptyPath());
  if (writeTree.allWrites.length > 0) {
    writeTree.lastWriteId = writeTree.allWrites[writeTree.allWrites.length - 1].writeId;
  } else {
    writeTree.lastWriteId = -1;
  }
}
function writeTreeDefaultFilter_(write) {
  return write.visible;
}
function writeTreeLayerTree_(writes, filter, treeRoot) {
  let compoundWrite = CompoundWrite.empty();
  for (let i = 0; i < writes.length; ++i) {
    const write = writes[i];
    if (filter(write)) {
      const writePath = write.path;
      let relativePath;
      if (write.snap) {
        if (pathContains(treeRoot, writePath)) {
          relativePath = newRelativePath(treeRoot, writePath);
          compoundWrite = compoundWriteAddWrite(compoundWrite, relativePath, write.snap);
        } else if (pathContains(writePath, treeRoot)) {
          relativePath = newRelativePath(writePath, treeRoot);
          compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), write.snap.getChild(relativePath));
        } else
          ;
      } else if (write.children) {
        if (pathContains(treeRoot, writePath)) {
          relativePath = newRelativePath(treeRoot, writePath);
          compoundWrite = compoundWriteAddWrites(compoundWrite, relativePath, write.children);
        } else if (pathContains(writePath, treeRoot)) {
          relativePath = newRelativePath(writePath, treeRoot);
          if (pathIsEmpty(relativePath)) {
            compoundWrite = compoundWriteAddWrites(compoundWrite, newEmptyPath(), write.children);
          } else {
            const child2 = safeGet(write.children, pathGetFront(relativePath));
            if (child2) {
              const deepNode = child2.getChild(pathPopFront(relativePath));
              compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), deepNode);
            }
          }
        } else
          ;
      } else {
        throw assertionError("WriteRecord should have .snap or .children");
      }
    }
  }
  return compoundWrite;
}
function writeTreeCalcCompleteEventCache(writeTree, treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
  if (!writeIdsToExclude && !includeHiddenWrites) {
    const shadowingNode = compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
    if (shadowingNode != null) {
      return shadowingNode;
    } else {
      const subMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
      if (compoundWriteIsEmpty(subMerge)) {
        return completeServerCache;
      } else if (completeServerCache == null && !compoundWriteHasCompleteWrite(subMerge, newEmptyPath())) {
        return null;
      } else {
        const layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
        return compoundWriteApply(subMerge, layeredCache);
      }
    }
  } else {
    const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
    if (!includeHiddenWrites && compoundWriteIsEmpty(merge)) {
      return completeServerCache;
    } else {
      if (!includeHiddenWrites && completeServerCache == null && !compoundWriteHasCompleteWrite(merge, newEmptyPath())) {
        return null;
      } else {
        const filter = function(write) {
          return (write.visible || includeHiddenWrites) && (!writeIdsToExclude || !~writeIdsToExclude.indexOf(write.writeId)) && (pathContains(write.path, treePath) || pathContains(treePath, write.path));
        };
        const mergeAtPath = writeTreeLayerTree_(writeTree.allWrites, filter, treePath);
        const layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
        return compoundWriteApply(mergeAtPath, layeredCache);
      }
    }
  }
}
function writeTreeCalcCompleteEventChildren(writeTree, treePath, completeServerChildren) {
  let completeChildren = ChildrenNode.EMPTY_NODE;
  const topLevelSet = compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
  if (topLevelSet) {
    if (!topLevelSet.isLeafNode()) {
      topLevelSet.forEachChild(PRIORITY_INDEX, (childName, childSnap) => {
        completeChildren = completeChildren.updateImmediateChild(childName, childSnap);
      });
    }
    return completeChildren;
  } else if (completeServerChildren) {
    const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
    completeServerChildren.forEachChild(PRIORITY_INDEX, (childName, childNode) => {
      const node = compoundWriteApply(compoundWriteChildCompoundWrite(merge, new Path(childName)), childNode);
      completeChildren = completeChildren.updateImmediateChild(childName, node);
    });
    compoundWriteGetCompleteChildren(merge).forEach((namedNode) => {
      completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
    });
    return completeChildren;
  } else {
    const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
    compoundWriteGetCompleteChildren(merge).forEach((namedNode) => {
      completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
    });
    return completeChildren;
  }
}
function writeTreeCalcEventCacheAfterServerOverwrite(writeTree, treePath, childPath, existingEventSnap, existingServerSnap) {
  assert(existingEventSnap || existingServerSnap, "Either existingEventSnap or existingServerSnap must exist");
  const path = pathChild(treePath, childPath);
  if (compoundWriteHasCompleteWrite(writeTree.visibleWrites, path)) {
    return null;
  } else {
    const childMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, path);
    if (compoundWriteIsEmpty(childMerge)) {
      return existingServerSnap.getChild(childPath);
    } else {
      return compoundWriteApply(childMerge, existingServerSnap.getChild(childPath));
    }
  }
}
function writeTreeCalcCompleteChild(writeTree, treePath, childKey, existingServerSnap) {
  const path = pathChild(treePath, childKey);
  const shadowingNode = compoundWriteGetCompleteNode(writeTree.visibleWrites, path);
  if (shadowingNode != null) {
    return shadowingNode;
  } else {
    if (existingServerSnap.isCompleteForChild(childKey)) {
      const childMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, path);
      return compoundWriteApply(childMerge, existingServerSnap.getNode().getImmediateChild(childKey));
    } else {
      return null;
    }
  }
}
function writeTreeShadowingWrite(writeTree, path) {
  return compoundWriteGetCompleteNode(writeTree.visibleWrites, path);
}
function writeTreeCalcIndexedSlice(writeTree, treePath, completeServerData, startPost, count, reverse, index) {
  let toIterate;
  const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
  const shadowingNode = compoundWriteGetCompleteNode(merge, newEmptyPath());
  if (shadowingNode != null) {
    toIterate = shadowingNode;
  } else if (completeServerData != null) {
    toIterate = compoundWriteApply(merge, completeServerData);
  } else {
    return [];
  }
  toIterate = toIterate.withIndex(index);
  if (!toIterate.isEmpty() && !toIterate.isLeafNode()) {
    const nodes = [];
    const cmp = index.getCompare();
    const iter = reverse ? toIterate.getReverseIteratorFrom(startPost, index) : toIterate.getIteratorFrom(startPost, index);
    let next = iter.getNext();
    while (next && nodes.length < count) {
      if (cmp(next, startPost) !== 0) {
        nodes.push(next);
      }
      next = iter.getNext();
    }
    return nodes;
  } else {
    return [];
  }
}
function newWriteTree() {
  return {
    visibleWrites: CompoundWrite.empty(),
    allWrites: [],
    lastWriteId: -1
  };
}
function writeTreeRefCalcCompleteEventCache(writeTreeRef, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
  return writeTreeCalcCompleteEventCache(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites);
}
function writeTreeRefCalcCompleteEventChildren(writeTreeRef, completeServerChildren) {
  return writeTreeCalcCompleteEventChildren(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerChildren);
}
function writeTreeRefCalcEventCacheAfterServerOverwrite(writeTreeRef, path, existingEventSnap, existingServerSnap) {
  return writeTreeCalcEventCacheAfterServerOverwrite(writeTreeRef.writeTree, writeTreeRef.treePath, path, existingEventSnap, existingServerSnap);
}
function writeTreeRefShadowingWrite(writeTreeRef, path) {
  return writeTreeShadowingWrite(writeTreeRef.writeTree, pathChild(writeTreeRef.treePath, path));
}
function writeTreeRefCalcIndexedSlice(writeTreeRef, completeServerData, startPost, count, reverse, index) {
  return writeTreeCalcIndexedSlice(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerData, startPost, count, reverse, index);
}
function writeTreeRefCalcCompleteChild(writeTreeRef, childKey, existingServerCache) {
  return writeTreeCalcCompleteChild(writeTreeRef.writeTree, writeTreeRef.treePath, childKey, existingServerCache);
}
function writeTreeRefChild(writeTreeRef, childName) {
  return newWriteTreeRef(pathChild(writeTreeRef.treePath, childName), writeTreeRef.writeTree);
}
function newWriteTreeRef(path, writeTree) {
  return {
    treePath: path,
    writeTree
  };
}
var ChildChangeAccumulator = class {
  constructor() {
    this.changeMap = /* @__PURE__ */ new Map();
  }
  trackChildChange(change) {
    const type = change.type;
    const childKey = change.childName;
    assert(type === "child_added" || type === "child_changed" || type === "child_removed", "Only child changes supported for tracking");
    assert(childKey !== ".priority", "Only non-priority child changes can be tracked.");
    const oldChange = this.changeMap.get(childKey);
    if (oldChange) {
      const oldType = oldChange.type;
      if (type === "child_added" && oldType === "child_removed") {
        this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.snapshotNode));
      } else if (type === "child_removed" && oldType === "child_added") {
        this.changeMap.delete(childKey);
      } else if (type === "child_removed" && oldType === "child_changed") {
        this.changeMap.set(childKey, changeChildRemoved(childKey, oldChange.oldSnap));
      } else if (type === "child_changed" && oldType === "child_added") {
        this.changeMap.set(childKey, changeChildAdded(childKey, change.snapshotNode));
      } else if (type === "child_changed" && oldType === "child_changed") {
        this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.oldSnap));
      } else {
        throw assertionError("Illegal combination of changes: " + change + " occurred after " + oldChange);
      }
    } else {
      this.changeMap.set(childKey, change);
    }
  }
  getChanges() {
    return Array.from(this.changeMap.values());
  }
};
var NoCompleteChildSource_ = class {
  getCompleteChild(childKey) {
    return null;
  }
  getChildAfterChild(index, child2, reverse) {
    return null;
  }
};
var NO_COMPLETE_CHILD_SOURCE = new NoCompleteChildSource_();
var WriteTreeCompleteChildSource = class {
  constructor(writes_, viewCache_, optCompleteServerCache_ = null) {
    this.writes_ = writes_;
    this.viewCache_ = viewCache_;
    this.optCompleteServerCache_ = optCompleteServerCache_;
  }
  getCompleteChild(childKey) {
    const node = this.viewCache_.eventCache;
    if (node.isCompleteForChild(childKey)) {
      return node.getNode().getImmediateChild(childKey);
    } else {
      const serverNode = this.optCompleteServerCache_ != null ? new CacheNode(this.optCompleteServerCache_, true, false) : this.viewCache_.serverCache;
      return writeTreeRefCalcCompleteChild(this.writes_, childKey, serverNode);
    }
  }
  getChildAfterChild(index, child2, reverse) {
    const completeServerData = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : viewCacheGetCompleteServerSnap(this.viewCache_);
    const nodes = writeTreeRefCalcIndexedSlice(this.writes_, completeServerData, child2, 1, reverse, index);
    if (nodes.length === 0) {
      return null;
    } else {
      return nodes[0];
    }
  }
};
function newViewProcessor(filter) {
  return { filter };
}
function viewProcessorAssertIndexed(viewProcessor, viewCache) {
  assert(viewCache.eventCache.getNode().isIndexed(viewProcessor.filter.getIndex()), "Event snap not indexed");
  assert(viewCache.serverCache.getNode().isIndexed(viewProcessor.filter.getIndex()), "Server snap not indexed");
}
function viewProcessorApplyOperation(viewProcessor, oldViewCache, operation, writesCache, completeCache) {
  const accumulator = new ChildChangeAccumulator();
  let newViewCache2, filterServerNode;
  if (operation.type === OperationType.OVERWRITE) {
    const overwrite = operation;
    if (overwrite.source.fromUser) {
      newViewCache2 = viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, accumulator);
    } else {
      assert(overwrite.source.fromServer, "Unknown source.");
      filterServerNode = overwrite.source.tagged || oldViewCache.serverCache.isFiltered() && !pathIsEmpty(overwrite.path);
      newViewCache2 = viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, filterServerNode, accumulator);
    }
  } else if (operation.type === OperationType.MERGE) {
    const merge = operation;
    if (merge.source.fromUser) {
      newViewCache2 = viewProcessorApplyUserMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, accumulator);
    } else {
      assert(merge.source.fromServer, "Unknown source.");
      filterServerNode = merge.source.tagged || oldViewCache.serverCache.isFiltered();
      newViewCache2 = viewProcessorApplyServerMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, filterServerNode, accumulator);
    }
  } else if (operation.type === OperationType.ACK_USER_WRITE) {
    const ackUserWrite = operation;
    if (!ackUserWrite.revert) {
      newViewCache2 = viewProcessorAckUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, ackUserWrite.affectedTree, writesCache, completeCache, accumulator);
    } else {
      newViewCache2 = viewProcessorRevertUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, writesCache, completeCache, accumulator);
    }
  } else if (operation.type === OperationType.LISTEN_COMPLETE) {
    newViewCache2 = viewProcessorListenComplete(viewProcessor, oldViewCache, operation.path, writesCache, accumulator);
  } else {
    throw assertionError("Unknown operation type: " + operation.type);
  }
  const changes = accumulator.getChanges();
  viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache2, changes);
  return { viewCache: newViewCache2, changes };
}
function viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache2, accumulator) {
  const eventSnap = newViewCache2.eventCache;
  if (eventSnap.isFullyInitialized()) {
    const isLeafOrEmpty = eventSnap.getNode().isLeafNode() || eventSnap.getNode().isEmpty();
    const oldCompleteSnap = viewCacheGetCompleteEventSnap(oldViewCache);
    if (accumulator.length > 0 || !oldViewCache.eventCache.isFullyInitialized() || isLeafOrEmpty && !eventSnap.getNode().equals(oldCompleteSnap) || !eventSnap.getNode().getPriority().equals(oldCompleteSnap.getPriority())) {
      accumulator.push(changeValue(viewCacheGetCompleteEventSnap(newViewCache2)));
    }
  }
}
function viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, viewCache, changePath, writesCache, source, accumulator) {
  const oldEventSnap = viewCache.eventCache;
  if (writeTreeRefShadowingWrite(writesCache, changePath) != null) {
    return viewCache;
  } else {
    let newEventCache, serverNode;
    if (pathIsEmpty(changePath)) {
      assert(viewCache.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data");
      if (viewCache.serverCache.isFiltered()) {
        const serverCache = viewCacheGetCompleteServerSnap(viewCache);
        const completeChildren = serverCache instanceof ChildrenNode ? serverCache : ChildrenNode.EMPTY_NODE;
        const completeEventChildren = writeTreeRefCalcCompleteEventChildren(writesCache, completeChildren);
        newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeEventChildren, accumulator);
      } else {
        const completeNode = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
        newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeNode, accumulator);
      }
    } else {
      const childKey = pathGetFront(changePath);
      if (childKey === ".priority") {
        assert(pathGetLength(changePath) === 1, "Can't have a priority with additional path components");
        const oldEventNode = oldEventSnap.getNode();
        serverNode = viewCache.serverCache.getNode();
        const updatedPriority = writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventNode, serverNode);
        if (updatedPriority != null) {
          newEventCache = viewProcessor.filter.updatePriority(oldEventNode, updatedPriority);
        } else {
          newEventCache = oldEventSnap.getNode();
        }
      } else {
        const childChangePath = pathPopFront(changePath);
        let newEventChild;
        if (oldEventSnap.isCompleteForChild(childKey)) {
          serverNode = viewCache.serverCache.getNode();
          const eventChildUpdate = writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventSnap.getNode(), serverNode);
          if (eventChildUpdate != null) {
            newEventChild = oldEventSnap.getNode().getImmediateChild(childKey).updateChild(childChangePath, eventChildUpdate);
          } else {
            newEventChild = oldEventSnap.getNode().getImmediateChild(childKey);
          }
        } else {
          newEventChild = writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
        }
        if (newEventChild != null) {
          newEventCache = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newEventChild, childChangePath, source, accumulator);
        } else {
          newEventCache = oldEventSnap.getNode();
        }
      }
    }
    return viewCacheUpdateEventSnap(viewCache, newEventCache, oldEventSnap.isFullyInitialized() || pathIsEmpty(changePath), viewProcessor.filter.filtersNodes());
  }
}
function viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, filterServerNode, accumulator) {
  const oldServerSnap = oldViewCache.serverCache;
  let newServerCache;
  const serverFilter = filterServerNode ? viewProcessor.filter : viewProcessor.filter.getIndexedFilter();
  if (pathIsEmpty(changePath)) {
    newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), changedSnap, null);
  } else if (serverFilter.filtersNodes() && !oldServerSnap.isFiltered()) {
    const newServerNode = oldServerSnap.getNode().updateChild(changePath, changedSnap);
    newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), newServerNode, null);
  } else {
    const childKey = pathGetFront(changePath);
    if (!oldServerSnap.isCompleteForPath(changePath) && pathGetLength(changePath) > 1) {
      return oldViewCache;
    }
    const childChangePath = pathPopFront(changePath);
    const childNode = oldServerSnap.getNode().getImmediateChild(childKey);
    const newChildNode = childNode.updateChild(childChangePath, changedSnap);
    if (childKey === ".priority") {
      newServerCache = serverFilter.updatePriority(oldServerSnap.getNode(), newChildNode);
    } else {
      newServerCache = serverFilter.updateChild(oldServerSnap.getNode(), childKey, newChildNode, childChangePath, NO_COMPLETE_CHILD_SOURCE, null);
    }
  }
  const newViewCache2 = viewCacheUpdateServerSnap(oldViewCache, newServerCache, oldServerSnap.isFullyInitialized() || pathIsEmpty(changePath), serverFilter.filtersNodes());
  const source = new WriteTreeCompleteChildSource(writesCache, newViewCache2, completeCache);
  return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache2, changePath, writesCache, source, accumulator);
}
function viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, accumulator) {
  const oldEventSnap = oldViewCache.eventCache;
  let newViewCache2, newEventCache;
  const source = new WriteTreeCompleteChildSource(writesCache, oldViewCache, completeCache);
  if (pathIsEmpty(changePath)) {
    newEventCache = viewProcessor.filter.updateFullNode(oldViewCache.eventCache.getNode(), changedSnap, accumulator);
    newViewCache2 = viewCacheUpdateEventSnap(oldViewCache, newEventCache, true, viewProcessor.filter.filtersNodes());
  } else {
    const childKey = pathGetFront(changePath);
    if (childKey === ".priority") {
      newEventCache = viewProcessor.filter.updatePriority(oldViewCache.eventCache.getNode(), changedSnap);
      newViewCache2 = viewCacheUpdateEventSnap(oldViewCache, newEventCache, oldEventSnap.isFullyInitialized(), oldEventSnap.isFiltered());
    } else {
      const childChangePath = pathPopFront(changePath);
      const oldChild = oldEventSnap.getNode().getImmediateChild(childKey);
      let newChild;
      if (pathIsEmpty(childChangePath)) {
        newChild = changedSnap;
      } else {
        const childNode = source.getCompleteChild(childKey);
        if (childNode != null) {
          if (pathGetBack(childChangePath) === ".priority" && childNode.getChild(pathParent(childChangePath)).isEmpty()) {
            newChild = childNode;
          } else {
            newChild = childNode.updateChild(childChangePath, changedSnap);
          }
        } else {
          newChild = ChildrenNode.EMPTY_NODE;
        }
      }
      if (!oldChild.equals(newChild)) {
        const newEventSnap = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newChild, childChangePath, source, accumulator);
        newViewCache2 = viewCacheUpdateEventSnap(oldViewCache, newEventSnap, oldEventSnap.isFullyInitialized(), viewProcessor.filter.filtersNodes());
      } else {
        newViewCache2 = oldViewCache;
      }
    }
  }
  return newViewCache2;
}
function viewProcessorCacheHasChild(viewCache, childKey) {
  return viewCache.eventCache.isCompleteForChild(childKey);
}
function viewProcessorApplyUserMerge(viewProcessor, viewCache, path, changedChildren, writesCache, serverCache, accumulator) {
  let curViewCache = viewCache;
  changedChildren.foreach((relativePath, childNode) => {
    const writePath = pathChild(path, relativePath);
    if (viewProcessorCacheHasChild(viewCache, pathGetFront(writePath))) {
      curViewCache = viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
    }
  });
  changedChildren.foreach((relativePath, childNode) => {
    const writePath = pathChild(path, relativePath);
    if (!viewProcessorCacheHasChild(viewCache, pathGetFront(writePath))) {
      curViewCache = viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
    }
  });
  return curViewCache;
}
function viewProcessorApplyMerge(viewProcessor, node, merge) {
  merge.foreach((relativePath, childNode) => {
    node = node.updateChild(relativePath, childNode);
  });
  return node;
}
function viewProcessorApplyServerMerge(viewProcessor, viewCache, path, changedChildren, writesCache, serverCache, filterServerNode, accumulator) {
  if (viewCache.serverCache.getNode().isEmpty() && !viewCache.serverCache.isFullyInitialized()) {
    return viewCache;
  }
  let curViewCache = viewCache;
  let viewMergeTree;
  if (pathIsEmpty(path)) {
    viewMergeTree = changedChildren;
  } else {
    viewMergeTree = new ImmutableTree(null).setTree(path, changedChildren);
  }
  const serverNode = viewCache.serverCache.getNode();
  viewMergeTree.children.inorderTraversal((childKey, childTree) => {
    if (serverNode.hasChild(childKey)) {
      const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
      const newChild = viewProcessorApplyMerge(viewProcessor, serverChild, childTree);
      curViewCache = viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
    }
  });
  viewMergeTree.children.inorderTraversal((childKey, childMergeTree) => {
    const isUnknownDeepMerge = !viewCache.serverCache.isCompleteForChild(childKey) && childMergeTree.value === null;
    if (!serverNode.hasChild(childKey) && !isUnknownDeepMerge) {
      const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
      const newChild = viewProcessorApplyMerge(viewProcessor, serverChild, childMergeTree);
      curViewCache = viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
    }
  });
  return curViewCache;
}
function viewProcessorAckUserWrite(viewProcessor, viewCache, ackPath, affectedTree, writesCache, completeCache, accumulator) {
  if (writeTreeRefShadowingWrite(writesCache, ackPath) != null) {
    return viewCache;
  }
  const filterServerNode = viewCache.serverCache.isFiltered();
  const serverCache = viewCache.serverCache;
  if (affectedTree.value != null) {
    if (pathIsEmpty(ackPath) && serverCache.isFullyInitialized() || serverCache.isCompleteForPath(ackPath)) {
      return viewProcessorApplyServerOverwrite(viewProcessor, viewCache, ackPath, serverCache.getNode().getChild(ackPath), writesCache, completeCache, filterServerNode, accumulator);
    } else if (pathIsEmpty(ackPath)) {
      let changedChildren = new ImmutableTree(null);
      serverCache.getNode().forEachChild(KEY_INDEX, (name5, node) => {
        changedChildren = changedChildren.set(new Path(name5), node);
      });
      return viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren, writesCache, completeCache, filterServerNode, accumulator);
    } else {
      return viewCache;
    }
  } else {
    let changedChildren = new ImmutableTree(null);
    affectedTree.foreach((mergePath, value) => {
      const serverCachePath = pathChild(ackPath, mergePath);
      if (serverCache.isCompleteForPath(serverCachePath)) {
        changedChildren = changedChildren.set(mergePath, serverCache.getNode().getChild(serverCachePath));
      }
    });
    return viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren, writesCache, completeCache, filterServerNode, accumulator);
  }
}
function viewProcessorListenComplete(viewProcessor, viewCache, path, writesCache, accumulator) {
  const oldServerNode = viewCache.serverCache;
  const newViewCache2 = viewCacheUpdateServerSnap(viewCache, oldServerNode.getNode(), oldServerNode.isFullyInitialized() || pathIsEmpty(path), oldServerNode.isFiltered());
  return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache2, path, writesCache, NO_COMPLETE_CHILD_SOURCE, accumulator);
}
function viewProcessorRevertUserWrite(viewProcessor, viewCache, path, writesCache, completeServerCache, accumulator) {
  let complete;
  if (writeTreeRefShadowingWrite(writesCache, path) != null) {
    return viewCache;
  } else {
    const source = new WriteTreeCompleteChildSource(writesCache, viewCache, completeServerCache);
    const oldEventCache = viewCache.eventCache.getNode();
    let newEventCache;
    if (pathIsEmpty(path) || pathGetFront(path) === ".priority") {
      let newNode;
      if (viewCache.serverCache.isFullyInitialized()) {
        newNode = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
      } else {
        const serverChildren = viewCache.serverCache.getNode();
        assert(serverChildren instanceof ChildrenNode, "serverChildren would be complete if leaf node");
        newNode = writeTreeRefCalcCompleteEventChildren(writesCache, serverChildren);
      }
      newNode = newNode;
      newEventCache = viewProcessor.filter.updateFullNode(oldEventCache, newNode, accumulator);
    } else {
      const childKey = pathGetFront(path);
      let newChild = writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
      if (newChild == null && viewCache.serverCache.isCompleteForChild(childKey)) {
        newChild = oldEventCache.getImmediateChild(childKey);
      }
      if (newChild != null) {
        newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, newChild, pathPopFront(path), source, accumulator);
      } else if (viewCache.eventCache.getNode().hasChild(childKey)) {
        newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, ChildrenNode.EMPTY_NODE, pathPopFront(path), source, accumulator);
      } else {
        newEventCache = oldEventCache;
      }
      if (newEventCache.isEmpty() && viewCache.serverCache.isFullyInitialized()) {
        complete = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
        if (complete.isLeafNode()) {
          newEventCache = viewProcessor.filter.updateFullNode(newEventCache, complete, accumulator);
        }
      }
    }
    complete = viewCache.serverCache.isFullyInitialized() || writeTreeRefShadowingWrite(writesCache, newEmptyPath()) != null;
    return viewCacheUpdateEventSnap(viewCache, newEventCache, complete, viewProcessor.filter.filtersNodes());
  }
}
var View = class {
  constructor(query_, initialViewCache) {
    this.query_ = query_;
    this.eventRegistrations_ = [];
    const params = this.query_._queryParams;
    const indexFilter = new IndexedFilter(params.getIndex());
    const filter = queryParamsGetNodeFilter(params);
    this.processor_ = newViewProcessor(filter);
    const initialServerCache = initialViewCache.serverCache;
    const initialEventCache = initialViewCache.eventCache;
    const serverSnap = indexFilter.updateFullNode(ChildrenNode.EMPTY_NODE, initialServerCache.getNode(), null);
    const eventSnap = filter.updateFullNode(ChildrenNode.EMPTY_NODE, initialEventCache.getNode(), null);
    const newServerCache = new CacheNode(serverSnap, initialServerCache.isFullyInitialized(), indexFilter.filtersNodes());
    const newEventCache = new CacheNode(eventSnap, initialEventCache.isFullyInitialized(), filter.filtersNodes());
    this.viewCache_ = newViewCache(newEventCache, newServerCache);
    this.eventGenerator_ = new EventGenerator(this.query_);
  }
  get query() {
    return this.query_;
  }
};
function viewGetServerCache(view) {
  return view.viewCache_.serverCache.getNode();
}
function viewGetCompleteServerCache(view, path) {
  const cache = viewCacheGetCompleteServerSnap(view.viewCache_);
  if (cache) {
    if (view.query._queryParams.loadsAllData() || !pathIsEmpty(path) && !cache.getImmediateChild(pathGetFront(path)).isEmpty()) {
      return cache.getChild(path);
    }
  }
  return null;
}
function viewIsEmpty(view) {
  return view.eventRegistrations_.length === 0;
}
function viewAddEventRegistration(view, eventRegistration) {
  view.eventRegistrations_.push(eventRegistration);
}
function viewRemoveEventRegistration(view, eventRegistration, cancelError) {
  const cancelEvents = [];
  if (cancelError) {
    assert(eventRegistration == null, "A cancel should cancel all event registrations.");
    const path = view.query._path;
    view.eventRegistrations_.forEach((registration) => {
      const maybeEvent = registration.createCancelEvent(cancelError, path);
      if (maybeEvent) {
        cancelEvents.push(maybeEvent);
      }
    });
  }
  if (eventRegistration) {
    let remaining = [];
    for (let i = 0; i < view.eventRegistrations_.length; ++i) {
      const existing = view.eventRegistrations_[i];
      if (!existing.matches(eventRegistration)) {
        remaining.push(existing);
      } else if (eventRegistration.hasAnyCallback()) {
        remaining = remaining.concat(view.eventRegistrations_.slice(i + 1));
        break;
      }
    }
    view.eventRegistrations_ = remaining;
  } else {
    view.eventRegistrations_ = [];
  }
  return cancelEvents;
}
function viewApplyOperation(view, operation, writesCache, completeServerCache) {
  if (operation.type === OperationType.MERGE && operation.source.queryId !== null) {
    assert(viewCacheGetCompleteServerSnap(view.viewCache_), "We should always have a full cache before handling merges");
    assert(viewCacheGetCompleteEventSnap(view.viewCache_), "Missing event cache, even though we have a server cache");
  }
  const oldViewCache = view.viewCache_;
  const result = viewProcessorApplyOperation(view.processor_, oldViewCache, operation, writesCache, completeServerCache);
  viewProcessorAssertIndexed(view.processor_, result.viewCache);
  assert(result.viewCache.serverCache.isFullyInitialized() || !oldViewCache.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back");
  view.viewCache_ = result.viewCache;
  return viewGenerateEventsForChanges_(view, result.changes, result.viewCache.eventCache.getNode(), null);
}
function viewGetInitialEvents(view, registration) {
  const eventSnap = view.viewCache_.eventCache;
  const initialChanges = [];
  if (!eventSnap.getNode().isLeafNode()) {
    const eventNode = eventSnap.getNode();
    eventNode.forEachChild(PRIORITY_INDEX, (key, childNode) => {
      initialChanges.push(changeChildAdded(key, childNode));
    });
  }
  if (eventSnap.isFullyInitialized()) {
    initialChanges.push(changeValue(eventSnap.getNode()));
  }
  return viewGenerateEventsForChanges_(view, initialChanges, eventSnap.getNode(), registration);
}
function viewGenerateEventsForChanges_(view, changes, eventCache, eventRegistration) {
  const registrations = eventRegistration ? [eventRegistration] : view.eventRegistrations_;
  return eventGeneratorGenerateEventsForChanges(view.eventGenerator_, changes, eventCache, registrations);
}
var referenceConstructor$1;
var SyncPoint = class {
  constructor() {
    this.views = /* @__PURE__ */ new Map();
  }
};
function syncPointSetReferenceConstructor(val) {
  assert(!referenceConstructor$1, "__referenceConstructor has already been defined");
  referenceConstructor$1 = val;
}
function syncPointGetReferenceConstructor() {
  assert(referenceConstructor$1, "Reference.ts has not been loaded");
  return referenceConstructor$1;
}
function syncPointIsEmpty(syncPoint) {
  return syncPoint.views.size === 0;
}
function syncPointApplyOperation(syncPoint, operation, writesCache, optCompleteServerCache) {
  const queryId = operation.source.queryId;
  if (queryId !== null) {
    const view = syncPoint.views.get(queryId);
    assert(view != null, "SyncTree gave us an op for an invalid query.");
    return viewApplyOperation(view, operation, writesCache, optCompleteServerCache);
  } else {
    let events = [];
    for (const view of syncPoint.views.values()) {
      events = events.concat(viewApplyOperation(view, operation, writesCache, optCompleteServerCache));
    }
    return events;
  }
}
function syncPointGetView(syncPoint, query, writesCache, serverCache, serverCacheComplete) {
  const queryId = query._queryIdentifier;
  const view = syncPoint.views.get(queryId);
  if (!view) {
    let eventCache = writeTreeRefCalcCompleteEventCache(writesCache, serverCacheComplete ? serverCache : null);
    let eventCacheComplete = false;
    if (eventCache) {
      eventCacheComplete = true;
    } else if (serverCache instanceof ChildrenNode) {
      eventCache = writeTreeRefCalcCompleteEventChildren(writesCache, serverCache);
      eventCacheComplete = false;
    } else {
      eventCache = ChildrenNode.EMPTY_NODE;
      eventCacheComplete = false;
    }
    const viewCache = newViewCache(new CacheNode(eventCache, eventCacheComplete, false), new CacheNode(serverCache, serverCacheComplete, false));
    return new View(query, viewCache);
  }
  return view;
}
function syncPointAddEventRegistration(syncPoint, query, eventRegistration, writesCache, serverCache, serverCacheComplete) {
  const view = syncPointGetView(syncPoint, query, writesCache, serverCache, serverCacheComplete);
  if (!syncPoint.views.has(query._queryIdentifier)) {
    syncPoint.views.set(query._queryIdentifier, view);
  }
  viewAddEventRegistration(view, eventRegistration);
  return viewGetInitialEvents(view, eventRegistration);
}
function syncPointRemoveEventRegistration(syncPoint, query, eventRegistration, cancelError) {
  const queryId = query._queryIdentifier;
  const removed = [];
  let cancelEvents = [];
  const hadCompleteView = syncPointHasCompleteView(syncPoint);
  if (queryId === "default") {
    for (const [viewQueryId, view] of syncPoint.views.entries()) {
      cancelEvents = cancelEvents.concat(viewRemoveEventRegistration(view, eventRegistration, cancelError));
      if (viewIsEmpty(view)) {
        syncPoint.views.delete(viewQueryId);
        if (!view.query._queryParams.loadsAllData()) {
          removed.push(view.query);
        }
      }
    }
  } else {
    const view = syncPoint.views.get(queryId);
    if (view) {
      cancelEvents = cancelEvents.concat(viewRemoveEventRegistration(view, eventRegistration, cancelError));
      if (viewIsEmpty(view)) {
        syncPoint.views.delete(queryId);
        if (!view.query._queryParams.loadsAllData()) {
          removed.push(view.query);
        }
      }
    }
  }
  if (hadCompleteView && !syncPointHasCompleteView(syncPoint)) {
    removed.push(new (syncPointGetReferenceConstructor())(query._repo, query._path));
  }
  return { removed, events: cancelEvents };
}
function syncPointGetQueryViews(syncPoint) {
  const result = [];
  for (const view of syncPoint.views.values()) {
    if (!view.query._queryParams.loadsAllData()) {
      result.push(view);
    }
  }
  return result;
}
function syncPointGetCompleteServerCache(syncPoint, path) {
  let serverCache = null;
  for (const view of syncPoint.views.values()) {
    serverCache = serverCache || viewGetCompleteServerCache(view, path);
  }
  return serverCache;
}
function syncPointViewForQuery(syncPoint, query) {
  const params = query._queryParams;
  if (params.loadsAllData()) {
    return syncPointGetCompleteView(syncPoint);
  } else {
    const queryId = query._queryIdentifier;
    return syncPoint.views.get(queryId);
  }
}
function syncPointViewExistsForQuery(syncPoint, query) {
  return syncPointViewForQuery(syncPoint, query) != null;
}
function syncPointHasCompleteView(syncPoint) {
  return syncPointGetCompleteView(syncPoint) != null;
}
function syncPointGetCompleteView(syncPoint) {
  for (const view of syncPoint.views.values()) {
    if (view.query._queryParams.loadsAllData()) {
      return view;
    }
  }
  return null;
}
var referenceConstructor;
function syncTreeSetReferenceConstructor(val) {
  assert(!referenceConstructor, "__referenceConstructor has already been defined");
  referenceConstructor = val;
}
function syncTreeGetReferenceConstructor() {
  assert(referenceConstructor, "Reference.ts has not been loaded");
  return referenceConstructor;
}
var syncTreeNextQueryTag_ = 1;
var SyncTree = class {
  constructor(listenProvider_) {
    this.listenProvider_ = listenProvider_;
    this.syncPointTree_ = new ImmutableTree(null);
    this.pendingWriteTree_ = newWriteTree();
    this.tagToQueryMap = /* @__PURE__ */ new Map();
    this.queryToTagMap = /* @__PURE__ */ new Map();
  }
};
function syncTreeApplyUserOverwrite(syncTree, path, newData, writeId, visible) {
  writeTreeAddOverwrite(syncTree.pendingWriteTree_, path, newData, writeId, visible);
  if (!visible) {
    return [];
  } else {
    return syncTreeApplyOperationToSyncPoints_(syncTree, new Overwrite(newOperationSourceUser(), path, newData));
  }
}
function syncTreeAckUserWrite(syncTree, writeId, revert = false) {
  const write = writeTreeGetWrite(syncTree.pendingWriteTree_, writeId);
  const needToReevaluate = writeTreeRemoveWrite(syncTree.pendingWriteTree_, writeId);
  if (!needToReevaluate) {
    return [];
  } else {
    let affectedTree = new ImmutableTree(null);
    if (write.snap != null) {
      affectedTree = affectedTree.set(newEmptyPath(), true);
    } else {
      each(write.children, (pathString) => {
        affectedTree = affectedTree.set(new Path(pathString), true);
      });
    }
    return syncTreeApplyOperationToSyncPoints_(syncTree, new AckUserWrite(write.path, affectedTree, revert));
  }
}
function syncTreeApplyServerOverwrite(syncTree, path, newData) {
  return syncTreeApplyOperationToSyncPoints_(syncTree, new Overwrite(newOperationSourceServer(), path, newData));
}
function syncTreeApplyServerMerge(syncTree, path, changedChildren) {
  const changeTree = ImmutableTree.fromObject(changedChildren);
  return syncTreeApplyOperationToSyncPoints_(syncTree, new Merge(newOperationSourceServer(), path, changeTree));
}
function syncTreeApplyListenComplete(syncTree, path) {
  return syncTreeApplyOperationToSyncPoints_(syncTree, new ListenComplete(newOperationSourceServer(), path));
}
function syncTreeApplyTaggedListenComplete(syncTree, path, tag) {
  const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
  if (queryKey) {
    const r = syncTreeParseQueryKey_(queryKey);
    const queryPath = r.path, queryId = r.queryId;
    const relativePath = newRelativePath(queryPath, path);
    const op = new ListenComplete(newOperationSourceServerTaggedQuery(queryId), relativePath);
    return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
  } else {
    return [];
  }
}
function syncTreeRemoveEventRegistration(syncTree, query, eventRegistration, cancelError, skipListenerDedup = false) {
  const path = query._path;
  const maybeSyncPoint = syncTree.syncPointTree_.get(path);
  let cancelEvents = [];
  if (maybeSyncPoint && (query._queryIdentifier === "default" || syncPointViewExistsForQuery(maybeSyncPoint, query))) {
    const removedAndEvents = syncPointRemoveEventRegistration(maybeSyncPoint, query, eventRegistration, cancelError);
    if (syncPointIsEmpty(maybeSyncPoint)) {
      syncTree.syncPointTree_ = syncTree.syncPointTree_.remove(path);
    }
    const removed = removedAndEvents.removed;
    cancelEvents = removedAndEvents.events;
    if (!skipListenerDedup) {
      const removingDefault = -1 !== removed.findIndex((query2) => {
        return query2._queryParams.loadsAllData();
      });
      const covered = syncTree.syncPointTree_.findOnPath(path, (relativePath, parentSyncPoint) => syncPointHasCompleteView(parentSyncPoint));
      if (removingDefault && !covered) {
        const subtree = syncTree.syncPointTree_.subtree(path);
        if (!subtree.isEmpty()) {
          const newViews = syncTreeCollectDistinctViewsForSubTree_(subtree);
          for (let i = 0; i < newViews.length; ++i) {
            const view = newViews[i], newQuery = view.query;
            const listener = syncTreeCreateListenerForView_(syncTree, view);
            syncTree.listenProvider_.startListening(syncTreeQueryForListening_(newQuery), syncTreeTagForQuery(syncTree, newQuery), listener.hashFn, listener.onComplete);
          }
        }
      }
      if (!covered && removed.length > 0 && !cancelError) {
        if (removingDefault) {
          const defaultTag = null;
          syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(query), defaultTag);
        } else {
          removed.forEach((queryToRemove) => {
            const tagToRemove = syncTree.queryToTagMap.get(syncTreeMakeQueryKey_(queryToRemove));
            syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(queryToRemove), tagToRemove);
          });
        }
      }
    }
    syncTreeRemoveTags_(syncTree, removed);
  }
  return cancelEvents;
}
function syncTreeApplyTaggedQueryOverwrite(syncTree, path, snap, tag) {
  const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
  if (queryKey != null) {
    const r = syncTreeParseQueryKey_(queryKey);
    const queryPath = r.path, queryId = r.queryId;
    const relativePath = newRelativePath(queryPath, path);
    const op = new Overwrite(newOperationSourceServerTaggedQuery(queryId), relativePath, snap);
    return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
  } else {
    return [];
  }
}
function syncTreeApplyTaggedQueryMerge(syncTree, path, changedChildren, tag) {
  const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
  if (queryKey) {
    const r = syncTreeParseQueryKey_(queryKey);
    const queryPath = r.path, queryId = r.queryId;
    const relativePath = newRelativePath(queryPath, path);
    const changeTree = ImmutableTree.fromObject(changedChildren);
    const op = new Merge(newOperationSourceServerTaggedQuery(queryId), relativePath, changeTree);
    return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
  } else {
    return [];
  }
}
function syncTreeAddEventRegistration(syncTree, query, eventRegistration, skipSetupListener = false) {
  const path = query._path;
  let serverCache = null;
  let foundAncestorDefaultView = false;
  syncTree.syncPointTree_.foreachOnPath(path, (pathToSyncPoint, sp) => {
    const relativePath = newRelativePath(pathToSyncPoint, path);
    serverCache = serverCache || syncPointGetCompleteServerCache(sp, relativePath);
    foundAncestorDefaultView = foundAncestorDefaultView || syncPointHasCompleteView(sp);
  });
  let syncPoint = syncTree.syncPointTree_.get(path);
  if (!syncPoint) {
    syncPoint = new SyncPoint();
    syncTree.syncPointTree_ = syncTree.syncPointTree_.set(path, syncPoint);
  } else {
    foundAncestorDefaultView = foundAncestorDefaultView || syncPointHasCompleteView(syncPoint);
    serverCache = serverCache || syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
  }
  let serverCacheComplete;
  if (serverCache != null) {
    serverCacheComplete = true;
  } else {
    serverCacheComplete = false;
    serverCache = ChildrenNode.EMPTY_NODE;
    const subtree = syncTree.syncPointTree_.subtree(path);
    subtree.foreachChild((childName, childSyncPoint) => {
      const completeCache = syncPointGetCompleteServerCache(childSyncPoint, newEmptyPath());
      if (completeCache) {
        serverCache = serverCache.updateImmediateChild(childName, completeCache);
      }
    });
  }
  const viewAlreadyExists = syncPointViewExistsForQuery(syncPoint, query);
  if (!viewAlreadyExists && !query._queryParams.loadsAllData()) {
    const queryKey = syncTreeMakeQueryKey_(query);
    assert(!syncTree.queryToTagMap.has(queryKey), "View does not exist, but we have a tag");
    const tag = syncTreeGetNextQueryTag_();
    syncTree.queryToTagMap.set(queryKey, tag);
    syncTree.tagToQueryMap.set(tag, queryKey);
  }
  const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, path);
  let events = syncPointAddEventRegistration(syncPoint, query, eventRegistration, writesCache, serverCache, serverCacheComplete);
  if (!viewAlreadyExists && !foundAncestorDefaultView && !skipSetupListener) {
    const view = syncPointViewForQuery(syncPoint, query);
    events = events.concat(syncTreeSetupListener_(syncTree, query, view));
  }
  return events;
}
function syncTreeCalcCompleteEventCache(syncTree, path, writeIdsToExclude) {
  const includeHiddenSets = true;
  const writeTree = syncTree.pendingWriteTree_;
  const serverCache = syncTree.syncPointTree_.findOnPath(path, (pathSoFar, syncPoint) => {
    const relativePath = newRelativePath(pathSoFar, path);
    const serverCache2 = syncPointGetCompleteServerCache(syncPoint, relativePath);
    if (serverCache2) {
      return serverCache2;
    }
  });
  return writeTreeCalcCompleteEventCache(writeTree, path, serverCache, writeIdsToExclude, includeHiddenSets);
}
function syncTreeApplyOperationToSyncPoints_(syncTree, operation) {
  return syncTreeApplyOperationHelper_(
    operation,
    syncTree.syncPointTree_,
    null,
    writeTreeChildWrites(syncTree.pendingWriteTree_, newEmptyPath())
  );
}
function syncTreeApplyOperationHelper_(operation, syncPointTree, serverCache, writesCache) {
  if (pathIsEmpty(operation.path)) {
    return syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache);
  } else {
    const syncPoint = syncPointTree.get(newEmptyPath());
    if (serverCache == null && syncPoint != null) {
      serverCache = syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
    }
    let events = [];
    const childName = pathGetFront(operation.path);
    const childOperation = operation.operationForChild(childName);
    const childTree = syncPointTree.children.get(childName);
    if (childTree && childOperation) {
      const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
      const childWritesCache = writeTreeRefChild(writesCache, childName);
      events = events.concat(syncTreeApplyOperationHelper_(childOperation, childTree, childServerCache, childWritesCache));
    }
    if (syncPoint) {
      events = events.concat(syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
    }
    return events;
  }
}
function syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache) {
  const syncPoint = syncPointTree.get(newEmptyPath());
  if (serverCache == null && syncPoint != null) {
    serverCache = syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
  }
  let events = [];
  syncPointTree.children.inorderTraversal((childName, childTree) => {
    const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
    const childWritesCache = writeTreeRefChild(writesCache, childName);
    const childOperation = operation.operationForChild(childName);
    if (childOperation) {
      events = events.concat(syncTreeApplyOperationDescendantsHelper_(childOperation, childTree, childServerCache, childWritesCache));
    }
  });
  if (syncPoint) {
    events = events.concat(syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
  }
  return events;
}
function syncTreeCreateListenerForView_(syncTree, view) {
  const query = view.query;
  const tag = syncTreeTagForQuery(syncTree, query);
  return {
    hashFn: () => {
      const cache = viewGetServerCache(view) || ChildrenNode.EMPTY_NODE;
      return cache.hash();
    },
    onComplete: (status) => {
      if (status === "ok") {
        if (tag) {
          return syncTreeApplyTaggedListenComplete(syncTree, query._path, tag);
        } else {
          return syncTreeApplyListenComplete(syncTree, query._path);
        }
      } else {
        const error2 = errorForServerCode(status, query);
        return syncTreeRemoveEventRegistration(
          syncTree,
          query,
          null,
          error2
        );
      }
    }
  };
}
function syncTreeTagForQuery(syncTree, query) {
  const queryKey = syncTreeMakeQueryKey_(query);
  return syncTree.queryToTagMap.get(queryKey);
}
function syncTreeMakeQueryKey_(query) {
  return query._path.toString() + "$" + query._queryIdentifier;
}
function syncTreeQueryKeyForTag_(syncTree, tag) {
  return syncTree.tagToQueryMap.get(tag);
}
function syncTreeParseQueryKey_(queryKey) {
  const splitIndex = queryKey.indexOf("$");
  assert(splitIndex !== -1 && splitIndex < queryKey.length - 1, "Bad queryKey.");
  return {
    queryId: queryKey.substr(splitIndex + 1),
    path: new Path(queryKey.substr(0, splitIndex))
  };
}
function syncTreeApplyTaggedOperation_(syncTree, queryPath, operation) {
  const syncPoint = syncTree.syncPointTree_.get(queryPath);
  assert(syncPoint, "Missing sync point for query tag that we're tracking");
  const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, queryPath);
  return syncPointApplyOperation(syncPoint, operation, writesCache, null);
}
function syncTreeCollectDistinctViewsForSubTree_(subtree) {
  return subtree.fold((relativePath, maybeChildSyncPoint, childMap) => {
    if (maybeChildSyncPoint && syncPointHasCompleteView(maybeChildSyncPoint)) {
      const completeView = syncPointGetCompleteView(maybeChildSyncPoint);
      return [completeView];
    } else {
      let views = [];
      if (maybeChildSyncPoint) {
        views = syncPointGetQueryViews(maybeChildSyncPoint);
      }
      each(childMap, (_key, childViews) => {
        views = views.concat(childViews);
      });
      return views;
    }
  });
}
function syncTreeQueryForListening_(query) {
  if (query._queryParams.loadsAllData() && !query._queryParams.isDefault()) {
    return new (syncTreeGetReferenceConstructor())(query._repo, query._path);
  } else {
    return query;
  }
}
function syncTreeRemoveTags_(syncTree, queries) {
  for (let j2 = 0; j2 < queries.length; ++j2) {
    const removedQuery = queries[j2];
    if (!removedQuery._queryParams.loadsAllData()) {
      const removedQueryKey = syncTreeMakeQueryKey_(removedQuery);
      const removedQueryTag = syncTree.queryToTagMap.get(removedQueryKey);
      syncTree.queryToTagMap.delete(removedQueryKey);
      syncTree.tagToQueryMap.delete(removedQueryTag);
    }
  }
}
function syncTreeGetNextQueryTag_() {
  return syncTreeNextQueryTag_++;
}
function syncTreeSetupListener_(syncTree, query, view) {
  const path = query._path;
  const tag = syncTreeTagForQuery(syncTree, query);
  const listener = syncTreeCreateListenerForView_(syncTree, view);
  const events = syncTree.listenProvider_.startListening(syncTreeQueryForListening_(query), tag, listener.hashFn, listener.onComplete);
  const subtree = syncTree.syncPointTree_.subtree(path);
  if (tag) {
    assert(!syncPointHasCompleteView(subtree.value), "If we're adding a query, it shouldn't be shadowed");
  } else {
    const queriesToStop = subtree.fold((relativePath, maybeChildSyncPoint, childMap) => {
      if (!pathIsEmpty(relativePath) && maybeChildSyncPoint && syncPointHasCompleteView(maybeChildSyncPoint)) {
        return [syncPointGetCompleteView(maybeChildSyncPoint).query];
      } else {
        let queries = [];
        if (maybeChildSyncPoint) {
          queries = queries.concat(syncPointGetQueryViews(maybeChildSyncPoint).map((view2) => view2.query));
        }
        each(childMap, (_key, childQueries) => {
          queries = queries.concat(childQueries);
        });
        return queries;
      }
    });
    for (let i = 0; i < queriesToStop.length; ++i) {
      const queryToStop = queriesToStop[i];
      syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(queryToStop), syncTreeTagForQuery(syncTree, queryToStop));
    }
  }
  return events;
}
var ExistingValueProvider = class {
  constructor(node_) {
    this.node_ = node_;
  }
  getImmediateChild(childName) {
    const child2 = this.node_.getImmediateChild(childName);
    return new ExistingValueProvider(child2);
  }
  node() {
    return this.node_;
  }
};
var DeferredValueProvider = class {
  constructor(syncTree, path) {
    this.syncTree_ = syncTree;
    this.path_ = path;
  }
  getImmediateChild(childName) {
    const childPath = pathChild(this.path_, childName);
    return new DeferredValueProvider(this.syncTree_, childPath);
  }
  node() {
    return syncTreeCalcCompleteEventCache(this.syncTree_, this.path_);
  }
};
var generateWithValues = function(values) {
  values = values || {};
  values["timestamp"] = values["timestamp"] || new Date().getTime();
  return values;
};
var resolveDeferredLeafValue = function(value, existingVal, serverValues) {
  if (!value || typeof value !== "object") {
    return value;
  }
  assert(".sv" in value, "Unexpected leaf node or priority contents");
  if (typeof value[".sv"] === "string") {
    return resolveScalarDeferredValue(value[".sv"], existingVal, serverValues);
  } else if (typeof value[".sv"] === "object") {
    return resolveComplexDeferredValue(value[".sv"], existingVal);
  } else {
    assert(false, "Unexpected server value: " + JSON.stringify(value, null, 2));
  }
};
var resolveScalarDeferredValue = function(op, existing, serverValues) {
  switch (op) {
    case "timestamp":
      return serverValues["timestamp"];
    default:
      assert(false, "Unexpected server value: " + op);
  }
};
var resolveComplexDeferredValue = function(op, existing, unused) {
  if (!op.hasOwnProperty("increment")) {
    assert(false, "Unexpected server value: " + JSON.stringify(op, null, 2));
  }
  const delta = op["increment"];
  if (typeof delta !== "number") {
    assert(false, "Unexpected increment value: " + delta);
  }
  const existingNode = existing.node();
  assert(existingNode !== null && typeof existingNode !== "undefined", "Expected ChildrenNode.EMPTY_NODE for nulls");
  if (!existingNode.isLeafNode()) {
    return delta;
  }
  const leaf = existingNode;
  const existingVal = leaf.getValue();
  if (typeof existingVal !== "number") {
    return delta;
  }
  return existingVal + delta;
};
var resolveDeferredValueTree = function(path, node, syncTree, serverValues) {
  return resolveDeferredValue(node, new DeferredValueProvider(syncTree, path), serverValues);
};
var resolveDeferredValueSnapshot = function(node, existing, serverValues) {
  return resolveDeferredValue(node, new ExistingValueProvider(existing), serverValues);
};
function resolveDeferredValue(node, existingVal, serverValues) {
  const rawPri = node.getPriority().val();
  const priority = resolveDeferredLeafValue(rawPri, existingVal.getImmediateChild(".priority"), serverValues);
  let newNode;
  if (node.isLeafNode()) {
    const leafNode = node;
    const value = resolveDeferredLeafValue(leafNode.getValue(), existingVal, serverValues);
    if (value !== leafNode.getValue() || priority !== leafNode.getPriority().val()) {
      return new LeafNode(value, nodeFromJSON(priority));
    } else {
      return node;
    }
  } else {
    const childrenNode = node;
    newNode = childrenNode;
    if (priority !== childrenNode.getPriority().val()) {
      newNode = newNode.updatePriority(new LeafNode(priority));
    }
    childrenNode.forEachChild(PRIORITY_INDEX, (childName, childNode) => {
      const newChildNode = resolveDeferredValue(childNode, existingVal.getImmediateChild(childName), serverValues);
      if (newChildNode !== childNode) {
        newNode = newNode.updateImmediateChild(childName, newChildNode);
      }
    });
    return newNode;
  }
}
var Tree = class {
  constructor(name5 = "", parent = null, node = { children: {}, childCount: 0 }) {
    this.name = name5;
    this.parent = parent;
    this.node = node;
  }
};
function treeSubTree(tree, pathObj) {
  let path = pathObj instanceof Path ? pathObj : new Path(pathObj);
  let child2 = tree, next = pathGetFront(path);
  while (next !== null) {
    const childNode = safeGet(child2.node.children, next) || {
      children: {},
      childCount: 0
    };
    child2 = new Tree(next, child2, childNode);
    path = pathPopFront(path);
    next = pathGetFront(path);
  }
  return child2;
}
function treeGetValue(tree) {
  return tree.node.value;
}
function treeSetValue(tree, value) {
  tree.node.value = value;
  treeUpdateParents(tree);
}
function treeHasChildren(tree) {
  return tree.node.childCount > 0;
}
function treeIsEmpty(tree) {
  return treeGetValue(tree) === void 0 && !treeHasChildren(tree);
}
function treeForEachChild(tree, action) {
  each(tree.node.children, (child2, childTree) => {
    action(new Tree(child2, tree, childTree));
  });
}
function treeForEachDescendant(tree, action, includeSelf, childrenFirst) {
  if (includeSelf && !childrenFirst) {
    action(tree);
  }
  treeForEachChild(tree, (child2) => {
    treeForEachDescendant(child2, action, true, childrenFirst);
  });
  if (includeSelf && childrenFirst) {
    action(tree);
  }
}
function treeForEachAncestor(tree, action, includeSelf) {
  let node = includeSelf ? tree : tree.parent;
  while (node !== null) {
    if (action(node)) {
      return true;
    }
    node = node.parent;
  }
  return false;
}
function treeGetPath(tree) {
  return new Path(tree.parent === null ? tree.name : treeGetPath(tree.parent) + "/" + tree.name);
}
function treeUpdateParents(tree) {
  if (tree.parent !== null) {
    treeUpdateChild(tree.parent, tree.name, tree);
  }
}
function treeUpdateChild(tree, childName, child2) {
  const childEmpty = treeIsEmpty(child2);
  const childExists = contains(tree.node.children, childName);
  if (childEmpty && childExists) {
    delete tree.node.children[childName];
    tree.node.childCount--;
    treeUpdateParents(tree);
  } else if (!childEmpty && !childExists) {
    tree.node.children[childName] = child2.node;
    tree.node.childCount++;
    treeUpdateParents(tree);
  }
}
var INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/;
var INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/;
var MAX_LEAF_SIZE_ = 10 * 1024 * 1024;
var isValidKey = function(key) {
  return typeof key === "string" && key.length !== 0 && !INVALID_KEY_REGEX_.test(key);
};
var isValidPathString = function(pathString) {
  return typeof pathString === "string" && pathString.length !== 0 && !INVALID_PATH_REGEX_.test(pathString);
};
var isValidRootPathString = function(pathString) {
  if (pathString) {
    pathString = pathString.replace(/^\/*\.info(\/|$)/, "/");
  }
  return isValidPathString(pathString);
};
var validateFirebaseData = function(errorPrefix2, data, path_) {
  const path = path_ instanceof Path ? new ValidationPath(path_, errorPrefix2) : path_;
  if (data === void 0) {
    throw new Error(errorPrefix2 + "contains undefined " + validationPathToErrorString(path));
  }
  if (typeof data === "function") {
    throw new Error(errorPrefix2 + "contains a function " + validationPathToErrorString(path) + " with contents = " + data.toString());
  }
  if (isInvalidJSONNumber(data)) {
    throw new Error(errorPrefix2 + "contains " + data.toString() + " " + validationPathToErrorString(path));
  }
  if (typeof data === "string" && data.length > MAX_LEAF_SIZE_ / 3 && stringLength(data) > MAX_LEAF_SIZE_) {
    throw new Error(errorPrefix2 + "contains a string greater than " + MAX_LEAF_SIZE_ + " utf8 bytes " + validationPathToErrorString(path) + " ('" + data.substring(0, 50) + "...')");
  }
  if (data && typeof data === "object") {
    let hasDotValue = false;
    let hasActualChild = false;
    each(data, (key, value) => {
      if (key === ".value") {
        hasDotValue = true;
      } else if (key !== ".priority" && key !== ".sv") {
        hasActualChild = true;
        if (!isValidKey(key)) {
          throw new Error(errorPrefix2 + " contains an invalid key (" + key + ") " + validationPathToErrorString(path) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
        }
      }
      validationPathPush(path, key);
      validateFirebaseData(errorPrefix2, value, path);
      validationPathPop(path);
    });
    if (hasDotValue && hasActualChild) {
      throw new Error(errorPrefix2 + ' contains ".value" child ' + validationPathToErrorString(path) + " in addition to actual children.");
    }
  }
};
var validatePathString = function(fnName, argumentName, pathString, optional) {
  if (optional && pathString === void 0) {
    return;
  }
  if (!isValidPathString(pathString)) {
    throw new Error(errorPrefix(fnName, argumentName) + 'was an invalid path = "' + pathString + `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`);
  }
};
var validateRootPathString = function(fnName, argumentName, pathString, optional) {
  if (pathString) {
    pathString = pathString.replace(/^\/*\.info(\/|$)/, "/");
  }
  validatePathString(fnName, argumentName, pathString, optional);
};
var validateUrl = function(fnName, parsedUrl) {
  const pathString = parsedUrl.path.toString();
  if (!(typeof parsedUrl.repoInfo.host === "string") || parsedUrl.repoInfo.host.length === 0 || !isValidKey(parsedUrl.repoInfo.namespace) && parsedUrl.repoInfo.host.split(":")[0] !== "localhost" || pathString.length !== 0 && !isValidRootPathString(pathString)) {
    throw new Error(errorPrefix(fnName, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`);
  }
};
var EventQueue = class {
  constructor() {
    this.eventLists_ = [];
    this.recursionDepth_ = 0;
  }
};
function eventQueueQueueEvents(eventQueue, eventDataList) {
  let currList = null;
  for (let i = 0; i < eventDataList.length; i++) {
    const data = eventDataList[i];
    const path = data.getPath();
    if (currList !== null && !pathEquals(path, currList.path)) {
      eventQueue.eventLists_.push(currList);
      currList = null;
    }
    if (currList === null) {
      currList = { events: [], path };
    }
    currList.events.push(data);
  }
  if (currList) {
    eventQueue.eventLists_.push(currList);
  }
}
function eventQueueRaiseEventsAtPath(eventQueue, path, eventDataList) {
  eventQueueQueueEvents(eventQueue, eventDataList);
  eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, (eventPath) => pathEquals(eventPath, path));
}
function eventQueueRaiseEventsForChangedPath(eventQueue, changedPath, eventDataList) {
  eventQueueQueueEvents(eventQueue, eventDataList);
  eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, (eventPath) => pathContains(eventPath, changedPath) || pathContains(changedPath, eventPath));
}
function eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, predicate) {
  eventQueue.recursionDepth_++;
  let sentAll = true;
  for (let i = 0; i < eventQueue.eventLists_.length; i++) {
    const eventList = eventQueue.eventLists_[i];
    if (eventList) {
      const eventPath = eventList.path;
      if (predicate(eventPath)) {
        eventListRaise(eventQueue.eventLists_[i]);
        eventQueue.eventLists_[i] = null;
      } else {
        sentAll = false;
      }
    }
  }
  if (sentAll) {
    eventQueue.eventLists_ = [];
  }
  eventQueue.recursionDepth_--;
}
function eventListRaise(eventList) {
  for (let i = 0; i < eventList.events.length; i++) {
    const eventData = eventList.events[i];
    if (eventData !== null) {
      eventList.events[i] = null;
      const eventFn = eventData.getEventRunner();
      if (logger) {
        log("event: " + eventData.toString());
      }
      exceptionGuard(eventFn);
    }
  }
}
var INTERRUPT_REASON = "repo_interrupt";
var MAX_TRANSACTION_RETRIES = 25;
var Repo = class {
  constructor(repoInfo_, forceRestClient_, authTokenProvider_, appCheckProvider_) {
    this.repoInfo_ = repoInfo_;
    this.forceRestClient_ = forceRestClient_;
    this.authTokenProvider_ = authTokenProvider_;
    this.appCheckProvider_ = appCheckProvider_;
    this.dataUpdateCount = 0;
    this.statsListener_ = null;
    this.eventQueue_ = new EventQueue();
    this.nextWriteId_ = 1;
    this.interceptServerDataCallback_ = null;
    this.onDisconnect_ = newSparseSnapshotTree();
    this.transactionQueueTree_ = new Tree();
    this.persistentConnection_ = null;
    this.key = this.repoInfo_.toURLString();
  }
  toString() {
    return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
  }
};
function repoStart(repo, appId, authOverride) {
  repo.stats_ = statsManagerGetCollection(repo.repoInfo_);
  if (repo.forceRestClient_ || beingCrawled()) {
    repo.server_ = new ReadonlyRestClient(repo.repoInfo_, (pathString, data, isMerge, tag) => {
      repoOnDataUpdate(repo, pathString, data, isMerge, tag);
    }, repo.authTokenProvider_, repo.appCheckProvider_);
    setTimeout(() => repoOnConnectStatus(repo, true), 0);
  } else {
    if (typeof authOverride !== "undefined" && authOverride !== null) {
      if (typeof authOverride !== "object") {
        throw new Error("Only objects are supported for option databaseAuthVariableOverride");
      }
      try {
        stringify(authOverride);
      } catch (e) {
        throw new Error("Invalid authOverride provided: " + e);
      }
    }
    repo.persistentConnection_ = new PersistentConnection(repo.repoInfo_, appId, (pathString, data, isMerge, tag) => {
      repoOnDataUpdate(repo, pathString, data, isMerge, tag);
    }, (connectStatus) => {
      repoOnConnectStatus(repo, connectStatus);
    }, (updates) => {
      repoOnServerInfoUpdate(repo, updates);
    }, repo.authTokenProvider_, repo.appCheckProvider_, authOverride);
    repo.server_ = repo.persistentConnection_;
  }
  repo.authTokenProvider_.addTokenChangeListener((token) => {
    repo.server_.refreshAuthToken(token);
  });
  repo.appCheckProvider_.addTokenChangeListener((result) => {
    repo.server_.refreshAppCheckToken(result.token);
  });
  repo.statsReporter_ = statsManagerGetOrCreateReporter(repo.repoInfo_, () => new StatsReporter(repo.stats_, repo.server_));
  repo.infoData_ = new SnapshotHolder();
  repo.infoSyncTree_ = new SyncTree({
    startListening: (query, tag, currentHashFn, onComplete) => {
      let infoEvents = [];
      const node = repo.infoData_.getNode(query._path);
      if (!node.isEmpty()) {
        infoEvents = syncTreeApplyServerOverwrite(repo.infoSyncTree_, query._path, node);
        setTimeout(() => {
          onComplete("ok");
        }, 0);
      }
      return infoEvents;
    },
    stopListening: () => {
    }
  });
  repoUpdateInfo(repo, "connected", false);
  repo.serverSyncTree_ = new SyncTree({
    startListening: (query, tag, currentHashFn, onComplete) => {
      repo.server_.listen(query, currentHashFn, tag, (status, data) => {
        const events = onComplete(status, data);
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, query._path, events);
      });
      return [];
    },
    stopListening: (query, tag) => {
      repo.server_.unlisten(query, tag);
    }
  });
}
function repoServerTime(repo) {
  const offsetNode = repo.infoData_.getNode(new Path(".info/serverTimeOffset"));
  const offset = offsetNode.val() || 0;
  return new Date().getTime() + offset;
}
function repoGenerateServerValues(repo) {
  return generateWithValues({
    timestamp: repoServerTime(repo)
  });
}
function repoOnDataUpdate(repo, pathString, data, isMerge, tag) {
  repo.dataUpdateCount++;
  const path = new Path(pathString);
  data = repo.interceptServerDataCallback_ ? repo.interceptServerDataCallback_(pathString, data) : data;
  let events = [];
  if (tag) {
    if (isMerge) {
      const taggedChildren = map(data, (raw) => nodeFromJSON(raw));
      events = syncTreeApplyTaggedQueryMerge(repo.serverSyncTree_, path, taggedChildren, tag);
    } else {
      const taggedSnap = nodeFromJSON(data);
      events = syncTreeApplyTaggedQueryOverwrite(repo.serverSyncTree_, path, taggedSnap, tag);
    }
  } else if (isMerge) {
    const changedChildren = map(data, (raw) => nodeFromJSON(raw));
    events = syncTreeApplyServerMerge(repo.serverSyncTree_, path, changedChildren);
  } else {
    const snap = nodeFromJSON(data);
    events = syncTreeApplyServerOverwrite(repo.serverSyncTree_, path, snap);
  }
  let affectedPath = path;
  if (events.length > 0) {
    affectedPath = repoRerunTransactions(repo, path);
  }
  eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, events);
}
function repoOnConnectStatus(repo, connectStatus) {
  repoUpdateInfo(repo, "connected", connectStatus);
  if (connectStatus === false) {
    repoRunOnDisconnectEvents(repo);
  }
}
function repoOnServerInfoUpdate(repo, updates) {
  each(updates, (key, value) => {
    repoUpdateInfo(repo, key, value);
  });
}
function repoUpdateInfo(repo, pathString, value) {
  const path = new Path("/.info/" + pathString);
  const newNode = nodeFromJSON(value);
  repo.infoData_.updateSnapshot(path, newNode);
  const events = syncTreeApplyServerOverwrite(repo.infoSyncTree_, path, newNode);
  eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
}
function repoGetNextWriteId(repo) {
  return repo.nextWriteId_++;
}
function repoRunOnDisconnectEvents(repo) {
  repoLog(repo, "onDisconnectEvents");
  const serverValues = repoGenerateServerValues(repo);
  const resolvedOnDisconnectTree = newSparseSnapshotTree();
  sparseSnapshotTreeForEachTree(repo.onDisconnect_, newEmptyPath(), (path, node) => {
    const resolved = resolveDeferredValueTree(path, node, repo.serverSyncTree_, serverValues);
    sparseSnapshotTreeRemember(resolvedOnDisconnectTree, path, resolved);
  });
  let events = [];
  sparseSnapshotTreeForEachTree(resolvedOnDisconnectTree, newEmptyPath(), (path, snap) => {
    events = events.concat(syncTreeApplyServerOverwrite(repo.serverSyncTree_, path, snap));
    const affectedPath = repoAbortTransactions(repo, path);
    repoRerunTransactions(repo, affectedPath);
  });
  repo.onDisconnect_ = newSparseSnapshotTree();
  eventQueueRaiseEventsForChangedPath(repo.eventQueue_, newEmptyPath(), events);
}
function repoAddEventCallbackForQuery(repo, query, eventRegistration) {
  let events;
  if (pathGetFront(query._path) === ".info") {
    events = syncTreeAddEventRegistration(repo.infoSyncTree_, query, eventRegistration);
  } else {
    events = syncTreeAddEventRegistration(repo.serverSyncTree_, query, eventRegistration);
  }
  eventQueueRaiseEventsAtPath(repo.eventQueue_, query._path, events);
}
function repoRemoveEventCallbackForQuery(repo, query, eventRegistration) {
  let events;
  if (pathGetFront(query._path) === ".info") {
    events = syncTreeRemoveEventRegistration(repo.infoSyncTree_, query, eventRegistration);
  } else {
    events = syncTreeRemoveEventRegistration(repo.serverSyncTree_, query, eventRegistration);
  }
  eventQueueRaiseEventsAtPath(repo.eventQueue_, query._path, events);
}
function repoInterrupt(repo) {
  if (repo.persistentConnection_) {
    repo.persistentConnection_.interrupt(INTERRUPT_REASON);
  }
}
function repoLog(repo, ...varArgs) {
  let prefix = "";
  if (repo.persistentConnection_) {
    prefix = repo.persistentConnection_.id + ":";
  }
  log(prefix, ...varArgs);
}
function repoGetLatestState(repo, path, excludeSets) {
  return syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path, excludeSets) || ChildrenNode.EMPTY_NODE;
}
function repoSendReadyTransactions(repo, node = repo.transactionQueueTree_) {
  if (!node) {
    repoPruneCompletedTransactionsBelowNode(repo, node);
  }
  if (treeGetValue(node)) {
    const queue = repoBuildTransactionQueue(repo, node);
    assert(queue.length > 0, "Sending zero length transaction queue");
    const allRun = queue.every((transaction) => transaction.status === 0);
    if (allRun) {
      repoSendTransactionQueue(repo, treeGetPath(node), queue);
    }
  } else if (treeHasChildren(node)) {
    treeForEachChild(node, (childNode) => {
      repoSendReadyTransactions(repo, childNode);
    });
  }
}
function repoSendTransactionQueue(repo, path, queue) {
  const setsToIgnore = queue.map((txn) => {
    return txn.currentWriteId;
  });
  const latestState = repoGetLatestState(repo, path, setsToIgnore);
  let snapToSend = latestState;
  const latestHash = latestState.hash();
  for (let i = 0; i < queue.length; i++) {
    const txn = queue[i];
    assert(txn.status === 0, "tryToSendTransactionQueue_: items in queue should all be run.");
    txn.status = 1;
    txn.retryCount++;
    const relativePath = newRelativePath(path, txn.path);
    snapToSend = snapToSend.updateChild(relativePath, txn.currentOutputSnapshotRaw);
  }
  const dataToSend = snapToSend.val(true);
  const pathToSend = path;
  repo.server_.put(pathToSend.toString(), dataToSend, (status) => {
    repoLog(repo, "transaction put response", {
      path: pathToSend.toString(),
      status
    });
    let events = [];
    if (status === "ok") {
      const callbacks = [];
      for (let i = 0; i < queue.length; i++) {
        queue[i].status = 2;
        events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, queue[i].currentWriteId));
        if (queue[i].onComplete) {
          callbacks.push(() => queue[i].onComplete(null, true, queue[i].currentOutputSnapshotResolved));
        }
        queue[i].unwatcher();
      }
      repoPruneCompletedTransactionsBelowNode(repo, treeSubTree(repo.transactionQueueTree_, path));
      repoSendReadyTransactions(repo, repo.transactionQueueTree_);
      eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
      for (let i = 0; i < callbacks.length; i++) {
        exceptionGuard(callbacks[i]);
      }
    } else {
      if (status === "datastale") {
        for (let i = 0; i < queue.length; i++) {
          if (queue[i].status === 3) {
            queue[i].status = 4;
          } else {
            queue[i].status = 0;
          }
        }
      } else {
        warn("transaction at " + pathToSend.toString() + " failed: " + status);
        for (let i = 0; i < queue.length; i++) {
          queue[i].status = 4;
          queue[i].abortReason = status;
        }
      }
      repoRerunTransactions(repo, path);
    }
  }, latestHash);
}
function repoRerunTransactions(repo, changedPath) {
  const rootMostTransactionNode = repoGetAncestorTransactionNode(repo, changedPath);
  const path = treeGetPath(rootMostTransactionNode);
  const queue = repoBuildTransactionQueue(repo, rootMostTransactionNode);
  repoRerunTransactionQueue(repo, queue, path);
  return path;
}
function repoRerunTransactionQueue(repo, queue, path) {
  if (queue.length === 0) {
    return;
  }
  const callbacks = [];
  let events = [];
  const txnsToRerun = queue.filter((q3) => {
    return q3.status === 0;
  });
  const setsToIgnore = txnsToRerun.map((q3) => {
    return q3.currentWriteId;
  });
  for (let i = 0; i < queue.length; i++) {
    const transaction = queue[i];
    const relativePath = newRelativePath(path, transaction.path);
    let abortTransaction = false, abortReason;
    assert(relativePath !== null, "rerunTransactionsUnderNode_: relativePath should not be null.");
    if (transaction.status === 4) {
      abortTransaction = true;
      abortReason = transaction.abortReason;
      events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
    } else if (transaction.status === 0) {
      if (transaction.retryCount >= MAX_TRANSACTION_RETRIES) {
        abortTransaction = true;
        abortReason = "maxretry";
        events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
      } else {
        const currentNode = repoGetLatestState(repo, transaction.path, setsToIgnore);
        transaction.currentInputSnapshot = currentNode;
        const newData = queue[i].update(currentNode.val());
        if (newData !== void 0) {
          validateFirebaseData("transaction failed: Data returned ", newData, transaction.path);
          let newDataNode = nodeFromJSON(newData);
          const hasExplicitPriority = typeof newData === "object" && newData != null && contains(newData, ".priority");
          if (!hasExplicitPriority) {
            newDataNode = newDataNode.updatePriority(currentNode.getPriority());
          }
          const oldWriteId = transaction.currentWriteId;
          const serverValues = repoGenerateServerValues(repo);
          const newNodeResolved = resolveDeferredValueSnapshot(newDataNode, currentNode, serverValues);
          transaction.currentOutputSnapshotRaw = newDataNode;
          transaction.currentOutputSnapshotResolved = newNodeResolved;
          transaction.currentWriteId = repoGetNextWriteId(repo);
          setsToIgnore.splice(setsToIgnore.indexOf(oldWriteId), 1);
          events = events.concat(syncTreeApplyUserOverwrite(repo.serverSyncTree_, transaction.path, newNodeResolved, transaction.currentWriteId, transaction.applyLocally));
          events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, oldWriteId, true));
        } else {
          abortTransaction = true;
          abortReason = "nodata";
          events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
        }
      }
    }
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
    events = [];
    if (abortTransaction) {
      queue[i].status = 2;
      (function(unwatcher) {
        setTimeout(unwatcher, Math.floor(0));
      })(queue[i].unwatcher);
      if (queue[i].onComplete) {
        if (abortReason === "nodata") {
          callbacks.push(() => queue[i].onComplete(null, false, queue[i].currentInputSnapshot));
        } else {
          callbacks.push(() => queue[i].onComplete(new Error(abortReason), false, null));
        }
      }
    }
  }
  repoPruneCompletedTransactionsBelowNode(repo, repo.transactionQueueTree_);
  for (let i = 0; i < callbacks.length; i++) {
    exceptionGuard(callbacks[i]);
  }
  repoSendReadyTransactions(repo, repo.transactionQueueTree_);
}
function repoGetAncestorTransactionNode(repo, path) {
  let front;
  let transactionNode = repo.transactionQueueTree_;
  front = pathGetFront(path);
  while (front !== null && treeGetValue(transactionNode) === void 0) {
    transactionNode = treeSubTree(transactionNode, front);
    path = pathPopFront(path);
    front = pathGetFront(path);
  }
  return transactionNode;
}
function repoBuildTransactionQueue(repo, transactionNode) {
  const transactionQueue = [];
  repoAggregateTransactionQueuesForNode(repo, transactionNode, transactionQueue);
  transactionQueue.sort((a, b3) => a.order - b3.order);
  return transactionQueue;
}
function repoAggregateTransactionQueuesForNode(repo, node, queue) {
  const nodeQueue = treeGetValue(node);
  if (nodeQueue) {
    for (let i = 0; i < nodeQueue.length; i++) {
      queue.push(nodeQueue[i]);
    }
  }
  treeForEachChild(node, (child2) => {
    repoAggregateTransactionQueuesForNode(repo, child2, queue);
  });
}
function repoPruneCompletedTransactionsBelowNode(repo, node) {
  const queue = treeGetValue(node);
  if (queue) {
    let to2 = 0;
    for (let from = 0; from < queue.length; from++) {
      if (queue[from].status !== 2) {
        queue[to2] = queue[from];
        to2++;
      }
    }
    queue.length = to2;
    treeSetValue(node, queue.length > 0 ? queue : void 0);
  }
  treeForEachChild(node, (childNode) => {
    repoPruneCompletedTransactionsBelowNode(repo, childNode);
  });
}
function repoAbortTransactions(repo, path) {
  const affectedPath = treeGetPath(repoGetAncestorTransactionNode(repo, path));
  const transactionNode = treeSubTree(repo.transactionQueueTree_, path);
  treeForEachAncestor(transactionNode, (node) => {
    repoAbortTransactionsOnNode(repo, node);
  });
  repoAbortTransactionsOnNode(repo, transactionNode);
  treeForEachDescendant(transactionNode, (node) => {
    repoAbortTransactionsOnNode(repo, node);
  });
  return affectedPath;
}
function repoAbortTransactionsOnNode(repo, node) {
  const queue = treeGetValue(node);
  if (queue) {
    const callbacks = [];
    let events = [];
    let lastSent = -1;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].status === 3)
        ;
      else if (queue[i].status === 1) {
        assert(lastSent === i - 1, "All SENT items should be at beginning of queue.");
        lastSent = i;
        queue[i].status = 3;
        queue[i].abortReason = "set";
      } else {
        assert(queue[i].status === 0, "Unexpected transaction status in abort");
        queue[i].unwatcher();
        events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, queue[i].currentWriteId, true));
        if (queue[i].onComplete) {
          callbacks.push(queue[i].onComplete.bind(null, new Error("set"), false, null));
        }
      }
    }
    if (lastSent === -1) {
      treeSetValue(node, void 0);
    } else {
      queue.length = lastSent + 1;
    }
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, treeGetPath(node), events);
    for (let i = 0; i < callbacks.length; i++) {
      exceptionGuard(callbacks[i]);
    }
  }
}
function decodePath(pathString) {
  let pathStringDecoded = "";
  const pieces = pathString.split("/");
  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i].length > 0) {
      let piece = pieces[i];
      try {
        piece = decodeURIComponent(piece.replace(/\+/g, " "));
      } catch (e) {
      }
      pathStringDecoded += "/" + piece;
    }
  }
  return pathStringDecoded;
}
function decodeQuery(queryString) {
  const results = {};
  if (queryString.charAt(0) === "?") {
    queryString = queryString.substring(1);
  }
  for (const segment of queryString.split("&")) {
    if (segment.length === 0) {
      continue;
    }
    const kv = segment.split("=");
    if (kv.length === 2) {
      results[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
    } else {
      warn(`Invalid query segment '${segment}' in query '${queryString}'`);
    }
  }
  return results;
}
var parseRepoInfo = function(dataURL, nodeAdmin) {
  const parsedUrl = parseDatabaseURL(dataURL), namespace = parsedUrl.namespace;
  if (parsedUrl.domain === "firebase.com") {
    fatal(parsedUrl.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
  }
  if ((!namespace || namespace === "undefined") && parsedUrl.domain !== "localhost") {
    fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
  }
  if (!parsedUrl.secure) {
    warnIfPageIsSecure();
  }
  const webSocketOnly = parsedUrl.scheme === "ws" || parsedUrl.scheme === "wss";
  return {
    repoInfo: new RepoInfo(
      parsedUrl.host,
      parsedUrl.secure,
      namespace,
      webSocketOnly,
      nodeAdmin,
      "",
      namespace !== parsedUrl.subdomain
    ),
    path: new Path(parsedUrl.pathString)
  };
};
var parseDatabaseURL = function(dataURL) {
  let host = "", domain = "", subdomain = "", pathString = "", namespace = "";
  let secure = true, scheme = "https", port = 443;
  if (typeof dataURL === "string") {
    let colonInd = dataURL.indexOf("//");
    if (colonInd >= 0) {
      scheme = dataURL.substring(0, colonInd - 1);
      dataURL = dataURL.substring(colonInd + 2);
    }
    let slashInd = dataURL.indexOf("/");
    if (slashInd === -1) {
      slashInd = dataURL.length;
    }
    let questionMarkInd = dataURL.indexOf("?");
    if (questionMarkInd === -1) {
      questionMarkInd = dataURL.length;
    }
    host = dataURL.substring(0, Math.min(slashInd, questionMarkInd));
    if (slashInd < questionMarkInd) {
      pathString = decodePath(dataURL.substring(slashInd, questionMarkInd));
    }
    const queryParams = decodeQuery(dataURL.substring(Math.min(dataURL.length, questionMarkInd)));
    colonInd = host.indexOf(":");
    if (colonInd >= 0) {
      secure = scheme === "https" || scheme === "wss";
      port = parseInt(host.substring(colonInd + 1), 10);
    } else {
      colonInd = host.length;
    }
    const hostWithoutPort = host.slice(0, colonInd);
    if (hostWithoutPort.toLowerCase() === "localhost") {
      domain = "localhost";
    } else if (hostWithoutPort.split(".").length <= 2) {
      domain = hostWithoutPort;
    } else {
      const dotInd = host.indexOf(".");
      subdomain = host.substring(0, dotInd).toLowerCase();
      domain = host.substring(dotInd + 1);
      namespace = subdomain;
    }
    if ("ns" in queryParams) {
      namespace = queryParams["ns"];
    }
  }
  return {
    host,
    port,
    domain,
    subdomain,
    secure,
    scheme,
    pathString,
    namespace
  };
};
var DataEvent = class {
  constructor(eventType, eventRegistration, snapshot, prevName) {
    this.eventType = eventType;
    this.eventRegistration = eventRegistration;
    this.snapshot = snapshot;
    this.prevName = prevName;
  }
  getPath() {
    const ref2 = this.snapshot.ref;
    if (this.eventType === "value") {
      return ref2._path;
    } else {
      return ref2.parent._path;
    }
  }
  getEventType() {
    return this.eventType;
  }
  getEventRunner() {
    return this.eventRegistration.getEventRunner(this);
  }
  toString() {
    return this.getPath().toString() + ":" + this.eventType + ":" + stringify(this.snapshot.exportVal());
  }
};
var CancelEvent = class {
  constructor(eventRegistration, error2, path) {
    this.eventRegistration = eventRegistration;
    this.error = error2;
    this.path = path;
  }
  getPath() {
    return this.path;
  }
  getEventType() {
    return "cancel";
  }
  getEventRunner() {
    return this.eventRegistration.getEventRunner(this);
  }
  toString() {
    return this.path.toString() + ":cancel";
  }
};
var CallbackContext = class {
  constructor(snapshotCallback, cancelCallback) {
    this.snapshotCallback = snapshotCallback;
    this.cancelCallback = cancelCallback;
  }
  onValue(expDataSnapshot, previousChildName) {
    this.snapshotCallback.call(null, expDataSnapshot, previousChildName);
  }
  onCancel(error2) {
    assert(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback");
    return this.cancelCallback.call(null, error2);
  }
  get hasCancelCallback() {
    return !!this.cancelCallback;
  }
  matches(other) {
    return this.snapshotCallback === other.snapshotCallback || this.snapshotCallback.userCallback !== void 0 && this.snapshotCallback.userCallback === other.snapshotCallback.userCallback && this.snapshotCallback.context === other.snapshotCallback.context;
  }
};
var QueryImpl = class {
  constructor(_repo, _path, _queryParams, _orderByCalled) {
    this._repo = _repo;
    this._path = _path;
    this._queryParams = _queryParams;
    this._orderByCalled = _orderByCalled;
  }
  get key() {
    if (pathIsEmpty(this._path)) {
      return null;
    } else {
      return pathGetBack(this._path);
    }
  }
  get ref() {
    return new ReferenceImpl(this._repo, this._path);
  }
  get _queryIdentifier() {
    const obj = queryParamsGetQueryObject(this._queryParams);
    const id2 = ObjectToUniqueKey(obj);
    return id2 === "{}" ? "default" : id2;
  }
  get _queryObject() {
    return queryParamsGetQueryObject(this._queryParams);
  }
  isEqual(other) {
    other = getModularInstance(other);
    if (!(other instanceof QueryImpl)) {
      return false;
    }
    const sameRepo = this._repo === other._repo;
    const samePath = pathEquals(this._path, other._path);
    const sameQueryIdentifier = this._queryIdentifier === other._queryIdentifier;
    return sameRepo && samePath && sameQueryIdentifier;
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return this._repo.toString() + pathToUrlEncodedString(this._path);
  }
};
var ReferenceImpl = class extends QueryImpl {
  constructor(repo, path) {
    super(repo, path, new QueryParams(), false);
  }
  get parent() {
    const parentPath = pathParent(this._path);
    return parentPath === null ? null : new ReferenceImpl(this._repo, parentPath);
  }
  get root() {
    let ref2 = this;
    while (ref2.parent !== null) {
      ref2 = ref2.parent;
    }
    return ref2;
  }
};
var DataSnapshot = class {
  constructor(_node, ref2, _index) {
    this._node = _node;
    this.ref = ref2;
    this._index = _index;
  }
  get priority() {
    return this._node.getPriority().val();
  }
  get key() {
    return this.ref.key;
  }
  get size() {
    return this._node.numChildren();
  }
  child(path) {
    const childPath = new Path(path);
    const childRef = child(this.ref, path);
    return new DataSnapshot(this._node.getChild(childPath), childRef, PRIORITY_INDEX);
  }
  exists() {
    return !this._node.isEmpty();
  }
  exportVal() {
    return this._node.val(true);
  }
  forEach(action) {
    if (this._node.isLeafNode()) {
      return false;
    }
    const childrenNode = this._node;
    return !!childrenNode.forEachChild(this._index, (key, node) => {
      return action(new DataSnapshot(node, child(this.ref, key), PRIORITY_INDEX));
    });
  }
  hasChild(path) {
    const childPath = new Path(path);
    return !this._node.getChild(childPath).isEmpty();
  }
  hasChildren() {
    if (this._node.isLeafNode()) {
      return false;
    } else {
      return !this._node.isEmpty();
    }
  }
  toJSON() {
    return this.exportVal();
  }
  val() {
    return this._node.val();
  }
};
function child(parent, path) {
  parent = getModularInstance(parent);
  if (pathGetFront(parent._path) === null) {
    validateRootPathString("child", "path", path, false);
  } else {
    validatePathString("child", "path", path, false);
  }
  return new ReferenceImpl(parent._repo, pathChild(parent._path, path));
}
var ValueEventRegistration = class {
  constructor(callbackContext) {
    this.callbackContext = callbackContext;
  }
  respondsTo(eventType) {
    return eventType === "value";
  }
  createEvent(change, query) {
    const index = query._queryParams.getIndex();
    return new DataEvent("value", this, new DataSnapshot(change.snapshotNode, new ReferenceImpl(query._repo, query._path), index));
  }
  getEventRunner(eventData) {
    if (eventData.getEventType() === "cancel") {
      return () => this.callbackContext.onCancel(eventData.error);
    } else {
      return () => this.callbackContext.onValue(eventData.snapshot, null);
    }
  }
  createCancelEvent(error2, path) {
    if (this.callbackContext.hasCancelCallback) {
      return new CancelEvent(this, error2, path);
    } else {
      return null;
    }
  }
  matches(other) {
    if (!(other instanceof ValueEventRegistration)) {
      return false;
    } else if (!other.callbackContext || !this.callbackContext) {
      return true;
    } else {
      return other.callbackContext.matches(this.callbackContext);
    }
  }
  hasAnyCallback() {
    return this.callbackContext !== null;
  }
};
var ChildEventRegistration = class {
  constructor(eventType, callbackContext) {
    this.eventType = eventType;
    this.callbackContext = callbackContext;
  }
  respondsTo(eventType) {
    let eventToCheck = eventType === "children_added" ? "child_added" : eventType;
    eventToCheck = eventToCheck === "children_removed" ? "child_removed" : eventToCheck;
    return this.eventType === eventToCheck;
  }
  createCancelEvent(error2, path) {
    if (this.callbackContext.hasCancelCallback) {
      return new CancelEvent(this, error2, path);
    } else {
      return null;
    }
  }
  createEvent(change, query) {
    assert(change.childName != null, "Child events should have a childName.");
    const childRef = child(new ReferenceImpl(query._repo, query._path), change.childName);
    const index = query._queryParams.getIndex();
    return new DataEvent(change.type, this, new DataSnapshot(change.snapshotNode, childRef, index), change.prevName);
  }
  getEventRunner(eventData) {
    if (eventData.getEventType() === "cancel") {
      return () => this.callbackContext.onCancel(eventData.error);
    } else {
      return () => this.callbackContext.onValue(eventData.snapshot, eventData.prevName);
    }
  }
  matches(other) {
    if (other instanceof ChildEventRegistration) {
      return this.eventType === other.eventType && (!this.callbackContext || !other.callbackContext || this.callbackContext.matches(other.callbackContext));
    }
    return false;
  }
  hasAnyCallback() {
    return !!this.callbackContext;
  }
};
function addEventListener(query, eventType, callback, cancelCallbackOrListenOptions, options) {
  let cancelCallback;
  if (typeof cancelCallbackOrListenOptions === "object") {
    cancelCallback = void 0;
    options = cancelCallbackOrListenOptions;
  }
  if (typeof cancelCallbackOrListenOptions === "function") {
    cancelCallback = cancelCallbackOrListenOptions;
  }
  if (options && options.onlyOnce) {
    const userCallback = callback;
    const onceCallback = (dataSnapshot, previousChildName) => {
      repoRemoveEventCallbackForQuery(query._repo, query, container);
      userCallback(dataSnapshot, previousChildName);
    };
    onceCallback.userCallback = callback.userCallback;
    onceCallback.context = callback.context;
    callback = onceCallback;
  }
  const callbackContext = new CallbackContext(callback, cancelCallback || void 0);
  const container = eventType === "value" ? new ValueEventRegistration(callbackContext) : new ChildEventRegistration(eventType, callbackContext);
  repoAddEventCallbackForQuery(query._repo, query, container);
  return () => repoRemoveEventCallbackForQuery(query._repo, query, container);
}
function onValue(query, callback, cancelCallbackOrListenOptions, options) {
  return addEventListener(query, "value", callback, cancelCallbackOrListenOptions, options);
}
function onChildAdded(query, callback, cancelCallbackOrListenOptions, options) {
  return addEventListener(query, "child_added", callback, cancelCallbackOrListenOptions, options);
}
function onChildChanged(query, callback, cancelCallbackOrListenOptions, options) {
  return addEventListener(query, "child_changed", callback, cancelCallbackOrListenOptions, options);
}
function onChildMoved(query, callback, cancelCallbackOrListenOptions, options) {
  return addEventListener(query, "child_moved", callback, cancelCallbackOrListenOptions, options);
}
function onChildRemoved(query, callback, cancelCallbackOrListenOptions, options) {
  return addEventListener(query, "child_removed", callback, cancelCallbackOrListenOptions, options);
}
syncPointSetReferenceConstructor(ReferenceImpl);
syncTreeSetReferenceConstructor(ReferenceImpl);
var FIREBASE_DATABASE_EMULATOR_HOST_VAR = "FIREBASE_DATABASE_EMULATOR_HOST";
var repos = {};
var useRestClient = false;
function repoManagerDatabaseFromApp(app, authProvider, appCheckProvider, url, nodeAdmin) {
  let dbUrl = url || app.options.databaseURL;
  if (dbUrl === void 0) {
    if (!app.options.projectId) {
      fatal("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp().");
    }
    log("Using default host for project ", app.options.projectId);
    dbUrl = `${app.options.projectId}-default-rtdb.firebaseio.com`;
  }
  let parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
  let repoInfo = parsedUrl.repoInfo;
  let isEmulator;
  let dbEmulatorHost = void 0;
  if (typeof process !== "undefined" && process.env) {
    dbEmulatorHost = process.env[FIREBASE_DATABASE_EMULATOR_HOST_VAR];
  }
  if (dbEmulatorHost) {
    isEmulator = true;
    dbUrl = `http://${dbEmulatorHost}?ns=${repoInfo.namespace}`;
    parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
    repoInfo = parsedUrl.repoInfo;
  } else {
    isEmulator = !parsedUrl.repoInfo.secure;
  }
  const authTokenProvider = nodeAdmin && isEmulator ? new EmulatorTokenProvider(EmulatorTokenProvider.OWNER) : new FirebaseAuthTokenProvider(app.name, app.options, authProvider);
  validateUrl("Invalid Firebase Database URL", parsedUrl);
  if (!pathIsEmpty(parsedUrl.path)) {
    fatal("Database URL must point to the root of a Firebase Database (not including a child path).");
  }
  const repo = repoManagerCreateRepo(repoInfo, app, authTokenProvider, new AppCheckTokenProvider(app.name, appCheckProvider));
  return new Database(repo, app);
}
function repoManagerDeleteRepo(repo, appName) {
  const appRepos = repos[appName];
  if (!appRepos || appRepos[repo.key] !== repo) {
    fatal(`Database ${appName}(${repo.repoInfo_}) has already been deleted.`);
  }
  repoInterrupt(repo);
  delete appRepos[repo.key];
}
function repoManagerCreateRepo(repoInfo, app, authTokenProvider, appCheckProvider) {
  let appRepos = repos[app.name];
  if (!appRepos) {
    appRepos = {};
    repos[app.name] = appRepos;
  }
  let repo = appRepos[repoInfo.toURLString()];
  if (repo) {
    fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");
  }
  repo = new Repo(repoInfo, useRestClient, authTokenProvider, appCheckProvider);
  appRepos[repoInfo.toURLString()] = repo;
  return repo;
}
var Database = class {
  constructor(_repoInternal, app) {
    this._repoInternal = _repoInternal;
    this.app = app;
    this["type"] = "database";
    this._instanceStarted = false;
  }
  get _repo() {
    if (!this._instanceStarted) {
      repoStart(this._repoInternal, this.app.options.appId, this.app.options["databaseAuthVariableOverride"]);
      this._instanceStarted = true;
    }
    return this._repoInternal;
  }
  get _root() {
    if (!this._rootInternal) {
      this._rootInternal = new ReferenceImpl(this._repo, newEmptyPath());
    }
    return this._rootInternal;
  }
  _delete() {
    if (this._rootInternal !== null) {
      repoManagerDeleteRepo(this._repo, this.app.name);
      this._repoInternal = null;
      this._rootInternal = null;
    }
    return Promise.resolve();
  }
  _checkNotDeleted(apiName) {
    if (this._rootInternal === null) {
      fatal("Cannot call " + apiName + " on a deleted database.");
    }
  }
};
function registerDatabase(variant) {
  setSDKVersion(SDK_VERSION);
  _registerComponent(new Component("database", (container, { instanceIdentifier: url }) => {
    const app = container.getProvider("app").getImmediate();
    const authProvider = container.getProvider("auth-internal");
    const appCheckProvider = container.getProvider("app-check-internal");
    return repoManagerDatabaseFromApp(app, authProvider, appCheckProvider, url);
  }, "PUBLIC").setMultipleInstances(true));
  registerVersion(name, version, variant);
  registerVersion(name, version, "esm2017");
}
PersistentConnection.prototype.simpleListen = function(pathString, onComplete) {
  this.sendRequest("q", { p: pathString }, onComplete);
};
PersistentConnection.prototype.echo = function(data, onEcho) {
  this.sendRequest("echo", { d: data }, onEcho);
};
registerDatabase();

// node_modules/firebase/app/dist/index.esm.js
var name2 = "firebase";
var version2 = "9.14.0";
registerVersion(name2, version2, "app");

// node_modules/@firebase/functions/dist/index.esm2017.js
var FUNCTIONS_TYPE = "functions";
var ContextProvider = class {
  constructor(authProvider, messagingProvider, appCheckProvider) {
    this.auth = null;
    this.messaging = null;
    this.appCheck = null;
    this.auth = authProvider.getImmediate({ optional: true });
    this.messaging = messagingProvider.getImmediate({
      optional: true
    });
    if (!this.auth) {
      authProvider.get().then((auth) => this.auth = auth, () => {
      });
    }
    if (!this.messaging) {
      messagingProvider.get().then((messaging) => this.messaging = messaging, () => {
      });
    }
    if (!this.appCheck) {
      appCheckProvider.get().then((appCheck) => this.appCheck = appCheck, () => {
      });
    }
  }
  async getAuthToken() {
    if (!this.auth) {
      return void 0;
    }
    try {
      const token = await this.auth.getToken();
      return token === null || token === void 0 ? void 0 : token.accessToken;
    } catch (e) {
      return void 0;
    }
  }
  async getMessagingToken() {
    if (!this.messaging || !("Notification" in self) || Notification.permission !== "granted") {
      return void 0;
    }
    try {
      return await this.messaging.getToken();
    } catch (e) {
      return void 0;
    }
  }
  async getAppCheckToken() {
    if (this.appCheck) {
      const result = await this.appCheck.getToken();
      if (result.error) {
        return null;
      }
      return result.token;
    }
    return null;
  }
  async getContext() {
    const authToken = await this.getAuthToken();
    const messagingToken = await this.getMessagingToken();
    const appCheckToken = await this.getAppCheckToken();
    return { authToken, messagingToken, appCheckToken };
  }
};
var DEFAULT_REGION = "us-central1";
var FunctionsService = class {
  constructor(app, authProvider, messagingProvider, appCheckProvider, regionOrCustomDomain = DEFAULT_REGION, fetchImpl) {
    this.app = app;
    this.fetchImpl = fetchImpl;
    this.emulatorOrigin = null;
    this.contextProvider = new ContextProvider(authProvider, messagingProvider, appCheckProvider);
    this.cancelAllRequests = new Promise((resolve) => {
      this.deleteService = () => {
        return Promise.resolve(resolve());
      };
    });
    try {
      const url = new URL(regionOrCustomDomain);
      this.customDomain = url.origin;
      this.region = DEFAULT_REGION;
    } catch (e) {
      this.customDomain = null;
      this.region = regionOrCustomDomain;
    }
  }
  _delete() {
    return this.deleteService();
  }
  _url(name5) {
    const projectId = this.app.options.projectId;
    if (this.emulatorOrigin !== null) {
      const origin = this.emulatorOrigin;
      return `${origin}/${projectId}/${this.region}/${name5}`;
    }
    if (this.customDomain !== null) {
      return `${this.customDomain}/${name5}`;
    }
    return `https://${this.region}-${projectId}.cloudfunctions.net/${name5}`;
  }
};
var name3 = "@firebase/functions";
var version3 = "0.8.8";
var AUTH_INTERNAL_NAME = "auth-internal";
var APP_CHECK_INTERNAL_NAME = "app-check-internal";
var MESSAGING_INTERNAL_NAME = "messaging-internal";
function registerFunctions(fetchImpl, variant) {
  const factory = (container, { instanceIdentifier: regionOrCustomDomain }) => {
    const app = container.getProvider("app").getImmediate();
    const authProvider = container.getProvider(AUTH_INTERNAL_NAME);
    const messagingProvider = container.getProvider(MESSAGING_INTERNAL_NAME);
    const appCheckProvider = container.getProvider(APP_CHECK_INTERNAL_NAME);
    return new FunctionsService(app, authProvider, messagingProvider, appCheckProvider, regionOrCustomDomain, fetchImpl);
  };
  _registerComponent(new Component(FUNCTIONS_TYPE, factory, "PUBLIC").setMultipleInstances(true));
  registerVersion(name3, version3, variant);
  registerVersion(name3, version3, "esm2017");
}
registerFunctions(fetch.bind(self));

// node_modules/@firebase/remote-config/dist/esm/index.esm2017.js
var name4 = "@firebase/remote-config";
var version4 = "0.3.15";
var RC_COMPONENT_NAME = "remote-config";
var ERROR_DESCRIPTION_MAP = {
  ["registration-window"]: "Undefined window object. This SDK only supports usage in a browser environment.",
  ["registration-project-id"]: "Undefined project identifier. Check Firebase app initialization.",
  ["registration-api-key"]: "Undefined API key. Check Firebase app initialization.",
  ["registration-app-id"]: "Undefined app identifier. Check Firebase app initialization.",
  ["storage-open"]: "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
  ["storage-get"]: "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
  ["storage-set"]: "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
  ["storage-delete"]: "Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",
  ["fetch-client-network"]: "Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",
  ["fetch-timeout"]: 'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',
  ["fetch-throttle"]: 'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
  ["fetch-client-parse"]: "Fetch client could not parse response. Original error: {$originalErrorMessage}.",
  ["fetch-status"]: "Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",
  ["indexed-db-unavailable"]: "Indexed DB is not supported by current browser"
};
var ERROR_FACTORY = new ErrorFactory("remoteconfig", "Remote Config", ERROR_DESCRIPTION_MAP);
function ensureInitialized(remoteConfig) {
  const rc3 = getModularInstance(remoteConfig);
  if (!rc3._initializePromise) {
    rc3._initializePromise = rc3._storageCache.loadFromStorage().then(() => {
      rc3._isInitializationComplete = true;
    });
  }
  return rc3._initializePromise;
}
var CachingClient = class {
  constructor(client, storage, storageCache, logger2) {
    this.client = client;
    this.storage = storage;
    this.storageCache = storageCache;
    this.logger = logger2;
  }
  isCachedDataFresh(cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis) {
    if (!lastSuccessfulFetchTimestampMillis) {
      this.logger.debug("Config fetch cache check. Cache unpopulated.");
      return false;
    }
    const cacheAgeMillis = Date.now() - lastSuccessfulFetchTimestampMillis;
    const isCachedDataFresh = cacheAgeMillis <= cacheMaxAgeMillis;
    this.logger.debug(`Config fetch cache check. Cache age millis: ${cacheAgeMillis}. Cache max age millis (minimumFetchIntervalMillis setting): ${cacheMaxAgeMillis}. Is cache hit: ${isCachedDataFresh}.`);
    return isCachedDataFresh;
  }
  async fetch(request) {
    const [lastSuccessfulFetchTimestampMillis, lastSuccessfulFetchResponse] = await Promise.all([
      this.storage.getLastSuccessfulFetchTimestampMillis(),
      this.storage.getLastSuccessfulFetchResponse()
    ]);
    if (lastSuccessfulFetchResponse && this.isCachedDataFresh(request.cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis)) {
      return lastSuccessfulFetchResponse;
    }
    request.eTag = lastSuccessfulFetchResponse && lastSuccessfulFetchResponse.eTag;
    const response = await this.client.fetch(request);
    const storageOperations = [
      this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())
    ];
    if (response.status === 200) {
      storageOperations.push(this.storage.setLastSuccessfulFetchResponse(response));
    }
    await Promise.all(storageOperations);
    return response;
  }
};
function getUserLanguage(navigatorLanguage = navigator) {
  return navigatorLanguage.languages && navigatorLanguage.languages[0] || navigatorLanguage.language;
}
var RestClient = class {
  constructor(firebaseInstallations, sdkVersion, namespace, projectId, apiKey, appId) {
    this.firebaseInstallations = firebaseInstallations;
    this.sdkVersion = sdkVersion;
    this.namespace = namespace;
    this.projectId = projectId;
    this.apiKey = apiKey;
    this.appId = appId;
  }
  async fetch(request) {
    var _a2, _b, _c;
    const [installationId, installationToken] = await Promise.all([
      this.firebaseInstallations.getId(),
      this.firebaseInstallations.getToken()
    ]);
    const urlBase = window.FIREBASE_REMOTE_CONFIG_URL_BASE || "https://firebaseremoteconfig.googleapis.com";
    const url = `${urlBase}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`;
    const headers = {
      "Content-Type": "application/json",
      "Content-Encoding": "gzip",
      "If-None-Match": request.eTag || "*"
    };
    const requestBody = {
      sdk_version: this.sdkVersion,
      app_instance_id: installationId,
      app_instance_id_token: installationToken,
      app_id: this.appId,
      language_code: getUserLanguage()
    };
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody)
    };
    const fetchPromise = fetch(url, options);
    const timeoutPromise = new Promise((_resolve, reject) => {
      request.signal.addEventListener(() => {
        const error2 = new Error("The operation was aborted.");
        error2.name = "AbortError";
        reject(error2);
      });
    });
    let response;
    try {
      await Promise.race([fetchPromise, timeoutPromise]);
      response = await fetchPromise;
    } catch (originalError) {
      let errorCode = "fetch-client-network";
      if (((_a2 = originalError) === null || _a2 === void 0 ? void 0 : _a2.name) === "AbortError") {
        errorCode = "fetch-timeout";
      }
      throw ERROR_FACTORY.create(errorCode, {
        originalErrorMessage: (_b = originalError) === null || _b === void 0 ? void 0 : _b.message
      });
    }
    let status = response.status;
    const responseEtag = response.headers.get("ETag") || void 0;
    let config;
    let state;
    if (response.status === 200) {
      let responseBody;
      try {
        responseBody = await response.json();
      } catch (originalError) {
        throw ERROR_FACTORY.create("fetch-client-parse", {
          originalErrorMessage: (_c = originalError) === null || _c === void 0 ? void 0 : _c.message
        });
      }
      config = responseBody["entries"];
      state = responseBody["state"];
    }
    if (state === "INSTANCE_STATE_UNSPECIFIED") {
      status = 500;
    } else if (state === "NO_CHANGE") {
      status = 304;
    } else if (state === "NO_TEMPLATE" || state === "EMPTY_CONFIG") {
      config = {};
    }
    if (status !== 304 && status !== 200) {
      throw ERROR_FACTORY.create("fetch-status", {
        httpStatus: status
      });
    }
    return { status, eTag: responseEtag, config };
  }
};
function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise((resolve, reject) => {
    const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    const timeout = setTimeout(resolve, backoffMillis);
    signal.addEventListener(() => {
      clearTimeout(timeout);
      reject(ERROR_FACTORY.create("fetch-throttle", {
        throttleEndTimeMillis
      }));
    });
  });
}
function isRetriableError(e) {
  if (!(e instanceof FirebaseError) || !e.customData) {
    return false;
  }
  const httpStatus = Number(e.customData["httpStatus"]);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
var RetryingClient = class {
  constructor(client, storage) {
    this.client = client;
    this.storage = storage;
  }
  async fetch(request) {
    const throttleMetadata = await this.storage.getThrottleMetadata() || {
      backoffCount: 0,
      throttleEndTimeMillis: Date.now()
    };
    return this.attemptFetch(request, throttleMetadata);
  }
  async attemptFetch(request, { throttleEndTimeMillis, backoffCount }) {
    await setAbortableTimeout(request.signal, throttleEndTimeMillis);
    try {
      const response = await this.client.fetch(request);
      await this.storage.deleteThrottleMetadata();
      return response;
    } catch (e) {
      if (!isRetriableError(e)) {
        throw e;
      }
      const throttleMetadata = {
        throttleEndTimeMillis: Date.now() + calculateBackoffMillis(backoffCount),
        backoffCount: backoffCount + 1
      };
      await this.storage.setThrottleMetadata(throttleMetadata);
      return this.attemptFetch(request, throttleMetadata);
    }
  }
};
var DEFAULT_FETCH_TIMEOUT_MILLIS = 60 * 1e3;
var DEFAULT_CACHE_MAX_AGE_MILLIS = 12 * 60 * 60 * 1e3;
var RemoteConfig = class {
  constructor(app, _client, _storageCache, _storage, _logger) {
    this.app = app;
    this._client = _client;
    this._storageCache = _storageCache;
    this._storage = _storage;
    this._logger = _logger;
    this._isInitializationComplete = false;
    this.settings = {
      fetchTimeoutMillis: DEFAULT_FETCH_TIMEOUT_MILLIS,
      minimumFetchIntervalMillis: DEFAULT_CACHE_MAX_AGE_MILLIS
    };
    this.defaultConfig = {};
  }
  get fetchTimeMillis() {
    return this._storageCache.getLastSuccessfulFetchTimestampMillis() || -1;
  }
  get lastFetchStatus() {
    return this._storageCache.getLastFetchStatus() || "no-fetch-yet";
  }
};
function toFirebaseError(event, errorCode) {
  var _a2;
  const originalError = event.target.error || void 0;
  return ERROR_FACTORY.create(errorCode, {
    originalErrorMessage: originalError && ((_a2 = originalError) === null || _a2 === void 0 ? void 0 : _a2.message)
  });
}
var APP_NAMESPACE_STORE = "app_namespace_store";
var DB_NAME = "firebase_remote_config";
var DB_VERSION = 1;
function openDatabase() {
  return new Promise((resolve, reject) => {
    var _a2;
    try {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = (event) => {
        reject(toFirebaseError(event, "storage-open"));
      };
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
      request.onupgradeneeded = (event) => {
        const db2 = event.target.result;
        switch (event.oldVersion) {
          case 0:
            db2.createObjectStore(APP_NAMESPACE_STORE, {
              keyPath: "compositeKey"
            });
        }
      };
    } catch (error2) {
      reject(ERROR_FACTORY.create("storage-open", {
        originalErrorMessage: (_a2 = error2) === null || _a2 === void 0 ? void 0 : _a2.message
      }));
    }
  });
}
var Storage = class {
  constructor(appId, appName, namespace, openDbPromise = openDatabase()) {
    this.appId = appId;
    this.appName = appName;
    this.namespace = namespace;
    this.openDbPromise = openDbPromise;
  }
  getLastFetchStatus() {
    return this.get("last_fetch_status");
  }
  setLastFetchStatus(status) {
    return this.set("last_fetch_status", status);
  }
  getLastSuccessfulFetchTimestampMillis() {
    return this.get("last_successful_fetch_timestamp_millis");
  }
  setLastSuccessfulFetchTimestampMillis(timestamp) {
    return this.set("last_successful_fetch_timestamp_millis", timestamp);
  }
  getLastSuccessfulFetchResponse() {
    return this.get("last_successful_fetch_response");
  }
  setLastSuccessfulFetchResponse(response) {
    return this.set("last_successful_fetch_response", response);
  }
  getActiveConfig() {
    return this.get("active_config");
  }
  setActiveConfig(config) {
    return this.set("active_config", config);
  }
  getActiveConfigEtag() {
    return this.get("active_config_etag");
  }
  setActiveConfigEtag(etag) {
    return this.set("active_config_etag", etag);
  }
  getThrottleMetadata() {
    return this.get("throttle_metadata");
  }
  setThrottleMetadata(metadata) {
    return this.set("throttle_metadata", metadata);
  }
  deleteThrottleMetadata() {
    return this.delete("throttle_metadata");
  }
  async get(key) {
    const db2 = await this.openDbPromise;
    return new Promise((resolve, reject) => {
      var _a2;
      const transaction = db2.transaction([APP_NAMESPACE_STORE], "readonly");
      const objectStore = transaction.objectStore(APP_NAMESPACE_STORE);
      const compositeKey = this.createCompositeKey(key);
      try {
        const request = objectStore.get(compositeKey);
        request.onerror = (event) => {
          reject(toFirebaseError(event, "storage-get"));
        };
        request.onsuccess = (event) => {
          const result = event.target.result;
          if (result) {
            resolve(result.value);
          } else {
            resolve(void 0);
          }
        };
      } catch (e) {
        reject(ERROR_FACTORY.create("storage-get", {
          originalErrorMessage: (_a2 = e) === null || _a2 === void 0 ? void 0 : _a2.message
        }));
      }
    });
  }
  async set(key, value) {
    const db2 = await this.openDbPromise;
    return new Promise((resolve, reject) => {
      var _a2;
      const transaction = db2.transaction([APP_NAMESPACE_STORE], "readwrite");
      const objectStore = transaction.objectStore(APP_NAMESPACE_STORE);
      const compositeKey = this.createCompositeKey(key);
      try {
        const request = objectStore.put({
          compositeKey,
          value
        });
        request.onerror = (event) => {
          reject(toFirebaseError(event, "storage-set"));
        };
        request.onsuccess = () => {
          resolve();
        };
      } catch (e) {
        reject(ERROR_FACTORY.create("storage-set", {
          originalErrorMessage: (_a2 = e) === null || _a2 === void 0 ? void 0 : _a2.message
        }));
      }
    });
  }
  async delete(key) {
    const db2 = await this.openDbPromise;
    return new Promise((resolve, reject) => {
      var _a2;
      const transaction = db2.transaction([APP_NAMESPACE_STORE], "readwrite");
      const objectStore = transaction.objectStore(APP_NAMESPACE_STORE);
      const compositeKey = this.createCompositeKey(key);
      try {
        const request = objectStore.delete(compositeKey);
        request.onerror = (event) => {
          reject(toFirebaseError(event, "storage-delete"));
        };
        request.onsuccess = () => {
          resolve();
        };
      } catch (e) {
        reject(ERROR_FACTORY.create("storage-delete", {
          originalErrorMessage: (_a2 = e) === null || _a2 === void 0 ? void 0 : _a2.message
        }));
      }
    });
  }
  createCompositeKey(key) {
    return [this.appId, this.appName, this.namespace, key].join();
  }
};
var StorageCache = class {
  constructor(storage) {
    this.storage = storage;
  }
  getLastFetchStatus() {
    return this.lastFetchStatus;
  }
  getLastSuccessfulFetchTimestampMillis() {
    return this.lastSuccessfulFetchTimestampMillis;
  }
  getActiveConfig() {
    return this.activeConfig;
  }
  async loadFromStorage() {
    const lastFetchStatusPromise = this.storage.getLastFetchStatus();
    const lastSuccessfulFetchTimestampMillisPromise = this.storage.getLastSuccessfulFetchTimestampMillis();
    const activeConfigPromise = this.storage.getActiveConfig();
    const lastFetchStatus = await lastFetchStatusPromise;
    if (lastFetchStatus) {
      this.lastFetchStatus = lastFetchStatus;
    }
    const lastSuccessfulFetchTimestampMillis = await lastSuccessfulFetchTimestampMillisPromise;
    if (lastSuccessfulFetchTimestampMillis) {
      this.lastSuccessfulFetchTimestampMillis = lastSuccessfulFetchTimestampMillis;
    }
    const activeConfig = await activeConfigPromise;
    if (activeConfig) {
      this.activeConfig = activeConfig;
    }
  }
  setLastFetchStatus(status) {
    this.lastFetchStatus = status;
    return this.storage.setLastFetchStatus(status);
  }
  setLastSuccessfulFetchTimestampMillis(timestampMillis) {
    this.lastSuccessfulFetchTimestampMillis = timestampMillis;
    return this.storage.setLastSuccessfulFetchTimestampMillis(timestampMillis);
  }
  setActiveConfig(activeConfig) {
    this.activeConfig = activeConfig;
    return this.storage.setActiveConfig(activeConfig);
  }
};
function registerRemoteConfig() {
  _registerComponent(new Component(RC_COMPONENT_NAME, remoteConfigFactory, "PUBLIC").setMultipleInstances(true));
  registerVersion(name4, version4);
  registerVersion(name4, version4, "esm2017");
  function remoteConfigFactory(container, { instanceIdentifier: namespace }) {
    const app = container.getProvider("app").getImmediate();
    const installations = container.getProvider("installations-internal").getImmediate();
    if (typeof window === "undefined") {
      throw ERROR_FACTORY.create("registration-window");
    }
    if (!isIndexedDBAvailable()) {
      throw ERROR_FACTORY.create("indexed-db-unavailable");
    }
    const { projectId, apiKey, appId } = app.options;
    if (!projectId) {
      throw ERROR_FACTORY.create("registration-project-id");
    }
    if (!apiKey) {
      throw ERROR_FACTORY.create("registration-api-key");
    }
    if (!appId) {
      throw ERROR_FACTORY.create("registration-app-id");
    }
    namespace = namespace || "firebase";
    const storage = new Storage(appId, app.name, namespace);
    const storageCache = new StorageCache(storage);
    const logger2 = new Logger(name4);
    logger2.logLevel = LogLevel.ERROR;
    const restClient = new RestClient(
      installations,
      SDK_VERSION,
      namespace,
      projectId,
      apiKey,
      appId
    );
    const retryingClient = new RetryingClient(restClient, storage);
    const cachingClient = new CachingClient(retryingClient, storage, storageCache, logger2);
    const remoteConfigInstance = new RemoteConfig(app, cachingClient, storageCache, storage, logger2);
    ensureInitialized(remoteConfigInstance);
    return remoteConfigInstance;
  }
}
registerRemoteConfig();

// node_modules/reactfire/dist/index.js
var ce2 = function(e, t2) {
  return ce2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, ce2(e, t2);
};
function x3(e, t2) {
  if (typeof t2 != "function" && t2 !== null)
    throw new TypeError("Class extends value " + String(t2) + " is not a constructor or null");
  ce2(e, t2);
  function n() {
    this.constructor = e;
  }
  e.prototype = t2 === null ? Object.create(t2) : (n.prototype = t2.prototype, new n());
}
function pe2(e, t2, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(u) {
      u(o);
    });
  }
  return new (n || (n = Promise))(function(o, u) {
    function a(l2) {
      try {
        c(r.next(l2));
      } catch (d) {
        u(d);
      }
    }
    function s(l2) {
      try {
        c(r.throw(l2));
      } catch (d) {
        u(d);
      }
    }
    function c(l2) {
      l2.done ? o(l2.value) : i(l2.value).then(a, s);
    }
    c((r = r.apply(e, t2 || [])).next());
  });
}
function He2(e, t2) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, u;
  return u = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function a(c) {
    return function(l2) {
      return s([c, l2]);
    };
  }
  function s(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done)
          return o;
        switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: false };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = c;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(c);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = t2.call(e, n);
      } catch (l2) {
        c = [6, l2], i = 0;
      } finally {
        r = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: true };
  }
}
function V3(e) {
  var t2 = typeof Symbol == "function" && Symbol.iterator, n = t2 && e[t2], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function D2(e, t2) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), i, o = [], u;
  try {
    for (; (t2 === void 0 || t2-- > 0) && !(i = r.next()).done; )
      o.push(i.value);
  } catch (a) {
    u = { error: a };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return o;
}
function R2(e, t2, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t2.length, o; r < i; r++)
      (o || !(r in t2)) && (o || (o = Array.prototype.slice.call(t2, 0, r)), o[r] = t2[r]);
  return e.concat(o || Array.prototype.slice.call(t2));
}
function U3(e) {
  return this instanceof U3 ? (this.v = e, this) : new U3(e);
}
function Bt2(e, t2, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t2 || []), i, o = [];
  return i = {}, u("next"), u("throw"), u("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function u(v3) {
    r[v3] && (i[v3] = function(p2) {
      return new Promise(function(S3, h) {
        o.push([v3, p2, S3, h]) > 1 || a(v3, p2);
      });
    });
  }
  function a(v3, p2) {
    try {
      s(r[v3](p2));
    } catch (S3) {
      d(o[0][3], S3);
    }
  }
  function s(v3) {
    v3.value instanceof U3 ? Promise.resolve(v3.value.v).then(c, l2) : d(o[0][2], v3);
  }
  function c(v3) {
    a("next", v3);
  }
  function l2(v3) {
    a("throw", v3);
  }
  function d(v3, p2) {
    v3(p2), o.shift(), o.length && a(o[0][0], o[0][1]);
  }
}
function Xt2(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t2 = e[Symbol.asyncIterator], n;
  return t2 ? t2.call(e) : (e = typeof V3 == "function" ? V3(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(o) {
    n[o] = e[o] && function(u) {
      return new Promise(function(a, s) {
        u = e[o](u), i(a, s, u.done, u.value);
      });
    };
  }
  function i(o, u, a, s) {
    Promise.resolve(s).then(function(c) {
      o({ value: c, done: a });
    }, u);
  }
}
function b2(e) {
  return typeof e == "function";
}
function me2(e) {
  var t2 = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = e(t2);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var oe2 = me2(function(e) {
  return function(n) {
    e(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function B3(e, t2) {
  if (e) {
    var n = e.indexOf(t2);
    0 <= n && e.splice(n, 1);
  }
}
var N3 = function() {
  function e(t2) {
    this.initialTeardown = t2, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t2, n, r, i, o;
    if (!this.closed) {
      this.closed = true;
      var u = this._parentage;
      if (u)
        if (this._parentage = null, Array.isArray(u))
          try {
            for (var a = V3(u), s = a.next(); !s.done; s = a.next()) {
              var c = s.value;
              c.remove(this);
            }
          } catch (h) {
            t2 = { error: h };
          } finally {
            try {
              s && !s.done && (n = a.return) && n.call(a);
            } finally {
              if (t2)
                throw t2.error;
            }
          }
        else
          u.remove(this);
      var l2 = this.initialTeardown;
      if (b2(l2))
        try {
          l2();
        } catch (h) {
          o = h instanceof oe2 ? h.errors : [h];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var v3 = V3(d), p2 = v3.next(); !p2.done; p2 = v3.next()) {
            var S3 = p2.value;
            try {
              We2(S3);
            } catch (h) {
              o = o != null ? o : [], h instanceof oe2 ? o = R2(R2([], D2(o)), D2(h.errors)) : o.push(h);
            }
          }
        } catch (h) {
          r = { error: h };
        } finally {
          try {
            p2 && !p2.done && (i = v3.return) && i.call(v3);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (o)
        throw new oe2(o);
    }
  }, e.prototype.add = function(t2) {
    var n;
    if (t2 && t2 !== this)
      if (this.closed)
        We2(t2);
      else {
        if (t2 instanceof e) {
          if (t2.closed || t2._hasParent(this))
            return;
          t2._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t2);
      }
  }, e.prototype._hasParent = function(t2) {
    var n = this._parentage;
    return n === t2 || Array.isArray(n) && n.includes(t2);
  }, e.prototype._addParent = function(t2) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(t2), n) : n ? [n, t2] : t2;
  }, e.prototype._removeParent = function(t2) {
    var n = this._parentage;
    n === t2 ? this._parentage = null : Array.isArray(n) && B3(n, t2);
  }, e.prototype.remove = function(t2) {
    var n = this._finalizers;
    n && B3(n, t2), t2 instanceof e && t2._removeParent(this);
  }, e.EMPTY = function() {
    var t2 = new e();
    return t2.closed = true, t2;
  }(), e;
}();
var Ye2 = N3.EMPTY;
function Ge2(e) {
  return e instanceof N3 || e && "closed" in e && b2(e.remove) && b2(e.add) && b2(e.unsubscribe);
}
function We2(e) {
  b2(e) ? e() : e.unsubscribe();
}
var be2 = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};
var le2 = {
  setTimeout: function(e, t2) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = le2.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, R2([e, t2], D2(n))) : setTimeout.apply(void 0, R2([e, t2], D2(n)));
  },
  clearTimeout: function(e) {
    var t2 = le2.delegate;
    return ((t2 == null ? void 0 : t2.clearTimeout) || clearTimeout)(e);
  },
  delegate: void 0
};
function Je2(e) {
  le2.setTimeout(function() {
    throw e;
  });
}
function fe2() {
}
var G3 = null;
function z3(e) {
  if (be2.useDeprecatedSynchronousErrorHandling) {
    var t2 = !G3;
    if (t2 && (G3 = { errorThrown: false, error: null }), e(), t2) {
      var n = G3, r = n.errorThrown, i = n.error;
      if (G3 = null, r)
        throw i;
    }
  } else
    e();
}
var ye2 = function(e) {
  x3(t2, e);
  function t2(n) {
    var r = e.call(this) || this;
    return r.isStopped = false, n ? (r.destination = n, Ge2(n) && n.add(r)) : r.destination = rn2, r;
  }
  return t2.create = function(n, r, i) {
    return new L3(n, r, i);
  }, t2.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, t2.prototype.error = function(n) {
    this.isStopped || (this.isStopped = true, this._error(n));
  }, t2.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, t2.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t2.prototype._next = function(n) {
    this.destination.next(n);
  }, t2.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, t2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t2;
}(N3);
var en2 = Function.prototype.bind;
function ue2(e, t2) {
  return en2.call(e, t2);
}
var tn2 = function() {
  function e(t2) {
    this.partialObserver = t2;
  }
  return e.prototype.next = function(t2) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(t2);
      } catch (r) {
        J2(r);
      }
  }, e.prototype.error = function(t2) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t2);
      } catch (r) {
        J2(r);
      }
    else
      J2(t2);
  }, e.prototype.complete = function() {
    var t2 = this.partialObserver;
    if (t2.complete)
      try {
        t2.complete();
      } catch (n) {
        J2(n);
      }
  }, e;
}();
var L3 = function(e) {
  x3(t2, e);
  function t2(n, r, i) {
    var o = e.call(this) || this, u;
    if (b2(n) || !n)
      u = {
        next: n != null ? n : void 0,
        error: r != null ? r : void 0,
        complete: i != null ? i : void 0
      };
    else {
      var a;
      o && be2.useDeprecatedNextContext ? (a = Object.create(n), a.unsubscribe = function() {
        return o.unsubscribe();
      }, u = {
        next: n.next && ue2(n.next, a),
        error: n.error && ue2(n.error, a),
        complete: n.complete && ue2(n.complete, a)
      }) : u = n;
    }
    return o.destination = new tn2(u), o;
  }
  return t2;
}(ye2);
function J2(e) {
  Je2(e);
}
function nn2(e) {
  throw e;
}
var rn2 = {
  closed: true,
  next: fe2,
  error: nn2,
  complete: fe2
};
var ge2 = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function W3(e) {
  return e;
}
function on2(e) {
  return e.length === 0 ? W3 : e.length === 1 ? e[0] : function(n) {
    return e.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var y2 = function() {
  function e(t2) {
    t2 && (this._subscribe = t2);
  }
  return e.prototype.lift = function(t2) {
    var n = new e();
    return n.source = this, n.operator = t2, n;
  }, e.prototype.subscribe = function(t2, n, r) {
    var i = this, o = an2(t2) ? t2 : new L3(t2, n, r);
    return z3(function() {
      var u = i, a = u.operator, s = u.source;
      o.add(a ? a.call(o, s) : s ? i._subscribe(o) : i._trySubscribe(o));
    }), o;
  }, e.prototype._trySubscribe = function(t2) {
    try {
      return this._subscribe(t2);
    } catch (n) {
      t2.error(n);
    }
  }, e.prototype.forEach = function(t2, n) {
    var r = this;
    return n = qe2(n), new n(function(i, o) {
      var u = new L3({
        next: function(a) {
          try {
            t2(a);
          } catch (s) {
            o(s), u.unsubscribe();
          }
        },
        error: o,
        complete: i
      });
      r.subscribe(u);
    });
  }, e.prototype._subscribe = function(t2) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t2);
  }, e.prototype[ge2] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t2 = [], n = 0; n < arguments.length; n++)
      t2[n] = arguments[n];
    return on2(t2)(this);
  }, e.prototype.toPromise = function(t2) {
    var n = this;
    return t2 = qe2(t2), new t2(function(r, i) {
      var o;
      n.subscribe(function(u) {
        return o = u;
      }, function(u) {
        return i(u);
      }, function() {
        return r(o);
      });
    });
  }, e.create = function(t2) {
    return new e(t2);
  }, e;
}();
function qe2(e) {
  var t2;
  return (t2 = e != null ? e : be2.Promise) !== null && t2 !== void 0 ? t2 : Promise;
}
function un2(e) {
  return e && b2(e.next) && b2(e.error) && b2(e.complete);
}
function an2(e) {
  return e && e instanceof ye2 || un2(e) && Ge2(e);
}
function sn2(e) {
  return b2(e == null ? void 0 : e.lift);
}
function _(e) {
  return function(t2) {
    if (sn2(t2))
      return t2.lift(function(n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function w2(e, t2, n, r, i) {
  return new cn2(e, t2, n, r, i);
}
var cn2 = function(e) {
  x3(t2, e);
  function t2(n, r, i, o, u, a) {
    var s = e.call(this, n) || this;
    return s.onFinalize = u, s.shouldUnsubscribe = a, s._next = r ? function(c) {
      try {
        r(c);
      } catch (l2) {
        n.error(l2);
      }
    } : e.prototype._next, s._error = o ? function(c) {
      try {
        o(c);
      } catch (l2) {
        n.error(l2);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, s._complete = i ? function() {
      try {
        i();
      } catch (c) {
        n.error(c);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, s;
  }
  return t2.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      e.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, t2;
}(ye2);
var ln2 = me2(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
});
var ne2 = function(e) {
  x3(t2, e);
  function t2() {
    var n = e.call(this) || this;
    return n.closed = false, n.currentObservers = null, n.observers = [], n.isStopped = false, n.hasError = false, n.thrownError = null, n;
  }
  return t2.prototype.lift = function(n) {
    var r = new Qe2(this, this);
    return r.operator = n, r;
  }, t2.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new ln2();
  }, t2.prototype.next = function(n) {
    var r = this;
    z3(function() {
      var i, o;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var u = V3(r.currentObservers), a = u.next(); !a.done; a = u.next()) {
            var s = a.value;
            s.next(n);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            a && !a.done && (o = u.return) && o.call(u);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
    });
  }, t2.prototype.error = function(n) {
    var r = this;
    z3(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = true, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, t2.prototype.complete = function() {
    var n = this;
    z3(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = true;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, t2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t2.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: false,
    configurable: true
  }), t2.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n);
  }, t2.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, t2.prototype._innerSubscribe = function(n) {
    var r = this, i = this, o = i.hasError, u = i.isStopped, a = i.observers;
    return o || u ? Ye2 : (this.currentObservers = null, a.push(n), new N3(function() {
      r.currentObservers = null, B3(a, n);
    }));
  }, t2.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, o = r.thrownError, u = r.isStopped;
    i ? n.error(o) : u && n.complete();
  }, t2.prototype.asObservable = function() {
    var n = new y2();
    return n.source = this, n;
  }, t2.create = function(n, r) {
    return new Qe2(n, r);
  }, t2;
}(y2);
var Qe2 = function(e) {
  x3(t2, e);
  function t2(n, r) {
    var i = e.call(this) || this;
    return i.destination = n, i.source = r, i;
  }
  return t2.prototype.next = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, n);
  }, t2.prototype.error = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, n);
  }, t2.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, t2.prototype._subscribe = function(n) {
    var r, i;
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Ye2;
  }, t2;
}(ne2);
var we2 = {
  now: function() {
    return (we2.delegate || Date).now();
  },
  delegate: void 0
};
var fn2 = function(e) {
  x3(t2, e);
  function t2(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = we2);
    var o = e.call(this) || this;
    return o._bufferSize = n, o._windowTime = r, o._timestampProvider = i, o._buffer = [], o._infiniteTimeWindow = true, o._infiniteTimeWindow = r === 1 / 0, o._bufferSize = Math.max(1, n), o._windowTime = Math.max(1, r), o;
  }
  return t2.prototype.next = function(n) {
    var r = this, i = r.isStopped, o = r._buffer, u = r._infiniteTimeWindow, a = r._timestampProvider, s = r._windowTime;
    i || (o.push(n), !u && o.push(a.now() + s)), this._trimBuffer(), e.prototype.next.call(this, n);
  }, t2.prototype._subscribe = function(n) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(n), i = this, o = i._infiniteTimeWindow, u = i._buffer, a = u.slice(), s = 0; s < a.length && !n.closed; s += o ? 1 : 2)
      n.next(a[s]);
    return this._checkFinalizedStatuses(n), r;
  }, t2.prototype._trimBuffer = function() {
    var n = this, r = n._bufferSize, i = n._timestampProvider, o = n._buffer, u = n._infiniteTimeWindow, a = (u ? 1 : 2) * r;
    if (r < 1 / 0 && a < o.length && o.splice(0, o.length - a), !u) {
      for (var s = i.now(), c = 0, l2 = 1; l2 < o.length && o[l2] <= s; l2 += 2)
        c = l2;
      c && o.splice(0, c + 1);
    }
  }, t2;
}(ne2);
var dn2 = function(e) {
  x3(t2, e);
  function t2(n, r) {
    return e.call(this) || this;
  }
  return t2.prototype.schedule = function(n, r) {
    return this;
  }, t2;
}(N3);
var X3 = {
  setInterval: function(e, t2) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = X3.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, R2([e, t2], D2(n))) : setInterval.apply(void 0, R2([e, t2], D2(n)));
  },
  clearInterval: function(e) {
    var t2 = X3.delegate;
    return ((t2 == null ? void 0 : t2.clearInterval) || clearInterval)(e);
  },
  delegate: void 0
};
var vn2 = function(e) {
  x3(t2, e);
  function t2(n, r) {
    var i = e.call(this, n, r) || this;
    return i.scheduler = n, i.work = r, i.pending = false, i;
  }
  return t2.prototype.schedule = function(n, r) {
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var i = this.id, o = this.scheduler;
    return i != null && (this.id = this.recycleAsyncId(o, i, r)), this.pending = true, this.delay = r, this.id = this.id || this.requestAsyncId(o, this.id, r), this;
  }, t2.prototype.requestAsyncId = function(n, r, i) {
    return i === void 0 && (i = 0), X3.setInterval(n.flush.bind(n, this), i);
  }, t2.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === false)
      return r;
    X3.clearInterval(r);
  }, t2.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = false;
    var i = this._execute(n, r);
    if (i)
      return i;
    this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t2.prototype._execute = function(n, r) {
    var i = false, o;
    try {
      this.work(n);
    } catch (u) {
      i = true, o = u || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), o;
  }, t2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, i = n.scheduler, o = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = false, B3(o, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, e.prototype.unsubscribe.call(this);
    }
  }, t2;
}(dn2);
var Ke2 = function() {
  function e(t2, n) {
    n === void 0 && (n = e.now), this.schedulerActionCtor = t2, this.now = n;
  }
  return e.prototype.schedule = function(t2, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, t2).schedule(r, n);
  }, e.now = we2.now, e;
}();
var hn2 = function(e) {
  x3(t2, e);
  function t2(n, r) {
    r === void 0 && (r = Ke2.now);
    var i = e.call(this, n, r) || this;
    return i.actions = [], i._active = false, i._scheduled = void 0, i;
  }
  return t2.prototype.flush = function(n) {
    var r = this.actions;
    if (this._active) {
      r.push(n);
      return;
    }
    var i;
    this._active = true;
    do
      if (i = n.execute(n.state, n.delay))
        break;
    while (n = r.shift());
    if (this._active = false, i) {
      for (; n = r.shift(); )
        n.unsubscribe();
      throw i;
    }
  }, t2;
}(Ke2);
var _e2 = new hn2(vn2);
var Se2 = new y2(function(e) {
  return e.complete();
});
function mn2(e) {
  return e ? bn2(e) : Se2;
}
function bn2(e) {
  return new y2(function(t2) {
    return e.schedule(function() {
      return t2.complete();
    });
  });
}
function ze2(e) {
  return e && b2(e.schedule);
}
function Ze2(e) {
  return e[e.length - 1];
}
function Ce2(e) {
  return ze2(Ze2(e)) ? e.pop() : void 0;
}
var Be2 = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function Xe2(e) {
  return b2(e == null ? void 0 : e.then);
}
function et2(e) {
  return b2(e[ge2]);
}
function tt2(e) {
  return Symbol.asyncIterator && b2(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function nt2(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function gn2() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var rt2 = gn2();
function it2(e) {
  return b2(e == null ? void 0 : e[rt2]);
}
function ot2(e) {
  return Bt2(this, arguments, function() {
    var n, r, i, o;
    return He2(this, function(u) {
      switch (u.label) {
        case 0:
          n = e.getReader(), u.label = 1;
        case 1:
          u.trys.push([1, , 9, 10]), u.label = 2;
        case 2:
          return [4, U3(n.read())];
        case 3:
          return r = u.sent(), i = r.value, o = r.done, o ? [4, U3(void 0)] : [3, 5];
        case 4:
          return [2, u.sent()];
        case 5:
          return [4, U3(i)];
        case 6:
          return [4, u.sent()];
        case 7:
          return u.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return n.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function ut2(e) {
  return b2(e == null ? void 0 : e.getReader);
}
function I2(e) {
  if (e instanceof y2)
    return e;
  if (e != null) {
    if (et2(e))
      return wn2(e);
    if (Be2(e))
      return _n2(e);
    if (Xe2(e))
      return Sn2(e);
    if (tt2(e))
      return at2(e);
    if (it2(e))
      return Cn2(e);
    if (ut2(e))
      return En2(e);
  }
  throw nt2(e);
}
function wn2(e) {
  return new y2(function(t2) {
    var n = e[ge2]();
    if (b2(n.subscribe))
      return n.subscribe(t2);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function _n2(e) {
  return new y2(function(t2) {
    for (var n = 0; n < e.length && !t2.closed; n++)
      t2.next(e[n]);
    t2.complete();
  });
}
function Sn2(e) {
  return new y2(function(t2) {
    e.then(function(n) {
      t2.closed || (t2.next(n), t2.complete());
    }, function(n) {
      return t2.error(n);
    }).then(null, Je2);
  });
}
function Cn2(e) {
  return new y2(function(t2) {
    var n, r;
    try {
      for (var i = V3(e), o = i.next(); !o.done; o = i.next()) {
        var u = o.value;
        if (t2.next(u), t2.closed)
          return;
      }
    } catch (a) {
      n = { error: a };
    } finally {
      try {
        o && !o.done && (r = i.return) && r.call(i);
      } finally {
        if (n)
          throw n.error;
      }
    }
    t2.complete();
  });
}
function at2(e) {
  return new y2(function(t2) {
    xn2(e, t2).catch(function(n) {
      return t2.error(n);
    });
  });
}
function En2(e) {
  return at2(ot2(e));
}
function xn2(e, t2) {
  var n, r, i, o;
  return pe2(this, void 0, void 0, function() {
    var u, a;
    return He2(this, function(s) {
      switch (s.label) {
        case 0:
          s.trys.push([0, 5, 6, 11]), n = Xt2(e), s.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = s.sent(), !!r.done)
            return [3, 4];
          if (u = r.value, t2.next(u), t2.closed)
            return [2];
          s.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return a = s.sent(), i = { error: a }, [3, 11];
        case 6:
          return s.trys.push([6, , 9, 10]), r && !r.done && (o = n.return) ? [4, o.call(n)] : [3, 8];
        case 7:
          s.sent(), s.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i)
            throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t2.complete(), [2];
      }
    });
  });
}
function P3(e, t2, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = false);
  var o = t2.schedule(function() {
    n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (e.add(o), !i)
    return o;
}
function st2(e, t2) {
  return t2 === void 0 && (t2 = 0), _(function(n, r) {
    n.subscribe(w2(r, function(i) {
      return P3(r, e, function() {
        return r.next(i);
      }, t2);
    }, function() {
      return P3(r, e, function() {
        return r.complete();
      }, t2);
    }, function(i) {
      return P3(r, e, function() {
        return r.error(i);
      }, t2);
    }));
  });
}
function ct2(e, t2) {
  return t2 === void 0 && (t2 = 0), _(function(n, r) {
    r.add(e.schedule(function() {
      return n.subscribe(r);
    }, t2));
  });
}
function In2(e, t2) {
  return I2(e).pipe(ct2(t2), st2(t2));
}
function On2(e, t2) {
  return I2(e).pipe(ct2(t2), st2(t2));
}
function kn2(e, t2) {
  return new y2(function(n) {
    var r = 0;
    return t2.schedule(function() {
      r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function An2(e, t2) {
  return new y2(function(n) {
    var r;
    return P3(n, t2, function() {
      r = e[rt2](), P3(n, t2, function() {
        var i, o, u;
        try {
          i = r.next(), o = i.value, u = i.done;
        } catch (a) {
          n.error(a);
          return;
        }
        u ? n.complete() : n.next(o);
      }, 0, true);
    }), function() {
      return b2(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function lt2(e, t2) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new y2(function(n) {
    P3(n, t2, function() {
      var r = e[Symbol.asyncIterator]();
      P3(n, t2, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, true);
    });
  });
}
function Fn2(e, t2) {
  return lt2(ot2(e), t2);
}
function Pn2(e, t2) {
  if (e != null) {
    if (et2(e))
      return In2(e, t2);
    if (Be2(e))
      return kn2(e, t2);
    if (Xe2(e))
      return On2(e, t2);
    if (tt2(e))
      return lt2(e, t2);
    if (it2(e))
      return An2(e, t2);
    if (ut2(e))
      return Fn2(e, t2);
  }
  throw nt2(e);
}
function O3(e, t2) {
  return t2 ? Pn2(e, t2) : I2(e);
}
function ee2() {
  for (var e = [], t2 = 0; t2 < arguments.length; t2++)
    e[t2] = arguments[t2];
  var n = Ce2(e);
  return O3(e, n);
}
var ft = me2(function(e) {
  return function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function C3(e, t2) {
  return _(function(n, r) {
    var i = 0;
    n.subscribe(w2(r, function(o) {
      r.next(e.call(t2, o, i++));
    }));
  });
}
function vt2(e) {
  return _(function(t2, n) {
    var r = null, i = false, o;
    r = t2.subscribe(w2(n, void 0, void 0, function(u) {
      o = I2(e(u, vt2(e)(t2))), r ? (r.unsubscribe(), r = null, o.subscribe(n)) : i = true;
    })), i && (r.unsubscribe(), r = null, o.subscribe(n));
  });
}
function zn2(e) {
  e === void 0 && (e = {});
  var t2 = e.connector, n = t2 === void 0 ? function() {
    return new ne2();
  } : t2, r = e.resetOnError, i = r === void 0 ? true : r, o = e.resetOnComplete, u = o === void 0 ? true : o, a = e.resetOnRefCountZero, s = a === void 0 ? true : a;
  return function(c) {
    var l2, d, v3, p2 = 0, S3 = false, h = false, $2 = function() {
      d == null || d.unsubscribe(), d = void 0;
    }, E2 = function() {
      $2(), l2 = v3 = void 0, S3 = h = false;
    }, j2 = function() {
      var M3 = l2;
      E2(), M3 == null || M3.unsubscribe();
    };
    return _(function(M3, Le2) {
      p2++, !h && !S3 && $2();
      var H3 = v3 = v3 != null ? v3 : n();
      Le2.add(function() {
        p2--, p2 === 0 && !h && !S3 && (d = ae2(j2, s));
      }), H3.subscribe(Le2), !l2 && p2 > 0 && (l2 = new L3({
        next: function(Y3) {
          return H3.next(Y3);
        },
        error: function(Y3) {
          h = true, $2(), d = ae2(E2, i, Y3), H3.error(Y3);
        },
        complete: function() {
          S3 = true, $2(), d = ae2(E2, u), H3.complete();
        }
      }), I2(M3).subscribe(l2));
    })(c);
  };
}
function ae2(e, t2) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (t2 === true) {
    e();
    return;
  }
  if (t2 !== false) {
    var i = new L3({
      next: function() {
        i.unsubscribe(), e();
      }
    });
    return t2.apply(void 0, R2([], D2(n))).subscribe(i);
  }
}
function Zn2(e, t2, n) {
  var r, i, o, u, a = false;
  return e && typeof e == "object" ? (r = e.bufferSize, u = r === void 0 ? 1 / 0 : r, i = e.windowTime, t2 = i === void 0 ? 1 / 0 : i, o = e.refCount, a = o === void 0 ? false : o, n = e.scheduler) : u = e != null ? e : 1 / 0, zn2({
    connector: function() {
      return new fn2(u, t2, n);
    },
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: a
  });
}
function mt2(e, t2) {
  return _(function(n, r) {
    var i = null, o = 0, u = false, a = function() {
      return u && !i && r.complete();
    };
    n.subscribe(w2(r, function(s) {
      i == null || i.unsubscribe();
      var c = 0, l2 = o++;
      I2(e(s, l2)).subscribe(i = w2(r, function(d) {
        return r.next(t2 ? t2(s, d, l2, c++) : d);
      }, function() {
        i = null, a();
      }));
    }, function() {
      u = true, a();
    }));
  });
}
function Bn2(e, t2, n) {
  var r = b2(e) || t2 || n ? { next: e, error: t2, complete: n } : e;
  return r ? _(function(i, o) {
    var u;
    (u = r.subscribe) === null || u === void 0 || u.call(r);
    var a = true;
    i.subscribe(w2(o, function(s) {
      var c;
      (c = r.next) === null || c === void 0 || c.call(r, s), o.next(s);
    }, function() {
      var s;
      a = false, (s = r.complete) === null || s === void 0 || s.call(r), o.complete();
    }, function(s) {
      var c;
      a = false, (c = r.error) === null || c === void 0 || c.call(r, s), o.error(s);
    }, function() {
      var s, c;
      a && ((s = r.unsubscribe) === null || s === void 0 || s.call(r)), (c = r.finalize) === null || c === void 0 || c.call(r);
    }));
  }) : W3;
}
function xe2(e) {
  return new y2(function(t2) {
    var n = onIdTokenChanged(e, t2.next.bind(t2), t2.error.bind(t2), t2.complete.bind(t2));
    return { unsubscribe: n };
  });
}
var Xn2 = "[DEFAULT]";
var bt2 = f.createContext(void 0);
var Ie2 = f.createContext(false);
var er2 = "4.2.2";
var tr2 = (e, t2) => e === t2 || [...Object.keys(e), ...Object.keys(t2)].every((n) => e[n] === t2[n]);
function Lr2(e) {
  const {
    firebaseConfig: t2,
    appName: n,
    suspense: r
  } = e, i = f.useMemo(() => {
    if (e.firebaseApp)
      return e.firebaseApp;
    const o = getApps().find((u) => u.name === (n || Xn2));
    if (o) {
      if (t2 && tr2(o.options, t2))
        return o;
      throw new Error(`Does not match the options already provided to the ${n || "default"} firebase app instance, give this new instance a different appName.`);
    } else {
      if (!t2)
        throw new Error("No firebaseConfig provided");
      const u = f.version || "unknown";
      return registerVersion("react", u), registerVersion("reactfire", er2), initializeApp(t2, n);
    }
  }, [e.firebaseApp, t2, n]);
  return f.createElement(bt2.Provider, {
    value: i
  }, f.createElement(Ie2.Provider, Object.assign({
    value: r != null ? r : false
  }, e)));
}
function re2(e) {
  let t2 = f.useContext(Ie2);
  return e !== void 0 ? e : t2;
}
function yt2() {
  const e = f.useContext(bt2);
  if (!e)
    throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");
  return e;
}
function nr2(e) {
  var t2;
  const n = kt2(), r = `auth:user:${n.name}`, i = xe2(n), o = (t2 = Object.assign({}, e)) !== null && t2 !== void 0 ? t2 : {};
  return n.currentUser !== void 0 && (o.initialData = n.currentUser, o.startWithValue = n.currentUser), g(r, i, o);
}
function qr2(e) {
  if ((e == null ? void 0 : e.hasOwnProperty("requiredClaims")) && (e == null ? void 0 : e.hasOwnProperty("validateCustomClaims")))
    throw new Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');
  const t2 = kt2();
  let n = `auth:signInCheck:${t2.name}::forceRefresh:${!!(e != null && e.forceRefresh)}`;
  e != null && e.forceRefresh && (n = `${n}:forceRefresh:${e.forceRefresh}`), e != null && e.hasOwnProperty("requiredClaims") ? n = `${n}:requiredClaims:${JSON.stringify(e.requiredClaims)}` : e != null && e.hasOwnProperty("validateCustomClaims") && (n = `${n}:validateCustomClaims:${JSON.stringify(e.validateCustomClaims)}`);
  const r = xe2(t2).pipe(mt2((i) => {
    var o;
    return i ? e && (e.hasOwnProperty("requiredClaims") || e.hasOwnProperty("validateCustomClaims")) ? O3(i.getIdTokenResult((o = e == null ? void 0 : e.forceRefresh) !== null && o !== void 0 ? o : false)).pipe(C3((u) => {
      let a;
      e.hasOwnProperty("requiredClaims") ? a = ir2(e.requiredClaims) : a = e.validateCustomClaims;
      const {
        hasRequiredClaims: s,
        errors: c
      } = a(u.claims);
      return {
        signedIn: true,
        hasRequiredClaims: s,
        errors: c,
        user: i
      };
    })) : ee2({
      signedIn: true,
      hasRequiredClaims: true,
      errors: {},
      user: i
    }) : ee2({
      signedIn: false,
      hasRequiredClaims: false,
      errors: {},
      user: null
    });
  }));
  return g(n, r);
}
function ir2(e) {
  return function(n) {
    const r = {};
    return Object.keys(e).forEach((i) => {
      e[i] !== n[i] && (r[i] = [new Me2("auth/missing-claim", `Expected "${e[i]}", but user has "${n[i]}" instead`)]);
    }), {
      hasRequiredClaims: Object.keys(r).length === 0,
      errors: r
    };
  };
}
var T2;
var m;
(function(e) {
  e.added = "child_added", e.removed = "child_removed", e.changed = "child_changed", e.moved = "child_moved", e.value = "value";
})(m || (m = {}));
var ur2 = Object.freeze((T2 = {}, T2[m.added] = onChildAdded, T2[m.removed] = onChildRemoved, T2[m.changed] = onChildChanged, T2[m.moved] = onChildMoved, T2[m.value] = onValue, T2));
var ve2 = globalThis._reactFireDatabaseCachedQueries || [];
globalThis._reactFireDatabaseCachedQueries || (globalThis._reactFireDatabaseCachedQueries = ve2);
var hr2 = { includeMetadataChanges: false };
function ke2(e, t2) {
  return t2 === void 0 && (t2 = hr2), new y2(function(n) {
    var r = Il(e, t2, {
      next: n.next.bind(n),
      error: n.error.bind(n),
      complete: n.complete.bind(n)
    });
    return { unsubscribe: r };
  });
}
function ie2(e) {
  return ke2(e, { includeMetadataChanges: true });
}
function Ct2(e, t2) {
  return t2 === void 0 && (t2 = {}), ie2(e).pipe(C3(function(n) {
    return Et2(n, t2);
  }));
}
function Et2(e, t2) {
  t2 === void 0 && (t2 = {});
  var n = e.data();
  return !e.exists() || typeof n != "object" || n === null || t2.idField && (n[t2.idField] = e.id), n;
}
function pr2(e) {
  return ke2(e, { includeMetadataChanges: true }).pipe(C3(function(t2) {
    return t2.docs;
  }));
}
function mr2(e, t2) {
  return t2 === void 0 && (t2 = {}), pr2(e).pipe(C3(function(n) {
    return n.map(function(r) {
      return Et2(r, t2);
    });
  }));
}
var br2 = class extends ne2 {
  constructor(t2, n) {
    super(), this._timeoutWindow = n, this._hasValue = false, this._error = void 0, this._firstEmission = new Promise((r) => this._resolveFirstEmission = r), this._innerObservable = t2.pipe(Bn2({
      next: (r) => {
        this._next(r);
      },
      error: (r) => {
        this._error = r, this._resolveFirstEmission();
      }
    }), vt2(() => mn2()), Zn2(1)), this._warmupSubscription = this._innerObservable.subscribe(), this._timeoutHandler = setTimeout(this._reset.bind(this), this._timeoutWindow);
  }
  get hasValue() {
    return this._hasValue || !!this._error;
  }
  get value() {
    if (this._error)
      throw this._error;
    if (!this.hasValue)
      throw Error("Can only get value if SuspenseSubject has a value");
    return this._value;
  }
  get firstEmission() {
    return this._firstEmission;
  }
  _next(t2) {
    this._hasValue = true, this._value = t2, this._resolveFirstEmission();
  }
  _reset() {
    this._warmupSubscription && this._warmupSubscription.unsubscribe(), this._hasValue = false, this._value = void 0, this._error = void 0, this._firstEmission = new Promise((t2) => this._resolveFirstEmission = t2);
  }
  _subscribe(t2) {
    return this._timeoutHandler && clearTimeout(this._timeoutHandler), this._innerSubscriber = this._innerObservable.subscribe(t2), this._innerSubscriber;
  }
  get ourError() {
    return this._error;
  }
};
var yr2 = 3e4;
var Z2 = globalThis._reactFirePreloadedObservables || /* @__PURE__ */ new Map();
globalThis._reactFirePreloadedObservables || (globalThis._reactFirePreloadedObservables = Z2);
function Ae2(e, t2) {
  if (Z2.has(t2))
    return Z2.get(t2);
  {
    const n = new br2(e, yr2);
    return Z2.set(t2, n), n;
  }
}
function gr2(e) {
  return function(n, r) {
    const i = Object.assign(Object.assign({}, n), { hasEmitted: n.hasEmitted || e.hasValue, error: e.ourError, firstValuePromise: e.firstEmission });
    switch (e.hasValue && (i.data = e.value), r) {
      case "value":
        return i.status = "success", i;
      case "error":
        return i.status = "error", i;
      case "complete":
        return i.isComplete = true, i;
      default:
        throw new Error(`invalid action "${r}"`);
    }
  };
}
function g(e, t2, n = {}) {
  var r;
  if (!e)
    throw new Error("cannot call useObservable without an observableId");
  const i = Ae2(t2, e), o = n.hasOwnProperty("initialData") || n.hasOwnProperty("startWithValue"), u = i.hasValue || o;
  if (re2(n.suspense) === true && !u)
    throw i.firstEmission;
  const s = {
    status: u ? "success" : "loading",
    hasEmitted: u,
    isComplete: false,
    data: i.hasValue ? i.value : (r = n == null ? void 0 : n.initialData) !== null && r !== void 0 ? r : n == null ? void 0 : n.startWithValue,
    error: i.ourError,
    firstValuePromise: i.firstEmission
  }, [c, l2] = f.useReducer(gr2(i), s);
  return f.useEffect(() => {
    const d = i.subscribe({
      next: () => {
        l2("value");
      },
      error: (v3) => {
        throw l2("error"), v3;
      },
      complete: () => {
        l2("complete");
      }
    });
    return () => d.unsubscribe();
  }, [i]), c;
}
var he2 = globalThis._reactFireFirestoreQueryCache || [];
globalThis._reactFireFirestoreQueryCache || (globalThis._reactFireFirestoreQueryCache = he2);
function xt2(e) {
  const t2 = he2.findIndex((n) => ra2(n, e));
  return t2 > -1 ? t2 : he2.push(e) - 1;
}
function Br2(e, t2) {
  const n = t2 ? K3(t2) : "NO_ID_FIELD", r = `firestore:docData:${e.firestore.app.name}:${e.path}:idField=${n}`, i = Ct2(e, {
    idField: n
  });
  return g(r, i, t2);
}
function ti2(e, t2) {
  const n = t2 ? K3(t2) : "NO_ID_FIELD", r = `firestore:collectionData:${xt2(e)}:idField=${n}`, i = mr2(e, {
    idField: n
  });
  return g(r, i, t2);
}
var Fe2 = f.createContext(void 0);
var Pe2 = f.createContext(void 0);
var $e2 = f.createContext(void 0);
var Te2 = f.createContext(void 0);
var De2 = f.createContext(void 0);
var Re2 = f.createContext(void 0);
var je2 = f.createContext(void 0);
var Ue2 = f.createContext(void 0);
var Ve2 = f.createContext(void 0);
function k3(e) {
  return function(n) {
    var r, i;
    if (!n.sdk)
      throw new Error("no sdk provided");
    const o = yt2().name;
    if (((i = (r = n == null ? void 0 : n.sdk) === null || r === void 0 ? void 0 : r.app) === null || i === void 0 ? void 0 : i.name) !== o)
      throw new Error("sdk was initialized with a different firebase app");
    return f.createElement(e.Provider, Object.assign({
      value: n.sdk
    }, n));
  };
}
function A2(e) {
  const t2 = f.useContext(e);
  if (!t2)
    throw new Error("SDK not found. useSdk must be called from within a provider");
  return t2;
}
function F(e, t2, n, r) {
  const i = yt2();
  if (f.useContext(t2))
    throw new Error(`Cannot initialize SDK ${e} because it already exists in Context`);
  const o = f.useMemo(() => n(i), [i]);
  return g(`firebase-sdk:${e}:${i.name}`, O3(o), r);
}
var fi2 = k3(Fe2);
var di2 = k3(Pe2);
var vi2 = k3($e2);
var hi2 = k3(Te2);
var pi2 = k3(De2);
var mi2 = k3(Re2);
var bi2 = k3(Ue2);
var yi2 = k3(je2);
var gi2 = k3(Ve2);
var kt2 = () => A2(Pe2);
var Ci2 = () => A2(De2);
var Pr2 = () => A2(je2);
var Oi2 = (e, t2) => F("analytics", $e2, e, t2);
var Ti2 = (e, t2) => F("storage", je2, e, t2);
var Me2 = class extends Error {
  constructor(t2, n, r) {
    super(n), this.code = t2, this.customData = r, this.name = "ReactFireError", Object.setPrototypeOf(this, Me2.prototype);
  }
};
function At2(e, t2) {
  if (t2 === "idField" || t2 === "initialData" || t2 === "suspense")
    return e ? e[t2] : void 0;
  throw new Error(`Field "${t2}" is not a valid key in ReactFireOptions`);
}
function K3(e) {
  return At2(e, "idField");
}

export {
  Yc2 as Yc,
  ea2 as ea,
  sa2 as sa,
  Ba2 as Ba,
  La2 as La,
  Ka,
  Mh,
  $h,
  gl,
  yl,
  pl,
  xl,
  Ml,
  Lr2 as Lr,
  yt2 as yt,
  nr2 as nr,
  qr2 as qr,
  Br2 as Br,
  ti2 as ti,
  Fe2 as Fe,
  di2 as di,
  vi2 as vi,
  pi2 as pi,
  yi2 as yi,
  kt2 as kt,
  Ci2 as Ci,
  Pr2 as Pr,
  Oi2 as Oi,
  Ti2 as Ti
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=/build/_shared/chunk-QTKR7OWQ.js.map
