import {
  UniverActionRecorderPlugin
} from "./chunk-3F3KVPHO.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-X2LPZYGU.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-UVL6BEBT.js";
import {
  UniverUniscriptPlugin
} from "./chunk-IYOJ4KCW.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-YTA5ZHBD.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-J5H72K5K.js";
import "./chunk-YCPRAF2N.js";
import {
  UniverDebuggerPlugin
} from "./chunk-2BQHFMEK.js";
import "./chunk-QQMSRFYE.js";
import {
  UniverWatermarkPlugin
} from "./chunk-6ZVZ3YWK.js";
import "./chunk-A2LAVDMH.js";
import "./chunk-UCUTRLTY.js";
import "./chunk-YSAL2BVW.js";
import "./chunk-KOLVNTLC.js";
import "./chunk-JFSXE3YO.js";
import "./chunk-2A7IGPEQ.js";
import "./chunk-6YZQ6SLC.js";
import "./chunk-ZVZL2JBF.js";
import "./chunk-4FJAWO4Q.js";
import "./chunk-73BQUXTR.js";
import "./chunk-37EEWYY3.js";
import "./chunk-EXJ7DVHQ.js";
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
