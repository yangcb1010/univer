import {
  UniverUniscriptPlugin
} from "../chunk-BCXL6L3L.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-HLARVEVR.js";
import "../chunk-DNSF7WW7.js";
import "../chunk-CVWWJZW4.js";
import "../chunk-KV5QV2NZ.js";
import "../chunk-DHKQWFLW.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-JD2VTFND.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-2IOLYRGZ.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-KL56RLJ5.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-D5KMOR5X.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-YD3D25OD.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-F37C7ISW.js";
import {
  zh_CN_default
} from "../chunk-GQMZKBK3.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-X3DBF32Z.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-2TFWPM3K.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-3Z2RTFRS.js";
import {
  Univer
} from "../chunk-VPXOLCB5.js";
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
