import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XNKBG5DX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DS6QOUZK.js";
import "./chunk-PWM7OAWL.js";
import "./chunk-G2FA2Z36.js";
import "./chunk-SQLSWBZN.js";
import "./chunk-PG2NW4Z2.js";
import "./chunk-OA65XLEJ.js";
import "./chunk-QFPLTI4E.js";
import "./chunk-VHHZVIXR.js";
import "./chunk-ED73PE7E.js";
import "./chunk-LLIKHLT2.js";
import "./chunk-YGDGDS4O.js";
import "./chunk-P5ZL4OWA.js";
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
