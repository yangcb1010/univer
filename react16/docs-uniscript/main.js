import {
  UniverUniscriptPlugin
} from "../chunk-6YDEYIT2.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-7XPO2AQS.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-FQKNDD33.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-NAYBDI4U.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-R4IQRFDR.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-FAIPPTBO.js";
import {
  zh_CN_default
} from "../chunk-OS3D5ST2.js";
import "../chunk-N3XEYTT4.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-BJXWUOHT.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-IBWPTMH2.js";
import {
  Univer
} from "../chunk-TRDRCMG7.js";
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
