import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-CGWISOET.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-H2V7AMNQ.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-TU43QXVY.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DRWJIRGZ.js";
import "./chunk-UNQOGXTO.js";
import "./chunk-5OQH54EZ.js";
import "./chunk-B6JDTQD7.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-OKKGWMWQ.js";
import "./chunk-N2W3FWU4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XNKBG5DX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DS6QOUZK.js";
import "./chunk-PWM7OAWL.js";
import "./chunk-G2FA2Z36.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-TA26F6TL.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-SQLSWBZN.js";
import "./chunk-PG2NW4Z2.js";
import "./chunk-OA65XLEJ.js";
import "./chunk-QFPLTI4E.js";
import "./chunk-VHHZVIXR.js";
import "./chunk-ED73PE7E.js";
import "./chunk-LLIKHLT2.js";
import "./chunk-YGDGDS4O.js";
import "./chunk-P5ZL4OWA.js";
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
