import {Component, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';

import {SafeInterface} from '../../interfaces/safe.interface';
import {SafesService} from '../../services/safes.service';
import {
  ModalConfirmComponent
} from '../../../../shared-modules/modals/modal-confirm/modal-confirm.component';
import {ModalInfoService} from '../../../../core/services/modal-info.service';
import {unsubscribe} from '../../../../core/utils/unsubscriber';

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
    private modalInfoService: ModalInfoService,
    private dialog: MatDialog,
    private router: Router,
  ) { }

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
      .subscribe(() => this.delete(this.safeId as string));
    this.subscriptions.push(dialogRefSub);
  }

  editSafe(event: Event, safe: SafeInterface): void {
    event.stopPropagation();
    event.stopImmediatePropagation();

    this.router.navigate(['/safes', safe._id, 'edit']);
  }

  private delete(categoryId: string): void {
    const deleteCategorySub = this.safesService.delete(categoryId)
      .subscribe(
        response => this.modalInfoService.onSuccess(response.message, '', '/safes'),
        error => this.modalInfoService.onError(error.error.message)
      );
    this.subscriptions.push(deleteCategorySub);
  }
}
