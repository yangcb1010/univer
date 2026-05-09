import {
  UniverActionRecorderPlugin
} from "./chunk-AF7OW7I7.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-G4VGIYYG.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GKWHGF6X.js";
import {
  UniverUniscriptPlugin
} from "./chunk-FJ4X76AZ.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-IHNK4XEA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-3JRJ55BV.js";
import "./chunk-YA7YISPC.js";
import {
  UniverDebuggerPlugin
} from "./chunk-GSMFTVDC.js";
import "./chunk-MG3GRSJ7.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4XWTSGLC.js";
import "./chunk-RC5223LR.js";
import "./chunk-4V6L5VS2.js";
import "./chunk-SI4UQ4IL.js";
import "./chunk-QAXFZPET.js";
import "./chunk-O6TLOIXB.js";
import "./chunk-AYYW5URE.js";
import "./chunk-BZUZQPEL.js";
import "./chunk-I3IHURGK.js";
import "./chunk-UV2TQX2B.js";
import "./chunk-JIJMXB67.js";
import "./chunk-EXOTAHLR.js";
import "./chunk-NOOMCMF4.js";
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
