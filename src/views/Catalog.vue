<template>
    <Navbar></Navbar>
    <div class="px-10 py-4">
        <h1 class="font-inter text-3xl text-navy font-semibold">Explora las Categorías</h1>
        <section class="flex flex-wrap justify-center gap-4 py-4">
            <CategoryItem v-for="categoria in categories" :key="categoria.id" :nombreCategoria="categoria.nombreCategoria" :img="categoria.img"></CategoryItem>
        </section>
        <div class="flex justify-between">
            <h2 class="font-inter text-3xl text-navy font-semibold">Todos los Artículos</h2>
            <button type="" class="bg-navy text-white py-2 px-4 rounded-lg font-inter">Ordenar por</button>
        </div>
        <section class="flex flex-wrap gap-10 py-4 justify-center">
            <ProductCard v-for="producto in products" :key="producto._id" :id="producto._id" :category="producto.category" :productName="producto.name" :price="producto.lvl1_price" :img="producto.file"></ProductCard>  
        </section>

        
    </div>
    <Footer></Footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import CategoryItem from '@/components/CategoryItem.vue';
import ProductCard from '@/components/BaseProductCard.vue';

const products = ref([]);

async function getProducts() {
    const response = await fetch('https://inkmeapi.onrender.com/api/products')
    const data = await response.json();
    products.value = data.filter(products => products.id_design === '67c8fd5be649175d9da80f1c');
}

onMounted(() => {
    getProducts();
})

const categories = ref([
    {
        id: 1,
        nombreCategoria: "Ropa",
        img: "/ropaCateg2.png"
    },
    {
        id:2,
        nombreCategoria: "Accesorios",
        img: "/accessoriosCateg.png"
    },
    {
        id:3,
        nombreCategoria: "Impresiones",
        img: "/impresionCateg.png"
    },
    {
        id: 4,
        nombreCategoria: "Stickers",
        img: "/stickerCateg.png" 
    }, 
    {
        id: 5,
        nombreCategoria: "Papelería y Oficina",
        img : "oficinaCateg.png"
    }, 
    {
        id:6,
        nombreCategoria: "Artículos de Promoción",
        img : "promoCateg.png"
    },
    {
        id:7,
        nombreCategoria: "Empaques",
        img : "empaquesCateg.png"
    },
    {
        id:8,
        nombreCategoria: "Artículos del Hogar",
        img : "/hogarCateg.png"
    }
])

</script>

<style scoped>

</style>