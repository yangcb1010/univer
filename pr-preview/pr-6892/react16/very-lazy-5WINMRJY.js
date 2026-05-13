import {
  UniverActionRecorderPlugin
} from "./chunk-LRYO5HQV.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-L3E74N4O.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-H5ITKBCZ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-RYEWJ3IM.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-YPQK2JUK.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-7DJ4OUYP.js";
import "./chunk-ZMHHRUVN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-HMTIQZWN.js";
import "./chunk-GQTC5M3M.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3EMFUM5V.js";
import "./chunk-6EEE64F6.js";
import "./chunk-WI7HCLLA.js";
import "./chunk-XM4UQ27M.js";
import "./chunk-K5SOAD2S.js";
import "./chunk-D2FAYIZL.js";
import "./chunk-KLEVKCIY.js";
import "./chunk-FLE6IZZL.js";
import "./chunk-BOGMBEDJ.js";
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
