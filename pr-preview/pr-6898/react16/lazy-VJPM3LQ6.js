import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-FUQHDANF.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-WSG6MJCS.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-V2B7YFF6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ZJD2C3B5.js";
import "./chunk-TDMJGBRZ.js";
import "./chunk-HBIM6PFY.js";
import "./chunk-WDAIHUW5.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-6VSFGY4E.js";
import "./chunk-ZA3H3YDT.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BBNRJX6N.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GAFMQJG3.js";
import "./chunk-T26MI6IW.js";
import "./chunk-V774D4XT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-U6EKQDFP.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-7VCVIQXG.js";
import "./chunk-RDEG3N4S.js";
import "./chunk-GNVMD7CI.js";
import "./chunk-3PEZ4F2D.js";
import "./chunk-FKD4LPN6.js";
import "./chunk-PDWMZYUZ.js";
import "./chunk-RGMGZOGX.js";
import "./chunk-P6BO76EN.js";
import "./chunk-ENG6CS4W.js";
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
