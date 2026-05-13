import {
  UniverUniscriptPlugin
} from "../chunk-6GI57EGO.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-JA5D6TEX.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-XN7KJFH7.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-2KXMFTFV.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-B3IMXL4W.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-QIR3WKC6.js";
import {
  zh_CN_default
} from "../chunk-S573LOWI.js";
import "../chunk-XNQGS7SY.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-4K3ZX35V.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-VV5VC3U2.js";
import {
  Univer
} from "../chunk-Q4SWDG4I.js";
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
