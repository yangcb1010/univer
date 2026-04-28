import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-CTUQ6RDA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-2J7KK3BB.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-Q6MT4S6K.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-SQIFX6GB.js";
import "./chunk-VQSOZTHZ.js";
import "./chunk-OSFGOVOC.js";
import "./chunk-6IIG3KQP.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-A5NTNKI6.js";
import "./chunk-IBVO3ATC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CDSWRAZH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-MUJ5HBMX.js";
import "./chunk-E7WVX3IP.js";
import "./chunk-I2DDQDZG.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-4PFQU5IC.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-MVJBX27N.js";
import "./chunk-GLHKEG7P.js";
import "./chunk-BW3AQV7J.js";
import "./chunk-XHMTLDV6.js";
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
