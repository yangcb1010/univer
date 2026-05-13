import {
  UniverUniscriptPlugin
} from "../chunk-5OZGQFE6.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-AJ2BFJBC.js";
import "../chunk-6VSFGY4E.js";
import "../chunk-QGBPCSOI.js";
import "../chunk-BBNRJX6N.js";
import "../chunk-MB2RKHNY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-U6EKQDFP.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-RDEG3N4S.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-GNVMD7CI.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-O224HJAT.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-3PEZ4F2D.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-FKD4LPN6.js";
import {
  zh_CN_default
} from "../chunk-M4376E6J.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-PDWMZYUZ.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-RGMGZOGX.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-P6BO76EN.js";
import {
  Univer
} from "../chunk-ENG6CS4W.js";
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
