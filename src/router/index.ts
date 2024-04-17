import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginPage.vue'
import Dashboard from '@/views/DashboardPage.vue'
import AdminRegistrationPage from '@/views/Admin/RegistrationPage.vue'
import SupervisorDashboard from '@/views/Supervisor/DashboardPage.vue'
import Cookies from 'js-cookie'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/admin/registration',
    name: 'AdminRegistration',
    component: AdminRegistrationPage
  },
  {
    path: '/supervisor/dashboard',
    name: 'SupervisorDashboard',
    component: SupervisorDashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/admin/registration', '/supervisor/dashboard']
  const authRequired = !publicPages.includes(to.path)
  const token = Cookies.get('token')

  if (authRequired && !token) {
    return next('/login')
  }

  next()
})

export default router
