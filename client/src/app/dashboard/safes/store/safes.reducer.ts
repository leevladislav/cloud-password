import {createReducer} from '@ngrx/store';

import {SafeInterface} from '../interfaces/safe.interface';

export const initialState: Readonly<SafeInterface[]> = [];

export const getSafesListReducer = createReducer(
  initialState,
);
