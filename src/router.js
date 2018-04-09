import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Nice from './views/Nice.vue'
import Dongtai from './views/Dongtai.vue'
import Lianxi from './views/Lianxi.vue'
Vue.use(Router)

export default new Router({
  routes: [  
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/Nice/:fenlei',
      name:'Nice',
      component:Nice
    },
    {
      path:'/Dongtai',
      name:'Dongtai',
      component:Dongtai,
      // children:{
      //   path:'/Erji',
      //   name:'Erji',
      //   component:Erji
      // }
    },
    {
      path:'/Lianxi',
      name:'Lianxi',
      component:Lianxi
    }
  ]
})
