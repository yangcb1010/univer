import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-BL7OSIWG.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-65PSGGOT.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-CLHLZ7NF.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-B453S6XU.js";
import "./chunk-NEN74P3Y.js";
import "./chunk-V6TWRKOP.js";
import "./chunk-25UJZOIH.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-BF7QJ5KU.js";
import "./chunk-3DDPXMNY.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-G2N6C7D2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-7TR2TYWM.js";
import "./chunk-T53UPKKR.js";
import "./chunk-2Q7JJJBF.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3MD6IRZT.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ZSYEZJXC.js";
import "./chunk-WQKGRTJE.js";
import "./chunk-N7OSGVOD.js";
import "./chunk-5NVS5DMF.js";
import "./chunk-A5GCOT5W.js";
import "./chunk-37QQQIK3.js";
import "./chunk-2VINOMSF.js";
import "./chunk-JFCEKVKG.js";
import "./chunk-N3JNH6S5.js";
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
