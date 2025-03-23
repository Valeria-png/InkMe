<template>
  <div 
    class="flex items-center font-inter p-4 border rounded-xl shadow-sm cursor-pointer"
    @click="goToOrderDetails"
  >
    <div class="relative w-20 h-20 bg-gray-300 rounded-lg">
      <span 
        v-if="order.status === 'pending'" 
        class="absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full"
      ></span>
    </div>
    <div class="ml-4 flex flex-col justify-between">
      <h2 class="text-dark-violet font-semibold text-lg">{{ new Date(order.date).toLocaleDateString('es-MX') }}</h2>
      <p class="text-gray-600">{{ order.items }} Artículos</p>
      <button 
        @click.stop="goToOrderDetails"
        class="bg-light-pink text-neon-pink px-2 py-1 rounded-md text-sm cursor-pointer"
      >
        Ver detalles
      </button>
    </div>
    <p class="ml-auto text-neon-pink font-bold text-lg">${{ order.total.toFixed(2) }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  order: Object
});

const router = useRouter();

const goToOrderDetails = () => {
  router.push({ 
    name: 'order',
    params: { id: props.order.id },
  });
};
</script>
