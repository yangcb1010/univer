import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AV2POTBP.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-USEIG4N7.js";
import "./chunk-6GEUZ2CS.js";
import "./chunk-FOHSUMMW.js";
import "./chunk-N2LBYG4S.js";
import "./chunk-ZKGMLCS7.js";
import "./chunk-P5CAWDJT.js";
import "./chunk-VNOC7AMC.js";
import "./chunk-IJZE5DIO.js";
import "./chunk-FMTVACJ2.js";
import "./chunk-RDHF2HN2.js";
import "./chunk-444DEGR4.js";
import "./chunk-VLJOLTXW.js";
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
