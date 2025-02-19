<template>
    <div class="bg-white m-0 min-h-screen">
      <!-- Sección principal -->
      <section class=" py-20">
        <div class="bg-red-500 text-white p-16 rounded-lg">
          <h1 class="text-6xl font-bagel-fat-one">De tu imaginación, <br> a la puerta de tu casa</h1>
          <p class="mt-4 text-2xl">Escoge uno de nuestros productos personalizables, <br> sube tu diseño, recibe tu creación</p>
          <div class="absolute top-30 right-18 p-4">
            <img src="../assets/img/image 1.png" alt="head" class="w-35" /></div>
          <button class="mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded text-lg transition-transform transform hover:scale-110">
            Empezar a personalizar ahora
          </button>
        </div>
        <div class=" text-center m-0 bg-pink-100 p-16 rounded-lg">
          <h2 class=" text-center text-5xl font-bagel-fat-one text-[#7E0252]">Gana <span class="text-[#FF204E] ">dinero</span>  con tus <span class="text-[#FF204E] ">diseños</span></h2>
          <p class="mt-4 text-xl text-[#A0153E]">Publica tu diseño para toda la comunidad, y recibe comisiones por cada venta.</p>
          <img src="../assets/img/Frame 30.png" alt="frames" class="mx-auto " />
          <button class="mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded text-lg transition-transform transform hover:scale-110">
            
            Subir un diseño ahora
          </button>
        </div>
      </section>
  
      <!-- Sección de precios -->
      <section class="text-center py-20">
        <h2 class="text-5xl font-bagel-fat-one text-[#7E0252]">Precios a <span class="text-[#FF204E]">tu</span> medida</h2>
        <p class="mt-4 text-2xl text-[#A0153E]">3 Niveles de precios</p>
        <div class="flex justify-center gap-10 mt-6 text-3xl font-bold">
          <div class="text-red-600 font-bagel-fat-one">
            Menudeo<p class="text-lg font-normal">1-50 pzas</p>
          </div>
          <div class="text-red-600 font-bagel-fat-one">
            Mayoreo 1<p class="text-lg font-normal">51-200 pzas</p>
          </div>
          <div class="text-red-600 font-bagel-fat-one">
            Mayoreo 2<p class="text-lg font-normal">201+ pzas</p>
          </div>
        </div>
        <p class="mt-6 text-xl text-[#A0153E]">Ofrecemos precios de menudeo o mayoreo de acuerdo a tus necesidades personales.</p>
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
    }
  }
  </script>
  