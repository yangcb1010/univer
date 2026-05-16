import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JTS7CGZX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-B2BCQXK3.js";
import "./chunk-7IHINFI2.js";
import "./chunk-TNXMV7TV.js";
import "./chunk-7XLSM6VE.js";
import "./chunk-M3BEA6E3.js";
import "./chunk-X5RLG7GK.js";
import "./chunk-44USEEJQ.js";
import "./chunk-VIG6WRQC.js";
import "./chunk-5OMTIQ3A.js";
import "./chunk-COSEOYUB.js";
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
