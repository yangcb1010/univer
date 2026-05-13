import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-DRDR4GGH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WAVXU3UZ.js";
import "./chunk-KBKC2YH5.js";
import "./chunk-KFCKGHUO.js";
import "./chunk-SL4ZQTUN.js";
import "./chunk-IGB46TPM.js";
import "./chunk-FALTVLUW.js";
import "./chunk-3KNESXG4.js";
import "./chunk-CX5JV5R2.js";
import "./chunk-72ST4B3W.js";
import "./chunk-FSQ7SQIC.js";
import "./chunk-SLJDJHOK.js";
import "./chunk-CMNRLXBH.js";
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
