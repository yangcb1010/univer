import {
  UniverActionRecorderPlugin
} from "./chunk-DDSNDP7U.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-FZWM2ERZ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-BWOA6ACZ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-WV2BGXUS.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VMOZPWRK.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-UTTHDTGY.js";
import "./chunk-6IIG3KQP.js";
import {
  UniverDebuggerPlugin
} from "./chunk-M3K4YF6D.js";
import "./chunk-ZNKZ3IIH.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2Q5Y46ZC.js";
import "./chunk-3VVENZC3.js";
import "./chunk-HM2RZA4P.js";
import "./chunk-I2DDQDZG.js";
import "./chunk-EHIPW2M2.js";
import "./chunk-EKWBLXTL.js";
import "./chunk-JP4FSFFS.js";
import "./chunk-HHST3MT6.js";
import "./chunk-JAWGSHYY.js";
import "./chunk-XA52HE7O.js";
import "./chunk-4MIBPMPZ.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
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
