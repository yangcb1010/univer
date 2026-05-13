import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3PS6LFAK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-44YXN5NL.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-SRHQ4XUJ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-QEC6LHKV.js";
import "./chunk-YUOPS6TD.js";
import "./chunk-ZJCO4EVH.js";
import "./chunk-3HW7BE5J.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-VVMLFOJ4.js";
import "./chunk-GPI5XZSD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-B5QPVCOY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NSTB5D6X.js";
import "./chunk-DW6RMBRM.js";
import "./chunk-4YBUNBJN.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5IW65DMR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ES3E2VAG.js";
import "./chunk-YOHZUGQA.js";
import "./chunk-HVXVHE75.js";
import "./chunk-5CKYU4JP.js";
import "./chunk-42Z66XU2.js";
import "./chunk-IKGZZVYA.js";
import "./chunk-SKIBKGC2.js";
import "./chunk-JUFDHIGR.js";
import "./chunk-KR7DSM5D.js";
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
