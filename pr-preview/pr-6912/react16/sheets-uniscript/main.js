import {
  UniverUniscriptPlugin
} from "../chunk-ZRIWWCGO.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-GCFGN4SJ.js";
import "../chunk-5SYXYTEE.js";
import "../chunk-332B56TT.js";
import "../chunk-JLO67VVO.js";
import "../chunk-H55CPTS3.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-4ZEV7MSL.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-T7MHPOPG.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-GYY5TCP7.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-PI5UIIM3.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-I3ZLK6P2.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-JLKJAGRC.js";
import {
  zh_CN_default
} from "../chunk-AFUFHWQX.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-YFEMWLGB.js";
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
