//register的小仓库
import { reqGetPhoneCode,reqUserRegister,reqUserLogin,reqGetUserInfo,reqLogout } from "@/api"

const state = {
    phoneCode:"",
    token:localStorage.getItem('TOKEN'),
    userInfo:{},
}
const mutations = {
    GETPHONECODE(state,phoneCode){
        state.phoneCode = phoneCode
    },
    USERLOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    //清除用户信息
    CLEAR(state){
      state.token = '',
      state.userInfo = '',
      localStorage.removeItem('TOKEN')
    }
}
const actions = {
    //获取手机验证码
    async GetPhoneCode({commit},phone){
      let result =  await reqGetPhoneCode(phone);
    //   console.log(result);
      if (result.code == 200) {
            commit('GETPHONECODE',result.data)
        return "ok";
      } else {
        return Promise.reject(new Error("failed"));
      }
    },
    //用户进行注册
    async UserRegister({commit},phone,password,code){
        let result =  await reqUserRegister(phone,password,code);
        // console.log(result);
        if (result.code == 200) {
          return "ok";
        } else {
          return Promise.reject(new Error("failed"));
        }
    },
    //用户登录
    async UserLogin({commit},phone,password){
     let result = await reqUserLogin(phone,password)
    //  console.log(result);
     if(result.code == 200){
         commit('USERLOGIN',result.data.token)
         localStorage.setItem('TOKEN',result.data.token)
         return "ok";
        } else {
          return Promise.reject(new Error("failed"));
     }
    },
    //获取用户信息
    async GetUserInfo({commit}){
     let result = await  reqGetUserInfo()
    //  console.log(result);
     if(result.code == 200){
         commit('GETUSERINFO',result.data)
         return 'ok'
     }else{
       return Promise.reject(new Error('failed'))
     }
    },
    //用户退出登录
    async UserLogout({commit}){
      let result =  await reqLogout()
      if(result.code == 200){
        commit('CLEAR')
        return 'ok'
      }else{
        return Promise.reject(new Error('failed'))
      }
    }
}
const getters = {
    
}

export default{
    state,
    mutations,
    actions,
    getters
}