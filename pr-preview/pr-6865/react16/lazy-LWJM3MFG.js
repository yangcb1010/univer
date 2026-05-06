import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4OHNCY6D.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5TKZGHRK.js";
import "./chunk-TEVUXPNQ.js";
import "./chunk-S7DVJKAI.js";
import "./chunk-HNKXORV5.js";
import "./chunk-HY7BXP3A.js";
import "./chunk-64CEVPS6.js";
import "./chunk-IYSWF4T7.js";
import "./chunk-J6USL5WQ.js";
import "./chunk-GZD4ZKOT.js";
import "./chunk-KNX6MG2E.js";
import "./chunk-SO7FMCUD.js";
import "./chunk-DXN2UBCQ.js";
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
