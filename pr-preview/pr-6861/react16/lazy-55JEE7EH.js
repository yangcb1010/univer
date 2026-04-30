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
import "./chunk-RTFXSS6E.js";
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
