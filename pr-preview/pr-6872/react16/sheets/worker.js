import {
  UniverSheetsFilterPlugin
} from "../chunk-X2R3TNXY.js";
import {
  zh_CN_default
} from "../chunk-XSVQCYTF.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-IXDOPMZO.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-AXB7KB7I.js";
import "../chunk-57HMVZV2.js";
import {
  Univer
} from "../chunk-J4TGZIZO.js";
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
