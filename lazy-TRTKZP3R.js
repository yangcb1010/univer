import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3BB4SYUL.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-LK33ZZDC.js";
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
} from "./chunk-EYVVALE3.js";
import "./chunk-RY4YTQP6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-LEZELSEX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-H62YKRBB.js";
import "./chunk-D5MRGCJ6.js";
import "./chunk-XN5ABOGT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZVR634UC.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HQITK2HR.js";
import "./chunk-RVFJB6AP.js";
import "./chunk-RWF47PAU.js";
import "./chunk-RDBBDCVG.js";
import "./chunk-IDV6GF64.js";
import "./chunk-RP2SHOSA.js";
import "./chunk-DPY2QIJ2.js";
import "./chunk-GMF67DFQ.js";
import "./chunk-RWQ2JXPY.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets/lazy.ts
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
