import {
  UniverActionRecorderPlugin
} from "./chunk-EARYWKJI.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-7YSYYVJU.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-Q37OYK6Z.js";
import {
  UniverUniscriptPlugin
} from "./chunk-HLN4TAJH.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-CHPL6ZQD.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-PIN5OE3E.js";
import "./chunk-NPSYPGVH.js";
import {
  UniverDebuggerPlugin
} from "./chunk-SFLX3LYX.js";
import "./chunk-447QUL7Q.js";
import {
  UniverWatermarkPlugin
} from "./chunk-UR6ZLWDF.js";
import "./chunk-A4KDT2DF.js";
import "./chunk-CBRPZDEK.js";
import "./chunk-6ALCPULR.js";
import "./chunk-ECDZPRO5.js";
import "./chunk-AHWOBCNL.js";
import "./chunk-TWKWV5VE.js";
import "./chunk-NVJDRYGB.js";
import "./chunk-A5GCOT5W.js";
import "./chunk-5QEVSQ6I.js";
import "./chunk-FG7SPZBR.js";
import "./chunk-JFCEKVKG.js";
import "./chunk-N3JNH6S5.js";
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
