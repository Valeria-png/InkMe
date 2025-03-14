<template>
    <div class="min-w-3xs max-w-3xs rounded-xl overflow-hidden shadow-md bg-white">
      <div class="h-57 bg-gray-100 flex items-center justify-center ">
        <img :src="props.img" alt="" class="w-full h-full object-contain">
      </div>
      <div class="bg-[#FCDEE4] h-36 px-5 py-3">
        <p class="text-[#FF204E] font-bold font-bagel-fat-one text-xl">${{ props.price }} c/u</p>
        <h3 @click="router.push(`/producto/${props.id}`)" class="text-[#A0153E] font-semibold font-inter text-wrap text-dark-violet text-lg cursor-pointer">{{ props.productName }}</h3>
        <p class="text-[#FF204E] pt-2 text-dark-pink text-sm font-inter">{{ props.category }}</p>
      </div>
    </div>

  </template>

  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  const props = defineProps({
    price: Number,
    productName: String,
    category: String,
    img: String,
    id: String
  })
  console.log(typeof props.id)
  const router=useRouter()


  </script>
  