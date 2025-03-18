<template>
  <div class="flex items-center space-x-4 mb-6">
      <router-link to="/admin">
       <img src="/public/inkme logo.png" alt="Logo Inkme" class="w-50" />
      </router-link>
      <div class="flex space-x-2 overflow-auto">
        <div @click="currentDesign = designs" v-for="designs in designsToApprove" class="min-w-20 h-24 bg-gray-300 rounded cursor-pointer">
          <img  :src="designs.file" class="w-full h-full object-cover" alt="">
        </div>
      </div>
    </div>
    <div class="p-6 max-w-4xl mx-auto rounded-lg">
      <div class="grid grid-cols-3 gap-4">
        <!-- Imagen principal -->
        <div class="col-span-1 bg-gray-300 h-80 rounded-md overflow-hidden">
          <img  :src="currentDesign.file" alt="" class="w-full h-full object-cover">
          
        </div>
        
        <!-- Información del diseño -->
        <div class="col-span-2 space-y-4">
          <div>
            <label class="block text-gray-600">Título del diseño</label>
            <input 
              type="text" 
              v-model="currentDesign.name" 
              class="w-full border p-2 rounded-xl text-dark-pink font-bold"
              :readonly="!isEditable"
            >
          </div>
          
          <div>
            <label class="block text-gray-600">Descripción del diseño</label>
            <textarea 
              v-model="currentDesign.description" 
              class="w-full border p-2 rounded-xl text-navy"
              :readonly="!isEditable"
            ></textarea>
          </div>
          
          <button 
            class="bg-light-pink text-dark-pink p-2 rounded-xl cursor-pointer hover:scale-105 transition"
            @click="toggleEditable"
          >
            Editar nombre o descripción
          </button>
  
          <div class="flex justify-between mt-6">
            <button @click="updateDesign(true)" class="bg-neon-pink text-white px-6 py-2 rounded-xl cursor-pointer hover:scale-105 transition">Aprobar Diseño</button>
            <button @click="updateDesign(false)" class="bg-dark-pink text-white px-6 py-2 rounded-xl cursor-pointer hover:scale-105 transition">Desaprobar Diseño</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';

const isEditable = ref(false);
const designsToApprove = ref([]);
const currentDesign = ref({});


const toggleEditable = () => {
  isEditable.value = !isEditable.value; // Cambia el estado de edición
};

 //api requests

 const updateDesign = async (isApprovedBool) => {
  console.log(currentDesign.value.name)
  const newName = currentDesign.value.name;
  const newDescription = currentDesign.value.description;
  console.log('voyaqui')
   const response = await fetch (`https://inkmeapi.onrender.com/api/designs/${currentDesign.value._id}`, 
   {
     method: "PUT",
     headers: {
       "Content-Type": "application/json",
     },
     body:JSON.stringify({
       name: newName,
       description: newDescription,
       isApproved: isApprovedBool,
       file: currentDesign.value.file,
       user_id: currentDesign.value.user_id,
       added_value: currentDesign.value.added_value,
       text: currentDesign.value.text ,
       text_color: currentDesign.value.text_color
     })
   })
   const data = await response.json()
   console.log(data)
   designsToApprove.value.splice(0,1);
 }
 const getDesignsToApprove = async () => {
   const response = await fetch ("https://inkmeapi.onrender.com/api/designs")
   const data = await response.json();
   designsToApprove.value = data.filter(design => design.isApproved === false );
   currentDesign.value = designsToApprove.value[0];
 }

onMounted(() => {
  getDesignsToApprove()
});
</script>
  
  <style scoped>
  </style>
  