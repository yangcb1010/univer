import {
  UniverActionRecorderPlugin
} from "./chunk-DYTXYX5H.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-DKCHYKMH.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-VMT3DWYL.js";
import {
  UniverUniscriptPlugin
} from "./chunk-DWLJPKAK.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ABELEB3U.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-7GYNGPQ5.js";
import "./chunk-VF53PEOI.js";
import {
  UniverDebuggerPlugin
} from "./chunk-QI5IA5UW.js";
import "./chunk-5QLH6JSG.js";
import {
  UniverWatermarkPlugin
} from "./chunk-G2OFSE5X.js";
import "./chunk-5TK3W4BY.js";
import "./chunk-NR63F572.js";
import "./chunk-AOWGN3QE.js";
import "./chunk-ZSBQDS3J.js";
import "./chunk-IMLRFAXE.js";
import "./chunk-OMKOVUMP.js";
import "./chunk-ZDQQONQ3.js";
import "./chunk-DB2U2UP3.js";
import "./chunk-P2XSJLFS.js";
import "./chunk-VX3DYZ3K.js";
import "./chunk-TTDHTKZ5.js";
import "./chunk-LHKDD2S2.js";
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
