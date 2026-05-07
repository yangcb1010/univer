import {
  UniverUniscriptPlugin
} from "../chunk-5T2LESW5.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-ZV7XSTG4.js";
import "../chunk-I5ZAGDNQ.js";
import "../chunk-4MIURUJC.js";
import "../chunk-GMKCY45I.js";
import "../chunk-J3MDMXBD.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-WCFA5FQO.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-H6623VF6.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-LOEZYBXQ.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-L4AHYLQQ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-SDTDQF3Y.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-6E6ICWSP.js";
import {
  zh_CN_default
} from "../chunk-XSVQCYTF.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-IXDOPMZO.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-AXB7KB7I.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-57HMVZV2.js";
import {
  Univer
} from "../chunk-J4TGZIZO.js";
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
