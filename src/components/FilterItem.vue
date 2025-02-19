<template>
    <div v-for="category in categories" :key="category.id">
        <div class="flex items-center p-4 gap-4">
            <img class="rounded-2xl w-1/4 h-1/4" src="https://i.pinimg.com/736x/68/65/c6/6865c632754be7721ad89bfed233c182.jpg" alt="">
            <h1 class="font-inter text-[18px] text-white">{{ category.name }}</h1>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const categories = ref([
  { id: 1, name: "Categoría 1" },
  { id: 2, name: "Categoría 2" },
  { id: 3, name: "Categoría 3" },
  { id: 4, name: "Categoría 4" },
  { id: 5, name: "Categoría 5" },
])
</script>