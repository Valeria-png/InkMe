<template>
  <div class="flex gap-4 p-4 border-b">
    <img
      :src="item.product_id?.file || item.designedproduct_id?.file || '/placeholder.png'"
      alt="Producto"
      class="w-16 h-16 object-cover"
    />
    <div>
      <p class="font-bold">
        {{ item.product_id?.name || item.designedproduct_id?.name || 'Producto personalizado' }}
      </p>
      <p class="text-gray-500">Cantidad: {{ item.amount || item.quantity }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>
