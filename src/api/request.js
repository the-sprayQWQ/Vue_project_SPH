//对于axios进行二次封装
import axios from 'axios'
//引入nprogress
import nprogress from 'nprogress'
//引入nprogress样式
import "nprogress/nprogress.css"
//在这个模块引入store仓库
import store from '@/store'
//1.利用create方法创建一个实例
const request = axios.create({
    //配置对象
    baseURL:'/api',
    //代表请求超时时间  
    timeout:5000,
})
//请求拦截器
//发送请求过程
request.interceptors.request.use((config) => {
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token
    }
    //判断是否携带了token如果带了token就给服务器传过去
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }
    //进度条开始
    nprogress.start()
    //config:配置对象，对象里面有个属性很重要，header请求头
    return config
})

//响应拦截器
//请求结束
request.interceptors.response.use((res) => {
    //进度条结束
    nprogress.done()
    return res.data
},(error) => {
    return Promise.reject(new Error('fail'))
})

//暴露重写后的axios
export default request