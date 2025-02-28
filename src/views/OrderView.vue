<template>
    <Navbar></Navbar>
    <div class="px-12 py-8">
      <h1 class="text-dark-blue font-bold text-xl mb-4">Mis pedidos</h1>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        <OrderCard v-for="order in orders" :key="order.id" :order="order" />
      </div>
    </div>
    <Footer></Footer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import OrderCard from '@/components/OrderCard.vue';
  
  const orders = ref([
    { id: 1, date: 'DD/MM/YYYY', items: 3, total: 0, status: 'pending' },
    { id: 2, date: 'DD/MM/YYYY', items: 6, total: 0, status: 'pending' },
    { id: 3, date: 'DD/MM/YYYY', items: 4, total: 0, status: 'pending' },
    { id: 4, date: 'DD/MM/YYYY', items: 9, total: 0, status: 'pending' },
    { id: 5, date: 'DD/MM/YYYY', items: 2, total: 0, status: 'pending' },
  ]);
  </script>