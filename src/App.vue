<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/authStore';

const authStore = useAuthStore();

onMounted(() => {
  authStore.loadUser(); // Cargamos el usuario cuando la app se monta
});
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
