import {
  UniverActionRecorderPlugin
} from "./chunk-JZYG5FJQ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-FA2UNSZ2.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OCAB35UI.js";
import {
  UniverUniscriptPlugin
} from "./chunk-QBRPL3XV.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-JNJXSFUG.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-LO5MX7G5.js";
import "./chunk-AJOCH2U2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-IMJFYOAT.js";
import "./chunk-EKYN2DXS.js";
import {
  UniverWatermarkPlugin
} from "./chunk-MOHJC2BO.js";
import "./chunk-2E6KFPZQ.js";
import "./chunk-BOFO7FDU.js";
import "./chunk-HMZGNJFD.js";
import "./chunk-IQJW6BSM.js";
import "./chunk-E43ZV75N.js";
import "./chunk-JZRMNKDP.js";
import "./chunk-UPJ7ILRO.js";
import "./chunk-NW5FEDQC.js";
import "./chunk-2VUGZL27.js";
import "./chunk-TTL5RBIZ.js";
import "./chunk-VYDPVHQH.js";
import "./chunk-UI3TUZSE.js";
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
