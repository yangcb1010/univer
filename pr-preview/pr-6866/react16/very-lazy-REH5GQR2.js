import {
  UniverActionRecorderPlugin
} from "./chunk-6MAWFGQ7.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-EGOJCEB7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2QCUKH2E.js";
import {
  UniverUniscriptPlugin
} from "./chunk-6YDEYIT2.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-RSF7XMUP.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-KKV3QKTV.js";
import "./chunk-LKATHMSP.js";
import {
  UniverDebuggerPlugin
} from "./chunk-72NYIP7Y.js";
import "./chunk-ZFH77GPG.js";
import {
  UniverWatermarkPlugin
} from "./chunk-PM423B6G.js";
import "./chunk-CBRFK5VY.js";
import "./chunk-7XPO2AQS.js";
import "./chunk-4ZQGBAYD.js";
import "./chunk-3AX5ENAM.js";
import "./chunk-FQKNDD33.js";
import "./chunk-NAYBDI4U.js";
import "./chunk-R4IQRFDR.js";
import "./chunk-FAIPPTBO.js";
import "./chunk-N3XEYTT4.js";
import "./chunk-BJXWUOHT.js";
import "./chunk-IBWPTMH2.js";
import "./chunk-TRDRCMG7.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets/very-lazy.ts
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
