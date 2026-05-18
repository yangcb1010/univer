import {
  UniverActionRecorderPlugin
} from "./chunk-PDDUBFO5.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-MA5EQL3S.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-INK7GXIV.js";
import {
  UniverUniscriptPlugin
} from "./chunk-33HWIOLX.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-XRJKE25F.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-AYDJWOEE.js";
import "./chunk-AQXZIRNB.js";
import {
  UniverDebuggerPlugin
} from "./chunk-L4DRTO5Y.js";
import "./chunk-NTTIBKPO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-TXJUECTM.js";
import "./chunk-NECB4SNR.js";
import "./chunk-NR63F572.js";
import "./chunk-RT335TMU.js";
import "./chunk-ARERGVYH.js";
import "./chunk-DVKTUIKB.js";
import "./chunk-KPCFJNPI.js";
import "./chunk-5O4ZUYYW.js";
import "./chunk-MA7ZUEVQ.js";
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
