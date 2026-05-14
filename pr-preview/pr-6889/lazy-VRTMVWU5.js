import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-EEYBYEZX.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-BTNLTH6N.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-OR7QWHEJ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-JPK63DYG.js";
import "./chunk-QENBF4C6.js";
import "./chunk-EWETXVH3.js";
import "./chunk-WOC2QTRG.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-DDYEXIQQ.js";
import "./chunk-VVSCTRT4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PQXF4SX2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-C6AYYVMC.js";
import "./chunk-CHSD4WXW.js";
import "./chunk-I7GRZ3JG.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-7PWYL2DQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-H7FXVBA2.js";
import "./chunk-GJMMKFEC.js";
import "./chunk-Z3H4BZ7W.js";
import "./chunk-FMV6QHNG.js";
import "./chunk-NW5FEDQC.js";
import "./chunk-SUG55IJG.js";
import "./chunk-BAAR53DJ.js";
import "./chunk-VYDPVHQH.js";
import "./chunk-UI3TUZSE.js";
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
