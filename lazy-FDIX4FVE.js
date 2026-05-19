import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5TK3W4BY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GMAJGSRY.js";
import "./chunk-O3OW67VG.js";
import "./chunk-AOWGN3QE.js";
import "./chunk-ZSBQDS3J.js";
import "./chunk-57GUWSCZ.js";
import "./chunk-IMLRFAXE.js";
import "./chunk-ZDQQONQ3.js";
import "./chunk-DB2U2UP3.js";
import "./chunk-P2XSJLFS.js";
import "./chunk-VX3DYZ3K.js";
import "./chunk-TTDHTKZ5.js";
import "./chunk-LHKDD2S2.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-multi-units/lazy.ts
function getLazyPlugins() {
  return [
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
