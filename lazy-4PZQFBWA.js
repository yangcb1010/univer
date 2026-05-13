import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-2NR6NR4K.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-FPMFZP7J.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-TETOLBCW.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-MWGG7JSO.js";
import "./chunk-HB7JH7KW.js";
import "./chunk-YKQAOBN7.js";
import "./chunk-N23FGPN4.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-AWNKVF6S.js";
import "./chunk-CLAY5XOR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-H63KVAT5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ORHDWKRE.js";
import "./chunk-5JU7YYCJ.js";
import "./chunk-236MDHDL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-C2BIT5JT.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-MWQVPJR7.js";
import "./chunk-YTSTTUB4.js";
import "./chunk-XN7KJFH7.js";
import "./chunk-B3IMXL4W.js";
import "./chunk-QIR3WKC6.js";
import "./chunk-XNQGS7SY.js";
import "./chunk-4K3ZX35V.js";
import "./chunk-VV5VC3U2.js";
import "./chunk-Q4SWDG4I.js";
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
