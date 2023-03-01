import {
  LogoImage_default
} from "/build/_shared/chunk-GZQSVEA4.js";
import {
  Lr,
  di,
  kt,
  yt
} from "/build/_shared/chunk-CXJ2SC35.js";
import {
  is_browser_default
} from "/build/_shared/chunk-WIOFJORR.js";
import {
  connectAuthEmulator,
  inMemoryPersistence,
  indexedDBLocalPersistence,
  initializeAuth
} from "/build/_shared/chunk-A4KF3ELC.js";
import {
  Link,
  init_esm,
  useFetcher
} from "/build/_shared/chunk-EGSMFI33.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/ui/Logo/Logo.tsx
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Logo = ({
  href,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
    to: href ?? "/",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoImage_default, {
      className
    }, void 0, false, {
      fileName: "app/core/ui/Logo/Logo.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/core/ui/Logo/Logo.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};
var Logo_default = Logo;

// app/core/firebase/components/FirebaseAppShell.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FirebaseAppShell({
  children,
  config
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lr, {
    firebaseConfig: config,
    children
  }, void 0, false, {
    fileName: "app/core/firebase/components/FirebaseAppShell.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var FirebaseAppShell_default = FirebaseAppShell;

// app/core/firebase/components/FirebaseAuthProvider.tsx
var import_react4 = __toESM(require_react());

// app/core/hooks/use-destroy-session.ts
init_esm();
var import_react3 = __toESM(require_react());
function useDestroySession() {
  const fetcher = useFetcher();
  return (0, import_react3.useCallback)(() => {
    fetcher.submit(
      {},
      {
        method: "post",
        action: "/auth/sign-out"
      }
    );
    return fetcher;
  }, [fetcher]);
}
var use_destroy_session_default = useDestroySession;

// app/core/firebase/components/FirebaseAuthProvider.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var FirebaseAuthStateListener = ({ children, onAuthStateChange }) => {
  const auth = kt();
  (0, import_react4.useEffect)(() => {
    const subscription = auth.onIdTokenChanged(onAuthStateChange);
    return () => subscription();
  }, [auth, onAuthStateChange]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children
  }, void 0, false, {
    fileName: "app/core/firebase/components/FirebaseAuthProvider.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
function FirebaseAuthProvider({
  userSession,
  setUserSession,
  children,
  useEmulator
}) {
  const app = yt();
  const signOut = use_destroy_session_default();
  const userRef = (0, import_react4.useRef)();
  const persistence = (0, import_react4.useMemo)(() => {
    return is_browser_default() ? indexedDBLocalPersistence : inMemoryPersistence;
  }, []);
  const sdk = (0, import_react4.useMemo)(
    () => initializeAuth(app, { persistence }),
    [app, persistence]
  );
  const shouldConnectEmulator = useEmulator && !("emulator" in sdk.config);
  const onAuthStateChanged = (0, import_react4.useCallback)(
    async (user) => {
      if (user) {
        const session = {
          auth: {
            ...user,
            customClaims: {},
            disabled: userSession?.auth?.disabled ?? false,
            multiFactor: userSession?.auth?.multiFactor ?? []
          },
          data: userSession?.data
        };
        userRef.current = user;
        return setUserSession(session);
      }
      if (userRef.current) {
        try {
          signOut();
        } finally {
          setUserSession(void 0);
          userRef.current = void 0;
        }
      }
    },
    [
      setUserSession,
      signOut,
      userSession?.auth?.disabled,
      userSession?.auth?.multiFactor,
      userSession?.data
    ]
  );
  (0, import_react4.useEffect)(() => {
    if (shouldConnectEmulator) {
      const host = getAuthEmulatorHost();
      connectAuthEmulator(sdk, host);
    }
  }, [sdk, shouldConnectEmulator]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(di, {
    sdk,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAuthStateListener, {
      onAuthStateChange: onAuthStateChanged,
      children
    }, void 0, false, {
      fileName: "app/core/firebase/components/FirebaseAuthProvider.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/core/firebase/components/FirebaseAuthProvider.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}
function getAuthEmulatorHost() {
  const host = "localhost";
  const port = 9099;
  return ["http://", host, ":", port].join("");
}

export {
  Logo_default,
  FirebaseAppShell_default,
  FirebaseAuthProvider
};
//# sourceMappingURL=/build/_shared/chunk-QUBT24CD.js.map
