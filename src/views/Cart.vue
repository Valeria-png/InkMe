<template>
  <Navbar />
  <div
    class="grid sm:grid-cols-1 gap-4 xl:px-48 lg:px-36 md:px-24 sm:px-12 pb-10"
  >
    <p class="font-inter text-4xl text-navy font-semibold mb-6">
      Carrito de compras
    </p>
    <CartItem
      v-for="item in cartItems"
      :key="item._id"
      :item="item"
      @update="updateItem"
      @remove="removeItem"
    />
    <span
      class="flex flex-col gap-3 items-center mt-4 text-navy font-inter text-2xl font-semibold"
    >
      <p>Subtotal: ${{ subtotal }}</p>
      <p>IVA: ${{ (subtotal * 0.16).toFixed(2) }}</p>
      <p class="text-dark-pink font-bold text-3xl">
        Total a pagar: ${{ (subtotal * 1.16).toFixed(2) }}
      </p>
      <button
        @click="goToOrderConfirmation"
        class="cursor-pointer bg-neon-pink text-white rounded-lg py-2 px-4"
      >
        Proceder al pago
      </button>
    </span>
  </div>
</template>

<script setup>
import CartItem from "@/components/CartItem.vue";
import Navbar from "@/components/Navbar.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
const router = useRouter();
import { ref, computed, onMounted } from "vue";
const goToOrderConfirmation = async () => {
  try {
    const order = {
      user_id: userStore.id,
      status: "pending",
      items: cartItems.value.map((item) => ({
        product_id: item.product._id, // producto base
        designedproduct_id: item.designedproduct_id,
        amount: item.quantity,
      })),
      total: subtotal.value,
    };

    console.log("Orden a enviar:", order);

    const response = await fetch("https://inkmeapi.onrender.com/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error("Error al crear la orden");
    }

    const orderData = await response.json();
    console.log("Orden creada:", orderData);

    await clearCart();

    // 🔽 Cambia aquí: Pasamos la orden completa como query (con JSON.stringify)
    router.push({
      path: "/confirmacion-pago",
      query: { order: JSON.stringify(orderData) },
    });
  } catch (error) {
    console.error("Error procesando la orden:", error);
  }
};


const cartItems = ref([]);

const fetchCartData = async () => {
  try {
    const cartResponse = await fetch(
      `https://inkmeapi.onrender.com/api/cart/${userStore.id}`
    );
    const cartData = await cartResponse.json();

    const productsResponse = await fetch(
      "https://inkmeapi.onrender.com/api/products"
    );
    const productsData = await productsResponse.json();

    const designsResponse = await fetch(
      "https://inkmeapi.onrender.com/api/designs"
    );
    const designsData = await designsResponse.json();

    cartItems.value = cartData.items.map((item) => {
      const design = designsData.find(
        (d) => d._id === item.designedproduct_id.design_id
      );
      const product = productsData.find(
        (p) => p._id === item.designedproduct_id.product_id
      ); // Get product data
      // Use the correct price level based on the quantity
      const unitPrice = getUnitPrice(item.amount, product);

      return {
        _id: item._id,
        cartId: cartData._id,
        designedproduct_id: item.designedproduct_id._id,
        name: design ? design.name : "Producto sin diseño",
        imagen:
          design && design.file
            ? design.file
            : "https://via.placeholder.com/150",
        price: item.amount * unitPrice,
        unitPrice: unitPrice,
        level: getLevel(item.amount),
        quantity: item.amount,
        product: product, // Store product reference
      };
    });
  } catch (error) {
    console.error("Error fetching cart data:", error);
  }
};

// Get unit price based on quantity and product's price tiers
const getUnitPrice = (quantity, product) => {
  if (!product) return 0; // If no product found, return 0

  if (quantity < 51) return product.lvl1_price;
  if (quantity < 201) return product.lvl2_price;
  return product.lvl3_price;
};

const getLevel = (quantity) => {
  if (quantity < 51) return "Nivel menudeo";
  if (quantity < 201) return "Nivel mayoreo 1";
  return "Nivel mayoreo 2";
};

const updateItem = async (updatedItem) => {
  try {
    const response = await fetch(
      `https://inkmeapi.onrender.com/api/cart/${updatedItem.cartId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [
            {
              designedproduct_id: updatedItem.designedproduct_id,
              amount: updatedItem.quantity,
            },
          ],
        }),
      }
    );

    if (!response.ok) throw new Error("Failed to update cart");

    // Find and update the corresponding item
    const index = cartItems.value.findIndex((i) => i._id === updatedItem._id);
    if (index !== -1) {
      const item = cartItems.value[index];
      item.quantity = updatedItem.quantity;
      item.unitPrice = getUnitPrice(updatedItem.quantity, item.product); // Use stored product data
      item.price = updatedItem.quantity * item.unitPrice;
      item.level = getLevel(updatedItem.quantity);
    }
  } catch (error) {
    console.error("Error updating cart:", error);
  }
};

const removeItem = async (designedProductId, cartId) => {
  try {
    await fetch(
      `https://inkmeapi.onrender.com/api/cart/${cartId}/item/${designedProductId}`,
      { method: "DELETE" }
    );
    cartItems.value = cartItems.value.filter(
      (item) => item.designedproduct_id !== designedProductId
    );
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};

const clearCart = async () => {
  try {
    console.log(cartItems);
    await fetch(
      `https://inkmeapi.onrender.com/api/cart/${cartItems.value[0].cartId}`,
      { method: "DELETE" }
    );
    cartItems.value = [];
  } catch (error) {
    console.error("Error clearing cart:", error);
  }
};

const subtotal = computed(() =>
  cartItems.value.reduce((total, item) => total + item.price, 0)
);

onMounted(fetchCartData);
</script>
