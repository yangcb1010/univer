import {
  UniverUniscriptPlugin
} from "../chunk-KABLLPHV.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-UGHNYCJA.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-YTGTDE7T.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-L4AQKQKU.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-PUATED7W.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-UP3YF7BF.js";
import {
  zh_CN_default
} from "../chunk-QDQXZY2J.js";
import "../chunk-B4JD6PHF.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-7MK3IXAB.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-JM47KJF2.js";
import {
  Univer
} from "../chunk-YOA52FQR.js";
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
