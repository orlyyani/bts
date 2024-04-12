import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
// import routes from '@/router'
import router from '@/router'

const vuetify = createVuetify({
  components,
  directives
})

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)
app.mount('#app')
