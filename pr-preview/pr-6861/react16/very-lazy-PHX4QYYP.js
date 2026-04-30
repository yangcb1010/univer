import {
  UniverActionRecorderPlugin
} from "./chunk-ZHC75SUJ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-35YVCL3Z.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-S3MQAKUJ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-B53DDNDN.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-4E63JTLH.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-RUNXYU2O.js";
import "./chunk-GR76BMQN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-NXXYUQOU.js";
import "./chunk-QOX233RC.js";
import {
  UniverWatermarkPlugin
} from "./chunk-V64U4DIH.js";
import "./chunk-QMZRDAFL.js";
import "./chunk-24PXC6NA.js";
import "./chunk-WVXU6F37.js";
import "./chunk-RTFXSS6E.js";
import "./chunk-6WEXBHDV.js";
import "./chunk-NCRA5GJC.js";
import "./chunk-SGRTX26L.js";
import "./chunk-KYTVLL37.js";
import "./chunk-BSZ4XQYG.js";
import "./chunk-67PL7CCP.js";
import "./chunk-NBDTXAUW.js";
import "./chunk-CXFMZEOG.js";
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
