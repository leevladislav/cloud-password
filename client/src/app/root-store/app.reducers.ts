import {ActionReducerMap, MetaReducer} from '@ngrx/store';

import {getSafesListReducer} from '../dashboard/safes/store/safes.reducers';
import {AppState} from './app.state';
import {environment} from '../../environments/environment';
import {safesListKey} from '../dashboard/safes/store/safes.keys';

export const reducers: ActionReducerMap<AppState> = {
  [safesListKey]: getSafesListReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
