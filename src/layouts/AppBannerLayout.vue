<script setup lang="ts">
import banner from '@/assets/banner.jpg'
</script>

<template>
  <v-layout>
    <v-main>
      <v-row>
        <v-col class="d-none d-md-flex" md="6">
          <v-img :src="banner" class="h-100 w-100" cover></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <slot></slot>
        </v-col>
      </v-row>
    </v-main>
  </v-layout>
</template>
