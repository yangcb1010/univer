#!/usr/bin/env -S node --import tsx/esm
/* eslint-disable header/header, antfu/no-top-level-await */

import process from 'node:process';
import { buildPreset, preparePreset } from '../preset-build/index';

const command = process.argv[2];

if (command === 'prepare') {
    preparePreset();
} else {
    await buildPreset();
}
