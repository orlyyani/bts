import { defineStore } from 'pinia'

export const useSupervisorStore = defineStore({
  id: 'supervisor',
  state: () => ({
    account: {
      supervisorEmpID: '',
      employeeName: '',
      employeePass: '',
      isBenchMember: false,
      teamID: '123',
      isRIVS: false,
      isProfileUpdate: false,
      isActive: true
    }
  }),
  actions: {
    resetAccount() {
      this.account = {
        supervisorEmpID: '',
        employeeName: '',
        employeePass: '',
        isBenchMember: false,
        teamID: '123',
        isRIVS: false,
        isProfileUpdate: false,
        isActive: true
      }
    }
  }
})
