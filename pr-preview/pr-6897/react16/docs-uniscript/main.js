import {
  UniverUniscriptPlugin
} from "../chunk-BCXL6L3L.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-DHKQWFLW.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-KL56RLJ5.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-D5KMOR5X.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-YD3D25OD.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-F37C7ISW.js";
import {
  zh_CN_default
} from "../chunk-GQMZKBK3.js";
import "../chunk-X3DBF32Z.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-2TFWPM3K.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-3Z2RTFRS.js";
import {
  Univer
} from "../chunk-VPXOLCB5.js";
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
