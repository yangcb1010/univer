import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-J2S3TLWL.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-B7MZWN4P.js";
import "./chunk-I6FFS7ZB.js";
import "./chunk-42IRN2CZ.js";
import "./chunk-FRIGM6KH.js";
import "./chunk-FFADTKHL.js";
import "./chunk-YXSR4BS6.js";
import "./chunk-734DEVRI.js";
import "./chunk-I2OYHXFH.js";
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
