export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: "static",
  router: {
    base: "/Kuliner-Kisaran/",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Kuliner Kisaran",
    htmlAttrs: {
      lang: "id",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Kulliner Kisaran merupakan platform digital penyedia dan distributor olahan makanan dan minuman di Kabupaten Asahan",
      },
      { name: "format-detection", content: "telephone=no" },
      { hid: "image", property: "og:image", content: "/images/favicon.ico" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Kuliner Kisaran,handuck, Handuk, Olahan Bebek, Bebek Madura, Jual Bebek, Bebek, Bebek Lezat, Asahan, Ternak Bebek, Kuliner, Oleh - oleh, olahan bebek,gift, Beli Bebek , Pengusaha Bebek, Asahan Food, makanan di kisaran, keripik nenas, keripik pisang, kisaran food, kisaran corner",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "@/assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
