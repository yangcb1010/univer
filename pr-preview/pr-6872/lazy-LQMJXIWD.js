import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-W3QAV2ZF.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CII6BBLX.js";
import "./chunk-B6EF3IJI.js";
import "./chunk-M3JXRG6N.js";
import "./chunk-BGH524RC.js";
import "./chunk-WZCBSE36.js";
import "./chunk-H6DLM7ZV.js";
import "./chunk-IE6OHZ2X.js";
import "./chunk-I3IHURGK.js";
import "./chunk-QPDVXCXL.js";
import "./chunk-LGDLPCKF.js";
import "./chunk-EXOTAHLR.js";
import "./chunk-NOOMCMF4.js";
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
