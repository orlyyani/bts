import useAxios from '@/composables/useAxios'
import type { Login } from '@/types/Common'

export function useAuth() {
  const { login } = useAxios

  const authenticate = async (data: Login) => {
    const response = await login(data)
    return response
  }

  return {
    authenticate
  }
}
