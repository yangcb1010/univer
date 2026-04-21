/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { LocaleType, LogLevel, UniverInstanceType } from '@univerjs/core';
import { DEFAULT_WORKBOOK_DATA_DEMO } from '@univerjs/mockdata';
import caES from '@univerjs/mockdata/locales/ca-ES';
import enUS from '@univerjs/mockdata/locales/en-US';
import esES from '@univerjs/mockdata/locales/es-ES';
import faIR from '@univerjs/mockdata/locales/fa-IR';
import frFR from '@univerjs/mockdata/locales/fr-FR';
import jaJP from '@univerjs/mockdata/locales/ja-JP';
import koKR from '@univerjs/mockdata/locales/ko-KR';
import ruRU from '@univerjs/mockdata/locales/ru-RU';
import skSK from '@univerjs/mockdata/locales/sk-SK';
import viVN from '@univerjs/mockdata/locales/vi-VN';
import zhCN from '@univerjs/mockdata/locales/zh-CN';
import zhTW from '@univerjs/mockdata/locales/zh-TW';
import { UniverSheetsCorePreset } from '@univerjs/preset-sheets-core';
import { UniverSheetsDrawingPreset } from '@univerjs/preset-sheets-drawing';
import { UniverSheetsFilterPreset } from '@univerjs/preset-sheets-filter';
import { UniverSheetsFindReplacePreset } from '@univerjs/preset-sheets-find-replace';
import { UniverSheetsHyperLinkPreset } from '@univerjs/preset-sheets-hyper-link';
import { UniverSheetsNotePreset } from '@univerjs/preset-sheets-note';
import { UniverSheetsSortPreset } from '@univerjs/preset-sheets-sort';
import { UniverSheetsThreadCommentPreset } from '@univerjs/preset-sheets-thread-comment';
import { createUniver } from '@univerjs/presets';

import '../global.css';

const worker = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });

const { univer, univerAPI } = createUniver({
    locale: LocaleType.ZH_CN,
    locales: {
        [LocaleType.CA_ES]: caES,
        [LocaleType.EN_US]: enUS,
        [LocaleType.ES_ES]: esES,
        [LocaleType.FA_IR]: faIR,
        [LocaleType.FR_FR]: frFR,
        [LocaleType.JA_JP]: jaJP,
        [LocaleType.KO_KR]: koKR,
        [LocaleType.RU_RU]: ruRU,
        [LocaleType.VI_VN]: viVN,
        [LocaleType.ZH_CN]: zhCN,
        [LocaleType.ZH_TW]: zhTW,
        [LocaleType.SK_SK]: skSK,
    },
    logLevel: LogLevel.VERBOSE,
    presets: [
        UniverSheetsCorePreset({
            container: 'app',
            workerURL: worker,
        }),
        UniverSheetsFilterPreset(),
        UniverSheetsSortPreset(),
        UniverSheetsFindReplacePreset(),
        UniverSheetsHyperLinkPreset(),
        UniverSheetsNotePreset(),
        UniverSheetsThreadCommentPreset(),
        UniverSheetsDrawingPreset(),
    ],
});

univer.createUnit(UniverInstanceType.UNIVER_SHEET, DEFAULT_WORKBOOK_DATA_DEMO);

window.univer = univer;
window.univerAPI = univerAPI;

declare global {
    // eslint-disable-next-line ts/naming-convention
    interface Window {
        univer?: ReturnType<typeof createUniver>['univer'];
        univerAPI?: ReturnType<typeof createUniver>['univerAPI'];
    }
}
