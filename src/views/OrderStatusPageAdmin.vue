<template>
        <div class="px-12 py-8">
    <div class="flex items-center space-x-4 mb-6">
      <router-link to="/admin">
       <img src="/public/inkme logo.png" alt="Logo Inkme" class="w-35" />
      </router-link>
      <div class="flex space-x-2 overflow-auto">
        <div v-for="n in 25" :key="n" class="min-w-14 h-14 bg-gray-300 rounded"></div>
      </div>
    </div>
    </div>
    <div class="px-12 py-8">
      <h1 class="text-dark-blue font-bold text-xl mb-4">Estado del Producto</h1>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(product, index) in products" :key="index" class="bg-white p-6 rounded-2xl shadow flex items-center">
          <div class="w-20 h-20 bg-gray-200 rounded-lg mr-4"></div>
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <span :style="{ backgroundColor: product.color }" class="w-6 h-6 rounded border"></span>
              <p class="font-bold text-dark-blue">{{ product.name }}</p>
            </div>
            <p class="text-pink-700 font-bold text-lg">{{ product.quantity }} Unidades</p>
            <div class="flex gap-2 mt-3">
              <button class="bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-1">
                📎 Abrir Archivo
              </button>
              <button class="bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-1">
                ✔️ Aprobar Calidad
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </template>
  
  <script setup>
  import Footer from '@/components/Footer.vue';
  import { ref } from 'vue';
  
  const products = ref([
    { name: "Camiseta de Algodón", color: "#ff4d4d", quantity: 300 },
    { name: "Funda Transparente", color: "#cccccc", quantity: 10 },
    {name: "Camiseta de Algodón", color: "#ff4d4d", quantity: 300 },
    { name: "Funda Transparente", color: "#cccccc", quantity: 10 }
  ]);
  </script>
  
  <style scoped>
  button {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  </style>
  