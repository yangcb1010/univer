import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-XAUBRYFA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-B7NPXJRU.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-BL2I6YTS.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DNKQE2BN.js";
import "./chunk-GQG6WEEK.js";
import "./chunk-M5GB47S6.js";
import "./chunk-QU2NX7R6.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-I5ZAGDNQ.js";
import "./chunk-PTUDFRVW.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-GMKCY45I.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QBRQPZRF.js";
import "./chunk-I5RS4ZVS.js";
import "./chunk-X2R3TNXY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-WCFA5FQO.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-7GPUKYXC.js";
import "./chunk-H6623VF6.js";
import "./chunk-LOEZYBXQ.js";
import "./chunk-SDTDQF3Y.js";
import "./chunk-6E6ICWSP.js";
import "./chunk-IXDOPMZO.js";
import "./chunk-AXB7KB7I.js";
import "./chunk-57HMVZV2.js";
import "./chunk-J4TGZIZO.js";
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
