import {
  get_env_default
} from "/build/_shared/chunk-WIOFJORR.js";

// app/firebase.config.ts
var env = get_env_default();
var firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID,
  emulator: env.EMULATOR === "true"
};
var firebase_config_default = firebaseConfig;

export {
  firebase_config_default
};
//# sourceMappingURL=/build/_shared/chunk-MZJK6QBW.js.map
