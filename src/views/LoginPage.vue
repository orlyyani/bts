<script lang="ts" setup>
import { ref } from 'vue'

const createRules = (name: string) => [
  (v: string) => !!v || `${name} is required`,
  (v: string) => (v && v.length <= 10) || `${name} must be less than 10 characters`
]

const firstName = ref('')
const lastName = ref('')

const firstNameRules = ref(createRules('First name'))
const lastNameRules = ref(createRules('Last name'))
</script>

<template>
  <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field v-model="firstName" :rules="firstNameRules" label="First name"></v-text-field>

      <v-text-field v-model="lastName" :rules="lastNameRules" label="Last name"></v-text-field>

      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
