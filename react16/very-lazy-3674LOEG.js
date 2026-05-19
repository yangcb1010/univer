import {
  UniverActionRecorderPlugin
} from "./chunk-XWTWU4OJ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-3KZD7WAT.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-3NE2TD2Y.js";
import {
  UniverUniscriptPlugin
} from "./chunk-QSZSDV2V.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-2PSJOU54.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-CIXFKRQ6.js";
import "./chunk-S5JUJZLG.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ZQILJPRC.js";
import "./chunk-ECTKPHFO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-MEK4W47U.js";
import "./chunk-6XLEMCGQ.js";
import "./chunk-PTH4ZFW6.js";
import "./chunk-Y4ZPO4RD.js";
import "./chunk-6DGDJWER.js";
import "./chunk-YLLTPTWC.js";
import "./chunk-2BPF3MDK.js";
import "./chunk-QXWAJ3Q5.js";
import "./chunk-CB54O66K.js";
import "./chunk-VTJS4LWT.js";
import "./chunk-WRUL4T3Z.js";
import "./chunk-KRIGFYA2.js";
import "./chunk-QXSHBFLW.js";
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
