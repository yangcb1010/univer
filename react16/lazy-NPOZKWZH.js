import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-N7ZPPMY6.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-6UBKUZ4X.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-YHL4AUTI.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ZH7ET3SO.js";
import "./chunk-HV4HBKFT.js";
import "./chunk-NQO22HCN.js";
import "./chunk-YCC4ZPL6.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-CPWAVUZM.js";
import "./chunk-N2W3FWU4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EAFNY4J2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CVOCZX2G.js";
import "./chunk-P42FBGG6.js";
import "./chunk-2J3YGWMK.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5X2NXQHU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RZOWVJML.js";
import "./chunk-HRSUF6ZK.js";
import "./chunk-DE5YNP5X.js";
import "./chunk-J6QBGV2F.js";
import "./chunk-SLUFDUGD.js";
import "./chunk-O2VJFVEB.js";
import "./chunk-7RBMYMDA.js";
import "./chunk-FHFEAUF6.js";
import "./chunk-P5ZL4OWA.js";
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
