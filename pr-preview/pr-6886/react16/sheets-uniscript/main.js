import {
  UniverUniscriptPlugin
} from "../chunk-BSNUAQGW.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-A3WCIQHW.js";
import "../chunk-TCXEZO7N.js";
import "../chunk-3EMFUM5V.js";
import "../chunk-RRBNCCWZ.js";
import "../chunk-WI7HCLLA.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-POYPF2LN.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-S7WKRYSA.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-MC2FHISR.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-FHNFPAZX.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-OF2TEFXQ.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-VHHZVIXR.js";
import {
  zh_CN_default
} from "../chunk-HBEA7LHS.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-WV67HTJS.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-NKGAD7WX.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-YGDGDS4O.js";
import {
  Univer
} from "../chunk-P5ZL4OWA.js";
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
