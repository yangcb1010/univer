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

import path from 'node:path';
import fs from 'fs-extra';

const LOCALE_MAP = [
    'en-US',
    'fa-IR',
    'fr-FR',
    'ja-JP',
    'ko-KR',
    'ru-RU',
    'vi-VN',
    'zh-CN',
    'zh-TW',
    'es-ES',
    'ca-ES',
    'sk-SK',
];

export interface IMergeUmdOptions {
    packageDir: string;
    umdDeps: string[];
}

export function mergeUmd(options: IMergeUmdOptions) {
    const { packageDir, umdDeps } = options;
    const nodeModules = path.resolve(packageDir, 'node_modules');
    const umdIndex = path.resolve(packageDir, 'lib', 'umd', 'index.js');

    if (!fs.existsSync(umdIndex)) {
        console.warn(`[preset-build] UMD index not found: ${umdIndex}`);
        return;
    }

    const umdContentsMap: Map<string, string> = new Map();

    for (const dep of umdDeps) {
        const depIndex = path.resolve(nodeModules, dep, 'lib', 'umd', 'index.js');
        const depFacade = path.resolve(nodeModules, dep, 'lib', 'umd', 'facade.js');

        const indexKey = `${dep}/index`;
        if (fs.existsSync(depIndex) && !umdContentsMap.has(indexKey)) {
            umdContentsMap.set(indexKey, `// ${indexKey}\n${fs.readFileSync(depIndex, 'utf8')}`);
        }

        const facadeKey = `${dep}/facade`;
        if (fs.existsSync(depFacade) && !umdContentsMap.has(facadeKey)) {
            umdContentsMap.set(facadeKey, `// ${facadeKey}\n${fs.readFileSync(depFacade, 'utf8')}`);
        }
    }

    const selfKey = 'index';
    if (!umdContentsMap.has(selfKey)) {
        umdContentsMap.set(selfKey, `// ${selfKey}\n${fs.readFileSync(umdIndex, 'utf8')}`);
    }

    const umdContents = Array.from(umdContentsMap.values()).join('\n\n');
    fs.writeFileSync(umdIndex, umdContents);

    const localeDir = path.resolve(packageDir, 'lib', 'umd', 'locale');

    for (const localeKey of LOCALE_MAP) {
        const localeContentsMap: Map<string, string> = new Map();

        for (const dep of umdDeps) {
            const depLocale = path.resolve(nodeModules, dep, 'lib', 'umd', 'locale', `${localeKey}.js`);
            const depLocaleKey = `${dep}/locale/${localeKey}`;

            if (fs.existsSync(depLocale) && !localeContentsMap.has(depLocaleKey)) {
                localeContentsMap.set(depLocaleKey, `// ${depLocaleKey}\n${fs.readFileSync(depLocale, 'utf8')}`);
            }
        }

        const selfLocale = path.resolve(localeDir, `${localeKey}.js`);
        if (fs.existsSync(selfLocale)) {
            const selfLocaleKey = `locale/${localeKey}`;
            if (!localeContentsMap.has(selfLocaleKey)) {
                localeContentsMap.set(selfLocaleKey, `// ${selfLocaleKey}\n${fs.readFileSync(selfLocale, 'utf8')}`);
            }

            const localeContents = Array.from(localeContentsMap.values()).join('\n\n');
            fs.writeFileSync(selfLocale, localeContents);
        }
    }
}
