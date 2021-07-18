import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-action',
  templateUrl: './alert-action.component.html',
  styleUrls: ['./alert-action.component.scss']
})
export class AlertActionComponent implements OnInit {
  @Input() text!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
