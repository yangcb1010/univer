import {
  UniverSheetsFilterPlugin
} from "../chunk-VRYNODIW.js";
import {
  zh_CN_default
} from "../chunk-TWWQUUK6.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-BTICXYSD.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-WNHBX3IS.js";
import "../chunk-UYLV7ACK.js";
import {
  Univer
} from "../chunk-VNIHR3SD.js";
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
