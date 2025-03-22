<template>
    <div class="bg-white m-0 min-h-screen">
      <!-- Sección principal -->
    <header>
      <Navbar></Navbar>
    </header>

    <main class="p-10">
      <h1 class="font-inter text-3xl text-navy font-semibold pb-8">Resultados de búsqueda de "{{ searchQuery }}"</h1>
      <div class="flex flex-wrap gap-10">
        <ProductWithDesignCard v-for="product in searchResults" :key="product._id" :product="product.product_id" :design="product.design_id" :designedProductId="product"></ProductWithDesignCard>
        
      </div>
      <div class="text-center p-7 flex flex-col justify-center items-center " v-if="searchResults.length === 0">
          <h1 class="text-8xl font-bold text-navy mb-30">¡Oops!</h1>
          <p class="text-lg text-gray-600 mb-10">
            No se encontraron resultados para tu búsqueda.
          </p>
          <button 
            @click="router.push('/')" 
            class="bg-navy text-white px-6 py-2 rounded-xl hover:bg-blue-800 cursor-pointer font-inter transition"
          >
            Volver a Inicio
          </button>
      </div>
    </main>
    
    <footer>
      <Footer />
    </footer>
      <!-- Footer -->
      
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import Footer from "../components/Footer.vue";
  import Navbar from "../components/Navbar.vue";
  import ProductWithDesignCard from '@/components/ProductWithDesignCard.vue';
  
  import { useSearchResultsStore } from '../stores/searchResults';
import { ref,onMounted } from 'vue';

  const searchResultsStore = useSearchResultsStore();
  const searchQuery = ref(searchResultsStore.searchQuery);
  const searchResults = ref([]);
  
  const getSearchResults = async () => {
    console.log(searchQuery.value);
    const response = await fetch(`https://inkmeapi.onrender.com/api/designedProducts/search?query=${searchQuery.value}`);
    const data = await response.json();
    console.log(data);
    searchResults.value = data;
  }
  
  onMounted(() => {
    getSearchResults();
  });
   
  const router = useRouter();
  
  </script>
  