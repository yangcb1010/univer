import {
  UniverUniscriptPlugin
} from "../chunk-C7BRO4WO.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-MZPXDPL2.js";
import "../chunk-CFYJ7LL7.js";
import "../chunk-MNMB2BML.js";
import "../chunk-OYLH2FNO.js";
import "../chunk-YIASHCKB.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-L3KIKLB2.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-HY7BXP3A.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-EKTZHMC3.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-E72PIMKO.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-IYSWF4T7.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-J6USL5WQ.js";
import {
  zh_CN_default
} from "../chunk-6L3LYFAK.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-GZD4ZKOT.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-KNX6MG2E.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-SO7FMCUD.js";
import {
  Univer
} from "../chunk-DXN2UBCQ.js";
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
