import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-HT36S67M.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-EFR4J7C6.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-EGKCHT5P.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-KONRP5GE.js";
import "./chunk-Y2QJIYBZ.js";
import "./chunk-QNGZ57JQ.js";
import "./chunk-IH2RTU4Q.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-O7JPNAD6.js";
import "./chunk-XG7RNNO7.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7JQNKAUX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TG5U3XXA.js";
import "./chunk-TEVUXPNQ.js";
import "./chunk-S7DVJKAI.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-VJMV727J.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-5CRPY2SA.js";
import "./chunk-HY7BXP3A.js";
import "./chunk-3CHNGZWF.js";
import "./chunk-TE5DB5RE.js";
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
