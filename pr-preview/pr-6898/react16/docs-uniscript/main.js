import {
  UniverUniscriptPlugin
} from "../chunk-5OZGQFE6.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-MB2RKHNY.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-GNVMD7CI.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-O224HJAT.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-3PEZ4F2D.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-FKD4LPN6.js";
import {
  zh_CN_default
} from "../chunk-M4376E6J.js";
import "../chunk-PDWMZYUZ.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-RGMGZOGX.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-P6BO76EN.js";
import {
  Univer
} from "../chunk-ENG6CS4W.js";
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
