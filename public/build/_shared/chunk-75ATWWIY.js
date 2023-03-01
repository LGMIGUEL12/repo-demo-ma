import {
  IconButton_default
} from "/build/_shared/chunk-MEFOEGYP.js";
import {
  CheckCircleIcon_default,
  ExclamationCircleIcon_default,
  InformationCircleIcon_default,
  ShieldExclamationIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-7KHFEMFW.js";
import {
  Heading_default
} from "/build/_shared/chunk-54TVJDMF.js";
import {
  If_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/ui/Alert.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var colorClassNames = {
  success: `AlertSuccess`,
  error: `AlertError`,
  warn: `AlertWarn`,
  info: `AlertInfo`
};
var icons = {
  success: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, {
    className: "AlertIcon h-6"
  }, void 0, false, {
    fileName: "app/core/ui/Alert.tsx",
    lineNumber: 23,
    columnNumber: 18
  }, this),
  error: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationCircleIcon_default, {
    className: "AlertIcon h-6"
  }, void 0, false, {
    fileName: "app/core/ui/Alert.tsx",
    lineNumber: 24,
    columnNumber: 16
  }, this),
  warn: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldExclamationIcon_default, {
    className: "AlertIcon h-6"
  }, void 0, false, {
    fileName: "app/core/ui/Alert.tsx",
    lineNumber: 25,
    columnNumber: 15
  }, this),
  info: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InformationCircleIcon_default, {
    className: "AlertIcon h-6"
  }, void 0, false, {
    fileName: "app/core/ui/Alert.tsx",
    lineNumber: 26,
    columnNumber: 15
  }, this)
};
var Alert = ({ children, type, useCloseButton, className }) => {
  const [visible, setVisible] = (0, import_react.useState)(true);
  const Icon = (0, import_react.useMemo)(() => icons[type](), [type]);
  if (!visible) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `Alert ${colorClassNames[type]} ${className ?? ""}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "flex items-center space-x-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            children: Icon
          }, void 0, false, {
            fileName: "app/core/ui/Alert.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            children
          }, void 0, false, {
            fileName: "app/core/ui/Alert.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/core/ui/Alert.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: useCloseButton ?? false,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
          className: "dark:hover:bg-transparent",
          onClick: () => setVisible(false),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, {
            className: "h-6"
          }, void 0, false, {
            fileName: "app/core/ui/Alert.tsx",
            lineNumber: 55,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/core/ui/Alert.tsx",
          lineNumber: 51,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/core/ui/Alert.tsx",
        lineNumber: 50,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/core/ui/Alert.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
};
function AlertHeading({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mb-2",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
      type: 4,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "font-bold",
        children
      }, void 0, false, {
        fileName: "app/core/ui/Alert.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/core/ui/Alert.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/core/ui/Alert.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}
Alert.Heading = AlertHeading;
var Alert_default = Alert;

export {
  Alert_default
};
//# sourceMappingURL=/build/_shared/chunk-75ATWWIY.js.map
