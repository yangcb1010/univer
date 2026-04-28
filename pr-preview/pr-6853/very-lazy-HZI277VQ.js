import {
  UniverActionRecorderPlugin
} from "./chunk-GAFH2S4P.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-FPGUY3YX.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-E7IERONI.js";
import {
  UniverUniscriptPlugin
} from "./chunk-E34GIWUD.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ODOYHUJC.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DSQPVJ2A.js";
import "./chunk-6IIG3KQP.js";
import {
  UniverDebuggerPlugin
} from "./chunk-SLKUTJVX.js";
import "./chunk-PNO5SOYN.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2Q5Y46ZC.js";
import "./chunk-P74BCBB6.js";
import "./chunk-HM2RZA4P.js";
import "./chunk-I2DDQDZG.js";
import "./chunk-AC5EPPCA.js";
import "./chunk-2GJTULUB.js";
import "./chunk-7ISF5ZKC.js";
import "./chunk-BD46EAYK.js";
import "./chunk-JAWGSHYY.js";
import "./chunk-XA52HE7O.js";
import "./chunk-4MIBPMPZ.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
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
