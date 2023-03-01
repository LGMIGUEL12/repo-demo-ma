import {
  membership_role_default
} from "/build/_shared/chunk-W4DXIIZX.js";
import {
  organization_default
} from "/build/_shared/chunk-CCK66CUU.js";
import {
  useUserSession
} from "/build/_shared/chunk-KHW4CDLX.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/lib/organizations/permissions.ts
function canUpdateUser(currentUserRole, targetUser) {
  return currentUserRole > targetUser;
}
function canChangeBilling(currentUserRole) {
  return currentUserRole === membership_role_default.Owner;
}
function canInviteUsers(currentUserRole) {
  return currentUserRole >= membership_role_default.Admin;
}
function canInviteUser(inviterRole, inviteeRole) {
  const canInvite = canInviteUsers(inviterRole);
  const hasGreaterRole = inviterRole >= inviteeRole;
  const isNotOwner = inviteeRole !== membership_role_default.Owner;
  return canInvite && hasGreaterRole && isNotOwner;
}
function canDeleteInvites(inviterRole) {
  return canInviteUsers(inviterRole);
}

// app/lib/organizations/hooks/use-current-organization.ts
var import_react = __toESM(require_react());
function useCurrentOrganization() {
  const { organization } = (0, import_react.useContext)(organization_default);
  return organization;
}

// app/lib/organizations/hooks/use-current-user-role.ts
function useCurrentUserRole() {
  const organization = useCurrentOrganization();
  const user = useUserSession();
  const userId = user?.auth?.uid;
  if (!userId) {
    return;
  }
  return organization?.members[userId]?.role;
}

export {
  useCurrentOrganization,
  useCurrentUserRole,
  canUpdateUser,
  canChangeBilling,
  canInviteUsers,
  canInviteUser,
  canDeleteInvites
};
//# sourceMappingURL=/build/_shared/chunk-OJUH3UKO.js.map
