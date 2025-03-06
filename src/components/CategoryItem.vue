<template>
  <router-link to="/categoria">
    <button class="flex items-center hover:scale-105 transition font-inter gap-2 bg-[#00224D] text-white rounded-xl p-4 w-70 justify-center">
      <img :src="img" alt="" class="size-12 bg-white rounded-md p-1" />
      <span>
        {{ nombreCategoria }}
      </span>
    </button>
  </router-link>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    nombreCategoria: String,
    img: String
  }
}
</script>
  