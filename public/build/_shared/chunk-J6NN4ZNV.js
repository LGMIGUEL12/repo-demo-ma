import {
  useUserSession
} from "/build/_shared/chunk-KHW4CDLX.js";
import {
  Oi,
  vi
} from "/build/_shared/chunk-QTKR7OWQ.js";
import {
  configuration_default
} from "/build/_shared/chunk-WULCHIKQ.js";
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

// app/core/firebase/hooks/use-track-signed-in-user.ts
var import_react = __toESM(require_react());
function useTrackSignedInUser() {
  const user = useUserSession();
  const userId = user?.auth?.uid;
  (0, import_react.useEffect)(() => {
    if (!is_browser_default()) {
      return;
    }
    void (async () => {
      const { getAnalytics, setUserId } = await import("/build/_shared/index.esm-2VCPUTGR.js");
      if (userId) {
        setUserId(getAnalytics(), userId);
      }
    })();
  }, [userId]);
}

// app/core/firebase/hooks/use-analytics-tracking.ts
function useAnalyticsTracking() {
  useTrackSignedInUser();
}

// app/core/firebase/components/FirebaseAnalyticsProvider.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var FirebaseAnalyticsProvider = ({ children }) => {
  const isEmulator = configuration_default.emulator;
  if (isEmulator || !is_browser_default()) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children
    }, void 0, false, {
      fileName: "app/core/firebase/components/FirebaseAnalyticsProvider.tsx",
      lineNumber: 11,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BrowserFirebaseAnalyticsProvider, {
    children
  }, void 0, false, {
    fileName: "app/core/firebase/components/FirebaseAnalyticsProvider.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};
function BrowserFirebaseAnalyticsProvider(props) {
  const { data: sdk, status } = Oi(async (app) => {
    const { getAnalytics } = await import("/build/_shared/index.esm-2VCPUTGR.js");
    return getAnalytics(app);
  });
  if (status !== "success") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: props.children
    }, void 0, false, {
      fileName: "app/core/firebase/components/FirebaseAnalyticsProvider.tsx",
      lineNumber: 29,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(vi, {
    sdk,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnalyticsTrackingEventsProvider, {
      children: props.children
    }, void 0, false, {
      fileName: "app/core/firebase/components/FirebaseAnalyticsProvider.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/core/firebase/components/FirebaseAnalyticsProvider.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
function AnalyticsTrackingEventsProvider({
  children
}) {
  useAnalyticsTracking();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children
  }, void 0, false, {
    fileName: "app/core/firebase/components/FirebaseAnalyticsProvider.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
var FirebaseAnalyticsProvider_default = FirebaseAnalyticsProvider;

export {
  FirebaseAnalyticsProvider_default
};
//# sourceMappingURL=/build/_shared/chunk-J6NN4ZNV.js.map
