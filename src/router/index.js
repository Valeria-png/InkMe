import { createRouter, createWebHistory } from 'vue-router'
import Designs from '@/views/Designs.vue'
import Cart from '@/views/Cart.vue'
import Login from '@/components/Login.vue'
import CategoryItem from '@/components/CategoryItem.vue'
import Home from '@/views/Home.vue'
import Catalog from '@/views/Catalog.vue'
import CommunityDesigns from '@/views/CommunityDesigns.vue'
import OrderView from '@/views/OrderView.vue'
import ProductView from '@/views/ProductView.vue'
import ProdcutStatus from '@/views/ProductStatusView.vue'

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
      path: '/mis-disenos',
      name: 'designs',
      component: Designs,
    },
    {
      path: '/carrito',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryItem,
    },
    {
      path: '/disenos-comunidad',
      name: 'diseños-comunidad',
      component: CommunityDesigns,
    },
    {
      path : '/product',
      name : 'product',
      component : ProductView
    },
    {
      path : '/order',
      name : 'order',
      component : OrderView
    },
    {
      path : '/product-status',
      name : 'product-status',
      component : ProdcutStatus
    }

  ],
})

export default router
