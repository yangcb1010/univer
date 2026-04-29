import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-A2LAVDMH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5DLWLRJF.js";
import "./chunk-D3HQI7SO.js";
import "./chunk-YSAL2BVW.js";
import "./chunk-KOLVNTLC.js";
import "./chunk-2VBLRDFS.js";
import "./chunk-JFSXE3YO.js";
import "./chunk-6YZQ6SLC.js";
import "./chunk-ZVZL2JBF.js";
import "./chunk-4FJAWO4Q.js";
import "./chunk-73BQUXTR.js";
import "./chunk-37EEWYY3.js";
import "./chunk-EXJ7DVHQ.js";
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
