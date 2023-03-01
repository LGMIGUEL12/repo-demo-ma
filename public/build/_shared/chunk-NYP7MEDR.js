import {
  roles_default
} from "/build/_shared/chunk-MGQONI2O.js";
import {
  Badge_default
} from "/build/_shared/chunk-QBSRNWAG.js";
import {
  membership_role_default
} from "/build/_shared/chunk-W4DXIIZX.js";
import {
  require_react_epic_spinners_umd_min
} from "/build/_shared/chunk-JLCRG65W.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QEOXWCFK.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/organizations/RoleBadge.tsx
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var classNames = {
  [membership_role_default.Owner]: "bg-yellow-400 text-current font-semibold dark:text-black-500",
  [membership_role_default.Admin]: "bg-blue-500 text-white font-semibold",
  [membership_role_default.Member]: "bg-blue-500 text-white font-semibold"
};
var RoleBadge = ({ role }) => {
  const data = roles_default.find((item) => item.value === role);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge_default, {
    color: "custom",
    size: "small",
    className: classNames[role],
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      "data-cy": "member-role-badge",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: data?.label
      }, void 0, false, {
        fileName: "app/components/organizations/RoleBadge.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/organizations/RoleBadge.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/organizations/RoleBadge.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};
var RoleBadge_default = RoleBadge;

// app/components/organizations/LoadingMembersSpinner.tsx
var import_react_epic_spinners = __toESM(require_react_epic_spinners_umd_min());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var LoadingMembersSpinner = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-row items-center space-x-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_epic_spinners.SpringSpinner, {
        color: "currentColor",
        size: 32
      }, void 0, false, {
        fileName: "app/components/organizations/LoadingMembersSpinner.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "text-sm",
        children
      }, void 0, false, {
        fileName: "app/components/organizations/LoadingMembersSpinner.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/organizations/LoadingMembersSpinner.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var LoadingMembersSpinner_default = LoadingMembersSpinner;

export {
  RoleBadge_default,
  LoadingMembersSpinner_default
};
//# sourceMappingURL=/build/_shared/chunk-NYP7MEDR.js.map
