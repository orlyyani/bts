import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginPage.vue'
import Dashboard from '@/views/DashboardPage.vue'
import AdminRegistrationPage from '@/views/Admin/RegistrationPage.vue'
import SupervisorDashboard from '@/views/Supervisor/DashboardPage.vue'
import MemberDetail from '@/views/Supervisor/Members/MemberDetailPage.vue'
import OlpPage from '@/views/Supervisor/Members/Olp/OlpPage.vue'
import Cookies from 'js-cookie'
import { USER_ROLE } from '@/constants'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Root',
    redirect: () => {
      const userRole = Cookies.get('role')

      switch (userRole) {
        case USER_ROLE.ADMIN:
          return '/admin/registration'
        case USER_ROLE.SUPERVISOR:
          return '/supervisor/dashboard'
        case USER_ROLE.BENCH_MEMBER:
          return '/login'
        default:
          return '/login'
      }
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { roles: [USER_ROLE.SUPERVISOR] }
  },
  {
    path: '/admin/registration',
    name: 'AdminRegistration',
    component: AdminRegistrationPage,
    meta: { roles: [USER_ROLE.ADMIN] }
  },
  {
    path: '/supervisor',
    name: 'Supervisor',
    meta: { roles: [USER_ROLE.SUPERVISOR] },
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
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const token = Cookies.get('token')

  if (authRequired && !token) {
    return next('/login')
  }

  const userRole = Cookies.get('role')

  // Check if the route requires a role
  if (to.meta.roles && !to.meta.roles.includes(userRole)) {
    // If the user's role is not allowed, redirect to the login page
    return next('/login')
  }

  next()
})

export default router
