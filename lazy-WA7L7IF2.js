import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-BWP2Q3AW.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-MRWC7G2D.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-EBGJXEYD.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-YUZPXEQO.js";
import "./chunk-VQSOZTHZ.js";
import "./chunk-OSFGOVOC.js";
import "./chunk-6IIG3KQP.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-ZNKZ3IIH.js";
import "./chunk-IBVO3ATC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3VVENZC3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-JIUN32YR.js";
import "./chunk-E7WVX3IP.js";
import "./chunk-I2DDQDZG.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3LJZXYI4.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-EHIPW2M2.js";
import "./chunk-GLHKEG7P.js";
import "./chunk-EKWBLXTL.js";
import "./chunk-HHST3MT6.js";
import "./chunk-JAWGSHYY.js";
import "./chunk-XA52HE7O.js";
import "./chunk-4MIBPMPZ.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
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
