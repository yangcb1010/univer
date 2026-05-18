import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-73ZE5L7Q.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-GLM6OVVP.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-E7B27XRA.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-KKE3TO4F.js";
import "./chunk-LKOZU634.js";
import "./chunk-VCLBS6WD.js";
import "./chunk-IIQWSP4P.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-5SYXYTEE.js";
import "./chunk-OTQCICTT.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JLO67VVO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GK33ODVJ.js";
import "./chunk-7AUODTOX.js";
import "./chunk-GO7FRYD3.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-4ZEV7MSL.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RFVIWGRN.js";
import "./chunk-T7MHPOPG.js";
import "./chunk-GYY5TCP7.js";
import "./chunk-I3ZLK6P2.js";
import "./chunk-JLKJAGRC.js";
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
