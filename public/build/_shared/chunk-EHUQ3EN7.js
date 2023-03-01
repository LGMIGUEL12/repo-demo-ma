import {
  ClipboardDocumentIcon_default,
  Cog8ToothIcon_default,
  PhotoIcon_default,
  Squares2X2Icon_default
} from "/build/_shared/chunk-7KHFEMFW.js";
import {
  configuration_default
} from "/build/_shared/chunk-WULCHIKQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/navigation.config.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var NAVIGATION_CONFIG = {
  items: [
    {
      label: "common:dashboardTabLabel",
      path: configuration_default.paths.appHome,
      Icon: ({ className }) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Squares2X2Icon_default, {
          className
        }, void 0, false, {
          fileName: "app/navigation.config.tsx",
          lineNumber: 10,
          columnNumber: 16
        }, this);
      }
    },
    {
      label: "common:settingsTabLabel",
      path: "/settings",
      Icon: ({ className }) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cog8ToothIcon_default, {
          className
        }, void 0, false, {
          fileName: "app/navigation.config.tsx",
          lineNumber: 17,
          columnNumber: 16
        }, this);
      }
    },
    {
      label: "common:tasksTabLabel",
      path: "/tasks",
      Icon: ({ className }) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClipboardDocumentIcon_default, {
          className
        }, void 0, false, {
          fileName: "app/navigation.config.tsx",
          lineNumber: 24,
          columnNumber: 16
        }, this);
      }
    },
    {
      label: "common:photosTabLabel",
      path: "/photos",
      Icon: ({ className }) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhotoIcon_default, {
          className
        }, void 0, false, {
          fileName: "app/navigation.config.tsx",
          lineNumber: 31,
          columnNumber: 16
        }, this);
      }
    }
  ]
};
var navigation_config_default = NAVIGATION_CONFIG;

export {
  navigation_config_default
};
//# sourceMappingURL=/build/_shared/chunk-EHUQ3EN7.js.map
