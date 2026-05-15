import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-QA63QGGQ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-YSD2XYFP.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-HIDBREBQ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-HE77NDG2.js";
import "./chunk-PNQCNENW.js";
import "./chunk-E3KUG4MU.js";
import "./chunk-2XYIL5ZN.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-4YZJRRPZ.js";
import "./chunk-PRFTVV4D.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3USS3TT6.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-O53OIPEH.js";
import "./chunk-FJOYAEZY.js";
import "./chunk-SMSEC6NP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-CSEDNGAQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HHSXRJC7.js";
import "./chunk-CWZ674DL.js";
import "./chunk-KKHZULZ4.js";
import "./chunk-PIRV7XNL.js";
import "./chunk-QMYYFIJ3.js";
import "./chunk-3UYALPPF.js";
import "./chunk-7MK3IXAB.js";
import "./chunk-JM47KJF2.js";
import "./chunk-YOA52FQR.js";
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
