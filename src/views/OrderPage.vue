<template>
    <Navbar />
    <div class="sm:grid-cols-1 gap-4 xl:px-48 lg:px-36 md:px-24 sm:px-12 py-12">
      <h5 class="text-dark-blue font-bold text-xl mb-4">Pedido del 04/02/2025</h5>
      <div class="bg-white p-6 rounded-lg shadow">
        <OrderDetailsItem
          v-for="item in ProductCards" 
          :key="item.id" 
          :item="item"
        />
      </div>
    </div>
    <Footer></Footer>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import OrderDetailsItem from '@/components/OrderDetailsItem.vue';

const route = useRoute();
const order = ref(null);

async function fetchOrderDetails() {
  try {
    const response = await fetch(`https://inkmeapi.onrender.com/api/orders/${route.params.id}`);
    order.value = await response.json();
  } catch (error) {
    console.error('Error cargando el pedido:', error);
  }
}

onMounted(fetchOrderDetails);
</script>