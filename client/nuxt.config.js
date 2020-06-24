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
    'element-ui/lib/theme-chalk/index.css',
    '~assets/font/iconfont.css',
    'highlight.js/styles/github.css',
    {
      src: '~assets/css/style.scss',
      lang: 'scss'
    },

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/marked.js'
    },
    // {
    //   src: '~/plugins/highlight.js'
    // },
    { src: '~assets/font/iconfont.js', ssr: false },
    { src: '~plugins/ElementUI', ssr: true },
    { src: '~plugins/axios.js', ssr: true },
    // { src: '~plugins/markdown-loader.js', ssr: true }
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
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    // baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:7001/' : 'http://cboy.eyuanxing.cn:7001/'
    // baseURL: 'http://localhost:1000/',
    // credentials: true // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001', // 目标接口域名
      // headers: { 'Content-Type': 'application/json', 'crossDomain': true },
      // timeout: 5000,
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
        changeOrigin: true, // 表示是否跨域
      }
    },
    '/article': {
      target: 'http://127.0.0.1:7001',
      // ws: true,
      changeOrigin: true
    }
  },
  /*
  ** Build configuration
  */
  build: {
    analyze: {
      analyzerMode: 'static'
    },
    // 按需引入element-ui
    babel: {
      plugins: [
        ["component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    },
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
    },
    // 防止多次打包
    vendor: ['element-ui', 'axios']
  }
}

