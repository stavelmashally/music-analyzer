import axios, {AxiosInstance, AxiosResponse, AxiosRequestConfig} from 'axios'
import qs from 'qs'

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

const generateToken = async (): Promise<string> => {
  const {
    data: {access_token},
  } = await axios.post(
    'https://accounts.spotify.com/api/token',
    qs.stringify({
      grant_type: 'client_credentials',
    }),
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: process.env.CLIENT_ID!,
        password: process.env.CLIENT_SECRET!,
      },
    },
    )
  
  return access_token
}

const HttpClient: AxiosInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
})

const handleRequest = async (config: AxiosRequestConfig) => {
  const token = await generateToken()
  config.headers.Authorization = `Bearer ${token}`
  return config
}
const handleResponse = ({data}: AxiosResponse) => data
const handleError = (error: any) => Promise.reject(error)
HttpClient.interceptors.response.use(handleResponse, handleError)
HttpClient.interceptors.request.use(handleRequest, handleError)

export {HttpClient}
