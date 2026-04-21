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

import type { IAccessor, IDrawingParam } from '@univerjs/core';
import type { IMenuButtonItem } from '@univerjs/ui';
import { IDrawingManagerService } from '@univerjs/drawing';
import { MenuItemType } from '@univerjs/ui';
import { Observable } from 'rxjs';

export const DRAWING_FORMAT_RIBBON_TAB_KEY = 'ribbon.drawingFormat';

export function DrawingFormatTabMenuItemFactory(accessor: IAccessor): IMenuButtonItem {
    const drawingManagerService = accessor.get(IDrawingManagerService);
    return {
        id: DRAWING_FORMAT_RIBBON_TAB_KEY,
        type: MenuItemType.BUTTON,
        title: DRAWING_FORMAT_RIBBON_TAB_KEY,
        hidden$: new Observable<boolean>((subscriber) => {
            const update = (drawings: IDrawingParam[]) => {
                subscriber.next(!drawings || drawings.length === 0);
            };
            const subscription = drawingManagerService.focus$.subscribe(update);
            update(drawingManagerService.getFocusDrawings());
            return () => subscription.unsubscribe();
        }),
    };
}
