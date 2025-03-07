<template>
  <div class="flex items-center justify-between py-4">
    <!-- Imagen del producto -->
    <div class="p-1">
      <img 
        v-if="item.imagen" 
        class="rounded-xl w-20 h-20 object-cover" 
        :src="item.imagen" 
        alt="Imagen del producto"
      >
    </div>

    <!-- Información del producto -->
    <div class="flex flex-col flex-grow px-4">
      <h1 class="text-dark-violet font-inter font-semibold md:text-xl sm:text-lg">{{ item.items.product_id.name }}</h1>
      
      <!-- Barra de unidades ajustada -->
      <div class="flex items-center mt-1">
        <span class="bg-light-pink text-neon-pink text-xs font-semibold px-2 py-1 rounded-full">
          {{ item.quantity }} Unidades
        </span>
        <div class="bg-light-pink h-3 rounded-full w-32 ml-2"></div>
      </div>

      <p class="text-dark-violet font-inter md:text-lg sm:text-base">{{ item.level }}</p>
    </div>

    <!-- Precios alineados a la derecha -->
    <div class="text-right">
      <p class="text-dark-violet font-inter md:text-lg sm:text-base">
        Precio unitario: 
        <span class="text-neon-pink font-bagel-fat-one">${{ item.unitPrice }}</span>
      </p>
      <p class="text-dark-violet font-inter md:text-lg sm:text-base">
        Total: 
        <span class="text-neon-pink font-bagel-fat-one">${{ item.price }}</span>
      </p>
    </div>
  </div>

  <hr class="border-t-2">
</template>

<script setup>
import { defineProps } from 'vue';
import { onMounted } from 'vue';

defineProps({
  order : Object
});

onMounted(() => {
  console.log(order);
});
</script>
