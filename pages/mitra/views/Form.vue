<template>
  <div
    class="relative mt-32 bg-white rounded-t-[25px] md:rounded-t-[55px] pb-[0px] md:pb-[161px] px-[24px] sm:px-[24px] md:px-[380px] top-[-130px] sm:top-[-130px] md:-top-16 -mb-16 md:-mb-0"
  >
    <div class="lg:pt-[72px] md:pt-[72px] sm:pt-[32px] pt-[32px]">
      <div class="space-y-[16px] lg:space-y-[40px]">
        <Input
          label="Nama Lengkap"
          v-model="dataMitra.fullname"
          placeholder="Masukkan Nama Lengkap"
        />

        <Dropdown
          title="Jenis Usaha"
          @click="dropdownProduct"
          :choosedList="dataMitra.typeProduct"
          :isOpen="isOpenProduct"
          :listDropdown="typeProductions"
          @click-list="chooseProduct"
        />

        <Input
          label="Nomor Whatsapp"
          v-model="dataMitra.whatsapp"
          placeholder="Masukkan Nomor Whatsapp"
        />

        <Input
          label="Email"
          v-model="dataMitra.email"
          placeholder="Masukkan Email"
        />

        <Input
          label="Alamat Lengkap"
          v-model="dataMitra.address"
          placeholder="Masukkan Alamat Lengkap"
        />
      </div>
    </div>
    <Button
      class="rounded h-[64px] w-full lg:w-[240px] mt-[40px] md:mb-[57px] mb-[0px] lg:float-right"
      content="Daftar"
      :is-loading="isLoadingSubmit"
      @click="$emit('submit', dataMitra)"
    />
  </div>
</template>
<script>
import Button from "~/components/atoms/Button";
import Input from "~/components/atoms/Input";
import Dropdown from "~/components/atoms/Dropdown";
export default {
  components: { Button, Dropdown, Input },
  data() {
    return {
      dataMitra: {
        fullname: "",
        whatsapp: "",
        email: "",
        address: "",
        typeProduct: "Jenis Produk",
      },

      isOpenProduct: false,
      typeProductions: ["Makanan", "Minuman", "Makanan dan Minuman"],
      isLoadingSubmit: false,
    };
  },

  methods: {
    dropdownProduct() {
      this.isOpenProduct = !this.isOpenProduct;
    },

    chooseProduct(param) {
      this.dataMitra.typeProduct = param;
      this.isOpenProduct = !this.isOpenProduct;
      this.typeProduct = "";
    },
  },
};
</script>

<style></style>
