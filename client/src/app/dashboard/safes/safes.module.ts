import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {EffectsModule} from '@ngrx/effects';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';

import {SafesComponent} from './safes.component';
import {SafesRoutingModule} from './safes.routing.module';
import {AlertActionModule} from '../../shared-modules/alert-action/alert-action.module';
import {ListComponent} from './components/list/list.component';
import {SafeComponent} from './components/safe/safe.component';
import {ManageSafeComponent} from './components/manage-safe/manage-safe.component';
import {BackBtnModule} from '../../shared-modules/back-btn/back-btn.module';
import {SafesService} from './services/safes.service';
import {
  ValidatorMessageModule
} from '../../shared-modules/validator-message/validator-message.module';
import {CategoriesService} from '../categories/services/categories.service';
import { CardComponent } from './components/card/card.component';
import {SafesEffects} from './store/safes.effects';


@NgModule({
  declarations: [
    SafesComponent,
    ListComponent,
    SafeComponent,
    ManageSafeComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    SafesRoutingModule,
    AlertActionModule,
    MatButtonModule,
    BackBtnModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ValidatorMessageModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatProgressSpinnerModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    EffectsModule.forFeature([SafesEffects])
  ],
  providers: [
    SafesService,
    CategoriesService
  ]
})
export class SafesModule {
}
