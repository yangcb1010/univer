import {
  UniverUniscriptPlugin
} from "../chunk-AK2G3NIV.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-REACMS5W.js";
import "../chunk-W6HWXYUN.js";
import "../chunk-MEK4W47U.js";
import "../chunk-JJQOXDSP.js";
import "../chunk-PTH4ZFW6.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-DOWUQJD2.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-BBXUS2VP.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-PAQGC7OS.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-2BPF3MDK.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-QXWAJ3Q5.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-CB54O66K.js";
import {
  zh_CN_default
} from "../chunk-CF3BOM2J.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-VTJS4LWT.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-WRUL4T3Z.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-KRIGFYA2.js";
import {
  Univer
} from "../chunk-QXSHBFLW.js";
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
