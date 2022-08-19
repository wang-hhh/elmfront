import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/views/Home/index.vue') },
  { path: '/video/:id', component: () => import('@/views/Video/index.vue') },
  { path: '/login', component: () => import('@/views/Home/user/login.vue') },
  { path: '/register', component: () => import('@/views/Home/user/register.vue') },
  { name: 'businessList', path: '/businessList', component: () => import('@/views/Home/components/businessList.vue') },
  { name: 'businessList2', path: '/businessList/:num', component: () => import('@/views/Home/components/businessList.vue') },
  { name: 'businessType', path: '/businessType', component: () => import('@/views/Home/components/home-businessType.vue') },
  { name: 'businessInfo', path: '/businessInfo/:id', component: () => import('@/views/Home/components/businessInfo.vue') },
  { name: 'order', path: '/order', component: () => import('@/views/Home/order/order.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
