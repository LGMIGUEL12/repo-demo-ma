import {
  use_create_server_side_session_default
} from "/build/_shared/chunk-FIBSXE2G.js";
import {
  LinkPhoneNumberModal_default
} from "/build/_shared/chunk-FNUQ6UD4.js";
import {
  useApiRequest
} from "/build/_shared/chunk-WVDBVXLN.js";
import {
  SettingsTile_default
} from "/build/_shared/chunk-33GWQEOE.js";
import {
  EmailPasswordSignInContainer_default
} from "/build/_shared/chunk-NKABHIT7.js";
import {
  AuthProviderButton_default,
  AuthProviderLogo_default,
  OAuthProviders_default
} from "/build/_shared/chunk-AGSIPRRF.js";
import {
  MultiFactorAuthChallengeModal_default,
  isMultiFactorError
} from "/build/_shared/chunk-PLEB4OG6.js";
import "/build/_shared/chunk-BBVZSHMB.js";
import {
  use_recaptcha_verifier_default
} from "/build/_shared/chunk-VCIE6KEO.js";
import {
  getFirebaseErrorCode
} from "/build/_shared/chunk-2LLES6IO.js";
import {
  AuthErrorMessage
} from "/build/_shared/chunk-KHOKOBUG.js";
import "/build/_shared/chunk-JDRCLJ2Q.js";
import {
  useForm
} from "/build/_shared/chunk-6EEWVN7Z.js";
import {
  Modal_default
} from "/build/_shared/chunk-NKQZC65O.js";
import "/build/_shared/chunk-T2CF575W.js";
import "/build/_shared/chunk-AJBLUEBX.js";
import {
  useRequestState
} from "/build/_shared/chunk-NMWHWOJM.js";
import {
  _t
} from "/build/_shared/chunk-OQCGFTRH.js";
import {
  Alert_default
} from "/build/_shared/chunk-7ROR4Z2A.js";
import {
  TextField_default
} from "/build/_shared/chunk-T4OLHNMO.js";
import "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import "/build/_shared/chunk-I5LWYJ5L.js";
import "/build/_shared/chunk-6ZZPVUWI.js";
import "/build/_shared/chunk-UJJUUA64.js";
import "/build/_shared/chunk-CRZAZ7IR.js";
import "/build/_shared/chunk-GZQSVEA4.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import {
  useUserSession
} from "/build/_shared/chunk-KHW4CDLX.js";
import "/build/_shared/chunk-52KVLBBL.js";
import "/build/_shared/chunk-MEFOEGYP.js";
import {
  CheckCircleIcon_default,
  ShieldCheckIcon_default
} from "/build/_shared/chunk-SJ75ODAE.js";
import {
  kt,
  nr
} from "/build/_shared/chunk-CXJ2SC35.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import {
  Heading_default
} from "/build/_shared/chunk-54TVJDMF.js";
import {
  Button_default,
  If_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import "/build/_shared/chunk-DN742LHR.js";
import {
  Trans,
  init_es,
  useTranslation
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  configuration_default
} from "/build/_shared/chunk-WULCHIKQ.js";
import "/build/_shared/chunk-WIOFJORR.js";
import {
  EmailAuthProvider,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  browserPopupRedirectResolver,
  linkWithCredential,
  linkWithPopup,
  multiFactor,
  sendEmailVerification,
  signInWithCredential,
  unlink
} from "/build/_shared/chunk-A4KF3ELC.js";
import "/build/_shared/chunk-BCUDKLQK.js";
import "/build/_shared/chunk-EGSMFI33.js";
import "/build/_shared/chunk-TUM7Q574.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/__app/settings/profile/authentication.tsx
var import_react10 = __toESM(require_react());
init_es();

// app/components/profile/accounts/ConnectedAccountsContainer.tsx
var import_react2 = __toESM(require_react());
init_es();

// app/components/profile/accounts/LinkEmailPasswordModal.tsx
var import_react = __toESM(require_react());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LinkEmailPasswordModal({
  isOpen,
  setIsOpen
}) {
  const { t } = useTranslation();
  const { state, setLoading, setError, resetState } = useRequestState();
  const auth = kt();
  const [sessionRequest] = use_create_server_side_session_default();
  const [multiFactorAuthError, setMultiFactorAuthError] = (0, import_react.useState)();
  const user = auth.currentUser;
  const { register, handleSubmit, watch, reset, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: ""
    }
  });
  const errors = formState.errors;
  const emailControl = register("email", { required: true });
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
  const onSubmit = (0, import_react.useCallback)(
    async (params) => {
      if (state.loading || !user) {
        return;
      }
      setLoading(true);
      const authCredential = EmailAuthProvider.credential(
        params.email,
        params.password
      );
      const promise = new Promise((resolve, reject) => {
        return linkWithCredential(user, authCredential).then(async () => {
          const newCredential = await signInWithCredential(
            auth,
            authCredential
          );
          await sessionRequest(newCredential.user);
          resolve();
        }).catch((error) => {
          if (isMultiFactorError(error)) {
            setMultiFactorAuthError(error);
            setIsOpen(false);
            _t.dismiss();
          } else {
            setError(error);
            return reject();
          }
        });
      });
      await _t.promise(promise, {
        success: t(`profile:linkActionSuccess`),
        error: t(`profile:linkActionError`),
        loading: t(`profile:linkActionLoading`)
      });
      resetState();
      setIsOpen(false);
      reset();
    },
    [
      state.loading,
      setLoading,
      t,
      resetState,
      setIsOpen,
      reset,
      user,
      auth,
      sessionRequest,
      setError
    ]
  );
  (0, import_react.useEffect)(() => {
    if (!isOpen) {
      reset();
    }
    return () => {
      reset();
    };
  }, [reset, isOpen]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        heading: `Link Password`,
        isOpen,
        setIsOpen,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          className: "w-full",
          onSubmit: handleSubmit(onSubmit),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-col space-y-2.5",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "common:emailAddress"
                    }, void 0, false, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 163,
                      columnNumber: 17
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
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 165,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                  lineNumber: 162,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                lineNumber: 161,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "common:password"
                    }, void 0, false, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 180,
                      columnNumber: 17
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
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 182,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Hint, {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                        i18nKey: "auth:passwordHint"
                      }, void 0, false, {
                        fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                        lineNumber: 194,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 193,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
                      error: errors.password?.message
                    }, void 0, false, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 197,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                  lineNumber: 179,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                lineNumber: 178,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                        i18nKey: "auth:repeatPassword"
                      }, void 0, false, {
                        fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                        lineNumber: 203,
                        columnNumber: 17
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
                        fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                        lineNumber: 205,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                    lineNumber: 202,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
                    error: errors.repeatPassword?.message
                  }, void 0, false, {
                    fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                    lineNumber: 217,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                lineNumber: 201,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: state.error,
                children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
                  error: getFirebaseErrorCode(error)
                }, void 0, false, {
                  fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                  lineNumber: 222,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                lineNumber: 220,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                  size: "large",
                  "data-cy": "auth-submit-button",
                  className: "w-full",
                  color: "primary",
                  type: "submit",
                  loading: state.loading,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                    condition: state.loading,
                    fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "profile:linkAccount"
                    }, void 0, false, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 237,
                      columnNumber: 29
                    }, this),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "profile:linkActionLoading"
                    }, void 0, false, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 239,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                    lineNumber: 235,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                  lineNumber: 227,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                lineNumber: 226,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
            lineNumber: 160,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
          lineNumber: 159,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
        lineNumber: 158,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: multiFactorAuthError,
        children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthChallengeModal_default, {
          error,
          isOpen: true,
          setIsOpen: () => setMultiFactorAuthError(void 0),
          onSuccess: async (credential) => {
            await sessionRequest(credential.user);
            setMultiFactorAuthError(void 0);
            reset();
            resetState();
          }
        }, void 0, false, {
          fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
          lineNumber: 249,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
        lineNumber: 247,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
    lineNumber: 157,
    columnNumber: 5
  }, this);
}
var LinkEmailPasswordModal_default = LinkEmailPasswordModal;

