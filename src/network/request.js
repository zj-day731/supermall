import axios from 'axios'

export function homeRequest(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })
  instance.interceptors.request.use(config => {
    console.log('request')
    return config
  }, error => {
    console.log('error')
    return error
  })
  instance.interceptors.response.use(res => {
    console.log('response')
    return res.data
  }, error => {
    console.log('error')
    return error
  })
  return instance(config)
}
