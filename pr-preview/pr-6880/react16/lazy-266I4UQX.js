import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-EXM5NXN5.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-3M2JEAQM.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-KZBF4DVH.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-FNUYE32M.js";
import "./chunk-SHZ7VE7C.js";
import "./chunk-LFBUAI5G.js";
import "./chunk-YBUCIK7V.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-DLQQQ6TL.js";
import "./chunk-N2W3FWU4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VAYLXXAC.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-66ELQCVV.js";
import "./chunk-FEBLDT4A.js";
import "./chunk-3CA3QHPS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-4TCOWZ3H.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-PNMQSI4O.js";
import "./chunk-67LJSJDG.js";
import "./chunk-GSKOC6W7.js";
import "./chunk-BFEIRBRX.js";
import "./chunk-PR3VVPKQ.js";
import "./chunk-WR37YV5F.js";
import "./chunk-XRHCJDOX.js";
import "./chunk-UVACFJVH.js";
import "./chunk-P5ZL4OWA.js";
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
