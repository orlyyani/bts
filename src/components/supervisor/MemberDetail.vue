<script setup lang="ts">
import 'vue-datepicker-next/index.css'
import DatePicker from 'vue-datepicker-next'
import dayjs from 'dayjs'
import useAxios from '@/composables/useAxios'
import BaseSnackBar from '@/components/base/BaseSnackBar.vue'

import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useErrorHandling } from '@/composables/useErrorHandling'
import type { BenchMember } from '@/types/BenchMember'

const route = useRoute()
const { getEmployee } = useAxios
const { snackbar, snackbarText, setError } = useErrorHandling()

const snackbarColor = ref('error')
const details = ref<BenchMember>({
  id: 0,
  isRIVS: false,
  isProfileUpdate: false,
  isActive: false,
  dateCreated: '',
  endDate: ''
})

const fetchEmployeeDetails = async () => {
  const response = await getEmployee(route.params.id).catch(setError)
  console.log(response?.data?.employees?.[0])
}

fetchEmployeeDetails()

const benchHistory = ref([])
const olpTrackingList = ref([
  {
    id: Math.random().toString(36).substr(2, 9),
    title: 'Introduction to Programming',
    status: 'ongoing'
  },
  { id: Math.random().toString(36).substr(2, 9), title: 'Web Development Basics', status: 'done' },
  { id: Math.random().toString(36).substr(2, 9), title: 'Advanced JavaScript', status: 'ongoing' },
  {
    id: Math.random().toString(36).substr(2, 9),
    title: 'Machine Learning for Beginners',
    status: 'done'
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    title: 'Data Structures and Algorithms',
    status: 'ongoing'
  }
])
const previousIsActive = ref(details.value.isActive)

watch(details, () => {
  previousIsActive.value = details.value.isActive
})

const saveChanges = () => {
  if (details.value.isActive !== previousIsActive.value) {
    if (details.value.isActive) {
      if (!details.value.dateCreated) {
        alert('Please input the start date.')
      } else {
        previousIsActive.value = details.value.isActive
        benchHistory.value.push(
          `Start date: ${dayjs(details.value.dateCreated).format('MMMM DD, YYYY')}`
        )
        // Save the changes
      }
    } else {
      if (!details.value.endDate) {
        alert('Please input the end date.')
      } else {
        previousIsActive.value = details.value.isActive
        benchHistory.value.push(`End date: ${dayjs(details.value.endDate).format('MMMM DD, YYYY')}`)
        // Save the changes
      }
    }
  }
}

const formattedStartDate = computed(() => {
  return details.value.dateCreated ? dayjs(details.value.dateCreated).format('MMMM DD, YYYY') : ''
})

const formattedEndDate = computed(() => {
  return details.value.dateCreated ? dayjs(details.value.dateCreated).format('MMMM DD, YYYY') : ''
})
</script>

<template>
  <v-sheet>
    <h2>Placement Checklist and Profile</h2>
    <v-card class="pa-3 mt-3" variant="outlined">
      <v-checkbox label="Profile Picture" v-model="details.isProfileUpdate" hide-details="auto" />
      <v-checkbox label="RIVS" v-model="details.isRIVS" hide-details="auto" />
      <v-checkbox label="Profile Update" v-model="details.isProfileUpdate" hide-details="auto" />
      <v-switch
        label="Is Active"
        v-model="details.isActive"
        hide-details="auto"
        color="primary"
        inset
      />
      <date-picker v-model:value="details.dateCreated" v-if="details.isActive">
        <template #input>
          <v-text-field
            v-model="formattedStartDate"
            label="Start Date"
            placeholder="MMMM DD, YYYY"
            hide-details
            readonly
          ></v-text-field>
        </template>
      </date-picker>
      <date-picker v-model:value="details.endDate" v-else>
        <template #input>
          <v-text-field
            v-model="formattedEndDate"
            label="End Date"
            placeholder="MMMM DD, YYYY"
            hide-details
            readonly
          ></v-text-field>
        </template>
      </date-picker>
      <br />
      <v-btn class="mt-5" @click="saveChanges">Save</v-btn>
    </v-card>

    <h2 class="mt-3">Bench History</h2>
    <v-card class="pa-3 mt-3" variant="outlined">
      <v-list :items="benchHistory"></v-list>
    </v-card>

    <h2 class="mt-3">OLP Tracking</h2>
    <v-card class="pa-3 mt-3" variant="outlined">
      <v-list-item-group>
        <v-list-item v-for="item in olpTrackingList" :key="item.id">
          <v-list-item-title>
            <router-link :to="`/supervisor/members/${route.params.id}/olp/${item.id}`">{{
              item.title
            }}</router-link>
            -
            <span
              :class="{ 'status-done': item.status === 'done' }"
              :style="{ textTransform: 'capitalize' }"
            >
              {{ item.status }}
            </span>
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-card>
    <BaseSnackBar :color="snackbarColor" v-model="snackbar" :text="snackbarText" />
  </v-sheet>
</template>

<style scoped>
.status-done {
  color: green;
}
</style>
