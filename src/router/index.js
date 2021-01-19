import {
  createRouter,
  createWebHistory
} from "vue-router"
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home/index',
      component: () => import('@/views/Home'),
      name: 'Home',
      meta: { title: '首页', noCache: true }
    },
    {
      path: '/login',
      component: () => import('@/views/Login'),
      name: 'Login',
      meta: { title: '登录', noCache: true }
    },
    {
      path: '/',
      redirect: '/home/index',
      hidden: true
    }
  ]
})
