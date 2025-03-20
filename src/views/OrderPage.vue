<template>
  <Navbar />
  
  <div class="sm:grid-cols-1 gap-4 xl:px-48 lg:px-36 md:px-24 sm:px-12 py-12">
    <h5 class="text-dark-blue font-bold text-xl mb-4">
      Pedido del {{ new Date(order?.date).toLocaleDateString('es-MX') }}
    </h5>
    
    <div class="mb-8">
      <ProgressBar 
        :steps="steps" 
        :currentStep="currentStep" 
      />
    </div>
    
    <div class="bg-white p-6 rounded-lg shadow">
      <OrderDetailsItem
        v-for="item in order?.items || []" 
        :key="item._id" 
        :item="item"
      />
    </div>
  </div>
  
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import OrderDetailsItem from '@/components/OrderDetailsItem.vue';
import ProgressBar from '@/components/ProgressBar.vue'; 

const route = useRoute();
const order = ref(null);

const steps = ['Recibido', 'Preparando', 'Enviado', 'Entregado']; 
const currentStep = ref(0); 

async function fetchOrderDetails() {
  try {
    const response = await fetch(`https://inkmeapi.onrender.com/api/orders/${route.params.id}`);
    order.value = await response.json();

 
    switch (order.value.status) {
      case 'Recibido':
        currentStep.value = 0;
        break;
      case 'Preparando':
        currentStep.value = 1;
        break;
      case 'Enviado':
        currentStep.value = 2;
        break;
      case 'Entregado':
        currentStep.value = 3;
        break;
      default:
        currentStep.value = 0;
    }

  } catch (error) {
    console.error('Error cargando el pedido:', error);
  }
}

onMounted(fetchOrderDetails);
</script>
