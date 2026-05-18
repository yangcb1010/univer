import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UM42SVUX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-MM7CQ63H.js";
import "./chunk-IYXHFNHG.js";
import "./chunk-RT335TMU.js";
import "./chunk-LFYHRCY2.js";
import "./chunk-JFR44EEY.js";
import "./chunk-6ULZNEZF.js";
import "./chunk-3QHL3QYA.js";
import "./chunk-7PU4S2WA.js";
import "./chunk-HRTBLBUG.js";
import "./chunk-2PCWRLMN.js";
import "./chunk-IM3D4YJX.js";
import "./chunk-LHKDD2S2.js";
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
