import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-2WJJ24O6.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-SDADWFQP.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-VJMAJCYQ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-WMHCHQUE.js";
import "./chunk-BQHAR3GJ.js";
import "./chunk-V7DXUUMO.js";
import "./chunk-WVJSP2RR.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-MYR52X6M.js";
import "./chunk-RY4YTQP6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HB662IA3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5EZOPPT3.js";
import "./chunk-D5MRGCJ6.js";
import "./chunk-XN5ABOGT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-SJQXUSHE.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RFDHFM6F.js";
import "./chunk-RVFJB6AP.js";
import "./chunk-G5GCIAYS.js";
import "./chunk-RDBBDCVG.js";
import "./chunk-IDV6GF64.js";
import "./chunk-RP2SHOSA.js";
import "./chunk-DPY2QIJ2.js";
import "./chunk-GMF67DFQ.js";
import "./chunk-RWQ2JXPY.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-no-worker/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsDrawingUIPlugin],
    [UniverDocsMentionUIPlugin],
    [UniverSheetsNumfmtUIPlugin],
    [UniverThreadCommentUIPlugin],
    [UniverSheetsThreadCommentUIPlugin],
    [UniverSheetsNoteUIPlugin],
    [UniverSheetsTableUIPlugin],
    [UniverSheetsFormulaUIPlugin],
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
