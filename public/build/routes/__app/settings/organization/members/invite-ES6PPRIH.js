import {
  MembershipRoleSelector_default
} from "/build/_shared/chunk-D76F7IXS.js";
import "/build/_shared/chunk-MGQONI2O.js";
import {
  useApiRequest
} from "/build/_shared/chunk-WVDBVXLN.js";
import "/build/_shared/chunk-B76DMKWT.js";
import "/build/_shared/chunk-4I42Q7Y2.js";
import "/build/_shared/chunk-OJUH3UKO.js";
import {
  SettingsTile_default
} from "/build/_shared/chunk-33GWQEOE.js";
import "/build/_shared/chunk-JDRCLJ2Q.js";
import {
  useFieldArray,
  useForm
} from "/build/_shared/chunk-6EEWVN7Z.js";
import {
  membership_role_default
} from "/build/_shared/chunk-W4DXIIZX.js";
import "/build/_shared/chunk-AJBLUEBX.js";
import "/build/_shared/chunk-NMWHWOJM.js";
import "/build/_shared/chunk-CCK66CUU.js";
import {
  _t
} from "/build/_shared/chunk-OQCGFTRH.js";
import {
  TextField_default
} from "/build/_shared/chunk-T4OLHNMO.js";
import "/build/_shared/chunk-CSNF7QXE.js";
import {
  require_XMarkIcon
} from "/build/_shared/chunk-XQJIPBYI.js";
import "/build/_shared/chunk-4C3HDJAL.js";
import "/build/_shared/chunk-EYLCNKMF.js";
import "/build/_shared/chunk-U3LVU62Z.js";
import {
  Tooltip_default
} from "/build/_shared/chunk-WGYKNE6A.js";
import "/build/_shared/chunk-5CBDJCHW.js";
import "/build/_shared/chunk-6ZZPVUWI.js";
import "/build/_shared/chunk-UJJUUA64.js";
import "/build/_shared/chunk-CRZAZ7IR.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import {
  useUserSession
} from "/build/_shared/chunk-KHW4CDLX.js";
import "/build/_shared/chunk-52KVLBBL.js";
import {
  IconButton_default
} from "/build/_shared/chunk-MEFOEGYP.js";
import "/build/_shared/chunk-4PMGBJWS.js";
import "/build/_shared/chunk-CXJ2SC35.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import "/build/_shared/chunk-ODW25BWE.js";
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
import "/build/_shared/chunk-A4KF3ELC.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@heroicons/react/24/outline/ArrowLeftIcon.js
var require_ArrowLeftIcon = __commonJS({
  "node_modules/@heroicons/react/24/outline/ArrowLeftIcon.js"(exports, module) {
    var React = require_react();
    function ArrowLeftIcon2({
      title,
      titleId,
      ...props
    }, svgRef) {
      return /* @__PURE__ */ React.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
      }, props), title ? /* @__PURE__ */ React.createElement("title", {
        id: titleId
      }, title) : null, /* @__PURE__ */ React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      }));
    }
    var ForwardRef = React.forwardRef(ArrowLeftIcon2);
    module.exports = ForwardRef;
  }
});

// node_modules/@heroicons/react/24/outline/PlusCircleIcon.js
var require_PlusCircleIcon = __commonJS({
  "node_modules/@heroicons/react/24/outline/PlusCircleIcon.js"(exports, module) {
    var React = require_react();
    function PlusCircleIcon2({
      title,
      titleId,
      ...props
    }, svgRef) {
      return /* @__PURE__ */ React.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
      }, props), title ? /* @__PURE__ */ React.createElement("title", {
        id: titleId
      }, title) : null, /* @__PURE__ */ React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      }));
    }
    var ForwardRef = React.forwardRef(PlusCircleIcon2);
    module.exports = ForwardRef;
  }
});

// app/routes/__app/settings/organization/members/invite.tsx
init_es();
var import_ArrowLeftIcon = __toESM(require_ArrowLeftIcon());

// app/components/organizations/InviteMembersForm.tsx
init_es();
var import_react = __toESM(require_react());
var import_PlusCircleIcon = __toESM(require_PlusCircleIcon());
var import_XMarkIcon = __toESM(require_XMarkIcon());

