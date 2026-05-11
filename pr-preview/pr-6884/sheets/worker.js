import {
  UniverSheetsFilterPlugin
} from "../chunk-XR5A5UPZ.js";
import {
  zh_CN_default
} from "../chunk-RRHMR4LS.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-3U7B7NL2.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-3RGSYIGA.js";
import "../chunk-RM5FPLUF.js";
import {
  Univer
} from "../chunk-RWQ2JXPY.js";
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
