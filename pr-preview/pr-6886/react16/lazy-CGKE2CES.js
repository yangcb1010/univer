import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-CELOMWUC.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-256LUE7M.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-HZCPNH42.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-PEDFMSHE.js";
import "./chunk-MVHNL5A3.js";
import "./chunk-RVUJVQ3I.js";
import "./chunk-ZMHHRUVN.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-TCXEZO7N.js";
import "./chunk-N2W3FWU4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RRBNCCWZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FU6R26VS.js";
import "./chunk-242G2QIH.js";
import "./chunk-XM4UQ27M.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-POYPF2LN.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-R652UDZS.js";
import "./chunk-S7WKRYSA.js";
import "./chunk-MC2FHISR.js";
import "./chunk-OF2TEFXQ.js";
import "./chunk-VHHZVIXR.js";
import "./chunk-WV67HTJS.js";
import "./chunk-NKGAD7WX.js";
import "./chunk-YGDGDS4O.js";
import "./chunk-P5ZL4OWA.js";
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
