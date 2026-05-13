import {
  UniverSheetsFilterPlugin
} from "../chunk-FOHSUMMW.js";
import {
  zh_CN_default
} from "../chunk-HJZ4O45L.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-FMTVACJ2.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-RDHF2HN2.js";
import "../chunk-444DEGR4.js";
import {
  Univer
} from "../chunk-VLJOLTXW.js";
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
