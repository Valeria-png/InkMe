<script setup>
import DesignItem from '@/components/DesignItem.vue';
import filterItem from '@/components/FilterItem.vue';
import Navbar from '@/components/Navbar.vue';
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore();
const designs = ref([])



async function  getDesigns(){
    const response = await fetch (`https://inkmeapi.onrender.com/api/designs/user/${userStore.id}`)
    designs.value = await response.json()

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
        <DesignItem v-for ="design in designs" :key="design._id" :img="design.file" :name="design.name" :addedValue="design.added_value" :description="design.description" ></DesignItem>
        
    </div>
</template>