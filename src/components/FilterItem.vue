<template>
    <div v-for="categoria in categorias" :key="categoria.id">
        <div class="flex items-center  p-4 gap-4">
            <input type="checkbox" name="" id="" class="w-4 h-4 rounded-xl">
            <h1 class="font-inter text-[18px] text-white">{{ categoria.name }}</h1>

        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const categorias = ref([
  { id: 1, name: "Ropa" },
  { id: 2, name: "Accesorios" },
  { id: 3, name: "Impresiones" },
  { id: 4, name: "Stickers" },
  { id: 5, name: "Papelería y Oficina" },
  { id: 6, name: "Artículos de Promoción" },
  { id: 7, name: "Empaques" },
  { id: 8, name: "Artículos del Hogar" },
])
</script>