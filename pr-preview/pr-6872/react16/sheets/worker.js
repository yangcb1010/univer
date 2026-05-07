import {
  UniverSheetsFilterPlugin
} from "../chunk-M3JXRG6N.js";
import {
  zh_CN_default
} from "../chunk-I2PLKRB7.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-QPDVXCXL.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-LGDLPCKF.js";
import "../chunk-EXOTAHLR.js";
import {
  Univer
} from "../chunk-NOOMCMF4.js";
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
