<template>
    <div class="bg-white m-0 min-h-screen">
      <!-- Sección principal -->
      <section class="py-20">
        <div class="bg-[#FF204E] text-white p-16 rounded-lg relative">
          <h1 class="text-7xl font-bagel-fat-one">
            De tu imaginación, <br />
            a la puerta de tu casa
          </h1>
          <p class="mt-4 text-3xl">
            Escoge uno de nuestros productos personalizables, <br />
            sube tu diseño, recibe tu creación
          </p>
  
          <!-- Contenedor de imágenes (íconos) -->
          <div class="absolute top-0 right-70 p-10">
            <img src="../assets/img/image 1.png" alt="head" class="w-45" />
          </div>
          <div class="absolute bottom-5 right-20 p-4">
            <img src="../assets/img/image 2.png" alt="door package" class="w-40" />
          </div>
          <div class="absolute bottom-5 left-270 p-4">
            <img src="../assets/img/Arrow 2.png" alt="package" class="w-35" />
          </div>
  
          <!-- Botón con animación -->
          <button
            @click="startCustomizing"
            class="mt-5 px-15 py-5 text-white text-2xl font-semibold rounded-xl border-2 border-white bg-gradient-to-r from-red-500 via-pink-700 to-indigo-900 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-l"
          >
            Empezar a personalizar ahora
          </button>
        </div>
  
        <div class="text-center m-0 bg-pink-100 p-16 rounded-lg bg-[#FCDEE4]">
          <h2 class="text-center text-6xl font-bagel-fat-one text-[#7E0252]">
            Gana <span class="text-[#FF204E]">dinero</span> con tus <span class="text-[#FF204E]">diseños</span>
          </h2>
          <p class="mt-8 text-xl text-[#A0153E]">Publica tu diseño para toda la comunidad, y recibe comisiones por cada venta.</p>
          <img src="../assets/img/Frame 30.png" alt="frames" class="mx-auto mt-10" />
          <button
            @click="uploadDesign"
            class="mt-9 px-9 py-5 text-white text-xl font-semibold rounded-xl border-1 border-white bg-gradient-to-r from-red-500 via-pink-700 to-indigo-900 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-l"
          >
            Subir un diseño ahora
          </button>
        </div>
      </section>
  
      <!-- Sección de precios -->
      <section class="text-center py-0">
        <h2 class="text-7xl font-bagel-fat-one text-[#7E0252]">
          Precios a <span class="text-[#FF204E]">tu</span> medida
        </h2>
        <p class="mt-10 text-3xl text-[#A0153E]">3 Niveles de precios</p>
        <div class="flex justify-center gap-10 mt-10 text-5xl font-bold">
          <div class="text-red-600 font-bagel-fat-one">
            Menudeo<p class="text-4xl font-normal">1-50 pzas</p>
          </div>
          <div class="text-red-600 font-bagel-fat-one">
            Mayoreo 1<p class="text-4xl font-normal">51-200 pzas</p>
          </div>
          <div class="text-red-600 font-bagel-fat-one">
            Mayoreo 2<p class="text-4xl font-normal">201+ pzas</p>
          </div>
        </div>
  
        <p class="mt-6 text-2xl text-[#A0153E]">Ofrecemos precios de menudeo o mayoreo de acuerdo a tus necesidades personales.</p>
      </section>
  
      <!-- Incluir Footer aquí -->
    </div>
    <Footer />
  </template>
  
  <script>
  import Footer from '../components/Footer.vue'; // Asegúrate de que la ruta sea correcta
  
  export default {
    components: {
      Footer
    },
    methods: {
      startCustomizing() {
        // Lógica para iniciar la personalización (puede ser redirigir a otra página o abrir un modal)
        alert("¡Empezando a personalizar tu producto!");
      },
      uploadDesign() {
        // Lógica para subir el diseño (puede ser redirigir a un formulario o abrir un modal)
        alert("¡Sube tu diseño ahora!");
      }
    }
  }
  </script>
  