import {
  reqGetCartList,
  reqDeletShopCartById,
  reqGetShopCartStateById,
} from "@/api";
const state = {
  cartList: [],
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  //获取购物车商品列表
  async GetCartList({ commit }) {
    let result = await reqGetCartList();
    console.log(result);
    if (result.code == 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  //通过ID来删除某个商品
  async DeleteShopCartById({ commit }, skuId) {
    let result = await reqDeletShopCartById(skuId);
    console.log(result);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  //通过ID获取商品选中状态
  async GetShopCartStateById({ commit }, { skuId, isChecked }) {
    let result = await reqGetShopCartStateById(skuId, isChecked);
    console.log(result);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  //删除全部选中商品
  deleteAllCheckedCart({ dispatch, getters }) {
    //dispatch{用来派发actions} getters{计算属性用来获取数据}
    let PromiseAll = [];
    //获取购物车里面的所有商品（是一个数组）
    getters.cartList.cartInfoList.forEach((item) => {
      //如果商品身上的isChecked属性为1，即（input框被勾选）那么就派发上一个接口的action进行删除
      //其返回值为上一个接口的返回值，即（一个promise对象），就是说要么请求成功要么请求失败
      let promise =
        item.isChecked == 1 ? dispatch("DeleteShopCartById", item.skuId) : "";
      PromiseAll.push(promise);
    });
    return Promise.all(PromiseAll);
  },
  //修改全部商品状态
  UpdateAllCartChecked({ dispatch, state }, isChecked) {
    let PromiseAll = [];
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch("GetShopCartStateById", {
        skuId: item.skuId,
        isChecked,
      });
      PromiseAll.push(promise);
    });
    return Promise.all(PromiseAll);
  },
};
const getters = {
  cartList() {
    return state.cartList[0] || {};
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
