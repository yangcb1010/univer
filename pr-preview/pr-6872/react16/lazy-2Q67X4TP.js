import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EHR6CMSV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TVMXOCVG.js";
import "./chunk-3RGWLCXL.js";
import "./chunk-2QPYOI6W.js";
import "./chunk-Z5AUCOTU.js";
import "./chunk-M3CXRNJT.js";
import "./chunk-F622OH7T.js";
import "./chunk-TPTPVTVV.js";
import "./chunk-KRK3QYNT.js";
import "./chunk-6OMLXICI.js";
import "./chunk-6RW5DR6W.js";
import "./chunk-UVQEXWQY.js";
import "./chunk-4REX3RLT.js";
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
