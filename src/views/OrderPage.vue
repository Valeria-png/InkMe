<template> 
  <div>
    <Navbar />

    <ProgressBar :steps="steps" :currentStep="currentStep" />

    <div class="max-w-6xl mx-auto p-6">
      <h1 class="text-3xl text-center font-inter text-navy font-bold mb-8">Detalles de la orden</h1>

      <div v-for="(product, index) in productDetails" :key="index" class="product-card shadow-lg border-2 border-neon-pink bg-light-pink rounded-xl mb-6 p-6">
        <div class="flex flex-col items-center gap-4">
          
          <!-- Nombre del diseño o producto -->
          <p class="text-2xl text-dark-violet font-semibold text-center">
            {{ product.design_id?.name || product.product_id || 'Producto sin nombre' }}
          </p>

          <!-- Imagen del diseño -->
          <div v-if="product.design_id?.file" class="image-container mb-4">
            <img :src="product.design_id.file" alt="Product Design Image" class="product-image" />
          </div>

          <!-- Detalles del diseño -->
          <div class="text-center text-dark-pink">
            <p><strong>Descripción:</strong> {{ product.design_id?.description || 'No disponible' }}</p>
            <p><strong>Valor Añadido:</strong> ${{ parseFloat(product.design_id?.added_value) || 0 }}</p>
            <p><strong>Cantidad:</strong> {{ product.amount  || 1 }}</p>

            <!-- Categoría según cantidad -->
            <p v-if="product.amount <= 50" class="text-xs text-gray-600">
              <strong>Menudeo:</strong> 1-50 pzas
            </p>
            <p v-else-if="product.amount <= 200" class="text-xs text-gray-600">
              <strong>Mayoreo 1:</strong> 51-200 pzas
            </p>
            <p v-else class="text-xs text-gray-600">
              <strong>Mayoreo 2:</strong> 201+ pzas
            </p>
          </div>
        </div>
      </div>

      <!-- Mostrar el total del pedido -->
      <div class="order-total bg-light-pink shadow-lg border-2 border-neon-pink rounded-xl p-6 mt-8">
        <p class="text-2xl text-dark-violet font-semibold text-center">
          <strong>Total del Pedido: ${{ totalAmount.toFixed(2) }}</strong>
        </p>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import ProgressBar from '../components/ProgressBar.vue';

const route = useRoute();
const order = ref(null);
const productDetails = ref([]);

const steps = ['Pedido', 'Pagado', 'Enviado', 'En ruta', 'Entregado'];
const currentStep = ref(0);

// Calcular el total del pedido
const totalAmount = computed(() => {
  return productDetails.value.reduce((total, product) => {
    const pricePerUnit = parseFloat(product.design_id?.added_value) || 0;
    const quantity = product.amount || 1;
    return total + pricePerUnit * quantity;
  }, 0);
});

// Función para agrupar los productos por ID y sumar sus cantidades
const groupProductsById = (items) => {
  const grouped = {};

  items.forEach(item => {
    const id = item.designedproduct_id?._id || item.product_id;
    if (grouped[id]) {
      grouped[id].quantity += item.quantity || 1; // Sumar cantidades
    } else {
      grouped[id] = { ...item, quantity: item.quantity || 1 };
    }
  });

  return Object.values(grouped);
};

async function fetchOrderDetails() {
  try {
    const response = await fetch(`https://inkmeapi.onrender.com/api/orders/${route.params.id}`);
    const orderData = await response.json();
    order.value = orderData;

    // ACTUALIZAR currentStep BASADO EN EL STATUS
    const status = order.value.status;
    const statusSteps = ['Pedido', 'Pagado', 'Enviado', 'En ruta', 'Entregado'];
    const stepIndex = statusSteps.findIndex(step => step.toLowerCase() === status.toLowerCase());
    currentStep.value = stepIndex !== -1 ? stepIndex : 0;

    // Agrupar productos y traer detalles
    const productPromises = order.value.items.map(async (item) => {
      const designedProductId = (typeof item.designedproduct_id === 'object' && item.designedproduct_id !== null) 
        ? item.designedproduct_id._id 
        : item.designedproduct_id;

      let designData = null;

      if (designedProductId) {
        const resDesignedProduct = await fetch(`https://inkmeapi.onrender.com/api/designedproducts/${designedProductId}`);
        designData = await resDesignedProduct.json();
      }

      return {
        ...item, 
        design_id: designData?.design_id || null // Guardamos solo el design_id
      };
    });

    const detailedProducts = await Promise.all(productPromises);
    productDetails.value = groupProductsById(detailedProducts); // Agrupar productos por id

  } catch (error) {
    console.error('Error cargando el pedido:', error);
  }
}

onMounted(fetchOrderDetails);
</script>

<style scoped>
/* Tus estilos actuales los dejamos igual */
.product-card {
  background-color: #f6e0e8;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  padding: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.image-container {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.bg-light-pink {
  background-color: #f6e0e8;
}

.bg-neon-pink {
  background-color: #f50057;
}

button {
  transition: all 0.3s ease;
}

button:hover {
  background-color: #f50057;
  transform: scale(1.05);
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
}

.order-total {
  background-color: #f6e0e8;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 2rem;
}
</style>
