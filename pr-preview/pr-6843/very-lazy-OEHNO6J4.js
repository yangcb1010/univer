import {
  UniverActionRecorderPlugin
} from "./chunk-HHDKYE2C.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-4PRFK4MO.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2SM3VQOT.js";
import {
  UniverUniscriptPlugin
} from "./chunk-KEDW5H3D.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VGSCEBJM.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-HSPUFGID.js";
import "./chunk-OKTSBE2K.js";
import {
  UniverDebuggerPlugin
} from "./chunk-NT2ATWUA.js";
import "./chunk-DOK2GI6X.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Q2HZ6DDG.js";
import "./chunk-IDFK5Z4O.js";
import "./chunk-DQJ4ICFF.js";
import "./chunk-42IRN2CZ.js";
import "./chunk-LZI3HTPB.js";
import "./chunk-C6NLJKXB.js";
import "./chunk-KC4BFHJG.js";
import "./chunk-R3UDUQTB.js";
import "./chunk-INX3GRSY.js";
import "./chunk-JTSNRN7X.js";
import "./chunk-Y45V7LNH.js";
import "./chunk-XJLBVLLP.js";
import "./chunk-FYOWE623.js";
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
