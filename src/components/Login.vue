<template>
    <div class="flex items-center justify-center min-h-screen bg-color-light-pink">
      <div class="bg-pink-200 p-8 rounded-lg shadow-lg w-96">
        <div class="flex justify-center mb-4">
          <img src="../assets/inkme logo.png" alt="logo" class="h-16">
        </div>
        
        <h2 class="text-center text-2xl font-bold text-[#7E0252] mb-4">
          Inicio de Sesión
        </h2>

        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block text-sm text-[#7E0252]">Correo o Nombre de usuario</label>
            <input 
              type="text" 
              v-model="email" 
              class="w-full p-1 mt-1 border rounded-lg focus:ring focus:ring-pink-300"
              required
            >
          </div>
  
          <div class="mb-4">
            <label class="block text-sm text-[#7E0252]">Contraseña</label>
            <input 
              type="password" 
              v-model="password" 
              class="w-full p-1 mt-1 border rounded-lg focus:ring focus:ring-pink-300"
              required
            >
          </div>
            <p class="text-sm text-[#00224d] text-center mb-4">
            ¿No tienes cuenta aún? 
            <a href="#" class="text-[#FF204E] font-semibold">Regístrate</a>
          </p>

          <button class="w-full text-white p-2 rounded-lg font-semibold transition" 
           style="background-color: #ff204e;">
           Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  </template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = () => {
  console.log('Iniciando sesión con:', email.value, password.value);
};
</script>