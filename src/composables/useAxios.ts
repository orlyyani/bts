import api from '@/composables/useApiMiddleware'

const fetchData = (url: string) => {
  return async () => {
    try {
      const response = await api.get(url)
      return response.data
    } catch (error) {
      console.error('Error fetching data:', error)
      return Promise.reject(error)
    }
  }
}

const useAxios = {
  getData: fetchData('/data')
}

export default useAxios
