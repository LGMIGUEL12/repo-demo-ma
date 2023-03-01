import {
  Footer_default
} from "/build/_shared/chunk-M6BS7J37.js";
import "/build/_shared/chunk-GZQSVEA4.js";
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

// app/routes/__site/faq.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var DATA = [
  {
    question: `Here goes a question`,
    answer: `<p>And here is the answer</p>`
  }
];
var meta = () => {
  return {
    title: `FAQ - ${configuration_default.site.siteName}`
  };
};
var Faq = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DATA.map((item) => {
      return {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      };
    })
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(structuredData) }
      }, "ld:json", false, {
        fileName: "app/routes/__site/faq.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero_default, {
            children: "FAQ"
          }, void 0, false, {
            fileName: "app/routes/__site/faq.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
            children: "Frequently Asked Questions"
          }, void 0, false, {
            fileName: "app/routes/__site/faq.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "my-8",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col space-y-6",
              children: DATA.map((item, index) => {
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "FaqItem",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                      type: 2,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "font-semibold dark:text-white",
                        children: item.question
                      }, void 0, false, {
                        fileName: "app/routes/__site/faq.tsx",
                        lineNumber: 57,
                        columnNumber: 21
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/__site/faq.tsx",
                      lineNumber: 56,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex flex-col space-y-4 py-4 text-lg lg:text-xl dark:text-gray-400",
                      dangerouslySetInnerHTML: { __html: item.answer }
                    }, void 0, false, {
                      fileName: "app/routes/__site/faq.tsx",
                      lineNumber: 62,
                      columnNumber: 19
                    }, this)
                  ]
                }, index, true, {
                  fileName: "app/routes/__site/faq.tsx",
                  lineNumber: 55,
                  columnNumber: 17
                }, this);
              })
            }, void 0, false, {
              fileName: "app/routes/__site/faq.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__site/faq.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__site/faq.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/routes/__site/faq.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__site/faq.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
};
var faq_default = Faq;
export {
  faq_default as default,
  meta
};
//# sourceMappingURL=/build/routes/__site/faq-KRTMU63F.js.map
