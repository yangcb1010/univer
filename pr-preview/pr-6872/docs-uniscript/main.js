import {
  UniverUniscriptPlugin
} from "../chunk-PPYXZB5D.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-V3L6JNGK.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-F622OH7T.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-CA2COOAB.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-TPTPVTVV.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-KRK3QYNT.js";
import {
  zh_CN_default
} from "../chunk-4LTZK3UJ.js";
import "../chunk-6OMLXICI.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-6RW5DR6W.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-UVQEXWQY.js";
import {
  Univer
} from "../chunk-4REX3RLT.js";
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
