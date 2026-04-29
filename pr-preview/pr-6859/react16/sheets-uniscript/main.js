import {
  UniverUniscriptPlugin
} from "../chunk-IYOJ4KCW.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-2BQHFMEK.js";
import "../chunk-QQMSRFYE.js";
import "../chunk-6ZVZ3YWK.js";
import "../chunk-A2LAVDMH.js";
import "../chunk-UCUTRLTY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-KD6IXDGH.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-2VBLRDFS.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-JFSXE3YO.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-2A7IGPEQ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-6YZQ6SLC.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-ZVZL2JBF.js";
import {
  zh_CN_default
} from "../chunk-FA5L3KRG.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-4FJAWO4Q.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-73BQUXTR.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-37EEWYY3.js";
import {
  Univer
} from "../chunk-EXJ7DVHQ.js";
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
