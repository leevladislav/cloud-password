import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {SafeInterface} from '../../interfaces/safe.interface';
import {SafesService} from '../../services/safes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  safes$: Observable<SafeInterface[]> = this.safesService.fetch();

  constructor(
    private safesService: SafesService,
  ) {
  }
}
