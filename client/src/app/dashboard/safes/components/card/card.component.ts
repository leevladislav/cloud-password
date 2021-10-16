import {Component, Input} from '@angular/core';

import {SafeInterface} from '../../interfaces/safe.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() safe!: SafeInterface;
}
