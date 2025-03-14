<template>
  <div class="bg-white m-0 min-h-screen">
    <!-- Sección principal -->
    <Navbar></Navbar>
    <section>
      <div class="bg-[#FF204E] text-white p-8 md:p-16 rounded-lg relative">
        <h1 class="text-4xl md:text-7xl font-bagel-fat-one">
          De tu imaginación, <br />
          a la puerta de tu casa
        </h1>
        <p class="mt-4 text-xl md:text-3xl font-inter">
          Escoge uno de nuestros productos personalizables, <br class="hidden md:inline" />
          sube tu diseño, recibe tu creación
        </p>

        <!-- Contenedor de imágenes (íconos) SOLO para escritorio -->
        <div class="hidden md:block absolute top-0 right-20">
          <img src="../assets/img/image 1.png" alt="head" class="w-28 md:w-45" />
        </div>
        <div class="hidden md:block absolute bottom-5 right-20">
          <img src="../assets/img/image 2.png" alt="door package" class="w-24 md:w-40" />
        </div>
        <div class="hidden md:block absolute bottom-5 right-80">
          <img src="../assets/img/Arrow 2.png" alt="package" class="w-20 md:w-35" />
        </div>

        <!-- Botón con navegación a /catalogo -->
        <router-link to="/catalogo">
          <button
            class="mt-5 px-6 md:px-15 py-3 md:py-5 text-white font-inter text-lg md:text-2xl font-semibold rounded-xl border-2 border-white bg-gradient-to-r from-neon-pink via-dark-violet to-navy transform transition duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-l"
          >
            Empezar a personalizar ahora
          </button>
        </router-link>
      </div>

      <!-- Segunda sección -->
      <div class="text-center m-0 bg-light-pink p-8 md:p-16 rounded-lg bg-[#FCDEE4] mt-6">
        <h2 class="text-3xl md:text-6xl font-bagel-fat-one text-[#7E0252]">
          Gana <span class="text-[#FF204E]">dinero</span> con tus <span class="text-[#FF204E]">diseños</span>
        </h2>
        <p class="mt-4 md:mt-8 text-lg md:text-xl font-inter text-[#A0153E]">
          Publica tu diseño para toda la comunidad, y recibe comisiones por cada venta.
        </p>
        <!-- Imagen SOLO para escritorio -->
        <img src="../assets/img/Frame 30.png" alt="frames" class="hidden md:block mx-auto mt-6 md:mt-10 w-40 md:w-auto" />

        <!-- Botón con navegación a /mis-disenos -->
        <router-link to="/subir-diseno">
          <button
            class="mt-6 md:mt-9 px-6 md:px-9 py-3 md:py-5 text-white text-lg md:text-xl font-inter font-semibold rounded-xl border border-white bg-gradient-to-r from-neon-pink via-dark-violet to-navy transform transition duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-l"
          >
            Subir un diseño ahora
          </button>
        </router-link>
      </div>
    </section>

    <!-- Sección de precios -->
    <section class="text-center p-8 md:p-16 flex flex-col gap-6">
      <h2 class="text-4xl md:text-7xl font-bagel-fat-one text-[#7E0252]">
        Precios a <span class="text-[#FF204E]">tu</span> medida
      </h2>
      <p class="text-xl md:text-3xl text-[#A0153E] font-inter">
        3 Niveles de precios
      </p>
      <div class="flex flex-col md:flex-row justify-center gap-5 md:gap-10 text-2xl md:text-5xl font-bold">
        <div class="text-neon-pink font-bagel-fat-one">
          Menudeo<p class="text-lg md:text-4xl font-normal">1-50 pzas</p>
        </div>
        <div class="text-neon-pink font-bagel-fat-one">
          Mayoreo 1<p class="text-lg md:text-4xl font-normal">51-200 pzas</p>
        </div>
        <div class="text-neon-pink font-bagel-fat-one">
          Mayoreo 2<p class="text-lg md:text-4xl font-normal">201+ pzas</p>
        </div>
      </div>

      <p class="text-lg md:text-2xl text-[#A0153E] my-2 font-inter">
        Ofrecemos precios de menudeo o mayoreo de acuerdo a tus necesidades personales.
      </p>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
</script>
