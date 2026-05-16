import {
  UniverUniscriptPlugin
} from "../chunk-XJSVQ3AY.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-X4JTLDCA.js";
import "../chunk-LDDTBCQB.js";
import "../chunk-GILR4LDZ.js";
import "../chunk-62GPCE34.js";
import "../chunk-TKUJBTTA.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-RTIBTLTL.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-YUAKOP5O.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-MWHU56QN.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-DE4ZMGCV.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-RWXV5GHC.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-T6W45QDB.js";
import {
  zh_CN_default
} from "../chunk-FQOL7KBV.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-SQCOW24S.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-IQTDWG6Y.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-IJCL4KTE.js";
import {
  Univer
} from "../chunk-6IO55AU2.js";
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
