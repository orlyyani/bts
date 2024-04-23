<script lang="ts" setup>
import { useSupervisorStore } from '@/stores/supervisor'
import { useRegister } from '@/composables/useRegister'
import { useValidationRules } from '@/composables/useValidationRules'

const supervisorStore = useSupervisorStore()
const { register } = useRegister()
const { createRules } = useValidationRules()

const account = supervisorStore.account

const employeeIdRules = createRules('Employee ID')
const nameRules = createRules('Name')
const tempPasswordRules = createRules('Temporary Password')

const registerSupervisor = async () => {
  const response = await register(account)
  // handle response
  supervisorStore.updateAccount({
    employeeId: '',
    name: '',
    tempPassword: ''
  })
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
      ></v-text-field>

      <v-text-field v-model="account.name" :rules="nameRules" label="Name" required></v-text-field>

      <v-text-field
        v-model="account.tempPassword"
        :rules="tempPasswordRules"
        label="Temporary Password"
        required
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block>Register</v-btn>
    </v-form>
  </v-sheet>
</template>
