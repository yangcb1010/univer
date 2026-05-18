import {
  UniverActionRecorderPlugin
} from "./chunk-RCGSNIPB.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-PYMBIBPM.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-MLCXXDT7.js";
import {
  UniverUniscriptPlugin
} from "./chunk-ZRIWWCGO.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-K5LYYCDW.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DGY755IT.js";
import "./chunk-IIQWSP4P.js";
import {
  UniverDebuggerPlugin
} from "./chunk-GCFGN4SJ.js";
import "./chunk-5SYXYTEE.js";
import {
  UniverWatermarkPlugin
} from "./chunk-332B56TT.js";
import "./chunk-JLO67VVO.js";
import "./chunk-H55CPTS3.js";
import "./chunk-GO7FRYD3.js";
import "./chunk-RFVIWGRN.js";
import "./chunk-GYY5TCP7.js";
import "./chunk-PI5UIIM3.js";
import "./chunk-I3ZLK6P2.js";
import "./chunk-JLKJAGRC.js";
import "./chunk-YFEMWLGB.js";
import "./chunk-L7B5QXL4.js";
import "./chunk-44TTLR7G.js";
import "./chunk-Z7OGNYY7.js";
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
