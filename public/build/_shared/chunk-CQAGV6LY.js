import {
  Heading_default
} from "/build/_shared/chunk-ISSCYSF5.js";
import {
  If_default
} from "/build/_shared/chunk-JLCRG65W.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QEOXWCFK.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/settings/SettingsTile.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var SettingsTile = ({ children, heading, subHeading }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-1.5",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: heading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
              type: 3,
              children: heading
            }, void 0, false, {
              fileName: "app/components/settings/SettingsTile.tsx",
              lineNumber: 12,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/settings/SettingsTile.tsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: subHeading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "text-xl font-medium text-gray-500 dark:text-gray-400",
              children: subHeading
            }, void 0, false, {
              fileName: "app/components/settings/SettingsTile.tsx",
              lineNumber: 16,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/settings/SettingsTile.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/settings/SettingsTile.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "rounded-lg border border-gray-100 p-2.5 dark:border-black-300 lg:p-6",
        children
      }, void 0, false, {
        fileName: "app/components/settings/SettingsTile.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/settings/SettingsTile.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};
var SettingsTile_default = SettingsTile;

export {
  SettingsTile_default
};
//# sourceMappingURL=/build/_shared/chunk-CQAGV6LY.js.map
