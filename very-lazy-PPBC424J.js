import {
  UniverActionRecorderPlugin
} from "./chunk-2EXUQRSN.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-6OTEFJG4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-4A74X7L5.js";
import {
  UniverUniscriptPlugin
} from "./chunk-FDHGGJ2Q.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-WA2LGT2J.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-L3I6IN42.js";
import "./chunk-2XYIL5ZN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-OFPBMD5Z.js";
import "./chunk-TT4XBKTY.js";
import {
  UniverWatermarkPlugin
} from "./chunk-V7DYJCUH.js";
import "./chunk-FX4C4SP3.js";
import "./chunk-UGHNYCJA.js";
import "./chunk-SMSEC6NP.js";
import "./chunk-NQ7LLGUV.js";
import "./chunk-JBBLHQE2.js";
import "./chunk-VDQXAEEF.js";
import "./chunk-HNS5UNZD.js";
import "./chunk-ETTFNWWN.js";
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
