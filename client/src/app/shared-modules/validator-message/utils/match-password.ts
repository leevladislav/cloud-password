import { FormGroup } from '@angular/forms';

export function matchPassword(): (group: FormGroup) => null | void {
  return (group: FormGroup) => {
    const newPasswordControl = group.get('password');
    const repeatNewPasswordControl = group.get('repeatPassword');

    if (newPasswordControl?.value === repeatNewPasswordControl?.value) {
      return repeatNewPasswordControl?.setErrors(null);
    }

    return repeatNewPasswordControl?.setErrors({ passwordNotEqual: true });
  };
}
