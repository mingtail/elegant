import Vue from 'vue'
import App from './App.vue'
import router, { ROUTER_CONF } from './router'
import store from './store'
import Load from './plugins/load'
import Loading from './plugins/loading'
import Toast from './plugins/toast'

import './assets/stylus/index.styl'

Vue.use(Load)
Vue.use(Loading, {color: '#2ED335'})
Vue.use(Toast)

Vue.config.productionTip = false

router.beforeEach(function (to, from, next) {
  const toIndex = ROUTER_CONF.indexOf(to.path);
  const fromIndex = ROUTER_CONF.indexOf(from.path);

  // tab切换页单独处理, 使用fade
  const indexPages = ['/home', '/course', '/qa', '/my'];
  const hasTo = indexPages.includes(to.path);
  const hasFrom = indexPages.includes(from.path);

  store.commit('setTabState', hasTo);

  if(hasTo && hasFrom) {
    store.commit('setTransitionName', 'fade');
  } else {
    if(toIndex > fromIndex) {
      store.commit('setTransitionName', 'forward');
    } else {
      store.commit('setTransitionName', 'back');
    }
  }
  console.log(to); // 打印路由信息
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1];
    window.location.href = `http${url}`
  } else {
    next()
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
