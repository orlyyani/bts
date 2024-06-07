import type { Error } from '@/types/Common'
import { ref, reactive } from 'vue'

export function useErrorHandling() {
  const formErrors: any = reactive({})
  const snackbar = ref(false)
  const snackbarText = ref('')

  const setError = (error: Error) => {
    if (error.response.data.detail) {
      snackbarText.value = error.response.data.detail
      snackbar.value = true
    } else {
      Object.keys(error.response.data.errors).forEach((key) => {
        formErrors[key.toLowerCase()] = error.response.data.errors[key]
      })
      console.log(formErrors)
    }
  }

  const clearError = () => {
    Object.keys(formErrors).forEach((key) => {
      formErrors[key] = ''
    })
    snackbar.value = false
    snackbarText.value = ''
  }

  return {
    formErrors,
    snackbar,
    snackbarText,
    setError,
    clearError
  }
}