// app/core/firebase/utils/get-firebase-auth-provider-id.ts
var cache = /* @__PURE__ */ new WeakMap();
function getFirebaseAuthProviderId(AuthProviderClass) {
  if (cache.has(AuthProviderClass)) {
    return cache.get(AuthProviderClass);
  }
  if ("PROVIDER_ID" in AuthProviderClass) {
    const id2 = AuthProviderClass.PROVIDER_ID;
    cache.set(AuthProviderClass, id2);
    return id2;
  }
  const id = new AuthProviderClass().providerId;
  cache.set(AuthProviderClass, id);
  return id;
}
var get_firebase_auth_provider_id_default = getFirebaseAuthProviderId;

// app/components/profile/accounts/ConnectedAccountsContainer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ConnectedAccountsContainer = () => {
  const { data: user } = nr();
  const { t } = useTranslation();
  const supportedProviders = useSupportedAuthProviders();
  const [linkWithPhoneNumber, setLinkWithPhoneNumber] = (0, import_react2.useState)(false);
  const [linkWithPassword, setLinkWithPassword] = (0, import_react2.useState)(false);
  const [displayUnlinkConfirmationModal, setDisplayUnlinkConfirmationModal] = (0, import_react2.useState)(false);
  const [multiFactorAuthError, setMultiFactorAuthError] = (0, import_react2.useState)();
  const selectedUnlinkProvider = (0, import_react2.useRef)();
  const providerData = (0, import_react2.useMemo)(
    () => user?.providerData ?? [],
    [user?.providerData]
  );
  const [providers, setProviders] = (0, import_react2.useState)(providerData);
  const canUnlink = providers.length > 1;
  const onUnlinkRequested = (0, import_react2.useCallback)(
    async (providerId) => {
      if (!user || user.providerData.length < 2) {
        return;
      }
      const promise = unlink(user, providerId);
      await _t.promise(promise, {
        success: t(`profile:unlinkActionSuccess`),
        loading: t(`profile:unlinkActionLoading`),
        error: t(`profile:unlinkActionError`)
      });
      setProviders(
        (providers2) => providers2.filter((provider) => provider.providerId !== providerId)
      );
    },
    [user, t]
  );
  const onLinkSuccess = (0, import_react2.useCallback)(() => {
    const message = t(`profile:linkActionSuccess`);
    return _t.success(message);
  }, [t]);
  const onLinkError = (0, import_react2.useCallback)(
    (error) => {
      const message = error ? t(`auth:errors.${error}`) : t(`profile:linkActionError`);
      _t.error(message);
    },
    [t]
  );
  const connectedProviders = (0, import_react2.useMemo)(() => {
    return supportedProviders.filter((supportedProvider) => {
      return providers.some(
        (connectedProvider) => connectedProvider.providerId === get_firebase_auth_provider_id_default(supportedProvider)
      );
    });
  }, [providers, supportedProviders]);
  const notConnectedProviders = (0, import_react2.useMemo)(() => {
    return supportedProviders.filter((supportedProvider) => {
      return !connectedProviders.includes(supportedProvider);
    });
  }, [connectedProviders, supportedProviders]);
  const linkPopupAuthProvider = (0, import_react2.useCallback)(
    async (AuthProviderClass) => {
      if (!user) {
        return null;
      }
      try {
        const authCredential = await linkWithPopup(
          user,
          new AuthProviderClass(),
          browserPopupRedirectResolver
        );
        const oAuthCredential = AuthProviderClass.credentialFromResult(authCredential);
        return oAuthCredential ? onLinkSuccess() : onLinkError();
      } catch (error) {
        if (isMultiFactorError(error)) {
          setMultiFactorAuthError(error);
        } else {
          onLinkError(getFirebaseErrorCode(error));
        }
      }
    },
    [onLinkError, onLinkSuccess, user]
  );
  const onLinkRequested = (0, import_react2.useCallback)(
    async (provider) => {
      if (!user) {
        return null;
      }
      const providerId = get_firebase_auth_provider_id_default(provider);
      switch (providerId) {
        case EmailAuthProvider.PROVIDER_ID:
          return setLinkWithPassword(true);
        case PhoneAuthProvider.PROVIDER_ID:
          return setLinkWithPhoneNumber(true);
        default:
          return linkPopupAuthProvider(provider);
      }
    },
    [linkPopupAuthProvider, user]
  );
  (0, import_react2.useEffect)(() => {
    setProviders(providerData);
  }, [providerData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mb-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                type: 4,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "profile:connectedAccounts"
                }, void 0, false, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 187,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                lineNumber: 186,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "text-gray-500 dark:text-gray-400",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "profile:connectedAccountsSubheading"
                  }, void 0, false, {
                    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                    lineNumber: 192,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 191,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                lineNumber: 190,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
            lineNumber: 185,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-4 flex flex-col divide-y divide-gray-50 dark:divide-black-400",
            children: connectedProviders.map((provider, index) => {
              const providerId = get_firebase_auth_provider_id_default(provider);
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Fragment, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnlinkAuthProviderButton, {
                  canUnlink,
                  providerId,
                  onUnlink: () => {
                    if (!canUnlink) {
                      return;
                    }
                    selectedUnlinkProvider.current = providerId;
                    setDisplayUnlinkConfirmationModal(true);
                  }
                }, void 0, false, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 207,
                  columnNumber: 17
                }, this)
              }, index, false, {
                fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                lineNumber: 206,
                columnNumber: 15
              }, this);
            })
          }, void 0, false, {
            fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
            lineNumber: 197,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 184,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: notConnectedProviders.length,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mb-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                  type: 4,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "profile:availableProviders"
                  }, void 0, false, {
                    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                    lineNumber: 229,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 228,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "text-gray-500 dark:text-gray-400",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "profile:availableProvidersSubheading"
                    }, void 0, false, {
                      fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                      lineNumber: 234,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                    lineNumber: 233,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 232,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 227,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col space-y-1.5",
              children: notConnectedProviders.map((provider, index) => {
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConnectAuthProviderButton, {
                    provider,
                    onLink: () => onLinkRequested(provider)
                  }, void 0, false, {
                    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                    lineNumber: 243,
                    columnNumber: 19
                  }, this)
                }, index, false, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 242,
                  columnNumber: 17
                }, this);
              })
            }, void 0, false, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 239,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 226,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 225,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: multiFactorAuthError,
        children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthChallengeModal_default, {
          error,
          isOpen: true,
          setIsOpen: () => setMultiFactorAuthError(void 0),
          onSuccess: async () => {
            return;
          }
        }, void 0, false, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 256,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 254,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: linkWithPassword,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkEmailPasswordModal_default, {
          isOpen: true,
          setIsOpen: setLinkWithPassword
        }, void 0, false, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 268,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 267,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: linkWithPhoneNumber,
        children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkPhoneNumberModal_default, {
          isOpen: true,
          setIsOpen: setLinkWithPhoneNumber
        }, void 0, false, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 273,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 271,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConfirmUnlinkAccountModal, {
        isOpen: displayUnlinkConfirmationModal,
        setIsOpen: (isOpen) => {
          if (!isOpen) {
            selectedUnlinkProvider.current = void 0;
          }
          setDisplayUnlinkConfirmationModal(isOpen);
        },
        onUnlink: async () => {
          if (selectedUnlinkProvider.current) {
            await onUnlinkRequested(selectedUnlinkProvider.current);
            setDisplayUnlinkConfirmationModal(false);
          }
        }
      }, void 0, false, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 280,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
    lineNumber: 183,
    columnNumber: 5
  }, this);
};
function ConnectAuthProviderButton({
  onLink,
  provider
}) {
  const providerId = get_firebase_auth_provider_id_default(provider);
  const providerName = capitalize(providerId);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "max-w-md",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProviderButton_default, {
      "data-cy": "link-provider-button",
      "data-provider": providerId,
      providerId,
      onClick: onLink,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: `profile:connectWithProvider`,
        values: { provider: providerName }
      }, void 0, false, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 319,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
      lineNumber: 313,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
    lineNumber: 312,
    columnNumber: 5
  }, this);
}
function UnlinkAuthProviderButton({
  providerId,
  canUnlink,
  onUnlink
}) {
  const provider = capitalize(providerId);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex items-center justify-between py-1",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex items-center space-x-6",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex items-center space-x-4 font-medium",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProviderLogo_default, {
              firebaseProviderId: providerId
            }, void 0, false, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 343,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "flex items-center space-x-2 text-sm font-semibold text-green-600 dark:text-green-500",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: `profile:connectedWithProvider`,
                    values: { provider }
                  }, void 0, false, {
                    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                    lineNumber: 352,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 351,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, {
                  className: "h-5"
                }, void 0, false, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 358,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 345,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 342,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 341,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: canUnlink,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          "data-cy": "unlink-provider-button",
          "data-provider": providerId,
          className: "font-medium",
          color: "danger",
          variant: "flat",
          onClick: onUnlink,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: `profile:unlinkActionLabel`
            }, void 0, false, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 373,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
            lineNumber: 372,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 364,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 363,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
    lineNumber: 340,
    columnNumber: 5
  }, this);
}
function ConfirmUnlinkAccountModal({
  isOpen,
  setIsOpen,
  onUnlink
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "profile:unlinkAccountModalHeading"
    }, void 0, false, {
      fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
      lineNumber: 392,
      columnNumber: 16
    }, this),
    isOpen,
    setIsOpen,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "profile:confirmUnlink"
              }, void 0, false, {
                fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                lineNumber: 399,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 398,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "common:modalConfirmationQuestion"
              }, void 0, false, {
                fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                lineNumber: 403,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 402,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 397,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          "data-cy": "confirm-unlink-provider-button",
          block: true,
          color: "danger",
          onClick: onUnlink,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "profile:confirmUnlinkSubmitLabel"
          }, void 0, false, {
            fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
            lineNumber: 413,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 407,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
      lineNumber: 396,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
    lineNumber: 391,
    columnNumber: 5
  }, this);
}
function useSupportedAuthProviders() {
  return (0, import_react2.useMemo)(() => {
    const providers = configuration_default.auth.providers;
    return [
      ...providers.phoneNumber ? [PhoneAuthProvider] : [],
      ...providers.emailPassword ? [EmailAuthProvider] : [],
      ...providers.oAuth ?? []
    ];
  }, []);
}
function capitalize(providerId) {
  return providerId.slice(0, 1).toUpperCase() + providerId.slice(1);
}
var ConnectedAccountsContainer_default = ConnectedAccountsContainer;

