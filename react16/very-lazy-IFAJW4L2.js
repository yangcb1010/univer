import {
  UniverActionRecorderPlugin
} from "./chunk-QD6GIGGP.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-YXIX55LG.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HWQJWGAH.js";
import {
  UniverUniscriptPlugin
} from "./chunk-OTHBYDHN.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-LJEDCRDC.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-AOD2SKOM.js";
import "./chunk-2XYIL5ZN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-DRMAUECH.js";
import "./chunk-4YZJRRPZ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-V7DYJCUH.js";
import "./chunk-3USS3TT6.js";
import "./chunk-UGHNYCJA.js";
import "./chunk-SMSEC6NP.js";
import "./chunk-HHSXRJC7.js";
import "./chunk-KKHZULZ4.js";
import "./chunk-AFC424IW.js";
import "./chunk-PIRV7XNL.js";
import "./chunk-QMYYFIJ3.js";
import "./chunk-3UYALPPF.js";
import "./chunk-7MK3IXAB.js";
import "./chunk-JM47KJF2.js";
import "./chunk-YOA52FQR.js";
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
