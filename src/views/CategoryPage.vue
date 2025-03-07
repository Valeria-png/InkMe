<template>
    <header>
        <Navbar></Navbar>
    </header>
    
    <div class="w-auto">
        <div class=" relative mb-6 flex justify-center items-center">
            <img :src="currentImg" alt="Banner de categoría" class="w-full h-auto max-h-120 object-cover filter brightness-50">
            <h2 class="text-white text-8xl text-center font-bagel-fat-one absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">{{ props.nombreCategoria }}</h2>
        </div>
        <section class="py-4">
            <ul class="flex flex-wrap gap-4">
                <li v-for="(categoria, index) in categorias" :key="index" class="text-lg font-medium text-navy">
                    {{ categoria }}
                </li>
            </ul>
        </section>
        <div class="flex justify-between px-10">
            <h2 class="font-inter text-3xl text-navy font-semibold">Todo en {{ props.nombreCategoria }}</h2>
            <button class="bg-navy text-white py-2 px-4 rounded-lg font-inter">Ordenar por</button>
        </div>
        <section class="flex flex-wrap gap-10 py-4 justify-center">
            <BaseProductCard v-for="producto in products" :key="producto._id" :id="producto._id" :category="producto.category" :productName="producto.name" :price="producto.lvl1_price" :img="producto.file"></BaseProductCard>
        </section>
    </div>
    <Footer></Footer>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import BaseProductCard from '@/components/BaseProductCard.vue';
import { onMounted,ref } from 'vue';

const props = defineProps({
    nombreCategoria: String
})

const categoriaImg = ref([
    { id: 1, img: "/src/assets/img/Ropa Banner.png", name: "Ropa" },
    { id: 2, img: "/src/assets/img/Accesorios Banner.png", name: "Accesorios" },
    { id: 3, img: "/src/assets/img/Impresiones Banner.png", name: "Impresiones" },
    { id: 4, img: "/src/assets/img/Stickers Banner.png", name: "Stickers" },
    { id: 5, img: "/src/assets/img/Papeleria Banner.png", name: "Papelería y Oficina" },
    { id: 6, img: "/src/assets/img/Articulos promo Banner.png", name: "Artículos de Promoción" },
    { id: 7, img: "/src/assets/img/Empaques Banner.png", name: "Empaques" },
    { id: 8, img: "/src/assets/img/Hogar Banner.png", name: "Artículos del Hogar" },
])

const currentImg= categoriaImg.value.find(categoriaImg => categoriaImg.name === props.nombreCategoria).img


const products = ref([]);
async function getProducts() {
    const response = await fetch('https://inkmeapi.onrender.com/api/products')
    const data = await response.json();
    products.value = data.filter(products => products.category === props.nombreCategoria);
}
onMounted(() => {
    getProducts()
})
</script>

<style scoped>
</style>
