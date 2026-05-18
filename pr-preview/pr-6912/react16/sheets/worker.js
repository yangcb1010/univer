import {
  UniverSheetsFilterPlugin
} from "../chunk-GO7FRYD3.js";
import {
  zh_CN_default
} from "../chunk-AFUFHWQX.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-YFEMWLGB.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-L7B5QXL4.js";
import "../chunk-44TTLR7G.js";
import {
  Univer
} from "../chunk-Z7OGNYY7.js";
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
