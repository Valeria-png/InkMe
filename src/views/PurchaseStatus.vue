<template>
  <Navbar />
  <div class="sm:grid-cols-1 gap-4 xl:px-48 lg:px-36 md:px-24 sm:px-12 py-12">
    <h2 class="text-dark-blue font-bold text-xl mb-4">Estáus de compra</h2>
    <h4 class="text-dark-blue font-bold text-xl mb-4">Pedido del 04/02/2025</h4>

    <!-- Barra de progreso -->
    <ProgressBar :steps="steps" :currentStep="currentStep" class="mb-6" />

    <div class="bg-white p-6 rounded-lg shadow">
      <OrderDetailsItem
        v-for="item in ProductCards"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import OrderDetailsItem from '@/components/OrderDetailsItem.vue';
import ProgressBar from '@/components/ProgressBar.vue'; // Importa el componente de la barra de progreso
import { ref } from 'vue';

const ProductCards = ref([
  { id: 1, name: "Artículo 1", imagen: "", price: 150, unitPrice: 150, level: "nivel menudeo", quantity: 4 },
  { id: 2, name: "Artículo 2", imagen: "", price: 300, unitPrice: 100, level: "nivel menudeo", quantity: 6 },
  { id: 3, name: "Artículo 3", imagen: "", price: 300, unitPrice: 100, level: "nivel menudeo", quantity: 9 }
]);

// Pasos del pedido
const steps = ref(["Procesando", "En camino", "Entregado"]);
const currentStep = ref(1); // Cambia este valor según el estado del pedido
</script>
