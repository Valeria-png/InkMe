<script setup>
import { ref, watch } from 'vue';

const props = defineProps({ item: Object });
const emit = defineEmits(['update', 'remove']);

const localQuantity = ref(props.item.quantity);

watch(localQuantity, (newQuantity) => {
    if (newQuantity < 1) localQuantity.value = 1;
    emit('update', { ...props.item, quantity: localQuantity.value });
});

const decreaseQuantity = () => {
    if (localQuantity.value > 1) {
        localQuantity.value--;
    }
};

const increaseQuantity = () => {
    localQuantity.value++;
};

const recalculate = () => {
    if (localQuantity.value < 1) localQuantity.value = 1;
};
</script>

<template>
    <div class="grid grid-cols-6">
        <span class="p-1">
            <img class="rounded-xl" :src="item.imagen" alt="Producto">
        </span>

        <span class="ms-4 col-span-4 flex flex-col justify-between">
            <div>
                <h1 class="text-dark-violet font-inter font-semibold md:text-3xl sm:text-2xl">{{ item.name }}</h1>
                <p class="text-neon-pink font-bagel-fat-one md:text-3xl sm:text-2xl">${{ item.price }}</p>
                <p class="text-neon-pink font-inter md:text-xl sm:text-lg">${{ item.unitPrice }} cada uno</p>
                <p class="text-dark-violet font-inter md:text-xl sm:text-lg">Valor añadido: ${{ item.added_value }}</p>
                <p class="text-dark-violet font-inter md:text-xl sm:text-lg">{{ item.level }}</p>
            </div>
        </span>

        <span>
            <div class="grid grid-cols-1 h-full">
                <div class="h-3/5 rounded-2xl bg-neon-pink flex items-center justify-center gap-5 sm:gap-1">
                    <button class="text-white text-2xl font-bold cursor-pointer" @click="decreaseQuantity">-</button>
                    <input 
                        class="bg-white h-1/2 w-2/5 text-center rounded-xl lg:text-2xl md:text-xl sm:text-lg appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        v-model="localQuantity" 
                        type="number" 
                        min="1"
                        @input="recalculate"
                    >
                    <button class="text-white text-2xl font-bold cursor-pointer" @click="increaseQuantity">+</button>
                </div>

                <button class="h-3/5 bg-dark-pink text-white rounded-3xl font-inter sm:text-lg md:text-xl lg:text-2xl hover:scale-105 transform cursor-pointer" 
                    @click="$emit('remove', item.designedproduct_id, item.cartId)">
                    Eliminar
                </button>
            </div>
        </span>
    </div>
    <hr class="border-t-2">
</template>
