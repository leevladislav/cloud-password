import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {of, Subscription} from 'rxjs';
import {filter, switchMap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';

import {CategoryInterface} from '../../interfaces/category.interface';
import {CategoriesService} from '../../services/categories.service';
import {ModalInfoService} from '../../../../core/services/modal-info.service';
import {unsubscribe} from '../../../../core/utils/unsubscriber';
import {
  CategoryCreateParamsInterface,
  CategoryUpdateParamsInterface
} from '../../interfaces/category-params.interface';
import {
  ModalConfirmComponent
} from '../../../../shared-modules/modals/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    name: [null, [Validators.required]]
  });

  isNew = true;

  category!: CategoryInterface;

  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private modalInfoService: ModalInfoService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getCategory();
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
      data: {text: 'Вы уверены, что хотите удалить категорию?'},
      panelClass: ['primary-modal'],
      autoFocus: false
    });

    const dialogRefSub = dialogRef.afterClosed()
      .pipe(filter((result) => result))
      .subscribe(() => this.delete(this.category._id as string));
    this.subscriptions.push(dialogRefSub);
  }

  private getCategory(): void {
    const getCategorySub = this.route.params.pipe(
      switchMap(
        (params: Params) => {
          if (params.id) {
            this.isNew = false;
            return this.categoriesService.getById(params.id);
          }

          return of(null);
        }
      )
    ).subscribe(
      (category: CategoryInterface | null) => {
        if (category) {
          this.category = category;
          this.form.patchValue(category);

          this.form.enable();
        }
      },
      (error) => this.modalInfoService.onError(error.error.message, '', 'categories')
    );
    this.subscriptions.push(getCategorySub);
  }

  private create(): void {
    const data: CategoryCreateParamsInterface = {
      name: this.form.value.name
    };

    const createCategorySub = this.categoriesService.create(data)
      .subscribe(
        (category: CategoryInterface) => {
          this.category = category;
          this.form.enable();
          this.modalInfoService.onSuccess(
            'Категория успешно создана!',
            '',
            'categories'
          );
        },
        (error) => {
          this.form.enable();
          this.modalInfoService.onError(error.error.message);
        }
      );
    this.subscriptions.push(createCategorySub);
  }

  private update(): void {
    const data: CategoryUpdateParamsInterface = {
      id: this.category._id as string,
      name: this.form.value.name,
    };

    const updateCategorySub = this.categoriesService.update(data)
      .subscribe(
        (category: CategoryInterface) => {
          this.category = category;
          this.form.enable();

          this.modalInfoService.onSuccess(
            'Категория успешно обновлена!',
            '',
            'categories'
          );
        },
        (error) => {
          this.form.enable();
          this.modalInfoService.onError(error.error.message);
        }
      );
    this.subscriptions.push(updateCategorySub);
  }

  private delete(categoryId: string): void {
    const deleteCategorySub = this.categoriesService.delete(categoryId)
      .subscribe(
        response => this.modalInfoService.onSuccess(response.message, '', 'categories'),
        error => this.modalInfoService.onError(error.error.message)
      );
    this.subscriptions.push(deleteCategorySub);
  }
}
