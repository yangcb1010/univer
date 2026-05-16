import {
  UniverSheetsFilterPlugin
} from "../chunk-5GUKOR6W.js";
import {
  zh_CN_default
} from "../chunk-FQOL7KBV.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-SQCOW24S.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-IQTDWG6Y.js";
import "../chunk-IJCL4KTE.js";
import {
  Univer
} from "../chunk-6IO55AU2.js";
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
