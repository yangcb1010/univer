import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-GMKCY45I.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QBRQPZRF.js";
import "./chunk-I5RS4ZVS.js";
import "./chunk-X2R3TNXY.js";
import "./chunk-7GPUKYXC.js";
import "./chunk-H6623VF6.js";
import "./chunk-LOEZYBXQ.js";
import "./chunk-SDTDQF3Y.js";
import "./chunk-6E6ICWSP.js";
import "./chunk-IXDOPMZO.js";
import "./chunk-AXB7KB7I.js";
import "./chunk-57HMVZV2.js";
import "./chunk-J4TGZIZO.js";
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
