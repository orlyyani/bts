import { defineStore } from 'pinia'
import type { SupervisorAccount } from '@/types/SupervisorAccount'

export const useSupervisorStore = defineStore({
  id: 'supervisor',
  state: () => ({
    account: {
      employeeId: '',
      name: '',
      tempPassword: ''
    }
  }),
  actions: {
    updateAccount(account: SupervisorAccount) {
      this.account = account
    }
  }
})
