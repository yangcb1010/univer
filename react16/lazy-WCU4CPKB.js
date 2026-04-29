import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UCIFE6PS.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SKCJPYCN.js";
import "./chunk-5RETGFZ5.js";
import "./chunk-QHE3GYBX.js";
import "./chunk-V4AG2SQQ.js";
import "./chunk-4L54LCYD.js";
import "./chunk-S5L6MNLS.js";
import "./chunk-CBUGNSM5.js";
import "./chunk-QRN3BRSB.js";
import "./chunk-F6LNSSAA.js";
import "./chunk-AUPUCYDH.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
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
