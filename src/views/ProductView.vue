<template>
    <Navbar></Navbar>
    <div class="grid sm:grid-cols-1 gap-4 xl:px-48 lg:px-36 md:px-24 sm:px-12 py-12">
        <ProductCard 
            v-for="item in ProductCards" 
            :key="item.id" 
            :item="item"
        />
    </div>
    <Footer></Footer>
  </template>
  
  <script setup>
  import ProductCard from '@/components/ProductCard.vue';
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import { ref } from 'vue';
  
  const ProductCards = ref([
      { id: 1, name: "Artículo 1", imagen: "", price: 150, unitPrice: 150, level: "nivel menudeo" },
      { id: 2, name: "Artículo 2", imagen: "", price: 300, unitPrice: 100, level: "nivel menudeo" },
      { id: 3, name: "Artículo 3", imagen: "", price: 300, unitPrice: 100, level: "nivel menudeo" }
  ]);
  </script>