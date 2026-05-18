import {
  UniverUniscriptPlugin
} from "../chunk-33HWIOLX.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-NR63F572.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-DVKTUIKB.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-KPCFJNPI.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-5O4ZUYYW.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-MA7ZUEVQ.js";
import {
  zh_CN_default
} from "../chunk-K7UR5GWZ.js";
import "../chunk-HRTBLBUG.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-2PCWRLMN.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-IM3D4YJX.js";
import {
  Univer
} from "../chunk-LHKDD2S2.js";
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
