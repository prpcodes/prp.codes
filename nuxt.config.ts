// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/plausible',
    'nuxt-umami'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  umami: {
    id: '0490f44f-39c6-4d51-8207-d7b60faee2ac',
    host: 'https://umami.p12h.com',
    autoTrack: true,
    ignoreLocalhost: true,
    proxy: 'cloak',
    logErrors: true
  }
})
