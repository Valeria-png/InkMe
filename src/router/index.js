import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import PopupDiseñoComunidad from '@/components/PopupDiseñoComunidad.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Navbar,
    },
    {
      path: '/popup',
      name: 'popup',
      component: PopupDiseñoComunidad
    }

  ],
})

export default router
