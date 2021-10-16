import {Component, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';

import {SafeInterface} from '../../interfaces/safe.interface';
import {SafesService} from '../../services/safes.service';
import {
  ModalConfirmComponent
} from '../../../../shared-modules/modals/modal-confirm/modal-confirm.component';
import {unsubscribe} from '../../../../core/utils/unsubscriber';
import {deleteSafe} from '../../store/safes.actions';

@Component({
  selector: 'app-safe',
  templateUrl: './safe.component.html',
  styleUrls: ['./safe.component.scss']
})
export class SafeComponent implements OnDestroy {
  safeId = this.route.snapshot.params.id;

  safe$: Observable<SafeInterface> = this.safesService.getById(this.safeId);

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private safesService: SafesService,
    private dialog: MatDialog,
    private store: Store,
  ) {
  }

  ngOnDestroy(): void {
    unsubscribe(this.subscriptions);
  }

  onDelete(): void {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      data: {text: 'Вы уверены, что хотите удалить сейф?'},
      panelClass: ['primary-modal'],
      autoFocus: false
    });

    const dialogRefSub = dialogRef.afterClosed()
      .pipe(filter((result) => result))
      .subscribe(() => this.store.dispatch(deleteSafe({id: this.safeId})));
    this.subscriptions.push(dialogRefSub);
  }
}
