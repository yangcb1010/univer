import {
  UniverUniscriptPlugin
} from "../chunk-LCM6I4CG.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-PDNNLBT5.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-HVXVHE75.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-W2437EUA.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-5CKYU4JP.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-42Z66XU2.js";
import {
  zh_CN_default
} from "../chunk-RKGAPIWW.js";
import "../chunk-IKGZZVYA.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-SKIBKGC2.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-JUFDHIGR.js";
import {
  Univer
} from "../chunk-KR7DSM5D.js";
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
