import {createFeatureSelector} from '@ngrx/store';

import {SafeInterface} from '../interfaces/safe.interface';
import {safesListKey} from './safes.keys';

export const safesListSelector = createFeatureSelector<SafeInterface[]>(safesListKey);
