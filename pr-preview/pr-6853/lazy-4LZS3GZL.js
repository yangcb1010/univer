import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZWX5XZIJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ZY37KDZB.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-HEAZAWHM.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-UIZXI2BG.js";
import "./chunk-VQSOZTHZ.js";
import "./chunk-OSFGOVOC.js";
import "./chunk-6IIG3KQP.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-PNO5SOYN.js";
import "./chunk-IBVO3ATC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-P74BCBB6.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-W5HGDUNW.js";
import "./chunk-E7WVX3IP.js";
import "./chunk-I2DDQDZG.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-GEWEVRV5.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-AC5EPPCA.js";
import "./chunk-GLHKEG7P.js";
import "./chunk-2GJTULUB.js";
import "./chunk-BD46EAYK.js";
import "./chunk-JAWGSHYY.js";
import "./chunk-XA52HE7O.js";
import "./chunk-4MIBPMPZ.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
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
