<template>
  <div>
    <Navbar />
    <Form v-on:submit="submitData($event)" />
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/organisms/Footer";
import Navbar from "../mitra/views/Navbar.vue";
import Form from "../mitra/views/Form.vue";

export default {
  components: { Footer, Navbar, Form },
  data() {
    return {
      listOfData: {
        fullname: "Muhammad Ihsan BB",
        whatsapp: "081269085794",
        email: "ihsanbatubara94@gmail.com",
        address: "Diponegoro No.370",
        typeProduct: "Makanan",
        name: "",
        // isLoadingSubmit: false,
        // isShowModalCheckout: false,
      },
    };
  },
  methods: {
    routeToThankyouPage() {
      this.$router.push(`/thankyou?name=${this.name}`);
    },
    submitData(newData) {
      // this.isLoadingSubmit = true;
      this.listOfData = newData;
      const today = new Date();
      const newForm = new FormData();
      ``;
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbwaaq_Q8NXXOKDnCT50i9kgSWc7fdUhnqRRppn7RPHTQ-hIHX0/exec";

      const fetches = [];
      let isSuccess = true;
      const date = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const fullDate = `${date}/${month}/${year}`;

      const hour = today.getHours();
      const minute = today.getMinutes();
      const time = `${hour}:${minute}`;
      this.name = newData.fullname;

      newForm.append("Nama", newData.fullname);
      newForm.append("Produk", newData.typeProduct);
      newForm.append("Wa", newData.whatsapp);
      newForm.append("Email", newData.email);
      newForm.append("Alamat", newData.address);
      newForm.append("Date", fullDate);
      newForm.append("Time", time);

      fetches.push(
        fetch(scriptUrl, {
          method: "POST",
          body: newForm,
          changeOrigin: true,
        }).catch((error) => {
          console.error("Error!", error.message);
          alert(error.message);
          isSuccess = false;
        })
      );
      this.routeToThankyouPage();
      // Promise.all(fetches).then((res) => {
      //   this.isShowModalCheckout = false;
      //   this.isLoadingSubmit = false;
      // });
    },
  },
};
</script>

<style></style>
