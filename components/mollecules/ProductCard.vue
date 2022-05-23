<template>
  <div
    class="relative rounded-xl flex flex-col w-[270px] h-[344px] shadow-xl items-center text-center overflow-hidden"
  >
    <img
      class="w-full h-full"
      :src="require(`static/images/produk/${product.photo}`)"
      alt="product"
    />

    <div class="absolute top-2">
      <h2 class="font-bold pt-16 text-white text-3xl">{{ product.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
/* :style="`background-image: url(../public/produk/${product.photo});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      `" */
</style>
