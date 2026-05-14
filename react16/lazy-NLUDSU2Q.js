import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FX4C4SP3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ONCYMUE4.js";
import "./chunk-FJOYAEZY.js";
import "./chunk-SMSEC6NP.js";
import "./chunk-NQ7LLGUV.js";
import "./chunk-CWZ674DL.js";
import "./chunk-JBBLHQE2.js";
import "./chunk-HNS5UNZD.js";
import "./chunk-ETTFNWWN.js";
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
