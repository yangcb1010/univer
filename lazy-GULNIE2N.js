import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-E54VG6OO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FQWPI7IM.js";
import "./chunk-BF5AK4YL.js";
import "./chunk-F7U4SYSY.js";
import "./chunk-W3HYQHQ5.js";
import "./chunk-LRU7UWCG.js";
import "./chunk-HEXTHAUI.js";
import "./chunk-BOUW375P.js";
import "./chunk-VHHZVIXR.js";
import "./chunk-QZETODEN.js";
import "./chunk-2ESHTFIV.js";
import "./chunk-YGDGDS4O.js";
import "./chunk-P5ZL4OWA.js";
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
