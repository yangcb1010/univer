import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZMLRDRYP.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-J55MTE3X.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-6IZONC66.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-OOC62YBH.js";
import "./chunk-YPRZU3BE.js";
import "./chunk-KJE6MEKE.js";
import "./chunk-Q62AQNGG.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-BJUSJXBZ.js";
import "./chunk-VVSCTRT4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CL4CLXVZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BPCMN662.js";
import "./chunk-MUVUCFBQ.js";
import "./chunk-PFWEAUCW.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-QIRSTOZ3.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-CHO5W3CL.js";
import "./chunk-BHT5SUUS.js";
import "./chunk-M6WBLNCB.js";
import "./chunk-UYZS4ADO.js";
import "./chunk-NW5FEDQC.js";
import "./chunk-DERQKCKR.js";
import "./chunk-KLWHM6DN.js";
import "./chunk-VYDPVHQH.js";
import "./chunk-UI3TUZSE.js";
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
