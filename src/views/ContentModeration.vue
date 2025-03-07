<template>
  <div class="flex items-center space-x-4 mb-6">
      <router-link to="/admin">
       <img src="/public/inkme logo.png" alt="Logo Inkme" class="w-35" />
      </router-link>
      <div class="flex space-x-2 overflow-auto">
        <div v-for="n in 25" :key="n" class="min-w-14 h-14 bg-gray-300 rounded"></div>
      </div>
    </div>
    <div class="p-6 max-w-4xl mx-auto rounded-lg">
      <div class="grid grid-cols-3 gap-4">
        <!-- Imagen principal -->
        <div class="col-span-1 bg-gray-300 h-80 rounded-md overflow-hidden">
          <img v-if="mainImage" :src="mainImage" alt="" class="w-full h-full object-cover">
        </div>
        
        <!-- Información del diseño -->
        <div class="col-span-2 space-y-4">
          <div>
            <label class="block text-gray-600">Título del diseño</label>
            <input 
              type="text" 
              v-model="title" 
              class="w-full border p-2 rounded-xl text-dark-pink font-bold"
              :readonly="!isEditable"
            >
          </div>
          
          <div>
            <label class="block text-gray-600">Descripción del diseño</label>
            <textarea 
              v-model="description" 
              class="w-full border p-2 rounded-xl text-navy"
              :readonly="!isEditable"
            ></textarea>
          </div>
          
          <button 
            class="bg-light-pink text-dark-pink p-2 rounded-xl cursor-pointer hover:scale-105 transition"
            @click="toggleEditable"
          >
            Editar nombre o descripción
          </button>
  
          <div class="flex justify-between mt-6">
            <button class="bg-neon-pink text-white px-6 py-2 rounded-xl cursor-pointer hover:scale-105 transition">Aprobar Diseño</button>
            <button class="bg-dark-pink text-white px-6 py-2 rounded-xl cursor-pointer hover:scale-105 transition">Desaprobar Diseño</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        title: "Nombre Título de Diseño Subido",
        description: "Descripción del diseño subido por el usuario",
        mainImage: "https://via.placeholder.com/300", // Imagen principal de ejemplo
        isEditable: false, // Controla si los campos son editables
      };
    },
    methods: {
      toggleEditable() {
        this.isEditable = !this.isEditable; // Cambia el estado de edición
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  