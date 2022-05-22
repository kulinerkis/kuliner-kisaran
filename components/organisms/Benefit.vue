<template>
  <div id="benefit" class="py-10 md:py-14 lg:py-20 relative w-full">
    <div class="absolute w-full bottom-4 xl:top-40 left-0 -z-10">
      <img
        class="w-full"
        src="/images/vector/Vector123.png"
        alt="background benefit"
      />
    </div>

    <div class="container">
      <h2 class="text-24 lg:text-40 font-semibold tracking-tight text-center">
        <span class="font-bold">Keunggulan</span> Produk Kami
      </h2>
      <div
        class="relative pt-[72px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-4 z-50"
      >
        <BenefitCard
          v-for="(benefit, id) in dataBenefits"
          :key="id"
          :benefit="benefit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BenefitCard from "~/components/mollecules/BenefitCard";
export default {
  components: {
    BenefitCard,
  },
  data() {
    return {
      dataBenefits: [
        {
          title: "Halal",
          icon: "/images/vector/halal.png",
          start: "Olahan makanan dengan",
          bold: "label halal",
          end: "yang dapat membawa berkah buat tubuh.",
        },
        {
          title: "Higienis",
          icon: "/images/vector/higynic.png",
          start: "Alat dan bahan makanan yang selalu ",
          bold: "dijaga kebersihan",
          end: "dengan standart yang ditetapkan.",
        },
        {
          title: "Enak",
          icon: "/images/vector/nice.png",
          start: "Produk makanan dan minuman diolah dengan",
          bold: "bumbu rempah pilihan.",
          end: "untuk menggugah selera",
        },
        {
          title: "Tahan Lama",
          icon: "/images/vector/nature.png",
          start: "Produk olahan menggunakan",
          bold: "bahan pengawet alami",
          end: "menjadikan tahan lama",
        },
      ],
    };
  },
};
</script>

<style>
.vector {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
