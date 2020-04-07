import pkg from './package'
const env = require('dotenv').config()
// import data from './store/index'
// const axios = require('axios')
export default {
  mode: 'universal',
  env:env.parsed,

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.description,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {name: 'author', content: 'John Wanyoike'},
      { 'http-equiv': 'refresh', content: '5' },
      {name: 'title', content: 'ContiPartner Your Fitment Professionals'},
      
      {property: 'og:title', content: 'Silverstone | Silverstone ContiPartner' },
      {property: 'og:type', content: 'Website' },
      {property: 'og:description', content: 'ContiPartner is a one-stop Fitment Centre for automotive products & services e.g tyres, alignment, batteries, shocks, car service, wipers, car care products & accessories' },
      {property: 'og:site_name', content: 'Silverstone ContiPartner Your Fitment Professionals' },
      {property: 'og:url', content: 'https://silverstone.co.ke/' },
      {property: 'og:image', content: 'https://www.silverstone.co.ke/favicon.ico' },
      {property: 'article:published_time', content: '2019-07-19T13:50:44+03:00' },
      {property: 'article:modified_time', content: '2019-07-19T13:50:44+03:00' },

      {property: 'og:locale', content: 'en_KE' },
      {property: 'og:locale:alternate', content: 'en_KE' },

      {itemprop: 'name', content: 'Silverstone ContiPartner' },
      {itemprop: 'description', content: 'ContiPartner is a one-stop Fitment Centre for automotive products & services e.g tyres, alignment, batteries, shocks, car service, wipers, car care products & accessories'},
      {itemprop: 'image', content: 'https://www.silverstone.co.ke/favicon.ico' },

      {hid: 'keyword', name: 'keyword', content: 'Performance Tyres, Cheap tyres, Car tyres, Passenger tyres, Commercial tyres, Agricultural tyres, 4x4 Tyres, SUV tyres, Tyre fitting, Oil Change, Batteries, Brakes, Car Service, Suspension, Wheel Balancing, Wheel Alignment, Car Accessories,Continental, Hankook, General,Toyo, Sailun, Zeta, Birla, Galaxy, Monroe, King Springs, AutoXpress, Wabco Tyres, Maxxis Tyres, Kingsway Tyres, Yana, Sameer Africa, Rob’s Magic, Pirelli, Goodyear, Michelin, Yokohama, Bridgestone, Yana, Summit, Apollo, Kumho, Falken, Achilles, ContiPartner, Silverstone'},
      {hid: 'description', name: 'description', content: 'Silverstone ContiPartner Your Fitment Professionals.' },
      
      {name: 'msapplication-TileColor', content: '#FB9833' },
      {name: 'theme-color', content: '#FB9833' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CRoboto+Slab:400,700%7CMaterial+Icons'},
      {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css'},
    ],
    script: [
      {src: '/js/jquery.min.js',body: true},
      {src: '/js/popper.min.js',body: true},
      {src: '/js/bootstrap-material-design.min.js',body: true},
      {src: '/js/jasny-bootstrap.min.js',body: true},
      {src: '/js/modernizr.js',body: true},
      {src: '/js/vertical-nav.js',body: true},
      {src: '/js/material-kit.min-v=2.0.2.js',body: true},
      {src: '/js/material-kit-demo.js',body: true},
      {src: '/jquery-easing/jquery.easing.min.js',body: true},
      {src: '/fancybox/js/jquery.fancybox.min.js',body: true},
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FB9833', size: '3px' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/material-kit.min-v=2.0.2.css',
    '~/assets/demo.css',
    '~/assets/vertical-nav.css',
    '~/assets/animate.min.css',
    '~/assets/app.scss',
    'vue-plyr/dist/vue-plyr.css',
    '~/assets/slick-carousel/slick/slick.css',
    '~/assets/fancybox/css/jquery.fancybox.min.css'
  ],

  generate: {
    routes: [
      '/continentalpattern/CONTICROSSCONTACT LX SPORT',
      '/continentalpattern/CONTIPREMIUMCONTACT 2',
      '/continentalpattern/CONTISPORTCONTACT 1',
      '/continentalpattern/CONTISPORTCONTACT 3',
      '/continentalpattern/CONTISPORTCONTACT 5',
      '/continentalpattern/CONTIECOCONTACT 5',
      '/continentalpattern/CONTISPORTCONTACT 2',
      '/continentalpattern/CONTIPREMIUMCONTACT',
      '/continentalpattern/CONTIECOCONTACT CP',
      '/continentalpattern/CONTICROSSCONTACT AT',
      '/continentalpattern/CONTICROSSCONTACT LX2',
      '/continentalpattern/CONTICROSSCONTACT UHP',
      '/continentalpattern/CONTI4X4CONTACT',
      '/continentalpattern/CONTITRAC',
      '/continentalpattern/CONTIPREMIUMCONTACT 5',
      '/continentalpattern/CONTIPREMIUMCONTACT 6',
      '/continentalpattern/CONTISPORTCONTACT',
      '/continentalpattern/CONTISPORTCONTANT 5',
      '/continentalpattern/WORLDCONTACT 4X4',
      '/continentalpattern/CONTICROSSCONTACT LX',
      '/hankookpattern/RF10',
      '/hankookpattern/RH06',
      '/hankookpattern/RA23',
      '/hankookpattern/K715',
      '/hankookpattern/K110',
      '/hankookpattern/RH07',
      '/hankookpattern/K115',
      '/hankookpattern/K424',
      '/hankookpattern/K114',
      '/hankookpattern/K425',
      '/hankookpattern/RH12',
      '/hankookpattern/H437',
      '/hankookpattern/K117A',
      '/hankookpattern/K117',
      '/hankookpattern/RA33',
      '/hankookpattern/K120',
      '/hankookpattern/RT03',
      '/toyopattern/PROXES T1R',
      '/toyopattern/OPEN COUNTRY ATPLUS',
      '/toyopattern/PROXES C1S',
      '/toyopattern/OPEN COUNTRY UT',
      '/toyopattern/OPEN COUNTRY 785',
      '/toyopattern/TYHO8',
      '/toyopattern/PROXES T1 SPORT SUV',
      '/toyopattern/PROXES T1 SPORT',
      '/toyopattern/OPEN COUNTRY HT',
      '/toyopattern/OPEN COUNTRY MT',
      '/toyopattern/PROXES CF2S',
      '/toyopattern/NANO ENERGY',
      '/toyopattern/PROXES ST3',
      '/generalpattern/GRABBER AT',
      '/generalpattern/GRABBER GT',
      '/generalpattern/GRABBER AT2',
      '/generalpattern/GRABBER X3',
      '/generalpattern/GRABBER AT3',
      '/generalpattern/ALTIMAX COMFORT',
      '/generalpattern/ALTIMAX SPORT',
      '/zetapattern/MEGLIO',
      '/zetapattern/VERDANT',
      '/zetapattern/ETALON',
      '/zetapattern/IMPERO',
      '/sailunpattern/TERRAMAX HT',
      '/sailunpattern/ATREZZO TOURING LS',
      '/sailunpattern/ATREZZO ZSR',
      '/sailunpattern/ATREZZO Z4+AS',
      '/sailunpattern/ATREZZO SVR LX',
      '/sailunpattern/TERRAMAX CVR',
      '/sailunpattern/COMMERCIO VX1',
      '/sailunpattern/ATREZZO ELITE',
      '/sailunpattern/ATREZZO ECO',
      '/sailunpattern/ATREZZO',
      '/sailunpattern/TERRAMAX AT',
      '/sailunpattern/TERRAMAX MT',
    ]
  },

  // generate: {
  //   routes: function () {
  //     return axios.get('http://tdfapi:8888/api/articles')
  //     // return axios.get('http://arkapi.tdfwebsitedemos.com/api/articles')
  //     .then((res) => {
  //       return res.data.map((news) => {
  //         return '/selectnews/' + news.slug
  //       })
  //     })
  //   }
  // },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-plyr',
    '~/plugins/scrollto.js',
    {src: 'plugins/owl.js', ssr: false}, // Only works on client side
    { src: '~/plugins/vue-agile', ssr: false },
    { src: "~plugins/slick-slide.js", ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/analytic.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    // '@nuxtjs/google-analytics',
  ],

  axios: {
    baseURL: process.env.API_URL
  },

  googleAnalytics: {
    id: 'UA-12301-2'
  },

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
