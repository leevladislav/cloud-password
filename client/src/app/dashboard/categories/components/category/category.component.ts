import {Component, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';

import {CategoriesService} from '../../services/categories.service';
import {CategoryInterface} from '../../interfaces/category.interface';
import {ModalInfoService} from '../../../../core/services/modal-info.service';
import {unsubscribe} from '../../../../core/utils/unsubscriber';
import {ModalConfirmComponent} from '../../../../shared-modules/modals/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnDestroy {
  categoryId = this.route.snapshot.params.id;

  category$: Observable<CategoryInterface> = this.categoriesService.getById(this.categoryId);

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private modalInfoService: ModalInfoService,
    private dialog: MatDialog,
  ) {
  }

  ngOnDestroy(): void {
    unsubscribe(this.subscriptions);
  }

  onDelete(): void {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      data: {text: 'Вы уверены, что хотите удалить категорию?'},
      panelClass: ['primary-modal'],
      autoFocus: false
    });

    const dialogRefSub = dialogRef.afterClosed()
      .pipe(filter((result) => result))
      .subscribe(() => this.delete(this.categoryId as string));
    this.subscriptions.push(dialogRefSub);
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
