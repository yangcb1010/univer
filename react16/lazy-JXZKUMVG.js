import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PI65WKB7.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UPUYSUFU.js";
import "./chunk-FJOYAEZY.js";
import "./chunk-SMSEC6NP.js";
import "./chunk-I3KEH2JS.js";
import "./chunk-CWZ674DL.js";
import "./chunk-YTGTDE7T.js";
import "./chunk-PUATED7W.js";
import "./chunk-UP3YF7BF.js";
import "./chunk-B4JD6PHF.js";
import "./chunk-7MK3IXAB.js";
import "./chunk-JM47KJF2.js";
import "./chunk-YOA52FQR.js";
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
