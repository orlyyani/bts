<script setup lang="ts">
import { ref } from 'vue'
import { MENU_ITEMS } from '@/constants'

const drawer = ref(true)
const rail = ref(false)
const activeMenu = ref()
const menuItems = ref(MENU_ITEMS)
</script>

<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        nav
      >
        <template v-slot:append>
          <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
          :to="item.route"
          @click="activeMenu = item.title"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="height: 250px">
      <v-app-bar app>
        <v-toolbar-title class="mr-auto">Dashbaord</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          append-inner-icon="mdi-magnify"
          density="compact"
          label="Search"
          variant="solo"
          hide-details
          single-line
        ></v-text-field>
        <slot name="menu"></slot>
      </v-app-bar>
      <slot></slot>
    </v-main>
  </v-layout>
</template>
