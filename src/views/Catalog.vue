<template>
    <Navbar></Navbar>
    <div class="px-10 py-4">
        <h1 class="font-inter text-3xl text-navy font-semibold">Explora las Categorías</h1>
        <section class="flex flex-wrap justify-center gap-4 py-4">
            <CategoryItem v-for="i in 8" :key="i"></CategoryItem>
        </section>
        <div class="flex justify-between">
            <h2 class="font-inter text-3xl text-navy font-semibold">Todos los Artículos</h2>
            <button type="" class="bg-navy text-white py-2 px-4 rounded-lg font-inter">Ordenar por</button>
        </div>
        <section class="flex flex-wrap gap-10 py-4 justify-center">
            <ArticuloCard v-for="i in 8" :key="i"></ArticuloCard>  
        </section>

        
    </div>
    <Footer></Footer>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import CategoryItem from '@/components/CategoryItem.vue';
import ArticuloCard from '@/components/ArticuloCard.vue';

</script>

<style scoped>

</style>