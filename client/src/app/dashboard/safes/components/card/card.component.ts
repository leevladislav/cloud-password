import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {filter} from 'rxjs/operators';
import {Subscription} from 'rxjs';

import {SafeInterface} from '../../interfaces/safe.interface';
import {
  ModalConfirmComponent
} from '../../../../shared-modules/modals/modal-confirm/modal-confirm.component';
import {SafesService} from '../../services/safes.service';
import {ModalInfoService} from '../../../../core/services/modal-info.service';
import {unsubscribe} from '../../../../core/utils/unsubscriber';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() safe!: SafeInterface;

  private subscriptions: Subscription[] = [];

  constructor(
    private safesService: SafesService,
    private modalInfoService: ModalInfoService,
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit(): void {
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
      .subscribe(() => this.delete());
    this.subscriptions.push(dialogRefSub);
  }

  private delete(): void {
    const deleteCategorySub = this.safesService.delete(this.safe._id)
      .subscribe(
        response => this.modalInfoService.onSuccess(response.message, '', '/safes'),
        error => this.modalInfoService.onError(error.error.message)
      );
    this.subscriptions.push(deleteCategorySub);
  }
}
