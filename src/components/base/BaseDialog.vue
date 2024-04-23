<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const dialogModel = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <v-dialog v-model="dialogModel" width="auto">
    <slot></slot>
  </v-dialog>
</template>
