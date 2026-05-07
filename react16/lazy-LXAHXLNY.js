import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RVGD4HSA.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UM4BESBU.js";
import "./chunk-TR2TXSWQ.js";
import "./chunk-YYUXXD4A.js";
import "./chunk-WU7XJCN3.js";
import "./chunk-BKHOKDVP.js";
import "./chunk-BWGM6XXQ.js";
import "./chunk-AV4ZZJ7C.js";
import "./chunk-A5GCOT5W.js";
import "./chunk-DVLMYM77.js";
import "./chunk-FUIDLLAE.js";
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
