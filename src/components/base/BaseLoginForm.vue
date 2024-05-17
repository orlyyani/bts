<script lang="ts" setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { authenticate } = useAuth()

const createRules = (name: string) => [
  (v: string) => !!v || `${name} is required`,
  (v: string) => (v && v.length <= 10) || `${name} must be less than 10 characters`
]

const username = ref('')
const password = ref('')

const usernameRules = ref(createRules('Username'))
const passwordRules = ref(createRules('Password'))

const login = async () => {
  const response = await authenticate({
    employeeId: parseInt(username.value),
    password: password.value
  })

  console.log(response)
}
</script>

<template>
  <v-sheet class="mx-auto h-100 d-flex align-center" width="300">
    <v-form fast-fail @submit.prevent="login" class="w-100 pa-3">
      <v-text-field v-model="username" :rules="usernameRules" label="Username"></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        type="password"
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
