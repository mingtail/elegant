import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Load from './plugins/load'
import Loading from './plugins/loading'

import './assets/stylus/index.styl'

Vue.use(Load)
Vue.use(Loading, {color: '#2ED335'})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
