const pkg = require('./package')

module.exports = {
  mode: 'spa',

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
 transition: 'fade',
 
  loading: { color: '#EF3088' },

  /*
  ** Global CSS
  */
 css: ['~/assets/css/main.css'],
 css: ['~/assets/css/style.css'],
 
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { 
      defaultIconPack: 'fas', 
      materialDesignIconsHRef: "https://use.fontawesome.com/releases/v5.4.1/css/all.css" 
    }],
  ],
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
