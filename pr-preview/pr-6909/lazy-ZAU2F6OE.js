import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-I2HBTP4X.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NNEABMIG.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-UPY6WOOU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-YQNWSYQS.js";
import "./chunk-LKOZU634.js";
import "./chunk-VCLBS6WD.js";
import "./chunk-IIQWSP4P.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-U7TUOMQO.js";
import "./chunk-OTQCICTT.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-T75JOL66.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WE5MZD43.js";
import "./chunk-7AUODTOX.js";
import "./chunk-GO7FRYD3.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-TDPSM5ZU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HOEGSIV3.js";
import "./chunk-T7MHPOPG.js";
import "./chunk-KD2LLJI4.js";
import "./chunk-QG2VHHOO.js";
import "./chunk-VIG6WRQC.js";
import "./chunk-YFEMWLGB.js";
import "./chunk-L7B5QXL4.js";
import "./chunk-44TTLR7G.js";
import "./chunk-Z7OGNYY7.js";
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
