import {
  LoadingMembersSpinner_default,
  RoleBadge_default
} from "/build/_shared/chunk-JYPYHNTD.js";
import "/build/_shared/chunk-DAAZXNN4.js";
import "/build/_shared/chunk-MGQONI2O.js";
import {
  IfHasPermissions_default
} from "/build/_shared/chunk-4I42Q7Y2.js";
import {
  canDeleteInvites
} from "/build/_shared/chunk-OJUH3UKO.js";
import "/build/_shared/chunk-W4DXIIZX.js";
import {
  INVITES_COLLECTION,
  ORGANIZATIONS_COLLECTION
} from "/build/_shared/chunk-BHF276FC.js";
import {
  Modal_default
} from "/build/_shared/chunk-NKQZC65O.js";
import "/build/_shared/chunk-T2CF575W.js";
import "/build/_shared/chunk-AJBLUEBX.js";
import "/build/_shared/chunk-CCK66CUU.js";
import {
  _t
} from "/build/_shared/chunk-OQCGFTRH.js";
import {
  Alert_default
} from "/build/_shared/chunk-ELS43MJ3.js";
import {
  require_XMarkIcon
} from "/build/_shared/chunk-XQJIPBYI.js";
import {
  FallbackUserAvatar_default
} from "/build/_shared/chunk-FHC7QUPJ.js";
import "/build/_shared/chunk-I5LWYJ5L.js";
import "/build/_shared/chunk-6ZZPVUWI.js";
import "/build/_shared/chunk-UJJUUA64.js";
import "/build/_shared/chunk-CRZAZ7IR.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import "/build/_shared/chunk-KHW4CDLX.js";
import "/build/_shared/chunk-52KVLBBL.js";
import {
  IconButton_default
} from "/build/_shared/chunk-MEFOEGYP.js";
import "/build/_shared/chunk-4PMGBJWS.js";
import {
  Ci,
  ea,
  sa,
  ti,
  yl
} from "/build/_shared/chunk-CXJ2SC35.js";
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

// app/components/organizations/OrganizationInvitedMembersList.tsx
init_es();

// app/lib/organizations/hooks/use-fetch-invited-members.ts
function useFetchInvitedMembers(organizationId) {
  const firestore = Ci();
  const collectionRef = ea(
    firestore,
    ORGANIZATIONS_COLLECTION,
    organizationId,
    INVITES_COLLECTION
  );
  return ti(collectionRef, {
    idField: "id"
  });
}
var use_fetch_invited_members_default = useFetchInvitedMembers;

// app/components/organizations/DeleteInviteButton.tsx
var import_react2 = __toESM(require_react());
init_es();
var import_XMarkIcon = __toESM(require_XMarkIcon());

// app/lib/organizations/hooks/use-delete-invite.ts
var import_react = __toESM(require_react());
function useDeleteInvite() {
  const firestore = Ci();
  return (0, import_react.useCallback)(
    (organizationId, inviteId) => {
      const path = getDeleteInvitePath(organizationId, inviteId);
      const docRef = sa(firestore, path);
      return yl(docRef);
    },
    [firestore]
  );
}
function getDeleteInvitePath(organizationId, inviteId) {
  return [
    ORGANIZATIONS_COLLECTION,
    organizationId,
    INVITES_COLLECTION,
    inviteId
  ].join("/");
}
var use_delete_invite_default = useDeleteInvite;

