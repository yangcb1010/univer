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

import type { Observable, Subscription } from 'rxjs';
import type { IMenuSchema } from '../menu/menu-manager.service';
import { createIdentifier, Disposable, IUniverInstanceService } from '@univerjs/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { IMenuManagerService } from '../menu/menu-manager.service';
import { MenuManagerPosition, RibbonPosition } from '../menu/types';

export const IRibbonService = createIdentifier<IRibbonService>('univer.ribbon-service');

export interface IRibbonService {
    ribbon$: Observable<IMenuSchema[]>;
    activatedTab$: Observable<string>;
    collapsedIds$: Observable<string[]>;
    fakeToolbarVisible$: Observable<boolean>;

    setActivatedTab(tab: string): void;
    setCollapsedIds(ids: string[]): void;
    setFakeToolbarVisible(visible: boolean): void;
}

export class DesktopRibbonService extends Disposable implements IRibbonService {
    private readonly _ribbon$ = new BehaviorSubject<IMenuSchema[]>([]);
    readonly ribbon$ = this._ribbon$.asObservable();

    private readonly _activatedTab$ = new BehaviorSubject<string>(RibbonPosition.START);
    readonly activatedTab$ = this._activatedTab$.asObservable();

    private readonly _collapsedIds$ = new BehaviorSubject<string[]>([]);
    readonly collapsedIds$ = this._collapsedIds$.asObservable();

    private readonly _fakeToolbarVisible$ = new BehaviorSubject<boolean>(false);
    readonly fakeToolbarVisible$ = this._fakeToolbarVisible$.asObservable();

    private _previousNonContextualTab: string = RibbonPosition.START;
    private _hiddenSubscription: Subscription | null = null;

    constructor(
        @IMenuManagerService private readonly _menuManagerService: IMenuManagerService,
        @IUniverInstanceService private readonly _univerInstanceService: IUniverInstanceService
    ) {
        super();
        this._initRibbonSubscription();
    }

    setActivatedTab(tab: string): void {
        this._activatedTab$.next(tab);
    }

    setCollapsedIds(ids: string[]): void {
        this._collapsedIds$.next(ids);
    }

    setFakeToolbarVisible(visible: boolean): void {
        this._fakeToolbarVisible$.next(visible);
    }

    private _initRibbonSubscription(): void {
        this.disposeWithMe(
            combineLatest([
                this._menuManagerService.menuChanged$.pipe(startWith(undefined)),
                this._univerInstanceService.focused$.pipe(startWith(undefined)),
            ]).subscribe(() => {
                this._updateRibbon();
            })
        );
    }

    private _updateRibbon() {
        const previousRibbon = this._ribbon$.getValue();
        const ribbon = this._menuManagerService.getMenuByPositionKey(MenuManagerPosition.RIBBON);

        // Collect all hidden$ Observables and their corresponding paths at all levels
        const hiddenObservableMap: Observable<boolean>[] = [];
        const hiddenKeyMap: string[] = [];
        const hiddenLevelMap: ('tab' | 'group' | 'child')[] = [];

        for (const tab of ribbon) {
            if (tab.item?.hidden$) {
                hiddenObservableMap.push(tab.item.hidden$);
                hiddenKeyMap.push(tab.key);
                hiddenLevelMap.push('tab');
            }

            if (tab.children) {
                for (const group of tab.children) {
                    if (group.item?.hidden$) {
                        hiddenObservableMap.push(group.item.hidden$);
                        hiddenKeyMap.push(group.key);
                        hiddenLevelMap.push('group');
                    }

                    if (group.children) {
                        for (const child of group.children) {
                            if (child.item?.hidden$) {
                                hiddenObservableMap.push(child.item.hidden$);
                                hiddenKeyMap.push(child.key);
                                hiddenLevelMap.push('child');
                            }
                        }
                    }
                }
            }
        }

        // Clean up previous continuous subscription
        this._hiddenSubscription?.unsubscribe();
        this._hiddenSubscription = null;

        if (hiddenObservableMap.length === 0) {
            this._ribbon$.next(ribbon);
            this._ensureActivatedTab(ribbon, previousRibbon);
            return;
        }

        this._hiddenSubscription = combineLatest(hiddenObservableMap).subscribe((hiddenMap) => {
            const hiddenTabKeys = new Set<string>();
            const hiddenGroupKeys = new Set<string>();
            const hiddenChildKeys = new Set<string>();

            hiddenMap.forEach((hidden, index) => {
                if (hidden) {
                    const level = hiddenLevelMap[index];
                    const key = hiddenKeyMap[index];

                    if (level === 'tab') {
                        hiddenTabKeys.add(key);
                    } else if (level === 'group') {
                        hiddenGroupKeys.add(key);
                    } else if (level === 'child') {
                        hiddenChildKeys.add(key);
                    }
                }
            });

            const newRibbon: IMenuSchema[] = [];

            for (const tab of ribbon) {
                if (hiddenTabKeys.has(tab.key)) {
                    continue;
                }

                const newTab: IMenuSchema = { ...tab, children: [] };

                if (tab.children?.length) {
                    for (const group of tab.children) {
                        if (hiddenGroupKeys.has(group.key)) {
                            continue;
                        }

                        const newGroup: IMenuSchema = { ...group, children: [] };
                        let shouldAddGroup = true;

                        if (group.children?.length) {
                            for (const child of group.children) {
                                if (!hiddenChildKeys.has(child.key)) {
                                    newGroup.children?.push(child);
                                }
                            }

                            if (newGroup.children?.every((child) => child.children?.length === 0)) {
                                shouldAddGroup = false;
                            }
                        }

                        if (shouldAddGroup) {
                            newTab.children?.push(newGroup);
                        }
                    }
                }

                if (newTab.children?.length && newTab.children.every((item) => item.children?.length)) {
                    newRibbon.push(newTab);
                }
            }

            this._ribbon$.next(newRibbon);
            this._ensureActivatedTab(newRibbon, previousRibbon);
        });
    }

    private _ensureActivatedTab(newRibbon: IMenuSchema[], previousRibbon: IMenuSchema[]) {
        const currentTab = this._activatedTab$.getValue();
        const currentTabSchema = newRibbon.find((tab) => tab.key === currentTab);

        // Current tab disappeared and it was a contextual tab, fallback to previous non-contextual tab
        if (!currentTabSchema) {
            const previousTabSchema = previousRibbon.find((tab) => tab.key === currentTab);
            if (previousTabSchema?.contextual) {
                const fallbackTab = newRibbon.some((tab) => tab.key === this._previousNonContextualTab)
                    ? this._previousNonContextualTab
                    : (newRibbon.find((tab) => !tab.contextual)?.key ?? RibbonPosition.START);
                this._activatedTab$.next(fallbackTab);
            }
            return;
        }

        // Check if any new contextual tab has appeared
        const newlyVisibleContextualTabs = newRibbon.filter((tab) =>
            tab.contextual && !previousRibbon.some((prevTab) => prevTab.key === tab.key)
        );

        if (newlyVisibleContextualTabs.length > 0 && !currentTabSchema.contextual) {
            this._previousNonContextualTab = currentTab;
            this._activatedTab$.next(newlyVisibleContextualTabs[0].key);
        }
    }

    override dispose(): void {
        this._hiddenSubscription?.unsubscribe();
        this._hiddenSubscription = null;
        super.dispose();
    }
}
