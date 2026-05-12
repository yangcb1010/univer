import {
  UniverSheetsFilterPlugin
} from "../chunk-JRESOMST.js";
import {
  zh_CN_default
} from "../chunk-RRHMR4LS.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-6A4WLOER.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-ZDGYYCUM.js";
import "../chunk-GMF67DFQ.js";
import {
  Univer
} from "../chunk-RWQ2JXPY.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

// src/sheets/worker.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  logLevel: 4 /* VERBOSE */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  }
});
univer.registerPlugins([
  [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
  [UniverFormulaEnginePlugin],
  [UniverRPCWorkerThreadPlugin],
  [UniverRemoteSheetsFormulaPlugin],
  [UniverSheetsFilterPlugin]
]);
self.univer = univer;
