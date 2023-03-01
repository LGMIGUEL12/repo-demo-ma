import {
  FirebaseStorageProvider,
  ImageUploadInput_default
} from "/build/_shared/chunk-6X52P665.js";
import {
  useForm
} from "/build/_shared/chunk-6EEWVN7Z.js";
import {
  ORGANIZATIONS_COLLECTION
} from "/build/_shared/chunk-BHF276FC.js";
import {
  useRequestState
} from "/build/_shared/chunk-NMWHWOJM.js";
import {
  _t
} from "/build/_shared/chunk-OQCGFTRH.js";
import {
  SettingsTile_default
} from "/build/_shared/chunk-CQAGV6LY.js";
import {
  organization_default
} from "/build/_shared/chunk-CCK66CUU.js";
import {
  TextField_default
} from "/build/_shared/chunk-XTL7KJXM.js";
import {
  Label_default
} from "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import "/build/_shared/chunk-MZJK6QBW.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import {
  Ci,
  Pr,
  gl,
  sa
} from "/build/_shared/chunk-CXJ2SC35.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes
} from "/build/_shared/chunk-BNRSGPT3.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import "/build/_shared/chunk-VCZGRDVP.js";
import "/build/_shared/chunk-4PMGBJWS.js";
import "/build/_shared/chunk-ISSCYSF5.js";
import {
  Button_default
} from "/build/_shared/chunk-JLCRG65W.js";
import "/build/_shared/chunk-DN742LHR.js";
import {
  Trans,
  init_es,
  useTranslation
} from "/build/_shared/chunk-G4KZDRB7.js";
import "/build/_shared/chunk-WULCHIKQ.js";
import "/build/_shared/chunk-WIOFJORR.js";
import "/build/_shared/chunk-A4KF3ELC.js";
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

// app/routes/__app/settings/organization/index.tsx
init_es();

// app/components/organizations/UpdateOrganizationForm.tsx
var import_react2 = __toESM(require_react());
init_es();

// app/lib/organizations/hooks/use-update-organization.ts
var import_react = __toESM(require_react());
function useUpdateOrganization() {
  const { state, setError, setData, setLoading } = useRequestState();
  const firestore = Ci();
  const updateOrganization = (0, import_react.useCallback)(
    async (organization) => {
      setLoading(true);
      try {
        const ref2 = sa(firestore, ORGANIZATIONS_COLLECTION, organization.id);
        await gl(ref2, organization);
        setData(organization);
      } catch (e) {
        setError(e.message);
      }
    },
    [firestore, setData, setError, setLoading]
  );
  return [updateOrganization, state];
}

