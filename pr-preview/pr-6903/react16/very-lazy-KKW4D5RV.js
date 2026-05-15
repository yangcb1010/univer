import {
  UniverActionRecorderPlugin
} from "./chunk-DCLXDBJN.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-COBMQMXT.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-U2GGR55J.js";
import {
  UniverUniscriptPlugin
} from "./chunk-MTGTLGEO.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-XX25WOW4.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ZZOY2Y6X.js";
import "./chunk-2XYIL5ZN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-JPIDAFFC.js";
import "./chunk-YZ77Q3M4.js";
import {
  UniverWatermarkPlugin
} from "./chunk-V7DYJCUH.js";
import "./chunk-7EUHSFOV.js";
import "./chunk-UGHNYCJA.js";
import "./chunk-SMSEC6NP.js";
import "./chunk-IGGL66RF.js";
import "./chunk-6CESB5KX.js";
import "./chunk-ZYOJ72LY.js";
import "./chunk-QEBKDW77.js";
import "./chunk-QMYYFIJ3.js";
import "./chunk-B4JD6PHF.js";
import "./chunk-7MK3IXAB.js";
import "./chunk-JM47KJF2.js";
import "./chunk-YOA52FQR.js";
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
