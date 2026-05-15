import {
  UniverActionRecorderPlugin
} from "./chunk-ITVLORIC.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-5NTJJEGH.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-EDDGC5J3.js";
import {
  UniverUniscriptPlugin
} from "./chunk-KABLLPHV.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-FXRFQZIZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-KB3VM7CV.js";
import "./chunk-2XYIL5ZN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-TUYX3DFJ.js";
import "./chunk-TSD5Z5BU.js";
import {
  UniverWatermarkPlugin
} from "./chunk-V7DYJCUH.js";
import "./chunk-HYFHTMCY.js";
import "./chunk-UGHNYCJA.js";
import "./chunk-SMSEC6NP.js";
import "./chunk-I3KEH2JS.js";
import "./chunk-YTGTDE7T.js";
import "./chunk-L4AQKQKU.js";
import "./chunk-PUATED7W.js";
import "./chunk-UP3YF7BF.js";
import "./chunk-B4JD6PHF.js";
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
