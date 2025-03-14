<template>
    <Navbar></Navbar>
    <div class="flex md:flex-row flex-col gap-4 items-center md:items-start py-4">
      <button @click="toggleSidebar" class="md:hidden bg-navy text-white font-inter rounded-xl w-2/3 flex justify-center gap-2 p-2 cursor-pointer">
          Filtrar
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
          </svg>
      </button>
      <aside :class="['fixed md:static rounded-r-xl z-100  top-0 left-0 bg-navy w-3/4 md:w-1/4 h-full p-4 transition-transform md:translate-x-0', isSidebarOpen ? 'translate-x-0' : '-translate-x-full']">
        <button @click="toggleSidebar" class="absolute top-3 right-3 text-white text-3xl md:hidden">&times;</button>
        <h1 class="font-inter text-3xl text-white font-semibold">Categorías</h1>
          <FilterItem @filter="getSelectedCategory" />
      </aside>

        <div class=" px-4 w-3/4">
            <h1 class="font-inter text-3xl text-navy font-semibold px-7" >Diseños de la comunidad</h1>
            <section class="flex flex-wrap gap-10 py-4  justify-center"> 
                <ArticuloCard v-if="isFiltered===false" v-for="producto in allDesignedProducts" :key="producto._id" :designedProductId="producto" :design="producto.design_id" :product="producto.product_id"  ></ArticuloCard>
                <ArticuloCard v-else  v-for="productoFiltrado in filteredDesignedProducts" :key="productoFiltrado._id" :designedProductId="productoFiltrado" :design="productoFiltrado.design_id" :product="productoFiltrado.product_id"  ></ArticuloCard>
            </section>
        </div>    
    </div>

    <Footer></Footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ArticuloCard from '@/components/ProductWithDesignCard.vue';
import FilterItem from '@/components/FilterItem.vue';

const isFiltered = ref(false);
// intentar que se muestre todo lo de product id tal vez un for each
const allDesignedProducts = ref([]);
const filteredDesignedProducts = ref([]);
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

onMounted(async () => {
  try {
    const response = await fetch("https://inkmeapi.onrender.com/api/designedProducts");
    allDesignedProducts.value = await response.json();
    console.log("DesignedProducts:", allDesignedProducts.value);
  } catch (error) {
    console.error("Error fetching DesignedProducts:", error);
  }
});

const getSelectedCategory = (category) => {
    console.log (category);
    if(category === null ){
      isFiltered.value = false
    }
    else{
        isFiltered.value = true;
        filteredDesignedProducts.value = allDesignedProducts.value.filter (producto => producto.product_id.category === category);
        console.log("DesignedProducts:", filteredDesignedProducts.value);        
    }
    console.log(isFiltered.value);

}
// const categorias = ref([
//   { id: 1, name: "Ropa" },
//   { id: 2, name: "Accesorios" },
//   { id: 3, name: "Impresiones" },
//   { id: 4, name: "Stickers" },
//   { id: 5, name: "Papelería y Oficina" },
//   { id: 6, name: "Artículos de Promoción" },
//   { id: 7, name: "Empaques" },
//   { id: 8, name: "Artículos del Hogar" },
// ])
</script>

<style scoped>

</style>