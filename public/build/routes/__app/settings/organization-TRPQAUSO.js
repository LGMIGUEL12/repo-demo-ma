import {
  SettingsContentContainer_default
} from "/build/_shared/chunk-OL7WJYAQ.js";
import {
  NavigationItem_default,
  NavigationMenu_default
} from "/build/_shared/chunk-4NOTLPFB.js";
import "/build/_shared/chunk-DN742LHR.js";
import "/build/_shared/chunk-G4KZDRB7.js";
import {
  init_esm,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QEOXWCFK.js";
import {
  Outlet
} from "/build/_shared/chunk-TUM7Q574.js";
import "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/__app/settings/organization.tsx
init_esm();

// app/components/organizations/OrganizationSettingsTabs.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = {
  General: {
    path: "/settings/organization",
    label: "organization:generalTabLabel"
  },
  Members: {
    path: "/settings/organization/members",
    label: "organization:membersTabLabel"
  }
};
var OrganizationSettingsTabs = () => {
  const itemClassName = `flex justify-center lg:justify-start items-center flex-auto lg:flex-initial`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenu_default, {
      secondary: true,
      vertical: true,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
          end: true,
          className: itemClassName,
          link: links.General
        }, void 0, false, {
          fileName: "app/components/organizations/OrganizationSettingsTabs.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
          className: itemClassName,
          link: links.Members
        }, void 0, false, {
          fileName: "app/components/organizations/OrganizationSettingsTabs.tsx",
          lineNumber: 22,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/organizations/OrganizationSettingsTabs.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/organizations/OrganizationSettingsTabs.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};
var OrganizationSettingsTabs_default = OrganizationSettingsTabs;

// app/routes/__app/settings/organization.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function OrganizationSettingsLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationSettingsTabs_default, {}, void 0, false, {
          fileName: "app/routes/__app/settings/organization.tsx",
          lineNumber: 10,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/settings/organization.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsContentContainer_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/routes/__app/settings/organization.tsx",
          lineNumber: 14,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/settings/organization.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/settings/organization.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var organization_default = OrganizationSettingsLayout;
export {
  organization_default as default
};
//# sourceMappingURL=/build/routes/__app/settings/organization-TRPQAUSO.js.map
