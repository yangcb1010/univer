import {
  UniverSheetsFilterPlugin
} from "../chunk-I7GRZ3JG.js";
import {
  zh_CN_default
} from "../chunk-OROQCTWB.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-SUG55IJG.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-BAAR53DJ.js";
import "../chunk-VYDPVHQH.js";
import {
  Univer
} from "../chunk-UI3TUZSE.js";
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
