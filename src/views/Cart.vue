<template>
    <div class="grid sm:grid-cols-1 gap-4 xl:px-48 lg:px-36 md:px-24 sm:px-12 py-12">
        <CartItem 
            v-for="item in cartItems" 
            :key="item.id" 
            :item="item" 
            @remove="removeItem"
        />
    </div>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue';
import { ref } from 'vue';

const cartItems = ref([
    { id: 1, name: "Artículo 1", imagen: "https://i.pinimg.com/736x/68/65/c6/6865c632754be7721ad89bfed233c182.jpg", price: 150, unitPrice: 150, level: "nivel menudeo", quantity: 1 },
    { id: 2, name: "Artículo 2", imagen: "https://i.pinimg.com/736x/c1/27/9b/c1279b4d549f389ef9db944dc22c07f7.jpg", price: 300, unitPrice: 100, level: "nivel menudeo", quantity: 3 }
]);

const removeItem = (id) => {
    cartItems.value = cartItems.value.filter(item => item.id !== id);
};
</script>
