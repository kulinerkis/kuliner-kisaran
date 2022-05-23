<template>
  <div
    class="rounded-xl flex flex-col bg-white w-[270px] h-[344px] py-9 shadow-xl items-center text-center hover:bg-contain"
    :style="
      require(`background-image: url(${product.photo});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      `)
    "
  >
    <div>
      <h2 class="font-bold pt-6 text-white text-3xl">{{ product.name }}</h2>
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

<style></style>
