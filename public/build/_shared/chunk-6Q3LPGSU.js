import {
  kt,
  qr
} from "/build/_shared/chunk-CXJ2SC35.js";
import {
  is_browser_default
} from "/build/_shared/chunk-WIOFJORR.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/firebase/components/GuardedPage.tsx
var import_react2 = __toESM(require_react());

// app/core/hooks/use-clear-firestore-cache.ts
var import_react = __toESM(require_react());
function useClearFirestoreCache() {
  return (0, import_react.useCallback)(() => {
    const reactFirePreloadedObservables = globalThis["_reactFirePreloadedObservables"];
    if (reactFirePreloadedObservables) {
      Array.from(reactFirePreloadedObservables.keys()).filter((key) => key.includes("firestore")).forEach((key) => reactFirePreloadedObservables.delete(key));
    }
  }, []);
}
var use_clear_firestore_cache_default = useClearFirestoreCache;

// app/core/firebase/components/GuardedPage.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var AuthRedirectListener = ({ children, whenSignedOut }) => {
  const auth = kt();
  const { status } = qr();
  const redirectUserAway = useRedirectUserAway();
  const clearCache = use_clear_firestore_cache_default();
  const isSignInCheckDone = status === "success";
  (0, import_react2.useEffect)(() => {
    if (!isSignInCheckDone) {
      return;
    }
    const listener = auth.onAuthStateChanged((user) => {
      const shouldLogOut = !user && whenSignedOut;
      if (!user) {
        clearCache();
      }
      if (shouldLogOut) {
        return redirectUserAway(whenSignedOut);
      }
    });
    return () => listener();
  }, [
    auth,
    clearCache,
    isSignInCheckDone,
    redirectUserAway,
    status,
    whenSignedOut
  ]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children
  }, void 0, false, {
    fileName: "app/core/firebase/components/GuardedPage.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
};
function GuardedPage({
  children,
  whenSignedOut
}) {
  const shouldActivateListener = is_browser_default();
  if (!shouldActivateListener) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children
    }, void 0, false, {
      fileName: "app/core/firebase/components/GuardedPage.tsx",
      lineNumber: 63,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthRedirectListener, {
    whenSignedOut,
    children
  }, void 0, false, {
    fileName: "app/core/firebase/components/GuardedPage.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
function useRedirectUserAway() {
  return (0, import_react2.useCallback)((path) => {
    const currentPath = window.location.pathname;
    const isNotCurrentPage = currentPath !== path;
    if (isNotCurrentPage) {
      window.location.assign(path);
    }
  }, []);
}

export {
  GuardedPage
};
//# sourceMappingURL=/build/_shared/chunk-6Q3LPGSU.js.map
