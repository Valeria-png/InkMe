<template>
    <header>
        <Navbar></Navbar>
    </header>
    <main class=" flex flex-col md:flex-row px-10 py-4 ">
        <div class="relative w-full  md:w-3/8">
            <img :src="product.file" alt="" class="w-full rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-cart-plus absolute top-4 right-4 text-neon-pink hover:cursor-pointer hover:scale-105 transition hover:text-navy" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg>
        </div>

        <div class="flex  flex-row md:flex-col gap-6 px-8">
            <div class="relative ">
                <button popoverTarget="popoverFileInput" type="" class="bg-light-pink text-dark-violet rounded-lg flex justify-center items-center p-2 size-20 hover:bg-dark-violet hover:text-light-pink hover:scale-105 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-10 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                </button> 
                <div class="bg-light-pink w-1/2 h-1/2 rounded-xl absolute inset-1/2 -translate-x-1/2 -translate-y-1/2  " id="popoverFileInput" popover>
                    <div class="flex w-full items-center py-5 font-inter font-semibold text-dark-violet ">
                        <div  @click="tabIsActive = true" :class="{'tab' : true, 'border-b-[2px] w-1/2' : tabIsActive === false, 'w-1/2' :tabIsActive === true}">Subir un Diseño Nuevo</div>
                        <div @click="tabIsActive = false" :class="{'tab' : true, 'border-b-[2px] w-1/2' : tabIsActive === true, 'w-1/2' :tabIsActive === false }">Escoge uno de tus diseños</div>
                    </div>
                    <div class="flex flex-col gap-4 items-center justify-center font-inter overflow-auto h-60 rounded-b-2xl p-4" v-if="tabIsActive === true">
                        <h4 class="font-semibold text-2xl text-dark-violet">Selecciona o arrastra un Archivo</h4>
                        <input type="file">
                        <p class="text-dark-pink">Formatos aceptados: .jpg, .jpeg, .png, .pdf</p>

                    </div>
                    <div v-if="tabIsActive === false" class="rounded-b-2xl flex flex-col h-60 bg-magenta  overflow-y-auto">
                        <DesignItem/>
                        <DesignItem/>
                        <DesignItem/>
                        <DesignItem/>
                    </div>
                </div>                           
            </div>


            <div class="relative">
                <button popovertarget="popoverTextInput" class="bg-light-pink text-dark-violet rounded-lg flex justify-center items-center p-2 size-20 hover:bg-dark-violet hover:text-light-pink hover:scale-105 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-10 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </button>
                <div popover id="popoverTextInput" class="bg-light-pink w-3/8  gap-2 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 font-inter rounded-xl">
                    <div class="flex flex-col items-center gap-2 p-6">
                        <h3 class="font-semibold text-2xl text-dark-violet text-center">Personaliza el Artículo con texto</h3>
                        <label class="" for="colorSelector">Selecciona el color del texto</label>
                        <input type="color"  id="colorSelector" class="rounded-lg w-1/4 h-15">
                        <label class="place-self-start" for="textInput">Añade texto</label>
                        <input type="text" id="textInput" class="outline-neon-pink bg-white rounded-xl h-10 p-2 w-full" placeholder="Escribe algo">
                        <p class="text-sm place-self-start text-dark-pink">El texto se aplicará con la tipografía Inter en tamaño de 48px</p>
                        <button class="bg-neon-pink text-white rounded-xl p-2 hover:scale-105 w-full">Guardar Texto</button>                    
                    </div>

                </div>
            </div>


        </div>
        <div class="w-full md:w-1/2 flex flex-col gap-10">
            <div class="font-inter flex flex-col gap-4 ">
                <h1 class="text-dark-violet font-semibold text-3xl text-wrap"> {{ product.name }}</h1>
                <hr>
                <p class="text-wrap text-lg text-navy">{{ product.description }}</p>
            </div>
            <div class="flex flex-col gap-6">
                <p class="text-neon-pink font-bagel-fat-one text-3xl">$ {{ price }} c/u</p>
                <div class="flex gap-8">
                    <select name="" id="" v-model="selectedLevel"   class="text-navy font-inter outline-neon-pink bg-white rounded-lg">
                        <option v-for="level in levels" :key="level.min" :value="level">{{ level.label }}</option>
                    </select>
                    <div class="rounded-xl bg-neon-pink h-full flex items-center justify-items-center w-auto" >
                        <button @click="decrementQuantity" class="text-white pe-1 ps-3 border-0 text-2xl pb-1 font-bold cursor-pointer ">-</button>
                        <span class="mx-2 text-2xl">
                        <input type="number" v-model="quantity"  class="w-20 rounded-lg text-2xl max-w-xs text-center outline-none bg-white no-spinner " />
                        </span>
                        <button @click="incrementQuantity" class=" text-white ps-1 pe-3 border-0 text-2xl pb-1 font-bold cursor-pointer ">+</button>
                    </div>
                </div>
                <button class="bg-neon-pink text-white rounded-3xl font-inter hover:bg-dark-pink hover:scale-105 transform duration-300 cursor-pointer p-4 text-xl">Comprar Ahora</button>
            </div>
        </div>
    </main>
    <section class="px-10 py-4 flex flex-col gap-4">
        <h2 class="text-navy font-inter text-2xl font-semibold">También te puede gustar</h2>
        <hr>
        <div class="flex gap-6 flex-nowrap overflow-auto w-full">
            <ProductCard v-for="i in 8" :key="i"></ProductCard>
        </div>
    </section>
    <Footer></Footer>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import ProductCard from '@/components/BaseProductCard.vue';
