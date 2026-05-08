import {
  UniverUniscriptPlugin
} from "../chunk-XPDDK6AX.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-3RD4IAS4.js";
import "../chunk-COAI2JAY.js";
import "../chunk-4XWTSGLC.js";
import "../chunk-IKMRCXCQ.js";
import "../chunk-4V6L5VS2.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-EGUO46M7.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-WAQV5A4L.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-TKUGOTGK.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-AYYW5URE.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-BZUZQPEL.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-I3IHURGK.js";
import {
  zh_CN_default
} from "../chunk-I2PLKRB7.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-UV2TQX2B.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-JIJMXB67.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-EXOTAHLR.js";
import {
  Univer
} from "../chunk-NOOMCMF4.js";
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
