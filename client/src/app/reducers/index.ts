import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {SafeInterface} from '../dashboard/safes/interfaces/safe.interface';
import {getSafesListReducer} from './safes';

export interface State {
  safesList: SafeInterface[]
}

export const reducers: ActionReducerMap<State> = {
  safesList: getSafesListReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
