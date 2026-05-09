import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-RPRYICWY.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-LSMT2NOZ.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-7LYHRHBU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-BBMDW7EW.js";
import "./chunk-QLVS6ACF.js";
import "./chunk-QBLEJUG6.js";
import "./chunk-353ZO7XQ.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-COZTJXVD.js";
import "./chunk-IF47P4RI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-GJPKFWSY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TXWZGTPV.js";
import "./chunk-AQAPNWZ6.js";
import "./chunk-CA6BASOU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-XNPJUJWS.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-VF4TLUZK.js";
import "./chunk-GMGJRV6Z.js";
import "./chunk-YFC4PQJQ.js";
import "./chunk-OYA3IJPL.js";
import "./chunk-HA5W7BKS.js";
import "./chunk-VINBWQOG.js";
import "./chunk-FDT4RW2X.js";
import "./chunk-ZTS2ZX44.js";
import "./chunk-NOOMCMF4.js";
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
