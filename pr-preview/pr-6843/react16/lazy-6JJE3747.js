import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-262R5AJ4.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-AERONR2E.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-DZOWUQFE.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-BLG26QIX.js";
import "./chunk-OBLMIW5B.js";
import "./chunk-6HJ2AFEJ.js";
import "./chunk-OKTSBE2K.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-DOK2GI6X.js";
import "./chunk-OI5KGQIG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IDFK5Z4O.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TE7QS66D.js";
import "./chunk-I6FFS7ZB.js";
import "./chunk-42IRN2CZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-JXNLYX72.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LZI3HTPB.js";
import "./chunk-FFADTKHL.js";
import "./chunk-C6NLJKXB.js";
import "./chunk-R3UDUQTB.js";
import "./chunk-INX3GRSY.js";
import "./chunk-JTSNRN7X.js";
import "./chunk-Y45V7LNH.js";
import "./chunk-XJLBVLLP.js";
import "./chunk-FYOWE623.js";
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
