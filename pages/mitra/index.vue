<template>
  <div>
    <Navbar />
    <Form />
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/organisms/Footer";
import Navbar from "../mitra/views/Navbar.vue";
import Form from "../mitra/views/Form.vue";
export default {
  components: { Footer, Navbar, Form },
};
</script>

<style></style>
