<template>
    <div class="bg-white m-0 min-h-screen">
      <!-- Sección principal -->
      <Navbar></Navbar>
      <div class="text-center p-7">
      <h1 class="text-8xl font-bold text-navy mb-30">¡Oops!</h1>
      <p class="text-lg text-gray-600 mb-10">
        No se encontraron resultados para tu búsqueda.
      </p>
      <button 
        @click="router.push('/')" 
        class="bg-navy text-white px-6 py-2 rounded-xl hover:bg-blue-800 transition"
      >
        Volver a Inicio
      </button>
    </div>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import Footer from "../components/Footer.vue";
  import Navbar from "../components/Navbar.vue";
   
  const router = useRouter();
  
  </script>
  