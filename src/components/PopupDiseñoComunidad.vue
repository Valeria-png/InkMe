<template>
    <div class="flex shadow-md justify-center items-center w-screen h-screen backdrop-blur-xl">
        <div class="rounded-2xl bg-light-pink p-12 justify-center sm:w-[900px] sm:h-[450px] w-[90%] sm:m-0 mb-[2rem] h-[90vh] relative">
            <button class="rounded-full p-2 bg-navy text-white absolute -top-4 -right-4 cursor-pointer hover:scale-105 transition hover:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="size-6 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="flex gap-6 items-center">
                <div class="relative">
                    <img src="https://i.pinimg.com/736x/a6/27/63/a627634e9ffd3e3c5ecc6b18aeb94a61.jpg" alt="" class="w-72 h-86 rounded-lg">
                    <div class="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-cart-plus-fill text-neon-pink hover:cursor-pointer hover:scale-105 transition hover:text-navy" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                        </svg>
                    </div>
                </div>
                <div class="div flex flex-col gap-2 h-86 justify-between">
                    <div class="flex flex-col gap-2">
                        <h2 class="text-neon-pink font-bagel-fat-one text-3xl">$ 000.00</h2>
                        <h2 class="text-dark-violet text-inter text-3xl	font-semibold text-wrap">Nombre Artículo Título de Artículo</h2>
                        <p class="text-dark-violet font-inter">Nombre Creador</p>
                        <div class="flex gap-6">
                            <select name="" id="" v-model="selectedLevel"   class="text-navy font-inter outline-neon-pink bg-white rounded-lg">
                                <option v-for="level in levels" :key="level.min" :value="level">{{ level.label }}</option>
                            </select>
                            <div class="rounded-xl bg-neon-pink h-full flex items-center justify-items-center w-auto" >
                                <button @click="decrementQuantity" class="text-white pe-1 ps-3 border-0 text-2xl pb-1 font-bold ">-</button>
                                <span class="mx-2 text-2xl">
                                <input type="number" v-model="quantity"  class="w-20 rounded-lg text-2xl max-w-xs text-center outline-none bg-white no-spinner " />
                                </span>
                                <button @click="incrementQuantity" class=" text-white ps-1 pe-3 border-0 text-2xl pb-1 font-bold ">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-6">
                        <p class="text-navy font-inter text-wrap">Descripción descripción lorem ipsum dolor</p>
                        <button class="bg-neon-pink w-full rounded-xl text-xl place-self-center p-2 text-white text-semibold font-inter hover:scale-105 transition hover:bg-dark-pink">Comprar Ahora</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref,watch } from 'vue';

    const levels = [
        { label: "Menudeo   1-50 pzas.", min: 1, max: 50 },
        { label: "Mayoreo 1 51-200 pzas.", min: 51, max: 200 },
        { label: "Mayoreo 2 201+ pzas.", min: 201, max: Infinity }
    ];

    const selectedLevel = ref(levels[0]);
    const quantity = ref(selectedLevel.value.min);

 

    watch(selectedLevel, (newLevel) => {
        quantity.value = newLevel.min;
    })

    function updateLevel() {
        selectedLevel = levels.find((level) => 
        level.min === quantity.value || 
        level.max === quantity.value || 
        (quantity.value > level.min && quantity.value <= level.max)
    ) || levels[levels.length - 1]; // Default to last level if out of range
    };
// const newLevel= levels.find((level) => level.min <= quantity.value && level.max >= quantity.value) || levels.find((level)=> level.min === quantity.value) || levels.find((level) => level.max === quantity.value);
        // selectedLevel.value = newLevel;
        // console.log(newLevel);
    function incrementQuantity (){
        quantity.value++;
        updateLevel();
    }
    function decrementQuantity(){
        if (quantity.value === 1) {
            quantity.value = 1
            updateLevel();
        }
        else{
         quantity.value--;   
        }
        
        
    }
    console.log(quantity.value);

</script>

<style scoped>
    option{
        color: #00224d;
    }
</style>