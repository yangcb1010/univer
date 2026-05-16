import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-7CN4W52L.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-N7IRXPZI.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-T2XDP2PC.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-OGYP2EFO.js";
import "./chunk-EZNOZAH4.js";
import "./chunk-LS7TT4SD.js";
import "./chunk-6JJM2UD7.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-JZBPKP3E.js";
import "./chunk-PRFTVV4D.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-DZDHQCWK.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DD5DP2SA.js";
import "./chunk-QQNDVRGO.js";
import "./chunk-NBYWMM5G.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-BJWZFJTU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-A4OKGG65.js";
import "./chunk-4XAU2JQF.js";
import "./chunk-2FP4PWZY.js";
import "./chunk-F3CYZMWX.js";
import "./chunk-EJLOQJZC.js";
import "./chunk-OXJQSR2P.js";
import "./chunk-3WKLWIVD.js";
import "./chunk-XUATXRUF.js";
import "./chunk-YOA52FQR.js";
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
