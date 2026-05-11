import {
  UniverActionRecorderPlugin
} from "./chunk-ICR56CUA.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-B2SLJAAN.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KYHVSP44.js";
import {
  UniverUniscriptPlugin
} from "./chunk-OMTZKSMZ.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-PAU7575G.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-J4YQT7BM.js";
import "./chunk-KTDRNA6X.js";
import {
  UniverDebuggerPlugin
} from "./chunk-O52VFZGU.js";
import "./chunk-M6VU3GHI.js";
import {
  UniverWatermarkPlugin
} from "./chunk-X6HCLH3H.js";
import "./chunk-JSWIXMFJ.js";
import "./chunk-YXIXHTFJ.js";
import "./chunk-XR5A5UPZ.js";
import "./chunk-KNS5ELTL.js";
import "./chunk-HZMRCCEN.js";
import "./chunk-K32ROAAX.js";
import "./chunk-YFFUFD22.js";
import "./chunk-W7VRB3OS.js";
import "./chunk-3U7B7NL2.js";
import "./chunk-3RGSYIGA.js";
import "./chunk-RM5FPLUF.js";
import "./chunk-RWQ2JXPY.js";
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
