import {
  LoadingMembersSpinner_default,
  RoleBadge_default
} from "/build/_shared/chunk-JYPYHNTD.js";
import {
  Badge_default
} from "/build/_shared/chunk-DAAZXNN4.js";
import {
  MembershipRoleSelector_default
} from "/build/_shared/chunk-SYTY7UFF.js";
import "/build/_shared/chunk-MGQONI2O.js";
import {
  useApiRequest
} from "/build/_shared/chunk-WVDBVXLN.js";
import "/build/_shared/chunk-B76DMKWT.js";
import "/build/_shared/chunk-4I42Q7Y2.js";
import {
  canUpdateUser
} from "/build/_shared/chunk-OJUH3UKO.js";
import "/build/_shared/chunk-JDRCLJ2Q.js";
import {
  membership_role_default
} from "/build/_shared/chunk-W4DXIIZX.js";
import {
  ORGANIZATIONS_COLLECTION
} from "/build/_shared/chunk-BHF276FC.js";
import {
  Modal_default
} from "/build/_shared/chunk-NKQZC65O.js";
import "/build/_shared/chunk-T2CF575W.js";
import "/build/_shared/chunk-AJBLUEBX.js";
import "/build/_shared/chunk-NMWHWOJM.js";
import "/build/_shared/chunk-CCK66CUU.js";
import {
  _t
} from "/build/_shared/chunk-OQCGFTRH.js";
import {
  t
} from "/build/_shared/chunk-LGUD5Z4W.js";
import {
  Alert_default
} from "/build/_shared/chunk-75ATWWIY.js";
import {
  Label_default
} from "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import {
  Dropdown_default,
  ProfileAvatar_default,
  qe
} from "/build/_shared/chunk-3RHYN7AX.js";
import "/build/_shared/chunk-EPY2ZBMR.js";
import "/build/_shared/chunk-2RQ7OU4V.js";
import "/build/_shared/chunk-5CBDJCHW.js";
import "/build/_shared/chunk-I5LWYJ5L.js";
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
import {
  AdjustmentsHorizontalIcon_default,
  EllipsisVerticalIcon_default,
  UserCircleIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-7KHFEMFW.js";
import {
  Br,
  Ci,
  sa
} from "/build/_shared/chunk-CXJ2SC35.js";
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
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/organizations/OrganizationMembersList.tsx
init_es();

// app/core/hooks/use-user-id.ts
function useUserId() {
  const session = useUserSession();
  return session?.auth?.uid;
}

// app/lib/organizations/hooks/use-fetch-organization.ts
function useFetchOrganization(organizationId) {
  const firestore = Ci();
  const ref = sa(
    firestore,
    ORGANIZATIONS_COLLECTION,
    organizationId
  );
  return Br(ref, { idField: "id" });
}

// app/components/organizations/OrganizationMembersActionsContainer.tsx
var import_react5 = __toESM(require_react());

// app/components/organizations/TransferOrganizationOwnershipModal.tsx
var import_react = __toESM(require_react());
init_es();

// app/lib/organizations/hooks/use-transfer-organization-ownership.ts
function useTransferOrganizationOwnership() {
  return useApiRequest(
    `/settings/organization/members/owner`,
    "PUT"
  );
}
var use_transfer_organization_ownership_default = useTransferOrganizationOwnership;

// app/components/organizations/TransferOrganizationOwnershipModal.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TransferOrganizationOwnershipModal = ({ isOpen, setIsOpen, member }) => {
  const targetMemberDisplayName = member.displayName ?? member.email;
  const targetMemberId = member.uid;
  const { t: t2 } = useTranslation();
  const heading = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
    i18nKey: "organization:transferOwnership"
  }, void 0, false, {
    fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
    lineNumber: 20,
    columnNumber: 19
  }, this);
  const [transferOrganizationOwnership, transferOrganizationOwnershipState] = use_transfer_organization_ownership_default();
  const loading = transferOrganizationOwnershipState.loading;
  const onConfirmTransferOwnership = (0, import_react.useCallback)(async () => {
    const promise = transferOrganizationOwnership({
      userId: targetMemberId
    });
    await _t.promise(promise, {
      loading: t2("organization:transferringOwnership"),
      success: t2("organization:transferOwnershipSuccess"),
      error: t2("organization:transferOwnershipError")
    });
    setIsOpen(false);
  }, [setIsOpen, t2, targetMemberId, transferOrganizationOwnership]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    heading,
    isOpen,
    setIsOpen,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "organization:transferOwnershipDisclaimer",
            values: {
              member: targetMemberDisplayName
            },
            components: { b: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {}, void 0, false, {
              fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
              lineNumber: 50,
              columnNumber: 30
            }, this) }
          }, void 0, false, {
            fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
            lineNumber: 45,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "common:modalConfirmationQuestion"
          }, void 0, false, {
            fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
            lineNumber: 55,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          block: true,
          "data-cy": "confirm-transfer-ownership-button",
          color: "danger",
          onClick: onConfirmTransferOwnership,
          loading,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: loading,
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "organization:transferOwnership"
            }, void 0, false, {
              fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
              lineNumber: 67,
              columnNumber: 23
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "organization:transferringOwnership"
            }, void 0, false, {
              fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
};
var TransferOrganizationOwnershipModal_default = TransferOrganizationOwnershipModal;

