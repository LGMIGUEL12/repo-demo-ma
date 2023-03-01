import {
  LinkPhoneNumberModal_default
} from "/build/_shared/chunk-FNUQ6UD4.js";
import {
  FirebaseStorageProvider,
  ImageUploadInput_default
} from "/build/_shared/chunk-INSLDCSJ.js";
import {
  SettingsTile_default
} from "/build/_shared/chunk-33GWQEOE.js";
import "/build/_shared/chunk-BBVZSHMB.js";
import "/build/_shared/chunk-VCIE6KEO.js";
import {
  getFirebaseErrorCode
} from "/build/_shared/chunk-2LLES6IO.js";
import {
  AuthErrorMessage
} from "/build/_shared/chunk-KHOKOBUG.js";
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
import "/build/_shared/chunk-7ROR4Z2A.js";
import {
  TextField_default
} from "/build/_shared/chunk-T4OLHNMO.js";
import "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import "/build/_shared/chunk-I5LWYJ5L.js";
import "/build/_shared/chunk-6ZZPVUWI.js";
import "/build/_shared/chunk-UJJUUA64.js";
import "/build/_shared/chunk-CRZAZ7IR.js";
import "/build/_shared/chunk-MZJK6QBW.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import {
  user_session_default
} from "/build/_shared/chunk-52KVLBBL.js";
import "/build/_shared/chunk-MEFOEGYP.js";
import "/build/_shared/chunk-SJ75ODAE.js";
import {
  Pr,
  nr
} from "/build/_shared/chunk-CXJ2SC35.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes
} from "/build/_shared/chunk-BNRSGPT3.js";
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
  configuration_default
} from "/build/_shared/chunk-WULCHIKQ.js";
import "/build/_shared/chunk-WIOFJORR.js";
import {
  PhoneAuthProvider,
  unlink,
  updateProfile
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

// app/routes/__app/settings/profile/index.tsx
var import_react3 = __toESM(require_react());
init_es();

// app/components/profile/UpdateProfileForm.tsx
var import_react2 = __toESM(require_react());
init_es();

// app/lib/profile/hooks/use-update-profile.ts
var import_react = __toESM(require_react());
function useUpdateProfile() {
  const { data: user } = nr();
  const { state, setLoading, setData, setError } = useRequestState();
  const updateProfileCallback = (0, import_react.useCallback)(
    async (info) => {
      if (info && user) {
        setLoading(true);
        try {
          await updateProfile(user, info);
          setData();
        } catch (e) {
          setError(`Could not update Profile`);
          return Promise.reject(e);
        }
      }
    },
    [setData, setError, setLoading, user]
  );
  return [updateProfileCallback, state];
}

// app/components/profile/UpdateProfileForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UpdateProfileForm({
  user,
  onUpdate
}) {
  const [updateProfile2, { loading }] = useUpdateProfile();
  const [displayUpdatePhoneNumber, setDisplayUpdatePhoneNumber] = (0, import_react2.useState)(false);
  const storage = Pr();
  const { t } = useTranslation();
  const currentPhotoURL = user?.photoURL ?? "";
  const currentDisplayName = user?.displayName ?? "";
  const currentPhoneNumber = user?.phoneNumber ?? "";
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      displayName: currentDisplayName,
      photoURL: ""
    }
  });
  const [avatarIsDirty, setAvatarIsDirty] = (0, import_react2.useState)(false);
  const onAvatarCleared = (0, import_react2.useCallback)(() => {
    setAvatarIsDirty(true);
  }, []);
  const onSubmit = async (displayName, photoFile) => {
    const photoName = photoFile?.name;
    const photoUrl = photoName ? await uploadUserProfilePhoto(storage, photoFile, user.uid) : currentPhotoURL;
    const isAvatarRemoved = avatarIsDirty && !photoName;
    const info = {
      displayName,
      photoURL: isAvatarRemoved ? "" : photoUrl
    };
    if (isAvatarRemoved && currentPhotoURL) {
      try {
        await deleteObject(ref(storage, currentPhotoURL));
      } catch (e) {
      }
    }
    const promise = updateProfile2(info).then(() => {
      onUpdate(info);
    });
    return _t.promise(promise, {
      success: t(`profile:updateProfileSuccess`),
      error: t(`profile:updateProfileError`),
      loading: t(`profile:updateProfileLoading`)
    });
  };
  const displayNameControl = register("displayName", {
    value: currentDisplayName
  });
  const photoURLControl = register("photoURL");
  (0, import_react2.useEffect)(() => {
    reset({
      displayName: currentDisplayName ?? "",
      photoURL: currentPhotoURL ?? ""
    });
  }, [currentDisplayName, currentPhotoURL, reset]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        "data-cy": "update-profile-form",
        onSubmit: handleSubmit((value) => {
          return onSubmit(value.displayName, getPhotoFile(value.photoURL));
        }),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "profile:displayNameLabel"
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 129,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    innerRef: displayNameControl.ref,
                    onChange: displayNameControl.onChange,
                    onBlur: displayNameControl.onBlur,
                    name: displayNameControl.name,
                    "data-cy": "profile-display-name",
                    minLength: 2,
                    placeholder: ""
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 131,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 128,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 127,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "profile:profilePictureLabel"
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 145,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageUploadInput_default, {
                    multiple: false,
                    onClear: onAvatarCleared,
                    name: photoURLControl.name,
                    image: currentPhotoURL,
                    onChange: photoURLControl.onChange,
                    onBlur: photoURLControl.onBlur,
                    innerRef: photoURLControl.ref,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "common:imageInputLabel"
                    }, void 0, false, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 156,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 147,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 144,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 143,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "profile:emailLabel"
                    }, void 0, false, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 163,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      disabled: true,
                      value: user.email ?? ""
                    }, void 0, false, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 165,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/profile/UpdateProfileForm.tsx",
                  lineNumber: 162,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                  condition: user.email,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      type: "button",
                      color: "transparent",
                      size: "small",
                      href: configuration_default.paths.settings.email,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "text-xs font-normal",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                          i18nKey: "profile:updateEmailSubmitLabel"
                        }, void 0, false, {
                          fileName: "app/components/profile/UpdateProfileForm.tsx",
                          lineNumber: 177,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/profile/UpdateProfileForm.tsx",
                        lineNumber: 176,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 170,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 169,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/profile/UpdateProfileForm.tsx",
                  lineNumber: 168,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                  condition: !user.email,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      type: "button",
                      color: "transparent",
                      size: "small",
                      href: configuration_default.paths.settings.authentication,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "text-xs font-normal",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                          i18nKey: "profile:addEmailAddress"
                        }, void 0, false, {
                          fileName: "app/components/profile/UpdateProfileForm.tsx",
                          lineNumber: 192,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/profile/UpdateProfileForm.tsx",
                        lineNumber: 191,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 185,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 184,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/profile/UpdateProfileForm.tsx",
                  lineNumber: 183,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 161,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "profile:phoneNumberLabel"
                    }, void 0, false, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 201,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      disabled: true,
                      value: currentPhoneNumber
                    }, void 0, false, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 203,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/profile/UpdateProfileForm.tsx",
                  lineNumber: 200,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                  condition: configuration_default.auth.providers.phoneNumber,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                      condition: !currentPhoneNumber,
                      fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemovePhoneNumberButton, {
                        user,
                        onSuccess: () => {
                          onUpdate({
                            phoneNumber: null
                          });
                        }
                      }, void 0, false, {
                        fileName: "app/components/profile/UpdateProfileForm.tsx",
                        lineNumber: 212,
                        columnNumber: 21
                      }, this),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddPhoneNumberButton, {
                        onClick: () => setDisplayUpdatePhoneNumber(true)
                      }, void 0, false, {
                        fileName: "app/components/profile/UpdateProfileForm.tsx",
                        lineNumber: 222,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 209,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 208,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/profile/UpdateProfileForm.tsx",
                  lineNumber: 207,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 199,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                className: "w-full md:w-auto",
                loading,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "profile:updateProfileSubmitLabel"
                }, void 0, false, {
                  fileName: "app/components/profile/UpdateProfileForm.tsx",
                  lineNumber: 232,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 231,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 230,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/profile/UpdateProfileForm.tsx",
          lineNumber: 126,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/UpdateProfileForm.tsx",
        lineNumber: 120,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: displayUpdatePhoneNumber,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkPhoneNumberModal_default, {
          isOpen: true,
          setIsOpen: setDisplayUpdatePhoneNumber,
          onSuccess: (phoneNumber) => {
            onUpdate({
              phoneNumber
            });
          }
        }, void 0, false, {
          fileName: "app/components/profile/UpdateProfileForm.tsx",
          lineNumber: 239,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/UpdateProfileForm.tsx",
        lineNumber: 238,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/profile/UpdateProfileForm.tsx",
    lineNumber: 119,
    columnNumber: 5
  }, this);
}
function getPhotoFile(value) {
  if (!value || typeof value === "string") {
    return;
  }
  return value.item(0) ?? void 0;
}
async function uploadUserProfilePhoto(storage, photoFile, userId) {
  const url = `/profiles/${userId}/${photoFile.name}`;
  const bytes = await photoFile.arrayBuffer();
  const fileRef = ref(storage, url);
  await uploadBytes(fileRef, bytes);
  return await getDownloadURL(fileRef);
}
function RemovePhoneNumberButton({
  user,
  onSuccess
}) {
  const [isModalOpen, setIsModalOpen] = (0, import_react2.useState)(false);
  const requestState = useRequestState();
  const { t } = useTranslation();
  const onUnlinkPhoneNumber = (0, import_react2.useCallback)(() => {
    const promise = unlink(user, PhoneAuthProvider.PROVIDER_ID).then(() => {
      setIsModalOpen(false);
      onSuccess();
    }).catch((error) => {
      requestState.setError(error);
      throw getFirebaseErrorCode(error);
    });
    requestState.setLoading(true);
    return _t.promise(promise, {
      loading: t(`profile:unlinkActionLoading`),
      success: t(`profile:unlinkActionSuccess`),
      error: t(`profile:unlinkActionError`)
    });
  }, [user, requestState, t, onSuccess]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        type: "button",
        color: "transparent",
        size: "small",
        onClick: () => setIsModalOpen(true),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-xs font-normal",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "profile:removePhoneNumber"
          }, void 0, false, {
            fileName: "app/components/profile/UpdateProfileForm.tsx",
            lineNumber: 322,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/profile/UpdateProfileForm.tsx",
          lineNumber: 321,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/UpdateProfileForm.tsx",
        lineNumber: 315,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "profile:removePhoneNumber"
        }, void 0, false, {
          fileName: "app/components/profile/UpdateProfileForm.tsx",
          lineNumber: 327,
          columnNumber: 18
        }, this),
        isOpen: isModalOpen,
        setIsOpen: setIsModalOpen,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-3",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "profile:confirmRemovePhoneNumberDescription"
              }, void 0, false, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 333,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 332,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "common:modalConfirmationQuestion"
              }, void 0, false, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 337,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 336,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: requestState.state.error,
              children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
                error
              }, void 0, false, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 341,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 340,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              block: true,
              loading: requestState.state.loading,
              color: "danger",
              onClick: onUnlinkPhoneNumber,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "profile:confirmRemovePhoneNumber"
              }, void 0, false, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 350,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 344,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/profile/UpdateProfileForm.tsx",
          lineNumber: 331,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/profile/UpdateProfileForm.tsx",
        lineNumber: 326,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/profile/UpdateProfileForm.tsx",
    lineNumber: 314,
    columnNumber: 5
  }, this);
}
function AddPhoneNumberButton(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
    type: "button",
    color: "transparent",
    size: "small",
    onClick: props.onClick,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "text-xs font-normal",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: "profile:addPhoneNumber"
      }, void 0, false, {
        fileName: "app/components/profile/UpdateProfileForm.tsx",
        lineNumber: 371,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/profile/UpdateProfileForm.tsx",
      lineNumber: 370,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/profile/UpdateProfileForm.tsx",
    lineNumber: 364,
    columnNumber: 5
  }, this);
}
var UpdateProfileForm_default = UpdateProfileForm;

