import {
  UniverSheetsFilterPlugin
} from "../chunk-DVUVBIMK.js";
import {
  zh_CN_default
} from "../chunk-SVWIBZ22.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-ZHRNBNEW.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-X3TVBUYV.js";
import "../chunk-LG44BJ6D.js";
import {
  Univer
} from "../chunk-PTL6IILL.js";
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
