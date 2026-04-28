import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-P74BCBB6.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-W5HGDUNW.js";
import "./chunk-E7WVX3IP.js";
import "./chunk-I2DDQDZG.js";
import "./chunk-AC5EPPCA.js";
import "./chunk-GLHKEG7P.js";
import "./chunk-2GJTULUB.js";
import "./chunk-BD46EAYK.js";
import "./chunk-JAWGSHYY.js";
import "./chunk-XA52HE7O.js";
import "./chunk-4MIBPMPZ.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
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