// app/routes/__app/settings/profile/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Profile Settings"
  };
};
var ProfileDetailsPage = () => {
  const { userSession, setUserSession } = (0, import_react3.useContext)(user_session_default);
  const { data: user } = nr();
  const onUpdate = (0, import_react3.useCallback)(
    (data) => {
      const authData = userSession?.auth;
      if (authData) {
        setUserSession({
          auth: {
            ...authData,
            ...data
          },
          data: userSession.data
        });
      }
    },
    [setUserSession, userSession]
  );
  if (!user) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
    heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "profile:generalTab"
    }, void 0, false, {
      fileName: "app/routes/__app/settings/profile/index.tsx",
      lineNumber: 48,
      columnNumber: 16
    }, this),
    subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "profile:generalTabSubheading"
    }, void 0, false, {
      fileName: "app/routes/__app/settings/profile/index.tsx",
      lineNumber: 49,
      columnNumber: 19
    }, this),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseStorageProvider, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateProfileForm_default, {
        user,
        onUpdate
      }, void 0, false, {
        fileName: "app/routes/__app/settings/profile/index.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/__app/settings/profile/index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__app/settings/profile/index.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
};
var profile_default = ProfileDetailsPage;
export {
  profile_default as default,
  meta
};
//# sourceMappingURL=/build/routes/__app/settings/profile/index-NREZ3ZCA.js.map
