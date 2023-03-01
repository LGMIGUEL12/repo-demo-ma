import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/firebase/hooks/use-get-csrf-token.ts
var import_react = __toESM(require_react());
function useGetCsrfToken() {
  return (0, import_react.useCallback)(() => {
    const element = document.querySelector('meta[name="csrf-token"]');
    return element?.getAttribute("content");
  }, []);
}

export {
  useGetCsrfToken
};
//# sourceMappingURL=/build/_shared/chunk-JDRCLJ2Q.js.map
