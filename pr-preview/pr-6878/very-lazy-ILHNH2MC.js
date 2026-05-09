import {
  UniverActionRecorderPlugin
} from "./chunk-R4W4EO4Z.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-KQOGOVGT.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-CTG6SHZC.js";
import {
  UniverUniscriptPlugin
} from "./chunk-GAHTZ6JV.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-FKYZ3IYA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-UNNYW5AI.js";
import "./chunk-353ZO7XQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-O6APTJ2U.js";
import "./chunk-COZTJXVD.js";
import {
  UniverWatermarkPlugin
} from "./chunk-P6GJDIO6.js";
import "./chunk-GJPKFWSY.js";
import "./chunk-4V6L5VS2.js";
import "./chunk-CA6BASOU.js";
import "./chunk-VF4TLUZK.js";
import "./chunk-YFC4PQJQ.js";
import "./chunk-5Y64OFFG.js";
import "./chunk-OYA3IJPL.js";
import "./chunk-HA5W7BKS.js";
import "./chunk-VINBWQOG.js";
import "./chunk-FDT4RW2X.js";
import "./chunk-ZTS2ZX44.js";
import "./chunk-NOOMCMF4.js";
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
