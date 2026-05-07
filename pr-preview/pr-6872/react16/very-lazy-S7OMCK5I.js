import {
  UniverActionRecorderPlugin
} from "./chunk-WJ4RVZYX.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-GWWWKZJB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-S4U5N43E.js";
import {
  UniverUniscriptPlugin
} from "./chunk-PPYXZB5D.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-WTLKUTNW.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DBUMGQXG.js";
import "./chunk-TIJD3X2X.js";
import {
  UniverDebuggerPlugin
} from "./chunk-W5VNFEWG.js";
import "./chunk-ZNZF4CMK.js";
import {
  UniverWatermarkPlugin
} from "./chunk-VVID4OSL.js";
import "./chunk-EHR6CMSV.js";
import "./chunk-V3L6JNGK.js";
import "./chunk-2QPYOI6W.js";
import "./chunk-Z5AUCOTU.js";
import "./chunk-F622OH7T.js";
import "./chunk-CA2COOAB.js";
import "./chunk-TPTPVTVV.js";
import "./chunk-KRK3QYNT.js";
import "./chunk-6OMLXICI.js";
import "./chunk-6RW5DR6W.js";
import "./chunk-UVQEXWQY.js";
import "./chunk-4REX3RLT.js";
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
