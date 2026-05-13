import {
  UniverActionRecorderPlugin
} from "./chunk-PAH3FBOW.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-3YU4R6GB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GGOAVEI2.js";
import {
  UniverUniscriptPlugin
} from "./chunk-2HRSAD5W.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-KFGDECOD.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-E52G453S.js";
import "./chunk-G5G3ZO5D.js";
import {
  UniverDebuggerPlugin
} from "./chunk-Y2U6UQZK.js";
import "./chunk-PD75BEB4.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JHD3FGHB.js";
import "./chunk-EW2CCZN5.js";
import "./chunk-YXIXHTFJ.js";
import "./chunk-JRESOMST.js";
import "./chunk-RH3BCZ4O.js";
import "./chunk-EBE6LVPX.js";
import "./chunk-ZKSZ47T2.js";
import "./chunk-F2HGVFCP.js";
import "./chunk-AIXTWDSI.js";
import "./chunk-6A4WLOER.js";
import "./chunk-ZDGYYCUM.js";
import "./chunk-GMF67DFQ.js";
import "./chunk-RWQ2JXPY.js";
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
