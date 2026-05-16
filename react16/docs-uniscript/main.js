import {
  UniverUniscriptPlugin
} from "../chunk-7WRKWS2C.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-H55CPTS3.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-KD2LLJI4.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-HLJLUWZJ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-QG2VHHOO.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-VIG6WRQC.js";
import {
  zh_CN_default
} from "../chunk-AFUFHWQX.js";
import "../chunk-YFEMWLGB.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-L7B5QXL4.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-44TTLR7G.js";
import {
  Univer
} from "../chunk-Z7OGNYY7.js";
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
