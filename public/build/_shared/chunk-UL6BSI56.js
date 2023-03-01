import {
  membership_role_default
} from "/build/_shared/chunk-W4DXIIZX.js";
import {
  ORGANIZATIONS_COLLECTION,
  USERS_COLLECTION
} from "/build/_shared/chunk-BHF276FC.js";
import {
  E,
  Modal_default,
  n,
  s as s4
} from "/build/_shared/chunk-NKQZC65O.js";
import {
  h,
  s as s2
} from "/build/_shared/chunk-AJBLUEBX.js";
import {
  useRequestState
} from "/build/_shared/chunk-NMWHWOJM.js";
import {
  navigation_config_default
} from "/build/_shared/chunk-EHUQ3EN7.js";
import {
  organization_default
} from "/build/_shared/chunk-CCK66CUU.js";
import {
  _t
} from "/build/_shared/chunk-OQCGFTRH.js";
import {
  TextField_default
} from "/build/_shared/chunk-T4OLHNMO.js";
import {
  ProfileDropdown_default,
  require_Bars3Icon
} from "/build/_shared/chunk-I7U6GVVU.js";
import {
  Dropdown_default,
  qe
} from "/build/_shared/chunk-3RHYN7AX.js";
import {
  s
} from "/build/_shared/chunk-5CBDJCHW.js";
import {
  ClientOnly_default
} from "/build/_shared/chunk-FT7OPBPM.js";
import {
  n as n2
} from "/build/_shared/chunk-I5LWYJ5L.js";
import {
  L
} from "/build/_shared/chunk-6ZZPVUWI.js";
import {
  F,
  I,
  N,
  O,
  T,
  d,
  e,
  o as o2,
  r
} from "/build/_shared/chunk-UJJUUA64.js";
import {
  setCookie
} from "/build/_shared/chunk-R32XIEQ6.js";
import {
  C as C2,
  We,
  p2 as p,
  s as s3
} from "/build/_shared/chunk-TXT3OLG5.js";
import {
  $,
  C,
  S,
  T as T2,
  o,
  u,
  y
} from "/build/_shared/chunk-6E6B4MC5.js";
import {
  useUserSession
} from "/build/_shared/chunk-KHW4CDLX.js";
import {
  PlusCircleIcon_default
} from "/build/_shared/chunk-7KHFEMFW.js";
import {
  $h,
  Ci,
  La,
  Mh,
  Ml,
  ea,
  kt,
  nr,
  sa,
  ti
} from "/build/_shared/chunk-CXJ2SC35.js";
import {
  Heading_default
} from "/build/_shared/chunk-54TVJDMF.js";
import {
  Button_default,
  If_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import {
  Trans,
  init_es,
  useTranslation
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@heroicons/react/20/solid/ChevronRightIcon.js
var require_ChevronRightIcon = __commonJS({
  "node_modules/@heroicons/react/20/solid/ChevronRightIcon.js"(exports, module) {
    var React2 = require_react();
    function ChevronRightIcon2({
      title,
      titleId,
      ...props
    }, svgRef) {
      return /* @__PURE__ */ React2.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
      }, props), title ? /* @__PURE__ */ React2.createElement("title", {
        id: titleId
      }, title) : null, /* @__PURE__ */ React2.createElement("path", {
        fillRule: "evenodd",
        d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
        clipRule: "evenodd"
      }));
    }
    var ForwardRef = React2.forwardRef(ChevronRightIcon2);
    module.exports = ForwardRef;
  }
});

// node_modules/@heroicons/react/20/solid/ChevronDownIcon.js
var require_ChevronDownIcon = __commonJS({
  "node_modules/@heroicons/react/20/solid/ChevronDownIcon.js"(exports, module) {
    var React2 = require_react();
    function ChevronDownIcon2({
      title,
      titleId,
      ...props
    }, svgRef) {
      return /* @__PURE__ */ React2.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
      }, props), title ? /* @__PURE__ */ React2.createElement("title", {
        id: titleId
      }, title) : null, /* @__PURE__ */ React2.createElement("path", {
        fillRule: "evenodd",
        d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
        clipRule: "evenodd"
      }));
    }
    var ForwardRef = React2.forwardRef(ChevronDownIcon2);
    module.exports = ForwardRef;
  }
});

