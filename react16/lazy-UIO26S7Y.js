import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-XHL64XRN.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-CCFSO5NA.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-NA6VTIFD.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-H7KFVZOA.js";
import "./chunk-RMCFYLOM.js";
import "./chunk-MWYDP7BT.js";
import "./chunk-VF53PEOI.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-5QLH6JSG.js";
import "./chunk-2XEKRIDD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5TK3W4BY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GMAJGSRY.js";
import "./chunk-O3OW67VG.js";
import "./chunk-AOWGN3QE.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-H6AVO5K2.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ZSBQDS3J.js";
import "./chunk-57GUWSCZ.js";
import "./chunk-IMLRFAXE.js";
import "./chunk-ZDQQONQ3.js";
import "./chunk-DB2U2UP3.js";
import "./chunk-P2XSJLFS.js";
import "./chunk-VX3DYZ3K.js";
import "./chunk-TTDHTKZ5.js";
import "./chunk-LHKDD2S2.js";
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
