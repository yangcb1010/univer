import {
  UniverActionRecorderPlugin
} from "./chunk-CEBIEK63.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-FKMYWFEU.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-TP7GZL5B.js";
import {
  UniverUniscriptPlugin
} from "./chunk-SFSZ4IIP.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ADP4FKXI.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-E2AW3EWC.js";
import "./chunk-NICEX7ZB.js";
import {
  UniverDebuggerPlugin
} from "./chunk-SMPRFFGX.js";
import "./chunk-YBNO45PU.js";
import {
  UniverWatermarkPlugin
} from "./chunk-PF45UP3T.js";
import "./chunk-AV2POTBP.js";
import "./chunk-EELHRNCD.js";
import "./chunk-FOHSUMMW.js";
import "./chunk-N2LBYG4S.js";
import "./chunk-P5CAWDJT.js";
import "./chunk-JR27ZNVL.js";
import "./chunk-VNOC7AMC.js";
import "./chunk-IJZE5DIO.js";
import "./chunk-FMTVACJ2.js";
import "./chunk-RDHF2HN2.js";
import "./chunk-444DEGR4.js";
import "./chunk-VLJOLTXW.js";
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
