import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {getSafesListReducer} from '../dashboard/safes/store/safes.reducer';
import {AppState} from './app.state';

import {environment} from '../../environments/environment';

export const reducers: ActionReducerMap<AppState> = {
  safesList: getSafesListReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
