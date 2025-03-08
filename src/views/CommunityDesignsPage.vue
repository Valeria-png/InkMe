<template>
    <Navbar></Navbar>
    <div class="flex py-4">
        <aside class="bg-navy w-1/4 p-4 rounded-r-lg flex flex-col items-start">
            <h1 class="font-inter text-3xl text-white place-self-center font-semibold">Categorías</h1>
            <FilterItem @filter="getSelectedCategory" ></FilterItem>
        </aside>
        <div class=" px-4 w-3/4">
            <h1 class="font-inter text-3xl text-navy font-semibold px-7" >Diseños de la comunidad</h1>
            <section class="flex flex-wrap gap-10 py-4  justify-center"> 
                <ArticuloCard v-if="isFiltered===false" v-for="producto in allDesignedProducts" :key="producto._id" :design="producto.design_id" :product="producto.product_id"  ></ArticuloCard>
                <ArticuloCard v-else  v-for="productoFiltrado in filteredDesignedProducts" :key="productoFiltrado._id" :design="productoFiltrado.design_id" :product="productoFiltrado.product_id"  ></ArticuloCard>
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