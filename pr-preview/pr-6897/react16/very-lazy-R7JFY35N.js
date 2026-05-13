import {
  UniverActionRecorderPlugin
} from "./chunk-M7R7KG2A.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-XNUZFGE5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HX77LBS3.js";
import {
  UniverUniscriptPlugin
} from "./chunk-BCXL6L3L.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-UIGULOKX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-SCEI3IVD.js";
import "./chunk-D2CJMPHC.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FR3QYQOZ.js";
import "./chunk-DNSF7WW7.js";
import {
  UniverWatermarkPlugin
} from "./chunk-CVWWJZW4.js";
import "./chunk-KV5QV2NZ.js";
import "./chunk-DHKQWFLW.js";
import "./chunk-2RTPDV7E.js";
import "./chunk-5OT5NKYY.js";
import "./chunk-KL56RLJ5.js";
import "./chunk-D5KMOR5X.js";
import "./chunk-YD3D25OD.js";
import "./chunk-F37C7ISW.js";
import "./chunk-X3DBF32Z.js";
import "./chunk-2TFWPM3K.js";
import "./chunk-3Z2RTFRS.js";
import "./chunk-VPXOLCB5.js";
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
