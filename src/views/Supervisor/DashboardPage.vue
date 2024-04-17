<script setup lang="ts">
import { ref } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import { TABLE_COLUMNS, TABLE_DATA } from '@/constants'

const headers = ref(TABLE_COLUMNS)
const items = ref(TABLE_DATA)
</script>

<template>
  <AppLayout>
    <main class="pa-5">
      <v-data-table :headers="headers" :items="items" class="elevation-1 data-table">
        <template v-slot:item.profilePicture="{ item }">
          <div class="d-flex justify-center">
            <v-checkbox v-model="item.profilePicture" disabled></v-checkbox>
          </div>
        </template>
        <template v-slot:item.rivs="{ item }">
          <div class="d-flex justify-center">
            <v-checkbox v-model="item.rivs" disabled></v-checkbox>
          </div>
        </template>
        <template v-slot:item.profileUpdated="{ item }">
          <div class="d-flex justify-center">
            <v-checkbox v-model="item.profileUpdated" disabled></v-checkbox>
          </div>
        </template>
        <template v-slot:item.actions="{ item }">
          <!-- Add actions here -->
        </template>
      </v-data-table>
    </main>
  </AppLayout>
</template>

<style scoped>
.data-table {
  max-width: 800px;
}
</style>
