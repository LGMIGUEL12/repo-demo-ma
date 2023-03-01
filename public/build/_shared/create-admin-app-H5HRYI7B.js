import "/build/_shared/chunk-CUPSZOF3.js";

// app/core/firebase/admin/create-admin-app.ts
async function createFirebaseAdminApp(params) {
  const { getApps, getApp, cert, initializeApp } = await import("/build/_shared/app-E45MZUER.js");
  if (getApps().length > 0) {
    return getApp();
  }
  const privateKey = formatFirebasePrivateKey(params.privateKey);
  const credential = cert({
    projectId: params.projectId,
    clientEmail: params.clientEmail,
    privateKey
  });
  return initializeApp({
    credential,
    projectId: params.projectId,
    storageBucket: params.storageBucket
  });
}
function formatFirebasePrivateKey(key) {
  return key.replace(/\\n/g, "\n");
}
export {
  createFirebaseAdminApp
};
//# sourceMappingURL=/build/_shared/create-admin-app-H5HRYI7B.js.map
