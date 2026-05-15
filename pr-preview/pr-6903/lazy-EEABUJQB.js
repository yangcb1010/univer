import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-R7HNKC3G.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ILKW3HUJ.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-AITIRCY3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-SD5QM4Q5.js";
import "./chunk-PNQCNENW.js";
import "./chunk-E3KUG4MU.js";
import "./chunk-2XYIL5ZN.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-YZ77Q3M4.js";
import "./chunk-PRFTVV4D.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7EUHSFOV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5LTB2PTN.js";
import "./chunk-FJOYAEZY.js";
import "./chunk-SMSEC6NP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-AKHXQWNF.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-IGGL66RF.js";
import "./chunk-CWZ674DL.js";
import "./chunk-6CESB5KX.js";
import "./chunk-QEBKDW77.js";
import "./chunk-QMYYFIJ3.js";
import "./chunk-B4JD6PHF.js";
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
