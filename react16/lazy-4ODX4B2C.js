import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KVWOSRDX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BJ6WHYCW.js";
import "./chunk-VKDDI34X.js";
import "./chunk-JRESOMST.js";
import "./chunk-KQLQLYZS.js";
import "./chunk-NC3IXRB2.js";
import "./chunk-ZKMAEMIL.js";
import "./chunk-UMCB5SLY.js";
import "./chunk-IDV6GF64.js";
import "./chunk-6A4WLOER.js";
import "./chunk-ZDGYYCUM.js";
import "./chunk-GMF67DFQ.js";
import "./chunk-RWQ2JXPY.js";
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
