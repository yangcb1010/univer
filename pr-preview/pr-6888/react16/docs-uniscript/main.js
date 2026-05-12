import {
  UniverUniscriptPlugin
} from "../chunk-WJ5QBUPI.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-CU3NBIN6.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-KFWN6YQO.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-4EY4ILYO.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-CXBSAXJ4.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-FJRNDYKC.js";
import {
  zh_CN_default
} from "../chunk-TWWQUUK6.js";
import "../chunk-BTICXYSD.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-WNHBX3IS.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-UYLV7ACK.js";
import {
  Univer
} from "../chunk-VNIHR3SD.js";
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
