<template>
  <div>
    <Navigation />
    <Benefit />
    <Product />
    <Join />
    <ProductSelection />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Benefit from "../components/organisms/Benefit.vue";
import Contact from "../components/organisms/Contact.vue";
import Footer from "../components/organisms/Footer.vue";
import Join from "../components/organisms/Join.vue";
import Navigation from "../components/organisms/Navigation.vue";
import Product from "../components/organisms/Product.vue";
import ProductSelection from "../components/organisms/ProductSelection.vue";
export default {
  components: {
    Navigation,
    Benefit,
    Contact,
    Product,
    Footer,
    Join,
    ProductSelection,
  },
  name: "IndexPage",
};
</script>
