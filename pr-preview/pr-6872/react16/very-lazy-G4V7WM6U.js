import {
  UniverActionRecorderPlugin
} from "./chunk-VBM4Q4OK.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-T2SLLBYK.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WNKX4ZKY.js";
import {
  UniverUniscriptPlugin
} from "./chunk-YR5HWR2B.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-D2BNXR65.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-SVN2SCPJ.js";
import "./chunk-TUPVONGU.js";
import {
  UniverDebuggerPlugin
} from "./chunk-KNOPZIKZ.js";
import "./chunk-WM2ZYZWC.js";
import {
  UniverWatermarkPlugin
} from "./chunk-UR6ZLWDF.js";
import "./chunk-RVGD4HSA.js";
import "./chunk-CBRPZDEK.js";
import "./chunk-YYUXXD4A.js";
import "./chunk-WU7XJCN3.js";
import "./chunk-BWGM6XXQ.js";
import "./chunk-QLQENQID.js";
import "./chunk-AV4ZZJ7C.js";
import "./chunk-A5GCOT5W.js";
import "./chunk-DVLMYM77.js";
import "./chunk-FUIDLLAE.js";
import "./chunk-JFCEKVKG.js";
import "./chunk-N3JNH6S5.js";
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
