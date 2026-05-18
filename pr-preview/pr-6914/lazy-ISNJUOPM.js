import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-OW2EJIAR.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-2NPB56AE.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-3KHILLGP.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-55DV6LMV.js";
import "./chunk-LKOZU634.js";
import "./chunk-VCLBS6WD.js";
import "./chunk-IIQWSP4P.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-MKO2GXA5.js";
import "./chunk-OTQCICTT.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KSORVYO3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-R4TXQFFE.js";
import "./chunk-7AUODTOX.js";
import "./chunk-GO7FRYD3.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-VJBJHKZF.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ZBU5QSKH.js";
import "./chunk-T7MHPOPG.js";
import "./chunk-KAP7Q4CH.js";
import "./chunk-ZUWPJYEO.js";
import "./chunk-EMLH7ASB.js";
import "./chunk-YFEMWLGB.js";
import "./chunk-L7B5QXL4.js";
import "./chunk-44TTLR7G.js";
import "./chunk-Z7OGNYY7.js";
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
