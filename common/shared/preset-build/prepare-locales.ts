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

function convertImportNameFromPackageName(name: string) {
    return name
        .replace(/^@univerjs(?:-[^/]+)?\//, 'univerjs')
        .replace(/-/g, '');
}

export interface IPrepareLocalesOptions {
    packageDir: string;
}

export function prepareLocales(options: IPrepareLocalesOptions) {
    const { packageDir } = options;
    const pkg = fs.readJsonSync(path.resolve(packageDir, 'package.json'));
    const localesDir = path.resolve(packageDir, 'src', 'locales');

    fs.ensureDirSync(localesDir);

    for (const localeKey of LOCALE_MAP) {
        let content = '/* eslint-disable */\n\n';
        content += 'import { mergeLocales } from \'@univerjs/core\';\n\n';
        const depsSet = new Set<string>();

        for (const key of Object.keys(pkg.dependencies || {})) {
            if (key.startsWith('@univerjs')) {
                const pkgLocalesDir = path.resolve(packageDir, 'node_modules', key, 'src', 'locale');
                const hasLocales = fs.existsSync(pkgLocalesDir);

                if (hasLocales) {
                    depsSet.add(key);
                }
            }
        }

        for (const key of depsSet) {
            content += `import ${convertImportNameFromPackageName(key)} from '${key}/locale/${localeKey}';\n`;
        }

        content += '\nexport default mergeLocales(\n';

        for (const key of depsSet) {
            content += `    ${convertImportNameFromPackageName(key)},\n`;
        }

        content += ');\n';

        fs.writeFileSync(path.resolve(localesDir, `${localeKey}.ts`), content);
    }
}
