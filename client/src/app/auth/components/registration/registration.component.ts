import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {AuthService} from '../../services/auth.service';
import {passwordPattern} from '../../../core/constants/patterns.const';
import {matchPassword} from '../../../shared-modules/validator-message/utils/match-password';
import {unsubscribe} from '../../../core/utils/unsubscriber';
import {ModalInfoService} from '../../../core/services/modal-info.service';
import {UserRegisterInterface} from '../../interfaces/user-register.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnDestroy {
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
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
      {validators: [matchPassword()]}
    )
  });

  hideNewPassword = true;

  hideRepeatNewPassword = true;

  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private openModalService: ModalInfoService,
  ) {
  }

  ngOnDestroy(): void {
    unsubscribe(this.subscriptions);
  }

  onRegister(): void {
    this.form.disable();

    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    this.register({
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.newPassword.password,
    });
  }

  private register(data: UserRegisterInterface): void {
    const registerSub = this.auth.register(data)
      .subscribe(
        () => this.router.navigate(['/login']),
        (error) => {
          this.openModalService.onError(error.error.message);
          this.form.enable();
        });
    this.subscriptions.push(registerSub);
  }
}
