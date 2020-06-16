module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'BLOG',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '博客,Vue,Nuxt,Egg,前端,Js,Node,HTML,CSS' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */
  css: [

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    // baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:7001/' : 'http://cboy.eyuanxing.cn:7001/'
    baseURL: 'http://localhost:3001/'
  },
  proxy: {
    // '/api/': 'http://127.0.0.1:7001/',
    // '/public/': {
    //   target: 'http://127.0.0.1:7001/',
    // },
    // '/article': {
    //   target: 'http://localhost:7001',
    //   ws: true,
    //   changeOrigin: true
    // }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

