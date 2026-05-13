import {
  UniverSheetsFilterPlugin
} from "../chunk-V774D4XT.js";
import {
  zh_CN_default
} from "../chunk-M4376E6J.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-PDWMZYUZ.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-RGMGZOGX.js";
import "../chunk-P6BO76EN.js";
import {
  Univer
} from "../chunk-ENG6CS4W.js";
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
