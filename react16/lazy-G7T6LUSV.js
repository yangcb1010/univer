import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-B5QPVCOY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NSTB5D6X.js";
import "./chunk-DW6RMBRM.js";
import "./chunk-4YBUNBJN.js";
import "./chunk-ES3E2VAG.js";
import "./chunk-YOHZUGQA.js";
import "./chunk-HVXVHE75.js";
import "./chunk-5CKYU4JP.js";
import "./chunk-42Z66XU2.js";
import "./chunk-IKGZZVYA.js";
import "./chunk-SKIBKGC2.js";
import "./chunk-JUFDHIGR.js";
import "./chunk-KR7DSM5D.js";
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
