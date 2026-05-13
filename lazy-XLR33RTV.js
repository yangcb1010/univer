import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-Y26277MQ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-JPXKPTHM.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-I5A3POLX.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-5ECAP4W2.js";
import "./chunk-AZ3S5XH3.js";
import "./chunk-3WIYOFK5.js";
import "./chunk-G5G3ZO5D.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-IILHBFSC.js";
import "./chunk-RY4YTQP6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KCYDGG62.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QNLP3DRD.js";
import "./chunk-HO74T5W7.js";
import "./chunk-JRESOMST.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-WB4RXXWW.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-M5YOIHIT.js";
import "./chunk-NC3IXRB2.js";
import "./chunk-EXE76VE6.js";
import "./chunk-UJK27KZE.js";
import "./chunk-P2NB2U3Z.js";
import "./chunk-6A4WLOER.js";
import "./chunk-ZDGYYCUM.js";
import "./chunk-GMF67DFQ.js";
import "./chunk-RWQ2JXPY.js";
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
