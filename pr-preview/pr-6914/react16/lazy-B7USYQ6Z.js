import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KSORVYO3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-R4TXQFFE.js";
import "./chunk-7AUODTOX.js";
import "./chunk-GO7FRYD3.js";
import "./chunk-ZBU5QSKH.js";
import "./chunk-T7MHPOPG.js";
import "./chunk-KAP7Q4CH.js";
import "./chunk-ZUWPJYEO.js";
import "./chunk-EMLH7ASB.js";
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
