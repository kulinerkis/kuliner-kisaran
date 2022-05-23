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
      <div class="container">
        <div
          class="relative px-6 md:px-12 lg:px-24 xl:px-40 mt-20 py-12 text-center leading-snug lg:leading-loose rounded-[25px] gradient-banner"
        >
          <div class="relative z-50">
            <h1 class="font-bold text-24 lg:text-40 pb-4">INGIN JADI MITRA?</h1>
            <p class="dark-grey lg:text-20 text-14 leading-normal">
              Gabung bersama kami membangun UMKM terbesar di Asahan. Dapatkan
              pengalaman dan peluang bersama-sama untuk meraih impian
            </p>
            <nuxt-link to="/career">
              <Button content="Join With Us" class="mt-5 lg:text-18 text-14" />
            </nuxt-link>
          </div>
          <div class="absolute top-0 right-0 z-0 w-1/2 md:w-1/3 lg:w-auto">
            <img
              :src="require(`/images/vector/vector736.png`)"
              alt="banner illustration"
            />
          </div>
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
          photo: "/images/product/abon.jpg",
        },
        {
          name: "Bawang Goreng Unye",
          photo: "/images/product/bawanggoreng.jpg",
        },
        {
          name: "Bakso Frozen",
          photo: "/images/product/bakso.jpg",
        },
        {
          name: "Gurami Bakar",
          photo: "/images/product/guramibakar.jpg",
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
