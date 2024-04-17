import useAxios from '@/composables/useAxios'
import type { SupervisorAccount } from '@/types/SupervisorAccount'

export function useRegisterSupervisor() {
  const { registerSupervisor } = useAxios

  const register = async (account: SupervisorAccount) => {
    const response = await registerSupervisor(account)
    return response
  }

  return {
    register
  }
}
