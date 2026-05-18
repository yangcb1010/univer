import {
  UniverActionRecorderPlugin
} from "./chunk-PDLLJUAW.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-GDT5J7JZ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2F5SLWO4.js";
import {
  UniverUniscriptPlugin
} from "./chunk-ZULXP4TY.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SV6LRQYT.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-V5222RFA.js";
import "./chunk-AQXZIRNB.js";
import {
  UniverDebuggerPlugin
} from "./chunk-XLR62HJL.js";
import "./chunk-UEQ7WYFD.js";
import {
  UniverWatermarkPlugin
} from "./chunk-TXJUECTM.js";
import "./chunk-UM42SVUX.js";
import "./chunk-NR63F572.js";
import "./chunk-RT335TMU.js";
import "./chunk-LFYHRCY2.js";
import "./chunk-6ULZNEZF.js";
import "./chunk-HWVXTS5X.js";
import "./chunk-3QHL3QYA.js";
import "./chunk-7PU4S2WA.js";
import "./chunk-HRTBLBUG.js";
import "./chunk-2PCWRLMN.js";
import "./chunk-IM3D4YJX.js";
import "./chunk-LHKDD2S2.js";
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
