<template>
    <div class="flex shadow-md justify-center items-center w-screen h-screen backdrop-blur-xl z-100" >
        <div class="rounded-2xl bg-light-pink p-4 md:p-12 justify-center sm:w-[600px] sm:h-[450px] md:w-[900px] md:h-[450px] w-[87%] sm:m-0 mb-[2rem] h-[90vh] relative">
            <button @click="emit('closePopup')" class="rounded-full p-2 bg-navy text-white absolute -top-4 -right-4 cursor-pointer hover:scale-105 transition hover:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="size-6 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
                <div class="relative w-3/4">
                    <img :src="props.design.file" alt="" class="size-36 md:w-72 md:h-86 place-self-center rounded-lg object-cover">
                    <div class="absolute top-4 right-14 sm:top-4 sm:right-50 md:top-4 md:right-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-cart-plus-fill text-neon-pink hover:cursor-pointer hover:scale-105 transition hover:text-navy" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                        </svg>
                    </div>
                </div>
                <div class="div flex flex-col gap-2 h-86 w-full md:justify-between">
                    <div class="flex flex-col gap-2">
                        <h2 class="text-neon-pink font-bagel-fat-one text-xl md:text-3xl">$ {{ price }}</h2>
                        <h2 class="text-dark-violet text-inter text-xl md:text-3xl	font-semibold text-wrap">{{ props.product.name }} de {{ props.design.name }}</h2>
                        <p class="text-dark-violet font-inter">{{ props.creator }}</p>
                        <div class="flex flex-col sm:flex-row gap-2 md:gap-6">
                            <select name="" id="" v-model="selectedLevel"   class="p-2 text-navy font-inter outline-neon-pink bg-white rounded-lg">
                                <option v-for="level in levels" :key="level.min" :value="level">{{ level.label }}</option>
                            </select>
                            <div class="rounded-xl bg-neon-pink h-full flex items-center justify-between md:justify-center w-auto" >
                                <button @click="decrementQuantity" class="text-white pe-1 ps-3 border-0 text-2xl pb-1 font-bold cursor-pointer ">-</button>
                                <span class="mx-2 text-2xl">
                                <input type="number" v-model="quantity"  class="w-full sm:w-20 rounded-lg text-2xl max-w-xs text-center outline-none bg-white no-spinner " />
                                </span>
                                <button @click="incrementQuantity" class=" text-white ps-1 pe-3 border-0 text-2xl pb-1 font-bold cursor-pointer ">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 md:gap-6">
                        <p class="text-navy font-inter text-wrap">{{ props.product.description }} Con diseño de {{ props.design.name }}. Descripción de diseño: {{ props.design.description }}</p>
                        <button @click="addToCart" class="bg-neon-pink w-full sm:w-2/3 md:w-full rounded-xl text-lg md:text-xl place-self-center p-2 text-white text-semibold cursor-pointer font-inter hover:scale-105 transition hover:bg-dark-pink">Comprar Ahora</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const emit = defineEmits(['closePopup']);

const props = defineProps({
    product: Object,
    design: Object,
    creator: String,
    designedProductId: Object
});

const price = ref(props.product.lvl1_price + props.design.added_value);
const levels = [
    { label: "Menudeo   1-50 pzas.", min: 1, max: 50 },
    { label: "Mayoreo 1 51-200 pzas.", min: 51, max: 200 },
    { label: "Mayoreo 2 201+ pzas.", min: 201, max: 499 }
];

const selectedLevel = ref(levels[0]);
const quantity = ref(selectedLevel.value.min);
const userId = userStore.id; // Replace this with `cartId` if needed
const designId = props.designedProductId._id; // Ensure this is correctly passed


console.log("Diseño:", props.design);
console.log("Producto COn Diseño:", props.designedProductId);

watch(selectedLevel, (newLevel) => {
    quantity.value = newLevel.min;
});

watch(quantity, (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 50) {
        selectedLevel.value = levels[0];
        price.value = props.product.lvl1_price + props.design.added_value;
    } else if (newQuantity >= 51 && newQuantity <= 200) {
        selectedLevel.value = levels[1];
        price.value = props.product.lvl2_price + props.design.added_value;
    } else if (newQuantity >= 201) {
        selectedLevel.value = levels[2];
        price.value = props.product.lvl3_price + props.design.added_value;
    }
});

const incrementQuantity = () => {
    quantity.value++;
};
const decrementQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const addToCart = async () => {
    try {
        const response = await fetch("https://inkmeapi.onrender.com/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: userId, // Replace with `cartId` if required
                items: [
                    {
                        designedproduct_id: designId,
                        amount: quantity.value,
                    },
                ],
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to add item to cart");
        }

        console.log("Item added to cart successfully!");
        alert("Producto agregado al carrito exitosamente!");
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
};
</script>

<style scoped>
    option{
        color: #00224d;
    }
</style>