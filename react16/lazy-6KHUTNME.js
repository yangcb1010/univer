import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XBXA3DJP.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5WAYZMUW.js";
import "./chunk-AQAPNWZ6.js";
import "./chunk-CA6BASOU.js";
import "./chunk-UEGJKLYL.js";
import "./chunk-GMGJRV6Z.js";
import "./chunk-SL6XXP2Q.js";
import "./chunk-OYA3IJPL.js";
import "./chunk-HA5W7BKS.js";
import "./chunk-VINBWQOG.js";
import "./chunk-FDT4RW2X.js";
import "./chunk-ZTS2ZX44.js";
import "./chunk-NOOMCMF4.js";
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
