<template>
  <div class="px-12 py-8">
    <!-- Header con logo y carrusel -->
    <div class="flex items-center space-x-4 mb-6">
      <router-link to="/admin">
        <img src="/public/inkme logo.png" alt="Logo Inkme" class="w-35" />
      </router-link>

      <!-- Carrusel de diseños -->
      <div class="flex space-x-2 overflow-auto">
        <div
          v-for="design in designsToApprove"
          :key="design._id"
          @click="selectDesign(design)"
          class="min-w-14 h-14 bg-gray-300 rounded cursor-pointer flex justify-center items-center border-2"
          :class="{
            'border-neon-pink': currentDesign._id === design._id,
            'border-transparent': currentDesign._id !== design._id
          }"
        >
          <img :src="design.file" alt="" class="w-full h-full object-cover rounded" />
        </div>
      </div>
    </div>

    <!-- Estado del Producto -->
    <div class="px-12 py-8">
      <h1 class="text-dark-blue font-bold text-xl mb-4">Estado del Producto</h1>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6" v-if="currentDesign && currentDesign._id">
        <div class="bg-white p-6 rounded-2xl shadow flex items-center">
          <div class="w-20 h-20 bg-gray-200 rounded-lg mr-4 overflow-hidden">
            <img :src="currentDesign.file" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1">
            <!-- Nombre del diseño -->
            <div class="flex items-center gap-2 mb-2">
              <p class="font-bold text-dark-blue">{{ currentDesign.name }}</p>
            </div>

            <!-- Descripción -->
            <textarea
              v-model="currentDesign.description"
              class="w-full border p-2 rounded-xl text-navy mb-3"
              :readonly="!isEditable"
            ></textarea>

            <!-- Botones -->
            <div class="flex gap-2">
              <a
                :href="currentDesign.file"
                target="_blank"
                class="bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-1"
              >
                📎 Abrir Archivo
              </a>
              <button
                class="bg-light-pink text-dark-pink px-4 py-2 rounded-lg"
                @click="toggleEditable"
              >
                ✏️ Editar
              </button>
              <button
                @click="updateDesign(true)"
                class="bg-neon-pink text-white px-4 py-2 rounded-lg flex items-center gap-1"
              >
                ✔️ Aprobar
              </button>
              <button
                @click="updateDesign(false)"
                class="bg-dark-pink text-white px-4 py-2 rounded-lg flex items-center gap-1"
              >
                ❌ Desaprobar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-gray-500">No hay diseños pendientes por aprobar.</div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import { ref, onMounted } from 'vue';

const designsToApprove = ref([]);
const currentDesign = ref({});
const isEditable = ref(false);

// Seleccionar diseño
const selectDesign = (design) => {
  currentDesign.value = { ...design };
  isEditable.value = false;
};

// Toggle edición
const toggleEditable = () => {
  isEditable.value = !isEditable.value;
};

// API: Obtener diseños pendientes
const getDesignsToApprove = async () => {
  const response = await fetch("https://inkmeapi.onrender.com/api/designs");
  const data = await response.json();
  designsToApprove.value = data.filter((design) => design.isApproved === false);
  if (designsToApprove.value.length > 0) {
    currentDesign.value = designsToApprove.value[0];
  }
};

// API: Aprobar / Desaprobar diseño
const updateDesign = async (isApprovedBool) => {
  const updatedDesign = {
    name: currentDesign.value.name,
    description: currentDesign.value.description,
    isApproved: isApprovedBool,
    file: currentDesign.value.file,
    user_id: currentDesign.value.user_id,
    added_value: currentDesign.value.added_value,
    text: currentDesign.value.text,
    text_color: currentDesign.value.text_color,
  };

  const response = await fetch(`https://inkmeapi.onrender.com/api/designs/${currentDesign.value._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedDesign),
  });

  const data = await response.json();
  console.log(data);

  // Eliminar el diseño aprobado/desaprobado
  designsToApprove.value = designsToApprove.value.filter(
    (design) => design._id !== currentDesign.value._id
  );

  // Mostrar el siguiente diseño
  if (designsToApprove.value.length > 0) {
    currentDesign.value = designsToApprove.value[0];
  } else {
    currentDesign.value = {};
  }
};

onMounted(() => {
  getDesignsToApprove();
});
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
