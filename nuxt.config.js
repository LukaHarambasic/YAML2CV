const pkg = require('./package')
const fs = require('fs')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Your CV',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      { name: 'theme-color', content: '#E2EBF0' },
      {
        hid: 'description',
        name: 'description',
        content: 'Come in and get to know me! :)'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'link', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },

  node: {
    fs: 'empty'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2E2E3E' },

  /*
  ** Global CSS
  */
  css: ['normalize.css/normalize.css', '@/assets/scss/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [['nuxt-sass-resources-loader', ['@/assets/scss/_settings.scss']]],

  /*
  ** Enviroment Vairbles
   */
  env: {},

  /*
  ** Generation configuration
  */
  generate: {},

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader'
      })
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: { fix: true }
        })
      }
    }
  }
}
