// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',

    ],
    plugins: [{ src: '~/plugins/aos.ts', mode: 'client' },],


    css: ['~~/assets/styles/main.css']
  })