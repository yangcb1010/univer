import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-H63KVAT5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ORHDWKRE.js";
import "./chunk-5JU7YYCJ.js";
import "./chunk-236MDHDL.js";
import "./chunk-MWQVPJR7.js";
import "./chunk-YTSTTUB4.js";
import "./chunk-XN7KJFH7.js";
import "./chunk-B3IMXL4W.js";
import "./chunk-QIR3WKC6.js";
import "./chunk-XNQGS7SY.js";
import "./chunk-4K3ZX35V.js";
import "./chunk-VV5VC3U2.js";
import "./chunk-Q4SWDG4I.js";
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
