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
          <a href="#" class="text-neon-pink font-semibold hover:underline">Regístrate</a>
        </p>

        <button class="w-full cursor-pointer text-white text-lg hover:scale-105 bg-neon-pink hover:bg-dark-pink p-2 rounded-lg font-semibold transition">
          Iniciar Sesión
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const login = async () => {
  console.log('Iniciando sesión con:', email.value, password.value);
  
  try {
    // Realiza la solicitud POST al backend para iniciar sesión
    const response = await fetch('https://inkmeapi.onrender.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    // Si la respuesta es correcta, procesamos el token
    if (!response.ok) {
      throw new Error('Error en las credenciales');
    }

    const data = await response.json();

    // Guardamos el token en el localStorage
    localStorage.setItem('token', data.token);

    // Decodificamos el token para obtener el rol del usuario
    const decodedToken = JSON.parse(atob(data.token.split('.')[1])); // Decodificar el token JWT
    const userRole = decodedToken.type_rol;

    // Verifica el rol del usuario y redirige según corresponda
    if (userRole === 'admin') {
      router.push('/admin'); // Redirigir a la vista de admin
    } else if (userRole === 'user') {
      router.push('/'); // Redirigir a la vista de cliente
    } else {
      console.error('Rol desconocido:', userRole);
    }

  } catch (error) {
    console.error('Error de inicio de sesión:', error.message);
    // Puedes mostrar un mensaje de error al usuario si es necesario
  }
};
</script>
