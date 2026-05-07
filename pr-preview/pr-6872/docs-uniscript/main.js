import {
  UniverUniscriptPlugin
} from "../chunk-YR5HWR2B.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-CBRPZDEK.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-BWGM6XXQ.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-QLQENQID.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-AV4ZZJ7C.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-A5GCOT5W.js";
import {
  zh_CN_default
} from "../chunk-H5O7JAYO.js";
import "../chunk-DVLMYM77.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-FUIDLLAE.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-JFCEKVKG.js";
import {
  Univer
} from "../chunk-N3JNH6S5.js";
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
