import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import {HeaderComponent} from './components/header/header.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
    ]
})
export class DashboardModule {
}
