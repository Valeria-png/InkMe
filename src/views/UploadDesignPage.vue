<template>
    <Navbar></Navbar>
    <div class="max-w-5xl mt-10 mb-30">
      <div popover id="graciasModal" class="shadow-xl border-2 border-neon-pink  bg-light-pink w-3/8  gap-2 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 font-inter rounded-xl">
          <div class="flex flex-col items-center gap-2 p-6">
            <img  src="/public/inkme logo.png" alt="" class="w-30">
            <p class="font-bold text-3xl text-dark-violet text-center">Gracias por tu aporte!</p>
            <p class="text-dark-pink">Se te notificará por medio de tu correo electronico si el diseño ha sido aprobado. </p>
            <button @click="router.push('/')" class="bg-neon-pink text-white rounded-full cursor-pointer p-2 hover:scale-105">Volver al inicio</button>
          </div>
      </div>
      <h1 class="text-4xl text-navy font-bold mb-6 ml-5">Añadir nuevo diseño</h1>

      <p v-if="error" class="text-red-500 mb-4 ml-5">{{ error }}</p>
  
      <form @submit.prevent="subirDiseno" class="grid grid-cols-3 gap-6">
        <div class="flex flex-col items-center">
          <label class="w-50 h-50 bg-light-pink rounded-lg flex items-end justify-center cursor-pointer">
            <input type="file" class="hidden" @change=" previewImage">
            <img id="preview" src="" alt="" class="w-50 h-50 rounded-lg hidden">
              <span id="subirEtiqueta" class="bg-neon-pink text-white p-2 w-full rounded-b-lg rounded-t-none flex gap-2 justify-center items-center">Añadir archivo
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 10l-4-4m0 0l-4 4m4-4v12"></path>
                </svg>
              </span>
          </label>
        </div>
  
        <div class="col-span-1">
          <label class="block text-lg font-semibold text-dark-pink">Agregar Título</label>
          <input v-model="titulo" type="text" class="w-full p-2 mt-1 rounded-lg bg-light-pink outline-neon-pink">
  
          <label class="block mt-4 text-lg font-semibold text-dark-pink">Agregar Valor del Diseño</label>
          <input v-model="valor" type="number" class="w-full p-2 mt-1 rounded-lg bg-light-pink text-dark-pink font-bold outline-neon-pink" placeholder="$000.00">
  
          <p class="text-sm text-gray-600 mt-1">
            Este es el valor que se agregará al precio base del producto al que se aplique
          </p>
        </div>
  
        <div class="col-span-1 ">
          <label class="block text-lg font-semibold text-dark-pink">Agregar Descripción</label>
          <textarea v-model="descripcion" class="w-full h-32 p-2 mt-1 rounded-lg bg-light-pink outline-neon-pink"></textarea>

          <button  type="submit" class="bg-neon-pink text-white px-6 py-2 rounded-lg w-50 mt-4 cursor-pointer hover:scale-105 transition hover:bg-dark-pink">Subir diseño</button>
        </div>
      </form>
    </div>
    <Footer />
  </template>
<!-- cambiar el user id para que sea dinamico -->
<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

const router = useRouter();

const titulo = ref("");
const valor = ref("");
const descripcion = ref("");
const archivo = ref(null);



function previewImage(event){
  preview.src=URL.createObjectURL(event.target.files[0])
  archivo.value=event.target.files[0]
  subirEtiqueta.classList.add('hidden')
  preview.classList.remove('hidden')
}

const subirDiseno = async () => {
  const formData = new FormData();
  console.log(userStore.id)
  formData.append('user_id',userStore.id)
  
  formData.append('file',archivo.value)
  formData.append('name',titulo.value)
  formData.append('added_value',valor.value)
  formData.append('text',null)
  formData.append('text_color',null)
  formData.append('description',descripcion.value)
  
  const response = await fetch('https://inkmeapi.onrender.com/api/designs',{
    method: 'POST',
    body:formData
  })
  const data = await response.json()
  console.log(data)
  if (data){
    graciasModal.togglePopover()
    titulo.value = ""
    valor.value = ""
    descripcion.value = ""
    archivo.value = null
  }

}










</script>
