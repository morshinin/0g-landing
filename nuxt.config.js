export default {
  head: {
    title: '0g Platform - Accelerated Web 3 integration service',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1'
      },
      { hid: 'description', name: 'description', content: 'Your portal to the Web 3 universe. Zero fees, global community, easy scalability and distribution.' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: ''
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['@/assets/styles/main.scss'],
  plugins: [
    { src: '~/plugins/scrollreveal.js', mode: 'client' },
    { src: '~/plugins/scrollto.js', mode: 'client' },
    { src: '~/plugins/scrollspy.js', mode: 'client' },
    { src: '~/plugins/scrollmagic.js', mode: 'client' },
    { src: '~/plugins/api.js', mode: 'client' },
    { src: '~/plugins/storage.js', mode: 'client' },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/dotenv',
    '@braid/vue-formulate/nuxt'
  ],
  build: {},
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'home',
        path: '/',
        component: resolve(__dirname, 'pages/index.vue'),
        children: [
          {
            name: 'cookie',
            path: 'cookie',
            component: resolve(__dirname, 'components/CookiePolicyPopup.vue'),
          },
          {
            name: 'privacy',
            path: 'privacy',
            component: resolve(__dirname, 'components/PrivacyPolicy.vue'),
          },
          {
            name: 'terms',
            path: 'terms',
            component: resolve(__dirname, 'components/Terms.vue'),
          },
        ]
      })
    }
  },
}
