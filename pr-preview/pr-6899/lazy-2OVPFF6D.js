import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-SBHUEPN5.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-Y7FWLSRJ.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-BEIJOA4P.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-H753JGCE.js";
import "./chunk-JAIFMNEM.js";
import "./chunk-SAK66H2K.js";
import "./chunk-ELYUA5YV.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-CZGSQSMW.js";
import "./chunk-XVYLB67N.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-L4LYKAT4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-H3XL6FMZ.js";
import "./chunk-FQLDQBQS.js";
import "./chunk-DVUVBIMK.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-I3RUUVDQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-WPLS64ZG.js";
import "./chunk-OM72QNCH.js";
import "./chunk-WVDN2JZP.js";
import "./chunk-TMJZYKRE.js";
import "./chunk-FUCYJVPX.js";
import "./chunk-ZHRNBNEW.js";
import "./chunk-X3TVBUYV.js";
import "./chunk-LG44BJ6D.js";
import "./chunk-PTL6IILL.js";
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
