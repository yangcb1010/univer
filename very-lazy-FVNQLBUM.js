import {
  UniverActionRecorderPlugin
} from "./chunk-3ORXA46B.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-7S36PPER.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-3HXSPZPO.js";
import {
  UniverUniscriptPlugin
} from "./chunk-BK7CLBM3.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-EW3IBRCK.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-Y45W3H6S.js";
import "./chunk-AQXZIRNB.js";
import {
  UniverDebuggerPlugin
} from "./chunk-6KQHS3IS.js";
import "./chunk-BXCTMGIO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-TXJUECTM.js";
import "./chunk-WWHMDQ7K.js";
import "./chunk-NR63F572.js";
import "./chunk-RT335TMU.js";
import "./chunk-DDJRFXLC.js";
import "./chunk-MKNCJBDE.js";
import "./chunk-XDCXQCNH.js";
import "./chunk-FTAI5ZF2.js";
import "./chunk-EZ6MMOBL.js";
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
