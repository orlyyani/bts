<script setup lang="ts">
import { ref } from 'vue'
import DatePicker from 'vue-datepicker-next'
import 'vue-datepicker-next/index.css'
import dayjs from 'dayjs'

const course = ref({
  title: '',
  provider: '',
  purchasedDate: '',
  purchaseBy: '',
  amount: '',
  description: '',
  objective: '',
  startDate: '',
  lessons: '',
  endDate: '',
  certificateSubmissionDate: '',
  newSkills: '',
  skillsUsefulness: '',
  skillsApplication: '',
  futurePlan: '',
  weeklyAccomplishments: '',
  accomplishment: '',
  challenges: '',
  reportDate: '',
  signedBySupervisor: false
})
</script>

<template>
  <v-form>
    <v-card class="pa-3 mt-3" variant="outlined">
      <!-- Course Details -->
      <v-text-field label="Course Title" v-model="course.title"></v-text-field>
      <v-text-field label="Course Provider" v-model="course.provider"></v-text-field>
      <date-picker v-model:value="course.purchasedDate" value-type="format" format="MMMM DD, YYYY">
        <template #input>
          <v-text-field
            v-model="course.purchasedDate"
            label="Purchased Date"
            placeholder="MMMM DD, YYYY"
            hide-details
            readonly
          ></v-text-field>
        </template>
      </date-picker>
      <v-radio-group v-model="course.purchaseBy" label="Purchase By">
        <v-radio label="Self" value="self"></v-radio>
        <v-radio label="Career Coach" value="careerCoach"></v-radio>
      </v-radio-group>
      <v-text-field label="Course Amount" v-model="course.amount"></v-text-field>
      <v-textarea label="Description" v-model="course.description"></v-textarea>
      <v-textarea label="Objective" v-model="course.objective"></v-textarea>
      <date-picker v-model:value="course.startDate" value-type="format" format="MMMM DD, YYYY">
        <template #input>
          <v-text-field
            v-model="course.startDate"
            label="Start Date"
            placeholder="MMMM DD, YYYY"
            hide-details
            readonly
          ></v-text-field>
        </template>
      </date-picker>
      <v-text-field label="Lessons" v-model="course.lessons"></v-text-field>
      <date-picker v-model:value="course.endDate" value-type="format" format="MMMM DD, YYYY">
        <template #input>
          <v-text-field
            v-model="course.endDate"
            label="End Date"
            placeholder="MMMM DD, YYYY"
            hide-details
            readonly
          ></v-text-field>
        </template>
      </date-picker>
      <date-picker
        v-model:value="course.certificateSubmissionDate"
        value-type="format"
        format="MMMM DD, YYYY"
      >
        <template #input>
          <v-text-field
            v-model="course.certificateSubmissionDate"
            label="Certificate Submission Date"
            placeholder="MMMM DD, YYYY"
            hide-details
            readonly
          ></v-text-field>
        </template>
      </date-picker>
    </v-card>

    <!-- Course Application Questions -->
    <v-card class="pa-3 mt-3" variant="outlined">
      <h2 class="mb-2">Course Application Questions</h2>
      <v-textarea
        label="What new skills/learnings have you acquired from the course?"
        v-model="course.newSkills"
      ></v-textarea>
      <v-textarea
        label="How useful are these skills to the current/future role work?"
        v-model="course.skillsUsefulness"
      ></v-textarea>
      <v-textarea
        label="How will you apply these new skills in your current/future role/job?"
        v-model="course.skillsApplication"
      ></v-textarea>
    </v-card>

    <!-- Future Course Plan -->
    <v-card class="pa-3 mt-3" variant="outlined">
      <h2 class="mb-2">Future Course Plan</h2>
      <v-textarea
        label="What other courses/certifications do you plan to take in the future? Why?"
        v-model="course.futurePlan"
      ></v-textarea>
    </v-card>

    <!-- Weekly Accomplishments -->
    <v-card class="pa-3 mt-3" variant="outlined">
      <h2 class="mb-2">Weekly Accomplishments</h2>
      <v-textarea
        label="Weekly Accomplishments"
        v-model="course.weeklyAccomplishments"
      ></v-textarea>
    </v-card>

    <!-- Signed by Supervisor -->
    <v-checkbox label="Signed by Supervisor" v-model="course.signedBySupervisor"></v-checkbox>

    <v-btn type="submit">Submit</v-btn>
  </v-form>
</template>
