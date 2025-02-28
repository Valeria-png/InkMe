<template>
  <div class="flex items-center font-inter justify-center min-h-screen bg-color-light-pink">
    <div class="bg-light-pink p-8 rounded-lg shadow-lg w-96">
      <div class="flex justify-center mb-4">
        <img @click="router.push('/')" src="../assets/inkme logo.png" alt="logo" class="h-16 cursor-pointer">
      </div>
      
      <h2 class="text-center text-2xl font-bold text-dark-pink mb-4">
        Inicio de Sesión
      </h2>

      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-sm text-dark-pink">Correo o Nombre de usuario</label>
          <input 
            type="text" 
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
          ¿No tienes cuenta aún? 
          <a href="#" class="text-neon-pink font-semibold hover:underline ">Regístrate</a>
        </p>

        <button class="w-full cursor-pointer text-white text-lg hover:scale-105 bg-neon-pink hover:bg-dark-pink p-2 rounded-lg font-semibold transition" >
         Iniciar Sesión
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const email = ref('');
const password = ref('');

const login = async () => {
  try {
    // Hacer la solicitud al backend para login
    const response = await axios.post("http://localhost:5000/api/users/login", {
      email: email.value,
      password: password.value,
    });

    // Almacenar el token JWT en localStorage para mantener la sesión
    const token = response.data.token;
    localStorage.setItem("token", token);

    // Redirigir a la página principal o dashboard
    router.push("/");
    alert("Login exitoso");
  } catch (error) {
    // Manejar error en caso de credenciales incorrectas
    alert("Error al iniciar sesión: " + error.response.data.error);
    console.error(error);
  }
};
</script>