// app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx
init_es();
var import_react7 = __toESM(require_react());

// app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx
var import_react5 = __toESM(require_react());
init_es();

// app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx
var import_react3 = __toESM(require_react());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var buttonId = `multi-factor-auth-phone-number-button`;
var MultiFactorAuthPhoneNumberForm = ({ onComplete, onReauthenticateError }) => {
  const auth = kt();
  const { t } = useTranslation();
  const requestState = useRequestState();
  const getRecaptchaVerifier = use_recaptcha_verifier_default(buttonId);
  const onVerifyPhoneNumber = (0, import_react3.useCallback)(
    async (phoneNumber) => {
      const user = auth.currentUser;
      if (!user || requestState.state.loading) {
        return;
      }
      requestState.setLoading(true);
      const multiFactorSession = await multiFactor(user).getSession();
      const phoneInfoOptions = {
        phoneNumber,
        session: multiFactorSession
      };
      const phoneAuthProvider = new PhoneAuthProvider(auth);
      const recaptchaVerifier = await getRecaptchaVerifier();
      const promise = phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier).then((verificationId) => {
        requestState.setData();
        onComplete(verificationId);
        return t(`profile:verifyPhoneNumberSuccess`);
      }).catch((error) => {
        if (isNeedsReauthenticationError(error)) {
          onReauthenticateError();
          return t(`auth:auth/requires-recent-login`);
        } else {
          requestState.setError(error);
          throw error.code;
        }
      });
      await _t.promise(promise, {
        success: (value) => value,
        error: t(`profile:verifyPhoneNumberError`),
        loading: t(`profile:verifyPhoneNumberLoading`)
      });
    },
    [
      auth,
      requestState,
      getRecaptchaVerifier,
      t,
      onComplete,
      onReauthenticateError
    ]
  );
  const onSubmit = (0, import_react3.useCallback)(
    async (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const phoneNumber = data.get("phoneNumber");
      return onVerifyPhoneNumber(phoneNumber);
    },
    [onVerifyPhoneNumber]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    onSubmit,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mb-2.5 text-gray-400 dark:text-gray-400",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "profile:verifyPhoneNumberDescription"
        }, void 0, false, {
          fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
          lineNumber: 106,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
        lineNumber: 105,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "profile:phoneNumberLabel"
              }, void 0, false, {
                fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
                lineNumber: 111,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                required: true,
                pattern: "^\\+?[1-9]\\d{1,14}$",
                name: "phoneNumber",
                type: "tel",
                placeholder: "Ex. +919367788755",
                disabled: requestState.state.loading
              }, void 0, false, {
                fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
                lineNumber: 113,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
            lineNumber: 110,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: requestState.state.error,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
              error: getFirebaseErrorCode(requestState.state.error)
            }, void 0, false, {
              fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
              lineNumber: 124,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
            lineNumber: 123,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            id: buttonId,
            block: true,
            type: "submit",
            loading: requestState.state.loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "profile:verifyPhoneNumberSubmitLabel"
            }, void 0, false, {
              fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
              lineNumber: 135,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
            lineNumber: 129,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
        lineNumber: 109,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
    lineNumber: 104,
    columnNumber: 5
  }, this);
};
function isNeedsReauthenticationError(error) {
  return error.code === "auth/requires-recent-login";
}
var MultiFactorAuthPhoneNumberForm_default = MultiFactorAuthPhoneNumberForm;

