import {
  UniverActionRecorderPlugin
} from "./chunk-2AZBM5FU.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-VHCG5SGE.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GIELBDXW.js";
import {
  UniverUniscriptPlugin
} from "./chunk-4FPC4BPJ.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-R5RDH2CX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-2WWUDRNW.js";
import "./chunk-G5G3ZO5D.js";
import {
  UniverDebuggerPlugin
} from "./chunk-MBWJZCD6.js";
import "./chunk-IILHBFSC.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JHD3FGHB.js";
import "./chunk-KCYDGG62.js";
import "./chunk-YXIXHTFJ.js";
import "./chunk-JRESOMST.js";
import "./chunk-M5YOIHIT.js";
import "./chunk-EXE76VE6.js";
import "./chunk-ZV5CKVWY.js";
import "./chunk-UJK27KZE.js";
import "./chunk-P2NB2U3Z.js";
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
