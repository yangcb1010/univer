import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NJ3B4H2X.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-U4ZC2N37.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-APMJYRHR.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-6FAI3ZUV.js";
import "./chunk-FC7TCCQC.js";
import "./chunk-W4AYLEYY.js";
import "./chunk-TUPVONGU.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-WM2ZYZWC.js";
import "./chunk-3DDPXMNY.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RVGD4HSA.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UM4BESBU.js";
import "./chunk-TR2TXSWQ.js";
import "./chunk-YYUXXD4A.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-6SUWREEL.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-WU7XJCN3.js";
import "./chunk-BKHOKDVP.js";
import "./chunk-BWGM6XXQ.js";
import "./chunk-AV4ZZJ7C.js";
import "./chunk-A5GCOT5W.js";
import "./chunk-DVLMYM77.js";
import "./chunk-FUIDLLAE.js";
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