// app/lib/organizations/hooks/use-invite-members.ts
function useInviteMembers() {
  return useApiRequest(
    `/settings/organization/members/invite`,
    "POST",
    {
      redirect: "follow"
    }
  );
}

// app/components/organizations/InviteMembersForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var InviteMembersForm = () => {
  const { t } = useTranslation("organization");
  const user = useUserSession();
  const [inviteMembers, { loading }] = useInviteMembers();
  const { register, handleSubmit, setValue, control, clearErrors, watch } = useInviteMembersForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
    shouldUnregister: true
  });
  const watchFieldArray = watch("members");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index]
    };
  });
  const onSubmit = (0, import_react.useCallback)(
    async ({ members }) => {
      const promise = inviteMembers(members);
      return _t.promise(promise, {
        success: t(`inviteMembersSuccess`),
        error: t(`inviteMembersError`),
        loading: t(`inviteMembersLoading`)
      });
    },
    [inviteMembers, t]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    className: "flex flex-col space-y-4",
    "data-cy": "invite-members-form",
    onSubmit: (event) => {
      void handleSubmit(onSubmit)(event);
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-2",
        children: [
          controlledFields.map((field, index) => {
            const emailInputName = `members.${index}.email`;
            const roleInputName = `members.${index}.role`;
            const emailControl = register(emailInputName, {
              required: true,
              validate: (value) => {
                const invalid = getFormValidator(watchFieldArray)(value, index);
                if (invalid) {
                  return t(`duplicateInviteEmailError`);
                }
                const isSameAsCurrentUserEmail = user?.auth?.email === value;
                if (isSameAsCurrentUserEmail) {
                  return t(`invitingOwnAccountError`);
                }
                return true;
              }
            });
            register(roleInputName, {
              value: field.role
            });
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center space-x-0.5 md:space-x-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-7/12 md:w-8/12",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      "data-cy": "invite-email-input",
                      name: emailControl.name,
                      onChange: (event) => {
                        void emailControl.onChange(event);
                      },
                      onBlur: (event) => {
                        void emailControl.onBlur(event);
                      },
                      innerRef: emailControl.ref,
                      placeholder: "member@email.com",
                      type: "email",
                      required: true
                    }, void 0, false, {
                      fileName: "app/components/organizations/InviteMembersForm.tsx",
                      lineNumber: 101,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/organizations/InviteMembersForm.tsx",
                    lineNumber: 100,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-4/12 md:w-3/12",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MembershipRoleSelector_default, {
                      value: field.role,
                      onChange: (role) => {
                        setValue(roleInputName, role);
                      }
                    }, void 0, false, {
                      fileName: "app/components/organizations/InviteMembersForm.tsx",
                      lineNumber: 118,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/organizations/InviteMembersForm.tsx",
                    lineNumber: 117,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                    condition: fields.length > 1,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "w-1/12",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
                        className: "flex justify-center",
                        content: t("removeInviteButtonLabel"),
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                          "data-cy": "remove-invite-button",
                          label: t("removeInviteButtonLabel"),
                          onClick: () => {
                            remove(index);
                            clearErrors(emailInputName);
                          },
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_XMarkIcon.default, {
                            className: "h-4 lg:h-5"
                          }, void 0, false, {
                            fileName: "app/components/organizations/InviteMembersForm.tsx",
                            lineNumber: 140,
                            columnNumber: 25
                          }, this)
                        }, void 0, false, {
                          fileName: "app/components/organizations/InviteMembersForm.tsx",
                          lineNumber: 132,
                          columnNumber: 23
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/organizations/InviteMembersForm.tsx",
                        lineNumber: 128,
                        columnNumber: 21
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/organizations/InviteMembersForm.tsx",
                      lineNumber: 127,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/organizations/InviteMembersForm.tsx",
                    lineNumber: 126,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/organizations/InviteMembersForm.tsx",
                lineNumber: 99,
                columnNumber: 15
              }, this)
            }, field.id, false, {
              fileName: "app/components/organizations/InviteMembersForm.tsx",
              lineNumber: 98,
              columnNumber: 13
            }, this);
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              "data-cy": "append-new-invite-button",
              type: "button",
              color: "transparent",
              size: "small",
              disabled: loading,
              onClick: () => append(memberFactory()),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_PlusCircleIcon.default, {
                    className: "h-5"
                  }, void 0, false, {
                    fileName: "app/components/organizations/InviteMembersForm.tsx",
                    lineNumber: 160,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "organization:addAnotherMemberButtonLabel"
                    }, void 0, false, {
                      fileName: "app/components/organizations/InviteMembersForm.tsx",
                      lineNumber: 163,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/organizations/InviteMembersForm.tsx",
                    lineNumber: 162,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/organizations/InviteMembersForm.tsx",
                lineNumber: 159,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/organizations/InviteMembersForm.tsx",
              lineNumber: 151,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/organizations/InviteMembersForm.tsx",
            lineNumber: 150,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/organizations/InviteMembersForm.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          className: "w-full lg:w-auto",
          "data-cy": "send-invites-button",
          type: "submit",
          loading,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: !loading,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "organization:inviteMembersSubmitLabel"
              }, void 0, false, {
                fileName: "app/components/organizations/InviteMembersForm.tsx",
                lineNumber: 178,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/organizations/InviteMembersForm.tsx",
              lineNumber: 177,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: loading,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "organization:inviteMembersLoading"
              }, void 0, false, {
                fileName: "app/components/organizations/InviteMembersForm.tsx",
                lineNumber: 182,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/organizations/InviteMembersForm.tsx",
              lineNumber: 181,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/organizations/InviteMembersForm.tsx",
          lineNumber: 171,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/organizations/InviteMembersForm.tsx",
        lineNumber: 170,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/organizations/InviteMembersForm.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
};
function memberFactory() {
  return {
    email: "",
    role: membership_role_default.Member
  };
}
function useInviteMembersForm() {
  return useForm({
    defaultValues: {
      members: [memberFactory()]
    },
    shouldUseNativeValidation: true,
    shouldFocusError: true,
    shouldUnregister: true
  });
}
function getFormValidator(members) {
  return function isValueInvalid(value, index) {
    const emails = members.map((member) => member.email);
    const valueIndex = emails.indexOf(value);
    return valueIndex >= 0 && valueIndex !== index;
  };
}
var InviteMembersForm_default = InviteMembersForm;

