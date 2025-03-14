// src/stores/authStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useUserStore } from './userStore';  // Asegúrate de importar el userStore

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const userStore = useUserStore();  // Obtener el userStore

  const login = (userData) => {
    user.value = userData;
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Actualizar el userStore
    userStore.setUser({
      loggedIn: true,
      id: userData.id,
      userName: userData.name,
      typeRol: userData.type_rol
    });
  };
  
  const logout = () => {
    user.value = null;
    localStorage.removeItem('user');
    
    // Actualizar el userStore
    userStore.logOut();
  };

  const loadUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      user.value = userData;
      
      // Actualizar el userStore
      userStore.setUser({
        loggedIn: true,
        id: userData.id,
        userName: userData.name,
        typeRol: userData.type_rol
      });
    }
  };

  return {
    user,
    login,
    logout,
    loadUser,
  };
});
