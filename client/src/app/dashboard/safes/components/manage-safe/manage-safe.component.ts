import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {of, Subscription} from 'rxjs';
import {filter, switchMap} from 'rxjs/operators';

import {ModalInfoService} from '../../../../core/services/modal-info.service';
import {SafesService} from '../../services/safes.service';
import {unsubscribe} from '../../../../core/utils/unsubscriber';
import {
  SafeCreateParamsInterface,
  SafeUpdateParamsInterface
} from '../../interfaces/safe-params.interface';
import {SafeInterface} from '../../interfaces/safe.interface';
import {
  ModalConfirmComponent
} from '../../../../shared-modules/modals/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-manage-safe',
  templateUrl: './manage-safe.component.html',
  styleUrls: ['./manage-safe.component.scss']
})
export class ManageSafeComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    name: [null, [Validators.required]]
  });

  isNew = true;

  safe!: SafeInterface;

  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private safesService: SafesService,
    private modalInfoService: ModalInfoService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getSafe();
  }

  ngOnDestroy(): void {
    unsubscribe(this.subscriptions);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    this.form.disable();
    this.isNew ? this.create() : this.update();
  }

  onDelete(): void {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      data: {text: 'Вы уверены, что хотите удалить сейф?'},
      panelClass: ['primary-modal'],
      autoFocus: false
    });

    const dialogRefSub = dialogRef.afterClosed()
      .pipe(filter((result) => result))
      .subscribe(() => this.delete(this.safe._id as string));
    this.subscriptions.push(dialogRefSub);
  }

  private getSafe(): void {
    const getSafeSub = this.route.params.pipe(
      switchMap(
        (params: Params) => {
          if (params.id) {
            this.isNew = false;
            return this.safesService.getById(params.id);
          }

          return of(null);
        }
      )
    ).subscribe(
      (safe: SafeInterface | null) => {
        if (safe) {
          this.safe = safe;
          this.form.patchValue(safe);

          this.form.enable();
        }
      },
      (error) => this.modalInfoService.onError(error.error.message, '', '/safes')
    );
    this.subscriptions.push(getSafeSub);
  }

  private create(): void {
    const data: SafeCreateParamsInterface = {
      name: this.form.value.name
    };

    const createSafeSub = this.safesService.create(data)
      .subscribe(
        (safe: SafeInterface) => {
          this.safe = safe;
          this.form.enable();
          this.modalInfoService.onSuccess(
            'Сейф успешно создан!',
            '',
            '/safes'
          );
        },
        (error) => {
          this.form.enable();
          this.modalInfoService.onError(error.error.message);
        }
      );
    this.subscriptions.push(createSafeSub);
  }

  private update(): void {
    const data: SafeUpdateParamsInterface = {
      id: this.safe._id as string,
      name: this.form.value.name,
    };

    const updateSafeSub = this.safesService.update(data)
      .subscribe(
        (safe: SafeInterface) => {
          this.safe = safe;
          this.form.enable();

          this.modalInfoService.onSuccess(
            'Сейф успешно обновлен!',
            '',
            '/safes'
          );
        },
        (error) => {
          this.form.enable();
          this.modalInfoService.onError(error.error.message);
        }
      );
    this.subscriptions.push(updateSafeSub);
  }

  private delete(safeId: string): void {
    const deleteSafeSub = this.safesService.delete(safeId)
      .subscribe(
        response => this.modalInfoService.onSuccess(response.message, '', '/safes'),
        error => this.modalInfoService.onError(error.error.message)
      );
    this.subscriptions.push(deleteSafeSub);
  }
}