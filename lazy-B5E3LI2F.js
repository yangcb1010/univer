import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VPDFLD3G.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DNJYI2KH.js";
import "./chunk-FJOYAEZY.js";
import "./chunk-SMSEC6NP.js";
import "./chunk-E2NDH4FI.js";
import "./chunk-CWZ674DL.js";
import "./chunk-CZ2URNVR.js";
import "./chunk-MZFSBPQN.js";
import "./chunk-UP3YF7BF.js";
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
