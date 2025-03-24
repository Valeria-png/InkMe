<template>
  <div class="px-12 py-8">
    <!-- Header -->
    <div class="flex items-center space-x-4 mb-6">
      <router-link to="/admin">
        <img src="/public/inkme logo.png" alt="Logo Inkme" class="w-35" />
      </router-link>

      <!-- Carrusel con número de órdenes -->
      <div class="flex space-x-2 overflow-auto">
        <div
          v-for="order in orders"
          :key="order._id"
          @click="selectOrder(order)"
          class="min-w-14 h-14 bg-gray-300 rounded cursor-pointer flex justify-center items-center border-2"
          :class="{
            'border-neon-pink': currentOrder._id === order._id,
            'border-transparent': currentOrder._id !== order._id
          }"
        >
          <p class="text-xs font-bold">#{{ order._id.slice(-4) }}</p>
        </div>
      </div>
    </div>

    <!-- Estado de la Orden -->
    <div class="px-12 py-8">
      <h1 class="text-dark-blue font-bold text-xl mb-4">Gestión de Órdenes</h1>

      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6" v-if="currentOrder && currentOrder._id">
        <div class="bg-white p-6 rounded-2xl shadow flex flex-col gap-4">
          <div>
            <p class="text-gray-600">Cliente: {{ currentOrder.user_id?.name || 'N/A' }}</p>
            <p class="text-gray-600">Correo: {{ currentOrder.user_id?.email || 'N/A' }}</p>
            <p class="text-gray-600">ID Orden: {{ currentOrder._id || 'N/A' }}</p>
            <p class="text-gray-600">Fecha: {{ new Date(currentOrder.date).toLocaleDateString('es-MX') }}</p>
            <p class="text-gray-600">Total: ${{ currentOrder.total }}</p>
            <p class="text-gray-600">Estado: 
              <span class="font-bold capitalize">{{ currentOrder.status }}</span>
            </p>
          </div>

          <!-- Barra de progreso -->
          <ProgressBar :steps="steps" :currentStep="currentStep" />

          <!-- Listado de productos dentro de la orden -->
          <div>
            <h2 class="font-bold mb-2">Productos:</h2>
            <ul>
              <li
                v-for="(item, index) in currentOrder.items"
                :key="index"
                class="mb-2 flex flex-col gap-1 border-b pb-2"
              >
                <p class="text-dark-blue font-bold">ID Producto: {{ item.designedproduct_id || item.product_id }}</p>
                <p class="text-gray-500">Cantidad: {{ item.amount || item.quantity }}</p>
              </li>
            </ul>
          </div>

          <!-- Botones de avance -->
          <div class="flex flex-wrap gap-2">
            <button
              @click="updateOrderStatus('openFile')"
              class="bg-neon-pink text-white px-4 py-2 rounded-lg flex items-center gap-1"
            >
              📄 Abrir Archivo
            </button>
            <button
              @click="updateOrderStatus('approveQuality')"
              class="bg-neon-pink text-white px-4 py-2 rounded-lg flex items-center gap-1"
            >
              ✔️ Aprobar Calidad
            </button>
            <button
              @click="updateOrderStatus('printReceipt')"
              class="bg-neon-pink text-white px-4 py-2 rounded-lg flex items-center gap-1"
            >
              🧾 Imprimir Recibo
            </button>
            <button
              @click="updateOrderStatus('printLabel')"
              class="bg-neon-pink text-white px-4 py-2 rounded-lg flex items-center gap-1"
            >
              🏷️ Imprimir Etiqueta de Envío
            </button>
          </div>

          <!-- Selector manual del estado -->
          <div class="mt-4">
            <label class="font-bold mb-2 block">Cambiar estado manualmente:</label>
            <select v-model="manualStatus" class="border rounded-lg p-2 w-full">
              <option value="Pedido">Pedido</option>
              <option value="Pagado">Pagado</option>
              <option value="Enviado">Enviado</option>
              <option value="En ruta">En ruta</option>
              <option value="Entregado">Entregado</option>
            </select>
            <button
              @click="applyManualStatus"
              class="mt-2 bg-dark-blue text-white px-4 py-2 rounded-lg"
            >
              Actualizar Estado
            </button>
          </div>

        </div>
      </div>

      <div v-else class="text-gray-500">No hay órdenes disponibles.</div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Footer from '@/components/Footer.vue';
import ProgressBar from '@/components/ProgressBar.vue';

const orders = ref([]);
const currentOrder = ref({});
const currentStep = ref(0); // Estado de la barra de progreso
const manualStatus = ref('');

// Pasos de la barra de progreso
const steps = ['Impresión', 'Control calidad', 'Empaquetado', 'Enviado', 'Entregado'];

// Mapeo del estado a pasos
const statusMap = {
  Pedido: 1,
  Pagado: 2,
  Enviado: 3,
  "En ruta": 4,
  Entregado: 5
};

// Seleccionar orden
const selectOrder = (order) => {
  currentOrder.value = { ...order };
  currentStep.value = statusMap[order.status] || 0; // Ajustar barra según el status actual
  manualStatus.value = order.status;
};

// Actualizar el estado de la orden y la barra de progreso (botones)
const updateOrderStatus = async (stepName) => {
  let newStatus = '';

  switch (stepName) {
    case 'openFile':
      currentStep.value = 1;
      newStatus = 'Pagado';
      break;
    case 'approveQuality':
      currentStep.value = 2;
      newStatus = 'Enviado';
      break;
    case 'printReceipt':
      currentStep.value = 3;
      newStatus = 'En ruta';
      break;
    case 'printLabel':
      currentStep.value = 4;
      newStatus = 'Entregado';
      break;
  }

  await saveOrderStatus(newStatus);
};

// Aplicar cambio manual del estado
const applyManualStatus = async () => {
  currentStep.value = statusMap[manualStatus.value] || 0;
  await saveOrderStatus(manualStatus.value);
};

// Función que actualiza en la API
const saveOrderStatus = async (status) => {
  try {
    const response = await fetch(`https://inkmeapi.onrender.com/api/orders/${currentOrder.value._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...currentOrder.value,
        status: status
      })
    });

    const updatedOrder = await response.json();
    console.log('Estado actualizado:', updatedOrder.status);

    // Actualizar localmente
    currentOrder.value.status = status;
    manualStatus.value = status;
    const index = orders.value.findIndex(order => order._id === currentOrder.value._id);
    if (index !== -1) {
      orders.value[index] = updatedOrder;
    }
  } catch (error) {
    console.error('Error al actualizar el estado:', error);
  }
};

// API: Obtener todas las órdenes
const getOrders = async () => {
  try {
    const response = await fetch("https://inkmeapi.onrender.com/api/orders");
    const data = await response.json();
    orders.value = data;
    if (orders.value.length > 0) {
      currentOrder.value = orders.value[0];
      currentStep.value = statusMap[currentOrder.value.status] || 0;
      manualStatus.value = currentOrder.value.status;
    }
  } catch (error) {
    console.error('Error al obtener órdenes:', error);
  }
};

onMounted(() => {
  getOrders();
});
</script>
