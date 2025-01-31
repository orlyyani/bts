<script lang="ts" setup>
import BaseSnackBar from '@/components/base/BaseSnackBar.vue'

import { ref } from 'vue'
import type { Ref } from 'vue'
import { useSupervisorStore } from '@/stores/supervisor'
import { useRegister } from '@/composables/useRegister'
import { useValidationRules } from '@/composables/useValidationRules'
import { useErrorHandling } from '@/composables/useErrorHandling'
import { storeToRefs } from 'pinia'

const supervisorStore = useSupervisorStore()
const { account } = storeToRefs(supervisorStore)
const { register } = useRegister()
const {
  requiredRule,
  specialCharactersRule,
  alphanumericRule,
  noSpecialCharactersRule,
  lessThanCharactersRule
} = useValidationRules()
const { formErrors, snackbar, snackbarText, setError, clearError } = useErrorHandling()

const form: Ref<HTMLFormElement | null> = ref(null)
const loading = ref(false)
const snackbarColor = ref('error')

const employeeIdRules = [
  requiredRule('Employee ID'),
  noSpecialCharactersRule('Employee ID'),
  lessThanCharactersRule('Employee ID', 4)
]
const nameRules = [requiredRule('Name')]
const tempPasswordRules = [
  requiredRule('Temporary Password'),
  specialCharactersRule('Temporary Password'),
  alphanumericRule('Temporary Password')
]

const registerSupervisor = async () => {
  clearError()

  const res = await form.value?.validate()
  if (!res.valid) {
    return
  }

  loading.value = true
  account.value.isBenchMember = false
  const response = await register(account.value).catch(setError)
  loading.value = false

  if (response) {
    supervisorStore.resetAccount()
    form.value?.reset()
    snackbarText.value = 'Supervisor registered successfully'
    snackbarColor.value = 'success'
    snackbar.value = true
  }
}
</script>

<template>
  <v-sheet class="mx-auto h-100 d-flex flex-column align-center justify-center" width="300">
    <h2 class="text-center">Supervisor Registration</h2>
    <v-form ref="form" fast-fail @submit.prevent="registerSupervisor" class="w-100 pa-3">
      <v-text-field
        v-model="account.supervisorEmpID"
        :rules="employeeIdRules"
        label="Employee ID"
        required
        :error-messages="formErrors.supervisorempid"
      ></v-text-field>

      <v-text-field
        v-model="account.employeeName"
        :rules="nameRules"
        label="Name"
        required
        :error-messages="formErrors.employeename"
      ></v-text-field>

      <v-text-field
        v-model="account.employeePass"
        :rules="tempPasswordRules"
        label="Temporary Password"
        :error-messages="formErrors.employeepass"
        type="password"
        required
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block :loading="loading">Register</v-btn>
    </v-form>

    <BaseSnackBar :color="snackbarColor" v-model="snackbar" :text="snackbarText" />
  </v-sheet>
</template>
