import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-L4LYKAT4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-H3XL6FMZ.js";
import "./chunk-FQLDQBQS.js";
import "./chunk-DVUVBIMK.js";
import "./chunk-WPLS64ZG.js";
import "./chunk-OM72QNCH.js";
import "./chunk-WVDN2JZP.js";
import "./chunk-TMJZYKRE.js";
import "./chunk-FUCYJVPX.js";
import "./chunk-ZHRNBNEW.js";
import "./chunk-X3TVBUYV.js";
import "./chunk-LG44BJ6D.js";
import "./chunk-PTL6IILL.js";
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
