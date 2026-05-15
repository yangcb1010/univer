import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-DZDHQCWK.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-72KWZFU3.js";
import "./chunk-W5MY7OMO.js";
import "./chunk-NBYWMM5G.js";
import "./chunk-A4OKGG65.js";
import "./chunk-4XAU2JQF.js";
import "./chunk-2FP4PWZY.js";
import "./chunk-F3CYZMWX.js";
import "./chunk-EJLOQJZC.js";
import "./chunk-OXJQSR2P.js";
import "./chunk-3WKLWIVD.js";
import "./chunk-XUATXRUF.js";
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
