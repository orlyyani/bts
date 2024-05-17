import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginPage.vue'
import Dashboard from '@/views/DashboardPage.vue'
import AdminRegistrationPage from '@/views/Admin/RegistrationPage.vue'
import SupervisorDashboard from '@/views/Supervisor/DashboardPage.vue'
import MemberDetail from '@/views/Supervisor/Members/MemberDetailPage.vue'
import OlpPage from '@/views/Supervisor/Members/Olp/OlpPage.vue'
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
    path: '/supervisor',
    name: 'Supervisor',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: SupervisorDashboard
      },
      {
        path: 'members/:id',
        name: 'MemberDetail',
        component: MemberDetail
      },
      {
        path: 'members/:id/olp/:olpId',
        name: 'OLPDetail',
        component: OlpPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = [
    '/login',
    '/admin/registration',
    '/supervisor/dashboard',
    '/supervisor/members/:id'
  ]
  const authRequired = !publicPages.includes(to.path)
  const token = Cookies.get('token')

  // if (authRequired && !token) {
  //   return next('/login')
  // }

  next()
})

export default router
