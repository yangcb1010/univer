import {
  UniverUniscriptPlugin
} from "../chunk-6GI57EGO.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-EZX7XWMV.js";
import "../chunk-AWNKVF6S.js";
import "../chunk-MQUWI3PU.js";
import "../chunk-H63KVAT5.js";
import "../chunk-JA5D6TEX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-C2BIT5JT.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-YTSTTUB4.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-XN7KJFH7.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-2KXMFTFV.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-B3IMXL4W.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-QIR3WKC6.js";
import {
  zh_CN_default
} from "../chunk-S573LOWI.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-XNQGS7SY.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-4K3ZX35V.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-VV5VC3U2.js";
import {
  Univer
} from "../chunk-Q4SWDG4I.js";
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
