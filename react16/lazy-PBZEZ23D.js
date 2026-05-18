import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-7X5HQF2H.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-T6OOYEPO.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-FD5IQ4D5.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DHQAZ6DD.js";
import "./chunk-VQZ46PU7.js";
import "./chunk-NASP7EPX.js";
import "./chunk-AQXZIRNB.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-UEQ7WYFD.js";
import "./chunk-2XEKRIDD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UM42SVUX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-MM7CQ63H.js";
import "./chunk-IYXHFNHG.js";
import "./chunk-RT335TMU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-YQ5FLPK7.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LFYHRCY2.js";
import "./chunk-JFR44EEY.js";
import "./chunk-6ULZNEZF.js";
import "./chunk-3QHL3QYA.js";
import "./chunk-7PU4S2WA.js";
import "./chunk-HRTBLBUG.js";
import "./chunk-2PCWRLMN.js";
import "./chunk-IM3D4YJX.js";
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
