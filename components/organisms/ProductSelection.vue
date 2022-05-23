<template>
  <div class="bg-main">
    <div id="available-class" class="container py-10 md:py-14 lg:py-20">
      <h2
        class="text-24 lg:text-40 leading-tight tracking-tight font-semibold text-center lg:text-left"
      >
        <span class="font-bold">Produk </span> yang tersedia
      </h2>
      <div
        class="mt-4 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-8"
      >
        <ProductClass
          v-for="(item, id) in dataClasses"
          :key="id"
          :data-class="item"
          :id="id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductClass from "../mollecules/productClass.vue";
export default {
  components: {
    ProductClass,
  },
  data() {
    return {
      items: 4,
      dataClasses: [
        {
          id: 1,
          name: "Grilling",
          image: "hero2.jpeg",
          slug: "grilling",
          isActive: true,
          classType: [
            {
              name: "Start From",
              oriPrice: 35000,
              price: 25000,
            },
          ],
          benefits: ["Bebek Bakar", "Gurami Bakar"],
        },
        {
          id: 2,
          name: "Baking",
          image: "hero3.jpeg",
          slug: "baking",
          isActive: true,
          classType: [
            {
              name: "Start From",
              oriPrice: 35000,
              price: 25000,
            },
          ],
          benefits: ["Bolu Pisang", "Bolu Nenas"],
        },

        {
          id: 3,
          name: "Others",
          image: "hero4.jpeg",
          slug: "other",
          isActive: true,
          classType: [
            {
              name: "Start From",
              oriPrice: 5000,
              price: 2500,
            },
          ],
          benefits: [
            "Abon Bebek",
            "Telur Asin",
            "Bawang goreng",
            "Bakso Frozen",
            "Ceker ayam",
          ],
        },
        {
          id: 4,
          name: "Drinks",
          image: "hero5.jpeg",
          slug: "drink",
          isActive: false,
          classType: [
            {
              name: "Start From",
              oriPrice: 15000,
              price: 7500,
            },
          ],
          benefits: ["Sari Tebu", "Jahe Merah"],
        },
      ],
    };
  },
};
</script>

<style></style>
