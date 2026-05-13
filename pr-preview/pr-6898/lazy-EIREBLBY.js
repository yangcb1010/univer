import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BBNRJX6N.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GAFMQJG3.js";
import "./chunk-T26MI6IW.js";
import "./chunk-V774D4XT.js";
import "./chunk-7VCVIQXG.js";
import "./chunk-RDEG3N4S.js";
import "./chunk-GNVMD7CI.js";
import "./chunk-3PEZ4F2D.js";
import "./chunk-FKD4LPN6.js";
import "./chunk-PDWMZYUZ.js";
import "./chunk-RGMGZOGX.js";
import "./chunk-P6BO76EN.js";
import "./chunk-ENG6CS4W.js";
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
