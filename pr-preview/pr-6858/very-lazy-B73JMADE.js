import {
  UniverActionRecorderPlugin
} from "./chunk-I4XJ3KFB.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-QNQFAQ7H.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-B6KBUE2L.js";
import {
  UniverUniscriptPlugin
} from "./chunk-RSW2AR4I.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-WCLHK6UQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-7YSQRUR6.js";
import "./chunk-SK52SX2N.js";
import {
  UniverDebuggerPlugin
} from "./chunk-KCP7FBDT.js";
import "./chunk-YK2VSIVS.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2Q5Y46ZC.js";
import "./chunk-UCIFE6PS.js";
import "./chunk-HM2RZA4P.js";
import "./chunk-QHE3GYBX.js";
import "./chunk-V4AG2SQQ.js";
import "./chunk-S5L6MNLS.js";
import "./chunk-JWCRJMB3.js";
import "./chunk-CBUGNSM5.js";
import "./chunk-QRN3BRSB.js";
import "./chunk-F6LNSSAA.js";
import "./chunk-AUPUCYDH.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
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
