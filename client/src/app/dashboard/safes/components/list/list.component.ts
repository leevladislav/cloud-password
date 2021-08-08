import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {SafeInterface} from '../../interfaces/safe.interface';
import {SafesService} from '../../services/safes.service';
import {getSafesList} from '../../../../reducers/safes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  safes$: Observable<SafeInterface[]> = this.safesService.fetch();

  constructor(
    private safesService: SafesService,
    private store: Store,
  ) {
    this.store.dispatch(getSafesList());
  }
}
