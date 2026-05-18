import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-NECB4SNR.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PIVBPXTT.js";
import "./chunk-IYXHFNHG.js";
import "./chunk-RT335TMU.js";
import "./chunk-ARERGVYH.js";
import "./chunk-JFR44EEY.js";
import "./chunk-DVKTUIKB.js";
import "./chunk-5O4ZUYYW.js";
import "./chunk-MA7ZUEVQ.js";
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
