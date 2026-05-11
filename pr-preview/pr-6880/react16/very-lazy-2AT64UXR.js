import {
  UniverActionRecorderPlugin
} from "./chunk-N72GBPKE.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-HLPEZ4S6.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-LYMFFCQC.js";
import {
  UniverUniscriptPlugin
} from "./chunk-ICL7FMGD.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-IKY7Z3QV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-6BZG5Q3Y.js";
import "./chunk-YBUCIK7V.js";
import {
  UniverDebuggerPlugin
} from "./chunk-BXPGLELH.js";
import "./chunk-DLQQQ6TL.js";
import {
  UniverWatermarkPlugin
} from "./chunk-H4K4R77K.js";
import "./chunk-VAYLXXAC.js";
import "./chunk-WI7HCLLA.js";
import "./chunk-3CA3QHPS.js";
import "./chunk-PNMQSI4O.js";
import "./chunk-GSKOC6W7.js";
import "./chunk-ZQHAXEFM.js";
import "./chunk-BFEIRBRX.js";
import "./chunk-PR3VVPKQ.js";
import "./chunk-WR37YV5F.js";
import "./chunk-XRHCJDOX.js";
import "./chunk-UVACFJVH.js";
import "./chunk-P5ZL4OWA.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-multi-units/very-lazy.ts
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
