<script setup lang="ts">
import { ref } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import BaseDialog from '@/components/base/BaseDialog.vue'
import BenchMemberFrom from '@/components/supervisor/BenchMemberFrom.vue'
import { TABLE_COLUMNS, TABLE_DATA } from '@/constants'
import { MEMBERS_MENU_ITEMS } from '@/constants'

const headers = ref(TABLE_COLUMNS)
const items = ref(TABLE_DATA)
const membersMenuItems = ref(MEMBERS_MENU_ITEMS)
const showBenchMemberForm = ref(false)
</script>

<template>
  <AppLayout>
    <template #menu>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
        <v-menu activator="parent">
          <v-list>
            <v-list-item v-for="(item, index) in membersMenuItems" :key="index" :value="index">
              <v-list-item-title @click="showBenchMemberForm = true">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </template>
    <main class="pa-5">
      <v-data-table :headers="headers" :items="items" class="elevation-1 data-table">
        <template v-slot:item.profilePicture="{ item }">
          <div class="d-flex justify-center">
            <v-checkbox v-model="item.profilePicture"></v-checkbox>
          </div>
        </template>
        <template v-slot:item.rivs="{ item }">
          <div class="d-flex justify-center">
            <v-checkbox v-model="item.rivs"></v-checkbox>
          </div>
        </template>
        <template v-slot:item.profileUpdated="{ item }">
          <div class="d-flex justify-center">
            <v-checkbox v-model="item.profileUpdated"></v-checkbox>
          </div>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon size="small" color="green" :to="`/supervisor/members/${item.id}`">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </main>
    <BaseDialog v-model="showBenchMemberForm">
      <BenchMemberFrom />
    </BaseDialog>
  </AppLayout>
</template>

<style scoped>
.data-table {
  max-width: 800px;
}
</style>
