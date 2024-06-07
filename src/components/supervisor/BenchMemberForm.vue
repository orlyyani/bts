<script setup lang="ts">
import BaseSnackBar from '@/components/base/BaseSnackBar.vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

import { ref } from 'vue'
import type { Ref } from 'vue'
import { reactive } from 'vue'
import { useBenchMemberStore } from '@/stores/benchMember'
import { useRegister } from '@/composables/useRegister'
import { useValidationRules } from '@/composables/useValidationRules'
import { useErrorHandling } from '@/composables/useErrorHandling'
import { vMaska } from 'maska'
import { storeToRefs } from 'pinia'

const benchMemberStore = useBenchMemberStore()
const { registerBench } = useRegister()
const {
  requiredRule,
  specialCharactersRule,
  alphanumericRule,
  noSpecialCharactersRule,
  lessThanCharactersRule
} = useValidationRules()
const { formErrors, snackbar, snackbarText, setError, clearError } = useErrorHandling()

const { account: member, members } = storeToRefs(benchMemberStore)
const form: Ref<HTMLFormElement | null> = ref(null)
const loading = ref(false)
const snackbarColor = ref('error')

const emits = defineEmits(['success'])

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
const startDateRules = [requiredRule('Start Date')]

const registerBenchMember = async () => {
  clearError()

  const res = await form.value?.validate()
  if (!res.valid) {
    return
  }

  loading.value = true
  member.value.isBenchMember = true
  member.value.dateCreated = dayjs(member.value.dateCreated).utc().format()
  const response = await registerBench(member.value).catch(setError)
  loading.value = false

  if (response) {
    benchMemberStore.resetAccount()
    form.value?.reset()
    snackbarText.value = 'Bench member registered successfully'
    snackbarColor.value = 'success'
    snackbar.value = true
    members.value.push(response.data)
    emits('success')
  }
}

const options = reactive({
  mask: '##/##/####',
  eager: true
})
</script>

<template>
  <v-sheet class="mx-auto d-flex align-center" width="300">
    <v-form ref="form" fast-fail @submit.prevent="registerBenchMember" class="w-100 pa-3">
      <v-text-field
        v-model="member.supervisorEmpID"
        :rules="employeeIdRules"
        label="Employee ID"
        required
        :error-messages="formErrors.supervisorempid"
      ></v-text-field>
      <v-text-field
        v-model="member.employeeName"
        :rules="nameRules"
        label="Name"
        required
        :error-messages="formErrors.employeename"
      ></v-text-field>
      <v-text-field
        v-model="member.employeePass"
        :rules="tempPasswordRules"
        label="Temporary Password"
        :error-messages="formErrors.employeepass"
        type="password"
        required
      ></v-text-field>
      <v-text-field
        v-model="member.dateCreated"
        :rules="startDateRules"
        label="Start Date"
        placeholder="MM/DD/YYYY"
        v-maska:[options]
        required
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block :loading="loading">Register</v-btn>
    </v-form>
    <BaseSnackBar :color="snackbarColor" v-model="snackbar" :text="snackbarText" />
  </v-sheet>
</template>
