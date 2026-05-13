import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3WTNPSUJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-HWBAVU3Q.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-APOC7U7W.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-MYRZFZSO.js";
import "./chunk-JRSOJLDI.js";
import "./chunk-CIOH2FOV.js";
import "./chunk-AJOCH2U2.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-EKYN2DXS.js";
import "./chunk-VVSCTRT4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2E6KFPZQ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LECPI7RW.js";
import "./chunk-C2FHJPQ4.js";
import "./chunk-HMZGNJFD.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZU6BQNXU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-IQJW6BSM.js";
import "./chunk-X7IBCWQB.js";
import "./chunk-E43ZV75N.js";
import "./chunk-UPJ7ILRO.js";
import "./chunk-NW5FEDQC.js";
import "./chunk-2VUGZL27.js";
import "./chunk-TTL5RBIZ.js";
import "./chunk-VYDPVHQH.js";
import "./chunk-UI3TUZSE.js";
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
