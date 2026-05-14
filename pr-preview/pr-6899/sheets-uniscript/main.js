import {
  UniverUniscriptPlugin
} from "../chunk-RLPVJID5.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-VA5ZIAMS.js";
import "../chunk-CZGSQSMW.js";
import "../chunk-CWE37RHB.js";
import "../chunk-L4LYKAT4.js";
import "../chunk-5YPNXYNB.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-I3RUUVDQ.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-OM72QNCH.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-WVDN2JZP.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-TD2DEW6R.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-TMJZYKRE.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-FUCYJVPX.js";
import {
  zh_CN_default
} from "../chunk-SVWIBZ22.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-ZHRNBNEW.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-X3TVBUYV.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-LG44BJ6D.js";
import {
  Univer
} from "../chunk-PTL6IILL.js";
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
