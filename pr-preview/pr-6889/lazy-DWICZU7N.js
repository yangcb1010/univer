import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2E6KFPZQ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LECPI7RW.js";
import "./chunk-C2FHJPQ4.js";
import "./chunk-HMZGNJFD.js";
import "./chunk-IQJW6BSM.js";
import "./chunk-X7IBCWQB.js";
import "./chunk-E43ZV75N.js";
import "./chunk-UPJ7ILRO.js";
import "./chunk-NW5FEDQC.js";
import "./chunk-2VUGZL27.js";
import "./chunk-TTL5RBIZ.js";
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
