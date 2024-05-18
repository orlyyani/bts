<script lang="ts" setup>
import Cookies from 'js-cookie'
import BaseSnackBar from '@/components/base/BaseSnackBar.vue'

import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useErrorHandling } from '@/composables/useErrorHandling'
import { useValidationRules } from '@/composables/useValidationRules'
import { useUserRoleStore } from '@/stores/userRole'
import router from '@/router'

const { authenticate } = useAuth()
const { formErrors, snackbar, snackbarText, setError, clearError } = useErrorHandling()
const { requiredRule } = useValidationRules()
const userRoleStore = useUserRoleStore()

const form = ref({
  username: '',
  password: ''
})
const loading = ref(false)

const usernameRules = [requiredRule('Username')]
const passwordRules = [requiredRule('Password')]

const login = async () => {
  clearError()
  loading.value = true
  const response = await authenticate({
    employeeId: parseInt(form.value.username),
    password: form.value.password
  }).catch(setError)
  loading.value = false

  if (response) {
    Cookies.set('token', response.data.token)
    await userRoleStore.setAccount(response.data.account)
    Cookies.set('role', userRoleStore.role)
    router.push('/')
  }
}
</script>

<template>
  <v-sheet class="mx-auto h-100 d-flex align-center" width="300">
    <v-form fast-fail @submit.prevent="login" class="w-100 pa-3">
      <v-text-field
        v-model="form.username"
        :rules="usernameRules"
        label="Username"
        :error-messages="formErrors.username"
      ></v-text-field>

      <v-text-field
        v-model="form.password"
        :rules="passwordRules"
        label="Password"
        type="password"
        :error-messages="formErrors.password"
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block :loading="loading">Submit</v-btn>
    </v-form>

    <BaseSnackBar v-model="snackbar" :text="snackbarText" />
  </v-sheet>
</template>
