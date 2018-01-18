import Vue from 'vue'
import App from './App'
import router from './router'
import Load from './plugins/load'

import './assets/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(Load)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
