import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KCYDGG62.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QNLP3DRD.js";
import "./chunk-HO74T5W7.js";
import "./chunk-JRESOMST.js";
import "./chunk-M5YOIHIT.js";
import "./chunk-NC3IXRB2.js";
import "./chunk-EXE76VE6.js";
import "./chunk-UJK27KZE.js";
import "./chunk-P2NB2U3Z.js";
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
