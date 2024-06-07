<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import BaseDialog from '@/components/base/BaseDialog.vue'
import BenchMemberForm from '@/components/supervisor/BenchMemberForm.vue'
import BaseSnackBar from '@/components/base/BaseSnackBar.vue'

import { ref } from 'vue'
import { TABLE_COLUMNS } from '@/constants'
import { MEMBERS_MENU_ITEMS } from '@/constants'
import { useErrorHandling } from '@/composables/useErrorHandling'
import { useBenchMemberStore } from '@/stores/benchMember'

const headers = ref(TABLE_COLUMNS)
const membersMenuItems = ref(MEMBERS_MENU_ITEMS)
const showBenchMemberForm = ref(false)
const benchMemberStore = useBenchMemberStore()

const { snackbar, snackbarText, setError } = useErrorHandling()

const fetchEmployees = async () => {
  await benchMemberStore.fetchEmployees().catch(setError)
}

fetchEmployees()
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
      <v-data-table
        :headers="headers"
        :items="benchMemberStore.benchMembers"
        disable-pagination
        class="elevation-1 data-table"
      >
        <template v-slot:item.isProfileUpdate="{ item }">
          <div class="d-flex justify-center">
            <v-checkbox v-model="item.isProfileUpdate"></v-checkbox>
          </div>
        </template>
        <template v-slot:item.isRIVS="{ item }">
          <div class="d-flex justify-center">
            <v-checkbox v-model="item.isRIVS"></v-checkbox>
          </div>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon size="small" color="green" :to="`/supervisor/members/${item.id}`">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <template #bottom></template>
      </v-data-table>
    </main>
    <BaseDialog v-model="showBenchMemberForm">
      <BenchMemberForm @success="showBenchMemberForm = false" />
    </BaseDialog>

    <BaseSnackBar v-model="snackbar" :text="snackbarText" />
  </AppLayout>
</template>

<style scoped>
.data-table {
  max-width: 800px;
}
</style>
