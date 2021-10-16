import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {SafeInterface} from '../../interfaces/safe.interface';
import {safesListSelector} from '../../store/safes.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  safes$: Observable<SafeInterface[]> = this.store.select(safesListSelector);

  constructor(private store: Store) {
  }
}
