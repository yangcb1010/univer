import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-7X5H3XB4.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-7CQQV7UI.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-TGCYEFNK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-KD6DYVT4.js";
import "./chunk-7BTX2CYC.js";
import "./chunk-KHMDLHHA.js";
import "./chunk-T772YCZD.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-BO3UWVNO.js";
import "./chunk-N2W3FWU4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-E54VG6OO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FQWPI7IM.js";
import "./chunk-BF5AK4YL.js";
import "./chunk-F7U4SYSY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-YCKONNY4.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-W3HYQHQ5.js";
import "./chunk-LRU7UWCG.js";
import "./chunk-HEXTHAUI.js";
import "./chunk-BOUW375P.js";
import "./chunk-VHHZVIXR.js";
import "./chunk-QZETODEN.js";
import "./chunk-2ESHTFIV.js";
import "./chunk-YGDGDS4O.js";
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
