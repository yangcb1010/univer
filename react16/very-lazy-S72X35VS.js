import {
  UniverActionRecorderPlugin
} from "./chunk-CPQJA24V.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-5HQJASSS.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-67WRTRNY.js";
import {
  UniverUniscriptPlugin
} from "./chunk-MMBGVIJT.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-T4OKYBCZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-L4HCDSGX.js";
import "./chunk-YA7YISPC.js";
import {
  UniverDebuggerPlugin
} from "./chunk-CPOSXUCB.js";
import "./chunk-RTJNLQRI.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4XWTSGLC.js";
import "./chunk-44DQGWIZ.js";
import "./chunk-4V6L5VS2.js";
import "./chunk-SI4UQ4IL.js";
import "./chunk-VHH2RN2I.js";
import "./chunk-OMG3L5H5.js";
import "./chunk-AYYW5URE.js";
import "./chunk-BZUZQPEL.js";
import "./chunk-I3IHURGK.js";
import "./chunk-UV2TQX2B.js";
import "./chunk-JIJMXB67.js";
import "./chunk-EXOTAHLR.js";
import "./chunk-NOOMCMF4.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-no-worker/very-lazy.ts
var IS_E2E = false;
function getVeryLazyPlugins() {
  const plugins = [
    [UniverActionRecorderPlugin],
    [UniverSheetsHyperLinkUIPlugin],
    [UniverSheetsSortUIPlugin],
    [UniverSheetsCrosshairHighlightPlugin],
    [UniverSheetsFindReplacePlugin],
    [UniverWatermarkPlugin]
  ];
  if (!IS_E2E) {
    plugins.push([UniverDebuggerPlugin]);
    plugins.push([UniverUniscriptPlugin, {
      getWorkerUrl(_, label) {
        if (label === "json") {
          return "/vs/language/json/json.worker.js";
        }
        if (label === "css" || label === "scss" || label === "less") {
          return "/vs/language/css/css.worker.js";
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return "/vs/language/html/html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
          return "/vs/language/typescript/ts.worker.js";
        }
        return "/vs/editor/editor.worker.js";
      }
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
