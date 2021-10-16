import {createAction, props} from '@ngrx/store';

import {SafeInterface} from '../interfaces/safe.interface';

export const getSafesList = createAction(
  '[API/SAFES ListComponent] getSafesList'
);

export const getSafesListSuccess = createAction(
  '[SAFES ListComponent] getSafesListSuccess',
  props<{safesList: ReadonlyArray<SafeInterface>}>()
);

export const deleteSafe = createAction(
  '[API/SAFES SafeComponent] delete',
  props<{id: Readonly<string>}>()
)

export const deletedSafeSuccess = createAction(
  '[API/SAFES SafeComponent] deletedSuccess',
  props<{message: Readonly<string>}>()
)

export const deletedSafeError = createAction(
  '[API/SAFES SafeComponent] deletedError',
  props<{message: Readonly<string>}>()
)
