import {
  UniverUniscriptPlugin
} from "../chunk-SFSZ4IIP.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-EELHRNCD.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-P5CAWDJT.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-JR27ZNVL.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-VNOC7AMC.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-IJZE5DIO.js";
import {
  zh_CN_default
} from "../chunk-HJZ4O45L.js";
import "../chunk-FMTVACJ2.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-RDHF2HN2.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-444DEGR4.js";
import {
  Univer
} from "../chunk-VLJOLTXW.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

// src/docs-uniscript/main.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  ribbonType: "classic",
  footer: false
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverUniscriptPlugin, {
  getWorkerUrl(moduleID, label) {
    if (label === "typescript" || label === "javascript") {
      return "/vs/language/typescript/ts.worker.js";
    }
    return "/vs/editor/editor.worker.js";
  }
});
univer.createUnit(1 /* UNIVER_DOC */, DEFAULT_DOCUMENT_DATA_CN);
window.univer = univer;
