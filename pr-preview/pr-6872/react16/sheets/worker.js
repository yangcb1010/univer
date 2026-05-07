import {
  UniverSheetsFilterPlugin
} from "../chunk-2QPYOI6W.js";
import {
  zh_CN_default
} from "../chunk-4LTZK3UJ.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-6OMLXICI.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-6RW5DR6W.js";
import "../chunk-UVQEXWQY.js";
import {
  Univer
} from "../chunk-4REX3RLT.js";
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
