<template>
    <Navbar></Navbar>
    <div class="w-auto">
        <img src="../assets/img/Ropa_Mujer.png" alt="Banner de categoría" class="w-full h-auto max-h-120 object-cover filter brightness-50">
        <div class=" absolute inset-0 mb-30 flex justify-center items-center">
            <h2 class="text-white text-8xl font-bagel-fat-one">Ropa de mujer</h2>
        </div>
        <section class="py-4">
            <ul class="flex flex-wrap gap-4">
                <li v-for="(categoria, index) in categorias" :key="index" class="text-lg font-medium text-navy">
                    {{ categoria }}
                </li>
            </ul>
        </section>
        <div class="flex justify-between">
            <h2 class="font-inter text-3xl text-navy font-semibold">Todos los Artículos</h2>
            <button class="bg-navy text-white py-2 px-4 rounded-lg font-inter">Ordenar por</button>
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
import ArticuloCard from '@/components/ProductWithDesignCard.vue';


</script>

<style scoped>
</style>
