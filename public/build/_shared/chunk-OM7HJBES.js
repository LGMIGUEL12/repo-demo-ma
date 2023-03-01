import {
  PhoneNumberCredentialForm_default
} from "/build/_shared/chunk-7FR3D44R.js";
import {
  getFirebaseErrorCode
} from "/build/_shared/chunk-2LLES6IO.js";
import {
  AuthErrorMessage
} from "/build/_shared/chunk-TCWBHGJW.js";
import {
  useRequestState
} from "/build/_shared/chunk-NMWHWOJM.js";
import {
  _t
} from "/build/_shared/chunk-OQCGFTRH.js";
import {
  Alert_default
} from "/build/_shared/chunk-ELS43MJ3.js";
import {
  TextField_default
} from "/build/_shared/chunk-T4OLHNMO.js";
import {
  kt
} from "/build/_shared/chunk-CXJ2SC35.js";
import {
  Button_default,
  If_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import {
  Trans,
  init_es,
  useTranslation
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  configuration_default
} from "/build/_shared/chunk-WULCHIKQ.js";
import {
  sendSignInLinkToEmail
} from "/build/_shared/chunk-A4KF3ELC.js";
import {
  init_esm
} from "/build/_shared/chunk-EGSMFI33.js";
import {
  useNavigate
} from "/build/_shared/chunk-TUM7Q574.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/auth/PhoneNumberSignInContainer.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var PhoneNumberSignInContainer = ({ onSignIn }) => {
  const onSuccess = (0, import_react.useCallback)(
    async (credential) => {
      const idToken = await credential.user.getIdToken();
      onSignIn(idToken);
    },
    [onSignIn]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneNumberCredentialForm_default, {
    action: "signIn",
    onSuccess
  }, void 0, false, {
    fileName: "app/components/auth/PhoneNumberSignInContainer.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
};
var PhoneNumberSignInContainer_default = PhoneNumberSignInContainer;

// app/components/auth/EmailLinkAuth.tsx
init_es();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var EmailLinkAuth = () => {
  const auth = kt();
  const { t } = useTranslation();
  const { state, setLoading, setData, setError } = useRequestState();
  const onSubmit = (0, import_react2.useCallback)(
    async (event) => {
      event.preventDefault();
      const target = event.currentTarget;
      const data = new FormData(target);
      const email = data.get("email");
      const url = getAuthUrl();
      setLoading(true);
      const settings = {
        url,
        handleCodeInApp: true
      };
      const promise = sendSignInLinkToEmail(auth, email, settings).then(() => {
        storeEmailInStorage(email);
        setData();
      }).catch((error) => {
        setError(error);
        throw getFirebaseErrorCode(error);
      });
      await _t.promise(promise, {
        loading: t("auth:sendingEmailLink"),
        success: t(`auth:sendLinkSuccessToast`),
        error: t(`auth:errors.link`)
      });
    },
    [auth, t, setData, setError, setLoading]
  );
  if (state.success) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
      type: "success",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: "auth:sendLinkSuccess"
      }, void 0, false, {
        fileName: "app/components/auth/EmailLinkAuth.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/auth/EmailLinkAuth.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    className: "w-full",
    onSubmit,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "common:emailAddress"
                }, void 0, false, {
                  fileName: "app/components/auth/EmailLinkAuth.tsx",
                  lineNumber: 73,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                  "data-cy": "email-input",
                  required: true,
                  type: "email",
                  placeholder: "your@email.com",
                  name: "email"
                }, void 0, false, {
                  fileName: "app/components/auth/EmailLinkAuth.tsx",
                  lineNumber: 75,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/auth/EmailLinkAuth.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/auth/EmailLinkAuth.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            size: "large",
            loading: state.loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: state.loading,
              fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:sendEmailLink"
              }, void 0, false, {
                fileName: "app/components/auth/EmailLinkAuth.tsx",
                lineNumber: 88,
                columnNumber: 23
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:sendingEmailLink"
              }, void 0, false, {
                fileName: "app/components/auth/EmailLinkAuth.tsx",
                lineNumber: 90,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/auth/EmailLinkAuth.tsx",
              lineNumber: 86,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/auth/EmailLinkAuth.tsx",
            lineNumber: 85,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/auth/EmailLinkAuth.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: state.error,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
          type: "error",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "auth:errors.link"
          }, void 0, false, {
            fileName: "app/components/auth/EmailLinkAuth.tsx",
            lineNumber: 97,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/auth/EmailLinkAuth.tsx",
          lineNumber: 96,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/auth/EmailLinkAuth.tsx",
        lineNumber: 95,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/auth/EmailLinkAuth.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
};
function getAuthUrl() {
  const origin = window.location.origin;
  const path = configuration_default.paths.emailLinkSignIn;
  return [origin, path].join("");
}
function storeEmailInStorage(email) {
  window.localStorage.setItem("emailForSignIn", email);
}
var EmailLinkAuth_default = EmailLinkAuth;

// app/components/auth/AuthCatchBoundary.tsx
init_esm();
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AuthCatchBoundary() {
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
        error: "generic"
      }, void 0, false, {
        fileName: "app/components/auth/AuthCatchBoundary.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        onClick: () => navigate("."),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "common:retry",
          default: "Retry"
        }, void 0, false, {
          fileName: "app/components/auth/AuthCatchBoundary.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/auth/AuthCatchBoundary.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/auth/AuthCatchBoundary.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var AuthCatchBoundary_default = AuthCatchBoundary;

export {
  PhoneNumberSignInContainer_default,
  EmailLinkAuth_default,
  AuthCatchBoundary_default
};
//# sourceMappingURL=/build/_shared/chunk-OM7HJBES.js.map
