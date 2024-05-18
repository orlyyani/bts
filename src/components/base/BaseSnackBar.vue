<script setup lang="ts">
const model = defineModel()

defineProps({
  text: String,
  color: {
    type: String,
    default: 'error'
  },
  variant: {
    type: String,
    default: 'text'
  }
})
</script>

<template>
  <v-snackbar v-model="model" :color="color">
    {{ text }}
    <template v-slot:actions>
      <v-btn variant="text" @click="model = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>
