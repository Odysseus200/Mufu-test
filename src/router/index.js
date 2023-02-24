import { createRouter, createWebHistory } from 'vue-router'
// 引入view下HomePage.vue
import HomePage from '../view/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mypage',
      component: HomePage
    }
  ]
})

export default router
