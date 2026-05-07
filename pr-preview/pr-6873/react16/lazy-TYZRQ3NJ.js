import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-VLNOCO5Q.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-TPUBEN32.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-Q337XKQU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-P5DF5PF2.js";
import "./chunk-FRZUGMEG.js";
import "./chunk-WO5DMXLG.js";
import "./chunk-NPSYPGVH.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-447QUL7Q.js";
import "./chunk-3DDPXMNY.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-A4KDT2DF.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-G3H6YJEB.js";
import "./chunk-WOZW3G5L.js";
import "./chunk-6ALCPULR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-GPILTIYO.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ECDZPRO5.js";
import "./chunk-HA7QXDQP.js";
import "./chunk-AHWOBCNL.js";
import "./chunk-NVJDRYGB.js";
import "./chunk-A5GCOT5W.js";
import "./chunk-5QEVSQ6I.js";
import "./chunk-FG7SPZBR.js";
import "./chunk-JFCEKVKG.js";
import "./chunk-N3JNH6S5.js";
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
