import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-F3V7AIHY.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NXWPUZUJ.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-WWOQVISI.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ORZCOY6V.js";
import "./chunk-VQSOZTHZ.js";
import "./chunk-OSFGOVOC.js";
import "./chunk-6IIG3KQP.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-4NBENELG.js";
import "./chunk-IBVO3ATC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ZQ5FORI5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UKWA6V62.js";
import "./chunk-E7WVX3IP.js";
import "./chunk-I2DDQDZG.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-GJ7BX4ET.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-VNXQO4Q5.js";
import "./chunk-GLHKEG7P.js";
import "./chunk-6KFSHIB7.js";
import "./chunk-UO6JWJ6Z.js";
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
