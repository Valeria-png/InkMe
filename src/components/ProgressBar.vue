<template>
  <div class="flex items-center w-full">
    <div class="relative flex w-full items-center">
      <!-- Línea de progreso corregida -->
      <div class="absolute left-0 w-full border-t-2 border-gray-300 transform -translate-y-3"></div>

      <div v-for="(step, index) in steps" :key="index" class="relative flex flex-col items-center w-full">
        <!-- Círculo -->
        <div 
          class="flex items-center justify-center w-10 h-10 rounded-full border-4 transition-colors"
          :class="{
            'bg-red-500 border-red-500': index <= currentStep,
            'bg-gray-300 border-gray-300': index > currentStep
          }"
        >
          <svg v-if="index <= currentStep" class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <!-- Etiqueta -->
        <span class="mt-2 text-sm font-medium text-gray-700">{{ step }}</span>
      </div>
    </div>
  </div>
</template>

  <script>
  export default {
    props: {
      steps: {
        type: Array,
        required: true
      },
      currentStep: {
        type: Number,
        required: true
      }
    }
  }
  </script>
  