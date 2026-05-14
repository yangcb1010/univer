import {
  UniverActionRecorderPlugin
} from "./chunk-NUPAEUTJ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-IM5QHXWD.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ZNEO4YSK.js";
import {
  UniverUniscriptPlugin
} from "./chunk-OSNQKZ3E.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-6EBF2UK6.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-FUWI22Z7.js";
import "./chunk-IGM7JBJZ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-YTONMN5R.js";
import "./chunk-HRZHJWRD.js";
import {
  UniverWatermarkPlugin
} from "./chunk-V7DYJCUH.js";
import "./chunk-IB5CYOSZ.js";
import "./chunk-UGHNYCJA.js";
import "./chunk-EKBURH3C.js";
import "./chunk-Q5WX3IFA.js";
import "./chunk-YEHIAMOS.js";
import "./chunk-WNOAEM2M.js";
import "./chunk-3VIUE6N6.js";
import "./chunk-ETTFNWWN.js";
import "./chunk-7LCAER27.js";
import "./chunk-5JQ3NLW4.js";
import "./chunk-JM47KJF2.js";
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
