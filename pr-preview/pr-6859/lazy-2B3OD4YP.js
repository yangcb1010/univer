import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZBIM4APW.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ZZX2JWO6.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-VNVJ3ITY.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-E2AFFJUY.js";
import "./chunk-IXXF4Y6X.js";
import "./chunk-IW7PEXDT.js";
import "./chunk-YCPRAF2N.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-QQMSRFYE.js";
import "./chunk-25NRLALG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-A2LAVDMH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5DLWLRJF.js";
import "./chunk-D3HQI7SO.js";
import "./chunk-YSAL2BVW.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-KD6IXDGH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-KOLVNTLC.js";
import "./chunk-2VBLRDFS.js";
import "./chunk-JFSXE3YO.js";
import "./chunk-6YZQ6SLC.js";
import "./chunk-ZVZL2JBF.js";
import "./chunk-4FJAWO4Q.js";
import "./chunk-73BQUXTR.js";
import "./chunk-37EEWYY3.js";
import "./chunk-EXJ7DVHQ.js";
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
