import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-HZESIEFP.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-FNJUQRNQ.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-XJH4XBA6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-47WYF6EK.js";
import "./chunk-WKNNNLPG.js";
import "./chunk-CNCHWW2T.js";
import "./chunk-TIJD3X2X.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-ZNZF4CMK.js";
import "./chunk-KP75HSHA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EHR6CMSV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TVMXOCVG.js";
import "./chunk-3RGWLCXL.js";
import "./chunk-2QPYOI6W.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-LZ3NN7NK.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-Z5AUCOTU.js";
import "./chunk-M3CXRNJT.js";
import "./chunk-F622OH7T.js";
import "./chunk-TPTPVTVV.js";
import "./chunk-KRK3QYNT.js";
import "./chunk-6OMLXICI.js";
import "./chunk-6RW5DR6W.js";
import "./chunk-UVQEXWQY.js";
import "./chunk-4REX3RLT.js";
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
