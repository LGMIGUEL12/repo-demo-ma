import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/ui/Badge.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var colorClasses = {
  normal: `ColorNormal`,
  success: `ColorSuccess`,
  custom: ""
};
var sizeClasses = {
  normal: `SizeNormal`,
  small: `SizeSmall`
};
function getColorClasses(color) {
  return colorClasses[color || `normal`];
}
function getSizeClasses(size) {
  return sizeClasses[size || `normal`];
}
var Badge = ({ children, color, size, className }) => {
  const colorClasses2 = getColorClasses(color);
  const sizeClasses2 = getSizeClasses(size);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `Badge ${colorClasses2} ${sizeClasses2} ${className ?? ""}`,
    children
  }, void 0, false, {
    fileName: "app/core/ui/Badge.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
};
var Badge_default = Badge;

export {
  Badge_default
};
//# sourceMappingURL=/build/_shared/chunk-DAAZXNN4.js.map
