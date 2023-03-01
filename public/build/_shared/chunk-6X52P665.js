import {
  Label_default
} from "/build/_shared/chunk-CSNF7QXE.js";
import {
  firebase_config_default
} from "/build/_shared/chunk-MZJK6QBW.js";
import {
  Ti,
  yi
} from "/build/_shared/chunk-CXJ2SC35.js";
import {
  IconButton_default
} from "/build/_shared/chunk-VCZGRDVP.js";
import {
  CloudArrowUpIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-4PMGBJWS.js";
import {
  If_default
} from "/build/_shared/chunk-JLCRG65W.js";
import {
  configuration_default
} from "/build/_shared/chunk-WULCHIKQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QEOXWCFK.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/firebase/components/FirebaseStorageProvider.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FirebaseStorageProvider({
  children,
  useEmulator
}) {
  const emulator = useEmulator ?? firebase_config_default.emulator;
  const { data: sdk, status } = Ti(async (app) => {
    const bucketUrl = firebase_config_default.storageBucket;
    const { getStorage } = await import("/build/_shared/index.esm-5ZYZ52DV.js");
    const storage = getStorage(app, bucketUrl);
    if (emulator) {
      await connectToEmulator(storage);
    }
    return storage;
  });
  const loading = status === "loading";
  if (loading) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(yi, {
    sdk,
    children
  }, void 0, false, {
    fileName: "app/core/firebase/components/FirebaseStorageProvider.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
async function connectToEmulator(storage) {
  const { connectStorageEmulator } = await import("/build/_shared/index.esm-5ZYZ52DV.js");
  const port = 9199;
  const emulatorHost = configuration_default.emulatorHost ?? "localhost";
  connectStorageEmulator(storage, emulatorHost, port);
}

// app/core/ui/ImageUploadInput.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var IMAGE_SIZE = 22;
var ImageUploadInput = ({
  children,
  image,
  onClear,
  innerRef,
  ...props
}) => {
  const propValue = image ?? null;
  const [value, setValue] = (0, import_react.useState)(propValue);
  const [fileName, setFileName] = (0, import_react.useState)("");
  const ref = (0, import_react.useRef)();
  const onInput = (e) => {
    e.preventDefault();
    const files = e.currentTarget.files;
    if (files?.length) {
      const file = files[0];
      const data = URL.createObjectURL(file);
      setValue(data);
      setFileName(file.name);
    }
    if (props.onInput) {
      props.onInput(e);
    }
  };
  const imageRemoved = (e) => {
    e.preventDefault();
    setValue("");
    setFileName("");
    if (ref.current) {
      ref.current.value = "";
    }
    if (onClear) {
      onClear();
    }
  };
  (0, import_react.useEffect)(() => {
    setValue(propValue);
  }, [propValue]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "ImageUploadInput",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        ...props,
        ref: (inputRef) => {
          ref.current = inputRef ?? void 0;
          if (innerRef) {
            innerRef(inputRef);
          }
        },
        className: "hidden",
        type: "file",
        onInput,
        accept: "image/*"
      }, void 0, false, {
        fileName: "app/core/ui/ImageUploadInput.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex items-center space-x-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: !value,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloudArrowUpIcon_default, {
                  className: "h-5 text-gray-500 dark:text-black-100"
                }, void 0, false, {
                  fileName: "app/core/ui/ImageUploadInput.tsx",
                  lineNumber: 87,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/core/ui/ImageUploadInput.tsx",
                lineNumber: 86,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: value,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  loading: "lazy",
                  style: {
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE
                  },
                  className: "object-contain",
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  src: value,
                  alt: props.alt ?? ""
                }, void 0, false, {
                  fileName: "app/core/ui/ImageUploadInput.tsx",
                  lineNumber: 93,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/core/ui/ImageUploadInput.tsx",
                lineNumber: 92,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/core/ui/ImageUploadInput.tsx",
            lineNumber: 85,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: !value,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-auto",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label_default, {
                as: "span",
                className: "cursor-pointer text-xs",
                children
              }, void 0, false, {
                fileName: "app/core/ui/ImageUploadInput.tsx",
                lineNumber: 110,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/core/ui/ImageUploadInput.tsx",
              lineNumber: 109,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/core/ui/ImageUploadInput.tsx",
            lineNumber: 108,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: value,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-auto",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: fileName,
                fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label_default, {
                  as: "span",
                  className: "cursor-pointer text-xs ellipsify",
                  children
                }, void 0, false, {
                  fileName: "app/core/ui/ImageUploadInput.tsx",
                  lineNumber: 121,
                  columnNumber: 17
                }, this),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label_default, {
                  as: "span",
                  className: "text-xs ellipsify",
                  children: fileName
                }, void 0, false, {
                  fileName: "app/core/ui/ImageUploadInput.tsx",
                  lineNumber: 129,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/core/ui/ImageUploadInput.tsx",
                lineNumber: 118,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/core/ui/ImageUploadInput.tsx",
              lineNumber: 117,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/core/ui/ImageUploadInput.tsx",
            lineNumber: 116,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: value,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
              onClick: imageRemoved,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, {
                className: "h-3 w-3"
              }, void 0, false, {
                fileName: "app/core/ui/ImageUploadInput.tsx",
                lineNumber: 138,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/core/ui/ImageUploadInput.tsx",
              lineNumber: 137,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/core/ui/ImageUploadInput.tsx",
            lineNumber: 136,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/core/ui/ImageUploadInput.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/core/ui/ImageUploadInput.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
};
var ImageUploadInput_default = ImageUploadInput;

export {
  FirebaseStorageProvider,
  ImageUploadInput_default
};
//# sourceMappingURL=/build/_shared/chunk-6X52P665.js.map
