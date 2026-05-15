import {
  UniverUniscriptPlugin
} from "../chunk-IQEHW476.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-CM3ATAON.js";
import "../chunk-5LZXVWXX.js";
import "../chunk-V7DYJCUH.js";
import "../chunk-VPDFLD3G.js";
import "../chunk-UGHNYCJA.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-M5YQRAC7.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-CWZ674DL.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-CZ2URNVR.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-H6IYE7SK.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-MZFSBPQN.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-UP3YF7BF.js";
import {
  zh_CN_default
} from "../chunk-QDQXZY2J.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-3UYALPPF.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-7MK3IXAB.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-JM47KJF2.js";
import {
  Univer
} from "../chunk-YOA52FQR.js";
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
