import {
  UniverActionRecorderPlugin
} from "./chunk-3UZ2ZMYG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-5EL4IDW7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-DSCFEAML.js";
import {
  UniverUniscriptPlugin
} from "./chunk-LCM6I4CG.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-YDNA7YNW.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-XMMMY277.js";
import "./chunk-3HW7BE5J.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VFI7VXXJ.js";
import "./chunk-VVMLFOJ4.js";
import {
  UniverWatermarkPlugin
} from "./chunk-U2KL2I6U.js";
import "./chunk-B5QPVCOY.js";
import "./chunk-PDNNLBT5.js";
import "./chunk-4YBUNBJN.js";
import "./chunk-ES3E2VAG.js";
import "./chunk-HVXVHE75.js";
import "./chunk-W2437EUA.js";
import "./chunk-5CKYU4JP.js";
import "./chunk-42Z66XU2.js";
import "./chunk-IKGZZVYA.js";
import "./chunk-SKIBKGC2.js";
import "./chunk-JUFDHIGR.js";
import "./chunk-KR7DSM5D.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets/very-lazy.ts
var IS_E2E = false;
function getVeryLazyPlugins() {
  const plugins = [
    [UniverActionRecorderPlugin],
    [UniverSheetsHyperLinkUIPlugin],
    [UniverSheetsSortUIPlugin],
    [UniverSheetsCrosshairHighlightPlugin],
    [UniverSheetsFindReplacePlugin],
    [UniverWatermarkPlugin]
  ];
  if (!IS_E2E) {
    plugins.push([UniverDebuggerPlugin]);
    plugins.push([UniverUniscriptPlugin, {
      getWorkerUrl(_, label) {
        if (label === "json") {
          return "/vs/language/json/json.worker.js";
        }
        if (label === "css" || label === "scss" || label === "less") {
          return "/vs/language/css/css.worker.js";
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return "/vs/language/html/html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
          return "/vs/language/typescript/ts.worker.js";
        }
        return "/vs/editor/editor.worker.js";
      }
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
