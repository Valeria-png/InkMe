<script setup>
import DesignItem from '@/components/DesignItem.vue';
import filterItem from '@/components/FilterItem.vue';
import Navbar from '@/components/Navbar.vue';
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore();
const designs = ref([])

const imgs = [
    "https://i.pinimg.com/736x/53/a2/2a/53a22a82a236cf04b47c3c8978fe3e15.jpg",
    "https://i.pinimg.com/736x/42/71/1f/42711fe678fe5d36f1d16f9d15269ddf.jpg",
    "https://i.pinimg.com/736x/75/c3/49/75c349d62d1e012a6c1e672ba7b26285.jpg",
    "https://i.pinimg.com/736x/52/70/29/527029a5becd86419d4f256f8e25f5fb.jpg"
]
async function  getDesigns(){
    const response = await fetch ("https://inkmeapi.onrender.com/api/designs")
    const data = await response.json()
    designs.value = data.filter(design => design.user_id === userStore.id)
}
onMounted(() => {
    getDesigns()
})
</script>

<template>
    <Navbar></Navbar>
    <div class="px-10 py-4">
        <h1 class="font-inter text-3xl text-navy font-semibold">Mis diseños</h1>
    </div>
    <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:gap-20 md:gap-8 sm:gap-12 p-10">
        <DesignItem ></DesignItem>
        
    </div>
</template>