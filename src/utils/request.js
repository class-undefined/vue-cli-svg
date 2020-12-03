import axios from 'axios'
import store from '@/store'
import { getToken } from './caches'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 7000
})

service.interceptors.request.use(
    config => {
        // do something before request is sent
        if (store.getters.token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

service.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
})


export default service