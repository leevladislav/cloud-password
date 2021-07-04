export function validatePasswordByPattern(text: string): string {
  if (!/(?=.*[a-z-а-яё])/.test(text)) {
    return 'Пароль должен содержать минимум 1 строчную букву';
  }

  if (!/(?=.*[A-Z-А-ЯЁ])/.test(text)) {
    return 'Пароль должен содержать минимум 1 заглавную букву';
  }

  if (!/(?=.*[0-9])/.test(text)) {
    return 'Пароль должен содержать хотя бы 1 цифру';
  }

  if (!/(?=.*[!@#$%^&*])/.test(text)) {
    return 'Пароль должен содержать минимум 1 спец. символ';
  }

  return 'Невалидный пароль';
}
