import {
  use_recaptcha_verifier_default
} from "/build/_shared/chunk-VCIE6KEO.js";
import {
  AuthErrorMessage
} from "/build/_shared/chunk-KHOKOBUG.js";
import {
  Modal_default
} from "/build/_shared/chunk-NKQZC65O.js";
import {
  useRequestState
} from "/build/_shared/chunk-NMWHWOJM.js";
import {
  Alert_default
} from "/build/_shared/chunk-7ROR4Z2A.js";
import {
  TextField_default
} from "/build/_shared/chunk-T4OLHNMO.js";
import {
  kt
} from "/build/_shared/chunk-CXJ2SC35.js";
import {
  Button_default,
  If_default,
  require_react_epic_spinners_umd_min
} from "/build/_shared/chunk-ZOBGVMBL.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  getMultiFactorResolver
} from "/build/_shared/chunk-A4KF3ELC.js";
import {
  FirebaseError
} from "/build/_shared/chunk-BCUDKLQK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/auth/MultiFactorAuthChallengeModal.tsx
var import_react = __toESM(require_react());
var import_react_epic_spinners = __toESM(require_react_epic_spinners_umd_min());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var buttonId = `multi-factor-auth-challenge-button`;
var MultiFactorAuthChallengeModal = ({ error, isOpen, setIsOpen, onSuccess, cancelButton }) => {
  const auth = kt();
  const verificationIdState = useRequestState();
  const verificationCodeState = useRequestState();
  const getRecaptchaVerifier = use_recaptcha_verifier_default(buttonId);
  const phoneVerificationSent = (0, import_react.useRef)(false);
  const resolver = (0, import_react.useMemo)(() => {
    return getMultiFactorResolver(auth, error);
  }, [auth, error]);
  const { setLoading, setData, setError, state } = verificationIdState;
  const onCodeSubmit = (0, import_react.useCallback)(
    async (verificationCode) => {
      const verificationId = state.data;
      if (!verificationId) {
        return;
      }
      verificationCodeState.setLoading(true);
      const phoneAuthCredential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(phoneAuthCredential);
      try {
        const credential = await resolver.resolveSignIn(multiFactorAssertion);
        onSuccess(credential);
      } catch (e) {
        const error2 = e;
        verificationCodeState.setError(error2.code);
      }
    },
    [onSuccess, resolver, state.data, verificationCodeState]
  );
  (0, import_react.useEffect)(() => {
    if (state.loading || state.data || phoneVerificationSent.current) {
      return;
    }
    setLoading(true);
    phoneVerificationSent.current = true;
    const phoneInfoOptions = {
      multiFactorHint: resolver.hints[0],
      session: resolver.session
    };
    const phoneAuthProvider = new PhoneAuthProvider(auth);
    void (async () => {
      try {
        const recaptchaVerifier = await getRecaptchaVerifier();
        const verificationId = await phoneAuthProvider.verifyPhoneNumber(
          phoneInfoOptions,
          recaptchaVerifier
        );
        setData(verificationId);
      } catch (e) {
        console.error(e);
        setError(e);
      }
    })();
  }, [
    auth,
    resolver.session,
    resolver.hints,
    getRecaptchaVerifier,
    setData,
    setLoading,
    setError,
    state.data,
    state.loading
  ]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        id: buttonId
      }, void 0, false, {
        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
        lineNumber: 121,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "auth:verificationCode"
        }, void 0, false, {
          fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
          lineNumber: 124,
          columnNumber: 18
        }, this),
        isOpen,
        setIsOpen,
        closeButton: cancelButton,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          onSubmit: async (e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const code = data.get(`verificationCode`);
            if (!code) {
              return;
            }
            await onCodeSubmit(code);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: state.loading,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingSpinner, {}, void 0, false, {
                fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                lineNumber: 144,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
              lineNumber: 143,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: state.error,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
                type: "error",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "auth:sendMfaCodeError"
                }, void 0, false, {
                  fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                  lineNumber: 149,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                lineNumber: 148,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
              lineNumber: 147,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: state.data,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-col space-y-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                        i18nKey: "auth:verificationCode"
                      }, void 0, false, {
                        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                        autoComplete: "off",
                        required: true,
                        name: "verificationCode"
                      }, void 0, false, {
                        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Hint, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                          i18nKey: "auth:verificationCodeHint"
                        }, void 0, false, {
                          fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                          lineNumber: 165,
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                    lineNumber: 155,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                    condition: verificationCodeState.state.error,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
                      error: verificationCodeState.state.error
                    }, void 0, false, {
                      fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                      lineNumber: 170,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                    lineNumber: 169,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                    loading: verificationCodeState.state.loading,
                    block: true,
                    type: "submit",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "auth:verificationCodeSubmitButtonLabel"
                    }, void 0, false, {
                      fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                      lineNumber: 180,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                    lineNumber: 175,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                lineNumber: 154,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
              lineNumber: 153,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
          lineNumber: 129,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
        lineNumber: 123,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
};
function LoadingSpinner() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "my-6 flex flex-col items-center justify-center space-y-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_epic_spinners.SpringSpinner, {
          color: "currentColor",
          size: 36
        }, void 0, false, {
          fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
          lineNumber: 194,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
        lineNumber: 193,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "auth:sendingMfaCode"
          }, void 0, false, {
            fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
            lineNumber: 199,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
          lineNumber: 198,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
        lineNumber: 197,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
    lineNumber: 192,
    columnNumber: 5
  }, this);
}
var MultiFactorAuthChallengeModal_default = MultiFactorAuthChallengeModal;

// app/core/firebase/utils/is-multi-factor-error.ts
function isMultiFactorError(error) {
  if (error instanceof FirebaseError) {
    return error.code === `auth/multi-factor-auth-required`;
  }
  return false;
}

export {
  MultiFactorAuthChallengeModal_default,
  isMultiFactorError
};
//# sourceMappingURL=/build/_shared/chunk-PLEB4OG6.js.map
