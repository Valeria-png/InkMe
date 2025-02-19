import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Designs from '@/views/Designs.vue'
import Cart from '@/views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/designs',
      name: 'designs',
      component: Designs,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },

  ],
})

export default router
