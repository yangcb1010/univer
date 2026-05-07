import {
  UniverUniscriptPlugin
} from "../chunk-K2AZHYEL.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-WYHB6SJX.js";
import "../chunk-BF7QJ5KU.js";
import "../chunk-UR6ZLWDF.js";
import "../chunk-G2N6C7D2.js";
import "../chunk-CBRPZDEK.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-3MD6IRZT.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-WQKGRTJE.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-N7OSGVOD.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-IFC2V6AD.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-5NVS5DMF.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-A5GCOT5W.js";
import {
  zh_CN_default
} from "../chunk-H5O7JAYO.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-37QQQIK3.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-2VINOMSF.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-JFCEKVKG.js";
import {
  Univer
} from "../chunk-N3JNH6S5.js";
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
