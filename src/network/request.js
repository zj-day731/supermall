import axios from 'axios'

export function homeRequest(config) {
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/v1',
    timeout: 5000,
  })
  instance.interceptors.request.use(config => {
    // console.log('request')
    return config
  }, error => {
    console.log('error')
    return error
  })
  instance.interceptors.response.use(res => {
    // console.log('response')
    return res.data
  }, error => {
    console.log('error')
    return error
  })
  return instance(config)
}
