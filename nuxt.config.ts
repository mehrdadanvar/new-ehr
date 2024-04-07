// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  ui: {
    icons: ["solar"],
  },
  googleFonts: {
    families: {
      "Source Sans 3": true,
    },
  },
});


