import {
  Footer_default
} from "/build/_shared/chunk-M6BS7J37.js";
import {
  TextField_default
} from "/build/_shared/chunk-T4OLHNMO.js";
import "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import "/build/_shared/chunk-GZQSVEA4.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import "/build/_shared/chunk-MEFOEGYP.js";
import {
  ArrowRightIcon_default,
  FireIcon_default,
  UserGroupIcon_default
} from "/build/_shared/chunk-7KHFEMFW.js";
import {
  Hero_default
} from "/build/_shared/chunk-6UP67C3W.js";
import {
  Heading_default
} from "/build/_shared/chunk-54TVJDMF.js";
import {
  SubHeading_default
} from "/build/_shared/chunk-M572OUI5.js";
import {
  Container_default
} from "/build/_shared/chunk-7W5X7L6G.js";
import {
  Button_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import "/build/_shared/chunk-DN742LHR.js";
import {
  configuration_default
} from "/build/_shared/chunk-WULCHIKQ.js";
import "/build/_shared/chunk-WIOFJORR.js";
import "/build/_shared/chunk-A4KF3ELC.js";
import "/build/_shared/chunk-BCUDKLQK.js";
import "/build/_shared/chunk-EGSMFI33.js";
import "/build/_shared/chunk-TUM7Q574.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/newsletter/ConvertkitSignupForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ConvertkitSignupForm = ({ formId, children }) => {
  const action = `https://app.convertkit.com/forms/${formId}/subscriptions`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    action,
    method: "POST",
    target: "_blank",
    className: `space-around flex w-full flex-1 justify-center`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
          type: "email",
          className: "formkit-input w-50 !rounded-tr-none !rounded-br-none border-r-transparent py-1 text-sm hover:border-r-transparent sm:w-60 md:w-80 md:text-base",
          name: "email_address",
          "aria-label": "Your email address",
          placeholder: "your@email.com",
          required: true
        }, void 0, false, {
          fileName: "app/components/newsletter/ConvertkitSignupForm.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/newsletter/ConvertkitSignupForm.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        className: "flex justify-center rounded-tl-none rounded-bl-none text-sm md:text-base",
        children
      }, void 0, false, {
        fileName: "app/components/newsletter/ConvertkitSignupForm.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/newsletter/ConvertkitSignupForm.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};
var ConvertkitSignupForm_default = ConvertkitSignupForm;

// app/routes/__site/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "my-8 mb-8 flex flex-col items-center md:mt-24 md:flex-row mx-auto flex-1 justify-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex w-full flex-1 flex-col items-center space-y-12",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeroTitle, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      children: "Tell your visitors why"
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 31,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "text-primary-500",
                      children: "your SaaS is awesome"
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 32,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 30,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-center text-gray-700 dark:text-gray-400",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
                      children: "Here you can write a short description of your SaaS"
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 36,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
                      children: "This subheading is usually laid out on multiple lines"
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 40,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
                      children: "Just like this."
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 44,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col items-center space-y-2.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      className: "GradientButton rounded-full p-1",
                      size: "large",
                      href: "/auth/sign-up",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "flex items-center space-x-2 text-xl",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            children: "Get Started for free"
                          }, void 0, false, {
                            fileName: "app/routes/__site/index.tsx",
                            lineNumber: 54,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRightIcon_default, {
                            className: "h-6"
                          }, void 0, false, {
                            fileName: "app/routes/__site/index.tsx",
                            lineNumber: 55,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 48,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "text-xs",
                      children: "No credit-card required"
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 59,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 47,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/__site/index.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__site/index.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex justify-center py-12",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              decoding: "async",
              className: "rounded-2xl",
              width: 800,
              height: 600,
              src: `/assets/images/browser.webp`,
              alt: `App`
            }, void 0, false, {
              fileName: "app/routes/__site/index.tsx",
              lineNumber: 65,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__site/index.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col items-center justify-center space-y-24 py-12",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex max-w-3xl flex-col items-center space-y-4 text-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col items-center space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FireIcon_default, {
                        className: "h-6 text-primary-500"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 90,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
                      className: "text-primary-500",
                      children: "Features"
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 94,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 89,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero_default, {
                  children: "The best tool in the space"
                }, void 0, false, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 97,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                }, void 0, false, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 99,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/__site/index.tsx",
              lineNumber: 84,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "grid gap-12 lg:grid-cols-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 107,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 119,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 116,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 126,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 125,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 137,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 134,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 146,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 143,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 155,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 152,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/__site/index.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/__site/index.tsx",
              lineNumber: 105,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/__site/index.tsx",
          lineNumber: 79,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 165,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col items-center justify-center space-y-24 py-12",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex max-w-3xl flex-col items-center space-y-4 text-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col items-center space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserGroupIcon_default, {
                        className: "h-6 text-primary-500"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 180,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 179,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
                      className: "text-primary-500",
                      children: "Testimonials"
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 183,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 178,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero_default, {
                  children: "Trusted by indie-hackers all over the world"
                }, void 0, false, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 186,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                }, void 0, false, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 188,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/__site/index.tsx",
              lineNumber: 173,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "grid gap-12 lg:grid-cols-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 197,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 199,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 196,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 206,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 208,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 205,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 215,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 217,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 214,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 224,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 226,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 223,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 233,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 235,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 232,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 242,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, false, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 244,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 241,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/__site/index.tsx",
                lineNumber: 195,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/__site/index.tsx",
              lineNumber: 194,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/__site/index.tsx",
          lineNumber: 168,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 167,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-12",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col justify-between rounded-lg md:flex-row space-y-2 bg-primary-50 px-8 py-12 dark:bg-primary-600/10 md:space-y-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-col justify-between space-y-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                    type: 2,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-gray-800 dark:text-white",
                      children: "The application you were waiting for."
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 265,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 264,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                    type: 2,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-primary-500",
                      children: "Sign up for free, today."
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 271,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 270,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/__site/index.tsx",
                lineNumber: 263,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-col justify-end space-y-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      className: "w-full md:w-auto",
                      size: "large",
                      href: "/auth/sign-up",
                      children: "Get Started for free"
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 277,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 276,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "text-xs",
                      children: "No credit-card required"
                    }, void 0, false, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 287,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 286,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/__site/index.tsx",
                lineNumber: 275,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/__site/index.tsx",
            lineNumber: 256,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/__site/index.tsx",
          lineNumber: 255,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 254,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NewsletterSignup, {}, void 0, false, {
          fileName: "app/routes/__site/index.tsx",
          lineNumber: 295,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 294,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 298,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 300,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__site/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function NewsletterSignup() {
  const formId = configuration_default.site.convertKitFormId;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col items-center justify-center space-y-4 py-16 text-sm text-gray-500 dark:text-gray-400 lg:py-24",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Let's stay in touch."
      }, void 0, false, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 314,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Subscribe to Makerkit's Newsletter to receive updates."
      }, void 0, false, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 316,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConvertkitSignupForm_default, {
        formId,
        children: "Subscribe"
      }, void 0, false, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 318,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "text-center text-xs",
        children: "No spam. Ever."
      }, void 0, false, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 320,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__site/index.tsx",
    lineNumber: 309,
    columnNumber: 5
  }, this);
}
function Divider() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {
    className: "border border-gray-50 dark:border-black-400"
  }, void 0, false, {
    fileName: "app/routes/__site/index.tsx",
    lineNumber: 326,
    columnNumber: 10
  }, this);
}
function HeroTitle({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
    className: "text-center text-4xl text-black-500 dark:text-white flex flex-col space-y-2 font-extrabold md:text-6xl xl:text-7xl 2xl:text-8xl",
    children
  }, void 0, false, {
    fileName: "app/routes/__site/index.tsx",
    lineNumber: 331,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/__site/index-A5HYENI6.js.map
