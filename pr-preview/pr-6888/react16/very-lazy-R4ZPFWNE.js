import {
  UniverActionRecorderPlugin
} from "./chunk-KI5JTZTA.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-GYQI34JC.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-BDAV7TLY.js";
import {
  UniverUniscriptPlugin
} from "./chunk-WJ5QBUPI.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-POSP4PMD.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-BBUPUNWF.js";
import "./chunk-B76IQSUU.js";
import {
  UniverDebuggerPlugin
} from "./chunk-6TMA7BDN.js";
import "./chunk-NSMF37F3.js";
import {
  UniverWatermarkPlugin
} from "./chunk-FOHNRH4S.js";
import "./chunk-6OBNGC3H.js";
import "./chunk-CU3NBIN6.js";
import "./chunk-VRYNODIW.js";
import "./chunk-CW4VBT3J.js";
import "./chunk-KFWN6YQO.js";
import "./chunk-4EY4ILYO.js";
import "./chunk-CXBSAXJ4.js";
import "./chunk-FJRNDYKC.js";
import "./chunk-BTICXYSD.js";
import "./chunk-WNHBX3IS.js";
import "./chunk-UYLV7ACK.js";
import "./chunk-VNIHR3SD.js";
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
