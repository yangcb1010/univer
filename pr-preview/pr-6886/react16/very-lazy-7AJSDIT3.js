import {
  UniverActionRecorderPlugin
} from "./chunk-2LK434YE.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-E5S7BJ6H.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-BKAVZQLE.js";
import {
  UniverUniscriptPlugin
} from "./chunk-BSNUAQGW.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-KPT6NK22.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-AWGZXQ22.js";
import "./chunk-ZMHHRUVN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-A3WCIQHW.js";
import "./chunk-TCXEZO7N.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3EMFUM5V.js";
import "./chunk-RRBNCCWZ.js";
import "./chunk-WI7HCLLA.js";
import "./chunk-XM4UQ27M.js";
import "./chunk-R652UDZS.js";
import "./chunk-MC2FHISR.js";
import "./chunk-FHNFPAZX.js";
import "./chunk-OF2TEFXQ.js";
import "./chunk-VHHZVIXR.js";
import "./chunk-WV67HTJS.js";
import "./chunk-NKGAD7WX.js";
import "./chunk-YGDGDS4O.js";
import "./chunk-P5ZL4OWA.js";
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
