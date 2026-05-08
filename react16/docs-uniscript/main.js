import {
  UniverUniscriptPlugin
} from "../chunk-JSF5DX4D.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-4V6L5VS2.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-W2OPNLR3.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-AYYW5URE.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-BZUZQPEL.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-I3IHURGK.js";
import {
  zh_CN_default
} from "../chunk-I2PLKRB7.js";
import "../chunk-UV2TQX2B.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-JIJMXB67.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-EXOTAHLR.js";
import {
  Univer
} from "../chunk-NOOMCMF4.js";
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
