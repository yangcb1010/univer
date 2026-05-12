import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-X67SNCHL.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-MQDGE6BA.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-KLZFIX4S.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-2YRZRWBT.js";
import "./chunk-O3P5KSTC.js";
import "./chunk-MRZQ53ZG.js";
import "./chunk-B76IQSUU.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-NSMF37F3.js";
import "./chunk-6FBKHSTN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6OBNGC3H.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-E2GLXXMO.js";
import "./chunk-OEBSQW57.js";
import "./chunk-VRYNODIW.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-KACMKKFQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-CW4VBT3J.js";
import "./chunk-LXZQVN76.js";
import "./chunk-KFWN6YQO.js";
import "./chunk-CXBSAXJ4.js";
import "./chunk-FJRNDYKC.js";
import "./chunk-BTICXYSD.js";
import "./chunk-WNHBX3IS.js";
import "./chunk-UYLV7ACK.js";
import "./chunk-VNIHR3SD.js";
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
