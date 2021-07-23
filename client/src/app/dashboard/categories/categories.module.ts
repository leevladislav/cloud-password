import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {CategoriesComponent} from './categories.component';
import {CategoriesRoutingModule} from './categories-routing.module';
import {ListComponent} from './components/list/list.component';
import {AlertActionModule} from '../../shared-modules/alert-action/alert-action.module';
import {ManageCategoryComponent} from './components/manage-category/manage-category.component';
import {
  ValidatorMessageModule
} from '../../shared-modules/validator-message/validator-message.module';
import {ModalConfirmModule} from '../../shared-modules/modals/modal-confirm/modal-confirm.module';
import {BackBtnModule} from '../../shared-modules/back-btn/back-btn.module';
import {CategoriesService} from './services/categories.service';
import {CategoryComponent} from './components/category/category.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    ListComponent,
    ManageCategoryComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    AlertActionModule,
    MatButtonModule,
    MatIconModule,
    ValidatorMessageModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRippleModule,
    ModalConfirmModule,
    MatProgressSpinnerModule,
    BackBtnModule
  ],
  providers: [
    CategoriesService
  ]
})
export class CategoriesModule {
}
