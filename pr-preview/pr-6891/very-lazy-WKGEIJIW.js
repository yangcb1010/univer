import {
  UniverActionRecorderPlugin
} from "./chunk-BZXSOBQO.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-VF2ZWAJD.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QE5DO36Q.js";
import {
  UniverUniscriptPlugin
} from "./chunk-SPZFTO4H.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-WTRK5MSO.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-FONUE4RF.js";
import "./chunk-G5G3ZO5D.js";
import {
  UniverDebuggerPlugin
} from "./chunk-HRJBBZMP.js";
import "./chunk-WXB5D4QH.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JHD3FGHB.js";
import "./chunk-KVWOSRDX.js";
import "./chunk-YXIXHTFJ.js";
import "./chunk-JRESOMST.js";
import "./chunk-KQLQLYZS.js";
import "./chunk-ZKMAEMIL.js";
import "./chunk-FWMQQP3G.js";
import "./chunk-UMCB5SLY.js";
import "./chunk-IDV6GF64.js";
import "./chunk-6A4WLOER.js";
import "./chunk-ZDGYYCUM.js";
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
