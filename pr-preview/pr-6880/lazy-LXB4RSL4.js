import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VAYLXXAC.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-66ELQCVV.js";
import "./chunk-FEBLDT4A.js";
import "./chunk-3CA3QHPS.js";
import "./chunk-PNMQSI4O.js";
import "./chunk-67LJSJDG.js";
import "./chunk-GSKOC6W7.js";
import "./chunk-BFEIRBRX.js";
import "./chunk-PR3VVPKQ.js";
import "./chunk-WR37YV5F.js";
import "./chunk-XRHCJDOX.js";
import "./chunk-UVACFJVH.js";
import "./chunk-P5ZL4OWA.js";
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
