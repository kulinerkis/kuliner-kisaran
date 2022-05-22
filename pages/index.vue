<template>
  <div>
    <Navigation />
    <Benefit />
    <Product />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Benefit from "../components/organisms/Benefit.vue";
import Contact from "../components/organisms/Contact.vue";
import Footer from "../components/organisms/Footer.vue";
import Navigation from "../components/organisms/Navigation.vue";
import Product from "../components/organisms/Product.vue";
export default {
  components: { Navigation, Benefit, Contact, Product, Footer },
  name: "IndexPage",
};
</script>
