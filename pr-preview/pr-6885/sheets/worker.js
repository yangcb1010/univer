import {
  UniverSheetsFilterPlugin
} from "../chunk-2J3YGWMK.js";
import {
  zh_CN_default
} from "../chunk-HBEA7LHS.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-O2VJFVEB.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-7RBMYMDA.js";
import "../chunk-FHFEAUF6.js";
import {
  Univer
} from "../chunk-P5ZL4OWA.js";
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
