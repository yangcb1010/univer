import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-2PV23NLG.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-V3QPEPE4.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-A5PDTFS3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-2DDRXRBL.js";
import "./chunk-CN3JJMJ2.js";
import "./chunk-F5B4M6HE.js";
import "./chunk-LKATHMSP.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-ZFH77GPG.js";
import "./chunk-GMAAFI5H.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CBRFK5VY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-7BYOH7TF.js";
import "./chunk-XHZ6MIIR.js";
import "./chunk-4ZQGBAYD.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-RT553DMR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-3AX5ENAM.js";
import "./chunk-NN6SMGRM.js";
import "./chunk-FQKNDD33.js";
import "./chunk-R4IQRFDR.js";
import "./chunk-FAIPPTBO.js";
import "./chunk-N3XEYTT4.js";
import "./chunk-BJXWUOHT.js";
import "./chunk-IBWPTMH2.js";
import "./chunk-TRDRCMG7.js";
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
