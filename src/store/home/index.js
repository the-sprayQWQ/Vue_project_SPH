//home的小仓库
//引入api
import {reqCategoryList,reqGetbannerList,reqGetfloorList} from '@/api/index'
//state存储数据的地方
const state = {
    namespaced:true,
    //state中的数据默认不要瞎写
    categoryList:[],
    //轮播图
    bannerList:[],
    //展示区
    floorList:[],
}
//mutations,state修改的唯一手段
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
        categoryList.pop()
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
//actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    //通过API里面的接口函数调用向服务器发请求获取数据
    async categoryList({commit}){
       let result = await reqCategoryList()
       if(result.code == 200){
           commit('CATEGORYLIST',result.data)
       }
    },
    //获取首页轮播图的数据
    async GetbannerList({commit}){
        let result = await reqGetbannerList()
        console.log(result);
        if(result.code == 200){
            commit('GETBANNERLIST',result.data)
        }
    },
    async GetfloorList({commit}){
        let result = await reqGetfloorList()
        console.log(result);
        if(result.code == 200){
            commit('GETFLOORLIST',result.data)
        }
    }
}
//getters,理解为计算属性，用于简化仓库数据
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}