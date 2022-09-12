//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入路由器
import VueRouter from 'vue-router'
import router from './router'
import store from '@/store'
//引入mock文件
import '@/mock/mockserve'
//引入swiper样式
import "swiper/dist/css/swiper.min.css"
//统一引入api
import * as API from '@/api'
//测试接口
// import {reqCategoryList} from '@/api'
// reqCategoryList();
//将三级联动组件注册为全局组件
import TypeNav from '@/components/TypeNav'
//引入轮播图相关全局组件
import Carousel from '@/components/Carousel'
//将分页器注册为全局组件
import Pagination from '@/components/Pagination'
import {Button,MessageBox} from 'element-ui'
//引入图片懒加载
import VueLazyload from 'vue-lazyload'
import atm from '@/assets/1.gif'
//引入表单验证插件
import '@/plugin/validate'
//使用vue.component方法,第一个参数组件的名字，第二个参数哪个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name,Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//关闭Vue的生产提示
Vue.config.productionTip = false
//使用路由
Vue.use(VueRouter)
Vue.use(VueLazyload,{loading: atm})





//创建vm
new Vue({
	el:'#app',
	beforeCreate(){
	Vue.prototype.$bus = this
	Vue.prototype.$API = API
	},
	render: h => h(App),
	router:router,
	store,
})