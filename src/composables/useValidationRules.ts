export function useValidationRules() {
  const createRules = (name: string) => [
    (v: string) => !!v || `${name} is required`,
    (v: string) => (v && v.length <= 10) || `${name} must be less than 10 characters`
  ]

  return {
    createRules
  }
}