// app/components/organizations/OrganizationMemberActionsDropdown.tsx
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var OrganizationMemberActionsDropdown = (props) => {
  const Button = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownButton, {
    disabled: props.disabled
  }, void 0, false, {
    fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
    lineNumber: 23,
    columnNumber: 18
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, {
    button: Button,
    items: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
        "data-cy": "update-member-role-action",
        onClick: props.onChangeRoleSelected,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex items-center space-x-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdjustmentsHorizontalIcon_default, {
              className: "h-5"
            }, void 0, false, {
              fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "organization:changeRole"
              }, void 0, false, {
                fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                lineNumber: 37,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, 1, false, {
        fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: props.isOwner,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
          "data-cy": "transfer-ownership-action",
          onClick: props.onTransferOwnershipSelected,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "flex items-center space-x-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserCircleIcon_default, {
                className: "h-5"
              }, void 0, false, {
                fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                lineNumber: 47,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "organization:transferOwnership"
                }, void 0, false, {
                  fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                  lineNumber: 49,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                lineNumber: 48,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, 2, false, {
        fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Divider, {}, "divider", false, {
        fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
        "data-cy": "remove-member-action",
        onClick: props.onRemoveSelected,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex items-center space-x-2 text-red-700 dark:text-red-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, {
              className: "h-5"
            }, void 0, false, {
              fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
              lineNumber: 65,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "organization:removeMember"
              }, void 0, false, {
                fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                lineNumber: 67,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
              lineNumber: 66,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      }, 3, false, {
        fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ]
  }, void 0, false, {
    fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};
function DropdownButton({
  disabled
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Button, {
    "data-cy": "member-actions-dropdown",
    as: "button",
    disabled,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
      label: "Open members actions menu",
      as: "div",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EllipsisVerticalIcon_default, {
        className: "h-6"
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
var OrganizationMemberActionsDropdown_default = OrganizationMemberActionsDropdown;

// app/components/organizations/RemoveOrganizationMemberModal.tsx
var import_react3 = __toESM(require_react());
init_es();

// app/lib/organizations/hooks/use-remove-member.ts
function useRemoveMemberRequest(memberId) {
  const path = `/settings/organization/members/${memberId}`;
  return useApiRequest(path, `DELETE`);
}
var use_remove_member_default = useRemoveMemberRequest;

// app/components/organizations/RemoveOrganizationMemberModal.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var RemoveOrganizationMemberModal = ({ isOpen, setIsOpen, member }) => {
  const [removeMemberRequest, { loading }] = use_remove_member_default(member.uid);
  const onUserRemoved = (0, import_react3.useCallback)(async () => {
    await _t.promise(removeMemberRequest(), {
      success: t(`removeMemberSuccessMessage`),
      error: t(`removeMemberErrorMessage`),
      loading: t(`removeMemberLoadingMessage`)
    });
    setIsOpen(false);
  }, [removeMemberRequest, setIsOpen]);
  const heading = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
    i18nKey: "organization:removeMemberModalHeading"
  }, void 0, false, {
    fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
    lineNumber: 29,
    columnNumber: 19
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    heading,
    isOpen,
    setIsOpen,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "common:modalConfirmationQuestion"
          }, void 0, false, {
            fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
            lineNumber: 35,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          block: true,
          "data-cy": "confirm-remove-member",
          color: "danger",
          onClick: onUserRemoved,
          loading,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "organization:removeMemberSubmitLabel"
          }, void 0, false, {
            fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
            lineNumber: 45,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
};
var RemoveOrganizationMemberModal_default = RemoveOrganizationMemberModal;

// app/components/organizations/UpdateMemberRoleModal.tsx
var import_react4 = __toESM(require_react());
init_es();

// app/lib/organizations/hooks/use-update-member-role.ts
function useUpdateMemberRequest(memberId) {
  return useApiRequest(
    `/settings/organization/members/${memberId}`,
    "PUT"
  );
}
var use_update_member_role_default = useUpdateMemberRequest;

// app/components/organizations/UpdateMemberRoleModal.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var UpdateMemberRoleModal = ({ isOpen, setIsOpen, memberRole, member }) => {
  const { t: t2 } = useTranslation("organization");
  const [role, setRole] = (0, import_react4.useState)(memberRole);
  const [updateMember, state] = use_update_member_role_default(member.uid);
  const onRoleUpdated = (0, import_react4.useCallback)(async () => {
    if (role === memberRole) {
      const message = t2("chooseDifferentRoleError");
      _t.error(message, {
        className: "chooseDifferentRoleError"
      });
      return;
    }
    const promise = updateMember({ role });
    await _t.promise(promise, {
      loading: t2("updateRoleLoadingMessage"),
      success: t2("updateRoleSuccessMessage"),
      error: t2("updatingRoleErrorMessage")
    });
    setIsOpen(false);
  }, [role, memberRole, updateMember, t2, setIsOpen]);
  const heading = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
    i18nKey: "organization:updateMemberRoleModalHeading"
  }, void 0, false, {
    fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    heading,
    isOpen,
    setIsOpen,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-12",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-1",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "organization:memberRoleInputLabel"
              }, void 0, false, {
                fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
                lineNumber: 55,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MembershipRoleSelector_default, {
              value: memberRole,
              onChange: setRole
            }, void 0, false, {
              fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          "data-cy": "confirm-update-member-role",
          block: true,
          loading: state.loading,
          onClick: onRoleUpdated,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "organization:updateRoleSubmitLabel"
          }, void 0, false, {
            fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
};
var UpdateMemberRoleModal_default = UpdateMemberRoleModal;

// app/components/organizations/OrganizationMembersActionsContainer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var OrganizationMembersActionsContainer = (props) => {
  const [isUpdatingRole, setIsUpdatingRole] = (0, import_react5.useState)(false);
  const [isRemovingUser, setIsRemovingUser] = (0, import_react5.useState)(false);
  const [isTransferringOwnership, setIsTransferringOwnership] = (0, import_react5.useState)(false);
  const isOwner = props.currentUserRole === membership_role_default.Owner;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationMemberActionsDropdown_default, {
        disabled: props.disabled,
        isOwner,
        onRemoveSelected: () => setIsRemovingUser(true),
        onChangeRoleSelected: () => setIsUpdatingRole(true),
        onTransferOwnershipSelected: () => setIsTransferringOwnership(true)
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationMembersActionsContainer.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemoveOrganizationMemberModal_default, {
        setIsOpen: setIsRemovingUser,
        isOpen: isRemovingUser,
        member: props.targetMember
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationMembersActionsContainer.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateMemberRoleModal_default, {
        setIsOpen: setIsUpdatingRole,
        isOpen: isUpdatingRole,
        member: props.targetMember,
        memberRole: props.targetMemberRole
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationMembersActionsContainer.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: isOwner,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TransferOrganizationOwnershipModal_default, {
          setIsOpen: setIsTransferringOwnership,
          isOpen: isTransferringOwnership,
          member: props.targetMember
        }, void 0, false, {
          fileName: "app/components/organizations/OrganizationMembersActionsContainer.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationMembersActionsContainer.tsx",
        lineNumber: 47,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/organizations/OrganizationMembersActionsContainer.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};
var OrganizationMembersActionsContainer_default = OrganizationMembersActionsContainer;

// app/components/organizations/OrganizationMembersList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function OrganizationMembersList({
  organizationId,
  membersMetadata
}) {
  const userId = useUserId();
  const {
    data: organization,
    status,
    error
  } = useFetchOrganization(organizationId);
  const isLoading = status === "loading";
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingMembersSpinner_default, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: "organization:loadingMembers"
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationMembersList.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/organizations/OrganizationMembersList.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this);
  }
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
      type: "error",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: "organization:loadMembersError"
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationMembersList.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/organizations/OrganizationMembersList.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this);
  }
  const members = getSortedMembers(organization);
  const currentUser = members.find((member) => member.id === userId);
  if (!currentUser) {
    return null;
  }
  const userRole = currentUser.role;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-full space-y-10",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col divide-y divide-gray-100 dark:divide-black-400",
      children: members.map(({ role, id: memberId }) => {
        const metadata = membersMetadata?.find((metadata2) => {
          return metadata2.uid === memberId;
        });
        if (!metadata) {
          return null;
        }
        const displayName = metadata.displayName ? metadata.displayName : metadata.email;
        const isCurrentUser = userId === metadata.uid;
        const shouldEnableActions = canUpdateUser(userRole, role);
        const key = `${metadata.uid}:${userRole}`;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          "data-cy": "organization-member",
          className: "flex flex-col py-2 lg:flex-row lg:items-center lg:space-x-2 justify-between space-y-2 lg:space-y-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-auto items-center space-x-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileAvatar_default, {
                  user: metadata
                }, void 0, false, {
                  fileName: "app/components/organizations/OrganizationMembersList.tsx",
                  lineNumber: 96,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "block truncate text-sm",
                  children: displayName
                }, void 0, false, {
                  fileName: "app/components/organizations/OrganizationMembersList.tsx",
                  lineNumber: 98,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                  condition: isCurrentUser,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "organization:youBadgeLabel"
                    }, void 0, false, {
                      fileName: "app/components/organizations/OrganizationMembersList.tsx",
                      lineNumber: 102,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/organizations/OrganizationMembersList.tsx",
                    lineNumber: 101,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/organizations/OrganizationMembersList.tsx",
                  lineNumber: 100,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/organizations/OrganizationMembersList.tsx",
              lineNumber: 95,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-center justify-end space-x-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoleBadge_default, {
                    role
                  }, void 0, false, {
                    fileName: "app/components/organizations/OrganizationMembersList.tsx",
                    lineNumber: 109,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/organizations/OrganizationMembersList.tsx",
                  lineNumber: 108,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationMembersActionsContainer_default, {
                  disabled: !shouldEnableActions,
                  targetMember: metadata,
                  targetMemberRole: role,
                  currentUserRole: userRole
                }, void 0, false, {
                  fileName: "app/components/organizations/OrganizationMembersList.tsx",
                  lineNumber: 112,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/organizations/OrganizationMembersList.tsx",
              lineNumber: 107,
              columnNumber: 15
            }, this)
          ]
        }, key, true, {
          fileName: "app/components/organizations/OrganizationMembersList.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: "app/components/organizations/OrganizationMembersList.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/organizations/OrganizationMembersList.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
var OrganizationMembersList_default = OrganizationMembersList;
function getSortedMembers(organization) {
  const membersIds = Object.keys(organization.members);
  return membersIds.map((memberId) => {
    const member = organization.members[memberId];
    return {
      ...member,
      id: memberId
    };
  }).sort((prev, next) => {
    return next.role > prev.role ? 1 : -1;
  });
}
export {
  OrganizationMembersList_default as default
};
//# sourceMappingURL=/build/_shared/OrganizationMembersList-MP6JSYEH.js.map
