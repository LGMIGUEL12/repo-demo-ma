import {
  FallbackUserAvatar_default
} from "/build/_shared/chunk-FHC7QUPJ.js";
import {
  F as F2
} from "/build/_shared/chunk-2RQ7OU4V.js";
import {
  a,
  s as s2,
  x
} from "/build/_shared/chunk-5CBDJCHW.js";
import {
  n
} from "/build/_shared/chunk-I5LWYJ5L.js";
import {
  L
} from "/build/_shared/chunk-6ZZPVUWI.js";
import {
  D,
  F,
  I,
  I2,
  N,
  S,
  T,
  o as o2,
  r
} from "/build/_shared/chunk-UJJUUA64.js";
import {
  C as C2,
  We,
  p,
  p2,
  s as s3
} from "/build/_shared/chunk-TXT3OLG5.js";
import {
  $,
  C,
  S as S2,
  m,
  o,
  s,
  u,
  y
} from "/build/_shared/chunk-6E6B4MC5.js";
import {
  Button_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import {
  require_classnames
} from "/build/_shared/chunk-DN742LHR.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/ProfileAvatar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProfileAvatar = ({
  user
}) => {
  if (!user) {
    return null;
  }
  const photoURL = user?.photoURL;
  const size = 36;
  if (photoURL) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        loading: "lazy",
        decoding: "async",
        width: size,
        height: size,
        className: "rounded-full object-cover",
        src: photoURL,
        alt: photoURL,
        style: { height: size }
      }, void 0, false, {
        fileName: "app/components/ProfileAvatar.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/ProfileAvatar.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FallbackUserAvatar_default, {
    text: getUserInitials(user)
  }, void 0, false, {
    fileName: "app/components/ProfileAvatar.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
function getUserInitials(user) {
  const displayName = getDisplayName(user);
  return displayName[0] ?? "";
}
function getDisplayName(user) {
  if (user.displayName) {
    return user.displayName;
  }
  return user.email ?? "";
}
var ProfileAvatar_default = ProfileAvatar;

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react = __toESM(require_react(), 1);
var ue = ((o3) => (o3[o3.Open = 0] = "Open", o3[o3.Closed = 1] = "Closed", o3))(ue || {});
var se = ((o3) => (o3[o3.Pointer = 0] = "Pointer", o3[o3.Other = 1] = "Other", o3))(se || {});
var le = ((n2) => (n2[n2.OpenMenu = 0] = "OpenMenu", n2[n2.CloseMenu = 1] = "CloseMenu", n2[n2.GoToItem = 2] = "GoToItem", n2[n2.Search = 3] = "Search", n2[n2.ClearSearch = 4] = "ClearSearch", n2[n2.RegisterItem = 5] = "RegisterItem", n2[n2.UnregisterItem = 6] = "UnregisterItem", n2))(le || {});
function k(t, i = (o3) => o3) {
  let o3 = t.activeItemIndex !== null ? t.items[t.activeItemIndex] : null, e = S(i(t.items.slice()), (u2) => u2.dataRef.current.domRef.current), r2 = o3 ? e.indexOf(o3) : null;
  return r2 === -1 && (r2 = null), { items: e, activeItemIndex: r2 };
}
var ce = { [1](t) {
  return t.menuState === 1 ? t : { ...t, activeItemIndex: null, menuState: 1 };
}, [0](t) {
  return t.menuState === 0 ? t : { ...t, menuState: 0 };
}, [2]: (t, i) => {
  var r2;
  let o3 = k(t), e = x(i, { resolveItems: () => o3.items, resolveActiveIndex: () => o3.activeItemIndex, resolveId: (u2) => u2.id, resolveDisabled: (u2) => u2.dataRef.current.disabled });
  return { ...t, ...o3, searchQuery: "", activeItemIndex: e, activationTrigger: (r2 = i.trigger) != null ? r2 : 1 };
}, [3]: (t, i) => {
  let e = t.searchQuery !== "" ? 0 : 1, r2 = t.searchQuery + i.value.toLowerCase(), s4 = (t.activeItemIndex !== null ? t.items.slice(t.activeItemIndex + e).concat(t.items.slice(0, t.activeItemIndex + e)) : t.items).find((p3) => {
    var c;
    return ((c = p3.dataRef.current.textValue) == null ? void 0 : c.startsWith(r2)) && !p3.dataRef.current.disabled;
  }), n2 = s4 ? t.items.indexOf(s4) : -1;
  return n2 === -1 || n2 === t.activeItemIndex ? { ...t, searchQuery: r2 } : { ...t, searchQuery: r2, activeItemIndex: n2, activationTrigger: 1 };
}, [4](t) {
  return t.searchQuery === "" ? t : { ...t, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (t, i) => {
  let o3 = k(t, (e) => [...e, { id: i.id, dataRef: i.dataRef }]);
  return { ...t, ...o3 };
}, [6]: (t, i) => {
  let o3 = k(t, (e) => {
    let r2 = e.findIndex((u2) => u2.id === i.id);
    return r2 !== -1 && e.splice(r2, 1), e;
  });
  return { ...t, ...o3, activationTrigger: 1 };
} };
var w = (0, import_react.createContext)(null);
w.displayName = "MenuContext";
function C3(t) {
  let i = (0, import_react.useContext)(w);
  if (i === null) {
    let o3 = new Error(`<${t} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o3, C3), o3;
  }
  return i;
}
function pe(t, i) {
  return u(i.type, ce, t, i);
}
var de = import_react.Fragment;
var me = C(function(i, o3) {
  let e = (0, import_react.useReducer)(pe, { menuState: 1, buttonRef: (0, import_react.createRef)(), itemsRef: (0, import_react.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: r2, itemsRef: u2, buttonRef: s4 }, n2] = e, p3 = y(o3);
  L([s4, u2], (A, M) => {
    var l;
    n2({ type: 1 }), F(M, N.Loose) || (A.preventDefault(), (l = s4.current) == null || l.focus());
  }, r2 === 0);
  let c = o(() => {
    n2({ type: 1 });
  }), b = (0, import_react.useMemo)(() => ({ open: r2 === 0, close: c }), [r2, c]), m2 = i, g = { ref: p3 };
  return import_react.default.createElement(w.Provider, { value: e }, import_react.default.createElement(C2, { value: u(r2, { [0]: p2.Open, [1]: p2.Closed }) }, $({ ourProps: g, theirProps: m2, slot: b, defaultTag: de, name: "Menu" })));
});
var fe = "button";
var Te = C(function(i, o3) {
  var M;
  let [e, r2] = C3("Menu.Button"), u2 = y(e.buttonRef, o3), s4 = `headlessui-menu-button-${I()}`, n2 = p(), p3 = o((l) => {
    switch (l.key) {
      case o2.Space:
      case o2.Enter:
      case o2.ArrowDown:
        l.preventDefault(), l.stopPropagation(), r2({ type: 0 }), n2.nextFrame(() => r2({ type: 2, focus: a.First }));
        break;
      case o2.ArrowUp:
        l.preventDefault(), l.stopPropagation(), r2({ type: 0 }), n2.nextFrame(() => r2({ type: 2, focus: a.Last }));
        break;
    }
  }), c = o((l) => {
    switch (l.key) {
      case o2.Space:
        l.preventDefault();
        break;
    }
  }), b = o((l) => {
    if (r(l.currentTarget))
      return l.preventDefault();
    i.disabled || (e.menuState === 0 ? (r2({ type: 1 }), n2.nextFrame(() => {
      var R;
      return (R = e.buttonRef.current) == null ? void 0 : R.focus({ preventScroll: true });
    })) : (l.preventDefault(), r2({ type: 0 })));
  }), m2 = (0, import_react.useMemo)(() => ({ open: e.menuState === 0 }), [e]), g = i, A = { ref: u2, id: s4, type: s2(i, e.buttonRef), "aria-haspopup": true, "aria-controls": (M = e.itemsRef.current) == null ? void 0 : M.id, "aria-expanded": i.disabled ? void 0 : e.menuState === 0, onKeyDown: p3, onKeyUp: c, onClick: b };
  return $({ ourProps: A, theirProps: g, slot: m2, defaultTag: fe, name: "Menu.Button" });
});
var ye = "div";
var Ie = S2.RenderStrategy | S2.Static;
var ge = C(function(i, o3) {
  var R, S3;
  let [e, r2] = C3("Menu.Items"), u2 = y(e.itemsRef, o3), s4 = n(e.itemsRef), n2 = `headlessui-menu-items-${I()}`, p3 = p(), c = s3(), b = (() => c !== null ? c === p2.Open : e.menuState === 0)();
  (0, import_react.useEffect)(() => {
    let a2 = e.itemsRef.current;
    !a2 || e.menuState === 0 && a2 !== (s4 == null ? void 0 : s4.activeElement) && a2.focus({ preventScroll: true });
  }, [e.menuState, e.itemsRef, s4]), F2({ container: e.itemsRef.current, enabled: e.menuState === 0, accept(a2) {
    return a2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : a2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(a2) {
    a2.setAttribute("role", "none");
  } });
  let m2 = o((a2) => {
    var T2, y2;
    switch (p3.dispose(), a2.key) {
      case o2.Space:
        if (e.searchQuery !== "")
          return a2.preventDefault(), a2.stopPropagation(), r2({ type: 3, value: a2.key });
      case o2.Enter:
        if (a2.preventDefault(), a2.stopPropagation(), r2({ type: 1 }), e.activeItemIndex !== null) {
          let { dataRef: v } = e.items[e.activeItemIndex];
          (y2 = (T2 = v.current) == null ? void 0 : T2.domRef.current) == null || y2.click();
        }
        I2(e.buttonRef.current);
        break;
      case o2.ArrowDown:
        return a2.preventDefault(), a2.stopPropagation(), r2({ type: 2, focus: a.Next });
      case o2.ArrowUp:
        return a2.preventDefault(), a2.stopPropagation(), r2({ type: 2, focus: a.Previous });
      case o2.Home:
      case o2.PageUp:
        return a2.preventDefault(), a2.stopPropagation(), r2({ type: 2, focus: a.First });
      case o2.End:
      case o2.PageDown:
        return a2.preventDefault(), a2.stopPropagation(), r2({ type: 2, focus: a.Last });
      case o2.Escape:
        a2.preventDefault(), a2.stopPropagation(), r2({ type: 1 }), m().nextFrame(() => {
          var v;
          return (v = e.buttonRef.current) == null ? void 0 : v.focus({ preventScroll: true });
        });
        break;
      case o2.Tab:
        a2.preventDefault(), a2.stopPropagation(), r2({ type: 1 }), m().nextFrame(() => {
          D(e.buttonRef.current, a2.shiftKey ? T.Previous : T.Next);
        });
        break;
      default:
        a2.key.length === 1 && (r2({ type: 3, value: a2.key }), p3.setTimeout(() => r2({ type: 4 }), 350));
        break;
    }
  }), g = o((a2) => {
    switch (a2.key) {
      case o2.Space:
        a2.preventDefault();
        break;
    }
  }), A = (0, import_react.useMemo)(() => ({ open: e.menuState === 0 }), [e]), M = i, l = { "aria-activedescendant": e.activeItemIndex === null || (R = e.items[e.activeItemIndex]) == null ? void 0 : R.id, "aria-labelledby": (S3 = e.buttonRef.current) == null ? void 0 : S3.id, id: n2, onKeyDown: m2, onKeyUp: g, role: "menu", tabIndex: 0, ref: u2 };
  return $({ ourProps: l, theirProps: M, slot: A, defaultTag: ye, features: Ie, visible: b, name: "Menu.Items" });
});
var Me = import_react.Fragment;
var Re = C(function(i, o3) {
  let { disabled: e = false, ...r2 } = i, [u2, s4] = C3("Menu.Item"), n2 = `headlessui-menu-item-${I()}`, p3 = u2.activeItemIndex !== null ? u2.items[u2.activeItemIndex].id === n2 : false, c = (0, import_react.useRef)(null), b = y(o3, c);
  s(() => {
    if (u2.menuState !== 0 || !p3 || u2.activationTrigger === 0)
      return;
    let T2 = m();
    return T2.requestAnimationFrame(() => {
      var y2, v;
      (v = (y2 = c.current) == null ? void 0 : y2.scrollIntoView) == null || v.call(y2, { block: "nearest" });
    }), T2.dispose;
  }, [c, p3, u2.menuState, u2.activationTrigger, u2.activeItemIndex]);
  let m2 = (0, import_react.useRef)({ disabled: e, domRef: c });
  s(() => {
    m2.current.disabled = e;
  }, [m2, e]), s(() => {
    var T2, y2;
    m2.current.textValue = (y2 = (T2 = c.current) == null ? void 0 : T2.textContent) == null ? void 0 : y2.toLowerCase();
  }, [m2, c]), s(() => (s4({ type: 5, id: n2, dataRef: m2 }), () => s4({ type: 6, id: n2 })), [m2, n2]);
  let g = o(() => {
    s4({ type: 1 });
  }), A = o((T2) => {
    if (e)
      return T2.preventDefault();
    s4({ type: 1 }), I2(u2.buttonRef.current);
  }), M = o(() => {
    if (e)
      return s4({ type: 2, focus: a.Nothing });
    s4({ type: 2, focus: a.Specific, id: n2 });
  }), l = o(() => {
    e || p3 || s4({ type: 2, focus: a.Specific, id: n2, trigger: 0 });
  }), R = o(() => {
    e || !p3 || s4({ type: 2, focus: a.Nothing });
  }), S3 = (0, import_react.useMemo)(() => ({ active: p3, disabled: e, close: g }), [p3, e, g]);
  return $({ ourProps: { id: n2, ref: b, role: "menuitem", tabIndex: e === true ? void 0 : -1, "aria-disabled": e === true ? true : void 0, disabled: void 0, onClick: A, onFocus: M, onPointerMove: l, onMouseMove: l, onPointerLeave: R, onMouseLeave: R }, theirProps: r2, slot: S3, defaultTag: Me, name: "Menu.Item" });
});
var qe = Object.assign(me, { Button: Te, Items: ge, Item: Re });

// app/core/ui/Dropdown.tsx
var import_react2 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Dropdown = ({ items, button }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe, {
    as: "div",
    className: "DropdownMenu",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "DropdownMenuButtonContainer",
        children: button
      }, void 0, false, {
        fileName: "app/core/ui/Dropdown.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(We, {
        as: import_react2.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Items, {
          className: "DropdownMenuItemsContainer",
          children: items.map((item, index) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Fragment, {
              children: item
            }, index, false, {
              fileName: "app/core/ui/Dropdown.tsx",
              lineNumber: 36,
              columnNumber: 20
            }, this);
          })
        }, void 0, false, {
          fileName: "app/core/ui/Dropdown.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/core/ui/Dropdown.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/core/ui/Dropdown.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};
function Divider() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {
    className: "DropdownDivider"
  }, void 0, false, {
    fileName: "app/core/ui/Dropdown.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
function Item({ children, className, ...props }) {
  const isStaticItem = !props.onClick && !props.href;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Item, {
    as: "div",
    children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: `${active ? "DropdownActiveItem" : "text-gray-900"} DropdownItem`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        block: true,
        href: props.href,
        onClick: props.onClick,
        color: "custom",
        size: "custom",
        className: (0, import_classnames.default)(`justify-start`, className, {
          [`static`]: isStaticItem
        }),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex w-full flex-1 px-5 py-3 font-normal",
          children
        }, void 0, false, {
          fileName: "app/core/ui/Dropdown.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: "app/core/ui/Dropdown.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: "app/core/ui/Dropdown.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/core/ui/Dropdown.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
Dropdown.Divider = Divider;
Dropdown.Item = Item;
var Dropdown_default = Dropdown;

export {
  qe,
  Dropdown_default,
  ProfileAvatar_default
};
//# sourceMappingURL=/build/_shared/chunk-TX2LS7YD.js.map
