import {
  UniverUniscriptPlugin
} from "../chunk-5T2LESW5.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-J3MDMXBD.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-LOEZYBXQ.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-L4AHYLQQ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-SDTDQF3Y.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-6E6ICWSP.js";
import {
  zh_CN_default
} from "../chunk-XSVQCYTF.js";
import "../chunk-IXDOPMZO.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-AXB7KB7I.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-57HMVZV2.js";
import {
  Univer
} from "../chunk-J4TGZIZO.js";
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
