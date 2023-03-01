import {
  UserIcon_default
} from "/build/_shared/chunk-4PMGBJWS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/FallbackUserAvatar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var FallbackUserAvatar = ({ text }) => {
  if (!text) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: `FallbackUserAvatar`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserIcon_default, {
        className: "h-5"
      }, void 0, false, {
        fileName: "app/components/FallbackUserAvatar.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/FallbackUserAvatar.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
    className: `FallbackUserAvatar`,
    children: text[0]
  }, void 0, false, {
    fileName: "app/components/FallbackUserAvatar.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
};
var FallbackUserAvatar_default = FallbackUserAvatar;

export {
  FallbackUserAvatar_default
};
//# sourceMappingURL=/build/_shared/chunk-FHC7QUPJ.js.map
