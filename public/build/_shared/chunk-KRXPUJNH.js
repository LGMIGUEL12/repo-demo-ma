import {
  require_assert,
  require_browser
} from "/build/_shared/chunk-HIGJ6TCQ.js";
import {
  require_api_request,
  require_app,
  require_credential_internal,
  require_deep_copy,
  require_error,
  require_jsonwebtoken,
  require_utils,
  require_validator
} from "/build/_shared/chunk-RK4TBYVM.js";
import {
  require_events,
  require_http,
  require_https,
  require_url,
  require_zlib
} from "/build/_shared/chunk-AB7SNNYG.js";
import {
  require_crypto,
  require_os,
  require_util
} from "/build/_shared/chunk-U3LVU62Z.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/firebase-admin/lib/auth/user-import-builder.js
var require_user_import_builder = __commonJS({
  "node_modules/firebase-admin/lib/auth/user-import-builder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserImportBuilder = exports.convertMultiFactorInfoToServerFormat = void 0;
    var deep_copy_1 = require_deep_copy();
    var utils = require_utils();
    var validator = require_validator();
    var error_1 = require_error();
    function convertMultiFactorInfoToServerFormat(multiFactorInfo) {
      let enrolledAt;
      if (typeof multiFactorInfo.enrollmentTime !== "undefined") {
        if (validator.isUTCDateString(multiFactorInfo.enrollmentTime)) {
          enrolledAt = new Date(multiFactorInfo.enrollmentTime).toISOString();
        } else {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ENROLLMENT_TIME, `The second factor "enrollmentTime" for "${multiFactorInfo.uid}" must be a valid UTC date string.`);
        }
      }
      if (isPhoneFactor(multiFactorInfo)) {
        const authFactorInfo = {
          mfaEnrollmentId: multiFactorInfo.uid,
          displayName: multiFactorInfo.displayName,
          phoneInfo: multiFactorInfo.phoneNumber,
          enrolledAt
        };
        for (const objKey in authFactorInfo) {
          if (typeof authFactorInfo[objKey] === "undefined") {
            delete authFactorInfo[objKey];
          }
        }
        return authFactorInfo;
      } else {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.UNSUPPORTED_SECOND_FACTOR, `Unsupported second factor "${JSON.stringify(multiFactorInfo)}" provided.`);
      }
    }
    exports.convertMultiFactorInfoToServerFormat = convertMultiFactorInfoToServerFormat;
    function isPhoneFactor(multiFactorInfo) {
      return multiFactorInfo.factorId === "phone";
    }
    function getNumberField(obj, key) {
      if (typeof obj[key] !== "undefined" && obj[key] !== null) {
        return parseInt(obj[key].toString(), 10);
      }
      return NaN;
    }
    function populateUploadAccountUser(user, userValidator) {
      const result = {
        localId: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        displayName: user.displayName,
        disabled: user.disabled,
        photoUrl: user.photoURL,
        phoneNumber: user.phoneNumber,
        providerUserInfo: [],
        mfaInfo: [],
        tenantId: user.tenantId,
        customAttributes: user.customClaims && JSON.stringify(user.customClaims)
      };
      if (typeof user.passwordHash !== "undefined") {
        if (!validator.isBuffer(user.passwordHash)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PASSWORD_HASH);
        }
        result.passwordHash = utils.toWebSafeBase64(user.passwordHash);
      }
      if (typeof user.passwordSalt !== "undefined") {
        if (!validator.isBuffer(user.passwordSalt)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PASSWORD_SALT);
        }
        result.salt = utils.toWebSafeBase64(user.passwordSalt);
      }
      if (validator.isNonNullObject(user.metadata)) {
        if (validator.isNonEmptyString(user.metadata.creationTime)) {
          result.createdAt = new Date(user.metadata.creationTime).getTime();
        }
        if (validator.isNonEmptyString(user.metadata.lastSignInTime)) {
          result.lastLoginAt = new Date(user.metadata.lastSignInTime).getTime();
        }
      }
      if (validator.isArray(user.providerData)) {
        user.providerData.forEach((providerData) => {
          result.providerUserInfo.push({
            providerId: providerData.providerId,
            rawId: providerData.uid,
            email: providerData.email,
            displayName: providerData.displayName,
            photoUrl: providerData.photoURL
          });
        });
      }
      if (validator.isNonNullObject(user.multiFactor) && validator.isNonEmptyArray(user.multiFactor.enrolledFactors)) {
        user.multiFactor.enrolledFactors.forEach((multiFactorInfo) => {
          result.mfaInfo.push(convertMultiFactorInfoToServerFormat(multiFactorInfo));
        });
      }
      let key;
      for (key in result) {
        if (typeof result[key] === "undefined") {
          delete result[key];
        }
      }
      if (result.providerUserInfo.length === 0) {
        delete result.providerUserInfo;
      }
      if (result.mfaInfo.length === 0) {
        delete result.mfaInfo;
      }
      if (typeof userValidator === "function") {
        userValidator(result);
      }
      return result;
    }
    var UserImportBuilder = class {
      constructor(users, options, userRequestValidator) {
        this.requiresHashOptions = false;
        this.validatedUsers = [];
        this.userImportResultErrors = [];
        this.indexMap = {};
        this.validatedUsers = this.populateUsers(users, userRequestValidator);
        this.validatedOptions = this.populateOptions(options, this.requiresHashOptions);
      }
      buildRequest() {
        const users = this.validatedUsers.map((user) => {
          return (0, deep_copy_1.deepCopy)(user);
        });
        return (0, deep_copy_1.deepExtend)({ users }, (0, deep_copy_1.deepCopy)(this.validatedOptions));
      }
      buildResponse(failedUploads) {
        const importResult = {
          successCount: this.validatedUsers.length,
          failureCount: this.userImportResultErrors.length,
          errors: (0, deep_copy_1.deepCopy)(this.userImportResultErrors)
        };
        importResult.failureCount += failedUploads.length;
        importResult.successCount -= failedUploads.length;
        failedUploads.forEach((failedUpload) => {
          importResult.errors.push({
            index: this.indexMap[failedUpload.index],
            error: new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_USER_IMPORT, failedUpload.message)
          });
        });
        importResult.errors.sort((a, b) => {
          return a.index - b.index;
        });
        return importResult;
      }
      populateOptions(options, requiresHashOptions) {
        let populatedOptions;
        if (!requiresHashOptions) {
          return {};
        }
        if (!validator.isNonNullObject(options)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"UserImportOptions" are required when importing users with passwords.');
        }
        if (!validator.isNonNullObject(options.hash)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.MISSING_HASH_ALGORITHM, '"hash.algorithm" is missing from the provided "UserImportOptions".');
        }
        if (typeof options.hash.algorithm === "undefined" || !validator.isNonEmptyString(options.hash.algorithm)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_HASH_ALGORITHM, '"hash.algorithm" must be a string matching the list of supported algorithms.');
        }
        let rounds;
        switch (options.hash.algorithm) {
          case "HMAC_SHA512":
          case "HMAC_SHA256":
          case "HMAC_SHA1":
          case "HMAC_MD5":
            if (!validator.isBuffer(options.hash.key)) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_HASH_KEY, `A non-empty "hash.key" byte buffer must be provided for hash algorithm ${options.hash.algorithm}.`);
            }
            populatedOptions = {
              hashAlgorithm: options.hash.algorithm,
              signerKey: utils.toWebSafeBase64(options.hash.key)
            };
            break;
          case "MD5":
          case "SHA1":
          case "SHA256":
          case "SHA512": {
            rounds = getNumberField(options.hash, "rounds");
            const minRounds = options.hash.algorithm === "MD5" ? 0 : 1;
            if (isNaN(rounds) || rounds < minRounds || rounds > 8192) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_HASH_ROUNDS, `A valid "hash.rounds" number between ${minRounds} and 8192 must be provided for hash algorithm ${options.hash.algorithm}.`);
            }
            populatedOptions = {
              hashAlgorithm: options.hash.algorithm,
              rounds
            };
            break;
          }
          case "PBKDF_SHA1":
          case "PBKDF2_SHA256":
            rounds = getNumberField(options.hash, "rounds");
            if (isNaN(rounds) || rounds < 0 || rounds > 12e4) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_HASH_ROUNDS, `A valid "hash.rounds" number between 0 and 120000 must be provided for hash algorithm ${options.hash.algorithm}.`);
            }
            populatedOptions = {
              hashAlgorithm: options.hash.algorithm,
              rounds
            };
            break;
          case "SCRYPT": {
            if (!validator.isBuffer(options.hash.key)) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_HASH_KEY, `A "hash.key" byte buffer must be provided for hash algorithm ${options.hash.algorithm}.`);
            }
            rounds = getNumberField(options.hash, "rounds");
            if (isNaN(rounds) || rounds <= 0 || rounds > 8) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_HASH_ROUNDS, `A valid "hash.rounds" number between 1 and 8 must be provided for hash algorithm ${options.hash.algorithm}.`);
            }
            const memoryCost = getNumberField(options.hash, "memoryCost");
            if (isNaN(memoryCost) || memoryCost <= 0 || memoryCost > 14) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_HASH_MEMORY_COST, `A valid "hash.memoryCost" number between 1 and 14 must be provided for hash algorithm ${options.hash.algorithm}.`);
            }
            if (typeof options.hash.saltSeparator !== "undefined" && !validator.isBuffer(options.hash.saltSeparator)) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_HASH_SALT_SEPARATOR, '"hash.saltSeparator" must be a byte buffer.');
            }
            populatedOptions = {
              hashAlgorithm: options.hash.algorithm,
              signerKey: utils.toWebSafeBase64(options.hash.key),
              rounds,
              memoryCost,
              saltSeparator: utils.toWebSafeBase64(options.hash.saltSeparator || Buffer.from(""))
            };
            break;
          }
          case "BCRYPT":
            populatedOptions = {
              hashAlgorithm: options.hash.algorithm
            };
            break;
          case "STANDARD_SCRYPT": {
            const cpuMemCost = getNumberField(options.hash, "memoryCost");
            if (isNaN(cpuMemCost)) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_HASH_MEMORY_COST, `A valid "hash.memoryCost" number must be provided for hash algorithm ${options.hash.algorithm}.`);
            }
            const parallelization = getNumberField(options.hash, "parallelization");
            if (isNaN(parallelization)) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_HASH_PARALLELIZATION, `A valid "hash.parallelization" number must be provided for hash algorithm ${options.hash.algorithm}.`);
            }
            const blockSize = getNumberField(options.hash, "blockSize");
            if (isNaN(blockSize)) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_HASH_BLOCK_SIZE, `A valid "hash.blockSize" number must be provided for hash algorithm ${options.hash.algorithm}.`);
            }
            const dkLen = getNumberField(options.hash, "derivedKeyLength");
            if (isNaN(dkLen)) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_HASH_DERIVED_KEY_LENGTH, `A valid "hash.derivedKeyLength" number must be provided for hash algorithm ${options.hash.algorithm}.`);
            }
            populatedOptions = {
              hashAlgorithm: options.hash.algorithm,
              cpuMemCost,
              parallelization,
              blockSize,
              dkLen
            };
            break;
          }
          default:
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_HASH_ALGORITHM, `Unsupported hash algorithm provider "${options.hash.algorithm}".`);
        }
        return populatedOptions;
      }
      populateUsers(users, userValidator) {
        const populatedUsers = [];
        users.forEach((user, index) => {
          try {
            const result = populateUploadAccountUser(user, userValidator);
            if (typeof result.passwordHash !== "undefined") {
              this.requiresHashOptions = true;
            }
            populatedUsers.push(result);
            this.indexMap[populatedUsers.length - 1] = index;
          } catch (error) {
            this.userImportResultErrors.push({
              index,
              error
            });
          }
        });
        return populatedUsers;
      }
    };
    exports.UserImportBuilder = UserImportBuilder;
  }
});

// node_modules/firebase-admin/lib/auth/action-code-settings-builder.js
var require_action_code_settings_builder = __commonJS({
  "node_modules/firebase-admin/lib/auth/action-code-settings-builder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ActionCodeSettingsBuilder = void 0;
    var validator = require_validator();
    var error_1 = require_error();
    var ActionCodeSettingsBuilder = class {
      constructor(actionCodeSettings) {
        if (!validator.isNonNullObject(actionCodeSettings)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"ActionCodeSettings" must be a non-null object.');
        }
        if (typeof actionCodeSettings.url === "undefined") {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.MISSING_CONTINUE_URI);
        } else if (!validator.isURL(actionCodeSettings.url)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONTINUE_URI);
        }
        this.continueUrl = actionCodeSettings.url;
        if (typeof actionCodeSettings.handleCodeInApp !== "undefined" && !validator.isBoolean(actionCodeSettings.handleCodeInApp)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"ActionCodeSettings.handleCodeInApp" must be a boolean.');
        }
        this.canHandleCodeInApp = actionCodeSettings.handleCodeInApp || false;
        if (typeof actionCodeSettings.dynamicLinkDomain !== "undefined" && !validator.isNonEmptyString(actionCodeSettings.dynamicLinkDomain)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_DYNAMIC_LINK_DOMAIN);
        }
        this.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
        if (typeof actionCodeSettings.iOS !== "undefined") {
          if (!validator.isNonNullObject(actionCodeSettings.iOS)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"ActionCodeSettings.iOS" must be a valid non-null object.');
          } else if (typeof actionCodeSettings.iOS.bundleId === "undefined") {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.MISSING_IOS_BUNDLE_ID);
          } else if (!validator.isNonEmptyString(actionCodeSettings.iOS.bundleId)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"ActionCodeSettings.iOS.bundleId" must be a valid non-empty string.');
          }
          this.ibi = actionCodeSettings.iOS.bundleId;
        }
        if (typeof actionCodeSettings.android !== "undefined") {
          if (!validator.isNonNullObject(actionCodeSettings.android)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"ActionCodeSettings.android" must be a valid non-null object.');
          } else if (typeof actionCodeSettings.android.packageName === "undefined") {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.MISSING_ANDROID_PACKAGE_NAME);
          } else if (!validator.isNonEmptyString(actionCodeSettings.android.packageName)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"ActionCodeSettings.android.packageName" must be a valid non-empty string.');
          } else if (typeof actionCodeSettings.android.minimumVersion !== "undefined" && !validator.isNonEmptyString(actionCodeSettings.android.minimumVersion)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"ActionCodeSettings.android.minimumVersion" must be a valid non-empty string.');
          } else if (typeof actionCodeSettings.android.installApp !== "undefined" && !validator.isBoolean(actionCodeSettings.android.installApp)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"ActionCodeSettings.android.installApp" must be a valid boolean.');
          }
          this.apn = actionCodeSettings.android.packageName;
          this.amv = actionCodeSettings.android.minimumVersion;
          this.installApp = actionCodeSettings.android.installApp || false;
        }
      }
      buildRequest() {
        const request = {
          continueUrl: this.continueUrl,
          canHandleCodeInApp: this.canHandleCodeInApp,
          dynamicLinkDomain: this.dynamicLinkDomain,
          androidPackageName: this.apn,
          androidMinimumVersion: this.amv,
          androidInstallApp: this.installApp,
          iOSBundleId: this.ibi
        };
        for (const key in request) {
          if (Object.prototype.hasOwnProperty.call(request, key)) {
            if (typeof request[key] === "undefined" || request[key] === null) {
              delete request[key];
            }
          }
        }
        return request;
      }
    };
    exports.ActionCodeSettingsBuilder = ActionCodeSettingsBuilder;
  }
});

// node_modules/firebase-admin/lib/auth/auth-config.js
var require_auth_config = __commonJS({
  "node_modules/firebase-admin/lib/auth/auth-config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SmsRegionsAuthConfig = exports.OIDCConfig = exports.SAMLConfig = exports.EmailSignInConfig = exports.validateTestPhoneNumbers = exports.MultiFactorAuthConfig = exports.MAXIMUM_TEST_PHONE_NUMBERS = void 0;
    var validator = require_validator();
    var deep_copy_1 = require_deep_copy();
    var error_1 = require_error();
    exports.MAXIMUM_TEST_PHONE_NUMBERS = 10;
    var AUTH_FACTOR_CLIENT_TO_SERVER_TYPE = {
      phone: "PHONE_SMS"
    };
    var AUTH_FACTOR_SERVER_TO_CLIENT_TYPE = Object.keys(AUTH_FACTOR_CLIENT_TO_SERVER_TYPE).reduce((res, key) => {
      res[AUTH_FACTOR_CLIENT_TO_SERVER_TYPE[key]] = key;
      return res;
    }, {});
    var MultiFactorAuthConfig = class {
      constructor(response) {
        if (typeof response.state === "undefined") {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Invalid multi-factor configuration response");
        }
        this.state = response.state;
        this.factorIds = [];
        (response.enabledProviders || []).forEach((enabledProvider) => {
          if (typeof AUTH_FACTOR_SERVER_TO_CLIENT_TYPE[enabledProvider] !== "undefined") {
            this.factorIds.push(AUTH_FACTOR_SERVER_TO_CLIENT_TYPE[enabledProvider]);
          }
        });
      }
      static buildServerRequest(options) {
        const request = {};
        MultiFactorAuthConfig.validate(options);
        if (Object.prototype.hasOwnProperty.call(options, "state")) {
          request.state = options.state;
        }
        if (Object.prototype.hasOwnProperty.call(options, "factorIds")) {
          (options.factorIds || []).forEach((factorId) => {
            if (typeof request.enabledProviders === "undefined") {
              request.enabledProviders = [];
            }
            request.enabledProviders.push(AUTH_FACTOR_CLIENT_TO_SERVER_TYPE[factorId]);
          });
          if (options.factorIds && options.factorIds.length === 0) {
            request.enabledProviders = [];
          }
        }
        return request;
      }
      static validate(options) {
        const validKeys = {
          state: true,
          factorIds: true
        };
        if (!validator.isNonNullObject(options)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"MultiFactorConfig" must be a non-null object.');
        }
        for (const key in options) {
          if (!(key in validKeys)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, `"${key}" is not a valid MultiFactorConfig parameter.`);
          }
        }
        if (typeof options.state !== "undefined" && options.state !== "ENABLED" && options.state !== "DISABLED") {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"MultiFactorConfig.state" must be either "ENABLED" or "DISABLED".');
        }
        if (typeof options.factorIds !== "undefined") {
          if (!validator.isArray(options.factorIds)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"MultiFactorConfig.factorIds" must be an array of valid "AuthFactorTypes".');
          }
          options.factorIds.forEach((factorId) => {
            if (typeof AUTH_FACTOR_CLIENT_TO_SERVER_TYPE[factorId] === "undefined") {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, `"${factorId}" is not a valid "AuthFactorType".`);
            }
          });
        }
      }
      toJSON() {
        return {
          state: this.state,
          factorIds: this.factorIds
        };
      }
    };
    exports.MultiFactorAuthConfig = MultiFactorAuthConfig;
    function validateTestPhoneNumbers(testPhoneNumbers) {
      if (!validator.isObject(testPhoneNumbers)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"testPhoneNumbers" must be a map of phone number / code pairs.');
      }
      if (Object.keys(testPhoneNumbers).length > exports.MAXIMUM_TEST_PHONE_NUMBERS) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.MAXIMUM_TEST_PHONE_NUMBER_EXCEEDED);
      }
      for (const phoneNumber in testPhoneNumbers) {
        if (!validator.isPhoneNumber(phoneNumber)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_TESTING_PHONE_NUMBER, `"${phoneNumber}" is not a valid E.164 standard compliant phone number.`);
        }
        if (!validator.isString(testPhoneNumbers[phoneNumber]) || !/^[\d]{6}$/.test(testPhoneNumbers[phoneNumber])) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_TESTING_PHONE_NUMBER, `"${testPhoneNumbers[phoneNumber]}" is not a valid 6 digit code string.`);
        }
      }
    }
    exports.validateTestPhoneNumbers = validateTestPhoneNumbers;
    var EmailSignInConfig = class {
      constructor(response) {
        if (typeof response.allowPasswordSignup === "undefined") {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Invalid email sign-in configuration response");
        }
        this.enabled = response.allowPasswordSignup;
        this.passwordRequired = !response.enableEmailLinkSignin;
      }
      static buildServerRequest(options) {
        const request = {};
        EmailSignInConfig.validate(options);
        if (Object.prototype.hasOwnProperty.call(options, "enabled")) {
          request.allowPasswordSignup = options.enabled;
        }
        if (Object.prototype.hasOwnProperty.call(options, "passwordRequired")) {
          request.enableEmailLinkSignin = !options.passwordRequired;
        }
        return request;
      }
      static validate(options) {
        const validKeys = {
          enabled: true,
          passwordRequired: true
        };
        if (!validator.isNonNullObject(options)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"EmailSignInConfig" must be a non-null object.');
        }
        for (const key in options) {
          if (!(key in validKeys)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `"${key}" is not a valid EmailSignInConfig parameter.`);
          }
        }
        if (typeof options.enabled !== "undefined" && !validator.isBoolean(options.enabled)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"EmailSignInConfig.enabled" must be a boolean.');
        }
        if (typeof options.passwordRequired !== "undefined" && !validator.isBoolean(options.passwordRequired)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"EmailSignInConfig.passwordRequired" must be a boolean.');
        }
      }
      toJSON() {
        return {
          enabled: this.enabled,
          passwordRequired: this.passwordRequired
        };
      }
    };
    exports.EmailSignInConfig = EmailSignInConfig;
    var SAMLConfig = class {
      constructor(response) {
        if (!response || !response.idpConfig || !response.idpConfig.idpEntityId || !response.idpConfig.ssoUrl || !response.spConfig || !response.spConfig.spEntityId || !response.name || !(validator.isString(response.name) && SAMLConfig.getProviderIdFromResourceName(response.name))) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Invalid SAML configuration response");
        }
        const providerId = SAMLConfig.getProviderIdFromResourceName(response.name);
        if (!providerId) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Invalid SAML configuration response");
        }
        this.providerId = providerId;
        this.rpEntityId = response.spConfig.spEntityId;
        this.callbackURL = response.spConfig.callbackUri;
        this.idpEntityId = response.idpConfig.idpEntityId;
        this.ssoURL = response.idpConfig.ssoUrl;
        this.enableRequestSigning = !!response.idpConfig.signRequest;
        const x509Certificates = [];
        for (const cert of response.idpConfig.idpCertificates || []) {
          if (cert.x509Certificate) {
            x509Certificates.push(cert.x509Certificate);
          }
        }
        this.x509Certificates = x509Certificates;
        this.enabled = !!response.enabled;
        this.displayName = response.displayName;
      }
      static buildServerRequest(options, ignoreMissingFields = false) {
        const makeRequest = validator.isNonNullObject(options) && (options.providerId || ignoreMissingFields);
        if (!makeRequest) {
          return null;
        }
        const request = {};
        SAMLConfig.validate(options, ignoreMissingFields);
        request.enabled = options.enabled;
        request.displayName = options.displayName;
        if (options.idpEntityId || options.ssoURL || options.x509Certificates) {
          request.idpConfig = {
            idpEntityId: options.idpEntityId,
            ssoUrl: options.ssoURL,
            signRequest: options.enableRequestSigning,
            idpCertificates: typeof options.x509Certificates === "undefined" ? void 0 : []
          };
          if (options.x509Certificates) {
            for (const cert of options.x509Certificates || []) {
              request.idpConfig.idpCertificates.push({ x509Certificate: cert });
            }
          }
        }
        if (options.callbackURL || options.rpEntityId) {
          request.spConfig = {
            spEntityId: options.rpEntityId,
            callbackUri: options.callbackURL
          };
        }
        return request;
      }
      static getProviderIdFromResourceName(resourceName) {
        const matchProviderRes = resourceName.match(/\/inboundSamlConfigs\/(saml\..*)$/);
        if (!matchProviderRes || matchProviderRes.length < 2) {
          return null;
        }
        return matchProviderRes[1];
      }
      static isProviderId(providerId) {
        return validator.isNonEmptyString(providerId) && providerId.indexOf("saml.") === 0;
      }
      static validate(options, ignoreMissingFields = false) {
        const validKeys = {
          enabled: true,
          displayName: true,
          providerId: true,
          idpEntityId: true,
          ssoURL: true,
          x509Certificates: true,
          rpEntityId: true,
          callbackURL: true,
          enableRequestSigning: true
        };
        if (!validator.isNonNullObject(options)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"SAMLAuthProviderConfig" must be a valid non-null object.');
        }
        for (const key in options) {
          if (!(key in validKeys)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, `"${key}" is not a valid SAML config parameter.`);
          }
        }
        if (validator.isNonEmptyString(options.providerId)) {
          if (options.providerId.indexOf("saml.") !== 0) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID, '"SAMLAuthProviderConfig.providerId" must be a valid non-empty string prefixed with "saml.".');
          }
        } else if (!ignoreMissingFields) {
          throw new error_1.FirebaseAuthError(!options.providerId ? error_1.AuthClientErrorCode.MISSING_PROVIDER_ID : error_1.AuthClientErrorCode.INVALID_PROVIDER_ID, '"SAMLAuthProviderConfig.providerId" must be a valid non-empty string prefixed with "saml.".');
        }
        if (!(ignoreMissingFields && typeof options.idpEntityId === "undefined") && !validator.isNonEmptyString(options.idpEntityId)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"SAMLAuthProviderConfig.idpEntityId" must be a valid non-empty string.');
        }
        if (!(ignoreMissingFields && typeof options.ssoURL === "undefined") && !validator.isURL(options.ssoURL)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"SAMLAuthProviderConfig.ssoURL" must be a valid URL string.');
        }
        if (!(ignoreMissingFields && typeof options.rpEntityId === "undefined") && !validator.isNonEmptyString(options.rpEntityId)) {
          throw new error_1.FirebaseAuthError(!options.rpEntityId ? error_1.AuthClientErrorCode.MISSING_SAML_RELYING_PARTY_CONFIG : error_1.AuthClientErrorCode.INVALID_CONFIG, '"SAMLAuthProviderConfig.rpEntityId" must be a valid non-empty string.');
        }
        if (!(ignoreMissingFields && typeof options.callbackURL === "undefined") && !validator.isURL(options.callbackURL)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"SAMLAuthProviderConfig.callbackURL" must be a valid URL string.');
        }
        if (!(ignoreMissingFields && typeof options.x509Certificates === "undefined") && !validator.isArray(options.x509Certificates)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"SAMLAuthProviderConfig.x509Certificates" must be a valid array of X509 certificate strings.');
        }
        (options.x509Certificates || []).forEach((cert) => {
          if (!validator.isNonEmptyString(cert)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"SAMLAuthProviderConfig.x509Certificates" must be a valid array of X509 certificate strings.');
          }
        });
        if (typeof options.enableRequestSigning !== "undefined" && !validator.isBoolean(options.enableRequestSigning)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"SAMLAuthProviderConfig.enableRequestSigning" must be a boolean.');
        }
        if (typeof options.enabled !== "undefined" && !validator.isBoolean(options.enabled)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"SAMLAuthProviderConfig.enabled" must be a boolean.');
        }
        if (typeof options.displayName !== "undefined" && !validator.isString(options.displayName)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"SAMLAuthProviderConfig.displayName" must be a valid string.');
        }
      }
      toJSON() {
        return {
          enabled: this.enabled,
          displayName: this.displayName,
          providerId: this.providerId,
          idpEntityId: this.idpEntityId,
          ssoURL: this.ssoURL,
          x509Certificates: (0, deep_copy_1.deepCopy)(this.x509Certificates),
          rpEntityId: this.rpEntityId,
          callbackURL: this.callbackURL,
          enableRequestSigning: this.enableRequestSigning
        };
      }
    };
    exports.SAMLConfig = SAMLConfig;
    var OIDCConfig = class {
      constructor(response) {
        if (!response || !response.issuer || !response.clientId || !response.name || !(validator.isString(response.name) && OIDCConfig.getProviderIdFromResourceName(response.name))) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Invalid OIDC configuration response");
        }
        const providerId = OIDCConfig.getProviderIdFromResourceName(response.name);
        if (!providerId) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Invalid SAML configuration response");
        }
        this.providerId = providerId;
        this.clientId = response.clientId;
        this.issuer = response.issuer;
        this.enabled = !!response.enabled;
        this.displayName = response.displayName;
        if (typeof response.clientSecret !== "undefined") {
          this.clientSecret = response.clientSecret;
        }
        if (typeof response.responseType !== "undefined") {
          this.responseType = response.responseType;
        }
      }
      static buildServerRequest(options, ignoreMissingFields = false) {
        const makeRequest = validator.isNonNullObject(options) && (options.providerId || ignoreMissingFields);
        if (!makeRequest) {
          return null;
        }
        const request = {};
        OIDCConfig.validate(options, ignoreMissingFields);
        request.enabled = options.enabled;
        request.displayName = options.displayName;
        request.issuer = options.issuer;
        request.clientId = options.clientId;
        if (typeof options.clientSecret !== "undefined") {
          request.clientSecret = options.clientSecret;
        }
        if (typeof options.responseType !== "undefined") {
          request.responseType = options.responseType;
        }
        return request;
      }
      static getProviderIdFromResourceName(resourceName) {
        const matchProviderRes = resourceName.match(/\/oauthIdpConfigs\/(oidc\..*)$/);
        if (!matchProviderRes || matchProviderRes.length < 2) {
          return null;
        }
        return matchProviderRes[1];
      }
      static isProviderId(providerId) {
        return validator.isNonEmptyString(providerId) && providerId.indexOf("oidc.") === 0;
      }
      static validate(options, ignoreMissingFields = false) {
        const validKeys = {
          enabled: true,
          displayName: true,
          providerId: true,
          clientId: true,
          issuer: true,
          clientSecret: true,
          responseType: true
        };
        const validResponseTypes = {
          idToken: true,
          code: true
        };
        if (!validator.isNonNullObject(options)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"OIDCAuthProviderConfig" must be a valid non-null object.');
        }
        for (const key in options) {
          if (!(key in validKeys)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, `"${key}" is not a valid OIDC config parameter.`);
          }
        }
        if (validator.isNonEmptyString(options.providerId)) {
          if (options.providerId.indexOf("oidc.") !== 0) {
            throw new error_1.FirebaseAuthError(!options.providerId ? error_1.AuthClientErrorCode.MISSING_PROVIDER_ID : error_1.AuthClientErrorCode.INVALID_PROVIDER_ID, '"OIDCAuthProviderConfig.providerId" must be a valid non-empty string prefixed with "oidc.".');
          }
        } else if (!ignoreMissingFields) {
          throw new error_1.FirebaseAuthError(!options.providerId ? error_1.AuthClientErrorCode.MISSING_PROVIDER_ID : error_1.AuthClientErrorCode.INVALID_PROVIDER_ID, '"OIDCAuthProviderConfig.providerId" must be a valid non-empty string prefixed with "oidc.".');
        }
        if (!(ignoreMissingFields && typeof options.clientId === "undefined") && !validator.isNonEmptyString(options.clientId)) {
          throw new error_1.FirebaseAuthError(!options.clientId ? error_1.AuthClientErrorCode.MISSING_OAUTH_CLIENT_ID : error_1.AuthClientErrorCode.INVALID_OAUTH_CLIENT_ID, '"OIDCAuthProviderConfig.clientId" must be a valid non-empty string.');
        }
        if (!(ignoreMissingFields && typeof options.issuer === "undefined") && !validator.isURL(options.issuer)) {
          throw new error_1.FirebaseAuthError(!options.issuer ? error_1.AuthClientErrorCode.MISSING_ISSUER : error_1.AuthClientErrorCode.INVALID_CONFIG, '"OIDCAuthProviderConfig.issuer" must be a valid URL string.');
        }
        if (typeof options.enabled !== "undefined" && !validator.isBoolean(options.enabled)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"OIDCAuthProviderConfig.enabled" must be a boolean.');
        }
        if (typeof options.displayName !== "undefined" && !validator.isString(options.displayName)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"OIDCAuthProviderConfig.displayName" must be a valid string.');
        }
        if (typeof options.clientSecret !== "undefined" && !validator.isNonEmptyString(options.clientSecret)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"OIDCAuthProviderConfig.clientSecret" must be a valid string.');
        }
        if (validator.isNonNullObject(options.responseType) && typeof options.responseType !== "undefined") {
          Object.keys(options.responseType).forEach((key) => {
            if (!(key in validResponseTypes)) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, `"${key}" is not a valid OAuthResponseType parameter.`);
            }
          });
          const idToken = options.responseType.idToken;
          if (typeof idToken !== "undefined" && !validator.isBoolean(idToken)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"OIDCAuthProviderConfig.responseType.idToken" must be a boolean.');
          }
          const code = options.responseType.code;
          if (typeof code !== "undefined") {
            if (!validator.isBoolean(code)) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"OIDCAuthProviderConfig.responseType.code" must be a boolean.');
            }
            if (code && typeof options.clientSecret === "undefined") {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.MISSING_OAUTH_CLIENT_SECRET, "The OAuth configuration client secret is required to enable OIDC code flow.");
            }
          }
          const allKeys = Object.keys(options.responseType).length;
          const enabledCount = Object.values(options.responseType).filter(Boolean).length;
          if (allKeys > 1 && enabledCount != 1) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_OAUTH_RESPONSETYPE, "Only exactly one OAuth responseType should be set to true.");
          }
        }
      }
      toJSON() {
        return {
          enabled: this.enabled,
          displayName: this.displayName,
          providerId: this.providerId,
          issuer: this.issuer,
          clientId: this.clientId,
          clientSecret: (0, deep_copy_1.deepCopy)(this.clientSecret),
          responseType: (0, deep_copy_1.deepCopy)(this.responseType)
        };
      }
    };
    exports.OIDCConfig = OIDCConfig;
    var SmsRegionsAuthConfig = class {
      static validate(options) {
        if (!validator.isNonNullObject(options)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"SmsRegionConfig" must be a non-null object.');
        }
        const validKeys = {
          allowlistOnly: true,
          allowByDefault: true
        };
        for (const key in options) {
          if (!(key in validKeys)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, `"${key}" is not a valid SmsRegionConfig parameter.`);
          }
        }
        if (typeof options.allowByDefault !== "undefined" && typeof options.allowlistOnly !== "undefined") {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, 'SmsRegionConfig cannot have both "allowByDefault" and "allowlistOnly" parameters.');
        }
        if (typeof options.allowByDefault !== "undefined") {
          const allowByDefaultValidKeys = {
            disallowedRegions: true
          };
          for (const key in options.allowByDefault) {
            if (!(key in allowByDefaultValidKeys)) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, `"${key}" is not a valid SmsRegionConfig.allowByDefault parameter.`);
            }
          }
          if (typeof options.allowByDefault.disallowedRegions !== "undefined" && !validator.isArray(options.allowByDefault.disallowedRegions)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"SmsRegionConfig.allowByDefault.disallowedRegions" must be a valid string array.');
          }
        }
        if (typeof options.allowlistOnly !== "undefined") {
          const allowListOnlyValidKeys = {
            allowedRegions: true
          };
          for (const key in options.allowlistOnly) {
            if (!(key in allowListOnlyValidKeys)) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, `"${key}" is not a valid SmsRegionConfig.allowlistOnly parameter.`);
            }
          }
          if (typeof options.allowlistOnly.allowedRegions !== "undefined" && !validator.isArray(options.allowlistOnly.allowedRegions)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, '"SmsRegionConfig.allowlistOnly.allowedRegions" must be a valid string array.');
          }
        }
      }
    };
    exports.SmsRegionsAuthConfig = SmsRegionsAuthConfig;
  }
});

// node_modules/firebase-admin/lib/auth/tenant.js
var require_tenant = __commonJS({
  "node_modules/firebase-admin/lib/auth/tenant.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tenant = void 0;
    var validator = require_validator();
    var deep_copy_1 = require_deep_copy();
    var error_1 = require_error();
    var auth_config_1 = require_auth_config();
    var Tenant2 = class {
      constructor(response) {
        const tenantId = Tenant2.getTenantIdFromResourceName(response.name);
        if (!tenantId) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Invalid tenant response");
        }
        this.tenantId = tenantId;
        this.displayName = response.displayName;
        try {
          this.emailSignInConfig_ = new auth_config_1.EmailSignInConfig(response);
        } catch (e) {
          this.emailSignInConfig_ = new auth_config_1.EmailSignInConfig({
            allowPasswordSignup: false
          });
        }
        this.anonymousSignInEnabled = !!response.enableAnonymousUser;
        if (typeof response.mfaConfig !== "undefined") {
          this.multiFactorConfig_ = new auth_config_1.MultiFactorAuthConfig(response.mfaConfig);
        }
        if (typeof response.testPhoneNumbers !== "undefined") {
          this.testPhoneNumbers = (0, deep_copy_1.deepCopy)(response.testPhoneNumbers || {});
        }
        if (typeof response.smsRegionConfig !== "undefined") {
          this.smsRegionConfig = (0, deep_copy_1.deepCopy)(response.smsRegionConfig);
        }
      }
      static buildServerRequest(tenantOptions, createRequest) {
        Tenant2.validate(tenantOptions, createRequest);
        let request = {};
        if (typeof tenantOptions.emailSignInConfig !== "undefined") {
          request = auth_config_1.EmailSignInConfig.buildServerRequest(tenantOptions.emailSignInConfig);
        }
        if (typeof tenantOptions.displayName !== "undefined") {
          request.displayName = tenantOptions.displayName;
        }
        if (typeof tenantOptions.anonymousSignInEnabled !== "undefined") {
          request.enableAnonymousUser = tenantOptions.anonymousSignInEnabled;
        }
        if (typeof tenantOptions.multiFactorConfig !== "undefined") {
          request.mfaConfig = auth_config_1.MultiFactorAuthConfig.buildServerRequest(tenantOptions.multiFactorConfig);
        }
        if (typeof tenantOptions.testPhoneNumbers !== "undefined") {
          request.testPhoneNumbers = tenantOptions.testPhoneNumbers ?? {};
        }
        if (typeof tenantOptions.smsRegionConfig !== "undefined") {
          request.smsRegionConfig = tenantOptions.smsRegionConfig;
        }
        return request;
      }
      static getTenantIdFromResourceName(resourceName) {
        const matchTenantRes = resourceName.match(/\/tenants\/(.*)$/);
        if (!matchTenantRes || matchTenantRes.length < 2) {
          return null;
        }
        return matchTenantRes[1];
      }
      static validate(request, createRequest) {
        const validKeys = {
          displayName: true,
          emailSignInConfig: true,
          anonymousSignInEnabled: true,
          multiFactorConfig: true,
          testPhoneNumbers: true,
          smsRegionConfig: true
        };
        const label = createRequest ? "CreateTenantRequest" : "UpdateTenantRequest";
        if (!validator.isNonNullObject(request)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `"${label}" must be a valid non-null object.`);
        }
        for (const key in request) {
          if (!(key in validKeys)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `"${key}" is not a valid ${label} parameter.`);
          }
        }
        if (typeof request.displayName !== "undefined" && !validator.isNonEmptyString(request.displayName)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `"${label}.displayName" must be a valid non-empty string.`);
        }
        if (typeof request.emailSignInConfig !== "undefined") {
          auth_config_1.EmailSignInConfig.buildServerRequest(request.emailSignInConfig);
        }
        if (typeof request.testPhoneNumbers !== "undefined" && request.testPhoneNumbers !== null) {
          (0, auth_config_1.validateTestPhoneNumbers)(request.testPhoneNumbers);
        } else if (request.testPhoneNumbers === null && createRequest) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `"${label}.testPhoneNumbers" must be a non-null object.`);
        }
        if (typeof request.multiFactorConfig !== "undefined") {
          auth_config_1.MultiFactorAuthConfig.buildServerRequest(request.multiFactorConfig);
        }
        if (typeof request.smsRegionConfig != "undefined") {
          auth_config_1.SmsRegionsAuthConfig.validate(request.smsRegionConfig);
        }
      }
      get emailSignInConfig() {
        return this.emailSignInConfig_;
      }
      get multiFactorConfig() {
        return this.multiFactorConfig_;
      }
      toJSON() {
        const json = {
          tenantId: this.tenantId,
          displayName: this.displayName,
          emailSignInConfig: this.emailSignInConfig_?.toJSON(),
          multiFactorConfig: this.multiFactorConfig_?.toJSON(),
          anonymousSignInEnabled: this.anonymousSignInEnabled,
          testPhoneNumbers: this.testPhoneNumbers,
          smsRegionConfig: (0, deep_copy_1.deepCopy)(this.smsRegionConfig)
        };
        if (typeof json.multiFactorConfig === "undefined") {
          delete json.multiFactorConfig;
        }
        if (typeof json.testPhoneNumbers === "undefined") {
          delete json.testPhoneNumbers;
        }
        if (typeof json.smsRegionConfig === "undefined") {
          delete json.smsRegionConfig;
        }
        return json;
      }
    };
    exports.Tenant = Tenant2;
  }
});

// node_modules/firebase-admin/lib/auth/identifier.js
var require_identifier = __commonJS({
  "node_modules/firebase-admin/lib/auth/identifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isProviderIdentifier = exports.isPhoneIdentifier = exports.isEmailIdentifier = exports.isUidIdentifier = void 0;
    function isUidIdentifier(id) {
      return id.uid !== void 0;
    }
    exports.isUidIdentifier = isUidIdentifier;
    function isEmailIdentifier(id) {
      return id.email !== void 0;
    }
    exports.isEmailIdentifier = isEmailIdentifier;
    function isPhoneIdentifier(id) {
      return id.phoneNumber !== void 0;
    }
    exports.isPhoneIdentifier = isPhoneIdentifier;
    function isProviderIdentifier(id) {
      const pid = id;
      return pid.providerId !== void 0 && pid.providerUid !== void 0;
    }
    exports.isProviderIdentifier = isProviderIdentifier;
  }
});

// node_modules/firebase-admin/lib/auth/project-config.js
var require_project_config = __commonJS({
  "node_modules/firebase-admin/lib/auth/project-config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProjectConfig = void 0;
    var validator = require_validator();
    var error_1 = require_error();
    var auth_config_1 = require_auth_config();
    var deep_copy_1 = require_deep_copy();
    var ProjectConfig2 = class {
      constructor(response) {
        if (typeof response.smsRegionConfig !== "undefined") {
          this.smsRegionConfig = response.smsRegionConfig;
        }
      }
      static validate(request) {
        if (!validator.isNonNullObject(request)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"UpdateProjectConfigRequest" must be a valid non-null object.');
        }
        const validKeys = {
          smsRegionConfig: true
        };
        for (const key in request) {
          if (!(key in validKeys)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `"${key}" is not a valid UpdateProjectConfigRequest parameter.`);
          }
        }
        if (typeof request.smsRegionConfig !== "undefined") {
          auth_config_1.SmsRegionsAuthConfig.validate(request.smsRegionConfig);
        }
      }
      static buildServerRequest(configOptions) {
        ProjectConfig2.validate(configOptions);
        return configOptions;
      }
      toJSON() {
        const json = {
          smsRegionConfig: (0, deep_copy_1.deepCopy)(this.smsRegionConfig)
        };
        if (typeof json.smsRegionConfig === "undefined") {
          delete json.smsRegionConfig;
        }
        return json;
      }
    };
    exports.ProjectConfig = ProjectConfig2;
  }
});

// node_modules/firebase-admin/lib/auth/auth-api-request.js
var require_auth_api_request = __commonJS({
  "node_modules/firebase-admin/lib/auth/auth-api-request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useEmulator = exports.TenantAwareAuthRequestHandler = exports.AuthRequestHandler = exports.AbstractAuthRequestHandler = exports.FIREBASE_AUTH_SIGN_UP_NEW_USER = exports.FIREBASE_AUTH_SET_ACCOUNT_INFO = exports.FIREBASE_AUTH_BATCH_DELETE_ACCOUNTS = exports.FIREBASE_AUTH_DELETE_ACCOUNT = exports.FIREBASE_AUTH_GET_ACCOUNTS_INFO = exports.FIREBASE_AUTH_GET_ACCOUNT_INFO = exports.FIREBASE_AUTH_DOWNLOAD_ACCOUNT = exports.FIREBASE_AUTH_UPLOAD_ACCOUNT = exports.FIREBASE_AUTH_CREATE_SESSION_COOKIE = exports.EMAIL_ACTION_REQUEST_TYPES = exports.RESERVED_CLAIMS = void 0;
    var validator = require_validator();
    var deep_copy_1 = require_deep_copy();
    var error_1 = require_error();
    var api_request_1 = require_api_request();
    var utils = require_utils();
    var user_import_builder_1 = require_user_import_builder();
    var action_code_settings_builder_1 = require_action_code_settings_builder();
    var tenant_1 = require_tenant();
    var identifier_1 = require_identifier();
    var auth_config_1 = require_auth_config();
    var project_config_1 = require_project_config();
    var FIREBASE_AUTH_HEADER = {
      "X-Client-Version": `Node/Admin/${utils.getSdkVersion()}`
    };
    var FIREBASE_AUTH_TIMEOUT = 25e3;
    exports.RESERVED_CLAIMS = [
      "acr",
      "amr",
      "at_hash",
      "aud",
      "auth_time",
      "azp",
      "cnf",
      "c_hash",
      "exp",
      "iat",
      "iss",
      "jti",
      "nbf",
      "nonce",
      "sub",
      "firebase"
    ];
    exports.EMAIL_ACTION_REQUEST_TYPES = [
      "PASSWORD_RESET",
      "VERIFY_EMAIL",
      "EMAIL_SIGNIN",
      "VERIFY_AND_CHANGE_EMAIL"
    ];
    var MAX_CLAIMS_PAYLOAD_SIZE = 1e3;
    var MAX_DOWNLOAD_ACCOUNT_PAGE_SIZE = 1e3;
    var MAX_UPLOAD_ACCOUNT_BATCH_SIZE = 1e3;
    var MAX_GET_ACCOUNTS_BATCH_SIZE = 100;
    var MAX_DELETE_ACCOUNTS_BATCH_SIZE = 1e3;
    var MIN_SESSION_COOKIE_DURATION_SECS = 5 * 60;
    var MAX_SESSION_COOKIE_DURATION_SECS = 14 * 24 * 60 * 60;
    var MAX_LIST_PROVIDER_CONFIGURATION_PAGE_SIZE = 100;
    var FIREBASE_AUTH_BASE_URL_FORMAT = "https://identitytoolkit.googleapis.com/{version}/projects/{projectId}{api}";
    var FIREBASE_AUTH_EMULATOR_BASE_URL_FORMAT = "http://{host}/identitytoolkit.googleapis.com/{version}/projects/{projectId}{api}";
    var FIREBASE_AUTH_TENANT_URL_FORMAT = FIREBASE_AUTH_BASE_URL_FORMAT.replace("projects/{projectId}", "projects/{projectId}/tenants/{tenantId}");
    var FIREBASE_AUTH_EMULATOR_TENANT_URL_FORMAT = FIREBASE_AUTH_EMULATOR_BASE_URL_FORMAT.replace("projects/{projectId}", "projects/{projectId}/tenants/{tenantId}");
    var MAX_LIST_TENANT_PAGE_SIZE = 1e3;
    var WriteOperationType;
    (function(WriteOperationType2) {
      WriteOperationType2["Create"] = "create";
      WriteOperationType2["Update"] = "update";
      WriteOperationType2["Upload"] = "upload";
    })(WriteOperationType || (WriteOperationType = {}));
    var AuthResourceUrlBuilder = class {
      constructor(app, version = "v1") {
        this.app = app;
        this.version = version;
        if (useEmulator()) {
          this.urlFormat = utils.formatString(FIREBASE_AUTH_EMULATOR_BASE_URL_FORMAT, {
            host: emulatorHost()
          });
        } else {
          this.urlFormat = FIREBASE_AUTH_BASE_URL_FORMAT;
        }
      }
      getUrl(api, params) {
        return this.getProjectId().then((projectId) => {
          const baseParams = {
            version: this.version,
            projectId,
            api: api || ""
          };
          const baseUrl = utils.formatString(this.urlFormat, baseParams);
          return utils.formatString(baseUrl, params || {});
        });
      }
      getProjectId() {
        if (this.projectId) {
          return Promise.resolve(this.projectId);
        }
        return utils.findProjectId(this.app).then((projectId) => {
          if (!validator.isNonEmptyString(projectId)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CREDENTIAL, "Failed to determine project ID for Auth. Initialize the SDK with service account credentials or set project ID as an app option. Alternatively set the GOOGLE_CLOUD_PROJECT environment variable.");
          }
          this.projectId = projectId;
          return projectId;
        });
      }
    };
    var TenantAwareAuthResourceUrlBuilder = class extends AuthResourceUrlBuilder {
      constructor(app, version, tenantId) {
        super(app, version);
        this.app = app;
        this.version = version;
        this.tenantId = tenantId;
        if (useEmulator()) {
          this.urlFormat = utils.formatString(FIREBASE_AUTH_EMULATOR_TENANT_URL_FORMAT, {
            host: emulatorHost()
          });
        } else {
          this.urlFormat = FIREBASE_AUTH_TENANT_URL_FORMAT;
        }
      }
      getUrl(api, params) {
        return super.getUrl(api, params).then((url) => {
          return utils.formatString(url, { tenantId: this.tenantId });
        });
      }
    };
    var AuthHttpClient = class extends api_request_1.AuthorizedHttpClient {
      getToken() {
        if (useEmulator()) {
          return Promise.resolve("owner");
        }
        return super.getToken();
      }
    };
    function validateAuthFactorInfo(request) {
      const validKeys = {
        mfaEnrollmentId: true,
        displayName: true,
        phoneInfo: true,
        enrolledAt: true
      };
      for (const key in request) {
        if (!(key in validKeys)) {
          delete request[key];
        }
      }
      const authFactorInfoIdentifier = request.mfaEnrollmentId || request.phoneInfo || JSON.stringify(request);
      if (typeof request.mfaEnrollmentId !== "undefined" && !validator.isNonEmptyString(request.mfaEnrollmentId)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID, 'The second factor "uid" must be a valid non-empty string.');
      }
      if (typeof request.displayName !== "undefined" && !validator.isString(request.displayName)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_DISPLAY_NAME, `The second factor "displayName" for "${authFactorInfoIdentifier}" must be a valid string.`);
      }
      if (typeof request.enrolledAt !== "undefined" && !validator.isISODateString(request.enrolledAt)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ENROLLMENT_TIME, `The second factor "enrollmentTime" for "${authFactorInfoIdentifier}" must be a valid UTC date string.`);
      }
      if (typeof request.phoneInfo !== "undefined") {
        if (!validator.isPhoneNumber(request.phoneInfo)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PHONE_NUMBER, `The second factor "phoneNumber" for "${authFactorInfoIdentifier}" must be a non-empty E.164 standard compliant identifier string.`);
        }
      } else {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ENROLLED_FACTORS, "MFAInfo object provided is invalid.");
      }
    }
    function validateProviderUserInfo(request) {
      const validKeys = {
        rawId: true,
        providerId: true,
        email: true,
        displayName: true,
        photoUrl: true
      };
      for (const key in request) {
        if (!(key in validKeys)) {
          delete request[key];
        }
      }
      if (!validator.isNonEmptyString(request.providerId)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID);
      }
      if (typeof request.displayName !== "undefined" && typeof request.displayName !== "string") {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_DISPLAY_NAME, `The provider "displayName" for "${request.providerId}" must be a valid string.`);
      }
      if (!validator.isNonEmptyString(request.rawId)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID, `The provider "uid" for "${request.providerId}" must be a valid non-empty string.`);
      }
      if (typeof request.email !== "undefined" && !validator.isEmail(request.email)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_EMAIL, `The provider "email" for "${request.providerId}" must be a valid email string.`);
      }
      if (typeof request.photoUrl !== "undefined" && !validator.isURL(request.photoUrl)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PHOTO_URL, `The provider "photoURL" for "${request.providerId}" must be a valid URL string.`);
      }
    }
    function validateCreateEditRequest(request, writeOperationType) {
      const uploadAccountRequest = writeOperationType === WriteOperationType.Upload;
      const validKeys = {
        displayName: true,
        localId: true,
        email: true,
        password: true,
        rawPassword: true,
        emailVerified: true,
        photoUrl: true,
        disabled: true,
        disableUser: true,
        deleteAttribute: true,
        deleteProvider: true,
        sanityCheck: true,
        phoneNumber: true,
        customAttributes: true,
        validSince: true,
        linkProviderUserInfo: !uploadAccountRequest,
        tenantId: uploadAccountRequest,
        passwordHash: uploadAccountRequest,
        salt: uploadAccountRequest,
        createdAt: uploadAccountRequest,
        lastLoginAt: uploadAccountRequest,
        providerUserInfo: uploadAccountRequest,
        mfaInfo: uploadAccountRequest,
        mfa: !uploadAccountRequest
      };
      for (const key in request) {
        if (!(key in validKeys)) {
          delete request[key];
        }
      }
      if (typeof request.tenantId !== "undefined" && !validator.isNonEmptyString(request.tenantId)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_TENANT_ID);
      }
      if (typeof request.displayName !== "undefined" && !validator.isString(request.displayName)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_DISPLAY_NAME);
      }
      if ((typeof request.localId !== "undefined" || uploadAccountRequest) && !validator.isUid(request.localId)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID);
      }
      if (typeof request.email !== "undefined" && !validator.isEmail(request.email)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_EMAIL);
      }
      if (typeof request.phoneNumber !== "undefined" && !validator.isPhoneNumber(request.phoneNumber)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PHONE_NUMBER);
      }
      if (typeof request.password !== "undefined" && !validator.isPassword(request.password)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PASSWORD);
      }
      if (typeof request.rawPassword !== "undefined" && !validator.isPassword(request.rawPassword)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PASSWORD);
      }
      if (typeof request.emailVerified !== "undefined" && typeof request.emailVerified !== "boolean") {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_EMAIL_VERIFIED);
      }
      if (typeof request.photoUrl !== "undefined" && !validator.isURL(request.photoUrl)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PHOTO_URL);
      }
      if (typeof request.disabled !== "undefined" && typeof request.disabled !== "boolean") {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_DISABLED_FIELD);
      }
      if (typeof request.validSince !== "undefined" && !validator.isNumber(request.validSince)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_TOKENS_VALID_AFTER_TIME);
      }
      if (typeof request.createdAt !== "undefined" && !validator.isNumber(request.createdAt)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CREATION_TIME);
      }
      if (typeof request.lastLoginAt !== "undefined" && !validator.isNumber(request.lastLoginAt)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_LAST_SIGN_IN_TIME);
      }
      if (typeof request.disableUser !== "undefined" && typeof request.disableUser !== "boolean") {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_DISABLED_FIELD);
      }
      if (typeof request.customAttributes !== "undefined") {
        let developerClaims;
        try {
          developerClaims = JSON.parse(request.customAttributes);
        } catch (error) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CLAIMS, error.message);
        }
        const invalidClaims = [];
        exports.RESERVED_CLAIMS.forEach((blacklistedClaim) => {
          if (Object.prototype.hasOwnProperty.call(developerClaims, blacklistedClaim)) {
            invalidClaims.push(blacklistedClaim);
          }
        });
        if (invalidClaims.length > 0) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.FORBIDDEN_CLAIM, invalidClaims.length > 1 ? `Developer claims "${invalidClaims.join('", "')}" are reserved and cannot be specified.` : `Developer claim "${invalidClaims[0]}" is reserved and cannot be specified.`);
        }
        if (request.customAttributes.length > MAX_CLAIMS_PAYLOAD_SIZE) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.CLAIMS_TOO_LARGE, `Developer claims payload should not exceed ${MAX_CLAIMS_PAYLOAD_SIZE} characters.`);
        }
      }
      if (typeof request.passwordHash !== "undefined" && !validator.isString(request.passwordHash)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PASSWORD_HASH);
      }
      if (typeof request.salt !== "undefined" && !validator.isString(request.salt)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PASSWORD_SALT);
      }
      if (typeof request.providerUserInfo !== "undefined" && !validator.isArray(request.providerUserInfo)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_DATA);
      } else if (validator.isArray(request.providerUserInfo)) {
        request.providerUserInfo.forEach((providerUserInfoEntry) => {
          validateProviderUserInfo(providerUserInfoEntry);
        });
      }
      if (typeof request.linkProviderUserInfo !== "undefined") {
        validateProviderUserInfo(request.linkProviderUserInfo);
      }
      let enrollments = null;
      if (request.mfaInfo) {
        enrollments = request.mfaInfo;
      } else if (request.mfa && request.mfa.enrollments) {
        enrollments = request.mfa.enrollments;
      }
      if (enrollments) {
        if (!validator.isArray(enrollments)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ENROLLED_FACTORS);
        }
        enrollments.forEach((authFactorInfoEntry) => {
          validateAuthFactorInfo(authFactorInfoEntry);
        });
      }
    }
    exports.FIREBASE_AUTH_CREATE_SESSION_COOKIE = new api_request_1.ApiSettings(":createSessionCookie", "POST").setRequestValidator((request) => {
      if (!validator.isNonEmptyString(request.idToken)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ID_TOKEN);
      }
      if (!validator.isNumber(request.validDuration) || request.validDuration < MIN_SESSION_COOKIE_DURATION_SECS || request.validDuration > MAX_SESSION_COOKIE_DURATION_SECS) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_SESSION_COOKIE_DURATION);
      }
    }).setResponseValidator((response) => {
      if (!validator.isNonEmptyString(response.sessionCookie)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR);
      }
    });
    exports.FIREBASE_AUTH_UPLOAD_ACCOUNT = new api_request_1.ApiSettings("/accounts:batchCreate", "POST");
    exports.FIREBASE_AUTH_DOWNLOAD_ACCOUNT = new api_request_1.ApiSettings("/accounts:batchGet", "GET").setRequestValidator((request) => {
      if (typeof request.nextPageToken !== "undefined" && !validator.isNonEmptyString(request.nextPageToken)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PAGE_TOKEN);
      }
      if (!validator.isNumber(request.maxResults) || request.maxResults <= 0 || request.maxResults > MAX_DOWNLOAD_ACCOUNT_PAGE_SIZE) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `Required "maxResults" must be a positive integer that does not exceed ${MAX_DOWNLOAD_ACCOUNT_PAGE_SIZE}.`);
      }
    });
    exports.FIREBASE_AUTH_GET_ACCOUNT_INFO = new api_request_1.ApiSettings("/accounts:lookup", "POST").setRequestValidator((request) => {
      if (!request.localId && !request.email && !request.phoneNumber && !request.federatedUserId) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Server request is missing user identifier");
      }
    }).setResponseValidator((response) => {
      if (!response.users || !response.users.length) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.USER_NOT_FOUND);
      }
    });
    exports.FIREBASE_AUTH_GET_ACCOUNTS_INFO = new api_request_1.ApiSettings("/accounts:lookup", "POST").setRequestValidator((request) => {
      if (!request.localId && !request.email && !request.phoneNumber && !request.federatedUserId) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Server request is missing user identifier");
      }
    });
    exports.FIREBASE_AUTH_DELETE_ACCOUNT = new api_request_1.ApiSettings("/accounts:delete", "POST").setRequestValidator((request) => {
      if (!request.localId) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Server request is missing user identifier");
      }
    });
    exports.FIREBASE_AUTH_BATCH_DELETE_ACCOUNTS = new api_request_1.ApiSettings("/accounts:batchDelete", "POST").setRequestValidator((request) => {
      if (!request.localIds) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Server request is missing user identifiers");
      }
      if (typeof request.force === "undefined" || request.force !== true) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Server request is missing force=true field");
      }
    }).setResponseValidator((response) => {
      const errors = response.errors || [];
      errors.forEach((batchDeleteErrorInfo) => {
        if (typeof batchDeleteErrorInfo.index === "undefined") {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Server BatchDeleteAccountResponse is missing an errors.index field");
        }
        if (!batchDeleteErrorInfo.localId) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Server BatchDeleteAccountResponse is missing an errors.localId field");
        }
      });
    });
    exports.FIREBASE_AUTH_SET_ACCOUNT_INFO = new api_request_1.ApiSettings("/accounts:update", "POST").setRequestValidator((request) => {
      if (typeof request.localId === "undefined") {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Server request is missing user identifier");
      }
      if (typeof request.tenantId !== "undefined") {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"tenantId" is an invalid "UpdateRequest" property.');
      }
      validateCreateEditRequest(request, WriteOperationType.Update);
    }).setResponseValidator((response) => {
      if (!response.localId) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.USER_NOT_FOUND);
      }
    });
    exports.FIREBASE_AUTH_SIGN_UP_NEW_USER = new api_request_1.ApiSettings("/accounts", "POST").setRequestValidator((request) => {
      if (typeof request.customAttributes !== "undefined") {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"customAttributes" cannot be set when creating a new user.');
      }
      if (typeof request.validSince !== "undefined") {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"validSince" cannot be set when creating a new user.');
      }
      if (typeof request.tenantId !== "undefined") {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"tenantId" is an invalid "CreateRequest" property.');
      }
      validateCreateEditRequest(request, WriteOperationType.Create);
    }).setResponseValidator((response) => {
      if (!response.localId) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to create new user");
      }
    });
    var FIREBASE_AUTH_GET_OOB_CODE = new api_request_1.ApiSettings("/accounts:sendOobCode", "POST").setRequestValidator((request) => {
      if (!validator.isEmail(request.email)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_EMAIL);
      }
      if (typeof request.newEmail !== "undefined" && !validator.isEmail(request.newEmail)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_NEW_EMAIL);
      }
      if (exports.EMAIL_ACTION_REQUEST_TYPES.indexOf(request.requestType) === -1) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `"${request.requestType}" is not a supported email action request type.`);
      }
    }).setResponseValidator((response) => {
      if (!response.oobLink) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to create the email action link");
      }
    });
    var GET_OAUTH_IDP_CONFIG = new api_request_1.ApiSettings("/oauthIdpConfigs/{providerId}", "GET").setResponseValidator((response) => {
      if (!validator.isNonEmptyString(response.name)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to get OIDC configuration");
      }
    });
    var DELETE_OAUTH_IDP_CONFIG = new api_request_1.ApiSettings("/oauthIdpConfigs/{providerId}", "DELETE");
    var CREATE_OAUTH_IDP_CONFIG = new api_request_1.ApiSettings("/oauthIdpConfigs?oauthIdpConfigId={providerId}", "POST").setResponseValidator((response) => {
      if (!validator.isNonEmptyString(response.name)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to create new OIDC configuration");
      }
    });
    var UPDATE_OAUTH_IDP_CONFIG = new api_request_1.ApiSettings("/oauthIdpConfigs/{providerId}?updateMask={updateMask}", "PATCH").setResponseValidator((response) => {
      if (!validator.isNonEmptyString(response.name)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to update OIDC configuration");
      }
    });
    var LIST_OAUTH_IDP_CONFIGS = new api_request_1.ApiSettings("/oauthIdpConfigs", "GET").setRequestValidator((request) => {
      if (typeof request.pageToken !== "undefined" && !validator.isNonEmptyString(request.pageToken)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PAGE_TOKEN);
      }
      if (!validator.isNumber(request.pageSize) || request.pageSize <= 0 || request.pageSize > MAX_LIST_PROVIDER_CONFIGURATION_PAGE_SIZE) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `Required "maxResults" must be a positive integer that does not exceed ${MAX_LIST_PROVIDER_CONFIGURATION_PAGE_SIZE}.`);
      }
    });
    var GET_INBOUND_SAML_CONFIG = new api_request_1.ApiSettings("/inboundSamlConfigs/{providerId}", "GET").setResponseValidator((response) => {
      if (!validator.isNonEmptyString(response.name)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to get SAML configuration");
      }
    });
    var DELETE_INBOUND_SAML_CONFIG = new api_request_1.ApiSettings("/inboundSamlConfigs/{providerId}", "DELETE");
    var CREATE_INBOUND_SAML_CONFIG = new api_request_1.ApiSettings("/inboundSamlConfigs?inboundSamlConfigId={providerId}", "POST").setResponseValidator((response) => {
      if (!validator.isNonEmptyString(response.name)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to create new SAML configuration");
      }
    });
    var UPDATE_INBOUND_SAML_CONFIG = new api_request_1.ApiSettings("/inboundSamlConfigs/{providerId}?updateMask={updateMask}", "PATCH").setResponseValidator((response) => {
      if (!validator.isNonEmptyString(response.name)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to update SAML configuration");
      }
    });
    var LIST_INBOUND_SAML_CONFIGS = new api_request_1.ApiSettings("/inboundSamlConfigs", "GET").setRequestValidator((request) => {
      if (typeof request.pageToken !== "undefined" && !validator.isNonEmptyString(request.pageToken)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PAGE_TOKEN);
      }
      if (!validator.isNumber(request.pageSize) || request.pageSize <= 0 || request.pageSize > MAX_LIST_PROVIDER_CONFIGURATION_PAGE_SIZE) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `Required "maxResults" must be a positive integer that does not exceed ${MAX_LIST_PROVIDER_CONFIGURATION_PAGE_SIZE}.`);
      }
    });
    var AbstractAuthRequestHandler = class {
      constructor(app) {
        this.app = app;
        if (typeof app !== "object" || app === null || !("options" in app)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "First argument passed to admin.auth() must be a valid Firebase app instance.");
        }
        this.httpClient = new AuthHttpClient(app);
      }
      static getErrorCode(response) {
        return validator.isNonNullObject(response) && response.error && response.error.message || null;
      }
      static addUidToRequest(id, request) {
        if (!validator.isUid(id.uid)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID);
        }
        request.localId ? request.localId.push(id.uid) : request.localId = [id.uid];
        return request;
      }
      static addEmailToRequest(id, request) {
        if (!validator.isEmail(id.email)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_EMAIL);
        }
        request.email ? request.email.push(id.email) : request.email = [id.email];
        return request;
      }
      static addPhoneToRequest(id, request) {
        if (!validator.isPhoneNumber(id.phoneNumber)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PHONE_NUMBER);
        }
        request.phoneNumber ? request.phoneNumber.push(id.phoneNumber) : request.phoneNumber = [id.phoneNumber];
        return request;
      }
      static addProviderToRequest(id, request) {
        if (!validator.isNonEmptyString(id.providerId)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID);
        }
        if (!validator.isNonEmptyString(id.providerUid)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_UID);
        }
        const federatedUserId = {
          providerId: id.providerId,
          rawId: id.providerUid
        };
        request.federatedUserId ? request.federatedUserId.push(federatedUserId) : request.federatedUserId = [federatedUserId];
        return request;
      }
      createSessionCookie(idToken, expiresIn) {
        const request = {
          idToken,
          validDuration: expiresIn / 1e3
        };
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_CREATE_SESSION_COOKIE, request).then((response) => response.sessionCookie);
      }
      getAccountInfoByUid(uid) {
        if (!validator.isUid(uid)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID));
        }
        const request = {
          localId: [uid]
        };
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_GET_ACCOUNT_INFO, request);
      }
      getAccountInfoByEmail(email) {
        if (!validator.isEmail(email)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_EMAIL));
        }
        const request = {
          email: [email]
        };
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_GET_ACCOUNT_INFO, request);
      }
      getAccountInfoByPhoneNumber(phoneNumber) {
        if (!validator.isPhoneNumber(phoneNumber)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PHONE_NUMBER));
        }
        const request = {
          phoneNumber: [phoneNumber]
        };
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_GET_ACCOUNT_INFO, request);
      }
      getAccountInfoByFederatedUid(providerId, rawId) {
        if (!validator.isNonEmptyString(providerId) || !validator.isNonEmptyString(rawId)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID);
        }
        const request = {
          federatedUserId: [{
            providerId,
            rawId
          }]
        };
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_GET_ACCOUNT_INFO, request);
      }
      getAccountInfoByIdentifiers(identifiers) {
        if (identifiers.length === 0) {
          return Promise.resolve({ users: [] });
        } else if (identifiers.length > MAX_GET_ACCOUNTS_BATCH_SIZE) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.MAXIMUM_USER_COUNT_EXCEEDED, "`identifiers` parameter must have <= " + MAX_GET_ACCOUNTS_BATCH_SIZE + " entries.");
        }
        let request = {};
        for (const id of identifiers) {
          if ((0, identifier_1.isUidIdentifier)(id)) {
            request = AbstractAuthRequestHandler.addUidToRequest(id, request);
          } else if ((0, identifier_1.isEmailIdentifier)(id)) {
            request = AbstractAuthRequestHandler.addEmailToRequest(id, request);
          } else if ((0, identifier_1.isPhoneIdentifier)(id)) {
            request = AbstractAuthRequestHandler.addPhoneToRequest(id, request);
          } else if ((0, identifier_1.isProviderIdentifier)(id)) {
            request = AbstractAuthRequestHandler.addProviderToRequest(id, request);
          } else {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "Unrecognized identifier: " + id);
          }
        }
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_GET_ACCOUNTS_INFO, request);
      }
      downloadAccount(maxResults = MAX_DOWNLOAD_ACCOUNT_PAGE_SIZE, pageToken) {
        const request = {
          maxResults,
          nextPageToken: pageToken
        };
        if (typeof request.nextPageToken === "undefined") {
          delete request.nextPageToken;
        }
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_DOWNLOAD_ACCOUNT, request).then((response) => {
          if (!response.users) {
            response.users = [];
          }
          return response;
        });
      }
      uploadAccount(users, options) {
        const userImportBuilder = new user_import_builder_1.UserImportBuilder(users, options, (userRequest) => {
          validateCreateEditRequest(userRequest, WriteOperationType.Upload);
        });
        const request = userImportBuilder.buildRequest();
        if (validator.isArray(users) && users.length > MAX_UPLOAD_ACCOUNT_BATCH_SIZE) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.MAXIMUM_USER_COUNT_EXCEEDED, `A maximum of ${MAX_UPLOAD_ACCOUNT_BATCH_SIZE} users can be imported at once.`);
        }
        if (!request.users || request.users.length === 0) {
          return Promise.resolve(userImportBuilder.buildResponse([]));
        }
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_UPLOAD_ACCOUNT, request).then((response) => {
          const failedUploads = response.error || [];
          return userImportBuilder.buildResponse(failedUploads);
        });
      }
      deleteAccount(uid) {
        if (!validator.isUid(uid)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID));
        }
        const request = {
          localId: uid
        };
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_DELETE_ACCOUNT, request);
      }
      deleteAccounts(uids, force) {
        if (uids.length === 0) {
          return Promise.resolve({});
        } else if (uids.length > MAX_DELETE_ACCOUNTS_BATCH_SIZE) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.MAXIMUM_USER_COUNT_EXCEEDED, "`uids` parameter must have <= " + MAX_DELETE_ACCOUNTS_BATCH_SIZE + " entries.");
        }
        const request = {
          localIds: [],
          force
        };
        uids.forEach((uid) => {
          if (!validator.isUid(uid)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID);
          }
          request.localIds.push(uid);
        });
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_BATCH_DELETE_ACCOUNTS, request);
      }
      setCustomUserClaims(uid, customUserClaims) {
        if (!validator.isUid(uid)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID));
        } else if (!validator.isObject(customUserClaims)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "CustomUserClaims argument must be an object or null."));
        }
        if (customUserClaims === null) {
          customUserClaims = {};
        }
        const request = {
          localId: uid,
          customAttributes: JSON.stringify(customUserClaims)
        };
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_SET_ACCOUNT_INFO, request).then((response) => {
          return response.localId;
        });
      }
      updateExistingAccount(uid, properties) {
        if (!validator.isUid(uid)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID));
        } else if (!validator.isNonNullObject(properties)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "Properties argument must be a non-null object."));
        } else if (validator.isNonNullObject(properties.providerToLink)) {
          if (!validator.isNonEmptyString(properties.providerToLink.providerId)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "providerToLink.providerId of properties argument must be a non-empty string.");
          }
          if (!validator.isNonEmptyString(properties.providerToLink.uid)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "providerToLink.uid of properties argument must be a non-empty string.");
          }
        } else if (typeof properties.providersToUnlink !== "undefined") {
          if (!validator.isArray(properties.providersToUnlink)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "providersToUnlink of properties argument must be an array of strings.");
          }
          properties.providersToUnlink.forEach((providerId) => {
            if (!validator.isNonEmptyString(providerId)) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "providersToUnlink of properties argument must be an array of strings.");
            }
          });
        }
        const request = (0, deep_copy_1.deepCopy)(properties);
        request.localId = uid;
        const deletableParams = {
          displayName: "DISPLAY_NAME",
          photoURL: "PHOTO_URL"
        };
        request.deleteAttribute = [];
        for (const key in deletableParams) {
          if (request[key] === null) {
            request.deleteAttribute.push(deletableParams[key]);
            delete request[key];
          }
        }
        if (request.deleteAttribute.length === 0) {
          delete request.deleteAttribute;
        }
        if (request.phoneNumber === null) {
          request.deleteProvider ? request.deleteProvider.push("phone") : request.deleteProvider = ["phone"];
          delete request.phoneNumber;
        }
        if (typeof request.providerToLink !== "undefined") {
          request.linkProviderUserInfo = (0, deep_copy_1.deepCopy)(request.providerToLink);
          delete request.providerToLink;
          request.linkProviderUserInfo.rawId = request.linkProviderUserInfo.uid;
          delete request.linkProviderUserInfo.uid;
        }
        if (typeof request.providersToUnlink !== "undefined") {
          if (!validator.isArray(request.deleteProvider)) {
            request.deleteProvider = [];
          }
          request.deleteProvider = request.deleteProvider.concat(request.providersToUnlink);
          delete request.providersToUnlink;
        }
        if (typeof request.photoURL !== "undefined") {
          request.photoUrl = request.photoURL;
          delete request.photoURL;
        }
        if (typeof request.disabled !== "undefined") {
          request.disableUser = request.disabled;
          delete request.disabled;
        }
        if (validator.isNonNullObject(request.multiFactor)) {
          if (request.multiFactor.enrolledFactors === null) {
            request.mfa = {};
          } else if (validator.isArray(request.multiFactor.enrolledFactors)) {
            request.mfa = {
              enrollments: []
            };
            try {
              request.multiFactor.enrolledFactors.forEach((multiFactorInfo) => {
                request.mfa.enrollments.push((0, user_import_builder_1.convertMultiFactorInfoToServerFormat)(multiFactorInfo));
              });
            } catch (e) {
              return Promise.reject(e);
            }
            if (request.mfa.enrollments.length === 0) {
              delete request.mfa.enrollments;
            }
          }
          delete request.multiFactor;
        }
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_SET_ACCOUNT_INFO, request).then((response) => {
          return response.localId;
        });
      }
      revokeRefreshTokens(uid) {
        if (!validator.isUid(uid)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID));
        }
        const request = {
          localId: uid,
          validSince: Math.floor(new Date().getTime() / 1e3)
        };
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_SET_ACCOUNT_INFO, request).then((response) => {
          return response.localId;
        });
      }
      createNewAccount(properties) {
        if (!validator.isNonNullObject(properties)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "Properties argument must be a non-null object."));
        }
        const request = (0, deep_copy_1.deepCopy)(properties);
        if (typeof request.photoURL !== "undefined") {
          request.photoUrl = request.photoURL;
          delete request.photoURL;
        }
        if (typeof request.uid !== "undefined") {
          request.localId = request.uid;
          delete request.uid;
        }
        if (validator.isNonNullObject(request.multiFactor)) {
          if (validator.isNonEmptyArray(request.multiFactor.enrolledFactors)) {
            const mfaInfo = [];
            try {
              request.multiFactor.enrolledFactors.forEach((multiFactorInfo) => {
                if ("enrollmentTime" in multiFactorInfo) {
                  throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"enrollmentTime" is not supported when adding second factors via "createUser()"');
                } else if ("uid" in multiFactorInfo) {
                  throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"uid" is not supported when adding second factors via "createUser()"');
                }
                mfaInfo.push((0, user_import_builder_1.convertMultiFactorInfoToServerFormat)(multiFactorInfo));
              });
            } catch (e) {
              return Promise.reject(e);
            }
            request.mfaInfo = mfaInfo;
          }
          delete request.multiFactor;
        }
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), exports.FIREBASE_AUTH_SIGN_UP_NEW_USER, request).then((response) => {
          return response.localId;
        });
      }
      getEmailActionLink(requestType, email, actionCodeSettings, newEmail) {
        let request = {
          requestType,
          email,
          returnOobLink: true,
          ...typeof newEmail !== "undefined" && { newEmail }
        };
        if (typeof actionCodeSettings === "undefined" && requestType === "EMAIL_SIGNIN") {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "`actionCodeSettings` is required when `requestType` === 'EMAIL_SIGNIN'"));
        }
        if (typeof actionCodeSettings !== "undefined" || requestType === "EMAIL_SIGNIN") {
          try {
            const builder = new action_code_settings_builder_1.ActionCodeSettingsBuilder(actionCodeSettings);
            request = (0, deep_copy_1.deepExtend)(request, builder.buildRequest());
          } catch (e) {
            return Promise.reject(e);
          }
        }
        if (requestType === "VERIFY_AND_CHANGE_EMAIL" && typeof newEmail === "undefined") {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "`newEmail` is required when `requestType` === 'VERIFY_AND_CHANGE_EMAIL'"));
        }
        return this.invokeRequestHandler(this.getAuthUrlBuilder(), FIREBASE_AUTH_GET_OOB_CODE, request).then((response) => {
          return response.oobLink;
        });
      }
      getOAuthIdpConfig(providerId) {
        if (!auth_config_1.OIDCConfig.isProviderId(providerId)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID));
        }
        return this.invokeRequestHandler(this.getProjectConfigUrlBuilder(), GET_OAUTH_IDP_CONFIG, {}, { providerId });
      }
      listOAuthIdpConfigs(maxResults = MAX_LIST_PROVIDER_CONFIGURATION_PAGE_SIZE, pageToken) {
        const request = {
          pageSize: maxResults
        };
        if (typeof pageToken !== "undefined") {
          request.pageToken = pageToken;
        }
        return this.invokeRequestHandler(this.getProjectConfigUrlBuilder(), LIST_OAUTH_IDP_CONFIGS, request).then((response) => {
          if (!response.oauthIdpConfigs) {
            response.oauthIdpConfigs = [];
            delete response.nextPageToken;
          }
          return response;
        });
      }
      deleteOAuthIdpConfig(providerId) {
        if (!auth_config_1.OIDCConfig.isProviderId(providerId)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID));
        }
        return this.invokeRequestHandler(this.getProjectConfigUrlBuilder(), DELETE_OAUTH_IDP_CONFIG, {}, { providerId }).then(() => {
        });
      }
      createOAuthIdpConfig(options) {
        let request;
        try {
          request = auth_config_1.OIDCConfig.buildServerRequest(options) || {};
        } catch (e) {
          return Promise.reject(e);
        }
        const providerId = options.providerId;
        return this.invokeRequestHandler(this.getProjectConfigUrlBuilder(), CREATE_OAUTH_IDP_CONFIG, request, { providerId }).then((response) => {
          if (!auth_config_1.OIDCConfig.getProviderIdFromResourceName(response.name)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to create new OIDC provider configuration");
          }
          return response;
        });
      }
      updateOAuthIdpConfig(providerId, options) {
        if (!auth_config_1.OIDCConfig.isProviderId(providerId)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID));
        }
        let request;
        try {
          request = auth_config_1.OIDCConfig.buildServerRequest(options, true) || {};
        } catch (e) {
          return Promise.reject(e);
        }
        const updateMask = utils.generateUpdateMask(request);
        return this.invokeRequestHandler(this.getProjectConfigUrlBuilder(), UPDATE_OAUTH_IDP_CONFIG, request, { providerId, updateMask: updateMask.join(",") }).then((response) => {
          if (!auth_config_1.OIDCConfig.getProviderIdFromResourceName(response.name)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to update OIDC provider configuration");
          }
          return response;
        });
      }
      getInboundSamlConfig(providerId) {
        if (!auth_config_1.SAMLConfig.isProviderId(providerId)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID));
        }
        return this.invokeRequestHandler(this.getProjectConfigUrlBuilder(), GET_INBOUND_SAML_CONFIG, {}, { providerId });
      }
      listInboundSamlConfigs(maxResults = MAX_LIST_PROVIDER_CONFIGURATION_PAGE_SIZE, pageToken) {
        const request = {
          pageSize: maxResults
        };
        if (typeof pageToken !== "undefined") {
          request.pageToken = pageToken;
        }
        return this.invokeRequestHandler(this.getProjectConfigUrlBuilder(), LIST_INBOUND_SAML_CONFIGS, request).then((response) => {
          if (!response.inboundSamlConfigs) {
            response.inboundSamlConfigs = [];
            delete response.nextPageToken;
          }
          return response;
        });
      }
      deleteInboundSamlConfig(providerId) {
        if (!auth_config_1.SAMLConfig.isProviderId(providerId)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID));
        }
        return this.invokeRequestHandler(this.getProjectConfigUrlBuilder(), DELETE_INBOUND_SAML_CONFIG, {}, { providerId }).then(() => {
        });
      }
      createInboundSamlConfig(options) {
        let request;
        try {
          request = auth_config_1.SAMLConfig.buildServerRequest(options) || {};
        } catch (e) {
          return Promise.reject(e);
        }
        const providerId = options.providerId;
        return this.invokeRequestHandler(this.getProjectConfigUrlBuilder(), CREATE_INBOUND_SAML_CONFIG, request, { providerId }).then((response) => {
          if (!auth_config_1.SAMLConfig.getProviderIdFromResourceName(response.name)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to create new SAML provider configuration");
          }
          return response;
        });
      }
      updateInboundSamlConfig(providerId, options) {
        if (!auth_config_1.SAMLConfig.isProviderId(providerId)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID));
        }
        let request;
        try {
          request = auth_config_1.SAMLConfig.buildServerRequest(options, true) || {};
        } catch (e) {
          return Promise.reject(e);
        }
        const updateMask = utils.generateUpdateMask(request);
        return this.invokeRequestHandler(this.getProjectConfigUrlBuilder(), UPDATE_INBOUND_SAML_CONFIG, request, { providerId, updateMask: updateMask.join(",") }).then((response) => {
          if (!auth_config_1.SAMLConfig.getProviderIdFromResourceName(response.name)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to update SAML provider configuration");
          }
          return response;
        });
      }
      invokeRequestHandler(urlBuilder, apiSettings, requestData, additionalResourceParams) {
        return urlBuilder.getUrl(apiSettings.getEndpoint(), additionalResourceParams).then((url) => {
          if (requestData) {
            const requestValidator = apiSettings.getRequestValidator();
            requestValidator(requestData);
          }
          const req = {
            method: apiSettings.getHttpMethod(),
            url,
            headers: FIREBASE_AUTH_HEADER,
            data: requestData,
            timeout: FIREBASE_AUTH_TIMEOUT
          };
          return this.httpClient.send(req);
        }).then((response) => {
          const responseValidator = apiSettings.getResponseValidator();
          responseValidator(response.data);
          return response.data;
        }).catch((err) => {
          if (err instanceof api_request_1.HttpError) {
            const error = err.response.data;
            const errorCode = AbstractAuthRequestHandler.getErrorCode(error);
            if (!errorCode) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "Error returned from server: " + error + ". Additionally, an internal error occurred while attempting to extract the errorcode from the error.");
            }
            throw error_1.FirebaseAuthError.fromServerError(errorCode, void 0, error);
          }
          throw err;
        });
      }
      getAuthUrlBuilder() {
        if (!this.authUrlBuilder) {
          this.authUrlBuilder = this.newAuthUrlBuilder();
        }
        return this.authUrlBuilder;
      }
      getProjectConfigUrlBuilder() {
        if (!this.projectConfigUrlBuilder) {
          this.projectConfigUrlBuilder = this.newProjectConfigUrlBuilder();
        }
        return this.projectConfigUrlBuilder;
      }
    };
    exports.AbstractAuthRequestHandler = AbstractAuthRequestHandler;
    var GET_PROJECT_CONFIG = new api_request_1.ApiSettings("/config", "GET").setResponseValidator((response) => {
      if (!validator.isNonEmptyString(response.name)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to get project config");
      }
    });
    var UPDATE_PROJECT_CONFIG = new api_request_1.ApiSettings("/config?updateMask={updateMask}", "PATCH").setResponseValidator((response) => {
      if (!validator.isNonEmptyString(response.name)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to update project config");
      }
    });
    var GET_TENANT = new api_request_1.ApiSettings("/tenants/{tenantId}", "GET").setResponseValidator((response) => {
      if (!validator.isNonEmptyString(response.name)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to get tenant");
      }
    });
    var DELETE_TENANT = new api_request_1.ApiSettings("/tenants/{tenantId}", "DELETE");
    var UPDATE_TENANT = new api_request_1.ApiSettings("/tenants/{tenantId}?updateMask={updateMask}", "PATCH").setResponseValidator((response) => {
      if (!validator.isNonEmptyString(response.name) || !tenant_1.Tenant.getTenantIdFromResourceName(response.name)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to update tenant");
      }
    });
    var LIST_TENANTS = new api_request_1.ApiSettings("/tenants", "GET").setRequestValidator((request) => {
      if (typeof request.pageToken !== "undefined" && !validator.isNonEmptyString(request.pageToken)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PAGE_TOKEN);
      }
      if (!validator.isNumber(request.pageSize) || request.pageSize <= 0 || request.pageSize > MAX_LIST_TENANT_PAGE_SIZE) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `Required "maxResults" must be a positive non-zero number that does not exceed the allowed ${MAX_LIST_TENANT_PAGE_SIZE}.`);
      }
    });
    var CREATE_TENANT = new api_request_1.ApiSettings("/tenants", "POST").setResponseValidator((response) => {
      if (!validator.isNonEmptyString(response.name) || !tenant_1.Tenant.getTenantIdFromResourceName(response.name)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Unable to create new tenant");
      }
    });
    var AuthRequestHandler = class extends AbstractAuthRequestHandler {
      constructor(app) {
        super(app);
        this.authResourceUrlBuilder = new AuthResourceUrlBuilder(app, "v2");
      }
      newAuthUrlBuilder() {
        return new AuthResourceUrlBuilder(this.app, "v1");
      }
      newProjectConfigUrlBuilder() {
        return new AuthResourceUrlBuilder(this.app, "v2");
      }
      getProjectConfig() {
        return this.invokeRequestHandler(this.authResourceUrlBuilder, GET_PROJECT_CONFIG, {}, {}).then((response) => {
          return response;
        });
      }
      updateProjectConfig(options) {
        try {
          const request = project_config_1.ProjectConfig.buildServerRequest(options);
          const updateMask = utils.generateUpdateMask(request);
          return this.invokeRequestHandler(this.authResourceUrlBuilder, UPDATE_PROJECT_CONFIG, request, { updateMask: updateMask.join(",") }).then((response) => {
            return response;
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }
      getTenant(tenantId) {
        if (!validator.isNonEmptyString(tenantId)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_TENANT_ID));
        }
        return this.invokeRequestHandler(this.authResourceUrlBuilder, GET_TENANT, {}, { tenantId }).then((response) => {
          return response;
        });
      }
      listTenants(maxResults = MAX_LIST_TENANT_PAGE_SIZE, pageToken) {
        const request = {
          pageSize: maxResults,
          pageToken
        };
        if (typeof request.pageToken === "undefined") {
          delete request.pageToken;
        }
        return this.invokeRequestHandler(this.authResourceUrlBuilder, LIST_TENANTS, request).then((response) => {
          if (!response.tenants) {
            response.tenants = [];
            delete response.nextPageToken;
          }
          return response;
        });
      }
      deleteTenant(tenantId) {
        if (!validator.isNonEmptyString(tenantId)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_TENANT_ID));
        }
        return this.invokeRequestHandler(this.authResourceUrlBuilder, DELETE_TENANT, void 0, { tenantId }).then(() => {
        });
      }
      createTenant(tenantOptions) {
        try {
          const request = tenant_1.Tenant.buildServerRequest(tenantOptions, true);
          return this.invokeRequestHandler(this.authResourceUrlBuilder, CREATE_TENANT, request).then((response) => {
            return response;
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }
      updateTenant(tenantId, tenantOptions) {
        if (!validator.isNonEmptyString(tenantId)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_TENANT_ID));
        }
        try {
          const request = tenant_1.Tenant.buildServerRequest(tenantOptions, false);
          const updateMask = utils.generateUpdateMask(request, ["testPhoneNumbers"]);
          return this.invokeRequestHandler(this.authResourceUrlBuilder, UPDATE_TENANT, request, { tenantId, updateMask: updateMask.join(",") }).then((response) => {
            return response;
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }
    };
    exports.AuthRequestHandler = AuthRequestHandler;
    var TenantAwareAuthRequestHandler = class extends AbstractAuthRequestHandler {
      constructor(app, tenantId) {
        super(app);
        this.tenantId = tenantId;
      }
      newAuthUrlBuilder() {
        return new TenantAwareAuthResourceUrlBuilder(this.app, "v1", this.tenantId);
      }
      newProjectConfigUrlBuilder() {
        return new TenantAwareAuthResourceUrlBuilder(this.app, "v2", this.tenantId);
      }
      uploadAccount(users, options) {
        users.forEach((user, index) => {
          if (validator.isNonEmptyString(user.tenantId) && user.tenantId !== this.tenantId) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.MISMATCHING_TENANT_ID, `UserRecord of index "${index}" has mismatching tenant ID "${user.tenantId}"`);
          }
        });
        return super.uploadAccount(users, options);
      }
    };
    exports.TenantAwareAuthRequestHandler = TenantAwareAuthRequestHandler;
    function emulatorHost() {
      return process.env.FIREBASE_AUTH_EMULATOR_HOST;
    }
    function useEmulator() {
      return !!emulatorHost();
    }
    exports.useEmulator = useEmulator;
  }
});

// node_modules/firebase-admin/lib/utils/crypto-signer.js
var require_crypto_signer = __commonJS({
  "node_modules/firebase-admin/lib/utils/crypto-signer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CryptoSignerErrorCode = exports.CryptoSignerError = exports.cryptoSignerFromApp = exports.IAMSigner = exports.ServiceAccountSigner = void 0;
    var credential_internal_1 = require_credential_internal();
    var api_request_1 = require_api_request();
    var validator = require_validator();
    var ALGORITHM_RS256 = "RS256";
    var ServiceAccountSigner = class {
      constructor(credential) {
        this.credential = credential;
        this.algorithm = ALGORITHM_RS256;
        if (!credential) {
          throw new CryptoSignerError({
            code: CryptoSignerErrorCode.INVALID_CREDENTIAL,
            message: "INTERNAL ASSERT: Must provide a service account credential to initialize ServiceAccountSigner."
          });
        }
      }
      sign(buffer) {
        const crypto = require_crypto();
        const sign = crypto.createSign("RSA-SHA256");
        sign.update(buffer);
        return Promise.resolve(sign.sign(this.credential.privateKey));
      }
      getAccountId() {
        return Promise.resolve(this.credential.clientEmail);
      }
    };
    exports.ServiceAccountSigner = ServiceAccountSigner;
    var IAMSigner = class {
      constructor(httpClient, serviceAccountId) {
        this.algorithm = ALGORITHM_RS256;
        if (!httpClient) {
          throw new CryptoSignerError({
            code: CryptoSignerErrorCode.INVALID_ARGUMENT,
            message: "INTERNAL ASSERT: Must provide a HTTP client to initialize IAMSigner."
          });
        }
        if (typeof serviceAccountId !== "undefined" && !validator.isNonEmptyString(serviceAccountId)) {
          throw new CryptoSignerError({
            code: CryptoSignerErrorCode.INVALID_ARGUMENT,
            message: "INTERNAL ASSERT: Service account ID must be undefined or a non-empty string."
          });
        }
        this.httpClient = httpClient;
        this.serviceAccountId = serviceAccountId;
      }
      sign(buffer) {
        return this.getAccountId().then((serviceAccount) => {
          const request = {
            method: "POST",
            url: `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${serviceAccount}:signBlob`,
            data: { payload: buffer.toString("base64") }
          };
          return this.httpClient.send(request);
        }).then((response) => {
          return Buffer.from(response.data.signedBlob, "base64");
        }).catch((err) => {
          if (err instanceof api_request_1.HttpError) {
            throw new CryptoSignerError({
              code: CryptoSignerErrorCode.SERVER_ERROR,
              message: err.message,
              cause: err
            });
          }
          throw err;
        });
      }
      getAccountId() {
        if (validator.isNonEmptyString(this.serviceAccountId)) {
          return Promise.resolve(this.serviceAccountId);
        }
        const request = {
          method: "GET",
          url: "http://metadata/computeMetadata/v1/instance/service-accounts/default/email",
          headers: {
            "Metadata-Flavor": "Google"
          }
        };
        const client = new api_request_1.HttpClient();
        return client.send(request).then((response) => {
          if (!response.text) {
            throw new CryptoSignerError({
              code: CryptoSignerErrorCode.INTERNAL_ERROR,
              message: "HTTP Response missing payload"
            });
          }
          this.serviceAccountId = response.text;
          return response.text;
        }).catch((err) => {
          throw new CryptoSignerError({
            code: CryptoSignerErrorCode.INVALID_CREDENTIAL,
            message: `Failed to determine service account. Make sure to initialize the SDK with a service account credential. Alternatively specify a service account with iam.serviceAccounts.signBlob permission. Original error: ${err}`
          });
        });
      }
    };
    exports.IAMSigner = IAMSigner;
    function cryptoSignerFromApp(app) {
      const credential = app.options.credential;
      if (credential instanceof credential_internal_1.ServiceAccountCredential) {
        return new ServiceAccountSigner(credential);
      }
      return new IAMSigner(new api_request_1.AuthorizedHttpClient(app), app.options.serviceAccountId);
    }
    exports.cryptoSignerFromApp = cryptoSignerFromApp;
    var CryptoSignerError = class extends Error {
      constructor(errorInfo) {
        super(errorInfo.message);
        this.errorInfo = errorInfo;
        this.__proto__ = CryptoSignerError.prototype;
      }
      get code() {
        return this.errorInfo.code;
      }
      get message() {
        return this.errorInfo.message;
      }
      get cause() {
        return this.errorInfo.cause;
      }
    };
    exports.CryptoSignerError = CryptoSignerError;
    var CryptoSignerErrorCode = class {
    };
    exports.CryptoSignerErrorCode = CryptoSignerErrorCode;
    CryptoSignerErrorCode.INVALID_ARGUMENT = "invalid-argument";
    CryptoSignerErrorCode.INTERNAL_ERROR = "internal-error";
    CryptoSignerErrorCode.INVALID_CREDENTIAL = "invalid-credential";
    CryptoSignerErrorCode.SERVER_ERROR = "server-error";
  }
});

// node_modules/firebase-admin/lib/auth/token-generator.js
var require_token_generator = __commonJS({
  "node_modules/firebase-admin/lib/auth/token-generator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handleCryptoSignerError = exports.FirebaseTokenGenerator = exports.EmulatedSigner = exports.BLACKLISTED_CLAIMS = void 0;
    var error_1 = require_error();
    var crypto_signer_1 = require_crypto_signer();
    var validator = require_validator();
    var utils_1 = require_utils();
    var ALGORITHM_NONE = "none";
    var ONE_HOUR_IN_SECONDS = 60 * 60;
    exports.BLACKLISTED_CLAIMS = [
      "acr",
      "amr",
      "at_hash",
      "aud",
      "auth_time",
      "azp",
      "cnf",
      "c_hash",
      "exp",
      "iat",
      "iss",
      "jti",
      "nbf",
      "nonce"
    ];
    var FIREBASE_AUDIENCE = "https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit";
    var EmulatedSigner = class {
      constructor() {
        this.algorithm = ALGORITHM_NONE;
      }
      sign(buffer) {
        return Promise.resolve(Buffer.from(""));
      }
      getAccountId() {
        return Promise.resolve("firebase-auth-emulator@example.com");
      }
    };
    exports.EmulatedSigner = EmulatedSigner;
    var FirebaseTokenGenerator = class {
      constructor(signer, tenantId) {
        this.tenantId = tenantId;
        if (!validator.isNonNullObject(signer)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CREDENTIAL, "INTERNAL ASSERT: Must provide a CryptoSigner to use FirebaseTokenGenerator.");
        }
        if (typeof this.tenantId !== "undefined" && !validator.isNonEmptyString(this.tenantId)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "`tenantId` argument must be a non-empty string.");
        }
        this.signer = signer;
      }
      createCustomToken(uid, developerClaims) {
        let errorMessage;
        if (!validator.isNonEmptyString(uid)) {
          errorMessage = "`uid` argument must be a non-empty string uid.";
        } else if (uid.length > 128) {
          errorMessage = "`uid` argument must a uid with less than or equal to 128 characters.";
        } else if (!this.isDeveloperClaimsValid_(developerClaims)) {
          errorMessage = "`developerClaims` argument must be a valid, non-null object containing the developer claims.";
        }
        if (errorMessage) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, errorMessage);
        }
        const claims = {};
        if (typeof developerClaims !== "undefined") {
          for (const key in developerClaims) {
            if (Object.prototype.hasOwnProperty.call(developerClaims, key)) {
              if (exports.BLACKLISTED_CLAIMS.indexOf(key) !== -1) {
                throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `Developer claim "${key}" is reserved and cannot be specified.`);
              }
              claims[key] = developerClaims[key];
            }
          }
        }
        return this.signer.getAccountId().then((account) => {
          const header = {
            alg: this.signer.algorithm,
            typ: "JWT"
          };
          const iat = Math.floor(Date.now() / 1e3);
          const body = {
            aud: FIREBASE_AUDIENCE,
            iat,
            exp: iat + ONE_HOUR_IN_SECONDS,
            iss: account,
            sub: account,
            uid
          };
          if (this.tenantId) {
            body.tenant_id = this.tenantId;
          }
          if (Object.keys(claims).length > 0) {
            body.claims = claims;
          }
          const token = `${this.encodeSegment(header)}.${this.encodeSegment(body)}`;
          const signPromise = this.signer.sign(Buffer.from(token));
          return Promise.all([token, signPromise]);
        }).then(([token, signature]) => {
          return `${token}.${this.encodeSegment(signature)}`;
        }).catch((err) => {
          throw handleCryptoSignerError(err);
        });
      }
      encodeSegment(segment) {
        const buffer = segment instanceof Buffer ? segment : Buffer.from(JSON.stringify(segment));
        return (0, utils_1.toWebSafeBase64)(buffer).replace(/=+$/, "");
      }
      isDeveloperClaimsValid_(developerClaims) {
        if (typeof developerClaims === "undefined") {
          return true;
        }
        return validator.isNonNullObject(developerClaims);
      }
    };
    exports.FirebaseTokenGenerator = FirebaseTokenGenerator;
    function handleCryptoSignerError(err) {
      if (!(err instanceof crypto_signer_1.CryptoSignerError)) {
        return err;
      }
      if (err.code === crypto_signer_1.CryptoSignerErrorCode.SERVER_ERROR && validator.isNonNullObject(err.cause)) {
        const httpError = err.cause;
        const errorResponse = httpError.response.data;
        if (validator.isNonNullObject(errorResponse) && errorResponse.error) {
          const errorCode = errorResponse.error.status;
          const description = "Please refer to https://firebase.google.com/docs/auth/admin/create-custom-tokens for more details on how to use and troubleshoot this feature.";
          const errorMsg = `${errorResponse.error.message}; ${description}`;
          return error_1.FirebaseAuthError.fromServerError(errorCode, errorMsg, errorResponse);
        }
        return new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "Error returned from server: " + errorResponse + ". Additionally, an internal error occurred while attempting to extract the errorcode from the error.");
      }
      return new error_1.FirebaseAuthError(mapToAuthClientErrorCode(err.code), err.message);
    }
    exports.handleCryptoSignerError = handleCryptoSignerError;
    function mapToAuthClientErrorCode(code) {
      switch (code) {
        case crypto_signer_1.CryptoSignerErrorCode.INVALID_CREDENTIAL:
          return error_1.AuthClientErrorCode.INVALID_CREDENTIAL;
        case crypto_signer_1.CryptoSignerErrorCode.INVALID_ARGUMENT:
          return error_1.AuthClientErrorCode.INVALID_ARGUMENT;
        default:
          return error_1.AuthClientErrorCode.INTERNAL_ERROR;
      }
    }
  }
});

// node_modules/jose/lib/help/consts.js
var require_consts = __commonJS({
  "node_modules/jose/lib/help/consts.js"(exports, module) {
    module.exports.KEYOBJECT = Symbol("KEYOBJECT");
    module.exports.PRIVATE_MEMBERS = Symbol("PRIVATE_MEMBERS");
    module.exports.PUBLIC_MEMBERS = Symbol("PUBLIC_MEMBERS");
    module.exports.THUMBPRINT_MATERIAL = Symbol("THUMBPRINT_MATERIAL");
    module.exports.JWK_MEMBERS = Symbol("JWK_MEMBERS");
    module.exports.KEY_MANAGEMENT_ENCRYPT = Symbol("KEY_MANAGEMENT_ENCRYPT");
    module.exports.KEY_MANAGEMENT_DECRYPT = Symbol("KEY_MANAGEMENT_DECRYPT");
    var USES_MAPPING = {
      sig: /* @__PURE__ */ new Set(["sign", "verify"]),
      enc: /* @__PURE__ */ new Set(["encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey"])
    };
    var OPS = /* @__PURE__ */ new Set([...USES_MAPPING.sig, ...USES_MAPPING.enc]);
    var USES = new Set(Object.keys(USES_MAPPING));
    module.exports.USES_MAPPING = USES_MAPPING;
    module.exports.OPS = OPS;
    module.exports.USES = USES;
  }
});

// node_modules/jose/lib/registry/ec_curves.js
var require_ec_curves = __commonJS({
  "node_modules/jose/lib/registry/ec_curves.js"(exports, module) {
    var { getCurves } = require_crypto();
    var curves = /* @__PURE__ */ new Set();
    if (getCurves().includes("prime256v1")) {
      curves.add("P-256");
    }
    if (getCurves().includes("secp256k1")) {
      curves.add("secp256k1");
    }
    if (getCurves().includes("secp384r1")) {
      curves.add("P-384");
    }
    if (getCurves().includes("secp521r1")) {
      curves.add("P-521");
    }
    module.exports = curves;
  }
});

// node_modules/jose/lib/registry/iv_lengths.js
var require_iv_lengths = __commonJS({
  "node_modules/jose/lib/registry/iv_lengths.js"(exports, module) {
    module.exports = /* @__PURE__ */ new Map([
      ["A128CBC-HS256", 128],
      ["A128GCM", 96],
      ["A128GCMKW", 96],
      ["A192CBC-HS384", 128],
      ["A192GCM", 96],
      ["A192GCMKW", 96],
      ["A256CBC-HS512", 128],
      ["A256GCM", 96],
      ["A256GCMKW", 96]
    ]);
  }
});

// node_modules/jose/lib/registry/jwa.js
var require_jwa = __commonJS({
  "node_modules/jose/lib/registry/jwa.js"(exports, module) {
    module.exports = {
      sign: /* @__PURE__ */ new Map(),
      verify: /* @__PURE__ */ new Map(),
      keyManagementEncrypt: /* @__PURE__ */ new Map(),
      keyManagementDecrypt: /* @__PURE__ */ new Map(),
      encrypt: /* @__PURE__ */ new Map(),
      decrypt: /* @__PURE__ */ new Map()
    };
  }
});

// node_modules/jose/lib/registry/jwk.js
var require_jwk = __commonJS({
  "node_modules/jose/lib/registry/jwk.js"(exports, module) {
    module.exports = {
      oct: {
        decrypt: {},
        deriveKey: {},
        encrypt: {},
        sign: {},
        unwrapKey: {},
        verify: {},
        wrapKey: {}
      },
      EC: {
        decrypt: {},
        deriveKey: {},
        encrypt: {},
        sign: {},
        unwrapKey: {},
        verify: {},
        wrapKey: {}
      },
      RSA: {
        decrypt: {},
        deriveKey: {},
        encrypt: {},
        sign: {},
        unwrapKey: {},
        verify: {},
        wrapKey: {}
      },
      OKP: {
        decrypt: {},
        deriveKey: {},
        encrypt: {},
        sign: {},
        unwrapKey: {},
        verify: {},
        wrapKey: {}
      }
    };
  }
});

// node_modules/jose/lib/registry/key_lengths.js
var require_key_lengths = __commonJS({
  "node_modules/jose/lib/registry/key_lengths.js"(exports, module) {
    module.exports = /* @__PURE__ */ new Map([
      ["A128CBC-HS256", 256],
      ["A128GCM", 128],
      ["A192CBC-HS384", 384],
      ["A192GCM", 192],
      ["A256CBC-HS512", 512],
      ["A256GCM", 256]
    ]);
  }
});

// node_modules/jose/lib/registry/okp_curves.js
var require_okp_curves = __commonJS({
  "node_modules/jose/lib/registry/okp_curves.js"(exports, module) {
    var curves = /* @__PURE__ */ new Set(["Ed25519"]);
    if (!("electron" in process.versions)) {
      curves.add("Ed448");
      curves.add("X25519");
      curves.add("X448");
    }
    module.exports = curves;
  }
});

// node_modules/jose/lib/registry/ecdh_derive_lengths.js
var require_ecdh_derive_lengths = __commonJS({
  "node_modules/jose/lib/registry/ecdh_derive_lengths.js"(exports, module) {
    module.exports = /* @__PURE__ */ new Map();
  }
});

// node_modules/jose/lib/registry/index.js
var require_registry = __commonJS({
  "node_modules/jose/lib/registry/index.js"(exports, module) {
    var EC_CURVES = require_ec_curves();
    var IVLENGTHS = require_iv_lengths();
    var JWA = require_jwa();
    var JWK = require_jwk();
    var KEYLENGTHS = require_key_lengths();
    var OKP_CURVES = require_okp_curves();
    var ECDH_DERIVE_LENGTHS = require_ecdh_derive_lengths();
    module.exports = {
      EC_CURVES,
      ECDH_DERIVE_LENGTHS,
      IVLENGTHS,
      JWA,
      JWK,
      KEYLENGTHS,
      OKP_CURVES
    };
  }
});

// node_modules/jose/lib/help/generate_iv.js
var require_generate_iv = __commonJS({
  "node_modules/jose/lib/help/generate_iv.js"(exports, module) {
    var { randomBytes } = require_crypto();
    var { IVLENGTHS } = require_registry();
    module.exports = (alg) => randomBytes(IVLENGTHS.get(alg) / 8);
  }
});

// node_modules/jose/lib/help/base64url.js
var require_base64url = __commonJS({
  "node_modules/jose/lib/help/base64url.js"(exports, module) {
    var encode;
    var encodeBuffer;
    if (Buffer.isEncoding("base64url")) {
      encode = (input, encoding = "utf8") => Buffer.from(input, encoding).toString("base64url");
      encodeBuffer = (buf) => buf.toString("base64url");
    } else {
      const fromBase64 = (base64) => base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      encode = (input, encoding = "utf8") => fromBase64(Buffer.from(input, encoding).toString("base64"));
      encodeBuffer = (buf) => fromBase64(buf.toString("base64"));
    }
    var decodeToBuffer = (input) => {
      return Buffer.from(input, "base64");
    };
    var decode = (input, encoding = "utf8") => {
      return decodeToBuffer(input).toString(encoding);
    };
    var b64uJSON = {
      encode: (input) => {
        return encode(JSON.stringify(input));
      },
      decode: (input, encoding = "utf8") => {
        return JSON.parse(decode(input, encoding));
      }
    };
    b64uJSON.decode.try = (input, encoding = "utf8") => {
      try {
        return b64uJSON.decode(input, encoding);
      } catch (err) {
        return decode(input, encoding);
      }
    };
    var bnToBuf = (bn) => {
      let hex = BigInt(bn).toString(16);
      if (hex.length % 2) {
        hex = `0${hex}`;
      }
      const len = hex.length / 2;
      const u8 = new Uint8Array(len);
      let i = 0;
      let j = 0;
      while (i < len) {
        u8[i] = parseInt(hex.slice(j, j + 2), 16);
        i += 1;
        j += 2;
      }
      return u8;
    };
    var encodeBigInt = (bn) => encodeBuffer(Buffer.from(bnToBuf(bn)));
    module.exports.decode = decode;
    module.exports.decodeToBuffer = decodeToBuffer;
    module.exports.encode = encode;
    module.exports.encodeBuffer = encodeBuffer;
    module.exports.JSON = b64uJSON;
    module.exports.encodeBigInt = encodeBigInt;
  }
});

// node_modules/jose/lib/errors.js
var require_errors = __commonJS({
  "node_modules/jose/lib/errors.js"(exports, module) {
    var CODES = {
      JOSEAlgNotWhitelisted: "ERR_JOSE_ALG_NOT_WHITELISTED",
      JOSECritNotUnderstood: "ERR_JOSE_CRIT_NOT_UNDERSTOOD",
      JOSEInvalidEncoding: "ERR_JOSE_INVALID_ENCODING",
      JOSEMultiError: "ERR_JOSE_MULTIPLE_ERRORS",
      JOSENotSupported: "ERR_JOSE_NOT_SUPPORTED",
      JWEDecryptionFailed: "ERR_JWE_DECRYPTION_FAILED",
      JWEInvalid: "ERR_JWE_INVALID",
      JWKImportFailed: "ERR_JWK_IMPORT_FAILED",
      JWKInvalid: "ERR_JWK_INVALID",
      JWKKeySupport: "ERR_JWK_KEY_SUPPORT",
      JWKSNoMatchingKey: "ERR_JWKS_NO_MATCHING_KEY",
      JWSInvalid: "ERR_JWS_INVALID",
      JWSVerificationFailed: "ERR_JWS_VERIFICATION_FAILED",
      JWTClaimInvalid: "ERR_JWT_CLAIM_INVALID",
      JWTExpired: "ERR_JWT_EXPIRED",
      JWTMalformed: "ERR_JWT_MALFORMED"
    };
    var DEFAULT_MESSAGES = {
      JWEDecryptionFailed: "decryption operation failed",
      JWEInvalid: "JWE invalid",
      JWKSNoMatchingKey: "no matching key found in the KeyStore",
      JWSInvalid: "JWS invalid",
      JWSVerificationFailed: "signature verification failed"
    };
    var JOSEError = class extends Error {
      constructor(message) {
        super(message);
        if (message === void 0) {
          this.message = DEFAULT_MESSAGES[this.constructor.name];
        }
        this.name = this.constructor.name;
        this.code = CODES[this.constructor.name];
        Error.captureStackTrace(this, this.constructor);
      }
    };
    var isMulti = (e) => e instanceof JOSEMultiError;
    var JOSEMultiError = class extends JOSEError {
      constructor(errors) {
        super();
        let i;
        while ((i = errors.findIndex(isMulti)) && i !== -1) {
          errors.splice(i, 1, ...errors[i]);
        }
        Object.defineProperty(this, "errors", { value: errors });
      }
      *[Symbol.iterator]() {
        for (const error of this.errors) {
          yield error;
        }
      }
    };
    module.exports.JOSEError = JOSEError;
    module.exports.JOSEAlgNotWhitelisted = class JOSEAlgNotWhitelisted extends JOSEError {
    };
    module.exports.JOSECritNotUnderstood = class JOSECritNotUnderstood extends JOSEError {
    };
    module.exports.JOSEInvalidEncoding = class JOSEInvalidEncoding extends JOSEError {
    };
    module.exports.JOSEMultiError = JOSEMultiError;
    module.exports.JOSENotSupported = class JOSENotSupported extends JOSEError {
    };
    module.exports.JWEDecryptionFailed = class JWEDecryptionFailed extends JOSEError {
    };
    module.exports.JWEInvalid = class JWEInvalid extends JOSEError {
    };
    module.exports.JWKImportFailed = class JWKImportFailed extends JOSEError {
    };
    module.exports.JWKInvalid = class JWKInvalid extends JOSEError {
    };
    module.exports.JWKKeySupport = class JWKKeySupport extends JOSEError {
    };
    module.exports.JWKSNoMatchingKey = class JWKSNoMatchingKey extends JOSEError {
    };
    module.exports.JWSInvalid = class JWSInvalid extends JOSEError {
    };
    module.exports.JWSVerificationFailed = class JWSVerificationFailed extends JOSEError {
    };
    var JWTClaimInvalid = class extends JOSEError {
      constructor(message, claim = "unspecified", reason = "unspecified") {
        super(message);
        this.claim = claim;
        this.reason = reason;
      }
    };
    module.exports.JWTClaimInvalid = JWTClaimInvalid;
    module.exports.JWTExpired = class JWTExpired extends JWTClaimInvalid {
    };
    module.exports.JWTMalformed = class JWTMalformed extends JOSEError {
    };
  }
});

// node_modules/jose/lib/help/runtime_support.js
var require_runtime_support = __commonJS({
  "node_modules/jose/lib/help/runtime_support.js"(exports, module) {
    var { diffieHellman, KeyObject, sign, verify } = require_crypto();
    var [major, minor] = process.version.substr(1).split(".").map((x) => parseInt(x, 10));
    module.exports = {
      oaepHashSupported: major > 12 || major === 12 && minor >= 9,
      keyObjectSupported: !!KeyObject && major >= 12,
      edDSASupported: !!sign && !!verify,
      dsaEncodingSupported: major > 13 || major === 13 && minor >= 2 || major === 12 && minor >= 16,
      improvedDH: !!diffieHellman
    };
  }
});

// node_modules/jose/lib/help/is_object.js
var require_is_object = __commonJS({
  "node_modules/jose/lib/help/is_object.js"(exports, module) {
    module.exports = (a) => !!a && a.constructor === Object;
  }
});

// node_modules/@panva/asn1.js/lib/asn1/base/reporter.js
var require_reporter = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1/base/reporter.js"(exports) {
    var { inherits } = require_util();
    function Reporter(options) {
      this._reporterState = {
        obj: null,
        path: [],
        options: options || {},
        errors: []
      };
    }
    Reporter.prototype.isError = function isError(obj) {
      return obj instanceof ReporterError;
    };
    Reporter.prototype.save = function save() {
      const state = this._reporterState;
      return { obj: state.obj, pathLen: state.path.length };
    };
    Reporter.prototype.restore = function restore(data) {
      const state = this._reporterState;
      state.obj = data.obj;
      state.path = state.path.slice(0, data.pathLen);
    };
    Reporter.prototype.enterKey = function enterKey(key) {
      return this._reporterState.path.push(key);
    };
    Reporter.prototype.exitKey = function exitKey(index) {
      const state = this._reporterState;
      state.path = state.path.slice(0, index - 1);
    };
    Reporter.prototype.leaveKey = function leaveKey(index, key, value) {
      const state = this._reporterState;
      this.exitKey(index);
      if (state.obj !== null) {
        state.obj[key] = value;
      }
    };
    Reporter.prototype.path = function path() {
      return this._reporterState.path.join("/");
    };
    Reporter.prototype.enterObject = function enterObject() {
      const state = this._reporterState;
      const prev = state.obj;
      state.obj = {};
      return prev;
    };
    Reporter.prototype.leaveObject = function leaveObject(prev) {
      const state = this._reporterState;
      const now = state.obj;
      state.obj = prev;
      return now;
    };
    Reporter.prototype.error = function error(msg) {
      let err;
      const state = this._reporterState;
      const inherited = msg instanceof ReporterError;
      if (inherited) {
        err = msg;
      } else {
        err = new ReporterError(state.path.map(function(elem) {
          return `[${JSON.stringify(elem)}]`;
        }).join(""), msg.message || msg, msg.stack);
      }
      if (!state.options.partial) {
        throw err;
      }
      if (!inherited) {
        state.errors.push(err);
      }
      return err;
    };
    Reporter.prototype.wrapResult = function wrapResult(result) {
      const state = this._reporterState;
      if (!state.options.partial) {
        return result;
      }
      return {
        result: this.isError(result) ? null : result,
        errors: state.errors
      };
    };
    function ReporterError(path, msg) {
      this.path = path;
      this.rethrow(msg);
    }
    inherits(ReporterError, Error);
    ReporterError.prototype.rethrow = function rethrow(msg) {
      this.message = `${msg} at: ${this.path || "(shallow)"}`;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ReporterError);
      }
      if (!this.stack) {
        try {
          throw new Error(this.message);
        } catch (e) {
          this.stack = e.stack;
        }
      }
      return this;
    };
    exports.Reporter = Reporter;
  }
});

// node_modules/@panva/asn1.js/lib/asn1/base/buffer.js
var require_buffer = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1/base/buffer.js"(exports, module) {
    var { inherits } = require_util();
    var { Reporter } = require_reporter();
    function DecoderBuffer(base, options) {
      Reporter.call(this, options);
      if (!Buffer.isBuffer(base)) {
        this.error("Input not Buffer");
        return;
      }
      this.base = base;
      this.offset = 0;
      this.length = base.length;
    }
    inherits(DecoderBuffer, Reporter);
    DecoderBuffer.isDecoderBuffer = function isDecoderBuffer(data) {
      if (data instanceof DecoderBuffer) {
        return true;
      }
      const isCompatible = typeof data === "object" && Buffer.isBuffer(data.base) && data.constructor.name === "DecoderBuffer" && typeof data.offset === "number" && typeof data.length === "number" && typeof data.save === "function" && typeof data.restore === "function" && typeof data.isEmpty === "function" && typeof data.readUInt8 === "function" && typeof data.skip === "function" && typeof data.raw === "function";
      return isCompatible;
    };
    DecoderBuffer.prototype.save = function save() {
      return { offset: this.offset, reporter: Reporter.prototype.save.call(this) };
    };
    DecoderBuffer.prototype.restore = function restore(save) {
      const res = new DecoderBuffer(this.base);
      res.offset = save.offset;
      res.length = this.offset;
      this.offset = save.offset;
      Reporter.prototype.restore.call(this, save.reporter);
      return res;
    };
    DecoderBuffer.prototype.isEmpty = function isEmpty() {
      return this.offset === this.length;
    };
    DecoderBuffer.prototype.readUInt8 = function readUInt8(fail) {
      if (this.offset + 1 <= this.length) {
        return this.base.readUInt8(this.offset++, true);
      } else {
        return this.error(fail || "DecoderBuffer overrun");
      }
    };
    DecoderBuffer.prototype.skip = function skip(bytes, fail) {
      if (!(this.offset + bytes <= this.length)) {
        return this.error(fail || "DecoderBuffer overrun");
      }
      const res = new DecoderBuffer(this.base);
      res._reporterState = this._reporterState;
      res.offset = this.offset;
      res.length = this.offset + bytes;
      this.offset += bytes;
      return res;
    };
    DecoderBuffer.prototype.raw = function raw(save) {
      return this.base.slice(save ? save.offset : this.offset, this.length);
    };
    function EncoderBuffer(value, reporter) {
      if (Array.isArray(value)) {
        this.length = 0;
        this.value = value.map(function(item) {
          if (!EncoderBuffer.isEncoderBuffer(item)) {
            item = new EncoderBuffer(item, reporter);
          }
          this.length += item.length;
          return item;
        }, this);
      } else if (typeof value === "number") {
        if (!(value >= 0 && value <= 255)) {
          return reporter.error("non-byte EncoderBuffer value");
        }
        this.value = value;
        this.length = 1;
      } else if (typeof value === "string") {
        this.value = value;
        this.length = Buffer.byteLength(value);
      } else if (Buffer.isBuffer(value)) {
        this.value = value;
        this.length = value.length;
      } else {
        return reporter.error(`Unsupported type: ${typeof value}`);
      }
    }
    EncoderBuffer.isEncoderBuffer = function isEncoderBuffer(data) {
      if (data instanceof EncoderBuffer) {
        return true;
      }
      const isCompatible = typeof data === "object" && data.constructor.name === "EncoderBuffer" && typeof data.length === "number" && typeof data.join === "function";
      return isCompatible;
    };
    EncoderBuffer.prototype.join = function join(out, offset) {
      if (!out) {
        out = Buffer.alloc(this.length);
      }
      if (!offset) {
        offset = 0;
      }
      if (this.length === 0) {
        return out;
      }
      if (Array.isArray(this.value)) {
        this.value.forEach(function(item) {
          item.join(out, offset);
          offset += item.length;
        });
      } else {
        if (typeof this.value === "number") {
          out[offset] = this.value;
        } else if (typeof this.value === "string") {
          out.write(this.value, offset);
        } else if (Buffer.isBuffer(this.value)) {
          this.value.copy(out, offset);
        }
        offset += this.length;
      }
      return out;
    };
    module.exports = {
      DecoderBuffer,
      EncoderBuffer
    };
  }
});

// node_modules/@panva/asn1.js/lib/asn1/base/node.js
var require_node = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1/base/node.js"(exports, module) {
    var { strict: assert } = require_assert();
    var { Reporter } = require_reporter();
    var { DecoderBuffer, EncoderBuffer } = require_buffer();
    var tags = [
      "seq",
      "seqof",
      "set",
      "setof",
      "objid",
      "bool",
      "gentime",
      "utctime",
      "null_",
      "enum",
      "int",
      "objDesc",
      "bitstr",
      "bmpstr",
      "charstr",
      "genstr",
      "graphstr",
      "ia5str",
      "iso646str",
      "numstr",
      "octstr",
      "printstr",
      "t61str",
      "unistr",
      "utf8str",
      "videostr"
    ];
    var methods = [
      "key",
      "obj",
      "use",
      "optional",
      "explicit",
      "implicit",
      "def",
      "choice",
      "any",
      "contains"
    ].concat(tags);
    var overrided = [
      "_peekTag",
      "_decodeTag",
      "_use",
      "_decodeStr",
      "_decodeObjid",
      "_decodeTime",
      "_decodeNull",
      "_decodeInt",
      "_decodeBool",
      "_decodeList",
      "_encodeComposite",
      "_encodeStr",
      "_encodeObjid",
      "_encodeTime",
      "_encodeNull",
      "_encodeInt",
      "_encodeBool"
    ];
    function Node(enc, parent, name) {
      const state = {};
      this._baseState = state;
      state.name = name;
      state.enc = enc;
      state.parent = parent || null;
      state.children = null;
      state.tag = null;
      state.args = null;
      state.reverseArgs = null;
      state.choice = null;
      state.optional = false;
      state.any = false;
      state.obj = false;
      state.use = null;
      state.useDecoder = null;
      state.key = null;
      state.default = null;
      state.explicit = null;
      state.implicit = null;
      state.contains = null;
      if (!state.parent) {
        state.children = [];
        this._wrap();
      }
    }
    var stateProps = [
      "enc",
      "parent",
      "children",
      "tag",
      "args",
      "reverseArgs",
      "choice",
      "optional",
      "any",
      "obj",
      "use",
      "alteredUse",
      "key",
      "default",
      "explicit",
      "implicit",
      "contains"
    ];
    Node.prototype.clone = function clone() {
      const state = this._baseState;
      const cstate = {};
      stateProps.forEach(function(prop) {
        cstate[prop] = state[prop];
      });
      const res = new this.constructor(cstate.parent);
      res._baseState = cstate;
      return res;
    };
    Node.prototype._wrap = function wrap() {
      const state = this._baseState;
      methods.forEach(function(method) {
        this[method] = function _wrappedMethod() {
          const clone = new this.constructor(this);
          state.children.push(clone);
          return clone[method].apply(clone, arguments);
        };
      }, this);
    };
    Node.prototype._init = function init(body) {
      const state = this._baseState;
      assert(state.parent === null);
      body.call(this);
      state.children = state.children.filter(function(child) {
        return child._baseState.parent === this;
      }, this);
      assert.equal(state.children.length, 1, "Root node can have only one child");
    };
    Node.prototype._useArgs = function useArgs(args) {
      const state = this._baseState;
      const children = args.filter(function(arg) {
        return arg instanceof this.constructor;
      }, this);
      args = args.filter(function(arg) {
        return !(arg instanceof this.constructor);
      }, this);
      if (children.length !== 0) {
        assert(state.children === null);
        state.children = children;
        children.forEach(function(child) {
          child._baseState.parent = this;
        }, this);
      }
      if (args.length !== 0) {
        assert(state.args === null);
        state.args = args;
        state.reverseArgs = args.map(function(arg) {
          if (typeof arg !== "object" || arg.constructor !== Object) {
            return arg;
          }
          const res = {};
          Object.keys(arg).forEach(function(key) {
            if (key == (key | 0)) {
              key |= 0;
            }
            const value = arg[key];
            res[value] = key;
          });
          return res;
        });
      }
    };
    overrided.forEach(function(method) {
      Node.prototype[method] = function _overrided() {
        const state = this._baseState;
        throw new Error(`${method} not implemented for encoding: ${state.enc}`);
      };
    });
    tags.forEach(function(tag) {
      Node.prototype[tag] = function _tagMethod() {
        const state = this._baseState;
        const args = Array.prototype.slice.call(arguments);
        assert(state.tag === null);
        state.tag = tag;
        this._useArgs(args);
        return this;
      };
    });
    Node.prototype.use = function use(item) {
      assert(item);
      const state = this._baseState;
      assert(state.use === null);
      state.use = item;
      return this;
    };
    Node.prototype.optional = function optional() {
      const state = this._baseState;
      state.optional = true;
      return this;
    };
    Node.prototype.def = function def(val) {
      const state = this._baseState;
      assert(state.default === null);
      state.default = val;
      state.optional = true;
      return this;
    };
    Node.prototype.explicit = function explicit(num) {
      const state = this._baseState;
      assert(state.explicit === null && state.implicit === null);
      state.explicit = num;
      return this;
    };
    Node.prototype.implicit = function implicit(num) {
      const state = this._baseState;
      assert(state.explicit === null && state.implicit === null);
      state.implicit = num;
      return this;
    };
    Node.prototype.obj = function obj() {
      const state = this._baseState;
      const args = Array.prototype.slice.call(arguments);
      state.obj = true;
      if (args.length !== 0) {
        this._useArgs(args);
      }
      return this;
    };
    Node.prototype.key = function key(newKey) {
      const state = this._baseState;
      assert(state.key === null);
      state.key = newKey;
      return this;
    };
    Node.prototype.any = function any() {
      const state = this._baseState;
      state.any = true;
      return this;
    };
    Node.prototype.choice = function choice(obj) {
      const state = this._baseState;
      assert(state.choice === null);
      state.choice = obj;
      this._useArgs(Object.keys(obj).map(function(key) {
        return obj[key];
      }));
      return this;
    };
    Node.prototype.contains = function contains(item) {
      const state = this._baseState;
      assert(state.use === null);
      state.contains = item;
      return this;
    };
    Node.prototype._decode = function decode(input, options) {
      const state = this._baseState;
      if (state.parent === null) {
        return input.wrapResult(state.children[0]._decode(input, options));
      }
      let result = state.default;
      let present = true;
      let prevKey = null;
      if (state.key !== null) {
        prevKey = input.enterKey(state.key);
      }
      if (state.optional) {
        let tag = null;
        if (state.explicit !== null) {
          tag = state.explicit;
        } else if (state.implicit !== null) {
          tag = state.implicit;
        } else if (state.tag !== null) {
          tag = state.tag;
        }
        if (tag === null && !state.any) {
          const save = input.save();
          try {
            if (state.choice === null) {
              this._decodeGeneric(state.tag, input, options);
            } else {
              this._decodeChoice(input, options);
            }
            present = true;
          } catch (e) {
            present = false;
          }
          input.restore(save);
        } else {
          present = this._peekTag(input, tag, state.any);
          if (input.isError(present)) {
            return present;
          }
        }
      }
      let prevObj;
      if (state.obj && present) {
        prevObj = input.enterObject();
      }
      if (present) {
        if (state.explicit !== null) {
          const explicit = this._decodeTag(input, state.explicit);
          if (input.isError(explicit)) {
            return explicit;
          }
          input = explicit;
        }
        const start = input.offset;
        if (state.use === null && state.choice === null) {
          let save;
          if (state.any) {
            save = input.save();
          }
          const body = this._decodeTag(
            input,
            state.implicit !== null ? state.implicit : state.tag,
            state.any
          );
          if (input.isError(body)) {
            return body;
          }
          if (state.any) {
            result = input.raw(save);
          } else {
            input = body;
          }
        }
        if (options && options.track && state.tag !== null) {
          options.track(input.path(), start, input.length, "tagged");
        }
        if (options && options.track && state.tag !== null) {
          options.track(input.path(), input.offset, input.length, "content");
        }
        if (state.any) {
        } else if (state.choice === null) {
          result = this._decodeGeneric(state.tag, input, options);
        } else {
          result = this._decodeChoice(input, options);
        }
        if (input.isError(result)) {
          return result;
        }
        if (!state.any && state.choice === null && state.children !== null) {
          state.children.forEach(function decodeChildren(child) {
            child._decode(input, options);
          });
        }
        if (state.contains && (state.tag === "octstr" || state.tag === "bitstr")) {
          const data = new DecoderBuffer(result);
          result = this._getUse(state.contains, input._reporterState.obj)._decode(data, options);
        }
      }
      if (state.obj && present) {
        result = input.leaveObject(prevObj);
      }
      if (state.key !== null && (result !== null || present === true)) {
        input.leaveKey(prevKey, state.key, result);
      } else if (prevKey !== null) {
        input.exitKey(prevKey);
      }
      return result;
    };
    Node.prototype._decodeGeneric = function decodeGeneric(tag, input, options) {
      const state = this._baseState;
      if (tag === "seq" || tag === "set") {
        return null;
      }
      if (tag === "seqof" || tag === "setof") {
        return this._decodeList(input, tag, state.args[0], options);
      } else if (/str$/.test(tag)) {
        return this._decodeStr(input, tag, options);
      } else if (tag === "objid" && state.args) {
        return this._decodeObjid(input, state.args[0], state.args[1], options);
      } else if (tag === "objid") {
        return this._decodeObjid(input, null, null, options);
      } else if (tag === "gentime" || tag === "utctime") {
        return this._decodeTime(input, tag, options);
      } else if (tag === "null_") {
        return this._decodeNull(input, options);
      } else if (tag === "bool") {
        return this._decodeBool(input, options);
      } else if (tag === "objDesc") {
        return this._decodeStr(input, tag, options);
      } else if (tag === "int" || tag === "enum") {
        return this._decodeInt(input, state.args && state.args[0], options);
      }
      if (state.use !== null) {
        return this._getUse(state.use, input._reporterState.obj)._decode(input, options);
      } else {
        return input.error(`unknown tag: ${tag}`);
      }
    };
    Node.prototype._getUse = function _getUse(entity, obj) {
      const state = this._baseState;
      state.useDecoder = this._use(entity, obj);
      assert(state.useDecoder._baseState.parent === null);
      state.useDecoder = state.useDecoder._baseState.children[0];
      if (state.implicit !== state.useDecoder._baseState.implicit) {
        state.useDecoder = state.useDecoder.clone();
        state.useDecoder._baseState.implicit = state.implicit;
      }
      return state.useDecoder;
    };
    Node.prototype._decodeChoice = function decodeChoice(input, options) {
      const state = this._baseState;
      let result = null;
      let match = false;
      Object.keys(state.choice).some(function(key) {
        const save = input.save();
        const node = state.choice[key];
        try {
          const value = node._decode(input, options);
          if (input.isError(value)) {
            return false;
          }
          result = { type: key, value };
          match = true;
        } catch (e) {
          input.restore(save);
          return false;
        }
        return true;
      }, this);
      if (!match) {
        return input.error("Choice not matched");
      }
      return result;
    };
    Node.prototype._createEncoderBuffer = function createEncoderBuffer(data) {
      return new EncoderBuffer(data, this.reporter);
    };
    Node.prototype._encode = function encode(data, reporter, parent) {
      const state = this._baseState;
      if (state.default !== null && state.default === data) {
        return;
      }
      const result = this._encodeValue(data, reporter, parent);
      if (result === void 0) {
        return;
      }
      if (this._skipDefault(result, reporter, parent)) {
        return;
      }
      return result;
    };
    Node.prototype._encodeValue = function encode(data, reporter, parent) {
      const state = this._baseState;
      if (state.parent === null) {
        return state.children[0]._encode(data, reporter || new Reporter());
      }
      let result = null;
      this.reporter = reporter;
      if (state.optional && data === void 0) {
        if (state.default !== null) {
          data = state.default;
        } else {
          return;
        }
      }
      let content = null;
      let primitive = false;
      if (state.any) {
        result = this._createEncoderBuffer(data);
      } else if (state.choice) {
        result = this._encodeChoice(data, reporter);
      } else if (state.contains) {
        content = this._getUse(state.contains, parent)._encode(data, reporter);
        primitive = true;
      } else if (state.children) {
        content = state.children.map(function(child) {
          if (child._baseState.tag === "null_") {
            return child._encode(null, reporter, data);
          }
          if (child._baseState.key === null) {
            return reporter.error("Child should have a key");
          }
          const prevKey = reporter.enterKey(child._baseState.key);
          if (typeof data !== "object") {
            return reporter.error("Child expected, but input is not object");
          }
          const res = child._encode(data[child._baseState.key], reporter, data);
          reporter.leaveKey(prevKey);
          return res;
        }, this).filter(function(child) {
          return child;
        });
        content = this._createEncoderBuffer(content);
      } else {
        if (state.tag === "seqof" || state.tag === "setof") {
          if (!(state.args && state.args.length === 1)) {
            return reporter.error(`Too many args for: ${state.tag}`);
          }
          if (!Array.isArray(data)) {
            return reporter.error("seqof/setof, but data is not Array");
          }
          const child = this.clone();
          child._baseState.implicit = null;
          content = this._createEncoderBuffer(data.map(function(item) {
            const state2 = this._baseState;
            return this._getUse(state2.args[0], data)._encode(item, reporter);
          }, child));
        } else if (state.use !== null) {
          result = this._getUse(state.use, parent)._encode(data, reporter);
        } else {
          content = this._encodePrimitive(state.tag, data);
          primitive = true;
        }
      }
      if (!state.any && state.choice === null) {
        const tag = state.implicit !== null ? state.implicit : state.tag;
        const cls = state.implicit === null ? "universal" : "context";
        if (tag === null) {
          if (state.use === null) {
            reporter.error("Tag could be omitted only for .use()");
          }
        } else {
          if (state.use === null) {
            result = this._encodeComposite(tag, primitive, cls, content);
          }
        }
      }
      if (state.explicit !== null) {
        result = this._encodeComposite(state.explicit, false, "context", result);
      }
      return result;
    };
    Node.prototype._encodeChoice = function encodeChoice(data, reporter) {
      const state = this._baseState;
      const node = state.choice[data.type];
      if (!node) {
        assert(
          false,
          `${data.type} not found in ${JSON.stringify(Object.keys(state.choice))}`
        );
      }
      return node._encode(data.value, reporter);
    };
    Node.prototype._encodePrimitive = function encodePrimitive(tag, data) {
      const state = this._baseState;
      if (/str$/.test(tag)) {
        return this._encodeStr(data, tag);
      } else if (tag === "objid" && state.args) {
        return this._encodeObjid(data, state.reverseArgs[0], state.args[1]);
      } else if (tag === "objid") {
        return this._encodeObjid(data, null, null);
      } else if (tag === "gentime" || tag === "utctime") {
        return this._encodeTime(data, tag);
      } else if (tag === "null_") {
        return this._encodeNull();
      } else if (tag === "int" || tag === "enum") {
        return this._encodeInt(data, state.args && state.reverseArgs[0]);
      } else if (tag === "bool") {
        return this._encodeBool(data);
      } else if (tag === "objDesc") {
        return this._encodeStr(data, tag);
      } else {
        throw new Error(`Unsupported tag: ${tag}`);
      }
    };
    Node.prototype._isNumstr = function isNumstr(str) {
      return /^[0-9 ]*$/.test(str);
    };
    Node.prototype._isPrintstr = function isPrintstr(str) {
      return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(str);
    };
    module.exports = Node;
  }
});

// node_modules/@panva/asn1.js/lib/asn1/constants/der.js
var require_der = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1/constants/der.js"(exports) {
    function reverse(map) {
      const res = {};
      Object.keys(map).forEach(function(key) {
        if ((key | 0) == key) {
          key = key | 0;
        }
        const value = map[key];
        res[value] = key;
      });
      return res;
    }
    exports.tagClass = {
      0: "universal",
      1: "application",
      2: "context",
      3: "private"
    };
    exports.tagClassByName = reverse(exports.tagClass);
    exports.tag = {
      0: "end",
      1: "bool",
      2: "int",
      3: "bitstr",
      4: "octstr",
      5: "null_",
      6: "objid",
      7: "objDesc",
      8: "external",
      9: "real",
      10: "enum",
      11: "embed",
      12: "utf8str",
      13: "relativeOid",
      16: "seq",
      17: "set",
      18: "numstr",
      19: "printstr",
      20: "t61str",
      21: "videostr",
      22: "ia5str",
      23: "utctime",
      24: "gentime",
      25: "graphstr",
      26: "iso646str",
      27: "genstr",
      28: "unistr",
      29: "charstr",
      30: "bmpstr"
    };
    exports.tagByName = reverse(exports.tag);
  }
});

// node_modules/@panva/asn1.js/lib/asn1/encoders/der.js
var require_der2 = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1/encoders/der.js"(exports, module) {
    var { inherits } = require_util();
    var Node = require_node();
    var der = require_der();
    function DEREncoder(entity) {
      this.enc = "der";
      this.name = entity.name;
      this.entity = entity;
      this.tree = new DERNode();
      this.tree._init(entity.body);
    }
    DEREncoder.prototype.encode = function encode(data, reporter) {
      return this.tree._encode(data, reporter).join();
    };
    function DERNode(parent) {
      Node.call(this, "der", parent);
    }
    inherits(DERNode, Node);
    DERNode.prototype._encodeComposite = function encodeComposite(tag, primitive, cls, content) {
      const encodedTag = encodeTag(tag, primitive, cls, this.reporter);
      if (content.length < 128) {
        const header2 = Buffer.alloc(2);
        header2[0] = encodedTag;
        header2[1] = content.length;
        return this._createEncoderBuffer([header2, content]);
      }
      let lenOctets = 1;
      for (let i = content.length; i >= 256; i >>= 8) {
        lenOctets++;
      }
      const header = Buffer.alloc(1 + 1 + lenOctets);
      header[0] = encodedTag;
      header[1] = 128 | lenOctets;
      for (let i = 1 + lenOctets, j = content.length; j > 0; i--, j >>= 8) {
        header[i] = j & 255;
      }
      return this._createEncoderBuffer([header, content]);
    };
    DERNode.prototype._encodeStr = function encodeStr(str, tag) {
      if (tag === "bitstr") {
        return this._createEncoderBuffer([str.unused | 0, str.data]);
      } else if (tag === "bmpstr") {
        const buf = Buffer.alloc(str.length * 2);
        for (let i = 0; i < str.length; i++) {
          buf.writeUInt16BE(str.charCodeAt(i), i * 2);
        }
        return this._createEncoderBuffer(buf);
      } else if (tag === "numstr") {
        if (!this._isNumstr(str)) {
          return this.reporter.error("Encoding of string type: numstr supports only digits and space");
        }
        return this._createEncoderBuffer(str);
      } else if (tag === "printstr") {
        if (!this._isPrintstr(str)) {
          return this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark");
        }
        return this._createEncoderBuffer(str);
      } else if (/str$/.test(tag)) {
        return this._createEncoderBuffer(str);
      } else if (tag === "objDesc") {
        return this._createEncoderBuffer(str);
      } else {
        return this.reporter.error(`Encoding of string type: ${tag} unsupported`);
      }
    };
    DERNode.prototype._encodeObjid = function encodeObjid(id, values, relative) {
      if (typeof id === "string") {
        if (!values) {
          return this.reporter.error("string objid given, but no values map found");
        }
        if (!Object.prototype.hasOwnProperty.call(values, id)) {
          return this.reporter.error("objid not found in values map");
        }
        id = values[id].split(/[\s.]+/g);
        for (let i = 0; i < id.length; i++) {
          id[i] |= 0;
        }
      } else if (Array.isArray(id)) {
        id = id.slice();
        for (let i = 0; i < id.length; i++) {
          id[i] |= 0;
        }
      }
      if (!Array.isArray(id)) {
        return this.reporter.error(`objid() should be either array or string, got: ${JSON.stringify(id)}`);
      }
      if (!relative) {
        if (id[1] >= 40) {
          return this.reporter.error("Second objid identifier OOB");
        }
        id.splice(0, 2, id[0] * 40 + id[1]);
      }
      let size = 0;
      for (let i = 0; i < id.length; i++) {
        let ident = id[i];
        for (size++; ident >= 128; ident >>= 7) {
          size++;
        }
      }
      const objid = Buffer.alloc(size);
      let offset = objid.length - 1;
      for (let i = id.length - 1; i >= 0; i--) {
        let ident = id[i];
        objid[offset--] = ident & 127;
        while ((ident >>= 7) > 0) {
          objid[offset--] = 128 | ident & 127;
        }
      }
      return this._createEncoderBuffer(objid);
    };
    function two(num) {
      if (num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    }
    DERNode.prototype._encodeTime = function encodeTime(time, tag) {
      let str;
      const date = new Date(time);
      if (tag === "gentime") {
        str = [
          two(date.getUTCFullYear()),
          two(date.getUTCMonth() + 1),
          two(date.getUTCDate()),
          two(date.getUTCHours()),
          two(date.getUTCMinutes()),
          two(date.getUTCSeconds()),
          "Z"
        ].join("");
      } else if (tag === "utctime") {
        str = [
          two(date.getUTCFullYear() % 100),
          two(date.getUTCMonth() + 1),
          two(date.getUTCDate()),
          two(date.getUTCHours()),
          two(date.getUTCMinutes()),
          two(date.getUTCSeconds()),
          "Z"
        ].join("");
      } else {
        this.reporter.error(`Encoding ${tag} time is not supported yet`);
      }
      return this._encodeStr(str, "octstr");
    };
    DERNode.prototype._encodeNull = function encodeNull() {
      return this._createEncoderBuffer("");
    };
    function bnToBuf(bn) {
      var hex = BigInt(bn).toString(16);
      if (hex.length % 2) {
        hex = "0" + hex;
      }
      var len = hex.length / 2;
      var u8 = new Uint8Array(len);
      var i = 0;
      var j = 0;
      while (i < len) {
        u8[i] = parseInt(hex.slice(j, j + 2), 16);
        i += 1;
        j += 2;
      }
      return u8;
    }
    DERNode.prototype._encodeInt = function encodeInt(num, values) {
      if (typeof num === "string") {
        if (!values) {
          return this.reporter.error("String int or enum given, but no values map");
        }
        if (!Object.prototype.hasOwnProperty.call(values, num)) {
          return this.reporter.error(`Values map doesn't contain: ${JSON.stringify(num)}`);
        }
        num = values[num];
      }
      if (typeof num === "bigint") {
        const numArray = [...bnToBuf(num)];
        if (numArray[0] & 128) {
          numArray.unshift(0);
        }
        num = Buffer.from(numArray);
      }
      if (Buffer.isBuffer(num)) {
        let size2 = num.length;
        if (num.length === 0) {
          size2++;
        }
        const out2 = Buffer.alloc(size2);
        num.copy(out2);
        if (num.length === 0) {
          out2[0] = 0;
        }
        return this._createEncoderBuffer(out2);
      }
      if (num < 128) {
        return this._createEncoderBuffer(num);
      }
      if (num < 256) {
        return this._createEncoderBuffer([0, num]);
      }
      let size = 1;
      for (let i = num; i >= 256; i >>= 8) {
        size++;
      }
      const out = new Array(size);
      for (let i = out.length - 1; i >= 0; i--) {
        out[i] = num & 255;
        num >>= 8;
      }
      if (out[0] & 128) {
        out.unshift(0);
      }
      return this._createEncoderBuffer(Buffer.from(out));
    };
    DERNode.prototype._encodeBool = function encodeBool(value) {
      return this._createEncoderBuffer(value ? 255 : 0);
    };
    DERNode.prototype._use = function use(entity, obj) {
      if (typeof entity === "function") {
        entity = entity(obj);
      }
      return entity._getEncoder("der").tree;
    };
    DERNode.prototype._skipDefault = function skipDefault(dataBuffer, reporter, parent) {
      const state = this._baseState;
      let i;
      if (state.default === null) {
        return false;
      }
      const data = dataBuffer.join();
      if (state.defaultBuffer === void 0) {
        state.defaultBuffer = this._encodeValue(state.default, reporter, parent).join();
      }
      if (data.length !== state.defaultBuffer.length) {
        return false;
      }
      for (i = 0; i < data.length; i++) {
        if (data[i] !== state.defaultBuffer[i]) {
          return false;
        }
      }
      return true;
    };
    function encodeTag(tag, primitive, cls, reporter) {
      let res;
      if (tag === "seqof") {
        tag = "seq";
      } else if (tag === "setof") {
        tag = "set";
      }
      if (Object.prototype.hasOwnProperty.call(der.tagByName, tag)) {
        res = der.tagByName[tag];
      } else if (typeof tag === "number" && (tag | 0) === tag) {
        res = tag;
      } else {
        return reporter.error(`Unknown tag: ${tag}`);
      }
      if (res >= 31) {
        return reporter.error("Multi-octet tag encoding unsupported");
      }
      if (!primitive) {
        res |= 32;
      }
      res |= der.tagClassByName[cls || "universal"] << 6;
      return res;
    }
    module.exports = DEREncoder;
  }
});

// node_modules/@panva/asn1.js/lib/asn1/encoders/pem.js
var require_pem = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1/encoders/pem.js"(exports, module) {
    var { inherits } = require_util();
    var DEREncoder = require_der2();
    function PEMEncoder(entity) {
      DEREncoder.call(this, entity);
      this.enc = "pem";
    }
    inherits(PEMEncoder, DEREncoder);
    PEMEncoder.prototype.encode = function encode(data, options) {
      const buf = DEREncoder.prototype.encode.call(this, data);
      const p = buf.toString("base64");
      const out = [`-----BEGIN ${options.label}-----`];
      for (let i = 0; i < p.length; i += 64) {
        out.push(p.slice(i, i + 64));
      }
      out.push(`-----END ${options.label}-----`);
      return out.join("\n");
    };
    module.exports = PEMEncoder;
  }
});

// node_modules/@panva/asn1.js/lib/asn1/encoders/index.js
var require_encoders = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1/encoders/index.js"(exports, module) {
    module.exports = {
      der: require_der2(),
      pem: require_pem()
    };
  }
});

// node_modules/@panva/asn1.js/lib/asn1/decoders/der.js
var require_der3 = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1/decoders/der.js"(exports, module) {
    var { inherits } = require_util();
    var { DecoderBuffer } = require_buffer();
    var Node = require_node();
    var der = require_der();
    function DERDecoder(entity) {
      this.enc = "der";
      this.name = entity.name;
      this.entity = entity;
      this.tree = new DERNode();
      this.tree._init(entity.body);
    }
    DERDecoder.prototype.decode = function decode(data, options) {
      if (!DecoderBuffer.isDecoderBuffer(data)) {
        data = new DecoderBuffer(data, options);
      }
      return this.tree._decode(data, options);
    };
    function DERNode(parent) {
      Node.call(this, "der", parent);
    }
    inherits(DERNode, Node);
    DERNode.prototype._peekTag = function peekTag(buffer, tag, any) {
      if (buffer.isEmpty()) {
        return false;
      }
      const state = buffer.save();
      const decodedTag = derDecodeTag(buffer, `Failed to peek tag: "${tag}"`);
      if (buffer.isError(decodedTag)) {
        return decodedTag;
      }
      buffer.restore(state);
      return decodedTag.tag === tag || decodedTag.tagStr === tag || decodedTag.tagStr + "of" === tag || any;
    };
    DERNode.prototype._decodeTag = function decodeTag(buffer, tag, any) {
      const decodedTag = derDecodeTag(
        buffer,
        `Failed to decode tag of "${tag}"`
      );
      if (buffer.isError(decodedTag)) {
        return decodedTag;
      }
      let len = derDecodeLen(
        buffer,
        decodedTag.primitive,
        `Failed to get length of "${tag}"`
      );
      if (buffer.isError(len)) {
        return len;
      }
      if (!any && decodedTag.tag !== tag && decodedTag.tagStr !== tag && decodedTag.tagStr + "of" !== tag) {
        return buffer.error(`Failed to match tag: "${tag}"`);
      }
      if (decodedTag.primitive || len !== null) {
        return buffer.skip(len, `Failed to match body of: "${tag}"`);
      }
      const state = buffer.save();
      const res = this._skipUntilEnd(
        buffer,
        `Failed to skip indefinite length body: "${this.tag}"`
      );
      if (buffer.isError(res)) {
        return res;
      }
      len = buffer.offset - state.offset;
      buffer.restore(state);
      return buffer.skip(len, `Failed to match body of: "${tag}"`);
    };
    DERNode.prototype._skipUntilEnd = function skipUntilEnd(buffer, fail) {
      for (; ; ) {
        const tag = derDecodeTag(buffer, fail);
        if (buffer.isError(tag)) {
          return tag;
        }
        const len = derDecodeLen(buffer, tag.primitive, fail);
        if (buffer.isError(len)) {
          return len;
        }
        let res;
        if (tag.primitive || len !== null) {
          res = buffer.skip(len);
        } else {
          res = this._skipUntilEnd(buffer, fail);
        }
        if (buffer.isError(res)) {
          return res;
        }
        if (tag.tagStr === "end") {
          break;
        }
      }
    };
    DERNode.prototype._decodeList = function decodeList(buffer, tag, decoder, options) {
      const result = [];
      while (!buffer.isEmpty()) {
        const possibleEnd = this._peekTag(buffer, "end");
        if (buffer.isError(possibleEnd)) {
          return possibleEnd;
        }
        const res = decoder.decode(buffer, "der", options);
        if (buffer.isError(res) && possibleEnd) {
          break;
        }
        result.push(res);
      }
      return result;
    };
    DERNode.prototype._decodeStr = function decodeStr(buffer, tag) {
      if (tag === "bitstr") {
        const unused = buffer.readUInt8();
        if (buffer.isError(unused)) {
          return unused;
        }
        return { unused, data: buffer.raw() };
      } else if (tag === "bmpstr") {
        const raw = buffer.raw();
        if (raw.length % 2 === 1) {
          return buffer.error("Decoding of string type: bmpstr length mismatch");
        }
        let str = "";
        for (let i = 0; i < raw.length / 2; i++) {
          str += String.fromCharCode(raw.readUInt16BE(i * 2));
        }
        return str;
      } else if (tag === "numstr") {
        const numstr = buffer.raw().toString("ascii");
        if (!this._isNumstr(numstr)) {
          return buffer.error("Decoding of string type: numstr unsupported characters");
        }
        return numstr;
      } else if (tag === "octstr") {
        return buffer.raw();
      } else if (tag === "objDesc") {
        return buffer.raw();
      } else if (tag === "printstr") {
        const printstr = buffer.raw().toString("ascii");
        if (!this._isPrintstr(printstr)) {
          return buffer.error("Decoding of string type: printstr unsupported characters");
        }
        return printstr;
      } else if (/str$/.test(tag)) {
        return buffer.raw().toString();
      } else {
        return buffer.error(`Decoding of string type: ${tag} unsupported`);
      }
    };
    DERNode.prototype._decodeObjid = function decodeObjid(buffer, values, relative) {
      let result;
      const identifiers = [];
      let ident = 0;
      let subident = 0;
      while (!buffer.isEmpty()) {
        subident = buffer.readUInt8();
        ident <<= 7;
        ident |= subident & 127;
        if ((subident & 128) === 0) {
          identifiers.push(ident);
          ident = 0;
        }
      }
      if (subident & 128) {
        identifiers.push(ident);
      }
      const first = identifiers[0] / 40 | 0;
      const second = identifiers[0] % 40;
      if (relative) {
        result = identifiers;
      } else {
        result = [first, second].concat(identifiers.slice(1));
      }
      if (values) {
        let tmp = values[result.join(" ")];
        if (tmp === void 0) {
          tmp = values[result.join(".")];
        }
        if (tmp !== void 0) {
          result = tmp;
        }
      }
      return result;
    };
    DERNode.prototype._decodeTime = function decodeTime(buffer, tag) {
      const str = buffer.raw().toString();
      let year;
      let mon;
      let day;
      let hour;
      let min;
      let sec;
      if (tag === "gentime") {
        year = str.slice(0, 4) | 0;
        mon = str.slice(4, 6) | 0;
        day = str.slice(6, 8) | 0;
        hour = str.slice(8, 10) | 0;
        min = str.slice(10, 12) | 0;
        sec = str.slice(12, 14) | 0;
      } else if (tag === "utctime") {
        year = str.slice(0, 2) | 0;
        mon = str.slice(2, 4) | 0;
        day = str.slice(4, 6) | 0;
        hour = str.slice(6, 8) | 0;
        min = str.slice(8, 10) | 0;
        sec = str.slice(10, 12) | 0;
        if (year < 70) {
          year = 2e3 + year;
        } else {
          year = 1900 + year;
        }
      } else {
        return buffer.error(`Decoding ${tag} time is not supported yet`);
      }
      return Date.UTC(year, mon - 1, day, hour, min, sec, 0);
    };
    DERNode.prototype._decodeNull = function decodeNull() {
      return null;
    };
    DERNode.prototype._decodeBool = function decodeBool(buffer) {
      const res = buffer.readUInt8();
      if (buffer.isError(res)) {
        return res;
      } else {
        return res !== 0;
      }
    };
    DERNode.prototype._decodeInt = function decodeInt(buffer, values) {
      const raw = buffer.raw();
      let res = BigInt(`0x${raw.toString("hex")}`);
      if (values) {
        res = values[res.toString(10)] || res;
      }
      return res;
    };
    DERNode.prototype._use = function use(entity, obj) {
      if (typeof entity === "function") {
        entity = entity(obj);
      }
      return entity._getDecoder("der").tree;
    };
    function derDecodeTag(buf, fail) {
      let tag = buf.readUInt8(fail);
      if (buf.isError(tag)) {
        return tag;
      }
      const cls = der.tagClass[tag >> 6];
      const primitive = (tag & 32) === 0;
      if ((tag & 31) === 31) {
        let oct = tag;
        tag = 0;
        while ((oct & 128) === 128) {
          oct = buf.readUInt8(fail);
          if (buf.isError(oct)) {
            return oct;
          }
          tag <<= 7;
          tag |= oct & 127;
        }
      } else {
        tag &= 31;
      }
      const tagStr = der.tag[tag];
      return {
        cls,
        primitive,
        tag,
        tagStr
      };
    }
    function derDecodeLen(buf, primitive, fail) {
      let len = buf.readUInt8(fail);
      if (buf.isError(len)) {
        return len;
      }
      if (!primitive && len === 128) {
        return null;
      }
      if ((len & 128) === 0) {
        return len;
      }
      const num = len & 127;
      if (num > 4) {
        return buf.error("length octect is too long");
      }
      len = 0;
      for (let i = 0; i < num; i++) {
        len <<= 8;
        const j = buf.readUInt8(fail);
        if (buf.isError(j)) {
          return j;
        }
        len |= j;
      }
      return len;
    }
    module.exports = DERDecoder;
  }
});

// node_modules/@panva/asn1.js/lib/asn1/decoders/pem.js
var require_pem2 = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1/decoders/pem.js"(exports, module) {
    var { inherits } = require_util();
    var DERDecoder = require_der3();
    function PEMDecoder(entity) {
      DERDecoder.call(this, entity);
      this.enc = "pem";
    }
    inherits(PEMDecoder, DERDecoder);
    PEMDecoder.prototype.decode = function decode(data, options) {
      const lines = data.toString().split(/[\r\n]+/g);
      const label = options.label.toUpperCase();
      const re = /^-----(BEGIN|END) ([^-]+)-----$/;
      let start = -1;
      let end = -1;
      for (let i = 0; i < lines.length; i++) {
        const match = lines[i].match(re);
        if (match === null) {
          continue;
        }
        if (match[2] !== label) {
          continue;
        }
        if (start === -1) {
          if (match[1] !== "BEGIN") {
            break;
          }
          start = i;
        } else {
          if (match[1] !== "END") {
            break;
          }
          end = i;
          break;
        }
      }
      if (start === -1 || end === -1) {
        throw new Error(`PEM section not found for: ${label}`);
      }
      const base64 = lines.slice(start + 1, end).join("");
      base64.replace(/[^a-z0-9+/=]+/gi, "");
      const input = Buffer.from(base64, "base64");
      return DERDecoder.prototype.decode.call(this, input, options);
    };
    module.exports = PEMDecoder;
  }
});

// node_modules/@panva/asn1.js/lib/asn1/decoders/index.js
var require_decoders = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1/decoders/index.js"(exports, module) {
    module.exports = {
      der: require_der3(),
      pem: require_pem2()
    };
  }
});

// node_modules/@panva/asn1.js/lib/asn1/api.js
var require_api = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1/api.js"(exports, module) {
    var { inherits } = require_util();
    var encoders = require_encoders();
    var decoders = require_decoders();
    module.exports.define = function define(name, body) {
      return new Entity(name, body);
    };
    function Entity(name, body) {
      this.name = name;
      this.body = body;
      this.decoders = {};
      this.encoders = {};
    }
    Entity.prototype._createNamed = function createNamed(Base) {
      const name = this.name;
      function Generated(entity) {
        this._initNamed(entity, name);
      }
      inherits(Generated, Base);
      Generated.prototype._initNamed = function _initNamed(entity, name2) {
        Base.call(this, entity, name2);
      };
      return new Generated(this);
    };
    Entity.prototype._getDecoder = function _getDecoder(enc) {
      enc = enc || "der";
      if (!Object.prototype.hasOwnProperty.call(this.decoders, enc)) {
        this.decoders[enc] = this._createNamed(decoders[enc]);
      }
      return this.decoders[enc];
    };
    Entity.prototype.decode = function decode(data, enc, options) {
      return this._getDecoder(enc).decode(data, options);
    };
    Entity.prototype._getEncoder = function _getEncoder(enc) {
      enc = enc || "der";
      if (!Object.prototype.hasOwnProperty.call(this.encoders, enc)) {
        this.encoders[enc] = this._createNamed(encoders[enc]);
      }
      return this.encoders[enc];
    };
    Entity.prototype.encode = function encode(data, enc, reporter) {
      return this._getEncoder(enc).encode(data, reporter);
    };
  }
});

// node_modules/@panva/asn1.js/lib/asn1/base/index.js
var require_base = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1/base/index.js"(exports, module) {
    var { Reporter } = require_reporter();
    var { DecoderBuffer, EncoderBuffer } = require_buffer();
    var Node = require_node();
    module.exports = {
      DecoderBuffer,
      EncoderBuffer,
      Node,
      Reporter
    };
  }
});

// node_modules/@panva/asn1.js/lib/asn1/constants/index.js
var require_constants = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1/constants/index.js"(exports, module) {
    module.exports = {
      der: require_der()
    };
  }
});

// node_modules/@panva/asn1.js/lib/asn1.js
var require_asn1 = __commonJS({
  "node_modules/@panva/asn1.js/lib/asn1.js"(exports, module) {
    var { define } = require_api();
    var base = require_base();
    var constants = require_constants();
    var decoders = require_decoders();
    var encoders = require_encoders();
    module.exports = {
      base,
      constants,
      decoders,
      define,
      encoders
    };
  }
});

// node_modules/jose/lib/help/asn1/oids.js
var require_oids = __commonJS({
  "node_modules/jose/lib/help/asn1/oids.js"(exports, module) {
    var oids = {
      "1 2 840 10045 3 1 7": "P-256",
      "1 3 132 0 10": "secp256k1",
      "1 3 132 0 34": "P-384",
      "1 3 132 0 35": "P-521",
      "1 2 840 10045 2 1": "ecPublicKey",
      "1 2 840 113549 1 1 1": "rsaEncryption",
      "1 3 101 110": "X25519",
      "1 3 101 111": "X448",
      "1 3 101 112": "Ed25519",
      "1 3 101 113": "Ed448"
    };
    module.exports = oids;
  }
});

// node_modules/jose/lib/help/asn1/algorithm_identifier.js
var require_algorithm_identifier = __commonJS({
  "node_modules/jose/lib/help/asn1/algorithm_identifier.js"(exports, module) {
    var oids = require_oids();
    module.exports = function() {
      this.seq().obj(
        this.key("algorithm").objid(oids),
        this.key("parameters").optional().choice({ namedCurve: this.objid(oids), null: this.null_() })
      );
    };
  }
});

// node_modules/jose/lib/help/asn1/ec_private_key.js
var require_ec_private_key = __commonJS({
  "node_modules/jose/lib/help/asn1/ec_private_key.js"(exports, module) {
    var oids = require_oids();
    module.exports = function() {
      this.seq().obj(
        this.key("version").int(),
        this.key("privateKey").octstr(),
        this.key("parameters").explicit(0).optional().choice({ namedCurve: this.objid(oids) }),
        this.key("publicKey").explicit(1).optional().bitstr()
      );
    };
  }
});

// node_modules/jose/lib/help/asn1/private_key_info.js
var require_private_key_info = __commonJS({
  "node_modules/jose/lib/help/asn1/private_key_info.js"(exports, module) {
    module.exports = (AlgorithmIdentifier) => function() {
      this.seq().obj(
        this.key("version").int(),
        this.key("algorithm").use(AlgorithmIdentifier),
        this.key("privateKey").octstr()
      );
    };
  }
});

// node_modules/jose/lib/help/asn1/public_key_info.js
var require_public_key_info = __commonJS({
  "node_modules/jose/lib/help/asn1/public_key_info.js"(exports, module) {
    module.exports = (AlgorithmIdentifier) => function() {
      this.seq().obj(
        this.key("algorithm").use(AlgorithmIdentifier),
        this.key("publicKey").bitstr()
      );
    };
  }
});

// node_modules/jose/lib/help/asn1/private_key.js
var require_private_key = __commonJS({
  "node_modules/jose/lib/help/asn1/private_key.js"(exports, module) {
    module.exports = function() {
      this.octstr().contains().obj(
        this.key("privateKey").octstr()
      );
    };
  }
});

// node_modules/jose/lib/help/asn1/one_asymmetric_key.js
var require_one_asymmetric_key = __commonJS({
  "node_modules/jose/lib/help/asn1/one_asymmetric_key.js"(exports, module) {
    module.exports = (AlgorithmIdentifier, PrivateKey) => function() {
      this.seq().obj(
        this.key("version").int(),
        this.key("algorithm").use(AlgorithmIdentifier),
        this.key("privateKey").use(PrivateKey)
      );
    };
  }
});

// node_modules/jose/lib/help/asn1/rsa_private_key.js
var require_rsa_private_key = __commonJS({
  "node_modules/jose/lib/help/asn1/rsa_private_key.js"(exports, module) {
    module.exports = function() {
      this.seq().obj(
        this.key("version").int({ 0: "two-prime", 1: "multi" }),
        this.key("n").int(),
        this.key("e").int(),
        this.key("d").int(),
        this.key("p").int(),
        this.key("q").int(),
        this.key("dp").int(),
        this.key("dq").int(),
        this.key("qi").int()
      );
    };
  }
});

// node_modules/jose/lib/help/asn1/rsa_public_key.js
var require_rsa_public_key = __commonJS({
  "node_modules/jose/lib/help/asn1/rsa_public_key.js"(exports, module) {
    module.exports = function() {
      this.seq().obj(
        this.key("n").int(),
        this.key("e").int()
      );
    };
  }
});

// node_modules/jose/lib/help/asn1/index.js
var require_asn12 = __commonJS({
  "node_modules/jose/lib/help/asn1/index.js"(exports, module) {
    var asn1 = require_asn1();
    var types = /* @__PURE__ */ new Map();
    var AlgorithmIdentifier = asn1.define("AlgorithmIdentifier", require_algorithm_identifier());
    types.set("AlgorithmIdentifier", AlgorithmIdentifier);
    var ECPrivateKey = asn1.define("ECPrivateKey", require_ec_private_key());
    types.set("ECPrivateKey", ECPrivateKey);
    var PrivateKeyInfo = asn1.define("PrivateKeyInfo", require_private_key_info()(AlgorithmIdentifier));
    types.set("PrivateKeyInfo", PrivateKeyInfo);
    var PublicKeyInfo = asn1.define("PublicKeyInfo", require_public_key_info()(AlgorithmIdentifier));
    types.set("PublicKeyInfo", PublicKeyInfo);
    var PrivateKey = asn1.define("PrivateKey", require_private_key());
    types.set("PrivateKey", PrivateKey);
    var OneAsymmetricKey = asn1.define("OneAsymmetricKey", require_one_asymmetric_key()(AlgorithmIdentifier, PrivateKey));
    types.set("OneAsymmetricKey", OneAsymmetricKey);
    var RSAPrivateKey = asn1.define("RSAPrivateKey", require_rsa_private_key());
    types.set("RSAPrivateKey", RSAPrivateKey);
    var RSAPublicKey = asn1.define("RSAPublicKey", require_rsa_public_key());
    types.set("RSAPublicKey", RSAPublicKey);
    module.exports = types;
  }
});

// node_modules/jose/lib/help/key_object.js
var require_key_object = __commonJS({
  "node_modules/jose/lib/help/key_object.js"(exports, module) {
    var { keyObjectSupported } = require_runtime_support();
    var createPublicKey;
    var createPrivateKey;
    var createSecretKey;
    var KeyObject;
    var asInput;
    if (keyObjectSupported) {
      ({ createPublicKey, createPrivateKey, createSecretKey, KeyObject } = require_crypto());
      asInput = (input) => input;
    } else {
      const { EOL } = require_os();
      const errors = require_errors();
      const isObject = require_is_object();
      const asn1 = require_asn12();
      const toInput = Symbol("toInput");
      const namedCurve = Symbol("namedCurve");
      asInput = (keyObject, needsPublic) => {
        if (keyObject instanceof KeyObject) {
          return keyObject[toInput](needsPublic);
        }
        return createSecretKey(keyObject)[toInput](needsPublic);
      };
      const pemToDer = (pem) => Buffer.from(pem.replace(/(?:-----(?:BEGIN|END)(?: (?:RSA|EC))? (?:PRIVATE|PUBLIC) KEY-----|\s)/g, ""), "base64");
      const derToPem = (der, label) => `-----BEGIN ${label}-----${EOL}${(der.toString("base64").match(/.{1,64}/g) || []).join(EOL)}${EOL}-----END ${label}-----`;
      const unsupported = (input) => {
        const label = typeof input === "string" ? input : `OID ${input.join(".")}`;
        throw new errors.JOSENotSupported(`${label} is not supported in your Node.js runtime version`);
      };
      KeyObject = class KeyObject {
        export({ cipher, passphrase, type, format } = {}) {
          if (this._type === "secret") {
            return this._buffer;
          }
          if (this._type === "public") {
            if (this.asymmetricKeyType === "rsa") {
              switch (type) {
                case "pkcs1":
                  if (format === "pem") {
                    return this._pem;
                  }
                  return pemToDer(this._pem);
                case "spki": {
                  const PublicKeyInfo = asn1.get("PublicKeyInfo");
                  const pem = PublicKeyInfo.encode({
                    algorithm: {
                      algorithm: "rsaEncryption",
                      parameters: { type: "null" }
                    },
                    publicKey: {
                      unused: 0,
                      data: pemToDer(this._pem)
                    }
                  }, "pem", { label: "PUBLIC KEY" });
                  return format === "pem" ? pem : pemToDer(pem);
                }
                default:
                  throw new TypeError(`The value ${type} is invalid for option "type"`);
              }
            }
            if (this.asymmetricKeyType === "ec") {
              if (type !== "spki") {
                throw new TypeError(`The value ${type} is invalid for option "type"`);
              }
              if (format === "pem") {
                return this._pem;
              }
              return pemToDer(this._pem);
            }
          }
          if (this._type === "private") {
            if (passphrase !== void 0 || cipher !== void 0) {
              throw new errors.JOSENotSupported("encrypted private keys are not supported in your Node.js runtime version");
            }
            if (type === "pkcs8") {
              if (this._pkcs8) {
                if (format === "der" && typeof this._pkcs8 === "string") {
                  return pemToDer(this._pkcs8);
                }
                if (format === "pem" && Buffer.isBuffer(this._pkcs8)) {
                  return derToPem(this._pkcs8, "PRIVATE KEY");
                }
                return this._pkcs8;
              }
              if (this.asymmetricKeyType === "rsa") {
                const parsed = this._asn1;
                const RSAPrivateKey = asn1.get("RSAPrivateKey");
                const privateKey = RSAPrivateKey.encode(parsed);
                const PrivateKeyInfo = asn1.get("PrivateKeyInfo");
                const pkcs8 = PrivateKeyInfo.encode({
                  version: 0,
                  privateKey,
                  algorithm: {
                    algorithm: "rsaEncryption",
                    parameters: { type: "null" }
                  }
                });
                this._pkcs8 = pkcs8;
                return this.export({ type, format });
              }
              if (this.asymmetricKeyType === "ec") {
                const parsed = this._asn1;
                const ECPrivateKey = asn1.get("ECPrivateKey");
                const privateKey = ECPrivateKey.encode({
                  version: parsed.version,
                  privateKey: parsed.privateKey,
                  publicKey: parsed.publicKey
                });
                const PrivateKeyInfo = asn1.get("PrivateKeyInfo");
                const pkcs8 = PrivateKeyInfo.encode({
                  version: 0,
                  privateKey,
                  algorithm: {
                    algorithm: "ecPublicKey",
                    parameters: this._asn1.parameters
                  }
                });
                this._pkcs8 = pkcs8;
                return this.export({ type, format });
              }
            }
            if (this.asymmetricKeyType === "rsa" && type === "pkcs1") {
              if (format === "pem") {
                return this._pem;
              }
              return pemToDer(this._pem);
            } else if (this.asymmetricKeyType === "ec" && type === "sec1") {
              if (format === "pem") {
                return this._pem;
              }
              return pemToDer(this._pem);
            } else {
              throw new TypeError(`The value ${type} is invalid for option "type"`);
            }
          }
        }
        get type() {
          return this._type;
        }
        get asymmetricKeyType() {
          return this._asymmetricKeyType;
        }
        get symmetricKeySize() {
          return this._symmetricKeySize;
        }
        [toInput](needsPublic) {
          switch (this._type) {
            case "secret":
              return this._buffer;
            case "public":
              return this._pem;
            default:
              if (needsPublic) {
                if (!("_pub" in this)) {
                  this._pub = createPublicKey(this);
                }
                return this._pub[toInput](false);
              }
              return this._pem;
          }
        }
      };
      createSecretKey = (buffer) => {
        if (!Buffer.isBuffer(buffer) || !buffer.length) {
          throw new TypeError("input must be a non-empty Buffer instance");
        }
        const keyObject = new KeyObject();
        keyObject._buffer = Buffer.from(buffer);
        keyObject._symmetricKeySize = buffer.length;
        keyObject._type = "secret";
        return keyObject;
      };
      createPublicKey = (input) => {
        if (input instanceof KeyObject) {
          if (input.type !== "private") {
            throw new TypeError(`Invalid key object type ${input.type}, expected private.`);
          }
          switch (input.asymmetricKeyType) {
            case "ec": {
              const PublicKeyInfo = asn1.get("PublicKeyInfo");
              const key2 = PublicKeyInfo.encode({
                algorithm: {
                  algorithm: "ecPublicKey",
                  parameters: input._asn1.parameters
                },
                publicKey: input._asn1.publicKey
              });
              return createPublicKey({ key: key2, format: "der", type: "spki" });
            }
            case "rsa": {
              const RSAPublicKey = asn1.get("RSAPublicKey");
              const key2 = RSAPublicKey.encode(input._asn1);
              return createPublicKey({ key: key2, format: "der", type: "pkcs1" });
            }
          }
        }
        if (typeof input === "string" || Buffer.isBuffer(input)) {
          input = { key: input, format: "pem" };
        }
        if (!isObject(input)) {
          throw new TypeError("input must be a string, Buffer or an object");
        }
        const { format, passphrase } = input;
        let { key, type } = input;
        if (typeof key !== "string" && !Buffer.isBuffer(key)) {
          throw new TypeError("key must be a string or Buffer");
        }
        if (format !== "pem" && format !== "der") {
          throw new TypeError('format must be one of "pem" or "der"');
        }
        let label;
        if (format === "pem") {
          key = key.toString();
          switch (key.split(/\r?\n/g)[0].toString()) {
            case "-----BEGIN PUBLIC KEY-----":
              type = "spki";
              label = "PUBLIC KEY";
              break;
            case "-----BEGIN RSA PUBLIC KEY-----":
              type = "pkcs1";
              label = "RSA PUBLIC KEY";
              break;
            case "-----BEGIN CERTIFICATE-----":
              throw new errors.JOSENotSupported("X.509 certificates are not supported in your Node.js runtime version");
            case "-----BEGIN PRIVATE KEY-----":
            case "-----BEGIN EC PRIVATE KEY-----":
            case "-----BEGIN RSA PRIVATE KEY-----":
              return createPublicKey(createPrivateKey(key));
            default:
              throw new TypeError("unknown/unsupported PEM type");
          }
        }
        switch (type) {
          case "spki": {
            const PublicKeyInfo = asn1.get("PublicKeyInfo");
            const parsed = PublicKeyInfo.decode(key, format, { label });
            let type2, keyObject;
            switch (parsed.algorithm.algorithm) {
              case "ecPublicKey": {
                keyObject = new KeyObject();
                keyObject._asn1 = parsed;
                keyObject._asymmetricKeyType = "ec";
                keyObject._type = "public";
                keyObject._pem = PublicKeyInfo.encode(parsed, "pem", { label: "PUBLIC KEY" });
                break;
              }
              case "rsaEncryption": {
                type2 = "pkcs1";
                keyObject = createPublicKey({ type: type2, key: parsed.publicKey.data, format: "der" });
                break;
              }
              default:
                unsupported(parsed.algorithm.algorithm);
            }
            return keyObject;
          }
          case "pkcs1": {
            const RSAPublicKey = asn1.get("RSAPublicKey");
            const parsed = RSAPublicKey.decode(key, format, { label });
            if (parsed.n === BigInt(0)) {
              return createPublicKey(createPrivateKey({ key, format, type, passphrase }));
            }
            const keyObject = new KeyObject();
            keyObject._asn1 = parsed;
            keyObject._asymmetricKeyType = "rsa";
            keyObject._type = "public";
            keyObject._pem = RSAPublicKey.encode(parsed, "pem", { label: "RSA PUBLIC KEY" });
            return keyObject;
          }
          case "pkcs8":
          case "sec1":
            return createPublicKey(createPrivateKey({ format, key, type, passphrase }));
          default:
            throw new TypeError(`The value ${type} is invalid for option "type"`);
        }
      };
      createPrivateKey = (input, hints) => {
        if (typeof input === "string" || Buffer.isBuffer(input)) {
          input = { key: input, format: "pem" };
        }
        if (!isObject(input)) {
          throw new TypeError("input must be a string, Buffer or an object");
        }
        const { format, passphrase } = input;
        let { key, type } = input;
        if (typeof key !== "string" && !Buffer.isBuffer(key)) {
          throw new TypeError("key must be a string or Buffer");
        }
        if (passphrase !== void 0) {
          throw new errors.JOSENotSupported("encrypted private keys are not supported in your Node.js runtime version");
        }
        if (format !== "pem" && format !== "der") {
          throw new TypeError('format must be one of "pem" or "der"');
        }
        let label;
        if (format === "pem") {
          key = key.toString();
          switch (key.split(/\r?\n/g)[0].toString()) {
            case "-----BEGIN PRIVATE KEY-----":
              type = "pkcs8";
              label = "PRIVATE KEY";
              break;
            case "-----BEGIN EC PRIVATE KEY-----":
              type = "sec1";
              label = "EC PRIVATE KEY";
              break;
            case "-----BEGIN RSA PRIVATE KEY-----":
              type = "pkcs1";
              label = "RSA PRIVATE KEY";
              break;
            default:
              throw new TypeError("unknown/unsupported PEM type");
          }
        }
        switch (type) {
          case "pkcs8": {
            const PrivateKeyInfo = asn1.get("PrivateKeyInfo");
            const parsed = PrivateKeyInfo.decode(key, format, { label });
            let type2, keyObject;
            switch (parsed.algorithm.algorithm) {
              case "ecPublicKey": {
                type2 = "sec1";
                keyObject = createPrivateKey({ type: type2, key: parsed.privateKey, format: "der" }, { [namedCurve]: parsed.algorithm.parameters.value });
                break;
              }
              case "rsaEncryption": {
                type2 = "pkcs1";
                keyObject = createPrivateKey({ type: type2, key: parsed.privateKey, format: "der" });
                break;
              }
              default:
                unsupported(parsed.algorithm.algorithm);
            }
            keyObject._pkcs8 = key;
            return keyObject;
          }
          case "pkcs1": {
            const RSAPrivateKey = asn1.get("RSAPrivateKey");
            const parsed = RSAPrivateKey.decode(key, format, { label });
            const keyObject = new KeyObject();
            keyObject._asn1 = parsed;
            keyObject._asymmetricKeyType = "rsa";
            keyObject._type = "private";
            keyObject._pem = RSAPrivateKey.encode(parsed, "pem", { label: "RSA PRIVATE KEY" });
            return keyObject;
          }
          case "sec1": {
            const ECPrivateKey = asn1.get("ECPrivateKey");
            let parsed = ECPrivateKey.decode(key, format, { label });
            if (!("parameters" in parsed) && !hints[namedCurve]) {
              throw new Error("invalid sec1");
            } else if (!("parameters" in parsed)) {
              parsed = { ...parsed, parameters: { type: "namedCurve", value: hints[namedCurve] } };
            }
            const keyObject = new KeyObject();
            keyObject._asn1 = parsed;
            keyObject._asymmetricKeyType = "ec";
            keyObject._type = "private";
            keyObject._pem = ECPrivateKey.encode(parsed, "pem", { label: "EC PRIVATE KEY" });
            return keyObject;
          }
          default:
            throw new TypeError(`The value ${type} is invalid for option "type"`);
        }
      };
    }
    module.exports = { createPublicKey, createPrivateKey, createSecretKey, KeyObject, asInput };
  }
});

// node_modules/jose/lib/help/rsa_primes.js
var require_rsa_primes = __commonJS({
  "node_modules/jose/lib/help/rsa_primes.js"(exports, module) {
    var { randomBytes } = require_crypto();
    var base64url = require_base64url();
    var errors = require_errors();
    var ZERO = BigInt(0);
    var ONE = BigInt(1);
    var TWO = BigInt(2);
    var toJWKParameter = (n) => {
      const hex = n.toString(16);
      return base64url.encodeBuffer(Buffer.from(hex.length % 2 ? `0${hex}` : hex, "hex"));
    };
    var fromBuffer = (buf) => BigInt(`0x${buf.toString("hex")}`);
    var bitLength = (n) => n.toString(2).length;
    var eGcdX = (a, b) => {
      let x = ZERO;
      let y = ONE;
      let u = ONE;
      let v = ZERO;
      while (a !== ZERO) {
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        b = a;
        a = r;
        x = u;
        y = v;
        u = m;
        v = n;
      }
      return x;
    };
    var gcd = (a, b) => {
      let shift = ZERO;
      while (!((a | b) & ONE)) {
        a >>= ONE;
        b >>= ONE;
        shift++;
      }
      while (!(a & ONE)) {
        a >>= ONE;
      }
      do {
        while (!(b & ONE)) {
          b >>= ONE;
        }
        if (a > b) {
          const x = a;
          a = b;
          b = x;
        }
        b -= a;
      } while (b);
      return a << shift;
    };
    var modPow = (a, b, n) => {
      a = toZn(a, n);
      let result = ONE;
      let x = a;
      while (b > 0) {
        const leastSignificantBit = b % TWO;
        b = b / TWO;
        if (leastSignificantBit === ONE) {
          result = result * x;
          result = result % n;
        }
        x = x * x;
        x = x % n;
      }
      return result;
    };
    var randBetween = (min, max) => {
      const interval = max - min;
      const bitLen = bitLength(interval);
      let rnd;
      do {
        rnd = fromBuffer(randBits(bitLen));
      } while (rnd > interval);
      return rnd + min;
    };
    var randBits = (bitLength2) => {
      const byteLength = Math.ceil(bitLength2 / 8);
      const rndBytes = randomBytes(byteLength);
      rndBytes[0] = rndBytes[0] & 2 ** (bitLength2 % 8) - 1;
      return rndBytes;
    };
    var toZn = (a, n) => {
      a = a % n;
      return a < 0 ? a + n : a;
    };
    var odd = (n) => {
      let r = n;
      while (r % TWO === ZERO) {
        r = r / TWO;
      }
      return r;
    };
    var maxCountWhileNoY = 30;
    var maxCountWhileInot0 = 22;
    var getPrimeFactors = (e, d, n) => {
      const r = odd(e * d - ONE);
      let countWhileNoY = 0;
      let y;
      do {
        countWhileNoY++;
        if (countWhileNoY === maxCountWhileNoY) {
          throw new errors.JWKImportFailed("failed to calculate missing primes");
        }
        let countWhileInot0 = 0;
        let i = modPow(randBetween(TWO, n), r, n);
        let o = ZERO;
        while (i !== ONE) {
          countWhileInot0++;
          if (countWhileInot0 === maxCountWhileInot0) {
            throw new errors.JWKImportFailed("failed to calculate missing primes");
          }
          o = i;
          i = i * i % n;
        }
        if (o !== n - ONE) {
          y = o;
        }
      } while (!y);
      const p = gcd(y - ONE, n);
      const q = n / p;
      return p > q ? { p, q } : { p: q, q: p };
    };
    module.exports = (jwk) => {
      const e = fromBuffer(base64url.decodeToBuffer(jwk.e));
      const d = fromBuffer(base64url.decodeToBuffer(jwk.d));
      const n = fromBuffer(base64url.decodeToBuffer(jwk.n));
      if (d >= n) {
        throw new errors.JWKInvalid("invalid RSA private exponent");
      }
      const { p, q } = getPrimeFactors(e, d, n);
      const dp = d % (p - ONE);
      const dq = d % (q - ONE);
      const qi = toZn(eGcdX(toZn(q, p), p), p);
      return {
        ...jwk,
        p: toJWKParameter(p),
        q: toJWKParameter(q),
        dp: toJWKParameter(dp),
        dq: toJWKParameter(dq),
        qi: toJWKParameter(qi)
      };
    };
  }
});

// node_modules/jose/lib/help/key_utils.js
var require_key_utils = __commonJS({
  "node_modules/jose/lib/help/key_utils.js"(exports, module) {
    var { EOL } = require_os();
    var errors = require_errors();
    var { keyObjectSupported } = require_runtime_support();
    var { createPublicKey } = require_key_object();
    var base64url = require_base64url();
    var asn1 = require_asn12();
    var computePrimes = require_rsa_primes();
    var { OKP_CURVES, EC_CURVES } = require_registry();
    var formatPem = (base64pem, descriptor) => `-----BEGIN ${descriptor} KEY-----${EOL}${(base64pem.match(/.{1,64}/g) || []).join(EOL)}${EOL}-----END ${descriptor} KEY-----`;
    var okpToJWK = {
      private(crv, keyObject) {
        const der = keyObject.export({ type: "pkcs8", format: "der" });
        const OneAsymmetricKey = asn1.get("OneAsymmetricKey");
        const { privateKey: { privateKey: d } } = OneAsymmetricKey.decode(der);
        return {
          ...okpToJWK.public(crv, createPublicKey(keyObject)),
          d: base64url.encodeBuffer(d)
        };
      },
      public(crv, keyObject) {
        const der = keyObject.export({ type: "spki", format: "der" });
        const PublicKeyInfo = asn1.get("PublicKeyInfo");
        const { publicKey: { data: x } } = PublicKeyInfo.decode(der);
        return {
          kty: "OKP",
          crv,
          x: base64url.encodeBuffer(x)
        };
      }
    };
    var keyObjectToJWK = {
      rsa: {
        private(keyObject) {
          const der = keyObject.export({ type: "pkcs8", format: "der" });
          const PrivateKeyInfo = asn1.get("PrivateKeyInfo");
          const RSAPrivateKey = asn1.get("RSAPrivateKey");
          const { privateKey } = PrivateKeyInfo.decode(der);
          const { version, n, e, d, p, q, dp, dq, qi } = RSAPrivateKey.decode(privateKey);
          if (version !== "two-prime") {
            throw new errors.JOSENotSupported("Private RSA keys with more than two primes are not supported");
          }
          return {
            kty: "RSA",
            n: base64url.encodeBigInt(n),
            e: base64url.encodeBigInt(e),
            d: base64url.encodeBigInt(d),
            p: base64url.encodeBigInt(p),
            q: base64url.encodeBigInt(q),
            dp: base64url.encodeBigInt(dp),
            dq: base64url.encodeBigInt(dq),
            qi: base64url.encodeBigInt(qi)
          };
        },
        public(keyObject) {
          const der = keyObject.export({ type: "spki", format: "der" });
          const PublicKeyInfo = asn1.get("PublicKeyInfo");
          const RSAPublicKey = asn1.get("RSAPublicKey");
          const { publicKey: { data: publicKey } } = PublicKeyInfo.decode(der);
          const { n, e } = RSAPublicKey.decode(publicKey);
          return {
            kty: "RSA",
            n: base64url.encodeBigInt(n),
            e: base64url.encodeBigInt(e)
          };
        }
      },
      ec: {
        private(keyObject) {
          const der = keyObject.export({ type: "pkcs8", format: "der" });
          const PrivateKeyInfo = asn1.get("PrivateKeyInfo");
          const ECPrivateKey = asn1.get("ECPrivateKey");
          const { privateKey, algorithm: { parameters: { value: crv } } } = PrivateKeyInfo.decode(der);
          const { privateKey: d, publicKey } = ECPrivateKey.decode(privateKey);
          if (typeof publicKey === "undefined") {
            if (keyObjectSupported) {
              return {
                ...keyObjectToJWK.ec.public(createPublicKey(keyObject)),
                d: base64url.encodeBuffer(d)
              };
            }
            throw new errors.JOSENotSupported("Private EC keys without the public key embedded are not supported in your Node.js runtime version");
          }
          const x = publicKey.data.slice(1, (publicKey.data.length - 1) / 2 + 1);
          const y = publicKey.data.slice((publicKey.data.length - 1) / 2 + 1);
          return {
            kty: "EC",
            crv,
            d: base64url.encodeBuffer(d),
            x: base64url.encodeBuffer(x),
            y: base64url.encodeBuffer(y)
          };
        },
        public(keyObject) {
          const der = keyObject.export({ type: "spki", format: "der" });
          const PublicKeyInfo = asn1.get("PublicKeyInfo");
          const { publicKey: { data: publicKey }, algorithm: { parameters: { value: crv } } } = PublicKeyInfo.decode(der);
          const x = publicKey.slice(1, (publicKey.length - 1) / 2 + 1);
          const y = publicKey.slice((publicKey.length - 1) / 2 + 1);
          return {
            kty: "EC",
            crv,
            x: base64url.encodeBuffer(x),
            y: base64url.encodeBuffer(y)
          };
        }
      },
      ed25519: {
        private(keyObject) {
          return okpToJWK.private("Ed25519", keyObject);
        },
        public(keyObject) {
          return okpToJWK.public("Ed25519", keyObject);
        }
      },
      ed448: {
        private(keyObject) {
          return okpToJWK.private("Ed448", keyObject);
        },
        public(keyObject) {
          return okpToJWK.public("Ed448", keyObject);
        }
      },
      x25519: {
        private(keyObject) {
          return okpToJWK.private("X25519", keyObject);
        },
        public(keyObject) {
          return okpToJWK.public("X25519", keyObject);
        }
      },
      x448: {
        private(keyObject) {
          return okpToJWK.private("X448", keyObject);
        },
        public(keyObject) {
          return okpToJWK.public("X448", keyObject);
        }
      }
    };
    module.exports.keyObjectToJWK = (keyObject) => {
      if (keyObject.type === "private") {
        return keyObjectToJWK[keyObject.asymmetricKeyType].private(keyObject);
      }
      return keyObjectToJWK[keyObject.asymmetricKeyType].public(keyObject);
    };
    var concatEcPublicKey = (x, y) => ({
      unused: 0,
      data: Buffer.concat([
        Buffer.alloc(1, 4),
        base64url.decodeToBuffer(x),
        base64url.decodeToBuffer(y)
      ])
    });
    var jwkToPem = {
      RSA: {
        private(jwk, { calculateMissingRSAPrimes }) {
          const RSAPrivateKey = asn1.get("RSAPrivateKey");
          if ("oth" in jwk) {
            throw new errors.JOSENotSupported("Private RSA keys with more than two primes are not supported");
          }
          if (jwk.p || jwk.q || jwk.dp || jwk.dq || jwk.qi) {
            if (!(jwk.p && jwk.q && jwk.dp && jwk.dq && jwk.qi)) {
              throw new errors.JWKInvalid("all other private key parameters must be present when any one of them is present");
            }
          } else if (calculateMissingRSAPrimes) {
            jwk = computePrimes(jwk);
          } else if (!calculateMissingRSAPrimes) {
            throw new errors.JOSENotSupported("importing private RSA keys without all other private key parameters is not enabled, see documentation and its advisory on how and when its ok to enable it");
          }
          return RSAPrivateKey.encode({
            version: 0,
            n: BigInt(`0x${base64url.decodeToBuffer(jwk.n).toString("hex")}`),
            e: BigInt(`0x${base64url.decodeToBuffer(jwk.e).toString("hex")}`),
            d: BigInt(`0x${base64url.decodeToBuffer(jwk.d).toString("hex")}`),
            p: BigInt(`0x${base64url.decodeToBuffer(jwk.p).toString("hex")}`),
            q: BigInt(`0x${base64url.decodeToBuffer(jwk.q).toString("hex")}`),
            dp: BigInt(`0x${base64url.decodeToBuffer(jwk.dp).toString("hex")}`),
            dq: BigInt(`0x${base64url.decodeToBuffer(jwk.dq).toString("hex")}`),
            qi: BigInt(`0x${base64url.decodeToBuffer(jwk.qi).toString("hex")}`)
          }, "pem", { label: "RSA PRIVATE KEY" });
        },
        public(jwk) {
          const RSAPublicKey = asn1.get("RSAPublicKey");
          return RSAPublicKey.encode({
            version: 0,
            n: BigInt(`0x${base64url.decodeToBuffer(jwk.n).toString("hex")}`),
            e: BigInt(`0x${base64url.decodeToBuffer(jwk.e).toString("hex")}`)
          }, "pem", { label: "RSA PUBLIC KEY" });
        }
      },
      EC: {
        private(jwk) {
          const ECPrivateKey = asn1.get("ECPrivateKey");
          return ECPrivateKey.encode({
            version: 1,
            privateKey: base64url.decodeToBuffer(jwk.d),
            parameters: { type: "namedCurve", value: jwk.crv },
            publicKey: concatEcPublicKey(jwk.x, jwk.y)
          }, "pem", { label: "EC PRIVATE KEY" });
        },
        public(jwk) {
          const PublicKeyInfo = asn1.get("PublicKeyInfo");
          return PublicKeyInfo.encode({
            algorithm: {
              algorithm: "ecPublicKey",
              parameters: { type: "namedCurve", value: jwk.crv }
            },
            publicKey: concatEcPublicKey(jwk.x, jwk.y)
          }, "pem", { label: "PUBLIC KEY" });
        }
      },
      OKP: {
        private(jwk) {
          const OneAsymmetricKey = asn1.get("OneAsymmetricKey");
          const b64 = OneAsymmetricKey.encode({
            version: 0,
            privateKey: { privateKey: base64url.decodeToBuffer(jwk.d) },
            algorithm: { algorithm: jwk.crv }
          }, "der");
          b64.write("04", 12, 1, "hex");
          return formatPem(b64.toString("base64"), "PRIVATE");
        },
        public(jwk) {
          const PublicKeyInfo = asn1.get("PublicKeyInfo");
          return PublicKeyInfo.encode({
            algorithm: { algorithm: jwk.crv },
            publicKey: {
              unused: 0,
              data: base64url.decodeToBuffer(jwk.x)
            }
          }, "pem", { label: "PUBLIC KEY" });
        }
      }
    };
    module.exports.jwkToPem = (jwk, { calculateMissingRSAPrimes = false } = {}) => {
      switch (jwk.kty) {
        case "EC":
          if (!EC_CURVES.has(jwk.crv)) {
            throw new errors.JOSENotSupported(`unsupported EC key curve: ${jwk.crv}`);
          }
          break;
        case "OKP":
          if (!OKP_CURVES.has(jwk.crv)) {
            throw new errors.JOSENotSupported(`unsupported OKP key curve: ${jwk.crv}`);
          }
          break;
        case "RSA":
          break;
        default:
          throw new errors.JOSENotSupported(`unsupported key type: ${jwk.kty}`);
      }
      if (jwk.d) {
        return jwkToPem[jwk.kty].private(jwk, { calculateMissingRSAPrimes });
      }
      return jwkToPem[jwk.kty].public(jwk);
    };
  }
});

// node_modules/jose/lib/jwk/thumbprint.js
var require_thumbprint = __commonJS({
  "node_modules/jose/lib/jwk/thumbprint.js"(exports, module) {
    var { createHash } = require_crypto();
    var base64url = require_base64url();
    var x5t = (hash, cert) => base64url.encodeBuffer(createHash(hash).update(Buffer.from(cert, "base64")).digest());
    module.exports.kid = (components) => base64url.encodeBuffer(createHash("sha256").update(JSON.stringify(components)).digest());
    module.exports.x5t = x5t.bind(void 0, "sha1");
    module.exports["x5t#S256"] = x5t.bind(void 0, "sha256");
  }
});

// node_modules/jose/lib/jwk/key/base.js
var require_base2 = __commonJS({
  "node_modules/jose/lib/jwk/key/base.js"(exports, module) {
    var { strict: assert } = require_assert();
    var { inspect } = require_util();
    var { EOL } = require_os();
    var { keyObjectSupported } = require_runtime_support();
    var { createPublicKey } = require_key_object();
    var { keyObjectToJWK } = require_key_utils();
    var {
      THUMBPRINT_MATERIAL,
      PUBLIC_MEMBERS,
      PRIVATE_MEMBERS,
      JWK_MEMBERS,
      KEYOBJECT,
      USES_MAPPING,
      OPS,
      USES
    } = require_consts();
    var isObject = require_is_object();
    var thumbprint = require_thumbprint();
    var errors = require_errors();
    var privateApi = Symbol("privateApi");
    var { JWK } = require_registry();
    var Key = class {
      constructor(keyObject, { alg, use, kid, key_ops: ops, x5c, x5t, "x5t#S256": x5t256 } = {}) {
        if (use !== void 0) {
          if (typeof use !== "string" || !USES.has(use)) {
            throw new TypeError('`use` must be either "sig" or "enc" string when provided');
          }
        }
        if (alg !== void 0) {
          if (typeof alg !== "string" || !alg) {
            throw new TypeError("`alg` must be a non-empty string when provided");
          }
        }
        if (kid !== void 0) {
          if (typeof kid !== "string" || !kid) {
            throw new TypeError("`kid` must be a non-empty string when provided");
          }
        }
        if (ops !== void 0) {
          if (!Array.isArray(ops) || !ops.length || ops.some((o) => typeof o !== "string")) {
            throw new TypeError("`key_ops` must be a non-empty array of strings when provided");
          }
          ops = Array.from(new Set(ops)).filter((x) => OPS.has(x));
        }
        if (ops && use) {
          if (use === "enc" && ops.some((x) => USES_MAPPING.sig.has(x)) || use === "sig" && ops.some((x) => USES_MAPPING.enc.has(x))) {
            throw new errors.JWKInvalid('inconsistent JWK "use" and "key_ops"');
          }
        }
        if (keyObjectSupported && x5c !== void 0) {
          if (!Array.isArray(x5c) || !x5c.length || x5c.some((c) => typeof c !== "string")) {
            throw new TypeError("`x5c` must be an array of one or more PKIX certificates when provided");
          }
          x5c.forEach((cert, i) => {
            let publicKey;
            try {
              publicKey = createPublicKey({
                key: `-----BEGIN CERTIFICATE-----${EOL}${(cert.match(/.{1,64}/g) || []).join(EOL)}${EOL}-----END CERTIFICATE-----`,
                format: "pem"
              });
            } catch (err) {
              throw new errors.JWKInvalid(`\`x5c\` member at index ${i} is not a valid base64-encoded DER PKIX certificate`);
            }
            if (i === 0) {
              try {
                assert.deepEqual(
                  publicKey.export({ type: "spki", format: "der" }),
                  (keyObject.type === "public" ? keyObject : createPublicKey(keyObject)).export({ type: "spki", format: "der" })
                );
              } catch (err) {
                throw new errors.JWKInvalid("The key in the first `x5c` certificate MUST match the public key represented by the JWK");
              }
            }
          });
        }
        Object.defineProperties(this, {
          [KEYOBJECT]: { value: isObject(keyObject) ? void 0 : keyObject },
          keyObject: {
            get() {
              if (!keyObjectSupported) {
                throw new errors.JOSENotSupported("KeyObject class is not supported in your Node.js runtime version");
              }
              return this[KEYOBJECT];
            }
          },
          type: { value: keyObject.type },
          private: { value: keyObject.type === "private" },
          public: { value: keyObject.type === "public" },
          secret: { value: keyObject.type === "secret" },
          alg: { value: alg, enumerable: alg !== void 0 },
          use: { value: use, enumerable: use !== void 0 },
          x5c: {
            enumerable: x5c !== void 0,
            ...x5c ? { get() {
              return [...x5c];
            } } : { value: void 0 }
          },
          key_ops: {
            enumerable: ops !== void 0,
            ...ops ? { get() {
              return [...ops];
            } } : { value: void 0 }
          },
          kid: {
            enumerable: true,
            ...kid ? { value: kid } : {
              get() {
                Object.defineProperty(this, "kid", { value: this.thumbprint, configurable: false });
                return this.kid;
              },
              configurable: true
            }
          },
          ...x5c ? {
            x5t: {
              enumerable: true,
              ...x5t ? { value: x5t } : {
                get() {
                  Object.defineProperty(this, "x5t", { value: thumbprint.x5t(this.x5c[0]), configurable: false });
                  return this.x5t;
                },
                configurable: true
              }
            }
          } : void 0,
          ...x5c ? {
            "x5t#S256": {
              enumerable: true,
              ...x5t256 ? { value: x5t256 } : {
                get() {
                  Object.defineProperty(this, "x5t#S256", { value: thumbprint["x5t#S256"](this.x5c[0]), configurable: false });
                  return this["x5t#S256"];
                },
                configurable: true
              }
            }
          } : void 0,
          thumbprint: {
            get() {
              Object.defineProperty(this, "thumbprint", { value: thumbprint.kid(this[THUMBPRINT_MATERIAL]()), configurable: false });
              return this.thumbprint;
            },
            configurable: true
          }
        });
      }
      toPEM(priv = false, encoding = {}) {
        if (this.secret) {
          throw new TypeError("symmetric keys cannot be exported as PEM");
        }
        if (priv && this.public === true) {
          throw new TypeError("public key cannot be exported as private");
        }
        const { type = priv ? "pkcs8" : "spki", cipher, passphrase } = encoding;
        let keyObject = this[KEYOBJECT];
        if (!priv) {
          if (this.private) {
            keyObject = createPublicKey(keyObject);
          }
          if (cipher || passphrase) {
            throw new TypeError("cipher and passphrase can only be applied when exporting private keys");
          }
        }
        if (priv) {
          return keyObject.export({ format: "pem", type, cipher, passphrase });
        }
        return keyObject.export({ format: "pem", type });
      }
      toJWK(priv = false) {
        if (priv && this.public === true) {
          throw new TypeError("public key cannot be exported as private");
        }
        const components = [...this.constructor[priv ? PRIVATE_MEMBERS : PUBLIC_MEMBERS]].map((k) => [k, this[k]]);
        const result = {};
        Object.keys(components).forEach((key) => {
          const [k, v] = components[key];
          result[k] = v;
        });
        result.kty = this.kty;
        result.kid = this.kid;
        if (this.alg) {
          result.alg = this.alg;
        }
        if (this.key_ops && this.key_ops.length) {
          result.key_ops = this.key_ops;
        }
        if (this.use) {
          result.use = this.use;
        }
        if (this.x5c) {
          result.x5c = this.x5c;
        }
        if (this.x5t) {
          result.x5t = this.x5t;
        }
        if (this["x5t#S256"]) {
          result["x5t#S256"] = this["x5t#S256"];
        }
        return result;
      }
      [JWK_MEMBERS]() {
        const props = this[KEYOBJECT].type === "private" ? this.constructor[PRIVATE_MEMBERS] : this.constructor[PUBLIC_MEMBERS];
        Object.defineProperties(this, [...props].reduce((acc, component) => {
          acc[component] = {
            get() {
              const jwk = keyObjectToJWK(this[KEYOBJECT]);
              Object.defineProperties(
                this,
                Object.entries(jwk).filter(([key]) => props.has(key)).reduce((acc2, [key, value]) => {
                  acc2[key] = { value, enumerable: this.constructor[PUBLIC_MEMBERS].has(key), configurable: false };
                  return acc2;
                }, {})
              );
              return this[component];
            },
            enumerable: this.constructor[PUBLIC_MEMBERS].has(component),
            configurable: true
          };
          return acc;
        }, {}));
      }
      [inspect.custom]() {
        return `${this.constructor.name} ${inspect(this.toJWK(false), {
          depth: Infinity,
          colors: process.stdout.isTTY,
          compact: false,
          sorted: true
        })}`;
      }
      [THUMBPRINT_MATERIAL]() {
        throw new Error(`"[THUMBPRINT_MATERIAL]()" is not implemented on ${this.constructor.name}`);
      }
      algorithms(operation, int, opts) {
        const { use = this.use, alg = this.alg, key_ops: ops = this.key_ops } = int === privateApi ? opts : {};
        if (alg) {
          return new Set(this.algorithms(operation, privateApi, { alg: null, use, key_ops: ops }).has(alg) ? [alg] : void 0);
        }
        if (typeof operation === "symbol") {
          try {
            return this[operation]();
          } catch (err) {
            return /* @__PURE__ */ new Set();
          }
        }
        if (operation && ops && !ops.includes(operation)) {
          return /* @__PURE__ */ new Set();
        }
        switch (operation) {
          case "decrypt":
          case "deriveKey":
          case "encrypt":
          case "sign":
          case "unwrapKey":
          case "verify":
          case "wrapKey":
            return new Set(Object.entries(JWK[this.kty][operation]).map(([alg2, fn]) => fn(this) ? alg2 : void 0).filter(Boolean));
          case void 0:
            return /* @__PURE__ */ new Set([
              ...this.algorithms("sign"),
              ...this.algorithms("verify"),
              ...this.algorithms("decrypt"),
              ...this.algorithms("encrypt"),
              ...this.algorithms("unwrapKey"),
              ...this.algorithms("wrapKey"),
              ...this.algorithms("deriveKey")
            ]);
          default:
            throw new TypeError("invalid key operation");
        }
      }
      static async generate() {
        throw new Error(`"static async generate()" is not implemented on ${this.name}`);
      }
      static generateSync() {
        throw new Error(`"static generateSync()" is not implemented on ${this.name}`);
      }
      static get [PUBLIC_MEMBERS]() {
        throw new Error(`"static get [PUBLIC_MEMBERS]()" is not implemented on ${this.name}`);
      }
      static get [PRIVATE_MEMBERS]() {
        throw new Error(`"static get [PRIVATE_MEMBERS]()" is not implemented on ${this.name}`);
      }
    };
    module.exports = Key;
  }
});

// node_modules/jose/lib/jwk/key/rsa.js
var require_rsa = __commonJS({
  "node_modules/jose/lib/jwk/key/rsa.js"(exports, module) {
    var { generateKeyPairSync, generateKeyPair: async } = require_crypto();
    var { promisify } = require_util();
    var {
      THUMBPRINT_MATERIAL,
      JWK_MEMBERS,
      PUBLIC_MEMBERS,
      PRIVATE_MEMBERS,
      KEY_MANAGEMENT_DECRYPT,
      KEY_MANAGEMENT_ENCRYPT
    } = require_consts();
    var { keyObjectSupported } = require_runtime_support();
    var { createPublicKey, createPrivateKey } = require_key_object();
    var Key = require_base2();
    var generateKeyPair = promisify(async);
    var RSA_PUBLIC = /* @__PURE__ */ new Set(["e", "n"]);
    Object.freeze(RSA_PUBLIC);
    var RSA_PRIVATE = /* @__PURE__ */ new Set([...RSA_PUBLIC, "d", "p", "q", "dp", "dq", "qi"]);
    Object.freeze(RSA_PRIVATE);
    var RSAKey = class extends Key {
      constructor(...args) {
        super(...args);
        this[JWK_MEMBERS]();
        Object.defineProperties(this, {
          kty: {
            value: "RSA",
            enumerable: true
          },
          length: {
            get() {
              Object.defineProperty(this, "length", {
                value: Buffer.byteLength(this.n, "base64") * 8,
                configurable: false
              });
              return this.length;
            },
            configurable: true
          }
        });
      }
      static get [PUBLIC_MEMBERS]() {
        return RSA_PUBLIC;
      }
      static get [PRIVATE_MEMBERS]() {
        return RSA_PRIVATE;
      }
      [THUMBPRINT_MATERIAL]() {
        return { e: this.e, kty: "RSA", n: this.n };
      }
      [KEY_MANAGEMENT_ENCRYPT]() {
        return this.algorithms("wrapKey");
      }
      [KEY_MANAGEMENT_DECRYPT]() {
        return this.algorithms("unwrapKey");
      }
      static async generate(len = 2048, privat = true) {
        if (!Number.isSafeInteger(len) || len < 512 || len % 8 !== 0 || "electron" in process.versions && len % 128 !== 0) {
          throw new TypeError("invalid bit length");
        }
        let privateKey, publicKey;
        if (keyObjectSupported) {
          ({ privateKey, publicKey } = await generateKeyPair("rsa", { modulusLength: len }));
          return privat ? privateKey : publicKey;
        }
        ({ privateKey, publicKey } = await generateKeyPair("rsa", {
          modulusLength: len,
          publicKeyEncoding: { type: "spki", format: "pem" },
          privateKeyEncoding: { type: "pkcs8", format: "pem" }
        }));
        if (privat) {
          return createPrivateKey(privateKey);
        } else {
          return createPublicKey(publicKey);
        }
      }
      static generateSync(len = 2048, privat = true) {
        if (!Number.isSafeInteger(len) || len < 512 || len % 8 !== 0 || "electron" in process.versions && len % 128 !== 0) {
          throw new TypeError("invalid bit length");
        }
        let privateKey, publicKey;
        if (keyObjectSupported) {
          ({ privateKey, publicKey } = generateKeyPairSync("rsa", { modulusLength: len }));
          return privat ? privateKey : publicKey;
        }
        ({ privateKey, publicKey } = generateKeyPairSync("rsa", {
          modulusLength: len,
          publicKeyEncoding: { type: "spki", format: "pem" },
          privateKeyEncoding: { type: "pkcs8", format: "pem" }
        }));
        if (privat) {
          return createPrivateKey(privateKey);
        } else {
          return createPublicKey(publicKey);
        }
      }
    };
    module.exports = RSAKey;
  }
});

// node_modules/jose/lib/jwk/key/ec.js
var require_ec = __commonJS({
  "node_modules/jose/lib/jwk/key/ec.js"(exports, module) {
    var { generateKeyPairSync, generateKeyPair: async } = require_crypto();
    var { promisify } = require_util();
    var {
      THUMBPRINT_MATERIAL,
      JWK_MEMBERS,
      PUBLIC_MEMBERS,
      PRIVATE_MEMBERS,
      KEY_MANAGEMENT_DECRYPT,
      KEY_MANAGEMENT_ENCRYPT
    } = require_consts();
    var { EC_CURVES } = require_registry();
    var { keyObjectSupported } = require_runtime_support();
    var { createPublicKey, createPrivateKey } = require_key_object();
    var errors = require_errors();
    var Key = require_base2();
    var generateKeyPair = promisify(async);
    var EC_PUBLIC = /* @__PURE__ */ new Set(["crv", "x", "y"]);
    Object.freeze(EC_PUBLIC);
    var EC_PRIVATE = /* @__PURE__ */ new Set([...EC_PUBLIC, "d"]);
    Object.freeze(EC_PRIVATE);
    var ECKey = class extends Key {
      constructor(...args) {
        super(...args);
        this[JWK_MEMBERS]();
        Object.defineProperty(this, "kty", { value: "EC", enumerable: true });
        if (!EC_CURVES.has(this.crv)) {
          throw new errors.JOSENotSupported("unsupported EC key curve");
        }
      }
      static get [PUBLIC_MEMBERS]() {
        return EC_PUBLIC;
      }
      static get [PRIVATE_MEMBERS]() {
        return EC_PRIVATE;
      }
      [THUMBPRINT_MATERIAL]() {
        return { crv: this.crv, kty: "EC", x: this.x, y: this.y };
      }
      [KEY_MANAGEMENT_ENCRYPT]() {
        return this.algorithms("deriveKey");
      }
      [KEY_MANAGEMENT_DECRYPT]() {
        if (this.public) {
          return /* @__PURE__ */ new Set();
        }
        return this.algorithms("deriveKey");
      }
      static async generate(crv = "P-256", privat = true) {
        if (!EC_CURVES.has(crv)) {
          throw new errors.JOSENotSupported(`unsupported EC key curve: ${crv}`);
        }
        let privateKey, publicKey;
        if (keyObjectSupported) {
          ({ privateKey, publicKey } = await generateKeyPair("ec", { namedCurve: crv }));
          return privat ? privateKey : publicKey;
        }
        ({ privateKey, publicKey } = await generateKeyPair("ec", {
          namedCurve: crv,
          publicKeyEncoding: { type: "spki", format: "pem" },
          privateKeyEncoding: { type: "pkcs8", format: "pem" }
        }));
        if (privat) {
          return createPrivateKey(privateKey);
        } else {
          return createPublicKey(publicKey);
        }
      }
      static generateSync(crv = "P-256", privat = true) {
        if (!EC_CURVES.has(crv)) {
          throw new errors.JOSENotSupported(`unsupported EC key curve: ${crv}`);
        }
        let privateKey, publicKey;
        if (keyObjectSupported) {
          ({ privateKey, publicKey } = generateKeyPairSync("ec", { namedCurve: crv }));
          return privat ? privateKey : publicKey;
        }
        ({ privateKey, publicKey } = generateKeyPairSync("ec", {
          namedCurve: crv,
          publicKeyEncoding: { type: "spki", format: "pem" },
          privateKeyEncoding: { type: "pkcs8", format: "pem" }
        }));
        if (privat) {
          return createPrivateKey(privateKey);
        } else {
          return createPublicKey(publicKey);
        }
      }
    };
    module.exports = ECKey;
  }
});

// node_modules/jose/lib/jwk/key/okp.js
var require_okp = __commonJS({
  "node_modules/jose/lib/jwk/key/okp.js"(exports, module) {
    var { generateKeyPairSync, generateKeyPair: async } = require_crypto();
    var { promisify } = require_util();
    var {
      THUMBPRINT_MATERIAL,
      JWK_MEMBERS,
      PUBLIC_MEMBERS,
      PRIVATE_MEMBERS,
      KEY_MANAGEMENT_DECRYPT,
      KEY_MANAGEMENT_ENCRYPT
    } = require_consts();
    var { OKP_CURVES } = require_registry();
    var { edDSASupported } = require_runtime_support();
    var errors = require_errors();
    var Key = require_base2();
    var generateKeyPair = promisify(async);
    var OKP_PUBLIC = /* @__PURE__ */ new Set(["crv", "x"]);
    Object.freeze(OKP_PUBLIC);
    var OKP_PRIVATE = /* @__PURE__ */ new Set([...OKP_PUBLIC, "d"]);
    Object.freeze(OKP_PRIVATE);
    var OKPKey = class extends Key {
      constructor(...args) {
        super(...args);
        this[JWK_MEMBERS]();
        Object.defineProperty(this, "kty", { value: "OKP", enumerable: true });
        if (!OKP_CURVES.has(this.crv)) {
          throw new errors.JOSENotSupported("unsupported OKP key curve");
        }
      }
      static get [PUBLIC_MEMBERS]() {
        return OKP_PUBLIC;
      }
      static get [PRIVATE_MEMBERS]() {
        return OKP_PRIVATE;
      }
      [THUMBPRINT_MATERIAL]() {
        return { crv: this.crv, kty: "OKP", x: this.x };
      }
      [KEY_MANAGEMENT_ENCRYPT]() {
        return this.algorithms("deriveKey");
      }
      [KEY_MANAGEMENT_DECRYPT]() {
        if (this.public) {
          return /* @__PURE__ */ new Set();
        }
        return this.algorithms("deriveKey");
      }
      static async generate(crv = "Ed25519", privat = true) {
        if (!edDSASupported) {
          throw new errors.JOSENotSupported("OKP keys are not supported in your Node.js runtime version");
        }
        if (!OKP_CURVES.has(crv)) {
          throw new errors.JOSENotSupported(`unsupported OKP key curve: ${crv}`);
        }
        const { privateKey, publicKey } = await generateKeyPair(crv.toLowerCase());
        return privat ? privateKey : publicKey;
      }
      static generateSync(crv = "Ed25519", privat = true) {
        if (!edDSASupported) {
          throw new errors.JOSENotSupported("OKP keys are not supported in your Node.js runtime version");
        }
        if (!OKP_CURVES.has(crv)) {
          throw new errors.JOSENotSupported(`unsupported OKP key curve: ${crv}`);
        }
        const { privateKey, publicKey } = generateKeyPairSync(crv.toLowerCase());
        return privat ? privateKey : publicKey;
      }
    };
    module.exports = OKPKey;
  }
});

// node_modules/jose/lib/jwk/key/oct.js
var require_oct = __commonJS({
  "node_modules/jose/lib/jwk/key/oct.js"(exports, module) {
    var { randomBytes } = require_crypto();
    var { createSecretKey } = require_key_object();
    var base64url = require_base64url();
    var {
      THUMBPRINT_MATERIAL,
      PUBLIC_MEMBERS,
      PRIVATE_MEMBERS,
      KEY_MANAGEMENT_DECRYPT,
      KEY_MANAGEMENT_ENCRYPT,
      KEYOBJECT
    } = require_consts();
    var Key = require_base2();
    var OCT_PUBLIC = /* @__PURE__ */ new Set();
    Object.freeze(OCT_PUBLIC);
    var OCT_PRIVATE = /* @__PURE__ */ new Set(["k"]);
    Object.freeze(OCT_PRIVATE);
    var OctKey = class extends Key {
      constructor(...args) {
        super(...args);
        Object.defineProperties(this, {
          kty: {
            value: "oct",
            enumerable: true
          },
          length: {
            value: this[KEYOBJECT] ? this[KEYOBJECT].symmetricKeySize * 8 : void 0
          },
          k: {
            enumerable: false,
            get() {
              if (this[KEYOBJECT]) {
                Object.defineProperty(this, "k", {
                  value: base64url.encodeBuffer(this[KEYOBJECT].export()),
                  configurable: false
                });
              } else {
                Object.defineProperty(this, "k", {
                  value: void 0,
                  configurable: false
                });
              }
              return this.k;
            },
            configurable: true
          }
        });
      }
      static get [PUBLIC_MEMBERS]() {
        return OCT_PUBLIC;
      }
      static get [PRIVATE_MEMBERS]() {
        return OCT_PRIVATE;
      }
      [THUMBPRINT_MATERIAL]() {
        if (!this[KEYOBJECT]) {
          throw new TypeError('reference "oct" keys without "k" cannot have their thumbprint calculated');
        }
        return { k: this.k, kty: "oct" };
      }
      [KEY_MANAGEMENT_ENCRYPT]() {
        return /* @__PURE__ */ new Set([
          ...this.algorithms("wrapKey"),
          ...this.algorithms("deriveKey")
        ]);
      }
      [KEY_MANAGEMENT_DECRYPT]() {
        return this[KEY_MANAGEMENT_ENCRYPT]();
      }
      algorithms(...args) {
        if (!this[KEYOBJECT]) {
          return /* @__PURE__ */ new Set();
        }
        return Key.prototype.algorithms.call(this, ...args);
      }
      static async generate(...args) {
        return this.generateSync(...args);
      }
      static generateSync(len = 256, privat = true) {
        if (!privat) {
          throw new TypeError('"oct" keys cannot be generated as public');
        }
        if (!Number.isSafeInteger(len) || !len || len % 8 !== 0) {
          throw new TypeError("invalid bit length");
        }
        return createSecretKey(randomBytes(len / 8));
      }
    };
    module.exports = OctKey;
  }
});

// node_modules/jose/lib/jwk/import.js
var require_import = __commonJS({
  "node_modules/jose/lib/jwk/import.js"(exports, module) {
    var { createPublicKey, createPrivateKey, createSecretKey, KeyObject } = require_key_object();
    var base64url = require_base64url();
    var isObject = require_is_object();
    var { jwkToPem } = require_key_utils();
    var errors = require_errors();
    var RSAKey = require_rsa();
    var ECKey = require_ec();
    var OKPKey = require_okp();
    var OctKey = require_oct();
    var importable = /* @__PURE__ */ new Set(["string", "buffer", "object"]);
    var mergedParameters = (target = {}, source = {}) => {
      return {
        alg: source.alg,
        key_ops: source.key_ops,
        kid: source.kid,
        use: source.use,
        x5c: source.x5c,
        x5t: source.x5t,
        "x5t#S256": source["x5t#S256"],
        ...target
      };
    };
    var openSSHpublicKey = /^[a-zA-Z0-9-]+ AAAA(?:[0-9A-Za-z+/])+(?:==|=)?(?: .*)?$/;
    var asKey = (key, parameters, { calculateMissingRSAPrimes = false } = {}) => {
      let privateKey, publicKey, secret;
      if (!importable.has(typeof key)) {
        throw new TypeError("key argument must be a string, buffer or an object");
      }
      if (parameters !== void 0 && !isObject(parameters)) {
        throw new TypeError("parameters argument must be a plain object when provided");
      }
      if (key instanceof KeyObject) {
        switch (key.type) {
          case "private":
            privateKey = key;
            break;
          case "public":
            publicKey = key;
            break;
          case "secret":
            secret = key;
            break;
        }
      } else if (typeof key === "object" && key && "kty" in key && key.kty === "oct") {
        try {
          secret = createSecretKey(base64url.decodeToBuffer(key.k));
        } catch (err) {
          if (!("k" in key)) {
            secret = { type: "secret" };
          }
        }
        parameters = mergedParameters(parameters, key);
      } else if (typeof key === "object" && key && "kty" in key) {
        ({ calculateMissingRSAPrimes = false } = parameters || { calculateMissingRSAPrimes });
        let pem;
        try {
          pem = jwkToPem(key, { calculateMissingRSAPrimes });
        } catch (err) {
          if (err instanceof errors.JOSEError) {
            throw err;
          }
        }
        if (pem && key.d) {
          privateKey = createPrivateKey(pem);
        } else if (pem) {
          publicKey = createPublicKey(pem);
        }
        parameters = mergedParameters({}, key);
      } else if (key && (typeof key === "object" || typeof key === "string")) {
        try {
          privateKey = createPrivateKey(key);
        } catch (err) {
          if (err instanceof errors.JOSEError) {
            throw err;
          }
        }
        try {
          publicKey = createPublicKey(key);
          if (key.startsWith("-----BEGIN CERTIFICATE-----") && (!parameters || !("x5c" in parameters))) {
            parameters = mergedParameters(parameters, {
              x5c: [key.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, "")]
            });
          }
        } catch (err) {
          if (err instanceof errors.JOSEError) {
            throw err;
          }
        }
        try {
          if (!key.includes("-----BEGIN") && !openSSHpublicKey.test(key.toString("ascii").replace(/[\r\n]/g, ""))) {
            secret = createSecretKey(Buffer.isBuffer(key) ? key : Buffer.from(key));
          }
        } catch (err) {
        }
      }
      const keyObject = privateKey || publicKey || secret;
      if (privateKey || publicKey) {
        switch (keyObject.asymmetricKeyType) {
          case "rsa":
            return new RSAKey(keyObject, parameters);
          case "ec":
            return new ECKey(keyObject, parameters);
          case "ed25519":
          case "ed448":
          case "x25519":
          case "x448":
            return new OKPKey(keyObject, parameters);
          default:
            throw new errors.JOSENotSupported("only RSA, EC and OKP asymmetric keys are supported");
        }
      } else if (secret) {
        return new OctKey(keyObject, parameters);
      }
      throw new errors.JWKImportFailed("key import failed");
    };
    module.exports = asKey;
  }
});

// node_modules/jose/lib/jwk/generate.js
var require_generate = __commonJS({
  "node_modules/jose/lib/jwk/generate.js"(exports, module) {
    var errors = require_errors();
    var importKey = require_import();
    var RSAKey = require_rsa();
    var ECKey = require_ec();
    var OKPKey = require_okp();
    var OctKey = require_oct();
    var generate = async (kty, crvOrSize, params, generatePrivate = true) => {
      switch (kty) {
        case "RSA":
          return importKey(
            await RSAKey.generate(crvOrSize, generatePrivate),
            params
          );
        case "EC":
          return importKey(
            await ECKey.generate(crvOrSize, generatePrivate),
            params
          );
        case "OKP":
          return importKey(
            await OKPKey.generate(crvOrSize, generatePrivate),
            params
          );
        case "oct":
          return importKey(
            await OctKey.generate(crvOrSize, generatePrivate),
            params
          );
        default:
          throw new errors.JOSENotSupported(`unsupported key type: ${kty}`);
      }
    };
    var generateSync = (kty, crvOrSize, params, generatePrivate = true) => {
      switch (kty) {
        case "RSA":
          return importKey(RSAKey.generateSync(crvOrSize, generatePrivate), params);
        case "EC":
          return importKey(ECKey.generateSync(crvOrSize, generatePrivate), params);
        case "OKP":
          return importKey(OKPKey.generateSync(crvOrSize, generatePrivate), params);
        case "oct":
          return importKey(OctKey.generateSync(crvOrSize, generatePrivate), params);
        default:
          throw new errors.JOSENotSupported(`unsupported key type: ${kty}`);
      }
    };
    module.exports.generate = generate;
    module.exports.generateSync = generateSync;
  }
});

// node_modules/jose/lib/jwk/key/none.js
var require_none = __commonJS({
  "node_modules/jose/lib/jwk/key/none.js"(exports, module) {
    var { inspect } = require_util();
    var Key = require_base2();
    var NoneKey = class extends Key {
      constructor() {
        super({ type: "unsecured" }, { alg: "none" });
        Object.defineProperties(this, {
          kid: { value: void 0 },
          kty: { value: void 0 },
          thumbprint: { value: void 0 },
          toJWK: { value: void 0 },
          toPEM: { value: void 0 }
        });
      }
      [inspect.custom]() {
        return "None {}";
      }
      algorithms(operation) {
        switch (operation) {
          case "sign":
          case "verify":
          case void 0:
            return /* @__PURE__ */ new Set(["none"]);
          default:
            return /* @__PURE__ */ new Set();
        }
      }
    };
    module.exports = new NoneKey();
  }
});

// node_modules/jose/lib/jwk/key/embedded.jwk.js
var require_embedded_jwk = __commonJS({
  "node_modules/jose/lib/jwk/key/embedded.jwk.js"(exports, module) {
    var { inspect } = require_util();
    var Key = require_base2();
    var EmbeddedJWK = class extends Key {
      constructor() {
        super({ type: "embedded" });
        Object.defineProperties(this, {
          kid: { value: void 0 },
          kty: { value: void 0 },
          thumbprint: { value: void 0 },
          toJWK: { value: void 0 },
          toPEM: { value: void 0 }
        });
      }
      [inspect.custom]() {
        return "Embedded.JWK {}";
      }
      algorithms() {
        return /* @__PURE__ */ new Set();
      }
    };
    module.exports = new EmbeddedJWK();
  }
});

// node_modules/jose/lib/jwk/key/embedded.x5c.js
var require_embedded_x5c = __commonJS({
  "node_modules/jose/lib/jwk/key/embedded.x5c.js"(exports, module) {
    var { inspect } = require_util();
    var Key = require_base2();
    var EmbeddedX5C = class extends Key {
      constructor() {
        super({ type: "embedded" });
        Object.defineProperties(this, {
          kid: { value: void 0 },
          kty: { value: void 0 },
          thumbprint: { value: void 0 },
          toJWK: { value: void 0 },
          toPEM: { value: void 0 }
        });
      }
      [inspect.custom]() {
        return "Embedded.X5C {}";
      }
      algorithms() {
        return /* @__PURE__ */ new Set();
      }
    };
    module.exports = new EmbeddedX5C();
  }
});

// node_modules/jose/lib/jwk/index.js
var require_jwk2 = __commonJS({
  "node_modules/jose/lib/jwk/index.js"(exports, module) {
    var Key = require_base2();
    var None = require_none();
    var EmbeddedJWK = require_embedded_jwk();
    var EmbeddedX5C = require_embedded_x5c();
    var importKey = require_import();
    var generate = require_generate();
    module.exports = {
      ...generate,
      asKey: importKey,
      isKey: (input) => input instanceof Key,
      None,
      EmbeddedJWK,
      EmbeddedX5C
    };
  }
});

// node_modules/jose/lib/jwks/keystore.js
var require_keystore = __commonJS({
  "node_modules/jose/lib/jwks/keystore.js"(exports, module) {
    var { inspect } = require_util();
    var isObject = require_is_object();
    var { generate, generateSync } = require_generate();
    var { USES_MAPPING } = require_consts();
    var { isKey, asKey: importKey } = require_jwk2();
    var keyscore = (key, { alg, use, ops }) => {
      let score = 0;
      if (alg && key.alg) {
        score++;
      }
      if (use && key.use) {
        score++;
      }
      if (ops && key.key_ops) {
        score++;
      }
      return score;
    };
    var KeyStore = class {
      constructor(...keys) {
        while (keys.some(Array.isArray)) {
          keys = keys.flat ? keys.flat() : keys.reduce((acc, val) => {
            if (Array.isArray(val)) {
              return [...acc, ...val];
            }
            acc.push(val);
            return acc;
          }, []);
        }
        if (keys.some((k) => !isKey(k) || !k.kty)) {
          throw new TypeError("all keys must be instances of a key instantiated by JWK.asKey");
        }
        this._keys = new Set(keys);
      }
      all({ alg, kid, thumbprint, use, kty, key_ops: ops, x5t, "x5t#S256": x5t256, crv } = {}) {
        if (ops !== void 0 && (!Array.isArray(ops) || !ops.length || ops.some((x) => typeof x !== "string"))) {
          throw new TypeError("`key_ops` must be a non-empty array of strings");
        }
        const search = { alg, use, ops };
        return [...this._keys].filter((key) => {
          let candidate = true;
          if (candidate && kid !== void 0 && key.kid !== kid) {
            candidate = false;
          }
          if (candidate && thumbprint !== void 0 && key.thumbprint !== thumbprint) {
            candidate = false;
          }
          if (candidate && x5t !== void 0 && key.x5t !== x5t) {
            candidate = false;
          }
          if (candidate && x5t256 !== void 0 && key["x5t#S256"] !== x5t256) {
            candidate = false;
          }
          if (candidate && kty !== void 0 && key.kty !== kty) {
            candidate = false;
          }
          if (candidate && crv !== void 0 && key.crv !== crv) {
            candidate = false;
          }
          if (alg !== void 0 && !key.algorithms().has(alg)) {
            candidate = false;
          }
          if (candidate && use !== void 0 && (key.use !== void 0 && key.use !== use)) {
            candidate = false;
          }
          if (candidate && ops !== void 0 && (key.key_ops !== void 0 || key.use !== void 0)) {
            let keyOps;
            if (key.key_ops) {
              keyOps = new Set(key.key_ops);
            } else {
              keyOps = USES_MAPPING[key.use];
            }
            if (ops.some((x) => !keyOps.has(x))) {
              candidate = false;
            }
          }
          return candidate;
        }).sort((first, second) => keyscore(second, search) - keyscore(first, search));
      }
      get(...args) {
        return this.all(...args)[0];
      }
      add(key) {
        if (!isKey(key) || !key.kty) {
          throw new TypeError("key must be an instance of a key instantiated by JWK.asKey");
        }
        this._keys.add(key);
      }
      remove(key) {
        if (!isKey(key)) {
          throw new TypeError("key must be an instance of a key instantiated by JWK.asKey");
        }
        this._keys.delete(key);
      }
      toJWKS(priv = false) {
        return {
          keys: [...this._keys.values()].map(
            (key) => key.toJWK(priv && (key.private || key.secret && key.k))
          )
        };
      }
      async generate(...args) {
        this._keys.add(await generate(...args));
      }
      generateSync(...args) {
        this._keys.add(generateSync(...args));
      }
      get size() {
        return this._keys.size;
      }
      [inspect.custom]() {
        return `${this.constructor.name} ${inspect(this.toJWKS(false), {
          depth: Infinity,
          colors: process.stdout.isTTY,
          compact: false,
          sorted: true
        })}`;
      }
      *[Symbol.iterator]() {
        for (const key of this._keys) {
          yield key;
        }
      }
    };
    function asKeyStore(jwks, { ignoreErrors = false, calculateMissingRSAPrimes = false } = {}) {
      if (!isObject(jwks) || !Array.isArray(jwks.keys) || jwks.keys.some((k) => !isObject(k) || !("kty" in k))) {
        throw new TypeError("jwks must be a JSON Web Key Set formatted object");
      }
      const keys = jwks.keys.map((jwk) => {
        try {
          return importKey(jwk, { calculateMissingRSAPrimes });
        } catch (err) {
          if (!ignoreErrors) {
            throw err;
          }
          return void 0;
        }
      }).filter(Boolean);
      return new KeyStore(...keys);
    }
    module.exports = { KeyStore, asKeyStore };
  }
});

// node_modules/jose/lib/help/get_key.js
var require_get_key = __commonJS({
  "node_modules/jose/lib/help/get_key.js"(exports, module) {
    var errors = require_errors();
    var Key = require_base2();
    var importKey = require_import();
    var { KeyStore } = require_keystore();
    module.exports = (input, keyStoreAllowed = false) => {
      if (input instanceof Key) {
        return input;
      }
      if (input instanceof KeyStore) {
        if (!keyStoreAllowed) {
          throw new TypeError("key argument for this operation must not be a JWKS.KeyStore instance");
        }
        return input;
      }
      try {
        return importKey(input);
      } catch (err) {
        if (err instanceof errors.JOSEError && !(err instanceof errors.JWKImportFailed)) {
          throw err;
        }
        let msg;
        if (keyStoreAllowed) {
          msg = "key must be an instance of a key instantiated by JWK.asKey, a valid JWK.asKey input, or a JWKS.KeyStore instance";
        } else {
          msg = "key must be an instance of a key instantiated by JWK.asKey, or a valid JWK.asKey input";
        }
        throw new TypeError(msg);
      }
    };
  }
});

// node_modules/jose/lib/help/deep_clone.js
var require_deep_clone = __commonJS({
  "node_modules/jose/lib/help/deep_clone.js"(exports, module) {
    module.exports = (obj) => JSON.parse(JSON.stringify(obj));
  }
});

// node_modules/jose/lib/help/timing_safe_equal.js
var require_timing_safe_equal = __commonJS({
  "node_modules/jose/lib/help/timing_safe_equal.js"(exports, module) {
    var { timingSafeEqual: TSE } = require_crypto();
    var paddedBuffer = (input, length) => {
      if (input.length === length) {
        return input;
      }
      const buffer = Buffer.alloc(length);
      input.copy(buffer);
      return buffer;
    };
    var timingSafeEqual = (a, b) => {
      const length = Math.max(a.length, b.length);
      return TSE(paddedBuffer(a, length), paddedBuffer(b, length));
    };
    module.exports = timingSafeEqual;
  }
});

// node_modules/jose/lib/help/node_alg.js
var require_node_alg = __commonJS({
  "node_modules/jose/lib/help/node_alg.js"(exports, module) {
    module.exports = (alg) => `sha${alg.substr(2, 3)}`;
  }
});

// node_modules/jose/lib/jwa/hmac.js
var require_hmac = __commonJS({
  "node_modules/jose/lib/jwa/hmac.js"(exports, module) {
    var { createHmac } = require_crypto();
    var { KEYOBJECT } = require_consts();
    var timingSafeEqual = require_timing_safe_equal();
    var resolveNodeAlg = require_node_alg();
    var { asInput } = require_key_object();
    var sign = (jwaAlg, hmacAlg, { [KEYOBJECT]: keyObject }, payload) => {
      const hmac = createHmac(hmacAlg, asInput(keyObject, false));
      hmac.update(payload);
      return hmac.digest();
    };
    var verify = (jwaAlg, hmacAlg, key, payload, signature) => {
      const expected = sign(jwaAlg, hmacAlg, key, payload);
      const actual = signature;
      return timingSafeEqual(actual, expected);
    };
    module.exports = (JWA, JWK) => {
      ["HS256", "HS384", "HS512"].forEach((jwaAlg) => {
        const hmacAlg = resolveNodeAlg(jwaAlg);
        JWA.sign.set(jwaAlg, sign.bind(void 0, jwaAlg, hmacAlg));
        JWA.verify.set(jwaAlg, verify.bind(void 0, jwaAlg, hmacAlg));
        JWK.oct.sign[jwaAlg] = JWK.oct.verify[jwaAlg] = (key) => key.use === "sig" || key.use === void 0;
      });
    };
  }
});

// node_modules/jose/lib/help/ecdsa_signatures.js
var require_ecdsa_signatures = __commonJS({
  "node_modules/jose/lib/help/ecdsa_signatures.js"(exports, module) {
    var MAX_OCTET = 128;
    var CLASS_UNIVERSAL = 0;
    var PRIMITIVE_BIT = 32;
    var TAG_SEQ = 16;
    var TAG_INT = 2;
    var ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6;
    var ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
    var getParamSize = (keySize) => (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
    var paramBytesForAlg = {
      ES256: getParamSize(256),
      ES256K: getParamSize(256),
      ES384: getParamSize(384),
      ES512: getParamSize(521)
    };
    var countPadding = (buf, start, stop) => {
      let padding = 0;
      while (start + padding < stop && buf[start + padding] === 0) {
        ++padding;
      }
      const needsSign = buf[start + padding] >= MAX_OCTET;
      if (needsSign) {
        --padding;
      }
      return padding;
    };
    module.exports.derToJose = (signature, alg) => {
      if (!Buffer.isBuffer(signature)) {
        throw new TypeError("ECDSA signature must be a Buffer");
      }
      if (!paramBytesForAlg[alg]) {
        throw new Error(`Unknown algorithm "${alg}"`);
      }
      const paramBytes = paramBytesForAlg[alg];
      const maxEncodedParamLength = paramBytes + 1;
      const inputLength = signature.length;
      let offset = 0;
      if (signature[offset++] !== ENCODED_TAG_SEQ) {
        throw new Error('Could not find expected "seq"');
      }
      let seqLength = signature[offset++];
      if (seqLength === (MAX_OCTET | 1)) {
        seqLength = signature[offset++];
      }
      if (inputLength - offset < seqLength) {
        throw new Error(`"seq" specified length of ${seqLength}", only ${inputLength - offset}" remaining`);
      }
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "r"');
      }
      const rLength = signature[offset++];
      if (inputLength - offset - 2 < rLength) {
        throw new Error(`"r" specified length of "${rLength}", only "${inputLength - offset - 2}" available`);
      }
      if (maxEncodedParamLength < rLength) {
        throw new Error(`"r" specified length of "${rLength}", max of "${maxEncodedParamLength}" is acceptable`);
      }
      const rOffset = offset;
      offset += rLength;
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "s"');
      }
      const sLength = signature[offset++];
      if (inputLength - offset !== sLength) {
        throw new Error(`"s" specified length of "${sLength}", expected "${inputLength - offset}"`);
      }
      if (maxEncodedParamLength < sLength) {
        throw new Error(`"s" specified length of "${sLength}", max of "${maxEncodedParamLength}" is acceptable`);
      }
      const sOffset = offset;
      offset += sLength;
      if (offset !== inputLength) {
        throw new Error(`Expected to consume entire buffer, but "${inputLength - offset}" bytes remain`);
      }
      const rPadding = paramBytes - rLength;
      const sPadding = paramBytes - sLength;
      const dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);
      for (offset = 0; offset < rPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
      offset = paramBytes;
      for (const o = offset; offset < o + sPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
      return dst;
    };
    module.exports.joseToDer = (signature, alg) => {
      if (!Buffer.isBuffer(signature)) {
        throw new TypeError("ECDSA signature must be a Buffer");
      }
      if (!paramBytesForAlg[alg]) {
        throw new TypeError(`Unknown algorithm "${alg}"`);
      }
      const paramBytes = paramBytesForAlg[alg];
      const signatureBytes = signature.length;
      if (signatureBytes !== paramBytes * 2) {
        throw new Error(`"${alg}" signatures must be "${paramBytes * 2}" bytes, saw "${signatureBytes}"`);
      }
      const rPadding = countPadding(signature, 0, paramBytes);
      const sPadding = countPadding(signature, paramBytes, signature.length);
      const rLength = paramBytes - rPadding;
      const sLength = paramBytes - sPadding;
      const rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
      const shortLength = rsBytes < MAX_OCTET;
      const dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
      let offset = 0;
      dst[offset++] = ENCODED_TAG_SEQ;
      if (shortLength) {
        dst[offset++] = rsBytes;
      } else {
        dst[offset++] = MAX_OCTET | 1;
        dst[offset++] = rsBytes & 255;
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = rLength;
      if (rPadding < 0) {
        dst[offset++] = 0;
        offset += signature.copy(dst, offset, 0, paramBytes);
      } else {
        offset += signature.copy(dst, offset, rPadding, paramBytes);
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = sLength;
      if (sPadding < 0) {
        dst[offset++] = 0;
        signature.copy(dst, offset, paramBytes);
      } else {
        signature.copy(dst, offset, paramBytes + sPadding);
      }
      return dst;
    };
  }
});

// node_modules/jose/lib/jwa/ecdsa.js
var require_ecdsa = __commonJS({
  "node_modules/jose/lib/jwa/ecdsa.js"(exports, module) {
    var { sign: signOneShot, verify: verifyOneShot, createSign, createVerify, getCurves } = require_crypto();
    var { derToJose, joseToDer } = require_ecdsa_signatures();
    var { KEYOBJECT } = require_consts();
    var resolveNodeAlg = require_node_alg();
    var { asInput } = require_key_object();
    var { dsaEncodingSupported } = require_runtime_support();
    var sign;
    var verify;
    if (dsaEncodingSupported) {
      sign = (jwaAlg, nodeAlg, { [KEYOBJECT]: keyObject }, payload) => {
        if (typeof payload === "string") {
          payload = Buffer.from(payload);
        }
        return signOneShot(nodeAlg, payload, { key: asInput(keyObject, false), dsaEncoding: "ieee-p1363" });
      };
      verify = (jwaAlg, nodeAlg, { [KEYOBJECT]: keyObject }, payload, signature) => {
        try {
          return verifyOneShot(nodeAlg, payload, { key: asInput(keyObject, true), dsaEncoding: "ieee-p1363" }, signature);
        } catch (err) {
          return false;
        }
      };
    } else {
      sign = (jwaAlg, nodeAlg, { [KEYOBJECT]: keyObject }, payload) => {
        return derToJose(createSign(nodeAlg).update(payload).sign(asInput(keyObject, false)), jwaAlg);
      };
      verify = (jwaAlg, nodeAlg, { [KEYOBJECT]: keyObject }, payload, signature) => {
        try {
          return createVerify(nodeAlg).update(payload).verify(asInput(keyObject, true), joseToDer(signature, jwaAlg));
        } catch (err) {
          return false;
        }
      };
    }
    var crvToAlg = (crv) => {
      switch (crv) {
        case "P-256":
          return "ES256";
        case "secp256k1":
          return "ES256K";
        case "P-384":
          return "ES384";
        case "P-521":
          return "ES512";
      }
    };
    module.exports = (JWA, JWK) => {
      const algs = [];
      if (getCurves().includes("prime256v1")) {
        algs.push("ES256");
      }
      if (getCurves().includes("secp256k1")) {
        algs.push("ES256K");
      }
      if (getCurves().includes("secp384r1")) {
        algs.push("ES384");
      }
      if (getCurves().includes("secp521r1")) {
        algs.push("ES512");
      }
      algs.forEach((jwaAlg) => {
        const nodeAlg = resolveNodeAlg(jwaAlg);
        JWA.sign.set(jwaAlg, sign.bind(void 0, jwaAlg, nodeAlg));
        JWA.verify.set(jwaAlg, verify.bind(void 0, jwaAlg, nodeAlg));
        JWK.EC.sign[jwaAlg] = (key) => key.private && JWK.EC.verify[jwaAlg](key);
        JWK.EC.verify[jwaAlg] = (key) => (key.use === "sig" || key.use === void 0) && crvToAlg(key.crv) === jwaAlg;
      });
    };
  }
});

// node_modules/jose/lib/jwa/eddsa.js
var require_eddsa = __commonJS({
  "node_modules/jose/lib/jwa/eddsa.js"(exports, module) {
    var { sign: signOneShot, verify: verifyOneShot } = require_crypto();
    var { KEYOBJECT } = require_consts();
    var { edDSASupported } = require_runtime_support();
    var sign = ({ [KEYOBJECT]: keyObject }, payload) => {
      if (typeof payload === "string") {
        payload = Buffer.from(payload);
      }
      return signOneShot(void 0, payload, keyObject);
    };
    var verify = ({ [KEYOBJECT]: keyObject }, payload, signature) => {
      return verifyOneShot(void 0, payload, keyObject, signature);
    };
    module.exports = (JWA, JWK) => {
      if (edDSASupported) {
        JWA.sign.set("EdDSA", sign);
        JWA.verify.set("EdDSA", verify);
        JWK.OKP.sign.EdDSA = (key) => key.private && JWK.OKP.verify.EdDSA(key);
        JWK.OKP.verify.EdDSA = (key) => (key.use === "sig" || key.use === void 0) && key.keyObject.asymmetricKeyType.startsWith("ed");
      }
    };
  }
});

// node_modules/jose/lib/jwa/rsassa_pss.js
var require_rsassa_pss = __commonJS({
  "node_modules/jose/lib/jwa/rsassa_pss.js"(exports, module) {
    var {
      createSign,
      createVerify,
      constants
    } = require_crypto();
    var { KEYOBJECT } = require_consts();
    var resolveNodeAlg = require_node_alg();
    var { asInput } = require_key_object();
    var sign = (nodeAlg, { [KEYOBJECT]: keyObject }, payload) => {
      const key = asInput(keyObject, false);
      return createSign(nodeAlg).update(payload).sign({
        key,
        padding: constants.RSA_PKCS1_PSS_PADDING,
        saltLength: constants.RSA_PSS_SALTLEN_DIGEST
      });
    };
    var verify = (nodeAlg, { [KEYOBJECT]: keyObject }, payload, signature) => {
      const key = asInput(keyObject, true);
      return createVerify(nodeAlg).update(payload).verify({
        key,
        padding: constants.RSA_PKCS1_PSS_PADDING,
        saltLength: constants.RSA_PSS_SALTLEN_DIGEST
      }, signature);
    };
    var LENGTHS = {
      PS256: 528,
      PS384: 784,
      PS512: 1040
    };
    module.exports = (JWA, JWK) => {
      ["PS256", "PS384", "PS512"].forEach((jwaAlg) => {
        const nodeAlg = resolveNodeAlg(jwaAlg);
        JWA.sign.set(jwaAlg, sign.bind(void 0, nodeAlg));
        JWA.verify.set(jwaAlg, verify.bind(void 0, nodeAlg));
        JWK.RSA.sign[jwaAlg] = (key) => key.private && JWK.RSA.verify[jwaAlg](key);
        JWK.RSA.verify[jwaAlg] = (key) => (key.use === "sig" || key.use === void 0) && key.length >= LENGTHS[jwaAlg];
      });
    };
  }
});

// node_modules/jose/lib/jwa/rsassa.js
var require_rsassa = __commonJS({
  "node_modules/jose/lib/jwa/rsassa.js"(exports, module) {
    var { createSign, createVerify } = require_crypto();
    var { KEYOBJECT } = require_consts();
    var resolveNodeAlg = require_node_alg();
    var { asInput } = require_key_object();
    var sign = (nodeAlg, { [KEYOBJECT]: keyObject }, payload) => {
      return createSign(nodeAlg).update(payload).sign(asInput(keyObject, false));
    };
    var verify = (nodeAlg, { [KEYOBJECT]: keyObject }, payload, signature) => {
      return createVerify(nodeAlg).update(payload).verify(asInput(keyObject, true), signature);
    };
    var LENGTHS = {
      RS256: 0,
      RS384: 624,
      RS512: 752
    };
    module.exports = (JWA, JWK) => {
      ["RS256", "RS384", "RS512"].forEach((jwaAlg) => {
        const nodeAlg = resolveNodeAlg(jwaAlg);
        JWA.sign.set(jwaAlg, sign.bind(void 0, nodeAlg));
        JWA.verify.set(jwaAlg, verify.bind(void 0, nodeAlg));
        JWK.RSA.sign[jwaAlg] = (key) => key.private && JWK.RSA.verify[jwaAlg](key);
        JWK.RSA.verify[jwaAlg] = (key) => (key.use === "sig" || key.use === void 0) && key.length >= LENGTHS[jwaAlg];
      });
    };
  }
});

// node_modules/jose/lib/jwa/none.js
var require_none2 = __commonJS({
  "node_modules/jose/lib/jwa/none.js"(exports, module) {
    var sign = () => Buffer.from("");
    var verify = (key, payload, signature) => !signature.length;
    module.exports = (JWA, JWK) => {
      JWA.sign.set("none", sign);
      JWA.verify.set("none", verify);
    };
  }
});

// node_modules/jose/lib/help/uint64be.js
var require_uint64be = __commonJS({
  "node_modules/jose/lib/help/uint64be.js"(exports, module) {
    var MAX_INT32 = Math.pow(2, 32);
    module.exports = (value, buf = Buffer.allocUnsafe(8)) => {
      const high = Math.floor(value / MAX_INT32);
      const low = value % MAX_INT32;
      buf.writeUInt32BE(high, 0);
      buf.writeUInt32BE(low, 4);
      return buf;
    };
  }
});

// node_modules/jose/lib/jwa/aes_cbc_hmac_sha2.js
var require_aes_cbc_hmac_sha2 = __commonJS({
  "node_modules/jose/lib/jwa/aes_cbc_hmac_sha2.js"(exports, module) {
    var { createCipheriv, createDecipheriv, getCiphers } = require_crypto();
    var uint64be = require_uint64be();
    var timingSafeEqual = require_timing_safe_equal();
    var { KEYOBJECT } = require_consts();
    var { JWEInvalid, JWEDecryptionFailed } = require_errors();
    var checkInput = function(size, iv, tag) {
      if (iv.length !== 16) {
        throw new JWEInvalid("invalid iv");
      }
      if (arguments.length === 3) {
        if (tag.length !== size / 8) {
          throw new JWEInvalid("invalid tag");
        }
      }
    };
    var encrypt = (size, sign, { [KEYOBJECT]: keyObject }, cleartext, { iv, aad = Buffer.alloc(0) }) => {
      const key = keyObject.export();
      checkInput(size, iv);
      const keySize = size / 8;
      const encKey = key.slice(keySize);
      const cipher = createCipheriv(`aes-${size}-cbc`, encKey, iv);
      const ciphertext = Buffer.concat([cipher.update(cleartext), cipher.final()]);
      const macData = Buffer.concat([aad, iv, ciphertext, uint64be(aad.length * 8)]);
      const macKey = key.slice(0, keySize);
      const tag = sign({ [KEYOBJECT]: macKey }, macData).slice(0, keySize);
      return { ciphertext, tag };
    };
    var decrypt = (size, sign, { [KEYOBJECT]: keyObject }, ciphertext, { iv, tag = Buffer.alloc(0), aad = Buffer.alloc(0) }) => {
      checkInput(size, iv, tag);
      const keySize = size / 8;
      const key = keyObject.export();
      const encKey = key.slice(keySize);
      const macKey = key.slice(0, keySize);
      const macData = Buffer.concat([aad, iv, ciphertext, uint64be(aad.length * 8)]);
      const expectedTag = sign({ [KEYOBJECT]: macKey }, macData, tag).slice(0, keySize);
      const macCheckPassed = timingSafeEqual(tag, expectedTag);
      if (!macCheckPassed) {
        throw new JWEDecryptionFailed();
      }
      let cleartext;
      try {
        const cipher = createDecipheriv(`aes-${size}-cbc`, encKey, iv);
        cleartext = Buffer.concat([cipher.update(ciphertext), cipher.final()]);
      } catch (err) {
      }
      if (!cleartext) {
        throw new JWEDecryptionFailed();
      }
      return cleartext;
    };
    module.exports = (JWA, JWK) => {
      ["A128CBC-HS256", "A192CBC-HS384", "A256CBC-HS512"].forEach((jwaAlg) => {
        const size = parseInt(jwaAlg.substr(1, 3), 10);
        const sign = JWA.sign.get(`HS${size * 2}`);
        if (getCiphers().includes(`aes-${size}-cbc`)) {
          JWA.encrypt.set(jwaAlg, encrypt.bind(void 0, size, sign));
          JWA.decrypt.set(jwaAlg, decrypt.bind(void 0, size, sign));
          JWK.oct.encrypt[jwaAlg] = JWK.oct.decrypt[jwaAlg] = (key) => (key.use === "enc" || key.use === void 0) && key.length / 2 === size;
        }
      });
    };
  }
});

// node_modules/jose/lib/jwa/aes_gcm.js
var require_aes_gcm = __commonJS({
  "node_modules/jose/lib/jwa/aes_gcm.js"(exports, module) {
    var { createCipheriv, createDecipheriv, getCiphers } = require_crypto();
    var { KEYOBJECT } = require_consts();
    var { JWEInvalid, JWEDecryptionFailed } = require_errors();
    var { asInput } = require_key_object();
    var checkInput = function(size, iv, tag) {
      if (iv.length !== 12) {
        throw new JWEInvalid("invalid iv");
      }
      if (arguments.length === 3) {
        if (tag.length !== 16) {
          throw new JWEInvalid("invalid tag");
        }
      }
    };
    var encrypt = (size, { [KEYOBJECT]: keyObject }, cleartext, { iv, aad = Buffer.alloc(0) }) => {
      const key = asInput(keyObject, false);
      checkInput(size, iv);
      const cipher = createCipheriv(`aes-${size}-gcm`, key, iv, { authTagLength: 16 });
      cipher.setAAD(aad);
      const ciphertext = Buffer.concat([cipher.update(cleartext), cipher.final()]);
      const tag = cipher.getAuthTag();
      return { ciphertext, tag };
    };
    var decrypt = (size, { [KEYOBJECT]: keyObject }, ciphertext, { iv, tag = Buffer.alloc(0), aad = Buffer.alloc(0) }) => {
      const key = asInput(keyObject, false);
      checkInput(size, iv, tag);
      try {
        const cipher = createDecipheriv(`aes-${size}-gcm`, key, iv, { authTagLength: 16 });
        cipher.setAuthTag(tag);
        cipher.setAAD(aad);
        return Buffer.concat([cipher.update(ciphertext), cipher.final()]);
      } catch (err) {
        throw new JWEDecryptionFailed();
      }
    };
    module.exports = (JWA, JWK) => {
      ["A128GCM", "A192GCM", "A256GCM"].forEach((jwaAlg) => {
        const size = parseInt(jwaAlg.substr(1, 3), 10);
        if (getCiphers().includes(`aes-${size}-gcm`)) {
          JWA.encrypt.set(jwaAlg, encrypt.bind(void 0, size));
          JWA.decrypt.set(jwaAlg, decrypt.bind(void 0, size));
          JWK.oct.encrypt[jwaAlg] = JWK.oct.decrypt[jwaAlg] = (key) => (key.use === "enc" || key.use === void 0) && key.length === size;
        }
      });
    };
  }
});

// node_modules/jose/lib/jwa/rsaes.js
var require_rsaes = __commonJS({
  "node_modules/jose/lib/jwa/rsaes.js"(exports, module) {
    var { publicEncrypt, privateDecrypt, constants } = require_crypto();
    var { oaepHashSupported } = require_runtime_support();
    var { KEYOBJECT } = require_consts();
    var { asInput } = require_key_object();
    var resolvePadding = (alg) => {
      switch (alg) {
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          return constants.RSA_PKCS1_OAEP_PADDING;
        case "RSA1_5":
          return constants.RSA_PKCS1_PADDING;
      }
    };
    var resolveOaepHash = (alg) => {
      switch (alg) {
        case "RSA-OAEP":
          return "sha1";
        case "RSA-OAEP-256":
          return "sha256";
        case "RSA-OAEP-384":
          return "sha384";
        case "RSA-OAEP-512":
          return "sha512";
        default:
          return void 0;
      }
    };
    var wrapKey = (padding, oaepHash, { [KEYOBJECT]: keyObject }, payload) => {
      const key = asInput(keyObject, true);
      return { wrapped: publicEncrypt({ key, oaepHash, padding }, payload) };
    };
    var unwrapKey = (padding, oaepHash, { [KEYOBJECT]: keyObject }, payload) => {
      const key = asInput(keyObject, false);
      return privateDecrypt({ key, oaepHash, padding }, payload);
    };
    var LENGTHS = {
      RSA1_5: 0,
      "RSA-OAEP": 592,
      "RSA-OAEP-256": 784,
      "RSA-OAEP-384": 1040,
      "RSA-OAEP-512": 1296
    };
    module.exports = (JWA, JWK) => {
      const algs = ["RSA-OAEP", "RSA1_5"];
      if (oaepHashSupported) {
        algs.splice(1, 0, "RSA-OAEP-256", "RSA-OAEP-384", "RSA-OAEP-512");
      }
      algs.forEach((jwaAlg) => {
        const padding = resolvePadding(jwaAlg);
        const oaepHash = resolveOaepHash(jwaAlg);
        JWA.keyManagementEncrypt.set(jwaAlg, wrapKey.bind(void 0, padding, oaepHash));
        JWA.keyManagementDecrypt.set(jwaAlg, unwrapKey.bind(void 0, padding, oaepHash));
        JWK.RSA.wrapKey[jwaAlg] = (key) => (key.use === "enc" || key.use === void 0) && key.length >= LENGTHS[jwaAlg];
        JWK.RSA.unwrapKey[jwaAlg] = (key) => key.private && (key.use === "enc" || key.use === void 0) && key.length >= LENGTHS[jwaAlg];
      });
    };
  }
});

// node_modules/jose/lib/jwa/aes_kw.js
var require_aes_kw = __commonJS({
  "node_modules/jose/lib/jwa/aes_kw.js"(exports, module) {
    var { createCipheriv, createDecipheriv, getCiphers } = require_crypto();
    var { KEYOBJECT } = require_consts();
    var { asInput } = require_key_object();
    var checkInput = (data) => {
      if (data !== void 0 && data.length % 8 !== 0) {
        throw new Error("invalid data length");
      }
    };
    var wrapKey = (alg, { [KEYOBJECT]: keyObject }, payload) => {
      const key = asInput(keyObject, false);
      const cipher = createCipheriv(alg, key, Buffer.alloc(8, "a6", "hex"));
      return { wrapped: Buffer.concat([cipher.update(payload), cipher.final()]) };
    };
    var unwrapKey = (alg, { [KEYOBJECT]: keyObject }, payload) => {
      const key = asInput(keyObject, false);
      checkInput(payload);
      const cipher = createDecipheriv(alg, key, Buffer.alloc(8, "a6", "hex"));
      return Buffer.concat([cipher.update(payload), cipher.final()]);
    };
    module.exports = (JWA, JWK) => {
      ["A128KW", "A192KW", "A256KW"].forEach((jwaAlg) => {
        const size = parseInt(jwaAlg.substr(1, 3), 10);
        const alg = `aes${size}-wrap`;
        if (getCiphers().includes(alg)) {
          JWA.keyManagementEncrypt.set(jwaAlg, wrapKey.bind(void 0, alg));
          JWA.keyManagementDecrypt.set(jwaAlg, unwrapKey.bind(void 0, alg));
          JWK.oct.wrapKey[jwaAlg] = JWK.oct.unwrapKey[jwaAlg] = (key) => (key.use === "enc" || key.use === void 0) && key.length === size;
        }
      });
    };
  }
});

// node_modules/jose/lib/jwa/aes_gcm_kw.js
var require_aes_gcm_kw = __commonJS({
  "node_modules/jose/lib/jwa/aes_gcm_kw.js"(exports, module) {
    var generateIV = require_generate_iv();
    var base64url = require_base64url();
    module.exports = (JWA, JWK) => {
      ["A128GCMKW", "A192GCMKW", "A256GCMKW"].forEach((jwaAlg) => {
        const encAlg = jwaAlg.substr(0, 7);
        const size = parseInt(jwaAlg.substr(1, 3), 10);
        const encrypt = JWA.encrypt.get(encAlg);
        const decrypt = JWA.decrypt.get(encAlg);
        if (encrypt && decrypt) {
          JWA.keyManagementEncrypt.set(jwaAlg, (key, payload) => {
            const iv = generateIV(jwaAlg);
            const { ciphertext, tag } = encrypt(key, payload, { iv });
            return {
              wrapped: ciphertext,
              header: { tag: base64url.encodeBuffer(tag), iv: base64url.encodeBuffer(iv) }
            };
          });
          JWA.keyManagementDecrypt.set(jwaAlg, decrypt);
          JWK.oct.wrapKey[jwaAlg] = JWK.oct.unwrapKey[jwaAlg] = (key) => (key.use === "enc" || key.use === void 0) && key.length === size;
        }
      });
    };
  }
});

// node_modules/jose/lib/jwa/pbes2.js
var require_pbes2 = __commonJS({
  "node_modules/jose/lib/jwa/pbes2.js"(exports, module) {
    var { pbkdf2Sync: pbkdf2, randomBytes } = require_crypto();
    var { KEYOBJECT } = require_consts();
    var base64url = require_base64url();
    var SALT_LENGTH = 16;
    var NULL_BUFFER = Buffer.alloc(1, 0);
    var concatSalt = (alg, p2s) => {
      return Buffer.concat([
        Buffer.from(alg, "utf8"),
        NULL_BUFFER,
        p2s
      ]);
    };
    var wrapKey = (keylen, sha, concat, wrap, { [KEYOBJECT]: keyObject }, payload) => {
      const p2c = Math.floor(Math.random() * 2049 + 2048);
      const p2s = randomBytes(SALT_LENGTH);
      const salt = concat(p2s);
      const derivedKey = pbkdf2(keyObject.export(), salt, p2c, keylen, sha);
      const result = wrap({ [KEYOBJECT]: derivedKey }, payload);
      result.header = result.header || {};
      Object.assign(result.header, { p2c, p2s: base64url.encodeBuffer(p2s) });
      return result;
    };
    var unwrapKey = (keylen, sha, concat, unwrap, { [KEYOBJECT]: keyObject }, payload, header) => {
      const { p2s, p2c } = header;
      const salt = concat(p2s);
      const derivedKey = pbkdf2(keyObject.export(), salt, p2c, keylen, sha);
      return unwrap({ [KEYOBJECT]: derivedKey }, payload, header);
    };
    module.exports = (JWA, JWK) => {
      ["PBES2-HS256+A128KW", "PBES2-HS384+A192KW", "PBES2-HS512+A256KW"].forEach((jwaAlg) => {
        const kw = jwaAlg.substr(-6);
        const kwWrap = JWA.keyManagementEncrypt.get(kw);
        const kwUnwrap = JWA.keyManagementDecrypt.get(kw);
        const keylen = parseInt(jwaAlg.substr(13, 3), 10) / 8;
        const sha = `sha${jwaAlg.substr(8, 3)}`;
        if (kwWrap && kwUnwrap) {
          JWA.keyManagementEncrypt.set(jwaAlg, wrapKey.bind(void 0, keylen, sha, concatSalt.bind(void 0, jwaAlg), kwWrap));
          JWA.keyManagementDecrypt.set(jwaAlg, unwrapKey.bind(void 0, keylen, sha, concatSalt.bind(void 0, jwaAlg), kwUnwrap));
          JWK.oct.deriveKey[jwaAlg] = (key) => key.use === "enc" || key.use === void 0;
        }
      });
    };
  }
});

// node_modules/jose/lib/jwa/ecdh/compute_secret.js
var require_compute_secret = __commonJS({
  "node_modules/jose/lib/jwa/ecdh/compute_secret.js"(exports, module) {
    var { improvedDH } = require_runtime_support();
    if (improvedDH) {
      const { diffieHellman } = require_crypto();
      const { KeyObject } = require_key_object();
      const importKey = require_import();
      module.exports = ({ keyObject: privateKey }, publicKey) => {
        if (!(publicKey instanceof KeyObject)) {
          ({ keyObject: publicKey } = importKey(publicKey));
        }
        return diffieHellman({ privateKey, publicKey });
      };
    } else {
      const { createECDH, constants: { POINT_CONVERSION_UNCOMPRESSED } } = require_crypto();
      const base64url = require_base64url();
      const crvToCurve = (crv) => {
        switch (crv) {
          case "P-256":
            return "prime256v1";
          case "P-384":
            return "secp384r1";
          case "P-521":
            return "secp521r1";
        }
      };
      const UNCOMPRESSED = Buffer.alloc(1, POINT_CONVERSION_UNCOMPRESSED);
      const pubToBuffer = (x, y) => Buffer.concat([UNCOMPRESSED, base64url.decodeToBuffer(x), base64url.decodeToBuffer(y)]);
      module.exports = ({ crv, d }, { x, y }) => {
        const curve = crvToCurve(crv);
        const exchange = createECDH(curve);
        exchange.setPrivateKey(base64url.decodeToBuffer(d));
        return exchange.computeSecret(pubToBuffer(x, y));
      };
    }
  }
});

// node_modules/jose/lib/jwa/ecdh/derive.js
var require_derive = __commonJS({
  "node_modules/jose/lib/jwa/ecdh/derive.js"(exports, module) {
    var { createHash } = require_crypto();
    var ecdhComputeSecret = require_compute_secret();
    var concat = (key, length, value) => {
      const iterations = Math.ceil(length / 32);
      let res;
      for (let iter = 1; iter <= iterations; iter++) {
        const buf = Buffer.allocUnsafe(4 + key.length + value.length);
        buf.writeUInt32BE(iter, 0);
        key.copy(buf, 4);
        value.copy(buf, 4 + key.length);
        if (!res) {
          res = createHash("sha256").update(buf).digest();
        } else {
          res = Buffer.concat([res, createHash("sha256").update(buf).digest()]);
        }
      }
      return res.slice(0, length);
    };
    var uint32be = (value, buf = Buffer.allocUnsafe(4)) => {
      buf.writeUInt32BE(value);
      return buf;
    };
    var lengthAndInput = (input) => Buffer.concat([uint32be(input.length), input]);
    module.exports = (alg, keyLen, privKey, pubKey, { apu = Buffer.alloc(0), apv = Buffer.alloc(0) } = {}, computeSecret = ecdhComputeSecret) => {
      const value = Buffer.concat([
        lengthAndInput(Buffer.from(alg)),
        lengthAndInput(apu),
        lengthAndInput(apv),
        uint32be(keyLen)
      ]);
      const sharedSecret = computeSecret(privKey, pubKey);
      return concat(sharedSecret, keyLen / 8, value);
    };
  }
});

// node_modules/jose/lib/jwa/ecdh/dir.js
var require_dir = __commonJS({
  "node_modules/jose/lib/jwa/ecdh/dir.js"(exports, module) {
    var { improvedDH } = require_runtime_support();
    var { KEYLENGTHS } = require_registry();
    var { generateSync } = require_generate();
    var derive = require_derive();
    var wrapKey = (key, payload, { enc }) => {
      const epk = generateSync(key.kty, key.crv);
      const derivedKey = derive(enc, KEYLENGTHS.get(enc), epk, key);
      return {
        wrapped: derivedKey,
        header: { epk: { kty: key.kty, crv: key.crv, x: epk.x, y: epk.y } }
      };
    };
    var unwrapKey = (key, payload, header) => {
      const { enc, epk } = header;
      return derive(enc, KEYLENGTHS.get(enc), key, epk, header);
    };
    module.exports = (JWA, JWK) => {
      JWA.keyManagementEncrypt.set("ECDH-ES", wrapKey);
      JWA.keyManagementDecrypt.set("ECDH-ES", unwrapKey);
      JWK.EC.deriveKey["ECDH-ES"] = (key) => (key.use === "enc" || key.use === void 0) && key.crv !== "secp256k1";
      if (improvedDH) {
        JWK.OKP.deriveKey["ECDH-ES"] = (key) => (key.use === "enc" || key.use === void 0) && key.keyObject.asymmetricKeyType.startsWith("x");
      }
    };
  }
});

// node_modules/jose/lib/jwa/ecdh/kw.js
var require_kw = __commonJS({
  "node_modules/jose/lib/jwa/ecdh/kw.js"(exports, module) {
    var { improvedDH } = require_runtime_support();
    var { KEYOBJECT } = require_consts();
    var { generateSync } = require_generate();
    var { ECDH_DERIVE_LENGTHS } = require_registry();
    var derive = require_derive();
    var wrapKey = (wrap, derive2, key, payload) => {
      const epk = generateSync(key.kty, key.crv);
      const derivedKey = derive2(epk, key, payload);
      const result = wrap({ [KEYOBJECT]: derivedKey }, payload);
      result.header = result.header || {};
      Object.assign(result.header, { epk: { kty: key.kty, crv: key.crv, x: epk.x, y: epk.y } });
      return result;
    };
    var unwrapKey = (unwrap, derive2, key, payload, header) => {
      const { epk } = header;
      const derivedKey = derive2(key, epk, header);
      return unwrap({ [KEYOBJECT]: derivedKey }, payload, header);
    };
    module.exports = (JWA, JWK) => {
      ["ECDH-ES+A128KW", "ECDH-ES+A192KW", "ECDH-ES+A256KW"].forEach((jwaAlg) => {
        const kw = jwaAlg.substr(-6);
        const kwWrap = JWA.keyManagementEncrypt.get(kw);
        const kwUnwrap = JWA.keyManagementDecrypt.get(kw);
        const keylen = parseInt(jwaAlg.substr(9, 3), 10);
        ECDH_DERIVE_LENGTHS.set(jwaAlg, keylen);
        if (kwWrap && kwUnwrap) {
          JWA.keyManagementEncrypt.set(jwaAlg, wrapKey.bind(void 0, kwWrap, derive.bind(void 0, jwaAlg, keylen)));
          JWA.keyManagementDecrypt.set(jwaAlg, unwrapKey.bind(void 0, kwUnwrap, derive.bind(void 0, jwaAlg, keylen)));
          JWK.EC.deriveKey[jwaAlg] = (key) => (key.use === "enc" || key.use === void 0) && key.crv !== "secp256k1";
          if (improvedDH) {
            JWK.OKP.deriveKey[jwaAlg] = (key) => (key.use === "enc" || key.use === void 0) && key.keyObject.asymmetricKeyType.startsWith("x");
          }
        }
      });
    };
    module.exports.wrapKey = wrapKey;
    module.exports.unwrapKey = unwrapKey;
  }
});

// node_modules/jose/lib/jwa/index.js
var require_jwa2 = __commonJS({
  "node_modules/jose/lib/jwa/index.js"(exports, module) {
    var { JWKKeySupport, JOSENotSupported } = require_errors();
    var { KEY_MANAGEMENT_ENCRYPT, KEY_MANAGEMENT_DECRYPT } = require_consts();
    var { JWA, JWK } = require_registry();
    require_hmac()(JWA, JWK);
    require_ecdsa()(JWA, JWK);
    require_eddsa()(JWA, JWK);
    require_rsassa_pss()(JWA, JWK);
    require_rsassa()(JWA, JWK);
    require_none2()(JWA);
    require_aes_cbc_hmac_sha2()(JWA, JWK);
    require_aes_gcm()(JWA, JWK);
    require_rsaes()(JWA, JWK);
    require_aes_kw()(JWA, JWK);
    require_aes_gcm_kw()(JWA, JWK);
    require_pbes2()(JWA, JWK);
    require_dir()(JWA, JWK);
    require_kw()(JWA, JWK);
    var check = (key, op, alg) => {
      const cache = `_${op}_${alg}`;
      let label;
      let keyOp;
      if (op === "keyManagementEncrypt") {
        label = "key management (encryption)";
        keyOp = KEY_MANAGEMENT_ENCRYPT;
      } else if (op === "keyManagementDecrypt") {
        label = "key management (decryption)";
        keyOp = KEY_MANAGEMENT_DECRYPT;
      }
      if (cache in key) {
        if (key[cache]) {
          return;
        }
        throw new JWKKeySupport(`the key does not support ${alg} ${label || op} algorithm`);
      }
      let value = true;
      if (!JWA[op].has(alg)) {
        throw new JOSENotSupported(`unsupported ${label || op} alg: ${alg}`);
      } else if (!key.algorithms(keyOp).has(alg)) {
        value = false;
      }
      Object.defineProperty(key, cache, { value, enumerable: false });
      if (!value) {
        return check(key, op, alg);
      }
    };
    module.exports = {
      check,
      sign: (alg, key, payload) => {
        check(key, "sign", alg);
        return JWA.sign.get(alg)(key, payload);
      },
      verify: (alg, key, payload, signature) => {
        check(key, "verify", alg);
        return JWA.verify.get(alg)(key, payload, signature);
      },
      keyManagementEncrypt: (alg, key, payload, opts) => {
        check(key, "keyManagementEncrypt", alg);
        return JWA.keyManagementEncrypt.get(alg)(key, payload, opts);
      },
      keyManagementDecrypt: (alg, key, payload, opts) => {
        check(key, "keyManagementDecrypt", alg);
        return JWA.keyManagementDecrypt.get(alg)(key, payload, opts);
      },
      encrypt: (alg, key, cleartext, opts) => {
        check(key, "encrypt", alg);
        return JWA.encrypt.get(alg)(key, cleartext, opts);
      },
      decrypt: (alg, key, ciphertext, opts) => {
        check(key, "decrypt", alg);
        return JWA.decrypt.get(alg)(key, ciphertext, opts);
      }
    };
  }
});

// node_modules/jose/lib/help/validate_crit.js
var require_validate_crit = __commonJS({
  "node_modules/jose/lib/help/validate_crit.js"(exports, module) {
    var { JOSECritNotUnderstood, JWSInvalid } = require_errors();
    var DEFINED = /* @__PURE__ */ new Set([
      "alg",
      "jku",
      "jwk",
      "kid",
      "x5u",
      "x5c",
      "x5t",
      "x5t#S256",
      "typ",
      "cty",
      "crit",
      "enc",
      "zip",
      "epk",
      "apu",
      "apv",
      "iv",
      "tag",
      "p2s",
      "p2c"
    ]);
    module.exports = function validateCrit(Err, protectedHeader, unprotectedHeader, understood) {
      if (protectedHeader && "crit" in protectedHeader) {
        if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((s) => typeof s !== "string" || !s)) {
          throw new Err('"crit" Header Parameter MUST be an array of non-empty strings when present');
        }
        const whitelisted = new Set(understood);
        const combined = { ...protectedHeader, ...unprotectedHeader };
        protectedHeader.crit.forEach((parameter) => {
          if (DEFINED.has(parameter)) {
            throw new Err(`The critical list contains a non-extension Header Parameter ${parameter}`);
          }
          if (!whitelisted.has(parameter)) {
            throw new JOSECritNotUnderstood(`critical "${parameter}" is not understood`);
          }
          if (parameter === "b64") {
            if (!("b64" in protectedHeader)) {
              throw new JWSInvalid('"b64" critical parameter must be integrity protected');
            }
            if (typeof protectedHeader.b64 !== "boolean") {
              throw new JWSInvalid('"b64" critical parameter must be a boolean');
            }
          } else if (!(parameter in combined)) {
            throw new Err(`critical parameter "${parameter}" is missing`);
          }
        });
      }
      if (unprotectedHeader && "crit" in unprotectedHeader) {
        throw new Err('"crit" Header Parameter MUST be integrity protected when present');
      }
    };
  }
});

// node_modules/jose/lib/jwe/serializers.js
var require_serializers = __commonJS({
  "node_modules/jose/lib/jwe/serializers.js"(exports, module) {
    var isObject = require_is_object();
    var validateCrit = require_validate_crit();
    var { JWEInvalid } = require_errors();
    validateCrit = validateCrit.bind(void 0, JWEInvalid);
    var compactSerializer = (final, [recipient]) => {
      return `${final.protected}.${recipient.encrypted_key}.${final.iv}.${final.ciphertext}.${final.tag}`;
    };
    compactSerializer.validate = (protectedHeader, unprotectedHeader, aad, { 0: { header }, length }) => {
      if (length !== 1 || aad || unprotectedHeader || header) {
        throw new JWEInvalid("JWE Compact Serialization doesn't support multiple recipients, JWE unprotected headers or AAD");
      }
      validateCrit(protectedHeader, unprotectedHeader, protectedHeader ? protectedHeader.crit : void 0);
    };
    var flattenedSerializer = (final, [recipient]) => {
      const { header, encrypted_key: encryptedKey } = recipient;
      return {
        ...final.protected ? { protected: final.protected } : void 0,
        ...final.unprotected ? { unprotected: final.unprotected } : void 0,
        ...header ? { header } : void 0,
        ...encryptedKey ? { encrypted_key: encryptedKey } : void 0,
        ...final.aad ? { aad: final.aad } : void 0,
        iv: final.iv,
        ciphertext: final.ciphertext,
        tag: final.tag
      };
    };
    flattenedSerializer.validate = (protectedHeader, unprotectedHeader, aad, { 0: { header }, length }) => {
      if (length !== 1) {
        throw new JWEInvalid("Flattened JWE JSON Serialization doesn't support multiple recipients");
      }
      validateCrit(protectedHeader, { ...unprotectedHeader, ...header }, protectedHeader ? protectedHeader.crit : void 0);
    };
    var generalSerializer = (final, recipients) => {
      const result = {
        ...final.protected ? { protected: final.protected } : void 0,
        ...final.unprotected ? { unprotected: final.unprotected } : void 0,
        recipients: recipients.map(({ header, encrypted_key: encryptedKey, generatedHeader }) => {
          if (!header && !encryptedKey && !generatedHeader) {
            return false;
          }
          return {
            ...header || generatedHeader ? { header: { ...header, ...generatedHeader } } : void 0,
            ...encryptedKey ? { encrypted_key: encryptedKey } : void 0
          };
        }).filter(Boolean),
        ...final.aad ? { aad: final.aad } : void 0,
        iv: final.iv,
        ciphertext: final.ciphertext,
        tag: final.tag
      };
      if (!result.recipients.length) {
        delete result.recipients;
      }
      return result;
    };
    generalSerializer.validate = (protectedHeader, unprotectedHeader, aad, recipients) => {
      recipients.forEach(({ header }) => {
        validateCrit(protectedHeader, { ...header, ...unprotectedHeader }, protectedHeader ? protectedHeader.crit : void 0);
      });
    };
    var isJSON = (input) => {
      return isObject(input) && typeof input.ciphertext === "string" && typeof input.iv === "string" && typeof input.tag === "string" && (input.unprotected === void 0 || isObject(input.unprotected)) && (input.protected === void 0 || typeof input.protected === "string") && (input.aad === void 0 || typeof input.aad === "string");
    };
    var isSingleRecipient = (input) => {
      return (input.encrypted_key === void 0 || typeof input.encrypted_key === "string") && (input.header === void 0 || isObject(input.header));
    };
    var isValidRecipient = (recipient) => {
      return isObject(recipient) && typeof recipient.encrypted_key === "string" && (recipient.header === void 0 || isObject(recipient.header));
    };
    var isMultiRecipient = (input) => {
      if (Array.isArray(input.recipients) && input.recipients.every(isValidRecipient)) {
        return true;
      }
      return false;
    };
    var detect = (input) => {
      if (typeof input === "string" && input.split(".").length === 5) {
        return "compact";
      }
      if (isJSON(input)) {
        if (isMultiRecipient(input)) {
          return "general";
        }
        if (isSingleRecipient(input)) {
          return "flattened";
        }
      }
      throw new JWEInvalid("JWE malformed or invalid serialization");
    };
    module.exports = {
      compact: compactSerializer,
      flattened: flattenedSerializer,
      general: generalSerializer,
      detect
    };
  }
});

// node_modules/jose/lib/jwe/generate_cek.js
var require_generate_cek = __commonJS({
  "node_modules/jose/lib/jwe/generate_cek.js"(exports, module) {
    var { randomBytes } = require_crypto();
    var { createSecretKey } = require_key_object();
    var { KEYLENGTHS } = require_registry();
    var Key = require_oct();
    module.exports = (alg) => {
      const keyLength = KEYLENGTHS.get(alg);
      if (!keyLength) {
        return new Key({ type: "secret" });
      }
      return new Key(createSecretKey(randomBytes(keyLength / 8)), { use: "enc", alg });
    };
  }
});

// node_modules/jose/lib/help/is_disjoint.js
var require_is_disjoint = __commonJS({
  "node_modules/jose/lib/help/is_disjoint.js"(exports, module) {
    module.exports = (a = {}, b = {}) => {
      const keysA = Object.keys(a);
      const keysB = new Set(Object.keys(b));
      return !keysA.some((ka) => keysB.has(ka));
    };
  }
});

// node_modules/jose/lib/jwe/validate_headers.js
var require_validate_headers = __commonJS({
  "node_modules/jose/lib/jwe/validate_headers.js"(exports, module) {
    var isDisjoint = require_is_disjoint();
    var base64url = require_base64url();
    var validateCrit = require_validate_crit();
    var { JWEInvalid, JOSENotSupported } = require_errors();
    validateCrit = validateCrit.bind(void 0, JWEInvalid);
    module.exports = (prot, unprotected, recipients, checkAlgorithms, crit) => {
      if (typeof prot === "string") {
        try {
          prot = base64url.JSON.decode(prot);
        } catch (err) {
          throw new JWEInvalid("could not parse JWE protected header");
        }
      }
      let alg = [];
      const enc = /* @__PURE__ */ new Set();
      if (!isDisjoint(prot, unprotected) || !recipients.every(({ header }) => {
        if (typeof header === "object") {
          alg.push(header.alg);
          enc.add(header.enc);
        }
        const combined = { ...unprotected, ...header };
        validateCrit(prot, combined, crit);
        if ("zip" in combined) {
          throw new JWEInvalid('"zip" Header Parameter MUST be integrity protected');
        } else if (prot && "zip" in prot && prot.zip !== "DEF") {
          throw new JOSENotSupported('only "DEF" compression algorithm is supported');
        }
        return isDisjoint(header, prot) && isDisjoint(header, unprotected);
      })) {
        throw new JWEInvalid("JWE Shared Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
      }
      if (typeof prot === "object") {
        alg.push(prot.alg);
        enc.add(prot.enc);
      }
      if (typeof unprotected === "object") {
        alg.push(unprotected.alg);
        enc.add(unprotected.enc);
      }
      alg = alg.filter(Boolean);
      enc.delete(void 0);
      if (recipients.length !== 1) {
        if (alg.includes("dir") || alg.includes("ECDH-ES")) {
          throw new JWEInvalid("dir and ECDH-ES alg may only be used with a single recipient");
        }
      }
      if (checkAlgorithms) {
        if (alg.length !== recipients.length) {
          throw new JWEInvalid("missing Key Management algorithm");
        }
        if (enc.size === 0) {
          throw new JWEInvalid("missing Content Encryption algorithm");
        } else if (enc.size !== 1) {
          throw new JWEInvalid("there must only be one Content Encryption algorithm");
        }
      } else {
        if (enc.size > 1) {
          throw new JWEInvalid("there must only be one Content Encryption algorithm");
        }
      }
      return [...enc][0];
    };
  }
});

// node_modules/jose/lib/jwe/encrypt.js
var require_encrypt = __commonJS({
  "node_modules/jose/lib/jwe/encrypt.js"(exports, module) {
    var { deflateRawSync } = require_zlib();
    var { KEYOBJECT } = require_consts();
    var generateIV = require_generate_iv();
    var base64url = require_base64url();
    var getKey = require_get_key();
    var isObject = require_is_object();
    var { createSecretKey } = require_key_object();
    var deepClone = require_deep_clone();
    var importKey = require_import();
    var { JWEInvalid } = require_errors();
    var { check, keyManagementEncrypt, encrypt } = require_jwa2();
    var serializers = require_serializers();
    var generateCEK = require_generate_cek();
    var validateHeaders = require_validate_headers();
    var PROCESS_RECIPIENT = Symbol("PROCESS_RECIPIENT");
    var Encrypt = class {
      constructor(cleartext, protectedHeader, aad, unprotectedHeader) {
        if (!Buffer.isBuffer(cleartext) && typeof cleartext !== "string") {
          throw new TypeError("cleartext argument must be a Buffer or a string");
        }
        cleartext = Buffer.from(cleartext);
        if (aad !== void 0 && !Buffer.isBuffer(aad) && typeof aad !== "string") {
          throw new TypeError("aad argument must be a Buffer or a string when provided");
        }
        aad = aad ? Buffer.from(aad) : void 0;
        if (protectedHeader !== void 0 && !isObject(protectedHeader)) {
          throw new TypeError("protectedHeader argument must be a plain object when provided");
        }
        if (unprotectedHeader !== void 0 && !isObject(unprotectedHeader)) {
          throw new TypeError("unprotectedHeader argument must be a plain object when provided");
        }
        this._recipients = [];
        this._cleartext = cleartext;
        this._aad = aad;
        this._unprotected = unprotectedHeader ? deepClone(unprotectedHeader) : void 0;
        this._protected = protectedHeader ? deepClone(protectedHeader) : void 0;
      }
      recipient(key, header) {
        key = getKey(key);
        if (header !== void 0 && !isObject(header)) {
          throw new TypeError("header argument must be a plain object when provided");
        }
        this._recipients.push({
          key,
          header: header ? deepClone(header) : void 0
        });
        return this;
      }
      [PROCESS_RECIPIENT](recipient) {
        const unprotectedHeader = this._unprotected;
        const protectedHeader = this._protected;
        const { length: recipientCount } = this._recipients;
        const jweHeader = {
          ...protectedHeader,
          ...unprotectedHeader,
          ...recipient.header
        };
        const { key } = recipient;
        const enc = jweHeader.enc;
        let alg = jweHeader.alg;
        if (key.use === "sig") {
          throw new TypeError('a key with "use":"sig" is not usable for encryption');
        }
        if (alg === "dir") {
          check(key, "encrypt", enc);
        } else if (alg) {
          check(key, "keyManagementEncrypt", alg);
        } else {
          alg = key.alg || [...key.algorithms("wrapKey")][0] || [...key.algorithms("deriveKey")][0];
          if (alg === "ECDH-ES" && recipientCount !== 1) {
            alg = [...key.algorithms("deriveKey")][1];
          }
          if (!alg) {
            throw new JWEInvalid('could not resolve a usable "alg" for a recipient');
          }
          if (recipientCount === 1) {
            if (protectedHeader) {
              protectedHeader.alg = alg;
            } else {
              this._protected = { alg };
            }
          } else {
            if (recipient.header) {
              recipient.header.alg = alg;
            } else {
              recipient.header = { alg };
            }
          }
        }
        let wrapped;
        let generatedHeader;
        if (key.kty === "oct" && alg === "dir") {
          this._cek = importKey(key[KEYOBJECT], { use: "enc", alg: enc });
        } else {
          check(this._cek, "encrypt", enc);
          ({ wrapped, header: generatedHeader } = keyManagementEncrypt(alg, key, this._cek[KEYOBJECT].export(), { enc, alg }));
          if (alg === "ECDH-ES") {
            this._cek = importKey(createSecretKey(wrapped), { use: "enc", alg: enc });
          }
        }
        if (alg === "dir" || alg === "ECDH-ES") {
          recipient.encrypted_key = "";
        } else {
          recipient.encrypted_key = base64url.encodeBuffer(wrapped);
        }
        if (generatedHeader) {
          recipient.generatedHeader = generatedHeader;
        }
      }
      encrypt(serialization) {
        const serializer = serializers[serialization];
        if (!serializer) {
          throw new TypeError('serialization must be one of "compact", "flattened", "general"');
        }
        if (!this._recipients.length) {
          throw new JWEInvalid("missing recipients");
        }
        serializer.validate(this._protected, this._unprotected, this._aad, this._recipients);
        let enc = validateHeaders(this._protected, this._unprotected, this._recipients, false, this._protected ? this._protected.crit : void 0);
        if (!enc) {
          enc = "A128CBC-HS256";
          if (this._protected) {
            this._protected.enc = enc;
          } else {
            this._protected = { enc };
          }
        }
        const final = {};
        this._cek = generateCEK(enc);
        for (const recipient of this._recipients) {
          this[PROCESS_RECIPIENT](recipient);
        }
        const iv = generateIV(enc);
        final.iv = base64url.encodeBuffer(iv);
        if (this._recipients.length === 1 && this._recipients[0].generatedHeader) {
          const [{ generatedHeader }] = this._recipients;
          delete this._recipients[0].generatedHeader;
          this._protected = {
            ...this._protected,
            ...generatedHeader
          };
        }
        if (this._protected) {
          final.protected = base64url.JSON.encode(this._protected);
        }
        final.unprotected = this._unprotected;
        let aad;
        if (this._aad) {
          final.aad = base64url.encode(this._aad);
          aad = Buffer.concat([
            Buffer.from(final.protected || ""),
            Buffer.from("."),
            Buffer.from(final.aad)
          ]);
        } else {
          aad = Buffer.from(final.protected || "");
        }
        let cleartext = this._cleartext;
        if (this._protected && "zip" in this._protected) {
          cleartext = deflateRawSync(cleartext);
        }
        const { ciphertext, tag } = encrypt(enc, this._cek, cleartext, { iv, aad });
        final.tag = base64url.encodeBuffer(tag);
        final.ciphertext = base64url.encodeBuffer(ciphertext);
        return serializer(final, this._recipients);
      }
    };
    module.exports = Encrypt;
  }
});

// node_modules/jose/lib/jwks/index.js
var require_jwks = __commonJS({
  "node_modules/jose/lib/jwks/index.js"(exports, module) {
    var KeyStore = require_keystore();
    module.exports = KeyStore;
  }
});

// node_modules/jose/lib/jwe/decrypt.js
var require_decrypt = __commonJS({
  "node_modules/jose/lib/jwe/decrypt.js"(exports, module) {
    var { inflateRawSync } = require_zlib();
    var base64url = require_base64url();
    var getKey = require_get_key();
    var { KeyStore } = require_jwks();
    var errors = require_errors();
    var { check, decrypt, keyManagementDecrypt } = require_jwa2();
    var JWK = require_jwk2();
    var { createSecretKey } = require_key_object();
    var generateCEK = require_generate_cek();
    var validateHeaders = require_validate_headers();
    var { detect: resolveSerialization } = require_serializers();
    var SINGLE_RECIPIENT = /* @__PURE__ */ new Set(["compact", "flattened"]);
    var combineHeader = (prot = {}, unprotected = {}, header = {}) => {
      if (typeof prot === "string") {
        prot = base64url.JSON.decode(prot);
      }
      const p2s = prot.p2s || unprotected.p2s || header.p2s;
      const apu = prot.apu || unprotected.apu || header.apu;
      const apv = prot.apv || unprotected.apv || header.apv;
      const iv = prot.iv || unprotected.iv || header.iv;
      const tag = prot.tag || unprotected.tag || header.tag;
      return {
        ...prot,
        ...unprotected,
        ...header,
        ...typeof p2s === "string" ? { p2s: base64url.decodeToBuffer(p2s) } : void 0,
        ...typeof apu === "string" ? { apu: base64url.decodeToBuffer(apu) } : void 0,
        ...typeof apv === "string" ? { apv: base64url.decodeToBuffer(apv) } : void 0,
        ...typeof iv === "string" ? { iv: base64url.decodeToBuffer(iv) } : void 0,
        ...typeof tag === "string" ? { tag: base64url.decodeToBuffer(tag) } : void 0
      };
    };
    var validateAlgorithms = (algorithms, option) => {
      if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string" || !s))) {
        throw new TypeError(`"${option}" option must be an array of non-empty strings`);
      }
      if (!algorithms) {
        return void 0;
      }
      return new Set(algorithms);
    };
    var jweDecrypt = (skipValidateHeaders, serialization, jwe, key, { crit = [], complete = false, keyManagementAlgorithms, contentEncryptionAlgorithms, maxPBES2Count = 1e4 } = {}) => {
      key = getKey(key, true);
      keyManagementAlgorithms = validateAlgorithms(keyManagementAlgorithms, "keyManagementAlgorithms");
      contentEncryptionAlgorithms = validateAlgorithms(contentEncryptionAlgorithms, "contentEncryptionAlgorithms");
      if (!Array.isArray(crit) || crit.some((s) => typeof s !== "string" || !s)) {
        throw new TypeError('"crit" option must be an array of non-empty strings');
      }
      if (!serialization) {
        serialization = resolveSerialization(jwe);
      }
      let alg, ciphertext, enc, encryptedKey, iv, opts, prot, tag, unprotected, cek, aad, header;
      if (serialization === "general" && jwe.recipients.length === 1) {
        serialization = "flattened";
        const { recipients: recipients2, ...root2 } = jwe;
        jwe = { ...root2, ...recipients2[0] };
      }
      if (SINGLE_RECIPIENT.has(serialization)) {
        if (serialization === "compact") {
          [prot, encryptedKey, iv, ciphertext, tag] = jwe.split(".");
        } else {
          ({ protected: prot, encrypted_key: encryptedKey, iv, ciphertext, tag, unprotected, aad, header } = jwe);
        }
        if (!skipValidateHeaders) {
          validateHeaders(prot, unprotected, [{ header }], true, crit);
        }
        opts = combineHeader(prot, unprotected, header);
        ({ alg, enc } = opts);
        if (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg)) {
          throw new errors.JOSEAlgNotWhitelisted("key management algorithm not whitelisted");
        }
        if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc)) {
          throw new errors.JOSEAlgNotWhitelisted("content encryption algorithm not whitelisted");
        }
        if (key instanceof KeyStore) {
          const keystore = key;
          let keys;
          if (opts.alg === "dir") {
            keys = keystore.all({ kid: opts.kid, alg: opts.enc, key_ops: ["decrypt"] });
          } else {
            keys = keystore.all({ kid: opts.kid, alg: opts.alg, key_ops: ["unwrapKey"] });
          }
          switch (keys.length) {
            case 0:
              throw new errors.JWKSNoMatchingKey();
            case 1:
              key = keys[0];
              break;
            default: {
              const errs2 = [];
              for (const key2 of keys) {
                try {
                  return jweDecrypt(true, serialization, jwe, key2, {
                    crit,
                    complete,
                    contentEncryptionAlgorithms: contentEncryptionAlgorithms ? [...contentEncryptionAlgorithms] : void 0,
                    keyManagementAlgorithms: keyManagementAlgorithms ? [...keyManagementAlgorithms] : void 0
                  });
                } catch (err) {
                  errs2.push(err);
                  continue;
                }
              }
              const multi2 = new errors.JOSEMultiError(errs2);
              if ([...multi2].some((e) => e instanceof errors.JWEDecryptionFailed)) {
                throw new errors.JWEDecryptionFailed();
              }
              throw multi2;
            }
          }
        }
        check(key, ...alg === "dir" ? ["decrypt", enc] : ["keyManagementDecrypt", alg]);
        if (alg.startsWith("PBES2")) {
          if (opts && opts.p2c > maxPBES2Count) {
            throw new errors.JWEInvalid('JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds');
          }
        }
        try {
          if (alg === "dir") {
            cek = JWK.asKey(key, { alg: enc, use: "enc" });
          } else if (alg === "ECDH-ES") {
            const unwrapped = keyManagementDecrypt(alg, key, void 0, opts);
            cek = JWK.asKey(createSecretKey(unwrapped), { alg: enc, use: "enc" });
          } else {
            const unwrapped = keyManagementDecrypt(alg, key, base64url.decodeToBuffer(encryptedKey), opts);
            cek = JWK.asKey(createSecretKey(unwrapped), { alg: enc, use: "enc" });
          }
        } catch (err) {
          cek = generateCEK(enc);
        }
        let adata;
        if (aad) {
          adata = Buffer.concat([
            Buffer.from(prot || ""),
            Buffer.from("."),
            Buffer.from(aad)
          ]);
        } else {
          adata = Buffer.from(prot || "");
        }
        try {
          iv = base64url.decodeToBuffer(iv);
        } catch (err) {
        }
        try {
          tag = base64url.decodeToBuffer(tag);
        } catch (err) {
        }
        let cleartext = decrypt(enc, cek, base64url.decodeToBuffer(ciphertext), { iv, tag, aad: adata });
        if (opts.zip) {
          cleartext = inflateRawSync(cleartext);
        }
        if (complete) {
          const result = { cleartext, key, cek };
          if (aad)
            result.aad = aad;
          if (header)
            result.header = header;
          if (unprotected)
            result.unprotected = unprotected;
          if (prot)
            result.protected = base64url.JSON.decode(prot);
          return result;
        }
        return cleartext;
      }
      validateHeaders(jwe.protected, jwe.unprotected, jwe.recipients.map(({ header: header2 }) => ({ header: header2 })), true, crit);
      const { recipients, ...root } = jwe;
      const errs = [];
      for (const recipient of recipients) {
        try {
          return jweDecrypt(true, "flattened", { ...root, ...recipient }, key, {
            crit,
            complete,
            contentEncryptionAlgorithms: contentEncryptionAlgorithms ? [...contentEncryptionAlgorithms] : void 0,
            keyManagementAlgorithms: keyManagementAlgorithms ? [...keyManagementAlgorithms] : void 0
          });
        } catch (err) {
          errs.push(err);
          continue;
        }
      }
      const multi = new errors.JOSEMultiError(errs);
      if ([...multi].some((e) => e instanceof errors.JWEDecryptionFailed)) {
        throw new errors.JWEDecryptionFailed();
      } else if ([...multi].every((e) => e instanceof errors.JWKSNoMatchingKey)) {
        throw new errors.JWKSNoMatchingKey();
      }
      throw multi;
    };
    module.exports = jweDecrypt.bind(void 0, false, void 0);
  }
});

// node_modules/jose/lib/jwe/index.js
var require_jwe = __commonJS({
  "node_modules/jose/lib/jwe/index.js"(exports, module) {
    var Encrypt = require_encrypt();
    var decrypt = require_decrypt();
    var single = (serialization, cleartext, key, protectedHeader, aad, unprotectedHeader) => {
      return new Encrypt(cleartext, protectedHeader, aad, unprotectedHeader).recipient(key).encrypt(serialization);
    };
    module.exports.Encrypt = Encrypt;
    module.exports.encrypt = single.bind(void 0, "compact");
    module.exports.encrypt.flattened = single.bind(void 0, "flattened");
    module.exports.encrypt.general = single.bind(void 0, "general");
    module.exports.decrypt = decrypt;
  }
});

// node_modules/jose/lib/jws/serializers.js
var require_serializers2 = __commonJS({
  "node_modules/jose/lib/jws/serializers.js"(exports, module) {
    var isObject = require_is_object();
    var validateCrit = require_validate_crit();
    var { JWSInvalid } = require_errors();
    validateCrit = validateCrit.bind(void 0, JWSInvalid);
    var compactSerializer = (payload, [recipient]) => {
      return `${recipient.protected}.${payload}.${recipient.signature}`;
    };
    compactSerializer.validate = (jws, { 0: { unprotectedHeader, protectedHeader }, length }) => {
      if (length !== 1 || unprotectedHeader) {
        throw new JWSInvalid("JWS Compact Serialization doesn't support multiple recipients or JWS unprotected headers");
      }
      validateCrit(protectedHeader, unprotectedHeader, protectedHeader ? protectedHeader.crit : void 0);
    };
    var flattenedSerializer = (payload, [recipient]) => {
      const { header, signature, protected: prot } = recipient;
      return {
        payload,
        ...prot ? { protected: prot } : void 0,
        ...header ? { header } : void 0,
        signature
      };
    };
    flattenedSerializer.validate = (jws, { 0: { unprotectedHeader, protectedHeader }, length }) => {
      if (length !== 1) {
        throw new JWSInvalid("Flattened JWS JSON Serialization doesn't support multiple recipients");
      }
      validateCrit(protectedHeader, unprotectedHeader, protectedHeader ? protectedHeader.crit : void 0);
    };
    var generalSerializer = (payload, recipients) => {
      return {
        payload,
        signatures: recipients.map(({ header, signature, protected: prot }) => {
          return {
            ...prot ? { protected: prot } : void 0,
            ...header ? { header } : void 0,
            signature
          };
        })
      };
    };
    generalSerializer.validate = (jws, recipients) => {
      let validateB64 = false;
      recipients.forEach(({ protectedHeader, unprotectedHeader }) => {
        if (protectedHeader && !validateB64 && "b64" in protectedHeader) {
          validateB64 = true;
        }
        validateCrit(protectedHeader, unprotectedHeader, protectedHeader ? protectedHeader.crit : void 0);
      });
      if (validateB64) {
        const values = recipients.map(({ protectedHeader }) => protectedHeader && protectedHeader.b64);
        if (!values.every((actual, i, [expected]) => actual === expected)) {
          throw new JWSInvalid('the "b64" Header Parameter value MUST be the same for all recipients');
        }
      }
    };
    var isJSON = (input) => {
      return isObject(input) && (typeof input.payload === "string" || Buffer.isBuffer(input.payload));
    };
    var isValidRecipient = (recipient) => {
      return isObject(recipient) && typeof recipient.signature === "string" && (recipient.header === void 0 || isObject(recipient.header)) && (recipient.protected === void 0 || typeof recipient.protected === "string");
    };
    var isMultiRecipient = (input) => {
      if (Array.isArray(input.signatures) && input.signatures.every(isValidRecipient)) {
        return true;
      }
      return false;
    };
    var detect = (input) => {
      if (typeof input === "string" && input.split(".").length === 3) {
        return "compact";
      }
      if (isJSON(input)) {
        if (isMultiRecipient(input)) {
          return "general";
        }
        if (isValidRecipient(input)) {
          return "flattened";
        }
      }
      throw new JWSInvalid("JWS malformed or invalid serialization");
    };
    module.exports = {
      compact: compactSerializer,
      flattened: flattenedSerializer,
      general: generalSerializer,
      detect
    };
  }
});

// node_modules/jose/lib/jws/sign.js
var require_sign = __commonJS({
  "node_modules/jose/lib/jws/sign.js"(exports, module) {
    var base64url = require_base64url();
    var isDisjoint = require_is_disjoint();
    var isObject = require_is_object();
    var deepClone = require_deep_clone();
    var { JWSInvalid } = require_errors();
    var { sign } = require_jwa2();
    var getKey = require_get_key();
    var serializers = require_serializers2();
    var PROCESS_RECIPIENT = Symbol("PROCESS_RECIPIENT");
    var Sign = class {
      constructor(payload) {
        if (typeof payload === "string") {
          payload = base64url.encode(payload);
        } else if (Buffer.isBuffer(payload)) {
          payload = base64url.encodeBuffer(payload);
          this._binary = true;
        } else if (isObject(payload)) {
          payload = base64url.JSON.encode(payload);
        } else {
          throw new TypeError("payload argument must be a Buffer, string or an object");
        }
        this._payload = payload;
        this._recipients = [];
      }
      recipient(key, protectedHeader, unprotectedHeader) {
        key = getKey(key);
        if (protectedHeader !== void 0 && !isObject(protectedHeader)) {
          throw new TypeError("protectedHeader argument must be a plain object when provided");
        }
        if (unprotectedHeader !== void 0 && !isObject(unprotectedHeader)) {
          throw new TypeError("unprotectedHeader argument must be a plain object when provided");
        }
        if (!isDisjoint(protectedHeader, unprotectedHeader)) {
          throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
        }
        this._recipients.push({
          key,
          protectedHeader: protectedHeader ? deepClone(protectedHeader) : void 0,
          unprotectedHeader: unprotectedHeader ? deepClone(unprotectedHeader) : void 0
        });
        return this;
      }
      [PROCESS_RECIPIENT](recipient, first) {
        const { key, protectedHeader, unprotectedHeader } = recipient;
        if (key.use === "enc") {
          throw new TypeError('a key with "use":"enc" is not usable for signing');
        }
        const joseHeader = {
          protected: protectedHeader || {},
          unprotected: unprotectedHeader || {}
        };
        let alg = joseHeader.protected.alg || joseHeader.unprotected.alg;
        if (!alg) {
          alg = key.alg || [...key.algorithms("sign")][0];
          if (recipient.protectedHeader) {
            joseHeader.protected.alg = recipient.protectedHeader.alg = alg;
          } else {
            joseHeader.protected = recipient.protectedHeader = { alg };
          }
        }
        if (!alg) {
          throw new JWSInvalid('could not resolve a usable "alg" for a recipient');
        }
        recipient.header = unprotectedHeader;
        recipient.protected = Object.keys(joseHeader.protected).length ? base64url.JSON.encode(joseHeader.protected) : "";
        if (first && joseHeader.protected.crit && joseHeader.protected.crit.includes("b64") && joseHeader.protected.b64 === false) {
          if (this._binary) {
            this._payload = base64url.decodeToBuffer(this._payload);
          } else {
            this._payload = base64url.decode(this._payload);
          }
        }
        const data = Buffer.concat([
          Buffer.from(recipient.protected || ""),
          Buffer.from("."),
          Buffer.from(this._payload)
        ]);
        recipient.signature = base64url.encodeBuffer(sign(alg, key, data));
      }
      sign(serialization) {
        const serializer = serializers[serialization];
        if (!serializer) {
          throw new TypeError('serialization must be one of "compact", "flattened", "general"');
        }
        if (!this._recipients.length) {
          throw new JWSInvalid("missing recipients");
        }
        serializer.validate(this, this._recipients);
        this._recipients.forEach((recipient, i) => {
          this[PROCESS_RECIPIENT](recipient, i === 0);
        });
        return serializer(this._payload, this._recipients);
      }
    };
    module.exports = Sign;
  }
});

// node_modules/jose/lib/jws/verify.js
var require_verify = __commonJS({
  "node_modules/jose/lib/jws/verify.js"(exports, module) {
    var { EOL } = require_os();
    var base64url = require_base64url();
    var isDisjoint = require_is_disjoint();
    var isObject = require_is_object();
    var validateCrit = require_validate_crit();
    var getKey = require_get_key();
    var { KeyStore } = require_jwks();
    var errors = require_errors();
    var { check, verify } = require_jwa2();
    var JWK = require_jwk2();
    var { detect: resolveSerialization } = require_serializers2();
    validateCrit = validateCrit.bind(void 0, errors.JWSInvalid);
    var SINGLE_RECIPIENT = /* @__PURE__ */ new Set(["compact", "flattened", "preparsed"]);
    var jwsVerify = (skipDisjointCheck, serialization, jws, key, { crit = [], complete = false, algorithms } = {}) => {
      key = getKey(key, true);
      if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string" || !s))) {
        throw new TypeError('"algorithms" option must be an array of non-empty strings');
      } else if (algorithms) {
        algorithms = new Set(algorithms);
      }
      if (!Array.isArray(crit) || crit.some((s) => typeof s !== "string" || !s)) {
        throw new TypeError('"crit" option must be an array of non-empty strings');
      }
      if (!serialization) {
        serialization = resolveSerialization(jws);
      }
      let prot;
      let header;
      let payload;
      let signature;
      let alg;
      if (serialization === "general" && jws.signatures.length === 1) {
        serialization = "flattened";
        const { signatures: signatures2, ...root2 } = jws;
        jws = { ...root2, ...signatures2[0] };
      }
      let decoded;
      if (SINGLE_RECIPIENT.has(serialization)) {
        let parsedProt = {};
        switch (serialization) {
          case "compact":
            [prot, payload, signature] = jws.split(".");
            break;
          case "flattened":
            ({ protected: prot, payload, signature, header } = jws);
            break;
          case "preparsed": {
            ({ decoded } = jws);
            [prot, payload, signature] = jws.token.split(".");
            break;
          }
        }
        if (!header) {
          skipDisjointCheck = true;
        }
        if (decoded) {
          parsedProt = decoded.header;
        } else if (prot) {
          try {
            parsedProt = base64url.JSON.decode(prot);
          } catch (err) {
            throw new errors.JWSInvalid("could not parse JWS protected header");
          }
        } else {
          skipDisjointCheck = skipDisjointCheck || true;
        }
        if (!skipDisjointCheck && !isDisjoint(parsedProt, header)) {
          throw new errors.JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
        }
        const combinedHeader = { ...parsedProt, ...header };
        validateCrit(parsedProt, header, crit);
        alg = parsedProt.alg || header && header.alg;
        if (!alg) {
          throw new errors.JWSInvalid("missing JWS signature algorithm");
        } else if (algorithms && !algorithms.has(alg)) {
          throw new errors.JOSEAlgNotWhitelisted("alg not whitelisted");
        }
        if (key instanceof KeyStore) {
          const keystore = key;
          const keys = keystore.all({ kid: combinedHeader.kid, alg: combinedHeader.alg, key_ops: ["verify"] });
          switch (keys.length) {
            case 0:
              throw new errors.JWKSNoMatchingKey();
            case 1:
              key = keys[0];
              break;
            default: {
              const errs2 = [];
              for (const key2 of keys) {
                try {
                  return jwsVerify(true, serialization, jws, key2, { crit, complete, algorithms: algorithms ? [...algorithms] : void 0 });
                } catch (err) {
                  errs2.push(err);
                  continue;
                }
              }
              const multi2 = new errors.JOSEMultiError(errs2);
              if ([...multi2].some((e) => e instanceof errors.JWSVerificationFailed)) {
                throw new errors.JWSVerificationFailed();
              }
              throw multi2;
            }
          }
        }
        if (key === JWK.EmbeddedJWK) {
          if (!isObject(combinedHeader.jwk)) {
            throw new errors.JWSInvalid('JWS Header Parameter "jwk" must be a JSON object');
          }
          key = JWK.asKey(combinedHeader.jwk);
          if (key.type !== "public") {
            throw new errors.JWSInvalid('JWS Header Parameter "jwk" must be a public key');
          }
        } else if (key === JWK.EmbeddedX5C) {
          if (!Array.isArray(combinedHeader.x5c) || !combinedHeader.x5c.length || combinedHeader.x5c.some((c) => typeof c !== "string" || !c)) {
            throw new errors.JWSInvalid('JWS Header Parameter "x5c" must be a JSON array of certificate value strings');
          }
          key = JWK.asKey(
            `-----BEGIN CERTIFICATE-----${EOL}${(combinedHeader.x5c[0].match(/.{1,64}/g) || []).join(EOL)}${EOL}-----END CERTIFICATE-----`,
            { x5c: combinedHeader.x5c }
          );
        }
        check(key, "verify", alg);
        const toBeVerified = Buffer.concat([
          Buffer.from(prot || ""),
          Buffer.from("."),
          Buffer.isBuffer(payload) ? payload : Buffer.from(payload)
        ]);
        if (!verify(alg, key, toBeVerified, base64url.decodeToBuffer(signature))) {
          throw new errors.JWSVerificationFailed();
        }
        if (combinedHeader.b64 === false) {
          payload = Buffer.from(payload);
        } else {
          payload = base64url.decodeToBuffer(payload);
        }
        if (complete) {
          const result = { payload, key };
          if (prot)
            result.protected = parsedProt;
          if (header)
            result.header = header;
          return result;
        }
        return payload;
      }
      const { signatures, ...root } = jws;
      const errs = [];
      for (const recipient of signatures) {
        try {
          return jwsVerify(false, "flattened", { ...root, ...recipient }, key, { crit, complete, algorithms: algorithms ? [...algorithms] : void 0 });
        } catch (err) {
          errs.push(err);
          continue;
        }
      }
      const multi = new errors.JOSEMultiError(errs);
      if ([...multi].some((e) => e instanceof errors.JWSVerificationFailed)) {
        throw new errors.JWSVerificationFailed();
      } else if ([...multi].every((e) => e instanceof errors.JWKSNoMatchingKey)) {
        throw new errors.JWKSNoMatchingKey();
      }
      throw multi;
    };
    module.exports = {
      bare: jwsVerify,
      verify: jwsVerify.bind(void 0, false, void 0)
    };
  }
});

// node_modules/jose/lib/jws/index.js
var require_jws = __commonJS({
  "node_modules/jose/lib/jws/index.js"(exports, module) {
    var Sign = require_sign();
    var { verify } = require_verify();
    var single = (serialization, payload, key, protectedHeader, unprotectedHeader) => {
      return new Sign(payload).recipient(key, protectedHeader, unprotectedHeader).sign(serialization);
    };
    module.exports.Sign = Sign;
    module.exports.sign = single.bind(void 0, "compact");
    module.exports.sign.flattened = single.bind(void 0, "flattened");
    module.exports.sign.general = single.bind(void 0, "general");
    module.exports.verify = verify;
  }
});

// node_modules/jose/lib/jwt/decode.js
var require_decode = __commonJS({
  "node_modules/jose/lib/jwt/decode.js"(exports, module) {
    var base64url = require_base64url();
    var errors = require_errors();
    module.exports = (token, { complete = false } = {}) => {
      if (typeof token !== "string" || !token) {
        throw new TypeError("JWT must be a string");
      }
      const { 0: header, 1: payload, 2: signature, length } = token.split(".");
      if (length === 5) {
        throw new TypeError("encrypted JWTs cannot be decoded");
      }
      if (length !== 3) {
        throw new errors.JWTMalformed("JWTs must have three components");
      }
      try {
        const result = {
          header: base64url.JSON.decode(header),
          payload: base64url.JSON.decode(payload),
          signature
        };
        return complete ? result : result.payload;
      } catch (err) {
        throw new errors.JWTMalformed("JWT is malformed");
      }
    };
  }
});

// node_modules/jose/lib/help/secs.js
var require_secs = __commonJS({
  "node_modules/jose/lib/help/secs.js"(exports, module) {
    var minute = 60;
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var year = day * 365.25;
    var REGEX = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
    module.exports = (str) => {
      const matched = REGEX.exec(str);
      if (!matched) {
        throw new TypeError(`invalid time period format ("${str}")`);
      }
      const value = parseFloat(matched[1]);
      const unit = matched[2].toLowerCase();
      switch (unit) {
        case "sec":
        case "secs":
        case "second":
        case "seconds":
        case "s":
          return Math.round(value);
        case "minute":
        case "minutes":
        case "min":
        case "mins":
        case "m":
          return Math.round(value * minute);
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
          return Math.round(value * hour);
        case "day":
        case "days":
        case "d":
          return Math.round(value * day);
        case "week":
        case "weeks":
        case "w":
          return Math.round(value * week);
        case "year":
        case "years":
        case "yr":
        case "yrs":
        case "y":
          return Math.round(value * year);
      }
    };
  }
});

// node_modules/jose/lib/help/epoch.js
var require_epoch = __commonJS({
  "node_modules/jose/lib/help/epoch.js"(exports, module) {
    module.exports = (date) => Math.floor(date.getTime() / 1e3);
  }
});

// node_modules/jose/lib/jwt/shared_validations.js
var require_shared_validations = __commonJS({
  "node_modules/jose/lib/jwt/shared_validations.js"(exports, module) {
    var { JWTClaimInvalid } = require_errors();
    var isNotString = (val) => typeof val !== "string" || val.length === 0;
    var isNotArrayOfStrings = (val) => !Array.isArray(val) || val.length === 0 || val.some(isNotString);
    var isRequired = (Err, value, label, claim) => {
      if (value === void 0) {
        throw new Err(`${label} is missing`, claim, "missing");
      }
    };
    var isString = (Err, value, label, claim, required = false) => {
      if (required) {
        isRequired(Err, value, label, claim);
      }
      if (value !== void 0 && isNotString(value)) {
        throw new Err(`${label} must be a string`, claim, "invalid");
      }
    };
    var isTimestamp = (value, label, required = false) => {
      if (required && value === void 0) {
        throw new JWTClaimInvalid(`"${label}" claim is missing`, label, "missing");
      }
      if (value !== void 0 && typeof value !== "number") {
        throw new JWTClaimInvalid(`"${label}" claim must be a JSON numeric value`, label, "invalid");
      }
    };
    var isStringOrArrayOfStrings = (value, label, required = false) => {
      if (required && value === void 0) {
        throw new JWTClaimInvalid(`"${label}" claim is missing`, label, "missing");
      }
      if (value !== void 0 && (isNotString(value) && isNotArrayOfStrings(value))) {
        throw new JWTClaimInvalid(`"${label}" claim must be a string or array of strings`, label, "invalid");
      }
    };
    module.exports = {
      isNotArrayOfStrings,
      isRequired,
      isNotString,
      isString,
      isTimestamp,
      isStringOrArrayOfStrings
    };
  }
});

// node_modules/jose/lib/jwt/sign.js
var require_sign2 = __commonJS({
  "node_modules/jose/lib/jwt/sign.js"(exports, module) {
    var isObject = require_is_object();
    var secs = require_secs();
    var epoch = require_epoch();
    var getKey = require_get_key();
    var JWS = require_jws();
    var isString = require_shared_validations().isString.bind(void 0, TypeError);
    var validateOptions = (options) => {
      if (typeof options.iat !== "boolean") {
        throw new TypeError("options.iat must be a boolean");
      }
      if (typeof options.kid !== "boolean") {
        throw new TypeError("options.kid must be a boolean");
      }
      isString(options.subject, "options.subject");
      isString(options.issuer, "options.issuer");
      if (options.audience !== void 0 && ((typeof options.audience !== "string" || !options.audience) && (!Array.isArray(options.audience) || options.audience.length === 0 || options.audience.some((a) => !a || typeof a !== "string")))) {
        throw new TypeError("options.audience must be a string or an array of strings");
      }
      if (!isObject(options.header)) {
        throw new TypeError("options.header must be an object");
      }
      isString(options.algorithm, "options.algorithm");
      isString(options.expiresIn, "options.expiresIn");
      isString(options.notBefore, "options.notBefore");
      isString(options.jti, "options.jti");
      if (options.now !== void 0 && (!(options.now instanceof Date) || !options.now.getTime())) {
        throw new TypeError("options.now must be a valid Date object");
      }
    };
    module.exports = (payload, key, options = {}) => {
      if (!isObject(options)) {
        throw new TypeError("options must be an object");
      }
      const {
        algorithm,
        audience,
        expiresIn,
        header = {},
        iat = true,
        issuer,
        jti,
        kid = true,
        notBefore,
        subject,
        now
      } = options;
      validateOptions({
        algorithm,
        audience,
        expiresIn,
        header,
        iat,
        issuer,
        jti,
        kid,
        notBefore,
        now,
        subject
      });
      if (!isObject(payload)) {
        throw new TypeError("payload must be an object");
      }
      let unix;
      if (expiresIn || notBefore || iat) {
        unix = epoch(now || new Date());
      }
      payload = {
        ...payload,
        sub: subject || payload.sub,
        aud: audience || payload.aud,
        iss: issuer || payload.iss,
        jti: jti || payload.jti,
        iat: iat ? unix : payload.iat,
        exp: expiresIn ? unix + secs(expiresIn) : payload.exp,
        nbf: notBefore ? unix + secs(notBefore) : payload.nbf
      };
      key = getKey(key);
      let includeKid;
      if (typeof options.kid === "boolean") {
        includeKid = kid;
      } else {
        includeKid = !key.secret;
      }
      return JWS.sign(JSON.stringify(payload), key, {
        ...header,
        alg: algorithm || header.alg,
        kid: includeKid ? key.kid : header.kid
      });
    };
  }
});

// node_modules/jose/lib/jwt/verify.js
var require_verify2 = __commonJS({
  "node_modules/jose/lib/jwt/verify.js"(exports, module) {
    var isObject = require_is_object();
    var epoch = require_epoch();
    var secs = require_secs();
    var getKey = require_get_key();
    var { bare: verify } = require_verify();
    var { JWTClaimInvalid, JWTExpired } = require_errors();
    var {
      isString,
      isNotString,
      isNotArrayOfStrings,
      isTimestamp,
      isStringOrArrayOfStrings
    } = require_shared_validations();
    var decode = require_decode();
    var isPayloadString = isString.bind(void 0, JWTClaimInvalid);
    var isOptionString = isString.bind(void 0, TypeError);
    var normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, "");
    var validateOptions = ({
      algorithms,
      audience,
      clockTolerance,
      complete = false,
      crit,
      ignoreExp = false,
      ignoreIat = false,
      ignoreNbf = false,
      issuer,
      jti,
      maxTokenAge,
      now = new Date(),
      subject,
      typ
    }) => {
      if (typeof complete !== "boolean") {
        throw new TypeError("options.complete must be a boolean");
      }
      if (typeof ignoreExp !== "boolean") {
        throw new TypeError("options.ignoreExp must be a boolean");
      }
      if (typeof ignoreNbf !== "boolean") {
        throw new TypeError("options.ignoreNbf must be a boolean");
      }
      if (typeof ignoreIat !== "boolean") {
        throw new TypeError("options.ignoreIat must be a boolean");
      }
      isOptionString(maxTokenAge, "options.maxTokenAge");
      isOptionString(subject, "options.subject");
      isOptionString(jti, "options.jti");
      isOptionString(clockTolerance, "options.clockTolerance");
      isOptionString(typ, "options.typ");
      if (issuer !== void 0 && (isNotString(issuer) && isNotArrayOfStrings(issuer))) {
        throw new TypeError("options.issuer must be a string or an array of strings");
      }
      if (audience !== void 0 && (isNotString(audience) && isNotArrayOfStrings(audience))) {
        throw new TypeError("options.audience must be a string or an array of strings");
      }
      if (algorithms !== void 0 && isNotArrayOfStrings(algorithms)) {
        throw new TypeError("options.algorithms must be an array of strings");
      }
      if (!(now instanceof Date) || !now.getTime()) {
        throw new TypeError("options.now must be a valid Date object");
      }
      if (ignoreIat && maxTokenAge !== void 0) {
        throw new TypeError("options.ignoreIat and options.maxTokenAge cannot used together");
      }
      if (crit !== void 0 && isNotArrayOfStrings(crit)) {
        throw new TypeError("options.crit must be an array of strings");
      }
      return {
        algorithms,
        audience,
        clockTolerance,
        complete,
        crit,
        ignoreExp,
        ignoreIat,
        ignoreNbf,
        issuer,
        jti,
        maxTokenAge,
        now,
        subject,
        typ
      };
    };
    var validateTypes = ({ header, payload }, options) => {
      isPayloadString(header.alg, '"alg" header parameter', "alg", true);
      isTimestamp(payload.iat, "iat", !!options.maxTokenAge);
      isTimestamp(payload.exp, "exp");
      isTimestamp(payload.nbf, "nbf");
      isPayloadString(payload.jti, '"jti" claim', "jti", !!options.jti);
      isStringOrArrayOfStrings(payload.iss, "iss", !!options.issuer);
      isPayloadString(payload.sub, '"sub" claim', "sub", !!options.subject);
      isStringOrArrayOfStrings(payload.aud, "aud", !!options.audience);
      isPayloadString(header.typ, '"typ" header parameter', "typ", !!options.typ);
    };
    var checkAudiencePresence = (audPayload, audOption) => {
      if (typeof audPayload === "string") {
        return audOption.includes(audPayload);
      }
      audPayload = new Set(audPayload);
      return audOption.some(Set.prototype.has.bind(audPayload));
    };
    module.exports = (token, key, options = {}) => {
      if (!isObject(options)) {
        throw new TypeError("options must be an object");
      }
      const {
        algorithms,
        audience,
        clockTolerance,
        complete,
        crit,
        ignoreExp,
        ignoreIat,
        ignoreNbf,
        issuer,
        jti,
        maxTokenAge,
        now,
        subject,
        typ
      } = options = validateOptions(options);
      const decoded = decode(token, { complete: true });
      key = getKey(key, true);
      if (complete) {
        ({ key } = verify(true, "preparsed", { decoded, token }, key, { crit, algorithms, complete: true }));
        decoded.key = key;
      } else {
        verify(true, "preparsed", { decoded, token }, key, { crit, algorithms });
      }
      const unix = epoch(now);
      validateTypes(decoded, options);
      if (issuer && (typeof decoded.payload.iss !== "string" || !(typeof issuer === "string" ? [issuer] : issuer).includes(decoded.payload.iss))) {
        throw new JWTClaimInvalid('unexpected "iss" claim value', "iss", "check_failed");
      }
      if (subject && decoded.payload.sub !== subject) {
        throw new JWTClaimInvalid('unexpected "sub" claim value', "sub", "check_failed");
      }
      if (jti && decoded.payload.jti !== jti) {
        throw new JWTClaimInvalid('unexpected "jti" claim value', "jti", "check_failed");
      }
      if (audience && !checkAudiencePresence(decoded.payload.aud, typeof audience === "string" ? [audience] : audience)) {
        throw new JWTClaimInvalid('unexpected "aud" claim value', "aud", "check_failed");
      }
      if (typ && normalizeTyp(decoded.header.typ) !== normalizeTyp(typ)) {
        throw new JWTClaimInvalid('unexpected "typ" JWT header value', "typ", "check_failed");
      }
      const tolerance = clockTolerance ? secs(clockTolerance) : 0;
      if (!ignoreIat && !("exp" in decoded.payload) && "iat" in decoded.payload && decoded.payload.iat > unix + tolerance) {
        throw new JWTClaimInvalid('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed");
      }
      if (!ignoreNbf && "nbf" in decoded.payload && decoded.payload.nbf > unix + tolerance) {
        throw new JWTClaimInvalid('"nbf" claim timestamp check failed', "nbf", "check_failed");
      }
      if (!ignoreExp && "exp" in decoded.payload && decoded.payload.exp <= unix - tolerance) {
        throw new JWTExpired('"exp" claim timestamp check failed', "exp", "check_failed");
      }
      if (maxTokenAge) {
        const age = unix - decoded.payload.iat;
        const max = secs(maxTokenAge);
        if (age - tolerance > max) {
          throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
        }
        if (age < 0 - tolerance) {
          throw new JWTClaimInvalid('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed");
        }
      }
      return complete ? decoded : decoded.payload;
    };
  }
});

// node_modules/jose/lib/jwt/profiles.js
var require_profiles = __commonJS({
  "node_modules/jose/lib/jwt/profiles.js"(exports, module) {
    var { JWTClaimInvalid } = require_errors();
    var secs = require_secs();
    var epoch = require_epoch();
    var isObject = require_is_object();
    var verify = require_verify2();
    var {
      isString,
      isRequired,
      isTimestamp,
      isStringOrArrayOfStrings
    } = require_shared_validations();
    var isPayloadRequired = isRequired.bind(void 0, JWTClaimInvalid);
    var isPayloadString = isString.bind(void 0, JWTClaimInvalid);
    var isOptionString = isString.bind(void 0, TypeError);
    var defineLazyExportWithWarning = (obj, property, name, definition) => {
      Object.defineProperty(obj, property, {
        enumerable: true,
        configurable: true,
        value(...args) {
          process.emitWarning(
            `The ${name} API implements an IETF draft. Breaking draft implementations are included as minor versions of the jose library, therefore, the ~ semver operator should be used and close attention be payed to library changelog as well as the drafts themselves.`,
            "DraftWarning"
          );
          Object.defineProperty(obj, property, {
            enumerable: true,
            configurable: true,
            value: definition
          });
          return obj[property](...args);
        }
      });
    };
    var validateCommonOptions = (options, profile) => {
      if (!isObject(options)) {
        throw new TypeError("options must be an object");
      }
      if (!options.issuer) {
        throw new TypeError(`"issuer" option is required to validate ${profile}`);
      }
      if (!options.audience) {
        throw new TypeError(`"audience" option is required to validate ${profile}`);
      }
    };
    module.exports = {
      IdToken: {
        verify: (token, key, options = {}) => {
          validateCommonOptions(options, "an ID Token");
          if ("maxAuthAge" in options) {
            isOptionString(options.maxAuthAge, "options.maxAuthAge");
          }
          if ("nonce" in options) {
            isOptionString(options.nonce, "options.nonce");
          }
          const unix = epoch(options.now || new Date());
          const result = verify(token, key, { ...options });
          const payload = options.complete ? result.payload : result;
          if (Array.isArray(payload.aud) && payload.aud.length > 1) {
            isPayloadRequired(payload.azp, '"azp" claim', "azp");
          }
          isPayloadRequired(payload.iat, '"iat" claim', "iat");
          isPayloadRequired(payload.sub, '"sub" claim', "sub");
          isPayloadRequired(payload.exp, '"exp" claim', "exp");
          isTimestamp(payload.auth_time, "auth_time", !!options.maxAuthAge);
          isPayloadString(payload.nonce, '"nonce" claim', "nonce", !!options.nonce);
          isPayloadString(payload.acr, '"acr" claim', "acr");
          isStringOrArrayOfStrings(payload.amr, "amr");
          if (options.nonce && payload.nonce !== options.nonce) {
            throw new JWTClaimInvalid('unexpected "nonce" claim value', "nonce", "check_failed");
          }
          const tolerance = options.clockTolerance ? secs(options.clockTolerance) : 0;
          if (options.maxAuthAge) {
            const maxAuthAgeSeconds = secs(options.maxAuthAge);
            if (payload.auth_time + maxAuthAgeSeconds < unix - tolerance) {
              throw new JWTClaimInvalid('"auth_time" claim timestamp check failed (too much time has elapsed since the last End-User authentication)', "auth_time", "check_failed");
            }
          }
          if (Array.isArray(payload.aud) && payload.aud.length > 1 && payload.azp !== options.audience) {
            throw new JWTClaimInvalid('unexpected "azp" claim value', "azp", "check_failed");
          }
          return result;
        }
      },
      LogoutToken: {},
      AccessToken: {}
    };
    defineLazyExportWithWarning(module.exports.LogoutToken, "verify", "jose.JWT.LogoutToken.verify", (token, key, options = {}) => {
      validateCommonOptions(options, "a Logout Token");
      const result = verify(token, key, { ...options });
      const payload = options.complete ? result.payload : result;
      isPayloadRequired(payload.iat, '"iat" claim', "iat");
      isPayloadRequired(payload.jti, '"jti" claim', "jti");
      isPayloadString(payload.sid, '"sid" claim', "sid");
      if (!("sid" in payload) && !("sub" in payload)) {
        throw new JWTClaimInvalid('either "sid" or "sub" (or both) claims must be present');
      }
      if ("nonce" in payload) {
        throw new JWTClaimInvalid('"nonce" claim is prohibited', "nonce", "prohibited");
      }
      if (!("events" in payload)) {
        throw new JWTClaimInvalid('"events" claim is missing', "events", "missing");
      }
      if (!isObject(payload.events)) {
        throw new JWTClaimInvalid('"events" claim must be an object', "events", "invalid");
      }
      if (!("http://schemas.openid.net/event/backchannel-logout" in payload.events)) {
        throw new JWTClaimInvalid('"http://schemas.openid.net/event/backchannel-logout" member is missing in the "events" claim', "events", "invalid");
      }
      if (!isObject(payload.events["http://schemas.openid.net/event/backchannel-logout"])) {
        throw new JWTClaimInvalid('"http://schemas.openid.net/event/backchannel-logout" member in the "events" claim must be an object', "events", "invalid");
      }
      return result;
    });
    defineLazyExportWithWarning(module.exports.AccessToken, "verify", "jose.JWT.AccessToken.verify", (token, key, options = {}) => {
      validateCommonOptions(options, "a JWT Access Token");
      isOptionString(options.maxAuthAge, "options.maxAuthAge");
      const unix = epoch(options.now || new Date());
      const typ = "at+JWT";
      const result = verify(token, key, { ...options, typ });
      const payload = options.complete ? result.payload : result;
      isPayloadRequired(payload.iat, '"iat" claim', "iat");
      isPayloadRequired(payload.exp, '"exp" claim', "exp");
      isPayloadRequired(payload.sub, '"sub" claim', "sub");
      isPayloadRequired(payload.jti, '"jti" claim', "jti");
      isPayloadString(payload.client_id, '"client_id" claim', "client_id", true);
      isTimestamp(payload.auth_time, "auth_time", !!options.maxAuthAge);
      isPayloadString(payload.acr, '"acr" claim', "acr");
      isStringOrArrayOfStrings(payload.amr, "amr");
      const tolerance = options.clockTolerance ? secs(options.clockTolerance) : 0;
      if (options.maxAuthAge) {
        const maxAuthAgeSeconds = secs(options.maxAuthAge);
        if (payload.auth_time + maxAuthAgeSeconds < unix - tolerance) {
          throw new JWTClaimInvalid('"auth_time" claim timestamp check failed (too much time has elapsed since the last End-User authentication)', "auth_time", "check_failed");
        }
      }
      return result;
    });
  }
});

// node_modules/jose/lib/jwt/index.js
var require_jwt = __commonJS({
  "node_modules/jose/lib/jwt/index.js"(exports, module) {
    var decode = require_decode();
    var sign = require_sign2();
    var verify = require_verify2();
    var profiles = require_profiles();
    module.exports = {
      sign,
      verify,
      ...profiles
    };
    Object.defineProperty(module.exports, "decode", {
      enumerable: false,
      configurable: true,
      value: decode
    });
  }
});

// node_modules/jose/lib/index.js
var require_lib = __commonJS({
  "node_modules/jose/lib/index.js"(exports, module) {
    module.exports = {
      JWE: require_jwe(),
      JWK: require_jwk2(),
      JWKS: require_jwks(),
      JWS: require_jws(),
      JWT: require_jwt(),
      errors: require_errors()
    };
  }
});

// node_modules/jwks-rsa/src/utils.js
var require_utils2 = __commonJS({
  "node_modules/jwks-rsa/src/utils.js"(exports, module) {
    var jose = require_lib();
    function retrieveSigningKeys(keys) {
      const keystore = jose.JWKS.asKeyStore({ keys }, { ignoreErrors: true });
      return keystore.all({ use: "sig" }).map((key) => {
        return {
          kid: key.kid,
          alg: key.alg,
          get publicKey() {
            return key.toPEM(false);
          },
          get rsaPublicKey() {
            return key.toPEM(false);
          },
          getPublicKey() {
            return key.toPEM(false);
          }
        };
      });
    }
    module.exports = {
      retrieveSigningKeys
    };
  }
});

// node_modules/jwks-rsa/src/wrappers/request.js
var require_request = __commonJS({
  "node_modules/jwks-rsa/src/wrappers/request.js"(exports, module) {
    var http = require_http();
    var https = require_https();
    var urlUtil = require_url();
    module.exports.default = (options) => {
      if (options.fetcher) {
        return options.fetcher(options.uri);
      }
      return new Promise((resolve, reject) => {
        const {
          hostname,
          path,
          port,
          protocol
        } = urlUtil.parse(options.uri);
        const requestOptions = {
          hostname,
          path,
          port,
          method: "GET",
          ...options.headers && { headers: { ...options.headers } },
          ...options.timeout && { timeout: options.timeout },
          ...options.agent && { agent: options.agent }
        };
        const httpRequestLib = protocol === "https:" ? https : http;
        const httpRequest = httpRequestLib.request(requestOptions, (res) => {
          let rawData = "";
          res.setEncoding("utf8");
          res.on("data", (chunk) => {
            rawData += chunk;
          });
          res.on("end", () => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
              const errorMsg = res.body && (res.body.message || res.body) || res.statusMessage || `Http Error ${res.statusCode}`;
              reject({ errorMsg });
            } else {
              try {
                resolve(rawData && JSON.parse(rawData));
              } catch (error) {
                reject(error);
              }
            }
          });
        });
        httpRequest.on("timeout", () => httpRequest.destroy()).on("error", (e) => reject(e)).end();
      });
    };
  }
});

// node_modules/pseudomap/pseudomap.js
var require_pseudomap = __commonJS({
  "node_modules/pseudomap/pseudomap.js"(exports, module) {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    module.exports = PseudoMap;
    function PseudoMap(set2) {
      if (!(this instanceof PseudoMap))
        throw new TypeError("Constructor PseudoMap requires 'new'");
      this.clear();
      if (set2) {
        if (set2 instanceof PseudoMap || typeof Map === "function" && set2 instanceof Map)
          set2.forEach(function(value, key) {
            this.set(key, value);
          }, this);
        else if (Array.isArray(set2))
          set2.forEach(function(kv) {
            this.set(kv[0], kv[1]);
          }, this);
        else
          throw new TypeError("invalid argument");
      }
    }
    PseudoMap.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      Object.keys(this._data).forEach(function(k) {
        if (k !== "size")
          fn.call(thisp, this._data[k].value, this._data[k].key);
      }, this);
    };
    PseudoMap.prototype.has = function(k) {
      return !!find(this._data, k);
    };
    PseudoMap.prototype.get = function(k) {
      var res = find(this._data, k);
      return res && res.value;
    };
    PseudoMap.prototype.set = function(k, v) {
      set(this._data, k, v);
    };
    PseudoMap.prototype.delete = function(k) {
      var res = find(this._data, k);
      if (res) {
        delete this._data[res._index];
        this._data.size--;
      }
    };
    PseudoMap.prototype.clear = function() {
      var data = /* @__PURE__ */ Object.create(null);
      data.size = 0;
      Object.defineProperty(this, "_data", {
        value: data,
        enumerable: false,
        configurable: true,
        writable: false
      });
    };
    Object.defineProperty(PseudoMap.prototype, "size", {
      get: function() {
        return this._data.size;
      },
      set: function(n) {
      },
      enumerable: true,
      configurable: true
    });
    PseudoMap.prototype.values = PseudoMap.prototype.keys = PseudoMap.prototype.entries = function() {
      throw new Error("iterators are not implemented in this version");
    };
    function same(a, b) {
      return a === b || a !== a && b !== b;
    }
    function Entry(k, v, i) {
      this.key = k;
      this.value = v;
      this._index = i;
    }
    function find(data, k) {
      for (var i = 0, s = "_" + k, key = s; hasOwnProperty.call(data, key); key = s + i++) {
        if (same(data[key].key, k))
          return data[key];
      }
    }
    function set(data, k, v) {
      for (var i = 0, s = "_" + k, key = s; hasOwnProperty.call(data, key); key = s + i++) {
        if (same(data[key].key, k)) {
          data[key].value = v;
          return;
        }
      }
      data.size++;
      data[key] = new Entry(k, v, key);
    }
  }
});

// node_modules/pseudomap/map.js
var require_map = __commonJS({
  "node_modules/pseudomap/map.js"(exports, module) {
    if (process.env.npm_package_name === "pseudomap" && process.env.npm_lifecycle_script === "test")
      process.env.TEST_PSEUDOMAP = "true";
    if (typeof Map === "function" && !process.env.TEST_PSEUDOMAP) {
      module.exports = Map;
    } else {
      module.exports = require_pseudomap();
    }
  }
});

// node_modules/lru-memoizer/node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "node_modules/lru-memoizer/node_modules/yallist/yallist.js"(exports, module) {
    module.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self2 = this;
      if (!(self2 instanceof Yallist)) {
        self2 = new Yallist();
      }
      self2.tail = null;
      self2.head = null;
      self2.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self2.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self2.push(arguments[i]);
        }
      }
      return self2;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        walker = walker.next;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        walker = walker.prev;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next;
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
        walker = walker.prev;
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function push(self2, item) {
      self2.tail = new Node(item, self2.tail, null, self2);
      if (!self2.head) {
        self2.head = self2.tail;
      }
      self2.length++;
    }
    function unshift(self2, item) {
      self2.head = new Node(item, null, self2.head, self2);
      if (!self2.tail) {
        self2.tail = self2.head;
      }
      self2.length++;
    }
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
  }
});

// node_modules/lru-memoizer/node_modules/lru-cache/lib/lru-cache.js
var require_lru_cache = __commonJS({
  "node_modules/lru-memoizer/node_modules/lru-cache/lib/lru-cache.js"(exports, module) {
    module.exports = LRUCache;
    var Map2 = require_map();
    var util = require_util();
    var Yallist = require_yallist();
    var symbols = {};
    var hasSymbol = typeof Symbol === "function";
    var makeSymbol;
    if (hasSymbol) {
      makeSymbol = function(key) {
        return Symbol.for(key);
      };
    } else {
      makeSymbol = function(key) {
        return "_" + key;
      };
    }
    function priv(obj, key, val) {
      var sym;
      if (symbols[key]) {
        sym = symbols[key];
      } else {
        sym = makeSymbol(key);
        symbols[key] = sym;
      }
      if (arguments.length === 2) {
        return obj[sym];
      } else {
        obj[sym] = val;
        return val;
      }
    }
    function naiveLength() {
      return 1;
    }
    function LRUCache(options) {
      if (!(this instanceof LRUCache)) {
        return new LRUCache(options);
      }
      if (typeof options === "number") {
        options = { max: options };
      }
      if (!options) {
        options = {};
      }
      var max = priv(this, "max", options.max);
      if (!max || !(typeof max === "number") || max <= 0) {
        priv(this, "max", Infinity);
      }
      var lc = options.length || naiveLength;
      if (typeof lc !== "function") {
        lc = naiveLength;
      }
      priv(this, "lengthCalculator", lc);
      priv(this, "allowStale", options.stale || false);
      priv(this, "maxAge", options.maxAge || 0);
      priv(this, "dispose", options.dispose);
      this.reset();
    }
    Object.defineProperty(LRUCache.prototype, "max", {
      set: function(mL) {
        if (!mL || !(typeof mL === "number") || mL <= 0) {
          mL = Infinity;
        }
        priv(this, "max", mL);
        trim(this);
      },
      get: function() {
        return priv(this, "max");
      },
      enumerable: true
    });
    Object.defineProperty(LRUCache.prototype, "allowStale", {
      set: function(allowStale) {
        priv(this, "allowStale", !!allowStale);
      },
      get: function() {
        return priv(this, "allowStale");
      },
      enumerable: true
    });
    Object.defineProperty(LRUCache.prototype, "maxAge", {
      set: function(mA) {
        if (!mA || !(typeof mA === "number") || mA < 0) {
          mA = 0;
        }
        priv(this, "maxAge", mA);
        trim(this);
      },
      get: function() {
        return priv(this, "maxAge");
      },
      enumerable: true
    });
    Object.defineProperty(LRUCache.prototype, "lengthCalculator", {
      set: function(lC) {
        if (typeof lC !== "function") {
          lC = naiveLength;
        }
        if (lC !== priv(this, "lengthCalculator")) {
          priv(this, "lengthCalculator", lC);
          priv(this, "length", 0);
          priv(this, "lruList").forEach(function(hit) {
            hit.length = priv(this, "lengthCalculator").call(this, hit.value, hit.key);
            priv(this, "length", priv(this, "length") + hit.length);
          }, this);
        }
        trim(this);
      },
      get: function() {
        return priv(this, "lengthCalculator");
      },
      enumerable: true
    });
    Object.defineProperty(LRUCache.prototype, "length", {
      get: function() {
        return priv(this, "length");
      },
      enumerable: true
    });
    Object.defineProperty(LRUCache.prototype, "itemCount", {
      get: function() {
        return priv(this, "lruList").length;
      },
      enumerable: true
    });
    LRUCache.prototype.rforEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = priv(this, "lruList").tail; walker !== null; ) {
        var prev = walker.prev;
        forEachStep(this, fn, walker, thisp);
        walker = prev;
      }
    };
    function forEachStep(self2, fn, node, thisp) {
      var hit = node.value;
      if (isStale(self2, hit)) {
        del(self2, node);
        if (!priv(self2, "allowStale")) {
          hit = void 0;
        }
      }
      if (hit) {
        fn.call(thisp, hit.value, hit.key, self2);
      }
    }
    LRUCache.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = priv(this, "lruList").head; walker !== null; ) {
        var next = walker.next;
        forEachStep(this, fn, walker, thisp);
        walker = next;
      }
    };
    LRUCache.prototype.keys = function() {
      return priv(this, "lruList").toArray().map(function(k) {
        return k.key;
      }, this);
    };
    LRUCache.prototype.values = function() {
      return priv(this, "lruList").toArray().map(function(k) {
        return k.value;
      }, this);
    };
    LRUCache.prototype.reset = function() {
      if (priv(this, "dispose") && priv(this, "lruList") && priv(this, "lruList").length) {
        priv(this, "lruList").forEach(function(hit) {
          priv(this, "dispose").call(this, hit.key, hit.value);
        }, this);
      }
      priv(this, "cache", new Map2());
      priv(this, "lruList", new Yallist());
      priv(this, "length", 0);
    };
    LRUCache.prototype.dump = function() {
      return priv(this, "lruList").map(function(hit) {
        if (!isStale(this, hit)) {
          return {
            k: hit.key,
            v: hit.value,
            e: hit.now + (hit.maxAge || 0)
          };
        }
      }, this).toArray().filter(function(h) {
        return h;
      });
    };
    LRUCache.prototype.dumpLru = function() {
      return priv(this, "lruList");
    };
    LRUCache.prototype.inspect = function(n, opts) {
      var str = "LRUCache {";
      var extras = false;
      var as = priv(this, "allowStale");
      if (as) {
        str += "\n  allowStale: true";
        extras = true;
      }
      var max = priv(this, "max");
      if (max && max !== Infinity) {
        if (extras) {
          str += ",";
        }
        str += "\n  max: " + util.inspect(max, opts);
        extras = true;
      }
      var maxAge = priv(this, "maxAge");
      if (maxAge) {
        if (extras) {
          str += ",";
        }
        str += "\n  maxAge: " + util.inspect(maxAge, opts);
        extras = true;
      }
      var lc = priv(this, "lengthCalculator");
      if (lc && lc !== naiveLength) {
        if (extras) {
          str += ",";
        }
        str += "\n  length: " + util.inspect(priv(this, "length"), opts);
        extras = true;
      }
      var didFirst = false;
      priv(this, "lruList").forEach(function(item) {
        if (didFirst) {
          str += ",\n  ";
        } else {
          if (extras) {
            str += ",\n";
          }
          didFirst = true;
          str += "\n  ";
        }
        var key = util.inspect(item.key).split("\n").join("\n  ");
        var val = { value: item.value };
        if (item.maxAge !== maxAge) {
          val.maxAge = item.maxAge;
        }
        if (lc !== naiveLength) {
          val.length = item.length;
        }
        if (isStale(this, item)) {
          val.stale = true;
        }
        val = util.inspect(val, opts).split("\n").join("\n  ");
        str += key + " => " + val;
      });
      if (didFirst || extras) {
        str += "\n";
      }
      str += "}";
      return str;
    };
    LRUCache.prototype.set = function(key, value, maxAge) {
      maxAge = maxAge || priv(this, "maxAge");
      var now = maxAge ? Date.now() : 0;
      var len = priv(this, "lengthCalculator").call(this, value, key);
      if (priv(this, "cache").has(key)) {
        if (len > priv(this, "max")) {
          del(this, priv(this, "cache").get(key));
          return false;
        }
        var node = priv(this, "cache").get(key);
        var item = node.value;
        if (priv(this, "dispose")) {
          priv(this, "dispose").call(this, key, item.value);
        }
        item.now = now;
        item.maxAge = maxAge;
        item.value = value;
        priv(this, "length", priv(this, "length") + (len - item.length));
        item.length = len;
        this.get(key);
        trim(this);
        return true;
      }
      var hit = new Entry(key, value, len, now, maxAge);
      if (hit.length > priv(this, "max")) {
        if (priv(this, "dispose")) {
          priv(this, "dispose").call(this, key, value);
        }
        return false;
      }
      priv(this, "length", priv(this, "length") + hit.length);
      priv(this, "lruList").unshift(hit);
      priv(this, "cache").set(key, priv(this, "lruList").head);
      trim(this);
      return true;
    };
    LRUCache.prototype.has = function(key) {
      if (!priv(this, "cache").has(key))
        return false;
      var hit = priv(this, "cache").get(key).value;
      if (isStale(this, hit)) {
        return false;
      }
      return true;
    };
    LRUCache.prototype.get = function(key) {
      return get(this, key, true);
    };
    LRUCache.prototype.peek = function(key) {
      return get(this, key, false);
    };
    LRUCache.prototype.pop = function() {
      var node = priv(this, "lruList").tail;
      if (!node)
        return null;
      del(this, node);
      return node.value;
    };
    LRUCache.prototype.del = function(key) {
      del(this, priv(this, "cache").get(key));
    };
    LRUCache.prototype.load = function(arr) {
      this.reset();
      var now = Date.now();
      for (var l = arr.length - 1; l >= 0; l--) {
        var hit = arr[l];
        var expiresAt = hit.e || 0;
        if (expiresAt === 0) {
          this.set(hit.k, hit.v);
        } else {
          var maxAge = expiresAt - now;
          if (maxAge > 0) {
            this.set(hit.k, hit.v, maxAge);
          }
        }
      }
    };
    LRUCache.prototype.prune = function() {
      var self2 = this;
      priv(this, "cache").forEach(function(value, key) {
        get(self2, key, false);
      });
    };
    function get(self2, key, doUse) {
      var node = priv(self2, "cache").get(key);
      if (node) {
        var hit = node.value;
        if (isStale(self2, hit)) {
          del(self2, node);
          if (!priv(self2, "allowStale"))
            hit = void 0;
        } else {
          if (doUse) {
            priv(self2, "lruList").unshiftNode(node);
          }
        }
        if (hit)
          hit = hit.value;
      }
      return hit;
    }
    function isStale(self2, hit) {
      if (!hit || !hit.maxAge && !priv(self2, "maxAge")) {
        return false;
      }
      var stale = false;
      var diff = Date.now() - hit.now;
      if (hit.maxAge) {
        stale = diff > hit.maxAge;
      } else {
        stale = priv(self2, "maxAge") && diff > priv(self2, "maxAge");
      }
      return stale;
    }
    function trim(self2) {
      if (priv(self2, "length") > priv(self2, "max")) {
        for (var walker = priv(self2, "lruList").tail; priv(self2, "length") > priv(self2, "max") && walker !== null; ) {
          var prev = walker.prev;
          del(self2, walker);
          walker = prev;
        }
      }
    }
    function del(self2, node) {
      if (node) {
        var hit = node.value;
        if (priv(self2, "dispose")) {
          priv(self2, "dispose").call(this, hit.key, hit.value);
        }
        priv(self2, "length", priv(self2, "length") - hit.length);
        priv(self2, "cache").delete(hit.key);
        priv(self2, "lruList").removeNode(node);
      }
    }
    function Entry(key, value, length, now, maxAge) {
      this.key = key;
      this.value = value;
      this.length = length;
      this.now = now;
      this.maxAge = maxAge || 0;
    }
  }
});

// node_modules/lodash.clonedeep/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.clonedeep/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reFlags = /\w*$/;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    function addMapEntry(map, pair) {
      map.set(pair[0], pair[1]);
      return map;
    }
    function addSetEntry(set, value) {
      set.add(value);
      return set;
    }
    function arrayEach(array, iteratee) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array ? array.length : 0;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView = getNative(root, "DataView");
    var Map2 = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set2 = getNative(root, "Set");
    var WeakMap = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }
    function stackClear() {
      this.__data__ = new ListCache();
    }
    function stackDelete(key) {
      return this.__data__["delete"](key);
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          return this;
        }
        cache = this.__data__ = new MapCache(pairs);
      }
      cache.set(key, value);
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        object[key] = value;
      }
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          if (isHostObject(value)) {
            return object ? value : {};
          }
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (!isArr) {
        var props = isFull ? getAllKeys(value) : keys(value);
      }
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
      });
      return result;
    }
    function baseCreate(proto) {
      return isObject(proto) ? objectCreate(proto) : {};
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      return objectToString.call(value);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var result = new buffer.constructor(buffer.length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor());
    }
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor());
    }
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject(source, props, object, customizer) {
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        assignValue(object, key, newValue === void 0 ? source[key] : newValue);
      }
      return object;
    }
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function initCloneArray(array) {
      var length = array.length, result = array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return cloneSet(object, isDeep, cloneFunc);
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function cloneDeep(value) {
      return baseClone(value, true, true);
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = cloneDeep;
  }
});

// node_modules/lru-memoizer/lib/freeze.js
var require_freeze = __commonJS({
  "node_modules/lru-memoizer/lib/freeze.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function deepFreeze(o) {
      if (o) {
        Object.freeze(o);
        Object.getOwnPropertyNames(o).forEach(function(prop) {
          if (o.hasOwnProperty(prop) && o[prop] !== null && (typeof o[prop] === "object" || typeof o[prop] === "function") && o[prop].constructor !== Buffer && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
          }
        });
      }
      return o;
    }
    exports.deepFreeze = deepFreeze;
  }
});

// node_modules/lru-memoizer/lib/sync.js
var require_sync = __commonJS({
  "node_modules/lru-memoizer/lib/sync.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spread = exports && exports.__spread || function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    var __importDefault = exports && exports.__importDefault || function(mod2) {
      return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var lru_cache_1 = __importDefault(require_lru_cache());
    var events_1 = require_events();
    var lodash_clonedeep_1 = __importDefault(require_lodash());
    var freeze_1 = require_freeze();
    function syncMemoizer(options) {
      var cache = new lru_cache_1.default(options);
      var load = options.load;
      var hash = options.hash;
      var bypass = options.bypass;
      var itemMaxAge = options.itemMaxAge;
      var freeze = options.freeze;
      var clone = options.clone;
      var emitter = new events_1.EventEmitter();
      var defaultResult = Object.assign({
        del,
        reset: function() {
          return cache.reset();
        },
        keys: cache.keys.bind(cache),
        on: emitter.on.bind(emitter),
        once: emitter.once.bind(emitter)
      }, options);
      if (options.disable) {
        return Object.assign(load, defaultResult);
      }
      function del() {
        var key = hash.apply(void 0, __spread(arguments));
        cache.del(key);
      }
      function emit(event) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          parameters[_i - 1] = arguments[_i];
        }
        emitter.emit.apply(emitter, __spread([event], parameters));
      }
      function isPromise(result2) {
        return result2 && result2.then && typeof result2.then === "function";
      }
      function processResult(result2) {
        var res = result2;
        if (clone) {
          if (isPromise(res)) {
            res = res.then(lodash_clonedeep_1.default);
          } else {
            res = lodash_clonedeep_1.default(res);
          }
        }
        if (freeze) {
          if (isPromise(res)) {
            res = res.then(freeze_1.deepFreeze);
          } else {
            freeze_1.deepFreeze(res);
          }
        }
        return res;
      }
      var result = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (bypass && bypass.apply(void 0, __spread(args))) {
          emit.apply(void 0, __spread(["miss"], args));
          return load.apply(void 0, __spread(args));
        }
        var key = hash.apply(void 0, __spread(args));
        var fromCache = cache.get(key);
        if (fromCache) {
          emit.apply(void 0, __spread(["hit"], args));
          return processResult(fromCache);
        }
        emit.apply(void 0, __spread(["miss"], args));
        var result2 = load.apply(void 0, __spread(args));
        if (itemMaxAge) {
          cache.set(key, result2, itemMaxAge.apply(void 0, __spread(args.concat([result2]))));
        } else {
          cache.set(key, result2);
        }
        return processResult(result2);
      };
      return Object.assign(result, defaultResult);
    }
    exports.syncMemoizer = syncMemoizer;
  }
});

// node_modules/lru-memoizer/lib/async.js
var require_async = __commonJS({
  "node_modules/lru-memoizer/lib/async.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spread = exports && exports.__spread || function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    var __values = exports && exports.__values || function(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
      if (m)
        return m.call(o);
      return {
        next: function() {
          if (o && i >= o.length)
            o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
    };
    var __importDefault = exports && exports.__importDefault || function(mod2) {
      return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var lru_cache_1 = __importDefault(require_lru_cache());
    var events_1 = require_events();
    var lodash_clonedeep_1 = __importDefault(require_lodash());
    var freeze_1 = require_freeze();
    var sync_1 = require_sync();
    function asyncMemoizer(options) {
      var cache = new lru_cache_1.default(options);
      var load = options.load;
      var hash = options.hash;
      var bypass = options.bypass;
      var itemMaxAge = options.itemMaxAge;
      var freeze = options.freeze;
      var clone = options.clone;
      var queueMaxAge = options.queueMaxAge || 1e3;
      var loading = /* @__PURE__ */ new Map();
      var emitter = new events_1.EventEmitter();
      var memoizerMethods = Object.assign({
        del,
        reset: function() {
          return cache.reset();
        },
        keys: cache.keys.bind(cache),
        on: emitter.on.bind(emitter),
        once: emitter.once.bind(emitter)
      }, options);
      if (options.disable) {
        return Object.assign(load, memoizerMethods);
      }
      function del() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var key = hash.apply(void 0, __spread(args));
        cache.del(key);
      }
      function add(key, parameters, result) {
        if (freeze) {
          result.forEach(freeze_1.deepFreeze);
        }
        if (itemMaxAge) {
          cache.set(key, result, itemMaxAge.apply(void 0, __spread(parameters.concat(result))));
        } else {
          cache.set(key, result);
        }
      }
      function runCallbacks(callbacks, args) {
        var e_1, _a;
        try {
          for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
            var callback = callbacks_1_1.value;
            if (clone) {
              setImmediate.apply(void 0, __spread([callback], args.map(lodash_clonedeep_1.default)));
            } else {
              setImmediate.apply(void 0, __spread([callback], args));
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return))
              _a.call(callbacks_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
      function emit(event) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          parameters[_i - 1] = arguments[_i];
        }
        emitter.emit.apply(emitter, __spread([event], parameters));
      }
      function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var parameters = args.slice(0, -1);
        var callback = args.slice(-1).pop();
        var key;
        if (bypass && bypass.apply(void 0, __spread(parameters))) {
          emit.apply(void 0, __spread(["miss"], parameters));
          return load.apply(void 0, __spread(args));
        }
        if (parameters.length === 0 && !hash) {
          key = "_";
        } else {
          key = hash.apply(void 0, __spread(parameters));
        }
        var fromCache = cache.get(key);
        if (fromCache) {
          emit.apply(void 0, __spread(["hit"], parameters));
          return runCallbacks([callback], [null].concat(fromCache));
        }
        var pendingLoad = loading.get(key);
        if (pendingLoad && pendingLoad.expiresAt > Date.now()) {
          pendingLoad.queue.push(callback);
          emit.apply(void 0, __spread(["queue"], parameters));
          return;
        }
        emit.apply(void 0, __spread(["miss"], parameters));
        var started = Date.now();
        var queue = [callback];
        loading.set(key, {
          queue,
          expiresAt: started + queueMaxAge
        });
        var loadHandler = function() {
          var args2 = [];
          for (var _i2 = 0; _i2 < arguments.length; _i2++) {
            args2[_i2] = arguments[_i2];
          }
          var err = args2[0];
          if (!err) {
            add(key, parameters, args2.slice(1));
          }
          loading.delete(key);
          emit.apply(void 0, __spread(["loaded", Date.now() - started], parameters));
          runCallbacks(queue, args2);
        };
        load.apply(void 0, __spread(parameters, [loadHandler]));
      }
      ;
      return Object.assign(memoizedFunction, memoizerMethods);
    }
    exports.asyncMemoizer = asyncMemoizer;
    asyncMemoizer.sync = sync_1.syncMemoizer;
  }
});

// node_modules/lru-memoizer/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/lru-memoizer/lib/index.js"(exports, module) {
    "use strict";
    var async_1 = require_async();
    module.exports = async_1.asyncMemoizer;
  }
});

// node_modules/jwks-rsa/src/wrappers/cache.js
var require_cache = __commonJS({
  "node_modules/jwks-rsa/src/wrappers/cache.js"(exports, module) {
    var logger = require_browser()("jwks");
    var memoizer = require_lib2();
    var { promisify, callbackify } = require_util();
    function cacheWrapper(client, { cacheMaxEntries = 5, cacheMaxAge = 6e5 }) {
      logger(`Configured caching of signing keys. Max: ${cacheMaxEntries} / Age: ${cacheMaxAge}`);
      return promisify(memoizer({
        hash: (kid) => kid,
        load: callbackify(client.getSigningKey.bind(client)),
        maxAge: cacheMaxAge,
        max: cacheMaxEntries
      }));
    }
    module.exports.default = cacheWrapper;
  }
});

// node_modules/limiter/lib/tokenBucket.js
var require_tokenBucket = __commonJS({
  "node_modules/limiter/lib/tokenBucket.js"(exports, module) {
    var TokenBucket = function(bucketSize, tokensPerInterval, interval, parentBucket) {
      this.bucketSize = bucketSize;
      this.tokensPerInterval = tokensPerInterval;
      if (typeof interval === "string") {
        switch (interval) {
          case "sec":
          case "second":
            this.interval = 1e3;
            break;
          case "min":
          case "minute":
            this.interval = 1e3 * 60;
            break;
          case "hr":
          case "hour":
            this.interval = 1e3 * 60 * 60;
            break;
          case "day":
            this.interval = 1e3 * 60 * 60 * 24;
            break;
          default:
            throw new Error("Invaid interval " + interval);
        }
      } else {
        this.interval = interval;
      }
      this.parentBucket = parentBucket;
      this.content = 0;
      this.lastDrip = +new Date();
    };
    TokenBucket.prototype = {
      bucketSize: 1,
      tokensPerInterval: 1,
      interval: 1e3,
      parentBucket: null,
      content: 0,
      lastDrip: 0,
      removeTokens: function(count, callback) {
        var self2 = this;
        if (!this.bucketSize) {
          process.nextTick(callback.bind(null, null, count, Number.POSITIVE_INFINITY));
          return true;
        }
        if (count > this.bucketSize) {
          process.nextTick(callback.bind(null, "Requested tokens " + count + " exceeds bucket size " + this.bucketSize, null));
          return false;
        }
        this.drip();
        if (count > this.content)
          return comeBackLater();
        if (this.parentBucket) {
          return this.parentBucket.removeTokens(count, function(err, remainingTokens) {
            if (err)
              return callback(err, null);
            if (count > self2.content)
              return comeBackLater();
            self2.content -= count;
            callback(null, Math.min(remainingTokens, self2.content));
          });
        } else {
          this.content -= count;
          process.nextTick(callback.bind(null, null, this.content));
          return true;
        }
        function comeBackLater() {
          var waitInterval = Math.ceil(
            (count - self2.content) * (self2.interval / self2.tokensPerInterval)
          );
          setTimeout(function() {
            self2.removeTokens(count, callback);
          }, waitInterval);
          return false;
        }
      },
      tryRemoveTokens: function(count) {
        if (!this.bucketSize)
          return true;
        if (count > this.bucketSize)
          return false;
        this.drip();
        if (count > this.content)
          return false;
        if (this.parentBucket && !this.parentBucket.tryRemoveTokens(count))
          return false;
        this.content -= count;
        return true;
      },
      drip: function() {
        if (!this.tokensPerInterval) {
          this.content = this.bucketSize;
          return;
        }
        var now = +new Date();
        var deltaMS = Math.max(now - this.lastDrip, 0);
        this.lastDrip = now;
        var dripAmount = deltaMS * (this.tokensPerInterval / this.interval);
        this.content = Math.min(this.content + dripAmount, this.bucketSize);
      }
    };
    module.exports = TokenBucket;
  }
});

// node_modules/limiter/lib/clock.js
var require_clock = __commonJS({
  "node_modules/limiter/lib/clock.js"(exports, module) {
    var getMilliseconds = function() {
      if (typeof process !== "undefined" && process.hrtime) {
        var hrtime = process.hrtime();
        var seconds = hrtime[0];
        var nanoseconds = hrtime[1];
        return seconds * 1e3 + Math.floor(nanoseconds / 1e6);
      }
      return new Date().getTime();
    };
    module.exports = getMilliseconds;
  }
});

// node_modules/limiter/lib/rateLimiter.js
var require_rateLimiter = __commonJS({
  "node_modules/limiter/lib/rateLimiter.js"(exports, module) {
    var TokenBucket = require_tokenBucket();
    var getMilliseconds = require_clock();
    var RateLimiter = function(tokensPerInterval, interval, fireImmediately) {
      this.tokenBucket = new TokenBucket(
        tokensPerInterval,
        tokensPerInterval,
        interval,
        null
      );
      this.tokenBucket.content = tokensPerInterval;
      this.curIntervalStart = getMilliseconds();
      this.tokensThisInterval = 0;
      this.fireImmediately = fireImmediately;
    };
    RateLimiter.prototype = {
      tokenBucket: null,
      curIntervalStart: 0,
      tokensThisInterval: 0,
      fireImmediately: false,
      removeTokens: function(count, callback) {
        if (count > this.tokenBucket.bucketSize) {
          process.nextTick(callback.bind(
            null,
            "Requested tokens " + count + " exceeds maximum tokens per interval " + this.tokenBucket.bucketSize,
            null
          ));
          return false;
        }
        var self2 = this;
        var now = getMilliseconds();
        if (now < this.curIntervalStart || now - this.curIntervalStart >= this.tokenBucket.interval) {
          this.curIntervalStart = now;
          this.tokensThisInterval = 0;
        }
        if (count > this.tokenBucket.tokensPerInterval - this.tokensThisInterval) {
          if (this.fireImmediately) {
            process.nextTick(callback.bind(null, null, -1));
          } else {
            var waitInterval = Math.ceil(
              this.curIntervalStart + this.tokenBucket.interval - now
            );
            setTimeout(function() {
              self2.tokenBucket.removeTokens(count, afterTokensRemoved);
            }, waitInterval);
          }
          return false;
        }
        return this.tokenBucket.removeTokens(count, afterTokensRemoved);
        function afterTokensRemoved(err, tokensRemaining) {
          if (err)
            return callback(err, null);
          self2.tokensThisInterval += count;
          callback(null, tokensRemaining);
        }
      },
      tryRemoveTokens: function(count) {
        if (count > this.tokenBucket.bucketSize)
          return false;
        var now = getMilliseconds();
        if (now < this.curIntervalStart || now - this.curIntervalStart >= this.tokenBucket.interval) {
          this.curIntervalStart = now;
          this.tokensThisInterval = 0;
        }
        if (count > this.tokenBucket.tokensPerInterval - this.tokensThisInterval)
          return false;
        var removed = this.tokenBucket.tryRemoveTokens(count);
        if (removed) {
          this.tokensThisInterval += count;
        }
        return removed;
      },
      getTokensRemaining: function() {
        this.tokenBucket.drip();
        return this.tokenBucket.content;
      }
    };
    module.exports = RateLimiter;
  }
});

// node_modules/limiter/index.js
var require_limiter = __commonJS({
  "node_modules/limiter/index.js"(exports) {
    exports.RateLimiter = require_rateLimiter();
    exports.TokenBucket = require_tokenBucket();
  }
});

// node_modules/jwks-rsa/src/errors/JwksRateLimitError.js
var require_JwksRateLimitError = __commonJS({
  "node_modules/jwks-rsa/src/errors/JwksRateLimitError.js"(exports, module) {
    function JwksRateLimitError(message) {
      Error.call(this, message);
      Error.captureStackTrace(this, this.constructor);
      this.name = "JwksRateLimitError";
      this.message = message;
    }
    JwksRateLimitError.prototype = Object.create(Error.prototype);
    JwksRateLimitError.prototype.constructor = JwksRateLimitError;
    module.exports = JwksRateLimitError;
  }
});

// node_modules/jwks-rsa/src/wrappers/rateLimit.js
var require_rateLimit = __commonJS({
  "node_modules/jwks-rsa/src/wrappers/rateLimit.js"(exports, module) {
    var logger = require_browser()("jwks");
    var { RateLimiter } = require_limiter();
    var JwksRateLimitError = require_JwksRateLimitError();
    function rateLimitWrapper(client, { jwksRequestsPerMinute = 10 }) {
      const getSigningKey = client.getSigningKey.bind(client);
      const limiter = new RateLimiter(jwksRequestsPerMinute, "minute", true);
      logger(`Configured rate limiting to JWKS endpoint at ${jwksRequestsPerMinute}/minute`);
      return async (kid) => await new Promise((resolve, reject) => {
        limiter.removeTokens(1, async (err, remaining) => {
          if (err) {
            reject(err);
          }
          logger("Requests to the JWKS endpoint available for the next minute:", remaining);
          if (remaining < 0) {
            logger("Too many requests to the JWKS endpoint");
            reject(new JwksRateLimitError("Too many requests to the JWKS endpoint"));
          } else {
            try {
              const key = await getSigningKey(kid);
              resolve(key);
            } catch (error) {
              reject(error);
            }
          }
        });
      });
    }
    module.exports.default = rateLimitWrapper;
  }
});

// node_modules/jwks-rsa/src/wrappers/interceptor.js
var require_interceptor = __commonJS({
  "node_modules/jwks-rsa/src/wrappers/interceptor.js"(exports, module) {
    var retrieveSigningKeys = require_utils2().retrieveSigningKeys;
    function getKeysInterceptor(client, { getKeysInterceptor: getKeysInterceptor2 }) {
      const getSigningKey = client.getSigningKey.bind(client);
      return async (kid) => {
        const keys = await getKeysInterceptor2();
        let signingKeys;
        if (keys && keys.length) {
          signingKeys = retrieveSigningKeys(keys);
        }
        if (signingKeys && signingKeys.length) {
          const key = signingKeys.find((k) => !kid || k.kid === kid);
          if (key) {
            return key;
          }
        }
        return getSigningKey(kid);
      };
    }
    module.exports.default = getKeysInterceptor;
  }
});

// node_modules/jwks-rsa/src/wrappers/callbackSupport.js
var require_callbackSupport = __commonJS({
  "node_modules/jwks-rsa/src/wrappers/callbackSupport.js"(exports, module) {
    var { callbackify } = require_util();
    var callbackSupport = (client) => {
      const getSigningKey = client.getSigningKey.bind(client);
      return (kid, cb) => {
        if (cb) {
          const callbackFunc = callbackify(getSigningKey);
          return callbackFunc(kid, cb);
        }
        return getSigningKey(kid);
      };
    };
    module.exports.default = callbackSupport;
  }
});

// node_modules/jwks-rsa/src/wrappers/index.js
var require_wrappers = __commonJS({
  "node_modules/jwks-rsa/src/wrappers/index.js"(exports, module) {
    module.exports = {
      request: require_request().default,
      cacheSigningKey: require_cache().default,
      rateLimitSigningKey: require_rateLimit().default,
      getKeysInterceptor: require_interceptor().default,
      callbackSupport: require_callbackSupport().default
    };
  }
});

// node_modules/jwks-rsa/src/errors/JwksError.js
var require_JwksError = __commonJS({
  "node_modules/jwks-rsa/src/errors/JwksError.js"(exports, module) {
    function JwksError(message) {
      Error.call(this, message);
      Error.captureStackTrace(this, this.constructor);
      this.name = "JwksError";
      this.message = message;
    }
    JwksError.prototype = Object.create(Error.prototype);
    JwksError.prototype.constructor = JwksError;
    module.exports = JwksError;
  }
});

// node_modules/jwks-rsa/src/errors/SigningKeyNotFoundError.js
var require_SigningKeyNotFoundError = __commonJS({
  "node_modules/jwks-rsa/src/errors/SigningKeyNotFoundError.js"(exports, module) {
    function SigningKeyNotFoundError(message) {
      Error.call(this, message);
      Error.captureStackTrace(this, this.constructor);
      this.name = "SigningKeyNotFoundError";
      this.message = message;
    }
    SigningKeyNotFoundError.prototype = Object.create(Error.prototype);
    SigningKeyNotFoundError.prototype.constructor = SigningKeyNotFoundError;
    module.exports = SigningKeyNotFoundError;
  }
});

// node_modules/jwks-rsa/src/JwksClient.js
var require_JwksClient = __commonJS({
  "node_modules/jwks-rsa/src/JwksClient.js"(exports, module) {
    var logger = require_browser()("jwks");
    var { retrieveSigningKeys } = require_utils2();
    var { request, cacheSigningKey, rateLimitSigningKey, getKeysInterceptor, callbackSupport } = require_wrappers();
    var JwksError = require_JwksError();
    var SigningKeyNotFoundError = require_SigningKeyNotFoundError();
    var JwksClient = class {
      constructor(options) {
        this.options = {
          rateLimit: false,
          cache: true,
          timeout: 3e4,
          ...options
        };
        if (this.options.getKeysInterceptor) {
          this.getSigningKey = getKeysInterceptor(this, options);
        }
        if (this.options.rateLimit) {
          this.getSigningKey = rateLimitSigningKey(this, options);
        }
        if (this.options.cache) {
          this.getSigningKey = cacheSigningKey(this, options);
        }
        this.getSigningKey = callbackSupport(this, options);
      }
      async getKeys() {
        logger(`Fetching keys from '${this.options.jwksUri}'`);
        try {
          const res = await request({
            uri: this.options.jwksUri,
            headers: this.options.requestHeaders,
            agent: this.options.requestAgent,
            timeout: this.options.timeout,
            fetcher: this.options.fetcher
          });
          logger("Keys:", res.keys);
          return res.keys;
        } catch (err) {
          const { errorMsg } = err;
          logger("Failure:", errorMsg || err);
          throw errorMsg ? new JwksError(errorMsg) : err;
        }
      }
      async getSigningKeys() {
        const keys = await this.getKeys();
        if (!keys || !keys.length) {
          throw new JwksError("The JWKS endpoint did not contain any keys");
        }
        const signingKeys = retrieveSigningKeys(keys);
        if (!signingKeys.length) {
          throw new JwksError("The JWKS endpoint did not contain any signing keys");
        }
        logger("Signing Keys:", signingKeys);
        return signingKeys;
      }
      async getSigningKey(kid) {
        logger(`Fetching signing key for '${kid}'`);
        const keys = await this.getSigningKeys();
        const kidDefined = kid !== void 0 && kid !== null;
        if (!kidDefined && keys.length > 1) {
          logger("No KID specified and JWKS endpoint returned more than 1 key");
          throw new SigningKeyNotFoundError("No KID specified and JWKS endpoint returned more than 1 key");
        }
        const key = keys.find((k) => !kidDefined || k.kid === kid);
        if (key) {
          return key;
        } else {
          logger(`Unable to find a signing key that matches '${kid}'`);
          throw new SigningKeyNotFoundError(`Unable to find a signing key that matches '${kid}'`);
        }
      }
    };
    module.exports = {
      JwksClient
    };
  }
});

// node_modules/jwks-rsa/src/errors/ArgumentError.js
var require_ArgumentError = __commonJS({
  "node_modules/jwks-rsa/src/errors/ArgumentError.js"(exports, module) {
    function ArgumentError(message) {
      Error.call(this, message);
      Error.captureStackTrace(this, this.constructor);
      this.name = "ArgumentError";
      this.message = message;
    }
    ArgumentError.prototype = Object.create(Error.prototype);
    ArgumentError.prototype.constructor = ArgumentError;
    module.exports = ArgumentError;
  }
});

// node_modules/jwks-rsa/src/errors/index.js
var require_errors2 = __commonJS({
  "node_modules/jwks-rsa/src/errors/index.js"(exports, module) {
    module.exports = {
      ArgumentError: require_ArgumentError(),
      JwksError: require_JwksError(),
      JwksRateLimitError: require_JwksRateLimitError(),
      SigningKeyNotFoundError: require_SigningKeyNotFoundError()
    };
  }
});

// node_modules/jwks-rsa/src/integrations/config.js
var require_config = __commonJS({
  "node_modules/jwks-rsa/src/integrations/config.js"(exports, module) {
    var allowedSignatureAlg = [
      "RS256",
      "RS384",
      "RS512",
      "PS256",
      "PS384",
      "PS512",
      "ES256",
      "ES256K",
      "ES384",
      "ES512",
      "EdDSA"
    ];
    module.exports = allowedSignatureAlg;
  }
});

// node_modules/jwks-rsa/src/integrations/hapi.js
var require_hapi = __commonJS({
  "node_modules/jwks-rsa/src/integrations/hapi.js"(exports, module) {
    var { ArgumentError } = require_errors2();
    var { JwksClient } = require_JwksClient();
    var supportedAlg = require_config();
    var handleSigningKeyError = (err, cb) => {
      if (err && err.name === "SigningKeyNotFoundError") {
        return cb(err, null, null);
      }
      if (err) {
        return cb(err, null, null);
      }
    };
    module.exports.hapiJwt2KeyAsync = (options) => {
      const secretProvider = module.exports.hapiJwt2Key(options);
      return function(decoded) {
        return new Promise((resolve, reject) => {
          const cb = (err, key) => {
            !key || err ? reject(err) : resolve({ key });
          };
          secretProvider(decoded, cb);
        });
      };
    };
    module.exports.hapiJwt2Key = function(options) {
      if (options === null || options === void 0) {
        throw new ArgumentError("An options object must be provided when initializing hapiJwt2Key");
      }
      const client = new JwksClient(options);
      const onError = options.handleSigningKeyError || handleSigningKeyError;
      return function secretProvider(decoded, cb) {
        if (!decoded || !decoded.header) {
          return cb(new Error("Cannot find a signing certificate if there is no header"), null, null);
        }
        if (!supportedAlg.includes(decoded.header.alg)) {
          return cb(new Error("Unsupported algorithm " + decoded.header.alg + " supplied."), null, null);
        }
        client.getSigningKey(decoded.header.kid).then((key) => {
          return cb(null, key.publicKey || key.rsaPublicKey, key);
        }).catch((err) => {
          return onError(err, (newError) => cb(newError, null, null));
        });
      };
    };
  }
});

// node_modules/jwks-rsa/src/integrations/express.js
var require_express = __commonJS({
  "node_modules/jwks-rsa/src/integrations/express.js"(exports, module) {
    var { ArgumentError } = require_errors2();
    var { JwksClient } = require_JwksClient();
    var supportedAlg = require_config();
    var handleSigningKeyError = (err, cb) => {
      if (err && err.name === "SigningKeyNotFoundError") {
        return cb(null);
      }
      if (err) {
        return cb(err);
      }
    };
    module.exports.expressJwtSecret = function(options) {
      if (options === null || options === void 0) {
        throw new ArgumentError("An options object must be provided when initializing expressJwtSecret");
      }
      const client = new JwksClient(options);
      const onError = options.handleSigningKeyError || handleSigningKeyError;
      const expressJwt7Provider = async (req, token) => {
        if (!token) {
          return;
        }
        const header = token.header;
        if (!header || !supportedAlg.includes(header.alg)) {
          return;
        }
        try {
          const key = await client.getSigningKey(header.kid);
          return key.publicKey || key.rsaPublicKey;
        } catch (err) {
          return new Promise((resolve, reject) => {
            onError(err, (newError) => {
              if (!newError) {
                return resolve();
              }
              reject(newError);
            });
          });
        }
      };
      return function secretProvider(req, header, payload, cb) {
        if (arguments.length === 4) {
          expressJwt7Provider(req, { header }).then((key) => {
            setImmediate(cb, null, key);
          }).catch((err) => {
            setImmediate(cb, err);
          });
          return;
        }
        return expressJwt7Provider(req, arguments[1]);
      };
    };
  }
});

// node_modules/jwks-rsa/src/integrations/koa.js
var require_koa = __commonJS({
  "node_modules/jwks-rsa/src/integrations/koa.js"(exports, module) {
    var { ArgumentError } = require_errors2();
    var { JwksClient } = require_JwksClient();
    var supportedAlg = require_config();
    module.exports.koaJwtSecret = function(options = {}) {
      if (!options.jwksUri) {
        throw new ArgumentError("No JWKS provided. Please provide a jwksUri");
      }
      const client = new JwksClient(options);
      return function secretProvider({ alg, kid } = {}) {
        return new Promise((resolve, reject) => {
          if (!supportedAlg.includes(alg)) {
            return reject(new Error("Missing / invalid token algorithm"));
          }
          client.getSigningKey(kid).then((key) => {
            resolve(key.publicKey || key.rsaPublicKey);
          }).catch((err) => {
            if (options.handleSigningKeyError) {
              return options.handleSigningKeyError(err).then(reject);
            }
            return reject(err);
          });
        });
      };
    };
  }
});

// node_modules/jwks-rsa/src/integrations/passport.js
var require_passport = __commonJS({
  "node_modules/jwks-rsa/src/integrations/passport.js"(exports, module) {
    var JWT = require_lib().JWT;
    var { ArgumentError } = require_errors2();
    var { JwksClient } = require_JwksClient();
    var supportedAlg = require_config();
    var handleSigningKeyError = (err, cb) => {
      if (err && err.name === "SigningKeyNotFoundError") {
        return cb(null);
      }
      if (err) {
        return cb(err);
      }
    };
    module.exports.passportJwtSecret = function(options) {
      if (options === null || options === void 0) {
        throw new ArgumentError("An options object must be provided when initializing passportJwtSecret");
      }
      if (!options.jwksUri) {
        throw new ArgumentError("No JWKS provided. Please provide a jwksUri");
      }
      const client = new JwksClient(options);
      const onError = options.handleSigningKeyError || handleSigningKeyError;
      return function secretProvider(req, rawJwtToken, cb) {
        let decoded;
        try {
          decoded = JWT.decode(rawJwtToken, { complete: true });
        } catch (err) {
          decoded = null;
        }
        if (!decoded || !supportedAlg.includes(decoded.header.alg)) {
          return cb(null, null);
        }
        client.getSigningKey(decoded.header.kid).then((key) => {
          cb(null, key.publicKey || key.rsaPublicKey);
        }).catch((err) => {
          onError(err, (newError) => cb(newError, null));
        });
      };
    };
  }
});

// node_modules/jwks-rsa/src/index.js
var require_src = __commonJS({
  "node_modules/jwks-rsa/src/index.js"(exports, module) {
    var { JwksClient } = require_JwksClient();
    var errors = require_errors2();
    var { hapiJwt2Key, hapiJwt2KeyAsync } = require_hapi();
    var { expressJwtSecret } = require_express();
    var { koaJwtSecret } = require_koa();
    var { passportJwtSecret } = require_passport();
    module.exports = (options) => {
      return new JwksClient(options);
    };
    module.exports.JwksClient = JwksClient;
    module.exports.ArgumentError = errors.ArgumentError;
    module.exports.JwksError = errors.JwksError;
    module.exports.JwksRateLimitError = errors.JwksRateLimitError;
    module.exports.SigningKeyNotFoundError = errors.SigningKeyNotFoundError;
    module.exports.expressJwtSecret = expressJwtSecret;
    module.exports.hapiJwt2Key = hapiJwt2Key;
    module.exports.hapiJwt2KeyAsync = hapiJwt2KeyAsync;
    module.exports.koaJwtSecret = koaJwtSecret;
    module.exports.passportJwtSecret = passportJwtSecret;
  }
});

// node_modules/firebase-admin/lib/utils/jwt.js
var require_jwt2 = __commonJS({
  "node_modules/firebase-admin/lib/utils/jwt.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JwtErrorCode = exports.JwtError = exports.decodeJwt = exports.verifyJwtSignature = exports.EmulatorSignatureVerifier = exports.PublicKeySignatureVerifier = exports.UrlKeyFetcher = exports.JwksFetcher = exports.ALGORITHM_RS256 = void 0;
    var validator = require_validator();
    var jwt = require_jsonwebtoken();
    var jwks = require_src();
    var api_request_1 = require_api_request();
    exports.ALGORITHM_RS256 = "RS256";
    var JWT_CALLBACK_ERROR_PREFIX = "error in secret or public key callback: ";
    var NO_MATCHING_KID_ERROR_MESSAGE = "no-matching-kid-error";
    var NO_KID_IN_HEADER_ERROR_MESSAGE = "no-kid-in-header-error";
    var HOUR_IN_SECONDS = 3600;
    var JwksFetcher = class {
      constructor(jwksUrl) {
        this.publicKeysExpireAt = 0;
        if (!validator.isURL(jwksUrl)) {
          throw new Error("The provided JWKS URL is not a valid URL.");
        }
        this.client = jwks({
          jwksUri: jwksUrl,
          cache: false
        });
      }
      fetchPublicKeys() {
        if (this.shouldRefresh()) {
          return this.refresh();
        }
        return Promise.resolve(this.publicKeys);
      }
      shouldRefresh() {
        return !this.publicKeys || this.publicKeysExpireAt <= Date.now();
      }
      refresh() {
        return this.client.getSigningKeys().then((signingKeys) => {
          this.publicKeysExpireAt = 0;
          const newKeys = signingKeys.reduce((map, signingKey) => {
            map[signingKey.kid] = signingKey.getPublicKey();
            return map;
          }, {});
          this.publicKeysExpireAt = Date.now() + HOUR_IN_SECONDS * 6 * 1e3;
          this.publicKeys = newKeys;
          return newKeys;
        }).catch((err) => {
          throw new Error(`Error fetching Json Web Keys: ${err.message}`);
        });
      }
    };
    exports.JwksFetcher = JwksFetcher;
    var UrlKeyFetcher = class {
      constructor(clientCertUrl, httpAgent) {
        this.clientCertUrl = clientCertUrl;
        this.httpAgent = httpAgent;
        this.publicKeysExpireAt = 0;
        if (!validator.isURL(clientCertUrl)) {
          throw new Error("The provided public client certificate URL is not a valid URL.");
        }
      }
      fetchPublicKeys() {
        if (this.shouldRefresh()) {
          return this.refresh();
        }
        return Promise.resolve(this.publicKeys);
      }
      shouldRefresh() {
        return !this.publicKeys || this.publicKeysExpireAt <= Date.now();
      }
      refresh() {
        const client = new api_request_1.HttpClient();
        const request = {
          method: "GET",
          url: this.clientCertUrl,
          httpAgent: this.httpAgent
        };
        return client.send(request).then((resp) => {
          if (!resp.isJson() || resp.data.error) {
            throw new api_request_1.HttpError(resp);
          }
          this.publicKeysExpireAt = 0;
          if (Object.prototype.hasOwnProperty.call(resp.headers, "cache-control")) {
            const cacheControlHeader = resp.headers["cache-control"];
            const parts = cacheControlHeader.split(",");
            parts.forEach((part) => {
              const subParts = part.trim().split("=");
              if (subParts[0] === "max-age") {
                const maxAge = +subParts[1];
                this.publicKeysExpireAt = Date.now() + maxAge * 1e3;
              }
            });
          }
          this.publicKeys = resp.data;
          return resp.data;
        }).catch((err) => {
          if (err instanceof api_request_1.HttpError) {
            let errorMessage = "Error fetching public keys for Google certs: ";
            const resp = err.response;
            if (resp.isJson() && resp.data.error) {
              errorMessage += `${resp.data.error}`;
              if (resp.data.error_description) {
                errorMessage += " (" + resp.data.error_description + ")";
              }
            } else {
              errorMessage += `${resp.text}`;
            }
            throw new Error(errorMessage);
          }
          throw err;
        });
      }
    };
    exports.UrlKeyFetcher = UrlKeyFetcher;
    var PublicKeySignatureVerifier = class {
      constructor(keyFetcher) {
        this.keyFetcher = keyFetcher;
        if (!validator.isNonNullObject(keyFetcher)) {
          throw new Error("The provided key fetcher is not an object or null.");
        }
      }
      static withCertificateUrl(clientCertUrl, httpAgent) {
        return new PublicKeySignatureVerifier(new UrlKeyFetcher(clientCertUrl, httpAgent));
      }
      static withJwksUrl(jwksUrl) {
        return new PublicKeySignatureVerifier(new JwksFetcher(jwksUrl));
      }
      verify(token) {
        if (!validator.isString(token)) {
          return Promise.reject(new JwtError(JwtErrorCode.INVALID_ARGUMENT, "The provided token must be a string."));
        }
        return verifyJwtSignature(token, getKeyCallback(this.keyFetcher), { algorithms: [exports.ALGORITHM_RS256] }).catch((error) => {
          if (error.code === JwtErrorCode.NO_KID_IN_HEADER) {
            return this.verifyWithoutKid(token);
          }
          throw error;
        });
      }
      verifyWithoutKid(token) {
        return this.keyFetcher.fetchPublicKeys().then((publicKeys) => this.verifyWithAllKeys(token, publicKeys));
      }
      verifyWithAllKeys(token, keys) {
        const promises = [];
        Object.values(keys).forEach((key) => {
          const result = verifyJwtSignature(token, key).then(() => true).catch((error) => {
            if (error.code === JwtErrorCode.TOKEN_EXPIRED) {
              throw error;
            }
            return false;
          });
          promises.push(result);
        });
        return Promise.all(promises).then((result) => {
          if (result.every((r) => r === false)) {
            throw new JwtError(JwtErrorCode.INVALID_SIGNATURE, "Invalid token signature.");
          }
        });
      }
    };
    exports.PublicKeySignatureVerifier = PublicKeySignatureVerifier;
    var EmulatorSignatureVerifier = class {
      verify(token) {
        return verifyJwtSignature(token, "");
      }
    };
    exports.EmulatorSignatureVerifier = EmulatorSignatureVerifier;
    function getKeyCallback(fetcher) {
      return (header, callback) => {
        if (!header.kid) {
          callback(new Error(NO_KID_IN_HEADER_ERROR_MESSAGE));
        }
        const kid = header.kid || "";
        fetcher.fetchPublicKeys().then((publicKeys) => {
          if (!Object.prototype.hasOwnProperty.call(publicKeys, kid)) {
            callback(new Error(NO_MATCHING_KID_ERROR_MESSAGE));
          } else {
            callback(null, publicKeys[kid]);
          }
        }).catch((error) => {
          callback(error);
        });
      };
    }
    function verifyJwtSignature(token, secretOrPublicKey, options) {
      if (!validator.isString(token)) {
        return Promise.reject(new JwtError(JwtErrorCode.INVALID_ARGUMENT, "The provided token must be a string."));
      }
      return new Promise((resolve, reject) => {
        jwt.verify(token, secretOrPublicKey, options, (error) => {
          if (!error) {
            return resolve();
          }
          if (error.name === "TokenExpiredError") {
            return reject(new JwtError(JwtErrorCode.TOKEN_EXPIRED, "The provided token has expired. Get a fresh token from your client app and try again."));
          } else if (error.name === "JsonWebTokenError") {
            if (error.message && error.message.includes(JWT_CALLBACK_ERROR_PREFIX)) {
              const message = error.message.split(JWT_CALLBACK_ERROR_PREFIX).pop() || "Error fetching public keys.";
              let code = JwtErrorCode.KEY_FETCH_ERROR;
              if (message === NO_MATCHING_KID_ERROR_MESSAGE) {
                code = JwtErrorCode.NO_MATCHING_KID;
              } else if (message === NO_KID_IN_HEADER_ERROR_MESSAGE) {
                code = JwtErrorCode.NO_KID_IN_HEADER;
              }
              return reject(new JwtError(code, message));
            }
          }
          return reject(new JwtError(JwtErrorCode.INVALID_SIGNATURE, error.message));
        });
      });
    }
    exports.verifyJwtSignature = verifyJwtSignature;
    function decodeJwt(jwtToken) {
      if (!validator.isString(jwtToken)) {
        return Promise.reject(new JwtError(JwtErrorCode.INVALID_ARGUMENT, "The provided token must be a string."));
      }
      const fullDecodedToken = jwt.decode(jwtToken, {
        complete: true
      });
      if (!fullDecodedToken) {
        return Promise.reject(new JwtError(JwtErrorCode.INVALID_ARGUMENT, "Decoding token failed."));
      }
      const header = fullDecodedToken?.header;
      const payload = fullDecodedToken?.payload;
      return Promise.resolve({ header, payload });
    }
    exports.decodeJwt = decodeJwt;
    var JwtError = class extends Error {
      constructor(code, message) {
        super(message);
        this.code = code;
        this.message = message;
        this.__proto__ = JwtError.prototype;
      }
    };
    exports.JwtError = JwtError;
    var JwtErrorCode;
    (function(JwtErrorCode2) {
      JwtErrorCode2["INVALID_ARGUMENT"] = "invalid-argument";
      JwtErrorCode2["INVALID_CREDENTIAL"] = "invalid-credential";
      JwtErrorCode2["TOKEN_EXPIRED"] = "token-expired";
      JwtErrorCode2["INVALID_SIGNATURE"] = "invalid-token";
      JwtErrorCode2["NO_MATCHING_KID"] = "no-matching-kid-error";
      JwtErrorCode2["NO_KID_IN_HEADER"] = "no-kid-error";
      JwtErrorCode2["KEY_FETCH_ERROR"] = "key-fetch-error";
    })(JwtErrorCode = exports.JwtErrorCode || (exports.JwtErrorCode = {}));
  }
});

// node_modules/firebase-admin/lib/auth/token-verifier.js
var require_token_verifier = __commonJS({
  "node_modules/firebase-admin/lib/auth/token-verifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSessionCookieVerifier = exports.createAuthBlockingTokenVerifier = exports.createIdTokenVerifier = exports.FirebaseTokenVerifier = exports.SESSION_COOKIE_INFO = exports.AUTH_BLOCKING_TOKEN_INFO = exports.ID_TOKEN_INFO = void 0;
    var error_1 = require_error();
    var util = require_utils();
    var validator = require_validator();
    var jwt_1 = require_jwt2();
    var FIREBASE_AUDIENCE = "https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit";
    var CLIENT_CERT_URL = "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com";
    var SESSION_COOKIE_CERT_URL = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/publicKeys";
    var EMULATOR_VERIFIER = new jwt_1.EmulatorSignatureVerifier();
    exports.ID_TOKEN_INFO = {
      url: "https://firebase.google.com/docs/auth/admin/verify-id-tokens",
      verifyApiName: "verifyIdToken()",
      jwtName: "Firebase ID token",
      shortName: "ID token",
      expiredErrorCode: error_1.AuthClientErrorCode.ID_TOKEN_EXPIRED
    };
    exports.AUTH_BLOCKING_TOKEN_INFO = {
      url: "https://cloud.google.com/identity-platform/docs/blocking-functions",
      verifyApiName: "_verifyAuthBlockingToken()",
      jwtName: "Firebase Auth Blocking token",
      shortName: "Auth Blocking token",
      expiredErrorCode: error_1.AuthClientErrorCode.AUTH_BLOCKING_TOKEN_EXPIRED
    };
    exports.SESSION_COOKIE_INFO = {
      url: "https://firebase.google.com/docs/auth/admin/manage-cookies",
      verifyApiName: "verifySessionCookie()",
      jwtName: "Firebase session cookie",
      shortName: "session cookie",
      expiredErrorCode: error_1.AuthClientErrorCode.SESSION_COOKIE_EXPIRED
    };
    var FirebaseTokenVerifier = class {
      constructor(clientCertUrl, issuer, tokenInfo, app) {
        this.issuer = issuer;
        this.tokenInfo = tokenInfo;
        this.app = app;
        if (!validator.isURL(clientCertUrl)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "The provided public client certificate URL is an invalid URL.");
        } else if (!validator.isURL(issuer)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "The provided JWT issuer is an invalid URL.");
        } else if (!validator.isNonNullObject(tokenInfo)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "The provided JWT information is not an object or null.");
        } else if (!validator.isURL(tokenInfo.url)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "The provided JWT verification documentation URL is invalid.");
        } else if (!validator.isNonEmptyString(tokenInfo.verifyApiName)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "The JWT verify API name must be a non-empty string.");
        } else if (!validator.isNonEmptyString(tokenInfo.jwtName)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "The JWT public full name must be a non-empty string.");
        } else if (!validator.isNonEmptyString(tokenInfo.shortName)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "The JWT public short name must be a non-empty string.");
        } else if (!validator.isNonNullObject(tokenInfo.expiredErrorCode) || !("code" in tokenInfo.expiredErrorCode)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "The JWT expiration error code must be a non-null ErrorInfo object.");
        }
        this.shortNameArticle = tokenInfo.shortName.charAt(0).match(/[aeiou]/i) ? "an" : "a";
        this.signatureVerifier = jwt_1.PublicKeySignatureVerifier.withCertificateUrl(clientCertUrl, app.options.httpAgent);
      }
      verifyJWT(jwtToken, isEmulator = false) {
        if (!validator.isString(jwtToken)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `First argument to ${this.tokenInfo.verifyApiName} must be a ${this.tokenInfo.jwtName} string.`);
        }
        return this.ensureProjectId().then((projectId) => {
          return this.decodeAndVerify(jwtToken, projectId, isEmulator);
        }).then((decoded) => {
          const decodedIdToken = decoded.payload;
          decodedIdToken.uid = decodedIdToken.sub;
          return decodedIdToken;
        });
      }
      _verifyAuthBlockingToken(jwtToken, isEmulator, audience) {
        if (!validator.isString(jwtToken)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, `First argument to ${this.tokenInfo.verifyApiName} must be a ${this.tokenInfo.jwtName} string.`);
        }
        return this.ensureProjectId().then((projectId) => {
          if (typeof audience === "undefined") {
            audience = `${projectId}.cloudfunctions.net/`;
          }
          return this.decodeAndVerify(jwtToken, projectId, isEmulator, audience);
        }).then((decoded) => {
          const decodedAuthBlockingToken = decoded.payload;
          decodedAuthBlockingToken.uid = decodedAuthBlockingToken.sub;
          return decodedAuthBlockingToken;
        });
      }
      ensureProjectId() {
        return util.findProjectId(this.app).then((projectId) => {
          if (!validator.isNonEmptyString(projectId)) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CREDENTIAL, `Must initialize app with a cert credential or set your Firebase project ID as the GOOGLE_CLOUD_PROJECT environment variable to call ${this.tokenInfo.verifyApiName}.`);
          }
          return Promise.resolve(projectId);
        });
      }
      decodeAndVerify(token, projectId, isEmulator, audience) {
        return this.safeDecode(token).then((decodedToken) => {
          this.verifyContent(decodedToken, projectId, isEmulator, audience);
          return this.verifySignature(token, isEmulator).then(() => decodedToken);
        });
      }
      safeDecode(jwtToken) {
        return (0, jwt_1.decodeJwt)(jwtToken).catch((err) => {
          if (err.code == jwt_1.JwtErrorCode.INVALID_ARGUMENT) {
            const verifyJwtTokenDocsMessage = ` See ${this.tokenInfo.url} for details on how to retrieve ${this.shortNameArticle} ${this.tokenInfo.shortName}.`;
            const errorMessage = `Decoding ${this.tokenInfo.jwtName} failed. Make sure you passed the entire string JWT which represents ${this.shortNameArticle} ${this.tokenInfo.shortName}.` + verifyJwtTokenDocsMessage;
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, errorMessage);
          }
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, err.message);
        });
      }
      verifyContent(fullDecodedToken, projectId, isEmulator, audience) {
        const header = fullDecodedToken && fullDecodedToken.header;
        const payload = fullDecodedToken && fullDecodedToken.payload;
        const projectIdMatchMessage = ` Make sure the ${this.tokenInfo.shortName} comes from the same Firebase project as the service account used to authenticate this SDK.`;
        const verifyJwtTokenDocsMessage = ` See ${this.tokenInfo.url} for details on how to retrieve ${this.shortNameArticle} ${this.tokenInfo.shortName}.`;
        let errorMessage;
        if (!isEmulator && typeof header.kid === "undefined") {
          const isCustomToken = payload.aud === FIREBASE_AUDIENCE;
          const isLegacyCustomToken = header.alg === "HS256" && payload.v === 0 && "d" in payload && "uid" in payload.d;
          if (isCustomToken) {
            errorMessage = `${this.tokenInfo.verifyApiName} expects ${this.shortNameArticle} ${this.tokenInfo.shortName}, but was given a custom token.`;
          } else if (isLegacyCustomToken) {
            errorMessage = `${this.tokenInfo.verifyApiName} expects ${this.shortNameArticle} ${this.tokenInfo.shortName}, but was given a legacy custom token.`;
          } else {
            errorMessage = `${this.tokenInfo.jwtName} has no "kid" claim.`;
          }
          errorMessage += verifyJwtTokenDocsMessage;
        } else if (!isEmulator && header.alg !== jwt_1.ALGORITHM_RS256) {
          errorMessage = `${this.tokenInfo.jwtName} has incorrect algorithm. Expected "` + jwt_1.ALGORITHM_RS256 + '" but got "' + header.alg + '".' + verifyJwtTokenDocsMessage;
        } else if (typeof audience !== "undefined" && !payload.aud.includes(audience)) {
          errorMessage = `${this.tokenInfo.jwtName} has incorrect "aud" (audience) claim. Expected "` + audience + '" but got "' + payload.aud + '".' + verifyJwtTokenDocsMessage;
        } else if (typeof audience === "undefined" && payload.aud !== projectId) {
          errorMessage = `${this.tokenInfo.jwtName} has incorrect "aud" (audience) claim. Expected "` + projectId + '" but got "' + payload.aud + '".' + projectIdMatchMessage + verifyJwtTokenDocsMessage;
        } else if (payload.iss !== this.issuer + projectId) {
          errorMessage = `${this.tokenInfo.jwtName} has incorrect "iss" (issuer) claim. Expected "${this.issuer}` + projectId + '" but got "' + payload.iss + '".' + projectIdMatchMessage + verifyJwtTokenDocsMessage;
        } else if (typeof payload.sub !== "string") {
          errorMessage = `${this.tokenInfo.jwtName} has no "sub" (subject) claim.` + verifyJwtTokenDocsMessage;
        } else if (payload.sub === "") {
          errorMessage = `${this.tokenInfo.jwtName} has an empty string "sub" (subject) claim.` + verifyJwtTokenDocsMessage;
        } else if (payload.sub.length > 128) {
          errorMessage = `${this.tokenInfo.jwtName} has "sub" (subject) claim longer than 128 characters.` + verifyJwtTokenDocsMessage;
        }
        if (errorMessage) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, errorMessage);
        }
      }
      verifySignature(jwtToken, isEmulator) {
        const verifier = isEmulator ? EMULATOR_VERIFIER : this.signatureVerifier;
        return verifier.verify(jwtToken).catch((error) => {
          throw this.mapJwtErrorToAuthError(error);
        });
      }
      mapJwtErrorToAuthError(error) {
        const verifyJwtTokenDocsMessage = ` See ${this.tokenInfo.url} for details on how to retrieve ${this.shortNameArticle} ${this.tokenInfo.shortName}.`;
        if (error.code === jwt_1.JwtErrorCode.TOKEN_EXPIRED) {
          const errorMessage = `${this.tokenInfo.jwtName} has expired. Get a fresh ${this.tokenInfo.shortName} from your client app and try again (auth/${this.tokenInfo.expiredErrorCode.code}).` + verifyJwtTokenDocsMessage;
          return new error_1.FirebaseAuthError(this.tokenInfo.expiredErrorCode, errorMessage);
        } else if (error.code === jwt_1.JwtErrorCode.INVALID_SIGNATURE) {
          const errorMessage = `${this.tokenInfo.jwtName} has invalid signature.` + verifyJwtTokenDocsMessage;
          return new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, errorMessage);
        } else if (error.code === jwt_1.JwtErrorCode.NO_MATCHING_KID) {
          const errorMessage = `${this.tokenInfo.jwtName} has "kid" claim which does not correspond to a known public key. Most likely the ${this.tokenInfo.shortName} is expired, so get a fresh token from your client app and try again.`;
          return new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, errorMessage);
        }
        return new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, error.message);
      }
    };
    exports.FirebaseTokenVerifier = FirebaseTokenVerifier;
    function createIdTokenVerifier(app) {
      return new FirebaseTokenVerifier(CLIENT_CERT_URL, "https://securetoken.google.com/", exports.ID_TOKEN_INFO, app);
    }
    exports.createIdTokenVerifier = createIdTokenVerifier;
    function createAuthBlockingTokenVerifier(app) {
      return new FirebaseTokenVerifier(CLIENT_CERT_URL, "https://securetoken.google.com/", exports.AUTH_BLOCKING_TOKEN_INFO, app);
    }
    exports.createAuthBlockingTokenVerifier = createAuthBlockingTokenVerifier;
    function createSessionCookieVerifier(app) {
      return new FirebaseTokenVerifier(SESSION_COOKIE_CERT_URL, "https://session.firebase.google.com/", exports.SESSION_COOKIE_INFO, app);
    }
    exports.createSessionCookieVerifier = createSessionCookieVerifier;
  }
});

// node_modules/firebase-admin/lib/auth/user-record.js
var require_user_record = __commonJS({
  "node_modules/firebase-admin/lib/auth/user-record.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserRecord = exports.UserInfo = exports.UserMetadata = exports.MultiFactorSettings = exports.PhoneMultiFactorInfo = exports.MultiFactorInfo = void 0;
    var deep_copy_1 = require_deep_copy();
    var validator_1 = require_validator();
    var utils = require_utils();
    var error_1 = require_error();
    var B64_REDACTED = Buffer.from("REDACTED").toString("base64");
    function parseDate(time) {
      try {
        const date = new Date(parseInt(time, 10));
        if (!isNaN(date.getTime())) {
          return date.toUTCString();
        }
      } catch (e) {
      }
      return null;
    }
    var MultiFactorId;
    (function(MultiFactorId2) {
      MultiFactorId2["Phone"] = "phone";
    })(MultiFactorId || (MultiFactorId = {}));
    var MultiFactorInfo2 = class {
      constructor(response) {
        this.initFromServerResponse(response);
      }
      static initMultiFactorInfo(response) {
        let multiFactorInfo = null;
        try {
          multiFactorInfo = new PhoneMultiFactorInfo2(response);
        } catch (e) {
        }
        return multiFactorInfo;
      }
      toJSON() {
        return {
          uid: this.uid,
          displayName: this.displayName,
          factorId: this.factorId,
          enrollmentTime: this.enrollmentTime
        };
      }
      initFromServerResponse(response) {
        const factorId = response && this.getFactorId(response);
        if (!factorId || !response || !response.mfaEnrollmentId) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Invalid multi-factor info response");
        }
        utils.addReadonlyGetter(this, "uid", response.mfaEnrollmentId);
        utils.addReadonlyGetter(this, "factorId", factorId);
        utils.addReadonlyGetter(this, "displayName", response.displayName);
        if (response.enrolledAt) {
          utils.addReadonlyGetter(this, "enrollmentTime", new Date(response.enrolledAt).toUTCString());
        } else {
          utils.addReadonlyGetter(this, "enrollmentTime", null);
        }
      }
    };
    exports.MultiFactorInfo = MultiFactorInfo2;
    var PhoneMultiFactorInfo2 = class extends MultiFactorInfo2 {
      constructor(response) {
        super(response);
        utils.addReadonlyGetter(this, "phoneNumber", response.phoneInfo);
      }
      toJSON() {
        return Object.assign(super.toJSON(), {
          phoneNumber: this.phoneNumber
        });
      }
      getFactorId(response) {
        return response && response.phoneInfo ? MultiFactorId.Phone : null;
      }
    };
    exports.PhoneMultiFactorInfo = PhoneMultiFactorInfo2;
    var MultiFactorSettings2 = class {
      constructor(response) {
        const parsedEnrolledFactors = [];
        if (!(0, validator_1.isNonNullObject)(response)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Invalid multi-factor response");
        } else if (response.mfaInfo) {
          response.mfaInfo.forEach((factorResponse) => {
            const multiFactorInfo = MultiFactorInfo2.initMultiFactorInfo(factorResponse);
            if (multiFactorInfo) {
              parsedEnrolledFactors.push(multiFactorInfo);
            }
          });
        }
        utils.addReadonlyGetter(this, "enrolledFactors", Object.freeze(parsedEnrolledFactors));
      }
      toJSON() {
        return {
          enrolledFactors: this.enrolledFactors.map((info) => info.toJSON())
        };
      }
    };
    exports.MultiFactorSettings = MultiFactorSettings2;
    var UserMetadata2 = class {
      constructor(response) {
        utils.addReadonlyGetter(this, "creationTime", parseDate(response.createdAt));
        utils.addReadonlyGetter(this, "lastSignInTime", parseDate(response.lastLoginAt));
        const lastRefreshAt = response.lastRefreshAt ? new Date(response.lastRefreshAt).toUTCString() : null;
        utils.addReadonlyGetter(this, "lastRefreshTime", lastRefreshAt);
      }
      toJSON() {
        return {
          lastSignInTime: this.lastSignInTime,
          creationTime: this.creationTime,
          lastRefreshTime: this.lastRefreshTime
        };
      }
    };
    exports.UserMetadata = UserMetadata2;
    var UserInfo2 = class {
      constructor(response) {
        if (!response.rawId || !response.providerId) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Invalid user info response");
        }
        utils.addReadonlyGetter(this, "uid", response.rawId);
        utils.addReadonlyGetter(this, "displayName", response.displayName);
        utils.addReadonlyGetter(this, "email", response.email);
        utils.addReadonlyGetter(this, "photoURL", response.photoUrl);
        utils.addReadonlyGetter(this, "providerId", response.providerId);
        utils.addReadonlyGetter(this, "phoneNumber", response.phoneNumber);
      }
      toJSON() {
        return {
          uid: this.uid,
          displayName: this.displayName,
          email: this.email,
          photoURL: this.photoURL,
          providerId: this.providerId,
          phoneNumber: this.phoneNumber
        };
      }
    };
    exports.UserInfo = UserInfo2;
    var UserRecord2 = class {
      constructor(response) {
        if (!response.localId) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "INTERNAL ASSERT FAILED: Invalid user response");
        }
        utils.addReadonlyGetter(this, "uid", response.localId);
        utils.addReadonlyGetter(this, "email", response.email);
        utils.addReadonlyGetter(this, "emailVerified", !!response.emailVerified);
        utils.addReadonlyGetter(this, "displayName", response.displayName);
        utils.addReadonlyGetter(this, "photoURL", response.photoUrl);
        utils.addReadonlyGetter(this, "phoneNumber", response.phoneNumber);
        utils.addReadonlyGetter(this, "disabled", response.disabled || false);
        utils.addReadonlyGetter(this, "metadata", new UserMetadata2(response));
        const providerData = [];
        for (const entry of response.providerUserInfo || []) {
          providerData.push(new UserInfo2(entry));
        }
        utils.addReadonlyGetter(this, "providerData", providerData);
        if (response.passwordHash === B64_REDACTED) {
          utils.addReadonlyGetter(this, "passwordHash", void 0);
        } else {
          utils.addReadonlyGetter(this, "passwordHash", response.passwordHash);
        }
        utils.addReadonlyGetter(this, "passwordSalt", response.salt);
        if (response.customAttributes) {
          utils.addReadonlyGetter(this, "customClaims", JSON.parse(response.customAttributes));
        }
        let validAfterTime = null;
        if (typeof response.validSince !== "undefined") {
          validAfterTime = parseDate(parseInt(response.validSince, 10) * 1e3);
        }
        utils.addReadonlyGetter(this, "tokensValidAfterTime", validAfterTime || void 0);
        utils.addReadonlyGetter(this, "tenantId", response.tenantId);
        const multiFactor = new MultiFactorSettings2(response);
        if (multiFactor.enrolledFactors.length > 0) {
          utils.addReadonlyGetter(this, "multiFactor", multiFactor);
        }
      }
      toJSON() {
        const json = {
          uid: this.uid,
          email: this.email,
          emailVerified: this.emailVerified,
          displayName: this.displayName,
          photoURL: this.photoURL,
          phoneNumber: this.phoneNumber,
          disabled: this.disabled,
          metadata: this.metadata.toJSON(),
          passwordHash: this.passwordHash,
          passwordSalt: this.passwordSalt,
          customClaims: (0, deep_copy_1.deepCopy)(this.customClaims),
          tokensValidAfterTime: this.tokensValidAfterTime,
          tenantId: this.tenantId
        };
        if (this.multiFactor) {
          json.multiFactor = this.multiFactor.toJSON();
        }
        json.providerData = [];
        for (const entry of this.providerData) {
          json.providerData.push(entry.toJSON());
        }
        return json;
      }
    };
    exports.UserRecord = UserRecord2;
  }
});

// node_modules/firebase-admin/lib/auth/base-auth.js
var require_base_auth = __commonJS({
  "node_modules/firebase-admin/lib/auth/base-auth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseAuth = exports.createFirebaseTokenGenerator = void 0;
    var error_1 = require_error();
    var deep_copy_1 = require_deep_copy();
    var validator = require_validator();
    var auth_api_request_1 = require_auth_api_request();
    var token_generator_1 = require_token_generator();
    var token_verifier_1 = require_token_verifier();
    var auth_config_1 = require_auth_config();
    var user_record_1 = require_user_record();
    var identifier_1 = require_identifier();
    var crypto_signer_1 = require_crypto_signer();
    function createFirebaseTokenGenerator(app, tenantId) {
      try {
        const signer = (0, auth_api_request_1.useEmulator)() ? new token_generator_1.EmulatedSigner() : (0, crypto_signer_1.cryptoSignerFromApp)(app);
        return new token_generator_1.FirebaseTokenGenerator(signer, tenantId);
      } catch (err) {
        throw (0, token_generator_1.handleCryptoSignerError)(err);
      }
    }
    exports.createFirebaseTokenGenerator = createFirebaseTokenGenerator;
    var BaseAuth2 = class {
      constructor(app, authRequestHandler, tokenGenerator) {
        this.authRequestHandler = authRequestHandler;
        if (tokenGenerator) {
          this.tokenGenerator = tokenGenerator;
        } else {
          this.tokenGenerator = createFirebaseTokenGenerator(app);
        }
        this.sessionCookieVerifier = (0, token_verifier_1.createSessionCookieVerifier)(app);
        this.idTokenVerifier = (0, token_verifier_1.createIdTokenVerifier)(app);
        this.authBlockingTokenVerifier = (0, token_verifier_1.createAuthBlockingTokenVerifier)(app);
      }
      createCustomToken(uid, developerClaims) {
        return this.tokenGenerator.createCustomToken(uid, developerClaims);
      }
      verifyIdToken(idToken, checkRevoked = false) {
        const isEmulator = (0, auth_api_request_1.useEmulator)();
        return this.idTokenVerifier.verifyJWT(idToken, isEmulator).then((decodedIdToken) => {
          if (checkRevoked || isEmulator) {
            return this.verifyDecodedJWTNotRevokedOrDisabled(decodedIdToken, error_1.AuthClientErrorCode.ID_TOKEN_REVOKED);
          }
          return decodedIdToken;
        });
      }
      getUser(uid) {
        return this.authRequestHandler.getAccountInfoByUid(uid).then((response) => {
          return new user_record_1.UserRecord(response.users[0]);
        });
      }
      getUserByEmail(email) {
        return this.authRequestHandler.getAccountInfoByEmail(email).then((response) => {
          return new user_record_1.UserRecord(response.users[0]);
        });
      }
      getUserByPhoneNumber(phoneNumber) {
        return this.authRequestHandler.getAccountInfoByPhoneNumber(phoneNumber).then((response) => {
          return new user_record_1.UserRecord(response.users[0]);
        });
      }
      getUserByProviderUid(providerId, uid) {
        if (providerId === "phone") {
          return this.getUserByPhoneNumber(uid);
        } else if (providerId === "email") {
          return this.getUserByEmail(uid);
        }
        return this.authRequestHandler.getAccountInfoByFederatedUid(providerId, uid).then((response) => {
          return new user_record_1.UserRecord(response.users[0]);
        });
      }
      getUsers(identifiers) {
        if (!validator.isArray(identifiers)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "`identifiers` parameter must be an array");
        }
        return this.authRequestHandler.getAccountInfoByIdentifiers(identifiers).then((response) => {
          const isUserFound = (id, userRecords) => {
            return !!userRecords.find((userRecord) => {
              if ((0, identifier_1.isUidIdentifier)(id)) {
                return id.uid === userRecord.uid;
              } else if ((0, identifier_1.isEmailIdentifier)(id)) {
                return id.email === userRecord.email;
              } else if ((0, identifier_1.isPhoneIdentifier)(id)) {
                return id.phoneNumber === userRecord.phoneNumber;
              } else if ((0, identifier_1.isProviderIdentifier)(id)) {
                const matchingUserInfo = userRecord.providerData.find((userInfo) => {
                  return id.providerId === userInfo.providerId;
                });
                return !!matchingUserInfo && id.providerUid === matchingUserInfo.uid;
              } else {
                throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "Unhandled identifier type");
              }
            });
          };
          const users = response.users ? response.users.map((user) => new user_record_1.UserRecord(user)) : [];
          const notFound = identifiers.filter((id) => !isUserFound(id, users));
          return { users, notFound };
        });
      }
      listUsers(maxResults, pageToken) {
        return this.authRequestHandler.downloadAccount(maxResults, pageToken).then((response) => {
          const users = [];
          response.users.forEach((userResponse) => {
            users.push(new user_record_1.UserRecord(userResponse));
          });
          const result = {
            users,
            pageToken: response.nextPageToken
          };
          if (typeof result.pageToken === "undefined") {
            delete result.pageToken;
          }
          return result;
        });
      }
      createUser(properties) {
        return this.authRequestHandler.createNewAccount(properties).then((uid) => {
          return this.getUser(uid);
        }).catch((error) => {
          if (error.code === "auth/user-not-found") {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "Unable to create the user record provided.");
          }
          throw error;
        });
      }
      deleteUser(uid) {
        return this.authRequestHandler.deleteAccount(uid).then(() => {
        });
      }
      deleteUsers(uids) {
        if (!validator.isArray(uids)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "`uids` parameter must be an array");
        }
        return this.authRequestHandler.deleteAccounts(uids, true).then((batchDeleteAccountsResponse) => {
          const result = {
            failureCount: 0,
            successCount: uids.length,
            errors: []
          };
          if (!validator.isNonEmptyArray(batchDeleteAccountsResponse.errors)) {
            return result;
          }
          result.failureCount = batchDeleteAccountsResponse.errors.length;
          result.successCount = uids.length - batchDeleteAccountsResponse.errors.length;
          result.errors = batchDeleteAccountsResponse.errors.map((batchDeleteErrorInfo) => {
            if (batchDeleteErrorInfo.index === void 0) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, "Corrupt BatchDeleteAccountsResponse detected");
            }
            const errMsgToError = (msg) => {
              const code = msg && msg.startsWith("NOT_DISABLED") ? error_1.AuthClientErrorCode.USER_NOT_DISABLED : error_1.AuthClientErrorCode.INTERNAL_ERROR;
              return new error_1.FirebaseAuthError(code, batchDeleteErrorInfo.message);
            };
            return {
              index: batchDeleteErrorInfo.index,
              error: errMsgToError(batchDeleteErrorInfo.message)
            };
          });
          return result;
        });
      }
      updateUser(uid, properties) {
        properties = (0, deep_copy_1.deepCopy)(properties);
        if (properties?.providerToLink) {
          if (properties.providerToLink.providerId === "email") {
            if (typeof properties.email !== "undefined") {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "Both UpdateRequest.email and UpdateRequest.providerToLink.providerId='email' were set. To link to the email/password provider, only specify the UpdateRequest.email field.");
            }
            properties.email = properties.providerToLink.uid;
            delete properties.providerToLink;
          } else if (properties.providerToLink.providerId === "phone") {
            if (typeof properties.phoneNumber !== "undefined") {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "Both UpdateRequest.phoneNumber and UpdateRequest.providerToLink.providerId='phone' were set. To link to a phone provider, only specify the UpdateRequest.phoneNumber field.");
            }
            properties.phoneNumber = properties.providerToLink.uid;
            delete properties.providerToLink;
          }
        }
        if (properties?.providersToUnlink) {
          if (properties.providersToUnlink.indexOf("phone") !== -1) {
            if (properties.phoneNumber === null) {
              throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "Both UpdateRequest.phoneNumber=null and UpdateRequest.providersToUnlink=['phone'] were set. To unlink from a phone provider, only specify the UpdateRequest.phoneNumber=null field.");
            }
          }
        }
        return this.authRequestHandler.updateExistingAccount(uid, properties).then((existingUid) => {
          return this.getUser(existingUid);
        });
      }
      setCustomUserClaims(uid, customUserClaims) {
        return this.authRequestHandler.setCustomUserClaims(uid, customUserClaims).then(() => {
        });
      }
      revokeRefreshTokens(uid) {
        return this.authRequestHandler.revokeRefreshTokens(uid).then(() => {
        });
      }
      importUsers(users, options) {
        return this.authRequestHandler.uploadAccount(users, options);
      }
      createSessionCookie(idToken, sessionCookieOptions) {
        if (!validator.isNonNullObject(sessionCookieOptions) || !validator.isNumber(sessionCookieOptions.expiresIn)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_SESSION_COOKIE_DURATION));
        }
        return this.authRequestHandler.createSessionCookie(idToken, sessionCookieOptions.expiresIn);
      }
      verifySessionCookie(sessionCookie, checkRevoked = false) {
        const isEmulator = (0, auth_api_request_1.useEmulator)();
        return this.sessionCookieVerifier.verifyJWT(sessionCookie, isEmulator).then((decodedIdToken) => {
          if (checkRevoked || isEmulator) {
            return this.verifyDecodedJWTNotRevokedOrDisabled(decodedIdToken, error_1.AuthClientErrorCode.SESSION_COOKIE_REVOKED);
          }
          return decodedIdToken;
        });
      }
      generatePasswordResetLink(email, actionCodeSettings) {
        return this.authRequestHandler.getEmailActionLink("PASSWORD_RESET", email, actionCodeSettings);
      }
      generateEmailVerificationLink(email, actionCodeSettings) {
        return this.authRequestHandler.getEmailActionLink("VERIFY_EMAIL", email, actionCodeSettings);
      }
      generateVerifyAndChangeEmailLink(email, newEmail, actionCodeSettings) {
        return this.authRequestHandler.getEmailActionLink("VERIFY_AND_CHANGE_EMAIL", email, actionCodeSettings, newEmail);
      }
      generateSignInWithEmailLink(email, actionCodeSettings) {
        return this.authRequestHandler.getEmailActionLink("EMAIL_SIGNIN", email, actionCodeSettings);
      }
      listProviderConfigs(options) {
        const processResponse = (response, providerConfigs) => {
          const result = {
            providerConfigs
          };
          if (Object.prototype.hasOwnProperty.call(response, "nextPageToken")) {
            result.pageToken = response.nextPageToken;
          }
          return result;
        };
        if (options && options.type === "oidc") {
          return this.authRequestHandler.listOAuthIdpConfigs(options.maxResults, options.pageToken).then((response) => {
            const providerConfigs = [];
            response.oauthIdpConfigs.forEach((configResponse) => {
              providerConfigs.push(new auth_config_1.OIDCConfig(configResponse));
            });
            return processResponse(response, providerConfigs);
          });
        } else if (options && options.type === "saml") {
          return this.authRequestHandler.listInboundSamlConfigs(options.maxResults, options.pageToken).then((response) => {
            const providerConfigs = [];
            response.inboundSamlConfigs.forEach((configResponse) => {
              providerConfigs.push(new auth_config_1.SAMLConfig(configResponse));
            });
            return processResponse(response, providerConfigs);
          });
        }
        return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, '"AuthProviderConfigFilter.type" must be either "saml" or "oidc"'));
      }
      getProviderConfig(providerId) {
        if (auth_config_1.OIDCConfig.isProviderId(providerId)) {
          return this.authRequestHandler.getOAuthIdpConfig(providerId).then((response) => {
            return new auth_config_1.OIDCConfig(response);
          });
        } else if (auth_config_1.SAMLConfig.isProviderId(providerId)) {
          return this.authRequestHandler.getInboundSamlConfig(providerId).then((response) => {
            return new auth_config_1.SAMLConfig(response);
          });
        }
        return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID));
      }
      deleteProviderConfig(providerId) {
        if (auth_config_1.OIDCConfig.isProviderId(providerId)) {
          return this.authRequestHandler.deleteOAuthIdpConfig(providerId);
        } else if (auth_config_1.SAMLConfig.isProviderId(providerId)) {
          return this.authRequestHandler.deleteInboundSamlConfig(providerId);
        }
        return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID));
      }
      updateProviderConfig(providerId, updatedConfig) {
        if (!validator.isNonNullObject(updatedConfig)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, 'Request is missing "UpdateAuthProviderRequest" configuration.'));
        }
        if (auth_config_1.OIDCConfig.isProviderId(providerId)) {
          return this.authRequestHandler.updateOAuthIdpConfig(providerId, updatedConfig).then((response) => {
            return new auth_config_1.OIDCConfig(response);
          });
        } else if (auth_config_1.SAMLConfig.isProviderId(providerId)) {
          return this.authRequestHandler.updateInboundSamlConfig(providerId, updatedConfig).then((response) => {
            return new auth_config_1.SAMLConfig(response);
          });
        }
        return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID));
      }
      createProviderConfig(config) {
        if (!validator.isNonNullObject(config)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CONFIG, 'Request is missing "AuthProviderConfig" configuration.'));
        }
        if (auth_config_1.OIDCConfig.isProviderId(config.providerId)) {
          return this.authRequestHandler.createOAuthIdpConfig(config).then((response) => {
            return new auth_config_1.OIDCConfig(response);
          });
        } else if (auth_config_1.SAMLConfig.isProviderId(config.providerId)) {
          return this.authRequestHandler.createInboundSamlConfig(config).then((response) => {
            return new auth_config_1.SAMLConfig(response);
          });
        }
        return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID));
      }
      _verifyAuthBlockingToken(token, audience) {
        const isEmulator = (0, auth_api_request_1.useEmulator)();
        return this.authBlockingTokenVerifier._verifyAuthBlockingToken(token, isEmulator, audience).then((decodedAuthBlockingToken) => {
          return decodedAuthBlockingToken;
        });
      }
      verifyDecodedJWTNotRevokedOrDisabled(decodedIdToken, revocationErrorInfo) {
        return this.getUser(decodedIdToken.sub).then((user) => {
          if (user.disabled) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.USER_DISABLED, "The user record is disabled.");
          }
          if (user.tokensValidAfterTime) {
            const authTimeUtc = decodedIdToken.auth_time * 1e3;
            const validSinceUtc = new Date(user.tokensValidAfterTime).getTime();
            if (authTimeUtc < validSinceUtc) {
              throw new error_1.FirebaseAuthError(revocationErrorInfo);
            }
          }
          return decodedIdToken;
        });
      }
    };
    exports.BaseAuth = BaseAuth2;
  }
});

// node_modules/firebase-admin/lib/auth/tenant-manager.js
var require_tenant_manager = __commonJS({
  "node_modules/firebase-admin/lib/auth/tenant-manager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TenantManager = exports.TenantAwareAuth = void 0;
    var validator = require_validator();
    var utils = require_utils();
    var error_1 = require_error();
    var base_auth_1 = require_base_auth();
    var tenant_1 = require_tenant();
    var auth_api_request_1 = require_auth_api_request();
    var TenantAwareAuth2 = class extends base_auth_1.BaseAuth {
      constructor(app, tenantId) {
        super(app, new auth_api_request_1.TenantAwareAuthRequestHandler(app, tenantId), (0, base_auth_1.createFirebaseTokenGenerator)(app, tenantId));
        utils.addReadonlyGetter(this, "tenantId", tenantId);
      }
      verifyIdToken(idToken, checkRevoked = false) {
        return super.verifyIdToken(idToken, checkRevoked).then((decodedClaims) => {
          if (decodedClaims.firebase.tenant !== this.tenantId) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.MISMATCHING_TENANT_ID);
          }
          return decodedClaims;
        });
      }
      createSessionCookie(idToken, sessionCookieOptions) {
        if (!validator.isNonEmptyString(idToken)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ID_TOKEN));
        }
        if (!validator.isNonNullObject(sessionCookieOptions) || !validator.isNumber(sessionCookieOptions.expiresIn)) {
          return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_SESSION_COOKIE_DURATION));
        }
        return this.verifyIdToken(idToken).then(() => {
          return super.createSessionCookie(idToken, sessionCookieOptions);
        });
      }
      verifySessionCookie(sessionCookie, checkRevoked = false) {
        return super.verifySessionCookie(sessionCookie, checkRevoked).then((decodedClaims) => {
          if (decodedClaims.firebase.tenant !== this.tenantId) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.MISMATCHING_TENANT_ID);
          }
          return decodedClaims;
        });
      }
    };
    exports.TenantAwareAuth = TenantAwareAuth2;
    var TenantManager2 = class {
      constructor(app) {
        this.app = app;
        this.authRequestHandler = new auth_api_request_1.AuthRequestHandler(app);
        this.tenantsMap = {};
      }
      authForTenant(tenantId) {
        if (!validator.isNonEmptyString(tenantId)) {
          throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_TENANT_ID);
        }
        if (typeof this.tenantsMap[tenantId] === "undefined") {
          this.tenantsMap[tenantId] = new TenantAwareAuth2(this.app, tenantId);
        }
        return this.tenantsMap[tenantId];
      }
      getTenant(tenantId) {
        return this.authRequestHandler.getTenant(tenantId).then((response) => {
          return new tenant_1.Tenant(response);
        });
      }
      listTenants(maxResults, pageToken) {
        return this.authRequestHandler.listTenants(maxResults, pageToken).then((response) => {
          const tenants = [];
          response.tenants.forEach((tenantResponse) => {
            tenants.push(new tenant_1.Tenant(tenantResponse));
          });
          const result = {
            tenants,
            pageToken: response.nextPageToken
          };
          if (typeof result.pageToken === "undefined") {
            delete result.pageToken;
          }
          return result;
        });
      }
      deleteTenant(tenantId) {
        return this.authRequestHandler.deleteTenant(tenantId);
      }
      createTenant(tenantOptions) {
        return this.authRequestHandler.createTenant(tenantOptions).then((response) => {
          return new tenant_1.Tenant(response);
        });
      }
      updateTenant(tenantId, tenantOptions) {
        return this.authRequestHandler.updateTenant(tenantId, tenantOptions).then((response) => {
          return new tenant_1.Tenant(response);
        });
      }
    };
    exports.TenantManager = TenantManager2;
  }
});

// node_modules/firebase-admin/lib/auth/project-config-manager.js
var require_project_config_manager = __commonJS({
  "node_modules/firebase-admin/lib/auth/project-config-manager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProjectConfigManager = void 0;
    var project_config_1 = require_project_config();
    var auth_api_request_1 = require_auth_api_request();
    var ProjectConfigManager2 = class {
      constructor(app) {
        this.authRequestHandler = new auth_api_request_1.AuthRequestHandler(app);
      }
      getProjectConfig() {
        return this.authRequestHandler.getProjectConfig().then((response) => {
          return new project_config_1.ProjectConfig(response);
        });
      }
      updateProjectConfig(projectConfigOptions) {
        return this.authRequestHandler.updateProjectConfig(projectConfigOptions).then((response) => {
          return new project_config_1.ProjectConfig(response);
        });
      }
    };
    exports.ProjectConfigManager = ProjectConfigManager2;
  }
});

// node_modules/firebase-admin/lib/auth/auth.js
var require_auth = __commonJS({
  "node_modules/firebase-admin/lib/auth/auth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Auth = void 0;
    var auth_api_request_1 = require_auth_api_request();
    var tenant_manager_1 = require_tenant_manager();
    var base_auth_1 = require_base_auth();
    var project_config_manager_1 = require_project_config_manager();
    var Auth2 = class extends base_auth_1.BaseAuth {
      constructor(app) {
        super(app, new auth_api_request_1.AuthRequestHandler(app));
        this.app_ = app;
        this.tenantManager_ = new tenant_manager_1.TenantManager(app);
        this.projectConfigManager_ = new project_config_manager_1.ProjectConfigManager(app);
      }
      get app() {
        return this.app_;
      }
      tenantManager() {
        return this.tenantManager_;
      }
      projectConfigManager() {
        return this.projectConfigManager_;
      }
    };
    exports.Auth = Auth2;
  }
});

// node_modules/firebase-admin/lib/auth/index.js
var require_auth2 = __commonJS({
  "node_modules/firebase-admin/lib/auth/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserRecord = exports.UserMetadata = exports.UserInfo = exports.PhoneMultiFactorInfo = exports.MultiFactorSettings = exports.MultiFactorInfo = exports.ProjectConfigManager = exports.ProjectConfig = exports.TenantManager = exports.TenantAwareAuth = exports.Tenant = exports.BaseAuth = exports.Auth = exports.getAuth = void 0;
    var index_1 = require_app();
    var auth_1 = require_auth();
    function getAuth2(app) {
      if (typeof app === "undefined") {
        app = (0, index_1.getApp)();
      }
      const firebaseApp = app;
      return firebaseApp.getOrInitService("auth", (app2) => new auth_1.Auth(app2));
    }
    exports.getAuth = getAuth2;
    var auth_2 = require_auth();
    Object.defineProperty(exports, "Auth", { enumerable: true, get: function() {
      return auth_2.Auth;
    } });
    var base_auth_1 = require_base_auth();
    Object.defineProperty(exports, "BaseAuth", { enumerable: true, get: function() {
      return base_auth_1.BaseAuth;
    } });
    var tenant_1 = require_tenant();
    Object.defineProperty(exports, "Tenant", { enumerable: true, get: function() {
      return tenant_1.Tenant;
    } });
    var tenant_manager_1 = require_tenant_manager();
    Object.defineProperty(exports, "TenantAwareAuth", { enumerable: true, get: function() {
      return tenant_manager_1.TenantAwareAuth;
    } });
    Object.defineProperty(exports, "TenantManager", { enumerable: true, get: function() {
      return tenant_manager_1.TenantManager;
    } });
    var project_config_1 = require_project_config();
    Object.defineProperty(exports, "ProjectConfig", { enumerable: true, get: function() {
      return project_config_1.ProjectConfig;
    } });
    var project_config_manager_1 = require_project_config_manager();
    Object.defineProperty(exports, "ProjectConfigManager", { enumerable: true, get: function() {
      return project_config_manager_1.ProjectConfigManager;
    } });
    var user_record_1 = require_user_record();
    Object.defineProperty(exports, "MultiFactorInfo", { enumerable: true, get: function() {
      return user_record_1.MultiFactorInfo;
    } });
    Object.defineProperty(exports, "MultiFactorSettings", { enumerable: true, get: function() {
      return user_record_1.MultiFactorSettings;
    } });
    Object.defineProperty(exports, "PhoneMultiFactorInfo", { enumerable: true, get: function() {
      return user_record_1.PhoneMultiFactorInfo;
    } });
    Object.defineProperty(exports, "UserInfo", { enumerable: true, get: function() {
      return user_record_1.UserInfo;
    } });
    Object.defineProperty(exports, "UserMetadata", { enumerable: true, get: function() {
      return user_record_1.UserMetadata;
    } });
    Object.defineProperty(exports, "UserRecord", { enumerable: true, get: function() {
      return user_record_1.UserRecord;
    } });
  }
});

// node_modules/firebase-admin/lib/esm/auth/index.js
var import_auth = __toESM(require_auth2(), 1);
var Auth = import_auth.default.Auth;
var BaseAuth = import_auth.default.BaseAuth;
var MultiFactorInfo = import_auth.default.MultiFactorInfo;
var MultiFactorSettings = import_auth.default.MultiFactorSettings;
var PhoneMultiFactorInfo = import_auth.default.PhoneMultiFactorInfo;
var ProjectConfig = import_auth.default.ProjectConfig;
var ProjectConfigManager = import_auth.default.ProjectConfigManager;
var Tenant = import_auth.default.Tenant;
var TenantAwareAuth = import_auth.default.TenantAwareAuth;
var TenantManager = import_auth.default.TenantManager;
var UserInfo = import_auth.default.UserInfo;
var UserMetadata = import_auth.default.UserMetadata;
var UserRecord = import_auth.default.UserRecord;
var getAuth = import_auth.default.getAuth;

export {
  Auth,
  BaseAuth,
  MultiFactorInfo,
  MultiFactorSettings,
  PhoneMultiFactorInfo,
  ProjectConfig,
  ProjectConfigManager,
  Tenant,
  TenantAwareAuth,
  TenantManager,
  UserInfo,
  UserMetadata,
  UserRecord,
  getAuth
};
/*!
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*!
 * @license
 * Copyright 2021 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*!
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*!
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*!
 * Copyright 2020 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*!
 * Copyright 2021 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*!
 * Copyright 2022 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*! firebase-admin v11.3.0 */
//# sourceMappingURL=/build/_shared/chunk-KRXPUJNH.js.map
