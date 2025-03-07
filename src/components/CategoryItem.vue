<template>

  <button @click="router.push(`/categoria/${nombreCategoria}`)" class="cursor-pointer flex items-center hover:scale-105 transition font-inter  gap-2 bg-[#00224D] text-white rounded-xl p-4 w-70 justify-center">
    <img :src="img" alt="" class="size-12 bg-white rounded-md p-1" />
    <span>
      {{ nombreCategoria }}
    </span>
  </button>

</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({ 
    img: String,
    nombreCategoria: String
})
</script>
  