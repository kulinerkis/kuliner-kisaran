<template>
  <div
    id="join"
    class="relative mx-12 px-6 md:mx-24 lg:px-24 xl:px-40 mt-20 py-12 text-center leading-snug lg:leading-loose rounded-[25px] gradient-banner"
  >
    <div class="relative z-50">
      <h1 class="font-bold text-24 lg:text-40 pb-4">INGIN JADI MITRA?</h1>
      <p class="dark-grey lg:text-20 text-14 leading-normal">
        Gabung bersama kami membangun UMKM terbesar di Asahan. Dapatkan
        pengalaman dan peluang bersama-sama untuk meraih kesuksesan
      </p>
      <nuxt-link to="/mitra">
        <Button content="Join With Us" class="mt-5 lg:text-18 text-14" />
      </nuxt-link>
    </div>
    <div class="absolute top-0 right-0 z-0 w-1/2 md:w-1/3 lg:w-auto">
      <img
        :src="require(`static/images/vector/vector736.png`)"
        alt="banner illustration"
      />
    </div>
  </div>
</template>

<script>
import Button from "../atoms/Button.vue";
export default {
  components: { Button },
};
</script>

<style></style>
