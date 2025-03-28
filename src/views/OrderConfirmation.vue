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

    <div v-for="(product, index) in products" :key="index" class="flex flex-col gap-1 px-6 mb-4">
        <span class="font-semibold">Producto {{ index + 1 }}: {{ product.name }}</span>
        <span>Cantidad: {{ product.quantity }}</span>
        <span>Precio por unidad: {{ formatCurrency(product.unitPrice) }}</span>
        <span>Valor agregado: {{ formatCurrency(product.added_value) }}</span>
        <span>Precio total: {{ formatCurrency(product.totalPrice) }}</span>
      </div>
    <div class="mt-4">
      <p class="text-lg font-semibold">Subtotal: {{ formatCurrency(subtotal) }}</p>
      <p class="text-lg">IVA (16%): {{ formatCurrency(iva) }}</p>
      <p class="text-xl font-bold text-dark-pink">Total a pagar: {{ formatCurrency(total) }}</p>
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
const orderId = ref(route.params.id);
const clabe = ref("982938208912");

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(amount);
};

const goHome = () => {
  router.push("/");
};

const fetchOrderDetails = async () => {
  try {
    const response = await fetch(`https://inkmeapi.onrender.com/api/orders/${orderId.value}`);
    if (!response.ok) throw new Error("Error al obtener la orden");

    const orderData = await response.json();
    
    // Obtener productos y diseños
    const [productsResponse, designsResponse] = await Promise.all([
      fetch("https://inkmeapi.onrender.com/api/products"),
      fetch("https://inkmeapi.onrender.com/api/designs"),
    ]);

    if (!productsResponse.ok || !designsResponse.ok) throw new Error("Error obteniendo productos o diseños");

    const productsData = await productsResponse.json();
    const designsData = await designsResponse.json();

    // Mapear los productos de la orden con la información de la API
    products.value = orderData.items.map(item => {
      const productId = item.designedproduct_id?.product_id;
      const designId = item.designedproduct_id?.design_id;

      const product = productsData.find(p => p._id === productId);
      const design = designsData.find(d => d._id === designId);

      // Obtener el precio por unidad según la cantidad
      const unitPrice = product ? getUnitPrice(item.amount, product) : 0;
      const addedValue = design ? design.added_value : 0;

      return {
        name: product && design ? `${product.name} + ${design.name}` : "Producto sin diseño",
        quantity: item.amount,
        unitPrice: unitPrice,
        added_value: addedValue,
        totalPrice: item.amount * (unitPrice + addedValue),
      };
    });

    // Calcular los totales igual que en Cart.vue
    subtotal.value = products.value.reduce((total, item) => total + item.totalPrice, 0);
    iva.value = subtotal.value * 0.16;
    total.value = subtotal.value + iva.value;

  } catch (error) {
    console.error("❌ Error fetching order details:", error);
  }
};

// Función para obtener el precio según la cantidad
const getUnitPrice = (quantity, product) => {
  if (!product) return 0;
  if (quantity < 51) return product.lvl1_price;
  if (quantity < 201) return product.lvl2_price;
  return product.lvl3_price;
};


onMounted(fetchOrderDetails);
</script>
