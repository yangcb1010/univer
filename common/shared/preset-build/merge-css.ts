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

export interface IMergeCssOptions {
    packageDir: string;
    umdDeps: string[];
}

export function mergeCss(options: IMergeCssOptions) {
    const { packageDir, umdDeps } = options;
    const nodeModules = path.resolve(packageDir, 'node_modules');
    const outputCss = path.resolve(packageDir, 'lib', 'index.css');

    const cssParts: string[] = [];

    for (const dep of umdDeps) {
        const depCss = path.resolve(nodeModules, dep, 'lib', 'index.css');
        if (fs.existsSync(depCss)) {
            cssParts.push(`/* ${dep} */\n${fs.readFileSync(depCss, 'utf8')}`);
        }
    }

    const selfCss = path.resolve(packageDir, 'lib', 'es', 'index.css');
    if (fs.existsSync(selfCss)) {
        cssParts.push(`/* self */\n${fs.readFileSync(selfCss, 'utf8')}`);
    }

    if (cssParts.length > 0) {
        fs.ensureDirSync(path.dirname(outputCss));
        fs.writeFileSync(outputCss, cssParts.join('\n\n'));
    }
}
