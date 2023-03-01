import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QEOXWCFK.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/ui/ClientOnly.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ClientOnly({ children }) {
  let [mounted, setMounted] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setMounted(true);
  }, []);
  return mounted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, {
    fallback: "",
    children
  }, void 0, false, {
    fileName: "app/core/ui/ClientOnly.tsx",
    lineNumber: 11,
    columnNumber: 20
  }, this) : null;
}
var ClientOnly_default = ClientOnly;

export {
  ClientOnly_default
};
//# sourceMappingURL=/build/_shared/chunk-7RVK24SM.js.map
