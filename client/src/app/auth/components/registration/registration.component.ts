import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { passwordPattern } from 'src/app/core/constants/patterns.const';
import { unsubscribe } from 'src/app/core/utils/unsubscriber';
import { matchPassword } from 'src/app/shared-modules/validator-message/utils/match-password';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    newPassword: this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(passwordPattern)
          ]
        ],
        repeatPassword: ['', [Validators.required]]
      },
      { validators: [matchPassword()] }
    )
  });

  hideNewPassword = true;

  hideRepeatNewPassword = true;

  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    unsubscribe(this.subscriptions);
  }

  registration(): void {
    this.form.disable();

    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    const data = this.form.value;

    const registerSub = this.auth.register(data)
      .subscribe(
        () => this.router.navigate(['/login']),
        (error) => {
          // this.openModalService.openModal(null, error.error.message);
          this.form.enable();
        });

    this.subscriptions.push(registerSub);
  }
}
