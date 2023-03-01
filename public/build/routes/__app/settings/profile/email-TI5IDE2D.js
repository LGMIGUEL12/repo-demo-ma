import {
  use_create_server_side_session_default
} from "/build/_shared/chunk-RH6ANKBC.js";
import "/build/_shared/chunk-ZQKII5EY.js";
import {
  SettingsTile_default
} from "/build/_shared/chunk-33GWQEOE.js";
import {
  MultiFactorAuthChallengeModal_default,
  isMultiFactorError
} from "/build/_shared/chunk-ZSN7SJIX.js";
import "/build/_shared/chunk-GN2EZ3CR.js";
import "/build/_shared/chunk-VECX4GTW.js";
import "/build/_shared/chunk-JDRCLJ2Q.js";
import {
  useForm
} from "/build/_shared/chunk-6EEWVN7Z.js";
import "/build/_shared/chunk-NKQZC65O.js";
import "/build/_shared/chunk-T2CF575W.js";
import "/build/_shared/chunk-AJBLUEBX.js";
import {
  useRequestState
} from "/build/_shared/chunk-NMWHWOJM.js";
import {
  _t
} from "/build/_shared/chunk-45D3VFMN.js";
import {
  Alert_default
} from "/build/_shared/chunk-75ATWWIY.js";
import {
  TextField_default
} from "/build/_shared/chunk-T4OLHNMO.js";
import "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import "/build/_shared/chunk-I5LWYJ5L.js";
import "/build/_shared/chunk-6ZZPVUWI.js";
import "/build/_shared/chunk-UJJUUA64.js";
import "/build/_shared/chunk-CRZAZ7IR.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import "/build/_shared/chunk-MEFOEGYP.js";
import "/build/_shared/chunk-7KHFEMFW.js";
import {
  nr
} from "/build/_shared/chunk-QTKR7OWQ.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import "/build/_shared/chunk-54TVJDMF.js";
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
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail
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

// app/routes/__app/settings/profile/email.tsx
init_es();

