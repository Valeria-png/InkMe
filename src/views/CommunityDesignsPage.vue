<template>
    <Navbar></Navbar>
    <div class="flex py-4">
        <aside class="bg-navy w-1/4 p-4 rounded-r-lg flex flex-col items-start">
            <h1 class="font-inter text-3xl text-white place-self-center font-semibold">Categorías</h1>
            <FilterItem ></FilterItem>
        </aside>
        <div class=" px-4 w-3/4">
            <h1 class="font-inter text-3xl text-navy font-semibold px-7" >Diseños de la comunidad</h1>
            <section class="flex flex-wrap gap-10 py-4  justify-center"> 
                <ArticuloCard v-for="producto in products" 
                :key="producto._id" 
                :id="producto._id"
                :creator="producto.design_id.user_id" 
                :img="producto.design_id.file"
                :addedPrice="producto.design_id.added_value"
                :designName="producto.design_id.name"  ></ArticuloCard>
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
const products = ref([]);
// intentar que se muestre todo lo de product id tal vez un for each

async function getProductsWithDesigns(){
    const response = await fetch('https://inkmeapi.onrender.com/api/designedProducts');
    const data = await response.json();
    products.value = data
    console.log( typeof products.value[0].product_id.name)

}


onMounted(() => {
    getProductsWithDesigns();
    console.log(products)
})

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