<template>
  <div class="bg-pink-100 p-8 rounded-lg shadow-lg text-center max-w-2xl mx-auto">
    <div class="flex justify-between items-start">
      <div></div>
      <img src="/public/inkme logo.png" alt="" class="lg:w-36 w-20 hover:cursor-pointer hover:scale-105 transition mr-4 lg:mr-0" @click="goHome">
    </div>

    <h2 class="text-2xl font-bold text-pink-900 mt-4">¡Gracias por realizar tu compra!</h2>
    <p class="text-sm text-pink-800 mt-2">
      Referencia de tu pedido (Escríbelo en el concepto de tu pago para poder identificarlo)
    </p>

    <div class="mt-6 text-pink-900 font-semibold">
      <p class="mb-2">Tu orden es: <strong>{{ orderId }}</strong></p> <!-- ID de la orden -->
      <div v-for="(product, index) in products" :key="index" class="flex flex-col gap-1 px-6 mb-4">
  <span class="font-semibold">Producto {{ index + 1 }}: {{ product.name }}</span>
  <span>Cantidad: {{ product.quantity }}</span>
  <span>Precio por unidad: {{ formatCurrency(product.unitPrice) }}</span>
  <span>Precio total: {{ formatCurrency(product.totalPrice) }}</span>
</div>

    </div>

    <p class="mt-4 text-pink-900 font-medium">CLABE: {{ clabe }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const products = ref([]);
const subtotal = ref(0);
const iva = ref(0);
const total = ref(0);
const orderId = ref(route.params.id); // ID de la orden desde URL
const clabe = ref("982938208912");

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(amount);
};

const goHome = () => {
  router.push("/");
};

onMounted(() => {
  if (route.query.products) {
    products.value = JSON.parse(route.query.products);
    subtotal.value = route.query.subtotal;
    iva.value = route.query.iva;
    total.value = route.query.total;
  }
});
</script>
