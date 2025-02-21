import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import PopupDiseñoComunidad from '@/components/PopupDiseñoComunidad.vue'
import Designs from '@/views/Designs.vue'
import Cart from '@/views/Cart.vue'
import Login from '@/components/Login.vue'
import ArticuloCard from '@/components/ArticuloCard.vue'
import CategoryItem from '@/components/CategoryItem.vue'
import Home from '@/views/Home.vue'
import Catalog from '@/views/Catalog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: Catalog,
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
    }

  ],
})

export default router
