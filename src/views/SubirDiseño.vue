<template>
    <Navbar></Navbar>
    <div class="max-w-5xl mt-10 mb-30">
      <h1 class="text-4xl text-navy font-bold mb-6 ml-5">Añadir nuevo diseño</h1>

      <p v-if="error" class="text-red-500 mb-4 ml-5">{{ error }}</p>
  
      <div class="grid grid-cols-3 gap-6">
        <div class="flex flex-col items-center">
          <label class="w-40 h-40 bg-light-pink rounded-lg flex items-center justify-center cursor-pointer">
            <input type="file" class="hidden" @change="subirImagen">
            <img v-if="imagenURL" :src="imagenURL" class="w-full h-full object-cover rounded-lg" />
            <span v-else class="text-gray-400">Añadir imagen</span>
          </label>
          <button class="flex items-center justify-center mt-4 bg-neon-pink text-white px-4 py-2 rounded-lg cursor-pointer w-30 hover:scale-105 transition hover:bg-dark-pink">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 10l-4-4m0 0l-4 4m4-4v12"></path>
            </svg>
          </button>
        </div>
  
        <div class="col-span-1">
          <label class="block text-lg font-semibold text-dark-pink">Agregar Título</label>
          <input v-model="titulo" type="text" class="w-full p-2 mt-1 rounded-lg bg-light-pink outline-neon-pink">
  
          <label class="block mt-4 text-lg font-semibold text-dark-pink">Agregar Valor del Diseño</label>
          <input v-model="valor" type="number" class="w-full p-2 mt-1 rounded-lg bg-light-pink text-dark-pink font-bold outline-neon-pink" placeholder="$000.00">
  
          <p class="text-sm text-gray-600 mt-1">
            Este es el valor que se agregará al precio base del producto al que se aplique
          </p>
        </div>
  
        <div class="col-span-1 ">
          <label class="block text-lg font-semibold text-dark-pink">Agregar Descripción</label>
          <textarea v-model="descripcion" class="w-full h-32 p-2 mt-1 rounded-lg bg-light-pink outline-neon-pink"></textarea>

          <button @click="enviarFormulario" class="bg-neon-pink text-white px-6 py-2 rounded-lg w-50 mt-4 cursor-pointer hover:scale-105 transition hover:bg-dark-pink">Añadir diseño</button>
        </div>
      </div>
    </div>
    <Footer />
  </template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";


const titulo = ref("");
const valor = ref("");
const descripcion = ref("");
const imagen = ref(null);
const imagenURL = ref("");
const error = ref("");


const subirImagen = (event) => {
  const file = event.target.files[0];
  if (file) {
    imagen.value = file;
    imagenURL.value = URL.createObjectURL(file);
  }
};


const enviarFormulario = () => {
  error.value = ""; 

  if (!titulo.value.trim() || !descripcion.value.trim()) {
    error.value = "Todos los campos son obligatorios.";
    return;
  }

  if (isNaN(valor.value) || valor.value < 0) {
    error.value = "El valor debe ser un número válido.";
    return;
  }

  console.log("Enviando formulario con:", {
    titulo: titulo.value,
    valor: valor.value,
    descripcion: descripcion.value,
    imagen: imagen.value,
  });


};
</script>
