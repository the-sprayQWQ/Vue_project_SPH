import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y:0 }
      },
})

router.beforeEach(async (to,from,next) => {
    // next()
    console.log(store);
    let token = store.state.user.token
    //用户信息
    let name = store.state.user.userInfo.name
    //用户已经登陆
    if(token){
        //就不能去登陆页面了
        if(to.path == '/login'){
            next('/home')
        }else{
            //去的其他页面
            if(name){
                next();
            }else{
                try {
                    await store.dispatch('GetUserInfo')
                    next();
                } catch (error) {   
                    //token失效
                    //获取不到信息重新登陆
                   await store.dispatch('UserLogout')
                   next('/login')
                }
            }
        }
    }else{
        //未登录、不能去交易相关、不能去支付相关、不能去个人中心
        let toPath = to.path
        if(toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1){
            //存储在地址栏
            next('/login?redirect='+toPath)
        }else{
            next();
        }

    }
})

export default router;