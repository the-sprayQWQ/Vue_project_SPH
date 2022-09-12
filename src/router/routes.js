export default [
  {
    path: "/center",
    name: "center",
    component:()=>import('@/pages/Center'),
    meta: { show: true },
    children:[
      {
        path:'myorder',
        component:()=>import('@/pages/Center/myOrder'),
      },
      {
        path:'grouporder',
        component:()=>import('@/pages/Center/groupOrder')
      },
      {
        path:'/center',
        redirect:'/center/myorder'
      }
    ]
  },
  {
    path: "/paysuccess",
    name: "paysuccess",
    component: ()=>import('@/pages/PaySuccess'),
    meta: { show: true },
  },
  {
    path: "/pay",
    name: "pay",
    component: ()=>import('@/pages/Pay'),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if(from.path == '/trade'){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: "/trade",
    name: "trade",
    component: ()=>import('@/pages/Trade'),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if(from.path=='/shopcart'){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: "/shopcart",
    name: "ShopCart",
    component: ()=>import('@/pages/ShopCart'),
    meta: { show: true },
  },
  {
    path: "/addcartsuccess",
    name: "AddCartSuccess",
    component: ()=>import('@/pages/AddCartSuccess'),
    meta: { show: true },
  },
  {
    path: "/detail/:skuid",
    name: "detail",
    component: ()=>import('@/pages/Detail'),
    meta: { show: true },
  },
  {
    path: "/home",
    name: "home",
    component: ()=>import('@/pages/Home'),
    meta: { show: true },
  },

  {
    path: "/login",
    component: ()=>import('@/pages/Login'),
    meta: { show: false },
  },

  {
    path: "/register",
    component: ()=>import('@/pages/Register'),
    meta: { show: false },
  },
  {
    path: "/search/:keyword?",
    name: "search",
    component: ()=>import('@/pages/Search'),
    meta: { show: true },
  },
  //重定向
  {
    path: "*",
    redirect: "/home",
  },
];
