//detail的小仓库
import { reqGetStoreList,reqAddOrUpdateShopCart } from "@/api"
//随机生成一个UUID---->不能再次改变了
import {getUUID} from '@/utils/uuid_token'
const state = {
    storeList:{},
    //生成一个游客用的临时token
    uuid_token:getUUID()
}

const actions = {
    async GetStoreList({commit},skuId){
        let result = await reqGetStoreList(skuId)
        console.log(result);
        if(result.code == 200){
            commit('GETSTORELIST',result.data)
        }
    },
    //async返回的是promise
    async AddOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        console.log(result);
        if(result.code == 200){
            return "success"
        }else{
            return Promise.reject(new Error('failed'))
        }
    }
}

const mutations = {
    GETSTORELIST(state,storeList){
        state.storeList = storeList
    }

}

const getters = {
    categoryView(state){
        return state.storeList.categoryView || {}
    },
    skuInfo(state){
        return state.storeList.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.storeList.spuSaleAttrList || []
    }
}


export default {
    mutations,
    getters,
    actions,
    state
}