import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-MUIDXITN.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-6FV4GKZH.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-P7GHW2TG.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-44KKEGQG.js";
import "./chunk-VQZ46PU7.js";
import "./chunk-NASP7EPX.js";
import "./chunk-AQXZIRNB.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-NTTIBKPO.js";
import "./chunk-2XEKRIDD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-NECB4SNR.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PIVBPXTT.js";
import "./chunk-IYXHFNHG.js";
import "./chunk-RT335TMU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-7RYMQOJT.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ARERGVYH.js";
import "./chunk-JFR44EEY.js";
import "./chunk-DVKTUIKB.js";
import "./chunk-5O4ZUYYW.js";
import "./chunk-MA7ZUEVQ.js";
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
