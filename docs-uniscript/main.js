import {
  UniverUniscriptPlugin
} from "../chunk-HUSDY4N2.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-YIASHCKB.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-K5YXKZNS.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-E2MABSVY.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-TE5DB5RE.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-J6USL5WQ.js";
import {
  zh_CN_default
} from "../chunk-6L3LYFAK.js";
import "../chunk-GZD4ZKOT.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-KNX6MG2E.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-SO7FMCUD.js";
import {
  Univer
} from "../chunk-DXN2UBCQ.js";
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
