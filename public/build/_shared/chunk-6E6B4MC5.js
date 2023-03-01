import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/ssr.js
var e = typeof window == "undefined" || typeof document == "undefined";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var s = e ? import_react.useEffect : import_react.useLayoutEffect;

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e3) {
  let r2 = (0, import_react2.useRef)(e3);
  return s(() => {
    r2.current = e3;
  }, [e3]), r2;
}

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t2(e3) {
  typeof queueMicrotask == "function" ? queueMicrotask(e3) : Promise.resolve().then(e3).catch((o3) => setTimeout(() => {
    throw o3;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function m() {
  let n = [], i2 = [], r2 = { enqueue(e3) {
    i2.push(e3);
  }, addEventListener(e3, t4, a3, o3) {
    return e3.addEventListener(t4, a3, o3), r2.add(() => e3.removeEventListener(t4, a3, o3));
  }, requestAnimationFrame(...e3) {
    let t4 = requestAnimationFrame(...e3);
    return r2.add(() => cancelAnimationFrame(t4));
  }, nextFrame(...e3) {
    return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e3));
  }, setTimeout(...e3) {
    let t4 = setTimeout(...e3);
    return r2.add(() => clearTimeout(t4));
  }, microTask(...e3) {
    let t4 = { current: true };
    return t2(() => {
      t4.current && e3[0]();
    }), r2.add(() => {
      t4.current = false;
    });
  }, add(e3) {
    return n.push(e3), () => {
      let t4 = n.indexOf(e3);
      if (t4 >= 0) {
        let [a3] = n.splice(t4, 1);
        a3();
      }
    };
  }, dispose() {
    for (let e3 of n.splice(0))
      e3();
  }, async workQueue() {
    for (let e3 of i2.splice(0))
      await e3();
  } };
  return r2;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react3 = __toESM(require_react(), 1);
var o = function(t4) {
  let e3 = s2(t4);
  return import_react3.default.useCallback((...r2) => e3.current(...r2), [e3]);
};

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react4 = __toESM(require_react(), 1);
var r = { serverHandoffComplete: false };
function a2() {
  let [e3, f2] = (0, import_react4.useState)(r.serverHandoffComplete);
  return (0, import_react4.useEffect)(() => {
    e3 !== true && f2(true);
  }, [e3]), (0, import_react4.useEffect)(() => {
    r.serverHandoffComplete === false && (r.serverHandoffComplete = true);
  }, []), e3;
}

// node_modules/@headlessui/react/dist/utils/match.js
function u(r2, n, ...a3) {
  if (r2 in n) {
    let e3 = n[r2];
    return typeof e3 == "function" ? e3(...a3) : e3;
  }
  let t4 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e3) => `"${e3}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t4, u), t4;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react5 = __toESM(require_react(), 1);
var u2 = Symbol();
function T(t4, n = true) {
  return Object.assign(t4, { [u2]: n });
}
function y(...t4) {
  let n = (0, import_react5.useRef)(t4);
  (0, import_react5.useEffect)(() => {
    n.current = t4;
  }, [t4]);
  let c2 = o((e3) => {
    for (let o3 of n.current)
      o3 != null && (typeof o3 == "function" ? o3(e3) : o3.current = e3);
  });
  return t4.every((e3) => e3 == null || (e3 == null ? void 0 : e3[u2])) ? void 0 : c2;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react6 = __toESM(require_react(), 1);
var S = ((a3) => (a3[a3.None = 0] = "None", a3[a3.RenderStrategy = 1] = "RenderStrategy", a3[a3.Static = 2] = "Static", a3))(S || {});
var j = ((e3) => (e3[e3.Unmount = 0] = "Unmount", e3[e3.Hidden = 1] = "Hidden", e3))(j || {});
function $({ ourProps: r2, theirProps: t4, slot: e3, defaultTag: a3, features: o3, visible: n = true, name: l2 }) {
  let s3 = T2(t4, r2);
  if (n)
    return p(s3, e3, a3, l2);
  let u3 = o3 != null ? o3 : 0;
  if (u3 & 2) {
    let { static: i2 = false, ...d } = s3;
    if (i2)
      return p(d, e3, a3, l2);
  }
  if (u3 & 1) {
    let { unmount: i2 = true, ...d } = s3;
    return u(i2 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return p({ ...d, hidden: true, style: { display: "none" } }, e3, a3, l2);
    } });
  }
  return p(s3, e3, a3, l2);
}
function p(r2, t4 = {}, e3, a3) {
  let { as: o3 = e3, children: n, refName: l2 = "ref", ...s3 } = m2(r2, ["unmount", "static"]), u3 = r2.ref !== void 0 ? { [l2]: r2.ref } : {}, i2 = typeof n == "function" ? n(t4) : n;
  s3.className && typeof s3.className == "function" && (s3.className = s3.className(t4));
  let d = {};
  if (t4) {
    let f2 = false, y2 = [];
    for (let [h, g] of Object.entries(t4))
      typeof g == "boolean" && (f2 = true), g === true && y2.push(h);
    f2 && (d["data-headlessui-state"] = y2.join(" "));
  }
  if (o3 === import_react6.Fragment && Object.keys(F(s3)).length > 0) {
    if (!(0, import_react6.isValidElement)(i2) || Array.isArray(i2) && i2.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a3} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s3).map((f2) => `  - ${f2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f2) => `  - ${f2}`).join(`
`)].join(`
`));
    return (0, import_react6.cloneElement)(i2, Object.assign({}, T2(i2.props, F(m2(s3, ["ref"]))), d, u3, w(i2.ref, u3.ref)));
  }
  return (0, import_react6.createElement)(o3, Object.assign({}, m2(s3, ["ref"]), o3 !== import_react6.Fragment && u3, o3 !== import_react6.Fragment && d), i2);
}
function w(...r2) {
  return { ref: r2.every((t4) => t4 == null) ? void 0 : (t4) => {
    for (let e3 of r2)
      e3 != null && (typeof e3 == "function" ? e3(t4) : e3.current = t4);
  } };
}
function T2(...r2) {
  var a3;
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t4 = {}, e3 = {};
  for (let o3 of r2)
    for (let n in o3)
      n.startsWith("on") && typeof o3[n] == "function" ? ((a3 = e3[n]) != null || (e3[n] = []), e3[n].push(o3[n])) : t4[n] = o3[n];
  if (t4.disabled || t4["aria-disabled"])
    return Object.assign(t4, Object.fromEntries(Object.keys(e3).map((o3) => [o3, void 0])));
  for (let o3 in e3)
    Object.assign(t4, { [o3](n, ...l2) {
      let s3 = e3[o3];
      for (let u3 of s3) {
        if ((n instanceof Event || (n == null ? void 0 : n.nativeEvent) instanceof Event) && n.defaultPrevented)
          return;
        u3(n, ...l2);
      }
    } });
  return t4;
}
function C(r2) {
  var t4;
  return Object.assign((0, import_react6.forwardRef)(r2), { displayName: (t4 = r2.displayName) != null ? t4 : r2.name });
}
function F(r2) {
  let t4 = Object.assign({}, r2);
  for (let e3 in t4)
    t4[e3] === void 0 && delete t4[e3];
  return t4;
}
function m2(r2, t4 = []) {
  let e3 = Object.assign({}, r2);
  for (let a3 of t4)
    a3 in e3 && delete e3[a3];
  return e3;
}

export {
  e,
  s,
  s2,
  t2 as t,
  m,
  o,
  a2 as a,
  u,
  T,
  y,
  S,
  j,
  $,
  C,
  F
};
//# sourceMappingURL=/build/_shared/chunk-6E6B4MC5.js.map
