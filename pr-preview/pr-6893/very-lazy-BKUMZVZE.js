import {
  UniverActionRecorderPlugin
} from "./chunk-NEI5454M.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ZAJEBVW4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-VZR4O6T5.js";
import {
  UniverUniscriptPlugin
} from "./chunk-R7NWEG42.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ITRHRRFX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-I4235N6A.js";
import "./chunk-GEZ2M7XV.js";
import {
  UniverDebuggerPlugin
} from "./chunk-V7BPOOXE.js";
import "./chunk-YVVBHCTS.js";
import {
  UniverWatermarkPlugin
} from "./chunk-6572IZBV.js";
import "./chunk-DRDR4GGH.js";
import "./chunk-LSWVCUZS.js";
import "./chunk-KFCKGHUO.js";
import "./chunk-SL4ZQTUN.js";
import "./chunk-FALTVLUW.js";
import "./chunk-PIUW7RMU.js";
import "./chunk-3KNESXG4.js";
import "./chunk-CX5JV5R2.js";
import "./chunk-72ST4B3W.js";
import "./chunk-FSQ7SQIC.js";
import "./chunk-SLJDJHOK.js";
import "./chunk-CMNRLXBH.js";
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
