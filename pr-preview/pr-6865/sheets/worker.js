import {
  UniverSheetsFilterPlugin
} from "../chunk-S7DVJKAI.js";
import {
  zh_CN_default
} from "../chunk-6L3LYFAK.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-GZD4ZKOT.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-KNX6MG2E.js";
import "../chunk-SO7FMCUD.js";
import {
  Univer
} from "../chunk-DXN2UBCQ.js";
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