// app/components/AppContainer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AppContainer(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-full p-3",
    children: props.children
  }, void 0, false, {
    fileName: "app/components/AppContainer.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}
var AppContainer_default = AppContainer;

// app/components/AppHeader.tsx
var import_ChevronRightIcon = __toESM(require_ChevronRightIcon());

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react = __toESM(require_react(), 1);
var Ae = ((f) => (f[f.Open = 0] = "Open", f[f.Closed = 1] = "Closed", f))(Ae || {});
var Ce = ((n3) => (n3[n3.TogglePopover = 0] = "TogglePopover", n3[n3.ClosePopover = 1] = "ClosePopover", n3[n3.SetButton = 2] = "SetButton", n3[n3.SetButtonId = 3] = "SetButtonId", n3[n3.SetPanel = 4] = "SetPanel", n3[n3.SetPanelId = 5] = "SetPanelId", n3))(Ce || {});
var Re = { [0]: (r2) => ({ ...r2, popoverState: u(r2.popoverState, { [0]: 1, [1]: 0 }) }), [1](r2) {
  return r2.popoverState === 1 ? r2 : { ...r2, popoverState: 1 };
}, [2](r2, t) {
  return r2.button === t.button ? r2 : { ...r2, button: t.button };
}, [3](r2, t) {
  return r2.buttonId === t.buttonId ? r2 : { ...r2, buttonId: t.buttonId };
}, [4](r2, t) {
  return r2.panel === t.panel ? r2 : { ...r2, panel: t.panel };
}, [5](r2, t) {
  return r2.panelId === t.panelId ? r2 : { ...r2, panelId: t.panelId };
} };
var te = (0, import_react.createContext)(null);
te.displayName = "PopoverContext";
function Q(r2) {
  let t = (0, import_react.useContext)(te);
  if (t === null) {
    let f = new Error(`<${r2} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(f, Q), f;
  }
  return t;
}
var oe = (0, import_react.createContext)(null);
oe.displayName = "PopoverAPIContext";
function re(r2) {
  let t = (0, import_react.useContext)(oe);
  if (t === null) {
    let f = new Error(`<${r2} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(f, re), f;
  }
  return t;
}
var ne = (0, import_react.createContext)(null);
ne.displayName = "PopoverGroupContext";
function ce() {
  return (0, import_react.useContext)(ne);
}
var le = (0, import_react.createContext)(null);
le.displayName = "PopoverPanelContext";
function Oe() {
  return (0, import_react.useContext)(le);
}
function Me(r2, t) {
  return u(t.type, Re, r2, t);
}
var Le = "div";
var Ie = C(function(t, f) {
  var O2;
  let o3 = `headlessui-popover-button-${I()}`, v = `headlessui-popover-panel-${I()}`, a = (0, import_react.useRef)(null), n3 = y(f, T2((e2) => {
    a.current = e2;
  })), g = (0, import_react.useReducer)(Me, { popoverState: 1, button: null, buttonId: o3, panel: null, panelId: v, beforePanelSentinel: (0, import_react.createRef)(), afterPanelSentinel: (0, import_react.createRef)() }), [{ popoverState: y2, button: l, panel: P, beforePanelSentinel: s5, afterPanelSentinel: B }, i] = g, T3 = n2((O2 = a.current) != null ? O2 : l);
  (0, import_react.useEffect)(() => i({ type: 3, buttonId: o3 }), [o3, i]), (0, import_react.useEffect)(() => i({ type: 5, panelId: v }), [v, i]);
  let c = (0, import_react.useMemo)(() => {
    if (!l || !P)
      return false;
    for (let M of document.querySelectorAll("body > *"))
      if (Number(M == null ? void 0 : M.contains(l)) ^ Number(M == null ? void 0 : M.contains(P)))
        return true;
    let e2 = d(), p2 = e2.indexOf(l), m = (p2 + e2.length - 1) % e2.length, C3 = (p2 + 1) % e2.length, D = e2[m], V = e2[C3];
    return !P.contains(D) && !P.contains(V);
  }, [l, P]), d2 = (0, import_react.useMemo)(() => ({ buttonId: o3, panelId: v, close: () => i({ type: 1 }) }), [o3, v, i]), E2 = ce(), A = E2 == null ? void 0 : E2.registerPopover, L2 = o(() => {
    var e2;
    return (e2 = E2 == null ? void 0 : E2.isFocusWithinPopoverGroup()) != null ? e2 : (T3 == null ? void 0 : T3.activeElement) && ((l == null ? void 0 : l.contains(T3.activeElement)) || (P == null ? void 0 : P.contains(T3.activeElement)));
  });
  (0, import_react.useEffect)(() => A == null ? void 0 : A(d2), [A, d2]), E(T3 == null ? void 0 : T3.defaultView, "focus", (e2) => {
    var p2, m, C3, D;
    y2 === 0 && (L2() || !l || !P || (m = (p2 = s5.current) == null ? void 0 : p2.contains) != null && m.call(p2, e2.target) || (D = (C3 = B.current) == null ? void 0 : C3.contains) != null && D.call(C3, e2.target) || i({ type: 1 }));
  }, true), L([l, P], (e2, p2) => {
    i({ type: 1 }), F(p2, N.Loose) || (e2.preventDefault(), l == null || l.focus());
  }, y2 === 0);
  let I2 = o((e2) => {
    i({ type: 1 });
    let p2 = (() => e2 ? e2 instanceof HTMLElement ? e2 : "current" in e2 && e2.current instanceof HTMLElement ? e2.current : l : l)();
    p2 == null || p2.focus();
  }), H = (0, import_react.useMemo)(() => ({ close: I2, isPortalled: c }), [I2, c]), u2 = (0, import_react.useMemo)(() => ({ open: y2 === 0, close: I2 }), [y2, I2]), S2 = t, R = { ref: n3 };
  return import_react.default.createElement(te.Provider, { value: g }, import_react.default.createElement(oe.Provider, { value: H }, import_react.default.createElement(C2, { value: u(y2, { [0]: p.Open, [1]: p.Closed }) }, $({ ourProps: R, theirProps: S2, slot: u2, defaultTag: Le, name: "Popover" }))));
});
var Fe = "button";
var he = C(function(t, f) {
  let [o3, v] = Q("Popover.Button"), { isPortalled: a } = re("Popover.Button"), n3 = (0, import_react.useRef)(null), g = `headlessui-focus-sentinel-${I()}`, y2 = ce(), l = y2 == null ? void 0 : y2.closeOthers, P = Oe(), s5 = P === null ? false : P === o3.panelId, B = y(n3, f, s5 ? null : (e2) => e2 && v({ type: 2, button: e2 })), i = y(n3, f), T3 = n2(n3), c = o((e2) => {
    var p2, m, C3;
    if (s5) {
      if (o3.popoverState === 1)
        return;
      switch (e2.key) {
        case o2.Space:
        case o2.Enter:
          e2.preventDefault(), (m = (p2 = e2.target).click) == null || m.call(p2), v({ type: 1 }), (C3 = o3.button) == null || C3.focus();
          break;
      }
    } else
      switch (e2.key) {
        case o2.Space:
        case o2.Enter:
          e2.preventDefault(), e2.stopPropagation(), o3.popoverState === 1 && (l == null || l(o3.buttonId)), v({ type: 0 });
          break;
        case o2.Escape:
          if (o3.popoverState !== 0)
            return l == null ? void 0 : l(o3.buttonId);
          if (!n3.current || (T3 == null ? void 0 : T3.activeElement) && !n3.current.contains(T3.activeElement))
            return;
          e2.preventDefault(), e2.stopPropagation(), v({ type: 1 });
          break;
      }
  }), d2 = o((e2) => {
    s5 || e2.key === o2.Space && e2.preventDefault();
  }), E2 = o((e2) => {
    var p2, m;
    r(e2.currentTarget) || t.disabled || (s5 ? (v({ type: 1 }), (p2 = o3.button) == null || p2.focus()) : (e2.preventDefault(), e2.stopPropagation(), o3.popoverState === 1 && (l == null || l(o3.buttonId)), v({ type: 0 }), (m = o3.button) == null || m.focus()));
  }), A = o((e2) => {
    e2.preventDefault(), e2.stopPropagation();
  }), L2 = o3.popoverState === 0, I2 = (0, import_react.useMemo)(() => ({ open: L2 }), [L2]), H = s(t, n3), u2 = t, S2 = s5 ? { ref: i, type: H, onKeyDown: c, onClick: E2 } : { ref: B, id: o3.buttonId, type: H, "aria-expanded": t.disabled ? void 0 : o3.popoverState === 0, "aria-controls": o3.panel ? o3.panelId : void 0, onKeyDown: c, onKeyUp: d2, onClick: E2, onMouseDown: A }, R = n(), O2 = o(() => {
    let e2 = o3.panel;
    if (!e2)
      return;
    function p2() {
      u(R.current, { [s4.Forwards]: () => O(e2, T.First), [s4.Backwards]: () => O(e2, T.Last) });
    }
    p2();
  });
  return import_react.default.createElement(import_react.default.Fragment, null, $({ ourProps: S2, theirProps: u2, slot: I2, defaultTag: Fe, name: "Popover.Button" }), L2 && !s5 && a && import_react.default.createElement(h, { id: g, features: s2.Focusable, as: "button", type: "button", onFocus: O2 }));
});
var Be = "div";
var De = S.RenderStrategy | S.Static;
var xe = C(function(t, f) {
  let [{ popoverState: o3 }, v] = Q("Popover.Overlay"), a = y(f), n3 = `headlessui-popover-overlay-${I()}`, g = s3(), y2 = (() => g !== null ? g === p.Open : o3 === 0)(), l = o((i) => {
    if (r(i.currentTarget))
      return i.preventDefault();
    v({ type: 1 });
  }), P = (0, import_react.useMemo)(() => ({ open: o3 === 0 }), [o3]);
  return $({ ourProps: { ref: a, id: n3, "aria-hidden": true, onClick: l }, theirProps: t, slot: P, defaultTag: Be, features: De, visible: y2, name: "Popover.Overlay" });
});
var He = "div";
var Ge = S.RenderStrategy | S.Static;
var ke = C(function(t, f) {
  let { focus: o3 = false, ...v } = t, [a, n3] = Q("Popover.Panel"), { close: g, isPortalled: y2 } = re("Popover.Panel"), l = `headlessui-focus-sentinel-before-${I()}`, P = `headlessui-focus-sentinel-after-${I()}`, s5 = (0, import_react.useRef)(null), B = y(s5, f, (u2) => {
    n3({ type: 4, panel: u2 });
  }), i = n2(s5), T3 = s3(), c = (() => T3 !== null ? T3 === p.Open : a.popoverState === 0)(), d2 = o((u2) => {
    var S2;
    switch (u2.key) {
      case o2.Escape:
        if (a.popoverState !== 0 || !s5.current || (i == null ? void 0 : i.activeElement) && !s5.current.contains(i.activeElement))
          return;
        u2.preventDefault(), u2.stopPropagation(), n3({ type: 1 }), (S2 = a.button) == null || S2.focus();
        break;
    }
  });
  (0, import_react.useEffect)(() => {
    var u2;
    t.static || a.popoverState === 1 && ((u2 = t.unmount) != null ? u2 : true) && n3({ type: 4, panel: null });
  }, [a.popoverState, t.unmount, t.static, n3]), (0, import_react.useEffect)(() => {
    if (!o3 || a.popoverState !== 0 || !s5.current)
      return;
    let u2 = i == null ? void 0 : i.activeElement;
    s5.current.contains(u2) || O(s5.current, T.First);
  }, [o3, s5, a.popoverState]);
  let E2 = (0, import_react.useMemo)(() => ({ open: a.popoverState === 0, close: g }), [a, g]), A = { ref: B, id: a.panelId, onKeyDown: d2, onBlur: o3 && a.popoverState === 0 ? (u2) => {
    var R, O2, e2, p2, m;
    let S2 = u2.relatedTarget;
    !S2 || !s5.current || (R = s5.current) != null && R.contains(S2) || (n3({ type: 1 }), (((e2 = (O2 = a.beforePanelSentinel.current) == null ? void 0 : O2.contains) == null ? void 0 : e2.call(O2, S2)) || ((m = (p2 = a.afterPanelSentinel.current) == null ? void 0 : p2.contains) == null ? void 0 : m.call(p2, S2))) && S2.focus({ preventScroll: true }));
  } : void 0, tabIndex: -1 }, L2 = n(), I2 = o(() => {
    let u2 = s5.current;
    if (!u2)
      return;
    function S2() {
      u(L2.current, { [s4.Forwards]: () => {
        O(u2, T.First);
      }, [s4.Backwards]: () => {
        var R;
        (R = a.button) == null || R.focus({ preventScroll: true });
      } });
    }
    S2();
  }), H = o(() => {
    let u2 = s5.current;
    if (!u2)
      return;
    function S2() {
      u(L2.current, { [s4.Forwards]: () => {
        var C3, D, V;
        if (!a.button)
          return;
        let R = d(), O2 = R.indexOf(a.button), e2 = R.slice(0, O2 + 1), m = [...R.slice(O2 + 1), ...e2];
        for (let M of m.slice())
          if (((D = (C3 = M == null ? void 0 : M.id) == null ? void 0 : C3.startsWith) == null ? void 0 : D.call(C3, "headlessui-focus-sentinel-")) || ((V = a.panel) == null ? void 0 : V.contains(M))) {
            let ae = m.indexOf(M);
            ae !== -1 && m.splice(ae, 1);
          }
        O(m, T.First, false);
      }, [s4.Backwards]: () => O(u2, T.Last) });
    }
    S2();
  });
  return import_react.default.createElement(le.Provider, { value: a.panelId }, c && y2 && import_react.default.createElement(h, { id: l, ref: a.beforePanelSentinel, features: s2.Focusable, as: "button", type: "button", onFocus: I2 }), $({ ourProps: A, theirProps: v, slot: E2, defaultTag: He, features: Ge, visible: c, name: "Popover.Panel" }), c && y2 && import_react.default.createElement(h, { id: P, ref: a.afterPanelSentinel, features: s2.Focusable, as: "button", type: "button", onFocus: H }));
});
var _e = "div";
var we = C(function(t, f) {
  let o3 = (0, import_react.useRef)(null), v = y(o3, f), [a, n3] = (0, import_react.useState)([]), g = o((c) => {
    n3((d2) => {
      let E2 = d2.indexOf(c);
      if (E2 !== -1) {
        let A = d2.slice();
        return A.splice(E2, 1), A;
      }
      return d2;
    });
  }), y2 = o((c) => (n3((d2) => [...d2, c]), () => g(c))), l = o(() => {
    var E2;
    let c = e(o3);
    if (!c)
      return false;
    let d2 = c.activeElement;
    return (E2 = o3.current) != null && E2.contains(d2) ? true : a.some((A) => {
      var L2, I2;
      return ((L2 = c.getElementById(A.buttonId)) == null ? void 0 : L2.contains(d2)) || ((I2 = c.getElementById(A.panelId)) == null ? void 0 : I2.contains(d2));
    });
  }), P = o((c) => {
    for (let d2 of a)
      d2.buttonId !== c && d2.close();
  }), s5 = (0, import_react.useMemo)(() => ({ registerPopover: y2, unregisterPopover: g, isFocusWithinPopoverGroup: l, closeOthers: P }), [y2, g, l, P]), B = (0, import_react.useMemo)(() => ({}), []), i = t, T3 = { ref: v };
  return import_react.default.createElement(ne.Provider, { value: s5 }, $({ ourProps: T3, theirProps: i, slot: B, defaultTag: _e, name: "Popover.Group" }));
});
var mt = Object.assign(Ie, { Button: he, Overlay: xe, Panel: ke, Group: we });

// app/components/MobileNavigation.tsx
init_es();
var import_Bars3Icon = __toESM(require_Bars3Icon());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MobileNavigation = () => {
  const Button = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Button, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Bars3Icon.default, {
      className: "h-9"
    }, void 0, false, {
      fileName: "app/components/MobileNavigation.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/MobileNavigation.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
  const Links = navigation_config_default.items.map((item) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
      href: item.path,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "flex items-center space-x-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.Icon, {
            className: "h-6"
          }, void 0, false, {
            fileName: "app/components/MobileNavigation.tsx",
            lineNumber: 19,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: item.label,
              defaults: item.label
            }, void 0, false, {
              fileName: "app/components/MobileNavigation.tsx",
              lineNumber: 22,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/MobileNavigation.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/MobileNavigation.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, item.path, false, {
      fileName: "app/components/MobileNavigation.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, {
    button: Button,
    items: Links
  }, void 0, false, {
    fileName: "app/components/MobileNavigation.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
var MobileNavigation_default = MobileNavigation;

// app/components/organizations/OrganizationsSelector.tsx
var import_react7 = __toESM(require_react());
init_es();

// app/lib/organizations/hooks/use-fetch-user-organizations.ts
function useFetchUserOrganizations(userId) {
  const firestore = Ci();
  const organizationsCollection = ea(
    firestore,
    ORGANIZATIONS_COLLECTION
  );
  const userPath = `members.${userId}`;
  const operator = "!=";
  const constraint = $h(userPath, operator, null);
  const organizationsQuery = Mh(organizationsCollection, constraint);
  return ti(organizationsQuery, {
    idField: `id`
  });
}

// app/core/ui/Popover.tsx
var import_react3 = __toESM(require_react());
var import_ChevronDownIcon = __toESM(require_ChevronDownIcon());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var PopoverItem = (0, import_react3.createContext)({
  close() {
    return;
  }
});
var PopoverDropdown = ({ children, button }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(mt, {
    className: "relative",
    children: ({ open, close }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(mt.Button, {
          className: `PopoverButton ${open ? "PopoverButtonActive" : " "}`,
          children: [
            button,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "flex flex-1 justify-end",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ChevronDownIcon.default, {
                className: `PopoverChevronDownIcon ${open ? "" : "text-opacity-70"}`,
                "aria-hidden": "true"
              }, void 0, false, {
                fileName: "app/core/ui/Popover.tsx",
                lineNumber: 25,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/core/ui/Popover.tsx",
              lineNumber: 24,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/core/ui/Popover.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(We, {
          as: import_react3.Fragment,
          enter: "transition ease-out duration-200",
          enterFrom: "opacity-0 translate-y-1",
          enterTo: "opacity-100 translate-y-0",
          leave: "transition ease-in duration-150",
          leaveFrom: "opacity-100 translate-y-0",
          leaveTo: "opacity-0 translate-y-1",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(mt.Panel, {
            className: "PopoverPanel",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "overflow-hidden rounded-md",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "relative flex flex-col bg-white dark:bg-black-300",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverItem.Provider, {
                  value: { close },
                  children
                }, void 0, false, {
                  fileName: "app/core/ui/Popover.tsx",
                  lineNumber: 46,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: "app/core/ui/Popover.tsx",
                lineNumber: 45,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: "app/core/ui/Popover.tsx",
              lineNumber: 44,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/core/ui/Popover.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/core/ui/Popover.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/core/ui/Popover.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/core/ui/Popover.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};
var ItemIcon = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "PopoverItemIcon",
    children
  }, void 0, false, {
    fileName: "app/core/ui/Popover.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
};
var ItemLabel = ({ children, className }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
    className: `PopoverItemLabel ${className ?? ""}`,
    children
  }, void 0, false, {
    fileName: "app/core/ui/Popover.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
};
var Item = ({
  children,
  className,
  onClick
}) => {
  const popover = (0, import_react3.useContext)(PopoverItem);
  const itemClicked = () => {
    if (onClick) {
      onClick();
    }
    popover.close();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `PopoverPanelItem ${className ?? ""}`,
    onClick: itemClicked,
    children
  }, void 0, false, {
    fileName: "app/core/ui/Popover.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
};
Item.Label = ItemLabel;
Item.Icon = ItemIcon;
PopoverDropdown.Item = Item;
var PopoverDropdownItem = Item;

// app/components/organizations/CreateOrganizationModal.tsx
var import_react6 = __toESM(require_react());
init_es();

// app/lib/organizations/hooks/use-create-organization.ts
var import_react5 = __toESM(require_react());
function useCreateOrganization() {
  const user = nr();
  const userId = user.data?.uid;
  const { state, setError, setData, setLoading } = useRequestState();
  const createOrganizationCallback = (0, import_react5.useCallback)(
    async (name) => {
      const firestore = La();
      const batch = Ml(firestore);
      try {
        setLoading(true);
        const organizations = ea(firestore, ORGANIZATIONS_COLLECTION);
        const userDoc = sa(
          firestore,
          USERS_COLLECTION,
          userId
        );
        const organizationDoc = sa(organizations);
        const organizationData = {
          name,
          members: {
            [userDoc.id]: {
              role: membership_role_default.Owner,
              user: userDoc
            }
          }
        };
        batch.set(organizationDoc, organizationData);
        await batch.commit();
        setData({
          name,
          id: organizationDoc.id,
          members: {
            [userDoc.id]: {
              role: membership_role_default.Owner,
              user: userDoc
            }
          }
        });
      } catch (e2) {
        setError(e2.message);
      }
    },
    [setData, setError, setLoading, userId]
  );
  return [createOrganizationCallback, state];
}
var use_create_organization_default = useCreateOrganization;

// app/components/organizations/CreateOrganizationModal.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CreateOrganizationModal = ({ isOpen, setIsOpen, onCreate }) => {
  const [createOrganization, createOrganizationState] = use_create_organization_default();
  const { loading, data: newOrganization } = createOrganizationState;
  const { t } = useTranslation();
  const Heading = (0, import_react6.useMemo)(
    () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "organization:createOrganizationModalHeading"
    }, void 0, false, {
      fileName: "app/components/organizations/CreateOrganizationModal.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this),
    []
  );
  const onError = (0, import_react6.useCallback)(() => {
    _t.error(`Please use a valid name`);
  }, []);
  const onSubmit = (0, import_react6.useCallback)(
    async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const name = data.get(`name`);
      const isNameInvalid = !name || name.trim().length === 0;
      if (isNameInvalid) {
        return onError();
      }
      await _t.promise(createOrganization(name), {
        success: t(`organization:createOrganizationSuccess`),
        error: t(`organization:createOrganizationError`),
        loading: t(`organization:createOrganizationLoading`)
      });
      setIsOpen(false);
    },
    [createOrganization, onError, setIsOpen, t]
  );
  (0, import_react6.useEffect)(() => {
    if (newOrganization) {
      onCreate(newOrganization);
    }
  }, [newOrganization, onCreate]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    isOpen,
    setIsOpen,
    heading: Heading,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
      onSubmit,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "organization:organizationNameLabel"
                }, void 0, false, {
                  fileName: "app/components/organizations/CreateOrganizationModal.tsx",
                  lineNumber: 69,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                  "data-cy": "create-organization-name-input",
                  name: "name",
                  minLength: 1,
                  required: true,
                  placeholder: "ex. IndieCorp"
                }, void 0, false, {
                  fileName: "app/components/organizations/CreateOrganizationModal.tsx",
                  lineNumber: 71,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/organizations/CreateOrganizationModal.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/organizations/CreateOrganizationModal.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            "data-cy": "confirm-create-organization-button",
            block: true,
            loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "organization:createOrganizationSubmitLabel"
            }, void 0, false, {
              fileName: "app/components/organizations/CreateOrganizationModal.tsx",
              lineNumber: 86,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/organizations/CreateOrganizationModal.tsx",
            lineNumber: 81,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/organizations/CreateOrganizationModal.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/organizations/CreateOrganizationModal.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/organizations/CreateOrganizationModal.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
};
var CreateOrganizationModal_default = CreateOrganizationModal;

// app/components/organizations/OrganizationsSelector.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var PopoverButton = ({ organization }) => {
  if (organization) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationItem, {
      organization
    }, void 0, false, {
      fileName: "app/components/organizations/OrganizationsSelector.tsx",
      lineNumber: 20,
      columnNumber: 12
    }, this);
  }
  return null;
};
var OrganizationsSelector = ({ userId }) => {
  const [isOrganizationModalOpen, setIsOrganizationModalOpen] = (0, import_react7.useState)(false);
  const { organization, setOrganization } = (0, import_react7.useContext)(organization_default);
  const organizationSelected = (0, import_react7.useCallback)(
    (item) => {
      setOrganization(item);
      saveOrganizationIdInCookie(item.id);
    },
    [setOrganization]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        "data-cy": "organization-selector",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverDropdown, {
          button: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverButton, {
            organization
          }, void 0, false, {
            fileName: "app/components/organizations/OrganizationsSelector.tsx",
            lineNumber: 47,
            columnNumber: 34
          }, this),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationsOptions, {
                organizationId: organization?.id,
                userId,
                onSelect: organizationSelected
              }, void 0, false, {
                fileName: "app/components/organizations/OrganizationsSelector.tsx",
                lineNumber: 49,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/organizations/OrganizationsSelector.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverDropdownItem, {
              className: "border-t border-gray-100 dark:border-black-400",
              onClick: () => setIsOrganizationModalOpen(true),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverDropdownItem.Label, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  "data-cy": "create-organization-button",
                  className: "flex flex-row items-center space-x-2 ellipsify",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusCircleIcon_default, {
                      className: "h-5"
                    }, void 0, false, {
                      fileName: "app/components/organizations/OrganizationsSelector.tsx",
                      lineNumber: 65,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                        i18nKey: "organization:createOrganizationDropdownLabel"
                      }, void 0, false, {
                        fileName: "app/components/organizations/OrganizationsSelector.tsx",
                        lineNumber: 68,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/organizations/OrganizationsSelector.tsx",
                      lineNumber: 67,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/organizations/OrganizationsSelector.tsx",
                  lineNumber: 61,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/organizations/OrganizationsSelector.tsx",
                lineNumber: 60,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/organizations/OrganizationsSelector.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/organizations/OrganizationsSelector.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationsSelector.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreateOrganizationModal_default, {
        setIsOpen: setIsOrganizationModalOpen,
        isOpen: isOrganizationModalOpen,
        onCreate: organizationSelected
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationsSelector.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/organizations/OrganizationsSelector.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
};
function OrganizationsOptions(props) {
  const { data: organizations, status } = useFetchUserOrganizations(
    props.userId
  );
  if (status !== "success") {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: (organizations ?? []).map((item) => {
      const isSelected = item.id === props.organizationId;
      if (!isSelected) {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverDropdownItem, {
          onClick: () => props.onSelect(item),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverDropdownItem.Label, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationItem, {
              organization: item
            }, void 0, false, {
              fileName: "app/components/organizations/OrganizationsSelector.tsx",
              lineNumber: 114,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: "app/components/organizations/OrganizationsSelector.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this)
        }, item.name, false, {
          fileName: "app/components/organizations/OrganizationsSelector.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this);
      }
      return null;
    })
  }, void 0, false, {
    fileName: "app/components/organizations/OrganizationsSelector.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}
function OrganizationItem({ organization }) {
  const { logoURL, name } = organization;
  const imageSize = 18;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
    "data-cy": "organization-selector-item",
    className: `flex max-w-[12rem] items-center space-x-2`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: logoURL,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex items-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            decoding: "async",
            loading: "lazy",
            style: {
              width: imageSize,
              height: imageSize
            },
            width: imageSize,
            height: imageSize,
            alt: `${name} Logo`,
            className: "object-contain",
            src: logoURL
          }, void 0, false, {
            fileName: "app/components/organizations/OrganizationsSelector.tsx",
            lineNumber: 137,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/organizations/OrganizationsSelector.tsx",
          lineNumber: 136,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationsSelector.tsx",
        lineNumber: 135,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "w-auto text-left font-medium ellipsify",
        children: name
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationsSelector.tsx",
        lineNumber: 153,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/organizations/OrganizationsSelector.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}
function saveOrganizationIdInCookie(id) {
  setCookie("organizationId", id);
}
var OrganizationsSelector_default = OrganizationsSelector;

// app/components/AppHeader.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var AppHeader = ({ children }) => {
  const userSession = useUserSession();
  const auth = kt();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "AppHeader",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppContainer_default, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex w-full flex-1 justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center justify-between space-x-2 lg:space-x-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "lg:hidden",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileNavigation_default, {}, void 0, false, {
                  fileName: "app/components/AppHeader.tsx",
                  lineNumber: 28,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/AppHeader.tsx",
                lineNumber: 27,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center space-x-1 lg:space-x-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "min-w-[8rem]",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                      condition: userSession?.auth?.uid,
                      children: (uid) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationsSelector_default, {
                        userId: uid
                      }, void 0, false, {
                        fileName: "app/components/AppHeader.tsx",
                        lineNumber: 34,
                        columnNumber: 29
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/AppHeader.tsx",
                      lineNumber: 33,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/AppHeader.tsx",
                    lineNumber: 32,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ChevronRightIcon.default, {
                    className: "h-6"
                  }, void 0, false, {
                    fileName: "app/components/AppHeader.tsx",
                    lineNumber: 38,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                    type: 4,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "font-semibold dark:text-white",
                      children
                    }, void 0, false, {
                      fileName: "app/components/AppHeader.tsx",
                      lineNumber: 41,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/AppHeader.tsx",
                    lineNumber: 40,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/AppHeader.tsx",
                lineNumber: 31,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 22,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileDropdown_default, {
              user: userSession?.auth,
              signOutRequested: () => auth.signOut()
            }, void 0, false, {
              fileName: "app/components/AppHeader.tsx",
              lineNumber: 49,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/AppHeader.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/AppHeader.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/AppHeader.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};
var AppHeader_default = AppHeader;

export {
  AppContainer_default,
  AppHeader_default
};
//# sourceMappingURL=/build/_shared/chunk-UL6BSI56.js.map
