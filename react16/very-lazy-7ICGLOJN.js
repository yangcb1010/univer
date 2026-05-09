import {
  UniverActionRecorderPlugin
} from "./chunk-YRC2KPZS.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-7T6KJ4QK.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-V6BPXH7H.js";
import {
  UniverUniscriptPlugin
} from "./chunk-QSIWEAJK.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-P5PZOYDG.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-7CDPCVSH.js";
import "./chunk-353ZO7XQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-XUE6O4LZ.js";
import "./chunk-HCRGPSDJ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-P6GJDIO6.js";
import "./chunk-XBXA3DJP.js";
import "./chunk-4V6L5VS2.js";
import "./chunk-CA6BASOU.js";
import "./chunk-UEGJKLYL.js";
import "./chunk-SL6XXP2Q.js";
import "./chunk-5Y64OFFG.js";
import "./chunk-OYA3IJPL.js";
import "./chunk-HA5W7BKS.js";
import "./chunk-VINBWQOG.js";
import "./chunk-FDT4RW2X.js";
import "./chunk-ZTS2ZX44.js";
import "./chunk-NOOMCMF4.js";
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
