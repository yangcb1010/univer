import {
  UniverUniscriptPlugin
} from "../chunk-IYOJ4KCW.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-UCUTRLTY.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-JFSXE3YO.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-2A7IGPEQ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-6YZQ6SLC.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-ZVZL2JBF.js";
import {
  zh_CN_default
} from "../chunk-FA5L3KRG.js";
import "../chunk-4FJAWO4Q.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-73BQUXTR.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-37EEWYY3.js";
import {
  Univer
} from "../chunk-EXJ7DVHQ.js";
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
