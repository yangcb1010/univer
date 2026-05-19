import {
  UniverSheetsFilterPlugin
} from "../chunk-Y4ZPO4RD.js";
import {
  zh_CN_default
} from "../chunk-CF3BOM2J.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-VTJS4LWT.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-WRUL4T3Z.js";
import "../chunk-KRIGFYA2.js";
import {
  Univer
} from "../chunk-QXSHBFLW.js";
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