// app/routes/__app/settings/organization/members/invite.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Invite Members"
  };
};
var OrganizationMembersInvitePage = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
        heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "organization:inviteMembersPageHeading"
        }, void 0, false, {
          fileName: "app/routes/__app/settings/organization/members/invite.tsx",
          lineNumber: 67,
          columnNumber: 18
        }, this),
        subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "organization:inviteMembersPageSubheading"
        }, void 0, false, {
          fileName: "app/routes/__app/settings/organization/members/invite.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InviteMembersForm_default, {}, void 0, false, {
          fileName: "app/routes/__app/settings/organization/members/invite.tsx",
          lineNumber: 72,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/settings/organization/members/invite.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoBackToMembersButton, {}, void 0, false, {
          fileName: "app/routes/__app/settings/organization/members/invite.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/settings/organization/members/invite.tsx",
        lineNumber: 75,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/settings/organization/members/invite.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
};
var invite_default = OrganizationMembersInvitePage;
function GoBackToMembersButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
    size: "small",
    color: "transparent",
    href: "/settings/organization/members",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "flex items-center space-x-1",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ArrowLeftIcon.default, {
          className: "h-3"
        }, void 0, false, {
          fileName: "app/routes/__app/settings/organization/members/invite.tsx",
          lineNumber: 92,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "organization:goBackToMembersPage"
          }, void 0, false, {
            fileName: "app/routes/__app/settings/organization/members/invite.tsx",
            lineNumber: 95,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/__app/settings/organization/members/invite.tsx",
          lineNumber: 94,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/__app/settings/organization/members/invite.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__app/settings/organization/members/invite.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
export {
  invite_default as default,
  meta
};
//# sourceMappingURL=/build/routes/__app/settings/organization/members/invite-ES6PPRIH.js.map
