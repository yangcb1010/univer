import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-WL3OO4FG.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-PRAM7X7F.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-7SI55TLN.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-MWTOW3FX.js";
import "./chunk-AZ3S5XH3.js";
import "./chunk-3WIYOFK5.js";
import "./chunk-G5G3ZO5D.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-WXB5D4QH.js";
import "./chunk-RY4YTQP6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KVWOSRDX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BJ6WHYCW.js";
import "./chunk-VKDDI34X.js";
import "./chunk-JRESOMST.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-TKM447XP.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-KQLQLYZS.js";
import "./chunk-NC3IXRB2.js";
import "./chunk-ZKMAEMIL.js";
import "./chunk-UMCB5SLY.js";
import "./chunk-IDV6GF64.js";
import "./chunk-6A4WLOER.js";
import "./chunk-ZDGYYCUM.js";
import "./chunk-GMF67DFQ.js";
import "./chunk-RWQ2JXPY.js";
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
