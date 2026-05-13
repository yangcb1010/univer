import {
  UniverUniscriptPlugin
} from "../chunk-R7NWEG42.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-J73FHR2M.js";
import "../chunk-YVVBHCTS.js";
import "../chunk-6572IZBV.js";
import "../chunk-DRDR4GGH.js";
import "../chunk-LSWVCUZS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-LGW7LLO2.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-IGB46TPM.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-FALTVLUW.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-PIUW7RMU.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-3KNESXG4.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-CX5JV5R2.js";
import {
  zh_CN_default
} from "../chunk-BUJAUI6T.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-72ST4B3W.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-FSQ7SQIC.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-SLJDJHOK.js";
import {
  Univer
} from "../chunk-CMNRLXBH.js";
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
