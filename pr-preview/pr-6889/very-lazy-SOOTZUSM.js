import {
  UniverActionRecorderPlugin
} from "./chunk-UFAVQZWI.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-TE4PRRM3.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-FYT7NBJW.js";
import {
  UniverUniscriptPlugin
} from "./chunk-23GA2EKK.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-RBMVMPV3.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-47YW56X5.js";
import "./chunk-Q62AQNGG.js";
import {
  UniverDebuggerPlugin
} from "./chunk-GPS5DNAG.js";
import "./chunk-BJUSJXBZ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-MOHJC2BO.js";
import "./chunk-CL4CLXVZ.js";
import "./chunk-BOFO7FDU.js";
import "./chunk-PFWEAUCW.js";
import "./chunk-CHO5W3CL.js";
import "./chunk-M6WBLNCB.js";
import "./chunk-WBQMZFE7.js";
import "./chunk-UYZS4ADO.js";
import "./chunk-NW5FEDQC.js";
import "./chunk-DERQKCKR.js";
import "./chunk-KLWHM6DN.js";
import "./chunk-VYDPVHQH.js";
import "./chunk-UI3TUZSE.js";
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
