import {
  UniverUniscriptPlugin
} from "../chunk-PPYXZB5D.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-W5VNFEWG.js";
import "../chunk-ZNZF4CMK.js";
import "../chunk-VVID4OSL.js";
import "../chunk-EHR6CMSV.js";
import "../chunk-V3L6JNGK.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-LZ3NN7NK.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-M3CXRNJT.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-F622OH7T.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-CA2COOAB.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-TPTPVTVV.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-KRK3QYNT.js";
import {
  zh_CN_default
} from "../chunk-4LTZK3UJ.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-6OMLXICI.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-6RW5DR6W.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-UVQEXWQY.js";
import {
  Univer
} from "../chunk-4REX3RLT.js";
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
