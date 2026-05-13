import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-4MV6SK5H.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-JCSMN7B5.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-5BHCJ23U.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-6A6ITSV7.js";
import "./chunk-MVHNL5A3.js";
import "./chunk-RVUJVQ3I.js";
import "./chunk-ZMHHRUVN.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-GQTC5M3M.js";
import "./chunk-N2W3FWU4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6EEE64F6.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GLD5QVCI.js";
import "./chunk-242G2QIH.js";
import "./chunk-XM4UQ27M.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-XARUT6PJ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-K5SOAD2S.js";
import "./chunk-S7WKRYSA.js";
import "./chunk-D2FAYIZL.js";
import "./chunk-FLE6IZZL.js";
import "./chunk-BOGMBEDJ.js";
import "./chunk-WV67HTJS.js";
import "./chunk-NKGAD7WX.js";
import "./chunk-YGDGDS4O.js";
import "./chunk-P5ZL4OWA.js";
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
