import {
  UniverActionRecorderPlugin
} from "./chunk-WEKMVZJB.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-BPJJPBXF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-RSUYULC6.js";
import {
  UniverUniscriptPlugin
} from "./chunk-ZFRSW42G.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-GHN6UXVV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DGWTD5NE.js";
import "./chunk-WVJSP2RR.js";
import {
  UniverDebuggerPlugin
} from "./chunk-UQMU2MLR.js";
import "./chunk-EYVVALE3.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JHD3FGHB.js";
import "./chunk-LEZELSEX.js";
import "./chunk-YXIXHTFJ.js";
import "./chunk-XN5ABOGT.js";
import "./chunk-HQITK2HR.js";
import "./chunk-RWF47PAU.js";
import "./chunk-GLGEYD64.js";
import "./chunk-RDBBDCVG.js";
import "./chunk-IDV6GF64.js";
import "./chunk-RP2SHOSA.js";
import "./chunk-DPY2QIJ2.js";
import "./chunk-GMF67DFQ.js";
import "./chunk-RWQ2JXPY.js";
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
