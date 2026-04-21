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

/* eslint-disable no-console */

import path from 'node:path';
import process from 'node:process';
import fs from 'fs-extra';
import { build as univerBuild } from '../tsdown/index';
import { mergeCss } from './merge-css';
import { mergeUmd } from './merge-umd';
import { prepareLocales } from './prepare-locales';

interface IPresetConfig {
    umdDeps: string[];
}

function readPresetConfig(packageDir: string): IPresetConfig | null {
    const pkgPath = path.resolve(packageDir, 'package.json');
    if (!fs.existsSync(pkgPath)) {
        return null;
    }

    const pkg = fs.readJsonSync(pkgPath);
    const presetConfig = pkg.univerPreset as IPresetConfig | undefined;

    if (!presetConfig || !Array.isArray(presetConfig.umdDeps)) {
        return null;
    }

    return presetConfig;
}

export async function buildPreset() {
    const packageDir = process.cwd();
    const presetConfig = readPresetConfig(packageDir);

    if (!presetConfig) {
        throw new Error(
            '[preset-build] No "univerPreset" field found in package.json. ' +
            'Please define it to use preset-build, or use "univer-cli build" instead.'
        );
    }

    const localesDir = path.resolve(packageDir, 'src', 'locales');
    const localeDir = path.resolve(packageDir, 'src', 'locale');
    const hasLocales = fs.existsSync(localesDir);

    // Temporarily move src/locales to src/locale so tsdown can detect locale entries
    if (hasLocales) {
        if (fs.existsSync(localeDir)) {
            fs.copySync(localesDir, localeDir, { overwrite: true });
        } else {
            fs.moveSync(localesDir, localeDir);
        }
    }

    try {
        await univerBuild({});
    } finally {
        // Move back to src/locales
        if (hasLocales) {
            if (fs.existsSync(localesDir)) {
                fs.removeSync(localesDir);
            }
            fs.moveSync(localeDir, localesDir);
        }
    }

    console.log('[preset-build] Merging UMD dependencies...');
    mergeUmd({ packageDir, umdDeps: presetConfig.umdDeps });

    console.log('[preset-build] Merging CSS...');
    mergeCss({ packageDir, umdDeps: presetConfig.umdDeps });

    console.log('[preset-build] Done.');
}

export function preparePreset() {
    const packageDir = process.cwd();
    const presetConfig = readPresetConfig(packageDir);

    if (!presetConfig) {
        throw new Error(
            '[preset-build] No "univerPreset" field found in package.json. ' +
            'Please define it to use preset-build, or use "univer-cli build" instead.'
        );
    }

    console.log('[preset-build] Preparing locales...');
    prepareLocales({ packageDir });
}
