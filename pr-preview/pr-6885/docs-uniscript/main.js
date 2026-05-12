import {
  UniverUniscriptPlugin
} from "../chunk-ECOEORBD.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-WI7HCLLA.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-DE5YNP5X.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-OPD4PUDO.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-J6QBGV2F.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-SLUFDUGD.js";
import {
  zh_CN_default
} from "../chunk-HBEA7LHS.js";
import "../chunk-O2VJFVEB.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-7RBMYMDA.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-FHFEAUF6.js";
import {
  Univer
} from "../chunk-P5ZL4OWA.js";
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
