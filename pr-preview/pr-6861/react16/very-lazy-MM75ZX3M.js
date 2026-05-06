import {
  UniverActionRecorderPlugin
} from "./chunk-TXSPN2RW.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-RY3UYUOK.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-JGC72EAR.js";
import {
  UniverUniscriptPlugin
} from "./chunk-CPH7Q4QF.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SQ777Q7C.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5PRC4B6X.js";
import "./chunk-IH2RTU4Q.js";
import {
  UniverDebuggerPlugin
} from "./chunk-XCGSLL53.js";
import "./chunk-O7JPNAD6.js";
import {
  UniverWatermarkPlugin
} from "./chunk-MNMB2BML.js";
import "./chunk-7JQNKAUX.js";
import "./chunk-YIASHCKB.js";
import "./chunk-S7DVJKAI.js";
import "./chunk-5CRPY2SA.js";
import "./chunk-3CHNGZWF.js";
import "./chunk-E2MABSVY.js";
import "./chunk-TE5DB5RE.js";
import "./chunk-J6USL5WQ.js";
import "./chunk-GZD4ZKOT.js";
import "./chunk-KNX6MG2E.js";
import "./chunk-SO7FMCUD.js";
import "./chunk-DXN2UBCQ.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-multi-units/very-lazy.ts
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
