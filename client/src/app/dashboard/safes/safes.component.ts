import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {getSafesList} from './store/safes.actions';

@Component({
  selector: 'app-safes',
  templateUrl: './safes.component.html',
  styleUrls: ['./safes.component.scss']
})
export class SafesComponent {
  constructor(private store: Store) {
    this.store.dispatch(getSafesList());
  }
}
