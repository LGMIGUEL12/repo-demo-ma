import {
  canInviteUsers,
  useCurrentOrganization,
  useCurrentUserRole
} from "/build/_shared/chunk-OJUH3UKO.js";
import {
  SettingsTile_default
} from "/build/_shared/chunk-33GWQEOE.js";
import {
  require_memberships
} from "/build/_shared/chunk-X2TJ6V6V.js";
import "/build/_shared/chunk-W4DXIIZX.js";
import "/build/_shared/chunk-CCK66CUU.js";
import "/build/_shared/chunk-4C3HDJAL.js";
import "/build/_shared/chunk-EYLCNKMF.js";
import "/build/_shared/chunk-U3LVU62Z.js";
import {
  ClientOnly_default
} from "/build/_shared/chunk-FT7OPBPM.js";
import "/build/_shared/chunk-KHW4CDLX.js";
import "/build/_shared/chunk-52KVLBBL.js";
import {
  UserPlusIcon_default
} from "/build/_shared/chunk-7KHFEMFW.js";
import "/build/_shared/chunk-54TVJDMF.js";
import {
  Button_default,
  If_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import "/build/_shared/chunk-DN742LHR.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import "/build/_shared/chunk-WULCHIKQ.js";
import "/build/_shared/chunk-WIOFJORR.js";
import "/build/_shared/chunk-A4KF3ELC.js";
import "/build/_shared/chunk-BCUDKLQK.js";
import {
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-EGSMFI33.js";
import {
  useNavigate
} from "/build/_shared/chunk-TUM7Q574.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/__app/settings/organization/members/index.tsx
var import_react = __toESM(require_react());
init_esm();
init_es();

// app/lib/organizations/hooks/use-user-can-invite-users.ts
function useUserCanInviteUsers() {
  const role = useCurrentUserRole();
  return role !== void 0 && canInviteUsers(role);
}

// app/routes/__app/settings/organization/members/index.tsx
var import_memberships = __toESM(require_memberships());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var OrganizationMembersList = (0, import_react.lazy)(
  () => import("/build/_shared/OrganizationMembersList-2BYK6Q4Z.js")
);
var OrganizationInvitedMembersList = (0, import_react.lazy)(
  () => import("/build/_shared/OrganizationInvitedMembersList-XURZSVO4.js")
);
var meta = () => {
  return {
    title: "Members"
  };
};
var OrganizationMembersPage = () => {
  const members = useLoaderData();
  const canInviteUsers2 = useUserCanInviteUsers();
  const organization = useCurrentOrganization();
  const organizationId = organization?.id;
  useReloadMembersOnOrganizationChanged();
  if (!organizationId) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "my-4 flex justify-end",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: canInviteUsers2,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InviteMembersButton, {}, void 0, false, {
            fileName: "app/routes/__app/settings/organization/members/index.tsx",
            lineNumber: 76,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/__app/settings/organization/members/index.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/settings/organization/members/index.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-1 flex-col space-y-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
            heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "organization:membersTabLabel"
            }, void 0, false, {
              fileName: "app/routes/__app/settings/organization/members/index.tsx",
              lineNumber: 82,
              columnNumber: 20
            }, this),
            subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "organization:membersTabSubheading"
            }, void 0, false, {
              fileName: "app/routes/__app/settings/organization/members/index.tsx",
              lineNumber: 83,
              columnNumber: 23
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationMembersList, {
                membersMetadata: members,
                organizationId
              }, void 0, false, {
                fileName: "app/routes/__app/settings/organization/members/index.tsx",
                lineNumber: 86,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/__app/settings/organization/members/index.tsx",
              lineNumber: 85,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/settings/organization/members/index.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
            heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "organization:pendingInvitesHeading"
            }, void 0, false, {
              fileName: "app/routes/__app/settings/organization/members/index.tsx",
              lineNumber: 94,
              columnNumber: 20
            }, this),
            subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "organization:pendingInvitesSubheading"
            }, void 0, false, {
              fileName: "app/routes/__app/settings/organization/members/index.tsx",
              lineNumber: 96,
              columnNumber: 13
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationInvitedMembersList, {
                organizationId
              }, void 0, false, {
                fileName: "app/routes/__app/settings/organization/members/index.tsx",
                lineNumber: 100,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/__app/settings/organization/members/index.tsx",
              lineNumber: 99,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/settings/organization/members/index.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/settings/organization/members/index.tsx",
        lineNumber: 80,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/settings/organization/members/index.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
};
var members_default = OrganizationMembersPage;
function useReloadMembersOnOrganizationChanged() {
  const navigate = useNavigate();
  const organization = useCurrentOrganization();
  const organizationId = organization?.id;
  const oldOrganizationId = (0, import_react.useRef)(organizationId);
  (0, import_react.useEffect)(() => {
    if (organizationId !== oldOrganizationId.current) {
      void navigate(".", { replace: true });
    }
  }, [navigate, organizationId]);
}
function InviteMembersButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
    className: "w-full lg:w-auto",
    "data-cy": "invite-form-link",
    type: "button",
    href: "/settings/organization/members/invite",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "flex items-center space-x-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserPlusIcon_default, {
          className: "h-5"
        }, void 0, false, {
          fileName: "app/routes/__app/settings/organization/members/index.tsx",
          lineNumber: 132,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "organization:inviteMembersButtonLabel"
          }, void 0, false, {
            fileName: "app/routes/__app/settings/organization/members/index.tsx",
            lineNumber: 135,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/__app/settings/organization/members/index.tsx",
          lineNumber: 134,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/__app/settings/organization/members/index.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__app/settings/organization/members/index.tsx",
    lineNumber: 125,
    columnNumber: 5
  }, this);
}
export {
  members_default as default,
  meta
};
//# sourceMappingURL=/build/routes/__app/settings/organization/members/index-OGRSPUPS.js.map