// app/components/organizations/UpdateOrganizationForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var UpdateOrganizationForm = () => {
  const storage = Pr();
  const { organization, setOrganization } = (0, import_react2.useContext)(organization_default);
  const [updateOrganization, { loading }] = useUpdateOrganization();
  const [logoIsDirty, setLogoIsDirty] = (0, import_react2.useState)(false);
  const { t } = useTranslation("organization");
  const currentOrganizationName = organization?.name ?? "";
  const currentLogoUrl = organization?.logoURL || null;
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: currentOrganizationName,
      logoURL: currentLogoUrl
    }
  });
  const onLogoCleared = (0, import_react2.useCallback)(() => {
    setLogoIsDirty(true);
  }, []);
  const onSubmit = (0, import_react2.useCallback)(
    async (organizationName, logoFile) => {
      const organizationId = organization?.id;
      if (!organizationId) {
        const errorMessage = t(`updateOrganizationErrorMessage`);
        return _t.error(errorMessage);
      }
      const logoName = logoFile?.name;
      const logoURL = logoName ? await uploadLogo({
        logo: logoFile,
        storage,
        organizationId
      }).catch(() => {
        const errorMessage = t(`updateLogoErrorMessage`);
        _t.error(errorMessage);
        return void 0;
      }) : currentLogoUrl;
      const isLogoRemoved = logoIsDirty && !logoName;
      if (isLogoRemoved && currentLogoUrl) {
        try {
          await deleteObject(ref(storage, currentLogoUrl));
        } catch (e) {
        }
      }
      const organizationData = {
        id: organization.id,
        name: organizationName,
        logoURL: isLogoRemoved ? null : logoURL
      };
      const promise = updateOrganization(organizationData).then(() => {
        setOrganization({
          ...organization,
          ...organizationData
        });
      });
      await _t.promise(promise, {
        loading: t(`updateOrganizationLoadingMessage`),
        success: t(`updateOrganizationSuccessMessage`),
        error: t(`updateOrganizationErrorMessage`)
      });
    },
    [
      logoIsDirty,
      currentLogoUrl,
      organization,
      setOrganization,
      storage,
      t,
      updateOrganization
    ]
  );
  (0, import_react2.useEffect)(() => {
    reset({
      name: organization?.name,
      logoURL: organization?.logoURL
    });
  }, [organization, reset]);
  const nameControl = register("name", {
    required: true
  });
  const logoControl = register("logoURL");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    onSubmit: handleSubmit((value) => {
      return onSubmit(value.name, getLogoFile(value.logoURL));
    }),
    className: "space-y-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "organization:organizationNameInputLabel"
              }, void 0, false, {
                fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
                lineNumber: 135,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                "data-cy": "organization-name-input",
                required: true,
                name: nameControl.name,
                innerRef: nameControl.ref,
                onChange: nameControl.onChange,
                onBlur: nameControl.onBlur,
                placeholder: "ex. IndieCorp"
              }, void 0, false, {
                fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
                lineNumber: 137,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
            lineNumber: 134,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
          lineNumber: 133,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label_default, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "organization:organizationLogoInputLabel"
            }, void 0, false, {
              fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
              lineNumber: 150,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageUploadInput_default, {
              name: logoControl.name,
              onChange: logoControl.onChange,
              onBlur: logoControl.onBlur,
              innerRef: logoControl.ref,
              image: currentLogoUrl,
              onClear: onLogoCleared,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "common:imageInputLabel"
              }, void 0, false, {
                fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
                lineNumber: 160,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
              lineNumber: 152,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
          lineNumber: 149,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            className: "w-full md:w-auto",
            "data-cy": "update-organization-submit-button",
            loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "organization:updateOrganizationSubmitLabel"
            }, void 0, false, {
              fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
              lineNumber: 170,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
            lineNumber: 165,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
          lineNumber: 164,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
    lineNumber: 126,
    columnNumber: 5
  }, this);
};
async function uploadLogo({
  storage,
  organizationId,
  logo
}) {
  const path = getLogoStoragePath(organizationId, logo.name);
  const bytes = await logo.arrayBuffer();
  const fileRef = ref(storage, path);
  await uploadBytes(fileRef, bytes);
  return await getDownloadURL(fileRef);
}
function getLogoStoragePath(organizationId, fileName) {
  return [`/organizations`, organizationId, fileName].join("/");
}
function getLogoFile(value) {
  if (!value || typeof value === "string") {
    return;
  }
  return value.item(0) ?? void 0;
}
var UpdateOrganizationForm_default = UpdateOrganizationForm;

// app/routes/__app/settings/organization/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Organization Details"
  };
};
var OrganizationSettingsPage = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
    heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "organization:generalTabLabel"
    }, void 0, false, {
      fileName: "app/routes/__app/settings/organization/index.tsx",
      lineNumber: 17,
      columnNumber: 16
    }, this),
    subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "organization:generalTabLabelSubheading"
    }, void 0, false, {
      fileName: "app/routes/__app/settings/organization/index.tsx",
      lineNumber: 18,
      columnNumber: 19
    }, this),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseStorageProvider, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateOrganizationForm_default, {}, void 0, false, {
        fileName: "app/routes/__app/settings/organization/index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/__app/settings/organization/index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__app/settings/organization/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};
var organization_default2 = OrganizationSettingsPage;
export {
  organization_default2 as default,
  meta
};
//# sourceMappingURL=/build/routes/__app/settings/organization/index-4AH7DD26.js.map
