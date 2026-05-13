import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-7TINYRU4.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-RBSJZ6AA.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-YNMNIH65.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-P746TH5L.js";
import "./chunk-ZHUYHE4D.js";
import "./chunk-TRXLY3UV.js";
import "./chunk-GEZ2M7XV.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-YVVBHCTS.js";
import "./chunk-RMKF3AE6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-DRDR4GGH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WAVXU3UZ.js";
import "./chunk-KBKC2YH5.js";
import "./chunk-KFCKGHUO.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-LGW7LLO2.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-SL4ZQTUN.js";
import "./chunk-IGB46TPM.js";
import "./chunk-FALTVLUW.js";
import "./chunk-3KNESXG4.js";
import "./chunk-CX5JV5R2.js";
import "./chunk-72ST4B3W.js";
import "./chunk-FSQ7SQIC.js";
import "./chunk-SLJDJHOK.js";
import "./chunk-CMNRLXBH.js";
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
