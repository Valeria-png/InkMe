import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import PopupDiseñoComunidad from '@/components/PopupDiseñoComunidad.vue'
import Designs from '@/views/Designs.vue'
import Cart from '@/views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Navbar,
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
    {
      path: '/popup',
      name: 'popup',
      component: PopupDiseñoComunidad,
    }

  ],
})

export default router
