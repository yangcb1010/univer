import {
  UniverActionRecorderPlugin
} from "./chunk-5WM7RHGV.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-LHTOGRIQ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-BFO3HPJQ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-K2AZHYEL.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-YNJQJXOE.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DH6B3MT7.js";
import "./chunk-25UJZOIH.js";
import {
  UniverDebuggerPlugin
} from "./chunk-33B6QAZ7.js";
import "./chunk-BF7QJ5KU.js";
import {
  UniverWatermarkPlugin
} from "./chunk-UR6ZLWDF.js";
import "./chunk-G2N6C7D2.js";
import "./chunk-CBRPZDEK.js";
import "./chunk-2Q7JJJBF.js";
import "./chunk-ZSYEZJXC.js";
import "./chunk-N7OSGVOD.js";
import "./chunk-IFC2V6AD.js";
import "./chunk-5NVS5DMF.js";
import "./chunk-A5GCOT5W.js";
import "./chunk-37QQQIK3.js";
import "./chunk-2VINOMSF.js";
import "./chunk-JFCEKVKG.js";
import "./chunk-N3JNH6S5.js";
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
