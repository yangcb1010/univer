import {
  UniverSheetsFilterPlugin
} from "../chunk-4ZQGBAYD.js";
import {
  zh_CN_default
} from "../chunk-OS3D5ST2.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-N3XEYTT4.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-BJXWUOHT.js";
import "../chunk-IBWPTMH2.js";
import {
  Univer
} from "../chunk-TRDRCMG7.js";
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
