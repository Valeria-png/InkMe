import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Footer from '../components/Footer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer,
    },



  ],
})

export default router
