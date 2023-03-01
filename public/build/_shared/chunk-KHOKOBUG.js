import {
  Alert_default
} from "/build/_shared/chunk-7ROR4Z2A.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/auth/AuthErrorMessage.tsx
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AuthErrorMessage({ error }) {
  if (!error) {
    return null;
  }
  const DefaultError = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
    i18nKey: "auth:errors.default"
  }, void 0, false, {
    fileName: "app/components/auth/AuthErrorMessage.tsx",
    lineNumber: 16,
    columnNumber: 24
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    className: "w-full",
    type: "error",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
      className: "text-sm font-semibold",
      "data-cy": "auth-error-message",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: `auth:errors.${error}`,
        defaults: "<DefaultError />",
        components: { DefaultError }
      }, void 0, false, {
        fileName: "app/components/auth/AuthErrorMessage.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/auth/AuthErrorMessage.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/auth/AuthErrorMessage.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

export {
  AuthErrorMessage
};
//# sourceMappingURL=/build/_shared/chunk-KHOKOBUG.js.map
