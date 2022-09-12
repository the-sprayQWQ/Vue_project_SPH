import Vuex from 'vuex'
import Vue from 'vue'
//引入小仓库
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'
Vue.use(Vuex)

//对外暴露Store类的一个实例
export default new Vuex.Store({
    modules:{
        home:home,
        search:search,
        detail:detail,
        shopcart:shopcart,
        user:user,
        trade:trade,
    }
});