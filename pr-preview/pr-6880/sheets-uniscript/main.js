import {
  UniverUniscriptPlugin
} from "../chunk-ICL7FMGD.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-GDTS63GO.js";
import "../chunk-DLQQQ6TL.js";
import "../chunk-H4K4R77K.js";
import "../chunk-VAYLXXAC.js";
import "../chunk-WI7HCLLA.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-4TCOWZ3H.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-67LJSJDG.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-GSKOC6W7.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-ZQHAXEFM.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-BFEIRBRX.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-PR3VVPKQ.js";
import {
  zh_CN_default
} from "../chunk-HBEA7LHS.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-WR37YV5F.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-XRHCJDOX.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-UVACFJVH.js";
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
