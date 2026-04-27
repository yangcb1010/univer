import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IDFK5Z4O.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TE7QS66D.js";
import "./chunk-I6FFS7ZB.js";
import "./chunk-42IRN2CZ.js";
import "./chunk-LZI3HTPB.js";
import "./chunk-FFADTKHL.js";
import "./chunk-C6NLJKXB.js";
import "./chunk-R3UDUQTB.js";
import "./chunk-INX3GRSY.js";
import "./chunk-JTSNRN7X.js";
import "./chunk-Y45V7LNH.js";
import "./chunk-XJLBVLLP.js";
import "./chunk-FYOWE623.js";
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
