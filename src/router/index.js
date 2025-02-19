import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'
import ArticuloCard from '@/components/ArticuloCard.vue'
import CategoryItem from '@/components/CategoryItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/card',
      name: 'card',
      component: ArticuloCard,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryItem,
    },

  ],
})

export default router