// app/components/profile/mfa/VerificationCodeForm.tsx
var import_react4 = __toESM(require_react());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MultiFactorAuthVerificationCodeForm = ({ onComplete, verificationId }) => {
  const auth = kt();
  const { t } = useTranslation();
  const requestState = useRequestState();
  const user = auth.currentUser;
  const onEnrolRequested = (0, import_react4.useCallback)(
    async (params) => {
      if (!user || requestState.state.loading) {
        return;
      }
      requestState.setLoading(true);
      const { verificationCode, authFactorName } = params;
      const phoneAuthCredential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(phoneAuthCredential);
      const displayName = authFactorName ?? null;
      const promise = multiFactor(user).enroll(multiFactorAssertion, displayName).then(() => {
        const success = true;
        onComplete(success);
      }).catch((error) => {
        requestState.setError(error);
        throw error.code;
      });
      return await _t.promise(promise, {
        success: t(`profile:mfaEnabledSuccessTitle`),
        error: t(`profile:verificationCodeError`),
        loading: t(`profile:mfaActivationLoading`)
      });
    },
    [verificationId, t, onComplete, user, requestState]
  );
  const onSubmit = (0, import_react4.useCallback)(
    (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const verificationCode = data.get("verificationCode");
      const authFactorName = data.get("authFactorName");
      return onEnrolRequested({ verificationCode, authFactorName });
    },
    [onEnrolRequested]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    onSubmit,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mb-2.5 text-gray-400 dark:text-gray-400",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "profile:verifyActivationCodeDescription"
        }, void 0, false, {
          fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
          lineNumber: 84,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
        lineNumber: 83,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "profile:verificationCode"
              }, void 0, false, {
                fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
                lineNumber: 89,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                required: true,
                autoComplete: "off",
                name: "verificationCode"
              }, void 0, false, {
                fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
                lineNumber: 90,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
            lineNumber: 88,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "profile:authFactorName"
              }, void 0, false, {
                fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
                lineNumber: 98,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                name: "authFactorName"
              }, void 0, false, {
                fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
                lineNumber: 99,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Hint, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "profile:authFactorNameHint"
                }, void 0, false, {
                  fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
                  lineNumber: 101,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
                lineNumber: 100,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
            lineNumber: 97,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            block: true,
            type: "submit",
            loading: requestState.state.loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "profile:verifyActivationCodeSubmitLabel"
            }, void 0, false, {
              fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
              lineNumber: 106,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
        lineNumber: 87,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
};
var VerificationCodeForm_default = MultiFactorAuthVerificationCodeForm;

// app/components/auth/ReauthenticationForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ReauthenticationForm = ({ onSuccess }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OAuthProviders_default, {
        onSignIn: onSuccess
      }, void 0, false, {
        fileName: "app/components/auth/ReauthenticationForm.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignInContainer_default, {
        onSignIn: onSuccess
      }, void 0, false, {
        fileName: "app/components/auth/ReauthenticationForm.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/auth/ReauthenticationForm.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
var ReauthenticationForm_default = ReauthenticationForm;

// app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var EnrolMultiFactorAuthContainer = ({ onComplete }) => {
  const auth = kt();
  const [createServerSideSession] = use_create_server_side_session_default();
  const [status, setStatus] = (0, import_react5.useState)(1 /* PhoneNumberForm */);
  const verificationIdRef = (0, import_react5.useRef)();
  const onSuccessfulEnrollment = (0, import_react5.useCallback)(async () => {
    const user = await auth.currentUser;
    if (user) {
      await createServerSideSession(user);
    }
  }, [createServerSideSession, auth]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "profile:multiFactorAuth"
    }, void 0, false, {
      fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
      lineNumber: 37,
      columnNumber: 16
    }, this),
    isOpen: true,
    setIsOpen: () => onComplete(false),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: status === 0 /* Reauthenticate */,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "my-4",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:reauthenticateDescription"
              }, void 0, false, {
                fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
                lineNumber: 44,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReauthenticationForm_default, {
            onSuccess: () => setStatus(1 /* PhoneNumberForm */)
          }, void 0, false, {
            fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: status === 1 /* PhoneNumberForm */,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthPhoneNumberForm_default, {
          onReauthenticateError: () => {
            setStatus(0 /* Reauthenticate */);
          },
          onComplete: (verificationId) => {
            verificationIdRef.current = verificationId;
            setStatus(2 /* VerificationCodeForm */);
          }
        }, void 0, false, {
          fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: status === 2 /* VerificationCodeForm */,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: verificationIdRef.current,
          children: (verificationId) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerificationCodeForm_default, {
              verificationId,
              onComplete: async (isSuccessful) => {
                if (isSuccessful) {
                  await onSuccessfulEnrollment();
                }
                onComplete(isSuccessful);
              }
            }, void 0, false, {
              fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
              lineNumber: 69,
              columnNumber: 15
            }, this);
          }
        }, void 0, false, {
          fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
        lineNumber: 65,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
};
var EnrolMultiFactorAuthContainer_default = EnrolMultiFactorAuthContainer;

