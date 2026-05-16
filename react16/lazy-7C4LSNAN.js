import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-T75JOL66.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WE5MZD43.js";
import "./chunk-7AUODTOX.js";
import "./chunk-GO7FRYD3.js";
import "./chunk-HOEGSIV3.js";
import "./chunk-T7MHPOPG.js";
import "./chunk-KD2LLJI4.js";
import "./chunk-QG2VHHOO.js";
import "./chunk-VIG6WRQC.js";
import "./chunk-YFEMWLGB.js";
import "./chunk-L7B5QXL4.js";
import "./chunk-44TTLR7G.js";
import "./chunk-Z7OGNYY7.js";
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
