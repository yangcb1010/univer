import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-FPK7S3EZ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-LVRHZIJG.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-NJL3YC24.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-BV46AIVZ.js";
import "./chunk-OBLMIW5B.js";
import "./chunk-6HJ2AFEJ.js";
import "./chunk-OKTSBE2K.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-52O7JA5M.js";
import "./chunk-OI5KGQIG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-J2S3TLWL.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-B7MZWN4P.js";
import "./chunk-I6FFS7ZB.js";
import "./chunk-42IRN2CZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-WSK7P5W6.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-FRIGM6KH.js";
import "./chunk-FFADTKHL.js";
import "./chunk-YXSR4BS6.js";
import "./chunk-734DEVRI.js";
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
