import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3Q3D2YZQ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-YV6A3KQX.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-ZBB3QD23.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-2WMOZFOV.js";
import "./chunk-PNQCNENW.js";
import "./chunk-E3KUG4MU.js";
import "./chunk-2XYIL5ZN.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-TT4XBKTY.js";
import "./chunk-PRFTVV4D.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FX4C4SP3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ONCYMUE4.js";
import "./chunk-FJOYAEZY.js";
import "./chunk-SMSEC6NP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5TAOWFHE.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NQ7LLGUV.js";
import "./chunk-CWZ674DL.js";
import "./chunk-JBBLHQE2.js";
import "./chunk-HNS5UNZD.js";
import "./chunk-ETTFNWWN.js";
import "./chunk-3UYALPPF.js";
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
