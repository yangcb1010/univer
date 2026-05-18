import {
  UniverUniscriptPlugin
} from "../chunk-ZULXP4TY.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-6K756KAL.js";
import "../chunk-UEQ7WYFD.js";
import "../chunk-TXJUECTM.js";
import "../chunk-UM42SVUX.js";
import "../chunk-NR63F572.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-YQ5FLPK7.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-JFR44EEY.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-6ULZNEZF.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-HWVXTS5X.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-3QHL3QYA.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-7PU4S2WA.js";
import {
  zh_CN_default
} from "../chunk-K7UR5GWZ.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-HRTBLBUG.js";
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
