import {
  UniverActionRecorderPlugin
} from "./chunk-XM3SSN5R.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-77M3LJCT.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-YUYK5GGN.js";
import {
  UniverUniscriptPlugin
} from "./chunk-5OZGQFE6.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VOEAHWKA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-Y43VOL4T.js";
import "./chunk-WDAIHUW5.js";
import {
  UniverDebuggerPlugin
} from "./chunk-AJ2BFJBC.js";
import "./chunk-6VSFGY4E.js";
import {
  UniverWatermarkPlugin
} from "./chunk-QGBPCSOI.js";
import "./chunk-BBNRJX6N.js";
import "./chunk-MB2RKHNY.js";
import "./chunk-V774D4XT.js";
import "./chunk-7VCVIQXG.js";
import "./chunk-GNVMD7CI.js";
import "./chunk-O224HJAT.js";
import "./chunk-3PEZ4F2D.js";
import "./chunk-FKD4LPN6.js";
import "./chunk-PDWMZYUZ.js";
import "./chunk-RGMGZOGX.js";
import "./chunk-P6BO76EN.js";
import "./chunk-ENG6CS4W.js";
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
