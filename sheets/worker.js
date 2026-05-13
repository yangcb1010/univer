import {
  UniverSheetsFilterPlugin
} from "../chunk-4YBUNBJN.js";
import {
  zh_CN_default
} from "../chunk-RKGAPIWW.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-IKGZZVYA.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-SKIBKGC2.js";
import "../chunk-JUFDHIGR.js";
import {
  Univer
} from "../chunk-KR7DSM5D.js";
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
