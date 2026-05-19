import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6XLEMCGQ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SNAX7CG3.js";
import "./chunk-6O7KDPHO.js";
import "./chunk-Y4ZPO4RD.js";
import "./chunk-6DGDJWER.js";
import "./chunk-BBXUS2VP.js";
import "./chunk-YLLTPTWC.js";
import "./chunk-QXWAJ3Q5.js";
import "./chunk-CB54O66K.js";
import "./chunk-VTJS4LWT.js";
import "./chunk-WRUL4T3Z.js";
import "./chunk-KRIGFYA2.js";
import "./chunk-QXSHBFLW.js";
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
