import {
  UniverUniscriptPlugin
} from "../chunk-6YDEYIT2.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-THLVIPM2.js";
import "../chunk-ZFH77GPG.js";
import "../chunk-PM423B6G.js";
import "../chunk-CBRFK5VY.js";
import "../chunk-7XPO2AQS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-RT553DMR.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-NN6SMGRM.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-FQKNDD33.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-NAYBDI4U.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-R4IQRFDR.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-FAIPPTBO.js";
import {
  zh_CN_default
} from "../chunk-OS3D5ST2.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-N3XEYTT4.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-BJXWUOHT.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-IBWPTMH2.js";
import {
  Univer
} from "../chunk-TRDRCMG7.js";
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
