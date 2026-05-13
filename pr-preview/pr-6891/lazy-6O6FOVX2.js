import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DD673SCI.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-LRB7LPUW.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-DHDGDNDV.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-GE5L7EBD.js";
import "./chunk-AZ3S5XH3.js";
import "./chunk-3WIYOFK5.js";
import "./chunk-G5G3ZO5D.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-PD75BEB4.js";
import "./chunk-RY4YTQP6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EW2CCZN5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ICL577ZU.js";
import "./chunk-HO74T5W7.js";
import "./chunk-JRESOMST.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-2XUVK6FJ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RH3BCZ4O.js";
import "./chunk-NC3IXRB2.js";
import "./chunk-EBE6LVPX.js";
import "./chunk-F2HGVFCP.js";
import "./chunk-AIXTWDSI.js";
import "./chunk-6A4WLOER.js";
import "./chunk-ZDGYYCUM.js";
import "./chunk-GMF67DFQ.js";
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
