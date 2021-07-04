export const makeWordEnding = (value: number): string => {
  let charEnding = 'ов';

  if (value % 10 === 1) {
    charEnding = '';
  }

  if (value % 10 > 1 && value % 10 < 5) {
    charEnding = 'а';
  }

  if (value % 100 > 10 && value % 100 < 19) {
    charEnding = 'ов';
  }

  return charEnding;
}
