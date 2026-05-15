import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-JJET2CHQ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-4AHAZZ3X.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-2L7YWZJV.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-K4RWCHAG.js";
import "./chunk-PNQCNENW.js";
import "./chunk-E3KUG4MU.js";
import "./chunk-2XYIL5ZN.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-TSD5Z5BU.js";
import "./chunk-PRFTVV4D.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HYFHTMCY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UPUYSUFU.js";
import "./chunk-FJOYAEZY.js";
import "./chunk-SMSEC6NP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-AIHHXPD6.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-I3KEH2JS.js";
import "./chunk-CWZ674DL.js";
import "./chunk-YTGTDE7T.js";
import "./chunk-PUATED7W.js";
import "./chunk-UP3YF7BF.js";
import "./chunk-B4JD6PHF.js";
import "./chunk-7MK3IXAB.js";
import "./chunk-JM47KJF2.js";
import "./chunk-YOA52FQR.js";
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
