import {
  UniverUniscriptPlugin
} from "../chunk-SFSZ4IIP.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-YKKYWOWJ.js";
import "../chunk-YBNO45PU.js";
import "../chunk-PF45UP3T.js";
import "../chunk-AV2POTBP.js";
import "../chunk-EELHRNCD.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-LCB2BOUJ.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-ZKGMLCS7.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-P5CAWDJT.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-JR27ZNVL.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-VNOC7AMC.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-IJZE5DIO.js";
import {
  zh_CN_default
} from "../chunk-HJZ4O45L.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-FMTVACJ2.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-RDHF2HN2.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-444DEGR4.js";
import {
  Univer
} from "../chunk-VLJOLTXW.js";
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
