import { defineStore } from 'pinia'
import type { Account } from '@/types/Common'
import { USER_ROLE } from '@/constants'

export const useUserRoleStore = defineStore({
  id: 'userRole',
  state: () => ({
    id: '',
    employeeName: '',
    isBenchMember: false,
    role: ''
  }),
  actions: {
    async setRole(role: string) {
      this.role = role
    },
    async setAccount(account: Account) {
      if (account.id === 1111 || account.employeeName === 'Administrator') {
        this.setRole(USER_ROLE.ADMIN)
      } else if (account.isBenchMember) {
        this.setRole(USER_ROLE.BENCH_MEMBER)
      } else {
        this.setRole(USER_ROLE.SUPERVISOR)
      }
    }
  }
})