// app/components/profile/UpdateEmailForm.tsx
var import_react = __toESM(require_react());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var UpdateEmailForm = ({ user }) => {
  const [errorMessage, setErrorMessage] = (0, import_react.useState)();
  const { t } = useTranslation();
  const [createServerSideSession] = use_create_server_side_session_default();
  const requestState = useRequestState();
  const [multiFactorAuthError, setMultiFactorAuthError] = (0, import_react.useState)();
  const updateEmailWithCredential = (0, import_react.useCallback)(
    (credential, email) => {
      const promise = updateEmail(credential.user, email).then(() => {
        return createServerSideSession(credential.user);
      }).then(() => {
        setErrorMessage(void 0);
      }).catch((e) => {
        setErrorMessage(t(`profile:updateEmailError`));
        return e;
      });
      return _t.promise(promise, {
        success: t(`profile:updateEmailSuccess`),
        loading: t(`profile:updateEmailLoading`),
        error: t(`profile:updateEmailError`)
      });
    },
    [createServerSideSession, setErrorMessage, t]
  );
  const currentEmail = user?.email;
  const { register, handleSubmit, getValues, reset } = useForm({
    defaultValues: {
      email: "",
      repeatEmail: "",
      password: ""
    }
  });
  const onSubmit = (0, import_react.useCallback)(
    async (params) => {
      const { email, repeatEmail, password } = params;
      if (email !== repeatEmail) {
        const message = t(`profile:emailsNotMatching`);
        setErrorMessage(message);
        return;
      }
      if (email === currentEmail) {
        const message = t(`profile:updatingSameEmail`);
        setErrorMessage(message);
        return;
      }
      requestState.setLoading(true);
      const emailAuthCredential = EmailAuthProvider.credential(
        currentEmail,
        password
      );
      const promise = reauthenticateWithCredential(user, emailAuthCredential);
      const credential = await promise.catch((error) => {
        if (isMultiFactorError(error)) {
          setMultiFactorAuthError(error);
        } else {
          const message = t(`profile:updateEmailError`);
          setErrorMessage(message);
        }
        requestState.setError(error);
      });
      if (!credential) {
        return;
      }
      return await updateEmailWithCredential(credential, email).finally(() => {
        requestState.setData();
      });
    },
    [currentEmail, t, requestState, updateEmailWithCredential, user]
  );
  const emailControl = register("email", {
    value: "",
    required: true
  });
  const repeatEmailControl = register("repeatEmail", {
    value: "",
    required: true
  });
  const passwordControl = register("password", {
    value: "",
    required: true
  });
  (0, import_react.useEffect)(() => {
    if (requestState.state.success) {
      reset();
      requestState.resetState();
    }
  }, [reset, requestState]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        "data-cy": "update-email-form",
        onSubmit: handleSubmit(onSubmit),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: errorMessage,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                "data-cy": "update-email-error-alert",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
                  type: "error",
                  children: errorMessage
                }, void 0, false, {
                  fileName: "app/components/profile/UpdateEmailForm.tsx",
                  lineNumber: 159,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/UpdateEmailForm.tsx",
                lineNumber: 158,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdateEmailForm.tsx",
              lineNumber: 157,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "profile:newEmail"
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdateEmailForm.tsx",
                    lineNumber: 165,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    "data-cy": "profile-new-email-input",
                    name: emailControl.name,
                    onChange: emailControl.onChange,
                    onBlur: emailControl.onBlur,
                    innerRef: emailControl.ref,
                    required: true,
                    type: "email",
                    placeholder: ""
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdateEmailForm.tsx",
                    lineNumber: 167,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/profile/UpdateEmailForm.tsx",
                lineNumber: 164,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdateEmailForm.tsx",
              lineNumber: 163,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "profile:repeatEmail"
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdateEmailForm.tsx",
                    lineNumber: 182,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    "data-cy": "profile-repeat-email-input",
                    name: repeatEmailControl.name,
                    onChange: repeatEmailControl.onChange,
                    onBlur: repeatEmailControl.onBlur,
                    innerRef: repeatEmailControl.ref,
                    required: true,
                    type: "email"
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdateEmailForm.tsx",
                    lineNumber: 184,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/profile/UpdateEmailForm.tsx",
                lineNumber: 181,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdateEmailForm.tsx",
              lineNumber: 180,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "profile:yourPassword"
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdateEmailForm.tsx",
                    lineNumber: 198,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    "data-cy": "profile-password-input",
                    required: true,
                    type: "password",
                    name: passwordControl.name,
                    onChange: passwordControl.onChange,
                    onBlur: passwordControl.onBlur,
                    innerRef: passwordControl.ref,
                    placeholder: ""
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdateEmailForm.tsx",
                    lineNumber: 200,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/profile/UpdateEmailForm.tsx",
                lineNumber: 197,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdateEmailForm.tsx",
              lineNumber: 196,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                className: "w-full md:w-auto",
                loading: requestState.state.loading,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "profile:updateEmailSubmitLabel"
                }, void 0, false, {
                  fileName: "app/components/profile/UpdateEmailForm.tsx",
                  lineNumber: 218,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/UpdateEmailForm.tsx",
                lineNumber: 214,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdateEmailForm.tsx",
              lineNumber: 213,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/profile/UpdateEmailForm.tsx",
          lineNumber: 156,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/UpdateEmailForm.tsx",
        lineNumber: 155,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: multiFactorAuthError,
        children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthChallengeModal_default, {
          error,
          isOpen: true,
          setIsOpen: () => setMultiFactorAuthError(void 0),
          onSuccess: async (credential) => {
            await updateEmailWithCredential(credential, getValues("email"));
            setMultiFactorAuthError(void 0);
            requestState.setData();
          }
        }, void 0, false, {
          fileName: "app/components/profile/UpdateEmailForm.tsx",
          lineNumber: 226,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/UpdateEmailForm.tsx",
        lineNumber: 224,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/profile/UpdateEmailForm.tsx",
    lineNumber: 154,
    columnNumber: 5
  }, this);
};
var UpdateEmailForm_default = UpdateEmailForm;

// app/routes/__app/settings/profile/email.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Update Email"
  };
};
var ProfileEmailSettings = () => {
  const { data: user } = nr();
  if (!user) {
    return null;
  }
  const canUpdateEmail = user.providerData.find(
    (item) => item.providerId === EmailAuthProvider.PROVIDER_ID
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
      heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: "profile:emailTab"
      }, void 0, false, {
        fileName: "app/routes/__app/settings/profile/email.tsx",
        lineNumber: 32,
        columnNumber: 18
      }, this),
      subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: "profile:emailTabTabSubheading"
      }, void 0, false, {
        fileName: "app/routes/__app/settings/profile/email.tsx",
        lineNumber: 33,
        columnNumber: 21
      }, this),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: canUpdateEmail,
        fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WarnCannotUpdateEmailAlert, {}, void 0, false, {
          fileName: "app/routes/__app/settings/profile/email.tsx",
          lineNumber: 37,
          columnNumber: 21
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateEmailForm_default, {
          user
        }, void 0, false, {
          fileName: "app/routes/__app/settings/profile/email.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/settings/profile/email.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/__app/settings/profile/email.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__app/settings/profile/email.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
};
function WarnCannotUpdateEmailAlert() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    type: "warn",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "profile:cannotUpdateEmail"
    }, void 0, false, {
      fileName: "app/routes/__app/settings/profile/email.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__app/settings/profile/email.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
var email_default = ProfileEmailSettings;
export {
  email_default as default,
  meta
};
//# sourceMappingURL=/build/routes/__app/settings/profile/email-TI5IDE2D.js.map
