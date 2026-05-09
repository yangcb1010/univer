import {
  UniverActionRecorderPlugin
} from "./chunk-A3KNXIZV.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-XZ67ZMA2.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-YLBQWPWJ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-5JJ5UQHS.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-EXLZC2ES.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-LVTIFFYB.js";
import "./chunk-T772YCZD.js";
import {
  UniverDebuggerPlugin
} from "./chunk-MT76ZJGW.js";
import "./chunk-BO3UWVNO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3EMFUM5V.js";
import "./chunk-E54VG6OO.js";
import "./chunk-WI7HCLLA.js";
import "./chunk-F7U4SYSY.js";
import "./chunk-W3HYQHQ5.js";
import "./chunk-HEXTHAUI.js";
import "./chunk-AVMUOXKX.js";
import "./chunk-BOUW375P.js";
import "./chunk-VHHZVIXR.js";
import "./chunk-QZETODEN.js";
import "./chunk-2ESHTFIV.js";
import "./chunk-YGDGDS4O.js";
import "./chunk-P5ZL4OWA.js";
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
