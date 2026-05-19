import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-7EZPMLWU.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-I7MIWEXM.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-VHOETFV3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-JAO7RAZ6.js";
import "./chunk-Z5XHI7PO.js";
import "./chunk-TSZJ5FWG.js";
import "./chunk-S5JUJZLG.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-W6HWXYUN.js";
import "./chunk-PYSVIXUP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JJQOXDSP.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AW7IATNK.js";
import "./chunk-6O7KDPHO.js";
import "./chunk-Y4ZPO4RD.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-DOWUQJD2.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-6KYN35SP.js";
import "./chunk-BBXUS2VP.js";
import "./chunk-PAQGC7OS.js";
import "./chunk-QXWAJ3Q5.js";
import "./chunk-CB54O66K.js";
import "./chunk-VTJS4LWT.js";
import "./chunk-WRUL4T3Z.js";
import "./chunk-KRIGFYA2.js";
import "./chunk-QXSHBFLW.js";
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
