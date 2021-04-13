import axios, {AxiosInstance, AxiosResponse} from 'axios'

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

const httpClient: AxiosInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
})

const handleResponse = ({data}: AxiosResponse) => data
const handleError = (error: any) => Promise.reject(error)
httpClient.interceptors.response.use(handleResponse, handleError)

const httpAuthClient: AxiosInstance = axios.create({
  baseURL: 'https://accounts.spotify.com/api',
})
httpAuthClient.interceptors.response.use(handleResponse, handleError)

export { httpClient, httpAuthClient }
