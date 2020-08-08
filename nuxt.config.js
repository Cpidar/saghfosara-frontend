
const getRoutes = require('./utils/getRoutes.js')

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: 'fa',
      dir: 'rtl'
    },
    title: 'سقف و سرا' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Staatliches' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    // 'uikit/dist/css/uikit.min.css',
    'uikit/dist/css/uikit-rtl.min.css',
    'uikit/dist/css/uikit-rtl.css',
    // 'uikit/dist/css/uikit.css',
    // 'vue-agile/dist/VueAgile.css',
    // 'vue-slick-carousel/dist/vue-slick-carousel.css',
    '@assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    // { src: '~/plugins/vueagile.js', mode: 'client' },
    // { src: './plugins/vue-slick-carousel.js' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // '@nuxtjs/pwa',
    // '@nuxt/content',
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: 'UA-173357207-1'
  },

  loading: true,
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap'
  ],

  axios: {
    baseURL: 'http://saghfosara.ir/api', // Used as fallback if no runtime config is provided
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },

  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: "http://localhost/api/graphql"
  //     }
  //   }
  // },

  sitemap: {
    routes() {
      return getRoutes();
    },
    path: '/sitemap.xml',
    gzip: true,
    generate: false,
  },

  env: {
    // strapiBaseUri: process.env.API_URL || "http://localhost"
    apiUrl: 'http://saghfosara.ir/api',
    baseUrl: 'http://saghfosara.ir/bk',
    imagePath: 'http://saghfosara.ir/bk/storage/uploads',
    apiToken: 'account-7fe22184138b26f1dc495a91aeb006'
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    // analyze: true
  }
}
