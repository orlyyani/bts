<script lang="ts" setup>
import { ref } from 'vue'
import BaseSnackBar from '@/components/base/BaseSnackBar.vue'

import { useSupervisorStore } from '@/stores/supervisor'
import { useRegister } from '@/composables/useRegister'
import { useValidationRules } from '@/composables/useValidationRules'
import { useErrorHandling } from '@/composables/useErrorHandling'

const supervisorStore = useSupervisorStore()
const { register } = useRegister()
const {
  requiredRule,
  specialCharactersRule,
  alphanumericRule,
  noSpecialCharactersRule,
  onlyNumbersRule
} = useValidationRules()
const { formErrors, snackbar, snackbarText, setError, clearError } = useErrorHandling()

const account = supervisorStore.account
const loading = ref(false)

const employeeIdRules = [
  requiredRule('Employee ID'),
  onlyNumbersRule('Employee ID'),
  noSpecialCharactersRule('Employee ID')
]
const nameRules = [requiredRule('Name')]
const tempPasswordRules = [
  requiredRule('Temporary Password'),
  specialCharactersRule('Temporary Password'),
  alphanumericRule('Temporary Password')
]

const registerSupervisor = async () => {
  clearError()
  loading.value = true
  const response = await register(account).catch(setError)
  loading.value = false

  if (response) {
    supervisorStore.updateAccount(response.data.account)
  }
}
</script>

<template>
  <v-sheet class="mx-auto h-100 d-flex align-center" width="300">
    <v-form fast-fail @submit.prevent="registerSupervisor" class="w-100 pa-3">
      <v-text-field
        v-model="account.employeeId"
        :rules="employeeIdRules"
        label="Employee ID"
        required
        :error-messages="formErrors.employee_id"
      ></v-text-field>

      <v-text-field v-model="account.name" :rules="nameRules" label="Name" required></v-text-field>

      <v-text-field
        v-model="account.tempPassword"
        :rules="tempPasswordRules"
        label="Temporary Password"
        :error-messages="formErrors.temp_password"
        required
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block>Register</v-btn>
    </v-form>

    <BaseSnackBar v-model="snackbar" :text="snackbarText" />
  </v-sheet>
</template>
