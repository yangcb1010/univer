import {
  UniverUniscriptPlugin
} from "../chunk-LCTNWFEO.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-L2IZ4MPG.js";
import "../chunk-A5NTNKI6.js";
import "../chunk-2Q5Y46ZC.js";
import "../chunk-CDSWRAZH.js";
import "../chunk-HM2RZA4P.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-4PFQU5IC.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-GLHKEG7P.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-BW3AQV7J.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-5DFHNS3X.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-XHMTLDV6.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-JAWGSHYY.js";
import {
  zh_CN_default
} from "../chunk-AQIU5XW4.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-XA52HE7O.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-4MIBPMPZ.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-QYXLJWB3.js";
import {
  Univer
} from "../chunk-KN22OUW2.js";
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
