import {
  UniverUniscriptPlugin
} from "../chunk-HNDA3DNA.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-Q647FVP6.js";
import "../chunk-SIXJB56I.js";
import "../chunk-332B56TT.js";
import "../chunk-JTS7CGZX.js";
import "../chunk-H55CPTS3.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-LBSZ56IY.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-M3BEA6E3.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-X5RLG7GK.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-SRUO6F4E.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-44USEEJQ.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-VIG6WRQC.js";
import {
  zh_CN_default
} from "../chunk-AFUFHWQX.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-5OMTIQ3A.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-COSEOYUB.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-44TTLR7G.js";
import {
  Univer
} from "../chunk-Z7OGNYY7.js";
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
