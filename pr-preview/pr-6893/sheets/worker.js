import {
  UniverSheetsFilterPlugin
} from "../chunk-KFCKGHUO.js";
import {
  zh_CN_default
} from "../chunk-BUJAUI6T.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-72ST4B3W.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-FSQ7SQIC.js";
import "../chunk-SLJDJHOK.js";
import {
  Univer
} from "../chunk-CMNRLXBH.js";
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
