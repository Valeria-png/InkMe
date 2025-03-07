import { createRouter, createWebHistory } from 'vue-router'
import Designs from '@/views/MyDesigns.vue'
import Cart from '@/views/Cart.vue'
import Login from '@/components/Login.vue'
import CategoryItem from '@/components/CategoryItem.vue'
import Home from '@/views/Home.vue'
import Catalog from '@/views/Catalog.vue'
import CommunityDesigns from '@/views/CommunityDesignsPage.vue'
import OrderView from '@/views/MyOrders.vue'
import OrderStatus from '@/views/OrderStatusPageAdmin.vue'
import ProductPage from '@/views/ProductPage.vue'
import SubirDiseño from '@/views/UploadDesignPage.vue'
import Categories from '@/views/CategoryPage.vue'
import OrderPage from '@/views/OrderPage.vue'
import FAQ from '@/views/FAQ.vue'

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
      name : 'producto',
      component : ProductPage
    },
    {
      path : '/mis-pedidos',
      name : 'pedidos',
      component : OrderView
    },
    {
      path : '/pedido',
      name : 'order',
      component : OrderPage
    },
    {
      path : '/product-status',
      name : 'product-status',
      component : OrderStatus
    },
    {
      path: '/subir-diseno',
      name: 'subir-diseno',
      component: SubirDiseño
    },
    {
      path: '/categoria',
      name: 'categorias',
      component: Categories
    },
    {
      path: '/preguntas-frecuentes',
      name: 'preguntas-frecuentes',
      component: FAQ
    }

  ],
})

export default router
