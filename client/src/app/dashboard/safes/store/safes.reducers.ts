import {createReducer, on} from '@ngrx/store';

import {SafeInterface} from '../interfaces/safe.interface';
import {getSafesListSuccess} from './safes.actions';

export const initialState: Readonly<SafeInterface[]> = [];

export const getSafesListReducer = createReducer(
  initialState,
  on(getSafesListSuccess, (state, {safesList}) => safesList),
);
