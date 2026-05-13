import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NXL5SR4K.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NTS3TXBD.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-PGZZOHTU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-FDBYBGPH.js";
import "./chunk-IUCMA6RT.js";
import "./chunk-VMRO7BYV.js";
import "./chunk-NICEX7ZB.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-YBNO45PU.js";
import "./chunk-KJYWNVSC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AV2POTBP.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-USEIG4N7.js";
import "./chunk-6GEUZ2CS.js";
import "./chunk-FOHSUMMW.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-LCB2BOUJ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-N2LBYG4S.js";
import "./chunk-ZKGMLCS7.js";
import "./chunk-P5CAWDJT.js";
import "./chunk-VNOC7AMC.js";
import "./chunk-IJZE5DIO.js";
import "./chunk-FMTVACJ2.js";
import "./chunk-RDHF2HN2.js";
import "./chunk-444DEGR4.js";
import "./chunk-VLJOLTXW.js";
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
