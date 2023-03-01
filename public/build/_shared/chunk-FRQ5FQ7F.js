import {
  kt
} from "/build/_shared/chunk-7QMTLNFQ.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/firebase/hooks/use-recaptcha-verifier.ts
var import_react = __toESM(require_react());
function useRecaptchaVerifier(id) {
  const auth = kt();
  return (0, import_react.useCallback)(async () => {
    const { RecaptchaVerifier } = await import("/build/_shared/index.esm-R2ACMCHR.js");
    return new RecaptchaVerifier(
      id,
      {
        size: "invisible"
      },
      auth
    );
  }, [auth, id]);
}
var use_recaptcha_verifier_default = useRecaptchaVerifier;

export {
  use_recaptcha_verifier_default
};
//# sourceMappingURL=/build/_shared/chunk-FRQ5FQ7F.js.map
