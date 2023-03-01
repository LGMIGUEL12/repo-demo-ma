import {
  useForm
} from "/build/_shared/chunk-6EEWVN7Z.js";
import {
  AppContainer_default,
  AppHeader_default
} from "/build/_shared/chunk-HAVMV4YD.js";
import "/build/_shared/chunk-W4DXIIZX.js";
import "/build/_shared/chunk-SSRIOEEA.js";
import "/build/_shared/chunk-NKQZC65O.js";
import "/build/_shared/chunk-T2CF575W.js";
import "/build/_shared/chunk-AJBLUEBX.js";
import "/build/_shared/chunk-NMWHWOJM.js";
import "/build/_shared/chunk-EHUQ3EN7.js";
import "/build/_shared/chunk-CCK66CUU.js";
import {
  n
} from "/build/_shared/chunk-45D3VFMN.js";
import {
  TextField_default
} from "/build/_shared/chunk-T4OLHNMO.js";
import "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import "/build/_shared/chunk-I7U6GVVU.js";
import "/build/_shared/chunk-3RHYN7AX.js";
import "/build/_shared/chunk-EPY2ZBMR.js";
import "/build/_shared/chunk-2RQ7OU4V.js";
import "/build/_shared/chunk-5CBDJCHW.js";
import {
  ClientOnly_default
} from "/build/_shared/chunk-FT7OPBPM.js";
import "/build/_shared/chunk-I5LWYJ5L.js";
import "/build/_shared/chunk-6ZZPVUWI.js";
import "/build/_shared/chunk-UJJUUA64.js";
import "/build/_shared/chunk-R32XIEQ6.js";
import "/build/_shared/chunk-CRZAZ7IR.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import "/build/_shared/chunk-KHW4CDLX.js";
import "/build/_shared/chunk-52KVLBBL.js";
import {
  IconButton_default
} from "/build/_shared/chunk-MEFOEGYP.js";
import {
  PencilSquareIcon_default,
  TrashIcon_default
} from "/build/_shared/chunk-7KHFEMFW.js";
import "/build/_shared/chunk-CXJ2SC35.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import {
  Heading_default
} from "/build/_shared/chunk-54TVJDMF.js";
import {
  Button_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import "/build/_shared/chunk-DN742LHR.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import "/build/_shared/chunk-WULCHIKQ.js";
import "/build/_shared/chunk-WIOFJORR.js";
import "/build/_shared/chunk-A4KF3ELC.js";
import "/build/_shared/chunk-BCUDKLQK.js";
import "/build/_shared/chunk-EGSMFI33.js";
import "/build/_shared/chunk-TUM7Q574.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/__app/tasks/index.tsx
init_es();

// app/components/tasks/CreateTaskForm.tsx
var import_react = __toESM(require_react());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CreateTaskForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: ""
    }
  });
  const titleControl = register("title", { required: true });
  const descriptionControl = register("description", { required: true });
  const onError = (0, import_react.useCallback)(() => {
    n.error("error");
  }, []);
  const onSubmit = (title, description) => {
    console.log(title);
    console.log(description);
  };
  (0, import_react.useEffect)(() => {
    reset({ title: "", description: "" });
  }, [reset]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
      onSubmit: handleSubmit((value) => {
        return onSubmit(value.title, value.description);
      }),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex items-center space-y-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "ml-2 mr-2 flex-auto",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "task:titleInputLabel"
                    }, void 0, false, {
                      fileName: "app/components/tasks/CreateTaskForm.tsx",
                      lineNumber: 44,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      name: titleControl.name,
                      innerRef: titleControl.ref,
                      onChange: titleControl.onChange,
                      onBlur: titleControl.onBlur,
                      required: true,
                      "data-cy": "task-title-input",
                      placeholder: "agrega el titulo"
                    }, void 0, false, {
                      fileName: "app/components/tasks/CreateTaskForm.tsx",
                      lineNumber: 45,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/tasks/CreateTaskForm.tsx",
                  lineNumber: 43,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/tasks/CreateTaskForm.tsx",
                lineNumber: 42,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                className: "pt-1",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                      i18nKey: "task:descriptionInputLabel"
                    }, void 0, false, {
                      fileName: "app/components/tasks/CreateTaskForm.tsx",
                      lineNumber: 58,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      name: descriptionControl.name,
                      innerRef: descriptionControl.ref,
                      onChange: descriptionControl.onChange,
                      onBlur: descriptionControl.onBlur,
                      required: true,
                      "data-cy": "task-description-input",
                      placeholder: "agrega toda la descripcion deseada"
                    }, void 0, false, {
                      fileName: "app/components/tasks/CreateTaskForm.tsx",
                      lineNumber: 59,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/tasks/CreateTaskForm.tsx",
                  lineNumber: 57,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/tasks/CreateTaskForm.tsx",
                lineNumber: 56,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/tasks/CreateTaskForm.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "ml-2 mr-2 flex-initial pb-1",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              className: "w-full md:w-auto",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "task:createTaskSubmitLabel"
              }, void 0, false, {
                fileName: "app/components/tasks/CreateTaskForm.tsx",
                lineNumber: 73,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/components/tasks/CreateTaskForm.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/tasks/CreateTaskForm.tsx",
            lineNumber: 71,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/tasks/CreateTaskForm.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/tasks/CreateTaskForm.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/tasks/CreateTaskForm.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
};
var CreateTaskForm_default = CreateTaskForm;

