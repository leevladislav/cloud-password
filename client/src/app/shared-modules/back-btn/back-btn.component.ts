import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss']
})
export class BackBtnComponent {
  @Input() backUrl!: string;

  constructor(
    private router: Router,
    private location: Location
  ) {
  }

  back(): Promise<boolean> | void {
    return this.backUrl
      ? this.router.navigate([this.backUrl])
      : this.location.back();
  }
}
