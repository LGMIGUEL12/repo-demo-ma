import {
  FirebaseError
} from "/build/_shared/chunk-BCUDKLQK.js";

// app/core/firebase/utils/get-firebase-error-code.ts
function getFirebaseErrorCode(error) {
  if (!error) {
    return;
  }
  return isFirebaseError(error) ? error.code : void 0;
}
function isFirebaseError(error) {
  return error instanceof FirebaseError;
}

export {
  getFirebaseErrorCode
};
//# sourceMappingURL=/build/_shared/chunk-2LLES6IO.js.map
