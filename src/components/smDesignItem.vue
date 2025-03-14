<template>
    <div class="flex flex-wrap gap-3 p-4">
        <img   v-for="design in designs" @click="selectDesign(design._id)" :key="design._id" :id="design._id" :src="design.file" alt="" :class="{'border-4 border-neon-pink' : selectedDesignId === design._id, 'size-42 object-cover rounded-lg': true}">
    </div>
    
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore();
const emits = defineEmits(['chosen-design'])
const designs = ref([])
const selectedDesignId = ref(null)
async function  getDesigns(){
    const response = await fetch ("https://inkmeapi.onrender.com/api/designs")
    const data = await response.json()
    designs.value = data.filter(design => design.user_id === userStore.id)
}
onMounted(() => {
    getDesigns()
})

const selectDesign = ( designId ) => {
    selectedDesignId.value = designId
    emits('chosen-design', selectedDesignId.value)
}


</script>

<style scoped>

</style>