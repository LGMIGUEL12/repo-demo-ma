import {
  getFirebaseErrorCode
} from "/build/_shared/chunk-2LLES6IO.js";
import {
  AuthErrorMessage
} from "/build/_shared/chunk-TXV55N2L.js";
import {
  useRequestState
} from "/build/_shared/chunk-NMWHWOJM.js";
import {
  TextField_default
} from "/build/_shared/chunk-XTL7KJXM.js";
import "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import {
  Alert_default
} from "/build/_shared/chunk-DUR62BEZ.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import {
  kt
} from "/build/_shared/chunk-CXJ2SC35.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import "/build/_shared/chunk-VCZGRDVP.js";
import "/build/_shared/chunk-4PMGBJWS.js";
import {
  Heading_default
} from "/build/_shared/chunk-ISSCYSF5.js";
import {
  Button_default,
  If_default
} from "/build/_shared/chunk-JLCRG65W.js";
import "/build/_shared/chunk-DN742LHR.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  configuration_default
} from "/build/_shared/chunk-WULCHIKQ.js";
import "/build/_shared/chunk-WIOFJORR.js";
import {
  sendPasswordResetEmail
} from "/build/_shared/chunk-A4KF3ELC.js";
import "/build/_shared/chunk-BCUDKLQK.js";
import {
  Link,
  init_esm,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QEOXWCFK.js";
import "/build/_shared/chunk-TUM7Q574.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/auth/password-reset.tsx
var import_react = __toESM(require_react());
init_esm();
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Password Reset"
  };
};
function PasswordResetPage() {
  const auth = kt();
  const { state, setError, setData, setLoading } = useRequestState();
  const onSubmit = (0, import_react.useCallback)(
    async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = data.get("email");
      setLoading(true);
      try {
        const returnUrl = getReturnUrl();
        await sendPasswordResetEmail(auth, email, {
          url: returnUrl
        });
        setData(true);
      } catch (e) {
        setError(getFirebaseErrorCode(e));
      }
    },
    [auth, setData, setError, setLoading]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
          type: 4,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "auth:passwordResetLabel"
          }, void 0, false, {
            fileName: "app/routes/auth/password-reset.tsx",
            lineNumber: 62,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/auth/password-reset.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/auth/password-reset.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: state.success,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
              type: "success",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:passwordResetSuccessMessage"
              }, void 0, false, {
                fileName: "app/routes/auth/password-reset.tsx",
                lineNumber: 69,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/auth/password-reset.tsx",
              lineNumber: 68,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/auth/password-reset.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: !state.data,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                onSubmit: (e) => void onSubmit(e),
                className: "container mx-auto flex justify-center",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex-col space-y-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "text-sm text-gray-700 dark:text-gray-400",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                          i18nKey: "auth:passwordResetSubheading"
                        }, void 0, false, {
                          fileName: "app/routes/auth/password-reset.tsx",
                          lineNumber: 82,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/auth/password-reset.tsx",
                        lineNumber: 81,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/auth/password-reset.tsx",
                      lineNumber: 80,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                            i18nKey: "common:emailAddress"
                          }, void 0, false, {
                            fileName: "app/routes/auth/password-reset.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                            name: "email",
                            required: true,
                            type: "email",
                            placeholder: "your@email.com"
                          }, void 0, false, {
                            fileName: "app/routes/auth/password-reset.tsx",
                            lineNumber: 90,
                            columnNumber: 21
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/auth/password-reset.tsx",
                        lineNumber: 87,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/auth/password-reset.tsx",
                      lineNumber: 86,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                      condition: state.error,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
                        error: state.error
                      }, void 0, false, {
                        fileName: "app/routes/auth/password-reset.tsx",
                        lineNumber: 100,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/auth/password-reset.tsx",
                      lineNumber: 99,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      loading: state.loading,
                      type: "submit",
                      size: "large",
                      block: true,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                        i18nKey: "auth:passwordResetLabel"
                      }, void 0, false, {
                        fileName: "app/routes/auth/password-reset.tsx",
                        lineNumber: 109,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/auth/password-reset.tsx",
                      lineNumber: 103,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/auth/password-reset.tsx",
                  lineNumber: 79,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/routes/auth/password-reset.tsx",
                lineNumber: 75,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/auth/password-reset.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/auth/password-reset.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex justify-center text-xs",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "flex space-x-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "auth:passwordRecoveredQuestion"
                  }, void 0, false, {
                    fileName: "app/routes/auth/password-reset.tsx",
                    lineNumber: 119,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/auth/password-reset.tsx",
                  lineNumber: 118,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                  className: "text-primary-800 hover:underline dark:text-primary-500",
                  to: configuration_default.paths.signIn,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "auth:signIn"
                  }, void 0, false, {
                    fileName: "app/routes/auth/password-reset.tsx",
                    lineNumber: 128,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/auth/password-reset.tsx",
                  lineNumber: 122,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/auth/password-reset.tsx",
              lineNumber: 117,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/auth/password-reset.tsx",
            lineNumber: 116,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/auth/password-reset.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/auth/password-reset.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
var password_reset_default = PasswordResetPage;
function getReturnUrl() {
  return `${window.location.origin}${configuration_default.paths.signIn}`;
}
export {
  password_reset_default as default,
  meta
};
//# sourceMappingURL=/build/routes/auth/password-reset-E7G43OSL.js.map
