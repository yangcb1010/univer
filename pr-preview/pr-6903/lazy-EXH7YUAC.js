import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7EUHSFOV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5LTB2PTN.js";
import "./chunk-FJOYAEZY.js";
import "./chunk-SMSEC6NP.js";
import "./chunk-IGGL66RF.js";
import "./chunk-CWZ674DL.js";
import "./chunk-6CESB5KX.js";
import "./chunk-QEBKDW77.js";
import "./chunk-QMYYFIJ3.js";
import "./chunk-B4JD6PHF.js";
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
