import {
  UniverActionRecorderPlugin
} from "./chunk-5LTPCXOX.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-E2HILA2E.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-MA52FVFV.js";
import {
  UniverUniscriptPlugin
} from "./chunk-A7TQDRU4.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-DIXTTS2A.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-3YPS6GX2.js";
import "./chunk-RGTL6LLC.js";
import {
  UniverDebuggerPlugin
} from "./chunk-2JQ7INQE.js";
import "./chunk-PMDWHHGR.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4XWTSGLC.js";
import "./chunk-W3QAV2ZF.js";
import "./chunk-4V6L5VS2.js";
import "./chunk-M3JXRG6N.js";
import "./chunk-BGH524RC.js";
import "./chunk-H6DLM7ZV.js";
import "./chunk-EI2ZPB42.js";
import "./chunk-IE6OHZ2X.js";
import "./chunk-I3IHURGK.js";
import "./chunk-QPDVXCXL.js";
import "./chunk-LGDLPCKF.js";
import "./chunk-EXOTAHLR.js";
import "./chunk-NOOMCMF4.js";
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
