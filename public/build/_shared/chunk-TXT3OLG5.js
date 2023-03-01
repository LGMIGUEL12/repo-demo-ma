import {
  $,
  C,
  S,
  a,
  j,
  m,
  o,
  s,
  s2,
  u,
  y
} from "/build/_shared/chunk-6E6B4MC5.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react = __toESM(require_react(), 1);
var o2 = (0, import_react.createContext)(null);
o2.displayName = "OpenClosedContext";
var p = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(p || {});
function s3() {
  return (0, import_react.useContext)(o2);
}
function C2({ value: t, children: n }) {
  return import_react.default.createElement(o2.Provider, { value: t }, n);
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react2 = __toESM(require_react(), 1);
function f() {
  let e = (0, import_react2.useRef)(false);
  return s(() => (e.current = true, () => {
    e.current = false;
  }), []), e;
}

// node_modules/@headlessui/react/dist/utils/once.js
function l2(r3) {
  let e = { called: false };
  return (...t) => {
    if (!e.called)
      return e.called = true, r3(...t);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function f2(t, ...e) {
  t && e.length > 0 && t.classList.add(...e);
}
function v(t, ...e) {
  t && e.length > 0 && t.classList.remove(...e);
}
var T = ((n) => (n.Ended = "ended", n.Cancelled = "cancelled", n))(T || {});
function c(t, e) {
  let n = m();
  if (!t)
    return n.dispose;
  let { transitionDuration: d2, transitionDelay: o4 } = getComputedStyle(t), [s5, u2] = [d2, o4].map((i) => {
    let [a2 = 0] = i.split(",").filter(Boolean).map((r3) => r3.includes("ms") ? parseFloat(r3) : parseFloat(r3) * 1e3).sort((r3, l3) => l3 - r3);
    return a2;
  });
  if (s5 + u2 !== 0) {
    let i = [];
    i.push(n.addEventListener(t, "transitionrun", (a2) => {
      a2.target === a2.currentTarget && (i.splice(0).forEach((r3) => r3()), i.push(n.addEventListener(t, "transitionend", (r3) => {
        r3.target === r3.currentTarget && (e("ended"), i.splice(0).forEach((l3) => l3()));
      }), n.addEventListener(t, "transitioncancel", (r3) => {
        r3.target === r3.currentTarget && (e("cancelled"), i.splice(0).forEach((l3) => l3()));
      })));
    }));
  } else
    e("ended");
  return n.add(() => e("cancelled")), n.dispose;
}
function C3(t, e, n, d2) {
  let o4 = n ? "enter" : "leave", s5 = m(), u2 = d2 !== void 0 ? l2(d2) : () => {
  };
  o4 === "enter" && (t.removeAttribute("hidden"), t.style.display = "");
  let m2 = u(o4, { enter: () => e.enter, leave: () => e.leave }), i = u(o4, { enter: () => e.enterTo, leave: () => e.leaveTo }), a2 = u(o4, { enter: () => e.enterFrom, leave: () => e.leaveFrom });
  return v(t, ...e.enter, ...e.enterTo, ...e.enterFrom, ...e.leave, ...e.leaveFrom, ...e.leaveTo, ...e.entered), f2(t, ...m2, ...a2), s5.nextFrame(() => {
    v(t, ...a2), f2(t, ...i), c(t, (r3) => (r3 === "ended" && (v(t, ...m2), f2(t, ...e.entered)), u2(r3)));
  }), s5.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react3 = __toESM(require_react(), 1);
function p2() {
  let [e] = (0, import_react3.useState)(m);
  return (0, import_react3.useEffect)(() => () => e.dispose(), [e]), e;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function I({ container: o4, direction: t, classes: s5, onStart: a2, onStop: u2 }) {
  let c3 = f(), d2 = p2(), r3 = s2(t);
  s(() => {
    let e = m();
    d2.add(e.dispose);
    let n = o4.current;
    if (!!n && r3.current !== "idle" && !!c3.current)
      return e.dispose(), a2.current(r3.current), e.add(C3(n, s5.current, r3.current === "enter", (l3) => {
        e.dispose(), u(l3, { [T.Ended]() {
          u2.current(r3.current);
        }, [T.Cancelled]: () => {
        } });
      })), e.dispose;
  }, [t]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function x(r3 = "") {
  return r3.split(" ").filter((e) => e.trim().length > 1);
}
var F = (0, import_react4.createContext)(null);
F.displayName = "TransitionContext";
var ve = ((s5) => (s5.Visible = "visible", s5.Hidden = "hidden", s5))(ve || {});
function Ce() {
  let r3 = (0, import_react4.useContext)(F);
  if (r3 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return r3;
}
function ge() {
  let r3 = (0, import_react4.useContext)(M);
  if (r3 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return r3;
}
var M = (0, import_react4.createContext)(null);
M.displayName = "NestingContext";
function I2(r3) {
  return "children" in r3 ? I2(r3.children) : r3.current.filter(({ el: e }) => e.current !== null).filter(({ state: e }) => e === "visible").length > 0;
}
function ee(r3, e) {
  let s5 = s2(r3), n = (0, import_react4.useRef)([]), m2 = f(), D = p2(), b = o((l3, i = j.Hidden) => {
    let t = n.current.findIndex(({ el: o4 }) => o4 === l3);
    t !== -1 && (u(i, { [j.Unmount]() {
      n.current.splice(t, 1);
    }, [j.Hidden]() {
      n.current[t].state = "hidden";
    } }), D.microTask(() => {
      var o4;
      !I2(n) && m2.current && ((o4 = s5.current) == null || o4.call(s5));
    }));
  }), E = o((l3) => {
    let i = n.current.find(({ el: t }) => t === l3);
    return i ? i.state !== "visible" && (i.state = "visible") : n.current.push({ el: l3, state: "visible" }), () => b(l3, j.Unmount);
  }), S2 = (0, import_react4.useRef)([]), u2 = (0, import_react4.useRef)(Promise.resolve()), p3 = (0, import_react4.useRef)({ enter: [], leave: [], idle: [] }), d2 = o((l3, i, t) => {
    S2.current.splice(0), e && (e.chains.current[i] = e.chains.current[i].filter(([o4]) => o4 !== l3)), e == null || e.chains.current[i].push([l3, new Promise((o4) => {
      S2.current.push(o4);
    })]), e == null || e.chains.current[i].push([l3, new Promise((o4) => {
      Promise.all(p3.current[i].map(([f3, a2]) => a2)).then(() => o4());
    })]), i === "enter" ? u2.current = u2.current.then(() => e == null ? void 0 : e.wait.current).then(() => t(i)) : t(i);
  }), h = o((l3, i, t) => {
    Promise.all(p3.current[i].splice(0).map(([o4, f3]) => f3)).then(() => {
      var o4;
      (o4 = S2.current.shift()) == null || o4();
    }).then(() => t(i));
  });
  return (0, import_react4.useMemo)(() => ({ children: n, register: E, unregister: b, onStart: d2, onStop: h, wait: u2, chains: p3 }), [E, b, n, d2, h, p3, u2]);
}
function be() {
}
var Ee = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function te(r3) {
  var s5;
  let e = {};
  for (let n of Ee)
    e[n] = (s5 = r3[n]) != null ? s5 : be;
  return e;
}
function Se(r3) {
  let e = (0, import_react4.useRef)(te(r3));
  return (0, import_react4.useEffect)(() => {
    e.current = te(r3);
  }, [r3]), e;
}
var xe = "div";
var ne = S.RenderStrategy;
var re = C(function(e, s5) {
  let { beforeEnter: n, afterEnter: m2, beforeLeave: D, afterLeave: b, enter: E, enterFrom: S2, enterTo: u2, entered: p3, leave: d2, leaveFrom: h, leaveTo: l3, ...i } = e, t = (0, import_react4.useRef)(null), o4 = y(t, s5), f3 = i.unmount ? j.Unmount : j.Hidden, { show: a2, appear: P, initial: ie } = Ce(), [v2, _] = (0, import_react4.useState)(a2 ? "visible" : "hidden"), z = ge(), { register: N, unregister: V } = z, j2 = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => N(t), [N, t]), (0, import_react4.useEffect)(() => {
    if (f3 === j.Hidden && !!t.current) {
      if (a2 && v2 !== "visible") {
        _("visible");
        return;
      }
      return u(v2, { ["hidden"]: () => V(t), ["visible"]: () => N(t) });
    }
  }, [v2, t, N, V, a2, f3]);
  let oe = s2({ enter: x(E), enterFrom: x(S2), enterTo: x(u2), entered: x(p3), leave: x(d2), leaveFrom: x(h), leaveTo: x(l3) }), L = Se({ beforeEnter: n, afterEnter: m2, beforeLeave: D, afterLeave: b }), U = a();
  (0, import_react4.useEffect)(() => {
    if (U && v2 === "visible" && t.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [t, v2, U]);
  let k = ie && !P, se = (() => !U || k || j2.current === a2 ? "idle" : a2 ? "enter" : "leave")(), le = o((C4) => u(C4, { enter: () => L.current.beforeEnter(), leave: () => L.current.beforeLeave(), idle: () => {
  } })), ae = o((C4) => u(C4, { enter: () => L.current.afterEnter(), leave: () => L.current.afterLeave(), idle: () => {
  } })), w = ee(() => {
    _("hidden"), V(t);
  }, z);
  I({ container: t, classes: oe, direction: se, onStart: s2((C4) => {
    w.onStart(t, C4, le);
  }), onStop: s2((C4) => {
    w.onStop(t, C4, ae), C4 === "leave" && !I2(w) && (_("hidden"), V(t));
  }) }), (0, import_react4.useEffect)(() => {
    !k || (f3 === j.Hidden ? j2.current = null : j2.current = a2);
  }, [a2, k, v2]);
  let ue = i, de = { ref: o4 };
  return import_react4.default.createElement(M.Provider, { value: w }, import_react4.default.createElement(C2, { value: u(v2, { ["visible"]: p.Open, ["hidden"]: p.Closed }) }, $({ ourProps: de, theirProps: ue, defaultTag: xe, features: ne, visible: v2 === "visible", name: "Transition.Child" })));
});
var q = C(function(e, s5) {
  let { show: n, appear: m2 = false, unmount: D, ...b } = e, E = (0, import_react4.useRef)(null), S2 = y(E, s5);
  a();
  let u2 = s3();
  if (n === void 0 && u2 !== null && (n = u(u2, { [p.Open]: true, [p.Closed]: false })), ![true, false].includes(n))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [p3, d2] = (0, import_react4.useState)(n ? "visible" : "hidden"), h = ee(() => {
    d2("hidden");
  }), [l3, i] = (0, import_react4.useState)(true), t = (0, import_react4.useRef)([n]);
  s(() => {
    l3 !== false && t.current[t.current.length - 1] !== n && (t.current.push(n), i(false));
  }, [t, n]);
  let o4 = (0, import_react4.useMemo)(() => ({ show: n, appear: m2, initial: l3 }), [n, m2, l3]);
  (0, import_react4.useEffect)(() => {
    if (n)
      d2("visible");
    else if (!I2(h))
      d2("hidden");
    else {
      let a2 = E.current;
      if (!a2)
        return;
      let P = a2.getBoundingClientRect();
      P.x === 0 && P.y === 0 && P.width === 0 && P.height === 0 && d2("hidden");
    }
  }, [n, h]);
  let f3 = { unmount: D };
  return import_react4.default.createElement(M.Provider, { value: h }, import_react4.default.createElement(F.Provider, { value: o4 }, $({ ourProps: { ...f3, as: import_react4.Fragment, children: import_react4.default.createElement(re, { ref: S2, ...f3, ...b }) }, theirProps: {}, defaultTag: import_react4.Fragment, features: ne, visible: p3 === "visible", name: "Transition" })));
});
var Pe = C(function(e, s5) {
  let n = (0, import_react4.useContext)(F) !== null, m2 = s3() !== null;
  return import_react4.default.createElement(import_react4.default.Fragment, null, !n && m2 ? import_react4.default.createElement(q, { ref: s5, ...e }) : import_react4.default.createElement(re, { ref: s5, ...e }));
});
var We = Object.assign(q, { Child: Pe, Root: q });

export {
  p2 as p,
  p as p2,
  s3 as s,
  C2 as C,
  f,
  We
};
//# sourceMappingURL=/build/_shared/chunk-TXT3OLG5.js.map
