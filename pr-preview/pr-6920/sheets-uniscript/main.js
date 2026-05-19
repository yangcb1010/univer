import {
  UniverUniscriptPlugin
} from "../chunk-DWLJPKAK.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-6PF7SIJT.js";
import "../chunk-5QLH6JSG.js";
import "../chunk-G2OFSE5X.js";
import "../chunk-5TK3W4BY.js";
import "../chunk-NR63F572.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-H6AVO5K2.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-57GUWSCZ.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-IMLRFAXE.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-OMKOVUMP.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-ZDQQONQ3.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-DB2U2UP3.js";
import {
  zh_CN_default
} from "../chunk-K7UR5GWZ.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-P2XSJLFS.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-VX3DYZ3K.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-TTDHTKZ5.js";
import {
  Univer
} from "../chunk-LHKDD2S2.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

// src/sheets-uniscript/main.ts
var IS_E2E = false;
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  ribbonType: "classic"
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsNumfmtUIPlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);
univer.registerPlugin(UniverUniscriptPlugin, {
  getWorkerUrl(_, label) {
    if (label === "typescript" || label === "javascript") {
      return "/vs/language/typescript/ts.worker.js";
    }
    return "/vs/editor/editor.worker.js";
  }
});
if (IS_E2E) {
  univer.registerPlugin(UniverDebuggerPlugin, {
    fab: false,
    performanceMonitor: {
      enabled: false
    }
  });
}
univer.createUnit(2 /* UNIVER_SHEET */, UNISCRIT_WORKBOOK_DATA_DEMO);
window.univer = univer;
