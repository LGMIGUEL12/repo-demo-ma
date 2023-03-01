import "/build/_shared/chunk-CUPSZOF3.js";

// app/core/firebase/admin/create-emulator-admin-app.ts
async function createEmulatorAdminApp(appName) {
  const projectId = process.env.GCLOUD_PROJECT;
  const options = { projectId };
  const { getApps, getApp, initializeApp } = await import("/build/_shared/app-E45MZUER.js");
  if (getApps().length) {
    return getApp(appName);
  }
  return initializeApp(options, appName);
}
export {
  createEmulatorAdminApp
};
//# sourceMappingURL=/build/_shared/create-emulator-admin-app-66LPVY6I.js.map
