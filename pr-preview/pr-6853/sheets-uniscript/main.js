import {
  UniverUniscriptPlugin
} from "../chunk-E34GIWUD.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-QTAYMZHN.js";
import "../chunk-PNO5SOYN.js";
import "../chunk-2Q5Y46ZC.js";
import "../chunk-P74BCBB6.js";
import "../chunk-HM2RZA4P.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-GEWEVRV5.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-GLHKEG7P.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-2GJTULUB.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-7ISF5ZKC.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-BD46EAYK.js";
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
