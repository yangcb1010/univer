import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6EEE64F6.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GLD5QVCI.js";
import "./chunk-242G2QIH.js";
import "./chunk-XM4UQ27M.js";
import "./chunk-K5SOAD2S.js";
import "./chunk-S7WKRYSA.js";
import "./chunk-D2FAYIZL.js";
import "./chunk-FLE6IZZL.js";
import "./chunk-BOGMBEDJ.js";
import "./chunk-WV67HTJS.js";
import "./chunk-NKGAD7WX.js";
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
