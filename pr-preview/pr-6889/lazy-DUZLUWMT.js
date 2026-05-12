import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CL4CLXVZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BPCMN662.js";
import "./chunk-MUVUCFBQ.js";
import "./chunk-PFWEAUCW.js";
import "./chunk-CHO5W3CL.js";
import "./chunk-BHT5SUUS.js";
import "./chunk-M6WBLNCB.js";
import "./chunk-UYZS4ADO.js";
import "./chunk-NW5FEDQC.js";
import "./chunk-DERQKCKR.js";
import "./chunk-KLWHM6DN.js";
import "./chunk-VYDPVHQH.js";
import "./chunk-UI3TUZSE.js";
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
