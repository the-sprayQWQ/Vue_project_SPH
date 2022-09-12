//API进行统一管理
import request from './request'
import mockRequest from './mockRequest'

//三级联动接口
// /api/product/getBaseCategoryList get 无参数

export const reqCategoryList = () => {
    //发请求:返回结果为promise
    return request({url:'/product/getBaseCategoryList',method:'get'})
}


export const reqGetbannerList = () => {
    return mockRequest({url:'/banner',method:'get'})
}

export const reqGetfloorList = () => {
    return mockRequest({url:'/floor',method:'get'})
}

export const reqGetSearchInfo = (params) => {
    return request({url:'/list',method:'post',data:params})
}
//获取产品信息详情
export const reqGetStoreList = (skuId) => {
    return request({url:`/item/${skuId}`,method:'get'})
}

//添加商品进入购物车
export const reqAddOrUpdateShopCart = (skuId,skuNum) => {
    return request({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
}

//获取购物车内商品列表
export const reqGetCartList = () => {
    return request({url:"/cart/cartList",method:'get'})
}

//用于删除购物车商品
export const reqDeletShopCartById = (skuId) => {
    return request({url:`/cart/deleteCart/${skuId}`,method:'delete'})
}   
//获取商品的选中状态
export const reqGetShopCartStateById = (skuId,isChecked) => {
    return request({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
}
//获取手机验证码
export const reqGetPhoneCode = (phone) => {
    return request({url:`/user/passport/sendCode/${phone}`,method:'get'})
}
//用于用户完成注册
export const reqUserRegister = (phone,password,code) => {
    return request({url:"/user/passport/register",method:'post',data:phone,password,code})
}
//用于用户登录
export const reqUserLogin = (phone,password) => {
    return request({url:"/user/passport/login",method:'post',data:phone,password})
}
//获取用户信息{需要携带着用户的Token向服务器发请求以便获取用户信息}
export const reqGetUserInfo = () => {
    return request({url:"/user/passport/auth/getUserInfo",method:'get'})
}
//用于用户退出登录
export const reqLogout = () => {
    return request({url:"/user/passport/logout",method:'get'})
}

//获取用户地址
export const reqGetUserAddress = () => {
    return request({url:"/user/userAddress/auth/findUserAddressList",method:'get'})
}

//获取商品订单
export const reqGetShopList = () => {
    return request({url:"/order/auth/trade",method:'get'})
}

//提交订单
export const reqSubmitList = (tradeNo,data) => {
    return request({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
}

//获取订单支付信息
export const reqPayList = (orderId) => {
    return request({url:`/payment/weixin/createNative/${orderId}`,method:'get'})
}

//获取订单支付状态
export const reqGetPaystate = (orderId) => {
    return request({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
}

//获取个人中心数据
export const reqGetPersonCenter = (page,limit) => {
    return request({url:`/order/auth/${page}/${limit}`,method:'get'})
}