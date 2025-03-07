<template>
    <Navbar></Navbar>
    <div class="h-screen grid grid-cols-2 place-items-center">
        <span class="h-full">
            <h1 class="font-bagel-fat-one text-3xl text-navy font-semibold text tracking-widest mt-8 mb-16">PREGUNTAS FRECUENTES</h1>
            <span class="grid grid-cols-1 gap-6">
                <div v-for="(question, index) in questions" :key="index">
                    <h2 @click="activeAnswer = index" class="cursor-pointer hover:scale-105 transform transition font-inter text-2xl text-navy font-semibold">{{ question.question }}</h2>
                    <hr>
                </div>
            </span>
        </span>
        <span class="bg-light-pink h-full w-full grid grid-cols-1 place-items-center px-16">
            <div>
                <p class="font-inter text-2xl text-navy font-semibold">{{ questions[activeAnswer].answer }}</p>
            </div>
            <img class="w-40 h-auto align-self-end" src="../assets/img/inkme logo.png" alt="InkMe">
        </span>
    </div>
    <Footer></Footer>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const questions = [
    {question: "¿Cómo funcionan los niveles de precio?", answer: "Al realizar compras con un mayor número de unidades se le aplican descuentos por mayoreo. Los descuentos se aplican a cada producto por separado. El primer nivel (sin descuentos) se aplica en compras de entre 1 a 50 unidades, de 51 a 200 unidades se aplica el primer descuento por mayoreo, el mayor descuento de obtiene en compras mayores a las 200 unidades."},
    {question: "¿Cómo puedo subir mis propios diseños?", answer: "Dirigete al apartado de usuario en la arte superior de nuestra página, ahí encontrarás un botón para poder subir tus diseños. Sigue los líneamientos de la propia página para no tener ningún problema al momento de subir tu diseño"},
    {question: "¿Cuales son los metodos de pago?", answer: "Por el momento en InkMe solo contamos con transferencias electrónicas. Esperamos expandir los métodos de pago en un futuro para brindar una mayor comodidad a nuestros clientes al momento de realizar sus pagos"},
    {question: "¿Qué información guarda InkMe a cerca de mí?", answer: "Dentro de la base de datos de InkMe se almacenan tus datos de inicio de sesión como tu correo y tu contraseña encripada para poder contactarte en caso de algún problema. También guardamos información sobre tus compras en caso de algún problema con tus pagos"},
    {question: "¿Mis propios diseños son públicos?", answer: "Tú mismo puedes tomar esta decisión al momento de subir tu propio diseño. Puedes dejar que los dempas usuarios apliquen tu diseño dentro de sus productos o puedes subirlo unicamente para un producto propio"},
]

let activeAnswer = ref(0);
</script>