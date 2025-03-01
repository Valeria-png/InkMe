<template>
    <Navbar></Navbar>
    <div class="flex py-4">
        <aside class="bg-navy w-1/4 p-4 rounded-r-lg flex flex-col items-center">
            <h1 class="font-inter text-3xl text-white font-semibold">Categorías</h1>
            <FilterItem></FilterItem>
        </aside>
        <div class=" px-4 w-3/4">
            <h1 class="font-inter text-3xl text-navy font-semibold px-7" >Diseños de la comunidad</h1>
            <section class="flex flex-wrap gap-10 py-4  justify-center">

                <ArticuloCard v-for="i in 8" :key="i"></ArticuloCard>  
            </section>
        </div>    
    </div>

    <Footer></Footer>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ArticuloCard from '@/components/ProductWithDesignCard.vue';
import FilterItem from '@/components/FilterItem.vue';

</script>

<style scoped>

</style>