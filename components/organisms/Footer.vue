<template>
  <div
    class="footer px-[24px] xl:px-40 pt-[28px] xl:pt-16 rounded-t-[25px] lg:rounded-t-[55px]"
  >
    <div
      class="grid container text-white md:grid md:grid-cols-2 justify-between lg:grid-cols-4 lg:gap-10"
    >
      <div class="max-w-md md:row-span-3 lg:col-span-2 md:pr-10 xl:pr-16">
        <img
          class="lg:w-[60px] w-[56px] md:mb-8"
          :src="require(`static/logo/K2.png`)"
          alt="Kuliner Kisaran logo"
        />
        <p
          class="tn:text-sm md:text-base md:mt-2 mt-[24px] mb-0 lg:mb-[30px] space-y-1"
        >
          Kuliner Kisaran merupakan platform digital penghubung antara produsen
          dan konsumen dan juga platform yang bertujuan membangun UMKM terbesar
          di Asahan.
        </p>
        <div class="md:flex flex-row space-x-4 hidden">
          <div v-for="(social, id) in SocialContact" :key="id">
            <Contact
              :linkImage="social.linkImage"
              :imageFile="social.imageFile"
            />
          </div>
        </div>
      </div>

      <div class="lg:mt-0">
        <h1
          class="font-bold tn:text-lg md:text-2xl lg:mb-4 xl:mb-8 pt-[40px] lg:pt-0"
        >
          Reach Us
        </h1>
        <div class="md:text-base my-2 space-y-4 xl:space-y-4">
          <div class="flex space-x-2">
            <img
              :src="require(`static/images/icons/contact/email-icon.svg`)"
              alt="mail icon"
            />
            <a href="mailto:digidev.id@gmail.com">
              <p>kulinerkisaran.id@gmail.com</p>
            </a>
          </div>
          <div class="flex space-x-2">
            <img
              :src="require(`static/images/icons/contact/phone-icon.svg`)"
              alt="phone icon"
            />
            <a href="https://api.whatsapp.com/send?phone=6282277068394"
              >+62 812-6908-5794</a
            >
          </div>
          <div class="flex space-x-2">
            <img
              :src="require(`static/images/icons/contact/location-icon.svg`)"
              alt="location icon"
            />
            <a href="">Jl. Diponegoro no.370 , Kisaran Baru, Asahan. 21216</a>
          </div>
        </div>
      </div>
    </div>

    <hr class="bg-[#484848] md:mt-0 mt-[40px] mx-[24px] md:hidden" />
    <div
      class="md:hidden flex-row space-x-4 flex justify-center mt-[40px] md:mt-0 lg:0"
    >
      <div v-for="(social, id) in SocialContact" :key="id">
        <Contact :linkImage="social.linkImage" :imageFile="social.imageFile" />
      </div>
    </div>
    <div class="text-center text-white md:mt-4 py-2 lg:py-4">
      <p>&copy; 2022 Kuliner-Kisaran.id. All rights reserved</p>
    </div>
  </div>
</template>

<script>
import Contact from "../mollecules/Contact.vue";
export default {
  components: { Contact },

  data() {
    return {
      SocialContact: [
        {
          linkImage: "https://instagram.com/",
          imageFile: "Instagram",
        },
        {
          linkImage: "https://www.Dribbble.com",
          imageFile: "Dribbble",
        },
        {
          linkImage: "https://www.twitter.com",
          imageFile: "Twitter",
        },
        {
          linkImage: "https://www.youtube.com",
          imageFile: "Youtube",
        },
      ],
    };
  },
};
</script>

<style>
.footer {
  background-color: #2d2d2d;
}
</style>
