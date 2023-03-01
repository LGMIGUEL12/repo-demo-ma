import {
  use_create_server_side_session_default
} from "/build/_shared/chunk-IYPF5UAB.js";
import "/build/_shared/chunk-FPJ4XJOD.js";
import {
  MultiFactorAuthChallengeModal_default,
  isMultiFactorError
} from "/build/_shared/chunk-ILFZUK6U.js";
import "/build/_shared/chunk-VCIE6KEO.js";
import {
  getFirebaseErrorCode
} from "/build/_shared/chunk-2LLES6IO.js";
import "/build/_shared/chunk-TXV55N2L.js";
import {
  useForm
} from "/build/_shared/chunk-6EEWVN7Z.js";
import "/build/_shared/chunk-S3UUNDGC.js";
import {
  useRequestState
} from "/build/_shared/chunk-NMWHWOJM.js";
import {
  _t
} from "/build/_shared/chunk-OQCGFTRH.js";
import {
  SettingsTile_default
} from "/build/_shared/chunk-CQAGV6LY.js";
import "/build/_shared/chunk-JDRCLJ2Q.js";
import "/build/_shared/chunk-T2CF575W.js";
import "/build/_shared/chunk-AJBLUEBX.js";
import {
  TextField_default
} from "/build/_shared/chunk-XTL7KJXM.js";
import "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import {
  Alert_default
} from "/build/_shared/chunk-DUR62BEZ.js";
import "/build/_shared/chunk-I5LWYJ5L.js";
import "/build/_shared/chunk-6ZZPVUWI.js";
import "/build/_shared/chunk-UJJUUA64.js";
import "/build/_shared/chunk-CRZAZ7IR.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import {
  nr
} from "/build/_shared/chunk-CXJ2SC35.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import "/build/_shared/chunk-VCZGRDVP.js";
import "/build/_shared/chunk-4PMGBJWS.js";
import "/build/_shared/chunk-ISSCYSF5.js";
import {
  Button_default,
  If_default
} from "/build/_shared/chunk-JLCRG65W.js";
import "/build/_shared/chunk-DN742LHR.js";
import {
  Trans,
  init_es,
  useTranslation
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword
} from "/build/_shared/chunk-A4KF3ELC.js";
import "/build/_shared/chunk-BCUDKLQK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QEOXWCFK.js";
import "/build/_shared/chunk-TUM7Q574.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/__app/settings/profile/password.tsx
init_es();

