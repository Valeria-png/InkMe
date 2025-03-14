<template> 
    <Navbar></Navbar>
    <div class="grid sm:grid-cols-1 gap-4 xl:px-48 lg:px-36 md:px-24 sm:px-12 pb-10">
        <p class="font-inter text-4xl text-navy font-semibold mb-6">Carrito de compras</p>
        <CartItem 
            v-for="item in cartItems" 
            :key="item.id" 
            :item="item" 
            @remove="removeItem"
        />
        <span class="flex flex-col gap-3 items-center mt-4 text-navy font-inter text-2xl font-semibold">
            <p>Subtotal: ${{ cartItems.reduce((total, item) => total + item.price, 0) }}</p>
            <p>IVA: ${{ cartItems.reduce((total, item) => total + item.price, 0) * 0.16}}</p>
            <p class="text-dark-pink font-bold text-3xl">Total a pagar: ${{ cartItems.reduce((total, item) => total + item.price, 0) * 1.16}}</p>
            <button @click="goToOrderConfirmation" class="cursor-pointer bg-neon-pink text-white rounded-lg py-2 px-4">Proceder al pago</button>
        </span>
    </div>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue';
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const cartItems = ref([
    { id: 1, name: "Artículo 1", imagen: "https://i.pinimg.com/736x/28/6b/1d/286b1dde6060431382820591c4127ead.jpg", price: 150, unitPrice: 150, level: "Nivel menudeo", quantity: 1 },
    { id: 2, name: "Artículo 2", imagen: "https://i.pinimg.com/736x/ac/f8/e6/acf8e66d1d36591458fea6bab7728041.jpg", price: 300, unitPrice: 100, level: "Nivel menudeo", quantity: 3 }
]);

const removeItem = (id) => {
    cartItems.value = cartItems.value.filter(item => item.id !== id);
};


const goToOrderConfirmation = () => {
    router.push({
        path: '/confirmacion-pago',
        query: { cart: JSON.stringify(cartItems.value) } 
    });
};
</script>
