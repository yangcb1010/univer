import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-PZL4K7X4.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-F3CL4F3F.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-C4A2D7WY.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DFO7BBES.js";
import "./chunk-E342NECM.js";
import "./chunk-PRYABOAD.js";
import "./chunk-D2CJMPHC.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-DNSF7WW7.js";
import "./chunk-7QZGDQI3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KV5QV2NZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2TQFTPSY.js";
import "./chunk-CEVKTKOI.js";
import "./chunk-2RTPDV7E.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-JD2VTFND.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-5OT5NKYY.js";
import "./chunk-2IOLYRGZ.js";
import "./chunk-KL56RLJ5.js";
import "./chunk-YD3D25OD.js";
import "./chunk-F37C7ISW.js";
import "./chunk-X3DBF32Z.js";
import "./chunk-2TFWPM3K.js";
import "./chunk-3Z2RTFRS.js";
import "./chunk-VPXOLCB5.js";
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
