import { defineStore } from 'pinia'
import type { BenchMember } from '@/types/BenchMember'

export const useBenchMemberStore = defineStore({
  id: 'benchMember',
  state: () => ({
    member: {
      id: null as unknown as number,
      name: '',
      tempPassword: '',
      startDate: ''
    }
  })
})
