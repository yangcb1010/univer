import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-LSJJ623C.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-3YTVRYCF.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-YJTT2QFR.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-CFKODFFE.js";
import "./chunk-TPOFMVUF.js";
import "./chunk-L442RTBI.js";
import "./chunk-RGTL6LLC.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-PMDWHHGR.js";
import "./chunk-IF47P4RI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-W3QAV2ZF.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CII6BBLX.js";
import "./chunk-B6EF3IJI.js";
import "./chunk-M3JXRG6N.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-LH2QP2HK.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-BGH524RC.js";
import "./chunk-WZCBSE36.js";
import "./chunk-H6DLM7ZV.js";
import "./chunk-IE6OHZ2X.js";
import "./chunk-I3IHURGK.js";
import "./chunk-QPDVXCXL.js";
import "./chunk-LGDLPCKF.js";
import "./chunk-EXOTAHLR.js";
import "./chunk-NOOMCMF4.js";
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
