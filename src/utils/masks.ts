export function maskZapPhoneNumberOnChangeInput(value: string) {
  let input = value;
  input = input.replace(/\D/g, '');
  return input;
}

export function maskZapPhoneNumberOnBlurInput(value: string) {
  let input = value;
  if (value.length === 8) {
    input = input.replace(/(\d{4})(\d{4})$/, '(31) 9 $1-$2');
    return input;
  }
  if (value.length === 9) {
    input = input.replace(/(\d{1})(\d{4})(\d{4})$/, '(31) $1 $2-$3');
    return input;
  }
  if (value.length === 11) {
    input = input.replace(/(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4');
    return input;
  }
  return input;
}
