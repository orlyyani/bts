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
  try {
    const response = await api[method](url, data)
    return response.data
  } catch (error) {
    console.error('Error making request:', error)
    return Promise.reject(error)
  }
}

const useAxios = {
  getData: () => request({ method: 'get', url: '/data' }),
  login: (data: Login) => request({ method: 'post', url: '/account/login', data }),
  registerSupervisor: (data: SupervisorAccount) =>
    request({ method: 'post', url: '/supervisor', data }),
  registerBenchMember: (data: BenchMember) => request({ method: 'post', url: '/benchMember', data })
}

export default useAxios