// app/components/profile/UpdatePasswordForm.tsx
var import_react = __toESM(require_react());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var UpdatePasswordForm = ({ user }) => {
  const { t } = useTranslation();
  const [createServerSideSession] = use_create_server_side_session_default();
  const requestState = useRequestState();
  const [multiFactorAuthError, setMultiFactorAuthError] = (0, import_react.useState)();
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      repeatPassword: ""
    }
  });
  const errors = formState.errors;
  const currentPasswordControl = register("currentPassword", {
    value: "",
    required: true,
    minLength: {
      value: 6,
      message: t(`auth:passwordLengthError`)
    }
  });
  const newPasswordControl = register("newPassword", {
    value: "",
    required: true,
    minLength: {
      value: 6,
      message: t(`auth:passwordLengthError`)
    },
    validate: (value) => {
      if (value === getValues("currentPassword")) {
        return t(`profile:passwordNotChanged`);
      }
    }
  });
  const repeatPasswordControl = register("repeatPassword", {
    value: "",
    required: true,
    minLength: {
      value: 6,
      message: t(`profile:passwordLengthError`)
    },
    validate: (value) => {
      if (value !== getValues("newPassword")) {
        return t(`profile:passwordNotMatching`);
      }
    }
  });
  const reauthenticateUser = (0, import_react.useCallback)(
    (email, currentPassword) => {
      const emailAuthCredential = EmailAuthProvider.credential(
        email,
        currentPassword
      );
      return reauthenticateWithCredential(user, emailAuthCredential).catch(
        (error) => {
          if (isMultiFactorError(error)) {
            setMultiFactorAuthError(error);
          } else {
            requestState.setError(getFirebaseErrorCode(error));
            return Promise.reject(error);
          }
        }
      );
    },
    [user, setMultiFactorAuthError, requestState]
  );
  const updatePasswordFromCredential = (0, import_react.useCallback)(
    async (credential, newPassword) => {
      const promise = new Promise(async (resolve, reject) => {
        try {
          await updatePassword(user, newPassword);
          await createServerSideSession(credential.user);
          requestState.setData();
          resolve();
        } catch (e) {
          reject(e);
        }
      });
      return await _t.promise(promise, {
        success: t(`profile:updatePasswordSuccess`),
        error: t(`profile:updatePasswordError`),
        loading: t(`profile:updatePasswordLoading`)
      });
    },
    [requestState, createServerSideSession, t, user]
  );
  const updatePasswordCallback = (0, import_react.useCallback)(
    async (user2, currentPassword, newPassword) => {
      const email = user2.email;
      if (!email) {
        return Promise.reject(t(`profile:cannotUpdatePassword`));
      }
      try {
        const credential = await reauthenticateUser(email, currentPassword);
        if (!credential) {
          return;
        }
        return await updatePasswordFromCredential(credential, newPassword);
      } catch (e) {
        return Promise.reject(e);
      }
    },
    [reauthenticateUser, updatePasswordFromCredential, t]
  );
  const onSubmit = (0, import_react.useCallback)(
    async (params) => {
      const { newPassword, currentPassword } = params;
      requestState.setLoading(true);
      return updatePasswordCallback(user, currentPassword, newPassword).catch(
        (e) => {
          requestState.setError(t(`profile:updatePasswordError`));
          return e;
        }
      );
    },
    [t, user, requestState, updatePasswordCallback]
  );
  (0, import_react.useEffect)(() => {
    if (requestState.state.success) {
      reset();
      requestState.resetState();
    }
  }, [reset, requestState]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        "data-cy": "update-password-form",
        onSubmit: handleSubmit(onSubmit),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: requestState.state.error,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                "data-cy": "update-password-error-alert",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
                  type: "error",
                  children: requestState.state.error
                }, void 0, false, {
                  fileName: "app/components/profile/UpdatePasswordForm.tsx",
                  lineNumber: 196,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/UpdatePasswordForm.tsx",
                lineNumber: 195,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdatePasswordForm.tsx",
              lineNumber: 194,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "profile:currentPassword"
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 202,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    "data-cy": "current-password",
                    required: true,
                    type: "password",
                    name: currentPasswordControl.name,
                    innerRef: currentPasswordControl.ref,
                    onChange: currentPasswordControl.onChange,
                    onBlur: currentPasswordControl.onBlur
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 204,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/profile/UpdatePasswordForm.tsx",
                lineNumber: 201,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdatePasswordForm.tsx",
              lineNumber: 200,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "profile:newPassword"
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 218,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    "data-cy": "new-password",
                    required: true,
                    type: "password",
                    name: newPasswordControl.name,
                    innerRef: newPasswordControl.ref,
                    onChange: newPasswordControl.onChange,
                    onBlur: newPasswordControl.onBlur
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 220,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
                    "data-cy": "new-password-error",
                    error: errors.newPassword?.message
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 230,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/profile/UpdatePasswordForm.tsx",
                lineNumber: 217,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdatePasswordForm.tsx",
              lineNumber: 216,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "profile:repeatPassword"
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 239,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    "data-cy": "repeat-new-password",
                    required: true,
                    type: "password",
                    name: repeatPasswordControl.name,
                    innerRef: repeatPasswordControl.ref,
                    onChange: repeatPasswordControl.onChange,
                    onBlur: repeatPasswordControl.onBlur
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 241,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
                    "data-cy": "repeat-password-error",
                    error: errors.repeatPassword?.message
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 251,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/profile/UpdatePasswordForm.tsx",
                lineNumber: 238,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdatePasswordForm.tsx",
              lineNumber: 237,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                className: "w-full md:w-auto",
                loading: requestState.state.loading,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "profile:updatePasswordSubmitLabel"
                }, void 0, false, {
                  fileName: "app/components/profile/UpdatePasswordForm.tsx",
                  lineNumber: 263,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/UpdatePasswordForm.tsx",
                lineNumber: 259,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdatePasswordForm.tsx",
              lineNumber: 258,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/profile/UpdatePasswordForm.tsx",
          lineNumber: 193,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/UpdatePasswordForm.tsx",
        lineNumber: 192,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: multiFactorAuthError,
        children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthChallengeModal_default, {
          error,
          isOpen: true,
          setIsOpen: () => setMultiFactorAuthError(void 0),
          onSuccess: async (credential) => {
            await updatePasswordFromCredential(
              credential,
              getValues("newPassword")
            );
            setMultiFactorAuthError(void 0);
          }
        }, void 0, false, {
          fileName: "app/components/profile/UpdatePasswordForm.tsx",
          lineNumber: 271,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/UpdatePasswordForm.tsx",
        lineNumber: 269,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/profile/UpdatePasswordForm.tsx",
    lineNumber: 191,
    columnNumber: 5
  }, this);
};
var UpdatePasswordForm_default = UpdatePasswordForm;

// app/routes/__app/settings/profile/password.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Update Password"
  };
};
var ProfilePasswordSettings = () => {
  const { data: user } = nr();
  if (!user) {
    return null;
  }
  const canUpdatePassword = user.providerData.find(
    (item) => item.providerId === EmailAuthProvider.PROVIDER_ID
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
    heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "profile:passwordTab"
    }, void 0, false, {
      fileName: "app/routes/__app/settings/profile/password.tsx",
      lineNumber: 32,
      columnNumber: 16
    }, this),
    subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "profile:passwordTabSubheading"
    }, void 0, false, {
      fileName: "app/routes/__app/settings/profile/password.tsx",
      lineNumber: 33,
      columnNumber: 19
    }, this),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
      condition: canUpdatePassword,
      fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WarnCannotUpdatePasswordAlert, {}, void 0, false, {
        fileName: "app/routes/__app/settings/profile/password.tsx",
        lineNumber: 37,
        columnNumber: 19
      }, this),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdatePasswordForm_default, {
        user
      }, void 0, false, {
        fileName: "app/routes/__app/settings/profile/password.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/__app/settings/profile/password.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__app/settings/profile/password.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
};
function WarnCannotUpdatePasswordAlert() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    type: "warn",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "profile:cannotUpdatePassword"
    }, void 0, false, {
      fileName: "app/routes/__app/settings/profile/password.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__app/settings/profile/password.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
var password_default = ProfilePasswordSettings;
export {
  password_default as default,
  meta
};
//# sourceMappingURL=/build/routes/__app/settings/profile/password-HIP3TZIG.js.map
