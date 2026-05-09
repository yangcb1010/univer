import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-6D57K5Q3.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-SNHLUINB.js";
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
} from "./chunk-MG3GRSJ7.js";
import "./chunk-IF47P4RI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RC5223LR.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AS7HI23U.js";
import "./chunk-RSLRXLII.js";
import "./chunk-SI4UQ4IL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-YUJXETDF.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-QAXFZPET.js";
import "./chunk-WAQV5A4L.js";
import "./chunk-O6TLOIXB.js";
import "./chunk-BZUZQPEL.js";
import "./chunk-I3IHURGK.js";
import "./chunk-UV2TQX2B.js";
import "./chunk-JIJMXB67.js";
import "./chunk-EXOTAHLR.js";
import "./chunk-NOOMCMF4.js";
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
