import {
  SettingsContentContainer_default
} from "/build/_shared/chunk-APO3SRLV.js";
import {
  NavigationItem_default,
  NavigationMenu_default
} from "/build/_shared/chunk-KIPB2TCK.js";
import {
  nr
} from "/build/_shared/chunk-QTKR7OWQ.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import "/build/_shared/chunk-DN742LHR.js";
import "/build/_shared/chunk-G4KZDRB7.js";
import {
  EmailAuthProvider
} from "/build/_shared/chunk-A4KF3ELC.js";
import "/build/_shared/chunk-BCUDKLQK.js";
import {
  init_esm
} from "/build/_shared/chunk-EGSMFI33.js";
import {
  Outlet
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

// app/routes/__app/settings/profile.tsx
init_esm();

// app/components/profile/ProfileSettingsTabs.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = {
  General: {
    path: "/settings/profile",
    label: "profile:generalTab"
  },
  Authentication: {
    path: "/settings/profile/authentication",
    label: "profile:authenticationTab"
  },
  Email: {
    path: "/settings/profile/email",
    label: "profile:emailTab"
  },
  Password: {
    path: "/settings/profile/password",
    label: "profile:passwordTab"
  }
};
var ProfileSettingsTabs = () => {
  const { data: user } = nr();
  const canEditEmailAndPassword = (0, import_react.useMemo)(() => {
    const emailProviderId = EmailAuthProvider.PROVIDER_ID;
    if (!user) {
      return false;
    }
    return user.providerData.some((item) => {
      return item.providerId === emailProviderId;
    });
  }, [user]);
  const itemClassName = `flex justify-center md:justify-start items-center flex-auto md:flex-initial`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenu_default, {
    vertical: true,
    secondary: true,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
        end: true,
        className: itemClassName,
        link: links.General
      }, void 0, false, {
        fileName: "app/components/profile/ProfileSettingsTabs.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
        className: itemClassName,
        link: links.Authentication
      }, void 0, false, {
        fileName: "app/components/profile/ProfileSettingsTabs.tsx",
        lineNumber: 50,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
        className: itemClassName,
        disabled: !canEditEmailAndPassword,
        link: links.Email
      }, void 0, false, {
        fileName: "app/components/profile/ProfileSettingsTabs.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
        className: itemClassName,
        disabled: !canEditEmailAndPassword,
        link: links.Password
      }, void 0, false, {
        fileName: "app/components/profile/ProfileSettingsTabs.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/profile/ProfileSettingsTabs.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
};
var ProfileSettingsTabs_default = ProfileSettingsTabs;

// app/routes/__app/settings/profile.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProfileSettingsLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileSettingsTabs_default, {}, void 0, false, {
          fileName: "app/routes/__app/settings/profile.tsx",
          lineNumber: 9,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/settings/profile.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsContentContainer_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/routes/__app/settings/profile.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/settings/profile.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/settings/profile.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var profile_default = ProfileSettingsLayout;
export {
  profile_default as default
};
//# sourceMappingURL=/build/routes/__app/settings/profile-PHTMGO4L.js.map
