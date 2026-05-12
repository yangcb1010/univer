import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6OBNGC3H.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-E2GLXXMO.js";
import "./chunk-OEBSQW57.js";
import "./chunk-VRYNODIW.js";
import "./chunk-CW4VBT3J.js";
import "./chunk-LXZQVN76.js";
import "./chunk-KFWN6YQO.js";
import "./chunk-CXBSAXJ4.js";
import "./chunk-FJRNDYKC.js";
import "./chunk-BTICXYSD.js";
import "./chunk-WNHBX3IS.js";
import "./chunk-UYLV7ACK.js";
import "./chunk-VNIHR3SD.js";
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
