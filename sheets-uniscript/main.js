import {
  UniverUniscriptPlugin
} from "../chunk-LCM6I4CG.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-XVETHWHM.js";
import "../chunk-VVMLFOJ4.js";
import "../chunk-U2KL2I6U.js";
import "../chunk-B5QPVCOY.js";
import "../chunk-PDNNLBT5.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-5IW65DMR.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-YOHZUGQA.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-HVXVHE75.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-W2437EUA.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-5CKYU4JP.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-42Z66XU2.js";
import {
  zh_CN_default
} from "../chunk-RKGAPIWW.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-IKGZZVYA.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-SKIBKGC2.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-JUFDHIGR.js";
import {
  Univer
} from "../chunk-KR7DSM5D.js";
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
