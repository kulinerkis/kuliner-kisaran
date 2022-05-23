<template>
  <section id="product" class="relative py-10 md:py-14 lg:py-20 bg-main">
    <div class="relative">
      <h2
        class="container relative w-full text-center mt-5 mb-10 text-24 lg:text-40 leading-tight font-semibold"
      >
        <span class="font-bold">Product</span> Best Seller
      </h2>
      <div
        class="flex space-x-8 overflow-x-scroll hide-scroll-bar p-6 xl:p-0 xl:justify-center xl:overflow-x-visible ml-2 md:ml-8 lg:ml-12 xl:ml-0"
      >
        <div v-for="(product, id) in productlist" :key="id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../atoms/Button.vue";
import ProductCard from "../mollecules/ProductCard.vue";

export default {
  components: { ProductCard, Button },
  data() {
    return {
      productlist: [
        {
          name: "Abon Bebek",
          photo: "abon.jpg",
        },
        {
          name: "Bawang Goreng Unye",
          photo: "bawanggoreng.jpg",
        },
        {
          name: "Bakso Frozen",
          photo: "bakso.jpg",
        },
        {
          name: "Gurami Bakar",
          photo: "guramibakar.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.gradient-banner {
  background: linear-gradient(
      0deg,
      #ffffff 10.12%,
      #2e89ff 1300.12%,
      rgba(255, 255, 255, 0) 250%
    ),
    #2e89ff;
}
</style>
