import {
  UniverSheetsFilterPlugin
} from "../chunk-AOWGN3QE.js";
import {
  zh_CN_default
} from "../chunk-K7UR5GWZ.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-P2XSJLFS.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-VX3DYZ3K.js";
import "../chunk-TTDHTKZ5.js";
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
