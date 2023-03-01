import {
  useForm
} from "/build/_shared/chunk-6EEWVN7Z.js";
import {
  AppContainer_default,
  AppHeader_default
} from "/build/_shared/chunk-HY5UMGYM.js";
import "/build/_shared/chunk-W4DXIIZX.js";
import {
  TASKS_COLLECTION
} from "/build/_shared/chunk-MLX6CK2L.js";
import "/build/_shared/chunk-NKQZC65O.js";
import "/build/_shared/chunk-T2CF575W.js";
import "/build/_shared/chunk-AJBLUEBX.js";
import {
  useRequestState
} from "/build/_shared/chunk-NMWHWOJM.js";
import "/build/_shared/chunk-EHUQ3EN7.js";
import "/build/_shared/chunk-CCK66CUU.js";
import {
  n
} from "/build/_shared/chunk-45D3VFMN.js";
import {
  Alert_default
} from "/build/_shared/chunk-75ATWWIY.js";
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
import {
  Ci,
  La,
  Mh,
  ea,
  pl,
  ti
} from "/build/_shared/chunk-7QMTLNFQ.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import {
  Heading_default
} from "/build/_shared/chunk-54TVJDMF.js";
import {
  SubHeading_default
} from "/build/_shared/chunk-M572OUI5.js";
import {
  Button_default,
  If_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import "/build/_shared/chunk-DN742LHR.js";
import {
  Trans,
  init_es,
  useTranslation
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
var import_react2 = __toESM(require_react());
init_es();

// app/lib/tasks/hooks/use-create-task.ts
var import_react = __toESM(require_react());
function useCreateTask() {
  const { state, setLoading, setData, setError } = useRequestState();
  const createTaskCallback = (0, import_react.useCallback)(
    async (title, description) => {
      const firestore = La();
      const tasksCollection = ea(firestore, TASKS_COLLECTION);
      try {
        setLoading(true);
        const data = {
          title,
          description,
          isCompleted: false
        };
        const docRef = await pl(tasksCollection, data);
        setData({
          id: docRef.id,
          title,
          description,
          isCompleted: data.isCompleted
        });
      } catch (error) {
        setError(error.message);
      }
    },
    [setData, setError, setLoading]
  );
  return [createTaskCallback, state];
}
var use_create_task_default = useCreateTask;

// app/components/tasks/CreateTaskForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CreateTaskForm = () => {
  const [createTask, createTaskState] = use_create_task_default();
  const { loading } = createTaskState;
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: ""
    }
  });
  const titleControl = register("title", { required: true });
  const descriptionControl = register("description", { required: true });
  const onError = (0, import_react2.useCallback)(() => {
    n.error("Error: please fill in all the required fields");
  }, []);
  const onSubmit = async (title, description) => {
    console.log(title);
    console.log(description);
    if (!title || !description) {
      return onError();
    }
    await n.promise(createTask(title, description), {
      success: t(`task:createTaskSuccess`),
      error: t(`task:createTaskError`),
      loading: t(`task:createTaskLoading`)
    });
    reset({
      title: "",
      description: ""
    });
  };
  (0, import_react2.useEffect)(() => {
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
                      lineNumber: 62,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      name: titleControl.name,
                      innerRef: titleControl.ref,
                      onChange: titleControl.onChange,
                      onBlur: titleControl.onBlur,
                      required: true,
                      "data-cy": "task-title-input",
                      placeholder: 'Ex. "Do this by night"'
                    }, void 0, false, {
                      fileName: "app/components/tasks/CreateTaskForm.tsx",
                      lineNumber: 63,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/tasks/CreateTaskForm.tsx",
                  lineNumber: 61,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/tasks/CreateTaskForm.tsx",
                lineNumber: 60,
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
                      lineNumber: 76,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      name: descriptionControl.name,
                      innerRef: descriptionControl.ref,
                      onChange: descriptionControl.onChange,
                      onBlur: descriptionControl.onBlur,
                      required: true,
                      "data-cy": "task-description-input",
                      placeholder: "Write a detailed description about your task."
                    }, void 0, false, {
                      fileName: "app/components/tasks/CreateTaskForm.tsx",
                      lineNumber: 77,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/tasks/CreateTaskForm.tsx",
                  lineNumber: 75,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/tasks/CreateTaskForm.tsx",
                lineNumber: 74,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/tasks/CreateTaskForm.tsx",
            lineNumber: 59,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "ml-2 mr-2 flex-initial pb-1",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              className: "w-full md:w-auto",
              "data-cy": "create-task-submit-button",
              loading,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "task:createTaskSubmitLabel"
              }, void 0, false, {
                fileName: "app/components/tasks/CreateTaskForm.tsx",
                lineNumber: 95,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/components/tasks/CreateTaskForm.tsx",
              lineNumber: 90,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/tasks/CreateTaskForm.tsx",
            lineNumber: 89,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/tasks/CreateTaskForm.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/tasks/CreateTaskForm.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/tasks/CreateTaskForm.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
};
var CreateTaskForm_default = CreateTaskForm;

// app/components/tasks/ListTasks.tsx
init_es();

// app/lib/tasks/hooks/use-list-tasks.ts
function useListTasks() {
  const firestore = Ci();
  const taskCollection = ea(
    firestore,
    TASKS_COLLECTION
  );
  const listTaskQuery = Mh(
    taskCollection
  );
  return ti(listTaskQuery, {
    initialData: [],
    idField: "id"
  });
}
var use_list_tasks_default = useListTasks;

// app/components/tasks/DeleteTaskButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var DeleteTaskButton = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, {
        className: "dark h-6"
      }, void 0, false, {
        fileName: "app/components/tasks/DeleteTaskButton.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/tasks/DeleteTaskButton.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/tasks/DeleteTaskButton.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};
var DeleteTaskButton_default = DeleteTaskButton;

// app/components/tasks/EditTaskButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var EditTaskButton = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilSquareIcon_default, {
        className: "dark h-6"
      }, void 0, false, {
        fileName: "app/components/tasks/EditTaskButton.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/tasks/EditTaskButton.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/tasks/EditTaskButton.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};
var EditTaskButton_default = EditTaskButton;

// app/components/tasks/TaskCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TaskCard = ({ task }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "h-30 p6 border-1 m-5 flex flex-col rounded border-inherit text-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-center text-base font-bold",
        children: task.title
      }, void 0, false, {
        fileName: "app/components/tasks/TaskCard.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "text-base",
        children: task.description
      }, void 0, false, {
        fileName: "app/components/tasks/TaskCard.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-around",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditTaskButton_default, {}, void 0, false, {
              fileName: "app/components/tasks/TaskCard.tsx",
              lineNumber: 13,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/tasks/TaskCard.tsx",
            lineNumber: 12,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteTaskButton_default, {}, void 0, false, {
              fileName: "app/components/tasks/TaskCard.tsx",
              lineNumber: 16,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/tasks/TaskCard.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/tasks/TaskCard.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/tasks/TaskCard.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
var TaskCard_default = TaskCard;

// app/components/tasks/ListTasks.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ListTasks = () => {
  const { data: tasks, error, status } = use_list_tasks_default();
  if (status === "loading") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
      children: "Loading ..."
    }, void 0, false, {
      fileName: "app/components/tasks/ListTasks.tsx",
      lineNumber: 13,
      columnNumber: 12
    }, this);
  }
  if (status === "error") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
      type: "error",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "task: loadTasksError"
        }, void 0, false, {
          fileName: "app/components/tasks/ListTasks.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: error?.message
        }, void 0, false, {
          fileName: "app/components/tasks/ListTasks.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/tasks/ListTasks.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `flex flex-col space-y-4 md:space-y-0 lg:mt-8 lg:flex-row lg:space-x-14 xl:space-x-20`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "grid grid-cols-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: status === "success",
        children: tasks.map((task) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TaskCard_default, {
            task
          }, task.id, false, {
            fileName: "app/components/tasks/ListTasks.tsx",
            lineNumber: 32,
            columnNumber: 20
          }, this);
        })
      }, void 0, false, {
        fileName: "app/components/tasks/ListTasks.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/tasks/ListTasks.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/tasks/ListTasks.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};
var ListTasks_default = ListTasks;

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
            type: 2,
            children: "Tasks To Do"
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
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListTasks_default, {}, void 0, false, {
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
//# sourceMappingURL=/build/routes/__app/tasks/index-BTTGXFAZ.js.map
