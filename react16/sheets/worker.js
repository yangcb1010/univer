import {
  UniverSheetsFilterPlugin
} from "../chunk-236MDHDL.js";
import {
  zh_CN_default
} from "../chunk-S573LOWI.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-XNQGS7SY.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-4K3ZX35V.js";
import "../chunk-VV5VC3U2.js";
import {
  Univer
} from "../chunk-Q4SWDG4I.js";
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