// app/components/organizations/DeleteInviteButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var DeleteInviteButton = ({ inviteId, organizationId, memberEmail }) => {
  const [isDeleting, setIsDeleting] = (0, import_react2.useState)(false);
  const deleteRequest = use_delete_invite_default();
  const { t } = useTranslation("organization");
  const onInviteDeleteRequested = (0, import_react2.useCallback)(async () => {
    const promise = deleteRequest(organizationId, inviteId);
    await _t.promise(promise, {
      success: t(`deleteInviteSuccessMessage`),
      error: t(`deleteInviteErrorMessage`),
      loading: t(`deleteInviteLoadingMessage`)
    });
    setIsDeleting(false);
  }, [deleteRequest, inviteId, organizationId, t]);
  const heading = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
    i18nKey: "organization:deleteInviteModalHeading"
  }, void 0, false, {
    fileName: "app/components/organizations/DeleteInviteButton.tsx",
    lineNumber: 34,
    columnNumber: 19
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
        "data-cy": "delete-invite-button",
        label: "Delete Invite",
        onClick: () => setIsDeleting(true),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_XMarkIcon.default, {
          className: "h-6"
        }, void 0, false, {
          fileName: "app/components/organizations/DeleteInviteButton.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/organizations/DeleteInviteButton.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: isDeleting,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
          heading,
          isOpen: isDeleting,
          setIsOpen: setIsDeleting,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col space-y-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "organization:confirmDeletingMemberInvite",
                  values: { email: memberEmail },
                  components: { b: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {}, void 0, false, {
                    fileName: "app/components/organizations/DeleteInviteButton.tsx",
                    lineNumber: 53,
                    columnNumber: 34
                  }, this) }
                }, void 0, false, {
                  fileName: "app/components/organizations/DeleteInviteButton.tsx",
                  lineNumber: 50,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/organizations/DeleteInviteButton.tsx",
                lineNumber: 49,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "common:modalConfirmationQuestion"
                }, void 0, false, {
                  fileName: "app/components/organizations/DeleteInviteButton.tsx",
                  lineNumber: 58,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/organizations/DeleteInviteButton.tsx",
                lineNumber: 57,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                "data-cy": "confirm-delete-invite-button",
                color: "danger",
                onClick: onInviteDeleteRequested,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "organization:deleteInviteSubmitLabel"
                }, void 0, false, {
                  fileName: "app/components/organizations/DeleteInviteButton.tsx",
                  lineNumber: 66,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/organizations/DeleteInviteButton.tsx",
                lineNumber: 61,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/organizations/DeleteInviteButton.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/organizations/DeleteInviteButton.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/organizations/DeleteInviteButton.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/organizations/DeleteInviteButton.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
};
var DeleteInviteButton_default = DeleteInviteButton;

// app/components/organizations/OrganizationInvitedMembersList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var OrganizationInvitedMembersList = ({ organizationId }) => {
  const { data: members, status } = use_fetch_invited_members_default(organizationId);
  if (status === "loading") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingMembersSpinner_default, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: "organization:loadingInvitedMembers"
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this);
  }
  if (status === "error") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
      type: "error",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: "organization:loadInvitedMembersError"
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this);
  }
  if (!members.length) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
      className: "text-sm",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: "organization:noPendingInvites"
      }, void 0, false, {
        fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col divide-y divide-gray-100 dark:divide-black-400",
    children: members.map(({ email, role, code, id }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        "data-cy": "invited-member",
        "data-code": code,
        className: "flex flex-col py-2 lg:flex-row lg:items-center lg:space-x-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-auto items-center space-x-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FallbackUserAvatar_default, {
                text: email
              }, void 0, false, {
                fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
                lineNumber: 56,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "block truncate text-sm",
                children: email
              }, void 0, false, {
                fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
                lineNumber: 58,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center justify-end space-x-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoleBadge_default, {
                role
              }, void 0, false, {
                fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
                lineNumber: 62,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IfHasPermissions_default, {
                condition: canDeleteInvites,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteInviteButton_default, {
                  inviteId: id,
                  organizationId,
                  memberEmail: email
                }, void 0, false, {
                  fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
                  lineNumber: 65,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
                lineNumber: 64,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, this)
        ]
      }, id, true, {
        fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
};
var OrganizationInvitedMembersList_default = OrganizationInvitedMembersList;
export {
  OrganizationInvitedMembersList_default as default
};
//# sourceMappingURL=/build/_shared/OrganizationInvitedMembersList-DX4LYUSR.js.map
