import {
  require_classnames
} from "/build/_shared/chunk-DN742LHR.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  NavLink,
  init_esm,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QEOXWCFK.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/ui/Navigation/NavigationItem.tsx
init_esm();
init_es();
var import_classnames = __toESM(require_classnames());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var NavigationMenuItem = ({ link, className, end, disabled }) => {
  const label = link.label;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
    end,
    className: (props) => {
      return (0, import_classnames.default)(`NavigationItem`, className, {
        [`NavigationItemActive`]: props.isActive,
        [`NavigationItemNotActive`]: !props.isActive
      });
    },
    "aria-disabled": disabled,
    to: disabled ? "" : link.path,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: label,
      defaults: label
    }, void 0, false, {
      fileName: "app/core/ui/Navigation/NavigationItem.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/core/ui/Navigation/NavigationItem.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};
var NavigationItem_default = NavigationMenuItem;

// app/core/ui/Navigation/NavigationMenu.tsx
var import_classnames2 = __toESM(require_classnames());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NavigationMenu(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
    className: (0, import_classnames2.default)(`NavigationMenu`, {
      BorderedNavigationMenu: "bordered" in props && props.bordered,
      SecondaryNavigationMenu: "secondary" in props && props.secondary,
      VerticalNavigationMenu: props.vertical
    }),
    children: props.children
  }, void 0, false, {
    fileName: "app/core/ui/Navigation/NavigationMenu.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var NavigationMenu_default = NavigationMenu;

export {
  NavigationItem_default,
  NavigationMenu_default
};
//# sourceMappingURL=/build/_shared/chunk-4NOTLPFB.js.map
