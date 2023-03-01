import {
  roles_default
} from "/build/_shared/chunk-MGQONI2O.js";
import {
  T,
  e as e2
} from "/build/_shared/chunk-B76DMKWT.js";
import {
  IfHasPermissions_default
} from "/build/_shared/chunk-4I42Q7Y2.js";
import {
  canInviteUser
} from "/build/_shared/chunk-OJUH3UKO.js";
import {
  h,
  s as s4
} from "/build/_shared/chunk-AJBLUEBX.js";
import {
  a,
  s as s3,
  x
} from "/build/_shared/chunk-5CBDJCHW.js";
import {
  L
} from "/build/_shared/chunk-6ZZPVUWI.js";
import {
  F,
  I,
  N,
  S,
  e,
  o as o2,
  r
} from "/build/_shared/chunk-UJJUUA64.js";
import {
  C as C2,
  We,
  p,
  p2,
  s as s5
} from "/build/_shared/chunk-TXT3OLG5.js";
import {
  $,
  C,
  F as F2,
  S as S2,
  m,
  o,
  s,
  s2,
  u,
  y
} from "/build/_shared/chunk-6E6B4MC5.js";
import {
  ChevronDownIcon_default,
  ChevronUpIcon_default
} from "/build/_shared/chunk-4PMGBJWS.js";
import {
  require_CheckCircleIcon
} from "/build/_shared/chunk-ODW25BWE.js";
import {
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

// app/core/ui/ListBox/ListBox.tsx
var import_react3 = __toESM(require_react());
init_es();

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react = __toESM(require_react(), 1);
function i(e3, o3) {
  let [u2, t] = (0, import_react.useState)(e3), r2 = s2(e3);
  return s(() => t(r2.current), [r2, t, ...o3]), u2;
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react2 = __toESM(require_react(), 1);
var ye = ((n) => (n[n.Open = 0] = "Open", n[n.Closed = 1] = "Closed", n))(ye || {});
var xe = ((n) => (n[n.Single = 0] = "Single", n[n.Multi = 1] = "Multi", n))(xe || {});
var Oe = ((n) => (n[n.Pointer = 0] = "Pointer", n[n.Other = 1] = "Other", n))(Oe || {});
var me = ((r2) => (r2[r2.OpenListbox = 0] = "OpenListbox", r2[r2.CloseListbox = 1] = "CloseListbox", r2[r2.SetDisabled = 2] = "SetDisabled", r2[r2.SetOrientation = 3] = "SetOrientation", r2[r2.GoToOption = 4] = "GoToOption", r2[r2.Search = 5] = "Search", r2[r2.ClearSearch = 6] = "ClearSearch", r2[r2.RegisterOption = 7] = "RegisterOption", r2[r2.UnregisterOption = 8] = "UnregisterOption", r2))(me || {});
function j(t, i2 = (n) => n) {
  let n = t.activeOptionIndex !== null ? t.options[t.activeOptionIndex] : null, e3 = S(i2(t.options.slice()), (u2) => u2.dataRef.current.domRef.current), o3 = n ? e3.indexOf(n) : null;
  return o3 === -1 && (o3 = null), { options: e3, activeOptionIndex: o3 };
}
var ge = { [1](t) {
  return t.disabled || t.listboxState === 1 ? t : { ...t, activeOptionIndex: null, listboxState: 1 };
}, [0](t) {
  if (t.disabled || t.listboxState === 0)
    return t;
  let i2 = t.activeOptionIndex, { value: n, mode: e3, compare: o3 } = t.propsRef.current, u2 = t.options.findIndex((l) => {
    let s7 = l.dataRef.current.value;
    return u(e3, { [1]: () => n.some((r2) => o3(r2, s7)), [0]: () => o3(n, s7) });
  });
  return u2 !== -1 && (i2 = u2), { ...t, listboxState: 0, activeOptionIndex: i2 };
}, [2](t, i2) {
  return t.disabled === i2.disabled ? t : { ...t, disabled: i2.disabled };
}, [3](t, i2) {
  return t.orientation === i2.orientation ? t : { ...t, orientation: i2.orientation };
}, [4](t, i2) {
  var o3;
  if (t.disabled || t.listboxState === 1)
    return t;
  let n = j(t), e3 = x(i2, { resolveItems: () => n.options, resolveActiveIndex: () => n.activeOptionIndex, resolveId: (u2) => u2.id, resolveDisabled: (u2) => u2.dataRef.current.disabled });
  return { ...t, ...n, searchQuery: "", activeOptionIndex: e3, activationTrigger: (o3 = i2.trigger) != null ? o3 : 1 };
}, [5]: (t, i2) => {
  if (t.disabled || t.listboxState === 1)
    return t;
  let e3 = t.searchQuery !== "" ? 0 : 1, o3 = t.searchQuery + i2.value.toLowerCase(), l = (t.activeOptionIndex !== null ? t.options.slice(t.activeOptionIndex + e3).concat(t.options.slice(0, t.activeOptionIndex + e3)) : t.options).find((d) => {
    var r2;
    return !d.dataRef.current.disabled && ((r2 = d.dataRef.current.textValue) == null ? void 0 : r2.startsWith(o3));
  }), s7 = l ? t.options.indexOf(l) : -1;
  return s7 === -1 || s7 === t.activeOptionIndex ? { ...t, searchQuery: o3 } : { ...t, searchQuery: o3, activeOptionIndex: s7, activationTrigger: 1 };
}, [6](t) {
  return t.disabled || t.listboxState === 1 || t.searchQuery === "" ? t : { ...t, searchQuery: "" };
}, [7]: (t, i2) => {
  let n = { id: i2.id, dataRef: i2.dataRef }, e3 = j(t, (o3) => [...o3, n]);
  if (t.activeOptionIndex === null) {
    let { value: o3, mode: u2, compare: l } = t.propsRef.current, s7 = i2.dataRef.current.value;
    u(u2, { [1]: () => o3.some((r2) => l(r2, s7)), [0]: () => l(o3, s7) }) && (e3.activeOptionIndex = e3.options.indexOf(n));
  }
  return { ...t, ...e3 };
}, [8]: (t, i2) => {
  let n = j(t, (e3) => {
    let o3 = e3.findIndex((u2) => u2.id === i2.id);
    return o3 !== -1 && e3.splice(o3, 1), e3;
  });
  return { ...t, ...n, activationTrigger: 1 };
} };
var K = (0, import_react2.createContext)(null);
K.displayName = "ListboxContext";
function w(t) {
  let i2 = (0, import_react2.useContext)(K);
  if (i2 === null) {
    let n = new Error(`<${t} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, w), n;
  }
  return i2;
}
function Re(t, i2) {
  return u(i2.type, ge, t, i2);
}
var ve = import_react2.Fragment;
var Le = C(function(i2, n) {
  let { value: e3, defaultValue: o3, name: u2, onChange: l, by: s7 = (p3, T2) => p3 === T2, disabled: d = false, horizontal: r2 = false, multiple: x2 = false, ...S3 } = i2;
  const g = r2 ? "horizontal" : "vertical";
  let O = y(n), [m2, f] = T(e3, l, o3), b = (0, import_react2.useReducer)(Re, { listboxState: 1, propsRef: { current: { value: m2, onChange: f, mode: x2 ? 1 : 0, compare: o(typeof s7 == "string" ? (p3, T2) => {
    let C3 = s7;
    return (p3 == null ? void 0 : p3[C3]) === (T2 == null ? void 0 : T2[C3]);
  } : s7) } }, labelRef: (0, import_react2.createRef)(), buttonRef: (0, import_react2.createRef)(), optionsRef: (0, import_react2.createRef)(), disabled: d, orientation: g, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1 }), [{ listboxState: a2, propsRef: c, optionsRef: P, buttonRef: D }, M] = b;
  c.current.value = m2, c.current.mode = x2 ? 1 : 0, s(() => {
    c.current.onChange = (p3) => u(c.current.mode, { [0]() {
      return f(p3);
    }, [1]() {
      let T2 = c.current.value.slice(), { compare: C3 } = c.current, W = T2.findIndex((X) => C3(X, p3));
      return W === -1 ? T2.push(p3) : T2.splice(W, 1), f(T2);
    } });
  }, [f, c]), s(() => M({ type: 2, disabled: d }), [d]), s(() => M({ type: 3, orientation: g }), [g]), L([D, P], (p3, T2) => {
    var C3;
    M({ type: 1 }), F(T2, N.Loose) || (p3.preventDefault(), (C3 = D.current) == null || C3.focus());
  }, a2 === 0);
  let N2 = (0, import_react2.useMemo)(() => ({ open: a2 === 0, disabled: d, value: m2 }), [a2, d, m2]), R = { ref: O };
  return import_react2.default.createElement(K.Provider, { value: b }, import_react2.default.createElement(C2, { value: u(a2, { [0]: p2.Open, [1]: p2.Closed }) }, u2 != null && m2 != null && e2({ [u2]: m2 }).map(([p3, T2]) => import_react2.default.createElement(h, { features: s4.Hidden, ...F2({ key: p3, as: "input", type: "hidden", hidden: true, readOnly: true, name: p3, value: T2 }) })), $({ ourProps: R, theirProps: S3, slot: N2, defaultTag: ve, name: "Listbox" })));
});
var Se = "button";
var Ae = C(function(i2, n) {
  var f;
  let [e3, o3] = w("Listbox.Button"), u2 = y(e3.buttonRef, n), l = `headlessui-listbox-button-${I()}`, s7 = p(), d = o((b) => {
    switch (b.key) {
      case o2.Space:
      case o2.Enter:
      case o2.ArrowDown:
        b.preventDefault(), o3({ type: 0 }), s7.nextFrame(() => {
          e3.propsRef.current.value || o3({ type: 4, focus: a.First });
        });
        break;
      case o2.ArrowUp:
        b.preventDefault(), o3({ type: 0 }), s7.nextFrame(() => {
          e3.propsRef.current.value || o3({ type: 4, focus: a.Last });
        });
        break;
    }
  }), r2 = o((b) => {
    switch (b.key) {
      case o2.Space:
        b.preventDefault();
        break;
    }
  }), x2 = o((b) => {
    if (r(b.currentTarget))
      return b.preventDefault();
    e3.listboxState === 0 ? (o3({ type: 1 }), s7.nextFrame(() => {
      var a2;
      return (a2 = e3.buttonRef.current) == null ? void 0 : a2.focus({ preventScroll: true });
    })) : (b.preventDefault(), o3({ type: 0 }));
  }), S3 = i(() => {
    if (!!e3.labelRef.current)
      return [e3.labelRef.current.id, l].join(" ");
  }, [e3.labelRef.current, l]), g = (0, import_react2.useMemo)(() => ({ open: e3.listboxState === 0, disabled: e3.disabled, value: e3.propsRef.current.value }), [e3]), O = i2, m2 = { ref: u2, id: l, type: s3(i2, e3.buttonRef), "aria-haspopup": true, "aria-controls": (f = e3.optionsRef.current) == null ? void 0 : f.id, "aria-expanded": e3.disabled ? void 0 : e3.listboxState === 0, "aria-labelledby": S3, disabled: e3.disabled, onKeyDown: d, onKeyUp: r2, onClick: x2 };
  return $({ ourProps: m2, theirProps: O, slot: g, defaultTag: Se, name: "Listbox.Button" });
});
var he = "label";
var Pe = C(function(i2, n) {
  let [e3] = w("Listbox.Label"), o3 = `headlessui-listbox-label-${I()}`, u2 = y(e3.labelRef, n), l = o(() => {
    var x2;
    return (x2 = e3.buttonRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
  }), s7 = (0, import_react2.useMemo)(() => ({ open: e3.listboxState === 0, disabled: e3.disabled }), [e3]);
  return $({ ourProps: { ref: u2, id: o3, onClick: l }, theirProps: i2, slot: s7, defaultTag: he, name: "Listbox.Label" });
});
var Ce = "ul";
var De = S2.RenderStrategy | S2.Static;
var Me = C(function(i2, n) {
  var b;
  let [e3, o3] = w("Listbox.Options"), u2 = y(e3.optionsRef, n), l = `headlessui-listbox-options-${I()}`, s7 = p(), d = p(), r2 = s5(), x2 = (() => r2 !== null ? r2 === p2.Open : e3.listboxState === 0)();
  (0, import_react2.useEffect)(() => {
    var c;
    let a2 = e3.optionsRef.current;
    !a2 || e3.listboxState === 0 && a2 !== ((c = e(a2)) == null ? void 0 : c.activeElement) && a2.focus({ preventScroll: true });
  }, [e3.listboxState, e3.optionsRef]);
  let S3 = o((a2) => {
    switch (d.dispose(), a2.key) {
      case o2.Space:
        if (e3.searchQuery !== "")
          return a2.preventDefault(), a2.stopPropagation(), o3({ type: 5, value: a2.key });
      case o2.Enter:
        if (a2.preventDefault(), a2.stopPropagation(), e3.activeOptionIndex !== null) {
          let { dataRef: c } = e3.options[e3.activeOptionIndex];
          e3.propsRef.current.onChange(c.current.value);
        }
        e3.propsRef.current.mode === 0 && (o3({ type: 1 }), m().nextFrame(() => {
          var c;
          return (c = e3.buttonRef.current) == null ? void 0 : c.focus({ preventScroll: true });
        }));
        break;
      case u(e3.orientation, { vertical: o2.ArrowDown, horizontal: o2.ArrowRight }):
        return a2.preventDefault(), a2.stopPropagation(), o3({ type: 4, focus: a.Next });
      case u(e3.orientation, { vertical: o2.ArrowUp, horizontal: o2.ArrowLeft }):
        return a2.preventDefault(), a2.stopPropagation(), o3({ type: 4, focus: a.Previous });
      case o2.Home:
      case o2.PageUp:
        return a2.preventDefault(), a2.stopPropagation(), o3({ type: 4, focus: a.First });
      case o2.End:
      case o2.PageDown:
        return a2.preventDefault(), a2.stopPropagation(), o3({ type: 4, focus: a.Last });
      case o2.Escape:
        return a2.preventDefault(), a2.stopPropagation(), o3({ type: 1 }), s7.nextFrame(() => {
          var c;
          return (c = e3.buttonRef.current) == null ? void 0 : c.focus({ preventScroll: true });
        });
      case o2.Tab:
        a2.preventDefault(), a2.stopPropagation();
        break;
      default:
        a2.key.length === 1 && (o3({ type: 5, value: a2.key }), d.setTimeout(() => o3({ type: 6 }), 350));
        break;
    }
  }), g = i(() => {
    var a2, c, P;
    return (P = (a2 = e3.labelRef.current) == null ? void 0 : a2.id) != null ? P : (c = e3.buttonRef.current) == null ? void 0 : c.id;
  }, [e3.labelRef.current, e3.buttonRef.current]), O = (0, import_react2.useMemo)(() => ({ open: e3.listboxState === 0 }), [e3]), m2 = i2, f = { "aria-activedescendant": e3.activeOptionIndex === null || (b = e3.options[e3.activeOptionIndex]) == null ? void 0 : b.id, "aria-multiselectable": e3.propsRef.current.mode === 1 ? true : void 0, "aria-labelledby": g, "aria-orientation": e3.orientation, id: l, onKeyDown: S3, role: "listbox", tabIndex: 0, ref: u2 };
  return $({ ourProps: f, theirProps: m2, slot: O, defaultTag: Ce, features: De, visible: x2, name: "Listbox.Options" });
});
var Ee = "li";
var Ie = C(function(i2, n) {
  let { disabled: e3 = false, value: o3, ...u2 } = i2, [l, s7] = w("Listbox.Option"), d = `headlessui-listbox-option-${I()}`, r2 = l.activeOptionIndex !== null ? l.options[l.activeOptionIndex].id === d : false, { value: x2, compare: S3 } = l.propsRef.current, g = u(l.propsRef.current.mode, { [1]: () => x2.some((R) => S3(R, o3)), [0]: () => S3(x2, o3) }), O = (0, import_react2.useRef)(null), m2 = y(n, O);
  s(() => {
    if (l.listboxState !== 0 || !r2 || l.activationTrigger === 0)
      return;
    let R = m();
    return R.requestAnimationFrame(() => {
      var p3, T2;
      (T2 = (p3 = O.current) == null ? void 0 : p3.scrollIntoView) == null || T2.call(p3, { block: "nearest" });
    }), R.dispose;
  }, [O, r2, l.listboxState, l.activationTrigger, l.activeOptionIndex]);
  let f = (0, import_react2.useRef)({ disabled: e3, value: o3, domRef: O });
  s(() => {
    f.current.disabled = e3;
  }, [f, e3]), s(() => {
    f.current.value = o3;
  }, [f, o3]), s(() => {
    var R, p3;
    f.current.textValue = (p3 = (R = O.current) == null ? void 0 : R.textContent) == null ? void 0 : p3.toLowerCase();
  }, [f, O]);
  let b = o(() => l.propsRef.current.onChange(o3));
  s(() => (s7({ type: 7, id: d, dataRef: f }), () => s7({ type: 8, id: d })), [f, d]);
  let a2 = o((R) => {
    if (e3)
      return R.preventDefault();
    b(), l.propsRef.current.mode === 0 && (s7({ type: 1 }), m().nextFrame(() => {
      var p3;
      return (p3 = l.buttonRef.current) == null ? void 0 : p3.focus({ preventScroll: true });
    }));
  }), c = o(() => {
    if (e3)
      return s7({ type: 4, focus: a.Nothing });
    s7({ type: 4, focus: a.Specific, id: d });
  }), P = o(() => {
    e3 || r2 || s7({ type: 4, focus: a.Specific, id: d, trigger: 0 });
  }), D = o(() => {
    e3 || !r2 || s7({ type: 4, focus: a.Nothing });
  }), M = (0, import_react2.useMemo)(() => ({ active: r2, selected: g, disabled: e3 }), [r2, g, e3]);
  return $({ ourProps: { id: d, ref: m2, role: "option", tabIndex: e3 === true ? void 0 : -1, "aria-disabled": e3 === true ? true : void 0, "aria-selected": g, disabled: void 0, onClick: a2, onFocus: c, onPointerMove: P, onMouseMove: P, onPointerLeave: D, onMouseLeave: D }, theirProps: u2, slot: M, defaultTag: Ee, name: "Listbox.Option" });
});
var pt = Object.assign(Le, { Button: Ae, Label: Pe, Options: Me, Option: Ie });

// app/core/ui/SelectorIcon.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SelectorIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `flex flex-col ${props.className ?? ""}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronUpIcon_default, {
        className: "relative top-[0.1rem] h-3"
      }, void 0, false, {
        fileName: "app/core/ui/SelectorIcon.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDownIcon_default, {
        className: "relative bottom-[0.1rem] h-3"
      }, void 0, false, {
        fileName: "app/core/ui/SelectorIcon.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/core/ui/SelectorIcon.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var SelectorIcon_default = SelectorIcon;

// app/core/ui/ListBox/ListBox.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ListBox({
  cy,
  value,
  setValue,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pt, {
    value,
    onChange: setValue,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "relative",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pt.Button, {
          "data-cy": cy,
          className: ({ open }) => {
            return `ListBoxButton ${open ? `ListBoxButtonOpen` : ""}`;
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: value,
              children: ({ label }) => {
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "block truncate",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: label
                  }, void 0, false, {
                    fileName: "app/core/ui/ListBox/ListBox.tsx",
                    lineNumber: 39,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: "app/core/ui/ListBox/ListBox.tsx",
                  lineNumber: 38,
                  columnNumber: 17
                }, this);
              }
            }, void 0, false, {
              fileName: "app/core/ui/ListBox/ListBox.tsx",
              lineNumber: 35,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "ListBoxButtonIcon",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectorIcon_default, {
                "aria-hidden": "true"
              }, void 0, false, {
                fileName: "app/core/ui/ListBox/ListBox.tsx",
                lineNumber: 46,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/core/ui/ListBox/ListBox.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/core/ui/ListBox/ListBox.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(We, {
          as: import_react3.Fragment,
          leave: "transition ease-in duration-100",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pt.Options, {
            className: "ListBoxOptionsContainer",
            children
          }, void 0, false, {
            fileName: "app/core/ui/ListBox/ListBox.tsx",
            lineNumber: 56,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/core/ui/ListBox/ListBox.tsx",
          lineNumber: 50,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/core/ui/ListBox/ListBox.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/core/ui/ListBox/ListBox.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
var ListBox_default = ListBox;

// app/core/ui/ListBox/ListBoxOption.tsx
init_es();
var import_CheckCircleIcon = __toESM(require_CheckCircleIcon());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ListBoxOption = ({ option }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pt.Option, {
    className: ({ active, selected }) => `${selected ? "ListBoxOptionSelected" : "ListBoxOptionNotSelected"} ${active ? "ListBoxOptionActive" : "ListBoxOptionNotActive"} ListBoxOption`,
    value: option,
    children: ({ selected }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-1",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          "data-cy": `listbox-option-${option.value}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: `block truncate`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: option.label
              }, void 0, false, {
                fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
                lineNumber: 29,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
              lineNumber: 28,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: selected,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: `ListBoxOptionIcon`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_CheckCircleIcon.default, {
                  className: "h-6 w-6",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
                  lineNumber: 34,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
                lineNumber: 33,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
              lineNumber: 32,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: option.description,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "ListBoxOptionDescription",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: option.description
            }, void 0, false, {
              fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
              lineNumber: 41,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};
var ListBoxOption_default = ListBoxOption;

// app/components/organizations/MembershipRoleSelector.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MembershipRoleSelector = ({ value: currentRole, onChange }) => {
  const selectedRole = getSelectedRoleModel(currentRole);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBox_default, {
    value: selectedRole,
    setValue: (role) => {
      onChange && onChange(role.value);
    },
    cy: "invite-role-selector-button",
    children: roles_default.map((role) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IfHasPermissions_default, {
        condition: (currentUserRole) => canInviteUser(currentUserRole, role.value),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBoxOption_default, {
          option: role
        }, void 0, false, {
          fileName: "app/components/organizations/MembershipRoleSelector.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this)
      }, role.value, false, {
        fileName: "app/components/organizations/MembershipRoleSelector.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: "app/components/organizations/MembershipRoleSelector.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};
function getSelectedRoleModel(currentRole) {
  const memberRole = roles_default[2];
  return roles_default.find((role) => {
    return role.value === currentRole;
  }) ?? memberRole;
}
var MembershipRoleSelector_default = MembershipRoleSelector;

export {
  MembershipRoleSelector_default
};
//# sourceMappingURL=/build/_shared/chunk-D76F7IXS.js.map
