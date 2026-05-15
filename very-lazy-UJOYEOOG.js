import {
  UniverActionRecorderPlugin
} from "./chunk-MASGASCI.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-RO4WWJNB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-VZETWRCZ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-IQEHW476.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-MJCXZZPX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-BQEZHOEI.js";
import "./chunk-2XYIL5ZN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-Y3OF6O7P.js";
import "./chunk-5LZXVWXX.js";
import {
  UniverWatermarkPlugin
} from "./chunk-V7DYJCUH.js";
import "./chunk-VPDFLD3G.js";
import "./chunk-UGHNYCJA.js";
import "./chunk-SMSEC6NP.js";
import "./chunk-E2NDH4FI.js";
import "./chunk-CZ2URNVR.js";
import "./chunk-H6IYE7SK.js";
import "./chunk-MZFSBPQN.js";
import "./chunk-UP3YF7BF.js";
import "./chunk-3UYALPPF.js";
import "./chunk-7MK3IXAB.js";
import "./chunk-JM47KJF2.js";
import "./chunk-YOA52FQR.js";
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
