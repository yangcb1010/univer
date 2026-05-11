import {
  UniverActionRecorderPlugin
} from "./chunk-HVRUNPWQ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-VFFPQH57.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WM7O4ZPZ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-2LGEZIEC.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-YKVZU662.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-BAZL7NON.js";
import "./chunk-ZMHHRUVN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-UBBNO7J3.js";
import "./chunk-YVB6RYBR.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3EMFUM5V.js";
import "./chunk-DX2AK7C3.js";
import "./chunk-WI7HCLLA.js";
import "./chunk-XM4UQ27M.js";
import "./chunk-QOWMZI4A.js";
import "./chunk-AUZAJ5RW.js";
import "./chunk-FHNFPAZX.js";
import "./chunk-OF2TEFXQ.js";
import "./chunk-VHHZVIXR.js";
import "./chunk-WV67HTJS.js";
import "./chunk-NKGAD7WX.js";
import "./chunk-YGDGDS4O.js";
import "./chunk-P5ZL4OWA.js";
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
