import {reqGetSearchInfo} from '@/api'
//search的小仓库
//state存储数据的地方
const state = {
    searchInfo:{}
}
//mutations,state修改的唯一手段
const mutations = {
    GETSEARCHINFO(state,searchInfo){
        state.searchInfo = searchInfo
    }
}
//actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    async GetSearchInfo({commit},params = {}){
    let result = await reqGetSearchInfo(params)
    console.log(result);
    if(result.code == 200){
        commit('GETSEARCHINFO',result.data)
        }
    }
}
//getters,理解为计算属性，用于简化仓库数据
const getters = {
    goodsList(state)
    {
        return state.searchInfo.goodsList||[]
    },
    attrsList(state){
        return state.searchInfo.attrsList||[]
    },
    trademarkList(state){
        return state.searchInfo.trademarkList||[]
    }

}

export default{
    state,
    mutations,
    actions,
    getters
}