import {
  FirebaseAppShell_default,
  FirebaseAuthProvider,
  Logo_default
} from "/build/_shared/chunk-PGVJYH6E.js";
import {
  firebase_config_default
} from "/build/_shared/chunk-MZJK6QBW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/auth/AuthPageShell.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AuthPageShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAppShell_default, {
    config: firebase_config_default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAuthProvider, {
      useEmulator: firebase_config_default.emulator,
      userSession: void 0,
      setUserSession: () => ({}),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex h-screen flex-col items-center justify-center space-y-8 lg:bg-gray-50 dark:lg:bg-black-700",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {}, void 0, false, {
              fileName: "app/components/auth/AuthPageShell.tsx",
              lineNumber: 21,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/auth/AuthPageShell.tsx",
            lineNumber: 20,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `flex w-11/12 max-w-xl flex-col items-center space-y-5 rounded-xl border border-transparent bg-white p-8 dark:bg-black-600 dark:bg-black-500 sm:border-gray-100 dark:sm:border-black-500 md:w-8/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12`,
            children
          }, void 0, false, {
            fileName: "app/components/auth/AuthPageShell.tsx",
            lineNumber: 24,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/auth/AuthPageShell.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/auth/AuthPageShell.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/auth/AuthPageShell.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var AuthPageShell_default = AuthPageShell;

export {
  AuthPageShell_default
};
//# sourceMappingURL=/build/_shared/chunk-3PN4DVM6.js.map
