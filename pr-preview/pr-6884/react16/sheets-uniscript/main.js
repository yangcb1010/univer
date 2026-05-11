import {
  UniverUniscriptPlugin
} from "../chunk-OMTZKSMZ.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-36MBI3QS.js";
import "../chunk-M6VU3GHI.js";
import "../chunk-X6HCLH3H.js";
import "../chunk-JSWIXMFJ.js";
import "../chunk-YXIXHTFJ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-RJTLQXUX.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-GCWVDUPD.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-HZMRCCEN.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-K32ROAAX.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-YFFUFD22.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-W7VRB3OS.js";
import {
  zh_CN_default
} from "../chunk-RRHMR4LS.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-3U7B7NL2.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-3RGSYIGA.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-RM5FPLUF.js";
import {
  Univer
} from "../chunk-RWQ2JXPY.js";
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