// app/components/profile/mfa/EmailVerificationAlert.tsx
init_es();
var import_react6 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function EmailVerificationAlert(props) {
  const requestState = useRequestState();
  const { t } = useTranslation();
  const onLinkRequested = (0, import_react6.useCallback)(async () => {
    requestState.setLoading(true);
    const promise = sendEmailVerification(props.user).then(() => {
      requestState.setData();
    }).catch((error) => {
      requestState.setError(error);
      throw getFirebaseErrorCode(error);
    });
    await _t.promise(promise, {
      loading: t(`profile:sendingEmailVerificationLink`),
      success: t(`profile:sendEmailVerificationLinkSuccess`),
      error: t(`profile:sendEmailVerificationLinkError`)
    });
  }, [props, requestState, t]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-3",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
          type: "warn",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "profile:verifyEmailAlertHeading"
              }, void 0, false, {
                fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
                lineNumber: 48,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "profile:verificationLinkAlertDescription"
                }, void 0, false, {
                  fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
                  lineNumber: 53,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
                lineNumber: 52,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: requestState.state.error,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
            error: getFirebaseErrorCode(requestState.state.error)
          }, void 0, false, {
            fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
        lineNumber: 59,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: requestState.state.success,
          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            loading: requestState.state.loading,
            onClick: onLinkRequested,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "profile:sendVerificationLinkSubmitLabel"
            }, void 0, false, {
              fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
              lineNumber: 75,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailSentSuccessAlert, {}, void 0, false, {
            fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
            lineNumber: 79,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function EmailSentSuccessAlert() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    type: "success",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: "profile:sendVerificationLinkSuccessLabel"
      }, void 0, false, {
        fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}
var EmailVerificationAlert_default = EmailVerificationAlert;

// app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MultiFactorAuthSetupContainer = ({ onComplete }) => {
  const [enableMFAVisible, setEnableMFAVisible] = (0, import_react7.useState)(false);
  const { data: user, status } = nr();
  if (!user || status === `loading`) {
    return null;
  }
  const isEmailVerified = user.emailVerified;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
          type: "info",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "profile:multiFactorAuthHeading"
              }, void 0, false, {
                fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
                lineNumber: 30,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "profile:multiFactorAuthDescription"
              }, void 0, false, {
                fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
                lineNumber: 34,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: isEmailVerified,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EnableMFAButton, {
              onClick: () => setEnableMFAVisible(true)
            }, void 0, false, {
              fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
              lineNumber: 40,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: isEmailVerified,
          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailVerificationAlert_default, {
            user
          }, void 0, false, {
            fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
            lineNumber: 46,
            columnNumber: 21
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: enableMFAVisible,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EnrolMultiFactorAuthContainer_default, {
              onComplete: (success) => {
                onComplete(success);
                setEnableMFAVisible(false);
              }
            }, void 0, false, {
              fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
              lineNumber: 49,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};
function EnableMFAButton(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
    color: "primary",
    onClick: props.onClick,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "flex space-x-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheckIcon_default, {
          className: "h-5"
        }, void 0, false, {
          fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "profile:setupMfaButtonLabel"
          }, void 0, false, {
            fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
            lineNumber: 71,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
var MultiFactorAuthSetupContainer_default = MultiFactorAuthSetupContainer;

// app/components/profile/mfa/DisableMultiFactorButton.tsx
var import_react8 = __toESM(require_react());
init_es();

// app/lib/profile/hooks/use-disable-multi-factor-auth.ts
function useDisableMultiFactorAuthentication() {
  return useApiRequest(`/api/user/mfa/disable`, `POST`);
}
var use_disable_multi_factor_auth_default = useDisableMultiFactorAuthentication;

// app/components/profile/mfa/DisableMultiFactorButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var DisableMultiFactorButton = ({ onDisable }) => {
  const [disableMultiFactorAuthentication, { loading }] = use_disable_multi_factor_auth_default();
  const [isModalOpen, setIsModalOpen] = (0, import_react8.useState)(false);
  const { t } = useTranslation();
  const onDisableSubmit = (0, import_react8.useCallback)(async () => {
    const promise = disableMultiFactorAuthentication().then(onDisable);
    return _t.promise(promise, {
      loading: t(`profile:disablingMfa`),
      error: t(`profile:disableMfaError`),
      success: t(`profile:disableMfaSuccess`)
    });
  }, [disableMultiFactorAuthentication, onDisable, t]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          color: "danger",
          variant: "flat",
          onClick: () => setIsModalOpen(true),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "font-medium",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "profile:disableMfaButtonLabel"
            }, void 0, false, {
              fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
              lineNumber: 38,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
            lineNumber: 37,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "profile:disableMfa"
        }, void 0, false, {
          fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
          lineNumber: 44,
          columnNumber: 18
        }, this),
        isOpen: isModalOpen,
        setIsOpen: setIsModalOpen,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "common:modalConfirmationQuestion"
                }, void 0, false, {
                  fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
                  lineNumber: 51,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
                lineNumber: 50,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              color: "danger",
              block: true,
              loading,
              onClick: onDisableSubmit,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "profile:confirmDisableMfaButtonLabel"
              }, void 0, false, {
                fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
                lineNumber: 61,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
};
var DisableMultiFactorButton_default = DisableMultiFactorButton;

// app/components/auth/ReauthenticationModal.tsx
var import_react9 = __toESM(require_react());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ReauthenticationModal = ({ isOpen, setIsOpen }) => {
  const onSuccess = (0, import_react9.useCallback)(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "auth:reauthenticate"
    }, void 0, false, {
      fileName: "app/components/auth/ReauthenticationModal.tsx",
      lineNumber: 17,
      columnNumber: 16
    }, this),
    isOpen,
    setIsOpen,
    closeButton: false,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "my-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "auth:reauthenticateDescription"
          }, void 0, false, {
            fileName: "app/components/auth/ReauthenticationModal.tsx",
            lineNumber: 24,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/auth/ReauthenticationModal.tsx",
          lineNumber: 23,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/auth/ReauthenticationModal.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReauthenticationForm_default, {
        onSuccess
      }, void 0, false, {
        fileName: "app/components/auth/ReauthenticationModal.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/auth/ReauthenticationModal.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};
var ReauthenticationModal_default = ReauthenticationModal;

// app/routes/__app/settings/profile/authentication.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Authentication"
  };
};
var ProfileAuthenticationPage = () => {
  const user = useUserSession();
  const multiFactor2 = (0, import_react10.useMemo)(
    () => user?.auth?.multiFactor ?? [],
    [user?.auth?.multiFactor]
  );
  const [shouldReauthenticate, setShouldReauthenticate] = (0, import_react10.useState)(false);
  const refreshPage = (0, import_react10.useCallback)((success) => {
    if (success) {
      window.location.reload();
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
          heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "profile:manageConnectedAccounts"
          }, void 0, false, {
            fileName: "app/routes/__app/settings/profile/authentication.tsx",
            lineNumber: 47,
            columnNumber: 20
          }, this),
          subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "profile:manageConnectedAccountsSubheading"
          }, void 0, false, {
            fileName: "app/routes/__app/settings/profile/authentication.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConnectedAccountsContainer_default, {}, void 0, false, {
            fileName: "app/routes/__app/settings/profile/authentication.tsx",
            lineNumber: 52,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/__app/settings/profile/authentication.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: configuration_default.auth.enableMultiFactorAuth,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
            heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "profile:multiFactorAuth"
            }, void 0, false, {
              fileName: "app/routes/__app/settings/profile/authentication.tsx",
              lineNumber: 58,
              columnNumber: 22
            }, this),
            subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "profile:multiFactorAuthSubheading"
            }, void 0, false, {
              fileName: "app/routes/__app/settings/profile/authentication.tsx",
              lineNumber: 59,
              columnNumber: 25
            }, this),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: !multiFactor2,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthSetupContainer_default, {
                  onComplete: refreshPage
                }, void 0, false, {
                  fileName: "app/routes/__app/settings/profile/authentication.tsx",
                  lineNumber: 63,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/routes/__app/settings/profile/authentication.tsx",
                lineNumber: 62,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: multiFactor2,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorSuccessAlert, {}, void 0, false, {
                      fileName: "app/routes/__app/settings/profile/authentication.tsx",
                      lineNumber: 69,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DisableMultiFactorButton_default, {
                      onDisable: async () => {
                        setShouldReauthenticate(true);
                      }
                    }, void 0, false, {
                      fileName: "app/routes/__app/settings/profile/authentication.tsx",
                      lineNumber: 71,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/__app/settings/profile/authentication.tsx",
                  lineNumber: 68,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/routes/__app/settings/profile/authentication.tsx",
                lineNumber: 67,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: shouldReauthenticate,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReauthenticationModal_default, {
                  isOpen: true,
                  setIsOpen: async () => {
                    setShouldReauthenticate(false);
                    await refreshPage(true);
                  }
                }, void 0, false, {
                  fileName: "app/routes/__app/settings/profile/authentication.tsx",
                  lineNumber: 83,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/routes/__app/settings/profile/authentication.tsx",
                lineNumber: 82,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/__app/settings/profile/authentication.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/__app/settings/profile/authentication.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/__app/settings/profile/authentication.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__app/settings/profile/authentication.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
};
var authentication_default = ProfileAuthenticationPage;
function MultiFactorSuccessAlert() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    type: "success",
    className: "flex flex-col space-y-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
        type: 4,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "profile:mfaEnabledSuccessTitle"
        }, void 0, false, {
          fileName: "app/routes/__app/settings/profile/authentication.tsx",
          lineNumber: 108,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/settings/profile/authentication.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "profile:mfaEnabledSuccessDescription"
        }, void 0, false, {
          fileName: "app/routes/__app/settings/profile/authentication.tsx",
          lineNumber: 112,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/settings/profile/authentication.tsx",
        lineNumber: 111,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/settings/profile/authentication.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}
export {
  authentication_default as default,
  meta
};
//# sourceMappingURL=/build/routes/__app/settings/profile/authentication-46AR4EIJ.js.map
