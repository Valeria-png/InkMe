<template>
  <Navbar></Navbar>
  <div class="px-12 py-8 h-dvh">
    <h1 class="text-dark-blue font-bold text-xl mb-4">Mis pedidos</h1>
    <div v-if="orders.length > 0" class="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      <OrderCard v-for="order in orders" :key="order.id" :order="order" />
    </div>
    <div v-else class="text-gray-500 text-lg mt-4">
      No tienes pedidos aún.
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import OrderCard from '@/components/OrderCard.vue';
import { useUserStore } from '../stores/userStore';

const orders = ref([]);
const userStore = useUserStore();

const fetchOrders = async () => {
  try {
    // Obtenemos dinámicamente el ID del usuario logueado
    const response = await fetch(`https://inkmeapi.onrender.com/api/orders/user/${userStore.id}`);
    const data = await response.json();
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
  } catch (error) {
    console.error("Error al obtener los pedidos:", error);
  }
};


onMounted(fetchOrders);
</script>
