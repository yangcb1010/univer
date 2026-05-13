import {
  UniverActionRecorderPlugin
} from "./chunk-Y7M43UQG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-VF2KEBXJ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HTFD3RYV.js";
import {
  UniverUniscriptPlugin
} from "./chunk-6GI57EGO.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SZI64ZSL.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-MDTQQGZB.js";
import "./chunk-N23FGPN4.js";
import {
  UniverDebuggerPlugin
} from "./chunk-EZX7XWMV.js";
import "./chunk-AWNKVF6S.js";
import {
  UniverWatermarkPlugin
} from "./chunk-MQUWI3PU.js";
import "./chunk-H63KVAT5.js";
import "./chunk-JA5D6TEX.js";
import "./chunk-236MDHDL.js";
import "./chunk-MWQVPJR7.js";
import "./chunk-XN7KJFH7.js";
import "./chunk-2KXMFTFV.js";
import "./chunk-B3IMXL4W.js";
import "./chunk-QIR3WKC6.js";
import "./chunk-XNQGS7SY.js";
import "./chunk-4K3ZX35V.js";
import "./chunk-VV5VC3U2.js";
import "./chunk-Q4SWDG4I.js";
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
