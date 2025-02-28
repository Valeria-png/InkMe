<template>
    <div class="min-w-3xs rounded-xl overflow-hidden shadow-md bg-white">
      <div class="h-57 bg-gray-300 flex items-center justify-center relative">
        <img src="https://i.pinimg.com/736x/21/90/d2/2190d28e4787bcec589daf1f3fe50c74.jpg" alt="" class="w-full h-full object-cover">
        <button class="absolute top-2 right-2 text-[#FF204E] cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-cart-plus hover:text-navy" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg>

        </button>
      </div>
      <div class="bg-[#FCDEE4] h-32 px-5 py-3">
        <p class="text-[#FF204E] font-bold font-bagel-fat-one text-xl">$000.00</p>
        <h3 @click="isSelected = !isSelected" class="text-[#A0153E] font-semibold font-inter text-wrap text-dark-violet text-lg cursor-pointer">Nombre Artículo</h3>
        <p class="text-[#FF204E] pt-2 text-dark-pink text-sm font-inter">Categoría o Nombre Creador</p>
      </div>
    </div>
    <div v-if="isSelected" class="relative">
      <PopupDiseñoComunidad @close-popup="isSelected = false" class="fixed inset-0"></PopupDiseñoComunidad>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';
  import PopupDiseñoComunidad from './PopupDiseñoComunidad.vue';
  const isSelected = ref(false)

  </script>
  