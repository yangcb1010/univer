import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-DX2AK7C3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HI7DC74B.js";
import "./chunk-242G2QIH.js";
import "./chunk-XM4UQ27M.js";
import "./chunk-QOWMZI4A.js";
import "./chunk-S7WKRYSA.js";
import "./chunk-AUZAJ5RW.js";
import "./chunk-OF2TEFXQ.js";
import "./chunk-VHHZVIXR.js";
import "./chunk-WV67HTJS.js";
import "./chunk-NKGAD7WX.js";
import "./chunk-YGDGDS4O.js";
import "./chunk-P5ZL4OWA.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-multi-units/lazy.ts
function getLazyPlugins() {
  return [
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
