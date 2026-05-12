import {
  UniverUniscriptPlugin
} from "../chunk-23GA2EKK.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-GPS5DNAG.js";
import "../chunk-BJUSJXBZ.js";
import "../chunk-MOHJC2BO.js";
import "../chunk-CL4CLXVZ.js";
import "../chunk-BOFO7FDU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-QIRSTOZ3.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-BHT5SUUS.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-M6WBLNCB.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-WBQMZFE7.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-UYZS4ADO.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-NW5FEDQC.js";
import {
  zh_CN_default
} from "../chunk-OROQCTWB.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-DERQKCKR.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-KLWHM6DN.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-VYDPVHQH.js";
import {
  Univer
} from "../chunk-UI3TUZSE.js";
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
