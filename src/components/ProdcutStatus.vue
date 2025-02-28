<template>
    <div class="px-12 py-8">
    <div class="flex items-center space-x-4 mb-6">
      <img src="/public/inkme logo.png" alt="Logo Inkme" class="w-24" />
      <div class="flex space-x-2 overflow-hidden">
        <div v-for="n in 8" :key="n" class="w-16 h-16 bg-gray-300 rounded"></div>
      </div>
    </div>
</div>
  <div class="flex items-center border rounded-lg p-4">
    <div class="w-24 h-24 bg-gray-300 rounded-md"></div>
    
    <div class="ml-4 flex flex-col justify-between">
      <div class="flex items-center">
        <span class="w-6 h-6 bg-red-500 rounded-md border border-dark"></span>
        <p class="ml-2 text-dark font-semibold">Tipo de Producto</p>
      </div>
      <h2 class="text-lg font-bold text-dark">{{ item.name }}</h2>
      <p class="text-neon-pink text-lg font-semibold">{{ item.quantity }} Unidadeeeeeeeeeeeees</p>
      
      <div class="flex space-x-4 mt-2">
        <button class="bg-neon-pink text-white px-4 py-2 rounded-lg flex items-center">
          <span class="mr-2">📎</span> Abrir Archivo
        </button>
        <button class="bg-neon-pink text-white px-4 py-2 rounded-lg flex items-center">
          <span class="mr-2">✔</span> Aprobar Calidad
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: Object
});
</script>
