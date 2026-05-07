import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-G2N6C7D2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-7TR2TYWM.js";
import "./chunk-T53UPKKR.js";
import "./chunk-2Q7JJJBF.js";
import "./chunk-ZSYEZJXC.js";
import "./chunk-WQKGRTJE.js";
import "./chunk-N7OSGVOD.js";
import "./chunk-5NVS5DMF.js";
import "./chunk-A5GCOT5W.js";
import "./chunk-37QQQIK3.js";
import "./chunk-2VINOMSF.js";
import "./chunk-JFCEKVKG.js";
import "./chunk-N3JNH6S5.js";
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