// app/components/tasks/TasksDataContainer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TasksDataContainer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: `flex flex-col space-y-4 md:space-y-0 lg:mt-8 lg:flex-row lg:space-x-14 xl:space-x-20`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid grid-cols-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-30 p6 border-1 m-5 flex flex-col rounded border-inherit text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-center text-base font-bold",
                children: "Lorem ipsum dolor sit."
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 13,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-base",
                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam ipsum nemo neque magnam ipsam eius animi rem nisi voluptatibus?"
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 16,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex justify-around",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilSquareIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 23,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 22,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 26,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 25,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 21,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/tasks/TasksDataContainer.tsx",
            lineNumber: 12,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-30 p6 border-1 m-5 flex flex-col rounded border-inherit text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-center text-base font-bold",
                children: "Lorem ipsum dolor sit."
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 31,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-base",
                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam ipsum nemo neque magnam ipsam eius animi rem nisi voluptatibus?"
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 34,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex justify-around",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilSquareIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 41,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 40,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 44,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 43,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 39,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/tasks/TasksDataContainer.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-30 p6 border-1 m-5 flex flex-col rounded border-inherit text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-center text-base font-bold",
                children: "Lorem ipsum dolor sit."
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 49,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-base",
                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam ipsum nemo neque magnam ipsam eius animi rem nisi voluptatibus?"
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 52,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex justify-around",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilSquareIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 59,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 58,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 62,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 61,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 57,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/tasks/TasksDataContainer.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-30 p6 border-1 m-5 flex flex-col rounded border-inherit text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-center text-base font-bold",
                children: "Lorem ipsum dolor sit."
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 67,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-base",
                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam ipsum nemo neque magnam ipsam eius animi rem nisi voluptatibus?"
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 70,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex justify-around",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilSquareIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 77,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 76,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 80,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 79,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 75,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/tasks/TasksDataContainer.tsx",
            lineNumber: 66,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-30 p6 border-1 m-5 flex flex-col rounded border-inherit text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-center text-base font-bold",
                children: "Lorem ipsum dolor sit."
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 85,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-base",
                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam ipsum nemo neque magnam ipsam eius animi rem nisi voluptatibus?"
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 88,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex justify-around",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilSquareIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 95,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 94,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 98,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 97,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 93,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/tasks/TasksDataContainer.tsx",
            lineNumber: 84,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-30 p6 border-1 m-5 flex flex-col rounded border-inherit text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-center text-base font-bold",
                children: "Lorem ipsum dolor sit."
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 103,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-base",
                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam ipsum nemo neque magnam ipsam eius animi rem nisi voluptatibus?"
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex justify-around",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilSquareIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 113,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 112,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 116,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 115,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 111,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/tasks/TasksDataContainer.tsx",
            lineNumber: 102,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-30 p6 border-1 m-5 flex flex-col rounded border-inherit text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-center text-base font-bold",
                children: "Lorem ipsum dolor sit."
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 121,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-base",
                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam ipsum nemo neque magnam ipsam eius animi rem nisi voluptatibus?"
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 124,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex justify-around",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilSquareIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 131,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 130,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 134,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 133,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 129,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/tasks/TasksDataContainer.tsx",
            lineNumber: 120,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-30 p6 border-1 m-5 flex flex-col rounded border-inherit text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-center text-base font-bold",
                children: "Lorem ipsum dolor sit."
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 139,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-base",
                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam ipsum nemo neque magnam ipsam eius animi rem nisi voluptatibus?"
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 142,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex justify-around",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilSquareIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 149,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 148,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 152,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 151,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 147,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/tasks/TasksDataContainer.tsx",
            lineNumber: 138,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-30 p6 border-1 m-5 flex flex-col rounded border-inherit text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-center text-base font-bold",
                children: "Lorem ipsum dolor sit."
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 157,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-base",
                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam ipsum nemo neque magnam ipsam eius animi rem nisi voluptatibus?"
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 160,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex justify-around",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilSquareIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 167,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 166,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 170,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 169,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 165,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/tasks/TasksDataContainer.tsx",
            lineNumber: 156,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-30 p6 border-1 m-5 flex flex-col rounded border-inherit text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-center text-base font-bold",
                children: "Lorem ipsum dolor sit."
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 175,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-base",
                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo totam ipsum nemo neque magnam ipsam eius animi rem nisi voluptatibus?"
              }, void 0, false, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 178,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex justify-around",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilSquareIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 185,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 184,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, {
                      className: "dark h-6"
                    }, void 0, false, {
                      fileName: "app/components/tasks/TasksDataContainer.tsx",
                      lineNumber: 188,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/tasks/TasksDataContainer.tsx",
                    lineNumber: 187,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/tasks/TasksDataContainer.tsx",
                lineNumber: 183,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/tasks/TasksDataContainer.tsx",
            lineNumber: 174,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/tasks/TasksDataContainer.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/tasks/TasksDataContainer.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/tasks/TasksDataContainer.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
};
var TasksDataContainer_default = TasksDataContainer;

