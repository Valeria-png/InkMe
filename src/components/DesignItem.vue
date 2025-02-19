<template>
    <div class="grid grid-cols-5">
        <div class="col-span-2 p-1">
            <img class="rounded-xl" :src="props.img" alt="">
        </div>
        <span class="ms-4 col-span-3 flex flex-col justify-between">
            <div>
                <h1 class="text-dark-violet font-inter font-semibold lg:text-3xl md:text-xl sm:text-3xl">Nombre del diseño</h1>
                <p class="text-navy font-inter lg:text-xl md:text-base sm:text-xl">3 Ventas</p>
                <p class="text-neon-pink font-bagel-fat-one lg:text-3xl md:text-xl sm:text-3xl">$000.00</p>
            </div>
            <div class="flex justify-end mt-auto">
                <button class="bg-light-pink text-dark-violet px-4 py-2 font-semibold rounded-lg font-inter lg:text-base md:text-sm sm:text-base hover:scale-105 transform cursor-pointer">
                    Eliminar
                </button>
            </div>
        </span>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        img: String
    })
</script>