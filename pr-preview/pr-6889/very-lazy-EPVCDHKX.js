import {
  UniverActionRecorderPlugin
} from "./chunk-FOEV5YZB.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-BUSWLIUG.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-AEGPA7XN.js";
import {
  UniverUniscriptPlugin
} from "./chunk-H4ZEY2SR.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-3JE5S5NA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-4NKJMLGL.js";
import "./chunk-WOC2QTRG.js";
import {
  UniverDebuggerPlugin
} from "./chunk-YRMMWBRV.js";
import "./chunk-DDYEXIQQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-MOHJC2BO.js";
import "./chunk-PQXF4SX2.js";
import "./chunk-BOFO7FDU.js";
import "./chunk-I7GRZ3JG.js";
import "./chunk-H7FXVBA2.js";
import "./chunk-Z3H4BZ7W.js";
import "./chunk-7SV4VA7W.js";
import "./chunk-FMV6QHNG.js";
import "./chunk-NW5FEDQC.js";
import "./chunk-SUG55IJG.js";
import "./chunk-BAAR53DJ.js";
import "./chunk-VYDPVHQH.js";
import "./chunk-UI3TUZSE.js";
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
