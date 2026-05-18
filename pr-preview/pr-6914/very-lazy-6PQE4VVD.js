import {
  UniverActionRecorderPlugin
} from "./chunk-ISXSDEXW.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-EEQEDLHS.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OUN5NRQP.js";
import {
  UniverUniscriptPlugin
} from "./chunk-YE4N3DI4.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-LMXUJZQN.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QYF2NJCA.js";
import "./chunk-IIQWSP4P.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VMQHQSHV.js";
import "./chunk-MKO2GXA5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-332B56TT.js";
import "./chunk-KSORVYO3.js";
import "./chunk-H55CPTS3.js";
import "./chunk-GO7FRYD3.js";
import "./chunk-ZBU5QSKH.js";
import "./chunk-KAP7Q4CH.js";
import "./chunk-HUYAOSDX.js";
import "./chunk-ZUWPJYEO.js";
import "./chunk-EMLH7ASB.js";
import "./chunk-YFEMWLGB.js";
import "./chunk-L7B5QXL4.js";
import "./chunk-44TTLR7G.js";
import "./chunk-Z7OGNYY7.js";
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
