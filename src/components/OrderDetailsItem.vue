<template>
  <div class="flex items-center justify-between py-4">
    <!-- Imagen del producto -->
    <div class="p-1">
      <img 
        v-if="item.product_id.file" 
        class="rounded-xl w-20 h-20 object-cover" 
        :src="item.product_id.file" 
        alt="Imagen del producto"
      >
    </div>

    <!-- Información del producto -->
    <div class="flex flex-col flex-grow px-4">
      <h1 class="text-dark-violet font-semibold md:text-xl sm:text-lg">
        {{ item.product_id.name }}
      </h1>
      
      <!-- Cantidad -->
      <div class="flex items-center mt-1">
        <span class="bg-light-pink text-neon-pink text-xs font-semibold px-2 py-1 rounded-full">
          {{ item.amount }} Unidades
        </span>
      </div>
    </div>

    <!-- Precios -->
    <div class="text-right">
      <p class="text-dark-violet md:text-lg sm:text-base">
        Precio unitario: 
        <span class="text-neon-pink font-bold">
          ${{ calculateUnitPrice(item).toFixed(2) }}
        </span>
      </p>
      <p class="text-dark-violet md:text-lg sm:text-base">
        Total: 
        <span class="text-neon-pink font-bold">
          ${{ (calculateUnitPrice(item) * item.amount).toFixed(2) }}
        </span>
      </p>
    </div>
  </div>

  <hr class="border-t-2">
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: Object
});

// Calcular el precio según el nivel del usuario (puedes ajustarlo según sea necesario)
const calculateUnitPrice = (item) => {
  return item.product_id.lvl1_price || 0; // Ajustar si hay niveles de precios
};
</script>
