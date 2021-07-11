import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

import {ModalInfoComponent} from 'src/app/shared-modules/modals/modal-info/modal-info.component';


@Injectable({
  providedIn: 'root'
})
export class ModalInfoService {
  dialogRefSub: any;

  constructor(public dialog: MatDialog, private router: Router) {
  }

  onSuccess(message: string, title?: string, router?: string): void {
    this.openModal(message, title || 'Спасибо!', router);
  }

  onError(error: string, title?: string, router?: string): void {
    this.openModal(error, title || 'Ошибка', router);
  }

  openModal(message: string, title: string, router?: string): void {
    this.dialogRefSub?.unsubscribe();

    const dialogRef = this.dialog.open(ModalInfoComponent, {
      data: {title, message},
      panelClass: ['primary-modal'],
      autoFocus: false
    });

    if (router) {
      this.dialogRefSub = dialogRef.afterClosed()
        .subscribe(() => this.router.navigate([router]));
    }
  }
}
