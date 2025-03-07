<template>
    <NavbarAdmin />
    <div class="max-w-4xl mx-auto p-6">
        <h2 class="text-4xl font-bagel-fat-one mb-4 text-center text-navy">Gestión de Usuarios</h2>
      
      <div v-if="users.length > 0" class="overflow-x-auto">
        <table class="w-full border border-gray-300 rounded-lg shadow-md">
          <thead class="bg-neon-pink">
            <tr class="text-left text-white">
              <th class="p-3 border">Nombre</th>
              <th class="p-3 border">Email</th>
              <th class="p-3 border">Rol</th>
              <th class="p-3 border text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user._id" class="hover:bg-light-pink">
              <td class="p-3 border">{{ user.name }}</td>
              <td class="p-3 border">{{ user.email }}</td>
              <td class="p-3 border">{{ user.type_rol }}</td>
              <td class="p-3 border text-center">
                <button
                  v-if="user.type_rol !== 'admin'"
                  @click="promoteToAdmin(user._id)"
                  class="bg-neon-pink hover:bg-dark-pink text-white py-1 px-3 rounded transition"
                >
                  Convertir en Admin
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-else class="text-center text-gray-600 mt-4">
        No hay usuarios registrados.
      </div>
    </div>
  </template>
  
  <script>
  import NavbarAdmin from '@/components/NavbarAdmin.vue';
  export default {
    components: {
      NavbarAdmin
    },
    data() {
      return {
        users: [],
      };
    },
    async created() {
      this.fetchUsers();
    },
    methods: {
      // Método para obtener los usuarios
      async fetchUsers() {
        try {
          const response = await fetch("https://inkmeapi.onrender.com/api/users");
          if (!response.ok) throw new Error("Error al obtener usuarios");
  
          this.users = await response.json();
        } catch (error) {
          console.error(error);
        }
      },
  
      // Método para promover un usuario a admin
      async promoteToAdmin(userId) {
        const token = localStorage.getItem("token"); // Recupera el token guardado
  
        if (!token) {
          console.error("Token no encontrado");
          return;
        }
  
        try {
          const response = await fetch(`https://inkmeapi.onrender.com/api/users/${userId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`, // Enviar token de autenticación
            },
            body: JSON.stringify({ type_rol: "admin" }),
          });
  
          if (!response.ok) throw new Error("No se pudo actualizar el rol");
  
          const updatedUser = await response.json();
          console.log("Usuario actualizado:", updatedUser);
  
          this.fetchUsers(); // Recargar la lista de usuarios
        } catch (error) {
          console.error("Error al promover a admin:", error);
        }
      },
    },
  };
  </script>
  