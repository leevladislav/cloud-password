import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent {
  @Input() title = '';
  @Input() cross!: boolean;

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
}
