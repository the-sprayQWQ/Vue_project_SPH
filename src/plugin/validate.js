import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
import zh_CN from "vee-validate/dist/locale/zh_CN"

//表单验证
VeeValidate.Validator.localize('zh_CN',{
    messages:{
        ...zh_CN.messages,
        is:(field) => `${field}必须与密码相同`
    },
    attributes:{
        phone:'手机号',
        code:'验证码',
        password:'密码',
        password1:'确认密码',
        agree:'同意'
    }
});

//自定义校验规则
VeeValidate.Validator.extend('agree',{
    validate:value => {
        return value
    },
    getMessage: filed => filed + '必须同意'
})