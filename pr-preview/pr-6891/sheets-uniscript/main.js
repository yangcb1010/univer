import {
  UniverUniscriptPlugin
} from "../chunk-2HRSAD5W.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-Y2U6UQZK.js";
import "../chunk-PD75BEB4.js";
import "../chunk-JHD3FGHB.js";
import "../chunk-EW2CCZN5.js";
import "../chunk-YXIXHTFJ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-2XUVK6FJ.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-NC3IXRB2.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-EBE6LVPX.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-ZKSZ47T2.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-F2HGVFCP.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-AIXTWDSI.js";
import {
  zh_CN_default
} from "../chunk-RRHMR4LS.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-6A4WLOER.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-ZDGYYCUM.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-GMF67DFQ.js";
import {
  Univer
} from "../chunk-RWQ2JXPY.js";
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
