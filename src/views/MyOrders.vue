<template>
    <Navbar></Navbar>
    <div class="px-12 py-8 h-dvh">
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

async function fetchOrders() {
    const response = await fetch('https://inkmeapi.onrender.com/api/orders/user/67c1bccc03ce764eceec5441');
    return await response.json();
  }
  
  const orders = ref([]);
  
  fetchOrders().then(data => {
  orders.value = data.map(order => ({
    id: order._id, 
    user: order.user_id,
    items: order.items.length,
    total: order.total,
    deliveryCost: order.deliveryCost,
    deliveryAddress: order.deliveryAddress,
    date: order.date,
    status: order.status
  }));
});

  </script>