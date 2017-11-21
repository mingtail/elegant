import Vue from 'vue'
import Router from 'vue-router'
import Spin from '@/components/spin/spin'
import CheckBox from '@/components/checkbox/checkbox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/spin',
      name: 'spin',
      component: Spin
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: CheckBox
    }
  ]
})
