import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JSWIXMFJ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-J437UXW5.js";
import "./chunk-Q7NCP53U.js";
import "./chunk-XR5A5UPZ.js";
import "./chunk-KNS5ELTL.js";
import "./chunk-GCWVDUPD.js";
import "./chunk-HZMRCCEN.js";
import "./chunk-YFFUFD22.js";
import "./chunk-W7VRB3OS.js";
import "./chunk-3U7B7NL2.js";
import "./chunk-3RGSYIGA.js";
import "./chunk-RM5FPLUF.js";
import "./chunk-RWQ2JXPY.js";
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
