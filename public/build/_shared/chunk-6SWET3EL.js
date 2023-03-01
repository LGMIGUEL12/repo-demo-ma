import {
  MultiFactorAuthChallengeModal_default,
  isMultiFactorError
} from "/build/_shared/chunk-ILFZUK6U.js";
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
  LogoImage_default
} from "/build/_shared/chunk-CEJB3CIX.js";
import {
  kt
} from "/build/_shared/chunk-CXJ2SC35.js";
import {
  AtSymbolIcon_default,
  DevicePhoneMobileIcon_default
} from "/build/_shared/chunk-4PMGBJWS.js";
import {
  Button_default,
  If_default,
  require_react_epic_spinners_umd_min
} from "/build/_shared/chunk-JLCRG65W.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  configuration_default
} from "/build/_shared/chunk-WULCHIKQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QEOXWCFK.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/ui/PageLoadingIndicator.tsx
var import_react_epic_spinners = __toESM(require_react_epic_spinners_umd_min());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PageLoadingIndicator({
  children,
  fullPage,
  displayLogo
}) {
  const useFullPage = fullPage ?? true;
  const shouldDisplayLogo = displayLogo ?? true;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `flex flex-col items-center justify-center space-y-6 ${useFullPage ? "fixed top-0 left-0 z-[100] h-screen w-screen bg-white dark:bg-black-500" : ""}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: shouldDisplayLogo,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "my-2",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoImage_default, {}, void 0, false, {
            fileName: "app/core/ui/PageLoadingIndicator.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/core/ui/PageLoadingIndicator.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/core/ui/PageLoadingIndicator.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_epic_spinners.FulfillingBouncingCircleSpinner, {
        size: 48,
        color: `currentColor`
      }, void 0, false, {
        fileName: "app/core/ui/PageLoadingIndicator.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-sm font-medium",
        children
      }, void 0, false, {
        fileName: "app/core/ui/PageLoadingIndicator.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/core/ui/PageLoadingIndicator.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/components/auth/OAuthProviders.tsx
var import_react2 = __toESM(require_react());
init_es();

// app/core/ui/AuthProviderLogo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var DEFAULT_IMAGE_SIZE = 28;
var AuthProviderLogo = ({ firebaseProviderId, width, height }) => {
  const image = getOAuthProviderLogos()[firebaseProviderId];
  if (typeof image === `string`) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
      loading: "lazy",
      src: image,
      alt: `${firebaseProviderId} logo`,
      width: width ?? DEFAULT_IMAGE_SIZE,
      height: height ?? DEFAULT_IMAGE_SIZE
    }, void 0, false, {
      fileName: "app/core/ui/AuthProviderLogo.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: image
  }, void 0, false, {
    fileName: "app/core/ui/AuthProviderLogo.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
function getOAuthProviderLogos() {
  return {
    password: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AtSymbolIcon_default, {
      className: "h-7"
    }, void 0, false, {
      fileName: "app/core/ui/AuthProviderLogo.tsx",
      lineNumber: 32,
      columnNumber: 15
    }, this),
    phone: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DevicePhoneMobileIcon_default, {
      className: "h-7"
    }, void 0, false, {
      fileName: "app/core/ui/AuthProviderLogo.tsx",
      lineNumber: 33,
      columnNumber: 12
    }, this),
    "google.com": "/assets/images/google.webp",
    "facebook.com": "/assets/images/facebook.webp",
    "twitter.com": "/assets/images/twitter.webp",
    "github.com": "/assets/images/github.webp",
    "microsoft.com": "/assets/images/microsoft.webp",
    "apple.com": "/assets/images/apple.webp"
  };
}
var AuthProviderLogo_default = AuthProviderLogo;

// app/core/ui/AuthProviderButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var AuthProviderButton = ({ children, providerId, onClick }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
    "data-cy": "auth-provider-button",
    block: true,
    color: "custom",
    size: "large",
    className: `AuthProviderButton`,
    onClick,
    "data-provider": providerId,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "absolute left-3 flex items-center justify-start",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProviderLogo_default, {
          firebaseProviderId: providerId
        }, void 0, false, {
          fileName: "app/core/ui/AuthProviderButton.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/core/ui/AuthProviderButton.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "flex w-full flex-1 items-center",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex w-full items-center justify-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "text-current",
            children
          }, void 0, false, {
            fileName: "app/core/ui/AuthProviderButton.tsx",
            lineNumber: 24,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/core/ui/AuthProviderButton.tsx",
          lineNumber: 23,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/core/ui/AuthProviderButton.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/core/ui/AuthProviderButton.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};
var AuthProviderButton_default = AuthProviderButton;

// app/core/firebase/hooks/use-sign-in-with-provider.ts
var import_react = __toESM(require_react());
function useSignInWithProvider() {
  const auth = kt();
  const { state, setLoading, setData, setError, resetState } = useRequestState();
  const signInWithProvider = (0, import_react.useCallback)(
    async (provider) => {
      setLoading(true);
      try {
        const credential = await getCredential(auth, provider);
        setData(credential);
        return credential;
      } catch (error) {
        setError(error);
        return Promise.reject(error);
      }
    },
    [auth, setData, setError, setLoading]
  );
  return { signInWithProvider, state, resetState };
}
async function getCredential(auth, provider) {
  const user = auth.currentUser;
  const {
    signInWithPopup,
    browserPopupRedirectResolver,
    reauthenticateWithPopup
  } = await import("/build/_shared/index.esm-R2ACMCHR.js");
  if (user) {
    return reauthenticateWithPopup(
      user,
      provider,
      browserPopupRedirectResolver
    );
  }
  return signInWithPopup(auth, provider, browserPopupRedirectResolver);
}

// app/components/auth/OAuthProviders.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var OAUTH_PROVIDERS = configuration_default.auth.providers.oAuth;
var OAuthProviders = ({ onSignIn }) => {
  const {
    signInWithProvider,
    state: signInWithProviderState,
    resetState
  } = useSignInWithProvider();
  const loading = signInWithProviderState.loading;
  const [multiFactorAuthError, setMultiFactorAuthError] = (0, import_react2.useState)();
  const createSession = (0, import_react2.useCallback)(
    async (user) => {
      const idToken = await user.getIdToken();
      onSignIn(idToken);
    },
    [onSignIn]
  );
  const onSignInWithProvider = (0, import_react2.useCallback)(
    async (signInRequest) => {
      try {
        const credential = await signInRequest();
        if (!credential) {
          return Promise.reject();
        }
        await createSession(credential.user);
      } catch (error) {
        if (isMultiFactorError(error)) {
          setMultiFactorAuthError(error);
        } else {
          throw getFirebaseErrorCode(error);
        }
      }
    },
    [setMultiFactorAuthError, createSession]
  );
  if (!OAUTH_PROVIDERS || !OAUTH_PROVIDERS.length) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: loading,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageLoadingIndicator, {}, void 0, false, {
          fileName: "app/components/auth/OAuthProviders.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/auth/OAuthProviders.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex w-full flex-1 flex-col space-y-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-col space-y-2",
            children: OAUTH_PROVIDERS.map((OAuthProviderClass) => {
              const providerInstance = new OAuthProviderClass();
              const providerId = providerInstance.providerId;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProviderButton_default, {
                providerId,
                onClick: () => {
                  return onSignInWithProvider(
                    () => signInWithProvider(providerInstance)
                  );
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "auth:signInWithProvider",
                  values: {
                    provider: getProviderName(providerId)
                  }
                }, void 0, false, {
                  fileName: "app/components/auth/OAuthProviders.tsx",
                  lineNumber: 92,
                  columnNumber: 17
                }, this)
              }, providerId, false, {
                fileName: "app/components/auth/OAuthProviders.tsx",
                lineNumber: 83,
                columnNumber: 15
              }, this);
            })
          }, void 0, false, {
            fileName: "app/components/auth/OAuthProviders.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: signInWithProviderState.error,
            children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
              error: getFirebaseErrorCode(error)
            }, void 0, false, {
              fileName: "app/components/auth/OAuthProviders.tsx",
              lineNumber: 104,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: "app/components/auth/OAuthProviders.tsx",
            lineNumber: 103,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/auth/OAuthProviders.tsx",
        lineNumber: 76,
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
              resetState();
            }
          },
          onSuccess: async (credential) => {
            return createSession(credential.user);
          }
        }, void 0, false, {
          fileName: "app/components/auth/OAuthProviders.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/auth/OAuthProviders.tsx",
        lineNumber: 108,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/auth/OAuthProviders.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
};
function getProviderName(providerId) {
  const capitalize = (value) => value.slice(0, 1).toUpperCase() + value.slice(1);
  if (providerId.endsWith(".com")) {
    return capitalize(providerId.split(".com")[0]);
  }
  return capitalize(providerId);
}
var OAuthProviders_default = OAuthProviders;

export {
  AuthProviderLogo_default,
  AuthProviderButton_default,
  PageLoadingIndicator,
  OAuthProviders_default
};
//# sourceMappingURL=/build/_shared/chunk-6SWET3EL.js.map
