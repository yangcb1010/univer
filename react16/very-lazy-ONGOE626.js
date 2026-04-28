import {
  UniverActionRecorderPlugin
} from "./chunk-CELN6GYG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ACHW27Z5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-F3NEKQID.js";
import {
  UniverUniscriptPlugin
} from "./chunk-LCTNWFEO.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-RYBLURPO.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-RZAQZWYU.js";
import "./chunk-6IIG3KQP.js";
import {
  UniverDebuggerPlugin
} from "./chunk-L2IZ4MPG.js";
import "./chunk-A5NTNKI6.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2Q5Y46ZC.js";
import "./chunk-CDSWRAZH.js";
import "./chunk-HM2RZA4P.js";
import "./chunk-I2DDQDZG.js";
import "./chunk-MVJBX27N.js";
import "./chunk-BW3AQV7J.js";
import "./chunk-5DFHNS3X.js";
import "./chunk-XHMTLDV6.js";
import "./chunk-JAWGSHYY.js";
import "./chunk-XA52HE7O.js";
import "./chunk-4MIBPMPZ.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
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
