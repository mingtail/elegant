import Vue from 'vue'
import Router from 'vue-router'
import Spin from '@/components/spin/spin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'spin',
      component: Spin
    }
  ]
})
