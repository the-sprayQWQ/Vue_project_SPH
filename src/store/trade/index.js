import {reqGetUserAddress,reqGetShopList} from '@/api'

const state = {
    userAddress:[],
    shopList:{}
}
const mutations = {
    GETUSERADDRESS(state,userAddress){
        state.userAddress = userAddress
    },
    GETSHOPLIST(state,shopList){
        state.shopList = shopList
    }
}
const actions = {
    //获取用户地址信息
    async getUserAddress({commit}){
      let result =  await reqGetUserAddress()
      if(result.code == 200){
          commit('GETUSERADDRESS',result.data)
      }
    },
    //获取商品订单
    async getShopList({commit}){
       let result = await reqGetShopList()
       if(result.code == 200){
           commit('GETSHOPLIST',result.data)
       }
    }
}
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}