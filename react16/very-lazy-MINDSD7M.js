import {
  UniverActionRecorderPlugin
} from "./chunk-YJCDSOZU.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-A7KHNDUA.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-LW2M7KLX.js";
import {
  UniverUniscriptPlugin
} from "./chunk-ECOEORBD.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-DD7R4KMQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-BUJB762D.js";
import "./chunk-YCC4ZPL6.js";
import {
  UniverDebuggerPlugin
} from "./chunk-AS5OIEYG.js";
import "./chunk-CPWAVUZM.js";
import {
  UniverWatermarkPlugin
} from "./chunk-QJEPBMSQ.js";
import "./chunk-EAFNY4J2.js";
import "./chunk-WI7HCLLA.js";
import "./chunk-2J3YGWMK.js";
import "./chunk-RZOWVJML.js";
import "./chunk-DE5YNP5X.js";
import "./chunk-OPD4PUDO.js";
import "./chunk-J6QBGV2F.js";
import "./chunk-SLUFDUGD.js";
import "./chunk-O2VJFVEB.js";
import "./chunk-7RBMYMDA.js";
import "./chunk-FHFEAUF6.js";
import "./chunk-P5ZL4OWA.js";
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
