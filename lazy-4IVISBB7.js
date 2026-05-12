import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EAFNY4J2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CVOCZX2G.js";
import "./chunk-P42FBGG6.js";
import "./chunk-2J3YGWMK.js";
import "./chunk-RZOWVJML.js";
import "./chunk-HRSUF6ZK.js";
import "./chunk-DE5YNP5X.js";
import "./chunk-J6QBGV2F.js";
import "./chunk-SLUFDUGD.js";
import "./chunk-O2VJFVEB.js";
import "./chunk-7RBMYMDA.js";
import "./chunk-FHFEAUF6.js";
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
