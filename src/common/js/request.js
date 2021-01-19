import axios from 'axios'
const service = axios.create({
  timeout: 40000,
  baseURL: process.env.VUE_APP_URL
})
service.interceptors.request.use(function(config) {
  return config
}, function(err) {
  return Promise.reject(err)
})
service.interceptors.response.use(function(res) {
  return res
}, function(err) {
  return Promise.reject(err)
})
export default {
  service
}