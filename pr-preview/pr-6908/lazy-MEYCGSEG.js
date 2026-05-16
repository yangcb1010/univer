import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-U4RJYGWH.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-64NEA3BC.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-JYYR6DM7.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-WRINIAPV.js";
import "./chunk-LCGGU6JM.js";
import "./chunk-3OKHM2SE.js";
import "./chunk-O2BBG2I7.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-LDDTBCQB.js";
import "./chunk-5B65CLJV.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-62GPCE34.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6LQIJCCH.js";
import "./chunk-6PIBPNOA.js";
import "./chunk-5GUKOR6W.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-RTIBTLTL.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-XQG6Z5GD.js";
import "./chunk-YUAKOP5O.js";
import "./chunk-MWHU56QN.js";
import "./chunk-RWXV5GHC.js";
import "./chunk-T6W45QDB.js";
import "./chunk-SQCOW24S.js";
import "./chunk-IQTDWG6Y.js";
import "./chunk-IJCL4KTE.js";
import "./chunk-6IO55AU2.js";
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
