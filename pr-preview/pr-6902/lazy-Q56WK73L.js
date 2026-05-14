import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HEN2UW7F.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2EZ6LV2C.js";
import "./chunk-FJOYAEZY.js";
import "./chunk-SMSEC6NP.js";
import "./chunk-DUWBKUCS.js";
import "./chunk-CWZ674DL.js";
import "./chunk-37VT5KIO.js";
import "./chunk-JJMAJBRJ.js";
import "./chunk-FJC66O4Z.js";
import "./chunk-3UYALPPF.js";
import "./chunk-7MK3IXAB.js";
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
