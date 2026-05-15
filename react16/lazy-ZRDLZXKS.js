import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZUO6UKM2.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-75CVO6LK.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-Q2SSDMG6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-LYQGV3ML.js";
import "./chunk-PNQCNENW.js";
import "./chunk-E3KUG4MU.js";
import "./chunk-2XYIL5ZN.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-5LZXVWXX.js";
import "./chunk-PRFTVV4D.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VPDFLD3G.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DNJYI2KH.js";
import "./chunk-FJOYAEZY.js";
import "./chunk-SMSEC6NP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-M5YQRAC7.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-E2NDH4FI.js";
import "./chunk-CWZ674DL.js";
import "./chunk-CZ2URNVR.js";
import "./chunk-MZFSBPQN.js";
import "./chunk-UP3YF7BF.js";
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
