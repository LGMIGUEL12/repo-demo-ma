import {
  useCurrentUserRole
} from "/build/_shared/chunk-OJUH3UKO.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QEOXWCFK.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/IfHasPermissions.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function IfHasPermissions({
  children,
  condition
}) {
  const currentUserRole = useCurrentUserRole();
  if (currentUserRole === void 0 || !condition(currentUserRole)) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children
  }, void 0, false, {
    fileName: "app/components/IfHasPermissions.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
var IfHasPermissions_default = IfHasPermissions;

export {
  IfHasPermissions_default
};
//# sourceMappingURL=/build/_shared/chunk-GZZK2REQ.js.map
