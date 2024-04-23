<script setup lang="ts">
import { reactive } from 'vue'
import { useBenchMemberStore } from '@/stores/benchMember'
import { useRegister } from '@/composables/useRegister'
import { useValidationRules } from '@/composables/useValidationRules'
import { vMaska } from 'maska'

const benchMemberStore = useBenchMemberStore()
const { registerBench } = useRegister()
const { createRules } = useValidationRules()

const member = benchMemberStore.member

const idRules = createRules('Employee ID')
const nameRules = createRules('Name')
const tempPasswordRules = createRules('Temporary Password')
const startDateRules = createRules('Start Date')

const registerBenchMember = async () => {
  const response = await registerBench(member)
}

const options = reactive({
  mask: '##/##/####',
  eager: true
})
</script>

<template>
  <v-sheet class="mx-auto d-flex align-center" width="300">
    <v-form fast-fail @submit.prevent="registerBenchMember" class="w-100 pa-3">
      <v-text-field
        v-model="member.id"
        :rules="idRules"
        label="Employee ID"
        required
      ></v-text-field>
      <v-text-field v-model="member.name" :rules="nameRules" label="Name" required></v-text-field>
      <v-text-field
        v-model="member.tempPassword"
        :rules="tempPasswordRules"
        label="Temporary Password"
        required
      ></v-text-field>
      <v-text-field
        v-model="member.startDate"
        :rules="startDateRules"
        label="Start Date"
        placeholder="MM/DD/YYYY"
        v-maska:[options]
        required
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block>Register</v-btn>
    </v-form>
  </v-sheet>
</template>
