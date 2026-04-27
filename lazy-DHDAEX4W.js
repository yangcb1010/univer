import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-D32T25AM.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-B3NXEBP3.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-VBHJTVOU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ZENNV5D6.js";
import "./chunk-OBLMIW5B.js";
import "./chunk-6HJ2AFEJ.js";
import "./chunk-OKTSBE2K.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-CSU3MMEU.js";
import "./chunk-OI5KGQIG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-M2VQTOAF.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KHRGSOBZ.js";
import "./chunk-I6FFS7ZB.js";
import "./chunk-42IRN2CZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-6CTZT5JD.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NQY5DNWP.js";
import "./chunk-FFADTKHL.js";
import "./chunk-B4VVDYEF.js";
import "./chunk-D3DWXGUO.js";
import "./chunk-I2OYHXFH.js";
import "./chunk-JTSNRN7X.js";
import "./chunk-Y45V7LNH.js";
import "./chunk-XJLBVLLP.js";
import "./chunk-FYOWE623.js";
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
