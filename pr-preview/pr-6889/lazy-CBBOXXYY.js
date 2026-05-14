import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PQXF4SX2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-C6AYYVMC.js";
import "./chunk-CHSD4WXW.js";
import "./chunk-I7GRZ3JG.js";
import "./chunk-H7FXVBA2.js";
import "./chunk-GJMMKFEC.js";
import "./chunk-Z3H4BZ7W.js";
import "./chunk-FMV6QHNG.js";
import "./chunk-NW5FEDQC.js";
import "./chunk-SUG55IJG.js";
import "./chunk-BAAR53DJ.js";
import "./chunk-VYDPVHQH.js";
import "./chunk-UI3TUZSE.js";
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
