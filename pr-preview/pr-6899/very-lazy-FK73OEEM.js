import {
  UniverActionRecorderPlugin
} from "./chunk-6FKYPXC6.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-XHCG7XNK.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-H4P4I2LK.js";
import {
  UniverUniscriptPlugin
} from "./chunk-RLPVJID5.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-244QHHFW.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5ONPP6SA.js";
import "./chunk-ELYUA5YV.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VA5ZIAMS.js";
import "./chunk-CZGSQSMW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-CWE37RHB.js";
import "./chunk-L4LYKAT4.js";
import "./chunk-5YPNXYNB.js";
import "./chunk-DVUVBIMK.js";
import "./chunk-WPLS64ZG.js";
import "./chunk-WVDN2JZP.js";
import "./chunk-TD2DEW6R.js";
import "./chunk-TMJZYKRE.js";
import "./chunk-FUCYJVPX.js";
import "./chunk-ZHRNBNEW.js";
import "./chunk-X3TVBUYV.js";
import "./chunk-LG44BJ6D.js";
import "./chunk-PTL6IILL.js";
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
