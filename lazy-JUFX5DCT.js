import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IB5CYOSZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZJLHQIFK.js";
import "./chunk-UQDAEX5M.js";
import "./chunk-EKBURH3C.js";
import "./chunk-Q5WX3IFA.js";
import "./chunk-MKTIPRYI.js";
import "./chunk-YEHIAMOS.js";
import "./chunk-3VIUE6N6.js";
import "./chunk-ETTFNWWN.js";
import "./chunk-7LCAER27.js";
import "./chunk-5JQ3NLW4.js";
import "./chunk-JM47KJF2.js";
import "./chunk-YOA52FQR.js";
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
