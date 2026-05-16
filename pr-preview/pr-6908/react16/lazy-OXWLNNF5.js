import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-62GPCE34.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6LQIJCCH.js";
import "./chunk-6PIBPNOA.js";
import "./chunk-5GUKOR6W.js";
import "./chunk-XQG6Z5GD.js";
import "./chunk-YUAKOP5O.js";
import "./chunk-MWHU56QN.js";
import "./chunk-RWXV5GHC.js";
import "./chunk-T6W45QDB.js";
import "./chunk-SQCOW24S.js";
import "./chunk-IQTDWG6Y.js";
import "./chunk-IJCL4KTE.js";
import "./chunk-6IO55AU2.js";
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
