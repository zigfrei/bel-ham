// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    baseURL: '/bel-ham/',
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ["~/assets/styles/main.css"],
  modules: ['@nuxt/icon', '@nuxt/image'],
    icon: {
    customCollections: [
      {
        prefix: "icons",
        dir: "./assets/icons",
      },
    ],
  },
  nitro: {
    preset: 'github_pages',
  },
})