// app/components/tasks/TasksContainer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TasksContainer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col ",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreateTaskForm_default, {}, void 0, false, {
            fileName: "app/components/tasks/TasksContainer.tsx",
            lineNumber: 11,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/tasks/TasksContainer.tsx",
          lineNumber: 10,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {
          className: "mt-3 mb-3"
        }, void 0, false, {
          fileName: "app/components/tasks/TasksContainer.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "text-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
            type: 1,
            children: "Task To Do"
          }, void 0, false, {
            fileName: "app/components/tasks/TasksContainer.tsx",
            lineNumber: 15,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/tasks/TasksContainer.tsx",
          lineNumber: 14,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TasksDataContainer_default, {}, void 0, false, {
            fileName: "app/components/tasks/TasksContainer.tsx",
            lineNumber: 18,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/tasks/TasksContainer.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/tasks/TasksContainer.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/tasks/TasksContainer.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
var TasksContainer_default = TasksContainer;

// app/routes/__app/tasks/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function TasksPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppHeader_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "common:tasksTabLabel"
        }, void 0, false, {
          fileName: "app/routes/__app/tasks/index.tsx",
          lineNumber: 11,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/tasks/index.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppContainer_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TasksContainer_default, {}, void 0, false, {
            fileName: "app/routes/__app/tasks/index.tsx",
            lineNumber: 15,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/__app/tasks/index.tsx",
          lineNumber: 14,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/tasks/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/tasks/index.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var tasks_default = TasksPage;
export {
  tasks_default as default
};
//# sourceMappingURL=/build/routes/__app/tasks/index-W7GMCCCS.js.map
