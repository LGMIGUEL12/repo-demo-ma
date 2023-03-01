import {
  PhoneNumberCredentialForm_default
} from "/build/_shared/chunk-JFAUOVRI.js";
import {
  Modal_default
} from "/build/_shared/chunk-NKQZC65O.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/profile/accounts/LinkPhoneNumberModal.tsx
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LinkPhoneNumberModal({
  isOpen,
  setIsOpen,
  onSuccess
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "profile:linkPhoneNumber"
    }, void 0, false, {
      fileName: "app/components/profile/accounts/LinkPhoneNumberModal.tsx",
      lineNumber: 16,
      columnNumber: 16
    }, this),
    isOpen,
    setIsOpen,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneNumberCredentialForm_default, {
      action: "link",
      onSuccess: (credential) => {
        if (onSuccess) {
          const phoneNumber = credential.user.phoneNumber;
          if (phoneNumber) {
            onSuccess(phoneNumber);
          }
        }
        setIsOpen(false);
      }
    }, void 0, false, {
      fileName: "app/components/profile/accounts/LinkPhoneNumberModal.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/profile/accounts/LinkPhoneNumberModal.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var LinkPhoneNumberModal_default = LinkPhoneNumberModal;

export {
  LinkPhoneNumberModal_default
};
//# sourceMappingURL=/build/_shared/chunk-2Y7YHGZ7.js.map
