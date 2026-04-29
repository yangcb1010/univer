import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-WIBVIZAV.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ESQQIIEI.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-I6ERTMUV.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DEIXVUOX.js";
import "./chunk-FRSU62BE.js";
import "./chunk-ZT5VZXQD.js";
import "./chunk-SK52SX2N.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-YK2VSIVS.js";
import "./chunk-IBVO3ATC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UCIFE6PS.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SKCJPYCN.js";
import "./chunk-5RETGFZ5.js";
import "./chunk-QHE3GYBX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-B7FPHSKC.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-V4AG2SQQ.js";
import "./chunk-4L54LCYD.js";
import "./chunk-S5L6MNLS.js";
import "./chunk-CBUGNSM5.js";
import "./chunk-QRN3BRSB.js";
import "./chunk-F6LNSSAA.js";
import "./chunk-AUPUCYDH.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
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
