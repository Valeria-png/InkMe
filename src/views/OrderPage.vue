<template>
  <div>
    <Navbar />

    <ProgressBar :steps="steps" :currentStep="currentStep" />

    <div class="max-w-6xl mx-auto p-6">
      <h1 class="text-3xl text-center font-inter text-navy font-bold mb-8">Detalles de la orden</h1>

              <div v-for="(product, index) in productDetails" :key="index" class="product-card shadow-lg border-2 border-neon-pink bg-light-pink rounded-xl mb-6 p-6">
          <div class="flex flex-col items-center gap-4">
            
            <!-- Nombre del producto + diseño -->
            <p class="text-2xl text-dark-violet font-semibold text-center">
              {{ product.name }} + {{ product.design_name }}
            </p>

            <!-- Imagen del diseño -->
            <div v-if="product.image" class="image-container mb-4">
              <img :src="product.image" alt="Product Design Image" class="product-image" />
            </div>

            <!-- Detalles del producto y diseño -->
            <div class="text-center text-dark-pink">
              <p><strong>Descripción:</strong> {{ product.description }}</p>
              <p><strong>Valor Añadido:</strong> ${{ product.added_value.toFixed(2) }}</p>
              <p><strong>Cantidad:</strong> {{ product.amount }}</p>

              <!-- Total por producto -->
              <p><strong>Total por producto:</strong> ${{ ((product.unit_price + product.added_value) * product.amount).toFixed(2) }}</p>

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
      <!-- Mostrar el total del pedido con IVA desglosado -->
        <div class="order-total bg-light-pink shadow-lg border-2 border-neon-pink rounded-xl p-6 mt-8">
          <p class="text-xl text-dark-violet font-semibold text-center">
            <strong>Subtotal: ${{ (totalAmount / 1.16).toFixed(2) }}</strong>
          </p>
          <p class="text-xl text-dark-violet font-semibold text-center">
            <strong>IVA (16%): ${{ ((totalAmount / 1.16) * 0.16).toFixed(2) }}</strong>
          </p>
          <p class="text-2xl text-dark-violet font-bold text-center mt-2">
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
const orderDetails = ref({});

const steps = ['Pedido', 'Pagado', 'Enviado', 'En ruta', 'Entregado'];
const currentStep = ref(0);

// Calcular el total del pedido
const totalAmount = computed(() => {
  if (!productDetails.value.length) return 0;

  return productDetails.value.reduce((total, product) => {
    const unitPrice = product.unit_price ? parseFloat(product.unit_price) : 0;
    const addedValue = product.added_value ? parseFloat(product.added_value) : 0;
    const quantity = product.amount ? parseInt(product.amount) : 1;

    // Subtotal sin IVA
    const totalProduct = (unitPrice + addedValue) * quantity;
    
    console.log(`📊 Cálculo de subtotal: ${unitPrice} + ${addedValue} x ${quantity} = ${totalProduct}`);

    return total + totalProduct;
  }, 0) * 1.16; // Aplicar IVA del 16%
});



async function fetchOrderDetails() {
  try {
    console.log("🛠️ Fetching order details...");
    const response = await fetch(`https://inkmeapi.onrender.com/api/orders/${route.params.id}`);
    if (!response.ok) throw new Error("Error obteniendo la orden");

    const orderData = await response.json();
    console.log("✅ Orden obtenida:", orderData);
    order.value = orderData;

    // Ajustar la barra de progreso
    const statusSteps = ['Pedido', 'Pagado', 'Enviado', 'En ruta', 'Entregado'];
    currentStep.value = statusSteps.findIndex(step => step.toLowerCase() === orderData.status.toLowerCase()) || 0;

    // Obtener detalles de los productos y diseños
    const productPromises = orderData.items.map(async (item) => {
      const designedProductId = item.designedproduct_id?._id || item.designedproduct_id;
      console.log(`🔍 Buscando detalles para DesignedProduct ID: ${designedProductId}`);

      let productData = null, designData = null;

      if (designedProductId) {
        const resDesignedProduct = await fetch(`https://inkmeapi.onrender.com/api/designedproducts/${designedProductId}`);
        if (!resDesignedProduct.ok) throw new Error("Error obteniendo el producto diseñado");
        const designedProduct = await resDesignedProduct.json();
        console.log("📦 DesignedProduct obtenido:", designedProduct);

        if (designedProduct) {
          // Obtener `product_id` y `design_id`, sin importar si son objetos o strings
          const productId = designedProduct.product_id?._id || designedProduct.product_id;
          const designId = designedProduct.design_id?._id || designedProduct.design_id;

          console.log(`🎨 Design ID: ${designId}, 🏷️ Product ID: ${productId}`);

          if (productId) {
            const resProduct = await fetch(`https://inkmeapi.onrender.com/api/products/${productId}`);
            if (resProduct.ok) {
              productData = await resProduct.json();
              console.log("✅ Producto obtenido:", productData);
            } else {
              console.error("❌ Error obteniendo el producto");
            }
          }

          if (designId) {
            const resDesign = await fetch(`https://inkmeapi.onrender.com/api/designs/${designId}`);
            if (resDesign.ok) {
              designData = await resDesign.json();
              console.log("✅ Diseño obtenido:", designData);
            } else {
              console.error("❌ Error obteniendo el diseño");
            }
          }
        }
      }

      return {
        product_id: productData?._id || null,
        design_id: designData?._id || null,
        name: productData?.name || "Producto sin nombre",
        design_name: designData?.name || "Sin diseño",
        image: designData?.file || null,
        description: designData?.description || "No disponible",
        unit_price: productData?.lvl1_price || 0,
        added_value: designData?.added_value || 0,
        amount: item.amount || 1,
      };
    });

    const detailedProducts = await Promise.all(productPromises);
    console.log("📋 Productos detallados obtenidos:", detailedProducts);

    productDetails.value = detailedProducts;

  } catch (error) {
    console.error('❌ Error cargando el pedido:', error);
  }
}

onMounted(fetchOrderDetails);
</script>

