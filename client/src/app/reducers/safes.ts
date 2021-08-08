import {createAction, createReducer, on} from '@ngrx/store';
import {SafeInterface} from '../dashboard/safes/interfaces/safe.interface';

export const getSafesList = createAction('[SAFES] getSafesList');

export const initialState: SafeInterface[] = [];

export const getSafesListReducer = createReducer(
  initialState,
);
