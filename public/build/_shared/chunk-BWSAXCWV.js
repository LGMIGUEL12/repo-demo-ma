import {
  MultiFactorAuthChallengeModal_default,
  isMultiFactorError
} from "/build/_shared/chunk-UONGVETY.js";
import {
  getFirebaseErrorCode
} from "/build/_shared/chunk-2LLES6IO.js";
import {
  AuthErrorMessage
} from "/build/_shared/chunk-VECX4GTW.js";
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
} from "/build/_shared/chunk-7QMTLNFQ.js";
import {
  Button_default,
  If_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  signInWithEmailAndPassword
} from "/build/_shared/chunk-A4KF3ELC.js";
import {
  Link,
  init_esm
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

// app/components/auth/EmailPasswordSignInContainer.tsx
var import_react2 = __toESM(require_react());

// app/components/auth/EmailPasswordSignInForm.tsx
init_esm();
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var EmailPasswordSignInForm = ({ onSubmit, loading }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const emailControl = register("email", { required: true });
  const passwordControl = register("password", { required: true });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    className: "w-full",
    onSubmit: handleSubmit(onSubmit),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex-col space-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "common:emailAddress"
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 28,
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
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 30,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "common:password"
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 45,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                required: true,
                "data-cy": "password-input",
                type: "password",
                placeholder: "",
                innerRef: passwordControl.ref,
                onBlur: passwordControl.onBlur,
                onChange: passwordControl.onChange,
                name: passwordControl.name
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 47,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "py-0.5 text-xs",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                  to: "/auth/password-reset",
                  className: "hover:underline",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "auth:passwordForgottenQuestion"
                  }, void 0, false, {
                    fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                  lineNumber: 59,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 58,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            size: "large",
            className: "w-full",
            color: "primary",
            "data-cy": "auth-submit-button",
            type: "submit",
            loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: loading,
              fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:signIn"
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 77,
                columnNumber: 25
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:signingIn"
              }, void 0, false, {
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 79,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};
var EmailPasswordSignInForm_default = EmailPasswordSignInForm;

// app/components/auth/EmailPasswordSignInContainer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var EmailPasswordSignInContainer = ({ onSignIn }) => {
  const auth = kt();
  const requestState = useRequestState();
  const [multiFactorAuthError, setMultiFactorAuthError] = (0, import_react2.useState)();
  const isLoading = requestState.state.loading;
  const signInWithCredentials = (0, import_react2.useCallback)(
    async (params) => {
      if (isLoading) {
        return;
      }
      requestState.setLoading(true);
      try {
        const credential = await getCredential(auth, params);
        if (credential) {
          const idToken = await credential.user.getIdToken();
          onSignIn(idToken);
        }
      } catch (error) {
        if (isMultiFactorError(error)) {
          setMultiFactorAuthError(error);
        } else {
          requestState.setError(error);
        }
      }
    },
    [isLoading, auth, onSignIn, requestState]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: requestState.state.error,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
          error: getFirebaseErrorCode(requestState.state.error)
        }, void 0, false, {
          fileName: "app/components/auth/EmailPasswordSignInContainer.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/auth/EmailPasswordSignInContainer.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignInForm_default, {
        onSubmit: signInWithCredentials,
        loading: isLoading
      }, void 0, false, {
        fileName: "app/components/auth/EmailPasswordSignInContainer.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: multiFactorAuthError,
        children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthChallengeModal_default, {
          error,
          isOpen: true,
          setIsOpen: (isOpen) => {
            setMultiFactorAuthError(void 0);
            if (!isOpen) {
              requestState.resetState();
            }
          },
          onSuccess: async (credential) => {
            const idToken = await credential.user.getIdToken();
            onSignIn(idToken);
          }
        }, void 0, false, {
          fileName: "app/components/auth/EmailPasswordSignInContainer.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/auth/EmailPasswordSignInContainer.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/auth/EmailPasswordSignInContainer.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
};
async function getCredential(auth, params) {
  const { email, password } = params;
  const user = auth.currentUser;
  if (user) {
    const credential = EmailAuthProvider.credential(email, password);
    return reauthenticateWithCredential(user, credential);
  }
  return signInWithEmailAndPassword(auth, email, password);
}
var EmailPasswordSignInContainer_default = EmailPasswordSignInContainer;

export {
  EmailPasswordSignInContainer_default
};
//# sourceMappingURL=/build/_shared/chunk-BWSAXCWV.js.map
