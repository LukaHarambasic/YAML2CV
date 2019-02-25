const pkg = require('./package')
const fs = require('fs')
const fm = require('front-matter')
import marked from 'marked'

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'link', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
    ]
  },

  node: {
    fs: "empty"
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'normalize.css/normalize.css',
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-sass-resources-loader',
      [
        '@/assets/scss/_settings.scss'
      ]
    ]
  ],

  /*
  ** Enviroment Vairbles
   */
  env: {
  },

  /*
  ** Generation configuration
  */
  generate: {
  },

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
        use: 'js-yaml-loader',
      })
      config.resolve.alias["vue"] = "vue/dist/vue.common";
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

function generateProjects() {
  const fileNames = fs.readdirSync('./content/portfolio/').map((file) => file.substring(0, file.length -3))
  const fileContents = fileNames.map((fileName) => fs.readFileSync('./content/portfolio/' + fileName + '.md', 'utf8'))
  return fileNames.map((name, index) => {
    const frontMatter = fm(fileContents[ index ])
    return frontMatter.attributes
  })
}
