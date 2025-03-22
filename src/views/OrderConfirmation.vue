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
    <p class="mb-2">Tu orden es:</p>
    <div v-for="(product, index) in products" :key="index" class="flex flex-col gap-1 px-6 mb-4">
      <span class="font-semibold">Producto {{ index + 1 }}: {{ product.name }}</span>
      <span>Cantidad: {{ product.quantity }}</span>
    </div>
  </div>

    <p class="mt-6 font-bold text-lg text-pink-900">
      Total a pagar: {{ formatCurrency(total) }}
    </p>

    <p class="mt-2 text-pink-900 font-medium">CLABE: {{ clabe }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from "../stores/userStore"; // Importar userStore

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const products = ref([]);
const total = ref(0);
const clabe = ref('9480385932492928');

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(amount);
};

const clearCartAfterConfirmation = async () => {
  try {
    if (products.value.length > 0) {
      await fetch(
        `https://inkmeapi.onrender.com/api/cart/${products.value[0].cartId}`,
        { method: "DELETE" }
      );
      console.log("Carrito limpiado correctamente");
    }
  } catch (error) {
    console.error("Error al limpiar carrito:", error);
  }
};

const createOrder = async () => {
  try {
    const orderItems = products.value.map((item) => ({
      product_id: item.designedproduct_id, // Usa el designedproduct_id (que es el producto personalizado)
      amount: item.quantity,
    }));

    const orderData = {
      user_id: userStore.id, // El ID del usuario logueado
      items: orderItems,
      total: total.value,
      status: "pending", // o el estado que prefieras
    };

    const response = await fetch('https://inkmeapi.onrender.com/api/orders', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) throw new Error("Error al crear la orden");

    console.log("Orden creada exitosamente");

  } catch (error) {
    console.error("Error creando la orden:", error);
  }
};

const goHome = () => {
  router.push('/');
};

onMounted(() => {
  if (route.query.cart) {
    products.value = JSON.parse(route.query.cart);
    total.value = products.value.reduce((sum, item) => sum + item.price, 0);
    createOrder(); // 👈 Aquí creamos la orden
    clearCartAfterConfirmation();
  }
});
</script>

