import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HB662IA3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5EZOPPT3.js";
import "./chunk-D5MRGCJ6.js";
import "./chunk-XN5ABOGT.js";
import "./chunk-RFDHFM6F.js";
import "./chunk-RVFJB6AP.js";
import "./chunk-G5GCIAYS.js";
import "./chunk-RDBBDCVG.js";
import "./chunk-IDV6GF64.js";
import "./chunk-RP2SHOSA.js";
import "./chunk-DPY2QIJ2.js";
import "./chunk-GMF67DFQ.js";
import "./chunk-RWQ2JXPY.js";
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
