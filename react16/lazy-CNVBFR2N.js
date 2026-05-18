import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-BKIOZ22H.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-N6I3O3Q4.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-X3KG5YDO.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-TRYJDTXH.js";
import "./chunk-VQZ46PU7.js";
import "./chunk-NASP7EPX.js";
import "./chunk-AQXZIRNB.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-BXCTMGIO.js";
import "./chunk-2XEKRIDD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WWHMDQ7K.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DSMH7Z4Q.js";
import "./chunk-IYXHFNHG.js";
import "./chunk-RT335TMU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-U6C5TOKE.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-DDJRFXLC.js";
import "./chunk-JFR44EEY.js";
import "./chunk-MKNCJBDE.js";
import "./chunk-FTAI5ZF2.js";
import "./chunk-EZ6MMOBL.js";
import "./chunk-HRTBLBUG.js";
import "./chunk-2PCWRLMN.js";
import "./chunk-IM3D4YJX.js";
import "./chunk-LHKDD2S2.js";
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
