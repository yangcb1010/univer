import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7JQNKAUX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TG5U3XXA.js";
import "./chunk-TEVUXPNQ.js";
import "./chunk-S7DVJKAI.js";
import "./chunk-5CRPY2SA.js";
import "./chunk-HY7BXP3A.js";
import "./chunk-3CHNGZWF.js";
import "./chunk-TE5DB5RE.js";
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
