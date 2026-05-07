import {
  UniverActionRecorderPlugin
} from "./chunk-YJVFMSEG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-IWKHRNPL.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HVASSLIB.js";
import {
  UniverUniscriptPlugin
} from "./chunk-5T2LESW5.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-IPJFZI7U.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-HAA5PS3O.js";
import "./chunk-QU2NX7R6.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FAZV3CJI.js";
import "./chunk-I5ZAGDNQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4MIURUJC.js";
import "./chunk-GMKCY45I.js";
import "./chunk-J3MDMXBD.js";
import "./chunk-X2R3TNXY.js";
import "./chunk-7GPUKYXC.js";
import "./chunk-LOEZYBXQ.js";
import "./chunk-L4AHYLQQ.js";
import "./chunk-SDTDQF3Y.js";
import "./chunk-6E6ICWSP.js";
import "./chunk-IXDOPMZO.js";
import "./chunk-AXB7KB7I.js";
import "./chunk-57HMVZV2.js";
import "./chunk-J4TGZIZO.js";
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
