<template>
    <footer class="bg-light-pink py-6 text-center font-inter">
      <div class="bg-light-pink rounded-lg mt-6 p-4 flex flex-col md:flex-row items-center md:items-start">
        <img src="../assets/img/inkme logo.png" alt="InkMe Logo" class="w-60 h-auto mb-4 md:mb-0 md:mr-8" />
        <div class="text-left md:text-right md:ml-auto">
          <h4 class="font-bold text-xl">Comienza a crear</h4>
          <ul class="text-navy text-base md:text-lg">
            <li>Preguntas frecuentes</li>
            <li>Mis diseños</li>
            <li>Términos y condiciones</li>
          </ul>
        </div>
        <div class="text-left md:text-right md:ml-auto">
          <h4 class="font-bold text-xl">Adquiere productos</h4>
          <ul class="text-navy text-base md:text-lg">
            <li @click="router.push('/catalogo')" class="cursor-pointer hover:underline">Catálogo</li>
            <li @click="router.push('/disenos-comunidad')" class="cursor-pointer hover:underline">Diseños de la comunidad</li>
            <li>Todos los artículos</li>
          </ul>
        </div>
      </div>
    </footer>
  </template>

  <script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  </script>
  