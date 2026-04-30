import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-GV4SU74E.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-QIBAZUXX.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-K54UVXAZ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-T2JUUAD2.js";
import "./chunk-STKX5PQF.js";
import "./chunk-XDHSOJXK.js";
import "./chunk-GR76BMQN.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-QOX233RC.js";
import "./chunk-HKYU2HPF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-QMZRDAFL.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-XA4ZM5AY.js";
import "./chunk-B7HQ2GIS.js";
import "./chunk-WVXU6F37.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-RBKOF2VN.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RTFXSS6E.js";
import "./chunk-QLO7L6JV.js";
import "./chunk-6WEXBHDV.js";
import "./chunk-SGRTX26L.js";
import "./chunk-KYTVLL37.js";
import "./chunk-BSZ4XQYG.js";
import "./chunk-67PL7CCP.js";
import "./chunk-NBDTXAUW.js";
import "./chunk-CXFMZEOG.js";
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
