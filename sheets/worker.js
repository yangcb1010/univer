import {
  UniverSheetsFilterPlugin
} from "../chunk-RT335TMU.js";
import {
  zh_CN_default
} from "../chunk-K7UR5GWZ.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-HRTBLBUG.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-2PCWRLMN.js";
import "../chunk-IM3D4YJX.js";
import {
  Univer
} from "../chunk-LHKDD2S2.js";
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
