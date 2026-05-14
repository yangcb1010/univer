import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-MBD2YVTJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-7PJGDK7O.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-MPIX3XEE.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-NKXS2GIA.js";
import "./chunk-AZ6ARV53.js";
import "./chunk-E65L47EG.js";
import "./chunk-IGM7JBJZ.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-HRZHJWRD.js";
import "./chunk-PRFTVV4D.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IB5CYOSZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZJLHQIFK.js";
import "./chunk-UQDAEX5M.js";
import "./chunk-EKBURH3C.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-OC7G6DZI.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-Q5WX3IFA.js";
import "./chunk-MKTIPRYI.js";
import "./chunk-YEHIAMOS.js";
import "./chunk-3VIUE6N6.js";
import "./chunk-ETTFNWWN.js";
import "./chunk-7LCAER27.js";
import "./chunk-5JQ3NLW4.js";
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
