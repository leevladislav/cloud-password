import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ValidatorMessageComponent} from './validator-message.component';

@NgModule({
  declarations: [ValidatorMessageComponent],
  imports: [CommonModule],
  exports: [ValidatorMessageComponent]
})
export class ValidatorMessageModule {
}
