import {
  getFirebaseErrorCode
} from "/build/_shared/chunk-2LLES6IO.js";
import {
  AuthErrorMessage
} from "/build/_shared/chunk-TCWBHGJW.js";
import {
  useForm
} from "/build/_shared/chunk-6EEWVN7Z.js";
import {
  useRequestState
} from "/build/_shared/chunk-NMWHWOJM.js";
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
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/auth/EmailPasswordSignUpContainer.tsx
var import_react2 = __toESM(require_react());

// app/core/firebase/hooks/use-sign-up-with-email-and-password.ts
var import_react = __toESM(require_react());
function useSignUpWithEmailAndPassword() {
  const auth = kt();
  const { state, setLoading, setData, setError } = useRequestState();
  const signUp = (0, import_react.useCallback)(
    async (email, password) => {
      setLoading(true);
      try {
        const { createUserWithEmailAndPassword } = await import("/build/_shared/index.esm-R2ACMCHR.js");
        const credential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setData(credential);
        return credential;
      } catch (error) {
        setError(error);
      }
    },
    [auth, setData, setError, setLoading]
  );
  return [signUp, state];
}

// app/components/auth/EmailPasswordSignUpForm.tsx
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var EmailPasswordSignUpForm = ({ onSubmit, loading }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, watch, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: ""
    }
  });
  const emailControl = register("email", { required: true });
  const errors = formState.errors;
  const passwordControl = register("password", {
    required: true,
    minLength: {
      value: 6,
      message: t(`auth:passwordLengthError`)
    }
  });
  const passwordValue = watch(`password`);
  const repeatPasswordControl = register("repeatPassword", {
    required: true,
    minLength: {
      value: 6,
      message: t(`auth:passwordLengthError`)
    },
    validate: (value) => {
      if (value !== passwordValue) {
        return t(`auth:passwordsDoNotMatch`);
      }
      return true;
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    className: "w-full",
    onSubmit: handleSubmit(onSubmit),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex-col space-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "common:emailAddress"
                }, void 0, false, {
                  fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                  lineNumber: 59,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                  "data-cy": "email-input",
                  required: true,
                  type: "email",
                  placeholder: "your@email.com",
                  innerRef: emailControl.ref,
                  onBlur: emailControl.onBlur,
                  onChange: emailControl.onChange,
                  name: emailControl.name
                }, void 0, false, {
                  fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                  lineNumber: 61,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
              error: errors.email?.message
            }, void 0, false, {
              fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "common:password"
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 78,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                "data-cy": "password-input",
                required: true,
                type: "password",
                placeholder: "",
                innerRef: passwordControl.ref,
                onBlur: passwordControl.onBlur,
                onChange: passwordControl.onChange,
                name: passwordControl.name
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 80,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Hint, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "auth:passwordHint"
                }, void 0, false, {
                  fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                  lineNumber: 92,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 91,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
                "data-cy": "password-error",
                error: errors.password?.message
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 95,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:repeatPassword"
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 104,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                "data-cy": "repeat-password-input",
                required: true,
                type: "password",
                placeholder: "",
                innerRef: repeatPasswordControl.ref,
                onBlur: repeatPasswordControl.onBlur,
                onChange: repeatPasswordControl.onChange,
                name: repeatPasswordControl.name
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Hint, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "auth:repeatPasswordHint"
                }, void 0, false, {
                  fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                  lineNumber: 118,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 117,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
                "data-cy": "repeat-password-error",
                error: errors.repeatPassword?.message
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 121,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
            lineNumber: 103,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
          lineNumber: 102,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            size: "large",
            "data-cy": "auth-submit-button",
            className: "w-full",
            color: "primary",
            type: "submit",
            loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: loading,
              fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:getStarted"
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 139,
                columnNumber: 25
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:signingUp"
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 141,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
              lineNumber: 137,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
            lineNumber: 129,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
          lineNumber: 128,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
};
var EmailPasswordSignUpForm_default = EmailPasswordSignUpForm;

// app/components/auth/EmailPasswordSignUpContainer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var EmailPasswordSignUpContainer = ({ onSignUp, onError }) => {
  const [signUp, state] = useSignUpWithEmailAndPassword();
  const redirecting = (0, import_react2.useRef)(false);
  const loading = state.loading || redirecting.current;
  const callOnErrorCallback = (0, import_react2.useCallback)(() => {
    if (state.error && onError) {
      onError(state.error);
    }
  }, [state.error, onError]);
  const createSession = (0, import_react2.useCallback)(
    async (user) => {
      const idToken = await user.getIdToken();
      redirecting.current = true;
      onSignUp(idToken);
    },
    [onSignUp]
  );
  (0, import_react2.useEffect)(() => {
    callOnErrorCallback();
  }, [callOnErrorCallback]);
  const onSubmit = (0, import_react2.useCallback)(
    async (params) => {
      if (loading) {
        return;
      }
      const credential = await signUp(params.email, params.password);
      if (credential) {
        await createSession(credential.user);
      }
    },
    [loading, signUp, createSession]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: state.error,
        children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
          error: getFirebaseErrorCode(error)
        }, void 0, false, {
          fileName: "app/components/auth/EmailPasswordSignUpContainer.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: "app/components/auth/EmailPasswordSignUpContainer.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignUpForm_default, {
        onSubmit,
        loading
      }, void 0, false, {
        fileName: "app/components/auth/EmailPasswordSignUpContainer.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/auth/EmailPasswordSignUpContainer.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
};
var EmailPasswordSignUpContainer_default = EmailPasswordSignUpContainer;

export {
  EmailPasswordSignUpContainer_default
};
//# sourceMappingURL=/build/_shared/chunk-T6EASG55.js.map
