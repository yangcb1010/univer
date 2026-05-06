import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-XEMUTKWA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-5DJOEDYI.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-GEEEZ5RA.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ASX3722N.js";
import "./chunk-Y2QJIYBZ.js";
import "./chunk-QNGZ57JQ.js";
import "./chunk-IH2RTU4Q.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-ABJVMSOL.js";
import "./chunk-XG7RNNO7.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4OHNCY6D.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5TKZGHRK.js";
import "./chunk-TEVUXPNQ.js";
import "./chunk-S7DVJKAI.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-6T6ZWTOI.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HNKXORV5.js";
import "./chunk-HY7BXP3A.js";
import "./chunk-64CEVPS6.js";
import "./chunk-IYSWF4T7.js";
import "./chunk-J6USL5WQ.js";
import "./chunk-GZD4ZKOT.js";
import "./chunk-KNX6MG2E.js";
import "./chunk-SO7FMCUD.js";
import "./chunk-DXN2UBCQ.js";
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
