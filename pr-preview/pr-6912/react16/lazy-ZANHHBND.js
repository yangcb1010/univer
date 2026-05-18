import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JLO67VVO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GK33ODVJ.js";
import "./chunk-7AUODTOX.js";
import "./chunk-GO7FRYD3.js";
import "./chunk-RFVIWGRN.js";
import "./chunk-T7MHPOPG.js";
import "./chunk-GYY5TCP7.js";
import "./chunk-I3ZLK6P2.js";
import "./chunk-JLKJAGRC.js";
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
