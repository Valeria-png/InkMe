<template>
    <div class="flex items-center font-inter justify-center min-h-screen bg-color-light-pink">
      <div class="bg-light-pink p-8 rounded-lg shadow-lg w-96">
        <div class="flex justify-center mb-4">
          <img @click="router.push('/')" src="../assets/inkme logo.png" alt="logo" class="h-16 cursor-pointer">
        </div>
        
        <h2 class="text-center text-2xl font-bold text-dark-pink mb-4">
          Registro
        </h2>
  
        <form @submit.prevent="register">
          <div class="mb-4">
            <label class="block text-sm text-dark-pink">Nombre de usuario</label>
            <input 
              type="text" 
              v-model="username" 
              class="w-full p-1 mt-1 border bg-white rounded-lg focus:ring outline-neon-pink"
              required
            >
          </div>
  
          <div class="mb-4">
            <label class="block text-sm text-dark-pink">Correo Electrónico</label>
            <input 
              type="email" 
              v-model="email" 
              class="w-full p-1 mt-1 border bg-white rounded-lg focus:ring outline-neon-pink"
              required
            >
          </div>
  
          <div class="mb-4">
            <label class="block text-sm text-dark-pink">Contraseña</label>
            <input 
              type="password" 
              v-model="password" 
              class="w-full bg-white p-1 mt-1 border rounded-lg outline-neon-pink"
              required
            >
          </div>
  
          <p class="text-sm text-navy text-center mb-4">
            ¿Ya tienes cuenta? 
            <a href="#" class="text-neon-pink font-semibold hover:underline" @click="router.push('/login')">Inicia sesión</a>
          </p>
  
          <button class="w-full cursor-pointer text-white text-lg hover:scale-105 bg-neon-pink hover:bg-dark-pink p-2 rounded-lg font-semibold transition">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const username = ref('');
  const email = ref('');
  const password = ref('');
  
  const register = () => {
    console.log('Registrando usuario:', username.value, email.value, password.value);
  };
  </script>
  