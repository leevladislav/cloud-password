import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

import { hasOwnProperty } from '../../core/utils/has-own-property';
import { makeWordEnding } from '../../core/utils/make-word-ending';
import { validatePasswordByPattern } from './utils/validate-password-by-pattern';

@Component({
  selector: 'app-validator-message',
  templateUrl: './validator-message.component.html'
})
export class ValidatorMessageComponent {
  @Input() field!: AbstractControl | null | undefined;
  @Input() key!: string;

  validatorMessages(): string[] {
    const field = this.field;

    if (!field || !field.errors) {
      return [];
    }

    const errors: string[] = [];
    const config: Record<string, string> = {
      matDatepickerParse: 'Обязательное поле',
      required: 'Обязательное поле',
      requiredTrue: 'Значение должно быть больше нуля',
      email: 'Невалидный e-mail',
      pattern: 'Невалидный',
      passwordNotEqual: 'Пароли не совпадают',
      oldPasswordAreEqual: 'Новый пароль совпадает со старым'
    };

    if (hasOwnProperty(field.errors, 'custom')) {
      config['custom'] =
        typeof field.errors.custom === 'string' && field.errors.custom.length
          ? field.errors.custom
          : 'Не соответствует формату';
    }

    if (hasOwnProperty(field.errors, 'minlength')) {
      const charEnding = makeWordEnding(field.errors.minlength.requiredLength);
      config['minlength'] = `Минимум ${field.errors.minlength.requiredLength} символ${charEnding}`;
    }

    if (hasOwnProperty(field.errors, 'maxlength')) {
      const charEnding = makeWordEnding(field.errors.maxlength.requiredLength);
      config['maxlength'] = `Максимум ${field.errors.maxlength.requiredLength} символ${charEnding}`;
    }

    if (hasOwnProperty(field.errors, 'min')) {
      config['min'] = `Минимальное значение ${field.errors.min.min}`;
    }

    if (hasOwnProperty(field.errors, 'max')) {
      config['max'] = `Максимальное значение ${field.errors.max.max}`;
    }

    if (hasOwnProperty(field.errors, 'whitespace')) {
      config['whitespace'] = `${field.errors.whitespace} не может быть пустым`;
    }

    Object.keys(field.errors).forEach((error: string) => {
      if (error === 'pattern') {
        switch (this.key) {
          case 'phone':
            errors.push(`${config[error]} номер телефона`);
            break;
          case 'password':
          case 'repeatPassword':
            errors.push(validatePasswordByPattern(this.field?.errors?.pattern.actualValue)
            );
            break;
          default:
            errors.push(`${config[error]} ${this.key}`);
        }
      } else {
        errors.push(config[error]);
      }
    });

    return errors;
  }
}
