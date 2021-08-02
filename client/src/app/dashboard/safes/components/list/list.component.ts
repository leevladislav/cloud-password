import {Component} from '@angular/core';
import {Router} from '@angular/router';
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
    private router: Router,
  ) {
  }

  edit(event: Event, safe: SafeInterface): void {
    event.stopPropagation();
    event.stopImmediatePropagation();

    this.router.navigate(['/safes', safe._id, 'edit']);
  }
}
