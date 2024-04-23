import useAxios from '@/composables/useAxios'
import type { SupervisorAccount } from '@/types/SupervisorAccount'
import type { BenchMember } from '@/types/BenchMember'

export function useRegister() {
  const { registerSupervisor, registerBenchMember } = useAxios

  const register = async (account: SupervisorAccount) => {
    const response = await registerSupervisor(account)
    return response
  }

  const registerBench = async (benchMember: BenchMember) => {
    const response = await registerBenchMember(benchMember)
    return response
  }

  return {
    register,
    registerBench
  }
}
