import {
  UniverActionRecorderPlugin
} from "./chunk-6CR63MXS.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-FSCAFJMH.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-E7YNGO4M.js";
import {
  UniverUniscriptPlugin
} from "./chunk-XJSVQ3AY.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-MQZT75JM.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VJECC6CV.js";
import "./chunk-O2BBG2I7.js";
import {
  UniverDebuggerPlugin
} from "./chunk-X4JTLDCA.js";
import "./chunk-LDDTBCQB.js";
import {
  UniverWatermarkPlugin
} from "./chunk-GILR4LDZ.js";
import "./chunk-62GPCE34.js";
import "./chunk-TKUJBTTA.js";
import "./chunk-5GUKOR6W.js";
import "./chunk-XQG6Z5GD.js";
import "./chunk-MWHU56QN.js";
import "./chunk-DE4ZMGCV.js";
import "./chunk-RWXV5GHC.js";
import "./chunk-T6W45QDB.js";
import "./chunk-SQCOW24S.js";
import "./chunk-IQTDWG6Y.js";
import "./chunk-IJCL4KTE.js";
import "./chunk-6IO55AU2.js";
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
