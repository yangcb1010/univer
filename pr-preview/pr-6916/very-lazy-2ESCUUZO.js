import {
  UniverActionRecorderPlugin
} from "./chunk-RZ6QV6OK.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-Z3CVGRBT.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-O5VGBZOM.js";
import {
  UniverUniscriptPlugin
} from "./chunk-HNDA3DNA.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-B5RQTPFD.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-XBLHR4G5.js";
import "./chunk-XGL3GNX6.js";
import {
  UniverDebuggerPlugin
} from "./chunk-CIVD66XZ.js";
import "./chunk-SIXJB56I.js";
import {
  UniverWatermarkPlugin
} from "./chunk-332B56TT.js";
import "./chunk-JTS7CGZX.js";
import "./chunk-H55CPTS3.js";
import "./chunk-TNXMV7TV.js";
import "./chunk-7XLSM6VE.js";
import "./chunk-X5RLG7GK.js";
import "./chunk-SRUO6F4E.js";
import "./chunk-44USEEJQ.js";
import "./chunk-VIG6WRQC.js";
import "./chunk-5OMTIQ3A.js";
import "./chunk-COSEOYUB.js";
import "./chunk-44TTLR7G.js";
import "./chunk-Z7OGNYY7.js";
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
