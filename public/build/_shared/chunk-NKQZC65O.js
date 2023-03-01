import {
  F,
  k
} from "/build/_shared/chunk-T2CF575W.js";
import {
  h as h2,
  s as s3
} from "/build/_shared/chunk-AJBLUEBX.js";
import {
  require_XMarkIcon
} from "/build/_shared/chunk-XQJIPBYI.js";
import {
  n
} from "/build/_shared/chunk-I5LWYJ5L.js";
import {
  L
} from "/build/_shared/chunk-6ZZPVUWI.js";
import {
  I,
  M,
  O,
  T,
  e as e2,
  h,
  o as o2,
  r
} from "/build/_shared/chunk-UJJUUA64.js";
import {
  require_react_dom
} from "/build/_shared/chunk-CRZAZ7IR.js";
import {
  We,
  f,
  p2 as p,
  s as s4
} from "/build/_shared/chunk-TXT3OLG5.js";
import {
  $,
  C,
  S,
  T as T2,
  a,
  e,
  m,
  o,
  s,
  s2,
  t,
  u,
  y
} from "/build/_shared/chunk-6E6B4MC5.js";
import {
  IconButton_default
} from "/build/_shared/chunk-MEFOEGYP.js";
import {
  Button_default,
  If_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/ui/Modal.tsx
var import_react10 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react = __toESM(require_react(), 1);
function m2(u3, t4) {
  let e4 = (0, import_react.useRef)([]), r4 = o(u3);
  (0, import_react.useEffect)(() => {
    let o4 = [...e4.current];
    for (let [n3, a3] of t4.entries())
      if (e4.current[n3] !== a3) {
        let l3 = r4(t4, o4);
        return e4.current = t4, l3;
      }
  }, [r4, ...t4]);
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react2 = __toESM(require_react(), 1);
function s6(e4, r4, n3) {
  let o4 = s2(r4);
  (0, import_react2.useEffect)(() => {
    function t4(i3) {
      o4.current(i3);
    }
    return window.addEventListener(e4, t4, n3), () => window.removeEventListener(e4, t4, n3);
  }, [e4, n3]);
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var s7 = ((r4) => (r4[r4.Forwards = 0] = "Forwards", r4[r4.Backwards = 1] = "Backwards", r4))(s7 || {});
function n2() {
  let e4 = (0, import_react3.useRef)(0);
  return s6("keydown", (o4) => {
    o4.key === "Tab" && (e4.current = o4.shiftKey ? 1 : 0);
  }, true), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react4 = __toESM(require_react(), 1);
function E(n3, e4, a3, t4) {
  let i3 = s2(a3);
  (0, import_react4.useEffect)(() => {
    n3 = n3 != null ? n3 : window;
    function r4(o4) {
      i3.current(o4);
    }
    return n3.addEventListener(e4, r4, t4), () => n3.removeEventListener(e4, r4, t4);
  }, [n3, e4, t4]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var N = "div";
var v = ((r4) => (r4[r4.None = 1] = "None", r4[r4.InitialFocus = 2] = "InitialFocus", r4[r4.TabLock = 4] = "TabLock", r4[r4.FocusLock = 8] = "FocusLock", r4[r4.RestoreFocus = 16] = "RestoreFocus", r4[r4.All = 30] = "All", r4))(v || {});
var fe = Object.assign(C(function(u3, e4) {
  let l3 = (0, import_react5.useRef)(null), o4 = y(l3, e4), { initialFocus: a3, containers: r4, features: n3 = 30, ...c4 } = u3;
  a() || (n3 = 1);
  let s10 = n(l3);
  V({ ownerDocument: s10 }, Boolean(n3 & 16));
  let j2 = x({ ownerDocument: s10, container: l3, initialFocus: a3 }, Boolean(n3 & 2));
  G({ ownerDocument: s10, container: l3, containers: r4, previousActiveElement: j2 }, Boolean(n3 & 8));
  let k2 = n2(), p2 = o(() => {
    let T4 = l3.current;
    !T4 || u(k2.current, { [s7.Forwards]: () => O(T4, T.First), [s7.Backwards]: () => O(T4, T.Last) });
  }), A2 = { ref: o4 };
  return import_react5.default.createElement(import_react5.default.Fragment, null, Boolean(n3 & 4) && import_react5.default.createElement(h2, { as: "button", type: "button", onFocus: p2, features: s3.Focusable }), $({ ourProps: A2, theirProps: c4, defaultTag: N, name: "FocusTrap" }), Boolean(n3 & 4) && import_react5.default.createElement(h2, { as: "button", type: "button", onFocus: p2, features: s3.Focusable }));
}), { features: v });
function V({ ownerDocument: t4 }, u3) {
  let e4 = (0, import_react5.useRef)(null);
  E(t4 == null ? void 0 : t4.defaultView, "focusout", (o4) => {
    !u3 || e4.current || (e4.current = o4.target);
  }, true), m2(() => {
    u3 || ((t4 == null ? void 0 : t4.activeElement) === (t4 == null ? void 0 : t4.body) && h(e4.current), e4.current = null);
  }, [u3]);
  let l3 = (0, import_react5.useRef)(false);
  (0, import_react5.useEffect)(() => (l3.current = false, () => {
    l3.current = true, t(() => {
      !l3.current || (h(e4.current), e4.current = null);
    });
  }), []);
}
function x({ ownerDocument: t4, container: u3, initialFocus: e4 }, l3) {
  let o4 = (0, import_react5.useRef)(null), a3 = f();
  return m2(() => {
    if (!l3)
      return;
    let r4 = u3.current;
    !r4 || t(() => {
      if (!a3.current)
        return;
      let n3 = t4 == null ? void 0 : t4.activeElement;
      if (e4 != null && e4.current) {
        if ((e4 == null ? void 0 : e4.current) === n3) {
          o4.current = n3;
          return;
        }
      } else if (r4.contains(n3)) {
        o4.current = n3;
        return;
      }
      e4 != null && e4.current ? h(e4.current) : O(r4, T.First) === M.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o4.current = t4 == null ? void 0 : t4.activeElement;
    });
  }, [l3]), o4;
}
function G({ ownerDocument: t4, container: u3, containers: e4, previousActiveElement: l3 }, o4) {
  let a3 = f();
  E(t4 == null ? void 0 : t4.defaultView, "focus", (r4) => {
    if (!o4 || !a3.current)
      return;
    let n3 = new Set(e4 == null ? void 0 : e4.current);
    n3.add(u3);
    let c4 = l3.current;
    if (!c4)
      return;
    let s10 = r4.target;
    s10 && s10 instanceof HTMLElement ? W(n3, s10) ? (l3.current = s10, h(s10)) : (r4.preventDefault(), r4.stopPropagation(), h(c4)) : h(l3.current);
  }, true);
}
function W(t4, u3) {
  var e4;
  for (let l3 of t4)
    if ((e4 = l3.current) != null && e4.contains(u3))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var i2 = /* @__PURE__ */ new Set();
var r2 = /* @__PURE__ */ new Map();
function u2(t4) {
  t4.setAttribute("aria-hidden", "true"), t4.inert = true;
}
function l(t4) {
  let n3 = r2.get(t4);
  !n3 || (n3["aria-hidden"] === null ? t4.removeAttribute("aria-hidden") : t4.setAttribute("aria-hidden", n3["aria-hidden"]), t4.inert = n3.inert);
}
function M2(t4, n3 = true) {
  s(() => {
    if (!n3 || !t4.current)
      return;
    let o4 = t4.current, a3 = e2(o4);
    if (!!a3) {
      i2.add(o4);
      for (let e4 of r2.keys())
        e4.contains(o4) && (l(e4), r2.delete(e4));
      return a3.querySelectorAll("body > *").forEach((e4) => {
        if (e4 instanceof HTMLElement) {
          for (let f3 of i2)
            if (e4.contains(f3))
              return;
          i2.size === 1 && (r2.set(e4, { "aria-hidden": e4.getAttribute("aria-hidden"), inert: e4.inert }), u2(e4));
        }
      }), () => {
        if (i2.delete(o4), i2.size > 0)
          a3.querySelectorAll("body > *").forEach((e4) => {
            if (e4 instanceof HTMLElement && !r2.has(e4)) {
              for (let f3 of i2)
                if (e4.contains(f3))
                  return;
              r2.set(e4, { "aria-hidden": e4.getAttribute("aria-hidden"), inert: e4.inert }), u2(e4);
            }
          });
        else
          for (let e4 of r2.keys())
            l(e4), r2.delete(e4);
      };
    }
  }, [n3]);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react7 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react6 = __toESM(require_react(), 1);
var e3 = (0, import_react6.createContext)(false);
function l2() {
  return (0, import_react6.useContext)(e3);
}
function P(o4) {
  return import_react6.default.createElement(e3.Provider, { value: o4.force }, o4.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function x2(i3) {
  let u3 = l2(), o4 = (0, import_react7.useContext)(A), e4 = n(i3), [r4, f3] = (0, import_react7.useState)(() => {
    if (!u3 && o4 !== null || e)
      return null;
    let n3 = e4 == null ? void 0 : e4.getElementById("headlessui-portal-root");
    if (n3)
      return n3;
    if (e4 === null)
      return null;
    let t4 = e4.createElement("div");
    return t4.setAttribute("id", "headlessui-portal-root"), e4.body.appendChild(t4);
  });
  return (0, import_react7.useEffect)(() => {
    r4 !== null && (e4 != null && e4.body.contains(r4) || e4 == null || e4.body.appendChild(r4));
  }, [r4, e4]), (0, import_react7.useEffect)(() => {
    u3 || o4 !== null && f3(o4.current);
  }, [o4, f3, u3]), r4;
}
var _ = import_react7.Fragment;
var U = C(function(u3, o4) {
  let e4 = u3, r4 = (0, import_react7.useRef)(null), f3 = y(T2((a3) => {
    r4.current = a3;
  }), o4), n3 = n(r4), t4 = x2(r4), [l3] = (0, import_react7.useState)(() => {
    var a3;
    return e ? null : (a3 = n3 == null ? void 0 : n3.createElement("div")) != null ? a3 : null;
  }), b2 = a(), p2 = (0, import_react7.useRef)(false);
  return s(() => {
    if (p2.current = false, !(!t4 || !l3))
      return t4.contains(l3) || (l3.setAttribute("data-headlessui-portal", ""), t4.appendChild(l3)), () => {
        p2.current = true, t(() => {
          var a3;
          !p2.current || !t4 || !l3 || (t4.removeChild(l3), t4.childNodes.length <= 0 && ((a3 = t4.parentElement) == null || a3.removeChild(t4)));
        });
      };
  }, [t4, l3]), b2 ? !t4 || !l3 ? null : (0, import_react_dom.createPortal)($({ ourProps: { ref: f3 }, theirProps: e4, defaultTag: _, name: "Portal" }), l3) : null;
});
var j = import_react7.Fragment;
var A = (0, import_react7.createContext)(null);
var F2 = C(function(u3, o4) {
  let { target: e4, ...r4 } = u3, n3 = { ref: y(o4) };
  return import_react7.default.createElement(A.Provider, { value: e4 }, $({ ourProps: n3, theirProps: r4, defaultTag: j, name: "Popover.Group" }));
});
var $2 = Object.assign(U, { Group: F2 });

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react8 = __toESM(require_react(), 1);
var a2 = (0, import_react8.createContext)(() => {
});
a2.displayName = "StackContext";
var s9 = ((e4) => (e4[e4.Add = 0] = "Add", e4[e4.Remove = 1] = "Remove", e4))(s9 || {});
function x3() {
  return (0, import_react8.useContext)(a2);
}
function M3({ children: i3, onUpdate: r4, type: e4, element: n3, enabled: u3 }) {
  let l3 = x3(), o4 = o((...t4) => {
    r4 == null || r4(...t4), l3(...t4);
  });
  return s(() => {
    let t4 = u3 === void 0 || u3 === true;
    return t4 && o4(0, e4, n3), () => {
      t4 && o4(1, e4, n3);
    };
  }, [o4, e4, n3, u3]), import_react8.default.createElement(a2.Provider, { value: o4 }, i3);
}

// node_modules/@headlessui/react/dist/utils/platform.js
function o3() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Re = ((r4) => (r4[r4.Open = 0] = "Open", r4[r4.Closed = 1] = "Closed", r4))(Re || {});
var be = ((e4) => (e4[e4.SetTitleId = 0] = "SetTitleId", e4))(be || {});
var Ae = { [0](l3, e4) {
  return l3.titleId === e4.id ? l3 : { ...l3, titleId: e4.id };
} };
var M4 = (0, import_react9.createContext)(null);
M4.displayName = "DialogContext";
function L3(l3) {
  let e4 = (0, import_react9.useContext)(M4);
  if (e4 === null) {
    let r4 = new Error(`<${l3} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r4, L3), r4;
  }
  return e4;
}
function Ee(l3, e4) {
  (0, import_react9.useEffect)(() => {
    var p2;
    if (!e4 || !l3)
      return;
    let r4 = m();
    function t4(n3, d5, m6) {
      let i3 = n3.style.getPropertyValue(d5);
      return Object.assign(n3.style, { [d5]: m6 }), r4.add(() => {
        Object.assign(n3.style, { [d5]: i3 });
      });
    }
    let o4 = l3.documentElement, s10 = ((p2 = l3.defaultView) != null ? p2 : window).innerWidth - o4.clientWidth;
    if (t4(o4, "overflow", "hidden"), s10 > 0) {
      let n3 = o4.clientWidth - o4.offsetWidth, d5 = s10 - n3;
      t4(o4, "paddingRight", `${d5}px`);
    }
    if (o3()) {
      let n3 = window.pageYOffset;
      t4(o4, "position", "fixed"), t4(o4, "marginTop", `-${n3}px`), t4(o4, "width", "100%"), r4.add(() => window.scrollTo(0, n3));
    }
    return r4.dispose;
  }, [l3, e4]);
}
function ve(l3, e4) {
  return u(e4.type, Ae, l3, e4);
}
var Oe = "div";
var Ce = S.RenderStrategy | S.Static;
var Se = C(function(e4, r4) {
  let { open: t4, onClose: o4, initialFocus: a3, __demoMode: s10 = false, ...p2 } = e4, [n3, d5] = (0, import_react9.useState)(0), m6 = s4();
  t4 === void 0 && m6 !== null && (t4 = u(m6, { [p.Open]: true, [p.Closed]: false }));
  let i3 = (0, import_react9.useRef)(/* @__PURE__ */ new Set()), T4 = (0, import_react9.useRef)(null), K = y(T4, r4), W2 = (0, import_react9.useRef)(null), P2 = n(T4), B = e4.hasOwnProperty("open") || m6 !== null, G3 = e4.hasOwnProperty("onClose");
  if (!B && !G3)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!B)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!G3)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof t4 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${t4}`);
  if (typeof o4 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o4}`);
  let u3 = t4 ? 0 : 1, [y3, q] = (0, import_react9.useReducer)(ve, { titleId: null, descriptionId: null, panelRef: (0, import_react9.createRef)() }), h5 = o(() => o4(false)), U2 = o((f3) => q({ type: 0, id: f3 })), _2 = a() ? s10 ? false : u3 === 0 : false, w = n3 > 1, z = (0, import_react9.useContext)(M4) !== null, J = w ? "parent" : "leaf";
  M2(T4, w ? _2 : false), L(() => {
    var R, g;
    return [...Array.from((R = P2 == null ? void 0 : P2.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? R : []).filter((D) => !(!(D instanceof HTMLElement) || D.contains(W2.current) || y3.panelRef.current && D.contains(y3.panelRef.current))), (g = y3.panelRef.current) != null ? g : T4.current];
  }, h5, _2 && !w), E(P2 == null ? void 0 : P2.defaultView, "keydown", (f3) => {
    f3.defaultPrevented || f3.key === o2.Escape && u3 === 0 && (w || (f3.preventDefault(), f3.stopPropagation(), h5()));
  }), Ee(P2, u3 === 0 && !z), (0, import_react9.useEffect)(() => {
    if (u3 !== 0 || !T4.current)
      return;
    let f3 = new IntersectionObserver((R) => {
      for (let g of R)
        g.boundingClientRect.x === 0 && g.boundingClientRect.y === 0 && g.boundingClientRect.width === 0 && g.boundingClientRect.height === 0 && h5();
    });
    return f3.observe(T4.current), () => f3.disconnect();
  }, [u3, T4, h5]);
  let [Q, X] = k(), Z = `headlessui-dialog-${I()}`, ee = (0, import_react9.useMemo)(() => [{ dialogState: u3, close: h5, setTitleId: U2 }, y3], [u3, y3, h5, U2]), $3 = (0, import_react9.useMemo)(() => ({ open: u3 === 0 }), [u3]), te = { ref: K, id: Z, role: "dialog", "aria-modal": u3 === 0 ? true : void 0, "aria-labelledby": y3.titleId, "aria-describedby": Q };
  return import_react9.default.createElement(M3, { type: "Dialog", enabled: u3 === 0, element: T4, onUpdate: o((f3, R, g) => {
    R === "Dialog" && u(f3, { [s9.Add]() {
      i3.current.add(g), d5((D) => D + 1);
    }, [s9.Remove]() {
      i3.current.add(g), d5((D) => D - 1);
    } });
  }) }, import_react9.default.createElement(P, { force: true }, import_react9.default.createElement($2, null, import_react9.default.createElement(M4.Provider, { value: ee }, import_react9.default.createElement($2.Group, { target: T4 }, import_react9.default.createElement(P, { force: false }, import_react9.default.createElement(X, { slot: $3, name: "Dialog.Description" }, import_react9.default.createElement(fe, { initialFocus: a3, containers: i3, features: _2 ? u(J, { parent: fe.features.RestoreFocus, leaf: fe.features.All & ~fe.features.FocusLock }) : fe.features.None }, $({ ourProps: te, theirProps: p2, slot: $3, defaultTag: Oe, features: Ce, visible: u3 === 0, name: "Dialog" })))))))), import_react9.default.createElement(h2, { features: s3.Hidden, ref: W2 }));
});
var Le = "div";
var we = C(function(e4, r4) {
  let [{ dialogState: t4, close: o4 }] = L3("Dialog.Overlay"), a3 = y(r4), s10 = `headlessui-dialog-overlay-${I()}`, p2 = o((i3) => {
    if (i3.target === i3.currentTarget) {
      if (r(i3.currentTarget))
        return i3.preventDefault();
      i3.preventDefault(), i3.stopPropagation(), o4();
    }
  }), n3 = (0, import_react9.useMemo)(() => ({ open: t4 === 0 }), [t4]);
  return $({ ourProps: { ref: a3, id: s10, "aria-hidden": true, onClick: p2 }, theirProps: e4, slot: n3, defaultTag: Le, name: "Dialog.Overlay" });
});
var Fe = "div";
var ke = C(function(e4, r4) {
  let [{ dialogState: t4 }, o4] = L3("Dialog.Backdrop"), a3 = y(r4), s10 = `headlessui-dialog-backdrop-${I()}`;
  (0, import_react9.useEffect)(() => {
    if (o4.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [o4.panelRef]);
  let p2 = (0, import_react9.useMemo)(() => ({ open: t4 === 0 }), [t4]);
  return import_react9.default.createElement(P, { force: true }, import_react9.default.createElement($2, null, $({ ourProps: { ref: a3, id: s10, "aria-hidden": true }, theirProps: e4, slot: p2, defaultTag: Fe, name: "Dialog.Backdrop" })));
});
var Me = "div";
var _e = C(function(e4, r4) {
  let [{ dialogState: t4 }, o4] = L3("Dialog.Panel"), a3 = y(r4, o4.panelRef), s10 = `headlessui-dialog-panel-${I()}`, p2 = (0, import_react9.useMemo)(() => ({ open: t4 === 0 }), [t4]), n3 = o((i3) => {
    i3.stopPropagation();
  });
  return $({ ourProps: { ref: a3, id: s10, onClick: n3 }, theirProps: e4, slot: p2, defaultTag: Me, name: "Dialog.Panel" });
});
var xe = "h2";
var Ie = C(function(e4, r4) {
  let [{ dialogState: t4, setTitleId: o4 }] = L3("Dialog.Title"), a3 = `headlessui-dialog-title-${I()}`, s10 = y(r4);
  (0, import_react9.useEffect)(() => (o4(a3), () => o4(null)), [a3, o4]);
  let p2 = (0, import_react9.useMemo)(() => ({ open: t4 === 0 }), [t4]);
  return $({ ourProps: { ref: s10, id: a3 }, theirProps: e4, slot: p2, defaultTag: xe, name: "Dialog.Title" });
});
var gt = Object.assign(Se, { Backdrop: ke, Panel: _e, Overlay: we, Title: Ie, Description: F });

// app/core/ui/Modal.tsx
var import_XMarkIcon = __toESM(require_XMarkIcon());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Modal = ({ isOpen, setIsOpen, closeButton, heading, children }) => {
  const useCloseButton = closeButton ?? true;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(We, {
    appear: true,
    show: isOpen,
    as: import_react10.Fragment,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(gt, {
      open: isOpen,
      as: "div",
      className: "fixed inset-0 z-10 h-screen bg-gray-500 bg-opacity-30 transition-all",
      onClose: () => {
        if (useCloseButton) {
          setIsOpen(false);
        }
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-full min-h-screen px-4 text-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(We.Child, {
            as: import_react10.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(gt.Overlay, {
              className: "fixed inset-0"
            }, void 0, false, {
              fileName: "app/core/ui/Modal.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/core/ui/Modal.tsx",
            lineNumber: 35,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "inline-block h-screen align-middle",
            "aria-hidden": "true",
            children: "\u200B"
          }, void 0, false, {
            fileName: "app/core/ui/Modal.tsx",
            lineNumber: 47,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(We.Child, {
            as: import_react10.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-70",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-80",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "my-4 inline-block max-h-[90%] w-full max-w-xl transform overflow-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-black-400",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex items-center",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(gt.Title, {
                      as: "h2",
                      className: "flex w-full text-2xl font-bold leading-4 text-current",
                      children: heading
                    }, void 0, false, {
                      fileName: "app/core/ui/Modal.tsx",
                      lineNumber: 65,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                      condition: useCloseButton,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "justify-end",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                          label: "Close Modal",
                          onClick: () => setIsOpen(false),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_XMarkIcon.default, {
                            className: "h-6"
                          }, void 0, false, {
                            fileName: "app/core/ui/Modal.tsx",
                            lineNumber: 78,
                            columnNumber: 23
                          }, this)
                        }, void 0, false, {
                          fileName: "app/core/ui/Modal.tsx",
                          lineNumber: 74,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/core/ui/Modal.tsx",
                        lineNumber: 73,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/core/ui/Modal.tsx",
                      lineNumber: 72,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/core/ui/Modal.tsx",
                  lineNumber: 64,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "relative mt-4",
                  children
                }, void 0, false, {
                  fileName: "app/core/ui/Modal.tsx",
                  lineNumber: 84,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                  condition: useCloseButton,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "mt-2",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      "data-cy": "close-modal-button",
                      block: true,
                      color: "secondary",
                      onClick: () => setIsOpen(false),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                        i18nKey: "common:cancel"
                      }, void 0, false, {
                        fileName: "app/core/ui/Modal.tsx",
                        lineNumber: 94,
                        columnNumber: 21
                      }, this)
                    }, void 0, false, {
                      fileName: "app/core/ui/Modal.tsx",
                      lineNumber: 88,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: "app/core/ui/Modal.tsx",
                    lineNumber: 87,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/core/ui/Modal.tsx",
                  lineNumber: 86,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/core/ui/Modal.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/core/ui/Modal.tsx",
            lineNumber: 54,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/core/ui/Modal.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/core/ui/Modal.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/core/ui/Modal.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
};
var Modal_default = Modal;

export {
  s7 as s,
  n2 as n,
  E,
  Modal_default
};
//# sourceMappingURL=/build/_shared/chunk-NKQZC65O.js.map
