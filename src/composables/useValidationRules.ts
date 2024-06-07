export function useValidationRules() {
  const requiredRule = (name: string) => (v: string) => !!v || `${name} is required`
  const lessThanCharactersRule =
    (name: string, maxLength: number = 10) =>
    (v: string) =>
      (v && v.length <= maxLength) || `${name} must be less than ${maxLength} characters`
  const specialCharactersRule = (name: string) => (v: string) =>
    /[!@#$%^&*(),.?":{}|<>]/g.test(v) || `${name} must contain at least one special character`
  const alphanumericRule = (name: string) => (v: string) =>
    (/\d/.test(v) && /[a-zA-Z]/.test(v)) || `${name} must be alphanumeric`
  const noSpecialCharactersRule = (name: string) => (v: string) =>
    !/[!@#$%^&*(),.?":{}|<>]/g.test(v) || `${name} must not contain special characters`
  const onlyNumbersRule = (name: string) => (v: string) =>
    /^\d+$/.test(v) || `${name} must contain only numbers`

  return {
    requiredRule,
    lessThanCharactersRule,
    specialCharactersRule,
    alphanumericRule,
    noSpecialCharactersRule,
    onlyNumbersRule
  }
}
