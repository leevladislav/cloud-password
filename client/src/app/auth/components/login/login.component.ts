import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {AuthService} from '../../services/auth.service';
import {ModalInfoService} from '../../../core/services/modal-info.service';
import {unsubscribe} from '../../../core/utils/unsubscriber';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  hide = true;

  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private modalInfoService: ModalInfoService,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    unsubscribe(this.subscriptions);
  }

  login(): void {
    this.form.disable();

    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    const data = this.form.value;

    const loginSub = this.auth.login(data)
      .subscribe(
        () => this.router.navigate(['/expenses']),
        (error) => {
          this.modalInfoService.onError(error.error.message);
          this.form.enable();
        });
    this.subscriptions.push(loginSub);
  }
}
