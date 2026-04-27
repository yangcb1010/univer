import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-B344YAZZ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-P4C4NDXF.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-BSNF7LSG.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-53NMMY3Y.js";
import "./chunk-OBLMIW5B.js";
import "./chunk-6HJ2AFEJ.js";
import "./chunk-OKTSBE2K.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-MJUUILBL.js";
import "./chunk-OI5KGQIG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4YKIVOXU.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-E36YCX5X.js";
import "./chunk-I6FFS7ZB.js";
import "./chunk-42IRN2CZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ECW42DYK.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-M5B7IEIA.js";
import "./chunk-FFADTKHL.js";
import "./chunk-3BVI6WHV.js";
import "./chunk-YSE4D6PG.js";
import "./chunk-I2OYHXFH.js";
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
