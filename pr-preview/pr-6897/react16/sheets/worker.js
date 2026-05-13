import {
  UniverSheetsFilterPlugin
} from "../chunk-2RTPDV7E.js";
import {
  zh_CN_default
} from "../chunk-GQMZKBK3.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-X3DBF32Z.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-2TFWPM3K.js";
import "../chunk-3Z2RTFRS.js";
import {
  Univer
} from "../chunk-VPXOLCB5.js";
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
