import { defineStore } from 'pinia'
import type { BenchMember } from '@/types/BenchMember'
import useAxios from '@/composables/useAxios'

const { getEmployees } = useAxios

export const useBenchMemberStore = defineStore({
  id: 'benchMember',
  state: () => ({
    account: {
      supervisorEmpID: '',
      employeeName: '',
      employeePass: '',
      isBenchMember: false,
      teamID: '123',
      isRIVS: false,
      isProfileUpdate: false,
      isActive: true,
      dateCreated: ''
    },
    members: [] as BenchMember[]
  }),
  getters: {
    benchMembers(state) {
      return state.members.filter((member: BenchMember) => member.isBenchMember)
    }
  },
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
        isActive: true,
        dateCreated: ''
      }
    },
    async fetchEmployees() {
      const response = await getEmployees()

      if (!response.data) {
        throw new Error('Failed to fetch employees')
      } else {
        this.members = response.data?.employees || []
      }
    }
  }
})
