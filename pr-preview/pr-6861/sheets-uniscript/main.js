import {
  UniverUniscriptPlugin
} from "../chunk-B53DDNDN.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-CA2CM4U2.js";
import "../chunk-QOX233RC.js";
import "../chunk-V64U4DIH.js";
import "../chunk-QMZRDAFL.js";
import "../chunk-24PXC6NA.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-RBKOF2VN.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-QLO7L6JV.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-6WEXBHDV.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-NCRA5GJC.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-SGRTX26L.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-KYTVLL37.js";
import {
  zh_CN_default
} from "../chunk-JQOQEQAL.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-BSZ4XQYG.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-67PL7CCP.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-NBDTXAUW.js";
import {
  Univer
} from "../chunk-CXFMZEOG.js";
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
