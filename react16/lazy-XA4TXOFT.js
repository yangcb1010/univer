import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CBRFK5VY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-7BYOH7TF.js";
import "./chunk-XHZ6MIIR.js";
import "./chunk-4ZQGBAYD.js";
import "./chunk-3AX5ENAM.js";
import "./chunk-NN6SMGRM.js";
import "./chunk-FQKNDD33.js";
import "./chunk-R4IQRFDR.js";
import "./chunk-FAIPPTBO.js";
import "./chunk-N3XEYTT4.js";
import "./chunk-BJXWUOHT.js";
import "./chunk-IBWPTMH2.js";
import "./chunk-TRDRCMG7.js";
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
