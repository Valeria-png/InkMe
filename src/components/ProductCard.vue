<template> 
    <div class="grid grid-cols-6">
        <span class="p-1">
            <img v-if="item.imagen" class="rounded-xl" :src="item.imagen" alt="Imagen del producto">
        </span>
  
        <span class="ms-4 col-span-4 flex flex-col justify-between">
            <div>
                <h1 class="text-dark-violet font-inter font-semibold md:text-3xl sm:text-2xl">{{ item.name }}</h1>
                <p class="text-neon-pink font-bagel-fat-one md:text-3xl sm:text-2xl">${{ item.price }}</p>
                <p class="text-neon-pink font-inter md:text-xl sm:text-lg">${{ item.unitPrice }} cada uno</p>
                <p class="text-dark-violet font-inter md:text-xl sm:text-lg">{{ item.level }}</p>
            </div>
        </span>
    </div>
    <hr class="border-t-2">
  </template>
  
  <script setup>
  defineProps({
    item: Object
  });
  </script>