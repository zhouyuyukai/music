import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index/Index.vue'
import Login from '../views/Login.vue'
import Detail from '../views/Detail.vue'
import Memo from '../views/index/pages/Memo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect: '/index/memo',
      children:[
        {
          path: '/index/memo',
          name: 'memo',
          component: Memo,
        },
        {
          path: '/index/addition',
          name: 'addition',
          component: () => import('../views/index/pages/Addition.vue'),
        },
        {
          path: '/index/mine',
          name: 'mine',
          component: () => import('../views/index/pages/Mine.vue'),
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if( to.fullPath !== '/login' ){ 
    let token = localStorage.getItem("token");
    // console.log(token)
    if( !token ){
      next('/login')
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
