import {
  UniverUniscriptPlugin
} from "../chunk-WJ5QBUPI.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-GIA2PT4H.js";
import "../chunk-NSMF37F3.js";
import "../chunk-FOHNRH4S.js";
import "../chunk-6OBNGC3H.js";
import "../chunk-CU3NBIN6.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-KACMKKFQ.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-LXZQVN76.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-KFWN6YQO.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-4EY4ILYO.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-CXBSAXJ4.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-FJRNDYKC.js";
import {
  zh_CN_default
} from "../chunk-TWWQUUK6.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-BTICXYSD.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-WNHBX3IS.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-UYLV7ACK.js";
import {
  Univer
} from "../chunk-VNIHR3SD.js";
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
