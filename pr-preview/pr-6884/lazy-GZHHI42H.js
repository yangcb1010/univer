import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-STXTENNX.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-3FJ2ME36.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-RQU7XZS7.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-2RS6FEN6.js";
import "./chunk-AXBO6AEA.js";
import "./chunk-GKWOVEIG.js";
import "./chunk-KTDRNA6X.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-M6VU3GHI.js";
import "./chunk-RY4YTQP6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JSWIXMFJ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-J437UXW5.js";
import "./chunk-Q7NCP53U.js";
import "./chunk-XR5A5UPZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-RJTLQXUX.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-KNS5ELTL.js";
import "./chunk-GCWVDUPD.js";
import "./chunk-HZMRCCEN.js";
import "./chunk-YFFUFD22.js";
import "./chunk-W7VRB3OS.js";
import "./chunk-3U7B7NL2.js";
import "./chunk-3RGSYIGA.js";
import "./chunk-RM5FPLUF.js";
import "./chunk-RWQ2JXPY.js";
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
