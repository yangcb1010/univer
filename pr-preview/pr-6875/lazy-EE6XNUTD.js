import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-G7KX2VPJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-5R43LBOL.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-336LA6VO.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-H524RPFP.js";
import "./chunk-EIUJT4UX.js";
import "./chunk-JRQXENIR.js";
import "./chunk-YA7YISPC.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-COAI2JAY.js";
import "./chunk-IF47P4RI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IKMRCXCQ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-C63TLTJ6.js";
import "./chunk-RSLRXLII.js";
import "./chunk-SI4UQ4IL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-EGUO46M7.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-W5SA63PH.js";
import "./chunk-WAQV5A4L.js";
import "./chunk-TKUGOTGK.js";
import "./chunk-BZUZQPEL.js";
import "./chunk-I3IHURGK.js";
import "./chunk-UV2TQX2B.js";
import "./chunk-JIJMXB67.js";
import "./chunk-EXOTAHLR.js";
import "./chunk-NOOMCMF4.js";
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
