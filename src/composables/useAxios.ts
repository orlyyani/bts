import api from '@/composables/useApiMiddleware'
import type { SupervisorAccount } from '@/types/SupervisorAccount'
import type { BenchMember } from '@/types/BenchMember'
import type { Login } from '@/types/Common'

const request = async ({
  method,
  url,
  data = null
}: {
  method: 'get' | 'post' | 'put' | 'delete'
  url: string
  data?: any
}) => {
  return await api[method](url, data)
}

const useAxios = {
  login: (data: Login) => request({ method: 'post', url: '/account/login', data }),
  registerSupervisor: (data: SupervisorAccount) =>
    request({ method: 'post', url: '/account', data }),
  registerBenchMember: (data: BenchMember) => request({ method: 'post', url: '/employee', data }),
  getEmployees: () => request({ method: 'get', url: '/employee' }),
  getEmployee: (id: string) => request({ method: 'get', url: `/employee/${id}` }),
  getBench: () => request({ method: 'get', url: '/bench' })
}

export default useAxios
