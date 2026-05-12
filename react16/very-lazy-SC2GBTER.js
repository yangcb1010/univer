import {
  UniverActionRecorderPlugin
} from "./chunk-ENUMDGHH.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-QH63PBVX.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ML3UHSXM.js";
import {
  UniverUniscriptPlugin
} from "./chunk-LPS2JZV2.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-HW6BTIE5.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-X6NQJPZ6.js";
import "./chunk-WVJSP2RR.js";
import {
  UniverDebuggerPlugin
} from "./chunk-UPII4GHW.js";
import "./chunk-MYR52X6M.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JHD3FGHB.js";
import "./chunk-HB662IA3.js";
import "./chunk-YXIXHTFJ.js";
import "./chunk-XN5ABOGT.js";
import "./chunk-RFDHFM6F.js";
import "./chunk-G5GCIAYS.js";
import "./chunk-GLGEYD64.js";
import "./chunk-RDBBDCVG.js";
import "./chunk-IDV6GF64.js";
import "./chunk-RP2SHOSA.js";
import "./chunk-DPY2QIJ2.js";
import "./chunk-GMF67DFQ.js";
import "./chunk-RWQ2JXPY.js";
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