import DesignItem from '@/components/DesignItem.vue';
import { ref,watch,onMounted } from 'vue';


const product = ref({})
const price = ref(0)
const props = defineProps({
    id: String})

async function getProduct(){
    const response = await fetch(`https://inkmeapi.onrender.com/api/products/${props.id}`)

    const data = await response.json()
    product.value = data
    price.value = data.lvl1_price
}
onMounted(() => {
    getProduct()
    
    console.log(price)
})



const tabIsActive = ref(true)
const levels = [
        { label: "Menudeo   1-50 pzas.", min: 1, max: 50 },
        { label: "Mayoreo 1 51-200 pzas.", min: 51, max: 200 },
        { label: "Mayoreo 2 201+ pzas.", min: 201, max: 499 }
    ];

    const selectedLevel = ref(levels[0]);
    const quantity = ref(selectedLevel.value.min);

    watch(selectedLevel, (newLevel) => {
        if (quantity.value === newLevel.max) {
            quantity.value = newLevel.max;
        }
        else{
            quantity.value = newLevel.min
        }

    })
    

      watch (quantity, (newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= 50) {
            selectedLevel.value = levels[0];
            price.value = product.value.lvl1_price
        } else if (newQuantity >= 51 && newQuantity <= 200) {
            selectedLevel.value = levels[1];
            price.value = product.value.lvl2_price
        } else if (newQuantity >= 201) {
            selectedLevel.value = levels[2];
            price.value = product.value.lvl3_price
        }
        //hasta aqui está bien
    })

    function incrementQuantity (){
        quantity.value++;

    }
    function decrementQuantity(){
        if(quantity.value === 1) return
        quantity.value--;
    }


    watch (quantity, (newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= 50) {
            selectedLevel.value = levels[0];
        } else if (newQuantity >= 51 && newQuantity <= 200) {
            selectedLevel.value = levels[1];
        } else if (newQuantity >= 201) {
            selectedLevel.value = levels[2];
        }
    })


</script>

<style scoped>
.tab{
    border-top: 2px solid #7E0252;
    border-left: 2px solid #7E0252;
    border-right: 2px solid #7E0252;
    cursor: pointer;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 5px;
    padding-top: 10px;
}
input::file-selector-button{
    background-color: #ff204e;
    color: white;
    cursor:pointer;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 10px;
    padding: 10px;
    border: none;
    width: 150px;
    height: 70px;
}
input::file-selector-button:hover{
    background-color: #A0153E;
    transition: 300ms ease-in-out;
}
</style>