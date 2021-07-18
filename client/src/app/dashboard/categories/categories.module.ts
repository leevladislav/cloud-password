import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

import {CategoriesComponent} from './categories.component';
import {CategoriesRoutingModule} from './categories-routing.module';
import {ListComponent} from './components/list/list.component';
import {AlertActionModule} from '../../shared-modules/alert-action/alert-action.module';
import { CreateComponent } from './components/create/create.component';
import { CategoryComponent } from './components/category/category.component';
import {ValidatorMessageModule} from '../../shared-modules/validator-message/validator-message.module';
import {ModalConfirmModule} from '../../shared-modules/modals/modal-confirm/modal-confirm.module';


@NgModule({
  declarations: [
    CategoriesComponent,
    ListComponent,
    CreateComponent,
    CategoryComponent
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
    ModalConfirmModule
  ]
})
export class CategoriesModule {
}
