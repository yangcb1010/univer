import {
  UniverActionRecorderPlugin
} from "./chunk-RVEKKODX.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-DLWI56SP.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-RFLJO4IE.js";
import {
  UniverUniscriptPlugin
} from "./chunk-NVXABILR.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-WVC6WBLK.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5BN4CCJY.js";
import "./chunk-6JJM2UD7.js";
import {
  UniverDebuggerPlugin
} from "./chunk-I3YB5V55.js";
import "./chunk-JZBPKP3E.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Y76YBDLM.js";
import "./chunk-DZDHQCWK.js";
import "./chunk-UGHNYCJA.js";
import "./chunk-NBYWMM5G.js";
import "./chunk-A4OKGG65.js";
import "./chunk-2FP4PWZY.js";
import "./chunk-HHCR4AUM.js";
import "./chunk-F3CYZMWX.js";
import "./chunk-EJLOQJZC.js";
import "./chunk-OXJQSR2P.js";
import "./chunk-3WKLWIVD.js";
import "./chunk-XUATXRUF.js";
import "./chunk-YOA52FQR.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-no-worker/very-lazy.ts
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
