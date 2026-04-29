import {
  UniverSheetsFilterPlugin
} from "../chunk-YSAL2BVW.js";
import {
  zh_CN_default
} from "../chunk-FA5L3KRG.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-4FJAWO4Q.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-73BQUXTR.js";
import "../chunk-37EEWYY3.js";
import {
  Univer
} from "../chunk-EXJ7DVHQ.js";
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
