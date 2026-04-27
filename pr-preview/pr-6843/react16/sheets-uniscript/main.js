import {
  UniverUniscriptPlugin
} from "../chunk-KEDW5H3D.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-RT5ASG4E.js";
import "../chunk-DOK2GI6X.js";
import "../chunk-Q2HZ6DDG.js";
import "../chunk-IDFK5Z4O.js";
import "../chunk-DQJ4ICFF.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-JXNLYX72.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-FFADTKHL.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-C6NLJKXB.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-KC4BFHJG.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-R3UDUQTB.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-INX3GRSY.js";
import {
  zh_CN_default
} from "../chunk-ITRQ2GGR.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-JTSNRN7X.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-Y45V7LNH.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-XJLBVLLP.js";
import {
  Univer
} from "../chunk-FYOWE623.js";
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
