import {
  UniverActionRecorderPlugin
} from "./chunk-VP5PFMET.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-44KKQDV4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GYKPIYBP.js";
import {
  UniverUniscriptPlugin
} from "./chunk-Z7HWSTRN.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-RG3VGT6M.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-KH7EGMVQ.js";
import "./chunk-B6JDTQD7.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VZEFXMBO.js";
import "./chunk-OKKGWMWQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3EMFUM5V.js";
import "./chunk-XNKBG5DX.js";
import "./chunk-WI7HCLLA.js";
import "./chunk-G2FA2Z36.js";
import "./chunk-SQLSWBZN.js";
import "./chunk-OA65XLEJ.js";
import "./chunk-6OYJOVUF.js";
import "./chunk-QFPLTI4E.js";
import "./chunk-VHHZVIXR.js";
import "./chunk-ED73PE7E.js";
import "./chunk-LLIKHLT2.js";
import "./chunk-YGDGDS4O.js";
import "./chunk-P5ZL4OWA.js";
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
