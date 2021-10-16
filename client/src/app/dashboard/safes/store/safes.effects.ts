import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

import {SafesService} from '../services/safes.service';
import {
  getSafesList,
  deleteSafe,
  getSafesListSuccess,
  deletedSafeSuccess,
  deletedSafeError
} from './safes.actions';
import {SafeInterface} from '../interfaces/safe.interface';
import {ModalInfoComponent} from '../../../shared-modules/modals/modal-info/modal-info.component';
import {
  modalInfoPrimaryConfigs
} from '../../../shared-modules/modals/modal-info/modal-info.configs';


@Injectable()
export class SafesEffects {
  constructor(
    private actions$: Actions,
    private safesService: SafesService,
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  getSafesList$ = createEffect(() => this.actions$.pipe(
    ofType(getSafesList),
    mergeMap(() => this.safesService.fetch()
      .pipe(
        map((safesList: ReadonlyArray<SafeInterface>) => getSafesListSuccess({safesList}))
      )
    )
  ));

  deleteSafe$ = createEffect(() => this.actions$.pipe(
    ofType(deleteSafe),
    mergeMap((action: { id: string }) => this.safesService.delete(action.id)
      .pipe(
        map((result: { message: string }) => deletedSafeSuccess({...result})),
        catchError(() => of(deletedSafeError({message: 'Сейф не найден'}))),
      )
    )
  ));

  deletedSafeSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(deletedSafeSuccess),
    mergeMap((action: { message: string }) => {
      return this.dialog.open(ModalInfoComponent, {
        data: {
          title: 'Спасибо!',
          message: action.message
        },
        ...modalInfoPrimaryConfigs
      }).afterClosed();
    }),
    mergeMap(() => of(getSafesList())),
    tap(() => this.router.navigate(['/safes']))
  ));

  deletedSafeError$ = createEffect(() => this.actions$.pipe(
    ofType(deletedSafeError),
    mergeMap((action: { message: string }) => {
      this.dialog.open(ModalInfoComponent, {
        data: {
          title: 'Ошибка',
          message: action.message
        },
        ...modalInfoPrimaryConfigs
      });

      return of(getSafesList());
    })
  ));
}
