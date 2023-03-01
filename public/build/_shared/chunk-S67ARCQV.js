import {
  use_recaptcha_verifier_default
} from "/build/_shared/chunk-VCIE6KEO.js";
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
  _t
} from "/build/_shared/chunk-OQCGFTRH.js";
import {
  TextField_default
} from "/build/_shared/chunk-XTL7KJXM.js";
import {
  kt
} from "/build/_shared/chunk-CXJ2SC35.js";
import {
  Button_default,
  If_default
} from "/build/_shared/chunk-JLCRG65W.js";
import {
  Trans,
  init_es,
  useTranslation
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QEOXWCFK.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/auth/PhoneNumberCredentialForm.tsx
var import_react = __toESM(require_react());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var RECAPTCHA_ACTION_BUTTON_ID = "phone-recaptcha-button";
var PhoneNumberCredentialForm = ({ action, onSuccess }) => {
  const { t } = useTranslation();
  const verifyPhoneNumberState = useRequestState();
  const verifyVerificationCodeState = useRequestState();
  const getPhoneNumberSignInMethod = useGetPhoneNumberSignInMethod(action);
  const onLinkPhoneNumberSubmit = (0, import_react.useCallback)(
    async (event) => {
      event.preventDefault();
      verifyPhoneNumberState.setLoading(true);
      const data = new FormData(event.currentTarget);
      const phoneNumber = data.get("phoneNumber");
      const promise = getPhoneNumberSignInMethod(phoneNumber).then((confirmationResult) => {
        verifyPhoneNumberState.setData(confirmationResult);
      }).catch((error) => {
        verifyPhoneNumberState.setError(error);
        throw getFirebaseErrorCode(error);
      });
      await _t.promise(promise, {
        loading: t(`profile:verifyPhoneNumberLoading`),
        success: t(`profile:verifyPhoneNumberSuccess`),
        error: t(`profile:verifyPhoneNumberError`)
      });
    },
    [verifyPhoneNumberState, getPhoneNumberSignInMethod, t]
  );
  const onVerificationCodeSubmit = (0, import_react.useCallback)(
    async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const verificationCode = data.get("verificationCode");
      const confirmationResult = verifyPhoneNumberState.state.data;
      if (!confirmationResult) {
        return;
      }
      verifyVerificationCodeState.setLoading(true);
      const promise = confirmationResult.confirm(verificationCode).then(onSuccess).catch((error) => {
        verifyVerificationCodeState.setError(error);
        throw getFirebaseErrorCode(error);
      });
      await _t.promise(promise, {
        loading: t(`profile:verificationCodeLoading`),
        success: t(`profile:verificationCodeSuccess`),
        error: t(`profile:verificationCodeError`)
      });
    },
    [
      verifyPhoneNumberState.state.data,
      verifyVerificationCodeState,
      t,
      onSuccess
    ]
  );
  const shouldDisplayPhoneNumberForm = verifyPhoneNumberState.state.data === void 0;
  const shouldDisplayVerificationCodeForm = !shouldDisplayPhoneNumberForm;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: shouldDisplayPhoneNumberForm,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          className: "w-full",
          onSubmit: onLinkPhoneNumberSubmit,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col space-y-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "profile:phoneNumberLabel"
                  }, void 0, false, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 121,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    required: true,
                    pattern: "^\\+?[1-9]\\d{1,14}$",
                    name: "phoneNumber",
                    type: "tel",
                    placeholder: "Ex. +919367788755",
                    disabled: verifyPhoneNumberState.state.loading
                  }, void 0, false, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 123,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                lineNumber: 120,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: verifyPhoneNumberState.state.error,
                children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
                  error: getFirebaseErrorCode(error)
                }, void 0, false, {
                  fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                  lineNumber: 135,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                lineNumber: 133,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                size: "large",
                id: RECAPTCHA_ACTION_BUTTON_ID,
                block: true,
                type: "submit",
                loading: verifyPhoneNumberState.state.loading,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                    condition: action === "link",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "profile:verifyPhoneNumberSubmitLabel"
                    }, void 0, false, {
                      fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                      lineNumber: 147,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 146,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                    condition: action === "signIn",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "auth:signInWithPhoneNumber"
                    }, void 0, false, {
                      fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                      lineNumber: 151,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 150,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                lineNumber: 139,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
            lineNumber: 119,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
          lineNumber: 118,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
        lineNumber: 117,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: shouldDisplayVerificationCodeForm,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          className: "w-full",
          onSubmit: onVerificationCodeSubmit,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col space-y-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "profile:verificationCode"
                  }, void 0, false, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 162,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    required: true,
                    autoComplete: "off",
                    name: "verificationCode"
                  }, void 0, false, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 164,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Hint, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "profile:verifyActivationCodeDescription"
                    }, void 0, false, {
                      fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                      lineNumber: 171,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 170,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                lineNumber: 161,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: verifyVerificationCodeState.state.error,
                children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
                  error: getFirebaseErrorCode(error)
                }, void 0, false, {
                  fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                  lineNumber: 177,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                lineNumber: 175,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                size: "large",
                block: true,
                loading: verifyVerificationCodeState.state.loading,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "profile:verifyActivationCodeSubmitLabel"
                }, void 0, false, {
                  fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                  lineNumber: 186,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                lineNumber: 181,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
            lineNumber: 160,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
          lineNumber: 159,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
        lineNumber: 158,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
    lineNumber: 116,
    columnNumber: 5
  }, this);
};
function useGetPhoneNumberSignInMethod(action) {
  const auth = kt();
  const getRecaptchaVerifier = use_recaptcha_verifier_default(RECAPTCHA_ACTION_BUTTON_ID);
  return (0, import_react.useCallback)(
    async (phoneNumber) => {
      const verifier = await getRecaptchaVerifier();
      if (action === `link`) {
        const { linkWithPhoneNumber } = await import("/build/_shared/index.esm-R2ACMCHR.js");
        const user = auth.currentUser;
        if (!user) {
          return Promise.reject(`User is not logged in`);
        }
        return linkWithPhoneNumber(user, phoneNumber, verifier);
      }
      if (action === `signIn`) {
        const { signInWithPhoneNumber } = await import("/build/_shared/index.esm-R2ACMCHR.js");
        return signInWithPhoneNumber(auth, phoneNumber, verifier);
      }
      return Promise.reject(`Invalid action "${action}"`);
    },
    [action, auth, getRecaptchaVerifier]
  );
}
var PhoneNumberCredentialForm_default = PhoneNumberCredentialForm;

export {
  PhoneNumberCredentialForm_default
};
//# sourceMappingURL=/build/_shared/chunk-S67ARCQV.js.map
