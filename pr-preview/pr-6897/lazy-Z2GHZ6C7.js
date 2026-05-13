import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KV5QV2NZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2TQFTPSY.js";
import "./chunk-CEVKTKOI.js";
import "./chunk-2RTPDV7E.js";
import "./chunk-5OT5NKYY.js";
import "./chunk-2IOLYRGZ.js";
import "./chunk-KL56RLJ5.js";
import "./chunk-YD3D25OD.js";
import "./chunk-F37C7ISW.js";
import "./chunk-X3DBF32Z.js";
import "./chunk-2TFWPM3K.js";
import "./chunk-3Z2RTFRS.js";
import "./chunk-VPXOLCB5.js";
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
