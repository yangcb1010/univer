import {
  UniverActionRecorderPlugin
} from "./chunk-E25EXJP7.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-BUN5IJPW.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-LNCCB2VP.js";
import {
  UniverUniscriptPlugin
} from "./chunk-TAI3H5NB.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-3N2KRKLA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-E7YKKF6O.js";
import "./chunk-OKTSBE2K.js";
import {
  UniverDebuggerPlugin
} from "./chunk-HKAIO34R.js";
import "./chunk-MEZG7G4Z.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Q2HZ6DDG.js";
import "./chunk-DJWHVD66.js";
import "./chunk-DQJ4ICFF.js";
import "./chunk-42IRN2CZ.js";
import "./chunk-DSWSTBTR.js";
import "./chunk-WXEDAHSD.js";
import "./chunk-ZDLDEJRU.js";
import "./chunk-YSE4D6PG.js";
import "./chunk-I2OYHXFH.js";
import "./chunk-JTSNRN7X.js";
import "./chunk-Y45V7LNH.js";
import "./chunk-XJLBVLLP.js";
import "./chunk-FYOWE623.js";
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
